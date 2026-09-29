(() => {
  "use strict";

  const runtime = window.COS_WIKI_RUNTIME;
  const data = runtime?.data;
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
      article.type,
      article.wikiGroup,
      article.quality,
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

  const typeLabels = {Weapon:"武器",Stuff:"材料与杂物",Bag:"背包",Clothes:"衣物",Usable:"消耗品",Blueprint:"蓝图",Building:"建筑",Finery:"饰品","Left hand":"副手装备","Repair consumable":"修理用品",Note:"笔记","Quest item":"任务物品","Passive skill book":"技能书","Appearance part":"外观部件","Battle usable":"战斗道具","Gacha article":"补给箱","Pet baby box":"宠物幼崽箱"};
  const statLabels = {AddSlots:"额外格数",Armor:"护甲",BreakStealth:"打破潜行",Cooldown:"冷却时间",CriticalDamageChanse:"暴击概率",CriticalDamagePower:"暴击倍率",Durability:"耐久",FreeInventorySlotsReq:"所需空闲背包格",FuelTime:"燃烧时间",Lethality:"杀伤力",MagicArmor:"魔法护甲",MaxDamage:"最大伤害",MaxPassiveSkillExpBonus:"被动技能经验加成上限",MinDamage:"最小伤害",PetFoodAmount:"宠物食物量",RepairPower:"修理效果",SecondPocket:"第二快捷栏",TargetingRange:"射程",TwoHanded:"双手使用"};
  const slotLabels = {Amulet:"护符",Bag:"背包",Belt:"腰带",Boots:"鞋靴",Consumable:"消耗品",Fuel:"燃料",Gloves:"手套",Helmet:"头部",Inventory:"背包物品",Pants:"腿部",Repair:"修理用品","Repair consumable":"修理用品",Ring:"戒指","Second weapon":"副手", "Top torso":"上身",Weapon:"武器"};
  const stackLabels = {Infinite:"可堆叠",Normal:"常规堆叠",Unique:"单件物品"};
  const typeLabel = value => typeLabels[value] || "其他物品";
  function articleTitle(article) {
    const title = String(article?.title || "");
    return title && !article.titleLocalizationFallback && !/\[Unlocalized\]|Article\s*#|#[0-9]+|[a-z]+_[a-z_]+/i.test(title) ? title : `${typeLabel(article?.type)}（名称待补充）`;
  }
  function articleDescription(article) {
    return !article.description || /^No English description/i.test(article.description) ? "暂无物品说明。" : article.description;
  }
  function playerStats(article) { return article.primary.filter(item => Object.hasOwn(statLabels,item.name)); }
  function displayValue(value) {
    if (typeof value === "boolean") return value ? "是" : "否";
    if (typeof value === "number" && !Number.isInteger(value)) return value.toLocaleString("zh-CN", { maximumFractionDigits: 4 });
    return String(value);
  }

  function qualityClass(quality) {
    return `quality-${normalize(quality).replace(/[^a-z]/g, "")}`;
  }

  function mailboxStatus(article) {
    return article.mailboxEligible ? "背包物品" : "其他收录资料";
  }

  function populateHeader() {
    $("stat-articles").textContent = data.meta.mailboxEligibleArticleCount.toLocaleString("en-US");
    $("stat-types").textContent = data.meta.articleCount.toLocaleString("en-US");
    $("stat-icons").textContent = data.meta.iconCount.toLocaleString("en-US");

    for (const group of data.groupCounts) {
      const option = document.createElement("option");
      option.value = group.id;
      option.textContent = `${group.label} (${group.mailboxEligibleCount.toLocaleString("en-US")} 背包物品 / ${group.count.toLocaleString("en-US")} 总计)`;
      elements.group.append(option);
    }
    for (const type of data.typeCounts.slice().sort((a, b) => a.typeId - b.typeId)) {
      const option = document.createElement("option");
      option.value = String(type.typeId);
      option.textContent = `${typeLabel(type.type)} (${type.mailboxEligibleCount.toLocaleString("en-US")} 背包物品 / ${type.count.toLocaleString("en-US")} 总计)`;
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
    // Reuse the original catalog images without loading full item data blocks.
    const currencyIcons = {
      77: "wiki-assets/icons/000493.png",
      2286: "wiki-assets/icons/004476.png",
      2337: "wiki-assets/icons/003383.png",
      3388: "wiki-assets/icons/004818.png",
    };
    for (const currency of data.currencies) {
      const card = document.createElement("article");
      card.className = "currency-card";
      const copy = document.createElement("div");
      copy.className = "currency-copy";
      copy.append(text("span", currency.label), text("strong", currency.title));
      card.append(copy);
      if (currencyIcons[currency.articleId]) {
        const image = document.createElement("img");
        image.className = "currency-icon";
        image.alt = "";
        image.width = 64;
        image.height = 64;
        image.loading = "lazy";
        image.decoding = "async";
        image.src = currencyIcons[currency.articleId];
        card.append(image);
      }
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
    card.setAttribute("aria-label", `查看 ${articleTitle(article)}`);
    const visual = document.createElement("div");
    visual.className = "card-image";
    visual.append(imageOrPlaceholder(article.icon, articleTitle(article)));

    const body = document.createElement("div");
    body.className = "card-body";
    const meta = document.createElement("div");
    meta.className = "card-meta";
    meta.append(text("span", article.wikiGroup), text("span", article.quality, qualityClass(article.quality)));
    const description = text("p", articleDescription(article), "card-description");
    const stats = document.createElement("div");
    stats.className = "card-stats";
    stats.append(text("span", article.wikiGroup));
    stats.append(text("span", typeLabel(article.type)));
    stats.append(text("span", mailboxStatus(article), article.mailboxEligible ? "mailbox-ok" : "mailbox-blocked"));
    for (const item of playerStats(article).slice(0, 2)) {
      stats.append(text("span", `${statLabels[item.name]} ${displayValue(item.value)}`));
    }
    body.append(meta, text("h3", articleTitle(article)), description, stats);
    card.append(visual, body);
    card.addEventListener("click", () => openDetail(article));
    return card;
  }

  function updateFilterChips() {
    const chips = [];
    if (state.query.trim()) chips.push("关键词筛选");
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

  let renderRevision = 0, searchReady = false;
  async function render() {
    const revision = ++renderRevision;
    elements.results.setAttribute("aria-busy", "true");
    elements.summary.textContent = state.query && !searchReady ? "正在打开搜索资料…" : "正在打开本页资料…";
    elements.empty.hidden = true;
    try {
      if (state.query && !searchReady) {
        const descriptions = await runtime.searchText();
        if (!searchReady) {
          for (const article of data.articles) article._search = normalize([
            article.id, `#${article.id}`, article.title, descriptions.get(article.id),
            article.type, article.wikiGroup, article.quality,
          ].join(" "));
          searchReady = true;
        }
      }
      if (revision !== renderRevision) return;
      const rows = selectedArticles();
      const pageCount = Math.max(1, Math.ceil(rows.length / state.pageSize));
      state.page = Math.min(state.page, pageCount);
      const start = (state.page - 1) * state.pageSize;
      const pageRows = rows.slice(start, start + state.pageSize);
      await runtime.hydrate(pageRows);
      if (revision !== renderRevision) return;
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
    } catch (error) {
      if (revision !== renderRevision) return;
      elements.results.hidden = false;
      elements.results.replaceChildren(text("p", "这页资料暂时未能打开。请检查连接后重试。"));
      const retry = text("button", "重新加载资料", "quiet-button");
      retry.type = "button"; retry.addEventListener("click", render);
      elements.results.append(retry);
      elements.summary.textContent = "资料加载未完成";
      elements.pagination.hidden = true;
    } finally {
      if (revision === renderRevision) elements.results.setAttribute("aria-busy", "false");
    }
  }

  function setDetailImage(article, role) {
    const path = role === "female" ? article.femaleIcon : article.icon;
    elements.detailImage.replaceChildren(imageOrPlaceholder(path, `${articleTitle(article)}${role === "female" ? "（女性外观）" : ""}`, true));
    for (const button of elements.imageSwitch.querySelectorAll("button")) {
      button.classList.toggle("selected", button.dataset.iconRole === role);
    }
  }

  function openDetail(article) {
    state.currentArticle = article;
    elements.detailKicker.textContent = `${article.wikiGroup} · ${typeLabel(article.type)}`;
    elements.detailTitle.textContent = articleTitle(article);
    elements.detailDescription.textContent = articleDescription(article);
    setDetailImage(article, "main");
    elements.imageSwitch.hidden = !article.femaleIcon;

    const badges = document.createDocumentFragment();
    badges.append(text("span", article.quality, `badge ${qualityClass(article.quality)}`));
    if (stackLabels[article.stackType]) badges.append(text("span", stackLabels[article.stackType], "badge"));
    badges.append(text("span", mailboxStatus(article), `badge ${article.mailboxEligible ? "mailbox-ok" : "mailbox-blocked"}`));
    for (const slot of article.slots) if (slotLabels[slot]) badges.append(text("span", slotLabels[slot], "badge"));
    elements.detailBadges.replaceChildren(badges);

    const stats = document.createDocumentFragment();
    for (const item of playerStats(article)) appendDefinition(stats, statLabels[item.name], displayValue(item.value));
    if (article.baseHardCost) appendDefinition(stats, "基础水晶花费", article.baseHardCost);
    if (!stats.childNodes.length) appendDefinition(stats, "物品属性", "暂无可展示的属性");
    elements.detailStats.replaceChildren(stats);

    const costs = document.createDocumentFragment();
    for (const cost of article.baseResourceCost) {
      const material = byId.get(cost.articleId);
      costs.append(text("li", `${cost.count} × ${material ? articleTitle(material) : "未命名材料"}`));
    }
    elements.detailCosts.replaceChildren(costs);
    elements.detailCostSection.hidden = article.baseResourceCost.length === 0;

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
