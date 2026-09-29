"""Independent browser regression for the three-plan Westland loadout workspace.

Uses fresh Chrome /
Edge contexts, an ephemeral localhost server, no production storage or network.
"""
from copy import deepcopy
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from urllib.parse import urlsplit
import argparse
import json
import sys
import traceback

from playwright.sync_api import sync_playwright, expect

sys.stdout.reconfigure(encoding="utf-8")
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / ".verification" / "loadout-workspace"
STORE = "westland-loadout-lab-v1"
SCHEMA = "WLO-LOADOUT-LAB-1"


class Handler(SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


class Server(ThreadingHTTPServer):
    request_queue_size = 128

    def handle_error(self, *args):
        # Chromium occasionally closes an image response while leaving a page.
        pass


def state(page):
    return page.evaluate("westlandLoadoutLab.getState()")


def workspace(page):
    return page.evaluate("westlandLoadoutLab.getWorkspace()")


def reference(page):
    return page.evaluate("westlandLoadoutLab.getReference()")


def open_details(page, selector):
    details = page.locator(selector)
    if not details.evaluate("e=>e.open"):
        details.locator(":scope > summary").click()


def select_plan(page, number):
    page.locator(f'#lab-plan-buttons [data-lab-plan="{number}"]').click()
    expect(page.locator(f'#lab-plan-buttons [data-lab-plan="{number}"]')).to_have_attribute("aria-pressed", "true")
    assert workspace(page)["active"] == number


def change_level(page, level):
    page.locator('#lab-slot-buttons [data-lab-slot="weapon"]').click()
    page.locator("#lab-level").fill(str(level))
    page.locator("#lab-level").press("Tab")
    assert state(page)["slots"]["weapon"]["level"] == level


def copy_to(page, number, action=None):
    dialogs = []

    def handle(dialog):
        dialogs.append({"type": dialog.type, "message": dialog.message})
        if action == "accept":
            dialog.accept()
        else:
            dialog.dismiss()

    page.locator("#lab-copy-target").select_option(str(number))
    page.on("dialog", handle)
    try:
        page.locator("#lab-copy-plan").click()
    finally:
        page.remove_listener("dialog", handle)
    if action is None:
        assert dialogs == [], f"Unnecessary overwrite confirmation: {dialogs}"
    else:
        assert len(dialogs) == 1 and dialogs[0]["type"] == "confirm", dialogs


def config_at(base, level):
    result = deepcopy(base)
    result["slots"]["weapon"]["level"] = level
    return result


def plan_case(page, checks, evidence):
    open_details(page, ".lab-plan-tools")
    initial = state(page)
    ws = workspace(page)
    assert len(ws["plans"]) == 3 and ws["active"] == 0, ws
    assert page.locator("#lab-plan-buttons [data-lab-plan]").count() == 3
    assert initial["schema"] == SCHEMA
    # Debug reads must not expose mutable live plan objects.
    page.evaluate("()=>{const w=westlandLoadoutLab.getWorkspace();w.plans[0].config.base.health=999999;w.plans[0].name='mutated'}")
    assert state(page) == initial and workspace(page)["plans"][0]["name"] != "mutated"
    page.locator("#lab-plan-name").fill("  探索 · 步枪  ")
    page.locator("#lab-plan-name").press("Tab")
    assert workspace(page)["plans"][0]["name"] == "探索 · 步枪"
    select_plan(page, 1)
    page.locator("#lab-plan-name").fill("备用方案")
    page.locator("#lab-plan-name").press("Tab")
    select_plan(page, 0)
    copy_to(page, 1)
    assert workspace(page)["plans"][1]["config"] == initial
    assert workspace(page)["plans"][1]["name"] == "备用方案"
    page.locator("#lab-copy-target").select_option("0")
    expect(page.locator("#lab-copy-plan")).to_be_disabled()
    change_level(page, 147)
    original = state(page)
    page.locator("#lab-save-a").click()
    assert reference(page) == original
    select_plan(page, 1)
    change_level(page, 251)
    target = state(page)
    assert reference(page) == original
    select_plan(page, 0)
    copy_to(page, 1, "dismiss")
    assert workspace(page)["plans"][1]["config"] == target
    assert state(page) == original
    copy_to(page, 1, "accept")
    assert workspace(page)["plans"][1]["config"] == original
    assert workspace(page)["plans"][1]["name"] == "备用方案"
    select_plan(page, 2)
    change_level(page, 333)
    third = state(page)
    assert reference(page) == original
    page.locator("#lab-load-a").click()
    assert state(page) == original
    assert workspace(page)["plans"][0]["config"] == original
    page.locator("#lab-plan-name").fill("   ")
    page.locator("#lab-plan-name").press("Tab")
    assert workspace(page)["plans"][2]["name"].strip()
    select_plan(page, 1)
    assert state(page) == original
    checks.append("three independent plans, trimmed/default names, defensive snapshots, conditional overwrite, global reference A")
    # Actual change events and pagehide happen in one task: the 220 ms debounce
    # cannot run in between and the payload must already contain the new values.
    immediate = page.evaluate("""() => {
      const t=performance.now();
      const input=document.getElementById('lab-level');input.value='619';
      input.dispatchEvent(new Event('change',{bubbles:true}));
      const name=document.getElementById('lab-plan-name');name.value='离开前最新输入';
      name.dispatchEvent(new Event('input',{bubbles:true}));
      dispatchEvent(new Event('pagehide'));
      return {elapsed:performance.now()-t,stored:JSON.parse(localStorage.getItem('westland-loadout-lab-v1'))};
    }""")
    assert immediate["elapsed"] < 220, immediate["elapsed"]
    payload = immediate["stored"]
    assert payload["config"]["slots"]["weapon"]["level"] == 619
    assert payload["workspace"]["plans"][1]["config"]["slots"]["weapon"]["level"] == 619
    assert payload["workspace"]["plans"][1]["name"] == "离开前最新输入"
    assert payload["reference"] == original
    expected = state(page)
    page.reload(wait_until="networkidle")
    wait_lab(page)
    assert state(page) == expected and workspace(page)["active"] == 1
    assert workspace(page)["plans"][1]["name"] == "离开前最新输入"
    assert reference(page) == original
    evidence["pagehide_flush_ms"] = immediate["elapsed"]
    checks.append("pagehide synchronously flushes latest edits before the 220 ms debounce and reload restores active plan")


def filter_case(page, checks, evidence):
    page.locator('#lab-slot-buttons [data-lab-slot="weapon"]').click()
    rows = page.evaluate("""() => WestlandDifficulty.DATA.items.filter(i=>westlandLoadoutLab.allowed(i,'weapon')).map(i=>({id:i.id,tier:i.tier,name:i.name,en:i.en}))""")
    tiers = sorted(set(row["tier"] for row in rows))
    chosen = next(t for t in tiers if sum(row["tier"] == t for row in rows) >= 2)
    outside = next(row for row in rows if row["tier"] != chosen)
    page.locator("#lab-item-tier").select_option("all")
    page.locator("#lab-item-search").fill("")
    page.locator("#lab-item-select").select_option(outside["id"])
    page.locator("#lab-item-tier").select_option(str(chosen))
    # Query participates alongside tier; it must survive next/previous changes.
    query = "t" + str(chosen)
    page.locator("#lab-item-search").fill(query)
    options = page.locator("#lab-item-select option").evaluate_all("nodes=>nodes.map(n=>({id:n.value,text:n.textContent}))")
    candidates = [o["id"] for o in options if o["id"] and o["id"] != outside["id"]]
    expected_ids = {row["id"] for row in rows if row["tier"] == chosen}
    assert set(candidates) == expected_ids and len(candidates) >= 2
    expect(page.locator("#lab-item-prev")).to_be_enabled()
    expect(page.locator("#lab-item-next")).to_be_enabled()
    page.locator("#lab-item-next").click()
    assert state(page)["slots"]["weapon"]["id"] == candidates[0]
    assert page.locator("#lab-item-search").input_value() == query
    expect(page.locator("#lab-item-prev")).to_be_disabled()
    for expected_id in candidates[1:]:
        page.locator("#lab-item-next").click()
        assert state(page)["slots"]["weapon"]["id"] == expected_id
        assert page.locator("#lab-item-search").input_value() == query
    expect(page.locator("#lab-item-next")).to_be_disabled()
    page.locator("#lab-item-prev").click()
    assert state(page)["slots"]["weapon"]["id"] == candidates[-2]
    # The current item outside the filter is retained in the select, and prev
    # starts at the filtered list's last item without wrapping its boundary.
    page.locator("#lab-item-tier").select_option("all")
    page.locator("#lab-item-search").fill("")
    page.locator("#lab-item-select").select_option(outside["id"])
    page.locator("#lab-item-tier").select_option(str(chosen))
    page.locator("#lab-item-search").fill(query)
    page.locator("#lab-item-prev").click()
    assert state(page)["slots"]["weapon"]["id"] == candidates[-1]
    expect(page.locator("#lab-item-next")).to_be_disabled()
    before_empty = state(page)
    page.locator("#lab-item-search").fill("__no_such_player_equipment_92019__")
    expect(page.locator("#lab-item-prev")).to_be_disabled()
    expect(page.locator("#lab-item-next")).to_be_disabled()
    assert state(page) == before_empty
    assert page.locator("#lab-item-count").inner_text().strip()
    assert page.locator("#lab-item-select option").count() == 2, "Only unequip and current outside-filter item should remain"
    page.locator("#lab-item-search").fill("")
    page.locator("#lab-item-tier").select_option("all")
    evidence["filtered_tier"] = chosen
    evidence["filtered_candidate_count"] = len(candidates)
    checks.append("tier and search intersect, next/previous preserve search, outside-filter first/last and disabled boundaries/empty results")



def focus_case(page, checks, evidence):
    stage = page.locator('.lab-dress-stage')
    expect(stage).to_be_visible()
    expect(page.locator('#lab-doll')).to_be_visible()
    expect(page.locator('#lab-avatar-open')).to_be_visible()
    expect(page.locator('#lab-avatar-canvas')).to_be_hidden()
    expect(page.locator('#lab-avatar-mode')).to_contain_text(chr(20108) + chr(32500))
    assert page.locator('.lab-dress-stage #lab-slot-buttons [data-lab-slot]').count() == 9
    assert not page.locator('#lab-doll').evaluate("e=>!!e.closest('details:not([open])')")
    for button in page.locator('#lab-slot-buttons [data-lab-slot]').all():
        expect(button).to_be_visible()

    def geometry():
        return page.evaluate("""() => {
          const header=document.querySelector('.top').getBoundingClientRect();
          const rect=selector=>{const b=document.querySelector(selector).getBoundingClientRect();return {top:b.top,bottom:b.bottom,left:b.left,right:b.right,width:b.width,height:b.height}};
          return {y:scrollY,height:innerHeight,headerBottom:header.top<=0?header.bottom:0,
            title:rect('#lab-slot-title'),select:rect('#lab-item-select'),model:rect('#lab-doll'),
            stage:rect('.lab-dress-stage')};
        }""")

    def assert_editor_reveal(before, after):
        for key in ['title', 'select']:
            box = after[key]
            assert box['top'] >= after['headerBottom'] - 1 and box['bottom'] <= after['height'] + 1, (key, before, after)
        top = min(before['title']['top'], before['select']['top'])
        bottom = max(before['title']['bottom'], before['select']['bottom'])
        needed = bottom - before['height'] if bottom > before['height'] else top - before['headerBottom'] if top < before['headerBottom'] else 0
        actual = after['y'] - before['y']
        # Permit a small breathing margin; forbid jumping to the editor's top
        # when merely exposing the select would retain the visible character.
        assert abs(actual) <= abs(needed) + 32, (needed, actual, before, after)
        if needed == 0 and top >= before['headerBottom'] + 12 and bottom <= before['height'] - 12:
            assert abs(actual) <= 1, (before, after)
        model = before['model']
        possible = max(0, min(model['bottom'] - needed, before['height']) - max(model['top'] - needed, before['headerBottom']))
        visible = max(0, min(after['model']['bottom'], after['height']) - max(after['model']['top'], after['headerBottom']))
        if possible > 32:
            assert visible > 0, (possible, visible, before, after)
        return {'minimal_needed_px': needed, 'actual_scroll_px': actual, 'model_visible_px': visible, 'before': before, 'after': after}

    mobile = page.viewport_size['width'] < 600
    button = page.locator('#lab-slot-buttons [data-lab-slot="ring2"]')
    button.focus()
    if mobile:
        page.evaluate('scrollBy(0,-Math.min(140,scrollY))')
    before = geometry()
    page.keyboard.press('Enter')
    assert page.evaluate("document.activeElement?.dataset.labSlot") == 'ring2'
    expect(page.locator('#lab-slot-buttons [data-lab-slot="ring2"]')).to_have_attribute('aria-pressed', 'true')
    if mobile:
        expect(page.locator('#lab-slot-title')).to_be_in_viewport()
        evidence['slot_pick_geometry'] = assert_editor_reveal(before, geometry())

    doll = page.locator('#lab-doll [data-lab-slot="head"]')
    doll.focus()
    if mobile:
        page.evaluate('scrollBy(0,-Math.min(140,scrollY))')
    before = geometry()
    page.keyboard.press('Space')
    assert page.evaluate("document.activeElement?.closest('#lab-slot-buttons')?.id") == 'lab-slot-buttons'
    assert page.evaluate("document.activeElement?.dataset.labSlot") == 'head'
    expect(page.locator('#lab-slot-buttons [data-lab-slot="head"]')).to_have_attribute('aria-pressed', 'true')
    expect(page.locator('#lab-slot-title')).to_be_in_viewport()
    evidence['model_pick_geometry'] = assert_editor_reveal(before, geometry())
    if mobile:
        assert evidence['model_pick_geometry']['minimal_needed_px'] > 0, 'The mobile regression must exercise a real offscreen editor reveal'
    if mobile:
        back = page.locator('a.lab-back-to-model')
        expect(back).to_have_attribute('href', '#lab-character')
        back.click()
        expect(page.locator('#lab-doll')).to_be_in_viewport(ratio=0.35)
        expect(page.locator('#lab-avatar-open')).to_be_visible()
        evidence['return_to_character_geometry'] = geometry()
    checks.append('character and 9 surrounding slots stay visible without opening a disclosure; 3D stays explicitly opt-in')
    checks.append('slot Enter and model Space retain matching slot focus; selection scrolls only enough to reveal editor and keeps character visible where possible')
    if mobile:
        checks.append('mobile return-to-character link reaches the persistent character stage')


def battle_io_case(page, checks, evidence):
    open_details(page, ".lab-plan-tools")
    # Public interchange remains one active configuration, not a workspace dump.
    expected = state(page)
    with page.expect_download() as download:
        page.locator("#lab-export").click()
    assert download.value.suggested_filename == "westland-loadout.json"
    exported = json.loads(Path(download.value.path()).read_text(encoding="utf-8"))
    assert exported == expected and exported["schema"] == SCHEMA
    assert "workspace" not in exported and "plans" not in exported
    other_plans = workspace(page)
    modified = config_at(expected, 487)
    page.locator("#lab-import-file").set_input_files({"name": "workspace-regression.json", "mimeType": "application/json", "buffer": json.dumps(modified).encode()})
    page.wait_for_function("()=>westlandLoadoutLab.getState().slots.weapon.level===487")
    assert state(page) == modified
    ws = workspace(page)
    assert all(ws["plans"][i] == other_plans["plans"][i] for i in range(3) if i != ws["active"])
    page.locator("#lab-run-once").click()
    page.wait_for_function("()=>!westlandLoadoutLab.isBusy()&&westlandLoadoutLab.getReport()?.results.length===1")
    report = page.evaluate("westlandLoadoutLab.getReport()")
    assert report["schema"] == "WLO-LOADOUT-BATTLE-REPORT-1" and report["config"] == modified
    page.locator(".lab-sim-options > summary").click()
    page.locator("#lab-runs").fill("8")
    page.locator("#lab-runs").press("Tab")
    page.locator("#lab-run-batch").click()
    page.wait_for_function("()=>!westlandLoadoutLab.isBusy()&&westlandLoadoutLab.getReport()?.results.length===8")
    report = page.evaluate("westlandLoadoutLab.getReport()")
    with page.expect_download() as download:
        page.locator("#lab-export-report").click()
    assert download.value.suggested_filename == "westland-battle-report.json"
    assert json.loads(Path(download.value.path()).read_text(encoding="utf-8")) == report
    evidence["batch_count"] = len(report["results"])
    checks.append("single configuration import/export schema and inactive plans preserved; one battle and 8-run batch/report export")


def wait_lab(page):
    page.wait_for_function("()=>!!window.westlandLoadoutLab?.getWorkspace")



def draft_case(page, checks, evidence):
    # Keep focus and the actual input node during change/Tab.
    fields = page.locator('#lab-item-stats input:enabled')
    assert fields.count() >= 2
    first_key = fields.nth(0).get_attribute('data-lab-stat')
    second_key = fields.nth(1).get_attribute('data-lab-stat')
    fields.nth(0).evaluate("e=>window.__workspaceDraftNode=e")
    fields.nth(0).fill('17')
    fields.nth(0).press('Tab')
    assert page.evaluate("document.activeElement?.dataset.labStat") == second_key
    assert page.evaluate("()=>document.querySelector('#lab-item-stats [data-lab-stat='+CSS.escape(window.__workspaceDraftNode.dataset.labStat)+']')===window.__workspaceDraftNode")
    checks.append('editing an attribute then Tab retains its input node and moves focus to the next attribute')
    # One JS task: no blur/change events and no opportunity for the debounce.
    result = page.evaluate("""() => {
      const input=document.getElementById('lab-level');input.focus();
      let blurred=0;input.addEventListener('blur',()=>blurred++);
      const t=performance.now();input.value='693';
      input.dispatchEvent(new Event('input',{bubbles:true}));
      dispatchEvent(new Event('pagehide'));
      return {blurred,ms:performance.now()-t,payload:JSON.parse(localStorage.getItem('westland-loadout-lab-v1'))};
    }""")
    assert result['blurred'] == 0 and result['ms'] < 220
    assert result['payload']['config']['slots']['weapon']['level'] == 693
    assert result['payload']['workspace']['plans'][0]['config']['slots']['weapon']['level'] == 693
    stat_result = page.evaluate("""() => {
      const input=document.querySelector('#lab-item-stats [data-lab-stat="damage"]');input.focus();
      let blurred=0;input.addEventListener('blur',()=>blurred++);
      const t=performance.now();input.value='123';
      input.dispatchEvent(new Event('input',{bubbles:true}));
      dispatchEvent(new Event('pagehide'));
      return {blurred,ms:performance.now()-t,payload:JSON.parse(localStorage.getItem('westland-loadout-lab-v1'))};
    }""")
    assert stat_result['blurred'] == 0 and stat_result['ms'] < 220
    assert stat_result['payload']['config']['slots']['weapon']['overrides']['damage'] == 123
    assert stat_result['payload']['workspace']['plans'][0]['config']['slots']['weapon']['overrides']['damage'] == 123
    # Real reload immediately after fill: no click, Tab or forced blur.
    page.locator('#lab-level').fill('731')
    page.reload(wait_until='networkidle')
    wait_lab(page)
    assert state(page)['slots']['weapon']['level'] == 731
    page.locator('#lab-item-stats [data-lab-stat="damage"]').fill('137')
    page.reload(wait_until='networkidle')
    wait_lab(page)
    assert state(page)['slots']['weapon']['overrides']['damage'] == 137
    checks.append('valid unblurred level/attribute inputs flush synchronously on pagehide and survive real reload')
    previous = state(page)
    for selector, invalid in [('#lab-level', '0'), ('#lab-item-stats [data-lab-stat="damage"]', '10000001')]:
        saved = page.evaluate("""({selector,value})=>{
          const input=document.querySelector(selector);input.focus();input.value=value;
          input.dispatchEvent(new Event('input',{bubbles:true}));
          dispatchEvent(new Event('pagehide'));
          return JSON.parse(localStorage.getItem('westland-loadout-lab-v1'));
        }""", {'selector': selector, 'value': invalid})
        assert saved['config'] == previous
        assert state(page) == previous
        page.reload(wait_until='networkidle')
        wait_lab(page)
    hidden = page.evaluate("""() => {
      const input=document.getElementById('lab-level');input.focus();input.value='743';
      input.dispatchEvent(new Event('input',{bubbles:true}));
      Object.defineProperty(document,'hidden',{configurable:true,get:()=>true});
      document.dispatchEvent(new Event('visibilitychange'));
      delete document.hidden;
      return JSON.parse(localStorage.getItem('westland-loadout-lab-v1'));
    }""")
    assert hidden['config']['slots']['weapon']['level'] == 743
    evidence['unblurred_pagehide_ms'] = {'level': result['ms'], 'attribute': stat_result['ms']}
    evidence['tab_fields'] = [first_key, second_key]
    checks.append('invalid numeric drafts preserve the last valid config; hidden visibility also flushes a valid draft')


def reset_case(page, checks, evidence):
    baseline = state(page)
    open_details(page, '.lab-plan-tools')
    change_level(page, 451)
    first = state(page)
    page.locator('#lab-save-a').click()
    select_plan(page, 1)
    change_level(page, 552)
    second = state(page)
    select_plan(page, 2)
    change_level(page, 653)
    page.locator('#lab-plan-name').fill('Only this plan resets')
    page.locator('#lab-plan-name').press('Tab')
    page.locator('#lab-run-once').click()
    page.wait_for_function('()=>!westlandLoadoutLab.isBusy()&&westlandLoadoutLab.getReport()?.results.length===1')
    before = workspace(page)
    prompts = []

    def accept(dialog):
        prompts.append(dialog.type)
        dialog.accept()

    page.on('dialog', accept)
    try:
        page.locator('#lab-reset').click()
    finally:
        page.remove_listener('dialog', accept)
    assert prompts == ['confirm']
    assert state(page) == baseline
    after = workspace(page)
    assert after['active'] == 2
    assert after['plans'][0] == before['plans'][0] and after['plans'][0]['config'] == first
    assert after['plans'][1] == before['plans'][1] and after['plans'][1]['config'] == second
    assert reference(page) == first
    assert page.evaluate('westlandLoadoutLab.getReport()') is None
    expect(page.locator('#lab-battle-results')).to_be_hidden()
    expect(page.locator('#lab-export-report')).to_be_disabled()
    page.evaluate("dispatchEvent(new Event('pagehide'))")
    page.reload(wait_until='networkidle')
    wait_lab(page)
    assert state(page) == baseline and reference(page) == first
    assert workspace(page)['plans'][0] == before['plans'][0]
    assert workspace(page)['plans'][1] == before['plans'][1]
    checks.append('reset clears only the active plan and its report; two other plans and global reference A survive reload')



def analysis_case(page, checks, evidence):
    change_level(page, 879)
    saved = state(page)
    page.locator('a.lab-analysis-link').click()
    page.wait_for_url('**/westland_difficulty_analysis.html')
    page.wait_for_load_state('networkidle')
    assert page.locator('#loadout-lab').count() == 0
    expect(page.locator('#difficulty-tabs [data-tier="3"]')).to_have_attribute('aria-pressed', 'true')
    page.locator('#difficulty-tabs [data-tier="5"]').click()
    page.locator('#original-level').fill('123')
    page.locator('#quantile').evaluate("e=>{e.value='75';e.dispatchEvent(new Event('input',{bubbles:true}))}")
    expected = {'tier': 5, 'originalLevel': 123, 'quantile': 75}
    assert page.evaluate("JSON.parse(sessionStorage.getItem('westland-difficulty-selection-v1'))") == expected
    assert page.locator('#target-level').input_value() == '1251'
    page.locator('header.top nav a[href="westland_difficulty_design.html"]').click()
    page.wait_for_url('**/westland_difficulty_design.html')
    wait_lab(page)
    assert state(page) == saved, 'Visiting analysis unexpectedly changed active equipment'
    open_details(page, '.lab-bulk-tools')
    expect(page.locator('#lab-difficulty-summary')).to_contain_text('1251')
    page.locator('#lab-apply-difficulty').click()
    assert all(row['level'] == 1251 for row in state(page)['slots'].values() if row['id'])
    checks.append('analysis selection survives round trip; current plan changes only after explicit difficulty application')


def restore_case(expected, expected_ref, expected_plans=None, active=None):
    def run(page, checks, evidence):
        assert state(page) == expected
        assert reference(page) == expected_ref
        ws = workspace(page)
        assert len(ws["plans"]) == 3
        if active is not None:
            assert ws["active"] == active
        for i, config in (expected_plans or {}).items():
            assert ws["plans"][i]["config"] == config, i
            select_plan(page, i)
            assert state(page) == config, i
            assert reference(page) == expected_ref
        checks.append("independent recovery of valid legacy config, reference A and intact workspace plans")
    return run


def denied_case(page, checks, evidence):
    open_details(page, ".lab-plan-tools")
    change_level(page, 719)
    first = state(page)
    page.locator("#lab-save-a").click()
    select_plan(page, 1)
    change_level(page, 821)
    second = state(page)
    select_plan(page, 0)
    assert state(page) == first and reference(page) == first
    copy_to(page, 1, "accept")
    select_plan(page, 1)
    assert state(page) == first and state(page) != second
    page.locator("#lab-plan-name").fill("内存仍可使用")
    page.locator("#lab-plan-name").press("Tab")
    page.evaluate("dispatchEvent(new Event('pagehide'))")
    assert workspace(page)["plans"][1]["name"] == "内存仍可使用"
    assert page.locator("#lab-save-status").inner_text().strip()
    checks.append("blocked localStorage leaves all in-memory plan editing, switching, copying and reference A usable")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--channels", nargs="+", default=["chrome", "msedge"])
    parser.add_argument("--only", help="Run only case names containing this substring")
    args = parser.parse_args()
    OUT.mkdir(parents=True, exist_ok=True)
    server = Server(("127.0.0.1", 0), partial(Handler, directory=str(ROOT)))
    Thread(target=server.serve_forever, daemon=True).start()
    url = f"http://127.0.0.1:{server.server_port}/Westland%20Survival/westland_difficulty_design.html"
    results = {"browsers": {}, "passed": [], "failed": [], "screenshots": []}

    def journey(browser, label, callback, seed=None, mobile=False, denied=False):
        if args.only and args.only not in label:
            return
        context = browser.new_context(viewport={"width": 390 if mobile else 1440, "height": 844 if mobile else 980}, is_mobile=mobile, has_touch=mobile, reduced_motion="reduce")
        context.add_init_script("sessionStorage.setItem('lcz:moonlight-muted','true')")
        if seed is not None:
            context.add_init_script("if(!sessionStorage.getItem('test:workspace-seeded')){localStorage.setItem(" + json.dumps(STORE) + "," + json.dumps(json.dumps(seed, ensure_ascii=False)) + ");sessionStorage.setItem('test:workspace-seeded','1')}")
        if denied:
            context.add_init_script("""(()=>{const g=Storage.prototype.getItem,s=Storage.prototype.setItem;Storage.prototype.getItem=function(k){if(k==='westland-loadout-lab-v1')throw new DOMException('Denied','SecurityError');return g.call(this,k)};Storage.prototype.setItem=function(k,v){if(k==='westland-loadout-lab-v1')throw new DOMException('Denied','SecurityError');return s.call(this,k,v)}})()""")
        errors, external, missing, requests = [], [], [], []

        def route(route):
            if urlsplit(route.request.url).hostname != "127.0.0.1":
                external.append(route.request.url)
                route.abort()
            else:
                route.continue_()

        context.route("**/*", route)
        page = context.new_page()
        page.set_default_timeout(10000)
        page.on("pageerror", lambda e: errors.append(str(e)))
        page.on("request", lambda r: requests.append(r.url))
        page.on("response", lambda r: missing.append({"status": r.status, "url": r.url}) if r.status >= 400 else None)
        checks, evidence = [], {}
        try:
            page.goto(url, wait_until="networkidle")
            wait_lab(page)
            callback(page, checks, evidence)
            heavy = [r for r in requests if any(x in r for x in ["avatar-meshes", "avatar-textures", "avatar3d-engine"])]
            assert not heavy, heavy
            assert not errors and not external and not missing, (errors, external, missing)
            checks.append("no JavaScript errors, missing assets, external requests or default 3D loads")
            if "main" in label:
                page.locator("#lab-config").scroll_into_view_if_needed()
                path = OUT / (label + ".png")
                page.screenshot(path=str(path))
                results["screenshots"].append(path.relative_to(ROOT).as_posix())
            results["passed"].append({"case": label, "checks": checks, "evidence": evidence})
            print("PASS", label, flush=True)
        except Exception as error:
            path = OUT / (label + "-failure.png")
            page.screenshot(path=str(path))
            results["failed"].append({"case": label, "error": str(error), "traceback": traceback.format_exc(), "checks": checks, "evidence": evidence, "errors": errors, "external": external, "missing": missing})
            print("FAIL", label, str(error)[:500], flush=True)
        finally:
            context.close()

    try:
        with sync_playwright() as pw:
            for channel in args.channels:
                browser = pw.chromium.launch(channel=channel, headless=True)
                results["browsers"][channel] = browser.version
                try:
                    # A clean, read-only baseline makes the malformed-cache fixtures
                    # independent of item IDs and future data updates.
                    probe = browser.new_context()
                    probe.add_init_script("sessionStorage.setItem('lcz:moonlight-muted','true')")
                    probe.route("**/*", lambda r: r.continue_() if urlsplit(r.request.url).hostname == "127.0.0.1" else r.abort())
                    p = probe.new_page()
                    p.goto(url, wait_until="networkidle")
                    wait_lab(p)
                    baseline = state(p)
                    probe.close()

                    def main_case(page, checks, evidence):
                        plan_case(page, checks, evidence)
                        filter_case(page, checks, evidence)
                        focus_case(page, checks, evidence)
                        battle_io_case(page, checks, evidence)

                    def mobile_case(page, checks, evidence):
                        plan_case(page, checks, evidence)
                        filter_case(page, checks, evidence)
                        focus_case(page, checks, evidence)
                        assert page.evaluate("document.documentElement.scrollWidth<=innerWidth+1")
                        checks.append("390px page has no horizontal viewport overflow")

                    journey(browser, channel + "-main-desktop", main_case)
                    journey(browser, channel + "-main-mobile", mobile_case, mobile=True)
                    journey(browser, channel + "-draft-focus-pagehide", draft_case)
                    journey(browser, channel + "-reset-current", reset_case)
                    if channel == "chrome":
                        journey(browser, channel + "-analysis-roundtrip", analysis_case)
                    a, legacy, c, ref = [config_at(baseline, n) for n in [101, 202, 303, 404]]
                    journey(browser, channel + "-legacy", restore_case(legacy, ref, {0: legacy}, 0), seed={"config": legacy, "reference": ref})
                    damaged = {"config": legacy, "reference": ref, "workspace": {"active": 1, "plans": [{"name": "保留一", "config": a}, {"name": "坏方案", "config": {"schema": SCHEMA, "slots": {"unknown": {}}}}, {"name": "保留三", "config": c}]}}
                    journey(browser, channel + "-damaged-plan", restore_case(legacy, ref, {0: a, 1: legacy, 2: c}, 1), seed=damaged)
                    malformed_workspace = {"config": legacy, "reference": ref, "workspace": ["invalid"]}
                    journey(browser, channel + "-damaged-workspace", restore_case(legacy, ref, {0: legacy}, 0), seed=malformed_workspace)
                    independent_reference = deepcopy(damaged)
                    independent_reference["reference"] = {"schema": SCHEMA, "slots": {"unknown": {}}}
                    independent_reference["workspace"]["active"] = 2
                    journey(browser, channel + "-damaged-reference", restore_case(c, None, {0: a, 2: c}, 2), seed=independent_reference)
                    independent_legacy = deepcopy(damaged)
                    independent_legacy["config"] = {"schema": "bad"}
                    independent_legacy["workspace"]["active"] = 2
                    journey(browser, channel + "-damaged-legacy", restore_case(c, ref, {0: a, 2: c}, 2), seed=independent_legacy)
                    journey(browser, channel + "-storage-denied", denied_case, denied=True)
                finally:
                    browser.close()
    finally:
        server.shutdown()
        server.server_close()
        (OUT / "report.json").write_text(json.dumps(results, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("Passed", len(results["passed"]), "failed", len(results["failed"]), flush=True)
    return bool(results["failed"])


if __name__ == "__main__":
    raise SystemExit(main())
