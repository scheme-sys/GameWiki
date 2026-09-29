# 抓取与收录策略

本站按维护者意愿，向爬虫声明不抓取、不收录。实现仅增加静态声明，不增加玩家操作步骤，也不加入验证码、访问等待、禁复制、反调试或客户端限流。玩家仍可直接打开、搜索、拖动气泡、浏览资料和使用原有导入导出功能。

10 个公共入口及 404 页，共 11 个公开 HTML 页面均设置 `robots` 元信息，包含 `noindex`；覆盖主页、Craft Wiki、Day R Wiki、Westland Wiki、配装实验室、难度分析、基地规划页、Dawn 玩家百科、LDOE Wiki、Grim Soul Wiki 和 404 页。支持该声明的搜索引擎需要实际读取页面后才能处理它；这不是访问权限控制，也不能保证所有搜索引擎立即移除已收录的页面。[Google noindex 说明](https://developers.google.com/search/docs/crawling-indexing/block-indexing)

## robots.txt 的部署位置

仓库根 [robots.txt](../robots.txt) 声明 `User-agent: *`、`Disallow: /`。打包脚本会将它原样放到产物根目录。**只有部署为域名根路径 `/robots.txt` 时，它才是该域名的爬虫规则。** 当前项目地址中的 `/GameWiki/robots.txt` 或 `/LCZ-GameWiki/robots.txt` 不能替代 `https://scheme-sys.github.io/robots.txt`。[Google robots.txt 位置规则](https://developers.google.com/crawling/docs/robots-txt/create-robots-txt)

对于共享域名 `scheme-sys.github.io`，使用 [域名根规则模板](../deploy/domain-root-robots.txt)，把以下两条规则合并到该域名现有 `robots.txt` 的 `User-agent: *` 分组，并保留其他项目已有规则：

```text
Disallow: /GameWiki/
Disallow: /LCZ-GameWiki/
```

如果已有专门针对某个爬虫的分组，也需要检查该分组是否覆盖这两条路径，因为更具体的分组可能优先。**不要把本项目的 `Disallow: /` 直接复制到共享域名根目录**，否则会请求爬虫停止抓取同域下其他项目。

域名根站点通常由 `scheme-sys.github.io` 仓库发布；项目仓库本身不能修改这个位置。本仓库只提供模板，不自动创建该仓库、不修改它的发布设置，也不表示域名根规则已经部署。[GitHub Pages 站点类型](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

## 能力边界

`robots.txt` 依赖爬虫自愿遵守，不能阻止恶意采集或直接下载。即使抓取被禁止，搜索引擎也可能根据外部链接保留一个网址；并且域名根的 `Disallow` 生效后，爬虫可能无法读取页面中的 `noindex`。因此两种声明同时存在也不能保证既有搜索结果消失。处理已收录网址时，需要单独确认搜索引擎的移除流程或允许其读取 `noindex`，不能仅靠重复添加声明。[Google robots.txt 限制](https://developers.google.com/search/docs/crawling-indexing/robots/intro)、[Google noindex 的读取要求](https://developers.google.com/search/docs/crawling-indexing/block-indexing)

GitHub Pages 提供静态 HTML、CSS 和 JavaScript 托管，本项目没有可执行访问控制的服务端。页面脚本无法可靠识别爬虫，也无法按真实 IP 限制请求频率；关闭 JavaScript 或直接请求资源即可绕过客户端判断。公开仓库中的代码和数据仍可通过 GitHub 下载，Pages 域名的爬虫声明不会限制 GitHub 仓库或其他域名上的副本。这里的策略是声明拒绝抓取和收录，无法实现强制反采集。[GitHub Pages 静态托管说明](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

## 发布检查

运行 `node scripts/check-site.mjs --stage _site` 会打包存在的根 `robots.txt`，继续为 HTML 引用的本地 JavaScript/CSS 添加内容版本，并检查产物资源。Westland 难度分析 HTML 及其引用的本地资源随已登记的 Westland 游戏目录发布，无需在主页游戏目录或全站导航新增链接。开发文档、`deploy/` 模板和检查脚本不进入 Pages 产物；它们仍随公开仓库可见。运行 `node --test scripts/test-asset-versions.mjs` 可检查 robots 打包与模板排除，同时回归内容版本化行为。

## 页面安全策略

全部公开 HTML 页面在加载脚本之前声明 Content Security Policy（CSP），浏览器只执行本站脚本，阻止未授权的内联脚本、HTML 事件处理器以及动态字符串求值。404 页面需要在任意缺失路径下独立显示，其唯一内联脚本通过精确 SHA-256 授权；修改代码时须更新摘要并运行安全检查。

图片允许本站资源和页面现有的 data/blob 资源；网络请求只允许现有访问计数服务。限制外部脚本、插件、外站嵌入页面、Worker、表单提交及 base URL 改写。主页和 9 个资料页仅允许同源媒体及同源子页面，用于本地音频和保持播放的站内导航；404 继续禁用媒体与嵌入页面。导航另外校验固定项目路径白名单，涵盖上述 10 个公共入口，拒绝跨站地址、未知目录及下载文件。Westland 难度分析从配装实验室内部按钮进入，沿用相同的 CSP、统计与连续音乐导航限制。保留原有动态样式所需的样式权限，Craft 页面继续使用更严格的样式策略。页面还设置 no-referrer，外链请求不携带本站完整网址。

这些规则用于降低脚本注入与非预期资源加载风险，并不负责识别或阻止爬虫。本项目没有把需要 HTTP 响应头才能生效的 frame-ancestors、X-Frame-Options 或 Permissions-Policy 写成无效的 meta 标签，也未声称已经实施点击劫持防护、服务端限流或防火墙。[MDN CSP 说明](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP)

访问统计的公开 key 仍是参考计数，可能被外部修改；没有增加 API 密钥，也没有将任何凭据写入网页。详见[访问统计说明](visits.md)。

## 玩家体验与验证

不添加反调试循环、开发者工具检测、全站右键/复制拦截或人为延迟。主页气泡仅在触摸长按时抑制浏览器原生菜单，以显示原有游戏介绍；桌面右键菜单保持可用，Wiki 正文可正常选择与复制。

执行：

```sh
node scripts/test-site-security.mjs
node scripts/test-asset-versions.mjs
python scripts/test-portal.py
```

GitHub Actions 在发布前执行页面策略检查，防止新增页面遗漏禁收录声明或误放宽脚本权限。浏览器验证需覆盖已登记页面的正常加载及脚本注入阻断、主页拖动与长按、子页手机操作、配装导入导出、3D 纹理与本地文件打开。Dawn 玩家百科沿用同一策略；维护报告不进入发布产物。后续改变资源来源或添加新功能时，应重新核对 CSP，不能为了消除报错直接允许任意脚本来源。

## 发布数据的范围

当前游戏资料已去除未使用的游戏实现信息；页面仍需要玩家资料、图片、稳定关联 ID 及必要的渲染数据。发布工作流对维护源和最终产物分别执行 `node scripts/check-player-data.mjs`，检查已知函数引用、原始配置与技术来源标记，避免只隐藏界面而继续发送旧内容。各游戏的导入、生成及校验工具还执行各自的字段限制。具体规则与历史版本的边界见 [数据清理说明](player-data.md)。
