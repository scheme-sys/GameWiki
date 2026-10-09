# 访问统计的范围与维护

主页和九个游戏资料页共 10 个公共入口，共用 `assets/site-stats.js` 与 `assets/site-stats.css`。导航分别显示 **PV** 和 **IP**；点击或轻触可展开查看两个指标。弹层保留原有深色样式，不使用浏览器原生 `title`。

## 两个数字代表什么

- **浏览量 PV**：允许范围内的页面每次新加载并首次可见时向服务请求一次浏览计数。刷新会产生新请求。
- **IP访客**：沿用原有界面标签，显示 HitWebCounter 的 `type=ip` 独立访客计数。服务可能结合 IP 与短期 Cookie 去重，公开的去重窗口未知，因此不把它称为纯 IP 总数或真实人数。共享网络、网络变化及浏览器 Cookie 策略都可能影响去重结果。

当前使用 [HitWebCounter](https://www.hitwebcounter.com/) 的两个项目专用计数器：

| 指标 | 计数器 ID（`page`） | 类型（`type`） |
| --- | --- | --- |
| PV | `21522998` | `page` |
| IP访客 | `21523000` | `ip` |

所有允许页面共用这两个 ID，汇总整个项目的浏览量与独立访客，不提供当前页面的单独计数。其他项目不应复用这两个 ID。

## 项目隔离与请求范围

仅当页面来源为 `https://scheme-sys.github.io`，且位于 `/GameWiki/` 或 `/LCZ-GameWiki/` 的明确允许路径时请求。两个路径是同一项目的兼容发布地址；其他仓库、未知页面、`404.html`、本地文件、localhost 和预览域名都显示 `—`，不会发请求。

| 页面 | 允许的相对路径 |
| --- | --- |
| 主页 | 空路径、`index.html` |
| Craft 物品 Wiki | `Craft of Survival/wiki.html` |
| Day R Wiki | `Day R Survival/wiki_dayR.html` |
| Westland 物品 Wiki | `Westland Survival/westland_wiki.html` |
| Westland 配装实验室 | `Westland Survival/westland_difficulty_design.html` |
| Westland 难度分析 | `Westland Survival/westland_difficulty_analysis.html` |
| Westland 基地设计 | `Westland Survival/基地.html` |
| Dawn of Zombies Wiki | `DawnofZombiewiki/`、`DawnofZombiewiki/index.html` |
| Last Day on Earth Wiki | `LDOE_Wiki/`、`LDOE_Wiki/index.html` |
| Grim Soul Wiki | `grimsoul_Wiki/`、`grimsoul_Wiki/index.html` |

Westland 难度分析从配装实验室内部按钮进入，也计入同一个项目统计桶。主页和游戏切换菜单仍展示六款游戏，Westland 的全站导航仍为 Wiki、配装实验室、基地三项。

每个允许页面在首次可见且联网时，向 `https://www.hitwebcounter.com/counter/counter.php` 各发送一次 PV 与 IP **图片 GET**，合计两个请求。参数固定为对应的 `page`、`type`，以及 `style=0007&nbdigits=1`；`0007` 是黑字白底的普通数字样式。计数图片的地址公开，不能当作访问凭据。

脚本仅在本地核对当前页面的来源和路径是否在白名单内；实际页面地址、查询参数、搜索词、锚点和来源页面都不加入计数请求。图片设置 `referrerPolicy="no-referrer"`，不发送 Referer。客户端不查询访客 IP、不创建身份令牌或随机设备 ID；图片请求是否携带第三方 Cookie 由浏览器默认策略决定，不能宣称不发送 Cookie。服务仍会接收到请求通常包含的 IP 与 User-Agent。本站不执行第三方统计脚本。

每个指标只加载一张图片，导航摘要和展开面板通过 `canvas.drawImage` 复用已解码的图像，不因打开面板增加请求。SVG 滤镜去掉白底，并使用原有数值文字的颜色；字形由提供商图片决定。客户端不读取像素、不做 OCR、不导出图片，也不把结果解析为 JSON 数字或保存在本地缓存。两处都显示图片中的数字，不再使用“万”等缩写。图片方案无法提供具体数值的文本替代：屏幕阅读器可以读出指标名称、加载状态与故障提示，但不能读出计数。

隐藏或预渲染的页面等待首次可见后才计数；切换筛选、改变锚点、重复执行统计脚本、从浏览器保留的页面恢复不会重复计数。初始离线时不发送请求，恢复联网且页面可见后加载一次。已开始的请求没有 7 秒中止计时，也不自动重试，以免响应丢失时重复记录。两个指标独立处理：一个图片加载失败不会抹掉另一个已显示的数字，失败项保留 `—`。统计加载不阻塞 Wiki 的启动或交互。

## 新计数起点与服务限制

这两个 HitWebCounter 计数器从 **0** 创建，注册当天包含少量明确的接入验证请求。旧 busuanzi 历史数据无法读取，因此不能迁移或叠加到新计数，也不能补算此前的 IP访客。保持两个计数器 ID 稳定即可继续累计；改变 ID 会切换计数范围。

计数器的可用性和去重结果依第三方服务。请求未能到达服务时不会被记录；若服务已处理请求但图片未成功显示，页面无法据此判断该次访问是否已计入。公开计数地址也可能被外部请求，数字仅供参考，不能作为审计或结算数据。此文档描述仓库中的实现，不表示已经部署或完成全部线上验证。

## 维护与验证

1. 新增页面时，将相对路径加入 `assets/site-stats.js` 的 `PAGE_PATHS`。
2. 更换实际域名或仓库路径时更新 `DEPLOYMENT.origin` 与 `basePaths`；`COUNTERS` 中的两个 ID 决定项目计数范围，不应随部署路径变化而重建。
3. 页面引入共享统计 CSS/JS，并保留 `<div class="site-stats" data-site-stats></div>`。
4. 统计入口的 CSP 在 `img-src` 中保留 `'self' data: blob:` 并允许 `https://www.hitwebcounter.com`；`connect-src` 为 `'none'`，`script-src` 仍只允许 `'self'`。404 没有统计组件，不开放第三方图片。修改 Craft 页面的 CSP 时，同时更新 `Craft of Survival/package-validation.json` 中 `wiki.html` 的 UTF-8/LF 字节数和 SHA-256。
5. 运行 `node --test scripts/test-site-stats.mjs`，使用模拟图片事件核对请求次数、两种部署路径、预览隔离、无页面信息泄露、隐藏首显、初始离线恢复、独立失败与图像复用。安全策略使用 `node scripts/test-site-security.mjs` 检查。开发检查应模拟计数图片，不请求正式计数 URL；浏览器检查默认只输出终端结果，不设置 `LCZ_TEST_OUTPUT`。

音乐开启后的连续导航：新展示的子页面仍按正常页面访问计数。含 `__lcz_page` 参数的恢复入口会隐藏外层页面，该外层不发送计数；只由实际显示的页面各请求一次 PV 与 IP 图片。栏目 hash 切换不会额外计数，查询参数仍不发送给统计服务。
