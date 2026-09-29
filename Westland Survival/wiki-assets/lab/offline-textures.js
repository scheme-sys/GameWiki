/* Local files cannot be uploaded directly into WebGL on some browsers.
 * Only file:// opens the original data-URI texture archive; hosted pages use images.
 */
(() => {
  'use strict';
  const base = new URL('.', document.currentScript.src);
  let offlineReady;

  window.WestlandTextureURL = async uri => {
    if (location.protocol !== 'file:' || uri.startsWith('data:')) return uri;
    if (!offlineReady) {
      offlineReady = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = new URL('data/offline-textures.js', base).href;
        script.onload = () => {
          script.remove();
          if (window.WESTLAND_OFFLINE_TEXTURES) resolve(window.WESTLAND_OFFLINE_TEXTURES);
          else reject(new Error('Offline texture archive is incomplete'));
        };
        script.onerror = () => { script.remove(); reject(new Error('Offline textures could not be loaded')); };
        document.head.append(script);
      }).catch(error => { offlineReady = undefined; throw error; });
    }
    const textures = await offlineReady;
    if (!textures[uri]) throw new Error('Offline texture is missing: ' + uri);
    return textures[uri];
  };
})();
