'use strict';
let DB=window.WIKI_DB;
const bootstrapMeta=DB._bootstrap;
let catalogPending=null,catalogRequested=false;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clean=v=>String(v??'').replace(/<[^>]*>/g,'').replace(/\\n/g,'\n').trim();
const numberFormatter=new Intl.NumberFormat('zh-CN',{maximumFractionDigits:4});
const fmt=v=>typeof v==='number'?numberFormatter.format(v):String(v??'—');
const RARITY={common:'普通',uncommon:'优秀',rare:'稀有',epic:'史诗',legendary:'传说'};
const RANK={common:1,uncommon:2,rare:3,epic:4,legendary:5};
const EQUIPMENT={weapon:'武器',armor:'护甲',tool:'采集工具',backpack:'背包',accessory:'饰品',mount_equipment:'坐骑装备'};
const PAGE_SIZE=60;
let equipmentById,items,pets,skins,perks,all,entityMap,itemById,searchIndex;
const categories=Array.isArray(DB.inventory.categories)?DB.inventory.categories:Object.entries(DB.inventory.categories).map(([id,x])=>typeof x==='object'?{id,...x}:{id,label:id,count:x});
const categoryById=new Map(categories.map(c=>[c.id,c]));
const categoryOrder=new Map(categories.map((c,i)=>[c.id,i]));
const historical=x=>Boolean(x.legacy||x.placeholder_image||['special_legacy','special_bound_legacy'].includes(equipmentById.get(x.equipment_id||x.id)?.official_inclusion_status));
const state={domain:'items',category:'all',subcategory:'all',tier:'all',rarity:'all',sort:'default',page:1,mode:'grid'};
let selected=null,previousFocus=null,detailHistory=[],detailRequest=0;
const statDisplay=s=>s.display??(Array.isArray(s.value)?s.value.map(fmt).join('–'):fmt(s.value))+(s.unit||'');
const name=x=>clean(x.name||x.name_zh||x.name_en||'名称待补充');
const categoryName=x=>x._kind==='item'?(x.category_label||categoryById.get(x.category)?.label||EQUIPMENT[x.category]||'其他物品'):x._kind==='pet'?({combat:'战斗宠物',mount:'坐骑',decor:'家园宠物'}[x.type]||'宠物'):x._kind==='skin'?'宠物外观':'宠物技能';
const description=x=>clean(x.description||x.description_zh||equipmentById.get(x.equipment_id||x.id)?._wiki?.description_zh||'');
const imageKey=x=>x.image_key||equipmentById.get(x.equipment_id||x.id)?.image_key;
const picture=x=>{const key=imageKey(x);return `<div class="image-tile">${key&&DB.images[key]?`<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-wiki-image="${esc(key)}" alt="${esc(name(x))}${x.placeholder_image?'（游戏原始占位图）':''}" loading="lazy" decoding="async">`:`<span class="image-placeholder">${x._kind==='perk'?'技能':'暂无图像'}</span>`}</div>`};
const badge=(t,cls='')=>`<span class="badge ${cls}">${esc(t)}</span>`;
function badges(x){return `<div class="badges">${x.tier!=null?badge('T'+x.tier):''}${x.rarity?badge(RARITY[x.rarity]||x.rarity,'rarity-'+esc(x.rarity)):''}${badge(categoryName(x))}${x._kind==='item'&&historical(x)?badge('历史物品'):''}</div>`}
function basicStats(x){
  if(x.numeric?.summary?.length)return x.numeric.summary;
  if(x.stats?.length)return x.stats.filter(s=>s.value!=null||s.display);
  if(x._kind==='perk')return [['概率',x.chance!=null?x.chance*100:null,'%'],['持续时间',x.duration,'秒'],['冷却时间',x.cooldown,'秒']].filter(v=>v[1]!=null).map(([label,value,unit])=>({label,value,unit}));
  const values=[];
  if(x.max_stack!=null)values.push({label:'堆叠上限',value:x.max_stack,unit:'件'});
  if(x.level_cap!=null)values.push({label:'等级上限',value:x.level_cap});
  return values;
}
function searchText(x){if(x._search_text!==undefined)return [x.id,x._search_text].join(' ').toLowerCase();return [name(x),x.id,x.name_en,description(x),categoryName(x),x.subcategory_label,x.subcategory,x.species_zh,x.species,x.search_text,x.usage,x.uses,x.workbenches,x.locations,(Array.isArray(x.stats)?x.stats:[]).map(s=>[s.label,s.display,s.value].join(' ')),(x.skins||[]).map(s=>s.name_zh)].flat(2).filter(Boolean).join(' ').toLowerCase()}
function refreshCatalog(){
  equipmentById=new Map(DB.equipment.map(x=>[x.item_id,x]));
items=DB.inventory.items.map(x=>({...x,_kind:'item',subcategory_label:x.subcategory_label||x.subcategory,numeric:equipmentById.get(x.equipment_id||x.id)?.numeric||x.numeric})).sort((a,b)=>(categoryOrder.get(a.category)-categoryOrder.get(b.category))||(Number(historical(a))-Number(historical(b)))||((Number(a.tier)||0)-(Number(b.tier)||0))||((RANK[a.rarity]||0)-(RANK[b.rarity]||0)));
pets=[...DB.pets,...DB.decor].map(x=>({...x,_kind:'pet',name:x.display_zh||x.name_zh||'名称待补充',name_en:x.display_en,category:x.type,description:x.description_zh||''}));
skins=DB.skin_catalog.map(x=>({...x,_kind:'skin',name:x.name_zh||'名称待补充',description:x.description_zh,name_en:x.name_en}));
perks=Object.values(DB.perks).map(x=>({...x,_kind:'perk',name:x.name_zh||'名称待补充',description:x.description_text||x.description_zh,name_en:x.name_en}));
all=[...items,...pets,...skins,...perks];
entityMap=new Map(all.map(x=>[x._kind+':'+x.id,x]));
itemById=new Map(items.map(x=>[x.id,x]));
  searchIndex=new Map(all.map(x=>[x._kind+':'+x.id,searchText(x)]));
}
refreshCatalog();
const catalogCounts=bootstrapMeta?.counts||{items:items.length,pets:pets.length,skins:skins.length,perks:perks.length,all:all.length};
function catalogStatus(failed=false){
  $('#view').setAttribute('aria-busy',String(!failed));
  $('#resultCount').textContent=failed?'完整资料暂未加载成功。':'正在读取完整资料，您的筛选条件会保留…';
  if(failed){const retry=document.createElement('button');retry.type='button';retry.className='secondary-button';retry.dataset.retryCatalog='';retry.textContent='重新读取';$('#resultCount').append(' ',retry)}
}
function loadFullCatalog(){
  if(!DB._bootstrap)return Promise.resolve();
  if(!catalogPending){
    catalogStatus();
    catalogPending=window.WestlandAssets.load('wiki/data/index.js').then(()=>{
      if(window.WIKI_DB._bootstrap||!Array.isArray(window.WIKI_DB.inventory?.items))throw Error('Incomplete catalog');
      DB=window.WIKI_DB;refreshCatalog();
      $('#view').removeAttribute('aria-busy');renderFilters();render();
    }).catch(error=>{catalogPending=null;catalogStatus(true);throw error});
  }
  return catalogPending;
}
function requestCatalog(){catalogRequested=true;loadFullCatalog().catch(()=>{});}

function sourceRows(){return state.domain==='items'?items:state.domain==='pets'?pets:state.domain==='skins'?skins:state.domain==='perks'?perks:all}
function categoryRows(){return sourceRows().filter(x=>state.category==='all'||x.category===state.category||x.type===state.category)}
function filteredRows(){
  const tokens=$('#search').value.trim().toLowerCase().split(/\s+/).filter(Boolean);
  let rows=categoryRows().filter(x=>(state.subcategory==='all'||(x.subcategory||x.species)===state.subcategory)&&(state.tier==='all'||String(x.tier)===state.tier)&&(state.rarity==='all'||x.rarity===state.rarity)&&tokens.every(t=>searchIndex.get(x._kind+':'+x.id).includes(t)));
  if(state.sort==='name')rows.sort((a,b)=>name(a).localeCompare(name(b),'zh-CN'));
  if(state.sort==='tier-desc')rows.sort((a,b)=>(Number(b.tier)||0)-(Number(a.tier)||0));
  if(state.sort==='rarity')rows.sort((a,b)=>(RANK[b.rarity]||0)-(RANK[a.rarity]||0));
  return rows;
}
function setOptions(id,values,defaultLabel,label=v=>v){const el=$('#'+id);el.innerHTML=`<option value="all">${esc(defaultLabel)}</option>`+values.map(v=>`<option value="${esc(v)}">${esc(label(v))}</option>`).join('');if(!values.map(String).includes(state[id]))state[id]='all';el.value=state[id]}
function renderFilters(){
  if(DB._bootstrap&&catalogRequested)return;
  const rows=sourceRows();
  const groups=state.domain==='items'?categories.map(c=>({id:c.id,label:c.label,count:c.count})):state.domain==='pets'?['combat','mount','decor'].map(id=>({id,label:{combat:'战斗宠物',mount:'坐骑',decor:'家园宠物'}[id],count:pets.filter(x=>x.type===id).length})):[];
  const symbols=['◈','⌁','◇','⊞','♧','◉','✧','▧','◎','▤','♢','⊡'];
  $('#categoryList').innerHTML=[{id:'all',label:state.domain==='items'?'全部物品':state.domain==='all'?'全部内容':'全部条目',count:DB._bootstrap?catalogCounts.items:rows.length},...groups].map((c,i)=>`<button class="category-button ${state.category===c.id?'active':''}" data-category="${esc(c.id)}" aria-pressed="${state.category===c.id}"><span class="cat-symbol" aria-hidden="true">${symbols[i%symbols.length]}</span><span class="cat-label">${esc(c.label)}</span><span class="cat-count">${fmt(c.count)}</span></button>`).join('');
  if(DB._bootstrap){
    const filters=bootstrapMeta.filters;
    setOptions('subcategory',filters.subcategory.map(row=>row.value),'全部类型',v=>filters.subcategory.find(row=>row.value===v).label);
    setOptions('tier',filters.tier,'全部阶级',v=>'T'+v);
    setOptions('rarity',filters.rarity,'全部品质',v=>RARITY[v]||v);
    return;
  }
  const subset=categoryRows();
  const subs=[...new Set(subset.map(x=>x.subcategory||x.species).filter(Boolean))];
  setOptions('subcategory',subs,'全部类型',v=>{const x=subset.find(x=>(x.subcategory||x.species)===v);return x.subcategory_label||x.species_zh||v});
  setOptions('tier',[...new Set(subset.map(x=>x.tier).filter(x=>x!=null))].sort((a,b)=>Number(a)-Number(b)),'全部阶级',v=>'T'+v);
  setOptions('rarity',[...new Set(subset.map(x=>x.rarity).filter(Boolean))].sort((a,b)=>(RANK[a]||0)-(RANK[b]||0)),'全部品质',v=>RARITY[v]||v);
  $('#subcategory').disabled=!subs.length;$('#tier').disabled=!subset.some(x=>x.tier!=null);$('#rarity').disabled=!subset.some(x=>x.rarity);
}
function resetFilters(clearSearch=true){Object.assign(state,{category:'all',subcategory:'all',tier:'all',rarity:'all',sort:'default',page:1});if(clearSearch)$('#search').value='';$('#sort').value='default';renderFilters();render()}
function changeDomain(domain,keepSearch=false){if(!['items','pets','skins','perks','all'].includes(domain))domain='items';state.domain=domain;resetFilters(!keepSearch);$$('[data-domain]').forEach(b=>{b.classList.toggle('active',b.dataset.domain===domain);b.setAttribute('aria-current',b.dataset.domain===domain?'page':'false')});const titles={items:['每一件物品，都有据可查。','从一根松木到一把左轮，查找物品、了解用途，出发前心中有数。'],pets:['一路同行的西部伙伴。','了解每种宠物与坐骑的属性、成长、繁育及专属技能。'],skins:['熟悉的伙伴，不同的模样。','浏览宠物的官方外观，查看描述与关联信息。'],perks:['读懂伙伴的每一项本领。','查看宠物技能、作用效果、触发几率与冷却时间。'],all:['让每一次查找，都有答案。','同时搜索物品、宠物、外观与技能，支持中文名称、英文名称、实体代码和用途。']};$('#pageTitle').textContent=titles[domain][0];$('#pageDescription').textContent=titles[domain][1];$('#search').placeholder=domain==='items'?'搜索物品名称、代码或用途…':'搜索名称、代码或说明…';}
function render(){
  if(DB._bootstrap&&catalogRequested){requestCatalog();return}
  const rows=filteredRows(),total=DB._bootstrap?catalogCounts.items:rows.length,pageCount=Math.max(1,Math.ceil(total/PAGE_SIZE));state.page=Math.min(state.page,pageCount);
  const start=(state.page-1)*PAGE_SIZE,visible=rows.slice(start,start+PAGE_SIZE);
  const section=state.category!=='all'?$('#categoryList [data-category="'+CSS.escape(state.category)+'"] .cat-label')?.textContent:null;
  $('#sectionTitle').textContent=section||({items:'全部物品',pets:'宠物与坐骑',skins:'宠物外观',perks:'宠物技能',all:'全站检索'}[state.domain]);
  $('#resultCount').textContent=rows.length?`共 ${fmt(total)} 项 · 当前 ${fmt(start+1)}–${fmt(start+visible.length)} 项`:'没有找到匹配的条目';
  const filters=[];if($('#search').value.trim())filters.push('搜索：'+$('#search').value.trim());for(const id of ['subcategory','tier','rarity'])if(state[id]!=='all')filters.push($('#'+id).selectedOptions[0]?.textContent);
  $('#activeFilters').innerHTML=filters.map(t=>`<button class="active-chip" data-clear-filters>${esc(t)} ×</button>`).join('');
  $('#view').innerHTML=!rows.length?`<div class="empty"><h3>暂时没有找到</h3><p>试试更短的关键词，或清除筛选后重新查找。</p><button data-clear-filters>清除筛选</button></div>`:state.mode==='table'?renderTable(visible):`<div class="grid">${visible.map(card).join('')}</div>`;
  const indices=[...new Set([1,state.page-1,state.page,state.page+1,pageCount].filter(v=>v>=1&&v<=pageCount))].sort((a,b)=>a-b);
  $('#pagination').innerHTML=pageCount<=1?'':`<button data-page="${state.page-1}" ${state.page===1?'disabled':''} aria-label="上一页">←</button>`+indices.map((n,i)=>(i&&n>indices[i-1]+1?'<span aria-hidden="true">…</span>':'')+`<button data-page="${n}" class="${n===state.page?'active':''}" ${n===state.page?'aria-current="page"':''}>${n}</button>`).join('')+`<button data-page="${state.page+1}" ${state.page===pageCount?'disabled':''} aria-label="下一页">→</button><span class="page-info">第 ${state.page} / ${pageCount} 页 · 每页 ${PAGE_SIZE} 项</span>`;
  window.WIKI_RUNTIME.observeImages(viewElement());
}
function viewElement(){return document.getElementById('view')}
function card(x){const stats=basicStats(x).slice(0,3);return `<article class="item-card" data-item-id="${esc(x.id)}"><div class="card-top">${picture(x)}<div class="card-names"><h3><button class="item-open" data-open="${esc(x.id)}" data-kind="${x._kind}">${esc(name(x))}</button></h3>${window.LCZEntityCode.render(x.id)}${x.name_en?`<div class="english-name">${esc(x.name_en)}</div>`:''}${badges(x)}</div></div><p class="item-description">${esc(description(x)||categoryName(x)+' · '+(x.subcategory_label||'查看详细资料'))}</p>${stats.length?`<div class="mini-stats">${stats.map(s=>`<div class="mini-stat"><span>${esc(s.label)}</span><b>${esc(statDisplay(s))}</b></div>`).join('')}</div>`:''}<div class="card-footer"><span>${esc(x.numeric?.default_level!=null?`${x.numeric.level_label||'等级'} ${x.numeric.default_level} · 基础数值`:x.subcategory_label||categoryName(x))}</span><span class="arrow" aria-hidden="true">↗</span></div></article>`}
function renderTable(rows){return `<div class="table-wrap"><table><thead><tr><th>名称</th><th>分类</th><th>阶级 / 品质</th><th>主要数值</th><th></th></tr></thead><tbody>${rows.map(x=>`<tr><td><div class="list-item">${picture(x)}<div><button data-open="${esc(x.id)}" data-kind="${x._kind}">${esc(name(x))}</button>${window.LCZEntityCode.render(x.id)}<small>${esc(x.name_en||x.subcategory_label||'')}</small></div></div></td><td>${esc(categoryName(x))}</td><td>${x.tier!=null?'T'+esc(x.tier)+' · ':''}${esc(RARITY[x.rarity]||'—')}</td><td class="list-stats">${basicStats(x).slice(0,3).map(s=>`<span>${esc(s.label)} <b>${esc(statDisplay(s))}</b></span>`).join('')||'—'}${x.numeric?.default_level!=null?`<small>（${esc(x.numeric.default_level)}级）</small>`:''}</td><td><button data-open="${esc(x.id)}" data-kind="${x._kind}" aria-label="查看${esc(name(x))}">↗</button></td></tr>`).join('')}</tbody></table></div>`}
function facts(stats,compact=false){const shown=stats.filter(s=>s&&(s.value!=null||s.display));return shown.length?`<div class="facts ${compact?'compact':''}">${shown.map(s=>`<div class="fact"><span>${esc(s.label)}</span><b>${esc(statDisplay(s))}</b>${s.note?`<small>${esc(s.note)}</small>`:''}</div>`).join('')}</div>`:''}
function pairs(rows){return rows.filter(v=>v[1]!=null&&v[1]!=='').map(([label,value,unit])=>({label,value,unit}))}
function section(title,body){return body?`<section class="section"><h3>${esc(title)}</h3>${body}</section>`:''}
function levelStats(n,row){const list=[...(n.summary||[])];for(const c of n.columns||[])if(!list.some(s=>s.key===c.key))list.push(c);return list.map(s=>row&&(row.values?.[s.key]!=null||row.display?.[s.key]!=null)?{...s,value:row.values?.[s.key],display:row.display?.[s.key]}:s)}
function numericSection(x){
  const n=x.numeric;if(!n)return section('物品属性',facts(Array.isArray(x.stats)?x.stats:[]));
  const levels=n.levels||n.rows||[],first=levels.find(r=>r.level===n.default_level)||levels[0],shown=levelStats(n,first),fixed=(n.fixed||[]).filter(s=>!shown.some(v=>v.key===s.key));
  const levelPicker=levels.length?`<div class="level-control"><label for="detailLevel">${esc(n.level_label||'等级')}</label><select id="detailLevel">${levels.map(r=>`<option value="${r.level}" ${r.level===n.default_level?'selected':''}>${r.level} 级</option>`).join('')}</select><button class="level-base" data-base-level>基础</button></div>`:'';
  return `<section class="section"><div class="section-heading"><h3>核心属性</h3>${levelPicker}</div><div id="selectedStats">${facts(shown)}</div>${fixed.length?`<div style="margin-top:12px">${facts(fixed,true)}</div>`:''}${(n.notes||[]).map(t=>`<p class="stat-note">${esc(t)}</p>`).join('')}${levels.length?`<details><summary>查看等级数值 · ${levels.length} 个等级</summary><div class="table-wrap detail-table"><table><thead><tr><th>${esc(n.level_label||'等级')}</th>${n.columns.map(c=>`<th>${esc(c.label)}</th>`).join('')}</tr></thead><tbody>${levels.map(r=>`<tr data-level-row="${r.level}" class="${r.level===n.default_level?'selected-level':''}"><td>${r.level}</td>${n.columns.map(c=>`<td>${esc(r.display?.[c.key]??fmt(r.values?.[c.key]))}</td>`).join('')}</tr>`).join('')}</tbody></table></div></details>`:''}</section>`;
}
function updateLevel(){if(!selected?.numeric)return;const n=selected.numeric,r=(n.levels||n.rows||[]).find(r=>String(r.level)===$('#detailLevel')?.value);if(!r)return;$('#selectedStats').innerHTML=facts(levelStats(n,r));$$('[data-level-row]').forEach(el=>el.classList.toggle('selected-level',el.dataset.levelRow===String(r.level)))}
function itemDetail(x){
  const e=equipmentById.get(x.equipment_id||x.id);let content=numericSection(x);
  content+=section('物品资料',facts(pairs([['分类',categoryName(x)],['细分类型',x.subcategory_label],['阶级',x.tier!=null?'T'+x.tier:null],['稀有度',RARITY[x.rarity]],['堆叠上限',x.max_stack!=null?x.max_stack+' 件':null],['收纳限制',x.bound?'绑定物品':null],['物品版本',x.legacy||e?.official_inclusion_status==='special_legacy'||e?.official_inclusion_status==='special_bound_legacy'?'历史物品':null]]),true));
  if(x.workbenches?.length)content+=section('适用工作台',`<p class="plain-note">${x.workbenches.map(esc).join(' · ')}</p>`);
  const uses=x.uses||x.usage;if(uses?.length)content+=section('使用说明',`<p class="plain-note">${esc(Array.isArray(uses)?uses.join('\n'):uses)}</p>`);
  if(x.effects?.length)content+=section('使用效果',`<div class="perk-list">${x.effects.map(s=>typeof s==='string'?`<p class="plain-note">${esc(s)}</p>`:`<div class="perk-row"><b>${esc(s.label)}${s.value!=null?' · '+esc(statDisplay(s)):''}</b>${s.duration!=null?`<p>持续 ${esc(duration(s.duration))}</p>`:''}${s.description?`<p>${esc(s.description)}</p>`:''}</div>`).join('')}</div>`);
  if(x.recipes?.length)content+=renderRecipes(x.recipes);
  if(x.recycle_results?.length)content+=section('回收可得',x.recycle_results.map(r=>`<details><summary>${esc(r.label||'回收所得材料')}</summary><div class="recipe-list padded">${(r.outputs||[]).map(v=>linkedRow(v.id,v.name,v.amount)).join('')}</div></details>`).join(''));
  if(x.used_in?.length)content+=section(`用于制作与建设 · ${x.used_in.length}`,`<details><summary>查看相关用途及所需数量</summary><div class="recipe-list padded">${x.used_in.map(v=>linkedRow(v.target_id,v.name,v.amount,v.label)).join('')}</div></details>`);
  if(x.locations?.length)content+=section('相关地点',`<p class="plain-note">${x.locations.map(esc).join(' · ')}</p>`);
  if(x.blueprints?.length)content+=section(`图纸对应物品 · ${x.blueprints.length}`,`<details><summary>查看图纸列表</summary><div class="recipe-list padded">${x.blueprints.map(v=>linkedRow(v.id,v.name,null)).join('')}</div></details><p class="description-note">奖励内容依具体图纸筒规则而定。</p>`);
  if(x.name_source==='descriptive_fallback')content+='<p class="description-note">此条目缺少官方中文名，名称按物品用途整理。</p>';
  if(x.placeholder_image)content+='<p class="description-note">此历史物品没有独立图标，显示游戏为它配置的占位图。</p>';
  return content;
}
function duration(v){return v>=3600&&v%3600===0?fmt(v/3600)+' 小时':v>=60&&v%60===0?fmt(v/60)+' 分钟':fmt(v)+' 秒'}
function linkedRow(id,label,amount,kind=''){const item=itemById.get(id);return `<div class="recipe-row"><div>${item?`<button data-open="${esc(item.id)}" data-kind="item">${esc(name(item))}</button>`:`<span>${esc(label||'相关用途')}</span>`}${kind?`<small>${esc(kind)}</small>`:''}</div>${amount!=null?`<b>× ${esc(amount)}</b>`:''}</div>`}
function renderRecipes(recipes){
  const unique=[...new Map(recipes.map(r=>[JSON.stringify([r.label,r.ingredients,r.min_level,r.item_level,r.amount]),r])).values()];
  return section('制作、修理与兑换',unique.map(r=>{const ingredients=r.ingredients||r.materials||[],isRecycle=r.label==='回收',label=isRecycle?'回收所得':r.label||'制作配方';return `<details><summary>${esc(label)}${r.item_level!=null?' · '+esc(r.item_level)+' 级':''}${r.amount!=null&&!isRecycle?' · 产出 '+esc(r.amount)+' 件':''}</summary><div class="recipe-list padded">${r.min_level>0?`<p class="plain-note">需要等级 ${esc(r.min_level)}</p>`:''}${ingredients.length?ingredients.map(v=>linkedRow(v.id||v.item_id,v.name||v.label,v.count??v.amount??v.quantity??1)).join(''):'<p class="plain-note">此记录未提供实体材料清单。</p>'}</div></details>`}).join(''));
}
function petDetail(x){let content=numericSection(x);content+=section('基础资料',facts(pairs([['物种',x.species_zh],['阶级',x.tier!=null?'T'+x.tier:null],['品质',RARITY[x.rarity]],['等级上限',x.level_cap],['生育力',x.fertility_min!=null?`${x.fertility_min}–${x.fertility_max}`:null],['栖息地',x.habitat_zh&&x.habitat_zh!=='—'?x.habitat_zh:null]]),true));if(x.type!=='decor'){content+=section('成长与繁育',facts(pairs([['成长时间',x.grow_zh],['适应时间',x.adaptation_zh],['繁育时间',x.breeding_zh],['成年每日食量',x.hunger_per_day],['幼体每日食量',x.hunger_per_day_young],['繁育步数',x.breeding_step]]),true));const f=x.fluctuations||{};if(Object.keys(f).length)content+=section('个体差异（资料范围）',facts(pairs([['生命浮动',f.health_fluct_min!=null?`${f.health_fluct_min} ～ ${f.heath_fluct_max??f.health_fluct_max}`:null],['伤害浮动',f.damage_fluct_min!=null?`${f.damage_fluct_min} ～ ${f.damage_fluct_max}`:null]]),true)+'<p class="description-note">成长表为基础数值，实际属性还受个体差异和技能影响。</p>')}
  const linked=(x.perk_ids||[]).map(id=>entityMap.get('perk:'+id)).filter(Boolean);if(linked.length)content+=section('技能与特性',`<div class="perk-list">${linked.map(p=>`<button class="perk-row" data-open="${esc(p.id)}" data-kind="perk"><b>${esc(name(p))} ↗</b><p>${esc(description(p))}</p></button>`).join('')}</div>`);
  if(x.skins?.length)content+=section(`关联外观 · ${x.skins.length}`,`<div class="related-grid">${x.skins.map(s=>{const linked=entityMap.get('skin:'+s.id);return `<${linked?'button':'div'} class="related-card" ${linked?`data-open="${esc(s.id)}" data-kind="skin"`:''}>${picture({...s,name:s.name_zh,_kind:'skin'})}<b>${esc(s.name_zh||'名称待补充')}</b><small>${linked?'查看外观 ↗':'官方外观'}</small></${linked?'button':'div'}>`}).join('')}</div>`);return content;
}
function skinDetail(x){const related=pets.filter(p=>(p.skins||[]).some(s=>s.id===x.id));let content=section('外观信息',facts(pairs([['英文名称',x.name_en],['图鉴收录',x.hidden_encyclopedia?'图鉴隐藏':'可见'],['诱饵生育力',Array.isArray(x.baiting_fertility)&&x.baiting_fertility.length?x.baiting_fertility.join(' / '):null]]),true));if(related.length)content+=section(`关联宠物 · ${related.length}`,`<div class="related-grid">${related.map(p=>`<button class="related-card" data-open="${esc(p.id)}" data-kind="pet">${picture(p)}<b>${esc(name(p))}</b><small>查看宠物 ↗</small></button>`).join('')}</div>`);return content}
function perkDetail(x){const chance=x.chance!=null?(Math.abs(x.chance)<=1?fmt(x.chance*100):fmt(x.chance))+'%':null;return section('技能属性',facts(pairs([['适用宠物',{combat:'战斗宠物',mount:'坐骑'}[x.pet_type]],['稀有度',RARITY[x.rarity]],['触发概率',chance],['持续时间',x.duration,'秒'],['冷却时间',x.cooldown,'秒']]),true))}
function detailMarkup(x,content){return `<header class="modal-head">${picture(x)}<div class="modal-title"><div class="modal-eyebrow">${esc(categoryName(x))} / FIELD GUIDE</div><h2 id="detailTitle">${esc(name(x))}</h2>${window.LCZEntityCode.render(x.id)}${x.name_en?`<p class="english-name">${esc(x.name_en)}</p>`:''}${badges(x)}</div><button class="close" data-close aria-label="关闭详情">×</button></header><div class="modal-body">${detailHistory.length?'<button class="detail-back" data-detail-back>← 返回上一条目</button>':''}${description(x)?`<p class="detail-description">${esc(description(x))}</p>`:''}${content}<div class="item-id">数据版本 12.0.1</div></div>`}
async function openDetail(kind,id,fromHistory=false){
  let x=entityMap.get(kind+':'+id);if(!x)return;
  const request=++detailRequest;
  if($('#detail').open&&selected&&!fromHistory)detailHistory.push(selected._kind+':'+selected.id);
  if(!$('#detail').open){previousFocus=document.activeElement;detailHistory=[]}
  selected=x;$('#detail').dataset.ready='false';
  $('#detailContent').innerHTML=detailMarkup(x,'<p class="detail-loading" role="status">正在读取详细资料…</p>');
  if(!$('#detail').open)$('#detail').showModal();document.body.classList.add('modal-open');$('#detail').scrollTop=0;
  window.WIKI_RUNTIME.observeImages($('#detail'));$('#detail [data-close]').focus({preventScroll:true});
  try{
    await loadFullCatalog();
    if(request!==detailRequest||!$('#detail').open)return;
    x=entityMap.get(kind+':'+id);selected=x;
    await window.WIKI_RUNTIME.hydrate(x);
    if(request!==detailRequest||!$('#detail').open)return;
    const content=x._kind==='item'?itemDetail(x):x._kind==='pet'?petDetail(x):x._kind==='skin'?skinDetail(x):perkDetail(x);
    $('#detailContent').innerHTML=detailMarkup(x,content);$('#detail').dataset.ready='true';window.WIKI_RUNTIME.observeImages($('#detail'));
    $('#detail [data-close]').focus({preventScroll:true});
  }catch(error){
    if(request!==detailRequest||!$('#detail').open)return;
    $('#detailContent').innerHTML=detailMarkup(x,'<p class="detail-loading" role="status">详细资料暂未加载成功，请重试。</p><button class="secondary-button detail-retry" data-retry-detail>重新读取</button>');
    $('#detail').dataset.ready='error';window.WIKI_RUNTIME.observeImages($('#detail'));console.error('Wiki detail failed',error);
  }
}
function init(){
  document.addEventListener('click',e=>{
    if(e.target.closest('#topnav [data-domain],.brand,#categoryList [data-category],#searchAll,[data-page],[data-clear-filters],#reset,[data-retry-catalog]')){
      catalogRequested=true;
      if(e.target.closest('[data-retry-catalog]'))requestCatalog();
    }
  },true);
  for(const event of ['input','change'])document.addEventListener(event,e=>{
    if(e.target.matches('#search,#subcategory,#tier,#rarity,#sort'))catalogRequested=true;
  },true);
  $('#navItemCount').textContent=fmt(catalogCounts.items);$('#navPetCount').textContent=fmt(catalogCounts.pets);$('#navSkinCount').textContent=fmt(catalogCounts.skins);$('#navPerkCount').textContent=fmt(catalogCounts.perks);
  $('#collectionStats').innerHTML=[[catalogCounts.items,'件实体物品'],[categories.length,'个物品大类'],[catalogCounts.pets,'种宠物配置'],[catalogCounts.skins,'款宠物外观']].map(([n,label])=>`<span><b>${fmt(n)}</b>${esc(label)}</span>`).join('');
  $('#coverageNote').textContent=`已收录 ${fmt(catalogCounts.items)} 件实体物品，${categories.length} 个大类。工作台插件按实际条目分别收录，可用细分类型与搜索进一步查找。`;
  $('#topnav').addEventListener('click',e=>{const b=e.target.closest('[data-domain]');if(b){changeDomain(b.dataset.domain);history.replaceState(null,'','#'+b.dataset.domain)}});
  $('.brand').addEventListener('click',e=>{e.preventDefault();changeDomain('items');history.replaceState(null,'','#items')});
  window.addEventListener('hashchange',()=>{catalogRequested=true;changeDomain(location.hash.slice(1))});
  $('#categoryList').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;state.category=b.dataset.category;state.subcategory='all';state.page=1;renderFilters();render()});
  ['subcategory','tier','rarity','sort'].forEach(id=>$('#'+id).addEventListener('change',e=>{state[id]=e.target.value;state.page=1;render()}));
  $('#reset').addEventListener('click',()=>resetFilters());
  $('#search').addEventListener('input',()=>{state.page=1;render()});
  $('#searchAll').addEventListener('click',()=>{changeDomain('all',true);$('#search').focus()});
  $('#gridMode').onclick=()=>setMode('grid');$('#tableMode').onclick=()=>setMode('table');
  document.addEventListener('click',e=>{const open=e.target.closest('[data-open]');if(open)openDetail(open.dataset.kind,open.dataset.open);if(e.target.closest('[data-close]'))$('#detail').close();if(e.target.closest('[data-clear-filters]'))resetFilters();const p=e.target.closest('[data-page]');if(p&&!p.disabled){state.page=Number(p.dataset.page);render();$('.results-toolbar').scrollIntoView({block:'start',behavior:'instant'})}if(e.target.closest('[data-base-level]')){$('#detailLevel').value=String(selected.numeric.default_level);updateLevel()}if(e.target.closest('[data-detail-back]')){const key=detailHistory.pop(),x=entityMap.get(key);if(x)openDetail(x._kind,x.id,true)}});
  document.addEventListener('click',e=>{if(e.target.closest('[data-retry-detail]')&&selected)openDetail(selected._kind,selected.id,true)});
  $('#detail').addEventListener('change',e=>{if(e.target.id==='detailLevel')updateLevel()});
  $('#detail').addEventListener('click',e=>{if(e.target===$('#detail')){const r=$('#detail').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('#detail').close()}});
  $('#detail').addEventListener('close',()=>{if($('#detail').open)return;detailRequest++;document.body.classList.remove('modal-open');selected=null;detailHistory=[];if(previousFocus?.isConnected)previousFocus.focus({preventScroll:true})});
  document.addEventListener('keydown',e=>{if(e.key==='/'&&!$('#detail').open&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){e.preventDefault();$('#search').focus()}});
  changeDomain('items');
  if(location.hash&&location.hash!=='#items'){catalogRequested=true;changeDomain(location.hash.slice(1))}
}
function setMode(mode){state.mode=mode;for(const key of ['grid','table']){const b=$('#'+key+'Mode');b.classList.toggle('active',key===mode);b.setAttribute('aria-pressed',String(key===mode))}render()}
init();
