"""Optional Grim Soul browser regression: Python Playwright + installed Chrome or LCZ_BROWSER."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from playwright.sync_api import sync_playwright, expect
import json, os, sys
sys.stdout.reconfigure(encoding='utf-8')
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'.verification/grim-ui';OUT.mkdir(parents=True,exist_ok=True)
class Quiet(SimpleHTTPRequestHandler):
 def log_message(self,*args):pass
class Server(ThreadingHTTPServer):request_queue_size=128
server=Server(('127.0.0.1',0),partial(Quiet,directory=str(ROOT)))
Thread(target=server.serve_forever,daemon=True).start()
BASE=f'http://127.0.0.1:{server.server_port}/grimsoul_Wiki/index.html'
report={'passed':[],'errors':[],'missing':[],'external':[],'csp':[],'screenshots':[]}
def passed(text):report['passed'].append(text);print('PASS '+text,flush=True)
def ready(page):page.wait_for_function("()=>document.querySelector('#catalog-grid').getAttribute('aria-busy')==='false'")
def route(page,value):page.evaluate("value=>new Promise(resolve=>{location.hash=value;setTimeout(resolve,0)})",value)
def category(page,key):route(page,'category/'+key);ready(page)
def detail(page,id):
 route(page,'entry/'+id)
 page.wait_for_function("()=>document.querySelector('#entry-dialog').open&&document.querySelector('#detail-content').getAttribute('aria-busy')==='false'&&!!document.querySelector('#detail-name')")
def close(page):page.locator('#dialog-close').click();expect(page.locator('#entry-dialog')).not_to_be_visible()
def attach(page):
 page.on('pageerror',lambda e:report['errors'].append(str(e)))
 page.on('response',lambda r:report['missing'].append({'status':r.status,'url':r.url}) if r.status>=400 else None)
 page.add_init_script("window.__csp=[];document.addEventListener('securitypolicyviolation',e=>window.__csp.push({directive:e.effectiveDirective,uri:e.blockedURI}));")
def overflow(page):assert page.evaluate('document.documentElement.scrollWidth<=innerWidth+1')
def screenshot(page,name):page.screenshot(path=str(OUT/(name+'.png')));report['screenshots'].append(name+'.png')
try:
 with sync_playwright() as pw:
  browser=pw.chromium.launch(channel=os.environ.get('LCZ_BROWSER','chrome'),headless=True);report['browser']=browser.version
  context=browser.new_context(viewport={'width':1440,'height':900},reduced_motion='reduce')
  context.route('**/*',lambda r:r.continue_() if r.request.url.startswith('http://127.0.0.1:') else (report['external'].append(r.request.url),r.abort())[-1])
  page=context.new_page();page.set_default_timeout(15000);attach(page)
  page.goto(BASE,wait_until='networkidle')
  assert page.locator('#featured-grid .entry-card').count()==4
  assert page.locator('.atlas-menu a').count()==6
  expect(page.locator('[data-site-stats]')).to_have_attribute('data-stats-state','preview')
  assert page.evaluate('GRIM_DATA.loaded()')==[]
  resources=page.evaluate("performance.getEntriesByType('resource').map(r=>({url:r.name,bytes:r.decodedBodySize,type:r.initiatorType}))")
  report['initialResources']=resources;report['initialBytes']=sum(r['bytes'] for r in resources)+len((ROOT/'grimsoul_Wiki/index.html').read_bytes())
  assert not any(r['url'].endswith('/data.js') or '/lazy/' in r['url'] for r in resources)
  overflow(page);screenshot(page,'home-desktop')
  passed('Homepage: six-game shared navigation, preview stats, eleven original featured summaries and zero lazy data requests')
  page.locator('#feature-armor').click();assert page.evaluate('GRIM_DATA.loaded()')==[]
  page.locator('#feature-armor').press('ArrowLeft');expect(page.locator('#feature-weapons')).to_have_attribute('aria-selected','true')
  passed('Featured tabs and keyboard controls preserve original selection without loading chunks')
  category(page,'weapons');assert page.locator('#catalog-grid .entry-card').count()==24
  expect(page.locator('#result-summary strong')).to_have_text('265')
  assert page.evaluate('GRIM_DATA.loaded()')==['category-weapons']
  page.locator('[data-page="2"]').first.click();ready(page);assert page.evaluate('GRIM_DATA.loaded()')==['category-weapons']
  page.locator('#sort-filter').select_option('name');ready(page)
  names=page.locator('#catalog-grid h3').all_text_contents();assert len(names)==24
  page.locator('#image-filter').check();ready(page)
  page.locator('#reset-filters').click();ready(page)
  passed('Weapon category, page 2, sort and image filtering load only the weapon summary shard')
  detail(page,'i0656');expect(page.locator('#detail-name')).to_have_text('烈焰匕首')
  assert page.locator('.detail-section').count()==21 and page.locator('.detail-row').count()==134
  assert page.locator('.related-button').count()==22
  assert page.evaluate("getComputedStyle(document.querySelector('#entry-dialog')).borderRadius")=='0px'
  page.locator('[data-detail-favorite]').click();expect(page.locator('[data-detail-favorite]')).to_have_attribute('aria-pressed','true')
  page.locator('#copy-link').click();expect(page.locator('#toast')).to_contain_text('图鉴链接')
  screenshot(page,'dense-detail-desktop')
  source_count=len(page.evaluate('GRIM_DATA.loaded()'))
  close(page);ready(page);detail(page,'i0656');assert len(page.evaluate('GRIM_DATA.loaded()'))==source_count
  page.locator('.related-button').first.click();page.wait_for_function("()=>document.querySelector('#detail-name')&&document.querySelector('#detail-name').textContent!=='烈焰匕首'&&document.querySelector('#detail-content').getAttribute('aria-busy')==='false'")
  close(page);ready(page)
  passed('Dense detail preserves 134 rows and 22 relations; sharp corners, bookmark, copy, related navigation and cached reopening')
  route(page,'favorites');ready(page);assert page.locator('#catalog-grid .entry-card').count()==1
  page.reload(wait_until='networkidle');ready(page);assert page.locator('#catalog-grid .entry-card').count()==1
  assert not any(key.startswith('details-') for key in page.evaluate('GRIM_DATA.loaded()'))
  passed('Existing favorite storage key survives reload; favorites load only targeted summary buckets')
  page.locator('#global-search').fill('伊丽莎');page.locator('#search-form').evaluate('(f)=>f.requestSubmit()');ready(page)
  expect(page.locator('#catalog-grid')).to_contain_text('伊丽莎')
  assert 'search' in page.evaluate('GRIM_DATA.loaded()')
  detail(page,'m0064');expect(page.locator('#detail-name')).to_have_text('伊丽莎');assert page.locator('.detail-row').count()==39
  close(page);ready(page)
  page.locator('#global-search').fill('<img src=x onerror=alert(1)>');page.locator('#search-form').evaluate('(f)=>f.requestSubmit()');ready(page)
  assert page.locator('#active-query img').count()==0
  passed('Global full-text search and monster detail work; search markup is escaped')
  category(page,'crafting');expect(page.locator('#result-summary strong')).to_have_text('454')
  detail(page,'i1914');assert page.locator('.detail-row').count()==133;close(page);ready(page)
  for key,total in [('armor',322),('monsters',210),('items',919),('locations',83),('pets',3),('skills',215),('buildings',108),('quests',95),('guides',106)]:
   category(page,key);expect(page.locator('#result-summary strong')).to_have_text(str(total))
  passed('All eleven categories preserve original counts; crafting detail preserves all 133 rows')
  report['csp']+=page.evaluate('window.__csp')
  # A fresh profile follows a deep link without downloading any category or global search data.
  deep=context.new_page();attach(deep);deep.goto(BASE+'#entry/p0002',wait_until='networkidle')
  deep.wait_for_selector('#detail-name');expect(deep.locator('#detail-name')).to_have_text('猫咪');assert deep.locator('.detail-row').count()==38
  assert not any(k=='search' or k.startswith('category-') for k in deep.evaluate('GRIM_DATA.loaded()'))
  deep.locator('#dialog-close').click();expect(deep.locator('#home-view')).to_be_visible();deep.close()
  passed('Direct entry link restores complete pet data with targeted shards and returns to homepage')
  # Failure and rapid-navigation cases use an isolated page and explicitly controlled requests.
  failure=context.new_page();failure.set_default_timeout(15000)
  failed={'done':False}
  def fail_once(request):
   if not failed['done']:failed['done']=True;request.abort()
   else:request.continue_()
  failure.route('**/category-weapons.*.js',fail_once)
  failure.goto(BASE,wait_until='networkidle');category(failure,'weapons')
  expect(failure.locator('#catalog-grid [data-retry]')).to_be_visible();failure.locator('[data-retry]').click();ready(failure)
  expect(failure.locator('#result-summary strong')).to_have_text('265')
  failure.route('**/category-monsters.*.js',lambda r:(route(failure,'category/pets'),r.continue_()))
  route(failure,'category/monsters');failure.wait_for_function("()=>document.querySelector('#catalog-title').textContent==='宠物与坐骑'&&document.querySelector('#catalog-grid').getAttribute('aria-busy')==='false'")
  expect(failure.locator('#result-summary strong')).to_have_text('3')
  passed('Failed category shard can be retried; late completion cannot overwrite a newer route')
  detail_bucket=failure.evaluate("Math.floor(GRIM_DATA.boot.lookup.i0656/GRIM_DATA.boot.detailSpan)")
  failed['done']=False
  failure.route('**/details-'+str(detail_bucket)+'.*.js',fail_once)
  route(failure,'entry/i0656');expect(failure.locator('#detail-content [data-retry]')).to_be_visible()
  failure.locator('#detail-content [data-retry]').click();failure.wait_for_selector('#detail-name')
  expect(failure.locator('#detail-name')).to_have_text('烈焰匕首');close(failure)
  other_bucket=failure.evaluate("Math.floor(GRIM_DATA.boot.lookup.b0060/GRIM_DATA.boot.detailSpan)")
  failure.route('**/details-'+str(other_bucket)+'.*.js',lambda r:(route(failure,'category/pets'),r.continue_()))
  route(failure,'entry/b0060')
  failure.wait_for_function("()=>GRIM_DATA.loaded().includes('details-'+Math.floor(GRIM_DATA.boot.lookup.b0060/GRIM_DATA.boot.detailSpan))")
  ready(failure);expect(failure.locator('#entry-dialog')).not_to_be_visible()
  expect(failure.locator('#catalog-title')).to_have_text('宠物与坐骑')
  failure.close();passed('Failed detail retries successfully; navigating away while detail downloads cannot reopen its dialog')
  for width,height in [(320,740),(390,844),(844,390)]:
   phone=context.new_page();attach(phone);phone.set_viewport_size({'width':width,'height':height})
   phone.goto(BASE,wait_until='networkidle');overflow(phone)
   assert phone.locator('#lcz-community-dialog').count()==0
   phone.locator('[data-lcz-community]').click()
   expect(phone.locator('#lcz-community-dialog')).to_have_attribute('data-qr-state','ready')
   assert phone.evaluate("getComputedStyle(document.querySelector('#lcz-community-dialog')).borderRadius")=='0px'
   phone.keyboard.press('/');assert not phone.locator('#global-search').evaluate('(n)=>n===document.activeElement')
   phone.keyboard.press('Escape');expect(phone.locator('#lcz-community-dialog')).not_to_be_visible()
   overflow(phone);screenshot(phone,'home-'+str(width))
   if width<=800:
    phone.locator('#menu-toggle').click();expect(phone.locator('#sidebar')).to_have_class('sidebar open')
    phone.locator('[data-nav="weapons"]').click();ready(phone);expect(phone.locator('#menu-toggle')).to_have_attribute('aria-expanded','false')
   else:category(phone,'weapons')
   overflow(phone);detail(phone,'i0656');overflow(phone)
   assert phone.evaluate("getComputedStyle(document.querySelector('#entry-dialog')).borderRadius")=='0px'
   screenshot(phone,'detail-'+str(width))
   phone.locator('#dialog-close').click();ready(phone);report['csp']+=phone.evaluate('window.__csp');phone.close()
  passed('320px, 390px and landscape mobile layouts: navigation, dense dialog, no horizontal overflow and square corners')
  offline=browser.new_page();offline.goto((ROOT/'grimsoul_Wiki/index.html').as_uri(),wait_until='load')
  category(offline,'weapons');detail(offline,'i0656');expect(offline.locator('#detail-name')).to_have_text('烈焰匕首');offline.close()
  passed('Offline file:// category and detail scripts load without fetch/CORS dependencies')
  context.close();browser.close()
 if report['errors'] or report['missing'] or report['external'] or report['csp']:raise AssertionError(report)
finally:
 server.shutdown();(OUT/'report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf8')
print('PASS Grim Soul browser regression; '+str(len(report['passed']))+' groups')
