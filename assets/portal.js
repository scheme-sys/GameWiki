(() => {
  'use strict';

  const GAMES = window.LCZ_GAMES;
  const $ = (selector) => document.querySelector(selector);
  const universe = $('#game-universe');
  const info = $('#game-info');
  const infoCover = $('#info-cover');
  let coverVersion = 0;
  const search = $('#search-dialog');
  const searchInput = $('#game-search');
  const searchResults = $('#search-results');
  const searchSummary = $('#search-summary');
  const searchEmpty = $('#search-empty');
  const searchIndex = GAMES.map(game => ({ game,
    text: (game.nameZh + ' ' + game.name + ' ' + game.keywords).toLocaleLowerCase(), node: null }));
  let displayedResults = null;
  const community = $('#community-dialog');
  const dialogs = [search, community];
  const dialogTriggers = new WeakMap();
  const hasOpenDialog = () => dialogs.some(dialog => dialog.open);
  const storage = {
    get(key) { try { return JSON.parse(localStorage.getItem('lcz:' + key)); } catch { return null; } },
    set(key, value) { try { localStorage.setItem('lcz:' + key, JSON.stringify(value)); } catch { /* Storage is optional. */ } }
  };
  // A changed game roster needs a fresh arrangement; keep layouts for each roster.
  const positionStorageKey = 'positions-v4:' + GAMES.map(game => game.id).sort().join(',');
  const saved = storage.get(positionStorageKey);
  const positions = saved && typeof saved === 'object' && !Array.isArray(saved) ? saved : {};
  const nodes = new Map();
  const radii = new Map();
  const renderedPositions = new Map();
  let dragFrame = 0, pendingDrag = null;
  let width = 0, height = 0, layoutKey = 'desktop';
  let gesture = null, suppressClick = null, previewGame = null;
  let hideTimer, showTimer, infoAnimation, infoPhase = 'hidden';
  let lastPointerType = 'mouse', ignoreFocus = false;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const coarsePointer = matchMedia('(pointer: coarse)');

  function announce(message) { $('#live-status').textContent = message; }
  function makeLink(entry, className = '') {
    const link = document.createElement('a');
    link.href = entry.href;
    link.textContent = entry.title;
    link.className = className;
    return link;
  }
  for (const game of GAMES) {
    const node = document.createElement('article');
    node.className = 'world';
    node.dataset.game = game.id;
    node.style.setProperty('--world-color', game.color);
    const link = makeLink({ href: game.links[0].href, title: '' }, 'world-link');
    link.draggable = false;
    link.setAttribute('aria-label', game.nameZh + '，' + game.name + '。点击进入 Wiki；长按查看介绍，拖动或用方向键移动。');
    link.setAttribute('aria-controls', 'game-info');
    link.setAttribute('aria-expanded', 'false');
    const visual = document.createElement('div');
    visual.className = 'world-visual';
    const image = document.createElement('img');
    image.className = 'game-icon';
    image.src = game.image;
    image.alt = '';
    image.width = image.height = 256;
    image.draggable = false;
    image.decoding = 'async';
    visual.append(image);
    link.append(visual);
    node.append(link);
    $('#worlds').append(node);
    nodes.set(game.id, node);
  }

  const field = new window.LCZBubbleField({
    width: 1, height: 1, padding: 2, gap: 12,
    onSettle() {
      // Finish the release animation before a moving circle opens its preview.
      requestAnimationFrame(() => {
        if (document.hidden || gesture || hasOpenDialog() || lastPointerType !== 'mouse') return;
        const hovered = [...nodes].find(([, node]) => node.querySelector('a').matches(':hover'));
        if (hovered) queueInfo(hovered[0]);
      });
    },
    onUpdate(bodies) {
      for (const body of bodies) {
        const node = nodes.get(body.id);
        const half = radii.get(body.id) || 0;
        const x = body.x - half, y = body.y - half;
        const previous = renderedPositions.get(body.id);
        if (previous && previous.x === x && previous.y === y) continue;
        node.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
        if (previous) { previous.x = x; previous.y = y; }
        else renderedPositions.set(body.id, { x, y });
      }
    }
  });

  function syncMotion() {
    document.body.classList.toggle('scene-still', document.body.classList.contains('lcz-shell-mode') || reducedMotion.matches || document.hidden || !info.hidden || hasOpenDialog());
    field.setReducedMotion(reducedMotion.matches);
    if (document.body.classList.contains('lcz-shell-mode') || reducedMotion.matches || document.hidden || !info.hidden || hasOpenDialog() || (gesture && !gesture.moved)) field.stop();
    else field.start();
  }
  document.addEventListener('lcz:content-visibility', syncMotion);
  function savePositions() {
    positions[layoutKey] = Object.fromEntries(field.getBodies().map((body) =>
      [body.id, { x: body.anchorX / width, y: body.anchorY / height }]));
    storage.set(positionStorageKey, positions);
  }
  function layout() {
    cancelGesture();
    hideInfo(true);
    width = universe.clientWidth;
    height = universe.clientHeight;
    layoutKey = innerHeight <= 500 && innerWidth > innerHeight ? 'landscape'
      : innerWidth <= 600 ? 'mobile' : innerWidth <= 900 ? 'tablet' : 'desktop';
    // Use the available scene dimensions, with the original sizes as ceilings.
    // Keep desktop sizing close to tablet sizing at their shared breakpoint.
    const screenScale = layoutKey === 'tablet' ? Math.min(.84, width / 840, height / 640)
      : Math.min(1, Math.max(.84, width / 1392), height / 640);
    field.resize(width, height);
    field.setBodies(GAMES.map((game) => {
      const node = nodes.get(game.id);
      const baseSize = layoutKey === 'landscape' ? Math.min(94, height * .38, (width - 72) / GAMES.length)
        : layoutKey === 'mobile' ? Math.min(112, width * .32) * game.size / 164
        : game.size * screenScale;
      // Resize the actual element and its collision radius together, not just
      // its visual transform. Apply the 85% reduction once on every screen.
      const size = baseSize * .85;
      radii.set(game.id, size / 2);
      node.style.setProperty('--diameter', size + 'px');
      const point = positions[layoutKey]?.[game.id];
      const initial = game.position[layoutKey];
      const valid = point && Number.isFinite(point.x) && Number.isFinite(point.y);
      return { id: game.id, x: (valid ? point.x : initial[0]) * width,
        y: (valid ? point.y : initial[1]) * height, radius: size / 2 + 8 };
    }));
    syncMotion();
  }

  function positionInfo() {
    if (!previewGame || info.hidden) return;
    // Compact touch previews are fully positioned by CSS; measuring their
    // newly populated content here would force an unused synchronous layout.
    if (info.classList.contains('touch-preview') && innerWidth <= 900) return;
    const rect = nodes.get(previewGame).querySelector('.world-visual').getBoundingClientRect();
    const box = info.getBoundingClientRect();
    let x = rect.right + 24;
    if (x + box.width > innerWidth - 12) x = rect.left - box.width - 24;
    x = Math.max(12, Math.min(innerWidth - box.width - 12, x));
    const y = Math.max(12, Math.min(innerHeight - box.height - 12, rect.top + rect.height / 2 - box.height / 2));
    info.style.left = x + 'px';
    info.style.top = y + 'px';
  }
  function cancelInfoAnimation() {
    if (!infoAnimation) return;
    infoAnimation.onfinish = null;
    infoAnimation.cancel();
    infoAnimation = null;
  }
  function animateInfo(from, to, duration, done) {
    cancelInfoAnimation();
    if (reducedMotion.matches || typeof info.animate !== 'function') { done(); return; }
    const animation = info.animate([from, to], { duration, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'forwards' });
    infoAnimation = animation;
    animation.onfinish = () => {
      if (infoAnimation !== animation) return;
      cancelInfoAnimation();
      done();
    };
  }
  function infoPose() {
    const style = getComputedStyle(info);
    return { opacity: style.opacity, transform: style.transform };
  }
  function markPreview(id) {
    for (const [key, node] of nodes) {
      node.classList.toggle('active', key === id);
      node.querySelector('a').setAttribute('aria-expanded', String(key === id));
    }
  }
  function setInfoCover(game) {
    const version = ++coverVersion;
    const source = game.cover?.image || game.image;
    const expected = new URL(source, document.baseURI).href;
    info.dataset.coverState = 'loading';
    infoCover.style.objectPosition = game.cover?.position || '50% 50%';
    const reveal = async () => {
      if (!infoCover.naturalWidth || infoCover.currentSrc !== expected) return;
      // Decode without delaying the card, then ignore a superseded selection.
      try { await infoCover.decode(); } catch { /* The neutral background remains usable. */ }
      if (version === coverVersion && infoCover.currentSrc === expected && infoCover.naturalWidth) {
        info.dataset.coverState = 'ready';
      }
    };
    infoCover.onload = reveal;
    infoCover.onerror = () => {
      if (version === coverVersion) info.dataset.coverState = 'unavailable';
    };
    if (infoCover.getAttribute('src') !== source) infoCover.src = source;
    if (infoCover.complete && infoCover.naturalWidth) reveal();
  }

  function revealInfo(id, touch, from) {
    const game = GAMES.find((entry) => entry.id === id);
    if (previewGame !== id || info.hidden) {
      setInfoCover(game);
      $('#info-title').textContent = game.nameZh;
      $('#info-icon').src = game.image;
      info.style.setProperty('--preview-color', game.color);
      $('#info-english').textContent = game.name;
      $('#info-description').textContent = game.description;
      $('#info-tags').replaceChildren(...game.tags.map((tag) => {
        const span = document.createElement('span'); span.textContent = tag; return span;
      }));
      $('#info-links').replaceChildren(...game.links.map((entry) => makeLink(entry)));
    }
    previewGame = id;
    info.classList.toggle('touch-preview', touch);
    info.hidden = false;
    infoPhase = 'opening';
    markPreview(id);
    positionInfo();
    syncMotion();
    animateInfo(from || { opacity: 0, transform: 'translateY(5px)' },
      { opacity: 1, transform: 'translateY(0)' }, 160, () => { infoPhase = 'open'; });
    if (touch) announce(game.nameZh + '介绍已打开；再次点击气泡或选择入口进入 Wiki。');
  }
  function showInfo(id, touch = false) {
    clearTimeout(showTimer);
    clearTimeout(hideTimer);
    if (document.hidden || gesture?.moved || hasOpenDialog() || (!touch && field.isSettling())) return;
    const same = previewGame === id && !info.hidden;
    if (same && (infoPhase === 'open' || infoPhase === 'opening')) return;
    const from = info.hidden ? null : infoPose();
    if (!info.hidden && !same && !reducedMotion.matches) {
      infoPhase = 'switching';
      animateInfo(from, { opacity: 0, transform: 'translateY(3px)' }, 70, () => {
        const link = nodes.get(id).querySelector('a');
        if (!touch && !link.matches(':hover') && !link.matches(':focus-visible')) { finishHideInfo(); return; }
        revealInfo(id, touch);
      });
    } else {
      cancelInfoAnimation();
      revealInfo(id, touch, same ? from : null);
    }
  }
  function queueInfo(id) {
    clearTimeout(showTimer);
    clearTimeout(hideTimer);
    if (previewGame === id && !info.hidden) { showInfo(id); return; }
    showTimer = setTimeout(() => {
      if (!gesture && nodes.get(id).querySelector('a').matches(':hover')) showInfo(id);
    }, 80);
  }
  function finishHideInfo() {
    cancelInfoAnimation();
    info.hidden = true;
    infoPhase = 'hidden';
    previewGame = null;
    markPreview(null);
    syncMotion();
  }
  function hideInfo(immediate = false) {
    clearTimeout(showTimer);
    clearTimeout(hideTimer);
    if (immediate || info.hidden || reducedMotion.matches || document.hidden) { finishHideInfo(); return; }
    if (infoPhase === 'closing') return;
    infoPhase = 'closing';
    animateInfo(infoPose(), { opacity: 0, transform: 'translateY(4px)' }, 120, finishHideInfo);
  }
  function keepInfo() {
    clearTimeout(showTimer);
    clearTimeout(hideTimer);
    if (previewGame && (infoPhase === 'closing' || infoPhase === 'switching')) {
      showInfo(previewGame, info.classList.contains('touch-preview'));
    }
  }
  function scheduleHide() {
    clearTimeout(showTimer);
    clearTimeout(hideTimer);
    if (info.classList.contains('touch-preview') || gesture) return;
    hideTimer = setTimeout(() => {
      const link = previewGame && nodes.get(previewGame).querySelector('a');
      if (!info.matches(':hover') && !info.contains(document.activeElement) && !link?.matches(':hover')) hideInfo();
    }, 180);
  }

  function finishGesture(cancel = false) {
    if (!gesture) return;
    const current = gesture;
    cancelAnimationFrame(dragFrame);
    dragFrame = 0;
    if (!cancel && pendingDrag) field.dragTo(current.id, pendingDrag.x, pendingDrag.y);
    pendingDrag = null;
    gesture = null;
    clearTimeout(current.timer);
    if (cancel) {
      field.setBodies(current.before);
      suppressClick = current.id;
    } else {
      field.release(current.id);
      if (current.moved) {
        savePositions();
        announce('气泡位置已保存');
      }
      if (current.moved || current.longPressed) suppressClick = current.id;
    }
    current.node.classList.remove('dragging');
    document.body.classList.remove('is-dragging');
    if (current.link.hasPointerCapture(current.pointerId)) current.link.releasePointerCapture(current.pointerId);
    if (cancel || current.moved) hideInfo(true);
    syncMotion();
  }
  function cancelGesture() { finishGesture(true); }

  document.addEventListener('pointerdown', (event) => {
    lastPointerType = event.pointerType;
    if (gesture && event.pointerId !== gesture.pointerId) cancelGesture();
    if (!info.hidden && !info.contains(event.target) && !event.target.closest('.world-link')) hideInfo(true);
  }, true);
  for (const [id, node] of nodes) {
    const link = node.querySelector('a');
    link.addEventListener('pointerenter', (event) => {
      if (event.pointerType === 'mouse' && !gesture) queueInfo(id);
    });
    link.addEventListener('pointerleave', (event) => {
      if (event.pointerType === 'mouse') scheduleHide();
    });
    link.addEventListener('focus', () => {
      if (!ignoreFocus && lastPointerType === 'mouse' && link.matches(':focus-visible')) showInfo(id, coarsePointer.matches);
    });
    link.addEventListener('blur', scheduleHide);
    link.addEventListener('dragstart', (event) => event.preventDefault());
    link.addEventListener('lostpointercapture', (event) => {
      if (event.target === link && gesture?.pointerId === event.pointerId) cancelGesture();
    });
    link.addEventListener('contextmenu', (event) => { if (lastPointerType !== 'mouse') event.preventDefault(); });
    link.addEventListener('pointerdown', (event) => {
      if (event.button !== 0 || !event.isPrimary || gesture || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
      suppressClick = null;
      const body = field.getBodies().find((entry) => entry.id === id);
      gesture = { id, node, link, pointerId: event.pointerId, pointerType: event.pointerType,
        startX: event.clientX, startY: event.clientY, originX: body.x, originY: body.y,
        before: field.getBodies(), moved: false, longPressed: false, timer: null };
      field.grab(id);
      if (event.pointerType !== 'mouse') {
        const current = gesture;
        current.timer = setTimeout(() => {
          if (gesture !== current || current.moved) return;
          current.longPressed = true;
          showInfo(id, true);
        }, 520);
      }
      syncMotion();
    });
    link.addEventListener('click', (event) => {
      if (suppressClick === id && event.detail !== 0) {
        event.preventDefault();
        suppressClick = null;
      }
    });
    link.addEventListener('keydown', (event) => {
      const direction = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[event.key];
      if (!direction || event.ctrlKey || event.metaKey || event.altKey) return;
      event.preventDefault();
      const body = field.getBodies().find((entry) => entry.id === id);
      const distance = event.shiftKey ? 30 : 12;
      field.setPosition(id, body.x + direction[0] * distance, body.y + direction[1] * distance);
      savePositions();
      positionInfo();
      announce(GAMES.find((game) => game.id === id).nameZh + '位置已更新');
    });
  }
  window.addEventListener('pointermove', (event) => {
    if (!gesture || event.pointerId !== gesture.pointerId) return;
    const current = gesture;
    const dx = event.clientX - current.startX, dy = event.clientY - current.startY;
    if (!current.moved && Math.hypot(dx, dy) <= 8) return;
    if (!current.moved) {
      clearTimeout(current.timer);
      current.moved = true;
      current.link.setPointerCapture(current.pointerId);
      current.node.classList.add('dragging');
      document.body.classList.add('is-dragging');
      hideInfo(true);
    }
    event.preventDefault();
    pendingDrag = { x: current.originX + dx, y: current.originY + dy };
    if (!dragFrame) dragFrame = requestAnimationFrame(() => {
      dragFrame = 0;
      if (gesture && pendingDrag) field.dragTo(gesture.id, pendingDrag.x, pendingDrag.y);
      pendingDrag = null;
    });
  }, { passive: false });
  window.addEventListener('pointerup', (event) => {
    if (gesture?.pointerId === event.pointerId) finishGesture();
  });
  window.addEventListener('pointercancel', (event) => {
    if (gesture?.pointerId === event.pointerId) cancelGesture();
  });
  window.addEventListener('blur', () => { cancelGesture(); hideInfo(true); });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelGesture(); hideInfo(true); }
    syncMotion();
  });
  info.addEventListener('pointerenter', keepInfo);
  info.addEventListener('focusin', keepInfo);
  info.addEventListener('pointerleave', scheduleHide);
  info.addEventListener('focusout', scheduleHide);
  $('#info-close').addEventListener('click', () => {
    const link = previewGame && nodes.get(previewGame).querySelector('a');
    hideInfo();
    ignoreFocus = true;
    link?.focus({ preventScroll: true });
    ignoreFocus = false;
  });
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) infoAnimation?.finish();
    syncMotion();
  });

  function resultNode(entry) {
    if (entry.node) return entry.node;
    const game = entry.game;
    const result = makeLink({ href: game.links[0].href, title: '' }, 'search-result');
    result.style.setProperty('--result-color', game.color);
    result.setAttribute('aria-label', game.nameZh + '，' + game.name);
    const image = document.createElement('img');
    image.src = game.image; image.alt = ''; image.width = image.height = 48;
    const content = document.createElement('span');
    content.className = 'result-copy';
    const title = document.createElement('span');
    title.className = 'result-title'; title.textContent = game.nameZh;
    const english = document.createElement('span');
    english.className = 'result-english'; english.textContent = game.name;
    content.append(title, english);
    result.append(image, content);
    entry.node = result;
    return result;
  }
  function renderResults(query) {
    const terms = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    const matches = searchIndex.filter(entry => terms.every(term => entry.text.includes(term)));
    // Keep existing cards (and their decoded images) when typing still yields
    // the same games. Reuse those same nodes when the result set changes.
    if (displayedResults && matches.length === displayedResults.length &&
      matches.every((entry, index) => entry === displayedResults[index])) return;
    displayedResults = matches;
    searchResults.replaceChildren(...matches.map(resultNode));
    searchSummary.textContent = matches.length ? matches.length + ' 个游戏' : '没有匹配的结果';
    searchEmpty.hidden = matches.length > 0;
  }
  function openDialog(dialog, trigger) {
    if (hasOpenDialog()) return;
    cancelGesture();
    hideInfo(true);
    dialogTriggers.set(dialog, trigger);
    trigger.setAttribute('aria-expanded', 'true');
    // Populate while hidden so showModal and focus share one final layout.
    if (dialog === search) {
      searchInput.value = '';
      renderResults('');
    } else if (dialog === community) {
      loadCommunityQr();
    }
    document.body.classList.add('dialog-open');
    dialog.showModal();
    if (dialog === search) searchInput.focus({ preventScroll: true });
    syncMotion();
  }
  for (const dialog of dialogs) {
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      const trigger = dialogTriggers.get(dialog);
      trigger?.setAttribute('aria-expanded', 'false');
      if (!hasOpenDialog()) {
        document.body.classList.remove('dialog-open');
        trigger?.focus({ preventScroll: true });
      }
      syncMotion();
    });
  }
  const communityQr = $('#community-qr');
  const qrStatus = $('#community-qr-status');
  const qrRetry = $('#community-qr-retry');
  function loadCommunityQr() {
    if (communityQr.hasAttribute('src')) return;
    community.dataset.qrState = 'loading';
    qrStatus.textContent = '正在加载二维码…';
    qrRetry.hidden = true;
    communityQr.src = communityQr.dataset.src;
  }
  communityQr.addEventListener('load', () => {
    community.dataset.qrState = 'ready';
    qrStatus.textContent = '二维码已加载';
  });
  communityQr.addEventListener('error', () => {
    community.dataset.qrState = 'error';
    communityQr.removeAttribute('src');
    qrStatus.textContent = '二维码暂时无法加载';
    qrRetry.hidden = false;
  });
  qrRetry.addEventListener('click', loadCommunityQr);
  $('#community-open').addEventListener('click', (event) => openDialog(community, event.currentTarget));
  $('#search-open').addEventListener('click', (event) => openDialog(search, event.currentTarget));
  searchInput.addEventListener('input', (event) => renderResults(event.target.value));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') lastPointerType = 'mouse';
    if (event.key === 'Escape') {
      cancelGesture();
      hideInfo(true);
      const activeDialog = dialogs.find(dialog => dialog.open);
      if (activeDialog) {
        event.preventDefault();
        activeDialog.close();
      }
    }
    if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !hasOpenDialog() &&
      !event.target.matches('input,textarea,[contenteditable="true"]')) {
      event.preventDefault();
      openDialog(search, $('#search-open'));
    }
  });
  let resizeFrame;
  new ResizeObserver(() => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      if (universe.clientWidth !== width || universe.clientHeight !== height) layout();
    });
  }).observe(universe);
  window.addEventListener('pagehide', () => field.stop());
  window.addEventListener('pageshow', syncMotion);
  layout();
})();
