(() => {
  'use strict';
  const root=document.getElementById('loadout-lab');
  if(!root) return;
  const $=id=>document.getElementById(id);
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmt=(n,d=2)=>Number.isFinite(n)?n.toLocaleString('zh-CN',{maximumFractionDigits:d}):'—';
  const clone=x=>JSON.parse(JSON.stringify(x));
  const plain=x=>!!x&&typeof x==='object'&&!Array.isArray(x);
  const finite=(x,f=0)=>Number.isFinite(Number(x))?Number(x):f;
  const clamp=(x,min,max)=>Math.min(max,Math.max(min,x));
  const STORE='westland-loadout-lab-v1',SCHEMA='WLO-LOADOUT-LAB-1';
  const D=window.WESTLAND_LAB_DATA.loadout,design=window.designLab,E=window.WestlandBattle;
  const SLOTS=[['weapon','主武器'],['head','头部'],['body','上身'],['legs','腿部'],['boots','足部'],['backpack','背包'],['ring1','戒指Ⅰ'],['ring2','戒指Ⅱ'],['neck','项链']];
  const NAMES=Object.fromEntries(SLOTS),RAR={common:'普通',uncommon:'优秀',rare:'稀有',epic:'史诗'};
  const labels={animal_damage_modifier:'对动物伤害',armor:'防护点数',bandit_damage_modifier:'对强盗伤害',cool_modifier:'耐热',critical_hit_chance:'暴击率',critical_modifier:'暴击伤害加成',damage:'主伤害',death_penalty_reduction:'死亡耐久损失降低',dexterity:'灵巧',dot_amount:'持续伤害量',dot_time:'持续伤害时间',evasion:'闪避率',fire_resistance:'火焰抗性',firearm_resistance:'枪械抗性',health_increment:'装备生命加成',health_modifier:'生命比例加成',max_durability:'最大耐久',mosquito_invulnerability:'蚊虫防护',move_speed_modifier:'移速加成',penetrating_damage:'穿刺伤害',penetrating_damage_resistance:'穿刺抗性',pet_damage_modifier:'宠物伤害',pet_health_increment:'宠物生命',reduced_detection_radius:'隐蔽',resistance:'普通抗性点数',slow_modifier:'减速强度',slow_time:'减速时间',snow_resistance:'雪地减速抗性',swamp_animal_resistance:'沼泽动物抗性',warm_modifier:'御寒',water_pressure_resistance:'水域减速抗性',wisdom:'精神',strength:'力量',stamina:'体力',health:'生命上限',attackSpeed:'攻击次数 / 秒',range:'攻击距离',heal:'恢复生命',duration:'持续时间',damage_modifier:'通用伤害加成',attack_speed_modifier:'额外攻速加成',moveSpeed:'移动速度'};
  const percents=new Set(['animal_damage_modifier','bandit_damage_modifier','critical_hit_chance','critical_modifier','death_penalty_reduction','evasion','fire_resistance','firearm_resistance','health_modifier','mosquito_invulnerability','move_speed_modifier','penetrating_damage_resistance','pet_damage_modifier','reduced_detection_radius','slow_modifier','snow_resistance','swamp_animal_resistance','water_pressure_resistance','damage_modifier','attack_speed_modifier']);
  Object.assign(labels,{animal_resistance:'动物伤害抗性',steelarm_resistance:'近战与弓抗性',damage_resistance:'通用伤害抗性',melee_damage_modifier:'近战伤害加成',bow_damage_modifier:'弓伤害加成',melee_damage_increment:'近战固定伤害',firearm_damage_modifier:'枪械伤害加成',pistol_damage_modifier:'手枪伤害加成',shotgun_damage_modifier:'霰弹枪伤害加成',rifle_damage_modifier:'步枪伤害加成',attack_range_melee_modifier:'近战攻击范围加成'});
  for(const key of ['animal_resistance','steelarm_resistance','damage_resistance','melee_damage_modifier','bow_damage_modifier','firearm_damage_modifier','pistol_damage_modifier','shotgun_damage_modifier','rifle_damage_modifier','attack_range_melee_modifier'])percents.add(key);
  Object.assign(labels,{criticalMultiplier:'暴击时主伤害倍率',effectivePhysicalDps:'理论主伤害 DPS（无防御）',effectivePiercingDps:'理论穿刺 DPS（无防御）'});
  // Labels verified against the original Wiki's numeric field descriptions.
  Object.assign(labels,{pet_bonus_damage:'宠物伤害加成',ghost_damage:'对幽灵伤害加成',
    animal_instant_kill_chance:'动物秒杀概率',knockdown_resistance:'爆炸击倒与眩晕抗性',
    ghost_damage_resistance:'幽灵伤害抗性',bandit_duty_cost_reduction:'强盗过路费减免',
    attacker_attack_speed_reduction_duration:'受击减攻速持续时间',
    attacker_attack_speed_reduction_modifier:'受击降低敌人攻速',damage_over_time_immunity:'持续伤害免疫'});
  const catalog=[...design.DATA.items,...(D.accessories||[])],byId=new Map(catalog.map(x=>[x.id,x]));
  const foods=D.foods||[],skills=D.skills||[],animals=D.animals||[];
  const foodById=new Map(foods.map(x=>[x.id,x])),skillById=new Map(skills.map(x=>[x.id,x])),animalById=new Map(animals.map(x=>[x.id,x]));
  const images={...design.bestiary.images,...D.images};
  const BASE_FIELDS=[['health','基础生命',1,1e7],['strength','力量点数',0,1e4],['stamina','体力点数',0,1e4],['dexterity','灵巧点数',0,1e4],['wisdom','精神点数',0,1e4],['damage','空手基础伤害',0,1e7],['armor','本体防护点数',0,1e7],['resistance','本体普通抗性',0,1e7]];
  const ANIMAL_FIELDS=[['health','生命',1,1e9],['damage','主伤害',0,1e7],['penetrating_damage','穿刺伤害',0,1e7],['armor','防护',0,1e7],['resistance','普通抗性',0,1e7],['attackSpeed','攻击次数 / 秒',.01,20],['range','攻击距离',.1,30],['moveSpeed','接近速度',.1,30]];
  let state,reference=null,activeSlot='weapon',lastReport=null,busy=false,runToken=0,saveTimer=0,configRevision=0,importToken=0;
  let playerView,enemyView,gearView={},storeAvailable=true;
  let avatarPreview=null,avatarAttempted=false,avatarGender='male',avatarSelectionKey='',avatarThemeObserver=null;
  let avatarResourcesReady=false,avatarLoading=null;
  function statText(key,value){return Number.isFinite(value)?fmt(percents.has(key)?value*100:value,key==='max_durability'?0:2)+(percents.has(key)?'%':key.endsWith('_time')||key==='duration'?' 秒':''):'未解锁';}
  function domain(key){if(percents.has(key))return [0,['health_modifier','pet_damage_modifier'].includes(key)?100:['critical_modifier','animal_damage_modifier','bandit_damage_modifier','move_speed_modifier','damage_modifier','attack_speed_modifier'].includes(key)?10:1];if(['dexterity','wisdom','strength','stamina'].includes(key))return [0,10000];if(key==='max_durability')return [1,1e7];if(key.endsWith('_time')||key==='duration')return [0,3600];if(key==='dot_amount')return [0,500000];return [0,1e7];}
  function naturalValue(item,key,level){return design.natural(item.curves[key],level,key);}
  function allowed(item,slot){return Object.hasOwn(NAMES,slot)&&!!item&&(slot==='weapon'?item.category==='weapon':slot==='backpack'?item.category==='backpack':slot==='ring1'||slot==='ring2'?item.category==='accessory'&&item.sub==='ring':slot==='neck'?item.category==='accessory'&&['neck','amulet'].includes(item.sub):item.category==='armor'&&item.sub===slot);}
  function emptySlot(){return {id:'',level:1,overrides:{},currentDurability:null,weaponSpeed:null,weaponRange:null};}
  function message(text,error=false){$('lab-message').textContent=text;$('lab-message').dataset.error=String(error);}
  function readInput(input,min,max,integer=false){if(input.value.trim()==='')return null;const n=input.valueAsNumber;if(!Number.isFinite(n)||n<min||n>max||(integer&&!Number.isInteger(n)))throw Error('请输入 '+min+'—'+max+(integer?' 范围内的整数。':' 范围内的有限数值。'));return n;}
  function checkNumber(x,min,max,def,integer=false){if(x==null)return def;if(typeof x!=='number'||!Number.isFinite(x)||x<min||x>max||(integer&&!Number.isInteger(x)))throw Error('配置含超出范围或非法的数值。');return x;}
  function defaultBase(){const source=D.playerDefaults?.base||D.playerDefaults||{};const result={};for(const [key,,min,max] of BASE_FIELDS)result[key]=clamp(finite(source[key],key==='health'?100:key==='damage'?10:0),min,max);return result;}
  function initialState(){return {schema:SCHEMA,slots:Object.fromEntries(SLOTS.map(([s])=>[s,emptySlot()])),base:defaultBase(),foodId:'',foodOverrides:{},skills:{},healing:{id:'',count:0,threshold:.4,cooldown:10},enemy:{id:animals[0]?.id||'',tier:0,layer:0,overrides:{}},experiment:{seed:1602026,maxTime:120,startDistance:0,wearPerAttack:1,runs:100}};}
  function pickItem(slot,t,rarity,role){let candidates=catalog.filter(x=>allowed(x,slot)&&(!role||x.sub===role));if(!candidates.length)return null;candidates.sort((a,b)=>Math.abs(a.tier-t)-Math.abs(b.tier-t)||(a.rarity===rarity?-1:0)-(b.rarity===rarity?-1:0)||a.id.localeCompare(b.id));return candidates[0];}
  function applyPreset(name,target=state){const presets={starter:[1,'common','bow'],rifle:[3,'rare','rifle'],melee:[5,'rare','mace_mallet'],epic:[7,'epic','rifle']};const [t,r,role]=presets[name]||presets.rifle;for(const [slot] of SLOTS){target.slots[slot]=emptySlot();if(slot==='ring1'||slot==='ring2'||slot==='neck')continue;const item=pickItem(slot,t,r,slot==='weapon'?role:null);if(item)target.slots[slot].id=item.id;}return target;}
  function normalizeConfig(input){
    if(!plain(input)||input.schema!==SCHEMA||!plain(input.slots))throw Error('不是本实验室导出的搭配文件。');
    const knownSlots=new Set(SLOTS.map(([slot])=>slot));
    for(const slot of Object.keys(input.slots))if(!knownSlots.has(slot))throw Error('配置包含未知装备槽。');
    const readId=(value,label)=>{
      if(value==null)return '';
      if(typeof value!=='string')throw Error(label+'标识必须是字符串。');
      return value;
    };
    const optionalRecord=(value,label)=>{
      if(value==null)return {};
      if(!plain(value))throw Error(label+'配置无效。');
      return value;
    };
    const result=initialState();
    for(const [slot] of SLOTS){
      const source=input.slots[slot];
      if(source==null)continue;
      if(!plain(source))throw Error('装备槽配置无效。');
      const id=readId(source.id,'装备'),item=id?byId.get(id):null;
      if(id&&!allowed(item,slot))throw Error(NAMES[slot]+' 中存在不合法或未知装备。');
      const record=emptySlot();
      record.id=item?.id||'';
      record.level=checkNumber(source.level,1,3000,1,true);
      if(source.overrides!=null&&!plain(source.overrides))throw Error('装备属性配置无效。');
      for(const [key,value] of Object.entries(source.overrides||{})){
        if(!item||!Object.hasOwn(item.curves,key)||key==='item_level')throw Error('配置尝试给装备加入不存在的属性。');
        // A known null override is the JSON equivalent of leaving its input
        // empty. Validate the key first so null cannot conceal a forged stat.
        if(value==null)continue;
        const [min,max]=domain(key);
        record.overrides[key]=checkNumber(value,min,max,null,key==='max_durability');
      }
      record.currentDurability=checkNumber(source.currentDurability,0,1e7,null,true);
      record.weaponSpeed=slot==='weapon'?checkNumber(source.weaponSpeed,.05,20,null):null;
      record.weaponRange=slot==='weapon'?checkNumber(source.weaponRange,.1,30,null):null;
      result.slots[slot]=record;
    }
    if(input.base!=null&&!plain(input.base))throw Error('人物基础值无效。');
    for(const [key,,min,max] of BASE_FIELDS)result.base[key]=checkNumber(input.base?.[key],min,max,result.base[key]);
    result.foodId=readId(input.foodId,'食物');
    if(result.foodId&&!foodById.has(result.foodId))throw Error('未知食物。');
    const effects=foodEffects(foodById.get(result.foodId));
    if(input.foodOverrides!=null&&!plain(input.foodOverrides))throw Error('食物效果格式无效。');
    for(const [key,value] of Object.entries(input.foodOverrides||{})){
      if(!Object.hasOwn(effects,key))throw Error('食物包含未定义的覆盖项。');
      if(value==null)continue;
      const [min,max]=domain(key);
      result.foodOverrides[key]=checkNumber(value,min,max,null);
    }
    if(input.skills!=null&&!plain(input.skills))throw Error('技能配置无效。');
    for(const [id,level] of Object.entries(input.skills||{})){
      const skill=skillById.get(id);
      if(!skill)throw Error('未知技能。');
      result.skills[id]=checkNumber(level,0,skill.maxLevel||1,0,true);
    }
    const healing=optionalRecord(input.healing,'恢复品'),healingId=readId(healing.id,'恢复品');
    if(healingId&&(!foodById.has(healingId)||finite(foodById.get(healingId).heal)<=0))throw Error('未知恢复品或该食物没有恢复效果。');
    result.healing={id:healingId,count:checkNumber(healing.count,0,99,0,true),threshold:checkNumber(healing.threshold,.01,.99,.4),cooldown:checkNumber(healing.cooldown,.1,600,10)};
    const enemy=optionalRecord(input.enemy,'动物'),enemyId=readId(enemy.id,'动物');
    if(enemyId&&!animalById.has(enemyId))throw Error('未知动物原型。');
    result.enemy={id:enemyId||result.enemy.id,tier:checkNumber(enemy.tier,0,6,0,true),layer:checkNumber(enemy.layer,0,1e6,0,true),overrides:{}};
    if(enemy.overrides!=null&&!plain(enemy.overrides))throw Error('动物配置无效。');
    for(const [key,value] of Object.entries(enemy.overrides||{})){
      const field=ANIMAL_FIELDS.find(x=>x[0]===key);
      if(!field)throw Error('动物包含未知属性。');
      if(value==null)continue;
      result.enemy.overrides[key]=checkNumber(value,field[2],field[3],null);
    }
    const experiment=optionalRecord(input.experiment,'实验');
    for(const [key,min,max,integer] of [['seed',0,4294967295,true],['maxTime',1,600,true],['startDistance',0,30,false],['wearPerAttack',0,1000,false],['runs',1,500,true]])result.experiment[key]=checkNumber(experiment[key],min,max,result.experiment[key],integer);
    return result;
  }
  function foodEffects(food){if(!food)return {};const source=food.buffs||food.effects||{};const result={};if(plain(source))for(const [key,value] of Object.entries(source))if(typeof value==='number'&&Number.isFinite(value))result[key]=value;return result;}
  function skillEffects(skill,level){if(!skill||level<=0)return {};const entry=Array.isArray(skill.levels)?skill.levels[Math.min(level,skill.levels.length)-1]:skill.levels?.[String(level)];const source=entry?.effects||entry||skill.effects||{};const result={};if(plain(source))for(const [key,value] of Object.entries(source))if(typeof value==='number'&&Number.isFinite(value))result[key]=value*(skill.perLevel&&!entry?level:1);return result;}
  function sumInto(target,source){for(const [key,value] of Object.entries(source||{}))if(Number.isFinite(value)&&key!=='max_durability')target[key]=(target[key]||0)+value;}
  function slotValues(record){const item=byId.get(record.id);if(!item)return null;const stats={},defaults={},locked=[];for(const key of Object.keys(item.curves||{})){if(key==='item_level')continue;const original=naturalValue(item,key,record.level);defaults[key]=original;if(!Number.isFinite(original)){locked.push(key);continue;}stats[key]=Object.hasOwn(record.overrides,key)?record.overrides[key]:original;}const maxDurability=Math.max(1,stats.max_durability||1),currentDurability=record.currentDurability==null?maxDurability:Math.min(record.currentDurability,maxDurability);return {item,record,stats,defaults,locked,maxDurability,currentDurability};}
  function buildCharacter(config){const gearTotals={},views={},warnings=[];let capacity=0,additionalCapacity=0;for(const [slot] of SLOTS){const view=slotValues(config.slots[slot]);if(!view)continue;views[slot]=view;if(view.currentDurability===0&&Object.hasOwn(view.stats,'max_durability')){warnings.push(NAMES[slot]+'耐久为 0：本模拟按装备失效处理。');continue;}sumInto(gearTotals,view.stats);if(slot==='backpack'){capacity=finite(view.item.capacity);additionalCapacity=Object.values(view.item.backpack?.additional_slot_tags||{}).reduce((a,n)=>a+finite(n),0);}}
    const weapon=views.weapon,weaponAvailable=weapon&&weapon.currentDurability>0;
    const food=foodById.get(config.foodId),foodStats=foodEffects(food);Object.assign(foodStats,config.foodOverrides);const skillStats={};for(const [id,level] of Object.entries(config.skills)){const skill=skillById.get(id);if(level&&skill){if(skill.implemented===false){warnings.push(skill.name+'：只作技能记录，尚未纳入模拟。');continue;}if(skill.condition?.weaponSubs&&!skill.condition.weaponSubs.includes(weaponAvailable?weapon.item.sub:'unarmed')){warnings.push(skill.name+'：当前武器不满足生效条件。');continue;}if(skill.condition?.targetType&&skill.condition.targetType!=='animal')continue;sumInto(skillStats,skillEffects(skill,level));}}
    const weaponInput=weaponAvailable?{aps:weapon.record.weaponSpeed??weapon.item.aps??1,range:weapon.record.weaponRange??weapon.item.range??1,sub:weapon.item.sub,ignoreStrength:!!weapon.item.ignoreStrength,currentDurability:weapon.currentDurability,maxDurability:weapon.maxDurability}: {aps:D.playerDefaults?.attackSpeed||1.25,range:D.playerDefaults?.range||1,sub:'unarmed',currentDurability:Infinity,maxDurability:Infinity};
    const armorSlots=['head','body','legs','boots'].map(slot=>{const view=views[slot],stats=view&&view.currentDurability>0?view.stats:{};return {slot,armor:finite(stats.armor),firearm_resistance:finite(stats.firearm_resistance),fire_resistance:finite(stats.fire_resistance)};});
    const derived=E.deriveCharacter({base:{...config.base,moveSpeed:D.playerDefaults?.moveSpeed||4},gearTotals,foodStats,skillStats,armorSlots,weapon:weaponInput,hasWeapon:!!weaponAvailable});derived.name='测试角色';derived.kind='player';derived.targetType='animal';derived.currentDurability=weaponInput.currentDurability;derived.maxDurability=weaponInput.maxDurability;derived.weaponType=weaponInput.sub;derived.foodDuration=finite(config.foodOverrides.duration,finite(food?.duration));derived.foodStats=foodStats;derived.skillStats=skillStats;
    const unsupportedFood=food?.unsupported||Object.keys(food?.unsupportedEffects||{});if(unsupportedFood?.length)warnings.push('食物部分效果未计入：'+unsupportedFood.join('、'));
    if(food?.passiveHealingRate>0)warnings.push('本食物的持续回血尚未还原结算方式，未计入战斗；只有明确的即时治疗才用于恢复品。');
    if(gearTotals.dot_amount>0)warnings.push('持续伤害词条仅展示；未确认触发与结算语义，不计入模拟伤害。');
    if(gearTotals.slow_modifier>0||gearTotals.slow_time>0)warnings.push('减速词条仅展示；站桩模型不推算走位或永久控制收益。');
    return {stats:derived,totals:{...gearTotals},foodStats,skillStats,views,capacity,additionalCapacity,warnings:[...warnings,...(derived.warnings||[])]};
  }
  function buildEnemy(config){const animal=animalById.get(config.enemy.id);const result=E.transformAnimal(animal?.base||{},config.enemy.tier,config.enemy.layer);Object.assign(result,config.enemy.overrides);result.name=animal?.name||'预设动物';result.id=animal?.id;result.targetType='player';return result;}
  function scheduleSave(){clearTimeout(saveTimer);saveTimer=setTimeout(()=>{try{localStorage.setItem(STORE,JSON.stringify({config:state,reference}));$('lab-save-status').textContent='已自动保存到此浏览器';storeAvailable=true;}catch(_){storeAvailable=false;$('lab-save-status').textContent='浏览器不允许本地保存；可导出搭配';}},220);}
  function markChanged(){configRevision++;if(busy)cancelExperiment();if(lastReport){$('lab-result-state').textContent='旧结果 · 配置已修改';$('lab-result-state').classList.add('lab-stale');}scheduleSave();}
  function clampDurability(config){for(const record of Object.values(config.slots)){const view=slotValues(record);if(view&&record.currentDurability!=null)record.currentDurability=view.currentDurability;}}
  function commitConfig(input){const next=normalizeConfig(input);clampDurability(next);buildCharacter(next);buildEnemy(next);const previous=state;state=next;try{renderAll();}catch(error){state=previous;try{renderAll();}catch(_){}throw error;}markChanged();}
  function refreshMetrics(){playerView=buildCharacter(state);enemyView=buildEnemy(state);gearView=playerView.views;renderModel();renderMetrics();renderEnemy();}
  function changed(editor=false){clampDurability(state);markChanged();refreshMetrics();if(editor)renderEditor();}
  function option(value,text,selected=false){return '<option value="'+esc(value)+'"'+(selected?' selected':'')+'>'+esc(text)+'</option>';}
  function imageTag(item,size=48){const src=images[item?.id];return src?'<img src="'+src+'" alt="'+esc(item.name)+'" width="'+size+'" height="'+size+'" loading="lazy" decoding="async">':'<span class="lab-empty-slot" aria-hidden="true">◇</span>';}
  function avatarStatus(result){
    const status=$('lab-avatar-status'),canvas=$('lab-avatar-canvas'),fallback=$('lab-doll'),button=$('lab-avatar-open');
    if(!status||!canvas||!fallback)return;
    const stateName=result?.state||'loading',failed=stateName==='error'||stateName==='fallback',downloading=stateName==='downloading';
    const show3d=!failed&&!downloading;
    status.dataset.state=stateName;status.textContent=result?.message||'正在准备 3D 预览。';
    canvas.hidden=!show3d;fallback.hidden=show3d;fallback.style.display=show3d?'none':'';
    $('lab-avatar-hint').textContent=show3d?'拖动旋转 · 滚轮缩放':'点击部位 · 二维装备预览';
    root.querySelector('.lab-avatar-toolbar').hidden=!show3d;
    root.querySelector('.lab-avatar-actions').hidden=!show3d;
    for(const id of ['lab-avatar-front','lab-avatar-back','lab-avatar-zoom-in','lab-avatar-zoom-out','lab-avatar-reset'])$(id).disabled=!show3d;
    const retryTextures=stateName==='ready'&&result.textureFailures>0;
    button.hidden=show3d&&!retryTextures;
    button.disabled=downloading;
    button.textContent=downloading?'正在载入 3D…':retryTextures?'重试 3D 纹理':failed?'重试打开 3D 试装':'打开 3D 试装';
    button.setAttribute('aria-busy',String(downloading));
  }
  function openAvatarPreview(){
    if(avatarLoading)return avatarLoading;
    avatarStatus({state:'downloading',message:'正在载入 3D 模型，期间可继续二维配装、比较和对战。'});
    avatarLoading=(async()=>{
      if(!avatarResourcesReady){
        if(!window.WestlandAssets)throw Error('3D 加载器不可用。请刷新页面后重试。');
        await window.WestlandAssets.load('lab/data/avatar.js');
        await Promise.all(['lab/data/avatar-meshes.js','lab/data/avatar-textures.js','lab/offline-textures.js','lab/loadout-avatar3d-engine.js'].map(path=>window.WestlandAssets.load(path)));
        if(!window.WESTLAND_LAB_DATA.avatar?.meshes||!window.WESTLAND_LAB_DATA.avatar?.textures||!window.WestlandAvatar3D)throw Error('3D 模型资源不完整。');
        avatarResourcesReady=true;
      }
      avatarThemeObserver?.disconnect();avatarThemeObserver=null;
      avatarPreview?.dispose();avatarPreview=null;avatarAttempted=false;avatarSelectionKey='';
      renderAvatarPreview();
      if(!$('lab-avatar-canvas').hidden)$('lab-avatar-canvas').focus({preventScroll:true});
    })().catch(()=>{
      avatarStatus({state:'error',message:'3D 试装未能载入。请检查网络后重试；二维配装和对战仍可使用。'});
    }).finally(()=>{avatarLoading=null;});
    return avatarLoading;
  }
  function renderAvatarPreview(){
    if(!avatarResourcesReady)return;
    if(!avatarAttempted){
      avatarAttempted=true;
      try{
        const canvas=$('lab-avatar-canvas'),raw=window.WESTLAND_LAB_DATA.avatar;
        if(!window.WestlandAvatar3D||!canvas||!raw)throw Error('3D 模型资源未载入。');
        if(typeof canvas.getContext!=='function')throw Error('当前环境没有 WebGL 画布支持。');
        const data=raw;
        const genders=Object.keys(data.base||{}).filter(key=>['male','female'].includes(key));
        if(!genders.length)throw Error('缺少人物基础模型。');
        avatarGender=genders.includes(avatarGender)?avatarGender:genders[0];
        $('lab-avatar-gender').innerHTML=genders.map(key=>option(key,key==='female'?'女性':'男性',key===avatarGender)).join('');
        $('lab-avatar-gender').disabled=genders.length<2;
        const meshes=Object.keys(data.meshes||{}),coverage=data.coverage||{},missing=Array.isArray(coverage.missing)?coverage.missing.length:finite(coverage.missing),partial=Object.values(data.items||{}).filter(item=>item.partial).length;
        $('lab-avatar-coverage').textContent='收录 '+meshes.length+' 个原版网格；'+finite(coverage.visible)+' 件装备有可见模型，'+finite(coverage.nonVisual)+' 件饰品无独立可见外观'+(missing?'，另有 '+missing+' 件尚未覆盖':'，可见装备主体全部覆盖')+'。'+(partial?'其中 '+partial+' 件的附加组件还未完整显示。':'')+'采用静态试装姿态，光照及原版色板着色为网页近似，不运行原版动画与特殊材质特效。';
        canvas.hidden=false;$('lab-doll').hidden=true;$('lab-doll').style.display='none';
        avatarPreview=window.WestlandAvatar3D.create({canvas,status:$('lab-avatar-status'),data,onStatus:avatarStatus,onSelectSlot:slot=>{if(Object.hasOwn(NAMES,slot)){activeSlot=slot;$('lab-item-search').value='';renderModel();renderEditor();}}});
        if(!avatarPreview?.supported)throw Error('浏览器未能建立 WebGL 预览，配装和对战仍可正常使用。');
        avatarPreview.setTheme(document.documentElement.dataset.theme||'dark');
        if(typeof MutationObserver==='function'){
          avatarThemeObserver=new MutationObserver(()=>avatarPreview?.setTheme(document.documentElement.dataset.theme||'dark'));
          avatarThemeObserver.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
        }
      }catch(error){avatarPreview?.dispose();avatarPreview=null;avatarStatus({state:'fallback',message:error.message});}
    }
    if(!avatarPreview)return;
    const key=avatarGender+'|'+SLOTS.map(([slot])=>state.slots[slot].id).join('|');
    if(key===avatarSelectionKey)return;
    try{avatarPreview.setLoadout({gender:avatarGender,slots:state.slots});avatarSelectionKey=key;}
    catch(error){avatarStatus({state:'error',message:'3D 试装暂不可用：'+error.message});}
  }
  function renderModel(){let equipped=0;$('lab-slot-buttons').innerHTML=SLOTS.map(([slot,name])=>{const view=gearView[slot];if(view)equipped++;return '<button type="button" class="lab-slot-button" data-lab-slot="'+slot+'" aria-pressed="'+(activeSlot===slot)+'" title="'+esc(name+'：'+(view?.item.name||'未装备'))+'">'+imageTag(view?.item,32)+'<span>'+name+'</span><small>'+esc(view?.item.name||'未装备')+'</small></button>';}).join('');$('lab-equipped-count').textContent=equipped+' / 9 部位';const placements={head:[125,33,50],body:[116,132,68],legs:[126,240,49],boots:[126,334,49],weapon:[28,139,53],backpack:[224,142,49],ring1:[24,262,34],ring2:[244,262,34],neck:[135,99,30]};$('lab-doll-images').innerHTML=SLOTS.map(([slot,name])=>{const [x,y,size]=placements[slot],item=gearView[slot]?.item,src=images[item?.id];return '<g role="button" tabindex="0" data-lab-slot="'+slot+'" class="'+(activeSlot===slot?'lab-doll-selected':'')+'" aria-label="'+esc(name+'：'+(item?.name||'未装备'))+'"><title>'+esc(name+'：'+(item?.name||'未装备'))+'</title><rect class="lab-doll-slot" x="'+x+'" y="'+y+'" width="'+size+'" height="'+size+'" rx="8"/>'+(src?'<image href="'+src+'" x="'+(x+2)+'" y="'+(y+2)+'" width="'+(size-4)+'" height="'+(size-4)+'" preserveAspectRatio="xMidYMid meet"/>':'<text x="'+(x+size/2)+'" y="'+(y+size/2+4)+'" text-anchor="middle" font-size="12" fill="var(--muted)">+</text>')+'</g>';}).join('');renderAvatarPreview();}
  function filteredItems(){const query=$('lab-item-search').value.trim().toLowerCase();return catalog.filter(item=>allowed(item,activeSlot)&&(!query||(item.name+' '+item.en+' '+(RAR[item.rarity]||'')+' t'+item.tier).toLowerCase().includes(query))).sort((a,b)=>a.tier-b.tier||a.name.localeCompare(b.name,'zh-CN'));}
  function renderItemOptions(){const selected=state.slots[activeSlot].id,list=filteredItems();let html=option('','不装备',!selected);if(selected&&!list.some(item=>item.id===selected)){const item=byId.get(selected);html+=option(selected,item.name+'（当前选择，筛选外）',true);}for(const item of list)html+=option(item.id,'T'+item.tier+' · '+item.name+' · '+(RAR[item.rarity]||item.rarity),item.id===selected);$('lab-item-select').innerHTML=html;}
  function renderEditor(){const record=state.slots[activeSlot],view=slotValues(record);$('lab-slot-title').textContent=NAMES[activeSlot];renderItemOptions();$('lab-selected-name').textContent=view?.item.name||'未装备';$('lab-item-art').innerHTML=imageTag(view?.item,56);$('lab-item-description').textContent=view?'T'+view.item.tier+' · '+(RAR[view.item.rarity]||view.item.rarity)+' · '+Object.keys(view.item.curves).filter(k=>k!=='item_level').length+' 项定义属性':'从上方列表选择当前部位的装备。';$('lab-level').value=record.level;$('lab-level').disabled=!view;$('lab-current-durability').disabled=!view||!Object.hasOwn(view.stats,'max_durability');$('lab-current-durability').value=record.currentDurability??'';$('lab-current-durability').placeholder=view?'满耐久 '+fmt(view.maxDurability,0):'默认满耐久';$('lab-current-durability').max=view?.maxDurability||1e7;$('lab-weapon-fields').hidden=activeSlot!=='weapon'||!view;$('lab-weapon-speed').value=record.weaponSpeed??'';$('lab-weapon-range').value=record.weaponRange??'';$('lab-weapon-speed').placeholder=String(view?.item.aps||1);$('lab-weapon-range').placeholder=String(view?.item.range||1);
    const ordered=['damage','penetrating_damage','armor','health_increment','strength','stamina','dexterity','wisdom','critical_hit_chance','critical_modifier','max_durability'];const keys=view?Object.keys(view.defaults).sort((a,b)=>(ordered.indexOf(a)<0?99:ordered.indexOf(a))-(ordered.indexOf(b)<0?99:ordered.indexOf(b))):[];
    $('lab-item-stats').innerHTML=keys.map((key,i)=>{const natural=view.defaults[key],locked=!Number.isFinite(natural),edited=Object.hasOwn(record.overrides,key),factor=percents.has(key)?100:1,[min,max]=domain(key),inputId='lab-stat-'+i;return '<div class="lab-stat-row'+(locked?' lab-locked':'')+'"><label for="'+inputId+'">'+esc(labels[key]||'未标注属性')+(percents.has(key)?'（%）':'')+'<small>默认 '+statText(key,natural)+(edited?' · <span class="lab-edited">当前 '+statText(key,view.stats[key])+'</span>':'')+'</small></label><input id="'+inputId+'" data-lab-stat="'+esc(key)+'" type="number" min="'+min*factor+'" max="'+max*factor+'" step="'+(key==='max_durability'?'1':'any')+'" placeholder="'+(locked?'未解锁':fmt(natural*factor))+'" value="'+(edited&&!locked?record.overrides[key]*factor:'')+'"'+(locked?' disabled':'')+' aria-label="'+esc(labels[key]||'未标注属性')+'手动覆盖"></div>';}).join('')||'<p class="mini-note">未选择装备，无额外属性。空手基础伤害可在右侧调整。</p>';
  }
  function renderBase(){ $('lab-base-fields').innerHTML=BASE_FIELDS.map(([key,name,min,max])=>'<label>'+name+'<input type="number" data-lab-base="'+key+'" min="'+min+'" max="'+max+'" step="any" value="'+state.base[key]+'"></label>').join(''); }
  function renderMetrics(){const p=playerView.stats,a=reference?buildCharacter(reference).stats:null;const metrics=[['health','最大生命',p.health],['damage','主伤害 / 次',p.damage],['penetrating_damage','穿刺 / 次',p.penetrating_damage],['attackSpeed','攻击次数 / 秒',p.attackSpeed],['armor','防护点数',p.armor],['evasion','闪避率',p.evasion]];$('lab-main-metrics').innerHTML=metrics.map(([key,name,value])=>{const diff=a?finite(value)-finite(a[key]):0;return '<div class="lab-metric"><small>'+name+'</small><strong>'+statText(key,value)+'</strong>'+(a?'<span class="lab-delta"'+(diff?' data-positive="'+(diff>0)+'"':'')+'>对照 A '+(diff>0?'+':'')+statText(key,diff)+'</span>':'<span class="lab-delta">当前搭配</span>')+'</div>';}).join('');$('lab-compare-summary').textContent=(reference?'已保存对照 A；绿色表示该指标数值增加，不代表必然更强。':'记为对照 A 后，可实时比较调整前后的差异。')+' 背包容量：基础 '+playerView.capacity+' 格'+(playerView.additionalCapacity?' + 分类格 '+playerView.additionalCapacity:'')+'。';$('lab-load-a').disabled=!reference;
    const total={...playerView.totals,...p};const keys=Object.keys(labels).filter(k=>Number.isFinite(total[k])&&(total[k]!==0||['health','damage','armor','attackSpeed','range','strength','stamina','dexterity','wisdom'].includes(k)));$('lab-total-stats').innerHTML=keys.map(key=>'<tr><td>'+esc(labels[key])+'</td><td>'+statText(key,total[key])+'</td><td>'+(a?statText(key,a[key]??0):'—')+'</td></tr>').join('');$('lab-build-warnings').innerHTML=[...new Set(playerView.warnings)].map(text=>'<p class="lab-warning">'+esc(text)+'</p>').join('');}
  function renderFood(){ $('lab-food').innerHTML=option('','不使用战前食物',!state.foodId)+foods.map(food=>option(food.id,food.name,food.id===state.foodId)).join('');const food=foodById.get(state.foodId),effects=foodEffects(food);const effective={...effects,...state.foodOverrides};$('lab-food-effects').innerHTML=food?(images[food.id]?imageTag(food,36):'')+Object.entries(effective).map(([k,v])=>'<span class="lab-effect-tag">'+esc(labels[k]||'未标注属性')+' '+statText(k,v)+'</span>').join('')+'<p class="mini-note">'+esc(food.description||food.note||'')+'</p>':'不额外加入食物增益。';$('lab-food-overrides').innerHTML=Object.entries(effects).map(([key,value])=>{const factor=percents.has(key)?100:1,[min,max]=domain(key);return '<label>'+esc(labels[key]||'未标注属性')+(percents.has(key)?'（%）':'')+'<input type="number" data-lab-food-stat="'+esc(key)+'" min="'+min*factor+'" max="'+max*factor+'" step="any" placeholder="'+fmt(value*factor)+'" value="'+(Object.hasOwn(state.foodOverrides,key)?state.foodOverrides[key]*factor:'')+'"></label>';}).join('')||'<p class="mini-note">当前没有可手调的战斗增益。</p>';$('lab-healing').innerHTML=option('','不使用恢复品',!state.healing.id)+foods.filter(food=>finite(food.heal)>0).map(food=>option(food.id,food.name+' · 恢复 '+fmt(food.heal),food.id===state.healing.id)).join('');$('lab-heal-count').value=state.healing.count;$('lab-heal-threshold').value=state.healing.threshold*100;$('lab-heal-cooldown').value=state.healing.cooldown;const heal=foodById.get(state.healing.id);$('lab-healing-note').textContent=heal?'每次按 '+fmt(heal.heal)+' 点恢复，最多使用 '+state.healing.count+' 份；间隔为明确的模拟参数，不保证等同所有实机使用动画/公共冷却。':'恢复品默认不携带，避免无意加入无限治疗。';}
  function renderSkills(){
    const title=skill=>skill.name+(skill.id.match(/_t(\d+)(?:_|$)/)?' · 第 '+skill.id.match(/_t(\d+)(?:_|$)/)[1]+' 阶':'');
    const query=$('lab-skill-search').value.trim().toLowerCase();
    const filtered=skills.filter(skill=>!query||(title(skill)+' '+(skill.description||'')).toLowerCase().includes(query));
    $('lab-skills').innerHTML=filtered.map((skill,index)=>{
      const level=state.skills[skill.id]||0,effects=skillEffects(skill,level);
      return '<div class="lab-skill" data-active="'+(level>0)+'"><div><strong>'+esc(title(skill))+'</strong>'+(skill.implemented===false?'<span class="badge dim">仅记录</span>':'')+'<p>'+esc(skill.description||'')+'</p>'+(level?'<p>'+Object.entries(effects).map(([key,value])=>esc(labels[key]||'未标注属性')+' '+statText(key,value)).join(' / ')+'</p>':'')+'</div><label for="lab-skill-'+index+'">'+(skill.maxLevel===1?'学习 · 0 / 1':'等级 / '+skill.maxLevel)+'<input id="lab-skill-'+index+'" data-lab-skill="'+esc(skill.id)+'" type="number" min="0" max="'+skill.maxLevel+'" step="1" value="'+level+'"></label></div>';
    }).join('')||'<p class="mini-note">没有匹配的技能。</p>';
    const used=Object.values(state.skills).filter(n=>n>0).length;
    $('lab-skill-note').textContent='已配置 '+used+' 个技能节点。同名不同阶独立配置，0 为未学、1 为已学；本页不检查技能书、角色等级和前置技能。未适配的主动、场景或宠物效果标为“仅记录”。';
  }
  function renderEnemyInputs(){ $('lab-animal').innerHTML=animals.map(animal=>option(animal.id,animal.name+(animal.tier?' · T'+animal.tier:''),animal.id===state.enemy.id)).join('');$('lab-animal-tier').innerHTML=design.TIERS.map((q,i)=>option(i,q.name,i===state.enemy.tier)).join('');$('lab-animal-layer').value=state.enemy.layer;$('lab-animal-layer').disabled=state.enemy.tier!==6;$('lab-start-distance').value=state.experiment.startDistance;const raw=E.transformAnimal(animalById.get(state.enemy.id)?.base||{},state.enemy.tier,state.enemy.layer);$('lab-animal-overrides').innerHTML=ANIMAL_FIELDS.map(([key,name,min,max])=>'<label>'+name+'<input data-lab-animal-stat="'+key+'" type="number" min="'+min+'" max="'+max+'" step="any" placeholder="'+fmt(raw[key])+'" value="'+(state.enemy.overrides[key]??'')+'"></label>').join('');}
  function renderEnemy(){const animal=animalById.get(state.enemy.id),art=design.bestiary.animals.find(x=>x.id===state.enemy.id);const src=images[art?.image||state.enemy.id];if(src)$('lab-animal-image').src=src;$('lab-animal-image').hidden=!src;$('lab-animal-image').alt=animal?.name||'预设动物';$('lab-animal-name').textContent=(animal?.name||'未选择')+' · '+design.TIERS[state.enemy.tier].name;$('lab-animal-source').textContent=animal?.confidence==='verified'?'原型值来自本地 R14 配置':'原型值来自本地配置；动作参数见模拟边界';$('lab-animal-metrics').innerHTML=[['生命',enemyView.health],['主伤害',enemyView.damage],['防护',enemyView.armor],['攻击 / 秒',enemyView.attackSpeed],['射程',enemyView.range]].map(([name,value])=>'<span>'+name+'<b>'+fmt(value)+'</b></span>').join('');}
  function renderExperiment(){for(const [id,key] of [['lab-seed','seed'],['lab-time-limit','maxTime'],['lab-runs','runs'],['lab-wear','wearPerAttack']])$(id).value=state.experiment[key];}
  function readableNote(value){
    return String(value||'').replace(/food\/heal/g,'食物与恢复品').replace(/health_regen/g,'生命恢复速率')
      .replace(/即时恢复 health/g,'即时恢复量').replace(/SHA-256 锁校验/g,'资料核验');
  }
  function renderEvidence(){const assumptions=E.ASSUMPTIONS||E.assumptions||[];$('lab-simulation-assumptions').innerHTML='<ul>'+assumptions.map(x=>'<li>'+esc(typeof x==='string'?x:x.text||x.description||'')+'</li>').join('')+'</ul>';const notes=[...(D.notes||[]),...(D.sourceDescription||[]).map(x=>typeof x==='string'?x:(x.description||''))];$('lab-evidence').innerHTML='<p>本模块的装备自然曲线来自原有 225 件定制目录，并增加本地目录中可合法装备的戒指、项链；食物、技能与动物数据由本地游戏静态资料整理。手动值是当前测试方案的输入，并非对游戏存档的写入。</p>'+notes.filter(Boolean).map(text=>'<p>'+esc(readableNote(text))+'</p>').join('')+'<p>战斗统计以模型内真实累计的有效伤害为准：致死溢出不计入有效 DPS；未结束、事件上限或超时单独统计，不当作胜利。</p>';}
  function renderAll(){renderBase();renderFood();renderSkills();refreshMetrics();renderEditor();renderEnemyInputs();renderExperiment();renderEvidence();}
  function applyDifficulty(){const tier=design.TIERS.findIndex(q=>q.name===document.getElementById('tier-name')?.textContent);const d=tier<0?0:tier,level=design.levelFor(d);for(const [slot] of SLOTS){const record=state.slots[slot];if(!record.id)continue;record.level=level;record.overrides={};record.currentDurability=null;}const views=SLOTS.map(([slot])=>[slot,slotValues(state.slots[slot])]).filter(([,view])=>view);const sums={};for(const [,view] of views)sumInto(sums,view.stats);for(const [slot,view] of views){const record=state.slots[slot];for(const [key,n] of Object.entries(view.stats)){if(!(n>0)||!d)continue;const allocation=design.budget(key,d);let value=n;if(allocation){const total=sums[key]||0;value=n+(total?Math.min(allocation.add,Math.max(0,allocation.cap-total))*n/total:0);}else if(key!=='slow_time'&&key!=='slow_modifier')value=design.enhance(key,n,d).value;if(Number.isFinite(value)&&value!==n)record.overrides[key]=clamp(value,...domain(key));}}$('lab-all-level').value=level;changed(true);message('已将“'+design.TIERS[d].name+'”装备提案应用到当前搭配，按全套预算分配百分比词条；不额外放大玩家本体生命，动物难度独立选择。');}
  function setBusy(value){busy=value;for(const id of ['lab-run-once','lab-run-batch'])$(id).disabled=value;$('lab-cancel').disabled=!value;}
  function cancelExperiment(){runToken++;setBusy(false);$('lab-progress').textContent='实验已停止；尚未完成的批次不产生统计报告。';}
  function simulationOptions(config){const food=foodById.get(config.healing.id);return {...config.experiment,healing:{amount:finite(food?.heal),count:config.healing.count,threshold:config.healing.threshold,cooldown:config.healing.cooldown}};}
  function runExperiment(batch=false){
    if(busy)return;
    const invalid=root.querySelector?.('input:invalid');
    if(invalid){message('请先修正标红的数值，实验不会使用被拒绝的输入。',true);invalid.reportValidity();return;}
    message('');
    let config,p,enemy,options;
    try{config=clone(state);p=buildCharacter(config).stats;enemy=buildEnemy(config);options=simulationOptions(config);}
    catch(error){message('无法建立实验：'+error.message,true);return;}
    const total=batch?config.experiment.runs:1,token=++runToken,results=[];
    let next=0;
    setBusy(true);$('lab-progress').textContent='正在准备实验…';
    function chunk(){
      if(token!==runToken)return;
      try{
        const until=Math.min(total,next+5);
        for(;next<until;++next){
          const result=E.simulate(p,enemy,{...options,seed:(config.experiment.seed+Math.imul(next,2654435761))>>>0,recordEvents:next===0});
          results.push(result);
        }
        $('lab-progress').textContent='已完成 '+next+' / '+total+' 场';
        if(next<total){setTimeout(chunk,0);return;}
        setBusy(false);
        lastReport={schema:'WLO-LOADOUT-BATTLE-REPORT-1',config,player:p,enemy,options,results,generatedAt:new Date().toISOString(),modelOnly:true};
        renderReport();
      }catch(error){setBusy(false);message('模拟未完成：'+error.message,true);$('lab-progress').textContent='实验失败，未生成成功报告。';}
    }
    setTimeout(chunk,0);
  }
  function metricCard(name,value,sub=''){return '<div class="lab-metric"><small>'+esc(name)+'</small><strong>'+esc(value)+'</strong><span class="lab-delta">'+esc(sub)+'</span></div>';}
  function renderReport(){if(!lastReport)return;const list=lastReport.results,first=list[0],wins=list.filter(x=>x.winner==='player').length,losses=list.filter(x=>x.winner==='enemy').length,draws=list.length-wins-losses;$('lab-battle-results').hidden=false;$('lab-result-state').classList.remove('lab-stale');$('lab-result-state').textContent=list.length===1?'单场结果':'批量统计';$('lab-export-report').disabled=false;const resultName={player:'角色胜利',enemy:'动物胜利',draw:'平局',timeout:'超时未决',event_limit:'事件上限未决',weapon_broken:'武器损坏'}[first.winner]||first.reason||'未决';const average=list.reduce((a,x)=>a+finite(x.duration),0)/list.length;$('lab-battle-summary').innerHTML=list.length===1?[metricCard('对战结果',resultName,'种子 '+lastReport.config.experiment.seed),metricCard('持续时间',fmt(first.duration)+' 秒'),metricCard('角色剩余生命',fmt(first.playerHp)),metricCard('动物剩余生命',fmt(first.enemyHp))].join(''):[metricCard('角色胜率',fmt(wins/list.length*100)+'%',wins+' 胜 / '+losses+' 负 / '+draws+' 未决'),metricCard('平均时长',fmt(average)+' 秒',list.length+' 场已完成'),metricCard('平均剩余生命',fmt(list.reduce((a,x)=>a+finite(x.playerHp),0)/list.length),'角色，含败场'),metricCard('第 1 场',resultName,'轨迹与明细展示此场')].join('');
    const ps=first.player||{},es=first.enemy||{};const rows=[['攻击次数','attacks'],['有效命中','hits'],['暴击次数','criticals'],['被闪避次数','misses'],['有效总伤害','totalDamage'],['其中主伤害','physicalDamage'],['其中穿刺伤害','piercingDamage'],['有效治疗','healing'],['恢复品使用数','healsUsed']];$('lab-battle-stats').innerHTML=rows.map(([name,key])=>'<tr><td>'+name+'</td><td>'+fmt(finite(ps[key]))+'</td><td>'+fmt(finite(es[key]))+'</td></tr>').join('')+'<tr><td>有效 DPS</td><td>'+fmt(first.duration>0?finite(ps.totalDamage)/first.duration:0)+'</td><td>'+fmt(first.duration>0?finite(es.totalDamage)/first.duration:0)+'</td></tr><tr><td>武器剩余耐久</td><td>'+fmt(ps.weaponDurability)+'</td><td>不适用</td></tr>';
    const warnings=[...new Set(list.flatMap(result=>result.warnings||[]))];let batchInfo='';if(list.length>1){const z=1.96,n=list.length,p=wins/n,den=1+z*z/n,center=(p+z*z/(2*n))/den,half=z*Math.sqrt(p*(1-p)/n+z*z/(4*n*n))/den;batchInfo='<div class="lab-batch-summary"><span>胜率 95% Wilson 区间：<strong>'+fmt(Math.max(0,center-half)*100)+'%—'+fmt(Math.min(1,center+half)*100)+'%</strong></span><span>最快 / 最慢：'+fmt(Math.min(...list.map(x=>x.duration)))+' / '+fmt(Math.max(...list.map(x=>x.duration)))+' 秒</span><span>独立种子顺序生成；区间只描述本模拟的抽样误差。</span></div>';}$('lab-batch-stats').innerHTML=batchInfo+warnings.map(text=>'<p class="lab-notes lab-warning">'+esc(text)+'</p>').join('');renderChart(first,lastReport.player,lastReport.enemy);const events=first.events||[];$('lab-event-count').textContent='· '+events.length+' 条';const actorName={player:'角色',enemy:'动物'};$('lab-event-log').innerHTML=events.slice(0,1000).map(event=>'<tr><td>'+fmt(event.time,3)+' s</td><td>'+esc((actorName[event.actor]||'')+' '+({attack:'攻击',hit:'命中',miss:'被闪避',critical:'暴击',heal:'恢复',break:'武器损坏',approach:'接近',end:'结束'}[event.type]||event.type||''))+'</td><td>'+esc(event.message||((event.critical?'暴击 · ':'')+(Number.isFinite(event.damage)?'伤害 '+fmt(event.damage):'')))+'</td><td>'+fmt(event.playerHp)+'</td><td>'+fmt(event.enemyHp)+'</td></tr>').join('');}
  function renderChart(result,player,enemy){const points=result.timeline||[];if(!points.length){$('lab-health-chart').textContent='本场没有可绘制的轨迹。';return;}const w=500,h=225,left=40,right=12,top=12,bottom=28,duration=Math.max(.001,result.duration),pw=w-left-right,ph=h-top-bottom;function path(key,max){return points.map((point,i)=>(i?'L':'M')+(left+clamp(point.time/duration,0,1)*pw).toFixed(2)+','+(top+(1-clamp(finite(point[key])/Math.max(1,max),0,1))*ph).toFixed(2)).join(' ');}let grid='';for(let i=0;i<=4;i++){const y=top+i*ph/4;grid+='<path class="lab-chart-grid" d="M'+left+' '+y+'H'+(w-right)+'"/><text x="'+(left-5)+'" y="'+(y+4)+'" text-anchor="end">'+(100-i*25)+'%</text>';const x=left+i*pw/4;grid+='<text x="'+x+'" y="'+(h-7)+'" text-anchor="middle">'+fmt(duration*i/4,1)+'s</text>';}$('lab-health-chart').innerHTML='<svg viewBox="0 0 '+w+' '+h+'" role="img" aria-label="角色与动物剩余生命百分比随时间变化">'+grid+'<path class="lab-chart-player" d="'+path('playerHp',player.health)+'"/><path class="lab-chart-enemy" d="'+path('enemyHp',enemy.health)+'"/></svg>';}
  function download(name,value){const a=document.createElement('a'),url=URL.createObjectURL(new Blob([JSON.stringify(value,null,2)],{type:'application/json;charset=utf-8'}));a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  function guarded(fn){return event=>{try{fn(event);}catch(error){message(error.message,true);}};}
  function wire(){root.addEventListener('click',guarded(event=>{const slot=event.target.closest('[data-lab-slot]');if(slot){activeSlot=slot.dataset.labSlot;$('lab-item-search').value='';renderModel();renderEditor();}}));$('lab-doll').addEventListener('keydown',event=>{if(['Enter',' '].includes(event.key)&&event.target.closest('[data-lab-slot]')){event.preventDefault();event.target.dispatchEvent(new MouseEvent('click',{bubbles:true}));}});
    $('lab-avatar-open').addEventListener('click',()=>{void openAvatarPreview();});
    $('lab-avatar-gender').addEventListener('change',guarded(()=>{const value=$('lab-avatar-gender').value;if(!['male','female'].includes(value))throw Error('未知人物外观。');avatarGender=value;avatarSelectionKey='';renderAvatarPreview();}));
    for(const [id,action] of [['lab-avatar-front',()=>avatarPreview?.view('front')],['lab-avatar-back',()=>avatarPreview?.view('back')],['lab-avatar-zoom-in',()=>avatarPreview?.zoom(.2)],['lab-avatar-zoom-out',()=>avatarPreview?.zoom(-.2)],['lab-avatar-reset',()=>avatarPreview?.resetView()]])$(id).addEventListener('click',guarded(action));
    $('lab-item-search').addEventListener('input',renderItemOptions);$('lab-item-select').addEventListener('change',guarded(()=>{const id=$('lab-item-select').value,item=byId.get(id);if(id&&!allowed(item,activeSlot))throw Error('装备与槽位不匹配。');const level=state.slots[activeSlot].level;state.slots[activeSlot]={...emptySlot(),id,level};changed(true);}));$('lab-level').addEventListener('change',guarded(()=>{state.slots[activeSlot].level=readInput($('lab-level'),1,3000,true)??1;changed(true);}));$('lab-current-durability').addEventListener('change',guarded(()=>{state.slots[activeSlot].currentDurability=readInput($('lab-current-durability'),0,gearView[activeSlot]?.maxDurability||1e7,true);changed(true);}));
    $('lab-item-stats').addEventListener('change',guarded(event=>{const input=event.target.closest('[data-lab-stat]');if(!input)return;const key=input.dataset.labStat,factor=percents.has(key)?100:1,[min,max]=domain(key),value=readInput(input,min*factor,max*factor,key==='max_durability');const overrides=state.slots[activeSlot].overrides;if(value==null)delete overrides[key];else overrides[key]=value/factor;changed(true);}));
    $('lab-base-fields').addEventListener('change',guarded(event=>{const input=event.target.closest('[data-lab-base]');if(!input)return;const key=input.dataset.labBase,field=BASE_FIELDS.find(f=>f[0]===key);state.base[key]=readInput(input,field[2],field[3])??defaultBase()[key];input.value=state.base[key];changed();}));
    for(const [id,key,min,max] of [['lab-weapon-speed','weaponSpeed',.05,20],['lab-weapon-range','weaponRange',.1,30]])$(id).addEventListener('change',guarded(()=>{state.slots.weapon[key]=readInput($(id),min,max);changed(true);}));
    $('lab-clear-slot').addEventListener('click',()=>{state.slots[activeSlot]=emptySlot();changed(true);});$('lab-reset-item').addEventListener('click',()=>{const record=state.slots[activeSlot];record.overrides={};record.currentDurability=null;record.weaponSpeed=null;record.weaponRange=null;changed(true);message('本件装备恢复当前图纸等级的默认属性。');});
    $('lab-apply-preset').addEventListener('click',()=>{applyPreset($('lab-preset').value);changed(true);message('已应用配装预设；人物基础、食物和技能保持当前选择。');});$('lab-apply-difficulty').addEventListener('click',guarded(applyDifficulty));$('lab-set-all-level').addEventListener('click',guarded(()=>{const level=readInput($('lab-all-level'),1,3000,true)??1;for(const [slot] of SLOTS)state.slots[slot].level=level;changed(true);message('全套图纸等级已设为 '+level+'；默认值重算，手动覆盖仍保留。');}));
    $('lab-food').addEventListener('change',()=>{state.foodId=$('lab-food').value;state.foodOverrides={};renderFood();changed();});$('lab-food-overrides').addEventListener('change',guarded(event=>{const input=event.target.closest('[data-lab-food-stat]');if(!input)return;const key=input.dataset.labFoodStat,factor=percents.has(key)?100:1,[min,max]=domain(key),value=readInput(input,min*factor,max*factor);if(value==null)delete state.foodOverrides[key];else state.foodOverrides[key]=value/factor;renderFood();changed();}));$('lab-healing').addEventListener('change',()=>{state.healing.id=$('lab-healing').value;renderFood();changed();});for(const [id,key,min,max,scale,integer] of [['lab-heal-count','count',0,99,1,true],['lab-heal-threshold','threshold',1,99,.01,false],['lab-heal-cooldown','cooldown',.1,600,1,false]])$(id).addEventListener('change',guarded(()=>{const value=readInput($(id),min,max,integer);if(value==null)throw Error('恢复设置不能为空。');state.healing[key]=value*scale;changed();renderFood();}));
    $('lab-skill-search').addEventListener('input',renderSkills);$('lab-skills').addEventListener('change',guarded(event=>{const input=event.target.closest('[data-lab-skill]');if(!input)return;const id=input.dataset.labSkill,level=readInput(input,0,skillById.get(id).maxLevel,true)??0;if(level)state.skills[id]=level;else delete state.skills[id];renderSkills();changed();}));$('lab-clear-skills').addEventListener('click',()=>{state.skills={};renderSkills();changed();});
    $('lab-animal').addEventListener('change',()=>{state.enemy.id=$('lab-animal').value;state.enemy.overrides={};changed();renderEnemyInputs();});$('lab-animal-tier').addEventListener('change',()=>{state.enemy.tier=Number($('lab-animal-tier').value);state.enemy.overrides={};changed();renderEnemyInputs();});$('lab-animal-layer').addEventListener('change',guarded(()=>{state.enemy.layer=readInput($('lab-animal-layer'),0,1e6,true)??0;changed();renderEnemyInputs();}));$('lab-animal-overrides').addEventListener('change',guarded(event=>{const input=event.target.closest('[data-lab-animal-stat]');if(!input)return;const key=input.dataset.labAnimalStat,field=ANIMAL_FIELDS.find(x=>x[0]===key),value=readInput(input,field[2],field[3]);if(value==null)delete state.enemy.overrides[key];else state.enemy.overrides[key]=value;changed();}));$('lab-reset-animal').addEventListener('click',()=>{state.enemy.overrides={};changed();renderEnemyInputs();});
    for(const [id,key,min,max,integer] of [['lab-start-distance','startDistance',0,30,false],['lab-seed','seed',0,4294967295,true],['lab-time-limit','maxTime',1,600,true],['lab-runs','runs',1,500,true],['lab-wear','wearPerAttack',0,1000,false]])$(id).addEventListener('change',guarded(()=>{const value=readInput($(id),min,max,integer);if(value==null)throw Error('实验设置不能为空。');state.experiment[key]=value;changed();}));
    $('lab-save-a').addEventListener('click',()=>{reference=clone(state);renderMetrics();scheduleSave();message('当前搭配已保存为对照 A。');});
    $('lab-load-a').addEventListener('click',guarded(()=>{if(!reference)return;commitConfig(reference);message('已恢复对照 A。');}));
    $('lab-export').addEventListener('click',()=>download('westland-loadout.json',state));
    $('lab-import').addEventListener('click',()=>$('lab-import-file').click());
    $('lab-import-file').addEventListener('change',async event=>{
      const file=event.target.files?.[0];if(!file)return;
      const token=++importToken,revision=configRevision;
      try{
        if(file.size>262144)throw Error('搭配文件不能超过 256 KB。');
        const contents=await file.text();
        if(token!==importToken)return;
        if(revision!==configRevision){message('读取文件期间搭配已被修改，本次导入已取消。');return;}
        commitConfig(JSON.parse(contents));
        message('搭配已导入。导入过程没有读取或修改游戏存档。');
      }catch(error){if(token===importToken)message('导入失败，原搭配未更改：'+error.message,true);}
      finally{if(token===importToken)event.target.value='';}
    });
    $('lab-reset').addEventListener('click',()=>{if(!window.confirm('重置本页实验室的搭配、食物、技能和对照 A？不会改动游戏。'))return;state=applyPreset('rifle',initialState());reference=null;lastReport=null;$('lab-battle-results').hidden=true;$('lab-export-report').disabled=true;$('lab-result-state').textContent='等待实验';$('lab-result-state').classList.remove('lab-stale');markChanged();renderAll();message('实验室已恢复默认。');});$('lab-run-once').addEventListener('click',()=>runExperiment(false));$('lab-run-batch').addEventListener('click',()=>runExperiment(true));$('lab-cancel').addEventListener('click',cancelExperiment);$('lab-export-report').addEventListener('click',()=>{if(lastReport)download('westland-battle-report.json',lastReport);});
  }
  try{if(!E||typeof E.deriveCharacter!=='function'||!animals.length)throw Error('实验数据或战斗引擎尚未完整载入。');state=applyPreset('rifle',initialState());try{const saved=JSON.parse(localStorage.getItem(STORE)||'null');if(saved){const savedState=normalizeConfig(saved.config),savedReference=saved.reference?normalizeConfig(saved.reference):null;buildCharacter(savedState);buildEnemy(savedState);state=savedState;reference=savedReference;}}catch(error){$('lab-save-status').textContent='未载入旧缓存；可以重新配置或导入方案。';}wire();renderAll();window.westlandLoadoutLab=Object.freeze({getState:()=>clone(state),getReference:()=>reference?clone(reference):null,normalizeConfig,buildCharacter,buildEnemy,slotValues,allowed,run:runExperiment,cancel:cancelExperiment,getReport:()=>lastReport?clone(lastReport):null,isBusy:()=>busy,loadConfig:commitConfig,version:1});}
  catch(error){message('装备实验室初始化失败：'+error.message,true);console.error('Westland loadout lab:',error);}
})();
