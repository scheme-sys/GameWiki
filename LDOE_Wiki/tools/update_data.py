"""Build only the player data requested by each screen. Python standard library."""
import argparse, collections, hashlib, json, re
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
FEATURED = ['Glock 17','AK-47','M16','Shotgun','Machete','Katana','Saw Blade Mace','Sledgehammer','VSS Vintorez','SCAR','Mini Uzi','Spear']
CATEGORIES = ['weapons','armor','creatures','resources','recipes','locations']
SPAN = 32
FIELDS = {
 'items': {'id','name','enName','category','subcategory','description','image','tags','stats','recipe','source','modSlots','notes'},
 'recipes': {'id','name','outputId','quantity','station','status','ingredients','level','duration','stations','type'},
 'creatures': {'id','name','enName','category','description','image','tags','stats','locations','note','sources','variants','variantCount','imageNote'},
 'locations': {'id','name','enName','category','description','image','tags','stats','locations','note','sources'},
}
BAD_KEYS = {'raw','$ref','name_key','sourceHints','prototype','assetFile','bundle','assetBundle','class','className','typeName','method','methodName','function','functionName','sourcePath','assetPath'}
BAD_TEXT = re.compile(r'CAB-[0-9a-f]{16,}|[A-Za-z0-9_/\\-]+\.(?:bundle|bun|lu|lua|cs|dex|dll)\b|\b[A-Za-z]+StorageData\b|\.prototype\.',re.I)
def encoded(obj): return json.dumps(obj, ensure_ascii=False, separators=(',',':')).encode('utf-8')
def digest(data): return hashlib.sha256(data).hexdigest()
def read_assignment(path, name):
 text=path.read_text(encoding='utf-8-sig').strip()
 prefix='window.'+name+'='
 if not text.startswith(prefix): raise ValueError('Unexpected data wrapper: '+str(path))
 return json.loads(text[len(prefix):].rstrip(';'))
def audit(value, path='data'):
 if isinstance(value,dict):
  for key,item in value.items():
   if key in BAD_KEYS: raise ValueError('Unnecessary technical field: '+path+'.'+key)
   audit(item,path+'.'+key)
 elif isinstance(value,list):
  for i,item in enumerate(value): audit(item,path+'['+str(i)+']')
 elif isinstance(value,str) and BAD_TEXT.search(value): raise ValueError('Unnecessary technical source: '+path)
def check_fields(value, allowed, path):
 if not isinstance(value,dict) or set(value)-allowed: raise ValueError('Unreviewed schema at '+path)
def check_nested(row,path):
 for stat in row.get('stats',[]):check_fields(stat,{'label','value','unit'},path+'.stats')
 if 'recipe' in row:
  check_fields(row['recipe'],FIELDS['recipes'],path+'.recipe');check_nested(row['recipe'],path+'.recipe')
 for material in row.get('ingredients',[]):check_fields(material,{'id','name','quantity'},path+'.ingredients')
 for station in row.get('stations',[]):check_fields(station,{'name','seconds'},path+'.stations')
 for source in row.get('sources',[])+([row['source']] if 'source' in row else []):
  check_fields(source,{'title','url'},path+'.source')
  if source.get('url') and not source['url'].startswith('https://'):raise ValueError('Public source must use HTTPS')
 for variant in row.get('variants',[]):
  check_fields(variant,{'name','stats'},path+'.variants');check_nested(variant,path+'.variants')
def sources():
 catalog=read_assignment(ROOT/'data/catalog.js','WIKI_CATALOG')
 world=read_assignment(ROOT/'data/world.js','WIKI_WORLD')
 audit(catalog);audit(world)
 check_fields(catalog.get('meta'),{'title','version','updated','scope','nameNote','statNote','counts'},'meta')
 check_fields(catalog['meta'].get('counts'),{'resources','building','vehicles','weapons','consumables','tools','armor','other'},'meta.counts')
 if set(catalog)!={'meta','items','recipes'} or set(world)!={'version','checkedAt','creatures','locations','notes'}: raise ValueError('Source schema changed; review before exporting.')
 for group,data in [('items',catalog['items']),('recipes',catalog['recipes']),('creatures',world['creatures']),('locations',world['locations'])]:
  for row in data:
   check_nested(row,group)
   if set(row)-FIELDS[group]: raise ValueError('Unreviewed fields in '+group+': '+str(set(row)-FIELDS[group]))
   if not re.fullmatch({'items':'item','recipes':'recipe','creatures':'creature','locations':'location'}[group]+r'-\d{4}',row['id']): raise ValueError('Invalid stable player ID')
 return catalog,world
def normalize(row):
 row=dict(row)
 row['enName']=row.get('enName') or row.get('englishName') or ''
 stats=row.get('stats',[])
 row['stats']=stats if isinstance(stats,list) else [{'label':k,'value':v} for k,v in stats.items()]
 row['tags']=list(dict.fromkeys(row.get('tags',[])))
 return row
def category(row):
 return row.get('kind') or (row['category'] if row.get('category') in ('weapons','armor') else 'resources')
def normalized(catalog,world):
 items=[normalize(row) for row in catalog['items']]
 items.sort(key=lambda row:FEATURED.index(row['enName']) if row['enName'] in FEATURED else 999)
 lookup={row['id']:row for row in items}
 creatures=[normalize({**row,'subcategory':row.get('subcategory') or row.get('category'),'kind':'creatures'}) for row in world['creatures']]
 locations=[normalize({**row,'subcategory':row.get('subcategory') or row.get('category'),'kind':'locations'}) for row in world['locations']]
 recipes=[]
 for row in catalog['recipes']:
  output=lookup.get(row.get('outputId'),{})
  recipes.append(normalize({**row,'kind':'recipes','image':row.get('image') or output.get('image'),'enName':row.get('enName') or output.get('enName'),
   'subcategory':(row.get('station') or '制作配方').split(' / ')[0],'tags':[row.get('status') or '需解锁相应图纸'],
   'description':(row.get('station') or '制作')+'配方。'+(row.get('status') or '请以游戏内开放情况为准。'),
   'stats':[{'label':'修复数量' if row.get('type')=='repair' else '产出','value':row.get('quantity') or 1}]+([{'label':'等级','value':row['level']}] if row.get('level') else [])+([{'label':'耗时','value':row['duration'],'unit':'秒'}] if row.get('duration') else [])}))
 rows=items+creatures+locations+recipes
 for order,row in enumerate(rows):row['_order']=order
 return rows
def summary(row):
 return {key:row[key] for key in ('id','name','enName','category','subcategory','kind','image','tags','stats','_order') if key in row}
def build():
 catalog,world=sources()
 rows=normalized(catalog,world)
 ids=[row['id'] for row in rows]
 if len(set(ids))!=len(ids): raise ValueError('Duplicate player IDs')
 for row in rows:
  for material in row.get('ingredients',row.get('recipe',{}).get('ingredients',[])):
   if material.get('id') not in ids: raise ValueError('Unresolved material '+str(material.get('id')))
  if row.get('outputId') and row['outputId'] not in ids: raise ValueError('Unresolved recipe output')
 parts={}
 groups={name:[row for row in rows if category(row)==name] for name in CATEGORIES}
 for name,group in groups.items(): parts['category-'+name]=[summary(row) for row in group]
 buckets=collections.defaultdict(list)
 for row in rows:
  prefix,number=row['id'].split('-')
  buckets['details-'+prefix+'-'+str((int(number)-1)//SPAN)].append(row)
 parts.update(buckets)
 parts['search']=[{'id':row['id'],'name':row['name'],'kind':category(row),'stats':row['stats'][:1],
  'searchText':(' '.join([row['name'],row['enName'],row.get('subcategory') or '',' '.join(row['tags']),row.get('description') or ''])).lower()}
  for row in rows]
 relations=collections.defaultdict(lambda:{'outputs':[],'uses':[]})
 for row in catalog['recipes']:
  ref={'id':row['id'],'name':row['name']}
  relations[row['outputId']]['outputs'].append(ref)
  for id in dict.fromkeys(i['id'] for i in row['ingredients']):
   if id!=row['outputId']:relations[id]['uses'].append(ref)
 parts['relations']=dict(relations)
 outputs={}
 manifest={}
 for key,data in sorted(parts.items()):
  content=b'window.LDOE_PARTS['+encoded(key)+b']='+encoded(data)+b';\n'
  path='data/lazy/'+key+'.'+digest(content)[:16]+'.js'
  manifest[key]=path;outputs[path]=content
 counts={key:len(group) for key,group in groups.items()}
 ranges={}
 missing={}
 for prefix in ('item','creature','location','recipe'):
  numbers=sorted(int(id.split('-')[1]) for id in ids if id.startswith(prefix+'-'))
  missing[prefix]=sorted(set(range(1,max(numbers)+1))-set(numbers))
  ranges[prefix]=max(numbers)
 boot={'format':1,'detailSpan':SPAN,'meta':catalog['meta'],'worldMeta':{k:v for k,v in world.items() if k not in ('creatures','locations')},
  'counts':counts,'ranges':ranges,'missingIds':missing,'manifest':manifest,'home':[summary(row) for row in groups['weapons'][:24]],
  'coverage':{key:sum(bool(row.get('image')) for row in group) for key,group in groups.items()},
  'filters':{key:list(dict.fromkeys(row.get('subcategory') or row.get('type') or key for row in group)) for key,group in groups.items()},
  'gearIds':{row['id']:category(row) for row in rows if category(row) in ('weapons','armor')}}
 outputs['data/bootstrap.js']=b'window.LDOE_BOOTSTRAP='+encoded(boot)+b';\n'
 return outputs,rows
def image_manifest():
 files=[p for p in (ROOT/'assets').rglob('*') if p.is_file()]+[ROOT/'favicon.svg']
 return {p.relative_to(ROOT).as_posix():digest(p.read_bytes()) for p in sorted(files)}
def main():
 parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--accept-images',action='store_true',help='Explicitly record an intentionally reviewed new image set.');args=parser.parse_args()
 outputs,rows=build()
 lazy=ROOT/'data/lazy';lazy.mkdir(parents=True,exist_ok=True)
 for relative,data in outputs.items():(ROOT/relative).write_bytes(data)
 # Delete only obsolete generated files in the checked, exact output directory.
 for path in lazy.iterdir():
  if path.is_file() and re.fullmatch(r'[a-z0-9-]+\.[0-9a-f]{16}\.js',path.name) and path.relative_to(ROOT).as_posix() not in outputs:path.unlink()
 baseline=ROOT/'tools/image-sha256.json'
 if args.accept_images:baseline.write_bytes(encoded(image_manifest())+b'\n')
 print(f'Generated {len(outputs)-1} on-demand files; bootstrap {len(outputs["data/bootstrap.js"]):,} bytes; {len(rows):,} exact player records.')
if __name__=='__main__':main()
