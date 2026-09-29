/* LCZ Dawn player encyclopedia. Game data stays local; UI state is optional. */
(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmt = v => Number(v || 0).toLocaleString('zh-CN');
  const plain = v => String(v ?? '').replace(/<[^>]*>/g, '').replace(/\[\/?(?:color|b|i|size)[^\]]*\]/gi, '').replace(/\{\d+\}/g, '').replace(/[：:]\s*$/, '').trim();
  const rich = v => esc(plain(v)).replace(/\n/g, '<br>');
  const C = window.DOZ_CATALOG;
  const A = window.DOZ_ASSETS || window.DOZ_ASSET_MAP || {byName:{},byBundleId:{}};
  const M = window.DOZ_MECHANICS || {};
  const S = window.DOZ_SITE_META || {};
  const main = $('#main');
  if (!C || !Array.isArray(C.entries)) {
    main.innerHTML = '<div class="load-error"><h1>资料文件尚未就绪</h1><p>资料暂时未能打开，请刷新后重试。离线使用时，请完整保留下载的页面和图片。</p></div>';
    return;
  }
  // Keep internal identifiers in the model, never use them as player labels.
  const technicalText = value => /(?:\b(?:EntityId|entity_id|prefab|assetbundle|bundleId)\b|\b[A-Za-z][A-Za-z0-9]*_[A-Za-z0-9_]+\b|(?:assets|data)[\\/]|\.(?:json|lua|prefab|asset|cs)\b|内部(?:键|编号|代码)|资源路径)/i.test(String(value || ''));
  const playerName = entry => [entry.name, entry.title, entry.nameEn].map(plain).find(value => value && !technicalText(value) && value !== String(entry.id)) || '名称待补充';
  const playerNotes = notes => (Array.isArray(notes) ? notes : []).filter(note => !technicalText(note));
  const playerStats = stats => (Array.isArray(stats) ? stats : [])
    .filter(stat => !/(?:\bID\b|编号|代码|内部|资源路径)/i.test(stat.label || '') && !technicalText(stat.value))
    .map(stat => ({...stat, label: plain(stat.label).replace(/（配置）|配置/g, '')}));
  const entries = C.entries.map(entry => ({...entry,
    name: playerName(entry), nameEn: technicalText(entry.nameEn) ? '' : plain(entry.nameEn),
    stats: playerStats(entry.stats), tags: playerNotes(entry.tags), sourceHints: playerNotes(entry.sourceHints)
  }));
  const byId = new Map(entries.map(e => [String(e.id), e]));
  const visible = entries.filter(e => e.visible !== false);
  const icons = {
    home:'<path d="m3 10 9-7 9 7v10H3Z"/><path d="M9 20v-7h6v7"/>',
    weapon:'<path d="m4 20 5-5m-3-3 6 6M8 14 19 3l2 2-11 11M3 19l2 2"/>',
    armor:'<path d="m8 3-5 3v6l3-1v10h12V11l3 1V6l-5-3-4 3Z"/>',
    enemy:'<path d="M5 10a7 7 0 0 1 14 0v5l-3 2v4H8v-4l-3-2Z"/><circle cx="9" cy="11" r="1"/><circle cx="15" cy="11" r="1"/><path d="m10 17 2-3 2 3M11 18v3m3-3v3"/>',
    companion:'<circle cx="9" cy="7" r="3"/><path d="M2 21v-4a7 7 0 0 1 14 0v4M17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2"/>',
    resource:'<path d="m3 7 9-4 9 4v11l-9 4-9-4Zm0 0 9 4 9-4M12 11v11M7 5l10 5"/>',
    consumable:'<path d="M9 3h6v5l4 5v8H5v-8l4-5Z"/><path d="M9 15h6m-3-3v6"/>',
    building:'<path d="M3 21V8l9-5 9 5v13M1 21h22M7 10h3m4 0h3M7 14h3m4 0h3M10 21v-4h4v4"/>',
    other:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    recipes:'<path d="m4 4 16 16M16 3a5 5 0 0 0-5 7L3 18l3 3 8-8a5 5 0 0 0 7-5l-4 2-3-3Z"/>',
    locations:'<path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2ZM9 3v16m6-14v16"/>',
    quests:'<path d="M7 3H4v18h16V3h-3M8 2h8v4H8ZM8 11h8M8 15h8M8 18h5"/>',
    gacha:'<rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="7" cy="7" r=".8"/><circle cx="17" cy="7" r=".8"/><circle cx="12" cy="12" r=".8"/><circle cx="7" cy="17" r=".8"/><circle cx="17" cy="17" r=".8"/>',
    guides:'<path d="M12 5C8 2 5 2 2 3v16c4-1 7 0 10 2 3-2 6-3 10-2V3c-3-1-6-1-10 2Zm0 0v16"/>',
    about:'<circle cx="12" cy="12" r="9"/><path d="M12 10v7m0-11v1"/>',
    favorites:'<path d="m12 3 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z"/>'
  };
  const icon = key => `<span class="nav-icon" aria-hidden="true"><svg viewBox="0 0 24 24">${icons[key] || icons.other}</svg></span>`;
  const labels = {home:'资料总览',weapon:'武器图鉴',armor:'防具装备',enemy:'怪物档案',companion:'随从图鉴',resource:'资源材料',consumable:'补给与消耗品',building:'建筑与设施',other:'其他物品',recipes:'制作配方',locations:'地图地点',quests:'任务档案',gacha:'抽卡与开箱',guides:'生存指南',library:'成长与故事',about:'收录与下载',favorites:'我的收藏',search:'图鉴搜索'};
  const navGroups = [{label:'探索百科',items:['home','weapon','armor','enemy','companion']},{label:'生存与制作',items:['resource','consumable','building','other','recipes','locations','quests']},{label:'深入了解',items:['gacha','guides','library','about']}];
  const counts = Object.fromEntries(Object.keys(labels).map(k => [k, visible.filter(e => e.category === k).length]));
  const readStore = (key, fallback) => {try{return JSON.parse(localStorage.getItem(key)) || fallback;}catch{return fallback;}};
  const storedFavorites = readStore('doz-wiki-favorites', []);
  let favorites = new Set((Array.isArray(storedFavorites) ? storedFavorites : [])
    .filter(id => typeof id === 'string' || typeof id === 'number').map(String).filter(id => byId.has(id)));
  let comparison = [];
  let state = {route:'home',query:'',rarity:'',subtype:'',sort:'default',showHidden:false,page:1,onlyImages:false};
  let listState = {query:'',page:1};
  let libraryTab = 'skills';
  const PAGE = 40;
  let toastTimer;
  let searchTimer;
  function cancelPendingSearch() {
    clearTimeout(searchTimer);
    searchTimer = undefined;
  }
  // Search belongs to the input's current view, including library tab changes.
  function bindSearch(selector, updateQuery, render) {
    cancelPendingSearch();
    const input = $(selector);
    const inputRoute = state.route;
    input.addEventListener('input', () => {
      if (!input.isConnected || state.route !== inputRoute) return;
      updateQuery(input.value);
      cancelPendingSearch();
      searchTimer = setTimeout(() => {
        searchTimer = undefined;
        if (input.isConnected && state.route === inputRoute) render();
      }, 140);
    });
  }
  function toast(message) {$('#toast').textContent = message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2300);}
  function localPath(path, pattern) {
    if (typeof path !== 'string' || !pattern.test(path) || path.split('/').some(part => part === '..')) return '';
    // Filenames contain Chinese, spaces and even #; encode each real segment.
    return path.split('/').map(part => encodeURIComponent(part)).join('/');
  }
  function imagePath(entry) {
    if (!entry) return '';
    const value = entry.image || A.byBundleId?.[entry.iconBundleId] || A.byBundleId?.[entry.iconSmallBundleId] || A.byBundleId?.[entry.referenceIconBundleId];
    return localPath(typeof value === 'string' ? value : value?.path || value?.image || '', /^assets\/images\//);
  }
  const art = (e, lazy=true) => imagePath(e) ? `<img src="${esc(imagePath(e))}" alt="${esc(e.name)}${e.referenceIconBundleId?'的同模型参考图':'的游戏图鉴'}" ${lazy?'loading="lazy"':''} decoding="async">${e.referenceIconBundleId?'<span class="art-reference">同模型参考图</span>':''}` : `<span class="empty-art">${icon(e.category)}<span>暂无独立图鉴图片</span></span>`;
  const getName = entry => playerName(entry || {});
  const rarityName = e => e.rarityLabel || (typeof e.rarity === 'string' ? e.rarity : '') || '未标注品质';
  const rarityClass = e => /传说|传奇|独特|橙|金/.test(rarityName(e))?'legendary':/史诗|紫/.test(rarityName(e))?'epic':/稀有|蓝/.test(rarityName(e))?'rare':'common';
  const statVal = (e, re) => (e.stats || []).find(s => re.test(s.label))?.value;
  const getNumber = (e,re) => parseFloat(String(statVal(e,re) ?? '').replace(/,/g,'')) || 0;
  function card(e,compact=false) {
    const facts=(e.stats||[]).filter(s=>/基础伤害|基础生命|生成伤害|生成生命|防御|护甲|防护|耐久/.test(s.label)).slice(0,2);
    return `<article class="item-card">
      <button class="card-save ${favorites.has(String(e.id))?'saved':''}" data-save="${esc(e.id)}" aria-label="${favorites.has(String(e.id))?'取消收藏':'收藏'}${esc(e.name)}" aria-pressed="${favorites.has(String(e.id))}">${favorites.has(String(e.id))?'★':'☆'}</button>
      <button class="card-main" data-detail="${esc(e.id)}"><div class="item-art">${art(e)}</div><div class="item-meta"><h3 class="item-name">${esc(e.name)}</h3><div class="item-caption"><span class="rarity rarity-${rarityClass(e)}"><i class="rarity-dot"></i>${esc(rarityName(e))}</span><span>${esc(e.subcategory || e.categoryLabel || labels[e.category] || '档案')}</span></div>
      ${!compact&&facts.length?`<div class="card-facts">${facts.map(s=>`<span>${esc(s.label.replace('（配置）',''))}<b>${esc(s.value)}${esc(s.unit||'')}</b></span>`).join('')}</div>`:''}
      ${e.variantCount>1?`<span class="variant-tag">同名变体 ${esc(e.variantIndex)} / ${esc(e.variantCount)}</span>`:''}${e.visible === false?'<span class="status-tag">特殊或未开放条目</span>':''}</div></button>
      ${!compact && ['weapon','armor'].includes(e.category)?`<button class="card-compare ${comparison.includes(String(e.id))?'chosen':''}" data-compare="${esc(e.id)}">${comparison.includes(String(e.id))?'✓ 已加入对比':'＋ 加入装备对比'}</button>`:''}</article>`;
  }
  function sectionHead(title, english, link, linkText='查看全部') {return `<div class="section-head"><div class="section-title"><h2>${title}</h2><small>${english}</small></div>${link?`<a class="text-link" href="#${link}">${linkText} →</a>`:''}</div>`;}
  function heading(title,sub,en,count) {return `<div class="page-heading"><div><div class="eyebrow">${en}</div><h1>${esc(title)}</h1><p>${sub}</p></div>${count!==undefined?`<div class="heading-number">${fmt(count)}</div>`:''}</div>`;}
  function renderNav() {
    $('#nav').innerHTML = navGroups.map(g=>`<div class="nav-group">${g.label}</div>${g.items.map(k=>`<a class="nav-link ${state.route===k?'active':''}" href="#${k}" ${state.route===k?'aria-current="page"':''}>${icon(k)}<span>${labels[k]}</span>${counts[k]?`<span class="nav-count">${fmt(counts[k])}</span>`:''}</a>`).join('')}`).join('');
    $('#saved-count').textContent = favorites.size;
  }
  function sample(category,n=1) {const preferred={weapon:142,armor:188,enemy:5864,companion:12949};const rows=visible.filter(e=>e.category===category&&imagePath(e));return rows.sort((a,b)=>Number(b.id===preferred[category])-Number(a.id===preferred[category])).slice(0,n);}
  function renderHome() {
    const hero = localPath(A.byName?.firstloading_bkg || '', /^assets\/images\//);
    const featured = [142,2825,9].map(id=>byId.get(String(id))).filter(e=>e&&imagePath(e));
    if (featured.length<3) featured.push(...visible.filter(e=>e.category==='weapon'&&!featured.includes(e)).slice(0,3-featured.length));
    const tiles = [{key:'weapon',en:'WEAPONS',desc:'火力、近战与战斗选择'},{key:'armor',en:'EQUIPMENT',desc:'防护、品质与装备属性'},{key:'enemy',en:'BESTIARY',desc:'认识废土中的威胁'},{key:'companion',en:'COMPANIONS',desc:'寻找并培养你的伙伴'}];
    main.innerHTML = `<section class="hero">${hero?`<img class="hero-image" src="${esc(hero)}" alt="Dawn of Zombies 游戏原版废土场景">`:''}<div class="hero-content"><div class="eyebrow">SURVIVOR'S FIELD GUIDE / 幸存者手册</div><h1>生存，需要<br><em>了解这片废土。</em></h1><p>从第一把武器到下一位同行者。<br>查阅图鉴、研究配方，带着准备重返黎明。</p><div class="hero-actions"><a class="primary-button" href="#weapon">探索武器图鉴 <span>↗</span></a><a class="secondary-button" href="#guides">阅读生存指南 <span>→</span></a></div></div><span class="hero-coordinate">DAWN OF ZOMBIES · LCZ WIKI</span></section>
      <section class="stats-strip" aria-label="资料库统计">${[{k:'weapon',n:counts.weapon+counts.armor,l:'武器与防具档案'},{k:'enemy',n:counts.enemy,l:'怪物与敌对生物'},{k:'recipes',n:(C.recipes||[]).length,l:'制作配方记录'},{k:'resource',n:visible.length,l:'玩家图鉴条目'}].map(s=>`<a class="stat-block" href="#${s.k}">${icon(s.k)}<div><strong>${fmt(s.n)}</strong><span class="label">${s.l}</span></div></a>`).join('')}</section>
      ${sectionHead('探索图鉴','EXPLORE THE ARCHIVE')}
      <div class="explore-grid">${tiles.map(t=>{const e=sample(t.key)[0];return `<a class="explore-card" href="#${t.key}"><div class="eyebrow">${t.en}</div><h3>${labels[t.key]}</h3><p>${t.desc}</p><span class="arrow">↗</span>${e?`<img src="${esc(imagePath(e))}" alt="" loading="lazy">`:''}</a>`;}).join('')}</div>
      <div class="home-bottom"><section>${sectionHead('装备档案选读','FIELD EQUIPMENT','weapon')}<div class="featured-grid">${featured.map(e=>card(e,true)).join('')}</div></section><section>${sectionHead('机制研究','SURVIVAL INTELLIGENCE','gacha','深入阅读')}<article class="guide-teaser"><span class="corner-art" aria-hidden="true">✧</span><div class="eyebrow">概率 · 保底 · 资源规划</div><h3>下一次召唤之前，<br>先读懂规则。</h3><p>普通、阿尔法与新手召唤分别说明。结合原版帮助文本，区分基础概率、目标保底和待确认条件。</p><a href="#gacha" class="text-link">打开抽取机制档案 →</a></article></section></div>
      <div class="version-note"><strong>档案版本说明</strong><span>本百科依据 2.278 游戏资料整理。基础属性会随等级、技能与活动规则变化；没有独立图片的条目会保留文字说明。<a href="#about" class="text-link"> 查看收录情况 ↗</a></span></div>`;
  }
  function filteredEntries() {
    const q = state.query.trim().toLocaleLowerCase();
    let result = entries.filter(e=>(state.showHidden||e.visible!==false)&&(state.route==='search'||state.route==='favorites'&&favorites.has(String(e.id))||e.category===state.route));
    if(q) result=result.filter(e=>[e.name,e.nameEn,e.description,...(e.tags||[])].join(' ').toLocaleLowerCase().includes(q));
    if(state.rarity) result=result.filter(e=>rarityName(e)===state.rarity);
    if(state.subtype) result=result.filter(e=>e.subcategory===state.subtype);
    if(state.onlyImages) result=result.filter(e=>imagePath(e));
    if(state.sort==='name') result.sort((a,b)=>a.name.localeCompare(b.name,'zh-CN'));
    if(state.sort==='damage') result.sort((a,b)=>getNumber(b,/基础伤害|伤害/) - getNumber(a,/基础伤害|伤害/));
    if(state.sort==='defense') result.sort((a,b)=>getNumber(b,/护甲|防御|防护/) - getNumber(a,/护甲|防御|防护/));
    if(state.sort==='durability') result.sort((a,b)=>getNumber(b,/耐久/) - getNumber(a,/耐久/));
    return result;
  }
  function renderCatalog() {
    const eligible = entries.filter(e=>state.route==='search'||state.route==='favorites'&&favorites.has(String(e.id))||e.category===state.route);
    const rarities = [...new Set(eligible.map(rarityName))].sort();
    const subtypes = [...new Set(eligible.map(e=>e.subcategory).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'zh-CN'));
    const desc = {weapon:'从近战到远程，检索原版武器的基础伤害、攻击间隔和耐久。实际表现还受等级、技能和战斗效果影响。',armor:'查看每件防具的基础属性与游戏说明，按品质筛选，并将装备加入对比。',enemy:'整理原版怪物及敌对生物。相同名称可能对应不同地区或活动变体，请结合基础属性辨别。',companion:'查看随从与相关形态。召唤概率、目标保底和培养说明另见「抽卡与开箱」。',favorites:'收藏保存在当前浏览器中。点击星标添加或移除，方便下次出发前查阅。',search:'按中文或英文名称、说明与标签检索图鉴，找到下一次探索需要的资料。'};
    main.innerHTML = heading(labels[state.route] || '图鉴',esc(desc[state.route] || '查阅游戏中的相关物品、用途和基础属性。点击条目打开详细资料。'),'SURVIVOR ARCHIVE / '+state.route.toUpperCase(),eligible.filter(e=>e.visible!==false).length)+
      `<div class="filter-panel"><div class="filter-row"><input id="catalog-search" type="search" placeholder="输入名称或用途筛选…" aria-label="搜索当前分类" value="${esc(state.query)}"><select id="rarity-filter" aria-label="筛选品质"><option value="">全部品质</option>${rarities.map(r=>`<option ${state.rarity===r?'selected':''}>${esc(r)}</option>`).join('')}</select><select id="sort-filter" aria-label="排序方式"><option value="default">默认顺序</option><option value="name">名称排序</option><option value="damage">基础伤害优先</option><option value="defense">防护数值优先</option><option value="durability">耐久数值优先</option></select></div><div class="filter-row"><label><input type="checkbox" id="hidden-filter" ${state.showHidden?'checked':''}>包含特殊 / 未开放条目</label><label><input type="checkbox" id="image-filter" ${state.onlyImages?'checked':''}>只看已有图鉴</label><button class="chip" id="clear-filters">重置筛选</button></div></div><div id="catalog-results"></div>`;
    $('#sort-filter').value = state.sort;
    if(subtypes.length){const select=document.createElement('select');select.id='subtype-filter';select.setAttribute('aria-label','筛选装备或生物类型');select.innerHTML='<option value="">全部类型</option>'+subtypes.map(s=>`<option>${esc(s)}</option>`).join('');select.value=state.subtype;$('#rarity-filter').before(select);select.addEventListener('change',e=>{state.subtype=e.target.value;state.page=1;renderResults();});}
    bindSearch('#catalog-search',query=>{state.query=query;state.page=1;},renderResults);
    $('#rarity-filter').addEventListener('change',e=>{state.rarity=e.target.value;state.page=1;renderResults();});
    $('#sort-filter').addEventListener('change',e=>{state.sort=e.target.value;renderResults();});
    $('#hidden-filter').addEventListener('change',e=>{state.showHidden=e.target.checked;state.page=1;renderResults();});
    $('#image-filter').addEventListener('change',e=>{state.onlyImages=e.target.checked;state.page=1;renderResults();});
    $('#clear-filters').addEventListener('click',()=>{Object.assign(state,{query:'',rarity:'',subtype:'',sort:'default',page:1,showHidden:false,onlyImages:false});renderCatalog();});
    renderResults();
  }
  function pagination(page,total,kind) {return `<div class="pagination"><button data-page="${page-1}" data-kind="${kind}" ${page<=1?'disabled':''}>← 上一页</button><span>第 ${page} / ${Math.max(1,total)} 页</span><button data-page="${page+1}" data-kind="${kind}" ${page>=total?'disabled':''}>下一页 →</button></div>`;}
  function renderResults() {
    const result = filteredEntries();const total=Math.ceil(result.length/PAGE);state.page=Math.max(1,Math.min(state.page,total||1));
    $('#catalog-results').innerHTML=`<div class="results-line"><span>找到 <strong>${fmt(result.length)}</strong> 条档案 <span> / 点击图鉴查看详情</span></span><button class="chip" id="export-csv">导出当前结果 ↓</button></div><div class="catalog-grid">${result.slice((state.page-1)*PAGE,state.page*PAGE).map(e=>card(e)).join('') || `<div class="empty-state"><h2>${state.route==='favorites'?'还没有收藏的档案':'没有匹配的档案'}</h2><p>${state.route==='favorites'?'在图鉴中点击 ☆，即可保存到这里。':'试试更短的关键词，或重置品质与图片筛选。'}</p></div>`}</div>${result.length?pagination(state.page,total,'catalog'):''}`;
    $('#export-csv').addEventListener('click',()=>downloadCsv(result));
  }
  function downloadCsv(rows) {
    const cell=v=>'"'+String(v??'').replace(/^[=+@-]/,"'$&").replace(/"/g,'""')+'"';
    const data=[['名称','英文名称','分类','品质','说明','基础属性','图鉴状态'],...rows.map(e=>[e.name,e.nameEn,e.categoryLabel,rarityName(e),plain(e.description),(e.stats||[]).map(s=>`${s.label}：${s.value}${s.unit||''}`).join('；'),imagePath(e)?'已收录':'待补全'])];
    const blob=new Blob(['\ufeff'+data.map(r=>r.map(cell).join(',')).join('\r\n')],{type:'text/csv;charset=utf-8'});
    const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`DOZ-${labels[state.route]}-2.278.csv`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast(`已导出 ${rows.length} 条玩家资料`);
  }
  function toggleFavorite(id) {
    id=String(id);if(!byId.has(id))return;if(favorites.has(id))favorites.delete(id);else favorites.add(id);
    try{localStorage.setItem('doz-wiki-favorites',JSON.stringify([...favorites]));}catch{toast('浏览器未允许持久保存，本次会话仍可收藏');}
    $('#saved-count').textContent=favorites.size;
    document.querySelectorAll('[data-save]').forEach(b=>{if(b.dataset.save!==id)return;b.classList.toggle('saved',favorites.has(id));b.setAttribute('aria-pressed',String(favorites.has(id)));const entry=byId.get(id);b.setAttribute('aria-label',`${favorites.has(id)?'取消收藏':'收藏'}${entry?.name||''}`);b.textContent=b.classList.contains('card-save')?(favorites.has(id)?'★':'☆'):(favorites.has(id)?'★ 已收藏':'☆ 收藏档案');});
    if(state.route==='favorites')renderResults();
  }
  function toggleCompare(id) {id=String(id);if(!byId.has(id)||!['weapon','armor'].includes(byId.get(id).category))return;if(comparison.includes(id))comparison=comparison.filter(x=>x!==id);else{if(comparison.length>=3){toast('一次最多对比 3 件装备，请先移除一件');return;}comparison.push(id);}renderCompareTray();document.querySelectorAll('[data-compare]').forEach(b=>{b.classList.toggle('chosen',comparison.includes(b.dataset.compare));b.textContent=comparison.includes(b.dataset.compare)?'✓ 已加入对比':'＋ 加入装备对比';});}
  function renderCompareTray() {const tray=$('#compare-tray');tray.hidden=!comparison.length;tray.innerHTML=`<span>装备对比 <strong>${comparison.length} / 3</strong></span><span>${comparison.map(id=>esc(byId.get(id)?.name)).join(' · ')}</span><button id="open-compare" ${comparison.length<2?'disabled':''}>开始对比 →</button><button id="clear-compare" aria-label="清空对比">×</button>`;$('#open-compare')?.addEventListener('click',openCompare);$('#clear-compare')?.addEventListener('click',()=>{comparison=[];renderCompareTray();document.querySelectorAll('[data-compare]').forEach(b=>{b.textContent='＋ 加入装备对比';b.classList.remove('chosen');});});}
  function openCompare() {
    const rows=comparison.map(id=>byId.get(id)).filter(Boolean);if(rows.length<2)return;const keys=[...new Set(rows.flatMap(e=>(e.stats||[]).map(s=>s.label)))];
    const dlg=$('#compare-dialog');dlg.innerHTML=`<div class="dialog-top"><span>EQUIPMENT / 装备对比</span><button class="icon-button" data-close aria-label="关闭对比">×</button></div><div class="detail-body"><div class="table-scroll"><table><thead><tr><th>基础属性</th>${rows.map(e=>`<th class="compare-cell">${imagePath(e)?`<img src="${esc(imagePath(e))}" alt="${esc(e.name)}">`:''}${esc(e.name)}</th>`).join('')}</tr></thead><tbody><tr><td>品质</td>${rows.map(e=>`<td>${esc(rarityName(e))}</td>`).join('')}</tr>${keys.map(k=>`<tr><td>${esc(k)}</td>${rows.map(e=>{const s=(e.stats||[]).find(s=>s.label===k);return `<td>${s?esc(s.value)+(s.unit?' '+esc(s.unit):''):'—'}</td>`;}).join('')}</tr>`).join('')}</tbody></table></div><p class="fine-print">这里只比较装备的基础属性。不同装备类型、攻击机制、技能和成长条件会影响实战表现；缺失字段以「—」表示。</p></div>`;dlg.showModal();
  }
  const itemLink = (id,name) => byId.has(String(id))?`<button class="inline-item" data-detail="${esc(id)}">${esc(getName({name:name||byId.get(String(id)).name}))}</button>`:esc(getName({name:name||'名称待补充'}));
  function openDetail(id) {
    const e=byId.get(String(id));if(!e)return;
    const recipes=(C.recipes||[]).filter(r=>(e.recipeIds||[]).map(String).includes(String(r.id))||(r.resultEntries||[]).some(x=>String(x.id)===String(id))||(r.repairTargets||[]).some(x=>String(x.id)===String(id))).slice(0,15);
    const dlg=$('#detail-dialog');
    dlg.innerHTML=`<div class="dialog-top"><span>FIELD ARCHIVE / ${esc(e.categoryLabel||labels[e.category]||'图鉴详情')}</span><button class="icon-button" data-close aria-label="关闭详情">×</button></div><div class="detail-body"><div class="detail-overview"><div class="detail-art">${art(e,false)}</div><div class="detail-title"><span class="rarity rarity-${rarityClass(e)}"><i class="rarity-dot"></i>${esc(rarityName(e))}</span><h2>${esc(e.name)}</h2>${e.nameEn?`<div class="english-name">${esc(e.nameEn)}</div>`:''}<p>${rich(e.description)||'当前资料未提供可核实的用途说明。'}</p><div class="tags">${(e.tags||[]).filter(t=>!String(t).includes('_')).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div></div></div>${e.stats?.length?`<dl class="stat-grid">${e.stats.map(s=>`<div><dt>${esc(s.label)}</dt><dd>${esc(s.value)}${s.unit?` <small>${esc(s.unit)}</small>`:''}</dd></div>`).join('')}</dl>`:''}${e.status?.length?`<div class="notice">${e.status.map(rich).join('<br>')}</div>`:''}${recipes.length?`<div class="detail-section"><h3>相关制作配方</h3>${recipes.map(recipeHtml).join('')}</div>`:''}<div class="detail-section"><h3>档案说明</h3><p>数值来自 2.278 游戏基础资料。装备等级、角色技能、套装效果、敌人变体和活动规则可能改变实战数值。${imagePath(e)?'配图为对应游戏素材。':'这条资料暂无独立图鉴图片，文字与数值仍可查阅。'}</p>${e.sourceHints?.length?`<p class="fine-print">${playerNotes(e.sourceHints).map(rich).join(' · ')}</p>`:''}</div><div class="detail-actions"><button class="secondary-button" data-save="${esc(id)}" aria-pressed="${favorites.has(String(id))}">${favorites.has(String(id))?'★ 已收藏':'☆ 收藏档案'}</button>${['weapon','armor'].includes(e.category)?`<button class="secondary-button" data-compare="${esc(id)}">${comparison.includes(String(id))?'✓ 已加入对比':'＋ 加入装备对比'}</button>`:''}<button class="secondary-button" data-permalink="${esc(id)}">复制档案链接 ↗</button></div></div>`;
    const extra = `${e.variantSummary?`<div class="notice">${rich(e.variantSummary)}</div>`:''}${e.abilities?.length?`<div class="detail-section"><h3>特殊能力</h3>${e.abilities.map(a=>`<div class="info-card"><h3>${rich(a.name)}</h3><p>${rich(a.description)}</p>${a.cooldown!==undefined?`<p>冷却：${esc(a.cooldown)} 秒</p>`:''}</div>`).join('')}</div>`:''}${e.levelStats?.length?`<div class="detail-section"><h3>等级分段属性</h3><div class="table-scroll"><table><thead><tr><th>属性</th><th>适用等级</th><th>基础数值</th></tr></thead><tbody>${e.levelStats.map(s=>`<tr><td>${esc(s.label)}</td><td>${esc(s.minLevel)}–${esc(s.maxLevel)}</td><td>${esc(s.value)}</td></tr>`).join('')}</tbody></table></div></div>`:''}`;
    dlg.querySelector('.detail-section')?.insertAdjacentHTML('beforebegin',extra);
    if(e.initializationStats?.length){
      const generated=`<div class="detail-section"><h3>不同场景的属性候选</h3><p>这些数值可能对应敌人在不同场景中的状态，具体触发条件尚未完全核实。不同场景、等级和活动可能使用不同分支，不能将所有候选同时视为固定属性。</p>${e.initializationStats.map(s=>`<details><summary>${esc(s.label)}：${esc(s.value)}</summary>${s.attackInterval!==undefined?`<p>该分支攻击间隔：${esc(s.attackInterval)} 秒</p>`:''}${s.levels?.length?`<div class="table-scroll"><table><thead><tr><th>等级区间</th><th>属性候选值</th></tr></thead><tbody>${s.levels.map(x=>`<tr><td>${esc(x.minLevel)}–${esc(x.maxLevel)}</td><td>${esc(x.value)}</td></tr>`).join('')}</tbody></table></div>`:''}</details>`).join('')}</div>`;
      dlg.querySelector('.detail-actions').insertAdjacentHTML('beforebegin',generated);
    }
    if(!dlg.open)dlg.showModal();dlg.scrollTop=0;
  }
  function recipeHtml(r) {
    const repair=r.kind==='repair';
    const materials=(repair?r.materials:r.ingredients)||r.ingredients||[];
    const results=r.resultEntries||[];
    const result=results.length===1?results[0]:null;
    return `<div class="info-card">
      <div class="eyebrow">${esc(r.kindLabel||'制作配方')}${r.craftTimeSeconds?` · ${esc(r.craftTimeSeconds)} 秒`:''}</div>
      <h3>${result?itemLink(result.id,getName(r)):esc(getName(r))}</h3>
      ${r.description?`<p>${rich(r.description)}</p>`:''}
      ${r.stations?.length?`<p>${repair?'修理设施':'相关设施'}：${r.stations.map(x=>itemLink(x.id,x.name)).join('、')}</p>`:''}
      ${r.requiredLevel?`<p>解锁等级：${esc(r.requiredLevel)}</p>`:''}
      ${r.unlockDescription?`<p>${rich(r.unlockDescription)}</p>`:''}
      ${r.hiddenInCraftWindow?'<span class="status-tag">制作窗口隐藏记录</span>':''}
      ${repair&&r.repairTargets?.length?`<div class="recipe-parts"><strong>待修理装备</strong><br>${r.repairTargets.map(x=>`${itemLink(x.id,x.name)} × ${esc(x.amount??1)}`).join('<br>')}</div>`:''}
      <div class="recipe-parts"><strong>${repair?'修理材料':'投入材料'}</strong><br>${materials.length?materials.map(x=>`${itemLink(x.id||x.itemId,x.name)} × ${esc(x.amount??x.count??'—')}${x.minimumDurability?` <span class="fine-print">（最低耐久 ${esc(x.minimumDurability)}）</span>`:''}`).join('<br>'):'原表未列出额外材料。'}</div>
      ${results.length?`<div class="recipe-parts"><strong>${esc(r.resultLabel||'结果')}</strong><br>${results.map(x=>`${itemLink(x.id,x.name)} × ${esc(x.amount??(x.minAmount===x.maxAmount?x.minAmount:`${x.minAmount??'?'}–${x.maxAmount??'?'}`))}${x.conditional?' <span class="fine-print">（有条件）</span>':''}`).join('<br>')}</div>`:''}
      ${r.fuel?.length?`<p>燃料：${r.fuel.map(x=>`${itemLink(x.id,x.name)} × ${esc(x.amount)}`).join('、')}</p>`:''}
      ${r.requiredQuests?.length?`<p>前置任务：${r.requiredQuests.map(x=>esc(x.name||x)).join('、')}</p>`:''}
      ${r.sourceHints?.length?`<p class="fine-print">${playerNotes(r.sourceHints).map(rich).join('<br>')}</p>`:''}
      ${r.note&&!technicalText(r.note)?`<p class="fine-print">${rich(r.note)}</p>`:''}</div>`;
  }
  function renderList() {
    const kind=state.route;const data=C[kind]||[];
    const desc={recipes:'按产物名称和材料查找配方。相同产物可能存在不同配方或活动版本，消耗以具体记录为准。',locations:'查阅已收录的探索地点；活动地点是否开放，以及危险等级和入场条件，以游戏内地图为准。',quests:'浏览任务名称与原版说明。此处包含剧情内容，可以按关键词查找你正在进行的任务。'};
    main.innerHTML=heading(labels[kind],desc[kind],'SURVIVAL DATABASE / '+kind.toUpperCase(),data.length)+`<div class="filter-panel"><div class="filter-row"><input type="search" id="list-search" placeholder="搜索${labels[kind]}…" aria-label="搜索${labels[kind]}" value="${esc(listState.query)}"></div></div><div id="list-results"></div>`;
    bindSearch('#list-search',query=>{listState.query=query;listState.page=1;},renderListResults);renderListResults();
  }
  function renderListResults() {
    const kind=state.route,q=listState.query.toLocaleLowerCase();
    const data=(C[kind]||[]).filter(r=>[r.name,r.title,r.description,r.summary,r.hint,...(r.ingredients||r.materials||[]).map(x=>x.name)].join(' ').toLocaleLowerCase().includes(q));
    const pageSize=24,total=Math.ceil(data.length/pageSize);listState.page=Math.max(1,Math.min(listState.page,total||1));
    $('#list-results').innerHTML=`<div class="results-line">找到 ${fmt(data.length)} 条记录</div><div class="list-grid">${data.slice((listState.page-1)*pageSize,listState.page*pageSize).map(r=>kind==='recipes'?recipeHtml(r):`<article class="info-card"><div class="eyebrow">${kind==='locations'?'WORLD ATLAS':'MISSION ARCHIVE'}</div>${imagePath(r)?`<img class="record-image" src="${esc(imagePath(r))}" alt="${esc(getName(r))}" loading="lazy">`:''}<h3>${esc(getName(r))}</h3><p>${rich(r.description||r.summary)||'该记录暂无中文说明。'}</p>${(r.stats||[]).map(s=>`<p>${esc(s.label)}：${esc(s.value)} ${esc(s.unit||'')}</p>`).join('')}${r.level?`<p>等级：${esc(r.level)}</p>`:''}${r.hint?`<details><summary>查看任务提示（含剧透）</summary><p>${rich(r.hint)}</p>${r.finishText?`<p>完成说明：${rich(r.finishText)}</p>`:''}</details>`:''}${r.repeatable?'<span class="tag">可重复任务</span>':''}${r.locations?.length?`<p>相关地点：${r.locations.map(x=>esc(x.name||x)).join('、')}</p>`:''}${r.rewards?.length?`<div class="recipe-parts">${r.rewards.map(x=>`${itemLink(x.id||x.itemId,x.name)} × ${esc(x.amount||x.count||1)}`).join('<br>')}</div>`:''}${r.status?.length?`<p class="status-tag">${r.status.map(esc).join(' · ')}</p>`:''}${r.note&&!technicalText(r.note)?`<p class="fine-print">${rich(r.note)}</p>`:''}</article>`).join('')||'<div class="empty-state"><h2>没有匹配的记录</h2><p>请尝试其他名称或关键词。</p></div>'}</div>${data.length?pagination(listState.page,total,'list'):''}`;
  }
  function renderLibrary() {
    const tabs={skills:'角色技能',sets:'装备套装',notes:'废土笔记',factions:'势力阵营'};
    main.innerHTML=heading('成长与故事','查阅角色技能、套装奖励、势力以及废土中的文字记录。笔记保留原版内容，可能包含剧情信息。','PROGRESSION & LORE')+`<div class="filter-panel"><div class="filter-row">${Object.entries(tabs).map(([k,v])=>`<button class="chip ${k===libraryTab?'active':''}" data-library="${k}">${v} · ${fmt((C[k]||[]).length)}</button>`).join('')}</div><div class="filter-row"><input id="library-search" type="search" placeholder="搜索${tabs[libraryTab]}…" aria-label="搜索成长与故事" value="${esc(listState.query)}"></div></div><div id="library-results"></div>`;
    document.querySelectorAll('[data-library]').forEach(b=>b.addEventListener('click',()=>{libraryTab=b.dataset.library;listState={query:'',page:1};renderLibrary();}));
    bindSearch('#library-search',query=>{listState.query=query;listState.page=1;},renderLibraryResults);renderLibraryResults();
  }
  function renderLibraryResults() {
    const q=listState.query.toLocaleLowerCase();const data=(C[libraryTab]||[]).filter(r=>[r.name,r.description].join(' ').toLocaleLowerCase().includes(q));const total=Math.ceil(data.length/24);
    $('#library-results').innerHTML=`<div class="results-line">${fmt(data.length)} 条记录 · 包含历史与未开放内容</div><div class="list-grid">${data.slice((listState.page-1)*24,listState.page*24).map(r=>`<article class="info-card">${imagePath(r)?`<img class="record-image" src="${esc(imagePath(r))}" alt="${esc(getName(r))}" loading="lazy">`:''}<h3>${esc(getName(r))}</h3><p>${rich(r.description)}</p>${r.visible===false?'<span class="status-tag">特殊或未开放记录</span>':''}${r.items?.length?`<div class="recipe-parts">${r.items.map(x=>itemLink(x.id,x.name)).join('<br>')}</div>`:''}${r.bonuses?.length?`<div class="recipe-parts">${r.bonuses.map(x=>`<p>${esc(x.pieces)} 件套：${rich(x.description)}</p>`).join('')}</div>`:''}${r.details?.length?paragraphs(r.details):''}${r.levels?.length?`<details><summary>技能成长（${r.levels.length} 级）</summary><table><thead><tr><th>等级</th><th>说明</th><th>消耗</th></tr></thead><tbody>${r.levels.map(x=>`<tr><td>${esc(x.level)}</td><td>${rich(x.description)||'—'}</td><td>${esc(x.cost??'—')}</td></tr>`).join('')}</tbody></table></details>`:''}</article>`).join('')||'<div class="empty-state"><h2>没有匹配记录</h2></div>'}</div>${data.length?pagination(listState.page,total,'library'):''}`;
  }
  function ratesHtml(rates, grouped=false) {
    return rates?.length ? `<div class="table-scroll"><table><caption>${grouped?'奖励分组提示 · 各行不可相加':'盟友基础稀有度概率'}</caption><thead><tr><th>${grouped?'奖励分组说明':'盟友稀有度'}</th><th>${grouped?'组别提示概率':'基础概率'}</th></tr></thead><tbody>${rates.map(r=>`<tr><td>${esc(getName(r))}</td><td>${esc(r.percent)}%</td></tr>`).join('')}</tbody></table></div>` : '';
  }
  const paragraphs = x => (Array.isArray(x)?x:[x]).filter(Boolean).map(v=>`<p>${rich(typeof v==='string'?v:v.text||v.description||'')}</p>`).join('');
  const knownCost = value => value !== null && value !== undefined && value !== '' && Number.isFinite(Number(value));
  const mechanicState = {summonPage:1,lotteryPage:1,chestPage:1};
  const POOL_PAGE = 12;
  function poolPager(kind,page,total) {
    if (total<=1) return '';
    return `<nav class="pagination" aria-label="${kind==='summon'?'召唤':kind==='lottery'?'乐透':'宝箱'}记录分页"><button class="secondary-button" data-mechanic-page="${page-1}" data-mechanic-kind="${kind}" ${page<=1?'disabled':''}>← 上一页</button><span>第 ${page} / ${total} 页</span><button class="secondary-button" data-mechanic-page="${page+1}" data-mechanic-kind="${kind}" ${page>=total?'disabled':''}>下一页 →</button></nav>`;
  }
  function poolSearchText(pool) {
    return [pool.name,pool.event,pool.currency,pool.description,pool.featured,...(pool.rewards||[]).map(r=>r.name)].join(' ').toLocaleLowerCase();
  }
  function renderGacha() {
    Object.assign(mechanicState,{summonPage:1,lotteryPage:1,chestPage:1});
    main.innerHTML=heading('召唤 · 乐透 · 宝箱','基础概率、目标保证与活动消耗分别查阅。可按池名、活动、货币或候选奖励搜索；资料收录不代表当前开放。','THE ODDS / 机制研究')+
      `<div class="notice">这里的规则依据 2.278 内置资料。实际概率会受奖池条件、保证状态和活动规则影响；不能用基础概率推断所有召唤的真实结果。</div>
      <div class="two-column"><section class="content-panel"><div class="eyebrow">BEFORE YOU DRAW</div><h2>先读懂这几件事</h2>${(M.highlights||[]).map(h=>`<h3>${esc(h.title)}</h3><p>${rich(h.text)}</p>`).join('')||'<p>普通、新手与阿尔法召唤分别采用各自规则，请逐项查看奖池说明。</p>'}<a class="text-link" href="#guides">阅读完整机制与资源规划指南 →</a></section>
      <section class="content-panel"><div class="eyebrow">PROBABILITY LAB</div><h2>基础概率演算</h2><p>用于比较抽数的数学模型，不读取你的游戏计数或保证状态。</p><label for="calc-model">计算模型</label><select id="calc-model" style="max-width:100%;width:100%"><option value="independent">固定概率 · 独立抽取</option><option value="featured">独特结果50%目标 · 歪后下个独特必为目标</option></select><div class="calc-controls"><label><span id="calc-prob-label">单次目标概率（%）</span><input id="calc-p" inputmode="decimal" type="number" min="0" max="100" step="0.1" value="5"></label><label>抽取次数<input id="calc-n" inputmode="numeric" type="number" min="1" max="100000" step="1" value="10"></label></div><p id="calc-assumption" class="fine-print"></p><div class="calc-result" aria-live="polite"><span>至少获得一次目标</span><strong id="calc-value">40.13%</strong></div><div class="probability-bar" aria-hidden="true"><i id="calc-bar" style="width:40.13%"></i></div><p id="calc-detail" class="fine-print"></p><p id="calc-formula" class="fine-print"></p><p class="fine-print">${rich(M.calculator?.warning||'这是数学对照模型，不是实际召唤结果预测。新手保证池不适用。实际概率受有条件的奖励规则影响。')}</p></section></div>
      ${sectionHead('盟友召唤','COMPANION SUMMONS')}<div class="filter-panel"><div class="filter-row"><input id="summon-search" type="search" placeholder="搜索盟友、编码器或候选奖励…" aria-label="搜索召唤池"><select id="summon-kind" aria-label="召唤池类型"><option value="all">全部召唤</option><option value="basic">常规与新手</option><option value="featured">有目标保证说明</option><option value="event">其他活动召唤</option></select></div></div><div id="summon-results"></div>
      ${sectionHead('乐透与宝箱档案','EVENT LOTTERIES & CHESTS')}<p class="fine-print">包括历史活动和预置内容。费用、候选奖励与当前开放情况需要对应具体活动查看。每类每页展示12条记录。</p><div class="filter-panel"><div class="filter-row"><input id="pool-search" type="search" placeholder="搜索活动、宝箱、货币或候选奖励…" aria-label="搜索乐透与宝箱"><select id="pool-kind" aria-label="抽取记录类型"><option value="all">全部记录</option><option value="lottery">乐透翻牌</option><option value="chest">宝箱与随机礼包</option><option value="bonus">召唤附加奖励提示</option></select></div></div><div id="event-pools"></div>`;
    ['calc-p','calc-n','calc-model'].forEach(id=>$('#'+id).addEventListener('input',calculate));
    ['summon-search','summon-kind'].forEach(id=>$('#'+id).addEventListener('input',()=>{mechanicState.summonPage=1;renderSummons();}));
    ['pool-search','pool-kind'].forEach(id=>$('#'+id).addEventListener('input',()=>{mechanicState.lotteryPage=1;mechanicState.chestPage=1;renderPools();}));
    const changePage=event=>{
      const button=event.target.closest('[data-mechanic-page]');
      if (!button || button.disabled) return;
      const kind=button.dataset.mechanicKind;
      mechanicState[kind+'Page']=Number(button.dataset.mechanicPage);
      if (kind==='summon') renderSummons(); else renderPools();
      $('#'+(kind==='summon'?'summon-results':kind==='lottery'?'lottery-pool-section':'chest-pool-section'))?.scrollIntoView({behavior:'smooth',block:'start'});
    };
    $('#summon-results').addEventListener('click',changePage);
    $('#event-pools').addEventListener('click',changePage);
    calculate();renderSummons();renderPools();
  }
  function renderSummons() {
    const q=($('#summon-search')?.value||'').trim().toLocaleLowerCase(), kind=$('#summon-kind')?.value||'all';
    const hasTargetRule=p=>(p.pity||'').includes('下一个独特盟友肯定是');
    const basic=p=>p.currency==='编码器';
    const pools=(M.summons||[]).filter(p=>poolSearchText(p).includes(q)&&(kind==='all'||kind==='basic'&&basic(p)||kind==='featured'&&hasTargetRule(p)||kind==='event'&&!basic(p)&&!hasTargetRule(p))).sort((a,b)=>Number(basic(b))-Number(basic(a)));
    const total=Math.max(1,Math.ceil(pools.length/POOL_PAGE));
    mechanicState.summonPage=Math.max(1,Math.min(mechanicState.summonPage,total));
    const page=mechanicState.summonPage;
    $('#summon-results').innerHTML=`<div class="results-line" aria-live="polite">找到 ${fmt(pools.length)} 条召唤规则 · 当前展示 ${pools.length?Math.min(POOL_PAGE,pools.length-(page-1)*POOL_PAGE):0} 条</div><div class="pool-grid">${pools.slice((page-1)*POOL_PAGE,page*POOL_PAGE).map(p=>{
      const costs=[['单抽',p.costSingle],['十连原价',p.costTen],['活动十连价',p.costTenEvent]].filter(([,value])=>knownCost(value)).map(([label,value])=>`${label} ${esc(value)}`).join(' · ');
      return `<article class="pool-card"><div class="eyebrow">${esc(p.currency||'盟友招募')}</div><h3>${esc(p.name)}</h3>${p.availability?`<p class="fine-print">${rich(p.availability)}</p>`:''}${p.variants>1?`<p class="fine-print">合并 ${fmt(p.variants)} 份相同规则的活动记录。</p>`:''}${p.description?paragraphs(p.description):''}${ratesHtml(p.rates)}${costs?`<p>${costs} ${esc(p.currency||'')}</p>`:'<p>召唤消耗未确认。</p>'}${p.costNote?paragraphs(p.costNote):''}${p.featured?`<h4>关联盟友</h4>${paragraphs(p.featured)}`:''}${p.pity?`<h4>保证与保底说明</h4>${paragraphs(p.pity)}`:''}${paragraphs(p.notes)}${p.unknown?.length?`<details><summary>尚未确认的条件</summary>${paragraphs(p.unknown)}</details>`:''}${p.help?.length?`<details><summary>原版帮助说明</summary>${paragraphs(p.help)}</details>`:''}${p.rewards?.length?`<details><summary>候选奖励（${fmt(p.rewards.length)} 项）</summary>${p.rewardNote?`<p class="fine-print">${rich(p.rewardNote)}</p>`:''}${rewardList(p.rewards)}</details>`:''}</article>`;
    }).join('')||'<div class="empty-state"><h2>没有匹配的召唤记录</h2><p>试试其他盟友名称，或切换为全部召唤。</p></div>'}</div>${poolPager('summon',page,total)}`;
  }
  function rewardList(rows) {return `<ul>${rows.map(r=>`<li>${esc(r.name||r.title||'未命名奖励')}${r.amount!==undefined&&r.amount!==null?` × ${esc(r.amount)}`:''}${r.percent!==undefined&&r.percent!==null?` · ${esc(r.percent)}%`:''}</li>`).join('')}</ul>`;}
  function renderPools() {
    const q=($('#pool-search')?.value||'').trim().toLocaleLowerCase(),kind=$('#pool-kind')?.value||'all';
    const lotteries=(M.lotteries||[]).filter(p=>poolSearchText(p).includes(q)&&(kind==='all'||kind==='lottery'));
    const boxes=(M.chestPools||[]).filter(p=>poolSearchText(p).includes(q)&&(kind==='all'||kind==='chest'&&p.category!=='召唤附加奖励'||kind==='bonus'&&p.category==='召唤附加奖励'));
    const totalLottery=Math.max(1,Math.ceil(lotteries.length/POOL_PAGE)),totalChest=Math.max(1,Math.ceil(boxes.length/POOL_PAGE));
    mechanicState.lotteryPage=Math.max(1,Math.min(mechanicState.lotteryPage,totalLottery));
    mechanicState.chestPage=Math.max(1,Math.min(mechanicState.chestPage,totalChest));
    const lp=mechanicState.lotteryPage,cp=mechanicState.chestPage;
    $('#event-pools').innerHTML=`<div class="results-line" aria-live="polite">${fmt(lotteries.length)} 条乐透记录 · ${fmt(boxes.length)} 条宝箱及附加奖励提示</div>
      ${lotteries.length?`<section id="lottery-pool-section">${sectionHead('乐透翻牌','LOTTERY ARCHIVE')}<div class="pool-grid">${lotteries.slice((lp-1)*POOL_PAGE,lp*POOL_PAGE).map(p=>`<article class="pool-card"><div class="eyebrow">${esc(p.event||'活动记录')}</div><h3>${esc(p.name)}</h3>${p.availability?`<p class="fine-print">${rich(p.availability)}</p>`:''}${paragraphs(p.description)}<p>消耗货币：${esc(p.currency||'活动消耗')}${knownCost(p.refreshPrice)?` · 刷新基础费用 ${esc(p.refreshPrice)}`:''}${knownCost(p.refreshHours)&&Number(p.refreshHours)>0?` · 自然刷新间隔 ${esc(p.refreshHours)} 小时`:''}</p>${knownCost(p.excludeCount)?`<p>可排除的奖励名额：${esc(p.excludeCount)} 项</p>`:''}${p.costNote?`<p class="fine-print">${rich(p.costNote)}</p>`:''}${p.prices?.length?`<details><summary>翻牌基础费用表（${fmt(p.prices.length)} 档）</summary><div class="table-scroll"><table><thead><tr><th>次数</th><th>本次基础费用</th><th>阶梯费用累计</th></tr></thead><tbody>${p.prices.map(x=>`<tr><td>${esc(x.draw)}</td><td>${knownCost(x.cost)?esc(x.cost):'未确认'}</td><td>${knownCost(x.cumulative)?esc(x.cumulative):'未确认'}</td></tr>`).join('')}</tbody></table></div></details>`:''}${p.probabilityNote?`<p class="fine-print">${rich(p.probabilityNote)}</p>`:''}${p.rewards?.length?`<details><summary>候选奖励（${fmt(p.rewards.length)} 项）</summary>${p.rewardNote?`<p class="fine-print">${rich(p.rewardNote)}</p>`:''}${rewardList(p.rewards)}</details>`:''}</article>`).join('')}</div>${poolPager('lottery',lp,totalLottery)}</section>`:''}
      ${boxes.length?`<section id="chest-pool-section">${sectionHead(kind==='bonus'?'召唤附加奖励提示':'宝箱与奖励分组','CHESTS & REWARD GROUPS')}<p class="fine-print">同一次领取可以包含多个奖励组；表内百分比不能相加，也不是指定物品的单件掉率。</p><div class="pool-grid">${boxes.slice((cp-1)*POOL_PAGE,cp*POOL_PAGE).map(p=>`<article class="pool-card"><div class="eyebrow">${esc(p.category||'宝箱')} · ${esc(p.currency||'随机奖励')}</div><h3>${esc(p.name)}</h3>${p.availability?`<p class="fine-print">${rich(p.availability)}</p>`:''}${paragraphs(p.description)}${knownCost(p.cost)&&Number(p.cost)>0?`<p>基础标价：${esc(p.cost)} ${esc(p.currency||'')}</p>`:''}${paragraphs(p.costNote)}${p.descriptionInfo?paragraphs(p.descriptionInfo):''}${ratesHtml(p.rates,true)}${p.probabilityNote?`<p class="fine-print">${rich(p.probabilityNote)}</p>`:''}${p.rewards?.length?`<details><summary>候选奖励（${fmt(p.rewards.length)} 项）</summary>${p.rewardNote?`<p class="fine-print">${rich(p.rewardNote)}</p>`:''}${rewardList(p.rewards)}</details>`:''}</article>`).join('')}</div>${poolPager('chest',cp,totalChest)}</section>`:''}
      ${!lotteries.length&&!boxes.length?'<div class="empty-state"><h2>没有匹配的活动记录</h2><p>可搜索奖池、活动或奖励名称，也可以切换记录类型。</p></div>':''}`;
  }
  function calculate() {
    const pv=$('#calc-p').value,nv=$('#calc-n').value,p=Number(pv),n=Number(nv),featured=$('#calc-model').value==='featured';
    $('#calc-prob-label').textContent=featured?'单次独特概率（%）':'单次目标概率（%）';
    $('#calc-assumption').textContent=featured?'假设独特出现概率固定、各次独立；首次独特50%为目标，歪后下一个独特必为目标。起点为尚未进入目标保证状态。忽略其他软保底、抽数保底及活动条件。':'假设每次目标概率固定、各次独立，不计任何保底或概率递增。默认5%只是当前帮助中的独特基础概率。';
    $('#calc-formula').textContent=featured?'模型公式：1 − (1 − p)^n − 0.5 × n × p × (1 − p)^(n−1)，p为单次独特概率，n为抽数。':'模型公式：1 − (1 − p)^n，p为单次目标概率，n为抽数。';
    if(pv===''||nv===''||!Number.isFinite(p)||!Number.isInteger(n)||p<0||p>100||n<1||n>100000){$('#calc-value').textContent='—';$('#calc-detail').textContent='请输入 0–100 的概率，以及 1–100000 的整数次数。';$('#calc-bar').style.width='0%';return;}
    const chance=p/100;
    const independent=p===100?1:-Math.expm1(n*Math.log1p(-chance));
    const prob=Math.max(0,Math.min(1,featured?(p===100?(n===1 ? .5 : 1):independent-.5*n*chance*Math.exp((n-1)*Math.log1p(-chance))):independent));
    $('#calc-value').textContent=(prob*100).toFixed(2)+'%';$('#calc-bar').style.width=(prob*100)+'%';
    if(featured) {
      $('#calc-detail').textContent=p===0?'此模型下不会获得独特或目标。':`完全未获得目标：${((1-prob)*100).toFixed(2)}%。此模型平均等待 ${(1.5/chance).toFixed(2)} 次；平均值不是保证抽数。`;
    } else {
      const n50=p===0?'无法达到':p===100?'1次':`${Math.ceil(Math.log(.5)/Math.log1p(-chance))}次`;
      $('#calc-detail').textContent=`完全未获得：${((1-prob)*100).toFixed(2)}%。累计概率达到50%：${n50}（仅限上述独立模型）。`;
    }
  }
  function renderGuides() {
    const guides=M.guides||[];
    main.innerHTML=heading('生存指南','把图鉴数据转化成出发前的准备。以下说明依据原版帮助文本整理，具体解锁条件请结合游戏进度。','SURVIVOR NOTES / 阅读手册')+
      guides.map(g=>`<article class="content-panel"><div class="eyebrow">${esc(g.category||'SURVIVAL GUIDE')}</div><h2>${esc(g.title)}</h2><p>${rich(g.summary)}</p>${(g.sections||[]).map(s=>`<h3>${esc(s.title)}</h3>${paragraphs(s.paragraphs)}`).join('')}</article>`).join('')+
      `<div class="resource-list"><a href="#recipes">查制作配方 →</a><a href="#weapon">查武器属性 →</a><a href="#gacha">阅读召唤机制 →</a><a href="#locations">查看地图地点 →</a></div>`;
  }
  function renderAbout() {
    const imageCount = visible.filter(entry => imagePath(entry)).length;
    const downloads = S.downloads || {};
    const links = (rows, pattern) => (rows || []).map(row => {
      const href = localPath(row.href, pattern);
      return href ? `<a href="${esc(href)}" download>${esc(row.title)} ↓</a>` : '';
    }).join('');
    main.innerHTML = heading('收录说明与资料下载', '出发前查阅，离线时也能随手翻阅。这里说明图鉴的适用范围，并提供中文资料表和生存指南。', 'FIELD NOTES / 随身资料') +
      `<article class="content-panel"><div class="eyebrow">DAWN OF ZOMBIES</div><h2>僵尸的黎明，幸存者的随身百科</h2><p>根据游戏 2.278 的资料整理武器、装备、怪物、随从与生存机制。收藏只保存在当前浏览器，方便下次继续查阅。</p><div class="quality-grid">${[
        [visible.length,'可浏览图鉴'],[counts.weapon+counts.armor,'武器与防具'],[counts.enemy,'怪物与敌对生物'],
        [(C.recipes||[]).length,'制作配方'],[(C.locations||[]).length,'地图地点'],[(C.quests||[]).length,'任务档案']
      ].map(([number,label])=>`<div><strong>${fmt(number)}</strong><span>${label}</span></div>`).join('')}</div></article>
      <div class="two-column"><article class="content-panel"><h2>数值与活动说明</h2><ul><li>图鉴展示基础属性；等级、技能、套装和战斗条件会改变实战表现。</li><li>历史活动记录不代表当前开放，物品获取方式以游戏内为准。</li><li>同名条目可能是不同地区或活动的变体，请结合属性和说明辨别。</li><li>抽取机制区分基础概率与有条件的保证，不把所有奖励组相加。</li></ul></article><article class="content-panel"><h2>图片与缺失资料</h2><p>${fmt(imageCount)} 条可浏览资料配有游戏图片，${fmt(visible.length-imageCount)} 条暂缺独立图鉴。</p><p>没有对应图片时保留名称、用途与数值，并明确标注缺图。同模型的参考图也会单独说明，不使用猜测图片代替。</p><p>缺失名称或未确认条件会如实标注，后续可随资料更新补充。</p></article></div>
      <article class="content-panel"><h2>中文资料表</h2><p>下载分类表，方便离线查阅。也可以在图鉴筛选后导出当前结果。</p><div class="resource-list">${links(downloads.csv, /^data\/player\/[^/]+\.csv$/)}</div></article>
      <article class="content-panel"><h2>生存指南</h2><p>保存一份出征、装备、修理或召唤说明，按自己的节奏阅读。</p><div class="resource-list">${links(downloads.guides, /^guides\/[^/]+\.md$/)}</div><p class="fine-print">本站为非官方玩家资料整理。游戏名称与美术素材归原权利方所有。</p></article>`;
  }
  function setMenu(open, returnFocus = false) {
    const mobile = window.innerWidth <= 800;
    const active = Boolean(open && mobile);
    $('#sidebar').classList.toggle('open', active);
    $('#sidebar').inert = mobile && !active;
    $('#mobile-menu').setAttribute('aria-expanded', String(active));
    $('#menu-backdrop').hidden = !active;
    document.body.classList.toggle('menu-open', active);
    $('.workspace').inert = active;
    $('.atlas-nav').inert = active;
    if (active) {
      $('#sidebar').setAttribute('role', 'dialog');
      $('#sidebar').setAttribute('aria-modal', 'true');
      $('#menu-close').focus();
    } else {
      $('#sidebar').removeAttribute('role');
      $('#sidebar').removeAttribute('aria-modal');
      if (returnFocus && mobile) $('#mobile-menu').focus();
    }
  }
  function route() {
    cancelPendingSearch();
    const fromMenu = $('#sidebar').classList.contains('open');
    const [hash, paramsString] = (location.hash.slice(1)||'home').split('?');
    const params=new URLSearchParams(paramsString||'');const target=Object.hasOwn(labels,hash)?hash:'home';
    const changed=state.route!==target;state.route=target;
    if(changed){Object.assign(state,{query:target==='search'?params.get('q')||'':'',rarity:'',subtype:'',sort:'default',page:1,showHidden:false,onlyImages:false});listState={query:'',page:1};}
    if(target==='search')state.query=params.get('q')||state.query;
    $('#crumb').textContent=labels[target];document.title=labels[target]+' · 僵尸的黎明 · LCZ';renderNav();
    setMenu(false);
    if(target==='home')renderHome();else if(target==='gacha')renderGacha();else if(target==='guides')renderGuides();else if(target==='library')renderLibrary();else if(target==='about')renderAbout();else if(['recipes','locations','quests'].includes(target))renderList();else renderCatalog();
    main.setAttribute('aria-busy','false');
    if(fromMenu)main.focus({preventScroll:true});
    if(changed)window.scrollTo(0,0);
    if(params.has('entry'))openDetail(params.get('entry'));
  }
  document.addEventListener('click',e=>{
    const b=e.target.closest('[data-detail],[data-save],[data-compare],[data-close],[data-page],[data-permalink]');if(!b)return;
    if(b.hasAttribute('data-detail'))openDetail(b.dataset.detail);
    if(b.hasAttribute('data-save'))toggleFavorite(b.dataset.save);
    if(b.hasAttribute('data-compare'))toggleCompare(b.dataset.compare);
    if(b.hasAttribute('data-close'))b.closest('dialog').close();
    if(b.hasAttribute('data-page')){if(b.dataset.kind==='catalog'){state.page=Number(b.dataset.page);renderResults();}else{listState.page=Number(b.dataset.page);if(b.dataset.kind==='library')renderLibraryResults();else renderListResults();}window.scrollTo({top:220,behavior:'smooth'});}
    if(b.hasAttribute('data-permalink')){
      const entry=byId.get(b.dataset.permalink),url=location.href.split('#')[0]+'#'+(entry?.category||'search')+'?entry='+encodeURIComponent(b.dataset.permalink);
      const fallback=()=>{location.hash=url.split('#')[1];toast('已定位档案，可从地址栏复制链接');};
      if(navigator.clipboard?.writeText)navigator.clipboard.writeText(url).then(()=>toast('档案链接已复制')).catch(fallback);else fallback();
    }
  });
  document.addEventListener('error',e=>{if(e.target instanceof HTMLImageElement && !e.target.dataset.failed){e.target.dataset.failed='true';const span=document.createElement('span');span.className='empty-art';span.textContent='图鉴图片暂不可用';e.target.replaceWith(span);}},true);
  ['detail-dialog','compare-dialog'].forEach(id=>$('#'+id).addEventListener('click',e=>{if(e.target!==e.currentTarget)return;const r=e.currentTarget.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.currentTarget.close();}));
  $('#mobile-menu').addEventListener('click',()=>setMenu(!$('#sidebar').classList.contains('open')));
  $('#menu-close').addEventListener('click',()=>setMenu(false,true));
  $('#menu-backdrop').addEventListener('click',()=>setMenu(false,true));
  window.addEventListener('resize',()=>{if(innerWidth>800)setMenu(false);else $('#sidebar').inert=!$('#sidebar').classList.contains('open');});
  $('.skip-link').addEventListener('click',event=>{event.preventDefault();main.focus({preventScroll:true});main.scrollIntoView({block:'start'});});
  $('#global-search').addEventListener('keydown',e=>{if(e.key==='Enter'){const q=e.target.value.trim();location.hash='search?q='+encodeURIComponent(q);if(state.route==='search'){state.query=q;renderCatalog();}}});
  document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!$('dialog[open]')){e.preventDefault();$('#global-search').focus();}if(e.key==='Escape'&&$('#sidebar').classList.contains('open')){e.preventDefault();setMenu(false,true);}});
  document.addEventListener('keydown',event=>{
    if(event.key!=='Tab'||!$('#sidebar').classList.contains('open'))return;
    const links=[...$('#sidebar').querySelectorAll('a[href],button:not([disabled])')];
    const first=links[0],last=links[links.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  });
  window.addEventListener('hashchange',route);
  route();
})();
