"""Build a standalone player Wiki from only referenced media, preserving originals."""
from __future__ import annotations

from collections import Counter, defaultdict
import csv
import hashlib
import json
from pathlib import Path
import re
import shutil

DEST = Path(__file__).resolve().parents[1]
SOURCE = DEST.parent / '_Wiki'
FOLDERS = {
    'weapon': '武器', 'armor': '防具装备', 'enemy': '怪物',
    'companion': '随从', 'resource': '资源材料', 'consumable': '补给消耗品',
    'building': '建筑设施', 'other': '其他物品', 'recipes': '制作配方',
    'locations': '地图地点', 'quests': '任务', 'companions': '随从',
    'skills': '技能', 'notes': '故事笔记', 'factions': '势力', 'sets': '套装',
    'mechanics': '抽取机制', 'site': '页面背景',
}
ASSET_KEYS = {'iconBundleId', 'iconSmallBundleId', 'referenceIconBundleId'}


def read_json(path):
    return json.loads(path.read_text(encoding='utf-8'))


def write_json(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, separators=(',', ':')), encoding='utf-8')


def write_js(path, variable, data):
    path.write_text(f'window.{variable} = '+json.dumps(data, ensure_ascii=False, separators=(',', ':'))+';\n', encoding='utf-8')


def safe_name(name):
    name = re.sub(r'<[^>]+>', '', str(name))
    name = re.sub(r'[<>:"/\\|?*\x00-\x1f]', '_', name)
    name = re.sub(r'\s+', ' ', name).strip(' ._')[:52]
    if not name or name.upper() in {'CON','PRN','AUX','NUL'}:
        name = '图鉴'
    return name


def main():
    catalog = read_json(SOURCE/'data/catalog.json')
    mechanics = read_json(SOURCE/'data/mechanics.json')
    original_assets = read_json(SOURCE/'data/asset-map.json')
    usages = defaultdict(list)
    bundle_ids = set()
    originals = {a['path']:a for a in original_assets['assets']}
    def path_for(value):
        return value if isinstance(value,str) else (value or {}).get('path') or (value or {}).get('image') or ''
    def register(path, label, category):
        if path:
            resolved=(SOURCE/path).resolve()
            if not resolved.is_relative_to(SOURCE.resolve()) or not resolved.is_file():
                raise ValueError(f'Invalid source image: {path}')
            usages[path].append({'name':str(label or '图鉴'), 'category':category})
    def walk(value, category='other', label=''):
        if isinstance(value,dict):
            category=value.get('category',category)
            if category not in FOLDERS: category='other'
            label=value.get('name') or value.get('title') or label
            for key, item in value.items():
                if key in ASSET_KEYS and item:
                    bundle_ids.add(str(item))
                    register(path_for(original_assets.get('byBundleId',{}).get(str(item))),label,category)
                elif key=='image':
                    register(path_for(item),label,category)
                else:
                    walk(item,category,label)
        elif isinstance(value,list):
            for item in value: walk(item,category,label)
    # Prefer the visible player's name when multiple records share the same image.
    for row in sorted(catalog['entries'], key=lambda r:not r.get('visible',True)):
        walk(row)
    for key, value in catalog.items():
        if key!='entries': walk(value,key)
    walk(mechanics,'mechanics')
    hero=original_assets['byName']['firstloading_bkg']
    register(hero,'废土首页背景','site')
    destinations = {}
    retained = []
    provenance = []
    for source_path, usage in sorted(usages.items()):
        info=usage[0]
        content=(SOURCE/source_path).read_bytes()
        digest=hashlib.sha256(content).hexdigest()
        filename=f"{safe_name(info['name'])}--{digest[:10]}{Path(source_path).suffix.lower()}"
        relative=f"assets/images/{FOLDERS[info['category']]}/{filename}"
        target=DEST/relative
        target.parent.mkdir(parents=True,exist_ok=True)
        if not target.exists() or target.read_bytes()!=content:
            target.write_bytes(content)
        destinations[source_path]=relative
        original=originals.get(source_path,{})
        media={key:original[key] for key in ['type','width','height'] if key in original}
        media.update({'name':info['name'],'path':relative,'category':info['category'],
                      'categoryLabel':FOLDERS[info['category']],
                      'categories':sorted({x['category'] for x in usage}),
                      'originalName':original.get('name',''),
                      'searchText':' '.join(sorted({x['name'] for x in usage})),
                      'bytes':len(content)})
        retained.append(media)
        provenance.append({'path':relative,'source':'_Wiki/'+source_path,'sha256':digest,
                           'bytes':len(content),'usedBy':len(usage)})
    # Actual byte-identical shared images are stored once and listed once.
    media=list({a['path']:a for a in retained}.values())
    mapping={key:destinations[path_for(original_assets['byBundleId'][key])]
             for key in sorted(bundle_ids) if key in original_assets['byBundleId']}
    def rewrite(value):
        if isinstance(value,str): return destinations.get(value,value)
        if isinstance(value,list): return [rewrite(x) for x in value]
        if isinstance(value,dict): return {k:rewrite(v) for k,v in value.items()}
        return value
    catalog,mechanics=rewrite(catalog),rewrite(mechanics)
    for sub in ['data','data/player','guides','reports','assets']:
        (DEST/sub).mkdir(parents=True,exist_ok=True)
    for name in ['index.html','app.js','styles.css','materials.html','materials.js','serve.py',
                 '打开Wiki.cmd','本地服务器.cmd','assets/wiki-mark.svg']:
        shutil.copy2(SOURCE/name,DEST/name)
    for path in (SOURCE/'guides').glob('*.md'):
        shutil.copy2(path,DEST/'guides'/path.name)
    for path in (SOURCE/'data/player').glob('*.csv'):
        with path.open(encoding='utf-8-sig',newline='') as src:
            rows=list(csv.reader(src))
        with (DEST/'data/player'/path.name).open('w',encoding='utf-8-sig',newline='') as dst:
            csv.writer(dst).writerows([[destinations.get(v,v) for v in row] for row in rows])
    stats={'exported':len(media),'imageBytes':sum(a['bytes'] for a in media),
           'mappedBundleImages':len(mapping),'categories':dict(Counter(x['categoryLabel'] for x in media))}
    assets={'version':original_assets.get('version','2.278'),'complete':True,
            'byBundleId':mapping,'byName':{'firstloading_bkg':destinations[hero]},
            'assets':media,'stats':stats,
            'scope':'Only media referenced by the player Wiki. No source bundles, 3D models, audio archives, raw tables or extraction dependencies.'}
    for filename,variable,value in [('catalog','DOZ_CATALOG',catalog),('mechanics','DOZ_MECHANICS',mechanics),('asset-map','DOZ_ASSETS',assets)]:
        write_json(DEST/f'data/{filename}.json',value)
        lightweight={k:v for k,v in value.items() if k!='assets'} if filename=='asset-map' else value
        write_js(DEST/f'data/{filename}.js',variable,lightweight)
    write_js(DEST/'data/media.js','DOZ_MEDIA',media)
    coverage=read_json(SOURCE/'reports/coverage.json')
    coverage['assetStats']=stats
    coverage['scope']='Player Wiki package; all player content retained, only referenced images are included.'
    write_json(DEST/'reports/coverage.json',coverage)
    write_json(DEST/'reports/image-manifest.json',provenance)
    write_js(DEST/'data/site-meta.js','DOZ_SITE_META',{
        'coverage':coverage,
        'summary':f'此独立目录收录 {len(media):,} 张 Wiki 所需图片，按用途分文件夹整理；图片保持原始画质。',
    })
    app=(DEST/'app.js').read_text('utf-8')
    replacements={
        '请确保整个 _Wiki 文件夹已完整保留':'请确保整个 DawnofZombiewiki 文件夹已完整保留',
        '资料与素材归档':'Wiki 资料与图片',
        '这里记录资料来源、收录范围与缺口，方便后续继续维护这份 Wiki。玩家页面隐藏实体编号、内部键名和实现代码。':
        '此目录独立保存 Wiki 页面、玩家资料与所需图片。图片按武器、防具、怪物等用途分类，玩家页面隐藏实体编号、内部键名和实现代码。',
        '原始 Unity 资源保留在 assets/source，导出图片、纹理和音频分别归档。部分素材为三维模型的贴图，不作为物品图鉴展示；缺图使用明确文字标记。':
        '页面所需图鉴与背景保存在 assets/images，按用途分目录。同一图片被多个条目使用时共用文件。缺少独立图标的条目保留文字说明。',
        '全部解码配置、本地化和校验清单位于 data/raw。它们供资料维护使用，玩家页面只显示名称、说明、数值和游戏配图。':
        '结构化玩家资料位于 data，中文分类表位于 data/player，攻略位于 guides。图片原始画质与玩家内容均予保留。',
        '全部实体定义存档':'完整图鉴记录',
    }
    for old,new in replacements.items():
        if old not in app: raise ValueError(f'Missing expected page text: {old[:50]}')
        app=app.replace(old,new)
    (DEST/'app.js').write_text(app,encoding='utf-8')
    material=(DEST/'materials.html').read_text('utf-8')
    material=material.replace('游戏素材浏览器','Wiki 图片素材库')
    material=material.replace('浏览已导出的原版图标、宣传画、模型贴图与音频。模型贴图是展开的纹理，不等同于成品图鉴。素材名保留原文件命名，便于后续制作 Wiki。',
                              '只收录百科条目使用的图鉴和页面背景，按用途分类。可按中文名称或原始素材名称搜索，并下载原画质图片。')
    material=material.replace('按素材名称搜索，例如 loading、AKM…','搜索名称，例如 大砍刀、AKM…')
    options='<option value="all">全部图片</option>'+''.join(f'<option value="{key}">{label}</option>' for key,label in FOLDERS.items() if any(key in m['categories'] for m in media))
    material=re.sub(r'(<select id="type"[^>]*>).*?(</select>)',lambda m:m[1]+options+m[2],material,flags=re.S)
    (DEST/'materials.html').write_text(material,encoding='utf-8')
    material_js=(DEST/'materials.js').read_text('utf-8')
    material_js=material_js.replace("r.type===type","(r.categories||[r.category]).includes(type)")
    material_js=material_js.replace("r.name.toLowerCase().includes(q)","[r.name,r.originalName,r.searchText].join(' ').toLowerCase().includes(q)")
    material_js=material_js.replace('${esc(r.type)}','${esc(r.categoryLabel)}')
    (DEST/'materials.js').write_text(material_js,encoding='utf-8')
    summary={
        'sourceDirectory':'../_Wiki','destinationDirectory':'DawnofZombiewiki',
        'images':len(media),'imageBytes':stats['imageBytes'],'imageGroups':stats['categories'],
        'catalogueRows':len(catalog['entries']),'visiblePlayerRows':sum(e.get('visible',True) for e in catalog['entries']),
        'preserved': ['Full player Wiki pages and features','All catalogue datasets','All referenced icon mappings and hero artwork','15 Chinese player CSVs','7 player guides'],
        'excluded':['Unity source bundles','Models and animations','Unreferenced textures and duplicate atlases','Unused audio and fonts','Raw 366-table multi-language export','Extractor dependencies','Large reverse-engineering and resource-link reports'],
        'originalFilesModified':False,
    }
    write_json(DEST/'reports/package-summary.json',summary)
    readme=f'''# Dawn of Zombies Wiki 页面与素材

双击 **打开Wiki.cmd** 或 **index.html** 打开百科。此目录可以独立复制使用，不依赖原来的 `_Wiki` 文件夹，不需要联网。

**materials.html** 是按用途分类的图片素材库；支持中文名称和原始素材名搜索、单图下载。

## 保留内容

- {len(media):,} 张页面使用的图鉴和背景，保持原始画质，图片合计 {stats['imageBytes']/1024**2:.1f} MiB。
- 461 种玩家武器、500 件防具的全部真实图鉴，以及怪物、随从、资源、建筑等已匹配图片。
- 完整百科、制作和修理配方、地图、任务、技能、套装、召唤/乐透/宝箱分析。
- 15 份中文分类 CSV、7 篇玩家攻略，搜索、收藏、对比和概率计算器。

## 目录

| 路径 | 内容 |
|---|---|
| assets/images | 按武器、防具装备、怪物、随从、资源材料等用途分类的原画质图片 |
| data/catalog.json | 全部整理后的百科内容 |
| data/mechanics.json | 抽取机制分析 |
| data/asset-map.json | 图片对应关系 |
| data/player | 15 份中文 CSV，图片路径已更新到本目录 |
| guides | 7 篇玩家攻略 |
| reports/image-manifest.json | 所保留图片的原来源、大小和 SHA-256 |
| reports/package-summary.json | 本次整理的保留与排除范围 |

原目录包含完整游戏资源提取档案：原始包、3D 模型、全量贴图/音频、多语言原表、提取依赖和大型报告，因而远大于实际 Wiki 页面素材。新目录只保留页面与资料所需文件；原始目录保持原样。

资料版本为 2.278 / 内置配置 151.25。缺少独立图标的怪物、条件属性及未确认概率均保持原有标注。
如浏览器限制本地文件，可运行 `python serve.py`，或双击“本地服务器.cmd”。
'''
    (DEST/'README.md').write_text(readme,encoding='utf-8')
    print(json.dumps(summary,ensure_ascii=True))


if __name__=='__main__':
    main()
