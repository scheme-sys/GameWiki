"""Verify the standalone player Wiki and its reorganized image references."""
from __future__ import annotations

import csv
import hashlib
import json
from pathlib import Path
import re

ROOT=Path(__file__).resolve().parents[1]
SOURCE=ROOT.parent/'_Wiki'


def load(path):
    return json.loads(path.read_text('utf-8'))


def main():
    errors=[]
    checks=[]
    def require(condition,message):
        if not condition: errors.append(message)
    c=load(ROOT/'data/catalog.json')
    m=load(ROOT/'data/mechanics.json')
    a=load(ROOT/'data/asset-map.json')
    provenance=load(ROOT/'reports/image-manifest.json')
    mappings=a['byBundleId']
    for record in provenance:
        path=(ROOT/record['path']).resolve()
        require(path.is_relative_to(ROOT),'Image escapes package directory')
        require(path.is_file(),f'Missing image: {record["path"]}')
        if path.is_file():
            data=path.read_bytes()
            require(len(data)==record['bytes'],f'Image size changed: {record["path"]}')
            require(hashlib.sha256(data).hexdigest()==record['sha256'],f'Image hash changed: {record["path"]}')
    checks.append('Every copied image matches its original SHA-256 and size')
    referenced=set(mappings.values()) | set(a['byName'].values())
    media={r['path'] for r in a['assets']}
    require(referenced==media,'Media browser and image references differ')
    require({p.relative_to(ROOT).as_posix() for p in (ROOT/'assets/images').rglob('*') if p.is_file()}==media,
            'Image directory contains missing or unreferenced files')
    checks.append('All images are referenced; no orphan image archive')
    for name in ['catalog','mechanics','asset-map']:
        text=(ROOT/f'data/{name}.js').read_text('utf-8')
        parsed=json.loads(text.split('=',1)[1].strip().removesuffix(';'))
        expected=load(ROOT/f'data/{name}.json')
        if name=='asset-map': expected.pop('assets')
        require(parsed==expected,f'{name} JS and JSON diverge')
    if SOURCE.exists():
        require(c==load(SOURCE/'data/catalog.json'),'Player catalogue content changed')
        require(m==load(SOURCE/'data/mechanics.json'),'Mechanics content changed')
        checks.append('Catalogue and mechanics match original complete player data')
    def image_for(row):
        return next((mappings[str(row[k])] for k in ['iconBundleId','iconSmallBundleId','referenceIconBundleId']
                     if row.get(k) and str(row[k]) in mappings),'')
    coverage={}
    for category in ['weapon','armor','enemy','companion','resource','consumable','building','other']:
        rows=[r for r in c['entries'] if r['category']==category and r.get('visible',True)]
        coverage[category]={'entries':len(rows),'withImage':sum(bool(image_for(r)) for r in rows)}
    require(coverage['weapon']=={'entries':461,'withImage':461},'Weapon images missing')
    require(coverage['armor']=={'entries':500,'withImage':500},'Armor images missing')
    checks.append('All 461 player weapons and 500 armor records retain real images')
    for path in (ROOT/'data/player').glob('*.csv'):
        with path.open(encoding='utf-8-sig',newline='') as f:
            rows=list(csv.reader(f))
        for row in rows:
            for cell in row:
                if cell.startswith('assets/'):
                    require((ROOT/cell).is_file(),f'CSV image missing: {path.name}: {cell}')
        if SOURCE.exists():
            with (SOURCE/'data/player'/path.name).open(encoding='utf-8-sig',newline='') as f:
                old=list(csv.reader(f))
            require(len(rows)==len(old),f'CSV rows changed: {path.name}')
            for after,before in zip(rows,old):
                require(len(after)==len(before),f'CSV columns changed: {path.name}')
                require(all(x==y or (x.startswith('assets/') and y.startswith('assets/'))
                            for x,y in zip(after,before)),f'CSV player values changed: {path.name}')
    checks.append('All 15 CSVs retain player values and resolve new image paths')
    for name in ['index.html','materials.html']:
        text=(ROOT/name).read_text('utf-8')
        for ref in re.findall(r'(?:src|href)="([^"]+)"',text):
            if ref.startswith('#'): continue
            require(not ref.startswith(('http:','https:','../','/')),'Non-local browser dependency')
            require((ROOT/ref.split('#')[0]).is_file(),f'HTML dependency missing: {ref}')
    for folder in ['assets/source','data/raw','assets/_extractor_dependencies','assets/audio','assets/remote']:
        require(not (ROOT/folder).exists(),f'Excluded archive is still included: {folder}')
    checks.append('Standalone page files; no raw bundles, unused audio, raw tables or extraction dependencies')
    for name in ['app.js','materials.html']:
        text=(ROOT/name).read_text('utf-8')
        require('assets/source' not in text and 'data/raw' not in text,'Stale full-archive page description')
        require('../_Wiki' not in text,'Page depends on old directory')
    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
        browser=p.chromium.launch(channel='chrome',headless=True)
        page=browser.new_page(viewport={'width':1440,'height':1000})
        page.on('pageerror',lambda e:errors.append(str(e)))
        external=[]
        page.on('request',lambda r:external.append(r.url) if r.url.startswith(('http://','https://')) else None)
        page.goto((ROOT/'index.html').as_uri(),wait_until='load')
        page.locator('.hero h1').wait_for()
        for route in ['weapon','armor','enemy','companion','resource','consumable','building','other',
                      'recipes','locations','quests','gacha','guides','library','about']:
            page.evaluate('(route)=>location.hash=route',route)
            page.wait_for_timeout(100)
            require(page.locator('main h1').count()==1,f'Route failed: {route}')
            require(not re.search(r'\b(?:undefined|NaN)\b',page.locator('main').inner_text()),f'Bad display value: {route}')
        checks.append('All 15 player content routes load offline without JavaScript errors')
        page.evaluate("location.hash='weapon'")
        page.locator('#catalog-search').fill('大砍刀')
        page.wait_for_timeout(220)
        page.locator('.card-main').first.click()
        require('基础伤害' in page.locator('#detail-dialog').inner_text(),'Weapon details missing')
        require(page.locator('#detail-dialog img').first.evaluate('e=>e.complete&&e.naturalWidth>0'),'Renamed weapon image failed')
        page.keyboard.press('Escape')
        page.locator('.card-save').first.click()
        require(page.locator('#saved-count').inner_text()=='1','Favorites failed')
        page.locator('#clear-filters').click()
        page.locator('.card-compare').nth(0).click()
        page.locator('.card-compare').nth(1).click()
        page.locator('#open-compare').click()
        require(page.locator('#compare-dialog th.compare-cell').count()==2,'Compare failed')
        page.keyboard.press('Escape')
        checks.append('Renamed Chinese image paths, weapon search, detail, favorite and comparison')
        page.evaluate("location.hash='gacha'")
        page.locator('#calc-p').fill('5')
        page.locator('#calc-n').fill('10')
        require(page.locator('#calc-value').inner_text()=='40.13%','Independent probability calculator failed')
        page.locator('#calc-model').select_option('featured')
        require(page.locator('#calc-value').inner_text()=='24.37%','Featured probability calculator failed')
        checks.append('Both probability models retain verified results')
        page.goto((ROOT/'materials.html').as_uri(),wait_until='load')
        page.locator('#type').select_option('weapon')
        page.locator('#search').fill('大砍刀')
        page.wait_for_timeout(220)
        require(page.locator('.media-tile img').count()>0,'Materials weapon name/category filter failed')
        page.locator('#search').fill('')
        page.locator('#type').select_option('site')
        require(page.locator('.media-tile img').count()==1,'Hero artwork category failed')
        checks.append('Wiki-only material browser categories and Chinese search')
        page.set_viewport_size({'width':390,'height':844})
        page.goto((ROOT/'index.html').as_uri()+'#armor',wait_until='load')
        require(page.evaluate('document.documentElement.scrollWidth<=innerWidth'),'Mobile horizontal overflow')
        page.locator('#mobile-menu').click()
        require(page.locator('#mobile-menu').get_attribute('aria-expanded')=='true','Mobile menu failed')
        checks.append('Mobile layout and menu')
        require(not external,'Website made external requests')
        browser.close()
    report={'result':'pass' if not errors else 'fail','checks':checks,'passed':len(checks),'errors':errors,
            'images':len(media),'sha256ReferencesVerified':len(provenance),'coverage':coverage}
    (ROOT/'reports/package-validation.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
    print(json.dumps(report,ensure_ascii=True))
    if errors:raise SystemExit(1)


if __name__=='__main__':main()
