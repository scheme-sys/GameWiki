# Dawn of Zombies Wiki 维护

这是 LCZ 游戏 Wiki 的第四个游戏目录。打开仓库主页后可从“僵尸的黎明 / Dawn of Zombies”进入，也可直接打开本目录 `index.html`。保留同级 `../assets/`，其中包含统一返回导航等共享资源，跨游戏链接也需要仓库其他目录。需要 HTTP 预览时，在仓库根执行 `python -m http.server 4173`，访问 `http://localhost:4173/DawnofZombiewiki/`。

资料来自游戏 2.278 / 内置配置 151.25，属于版本档案，不代表当前服务器活动或角色实战数值。缺图、未确认概率和条件属性保持资料原有标注。

## 已核对的资料规模

| 数据 | 数量 |
|---|---:|
| 全部图鉴记录 / 默认可见记录 | 15,491 / 5,635 |
| 配方 / 地点 / 任务 | 1,515 / 175 / 2,786 |
| 盟友成长 / 技能 / 笔记 | 63 / 155 / 408 |
| 阵营 / 装备套装 | 14 / 20 |
| 召唤池 / 乐透池 / 宝箱池 | 37 / 103 / 144 |
| 玩家 CSV / 指南 | 15 / 7 |
| 图片文件 / 图片来源哈希记录 | 3,687 / 3,689 |

图片总计 **343,838,419 字节（327.91 MiB）**，保持原始画质。3,689 条来源记录中有两组指向同一图片，所以实际文件是 3,687 个。461 条可见武器和 500 条可见防具全部匹配图片；多个条目可以共用同一图标。15 份 CSV 合计 10,708 个数据行，不含表头。

## 数据更新

以下命令在仓库根运行，仅需 Python 3.10 及以上的标准库；不需要 `_Wiki`、Playwright 或重新提取游戏包。

```sh
python DawnofZombiewiki/tools/update_data.py
python DawnofZombiewiki/tools/verify_package.py
```

`data/catalog.json`、`data/mechanics.json` 和 `data/asset-map.json` 是数据源。更新命令从它们生成对应的 JavaScript 数据包装、维护用 `data/media.js`、`data/site-meta.js`、统计及维护摘要。它不改原始 JSON、图片、HTML、样式或页面逻辑；没有变化时不会重写文件。`data/site-meta.js` 同时生成玩家下载清单，页面从 `downloads.csv` 和 `downloads.guides` 读取标题、相对路径及 CSV 行数。

当 JSON 中的玩家资料改变时，同步生成下载用 CSV 和指南，再检查差异：

```sh
python DawnofZombiewiki/tools/update_data.py --exports
python DawnofZombiewiki/tools/verify_package.py --data-only
```

`--exports` 使用明确的玩家字段生成 15 份中文 CSV 和 7 篇 Markdown 指南，不导出实体 ID、内部键或素材映射字段；保留原始数值、图片路径、UTF-8 BOM、CSV 引号和表格公式转义。新增或删减指南时，应同时维护 `tools/wiki_data.py` 的 `GUIDE_FILES`，保证公开下载路径稳定。

本次已将旧 CSV 中三条工作台操作的六个文字单元格，同步为 JSON 原有的“处理 / 工作台处理”。原标签、新标签和原因保存在 `reports/export-compatibility.json`；未改数值、其他 CSV 单元格或指南内容。

只检查是否需要生成，不写文件：

```sh
python DawnofZombiewiki/tools/update_data.py --check --exports
```

校验器会比对 JSON 与 JS 全部字段、CSV 全部单元格、指南正文、图片 SHA-256 和文件大小，以及图片映射和本地资源。默认还检查页面依赖是否位于本目录或共享 `../assets/`，并检查仓库内主页与跨游戏导航链接；`--data-only` 用于 CI 的纯数据检查。结果写入 `reports/maintenance-validation.json`，不会启动浏览器。页面交互另由浏览器测试覆盖。

历史 `tools/package_wiki.py` 保留了首次整理逻辑，但入口已禁用，防止它从不存在的 `../_Wiki` 复制旧页面覆盖维护成果。请使用上面的更新命令。

## 发布范围

仓库根的 `scripts/lib/public-files.mjs` 明确选择 Dawn 的公开文件：

- `index.html`、`app.js`、`styles.css`、`assets/wiki-mark.svg` 和 `assets/images/` 中的图片。
- `data/catalog.js`、`data/mechanics.js`、`data/asset-map.js`、`data/site-meta.js`。
- `data/player/*.csv` 和 `guides/*.md`，供玩家直接下载。

原始 JSON、`reports/`、`tools/`、本说明、`data/media.js`、`materials.html` 和 `materials.js` 留在仓库维护，不进入 Pages 产物。`materials.html` 是本地维护用图片浏览器。运行时 JS 仍包含完整资料；公开仓库和公开页面的文件可以被直接读取，打包白名单不构成保密措施。

在仓库根执行 `node scripts/check-site.mjs --stage _site` 可生成并检查完整站点产物，目标目录必须为空。源目录和产物使用同一文件选择规则；数据中的图片路径、CSV/指南下载路径与共享资源也参与检查。HTML 中本地 CSS/JS 引用继续自动添加内容版本，降低部署后混用缓存的概率。

维护与发布回归测试：

```sh
python -m unittest discover -s DawnofZombiewiki/tools -p test_maintenance.py
node --test scripts/test-asset-versions.mjs scripts/test-public-files.mjs
```

可选的浏览器回归需要 Python Playwright 与本机 Chrome：在仓库根运行 `python scripts/test-dawn.py`，检查栏目与搜索、快速切页、收藏、对比、下载、手机布局、键盘操作和离线打开。它使用独立浏览器与临时本地服务，报告写入 `.verification/dawn-ui/`。

`reports/image-manifest.json` 和原来的 `package-summary.json` 记录首次整理来源，`maintenance-summary.json` 和 `maintenance-validation.json` 记录当前维护结果。新增或替换图片时，需要明确更新图片映射和哈希清单后再验证；更新工具不会自行接受图片变化。
