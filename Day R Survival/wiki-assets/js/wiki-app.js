'use strict';
  const DATA = window.DAYR_DATA;
  const MONSTERS = window.DAYR_MONSTER_MANIFEST;
  const monsterIds = new Set(MONSTERS?.ids || []);
  const dataBase = new URL('../data/', document.currentScript.src);
  let monsterState = Array.isArray(DATA.monsters) ? 'ready' : 'idle', monsterPromise = null, navigationRevision = 0;

  const HERO_IMAGE = 'wiki-assets/images/hero.jpg';
  const $ = id => document.getElementById(id);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const icon = name => '<svg aria-hidden="true"><use href="#i-' + name + '"/></svg>';
  const formatNumber = value => new Intl.NumberFormat('zh-CN').format(value);
  const display = value => value == null ? '' : typeof value === 'object' ? (Array.isArray(value) ? value.map(display).join('、') : '资料待补充') : typeof value === 'boolean' ? (value ? '是' : '否') : String(value);
  const safeImage = value => { const image = DATA.images?.[value] || value; return typeof image === 'string' && !/^(?:javascript|vbscript):/i.test(image.trim()) ? image : ''; };
  const internalText = value => /(?:assets[\\/]|[a-zA-Z]:[\\/]|\.lua\b|\b[A-Za-z][A-Za-z0-9]*_[A-Za-z0-9_]+\b)/.test(String(value || ''));
  const readableName = (value, id) => typeof value === 'string' && value.trim() && value !== String(id || '') && !internalText(value);
  const playerName = (entry, fallback = '名称待补充') => [entry.name, entry.nameEn].find(value => readableName(value, entry.id)) || fallback;
  const playerTags = entry => (Array.isArray(entry.tags) ? entry.tags : []).filter(tag => !internalText(tag) && !/模板|测试配置|存档配置/.test(tag));
  const normalize = (entry, type, index) => ({...entry, id:String(entry.id ?? type + '_' + index), name:playerName(entry, type === 'monster' ? '未命名战斗单位' : '未命名物品'), nameEn:readableName(entry.nameEn, entry.id) ? entry.nameEn : '', category:String(entry.category || (type === 'monster' ? '未分类怪物' : '未分类物品')), tags:playerTags(entry), _type:type, _index:index});
  const items = (Array.isArray(DATA.items) ? DATA.items : []).map((item,i) => normalize(item,'item',i));
  const monsters = (Array.isArray(DATA.monsters) ? DATA.monsters : []).map((item,i) => normalize(item,'monster',i));
  const allRecords = [...items,...monsters];
  const isWeapon = item => item.category === '武器' || item.tags.includes('武器');
  const weapons = items.filter(isWeapon);
  const recordKey = item => item._type + ':' + item.id;
  const recordMap = new Map(allRecords.map(item => [recordKey(item),item]));
  const textIndex = new Map(allRecords.map(item => [recordKey(item), [item.name,item.nameEn,item.id,item.description,item.category,item.subcategory,...item.tags].map(display).join(' ').normalize('NFKC').toLocaleLowerCase()]));
  const knownRecord = key => typeof key === 'string' && (recordMap.has(key) || key.startsWith('monster:') && monsterIds.has(key.slice(8)));
  const loadStatus = document.createElement('div');
  loadStatus.id = 'archive-load-status'; loadStatus.className = 'empty'; loadStatus.hidden = true;
  loadStatus.setAttribute('role', 'status'); $('cardGrid').before(loadStatus);
  function showMonsterLoad(failed = false) {
    loadStatus.hidden = false; $('cardGrid').hidden = true; $('pageButtons').hidden = true;
    loadStatus.innerHTML = failed ? '<h3>怪物资料暂时未能打开</h3><p>请检查连接后重试。</p><button type="button" id="retry-monsters">重新加载资料</button>' : '<h3>正在打开怪物资料…</h3><p>首次打开需要加载，之后可直接继续查阅。</p>';
    $('retry-monsters')?.addEventListener('click', () => /^#monster=/.test(location.hash) && state.scope !== 'monsters' ? readHash() : setScope(state.scope));
  }
  function hideMonsterLoad() { loadStatus.hidden = true; $('cardGrid').hidden = false; $('pageButtons').hidden = false; }
  function needsMonsters() { return state.scope === 'monsters' || state.scope === 'favorites' && [...favorites].some(key => key.startsWith('monster:')); }
  function ensureMonsters() {
    if (monsterState === 'ready') return Promise.resolve();
    if (monsterPromise) return monsterPromise;
    monsterState = 'loading';
    monsterPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script'); let ended = false;
      const finish = error => {
        if (ended) return; ended = true; clearTimeout(timer); script.remove();
        if (error) reject(error); else resolve();
      };
      const timer = setTimeout(() => finish(new Error('怪物资料加载超时')), 15000);
      if (!MONSTERS || MONSTERS.schema !== 1 || !/^monsters\.js\?v=[a-f0-9]{16}$/.test(MONSTERS.url)) { finish(new Error('怪物资料目录缺失')); return; }
      script.src = new URL(MONSTERS.url, dataBase).href;
      script.onload = () => {
        try {
          const rows = DATA.monsters;
          if (!Array.isArray(rows) || rows.length !== MONSTERS.count || new Set(rows.map(row => String(row.id))).size !== MONSTERS.count || rows.some(row => !monsterIds.has(String(row.id)))) throw new Error('怪物资料不完整');
          for (const [index, row] of rows.entries()) {
            const item = normalize(row, 'monster', index), key = recordKey(item);
            monsters.push(item); allRecords.push(item); recordMap.set(key, item);
            textIndex.set(key, [item.name,item.nameEn,item.id,item.description,item.category,item.subcategory,...item.tags].map(display).join(' ').normalize('NFKC').toLocaleLowerCase());
          }
          monsterState = 'ready'; finish();
        } catch (error) { finish(error); }
      };
      script.onerror = () => finish(new Error('怪物资料加载失败'));
      document.head.append(script);
    }).catch(error => { monsterState = 'error'; monsterPromise = null; throw error; });
    return monsterPromise;
  }
  const state = {scope:'items',category:'',query:'',sort:'original',page:1};
  const PAGE_SIZE = 48;
  const favoriteStorageKey = 'day-r-field-archive-favorites-v1';
  let favorites = new Set(), activeRecord = null, toastTimer, lastTrigger = null;
  try { const stored = JSON.parse(localStorage.getItem(favoriteStorageKey) || '[]'); if (Array.isArray(stored)) favorites = new Set(stored.filter(knownRecord)); } catch (_) {}
  const scopeInfo = {
    items:{title:'全部物品',en:'ITEM INDEX',kicker:'SUPPLIES & EQUIPMENT',description:'从一枚螺母到一把步枪，寻找你需要的生存物资。'},
    weapons:{title:'武器图鉴',en:'WEAPON INDEX',kicker:'ARMORY & COMBAT',description:'认识每一件武器，在废土中争取更多生存机会。'},
    monsters:{title:'怪物图鉴',en:'COMBAT UNIT INDEX',kicker:'THREATS & ENCOUNTERS',description:'包含敌人、动物、变异生物、活动首领，以及宠物、盟友与玩家配置。'},
    favorites:{title:'我的收藏',en:'SAVED RECORDS',kicker:'PERSONAL FIELD NOTES',description:'随时查阅你收藏的物品与怪物。收藏保存在当前浏览器。'}
  };
  const baseRecords = () => state.scope === 'monsters' ? monsters : state.scope === 'weapons' ? weapons : state.scope === 'favorites' ? allRecords.filter(item => favorites.has(recordKey(item))) : items;
  const categoryOf = item => state.scope === 'weapons' && item.subcategory ? String(item.subcategory) : item.category;
  const categoryCounts = () => {const counts = new Map();baseRecords().forEach(item => counts.set(categoryOf(item),(counts.get(categoryOf(item)) || 0) + 1));return [...counts.entries()].sort((a,b) => b[1]-a[1] || a[0].localeCompare(b[0],'zh-CN'));};
  // Render only player-facing scalar attributes; keep original records untouched.
  const materialLabels = {tools_tag:'工具',glue_tag:'胶水',hacksaw_tag:'钢锯',knife_tag:'刀具',crowbar_tag:'撬棍',axe_tag:'斧头',shovel_tag:'铲子',opener_tag:'开罐工具',edible_food:'食物',repairable_weapon:'可修理的武器',repairable_transport:'可修理的载具'};
  function playerValue(value) {
    if (value === null || value === undefined) return '';
    if (typeof value !== 'string') return display(value);
    if (/^(?:weapon|armor|light|backpack|breath|transport)\s*\/\s*\d/.test(value)) return value.replace(/^[a-z]+\s*\/\s*/, '');
    if (/(?:assets[\\/]|[a-zA-Z]:[\\/]|\.lua\b)/.test(value)) return '资料待补充';
    return value.replace(/\b[A-Za-z][A-Za-z0-9_]*\b/g, token => {
      if (materialLabels[token]) return materialLabels[token];
      const ref = recordMap.get('item:' + token);
      if (ref) return ref.name;
      return token.includes('_') ? '名称待补充' : token;
    });
  }
  const availableStats = item => Object.entries(item.stats || {}).filter(([key,value]) => !/\bID\b|代码|模板/.test(key) && value !== null && value !== undefined && value !== '' && typeof value !== 'object').map(([key,value]) => [key,playerValue(value)]);
  const briefStats = item => {const entries=availableStats(item);const priority=['基础伤害','基础生命','基础攻击伤害','基础护甲','攻击行动点','射程','伤害','攻击','生命','生命值','护甲','防御','最大耐久','重量','饱食变化','饮水变化','容量'];return entries.map((entry,index)=>({entry,index,rank:priority.indexOf(entry[0])})).sort((a,b)=>(a.rank<0?99:a.rank)-(b.rank<0?99:b.rank)||a.index-b.index).map(x=>x.entry).filter(([,v])=>typeof v!=='object'&&display(v).length<34).slice(0,2);};
  function announce(message){clearTimeout(toastTimer);$('toast').textContent=message;$('toast').hidden=false;toastTimer=setTimeout(()=>$('toast').hidden=true,2600);}
  function saveFavorites(){try{localStorage.setItem(favoriteStorageKey,JSON.stringify([...favorites]));return true;}catch(_){return false;}}
  function updateFavoriteCount(){$('navFavorites').textContent=formatNumber(favorites.size);}
  function toggleFavorite(item){const key=recordKey(item),wasSaved=favorites.has(key);if(wasSaved)favorites.delete(key);else favorites.add(key);const persisted=saveFavorites();updateFavoriteCount();document.querySelectorAll('[data-favorite]').forEach(button=>{if(button.dataset.favorite===key){button.setAttribute('aria-pressed',String(!wasSaved));button.setAttribute('aria-label',(wasSaved?'收藏':'取消收藏')+' '+item.name);}});if(activeRecord && recordKey(activeRecord)===key){$('detailFavorite').setAttribute('aria-pressed',String(!wasSaved));$('detailFavorite').setAttribute('aria-label',wasSaved?'收藏此档案':'取消收藏此档案');}if(state.scope==='favorites'){renderCategories();render();}announce((wasSaved?'已取消收藏':'已加入收藏')+(persisted?'':' · 浏览器禁止本地存储，仅本次有效'));}
  function renderCategories(){const categories=categoryCounts();if(state.category&&!categories.some(([name])=>name===state.category))state.category='';$('categorySelect').innerHTML='<option value="">全部分类 ('+formatNumber(baseRecords().length)+')</option>'+categories.map(([name,count])=>'<option value="'+esc(name)+'">'+esc(name)+' ('+formatNumber(count)+')</option>').join('');$('categorySelect').value=state.category;const popular=categories.slice(0,7);if(state.category&&!popular.some(([name])=>name===state.category)){const selected=categories.find(([name])=>name===state.category);if(selected)popular.push(selected);}const chip=(name,label)=>'<button class="chip'+(state.category===name?' active':'')+'" data-category="'+esc(name)+'" aria-pressed="'+String(state.category===name)+'">'+esc(label)+'</button>';$('chipRow').innerHTML='<span class="chip-label">快速筛选</span>'+chip('','全部')+popular.map(([name])=>chip(name,name)).join('')+'<button class="filter-reset" id="resetFilters">'+icon('reset')+'重置筛选</button>';$('resetFilters').hidden=!state.category&&!state.query&&state.sort==='original';}
  async function setScope(scope){if(!scopeInfo[scope])return;const revision=++navigationRevision;state.scope=scope;state.category='';state.page=1;const info=scopeInfo[scope];$('catalogTitle').innerHTML=esc(info.title)+' <span>'+esc(info.en)+'</span>';$('sectionKicker').textContent=info.kicker;$('sectionDescription').textContent=info.description;document.querySelectorAll('[data-scope]').forEach(button=>{const active=button.dataset.scope===scope;button.classList.toggle('active',active);if(active)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');});if(needsMonsters()&&monsterState!=='ready'){showMonsterLoad();try{await ensureMonsters();}catch(_){if(revision===navigationRevision)showMonsterLoad(true);return;}if(revision!==navigationRevision)return;}hideMonsterLoad();renderCategories();render();}
  function filteredRecords(){const words=state.query.normalize('NFKC').toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);let rows=baseRecords().filter(item=>(!state.category||categoryOf(item)===state.category)&&words.every(word=>textIndex.get(recordKey(item)).includes(word)));if(state.sort==='name')rows.sort((a,b)=>a.name.localeCompare(b.name,'zh-CN',{numeric:true}));else if(state.sort==='id')rows.sort((a,b)=>a.id.localeCompare(b.id,'en',{numeric:true}));else if(state.sort==='category')rows.sort((a,b)=>categoryOf(a).localeCompare(categoryOf(b),'zh-CN')||a.name.localeCompare(b.name,'zh-CN'));return rows;}
  function cardMarkup(item) {
    const key=recordKey(item),saved=favorites.has(key),stats=briefStats(item),img=safeImage(item.image),symbol=item._type==='monster'?'skull':isWeapon(item)?'weapon':'box';
    return '<article class="card"><button class="card-fav" data-favorite="'+esc(key)+'" aria-label="'+(saved?'取消收藏':'收藏')+' '+esc(item.name)+'" aria-pressed="'+saved+'">'+icon('star')+'</button><button class="card-main" data-record="'+esc(key)+'" aria-label="查看 '+esc(item.name)+' 的完整档案"><div class="card-picture"><span class="card-type">'+esc(categoryOf(item))+'</span><span class="card-placeholder"'+(img?' hidden':'')+'>'+icon(symbol)+'<span>暂无图像</span></span>'+(img?'<img class="card-image" src="'+esc(img)+'" alt="" loading="lazy" decoding="async">':'')+'<span class="card-index">'+(item._type==='monster'?'战斗单位':'物品档案')+'</span></div><div class="card-body"><h3 class="card-title">'+esc(item.name)+'</h3>'+(item.nameEn?'<div class="card-en">'+esc(item.nameEn)+'</div>':'')+'<div class="card-stats">'+(stats.length?stats.map(([k,v])=>'<span class="card-stat">'+esc(k)+'<b>'+esc(display(v))+'</b></span>').join(''):'<span class="card-stats-empty">查看档案资料</span>')+'</div></div><div class="card-footer"><span>查看详情</span>'+icon('arrow')+'</div></button></article>';
  }
  function bindImageFallbacks(container){container.querySelectorAll('img').forEach(img=>{const fail=()=>{img.hidden=true;const placeholder=img.parentElement.querySelector('.card-placeholder');if(placeholder)placeholder.hidden=false;};img.addEventListener('error',fail,{once:true});if(img.complete&&img.naturalWidth===0)fail();});}
  function render(){if(needsMonsters()&&monsterState!=='ready'){showMonsterLoad(monsterState==='error');return;}hideMonsterLoad();const rows=filteredRecords(),pages=Math.max(1,Math.ceil(rows.length/PAGE_SIZE));state.page=Math.max(1,Math.min(state.page,pages));const start=(state.page-1)*PAGE_SIZE,end=Math.min(start+PAGE_SIZE,rows.length);$('clearSearch').hidden=!state.query;$('catalogReadout').textContent='CATALOG / '+String(baseRecords().length).padStart(4,'0');$('resultsText').innerHTML='找到 <strong>'+formatNumber(rows.length)+'</strong> 条档案'+(rows.length?' <span class="dot-sep">/</span> 正在显示 '+formatNumber(start+1)+'–'+formatNumber(end):'');$('cardGrid').innerHTML=rows.length?rows.slice(start,end).map(cardMarkup).join(''):'<div class="empty">'+icon(state.scope==='favorites'&&!state.query&&!state.category?'star':'search')+'<h3>'+(state.scope==='favorites'&&!favorites.size?'你的档案袋还是空的':'没有找到匹配的档案')+'</h3><p>'+(state.scope==='favorites'&&!favorites.size?'点击物品或怪物卡片右上角的星标，把它加入收藏。':'尝试减少搜索关键词，或切换分类。支持物品名称、英文名称与说明关键词。')+'</p><button data-empty-reset>'+(state.scope==='favorites'&&!favorites.size?'浏览全部物品':'清除筛选条件')+'</button></div>';bindImageFallbacks($('cardGrid'));$('pageReadout').textContent='PAGE '+String(state.page).padStart(2,'0')+' / '+String(pages).padStart(2,'0');const slots=new Set([1,pages,state.page-1,state.page,state.page+1]);if(state.page<=2){slots.add(2);slots.add(3);}if(state.page>=pages-1){slots.add(pages-1);slots.add(pages-2);}const numbers=[...slots].filter(n=>n>0&&n<=pages).sort((a,b)=>a-b);let last=0;const button=(page,label,aria,active=false,disabled=false)=>'<button class="page-btn'+(active?' active':'')+'" data-page="'+page+'" aria-label="'+aria+'"'+(active?' aria-current="page"':'')+(disabled?' disabled':'')+'>'+label+'</button>';$('pageButtons').innerHTML=button(state.page-1,icon('prev'),'上一页',false,state.page<=1)+numbers.map(n=>{const gap=last&&n-last>1?'<span class="page-gap" aria-hidden="true">…</span>':'';last=n;return gap+button(n,String(n),'第 '+n+' 页',n===state.page);}).join('')+button(state.page+1,icon('next'),'下一页',false,state.page>=pages);const reset=$('resetFilters');if(reset)reset.hidden=!state.category&&!state.query&&state.sort==='original';}
  function clearFilters(){state.category='';state.query='';state.sort='original';state.page=1;$('search').value='';$('sortSelect').value='original';renderCategories();render();}
  function detailHash(item){return '#'+item._type+'='+encodeURIComponent(item.id);}
  function extraDetails(item) {
    const missing = value => value === null || value === undefined || value === '' ? '—' : playerValue(value);
    const linkedName = (entry, fallback) => {
      const ref=recordMap.get('item:'+entry.id);
      const label=ref ? ref.name : playerName(entry, fallback);
      return ref ? '<button class="record-link" data-linked-item="'+esc(entry.id)+'">'+esc(label)+'</button>' : esc(label);
    };
    let html='<div class="detail-caution"><strong>基础属性参考</strong><br>实战可能受等级、技能与活动规则影响。缺少的属性以「—」表示。'+(item.loaded===false?'<br>此条目可能属于历史或尚未开放的内容。':'')+(item.friendly===true?'<br>此档案为友方单位。':'')+'</div>';
    if(Array.isArray(item.attacks)&&item.attacks.length) html+='<h3 class="detail-section-title">ATTACKS / 攻击方式</h3><div class="detail-table-wrap"><table class="detail-table"><thead><tr><th scope="col">攻击 / 武器</th><th scope="col">基础伤害</th><th scope="col">射程</th><th scope="col">行动点</th><th scope="col">类型</th></tr></thead><tbody>'+item.attacks.map(attack=>'<tr><td>'+linkedName(attack,attack.isMelee===true?'近战攻击':attack.isMelee===false?'远程攻击':'攻击方式')+'</td><td>'+esc(Array.isArray(attack.damage)?attack.damage.map(missing).join('–'):missing(attack.damage))+'</td><td>'+esc(missing(attack.range))+'</td><td>'+esc(missing(attack.ap))+'</td><td>'+esc(attack.isMelee===true?'近战':attack.isMelee===false?'远程':'—')+'</td></tr>').join('')+'</tbody></table></div>';
    if(Array.isArray(item.loot)&&item.loot.length) html+='<h3 class="detail-section-title">LOOT / 掉落物品</h3><div class="detail-table-wrap"><table class="detail-table"><thead><tr><th scope="col">物品</th><th scope="col">数量范围</th></tr></thead><tbody>'+item.loot.map(loot=>'<tr><td>'+linkedName(loot,'未命名物品')+'</td><td>'+esc(Array.isArray(loot.quantity)?loot.quantity.map(missing).join('–'):missing(loot.quantity))+'</td></tr>').join('')+'</tbody></table></div><p class="detail-footnote">实际掉落概率与结果以游戏为准。</p>';
    const perks=(Array.isArray(item.perks)?item.perks:[]).filter(perk=>typeof perk==='string' && /[\u4e00-\u9fff]/.test(perk) && !internalText(perk));
    if(perks.length) html+='<h3 class="detail-section-title">PERKS / 特性</h3><div class="tags">'+perks.map(perk=>'<span class="tag">'+esc(perk)+'</span>').join('')+'</div>';
    return html;
  }
  function openDetail(item,updateHash=true,trigger=null) {
    if(!item)return;
    activeRecord=item;lastTrigger=trigger||lastTrigger;
    const img=safeImage(item.image),stats=availableStats(item),symbol=item._type==='monster'?'skull':isWeapon(item)?'weapon':'box';
    $('detailKicker').textContent=item._type==='monster'?'CREATURE / 战斗档案':'ITEM / 物品档案';
    $('detailFavorite').setAttribute('aria-pressed',String(favorites.has(recordKey(item))));
    $('detailFavorite').setAttribute('aria-label',favorites.has(recordKey(item))?'取消收藏此档案':'收藏此档案');
    $('detailContent').innerHTML='<div class="detail-heading"><div class="detail-picture"><span class="card-placeholder"'+(img?' hidden':'')+'>'+icon(symbol)+'<span>暂无图像</span></span>'+(img?'<img src="'+esc(img)+'" alt="'+esc(item.name)+'">':'')+'</div><div><div class="detail-category">'+esc(item.category)+(item.subcategory&&item.subcategory!==item.category?' / '+esc(playerValue(item.subcategory)):'')+'</div><h2 class="detail-name" id="detailName">'+esc(item.name)+'</h2>'+(item.nameEn?'<div class="detail-en">'+esc(item.nameEn)+'</div>':'')+(item.tags.length?'<div class="tags">'+item.tags.map(tag=>'<span class="tag">'+esc(display(tag))+'</span>').join('')+'</div>':'')+'</div></div>'+(item.description?'<p class="detail-description">'+esc(playerValue(item.description))+'</p>':'')+'<h3 class="detail-section-title">ATTRIBUTES / 物品与战斗属性</h3>'+(stats.length?'<dl class="stats-grid">'+stats.map(([k,v])=>'<div class="stat"><dt>'+esc(k)+'</dt><dd>'+esc(display(v))+'</dd></div>').join('')+'</dl>':'<div class="detail-missing">暂无可展示的属性数值。</div>')+extraDetails(item)+'<p class="detail-footnote">缺少属性不代表数值为零；等级、装备和活动规则可能影响实际表现。</p>';
    bindImageFallbacks($('detailContent'));
    const dialog=$('detailDialog');if(!dialog.open)dialog.showModal();dialog.scrollTop=0;
    if(updateHash){try{history.replaceState(null,'',detailHash(item));}catch(_){location.hash=detailHash(item);}}
  }
  function closeDetail(){navigationRevision++;const dialog=$('detailDialog');if(dialog.open)dialog.close();activeRecord=null;try{history.replaceState(null,'',location.pathname+location.search);}catch(_){}if(lastTrigger&&lastTrigger.isConnected)lastTrigger.focus();else $('search').focus();}
  async function readHash(){
    const hash=location.hash,match=hash.match(/^#(item|monster)=(.*)$/);if(!match)return;
    const revision=++navigationRevision;
    try {
      const key=match[1]+':'+decodeURIComponent(match[2]);
      if(!knownRecord(key)){announce('未找到此链接对应的档案');return;}
      if(match[1]==='monster'&&monsterState!=='ready'){
        showMonsterLoad();
        try{await ensureMonsters();}catch(_){if(revision===navigationRevision&&hash===location.hash)showMonsterLoad(true);return;}
        if(revision!==navigationRevision||hash!==location.hash)return;
        hideMonsterLoad();
      }
      const item=recordMap.get(key);if(item)openDetail(item,false);else announce('未找到此链接对应的档案');
    }catch(_){announce('档案链接格式不正确');}
  }

  async function copyRecordLink(){if(!activeRecord)return;const url=location.href.split('#')[0]+detailHash(activeRecord);try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(url);}else{const textarea=document.createElement('textarea');textarea.value=url;textarea.setAttribute('readonly','');textarea.style.cssText='position:fixed;opacity:0;left:0;top:0;';$('detailDialog').appendChild(textarea);textarea.select();const copied=document.execCommand('copy');textarea.remove();if(!copied)throw new Error('copy');}announce('档案链接已复制');}catch(_){announce('复制受浏览器限制，可从地址栏复制此页面链接。');}}
  document.querySelectorAll('[data-scope]').forEach(button=>button.addEventListener('click',()=>setScope(button.dataset.scope)));
  document.querySelector('.brand').addEventListener('click',event=>{event.preventDefault();clearFilters();setScope('items');window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});});
  $('search').addEventListener('input',event=>{state.query=event.target.value;state.page=1;render();});
  $('clearSearch').addEventListener('click',()=>{state.query='';state.page=1;$('search').value='';$('search').focus();render();});
  $('categorySelect').addEventListener('change',event=>{state.category=event.target.value;state.page=1;renderCategories();render();});
  $('sortSelect').addEventListener('change',event=>{state.sort=event.target.value;state.page=1;render();});
  $('chipRow').addEventListener('click',event=>{const reset=event.target.closest('#resetFilters'),chip=event.target.closest('[data-category]');if(reset)clearFilters();else if(chip){state.category=chip.dataset.category;state.page=1;renderCategories();render();}});
  $('cardGrid').addEventListener('click',event=>{const favorite=event.target.closest('[data-favorite]'),card=event.target.closest('[data-record]'),empty=event.target.closest('[data-empty-reset]');if(favorite){const item=recordMap.get(favorite.dataset.favorite);if(item)toggleFavorite(item);}else if(card)openDetail(recordMap.get(card.dataset.record),true,card);else if(empty){if(state.scope==='favorites'&&!favorites.size){clearFilters();setScope('items');}else clearFilters();}});
  $('pageButtons').addEventListener('click',event=>{const button=event.target.closest('[data-page]');if(button&&!button.disabled){state.page=Number(button.dataset.page);render();$('catalog').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});const current=$('pageButtons').querySelector('[aria-current="page"]');if(current)current.focus({preventScroll:true});}});
  $('closeDetail').addEventListener('click',closeDetail);
  $('detailDialog').addEventListener('cancel',event=>{event.preventDefault();closeDetail();});
  $('detailDialog').addEventListener('click',event=>{if(event.target===$('detailDialog')){const rect=event.target.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)closeDetail();}});
  $('detailFavorite').addEventListener('click',()=>{if(activeRecord)toggleFavorite(activeRecord);});
  $('copyLink').addEventListener('click',copyRecordLink);
  $('detailContent').addEventListener('click',event=>{const link=event.target.closest('[data-linked-item]');if(link)openDetail(recordMap.get('item:'+link.dataset.linkedItem));});
  document.addEventListener('keydown',event=>{if(event.key==='/'&&!$('detailDialog').open&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){event.preventDefault();$('search').focus();}});
  window.addEventListener('hashchange',()=>{if(/^#(item|monster)=/.test(location.hash))readHash();else if($('detailDialog').open)closeDetail();});
  window.addEventListener('storage',event=>{if(event.key!==favoriteStorageKey)return;try{const parsed=JSON.parse(event.newValue||'[]');if(Array.isArray(parsed)){favorites=new Set(parsed.filter(knownRecord));updateFavoriteCount();if(state.scope==='favorites')setScope('favorites');else render();if(activeRecord)$('detailFavorite').setAttribute('aria-pressed',String(favorites.has(recordKey(activeRecord))));}}catch(_){}});
  const meta=DATA.meta||{};
  [['countItems',items.length],['countWeapons',weapons.length],['countMonsters',MONSTERS?.count||monsters.length],['navItems',items.length],['navWeapons',weapons.length],['navMonsters',MONSTERS?.count||monsters.length]].forEach(([id,count])=>$(id).textContent=formatNumber(count));
  updateFavoriteCount();
  if(meta.version){$('sideVersion').textContent='APK / '+display(meta.version);$('heroVersion').textContent='BUILD '+display(meta.version)+' / LOCAL EXTRACTION';}
  $('provenance').textContent='资料版本：'+display(meta.version || '未注明')+'。本页面为非官方玩家资料索引，游戏名称、文本和美术资源归原权利方所有。历史及活动内容不代表当前均可获取。';
  if(HERO_IMAGE&&HERO_IMAGE!=='__'+'HERO_IMAGE'+'__'){const hero=$('heroImage');hero.src=safeImage(HERO_IMAGE);hero.hidden=false;hero.addEventListener('error',()=>hero.hidden=true,{once:true});}
  renderCategories();render();readHash();
