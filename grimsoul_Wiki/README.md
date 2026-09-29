# Grim Soul · 冷酷灵魂

本目录是 LCZ 游戏 Wiki 集合中的「放逐者手记」，保留上传素材原有的深色金色主题与玩家资料。资料快照版本为 **8.4.1 / 2026-09-29**；不要根据其他版本推算、补造未确认的属性。

当前收录 **2,780 条**：物品 919、武器 265、装备 322、制作 454、地点 83、怪物与人物 210、技能 215、宠物 3、建筑 108、任务 95、生存手册 106。图片目录含 1,134 张图鉴图，另有封面与站点图标；全部保留原始字节。部分条目没有图片，页面继续显示「图像待补」。同名条目按原始 ID 保留。

## 文件职责

| 路径 | 用途 |
| --- | --- |
| `index.html` | 页面结构、共享导航、LCZ/QQ群入口、访问统计与安全策略 |
| `assets/wiki.css` | 原有金色主题、手机适配、直角详情弹框 |
| `assets/wiki.js` | 分类、筛选、排序、分页、全文搜索、详情、关联资料与收藏 |
| `assets/data.js` | 唯一完整的玩家资料维护源；不在页面首屏引用、不进入 Pages 发布包 |
| `assets/images/`、`assets/hero.webp`、`assets/favicon.svg` | 原始图片素材 |
| `data-loader.js` | 缓存与按需脚本读取，支持 HTTP 和本地 `file://` |
| `data/bootstrap.js` | 计数、稳定 ID 索引、首页 11 条摘要、分片清单；自动生成 |
| `data/lazy/` | 分类摘要、全文搜索、每 32 条的摘要与完整详情分片；自动生成 |
| `tools/update_data.py` | Python 标准库生成器，按内容哈希命名分片 |
| `tools/verify_data.py` | 校验资料结构、完整记录、生成文件和原图摘要 |
| `tools/image-sha256.json` | 图片字节校验基线；仅确认图片更新后接受新基线 |

页面首次打开只读取约 50 KB 的资料引导文件。点击某分类才读取该分类摘要；全文搜索首次使用时读取文本索引；详情和关联卡片按 32 条分组请求。已读取分片复用缓存，快速切换时迟到的请求不会覆盖新页面；加载失败显示重试按钮。图片使用浏览器懒加载。

完整详情保留原资料的所有属性、章节、行与关联 ID；代码不添加游戏内部实现字段。原版搜索范围为名称、中英文名、分类、摘要及章节标题/正文，继续保持此规则。分页每页 24 条，收藏沿用 `grim-soul-wiki-favorites-v1`，保存在当前浏览器。

## 更新资料

1. 编辑 `assets/data.js` 的 `window.WIKI_DATA` 对象。保留已发布条目的 `id`，更新条目时同时维护 `meta.counts`、`meta.total`、版本与日期。
2. 只写玩家可读内容：名称、说明、分类、品质、图片、属性、章节、关联资料。不要加入游戏函数、类名、提取工具路径或未使用的原始字段。新增字段必须先审核结构并更新生成器。
3. 从项目根目录执行：

```powershell
python grimsoul_Wiki/tools/update_data.py
python grimsoul_Wiki/tools/verify_data.py
node scripts/check-player-data.mjs
node scripts/check-site.mjs
```

生成器保留原记录顺序和内容，只删除 `data/lazy/` 中已经过期、符合生成命名格式的哈希脚本；不要手工修改 `data/bootstrap.js` 或分片内容。

若**确实更新了图片并人工确认**，再执行：

```powershell
python grimsoul_Wiki/tools/update_data.py --accept-images
python grimsoul_Wiki/tools/verify_data.py
```

可选浏览器回归（需 Python Playwright 与已安装的 Chrome；`LCZ_BROWSER=msedge` 可切换 Edge）：

```powershell
python scripts/test-grim.py
```

## 预览与发布

在项目根目录运行 `python -m http.server 8000`，访问 `http://localhost:8000/grimsoul_Wiki/index.html`。保留完整项目目录时也可以直接打开本页离线浏览；离线和本地预览不会发送访问统计请求。

通过项目根目录的 GitHub Actions 工作流发布 GitHub Pages，详见 [项目发布说明](../README.md)。工作流统一检查并打包六款游戏；不要单独把本目录设为 Pages 发布源。完整维护源、生成工具、测试和图片校验基线不会进入网页发布包。共享脚本和QQ群二维码位于根 `assets/`，要随站点共同发布。

深链接保持 `#entry/i0656`、`#category/weapons` 等原有格式。相对资源地址兼容仓库路径前缀，不需要将域名写入资料。
