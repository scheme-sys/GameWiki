"""Real Chrome / Edge mobile regression for the shared Wiki game switcher.

Run: python scripts/test-wiki-nav.py (Python Playwright + installed browsers).
LCZ_NAV_BROWSERS=chrome,msedge selects channels; LCZ_NAV_FILTER selects case IDs.
All traffic stays on an ephemeral localhost server, with music explicitly muted.
"""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from urllib.parse import quote, urlsplit, urljoin
import json
import os
import sys
import traceback
from playwright.sync_api import sync_playwright, expect

sys.stdout.reconfigure(encoding="utf-8")
ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / ".verification/menu/final"
OUTPUT.mkdir(parents=True, exist_ok=True)
PAGES = {
    "craft": "Craft of Survival/wiki.html",
    "dayr": "Day R Survival/wiki_dayR.html",
    "westland": "Westland Survival/westland_wiki.html",
    "westland-lab": "Westland Survival/westland_difficulty_design.html",
    "westland-analysis": "Westland Survival/westland_difficulty_analysis.html",
    "westland-base": "Westland Survival/\u57fa\u5730.html",
    "dawn": "DawnofZombiewiki/index.html",
    "ldoe": "LDOE_Wiki/index.html",
    "grimsoul": "grimsoul_Wiki/index.html",
}
VIEWPORTS = ((320, 740), (390, 844), (844, 390), (568, 320))


class Handler(SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


class Server(ThreadingHTTPServer):
    request_queue_size = 128

    def handle_error(self, *args):
        pass  # A page leaving may close an in-flight image connection.


GEOMETRY = """menu => {
  const box = r => ({left:r.left,top:r.top,right:r.right,bottom:r.bottom,width:r.width,height:r.height});
  const r=menu.getBoundingClientRect(), nav=document.querySelector('.atlas-nav').getBoundingClientRect();
  return {menu:box(r),nav:box(nav),width:innerWidth,height:innerHeight,
    maxHeight:getComputedStyle(menu).maxHeight,scrollHeight:menu.scrollHeight,
    clientHeight:menu.clientHeight,scrollTop:menu.scrollTop};
}"""

CHECK_LINK = """link => {
  const menu=link.closest('.atlas-menu'), r=link.getBoundingClientRect(), m=menu.getBoundingClientRect();
  const clip={left:m.left+menu.clientLeft,top:m.top+menu.clientTop,
    right:m.left+menu.clientLeft+menu.clientWidth,bottom:m.top+menu.clientTop+menu.clientHeight};
  const rect = r=>({left:r.left,top:r.top,right:r.right,bottom:r.bottom,width:r.width,height:r.height});
  const bad=[];
  const inside=r=>r.left>=clip.left-.5&&r.right<=clip.right+.5&&r.top>=clip.top-.5&&r.bottom<=clip.bottom+.5
    &&r.left>=-.5&&r.top>=-.5&&r.right<=innerWidth+.5&&r.bottom<=innerHeight+.5;
  if(!inside(r))bad.push({kind:'link clipped',rect:rect(r),clip});
  const points = r=>[[r.left+2,r.top+2],[r.right-2,r.top+2],[r.left+2,r.bottom-2],
    [r.right-2,r.bottom-2],[(r.left+r.right)/2,(r.top+r.bottom)/2]];
  function probe(r,kind){
    for(const [x,y] of points(r)){
      const hit=document.elementFromPoint(x,y);
      if(!hit||!(hit===link||link.contains(hit)))bad.push({kind,x,y,hit:hit?.outerHTML.slice(0,240)});
    }
  }
  probe(r,'link covered');
  const range=document.createRange();range.selectNodeContents(link);
  const textRects=[...range.getClientRects()].filter(r=>r.width>0&&r.height>0);
  for(const tr of textRects){if(!inside(tr))bad.push({kind:'text clipped',rect:rect(tr),clip});probe(tr,'text covered');}
  return {text:link.textContent.trim(),rect:rect(r),textRects:textRects.map(rect),scrollTop:menu.scrollTop,bad};
}"""


def open_menu(page):
    switcher = page.locator(".atlas-switch")
    if not switcher.evaluate("node=>node.open"):
        page.locator(".atlas-switch summary").tap()
    page.wait_for_timeout(50)  # Native details toggle is queued after activation.
    assert switcher.evaluate("node=>node.open"), "Switcher did not open"


def check_menu(page):
    menu = page.locator(".atlas-menu")
    geometry = menu.evaluate(GEOMETRY)
    r, nav = geometry["menu"], geometry["nav"]
    assert r["width"] > 100 and r["height"] >= 44, geometry
    assert r["left"] >= -.5 and r["right"] <= geometry["width"] + .5, geometry
    assert r["top"] >= nav["bottom"] - .5, ("Menu overlaps navigation controls", geometry)
    assert r["bottom"] <= geometry["height"] + .5, ("Menu exceeds viewport", geometry)
    links = page.locator(".atlas-menu a")
    assert links.count() == 6, f"Expected six game entries, found {links.count()}"
    checked = []
    for index in range(links.count()):
        link = links.nth(index)
        link.evaluate("""link=>{
          const menu=link.closest('.atlas-menu'),r=link.getBoundingClientRect(),m=menu.getBoundingClientRect();
          menu.scrollTop += r.top-m.top-menu.clientTop-(menu.clientHeight-r.height)/2;
        }""")
        page.wait_for_timeout(20)
        item = link.evaluate(CHECK_LINK)
        assert not item["bad"], item
        checked.append(item)
    return {"geometry": geometry, "links": checked}


def screenshot(page, label, report):
    target = OUTPUT / (label + ".png")
    page.screenshot(path=str(target), full_page=False)
    report["screenshots"].append(target.relative_to(ROOT).as_posix())


def run_case(browser, browser_name, game, width, height, base, report, javascript=True):
    label = f"{browser_name}-{game}-{width}x{height}" + ("" if javascript else "-no-js")
    if os.environ.get("LCZ_NAV_FILTER") and os.environ["LCZ_NAV_FILTER"] not in label:
        return
    context = browser.new_context(viewport={"width": width, "height": height},
                                  is_mobile=True, has_touch=True, device_scale_factor=1,
                                  java_script_enabled=javascript, reduced_motion="reduce")
    external, errors, missing = [], [], []

    def route_request(route):
        if urlsplit(route.request.url).hostname != "127.0.0.1":
            external.append(route.request.url)
            route.abort()
        else:
            route.continue_()

    context.route("**/*", route_request)
    context.add_init_script("sessionStorage.setItem('lcz:moonlight-muted','true')")
    page = context.new_page()
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.on("response", lambda response: missing.append(response.url) if response.status >= 400 else None)
    try:
        page.goto(base + quote(PAGES[game], safe="/"), wait_until="networkidle")
        page.evaluate("scrollTo(0,0)")
        open_menu(page)
        checked = check_menu(page)
        if javascript and game == "westland-base" and (width, height) == (390, 844):
            checked["resizes"] = []
            for resized_width, resized_height in ((568, 320), (844, 390), (width, height)):
                page.set_viewport_size({"width": resized_width, "height": resized_height})
                page.wait_for_timeout(100)
                assert page.locator(".atlas-switch").evaluate("node=>node.open"), "Resize closed the menu"
                checked["resizes"].append(check_menu(page))
        if (game == "craft" and width == 320) or (game == "westland-base" and width in (320, 844)):
            screenshot(page, label, report)
        if javascript:
            page.keyboard.press("Escape")
            assert not page.locator(".atlas-switch").evaluate("node=>node.open"), "Escape did not close"
            expect(page.locator(".atlas-switch summary")).to_be_focused()
            open_menu(page)
            page.mouse.click(2, height - 2)
            assert not page.locator(".atlas-switch").evaluate("node=>node.open"), "Outside click did not close"
            open_menu(page)
        else:
            # Native summary remains a usable close/reopen control without script.
            page.locator(".atlas-switch summary").tap()
            assert not page.locator(".atlas-switch").evaluate("node=>node.open")
            open_menu(page)
        last = page.locator(".atlas-menu a").last
        destination = urljoin(page.url, last.get_attribute("href"))
        last.evaluate("link=>{const m=link.closest('.atlas-menu');m.scrollTop=m.scrollHeight}")
        page.wait_for_timeout(30)
        assert not last.evaluate(CHECK_LINK)["bad"]
        with page.expect_navigation(wait_until="domcontentloaded"):
            last.tap()
        assert urlsplit(page.url).path == urlsplit(destination).path, (page.url, destination)
        expect(page.locator('.atlas-nav[data-game="grimsoul"]')).to_be_visible()
        assert not external, ("External traffic attempted", external)
        assert not missing, ("Missing resources", missing)
        assert not errors, ("Page errors", errors)
        report["passed"].append({"case": label, "javascript": javascript, **checked})
        print("PASS", label, flush=True)
    except Exception as error:
        screenshot(page, label + "-failed", report)
        report["failed"].append({"case": label, "error": str(error), "traceback": traceback.format_exc(),
                                 "external": external, "missing": missing, "page_errors": errors})
        print("FAIL", label, str(error)[:500], flush=True)
    finally:
        context.close()


def main():
    report = {"passed": [], "failed": [], "screenshots": [], "browsers": {}}
    server = Server(("127.0.0.1", 0), partial(Handler, directory=str(ROOT)))
    thread = Thread(target=server.serve_forever, daemon=True)
    thread.start()
    base = f"http://127.0.0.1:{server.server_port}/"
    try:
        with sync_playwright() as playwright:
            for channel in os.environ.get("LCZ_NAV_BROWSERS", "chrome,msedge").split(","):
                browser = playwright.chromium.launch(channel=channel.strip(), headless=True)
                report["browsers"][channel] = browser.version
                try:
                    for width, height in VIEWPORTS:
                        for game in PAGES:
                            run_case(browser, channel, game, width, height, base, report)
                    run_case(browser, channel, "westland-base", 568, 320, base, report, javascript=False)
                finally:
                    browser.close()
    finally:
        server.shutdown()
        server.server_close()
        (OUTPUT / "report.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Menu checks: {len(report['passed'])} passed / {len(report['failed'])} failed", flush=True)
    return 1 if report["failed"] else 0


if __name__ == "__main__":
    raise SystemExit(main())
