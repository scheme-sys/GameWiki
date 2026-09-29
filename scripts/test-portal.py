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
from playwright.sync_api import sync_playwright, expect

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / ".verification" / "portal"
OUTPUT.mkdir(parents=True, exist_ok=True)


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


server = ThreadingHTTPServer(("127.0.0.1", 0), partial(QuietHandler, directory=str(ROOT)))
Thread(target=server.serve_forever, daemon=True).start()
BASE = f"http://127.0.0.1:{server.server_port}/"
results = {"passed": [], "failed": [], "errors": [], "screenshots": [], "counter_requests": []}


def snapshot(page):
    return page.locator(".world").evaluate_all("nodes => Object.fromEntries(nodes.map(n => [n.dataset.game, [Number(n.dataset.x), Number(n.dataset.y)]]))")


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
    button = page.locator("#motion-toggle")
    if button.get_attribute("aria-pressed") != "true":
        button.click()
    expect(button).to_have_attribute("aria-pressed", "true")
    page.mouse.move(2, 2)
    page.keyboard.press("Escape")


def load(page):
    response = page.goto(BASE, wait_until="networkidle")
    assert response.status == 200
    expect(page.locator(".world")).to_have_count(3)
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
      return {worlds, scrollWidth:document.documentElement.scrollWidth, scrollHeight:document.documentElement.scrollHeight,
        header:rect(document.querySelector('.site-header').getBoundingClientRect()), footer:rect(document.querySelector('.scene-footer').getBoundingClientRect())};
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
            assert rect["bottom"] <= geometry["footer"]["y"] + 1, f"{world['id']} collides with footer at {width}x{height}: {rect}"
    for index, first in enumerate(geometry["worlds"]):
        a = first["icon"]
        for second in geometry["worlds"][index + 1:]:
            b = second["icon"]
            assert distance([a["x"] + a["width"]/2, a["y"] + a["height"]/2], [b["x"] + b["width"]/2, b["y"] + b["height"]/2]) >= (a["width"] + b["width"])/2 - 1, f"Icons overlap: {first['id']}/{second['id']}"
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
    captions = page.locator(".world-caption").evaluate_all("nodes => nodes.map(n => ({children:n.children.length,cn:n.querySelector('h2').textContent,en:n.querySelector('p').textContent}))")
    assert all(item["children"] == 2 and re.search(r"[\u3400-\u9fff]", item["cn"]) and "Survival" in item["en"] for item in captions), captions
    assert not re.search(r"已发现的世界|SECTOR 01|游戏档案", page.locator("body").inner_text(), re.I)
    expect(page.locator("[data-site-stats]")).to_have_attribute("data-stats-state", "preview")
    page.locator("[data-site-stats] summary").click()
    expect(page.locator("[data-stat-note]")).to_contain_text("不计数")
    page.keyboard.press("Escape")
    screenshot(page, "desktop")


def drift_and_hover(page):
    load(page)
    expect(page.locator("#motion-toggle")).to_have_attribute("aria-pressed", "false")
    before = snapshot(page)
    page.wait_for_timeout(1250)
    after = snapshot(page)
    movement = [distance(before[key], after[key]) for key in before]
    assert max(movement) > 0.1, f"No automatic gentle drift: {movement}"
    assert max(movement) < 7, f"Drift too fast: {movement}"
    pause(page)
    frozen = snapshot(page)
    page.wait_for_timeout(700)
    assert all(distance(point, snapshot(page)[key]) < 0.05 for key, point in frozen.items())
    x, y = icon_center(page)
    page.mouse.move(x, y)
    expect(page.locator("#game-info")).to_be_visible()
    expected_name = page.locator('.world[data-game="dayr"] .world-caption h2').inner_text()
    expect(page.locator("#info-title")).to_have_text(expected_name)
    screenshot(page, "desktop-info")
    page.mouse.move(2, 2)
    expect(page.locator("#game-info")).to_be_hidden(timeout=1500)
    page.locator("#motion-toggle").click()
    expect(page.locator("#motion-toggle")).to_have_attribute("aria-pressed", "false")


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
    saved = page.evaluate("JSON.parse(localStorage.getItem('lcz:positions-v2'))")
    assert saved and any("dayr" in layout for layout in saved.values()), saved
    field = page.locator("#game-universe").bounding_box()
    saved_points = [layout["dayr"] for layout in saved.values() if "dayr" in layout]
    assert any(distance([point["x"]*field["width"], point["y"]*field["height"]], after["dayr"]) < 2 for point in saved_points), saved
    page.reload(wait_until="networkidle")
    pause(page)
    restored = snapshot(page)
    assert distance(after["dayr"], restored["dayr"]) < 3, (after, restored)
    page.locator("#reset-map").click()
    reset = snapshot(page)
    assert distance(baseline["dayr"], reset["dayr"]) < 3
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


def search_and_return(page):
    load(page)
    pause(page)
    page.keyboard.press("/")
    expect(page.locator("#search-dialog")).to_be_visible()
    expect(page.locator("#game-search")).to_be_focused()
    page.locator("#game-search").fill("西部")
    expect(page.locator(".search-result")).to_have_count(1)
    expect(page.locator(".result-links a")).to_have_count(3)
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
    expect(page.locator(".world")).to_have_count(3)


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
    page.locator("#reset-map").tap()
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

        def run_case(name, callback, *, width=1440, height=960, mobile=False, reduce=False):
            context = browser.new_context(viewport={"width":width,"height":height}, is_mobile=mobile, has_touch=mobile, reduced_motion="reduce" if reduce else "no-preference")
            context.on("request", lambda request: results["counter_requests"].append(request.url) if "countapi." in urlparse(request.url).netloc else None)
            page = context.new_page()
            page.set_default_timeout(8000)
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
        run_case("Gentle drift, explicit pause and mouse hover preview", lambda page, _: drift_and_hover(page))
        run_case("Mouse drag, anchor persistence, reset, keyboard and Escape", lambda page, _: desktop_drag(page))
        run_case("Search, keyboard entry and real Wiki return", lambda page, _: search_and_return(page))
        for width, height in [(1920,1080),(1440,960),(1024,768),(768,1024),(600,900),(390,844),(360,640),(320,568),(568,320),(844,390)]:
            def responsive(page, _, width=width, height=height):
                load(page)
                pause(page)
                page.locator("#reset-map").click()
                check_geometry(page, width, height)
                if (width,height) in [(390,844),(320,568),(568,320),(844,390),(1920,1080)]:
                    screenshot(page, f"layout-{width}x{height}")
            run_case(f"Viewport {width}x{height} keeps circles and labels in bounds", responsive, width=width, height=height, mobile=width<=844)
        run_case("Real touch long press, second tap and direct tap entry", touch_longpress, width=390, height=844, mobile=True)
        run_case("Real touch repulsion, cancel and long-press movement threshold", touch_drag_and_cancel, width=390, height=844, mobile=True)
        run_case("Reduced motion freezes drift and preserves touch dragging", reduced_motion, width=390, height=844, mobile=True, reduce=True)

        def local_file(page, _):
            page.goto((ROOT / "index.html").as_uri(), wait_until="load")
            expect(page.locator(".game-icon")).to_have_count(3)
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

print(f"\n{len(results['passed'])} passed; {len(results['failed'])} failed. Results: {OUTPUT / 'results.json'}")
if results["failed"]:
    raise SystemExit(1)
