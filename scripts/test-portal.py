"""Regression checks for the LCZ portal, including real Chrome touch input.
Run: python scripts/test-portal.py
Optional dev dependency: Python Playwright and an installed Chrome browser.
An isolated browser and ephemeral local HTTP server leave normal profiles alone.
"""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from urllib.parse import urlparse
import json
import math
import os
import re
import traceback
import sys
sys.stdout.reconfigure(encoding="utf-8")
from playwright.sync_api import sync_playwright, expect

GAME_IDS = ("dayr", "craft", "westland", "dawn", "ldoe")
GAME_COUNT = len(GAME_IDS)
POSITION_KEY = "lcz:positions-v4:" + ",".join(sorted(GAME_IDS))
ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / ".verification" / "portal"
OUTPUT.mkdir(parents=True, exist_ok=True)


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


class PreviewServer(ThreadingHTTPServer):
    # Chromium can open several speculative/image connections during navigation.
    # Avoid Windows refusing a burst at Python's small default accept backlog.
    request_queue_size = 128


server = PreviewServer(("127.0.0.1", 0), partial(QuietHandler, directory=str(ROOT)))
Thread(target=server.serve_forever, daemon=True).start()
BASE = f"http://127.0.0.1:{server.server_port}/"
results = {"passed": [], "failed": [], "errors": [], "screenshots": [], "counter_requests": [], "skipped": []}


def snapshot(page):
    return page.locator(".world").evaluate_all("nodes => {const area=document.querySelector('#game-universe').getBoundingClientRect();return Object.fromEntries(nodes.map(n=>{const r=n.getBoundingClientRect();return [n.dataset.game,[r.x+r.width/2-area.x,r.y+r.height/2-area.y]];}));}")


def distance(first, second):
    return math.hypot(first[0] - second[0], first[1] - second[1])


def icon_center(page, game="dayr"):
    rect = page.locator(f'.world[data-game="{game}"] .game-icon').bounding_box()
    assert rect, f"Missing icon for {game}"
    return rect["x"] + rect["width"] / 2, rect["y"] + rect["height"] / 2


def screenshot(page, name):
    path = OUTPUT / f"{name}.jpg"
    page.screenshot(path=str(path), full_page=True, quality=85)
    results["screenshots"].append(path.relative_to(ROOT).as_posix())


def pause(page):
    # Stable interaction tests use the operating-system preference, not a UI control.
    page.emulate_media(reduced_motion="reduce")
    page.mouse.move(2, 2)
    page.keyboard.press("Escape")


def load(page):
    response = page.goto(BASE, wait_until="networkidle")
    assert response.status == 200
    expect(page.locator(".world")).to_have_count(GAME_COUNT)
    assert set(page.locator(".world").evaluate_all("nodes=>nodes.map(n=>n.dataset.game)")) == set(GAME_IDS)
    assert page.locator(".game-icon").evaluate_all("imgs => imgs.every(i => i.complete && i.naturalWidth > 0)")
    page.mouse.move(2, 2)


def check_geometry(page, width, height):
    geometry = page.evaluate("""() => {
      const rect = r => ({x:r.x,y:r.y,width:r.width,height:r.height,right:r.right,bottom:r.bottom});
      const worlds = [...document.querySelectorAll('.world')].map(node => {
        const icon=node.querySelector('.game-icon');
        const labels=[...node.querySelectorAll('.world-caption h2,.world-caption p')].map(label=>{
          const range=document.createRange(); range.selectNodeContents(label); return rect(range.getBoundingClientRect());
        });
        return {id:node.dataset.game, icon:rect(icon.getBoundingClientRect()), labels, radius:getComputedStyle(icon).borderRadius};
      });
      const widgets=[...document.querySelectorAll(".brand,.community,.site-stats-summary,#search-open")].map(e=>rect(e.getBoundingClientRect()));
      return {worlds, widgets, scrollWidth:document.documentElement.scrollWidth, scrollHeight:document.documentElement.scrollHeight,
        header:rect(document.querySelector('.site-header').getBoundingClientRect()), scene:rect(document.querySelector('.app-shell').getBoundingClientRect())};
    }""")
    assert geometry["scrollWidth"] <= width + 1, f"Horizontal overflow at {width}x{height}: {geometry['scrollWidth']}"
    assert geometry["scrollHeight"] <= height + 1, f"Vertical overflow at {width}x{height}: {geometry['scrollHeight']}"
    for world in geometry["worlds"]:
        icon = world["icon"]
        assert abs(icon["width"] - icon["height"]) < 1, f"Non-circular icon: {world['id']}"
        assert world["radius"] == "50%", f"Icon not clipped to a pure circle: {world['id']}"
        for rect in [icon, *world["labels"]]:
            assert rect["x"] >= -1 and rect["right"] <= width + 1, f"{world['id']} outside horizontal viewport at {width}x{height}: {rect}"
            assert rect["y"] >= geometry["header"]["bottom"] - 1, f"{world['id']} collides with header at {width}x{height}"
            assert rect["bottom"] <= height + 1, f"{world['id']} outside viewport at {width}x{height}: {rect}"
    def intersects(a, b):
        return min(a["right"], b["right"]) - max(a["x"], b["x"]) > 1 and min(a["bottom"], b["bottom"]) - max(a["y"], b["y"]) > 1

    for i,widget in enumerate(geometry['widgets']):
        assert widget['x'] >= 0 and widget['right'] <= width + 1, ('Header overflow',widget)
        for other in geometry['widgets'][i+1:]:
            assert not intersects(widget,other), ('Header overlap',widget,other)
    for index, first in enumerate(geometry["worlds"]):
        a = first["icon"]
        for second in geometry["worlds"][index + 1:]:
            b = second["icon"]
            assert distance([a["x"] + a["width"]/2, a["y"] + a["height"]/2], [b["x"] + b["width"]/2, b["y"] + b["height"]/2]) >= (a["width"] + b["width"])/2 - 1, f"Icons overlap: {first['id']}/{second['id']}"
            for label in first["labels"]:
                assert not intersects(label, b), f"Label obscures icon: {first['id']}/{second['id']}"
                assert all(not intersects(label, other) for other in second["labels"]), f"Game captions overlap: {first['id']}/{second['id']}"
            for label in second["labels"]:
                assert not intersects(label, a), f"Label obscures icon: {second['id']}/{first['id']}"
    return geometry


def touch(cdp, kind, points=()):
    cdp.send("Input.dispatchTouchEvent", {"type": kind, "touchPoints": [dict(x=x, y=y, id=index + 1) for index, (x, y) in enumerate(points)]})


def touch_drag(page, cdp, start, end, cancel=False):
    touch(cdp, "touchStart", [start])
    for step in range(1, 13):
        point = (start[0] + (end[0] - start[0])*step/12, start[1] + (end[1] - start[1])*step/12)
        touch(cdp, "touchMove", [point])
        page.wait_for_timeout(16)
    touch(cdp, "touchCancel" if cancel else "touchEnd")
    page.wait_for_timeout(120)


def home_render(page):
    load(page)
    assert page.locator(".brand").inner_text().strip() == "LCZ"
    expect(page.locator("#game-info")).to_be_hidden()
    assert page.locator("canvas,.planet-marker,.planet-enter,.world-atmosphere,.world-genre").count() == 0
    assert page.locator(".world-caption,#motion-toggle,#reset-map,#help-open,.scene-footer").count() == 0
    expect(page.locator('.community-number')).to_have_text('1067536816')
    assert page.locator('.world-link').evaluate_all('links=>links.every(a=>a.getAttribute("aria-label").includes("Wiki"))')
    assert page.locator('.app-shell').evaluate('(e)=>Math.abs(e.getBoundingClientRect().height-innerHeight)<1')
    assert page.locator('.world-visual').evaluate_all('els=>els.every(e=>getComputedStyle(e,":after").backgroundImage.includes("linear-gradient"))'), 'Glass highlights were lost'
    assert page.locator('#search-open').evaluate('(e)=>getComputedStyle(e).backgroundImage.includes("linear-gradient")'), 'Gradient search border was lost'
    requests = page.evaluate('performance.getEntriesByType("resource").map(r=>r.name)')
    assert not any('/data/' in url or '/wiki-assets/' in url for url in requests), 'Home loaded a game dataset'
    assert page.evaluate('performance.getEntriesByType("resource").reduce((s,r)=>s+r.decodedBodySize,0)') < 230000, 'Portal initial resource budget exceeded' 
    assert not re.search(r"已发现的世界|SECTOR 01|游戏档案", page.locator("body").inner_text(), re.I)
    expect(page.locator("[data-site-stats]")).to_have_attribute("data-stats-state", "preview")
    summary = page.locator("[data-site-stats] summary")
    assert summary.get_attribute('title') is None, 'Native unstyled tooltip returned'
    summary.hover()
    tooltip_text = summary.evaluate('(e)=>getComputedStyle(e,"::after").content')
    assert "PV" in tooltip_text and "IP" in tooltip_text, tooltip_text
    tooltip_color = summary.evaluate('(e)=>getComputedStyle(e,"::after").backgroundColor')
    assert max(map(int, re.findall(r'\d+', tooltip_color)[:3])) < 70, tooltip_color
    summary.click()
    expect(page.locator("[data-stat-note]")).to_contain_text("不计数")
    page.keyboard.press("Escape")
    screenshot(page, "desktop")


def drift_and_hover(page):
    load(page)
    before = snapshot(page)
    page.wait_for_timeout(1250)
    after = snapshot(page)
    movement = [distance(before[key], after[key]) for key in before]
    assert max(movement) > 0.1, f"No automatic gentle drift: {movement}"
    assert max(movement) < 7, f"Drift too fast: {movement}"
    x, y = icon_center(page)
    page.mouse.move(x, y)
    expect(page.locator("#game-info")).to_be_visible()
    expect(page.locator("#info-title")).to_have_text('辐射生存')
    assert page.locator('#game-info').evaluate('(e)=>parseFloat(getComputedStyle(e).borderRadius)<=4')
    frozen = snapshot(page)
    page.wait_for_timeout(500)
    assert all(distance(point, snapshot(page)[key]) < 0.05 for key, point in frozen.items())
    screenshot(page, "desktop-info")
    page.mouse.move(2, 2)
    expect(page.locator("#game-info")).to_be_hidden(timeout=1500)
    pause(page)
    frozen = snapshot(page)
    page.wait_for_timeout(700)
    assert all(distance(point, snapshot(page)[key]) < 0.05 for key, point in frozen.items())


def desktop_drag(page):
    load(page)
    pause(page)
    baseline = snapshot(page)
    x, y = icon_center(page)
    page.mouse.move(x, y)
    page.mouse.down()
    page.mouse.move(x + 65, y + 35, steps=15)
    page.mouse.up()
    assert page.url == BASE
    after = snapshot(page)
    assert distance(baseline["dayr"], after["dayr"]) > 20
    saved = page.evaluate("key => JSON.parse(localStorage.getItem(key))", POSITION_KEY)
    assert saved and any("dayr" in layout for layout in saved.values()), saved
    field = page.locator("#game-universe").bounding_box()
    saved_points = [layout["dayr"] for layout in saved.values() if "dayr" in layout]
    assert any(distance([point["x"]*field["width"], point["y"]*field["height"]], after["dayr"]) < 2 for point in saved_points), saved
    page.reload(wait_until="networkidle")
    pause(page)
    restored = snapshot(page)
    assert distance(after["dayr"], restored["dayr"]) < 3, (after, restored)
    reset = snapshot(page)
    page.locator('.world[data-game="dayr"] .world-link').focus()
    page.keyboard.press("ArrowRight")
    shifted = snapshot(page)
    assert abs(shifted["dayr"][0] - reset["dayr"][0] - 12) < 1.2, (reset, shifted)
    x, y = icon_center(page)
    page.mouse.move(x, y)
    page.mouse.down()
    page.mouse.move(x + 45, y + 25, steps=8)
    page.keyboard.press("Escape")
    page.mouse.up()
    cancelled = snapshot(page)
    assert all(distance(point, cancelled[key]) < 1 for key, point in shifted.items()), (shifted, cancelled)
    assert not page.locator("body").evaluate("body => body.classList.contains('is-dragging')")
    assert page.url == BASE
    # A canceled drag suppresses its pointer click, but must not swallow Enter.
    page.locator('.world[data-game="dayr"] .world-link').focus()
    page.keyboard.press("Enter")
    page.wait_for_url("**/wiki_dayR.html")
    expect(page.locator(".atlas-home")).to_be_visible()


def overlap_then_release(page, context, mobile=False):
    load(page)
    start = icon_center(page)
    target = icon_center(page, 'craft')
    if mobile:
        cdp = context.new_cdp_session(page)
        touch(cdp, 'touchStart', [start])
    else:
        page.mouse.move(*start)
        page.mouse.down()
    before = snapshot(page)
    if mobile:
        touch(cdp, 'touchMove', [target])
    else:
        page.mouse.move(*target, steps=12)
    page.wait_for_timeout(70)
    overlapping = snapshot(page)
    assert distance(overlapping['dayr'], overlapping['craft']) < 3, overlapping
    assert distance(before['craft'], overlapping['craft']) < 1, 'Neighbour moved before release'
    expect(page.locator('#game-info')).to_be_hidden()
    if mobile:
        touch(cdp, 'touchEnd')
    else:
        page.mouse.up()
    released = snapshot(page)
    assert distance(released['dayr'], overlapping['dayr']) < 12, 'Release jumped instantly'
    page.wait_for_timeout(180)
    midway = snapshot(page)
    assert distance(midway['dayr'], midway['craft']) > 10, 'Release did not start easing apart'
    expect(page.locator('#game-info')).to_be_hidden()
    page.wait_for_timeout(1200)
    assert page.url == BASE, 'Dragging navigated to a game'
    check_geometry(page, 390 if mobile else 1440, 844 if mobile else 960)
    final = snapshot(page)
    area = page.locator('#game-universe').bounding_box()
    saved = page.evaluate("key => JSON.parse(localStorage.getItem(key))", POSITION_KEY)
    layout = saved['mobile' if mobile else 'desktop']
    assert all(distance([layout[k]['x']*area['width'],layout[k]['y']*area['height']],v) < 4 for k,v in final.items()), 'Saved anchors differ from resolved pose'
    screenshot(page, 'release-touch' if mobile else 'release-mouse')


def search_and_return(page):
    load(page)
    pause(page)
    page.keyboard.press("/")
    expect(page.locator("#search-dialog")).to_be_visible()
    expect(page.locator("#game-search")).to_be_focused()
    page.locator("#game-search").fill("西部")
    expect(page.locator(".search-result")).to_have_count(1)
    expect(page.locator("a.search-result")).to_have_attribute("href", "Westland%20Survival/westland_wiki.html")
    page.locator("#game-search").fill("craft")
    expect(page.locator(".search-result")).to_have_count(1)
    page.locator("#game-search").fill("<script>no-such-game</script>")
    expect(page.locator("#search-empty")).to_be_visible()
    expect(page.locator(".search-result")).to_have_count(0)
    page.keyboard.press("Escape")
    expect(page.locator("#search-dialog")).to_be_hidden()
    expect(page.locator("#search-open")).to_be_focused()
    page.locator('.world[data-game="dayr"] .world-link').focus()
    page.keyboard.press("Enter")
    page.wait_for_url("**/wiki_dayR.html")
    expect(page.locator(".atlas-home")).to_have_attribute("href", "../index.html")
    expect(page.locator("[data-site-stats]")).to_have_attribute("data-stats-state", "preview")
    page.locator(".atlas-home").click()
    page.wait_for_url("**/index.html")
    expect(page.locator(".world")).to_have_count(GAME_COUNT)



def dawn_entry_and_switch(page, _):
    load(page)
    pause(page)
    page.locator("#search-open").click()
    expect(page.locator(".search-result")).to_have_count(GAME_COUNT)
    for query in ["Dawn of Zombies", "僵尸的黎明", "doz"]:
        page.locator("#game-search").fill(query)
        expect(page.locator(".search-result")).to_have_count(1)
        expect(page.locator(".result-title")).to_have_text("僵尸的黎明")
    page.locator(".result-title").click()
    page.wait_for_url("**/DawnofZombiewiki/index.html")
    expect(page.locator("#main h1")).to_be_visible()
    expect(page.locator("[data-site-stats]")).to_have_attribute("data-stats-state", "preview")
    page.locator(".atlas-switch summary").click()
    expect(page.locator(".atlas-menu a")).to_have_count(GAME_COUNT)
    page.locator('.atlas-menu a[href*="Craft"]').click()
    page.wait_for_url("**/Craft%20of%20Survival/wiki.html")
    page.locator(".atlas-switch summary").click()
    page.locator('.atlas-menu a[href*="DawnofZombiewiki"]').click()
    page.wait_for_url("**/DawnofZombiewiki/index.html")
    expect(page.locator("#main h1")).to_be_visible()
    page.locator(".atlas-home").click()
    page.wait_for_url("**/index.html")
    expect(page.locator(".world")).to_have_count(GAME_COUNT)



def ldoe_entry_and_switch(page, _):
    load(page)
    pause(page)
    page.locator("#search-open").click()
    expect(page.locator(".search-result")).to_have_count(GAME_COUNT)
    for query in ["Last Day on Earth", "地球末日生存", "ldoe"]:
        page.locator("#game-search").fill(query)
        expect(page.locator(".search-result")).to_have_count(1)
        expect(page.locator(".result-title")).to_have_text("地球末日生存")
        expect(page.locator("a.search-result")).to_have_attribute("href", "LDOE_Wiki/index.html")
    page.locator("a.search-result").click()
    page.wait_for_url("**/LDOE_Wiki/index.html")
    expect(page.locator("#main h1")).to_be_visible()
    expect(page.locator('.atlas-nav')).to_have_attribute('data-game','ldoe')
    expect(page.locator("[data-site-stats]")).to_have_attribute("data-stats-state", "preview")
    page.locator(".atlas-switch summary").click()
    expect(page.locator(".atlas-menu a")).to_have_count(GAME_COUNT)
    page.locator('.atlas-menu a[href*="DawnofZombiewiki"]').click()
    page.wait_for_url("**/DawnofZombiewiki/index.html")
    page.locator(".atlas-switch summary").click()
    page.locator('.atlas-menu a[href*="LDOE_Wiki"]').click()
    page.wait_for_url("**/LDOE_Wiki/index.html")
    expect(page.locator("#main h1")).to_be_visible()
    page.locator(".atlas-home").click()
    page.wait_for_url("**/index.html")
    expect(page.locator(".world")).to_have_count(GAME_COUNT)
    bubble=page.locator('.world[data-game="ldoe"] .world-link')
    expect(bubble).to_have_attribute('aria-label',re.compile('地球末日生存.*Last Day on Earth'))
    bubble.focus();page.keyboard.press('Enter')
    page.wait_for_url("**/LDOE_Wiki/index.html")
    expect(page.locator("#main h1")).to_be_visible()


def fifth_touch_persistence(page, context):
    load(page)
    pause(page)
    before=snapshot(page)
    cdp=context.new_cdp_session(page)
    start=icon_center(page,'ldoe');target=icon_center(page,'dayr')
    touch(cdp,'touchStart',[start]);touch(cdp,'touchMove',[target]);page.wait_for_timeout(60)
    overlapping=snapshot(page)
    assert distance(overlapping['ldoe'],overlapping['dayr'])<3
    assert all(distance(before[key],overlapping[key])<1 for key in GAME_IDS if key!='ldoe')
    touch(cdp,'touchEnd');page.wait_for_timeout(100)
    check_geometry(page,320,568)
    saved=page.evaluate("key=>JSON.parse(localStorage.getItem(key))",POSITION_KEY)
    assert set(saved['mobile'])==set(GAME_IDS)
    resolved=snapshot(page)
    page.reload(wait_until='networkidle');pause(page)
    assert all(distance(point,snapshot(page)[key])<2 for key,point in resolved.items())
    page.set_viewport_size({'width':568,'height':320});page.wait_for_timeout(150)
    check_geometry(page,568,320)
    page.set_viewport_size({'width':320,'height':568});page.wait_for_timeout(150)
    check_geometry(page,320,568)
    assert all(distance(point,snapshot(page)[key])<2 for key,point in resolved.items()), 'Portrait layout changed after rotation'
    screenshot(page,'fifth-game-touch-saved-320')


def roster_migration(page, _):
    legacy='lcz:positions-v4:craft,dawn,dayr,westland'
    page.add_init_script("localStorage.setItem("+json.dumps(legacy)+",JSON.stringify({desktop:{dayr:{x:.94,y:.94}}}))")
    load(page);pause(page)
    area=page.locator('#game-universe').bounding_box()
    defaults=page.evaluate('Object.fromEntries(LCZ_GAMES.map(g=>[g.id,g.position.desktop]))')
    actual=snapshot(page)
    assert all(distance([point[0]*area['width'],point[1]*area['height']],actual[key])<4 for key,point in defaults.items())
    assert page.evaluate("key=>JSON.parse(localStorage.getItem(key)).desktop.dayr.x",legacy)==.94
    assert page.evaluate("key=>localStorage.getItem(key)",POSITION_KEY) is None


def community_qr(page, _, mobile=False):
    load(page)
    assert page.locator('#community-qr').get_attribute('src') is None
    assert not any('qq-group-' in url for url in page.evaluate('performance.getEntriesByType("resource").map(r=>r.name)'))
    if mobile:page.locator('#community-open').tap()
    else:page.locator('#community-open').click()
    expect(page.locator('#community-dialog')).to_be_visible()
    expect(page.locator('#community-dialog')).to_have_attribute('data-qr-state','ready')
    expect(page.locator('#community-open')).to_have_attribute('aria-expanded','true')
    assert page.locator('#community-qr').evaluate('(img)=>img.complete&&img.naturalWidth>0')
    assert page.locator('#community-download').get_attribute('download')
    frozen=snapshot(page);page.wait_for_timeout(300)
    assert all(distance(point,snapshot(page)[key])<.05 for key,point in frozen.items())
    box=page.locator('#community-dialog').bounding_box();size=page.viewport_size
    assert box['x']>=0 and box['x']+box['width']<=size['width']+1
    assert box['y']>=0 and box['y']+box['height']<=size['height']+1
    if mobile:page.locator('#community-dialog .dialog-close').tap()
    else:page.keyboard.press('Escape')
    expect(page.locator('#community-dialog')).to_be_hidden()
    expect(page.locator('#community-open')).to_be_focused()
    page.locator('#search-open').click();expect(page.locator('#search-dialog')).to_be_visible()
    expect(page.locator('.search-result')).to_have_count(GAME_COUNT)
    page.keyboard.press('Escape')


def touch_longpress(page, context):
    load(page)
    pause(page)
    cdp = context.new_cdp_session(page)
    point = icon_center(page)
    touch(cdp, "touchStart", [point])
    page.wait_for_timeout(680)
    expect(page.locator("#game-info")).to_be_visible()
    touch(cdp, "touchEnd")
    page.wait_for_timeout(200)
    assert page.url == BASE, "Long press release navigated unexpectedly"
    expect(page.locator("#game-info")).to_be_visible()
    screenshot(page, "mobile-longpress")
    # The same gesture only reveals; a new independent tap enters the wiki.
    point = icon_center(page)
    touch(cdp, "touchStart", [point])
    page.wait_for_timeout(60)
    touch(cdp, "touchEnd")
    page.wait_for_url("**/wiki_dayR.html")
    page.locator(".atlas-home").tap()
    page.wait_for_url("**/index.html")
    pause(page)
    point = icon_center(page, "craft")
    touch(cdp, "touchStart", [point])
    page.wait_for_timeout(60)
    touch(cdp, "touchEnd")
    page.wait_for_url("**/Craft%20of%20Survival/wiki.html")
    expect(page.locator(".atlas-home")).to_be_visible()


def touch_drag_and_cancel(page, context):
    load(page)
    pause(page)
    cdp = context.new_cdp_session(page)
    before = snapshot(page)
    start = icon_center(page)
    destination = icon_center(page, "craft")
    touch_drag(page, cdp, start, destination)
    assert page.url == BASE
    after = snapshot(page)
    assert distance(before["dayr"], after["dayr"]) > 20
    assert any(distance(before[key], after[key]) > 8 for key in before if key != "dayr"), "Neighbour was not pushed aside"
    expect(page.locator("#game-info")).to_be_hidden()
    check_geometry(page, 390, 844)
    before = snapshot(page)
    start = icon_center(page)
    touch_drag(page, cdp, start, (start[0] + 32, start[1] + 22), cancel=True)
    assert page.url == BASE
    assert all(distance(point, snapshot(page)[key]) < 1 for key, point in before.items()), "Touch cancellation failed to restore layout"
    # A canceled stationary hold must not leave a delayed preview behind.
    point = icon_center(page)
    touch(cdp, "touchStart", [point])
    page.wait_for_timeout(180)
    touch(cdp, "touchCancel")
    page.wait_for_timeout(600)
    expect(page.locator("#game-info")).to_be_hidden()
    assert page.url == BASE
    # Moving before the hold deadline cancels long press even if the finger rests.
    touch(cdp, "touchStart", [point])
    touch(cdp, "touchMove", [(point[0] + 18, point[1] + 12)])
    page.wait_for_timeout(650)
    expect(page.locator("#game-info")).to_be_hidden()
    touch(cdp, "touchEnd")
    assert page.url == BASE


def reduced_motion(page, context):
    load(page)
    before = snapshot(page)
    page.wait_for_timeout(800)
    assert all(distance(point, snapshot(page)[key]) < 0.05 for key, point in before.items()), "Reduced-motion preference still animates"
    cdp = context.new_cdp_session(page)
    start = icon_center(page)
    touch_drag(page, cdp, start, (start[0] + 30, start[1] + 20))
    assert distance(before["dayr"], snapshot(page)["dayr"]) > 15
    assert page.url == BASE


try:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True, channel=os.environ.get("LCZ_BROWSER", os.environ.get("ORBIT_BROWSER", "chrome")))

        results["browser"] = browser.version
        results["channel"] = os.environ.get("LCZ_BROWSER", os.environ.get("ORBIT_BROWSER", "chrome"))

        def run_case(name, callback, *, width=1440, height=960, mobile=False, reduce=False):
            pattern=os.environ.get("LCZ_CASE_PATTERN")
            if pattern and not re.search(pattern,name):
                results["skipped"].append(name)
                return
            context = browser.new_context(viewport={"width":width,"height":height}, is_mobile=mobile, has_touch=mobile, reduced_motion="reduce" if reduce else "no-preference")
            context.on("request", lambda request: results["counter_requests"].append(request.url) if any(host in urlparse(request.url).netloc for host in ("countapi.","busuanzi.cc")) else None)
            page = context.new_page()
            page.set_default_timeout(8000)
            page.on("requestfailed", lambda request: results["errors"].append({"case":name,"request":request.url,"error":request.failure}) if request.failure != "net::ERR_ABORTED" else None)
            page.on("console", lambda message: results["errors"].append({"case":name,"error":message.text,"location":message.location}) if message.type == "error" else None)
            page.on("pageerror", lambda error: results["errors"].append({"case":name,"error":str(error)}))
            try:
                callback(page, context)
                results["passed"].append(name)
                print("PASS " + name, flush=True)
            except Exception as error:
                results["failed"].append({"case":name,"error":str(error),"traceback":traceback.format_exc()})
                print("FAIL " + name + ": " + str(error), flush=True)
                try:
                    screenshot(page, "failure-" + re.sub(r"[^a-zA-Z0-9-]", "-", name)[:65])
                except Exception:
                    pass
            finally:
                context.close()

        run_case("Minimal LCZ home and preview visit statistics", lambda page, _: home_render(page))
        run_case("Gentle drift, system reduced motion and square hover preview", lambda page, _: drift_and_hover(page))
        run_case("Mouse drag, anchor persistence, keyboard and Escape", lambda page, _: desktop_drag(page))
        run_case("Mouse may overlap during drag then eases apart on release", overlap_then_release)
        run_case("Touch may overlap during drag then eases apart on release", lambda page, context: overlap_then_release(page, context, True), width=390, height=844, mobile=True)
        run_case("Search, keyboard entry and real Wiki return", lambda page, _: search_and_return(page))
        for width, height in [(1920,1080),(1440,960),(1024,768),(768,1024),(600,900),(390,844),(360,640),(320,568),(568,320),(844,390)]:
            def responsive(page, _, width=width, height=height):
                load(page)
                pause(page)
                check_geometry(page, width, height)
                if (width,height) in [(390,844),(320,568),(568,320),(844,390),(1920,1080)]:
                    screenshot(page, f"layout-{width}x{height}")
            run_case(f"Viewport {width}x{height} keeps full-screen circles in bounds", responsive, width=width, height=height, mobile=width<=844)
        def narrow_mouse(page, _):
            load(page)
            pause(page)
            x,y = icon_center(page)
            page.mouse.move(x,y)
            expect(page.locator('#game-info')).to_be_visible()
            box=page.locator('#game-info').bounding_box()
            assert box['x'] >= 0 and box['x']+box['width'] <= 320, box
            page.locator('#info-close').click()
            expect(page.locator('#game-info')).to_be_hidden()
        run_case("Narrow mouse viewport keeps square info and close button in bounds", narrow_mouse, width=320, height=568)
        run_case("Dawn search, entry, shared navigation and return", dawn_entry_and_switch)
        run_case("LDOE search, fifth bubble, shared navigation and return", ldoe_entry_and_switch)
        run_case("Five-bubble roster starts fresh without changing the old saved layout", roster_migration)
        run_case("Fifth bubble touch drag, save, reload and rotation at 320px", fifth_touch_persistence, width=320, height=568, mobile=True)
        run_case("Community QR loads on click and restores focus", community_qr)
        run_case("Community QR keeps five bubbles still and fits a 320px touch screen", lambda page,context:community_qr(page,context,True),width=320,height=568,mobile=True)
        run_case("Real touch long press, second tap and direct tap entry", touch_longpress, width=390, height=844, mobile=True)
        run_case("Real touch repulsion, cancel and long-press movement threshold", touch_drag_and_cancel, width=390, height=844, mobile=True)
        run_case("Reduced motion freezes drift and preserves touch dragging", reduced_motion, width=390, height=844, mobile=True, reduce=True)

        def local_file(page, _):
            page.goto((ROOT / "index.html").as_uri(), wait_until="load")
            expect(page.locator(".game-icon")).to_have_count(GAME_COUNT)
            assert page.locator(".game-icon").evaluate_all("images => images.every(image => image.naturalWidth > 0)")
            expect(page.locator("[data-site-stats]")).to_have_attribute("data-stats-state", "preview")
        run_case("Local file preview works without public counter requests", local_file)
        browser.close()
finally:
    server.shutdown()
    if results["errors"]:
        results["failed"].append({"case":"No browser JavaScript errors", "error":json.dumps(results["errors"], ensure_ascii=False)})
    else:
        results["passed"].append("No browser JavaScript errors")
    if results["counter_requests"]:
        results["failed"].append({"case":"Preview must not increment public counters", "error":json.dumps(results["counter_requests"])})
    else:
        results["passed"].append("Preview never requests the public counter API")
    (OUTPUT / "results.json").write_text(json.dumps(results, indent=2, ensure_ascii=False), encoding="utf-8")
    (OUTPUT / ("results-" + results.get("channel","chrome") + ".json")).write_text(json.dumps(results, indent=2, ensure_ascii=False), encoding="utf-8")

print(f"\n{len(results['passed'])} passed; {len(results['failed'])} failed. Results: {OUTPUT / 'results.json'}")
if results["failed"]:
    raise SystemExit(1)
