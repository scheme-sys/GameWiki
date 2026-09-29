# Dawn of Zombies Wiki 维护

这是 LCZ 游戏 Wiki 的第四个游戏目录。打开仓库主页后可从“僵尸的黎明 / Dawn of Zombies”进入，也可直接打开本目录 `index.html`。保留同级 `../assets/` 和其他游戏目录，以使用统一导航。HTTP 预览请在仓库根执行 `python -m http.server 4173`，访问 `http://localhost:4173/DawnofZombiewiki/`。

资料为游戏 2.278 的版本档案，实际活动开放情况和实战数值以游戏内为准。缺图、条件属性和未确认概率保留说明。

## 资料规模

| 数据 | 数量 |
|---|---:|
| 全部图鉴记录 / 默认可见记录 | 15,491 / 5,635 |
| 配方 / 地点 / 任务 | 1,515 / 175 / 2,786 |
| 盟友成长 / 技能 / 笔记 | 63 / 155 / 408 |
| 阵营 / 装备套装 | 14 / 20 |
| 召唤池 / 乐透池 / 宝箱池 | 37 / 103 / 144 |
| 玩家 CSV / 指南 | 15 / 7 |
| 图片文件 / 图片哈希记录 | 3,687 / 3,687 |

图片总计 **343,838,419 字节（327.91 MiB）**。461 条可见武器和 500 条可见防具均有图片，多条资料可共用一张图。15 份 CSV 合计 10,708 个数据行，不含表头。

## 维护源与玩家字段

`data/catalog.json`、`data/mechanics.json` 和 `data/asset-map.json` 是维护源，已经清理不参与玩家资料的技术键、冗余搜索文本、内部品质证据和原始来源信息。

- 图鉴保留中文与英文名称、描述、属性、用途、能力、成长数值、变体和可见性。
- `id`、`recipeIds` 等关联用于配方跳转、收藏与档案链接，保持稳定。
- `abilities` 保留能力说明、冷却等有效资料；`scenarioStats` 保存不同场景的属性候选、等级区间和攻击间隔，页面继续提示条件尚未完全核实。
- 每条资料通过 `image` 直接指向 `assets/images/` 内的图片；`referenceImage` 表示同模型参考图。
- `asset-map.json` 的 `hero` 指向首页背景，`images` 保存本地图片名称、路径、尺寸、字节数和分类。运行时 `asset-map.js` 只需要版本与首页背景。

`tools/player_schema.py` 会在生成之前拒绝已移除的技术字段和源文件引用。新增玩家字段时应检查实际用途并完善校验；不要将未整理的技术对象整块复制进 JSON。

## 数据更新

以下命令在仓库根运行，仅需 Python 3.10 及以上的标准库：

```sh
python DawnofZombiewiki/tools/update_data.py
python DawnofZombiewiki/tools/verify_package.py
```

更新命令生成网页使用的 JS 数据、收录统计、下载清单和维护报告，不修改 JSON、图片、HTML 或交互逻辑；内容相同时不会重写文件。`data/site-meta.js` 的 `downloads.csv` 和 `downloads.guides` 提供玩家下载入口。

修改了玩家资料时，同步生成 CSV 和指南后检查差异：

```sh
python DawnofZombiewiki/tools/update_data.py --exports
python DawnofZombiewiki/tools/verify_package.py --data-only
```

`--exports` 按明确的玩家字段生成 15 份中文 CSV 和 7 篇 Markdown 指南，保持数值、UTF-8 BOM、CSV 引号和表格公式转义。新增或删减指南时同步维护 `tools/wiki_data.py` 的 `GUIDE_FILES`。只检查生成结果而不写文件，可运行 `update_data.py --check --exports`。

校验器检查 JSON 与运行时数据同步、CSV 全部单元格、指南正文、图片 SHA-256 与文件大小、本地图片引用及页面依赖。`--data-only` 跳过页面链接检查，适合 CI。结果写入 `reports/maintenance-validation.json`。

新增或替换图片时，更新资料的 `image`、`asset-map.json` 的 `images` 和 `reports/image-manifest.json`。哈希清单仅含本地路径、字节数与 SHA-256，更新工具不会自动接受图片变化。保留同名图片时也必须复核其内容。

## 维护入口与报告

`materials.html` 是本地维护图片浏览器，按中文名称和分类查找图片。其 `data/media.js` 由当前图片清单生成，只有本地图片信息。维护浏览器不进入 Pages 产物。

旧 `tools/package_wiki.py` 路径保留为简短的禁用说明入口，不再包含导入实现。请使用更新与校验命令。

`maintenance-summary.json` 记录当前资料规模和 JSON 摘要，`image-manifest.json` 记录图片校验值。旧报告路径保留为当前计数、导出状态或新报告索引，已清除旧技术来源细节。

## 发布与测试

仓库根 `scripts/lib/public-files.mjs` 选择公开文件：页面、交互脚本、样式、图片、四个运行时数据 JS，以及 `data/player/*.csv` 和 `guides/*.md`。JSON、维护报告、工具和本地图片浏览器不进入 Pages；仓库中的维护源同样只保留清理后的资料。

在仓库根执行 `node scripts/check-site.mjs --stage _site` 可生成并检查完整站点，目标目录必须为空。图片、下载与共享资源路径参与检查，HTML 的本地 CSS/JS 引用会自动添加内容版本。

```sh
python -m unittest discover -s DawnofZombiewiki/tools -p test_maintenance.py
node --test scripts/test-asset-versions.mjs scripts/test-public-files.mjs
python scripts/test-dawn.py
```

浏览器回归需要 Python Playwright 与本机 Chrome，使用独立浏览器和临时本地服务，覆盖搜索、快速切页、详情、收藏、对比、下载、手机布局、键盘和本地打开，报告在 `.verification/dawn-ui/`。可用 `LCZ_BROWSER=msedge` 切换到本机 Edge。