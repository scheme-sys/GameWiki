(function () {
  'use strict';
  var D = window.BaseDesign;
  if (!D) return;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (value) { return String(value == null ? '' : value).replace(/[&<>"']/g,function (c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); };
  var clone = function (value) { return JSON.parse(JSON.stringify(value)); };
  var fmt = function (n) { return Number(n).toLocaleString('zh-CN',{maximumFractionDigits:2}); };
  var range = function (r) { return r[0] === r[1] ? String(r[0]) : r[0]+'–'+r[1]; };
  var KEY = 'westland-base-design-demo-v1', THEME_KEY = 'westland-base-design-reading-theme';
  var roleNames = {melee:'近战守卫',pistol:'手枪守卫',rifle:'长枪守卫',shotgun:'霰弹枪守卫'};
  var roleShort = {melee:'近战',pistol:'手枪',rifle:'长枪',shotgun:'霰弹枪'};
  var roleColors = {melee:'#ab7940',pistol:'#548575',rifle:'#6078a1',shotgun:'#ae6359'};
  var zoneNames = {yard:'外围院落',workshop:'生产与仓储区',core:'核心保护区'};
  var categoryColors = {food:'var(--food)',raw:'var(--raw)',processed:'var(--processed)',parts:'var(--parts)',combat:'var(--combat)'};
  var phaseNames = {hidden:'未购买',available:'已揭露／图外',inside:'基地内',dead:'死亡待返回',ended:'已结束'};
  var themeEnglish = {farm:'FARMSTEAD',workshop:'WORKSHOP',camp:'ARMED CAMP',manor:'COUNTRY ESTATE',fort:'BANDIT FORT'};
  var tiers = D.tiers, tier = 2, settings = null, preview = null, session = null, sequence = 0, storageOK = true;
  var selectedEntity = null, generationError = false;
  function text(id,value) { $(id).textContent = String(value); }
  function storageSet(key,value) {
    try { window.localStorage.setItem(key,value); return true; }
    catch (_) { storageOK = false; return false; }
  }
  function storageGet(key) { try { return window.localStorage.getItem(key); } catch (_) { storageOK=false; return null; } }
  function storageStatus() {
    text('storage-status',storageOK ? '仅保存网页演示进度' : '浏览器禁用存储 · 本次页面仍可演示');
  }
  function persist() {
    if (settings && session) storageSet(KEY,JSON.stringify({version:1,settings:settings,session:session,sequence:sequence}));
    storageStatus();
  }
  function applyTheme(mode) {
    var dark = mode === 'dark';
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    $('theme-toggle').setAttribute('aria-pressed',String(dark));
    $('theme-toggle').setAttribute('aria-label',dark ? '切换到白天主题' : '切换到黑夜主题');
    text('theme-label',dark ? '白天阅读' : '黑夜阅读');
    storageSet(THEME_KEY,dark ? 'dark' : 'light');
    storageStatus();
  }
  function readSettings() {
    var raw = $('base-units').value.trim(), units = Number(raw), seed = $('seed-input').value.trim();
    if (!raw || !Number.isInteger(units) || units < 10 || units > 10000) throw new Error('基础物资预算请输入 10～10000 之间的整数。');
    if (!seed || seed.length > 64) throw new Error('随机种子请输入 1～64 个字符。');
    return {tier:tier,theme:tier===0 ? 'original' : $('theme-select').value,region:Number($('region-select').value),seed:seed,baseUnits:units,expedition:1};
  }
  function syncControls(c) {
    tier=c.tier; $('theme-select').value=c.theme==='original' ? 'random' : c.theme;
    $('region-select').value=String(c.region); $('base-units').value=String(c.baseUnits); $('seed-input').value=c.seed;
  }
  function renderTabs() {
    $('tier-tabs').innerHTML = tiers.map(function (t,i) {
      return '<button type="button" class="tier-tab" data-tier="'+i+'" aria-pressed="'+(tier===i)+'"><small>0'+(i+1)+' / '+(i===0?'ORIGINAL':'DEFENCE')+'</small><span>'+esc(t.name)+'</span></button>';
    }).join('');
    $('theme-select').disabled=tier===0;
  }
  function updatePreview() {
    try {
      var next = readSettings(), b = D.generate(next);
      settings=next; preview=b; selectedEntity=null; generationError=false;
      $('input-error').hidden=true; $('load-session').disabled=false;
      renderPreview(); persist(); return true;
    } catch (error) {
      generationError=true; $('input-error').hidden=false; text('input-error',error.message);
      $('load-session').disabled=true; return false;
    }
  }
  function renderPreview() {
    renderTabs();
    var b=preview,t=tiers[b.tier];
    text('selected-number','0'+(b.tier+1)); text('selected-name',t.name); text('selected-theme',b.theme.name);
    text('map-title',b.theme.name); text('map-tag','变体 '+b.layoutVariant+' · 旋转 '+b.rotation+'°');
    text('metric-resource','×'+t.resource); text('metric-resource-total',fmt(b.baseUnits)+' → '+fmt(b.totalResource)+' 示意单位');
    text('metric-guards',b.guards.length); text('metric-pets','另有 '+b.pets.length+' 只宠物 · 全基地 '+(b.guards.length+b.pets.length)+' 角色');
    text('metric-fee',fmt(b.fee)); text('metric-blueprint',b.tier===0 ? '原版保留' : range(t.blueprint));
    text('elite-count',b.eliteCount+' 名精英');
    $('role-summary').innerHTML=Object.keys(roleShort).map(function (r) { return '<div class="role-cell"><strong>'+b.roleTotals[r]+'</strong><span>'+roleShort[r]+'</span></div>'; }).join('');
    text('preview-hint',b.tier===0 ? '简单档保留原版内容；本预览只提供代理草图。无限揭露便利规则独立生效。' : '情报费 = 区域基价 '+b.priceBase+' × '+t.fee+'，向上取整至 50。切换这里只更新草图，不改变已载入的保存演示。');
    renderMap(); renderResources(); renderTierTable(); renderTuning(); renderThemeCards();
    text('entity-title','点击地图里的守卫或箱子');
    text('entity-detail','这座基地的主题与难度已经确定。点击守卫或箱子，查看对应的防守与物资信息。');
  }
  function buildings(b) {
    var layouts = [
      {core:[222,98,194,155],workshop:[92,292,170,155],store:[390,306,164,142],living:[86,107,105,124],kennel:[454,108,96,123]},
      {core:[352,95,192,154],workshop:[92,105,190,144],store:[378,342,165,129],living:[94,343,142,123],kennel:[470,271,68,53]},
      {core:[203,332,226,140],workshop:[94,107,171,145],store:[357,107,183,145],living:[94,300,78,142],kennel:[469,323,69,116]}
    ];
    var l=layouts[(b.layoutVariant-1)%3], names={
      farm:{core:'粮食主仓',workshop:'农具工棚',store:'食物储藏',living:'居住小屋',kennel:'畜栏'},
      workshop:{core:'成品仓库',workshop:'加工工坊',store:'补给库房',living:'工匠住宅',kennel:'杂物棚'},
      camp:{core:'军械仓库',workshop:'维护工棚',store:'口粮仓库',living:'营房',kennel:'岗亭'},
      manor:{core:'庄园主楼',workshop:'后勤工坊',store:'厨房库房',living:'客舍',kennel:'门房'},
      fort:{core:'核心军械库',workshop:'维修工坊',store:'补给仓库',living:'兵营',kennel:'哨所'},
      original:{core:'核心建筑',workshop:'工作区域',store:'储物区域',living:'住宅',kennel:'小屋'}
    }[b.theme.id] || {};
    return Object.keys(l).map(function (key) { return {key:key,x:l[key][0],y:l[key][1],w:l[key][2],h:l[key][3],name:names[key]||key}; });
  }
  function svgText(x,y,label,size,color,rotation) {
    return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-size="'+(size||11)+'" fill="'+(color||'var(--muted)')+'"'+(rotation?' transform="rotate('+(-rotation)+' '+x+' '+y+')"':'')+'>'+esc(label)+'</text>';
  }
  function renderMap() {
    if (!preview) return;
    var b=preview, rooms=buildings(b), roomMap={}, points={}, used=[], perRoom={}, occupied=[];
    rooms.forEach(function (r) {roomMap[r.key]=r;});
    function remember(p) { occupied.push(p); return p; }
    function clear(p) { return !occupied.some(function (q) { return Math.hypot(q.x-p.x,q.y-p.y)<19; }); }
    var categoryRoom={food:'store',raw:'workshop',processed:'workshop',parts:'living',combat:'core'};
    b.boxes.forEach(function (box) {
      var key=categoryRoom[box.category],r=roomMap[key],i=perRoom[key]||0,cols=Math.max(2,Math.floor((r.w-32)/25));
      perRoom[key]=i+1;
      points[box.id]=remember({x:r.x+20+(i%cols)*25,y:r.y+42+Math.floor(i/cols)*24});
    });
    function guardPoint(zone) {
      var candidates=[],r=roomMap[zone==='workshop'?'workshop':'core'];
      if(zone!=='yard') {
        for(var y=r.y+85;y<r.y+r.h-12;y+=25)for(var x=r.x+18;x<r.x+r.w-13;x+=25)candidates.push({x:x,y:y});
      }
      for(var gy=501;gy<=551;gy+=25)for(var gx=98;gx<=548;gx+=25)candidates.push({x:gx,y:gy});
      var point=candidates.find(clear)||{x:320,y:285};
      return remember(point);
    }
    b.guards.forEach(function (g) {points[g.id]=guardPoint(g.zone);});
    b.pets.forEach(function (pet,i) {
      var p={x:115+i*30,y:476};
      if(!clear(p))p=guardPoint('yard');else remember(p);
      points[pet.id]=p;
    });
    var svg=['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" role="img" aria-labelledby="blueprint-title blueprint-desc">',
      '<title id="blueprint-title">'+esc(b.theme.name+' · '+tiers[b.tier].name+'部署草图')+'</title>',
      '<desc id="blueprint-desc">参数示意，不是游戏截图。'+b.guards.length+'个人类守卫、'+b.pets.length+'只宠物和'+b.boxes.length+'只资源箱。</desc>',
      '<defs><pattern id="plan-grid" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0V25" fill="none" stroke="var(--wall)" opacity=".12" stroke-width=".7"/></pattern><pattern id="field-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><path d="M0 0V8" stroke="var(--green)" stroke-width="1" opacity=".2"/></pattern></defs>',
      '<rect width="640" height="640" fill="var(--map-bg)"/><rect x="24" y="24" width="592" height="592" fill="url(#plan-grid)" stroke="var(--wall)" stroke-width=".6" opacity=".8"/>',
      '<path d="M595 41V78M589 51L595 41L601 51" fill="none" stroke="var(--wall)" stroke-width="1.5"/>',svgText(595,33,'N',10),
      svgText(98,38,'部署比例示意',9),' <g transform="rotate('+b.rotation+' 320 320)">'];
    var road=b.layoutVariant===3?'M320 588V508H186V278H539M186 278H90':'M320 588V274H539M320 274H91';
    svg.push('<path d="'+road+'" fill="none" stroke="var(--road)" stroke-width="26" stroke-linejoin="round"/>');
    svg.push('<path d="M294 574H65V65H575V574H347" fill="none" stroke="var(--wall)" stroke-width="'+(b.tier>=4?7:4)+'"/><path d="M65 73H575M73 65V574M567 65V574" fill="none" stroke="var(--wall)" opacity=".35" stroke-width="1"/>');
    if(b.theme.id==='farm')svg.push('<rect x="98" y="462" width="165" height="20" fill="url(#field-hatch)" stroke="var(--green)" opacity=".55"/>');
    rooms.forEach(function (r) {
      var core=r.key==='core',cx=r.x+r.w/2,cy=r.y+r.h/2;
      svg.push('<g><rect x="'+r.x+'" y="'+r.y+'" width="'+r.w+'" height="'+r.h+'" fill="var(--floor)" stroke="var(--wall)" stroke-width="'+(core&&b.tier>=3?4:2)+'"/>');
      if(core && b.tier>=4)svg.push('<rect x="'+(r.x+7)+'" y="'+(r.y+7)+'" width="'+(r.w-14)+'" height="'+(r.h-14)+'" fill="none" stroke="var(--wall)" opacity=".35"/>');
      svg.push('<path d="M'+(cx-12)+' '+(r.y+r.h)+'h24" stroke="var(--floor)" stroke-width="7"/><path d="M'+(cx-12)+' '+(r.y+r.h)+'v-18" stroke="var(--gold)" stroke-width="2"/>');
      svg.push(svgText(cx,r.y+20,r.name,10,'var(--muted)',b.rotation),'</g>');
    });
    svg.push('<path d="M297 575L297 553M345 575L345 553" stroke="var(--gold)" stroke-width="3"/>',svgText(321,604,'入口 / 撤离方向',10,'var(--muted)',b.rotation));
    if($('show-defence').checked) {
      var traps=Math.min(12,2+b.tier*2);
      for(var i=0;i<traps;i++) {
        var tx=i%2?557:81,ty=276+Math.floor(i/2)*30;
        svg.push('<g opacity=".75"><path d="M'+(tx-6)+' '+(ty+5)+'l6 -11 6 11Z" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.2"/><title>陷阱锚点示意；类型与合法建筑等级在正式生成时查表</title></g>');
      }
      if(b.tier>=3)svg.push('<path d="M285 267H430M270 95V255" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="5 5" opacity=".5"/>');
    }
    if($('show-loot').checked)b.boxes.forEach(function (box) {
      var p=points[box.id],label=D.categoryNames[box.category]+'箱 '+box.units+'单位';
      svg.push('<g role="button" tabindex="0" data-entity="'+box.id+'" aria-label="'+esc(label)+'"><circle class="entity-halo" cx="'+p.x+'" cy="'+p.y+'" r="12"/><rect x="'+(p.x-7)+'" y="'+(p.y-6)+'" width="14" height="12" rx="1.5" fill="'+categoryColors[box.category]+'" stroke="var(--surface)" stroke-width="1.4"/><path d="M'+(p.x-5)+' '+(p.y-2)+'h10M'+p.x+' '+(p.y-6)+'v12" stroke="var(--surface)" stroke-width=".9" opacity=".8"/><title>'+esc(label)+'</title></g>');
    });
    if($('show-guards').checked) {
      b.guards.forEach(function (g) {
        var p=points[g.id],label=roleNames[g.role]+(g.elite?' · 精英':'')+' · '+(g.blueprint==null?'原版装备':'蓝图 '+g.blueprint);
        svg.push('<g role="button" tabindex="0" data-entity="'+g.id+'" aria-label="'+esc(label)+'"><circle class="entity-halo" cx="'+p.x+'" cy="'+p.y+'" r="13"/><circle cx="'+p.x+'" cy="'+p.y+'" r="'+(g.elite?8.5:7)+'" fill="'+roleColors[g.role]+'" stroke="var(--surface)" stroke-width="1.8"/>');
        if(g.elite)svg.push(svgText(p.x,p.y+3,'★',9,'#fff',b.rotation));
        else svg.push('<circle cx="'+p.x+'" cy="'+p.y+'" r="2" fill="#fff" opacity=".8"/>');
        svg.push('<title>'+esc(label)+'</title></g>');
      });
      b.pets.forEach(function (pet) {
        var p=points[pet.id];
        svg.push('<g role="button" tabindex="0" data-entity="'+pet.id+'" aria-label="护卫犬示意"><circle class="entity-halo" cx="'+p.x+'" cy="'+p.y+'" r="12"/><path d="M'+p.x+' '+(p.y-7)+'l7 7-7 7-7-7Z" fill="#95825e" stroke="var(--surface)" stroke-width="1.5"/><title>护卫犬（网页示意）；正式宠物仅从合法原型池选择</title></g>');
      });
    }
    svg.push('</g>',svgText(320,628,b.theme.name+' · '+b.guards.length+' 人 / '+b.pets.length+' 宠物 / '+b.boxes.length+' 箱',9),'</svg>');
    $('map-holder').innerHTML=svg.join('');
    window.BasePage && (window.BasePage.lastMapPoints=clone(points));
  }
  function showEntity(id) {
    if(!preview)return;
    var g=preview.guards.find(function (x) {return x.id===id;}),box=preview.boxes.find(function(x){return x.id===id;}),pet=preview.pets.find(function(x){return x.id===id;});
    selectedEntity=id;
    if(g) {
      text('entity-title',(g.elite?'★ 精英 · ':'')+roleNames[g.role]);
      text('entity-detail',zoneNames[g.zone]+'。'+(g.blueprint==null?'保留原版装备；本预览不虚构其精确耐久。':'建议蓝图等级 '+g.blueprint+'，初始耐久 '+g.durabilityPct+'%。'+(g.elite?'本档上部蓝图区间取值，无额外隐藏伤害倍率。':'在本档范围内随机。'))+' 真实武器、护甲与词条要从合法装备表生成；尸体掉落保留正常概率。');
    } else if(box) {
      text('entity-title',D.categoryNames[box.category]+'储藏箱');
      text('entity-detail','分配 '+fmt(box.units)+' 个标准物资单位，已计入全基地 '+fmt(preview.totalResource)+' 总预算，不再追加 ×'+tiers[preview.tier].resource+'。开箱后的已取状态只在下方保存沙盘中演示。');
    } else if(pet) {
      text('entity-title','护卫犬');
      text('entity-detail','宠物独立于人类守卫计数，归属'+zoneNames[pet.zone]+'。网页统一用护卫犬标记；正式配置可在原版合法犬、熊、猫等原型中按主题选择，不把宠物当成人形装备槽使用。');
    }
  }
  function renderResources() {
    var b=preview,total=b.totalResource;
    text('resource-total',fmt(total));
    $('resource-stack').innerHTML=D.categories.map(function(k){return '<span style="width:'+(total?100*b.resourceByCategory[k]/total:0)+'%;background:'+categoryColors[k]+'" title="'+esc(D.categoryNames[k]+' '+b.resourceByCategory[k])+'"></span>';}).join('');
    $('resource-breakdown').innerHTML=D.categories.map(function(k,i){return '<div class="resource-item"><span><i style="background:'+categoryColors[k]+'"></i>'+esc(D.categoryNames[k])+'</span><strong>'+fmt(b.resourceByCategory[k])+'</strong><small>目标占比 '+b.theme.resourceMix[i]+'%</small></div>';}).join('');
    var sum=b.boxes.reduce(function(a,x){return a+x.units;},0);
    text('budget-check',sum===total?'✓ 各箱合计 '+fmt(sum)+' = 总预算':'预算校验失败');
    text('box-count',b.boxes.length+' 只示意箱子');
  }
  function renderTierTable() {
    $('difficulty-table').innerHTML=tiers.map(function(t,i) {
      var fee=Math.ceil(preview.priceBase*t.fee/50)*50;
      return '<tr'+(i===preview.tier?' class="selected-row"':'')+'><td>0'+(i+1)+' '+esc(t.name)+'</td><td>×'+t.resource+'</td><td>'+(i===0?'原版 0–1*':range(t.guards))+'</td><td>'+(i===0?'原版*':range(t.pets))+'</td><td>×'+t.fee+'<br><small>当前进度 '+fee+' 银币</small></td><td>'+(i===0?'原版保留':range(t.blueprint))+'</td><td>×'+t.attack+'</td></tr>';
    }).join('');
  }
  function renderTuning() {
    var t=tiers[preview.tier];
    text('tuning-badge',t.name+' · 参考参数');
    var stats=[['人物基础生命','×'+t.hp],['人物基础防御','×'+t.defence],['武器自然伤害','×'+t.power],['武器穿刺属性','×'+t.pierce],['装备生命类属性','×'+t.equipmentHealth],['装备最大耐久','×'+t.durability],['最终攻击频率','×'+t.attack],['人物移动速度','×'+t.move],['初始剩余耐久',preview.tier===0?'原版':range(t.durabilityPct)+'%']];
    $('tuning-stats').innerHTML=stats.map(function(v){return '<div><small>'+v[0]+'</small><strong>'+v[1]+'</strong></div>';}).join('');
  }
  function themeArt(id) {
    var lines={
      farm:'M20 51V27L47 11L74 27V51M31 51V35H45V51M53 34H64V44H53ZM80 52H127M83 41H127M90 37V57M112 37V57',
      workshop:'M20 53V21H79V53M27 21V13H39V21M46 35H63V53M89 53V29H130V53M96 29V18H113V29M22 36H36M87 44H126',
      camp:'M18 54L41 16L64 54ZM41 16V54M77 54V31L101 15L126 31V54M91 54V36H110V54M18 57H128',
      manor:'M16 53V29H48V53M48 53V20L77 7L106 20V53M106 29H138V53M68 53V35H85V53M59 23H67M86 23H94M25 37H38M116 37H129',
      fort:'M15 54V15H25V24H36V15H46V54M46 34H104M104 54V15H114V24H125V15H135V54M67 54V39H85V54M15 54H135'
    };
    return '<svg class="theme-art" viewBox="0 0 150 66" aria-hidden="true"><path d="'+lines[id]+'" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 60H142" stroke="currentColor" opacity=".3"/></svg>';
  }
  function renderThemeCards() {
    $('theme-cards').innerHTML=D.themes.map(function(t) {
      return '<div class="theme-card" role="button" tabindex="0" data-theme-card="'+t.id+'" aria-label="预览'+esc(t.name)+'" aria-pressed="'+(preview.theme.id===t.id)+'">'+themeArt(t.id)+'<span class="theme-type">'+themeEnglish[t.id]+'</span><h3>'+esc(t.name)+'</h3><p>'+esc(t.description)+'</p><div class="theme-weight"><span>随机出现权重</span><b>'+t.weight+'%</b></div></div>';
    }).join('');
  }
  function loadSession(force) {
    if(!preview||generationError)return false;
    if(!force&&session&&session.phase!=='hidden'&&session.phase!=='ended'&&!window.confirm('这会重置下方网页沙盘（包括演示余额、箱子和尸体记录），不会操作游戏。是否载入当前预览？'))return false;
    session=D.makeSession(preview); renderSession(); persist(); return true;
  }
  // Translate older saved log text without changing the original IDs or progress.
  function playerMessage(message, base) {
    var replacements=[[base.id,'当前基地']];
    base.guards.forEach(function(g){replacements.push([g.id,roleNames[g.role]||'守卫']);});
    base.boxes.forEach(function(b){replacements.push([b.id,(D.categoryNames[b.category]||'物资')+'储藏箱']);});
    base.pets.forEach(function(p){replacements.push([p.id,'护卫犬']);});
    var visible=String(message);
    replacements.sort(function(a,b){return b[0].length-a[0].length;}).forEach(function(pair){
      visible=visible.split(pair[0]).join(pair[1]);
    });
    return visible.replace('同一 session','同一座基地').replace('下一实例','下一座基地');
  }
  function renderSession() {
    if(!session)return;
    var s=session,b=s.base;
    text('session-title',tiers[b.tier].name+' · '+b.theme.name);
    text('session-id','已锁定当前基地；后续调整预览不会改变本次探索。');
    var order=[['hidden','未购买'],['available','图外已揭露'],['inside','基地内'],['dead','死亡待取回'],['ended','已结束']];
    $('session-steps').innerHTML=order.map(function(v){return '<div class="session-step'+(s.phase===v[0]?' active':'')+'">'+v[1]+'</div>';}).join('');
    text('session-boxes',s.openedBoxIds.length+' / '+b.boxes.length);
    text('session-kills',s.deadGuardIds.length+' / '+b.guards.length);
    text('session-inventory',fmt(s.inventoryUnits)); text('session-fee',fmt(s.silverSpent));
    $('corpse-alert').hidden=!s.corpse.active;
    text('corpse-alert','尸体待取回：'+fmt(s.corpse.units)+' 物资单位。未回收前禁止结束基地；请进入后点击“取回尸体物资”。');
    $('session-result').classList.toggle('fail',!s.lastResult.ok);
    text('session-result',playerMessage(s.lastResult.message,b));
    $('session-log').innerHTML=s.log.slice(-12).reverse().map(function(v){return '<li>'+esc(playerMessage(v,b))+'</li>';}).join('');
    storageStatus();
  }
  function perform(type) {
    if(!session)return;
    var action={type:type};
    if(type==='end'&&session.phase!=='inside'&&session.phase!=='hidden'&&session.phase!=='ended'&&!session.corpse.active) {
      var left=session.base.boxes.length-session.openedBoxIds.length;
      if(!window.confirm('确定结束这次网页演示中的抢劫？尚有 '+left+' 只未领取的箱子，结束后将放弃其中物资。已领取内容保留。此操作不影响游戏。'))return;
      action.confirm=true;
    }
    if(type==='reload') {
      var raw=storageGet(KEY);
      if(raw) {
        try {
          var stored=JSON.parse(raw);
          if(stored.version===1&&validSession(stored.session)&&stored.session.base.id===session.base.id)session=stored.session;
        } catch(_){}
      }
      session=clone(session);
    }
    session=D.transition(session,action); renderSession(); persist();
  }
  function validSession(s) {
    if(!s||s.schemaVersion!==1||!s.base||!Object.prototype.hasOwnProperty.call(phaseNames,s.phase)||!s.corpse)return false;
    var b=s.base;
    if(!Array.isArray(b.guards)||b.guards.length>30||!Array.isArray(b.boxes)||b.boxes.length>20||!Array.isArray(b.pets)||b.pets.length>4)return false;
    if(!Number.isInteger(b.tier)||b.tier<0||b.tier>6||!b.theme||typeof b.theme.name!=='string'||typeof b.seed!=='string')return false;
    if(!Array.isArray(s.openedBoxIds)||!Array.isArray(s.deadGuardIds)||!Array.isArray(s.log)||s.log.length>120)return false;
    if(!s.lastResult||typeof s.lastResult.message!=='string'||!Number.isFinite(s.inventoryUnits)||s.inventoryUnits<0||!Number.isFinite(s.corpse.units)||s.corpse.units<0)return false;
    if(!Number.isFinite(s.silverSpent)||!Number.isFinite(s.silver)||s.silver<0)return false;
    if(!s.openedBoxIds.every(function(id){return b.boxes.some(function(x){return x.id===id;});})||!s.deadGuardIds.every(function(id){return b.guards.some(function(x){return x.id===id;});}))return false;
    return b.boxes.every(function(x){return typeof x.id==='string'&&Number.isFinite(x.units)&&x.units>=0&&D.categories.indexOf(x.category)>=0;});
  }
  function validSettings(c) {
    return c && Number.isInteger(c.tier) && c.tier>=0 && c.tier<=6 &&
      Number.isInteger(c.region) && c.region>=1 && c.region<=7 &&
      Number.isInteger(c.baseUnits) && c.baseUnits>=10 && c.baseUnits<=10000 &&
      typeof c.seed==='string' && c.seed.trim().length>0 && c.seed.length<=64;
  }
  function exportConfig() {
    if(!preview)return;
    var b=preview,t=tiers[b.tier];
    var lines=['Westland 基地预览摘要','本摘要为网页设计演示，不代表游戏内已上线功能。','',
      '难度：'+t.name,'主题：'+b.theme.name,'情报费：'+fmt(b.fee)+' 银币',
      '普通资源倍率：×'+t.resource,'物资总量：'+fmt(b.totalResource)+' 示意单位',
      '人类守卫：'+b.guards.length+' 人','宠物：'+b.pets.length+' 只',
      '物资箱：'+b.boxes.length+' 只','守卫蓝图等级：'+(b.tier===0?'原版保留':range(t.blueprint)),
      '', '物资分配：'];
    D.categories.forEach(function(category){lines.push(D.categoryNames[category]+'：'+fmt(b.resourceByCategory[category])+' 示意单位');});
    lines.push('', '当前难度与主题仅用于本次预览，不会修改游戏或存档。');
    var blob=new Blob(['\ufeff'+lines.join('\n')],{type:'text/plain;charset=utf-8'});
    var url=URL.createObjectURL(blob),a=document.createElement('a');
    a.href=url;a.download='westland-base-preview.txt';document.body.appendChild(a);a.click();a.remove();
    setTimeout(function(){URL.revokeObjectURL(url);},1500);
    text('export-status','预览摘要已保存，包含难度、防守和物资信息。');
  }
  function setupEvents() {
    $('theme-toggle').addEventListener('click',function(){applyTheme(document.documentElement.dataset.theme==='dark'?'light':'dark');});
    $('tier-tabs').addEventListener('click',function(e){var b=e.target.closest('[data-tier]');if(!b)return;tier=Number(b.dataset.tier);updatePreview();});
    ['theme-select','region-select'].forEach(function(id){$(id).addEventListener('change',updatePreview);});
    $('preview-generate').addEventListener('click',updatePreview);
    $('base-units').addEventListener('change',updatePreview);
    $('seed-input').addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();updatePreview();}});
    $('seed-next').addEventListener('click',function(){sequence++;$('seed-input').value='WESTLAND-BASE-160-'+sequence;updatePreview();});
    ['show-guards','show-loot','show-defence'].forEach(function(id){$(id).addEventListener('change',renderMap);});
    function markerEvent(e) {
      if(e.type==='keydown'&&e.key!=='Enter'&&e.key!==' ')return;
      var target=e.target.closest('[data-entity]');if(!target)return;
      if(e.type==='keydown')e.preventDefault();showEntity(target.dataset.entity);
    }
    $('map-holder').addEventListener('click',markerEvent);$('map-holder').addEventListener('keydown',markerEvent);
    function themeEvent(e) {
      if(e.type==='keydown'&&e.key!=='Enter'&&e.key!==' ')return;
      var target=e.target.closest('[data-theme-card]');if(!target)return;
      if(e.type==='keydown')e.preventDefault();
      if(tier===0)tier=1;$('theme-select').value=target.dataset.themeCard;updatePreview();
      $('planner').scrollIntoView({behavior:'smooth',block:'start'});
    }
    $('theme-cards').addEventListener('click',themeEvent);$('theme-cards').addEventListener('keydown',themeEvent);
    $('load-session').addEventListener('click',function(){if(loadSession(false))$('save-lab').scrollIntoView({behavior:'smooth',block:'start'});});
    $('session-reset').addEventListener('click',function(){if(window.confirm('仅重置网页沙盘与演示余额。当前沙盘的未完成进度将丢弃，不会影响游戏。继续吗？'))loadSession(true);});
    document.querySelectorAll('[data-action]').forEach(function(b){b.addEventListener('click',function(){perform(b.dataset.action);});});
    $('export-config').addEventListener('click',exportConfig);
    $('print-page').addEventListener('click',function(){window.print();});
  }
  function initialize() {
    var savedTheme=storageGet(THEME_KEY),saved=storageGet(KEY),restored=null;
    applyTheme(savedTheme==='dark'?'dark':'light');
    if(saved)try {
      var parsed=JSON.parse(saved);
      if(parsed.version===1&&validSettings(parsed.settings)&&validSession(parsed.session)) {
        D.generate(parsed.settings);restored=parsed;sequence=Number.isInteger(parsed.sequence)?Math.max(0,parsed.sequence):0;
      }
    }catch(_){}
    if(restored)syncControls(restored.settings);
    setupEvents();updatePreview();
    session=restored?restored.session:D.makeSession(preview);
    renderSession();persist();
  }
  window.BasePage={getPreview:function(){return clone(preview);},getSession:function(){return clone(session);},
    getSettings:function(){return clone(settings);},setTier:function(value){if(!Number.isInteger(value)||value<0||value>6)return false;tier=value;return updatePreview();},
    updatePreview:updatePreview,perform:perform,loadSession:loadSession,showEntity:showEntity,applyTheme:applyTheme,
    validSession:validSession,renderMap:renderMap,lastMapPoints:{}};
  initialize();
})();
