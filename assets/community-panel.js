/* Shared, lazy QR panel for Wiki pages and the fallback page. */
(() => {
  'use strict';
  const triggers = [...document.querySelectorAll('[data-lcz-community]')];
  if (!triggers.length || !window.HTMLDialogElement ||
      typeof HTMLDialogElement.prototype.showModal !== 'function') return;
  let dialog, image, status, retry, state, returnFocus, source;

  function loadImage() {
    if (image.hasAttribute('src')) return;
    dialog.dataset.qrState = 'loading';
    status.textContent = '正在加载二维码…';
    state.hidden = false;
    retry.hidden = true;
    image.src = source;
  }
  function createPanel() {
    dialog = document.createElement('dialog');
    dialog.id = 'lcz-community-dialog';
    dialog.className = 'lcz-community-dialog';
    dialog.setAttribute('aria-labelledby', 'lcz-community-title');
    dialog.innerHTML = '<header class="lcz-community-heading"><div><p class="lcz-community-eyebrow">LCZ · 玩家交流群</p><h2 id="lcz-community-title">QQ：1067536816</h2></div><button class="lcz-community-close" type="button" data-lcz-close aria-label="关闭QQ群二维码" autofocus>×</button></header><div class="lcz-community-image"><img data-lcz-qr alt="QQ群1067536816的加群二维码" width="1284" height="2283" decoding="async"><div data-lcz-state><p data-lcz-status role="status" aria-live="polite"></p><button type="button" data-lcz-retry hidden>重新加载</button></div></div><a data-lcz-download download="LCZ-QQ群1067536816.jpg">保存二维码原图</a>';
    image = dialog.querySelector('[data-lcz-qr]');
    status = dialog.querySelector('[data-lcz-status]');
    retry = dialog.querySelector('[data-lcz-retry]');
    state = dialog.querySelector('[data-lcz-state]');
    dialog.querySelector('[data-lcz-download]').href = source;
    image.addEventListener('load', () => {
      dialog.dataset.qrState = 'ready';
      status.textContent = '二维码已加载';
      state.hidden = true;
    });
    image.addEventListener('error', () => {
      dialog.dataset.qrState = 'error';
      image.removeAttribute('src');
      status.textContent = '二维码暂时无法加载';
      state.hidden = false;
      retry.hidden = false;
    });
    retry.addEventListener('click', loadImage);
    dialog.querySelector('[data-lcz-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const box = dialog.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
    });
    dialog.addEventListener('keydown', event => {
      event.stopPropagation();
      if (event.key === 'Escape') { event.preventDefault(); dialog.close(); }
    });
    dialog.addEventListener('close', () => {
      if (dialog.open) return; // Ignore a queued close event after immediate reopening.
      document.body.classList.remove('lcz-community-open');
      returnFocus?.setAttribute('aria-expanded', 'false');
      returnFocus?.focus({ preventScroll: true });
    });
    document.body.append(dialog);
  }
  for (const trigger of triggers) {
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', 'lcz-community-dialog');
    trigger.addEventListener('click', event => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
      event.preventDefault();
      if (dialog?.open) return;
      source = trigger.href;
      if (!dialog) createPanel();
      returnFocus = trigger;
      trigger.setAttribute('aria-expanded', 'true');
      document.body.classList.add('lcz-community-open');
      dialog.showModal();
      loadImage();
    });
  }
})();
