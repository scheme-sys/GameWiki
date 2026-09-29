(() => {
  "use strict";

  const data = window.COS_WIKI_DATA;
  if (!data || !Array.isArray(data.articles)) {
    document.getElementById("result-summary").textContent = "本地资料文件缺失或损坏。";
    return;
  }

  const $ = (id) => document.getElementById(id);
  const elements = {
    search: $("search"),
    eligibility: $("eligibility-filter"),
    group: $("group-filter"),
    type: $("type-filter"),
    quality: $("quality-filter"),
    sort: $("sort-order"),
    size: $("page-size"),
    clear: $("clear-filters"),
    results: $("results"),
    empty: $("empty-state"),
    summary: $("result-summary"),
    filters: $("active-filters"),
    pagination: $("pagination"),
    dialog: $("detail-dialog"),
    dialogClose: $("dialog-close"),
    detailImage: $("detail-image-wrap"),
    imageSwitch: $("detail-image-switch"),
    detailKicker: $("detail-kicker"),
    detailTitle: $("detail-title"),
    detailDescription: $("detail-description"),
    detailBadges: $("detail-badges"),
    detailStats: $("detail-stats"),
    detailCosts: $("detail-costs"),
    detailCostSection: $("detail-cost-section"),
    detailSource: $("detail-source"),
  };

  const state = {
    query: "",
    eligibility: "eligible",
    groupId: "",
    typeId: "",
    quality: "",
    sort: "id",
    page: 1,
    pageSize: 60,
    currentArticle: null,
  };

  const qualityOrder = new Map([
    ["Legendary", 0], ["Epic", 1], ["Rare", 2], ["Uncommon", 3], ["Common", 4], ["Unspecified", 5],
  ]);
  const byId = new Map(data.articles.map((article) => [article.id, article]));

  function normalize(value) {
    return String(value ?? "").normalize("NFKD").toLocaleLowerCase("en");
  }

  for (const article of data.articles) {
    article._search = normalize([
      article.id,
      `#${article.id}`,
      article.title,
      article.description,
      article.titleKey,
      article.descriptionKey,
      article.type,
      article.wikiGroup,
      article.class,
      article.quality,
      article.mailboxExclusionReason,
    ].join(" "));
  }

  function text(tag, value, className) {
    const node = document.createElement(tag);
    node.textContent = value;
    if (className) node.className = className;
    return node;
  }

  function imageOrPlaceholder(path, alt, large = false) {
    if (!path) return text("div", "?", "icon-placeholder");
    const image = document.createElement("img");
    image.src = path;
    image.alt = alt;
    image.loading = large ? "eager" : "lazy";
    image.decoding = "async";
    image.addEventListener("error", () => image.replaceWith(text("div", "?", "icon-placeholder")), { once: true });
    return image;
  }

  function appendDefinition(list, label, value) {
    if (value === null || value === undefined || value === "") return;
    list.append(text("dt", label), text("dd", String(value)));
  }

  function prettyField(name) {
    return name
      .replace(/Id$/, " ID")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace("Chanse", "Chance");
  }

  function displayValue(value) {
    if (typeof value === "boolean") return value ? "Yes" : "No";
    if (typeof value === "number" && !Number.isInteger(value)) return value.toLocaleString("en-US", { maximumFractionDigits: 4 });
    return String(value);
  }

  function qualityClass(quality) {
    return `quality-${normalize(quality).replace(/[^a-z]/g, "")}`;
  }

  function mailboxStatus(article) {
    if (article.mailboxEligible) {
      return article.mailboxQuantityAdjustable ? "可生成 · 数量可调" : "可生成 · 固定 1 件";
    }
    if (article.mailboxExclusionReason === "no_inventory_slot") return "不可生成 · 无普通背包槽位";
    if (String(article.mailboxExclusionReason).startsWith("internal_test_")) return "不可生成 · 内部测试对象";
    return "不可生成 · 未通过白名单";
  }

  function populateHeader() {
    $("stat-articles").textContent = data.meta.mailboxEligibleArticleCount.toLocaleString("en-US");
    $("stat-types").textContent = data.meta.articleCount.toLocaleString("en-US");
    $("stat-icons").textContent = data.meta.iconCount.toLocaleString("en-US");

    for (const group of data.groupCounts) {
      const option = document.createElement("option");
      option.value = group.id;
      option.textContent = `${group.label} (${group.mailboxEligibleCount.toLocaleString("en-US")} 可生成 / ${group.count.toLocaleString("en-US")} 总计)`;
      elements.group.append(option);
    }
    for (const type of data.typeCounts.slice().sort((a, b) => a.typeId - b.typeId)) {
      const option = document.createElement("option");
      option.value = String(type.typeId);
      option.textContent = `${type.type} (${type.mailboxEligibleCount.toLocaleString("en-US")} 可生成 / ${type.count.toLocaleString("en-US")} 总计)`;
      elements.type.append(option);
    }
    for (const quality of ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Unspecified"]) {
      const count = data.articles.filter((article) => article.quality === quality).length;
      if (!count) continue;
      const option = document.createElement("option");
      option.value = quality;
      option.textContent = `${quality} (${count.toLocaleString("en-US")})`;
      elements.quality.append(option);
    }
  }

  function populateCurrencies() {
    const grid = $("currency-grid");
    const fragment = document.createDocumentFragment();
    for (const currency of data.currencies) {
      const card = document.createElement("article");
      card.className = "currency-card";
      card.append(
        text("span", currency.label),
        text("strong", currency.title),
        text("code", `${currency.field} → Article #${currency.articleId}`),
      );
      fragment.append(card);
    }
    grid.replaceChildren(fragment);
  }

  function selectedArticles() {
    const query = normalize(state.query.trim());
    const rows = data.articles.filter((article) => {
      if (query && !article._search.includes(query)) return false;
      if (state.eligibility === "eligible" && !article.mailboxEligible) return false;
      if (state.eligibility === "excluded" && article.mailboxEligible) return false;
      if (state.groupId && article.wikiGroupId !== state.groupId) return false;
      if (state.typeId !== "" && String(article.typeId) !== state.typeId) return false;
      if (state.quality && article.quality !== state.quality) return false;
      return true;
    });
    rows.sort((left, right) => {
      if (state.sort === "title") {
        return left.title.localeCompare(right.title, "en", { sensitivity: "base" }) || left.id - right.id;
      }
      if (state.sort === "quality") {
        return (qualityOrder.get(left.quality) - qualityOrder.get(right.quality)) || left.typeId - right.typeId || left.id - right.id;
      }
      return left.id - right.id || left.typeId - right.typeId;
    });
    return rows;
  }

  function createCard(article) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "article-card";
    card.setAttribute("aria-label", `查看 ${article.title}，Article ${article.id}`);
    const visual = document.createElement("div");
    visual.className = "card-image";
    visual.append(imageOrPlaceholder(article.icon, article.title));

    const body = document.createElement("div");
    body.className = "card-body";
    const meta = document.createElement("div");
    meta.className = "card-meta";
    meta.append(text("span", `#${article.id}`), text("span", article.quality, qualityClass(article.quality)));
    const description = text("p", article.description || "No English description.", "card-description");
    const stats = document.createElement("div");
    stats.className = "card-stats";
    stats.append(text("span", article.wikiGroup));
    stats.append(text("span", article.type));
    stats.append(text("span", mailboxStatus(article), article.mailboxEligible ? "mailbox-ok" : "mailbox-blocked"));
    for (const item of article.primary.slice(0, 2)) {
      stats.append(text("span", `${prettyField(item.name)} ${displayValue(item.value)}`));
    }
    body.append(meta, text("h3", article.title || `Article #${article.id}`), description, stats);
    card.append(visual, body);
    card.addEventListener("click", () => openDetail(article));
    return card;
  }

  function updateFilterChips() {
    const chips = [];
    if (state.query.trim()) chips.push(`搜索：${state.query.trim()}`);
    if (state.eligibility !== "eligible") chips.push(elements.eligibility.selectedOptions[0].textContent);
    if (state.groupId) chips.push(elements.group.selectedOptions[0].textContent);
    if (state.typeId !== "") chips.push(elements.type.selectedOptions[0].textContent);
    if (state.quality) chips.push(state.quality);
    const fragment = document.createDocumentFragment();
    for (const label of chips) fragment.append(text("span", label, "filter-chip"));
    elements.filters.replaceChildren(fragment);
    elements.filters.setAttribute("aria-hidden", chips.length ? "false" : "true");
  }

  function paginationButton(label, page, options = {}) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.disabled = Boolean(options.disabled);
    if (options.current) button.setAttribute("aria-current", "page");
    button.addEventListener("click", () => {
      state.page = page;
      render();
      elements.results.focus({ preventScroll: true });
      elements.results.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return button;
  }

  function renderPagination(pageCount) {
    const fragment = document.createDocumentFragment();
    fragment.append(paginationButton("上一页", Math.max(1, state.page - 1), { disabled: state.page === 1 }));
    const pages = new Set([1, pageCount]);
    for (let page = Math.max(1, state.page - 2); page <= Math.min(pageCount, state.page + 2); page += 1) pages.add(page);
    let previous = 0;
    for (const page of [...pages].sort((a, b) => a - b)) {
      if (page - previous > 1) fragment.append(text("span", "…"));
      fragment.append(paginationButton(String(page), page, { current: page === state.page }));
      previous = page;
    }
    fragment.append(paginationButton("下一页", Math.min(pageCount, state.page + 1), { disabled: state.page === pageCount }));
    elements.pagination.replaceChildren(fragment);
    elements.pagination.hidden = pageCount <= 1;
  }

  function render() {
    const rows = selectedArticles();
    const pageCount = Math.max(1, Math.ceil(rows.length / state.pageSize));
    state.page = Math.min(state.page, pageCount);
    const start = (state.page - 1) * state.pageSize;
    const pageRows = rows.slice(start, start + state.pageSize);
    const fragment = document.createDocumentFragment();
    for (const article of pageRows) fragment.append(createCard(article));
    elements.results.replaceChildren(fragment);
    elements.empty.hidden = rows.length !== 0;
    elements.results.hidden = rows.length === 0;
    elements.summary.textContent = rows.length
      ? `共 ${rows.length.toLocaleString("en-US")} 条；显示第 ${(start + 1).toLocaleString("en-US")}–${Math.min(start + state.pageSize, rows.length).toLocaleString("en-US")} 条，第 ${state.page}/${pageCount} 页。`
      : "0 条匹配结果。";
    updateFilterChips();
    renderPagination(pageCount);
  }

  function setDetailImage(article, role) {
    const path = role === "female" ? article.femaleIcon : article.icon;
    elements.detailImage.replaceChildren(imageOrPlaceholder(path, `${article.title}${role === "female" ? " female" : ""}`, true));
    for (const button of elements.imageSwitch.querySelectorAll("button")) {
      button.classList.toggle("selected", button.dataset.iconRole === role);
    }
  }

  function openDetail(article) {
    state.currentArticle = article;
    elements.detailKicker.textContent = `${article.wikiGroup} · ${article.type} · Article #${article.id}`;
    elements.detailTitle.textContent = article.title || `Article #${article.id}`;
    elements.detailDescription.textContent = article.description || "No English description.";
    setDetailImage(article, "main");
    elements.imageSwitch.hidden = !article.femaleIcon;

    const badges = document.createDocumentFragment();
    badges.append(text("span", article.quality, `badge ${qualityClass(article.quality)}`));
    badges.append(text("span", article.stackType, "badge"));
    badges.append(text("span", mailboxStatus(article), `badge ${article.mailboxEligible ? "mailbox-ok" : "mailbox-blocked"}`));
    for (const slot of article.slots) badges.append(text("span", slot, "badge"));
    elements.detailBadges.replaceChildren(badges);

    const stats = document.createDocumentFragment();
    for (const item of article.primary) appendDefinition(stats, prettyField(item.name), displayValue(item.value));
    if (article.baseHardCost) appendDefinition(stats, "Base hard cost", article.baseHardCost);
    if (article.workbenchId) appendDefinition(stats, "Workbench ID", article.workbenchId);
    if (article.baseArticleId) appendDefinition(stats, "Base article ID", article.baseArticleId);
    if (!stats.childNodes.length) appendDefinition(stats, "Primary parameters", "None configured");
    elements.detailStats.replaceChildren(stats);

    const costs = document.createDocumentFragment();
    for (const cost of article.baseResourceCost) {
      costs.append(text("li", `${cost.count} × ${cost.title} (#${cost.articleId})`));
    }
    elements.detailCosts.replaceChildren(costs);
    elements.detailCostSection.hidden = article.baseResourceCost.length === 0;

    const source = document.createDocumentFragment();
    appendDefinition(source, "Protobuf class", article.class);
    appendDefinition(source, "Title localization key", article.titleKey || "—");
    appendDefinition(source, "Description localization key", article.descriptionKey || "—");
    appendDefinition(source, "Icon resource ID", article.iconResourceId || "—");
    appendDefinition(source, "Type storage ID → enum", `${article.typeStorageId ?? "—"} → ${article.typeId}`);
    appendDefinition(source, "Quality storage ID → enum", `${article.qualityStorageId ?? "—"} → ${article.qualityId ?? "—"}`);
    appendDefinition(source, "Stack storage ID → enum", `${article.stackStorageId ?? "—"} → ${article.stackTypeId ?? "—"}`);
    appendDefinition(source, "Mailbox whitelist", article.mailboxEligible ? "Eligible" : "Excluded");
    appendDefinition(source, "Mailbox quantity", article.mailboxQuantityAdjustable ? "Adjustable stack" : "Fixed to one");
    appendDefinition(source, "Mailbox exclusion reason", article.mailboxExclusionReason || "—");
    appendDefinition(source, "Localization complete", article.localizationMissing ? "No" : "Yes");
    elements.detailSource.replaceChildren(source);

    if (typeof elements.dialog.showModal === "function") elements.dialog.showModal();
    else elements.dialog.setAttribute("open", "");
  }

  let searchTimer = 0;
  elements.search.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = elements.search.value;
      state.page = 1;
      render();
    }, 100);
  });
  elements.eligibility.addEventListener("change", () => { state.eligibility = elements.eligibility.value; state.page = 1; render(); });
  elements.group.addEventListener("change", () => { state.groupId = elements.group.value; state.page = 1; render(); });
  elements.type.addEventListener("change", () => { state.typeId = elements.type.value; state.page = 1; render(); });
  elements.quality.addEventListener("change", () => { state.quality = elements.quality.value; state.page = 1; render(); });
  elements.sort.addEventListener("change", () => { state.sort = elements.sort.value; state.page = 1; render(); });
  elements.size.addEventListener("change", () => { state.pageSize = Number(elements.size.value); state.page = 1; render(); });
  elements.clear.addEventListener("click", () => {
    state.query = ""; state.eligibility = "eligible"; state.groupId = ""; state.typeId = ""; state.quality = ""; state.page = 1;
    elements.search.value = ""; elements.eligibility.value = "eligible"; elements.group.value = ""; elements.type.value = ""; elements.quality.value = "";
    render();
  });
  elements.dialogClose.addEventListener("click", () => elements.dialog.close());
  elements.dialog.addEventListener("click", (event) => {
    if (event.target === elements.dialog) elements.dialog.close();
  });
  elements.imageSwitch.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-icon-role]");
    if (button && state.currentArticle) setDetailImage(state.currentArticle, button.dataset.iconRole);
  });

  populateHeader();
  populateCurrencies();
  render();
})();
