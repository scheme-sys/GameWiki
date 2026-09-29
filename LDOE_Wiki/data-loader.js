/* Same-origin, content-addressed scripts also work when index.html is opened offline. */
(() => {
  'use strict';
  const boot=window.LDOE_BOOTSTRAP;
  if(!boot)return;
  const base=new URL('.',document.currentScript.src);
  const parts=window.LDOE_PARTS=Object.create(null), pending=new Map(), complete=new Set();
  const records=new Map(boot.home.map(row=>[row.id,row]));
  function known(id) {
    const match=typeof id==='string'&&id.match(/^(item|creature|location|recipe)-(\d{4})$/);
    return Boolean(match&&Number(match[2])>0&&Number(match[2])<=boot.ranges[match[1]]&&!boot.missingIds[match[1]].includes(Number(match[2])));
  }
  function load(key) {
    if(Object.hasOwn(parts,key))return Promise.resolve(parts[key]);
    if(pending.has(key))return pending.get(key);
    const path=boot.manifest[key];
    if(!path)return Promise.reject(new Error('所需资料暂不可用'));
    const promise=new Promise((resolve,reject)=>{
      const script=document.createElement('script');
      let settled=false,timer;
      const finish=error=>{
        if(settled)return;
        settled=true;clearTimeout(timer);script.remove();pending.delete(key);
        error?reject(error):resolve(parts[key]);
      };
      script.src=new URL(path,base).href;
      script.onload=()=>finish(Object.hasOwn(parts,key)?null:new Error('资料未能读取，请重试'));
      script.onerror=()=>finish(new Error('资料加载失败，请重试'));
      timer=setTimeout(()=>finish(new Error('资料加载超时，请重试')),15000);
      document.head.append(script);
    });
    pending.set(key,promise);
    return promise;
  }
  function merge(rows,full=false) {
    for(const row of rows) {
      if(full||!complete.has(row.id))records.set(row.id,row);
      if(full)complete.add(row.id);
    }
    return rows.map(row=>records.get(row.id));
  }
  async function entry(id) {
    if(!known(id))return null;
    if(!complete.has(id)) {
      const [prefix,value]=id.split('-');
      merge(await load('details-'+prefix+'-'+Math.floor((Number(value)-1)/boot.detailSpan)),true);
    }
    return records.get(id);
  }
  window.LDOE_DATA={
    boot,records,known,gear:new Map(Object.entries(boot.gearIds)),
    category:async key=>merge(await load('category-'+key)),
    entry,
    entries:async ids=>Promise.all([...new Set(ids)].filter(known).map(entry)),
    search:()=>load('search'),
    related:async id=>(await load('relations'))[id]||{outputs:[],uses:[]},
    loaded:()=>Object.keys(parts)
  };
})();
