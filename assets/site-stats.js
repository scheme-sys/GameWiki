/* Shared public page-view counters. Configuration and scope: docs/visits.md. */
(() => {
  "use strict";

  if (window.__lczSiteStatsMounted) return;
  window.__lczSiteStatsMounted = true;
  const hosts = [...document.querySelectorAll("[data-site-stats]")];
  if (!hosts.length) return;

  // Keep these keys stable across releases; changing them starts new counters.
  const DEPLOYMENT = {
    origin: "https://scheme-sys.github.io",
    // Both repository names belong to this project and share the existing keys.
    basePaths: ["/LCZ-GameWiki/", "/GameWiki/"],
  };
  const COUNTER_API = "https://countapi.mileshilliard.com/api/v1/hit/";
  const KEY_PREFIX = "scheme_sys_lcz_gamewiki_v1_";
  const PAGE_KEYS = new Map([
    ["", "home"],
    ["index.html", "home"],
    ["Craft of Survival/wiki.html", "craft"],
    ["Day R Survival/wiki_dayR.html", "dayr"],
    ["Westland Survival/westland_wiki.html", "westland"],
    ["Westland Survival/westland_difficulty_design.html", "westland_lab"],
    ["Westland Survival/基地.html", "westland_base"],
  ]);
  const formatter = new Intl.NumberFormat("zh-CN");
  const compactFormatter = new Intl.NumberFormat("zh-CN", { notation: "compact", maximumFractionDigits: 1 });
  const values = { site: null, page: null };

  for (const host of hosts) {
    host.classList.add("site-stats");
    host.innerHTML = `<details class="site-stats-disclosure">
      <summary class="site-stats-summary" aria-label="查看访问统计">
        <svg class="site-stats-icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M1.5 10s3-5.5 8.5-5.5 8.5 5.5 8.5 5.5-3 5.5-8.5 5.5S1.5 10 1.5 10Z"/><circle cx="10" cy="10" r="2.3"/></svg>
        <span>访问</span><strong data-stat-total>—</strong>
      </summary>
      <div class="site-stats-panel">
        <div class="site-stats-row"><span>本站累计</span><strong data-stat-site>—</strong></div>
        <div class="site-stats-row"><span>当前页面</span><strong data-stat-page>—</strong></div>
        <p class="site-stats-note" data-stat-note role="status" aria-live="polite">正在加载访问统计</p>
      </div>
    </details>`;
  }

  function render(status, note) {
    for (const host of hosts) {
      host.dataset.statsState = status;
      const total = values.site === null ? "—" : formatter.format(values.site);
      const page = values.page === null ? "—" : formatter.format(values.page);
      host.querySelector("[data-stat-total]").textContent = values.site === null ? "—" : compactFormatter.format(values.site);
      host.querySelector("[data-stat-site]").textContent = total;
      host.querySelector("[data-stat-page]").textContent = page;
      host.querySelector("[data-stat-note]").textContent = note;
      const summary = host.querySelector("summary");
      summary.title = `本站访问 ${total} · 本页 ${page} · ${note}`;
      summary.setAttribute("aria-label", `访问统计，本站 ${total} 次，当前页面 ${page} 次。${note}`);
    }
  }

  // A native details popup is available by tap and keyboard, including phones.
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

  let pageKey;
  try {
    const current = new URL(window.location.href);
    if (current.origin === DEPLOYMENT.origin) {
      const basePath = DEPLOYMENT.basePaths.find((path) => current.pathname.startsWith(path));
      if (basePath) pageKey = PAGE_KEYS.get(decodeURIComponent(current.pathname.slice(basePath.length)));
    }
  } catch { /* A malformed or file URL is a preview, never a public visit. */ }
  if (!pageKey) {
    render("preview", "本地或预览页面不计数；发布后显示公开访问量。");
    return;
  }

  async function hit(key) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 7000);
    try {
      const response = await fetch(`${COUNTER_API}${KEY_PREFIX}${key}`, {
        mode: "cors",
        credentials: "omit",
        referrerPolicy: "no-referrer",
        cache: "no-store",
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Counter unavailable");
      const data = await response.json();
      if (!(typeof data.value === "number" || (typeof data.value === "string" && /^\d+$/.test(data.value)))) {
        throw new Error("Invalid counter response");
      }
      const count = Number(data.value);
      if (!Number.isSafeInteger(count) || count < 0) throw new Error("Invalid counter value");
      return count;
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
    // Exactly one increment per counter, with no automatic retry after failure.
    const results = await Promise.allSettled([hit("site"), hit(`page_${pageKey}`)]);
    values.site = results[0].status === "fulfilled" ? results[0].value : null;
    values.page = results[1].status === "fulfilled" ? results[1].value : null;
    const complete = values.site !== null && values.page !== null;
    render(complete ? "ready" : "unavailable", complete
      ? "累计浏览次数，包含主页与全部资料页。"
      : (values.site === null && values.page === null ? "访问统计暂不可用，请稍后刷新页面。" : "部分统计暂不可用；已返回的数字仍为公开累计浏览量。"));
  }

  document.addEventListener("visibilitychange", countVisit);
  document.addEventListener("prerenderingchange", countVisit);
  countVisit();
})();
