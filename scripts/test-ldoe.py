"""LDOE focused browser regression. Optional: pip install playwright; installed Chrome or LCZ_BROWSER."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from playwright.sync_api import sync_playwright, expect
from test_artifacts import TestArtifacts
import json, os, sys, re
sys.stdout.reconfigure(encoding='utf-8')
ROOT=Path(__file__).resolve().parents[1]
GAME_COUNT=len(re.findall(r'\bid: "[^"]+"',(ROOT/'assets/games.js').read_text(encoding='utf-8')))
ARTIFACTS=TestArtifacts('ldoe')
class Quiet(SimpleHTTPRequestHandler):
 def log_message(self,*args):pass
server=ThreadingHTTPServer(('127.0.0.1',0),partial(Quiet,directory=str(ROOT)))
Thread(target=server.serve_forever,daemon=True).start()
BASE=f'http://127.0.0.1:{server.server_port}/LDOE_Wiki/index.html'
report={'passed':[],'errors':[],'missing':[],'external':[],'csp':[],'screenshots':[]}
def passed(text):report['passed'].append(text);print('PASS '+text,flush=True)
def ready(page):
 page.wait_for_function("()=>document.querySelector('#catalog-grid').getAttribute('aria-busy')==='false'")
def view(page,name):
 page.locator('#primary-nav [data-view="'+name+'"]').click();ready(page)
def detail(page,id,title=None):
 page.evaluate("id=>{location.hash='entry='+encodeURIComponent(id)}",id)
 page.wait_for_function("()=>document.querySelector('#detail-dialog').open&&!!document.querySelector('.detail-body')")
 if title:expect(page.locator('#dialog-title')).to_have_text(title)
def close(page):
 page.locator('#dialog-close').click();expect(page.locator('#detail-dialog')).not_to_be_visible()
def attach(page):
 page.on('pageerror',lambda e:report['errors'].append(str(e)))
 page.on('response',lambda r:report['missing'].append({'status':r.status,'url':r.url}) if r.status>=400 else None)
 page.add_init_script("window.__csp=[];document.addEventListener('securitypolicyviolation',e=>window.__csp.push({directive:e.effectiveDirective,uri:e.blockedURI}));")
def overflow(page):
 assert page.evaluate("()=>document.documentElement.scrollWidth<=innerWidth+1")
def screenshot(page,name):
 path=ARTIFACTS.screenshot(page,name+'.png')
 if path:report['screenshots'].append(path)
try:
 with sync_playwright() as pw:
  browser=pw.chromium.launch(channel=os.environ.get('LCZ_BROWSER','chrome'),headless=True);report['browser']=browser.version
  context=browser.new_context(viewport={'width':1440,'height':900},has_touch=True,reduced_motion='reduce')
  context.route('**/*',lambda r:r.continue_() if r.request.url.startswith('http://127.0.0.1:') else (report['external'].append(r.request.url),r.abort())[-1])
  page=context.new_page();page.set_default_timeout(12000);attach(page)
  page.goto(BASE,wait_until='networkidle');ready(page)
  assert page.locator('.item-card').count()==24
  assert page.locator('.atlas-menu a').count()==GAME_COUNT
  expect(page.locator('[data-site-stats]')).to_have_attribute('data-stats-state','preview')
  assert page.evaluate('LDOE_DATA.loaded()')==[]
  resources=page.evaluate("()=>performance.getEntriesByType('resource').map(r=>({url:r.name,bytes:r.decodedBodySize,type:r.initiatorType}))")
  report['initialResources']=resources
  report['initialDataBytes']=sum(r['bytes'] for r in resources if '/LDOE_Wiki/data/' in r['url'])
  assert report['initialDataBytes']<45000
  assert not any(r['url'].endswith('/catalog.js') or r['url'].endswith('/world.js') or '/lazy/' in r['url'] for r in resources)
  overflow(page);screenshot(page,'home-desktop')
  passed('Home: 24 original cards, complete game navigation, preview statistics, under 45KB data')
  page.wait_for_timeout(1200);assert page.evaluate('LDOE_DATA.loaded()')==[]
  passed('Idle home does not prefetch any category, detail, recipe or search dataset')
  expected={'weapons':'150','armor':'248','creatures':'224','resources':'1,016','recipes':'459','locations':'46'}
  for key,value in expected.items():expect(page.locator('#primary-nav [data-view="'+key+'"] .nav-count')).to_have_text(value)
  passed('All six category counts match the original 2143 records')
  page.locator('#pagination [data-page="2"]').first.click();ready(page)
  assert page.evaluate('LDOE_DATA.loaded()')==['category-weapons']
  expect(page.locator('#result-count')).to_contain_text('25–48')
  assert page.locator('.item-card').count()==24
  passed('Home pagination requests only the weapon index, preserving all 150 weapons')
  view(page,'weapons')
  before=len(page.evaluate("performance.getEntriesByType('resource').filter(r=>r.name.includes('/lazy/'))"))
  view(page,'overview');view(page,'weapons')
  after=len(page.evaluate("performance.getEntriesByType('resource').filter(r=>r.name.includes('/lazy/'))"))
  assert before==after
  passed('Repeated category visits reuse the loaded data without duplicate requests')
  page.locator('#filter-chips button').nth(1).click();ready(page)
  assert page.locator('.item-card').count()>0
  page.locator('#sort-select').select_option('stat');ready(page)
  page.locator('[data-layout="list"]').click();expect(page.locator('#catalog-grid')).to_have_class('catalog-grid list-layout')
  page.locator('[data-layout="grid"]').click();view(page,'weapons')
  passed('Subtype filter, numeric sort, grid/list and pagination remain usable')
  # A failed category must be retryable and must not poison the loader cache.
  page.route('**/category-armor.*.js',lambda route:route.abort())
  view(page,'armor');expect(page.locator('[data-action="retry-view"]')).to_be_visible()
  page.unroute('**/category-armor.*.js')
  page.locator('[data-action="retry-view"]').click();ready(page)
  assert page.locator('.item-card').count()==24
  passed('Failed category load shows a working inline retry')
  held=[]
  page.route('**/category-creatures.*.js',lambda route:held.append(route))
  page.locator('#primary-nav [data-view="creatures"]').click()
  for _ in range(30):
   if held:break
   page.wait_for_timeout(50)
  assert held;view(page,'weapons')
  held.pop().continue_();page.wait_for_timeout(150)
  expect(page.locator('#breadcrumb-current')).to_have_text('武器图鉴')
  page.unroute('**/category-creatures.*.js')
  passed('A late category response cannot overwrite a newer navigation choice')
  for key in ['creatures','resources','recipes','locations']:
   view(page,key);expect(page.locator('#result-count')).to_contain_text(expected[key])
   assert page.locator('.item-card').count()==24
  passed('Creatures, resources, 459 crafting/repair recipes and 46 locations render independently')
  view(page,'overview');page.locator('#global-search').fill('Glock 17')
  page.wait_for_function("()=>document.querySelector('#result-count').textContent.includes('Glock 17')&&document.querySelector('#catalog-grid').getAttribute('aria-busy')==='false'")
  assert page.locator('.item-card').count()==3
  expect(page.locator('.item-card h3').first).to_have_text('格洛克 17')
  assert 'search' in page.evaluate('LDOE_DATA.loaded()')
  page.locator('#global-search').fill('松木原木')
  page.wait_for_function("()=>document.querySelector('#result-count').textContent.includes('松木原木')&&document.querySelector('#catalog-grid').getAttribute('aria-busy')==='false'")
  assert page.locator('.item-card').count()>0
  page.locator('#global-search').fill('zzzyyyxxx')
  page.wait_for_function("()=>document.querySelector('#result-count').textContent.includes('zzzyyyxxx')&&document.querySelector('#catalog-grid').getAttribute('aria-busy')==='false'")
  expect(page.locator('.empty-state')).to_be_visible()
  passed('Global English and Chinese search, original text matching and empty results')
  view(page,'weapons')
  page.locator('[data-save="item-0069"]').click();expect(page.locator('#favorites-count')).to_have_text('1')
  page.locator('[data-compare="item-0069"]').click();page.locator('[data-compare="item-0076"]').click()
  expect(page.locator('#compare-count')).to_have_text('2')
  page.locator('#compare-tray [data-action="compare"]').click()
  expect(page.locator('.compare-table')).to_be_visible()
  assert page.locator('.compare-table thead th').count()==3
  close(page)
  passed('Two original weapon IDs retain their stats in the comparison table')
  page.reload(wait_until='networkidle');ready(page)
  expect(page.locator('#favorites-count')).to_have_text('1');expect(page.locator('#compare-count')).to_have_text('2')
  assert page.evaluate('LDOE_DATA.loaded()')==[]
  page.locator('[data-view="favorites"]').click();ready(page)
  assert page.locator('.item-card').count()==1
  expect(page.locator('.item-card h3')).to_have_text('格洛克 17')
  assert all(x.startswith('details-item-') for x in page.evaluate('LDOE_DATA.loaded()'))
  passed('Reload preserves old favorite/comparison IDs; favorites load only required detail chunks')
  detail(page,'item-0001','松木原木')
  expect(page.locator('.variant-details summary').filter(has_text='用于制作')).to_be_visible()
  page.locator('.variant-details summary').filter(has_text='用于制作').click()
  assert page.locator('.variant-details [data-entry^="recipe-"]').count()>0
  close(page)
  passed('Material-use reverse links load from the independent relation index')
  detail(page,'recipe-0001','石斧')
  assert page.locator('#recipe-ingredients .ingredient').count()==2
  page.locator('#recipe-quantity').fill('3')
  expect(page.locator('#recipe-ingredients')).to_contain_text('× 9')
  expect(page.locator('#recipe-ingredients [data-entry="item-0001"] img')).to_be_visible()
  page.locator('#recipe-ingredients [data-entry="item-0001"]').click()
  expect(page.locator('#dialog-title')).to_have_text('松木原木');close(page)
  passed('Crafting material quantities, material images and linked item details remain exact')
  detail(page,'recipe-0255','球棒 · 维修')
  expect(page.locator('.recipe-quantity')).to_contain_text('维修次数')
  expect(page.locator('.recipe-meta')).to_contain_text('24 小时')
  expect(page.locator('.detail-note').filter(has_text='不会额外制造')).to_be_visible()
  page.locator('.detail-actions [data-entry="item-0052"]').click()
  expect(page.locator('#dialog-title')).to_have_text('球棒');close(page)
  passed('Repair semantics, output link and original 86400-second station duration are preserved')
  detail(page,'creature-0001','游荡僵尸')
  assert page.locator('.variant-list details').count()>0
  page.locator('.variant-list summary').first.click()
  assert page.locator('.variant-list .variant-stat').count()>0
  expect(page.locator('.detail-art img')).to_be_visible();close(page)
  passed('Creature variants, base attributes and confirmed images remain available')
  detail(page,'location-0001','家园')
  expect(page.locator('.detail-stats')).to_contain_text('5 ～ 26');close(page)
  passed('Location deep links retain their original environment statistics')
  page.route('**/details-item-40.*.js',lambda route:route.abort())
  page.evaluate("location.hash='entry=item-1281'")
  expect(page.locator('[data-retry-entry="item-1281"]')).to_be_visible()
  page.unroute('**/details-item-40.*.js')
  page.locator('[data-retry-entry="item-1281"]').click();expect(page.locator('.detail-body')).to_be_visible();close(page)
  passed('Failed deep-link data requests can be retried without leaving the detail dialog')
  held=[]
  page.route('**/details-location-1.*.js',lambda route:held.append(route))
  page.evaluate("location.hash='entry=location-0046'")
  for _ in range(30):
   if held:break
   page.wait_for_timeout(50)
  assert held
  detail(page,'creature-0001','游荡僵尸')
  held.pop().continue_();page.wait_for_timeout(200)
  expect(page.locator('#dialog-title')).to_have_text('游荡僵尸')
  close(page);page.unroute('**/details-location-1.*.js')
  passed('Slow detail responses cannot replace the latest selected entry')
  # Cancel a loading modal and prove the arriving response does not reopen it.
  held=[]
  page.route('**/details-item-42.*.js',lambda route:held.append(route))
  page.evaluate("location.hash='entry=item-1349'")
  for _ in range(30):
   if held:break
   page.wait_for_timeout(50)
  assert held;page.keyboard.press('Escape')
  held.pop().continue_();page.wait_for_timeout(200)
  expect(page.locator('#detail-dialog')).not_to_be_visible()
  page.unroute('**/details-item-42.*.js')
  passed('Escape during a pending detail request prevents late modal reopening')
  view(page,'overview');page.locator('[data-action="about"]').first.click()
  expect(page.locator('.coverage-text')).to_contain_text('139 / 224')
  expect(page.locator('.about-counts')).to_contain_text('459');close(page)
  page.keyboard.press('/');expect(page.locator('#global-search')).to_be_focused()
  passed('About counts, confirmed-image coverage and keyboard search still work')
  report['csp']+=page.evaluate('window.__csp')
  for width,height in [(320,568),(390,844),(568,320)]:
   ctx=browser.new_context(viewport={'width':width,'height':height},has_touch=True,is_mobile=True,reduced_motion='reduce')
   p=ctx.new_page();attach(p);p.goto(BASE,wait_until='networkidle');ready(p);overflow(p)
   expect(p.locator('#menu-toggle')).to_be_visible();p.locator('#menu-toggle').tap()
   expect(p.locator('#sidebar')).to_have_class('sidebar open')
   p.locator('#primary-nav [data-view="creatures"]').tap();ready(p)
   expect(p.locator('#sidebar')).to_have_class('sidebar')
   p.locator('.card-open').first.tap();expect(p.locator('.detail-body')).to_be_visible();overflow(p)
   assert p.locator('#detail-dialog').evaluate('(el)=>getComputedStyle(el).borderRadius')=='0px'
   screenshot(p,'detail-'+str(width));close(p)
   p.locator('.atlas-switch summary').tap();expect(p.locator('.atlas-menu')).to_be_visible();overflow(p)
   report['csp']+=p.evaluate('window.__csp');ctx.close()
  passed('320px, 390px and phone landscape: touch navigation, detail, game switcher and no overflow')
  # Cold global search downloads one search index plus only visible detail buckets.
  cold=browser.new_context(viewport={'width':1440,'height':900});p=cold.new_page();attach(p)
  p.goto(BASE,wait_until='networkidle');p.locator('#global-search').fill('Glock 17 远程武器')
  p.wait_for_function("()=>document.querySelector('#result-count').textContent.includes('Glock 17')&&document.querySelector('#catalog-grid').getAttribute('aria-busy')==='false'")
  parts=p.evaluate('LDOE_DATA.loaded()')
  assert set(parts)=={'search','details-item-2'},parts
  passed('Cold global search requests only its search index and the one matching detail bucket')
  cold.close()
  offline=browser.new_context(viewport={'width':1440,'height':900});p=offline.new_page();attach(p)
  p.goto((ROOT/'LDOE_Wiki/index.html').as_uri()+'#entry=recipe-0001',wait_until='load')
  expect(p.locator('#dialog-title')).to_have_text('石斧');expect(p.locator('#recipe-ingredients')).to_contain_text('松木原木')
  assert p.locator('.detail-art img').evaluate('(img)=>img.complete&&img.naturalWidth>0')
  report['csp']+=p.evaluate('window.__csp');offline.close()
  passed('file:// cold deep link loads hashed scripts and original images without a server')
  assert not report['errors'],report['errors']
  assert not report['missing'],report['missing']
  assert not report['csp'],report['csp']
  assert not report['external'],report['external']
  passed('No JavaScript exceptions, CSP violations, HTTP 404s or third-party requests')
  browser.close()
finally:
 server.shutdown()
 ARTIFACTS.finish(report)
 print(json.dumps({'passed':len(report['passed']),'errors':report['errors'],'missing':report['missing'],'csp':report['csp']},ensure_ascii=False),flush=True)
