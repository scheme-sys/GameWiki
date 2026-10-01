# 星空黄金树

主页正式背景素材，2026-10-01 使用内置 imagegen 生成。两张图仅做 WebP 格式转码（quality 84、method 6），没有裁切或缩放；原始生成 PNG 保留在生成工具的原始目录。

- `golden-tree.webp`：1536 × 1024，桌面及横屏构图。
- `golden-tree-mobile.webp`：1024 × 1536，以横屏原图为参考重新构图，用于宽度不超过 600px 的竖屏。
- `../golden-tree.css`：透明度、边缘消散、冷色雾层、光晕和光点。正式页面每次仅选择一张背景图。

## 横屏生成提示词

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
