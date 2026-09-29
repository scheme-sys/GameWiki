# 主页游戏介绍卡封面

这些 WebP 是各游戏封面的轻量展示副本，供主页气泡悬停或长按介绍卡按需读取；Craft 与 Westland Wiki 首页也共用相应封面。原图保持不变；生成过程只等比缩小、重新编码，不裁切、不重绘，也不放大较小的原图。实际展示区域的裁切位置由 `assets/games.js` 中各游戏的 `cover.position` 控制。

## 素材来源

| 展示文件 | 本地原图（相对项目根目录） | 来源与用途 | 输出尺寸 | 输出字节 |
| --- | --- | --- | --- | ---: |
| `dayr.webp` | `Day R Survival/wiki-assets/images/hero.jpg` | Day R Wiki 首页地图封面，`wiki-app.js` 的 `HERO_IMAGE` | 960 × 540 | 80,756 |
| `craft.webp` | `assets/game-covers/originals/craft.jpg` | 101XP 官方 Craft 游戏页面的独立横向封面：森林、弓箭英雄与不死怪物 | 1280 × 603 | 138,930 |
| `westland.webp` | `assets/game-covers/originals/westland.png` | Helio 官方 Westland 游戏页面的独立横向封面：峡谷、牛仔与马 | 1440 × 600 | 61,380 |
| `dawn.webp` | `DawnofZombiewiki/assets/images/页面背景/废土首页背景--98746bccec.png` | Dawn Wiki 首页废土封面，`data/asset-map.js` 的 `hero` | 960 × 502 | 58,200 |
| `ldoe.webp` | `LDOE_Wiki/assets/hero.webp` | LDOE Wiki 首页森林封面，`styles.css` 的 `.hero` 背景 | 960 × 960 | 42,536 |
| `grimsoul.webp` | `grimsoul_Wiki/assets/hero.webp` | Grim Soul Wiki 首页战士封面，`assets/wiki.css` 的 `.hero-art` 背景 | 960 × 540 | 69,284 |

六张展示副本合计 **451,086 字节**；对应原图合计 3,110,860 字节。主页初次打开不请求这些封面，首次打开对应游戏介绍卡时才加载。所有图片保存在本站，访问者不会因查看封面连接官方外站。其他四张复用用户提供的对应 Wiki 首页图片。

Craft 与 Westland 的独立封面于 2026-09-29 从官方游戏页面取得，保留下载原始字节，没有使用应用图标代替封面，也没有生成或重绘游戏画面：

- Craft：[101XP 官方游戏页](https://mobile.101xp.com/en/games/cos)，[原始图片](https://mobile.101xp.com/storage/app/media/COS/background_main_page_1.jpg)，1920 × 905 JPEG、389,051 字节。
- Westland：[Helio 官方游戏页](https://heliogames.com/westland-survival)，[官方页面引用的原始 CDN 图片](https://static.tildacdn.com/tild3039-3839-4361-b264-366236363264/island_survival.png)，1680 × 700 PNG、1,545,790 字节。

游戏画面、名称和商标归各自权利人所有，用于非官方游戏 Wiki 的游戏识别和资料展示。`originals/` 仅供维护和重新生成，发布文件白名单应只包含上表的六个展示副本，不应将原图加入 Pages 产物。

## 更新方式

在项目根目录运行（需要 Pillow）：

```text
python scripts/build-game-covers.py
```

生成参数为最长边 Craft 1280 像素、Westland 1440 像素、其他游戏 960 像素，Lanczos 缩放、WebP `quality=82`、`method=6`。相同 Pillow / WebP 编码器版本下可重复生成；编码器升级可能改变输出大小。增加或更换素材时，修改生成器的 `SOURCES`，更新 `assets/games.js` 的 `cover` 配置，并同步本表及下面的原图校验值。更换某款游戏的首页封面时，只需替换它的原图来源，其他游戏不受影响。

## 原图 SHA-256

```text
dayr      518535eb7dc1f16b21d52f725e45f911fb7490d0636a4c59cc660cb9e712576c
craft     3364e5e355fd62882d28d0e0c9673da62e39dcedfa32170652b1def34ebeb9b8
westland  36fa34750290b7005f768d12c166d5ecda3f3272ca6e5555529761052bc1de81
dawn      98746bccec23f1a8308dd8609bb56723778c08d2e33f97f4dd6deec9aae7c153
ldoe      a9445c8e7b991bbe03db4d01f7e72c83a0a583d23a97638ffd69e3f8d381f989
grimsoul  ccf2ada61bba0797c604e5206be7df3d2c8be671632b3f9771f07c70821ffa59
```
