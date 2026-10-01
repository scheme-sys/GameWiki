# 星空黄金树

主页正式背景素材，2026-10-01 使用内置 imagegen 生成。原有桌面和手机图仅做 WebP 格式转码（quality 84、method 6），没有裁切或缩放；原始生成 PNG 保留在生成工具的原始目录。

- `golden-tree.webp`：1536 × 1024，桌面及横屏构图。
- `golden-tree-mobile.webp`：1024 × 1536，以横屏原图为参考重新构图，用于宽度不超过 600px 的竖屏。
- `golden-tree-ultrawide.webp`：2172 × 724，3:1 带鱼屏专用构图。以原始横版 PNG 为参考，通过内置 imagegen 重新设计横展树冠、中央树干与两侧星云；仅转码为 WebP（quality 90、method 6），不裁切或放大。宽度至少 1280px、宽高比至少 2:1 时优先加载，兼顾 21:9 和 32:9。普通屏和手机仍使用原有画面。
- `golden-tree-detail.webp`：1536 × 1024，将原始横版 PNG 无损转码（lossless、method 6），解码像素与原 PNG 完全一致。宽度超过 1920px 且未命中带鱼屏构图时按需加载，保留原画细枝、星尘和渐变中被普通 WebP 压缩舍弃的细节。它仍受原图分辨率限制，不是插值放大或重新绘制的 4K 图。
- `../golden-tree.css`：透明度、边缘消散、冷色雾层、光晕和光点。正式页面每次仅选择一张背景图。

## 横屏生成提示词

带鱼屏版本的生成提示词见本文件末尾；工具实际输出为 2172 × 724，并非提示词请求的 3840 × 1280。

```text
Use case: stylized-concept
Asset type: production background artwork for an existing dark starfield game-Wiki homepage. Generate a wide landscape image, ideally 1536x1024 or higher, no interface or typography.
Primary request: An awe-inspiring celestial golden world tree, evoking the sublime scale and sacred golden luminosity of Elden Ring's Erdtree, dissolving into a deep midnight starfield. Extremely sophisticated, dreamlike, ethereal and richly detailed, with photographic cinematic atmosphere and exquisite organic branching.
Composition: One monumental living ancient tree. The trunk rises from the lower center (around 52% horizontal), gently twisting and dividing into magnificent arching boughs. Vast intricate open canopy spans most of the upper two-thirds of the frame, like a cathedral made of constellations. The tree is tall and enormous, seen from a far-away low viewpoint. Clearly legible strong tree silhouette but feathered, nebulous extremities. Long graceful asymmetric branches with thousands of fine twig filaments and sparse clusters of tiny luminous gold leaves. Many dark openings between boughs let the stars show through. Trunk has extraordinarily detailed interwoven bark illuminated by slender seams of molten old gold, not a solid white glowing pillar. Root tendrils disappear into bottom cosmic mist without any visible ground line. Entire form contained enough for a centered portrait crop to retain trunk and main crown. Dark breathing room in the four corners; topmost 10% kept relatively calm for navigation. Foreground game icons will sit at 20/50/80 percent width and roughly 33/73 percent height, so keep their surrounding atmosphere restrained.
Lighting/mood: profoundly majestic, hushed, mysterious. Pale champagne gold highlights, antique amber veins, subtle bronze shadows, deep desaturated blue-black and very faint indigo nebulae. Delicate volumetric halos behind branch junctions, veils of cool mist drifting in front of parts of the tree, tiny rising golden motes. Branch tips and leaf clusters gradually dissolve into individual stars and nebular dust, with no hard cutout edge. The tree should be visible and breathtaking without whitening the scene; the large majority of the image remains dark. Layered optical depth, finely etched visible details within luminous haze. Premium dark fantasy cinematic matte painting, realistic organic structure and atmospheric scattering, subtle fine grain.
Constraints: artwork only, no text, no lettering, no symbols, no UI, no borders, no watermark. No characters, buildings, landscape, mountains, horizon, planets, moons, giant circular halo or ring. No symmetrical fractal diagram, no flat vector look, no neon yellow, no orange fire, no solid ball of leaves, no overexposed crown, no opaque fog washing out the blacks.
```

## 竖屏重构提示词

输入：横屏生成原图。

```text
Use case: precise-object-edit. Asset type: mobile portrait companion background for a dark starfield website. Recompose the supplied golden celestial world-tree artwork to a tall portrait image, ideally 1024x1536. Preserve its identity, luxurious cinematic realism, intricate organically twisted bark, fine luminous antique-gold seams, delicate twigs and stardust leaves, blue-black nebulae and all its quiet sacred majesty. The entire tree must feel distant, tremendous and ethereal: include a wide crown clearly arching across the upper half of this vertical composition, centered narrowing trunk through the middle, and roots dissolving into blue mist in the lower fifth. Do NOT simply crop the wide image. Reimagine the same tree in a portrait composition so its sweeping main boughs and recognizable full tree shape remain visible on a phone. Add atmospheric depth: parts of distant branches softly dissolve into mist and stars, precise filament details within the haze. Keep the top 12 percent very dark for a navigation bar, bottom 12 percent fading almost entirely into midnight, both side edges soft and dark. Slightly lower overall tree brightness than the source; emphasize champagne gold vein highlights, no blown white center. Broad dark negative spaces between boughs for foreground game icons. Background is near #080d17, not pure black. No text, UI, decorative frame, lettering, symbols, ring halo, characters, landscape or horizon.
```

## 带鱼屏专用构图提示词

输入：原始横版 PNG；工具：内置 imagegen。以下为实际使用的完整提示词。

```text
Use case: precise-object-edit. Asset type: dedicated ULTRAWIDE panoramic desktop website background. Input image: existing golden celestial world tree, reference for its identity, colors, bark and dreamlike realism. RECOMPOSE it specifically for 21:9 and 32:9 monitors, do NOT enlarge or crop the old composition. OUTPUT AN EXTREMELY WIDE 3:1 PANORAMA, ideally 3840 x 1280 pixels at the highest supported native resolution. Width must be three times height. One monumental ancient sacred golden tree, intricate organically interwoven dark bark with champagne-gold veins, a magnificent low spreading canopy extending horizontally like a luminous cathedral, fine asymmetrical branches and sparse stardust leaves. The ENTIRE recognizable main tree silhouette must fit comfortably inside the image: crown peak around 18 percent height, roots dissolving into mist around 83 percent height, central trunk at 51 percent width. Strong trunk and main boughs must stay within the central 50 percent width, while delicate outer boughs dissolve through the outer 85 percent width. This framing is vital so a mild centered vertical crop for 32:9, or horizontal crop for 21:9, preserves a complete glorious tree. Full-height dark midnight-blue starfield on both sides, subtle sweeping blue nebula currents, pinprick silver-blue stars, a few almost imperceptible golden branch filaments connecting the tree to distant starlight. Asymmetric, immense, atmospheric, ethereal, mysterious, cinematic, highly luxurious dark fantasy realism. No horizon, terrain, buildings, characters, moons or planets. Topmost 12 percent and all four corners must be dark and calm. Header and six circular game badges will overlay the artwork at 20/50/80 percent width and about 28/74 percent height, so avoid huge bright highlights at those positions. Keep overall luminance comparable to the supplied image, slightly muted antique-gold glints against deep navy-black; delicate fog veils create depth but must not wash out detail. Fine crisp bark and filament details nestled in hazy atmosphere; no overexposed white tree or flat yellow mass. The tree should feel distant and colossal, not close-up, with elegant negative space around its entire silhouette. NO typography, symbols, UI, artificial connection lines, borders, letterboxing or watermark. A completely edge-to-edge extremely wide panorama, not a standard landscape image.
```
