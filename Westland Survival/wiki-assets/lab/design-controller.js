'use strict';
const DATA=window.WESTLAND_LAB_DATA.equipment;
const BESTIARY=window.WESTLAND_LAB_DATA.beasts;
const $=id=>document.getElementById(id);
const difficulty=window.WestlandDifficulty;
const {TIERS,natural,scalar,budget,enhance,spawnRow,cappedPower}=difficulty;
const LABELS={animal_damage_modifier:'对动物伤害',armor:'防护点数',bandit_damage_modifier:'对强盗伤害',cool_modifier:'耐热',critical_hit_chance:'暴击率',critical_modifier:'暴击伤害加成',damage:'伤害',death_penalty_reduction:'死亡耐久损失降低',dexterity:'灵巧',dot_amount:'持续伤害量',dot_time:'持续伤害时间',evasion:'闪避率',fire_resistance:'火焰抗性',firearm_resistance:'枪械抗性',health_increment:'生命点数加成',health_modifier:'生命比例加成',max_durability:'最大耐久',mosquito_invulnerability:'蚊虫防护',move_speed_modifier:'移动速度加成',penetrating_damage:'穿刺伤害',penetrating_damage_resistance:'穿刺抗性',pet_damage_modifier:'宠物伤害',pet_health_increment:'宠物生命',reduced_detection_radius:'隐蔽',resistance:'普通抗性点数',slow_modifier:'减速强度',slow_time:'减速时间',snow_resistance:'雪地减速抗性',swamp_animal_resistance:'沼泽动物抗性',warm_modifier:'御寒',water_pressure_resistance:'沼泽水域减速抗性',wisdom:'精神'};
const PERCENT=new Set(['animal_damage_modifier','bandit_damage_modifier','critical_hit_chance','critical_modifier','death_penalty_reduction','evasion','fire_resistance','firearm_resistance','health_modifier','mosquito_invulnerability','move_speed_modifier','penetrating_damage_resistance','pet_damage_modifier','reduced_detection_radius','slow_modifier','snow_resistance','swamp_animal_resistance','water_pressure_resistance']);
const CAT={weapon:'武器',armor:'护甲',backpack:'背包'},RAR={common:'普通',uncommon:'优秀',rare:'稀有',epic:'史诗'};
const savedDifficulty=difficulty.readSelection();
let tier=savedDifficulty.tier,selected='wls2_weapon_range_rifle_7_epic',manualLevel=false;
const itemsById=Object.fromEntries(DATA.items.map(x=>[x.id,x]));
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function equipmentImage(it,className){return '<img class="'+className+'" src="'+BESTIARY.images[it.id]+'" alt="'+esc(it.name)+'的游戏图标" width="68" height="68" loading="lazy" decoding="async">';}
function fmt(n,d=2){return Number.isFinite(n)?n.toLocaleString('zh-CN',{maximumFractionDigits:d}):'—';}
function vfmt(k,n){if(n===null||!Number.isFinite(n))return '未解锁/待确认';return fmt(PERCENT.has(k)?n*100:n,k==='max_durability'?0:2)+(PERCENT.has(k)?'%':k.endsWith('_time')?' 秒':k==='dexterity'||k==='wisdom'?' 点':'');}
function readNum(id,fallback,min,max){const e=$(id),x=e.valueAsNumber;return Number.isFinite(x)?Math.min(max,Math.max(min,x)):fallback;}
function base(){return {p:readNum('base-prob',50,0,100)/100,t:Math.round(readNum('base-period',120,1,86400)),r:Math.round(readNum('base-rounds',8,0,30)),n:readNum('base-group',1,1,30)};}
function originalLevel(){return Math.round(readNum('original-level',1,1,3000));}
function levelFor(d){return difficulty.levelFor(d,{originalLevel:originalLevel(),quantile:readNum('quantile',50,0,100)});}
function saveDifficultySelection(){difficulty.saveSelection({tier,originalLevel:originalLevel(),quantile:readNum('quantile',50,0,100)});}
function selectedLevel(){return tier===0?originalLevel():Math.round(readNum('target-level',levelFor(tier),1,3000));}
function ruleFor(k){
const s=scalar(k);if(s)return {text:k==='dexterity'?'自然灵巧 × 1/1.1/1.2/1.35/1.5/1.7/1.9；再由角色总攻速上限校准':'按七档表的 '+({power:'伤害/防护',pierce:'穿刺',ehp:'生命/持续伤害量',dur:'最大耐久'}[s])+' 倍率，写绝对值',note:k==='max_durability'?'四舍五入整数，1—10,000,000；当前耐久单独计算':k==='dot_amount'?'仅调整伤害量，保留时间；最大500,000；NPC作用语义待验证':k==='dexterity'?'属性点；最大10,000。有效攻速映射未确认前不启用额外值':'没有该属性或尚未解锁则跳过；不把防护点数解释成减伤率'};
const b=budget(k,6);if(b)return {text:'全套增量预算 '+TIERS.map((q,d)=>fmt(budget(k,d).add*100)).join(' / ')+' 个百分点',note:'新增后的全套预算上限 '+fmt(b.cap*100)+'%；原值更高时保留，不再追加。总值不是最终战斗结算'};
if(k==='slow_time')return {text:'额外 +0 / 0.15 / 0.30 / 0.45 / 0.60 / 0.75 / 0.90 秒',note:'新增目标≤3秒；原值更高保留。须先验证不造成永久减速'};
return {text:'保持原生，不计入通用难度增幅',note:k==='move_speed_modifier'?'角色总移速统一控制，不与装备重复叠加':k.includes('pet_')?'普通NPC没有对应宠物流程时不会产生战斗收益':k==='dot_time'?'避免持续伤害量与时长同时放大':k==='mosquito_invulnerability'?'功能型属性，不设置超过100%的免疫':k.includes('damage_modifier')?'仅影响匹配目标，不能当作对玩家通用增伤':'用途依赖环境或特定玩法；保留官方语义'};
}
function renderTiers(){
$('difficulty-tabs').innerHTML=TIERS.map((q,i)=>'<button class="tier-tab" data-tier="'+i+'" aria-pressed="'+(i===tier)+'" style="--tone:'+window.designTheme.tone(i)+'"><small>0'+(i+1)+' / '+q.en+'</small>'+q.name+'</button>').join('');
window.designTheme.setTier(tier);
$('tier-index').textContent='0'+(tier+1);$('tier-name').textContent=TIERS[tier].name;$('tier-description').textContent=TIERS[tier].desc;$('tier-level').textContent=tier?'图纸 '+TIERS[tier].lv.join('—'):'保持原版';
document.querySelector('#tiers .heading .badge').textContent='当前预览：'+TIERS[tier].name;
}
function renderSpawn(){const b=base(),all=TIERS.map((_,d)=>spawnRow(d,b)),q=TIERS[tier],s=all[tier];$('metrics').innerHTML=[['本体生命','×'+q.hp,'装备生命另行计算'],['武器额外伤害','×'+q.power,'在图纸自然值基础上'],['目标检查间隔',fmt(s.t,0)+'<span> 秒</span>',tier?'原版 '+fmt(b.t)+' 秒':'完整原版逻辑'],['有效尝试轮数',s.r===Infinity?'持续':fmt(s.r,0),b.p===0?'原概率为0，仍关闭':'抽取失败也消耗一轮']].map(a=>'<div class="metric"><div class="label">'+a[0]+'</div><div class="value">'+a[1]+'</div><div class="sub">'+a[2]+'</div></div>').join('');
document.querySelector('#spawn-table tbody').innerHTML=all.map((r,i)=>'<tr class="'+(i===tier?'active-row':'')+'"><td>'+TIERS[i].name+'</td><td>'+r.t+' 秒</td><td>'+fmt(r.p*100,3)+'%</td><td>'+(r.r===Infinity?'持续':r.r)+'</td><td>'+fmt(r.n)+'</td><td>'+(i?TIERS[i].cap+' 名额':'原版')+'</td><td>'+fmt(r.rate)+'</td></tr>').join('');
const max=Math.max(...all.map(x=>x.rate),.001);$('rate-bars').innerHTML=all.map((x,i)=>'<div class="bar-wrap"><div class="bar-value">'+fmt(x.rate)+'</div><div class="bar" data-chart-tier="'+i+'" style="height:'+Math.max(2,x.rate/max*112)+'px;background-color:'+window.designTheme.tone(i)+'"></div><div class="bar-label">'+TIERS[i].name+'</div></div>').join('');
$('spawn-alert').textContent=b.p===0||b.r===0?'此原版配置处于关闭状态，本设计在所有档位都保持关闭。':b.p===1?'这个刷怪器原本已是100%。所有档位的概率都到顶，后续增长由周期、次数、数量和属性承担；不存在超过100%的真实概率。':'高档概率会逐渐饱和，不可能每档都保持同等幅度增加。以当前输入，无尽的未限流生成速率约为原版 '+fmt(all[6].rate/all[0].rate)+' 倍；这不是最终战斗难度倍数。';
document.querySelector('#body-table tbody').innerHTML=TIERS.map((x,i)=>'<tr class="'+(i===tier?'active-row':'')+'"><td>'+x.name+'</td><td>×'+x.hp+'</td><td>×'+x.hit+'</td><td>×'+x.def+'</td><td>×'+x.elite+'</td><td>+'+x.atk+'%</td><td>+'+x.mov+'%</td></tr>').join('');
document.querySelector('#equipment-tier-table tbody').innerHTML=TIERS.map((x,i)=>'<tr class="'+(i===tier?'active-row':'')+'"><td>'+x.name+'</td><td>'+(i?x.lv.join('—'):'原版')+'</td><td>×'+x.power+'</td><td>×'+x.pierce+'</td><td>×'+x.ehp+'</td><td>×'+x.dur+'</td><td>'+(i?x.dp.join('—')+'%':'原版')+'</td></tr>').join('');
}
function filteredItems(){const cat=$('category-filter').value,search=$('item-search').value.trim().toLowerCase();return DATA.items.filter(x=>x.category===cat&&(!search||(x.name+' '+x.en+' '+x.id).toLowerCase().includes(search)));}
function renderItems(){const list=filteredItems();$('item-count').textContent=list.length+' 件';$('item-list').innerHTML=list.length?list.map(x=>'<button class="item-button" data-item="'+esc(x.id)+'" aria-pressed="'+(x.id===selected)+'">'+equipmentImage(x,'item-list-image')+'<span>'+esc(x.name)+'<small>T'+x.tier+' · '+RAR[x.rarity]+' · '+CAT[x.category]+'</small></span></button>').join(''):'<p class="mini-note" style="padding:12px">没有匹配物品，请换一个关键词。</p>';}
function syncLevel(){const q=TIERS[tier];$('quantile-label').textContent=$('quantile').value+'%';if(!manualLevel||tier===0)$('target-level').value=levelFor(tier);$('target-level').disabled=tier===0;$('target-level').min=tier?Math.max(originalLevel(),q.lv[0]):originalLevel();$('target-level').max=tier?Math.max(originalLevel(),q.lv[1]):originalLevel();if(tier)$('target-level').value=Math.min(Number($('target-level').max),Math.max(Number($('target-level').min),selectedLevel()));$('level-note').textContent=tier?'本档区间 '+q.lv.join('—')+'；原版等级更高则保留。相同随机分位跨档映射，便于公平比较。':'简单只显示所选物品在原等级的参考值；不会给原版敌人替换成这件装备。';}
function renderItem(){const it=itemsById[selected];if(!it)return;syncLevel();const l=selectedLevel(),orig=originalLevel();$('item-name').textContent=it.name;$('item-id').textContent=it.en||'';$('item-icon').innerHTML=equipmentImage(it,'item-detail-image');$('item-chips').innerHTML='<span class="badge">T'+it.tier+' · '+RAR[it.rarity]+'</span><span class="badge">'+CAT[it.category]+'</span><span class="badge good">'+Object.keys(it.curves).filter(k=>k!=='item_level').length+' 个已有词条</span>';
const keys=Object.keys(it.curves).filter(k=>k!=='item_level').sort((a,b)=>{const order=['damage','penetrating_damage','armor','health_increment','resistance','critical_hit_chance','critical_modifier','dexterity','max_durability'];const ai=order.indexOf(a),bi=order.indexOf(b);return (ai<0?99:ai)-(bi<0?99:bi);});
document.querySelector('#item-stat-table tbody').innerHTML=keys.map(k=>{const o=natural(it.curves[k],orig,k),n=natural(it.curves[k],l,k),e=enhance(k,n,tier);return '<tr><td>'+esc(LABELS[k]||'未标注属性')+'</td><td>'+vfmt(k,o)+'</td><td>'+vfmt(k,n)+'</td><td class="'+(e.value>n?'strong':'')+'">'+vfmt(k,e.value)+'</td><td><span class="status '+e.status+'">'+esc(e.label)+'</span></td></tr>';}).join('');
const core=it.category==='weapon'?'damage':it.category==='armor'?'armor':it.curves.health_increment?'health_increment':it.curves.resistance?'resistance':'max_durability';const b=natural(it.curves[core],orig,core),n=natural(it.curves[core],l,core),final=enhance(core,n,tier).value;
$('item-summary').textContent=LABELS[core]+'：'+vfmt(core,b)+' → 图纸自然 '+vfmt(core,n)+' → 强化后 '+vfmt(core,final)+(b>0?'，相对原等级约 ×'+fmt(final/b)+'。':'。')+(tier?' 写入的是最终绝对值。':' 简单不覆盖。');
let fixed=it.category==='weapon'?'基础射程 '+fmt(it.range)+'；静态推算基础攻速 '+fmt(it.aps)+' 次/秒。均保持共享模板。':it.category==='backpack'?'固定容量 '+(it.capacity??'未提取')+' 格；'+(it.backpack?.additional_slot_tags?'额外分类格 '+Object.values(it.backpack.additional_slot_tags).reduce((a,b)=>a+b,0)+' 格；':'')+'容量不属于可覆盖词条。':'护甲只强化自身支持的防护/生命/抗性等，不出现伤害或穿刺字段。';
const dur=natural(it.curves.max_durability,l,'max_durability');if(tier&&dur!==null){const total=enhance('max_durability',dur,tier).value;fixed+=' 当前耐久建议 '+fmt(Math.round(total*TIERS[tier].dp[0]/100),0)+'—'+fmt(Math.round(total*TIERS[tier].dp[1]/100),0)+' / '+fmt(total,0)+'；原生比例更高则不降低。';}$('fixed-fields').textContent=fixed;
}
function renderRules(){document.querySelector('#rules-table tbody').innerHTML=DATA.keys.map(k=>{const categories=Object.keys(CAT).filter(c=>DATA.items.some(x=>x.category===c&&x.curves[k]));const r=ruleFor(k);return '<tr><td>'+esc(LABELS[k])+'</td><td>'+categories.map(c=>CAT[c]).join(' / ')+'</td><td>'+r.text+'</td><td class="muted">'+r.note+'</td></tr>';}).join('');}
function loadout(){return [$('role-select').value==='rifle'?'wls2_weapon_range_rifle_7_epic':'wls2_weapon_range_revolver_7_epic','wls2_armor_head_7_epic','wls2_armor_body_7_epic','wls2_armor_legs_7_epic','wls2_armor_boots_7_epic','wls2_backpack_cowboy_7_rare'].map(id=>itemsById[id]);}
function renderLoadout(){const list=loadout(),l=levelFor(tier),slotNames=['主武器','头部','上身','腿部','足部','背包'];$('loadout-cards').innerHTML=list.map((x,i)=>{const key=x.category==='weapon'?'damage':x.category==='armor'?'armor':'health_increment';const n=natural(x.curves[key],l,key),v=enhance(key,n,tier).value;return '<div class="slot">'+equipmentImage(x,'slot-image')+'<small>'+slotNames[i]+' · Lv.'+l+'</small><strong>'+esc(x.name)+'</strong><div class="slot-value">'+LABELS[key]+' '+vfmt(key,v)+'</div></div>';}).join('');
const bd=['critical_hit_chance','critical_modifier','firearm_resistance','fire_resistance','penetrating_damage_resistance'];document.querySelector('#budget-table tbody').innerHTML=bd.map(k=>{const b=list.reduce((sum,x)=>sum+(natural(x.curves[k],l,k)||0),0),rule=budget(k,tier),delta=b>0?Math.min(rule.add,Math.max(0,rule.cap-b)):0;return '<tr><td>'+LABELS[k]+'</td><td>'+vfmt(k,b)+'</td><td>+'+fmt(rule.add*100)+'pp</td><td class="strong">+'+fmt(delta*100)+'pp</td><td>'+vfmt(k,b+delta)+'</td></tr>';}).join('');
const hp=list.reduce((s,x)=>s+(enhance('health_increment',natural(x.curves.health_increment,l,'health_increment'),tier).value||0),0);$('loadout-summary').textContent='此套图纸 '+l+' 级，装备生命点数合计 '+fmt(hp)+'。本体生命另外按 ×'+TIERS[tier].hp+' 计算；不把全部装备生命再乘一次本体生命倍率。';
}
function renderEndless(){const n=Math.round(readNum('endless-slider',0,0,100)),hp=readNum('endless-base-hp',1000,1,1e9),dmg=readNum('endless-base-damage',6000,1,1e7),hp0=hp*12,dmg0=enhance('damage',dmg,6).value,h=cappedPower(hp0,1.12,n,1e6),d=cappedPower(dmg0,1.08,n,1e6),b=base(),start=spawnRow(6,b).t,t=Math.min(start,Math.max(5,Math.round(start*Math.pow(.98,n)))),group=Math.min(5,3+.1*Math.floor(n/3));
$('endless-stage').textContent=n;$('kill-count').textContent=fmt(n*20,0)+' 次有效击杀';$('endless-values').innerHTML=[['本体生命',fmt(Math.round(h),0)],['主武器伤害',fmt(d)],['检查间隔',t+' 秒'],['平均组倍率','×'+fmt(group)]].map(a=>'<div><small>'+a[0]+'</small><strong>'+a[1]+'</strong></div>').join('');
const capped=[];if(h>=Math.max(hp0,1e6))capped.push('本体生命');if(d>=Math.max(dmg0,1e6))capped.push('主伤害');if(group===5)capped.push('组数量');if(t<=5)capped.push('周期');
$('endless-alert').textContent=(capped.length?'当前已达到设计上限：'+capped.join('、')+'。':'当前未触及这些设计上限。')+' 再完成20次有效击杀提升一层；只影响下一批出生的敌人。'+(b.p===0||b.r===0?' 当前原刷怪器关闭，因此本模拟只有属性预览，不实际生成。':'');
}
function renderBestiary(){
const q=TIERS[tier],family=$('beast-family').value,rank=$('beast-rank').value,query=$('beast-search').value.trim().toLowerCase();
const list=BESTIARY.animals.filter(a=>(family==='all'||a.family===family)&&(rank==='all'||a.rank===rank)&&(!query||(a.name+' '+a.familyName+' t'+a.tier+' '+a.id+' '+(a.rank==='elite'?'精英':'普通')).toLowerCase().includes(query)));
$('beast-count').textContent=list.length+' / '+BESTIARY.animals.length+' 种';
$('beast-grid').innerHTML=list.length?list.map(a=>'<button class="beast-card" type="button" data-beast="'+esc(a.id)+'" aria-label="查看'+esc(a.name)+'，T'+a.tier+'，'+(a.rank==='elite'?'精英':'普通')+'"><span class="beast-rank '+a.rank+'">'+(a.rank==='elite'?'精英':'普通')+'</span><span class="beast-art"><img src="'+BESTIARY.images[a.image]+'" alt="'+esc(a.name)+'的游戏原始图像" width="154" height="154" loading="lazy" decoding="async"></span><span class="beast-info"><strong>'+esc(a.name)+'</strong><small>'+esc(a.familyName)+' · 原型 T'+a.tier+'</small></span></button>').join(''):'<p class="beast-empty">没有匹配的动物，试试其他名称或筛选条件。</p>';
$('bestiary-tier').innerHTML='<span>当前预览：'+q.name+'</span><span>本体生命 ×'+q.hp+'</span><span>无装备攻击 ×'+q.hit+'</span><span>基础防护 ×'+q.def+'</span><span>精英组权重 ×'+q.elite+'</span>';
$('beast-coverage').textContent='按当前 1.6.0 范围，剔除专属 Boss 组后共 '+BESTIARY.totalVariants+' 个动态角色变体；其中 '+BESTIARY.animals.length+' 个动物变体均已找到精确关联的原始图像。其余变体不配图。该数量是目录覆盖数，不是出现频率。';
}
function openBeast(id){const a=BESTIARY.animals.find(x=>x.id===id);if(!a)return;const q=TIERS[tier];$('beast-dialog-name').textContent=a.name+' · T'+a.tier;$('beast-dialog-image').src=BESTIARY.images[a.image];$('beast-dialog-image').alt=a.name+'的游戏原始图像';$('beast-dialog-description').textContent=(a.rank==='elite'?'精英动物':'普通动物')+'。'+(tier?'当前'+q.name+'预览：本体生命 ×'+q.hp+'，无装备攻击伤害 ×'+q.hit+'，基础防护 ×'+q.def+'。':'当前简单档：保留原版生成与数值。')+'这张图片不随难度改变；实际是否出现取决于当前地图的候选组。';$('beast-dialog-source').textContent='配图来源：游戏原始图像 · 资料版本 12.0.1';$('beast-dialog').showModal();}
function renderAll(){renderTiers();renderSpawn();renderItems();renderItem();renderLoadout();renderEndless();renderBestiary();}
$('difficulty-tabs').addEventListener('click',e=>{const b=e.target.closest('[data-tier]');if(!b)return;tier=Number(b.dataset.tier);manualLevel=false;renderAll();saveDifficultySelection();});
$('item-list').addEventListener('click',e=>{const b=e.target.closest('[data-item]');if(!b)return;selected=b.dataset.item;renderItems();renderItem();});
$('category-filter').addEventListener('change',()=>{const defaults={weapon:'wls2_weapon_range_rifle_7_epic',armor:'wls2_armor_body_7_epic',backpack:'wls2_backpack_cowboy_7_rare'};selected=defaults[$('category-filter').value];$('item-search').value='';renderItems();renderItem();});
$('item-search').addEventListener('input',renderItems);
['base-prob','base-period','base-rounds','base-group'].forEach(id=>$(id).addEventListener('input',()=>{renderSpawn();renderEndless();}));
$('original-level').addEventListener('input',()=>{manualLevel=false;renderItem();renderLoadout();saveDifficultySelection();});
$('target-level').addEventListener('change',()=>{manualLevel=true;renderItem();});
$('quantile').addEventListener('input',()=>{manualLevel=false;renderItem();renderLoadout();saveDifficultySelection();});
$('role-select').addEventListener('change',renderLoadout);
['beast-search','beast-family','beast-rank'].forEach(id=>$(id).addEventListener(id==='beast-search'?'input':'change',renderBestiary));
$('beast-grid').addEventListener('click',e=>{const button=e.target.closest('[data-beast]');if(button)openBeast(button.dataset.beast);});
$('beast-dialog-close').addEventListener('click',()=>$('beast-dialog').close());
$('beast-dialog').addEventListener('click',e=>{if(e.target!==$('beast-dialog'))return;const box=e.target.getBoundingClientRect();if(e.clientX<box.left||e.clientX>box.right||e.clientY<box.top||e.clientY>box.bottom)e.target.close();});
['endless-slider','endless-base-hp','endless-base-damage'].forEach(id=>$(id).addEventListener('input',renderEndless));
const PRESETS={sample:[50,120,8],bot:[50,300,3],wood5:[90,45,10],wendigo:[40,60,1],shootup:[100,65,8]};
function applyPreset(){const p=PRESETS[$('preset').value];['base-prob','base-period','base-rounds'].forEach((id,i)=>$(id).value=p[i]);$('base-group').value=1;renderSpawn();renderEndless();}
$('preset').addEventListener('change',applyPreset);$('reset-inputs').addEventListener('click',()=>{$('preset').value='sample';applyPreset();});
$('print-page').addEventListener('click',()=>window.print());
$('export-design').addEventListener('click',()=>{
  const lines=['Westland 难度与装备预览','资料版本：12.0.1','当前难度：'+TIERS[tier].name,
    '装备：'+itemsById[selected].name,'原等级：'+originalLevel(),'目标图纸等级：'+selectedLevel(),
    $('item-summary').textContent,'',document.getElementById('item-stat-table').innerText,
    '', '以上为网页演算结果，仅供配装比较，不代表游戏实测。'];
  const a=document.createElement('a'),url=URL.createObjectURL(new Blob([lines.join('\n')],{type:'text/plain;charset=utf-8'}));
  a.href=url;a.download='westland-equipment-preview.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
$('original-level').value=savedDifficulty.originalLevel;
$('quantile').value=savedDifficulty.quantile;
renderRules();renderAll();
