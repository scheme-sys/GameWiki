import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../assets/entity-code.js', import.meta.url), 'utf8');
function component(clipboard) {
  let listener;
  const sandbox = {
    window: {isSecureContext:true},
    document: {addEventListener(type, handler, capture) {
      assert.equal(type, 'click');
      assert.equal(capture, true);
      listener = handler;
    }},
    navigator: {clipboard},
    setTimeout: () => 1,
    clearTimeout() {},
  };
  vm.runInNewContext(source, sandbox);
  return {render:sandbox.window.LCZEntityCode.render, click:(event) => listener(event)};
}

test('Game keys preserve meaningful whitespace and escape markup and attribute delimiters', () => {
  const {render} = component();
  const html = render(' broken_bicycle ');
  assert.ok(html.includes('data-entity-copy=" broken_bicycle "'));
  assert.ok(html.includes('> broken_bicycle </code>'));
  const quoted = render('weapon_hunter\'s_"sword"<&>');
  assert.ok(quoted.includes('data-entity-copy="weapon_hunter&#39;s_&quot;sword&quot;&lt;&amp;&gt;"'));
  assert.ok(!quoted.includes('<&>'));
  const malicious = render('<img src=x onerror=alert(1)>', {label:'"<script>'});
  assert.ok(!malicious.includes('<img'));
  assert.ok(!malicious.includes('<script>'));
});

test('Empty or invalid values never masquerade as entity identifiers; zero remains valid', () => {
  const {render} = component();
  for (const value of [null, undefined, '', '   ', {}, NaN, Infinity, false, []]) assert.equal(render(value), '');
  assert.ok(render(0).includes('data-entity-copy="0"'));
});

test('Merged entities keep all distinct original keys in an expandable code list', () => {
  const {render} = component();
  const html = render(['sword_1', 'sword_1', 'sword_2', ' sword_2']);
  assert.equal((html.match(/data-entity-copy=/g) || []).length, 3);
  assert.ok(html.includes('其他 2 个代码'));
  assert.ok(html.includes('data-entity-copy=" sword_2"'));
});

test('Static metadata avoids nested interactive controls and supports precise code labels', () => {
  const {render} = component();
  const html = render(['recipe_a', 'recipe_b'], {copy:false, label:'配方代码'});
  assert.ok(html.includes('配方代码'));
  assert.ok(!/<button|<details|<summary/.test(html));
});

test('Copy preserves the exact key and prevents a surrounding card from opening', async () => {
  let copied;
  const {click} = component({writeText:async value => {copied=value;}});
  const status = {};
  const row = {dataset:{}, querySelector:() => status};
  const button = {
    dataset:{entityCopy:' broken_bicycle ',entityLabel:'实体代码'},
    isConnected:true,
    closest:selector => selector === '.lcz-entity-code' ? row : null,
  };
  const event = {
    target:{nodeType:1,closest:selector => selector === '[data-entity-copy]' ? button : null},
    preventDefault(){this.prevented=true;},
    stopImmediatePropagation(){this.stopped=true;},
  };
  await click(event);
  assert.equal(copied, ' broken_bicycle ');
  assert.equal(event.prevented, true);
  assert.equal(event.stopped, true);
  assert.equal(row.dataset.copyState, 'copied');
  assert.equal(status.textContent, '实体代码已复制');
  assert.equal(button.dataset.copying, undefined);
});

test('Opening additional variant codes does not trigger a card navigation', async () => {
  const {click} = component();
  const details = {open:false};
  const summary = {parentElement:details};
  const event = {
    target:{nodeType:1,closest:selector => selector.includes('summary') ? summary : null},
    preventDefault(){this.prevented=true;},
    stopImmediatePropagation(){this.stopped=true;},
  };
  await click(event);
  assert.equal(details.open, true);
  assert.equal(event.prevented, true);
  assert.equal(event.stopped, true);
});
