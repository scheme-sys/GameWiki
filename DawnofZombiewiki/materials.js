(() => {
  'use strict';
  const data=window.DOZ_MEDIA||[];
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const imageURL=value=>/^assets\/images\//.test(value||'')&&!value.split('/').includes('..')?value.split('/').map(encodeURIComponent).join('/'):'';
  let page=1;
  function render(){
    const q=document.querySelector('#search').value.toLowerCase(),type=document.querySelector('#type').value;
    const rows=data.filter(r=>(type==='all'||(r.categories||[r.category]).includes(type))&&[r.name].join(' ').toLowerCase().includes(q));
    const max=Math.max(1,Math.ceil(rows.length/48));page=Math.min(max,page);
    document.querySelector('#results').innerHTML=`<div class="results-line">${rows.length.toLocaleString('zh-CN')} 项素材</div><div class="catalog-grid">${rows.slice((page-1)*48,page*48).map(r=>`<article class="media-tile">${/\.(png|webp|jpg)$/i.test(r.path)?`<a href="${esc(imageURL(r.path))}" target="_blank" rel="noopener"><img src="${esc(imageURL(r.path))}" alt="${esc(r.name)}" loading="lazy"></a>`:/\.(wav|ogg|mp3)$/i.test(r.path)?`<audio controls preload="none" src="${esc(imageURL(r.path))}"></audio>`:'<div class="empty-art">文件素材</div>'}<h3>${esc(r.name)}</h3><p>${esc(r.categoryLabel)}${r.width?` · ${r.width} × ${r.height}`:''}</p><a href="${esc(imageURL(r.path))}" download>下载原始导出文件 ↓</a></article>`).join('')||'<div class="empty-state"><h2>没有匹配素材</h2></div>'}</div><div class="pagination"><button id="prev" ${page===1?'disabled':''}>← 上一页</button><span>${page} / ${max}</span><button id="next" ${page===max?'disabled':''}>下一页 →</button></div>`;
    document.querySelector('#prev').onclick=()=>{page--;render();window.scrollTo(0,200);};document.querySelector('#next').onclick=()=>{page++;render();window.scrollTo(0,200);};
  }
  let timer;document.querySelector('#search').oninput=()=>{page=1;clearTimeout(timer);timer=setTimeout(render,150);};document.querySelector('#type').onchange=()=>{page=1;render();};render();
})();
