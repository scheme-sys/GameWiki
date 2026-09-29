/* Westland loadout laboratory: deterministic, bounded combat approximation.
 * Formula provenance and explicit model boundaries: FORMULAS.md. */
(function (scope) {
  'use strict';
  const VERSION = '1.0.0';
  const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));
  const finite = (n, fallback = 0) => typeof n === 'number' && Number.isFinite(n) ? n : fallback;
  const positive = (n, fallback = 0) => Math.max(0, finite(n, fallback));
  const copy = value => JSON.parse(JSON.stringify(value));
  const unique = values => [...new Set(values)];
  const TIERS = Object.freeze([
    [1, 1, 1, 1, 1], [1.35, 1.2, 1.1, 1.05, 1.02],
    [1.9, 1.55, 1.25, 1.12, 1.04], [3, 2.2, 1.5, 1.2, 1.06],
    [5, 3.2, 1.85, 1.3, 1.08], [8, 4.8, 2.3, 1.45, 1.1],
    [12, 6.5, 2.8, 1.6, 1.12]
  ].map(Object.freeze));
  const RULES = Object.freeze({ armorConstant: 100, dexterityExponent: .86,
    dexterityScale: .01, baseCriticalBonus: 1, maxAttackSpeed: 100,
    maxEvents: 100000, maxRecordedEvents: 1200, maxTimeline: 2400,
    maxTime: 600, maxValue: 1e12 });
  const DEFAULT_WARNINGS = Object.freeze([
    '这是可复现的基础站桩对战模型，不是游戏客户端：不模拟动物特殊招式、嘲讽、格挡动作、绕行、地形、潜行、宠物或目标切换。',
    '动物使用配置中的第一套普通攻击；动作命中点用半个攻击周期近似，同一时刻的双方攻击同时结算。',
    '耐久按实验设置的每次攻击损耗计算（包含被闪避）；护甲不在战斗中损耗，武器破损后停止攻击、不自动切空手。',
    '伤害保留浮点数用于比较，未逐阶段复刻客户端的整数舍入；恢复品按阈值与冷却即时治疗，不包含使用动画或持续回复过程。'
  ]);
  const ASSUMPTIONS = Object.freeze([
    '已核对原始公式：力量每点增加 1 主伤害；体力加入普通抗性，不增加生命。普通抗性减伤率为 R/(100+R)。',
    '生命上限 = 基础生命 × (1+生命比例加成) + 装备、食物及技能的固定生命加成；装备固定生命不再次乘比例。',
    '攻击次数/秒 = (武器基础次数/秒 + 灵巧^0.86 × 0.01) × 攻速倍率；数据表未包含武器忽略力量/灵巧的标志，默认正常生效，遇到特殊武器须以游戏读数校准。',
    '头、上衣、腿、鞋各承担 25% 主伤害，再按本件防护/(100+本件防护) 吸收；额外普通抗性独立处理。配饰和技能抗性与四件护甲抗性不重复计算。',
    '暴击额外增加 (1+暴击伤害加成) 倍主伤害；穿刺为独立伤害通道，不重复暴击、不被普通护甲阻挡，只受穿刺抗性影响。',
    '食物加成在持续时间结束时移除；上限下降会限制当前生命，但不凭空恢复生命。精神保留面板，不模拟驯服与敌对条件。',
    '动物原型中的闪避/嘲讽等天赋、特殊攻击、动作分支及按攻击者等阶触发的情境增伤未复刻；不能把模拟结果视作客户端实测。',
    ...DEFAULT_WARNINGS
  ]);
  const PERCENT_KEYS = ['evasion', 'critical_hit_chance', 'firearm_resistance',
    'fire_resistance', 'penetrating_damage_resistance', 'damage_resistance',
    'animal_resistance', 'steelarm_resistance'];

  function sumStats(...sources) {
    const out = Object.create(null);
    for (const source of sources) for (const [key, value] of Object.entries(source || {})) {
      if (typeof value === 'number' && Number.isFinite(value)) out[key] = (out[key] || 0) + value;
    }
    return out;
  }
  function roleOf(type) {
    const name = String(type || 'unarmed');
    if (/rifle|pistol|shotgun|revolver|firearm|musket|gun/.test(name)) return 'firearm';
    if (/bow|crossbow/.test(name)) return 'bow';
    return 'melee';
  }
  function typedModifier(stats, type) {
    const role = roleOf(type);
    let result = 1 + finite(stats.damage_modifier);
    result *= 1 + finite(stats[role === 'firearm' ? 'firearm_damage_modifier' : role === 'bow' ? 'bow_damage_modifier' : 'melee_damage_modifier']);
    if (role === 'firearm') {
      const key = /shotgun/.test(type) ? 'shotgun_damage_modifier' : /pistol|revolver/.test(type) ? 'pistol_damage_modifier' : 'rifle_damage_modifier';
      result *= 1 + finite(stats[key]);
    } else if (role === 'melee') {
      if (/mace|mallet|club|hammer|blunt/.test(type)) result *= 1 + finite(stats.blunt_damage_modifier);
      if (/knife|sword|saber|axe|spear|edged/.test(type)) result *= 1 + finite(stats.edged_damage_modifier);
    }
    return Math.max(0, result);
  }
  function deriveCharacter(input = {}) {
    const base = input.base || {}, gear = input.gearTotals || {}, food = input.foodStats || {}, skill = input.skillStats || {};
    const extra = sumStats(gear, food, skill, input.modifiers), all = sumStats(base, extra);
    const weapon = input.weapon || {}, type = String(weapon.sub || weapon.type || 'unarmed');
    const warnings = [];
    // Stamina is resistance, not HP; flat HP additions occur after health_modifier.
    const healthBase = positive(base.health, 200) + positive(base.levelHealthIncrement);
    const flatHealth = positive(gear.health_increment) + positive(food.health) + positive(food.health_increment) +
      positive(skill.health) + positive(skill.health_increment) + positive(input.modifiers?.health_increment);
    const health = clamp(Math.trunc(healthBase * Math.max(0, 1 + finite(all.health_modifier)) + flatHealth), 1, RULES.maxValue);
    const hasWeapon = input.hasWeapon !== false && type !== 'unarmed';
    const strength = positive(all.strength), dexterity = positive(all.dexterity), stamina = positive(all.stamina);
    const main = (hasWeapon ? positive(gear.damage) : positive(base.damage, 10)) +
      positive(food.damage) + positive(skill.damage) + positive(input.modifiers?.damage) +
      (weapon.ignoreStrength ? 0 : strength) + (roleOf(type) === 'melee' ? positive(all.melee_damage_increment) : 0);
    const naturalAps = positive(weapon.aps, hasWeapon ? 1 : 1.25);
    const dexBonus = weapon.ignoreDexterity ? 0 : Math.pow(dexterity, RULES.dexterityExponent) * RULES.dexterityScale;
    const apsRaw = (naturalAps + dexBonus) * Math.max(0, finite(base.attack_speed_modifier, 1)) *
      Math.max(0, 1 + finite(extra.attack_speed_modifier));
    if (apsRaw > RULES.maxAttackSpeed) warnings.push('合成攻速超过本模拟安全上限，按每秒 100 次处理。');
    const result = { ...all, kind: 'player', health,
      damage: clamp(main * typedModifier(all, type), 0, RULES.maxValue),
      penetrating_damage: positive(all.penetrating_damage, positive(all.penetration)),
      armor: positive(all.armor), resistance: positive(all.resistance) + stamina,
      strength, stamina, dexterity, wisdom: positive(all.wisdom),
      attackSpeed: clamp(apsRaw, .001, RULES.maxAttackSpeed),
      range: positive(weapon.range, 1) * (1 + positive(all.attack_range_modifier) +
        (roleOf(type) === 'melee' ? positive(all.attack_range_melee_modifier) : 0)),
      moveSpeed: positive(base.moveSpeed, 4) * (1 + finite(extra.move_speed_modifier)),
      weaponType: type, critical_modifier: positive(all.critical_modifier),
      currentDurability: weapon.currentDurability === Infinity ? Infinity : positive(weapon.currentDurability, Infinity),
      maxDurability: weapon.maxDurability === Infinity ? Infinity : positive(weapon.maxDurability, Infinity),
      hasWeapon, armorSlots: Array.isArray(input.armorSlots) ? copy(input.armorSlots) : null,
      bodyArmor: positive(base.armor), warnings,
      _source: { base: { ...base }, gearTotals: { ...gear }, foodStats: { ...food }, skillStats: { ...skill },
        modifiers: { ...(input.modifiers || {}) }, weapon: { ...weapon }, hasWeapon: input.hasWeapon,
        armorSlots: Array.isArray(input.armorSlots) ? copy(input.armorSlots) : null }
    };
    for (const key of PERCENT_KEYS) result[key] = clamp(finite(result[key]), 0, 1);
    if (result.armorSlots) {
      result.bodyArmor = Math.max(0, positive(all.armor) - result.armorSlots.slice(0, 4).reduce((sum, slot) => sum + positive(slot.armor), 0));
      for (const key of ['firearm_resistance', 'fire_resistance']) {
        const pieces = result.armorSlots.slice(0, 4).reduce((sum, slot) => sum + finite(slot[key]), 0);
        result['_global_' + key] = clamp(finite(all[key]) - pieces, 0, 1);
      }
    }
    result.criticalMultiplier = 1 + RULES.baseCriticalBonus + result.critical_modifier;
    result.effectivePhysicalDps = result.damage * result.attackSpeed *
      (1 + result.critical_hit_chance * (result.criticalMultiplier - 1));
    result.effectivePiercingDps = result.penetrating_damage * result.attackSpeed;
    if (positive(all.dot_amount)) warnings.push('持续伤害词条尚未确认触发/刷新规则，只展示、不计入本模拟。');
    if (positive(all.slow_modifier) || positive(all.slow_time)) warnings.push('减速词条只展示，不在站桩模型中计入控制收益。');
    if (positive(all.wisdom)) warnings.push('精神数值保留显示；本次强制一对一战斗不模拟动物驯服或中立条件。');
    return result;
  }
  function transformAnimal(base = {}, tier = 0, layer = 0) {
    const d = clamp(Math.trunc(finite(tier)), 0, 6), q = TIERS[d];
    const actualLayer = d === 6 ? clamp(Math.trunc(finite(layer)), 0, 10000) : 0;
    const originalHealth = positive(base.health, 100);
    // Native endless growth applies to body HP, NOT ordinary animal weapon damage.
    const startingHealth = Math.max(originalHealth, Math.min(1e7, originalHealth * q[0]));
    const health = actualLayer ? Math.max(startingHealth, Math.min(1e7, startingHealth * Math.pow(1.12, actualLayer))) : startingHealth;
    return { ...base, kind: 'animal', difficulty: d, endlessLayer: actualLayer,
      health, damage: positive(base.damage) * q[1],
      penetrating_damage: positive(base.penetrating_damage, positive(base.penetration)),
      armor: Math.max(positive(base.armor), Math.min(1e7, positive(base.armor) * q[2])),
      resistance: Math.max(positive(base.resistance), Math.min(1e7, positive(base.resistance) * q[2])) + positive(base.stamina),
      attackSpeed: clamp(positive(base.attackSpeed, 1) * q[3], .001, RULES.maxAttackSpeed),
      moveSpeed: positive(base.moveSpeed, 4) * q[4], range: positive(base.range, 1),
      weaponType: 'animal_melee', currentDurability: Infinity, maxDurability: Infinity,
      critical_hit_chance: clamp(finite(base.critical_hit_chance), 0, 1),
      critical_modifier: positive(base.critical_modifier), evasion: clamp(finite(base.evasion), 0, 1),
      warnings: [...(base.warnings || [])] };
  }
  function absorption(points, constant = RULES.armorConstant) {
    const p = positive(points), k = Math.max(.001, finite(constant, RULES.armorConstant));
    return p / (k + p);
  }
  function normalizeActor(source, kind) {
    const result = { ...source, kind: source.kind || kind };
    result.health = clamp(positive(source.health, 1), 1, RULES.maxValue);
    result.damage = clamp(positive(source.damage), 0, RULES.maxValue);
    result.penetrating_damage = clamp(positive(source.penetrating_damage, positive(source.penetration)), 0, RULES.maxValue);
    result.attackSpeed = clamp(positive(source.attackSpeed, 1), .001, RULES.maxAttackSpeed);
    result.range = clamp(positive(source.range, 1), 0, 1e4);
    result.moveSpeed = clamp(positive(source.moveSpeed, 4), 0, 1e4);
    for (const key of PERCENT_KEYS) result[key] = clamp(finite(source[key]), 0, 1);
    return result;
  }
  function createRng(seed = 1602026) {
    let state = finite(seed, 1602026) >>> 0;
    return function () {
      state += 0x6D2B79F5;
      let t = state;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function resolveHit(attacker, defender, random = Math.random, options = {}) {
    const a = normalizeActor(attacker, 'player'), d = normalizeActor(defender, 'animal');
    const draw = typeof random === 'function' ? random : createRng(finite(random));
    const miss = draw() < d.evasion;
    const critical = !miss && draw() < a.critical_hit_chance;
    if (miss) return { miss: true, critical: false, physical: 0, piercing: 0, total: 0, absorbed: 0, raw: 0 };
    const againstAnimal = d.kind === 'animal' ? 1 + finite(a.animal_damage_modifier) : 1;
    const bonus = critical ? 1 + RULES.baseCriticalBonus + positive(a.critical_modifier) : 1;
    const rawPhysical = a.damage * bonus * Math.max(0, againstAnimal);
    // Penetrating damage is an independent channel, not an armor-reduction percentage.
    const rawPiercing = a.penetrating_damage * Math.max(0, againstAnimal);
    const constant = finite(options.armorConstant, RULES.armorConstant), type = roleOf(a.weaponType);
    let physical = rawPhysical;
    if (Array.isArray(d.armorSlots)) {
      let fractions = 0;
      for (let i = 0; i < 4; ++i) {
        const slot = d.armorSlots[i] || {};
        let part = .25 * rawPhysical;
        if (type === 'firearm') part *= 1 - clamp(finite(slot.firearm_resistance), 0, 1);
        if (a.damageType === 'fire') part *= 1 - clamp(finite(slot.fire_resistance), 0, 1);
        fractions += part * (1 - absorption(slot.armor, constant));
      }
      physical = fractions * (1 - absorption(d.bodyArmor, constant));
    } else physical *= 1 - absorption(d.armor, constant);
    physical *= 1 - absorption(d.resistance, constant);
    physical *= 1 - d.damage_resistance;
    if (type === 'firearm') physical *= 1 - finite(d._global_firearm_resistance, d.firearm_resistance);
    if (a.damageType === 'fire') physical *= 1 - finite(d._global_fire_resistance, d.fire_resistance);
    if (a.kind === 'animal') physical *= 1 - d.animal_resistance;
    if ((type === 'melee' || type === 'bow') && a.kind !== 'animal') physical *= 1 - d.steelarm_resistance;
    const piercing = rawPiercing * (1 - d.penetrating_damage_resistance);
    const total = Math.max(0, physical + piercing);
    return { miss: false, critical, physical, piercing, total,
      absorbed: Math.max(0, rawPhysical + rawPiercing - total), raw: rawPhysical + rawPiercing };
  }
  function emptyStats(durability) {
    return { attacks: 0, hits: 0, criticals: 0, misses: 0, totalDamage: 0, physicalDamage: 0,
      piercingDamage: 0, rawDamage: 0, absorbedDamage: 0, overkill: 0, healing: 0,
      healsUsed: 0, weaponDurability: durability, damageTaken: 0 };
  }
  function simulate(playerInput, animalInput, options = {}) {
    let player = normalizeActor(playerInput || {}, 'player');
    const enemy = normalizeActor(animalInput || {}, 'animal');
    const seed = finite(options.seed, 1602026) >>> 0, random = createRng(seed);
    const maxTime = clamp(finite(options.maxTime, 120), .001, RULES.maxTime);
    const eventLimit = clamp(Math.trunc(finite(options.maxEvents, RULES.maxEvents)), 1, RULES.maxEvents);
    const wear = clamp(positive(options.wearPerAttack, 1), 0, 1e6);
    let durability = player.currentDurability === Infinity || player.currentDurability == null ? Infinity : positive(player.currentDurability);
    const playerStats = emptyStats(durability), enemyStats = emptyStats(Infinity);
    const events = [], timeline = [], record = options.recordEvents !== false;
    const warnings = [...DEFAULT_WARNINGS, ...(player.warnings || []), ...(enemy.warnings || [])];
    if (!Array.isArray(player.armorSlots) && positive(player.armor)) warnings.push('当前未提供分件护甲，采用总防护点数近似；分件装备模式更接近原版。');
    if (positive(enemy.tier) >= 3) warnings.push('未额外启用原版按动物等阶判定的情境增伤：其调用条件尚未完整复刻，结果不代表游戏实测。');
    if (positive(player.dot_amount) || positive(enemy.dot_amount)) warnings.push('持续伤害与特殊状态不计入本次结算。');
    let playerHp = player.health, enemyHp = enemy.health, time = 0, count = 0, truncated = false;
    let winner = 'timeout', reason = '达到时间上限';
    const startDistance = clamp(positive(options.startDistance), 0, 1e4);
    // Player stands still. Enemy closes towards the player until melee contact.
    const reach = range => Math.max(0, startDistance - range) / Math.max(.001, enemy.moveSpeed);
    let nextPlayer = durability > 0 ? reach(player.range) + .5 / player.attackSpeed : Infinity;
    let nextEnemy = reach(enemy.range) + .5 / enemy.attackSpeed;
    const healing = options.healing || {};
    const healAmount = clamp(positive(healing.amount, positive(healing.heal)), 0, RULES.maxValue);
    let healCount = clamp(Math.trunc(positive(healing.count)), 0, 999);
    const healThreshold = clamp(finite(healing.threshold, .4), .001, .999);
    const healCooldown = clamp(positive(healing.cooldown, 10), .1, 600);
    let nextHealAllowed = 0;
    const foodDuration = positive(playerInput?.foodDuration);
    let nextFoodExpiry = foodDuration > 0 && playerInput?._source && Object.keys(playerInput._source.foodStats || {}).length ? foodDuration : Infinity;
    if (playerInput?.foodStats && Object.keys(playerInput.foodStats).length && !playerInput?._source) warnings.push('无法分离食物贡献，食物属性按全场有效近似。');
    function emit(type, actor, extra = {}) {
      const state = { time, playerHp, enemyHp };
      if (record && events.length < RULES.maxRecordedEvents) events.push({ ...state, type, actor, ...extra });
      else if (record) truncated = true;
      if (record && timeline.length < RULES.maxTimeline) timeline.push(state);
      else if (record && timeline.length) timeline[timeline.length - 1] = state;
    }
    emit('start', '', { message: '模拟开始' });
    if (startDistance > 0) emit('approach', 'enemy', { message: '起始距离 ' + startDistance + '；动物直线接近，角色原地攻击。' });
    if (durability === 0) { nextPlayer = Infinity; emit('break', 'player', { message: '初始武器耐久为 0，角色停止攻击。' }); }
    while (count < eventLimit) {
      const healingReady = healCount > 0 && healAmount > 0 && playerHp > 0 && playerHp <= player.health * healThreshold;
      const nextHeal = healingReady ? Math.max(time, nextHealAllowed) : Infinity;
      const next = Math.min(nextPlayer, nextEnemy, nextHeal, nextFoodExpiry);
      if (!Number.isFinite(next) || next > maxTime) { time = maxTime; break; }
      time = next;
      ++count;
      // Expiring maximum-health food clamps current HP; it never restores health.
      if (nextFoodExpiry <= time + 1e-9) {
        const previous = player;
        player = normalizeActor(deriveCharacter({ ...playerInput._source, foodStats: {} }), 'player');
        playerHp = Math.min(playerHp, player.health);
        if (Number.isFinite(nextPlayer) && nextPlayer > time) nextPlayer = time + (nextPlayer - time) * previous.attackSpeed / player.attackSpeed;
        nextFoodExpiry = Infinity;
        emit('food_expired', 'player', { message: '食物持续时间结束，移除食物提供的属性。' });
      }
      // Healing is an explicit instantaneous model action, not a resurrection.
      if (nextHeal <= time + 1e-9 && playerHp > 0 && healCount > 0) {
        const amount = Math.min(healAmount, Math.max(0, player.health - playerHp));
        if (amount > 0) {
          playerHp += amount; playerStats.healing += amount; ++playerStats.healsUsed; --healCount;
          nextHealAllowed = time + healCooldown;
          emit('heal', 'player', { healing: amount, message: '恢复 ' + amount.toFixed(2) + ' 生命' });
        } else nextHealAllowed = time + healCooldown;
      }
      const playerDue = nextPlayer <= time + 1e-9 && playerHp > 0 && durability > 0;
      const enemyDue = nextEnemy <= time + 1e-9 && enemyHp > 0;
      // Resolve both against pre-hit HP: no arbitrary player-first advantage on ties.
      const playerHit = playerDue ? resolveHit(player, enemy, random, options) : null;
      const enemyHit = enemyDue ? resolveHit(enemy, player, random, options) : null;
      function applyHit(hit, stats, targetHp) {
        if (!hit) return 0;
        ++stats.attacks;
        if (hit.miss) { ++stats.misses; return 0; }
        ++stats.hits;
        if (hit.critical) ++stats.criticals;
        const effective = Math.min(targetHp, hit.total), ratio = hit.total ? effective / hit.total : 0;
        stats.physicalDamage += hit.physical * ratio; stats.piercingDamage += hit.piercing * ratio;
        stats.totalDamage += effective; stats.rawDamage += hit.raw; stats.absorbedDamage += hit.absorbed;
        stats.overkill += hit.total - effective;
        return effective;
      }
      const pDamage = applyHit(playerHit, playerStats, enemyHp), eDamage = applyHit(enemyHit, enemyStats, playerHp);
      enemyHp = Math.max(0, enemyHp - pDamage); playerHp = Math.max(0, playerHp - eDamage);
      enemyStats.damageTaken += pDamage; playerStats.damageTaken += eDamage;
      if (playerDue) {
        nextPlayer += 1 / player.attackSpeed;
        if (durability !== Infinity) durability = Math.max(0, durability - wear);
        playerStats.weaponDurability = durability;
        emit(playerHit.miss ? 'miss' : playerHit.critical ? 'critical' : 'hit', 'player', { damage: pDamage, critical: playerHit.critical, physical: playerHit.physical, piercing: playerHit.piercing });
        if (durability === 0) { nextPlayer = Infinity; emit('break', 'player', { message: '武器耐久耗尽，停止攻击。' }); }
      }
      if (enemyDue) { nextEnemy += 1 / enemy.attackSpeed; emit(enemyHit.miss ? 'miss' : enemyHit.critical ? 'critical' : 'hit', 'enemy', { damage: eDamage, critical: enemyHit.critical, physical: enemyHit.physical, piercing: enemyHit.piercing }); }
      if (playerHp <= 0 || enemyHp <= 0) {
        winner = playerHp <= 0 && enemyHp <= 0 ? 'draw' : enemyHp <= 0 ? 'player' : 'enemy';
        reason = winner === 'draw' ? '同一时刻双方倒下' : winner === 'player' ? '动物生命归零' : '角色生命归零';
        break;
      }
    }
    if (count >= eventLimit && playerHp > 0 && enemyHp > 0) { winner = 'event_limit'; reason = '达到安全事件上限'; warnings.push('达到安全事件上限，未将未决对战当作胜利。'); }
    if (truncated) warnings.push('事件明细超过 1200 条，后续明细省略；累计统计仍包含全部结算。');
    emit('end', '', { message: reason });
    return { version: VERSION, modelOnly: true, seed, winner, reason, duration: time,
      playerHp, enemyHp, player: playerStats, enemy: enemyStats, events, timeline,
      eventCount: count, warnings: unique(warnings) };
  }
  function summarize(results) {
    const list = Array.isArray(results) ? results : [], n = list.length;
    const wins = list.filter(x => x.winner === 'player').length, losses = list.filter(x => x.winner === 'enemy').length;
    const average = key => n ? list.reduce((total, row) => total + finite(row[key]), 0) / n : 0;
    return { count: n, wins, losses, unresolved: n - wins - losses, winRate: n ? wins / n : 0,
      averageDuration: average('duration'), averagePlayerHp: average('playerHp'), averageEnemyHp: average('enemyHp') };
  }
  // Batch helper deliberately stays small. UI should invoke simulate in cancellable chunks.
  function simulateBatch(player, animal, options = {}) {
    const runs = clamp(Math.trunc(positive(options.runs, 1)), 1, 500), seed = finite(options.seed, 1602026) >>> 0;
    const results = [];
    for (let i = 0; i < runs; ++i) results.push(simulate(player, animal, { ...options,
      seed: (seed + Math.imul(i, 2654435761)) >>> 0, recordEvents: i === 0 && options.recordEvents !== false }));
    return { results, ...summarize(results) };
  }
  const api = Object.freeze({ VERSION, RULES, TIERS, ASSUMPTIONS, deriveCharacter, transformAnimal,
    absorption, createRng, resolveHit, simulate, simulateBatch, summarize, roleOf });
  scope.WestlandBattle = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : window);
