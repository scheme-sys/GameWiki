/* Grim Soul 玩家图鉴 · 无外部依赖，可离线浏览。 */
(() => {
  'use strict';

  const ICONS = {
    home: '<path d="m3 10 9-7 9 7M5 9v12h5v-7h4v7h5V9"/>',
    book: '<path d="M12 5c-3-2-6-2-9-1v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-3-1-6-1-9 1Zm0 0v15"/><path d="m6 8 3 1m6 0 3-1M6 12l3 1m6 0 3-1"/>',
    sword: '<path d="m5 3 5 2 10 13-2 2L5 10 3 5Zm-1 1 14 14m-4 2 6-6m-3 6 3 3m-1-4 3 3"/>',
    shield: '<path d="m12 3 8 3v6c0 5-5 8-8 10-3-2-8-5-8-10V6Zm0 0v19M4 9h16"/>',
    skull: '<path d="M6 16c-3-2-4-5-3-8C4 4 7 2 12 2s8 2 9 6c1 3 0 6-3 8v5H6Zm3 1v4m6-4v4m-4-7 1-2 1 2"/><path d="M5 9h4v3H6Zm10 0h4l-1 3h-3Z"/>',
    flask: '<path d="M9 3h6m-5 0v6L5 17c-1 2 0 4 2 4h10c2 0 3-2 2-4l-5-8V3M7 14h10"/><path d="M9 17h1m4 1h1"/>',
    anvil: '<path d="M3 8h17v4h-6v4l3 4H6l3-4v-4H6L3 8Zm17 0 2-3h-7v3M5 20h13"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-2 6-6 2 2-6Zm-4-6V1m0 22v-1M2 12H1m22 0h-1"/>',
    paw: '<path d="M8 14c1-3 2-4 4-4s3 1 4 4c1 1 3 2 3 4 0 4-4 2-7 2s-7 2-7-2c0-2 2-3 3-4Z"/><ellipse cx="4" cy="10" rx="2" ry="3"/><ellipse cx="9" cy="5" rx="2" ry="3"/><ellipse cx="15" cy="5" rx="2" ry="3"/><ellipse cx="20" cy="10" rx="2" ry="3"/>',
    spark: '<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3Zm-7 0v4M3 4h4m12 14v4m-2-2h4"/>',
    castle: '<path d="M3 21V8h3v3h3V8h6v3h3V8h3v13ZM9 8V3h6v5M10 21v-5h4v5M2 21h20"/>',
    bookmark: '<path d="M6 3h12v19l-6-4-6 4Z"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    arrow: '<path d="M4 12h16m-5-5 5 5-5 5"/>',
    left: '<path d="m14 5-7 7 7 7"/>',
    right: '<path d="m10 5 7 7-7 7"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="m3 17 6-6 4 4 3-3 5 5"/><circle cx="16" cy="8" r="1.5"/>',
    link: '<path d="m10 7 3-3a5 5 0 0 1 7 7l-3 3M7 10l-3 3a5 5 0 0 0 7 7l3-3m-6-1 8-8"/>',
    scroll: '<path d="M6 4h12a3 3 0 0 1 3 3v2h-5m-10-5a3 3 0 0 0-3 3v1h3V4Zm0 0v15a3 3 0 0 0 6 0v-2h9v2a3 3 0 0 1-3 3H9M10 8h6m-6 4h7"/>',
    lantern: '<path d="M9 5a3 3 0 0 1 6 0M7 5h10l2 4-2 11H7L5 9Zm-2 4h14M8 23h8M9 20V9m6 11V9"/>'
  };
  const CATEGORIES = {
    weapons: { name: '武器图鉴', short: '武器', icon: 'sword', en: 'THE ARMOURY', description: '从简陋的木棒到精良的利刃，寻找下一场战斗的伙伴。' },
    armor: { name: '装备图鉴', short: '装备', icon: 'shield', en: 'ARMOUR & EQUIPMENT', description: '查阅防具、套装与装备，为旅途增添一分守护。' },
    monsters: { name: '怪物与人物', short: '怪物与人物', icon: 'skull', en: 'THE BESTIARY', description: '查阅怪物、首领、野兽与人物档案，了解基础属性、不同形态与出没记录。' },
    items: { name: '物品与资源', short: '物品', icon: 'flask', en: 'SUPPLIES & RESOURCES', description: '食物、药剂与各类资源，每一件物品都有它的用途。' },
    crafting: { name: '制作与配方', short: '制作', icon: 'anvil', en: 'THE WORKSHOP', description: '从原料到成品，翻阅工艺、配方与制作资料。' },
    locations: { name: '地点与探索', short: '地点', icon: 'compass', en: 'BEYOND THE FOG', description: '踏入迷雾之前，先了解旅途中的地点与探索区域。' },
    pets: { name: '宠物与坐骑', short: '伙伴', icon: 'paw', en: 'FAITHFUL COMPANIONS', description: '认识与你并肩同行的伙伴，查阅宠物与坐骑资料。' },
    skills: { name: '技能与能力', short: '技能', icon: 'spark', en: 'KNOWLEDGE & ABILITIES', description: '积累生存的经验，查阅技能、能力与相关效果。' },
    buildings: { name: '建筑与设施', short: '建筑', icon: 'castle', en: 'A PLACE TO CALL HOME', description: '在荒芜之地建立庇护所，了解建筑与生产设施。' },
    quests: { name: '任务与剧情', short: '任务', icon: 'scroll', en: 'TALES OF THE PLAGUELANDS', description: '翻阅任务故事、行动目标与奖励，追寻瘟疫之地的往事。' },
    guides: { name: '生存手册', short: '手册', icon: 'lantern', en: 'THE ART OF SURVIVAL', description: '从游戏中的提示出发，记下放逐者需要掌握的生存知识。' }
  };
  const data = window.GRIM_DATA;
  if (!data) return;
  const boot = data.boot;
  let entries = boot.home;
  const byId = data.records;
  const meta = boot.meta;
  const counts = boot.counts;
  const imageCache = new Set();
  let searchIndex = Object.create(null);
  let routeVersion = 0;
  const PAGE_SIZE = 24;
  const storageKey = 'grim-soul-wiki-favorites-v1';
  let favorites = readFavorites();
  let state = { mode: 'home', category: 'all', subcategory: 'all', rarity: 'all', sort: 'default', query: '', images: false, page: 1 };
  let featureCategory = 'weapons';
  let returnHash = '#home';
  let searchTimer;
  let toastTimer;
  let dialogEntryId = null;
  let dialogTrigger = null;
  let pendingFocusId = null;
  let programmaticClose = false;
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const dialog = $('#entry-dialog');

  function icon(name, extra = '') {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"${extra}>${ICONS[name] || ICONS.book}</svg>`;
  }
  function escape(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  function normalize(text) {
    return String(text || '').normalize('NFKC').toLocaleLowerCase('zh-CN').trim();
  }
  function number(value) {
    return Number(value).toLocaleString('zh-CN');
  }
  function safeImage(entry) {
    return typeof entry.image === 'string' && /^assets\/[a-z0-9_./-]+\.(webp|png|jpg|jpeg|svg)$/i.test(entry.image) && !entry.image.includes('..') && !imageCache.has(entry.image) ? entry.image : '';
  }
  function category(entry) {
    return CATEGORIES[entry.category] || { name: '其他资料', short: '资料', icon: 'book' };
  }
  function placeholder(entry) {
    return `<span class="missing-image">${icon(category(entry).icon)}<span>图像待补</span></span>`;
  }
  function entryImage(entry, lazy = true) {
    const src = safeImage(entry);
    return src ? `<img src="${escape(src)}" alt="${escape(entry.name)}" ${lazy ? 'loading="lazy"' : 'loading="eager"'} decoding="async" data-fallback="${escape(category(entry).icon)}">` : placeholder(entry);
  }
  function rarityClass(value) {
    const v = normalize(value);
    if (/传说|传奇|神话|legendary|mythic/.test(v)) return 'legendary';
    if (/史诗|epic/.test(v)) return 'epic';
    if (/稀有|rare/.test(v) && !/uncommon/.test(v)) return 'rare';
    if (/精良|优秀|罕见|非凡|uncommon/.test(v)) return 'uncommon';
    return 'common';
  }
  function rarityRank(entry) {
    return { legendary: 5, epic: 4, rare: 3, uncommon: 2, common: 1 }[rarityClass(entry.rarity)];
  }
  function readFavorites() {
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey) || '[]');
      return new Set(Array.isArray(stored) ? stored.filter(data.known) : []);
    } catch (_) { return new Set(); }
  }
  function saveFavorites() {
    try { localStorage.setItem(storageKey, JSON.stringify([...favorites])); return true; }
    catch (_) { return false; }
  }
  function toast(message) {
    const node = $('#toast');
    node.textContent = message;
    node.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { node.hidden = true; }, 2800);
  }
  function renderIcons(root = document) {
    root.querySelectorAll('[data-icon]').forEach(node => { node.innerHTML = icon(node.dataset.icon); });
  }
  const entityCode = entry => window.LCZEntityCode.render(entry.entityCodes, { label: entry.category === 'crafting' ? '配方代码' : '实体代码' });
  function card(entry) {
    const saved = favorites.has(entry.id);
    const stats = (Array.isArray(entry.stats) ? entry.stats : []).filter(stat => stat && stat.label && stat.value != null).slice(0, 2);
    return `<article class="entry-card" data-card="${escape(entry.id)}">
      ${entry.rarity ? `<span class="rarity-label" data-rarity="${rarityClass(entry.rarity)}">${escape(entry.rarity)}</span>` : ''}
      <button class="card-favorite${saved ? ' saved' : ''}" type="button" data-favorite="${escape(entry.id)}" aria-label="${saved ? '取消收藏' : '收藏'}：${escape(entry.name)}" aria-pressed="${saved}">${icon('bookmark')}</button>
      <a class="entry-open" href="#entry/${encodeURIComponent(entry.id)}" data-entry="${escape(entry.id)}" tabindex="-1" aria-label="查看${escape(entry.name)}图鉴">
        <div class="entry-image">${entryImage(entry)}</div>
      </a>
        <div class="entry-copy"><span class="entry-category">${escape(entry.subcategory || category(entry).name)}</span><h3><a href="#entry/${encodeURIComponent(entry.id)}" data-entry="${escape(entry.id)}">${escape(entry.name)}</a></h3>${entityCode(entry)}
          <div class="entry-card-stats">${stats.length ? stats.map(stat => `<span>${escape(stat.label)}<b>${escape(stat.value)}</b></span>`).join('') : '<span class="card-hint">查看图鉴详情</span>'}</div>
        </div>
    </article>`;
  }
  function renderHome() {
    const imageCount = boot.imageCount;
    $('#overview-stats').innerHTML = [
      { value: boot.total, label: '收录条目', icon: 'book' },
      { value: counts.weapons + counts.armor, label: '武器装备', icon: 'sword' },
      { value: counts.monsters, label: '怪物与人物', icon: 'skull' },
      { value: imageCount, label: '附图条目', icon: 'image' }
    ].map(stat => `<div class="overview-stat">${icon(stat.icon)}<div><strong>${number(stat.value)}</strong><span>${stat.label}</span></div></div>`).join('');
    $('#chapter-grid').innerHTML = Object.entries(CATEGORIES).map(([key, value], index) => `<a href="#category/${key}" class="chapter-card"><span class="chapter-symbol">${icon(value.icon)}</span><div><h3>${value.name}</h3><p>${number(counts[key])} 篇图鉴 · ${value.en.split(' ').slice(0, 2).join(' ')}</p></div><span class="chapter-arrow">${icon('arrow')}</span><span class="chapter-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span></a>`).join('');
    renderFeatured();
    const enemies = pickFeatured('monsters', 3);
    $('#bestiary-grid').innerHTML = enemies.length ? enemies.map(card).join('') : '<p class="detail-no-data">怪物资料尚在整理。</p>';
  }
  function pickFeatured(key, limit) {
    return (boot.featured[key] || []).map(id => byId.get(id)).filter(Boolean).slice(0, limit);
  }
  function renderFeatured() {
    const selected = pickFeatured(featureCategory, 4);
    $('#featured-grid').innerHTML = selected.length ? selected.map(card).join('') : '<p class="detail-no-data">本篇资料尚在整理。</p>';
    $$('.feature-tab').forEach(tab => {
      const active = tab.dataset.feature === featureCategory;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', active);
      tab.tabIndex = active ? 0 : -1;
    });
    $('#featured-grid').setAttribute('aria-labelledby', `feature-${featureCategory}`);
  }
  function baseEntries() {
    return entries.filter(entry => (state.mode !== 'favorites' || favorites.has(entry.id)) && (state.category === 'all' || entry.category === state.category));
  }
  function populateFilters() {
    const pool = baseEntries();
    const subcategories = [...new Set(pool.map(e => e.subcategory).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'zh-CN'));
    const rarities = [...new Set(pool.map(e => e.rarity).filter(Boolean))].sort((a, b) => rarityRank({ rarity: b }) - rarityRank({ rarity: a }));
    $('#subcategory-filter').innerHTML = '<option value="all">全部分类</option>' + subcategories.map(value => `<option value="${escape(value)}">${escape(value)}</option>`).join('');
    $('#rarity-filter').innerHTML = '<option value="all">全部品质</option>' + rarities.map(value => `<option value="${escape(value)}">${escape(value)}</option>`).join('');
    if (!subcategories.includes(state.subcategory)) state.subcategory = 'all';
    if (!rarities.includes(state.rarity)) state.rarity = 'all';
    $('#subcategory-filter').value = state.subcategory;
    $('#rarity-filter').value = state.rarity;
    $('#category-filter').value = state.category;
    $('#sort-filter').value = state.sort;
    $('#image-filter').checked = state.images;
  }
  function renderCatalog() {
    const config = state.category === 'all' ? null : CATEGORIES[state.category];
    const isSaved = state.mode === 'favorites';
    $('#catalog-title').textContent = isSaved ? '收藏图鉴' : config ? config.name : '全部图鉴';
    $('#catalog-eyebrow').textContent = isSaved ? 'YOUR PERSONAL FIELD NOTES' : config ? config.en : 'THE FIELD GUIDE';
    $('#catalog-description').textContent = isSaved ? '把常用的资料收进手记，在下一次远行前随时翻阅。' : config ? config.description : '查阅瘟疫之地的武器、装备、资源与生灵。';
    $('#catalog-emblem').innerHTML = icon(isSaved ? 'bookmark' : config ? config.icon : 'book');
    populateFilters();
    const tokens = normalize(state.query).split(/\s+/).filter(Boolean);
    let filtered = baseEntries().filter(entry =>
      (state.subcategory === 'all' || entry.subcategory === state.subcategory) &&
      (state.rarity === 'all' || entry.rarity === state.rarity) &&
      (!state.images || safeImage(entry)) &&
      tokens.every(token => (searchIndex[entry.id] || '').includes(token))
    );
    if (state.sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name, 'zh-CN', { numeric: true }));
    else if (state.sort === 'images') filtered.sort((a, b) => Number(Boolean(safeImage(b))) - Number(Boolean(safeImage(a))));
    else if (state.sort === 'rarity') filtered.sort((a, b) => rarityRank(b) - rarityRank(a));
    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    state.page = Math.max(1, Math.min(state.page, totalPages));
    const offset = (state.page - 1) * PAGE_SIZE;
    const pageEntries = filtered.slice(offset, offset + PAGE_SIZE);
    $('#catalog-grid').innerHTML = pageEntries.map(card).join('');
    $('#result-summary').innerHTML = `找到 <strong>${number(filtered.length)}</strong> 篇图鉴${filtered.length ? `<span> · 第 ${number(offset + 1)}–${number(offset + pageEntries.length)} 篇</span>` : ''}`;
    $('#empty-state').hidden = filtered.length > 0;
    $('#empty-description').textContent = isSaved && !favorites.size ? '点击图鉴上的书签，将常用资料加入你的收藏。收藏保存在当前浏览器。' : entries.length ? '试试其他关键词，或减少筛选条件。' : '图鉴数据尚未加载，请确认已保留完整的页面文件夹。';
    const queryNode = $('#active-query');
    queryNode.hidden = !state.query;
    queryNode.innerHTML = state.query ? `<span>正在查找：<mark>${escape(state.query)}</mark></span><button type="button" data-clear-query>清除搜索</button>` : '';
    renderPagination(totalPages, filtered.length);
  }
  function renderPagination(totalPages, length) {
    const node = $('#pagination');
    node.hidden = totalPages < 2;
    if (totalPages < 2) { node.innerHTML = ''; return; }
    const pages = new Set([1, totalPages, state.page - 1, state.page, state.page + 1]);
    if (state.page <= 2) pages.add(3);
    if (state.page >= totalPages - 1) pages.add(totalPages - 2);
    const sorted = [...pages].filter(page => page > 0 && page <= totalPages).sort((a, b) => a - b);
    let previous = 0;
    const buttons = sorted.map(page => {
      const gap = previous && page - previous > 1 ? '<span class="page-ellipsis" aria-hidden="true">…</span>' : '';
      previous = page;
      return `${gap}<button type="button" class="page-button${page === state.page ? ' active' : ''}" data-page="${page}" aria-label="第 ${page} 页"${page === state.page ? ' aria-current="page"' : ''}>${number(page)}</button>`;
    });
    node.innerHTML = `<button class="page-button" type="button" data-page="${state.page - 1}" aria-label="上一页"${state.page === 1 ? ' disabled' : ''}>${icon('left')}</button>${buttons.join('')}<button class="page-button" type="button" data-page="${state.page + 1}" aria-label="下一页"${state.page === totalPages ? ' disabled' : ''}>${icon('right')}</button>`;
    node.setAttribute('aria-label', `图鉴分页，共 ${number(length)} 条，${totalPages} 页`);
  }
  function makeHash(overrides = {}) {
    const next = { ...state, ...overrides };
    const path = next.mode === 'home' ? 'home' : next.mode === 'favorites' ? 'favorites' : next.category !== 'all' ? `category/${next.category}` : 'catalog';
    const params = new URLSearchParams();
    if (next.mode === 'favorites' && next.category !== 'all') params.set('category', next.category);
    if (next.query) params.set('q', next.query);
    if (next.subcategory !== 'all') params.set('type', next.subcategory);
    if (next.rarity !== 'all') params.set('rarity', next.rarity);
    if (next.sort !== 'default') params.set('sort', next.sort);
    if (next.images) params.set('images', '1');
    if (next.page > 1) params.set('page', String(next.page));
    return `#${path}${params.size ? `?${params.toString()}` : ''}`;
  }
  function navigate(overrides, replace = false) {
    const hash = makeHash(overrides);
    if (replace || location.hash === hash) {
      try { history.replaceState(null, '', hash); } catch (_) { location.hash = hash; }
      route();
    } else location.hash = hash;
  }
  function parseHash() {
    const hash = location.hash.replace(/^#/, '') || 'home';
    const question = hash.indexOf('?');
    return { path: question < 0 ? hash : hash.slice(0, question), params: new URLSearchParams(question < 0 ? '' : hash.slice(question + 1)) };
  }
  function loadState(node, message, retry = false) {
    node.innerHTML = `<div class="load-state" role="status"><p>${escape(message)}</p>${retry ? '<button class="button button-outline" type="button" data-retry>重新加载</button>' : ''}</div>`;
  }
  async function route() {
    const version = ++routeVersion;
    const { path, params } = parseHash();
    if (path.startsWith('entry/')) {
      let id;
      try { id = decodeURIComponent(path.slice(6)); } catch (_) { id = ''; }
      if (data.known(id)) {
        if (!dialog.open) dialogTrigger = document.activeElement;
        dialogEntryId = id;
        loadState($('#detail-content'), '正在翻阅这篇图鉴…');
        $('#detail-content').setAttribute('aria-busy', 'true');
        dialog.setAttribute('aria-label', '图鉴详情');
        dialog.removeAttribute('aria-labelledby');
        if (!dialog.open) { if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', ''); }
        document.body.classList.add('dialog-open');
        try {
          const entry = await data.entry(id);
          await data.summaries((entry.related || []).filter(other => other !== id).slice(0, 30));
          if (version !== routeVersion) return;
          openDetail(entry);
          $('#detail-content').setAttribute('aria-busy', 'false');
          dialog.setAttribute('aria-labelledby', 'detail-name');
          dialog.removeAttribute('aria-label');
        } catch (_) {
          if (version !== routeVersion) return;
          $('#detail-content').setAttribute('aria-busy', 'false');
          loadState($('#detail-content'), '这篇图鉴暂时未能加载，请检查连接后重试。', true);
        }
        return;
      }
      toast('未找到这篇图鉴，已返回图鉴目录。');
      navigate({ mode: 'catalog', category: 'all', page: 1 }, true);
      return;
    }
    closeDetail(false);
    const previousMode = state.mode;
    const categoryKey = path.startsWith('category/') ? path.slice(9) : params.get('category');
    state = {
      mode: path === 'home' ? 'home' : path === 'favorites' ? 'favorites' : 'catalog',
      category: Object.hasOwn(CATEGORIES, categoryKey) ? categoryKey : 'all',
      subcategory: params.get('type') || 'all',
      rarity: params.get('rarity') || 'all',
      sort: ['default', 'name', 'images', 'rarity'].includes(params.get('sort')) ? params.get('sort') : 'default',
      query: (params.get('q') || '').slice(0, 200),
      images: params.get('images') === '1',
      page: Math.max(1, Number.parseInt(params.get('page'), 10) || 1)
    };
    returnHash = location.hash || '#home';
    $('#home-view').hidden = state.mode !== 'home';
    $('#catalog-view').hidden = state.mode === 'home';
    if ($('#global-search').value !== state.query) $('#global-search').value = state.query;
    const activeNav = state.mode === 'home' ? 'home' : state.mode === 'favorites' ? 'favorites' : state.category;
    $$('.nav-item').forEach(item => {
      const active = item.dataset.nav === activeNav;
      item.classList.toggle('active', active);
      if (active) item.setAttribute('aria-current', 'page'); else item.removeAttribute('aria-current');
    });
    const title = state.mode === 'home' ? '手记首页' : state.mode === 'favorites' ? '收藏图鉴' : CATEGORIES[state.category] ? CATEGORIES[state.category].name : '全部图鉴';
    $('#breadcrumb-current').textContent = title;
    document.title = `${title} · Grim Soul 放逐者手记`;
    closeMenu();
    if (previousMode !== state.mode && document.activeElement !== $('#global-search')) window.scrollTo({ top: 0, behavior: 'instant' });
    if (state.mode !== 'home') {
      $('#catalog-title').textContent = title;
      $('#catalog-grid').setAttribute('aria-busy', 'true');
      $('#empty-state').hidden = true;
      $('#pagination').hidden = true;
      $('#result-summary').textContent = '正在加载图鉴…';
      $('#active-query').hidden = true;
      loadState($('#catalog-grid'), '正在翻开这一篇章…');
      try {
        const [rows, index] = await Promise.all([
          state.mode === 'favorites' ? data.summaries([...favorites]) : state.category === 'all' ? data.all() : data.category(state.category),
          state.query ? data.search() : Promise.resolve(null)
        ]);
        if (version !== routeVersion) return;
        entries = rows.sort((a, b) => boot.lookup[a.id] - boot.lookup[b.id]);
        if (index) searchIndex = index;
        renderCatalog();
      } catch (_) {
        if (version !== routeVersion) return;
        $('#result-summary').textContent = '资料暂时未能加载';
        loadState($('#catalog-grid'), '请检查连接，然后重新加载这一篇章。', true);
      }
      if (version !== routeVersion) return;
      $('#catalog-grid').setAttribute('aria-busy', 'false');
    } else renderHome();
    if (pendingFocusId) {
      const view = state.mode === 'home' ? $('#home-view') : $('#catalog-view');
      const link = view.querySelector(`[data-entry="${CSS.escape(pendingFocusId)}"]`);
      if (link) link.focus({ preventScroll: true });
      pendingFocusId = null;
    }
  }
  function detailSection(section) {
    if (!section || (!section.text && !(Array.isArray(section.rows) && section.rows.length))) return '';
    return `<section class="detail-section"><h3>${escape(section.title || '详细资料')}</h3>${section.text ? `<p>${escape(section.text)}</p>` : ''}${Array.isArray(section.rows) && section.rows.length ? `<dl class="detail-rows">${section.rows.filter(row => row && row.label && row.value != null).map(row => `<div class="detail-row"><dt>${escape(row.label)}</dt><dd>${escape(row.value)}</dd></div>`).join('')}</dl>` : ''}</section>`;
  }
  function openDetail(entry) {
    const saved = favorites.has(entry.id);
    const stats = Array.isArray(entry.stats) ? entry.stats.filter(s => s && s.label && s.value != null) : [];
    const sections = Array.isArray(entry.sections) ? entry.sections : [];
    const related = Array.isArray(entry.related) ? entry.related.map(id => byId.get(id)).filter(e => e && e.id !== entry.id).slice(0, 30) : [];
    if (!dialog.open) dialogTrigger = document.activeElement;
    dialogEntryId = entry.id;
    $('#detail-content').innerHTML = `<div class="detail-top"><div class="detail-art">${entryImage(entry, false)}</div><div class="detail-heading"><div class="detail-kicker"><a href="#category/${escape(entry.category)}">${escape(category(entry).name)}</a><span>${escape(entry.subcategory || '')}</span>${entry.rarity ? `<span class="rarity-label" data-rarity="${rarityClass(entry.rarity)}">${escape(entry.rarity)}</span>` : ''}</div><h2 id="detail-name">${escape(entry.name)}</h2>${entityCode(entry)}${entry.english ? `<p class="detail-english" lang="en">${escape(entry.english)}</p>` : ''}${entry.summary ? `<p class="detail-summary">${escape(entry.summary)}</p>` : ''}<div class="detail-actions"><button type="button" class="button button-outline${saved ? ' saved' : ''}" data-favorite="${escape(entry.id)}" data-detail-favorite aria-pressed="${saved}">${icon('bookmark')}<span>${saved ? '已加入收藏' : '加入收藏'}</span></button><button class="button button-outline" id="copy-link" type="button">${icon('link')}复制图鉴链接</button></div></div></div>
      <div class="detail-body">${stats.length ? `<dl class="detail-stats">${stats.map(stat => `<div class="detail-stat"><dt>${escape(stat.label)}</dt><dd>${escape(stat.value)}</dd></div>`).join('')}</dl>` : ''}${sections.map(detailSection).join('')}${!stats.length && !sections.length ? '<p class="detail-no-data">本篇已收录名称与基础资料，更多属性和获取方式仍待补充。</p>' : ''}${related.length ? `<section class="detail-section"><h3>关联图鉴</h3><div class="related-list">${related.map(other => `<a class="related-button" href="#entry/${encodeURIComponent(other.id)}" data-entry="${escape(other.id)}">${safeImage(other) ? `<img src="${escape(safeImage(other))}" alt="" loading="lazy" data-fallback="${escape(category(other).icon)}">` : icon(category(other).icon)}${escape(other.name)}</a>`).join('')}</div></section>` : ''}<p class="detail-footnote">基于 ${escape(meta.version || '8.4.1')} 游戏资料整理。活动开放与实战数值以游戏为准；未确认的信息不作推断。</p></div>`;
    if (!dialog.open) {
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    }
    document.body.classList.add('dialog-open');
    dialog.scrollTop = 0;
    $('#dialog-close').focus({ preventScroll: true });
    document.title = `${entry.name} · Grim Soul 图鉴`;
  }
  function closeDetail(restoreRoute = true) {
    if (restoreRoute) ++routeVersion;
    const wasOpen = dialog.open;
    if (restoreRoute && dialogEntryId) pendingFocusId = dialogEntryId;
    if (wasOpen) {
      programmaticClose = true;
      if (typeof dialog.close === 'function') dialog.close(); else dialog.removeAttribute('open');
      queueMicrotask(() => { programmaticClose = false; });
    }
    dialogEntryId = null;
    document.body.classList.remove('dialog-open');
    if (restoreRoute && parseHash().path.startsWith('entry/')) location.hash = returnHash;
    if (wasOpen && dialogTrigger && dialogTrigger.isConnected) dialogTrigger.focus({ preventScroll: true });
  }
  function toggleFavorite(id) {
    if (!byId.has(id)) return;
    const wasSaved = favorites.has(id);
    if (wasSaved) favorites.delete(id); else favorites.add(id);
    const persisted = saveFavorites();
    updateFavoriteUI();
    if (state.mode === 'favorites') renderCatalog();
    toast(persisted ? (wasSaved ? '已从收藏中移除' : '已收入你的手记') : '本次浏览已更新收藏；浏览器未允许保存到本地。');
  }
  function updateFavoriteUI() {
    $('#favorite-count').textContent = number(favorites.size);
    $$('[data-favorite]').forEach(button => {
      const saved = favorites.has(button.dataset.favorite);
      const entry = byId.get(button.dataset.favorite);
      button.classList.toggle('saved', saved);
      button.setAttribute('aria-pressed', saved);
      if (button.hasAttribute('data-detail-favorite')) button.querySelector('span').textContent = saved ? '已加入收藏' : '加入收藏';
      else if (entry) button.setAttribute('aria-label', `${saved ? '取消收藏' : '收藏'}：${entry.name}`);
    });
  }
  async function copyLink() {
    const url = location.href;
    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(url);
      toast('图鉴链接已复制');
    } catch (_) {
      const input = document.createElement('textarea');
      input.value = url;
      input.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;';
      dialog.appendChild(input);
      input.focus();
      input.select();
      let copied = false;
      try { copied = document.execCommand('copy'); } catch (_) { /* Browser may deny clipboard access. */ }
      input.remove();
      $('#copy-link').focus();
      toast(copied ? '图鉴链接已复制' : '浏览器未允许复制，请复制地址栏中的图鉴链接。');
    }
  }
  function closeMenu() {
    $('#sidebar').classList.remove('open');
    $('#mobile-shade').hidden = true;
    $('#menu-toggle').setAttribute('aria-expanded', 'false');
    $('#menu-toggle').setAttribute('aria-label', '展开导航');
    document.body.classList.remove('menu-open');
    if (window.matchMedia('(max-width: 800px)').matches) $('#sidebar').inert = true;
  }
  function toggleMenu() {
    if ($('#sidebar').classList.contains('open')) { closeMenu(); return; }
    $('#sidebar').inert = false;
    $('#sidebar').classList.add('open');
    $('#mobile-shade').hidden = false;
    $('#menu-toggle').setAttribute('aria-expanded', 'true');
    $('#menu-toggle').setAttribute('aria-label', '关闭导航');
    document.body.classList.add('menu-open');
    $('#sidebar .nav-item.active').focus();
  }
  function resetFilters() {
    navigate({ mode: state.mode === 'home' ? 'catalog' : state.mode, subcategory: 'all', rarity: 'all', sort: 'default', query: '', images: false, page: 1 });
  }
  function runSearch() {
    clearTimeout(searchTimer);
    const query = $('#global-search').value.trim().slice(0, 200);
    const replaceSearch = state.mode === 'catalog' && state.category === 'all' && Boolean(state.query);
    navigate({ mode: 'catalog', category: 'all', subcategory: 'all', rarity: 'all', query, images: false, page: 1 }, replaceSearch);
  }
  function initialize() {
    renderIcons();
    $$('[data-count]').forEach(node => { node.textContent = number(node.dataset.count === 'all' ? boot.total : counts[node.dataset.count] || 0); });
    $('#category-filter').innerHTML += Object.entries(CATEGORIES).map(([key, config]) => `<option value="${key}">${config.name}</option>`).join('');
    const version = String(meta.version || '8.4.1');
    $('#sidebar-version').textContent = version;
    $('#hero-version').textContent = version;
    $('#footer-update').textContent = `资料版本 ${version}${meta.updated ? ` · ${String(meta.updated)}` : ''}`;
    $('#favorite-count').textContent = number(favorites.size);
    renderHome();
    route();

    document.addEventListener('click', event => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;
      if (target.closest('[data-retry]')) { route(); return; }
      const favorite = target.closest('[data-favorite]');
      if (favorite) { event.preventDefault(); toggleFavorite(favorite.dataset.favorite); return; }
      const feature = target.closest('[data-feature]');
      if (feature) { featureCategory = feature.dataset.feature; renderFeatured(); return; }
      const page = target.closest('[data-page]');
      if (page && !page.disabled) {
        navigate({ page: Number(page.dataset.page) });
        $('#catalog-view').scrollIntoView({ behavior: 'instant', block: 'start' });
        return;
      }
      if (target.closest('[data-clear-query]')) { navigate({ query: '', page: 1 }); return; }
      if (target.closest('#copy-link')) { copyLink(); return; }
      const entry = target.closest('[data-entry]');
      if (entry) dialogTrigger = entry;
      const navigation = target.closest('a[href^="#category/"], a[href="#catalog"], a[href="#home"], a[href="#favorites"]');
      if (navigation) {
        clearTimeout(searchTimer);
        closeMenu();
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    });
    document.addEventListener('error', event => {
      const img = event.target;
      if (!(img instanceof HTMLImageElement) || !img.dataset.fallback) return;
      const source = img.getAttribute('src');
      if (source) imageCache.add(source);
      const missing = document.createElement('span');
      missing.className = 'missing-image';
      missing.innerHTML = `${icon(img.dataset.fallback)}<span>图像待补</span>`;
      img.replaceWith(missing);
    }, true);
    $('#category-filter').addEventListener('change', event => navigate({ mode: state.mode === 'favorites' ? 'favorites' : 'catalog', category: event.target.value, subcategory: 'all', rarity: 'all', page: 1 }));
    $('#subcategory-filter').addEventListener('change', event => navigate({ subcategory: event.target.value, page: 1 }));
    $('#rarity-filter').addEventListener('change', event => navigate({ rarity: event.target.value, page: 1 }));
    $('#sort-filter').addEventListener('change', event => navigate({ sort: event.target.value, page: 1 }));
    $('#image-filter').addEventListener('change', event => navigate({ images: event.target.checked, page: 1 }));
    $('#reset-filters').addEventListener('click', resetFilters);
    $('#empty-reset').addEventListener('click', () => navigate({ mode: 'catalog', category: 'all', subcategory: 'all', rarity: 'all', query: '', images: false, page: 1 }));
    $('#search-form').addEventListener('submit', event => { event.preventDefault(); runSearch(); });
    $('#global-search').addEventListener('input', () => { clearTimeout(searchTimer); searchTimer = setTimeout(runSearch, 240); });
    $('#global-search').addEventListener('keydown', event => {
      if (event.key === 'Escape') { clearTimeout(searchTimer); event.target.value = ''; runSearch(); event.target.blur(); }
    });
    $('#dialog-close').addEventListener('click', () => closeDetail());
    dialog.addEventListener('cancel', event => { event.preventDefault(); closeDetail(); });
    dialog.addEventListener('close', () => {
      if (!programmaticClose && !dialog.open && dialogEntryId) closeDetail();
    });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const box = dialog.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) closeDetail();
    });
    $('#menu-toggle').addEventListener('click', toggleMenu);
    $('#mobile-shade').addEventListener('click', () => { closeMenu(); $('#menu-toggle').focus(); });
    document.addEventListener('keydown', event => {
      if (document.querySelector('#lcz-community-dialog[open]')) return;
      const editing = event.target instanceof Element && event.target.matches('input, textarea, select, [contenteditable="true"]');
      if (event.key === '/' && !editing && !dialog.open) { event.preventDefault(); $('#global-search').focus(); }
      if (event.key === 'Escape' && $('#sidebar').classList.contains('open')) { closeMenu(); $('#menu-toggle').focus(); }
      if (event.key === 'Tab' && $('#sidebar').classList.contains('open')) {
        const links = $$('#sidebar a');
        const first = links[0];
        const last = links[links.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
      const feature = event.target instanceof Element && event.target.closest('[data-feature]');
      if (feature && ['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
        event.preventDefault();
        featureCategory = event.key === 'Home' ? 'weapons' : event.key === 'End' ? 'armor' : featureCategory === 'weapons' ? 'armor' : 'weapons';
        renderFeatured();
        $(`#feature-${featureCategory}`).focus();
      }
    });
    window.addEventListener('hashchange', route);
    window.addEventListener('storage', event => {
      if (event.key === storageKey) { favorites = readFavorites(); updateFavoriteUI(); if (state.mode === 'favorites' && !dialog.open) route(); }
    });
    const mobile = window.matchMedia('(max-width: 800px)');
    const adaptNavigation = () => {
      if (!mobile.matches) { closeMenu(); $('#sidebar').inert = false; }
      else if (!$('#sidebar').classList.contains('open')) $('#sidebar').inert = true;
    };
    mobile.addEventListener('change', adaptNavigation);
    adaptNavigation();
  }
  initialize();
})();
