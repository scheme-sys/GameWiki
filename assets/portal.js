(() => {
  'use strict';

  const GAMES = window.ORBIT_GAMES;
  const $ = (selector) => document.querySelector(selector);
  // Render from a single game directory; no duplicate card configuration.
  const worldContainer = $('#worlds');
  const categoryLabels = new Map();
  for (const game of GAMES) {
    const article = document.createElement('article');
    article.className = 'world';
    article.dataset.game = game.id;
    article.dataset.category = game.category;
    article.style.setProperty('--world-color', game.color);
    const link = document.createElement('a');
    link.className = 'world-link';
    link.href = game.links[0].href;
    link.draggable = false;
    link.setAttribute('aria-label', '进入 ' + game.name + ' ' + game.genre + ' Wiki；支持拖动或方向键移动');
    const visual = document.createElement('div');
    visual.className = 'world-visual';
    const atmosphere = document.createElement('div');
    atmosphere.className = 'world-atmosphere';
    const image = document.createElement('img');
    image.className = 'game-icon';
    image.src = game.image;
    image.alt = game.name + ' 游戏图标';
    image.width = image.height = 256;
    image.draggable = false;
    const marker = document.createElement('span');
    marker.className = 'planet-marker';
    marker.textContent = game.number;
    marker.setAttribute('aria-hidden', 'true');
    const arrow = document.createElement('span');
    arrow.className = 'planet-enter';
    arrow.textContent = '↗';
    arrow.setAttribute('aria-hidden', 'true');
    visual.append(atmosphere, image, marker, arrow);
    const caption = document.createElement('div');
    caption.className = 'world-caption';
    const genre = document.createElement('span');
    genre.className = 'world-genre';
    genre.textContent = game.sector + ' / ' + game.genre;
    const title = document.createElement('h2');
    title.textContent = game.name;
    const tagline = document.createElement('p');
    tagline.textContent = game.tagline;
    caption.append(genre, title, tagline);
    link.append(visual, caption);
    article.append(link);
    worldContainer.append(article);
    categoryLabels.set(game.category, game.categoryLabel);
  }
  for (const [category, label] of categoryLabels) {
    const button = document.createElement('button');
    button.className = 'filter-chip';
    button.type = 'button';
    button.dataset.filter = category;
    button.setAttribute('aria-pressed', 'false');
    button.textContent = label;
    $('.filter-group').append(button);
  }
  $('#game-count').textContent = String(GAMES.length).padStart(2, '0');
  $('.nav-count').textContent = String(GAMES.length).padStart(2, '0');
  $('#entry-count').textContent = String(GAMES.reduce((total, game) => total + game.links.length, 0)).padStart(2, '0');
  const worldNodes = [...document.querySelectorAll('.world')];
  const universe = $('#game-universe');
  const status = $('#live-status');
  const storage = {
    get(key) { try { return JSON.parse(localStorage.getItem(`orbit:${key}`)); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(`orbit:${key}`, JSON.stringify(value)); } catch { /* Private browsing can disable storage. */ } }
  };
  const storedPositions = storage.get('positions-v1');
  const positions = storedPositions && typeof storedPositions === 'object' ? storedPositions : {};
  let selectedGame = GAMES[0].id;
  let activeFilter = 'all';
  let activeDrag = null;
  let suppressClick = null;
  let suppressTimer;
  let width = 0;
  let height = 0;
  let mobile = false;
  let layoutKey = 'desktop';

  function announce(message) { status.textContent = message; }
  function linkElement(link, className = '') {
    const element = document.createElement('a');
    element.href = link.href;
    if (className) element.className = className;
    element.textContent = link.title;
    const arrow = document.createElement('span');
    arrow.textContent = '↗';
    arrow.setAttribute('aria-hidden', 'true');
    element.append(arrow);
    return element;
  }
  function selectGame(id) {
    const game = GAMES.find((entry) => entry.id === id);
    if (!game) return;
    selectedGame = id;
    $('#detail-kicker').textContent = `发现世界 / ${game.number}`;
    $('#detail-title').textContent = game.name;
    $('#detail-index').textContent = game.number;
    $('#detail-description').textContent = game.description;
    $('#detail-tags').replaceChildren(...game.tags.map((tag) => {
      const span = document.createElement('span'); span.textContent = tag; return span;
    }));
    $('#detail-links').replaceChildren(...game.links.map((link) => linkElement(link)));
    worldNodes.forEach((node) => node.classList.toggle('selected', node.dataset.game === id));
  }

  function defaultPosition(id) {
    const game = GAMES.find((entry) => entry.id === id);
    const index = GAMES.indexOf(game);
    const point = game.position?.[layoutKey] || [.4 + (index % 3) * .19, .3 + Math.floor(index / 3) * .25];
    return { x: point[0], y: point[1] };
  }
  function diameterFor(id) {
    const game = GAMES.find((entry) => entry.id === id);
    if (mobile) return game.size * .66 * Math.min(1, width / 342);
    return game.size * Math.min(1.13, Math.max(.73, width / 1325));
  }
  function clampPosition(node, point) {
    const halfWidth = node.offsetWidth / 2 + (mobile ? 12 : 40);
    const halfHeight = (node.offsetHeight || halfWidth * 2 + 75) / 2;
    const top = mobile ? 365 : 56;
    const bottom = mobile ? height - 305 : height - 50;
    return {
      x: Math.min(width - halfWidth - 6, Math.max(halfWidth + 6, point.x)),
      y: Math.min(bottom - halfHeight, Math.max(top + halfHeight, point.y))
    };
  }
  function putNode(node, point) {
    const clamped = clampPosition(node, point);
    node.style.setProperty('--x', `${clamped.x}px`);
    node.style.setProperty('--y', `${clamped.y}px`);
    node.dataset.x = clamped.x;
    node.dataset.y = clamped.y;
    return clamped;
  }
  function saveNode(node) {
    if (!positions[layoutKey] || typeof positions[layoutKey] !== 'object') positions[layoutKey] = {};
    positions[layoutKey][node.dataset.game] = { x: Number(node.dataset.x) / width, y: Number(node.dataset.y) / height };
    storage.set('positions-v1', positions);
  }
  function layoutWorlds() {
    width = universe.clientWidth;
    height = universe.clientHeight;
    mobile = window.innerWidth <= 600;
    layoutKey = mobile ? 'mobile' : width < 720 ? 'tablet' : 'desktop';
    for (const node of worldNodes) {
      node.style.setProperty('--diameter', `${diameterFor(node.dataset.game)}px`);
      const saved = positions[layoutKey]?.[node.dataset.game];
      const point = saved && Number.isFinite(saved.x) && Number.isFinite(saved.y) ? saved : defaultPosition(node.dataset.game);
      putNode(node, { x: point.x * width, y: point.y * height });
    }
  }

  for (const node of worldNodes) {
    const link = node.querySelector('a');
    node.addEventListener('pointerenter', () => { if (!activeDrag) selectGame(node.dataset.game); });
    link.addEventListener('focus', () => selectGame(node.dataset.game));
    link.addEventListener('dragstart', (event) => event.preventDefault());
    link.addEventListener('pointerdown', (event) => {
      if (event.button !== 0 || !event.isPrimary || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey || activeDrag) return;
      suppressClick = null;
      clearTimeout(suppressTimer);
      activeDrag = { node, link, pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, originX: Number(node.dataset.x), originY: Number(node.dataset.y), moved: false };
      selectGame(node.dataset.game);
    });
    link.addEventListener('click', (event) => {
      if (suppressClick === node) { event.preventDefault(); suppressClick = null; }
    });
    link.addEventListener('keydown', (event) => {
      const directions = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
      const direction = directions[event.key];
      if (!direction || event.ctrlKey || event.metaKey || event.altKey) return;
      event.preventDefault();
      const step = event.shiftKey ? 30 : 12;
      putNode(node, { x: Number(node.dataset.x) + direction[0] * step, y: Number(node.dataset.y) + direction[1] * step });
      saveNode(node);
      announce(`${GAMES.find((game) => game.id === node.dataset.game).name} 位置已更新`);
    });
  }
  window.addEventListener('pointermove', (event) => {
    if (!activeDrag || activeDrag.pointerId !== event.pointerId) return;
    const drag = activeDrag;
    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;
    if (!drag.moved && Math.hypot(dx, dy) < 7) return;
    if (!drag.moved) {
      drag.moved = true;
      drag.link.setPointerCapture(event.pointerId);
      drag.node.classList.add('dragging');
      document.body.classList.add('is-dragging');
    }
    event.preventDefault();
    const point = putNode(drag.node, { x: drag.originX + dx, y: drag.originY + dy });
    $('#coordinates').textContent = `X ${String(Math.round(point.x)).padStart(3, '0')} · Y ${String(Math.round(point.y)).padStart(3, '0')}`;
  }, { passive: false });
  function finishDrag(cancel = false) {
    if (!activeDrag) return;
    const drag = activeDrag;
    activeDrag = null;
    if (drag.moved) {
      if (cancel) putNode(drag.node, { x: drag.originX, y: drag.originY });
      else saveNode(drag.node);
      suppressClick = drag.node;
      clearTimeout(suppressTimer);
      suppressTimer = setTimeout(() => { suppressClick = null; }, 450);
      announce(cancel ? '已取消移动' : '气泡位置已保存');
    }
    drag.node.classList.remove('dragging');
    document.body.classList.remove('is-dragging');
    if (drag.link.hasPointerCapture(drag.pointerId)) drag.link.releasePointerCapture(drag.pointerId);
  }
  window.addEventListener('pointerup', (event) => { if (activeDrag?.pointerId === event.pointerId) finishDrag(); });
  window.addEventListener('pointercancel', (event) => { if (activeDrag?.pointerId === event.pointerId) finishDrag(true); });
  window.addEventListener('blur', () => finishDrag(true));
  $('#reset-map').addEventListener('click', () => {
    finishDrag(true);
    delete positions[layoutKey];
    storage.set('positions-v1', positions);
    layoutWorlds();
    $('#coordinates').textContent = 'X 000 · Y 000';
    announce('气泡已回到初始位置');
  });

  document.querySelectorAll('[data-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      finishDrag(true);
      activeFilter = button.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach((filter) => {
        const active = filter === button; filter.classList.toggle('active', active); filter.setAttribute('aria-pressed', String(active));
      });
      worldNodes.forEach((node) => { node.hidden = activeFilter !== 'all' && node.dataset.category !== activeFilter; });
      const visible = GAMES.filter((game) => activeFilter === 'all' || game.category === activeFilter);
      if (!visible.some((game) => game.id === selectedGame)) selectGame(visible[0].id);
      layoutWorlds();
      announce(`显示 ${visible.length} 个游戏世界`);
    });
  });

  // Dialogs retain real links; no routing library or remote requests are required.
  const archive = $('#archive-dialog');
  const help = $('#help-dialog');
  let dialogTrigger = null;
  function openDialog(dialog, trigger) {
    dialogTrigger = trigger;
    document.body.classList.add('dialog-open');
    dialog.showModal();
    if (dialog === archive) { $('#game-search').value = ''; renderResults(''); $('#game-search').focus(); }
  }
  [archive, help].forEach((dialog) => {
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); dialogTrigger?.focus(); });
  });
  $('#search-open').addEventListener('click', (event) => openDialog(archive, event.currentTarget));
  $('#archive-open').addEventListener('click', (event) => openDialog(archive, event.currentTarget));
  $('#list-open').addEventListener('click', (event) => openDialog(archive, event.currentTarget));
  $('#help-open').addEventListener('click', (event) => openDialog(help, event.currentTarget));
  function renderResults(query) {
    const terms = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    const games = GAMES.filter((game) => terms.every((term) => `${game.name} ${game.genre} ${game.keywords}`.toLocaleLowerCase().includes(term)));
    const entries = games.map((game) => {
      const article = document.createElement('article'); article.className = 'archive-result';
      const img = document.createElement('img'); img.src = game.image; img.alt = ''; img.width = 67; img.height = 67;
      const content = document.createElement('div');
      const heading = document.createElement('div'); heading.className = 'result-heading';
      const title = document.createElement('h3');
      const titleLink = document.createElement('a'); titleLink.href = game.links[0].href; titleLink.textContent = game.name; title.append(titleLink);
      const number = document.createElement('span'); number.textContent = game.number; heading.append(title, number);
      const description = document.createElement('p'); description.textContent = `${game.genre} · ${game.summary}`;
      const links = document.createElement('div'); links.className = 'result-links'; links.append(...game.links.map((link) => linkElement(link)));
      content.append(heading, description, links); article.append(img, content); return article;
    });
    $('#archive-results').replaceChildren(...entries);
    $('#search-empty').hidden = games.length > 0;
    $('#search-summary').textContent = `${games.length} 个世界 · ${games.reduce((count, game) => count + game.links.length, 0)} 个探索入口`;
  }
  $('#game-search').addEventListener('input', (event) => renderResults(event.target.value));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      finishDrag(true);
      const open = archive.open ? archive : help.open ? help : null;
      if (open) { event.preventDefault(); open.close(); }
      return;
    }
    if (event.key !== '/' || event.ctrlKey || event.metaKey || event.altKey || archive.open || help.open || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName) || event.target.isContentEditable) return;
    event.preventDefault(); openDialog(archive, $('#search-open'));
  });

  // Deliberately static: no continuous animation, parallax, or particle loop.
  let resizeFrame;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => { finishDrag(true); layoutWorlds(); });
  });
  window.addEventListener('pageshow', () => { finishDrag(true); layoutWorlds(); });
  selectGame(GAMES[0].id);
  layoutWorlds();
})();
