"""Browser regression for Westland first-page, full-catalog and detail lazy loading.
Run: python scripts/test-westland-loading.py (LCZ_BROWSER=msedge is optional).
"""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from urllib.parse import quote
from playwright.sync_api import sync_playwright, expect
from test_artifacts import TestArtifacts
import os, re, sys, time
sys.stdout.reconfigure(encoding='utf-8')
ROOT=Path(__file__).resolve().parents[1]
GAME=ROOT/'Westland Survival'
ARTIFACTS=TestArtifacts('westland-loading')
sys.path.insert(0,str(GAME/'tools'))
from player_schema import read_data
INDEX=read_data(GAME/'wiki-assets/wiki/data/index.js')
BOOT=read_data(GAME/'wiki-assets/wiki/data/bootstrap.js')
class Quiet(SimpleHTTPRequestHandler):
 def log_message(self,*args):pass
server=ThreadingHTTPServer(('127.0.0.1',0),partial(Quiet,directory=str(ROOT)))
Thread(target=server.serve_forever,daemon=True).start()
URL=f'http://127.0.0.1:{server.server_port}/Westland%20Survival/westland_wiki.html'
REPORT={'passed':[],'initial':[],'errors':[],'csp':[],'external':[]}
def passed(name):REPORT['passed'].append(name);print('PASS '+name,flush=True)
def setup(browser,width=1440):
 context=browser.new_context(viewport={'width':width,'height':900 if width>600 else 844},is_mobile=width<600,has_touch=width<600)
 context.on('request',lambda req:REPORT['external'].append(req.url) if req.url.startswith('http') and '127.0.0.1' not in req.url else None)
 page=context.new_page();page.set_default_timeout(15000)
 page.on('pageerror',lambda e:REPORT['errors'].append(str(e)))
 page.add_init_script("window.__csp=[];document.addEventListener('securitypolicyviolation',e=>window.__csp.push({directive:e.effectiveDirective,uri:e.blockedURI}));")
 return context,page
def ready(page,url=URL):
 page.goto(url,wait_until='networkidle');expect(page.locator('.item-card')).to_have_count(60)
 assert page.locator('body').get_attribute('data-loading') is None

def full(page):page.wait_for_function('()=>!window.WIKI_DB._bootstrap');expect(page.locator('#view')).not_to_have_attribute('aria-busy','true')
def checked(page):
 REPORT['csp']+=page.evaluate('window.__csp')
 assert page.evaluate('document.documentElement.scrollWidth<=innerWidth+1')

def click_domain(page,domain):
 page.locator('#topnav [data-domain="'+domain+'"]').click();full(page)
 expect(page.locator('#topnav [data-domain="'+domain+'"]')).to_have_attribute('aria-current','page')

def source_name(row):return row.get('display_zh') or row.get('name_zh') or row.get('name')
try:
 with sync_playwright() as p:
  browser=p.chromium.launch(channel=os.environ.get('LCZ_BROWSER','chrome'),headless=True)
  REPORT['browser']=browser.version
  for width in [1440,390]:
   context,page=setup(browser,width)
   responses=[]
   page.on('response',lambda r:responses.append({'url':r.url,'bytes':int(r.headers.get('content-length','0')),'type':r.request.resource_type}))
   started=time.perf_counter();ready(page);page.wait_for_timeout(600)
   initial=list(responses)
   assert not any('/wiki/data/index.js' in row['url'] or '/data/chunks/' in row['url'] for row in initial)
   assert page.evaluate('window.WIKI_DB._bootstrap.counts.items')==4567
   expect(page.locator('#navItemCount')).to_have_text('4,567')
   expect(page.locator('#resultCount')).to_contain_text('4,567')
   expect(page.locator('#pagination')).to_contain_text('77')
   assert page.locator('#subcategory option').count()==len(BOOT['_bootstrap']['filters']['subcategory'])+1
   data_bytes=sum(row['bytes'] for row in initial if '/wiki/data/' in row['url'])
   assert data_bytes<450000,data_bytes
   REPORT['initial'].append({'width':width,'bytes':sum(row['bytes'] for row in initial),'dataBytes':data_bytes,'localReadyMs':round((time.perf_counter()-started)*1000,1),'requests':len(initial)})
   checked(page);ARTIFACTS.screenshot(page,f'wiki-{width}.jpg',quality=85)
   passed(f'{width}px first page: 60 records, full counts/filters, no full index or chunks')
   target=INDEX['inventory']['items'][-1]
   page.locator('#search').fill(target['id']);full(page)
   expect(page.locator('.item-card[data-item-id="'+target['id']+'"]')).to_be_visible()
   assert page.locator('#search').input_value()==target['id']
   assert len([row for row in responses if '/wiki/data/index.js' in row['url']])==1
   passed(f'{width}px search reaches records outside bootstrap and loads index once')
   page.locator('#reset').click()
   page.locator('[data-page="77"]').click()
   expect(page.locator('.item-card')).to_have_count(7)
   expect(page.locator('#resultCount')).to_contain_text('4,561–4,567')
   page.locator('#reset').click()
   first=page.locator('.item-open').first
   label=(first.text_content() or '').strip();first.click()
   expect(page.locator('#detail')).to_have_attribute('data-ready','true')
   expect(page.locator('#detailTitle')).to_have_text(label)
   chunks=[row for row in responses if '/data/chunks/' in row['url']]
   assert 1<=len(chunks)<=2,len(chunks)
   assert all(re.search(r'\?v=[a-f0-9]{64}$',row['url']) for row in chunks)
   if page.locator('#detailLevel').count()>0:
    values=page.locator('#detailLevel option').evaluate_all('(els)=>els.map(e=>e.value)')
    page.locator('#detailLevel').select_option(values[-1])
    expect(page.locator('#selectedStats')).not_to_be_empty()
   page.locator('#detail [data-close]').click()
   passed(f'{width}px last page includes all 4567 items; detail chunks and levels work')
   for domain,count in [('pets',207),('skins',133),('perks',113),('all',5020)]:
    click_domain(page,domain)
    expect(page.locator('#resultCount')).to_contain_text(f'{count:,}')
    page.locator('.item-open').first.click();expect(page.locator('#detail')).to_have_attribute('data-ready','true');page.locator('#detail [data-close]').click()
   page.locator('#tableMode').click();expect(page.locator('#view table')).to_be_visible()
   page.locator('#gridMode').click();expect(page.locator('.item-card')).to_have_count(60)
   assert len([row for row in responses if '/wiki/data/index.js' in row['url']])==1
   checked(page);context.close()
   passed(f'{width}px all domains, details and view modes retain complete results')
  context,page=setup(browser)
  requests={'count':0}
  def fail_index(route):
   requests['count']+=1
   if requests['count']==1:route.abort()
   else:route.continue_()
  page.route('**/wiki/data/index.js?*',fail_index)
  ready(page);target=INDEX['inventory']['items'][-1]
  page.locator('#search').fill(target['id']);expect(page.locator('[data-retry-catalog]')).to_be_visible()
  expect(page.locator('.item-card')).to_have_count(60)
  assert page.locator('#search').input_value()==target['id']
  page.locator('[data-retry-catalog]').click();full(page)
  expect(page.locator('.item-card[data-item-id="'+target['id']+'"]')).to_be_visible()
  assert requests['count']==2;checked(page);context.close()
  passed('Failed full-index request preserves first page and input; retry succeeds')
  context,page=setup(browser)
  pending=[]
  page.route('**/wiki/data/index.js?*',lambda route:pending.append(route))
  ready(page)
  page.locator('#search').fill('first pending query')
  page.wait_for_timeout(60)
  page.locator('#topnav [data-domain="pets"]').click()
  pet=INDEX['pets'][-1]
  page.locator('#search').fill(pet['id'])
  page.locator('#sort').select_option('name')
  assert len(pending)==1
  pending[0].continue_();full(page)
  expect(page.locator('.item-card[data-item-id="'+pet['id']+'"]')).to_be_visible()
  assert page.locator('#search').input_value()==pet['id']
  expect(page.locator('#sort')).to_have_value('name')
  expect(page.locator('#topnav [data-domain="pets"]')).to_have_attribute('aria-current','page')
  checked(page);context.close()
  passed('Rapid search/domain/sort changes during one delayed download apply only current intent')
  context,page=setup(browser)
  ready(page)
  blocked={'count':0}
  def fail_chunk(route):
   blocked['count']+=1
   if blocked['count']==1:route.abort()
   else:route.continue_()
  page.route('**/wiki/data/chunks/*.js?*',fail_chunk)
  page.locator('.item-open').first.click()
  expect(page.locator('#detail')).to_have_attribute('data-ready','error')
  page.locator('[data-retry-detail]').click();expect(page.locator('#detail')).to_have_attribute('data-ready','true')
  page.locator('#detail [data-close]').click();checked(page);context.close()
  passed('Detail chunk error remains recoverable without reloading page')
  context,page=setup(browser)
  page.goto(URL+'#pets',wait_until='networkidle');full(page)
  expect(page.locator('#resultCount')).to_contain_text('207')
  assert page.locator('body').get_attribute('data-loading') is None
  checked(page);context.close();passed('Direct pet-domain URL completes startup and shows complete catalog')
  context,page=setup(browser)
  ready(page,(GAME/'westland_wiki.html').as_uri())
  page.locator('#search').fill(INDEX['inventory']['items'][-1]['id']);full(page)
  page.locator('.item-open').first.click();expect(page.locator('#detail')).to_have_attribute('data-ready','true')
  checked(page);context.close();passed('file:// first page, full search and detail work through classic local scripts')
  assert not REPORT['errors'],REPORT['errors']
  assert not REPORT['csp'],REPORT['csp']
  assert not REPORT['external'],REPORT['external']
  passed('No JavaScript exceptions, CSP violations or counter/external network requests')
  browser.close()
 REPORT['status']='PASS'
except Exception as error:
 REPORT['status']='FAIL';REPORT['failure']=str(error)
 raise
finally:
 server.shutdown()
 ARTIFACTS.finish(REPORT,'wiki-report.json',aliases=('wiki-report-'+os.environ.get('LCZ_BROWSER','chrome')+'.json',))
