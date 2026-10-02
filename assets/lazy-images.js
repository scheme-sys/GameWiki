/* Load catalog thumbnails only as their existing layout approaches the viewport. */
(() => {
  'use strict';
  const placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  const pending = new Set();
  const margin = 100;
  function reveal(img) {
    observer?.unobserve(img);
    pending.delete(img);
    const src = img.dataset.lazySrc;
    if (!src || !img.isConnected) return;
    delete img.dataset.lazySrc;
    img.loading = 'eager';
    img.src = src;
  }
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) reveal(entry.target);
  }, { rootMargin: margin + 'px' }) : null;

  function observe(scope = document) {
    for (const img of pending) if (!img.isConnected) {
      observer?.unobserve(img);
      pending.delete(img);
    }
    const visible = [];
    for (const img of scope.querySelectorAll('img[data-lazy-src]')) {
      if (pending.has(img)) continue;
      if (!observer) { visible.push(img); continue; }
      const rect = img.getBoundingClientRect();
      if (rect.width && rect.height && rect.bottom >= -margin && rect.top <= innerHeight + margin && rect.right >= -margin && rect.left <= innerWidth + margin) {
        visible.push(img);
      } else {
        pending.add(img);
        observer.observe(img);
      }
    }
    // Read layout once, then set sources together so first-screen images start immediately.
    visible.forEach(reveal);
  }
  window.LCZLazyImages = Object.freeze({ observe, placeholder });
})();
