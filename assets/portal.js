(() => {
  'use strict';

  const GAMES = window.LCZ_GAMES;
  const $ = (selector) => document.querySelector(selector);
  const universe = $('#game-universe');
  const info = $('#game-info');
  const search = $('#search-dialog');
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
  let dragFrame = 0, pendingDrag = null;
  let width = 0, height = 0, layoutKey = 'desktop';
  let gesture = null, suppressClick = null, previewGame = null;
  let hideTimer, dialogTrigger, lastPointerType = 'mouse', ignoreFocus = false;
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
        if (document.hidden || gesture || search.open || lastPointerType !== 'mouse') return;
        const hovered = [...nodes].find(([, node]) => node.querySelector('a').matches(':hover'));
        if (hovered) showInfo(hovered[0]);
      });
    },
    onUpdate(bodies) {
      for (const body of bodies) {
        const node = nodes.get(body.id);
        const half = radii.get(body.id) || 0;
        node.style.transform = 'translate3d(' + (body.x - half) + 'px,' + (body.y - half) + 'px,0)';
      }
    }
  });

  function syncMotion() {
    document.body.classList.toggle('scene-still', reducedMotion.matches || document.hidden || !info.hidden || search.open);
    field.setReducedMotion(reducedMotion.matches);
    if (reducedMotion.matches || document.hidden || !info.hidden || search.open || (gesture && !gesture.moved)) field.stop();
    else field.start();
  }
  function savePositions() {
    positions[layoutKey] = Object.fromEntries(field.getBodies().map((body) =>
      [body.id, { x: body.anchorX / width, y: body.anchorY / height }]));
    storage.set(positionStorageKey, positions);
  }
  function layout() {
    cancelGesture();
    hideInfo();
    width = universe.clientWidth;
    height = universe.clientHeight;
    layoutKey = innerHeight <= 500 && innerWidth > innerHeight ? 'landscape'
      : innerWidth <= 600 ? 'mobile' : innerWidth <= 900 ? 'tablet' : 'desktop';
    field.resize(width, height);
    field.setBodies(GAMES.map((game) => {
      const node = nodes.get(game.id);
      const size = layoutKey === 'landscape' ? Math.min(94, height * .38, (width - 72) / GAMES.length)
        : layoutKey === 'mobile' ? Math.min(112, width * .32) * game.size / 164
        : game.size * (layoutKey === 'tablet' ? .84 : 1);
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
    const rect = nodes.get(previewGame).querySelector('.world-visual').getBoundingClientRect();
    const box = info.getBoundingClientRect();
    let x = rect.right + 24;
    if (x + box.width > innerWidth - 12) x = rect.left - box.width - 24;
    x = Math.max(12, Math.min(innerWidth - box.width - 12, x));
    const y = Math.max(12, Math.min(innerHeight - box.height - 12, rect.top + rect.height / 2 - box.height / 2));
    info.style.left = x + 'px';
    info.style.top = y + 'px';
  }
  function showInfo(id, touch = false) {
    if (gesture?.moved || search.open || (!touch && field.isSettling())) return;
    clearTimeout(hideTimer);
    previewGame = id;
    const game = GAMES.find((entry) => entry.id === id);
    $('#info-title').textContent = game.nameZh;
    $('#info-icon').src = game.image;
    info.style.setProperty('--preview-color', game.color);
    $('#info-english').textContent = game.name;
    $('#info-description').textContent = game.description;
    $('#info-tags').replaceChildren(...game.tags.map((tag) => {
      const span = document.createElement('span'); span.textContent = tag; return span;
    }));
    $('#info-links').replaceChildren(...game.links.map((entry) => makeLink(entry)));
    info.classList.toggle('touch-preview', touch);
    info.hidden = false;
    for (const [key, node] of nodes) {
      node.classList.toggle('active', key === id);
      node.querySelector('a').setAttribute('aria-expanded', String(key === id));
    }
    positionInfo();
    syncMotion();
    if (touch) announce(game.nameZh + '介绍已打开；再次点击气泡或选择入口进入 Wiki。');
  }
  function hideInfo() {
    clearTimeout(hideTimer);
    info.hidden = true;
    previewGame = null;
    for (const node of nodes.values()) {
      node.classList.remove('active');
      node.querySelector('a').setAttribute('aria-expanded', 'false');
    }
    syncMotion();
  }
  function scheduleHide() {
    clearTimeout(hideTimer);
    if (info.classList.contains('touch-preview') || gesture) return;
    hideTimer = setTimeout(() => {
      if (!info.matches(':hover') && !info.contains(document.activeElement)) hideInfo();
    }, 220);
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
    if (cancel || current.moved) hideInfo();
    syncMotion();
  }
  function cancelGesture() { finishGesture(true); }

  document.addEventListener('pointerdown', (event) => {
    lastPointerType = event.pointerType;
    if (gesture && event.pointerId !== gesture.pointerId) cancelGesture();
    if (!info.hidden && !info.contains(event.target) && !event.target.closest('.world-link')) hideInfo();
  }, true);
  for (const [id, node] of nodes) {
    const link = node.querySelector('a');
    link.addEventListener('pointerenter', (event) => {
      if (event.pointerType === 'mouse' && !gesture) showInfo(id);
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
      hideInfo();
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
  window.addEventListener('blur', () => { cancelGesture(); hideInfo(); });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelGesture();
    syncMotion();
  });
  info.addEventListener('pointerenter', () => clearTimeout(hideTimer));
  info.addEventListener('pointerleave', scheduleHide);
  info.addEventListener('focusout', scheduleHide);
  $('#info-close').addEventListener('click', () => {
    const link = previewGame && nodes.get(previewGame).querySelector('a');
    hideInfo();
    ignoreFocus = true;
    link?.focus({ preventScroll: true });
    ignoreFocus = false;
  });
  reducedMotion.addEventListener('change', syncMotion);

  function renderResults(query) {
    const terms = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    const games = GAMES.filter((game) => terms.every((term) =>
      (game.nameZh + ' ' + game.name + ' ' + game.keywords).toLocaleLowerCase().includes(term)));
    $('#search-results').replaceChildren(...games.map((game) => {
      const result = makeLink({ href: game.links[0].href, title: '' }, 'search-result');
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
      return result;
    }));
    $('#search-summary').textContent = games.length ? games.length + ' 个游戏' : '没有匹配的结果';
    $('#search-empty').hidden = games.length > 0;
  }
  function openDialog(dialog, trigger) {
    cancelGesture();
    hideInfo();
    dialogTrigger = trigger;
    document.body.classList.add('dialog-open');
    dialog.showModal();
    if (dialog === search) {
      $('#game-search').value = '';
      renderResults('');
      $('#game-search').focus();
    }
    syncMotion();
  }
  for (const dialog of [search]) {
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.body.classList.remove('dialog-open');
      dialogTrigger?.focus({ preventScroll: true });
      syncMotion();
    });
  }
  $('#search-open').addEventListener('click', (event) => openDialog(search, event.currentTarget));
  $('#game-search').addEventListener('input', (event) => renderResults(event.target.value));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') lastPointerType = 'mouse';
    if (event.key === 'Escape') {
      cancelGesture();
      hideInfo();
      if (search.open) {
        event.preventDefault();
        search.close();
      }
    }
    if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !search.open &&
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
