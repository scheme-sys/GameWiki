"""Real-browser regression for optional music and continuous same-site navigation.
Run: python scripts/test-music.py (Python Playwright + installed Chrome).
LCZ_BROWSER=msedge chooses Edge; LCZ_MUSIC_CASE filters case names.
"""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from urllib.parse import quote, urlsplit
import json, os, re, sys, traceback
from playwright.sync_api import sync_playwright, expect

sys.stdout.reconfigure(encoding='utf-8')
REPOSITORY = Path(__file__).resolve().parents[1]
ROOT = Path(os.environ.get('LCZ_SITE_ROOT',str(REPOSITORY))).resolve()
PREFIX = os.environ.get('LCZ_SITE_PREFIX','/')
OUT = REPOSITORY / '.verification/music' / os.environ.get('LCZ_MUSIC_REPORT','source')
OUT.mkdir(parents=True, exist_ok=True)
class Handler(SimpleHTTPRequestHandler):
    def log_message(self, *args): pass
    def translate_path(self,path):
        return super().translate_path('/'+path[len(PREFIX):] if path.startswith(PREFIX) else path)
    def send_head(self):
        if self.path.split('?')[0].endswith('.mp3'):
            path=Path(self.translate_path(self.path)); size=path.stat().st_size
            match=re.match(r'bytes=(\d+)-(\d*)',self.headers.get('Range',''))
            start=int(match[1]) if match else 0
            end=min(int(match[2]),size-1) if match and match[2] else size-1
            self.send_response(206 if match else 200)
            self.send_header('Content-Type','audio/mpeg');self.send_header('Accept-Ranges','bytes')
            self.send_header('Content-Length',str(end-start+1))
            if match:self.send_header('Content-Range',f'bytes {start}-{end}/{size}')
            self.end_headers();file=path.open('rb');file.seek(start);self.media_remaining=end-start+1
            return file
        return super().send_head()
    def copyfile(self,source,output):
        if hasattr(self,'media_remaining'):
            while self.media_remaining>0:
                data=source.read(min(65536,self.media_remaining))
                if not data:break
                output.write(data);self.media_remaining-=len(data)
        else:super().copyfile(source,output)
class Server(ThreadingHTTPServer):
    request_queue_size = 128
    def handle_error(self,request,address): pass
server = Server(('127.0.0.1', 0), partial(Handler, directory=str(ROOT)))
Thread(target=server.serve_forever, daemon=True).start()
BASE = f'http://127.0.0.1:{server.server_port}'+PREFIX
report = {'passed': [], 'failed': [], 'errors': [], 'missing': [], 'external': []}
PAGES = ['index.html', 'Craft of Survival/wiki.html', 'Day R Survival/wiki_dayR.html',
         'Westland Survival/westland_wiki.html', 'Westland Survival/westland_difficulty_design.html', 'Westland Survival/westland_difficulty_analysis.html',
         'Westland Survival/基地.html', 'DawnofZombiewiki/index.html', 'LDOE_Wiki/index.html', 'grimsoul_Wiki/index.html']

def load(page, path='index.html'):
    page.goto(BASE + quote(path, safe='/?=#%&'), wait_until='networkidle')
    expect(page.locator('.lcz-music-toggle')).to_be_visible()

def start(page):
    page.locator('.lcz-music-toggle').click()
    page.wait_for_function("() => window.LCZMusic.snapshot().status==='playing'")
    page.wait_for_function("() => window.LCZMusic.snapshot().time>.1")

def frame_ready(page, path):
    page.wait_for_function("p=>{const f=document.querySelector('.lcz-content-frame');return f?.contentDocument?.readyState==='complete'&&decodeURIComponent(f.contentWindow.location.pathname).endsWith(p)&&f.contentWindow.LCZMusic}", arg=path)
    return page.locator('.lcz-content-frame').content_frame

def lazy(page, context):
    media=[]
    page.on('request',lambda request: media.append(request.url) if '.mp3' in request.url else None)
    for path in PAGES:
        load(page,path)
        assert not media, media
        assert page.locator('audio').count()==0
        assert page.locator('.lcz-content-frame').count()==0
        assert page.locator('.lcz-music-toggle').get_attribute('aria-pressed')=='false'
    load(page,'DawnofZombiewiki/index.html')
    page.evaluate("location.hash='weapons'");page.wait_for_timeout(250)
    assert page.locator('.lcz-content-frame').count()==0
    page.go_back();assert page.locator('.lcz-content-frame').count()==0
    context.add_init_script("sessionStorage.setItem('lcz:moonlight-muted','true')")
    load(page)
    page.locator('.world[data-game="craft"] a').click()
    page.wait_for_url('**/Craft%20of%20Survival/wiki.html')
    assert page.locator('.lcz-content-frame').count()==0

def entry(page, context):
    load(page)
    assert page.locator('audio').count()==0
    page.locator('.world[data-game="craft"] a').click()
    frame=frame_ready(page,'Craft of Survival/wiki.html')
    page.wait_for_function("()=>LCZMusic.snapshot().playing")
    expect(frame.locator('.lcz-music-toggle')).to_have_attribute('aria-pressed','true')
    frame.locator('.lcz-music-toggle').click()
    page.wait_for_timeout(450)
    frame.locator('.atlas-switch summary').click()
    frame.locator('.atlas-menu a[href*="grimsoul"]').click()
    frame=frame_ready(page,'grimsoul_Wiki/index.html')
    assert page.evaluate('LCZMusic.snapshot().status')=='off'
    assert page.evaluate('[...document.querySelectorAll("audio")].every(a=>a.paused)')
    frame.locator('.atlas-home').click();frame=frame_ready(page,'index.html')
    frame.locator('.world[data-game="ldoe"] a').click();frame=frame_ready(page,'LDOE_Wiki/index.html')
    assert page.evaluate('LCZMusic.snapshot().status')=='off'
    page.reload(wait_until='networkidle');frame=frame_ready(page,'LDOE_Wiki/index.html')
    assert page.locator('audio').count()==0
    frame.locator('.atlas-switch summary').click();frame.locator('.atlas-menu a[href*="DawnofZombiewiki"]').click()
    frame_ready(page,'DawnofZombiewiki/index.html')
    assert page.locator('audio').count()==0

def search_entry(page, context):
    load(page)
    page.locator('#search-open').click()
    page.locator('#game-search').fill('Grim')
    page.locator('.search-result').first.click()
    frame=frame_ready(page,'grimsoul_Wiki/index.html')
    page.wait_for_function("()=>LCZMusic.snapshot().playing")
    assert page.locator('dialog[open]').count()==0
    frame.locator('.atlas-switch summary').click()
    frame.locator('.atlas-menu a[href*="DawnofZombiewiki"]').click()
    frame=frame_ready(page,'DawnofZombiewiki/index.html')
    expect(frame.locator('.lcz-music-toggle')).to_have_attribute('aria-pressed','true')
    frame.locator('.lcz-music-toggle').click()

def continuity(page, context):
    load(page);start(page)
    page.evaluate('window.originalPlayer=window.LCZMusic;window.originalAudio=document.querySelector("audio")')
    before=page.evaluate('LCZMusic.snapshot().time')
    page.locator('.world[data-game="craft"] a').click()
    frame=frame_ready(page,'Craft of Survival/wiki.html')
    assert page.evaluate('window.originalPlayer===LCZMusic&&window.originalAudio===document.querySelector("audio")')
    assert page.evaluate('LCZMusic.snapshot().time')>before
    expect(frame.locator('.article-card').first).to_be_visible()
    expect(frame.locator('.lcz-music-toggle')).to_have_attribute('aria-pressed','true')
    frame.locator('.article-card').first.click();expect(frame.locator('#detail-dialog')).to_be_visible()
    frame.locator('#dialog-close').click()
    frame.locator('.atlas-switch summary').click()
    frame.locator('.atlas-menu a[href*="grimsoul"]').click()
    frame=frame_ready(page,'grimsoul_Wiki/index.html')
    expect(frame.locator('.lcz-music-toggle')).to_have_attribute('aria-pressed','true')
    frame.locator('#chapter-grid a').first.click()
    expect(frame.locator('#catalog-view')).to_be_visible()
    page.wait_for_timeout(250)
    assert 'category' in page.url
    page.go_back()
    expect(frame.locator('#home-view')).to_be_visible()
    page.go_back();frame_ready(page,'Craft of Survival/wiki.html')
    page.go_forward();frame=frame_ready(page,'grimsoul_Wiki/index.html')
    frame.locator('.lcz-music-toggle').click()
    page.wait_for_timeout(430)
    assert page.evaluate('[...document.querySelectorAll("audio")].every(a=>a.paused)')
    frame.locator('.lcz-music-toggle').click();page.wait_for_function("() => LCZMusic.snapshot().status==='playing'")
    frame.locator('.atlas-home').click();frame=frame_ready(page,'index.html')
    expect(frame.locator('.world')).to_have_count(6)
    assert page.evaluate('LCZMusic.snapshot().time')>before
    assert page.evaluate('document.body.classList.contains("scene-still")')
    frame.locator('.lcz-music-toggle').click()

def movements(page, context):
    media=[];page.on('request',lambda r:media.append(r.url) if '.mp3' in r.url else None)
    load(page);start(page)
    page.wait_for_function("() => Number.isFinite(document.querySelector('audio').duration)")
    assert set(urlsplit(url).path for url in media)=={PREFIX+'assets/music/moonlight-1.mp3'}
    page.emulate_media(reduced_motion='no-preference')
    page.wait_for_function("() => parseFloat(document.querySelector('.lcz-music-control').style.getPropertyValue('--music-level'))>0",timeout=15000)
    for target in [1,2,0]:
        page.evaluate("()=>{const a=[...document.querySelectorAll('audio')].find(a=>!a.paused);a.currentTime=a.duration-3.5}")
        page.wait_for_function('i=>LCZMusic.snapshot().index===i',arg=target,timeout=12000)
        page.wait_for_timeout(2600)
        assert page.evaluate('LCZMusic.snapshot().status')=='playing'
    page.locator('.lcz-music-toggle').click();page.wait_for_timeout(450)
    assert page.evaluate('[...document.querySelectorAll("audio")].every(a=>a.paused)')
    assert page.locator('.lcz-music-toggle').get_attribute('aria-pressed')=='false'
    page.reload(wait_until='networkidle')
    assert page.locator('audio').count()==0
    assert page.locator('.lcz-music-toggle').get_attribute('aria-pressed')=='false'

def direct(page, context):
    load(page,'LDOE_Wiki/index.html');start(page)
    page.locator('.atlas-switch summary').click();page.locator('.atlas-menu a[href*="DawnofZombiewiki"]').click()
    frame=frame_ready(page,'DawnofZombiewiki/index.html')
    assert page.evaluate('LCZMusic.snapshot().playing')
    frame.locator('.atlas-home').click();frame_ready(page,'index.html')
    current=page.url
    page.reload(wait_until='networkidle');frame=frame_ready(page,'index.html')
    assert page.url==current
    assert page.locator('audio').count()==0
    expect(frame.locator('.lcz-music-toggle')).to_have_attribute('aria-pressed','false')

def recovery(page, context):
    load(page)
    assert page.evaluate("LCZSite.navigate('https://example.com/index.html')") is False
    assert page.evaluate("LCZSite.navigate('assets/games.js')") is False
    assert page.locator('.lcz-content-frame').count()==0
    page.route('**/moonlight-1.mp3',lambda route:route.abort())
    page.locator('.lcz-music-toggle').click()
    page.wait_for_function("()=>LCZMusic.snapshot().status==='error'")
    assert page.locator('.lcz-music-toggle').get_attribute('aria-pressed')=='false'
    page.unroute('**/moonlight-1.mp3')
    start(page)
    for _ in range(3):
        page.locator('.lcz-music-toggle').click()
        page.wait_for_timeout(50)
        page.locator('.lcz-music-toggle').click()
    page.wait_for_function("()=>LCZMusic.snapshot().status==='playing'")
    page.wait_for_timeout(600)
    assert page.evaluate('[...document.querySelectorAll("audio")].filter(a=>!a.paused).length')==1
    page.locator('.lcz-music-toggle').click();page.wait_for_timeout(450)
    assert page.evaluate('[...document.querySelectorAll("audio")].every(a=>a.paused)')

def phone(page, context):
    for path in ['index.html','Craft of Survival/wiki.html','Westland Survival/westland_wiki.html','Day R Survival/wiki_dayR.html']:
        load(page,path)
        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
        box=page.locator('.lcz-music-toggle').bounding_box()
        assert box['x']>=0 and box['x']+box['width']<=320
        page.screenshot(path=str(OUT/('mobile-'+path.split('/')[0].replace(' ','-')+'.jpg')),quality=85)
    load(page);start(page)
    page.locator('.world[data-game="dawn"] a').tap();frame=frame_ready(page,'DawnofZombiewiki/index.html')
    assert page.evaluate('LCZMusic.snapshot().playing')
    expect(frame.locator('.lcz-music-toggle')).to_have_attribute('aria-pressed','true')
    frame.locator('.lcz-music-toggle').tap()

with sync_playwright() as p:
    browser=p.chromium.launch(channel=os.environ.get('LCZ_BROWSER','chrome'),headless=True)
    for name,fn,mobile in [('inactive stays lazy and uses native links',lazy,False),('entering a game starts music, manual mute persists',entry,False),('search entry closes modal and keeps wiki interactive',search_entry,False),('audio persists across wiki history and home',continuity,False),('three movements crossfade in order and remain opt-in',movements,False),('direct wiki playback and route reload',direct,False),('network recovery, rapid toggles and route boundaries',recovery,False),('320px phone controls and continuous playback',phone,True),('touch entry starts music and respects mute',entry,True)]:
        if os.environ.get('LCZ_MUSIC_CASE') and not re.search(os.environ['LCZ_MUSIC_CASE'],name):continue
        context=browser.new_context(viewport={'width':320 if mobile else 1440,'height':740 if mobile else 960},is_mobile=mobile,has_touch=mobile,reduced_motion='reduce')
        page=context.new_page()
        page.on('pageerror',lambda e:report['errors'].append(str(e)))
        page.on('response',lambda r:report['missing'].append(r.url) if r.status>=400 else None)
        page.on('request',lambda r:report['external'].append(r.url) if not r.url.startswith(BASE) else None)
        try:
            fn(page,context);report['passed'].append(name);print('PASS '+name,flush=True)
        except Exception:
            report['failed'].append({'name':name,'error':traceback.format_exc()});print('FAIL '+name+'\n'+traceback.format_exc(),flush=True)
            print(page.evaluate('()=>({player:window.LCZMusic?.snapshot(),audio:[...document.querySelectorAll("audio")].map(a=>({src:a.src,current:a.currentTime,duration:a.duration,paused:a.paused,ready:a.readyState,error:a.error?.message}))})'),flush=True)
            page.screenshot(path=str(OUT/('failure-'+name.replace(' ','-')+'.jpg')))
        finally:context.close()
    browser.close()
server.shutdown()
(OUT/'report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'passed':len(report['passed']),'failed':len(report['failed']),'errors':report['errors'],'missing':report['missing'],'external':report['external']},ensure_ascii=False))
sys.exit(bool(report['failed'] or report['errors'] or report['missing'] or report['external']))
