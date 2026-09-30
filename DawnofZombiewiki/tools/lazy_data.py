"""Generate deterministic feature-specific scripts; JSON remains the complete source."""
from __future__ import annotations
import base64
import hashlib
import json
from collections import defaultdict

INDEX_FIELDS = {'id','entityCode','name','nameEn','description','category','categoryLabel','subcategory','rarity','rarityLabel','stats','tags','visible','image','referenceImage','variantCount','variantIndex'}
CATEGORIES = ('weapon','armor','enemy','companion','resource','consumable','building','other')
DETAIL_SPAN = 128

def split_runtime(catalog, mechanics, js_bytes):
    outputs, manifest = {}, {}
    def part(key, value):
        content = b'window.DOZ_DATA_PARTS[' + json.dumps(key).encode() + b'] = ' + json.dumps(value,ensure_ascii=False,separators=(',',':')).encode() + b';\n'
        filename = key + '-' + hashlib.sha256(content).hexdigest()[:16] + '.js'
        outputs['data/lazy/' + filename] = content
        manifest[key] = 'data/lazy/' + filename
    rows = catalog['entries']
    membership = bytearray((max((int(row['id']) for row in rows),default=0)//8)+1)
    indexed = []
    for order,row in enumerate(rows):
        ident = int(row['id']); membership[ident//8] |= 1 << (ident%8)
        indexed.append({**{k:v for k,v in row.items() if k in INDEX_FIELDS},'_order':order})
    for category in CATEGORIES:
        for hidden in (False,True):
            part('index-'+category+('-hidden' if hidden else ''),
                 [r for r in indexed if r['category']==category and (r.get('visible',True) is False)==hidden])
    recipes = catalog.get('recipes',[])
    recipe_parts, related = {}, defaultdict(set)
    for offset in range(0,len(recipes),24):
        key = 'recipes-'+str(offset//24)
        group = recipes[offset:offset+24]
        part(key,group)
        for row in group:
            recipe_parts[str(row['id'])] = key
            for output in row.get('resultEntries',[])+row.get('repairTargets',[]):
                related[str(output.get('id'))].add(str(row['id']))
    recipe_index = [{**{k:r[k] for k in ('id','name','title','description','summary','hint','ingredients','materials') if k in r},'_part':recipe_parts[str(r['id'])]} for r in recipes]
    # Only names are used by list search, never ingredient implementation metadata.
    for row in recipe_index:
        for key in ('ingredients','materials'):
            if key in row: row[key]=[{'name':item.get('name','')} for item in row[key]]
    part('recipes-index',recipe_index)
    buckets = defaultdict(list)
    for row in rows: buckets[int(row['id'])//DETAIL_SPAN].append(row)
    for number,group in buckets.items():
        links={}
        for row in group:
            ids=related[str(row['id'])] | {str(x) for x in row.get('recipeIds',[])}
            selected=[r for r in recipes if str(r['id']) in ids][:15]
            links[str(row['id'])]=list(dict.fromkeys(recipe_parts[str(r['id'])] for r in selected))
        part('detail-'+str(number),{'entries':group,'recipeParts':links})
    for name,value in catalog.items():
        if name not in ('entries','meta','categories','recipes'):
            part('catalog-'+name,value)
    part('mechanics-gacha',{k:v for k,v in mechanics.items() if k!='guides'})
    part('mechanics-guides',{'guides':mechanics.get('guides',[])})
    preferred={142,2825,9,188,5864,12949}
    featured=[r for r in indexed if r['id'] in preferred]
    for category in ('weapon','armor','enemy','companion'):
        if not any(r['category']==category and r.get('image') for r in featured):
            match=next((r for r in indexed if r['category']==category and r.get('visible',True) and r.get('image')),None)
            if match:featured.append(match)
    bootstrap={'meta':catalog['meta'],'categories':catalog['categories'],
               'entries':featured,'membership':base64.b64encode(membership).decode(),
               'detailSpan':DETAIL_SPAN,'manifest':manifest}
    outputs['data/bootstrap.js']=js_bytes('DOZ_BOOTSTRAP',bootstrap)
    return outputs
