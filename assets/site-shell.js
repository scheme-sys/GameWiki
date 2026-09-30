/* Progressive same-site navigation while music is active. Independent URLs stay usable. */
(() => {
  'use strict';
  const root = new URL('../', document.currentScript.src);
  const parameter = '__lcz_page';
  const pages = new Set(['', 'index.html', 'Craft of Survival/wiki.html', 'Day R Survival/wiki_dayR.html',
    'Westland Survival/westland_wiki.html', 'Westland Survival/westland_difficulty_design.html', 'Westland Survival/westland_difficulty_analysis.html', 'Westland Survival/基地.html',
    'DawnofZombiewiki/', 'DawnofZombiewiki/index.html', 'LDOE_Wiki/', 'LDOE_Wiki/index.html', 'grimsoul_Wiki/', 'grimsoul_Wiki/index.html']);
  let parentSite = null;
  try { if (window.parent !== window && window.parent.LCZSite?.owns(window)) parentSite = window.parent.LCZSite; } catch { /* Cross-origin embedding is independent. */ }
  function allowed(value) {
    try {
      const url = new URL(value, root);
      if (url.origin !== root.origin || !url.pathname.startsWith(root.pathname) || url.username || url.password) return null;
      if (!pages.has(decodeURIComponent(url.pathname.slice(root.pathname.length)))) return null;
      url.searchParams.delete(parameter);
      return url;
    } catch { return null; }
  }
  function relative(url) { return url.pathname.slice(root.pathname.length) + url.search + url.hash; }

  let host, frame, pendingFrame, desired, routeVersion = 0, noteTimer;
  let revealAnimation, finishReveal;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const initial = new URL(location.href); initial.searchParams.delete(parameter);
  function currentRoute() {
    const value = new URL(location.href).searchParams.get(parameter);
    return value ? allowed(value) : allowed(location.href);
  }
  function writeRoute(url, replace = false) {
    const address = new URL(initial);
    if (url.href !== initial.href) address.searchParams.set(parameter, relative(url));
    const method = replace ? 'replaceState' : 'pushState';
    history[method]({ ...(history.state || {}), lczPage: relative(url), lczScroll: replace ? history.state?.lczScroll : {x:0,y:0} }, '', address.href);
  }
  function parked(value) {
    document.body.classList.toggle('lcz-shell-mode', value);
    document.dispatchEvent(new CustomEvent('lcz:content-visibility', { detail: { hidden: value } }));
  }
  function message(text, target) {
    let note = host.querySelector('.lcz-route-note');
    if (!note) { note = document.createElement('div'); note.className = 'lcz-route-note'; note.setAttribute('role', 'status'); host.append(note); }
    note.replaceChildren(document.createTextNode(text));
    if (target) {
      const retry = document.createElement('a'); retry.textContent = '重新打开'; retry.href = target.href;
      retry.addEventListener('click', event => { event.preventDefault(); navigate(target, false); }); note.append(retry);
      const direct = document.createElement('a'); direct.textContent = '独立打开'; direct.href = target.href; direct.target = '_blank'; direct.rel = 'noopener'; note.append(direct);
    }
  }
  function oldWindow() { return frame?.contentWindow || window; }
  function focusPage(next) {
    try {
      const doc = next.contentDocument;
      const target = [...doc.querySelectorAll('main h1,h1,main,[role="main"]')]
        .find(element => element.getClientRects().length && getComputedStyle(element).visibility !== 'hidden');
      if (!target) { next.focus({ preventScroll: true }); return; }
      const previous = target.getAttribute('tabindex');
      target.setAttribute('tabindex', '-1');
      target.classList.add('lcz-route-focus');
      target.addEventListener('blur', () => {
        if (previous === null) target.removeAttribute('tabindex');
        else target.setAttribute('tabindex', previous);
        target.classList.remove('lcz-route-focus');
      }, { once: true });
      target.focus({ preventScroll: true });
    } catch { /* A failed focus transfer must not block navigation. */ }
  }
  function navigate(value, push = true) {
    const url = allowed(value);
    if (!url) return false;
    if (location.protocol === 'file:') { location.href = url.href; return true; }
    // Finish an already-visible dissolve before replacing a still-loading target.
    finishReveal?.();
    const replacingPending = !!pendingFrame || host?.dataset.state === 'error';
    const version = ++routeVersion;
    pendingFrame?.remove(); pendingFrame = null;
    // A parked modal would keep the new document inert even when visually hidden.
    try { oldWindow().document.querySelectorAll('dialog[open]').forEach(dialog => dialog.close()); } catch { /* The outgoing frame may already be unavailable. */ }
    if (!host) { host = document.createElement('div'); host.className = 'lcz-content-host'; document.body.append(host); }
    desired = url;
    if (push) {
      if (!replacingPending) {
        try {
          const visible = oldWindow();
          history.replaceState({...(history.state || {}), lczScroll:{x:visible.scrollX,y:visible.scrollY}}, '', location.href);
        } catch { /* Scroll restoration is optional. */ }
      }
      // A canceled or failed page was never displayed; replace that address.
      writeRoute(url, replacingPending);
    }
    const restoreScroll = history.state?.lczScroll;
    clearTimeout(noteTimer);
    host.querySelector('.lcz-route-note')?.remove();
    host.dataset.state = 'loading';
    host.setAttribute('aria-busy', 'true');
    const old = frame;
    const next = document.createElement('iframe');
    next.className = 'lcz-content-frame lcz-frame-pending';
    next.title = 'LCZ 游戏 Wiki'; next.referrerPolicy = 'no-referrer';
    next.inert = true; next.setAttribute('aria-hidden', 'true');
    next.setAttribute('allow', 'autoplay; fullscreen');
    // Both frames are owned while loading, so the new page shares the same music.
    pendingFrame = next; next.src = url.href;
    const fail = () => {
      if (version !== routeVersion || pendingFrame !== next) return;
      clearTimeout(noteTimer);
      next.remove(); pendingFrame = null;
      host.dataset.state = 'error'; host.setAttribute('aria-busy', 'false');
      message('页面暂时未能打开，当前页面已保留。', url);
    };
    next.addEventListener('error', fail);
    next.addEventListener('load', () => {
      if (version !== routeVersion || pendingFrame !== next) return;
      clearTimeout(noteTimer);
      let doc;
      try {
        doc = next.contentDocument;
        if (!doc?.querySelector('.site-header,.atlas-nav')) { fail(); return; }
        next.title = doc.title;
        if (restoreScroll) next.contentWindow.scrollTo(restoreScroll.x || 0, restoreScroll.y || 0);
      } catch { fail(); return; }
      host.querySelector('.lcz-route-note')?.remove();
      host.dataset.state = 'revealing';
      next.classList.remove('lcz-frame-pending');
      // The old page remains painted below the incoming frame until the fade ends.
      const commit = () => {
        if (version !== routeVersion || pendingFrame !== next) return;
        finishReveal = null;
        if (revealAnimation) { revealAnimation.onfinish = null; revealAnimation.cancel(); revealAnimation = null; }
        // Loading keeps the outgoing page usable; it may have opened another
        // modal since navigation began. Close it before parking that document.
        try { oldWindow().document.querySelectorAll('dialog[open]').forEach(dialog => dialog.close()); } catch { /* The old context may have closed. */ }
        frame = next; pendingFrame = null;
        next.inert = false; next.removeAttribute('aria-hidden');
        old?.remove(); parked(true);
        document.title = doc.title;
        host.dataset.state = 'ready'; host.setAttribute('aria-busy', 'false');
        focusPage(next);
      };
      finishReveal = commit;
      if (reducedMotion.matches || document.hidden || typeof next.animate !== 'function') commit();
      else {
        revealAnimation = next.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 280, easing: 'cubic-bezier(.22,.61,.36,1)', fill: 'both'
        });
        revealAnimation.onfinish = commit;
      }
    });
    host.append(next);
    noteTimer = setTimeout(() => { if (version === routeVersion && pendingFrame === next) message('正在打开页面…', url); }, 1800);
    return true;
  }
  reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) finishReveal?.(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) finishReveal?.(); });
  const site = parentSite || {
    owns(child) { return frame?.contentWindow === child || pendingFrame?.contentWindow === child; },
    get parked() { return !!host; },
    navigate,
    syncChild(child, href, title) {
      if (pendingFrame || frame?.contentWindow !== child) return;
      const url = allowed(href); if (!url) return;
      desired = url; document.title = title || document.title;
      // Hash navigation already contributes a native child history entry.
      writeRoute(url, true);
    },
  };
  window.LCZSite = site;

  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest?.('a[href]');
    if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
    const url = allowed(link.href); if (!url) return;
    const current = new URL(location.href); current.searchParams.delete(parameter);
    if (url.pathname === current.pathname && url.search === current.search && url.hash && url.hash !== '#') return;
    // Entering a game is a user gesture; explicit mute survives later navigation.
    if (event.isTrusted && url.pathname !== root.pathname && url.pathname !== new URL('index.html', root).pathname) window.LCZMusic?.enter();
    if (parentSite || host || window.LCZMusic?.activated) {
      event.preventDefault(); site.navigate(url);
    }
  });
  if (parentSite) {
    window.addEventListener('hashchange', () => parentSite.syncChild(window, location.href, document.title));
    window.addEventListener('popstate', () => parentSite.syncChild(window, location.href, document.title));
  } else {
    window.addEventListener('popstate', () => {
      if (!host) return;
      const url = currentRoute();
      if (url && url.href !== desired?.href) navigate(url, false);
    });
    const requested = new URL(location.href).searchParams.get(parameter);
    if (requested && allowed(requested)) navigate(requested, false);
  }
})();
