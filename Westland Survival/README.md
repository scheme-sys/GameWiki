# Westland Survival 资料与设计实验

三个入口保持不变，并通过 LCZ 导航返回主页或相互切换：`westland_wiki.html` 是百科，`westland_difficulty_design.html` 是配装对战实验室（附带独立的 `westland_difficulty_analysis.html` 难度与数据分析页），`基地.html` 是随机基地设计预览。资料来自用户提供的游戏素材；游戏文本、美术和模型归原权利人所有。实验室和基地是网页演示，不修改游戏。

## 数据与资源

`wiki-assets/wiki/` 保存百科运行脚本、样式、首屏目录、完整索引、图片映射和 105 个按需加载的详情块。当前有 4,567 件物品、913 条装备记录、203 个宠物、4 个装饰伙伴、133 个外观和 113 个宠物技能。

`wiki-assets/lab/` 保存配装界面、网页计算引擎和标准化数据：225 件装备、饰品、食物、技能、25 个动物变体，以及三维试装所需的网格、材质和纹理映射。`wiki-assets/base/` 保存本网站编写的基地生成及交互代码。

`wiki-assets/images/` 有 1,849 张按内容哈希命名的原图。三维预览使用 237 个网格和 173 个纹理映射；`file://` 模式另有按需加载的离线纹理兼容文件。图片、网格数组与数值曲线在本次清理中未改变。

## 已清理的内容

当前仓库数据和发布用 JavaScript 已实际移除不用的原始装备配置、解析和审计字典、原文件与提取路径、模型来源记录以及原游戏实现名称；不只是从界面隐藏它们。基地维护文档也只保留设计概念和本网站的维护说明。

页面依赖的物品和宠物关联 ID、属性键、详情块标识、模型部件、材质和纹理映射仍需保留。它们支持关联跳转、等级数值、配装保存与导入和三维显示。公开静态页面及公开仓库中的这些必要数据仍可被读取，这次清理不构成访问权限控制。

清理前后比较了全部保留玩家字段和渲染输入的摘要，1,849 张图片哈希一致；浏览器回归覆盖图鉴详情与关联返回、三维预览、配装下载与导入往返、对照方案、战斗模拟，以及固定种子的基地预览和摘要导出。数据文件从 67,121,924 字节降至 54,781,436 字节，减少 12,340,488 字节；玩家字段与数值没有因清理改变。

## 本地预览

保留本目录与仓库根 `assets/` 的相对位置，直接打开 HTML，或在仓库根运行 `python -m http.server 4173` 后访问 `http://localhost:4173/`。百科先展示 60 条首屏记录及完整分类统计；首次搜索、分类切换、翻页或查看详情时才读取完整索引，加载期间保留最新操作，失败可重试。详情块和图片继续按需读取。配装页先使用二维示意，点击“打开 3D 试装”才读取模型；计算、配装与战斗不必等待三维资源。实验室在线使用独立纹理，本地双击时使用离线纹理兼容机制。

## 配装工作区维护

配装页使用紧凑双列工作区；手机依次显示部位与换装、实时指标、属性调整和可展开设置。HTML 负责结构，`wiki-assets/lab/loadout.css` 负责响应式布局，`loadout-lab-controller.js` 负责选择、方案和实验交互。不要把全部数据或模型嵌回页面；角色试装默认折叠，只有点击“打开 3D 试装”才加载三维资源。游戏计算规则仍由 `difficulty-model.js` 和 `loadout-lab-engine.js` 维护。

三个工作方案包含各自的装备、食物、技能、对手与实验设置，可改名或复制。对照 A 是独立的共享快照，切换方案时可以继续比较。自动保存仍使用 `westland-loadout-lab-v1`，兼容旧 `{config, reference}`；新增的 `workspace` 保存当前方案序号及三个 `{name, config}`。导入导出继续使用原来的单方案格式；导入及重置只作用于当前方案。离开页面时会补存；禁止本地存储时保留当前页面的内存操作并提示导出，不承诺刷新后恢复。

装备搜索与阶级筛选共同决定上一件 / 下一件的范围；当前装备不符合筛选时仍明确保留，不擅自换装。维护时保留现有控件 ID、键盘焦点和横向部位栏的位置。快捷方案或搜索不应触发三维资源下载。

交互回归需要 Python Playwright，可分别选择已安装的 Chrome 或 Edge：

```sh
python scripts/test-westland-loadout.py --channels chrome
python scripts/test-westland-loadout.py --channels msedge
```

## 维护与导入

数据使用经典 JavaScript 对象赋值，保存在 `wiki-assets/*/data/`。样式与页面代码分别维护，不要把整库数据或图片重新粘贴回 HTML。维护工具仅需 Python 3.10 及以上标准库。

在仓库根执行：

```sh
python "Westland Survival/tools/verify_assets.py"
python -m unittest discover -s "Westland Survival/tools" -p test_player_schema.py
```

校验器按格式 2 的 `asset-manifest.json` 检查 115 个数据文件、玩家字段摘要、全部原图与离线纹理；同时要求数据符合 `tools/player_schema.py` 的保留字段白名单。未登记的数据文件、额外原始配置和技术来源会被拒绝，不能通过单纯更新文件哈希绕过字段检查。

`wiki-assets/lazy-manifest.js` 登记按需脚本及其内容 SHA-256 查询版本；`lazy-loader.js` 只读取清单内的同目录经典脚本，兼容 `file://`，并合并重复请求、处理超时及失败重试。`tools/update_lazy.py` 从完整索引重新生成首屏记录、所有筛选选项与统计，并刷新资源版本和校验清单。它不删减完整目录、详情块或模型数据。修改完整索引、详情数据、百科 `app.js` 或按需加载的三维脚本后执行：

```sh
python "Westland Survival/tools/update_lazy.py"
python "Westland Survival/tools/verify_assets.py"
python scripts/test-westland-loading.py
```

浏览器测试需要 Python Playwright 和已安装的 Chrome；设置 `LCZ_BROWSER=msedge` 可使用系统 Edge。首屏不会偷偷预取完整索引或模型。统计和完整筛选项来自同一维护源，校验器会拒绝首屏遗漏、失配的资源版本和过期的清单。

如果收到新的自包含 Wiki HTML，在另一个目录保管输入文件，再运行：

```sh
python "Westland Survival/tools/extract_legacy.py" --source-dir PATH_TO_SOURCE_PAGES
python "Westland Survival/tools/verify_assets.py"
```

导入器在写入任何数据文件前执行同一白名单，只保留玩家数据和网页需要的关系；它不会把被清理的字段带回当前仓库。已有外置 HTML、CSS 和运行脚本保留。新版本出现真正需要的新字段时，应先修改白名单和页面适配、审查数值差异，再重新导入并测试；不要恢复旧版来源字段来消除校验错误。

`asset-manifest.json` 的新基线针对已保留的玩家语义和当前文件字节，不再要求复原被明确移除的原始技术配置。它保留本地图片路径与 SHA-256 校验，维护文档不保存原游戏类、方法或提取路径。
