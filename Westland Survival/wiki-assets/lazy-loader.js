/* Same-folder classic scripts work on Pages and when the archive is opened locally. */
(() => {
  'use strict';
  const base = new URL('.', document.currentScript.src);
  const pending = new Map();
  function url(path) {
    const versioned = window.WESTLAND_RESOURCES?.files?.[path];
    if (typeof versioned !== 'string' || !/^[a-z0-9_/-]+\.js\?v=[a-f0-9]{64}$/.test(versioned) || versioned.split('?')[0] !== path) {
      throw new Error('Unregistered local resource');
    }
    return new URL(versioned, base).href;
  }
  function load(path) {
    if (!pending.has(path)) {
      const task = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url(path);
        let settled = false;
        const finish = error => {
          if (settled) return;
          settled = true;
          clearTimeout(timeout);
          script.onload = script.onerror = null;
          script.remove();
          if (error) reject(error); else resolve();
        };
        const wait = path === 'lab/data/avatar-meshes.js' || path === 'lab/data/offline-textures.js' ? 180000 : 30000;
        const timeout = setTimeout(() => finish(new Error('Local resource timed out: ' + path)), wait);
        script.onload = () => finish();
        script.onerror = () => finish(new Error('Local resource could not be loaded: ' + path));
        document.head.append(script);
      }).catch(error => { pending.delete(path); throw error; });
      pending.set(path, task);
    }
    return pending.get(path);
  }
  window.WestlandAssets = Object.freeze({load, url});
})();