// LCZ directory: edit game names, descriptions, icons, destinations and layouts here.
// Keep IDs stable. Chinese display names and icon sources: game-icons/README.md.
// ORBIT_GAMES remains an alias for the static publication validator.
window.LCZ_GAMES = window.ORBIT_GAMES = [
  {
    id: "dayr",
    nameZh: "辐射生存",
    name: "Day R Survival",
    image: "assets/game-icons/display/dayr.webp",
    cover: { image: "assets/game-covers/dayr.webp", position: "50% 50%" },
    color: "142,226,200",
    description: "穿越末日废土，搜集物资，规划下一段旅程。在这里查阅物品、武器与战斗单位，为每一次出发做好准备。",
    tags: ["物品图鉴", "武器资料", "战斗单位"],
    keywords: "day r dayr 辐射 生存 废土 末日 物品 武器 怪物 战斗 装备",
    size: 164,
    position: { desktop: [.20,.27], tablet: [.20,.26], mobile: [.25,.18], landscape: [.10,.32] },
    links: [{ title: "进入 Wiki", href: "Day%20R%20Survival/wiki_dayR.html" }]
  },
  {
    id: "craft",
    nameZh: "生存工艺",
    name: "Craft of Survival",
    image: "assets/game-icons/display/craft.webp",
    cover: { image: "assets/game-covers/craft.webp", position: "50% 45%" },
    color: "190,165,243",
    description: "探索奇幻世界中的装备与制作配方。从基础材料到冒险所需的物品，随时查找你的生存与制作资料。",
    tags: ["装备图鉴", "制作材料", "货币资料"],
    keywords: "craft of survival 生存工艺 奇幻 生存 制作 材料 物品 装备 货币",
    size: 152,
    position: { desktop: [.50,.23], tablet: [.50,.22], mobile: [.75,.20], landscape: [.26,.68] },
    links: [{ title: "进入 Wiki", href: "Craft%20of%20Survival/wiki.html" }]
  },
  {
    id: "westland",
    nameZh: "西部世界",
    name: "Westland Survival",
    image: "assets/game-icons/display/westland.webp",
    cover: { image: "assets/game-covers/westland.webp", position: "58% 45%" },
    color: "239,184,118",
    description: "前往西部荒野，查阅装备、宠物与技能。通过配装实验室比较战斗方案，也可以探索基地布局。",
    tags: ["装备与宠物", "配装实验室", "基地布局"],
    keywords: "westland survival 西部世界 西部 冒险 荒野 武器 装备 宠物 技能 基地 难度 配装 实验室 设计 提案",
    size: 160,
    position: { desktop: [.80,.29], tablet: [.80,.28], mobile: [.25,.50], landscape: [.42,.32] },
    links: [
      { title: "进入 Wiki", href: "Westland%20Survival/westland_wiki.html" },
      { title: "配装实验室", href: "Westland%20Survival/westland_difficulty_design.html" },
      { title: "基地布局", href: "Westland%20Survival/%E5%9F%BA%E5%9C%B0.html" }
    ]
  },
  {
    id: "dawn",
    nameZh: "僵尸的黎明",
    name: "Dawn of Zombies",
    image: "assets/game-icons/display/dawn.webp",
    cover: { image: "assets/game-covers/dawn.webp", position: "45% 40%" },
    color: "132,192,223",
    description: "在灾变后的世界寻找生机。查阅武器、防具、随从与地图，整理制作配方和任务线索，为探索危险区域做好准备。",
    tags: ["武器与防具", "地图与任务", "制作与指南"],
    keywords: "dawn of zombies doz 僵尸的黎明 僵尸黎明 末日 生存 武器 防具 随从 地图 任务 配方 技能 攻略",
    size: 156,
    position: { desktop: [.20,.72], tablet: [.20,.72], mobile: [.75,.52], landscape: [.58,.68] },
    links: [{ title: "进入 Wiki", href: "DawnofZombiewiki/index.html" }]
  },
  {
    id: "ldoe",
    nameZh: "地球末日生存",
    name: "Last Day on Earth",
    image: "assets/game-icons/display/ldoe.webp",
    cover: { image: "assets/game-covers/ldoe.webp", position: "50% 47%" },
    color: "177,198,145",
    description: "在末日世界搜集物资、建造庇护所。查阅武器装备、生物与探索地点，计算制作和维修所需材料，为下一次出发做好准备。",
    tags: ["武器与装备", "生物与地点", "制作与维修"],
    keywords: "last day on earth survival ldoe 地球末日生存 地球末日 末日 废土 生存 武器 护甲 背包 装备 材料 生物 怪物 地点 制作 配方 维修 对比",
    size: 156,
    position: { desktop: [.50,.76], tablet: [.50,.76], mobile: [.25,.82], landscape: [.74,.32] },
    links: [{ title: "进入 Wiki", href: "LDOE_Wiki/index.html" }]
  },
  {
    id: "grimsoul",
    nameZh: "冷酷灵魂",
    name: "Grim Soul",
    image: "assets/game-icons/display/grimsoul.webp",
    cover: { image: "assets/game-covers/grimsoul.webp", position: "58% 42%" },
    color: "195,170,127",
    description: "踏入迷雾笼罩的瘟疫之地，查阅武器装备、怪物与制作资料。整理资源、探索地点与生存手册，为下一次远行做好准备。",
    tags: ["武器与装备", "怪物与探索", "制作与手册"],
    keywords: "grim soul grimsoul 冷酷灵魂 黑暗幻想 暗黑 生存 瘟疫 武器 装备 怪物 人物 资源 制作 配方 地点 宠物 坐骑 技能 建筑 任务 攻略",
    size: 156,
    position: { desktop: [.80,.70], tablet: [.80,.70], mobile: [.75,.84], landscape: [.90,.68] },
    links: [{ title: "进入 Wiki", href: "grimsoul_Wiki/index.html" }]
  }
];
