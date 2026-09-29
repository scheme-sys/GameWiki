/* Shared difficulty rules and same-tab analysis selection; no page DOM dependency. */
(() => {
'use strict';
const TIERS=[
{name:'简单',en:'VANILLA',tone:'#9bbb9a',t:1,k:1,r:1,n:1,cap:null,hp:1,hit:1,def:1,elite:1,atk:0,mov:0,lv:[1,1],power:1,pierce:1,ehp:1,dur:1,dp:[0,0],pct:0,crit:0,critd:0,dx:1,sl:0,desc:'完整保留原版生成与装备。所有增强逻辑旁路，作为比较基线。'},
{name:'普通',en:'NORMAL',tone:'#c0bd76',t:.8,k:1.5,r:1.3,n:1.15,cap:6,hp:1.35,hit:1.2,def:1.1,elite:1.5,atk:5,mov:2,lv:[3,5],power:1.25,pierce:1.2,ehp:1.2,dur:1.25,dp:[40,65],pct:.02,crit:.02,critd:.1,dx:1.1,sl:.02,desc:'更完整的装备、更快的遭遇。仍保留大部分原版探索节奏。'},
{name:'困难',en:'HARD',tone:'#dab072',t:.62,k:2.25,r:1.7,n:1.35,cap:9,hp:1.9,hit:1.55,def:1.25,elite:2.25,atk:12,mov:4,lv:[6,50],power:1.75,pierce:1.55,ehp:1.6,dur:1.5,dp:[55,75],pct:.04,crit:.04,critd:.2,dx:1.2,sl:.04,desc:'开始出现明显的装备差距和小队压力，容错空间收窄。'},
{name:'噩梦',en:'NIGHTMARE',tone:'#eea768',t:.46,k:3.5,r:2.3,n:1.65,cap:12,hp:3,hit:2.2,def:1.5,elite:3.5,atk:20,mov:6,lv:[51,200],power:2.75,pierce:2.25,ehp:2.4,dur:2,dp:[70,90],pct:.07,crit:.07,critd:.4,dx:1.35,sl:.07,desc:'完整套装成为常态。高图纸等级叠加实例属性强化，形成持续交战。'},
{name:'地狱',en:'HELL',tone:'#e88c5e',t:.33,k:5.5,r:3.2,n:2,cap:18,hp:5,hit:3.2,def:1.85,elite:5.5,atk:30,mov:8,lv:[201,500],power:4.5,pierce:3.5,ehp:3.8,dur:3,dp:[85,100],pct:.1,crit:.1,critd:.65,dx:1.5,sl:.1,desc:'武器、护甲与生命同步提高。群体数量和精英密度都构成主要威胁。'},
{name:'炼狱',en:'INFERNO',tone:'#dc7360',t:.23,k:9,r:4.5,n:2.5,cap:24,hp:8,hit:4.8,def:2.3,elite:8,atk:45,mov:10,lv:[501,1500],power:7.5,pierce:5.5,ehp:6,dur:4.5,dp:[95,100],pct:.14,crit:.14,critd:1,dx:1.7,sl:.14,desc:'接近必刷的高压战场，靠显著的主属性增幅维持难度，控制效果仍有界。'},
{name:'无尽炼狱',en:'ENDLESS',tone:'#cf727e',t:.16,k:null,r:null,n:3,cap:30,hp:12,hit:6.5,def:2.8,elite:12,atk:60,mov:12,lv:[1501,3000],power:12,pierce:8,ehp:9,dur:6,dp:[100,100],pct:.18,crit:.18,critd:1.5,dx:1.9,sl:.18,desc:'持续生成，击杀推进层数。达到属性与数量上限后，战斗依然可以继续。'}
];
const EXTENDED=new Set(['damage','armor','health_increment','dexterity','wisdom','pet_health_increment']);
function fmt(n,d=2){return Number.isFinite(n)?n.toLocaleString('zh-CN',{maximumFractionDigits:d}):'—';}
function spawnRow(d,b){const q=TIERS[d];let r=b.r;for(let j=1;j<=Math.min(d,5);j++)r=b.r?Math.max(r+1,Math.ceil(b.r*TIERS[j].r)):0;if(d===6&&b.r)r=Infinity;const t=d?Math.min(b.t,Math.max(5,Math.round(b.t*q.t))):b.t;const p=b.p===0?0:d===6?1:1-Math.pow(1-b.p,q.k);const n=b.n*q.n;return {t,p,r,n,rate:b.r&&b.p?60/t*p*n:0,cap:q.cap};}
function natural(curve,level,key){if(!curve)return null;const points=Object.keys(curve).filter(k=>/^\d+$/.test(k)).map(k=>[Number(k),curve[k]]).sort((a,b)=>a[0]-b[0]);if(points.length){const p=points.filter(x=>x[0]<=level).pop();if(!p)return Number.isFinite(curve.default)?curve.default:null;let v=p[1],last=points[points.length-1];if(level>last[0]&&Number.isFinite(curve.per_level_after_max)){v+=curve.per_level_after_max*(level-last[0]);const cap=EXTENDED.has(key)&&curve.per_level_after_max>0?Math.max(curve.max??(last[1]+1000),last[1]+curve.per_level_after_max*(3000-last[0])):(curve.max??(last[1]+1000));v=Math.min(v,cap);}return v;}
if(!Number.isFinite(curve.default))return null;if(Number.isFinite(curve.max)&&curve.max<curve.default)return null;let v=curve.default;if(Number.isFinite(curve.per_level))v=Math.max(v,v+curve.per_level*level);return Number.isFinite(curve.max)?Math.min(v,curve.max):v;}
function scalar(k){return ['damage','armor','resistance'].includes(k)?'power':k==='penetrating_damage'?'pierce':['health_increment','dot_amount'].includes(k)?'ehp':k==='max_durability'?'dur':k==='dexterity'?'dx':null;}
function budget(k,d){const q=TIERS[d];if(k==='critical_hit_chance')return {add:q.crit,cap:.45};if(k==='critical_modifier')return {add:q.critd,cap:2};if(k==='evasion')return {add:q.pct/2,cap:.30};if(['firearm_resistance','fire_resistance'].includes(k))return {add:q.pct,cap:.70};if(k==='penetrating_damage_resistance')return {add:q.pct,cap:.50};if(k==='health_modifier')return {add:q.pct*2,cap:1};if(k==='slow_modifier')return {add:q.sl,cap:.50};return null;}
function enhance(k,n,d){if(n===null||!Number.isFinite(n))return {value:null,label:'不填补缺失属性',status:'keep'};if(!d)return {value:n,label:'保留原版',status:'keep'};if(n===0)return {value:0,label:'不激活零值词条',status:'keep'};const q=TIERS[d],s=scalar(k);if(s){const limit=k==='dot_amount'?500000:k==='dexterity'?10000:10000000;let v=Math.min(n*q[s],limit);v=Math.max(n,v);if(k==='max_durability')v=Math.round(v);return {value:v,label:'×'+q[s]+(k==='dexterity'?' · 待总攻速校准':''),status:k==='dexterity'?'budget':'extra'};}const b=budget(k,d);if(b)return {value:n+Math.min(b.add,Math.max(0,b.cap-n)),label:'整套 +'+fmt(b.add*100)+'pp 预算',status:'budget'};if(k==='slow_time')return {value:n+Math.min(d*.15,Math.max(0,3-n)),label:'每档 +0.15秒 · 待控制验证',status:'budget'};return {value:n,label:'维持自然值',status:'keep'};}
function cappedPower(initial,base,stage,cap){const limit=Math.max(initial,cap);if(initial<=0)return 0;if(Math.log(initial)+stage*Math.log(base)>=Math.log(limit))return limit;return initial*Math.pow(base,stage);}
const SELECTION_KEY='westland-difficulty-selection-v1';
const DEFAULT_SELECTION=Object.freeze({tier:3,originalLevel:1,quantile:50});
let memorySelection={...DEFAULT_SELECTION};
function normalizedSelection(value){
  const source=value&&typeof value==='object'?value:{};
  const number=(key,min,max,integer=false)=>{
    const raw=source[key],value=typeof raw==='number'&&Number.isFinite(raw)?raw:DEFAULT_SELECTION[key];
    const result=Math.max(min,Math.min(max,value));
    return integer?Math.round(result):result;
  };
  return {tier:number('tier',0,6,true),originalLevel:number('originalLevel',1,3000,true),quantile:number('quantile',0,100)};
}
function readSelection(){
  try{
    const saved=window.sessionStorage.getItem(SELECTION_KEY);
    if(saved!==null)memorySelection=normalizedSelection(JSON.parse(saved));
  }catch{/* Restricted storage still leaves the default or current page selection usable. */}
  return {...memorySelection};
}
function saveSelection(value){
  memorySelection=normalizedSelection(value);
  try{window.sessionStorage.setItem(SELECTION_KEY,JSON.stringify(memorySelection));}catch{/* Optional same-tab persistence. */}
  window.dispatchEvent(new CustomEvent('westland:difficulty-selection',{detail:{...memorySelection}}));
  return {...memorySelection};
}
function levelFor(d,selection=readSelection()){
  const current=normalizedSelection(selection),original=current.originalLevel;
  if(d===0)return original;
  const range=TIERS[d].lv,u=current.quantile/100;
  return Math.min(3000,Math.max(original,Math.min(range[1],range[0]+Math.floor(u*(range[1]-range[0]+1)))));
}
window.WestlandDifficulty=window.designLab=Object.freeze({
  TIERS,natural,scalar,enhance,spawnRow,levelFor,budget,cappedPower,readSelection,saveSelection,
  selectionKey:SELECTION_KEY,defaultSelection:DEFAULT_SELECTION,
  get DATA(){return window.WESTLAND_LAB_DATA?.equipment;},
  get bestiary(){return window.WESTLAND_LAB_DATA?.beasts;},version:3
});
})();
