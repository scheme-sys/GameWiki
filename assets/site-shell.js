/* Progressive same-site navigation while music is active. Independent URLs stay usable. */
(() => {
  'use strict';
  const root = new URL('../', document.currentScript.src);
  const parameter = '__lcz_page';
  const pages = new Set(['', 'index.html', 'Craft of Survival/wiki.html', 'Day R Survival/wiki_dayR.html',
    'Westland Survival/westland_wiki.html', 'Westland Survival/westland_difficulty_design.html', 'Westland Survival/基地.html',
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

  let host, frame, desired, routeVersion = 0, noteTimer;
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
  function navigate(value, push = true) {
    const url = allowed(value);
    if (!url) return false;
    if (location.protocol === 'file:') { location.href = url.href; return true; }
    // A parked modal would keep the new document inert even when visually hidden.
    try { oldWindow().document.querySelectorAll('dialog[open]').forEach(dialog => dialog.close()); } catch { /* The outgoing frame may already be unavailable. */ }
    if (!host) { host = document.createElement('div'); host.className = 'lcz-content-host'; document.body.append(host); }
    const version = ++routeVersion; desired = url;
    if (push) {
      try {
        const visible = oldWindow();
        history.replaceState({...(history.state || {}), lczScroll:{x:visible.scrollX,y:visible.scrollY}}, '', location.href);
      } catch { /* Scroll restoration is optional. */ }
      writeRoute(url);
    }
    const restoreScroll = history.state?.lczScroll;

    clearTimeout(noteTimer);
    const old = frame;
    const next = document.createElement('iframe'); next.className = 'lcz-content-frame';
    next.title = 'LCZ 游戏 Wiki'; next.referrerPolicy = 'no-referrer';
    next.setAttribute('allow', 'autoplay; fullscreen');
    // A fresh browsing context avoids adding a second cross-document history entry.
    frame = next; next.src = url.href;
    next.addEventListener('load', () => {
      if (version !== routeVersion) return;
      clearTimeout(noteTimer);
      try {
        const doc = next.contentDocument;
        if (!doc?.querySelector('.site-header,.atlas-nav')) { message('页面暂时未能打开。', url); return; }
        document.title = doc.title; next.title = doc.title;
        if (restoreScroll) next.contentWindow.scrollTo(restoreScroll.x || 0, restoreScroll.y || 0);
        host.querySelector('.lcz-route-note')?.remove();
      } catch { message('页面暂时未能打开。', url); }
    });
    old?.remove(); host.replaceChildren(next); parked(true);
    noteTimer = setTimeout(() => { if (version === routeVersion) message('正在打开页面…', url); }, 1800);
    return true;
  }
  const site = parentSite || {
    owns(child) { return frame?.contentWindow === child; },
    get parked() { return !!host; },
    navigate,
    syncChild(child, href, title) {
      if (frame?.contentWindow !== child) return;
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
