# 访问统计的范围与维护

主页和八个游戏资料页共用 `assets/site-stats.js` 与 `assets/site-stats.css`。导航分别显示 **PV** 和 **IP**；点击或轻触可查看完整数字及统计口径。提示使用深色 CSS 弹层，不使用浏览器原生 `title`。

## 两个数字代表什么

- **浏览量 PV**：允许范围内的页面每次新加载并可见时记录一次浏览。刷新会计数。
- **IP访客**：第三方服务提供的、按其服务端 IP 口径去重的访客数。IP 不等于真实人数；共享网络可能共用 IP，网络变化也可能改变 IP。去重周期依服务口径，本站不宣称它是永久、精确的不同 IP 总数。

当前选择无需注册账号的 [busuanzi.cc 服务](https://www.busuanzi.cc/)。其[使用文档](https://www.busuanzi.cc/doc.php)将页面和站点 UV 描述为 IP 不变时只记录一个访客，并另列每日归零的今日数据；文档开头也有“同一天”口径。后端 PHP 未公开，因此无法独立核实跨日去重、代理识别或保留周期。本站只按服务定义展示，不将浏览器 Cookie、localStorage 或随机设备 ID 冒充不同 IP。

这是 busuanzi.cc 的接口，不是旧版 busuanzi.ibruce.info 或 soxft 的自建版本。后者官方说明使用 User-Agent + IP 和浏览器保存的签名身份，不符合本次纯 IP 口径的优先条件。

## 项目隔离与请求范围

仅当页面来源为 `https://scheme-sys.github.io`，且位于 `/GameWiki/` 或 `/LCZ-GameWiki/` 的明确允许路径时请求。两个路径是同一项目的兼容发布地址；其他仓库、未知页面、`404.html`、本地文件、localhost 和预览域名都显示 `—`，不会发请求。

| 页面 | 允许的相对路径 |
| --- | --- |
| 主页 | 空路径、`index.html` |
| Craft 物品 Wiki | `Craft of Survival/wiki.html` |
| Day R Wiki | `Day R Survival/wiki_dayR.html` |
| Westland 物品 Wiki | `Westland Survival/westland_wiki.html` |
| Westland 配装实验室 | `Westland Survival/westland_difficulty_design.html` |
| Westland 基地设计 | `Westland Survival/基地.html` |
| Dawn of Zombies Wiki | `DawnofZombiewiki/`、`DawnofZombiewiki/index.html` |
| Last Day on Earth Wiki | `LDOE_Wiki/`、`LDOE_Wiki/index.html` |
| Grim Soul Wiki | `grimsoul_Wiki/`、`grimsoul_Wiki/index.html` |

每个允许页面只向 `https://cdn.busuanzi.cc/api.php` 发送 **一次 POST**，使用同一个稳定的项目地址：

```json
{"url":"https://scheme-sys.github.io/LCZ-GameWiki/","referrer":""}
```

所有 LCZ 页面因此汇总到同一个页面统计桶。页面读取响应的 `busuanzi_page_pv` 和 `busuanzi_page_uv`，作为整个项目的 PV 和 IP访客；**不使用按域名汇总的 `site_*`**，避免混入同一 GitHub Pages 域名下其他仓库。这个方案不提供当前页面的单独计数，也不会用两次 POST 同时制造项目与单页记录。

URL 的实际页面路径、查询参数、搜索词、锚点和来源页面都不进入请求正文。客户端不查询访客 IP、不读取或保存身份令牌、不发送 Cookie；使用 `credentials: "omit"` 和 `referrerPolicy: "no-referrer"`。服务仍会接收到网络请求通常包含的 IP 与 User-Agent。页面只读取 JSON，不执行第三方脚本或加载统计图片。

隐藏或预渲染的页面等待首次可见后才计数；切换筛选、改变锚点、重复执行统计脚本、从浏览器保留的页面恢复不会重复计数。失败后不自动重试增加请求，以免响应丢失时重复记录。离线、超时、网络拦截、HTTP 错误或任一指标格式异常时，两个数字显示 `—`。请求限时 7 秒，统计结果不参与 Wiki 的启动或交互。

## 新计数起点与服务限制

此次由 CountAPI PV 切换到第三方提供的项目 PV / IP访客，**旧 CountAPI 浏览量无法迁移到这组统计，本版本不伪造或叠加旧数值**。新数字从该固定项目桶的服务记录起点累计，无法补算此前的 IP 访客。保持固定项目地址稳定可继续使用同一个桶；改变它会切换统计范围。

2026-09-29 已核对官方使用文档及 [3.6.9 官方脚本](https://cdn.busuanzi.cc/busuanzi/3.6.9/busuanzi.min.js)。只读 OPTIONS 检查返回 `Access-Control-Allow-Origin: *`，允许 POST；官方脚本使用 JSON 正文提交 URL。官网禁止本地主机、直接 IP 和超过 22 字符的域名；`scheme-sys.github.io` 符合公布的域名长度要求。

本次**没有向正式统计接口发送 POST，没有产生测试访问量，也尚未部署或验证真实线上 hit 的返回**。数据格式、失败处理和边界通过本地 mock 验证。上线后的可用性及去重结果依第三方服务；被浏览器拦截的请求不会被计入。接口和统计地址公开，数字仅作参考，不能作为审计或结算数据。

## 维护与验证

1. 新增页面时，将相对路径加入 `assets/site-stats.js` 的 `PAGE_PATHS`。
2. 更换实际域名或仓库路径时更新 `DEPLOYMENT.origin` 与 `basePaths`；`canonical` 决定统计桶，应审慎变更。
3. 页面引入共享统计 CSS/JS，并保留 `<div class="site-stats" data-site-stats></div>`。
4. CSP 的 `connect-src` 允许 `https://cdn.busuanzi.cc` 即可；无需开放第三方 `script-src`。
5. 运行 `node --test scripts/test-site-stats.mjs`。测试模拟响应，覆盖单次请求、两种部署路径、预览隔离、无查询/来源泄露、两个指标校验、隐藏首显、超时与失败。不要用正式 POST 做开发测试。

音乐开启后的连续导航：新展示的子页面仍按正常页面访问计数。含 `__lcz_page` 参数的恢复入口会隐藏外层页面，该外层不发送计数；只由实际显示的页面发送一次。栏目 hash 切换不会额外计数，查询参数仍不发送给统计服务。单元验证包含这个外层去重边界。
