# 访问统计的范围与维护

主页和五个游戏资料页通过 `assets/site-stats.js` 共用公开在线计数器，样式在 `assets/site-stats.css`。点击或轻触导航中的“访问”数字可查看本站累计和当前页面的累计浏览次数。

## 统计范围

- 仅当页面来源为 `https://scheme-sys.github.io`、路径为 `/LCZ-GameWiki/` 下列出的六个页面时发送请求。本地 `file:`、localhost、其他项目、未知页面及预览域名不计数。
- `/LCZ-GameWiki/` 与 `/LCZ-GameWiki/index.html` 合并为同一个主页计数器。
- 每次新加载的可见页面，分别向项目总计数器和当前页面计数器发送一次增加请求。刷新会计数；返回浏览器保留的页面、切换搜索/筛选、改变 URL 锚点、重复执行脚本不会重复计数。
- 使用项目专用的固定 key，与 `scheme-sys.github.io` 下其他仓库的流量分离。页面身份来自允许列表，不包含搜索参数或锚点。
- 统计从首次部署此功能后开始，无法补算功能上线之前的访问量；显示的是页面浏览次数（PV），并非独立访客人数（UV）。

| 页面 | key 的页面部分 |
| --- | --- |
| 主页 | `page_home` |
| Craft 物品 Wiki | `page_craft` |
| Day R Wiki | `page_dayr` |
| Westland 物品 Wiki | `page_westland` |
| Westland 配装实验室 | `page_westland_lab` |
| Westland 基地设计 | `page_westland_base` |
| 上述页面总计 | `site` |

所有 key 共用 `scheme_sys_lcz_gamewiki_v1_` 前缀。保持前缀与 key 稳定，版本更新不会清零；修改 key 会创建一个新的计数器。

## 在线服务与限制

使用 Miles Hilliard 维护的 [CountAPI revival](https://countapi.mileshilliard.com/)（[原作者开源仓库](https://github.com/syntaxerror019/countapi)）。这是一个独立服务，并非已停服的 `countapi.xyz` 或 `counterapi.dev` V1。官方说明无需账号和 API 密钥，通过 `/api/v1/hit/<key>` 增加公开计数，通过 `/api/v1/get/<key>` 只读查询。

本项目只请求计数 JSON，不运行第三方脚本、不加载统计图片；请求使用 `credentials: "omit"` 与 `referrerPolicy: "no-referrer"`，不发送 Cookie、完整页面 URL、搜索词或 URL 锚点。服务仍会接收到网络请求通常包含的 IP 和 User-Agent 等信息。

这些数字仅作为玩家可见的参考：服务未承诺 SLA，key 是公开的，第三方可以通过公开接口改变它们，因此不能用于审计或商业结算。两个计数器的更新不是事务；断网或服务限流可能只成功一个，使总计与单页之和出现差异。屏蔽统计请求的浏览器不会被计入。

请求超时为 7 秒。离线、网络拦截、格式错误或服务故障时显示 `—`，已成功返回的计数可继续展示。不会用本地存储伪造数字，也不会自动重试增加请求，以免在响应丢失时重复计数。统计失败不阻塞 Wiki 加载或操作。

## 调整和添加页面

1. 改域名或项目目录时，更新 `assets/site-stats.js` 的 `DEPLOYMENT`。
2. 新增 Wiki 时，在 `PAGE_KEYS` 添加相对路径及稳定页面 key。
3. 在新页面引入 `site-stats.css` 和 `site-stats.js`，并放入 `<div class="site-stats" data-site-stats></div>`。
4. 如果页面设置了 CSP，`connect-src` 必须包含 `https://countapi.mileshilliard.com`，无需开放第三方 `script-src`。

统计代码在本地只显示预览状态。开发测试使用 `node scripts/test-site-stats.mjs` 的隔离响应，不对正式 key 发出 `hit` 请求。2026-09-29 核验服务官方文档、健康检查与只读示例 `/api/v1/get/my_counter`，确认 JSON 返回与 `https://scheme-sys.github.io` 的 CORS 响应；正式计数将在部署后由真实访客产生。
