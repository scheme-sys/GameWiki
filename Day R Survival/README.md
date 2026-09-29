# Day R Survival 废土档案

入口是 `wiki_dayR.html`。整个文件夹与仓库根目录的 `assets/` 一起上传到静态网站即可使用；也可以直接双击 HTML 打开。页面不需要安装依赖、构建、数据库或第三方 CDN。

## 文件结构

```text
wiki_dayR.html                    页面结构、图标符号与资源入口
wiki-assets/
  css/wiki.css                   布局、主题与响应式样式
  js/wiki-app.js                 搜索、筛选、分页、详情与收藏
  data/meta.js                   版本、来源与提取说明
  data/items.js                  2,157 条物品（含 324 件武器）
  data/monsters.js               2,643 条战斗单位
  data/image-index.js            原始图片标识 → 本地图片相对路径
  images/                       2,008 张原始 PNG 与 hero.jpg
  asset-manifest.json            提取来源、数量与图片 SHA-256 校验基线
  tools/validate_assets.py       数据、图片、引用及脚本语法校验
```

图片按原始来源保留 `items/`、`battle/`、`interface/`、`ally_icons/`、`base_icon/` 子目录。素材逐字节提取，没有有损重编码。主页面原先约 36.14 MiB，现在约 10.7 KiB；图片在浏览器展示到对应卡片时按需加载并独立缓存。

## 加载与路径约定

HTML 顺序加载 `meta.js`、`items.js`、`monsters.js`、`image-index.js`，最后加载 `wiki-app.js`。数据文件是普通 JavaScript 赋值，统一写入 `window.DAYR_DATA`，因此 `file://` 打开也不受 `fetch()` 的跨域限制。每条记录占一行，便于按 ID 搜索、对比和更新；元数据及图片索引使用缩进排版。

图片索引中的 `wiki-assets/images/...` 路径均相对于 **`wiki_dayR.html` 所在目录**，不是相对于数据文件。保持整个 Day R 目录内部结构即可部署到 GitHub Pages 项目子路径。ORBIT 返回入口仍从 `../assets/wiki-nav.css` 与 `../assets/wiki-nav.js` 加载。

## 修改与更新

- 只调整视觉：修改 `css/wiki.css`。
- 调整交互：修改 `js/wiki-app.js`。
- 更新条目：在对应数据文件修改记录，保留稳定的 `id`、来源字段及未解析的原始数据。详情链接与收藏依赖这些 ID。
- 更新图片：放到 `images/` 对应目录，再更新 `data/image-index.js` 中的映射。不要重新嵌入 base64。
- 当前校验清单是从原始单文件提取时建立的基线。修改数据或图片后，先核对来源和变更，再相应更新数量、数据摘要或图片摘要；校验失败意味着内容偏离此基线，不应仅为了通过检查而覆盖基线。

在仓库根目录运行以下命令（需要 Python 3.9+ 和 Node.js）：

```powershell
python "Day R Survival/wiki-assets/tools/validate_assets.py"
```

校验会重建原始内嵌数据并核对整体 SHA-256，检查 2,009 个图片文件的字节数与摘要，确认全部本地页面资源存在，并对所有运行及数据脚本执行 `node --check`。搜索、收藏、弹窗与页面实际显示还应通过浏览器验证。

这是从用户提供安装包整理的非官方资料索引。版本、来源、缺失字段和权属说明保存在 `data/meta.js`，并继续显示在页面中。静态配置不代表所有条目当前都可获得。
