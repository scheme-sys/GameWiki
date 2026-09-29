/* Small summaries boot the catalog; only requested pages and search text load. */
(() => {
  'use strict';
  const index = window.COS_WIKI_INDEX;
  if (!index || index.schema !== 1) return;
  const base = new URL('.', document.currentScript.src);
  const articles = index.rows.map(values => Object.fromEntries(index.columns.map((key, i) => [key, values[i]])));
  const byId = new Map(articles.map(row => [row.id, row]));
  const data = Object.fromEntries(['currencies', 'groupCounts', 'meta', 'typeCounts'].map(key => [key, index[key]]));
  data.articles = articles;
  const pending = new Map(), ready = new Set();
  let descriptions = null;
  function load(relative, validate) {
    if (pending.has(relative)) return pending.get(relative);
    const task = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      let ended = false;
      const finish = error => {
        if (ended) return;
        ended = true; clearTimeout(timer); script.onload = script.onerror = null; script.remove();
        if (error) reject(error); else resolve();
      };
      const timer = setTimeout(() => finish(new Error('资料加载超时，请重试。')), 15000);
      script.src = new URL(relative, base).href;
      script.onload = () => { if (ended) return; try { validate(); finish(); } catch (error) { finish(error); } };
      script.onerror = () => finish(new Error('资料暂时未能打开，请重试。'));
      document.head.append(script);
    }).catch(error => { pending.delete(relative); throw error; });
    pending.set(relative, task);
    return task;
  }
  async function hydrate(rows) {
    await Promise.all([...new Set(rows.map(row => row._block))].filter(key => !ready.has(key)).map(key => {
      const path = index.blocks[key];
      if (!path) throw new Error('资料目录不完整，请重新打开页面。');
      return load(path, () => {
        const block = window.COS_WIKI_BLOCKS?.[key];
        const expected = articles.filter(row => row._block === key);
        if (!Array.isArray(block) || block.length !== expected.length || new Set(block.map(row => row.id)).size !== expected.length) throw new Error('资料未完整载入，请重试。');
        for (const row of block) {
          const target = byId.get(row.id);
          if (!target || target._block !== key) throw new Error('资料版本不一致，请刷新页面。');
        }
        for (const row of block) Object.assign(byId.get(row.id), row);
        delete window.COS_WIKI_BLOCKS[key]; ready.add(key);
      });
    }));
  }
  async function searchText() {
    if (descriptions) return descriptions;
    await load(index.search, () => {
      const rows = window.COS_WIKI_SEARCH;
      if (!Array.isArray(rows) || rows.length !== articles.length || new Set(rows.map(row => row[0])).size !== articles.length || rows.some(row => !byId.has(row[0]))) throw new Error('搜索资料未完整载入，请重试。');
      descriptions = new Map(rows);
      delete window.COS_WIKI_SEARCH;
    });
    return descriptions;
  }
  window.COS_WIKI_RUNTIME = { data, hydrate, searchText };
  window.COS_WIKI_DATA = data;
})();
