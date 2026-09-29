"""Browser checks for the draggable portal. Optional dev dependency: Python Playwright.
Run: python scripts/test-portal.py
Uses an isolated, headless Chrome session and an ephemeral local HTTP server.
"""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
import json
import os
from playwright.sync_api import sync_playwright, expect

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / ".verification" / "portal"
OUTPUT.mkdir(parents=True, exist_ok=True)

class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass

server = ThreadingHTTPServer(("127.0.0.1", 0), partial(QuietHandler, directory=str(ROOT)))
Thread(target=server.serve_forever, daemon=True).start()
BASE = "http://127.0.0.1:" + str(server.server_port) + "/"
results = []
def passed(name):
    results.append(name)
    print("PASS " + name)

try:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True, channel=os.environ.get("ORBIT_BROWSER", "chrome"))
        context = browser.new_context(viewport={"width": 1440, "height": 960})
        page = context.new_page()
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        response = page.goto(BASE, wait_until="networkidle")
        assert response.status == 200
        assert page.locator(".world").count() == 3
        assert page.locator(".game-icon").evaluate_all("(imgs)=>imgs.every(i=>i.complete && i.naturalWidth > 0)")
        assert page.locator("canvas").count() == 0
        assert page.locator(".world-link").evaluate_all("(links)=>links.every(a=>getComputedStyle(a).animationName === 'none')")
        passed("Home renders three real icons with no continuous motion")

        dayr = page.locator('.world[data-game="dayr"]')
        box = dayr.locator(".game-icon").bounding_box()
        x, y = box["x"] + box["width"] / 2, box["y"] + box["height"] / 2
        before = dayr.evaluate("(node)=>[Number(node.dataset.x),Number(node.dataset.y)]")
        page.mouse.move(x, y)
        page.mouse.down()
        page.mouse.move(x + 80, y + 45, steps=12)
        page.mouse.up()
        after = dayr.evaluate("(node)=>[Number(node.dataset.x),Number(node.dataset.y)]")
        assert page.url == BASE
        assert abs(after[0] - before[0] - 80) < 2
        assert abs(after[1] - before[1] - 45) < 2
        page.reload(wait_until="networkidle")
        restored = dayr.evaluate("(node)=>[Number(node.dataset.x),Number(node.dataset.y)]")
        assert all(abs(a - b) < 2 for a, b in zip(after, restored))
        passed("Dragging does not navigate and arrangement survives reload")

        page.locator("#reset-map").click()
        reset = dayr.evaluate("(node)=>[Number(node.dataset.x),Number(node.dataset.y)]")
        assert all(abs(a - b) < 2 for a, b in zip(before, reset))
        dayr.locator("a").focus()
        page.keyboard.press("ArrowRight")
        shifted = dayr.evaluate("(node)=>Number(node.dataset.x)")
        assert abs(shifted - reset[0] - 12) < 2
        box = dayr.locator(".game-icon").bounding_box()
        page.mouse.move(box["x"] + box["width"]/2, box["y"] + box["height"]/2)
        page.mouse.down()
        page.mouse.move(box["x"] + box["width"]/2 + 35, box["y"] + box["height"]/2 + 20, steps=4)
        page.keyboard.press("Escape")
        page.mouse.up()
        assert abs(dayr.evaluate("(node)=>Number(node.dataset.x)") - shifted) < 2
        assert not page.locator("body").evaluate("(body)=>body.classList.contains('is-dragging')")
        passed("Reset, keyboard movement and drag cancellation work")

        page.locator('[data-filter="western"]').click()
        assert page.locator(".world:visible").count() == 1
        assert page.locator("#detail-title").inner_text() == "Westland Survival"
        assert page.locator("#detail-links a").count() == 3
        page.locator('[data-filter="all"]').click()
        assert page.locator(".world:visible").count() == 3
        page.keyboard.press("/")
        assert page.locator("#archive-dialog").evaluate("(d)=>d.open")
        page.locator("#game-search").fill("westland")
        assert page.locator(".archive-result").count() == 1
        assert page.locator(".result-links a").count() == 3
        page.locator("#game-search").fill("<script>no-such-game</script>")
        assert page.locator("#search-empty").is_visible()
        assert page.locator(".archive-result").count() == 0
        page.keyboard.press("Escape")
        assert not page.locator("#archive-dialog").evaluate("(d)=>d.open")
        expect(page.locator("#search-open")).to_be_focused()
        page.locator("#list-open").click()
        assert page.locator(".archive-result").count() == 3
        page.locator("#archive-dialog .dialog-close").click()
        passed("Category filtering, live search, empty state and dialog focus work")

        page.locator("#reset-map").click()
        dayr.locator("a").focus()
        page.keyboard.press("Enter")
        page.wait_for_url("**/wiki_dayR.html")
        assert page.locator(".atlas-home").get_attribute("href") == "../index.html"
        page.locator(".atlas-home").click()
        page.wait_for_url("**/index.html")
        assert page.locator(".world").count() == 3
        passed("Keyboard entry reaches the real Wiki and return navigation works")

        page.goto(BASE, wait_until="networkidle")
        page.screenshot(path=str(OUTPUT / "desktop.jpg"), full_page=True, quality=85)
        for width, height in [(1920,1080),(1024,768),(768,1024),(600,900),(390,844),(320,740)]:
            page.set_viewport_size({"width":width,"height":height})
            page.locator("#reset-map").click()
            assert page.evaluate("document.documentElement.scrollWidth <= window.innerWidth"), f"Horizontal overflow at {width}"
            assert page.locator(".world:visible").count() == 3
            for node in page.locator(".game-icon").all():
                rect = node.bounding_box()
                assert rect["x"] >= 0 and rect["x"] + rect["width"] <= width + 1
            if width == 390:
                page.screenshot(path=str(OUTPUT / "mobile.jpg"),full_page=True,quality=85)
        passed("Six desktop, tablet and phone widths have no horizontal overflow")

        # Touch events travel through the browser input pipeline, not DOM dispatch.
        touch_context = browser.new_context(viewport={"width":390,"height":844},is_mobile=True,has_touch=True)
        touch_page = touch_context.new_page()
        touch_page.goto(BASE, wait_until="networkidle")
        bubble = touch_page.locator('.world[data-game="dayr"]')
        icon = bubble.locator(".game-icon").bounding_box()
        tx, ty = icon["x"] + icon["width"]/2, icon["y"] + icon["height"]/2
        touch_before = bubble.evaluate("(node)=>Number(node.dataset.y)")
        cdp = touch_context.new_cdp_session(touch_page)
        cdp.send("Input.dispatchTouchEvent", {"type":"touchStart","touchPoints":[{"x":tx,"y":ty}]})
        for step in range(1, 7):
            cdp.send("Input.dispatchTouchEvent", {"type":"touchMove","touchPoints":[{"x":tx+step*3,"y":ty+step*8}]})
        cdp.send("Input.dispatchTouchEvent", {"type":"touchEnd","touchPoints":[]})
        assert touch_page.url == BASE
        assert bubble.evaluate("(node)=>Number(node.dataset.y)") > touch_before + 30
        passed("Touch dragging moves a bubble without accidental navigation")
        touch_context.close()

        file_page = context.new_page()
        file_page.goto((ROOT / "index.html").as_uri(), wait_until="load")
        assert file_page.locator(".game-icon").count() == 3
        assert file_page.locator(".game-icon").evaluate_all("(images)=>images.every(i=>i.naturalWidth>0)")
        passed("Home works directly from a local file")
        assert not errors, errors
        passed("No browser JavaScript errors")
        (OUTPUT / "results.json").write_text(json.dumps({"passed":results,"errors":errors},indent=2),encoding="utf-8")
        browser.close()
finally:
    server.shutdown()
