# Day R Survival 废土档案

入口是 `wiki_dayR.html`。本文件夹与仓库根目录的 `assets/` 一起上传即可使用；也可直接打开 HTML。页面无需构建、数据库或第三方 CDN。

## 文件结构

```text
wiki_dayR.html                    页面入口
wiki-assets/
  css/wiki.css                   页面与手机样式
  js/wiki-app.js                 搜索、筛选、分页、详情与收藏
  data/meta.js                   公开版本和资料范围
  data/items.js                  2,157 条物品（含 324 件武器）
  data/monsters.js               2,643 条战斗单位，进入相关功能时才加载
  data/lazy-manifest.js          已知怪物 ID、总数和内容版本
  data/image-index.js            图片标识与本地文件映射
  images/                       2,008 张 PNG 与 hero.jpg
  asset-manifest.json            玩家数据与图片 SHA-256 校验基线
  tools/validate_assets.py       数据边界、图片、引用及脚本语法校验
```

图片保持原始字节，没有有损重编码；浏览器按需加载并独立缓存。

## 数据与路径约定

HTML 顺序加载 `meta.js`、`items.js`、`lazy-manifest.js`、`image-index.js`，最后加载 `wiki-app.js`。怪物资料仅在打开怪物分类、含怪物的收藏或怪物详情链接时加载；普通物品搜索和武器分类不会提前下载怪物资料。已知 ID 清单让收藏在尚未加载怪物时仍能正确保留。普通 JavaScript 赋值统一写入 `window.DAYR_DATA`，支持本地打开。条目每行一条，便于维护。

发布资料保留玩家名称、说明、分类、属性、攻击、掉落及图片关联。未用于页面的原始配置、函数引用、来源程序路径和模板、宠物配置副本已从数据文件删除，掉落中重复保存的原始记录也已移除。

稳定 `id` 用于详情链接、收藏、攻击与掉落关联，必须保持。物品 `id` 即原始游戏物品代码；战斗单位使用 `entityCode` 保存已逐条核对的原始单位代码。28 条历史单位的 Wiki `id` 带有 `__archive` 区分后缀，展示和复制时只使用真实 `entityCode`，绝不把这个网站后缀当成游戏代码。列表与详情在名称下方显示可复制的实体代码，搜索支持代码。图片标识用于 `image-index.js` 查找；清单中的 `source` 是这项映射的键，并非源程序路径。图片索引中的 `wiki-assets/images/...` 相对于 `wiki_dayR.html`，不是相对于脚本。LCZ 共享导航从 `../assets/` 加载。

## 修改与校验

- 视觉修改放在 `css/wiki.css`，交互修改放在 `js/wiki-app.js`。
- 更新条目时保留稳定 ID、玩家数值及名称解释；不要重新加入原始配置、函数引用或来源程序信息。
- 新图片放到 `images/` 并更新 `data/image-index.js`，不要嵌入 base64。
- 新增字段先确认玩家用途，再更新白名单。更新基线前逐字段审阅名称、数值、攻击、掉落数量和图片关联；不得仅覆盖摘要使检查通过。

修改怪物资料后，先更新按需清单。动态 URL 携带内容摘要，同一页面只加载一次，失败后可主动重试；快速切换分类不会被较晚的响应覆盖。没有定时预载，普通脚本加载继续支持本地 `file://`。

```powershell
python "Day R Survival/wiki-assets/tools/generate_lazy.py"
python "Day R Survival/wiki-assets/tools/generate_lazy.py" --check
python "Day R Survival/wiki-assets/tools/validate_assets.py"
```

需要 Python 3.9+ 与 Node.js。校验会检查字段白名单、递归拦截内部来源字段和函数文本，分别核对两类玩家记录和整份数据摘要，并检查全部 2,009 个图片文件的原始大小及 SHA-256、图片映射、本地引用和脚本语法。浏览器另行验证搜索、收藏、详情、关联条目和手机布局。

清理时已从修改前快照逐字段确认所有保留资料完全相等，图片全部逐字节一致；本地验证仅输出终端结果；必需的临时文件在检查结束后清理，不积累预览副本、截图或报告。新的摘要对应已清理的玩家数据，不再要求恢复被删除的原始配置。

本资料是用户提供游戏素材的非官方整理，版本为 1.913.1.5。游戏名称、文本和美术归原权利方所有。历史或活动条目不代表当前全部可获取。
