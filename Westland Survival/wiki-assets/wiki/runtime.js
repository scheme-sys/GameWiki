/* Lazy archive loader. Classic scripts and local image paths also work on file://. */
'use strict';
(() => {
  const assetBase = new URL('.', document.currentScript.src);
  const pageBase = new URL('../../', assetBase);
  const chunkPromises = new Map();
  const loadedRecords = new WeakSet();
  const observedImages = new Set();
  const imageKeys = new Set();
  const statistics = { decodedChunks: 0, decodedImages: 0, detailRequests: 0 };
  const yieldFrame = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));

  function loadScript(relative) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = new URL(relative, assetBase).href;
      script.onload = () => { script.remove(); resolve(); };
      script.onerror = () => { script.remove(); reject(new Error('Archive resource unavailable: ' + relative)); };
      document.head.append(script);
    });
  }

  function loadChunk(id) {
    if (!/^wiki-chunk-[a-z0-9_-]+$/.test(id)) return Promise.reject(new Error('Invalid archive block'));
    if (!chunkPromises.has(id)) {
      const task = loadScript('data/chunks/' + id.slice('wiki-chunk-'.length) + '.js')
        .then(() => {
          const block = window.WIKI_CHUNKS?.[id];
          if (!Array.isArray(block?.records)) throw new Error('Archive block is incomplete: ' + id);
          statistics.decodedChunks++;
          const records = new Map(block.records.map(row => [row.item_id || row.id, row]));
          delete window.WIKI_CHUNKS[id];
          return records;
        })
        .catch(error => { chunkPromises.delete(id); throw error; });
      chunkPromises.set(id, task);
    }
    return chunkPromises.get(id);
  }

  async function fullRecord(record) {
    if (!record || !record._chunk || loadedRecords.has(record)) return record;
    const block = await loadChunk(record._chunk);
    const full = block.get(record.item_id || record.id);
    if (!full) throw new Error('Entry is absent from its archive block');
    Object.assign(record, full);
    loadedRecords.add(record);
    return record;
  }

  async function hydrate(record) {
    statistics.detailRequests++;
    const equipment = record._kind === 'item'
      ? window.WIKI_DB.equipment.find(item => item.item_id === (record.equipment_id || record.id))
      : null;
    await Promise.all([fullRecord(record), fullRecord(equipment)]);
    if (equipment?.numeric) record.numeric = equipment.numeric;
    return record;
  }

  function imageURL(key) {
    const path = window.WIKI_IMAGE_PATHS?.[key];
    if (!path) return Promise.reject(new Error('Archive image is missing: ' + key));
    if (!imageKeys.has(key)) { imageKeys.add(key); statistics.decodedImages++; }
    return Promise.resolve(new URL(path, pageBase).href);
  }

  async function loadImage(img) {
    if (img.dataset.imageReady === 'true' || img.dataset.imageLoading === 'true') return;
    img.dataset.imageLoading = 'true';
    try {
      const url = await imageURL(img.dataset.wikiImage);
      if (!img.isConnected) return;
      img.src = url;
      await img.decode();
      img.dataset.imageReady = 'true';
    } catch {
      img.dataset.imageReady = 'error';
      img.classList.add('image-load-error');
    } finally {
      delete img.dataset.imageLoading;
    }
  }

  const visibility = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      visibility.unobserve(entry.target);
      observedImages.delete(entry.target);
      loadImage(entry.target);
    }
  }, { rootMargin: '100px' }) : null;

  function observeImages(scope = document) {
    for (const img of observedImages) if (!img.isConnected) {
      visibility?.unobserve(img);
      observedImages.delete(img);
    }
    for (const img of scope.querySelectorAll('img[data-wiki-image]:not([data-image-observed])')) {
      img.dataset.imageObserved = 'true';
      if (visibility) { observedImages.add(img); visibility.observe(img); }
      else loadImage(img);
    }
  }

  window.WIKI_RUNTIME = { hydrate, observeImages, loadImage, imageURL, statistics, yieldFrame };

  async function start() {
    performance.mark('wiki-bootstrap-start');
    try {
      if (!window.WIKI_DB || !window.WIKI_IMAGE_PATHS) throw new Error('Archive index is missing');
      performance.mark('wiki-index-ready');
      await yieldFrame();
      await loadScript('app.js');
      if (!document.querySelector('.item-card')) throw new Error('Initial catalog render failed');
      document.body.removeAttribute('data-loading');
      performance.mark('wiki-catalog-ready');
    } catch (error) {
      document.body.removeAttribute('data-loading');
      document.getElementById('view').innerHTML = '<div class="empty"><h3>图鉴暂时未能打开</h3><p>请确认页面与 wiki-assets 文件夹完整保存在同一目录，然后重新加载。</p><button id="reloadWiki">重新加载</button></div>';
      document.getElementById('reloadWiki').onclick = () => location.reload();
      document.getElementById('resultCount').textContent = '加载未完成';
      console.error('Wiki startup failed', error);
    }
  }

  start();
})();
