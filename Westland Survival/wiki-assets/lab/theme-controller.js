(() => {
'use strict';
const key='westland-difficulty-design-theme';
const night=['#9bbb9a','#c0bd76','#dab072','#eea768','#e88c5e','#dc7360','#cf727e'];
const day=['#376647','#626617','#875714','#995218','#a1471d','#a33727','#934254'];
let mode='dark',selected=3;
try{const saved=localStorage.getItem(key);if(saved==='light'||saved==='dark')mode=saved;}catch(_){/* Local files/private mode may deny storage; switching still works. */}
const root=document.documentElement;
function tone(index){return (mode==='light'?day:night)[index]|| (mode==='light'?day:night)[3];}
function sync(){
  root.dataset.theme=mode;
  root.style.setProperty('--accent',tone(selected));
  document.querySelectorAll('[data-theme-mode]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.themeMode===mode)));
  document.querySelectorAll('.tier-tab[data-tier]').forEach(button=>button.style.setProperty('--tone',tone(Number(button.dataset.tier))));
  document.querySelectorAll('[data-chart-tier]').forEach(bar=>bar.style.backgroundColor=tone(Number(bar.dataset.chartTier)));
  const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=mode==='light'?'#f5f3ed':'#111211';
  const status=document.getElementById('theme-status');if(status)status.textContent='当前网页主题：'+(mode==='light'?'白天':'黑夜');
}
function setTheme(value,persist=true){
  if(value!=='light'&&value!=='dark')return false;
  mode=value;sync();
  if(persist)try{localStorage.setItem(key,mode);}catch(_){}
  return true;
}
function setTier(index){if(Number.isInteger(index)&&index>=0&&index<7)selected=index;sync();}
window.designTheme=Object.freeze({setTheme,setTier,tone,getTheme:()=>mode});
sync();
document.addEventListener('DOMContentLoaded',sync);
document.addEventListener('click',event=>{const button=event.target.closest('[data-theme-mode]');if(button)setTheme(button.dataset.themeMode);});
})();
