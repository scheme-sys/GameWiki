/* Same-origin script shards work on GitHub Pages and when opened directly with file://. */
(() => {
  'use strict';
  const boot = window.GRIM_BOOTSTRAP;
  if (!boot) return;
  const base = new URL('.', document.currentScript.src);
  const parts = window.GRIM_PARTS = Object.create(null);
  const pending = new Map(), complete = new Set();
  const records = new Map(boot.home.map(row => [row.id, row]));
  const known = id => typeof id === 'string' && Object.hasOwn(boot.lookup, id);
  function load(key) {
    if (Object.hasOwn(parts, key)) return Promise.resolve(parts[key]);
    if (pending.has(key)) return pending.get(key);
    if (!Object.hasOwn(boot.manifest, key)) return Promise.reject(new Error('所需资料暂不可用'));
    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      let settled = false, timer;
      const finish = error => {
        if (settled) return;
        settled = true; clearTimeout(timer); script.remove(); pending.delete(key);
        error ? reject(error) : resolve(parts[key]);
      };
      script.src = new URL(boot.manifest[key], base).href;
      script.onload = () => finish(Object.hasOwn(parts, key) ? null : new Error('资料加载失败，请重试'));
      script.onerror = () => finish(new Error('资料加载失败，请重试'));
      timer = setTimeout(() => finish(new Error('资料加载失败，请重试')), 15000);
      document.head.append(script);
    });
    pending.set(key, promise);
    return promise;
  }
  function merge(rows, full = false) {
    for (const row of rows) {
      if (full || !complete.has(row.id)) records.set(row.id, row);
      if (full) complete.add(row.id);
    }
    return rows.map(row => records.get(row.id));
  }
  const bucket = id => Math.floor(boot.lookup[id] / boot.detailSpan);
  async function entry(id) {
    if (!known(id)) return null;
    if (!complete.has(id)) merge(await load('details-' + bucket(id)), true);
    return records.get(id);
  }
  async function summaries(ids) {
    const wanted = [...new Set(ids)].filter(known);
    const keys = [...new Set(wanted.filter(id => !records.has(id)).map(id => 'summaries-' + bucket(id)))];
    await Promise.all(keys.map(async key => merge(await load(key))));
    return wanted.map(id => records.get(id));
  }
  async function category(key) { return merge(await load('category-' + key)); }
  window.GRIM_DATA = {
    boot, records, known, category, entry, summaries,
    all: async () => (await Promise.all(Object.keys(boot.counts).map(category))).flat().sort((a, b) => boot.lookup[a.id] - boot.lookup[b.id]),
    entries: ids => Promise.all([...new Set(ids)].filter(known).map(entry)),
    search: () => load('search'),
    loaded: () => Object.keys(parts)
  };
})();
