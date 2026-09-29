# 游戏应用图标来源

获取日期：2026-09-29。六个文件均来自对应游戏官方 Google Play 商店页面的应用图标，使用 Google 图片服务器提供的 512 × 512 WebP 版本，未重绘或合成。主页通过 CSS 显示为圆形，原始图标文件保持方形。

| 文件 | 游戏 / 商店开发者 | 官方商店页面 |
| --- | --- | --- |
| `dayr.webp` | Day R Survival: Last Survivor / Rmind Games | [Google Play](https://play.google.com/store/apps/details?hl=en_US&id=com.gm_shaber.dayr) |
| `craft.webp` | Craft of Survival - Gladiators / 101XP LIMITED | [Google Play](https://play.google.com/store/apps/details?hl=en_US&id=com.action.survival.craft.rpg) |
| `westland.webp` | Westland Survival: Cowboy Game / Helio Games | [Google Play](https://play.google.com/store/apps/details?hl=en_US&id=com.heliogames.westland) |
| `dawn.webp` | Dawn of Zombies: Survival / Royal Ark | [Google Play](https://play.google.com/store/apps/details?hl=zh_TW&id=com.survival.last) |
| `ldoe.webp` | Last Day on Earth: Survival / Kefir | [Google Play](https://play.google.com/store/apps/details?id=zombie.survival.craft.z&hl=en_US) |
| `grimsoul.webp` | Grim Soul: Dark Survival RPG / Brickworks Games Ltd | [Google Play](https://play.google.com/store/apps/details?id=fantasy.survival.game.rpg&hl=en_US) |

下载地址：

- [Day R 图标](https://play-lh.googleusercontent.com/bgWuNe-1S8XwY0HvfxcGVNVLm-QtIiWTZ595l4nzIJY4_XfvuMCd0MKoWajUvRTyYx53dVydVNPbN7k1j0dx2kE=s512-rw)
- [Craft of Survival 图标](https://play-lh.googleusercontent.com/2RUXk95JIPQQGrQNfynvCa7IO14OjaRtY6-3gOLwUJn1k51_1AG43eQoQ6uI3k4Z_ARPC3gNRcAVKAE15IHCqA=s512-rw)
- [Westland Survival 图标](https://play-lh.googleusercontent.com/8s9HBCUKCSt8PSrQ8rZL2LyiVB4xtazUbQYbua1YINqOs1TdycN8_IlZ3FfLPPyBOZGBF833qHpzMSk4hoHGyA=s512-rw)
- [Dawn of Zombies 图标](https://play-lh.googleusercontent.com/m6lYCyQyF_GT3CduschelZMLsT2cVi44QYHtic_BBPOhubaPdvyiAlje5b_Iv92Oc-E=s512-rw)

- [Last Day on Earth 图标](https://play-lh.googleusercontent.com/_dEeRX2npkXJsq4iZZer_WAHFSLCdybkMdYkDB3ltLBAtK6RxKovMPB238LP0u6k0CcM1whYeZsTbyWoY2W-=s512-rw)

- [Grim Soul 图标](https://play-lh.googleusercontent.com/N4VMTJ0nJAcXIhcOrlVLLx3JvZJqFouzSxVJDMXyBwfhVuh9D-I4-xHYakZeb7-IR7D8NHtOMPzyp-joEg4R=s512-rw)

SHA-256：

```text
dayr.webp     93b541ff2a8c74044555cb807a0f521068c1f4b63a961275a1ec2118abb1de1d
craft.webp    f733425c4719e5232a8fd26c6765ecdf51be537a985a789a649fbf8c46cd91e2
westland.webp 55396b317698d28251464b4bc475f5b0dbc85f038cad9705b0c5e3d818f37c00
dawn.webp     4ec391f89e140fc6fcbad36441b0b2d2898f676d92209d392cfbb25a8725d04b
ldoe.webp     648b6baa18b181ef7804443f0d3136ffe2361ff45c0ad0db892f96c556fd53ba
grimsoul.webp 1aff6089dc43113f51779ee36eea1e7bdfaa296a1feb86e90c76258fa09e76ec
```

游戏名称、商标和图标归各自权利人所有，用于非官方 Wiki 的游戏识别。主页引用本地文件，访问者无需连接 Google Play。

## 本站中文展示名

以下中文名称是为本站界面统一使用的展示名或译名，不替代游戏的官方英文名称，也不表示发行商确认了这些中文译名。

| 本站中文展示名 | 对应游戏英文名称 |
| --- | --- |
| 辐射生存 | Day R Survival |
| 生存工艺 | Craft of Survival |
| 西部世界 | Westland Survival |
| 地球末日生存 | Last Day on Earth |
| 冷酷灵魂 | Grim Soul |

“辐射生存”在本站专指 Rmind Games 的 Day R Survival。检索、资料关联与图标归属始终以对应英文名称和上方官方商店页面为准。
Dawn of Zombies 的本站中文展示名为“僵尸的黎明”：依据 [Royal Ark 官方 Google Play 繁体中文条目](https://play.google.com/store/apps/details?hl=zh_TW&id=com.survival.last)中的“殭屍的黎明：生存 (Dawn of Zombies)”，仅转为简体并省略副标题。该图标从此条目的应用图示链接获取，保留原始方形，显示时由主页统一裁为圆形。


## 主页显示副本

`display/` 是从上述官方原图生成的 WebP 显示副本，最大边长 384 像素，六图合计 134,698 字节。原图及其 SHA-256 保持不变，页面的圆形裁剪仍由 CSS 完成。

更新图标后运行 `python scripts/build-game-icons.py`（需要 Pillow），并将 `assets/games.js` 的 `image` 指向对应显示副本。生成器只缩小和编码，不重绘内容，也不覆盖原图。新增游戏时同时扩充生成器的名称列表。
