# LCZ · 游戏星图

一个以手机体验为优先的游戏 Wiki 集合。主页铺满屏幕，以六个纯圆形游戏图标呈现入口。气泡轻微漂移，拖动时可重叠，松手后柔和弹开；中英名称只在悬停或长按后的介绍卡中出现。背景采用静态渐变、独立漂移的星点与随距离淡入淡出的连线，游戏资料按实际操作分批加载。

站点内容使用纯 HTML、CSS、JavaScript，无需 npm 安装或站点构建，可直接托管到 GitHub Pages。访问统计使用外部公开计数服务，与 Wiki 资料加载分开运行。

## 使用方式

- **鼠标**：悬停气泡查看介绍，点击进入游戏 Wiki；按住拖动可以调整位置。
- **手机**：轻触直接进入；长按约 520 毫秒查看介绍，松手保留介绍，再次点击进入。移动手指会转为拖动，取消长按。
- **动态**：气泡轻微漂移，拖动时跟随指针、允许重叠与穿过，松手后约 1.1 秒柔和分离。系统开启“减少动态效果”时停止漂移；切到后台、打开搜索或介绍卡时也自动停帧。主页不放置暂停、重置按钮或操作提示条。
- **位置**：桌面、平板、手机竖屏和横屏分别保存摆放锚点。漂移不会改变保存的位置。游戏目录增加或减少时会使用新的初始排列，避免沿用旧布局挤压新气泡。
- **查找**：搜索支持中文展示名、英文名称和关键词，也可以从游戏目录访问各个百科与工具。
- **实体代码**：各游戏图鉴在实体名称下方提供已核实的游戏代码，长代码以单行省略显示，点击复制图标仍会复制完整代码，也可以用代码搜索。一个条目对应多个变体时可展开其余代码；配方与产物代码使用各自标签。未核实的代码与非实体攻略不填造编号。

主页左上角显示 LCZ、群 QQ：1067536816 和访问统计。点击群号打开二维码小窗，可保存原图；图片只在首次打开时加载。二维码原图保存在 `assets/community/qq-group-1067536816.jpg`，更新时替换该文件；更换群号需同步更新页面与图片。右上角搜索支持 `/` 快捷键；介绍卡、搜索面板与访问统计提示共用深色直角矩形外框。

各 Wiki 顶部共用 LCZ 与群 QQ：1067536816 的入口，点击群号弹出直角二维码小窗；404 页面也保留群入口。共享样式与交互位于 `assets/community-panel.css` 和 `assets/community-panel.js`，二维码复用同一张原图，仅在打开时读取。所有搜索输入框与弹窗外框统一为直角。

## 星空与背景音乐

主页参考 [Yujie Luo 网站](https://yujieluo96.github.io/) 的粒子运动与距离连线机制，使用独立实现的 Canvas 2D 星空，不依赖外部粒子库。桌面约 30 fps、手机约 24 fps，限制星点数量与绘制分辨率；后台、弹窗、拖拽和系统减少动态效果时暂停，Canvas 不可用时保留 SVG 背景。 远景星尘在尺寸变化时绘制到内存缓存，少量近景亮星使用短光芒；静态蓝紫星云由 CSS 渐变生成。字标参考现有 LCZ 徽章的衬线与金属分面，气泡使用同一套银青环边和玻璃反射，均不增加图片或字体下载。

主页初始不播放音乐，点击进入游戏时自动启播，也可点击顶部音符控制。播放贝多芬《月光奏鸣曲》三个乐章，依次循环并柔和衔接；光晕跟随实际音频强弱，暂停后暗淡。录音由 Paul Pitman 演奏、Musopen 提供，录音本身已授权公有领域；来源与摘要见 [音频说明](assets/music/README.md)。

手动关闭后会记住当前标签页的选择，切换游戏不会再次开启。音乐开启后，同一标签页内切换本项目的 Wiki 会保留同一个播放器；普通栏目链接、详情、前进后退和独立页面访问仍可用。刷新、关闭标签或在当前标签跳到外站会中断演奏，新标签不继承原播放器；刷新后再次点击可从记录位置继续。`file://` 本地打开保留普通跳转，跨页连续播放请使用 HTTP 预览或 GitHub Pages。首次打开页面不下载音乐，仅点击进入游戏或音符后读取当前乐章，临近结尾再准备下一乐章。详细结构与维护方式见 [音乐与连续导航](docs/music.md)。

## 已收录的世界

中文名称是本站用于识别游戏的展示名或译名，英文名称对应原游戏。

| 中文展示名 / 英文名称 | 类型 | 页面 |
| --- | --- | --- |
| 生存工艺 / Craft of Survival | 暗黑奇幻 · 生存 | [物品 Wiki](Craft%20of%20Survival/wiki.html)，含 3,843 条物品资料、4 项货币资料及 1,189 个图标 |
| 辐射生存 / Day R Survival | 废土末日 · 生存 | [物品、武器与怪物档案](Day%20R%20Survival/wiki_dayR.html)，含 2,157 件物品与 2,643 个战斗单位 |
| 西部世界 / Westland Survival | 西部冒险 · 生存 | [物品 Wiki](Westland%20Survival/westland_wiki.html)、[配装对战实验室](Westland%20Survival/westland_difficulty_design.html)、[基地设计提案](Westland%20Survival/基地.html) |
| 僵尸的黎明 / Dawn of Zombies | 废土末日 · 生存 | [玩家百科](DawnofZombiewiki/index.html)，含 5,635 条默认可见图鉴记录、1,515 条配方、175 个地点、2,786 条任务及 3,687 张原图 |
| 地球末日生存 / Last Day on Earth | 废土末日 · 生存 | [玩家图鉴](LDOE_Wiki/index.html)，含 1,414 件物品、224 个生物、46 个地点与 459 条制作维修配方 |
| 冷酷灵魂 / Grim Soul | 暗黑幻想 · 生存 | [玩家百科](grimsoul_Wiki/index.html)，含 2,780 条资料，覆盖武器、装备、怪物、制作、地点等 11 个分类 |

Westland 配装对战实验室保留原 `westland_difficulty_design.html` 地址；难度分析独立为 `westland_difficulty_analysis.html`，从实验室内部按钮进入。主页与游戏切换菜单仍收录六款游戏，Westland 全站导航保留 Wiki、配装实验室、基地三项。

游戏页面保留原有资料与功能，顶部提供返回星图的统一入口。主页图标来自各游戏官方 Google Play 商店页面，来源、英文名称与文件摘要见 [assets/game-icons/README.md](assets/game-icons/README.md)。游戏名称、图标及相关资料归各自权利人所有；本站是非官方资料整理项目。

## 访问统计

导航中的 PV / IP 分别提供本站累计浏览量（PV）与按服务规则去重的 IP 访客数，汇总主页与九个游戏资料页共 10 个公共入口（含 Westland 独立难度分析页），由免账号第三方服务统计。IP 访客不等同于真实人数；去重周期以服务规则为准。只有正式发布路径会产生统计请求；本地与预览页面显示 `—`，不会伪造访问数字。离线或服务不可用时，统计失败不影响 Wiki 操作。

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
3. 把本项目文件提交并推送到 `main`。如果代码已经推送，进入 **Actions → Deploy GameWiki to GitHub Pages → Run workflow**。
4. 等待工作流通过，部署地址会显示在 Pages 设置和工作流的 `github-pages` 环境中。

发布目标仓库为 [`scheme-sys/GameWiki`](https://github.com/scheme-sys/GameWiki)。启用并成功部署后的默认地址为：

**https://scheme-sys.github.io/GameWiki/**

站点使用相对资源路径，兼容 `/GameWiki/` 项目子目录。`404.html` 提供返回入口，也支持 `/LCZ-GameWiki/` 路径。工作流从 `assets/games.js` 自动读取需要发布的游戏目录，把静态文件整理到 `_site/`，检查资源与 JavaScript 后发布。打包时会自动为 HTML 引用的本地 CSS 和 JavaScript 加上基于文件内容的版本参数，防止更新后浏览器混用旧缓存；源文件保持不变。动态数据分片由各游戏生成器提供内容哈希文件名或版本参数，发布时须连同对应入口清单一起更新。

Dawn 的中文玩家 CSV 与 Markdown 指南也随站点发布，方便离线查阅；已清理的维护 JSON、校验报告与工具留在仓库。

发布产物包含根入口、404 页面、`.nojekyll`，以及公共 `assets/` 和已登记游戏目录内的 HTML、CSS、JavaScript、图片与字体；Westland 独立难度分析页随该游戏目录发布。README、开发脚本、维护 JSON 与校验清单保留在仓库，不包含在 Pages 产物中。游戏资料通过本地普通 JavaScript 文件载入；访问统计另行请求外部服务的 JSON。

GitHub 的设置说明见[使用自定义工作流部署 Pages](https://docs.github.com/zh/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

## 页面与维护

```text
index.html                    星图页面结构与无 JavaScript 备用链接
404.html                      找不到页面时的返回入口
assets/games.js                游戏中英名称、关键词、图标、封面、链接与初始布局
assets/game-covers/            六款游戏的轻量封面与来源说明
scripts/build-game-covers.py   从保留的原图生成封面显示副本
assets/portal.css              圆形气泡、介绍层与响应式布局
assets/portal.js               拖动、悬停、长按、搜索与位置保存
assets/bubble-physics.js       漂移、排斥与场景边界
assets/game-icons/             官方应用图标、轻量显示副本与来源记录
assets/starfield.*            独立星点运动、连线与低开销绘制
assets/music-player.*         按需音乐、衔接和顶部控件
assets/site-shell.*           播放时保持音频的站内导航
assets/music/                 三乐章录音及来源许可
assets/entity-code.*           实体代码、变体展开与独立复制控件
assets/wiki-nav.*              游戏页面的统一导航
assets/community-panel.*       Wiki 与 404 页共用的QQ群入口和按需二维码弹窗
assets/site-stats.*            正式站点的参考访问统计
docs/visits.md                访问统计范围与维护说明
Craft of Survival/           Wiki、样式、脚本、数据与图标
Day R Survival/wiki-assets/   分离的 css/、js/、data/、images/
Westland Survival/wiki-assets/ wiki/、lab/、base/ 与共享 images/
DawnofZombiewiki/              玩家页面、数据、分类图片、指南与维护工具
LDOE_Wiki/                    玩家页面、维护源、按需分片、图片与校验工具
grimsoul_Wiki/                玩家手记、完整维护源、按需分片、原图与校验工具
scripts/build-game-icons.py    生成主页显示尺寸图标（需要 Pillow）
scripts/check-site.mjs         无依赖静态检查与发布打包
scripts/lib/public-files.mjs   公开文件范围，排除维护文件
scripts/check-player-data.mjs  检查未使用的游戏实现信息是否混入数据
scripts/test-portal.py         可选的门户浏览器交互检查
.github/workflows/pages.yml    GitHub Pages 发布工作流
```

新增或调整游戏主要修改 `assets/games.js`。每个对象定义一个世界：稳定的 `id` 用于关联数据和保存位置；`image` 指向本地图标；`cover.image` 指向介绍卡封面，`cover.position` 设置裁切焦点；`links` 定义百科和工具入口；`keywords` 定义搜索关键词；`position` 和 `size` 控制初始布局。主页气泡、搜索和目录从同一份配置生成。

添加游戏时：

1. 把游戏页面及资源放进独立文件夹，保持页面内引用为相对路径。
2. 在 `assets/games.js` 复制一个现有对象，填写唯一 `id`、中英名称、简介、搜索关键词、图标和 `links`。路径相对于根目录 `index.html`。
3. 把应用图标放入 `assets/game-icons/`，补充可核验来源；圆形显示由 CSS 完成，不需要裁剪源文件。
4. 在新游戏页面加入统一导航，并给其他游戏页面的切换菜单加入新游戏入口；发布检查会核对导航完整性。运行下方检查，再检查手机竖屏、横屏及桌面操作。发布目录会从 `links` 自动识别，无需修改工作流。
5. 如需统计新增页面的访问量，按 [访问统计说明](docs/visits.md) 更新页面允许列表与统计入口。

如需让新增游戏在禁用 JavaScript 时也有入口，可在 `index.html` 的 `noscript` 区域补充基础链接。

面向玩家的页面只展示可读名称、属性与玩法说明。维护数据和发布数据仅保留玩家资料及网站需要的稳定 ID、关联关系、本地图片路径、统计键和模型映射。未用的游戏函数引用、内部类名、原始配置和提取路径从文件中清除，而非仅在界面隐藏。已有收藏、关联查询和分享链接继续使用稳定 ID；未翻译的名称标注为待补充。清理范围和维护规则见 [数据清理说明](docs/player-data.md)。

各游戏的大图和数据库独立于 HTML 存放，并按浏览需求分批读取。Craft 使用轻索引与详情块；Day R 在访问战斗单位资料时加载怪物数据；Westland 首屏使用精简目录，3D 试装在主动打开后加载；Dawn 按分类、详情、配方分页和栏目读取分片；LDOE 首页使用摘要，分类、详情、配方关联与完整搜索分别按需读取；Grim Soul 按分类、完整搜索、摘要与详情块加载。调整布局只需编辑 CSS，调整交互编辑运行脚本，更新资料编辑 `data/`；不要把大图或整库数据重新嵌回 HTML，也不要把未筛选的原始游戏记录覆盖到维护数据中。

首页介绍卡只在首次悬停或长按相应游戏时加载该游戏的封面；原图来源、尺寸与摘要见 [封面维护说明](assets/game-covers/README.md)。Craft 与 Westland 的 Wiki 首页和介绍卡共享各自的专属封面。运行 `python scripts/build-game-covers.py` 可重新生成六张压缩显示图，需要 Pillow；`assets/game-covers/originals/` 只用于维护，不进入 Pages。

`craftsurvival/` 是临时本地素材来源，已从 Git 提交与 Pages 发布范围排除。不要修改原目录，不要让页面直接引用其中的文件；选用图片须复制到正式资源目录并记录来源。移走这个目录不会影响运行页面或封面生成流程。本次核对的四种货币图标与 `Craft of Survival/wiki-assets/icons/` 中现有副本完全一致，页面直接复用这些独立图片，没有重复引入原目录。

详细维护说明见 [Craft of Survival](Craft%20of%20Survival/README.md)、[Day R Survival](Day%20R%20Survival/README.md)、[Westland Survival](Westland%20Survival/README.md)、[Dawn of Zombies](DawnofZombiewiki/README.md)、[Last Day on Earth](LDOE_Wiki/README.md)、[Grim Soul](grimsoul_Wiki/README.md)。各游戏校验清单保留拆分前后的资料和图片摘要，可用于确认素材完整性。

### 更新 Dawn of Zombies 资料

以 `DawnofZombiewiki/data/` 内的 JSON 为维护源，图片按分类保存在 `assets/images/`；布局、交互和数据分开维护。更新资料后运行：

```sh
python DawnofZombiewiki/tools/update_data.py
python DawnofZombiewiki/tools/verify_package.py --data-only
```

第一个命令从已清理的维护 JSON 同步首页摘要、内容哈希分片与收录统计，不会改动维护 JSON 或图片。需要同时重建中文 CSV 和 Markdown 指南时使用 `update_data.py --exports`，查看文件差异后提交。详细目录职责、导出差异和新增图片流程见 [Dawn 维护说明](DawnofZombiewiki/README.md)。发布工作流会校验各游戏的资料一致性及原图完整性。加载边界、生成和性能核验方式见 [按需加载说明](docs/loading.md)。

### 更新 Last Day on Earth 资料

`LDOE_Wiki/data/catalog.js` 与 `world.js` 是玩家资料维护源，分类摘要和详情分片由工具生成。更新资料后执行：

```sh
python LDOE_Wiki/tools/update_data.py
python LDOE_Wiki/tools/verify_data.py
```

完整维护库和工具不进入发布包，首屏、分类、详情与搜索分别读取对应数据。数值、配方关联、稳定 ID 与原图均有完整性检查；详见 [LDOE 维护说明](LDOE_Wiki/README.md)。

### 更新 Grim Soul 资料

`grimsoul_Wiki/assets/data.js` 是完整的玩家资料维护源；页面只引用生成后的摘要与分片。更新后执行：

```sh
python grimsoul_Wiki/tools/update_data.py
python grimsoul_Wiki/tools/verify_data.py
```

稳定 ID、资料顺序、所有属性与章节、关联条目以及原图均需保留。完整维护库和工具不进入 Pages 发布包；详细职责见 [Grim Soul 维护说明](grimsoul_Wiki/README.md)。

## 检查与发布预览

安装 Node.js 后，在项目根目录运行：

```sh
node scripts/check-site.mjs
node scripts/test-bubble-physics.cjs
node scripts/test-site-stats.mjs
node scripts/test-entity-code.mjs
node scripts/test-site-security.mjs
node scripts/test-asset-versions.mjs
node scripts/test-public-files.mjs
node scripts/test-player-data-policy.mjs
node scripts/check-player-data.mjs
python DawnofZombiewiki/tools/verify_package.py --data-only
python LDOE_Wiki/tools/verify_data.py
python grimsoul_Wiki/tools/verify_data.py
```

检查包含统一游戏配置、入口文件、相对链接、CSS 资源、全部 JavaScript 语法、外置图像路径、Dawn 玩家下载及图片映射、Westland、LDOE 与 Grim Soul 按需数据块、各 Wiki 的完整切换导航。它不会访问外部链接，也不会代替浏览器中的拖动、长按、搜索、键盘与移动端验证。

本地预览直接使用仓库源码，无需复制整站：

```sh
python -m http.server 4173 --bind 127.0.0.1
```

打开 <http://127.0.0.1:4173/>。常规检查直接运行上面的源码检查命令；GitHub Actions 会在临时运行环境中生成并验证 `_site`，再上传正式发布文件。本地如确需核验发布副本，应使用临时目录，并在检查结束后清除，不保留多份预览或历史打包目录。

### 可选：浏览器交互检查

本机需要 Python 和已安装的 Google Chrome。安装可选开发依赖后运行：

```sh
python -m pip install playwright
python scripts/test-portal.py
python scripts/test-music.py
python scripts/test-wiki-nav.py
python scripts/test-dawn.py
python scripts/test-ldoe.py
python scripts/test-grim.py
```

脚本启动独立的无头浏览器和临时本地 HTTP 服务。`test-music.py` 检查自动启播、手动静音、三乐章衔接与连续导航；`test-wiki-nav.py` 检查九个 Wiki 资料入口（含 Westland 难度分析页）的手机菜单位置、滚动、旋转和链接点击。`test-portal.py` 检查主页拖动、手机布局、搜索与跨游戏导航；`test-dawn.py` 检查 Dawn 栏目、收藏、对比、下载、快速切页、键盘操作及离线打开；`test-ldoe.py` 检查 LDOE 分类、详情、配方数量、收藏、比较、手机操作与加载失败重试；`test-grim.py` 检查 Grim Soul 各分类、完整详情、关联、搜索、收藏、手机和离线浏览。可通过环境变量 `LCZ_BROWSER` 指定本机其他可用的 Chromium 浏览器 channel，默认值为 `chrome`。这些依赖仅用于开发验证，网站发布不需要安装。

验证结果默认输出到终端，不保存截图或 JSON 报告；测试必需的临时文件在退出时清理。只有明确需要保留诊断结果时才设置 `LCZ_TEST_OUTPUT` 指定输出目录，用完后删除。不要积累 `.verification/`、整站预览副本或一次性检查文件。
