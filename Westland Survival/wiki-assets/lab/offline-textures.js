/* Local files cannot be uploaded directly into WebGL on some browsers.
 * Only file:// opens the original data-URI texture archive; hosted pages use images.
 */
(() => {
  'use strict';
  let offlineReady;

  window.WestlandTextureURL = async uri => {
    if (location.protocol !== 'file:' || uri.startsWith('data:')) return uri;
    if (!offlineReady) {
      offlineReady = window.WestlandAssets.load('lab/data/offline-textures.js').then(() => {
        if (!window.WESTLAND_OFFLINE_TEXTURES) throw new Error('Offline texture archive is incomplete');
        return window.WESTLAND_OFFLINE_TEXTURES;
      }).catch(error => { offlineReady = undefined; throw error; });
    }
    const textures = await offlineReady;
    if (!textures[uri]) throw new Error('Offline texture is missing: ' + uri);
    return textures[uri];
  };
})();
