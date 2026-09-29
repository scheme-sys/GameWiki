/* Same-origin scripts preserve file:// use and immutable, content-addressed caching. */
(() => {
  'use strict';
  const boot = window.DOZ_BOOTSTRAP;
  if (!boot) return;
  const base = new URL('.', document.currentScript.src);
  const parts = window.DOZ_DATA_PARTS = Object.create(null);
  const pending = new Map(), full = new Set();
  const records = new Map(boot.entries.map(row => [String(row.id), row]));
  const catalog = window.DOZ_CATALOG = {meta:boot.meta,categories:boot.categories,entries:boot.entries};
  const mechanics = window.DOZ_MECHANICS = {};
  const membership = atob(boot.membership);
  const categories = ['weapon','armor','enemy','companion','resource','consumable','building','other'];
  const has = id => /^\d+$/.test(String(id)) && String(Number(id))===String(id) && Number(id) < membership.length * 8 &&
    Boolean(membership.charCodeAt(Number(id) >> 3) & (1 << (Number(id) % 8)));
  const load = key => {
    if (Object.hasOwn(parts,key)) return Promise.resolve(parts[key]);
    if (pending.has(key)) return pending.get(key);
    const file = boot.manifest[key];
    if (!file) return Promise.reject(new Error('未找到所需资料分片'));
    const promise = new Promise((resolve,reject) => {
      const script=document.createElement('script');
      let timer,settled=false;
      const finish = error => {
        if(settled)return;
        settled=true;
        clearTimeout(timer);script.remove();pending.delete(key);
        error ? reject(error) : resolve(parts[key]);
      };
      script.src=new URL(file,base).href;
      script.onload=()=>finish(Object.hasOwn(parts,key)?null:new Error('资料分片尚未就绪'));
      script.onerror=()=>finish(new Error('资料读取失败，请重试'));
      timer=setTimeout(()=>finish(new Error('资料读取超时，请重试')),20000);
      document.head.append(script);
    });
    pending.set(key,promise);
    return promise;
  };
  function merge(rows, complete=false) {
    for (const row of rows) {
      const id=String(row.id);
      if (complete || !full.has(id)) records.set(id,{...records.get(id),...row});
      if (full.has(id) && row._order!==undefined)records.get(id)._order=row._order;
      if (complete) full.add(id);
    }
    catalog.entries=[...records.values()].sort((a,b)=>(a._order??Infinity)-(b._order??Infinity));
  }
  async function category(name,hidden=false) {
    merge(await load('index-'+name));
    if(hidden)merge(await load('index-'+name+'-hidden'));
  }
  async function allIndexes(hidden=false) {
    // Limit concurrent script parse work; this only runs on an explicit global search.
    for(let offset=0;offset<categories.length;offset+=3)
      await Promise.all(categories.slice(offset,offset+3).map(name=>category(name,hidden)));
  }
  async function entry(id) {
    if(!has(id))return null;
    id=String(id);
    if(!full.has(id)) {
      const block=await load('detail-'+Math.floor(Number(id)/boot.detailSpan));
      merge(block.entries,true);
    }
    return records.get(id);
  }
  async function relatedRecipes(id) {
    if(!has(id))return [];
    const block=await load('detail-'+Math.floor(Number(id)/boot.detailSpan));
    const groups=await Promise.all((block.recipeParts[String(id)]||[]).map(load));
    const row=await entry(id);
    const ids=new Set((row.recipeIds||[]).map(String));
    return groups.flat().filter(recipe=>ids.has(String(recipe.id))||
      (recipe.resultEntries||[]).some(item=>String(item.id)===String(id))||
      (recipe.repairTargets||[]).some(item=>String(item.id)===String(id))).slice(0,15);
  }
  async function dataset(name) {
    if(name==='recipes')catalog.recipes=await load('recipes-index');
    else catalog[name]=await load('catalog-'+name);
    return catalog[name];
  }
  async function recipeRows(rows) {
    const groups=await Promise.all([...new Set(rows.map(row=>row._part))].map(load));
    const found=new Map(groups.flat().map(row=>[String(row.id),row]));
    return rows.map(row=>found.get(String(row.id)));
  }
  async function feature(name) {Object.assign(mechanics,await load('mechanics-'+name));}
  window.DOZ_DATA = {catalog,mechanics,has,category,allIndexes,entry,relatedRecipes,dataset,recipeRows,feature,
    async favorites(ids){await Promise.all([...ids].filter(has).map(entry));},
    loaded:()=>Object.keys(parts)};
})();
