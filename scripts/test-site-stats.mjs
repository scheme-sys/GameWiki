#!/usr/bin/env node
// Mock only: Image.src is recorded locally; no request reaches the live provider.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { test } from 'node:test';

const source = fs.readFileSync(new URL('../assets/site-stats.js', import.meta.url), 'utf8');
const origin = 'https://scheme-sys.github.io/LCZ-GameWiki/';
const legacyOrigin = 'https://scheme-sys.github.io/GameWiki/';
const endpoint = 'https://www.hitwebcounter.com/counter/counter.php';
const counters = { pv: { page: '21522998', type: 'page' }, ip: { page: '21523000', type: 'ip' } };

function environment(href, options = {}) {
  const listeners = new Map(), windowListeners = new Map(), timers = new Map();
  const images = [], requests = [], draws = [], prohibited = [];
  const forbid = name => () => { prohibited.push(name); throw new Error('Unexpected ' + name); };
  function element(name) {
    let text = '';
    const node = {
      tagName: name.toUpperCase(), children: [], style: {}, dataset: {}, className: '',
      classList: { add() {} }, attributes: new Map(),
      get textContent() { return text; },
      set textContent(value) { text = value; this.children = []; },
      setAttribute(key, value) { this.attributes.set(key, String(value)); },
      getAttribute(key) { return this.attributes.get(key) ?? null; },
      append(...children) { this.children.push(...children); },
      replaceChildren(...children) { text = ''; this.children = children; },
      focus() { this.focused = true; },
    };
    if (name === 'canvas') {
      node.getContext = kind => {
        assert.equal(kind, '2d');
        return options.noCanvas ? null : {
          drawImage(image, ...args) { draws.push({ canvas: node, image, args }); },
          getImageData: forbid('pixel read'),
        };
      };
      node.toDataURL = forbid('pixel export');
      node.toBlob = forbid('pixel export');
    }
    return node;
  }
  const hosts = Array.from({ length: options.hostCount ?? 1 }, () => {
    const host = element('div'), nodes = new Map();
    let html = '';
    Object.defineProperty(host, 'innerHTML', {
      get() { return html; },
      set(value) {
        html = value;
        nodes.clear();
        for (const tag of ['details', 'summary']) if (new RegExp('<' + tag + '\\b').test(value)) nodes.set(tag, element(tag));
        for (const match of value.matchAll(/<(strong|p)\b[^>]*\b(data-stat-[\w-]+)[^>]*>([^<]*)<\/(?:strong|p)>/g)) {
          const node = element(match[1]);
          node.textContent = match[3];
          nodes.set('[' + match[2] + ']', node);
        }
      },
    });
    host.querySelector = selector => nodes.get(selector) ?? null;
    host.contains = target => target === host || [...nodes.values()].includes(target);
    host.nodes = nodes;
    return host;
  });
  class FakeImage {
    constructor() { this.naturalWidth = 0; this.naturalHeight = 0; images.push(this); }
    set src(value) { this.url = String(value); requests.push({ image: this, url: this.url }); }
    get src() { return this.url; }
  }
  const localStorage = { getItem: forbid('storage read'), setItem: forbid('storage write') };
  const context = {
    URL, URLSearchParams, Image: FakeImage, localStorage, fetch: forbid('fetch'),
    navigator: { onLine: options.online !== false },
    document: {
      visibilityState: options.hidden ? 'hidden' : 'visible', prerendering: options.prerender || false,
      get referrer() { return forbid('referrer read')(); },
      querySelectorAll() { return hosts; },
      createElement: element,
      createElementNS(namespace, name) { assert.equal(namespace, 'http://www.w3.org/2000/svg'); return element(name); },
      addEventListener(name, callback) { listeners.set(name, callback); },
    },
    window: {
      location: { href }, localStorage,
      addEventListener(name, callback) { windowListeners.set(name, callback); },
      setTimeout(callback, ms) { const id = timers.size + 1; timers.set(id, { callback, ms }); return id; },
      clearTimeout(id) { timers.delete(id); },
    },
  };
  context.window.top = options.child ? {} : context.window;
  if (options.parked) context.window.LCZSite = { parked: true };
  vm.createContext(context);
  const run = () => vm.runInContext(source, context);
  run();
  function imageFor(key) { return images.find(image => new URL(image.src).searchParams.get('page') === counters[key].page); }
  function load(key, width = 72, height = 14) {
    const image = imageFor(key);
    image.naturalWidth = width; image.naturalHeight = height;
    assert.equal(typeof image.onload, 'function', key + ' load handler');
    image.onload();
    return image;
  }
  function fail(key) { const image = imageFor(key); assert.equal(typeof image.onerror, 'function'); image.onerror(); }
  return { context, hosts, host: hosts[0], images, requests, draws, prohibited, listeners, windowListeners, timers, run, imageFor, load, fail };
}

function valueNode(env, key, short = false, host = env.host) { return host.querySelector(`[data-stat-${key}${short ? '-short' : ''}]`); }
function canvasFor(env, key, short = false, host = env.host) { return valueNode(env, key, short, host).children.find(node => node.tagName === 'CANVAS'); }
function repeatEvents(env) {
  env.windowListeners.get('online')();
  env.context.document.visibilityState = 'hidden'; env.listeners.get('visibilitychange')();
  env.context.document.visibilityState = 'visible'; env.listeners.get('visibilitychange')();
  env.listeners.get('prerenderingchange')();
  env.run();
}

test('two fixed image requests use separate PV/IP counters without page details, fetch or storage', () => {
  const env = environment(origin + 'index.html?q=private-query#private-hash');
  assert.equal(env.host.dataset.statsState, 'loading');
  assert.equal(env.requests.length, 2);
  for (const [key, expected] of Object.entries(counters)) {
    const image = env.imageFor(key), url = new URL(image.src);
    assert.equal(url.origin + url.pathname, endpoint);
    assert.deepEqual(Object.fromEntries(url.searchParams), { page: expected.page, style: '0007', nbdigits: '1', type: expected.type });
    assert.equal(image.referrerPolicy, 'no-referrer');
    assert.equal(image.crossOrigin, undefined);
    assert.ok(!image.src.includes('private'));
  }
  env.load('pv'); env.load('ip');
  assert.equal(env.host.dataset.statsState, 'ready');
  assert.equal(env.host.querySelector('[data-stat-note]').hidden, true);
  assert.equal(env.host.querySelector('[data-stat-note]').textContent, '');
  assert.match(env.host.innerHTML, /浏览量 PV/);
  assert.match(env.host.innerHTML, /IP访客/);
  assert.equal(env.host.querySelector('summary').getAttribute('title'), null);
  assert.deepEqual(env.prohibited, []);
});

test('each decoded image is drawn into every summary and panel without extra image requests', () => {
  const env = environment(origin, { hostCount: 2 });
  const filterIds = new Set();
  for (const key of ['pv', 'ip']) {
    const image = env.load(key, key === 'pv' ? 72 : 24, 14);
    for (const host of env.hosts) for (const short of [false, true]) {
      const canvas = canvasFor(env, key, short, host), target = valueNode(env, key, short, host);
      assert.ok(canvas);
      assert.equal(canvas.width, image.naturalWidth);
      assert.equal(canvas.height, image.naturalHeight);
      assert.equal(canvas.className, 'site-stats-counter');
      assert.equal(canvas.getAttribute('role'), 'img');
      assert.match(canvas.getAttribute('aria-label'), key === 'pv' ? /PV/ : /IP/);
      const draw = env.draws.find(item => item.canvas === canvas);
      assert.equal(draw.image, image);
      assert.deepEqual(draw.args, [0, 0]);
      const svg = target.children.find(node => node.tagName === 'SVG');
      const filter = svg.children[0].children[0], id = filter.getAttribute('id');
      assert.ok(!filterIds.has(id)); filterIds.add(id);
      assert.equal(canvas.style.filter, `url("#${id}")`);
      assert.ok(filter.children.some(node => node.tagName === 'FEFLOOD' && node.getAttribute('flood-color') === 'currentColor'));
      assert.equal(image.onload, null);
      assert.equal(image.onerror, null);
    }
  }
  assert.equal(env.draws.length, 8);
  assert.equal(env.requests.length, 2);
  assert.deepEqual(env.prohibited, []);
});

test('both deployment paths and every allowed page use the same two counter IDs', () => {
  const paths = ['', 'index.html', 'Craft%20of%20Survival/wiki.html', 'Day%20R%20Survival/wiki_dayR.html',
    'Westland%20Survival/westland_wiki.html', 'Westland%20Survival/westland_difficulty_design.html',
    'Westland%20Survival/westland_difficulty_analysis.html', 'Westland%20Survival/%E5%9F%BA%E5%9C%B0.html',
    'DawnofZombiewiki/', 'DawnofZombiewiki/index.html', 'LDOE_Wiki/', 'LDOE_Wiki/index.html', 'grimsoul_Wiki/', 'grimsoul_Wiki/index.html'];
  const expected = environment(origin).requests.map(request => request.url);
  for (const base of [origin, legacyOrigin]) for (const path of paths) {
    const env = environment(base + path + '?q=private#private');
    assert.deepEqual(env.requests.map(request => request.url), expected, base + path);
  }
});

test('local files, previews, other repositories and unknown paths never create counter images', () => {
  for (const url of [
    'file:///C:/GameWiki/index.html', 'http://localhost:4173/', 'http://127.0.0.1:4173/',
    'https://preview.example/LCZ-GameWiki/', 'https://scheme-sys.github.io/another-project/',
    'http://scheme-sys.github.io/LCZ-GameWiki/', 'http://scheme-sys.github.io/GameWiki/',
    'https://scheme-sys.github.io/GameWiki-other/', 'https://scheme-sys.github.io/LCZ-GameWiki-other/',
    'https://scheme-sys.github.io/another/GameWiki/', origin + '404.html', origin + '%zz',
    legacyOrigin + '404.html', legacyOrigin + '%zz', legacyOrigin + 'index.html/other',
    origin + 'LDOE_Wiki/unknown.html', origin + 'grimsoul_Wiki/unknown.html',
    'https://scheme-sys.github.io/LDOE_Wiki/', 'https://scheme-sys.github.io/grimsoul_Wiki/',
    origin + 'Westland%20Survival/westland_difficulty_analysis.html/other',
    origin + 'DawnofZombiewiki/unknown.html', 'https://scheme-sys.github.io/DawnofZombiewiki/',
  ]) {
    const env = environment(url);
    assert.equal(env.images.length, 0, url);
    assert.equal(env.host.dataset.statsState, 'preview', url);
    for (const key of ['pv', 'ip']) assert.equal(valueNode(env, key).textContent, '—');
    assert.deepEqual(env.prohibited, []);
  }
});

test('hidden and prerendered pages wait; visibility, online, duplicate scripts and disclosure do not repeat hits', () => {
  const env = environment(origin, { hidden: true, prerender: true });
  assert.equal(env.images.length, 0);
  env.context.document.visibilityState = 'visible'; env.listeners.get('visibilitychange')();
  assert.equal(env.images.length, 0);
  env.context.document.visibilityState = 'hidden';
  env.context.document.prerendering = false; env.listeners.get('prerenderingchange')();
  env.windowListeners.get('online')();
  assert.equal(env.images.length, 0);
  env.context.document.visibilityState = 'visible'; env.listeners.get('visibilitychange')();
  assert.equal(env.requests.length, 2);
  env.load('pv'); env.load('ip');
  repeatEvents(env);
  const details = env.host.querySelector('details');
  details.open = true;
  env.listeners.get('pointerdown')({ target: env.host.querySelector('summary') });
  assert.equal(details.open, true);
  env.listeners.get('pointerdown')({ target: {} });
  assert.equal(details.open, false);
  details.open = true; env.listeners.get('keydown')({ key: 'Escape' });
  assert.equal(details.open, false);
  assert.equal(env.host.querySelector('summary').focused, true);
  assert.equal(env.requests.length, 2);
});

test('initial offline state recovers on online, but a hidden document still waits for visibility', () => {
  for (const hidden of [false, true]) {
    const env = environment(origin, { online: false });
    assert.equal(env.images.length, 0);
    assert.equal(env.host.dataset.statsState, 'unavailable');
    env.context.document.visibilityState = hidden ? 'hidden' : 'visible';
    env.context.navigator.onLine = true; env.windowListeners.get('online')();
    assert.equal(env.images.length, hidden ? 0 : 2);
    env.context.document.visibilityState = 'visible'; env.listeners.get('visibilitychange')();
    assert.equal(env.requests.length, 2);
    env.load('pv'); env.load('ip');
    repeatEvents(env);
    assert.equal(env.host.dataset.statsState, 'ready');
    assert.equal(env.requests.length, 2);
  }
});

test('either successful metric remains visible when the other image fails, without retries', () => {
  for (const ready of ['pv', 'ip']) for (const failureFirst of [false, true]) {
    const env = environment(origin), failed = ready === 'pv' ? 'ip' : 'pv';
    if (failureFirst) env.fail(failed);
    env.load(ready);
    if (!failureFirst) {
      assert.equal(env.host.dataset.statsState, 'loading');
      env.fail(failed);
    }
    assert.equal(env.host.dataset.statsState, 'partial');
    const retained = canvasFor(env, ready);
    assert.ok(retained);
    assert.equal(valueNode(env, failed).textContent, '—');
    assert.equal(canvasFor(env, failed), undefined);
    assert.equal(env.host.querySelector('[data-stat-note]').hidden, false);
    repeatEvents(env);
    assert.equal(canvasFor(env, ready), retained);
    assert.equal(env.requests.length, 2);
  }
});

test('failed, empty or oversized images never invent digits or start replacement requests', () => {
  for (const dimensions of [null, [0, 14], [24, 0], [4097, 14], [24, 257]]) {
    const env = environment(origin);
    for (const key of ['pv', 'ip']) dimensions ? env.load(key, ...dimensions) : env.fail(key);
    assert.equal(env.host.dataset.statsState, 'unavailable');
    assert.equal(env.draws.length, 0);
    for (const key of ['pv', 'ip']) assert.equal(valueNode(env, key).textContent, '—');
    repeatEvents(env);
    assert.equal(env.requests.length, 2);
  }
  const noCanvas = environment(origin, { noCanvas: true });
  noCanvas.load('pv'); noCanvas.load('ip');
  assert.equal(noCanvas.host.dataset.statsState, 'unavailable');
  assert.equal(noCanvas.draws.length, 0);
});

test('slow image loads remain eligible to succeed without an arbitrary abort deadline', () => {
  const env = environment(origin);
  assert.equal(env.timers.size, 0);
  repeatEvents(env);
  assert.equal(env.host.dataset.statsState, 'loading');
  assert.equal(env.requests.length, 2);
  env.load('ip');
  assert.equal(env.host.dataset.statsState, 'loading');
  env.load('pv');
  assert.equal(env.host.dataset.statsState, 'ready');
  assert.equal(env.requests.length, 2);
});

test('music route restoration skips the parked outer document and counts its visible child only', () => {
  const outer = environment(origin + 'index.html?__lcz_page=grimsoul_Wiki%2Findex.html', { parked: true });
  assert.equal(outer.images.length, 0);
  const child = environment(origin + 'grimsoul_Wiki/index.html', { parked: true, child: true });
  assert.equal(child.requests.length, 2);
});
