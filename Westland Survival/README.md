# Westland Survival 资料与设计实验

这里保留三个独立入口，主页和文件名不变：

| 页面 | 用途 |
| --- | --- |
| `westland_wiki.html` | 物品、宠物、技能、外观百科 |
| `westland_difficulty_design.html` | 难度规则、装备推演、配装对战与 3D 试装 |
| `基地.html` | 随机基地设计提案和交互演示 |

全部页面通过顶部 ORBIT 导航返回星空，或在三个 Westland 页面间切换。设计实验属于网页演示，原有来源说明和模型边界保留。

## 文件结构

```text
wiki-assets/
  wiki/
    wiki.css                 # 百科样式
    app.js                   # 搜索、筛选、目录、详情交互
    runtime.js               # 按需加载详情块与可见图片
    data/
      index.js               # 初始目录数据
      images.js              # 原 image_key → 本地图片路径
      chunks/*.js            # 105 个详情数据块，打开详情时才加载
  lab/
    design.css               # 难度设计页面样式
    loadout.css              # 配装实验室样式
    theme-controller.js      # 主题切换
    design-controller.js     # 难度与装备推演
    loadout-lab-engine.js    # 对战计算模型
    loadout-lab-controller.js # 配装界面与实验操作
    loadout-avatar3d-engine.js # 原始网格的 WebGL 预览
    offline-textures.js       # 仅 file:// 使用的纹理兼容加载器
    data/
      equipment.js           # 225 件装备及 32 个属性名
      beasts.js              # 25 个动物变体与图像映射
      loadout.js             # 饰品、食物、技能与对战参数
      avatar.js              # 模型配置、材质、装备对应与来源
      avatar-meshes.js        # 237 个原始网格的二进制数组编码
      avatar-textures.js     # 173 个纹理的本地图片路径
      offline-textures.js    # 仅本地双击时按需加载的原始纹理数据
  base/
    base.css                 # 基地提案样式
    base-design-engine.js    # 地图生成与状态转换
    base-design-ui.js        # 基地界面与交互
  images/                    # 按图像原始字节 SHA-256 命名，共享去重
  asset-manifest.json         # 拆分前后数据和图像的校验记录，不参与页面运行
tools/
  extract_legacy.py           # 从原始自包含 HTML 导入
  verify_assets.py            # 验证外置数据与图像完整性
```

HTML 只负责内容结构和资源引入。样式、运行代码和数据分别维护，不再需要编辑数十 MB 的 HTML。数据文件是格式化的 JavaScript 对象赋值，使用经典脚本加载；不需要打包工具、框架、服务器接口或 `fetch()`。

## 本地预览与发布

可以直接双击 HTML。更接近公开站点的方式是在仓库根目录运行 `python -m http.server 4173`，然后打开 `http://localhost:4173/`。发布时保留 HTML、`wiki-assets` 和仓库根的 `assets/wiki-nav.*` 相对位置。

百科详情块按需加载，图片按可见范围加载。实验室在线使用独立 PNG 纹理；浏览器限制 `file://` 图片上传到 WebGL 时，会按需读取离线纹理数据，保留本地 3D 预览。在线访问不会请求这个离线副本。

## 修改与更新资料

修改页面文字可编辑相应 HTML；修改外观编辑对应 CSS；交互修改对应控制器或引擎。不要把大图、整库 JSON 或脚本重新粘贴回 HTML。

常规数据调整位于 `wiki-assets/*/data/`。保留数据文件的 `window.* = ...` 赋值结构、原始 ID 和 Wiki 目录 `_chunk` 引用；添加图片时用原始文件字节的 SHA-256 命名，并更新对应图像映射。3D 纹理更新同时更新离线纹理副本。

如果收到新版本的原始自包含 HTML，先将其放进另外一个目录，再从本目录执行：

```console
python tools/extract_legacy.py --source-dir PATH_TO_ORIGINAL_HTML_DIRECTORY
python tools/verify_assets.py
```

导入器刷新数据、图像和校验清单；已有的外置 HTML、CSS 与运行脚本都会保留，避免恢复旧版实体代码、路径和开发说明。只有尚不存在的界面文件才会从原始 HTML 建立。导入前应提交当前修改；若新资料改变字段或脚本结构，应显式调整展示适配并重新测试，不能直接覆盖现有玩家界面或混用不同版本。

`verify_assets.py` 根据导入时记录的 SHA-256，比对 110 个原始数据块的规范化 JSON、1,927 个图片引用的原始字节和 173 个离线纹理。1,927 个引用去重为 1,849 个图片文件。正常修改资料会改变来源指纹，应在核实更新来源后通过导入流程刷新记录，而不是忽略校验失败。

拆分保留了原始资料、来源字段、图像字节与各页面原有交互。资料来自用户提供的游戏素材，游戏文本和图片权利归原权利人所有。

## 玩家展示约定

页面只展示装备名称、属性、等级、概率、游戏版本与演算限制。实体标识、配置键、原始文件路径和来源校验值仅保存在数据与维护文件内，不渲染到卡片、列表、弹窗或辅助文本。缺少已核实名称时显示“名称待补充”或“未标注属性”，不猜测翻译。难度预览导出为可读文本；配装方案为支持保存和重新导入而保留结构化文件，其内部结构不在页面展示。
