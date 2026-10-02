"""Real-browser regression for automatic music and continuous same-site navigation.
Run: python scripts/test-music.py (Python Playwright + installed Chrome).
LCZ_BROWSER=msedge chooses Edge; LCZ_MUSIC_CASE filters case names.
"""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from urllib.parse import quote, urlsplit
import json, os, re, sys, traceback
from playwright.sync_api import sync_playwright, expect, Error
from test_artifacts import TestArtifacts

sys.stdout.reconfigure(encoding='utf-8')
REPOSITORY = Path(__file__).resolve().parents[1]
ROOT = Path(os.environ.get('LCZ_SITE_ROOT',str(REPOSITORY))).resolve()
PREFIX = os.environ.get('LCZ_SITE_PREFIX','/')
ARTIFACTS = TestArtifacts('music')
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
    # Playing media can keep its response open; use document readiness and
    # explicit player assertions instead of waiting for all network activity.
    page.goto(BASE + quote(path, safe='/?=#%&'), wait_until='load')
    expect(page.locator('.lcz-music-toggle')).to_be_visible()

def start(page):
    page.wait_for_function("() => window.LCZMusic.snapshot().status!=='loading'")
    if not page.evaluate('LCZMusic.snapshot().playing'):
        page.locator('.lcz-music-toggle').click()
    page.wait_for_function("() => window.LCZMusic.snapshot().status==='playing'")
    page.wait_for_function("() => window.LCZMusic.snapshot().time>.1")

def expect_blocked(page):
    expect(page.locator('.lcz-music-control')).to_have_attribute('data-state','blocked')
    expect(page.locator('.lcz-music-toggle')).to_have_attribute('aria-pressed','false')
    expect(page.locator('.lcz-music-toggle')).to_have_attribute('aria-busy','false')
    assert page.evaluate('LCZMusic.snapshot().activated&&!LCZMusic.snapshot().playing')

def autoplay(page, context):
    # This case uses an allowed policy so no input can accidentally unlock audio.
    context.add_init_script("""(()=>{
      const play=HTMLMediaElement.prototype.play;
      window.initialMusicActivation=null;
      HTMLMediaElement.prototype.play=function(...args){
        if(window.initialMusicActivation===null)window.initialMusicActivation=navigator.userActivation.hasBeenActive;
        return play.apply(this,args);
      };
    })()""")
    for address in [BASE+'index.html',BASE+'LDOE_Wiki/index.html',(ROOT/'index.html').as_uri()]:
        page.goto(address,wait_until='load')
        page.wait_for_function("()=>LCZMusic.snapshot().playing&&LCZMusic.snapshot().time>.1")
        expect(page.locator('.lcz-music-toggle')).to_have_attribute('aria-pressed','true')
        assert page.evaluate('[...document.querySelectorAll("audio")].filter(a=>!a.paused).length')==1
        # DevTools evaluations may themselves mark activation; record the first
        # play() call during page startup before inspecting the page.
        assert page.evaluate('initialMusicActivation') is False, 'Automatic playback required input'

def autoplay_click(page, context):
    context.add_init_script("if(!sessionStorage.getItem('lcz:moonlight-position'))sessionStorage.setItem('lcz:moonlight-position',JSON.stringify({index:3,time:42}))")
    media=[]
    page.on('request',lambda request:media.append(request.url) if '.mp3' in request.url else None)
    load(page)
    expect(page.locator('.lcz-music-control')).to_have_attribute('data-state','blocked')
    page.wait_for_timeout(350)
    assert not media, f'Blocked autoplay downloaded unused music: {media}'
    page.reload(wait_until='load')
    expect(page.locator('.lcz-music-control')).to_have_attribute('data-state','blocked')
    assert not media, f'Reloading blocked autoplay downloaded music: {media}'
    expect_blocked(page)
    page.evaluate('document.body.click()')
    expect_blocked(page)
    page.locator('#search-open').click()
    page.wait_for_function("()=>LCZMusic.snapshot().playing&&LCZMusic.snapshot().time>=42")
    expect(page.locator('.lcz-music-toggle')).to_have_attribute('aria-pressed','true')

def autoplay_keyboard(page, context):
    load(page);expect_blocked(page)
    page.keyboard.press('x')
    page.wait_for_function("()=>LCZMusic.snapshot().playing&&LCZMusic.snapshot().time>.1")
    expect(page.locator('.lcz-music-toggle')).to_have_attribute('aria-pressed','true')

def autoplay_button(page, context):
    load(page);expect_blocked(page)
    button=page.locator('.lcz-music-toggle')
    button.click()
    page.wait_for_function("()=>LCZMusic.snapshot().playing&&LCZMusic.snapshot().time>.1")
    expect(button).to_have_attribute('aria-pressed','true')
    button.click()
    expect(page.locator('.lcz-music-control')).to_have_attribute('data-state','off')
    page.locator('#search-open').click()
    assert page.evaluate('LCZMusic.snapshot().status')=='off', 'A normal click reversed manual pause'
    assert page.evaluate("sessionStorage.getItem('lcz:moonlight-muted')")=='true'
    page.reload(wait_until='networkidle')
    assert page.locator('audio').count()==0
    expect(button).to_have_attribute('aria-pressed','false')
    button.focus();page.keyboard.press('Enter')
    page.wait_for_function("()=>LCZMusic.snapshot().playing&&LCZMusic.snapshot().time>.1")
    expect(button).to_have_attribute('aria-pressed','true')

def autoplay_pending_context(page, context):
    # The media element is allowed, but Web Audio independently needs activation.
    # Keep real media decoding and node graph; model only its suspended policy.
    context.add_init_script("""(()=>{
      const NativeContext=window.AudioContext;
      window.pendingResumeCalls=0;
      window.AudioContext=class extends NativeContext {
        get state(){return navigator.userActivation.hasBeenActive?super.state:'suspended';}
        resume(){
          if(!navigator.userActivation.hasBeenActive){
            window.pendingResumeCalls++;
            return new Promise(()=>{});
          }
          return super.resume();
        }
      };
    })()""")
    load(page)
    page.wait_for_function("()=>document.querySelector('audio')?.currentTime>.1")
    assert page.evaluate('pendingResumeCalls')==1
    expect_blocked(page)
    page.locator('#search-open').click()
    page.wait_for_function("()=>LCZMusic.snapshot().playing")
    expect(page.locator('.lcz-music-toggle')).to_have_attribute('aria-pressed','true')

def frame_ready(page, path):
    # During a fade both documents may be mounted. Wait for the route to commit,
    # rather than accidentally returning the outgoing or still-hidden frame.
    page.wait_for_function("""p=>{
      const frames=document.querySelectorAll('.lcz-content-frame');
      const f=frames[0];
      return document.querySelector('.lcz-content-host')?.dataset.state==='ready' &&
        frames.length===1 && f.contentDocument?.readyState==='complete' &&
        decodeURIComponent(f.contentWindow.location.pathname).endsWith(p) && f.contentWindow.LCZMusic;
    }""", arg=path)
    return page.locator('.lcz-content-frame').content_frame

def lazy(page, context):
    context.add_init_script("sessionStorage.setItem('lcz:moonlight-muted','true')")
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
    load(page)
    page.locator('.world[data-game="craft"] a').click()
    page.wait_for_url('**/Craft%20of%20Survival/wiki.html')
    assert page.locator('.lcz-content-frame').count()==0

def entry(page, context):
    load(page)
    page.wait_for_function("()=>['playing','blocked'].includes(LCZMusic.snapshot().status)")
    assert page.locator('audio').count()==2
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

def random_programs(page, context):
    context.add_init_script("""(()=>{
      sessionStorage.removeItem('lcz:moonlight-position');
      Math.random=()=>new URLSearchParams(location.search).get('program')==='chopin'?.75:.25;
    })()""")
    for program,index,file,composer in [('moonlight',0,'moonlight-1.mp3','贝多芬'),('chopin',3,'chopin-nocturne-op9-no2.mp3','肖邦')]:
        load(page,'index.html?program='+program);start(page)
        assert page.evaluate('LCZMusic.snapshot().index')==index
        expect(page.locator('[data-music-program]')).to_contain_text(composer)
        expect(page.locator('.lcz-music-toggle')).to_have_attribute('aria-label',re.compile(composer))
        assert page.evaluate("[...document.querySelectorAll('audio')].find(a=>!a.paused).src").endswith(file)
        if index==3:
            assert 'Chopin' in page.evaluate('navigator.mediaSession.metadata.artist')
            assert 'Paul Pitman' not in page.locator('.lcz-music-hint').text_content()

def repeating_chopin(page, context):
    context.add_init_script("""(()=>{
      sessionStorage.setItem('lcz:moonlight-position',JSON.stringify({index:3,time:0}));
      Math.random=()=>.75;
      const set=navigator.mediaSession.setActionHandler.bind(navigator.mediaSession);
      navigator.mediaSession.setActionHandler=(action,handler)=>{
        if(action==='nexttrack')window.__nextMusicTrack=handler;
        return set(action,handler);
      };
    })()""")
    load(page);start(page)
    for _ in range(2):
        page.evaluate("()=>{[...document.querySelectorAll('audio')].find(a=>!a.paused).currentTime=45;window.__nextMusicTrack()}")
        page.wait_for_function('()=>LCZMusic.snapshot().playing&&LCZMusic.snapshot().time<3')
        assert page.evaluate('LCZMusic.snapshot().index')==3
        page.wait_for_timeout(1600)

def movements(page, context):
    context.add_init_script("if(!sessionStorage.getItem('lcz:moonlight-position'))sessionStorage.setItem('lcz:moonlight-position',JSON.stringify({index:0,time:0}))")
    media=[];page.on('request',lambda r:media.append(r.url) if '.mp3' in r.url else None)
    load(page);start(page)
    page.wait_for_function("() => Number.isFinite(document.querySelector('audio').duration)")
    assert set(urlsplit(url).path for url in media)=={PREFIX+'assets/music/moonlight-1.mp3'}
    page.emulate_media(reduced_motion='no-preference')
    page.wait_for_function("() => parseFloat(document.querySelector('.lcz-music-control').style.getPropertyValue('--music-level'))>0",timeout=15000)
    for target in [1,2,3,0]:
        page.evaluate("i=>{Math.random=()=>i===3?.75:.25;const a=[...document.querySelectorAll('audio')].find(a=>!a.paused);a.currentTime=a.duration-12}",target)
        filename='chopin-nocturne-op9-no2.mp3' if target==3 else f'moonlight-{target+1}.mp3'
        page.wait_for_function("file=>[...document.querySelectorAll('audio')].some(a=>a.src.endsWith(file)&&a.paused&&a.readyState>=3)",arg=filename)
        # Changing the random result after preloading must not replace the queued program.
        page.evaluate("i=>{Math.random=()=>i===3?.25:.75;const a=[...document.querySelectorAll('audio')].find(a=>!a.paused);a.currentTime=a.duration-3.5}",target)
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
    page.wait_for_function("()=>['playing','blocked'].includes(LCZMusic.snapshot().status)")
    assert page.locator('audio').count()==2
    assert frame.locator('audio').count()==0
    if not page.evaluate('LCZMusic.snapshot().playing'):
        frame.locator('.lcz-music-toggle').click()
    page.wait_for_function("()=>LCZMusic.snapshot().playing&&LCZMusic.snapshot().time>.1")
    expect(frame.locator('.lcz-music-toggle')).to_have_attribute('aria-pressed','true')

def recovery(page, context):
    context.add_init_script("sessionStorage.setItem('lcz:moonlight-muted','true')")
    context.add_init_script("sessionStorage.setItem('lcz:moonlight-position',JSON.stringify({index:0,time:0}))")
    page.route('**/moonlight-1.mp3',lambda route:route.abort())
    load(page)
    assert page.evaluate("LCZSite.navigate('https://example.com/index.html')") is False
    assert page.evaluate("LCZSite.navigate('assets/games.js')") is False
    assert page.locator('.lcz-content-frame').count()==0
    page.locator('.lcz-music-toggle').click()
    page.wait_for_function("()=>LCZMusic.snapshot().status==='error'")
    assert page.locator('.lcz-music-toggle').get_attribute('aria-pressed')=='false'
    page.locator('#search-open').click()
    assert page.evaluate('LCZMusic.snapshot().status')=='error', 'An unrelated click retried a real media error'
    page.keyboard.press('Escape')
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
        ARTIFACTS.screenshot(page,'mobile-'+path.split('/')[0].replace(' ','-')+'.jpg',quality=85)
    load(page);start(page)
    page.locator('.world[data-game="dawn"] a').tap();frame=frame_ready(page,'DawnofZombiewiki/index.html')
    assert page.evaluate('LCZMusic.snapshot().playing')
    expect(frame.locator('.lcz-music-toggle')).to_have_attribute('aria-pressed','true')
    frame.locator('.lcz-music-toggle').tap()

def focused_route(page):
    assert page.evaluate("""()=>{
      const f=document.querySelector('.lcz-content-frame');
      return document.activeElement===f && f.contentDocument.hasFocus() &&
        f.contentDocument.activeElement!==f.contentDocument.body;
    }"""), 'Focus did not enter the new page content'


def click_moving_world(page, game):
    # Real pointer input does not require an intentionally drifting bubble to stop.
    box=page.locator(f'.world[data-game="{game}"] a').bounding_box()
    assert box
    page.mouse.click(box['x']+box['width']/2,box['y']+box['height']/2)


def wait_held_request(page, requests):
    # Pump Playwright events until the intentionally intercepted request arrives.
    for _ in range(40):
        if requests:return requests[0]
        page.wait_for_timeout(50)
    raise AssertionError('Expected a held navigation request')


def smooth_slow_navigation(page, context):
    page.emulate_media(reduced_motion='no-preference')
    load(page);start(page)
    original_player=page.evaluate('window.originalPlayer=LCZMusic;window.originalAudio=document.querySelector("audio");LCZMusic.snapshot().time')
    held=[];pattern='**/Craft%20of%20Survival/wiki.html'
    page.route(pattern,lambda route:held.append(route))
    try:
        click_moving_world(page,'craft')
        pending=wait_held_request(page,held)
        expect(page.locator('.lcz-content-host')).to_have_attribute('data-state','loading')
        expect(page.locator('.world').first).to_be_visible()
        page.wait_for_timeout(350)
        assert page.locator('.lcz-content-frame').evaluate('(f)=>getComputedStyle(f).visibility==="hidden"&&f.inert'), 'Loading document is visible or interactive'
        assert not page.evaluate('document.body.classList.contains("lcz-shell-mode")'), 'Home disappeared before the destination loaded'
        assert page.evaluate('LCZMusic.snapshot().time')>original_player
        # A modal can open while the still-visible outgoing home is loading.
        page.locator('#search-open').click()
        expect(page.locator('#search-dialog')).to_be_visible()
        # Record the brief transition at its source instead of racing a 280ms fade.
        page.evaluate("""()=>{
          window.routeStages=[];
          const host=document.querySelector('.lcz-content-host');
          const observer=new MutationObserver(()=>{
            const incoming=host.querySelector('.lcz-content-frame');
            window.routeStages.push({state:host.dataset.state,
              homeVisible:getComputedStyle(document.querySelector('.app-shell')).display!=='none',
              animating:incoming?.getAnimations().some(a=>a.playState==='running')});
            if(host.dataset.state==='ready')observer.disconnect();
          });
          observer.observe(host,{attributes:true,attributeFilter:['data-state']});
        }""")
        pending.continue_()
        frame=frame_ready(page,'Craft of Survival/wiki.html')
        stages=page.evaluate('routeStages')
        assert any(stage['state']=='revealing' and stage['homeVisible'] and stage['animating'] for stage in stages), stages
        expect(page.locator('dialog[open]')).to_have_count(0)
        expect(frame.locator('.article-card').first).to_be_visible()
        focused_route(page)
        frame.locator('.article-card').first.click()
        expect(frame.locator('#detail-dialog')).to_be_visible()
        frame.locator('#dialog-close').click()
        assert page.evaluate('window.originalPlayer===LCZMusic&&window.originalAudio===document.querySelector("audio")')
        assert page.evaluate('document.body.classList.contains("scene-still")'), 'Parked home keeps animating'
        assert page.locator('.lcz-frame-pending').count()==0
    finally:
        page.unroute(pattern)


def latest_navigation_wins(page, context):
    page.emulate_media(reduced_motion='no-preference')
    load(page);start(page)
    page.evaluate('window.originalAudio=document.querySelector("audio")')
    click_moving_world(page,'craft')
    frame_ready(page,'Craft of Survival/wiki.html')
    held=[];pattern='**/Day%20R%20Survival/wiki_dayR.html'
    page.route(pattern,lambda route:held.append(route))
    try:
        page.evaluate("LCZSite.navigate('Day%20R%20Survival/wiki_dayR.html')")
        pending=wait_held_request(page,held)
        expect(page.locator('.lcz-content-host')).to_have_attribute('data-state','loading')
        assert page.locator('.lcz-content-frame').evaluate_all('frames=>frames.some(f=>decodeURIComponent(f.src).includes("Craft of Survival")&&getComputedStyle(f).visibility!=="hidden"&&parseFloat(getComputedStyle(f).opacity)>.99)')
        page.evaluate("LCZSite.navigate('DawnofZombiewiki/index.html')")
        frame=frame_ready(page,'DawnofZombiewiki/index.html')
        title=page.title();address=page.url
        # The canceled request can still resolve at the browser/network boundary.
        # An already-canceled interception is also an expected safe outcome.
        try:pending.continue_()
        except Error:pass
        page.wait_for_timeout(400)
        assert page.title()==title and page.url==address, 'Superseded load changed the committed route'
        assert page.locator('.lcz-content-frame').count()==1
        expect(frame.locator('#main h1')).to_be_visible()
        focused_route(page)
        assert page.evaluate('window.originalAudio===document.querySelector("audio")&&LCZMusic.snapshot().playing')
        assert frame.locator('audio').count()==0, 'Child created another audio owner'
        assert page.locator('.lcz-route-note').count()==0
        page.go_back();frame_ready(page,'Craft of Survival/wiki.html')
        focused_route(page)
        page.go_forward();frame_ready(page,'DawnofZombiewiki/index.html')
    finally:
        page.unroute(pattern)


def route_failure_retry(page, context):
    load(page);start(page)
    page.locator('.world[data-game="craft"] a').click()
    frame_ready(page,'Craft of Survival/wiki.html')
    pattern='**/DawnofZombiewiki/index.html'
    page.route(pattern,lambda route:route.abort('failed'))
    try:
        page.evaluate("LCZSite.navigate('DawnofZombiewiki/index.html')")
        host=page.locator('.lcz-content-host')
        expect(host).to_have_attribute('data-state','error')
        expect(page.locator('.lcz-route-note')).to_contain_text(re.compile('未能打开|无法打开|打开失败|加载失败'))
        expect(page.locator('.lcz-route-note a').filter(has_text='重新打开')).to_be_visible()
        assert page.locator('.lcz-content-frame').count()==1, 'Failed pending frame was retained'
        old=page.locator('.lcz-content-frame').content_frame
        expect(old.locator('.article-card').first).to_be_visible()
        assert page.evaluate('LCZMusic.snapshot().playing')
    finally:
        page.unroute(pattern)
    page.locator('.lcz-route-note a').filter(has_text='重新打开').click()
    frame_ready(page,'DawnofZombiewiki/index.html')
    focused_route(page)
    assert page.locator('.lcz-route-note').count()==0
    page.go_back();frame_ready(page,'Craft of Survival/wiki.html')
    # Choosing another destination after failure must replace the unvisited route.
    page.route(pattern,lambda route:route.abort('failed'))
    try:
        page.evaluate("LCZSite.navigate('DawnofZombiewiki/index.html')")
        expect(page.locator('.lcz-content-host')).to_have_attribute('data-state','error')
        page.evaluate("LCZSite.navigate('LDOE_Wiki/index.html')")
        frame_ready(page,'LDOE_Wiki/index.html')
        focused_route(page)
        page.go_back();frame_ready(page,'Craft of Survival/wiki.html')
        focused_route(page)
        page.go_forward();frame_ready(page,'LDOE_Wiki/index.html')
        assert page.locator('.lcz-content-frame').count()==1
        assert page.locator('.lcz-route-note').count()==0
    finally:
        page.unroute(pattern)


def reduced_route_focus(page, context):
    load(page);start(page)
    page.locator('.world[data-game="craft"] a').focus()
    page.keyboard.press('Enter')
    frame_ready(page,'Craft of Survival/wiki.html')
    focused_route(page)
    assert page.locator('.lcz-content-frame').evaluate('(f)=>f.getAnimations().every(a=>a.playState!=="running")'), 'Reduced-motion route still animates'
    assert page.locator('.lcz-frame-pending').count()==0
    frame=page.locator('.lcz-content-frame').content_frame
    frame.locator('.atlas-home').focus();page.keyboard.press('Enter')
    frame_ready(page,'index.html')
    focused_route(page)
    assert page.locator('.lcz-content-frame').evaluate('(f)=>f.getAnimations().every(a=>a.playState!=="running")')


try:
    with sync_playwright() as p:
        launch_options={'channel':os.environ.get('LCZ_BROWSER','chrome'),'headless':True}
        browser=p.chromium.launch(**launch_options,args=['--autoplay-policy=document-user-activation-required'],
                                  ignore_default_args=['--autoplay-policy=no-user-gesture-required'])
        allowed_browser=None
        for name,fn,mobile in [('autoplay begins without interaction on home, wiki and local file',autoplay,False),('autoplay blocked recovers on a trusted click',autoplay_click,False),('autoplay blocked recovers on keyboard input',autoplay_keyboard,False),('autoplay button toggles once and manual mute survives reload',autoplay_button,False),('autoplay waits for suspended Web Audio despite active media',autoplay_pending_context,False),('manual mute stays lazy and uses native links',lazy,False),('entering a game keeps music, manual mute persists',entry,False),('search entry closes modal and keeps wiki interactive',search_entry,False),('audio persists across wiki history and home',continuity,False),('random programs choose either Chopin or Moonlight',random_programs,False),('repeating Chopin starts from the beginning',repeating_chopin,False),('random program boundaries preserve Moonlight order and queued preload',movements,False),('direct wiki playback and route reload',direct,False),('network recovery, rapid toggles and route boundaries',recovery,False),('320px phone controls and continuous playback',phone,True),('touch entry keeps music and respects mute',entry,True),('smooth route keeps home visible during slow loading',smooth_slow_navigation,False),('latest route wins rapid switching without stale frames or history',latest_navigation_wins,False),('failed route retains old page and retry recovers',route_failure_retry,False),('reduced motion routes restore focus without animation',reduced_route_focus,False)]:
            if os.environ.get('LCZ_MUSIC_CASE') and not re.search(os.environ['LCZ_MUSIC_CASE'],name):continue
            case_browser=browser
            if fn in (autoplay,autoplay_pending_context):
                if allowed_browser is None:
                    allowed_browser=p.chromium.launch(**launch_options,args=['--autoplay-policy=no-user-gesture-required'])
                case_browser=allowed_browser
            context=case_browser.new_context(viewport={'width':320 if mobile else 1440,'height':740 if mobile else 960},is_mobile=mobile,has_touch=mobile,reduced_motion='reduce')
            page=context.new_page()
            page.on('pageerror',lambda e:report['errors'].append(str(e)))
            page.on('response',lambda r:report['missing'].append(r.url) if r.status>=400 else None)
            page.on('request',lambda r:report['external'].append(r.url) if not r.url.startswith((BASE,ROOT.as_uri()+'/')) else None)
            try:
                fn(page,context);report['passed'].append(name);print('PASS '+name,flush=True)
            except Exception:
                report['failed'].append({'name':name,'error':traceback.format_exc()});print('FAIL '+name+'\n'+traceback.format_exc(),flush=True)
                print(page.evaluate('()=>({player:window.LCZMusic?.snapshot(),audio:[...document.querySelectorAll("audio")].map(a=>({src:a.src,current:a.currentTime,duration:a.duration,paused:a.paused,ready:a.readyState,error:a.error?.message}))})'),flush=True)
                ARTIFACTS.screenshot(page,'failure-'+name.replace(' ','-')+'.jpg')
            finally:context.close()
        browser.close()
        if allowed_browser:allowed_browser.close()
finally:
    server.shutdown()
    server.server_close()
    ARTIFACTS.finish(report)
print(json.dumps({'passed':len(report['passed']),'failed':len(report['failed']),'errors':report['errors'],'missing':report['missing'],'external':report['external']},ensure_ascii=False))
sys.exit(bool(report['failed'] or report['errors'] or report['missing'] or report['external']))
