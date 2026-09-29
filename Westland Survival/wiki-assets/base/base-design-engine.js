/* Base-design proposal only: deterministic browser demo, not game implementation. */
(function (root, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.BaseDesign = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var CATEGORY_KEYS = ['food', 'raw', 'processed', 'parts', 'combat'];
  var CATEGORY_NAMES = { food: '食物', raw: '原材料', processed: '加工材料', parts: '零部件', combat: '战斗消耗品' };
  // The numeric combat columns are copied from v160 difficulty_character.cpp
  // kTuning (lines 25-42). Reusing them for enemy bases is a PROPOSAL ONLY.
  var combat = [
    [1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1.35,1.2,1.1,1.05,1.02,3,5,1.25,1.2,1.2,1.25,40,65],
    [1.9,1.55,1.25,1.12,1.04,6,50,1.75,1.55,1.6,1.5,55,75],
    [3,2.2,1.5,1.2,1.06,51,200,2.75,2.25,2.4,2,70,90],
    [5,3.2,1.85,1.3,1.08,201,500,4.5,3.5,3.8,3,85,100],
    [8,4.8,2.3,1.45,1.1,501,1500,7.5,5.5,6,4.5,95,100],
    [12,6.5,2.8,1.6,1.12,1501,3000,12,8,9,6,100,100]
  ];
  var names = ['简单', '普通', '困难', '噩梦', '地狱', '炼狱', '无尽炼狱'];
  var resources = [1,1.4,2.1,3,4.1,5.4,6.9];
  var guardRanges = [[0,1],[3,5],[5,8],[8,12],[12,17],[17,23],[23,30]];
  var petRanges = [[0,1],[0,1],[1,2],[1,2],[2,3],[2,3],[2,4]];
  var boxRanges = [[6,8],[7,9],[8,10],[9,12],[10,14],[12,16],[14,18]];
  var fees = [1,1.25,1.5,2,3,4,5];
  var qualityWeights = [[100,0,0,0],[50,40,10,0],[25,45,25,5],[10,25,45,20],[0,10,40,50],[0,0,25,75],[0,0,0,100]];
  var tiers = names.map(function (name, i) {
    var t = combat[i];
    return {
      id: i, name: name, resource: resources[i], guards: guardRanges[i], pets: petRanges[i], fee: fees[i],
      blueprint: [t[5],t[6]], hp: t[0], hit: t[1], defence: t[2], attack: t[3], move: t[4],
      power: t[7], pierce: t[8], equipmentHealth: t[9], durability: t[10], durabilityPct: [t[11],t[12]],
      boxes: boxRanges[i], qualityWeights: qualityWeights[i],
      equipmentPolicy: i === 0 ? '原版保留；蓝图与耐久数值为未干预占位，不生成零耐久装备' : '拟复用 1.6.0 装备实例强化参数，尚未接入玩家基地'
    };
  });
  var themes = [
    { id:'farm', name:'普通农庄', weight:25, resourceMix:[45,30,15,5,5], description:'偏重食物、作物与基础原材料。' },
    { id:'workshop', name:'工匠住宅', weight:25, resourceMix:[10,20,40,25,5], description:'偏重加工材料与零部件。' },
    { id:'camp', name:'武装营地', weight:20, resourceMix:[10,10,10,20,50], description:'偏重战斗物资；不代表守卫装备必定掉落。' },
    { id:'manor', name:'富裕庄园', weight:20, resourceMix:[20,15,25,20,20], description:'五类物资相对均衡，兼顾生活与建设。' },
    { id:'fort', name:'匪帮堡垒', weight:10, resourceMix:[5,15,20,20,40], description:'偏重战斗储备与零部件。' }
  ];
  var original = {
    id:'original', name:'原版代理模板（示意）', weight:0, resourceMix:[20,20,20,20,20],
    description:'仅用均衡资源单位与示意箱子演示状态，不复刻原版具体建筑、库存或概率。'
  };
  var ASSUMPTIONS = [
    '本引擎只运行在设计网页中；未修改 APK、游戏存档或真实生成逻辑。',
    'tier 使用 0–6（简单到无尽炼狱）；region 使用 1–7。人数、箱数、主题权重及资源倍率均为本方案。',
    '简单档强制使用 original 代理模板；70% 为 1 人、30% 为 0 人是设计演示，不宣称原版所有地图如此。',
    '简单档蓝图与耐久保持原版；表中 1 及 0 是 kTuning 的未干预占位，守卫耐久返回 null，不生成零耐久装备。',
    '生命、攻速、装备倍率参考现有 1.6.0 kTuning，玩家基地复用尚属提议；网页不计算原版完整装备属性与掉落表。',
    '资源单位是便于比较的抽象单位，不是某个具体物品堆叠数量、银币价值或真实箱子上限。',
    '箱子、守卫职业、精英比例、宠物和区域分布是方案示意；没有重建真实路径规划、战斗或建筑模板。',
    '精英只优先取本档蓝图区间上四分之一，不叠加额外伤害或生命倍率。',
    '职业权重按主题微调后归一抽样：农庄近战×1.4、步枪×0.8；工匠住宅不变；营地手枪×1.2；庄园手枪/步枪×1.1；堡垒步枪/霰弹枪×1.2。简单原版代理不作主题调制。',
    '每次生成只演示一个位置；expedition 仅参与新实例种子，不无限增加人数，也未自动增加战斗倍率。',
    '状态保存在返回的 JSON 对象中；刷新持久化需页面保存该对象，新建 session 会重置演示银币，不能代表游戏存款。',
    '重复死亡时将未回收资源累积到同一受保护尸体记录；这是防丢失的网页简化，不代表原版多尸体机制。',
    '尸体未回收时禁止结束；清空敌人与箱子不触发倒计时。任何新一轮基地都需要显式生成新实例。'
  ];
  var roleNames = ['melee','pistol','rifle','shotgun'];
  var roleWeights = [[60,25,10,5],[45,30,20,5],[35,30,25,10],[25,30,30,15],[20,25,35,20],[15,25,35,25],[10,25,40,25]];
  var roleThemeFactors = { original:[1,1,1,1],farm:[1.4,1,.8,1],workshop:[1,1,1,1],camp:[1,1.2,1,1],manor:[1,1.1,1.1,1],fort:[1,1,1.2,1.2] };
  var eliteChance = [0,.10,.15,.20,.25,.30,.35];

  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function freeze(value) {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.keys(value).forEach(function (key) { freeze(value[key]); });
      Object.freeze(value);
    }
    return value;
  }
  function integer(value, min, max, label) {
    if (!Number.isInteger(value) || value < min || value > max) throw new RangeError(label + ' 必须为 ' + min + '–' + max + ' 的整数');
    return value;
  }
  function hash(text) {
    var h = 2166136261;
    for (var i=0; i<text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h,16777619); }
    h ^= h >>> 16; h = Math.imul(h,0x85ebca6b); h ^= h >>> 13; h = Math.imul(h,0xc2b2ae35);
    return (h ^ h >>> 16) >>> 0;
  }
  function rng(seed, channel) {
    var state = hash(JSON.stringify([seed,channel]));
    return function () {
      state = (state + 0x6d2b79f5) >>> 0;
      var t = Math.imul(state ^ state >>> 15, state | 1);
      t ^= t + Math.imul(t ^ t >>> 7,t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function randInt(random, low, high) { return low + Math.floor(random() * (high-low+1)); }
  function weightedIndex(random, weights) {
    var total = weights.reduce(function (a,b) { return a+b; },0);
    var roll = random()*total;
    for (var i=0; i<weights.length-1; i++) { roll -= weights[i]; if (roll < 0) return i; }
    return weights.length-1;
  }
  // Largest-remainder integer allocation: both input and output total are exact.
  function allocate(total, weights, random) {
    var sum = weights.reduce(function (a,b) { return a+b; },0);
    var raw = weights.map(function (w) { return total*w/sum; });
    var values = raw.map(Math.floor);
    var order = raw.map(function (v,i) { return { i:i, remainder:v-values[i], tie:random() }; });
    order.sort(function (a,b) { return b.remainder-a.remainder || a.tie-b.tie || a.i-b.i; });
    var left = total-values.reduce(function (a,b) { return a+b; },0);
    for (var i=0; i<left; i++) values[order[i % order.length].i]++;
    return values;
  }
  function normalize(input) {
    var c = input || {};
    if (typeof c !== 'object' || Array.isArray(c)) throw new TypeError('配置必须为对象');
    var seed = c.seed === undefined ? 'westland-base' : c.seed;
    if (typeof seed !== 'string' || seed.length > 512) throw new RangeError('seed 必须为不超过 512 字符的字符串');
    var tier = integer(c.tier === undefined ? 0 : c.tier,0,6,'tier');
    var region = integer(c.region === undefined ? 1 : c.region,1,7,'region');
    var expedition = integer(c.expedition === undefined ? 1 : c.expedition,1,1000000,'expedition');
    var baseUnits = c.baseUnits === undefined ? 100 : c.baseUnits;
    if (typeof baseUnits !== 'number' || !Number.isFinite(baseUnits) || baseUnits < 0 || baseUnits > 1000000) throw new RangeError('baseUnits 必须为 0–1000000 的有限数字');
    var theme = c.theme === undefined ? 'random' : c.theme;
    if (theme !== 'random' && theme !== 'original' && !themes.some(function (t) { return t.id === theme; })) throw new RangeError('未知基地主题');
    return { tier:tier, region:region, expedition:expedition, seed:seed, baseUnits:baseUnits, theme:tier === 0 ? 'original' : theme };
  }
  function generate(input) {
    var c = normalize(input), tuning = tiers[c.tier];
    // Independently seeded channels: adding a guard cannot consume a loot draw.
    var key = JSON.stringify([c.seed,c.expedition]);
    var layoutRandom = rng(key,'layout'), lootRandom = rng(key,'loot');
    var guardRandom = rng(key,'guards'), petRandom = rng(key,'pets');
    var theme = c.theme === 'random' ? themes[weightedIndex(rng(key,'theme'),themes.map(function (t) { return t.weight; }))] :
      c.theme === 'original' ? original : themes.filter(function (t) { return t.id === c.theme; })[0];
    var exact = c.baseUnits*tuning.resource;
    // A tiny epsilon corrects representation of mathematically integral inputs.
    var floor = Math.floor(exact + 1e-9), remainder = Math.max(0,exact-floor);
    var total = floor + (lootRandom() < remainder ? 1 : 0);
    var categoryValues = allocate(total,theme.resourceMix,lootRandom), resourceByCategory = {};
    CATEGORY_KEYS.forEach(function (name,i) { resourceByCategory[name] = categoryValues[i]; });
    var boxCount = randInt(lootRandom,tuning.boxes[0],tuning.boxes[1]);
    // At least one illustrative box for each category, including zero-unit demos.
    var extraBoxes = allocate(boxCount-CATEGORY_KEYS.length,theme.resourceMix,lootRandom);
    var boxes = [];
    CATEGORY_KEYS.forEach(function (category,index) {
      var weights = Array.from({length:extraBoxes[index]+1},function () { return 0.75+lootRandom()*0.5; });
      var amounts = allocate(categoryValues[index],weights,lootRandom);
      amounts.forEach(function (units) { boxes.push({id:'box-'+(boxes.length+1),category:category,units:units,opened:false}); });
    });
    var count = c.tier === 0 ? (guardRandom() < .70 ? 1 : 0) : randInt(guardRandom,tuning.guards[0],tuning.guards[1]);
    var effectiveRoleWeights = roleWeights[c.tier].map(function (value,index) { return value*roleThemeFactors[theme.id][index]; });
    var roleTotals = { melee:0, pistol:0, rifle:0, shotgun:0 }, guards = [];
    for (var i=0; i<count; i++) {
      var role = roleNames[weightedIndex(guardRandom,effectiveRoleWeights)];
      var elite = guardRandom() < eliteChance[c.tier];
      var blueprintLow = elite ? tuning.blueprint[0]+Math.ceil((tuning.blueprint[1]-tuning.blueprint[0])*.75) : tuning.blueprint[0];
      var blueprint = c.tier === 0 ? null : randInt(guardRandom,blueprintLow,tuning.blueprint[1]);
      var durabilityPct = c.tier === 0 ? null : randInt(guardRandom,tuning.durabilityPct[0],tuning.durabilityPct[1]);
      guards.push({id:'guard-'+(i+1),role:role,elite:elite,blueprint:blueprint,durabilityPct:durabilityPct,
        zone:elite ? 'core' : ['yard','workshop','core'][weightedIndex(guardRandom,[45,35,20])],
        qualityIndex:c.tier === 0 ? null : weightedIndex(guardRandom,tuning.qualityWeights), originalEquipment:c.tier === 0});
      roleTotals[role]++;
    }
    var pets = [], petCount = randInt(petRandom,tuning.pets[0],tuning.pets[1]);
    for (var j=0; j<petCount; j++) pets.push({id:'pet-'+(j+1),kind:'guard_dog',name:'护卫犬（方案）',zone:j%2 ? 'core' : 'yard',tier:c.tier});
    var priceBase = c.region === 1 ? 100 : c.region === 2 ? 150 : 200;
    var fee = Math.ceil(priceBase*tuning.fee/50)*50;
    // Include normalized generation inputs, not later mutable session state.
    var id = 'base-'+hash(JSON.stringify([c.tier,c.region,c.seed,c.baseUnits,c.expedition,theme.id])).toString(16).padStart(8,'0');
    return {schemaVersion:1,proposalOnly:true,id:id,tier:c.tier,theme:clone(theme),seed:c.seed,expedition:c.expedition,
      region:c.region,baseUnits:c.baseUnits,rotation:randInt(layoutRandom,0,3)*90,layoutVariant:randInt(layoutRandom,1,3),
      fee:fee,priceBase:priceBase,blueprintRange:clone(tuning.blueprint),guards:guards,pets:pets,boxes:boxes,
      totalResource:total,resourceByCategory:resourceByCategory,roleTotals:roleTotals,roleWeights:effectiveRoleWeights,
      eliteCount:guards.filter(function (g) { return g.elite; }).length,
      notes:[c.tier === 0 ? '简单档为原版代理示意，并非精确原版模板。' : '基地强化为待实施方案，不是现有游戏行为。',
        '资源单位与箱数为设计演示；守卫装备不计入箱内资源总量。']};
  }

  function makeSession(base) {
    if (!base || typeof base.id !== 'string' || !Array.isArray(base.boxes) || !Array.isArray(base.guards) || !Array.isArray(base.pets)) throw new TypeError('必须传入 generate 返回的基地');
    return {schemaVersion:1,base:clone(base),phase:'hidden',corpse:{active:false,units:0,deaths:0},
      openedBoxIds:[],deadGuardIds:[],deadPetIds:[],inventoryUnits:0,recoveredUnits:0,visits:0,
      silver:10000,silverSpent:0,clearTimer:null,log:['新建单位置演示；银币 10000 仅属于本次 session。'],
      lastResult:{ok:true,message:'尚未揭示基地。'}};
  }
  function transition(session, input) {
    if (!session || !session.base || !Array.isArray(session.openedBoxIds) || !Array.isArray(session.deadGuardIds)) throw new TypeError('无效 session');
    var s = clone(session), a = typeof input === 'string' ? {type:input} : input || {};
    function result(ok,message,changed) {
      s.lastResult = {ok:ok,message:message};
      if (changed) { s.log.push(message); if (s.log.length > 120) s.log.splice(0,s.log.length-120); }
      return s;
    }
    if (a.type === 'reload') return result(true,'已重新载入同一座基地，探索进度与尸体保持不变。',false);
    if (s.phase === 'ended') {
      if (a.type === 'end') return s;
      return result(false,'本次基地已结束，请选择下一座基地。',false);
    }
    switch (a.type) {
      case 'reveal':
        if (s.phase !== 'hidden') return result(true,'本基地已经揭示，不重复扣费。',false);
        if (s.silver < s.base.fee) return result(false,'演示银币不足，未揭示且未扣费。',false);
        s.silver -= s.base.fee; s.silverSpent += s.base.fee; s.phase = 'available';
        return result(true,'已揭示基地，扣除演示银币 '+s.base.fee+'。',true);
      case 'enter':
        if (s.phase === 'inside') return result(true,'已经在基地内。',false);
        if (s.phase !== 'available' && s.phase !== 'dead') return result(false,'请先揭示基地。',false);
        s.phase = 'inside'; s.visits++;
        return result(true,'进入同一基地；已开箱、已死亡守卫及尸体记录不复原。',true);
      case 'loot': {
        if (s.phase !== 'inside') return result(false,'必须进入基地才能开箱。',false);
        var boxId = a.boxId || a.id;
        var box = s.base.boxes.find(function (b) { return boxId ? b.id === boxId : s.openedBoxIds.indexOf(b.id) === -1; });
        if (!box) return result(false,boxId ? '未找到这个箱子。' : '所有箱子都已领取。',false);
        if (s.openedBoxIds.indexOf(box.id) !== -1) return result(true,'箱子已经领取，不重复发放。',false);
        s.openedBoxIds.push(box.id); s.inventoryUnits += box.units; box.opened = true;
        return result(true,'领取 '+CATEGORY_NAMES[box.category]+' '+box.units+' 单位。',true);
      }
      case 'kill': {
        if (s.phase !== 'inside') return result(false,'必须进入基地才能演示击败守卫。',false);
        var guardId = a.guardId || a.id;
        var guard = s.base.guards.find(function (g) { return guardId ? g.id === guardId : s.deadGuardIds.indexOf(g.id) === -1; });
        if (!guard) return result(false,guardId ? '未找到这个守卫。' : '所有守卫均已击败。',false);
        if (s.deadGuardIds.indexOf(guard.id) !== -1) return result(true,'守卫已死亡，不重复结算。',false);
        s.deadGuardIds.push(guard.id);
        return result(true,'已击败一名守卫，再次进入时不会复活。本演示不额外计算装备掉落。',true);
      }
      case 'exit':
        if (s.phase !== 'inside') return result(false,'当前不在基地内。',false);
        s.phase = 'available';
        return result(true,'离开基地，保留同一实例及全部进度；不启动清空倒计时。',true);
      case 'die':
        if (s.phase !== 'inside') return result(false,'必须在基地内才能演示死亡。',false);
        s.corpse.active = true; s.corpse.units += s.inventoryUnits; s.corpse.deaths++;
        s.inventoryUnits = 0; s.phase = 'dead';
        return result(true,'角色死亡：尸体保护已启用，未回收前禁止结束；旧尸体资源不会被覆盖。',true);
      case 'recover':
        if (s.phase !== 'inside') return result(false,'需要重新进入基地回收尸体。',false);
        if (!s.corpse.active) return result(true,'没有待回收尸体，不重复领取。',false);
        s.inventoryUnits += s.corpse.units; s.recoveredUnits += s.corpse.units;
        s.corpse.units = 0; s.corpse.active = false;
        return result(true,'尸体已回收；重复点击不会再次获得资源。',true);
      case 'end':
        if (s.phase === 'inside') return result(false,'请先离开基地，再确认结束。',false);
        if (s.corpse.active) return result(false,'存在未回收尸体：禁止结束和刷新。',false);
        if (s.phase === 'hidden') return result(false,'尚未揭示基地，无需结束。',false);
        if (a.confirm !== true) return result(false,'需要二次确认：结束会放弃所有未领取内容。',false);
        s.phase = 'ended';
        return result(true,'已确认结束此实例；未领取内容放弃，已领取资源保留。可显式揭示下一场，无每日次数限制。',true);
      default: return result(false,'未知演示操作。',false);
    }
  }
  return freeze({version:'1.0.1',tiers:tiers,themes:themes,originalTheme:original,categories:CATEGORY_KEYS,roleNames:roleNames,roleWeights:roleWeights,
    categoryNames:CATEGORY_NAMES,ASSUMPTIONS:ASSUMPTIONS,generate:generate,makeSession:makeSession,transition:transition});
});
