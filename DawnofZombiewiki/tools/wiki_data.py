"""Deterministic data adapters; JSON remains the source, with no external archive."""
from __future__ import annotations

from collections import Counter
import csv
import hashlib
import io
import json
from pathlib import Path

from player_schema import validate_player_data
from lazy_data import split_runtime

ROOT = Path(__file__).resolve().parents[1]
JSON_NAMES = ('catalog', 'mechanics', 'asset-map')
VARIABLES = {'catalog': 'DOZ_CATALOG', 'mechanics': 'DOZ_MECHANICS', 'asset-map': 'DOZ_ASSETS'}
ENTRY_EXPORTS = {
    'weapon': '武器图鉴', 'armor': '防具装备', 'enemy': '怪物档案',
    'companion': '随从图鉴', 'resource': '资源材料', 'consumable': '食物药品',
    'building': '建筑设施', 'other': '道具收藏',
}
LIBRARY_EXPORTS = {
    'locations': '地图地点', 'quests': '任务档案', 'skills': '角色技能',
    'notes': '废土笔记', 'factions': '势力阵营', 'sets': '装备套装',
}
GUIDE_FILES = (
    '01-抽卡前先看懂三类保证.md', '02-乐透与翻牌.md', '03-宝箱.md',
    '04-出征前的生存检查.md', '05-武器、铠甲与伤害类型.md',
    '06-耐久、修理与长期养成.md', '07-盟友.md',
)


def load_json(path):
    return json.loads(Path(path).read_text(encoding='utf-8'))


def load_data(root=ROOT):
    data = tuple(load_json(root / f'data/{name}.json') for name in JSON_NAMES)
    validate_player_data(*data)
    return data


def json_bytes(value, pretty=False):
    return (json.dumps(value, ensure_ascii=False, indent=2 if pretty else None,
                       separators=None if pretty else (',', ':')) + ('\n' if pretty else '')).encode('utf-8')


def js_bytes(variable, value):
    return b'window.' + variable.encode('ascii') + b' = ' + json_bytes(value) + b';\n'


def file_matches(path, content):
    path = Path(path)
    return path.is_file() and path.read_bytes().replace(b'\r\n', b'\n') == content.replace(b'\r\n', b'\n')


def read_js_json(path, variable):
    text = Path(path).read_text(encoding='utf-8').strip()
    prefix = f'window.{variable} = '
    if not text.startswith(prefix) or not text.endswith(';'):
        raise ValueError(f'Unexpected JSON wrapper: {path.name}')
    return json.loads(text[len(prefix):-1])


def image_for(row, assets):
    image = row.get('image', '')
    return (image, '同模型参考图' if row.get('referenceImage') else '原版图鉴') if image else ('', '暂缺')


def csv_value(value):
    text = '' if value is None else str(value)
    # Preserve the original spreadsheet formula escaping, including negative text.
    return "'" + text if text.startswith(('=', '+', '-', '@')) else text


def csv_bytes(rows):
    stream = io.StringIO(newline='')
    normal = csv.writer(stream)
    protected = csv.writer(stream, quoting=csv.QUOTE_ALL)
    for row in rows:
        values = [csv_value(value) for value in row]
        # Preserve meaningful code whitespace inside CSV quotes, not at line ends.
        writer = protected if any(value != value.strip() for value in values) else normal
        writer.writerow(values)
    return stream.getvalue().encode('utf-8-sig')


def player_exports(catalog, mechanics, assets):
    """Explicit player columns, including verified entity codes; implementation fields are omitted."""
    outputs = {}
    heading = ['名称', '英文名称', '品质', '类型', '说明', '基础属性', '特殊能力', '来源提示', '图片文件', '图片类型', '实体代码']
    for category, title in ENTRY_EXPORTS.items():
        rows = [heading]
        for entry in catalog['entries']:
            if entry['category'] != category or not entry.get('visible', True):
                continue
            image, kind = image_for(entry, assets)
            rows.append([
                entry.get('name', ''), entry.get('nameEn', ''), entry.get('rarityLabel', ''),
                entry.get('subcategory', ''), entry.get('description', ''),
                '；'.join(f"{stat['label']}：{stat['value']}{stat.get('unit', '')}" for stat in entry.get('stats', [])),
                '；'.join(f"{ability.get('name', '')}：{ability.get('description', '')}" for ability in entry.get('abilities', [])),
                '；'.join(entry.get('sourceHints', [])), image, kind, entry.get('entityCode', ''),
            ])
        outputs[f'data/player/{title}.csv'] = csv_bytes(rows)
    for key, title in LIBRARY_EXPORTS.items():
        rows = [['名称', '说明', '提示', '图片文件', '实体代码']]
        rows += [[entry.get('name', ''), entry.get('description', ''), entry.get('hint', ''), image_for(entry, assets)[0], entry.get('entityCode', '')]
                 for entry in catalog[key]]
        outputs[f'data/player/{title}.csv'] = csv_bytes(rows)
    rows = [['名称', '类型', '说明', '解锁等级', '制作秒数', '投入装备与材料', '结果', '设施', '解锁说明']]
    for recipe in catalog['recipes']:
        rows.append([
            recipe.get('name', ''), recipe.get('kindLabel', ''), recipe.get('description', ''),
            recipe.get('requiredLevel'), recipe.get('craftTimeSeconds'),
            '；'.join(f"{item['name']} × {item.get('amount', '')}" for item in recipe.get('ingredients', [])),
            '；'.join(f"{item['name']} × {item.get('amount', '')}" for item in recipe.get('resultEntries', [])),
            '；'.join(item['name'] for item in recipe.get('stations', [])), recipe.get('unlockDescription', ''),
        ])
    outputs['data/player/制作配方.csv'] = csv_bytes(rows)
    if len(mechanics['guides']) != len(GUIDE_FILES):
        raise ValueError('Update GUIDE_FILES explicitly when adding or removing a guide.')
    for filename, guide in zip(GUIDE_FILES, mechanics['guides']):
        paragraphs = [f"# {guide['title']}", guide['summary'],
                      f"资料版本：DOZ {catalog['meta']['version']}，安装包内置配置。活动开放状态以游戏为准。"]
        for section in guide['sections']:
            paragraphs.append(f"## {section['title']}")
            paragraphs.extend(section['paragraphs'])
        outputs[f'guides/{filename}'] = ('\n\n'.join(paragraphs) + '\n').encode('utf-8')
    return outputs


def metadata(root, catalog, mechanics, assets):
    entries = catalog['entries']
    categories = {}
    for category in dict.fromkeys(entry['category'] for entry in entries):
        rows = [entry for entry in entries if entry['category'] == category]
        visible = [entry for entry in rows if entry.get('visible', True)]
        categories[category] = {
            'total': len(rows), 'visible': len(visible),
            'withImage': sum(bool(image_for(entry, assets)[0]) for entry in rows),
            'visibleWithImage': sum(bool(image_for(entry, assets)[0]) for entry in visible),
            'visibleReferenceImages': sum(image_for(entry, assets)[1] == '同模型参考图' for entry in visible),
        }
    media = assets['images']
    stats = {'exported': len(media), 'imageBytes': sum(row['bytes'] for row in media),
             'localImages': len(media),
             'categories': dict(Counter(row['categoryLabel'] for row in media))}
    coverage = {
        'builtAt': catalog['meta'].get('builtAt'), 'version': catalog['meta']['version'],
        'entries': len(entries),
        'visibleEntries': sum(row['visible'] for row in categories.values()),
        'visibleWithImage': sum(row['visibleWithImage'] for row in categories.values()),
        'categories': categories, 'datasets': {key: len(value) for key, value in catalog.items() if isinstance(value, list)},
        'assetStats': stats, 'missingImages': sum(not image_for(entry, assets)[0] for entry in entries),
        'brokenImagePaths': [], 'scope': 'Player data and local images only; maintenance sources are validated before generation.',
    }
    downloads = {'csv': [], 'guides': []}
    for file in sorted((root / 'data/player').glob('*.csv')):
        with file.open(encoding='utf-8-sig', newline='') as stream:
            row_count = max(0, sum(1 for _ in csv.reader(stream)) - 1)
        downloads['csv'].append({'title': file.stem, 'href': file.relative_to(root).as_posix(), 'rows': row_count})
    for file in sorted((root / 'guides').glob('*.md')):
        first = file.read_text(encoding='utf-8').splitlines()[0]
        downloads['guides'].append({'title': first.lstrip('# ').strip(), 'href': file.relative_to(root).as_posix()})
    return {'coverage': coverage, 'summary': f"收录 {len(media):,} 张图鉴与背景，图片保持原始画质。", 'downloads': downloads}


def generated_files(root=ROOT):
    catalog, mechanics, assets = load_data(root)
    outputs = {}
    for name, data in zip(JSON_NAMES, (catalog, mechanics, assets)):
        value = {key: data[key] for key in ('version', 'hero')} if name == 'asset-map' else data
        outputs[f'data/{name}.js'] = js_bytes(VARIABLES[name], value)
    outputs.update(split_runtime(catalog, mechanics, js_bytes))
    outputs['data/media.js'] = js_bytes('DOZ_MEDIA', assets['images'])
    site = metadata(root, catalog, mechanics, assets)
    outputs['data/site-meta.js'] = js_bytes('DOZ_SITE_META', site)
    outputs['reports/coverage.json'] = json_bytes(site['coverage'], pretty=True)
    # Git checkouts may use CRLF; measure and hash UTF-8 text with LF on every OS.
    source_bytes = {name: (root / f'data/{name}.json').read_text(encoding='utf-8').encode('utf-8')
                    for name in JSON_NAMES}
    summary = {
        'source': 'data/catalog.json, data/mechanics.json, data/asset-map.json',
        'sourceSHA256': {name: hashlib.sha256(content).hexdigest() for name, content in source_bytes.items()},
        'datasets': site['coverage']['datasets'], 'visibleEntries': site['coverage']['visibleEntries'],
        'mechanics': {key: len(value) for key, value in mechanics.items() if isinstance(value, list)},
        'images': site['coverage']['assetStats'], 'downloads': site['downloads'],
    }
    outputs['reports/maintenance-summary.json'] = json_bytes(summary, pretty=True)
    # Keep legacy maintenance report paths usable, without archived origin details.
    outputs['reports/package-summary.json'] = json_bytes({
        'status': 'maintained', 'currentSummary': 'maintenance-summary.json',
        'images': len(assets['images']), 'catalogueRows': len(catalog['entries']),
        'visiblePlayerRows': site['coverage']['visibleEntries'],
    }, pretty=True)
    outputs['reports/package-validation.json'] = json_bytes({
        'status': 'use-current-report', 'currentReport': 'maintenance-validation.json',
    }, pretty=True)
    outputs['reports/export-compatibility.json'] = json_bytes({
        'status': 'synchronized', 'csvFiles': len(site['downloads']['csv']),
        'guideFiles': len(site['downloads']['guides']),
        'verification': 'All download cells are checked against the current player JSON.',
    }, pretty=True)
    outputs['reports/size-audit.json'] = json_bytes({
        'images': len(assets['images']), 'imageBytes': site['coverage']['assetStats']['imageBytes'],
        'maintenanceJsonBytes': sum(len(content) for content in source_bytes.values()),
        'playerRuntimeDataBytes': sum(len(value) for name,value in outputs.items() if name=='data/bootstrap.js' or name.startswith('data/lazy/') or name in ('data/asset-map.js','data/site-meta.js')),
        'initialRuntimeDataBytes': sum(len(outputs[name]) for name in ('data/bootstrap.js','data/asset-map.js','data/site-meta.js')),
        'lazyChunks': len([name for name in outputs if name.startswith('data/lazy/')]),
    }, pretty=True)
    return outputs
