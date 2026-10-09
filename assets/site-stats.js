/* Shared HitWebCounter image counters. Scope and provider semantics: docs/visits.md. */
(() => {
  "use strict";
  if (window.LCZSite?.parked && window === window.top) return;
  if (window.__lczSiteStatsMounted) return;
  window.__lczSiteStatsMounted = true;
  const hosts = [...document.querySelectorAll("[data-site-stats]")];
  if (!hosts.length) return;
  const DEPLOYMENT = { origin: "https://scheme-sys.github.io", basePaths: ["/LCZ-GameWiki/", "/GameWiki/"] };
  const COUNTER_URL = "https://www.hitwebcounter.com/counter/counter.php";
  const COUNTERS = { pv: { page: "21522998", type: "page" }, ip: { page: "21523000", type: "ip" } };
  const PAGE_PATHS = new Set([
    "", "index.html", "Craft of Survival/wiki.html", "Day R Survival/wiki_dayR.html",
    "Westland Survival/westland_wiki.html", "Westland Survival/westland_difficulty_design.html",
    "Westland Survival/westland_difficulty_analysis.html", "Westland Survival/基地.html",
    "DawnofZombiewiki/", "DawnofZombiewiki/index.html", "LDOE_Wiki/", "LDOE_Wiki/index.html",
    "grimsoul_Wiki/", "grimsoul_Wiki/index.html",
  ]);
  const metrics = { pv: { state: "waiting" }, ip: { state: "waiting" } };
  let filterId = 0;
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
      const node = host.querySelector("[data-stat-note]");
      node.textContent = note;
      node.hidden = !note;
      const state = key => metrics[key].state === "ready" ? "已加载" : "尚未加载";
      host.querySelector("summary").setAttribute("aria-label", `访问统计，浏览量 PV ${state("pv")}，IP访客${state("ip")}。${note}`);
    }
  }
  document.addEventListener("pointerdown", event => {
    for (const host of hosts) if (!host.contains(event.target)) host.querySelector("details").open = false;
  });
  document.addEventListener("keydown", event => {
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
      const basePath = DEPLOYMENT.basePaths.find(path => current.pathname.startsWith(path));
      if (basePath) permitted = PAGE_PATHS.has(decodeURIComponent(current.pathname.slice(basePath.length)));
    }
  } catch { /* Previews, file URLs and malformed paths never generate visits. */ }
  if (!permitted) {
    render("preview", "本地或预览页面不计数；发布后显示浏览量与IP访客。");
    return;
  }
  function svgElement(name, attributes = {}) {
    const element = document.createElementNS("http://www.w3.org/2000/svg", name);
    for (const [key, value] of Object.entries(attributes)) element.setAttribute(key, value);
    return element;
  }
  function paintValue(target, image, label) {
    const canvas = document.createElement("canvas");
    canvas.className = "site-stats-counter";
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    canvas.setAttribute("role", "img");
    canvas.setAttribute("aria-label", `${label}，HitWebCounter 计数图片`);
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Counter drawing unavailable");
    // Reuse decoded pixels for every display. Never read/export pixels or guess a number.
    context.drawImage(image, 0, 0);
    // Plain style 0007: remove white paper and tint black ink with existing text color.
    const id = `lcz-counter-ink-${++filterId}`;
    const svg = svgElement("svg", { class: "site-stats-filter", width: "0", height: "0", "aria-hidden": "true", focusable: "false" });
    const defs = svgElement("defs");
    const filter = svgElement("filter", { id, "color-interpolation-filters": "sRGB", x: "0", y: "0", width: "100%", height: "100%" });
    filter.append(
      svgElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -1 0 0 1 0", result: "digits" }),
      svgElement("feFlood", { "flood-color": "currentColor", result: "ink" }),
      svgElement("feComposite", { in: "ink", in2: "digits", operator: "in" }),
    );
    defs.append(filter);
    svg.append(defs);
    canvas.style.filter = `url("#${id}")`;
    target.replaceChildren(svg, canvas);
  }
  function updateState() {
    const states = Object.values(metrics).map(metric => metric.state);
    if (states.every(state => state === "ready")) render("ready");
    else if (states.includes("loading")) render("loading", "正在加载访问统计");
    else if (states.includes("ready")) render("partial", "部分统计暂不可用，已加载的数字仍可查看。");
    else render("unavailable", "访问统计暂不可用，请稍后重新打开页面。");
  }
  function loadMetric(key) {
    const counter = COUNTERS[key], metric = metrics[key], image = new Image();
    metric.image = image;
    image.decoding = "async";
    image.referrerPolicy = "no-referrer";
    image.fetchPriority = "low";
    image.onload = () => {
      image.onload = image.onerror = null;
      try {
        if (!image.naturalWidth || !image.naturalHeight || image.naturalWidth > 4096 || image.naturalHeight > 256) throw new Error("Invalid counter image");
        for (const host of hosts) {
          const label = key === "pv" ? "浏览量 PV" : "IP访客";
          paintValue(host.querySelector(`[data-stat-${key}-short]`), image, label);
          paintValue(host.querySelector(`[data-stat-${key}]`), image, label);
        }
        metric.state = "ready";
      } catch { metric.state = "error"; }
      updateState();
    };
    image.onerror = () => {
      image.onload = image.onerror = null;
      metric.state = "error";
      updateState();
    };
    const url = new URL(COUNTER_URL);
    url.search = new URLSearchParams({ page: counter.page, style: "0007", nbdigits: "1", type: counter.type }).toString();
    // One request per metric; every summary and panel shares this image.
    image.src = url.href;
  }
  let started = false;
  function countVisit() {
    if (started || document.prerendering || document.visibilityState === "hidden") return;
    if (navigator.onLine === false) {
      render("unavailable", "当前离线，联网后会自动加载统计。");
      return;
    }
    started = true;
    metrics.pv.state = metrics.ip.state = "loading";
    render("loading", "正在加载访问统计");
    loadMetric("pv");
    loadMetric("ip");
  }
  window.addEventListener("online", countVisit);
  document.addEventListener("visibilitychange", countVisit);
  document.addEventListener("prerenderingchange", countVisit);
  countVisit();
})();
