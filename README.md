# LCZ · 游戏星图

一个以手机体验为优先的游戏 Wiki 集合。主页铺满屏幕，以四个纯圆形游戏图标呈现入口。气泡轻微漂移，拖动时可重叠，松手后柔和弹开；中英名称只在悬停或长按后的介绍卡中出现。背景采用静态渐变与稀疏星点，游戏资料按实际操作分批加载。

站点内容使用纯 HTML、CSS、JavaScript，无需 npm 安装或站点构建，可直接托管到 GitHub Pages。访问统计使用外部公开计数服务，与 Wiki 资料加载分开运行。

## 使用方式

- **鼠标**：悬停气泡查看介绍，点击进入游戏 Wiki；按住拖动可以调整位置。
- **手机**：轻触直接进入；长按约 520 毫秒查看介绍，松手保留介绍，再次点击进入。移动手指会转为拖动，取消长按。
- **动态**：气泡轻微漂移，拖动时跟随指针、允许重叠与穿过，松手后约 1.1 秒柔和分离。系统开启“减少动态效果”时停止漂移；切到后台、打开搜索或介绍卡时也自动停帧。主页不放置暂停、重置按钮或操作提示条。
- **位置**：桌面、平板、手机竖屏和横屏分别保存摆放锚点。漂移不会改变保存的位置。游戏目录增加或减少时会使用新的初始排列，避免沿用旧布局挤压新气泡。
- **查找**：搜索支持中文展示名、英文名称和关键词，也可以从游戏目录访问各个百科与工具。

主页左上角显示 LCZ、群 QQ：1045051029 和访问统计。右上角搜索支持 `/` 快捷键；介绍卡、搜索面板与访问统计提示共用深色方形视觉。

## 已收录的世界

中文名称是本站用于识别游戏的展示名或译名，英文名称对应原游戏。

| 中文展示名 / 英文名称 | 类型 | 页面 |
| --- | --- | --- |
| 生存工艺 / Craft of Survival | 暗黑奇幻 · 生存 | [物品 Wiki](Craft%20of%20Survival/wiki.html)，含 3,843 条物品资料、4 项货币资料及 1,189 个图标 |
| 辐射生存 / Day R Survival | 废土末日 · 生存 | [物品、武器与怪物档案](Day%20R%20Survival/wiki_dayR.html)，含 2,157 件物品与 2,643 个战斗单位 |
| 西部世界 / Westland Survival | 西部冒险 · 生存 | [物品 Wiki](Westland%20Survival/westland_wiki.html)、[难度与配装实验室](Westland%20Survival/westland_difficulty_design.html)、[基地设计提案](Westland%20Survival/基地.html) |
| 僵尸的黎明 / Dawn of Zombies | 废土末日 · 生存 | [玩家百科](DawnofZombiewiki/index.html)，含 5,635 条默认可见图鉴记录、1,515 条配方、175 个地点、2,786 条任务及 3,687 张原图 |

游戏页面保留原有资料与功能，顶部提供返回星图的统一入口。主页图标来自各游戏官方 Google Play 商店页面，来源、英文名称与文件摘要见 [assets/game-icons/README.md](assets/game-icons/README.md)。游戏名称、图标及相关资料归各自权利人所有；本站是非官方资料整理项目。

## 访问统计

导航中的 PV / IP 分别提供本站累计浏览量（PV）与按服务规则去重的 IP 访客数，汇总主页与全部游戏子页，由免账号第三方服务统计。IP 访客不等同于真实人数；去重周期以服务规则为准。只有正式发布路径会产生统计请求；本地与预览页面显示 `—`，不会伪造访问数字。离线或服务不可用时，统计失败不影响 Wiki 操作。

计数范围、隐私说明、服务限制及新增页面的方法见 [docs/visits.md](docs/visits.md)。

## 抓取与页面防护

本站向爬虫声明不收录、不跟踪链接、不展示摘要，并通过 CSP 限制未授权脚本和资源加载。玩家可正常浏览、搜索、复制资料和使用导入导出功能，无验证码或等待步骤。

项目目录中的 robots.txt 不能替代域名根的爬虫规则；仓库已提供域名根合并模板。公开静态站及公开仓库无法强制阻止恶意下载。策略、生效范围、部署位置与验证方法见 [docs/security.md](docs/security.md)。

## 本地打开

直接双击根目录的 `index.html` 即可打开。保持各文件夹相对位置不变，游戏页面也可以独立打开。

建议用本地 HTTP 服务预览与 GitHub Pages 一致的路径行为：

```sh
python -m http.server 4173 --bind 127.0.0.1
```

打开 <http://127.0.0.1:4173/>。停止服务时，在终端按 `Ctrl+C`。

## 发布到 GitHub Pages

本仓库提供 [.github/workflows/pages.yml](.github/workflows/pages.yml)，向 `main` 推送或手动运行工作流即可部署。

1. 在 GitHub 仓库中打开 **Settings → Pages**。
2. 将 **Build and deployment → Source** 设置为 **GitHub Actions**。
3. 把本项目文件提交并推送到 `main`。如果代码已经推送，进入 **Actions → Deploy LCZ-GameWiki to GitHub Pages → Run workflow**。
4. 等待工作流通过，部署地址会显示在 Pages 设置和工作流的 `github-pages` 环境中。

如果仓库仍名为 `GameWiki`，先在 GitHub 仓库 Settings → General → Repository name 将其改为 `LCZ-GameWiki`，再运行发布。改名后，本地执行 `git remote set-url origin https://github.com/scheme-sys/LCZ-GameWiki.git` 更新远程地址。

发布目标仓库为 [`scheme-sys/LCZ-GameWiki`](https://github.com/scheme-sys/LCZ-GameWiki)。启用并成功部署后的默认地址为：

**https://scheme-sys.github.io/LCZ-GameWiki/**

站点使用相对资源路径，兼容 `/LCZ-GameWiki/` 项目子目录。`404.html` 提供返回入口，并兼容原 `/GameWiki/` 路径。工作流从 `assets/games.js` 自动读取需要发布的游戏目录，把静态文件整理到 `_site/`，检查资源与 JavaScript 后发布。打包时会自动为 HTML 引用的本地 CSS 和 JavaScript 加上基于文件内容的版本参数，防止更新后浏览器混用旧缓存；源文件保持不变。动态数据分片由各游戏生成器提供内容哈希文件名或版本参数，发布时须连同对应入口清单一起更新。

Dawn 的中文玩家 CSV 与 Markdown 指南也随站点发布，方便离线查阅；已清理的维护 JSON、校验报告与工具留在仓库。

发布产物包含根入口、404 页面、`.nojekyll`，以及公共 `assets/` 和已登记游戏目录内的 HTML、CSS、JavaScript、图片与字体。README、开发脚本、维护 JSON 与校验清单保留在仓库，不包含在 Pages 产物中。游戏资料通过本地普通 JavaScript 文件载入；访问统计另行请求外部服务的 JSON。

GitHub 的设置说明见[使用自定义工作流部署 Pages](https://docs.github.com/zh/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

## 页面与维护

```text
index.html                    星图页面结构与无 JavaScript 备用链接
404.html                      找不到页面时的返回入口
assets/games.js                游戏中英名称、关键词、图标、链接与初始布局
assets/portal.css              圆形气泡、介绍层与响应式布局
assets/portal.js               拖动、悬停、长按、搜索与位置保存
assets/bubble-physics.js       漂移、排斥与场景边界
assets/game-icons/             官方应用图标、轻量显示副本与来源记录
assets/wiki-nav.*              游戏页面的统一导航
assets/site-stats.*            正式站点的参考访问统计
docs/visits.md                访问统计范围与维护说明
Craft of Survival/           Wiki、样式、脚本、数据与图标
Day R Survival/wiki-assets/   分离的 css/、js/、data/、images/
Westland Survival/wiki-assets/ wiki/、lab/、base/ 与共享 images/
DawnofZombiewiki/              玩家页面、数据、分类图片、指南与维护工具
scripts/build-game-icons.py    生成主页显示尺寸图标（需要 Pillow）
scripts/check-site.mjs         无依赖静态检查与发布打包
scripts/lib/public-files.mjs   公开文件范围，排除维护文件
scripts/check-player-data.mjs  检查未使用的游戏实现信息是否混入数据
scripts/test-portal.py         可选的门户浏览器交互检查
.github/workflows/pages.yml    GitHub Pages 发布工作流
```

新增或调整游戏主要修改 `assets/games.js`。每个对象定义一个世界：稳定的 `id` 用于关联数据和保存位置；`image` 指向本地图标；`links` 定义百科和工具入口；`keywords` 定义搜索关键词；`position` 和 `size` 控制初始布局。主页气泡、搜索和目录从同一份配置生成。

添加游戏时：

1. 把游戏页面及资源放进独立文件夹，保持页面内引用为相对路径。
2. 在 `assets/games.js` 复制一个现有对象，填写唯一 `id`、中英名称、简介、搜索关键词、图标和 `links`。路径相对于根目录 `index.html`。
3. 把应用图标放入 `assets/game-icons/`，补充可核验来源；圆形显示由 CSS 完成，不需要裁剪源文件。
4. 在新游戏页面加入统一导航。运行下方检查，再检查手机竖屏、横屏及桌面操作。发布目录会从 `links` 自动识别，无需修改工作流。
5. 如需统计新增页面的访问量，按 [访问统计说明](docs/visits.md) 更新页面允许列表与统计入口。

如需让新增游戏在禁用 JavaScript 时也有入口，可在 `index.html` 的 `noscript` 区域补充基础链接。

面向玩家的页面只展示可读名称、属性与玩法说明。维护数据和发布数据仅保留玩家资料及网站需要的稳定 ID、关联关系、本地图片路径、统计键和模型映射。未用的游戏函数引用、内部类名、原始配置和提取路径从文件中清除，而非仅在界面隐藏。已有收藏、关联查询和分享链接继续使用稳定 ID；未翻译的名称标注为待补充。清理范围和维护规则见 [数据清理说明](docs/player-data.md)。

各游戏的大图和数据库独立于 HTML 存放，并按浏览需求分批读取。Craft 使用轻索引与详情块；Day R 在访问战斗单位资料时加载怪物数据；Westland 首屏使用精简目录，3D 试装在主动打开后加载；Dawn 按分类、详情、配方分页和栏目读取分片。调整布局只需编辑 CSS，调整交互编辑运行脚本，更新资料编辑 `data/`；不要把大图或整库数据重新嵌回 HTML，也不要把未筛选的原始游戏记录覆盖到维护数据中。

详细维护说明见 [Craft of Survival](Craft%20of%20Survival/README.md)、[Day R Survival](Day%20R%20Survival/README.md)、[Westland Survival](Westland%20Survival/README.md)、[Dawn of Zombies](DawnofZombiewiki/README.md)。各游戏校验清单保留拆分前后的资料和图片摘要，可用于确认素材完整性。

### 更新 Dawn of Zombies 资料

以 `DawnofZombiewiki/data/` 内的 JSON 为维护源，图片按分类保存在 `assets/images/`；布局、交互和数据分开维护。更新资料后运行：

```sh
python DawnofZombiewiki/tools/update_data.py
python DawnofZombiewiki/tools/verify_package.py --data-only
```

第一个命令从已清理的维护 JSON 同步首页摘要、内容哈希分片与收录统计，不会改动维护 JSON 或图片。需要同时重建中文 CSV 和 Markdown 指南时使用 `update_data.py --exports`，查看文件差异后提交。详细目录职责、导出差异和新增图片流程见 [Dawn 维护说明](DawnofZombiewiki/README.md)。发布工作流会校验各游戏的资料一致性及原图完整性。加载边界、生成和性能核验方式见 [按需加载说明](docs/loading.md)。

## 检查与发布预览

安装 Node.js 后，在项目根目录运行：

```sh
node scripts/check-site.mjs
node scripts/test-bubble-physics.cjs
node scripts/test-site-stats.mjs
node scripts/test-site-security.mjs
node scripts/test-asset-versions.mjs
node scripts/test-public-files.mjs
node scripts/test-player-data-policy.mjs
node scripts/check-player-data.mjs
python DawnofZombiewiki/tools/verify_package.py --data-only
```

检查包含统一游戏配置、入口文件、相对链接、CSS 资源、全部 JavaScript 语法、外置图像路径、Dawn 玩家下载及图片映射、Westland 按需数据块。它不会访问外部链接，也不会代替浏览器中的拖动、长按、搜索、键盘与移动端验证。

生成与 GitHub Actions 完全相同的发布文件并检查：

```sh
node scripts/check-site.mjs --stage .verification/site-preview
```

目标目录须不存在或为空；打包不会删除原有文件。预览这个目录：

```sh
python -m http.server 4173 --bind 127.0.0.1 --directory .verification/site-preview
```

也可以单独检查已经生成的发布目录：

```sh
node scripts/check-site.mjs --root .verification/site-preview
```

### 可选：浏览器交互检查

本机需要 Python 和已安装的 Google Chrome。安装可选开发依赖后运行：

```sh
python -m pip install playwright
python scripts/test-portal.py
python scripts/test-dawn.py
```

脚本启动独立的无头浏览器和临时本地 HTTP 服务。`test-portal.py` 检查主页拖动、手机布局、搜索与跨游戏导航，输出位于 `.verification/portal/`；`test-dawn.py` 检查 Dawn 栏目、收藏、对比、下载、快速切页、键盘操作及离线打开，输出位于 `.verification/dawn-ui/`。可通过环境变量 `LCZ_BROWSER` 指定本机其他可用的 Chromium 浏览器 channel，默认值为 `chrome`。这些依赖仅用于开发验证，网站发布不需要安装。