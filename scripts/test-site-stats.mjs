#!/usr/bin/env node
// Mock only: no requests reach the live statistics provider.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { test } from 'node:test';

const source = fs.readFileSync(new URL('../assets/site-stats.js', import.meta.url), 'utf8');
const origin = 'https://scheme-sys.github.io/LCZ-GameWiki/';
const legacyOrigin = 'https://scheme-sys.github.io/GameWiki/';
const endpoint = 'https://cdn.busuanzi.cc/api.php';
const settle = async () => { for (let n = 0; n < 12; n++) await Promise.resolve(); };

function environment(href, options = {}) {
  const nodes = new Map(), listeners = new Map(), timers = new Map(), requests = [], durations = [];
  let timerId = 0;
  const host = {
    classList: { add() {} }, dataset: {}, innerHTML: '',
    querySelector(selector) {
      if (!nodes.has(selector)) nodes.set(selector, { textContent: '', setAttribute(key, value) { this[key] = value; }, focus() { this.focused = true; } });
      return nodes.get(selector);
    },
    contains() { return false; },
  };
  const context = {
    URL, Intl, AbortController,
    navigator: { onLine: options.online !== false },
    document: {
      visibilityState: options.hidden ? 'hidden' : 'visible', prerendering: options.prerender || false,
      get referrer() { throw new Error('The real referrer must not be read'); },
      querySelectorAll() { return [host]; },
      addEventListener(name, callback) { listeners.set(name, callback); },
    },
    window: {
      location: { href },
      setTimeout(callback, ms) { durations.push(ms); timers.set(++timerId, callback); return timerId; },
      clearTimeout(id) { timers.delete(id); },
    },
    async fetch(url, init) {
      requests.push({ url, init });
      if (options.fetch) return options.fetch(url, init);
      return { ok: true, async json() {
        return { busuanzi_page_pv: 1234, busuanzi_page_uv: '56', busuanzi_site_pv: 9999999, busuanzi_site_uv: 88888 };
      } };
    },
  };
  vm.createContext(context);
  const run = () => vm.runInContext(source, context);
  run();
  return { context, host, nodes, requests, listeners, timers, durations, run };
}

test('one POST sends only the fixed project namespace; separate PV/IP fields ignore hostname totals', async () => {
  const env = environment(origin + 'index.html?q=private-query#private-hash');
  await settle();
  assert.equal(env.requests.length, 1);
  const request = env.requests[0];
  assert.equal(request.url, endpoint);
  assert.equal(request.init.method, 'POST');
  assert.deepEqual(JSON.parse(request.init.body), { url: origin, referrer: '' });
  assert.equal(request.init.referrerPolicy, 'no-referrer');
  assert.equal(request.init.credentials, 'omit');
  assert.equal(request.init.cache, 'no-store');
  assert.equal(request.init.mode, 'cors');
  assert.ok(!request.init.body.includes('private'));
  assert.equal(env.nodes.get('[data-stat-pv]').textContent, '1,234');
  assert.equal(env.nodes.get('[data-stat-ip]').textContent, '56');
  assert.equal(env.host.dataset.statsState, 'ready');
  assert.match(env.host.innerHTML, /浏览量 PV/);
  assert.match(env.host.innerHTML, /IP访客/);
  assert.match(env.nodes.get('[data-stat-note]').textContent, /不等于真实人数.*周期/);
  assert.equal(env.nodes.get('summary').title, undefined);
  assert.match(env.nodes.get('summary')['data-tooltip'], /PV.*IP/);
  assert.deepEqual(env.durations, [7000]);
  assert.equal(env.timers.size, 0);
});

test('both deployment paths and all eight pages share the same single canonical project request', async () => {
  const paths = [
    '', 'index.html', 'Craft%20of%20Survival/wiki.html', 'Day%20R%20Survival/wiki_dayR.html',
    'Westland%20Survival/westland_wiki.html', 'Westland%20Survival/westland_difficulty_design.html',
    'Westland%20Survival/%E5%9F%BA%E5%9C%B0.html', 'DawnofZombiewiki/', 'DawnofZombiewiki/index.html', 'LDOE_Wiki/', 'LDOE_Wiki/index.html',
  ];
  for (const base of [origin, legacyOrigin]) for (const path of paths) {
    const env = environment(base + path + '?q=private-query#private-hash');
    await settle();
    assert.equal(env.requests.length, 1, base + path);
    assert.equal(env.host.dataset.statsState, 'ready', base + path);
    assert.equal(env.requests[0].url, endpoint);
    assert.deepEqual(JSON.parse(env.requests[0].init.body), { url: origin, referrer: '' });
  }
});

test('local files, previews, other repositories and unknown paths never send hits', async () => {
  for (const url of [
    'file:///C:/GameWiki/index.html', 'http://localhost:4173/', 'http://127.0.0.1:4173/',
    'https://scheme-sys.github.io/another-project/', 'http://scheme-sys.github.io/LCZ-GameWiki/',
    'https://preview.example/LCZ-GameWiki/', 'https://preview.example/GameWiki/',
    'http://scheme-sys.github.io/GameWiki/', 'https://scheme-sys.github.io/GameWiki-other/',
    'https://scheme-sys.github.io/LCZ-GameWiki-other/', 'https://scheme-sys.github.io/another/GameWiki/',
    origin + '404.html', origin + '%zz', legacyOrigin + '404.html', legacyOrigin + '%zz',
    legacyOrigin + 'index.html/other', legacyOrigin + 'Craft%20of%20Survival/unknown.html',
    origin + 'LDOE_Wiki/unknown.html', 'https://scheme-sys.github.io/LDOE_Wiki/',
    origin + 'DawnofZombiewiki/unknown.html', 'https://scheme-sys.github.io/DawnofZombiewiki/',
  ]) {
    const env = environment(url);
    await settle();
    assert.equal(env.requests.length, 0, url);
    assert.equal(env.host.dataset.statsState, 'preview', url);
    assert.equal(env.nodes.get('[data-stat-pv]').textContent, '—');
    assert.equal(env.nodes.get('[data-stat-ip]').textContent, '—');
  }
});

test('hidden/prerendered pages wait for visibility; duplicate execution and BFCache visibility do not count twice', async () => {
  const env = environment(origin, { hidden: true, prerender: true });
  await settle();
  assert.equal(env.requests.length, 0);
  env.context.document.prerendering = false;
  env.listeners.get('prerenderingchange')();
  assert.equal(env.requests.length, 0);
  env.context.document.visibilityState = 'visible';
  env.listeners.get('visibilitychange')();
  await settle();
  assert.equal(env.requests.length, 1);
  env.run();
  env.context.document.visibilityState = 'hidden';
  env.listeners.get('visibilitychange')();
  env.context.document.visibilityState = 'visible';
  env.listeners.get('visibilitychange')();
  env.listeners.get('prerenderingchange')();
  await settle();
  assert.equal(env.requests.length, 1);
});

test('both metrics validate independently; missing, malformed and domain-only responses show placeholders', async () => {
  for (const field of ['busuanzi_page_pv', 'busuanzi_page_uv']) {
    for (const value of [null, undefined, false, '', -1, 1.5, '1e5', '<script>', Number.MAX_SAFE_INTEGER + 1]) {
      const data = { busuanzi_page_pv: 12, busuanzi_page_uv: 3, [field]: value };
      const env = environment(origin, { fetch: async () => ({ ok: true, json: async () => data }) });
      await settle();
      assert.equal(env.host.dataset.statsState, 'unavailable', field + '=' + String(value));
      assert.equal(env.nodes.get('[data-stat-pv]').textContent, '—');
      assert.equal(env.nodes.get('[data-stat-ip]').textContent, '—');
      assert.equal(env.requests.length, 1);
      assert.equal(env.timers.size, 0);
    }
  }
  for (const data of [null, {}, { busuanzi_site_pv: 123, busuanzi_site_uv: 45 }]) {
    const env = environment(origin, { fetch: async () => ({ ok: true, json: async () => data }) });
    await settle();
    assert.equal(env.host.dataset.statsState, 'unavailable');
  }
});

test('zero counts are valid and retain separate PV and IP labels', async () => {
  const env = environment(origin, { fetch: async () => ({ ok: true, json: async () => ({ busuanzi_page_pv: 0, busuanzi_page_uv: '0' }) }) });
  await settle();
  assert.equal(env.host.dataset.statsState, 'ready');
  for (const selector of ['[data-stat-pv]', '[data-stat-ip]', '[data-stat-pv-short]', '[data-stat-ip-short]']) {
    assert.equal(env.nodes.get(selector).textContent, '0');
  }
});

test('offline, HTTP, JSON and network failure never invent values or retry a hit', async () => {
  const offline = environment(origin, { online: false });
  assert.equal(offline.requests.length, 0);
  assert.equal(offline.host.dataset.statsState, 'unavailable');
  for (const fetch of [
    async () => { throw new Error('offline'); },
    async () => ({ ok: false }),
    async () => ({ ok: true, json: async () => { throw new Error('malformed JSON'); } }),
  ]) {
    const env = environment(origin, { fetch });
    await settle();
    assert.equal(env.host.dataset.statsState, 'unavailable');
    assert.equal(env.nodes.get('[data-stat-pv]').textContent, '—');
    assert.equal(env.nodes.get('[data-stat-ip]').textContent, '—');
    env.listeners.get('visibilitychange')();
    await settle();
    assert.equal(env.requests.length, 1);
    assert.equal(env.timers.size, 0);
  }
});

test('seven-second timeout aborts without retrying or leaving timers behind', async () => {
  const env = environment(origin, { fetch: async (_, { signal }) =>
    new Promise((_, reject) => signal.addEventListener('abort', () => reject(new Error('timeout')))),
  });
  await settle();
  assert.equal(env.host.dataset.statsState, 'loading');
  assert.deepEqual(env.durations, [7000]);
  for (const callback of env.timers.values()) callback();
  await settle();
  assert.equal(env.host.dataset.statsState, 'unavailable');
  assert.equal(env.timers.size, 0);
  env.listeners.get('visibilitychange')();
  await settle();
  assert.equal(env.requests.length, 1);
});

test('native details still closes on outside pointer and Escape, returning keyboard focus', async () => {
  const env = environment(origin);
  await settle();
  const details = env.host.querySelector('details');
  details.open = true;
  env.listeners.get('pointerdown')({ target: {} });
  assert.equal(details.open, false);
  details.open = true;
  env.listeners.get('keydown')({ key: 'Escape' });
  assert.equal(details.open, false);
  assert.equal(env.nodes.get('summary').focused, true);
});
