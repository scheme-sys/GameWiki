/* Project PV and provider-defined IP visitors. Scope: docs/visits.md. */
(() => {
  "use strict";

  if (window.LCZSite?.parked && window === window.top) return;
  if (window.__lczSiteStatsMounted) return;
  window.__lczSiteStatsMounted = true;
  const hosts = [...document.querySelectorAll("[data-site-stats]")];
  if (!hosts.length) return;

  const DEPLOYMENT = {
    origin: "https://scheme-sys.github.io",
    basePaths: ["/LCZ-GameWiki/", "/GameWiki/"],
    // All supported pages share one provider page bucket, isolated from other repos.
    canonical: "https://scheme-sys.github.io/LCZ-GameWiki/",
  };
  const COUNTER_API = "https://cdn.busuanzi.cc/api.php";
  const PAGE_PATHS = new Set([
    "", "index.html",
    "Craft of Survival/wiki.html",
    "Day R Survival/wiki_dayR.html",
    "Westland Survival/westland_wiki.html",
    "Westland Survival/westland_difficulty_design.html",
    "Westland Survival/westland_difficulty_analysis.html",
    "Westland Survival/基地.html",
    "DawnofZombiewiki/",
    "DawnofZombiewiki/index.html",
    "LDOE_Wiki/", "LDOE_Wiki/index.html",
    "grimsoul_Wiki/", "grimsoul_Wiki/index.html",
  ]);
  const formatter = new Intl.NumberFormat("zh-CN");
  const compactFormatter = new Intl.NumberFormat("zh-CN", { notation: "compact", maximumFractionDigits: 1 });
  const values = { pv: null, ip: null };

  for (const host of hosts) {
    host.classList.add("site-stats");
    host.innerHTML = `<details class="site-stats-disclosure">
      <summary class="site-stats-summary" aria-label="查看浏览量与IP访客">
        <svg class="site-stats-icon" viewBox="0 0 28 28" aria-hidden="true"><path class="stats-orbit" d="M7 5.8a14 14 0 0 1 14 0M7 22.2a14 14 0 0 0 14 0"/><path d="M2.8 14S7 7.1 14 7.1 25.2 14 25.2 14 21 20.9 14 20.9 2.8 14 2.8 14Z"/><circle class="stats-iris" cx="14" cy="14" r="4.2"/><path class="stats-pupil" d="m14 11.4.8 1.8 1.8.8-1.8.8-.8 1.8-.8-1.8-1.8-.8 1.8-.8Z"/><circle class="stats-glint" cx="16.6" cy="11.5" r=".8"/></svg>
        <span class="site-stats-metric"><span>PV</span><strong data-stat-pv-short>—</strong></span>
        <span class="site-stats-metric"><span>IP</span><strong data-stat-ip-short>—</strong></span>
      </summary>
      <div class="site-stats-panel">
        <div class="site-stats-row"><span>浏览量 PV</span><strong data-stat-pv>—</strong></div>
        <div class="site-stats-row"><span>IP访客</span><strong data-stat-ip>—</strong></div>
        <p class="site-stats-note" data-stat-note role="status" aria-live="polite">正在加载访问统计</p>
      </div>
    </details>`;
  }

  function render(status, note = "") {
    for (const host of hosts) {
      host.dataset.statsState = status;
      const pv = values.pv === null ? "—" : formatter.format(values.pv);
      const ip = values.ip === null ? "—" : formatter.format(values.ip);
      host.querySelector("[data-stat-pv-short]").textContent = values.pv === null ? "—" : compactFormatter.format(values.pv);
      host.querySelector("[data-stat-ip-short]").textContent = values.ip === null ? "—" : compactFormatter.format(values.ip);
      host.querySelector("[data-stat-pv]").textContent = pv;
      host.querySelector("[data-stat-ip]").textContent = ip;
      const noteElement = host.querySelector("[data-stat-note]");
      noteElement.textContent = note;
      noteElement.hidden = !note;
      const summary = host.querySelector("summary");
      summary.setAttribute("aria-label", `访问统计，浏览量 PV ${pv} 次，IP访客 ${ip}。${note}`);
    }
  }

  document.addEventListener("pointerdown", (event) => {
    for (const host of hosts) {
      if (!host.contains(event.target)) host.querySelector("details").open = false;
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    for (const host of hosts) {
      const details = host.querySelector("details");
      if (!details.open) continue;
      details.open = false;
      host.querySelector("summary").focus();
    }
  });

  let permitted = false;
  try {
    const current = new URL(window.location.href);
    if (current.origin === DEPLOYMENT.origin) {
      const basePath = DEPLOYMENT.basePaths.find((path) => current.pathname.startsWith(path));
      if (basePath) permitted = PAGE_PATHS.has(decodeURIComponent(current.pathname.slice(basePath.length)));
    }
  } catch { /* Malformed paths and file URLs never produce a public visit. */ }
  if (!permitted) {
    render("preview", "本地或预览页面不计数；发布后显示浏览量与IP访客。");
    return;
  }

  function count(value) {
    if (!(typeof value === "number" || (typeof value === "string" && /^\d+$/.test(value)))) {
      throw new Error("Invalid counter response");
    }
    const number = Number(value);
    if (!Number.isSafeInteger(number) || number < 0) throw new Error("Invalid counter value");
    return number;
  }

  async function hitProject() {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 7000);
    try {
      const response = await fetch(COUNTER_API, {
        method: "POST",
        mode: "cors",
        credentials: "omit",
        referrerPolicy: "no-referrer",
        cache: "no-store",
        signal: controller.signal,
        // Never send the visited page, its query/hash, the referrer or a browser IP lookup.
        body: JSON.stringify({ url: DEPLOYMENT.canonical, referrer: "" }),
      });
      if (!response.ok) throw new Error("Counter unavailable");
      const data = await response.json();
      // Provider site_* merges other repositories on this hostname; do not use it.
      return { pv: count(data.busuanzi_page_pv), ip: count(data.busuanzi_page_uv) };
    } finally {
      window.clearTimeout(timeout);
    }
  }

  let started = false;
  async function countVisit() {
    if (started || document.prerendering || document.visibilityState === "hidden") return;
    started = true;
    if (navigator.onLine === false) {
      render("unavailable", "当前离线，访问统计暂不可用。");
      return;
    }
    render("loading", "正在加载访问统计");
    try {
      Object.assign(values, await hitProject());
      render("ready");
    } catch {
      render("unavailable", "访问统计暂不可用，请稍后刷新页面。");
    }
  }

  document.addEventListener("visibilitychange", countVisit);
  document.addEventListener("prerenderingchange", countVisit);
  countVisit();
})();
