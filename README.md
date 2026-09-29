# ORBIT · 游戏星图

一个可以拖动、探索的游戏 Wiki 入口：简洁的星空、三个游戏的官方应用图标，以及彼此连接的资料库。图标显示为圆形气泡，鼠标和触摸均可拖动；点击进入对应游戏，搜索和游戏档案提供另一种访问方式。

主页使用稀疏、静止的星空；气泡只随用户操作移动。游戏资料保持独立加载。整个项目是纯 HTML、CSS、JavaScript，无 npm 安装、构建步骤或后端依赖，可直接部署到 GitHub Pages。

## 已收录的世界

| 游戏 | 类型 | 页面 |
| --- | --- | --- |
| Craft of Survival | 暗黑奇幻 · 生存 | [物品 Wiki](Craft%20of%20Survival/wiki.html)，含 3,843 条物品资料、4 项货币资料及 1,189 个图标 |
| Day R Survival | 废土末日 · 生存 | [物品、武器与怪物档案](Day%20R%20Survival/wiki_dayR.html)，含 2,157 件物品与 2,643 个战斗单位 |
| Westland Survival | 西部冒险 · 生存 | [物品 Wiki](Westland%20Survival/westland_wiki.html)、[难度与配装实验室](Westland%20Survival/westland_difficulty_design.html)、[基地设计提案](Westland%20Survival/基地.html) |

游戏页面保留原有资料与功能，顶部提供返回星图的统一入口。主页图标来自各游戏官方 Google Play 商店页面，来源与文件摘要见 [assets/game-icons/README.md](assets/game-icons/README.md)。游戏名称、图标及相关资料归各自权利人所有；本站是非官方资料整理项目。

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

当前远程仓库为 [`scheme-sys/GameWiki`](https://github.com/scheme-sys/GameWiki)。启用并成功部署后的默认地址为：

**https://scheme-sys.github.io/GameWiki/**

站点使用相对资源路径，兼容 `/GameWiki/` 项目子目录。`404.html` 提供返回入口。工作流从 `assets/games.js` 自动读取需要发布的游戏目录，把静态文件整理到 `_site/`，检查资源与 JavaScript 后发布。

发布产物包含根入口、404 页面、`.nojekyll`，以及公共 `assets/` 和已登记游戏目录内的 HTML、CSS、JavaScript、图片与字体。README、开发脚本、来源 JSON 与校验清单保留在仓库，不包含在 Pages 产物中。当前运行数据通过普通 JavaScript 文件载入，不依赖 JSON 请求或第三方 CDN。

GitHub 的设置说明见[使用自定义工作流部署 Pages](https://docs.github.com/zh/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

## 页面与维护

```text
index.html                    星图页面结构与无 JavaScript 备用链接
404.html                      找不到页面时的返回入口
assets/games.js                统一游戏配置：名称、图标、分类、链接和初始位置
assets/portal.css              星图视觉、响应式布局与交互状态
assets/portal.js               读取游戏配置，处理拖动、搜索与游戏档案
assets/game-icons/             官方应用图标与来源记录
assets/wiki-nav.*              游戏页面的统一导航
Craft of Survival/           Wiki、样式、脚本、数据与图标
Day R Survival/wiki-assets/   分离的 css/、js/、data/、images/
Westland Survival/wiki-assets/ wiki/、lab/、base/ 与共享 images/
scripts/check-site.mjs         无依赖静态检查与发布打包
scripts/test-portal.py         可选的门户浏览器交互检查
.github/workflows/pages.yml    GitHub Pages 发布工作流
```

新增或调整游戏主要修改 `assets/games.js`。每个对象定义一个世界：`id` 保持稳定以兼容保存的位置；`image` 指向本地图标；`links` 定义百科和工具入口；`category` / `categoryLabel` 定义分类；`position` 和 `size` 控制初始布局。主页气泡、搜索和档案从同一份配置生成。

添加游戏时：

1. 把游戏页面及资源放进独立文件夹，保持页面内引用为相对路径。
2. 在 `assets/games.js` 复制一个现有对象，填写唯一 `id`、名称、简介、分类、图标和 `links`。路径相对于根目录 `index.html`。
3. 把应用图标放入 `assets/game-icons/`，补充可核验来源；圆形显示由 CSS 完成，不需要裁剪源文件。
4. 在新游戏页面加入统一导航。运行下方检查，再检查桌面、窄屏及触摸操作。发布目录会从 `links` 自动识别，无需修改工作流。

如需让新增游戏在禁用 JavaScript 时也有入口，可在 `index.html` 的 `noscript` 区域补充基础链接。

面向玩家的页面只展示可读名称、属性与玩法说明。内部 ID、资源路径及原始数据保留在资料文件中，不显示在卡片、表格、详情、提示文字里，也不作为缺失名称的替代；未翻译的名称应标注为待补充。已有收藏、关联查询和分享链接继续使用稳定的底层 ID。

各游戏的大图和数据库已独立于 HTML 存放。Day R 按原始分类保存图像，Westland 共享重复图片并按需加载百科详情块。调整布局只需编辑 CSS，调整交互编辑运行脚本，更新资料编辑 `data/`；不要把大图或整库数据重新嵌回 HTML。

详细维护说明见 [Craft of Survival](Craft%20of%20Survival/README.md)、[Day R Survival](Day%20R%20Survival/README.md)、[Westland Survival](Westland%20Survival/README.md)。各游戏校验清单保留拆分前后的资料和图片摘要，可用于确认素材完整性。

## 检查与发布预览

安装 Node.js 后，在项目根目录运行：

```sh
node scripts/check-site.mjs
```

检查包含统一游戏配置、入口文件、相对链接、CSS 资源、全部 JavaScript 语法、外置图像路径和 Westland 按需数据块。它不会访问外部链接，也不会代替浏览器中的拖动、搜索、键盘与移动端验证。

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
```

脚本启动独立的无头浏览器和临时本地 HTTP 服务，覆盖鼠标与触摸拖动、位置保存、键盘操作、搜索、多种视口及 `file://` 打开，并检查页面脚本错误。输出位于 `.verification/portal/`。可通过环境变量 `ORBIT_BROWSER` 指定本机其他可用的 Chromium 浏览器 channel，默认值为 `chrome`。这些依赖仅用于开发验证，网站发布不需要安装。