"""Generate lazy player-data scripts. Python standard library; original source stays private to the build."""
import argparse, collections, hashlib, json, re, unicodedata
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
SPAN = 32
CATEGORIES = ['weapons','armor','monsters','items','crafting','locations','pets','skills','buildings','quests','guides']
FIELDS = {'id','name','english','category','subcategory','summary','image','rarity','stats','sections','related','entityCodes'}
BAD_KEYS = {'raw','className','functionName','methodName','assetBundle','assetPath','sourcePath','prototype','name_key'}
BAD_TEXT = re.compile(r'CAB-[0-9a-f]{16,}|[A-Za-z0-9_/\\-]+\.(?:bundle|bun|lu|lua|cs|dex|dll)\b|\b[A-Za-z]+StorageData\b|\.prototype\.',re.I)

def encoded(value): return json.dumps(value,ensure_ascii=False,separators=(',',':')).encode('utf-8')
def digest(value): return hashlib.sha256(value).hexdigest()
def read_assignment(path,name):
 text=path.read_text(encoding='utf-8-sig').strip()
 match=re.fullmatch(r'window\.'+re.escape(name)+r'\s*=\s*([\s\S]*?);?',text)
 if not match:raise ValueError('Unexpected data wrapper: '+str(path))
 return json.loads(match[1])
def fields(value,allowed,path):
 if not isinstance(value,dict) or set(value)-allowed:raise ValueError('Unreviewed schema at '+path)
def audit(value,path='data'):
 if isinstance(value,dict):
  for key,item in value.items():
   if key in BAD_KEYS:raise ValueError('Unnecessary technical field: '+path+'.'+key)
   audit(item,path+'.'+key)
 elif isinstance(value,list):
  for i,item in enumerate(value):audit(item,path+'['+str(i)+']')
 elif isinstance(value,str) and BAD_TEXT.search(value):raise ValueError('Unnecessary technical source: '+path)
def sources():
 data=read_assignment(ROOT/'assets/data.js','WIKI_DATA');audit(data)
 if set(data)!={'meta','entries'}:raise ValueError('Unexpected source groups')
 fields(data['meta'],{'version','updated','title','counts','total','source','note','featured'},'meta')
 fields(data['meta']['counts'],set(CATEGORIES),'meta.counts')
 ids=set()
 for row in data['entries']:
  fields(row,FIELDS,'entry')
  if not re.fullmatch(r'[a-z][0-9]{4}',row['id']) or row['id'] in ids:raise ValueError('Invalid or duplicate stable player ID')
  ids.add(row['id'])
  codes=row.get('entityCodes',[])
  if not isinstance(codes,list) or any(not isinstance(code,str) or not re.fullmatch(r'[A-Za-z0-9_.:-]+',code) for code in codes) or len(codes)!=len(set(codes)):raise ValueError('Invalid entity codes: '+row['id'])
  if row['category'] not in CATEGORIES or not isinstance(row['name'],str):raise ValueError('Invalid player category/name')
  for stat in row.get('stats',[]):fields(stat,{'label','value'},row['id']+'.stats')
  for section in row.get('sections',[]):
   fields(section,{'title','text','rows'},row['id']+'.sections')
   for stat in section.get('rows',[]):fields(stat,{'label','value'},row['id']+'.rows')
  if row.get('image'):
   image=row['image']
   if not re.fullmatch(r'assets/[a-zA-Z0-9_./-]+\.(?:png|jpg|jpeg|webp|svg)',image) or '..' in image or not (ROOT/image).is_file():raise ValueError('Invalid or missing image: '+image)
 for row in data['entries']:
  if set(row.get('related',[]))-ids:raise ValueError('Unknown related entry: '+row['id'])
 if dict(collections.Counter(row['category'] for row in data['entries']))!=data['meta']['counts'] or len(ids)!=data['meta']['total']:raise ValueError('Update source meta counts/total to match entries')
 return data

def summary(row):
 result={key:row[key] for key in ('id','name','english','category','subcategory','image','rarity','entityCodes') if key in row}
 if 'stats' in row:result['stats']=[stat for stat in row['stats'] if stat and stat.get('label') and stat.get('value') is not None][:2]
 return result

def featured(rows,meta,key,limit):
 pool=[row for row in rows if row['category']==key]
 lookup={row['id']:row for row in rows}
 provided=[lookup[id] for id in meta.get('featured',{}).get(key,[]) if id in lookup]
 if provided:return provided[:limit]
 images=[row for row in pool if row.get('image')]
 use=images if len(images)>=limit else images+[row for row in pool if not row.get('image')]
 selected=[];seen=set()
 for row in use:
  if row.get('image') and row['image'] in seen:continue
  selected.append(row)
  if row.get('image'):seen.add(row['image'])
  if len(selected)==limit:break
 if len(selected)<limit:selected.extend([row for row in use if row not in selected][:limit-len(selected)])
 return selected

def build(data):
 rows=data['entries'];parts={};manifest={};files={}
 for key in CATEGORIES:parts['category-'+key]=[summary(row) for row in rows if row['category']==key]
 for start in range(0,len(rows),SPAN):
  bucket=str(start//SPAN);chunk=rows[start:start+SPAN]
  parts['details-'+bucket]=chunk
  parts['summaries-'+bucket]=[summary(row) for row in chunk]
 def search_text(row):
  text=' '.join(str(x) for x in [row.get('name'),row.get('english'),row.get('subcategory'),row.get('summary')]+row.get('entityCodes',[])+[' '.join(str(x) for x in [s.get('title'),s.get('text')] if x) for s in row.get('sections',[])] if x)
  return unicodedata.normalize('NFKC',text).lower().strip()
 parts['search']={row['id']:search_text(row) for row in rows}
 for key,value in parts.items():
  payload=('window.GRIM_PARTS['+json.dumps(key)+']=').encode()+encoded(value)+b';\n'
  path='data/lazy/'+key+'.'+digest(payload)[:16]+'.js';manifest[key]=path;files[path]=payload
 home_ids={key:[row['id'] for row in featured(rows,data['meta'],key,3 if key=='monsters' else 4)] for key in ['weapons','armor','monsters']}
 home_set={id for ids in home_ids.values() for id in ids}
 boot={'meta':data['meta'],'counts':data['meta']['counts'],'total':len(rows),'imageCount':sum(bool(row.get('image')) for row in rows),'detailSpan':SPAN,'lookup':{row['id']:i for i,row in enumerate(rows)},'featured':home_ids,'home':[summary(row) for row in rows if row['id'] in home_set],'manifest':manifest}
 files['data/bootstrap.js']=b'window.GRIM_BOOTSTRAP='+encoded(boot)+b';\n'
 return boot,files

def image_hashes():
 return {path.relative_to(ROOT).as_posix():digest(path.read_bytes()) for path in sorted((ROOT/'assets').rglob('*')) if path.suffix.lower() in ('.png','.jpg','.jpeg','.webp','.svg','.gif','.avif')}
def main():
 parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--accept-images',action='store_true',help='Accept reviewed new/updated images into the verification baseline.');args=parser.parse_args()
 data=sources();boot,files=build(data)
 for name,payload in files.items():
  path=ROOT/name;path.parent.mkdir(parents=True,exist_ok=True)
  if not path.exists() or path.read_bytes()!=payload:path.write_bytes(payload)
 lazy=(ROOT/'data/lazy').resolve()
 for path in lazy.iterdir():
  if path.is_file() and path.parent.resolve()==lazy and re.fullmatch(r'[a-z0-9-]+\.[a-f0-9]{16}\.js',path.name) and path.relative_to(ROOT).as_posix() not in files:path.unlink()
 baseline=ROOT/'tools/image-sha256.json'
 if args.accept_images:baseline.write_bytes(encoded(image_hashes())+b'\n')
 if not baseline.exists():raise ValueError('Review images and run --accept-images once to establish the baseline')
 print(f"Generated {len(data['entries'])} player entries, {len(boot['manifest'])} lazy parts; bootstrap {len(files['data/bootstrap.js']):,} bytes")
if __name__=='__main__':main()
