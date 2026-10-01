/* Player-facing, dependency-free encyclopedia. */
(() => {
  'use strict';
  const paths = {
    search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/>',
    home:'<path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-7h6v7"/>',
    weapon:'<path d="m3 7 3-3 7 7 7-7 1 5-6 5 3 3-3 3-3-3-5 5-3-3 5-5z"/>',
    shield:'<path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6z"/><path d="M12 7v10m-4-7h8"/>',
    skull:'<path d="M5 16a9 9 0 1 1 14 0v4H5z"/><circle cx="8.5" cy="11" r="1.5"/><circle cx="15.5" cy="11" r="1.5"/><path d="m11 16 1-2 1 2M9 18v3m6-3v3"/>',
    box:'<path d="m3 7 9-4 9 4-9 4zM3 7v10l9 4 9-4V7M12 11v10M8 5l9 4"/>',
    craft:'<path d="m14 5 3-2 4 4-2 3-3-1-4 4-1 4-5 4-3-3 4-5 4-1 4-4z"/>',
    map:'<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15m6-12v15"/>',
    bookmark:'<path d="M6 3h12v18l-6-4-6 4z"/>',
    compare:'<path d="M4 6h16m-4-4 4 4-4 4M20 18H4m4-4-4 4 4 4M8 6v5m8 2v5"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v1"/>',
    compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5z"/>',
    arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
    'arrow-up-right':'<path d="M6 18 18 6M6 6h12v12"/>',
    menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
    x:'<path d="m6 6 12 12M6 18 18 6"/>',
    grid:'<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/>',
    list:'<path d="M8 5h13M8 12h13M8 19h13M3 5h1M3 12h1M3 19h1"/>',
    sort:'<path d="M4 6h15M4 12h10M4 18h5m9-7v10m-3-3 3 3 3-3"/>',
    bolt:'<path d="m13 2-9 12h7l-1 8L21 9h-8z"/>',
    heart:'<path d="M12 21 3.5 12a5.5 5.5 0 0 1 8.5-7 5.5 5.5 0 0 1 8.5 7z"/>',
    tool:'<path d="M21 5a6 6 0 0 1-8 8l-8 8-3-3 8-8a6 6 0 0 1 8-8l-4 4 4 4z"/>',
    leaf:'<path d="M20 3c0 13-4 18-10 17C0 18 3 7 20 3ZM4 21 15 10"/>',
    building:'<path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-8h6v8"/>',
    vehicle:'<path d="m5 6 2-3h10l2 3 2 7v6H3v-6zM5 8h14M3 14h18M6 19v2m12-2v2M6 11h2m8 0h2"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>'
  };
  const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.box}</svg>`;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const $ = selector => document.querySelector(selector);
  const entityCode = entry => window.LCZEntityCode.render(entry.entityCode, {label: entry.kind === 'recipes' ? '产物代码' : '实体代码'});
  const fillIcons = (scope = document) => scope.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });
  const categories = {
    weapons:{name:'武器图鉴',short:'武器',icon:'weapon',description:'近战、枪械与特殊武器，找到适合下一场战斗的伙伴。'},
    armor:{name:'装备图鉴',short:'装备',icon:'shield',description:'护甲、衣物与背包，每一件装备都为生存多添一份保障。'},
    creatures:{name:'怪物与生物',short:'怪物',icon:'skull',description:'了解敌人与野生动物，准备好再进入危险区域。'},
    resources:{name:'资源与物品',short:'资源',icon:'box',description:'收集、补给与建造。查找你需要的材料和生存物资。'},
    recipes:{name:'制作与维修',short:'制作',icon:'craft',description:'查看制作、加工和维修所需物资，提前准备好你的清单。'},
    locations:{name:'地点与探索',short:'地点',icon:'map',description:'从熟悉的森林到危险的禁区，认识这个世界。'}
  };
  fillIcons();
  const data=window.LDOE_DATA;
  if(!data) {
    $('#catalog-grid').innerHTML='<div class="loading-error"><h2>图鉴数据未能加载</h2><p>请保留完整网站文件夹后重新打开。</p><button class="primary-button" data-action="reload">重新打开</button></div>';
    document.addEventListener('click',event=>{if(event.target.closest('[data-action="reload"]'))location.reload();});
    return;
  }
  const boot=data.boot, entries=data.records;
  const loadedCategories=new Map();
  let searchRows=[],viewRequest=0,cardsRequest=0,detailRequest=0;
  let currentRelations={outputs:[],uses:[]};
  const getCategory=entry=>entry?.kind || (entry?.category==='weapons'||entry?.category==='armor'?entry.category:'resources');
  const readStorage=key=>{try{const value=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(value)?value.filter(data.known):[];}catch{return [];}};
  const favorites=new Set(readStorage('ldoe-wiki-favorites'));
  const comparison=new Set(readStorage('ldoe-wiki-comparison').filter(id=>data.gear.has(id)).slice(0,3));
  const state = {view:'overview',category:'weapons',filter:'全部',query:'',sort:'default',page:1,layout:'grid'};
  const pageSize = 24;
  const number = value => typeof value === 'number' ? new Intl.NumberFormat('zh-CN',{maximumFractionDigits:2}).format(value) : String(value ?? '—');
  const validImage = path => typeof path === 'string' && /^assets\/[a-zA-Z0-9_./-]+\.(webp|png|jpg|svg)$/.test(path) && !path.includes('..') ? path : '';
  const imageMarkup = (entry,cls='',loading='lazy') => validImage(entry.image) ? `<img ${cls ? `class="${cls}"` : ''} src="${esc(entry.image)}" alt="${esc(entry.name)}图鉴" loading="${loading}" decoding="async">` : `<span class="image-placeholder" aria-label="暂无已确认图像">${icon(categories[getCategory(entry)]?.icon || 'box')}<small>图像待补</small></span>`;
  const statIcon = label => /伤害|攻击/.test(label) ? 'weapon' : /生命|恢复/.test(label) ? 'heart' : /射速|攻速|速度/.test(label) ? 'bolt' : /防|护甲/.test(label) ? 'shield' : /时间/.test(label) ? 'clock' : 'box';
  const categoryList=category=>loadedCategories.get(category)||(category==='weapons'?boot.home:[]);
  const favoriteRows=()=>[...favorites].map(id=>entries.get(id)).filter(Boolean).sort((a,b)=>a._order-b._order);
  const preview=()=>state.view==='overview'&&!state.query&&state.category==='weapons'&&state.filter==='全部'&&state.sort==='default'&&state.page===1&&!loadedCategories.has('weapons');

  function persist() {
    try { localStorage.setItem('ldoe-wiki-favorites',JSON.stringify([...favorites]));localStorage.setItem('ldoe-wiki-comparison',JSON.stringify([...comparison])); } catch { /* Read-only browser storage still permits this session. */ }
  }
  let toastTimer;
  function toast(message) { $('#toast').textContent = message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer = setTimeout(() => $('#toast').classList.remove('visible'),2400); }
  function renderNavigation() {
    $('#primary-nav').innerHTML = `<button data-view="overview" class="${state.view === 'overview' ? 'active' : ''}" ${state.view === 'overview' ? 'aria-current="page"' : ''}>${icon('home')}百科首页</button>` + Object.entries(categories).map(([key,c]) => `<button data-view="${key}" class="${state.view === key ? 'active' : ''}" ${state.view === key ? 'aria-current="page"' : ''}>${icon(c.icon)}${c.name}<span class="nav-count">${number(boot.counts[key])}</span></button>`).join('');
    document.querySelector('[data-view="favorites"]').classList.toggle('active',state.view === 'favorites');
    $('#favorites-count').textContent = favorites.size;
    $('#compare-count').textContent = comparison.size;
    $('#compare-tray').hidden = comparison.size === 0;
    $('#compare-summary').textContent = `已选择 ${comparison.size} / 3 件装备`;
  }
  function renderStats() {
    const stats = [{key:'weapons',label:'武器与装备',count:boot.counts.weapons+boot.counts.armor,icon:'weapon'},{key:'creatures',label:'怪物与生物',count:boot.counts.creatures,icon:'skull'},{key:'resources',label:'资源与物品',count:boot.counts.resources,icon:'box'},{key:'recipes',label:'制作与维修',count:boot.counts.recipes,icon:'craft'}];
    $('#overview-stats').innerHTML = stats.map(s => `<button class="overview-stat" data-view="${s.key}" aria-label="查看${s.label}"><span>${icon(s.icon)}</span><div><strong>${number(s.count)}</strong><small>${s.label}</small></div></button>`).join('');
  }
  function currentEntries() {
    let result = state.query ? (state.view==='favorites'?favoriteRows():searchRows) : state.view === 'favorites' ? favoriteRows() : categoryList(state.category);
    if (state.query) {
      const tokens = state.query.toLocaleLowerCase().split(/\s+/).filter(Boolean);
      result = result.filter(entry => {const haystack = entry.searchText || `${entry.name} ${entry.enName} ${entry.entityCode || ''} ${(entry.variants || []).map(v => v.entityCode || '').join(' ')} ${entry.subcategory || ''} ${entry.tags.join(' ')} ${entry.description || ''}`.toLocaleLowerCase();return tokens.every(token => haystack.includes(token));});
      if (state.view === 'favorites') result = result.filter(e => favorites.has(e.id));
    }
    if (state.filter !== '全部') result = result.filter(e => (state.query || state.view === 'favorites' ? categories[getCategory(e)]?.short : e.subcategory || e.type || categories[getCategory(e)]?.short) === state.filter);
    if (state.sort === 'name') result = [...result].sort((a,b) => a.name.localeCompare(b.name,'zh-CN'));
    if (state.sort === 'stat') result = [...result].sort((a,b) => (parseFloat(b.stats[0]?.value)||0)-(parseFloat(a.stats[0]?.value)||0));
    return result;
  }
  function filters() {
    const base = state.query ? (state.view==='favorites'?favoriteRows():searchRows) : state.view === 'favorites' ? favoriteRows() : categoryList(state.category);
    const groups = !state.query&&state.view!=='favorites' ? boot.filters[state.category] : [...new Set(base.map(e=>categories[getCategory(e)]?.short).filter(Boolean))];
    if (!groups.includes(state.filter)) state.filter = '全部';
    const quick=groups.slice(0,7);
    $('#filter-chips').innerHTML = ['全部',...quick].map(label => `<button data-filter="${esc(label)}" class="${state.filter === label ? 'active' : ''}" aria-pressed="${state.filter === label}">${esc(label)}</button>`).join('') + (groups.length>7?`<label class="more-filters"><select id="more-filters" aria-label="更多细分类别"><option value="全部">更多分类 (${groups.length})</option>${groups.map(label=>`<option value="${esc(label)}" ${state.filter===label?'selected':''}>${esc(label)}</option>`).join('')}</select></label>`:'');
  }
  function card(entry) {
    const category = getCategory(entry);
    const comparable = category === 'weapons' || category === 'armor';
    const stats = (category==='creatures' ? entry.stats.filter(s=>/生命|伤害/.test(s.label)) : entry.stats).filter(s => s.value !== null && s.value !== undefined).slice(0,2);
    return `<article class="item-card ${category==='locations'?'location-card':''}"><button class="favorite-toggle ${favorites.has(entry.id) ? 'saved' : ''}" data-save="${esc(entry.id)}" aria-label="${favorites.has(entry.id) ? '取消收藏' : '收藏'}${esc(entry.name)}" aria-pressed="${favorites.has(entry.id)}">${icon('bookmark')}</button><div class="card-open" data-entry="${esc(entry.id)}"><div class="card-visual"><span class="card-label">${esc(entry.subcategory || categories[category]?.name)}</span>${imageMarkup(entry)}</div><div class="card-info"><h3><button class="card-title-button" data-entry="${esc(entry.id)}">${esc(entry.name)}</button></h3>${entityCode(entry)}<div class="card-en">${esc(entry.enName || (entry.tags[0] || categories[category]?.name))}</div><div class="card-stats">${stats.length ? stats.map(s => `<span class="card-stat">${icon(statIcon(s.label))}<span>${esc(s.label)}</span><b>${esc(number(s.value))}${s.unit ? `<small>${esc(s.unit)}</small>` : ''}</b></span>`).join('') : `<span class="card-stat">${icon(category === 'recipes' ? 'craft' : 'info')}<span>${category === 'recipes' ? '查看材料需求' : '查看图鉴详情'}</span></span>`}</div></div></div><div class="card-bottom"><span>${esc(entry.tags[0] || (category === 'recipes' ? '材料清单' : '生存图鉴'))}</span>${comparable ? `<button data-compare="${esc(entry.id)}" class="${comparison.has(entry.id) ? 'selected' : ''}" aria-pressed="${comparison.has(entry.id)}" aria-label="${comparison.has(entry.id) ? '移出' : '加入'}${esc(entry.name)}对比">${icon(comparison.has(entry.id) ? 'check' : 'compare')}${comparison.has(entry.id) ? '已选' : '对比'}</button>` : `<button data-entry="${esc(entry.id)}" aria-label="查看${esc(entry.name)}">详情</button>`}</div></article>`;
  }
  async function renderCards() {
    const ticket=++cardsRequest;
    const result=currentEntries();
    const total=preview()?boot.counts.weapons:result.length;
    const pages=Math.max(1,Math.ceil(total/pageSize));
    state.page = Math.min(Math.max(state.page,1),pages);
    const start = (state.page-1)*pageSize;
    let visible=result.slice(start,start+pageSize);
    if(state.query) {
      try {
        await data.entries(visible.map(row=>row.id));
        if(ticket!==cardsRequest)return;
        visible=visible.map(row=>entries.get(row.id));
      } catch(error) {if(ticket===cardsRequest)showViewError(error);return;}
    }
    if(ticket!==cardsRequest)return;
    $('#result-count').innerHTML = `${state.query ? `“${esc(state.query)}” · ` : ''}共 <strong>${number(total)}</strong> 个条目${result.length ? ` <span> / 显示 ${start+1}–${Math.min(start+pageSize,total)}</span>` : ''}`;
    $('#catalog-grid').className = `catalog-grid ${state.layout === 'list' ? 'list-layout' : ''}`;
    $('#catalog-grid').innerHTML = result.length ? visible.map(card).join('') : `<div class="empty-state">${icon(state.view === 'favorites' ? 'bookmark' : 'search')}<h3>${state.view === 'favorites' && !state.query ? '把值得记住的装备，收进你的手册' : '没有找到匹配的条目'}</h3><p>${state.view === 'favorites' && !state.query ? '点击图鉴卡片右上角的书签，即可在这里快速找到它。' : '试试更短的名称、英文名称，或清除当前筛选。'}</p><button class="primary-button" data-action="reset-search">浏览武器图鉴 ${icon('arrow')}</button></div>`;
    const pageNumbers = [...new Set([1,state.page-1,state.page,state.page+1,pages])].filter(n => n>0 && n<=pages).sort((a,b)=>a-b);
    $('#pagination').innerHTML = pages > 1 ? `<button data-page="${state.page-1}" ${state.page===1?'disabled':''} aria-label="上一页">←</button>${pageNumbers.map((n,i) => `${i && n > pageNumbers[i-1]+1 ? '<span class="page-caption">…</span>' : ''}<button data-page="${n}" class="${n===state.page?'active':''}" ${n===state.page?'aria-current="page"':''} aria-label="第 ${n} 页">${n}</button>`).join('')}<button data-page="${state.page+1}" ${state.page===pages?'disabled':''} aria-label="下一页">→</button><span class="page-caption">每页 ${pageSize} 条</span>` : '';
  }
  function showViewError(error) {
    $('#catalog-grid').setAttribute('aria-busy','false');
    $('#catalog-grid').innerHTML=`<div class="loading-error"><h2>这部分资料暂未打开</h2><p>${esc(error.message)}</p><button class="primary-button" data-action="retry-view">重试</button></div>`;
    $('#pagination').innerHTML='';
  }
  async function render() {
    const ticket=++viewRequest;
    ++cardsRequest;
    renderNavigation();
    const overview = state.view === 'overview' && !state.query;
    $('#hero').hidden = !overview;
    $('#overview-stats').hidden = !overview;
    $('#field-notes').hidden = !overview;
    // Explicit hidden styles remain effective on flex/grid sections.
    $('#overview-stats').style.display = overview ? '' : 'none';
    $('#field-notes').style.display = overview ? '' : 'none';
    $('#breadcrumb-current').textContent = state.query ? '搜索结果' : state.view === 'favorites' ? '我的收藏' : overview ? '生存指南' : categories[state.category].name;
    $('#catalog-title').innerHTML = `${esc(state.query ? '在废土档案中寻找' : state.view === 'favorites' ? '我的生存手册' : overview ? '探索生存图鉴' : categories[state.category].name)}<span class="title-dot">.</span>`;
    $('#catalog-description').textContent = state.query ? '搜索涵盖全部武器、装备、生物、地点及制作配方。' : state.view === 'favorites' ? '收藏保存在当前浏览器中，随时回来查阅。' : overview ? '出发前，先了解你手中的装备。' : categories[state.category].description;
    $('#category-tabs').innerHTML = Object.entries(categories).map(([key,c])=>`<button data-category="${key}" class="${state.category===key && !state.query && state.view!=='favorites'?'active':''}" aria-pressed="${state.category===key && !state.query && state.view!=='favorites'}">${icon(c.icon)}${c.short}<small>${number(boot.counts[key])}</small></button>`).join('');
    $('#catalog-grid').setAttribute('aria-busy','true');
    if(!preview()) {
      $('#catalog-grid').innerHTML='<div class="loading-error" role="status">正在打开图鉴…</div>';
      $('#pagination').innerHTML='';
    }
    try {
      if(state.view==='favorites')await data.entries([...favorites]);
      else if(state.query)searchRows=await data.search();
      else if(!preview()) {
        const key=state.category, rows=await data.category(key);
        loadedCategories.set(key,rows);
      }
      if(ticket!==viewRequest)return;
      filters();await renderCards();
      if(ticket!==viewRequest)return;
      $('#catalog-grid').setAttribute('aria-busy','false');
      $('#collection-hint').textContent=!state.query&&state.category==='creatures'?`已确认画像 ${boot.coverage.creatures} / ${boot.counts.creatures} · 缺图条目已标注`:'点击条目查看详细资料';
    } catch(error) {if(ticket===viewRequest)showViewError(error);}

  }
  function changeView(view) {
    clearTimeout(searchTimer);
    state.view = view;state.category = categories[view] ? view : 'weapons';state.filter = '全部';state.query='';state.page=1;state.sort='default';$('#sort-select').value='default';$('#global-search').value='';
    closeMobile();render();window.scrollTo({top:0,behavior:'instant'});
  }
  function toggleSave(id) {
    if (!entries.has(id)) return;
    favorites.has(id) ? favorites.delete(id) : favorites.add(id);persist();renderNavigation();renderCards();
    const btn = document.querySelector(`[data-detail-save="${id}"]`);
    if (btn) {btn.innerHTML=icon('bookmark')+(favorites.has(id)?'已收藏':'收藏条目');btn.setAttribute('aria-pressed',String(favorites.has(id)));}
    toast(favorites.has(id)?'已加入我的收藏':'已取消收藏');
  }
  function toggleCompare(id) {
    if (!entries.has(id)) return;
    const category = getCategory(entries.get(id));
    if (!['weapons','armor'].includes(category)) return;
    if (comparison.has(id)) comparison.delete(id);
    else if (comparison.size >= 3) {toast('最多同时对比 3 件装备，请先移除一件。');return;}
    else if (comparison.size && category !== data.gear.get([...comparison][0])) {toast('请分别对比武器或护甲，先清空当前对比。');return;}
    else comparison.add(id);
    persist();renderNavigation();renderCards();
    const btn=document.querySelector(`[data-detail-compare="${id}"]`);if(btn){btn.innerHTML=icon('compare')+(comparison.has(id)?'移出对比':'加入对比');btn.setAttribute('aria-pressed',String(comparison.has(id)));}
  }
  const dialog = $('#detail-dialog');
  let currentDetail=null;
  function showDialog(html) {
    $('#dialog-content').innerHTML=html;
    if(currentDetail)enrichDetail(currentDetail);
    const coverage=$('#dialog-content .about-counts');
    if(coverage)coverage.insertAdjacentHTML('afterend',`<p class="coverage-text">已确认图像：武器装备 ${boot.coverage.weapons+boot.coverage.armor} / ${boot.counts.weapons+boot.counts.armor}；生物 ${boot.coverage.creatures} / ${boot.counts.creatures}；地点 ${boot.coverage.locations} / ${boot.counts.locations}。缺图条目以“图像待补”标注。</p>`);
    if(!dialog.open)dialog.showModal();dialog.scrollTop=0;
  }
  function closeDialog(){++detailRequest;currentDetail=null;setHash(null);dialog.close();}
  function setHash(id) {try {history.replaceState(null,'',id ? `#entry=${encodeURIComponent(id)}` : location.pathname+location.search);}catch{/* File browsers may limit history. */}}
  function sourceMarkup(entry) {
    const sources=Array.isArray(entry.sources)?entry.sources:entry.source?[entry.source]:[];
    const links=sources.map(source=>{const url=typeof source==='string'?source:source.url;const title=typeof source==='object'?(source.title||source.name||'参考资料'):'公开参考资料';return typeof url==='string'&&/^https:\/\//.test(url)?`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(title)} ↗</a>`:typeof source==='string'?esc(source):'';}).filter(Boolean);
    return `<div class="detail-source">资料版本：1.52.0 · 基础数值不含战斗中的临时效果。${links.length?`<br>${links.join(' · ')}`:''}</div>`;
  }
  function ingredientsOf(entry) {const raw=entry.ingredients || entry.recipe?.ingredients || entry.materials || [];return Array.isArray(raw)?raw:[];}
  function ingredientMarkup(ingredients,multiplier=1) {
    return ingredients.map(i=>{const linked=entries.get(i.id || i.itemId);const name=linked?.name || i.name || '材料';const count=Number(i.quantity ?? i.amount ?? i.count ?? 1)*multiplier;return `<${linked?'button':'div'} class="ingredient" ${linked?`data-entry="${esc(linked.id)}"`:''}>${linked && validImage(linked.image)?`<img src="${esc(linked.image)}" alt="" loading="lazy">`:icon('box')}<span>${esc(name)}</span><b>× ${esc(number(count))}</b></${linked?'button':'div'}>`;}).join('');
  }
  async function openEntry(id) {
    if(!data.known(id))return;
    const ticket=++detailRequest;
    currentDetail=null;setHash(id);
    showDialog('<div class="about-content" role="status"><h2 id="dialog-title">正在打开图鉴…</h2></div>');
    let entry;
    try {
      entry=await data.entry(id);
      const related=entry.kind?{outputs:[],uses:[]}:await data.related(id);
      const linked=ingredientsOf(entry).map(row=>row.id||row.itemId);
      if(entry.outputId)linked.push(entry.outputId);
      await data.entries(linked);
      if(ticket!==detailRequest||!dialog.open)return;
      currentRelations=related;
    } catch(error) {
      if(ticket===detailRequest&&dialog.open)showDialog(`<div class="about-content"><h2 id="dialog-title">这条资料暂未打开</h2><p>${esc(error.message)}</p><button class="primary-button" data-retry-entry="${esc(id)}">重试</button></div>`);
      return;
    }
    currentDetail=entry;
    const category=getCategory(entry),c=categories[category];
    const ingredients=ingredientsOf(entry);
    const associatedRecipes = category !== 'recipes' ? currentRelations.outputs.slice(0,20) : [];
    const description=entry.description || (category==='recipes'?'按下方清单准备材料。':'此条目收录于本地版本图鉴。具体获取方式请以游戏内显示为准。');
    const locationsText=Array.isArray(entry.locations)?entry.locations.map(l=>typeof l==='object'?l.name:l).filter(Boolean).join('、'):'';
    const notes=Array.isArray(entry.notes)?entry.notes.join(' '):entry.note || entry.notes || '';
    showDialog(`<div class="detail-header"><div class="detail-art">${imageMarkup(entry,'','eager')}</div><div class="detail-title"><span class="eyebrow">${esc(c.name)} / FIELD GUIDE</span><h2 id="dialog-title">${esc(entry.name)}</h2>${entityCode(entry)}<div class="detail-en">${esc(entry.enName)}</div><div class="detail-tags">${[entry.subcategory,...entry.tags].filter(Boolean).slice(0,6).map(t=>`<span>${esc(t)}</span>`).join('')}</div></div></div><div class="detail-body"><p>${esc(description)}</p>${entry.stats.length?`<div class="detail-stats">${entry.stats.map(s=>`<div class="detail-stat"><small>${esc(s.label)}</small><strong>${esc(number(s.value))}${s.unit?`<span>${esc(s.unit)}</span>`:''}</strong></div>`).join('')}</div>`:''}${notes?`<div class="detail-note">${esc(notes)}</div>`:''}${locationsText?`<h3>出现地点</h3><p>${esc(locationsText)}</p>`:''}${ingredients.length?`<h3>制作材料</h3><label class="recipe-quantity">制作次数 <input id="recipe-quantity" type="number" min="1" max="999" step="1" value="1" aria-label="制作次数"></label><div class="recipe-ingredients" id="recipe-ingredients">${ingredientMarkup(ingredients)}</div>`:''}${associatedRecipes.length?`<h3>相关制作配方</h3><div class="recipe-ingredients">${associatedRecipes.map(r=>`<button class="ingredient" data-entry="${esc(r.id)}">${icon('craft')}<span>${esc(r.name)}</span><b>查看 →</b></button>`).join('')}</div>`:''}${Array.isArray(entry.variants)&&entry.variants.length?`<h3>已收录变体</h3><div class="detail-note">${entry.variants.map(v=>typeof v==='string'?esc(v):esc(v.name)).join(' · ')}</div>`:''}<div class="detail-actions"><button class="secondary-button" data-detail-save="${esc(id)}" aria-pressed="${favorites.has(id)}">${icon('bookmark')}${favorites.has(id)?'已收藏':'收藏条目'}</button>${['weapons','armor'].includes(category)?`<button class="secondary-button" data-detail-compare="${esc(id)}" aria-pressed="${comparison.has(id)}">${icon('compare')}${comparison.has(id)?'移出对比':'加入对比'}</button>`:''}<button class="secondary-button" data-action="share">复制条目链接</button></div>${sourceMarkup(entry)}</div>`);
  }
  async function showComparison() {
    const ticket=++detailRequest;
    currentDetail=null;
    showDialog('<div class="about-content" role="status"><h2 id="dialog-title">正在打开装备对比…</h2></div>');
    try {await data.entries([...comparison]);}
    catch(error){if(ticket===detailRequest&&dialog.open)showDialog(`<div class="about-content"><h2 id="dialog-title">装备暂未打开</h2><p>${esc(error.message)}</p><button class="primary-button" data-action="compare">重试</button></div>`);return;}
    if(ticket!==detailRequest||!dialog.open)return;
    const selected=[...comparison].map(id=>entries.get(id)).filter(Boolean);
    if(!selected.length){showDialog(`<div class="about-content"><span class="eyebrow">GEAR COMPARISON</span><h2 id="dialog-title">选择你的下一件装备</h2><p>点击武器或装备卡片上的“对比”，可以同时查看最多三件同类装备的基础属性。</p><button class="primary-button" data-action="go-weapons">浏览武器图鉴 ${icon('arrow')}</button></div>`);return;}
    const labels=[...new Set(selected.flatMap(e=>e.stats.map(s=>s.label)))];
    showDialog(`<div class="about-content"><span class="eyebrow">GEAR COMPARISON</span><h2 id="dialog-title">装备对比</h2><p>并排查看基础属性。改装、技能、敌人抗性与临时增益可能改变实战表现。</p><div class="comparison-scroll"><table class="compare-table"><thead><tr><th>属性</th>${selected.map(e=>`<th>${imageMarkup(e,'','eager')}${esc(e.name)}<button data-remove-compare="${esc(e.id)}">移除</button></th>`).join('')}</tr></thead><tbody>${labels.map(label=>{const values=selected.map(e=>e.stats.find(s=>s.label===label));const numeric=values.every(v=>v&&Number.isFinite(Number(v.value)));const best=numeric?Math.max(...values.map(v=>Number(v.value))):null;return `<tr><td>${esc(label)}</td>${values.map(v=>`<td class="${numeric&&Number(v.value)===best?'best':''}">${v?esc(number(v.value))+(v.unit?` ${esc(v.unit)}`:''):'—'}</td>`).join('')}</tr>`;}).join('')}</tbody></table></div><p>金色标出该行较高数值；数值更高不一定更适合你的战斗方式。</p></div>`);
  }
  function enrichDetail(entry) {
    const body=$('.detail-body');
    if(!body)return;
    const seenTags=new Set();document.querySelectorAll('.detail-tags span').forEach(tag=>{if(seenTags.has(tag.textContent))tag.remove();else seenTags.add(tag.textContent);});
    if(entry.imageNote)body.insertAdjacentHTML('afterbegin',`<div class="detail-note">图像说明：${esc(entry.imageNote)}</div>`);
    if(!validImage(entry.image))$('.detail-art').insertAdjacentHTML('beforeend','<small class="missing-art-note">暂无已确认图像</small>');
    const recipe=entry.kind==='recipes'?entry:entry.recipe;
    const repair=recipe?.type==='repair';
    if(repair && $('.recipe-quantity')){$('.recipe-quantity').firstChild.textContent='维修次数 ';$('#recipe-quantity').setAttribute('aria-label','维修次数');}
    const blocks=[];
    if(entry.modSlots)blocks.push(`<p class="detail-note">这件装备有 ${esc(entry.modSlots)} 个改装槽位。基础属性未计入改装加成。</p>`);
    if(recipe){
      const stations=Array.isArray(recipe.stations)?recipe.stations:[];
      blocks.push(`<div class="recipe-meta"><span>${repair?'维修地点':'制作地点'}</span><strong>${esc(recipe.station || '请参照游戏内图纸')}</strong>${recipe.quantity?`<span>${repair?'每次修复':'每次产出'}</span><strong>${esc(recipe.quantity)} 件</strong>`:''}${recipe.level?`<span>解锁等级</span><strong>${esc(recipe.level)}</strong>`:''}${recipe.duration?`<span>基准耗时</span><strong>${esc(formatTime(recipe.duration))} / 次</strong>`:''}</div>${recipe.status?`<div class="detail-note">${esc(recipe.status)}</div>`:''}${stations.length>1?`<details class="variant-details"><summary>各工作台加工时间</summary>${stations.map(s=>`<div class="variant-stat"><span>${esc(s.name)}</span><b>${esc(formatTime(s.seconds))}</b></div>`).join('')}</details>`:''}`);
    }
    const recipeHeading=[...body.querySelectorAll('h3')].find(h=>h.textContent==='制作材料');
    if(recipe && /维修/.test(recipe.station || '') && recipeHeading)recipeHeading.textContent='维修投入';
    if(blocks.length)(recipeHeading || body.querySelector('.detail-actions')).insertAdjacentHTML('beforebegin',blocks.join(''));
    if(entry.kind==='recipes' && entry.outputId && entries.has(entry.outputId))body.querySelector('.detail-actions').insertAdjacentHTML('afterbegin',`<button class="secondary-button" data-entry="${esc(entry.outputId)}">${icon('box')}查看产物图鉴</button>`);
    if(!entry.kind){
      const uses=currentRelations.uses;
      if(uses.length)body.querySelector('.detail-actions').insertAdjacentHTML('beforebegin',`<details class="variant-details"><summary>用于制作 · ${uses.length} 个配方</summary><div class="recipe-ingredients">${uses.map(r=>`<button class="ingredient" data-entry="${esc(r.id)}">${icon('craft')}<span>${esc(r.name)}</span><b>查看 →</b></button>`).join('')}</div></details>`);
    }
    if(Array.isArray(entry.variants)&&entry.variants.length){
      const heading=[...body.querySelectorAll('h3')].find(h=>h.textContent==='已收录变体');
      if(heading?.nextElementSibling)heading.nextElementSibling.outerHTML=`<div class="variant-list">${entry.variants.map(v=>typeof v==='string'?`<p>${esc(v)}</p>`:`<details class="variant-details"><summary>${esc(v.name)}</summary>${entityCode(v)}${(v.stats||[]).map(s=>`<div class="variant-stat"><span>${esc(s.label)}</span><b>${esc(number(s.value))} ${esc(s.unit||'')}</b></div>`).join('')}</details>`).join('')}</div>`;
    }
  }
  function formatTime(seconds){const n=Math.round(Number(seconds)||0);return [Math.floor(n/3600)?`${Math.floor(n/3600)} 小时`:'',Math.floor(n%3600/60)?`${Math.floor(n%3600/60)} 分`:'',n%60?`${n%60} 秒`:''].filter(Boolean).join(' ')||'即时';}
  function showAbout() {
    ++detailRequest;currentDetail=null;
    const missing=Object.keys(boot.counts).reduce((sum,key)=>sum+boot.counts[key]-boot.coverage[key],0);
    showDialog(`<div class="about-content"><span class="eyebrow">ABOUT THIS FIELD GUIDE</span><h2 id="dialog-title">一份面向幸存者的图鉴</h2><p>为 Last Day on Earth: Survival《地球末日：生存》整理的非官方中文玩家资料站。使用真实游戏图像，集中查阅装备、物资、生物、地点和制作材料。</p><div class="about-counts">${Object.entries(categories).map(([key,c])=>`<div><strong>${number(boot.counts[key])}</strong>${esc(c.name)}</div>`).join('')}</div><h3>资料范围</h3><p>本图鉴依据现有 1.52.0 本地资料整理，是版本快照，不能据此认定所有内容仍在当前线上开放。季节、任务、外观及特殊变体可能有独立条目。部分中文名称是整理译名，请结合图像与英文名称辨认。</p><p>仅展示可以确认的基础数值与材料。伤害、速度等会受到改装、技能、抗性及活动规则影响。配方存在不表示当前角色已经解锁；不同版本、模式或活动的配方可能不同。${missing?` ${number(missing)} 个条目暂缺已确认图像，使用分类标识，详情不以示意图代替真实图鉴。`:''}</p><h3>使用方法</h3><ul><li>顶部搜索同时检索中文、英文、类别与说明。按 / 可快速开始搜索。</li><li>分类标签与细分筛选可以缩小范围。点击卡片查看属性、材料与相关资料。</li><li>书签保存在当前浏览器。武器、护甲可分别选择最多三件进行对比。</li><li>配方详情可调整制作次数，材料需求会同步计算。</li><li>保留完整 LCZ 网站文件夹，双击本页 index.html 即可离线浏览。</li></ul><h3>补充与来源</h3><p>图像与主要属性来自现有游戏资料。条目如使用公开补充资料，会在详情中列出链接。玩法问题可查阅 <a href="https://kefirgames.helpshift.com/hc/en/5-last-day-on-earth/" target="_blank" rel="noopener noreferrer">Kefir 官方帮助中心</a>。</p><p>Last Day on Earth、游戏图像及游戏内容版权归 Kefir 所有。本站与游戏官方无隶属关系。</p></div>`);
  }
  const mobileQuery=matchMedia('(max-width: 760px)');
  function updateSidebarInert(){$('#sidebar').inert=mobileQuery.matches&&!$('#sidebar').classList.contains('open');}
  function closeMobile(){ $('#sidebar').classList.remove('open');$('#mobile-shade').classList.remove('active');$('#menu-toggle').setAttribute('aria-expanded','false');updateSidebarInert(); }
  mobileQuery.addEventListener('change',updateSidebarInert);
  updateSidebarInert();
  let searchTimer;
  $('#global-search').addEventListener('input',event=>{clearTimeout(searchTimer);searchTimer=setTimeout(()=>{state.query=event.target.value.trim();state.filter='全部';state.page=1;render();},130);});
  $('#sort-select').addEventListener('change',event=>{state.sort=event.target.value;state.page=1;render();});
  $('#dialog-close').addEventListener('click',()=>closeDialog());
  dialog.addEventListener('cancel',event=>{event.preventDefault();closeDialog();});
  dialog.addEventListener('close',()=>{if(!dialog.open){++detailRequest;currentDetail=null;}});
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeDialog();}});
  $('#mobile-shade').addEventListener('click',closeMobile);
  $('#menu-toggle').addEventListener('click',()=>{const open=$('#sidebar').classList.toggle('open');$('#mobile-shade').classList.toggle('active',open);$('#menu-toggle').setAttribute('aria-expanded',String(open));updateSidebarInert();});
  document.addEventListener('keydown',event=>{if(event.key==='/'&&!dialog.open&&!/input|textarea|select/i.test(event.target.tagName)){event.preventDefault();$('#global-search').focus();}if(event.key==='Escape')closeMobile();});
  document.addEventListener('input',event=>{if(event.target.id==='recipe-quantity'&&currentDetail){const quantity=Math.min(999,Math.max(1,Math.floor(Number(event.target.value)||1)));$('#recipe-ingredients').innerHTML=ingredientMarkup(ingredientsOf(currentDetail),quantity);}});
  document.addEventListener('change',event=>{if(event.target.id==='recipe-quantity')event.target.value=Math.min(999,Math.max(1,Math.floor(Number(event.target.value)||1)));if(event.target.id==='more-filters'){state.filter=event.target.value;state.page=1;render();}});
  document.addEventListener('click',async event=>{
    const button=event.target.closest('button,a.brand,.card-open[data-entry]');if(!button)return;
    // Nested actions retain priority; selecting or copying an entity code never opens its card.
    if(event.target.closest('.lcz-entity-code,.lcz-entity-codes'))return;
    if(button.matches('.card-open')&&event.target.closest('a,input,select,textarea,summary,[contenteditable]'))return;
    if(button.matches('a.brand')){event.preventDefault();changeView('overview');return;}
    const d=button.dataset;
    if(d.view){changeView(d.view);return;}
    if(d.category){clearTimeout(searchTimer);state.category=d.category;state.view=state.view==='overview'?'overview':d.category;state.filter='全部';state.query='';state.page=1;$('#global-search').value='';render();return;}
    if(d.filter){state.filter=d.filter;state.page=1;render();return;}
    if(d.page){state.page=Number(d.page);render();$('.collection-bar').scrollIntoView({block:'start',behavior:'instant'});return;}
    if(d.layout){state.layout=d.layout;document.querySelectorAll('[data-layout]').forEach(b=>{const active=b.dataset.layout===d.layout;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});renderCards();return;}
    if(d.entry||d.retryEntry){openEntry(d.entry||d.retryEntry);return;}
    if(d.action==='retry-view'){render();return;}
    if(d.save||d.detailSave){toggleSave(d.save||d.detailSave);return;}
    if(d.compare||d.detailCompare){toggleCompare(d.compare||d.detailCompare);return;}
    if(d.removeCompare){comparison.delete(d.removeCompare);persist();renderNavigation();renderCards();showComparison();return;}
    if(d.action==='compare')showComparison();
    if(d.action==='about')showAbout();
    if(d.action==='clear-compare'){comparison.clear();persist();renderNavigation();renderCards();}
    if(d.action==='reset-search')changeView('weapons');
    if(d.action==='go-weapons'){closeDialog();changeView('weapons');}
    if(d.action==='share'){
      const url=location.href;
      try{await navigator.clipboard.writeText(url);toast('条目链接已复制');}
      catch{const input=document.createElement('textarea');input.value=url;document.body.append(input);input.select();const ok=document.execCommand('copy');input.remove();toast(ok?'条目链接已复制':'浏览器不允许复制，请复制地址栏中的链接。');}
    }
  });
  window.addEventListener('hashchange',()=>{
    const match=location.hash.match(/^#entry=(.+)$/);
    let id;
    try{id=match&&decodeURIComponent(match[1]);}catch{/* Invalid deep links cannot revive an older request. */}
    if(data.known(id))openEntry(id);
    else {++detailRequest;if(dialog.open)closeDialog();}
  });
  renderStats();render();
  const initial=location.hash.match(/^#entry=(.+)$/);if(initial){try{openEntry(decodeURIComponent(initial[1]));}catch{}}
})();
