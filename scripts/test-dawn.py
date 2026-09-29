from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from urllib.parse import quote
from playwright.sync_api import sync_playwright, expect
import json, math, time, re, sys, os
sys.stdout.reconfigure(encoding='utf-8')
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'.verification'/'dawn-ui'
SOURCE=json.loads((ROOT/'DawnofZombiewiki/data/catalog.json').read_text(encoding='utf-8'))
OUT.mkdir(parents=True,exist_ok=True)
class Quiet(SimpleHTTPRequestHandler):
 def log_message(self,*args):pass
server=ThreadingHTTPServer(('127.0.0.1',0),partial(Quiet,directory=str(ROOT)))
Thread(target=server.serve_forever,daemon=True).start()
BASE=f'http://127.0.0.1:{server.server_port}/DawnofZombiewiki/index.html'
report={'passed':[],'errors':[],'csp':[],'external':[],'timings':{},'screenshots':[],'issues':[]}

def passed(name):report['passed'].append(name);print('PASS '+name,flush=True)
def capture(page,name):
 page.screenshot(path=str(OUT/(name+'.jpg')),full_page=False,quality=85);report['screenshots'].append(name+'.jpg')
def route(page,name):
 started=time.perf_counter();page.evaluate('(route)=>{location.hash=route}',name);page.wait_for_function("target=>{const m=document.getElementById('main');return m.getAttribute('aria-busy')==='false'&&m.dataset.route===target}",arg=name.split('?')[0] if name.split('?')[0] in ['home','weapon','armor','enemy','companion','resource','consumable','building','other','recipes','locations','quests','gacha','guides','library','about','favorites','search'] else 'home');page.wait_for_timeout(70)
 report['timings'].setdefault('routes',{})[name]=round((time.perf_counter()-started)*1000,1)
 assert page.locator('#main').inner_text().strip()
def no_overflow(page,label):
 value=page.evaluate('({width:innerWidth,scroll:document.documentElement.scrollWidth})')
 assert value['scroll']<=value['width']+1,(label,value)
def no_player_codes(page,label):
 text=page.locator('#main').inner_text()
 match=re.search(r'EntityId|assetbundle|prefab|assets/|data/|\b[A-Za-z][A-Za-z0-9]*_[A-Za-z0-9_]+\b|\{\d+\}',text,re.I)
 if match:report['issues'].append({'page':label,'technicalText':text[max(0,match.start()-70):match.end()+100]})

try:
 with sync_playwright() as p:
  browser=p.chromium.launch(channel=os.environ.get('LCZ_BROWSER','chrome'),headless=True);report['browser']=browser.version
  context=browser.new_context(viewport={'width':1440,'height':960},has_touch=True)
  context.on('request',lambda req:report['external'].append(req.url) if req.url.startswith('http') and '127.0.0.1' not in req.url else None)
  page=context.new_page();page.set_default_timeout(12000)
  page.on('pageerror',lambda e:report['errors'].append(str(e)))
  page.add_init_script("window.__csp=[];document.addEventListener('securitypolicyviolation',e=>window.__csp.push({directive:e.effectiveDirective,uri:e.blockedURI}));")
  start=time.perf_counter();page.goto(BASE,wait_until='networkidle');report['timings']['firstLocalLoadMs']=round((time.perf_counter()-start)*1000,1)
  assert page.locator('#main h1').count()==1
  expect(page.locator('[data-site-stats]')).to_have_attribute('data-stats-state','preview')
  assert page.locator('.atlas-menu a').count()==4
  expect(page.locator('#mobile-menu')).to_be_hidden();expect(page.locator('#menu-close')).to_be_hidden()
  no_overflow(page,'desktop-home');capture(page,'home-desktop')
  report['timings']['initialImageRequests']=page.evaluate("performance.getEntriesByType('resource').filter(r=>r.initiatorType==='img').length")
  assert report['timings']['initialImageRequests']<30
  passed('First load shows all data-backed navigation and lazily requests fewer than 30 images')
  initial=page.evaluate("()=>performance.getEntriesByType('resource').map(r=>({url:r.name.split('/DawnofZombiewiki/').pop(),body:r.decodedBodySize,kind:r.initiatorType}))")
  report['timings']['initialResources']=initial
  report['timings']['initialDataBytes']=sum(r['body'] for r in initial if r['url'].startswith('data/'))
  assert report['timings']['initialDataBytes']<100000,report['timings']['initialDataBytes']
  assert page.evaluate("DOZ_DATA.loaded()")==[]
  page.wait_for_timeout(1100)
  assert page.evaluate("DOZ_DATA.loaded()")==[]
  assert not any('/lazy/' in r['url'] or r['url'] in ['data/catalog.js','data/mechanics.js'] for r in initial)
  passed('Home loads under 100 KB of data and does not silently prefetch unused datasets')
  route(page,'weapon')
  assert page.evaluate("DOZ_DATA.loaded()")==['index-weapon']
  before_count=page.evaluate("performance.getEntriesByType('resource').filter(r=>r.name.includes('/lazy/')).length")
  route(page,'home');route(page,'weapon')
  assert before_count==page.evaluate("performance.getEntriesByType('resource').filter(r=>r.name.includes('/lazy/')).length")
  passed('Opening one category loads only its index and revisits reuse the loaded part')
  page.locator('#hidden-filter').check()
  expect(page.locator('#hidden-filter')).to_be_checked()
  page.wait_for_function("()=>DOZ_DATA.loaded().includes('index-weapon-hidden')")
  assert not page.evaluate("DOZ_DATA.loaded().some(k=>k.startsWith('detail-'))")
  passed('Special or hidden entries load only after their explicit filter is enabled')
  # A failed request remains retryable instead of poisoning the promise cache.
  failed=[]
  def fail_armor(request):
   failed.append(request.request.url);request.abort()
  page.route('**/index-armor-*.js',fail_armor)
  route(page,'armor');expect(page.locator('#retry-view')).to_be_visible()
  page.unroute('**/index-armor-*.js',fail_armor)
  page.locator('#retry-view').click();expect(page.locator('.catalog-grid .item-card').first).to_be_visible()
  assert len(failed)==1
  passed('A failed category request has an inline retry and successfully recovers')
  # Hold a request without blocking the browser, navigate away, then release it.
  held=[]
  page.route('**/index-enemy-*.js',lambda request:held.append(request))
  page.evaluate("location.hash='enemy'")
  for attempt in range(30):
   if held:break
   page.wait_for_timeout(100)
  assert held
  route(page,'home');held.pop().continue_();page.wait_for_timeout(150)
  page.unroute('**/index-enemy-*.js')
  expect(page.locator('#crumb')).to_have_text('资料总览');assert page.locator('.hero').count()==1
  passed('A stale category response cannot replace a newer page')
  route(page,'weapon')
  held=[]
  page.route('**/detail-*.js',lambda request:held.append(request))
  page.locator('.catalog-grid .card-main').first.click()
  for attempt in range(30):
   if held:break
   page.wait_for_timeout(100)
  assert len(held)==1
  page.evaluate("document.querySelector('.catalog-grid .card-main').click()")
  page.wait_for_timeout(80);assert len(held)==1
  page.locator('#detail-dialog [data-close]').click();held.pop().continue_()
  page.wait_for_timeout(200);page.unroute('**/detail-*.js')
  expect(page.locator('#detail-dialog')).not_to_be_visible()
  page.locator('.catalog-grid .card-main').first.click()
  expect(page.locator('#detail-dialog h2')).to_be_visible()
  page.locator('#detail-dialog [data-close]').click()
  passed('Concurrent detail loads share one request, closing stays closed, and cached reopening works')
  isolated=browser.new_context(viewport={'width':1280,'height':900})
  fresh=isolated.new_page();fresh.goto(BASE+'#search?q='+quote('频率片段'),wait_until='networkidle')
  expect(fresh.locator('.catalog-grid .item-card')).to_have_count(4)
  loaded=fresh.evaluate('DOZ_DATA.loaded()')
  assert len(loaded)==8 and all(key.startswith('index-') and not key.endswith('-hidden') for key in loaded),loaded
  passed('Cold global search finds an unvisited category without downloading details or hidden entries')
  fresh.evaluate("localStorage.setItem('doz-wiki-favorites','[142]')")
  fresh.goto('about:blank');fresh.goto(BASE+'#favorites',wait_until='networkidle')
  expect(fresh.locator('.catalog-grid .item-card')).to_have_count(1)
  assert fresh.evaluate('DOZ_DATA.loaded()')==['detail-1']
  passed('Cold saved favorites load only their required detail bucket')
  fresh.goto('about:blank');fresh.goto(BASE+'#recipes',wait_until='networkidle')
  expect(fresh.locator('#list-results .info-card')).to_have_count(24)
  assert set(fresh.evaluate('DOZ_DATA.loaded()'))=={'recipes-index','recipes-0'}
  fresh.locator('[data-page="2"]').click()
  expect(fresh.locator('.pagination')).to_contain_text('2 /')
  assert set(fresh.evaluate('DOZ_DATA.loaded()'))=={'recipes-index','recipes-0','recipes-1'}
  passed('Recipe pagination loads an index and only the requested page chunks')
  isolated.close()



  for name in ['home','weapon','armor','enemy','companion','resource','consumable','building','other','recipes','locations','quests','gacha','guides','library','about','favorites','search']:
   route(page,name);no_overflow(page,name);no_player_codes(page,name)
  passed('All 18 routes render without document overflow')
  rows=SOURCE['entries']
  preserved_details=[]
  for field,heading,predicate in [
   ('scenarioStats','不同场景的属性候选',lambda e:bool(e.get('scenarioStats'))),
   ('abilities','特殊能力',lambda e:any(a.get('cooldown',0)>0 for a in e.get('abilities',[]))),
   ('levelStats','等级分段属性',lambda e:bool(e.get('levelStats')))]:
   row=next(e for e in rows if predicate(e))
   value=next(a['cooldown'] for a in row['abilities'] if a.get('cooldown',0)>0) if field=='abilities' else row[field][0]['value']
   preserved_details.append({'id':row['id'],'category':row['category'],'heading':heading,'value':str(int(value)) if isinstance(value,float) and value.is_integer() else str(value)})
  for entry in preserved_details:
   route(page,entry['category']+'?entry='+str(entry['id']));expect(page.locator('#detail-dialog')).to_be_visible()
   expect(page.locator('#detail-dialog')).to_contain_text(entry['heading']);expect(page.locator('#detail-dialog')).to_contain_text(entry['value']);page.locator('#detail-dialog [data-close]').click()
  passed('Player abilities, conditional scenario values and level ranges survive data cleanup')
  route(page,'weapon')
  expect(page.locator('.catalog-grid .item-card').first).to_be_visible()
  name=page.locator('.catalog-grid .item-name').first.inner_text()
  page.locator('#catalog-search').fill(name);page.wait_for_timeout(220)
  assert page.locator('.catalog-grid .item-card').count()>0
  page.locator('.catalog-grid .card-main').first.click();expect(page.locator('#detail-dialog')).to_be_visible()
  expect(page.locator('#detail-dialog h2')).to_contain_text(name)
  capture(page,'detail-desktop')
  page.locator('#detail-dialog [data-save]').click();expect(page.locator('#saved-count')).to_have_text('1')
  page.locator('#detail-dialog [data-close]').click()
  route(page,'favorites');expect(page.locator('.catalog-grid .item-card')).to_have_count(1)
  page.reload(wait_until='networkidle');expect(page.locator('.catalog-grid .item-card')).to_have_count(1)
  passed('Catalog search, detail, favorites and reload persistence')
  with page.expect_download() as download_event:page.locator('#export-csv').click()
  download_event.value.save_as(str(OUT/'favorite-export.csv'))
  assert name in (OUT/'favorite-export.csv').read_text(encoding='utf-8-sig')
  passed('Filtered player CSV downloads correctly')
  route(page,'weapon')
  page.locator('.catalog-grid [data-compare]').nth(0).click();page.locator('.catalog-grid [data-compare]').nth(1).click()
  page.locator('#open-compare').click();expect(page.locator('#compare-dialog')).to_be_visible();assert page.locator('#compare-dialog th.compare-cell').count()==2
  capture(page,'compare-desktop');page.locator('#compare-dialog [data-close]').click();page.locator('#clear-compare').click()
  passed('Two-item equipment comparison and clear tray')
  route(page,'gacha')
  page.locator('#calc-p').fill('5');page.locator('#calc-n').fill('10');expect(page.locator('#calc-value')).to_have_text('40.13%')
  page.locator('#calc-model').select_option('featured');page.locator('#calc-p').fill('100');page.locator('#calc-n').fill('1');expect(page.locator('#calc-value')).to_have_text('50.00%')
  page.locator('#calc-n').fill('2');expect(page.locator('#calc-value')).to_have_text('100.00%')
  page.locator('#calc-n').fill('0');expect(page.locator('#calc-value')).to_have_text('—')
  page.locator('#summon-search').fill('zzzz-no-pool');expect(page.locator('#summon-results .empty-state')).to_be_visible()
  page.locator('#pool-search').fill('zzzz-no-pool');expect(page.locator('#event-pools .empty-state')).to_be_visible()
  passed('Both probability models, invalid input and pool searches')
  route(page,'about')
  assert page.locator('#main a[href*="materials"],#main a[href*="catalog.json"],#main a[href*="reports/"]').count()==0
  assert page.locator('#main a[download]').count()==22
  passed('Player downloads provide 15 CSV tables and 7 guides without developer resources')
  for value in ['{"unexpected":true}','42','"broken"','[null,{},"missing-id",9]']:
   page.evaluate('(value)=>localStorage.setItem("doz-wiki-favorites",value)',value);page.reload(wait_until='networkidle');assert page.locator('#main h1').count()==1
  passed('Malformed favorites storage cannot crash startup')
  page.locator('#global-search').fill('<img data-player-probe src=x onerror=alert(1)>');page.locator('#global-search').press('Enter');page.wait_for_timeout(200)
  assert page.locator('[data-player-probe]').count()==0
  route(page,'constructor');assert '生存，需要' in page.locator('#main').inner_text()
  passed('Search markup and unknown prototype route remain inert')
  # Filenames containing # are encoded as actual path segments, never fragments.
  page.evaluate("location.hash='resource'");page.wait_for_timeout(100);page.locator('#catalog-search').fill('频率片段');page.wait_for_timeout(250)
  image_paths=page.locator('.catalog-grid img').evaluate_all('ns=>ns.map(n=>n.getAttribute("src"))')
  assert image_paths and all('%23' in src for src in image_paths),image_paths
  for img in page.locator('.catalog-grid img').all():img.scroll_into_view_if_needed()
  page.wait_for_timeout(200)
  assert page.locator('.catalog-grid img').evaluate_all('ns=>ns.every(n=>n.complete&&n.naturalWidth>0)')
  passed('All four image filenames containing # load successfully')
  # Dispatch input and navigation in one event turn so the delayed search is pending.
  route_labels={'home':'资料总览','about':'收录与下载','armor':'防具装备','recipes':'制作配方'}
  transitions=0
  for source,selector in [('weapon','#catalog-search'),('recipes','#list-search'),('locations','#list-search'),('quests','#list-search'),('library','#library-search')]:
   for target in ['home','about','armor','recipes']:
    if source==target:continue
    route(page,source)
    page.evaluate("""({selector,target})=>{const input=document.querySelector(selector);input.value='old-query-no-match';input.dispatchEvent(new Event('input',{bubbles:true}));location.hash=target;}""",{'selector':selector,'target':target})
    page.wait_for_timeout(220);expect(page.locator('#crumb')).to_have_text(route_labels[target])
    if target=='armor':expect(page.locator('#catalog-search')).to_have_value('');assert page.locator('.catalog-grid .item-card').count()>0
    if target=='recipes':expect(page.locator('#list-search')).to_have_value('');assert page.locator('#list-results .info-card').count()>0
    transitions+=1
  route(page,'weapon')
  page.evaluate("""()=>{const input=document.querySelector('#catalog-search');input.value='old-query-no-match';input.dispatchEvent(new Event('input',{bubbles:true}));location.hash='search?q='+encodeURIComponent('大砍刀');}""")
  page.wait_for_timeout(220);expect(page.locator('#catalog-search')).to_have_value('大砍刀');assert page.locator('.catalog-grid .item-card').count()>0
  route(page,'weapon')
  page.evaluate("""()=>{const input=document.querySelector('#catalog-search');input.value='old-query-no-match';input.dispatchEvent(new Event('input',{bubbles:true}));document.querySelector('#clear-filters').click();}""")
  page.wait_for_timeout(220);expect(page.locator('#catalog-search')).to_have_value('');assert page.locator('.catalog-grid .item-card').count()>0
  route(page,'library')
  page.evaluate("""()=>{const input=document.querySelector('#library-search');input.value='old-query-no-match';input.dispatchEvent(new Event('input',{bubbles:true}));document.querySelectorAll('[data-library]')[1].click();}""")
  page.wait_for_timeout(220);expect(page.locator('#library-search')).to_have_value('');assert page.locator('#library-results .info-card').count()>0
  assert not report['errors'],report['errors']
  passed(f'{transitions} immediate search-to-route transitions plus new-query, reset and library-tab regressions')
  # Reproduce the publication flow using real touch interactions.
  page.set_viewport_size({'width':390,'height':844});route(page,'weapon')
  page.locator('#catalog-search').fill('大砍刀');page.locator('.card-main').first.tap();expect(page.locator('#detail-dialog')).to_be_visible();page.keyboard.press('Escape')
  page.evaluate("location.hash='about'");expect(page.locator('a[download][href$=".csv"]')).to_have_count(15)
  with page.expect_download() as rapid_download:page.locator('a[download][href$=".csv"]').first.click()
  assert Path(rapid_download.value.path()).stat().st_size>0
  page.wait_for_timeout(220);assert not report['errors'],report['errors']
  passed('Touch search, immediate detail, route switch and CSV download do not leave delayed errors')
  page.locator('#global-search').fill('')
  for width,height in [(390,844),(320,568),(568,320),(844,390)]:
   page.set_viewport_size({'width':width,'height':height})
   for name in ['home','weapon','recipes','quests','gacha','library','about']:
    route(page,name);no_overflow(page,f'{name}-{width}x{height}')
   route(page,'weapon')
   if width<=800:
    page.locator('.skip-link').focus();page.keyboard.press('Enter');expect(page.locator('#main')).to_be_focused();assert page.evaluate('location.hash')=='#weapon'
    page.keyboard.press('Tab');assert not page.locator('#sidebar').evaluate('n=>n.contains(document.activeElement)')
    page.locator('#mobile-menu').click();expect(page.locator('#sidebar')).to_have_class(re.compile(r'open'));page.locator('#nav a[href="#enemy"]').click();expect(page.locator('#crumb')).to_have_text('怪物档案')
    expect(page.locator('#menu-backdrop')).to_be_hidden();expect(page.locator('#main')).to_be_focused()
    page.locator('#mobile-menu').click();page.keyboard.press('Escape');expect(page.locator('#mobile-menu')).to_be_focused()
   route(page,'weapon');page.locator('.catalog-grid .card-main').first.click();expect(page.locator('#detail-dialog')).to_be_visible()
   box=page.locator('#detail-dialog').bounding_box();assert box['x']>=0 and box['x']+box['width']<=width+1
   page.locator('#detail-dialog [data-close]').click()
   assert page.locator('#global-search').evaluate('n=>parseFloat(getComputedStyle(n).fontSize)')>=16 if width<=800 else True
   route(page,'home');capture(page,f'home-{width}x{height}')
   passed(f'{width}x{height} routes, menu and detail remain usable')
  report['csp']+=page.evaluate('window.__csp');assert not report['csp'],report['csp'];assert not report['errors'],report['errors'];assert not report['external'],report['external']
  passed('Normal interaction produces no CSP violations, JavaScript errors or external requests')
  local=context.new_page();local.goto((ROOT/'DawnofZombiewiki/index.html').as_uri(),wait_until='load');expect(local.locator('#main h1')).to_be_visible();local.evaluate("location.hash='weapon'");local.wait_for_function("()=>document.querySelector('#catalog-search')!==null");local.locator('.catalog-grid .card-main').first.click();expect(local.locator('#detail-dialog h2')).to_be_visible();passed('Direct local file supports catalog and details')
  media=context.new_page();media.on('pageerror',lambda e:report['errors'].append(str(e)))
  media.add_init_script("window.__csp=[];document.addEventListener('securitypolicyviolation',e=>window.__csp.push({directive:e.effectiveDirective,uri:e.blockedURI}));")
  media.goto(BASE.replace('index.html','materials.html'),wait_until='networkidle')
  media.locator('#search').fill('频率片段');media.wait_for_timeout(250);expect(media.locator('.media-tile')).to_have_count(4)
  assert media.locator('.media-tile img').evaluate_all('ns=>ns.every(n=>n.complete&&n.naturalWidth>0&&n.getAttribute("src").includes("%23"))')
  assert media.evaluate("window.DOZ_MEDIA.every(row=>!('originalName' in row)&&!('searchText' in row))")
  report['csp']+=media.evaluate('window.__csp');assert not report['csp'],report['csp'];assert not report['errors'],report['errors']
  passed('Local maintenance image browser uses cleaned names and loads encoded image paths')
  browser.close()
finally:
 server.shutdown();(OUT/'report.json').write_text(json.dumps(report,indent=2,ensure_ascii=False),encoding='utf-8')
print(json.dumps(report,ensure_ascii=False,indent=2))