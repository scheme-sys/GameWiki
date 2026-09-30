/* Player-facing identifiers: keep original spelling and whitespace when copying. */
(() => {
  'use strict';
  const escape = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const copyIcon = '<svg class="lcz-entity-code__copy-icon" viewBox="0 0 20 20" aria-hidden="true"><rect x="7" y="7" width="9" height="10" rx="1.5"/><path d="M12 7V3H3v10h4"/></svg>';
  const doneIcon = '<svg class="lcz-entity-code__done-icon" viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9"/></svg>';
  const timers = new WeakMap();

  function normalize(value) {
    const values = Array.isArray(value) ? value : [value];
    return [...new Set(values.filter(code =>
      (typeof code === 'string' && code.trim().length > 0) ||
      (typeof code === 'number' && Number.isFinite(code))
    ).map(String))];
  }

  function render(value, options = {}) {
    const values = normalize(value);
    if (!values.length) return '';
    const label = typeof options.label === 'string' && options.label ? options.label : '实体代码';
    const row = code => '<div class="lcz-entity-code">' +
      '<span class="lcz-entity-code__label">' + escape(label) + '</span>' +
      '<code class="lcz-entity-code__value" dir="ltr" title="' + escape(code) + '">' + escape(code) + '</code>' +
      (options.copy === false ? '' : '<button type="button" class="lcz-entity-code__copy" data-entity-copy="' + escape(code) + '" data-entity-label="' + escape(label) + '" aria-label="' + escape('复制' + label + '：' + code) + '" title="' + escape('复制' + label) + '">' + copyIcon + doneIcon + '</button><span class="lcz-entity-code__status" role="status" aria-live="polite"></span>') + '</div>';
    if (values.length === 1) return row(values[0]);
    if (options.copy === false) return '<div class="lcz-entity-codes">' + row(values[0]) + '<span class="lcz-entity-codes__count">共 ' + values.length + ' 个代码</span></div>';
    return '<div class="lcz-entity-codes">' + row(values[0]) +
      '<details class="lcz-entity-codes__more"><summary>其他 ' + (values.length - 1) + ' 个代码</summary><div class="lcz-entity-codes__list">' + values.slice(1).map(row).join('') + '</div></details></div>';
  }

  function fallbackCopy(text, button) {
    const active = document.activeElement;
    const selection = window.getSelection();
    const ranges = [];
    if (selection) for (let i = 0; i < selection.rangeCount; i++) ranges.push(selection.getRangeAt(i).cloneRange());
    const input = document.createElement('textarea');
    input.value = text;
    input.readOnly = true;
    input.setAttribute('aria-hidden', 'true');
    input.style.cssText = 'position:fixed;left:-10000px;top:0;width:1px;height:1px;opacity:0;font-size:16px;';
    (button.closest('dialog[open]') || document.body).append(input);
    try {
      input.focus({preventScroll:true});
      input.select();
      if (!document.execCommand('copy')) throw new Error('Clipboard unavailable');
    } finally {
      input.remove();
      if (active && active.isConnected && typeof active.focus === 'function') active.focus({preventScroll:true});
      if (selection) {
        selection.removeAllRanges();
        for (const range of ranges) selection.addRange(range);
      }
    }
  }

  function feedback(button, copied) {
    const row = button.closest('.lcz-entity-code');
    if (!row || !button.isConnected) return;
    const label = button.dataset.entityLabel || '实体代码';
    const status = row.querySelector('.lcz-entity-code__status');
    row.dataset.copyState = copied ? 'copied' : 'error';
    button.title = copied ? '已复制' : '复制失败，可手动选择代码';
    if (status) status.textContent = copied ? label + '已复制' : '未能自动复制，请选择代码后复制。';
    clearTimeout(timers.get(button));
    timers.set(button, setTimeout(() => {
      delete row.dataset.copyState;
      button.title = '复制' + label;
      if (status) status.textContent = '';
      timers.delete(button);
    }, copied ? 1800 : 5000));
  }

  document.addEventListener('click', async event => {
    const target = event.target && event.target.nodeType === 1 ? event.target : event.target?.parentElement;
    if (!target) return;
    const summary = target.closest('.lcz-entity-codes__more > summary');
    if (summary) {
      event.preventDefault();
      event.stopImmediatePropagation();
      summary.parentElement.open = !summary.parentElement.open;
      return;
    }
    const button = target.closest('[data-entity-copy]');
    if (!button) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if (button.dataset.copying === 'true') return;
    button.dataset.copying = 'true';
    const value = button.dataset.entityCopy;
    try {
      try {
        if (!window.isSecureContext || !navigator.clipboard?.writeText) throw new Error('Use local clipboard fallback');
        await navigator.clipboard.writeText(value);
      } catch (_) {
        fallbackCopy(value, button);
      }
      feedback(button, true);
    } catch (_) {
      feedback(button, false);
    } finally {
      delete button.dataset.copying;
    }
  }, true);

  window.LCZEntityCode = Object.freeze({render});
})();
