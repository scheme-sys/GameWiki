#!/usr/bin/env node
// No live hit requests: exercise public/private URL boundaries and API failures.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { test } from 'node:test';

const source = fs.readFileSync(new URL('../assets/site-stats.js', import.meta.url), 'utf8');
const origin = 'https://scheme-sys.github.io/LCZ-GameWiki/';
const legacyOrigin = 'https://scheme-sys.github.io/GameWiki/';
const settle = async () => { for (let n = 0; n < 10; n++) await Promise.resolve(); };

function environment(href, options = {}) {
  const nodes = new Map();
  const listeners = new Map();
  const timers = new Map();
  const requests = [];
  let timerId = 0;
  const host = {
    classList: { add() {} }, dataset: {}, innerHTML: '',
    querySelector(selector) {
      if (!nodes.has(selector)) nodes.set(selector, { textContent: '', setAttribute(key, value) { this[key] = value; }, focus() {} });
      return nodes.get(selector);
    },
    contains() { return false; },
  };
  const context = {
    URL, Intl, AbortController,
    navigator: { onLine: options.online !== false },
    document: {
      visibilityState: options.hidden ? 'hidden' : 'visible', prerendering: options.prerender || false,
      querySelectorAll() { return [host]; },
      addEventListener(name, callback) { listeners.set(name, callback); },
    },
    window: {
      location: { href },
      setTimeout(callback) { timers.set(++timerId, callback); return timerId; },
      clearTimeout(id) { timers.delete(id); },
    },
    async fetch(url, init) {
      requests.push({ url, init });
      if (options.fetch) return options.fetch(url, init);
      return { ok: true, async json() { return { value: url.endsWith('_site') ? 1234 : '56' }; } };
    },
  };
  vm.createContext(context);
  const run = () => vm.runInContext(source, context);
  run();
  return { context, host, nodes, requests, listeners, timers, run };
}

test('production counts project and page once, without sending URL parameters or cookies', async () => {
  const env = environment(`${origin}index.html?q=private-query#private-hash`);
  await settle();
  assert.equal(env.requests.length, 2);
  assert.ok(env.requests[0].url.endsWith('scheme_sys_lcz_gamewiki_v1_site'));
  assert.ok(env.requests[1].url.endsWith('scheme_sys_lcz_gamewiki_v1_page_home'));
  for (const request of env.requests) {
    assert.ok(!request.url.includes('private'));
    assert.equal(request.init.referrerPolicy, 'no-referrer');
    assert.equal(request.init.credentials, 'omit');
    assert.equal(request.init.cache, 'no-store');
  }
  assert.equal(env.nodes.get('[data-stat-site]').textContent, '1,234');
  assert.equal(env.nodes.get('[data-stat-page]').textContent, '56');
  assert.equal(env.host.dataset.statsState, 'ready');
  env.run();
  env.listeners.get('visibilitychange')();
  await settle();
  assert.equal(env.requests.length, 2);
  assert.equal(env.timers.size, 0);
});

test('both project directories share all seven page counters and the unchanged project counter', async () => {
  const cases = new Map([
    ['', 'home'], ['index.html', 'home'],
    ['Craft%20of%20Survival/wiki.html', 'craft'],
    ['Day%20R%20Survival/wiki_dayR.html', 'dayr'],
    ['Westland%20Survival/westland_wiki.html', 'westland'],
    ['Westland%20Survival/westland_difficulty_design.html', 'westland_lab'],
    ['Westland%20Survival/%E5%9F%BA%E5%9C%B0.html', 'westland_base'],
    ['DawnofZombiewiki/', 'dawn'],
    ['DawnofZombiewiki/index.html', 'dawn'],
  ]);
  for (const [path, key] of cases) {
    const endpoints = [];
    for (const base of [origin, legacyOrigin]) {
      const env = environment(base + path + '?q=private-query#private-hash');
      await settle();
      assert.equal(env.requests.length, 2, base + path);
      assert.equal(env.host.dataset.statsState, 'ready', base + path);
      assert.ok(env.requests[0].url.endsWith('scheme_sys_lcz_gamewiki_v1_site'), base + path);
      assert.ok(env.requests[1].url.endsWith(`scheme_sys_lcz_gamewiki_v1_page_${key}`), base + path);
      for (const request of env.requests) {
        assert.ok(!request.url.includes('private'));
        assert.equal(request.init.referrerPolicy, 'no-referrer');
        assert.equal(request.init.credentials, 'omit');
      }
      endpoints.push(env.requests.map((request) => request.url));
    }
    assert.deepEqual(endpoints[0], endpoints[1], `Both deployment names must use the same counters for ${path}`);
  }
});

test('local files, previews, other repositories and unknown paths never send hits', async () => {
  for (const url of [
    'file:///C:/GameWiki/index.html', 'http://localhost:4173/', 'http://127.0.0.1:4173/',
    'https://scheme-sys.github.io/another-project/', 'http://scheme-sys.github.io/LCZ-GameWiki/',
    'https://preview.example/LCZ-GameWiki/', 'https://preview.example/GameWiki/',
    'http://scheme-sys.github.io/GameWiki/', 'https://scheme-sys.github.io/GameWiki-other/',
    'https://scheme-sys.github.io/LCZ-GameWiki-other/', 'https://scheme-sys.github.io/another/GameWiki/',
    `${origin}404.html`, `${origin}%zz`, `${legacyOrigin}404.html`, `${legacyOrigin}%zz`,
    `${legacyOrigin}index.html/other`, `${legacyOrigin}Craft%20of%20Survival/unknown.html`,
    `${origin}DawnofZombiewiki/unknown.html`, 'https://scheme-sys.github.io/DawnofZombiewiki/',
  ]) {
    const env = environment(url);
    await settle();
    assert.equal(env.requests.length, 0, url);
    assert.equal(env.host.dataset.statsState, 'preview', url);
  }
});

test('hidden and prerendered pages wait for their first actual visible visit', async () => {
  const env = environment(origin, { hidden: true, prerender: true });
  await settle();
  assert.equal(env.requests.length, 0);
  env.context.document.prerendering = false;
  env.listeners.get('prerenderingchange')();
  assert.equal(env.requests.length, 0);
  env.context.document.visibilityState = 'visible';
  env.listeners.get('visibilitychange')();
  await settle();
  assert.equal(env.requests.length, 2);
});

test('offline mode and failed/invalid responses never invent counts or retry increments', async () => {
  const offline = environment(origin, { online: false });
  assert.equal(offline.requests.length, 0);
  assert.equal(offline.host.dataset.statsState, 'unavailable');
  for (const value of [null, false, '', -1, 1.5, '1e5', '<script>', Number.MAX_SAFE_INTEGER + 1]) {
    const env = environment(origin, { fetch: async () => ({ ok: true, json: async () => ({ value }) }) });
    await settle();
    assert.equal(env.host.dataset.statsState, 'unavailable');
    assert.equal(env.nodes.get('[data-stat-site]').textContent, '—');
    assert.equal(env.nodes.get('[data-stat-page]').textContent, '—');
    assert.equal(env.requests.length, 2);
  }
  for (const fetch of [async () => { throw new Error('offline'); }, async () => ({ ok: false })]) {
    const env = environment(origin, { fetch });
    await settle();
    assert.equal(env.host.dataset.statsState, 'unavailable');
    assert.equal(env.requests.length, 2);
    assert.equal(env.timers.size, 0);
  }
});

test('partial failure retains successful public count and timeouts do not retry', async () => {
  const env = environment(origin, { fetch: async (url, { signal }) => {
    if (url.endsWith('_site')) return { ok: true, json: async () => ({ value: 12 }) };
    return new Promise((_, reject) => signal.addEventListener('abort', () => reject(new Error('timeout'))));
  } });
  await settle();
  for (const callback of env.timers.values()) callback();
  await settle();
  assert.equal(env.nodes.get('[data-stat-site]').textContent, '12');
  assert.equal(env.nodes.get('[data-stat-page]').textContent, '—');
  assert.equal(env.host.dataset.statsState, 'unavailable');
  assert.equal(env.requests.length, 2);
});
