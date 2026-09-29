/* Game archive data. See ../README.md for update instructions. */
window.WESTLAND_LAB_DATA = window.WESTLAND_LAB_DATA || {};
window.WESTLAND_LAB_DATA.loadout = {
  "schema": "WLO-LOADOUT-LAB-DATA-1",
  "sourceEvidence": [
    {
      "description": "游戏 12.0.1 的 R14 原始配置，经现有 SHA-256 锁校验后抽取；不使用宠物面板替代野怪数值。",
      "path": "westland offline version 1.5.2\\Westland-Offline-1.5.2.apk",
      "r14Sha256": "e0d8be8dbd0c829ea71f2a95a20cce051a37ca08b41293ed44f5302b856d42e7",
      "r14Bytes": 43702676
    },
    {
      "description": "玩家原始生命为 200，角色等级生命增量为 10；面板默认使用基础等级，并允许手调生命。",
      "path": "R14 avatars/player + weapons/fist"
    },
    {
      "description": "饰品随机词条 default=0 的位置保留 0，不把随机上限冒充默认值。",
      "path": "offline-prototype\\research\\r14_equipment_catalog.json",
      "sha256": "7bc99d781c574268f952193f4d386f6041e319e308cd85488a529a76ace357da"
    },
    {
      "description": "动物严格选取 1.6.0 动态范围内有官方图像的 25 个真实 avatar，不用宠物 stats 代替。",
      "path": "offline-prototype\\native-active-v160-difficulty-release\\generated\\difficulty_scope_audit.json",
      "sha256": "3aef369d98358aa525728dadf275cf9fc1f3a7100e9005724166da87dc794580"
    }
  ],
  "playerDefaults": {
    "health": 200,
    "healthPerCharacterLevel": 10,
    "damage": 10,
    "armor": 0,
    "resistance": 0,
    "strength": 0,
    "stamina": 0,
    "dexterity": 0,
    "wisdom": 0,
    "attackSpeed": 1.25,
    "moveSpeed": 4,
    "range": 1,
    "evidence": "avatars/player + weapons/fist; level bonus not pre-applied"
  },
  "battleConstants": {
    "absorb_constant": 100,
    "critical_weapon_damage_modifier": 1,
    "armor_tags": {
      "head": {
        "damage_piece": 0.25
      },
      "chest": {
        "damage_piece": 0.25
      },
      "legs": {
        "damage_piece": 0.25
      },
      "boots": {
        "damage_piece": 0.25
      }
    },
    "typed_resistance_tags": {
      "trinket": {},
      "weapon": {},
      "backpack": {}
    },
    "speed_pow": 0.86,
    "speed_mul": 1,
    "critical_damage_tags": [
      "melee",
      "bow"
    ],
    "mosquito": {
      "effects": [
        {
          "value": 50,
          "healing_modifier": 0.5
        },
        {
          "value": 80,
          "healing_modifier": 0.25
        }
      ]
    },
    "minimum_pressure_multiplier": 0.5,
    "health_lost_damage_modifier_step": 0.1,
    "avatar_damage_modifier_by_tier_from_non_pet_non_ghost_anyone_to_animal": {
      "3": 0.1,
      "4": 0.3,
      "5": 0.55,
      "6": 0.8,
      "7": 1.2
    },
    "avatar_damage_modifier_by_tier_from_non_pet_non_ghost_animal_to_bandit": {
      "3": 0.1,
      "4": 0.3,
      "5": 0.55,
      "6": 0.8,
      "7": 1.2
    }
  },
  "healSystem": {
    "tick_rate": 10,
    "heal_period": 1.1,
    "heal_time": 3.3
  },
  "accessories": [
    {
      "id": "wls2_armor_neck_1",
      "name": "学徒护身符",
      "en": "Amulet of the Apprentice",
      "category": "accessory",
      "sub": "amulet",
      "tier": 3,
      "rarity": "common",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 3
        },
        "stamina": {
          "default": 0,
          "max": 3
        },
        "strength": {
          "default": 0,
          "max": 3
        },
        "wisdom": {
          "default": 0,
          "max": 3
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_neck_1.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_neck_1",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_neck_10",
      "name": "风暴护身符",
      "en": "Amulet of Tempest",
      "category": "accessory",
      "sub": "amulet",
      "tier": 5,
      "rarity": "epic",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 999
        },
        "stamina": {
          "default": 0,
          "max": 999
        },
        "strength": {
          "default": 0,
          "max": 999
        },
        "wisdom": {
          "default": 0,
          "max": 999
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_neck_10.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_neck_10",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_neck_2",
      "name": "门徒护身符",
      "en": "Amulet of the Disciple",
      "category": "accessory",
      "sub": "amulet",
      "tier": 3,
      "rarity": "common",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 4
        },
        "stamina": {
          "default": 0,
          "max": 4
        },
        "strength": {
          "default": 0,
          "max": 4
        },
        "wisdom": {
          "default": 0,
          "max": 4
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_neck_2.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_neck_2",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_neck_3",
      "name": "魔法师护身符",
      "en": "Amulet of the Enchanter",
      "category": "accessory",
      "sub": "amulet",
      "tier": 3,
      "rarity": "uncommon",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 5
        },
        "stamina": {
          "default": 0,
          "max": 5
        },
        "strength": {
          "default": 0,
          "max": 5
        },
        "wisdom": {
          "default": 0,
          "max": 5
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_neck_3.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_neck_3",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_neck_4",
      "name": "草药师护身符",
      "en": "Amulet of the Herbalist",
      "category": "accessory",
      "sub": "amulet",
      "tier": 3,
      "rarity": "uncommon",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 6
        },
        "stamina": {
          "default": 0,
          "max": 6
        },
        "strength": {
          "default": 0,
          "max": 6
        },
        "wisdom": {
          "default": 0,
          "max": 6
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_neck_4.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_neck_4",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_neck_5",
      "name": "猎人护身符",
      "en": "Amulet of the Hunter",
      "category": "accessory",
      "sub": "amulet",
      "tier": 4,
      "rarity": "common",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 7
        },
        "stamina": {
          "default": 0,
          "max": 7
        },
        "strength": {
          "default": 0,
          "max": 7
        },
        "wisdom": {
          "default": 0,
          "max": 7
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_neck_5.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_neck_5",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_neck_6",
      "name": "战士护身符",
      "en": "Amulet of the Warrior",
      "category": "accessory",
      "sub": "amulet",
      "tier": 4,
      "rarity": "common",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 8
        },
        "stamina": {
          "default": 0,
          "max": 8
        },
        "strength": {
          "default": 0,
          "max": 8
        },
        "wisdom": {
          "default": 0,
          "max": 8
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_neck_6.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_neck_6",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_neck_7",
      "name": "萨满护身符",
      "en": "Amulet of the Shaman",
      "category": "accessory",
      "sub": "amulet",
      "tier": 4,
      "rarity": "uncommon",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 9
        },
        "stamina": {
          "default": 0,
          "max": 9
        },
        "strength": {
          "default": 0,
          "max": 9
        },
        "wisdom": {
          "default": 0,
          "max": 9
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_neck_7.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_neck_7",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_neck_8",
      "name": "酋长护身符",
      "en": "Amulet of the Chieftain",
      "category": "accessory",
      "sub": "amulet",
      "tier": 4,
      "rarity": "rare",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 10
        },
        "stamina": {
          "default": 0,
          "max": 10
        },
        "strength": {
          "default": 0,
          "max": 10
        },
        "wisdom": {
          "default": 0,
          "max": 10
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_neck_8.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_neck_8",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_neck_9",
      "name": "守护者护身符",
      "en": "Amulet of the Guardian",
      "category": "accessory",
      "sub": "amulet",
      "tier": 5,
      "rarity": "rare",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 15
        },
        "stamina": {
          "default": 0,
          "max": 15
        },
        "strength": {
          "default": 0,
          "max": 15
        },
        "wisdom": {
          "default": 0,
          "max": 15
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_neck_9.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_neck_9",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_1",
      "name": "学徒之戒",
      "en": "Ring of the Apprentice",
      "category": "accessory",
      "sub": "ring",
      "tier": 3,
      "rarity": "common",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 3
        },
        "stamina": {
          "default": 0,
          "max": 3
        },
        "strength": {
          "default": 0,
          "max": 3
        },
        "wisdom": {
          "default": 0,
          "max": 3
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_1.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_1",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_10",
      "name": "风暴指环",
      "en": "Ring of Tempest",
      "category": "accessory",
      "sub": "ring",
      "tier": 5,
      "rarity": "epic",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 999
        },
        "stamina": {
          "default": 0,
          "max": 999
        },
        "strength": {
          "default": 0,
          "max": 999
        },
        "wisdom": {
          "default": 0,
          "max": 999
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_10.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_10",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_2",
      "name": "门徒指环",
      "en": "Ring of the Disciple",
      "category": "accessory",
      "sub": "ring",
      "tier": 3,
      "rarity": "common",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 4
        },
        "stamina": {
          "default": 0,
          "max": 4
        },
        "strength": {
          "default": 0,
          "max": 4
        },
        "wisdom": {
          "default": 0,
          "max": 4
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_2.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_2",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_3",
      "name": "魔法师指环",
      "en": "Ring of the Enchanter",
      "category": "accessory",
      "sub": "ring",
      "tier": 3,
      "rarity": "uncommon",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 5
        },
        "stamina": {
          "default": 0,
          "max": 5
        },
        "strength": {
          "default": 0,
          "max": 5
        },
        "wisdom": {
          "default": 0,
          "max": 5
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_3.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_3",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_4",
      "name": "草药商之戒",
      "en": "Ring of the Herbalist",
      "category": "accessory",
      "sub": "ring",
      "tier": 3,
      "rarity": "uncommon",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 6
        },
        "stamina": {
          "default": 0,
          "max": 6
        },
        "strength": {
          "default": 0,
          "max": 6
        },
        "wisdom": {
          "default": 0,
          "max": 6
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_4.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_4",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_5",
      "name": "猎人之戒",
      "en": "Ring of the Hunter",
      "category": "accessory",
      "sub": "ring",
      "tier": 4,
      "rarity": "common",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 7
        },
        "stamina": {
          "default": 0,
          "max": 7
        },
        "strength": {
          "default": 0,
          "max": 7
        },
        "wisdom": {
          "default": 0,
          "max": 7
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_5.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_5",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_6",
      "name": "战士之戒",
      "en": "Ring of the Warrior",
      "category": "accessory",
      "sub": "ring",
      "tier": 4,
      "rarity": "common",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 8
        },
        "stamina": {
          "default": 0,
          "max": 8
        },
        "strength": {
          "default": 0,
          "max": 8
        },
        "wisdom": {
          "default": 0,
          "max": 8
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_6.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_6",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_7",
      "name": "巫师之戒",
      "en": "Ring of the Shaman",
      "category": "accessory",
      "sub": "ring",
      "tier": 4,
      "rarity": "uncommon",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 9
        },
        "stamina": {
          "default": 0,
          "max": 9
        },
        "strength": {
          "default": 0,
          "max": 9
        },
        "wisdom": {
          "default": 0,
          "max": 9
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_7.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_7",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_8",
      "name": "酋长之戒",
      "en": "Ring of the Chieftain",
      "category": "accessory",
      "sub": "ring",
      "tier": 4,
      "rarity": "rare",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 10
        },
        "stamina": {
          "default": 0,
          "max": 10
        },
        "strength": {
          "default": 0,
          "max": 10
        },
        "wisdom": {
          "default": 0,
          "max": 10
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_8.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_8",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_9",
      "name": "守护者指环",
      "en": "Ring of the Guardian",
      "category": "accessory",
      "sub": "ring",
      "tier": 5,
      "rarity": "rare",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 15
        },
        "stamina": {
          "default": 0,
          "max": 15
        },
        "strength": {
          "default": 0,
          "max": 15
        },
        "wisdom": {
          "default": 0,
          "max": 15
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_9.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_9",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_easter_penalty_resistnace_rare",
      "name": "前任魔术师的戒指",
      "en": "Former Illusionist's Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 4,
      "rarity": "common",
      "curves": {
        "death_penalty_reduction": {
          "default": 0.05
        },
        "firearm_resistance": {
          "default": 0.05
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_easter_penalty_resistnace_rare.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_easter_penalty_resistnace_rare",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_easter_penalty_uncommon",
      "name": "幸运戒指",
      "en": "Lucky Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 3,
      "rarity": "common",
      "curves": {
        "death_penalty_reduction": {
          "default": 0.05
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_easter_penalty_uncommon.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_easter_penalty_uncommon",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_easter_resistance_uncommon",
      "name": "猎鹿人戒指",
      "en": "Duck Shooter ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 3,
      "rarity": "rare",
      "curves": {
        "firearm_resistance": {
          "default": 0.05
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_easter_resistance_uncommon.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_easter_resistance_uncommon",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_easter_resistance_warm_rare",
      "name": "吞火者的戒指",
      "en": "Fire-Eater's Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 4,
      "rarity": "common",
      "curves": {
        "firearm_resistance": {
          "default": 0.05
        },
        "warm_modifier": {
          "default": 4
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_easter_resistance_warm_rare.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_easter_resistance_warm_rare",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_easter_warm_penalty_rare",
      "name": "烟花大师的戒指",
      "en": "Fireworks Master's Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 4,
      "rarity": "common",
      "curves": {
        "death_penalty_reduction": {
          "default": 0.05
        },
        "warm_modifier": {
          "default": 4
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_easter_warm_penalty_rare.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_easter_warm_penalty_rare",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_easter_warm_uncommon",
      "name": "狂欢节戒指",
      "en": "Carnival Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 3,
      "rarity": "common",
      "curves": {
        "warm_modifier": {
          "default": 4
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_easter_warm_uncommon.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_easter_warm_uncommon",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_halloween_21_penalty_resistnace_rare",
      "name": "前任魔术师的戒指",
      "en": "Former Illusionist's Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 4,
      "rarity": "rare",
      "curves": {
        "death_penalty_reduction": {
          "default": 0.05
        },
        "firearm_resistance": {
          "default": 0.05
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_21_penalty_resistnace_rare.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_halloween_21_penalty_resistnace_rare",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_halloween_21_penalty_uncommon",
      "name": "幸运戒指",
      "en": "Lucky Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 3,
      "rarity": "uncommon",
      "curves": {
        "death_penalty_reduction": {
          "default": 0.05
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_21_penalty_uncommon.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_halloween_21_penalty_uncommon",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_halloween_21_penalty_uncommon_weak",
      "name": "幸运戒指",
      "en": "Lucky Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 2,
      "rarity": "uncommon",
      "curves": {
        "death_penalty_reduction": {
          "default": 0.01
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_21_penalty_uncommon_weak.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_halloween_21_penalty_uncommon_weak",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_halloween_21_resistance_uncommon",
      "name": "猎鹿人戒指",
      "en": "Duck Shooter ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 3,
      "rarity": "uncommon",
      "curves": {
        "firearm_resistance": {
          "default": 0.05
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_21_resistance_uncommon.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_halloween_21_resistance_uncommon",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_halloween_21_resistance_uncommon_weak",
      "name": "猎鹿人戒指",
      "en": "Duck Shooter ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 2,
      "rarity": "uncommon",
      "curves": {
        "firearm_resistance": {
          "default": 0.01
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_21_resistance_uncommon_weak.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_halloween_21_resistance_uncommon_weak",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_halloween_21_resistance_warm_rare",
      "name": "吞火者的戒指",
      "en": "Fire-Eater's Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 4,
      "rarity": "rare",
      "curves": {
        "firearm_resistance": {
          "default": 0.05
        },
        "warm_modifier": {
          "default": 4
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_21_resistance_warm_rare.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_halloween_21_resistance_warm_rare",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_halloween_21_warm_penalty_rare",
      "name": "烟花大师的戒指",
      "en": "Fireworks Master's Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 4,
      "rarity": "rare",
      "curves": {
        "death_penalty_reduction": {
          "default": 0.05
        },
        "warm_modifier": {
          "default": 4
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_21_warm_penalty_rare.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_halloween_21_warm_penalty_rare",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_halloween_21_warm_uncommon",
      "name": "狂欢节戒指",
      "en": "Carnival Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 3,
      "rarity": "uncommon",
      "curves": {
        "warm_modifier": {
          "default": 4
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_21_warm_uncommon.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_halloween_21_warm_uncommon",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_halloween_21_warm_uncommon_weak",
      "name": "狂欢节戒指",
      "en": "Carnival Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 2,
      "rarity": "uncommon",
      "curves": {
        "warm_modifier": {
          "default": 1
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_21_warm_uncommon_weak.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_halloween_21_warm_uncommon_weak",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_armor_ring_halloween_23_cold_uncommon",
      "name": "节日环形",
      "en": "Festive Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 3,
      "rarity": "uncommon",
      "curves": {
        "cool_modifier": {
          "default": 4
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_23_cold_uncommon.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_armor_ring_halloween_23_cold_uncommon",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass3_ring_all_stats_2_epic",
      "name": "幸运戒指",
      "en": "“Luck O' The Irish” Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 2,
      "rarity": "epic",
      "curves": {
        "dexterity": {
          "default": 2
        },
        "stamina": {
          "default": 2
        },
        "strength": {
          "default": 2
        },
        "wisdom": {
          "default": 2
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass3_ring_all_stats_2_epic.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass3_ring_all_stats_2_epic",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass3_ring_all_stats_3_epic",
      "name": "幸运戒指",
      "en": "“Luck O' The Irish” Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 3,
      "rarity": "epic",
      "curves": {
        "dexterity": {
          "default": 3
        },
        "stamina": {
          "default": 3
        },
        "strength": {
          "default": 3
        },
        "wisdom": {
          "default": 3
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass3_ring_all_stats_3_epic.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass3_ring_all_stats_3_epic",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass3_ring_all_stats_4_epic",
      "name": "幸运戒指",
      "en": "“Luck O' The Irish” Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 4,
      "rarity": "epic",
      "curves": {
        "dexterity": {
          "default": 4
        },
        "stamina": {
          "default": 4
        },
        "strength": {
          "default": 4
        },
        "wisdom": {
          "default": 4
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass3_ring_all_stats_4_epic.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass3_ring_all_stats_4_epic",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass3_ring_all_stats_5_epic",
      "name": "幸运戒指",
      "en": "“Luck O' The Irish” Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 5,
      "rarity": "epic",
      "curves": {
        "dexterity": {
          "default": 5
        },
        "stamina": {
          "default": 5
        },
        "strength": {
          "default": 5
        },
        "wisdom": {
          "default": 5
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass3_ring_all_stats_5_epic.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass3_ring_all_stats_5_epic",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass3_ring_all_stats_6_epic",
      "name": "幸运戒指",
      "en": "“Luck O' The Irish” Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 6,
      "rarity": "epic",
      "curves": {
        "dexterity": {
          "default": 6
        },
        "stamina": {
          "default": 6
        },
        "strength": {
          "default": 6
        },
        "wisdom": {
          "default": 6
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass3_ring_all_stats_6_epic.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass3_ring_all_stats_6_epic",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass3_ring_all_stats_7_epic",
      "name": "幸运戒指",
      "en": "“Luck O' The Irish” Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 7,
      "rarity": "epic",
      "curves": {
        "dexterity": {
          "default": 7
        },
        "stamina": {
          "default": 7
        },
        "strength": {
          "default": 7
        },
        "wisdom": {
          "default": 7
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass3_ring_all_stats_7_epic.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass3_ring_all_stats_7_epic",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass6_neck_thanksgiving_2",
      "name": "边疆 秋天 护身符",
      "en": "Frontier Fall Amulet",
      "category": "accessory",
      "sub": "amulet",
      "tier": 2,
      "rarity": "epic",
      "curves": {
        "cool_modifier": {
          "default": 3
        },
        "health_increment": {
          "default": 100
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass6_neck_thanksgiving_2.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass6_neck_thanksgiving_2",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass6_neck_thanksgiving_3",
      "name": "边疆 秋天 护身符",
      "en": "Frontier Fall Amulet",
      "category": "accessory",
      "sub": "amulet",
      "tier": 3,
      "rarity": "epic",
      "curves": {
        "cool_modifier": {
          "default": 3
        },
        "health_increment": {
          "default": 150
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass6_neck_thanksgiving_3.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass6_neck_thanksgiving_3",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass6_neck_thanksgiving_4",
      "name": "边疆 秋天 护身符",
      "en": "Frontier Fall Amulet",
      "category": "accessory",
      "sub": "amulet",
      "tier": 4,
      "rarity": "epic",
      "curves": {
        "cool_modifier": {
          "default": 3
        },
        "health_increment": {
          "default": 300
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass6_neck_thanksgiving_4.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass6_neck_thanksgiving_4",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass6_neck_thanksgiving_5",
      "name": "边疆 秋天 护身符",
      "en": "Frontier Fall Amulet",
      "category": "accessory",
      "sub": "amulet",
      "tier": 5,
      "rarity": "epic",
      "curves": {
        "cool_modifier": {
          "default": 3
        },
        "health_increment": {
          "default": 500
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass6_neck_thanksgiving_5.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass6_neck_thanksgiving_5",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass6_neck_thanksgiving_6",
      "name": "边疆 秋天 护身符",
      "en": "Frontier Fall Amulet",
      "category": "accessory",
      "sub": "amulet",
      "tier": 6,
      "rarity": "epic",
      "curves": {
        "cool_modifier": {
          "default": 3
        },
        "health_increment": {
          "default": 700
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass6_neck_thanksgiving_6.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass6_neck_thanksgiving_6",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass6_neck_thanksgiving_7",
      "name": "边疆 秋天 护身符",
      "en": "Frontier Fall Amulet",
      "category": "accessory",
      "sub": "amulet",
      "tier": 7,
      "rarity": "epic",
      "curves": {
        "cool_modifier": {
          "default": 3
        },
        "health_increment": {
          "default": 900
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass6_neck_thanksgiving_7.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass6_neck_thanksgiving_7",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass6_ring_pet_2",
      "name": "动物 掌握 环",
      "en": "Animal Mastery ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 2,
      "rarity": "epic",
      "curves": {
        "pet_bonus_damage": {
          "default": 10
        },
        "pet_health_increment": {
          "default": 200
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass6_ring_pet_2.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass6_ring_pet_2",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass6_ring_pet_3",
      "name": "动物 掌握 环",
      "en": "Animal Mastery ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 3,
      "rarity": "epic",
      "curves": {
        "pet_bonus_damage": {
          "default": 20
        },
        "pet_health_increment": {
          "default": 350
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass6_ring_pet_3.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass6_ring_pet_3",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass6_ring_pet_4",
      "name": "动物 掌握 环",
      "en": "Animal Mastery ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 4,
      "rarity": "epic",
      "curves": {
        "pet_bonus_damage": {
          "default": 40
        },
        "pet_health_increment": {
          "default": 600
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass6_ring_pet_4.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass6_ring_pet_4",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass6_ring_pet_5",
      "name": "动物 掌握 环",
      "en": "Animal Mastery ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 5,
      "rarity": "epic",
      "curves": {
        "pet_bonus_damage": {
          "default": 75
        },
        "pet_health_increment": {
          "default": 900
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass6_ring_pet_5.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass6_ring_pet_5",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass6_ring_pet_6",
      "name": "动物 掌握 环",
      "en": "Animal Mastery ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 6,
      "rarity": "epic",
      "curves": {
        "pet_bonus_damage": {
          "default": 125
        },
        "pet_health_increment": {
          "default": 1200
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass6_ring_pet_6.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass6_ring_pet_6",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass6_ring_thanksgiving_2",
      "name": "前沿秋季戒指",
      "en": "Frontier Fall Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 2,
      "rarity": "epic",
      "curves": {
        "cool_modifier": {
          "default": 3
        },
        "health_increment": {
          "default": 100
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass6_ring_thanksgiving_2.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass6_ring_thanksgiving_2",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass6_ring_thanksgiving_3",
      "name": "前沿秋季戒指",
      "en": "Frontier Fall Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 3,
      "rarity": "epic",
      "curves": {
        "cool_modifier": {
          "default": 3
        },
        "health_increment": {
          "default": 150
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass6_ring_thanksgiving_3.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass6_ring_thanksgiving_3",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass6_ring_thanksgiving_4",
      "name": "前沿秋季戒指",
      "en": "Frontier Fall Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 4,
      "rarity": "epic",
      "curves": {
        "cool_modifier": {
          "default": 3
        },
        "health_increment": {
          "default": 300
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass6_ring_thanksgiving_4.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass6_ring_thanksgiving_4",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass6_ring_thanksgiving_5",
      "name": "前沿秋季戒指",
      "en": "Frontier Fall Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 5,
      "rarity": "epic",
      "curves": {
        "cool_modifier": {
          "default": 3
        },
        "health_increment": {
          "default": 500
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass6_ring_thanksgiving_5.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass6_ring_thanksgiving_5",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass6_ring_thanksgiving_6",
      "name": "前沿秋季戒指",
      "en": "Frontier Fall Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 6,
      "rarity": "epic",
      "curves": {
        "cool_modifier": {
          "default": 3
        },
        "health_increment": {
          "default": 700
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass6_ring_thanksgiving_6.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass6_ring_thanksgiving_6",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass6_ring_thanksgiving_7",
      "name": "前沿秋季戒指",
      "en": "Frontier Fall Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 7,
      "rarity": "epic",
      "curves": {
        "cool_modifier": {
          "default": 3
        },
        "health_increment": {
          "default": 900
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass6_ring_thanksgiving_7.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass6_ring_thanksgiving_7",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass7_ring_2",
      "name": "灵魂大师之戒",
      "en": "Ring of the Spirit Master",
      "category": "accessory",
      "sub": "ring",
      "tier": 2,
      "rarity": "epic",
      "curves": {
        "ghost_damage": {
          "default": 50
        },
        "health_increment": {
          "default": 100
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass7_ring_2.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass7_ring_2",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass7_ring_3",
      "name": "灵魂大师之戒",
      "en": "Ring of the Spirit Master",
      "category": "accessory",
      "sub": "ring",
      "tier": 3,
      "rarity": "epic",
      "curves": {
        "ghost_damage": {
          "default": 75
        },
        "health_increment": {
          "default": 150
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass7_ring_3.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass7_ring_3",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass7_ring_4",
      "name": "灵魂大师之戒",
      "en": "Ring of the Spirit Master",
      "category": "accessory",
      "sub": "ring",
      "tier": 4,
      "rarity": "epic",
      "curves": {
        "ghost_damage": {
          "default": 100
        },
        "health_increment": {
          "default": 300
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass7_ring_4.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass7_ring_4",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass7_ring_5",
      "name": "灵魂大师之戒",
      "en": "Ring of the Spirit Master",
      "category": "accessory",
      "sub": "ring",
      "tier": 5,
      "rarity": "epic",
      "curves": {
        "ghost_damage": {
          "default": 200
        },
        "health_increment": {
          "default": 500
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass7_ring_5.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass7_ring_5",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass7_ring_6",
      "name": "灵魂大师之戒",
      "en": "Ring of the Spirit Master",
      "category": "accessory",
      "sub": "ring",
      "tier": 6,
      "rarity": "epic",
      "curves": {
        "ghost_damage": {
          "default": 300
        },
        "health_increment": {
          "default": 700
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass7_ring_6.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass7_ring_6",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass7_ring_7",
      "name": "灵魂大师之戒",
      "en": "Ring of the Spirit Master",
      "category": "accessory",
      "sub": "ring",
      "tier": 7,
      "rarity": "epic",
      "curves": {
        "ghost_damage": {
          "default": 400
        },
        "health_increment": {
          "default": 900
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass7_ring_7.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass7_ring_7",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass8_ring_2",
      "name": "猎人的运气",
      "en": "Hunter’s luck",
      "category": "accessory",
      "sub": "ring",
      "tier": 2,
      "rarity": "epic",
      "curves": {
        "animal_instant_kill_chance": {
          "default": 0.05
        },
        "health_increment": {
          "default": 100
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass8_ring_2.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass8_ring_2",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass8_ring_3",
      "name": "猎人的运气",
      "en": "Hunter’s luck",
      "category": "accessory",
      "sub": "ring",
      "tier": 3,
      "rarity": "epic",
      "curves": {
        "animal_instant_kill_chance": {
          "default": 0.05
        },
        "health_increment": {
          "default": 150
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass8_ring_3.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass8_ring_3",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass8_ring_4",
      "name": "猎人的运气",
      "en": "Hunter’s luck",
      "category": "accessory",
      "sub": "ring",
      "tier": 4,
      "rarity": "epic",
      "curves": {
        "animal_instant_kill_chance": {
          "default": 0.05
        },
        "health_increment": {
          "default": 300
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass8_ring_4.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass8_ring_4",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass8_ring_5",
      "name": "猎人的运气",
      "en": "Hunter’s luck",
      "category": "accessory",
      "sub": "ring",
      "tier": 5,
      "rarity": "epic",
      "curves": {
        "animal_instant_kill_chance": {
          "default": 0.05
        },
        "health_increment": {
          "default": 500
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass8_ring_5.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass8_ring_5",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass8_ring_6",
      "name": "猎人的运气",
      "en": "Hunter’s luck",
      "category": "accessory",
      "sub": "ring",
      "tier": 6,
      "rarity": "epic",
      "curves": {
        "animal_instant_kill_chance": {
          "default": 0.05
        },
        "health_increment": {
          "default": 700
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass8_ring_6.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass8_ring_6",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass8_ring_7",
      "name": "猎人的运气",
      "en": "Hunter’s luck",
      "category": "accessory",
      "sub": "ring",
      "tier": 7,
      "rarity": "epic",
      "curves": {
        "animal_instant_kill_chance": {
          "default": 0.05
        },
        "health_increment": {
          "default": 900
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass8_ring_7.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass8_ring_7",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass_2025_neck_new_year_2",
      "name": "雪花护身符",
      "en": "Snowflake amulet",
      "category": "accessory",
      "sub": "amulet",
      "tier": 2,
      "rarity": "epic",
      "curves": {
        "dexterity": {
          "default": 2
        },
        "stamina": {
          "default": 2
        },
        "strength": {
          "default": 2
        },
        "wisdom": {
          "default": 2
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_new_year_2.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass_2025_neck_new_year_2",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass_2025_neck_new_year_3",
      "name": "雪花护身符",
      "en": "Snowflake amulet",
      "category": "accessory",
      "sub": "amulet",
      "tier": 3,
      "rarity": "epic",
      "curves": {
        "dexterity": {
          "default": 3
        },
        "stamina": {
          "default": 3
        },
        "strength": {
          "default": 3
        },
        "wisdom": {
          "default": 3
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_new_year_3.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass_2025_neck_new_year_3",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass_2025_neck_new_year_4",
      "name": "雪花护身符",
      "en": "Snowflake amulet",
      "category": "accessory",
      "sub": "amulet",
      "tier": 4,
      "rarity": "epic",
      "curves": {
        "dexterity": {
          "default": 4
        },
        "stamina": {
          "default": 4
        },
        "strength": {
          "default": 4
        },
        "wisdom": {
          "default": 4
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_new_year_4.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass_2025_neck_new_year_4",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass_2025_neck_new_year_5",
      "name": "雪花护身符",
      "en": "Snowflake amulet",
      "category": "accessory",
      "sub": "amulet",
      "tier": 5,
      "rarity": "epic",
      "curves": {
        "dexterity": {
          "default": 5
        },
        "stamina": {
          "default": 5
        },
        "strength": {
          "default": 5
        },
        "wisdom": {
          "default": 5
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_new_year_5.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass_2025_neck_new_year_5",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass_2025_neck_new_year_6",
      "name": "雪花护身符",
      "en": "Snowflake amulet",
      "category": "accessory",
      "sub": "amulet",
      "tier": 6,
      "rarity": "epic",
      "curves": {
        "dexterity": {
          "default": 6
        },
        "stamina": {
          "default": 6
        },
        "strength": {
          "default": 6
        },
        "wisdom": {
          "default": 6
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_new_year_6.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass_2025_neck_new_year_6",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass_2025_neck_new_year_7",
      "name": "雪花护身符",
      "en": "Snowflake amulet",
      "category": "accessory",
      "sub": "amulet",
      "tier": 7,
      "rarity": "epic",
      "curves": {
        "dexterity": {
          "default": 7
        },
        "stamina": {
          "default": 7
        },
        "strength": {
          "default": 7
        },
        "wisdom": {
          "default": 7
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_new_year_7.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass_2025_neck_new_year_7",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass_2025_neck_saint_patrick_3",
      "name": "Leprechaun 的 defense",
      "en": "Leprechaun's defense",
      "category": "accessory",
      "sub": "amulet",
      "tier": 3,
      "rarity": "epic",
      "curves": {
        "health_increment": {
          "default": 150
        },
        "knockdown_resistance": {
          "default": 1
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_saint_patrick_3.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass_2025_neck_saint_patrick_3",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass_2025_neck_saint_patrick_4",
      "name": "Leprechaun 的 defense",
      "en": "Leprechaun's defense",
      "category": "accessory",
      "sub": "amulet",
      "tier": 4,
      "rarity": "epic",
      "curves": {
        "health_increment": {
          "default": 300
        },
        "knockdown_resistance": {
          "default": 1
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_saint_patrick_4.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass_2025_neck_saint_patrick_4",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass_2025_neck_saint_patrick_5",
      "name": "Leprechaun 的 defense",
      "en": "Leprechaun's defense",
      "category": "accessory",
      "sub": "amulet",
      "tier": 5,
      "rarity": "epic",
      "curves": {
        "health_increment": {
          "default": 500
        },
        "knockdown_resistance": {
          "default": 1
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_saint_patrick_5.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass_2025_neck_saint_patrick_5",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass_2025_neck_saint_patrick_6",
      "name": "Leprechaun 的 defense",
      "en": "Leprechaun's defense",
      "category": "accessory",
      "sub": "amulet",
      "tier": 6,
      "rarity": "epic",
      "curves": {
        "health_increment": {
          "default": 700
        },
        "knockdown_resistance": {
          "default": 1
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_saint_patrick_6.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass_2025_neck_saint_patrick_6",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass_ring_fire_bloom_2",
      "name": "绽放火环",
      "en": "Bloomfire Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 2,
      "rarity": "epic",
      "curves": {
        "ghost_damage_resistance": {
          "default": 0.1
        },
        "health_increment": {
          "default": 100
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass_ring_fire_bloom_2.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass_ring_fire_bloom_2",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass_ring_fire_bloom_3",
      "name": "绽放火环",
      "en": "Bloomfire Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 3,
      "rarity": "epic",
      "curves": {
        "ghost_damage_resistance": {
          "default": 0.1
        },
        "health_increment": {
          "default": 150
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass_ring_fire_bloom_3.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass_ring_fire_bloom_3",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass_ring_fire_bloom_4",
      "name": "绽放火环",
      "en": "Bloomfire Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 4,
      "rarity": "epic",
      "curves": {
        "ghost_damage_resistance": {
          "default": 0.1
        },
        "health_increment": {
          "default": 300
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass_ring_fire_bloom_4.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass_ring_fire_bloom_4",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass_ring_fire_bloom_5",
      "name": "绽放火环",
      "en": "Bloomfire Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 5,
      "rarity": "epic",
      "curves": {
        "ghost_damage_resistance": {
          "default": 0.1
        },
        "health_increment": {
          "default": 500
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass_ring_fire_bloom_5.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass_ring_fire_bloom_5",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_battlepass_ring_fire_bloom_6",
      "name": "绽放火环",
      "en": "Bloomfire Ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 6,
      "rarity": "epic",
      "curves": {
        "ghost_damage_resistance": {
          "default": 0.1
        },
        "health_increment": {
          "default": 700
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_battlepass_ring_fire_bloom_6.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_battlepass_ring_fire_bloom_6",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_diary_armor_ring_rare",
      "name": "魔法师指环",
      "en": "Ring of the Enchanter",
      "category": "accessory",
      "sub": "ring",
      "tier": 3,
      "rarity": "rare",
      "curves": {
        "strength": {
          "default": 5
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_diary_armor_ring_rare.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_diary_armor_ring_rare",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_necklace_lunar_2",
      "name": "月球吊坠",
      "en": "Lunar Pendant",
      "category": "accessory",
      "sub": "amulet",
      "tier": 2,
      "rarity": "rare",
      "curves": {
        "bandit_duty_cost_reduction": {
          "default": 0.5
        },
        "health_increment": {
          "default": 100
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_necklace_lunar_2.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_necklace_lunar_2",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_necklace_lunar_3",
      "name": "月球吊坠",
      "en": "Lunar Pendant",
      "category": "accessory",
      "sub": "amulet",
      "tier": 3,
      "rarity": "rare",
      "curves": {
        "bandit_duty_cost_reduction": {
          "default": 0.5
        },
        "health_increment": {
          "default": 150
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_necklace_lunar_3.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_necklace_lunar_3",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_necklace_lunar_4",
      "name": "月球吊坠",
      "en": "Lunar Pendant",
      "category": "accessory",
      "sub": "amulet",
      "tier": 4,
      "rarity": "rare",
      "curves": {
        "bandit_duty_cost_reduction": {
          "default": 0.5
        },
        "health_increment": {
          "default": 300
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_necklace_lunar_4.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_necklace_lunar_4",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_necklace_lunar_5",
      "name": "月球吊坠",
      "en": "Lunar Pendant",
      "category": "accessory",
      "sub": "amulet",
      "tier": 5,
      "rarity": "rare",
      "curves": {
        "bandit_duty_cost_reduction": {
          "default": 0.5
        },
        "health_increment": {
          "default": 500
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_necklace_lunar_5.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_necklace_lunar_5",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_necklace_lunar_6",
      "name": "月球吊坠",
      "en": "Lunar Pendant",
      "category": "accessory",
      "sub": "amulet",
      "tier": 6,
      "rarity": "rare",
      "curves": {
        "bandit_duty_cost_reduction": {
          "default": 0.5
        },
        "health_increment": {
          "default": 700
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_necklace_lunar_6.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_necklace_lunar_6",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_necklace_lunar_7",
      "name": "月球吊坠",
      "en": "Lunar Pendant",
      "category": "accessory",
      "sub": "amulet",
      "tier": 7,
      "rarity": "rare",
      "curves": {
        "bandit_duty_cost_reduction": {
          "default": 0.5
        },
        "health_increment": {
          "default": 900
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_necklace_lunar_7.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_necklace_lunar_7",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_necklace_xmas_2025_2",
      "name": "冻结 灵魂",
      "en": "Frozen soul",
      "category": "accessory",
      "sub": "amulet",
      "tier": 2,
      "rarity": "epic",
      "curves": {
        "attacker_attack_speed_reduction_duration": {
          "default": 3
        },
        "attacker_attack_speed_reduction_modifier": {
          "default": 0.05
        },
        "health_increment": {
          "default": 100
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_necklace_xmas_2025_2.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_necklace_xmas_2025_2",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_necklace_xmas_2025_3",
      "name": "冻结 灵魂",
      "en": "Frozen soul",
      "category": "accessory",
      "sub": "amulet",
      "tier": 3,
      "rarity": "epic",
      "curves": {
        "attacker_attack_speed_reduction_duration": {
          "default": 3
        },
        "attacker_attack_speed_reduction_modifier": {
          "default": 0.05
        },
        "health_increment": {
          "default": 150
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_necklace_xmas_2025_3.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_necklace_xmas_2025_3",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_necklace_xmas_2025_4",
      "name": "冻结 灵魂",
      "en": "Frozen soul",
      "category": "accessory",
      "sub": "amulet",
      "tier": 4,
      "rarity": "epic",
      "curves": {
        "attacker_attack_speed_reduction_duration": {
          "default": 3
        },
        "attacker_attack_speed_reduction_modifier": {
          "default": 0.05
        },
        "health_increment": {
          "default": 300
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_necklace_xmas_2025_4.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_necklace_xmas_2025_4",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_necklace_xmas_2025_5",
      "name": "冻结 灵魂",
      "en": "Frozen soul",
      "category": "accessory",
      "sub": "amulet",
      "tier": 5,
      "rarity": "epic",
      "curves": {
        "attacker_attack_speed_reduction_duration": {
          "default": 3
        },
        "attacker_attack_speed_reduction_modifier": {
          "default": 0.05
        },
        "health_increment": {
          "default": 500
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_necklace_xmas_2025_5.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_necklace_xmas_2025_5",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_necklace_xmas_2025_6",
      "name": "冻结 灵魂",
      "en": "Frozen soul",
      "category": "accessory",
      "sub": "amulet",
      "tier": 6,
      "rarity": "epic",
      "curves": {
        "attacker_attack_speed_reduction_duration": {
          "default": 3
        },
        "attacker_attack_speed_reduction_modifier": {
          "default": 0.05
        },
        "health_increment": {
          "default": 700
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_necklace_xmas_2025_6.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_necklace_xmas_2025_6",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_necklace_xmas_2025_7",
      "name": "冻结 灵魂",
      "en": "Frozen soul",
      "category": "accessory",
      "sub": "amulet",
      "tier": 7,
      "rarity": "epic",
      "curves": {
        "attacker_attack_speed_reduction_duration": {
          "default": 3
        },
        "attacker_attack_speed_reduction_modifier": {
          "default": 0.05
        },
        "health_increment": {
          "default": 900
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_necklace_xmas_2025_7.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_necklace_xmas_2025_7",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls2_ring_steam",
      "name": "加布叔叔的印戒",
      "en": "Uncle Gab's Signet",
      "category": "accessory",
      "sub": "ring",
      "tier": 5,
      "rarity": "epic",
      "curves": {
        "damage_over_time_immunity": {
          "default": 1
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls2_ring_steam.png",
      "source": "inventory_stacks + inventory_stack_stats / wls2_ring_steam",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls_reward_ring_armor",
      "name": "魔法师指环",
      "en": "Ring of the Enchanter",
      "category": "accessory",
      "sub": "ring",
      "tier": 1,
      "rarity": "common",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 0
        },
        "stamina": {
          "default": 1,
          "max": 1
        },
        "strength": {
          "default": 0,
          "max": 0
        },
        "wisdom": {
          "default": 0,
          "max": 0
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls_reward_ring_armor.png",
      "source": "inventory_stacks + inventory_stack_stats / wls_reward_ring_armor",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls_reward_ring_attspeed",
      "name": "学徒之戒",
      "en": "Ring of the Apprentice",
      "category": "accessory",
      "sub": "ring",
      "tier": 1,
      "rarity": "common",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 0
        },
        "stamina": {
          "default": 0,
          "max": 0
        },
        "strength": {
          "default": 1,
          "max": 1
        },
        "wisdom": {
          "default": 0,
          "max": 0
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls_reward_ring_attspeed.png",
      "source": "inventory_stacks + inventory_stack_stats / wls_reward_ring_attspeed",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls_reward_ring_spirit",
      "name": "门徒指环",
      "en": "Ring of the Disciple",
      "category": "accessory",
      "sub": "ring",
      "tier": 1,
      "rarity": "common",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 0
        },
        "stamina": {
          "default": 0,
          "max": 0
        },
        "strength": {
          "default": 0,
          "max": 0
        },
        "wisdom": {
          "default": 1,
          "max": 1
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls_reward_ring_spirit.png",
      "source": "inventory_stacks + inventory_stack_stats / wls_reward_ring_spirit",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    },
    {
      "id": "wls_the_one_ring",
      "name": "青铜戒指",
      "en": "Bronze ring",
      "category": "accessory",
      "sub": "ring",
      "tier": 1,
      "rarity": "uncommon",
      "curves": {
        "dexterity": {
          "default": 0,
          "max": 0
        },
        "stamina": {
          "default": 0,
          "max": 0
        },
        "strength": {
          "default": 3,
          "max": 3
        },
        "wisdom": {
          "default": 0,
          "max": 0
        }
      },
      "imagePath": "westland_wiki_assets/equipment/wls_the_one_ring.png",
      "source": "inventory_stacks + inventory_stack_stats / wls_the_one_ring",
      "note": "原版饰品随机属性的 default 常为 0；默认不伪造随机词条，可手调已有合法属性。"
    }
  ],
  "foods": [
    {
      "id": "wls2_coffee",
      "name": "口香糖",
      "tier": 1,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "energy": 2
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "由天然树胶制成，恢复一些能量",
      "imagePath": "westland_wiki_assets/inventory/6d89dd0129c9101387581ba7e672811e612d835f27bb8b64ab9e6e30f910602e.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_coffee"
    },
    {
      "id": "wls2_consumable_corn_1",
      "name": "玉米",
      "tier": 1,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "hunger": 10,
        "health_regen": 5,
        "farm_hunger": 8
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "具有标志性的前哨人象征，非常适合各种美味食谱，无论是您还是您的牧场牲畜",
      "imagePath": "westland_wiki_assets/inventory/4aa3532a01365341dd26cd1ac45d4e0a1580ecc808a122e17a0a4ae4d1abd56b.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_corn_1"
    },
    {
      "id": "wls2_consumable_corn_porridge_1_common",
      "name": "玉米燕麦",
      "tier": 1,
      "heal": 0,
      "buffs": {
        "health": 20
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_corn_porridge_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 20,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 10
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "边疆经典，因其简单而美味的吸引力而备受推崇，提供了丰盛和美味的口感体验；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/332e8ce99b07cd9d06adf4d07d6ef86dab2d43154a82ad3ae17b6d26a1dc2022.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_corn_porridge_1_common"
    },
    {
      "id": "wls2_consumable_easter_bun",
      "name": "春天 节日 面包",
      "tier": 1,
      "heal": 0,
      "buffs": {},
      "duration": 1800,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_easter_bun_temp_fire_resistance": {
          "tags": [
            "meal"
          ],
          "type": "fire_resistance",
          "amount": 1,
          "period": 3600,
          "tooltip_stat_id": "fire_resistance_temporary_bonus"
        },
        "wls2_consumable_easter_bun_easter_temp_damage": {
          "tags": [
            "meal"
          ],
          "type": "easter_damage_modifier",
          "amount": 0.25,
          "period": 1800,
          "tooltip_stat_id": "easter_damage_modifier"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 40
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "fire_resistance": 1,
        "easter_damage_modifier": 0.25
      },
      "description": "屏蔽你免受火焰并使野兔鹿成为更容易的目标；临时效果持续 1800 秒。 未模拟效果：fire_resistance、easter_damage_modifier。",
      "imagePath": "westland_wiki_assets/inventory/0be7a53b1dbe1f73d033645af675b0d2252e0e43689aa1ac94210918c992923a.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_easter_bun"
    },
    {
      "id": "wls2_consumable_flask_heal_1",
      "name": "草药溶剂",
      "tier": 1,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 120
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "治疗用液体，可快速治愈伤口",
      "imagePath": "westland_wiki_assets/inventory/07b68373111b6c89f0a4153475905a12252ee12838fb3e77c59a3b71f6f2dc12.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_flask_heal_1"
    },
    {
      "id": "wls2_consumable_flask_water_1",
      "name": "装满了的罐子",
      "tier": 1,
      "heal": 0,
      "buffs": {
        "health": 20
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "drink"
      ],
      "sourceEffects": {
        "wls2_consumable_water_temp_health": {
          "tags": [
            "drink"
          ],
          "type": "health",
          "amount": 20,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {},
      "behavior": {
        "type": "food",
        "result_stack_id": "wls2_resourse_miscellaneous_flaskempty_1"
      },
      "unsupportedEffects": {},
      "description": "能够携带的水补给。；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/63d20ffba8fce7acf8bff9f1b17aa1f7951f59e1068cd57e40f7d5477ed4f5e9.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_flask_water_1"
    },
    {
      "id": "wls2_consumable_food_dryer_1",
      "name": "肉干",
      "tier": 1,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 30,
        "hunger": 40,
        "thirst": -2
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "能够很好地满足饥饿感。",
      "imagePath": "westland_wiki_assets/inventory/7020e08e38c5c579bff8991c9744145094792a5375bd69855aefb00f12610909.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_food_dryer_1"
    },
    {
      "id": "wls2_consumable_food_kitchen_1",
      "name": "豆汤",
      "tier": 1,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 75,
        "hunger": 75,
        "thirst": 15
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "健康，美味，超级满足。",
      "imagePath": "westland_wiki_assets/inventory/ba6990377679d3c73deda17d433dc71b397d37679ea16e831d1569a7adca6aac.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_food_kitchen_1"
    },
    {
      "id": "wls2_consumable_fortune_cookie",
      "name": "幸运饼干",
      "tier": 1,
      "heal": 0,
      "buffs": {},
      "duration": 1800,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_fortune_cookie_debuffs_resistance_modifier": {
          "tags": [
            "meal"
          ],
          "type": "debuffs_resistance",
          "amount": 1,
          "period": 1800,
          "tooltip_stat_id": "debuffs_resistance_modifier"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 40
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "debuffs_resistance": 1
      },
      "description": "打开它，咬一口，让所有负面效果消失。；临时效果持续 1800 秒。 未模拟效果：debuffs_resistance。",
      "imagePath": "westland_wiki_assets/inventory/cd137f983752b599e1b9098df9c6890128eb39c118852e22c9ad543a0140835a.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_fortune_cookie"
    },
    {
      "id": "wls2_consumable_grilled_meat_1_common",
      "name": "烤肉",
      "tier": 1,
      "heal": 0,
      "buffs": {
        "health": 20
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_grilled_meat_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 20,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 10
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一道简单而美味的菜肴，因其易得的食材和简单的烹饪技巧而受欢迎；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/2fafa25aa90e0aa9352dbab691cd508c380bae04f640a3f35a487b9d084e7471.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_grilled_meat_1_common"
    },
    {
      "id": "wls2_consumable_heal_bandage_1",
      "name": "绷带",
      "tier": 1,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 60
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "能够治愈伤口。配合药膏和威士忌使用效果更佳。",
      "imagePath": "westland_wiki_assets/inventory/05dc8afc99c50c548a2e124e41d6290fa1bbb99954a822a6d6ccc74aeb49d9bd.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_heal_bandage_1"
    },
    {
      "id": "wls2_consumable_oil_heal_1",
      "name": "草本 药膏",
      "tier": 1,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 240
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "用来愈合伤口十分有效",
      "imagePath": "westland_wiki_assets/inventory/95bfb662c5807058c11d6395726ed54c86efdd77ad8eaba0558cb1a807abad91.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_oil_heal_1"
    },
    {
      "id": "wls2_consumable_st_patricks_day_beer",
      "name": "爱尔兰 品脱",
      "tier": 1,
      "heal": 0,
      "buffs": {
        "evasion": 0.05,
        "critical_hit_chance": 0.05
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "drink"
      ],
      "sourceEffects": {
        "wls2_consumable_st_patricks_day_beer_temp_dexterity": {
          "tags": [
            "drink"
          ],
          "type": "evasion",
          "amount": 0.05,
          "period": 1800,
          "tooltip_stat_id": "evasion_temporary_bonus"
        },
        "wls2_consumable_st_patricks_day_beer_temp_critical_hit_chance": {
          "tags": [
            "drink"
          ],
          "type": "critical_hit_chance",
          "amount": 0.05,
          "period": 1800,
          "tooltip_stat_id": "crit_chance_temporary_bonus"
        }
      },
      "sourceStats": {},
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一个幸运的爱尔兰酿造，帮助你击中真实并且溜过危险；临时效果持续 1800 秒。",
      "imagePath": "westland_wiki_assets/inventory/5b9c82bd74cb69e98bc9992a6399962ae5d13696260fb30138baf8b3c7745426.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_st_patricks_day_beer"
    },
    {
      "id": "wls2_consumable_valentines_day_cakes",
      "name": "甜心",
      "tier": 1,
      "heal": 0,
      "buffs": {
        "bow_damage_modifier": 0.25
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_valentines_day_cakes_bow_damage_modifier": {
          "tags": [
            "meal"
          ],
          "type": "bow_damage_modifier",
          "amount": 0.25,
          "period": 1800,
          "tooltip_stat_id": "stat_bow_damage_modifier"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 40
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "心形饼干让你拥有丘比特的瞄准；临时效果持续 1800 秒。",
      "imagePath": "westland_wiki_assets/inventory/45a9949c7fca12f36113d3d2c91c62a1b03d9a0960906d119382b8753af3f7ae.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_valentines_day_cakes"
    },
    {
      "id": "wls2_consumable_wls_day_2026_pie",
      "name": "先锋的蛋糕",
      "tier": 1,
      "heal": 0,
      "buffs": {
        "critical_hit_chance": 0.08,
        "strength": 8,
        "dexterity": 8,
        "stamina": 8,
        "wisdom": 8
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_wls_day_2026_pie_critical_hit_chance": {
          "tags": [
            "meal"
          ],
          "type": "critical_hit_chance",
          "amount": 0.08,
          "period": 1800,
          "tooltip_stat_id": "crit_chance_temporary_bonus"
        },
        "wls2_consumable_wls_day_2026_pie_temp_strength": {
          "tags": [
            "meal"
          ],
          "type": "strength",
          "amount": 8,
          "period": 1800,
          "tooltip_stat_id": "strength_temporary_bonus"
        },
        "wls2_consumable_wls_day_2026_pie_dexterity": {
          "tags": [
            "meal"
          ],
          "type": "dexterity",
          "amount": 8,
          "period": 1800,
          "tooltip_stat_id": "dexterity_temprorary_bonus"
        },
        "wls2_consumable_wls_day_2026_pie_temp_stamina": {
          "tags": [
            "meal"
          ],
          "type": "stamina",
          "amount": 8,
          "period": 1800,
          "tooltip_stat_id": "stamina_temporary_bonus"
        },
        "wls2_consumable_wls_day_2026_pie_temp_spirit": {
          "tags": [
            "meal"
          ],
          "type": "wisdom",
          "amount": 8,
          "period": 1800,
          "tooltip_stat_id": "spirit_temprorary_bonus"
        }
      },
      "sourceStats": {},
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "提高统计数据，帮助牛仔发挥他们最好的表现；临时效果持续 1800 秒。",
      "imagePath": "westland_wiki_assets/inventory/5d75323a29eb79d1a730fd45bc7a6af6ae951b41900d1168a248c9127cbb6ce9.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_wls_day_2026_pie"
    },
    {
      "id": "wls2_easter_candy",
      "name": "集市糖果",
      "tier": 1,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "energy": 5
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "使用节日亮色纸包装的糖果。狂欢也别忘记补充能量！吃颗糖吧！",
      "imagePath": "westland_wiki_assets/inventory/23284713edfdb7602fb449909a185a77479545589646ff225b39019c48f0cc7b.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_easter_candy"
    },
    {
      "id": "wls2_gingerbread_food_xmas_2025",
      "name": "姜饼",
      "tier": 1,
      "heal": 0,
      "buffs": {},
      "duration": 1800,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_gingerbread_food_xmas_temp_damage": {
          "tags": [
            "meal"
          ],
          "type": "xmas_damage_modifier",
          "amount": 0.25,
          "period": 1800,
          "tooltip_stat_id": "xmas_damage_modifier"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 40
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "xmas_damage_modifier": 0.25
      },
      "description": "甜蜜，香料，和不可能抗拒；临时效果持续 1800 秒。 未模拟效果：xmas_damage_modifier。",
      "imagePath": "westland_wiki_assets/inventory/3220e948a952e673fad2b3993359f16e9d2ff2dc39db5ab94262afa18b6483a3.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_gingerbread_food_xmas_2025"
    },
    {
      "id": "wls2_halloween_food_pumpkin",
      "name": "南瓜",
      "tier": 1,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 50,
        "hunger": 15,
        "thirst": 15
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "硕大且富有营养的蔬菜。据说它还可以做成一盏灯",
      "imagePath": "westland_wiki_assets/inventory/f67444893b375751e453c953e0daab75a354e41f65b70ec4bb11b9b22e3c60b7.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_halloween_food_pumpkin"
    },
    {
      "id": "wls2_halloween_food_pumpkin_porridge",
      "name": "南瓜粥",
      "tier": 1,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 75,
        "hunger": 75,
        "thirst": 15
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "美味健康的南瓜粥",
      "imagePath": "westland_wiki_assets/inventory/8d61a01fbb5af22d10b7e23bd5a53261cd9a4eb9712aa117f9153da8f4431dfe.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_halloween_food_pumpkin_porridge"
    },
    {
      "id": "wls2_resourse_miscellaneous_herb_1",
      "name": "医用草药",
      "tier": 1,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 30
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "用来治疗伤口，可加工制成药草溶剂",
      "imagePath": "westland_wiki_assets/inventory/6622167fe2be0f7d861a2daeccb7003d9f6aed70a2c0ccb0d114bc16a24e60e6.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_resourse_miscellaneous_herb_1"
    },
    {
      "id": "wls2_steam_food",
      "name": "节日 蛋糕",
      "tier": 1,
      "heal": 0,
      "buffs": {
        "critical_hit_chance": 1
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_steam_food_temp_crit_chance": {
          "tags": [
            "meal"
          ],
          "type": "critical_hit_chance",
          "amount": 1,
          "period": 1800,
          "tooltip_stat_id": "crit_chance_temporary_bonus",
          "steam_only": true
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 40
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "蛋糕是谎言！\n<b><color=\"red\">但它的效果是真实的 —— 仅在Steam上！</color></b>；临时效果持续 1800 秒。",
      "imagePath": "westland_wiki_assets/inventory/737292769079370cd9934554c1ac500f3cd117dce5dae4c68619f85d461bce9b.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_steam_food"
    },
    {
      "id": "wls2_xmas_21_consumable_candy",
      "name": "集市糖果",
      "tier": 1,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "energy": 5
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "使用节日亮色纸包装的糖果。狂欢也别忘记补充能量！吃颗糖吧！",
      "imagePath": "westland_wiki_assets/inventory/23284713edfdb7602fb449909a185a77479545589646ff225b39019c48f0cc7b.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_xmas_21_consumable_candy"
    },
    {
      "id": "wls_halloween_candy",
      "name": "万圣节糖果",
      "tier": 1,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "energy": 5
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一种看上去很亮眼吃上去像南瓜一样的节日糖果。吃一块就能感觉到力量在体内涌动",
      "imagePath": "westland_wiki_assets/inventory/6378566e8bdbbee667811cd277621e83344a97532bde7ce6fbc76a8dc8b92485.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls_halloween_candy"
    },
    {
      "id": "wls_whiskey",
      "name": "威士忌",
      "tier": 1,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "alcohol": 9
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "请小心，威士忌可能会因其醉人的影响而损害你的能力",
      "imagePath": "westland_wiki_assets/inventory/98e3455f1987bb4582aafff4c37635cd95fbb4353d1c520c855c0e103231a914.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls_whiskey"
    },
    {
      "id": "wls2_consumable_baked_poultry_2_uncommon",
      "name": "烤禽肉",
      "tier": 2,
      "heal": 0,
      "buffs": {
        "health": 60,
        "strength": 15
      },
      "duration": 3600,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_baked_poultry_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 60,
          "period": 3600,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_baked_poultry_temp_strength": {
          "tags": [
            "meal"
          ],
          "type": "strength",
          "amount": 15,
          "period": 3600,
          "tooltip_stat_id": "strength_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 15
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一道美味的菜肴，不仅让您的味蕾愉悦，还赋予您像公鸡一样的凶猛战斗精神，增强您的攻击；临时效果持续 3600 秒。",
      "imagePath": "westland_wiki_assets/inventory/591eb32be90656eee45f3e9484a0d29fdd6437274f56dafd0796288c74ec721b.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_baked_poultry_2_uncommon"
    },
    {
      "id": "wls2_consumable_cactus_drink_2_common",
      "name": "仙人掌饮料",
      "tier": 2,
      "heal": 0,
      "buffs": {
        "health": 40
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "drink"
      ],
      "sourceEffects": {
        "wls2_consumable_cactus_drink_temp_health": {
          "tags": [
            "drink"
          ],
          "type": "health",
          "amount": 40,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 15
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一种清爽的饮料，由仙人掌果实和水混合而成；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/681b97be75acf6cb6adc7dbcf84b9045d2cb4fee484bd750f1463d6beb488341.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_cactus_drink_2_common"
    },
    {
      "id": "wls2_consumable_cowboy_bisquits_2_common",
      "name": "牛仔饼干",
      "tier": 2,
      "heal": 0,
      "buffs": {
        "health": 40
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_cowboy_bisquits_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 40,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 15
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "正如边疆本身一样坚韧，这些以小麦为基础的饼干，也被称为“破齿者”，是任何旅程的美味伴侣；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/afb3fbe579d88ebe4a6e7ef10186861c701446ed1d0517ad703da86a154f4d4e.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_cowboy_bisquits_2_common"
    },
    {
      "id": "wls2_consumable_flask_heal_2",
      "name": "强力药草溶剂",
      "tier": 2,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 240
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "稀有的药草，可治愈严重的伤口",
      "imagePath": "westland_wiki_assets/inventory/64a16c84d191840230737ab1099747ba672d853a0877e12014fa93b2f3d867bb.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_flask_heal_2"
    },
    {
      "id": "wls2_consumable_food_dryer_2",
      "name": "鱼干",
      "tier": 2,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 30,
        "hunger": 40,
        "thirst": -2
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "能够满足饥饿，但不能解渴。",
      "imagePath": "westland_wiki_assets/inventory/837f148e0272971b343cbcd69b22539f528811205587baf0800c505e20cee7e8.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_food_dryer_2"
    },
    {
      "id": "wls2_consumable_heal_bandage_2",
      "name": "轻型绷带",
      "tier": 2,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 120
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "用来包扎程度较轻的伤口",
      "imagePath": "westland_wiki_assets/inventory/d69a7ecb4b3b75f00ad4effa405e3b4ad470c13f1c247a8ae84ab15b64a0cf4f.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_heal_bandage_2"
    },
    {
      "id": "wls2_consumable_oil_heal_2",
      "name": "强效药膏",
      "tier": 2,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 480
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "能够清理伤口上的细菌。",
      "imagePath": "westland_wiki_assets/inventory/3d2be31463de1af5a9911a74991cfc93d9f1c085f8cd5bba37d76e27aabcb981.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_oil_heal_2"
    },
    {
      "id": "wls2_consumable_schnitzel_2_common",
      "name": "炸肉排",
      "tier": 2,
      "heal": 0,
      "buffs": {
        "health": 40
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_schnitzel_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 40,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 15
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "这道菜的秘密在于它的脆皮，是由细细研磨的小麦制成的，为多汁的肉提供了令人愉悦的对比；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/0b9400d501a767696e3634b3e281764c5780da8dbba7a11debce9b6c9ba0cf35.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_schnitzel_2_common"
    },
    {
      "id": "wls2_resourse_miscellaneous_herb_2",
      "name": "车前草",
      "tier": 2,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 40
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "止血化瘀，恢复伤口。",
      "imagePath": "westland_wiki_assets/inventory/00a58fb547a67459d87ca74b1f82e74a45b49406983552320a4dc85ef824c19f.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_resourse_miscellaneous_herb_2"
    },
    {
      "id": "wls_cactus_berry",
      "name": "仙人掌果",
      "tier": 2,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 5
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "仙人掌果做成的饮品很清爽",
      "imagePath": "westland_wiki_assets/inventory/307adc0f5e5932ae54df54bef7b01b2ae75d5243518fffe407d0b6de90aa783c.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls_cactus_berry"
    },
    {
      "id": "wls2_consumable_balm_heal_3",
      "name": "消毒软膏",
      "tier": 3,
      "heal": 720,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health": 720,
        "health_regen": 360
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "化学与医药方面所有最伟大的进步都在这根实用的管子里",
      "imagePath": "westland_wiki_assets/inventory/250a74c6444dcd92f2cba3dfdfa1f964e5c60041c5c632bfa4e9c6129f0c452e.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_balm_heal_3"
    },
    {
      "id": "wls2_consumable_bean_bread_3_common",
      "name": "切诺基豆面包",
      "tier": 3,
      "heal": 0,
      "buffs": {
        "health": 75
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_bean_bread_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 75,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 20
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "由豆类制成的柔软湿润的面包，是美洲原住民历史的永恒部分；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/d7b6129973bb17639b6bf796a267d49fe682e5ff7e3cbddc46125078102eedf9.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_bean_bread_3_common"
    },
    {
      "id": "wls2_consumable_beans_1",
      "name": "青豆",
      "tier": 3,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 5,
        "farm_hunger": 12
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "请适量食用",
      "imagePath": "westland_wiki_assets/inventory/29277157b8759ae48738be2de1cc3fcc8c3d12d4cb1c07093e2a785a16231623.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_beans_1"
    },
    {
      "id": "wls2_consumable_blueberry_meat_pie_3_rare",
      "name": "蓝莓汁猪排",
      "tier": 3,
      "heal": 0,
      "buffs": {
        "health": 150,
        "strength": 30
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_blueberry_meat_pie_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 150,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_blueberry_meat_pie_temp_strength": {
          "tags": [
            "meal"
          ],
          "type": "strength",
          "amount": 30,
          "period": 1800,
          "tooltip_stat_id": "strength_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 20
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一个传统的土著食谱，用蓝莓酱调制出美味多汁的肋骨。；临时效果持续 1800 秒。",
      "imagePath": "westland_wiki_assets/inventory/49038c149d85a89a8f621d0df311f79fc91e911d85d6f3b9b351e62d9cb60253.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_blueberry_meat_pie_3_rare"
    },
    {
      "id": "wls2_consumable_compote_3_common",
      "name": "水果冻",
      "tier": 3,
      "heal": 0,
      "buffs": {
        "health": 75
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "drink"
      ],
      "sourceEffects": {
        "wls2_consumable_compote_temp_health": {
          "tags": [
            "drink"
          ],
          "type": "health",
          "amount": 75,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 20
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "通过将美味的蓝莓浸泡在水中制作的一种清爽饮料，捕捉自然的甜味；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/98067260f6e45453aeabdcad6818784040f7bffcf56d066713caea9a383025ef.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_compote_3_common"
    },
    {
      "id": "wls2_consumable_flask_heal_3",
      "name": "优质药草溶剂",
      "tier": 3,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 400
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "妙手回春！",
      "imagePath": "westland_wiki_assets/inventory/c9191d7947832db4b33603586fed43158a01263aae9d597cf3cac56f4228c225.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_flask_heal_3"
    },
    {
      "id": "wls2_consumable_food_bonfire_3",
      "name": "炸鱼",
      "tier": 3,
      "heal": 0,
      "buffs": {
        "health": 75
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_food_bonfire_3_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 75,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 30,
        "health_regen": 20
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "能够很好地填补饥饿并治愈伤口；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/0174f7adbab0a1d47bcf268aeae7a74510271b9d694d28fafa37b9179c59ed0a.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_food_bonfire_3"
    },
    {
      "id": "wls2_consumable_heal_bandage_3",
      "name": "绷带",
      "tier": 3,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 180
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "用来包扎中等程度的伤口",
      "imagePath": "westland_wiki_assets/inventory/df73ea9aa62cbd285c5089589729d36ff716cd9b290c4f8e39a8ba493b1784d3.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_heal_bandage_3"
    },
    {
      "id": "wls2_consumable_hunter_stew_3_uncommon",
      "name": "温暖的野生炖菜",
      "tier": 3,
      "heal": 0,
      "buffs": {
        "health": 100
      },
      "duration": 3600,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_hunter_stew_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 100,
          "period": 3600,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_hunter_stew_temp_warm": {
          "tags": [
            "meal"
          ],
          "type": "warm_modifier",
          "amount": 4,
          "period": 3600,
          "tooltip_stat_id": "warm_temprorary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 20
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "warm_modifier": 4
      },
      "description": "由嫩肋骨和蓝莓的甜味制成的舒缓滋养炖菜，温暖您的灵魂并抵御寒冷；临时效果持续 3600 秒。 未模拟效果：warm_modifier。",
      "imagePath": "westland_wiki_assets/inventory/3126337014ada2e815c03770bb319c86636bc679e069fcb7b52a25c0da1c265d.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_hunter_stew_3_uncommon"
    },
    {
      "id": "wls2_consumable_oil_heal_3",
      "name": "优秀 药膏",
      "tier": 3,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 800
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "十分有效的药物。",
      "imagePath": "westland_wiki_assets/inventory/e5e00b0b411110f20c438502a154714759d942584460629ffe50d65399b4c6b0.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_oil_heal_3"
    },
    {
      "id": "wls2_consumable_pemmican_3_uncommon",
      "name": "干肉饼",
      "tier": 3,
      "heal": 0,
      "buffs": {
        "health": 100,
        "wisdom": 7
      },
      "duration": 3600,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_pemmican_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 100,
          "period": 3600,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_pemmican_temp_spirit": {
          "tags": [
            "meal"
          ],
          "type": "wisdom",
          "amount": 7,
          "period": 3600,
          "tooltip_stat_id": "spirit_temprorary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 20
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "传统的美国土著人生存食品，滋养您的精神并培养与野生生物的和谐联系；临时效果持续 3600 秒。",
      "imagePath": "westland_wiki_assets/inventory/530bbfba1b3c720138977810f8c0929e0d1ac30a02e2df45a4bb842931203b55.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_pemmican_3_uncommon"
    },
    {
      "id": "wls2_consumable_ribs_blueberry_3_common",
      "name": "烤鸡",
      "tier": 3,
      "heal": 0,
      "buffs": {
        "health": 75
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_ribs_blueberry_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 75,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 20
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "金黄色的多汁鸡肉烤制而成；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/1160bcaf51c60582d76439f754377a03d3770437c07321b3581e6f2468725431.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_ribs_blueberry_3_common"
    },
    {
      "id": "wls2_consumable_roasted_bone_marrow_t3",
      "name": "熏骨髓",
      "tier": 3,
      "heal": 0,
      "buffs": {
        "health": 150
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_roasted_bone_marrow_t3_temp_pet_damage": {
          "tags": [
            "meal"
          ],
          "type": "pet_bonus_damage",
          "amount": 40,
          "period": 1800,
          "tooltip_stat_id": "pet_damage_temporary_bonus"
        },
        "wls2_consumable_blueberry_meat_pie_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 150,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 20
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "pet_bonus_damage": 40
      },
      "description": "足够丰盛以使你变得坚韧并增加你的宠物的攻击力的额外咬合力；临时效果持续 1800 秒。 未模拟效果：pet_bonus_damage。",
      "imagePath": "westland_wiki_assets/inventory/2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_roasted_bone_marrow_t3"
    },
    {
      "id": "wls2_consumable_st_patricks_day_pie_t3",
      "name": "三叶草的爱尔兰派",
      "tier": 3,
      "heal": 0,
      "buffs": {
        "strength": 5,
        "dexterity": 5,
        "stamina": 5,
        "wisdom": 5
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_st_patricks_day_pie_t3_temp_strength": {
          "tags": [
            "meal"
          ],
          "type": "strength",
          "amount": 5,
          "period": 1800,
          "tooltip_stat_id": "strength_temporary_bonus"
        },
        "wls2_consumable_st_patricks_day_pie_t3_dexterity": {
          "tags": [
            "meal"
          ],
          "type": "dexterity",
          "amount": 5,
          "period": 1800,
          "tooltip_stat_id": "dexterity_temprorary_bonus"
        },
        "wls2_consumable_st_patricks_day_pie_t3_temp_stamina": {
          "tags": [
            "meal"
          ],
          "type": "stamina",
          "amount": 5,
          "period": 1800,
          "tooltip_stat_id": "stamina_temporary_bonus"
        },
        "wls2_consumable_st_patricks_day_pie_t3_temp_spirit": {
          "tags": [
            "meal"
          ],
          "type": "wisdom",
          "amount": 5,
          "period": 1800,
          "tooltip_stat_id": "spirit_temprorary_bonus"
        }
      },
      "sourceStats": {},
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一个金黄色的外壳派，提升你的信心；临时效果持续 1800 秒。",
      "imagePath": "westland_wiki_assets/inventory/4e724de747000ffe5f925302e0b728ab5f79119edc01a134543377586f07dfc9.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_st_patricks_day_pie_t3"
    },
    {
      "id": "wls2_resourse_miscellaneous_herb_3",
      "name": "藿香",
      "tier": 3,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 50
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "以愈合力见长。",
      "imagePath": "westland_wiki_assets/inventory/0aba29cf573ba6b7a977c8260642e55d9469bb23e06363ef39477b5c39419740.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_resourse_miscellaneous_herb_3"
    },
    {
      "id": "wls_berry",
      "name": "蓝莓",
      "tier": 3,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 5
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "多汁又甜，这些独特的浆果是各种土著菜肴中受人喜爱的成分。",
      "imagePath": "westland_wiki_assets/inventory/7e02446c908829d856ae985b2ac2c643882c1c83c0c245bc86d1f9e50617ba99.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls_berry"
    },
    {
      "id": "wls2_consumable_bacon_bread_pudding_4_uncommon",
      "name": "培根面包布丁",
      "tier": 4,
      "heal": 0,
      "buffs": {
        "health": 200,
        "animal_resistance": 0.1
      },
      "duration": 3600,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_bacon_bread_pudding_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 200,
          "period": 3600,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_bacon_bread_pudding_temp_move_speed": {
          "tags": [
            "meal"
          ],
          "type": "animal_resistance",
          "amount": 0.1,
          "period": 3600,
          "tooltip_stat_id": "animal_resistance_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 25
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一种受人珍爱的南方美食，有着酥脆的培根和柔软的面团，使你有力量以极高效率抵御野生动物的攻击；临时效果持续 3600 秒。",
      "imagePath": "westland_wiki_assets/inventory/6e396911fe856c617905140a72ba36112e206eccc9ae545c99439a07b35b85e7.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_bacon_bread_pudding_4_uncommon"
    },
    {
      "id": "wls2_consumable_balm_heal_4",
      "name": "医用软膏",
      "tier": 4,
      "heal": 960,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health": 960,
        "health_regen": 480
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "这个方便的药包能够挽救最为严重的创伤",
      "imagePath": "westland_wiki_assets/inventory/3d6cbbd155932d41504e0b069ef6325ef0abc3d0391ec9dcf15d0e4532b37b21.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_balm_heal_4"
    },
    {
      "id": "wls2_consumable_cabbage",
      "name": "卷心菜",
      "tier": 4,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 5,
        "farm_hunger": 14
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "多汁的卷心菜叶可以做为任何餐食的完美配菜。",
      "imagePath": "westland_wiki_assets/inventory/e4b7286577be786915cd868209d1933247f68107e7ff19cf1b73144a3290ef06.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_cabbage"
    },
    {
      "id": "wls2_consumable_fillet_steak_4_common",
      "name": "牛排",
      "tier": 4,
      "heal": 0,
      "buffs": {
        "health": 150
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_fillet_steak_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 150,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 25
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一块优质的牛排，用一点盐煎得完美，是每个牛仔的喜爱；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/bb3262e81c086ac7839970ccb5751f3d2370f0974d0ed93941dd1d8eba8bfc27.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_fillet_steak_4_common"
    },
    {
      "id": "wls2_consumable_flask_heal_4",
      "name": "印第安人秘密溶剂",
      "tier": 4,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 600
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "这种药剂的秘诀是个大秘密！",
      "imagePath": "westland_wiki_assets/inventory/ba632c139057762eaedacdccbc05238a2f2868aae0aa84cf4fa64244bb359d12.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_flask_heal_4"
    },
    {
      "id": "wls2_consumable_fried_chicken_4_common",
      "name": "炸鸡",
      "tier": 4,
      "heal": 0,
      "buffs": {
        "health": 150
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_fried_chicken_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 150,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 25
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "每一块嫩鸡都炸成金黄色、酥脆完美，捕捉到了肯塔基炸鸡传统的垂涎鲜美；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/04617852c7943e6e54ed7d80b79e87a863a5155d760f8ee82f31de0545fb52f0.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_fried_chicken_4_common"
    },
    {
      "id": "wls2_consumable_fried_trout_4_rare",
      "name": "炸鳟鱼",
      "tier": 4,
      "heal": 0,
      "buffs": {
        "health": 200,
        "animal_resistance": 0.1
      },
      "duration": 3600,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_bacon_bread_pudding_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 200,
          "period": 3600,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_bacon_bread_pudding_temp_move_speed": {
          "tags": [
            "meal"
          ],
          "type": "animal_resistance",
          "amount": 0.1,
          "period": 3600,
          "tooltip_stat_id": "animal_resistance_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 25
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一个简单的，令人满足的菜肴，带有酥脆的皮和软的，易碎的肉；临时效果持续 3600 秒。",
      "imagePath": "westland_wiki_assets/inventory/da16c2f9054690dc2cf8a54fa7f02042757cacb940cca565982ff6e99a36dad1.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_fried_trout_4_rare"
    },
    {
      "id": "wls2_consumable_heal_bandage_4",
      "name": "重型绷带",
      "tier": 4,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 240
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "用来包扎程度严重的伤口",
      "imagePath": "westland_wiki_assets/inventory/717808ff84076a80740d1c0c4a2fca02f49a3687d2f2cb778be35475983be572.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_heal_bandage_4"
    },
    {
      "id": "wls2_consumable_hoppin_john_4_uncommon",
      "name": "跳跃约翰",
      "tier": 4,
      "heal": 0,
      "buffs": {
        "health": 200
      },
      "duration": 3600,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_hoppin_john_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 200,
          "period": 3600,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_hoppin_john_temp_gathering": {
          "tags": [
            "meal"
          ],
          "type": "gathering_speed_modifier",
          "amount": 0.2,
          "period": 3600,
          "tooltip_stat_id": "gathering_speed_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 25
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "gathering_speed_modifier": 0.2
      },
      "description": "一道经典的南方菜肴有着成千上万种变化。但这个特别的食谱会让你在使用斧头和镐时变得更加高效！；临时效果持续 3600 秒。 未模拟效果：gathering_speed_modifier。",
      "imagePath": "westland_wiki_assets/inventory/a653d160defb58bc013a62dad5869effa9f1cf60c56db5dd31bf8848f22bc844.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_hoppin_john_4_uncommon"
    },
    {
      "id": "wls2_consumable_iced_tea_4_uncommon",
      "name": "冰茶",
      "tier": 4,
      "heal": 0,
      "buffs": {
        "health": 200
      },
      "duration": 3600,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "drink"
      ],
      "sourceEffects": {
        "wls2_consumable_iced_tea_temp_health": {
          "tags": [
            "drink"
          ],
          "type": "health",
          "amount": 200,
          "period": 3600,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_iced_tea_temp_cool": {
          "tags": [
            "drink"
          ],
          "type": "cool_modifier",
          "amount": 4,
          "period": 3600,
          "tooltip_stat_id": "cool_temprorary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 25
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "cool_modifier": 4
      },
      "description": "一种凉爽清新的饮料，非常适合炎炎夏日；临时效果持续 3600 秒。 未模拟效果：cool_modifier。",
      "imagePath": "westland_wiki_assets/inventory/713767460141741e8dba05de53b7a09de00be75c86aab23212f1e78d9f703fee.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_iced_tea_4_uncommon"
    },
    {
      "id": "wls2_consumable_oil_heal_4",
      "name": "土著 药膏",
      "tier": 4,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 1200
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "从“大蛇”那里要来的秘密药膏药方。",
      "imagePath": "westland_wiki_assets/inventory/ac9f94dbac26d6676222263f8a89befbe0ad973eca34efed9321e7b2fff3cf75.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_oil_heal_4"
    },
    {
      "id": "wls2_consumable_roasted_bone_marrow_t4",
      "name": "熏骨髓",
      "tier": 4,
      "heal": 0,
      "buffs": {
        "health": 300
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_roasted_bone_marrow_t4_temp_pet_damage": {
          "tags": [
            "meal"
          ],
          "type": "pet_bonus_damage",
          "amount": 75,
          "period": 1800,
          "tooltip_stat_id": "pet_damage_temporary_bonus"
        },
        "wls2_consumable_smithfield_ham_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 300,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 25
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "pet_bonus_damage": 75
      },
      "description": "足够丰盛以使你变得坚韧并增加你的宠物的攻击力的额外咬合力；临时效果持续 1800 秒。 未模拟效果：pet_bonus_damage。",
      "imagePath": "westland_wiki_assets/inventory/2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_roasted_bone_marrow_t4"
    },
    {
      "id": "wls2_consumable_smithfield_ham_4_rare",
      "name": "史密斯菲尔德火腿",
      "tier": 4,
      "heal": 0,
      "buffs": {
        "health": 300,
        "dexterity": 10
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_smithfield_ham_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 300,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_smithfield_ham_temp_dexterity": {
          "tags": [
            "meal"
          ],
          "type": "dexterity",
          "amount": 10,
          "period": 1800,
          "tooltip_stat_id": "dexterity_temprorary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 25
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "这款美味的火腿采用受人尊敬的南方食谱制作，能提高你的专注力，激发你内心的狙击手；临时效果持续 1800 秒。",
      "imagePath": "westland_wiki_assets/inventory/4ffb3e7ab10cbfc56999e24ec0226ad6a6f138e44c8f3494801b5133a8bdeb48.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_smithfield_ham_4_rare"
    },
    {
      "id": "wls2_consumable_southern_tea_punch_4_rare",
      "name": "南方茶酒",
      "tier": 4,
      "heal": 0,
      "buffs": {
        "health": 300,
        "strength": 100
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "drink"
      ],
      "sourceEffects": {
        "wls2_consumable_southern_tea_punch_temp_health": {
          "tags": [
            "drink"
          ],
          "type": "health",
          "amount": 300,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_southern_tea_punch_temp_strength": {
          "tags": [
            "drink"
          ],
          "type": "strength",
          "amount": 100,
          "period": 1800,
          "tooltip_stat_id": "strength_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 25
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "这种饮料不仅使人精神焕发，而且赋予勇气和力量，面对任何敌人；临时效果持续 1800 秒。",
      "imagePath": "westland_wiki_assets/inventory/d683ee88322ef59f97b90a5f389c4601093587748ff808414dd522a26dc60bfb.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_southern_tea_punch_4_rare"
    },
    {
      "id": "wls2_consumable_tea_4_common",
      "name": "茶",
      "tier": 4,
      "heal": 0,
      "buffs": {
        "health": 150
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "drink"
      ],
      "sourceEffects": {
        "wls2_consumable_tea_temp_health": {
          "tags": [
            "drink"
          ],
          "type": "health",
          "amount": 150,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 25
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一种永恒的令人宽慰的饮料，非常适合每天的任何时刻；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/9e83fef8b0794f794509821c5135244014dccc6502e9bf4b9e78ee02a2532a05.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_tea_4_common"
    },
    {
      "id": "wls2_resourse_miscellaneous_herb_4",
      "name": "洋甘菊",
      "tier": 4,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 60
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "治疗头疼脑涨等小病的最佳选择。",
      "imagePath": "westland_wiki_assets/inventory/1035b1d41276dd2cfaeb831a27c7a85584002d883eee9271a37fa32065e28452.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_resourse_miscellaneous_herb_4"
    },
    {
      "id": "wls2_consumable_balm_heal_5",
      "name": "军用软膏",
      "tier": 5,
      "heal": 1280,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health": 1280,
        "health_regen": 640
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "治愈一切创伤，就是这么直白",
      "imagePath": "westland_wiki_assets/inventory/6fc7c1a9bc7f59d4f014cae52c1a0a12cc92ceabe277504f83e99afa1f678275.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_balm_heal_5"
    },
    {
      "id": "wls2_consumable_boudin_corndog_5_rare",
      "name": "布丁玉米犬",
      "tier": 5,
      "heal": 0,
      "buffs": {
        "health": 500,
        "strength": 200
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_boudin_corndog_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 500,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_boudin_corndog_temp_strength": {
          "tags": [
            "meal"
          ],
          "type": "strength",
          "amount": 200,
          "period": 1800,
          "tooltip_stat_id": "strength_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 30
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "全美国最喜爱的食物，融入了美味的卡真风味，给您的肚子带来幸福，为您的攻击带来力量；临时效果持续 1800 秒。",
      "imagePath": "westland_wiki_assets/inventory/db71774b0df6fbdd46ae4e44b9a71b94cdfb4d81938e5b3d7b54aa32c9cfab3a.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_boudin_corndog_5_rare"
    },
    {
      "id": "wls2_consumable_cajun_pumpkin_porridge_5_uncommon",
      "name": "卡真南瓜燕麦",
      "tier": 5,
      "heal": 0,
      "buffs": {
        "health": 400
      },
      "duration": 3600,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_cajun_pumpkin_porridge_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 400,
          "period": 3600,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_cajun_pumpkin_porridge_temp_resistance_water": {
          "tags": [
            "meal"
          ],
          "type": "water_pressure_resistance",
          "amount": 0.2,
          "period": 3600,
          "tooltip_stat_id": "water_pressure_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 30
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "water_pressure_resistance": 0.2
      },
      "description": "南瓜粥配香肠能给你力量穿越沼泽地；临时效果持续 3600 秒。 未模拟效果：water_pressure_resistance。",
      "imagePath": "westland_wiki_assets/inventory/31e4d521e0ac325b79b1aab885a8215779c4625845daa1dd90f39e6d731c6ce3.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_cajun_pumpkin_porridge_5_uncommon"
    },
    {
      "id": "wls2_consumable_coffee_5_common",
      "name": "咖啡",
      "tier": 5,
      "heal": 0,
      "buffs": {
        "health": 300
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "drink"
      ],
      "sourceEffects": {
        "wls2_consumable_coffee_temp_health": {
          "tags": [
            "drink"
          ],
          "type": "health",
          "amount": 300,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 30
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一种经典饮料，因其丰富的醇厚风味和香气而受到赞誉；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/88154ada2388717e81687bd8a36f1c6fdbc31676945d48bb43e8e496ec0ac067.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_coffee_5_common"
    },
    {
      "id": "wls2_consumable_courtbouillon_5_rare",
      "name": "鱼汤",
      "tier": 5,
      "heal": 0,
      "buffs": {
        "health": 500,
        "critical_hit_chance": 0.07
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_gumbo_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 500,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_gumbo_temp_stamina": {
          "tags": [
            "meal"
          ],
          "type": "critical_hit_chance",
          "amount": 0.07,
          "period": 1800,
          "tooltip_stat_id": "crit_chance_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 30
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一种卡津风格的鱼菜，带有香料和蔬菜。辛辣，芳香，和富有风味。；临时效果持续 1800 秒。",
      "imagePath": "westland_wiki_assets/inventory/66cf1a918c83f72d9527f850105d7506be350d60af96ca2d4e50e68b0d22df26.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_courtbouillon_5_rare"
    },
    {
      "id": "wls2_consumable_flask_heal_5",
      "name": "纯粹药草溶剂",
      "tier": 5,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 900
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "你在狂野西部能找到的最好药物。",
      "imagePath": "westland_wiki_assets/inventory/1ef6f51a8337a52a95b25b4a586d1950e618fa26b4130f8a97a4f41e566c3b23.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_flask_heal_5"
    },
    {
      "id": "wls2_consumable_gumbo_5_rare",
      "name": "龙虾浓汤",
      "tier": 5,
      "heal": 0,
      "buffs": {
        "health": 500,
        "critical_hit_chance": 0.07
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_gumbo_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 500,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_gumbo_temp_stamina": {
          "tags": [
            "meal"
          ],
          "type": "critical_hit_chance",
          "amount": 0.07,
          "period": 1800,
          "tooltip_stat_id": "crit_chance_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 30
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "传统的卡真浓汤以其混合的口味和提高精确度的能力而闻名，在战斗中增加暴击几率；临时效果持续 1800 秒。",
      "imagePath": "westland_wiki_assets/inventory/3944362d22dc18062c62bb22aeee995a6787ccbf15266bfd8f6c4e25aef3867d.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_gumbo_5_rare"
    },
    {
      "id": "wls2_consumable_irish_coffee_5_rare",
      "name": "爱尔兰咖啡",
      "tier": 5,
      "heal": 0,
      "buffs": {
        "health": 500,
        "evasion": 0.07
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "drink"
      ],
      "sourceEffects": {
        "wls2_consumable_irish_coffee_temp_health": {
          "tags": [
            "drink"
          ],
          "type": "health",
          "amount": 500,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_irish_coffee_temp_dexterity": {
          "tags": [
            "drink"
          ],
          "type": "evasion",
          "amount": 0.07,
          "period": 1800,
          "tooltip_stat_id": "evasion_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 30
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "咖啡和精神药剂的芬芳混合提高了你的敏捷性，改善了闪避的机会；临时效果持续 1800 秒。",
      "imagePath": "westland_wiki_assets/inventory/9b801a636755d77570e5f08036eef4f9e44ff4dbc4f7cae5917fa67bb27ab8d1.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_irish_coffee_5_rare"
    },
    {
      "id": "wls2_consumable_medallion_steak_5_common",
      "name": "肉眼牛排配肉汁",
      "tier": 5,
      "heal": 0,
      "buffs": {
        "health": 300
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_medallion_steak_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 300,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 30
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "多汁嫩滑，烹饪得恰到好处的牛排，用辣酱提升了它的风味；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/5c5332589d65b6c98d4c18eb49f07d3bc5efad47a6a8456aa2a1a1cc2083b90c.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_medallion_steak_5_common"
    },
    {
      "id": "wls2_consumable_oil_heal_5",
      "name": "纯软膏",
      "tier": 5,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 1800
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "甚至连最严重的情感创伤也能治愈",
      "imagePath": "westland_wiki_assets/inventory/dc6bf375fe4c71405488bce0d555b9bb3cea8311a74d304bf26aeabb69cf041c.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_oil_heal_5"
    },
    {
      "id": "wls2_consumable_potlikker_stew_5_uncommon",
      "name": "玉米面包汤",
      "tier": 5,
      "heal": 0,
      "buffs": {
        "health": 400,
        "stamina": 15
      },
      "duration": 3600,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_potlikker_stew_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 400,
          "period": 3600,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_potlikker_stew_temp_crit_chance": {
          "tags": [
            "meal"
          ],
          "type": "stamina",
          "amount": 15,
          "period": 3600,
          "tooltip_stat_id": "stamina_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 30
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一种美味的炖菜体现了你内在的力量，在战斗中提供额外的防御力来抵御敌人的攻击；临时效果持续 3600 秒。",
      "imagePath": "westland_wiki_assets/inventory/c7a35021a7c288f94f6226440cb19ed465503607ae726ba33c8288a4c99fc320.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_potlikker_stew_5_uncommon"
    },
    {
      "id": "wls2_consumable_pumpkin_1",
      "name": "南瓜",
      "tier": 5,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 5,
        "farm_hunger": 16
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "南瓜不是最容易种植的农作物，但是收成配得上付出",
      "imagePath": "westland_wiki_assets/inventory/f67444893b375751e453c953e0daab75a354e41f65b70ec4bb11b9b22e3c60b7.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_pumpkin_1"
    },
    {
      "id": "wls2_consumable_pumpkin_bisque_5_common",
      "name": "南瓜浓汤",
      "tier": 5,
      "heal": 0,
      "buffs": {
        "health": 300
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_pumpkin_bisque_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 300,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 30
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "这是一道备受喜爱的法国风味浓汤，因其美味和令人宽慰而在卡真料理中广受赞誉；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/271a4b0982b785954223d6ee585be0a37f2f477c5d1e1886af0d7fac69b06541.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_pumpkin_bisque_5_common"
    },
    {
      "id": "wls2_consumable_roasted_bone_marrow_t5",
      "name": "熏骨髓",
      "tier": 5,
      "heal": 0,
      "buffs": {
        "health": 500
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "drink",
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_roasted_bone_marrow_t5_temp_pet_damage": {
          "tags": [
            "meal"
          ],
          "type": "pet_bonus_damage",
          "amount": 125,
          "period": 1800,
          "tooltip_stat_id": "pet_damage_temporary_bonus"
        },
        "wls2_consumable_irish_coffee_temp_health": {
          "tags": [
            "drink"
          ],
          "type": "health",
          "amount": 500,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 30
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "pet_bonus_damage": 125
      },
      "description": "足够丰盛以使你变得坚韧并增加你的宠物的攻击力的额外咬合力；临时效果持续 1800 秒。 未模拟效果：pet_bonus_damage。",
      "imagePath": "westland_wiki_assets/inventory/2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_roasted_bone_marrow_t5"
    },
    {
      "id": "wls2_consumable_spiced_coffee_5_uncommon",
      "name": "香料咖啡",
      "tier": 5,
      "heal": 0,
      "buffs": {
        "health": 400
      },
      "duration": 3600,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "drink"
      ],
      "sourceEffects": {
        "wls2_consumable_spiced_coffee_temp_health": {
          "tags": [
            "drink"
          ],
          "type": "health",
          "amount": 400,
          "period": 3600,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_spiced_coffee_temp_mosquito_reduction": {
          "tags": [
            "drink"
          ],
          "type": "mosquito_reduction",
          "amount": 100,
          "period": 3600,
          "tooltip_stat_id": "mosquito_reduction_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 30
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "mosquito_reduction": 100
      },
      "description": "一种迷人的饮料，散发着迷人的香气，以增强身体的能力和自然驱虫而闻名；临时效果持续 3600 秒。 未模拟效果：mosquito_reduction。",
      "imagePath": "westland_wiki_assets/inventory/01e48f3a1bbda249a35378e2f4d3d67504c566ef30b52417c79ceaf28afb0624.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_spiced_coffee_5_uncommon"
    },
    {
      "id": "wls2_consumable_st_patricks_day_pie_t5",
      "name": "三叶草的爱尔兰派",
      "tier": 5,
      "heal": 0,
      "buffs": {
        "strength": 15,
        "dexterity": 15,
        "stamina": 15,
        "wisdom": 15
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_st_patricks_day_pie_t5_temp_strength": {
          "tags": [
            "meal"
          ],
          "type": "strength",
          "amount": 15,
          "period": 1800,
          "tooltip_stat_id": "strength_temporary_bonus"
        },
        "wls2_consumable_st_patricks_day_pie_t5_dexterity": {
          "tags": [
            "meal"
          ],
          "type": "dexterity",
          "amount": 15,
          "period": 1800,
          "tooltip_stat_id": "dexterity_temprorary_bonus"
        },
        "wls2_consumable_st_patricks_day_pie_t5_temp_stamina": {
          "tags": [
            "meal"
          ],
          "type": "stamina",
          "amount": 15,
          "period": 1800,
          "tooltip_stat_id": "stamina_temporary_bonus"
        },
        "wls2_consumable_st_patricks_day_pie_t5_temp_spirit": {
          "tags": [
            "meal"
          ],
          "type": "wisdom",
          "amount": 15,
          "period": 1800,
          "tooltip_stat_id": "spirit_temprorary_bonus"
        }
      },
      "sourceStats": {},
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一个金黄色的外壳派，提升你的信心；临时效果持续 1800 秒。",
      "imagePath": "westland_wiki_assets/inventory/4e724de747000ffe5f925302e0b728ab5f79119edc01a134543377586f07dfc9.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_st_patricks_day_pie_t5"
    },
    {
      "id": "wls2_resourse_miscellaneous_herb_5",
      "name": "亚伦的枝条",
      "tier": 5,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 70
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "月光仙人掌的真实种类可以用作治疗",
      "imagePath": "westland_wiki_assets/inventory/b670ba6bdc9f6699965ef0fed70ba6c6b0cd71bd959ee9868c4e82d45337f70d.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_resourse_miscellaneous_herb_5"
    },
    {
      "id": "wls2_consumable_akutaq_6_rare",
      "name": "阿库塔克",
      "tier": 6,
      "heal": 0,
      "buffs": {
        "health": 700
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_akutaq_6_rare_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 700,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_akutaq_6_rare_temp_ghost_damage": {
          "tags": [
            "meal"
          ],
          "type": "ghost_damage",
          "amount": 250,
          "period": 1800,
          "tooltip_stat_id": "ghost_damage_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 35
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "ghost_damage": 250
      },
      "description": "一种传统的甜点——结合了北方荒野的味道和对抗幽灵的特殊功效；临时效果持续 1800 秒。 未模拟效果：ghost_damage。",
      "imagePath": "westland_wiki_assets/inventory/a73ea80bd9f3b7494324df1dd4ea5f2ea7695486199248ad927d609726084cf0.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_akutaq_6_rare"
    },
    {
      "id": "wls2_consumable_baked_potato_6_common",
      "name": "烤土豆",
      "tier": 6,
      "heal": 0,
      "buffs": {
        "health": 500
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_baked_potato_6_common_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 500,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 35
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "任何人都可以做的简单而令人满意的一餐；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/17788243f4985ad364175802fc66cf0dc70568951878608409d5397768f1c6b1.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_baked_potato_6_common"
    },
    {
      "id": "wls2_consumable_caribu_potato_6_uncommon",
      "name": "驯鹿与土豆泥",
      "tier": 6,
      "heal": 0,
      "buffs": {
        "health": 600
      },
      "duration": 3600,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_caribu_potato_6_uncommon_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 600,
          "period": 3600,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_caribu_potato_6_uncommon_temp_pet_damage": {
          "tags": [
            "meal"
          ],
          "type": "pet_bonus_damage",
          "amount": 125,
          "period": 3600,
          "tooltip_stat_id": "pet_damage_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 35
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "pet_bonus_damage": 125
      },
      "description": "鹿肉配土豆泥。即使是它的气味也能给你的宠物带来力量，更不用说对你自己的健康了。；临时效果持续 3600 秒。 未模拟效果：pet_bonus_damage。",
      "imagePath": "westland_wiki_assets/inventory/91a9c4e7bb6539cbf50a200c17b08e8e054b2b02f51d9ea36405736e5b76b51d.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_caribu_potato_6_uncommon"
    },
    {
      "id": "wls2_consumable_caribu_soup_6_uncommon",
      "name": "驯鹿杂烩汤",
      "tier": 6,
      "heal": 0,
      "buffs": {
        "health": 600
      },
      "duration": 3600,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_caribu_soup_6_uncommon_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 600,
          "period": 3600,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_caribu_soup_6_uncommon_temp_warm": {
          "tags": [
            "meal"
          ],
          "type": "warm_modifier",
          "amount": 8,
          "period": 3600,
          "tooltip_stat_id": "warm_temprorary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 35
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "warm_modifier": 8
      },
      "description": "基于因纽特人食谱的简单食物。从寒冷中取暖并加快资源收集速度。；临时效果持续 3600 秒。 未模拟效果：warm_modifier。",
      "imagePath": "westland_wiki_assets/inventory/1e7f7138394e60074d1e43b488caf0fff4574ad046cda517bf2d61d192c1b1b8.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_caribu_soup_6_uncommon"
    },
    {
      "id": "wls2_consumable_caribu_steak_6_common",
      "name": "驯鹿牛排",
      "tier": 6,
      "heal": 0,
      "buffs": {
        "health": 500
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_caribu_steak_6_common_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 500,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 35
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一块炸驯鹿肉是真正的雪地征服者的食物；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/df875b22dc9feaf5f6aedb38cdae9a7cb999fdb16aeaef26b598d1a5371ec052.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_caribu_steak_6_common"
    },
    {
      "id": "wls2_consumable_flask_heal_6",
      "name": "恶魔俱乐部浸泡",
      "tier": 6,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 1200
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "来自恶魔俱乐部的一种药剂，可以让任何人重新站起来",
      "imagePath": "westland_wiki_assets/inventory/aa63029eb43d5a2ef1037f7a57c4d8d6bbbc8c4adb2b1e3536ad061934305ec5.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_flask_heal_6"
    },
    {
      "id": "wls2_consumable_injun_drink_6_common",
      "name": "针叶树提取物",
      "tier": 6,
      "heal": 0,
      "buffs": {
        "health": 500
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "drink"
      ],
      "sourceEffects": {
        "wls2_consumable_injun_drink_6_common_temp_health": {
          "tags": [
            "drink"
          ],
          "type": "health",
          "amount": 500,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 35
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一种由北方草药酿制而成的饮料是你在北方荒野中恢复体力所需要的；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/2e700053d492efc3f922a9163f1a36ebd8ad9339c54f5b55d926b7b6643a77ba.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_injun_drink_6_common"
    },
    {
      "id": "wls2_consumable_injun_drink_6_rare",
      "name": "强烈提取",
      "tier": 6,
      "heal": 0,
      "buffs": {
        "health": 700,
        "strength": 250
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "drink"
      ],
      "sourceEffects": {
        "wls2_consumable_injun_drink_6_rare_temp_health": {
          "tags": [
            "drink"
          ],
          "type": "health",
          "amount": 700,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_injun_drink_6_rare_temp_strength": {
          "tags": [
            "drink"
          ],
          "type": "strength",
          "amount": 250,
          "period": 1800,
          "tooltip_stat_id": "strength_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 35
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "这种天然草药提高了您的健康，并在战斗中给予您额外的伤害；临时效果持续 1800 秒。",
      "imagePath": "westland_wiki_assets/inventory/4178b53cd96cdc0d7645f69e543f7a551638142d1b4ed03e898f93b0a3e469fe.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_injun_drink_6_rare"
    },
    {
      "id": "wls2_consumable_injun_drink_6_uncommon",
      "name": "因纽特针叶茶",
      "tier": 6,
      "heal": 0,
      "buffs": {
        "health": 600
      },
      "duration": 3600,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "drink"
      ],
      "sourceEffects": {
        "wls2_consumable_injun_drink_6_uncommon_temp_health": {
          "tags": [
            "drink"
          ],
          "type": "health",
          "amount": 600,
          "period": 3600,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_injun_drink_6_uncommon_temp_snow_resistance": {
          "tags": [
            "drink"
          ],
          "type": "snow_resistance",
          "amount": 0.2,
          "period": 3600,
          "tooltip_stat_id": "snow_resistance_temprorary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 35
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "snow_resistance": 0.2
      },
      "description": "一种根据北方土著居民的秘方酿制的饮品。能够振奋身体，恢复健康。；临时效果持续 3600 秒。 未模拟效果：snow_resistance。",
      "imagePath": "westland_wiki_assets/inventory/23f726ab739c2ac4a30925ae215dbf16eab8879d79cdd46abb8cea3c034b339e.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_injun_drink_6_uncommon"
    },
    {
      "id": "wls2_consumable_meat_soup_6_rare",
      "name": "辣味浓郁的汤",
      "tier": 6,
      "heal": 0,
      "buffs": {
        "health": 700,
        "firearm_resistance": 0.05
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_meat_soup_6_rare_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 700,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_meat_soup_6_rare_firearm_resistance": {
          "tags": [
            "meal"
          ],
          "type": "firearm_resistance",
          "amount": 0.05,
          "period": 1800,
          "tooltip_stat_id": "firearm_resistance_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 35
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "特别辣的汤，不仅对健康有益，还能增强对子弹的敏捷性；临时效果持续 1800 秒。",
      "imagePath": "westland_wiki_assets/inventory/d9ee3b05fe1f6f92d8ab511c4ab263d9632da28818368f887fc2b3c70dcfbefa.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_meat_soup_6_rare"
    },
    {
      "id": "wls2_consumable_oil_heal_6",
      "name": "恶魔俱乐部膏",
      "tier": 6,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 2400
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "野生浆果制成的神奇药物",
      "imagePath": "westland_wiki_assets/inventory/37a4b1cd28de1f0eb58a3a1e22da8730335a24cefb0a6bf374784576e92d875b.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_oil_heal_6"
    },
    {
      "id": "wls2_consumable_potato_1",
      "name": "土豆",
      "tier": 6,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 5,
        "farm_hunger": 18
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "多才多艺的蔬菜，许多菜肴的主要成分",
      "imagePath": "westland_wiki_assets/inventory/e520bfa84144c54bf538ca6000758a310d7567e92938de61b6af383703a21edd.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_potato_1"
    },
    {
      "id": "wls2_consumable_roasted_bone_marrow_t6",
      "name": "熏骨髓",
      "tier": 6,
      "heal": 0,
      "buffs": {
        "health": 700
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_roasted_bone_marrow_t6_temp_pet_damage": {
          "tags": [
            "meal"
          ],
          "type": "pet_bonus_damage",
          "amount": 200,
          "period": 1800,
          "tooltip_stat_id": "pet_damage_temporary_bonus"
        },
        "wls2_consumable_meat_soup_6_rare_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 700,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 35
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "pet_bonus_damage": 200
      },
      "description": "足够丰盛以使你变得坚韧并增加你的宠物的攻击力的额外咬合力；临时效果持续 1800 秒。 未模拟效果：pet_bonus_damage。",
      "imagePath": "westland_wiki_assets/inventory/2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_roasted_bone_marrow_t6"
    },
    {
      "id": "wls2_consumable_salmon_chowder_6_rare",
      "name": "三文鱼杂烩汤",
      "tier": 6,
      "heal": 0,
      "buffs": {
        "health": 700,
        "firearm_resistance": 0.05
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_meat_soup_6_rare_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 700,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_meat_soup_6_rare_firearm_resistance": {
          "tags": [
            "meal"
          ],
          "type": "firearm_resistance",
          "amount": 0.05,
          "period": 1800,
          "tooltip_stat_id": "firearm_resistance_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 35
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一道丰盛、浓厚的鱼菜，以其浓郁的味道、烟熏的香气和高脂肪含量而闻名；临时效果持续 1800 秒。",
      "imagePath": "westland_wiki_assets/inventory/4f4346f236aa72b2a064c60dc6239b283bed89691800a986d32d0094094e61c2.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_salmon_chowder_6_rare"
    },
    {
      "id": "wls2_resourse_miscellaneous_herb_6",
      "name": "恶魔俱乐部",
      "tier": 6,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 80
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "不负其名，它被用来制造最强效的治疗剂",
      "imagePath": "westland_wiki_assets/inventory/3b673572c9bab689767204ca1a21719b1f0596eb18d198c1d99cc2fc58a532ed.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_resourse_miscellaneous_herb_6"
    },
    {
      "id": "wls2_consumable_bass_cakes_7_rare",
      "name": "低音蛋糕",
      "tier": 7,
      "heal": 0,
      "buffs": {
        "health": 800
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_beef_ragout_7_rare_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 800,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_beef_ragout_7_rare_temp_ghost_damage_resistance": {
          "tags": [
            "meal"
          ],
          "type": "ghost_damage_resistance",
          "amount": 0.05,
          "period": 1800,
          "tooltip_stat_id": "ghost_damage_resistance_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 40
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "ghost_damage_resistance": 0.05
      },
      "description": "一道用玉米粉煎鲈鱼片制成的丰盛菜肴。旅行者和猎人们的最爱；临时效果持续 1800 秒。 未模拟效果：ghost_damage_resistance。",
      "imagePath": "westland_wiki_assets/inventory/8497dce15251902400f146e97ef2ecade6705ec967c859dd2629bd2a84665c7d.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_bass_cakes_7_rare"
    },
    {
      "id": "wls2_consumable_beef_ragout_7_rare",
      "name": "牛肉 炖菜",
      "tier": 7,
      "heal": 0,
      "buffs": {
        "health": 800
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_beef_ragout_7_rare_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 800,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_beef_ragout_7_rare_temp_ghost_damage_resistance": {
          "tags": [
            "meal"
          ],
          "type": "ghost_damage_resistance",
          "amount": 0.05,
          "period": 1800,
          "tooltip_stat_id": "ghost_damage_resistance_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 40
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "ghost_damage_resistance": 0.05
      },
      "description": "在这个炖菜之后，没有鬼会吓到你；临时效果持续 1800 秒。 未模拟效果：ghost_damage_resistance。",
      "imagePath": "westland_wiki_assets/inventory/5489785917637b57a4d05e3b7755147b28844ec8d83b3247f53c2331cfbdb5ef.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_beef_ragout_7_rare"
    },
    {
      "id": "wls2_consumable_bloody_molly_7_rare",
      "name": "血腥玛丽",
      "tier": 7,
      "heal": 0,
      "buffs": {
        "health": 800,
        "critical_hit_chance": 0.07
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "drink"
      ],
      "sourceEffects": {
        "wls2_consumable_bloody_molly_7_rare_temp_health": {
          "tags": [
            "drink"
          ],
          "type": "health",
          "amount": 800,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_bloody_molly_7_rare_temp_crit_chance": {
          "tags": [
            "drink"
          ],
          "type": "critical_hit_chance",
          "amount": 0.07,
          "period": 1800,
          "tooltip_stat_id": "crit_chance_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 40
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "尝起来像复仇和番茄；临时效果持续 1800 秒。",
      "imagePath": "westland_wiki_assets/inventory/312eff2c0f7c1679184a86920c07dae0391fd2890df8008a59cd3c26301e8725.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_bloody_molly_7_rare"
    },
    {
      "id": "wls2_consumable_chili_con_carne_7_rare",
      "name": "辣椒与肉",
      "tier": 7,
      "heal": 0,
      "buffs": {
        "health": 800
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_chili_con_carne_7_rare_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 800,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_chili_con_carne_7_rare_temp_damage_to_bosses": {
          "tags": [
            "meal"
          ],
          "type": "boss_damage_modifier",
          "amount": 0.05,
          "period": 1800,
          "tooltip_stat_id": "damage_to_bosses_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 40
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "boss_damage_modifier": 0.05
      },
      "description": "在面对最强大的敌人时给予信心；临时效果持续 1800 秒。 未模拟效果：boss_damage_modifier。",
      "imagePath": "westland_wiki_assets/inventory/a62db4fd72e9eace0e5187dc100e694bba2ac830b9f54f5c06563fb55cd73805.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_chili_con_carne_7_rare"
    },
    {
      "id": "wls2_consumable_flask_heal_7",
      "name": "德克萨斯鼠尾草浸液",
      "tier": 7,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 1500
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一种从鼠尾草花朵中酿造的治愈饮料",
      "imagePath": "westland_wiki_assets/inventory/e62c15c1d7285c6e6a6bd095fe59325f8035efdc071bbbfdaf01db863d362ba7.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_flask_heal_7"
    },
    {
      "id": "wls2_consumable_lime_squash_7_common",
      "name": "石灰鲜榨汁",
      "tier": 7,
      "heal": 0,
      "buffs": {
        "health": 600
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "drink"
      ],
      "sourceEffects": {
        "wls2_consumable_lime_squash_7_common_temp_health": {
          "tags": [
            "drink"
          ],
          "type": "health",
          "amount": 600,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 40
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一种清爽和芳香的饮料；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/5d1a990dd75e9dc37ad023513fd51b098dc34e894bf5fcd3fee2b634011f956a.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_lime_squash_7_common"
    },
    {
      "id": "wls2_consumable_mohito_7_uncommon",
      "name": "莫希托",
      "tier": 7,
      "heal": 0,
      "buffs": {
        "health": 700
      },
      "duration": 3600,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "drink"
      ],
      "sourceEffects": {
        "wls2_consumable_mohito_7_uncommon_temp_health": {
          "tags": [
            "drink"
          ],
          "type": "health",
          "amount": 700,
          "period": 3600,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_mohito_7_uncommon_temp_cool": {
          "tags": [
            "drink"
          ],
          "type": "cool_modifier",
          "amount": 6,
          "period": 3600,
          "tooltip_stat_id": "cool_temprorary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 40
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "cool_modifier": 6
      },
      "description": "完美的冷却伴侣对辣的餐点和热的气候；临时效果持续 3600 秒。 未模拟效果：cool_modifier。",
      "imagePath": "westland_wiki_assets/inventory/6d9d63913d2afca8c084d3036279a4d37d65734a0914e8f346457145f58a779d.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_mohito_7_uncommon"
    },
    {
      "id": "wls2_consumable_oil_heal_7",
      "name": "德克萨斯鼠尾草软膏",
      "tier": 7,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 3000
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一种由鼠尾草花制成的镇静药膏",
      "imagePath": "westland_wiki_assets/inventory/296066d137f2415c770ce878839fa61d7a78e45ac89ebf1d53d383e3e3bd8375.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_oil_heal_7"
    },
    {
      "id": "wls2_consumable_pueblo_firepot_7_uncommon",
      "name": "普韦布洛 火锅",
      "tier": 7,
      "heal": 0,
      "buffs": {
        "health": 700
      },
      "duration": 3600,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_pueblo_firepot_7_uncommon_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 700,
          "period": 3600,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_pueblo_firepot_7_uncommon_temp_fire_resistance": {
          "tags": [
            "meal"
          ],
          "type": "fire_resistance",
          "amount": 0.2,
          "period": 3600,
          "tooltip_stat_id": "fire_resistance_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 40
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "fire_resistance": 0.2
      },
      "description": "如此辣，甚至火都怕它；临时效果持续 3600 秒。 未模拟效果：fire_resistance。",
      "imagePath": "westland_wiki_assets/inventory/feef88f956ce78d0a58147313a05f2743fe44826c90ff617894ed30a9b638394.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_pueblo_firepot_7_uncommon"
    },
    {
      "id": "wls2_consumable_rib_steak_7_common",
      "name": "肋骨牛排",
      "tier": 7,
      "heal": 0,
      "buffs": {
        "health": 600
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_rib_steak_7_common_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 600,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 40
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "提升健康和恢复的高级牛排；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/98e0461e101d3469ff407162af6578ae018b2d6da4730172c33a6738e45897d3.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_rib_steak_7_common"
    },
    {
      "id": "wls2_consumable_roasted_bone_marrow_t7",
      "name": "熏骨髓",
      "tier": 7,
      "heal": 0,
      "buffs": {
        "health": 800
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "drink",
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_roasted_bone_marrow_t7_temp_pet_damage": {
          "tags": [
            "meal"
          ],
          "type": "pet_bonus_damage",
          "amount": 300,
          "period": 1800,
          "tooltip_stat_id": "pet_damage_temporary_bonus"
        },
        "wls2_consumable_bloody_molly_7_rare_temp_health": {
          "tags": [
            "drink"
          ],
          "type": "health",
          "amount": 800,
          "period": 1800,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 40
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "pet_bonus_damage": 300
      },
      "description": "足够丰盛以使你变得坚韧并增加你的宠物的攻击力的额外咬合力；临时效果持续 1800 秒。 未模拟效果：pet_bonus_damage。",
      "imagePath": "westland_wiki_assets/inventory/2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_roasted_bone_marrow_t7"
    },
    {
      "id": "wls2_consumable_st_patricks_day_pie_t7",
      "name": "三叶草的爱尔兰派",
      "tier": 7,
      "heal": 0,
      "buffs": {
        "strength": 25,
        "dexterity": 25,
        "stamina": 25,
        "wisdom": 25
      },
      "duration": 1800,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_st_patricks_day_pie_t7_temp_strength": {
          "tags": [
            "meal"
          ],
          "type": "strength",
          "amount": 25,
          "period": 1800,
          "tooltip_stat_id": "strength_temporary_bonus"
        },
        "wls2_consumable_st_patricks_day_pie_t7_dexterity": {
          "tags": [
            "meal"
          ],
          "type": "dexterity",
          "amount": 25,
          "period": 1800,
          "tooltip_stat_id": "dexterity_temprorary_bonus"
        },
        "wls2_consumable_st_patricks_day_pie_t7_temp_stamina": {
          "tags": [
            "meal"
          ],
          "type": "stamina",
          "amount": 25,
          "period": 1800,
          "tooltip_stat_id": "stamina_temporary_bonus"
        },
        "wls2_consumable_st_patricks_day_pie_t7_temp_spirit": {
          "tags": [
            "meal"
          ],
          "type": "wisdom",
          "amount": 25,
          "period": 1800,
          "tooltip_stat_id": "spirit_temprorary_bonus"
        }
      },
      "sourceStats": {},
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "一个金黄色的外壳派，提升你的信心；临时效果持续 1800 秒。",
      "imagePath": "westland_wiki_assets/inventory/4e724de747000ffe5f925302e0b728ab5f79119edc01a134543377586f07dfc9.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_st_patricks_day_pie_t7"
    },
    {
      "id": "wls2_consumable_stewed_tomato_7_common",
      "name": "炖番茄",
      "tier": 7,
      "heal": 0,
      "buffs": {
        "health": 600
      },
      "duration": 7200,
      "cooldown": null,
      "implemented": true,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_stewed_tomato_7_common_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 600,
          "period": 7200,
          "tooltip_stat_id": "health_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 40
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "提升健康和加速恢复；临时效果持续 7200 秒。",
      "imagePath": "westland_wiki_assets/inventory/9e603c8ebbf957ed3c78ba09a4bdee4b1e6c08ca3a30110ba9127a35379264c6.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_stewed_tomato_7_common"
    },
    {
      "id": "wls2_consumable_taco_7_uncommon",
      "name": "塔可",
      "tier": 7,
      "heal": 0,
      "buffs": {
        "health": 700
      },
      "duration": 3600,
      "cooldown": null,
      "implemented": false,
      "groups": [
        "meal"
      ],
      "sourceEffects": {
        "wls2_consumable_taco_7_uncommon_temp_health": {
          "tags": [
            "meal"
          ],
          "type": "health",
          "amount": 700,
          "period": 3600,
          "tooltip_stat_id": "health_temporary_bonus"
        },
        "wls2_consumable_taco_7_uncommon_temp_pet_armor": {
          "tags": [
            "meal"
          ],
          "type": "pet_resistance",
          "amount": 0.05,
          "period": 3600,
          "tooltip_stat_id": "pet_armor_temporary_bonus"
        }
      },
      "sourceStats": {
        "hunger": 100,
        "health_regen": 40
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {
        "pet_resistance": 0.05
      },
      "description": "香料，既能激活你，也能激活你的宠物；临时效果持续 3600 秒。 未模拟效果：pet_resistance。",
      "imagePath": "westland_wiki_assets/inventory/9633d874d20d8cc25149de0cbb067ee0f2290f1be5a119a008cf9e7cde835a17.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_taco_7_uncommon"
    },
    {
      "id": "wls2_consumable_tomato_1",
      "name": "番茄",
      "tier": 7,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 5,
        "farm_hunger": 20
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "曾经被恐惧为有毒的，这种浆果在野西部的菜肴中赢得了它的位置。",
      "imagePath": "westland_wiki_assets/inventory/23244e7c11adaefbd988f8eaef99556836ef5d76f9ad56f20dc8d13cd9f6a56f.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_consumable_tomato_1"
    },
    {
      "id": "wls2_resourse_miscellaneous_herb_7",
      "name": "德克萨斯鼠尾草",
      "tier": 7,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "health_regen": 90
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "抗旱植物具有治疗属性",
      "imagePath": "westland_wiki_assets/inventory/043542c869983e669f46ab83b1e9cac294c68a91538ab05133c8dbe261d78c8f.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_resourse_miscellaneous_herb_7"
    },
    {
      "id": "wls2_ws_day2021_candy",
      "name": "周年庆糖果",
      "tier": 8,
      "heal": 0,
      "buffs": {},
      "duration": 0,
      "cooldown": null,
      "implemented": true,
      "groups": [],
      "sourceEffects": {},
      "sourceStats": {
        "energy": 5
      },
      "behavior": {
        "type": "food"
      },
      "unsupportedEffects": {},
      "description": "用甜蜜来提醒节日的到来，还能提供许多能量",
      "imagePath": "westland_wiki_assets/inventory/0b79f8da84ea741723842aab2721b518d329a411c7a37dc625592b1a7588c32e.png",
      "source": "inventory_stacks + inventory_stack_stats + food_temporary_bonuses / wls2_ws_day2021_candy"
    }
  ],
  "skills": [
    {
      "id": "skill_unlock_stealth",
      "name": "隐形",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "当潜行在敌人后面时，他们不会发现你",
      "kind": "stealth_feature",
      "sourceDefinition": {
        "type": "stealth_feature",
        "is_persistent": true
      },
      "source": "skills/skill_unlock_stealth"
    },
    {
      "id": "skill_flat_armor_t1",
      "name": "防御",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "stamina": 10
          }
        }
      ],
      "implemented": true,
      "description": "提高角色的防御力10",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 10,
        "buy": {
          "coin_id": "spend_coin_soft_20"
        },
        "refund": {
          "coin_id": "earn_coin_soft_16"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_20"
        },
        "stat_id": "stamina"
      },
      "source": "skills/skill_flat_armor_t1"
    },
    {
      "id": "skill_flat_armor_t2",
      "name": "防御",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "stamina": 10
          }
        }
      ],
      "implemented": true,
      "description": "提高角色的防御力10",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 10,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "stat_id": "stamina"
      },
      "source": "skills/skill_flat_armor_t2"
    },
    {
      "id": "skill_flat_armor_t4",
      "name": "防御",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "stamina": 20
          }
        }
      ],
      "implemented": true,
      "description": "提高角色的防御力20",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 20,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "stat_id": "stamina"
      },
      "source": "skills/skill_flat_armor_t4"
    },
    {
      "id": "skill_flat_armor_t6",
      "name": "防御",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "stamina": 50
          }
        }
      ],
      "implemented": true,
      "description": "提高角色的防御力50",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 50,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "stat_id": "stamina"
      },
      "source": "skills/skill_flat_armor_t6"
    },
    {
      "id": "skill_flat_health_t1",
      "name": "生命值",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "health_increment": 100
          }
        }
      ],
      "implemented": true,
      "description": "提高角色的最大生命值100",
      "kind": "health_increment",
      "sourceDefinition": {
        "type": "health_increment",
        "amount": 100,
        "buy": {
          "coin_id": "spend_coin_soft_20"
        },
        "refund": {
          "coin_id": "earn_coin_soft_16"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_20"
        }
      },
      "source": "skills/skill_flat_health_t1"
    },
    {
      "id": "skill_flat_health_t3",
      "name": "生命值",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "health_increment": 100
          }
        }
      ],
      "implemented": true,
      "description": "增加角色的最大健康值 100",
      "kind": "health_increment",
      "sourceDefinition": {
        "type": "health_increment",
        "amount": 100,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        }
      },
      "source": "skills/skill_flat_health_t3"
    },
    {
      "id": "skill_flat_health_t7",
      "name": "生命值",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "health_increment": 1000
          }
        }
      ],
      "implemented": true,
      "description": "增加角色的最大生命值1000",
      "kind": "health_increment",
      "sourceDefinition": {
        "type": "health_increment",
        "amount": 1000,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "is_persistent": true
      },
      "source": "skills/skill_flat_health_t7"
    },
    {
      "id": "skill_flat_damage_t1",
      "name": "伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "strength": 10
          }
        }
      ],
      "implemented": true,
      "description": "增加伤害 10",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 10,
        "buy": {
          "coin_id": "spend_coin_soft_20"
        },
        "refund": {
          "coin_id": "earn_coin_soft_16"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_20"
        },
        "stat_id": "strength"
      },
      "source": "skills/skill_flat_damage_t1"
    },
    {
      "id": "skill_flat_damage_t2",
      "name": "伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "strength": 20
          }
        }
      ],
      "implemented": true,
      "description": "增加伤害由 20",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 20,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "stat_id": "strength"
      },
      "source": "skills/skill_flat_damage_t2"
    },
    {
      "id": "skill_flat_damage_t3",
      "name": "伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "strength": 25
          }
        }
      ],
      "implemented": true,
      "description": "增加伤害 25",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 25,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "stat_id": "strength"
      },
      "source": "skills/skill_flat_damage_t3"
    },
    {
      "id": "skill_flat_damage_t7",
      "name": "伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "strength": 200
          }
        }
      ],
      "implemented": true,
      "description": "增加伤害 200",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 200,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "stat_id": "strength"
      },
      "source": "skills/skill_flat_damage_t7"
    },
    {
      "id": "skill_percent_melee_damage_t1",
      "name": "弓和近战伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "melee_damage_modifier": 0.1,
            "bow_damage_modifier": 0.1
          }
        }
      ],
      "implemented": true,
      "description": "增加弓和近战武器伤害10%",
      "kind": "stats",
      "sourceDefinition": {
        "type": "stats",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_20"
        },
        "refund": {
          "coin_id": "earn_coin_soft_16"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_20"
        },
        "stat_ids": [
          "melee_damage_modifier",
          "bow_damage_modifier"
        ]
      },
      "source": "skills/skill_percent_melee_damage_t1"
    },
    {
      "id": "skill_percent_melee_damage_t2",
      "name": "弓和近战伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "melee_damage_modifier": 0.2,
            "bow_damage_modifier": 0.2
          }
        }
      ],
      "implemented": true,
      "description": "增加弓和近战武器伤害20%",
      "kind": "stats",
      "sourceDefinition": {
        "type": "stats",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "stat_ids": [
          "melee_damage_modifier",
          "bow_damage_modifier"
        ]
      },
      "source": "skills/skill_percent_melee_damage_t2"
    },
    {
      "id": "skill_percent_melee_damage_t4",
      "name": "弓和近战伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "melee_damage_modifier": 0.1,
            "bow_damage_modifier": 0.1
          }
        }
      ],
      "implemented": true,
      "description": "增加弓和近战武器伤害10%",
      "kind": "stats",
      "sourceDefinition": {
        "type": "stats",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "stat_ids": [
          "melee_damage_modifier",
          "bow_damage_modifier"
        ]
      },
      "source": "skills/skill_percent_melee_damage_t4"
    },
    {
      "id": "skill_percent_melee_damage_t5",
      "name": "弓和近战伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "melee_damage_modifier": 0.2,
            "bow_damage_modifier": 0.2
          }
        }
      ],
      "implemented": true,
      "description": "增加弓和近战武器伤害20%",
      "kind": "stats",
      "sourceDefinition": {
        "type": "stats",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "stat_ids": [
          "melee_damage_modifier",
          "bow_damage_modifier"
        ]
      },
      "source": "skills/skill_percent_melee_damage_t5"
    },
    {
      "id": "skill_flat_melee_damage_t5",
      "name": "近战伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "melee_damage_increment": 200
          }
        }
      ],
      "implemented": true,
      "description": "增加近战武器伤害 200",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 200,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "is_persistent": true,
        "stat_id": "melee_damage_increment"
      },
      "source": "skills/skill_flat_melee_damage_t5"
    },
    {
      "id": "skill_percent_evasion_t1",
      "name": "逃避",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "evasion": 0.01
          }
        }
      ],
      "implemented": true,
      "description": "增加躲避几率 1%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.01,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_20"
        },
        "refund": {
          "coin_id": "earn_coin_soft_16"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_20"
        },
        "stat_id": "evasion"
      },
      "source": "skills/skill_percent_evasion_t1"
    },
    {
      "id": "skill_percent_evasion_t4",
      "name": "逃避",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "evasion": 0.03
          }
        }
      ],
      "implemented": true,
      "description": "增加躲避几率 3%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.03,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "stat_id": "evasion"
      },
      "source": "skills/skill_percent_evasion_t4"
    },
    {
      "id": "skill_percent_melee_resistance_t1",
      "name": "近战保护",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "steelarm_resistance": 0.05
          }
        }
      ],
      "implemented": true,
      "description": "增加对近战武器的保护 5%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.05,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_20"
        },
        "refund": {
          "coin_id": "earn_coin_soft_16"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_20"
        },
        "stat_id": "steelarm_resistance"
      },
      "source": "skills/skill_percent_melee_resistance_t1"
    },
    {
      "id": "skill_percent_melee_resistance_t2",
      "name": "近战保护",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "steelarm_resistance": 0.1
          }
        }
      ],
      "implemented": true,
      "description": "增加对近战武器的保护 10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "stat_id": "steelarm_resistance"
      },
      "source": "skills/skill_percent_melee_resistance_t2"
    },
    {
      "id": "skill_percent_melee_resistance_t4",
      "name": "近战保护",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "steelarm_resistance": 0.1
          }
        }
      ],
      "implemented": true,
      "description": "增加对近战武器的保护 10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "stat_id": "steelarm_resistance"
      },
      "source": "skills/skill_percent_melee_resistance_t4"
    },
    {
      "id": "skill_percent_range_resistance_t2",
      "name": "枪支保护",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "firearm_resistance": 0.1
          }
        }
      ],
      "implemented": true,
      "description": "增加对火器的保护 10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "stat_id": "firearm_resistance"
      },
      "source": "skills/skill_percent_range_resistance_t2"
    },
    {
      "id": "skill_durability_loss_decrease_death",
      "name": "死刑",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在死亡时减少物品耐久度损失 5%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.05,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "is_persistent": true,
        "stat_id": "death_penalty_reduction"
      },
      "source": "skills/skill_durability_loss_decrease_death"
    },
    {
      "id": "skill_flat_attack_speed_t2",
      "name": "攻击。速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "dexterity": 10
          }
        }
      ],
      "implemented": true,
      "description": "提高角色的攻击速度10",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 10,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "stat_id": "dexterity"
      },
      "source": "skills/skill_flat_attack_speed_t2"
    },
    {
      "id": "skill_flat_attack_speed_t4",
      "name": "攻击。速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "dexterity": 20
          }
        }
      ],
      "implemented": true,
      "description": "将角色的攻击速度增加20",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 20,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "stat_id": "dexterity"
      },
      "source": "skills/skill_flat_attack_speed_t4"
    },
    {
      "id": "skill_flat_attack_speed_t6",
      "name": "攻击。速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "dexterity": 25
          }
        }
      ],
      "implemented": true,
      "description": "提高角色的攻击速度25",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 25,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "is_persistent": true,
        "stat_id": "dexterity"
      },
      "source": "skills/skill_flat_attack_speed_t6"
    },
    {
      "id": "skill_flat_attack_speed_t6_2",
      "name": "攻击。速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "dexterity": 50
          }
        }
      ],
      "implemented": true,
      "description": "将角色的攻击速度提高50",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 50,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "stat_id": "dexterity"
      },
      "source": "skills/skill_flat_attack_speed_t6_2"
    },
    {
      "id": "skill_percent_damage_t2",
      "name": "伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "damage_modifier": 0.1
          }
        }
      ],
      "implemented": true,
      "description": "增加伤害 10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "stat_id": "damage_modifier"
      },
      "source": "skills/skill_percent_damage_t2"
    },
    {
      "id": "skill_percent_damage_t5",
      "name": "伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "damage_modifier": 0.1
          }
        }
      ],
      "implemented": true,
      "description": "增加伤害 10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "stat_id": "damage_modifier"
      },
      "source": "skills/skill_percent_damage_t5"
    },
    {
      "id": "skill_percent_damage_resistance_t2",
      "name": "损害保护",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "damage_resistance": 0.05
          }
        }
      ],
      "implemented": true,
      "description": "增加伤害抵抗 5%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.05,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "stat_id": "damage_resistance"
      },
      "source": "skills/skill_percent_damage_resistance_t2"
    },
    {
      "id": "skill_percent_range_damage_t2",
      "name": "枪械损伤",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "firearm_damage_modifier": 0.2
          }
        }
      ],
      "implemented": true,
      "description": "增加火器武器伤害 20%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "stat_id": "firearm_damage_modifier"
      },
      "source": "skills/skill_percent_range_damage_t2"
    },
    {
      "id": "skill_percent_range_damage_t5",
      "name": "枪械损伤",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "firearm_damage_modifier": 0.2
          }
        }
      ],
      "implemented": true,
      "description": "增加火器武器伤害 20%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "stat_id": "firearm_damage_modifier"
      },
      "source": "skills/skill_percent_range_damage_t5"
    },
    {
      "id": "skill_melee_weapon_increased_range",
      "name": "攻击范围",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "attack_range_melee_modifier": 0.2
          }
        }
      ],
      "implemented": true,
      "description": "增加近战武器攻击范围 20%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "stat_id": "attack_range_melee_modifier"
      },
      "source": "skills/skill_melee_weapon_increased_range"
    },
    {
      "id": "skill_unlock_food_slot",
      "name": "食物 插槽",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "解锁一个额外的食物槽",
      "kind": "unlock_food_slot",
      "sourceDefinition": {
        "type": "unlock_food_slot",
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "is_persistent": true
      },
      "source": "skills/skill_unlock_food_slot"
    },
    {
      "id": "skill_unlock_amulet_slot",
      "name": "护身符 插槽",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "解锁 一个 护身符 插槽",
      "kind": "unlock_equip_cell",
      "sourceDefinition": {
        "type": "unlock_equip_cell",
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "is_persistent": true
      },
      "source": "skills/skill_unlock_amulet_slot"
    },
    {
      "id": "skill_bandage_heal_boost",
      "name": "绷带 愈合",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加绷带效果 20%",
      "kind": "heal_item_modifier",
      "sourceDefinition": {
        "type": "heal_item_modifier",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "inventory_tags": [
          "bandage"
        ]
      },
      "source": "skills/skill_bandage_heal_boost"
    },
    {
      "id": "skill_crit_chance",
      "name": "暴击几率",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "critical_hit_chance": 0.05
          }
        }
      ],
      "implemented": true,
      "description": "提高暴击几率 5%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.05,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "stat_id": "critical_hit_chance"
      },
      "source": "skills/skill_crit_chance"
    },
    {
      "id": "skill_crit_damage_t3",
      "name": "暴击伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "critical_modifier": 0.2
          }
        }
      ],
      "implemented": true,
      "description": "暴击伤害提高 20%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "stat_id": "critical_modifier"
      },
      "source": "skills/skill_crit_damage_t3"
    },
    {
      "id": "skill_crit_damage_t6",
      "name": "暴击伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "critical_modifier": 0.2
          }
        }
      ],
      "implemented": true,
      "description": "暴击伤害提高 20%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "stat_id": "critical_modifier"
      },
      "source": "skills/skill_crit_damage_t6"
    },
    {
      "id": "skill_revolver_damage_boost_t3",
      "name": "左轮手枪 伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "pistol_damage_modifier": 0.2
          }
        }
      ],
      "implemented": true,
      "description": "增加左轮手枪伤害 20%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "stat_id": "pistol_damage_modifier"
      },
      "source": "skills/skill_revolver_damage_boost_t3"
    },
    {
      "id": "skill_shotgun_damage_boost_t3",
      "name": "霰弹枪 伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "shotgun_damage_modifier": 0.1
          }
        }
      ],
      "implemented": true,
      "description": "增加霰弹枪伤害10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "stat_id": "shotgun_damage_modifier"
      },
      "source": "skills/skill_shotgun_damage_boost_t3"
    },
    {
      "id": "skill_rifle_damage_boost_t3",
      "name": "步枪伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "rifle_damage_modifier": 0.2
          }
        }
      ],
      "implemented": true,
      "description": "增加步枪伤害 20%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "stat_id": "rifle_damage_modifier"
      },
      "source": "skills/skill_rifle_damage_boost_t3"
    },
    {
      "id": "skill_revolver_damage_boost_t6",
      "name": "左轮手枪 伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "pistol_damage_modifier": 0.2
          }
        }
      ],
      "implemented": true,
      "description": "增加左轮手枪伤害 20%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "stat_id": "pistol_damage_modifier"
      },
      "source": "skills/skill_revolver_damage_boost_t6"
    },
    {
      "id": "skill_shotgun_damage_boost_t6",
      "name": "霰弹枪 伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "shotgun_damage_modifier": 0.1
          }
        }
      ],
      "implemented": true,
      "description": "增加霰弹枪伤害10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "stat_id": "shotgun_damage_modifier"
      },
      "source": "skills/skill_shotgun_damage_boost_t6"
    },
    {
      "id": "skill_rifle_damage_boost_t6",
      "name": "步枪伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "rifle_damage_modifier": 0.2
          }
        }
      ],
      "implemented": true,
      "description": "增加步枪伤害 20%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "stat_id": "rifle_damage_modifier"
      },
      "source": "skills/skill_rifle_damage_boost_t6"
    },
    {
      "id": "skill_stealth_move_speed_increase",
      "name": "速度 在 隐形 模式",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在隐身模式下增加移动速度20%",
      "kind": "stealth_speed",
      "sourceDefinition": {
        "type": "stealth_speed",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        }
      },
      "source": "skills/skill_stealth_move_speed_increase"
    },
    {
      "id": "skill_boss_bandit_bonus_damage",
      "name": "对强盗头目的损害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加对强盗首领和熟练强盗的伤害 20%",
      "kind": "damage_modifier",
      "sourceDefinition": {
        "type": "damage_modifier",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "avatar_filter_ids": [
          "goon_all",
          "bandit_elite_all",
          "bandit_boss_all"
        ]
      },
      "source": "skills/skill_boss_bandit_bonus_damage"
    },
    {
      "id": "skill_bandit_bonus_damage",
      "name": "对强盗的损害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加对强盗的伤害20%，除了强盗首领和熟练强盗",
      "kind": "damage_modifier",
      "sourceDefinition": {
        "type": "damage_modifier",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "avatar_filter_ids": [
          "bandit_basic_all"
        ]
      },
      "source": "skills/skill_bandit_bonus_damage"
    },
    {
      "id": "skill_animal_bonus_damage",
      "name": "对动物的损害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "animal_damage_modifier": 0.2
          }
        }
      ],
      "implemented": true,
      "description": "增加对动物的伤害 20%",
      "kind": "damage_modifier",
      "sourceDefinition": {
        "type": "damage_modifier",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "avatar_filter_ids": [
          "animal_all"
        ]
      },
      "source": "skills/skill_animal_bonus_damage",
      "condition": {
        "targetType": "animal"
      }
    },
    {
      "id": "skill_shotgun_cone_boost",
      "name": "霰弹枪 锥形",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "霰弹枪攻击锥形增加了25%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.25,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "stat_id": "shotgun_angle_modifier"
      },
      "source": "skills/skill_shotgun_cone_boost"
    },
    {
      "id": "skill_ointment_heal_boost",
      "name": "软膏和注入治疗",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加治疗软膏和灌注效果 10%",
      "kind": "heal_item_modifier",
      "sourceDefinition": {
        "type": "heal_item_modifier",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "inventory_tags": [
          "oil_heal",
          "flask_heal"
        ]
      },
      "source": "skills/skill_ointment_heal_boost"
    },
    {
      "id": "skill_glass_cannon",
      "name": "低 HP 伤害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "生命低于上限 50% 时，缺失生命按 10% 阶段增加 10% 伤害；此条件触发未纳入基础模拟。",
      "kind": "health_lost_damage_modifier",
      "sourceDefinition": {
        "type": "health_lost_damage_modifier",
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "damage_modifier_step": 0.1,
        "health_lost_step": 0.1,
        "health_required": 0.5
      },
      "source": "skills/skill_glass_cannon"
    },
    {
      "id": "skill_fire_resistance_t7",
      "name": "耐火性",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加火焰抵抗 10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "stat_id": "fire_resistance"
      },
      "source": "skills/skill_fire_resistance_t7"
    },
    {
      "id": "skill_fire_resistance_t7_2",
      "name": "耐火性",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加火焰抗性 10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "stat_id": "fire_resistance"
      },
      "source": "skills/skill_fire_resistance_t7_2"
    },
    {
      "id": "skill_fire_resistance_t7_3",
      "name": "耐火性",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加火焰抗性 20%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "stat_id": "fire_resistance"
      },
      "source": "skills/skill_fire_resistance_t7_3"
    },
    {
      "id": "skill_swamp_movement_boost_t5",
      "name": "移动速度 沼泽",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在沼泽水中增加移动速度10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "stat_id": "water_pressure_resistance"
      },
      "source": "skills/skill_swamp_movement_boost_t5"
    },
    {
      "id": "skill_snow_movement_boost_t6",
      "name": "移动 速度 雪",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在雪中增加移动速度10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "stat_id": "snow_resistance"
      },
      "source": "skills/skill_snow_movement_boost_t6"
    },
    {
      "id": "skill_swamp_movement_boost_t5_2",
      "name": "移动速度 沼泽",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在沼泽水中增加移动速度10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "stat_id": "water_pressure_resistance"
      },
      "source": "skills/skill_swamp_movement_boost_t5_2"
    },
    {
      "id": "skill_swamp_movement_boost_t5_3",
      "name": "移动速度 沼泽",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在沼泽水中增加移动速度 20%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "stat_id": "water_pressure_resistance"
      },
      "source": "skills/skill_swamp_movement_boost_t5_3"
    },
    {
      "id": "skill_snow_movement_boost_t6_2",
      "name": "移动 速度 雪",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在雪中增加移动速度10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "stat_id": "snow_resistance"
      },
      "source": "skills/skill_snow_movement_boost_t6_2"
    },
    {
      "id": "skill_snow_movement_boost_t6_3",
      "name": "移动 速度 雪",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在雪中增加移动速度20%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "stat_id": "snow_resistance"
      },
      "source": "skills/skill_snow_movement_boost_t6_3"
    },
    {
      "id": "skill_one_shot",
      "name": "瞬间杀死",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "任何攻击有 1% 机会立即杀死任何敌人除了老板",
      "kind": "one_shot",
      "sourceDefinition": {
        "type": "one_shot",
        "amount": 0.01,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "avatar_filter_ids": [
          "animal_all_except_bosses",
          "bandit_basic_all",
          "ghosts_basic"
        ]
      },
      "source": "skills/skill_one_shot"
    },
    {
      "id": "skill_shotguns_extra_target",
      "name": "额外的霰弹枪目标",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "允许你在霰弹枪的锥形范围内击中一个额外的目标",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 1,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "stat_id": "shotgun_max_damage_increment"
      },
      "source": "skills/skill_shotguns_extra_target"
    },
    {
      "id": "skill_death_evasion",
      "name": "逃避死亡",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "有一个 10% 机会，你可以躲避一个致命的打击",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "stat_id": "escape_death_modifier"
      },
      "source": "skills/skill_death_evasion"
    },
    {
      "id": "skill_stun_resistance",
      "name": "眩晕保护",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "有一个 25% 机会 你 可以 逃避 任何 眩晕 或 击倒",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.25,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "stat_id": "knockdown_resistance"
      },
      "source": "skills/skill_stun_resistance"
    },
    {
      "id": "skill_food_duration_boost",
      "name": "稀有 食物 持续时间",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "将稀有食物和饮料效果的持续时间增加 100%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "stat_id": "rare_food_duration"
      },
      "source": "skills/skill_food_duration_boost"
    },
    {
      "id": "skill_unlock_tame",
      "name": "驯服动物",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "wisdom": 5
          }
        }
      ],
      "implemented": true,
      "description": "解锁动物驯服并给予5灵魂点数",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 5,
        "is_persistent": true,
        "stat_id": "wisdom"
      },
      "source": "skills/skill_unlock_tame"
    },
    {
      "id": "skill_spirit_t1",
      "name": "精神",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "wisdom": 10
          }
        }
      ],
      "implemented": true,
      "description": "增加精神 10",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 10,
        "buy": {
          "coin_id": "spend_coin_soft_20"
        },
        "refund": {
          "coin_id": "earn_coin_soft_16"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_20"
        },
        "stat_id": "wisdom"
      },
      "source": "skills/skill_spirit_t1"
    },
    {
      "id": "skill_spirit_t2_1",
      "name": "精神",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "wisdom": 10
          }
        }
      ],
      "implemented": true,
      "description": "增加精神 10",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 10,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "stat_id": "wisdom"
      },
      "source": "skills/skill_spirit_t2_1"
    },
    {
      "id": "skill_spirit_t2_2",
      "name": "精神",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "wisdom": 10
          }
        }
      ],
      "implemented": true,
      "description": "增加精神 10",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 10,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "stat_id": "wisdom"
      },
      "source": "skills/skill_spirit_t2_2"
    },
    {
      "id": "skill_spirit_t3_1",
      "name": "精神",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "wisdom": 10
          }
        }
      ],
      "implemented": true,
      "description": "增加精神 10",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 10,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "stat_id": "wisdom"
      },
      "source": "skills/skill_spirit_t3_1"
    },
    {
      "id": "skill_spirit_t3_2",
      "name": "精神",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "wisdom": 10
          }
        }
      ],
      "implemented": true,
      "description": "提高精神 10",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 10,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "stat_id": "wisdom"
      },
      "source": "skills/skill_spirit_t3_2"
    },
    {
      "id": "skill_spirit_t4_1",
      "name": "精神",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "wisdom": 10
          }
        }
      ],
      "implemented": true,
      "description": "提高精神 10",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 10,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "stat_id": "wisdom"
      },
      "source": "skills/skill_spirit_t4_1"
    },
    {
      "id": "skill_spirit_t4_2",
      "name": "精神",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "wisdom": 10
          }
        }
      ],
      "implemented": true,
      "description": "提高精神 10",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 10,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "stat_id": "wisdom"
      },
      "source": "skills/skill_spirit_t4_2"
    },
    {
      "id": "skill_spirit_t5_1",
      "name": "精神",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "wisdom": 10
          }
        }
      ],
      "implemented": true,
      "description": "增加精神 10",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 10,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "stat_id": "wisdom"
      },
      "source": "skills/skill_spirit_t5_1"
    },
    {
      "id": "skill_spirit_t5_2",
      "name": "精神",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "wisdom": 10
          }
        }
      ],
      "implemented": true,
      "description": "提高精神 10",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 10,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "stat_id": "wisdom"
      },
      "source": "skills/skill_spirit_t5_2"
    },
    {
      "id": "skill_spirit_t6_1",
      "name": "精神",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "wisdom": 15
          }
        }
      ],
      "implemented": true,
      "description": "提高精神 15",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 15,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "stat_id": "wisdom"
      },
      "source": "skills/skill_spirit_t6_1"
    },
    {
      "id": "skill_spirit_t6_2",
      "name": "精神",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "wisdom": 15
          }
        }
      ],
      "implemented": true,
      "description": "增加精神 15",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 15,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "stat_id": "wisdom"
      },
      "source": "skills/skill_spirit_t6_2"
    },
    {
      "id": "skill_spirit_t7_1",
      "name": "精神",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "wisdom": 15
          }
        }
      ],
      "implemented": true,
      "description": "提高精神 15",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 15,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "stat_id": "wisdom"
      },
      "source": "skills/skill_spirit_t7_1"
    },
    {
      "id": "skill_spirit_t7_2",
      "name": "精神",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "wisdom": 15
          }
        }
      ],
      "implemented": true,
      "description": "增加精神 15",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 15,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "stat_id": "wisdom"
      },
      "source": "skills/skill_spirit_t7_2"
    },
    {
      "id": "skill_percent_resistance_against_animals",
      "name": "动物 保护",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {
            "animal_resistance": 0.05
          }
        }
      ],
      "implemented": true,
      "description": "增加对动物的保护 5%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.05,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_20"
        },
        "refund": {
          "coin_id": "earn_coin_soft_16"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_20"
        },
        "stat_id": "animal_resistance"
      },
      "source": "skills/skill_percent_resistance_against_animals"
    },
    {
      "id": "skill_movement_speed_global_map_boost",
      "name": "地图 速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在全球地图上增加移动速度20%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_20"
        },
        "refund": {
          "coin_id": "earn_coin_soft_16"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_20"
        },
        "stat_id": "global_map_movement_time_reduction"
      },
      "source": "skills/skill_movement_speed_global_map_boost"
    },
    {
      "id": "skill_max_energy",
      "name": "最大能量",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加角色的最大能量 10",
      "kind": "max_energy",
      "sourceDefinition": {
        "type": "max_energy",
        "amount": 10,
        "buy": {
          "coin_id": "spend_coin_soft_20"
        },
        "refund": {
          "coin_id": "earn_coin_soft_16"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_20"
        }
      },
      "source": "skills/skill_max_energy"
    },
    {
      "id": "skill_unlock_recipe_bait_t1_t2_common",
      "name": "诱饵 II：常见",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "is_persistent": true,
        "pet_type": "combat",
        "species": [
          "wolf",
          "lynx",
          "coyote",
          "boar"
        ],
        "levels": [
          1,
          1,
          1,
          1
        ]
      },
      "source": "skills/skill_unlock_recipe_bait_t1_t2_common"
    },
    {
      "id": "skill_unlock_recipe_bait_t1_t2_bear",
      "name": "诱饵 II：熊",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "is_persistent": true,
        "pet_type": "combat",
        "species": [
          "bear"
        ],
        "levels": [
          1
        ]
      },
      "source": "skills/skill_unlock_recipe_bait_t1_t2_bear"
    },
    {
      "id": "skill_unlock_recipe_bait_t1_t2_alpha",
      "name": "诱饵 II：阿尔法 狼，美洲狮",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "is_persistent": true,
        "pet_type": "combat",
        "species": [
          "dire_wolf",
          "puma"
        ],
        "levels": [
          1,
          1
        ]
      },
      "source": "skills/skill_unlock_recipe_bait_t1_t2_alpha"
    },
    {
      "id": "skill_unlock_recipe_bait_t3_common",
      "name": "诱饵 III：普通",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "is_persistent": true,
        "pet_type": "combat",
        "species": [
          "wolf",
          "lynx"
        ],
        "levels": [
          2,
          2
        ]
      },
      "source": "skills/skill_unlock_recipe_bait_t3_common"
    },
    {
      "id": "skill_unlock_recipe_bait_t3_bear",
      "name": "诱饵 III：熊",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "is_persistent": true,
        "pet_type": "combat",
        "species": [
          "bear"
        ],
        "levels": [
          2
        ]
      },
      "source": "skills/skill_unlock_recipe_bait_t3_bear"
    },
    {
      "id": "skill_unlock_recipe_bait_t3_alpha",
      "name": "诱饵 III：阿尔法狼，美洲狮",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "is_persistent": true,
        "pet_type": "combat",
        "species": [
          "dire_wolf",
          "puma"
        ],
        "levels": [
          2,
          2
        ]
      },
      "source": "skills/skill_unlock_recipe_bait_t3_alpha"
    },
    {
      "id": "skill_unlock_recipe_bait_t4_common",
      "name": "诱饵 IV：常见",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "is_persistent": true,
        "pet_type": "combat",
        "species": [
          "wolf",
          "lynx",
          "boar"
        ],
        "levels": [
          3,
          3,
          2
        ]
      },
      "source": "skills/skill_unlock_recipe_bait_t4_common"
    },
    {
      "id": "skill_unlock_recipe_bait_t4_bear",
      "name": "诱饵 IV： 熊",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "is_persistent": true,
        "pet_type": "combat",
        "species": [
          "bear"
        ],
        "levels": [
          3
        ]
      },
      "source": "skills/skill_unlock_recipe_bait_t4_bear"
    },
    {
      "id": "skill_unlock_recipe_bait_t4_alpha",
      "name": "诱饵 IV：阿尔法狼，美洲狮",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "is_persistent": true,
        "pet_type": "combat",
        "species": [
          "dire_wolf",
          "puma"
        ],
        "levels": [
          3,
          3
        ]
      },
      "source": "skills/skill_unlock_recipe_bait_t4_alpha"
    },
    {
      "id": "skill_unlock_recipe_bait_t5_common",
      "name": "诱饵 V：常见",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "is_persistent": true,
        "pet_type": "combat",
        "species": [
          "wolf",
          "lynx"
        ],
        "levels": [
          4,
          4
        ]
      },
      "source": "skills/skill_unlock_recipe_bait_t5_common"
    },
    {
      "id": "skill_unlock_recipe_bait_t5_bear",
      "name": "诱饵 V：熊",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "is_persistent": true,
        "pet_type": "combat",
        "species": [
          "bear"
        ],
        "levels": [
          4
        ]
      },
      "source": "skills/skill_unlock_recipe_bait_t5_bear"
    },
    {
      "id": "skill_unlock_recipe_bait_t5_alpha",
      "name": "诱饵 V：阿尔法 狼，美洲狮",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "is_persistent": true,
        "pet_type": "combat",
        "species": [
          "dire_wolf",
          "puma"
        ],
        "levels": [
          4,
          4
        ]
      },
      "source": "skills/skill_unlock_recipe_bait_t5_alpha"
    },
    {
      "id": "skill_unlock_recipe_bait_t5_alligators",
      "name": "诱饵 V： 短吻鳄",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "is_persistent": true,
        "pet_type": "combat",
        "species": [
          "crocodile"
        ],
        "levels": [
          1
        ]
      },
      "source": "skills/skill_unlock_recipe_bait_t5_alligators"
    },
    {
      "id": "skill_unlock_recipe_bait_t6_common",
      "name": "诱饵 VI：常见",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "is_persistent": true,
        "pet_type": "combat",
        "species": [
          "wolf",
          "lynx"
        ],
        "levels": [
          5,
          5
        ]
      },
      "source": "skills/skill_unlock_recipe_bait_t6_common"
    },
    {
      "id": "skill_unlock_recipe_bait_t6_bear",
      "name": "诱饵 VI：熊",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "is_persistent": true,
        "pet_type": "combat",
        "species": [
          "bear"
        ],
        "levels": [
          5
        ]
      },
      "source": "skills/skill_unlock_recipe_bait_t6_bear"
    },
    {
      "id": "skill_unlock_recipe_bait_t6_alpha",
      "name": "诱饵 VI：阿尔法狼，美洲狮",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "is_persistent": true,
        "pet_type": "combat",
        "species": [
          "dire_wolf",
          "puma"
        ],
        "levels": [
          5,
          5
        ]
      },
      "source": "skills/skill_unlock_recipe_bait_t6_alpha"
    },
    {
      "id": "skill_unlock_recipe_bait_t7_common",
      "name": "诱饵 VII：普通",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "is_persistent": true,
        "pet_type": "combat",
        "species": [
          "wolf",
          "lynx",
          "boar"
        ],
        "levels": [
          6,
          6,
          3
        ]
      },
      "source": "skills/skill_unlock_recipe_bait_t7_common"
    },
    {
      "id": "skill_unlock_recipe_bait_t7_bear",
      "name": "诱饵 VII：熊",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "is_persistent": true,
        "pet_type": "combat",
        "species": [
          "bear"
        ],
        "levels": [
          6
        ]
      },
      "source": "skills/skill_unlock_recipe_bait_t7_bear"
    },
    {
      "id": "skill_unlock_recipe_bait_t7_alpha",
      "name": "诱饵 VII：阿尔法狼，美洲狮",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "is_persistent": true,
        "pet_type": "combat",
        "species": [
          "dire_wolf",
          "puma"
        ],
        "levels": [
          6,
          6
        ]
      },
      "source": "skills/skill_unlock_recipe_bait_t7_alpha"
    },
    {
      "id": "skill_unlock_fishing",
      "name": "钓鱼",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "learn_recipe",
      "sourceDefinition": {
        "type": "learn_recipe",
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "is_persistent": true,
        "recipe_ids": [
          "wls_fishing_rod_t4",
          "wls_fishing_rod_t5",
          "wls_fishing_rod_t6",
          "wls_fishing_rod_t7"
        ]
      },
      "source": "skills/skill_unlock_fishing"
    },
    {
      "id": "skill_ghost_damage_resistance_t2",
      "name": "来自灵魂的保护",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加对灵魂的保护 10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "stat_id": "ghost_damage_resistance"
      },
      "source": "skills/skill_ghost_damage_resistance_t2"
    },
    {
      "id": "skill_ghost_damage_resistance_t7",
      "name": "来自灵魂的保护",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加对灵魂的保护 10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "stat_id": "ghost_damage_resistance"
      },
      "source": "skills/skill_ghost_damage_resistance_t7"
    },
    {
      "id": "skill_pet_damage_resistance_t2",
      "name": "宠物 防御",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加你的宠物的防御 10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "stat_id": "pet_resistance"
      },
      "source": "skills/skill_pet_damage_resistance_t2"
    },
    {
      "id": "skill_pet_damage_resistance_t7",
      "name": "宠物 防御",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加你的宠物的防御 10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "stat_id": "pet_resistance"
      },
      "source": "skills/skill_pet_damage_resistance_t7"
    },
    {
      "id": "skill_spirit_cave_reroll_1",
      "name": "精神洞穴 重掷",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在灵魂洞穴中给予1次能力重掷",
      "kind": "spirit_cave_reroll",
      "sourceDefinition": {
        "type": "spirit_cave_reroll",
        "amount": 1,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        }
      },
      "source": "skills/skill_spirit_cave_reroll_1"
    },
    {
      "id": "skill_ghost_bonus_damage_t2",
      "name": "对灵魂的损害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加对灵魂的伤害 10%，除了神话灵魂",
      "kind": "damage_modifier",
      "sourceDefinition": {
        "type": "damage_modifier",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "avatar_filter_ids": [
          "ghosts_basic"
        ]
      },
      "source": "skills/skill_ghost_bonus_damage_t2"
    },
    {
      "id": "skill_ghost_bonus_damage_t4",
      "name": "对灵魂的损害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加对灵魂的伤害 10%，除了神话灵魂",
      "kind": "damage_modifier",
      "sourceDefinition": {
        "type": "damage_modifier",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "avatar_filter_ids": [
          "ghosts_basic"
        ]
      },
      "source": "skills/skill_ghost_bonus_damage_t4"
    },
    {
      "id": "skill_ghost_bonus_damage_t6",
      "name": "对灵魂的损害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加对灵魂的伤害 10%，除了神话灵魂",
      "kind": "damage_modifier",
      "sourceDefinition": {
        "type": "damage_modifier",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "avatar_filter_ids": [
          "ghosts_basic"
        ]
      },
      "source": "skills/skill_ghost_bonus_damage_t6"
    },
    {
      "id": "skill_boss_ghost_bonus_damage_t2",
      "name": "神话 精神 的 损害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "提高对神话精灵造成的伤害 20%",
      "kind": "damage_modifier",
      "sourceDefinition": {
        "type": "damage_modifier",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "avatar_filter_ids": [
          "ghosts_bosses"
        ]
      },
      "source": "skills/skill_boss_ghost_bonus_damage_t2"
    },
    {
      "id": "skill_boss_ghost_bonus_damage_t4",
      "name": "神话 精神 的 损害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "提高对神话精灵造成的伤害 20%",
      "kind": "damage_modifier",
      "sourceDefinition": {
        "type": "damage_modifier",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "avatar_filter_ids": [
          "ghosts_bosses"
        ]
      },
      "source": "skills/skill_boss_ghost_bonus_damage_t4"
    },
    {
      "id": "skill_boss_ghost_bonus_damage_t6",
      "name": "神话 精神 的 损害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "提高对神话精灵造成的伤害 20%",
      "kind": "damage_modifier",
      "sourceDefinition": {
        "type": "damage_modifier",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "avatar_filter_ids": [
          "ghosts_bosses"
        ]
      },
      "source": "skills/skill_boss_ghost_bonus_damage_t6"
    },
    {
      "id": "skill_animal_friend",
      "name": "中性动物",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "非攻击性动物不再害怕你",
      "kind": "simple",
      "sourceDefinition": {
        "type": "simple",
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        }
      },
      "source": "skills/skill_animal_friend"
    },
    {
      "id": "skill_hidden_loot_objects",
      "name": "隐藏的战利品",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "你的宠物有机会在地点找到一个战利品箱子",
      "kind": "simple",
      "sourceDefinition": {
        "type": "simple",
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        }
      },
      "source": "skills/skill_hidden_loot_objects"
    },
    {
      "id": "skill_unlock_augmentation_slot_mounts_and_enclosure_1",
      "name": "动物 模块 插槽",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在马厩和宠物屋中解锁+1模块槽",
      "kind": "unlock_augmentation_slot",
      "sourceDefinition": {
        "type": "unlock_augmentation_slot",
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "is_persistent": true,
        "building_tag": "pet_mounts_feeder"
      },
      "source": "skills/skill_unlock_augmentation_slot_mounts_and_enclosure_1"
    },
    {
      "id": "skill_unlock_augmentation_slot_mounts_and_enclosure_2",
      "name": "动物 模块 插槽",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在马厩和宠物屋中解锁+1模块槽",
      "kind": "unlock_augmentation_slot",
      "sourceDefinition": {
        "type": "unlock_augmentation_slot",
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "is_persistent": true,
        "building_tag": "pet_mounts_feeder"
      },
      "source": "skills/skill_unlock_augmentation_slot_mounts_and_enclosure_2"
    },
    {
      "id": "skill_unlock_augmentation_slot_mounts_and_enclosure_3",
      "name": "动物 模块 插槽",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在马厩和宠物屋中解锁+1模块槽",
      "kind": "unlock_augmentation_slot",
      "sourceDefinition": {
        "type": "unlock_augmentation_slot",
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "is_persistent": true,
        "building_tag": "pet_mounts_feeder"
      },
      "source": "skills/skill_unlock_augmentation_slot_mounts_and_enclosure_3"
    },
    {
      "id": "skill_horse_endurance_t3",
      "name": "马 耐力",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加马的耐力 20",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 20,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "stat_id": "mount_endurance_increment"
      },
      "source": "skills/skill_horse_endurance_t3"
    },
    {
      "id": "skill_horse_endurance_t6",
      "name": "马 耐力",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加马的耐力 20",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 20,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "stat_id": "mount_endurance_increment"
      },
      "source": "skills/skill_horse_endurance_t6"
    },
    {
      "id": "skill_horse_max_energy_t3",
      "name": "马能量",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加马的最大能量 10",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 10,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "stat_id": "mount_energy_increment"
      },
      "source": "skills/skill_horse_max_energy_t3"
    },
    {
      "id": "skill_horse_max_energy_t4",
      "name": "马能量",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加马的最大能量 10",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 10,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "stat_id": "mount_energy_increment"
      },
      "source": "skills/skill_horse_max_energy_t4"
    },
    {
      "id": "skill_horse_max_energy_t6",
      "name": "马能量",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加马的最大能量 20",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 20,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "stat_id": "mount_energy_increment"
      },
      "source": "skills/skill_horse_max_energy_t6"
    },
    {
      "id": "skill_pet_feeder_satiety_boost",
      "name": "宠物饱足感",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "所有类型的肉和鱼提供额外的2饱足感",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 2,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "stat_id": "pets_hunger_stat_additional_amount"
      },
      "source": "skills/skill_pet_feeder_satiety_boost"
    },
    {
      "id": "skill_horse_speed",
      "name": "马 速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "提高马的速度 10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "stat_id": "mount_speed_modifier"
      },
      "source": "skills/skill_horse_speed"
    },
    {
      "id": "skill_pet_damage_t7",
      "name": "宠物 损害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加你的宠物的伤害由 10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "stat_id": "pet_damage_modifier"
      },
      "source": "skills/skill_pet_damage_t7"
    },
    {
      "id": "skill_pet_damage_t7_2",
      "name": "宠物 损害",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "增加你的宠物的伤害由 10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "stat_id": "pet_damage_modifier"
      },
      "source": "skills/skill_pet_damage_t7_2"
    },
    {
      "id": "skill_unlock_horses_t4",
      "name": "马 IV",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "解锁 访问 到 等级 4 马",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "amount": 1,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "is_persistent": true,
        "pet_type": "mount",
        "species": [
          "horse_riding",
          "horse_wagon"
        ],
        "levels": [
          5,
          5
        ]
      },
      "source": "skills/skill_unlock_horses_t4"
    },
    {
      "id": "skill_unlock_horses_t5",
      "name": "马 V",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "解锁 访问 到 等级 5 马",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "amount": 1,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "is_persistent": true,
        "pet_type": "mount",
        "species": [
          "horse_riding",
          "horse_wagon"
        ],
        "levels": [
          7,
          7
        ]
      },
      "source": "skills/skill_unlock_horses_t5"
    },
    {
      "id": "skill_unlock_horses_t6",
      "name": "马 VI",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "解锁 访问 到 等级 6 马",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "amount": 1,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "is_persistent": true,
        "pet_type": "mount",
        "species": [
          "horse_riding",
          "horse_wagon"
        ],
        "levels": [
          9,
          9
        ]
      },
      "source": "skills/skill_unlock_horses_t6"
    },
    {
      "id": "skill_unlock_horses_t7",
      "name": "马 VII",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "解锁 访问 到 等级 7 马",
      "kind": "pets_progression",
      "sourceDefinition": {
        "type": "pets_progression",
        "amount": 1,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "is_persistent": true,
        "pet_type": "mount",
        "species": [
          "horse_riding",
          "horse_wagon"
        ],
        "levels": [
          11,
          11
        ]
      },
      "source": "skills/skill_unlock_horses_t7"
    },
    {
      "id": "skill_unlock_autoplay",
      "name": "自动模式",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "解锁自动模式",
      "kind": "simple",
      "sourceDefinition": {
        "type": "simple",
        "is_persistent": true
      },
      "source": "skills/skill_unlock_autoplay"
    },
    {
      "id": "skill_tools_durability",
      "name": "工具耐用性",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "为制作的镐和斧增加耐久度 20",
      "kind": "craft_durability",
      "sourceDefinition": {
        "type": "craft_durability",
        "amount": 20,
        "buy": {
          "coin_id": "spend_coin_soft_20"
        },
        "refund": {
          "coin_id": "earn_coin_soft_16"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_20"
        },
        "inventory_tags": [
          "tool"
        ]
      },
      "source": "skills/skill_tools_durability"
    },
    {
      "id": "skill_crit_chance_stone",
      "name": "石头 收集",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "有 10% 机会，你可以一击得到石头",
      "kind": "crit_chance_gathering",
      "sourceDefinition": {
        "type": "crit_chance_gathering",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_20"
        },
        "refund": {
          "coin_id": "earn_coin_soft_16"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_20"
        },
        "resource_types": [
          "stone"
        ]
      },
      "source": "skills/skill_crit_chance_stone"
    },
    {
      "id": "skill_crit_chance_wood",
      "name": "木头 收集",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "有 10% 机会，你可以一击砍倒整棵树",
      "kind": "crit_chance_gathering",
      "sourceDefinition": {
        "type": "crit_chance_gathering",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_20"
        },
        "refund": {
          "coin_id": "earn_coin_soft_16"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_20"
        },
        "resource_types": [
          "wood"
        ]
      },
      "source": "skills/skill_crit_chance_wood"
    },
    {
      "id": "skill_crit_chance_ore",
      "name": "矿石 收集",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "有 10% 机会，你可以一击得到矿石",
      "kind": "crit_chance_gathering",
      "sourceDefinition": {
        "type": "crit_chance_gathering",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_20"
        },
        "refund": {
          "coin_id": "earn_coin_soft_16"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_20"
        },
        "resource_types": [
          "ore"
        ]
      },
      "source": "skills/skill_crit_chance_ore"
    },
    {
      "id": "skill_gathering_speed_t2",
      "name": "聚集速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "提高资源收集速度 5%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.05,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "stat_id": "gathering_speed_modifier"
      },
      "source": "skills/skill_gathering_speed_t2"
    },
    {
      "id": "skill_gathering_speed_t4",
      "name": "聚集速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "提高资源收集速度 5%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.05,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "stat_id": "gathering_speed_modifier"
      },
      "source": "skills/skill_gathering_speed_t4"
    },
    {
      "id": "skill_gathering_speed_t6",
      "name": "聚集速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "提高资源收集速度 5%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.05,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "stat_id": "gathering_speed_modifier"
      },
      "source": "skills/skill_gathering_speed_t6"
    },
    {
      "id": "skill_max_chests_t2",
      "name": "额外的箱子",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在你的牧场上增加最大数量的箱子 3",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 3,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "is_persistent": true,
        "stat_id": "chest_additional_max_amount"
      },
      "source": "skills/skill_max_chests_t2"
    },
    {
      "id": "skill_max_chests_t4",
      "name": "额外的箱子",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在你的牧场上增加最大数量的箱子 3",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 3,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "is_persistent": true,
        "stat_id": "chest_additional_max_amount"
      },
      "source": "skills/skill_max_chests_t4"
    },
    {
      "id": "skill_unlock_recipe_saddles_t3_t4",
      "name": "鞍座 III, IV",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "learn_recipe",
      "sourceDefinition": {
        "type": "learn_recipe",
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "is_persistent": true,
        "recipe_ids": [
          "wls2_mount_equipment_saddle_common_3",
          "wls2_mount_equipment_saddle_uncommon_3",
          "wls2_mount_equipment_saddle_rare_3",
          "wls2_mount_equipment_saddle_uncommon_4",
          "wls2_mount_equipment_saddle_rare_4"
        ]
      },
      "source": "skills/skill_unlock_recipe_saddles_t3_t4"
    },
    {
      "id": "skill_unlock_recipe_saddles_t5_t6",
      "name": "鞍座 V, VI",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "learn_recipe",
      "sourceDefinition": {
        "type": "learn_recipe",
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "is_persistent": true,
        "recipe_ids": [
          "wls2_mount_equipment_saddle_uncommon_5",
          "wls2_mount_equipment_saddle_rare_5",
          "wls2_mount_equipment_saddle_uncommon_6",
          "wls2_mount_equipment_saddle_rare_6"
        ]
      },
      "source": "skills/skill_unlock_recipe_saddles_t5_t6"
    },
    {
      "id": "skill_unlock_recipe_saddles_t7",
      "name": "鞍 VII",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "learn_recipe",
      "sourceDefinition": {
        "type": "learn_recipe",
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "is_persistent": true,
        "recipe_ids": [
          "wls2_mount_equipment_saddle_uncommon_7",
          "wls2_mount_equipment_saddle_rare_7"
        ]
      },
      "source": "skills/skill_unlock_recipe_saddles_t7"
    },
    {
      "id": "skill_unlock_augmentation_slot_workbenches_1",
      "name": "工作台 模块 插槽",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "解锁 +1 模块 插槽 在 工作台 上",
      "kind": "unlock_augmentation_slot",
      "sourceDefinition": {
        "type": "unlock_augmentation_slot",
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "is_persistent": true,
        "building_tag": "other"
      },
      "source": "skills/skill_unlock_augmentation_slot_workbenches_1"
    },
    {
      "id": "skill_unlock_augmentation_slot_workbenches_2",
      "name": "工作台 模块 插槽",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "解锁 +1 模块 插槽 在 工作台 上",
      "kind": "unlock_augmentation_slot",
      "sourceDefinition": {
        "type": "unlock_augmentation_slot",
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "is_persistent": true,
        "building_tag": "other"
      },
      "source": "skills/skill_unlock_augmentation_slot_workbenches_2"
    },
    {
      "id": "skill_unlock_augmentation_slot_workbenches_3",
      "name": "工作台 模块 插槽",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "解锁 +1 模块槽 在 工作台上",
      "kind": "unlock_augmentation_slot",
      "sourceDefinition": {
        "type": "unlock_augmentation_slot",
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "is_persistent": true,
        "building_tag": "other"
      },
      "source": "skills/skill_unlock_augmentation_slot_workbenches_3"
    },
    {
      "id": "skill_unlock_recipe_backpacks_t3",
      "name": "背包 III",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "learn_recipe",
      "sourceDefinition": {
        "type": "learn_recipe",
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "is_persistent": true,
        "recipe_ids": [
          "wls2_backpack_cowboy_3_common",
          "wls2_backpack_indian_3_common",
          "wls2_backpack_cowboy_3_uncommon",
          "wls2_backpack_indian_3_uncommon",
          "wls2_backpack_cowboy_3_rare",
          "wls2_backpack_indian_3_rare"
        ]
      },
      "source": "skills/skill_unlock_recipe_backpacks_t3"
    },
    {
      "id": "skill_unlock_recipe_backpacks_t4",
      "name": "背包 IV",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "learn_recipe",
      "sourceDefinition": {
        "type": "learn_recipe",
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "is_persistent": true,
        "recipe_ids": [
          "wls2_backpack_cowboy_4_uncommon",
          "wls2_backpack_indian_4_uncommon",
          "wls2_backpack_cowboy_4_rare",
          "wls2_backpack_indian_4_rare"
        ]
      },
      "source": "skills/skill_unlock_recipe_backpacks_t4"
    },
    {
      "id": "skill_unlock_recipe_backpacks_t5",
      "name": "背包 V",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "learn_recipe",
      "sourceDefinition": {
        "type": "learn_recipe",
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "is_persistent": true,
        "recipe_ids": [
          "wls2_backpack_cowboy_5_rare",
          "wls2_backpack_indian_5_rare"
        ]
      },
      "source": "skills/skill_unlock_recipe_backpacks_t5"
    },
    {
      "id": "skill_unlock_recipe_backpacks_t6",
      "name": "背包 VI",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "learn_recipe",
      "sourceDefinition": {
        "type": "learn_recipe",
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "is_persistent": true,
        "recipe_ids": [
          "wls2_backpack_cowboy_6_rare",
          "wls2_backpack_indian_6_rare"
        ]
      },
      "source": "skills/skill_unlock_recipe_backpacks_t6"
    },
    {
      "id": "skill_unlock_recipe_backpacks_t7",
      "name": "背包 VII",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "原版技能节点；运行时名称或多参数描述未在此展开。仅记录，不纳入此对战模型。",
      "kind": "learn_recipe",
      "sourceDefinition": {
        "type": "learn_recipe",
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "is_persistent": true,
        "recipe_ids": [
          "wls2_backpack_cowboy_7_rare",
          "wls2_backpack_indian_7_rare"
        ]
      },
      "source": "skills/skill_unlock_recipe_backpacks_t7"
    },
    {
      "id": "skill_town_traders_tier_2",
      "name": "贸易商品 二",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "解锁 +1 层级 的 商品 在 Silverton 商人 的 提供",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 1,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "stat_id": "traders_lots_level"
      },
      "source": "skills/skill_town_traders_tier_2"
    },
    {
      "id": "skill_town_traders_tier_3",
      "name": "贸易商品 III",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "解锁 +1 层级 的 商品 在 Silverton 商人 的 提供",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 1,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "stat_id": "traders_lots_level"
      },
      "source": "skills/skill_town_traders_tier_3"
    },
    {
      "id": "skill_town_traders_tier_4",
      "name": "交易者 商品 四",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "解锁 +1 层次 的 商品 在 Silverton 商人 的 提供",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 1,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "stat_id": "traders_lots_level"
      },
      "source": "skills/skill_town_traders_tier_4"
    },
    {
      "id": "skill_town_traders_tier_5",
      "name": "交易者 商品 V",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "解锁 +1 层级 在 Silverton 商人 的 商品 提供",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 1,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "stat_id": "traders_lots_level"
      },
      "source": "skills/skill_town_traders_tier_5"
    },
    {
      "id": "skill_town_traders_tier_6",
      "name": "贸易商品 六",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "解锁 +1 级别 的 商品 在 Silverton 商人 的 提供",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 1,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "stat_id": "traders_lots_level"
      },
      "source": "skills/skill_town_traders_tier_6"
    },
    {
      "id": "skill_town_traders_tier_7",
      "name": "贸易商品 VII",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "解锁 +1 层级 的 商品 在 Silverton 商人 的 提供",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 1,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "stat_id": "traders_lots_level"
      },
      "source": "skills/skill_town_traders_tier_7"
    },
    {
      "id": "skill_workbench_crafting_speed_t2",
      "name": "制作速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在工作台上增加制作速度10%",
      "kind": "craft_speed_time",
      "sourceDefinition": {
        "type": "craft_speed_time",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "workbench_sub_type_ids": [
          "wls2_building_workshop_armorworkshop",
          "wls2_building_workshop_carpentry",
          "wls2_building_workshop_forge",
          "wls2_building_workshop_gunworkshop",
          "wls2_building_workshop_hebalist",
          "wls2_building_workshop_kitchen",
          "wls2_building_workshop_laboratory",
          "wls2_building_workshop_leather",
          "wls2_building_workshop_sewing",
          "wls2_building_workshop_smelter",
          "wls2_building_workshop_stone",
          "wls2_building_workshop_workbench",
          "wls2_building_workshop_workshop",
          "wls2_building_production_field",
          "wls2_building_production_well",
          "wls2_building_production_bonfire",
          "wls2_building_production_pets"
        ]
      },
      "source": "skills/skill_workbench_crafting_speed_t2"
    },
    {
      "id": "skill_workbench_crafting_speed_t3",
      "name": "制作速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在工作台上增加制作速度10%",
      "kind": "craft_speed_time",
      "sourceDefinition": {
        "type": "craft_speed_time",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "workbench_sub_type_ids": [
          "wls2_building_workshop_armorworkshop",
          "wls2_building_workshop_carpentry",
          "wls2_building_workshop_forge",
          "wls2_building_workshop_gunworkshop",
          "wls2_building_workshop_hebalist",
          "wls2_building_workshop_kitchen",
          "wls2_building_workshop_laboratory",
          "wls2_building_workshop_leather",
          "wls2_building_workshop_sewing",
          "wls2_building_workshop_smelter",
          "wls2_building_workshop_stone",
          "wls2_building_workshop_workbench",
          "wls2_building_workshop_workshop",
          "wls2_building_production_field",
          "wls2_building_production_well",
          "wls2_building_production_bonfire",
          "wls2_building_production_pets"
        ]
      },
      "source": "skills/skill_workbench_crafting_speed_t3"
    },
    {
      "id": "skill_workbench_crafting_speed_t4",
      "name": "制作速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在工作台上增加制作速度10%",
      "kind": "craft_speed_time",
      "sourceDefinition": {
        "type": "craft_speed_time",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "workbench_sub_type_ids": [
          "wls2_building_workshop_armorworkshop",
          "wls2_building_workshop_carpentry",
          "wls2_building_workshop_forge",
          "wls2_building_workshop_gunworkshop",
          "wls2_building_workshop_hebalist",
          "wls2_building_workshop_kitchen",
          "wls2_building_workshop_laboratory",
          "wls2_building_workshop_leather",
          "wls2_building_workshop_sewing",
          "wls2_building_workshop_smelter",
          "wls2_building_workshop_stone",
          "wls2_building_workshop_workbench",
          "wls2_building_workshop_workshop",
          "wls2_building_production_field",
          "wls2_building_production_well",
          "wls2_building_production_bonfire",
          "wls2_building_production_pets"
        ]
      },
      "source": "skills/skill_workbench_crafting_speed_t4"
    },
    {
      "id": "skill_workbench_crafting_speed_t5",
      "name": "制作速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在工作台上增加制作速度10%",
      "kind": "craft_speed_time",
      "sourceDefinition": {
        "type": "craft_speed_time",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "workbench_sub_type_ids": [
          "wls2_building_workshop_armorworkshop",
          "wls2_building_workshop_carpentry",
          "wls2_building_workshop_forge",
          "wls2_building_workshop_gunworkshop",
          "wls2_building_workshop_hebalist",
          "wls2_building_workshop_kitchen",
          "wls2_building_workshop_laboratory",
          "wls2_building_workshop_leather",
          "wls2_building_workshop_sewing",
          "wls2_building_workshop_smelter",
          "wls2_building_workshop_stone",
          "wls2_building_workshop_workbench",
          "wls2_building_workshop_workshop",
          "wls2_building_production_field",
          "wls2_building_production_well",
          "wls2_building_production_bonfire",
          "wls2_building_production_pets"
        ]
      },
      "source": "skills/skill_workbench_crafting_speed_t5"
    },
    {
      "id": "skill_workbench_crafting_speed_t6",
      "name": "制作速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在工作台上增加制作速度 10%",
      "kind": "craft_speed_time",
      "sourceDefinition": {
        "type": "craft_speed_time",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "workbench_sub_type_ids": [
          "wls2_building_workshop_armorworkshop",
          "wls2_building_workshop_carpentry",
          "wls2_building_workshop_forge",
          "wls2_building_workshop_gunworkshop",
          "wls2_building_workshop_hebalist",
          "wls2_building_workshop_kitchen",
          "wls2_building_workshop_laboratory",
          "wls2_building_workshop_leather",
          "wls2_building_workshop_sewing",
          "wls2_building_workshop_smelter",
          "wls2_building_workshop_stone",
          "wls2_building_workshop_workbench",
          "wls2_building_workshop_workshop",
          "wls2_building_production_field",
          "wls2_building_production_well",
          "wls2_building_production_bonfire",
          "wls2_building_production_pets"
        ]
      },
      "source": "skills/skill_workbench_crafting_speed_t6"
    },
    {
      "id": "skill_workbench_crafting_speed_t7",
      "name": "制作速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在工作台上增加制作速度10%",
      "kind": "craft_speed_time",
      "sourceDefinition": {
        "type": "craft_speed_time",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "workbench_sub_type_ids": [
          "wls2_building_workshop_armorworkshop",
          "wls2_building_workshop_carpentry",
          "wls2_building_workshop_forge",
          "wls2_building_workshop_gunworkshop",
          "wls2_building_workshop_hebalist",
          "wls2_building_workshop_kitchen",
          "wls2_building_workshop_laboratory",
          "wls2_building_workshop_leather",
          "wls2_building_workshop_sewing",
          "wls2_building_workshop_smelter",
          "wls2_building_workshop_stone",
          "wls2_building_workshop_workbench",
          "wls2_building_workshop_workshop",
          "wls2_building_production_field",
          "wls2_building_production_well",
          "wls2_building_production_bonfire",
          "wls2_building_production_pets"
        ]
      },
      "source": "skills/skill_workbench_crafting_speed_t7"
    },
    {
      "id": "skill_workbench_repair_dismantle_speed_t2",
      "name": "修理 速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在工作台上增加拆卸和修理速度10%",
      "kind": "craft_speed_time",
      "sourceDefinition": {
        "type": "craft_speed_time",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "workbench_sub_type_ids": [
          "wls2_building_workshop_repairshop",
          "wls2_building_workshop_recycle"
        ]
      },
      "source": "skills/skill_workbench_repair_dismantle_speed_t2"
    },
    {
      "id": "skill_workbench_repair_dismantle_speed_t3",
      "name": "修理 速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在工作台上增加拆卸和修理速度10%",
      "kind": "craft_speed_time",
      "sourceDefinition": {
        "type": "craft_speed_time",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "workbench_sub_type_ids": [
          "wls2_building_workshop_repairshop",
          "wls2_building_workshop_recycle"
        ]
      },
      "source": "skills/skill_workbench_repair_dismantle_speed_t3"
    },
    {
      "id": "skill_workbench_repair_dismantle_speed_t4",
      "name": "修理 速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在工作台上增加拆卸和修理速度10%",
      "kind": "craft_speed_time",
      "sourceDefinition": {
        "type": "craft_speed_time",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "workbench_sub_type_ids": [
          "wls2_building_workshop_repairshop",
          "wls2_building_workshop_recycle"
        ]
      },
      "source": "skills/skill_workbench_repair_dismantle_speed_t4"
    },
    {
      "id": "skill_workbench_repair_dismantle_speed_t5",
      "name": "修理 速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在工作台上增加拆卸和修理速度10%",
      "kind": "craft_speed_time",
      "sourceDefinition": {
        "type": "craft_speed_time",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "workbench_sub_type_ids": [
          "wls2_building_workshop_repairshop",
          "wls2_building_workshop_recycle"
        ]
      },
      "source": "skills/skill_workbench_repair_dismantle_speed_t5"
    },
    {
      "id": "skill_workbench_repair_dismantle_speed_t6",
      "name": "修理 速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在工作台上增加拆卸和修理速度10%",
      "kind": "craft_speed_time",
      "sourceDefinition": {
        "type": "craft_speed_time",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "workbench_sub_type_ids": [
          "wls2_building_workshop_repairshop",
          "wls2_building_workshop_recycle"
        ]
      },
      "source": "skills/skill_workbench_repair_dismantle_speed_t6"
    },
    {
      "id": "skill_workbench_repair_dismantle_speed_t7",
      "name": "修理 速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在工作台上增加拆卸和修理速度10%",
      "kind": "craft_speed_time",
      "sourceDefinition": {
        "type": "craft_speed_time",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "workbench_sub_type_ids": [
          "wls2_building_workshop_repairshop",
          "wls2_building_workshop_recycle"
        ]
      },
      "source": "skills/skill_workbench_repair_dismantle_speed_t7"
    },
    {
      "id": "skill_craft_durability_bows_t2",
      "name": "弓 耐久性",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "为制作的弓增加耐久度 5",
      "kind": "craft_durability",
      "sourceDefinition": {
        "type": "craft_durability",
        "amount": 5,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "inventory_tags": [
          "bow"
        ]
      },
      "source": "skills/skill_craft_durability_bows_t2"
    },
    {
      "id": "skill_craft_durability_melee_t3",
      "name": "近战耐久性",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "为制作的近战武器增加耐久度5",
      "kind": "craft_durability",
      "sourceDefinition": {
        "type": "craft_durability",
        "amount": 5,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "inventory_tags": [
          "knife",
          "spear",
          "sabre",
          "club"
        ]
      },
      "source": "skills/skill_craft_durability_melee_t3"
    },
    {
      "id": "skill_craft_durability_melee_and_bows_t4",
      "name": "近战和弓耐久度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "为手工制作的近战武器和弓增加耐久度5",
      "kind": "craft_durability",
      "sourceDefinition": {
        "type": "craft_durability",
        "amount": 5,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "inventory_tags": [
          "bow",
          "knife",
          "spear",
          "sabre",
          "club"
        ]
      },
      "source": "skills/skill_craft_durability_melee_and_bows_t4"
    },
    {
      "id": "skill_craft_durability_melee_and_bows_t7",
      "name": "近战和弓耐久度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "为手工制作的近战武器和弓增加耐久度5",
      "kind": "craft_durability",
      "sourceDefinition": {
        "type": "craft_durability",
        "amount": 5,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "inventory_tags": [
          "bow",
          "knife",
          "spear",
          "sabre",
          "club"
        ]
      },
      "source": "skills/skill_craft_durability_melee_and_bows_t7"
    },
    {
      "id": "skill_craft_durability_range_t2",
      "name": "枪械耐用性",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "提高 5 制造的枪械的耐久度",
      "kind": "craft_durability",
      "sourceDefinition": {
        "type": "craft_durability",
        "amount": 5,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "inventory_tags": [
          "fire_weapon"
        ]
      },
      "source": "skills/skill_craft_durability_range_t2"
    },
    {
      "id": "skill_craft_durability_range_t6",
      "name": "枪械耐用性",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "提高 5 制造的枪械的耐久度",
      "kind": "craft_durability",
      "sourceDefinition": {
        "type": "craft_durability",
        "amount": 5,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "inventory_tags": [
          "fire_weapon"
        ]
      },
      "source": "skills/skill_craft_durability_range_t6"
    },
    {
      "id": "skill_craft_durability_range_t7",
      "name": "枪械耐用性",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "提高 5 制造的枪械的耐久度",
      "kind": "craft_durability",
      "sourceDefinition": {
        "type": "craft_durability",
        "amount": 5,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "inventory_tags": [
          "fire_weapon"
        ]
      },
      "source": "skills/skill_craft_durability_range_t7"
    },
    {
      "id": "skill_craft_durability_armor_t2",
      "name": "护甲耐久度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "为制作的护甲增加耐久度3%",
      "kind": "craft_durability",
      "sourceDefinition": {
        "type": "craft_durability",
        "amount": 0.03,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "inventory_tags": [
          "armor"
        ]
      },
      "source": "skills/skill_craft_durability_armor_t2"
    },
    {
      "id": "skill_craft_durability_armor_t3",
      "name": "护甲耐久度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "为制作的护甲增加耐久度3%",
      "kind": "craft_durability",
      "sourceDefinition": {
        "type": "craft_durability",
        "amount": 0.03,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "inventory_tags": [
          "armor"
        ]
      },
      "source": "skills/skill_craft_durability_armor_t3"
    },
    {
      "id": "skill_craft_durability_armor_t4",
      "name": "护甲耐久度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "为制作的护甲增加耐久度3%",
      "kind": "craft_durability",
      "sourceDefinition": {
        "type": "craft_durability",
        "amount": 0.03,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "inventory_tags": [
          "armor"
        ]
      },
      "source": "skills/skill_craft_durability_armor_t4"
    },
    {
      "id": "skill_craft_durability_armor_t5",
      "name": "护甲耐久度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "为制作的护甲增加耐久度3%",
      "kind": "craft_durability",
      "sourceDefinition": {
        "type": "craft_durability",
        "amount": 0.03,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "inventory_tags": [
          "armor"
        ]
      },
      "source": "skills/skill_craft_durability_armor_t5"
    },
    {
      "id": "skill_craft_durability_armor_t6",
      "name": "护甲耐久度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "为制作的护甲增加耐久度3%",
      "kind": "craft_durability",
      "sourceDefinition": {
        "type": "craft_durability",
        "amount": 0.03,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "inventory_tags": [
          "armor"
        ]
      },
      "source": "skills/skill_craft_durability_armor_t6"
    },
    {
      "id": "skill_craft_durability_armor_t7",
      "name": "护甲耐久度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "为制作的护甲增加耐久度3%",
      "kind": "craft_durability",
      "sourceDefinition": {
        "type": "craft_durability",
        "amount": 0.03,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "inventory_tags": [
          "armor"
        ]
      },
      "source": "skills/skill_craft_durability_armor_t7"
    },
    {
      "id": "skill_extra_primary_resource_chance_t3_t4",
      "name": "额外资源收集",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "提供 20% 机会 获得 额外 的 3 级 或 4 级 资源 当 收集 它们",
      "kind": "add_gather_resource",
      "sourceDefinition": {
        "type": "add_gather_resource",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "resource_object_ids": [
          "wls2_resource_object_snow_tree_3",
          "wls2_resource_object_dry_tree_3",
          "wls2_resource_object_tree_3",
          "wls2_resource_object_tree_3_autumn",
          "wls2_resource_object_dry_tree_4",
          "wls2_resource_object_tree_4",
          "wls2_resource_object_moss_tree_4",
          "wls2_resource_object_ore_3",
          "wls2_resource_object_ore_4",
          "wls2_resource_object_ore_4_snow",
          "wls2_resource_object_stone_3",
          "wls2_resource_object_stone_4",
          "wls2_resource_object_coal_3",
          "wls2_resource_object_coal_4",
          "wls2_resource_object_medicative_herb_bush_3",
          "wls2_resource_object_medicative_herb_bush_4",
          "wls2_resource_object_fiber_3",
          "wls2_resource_object_fiber_4"
        ]
      },
      "source": "skills/skill_extra_primary_resource_chance_t3_t4"
    },
    {
      "id": "skill_extra_primary_resource_chance_t5_t6",
      "name": "额外资源收集",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "提供 20% 机会 获得 额外 的 5 级 或 6 级 资源 当 收集 它们",
      "kind": "add_gather_resource",
      "sourceDefinition": {
        "type": "add_gather_resource",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "resource_object_ids": [
          "wls2_resource_object_dry_tree_5",
          "wls2_resource_object_tree_5",
          "wls2_resource_object_moss_tree_5",
          "wls2_resource_object_tree_5_snow",
          "wls2_resource_object_tree_6",
          "wls2_resource_object_tree_6_autumn",
          "wls2_resource_object_tree_6_snow",
          "wls2_resource_object_ore_5",
          "wls2_resource_object_ore_6",
          "wls2_resource_object_ore_6_snow",
          "wls2_resource_object_stone_5",
          "wls2_resource_object_stone_5_snow",
          "wls2_resource_object_medicative_herb_bush_5",
          "wls2_resource_object_medicative_herb_bush_6",
          "wls2_resource_object_medicative_herb_bush_6_snow",
          "wls2_resource_object_fiber_5",
          "wls2_resource_object_fiber_5_snow"
        ]
      },
      "source": "skills/skill_extra_primary_resource_chance_t5_t6"
    },
    {
      "id": "skill_extra_primary_resource_chance_t7",
      "name": "额外资源收集",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "提供 20% 机会 获得 额外 的 七 级 资源 当 采集 它们",
      "kind": "add_gather_resource",
      "sourceDefinition": {
        "type": "add_gather_resource",
        "amount": 0.2,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "resource_object_ids": [
          "wls2_resource_object_tree_7",
          "wls2_resource_object_ore_7",
          "wls2_resource_object_stone_7",
          "wls2_resource_object_medicative_herb_bush_7",
          "wls2_resource_object_fiber_7"
        ]
      },
      "source": "skills/skill_extra_primary_resource_chance_t7"
    },
    {
      "id": "skill_extra_secondary_resource_chance_t2_t3",
      "name": "额外 材料 制作",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "提供 10% 机会 在 制作 期间 获得 额外 的 2 级 或 3 级 材料",
      "kind": "craft_increment_recipe_results",
      "sourceDefinition": {
        "type": "craft_increment_recipe_results",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund": {
          "coin_id": "earn_coin_soft_24"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "recipe_ids": [
          "wls2_resourse_secondary_ingot_2",
          "wls2_resourse_secondary_cloth_2",
          "wls2_resourse_tertiary_clothroll_2",
          "wls2_resourse_secondary_leather_2",
          "wls2_resourse_secondary_rope_2",
          "wls2_resourse_secondary_plank_2",
          "wls2_resourse_secondary_stoneblock_2",
          "wls2_resourse_secondary_ingot_3",
          "wls2_resourse_secondary_cloth_3",
          "wls2_resourse_tertiary_clothroll_3",
          "wls2_resourse_secondary_leather_3",
          "wls2_resourse_secondary_rope_3",
          "wls2_resourse_secondary_plank_3",
          "wls2_resourse_secondary_stoneblock_3",
          "wls2_resourse_secondary_ingot_2",
          "wls2_resourse_secondary_ingot_3",
          "wls2_resourse_secondary_ingot_3_metalscarp"
        ]
      },
      "source": "skills/skill_extra_secondary_resource_chance_t2_t3"
    },
    {
      "id": "skill_extra_secondary_resource_chance_t4_t5",
      "name": "额外 材料 制作",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "提供 10% 机会 在 制作 期间 获得 额外 的 4 级 或 5 级 材料",
      "kind": "craft_increment_recipe_results",
      "sourceDefinition": {
        "type": "craft_increment_recipe_results",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_100"
        },
        "refund": {
          "coin_id": "earn_coin_soft_80"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_100"
        },
        "recipe_ids": [
          "wls2_resourse_secondary_ingot_4",
          "wls2_resourse_secondary_cloth_4",
          "wls2_resourse_tertiary_clothroll_4",
          "wls2_resourse_secondary_leather_4",
          "wls2_resourse_secondary_rope_4",
          "wls2_resourse_secondary_plank_4",
          "wls2_resourse_secondary_stoneblock_4",
          "wls2_resourse_secondary_ingot_5",
          "wls2_resourse_secondary_cloth_5",
          "wls2_resourse_tertiary_clothroll_5",
          "wls2_resourse_secondary_leather_5",
          "wls2_resourse_secondary_rope_5",
          "wls2_resourse_secondary_plank_5",
          "wls2_resourse_secondary_stoneblock_5",
          "wls2_resourse_secondary_ingot_4",
          "wls2_resourse_secondary_ingot_5"
        ]
      },
      "source": "skills/skill_extra_secondary_resource_chance_t4_t5"
    },
    {
      "id": "skill_extra_secondary_resource_chance_t6_t7",
      "name": "额外 材料 制作",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "提供 10% 机会 在 制作 期间 获得 额外 的 6 级 或 7 级 材料",
      "kind": "craft_increment_recipe_results",
      "sourceDefinition": {
        "type": "craft_increment_recipe_results",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "recipe_ids": [
          "wls2_resourse_secondary_ingot_6",
          "wls2_resourse_secondary_cloth_6",
          "wls2_resourse_secondary_leather_6",
          "wls2_resourse_secondary_rope_6",
          "wls2_resourse_secondary_plank_6",
          "wls2_resourse_secondary_stoneblock_6",
          "wls2_resourse_secondary_ingot_7",
          "wls2_resourse_secondary_cloth_7",
          "wls2_resourse_secondary_leather_7",
          "wls2_resourse_secondary_rope_7",
          "wls2_resourse_secondary_plank_7",
          "wls2_resourse_secondary_stoneblock_7",
          "wls2_resourse_secondary_ingot_6",
          "wls2_resourse_secondary_ingot_7"
        ]
      },
      "source": "skills/skill_extra_secondary_resource_chance_t6_t7"
    },
    {
      "id": "skill_tnt_use_reduction",
      "name": "炸药 效率",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在拆除建筑时减少1个炸药的消耗",
      "kind": "dynamite_use_reduction",
      "sourceDefinition": {
        "type": "dynamite_use_reduction",
        "amount": 1,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "gradeable_ids": [
          "simple",
          "door",
          "window",
          "swamp_t4_wall",
          "swamp_t4_window",
          "swamp_t4_door"
        ]
      },
      "source": "skills/skill_tnt_use_reduction"
    },
    {
      "id": "skill_carmack_reroll_1",
      "name": "在采矿者处重掷",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在 Prospector 给予 1 重新掷骰",
      "kind": "server_trader_reroll",
      "sourceDefinition": {
        "type": "server_trader_reroll",
        "amount": 1,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        }
      },
      "source": "skills/skill_carmack_reroll_1"
    },
    {
      "id": "skill_auto_speed_t3",
      "name": "自动模式速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在自动模式下增加速度10%。奖励不与VIP叠加。",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_50"
        },
        "refund": {
          "coin_id": "earn_coin_soft_40"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_50"
        },
        "stat_id": "auto_speed_modifier"
      },
      "source": "skills/skill_auto_speed_t3"
    },
    {
      "id": "skill_auto_speed_t5",
      "name": "自动模式速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在自动模式下增加速度10%。奖励不与VIP叠加。",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_150"
        },
        "refund": {
          "coin_id": "earn_coin_soft_120"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_150"
        },
        "stat_id": "auto_speed_modifier"
      },
      "source": "skills/skill_auto_speed_t5"
    },
    {
      "id": "skill_auto_speed_t7",
      "name": "自动模式速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "在自动模式下增加速度10%。奖励不与VIP叠加。",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_300"
        },
        "refund": {
          "coin_id": "earn_coin_soft_240"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_300"
        },
        "stat_id": "auto_speed_modifier"
      },
      "source": "skills/skill_auto_speed_t7"
    },
    {
      "id": "skill_unlock_safe",
      "name": "安全",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "解锁 一个 保险箱 蓝图",
      "kind": "simple",
      "sourceDefinition": {
        "type": "simple",
        "buy": {
          "coin_id": "spend_coin_soft_30"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_30"
        },
        "is_persistent": true
      },
      "source": "skills/skill_unlock_safe"
    },
    {
      "id": "skill_workbench_upgrade_speed_reduction",
      "name": "提升 速度",
      "maxLevel": 1,
      "levels": [
        {
          "level": 1,
          "effects": {}
        }
      ],
      "implemented": false,
      "description": "减少建筑升级时间 10%",
      "kind": "stat",
      "sourceDefinition": {
        "type": "stat",
        "amount": 0.1,
        "is_amount_percent": true,
        "buy": {
          "coin_id": "spend_coin_soft_200"
        },
        "refund": {
          "coin_id": "earn_coin_soft_160"
        },
        "refund_full": {
          "coin_id": "earn_coin_soft_200"
        },
        "stat_id": "construction_speed_modifier"
      },
      "source": "skills/skill_workbench_upgrade_speed_reduction"
    }
  ],
  "animals": [
    {
      "id": "wls2_mob_animal_coyote_1",
      "name": "大平原丛林狼",
      "tier": 1,
      "base": {
        "health": 60,
        "damage": 10,
        "penetrating_damage": 0,
        "penetration": 0,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 0.5,
        "range": 1,
        "moveSpeed": 5.5,
        "tier": 1
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_coyote_1",
          "weight": 1,
          "damage": 10,
          "penetrating_damage": 0,
          "attackSpeed": 0.5,
          "range": 1,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 1.4,
            "damage": 10,
            "attack_range": 1,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0,
                1
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_coyote_attack1",
              "wls_mob_coyote_attack2"
            ],
            "hit_empty_sounds": [
              "wls_mob_coyote_attack1",
              "wls_mob_coyote_attack2"
            ]
          }
        }
      ],
      "rank": "common",
      "source": "avatars/wls2_mob_animal_coyote_1 + weapons/wls2_weapon_melee_coyote_1",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_animal_coyote_1",
        "tier": 1,
        "experience": 25,
        "resistance": 0,
        "max_health": 60,
        "stats": {
          "health": 60,
          "move_speed": 5.5,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 1,
        "avatar_type": "animal",
        "sub_type": "animal_coyote",
        "rank": "common",
        "is_taunter": true,
        "taunt": {
          "time": 4,
          "chance": 1,
          "cooldown": 4
        },
        "stack_collection_id": "wls2_mob_animal_coyote_1_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_coyote_1"
        },
        "movement": {
          "radius": 0.3,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_coyote_mob",
          "dodge_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_animal_wolf_1",
      "name": "黑狼",
      "tier": 1,
      "base": {
        "health": 200,
        "damage": 21,
        "penetrating_damage": 0,
        "penetration": 0,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 0.625,
        "range": 1.6,
        "moveSpeed": 5.5,
        "tier": 1
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_wolf_1",
          "weight": 1,
          "damage": 21,
          "penetrating_damage": 0,
          "attackSpeed": 0.625,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 1,
            "damage": 21,
            "attack_range": 1.6,
            "speed_modifier": 1,
            "hit_states": {
              "type": "serial",
              "states_count": [
                0,
                1
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_wolf_attack1",
              "wls_mob_wolf_attack2"
            ],
            "hit_empty_sounds": [
              "wls_mob_wolf_attack1",
              "wls_mob_wolf_attack2"
            ]
          }
        }
      ],
      "rank": "common",
      "source": "avatars/wls2_mob_animal_wolf_1 + weapons/wls2_weapon_melee_wolf_1",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_animal_wolf_1",
        "tier": 1,
        "experience": 50,
        "resistance": 0,
        "max_health": 200,
        "stats": {
          "health": 200,
          "move_speed": 5.5,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 5,
        "avatar_type": "animal",
        "sub_type": "animal_wolf",
        "rank": "common",
        "is_taunter": true,
        "taunt": {
          "time": 4,
          "chance": 1,
          "cooldown": 5
        },
        "stack_collection_id": "wls2_mob_animal_wolf_1_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_wolf_1"
        },
        "movement": {
          "radius": 0.41,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_wolf_mob",
          "slow_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_animal_cat_2",
      "name": "猞猁",
      "tier": 2,
      "base": {
        "health": 400,
        "damage": 35,
        "penetrating_damage": 0,
        "penetration": 0,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 0.8333333333333334,
        "range": 1.5,
        "moveSpeed": 5.5,
        "tier": 2
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_cat_2",
          "weight": 1,
          "damage": 35,
          "penetrating_damage": 0,
          "attackSpeed": 0.8333333333333334,
          "range": 1.5,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 0.6,
            "damage": 35,
            "attack_range": 1.5,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0,
                1
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_lynx_attack",
              "wls_mob_lynx_attack1"
            ],
            "hit_empty_sounds": [
              "wls_mob_lynx_attack",
              "wls_mob_lynx_attack1"
            ]
          }
        }
      ],
      "rank": "common",
      "source": "avatars/wls2_mob_animal_cat_2 + weapons/wls2_weapon_melee_cat_2",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_animal_cat_2",
        "tier": 2,
        "experience": 100,
        "resistance": 0,
        "max_health": 400,
        "stats": {
          "health": 400,
          "move_speed": 5.5,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 30,
        "avatar_type": "animal",
        "sub_type": "animal_cat",
        "rank": "common",
        "is_taunter": true,
        "taunt": {
          "time": 2,
          "chance": 1,
          "cooldown": 4
        },
        "stack_collection_id": "wls2_mob_animal_cat_2_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_cat_2"
        },
        "movement": {
          "radius": 0.6,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_lynx_mob",
          "bleed_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_animal_wolf_2",
      "name": "水牛狼",
      "tier": 2,
      "base": {
        "health": 500,
        "damage": 40,
        "penetrating_damage": 0,
        "penetration": 0,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 0.625,
        "range": 1.6,
        "moveSpeed": 5.5,
        "tier": 2
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_wolf_2",
          "weight": 1,
          "damage": 40,
          "penetrating_damage": 0,
          "attackSpeed": 0.625,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 1,
            "damage": 40,
            "attack_range": 1.6,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0,
                1
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_wolf_attack1",
              "wls_mob_wolf_attack2"
            ],
            "hit_empty_sounds": [
              "wls_mob_wolf_attack1",
              "wls_mob_wolf_attack2"
            ]
          }
        }
      ],
      "rank": "common",
      "source": "avatars/wls2_mob_animal_wolf_2 + weapons/wls2_weapon_melee_wolf_2",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_animal_wolf_2",
        "tier": 2,
        "experience": 100,
        "resistance": 0,
        "max_health": 500,
        "stats": {
          "health": 500,
          "move_speed": 5.5,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 25,
        "avatar_type": "animal",
        "sub_type": "animal_wolf",
        "rank": "common",
        "is_taunter": true,
        "taunt": {
          "time": 4,
          "chance": 1,
          "cooldown": 5
        },
        "stack_collection_id": "wls2_mob_animal_wolf_2_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_wolf_2"
        },
        "movement": {
          "radius": 0.41,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_wolf_mob",
          "slow_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_animal_cat_3",
      "name": "加拿大猞猁",
      "tier": 3,
      "base": {
        "health": 1160,
        "damage": 79,
        "penetrating_damage": 0,
        "penetration": 0,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 0.8333333333333334,
        "range": 1.5,
        "moveSpeed": 5.5,
        "tier": 3
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_cat_3",
          "weight": 1,
          "damage": 79,
          "penetrating_damage": 0,
          "attackSpeed": 0.8333333333333334,
          "range": 1.5,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 0.6,
            "damage": 79,
            "attack_range": 1.5,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0,
                1
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_lynx_attack",
              "wls_mob_lynx_attack1"
            ],
            "hit_empty_sounds": [
              "wls_mob_lynx_attack",
              "wls_mob_lynx_attack1"
            ]
          }
        }
      ],
      "rank": "common",
      "source": "avatars/wls2_mob_animal_cat_3 + weapons/wls2_weapon_melee_cat_3",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_animal_cat_3",
        "tier": 3,
        "experience": 250,
        "resistance": 0,
        "max_health": 1160,
        "stats": {
          "health": 1160,
          "move_speed": 5.5,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 50,
        "avatar_type": "animal",
        "sub_type": "animal_cat",
        "rank": "common",
        "is_taunter": true,
        "taunt": {
          "time": 2,
          "chance": 1,
          "cooldown": 4
        },
        "stack_collection_id": "wls2_mob_animal_cat_3_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_cat_3"
        },
        "movement": {
          "radius": 0.6,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_lynx_mob",
          "bleed_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_animal_cat_3_summer",
      "name": "红色猞猁",
      "tier": 3,
      "base": {
        "health": 1160,
        "damage": 79,
        "penetrating_damage": 0,
        "penetration": 0,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 0.8333333333333334,
        "range": 1.5,
        "moveSpeed": 5.5,
        "tier": 3
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_cat_3",
          "weight": 1,
          "damage": 79,
          "penetrating_damage": 0,
          "attackSpeed": 0.8333333333333334,
          "range": 1.5,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 0.6,
            "damage": 79,
            "attack_range": 1.5,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0,
                1
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_lynx_attack",
              "wls_mob_lynx_attack1"
            ],
            "hit_empty_sounds": [
              "wls_mob_lynx_attack",
              "wls_mob_lynx_attack1"
            ]
          }
        }
      ],
      "rank": "common",
      "source": "avatars/wls2_mob_animal_cat_3_summer + weapons/wls2_weapon_melee_cat_3",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_animal_cat_3_summer",
        "tier": 3,
        "experience": 250,
        "resistance": 0,
        "max_health": 1160,
        "stats": {
          "health": 1160,
          "move_speed": 5.5,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 50,
        "avatar_type": "animal",
        "sub_type": "animal_cat",
        "rank": "common",
        "is_taunter": true,
        "taunt": {
          "time": 2,
          "chance": 1,
          "cooldown": 4
        },
        "stack_collection_id": "wls2_mob_animal_cat_3_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_cat_3"
        },
        "movement": {
          "radius": 0.6,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_lynx_mob",
          "bleed_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_animal_wolf_3",
      "name": "西北狼",
      "tier": 3,
      "base": {
        "health": 1390,
        "damage": 95,
        "penetrating_damage": 0,
        "penetration": 0,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 0.625,
        "range": 1.5,
        "moveSpeed": 5.5,
        "tier": 3
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_wolf_3",
          "weight": 0.6,
          "damage": 95,
          "penetrating_damage": 0,
          "attackSpeed": 0.625,
          "range": 1.5,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 1,
            "damage": 95,
            "attack_range": 1.5,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                1
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_direwolf_attack2"
            ],
            "hit_empty_sounds": [
              "wls_mob_direwolf_attack2"
            ]
          }
        }
      ],
      "rank": "common",
      "source": "avatars/wls2_mob_animal_wolf_3 + weapons/wls2_weapon_melee_wolf_3",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_animal_wolf_3",
        "tier": 3,
        "experience": 250,
        "resistance": 0,
        "max_health": 1390,
        "stats": {
          "health": 1390,
          "move_speed": 5.5,
          "view_range": 6,
          "view_angle": 90,
          "attack_speed_modifier": 1
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 45,
        "avatar_type": "animal",
        "sub_type": "animal_wolf",
        "rank": "common",
        "is_taunter": true,
        "taunt": {
          "time": 4,
          "chance": 1,
          "cooldown": 5
        },
        "stack_collection_id": "wls2_mob_animal_wolf_3_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_wolf_3",
          "probability": 0.6
        },
        "movement": {
          "radius": 0.41,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_wolf_mob",
          "slow_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_animal_wolf_4",
      "name": "黑狼",
      "tier": 4,
      "base": {
        "health": 3500,
        "damage": 275,
        "penetrating_damage": 8,
        "penetration": 8,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 0.625,
        "range": 1.6,
        "moveSpeed": 5.75,
        "tier": 4
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_wolf_4",
          "weight": 1,
          "damage": 275,
          "penetrating_damage": 8,
          "attackSpeed": 0.625,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 1,
            "damage": 275,
            "penetrating_damage": 8,
            "attack_range": 1.6,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_direwolf_attack2"
            ],
            "hit_empty_sounds": [
              "wls_mob_direwolf_attack2"
            ]
          }
        }
      ],
      "rank": "common",
      "source": "avatars/wls2_mob_animal_wolf_4 + weapons/wls2_weapon_melee_wolf_4",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_animal_wolf_4",
        "tier": 4,
        "experience": 750,
        "resistance": 0,
        "max_health": 3500,
        "stats": {
          "health": 3500,
          "move_speed": 5.75,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 65,
        "avatar_type": "animal",
        "sub_type": "animal_wolf",
        "rank": "common",
        "is_taunter": true,
        "taunt": {
          "time": 4,
          "chance": 1,
          "cooldown": 5
        },
        "stack_collection_id": "wls2_mob_animal_wolf_4_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_wolf_4"
        },
        "movement": {
          "radius": 0.41,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_wolf_mob",
          "slow_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_elite_animal_cat_4",
      "name": "美洲虎",
      "tier": 4,
      "base": {
        "health": 6580,
        "damage": 334,
        "penetrating_damage": 10,
        "penetration": 10,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 0.8333333333333334,
        "range": 1.6,
        "moveSpeed": 5.75,
        "tier": 4
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_elite_cat_4",
          "weight": 1,
          "damage": 334,
          "penetrating_damage": 10,
          "attackSpeed": 0.8333333333333334,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 0.6,
            "damage": 334,
            "penetrating_damage": 10,
            "attack_range": 1.6,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_cougar_attack1",
              "wls_mob_cougar_attack2"
            ],
            "hit_empty_sounds": [
              "wls_mob_cougar_attack1",
              "wls_mob_cougar_attack2"
            ]
          }
        }
      ],
      "rank": "elite",
      "source": "avatars/wls2_mob_elite_animal_cat_4 + weapons/wls2_weapon_melee_elite_cat_4",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_elite_animal_cat_4",
        "tier": 4,
        "experience": 1500,
        "resistance": 0,
        "max_health": 6580,
        "stats": {
          "health": 6580,
          "move_speed": 5.75,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 85,
        "avatar_type": "animal",
        "sub_type": "animal_cat",
        "rank": "elite",
        "is_taunter": true,
        "taunt": {
          "time": 2,
          "chance": 1,
          "cooldown": 4
        },
        "stack_collection_id": "wls2_mob_elite_animal_cat_4_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_elite_cat_4"
        },
        "movement": {
          "radius": 0.41,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_puma_mob",
          "fullhp_crit_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_animal_cat_5",
      "name": "路易斯安那山猫",
      "tier": 5,
      "base": {
        "health": 5800,
        "damage": 429,
        "penetrating_damage": 21,
        "penetration": 21,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 0.8333333333333334,
        "range": 1.6,
        "moveSpeed": 5.75,
        "tier": 5
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_cat_5",
          "weight": 1,
          "damage": 429,
          "penetrating_damage": 21,
          "attackSpeed": 0.8333333333333334,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 0.6,
            "damage": 429,
            "penetrating_damage": 21,
            "attack_range": 1.6,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0,
                1
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_lynx_attack",
              "wls_mob_lynx_attack1"
            ],
            "hit_empty_sounds": [
              "wls_mob_lynx_attack",
              "wls_mob_lynx_attack1"
            ]
          }
        }
      ],
      "rank": "common",
      "source": "avatars/wls2_mob_animal_cat_5 + weapons/wls2_weapon_melee_cat_5",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_animal_cat_5",
        "tier": 5,
        "experience": 2500,
        "resistance": 0,
        "max_health": 5800,
        "stats": {
          "health": 5800,
          "move_speed": 5.75,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1,
          "water_pressure_resistance": 0.3,
          "wind_resistance": 0.15,
          "snow_resistance": 0.35
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 90,
        "avatar_type": "animal",
        "sub_type": "animal_cat",
        "rank": "common",
        "is_taunter": true,
        "taunt": {
          "time": 2,
          "chance": 1,
          "cooldown": 4
        },
        "stack_collection_id": "wls2_mob_animal_cat_5_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_cat_5"
        },
        "movement": {
          "radius": 0.6,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_lynx_mob",
          "bleed_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_animal_wolf_5",
      "name": "红狼",
      "tier": 5,
      "base": {
        "health": 6650,
        "damage": 507,
        "penetrating_damage": 25,
        "penetration": 25,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 0.8333333333333334,
        "range": 1.6,
        "moveSpeed": 5.75,
        "tier": 5
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_wolf_5",
          "weight": 1,
          "damage": 507,
          "penetrating_damage": 25,
          "attackSpeed": 0.8333333333333334,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 0.6,
            "damage": 507,
            "penetrating_damage": 25,
            "attack_range": 1.6,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_direwolf_attack2"
            ],
            "hit_empty_sounds": [
              "wls_mob_direwolf_attack2"
            ]
          }
        }
      ],
      "rank": "common",
      "source": "avatars/wls2_mob_animal_wolf_5 + weapons/wls2_weapon_melee_wolf_5",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_animal_wolf_5",
        "tier": 5,
        "experience": 2500,
        "resistance": 0,
        "max_health": 6650,
        "stats": {
          "health": 6650,
          "move_speed": 5.75,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1,
          "water_pressure_resistance": 0.3,
          "wind_resistance": 0.15,
          "snow_resistance": 0.35
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 85,
        "avatar_type": "animal",
        "sub_type": "animal_wolf",
        "rank": "common",
        "is_taunter": true,
        "taunt": {
          "time": 4,
          "chance": 1,
          "cooldown": 5
        },
        "stack_collection_id": "wls2_mob_animal_wolf_5_loot_2",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_wolf_5"
        },
        "movement": {
          "radius": 0.41,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_wolf_mob",
          "slow_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_elite_animal_alligator_5",
      "name": "成年短吻鳄",
      "tier": 5,
      "base": {
        "health": 6820,
        "damage": 1233,
        "penetrating_damage": 62,
        "penetration": 62,
        "armor": 0,
        "resistance": 200,
        "attackSpeed": 0.5,
        "range": 1.25,
        "moveSpeed": 3.5,
        "tier": 5
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_crocodile_elite",
          "weight": 1,
          "damage": 1233,
          "penetrating_damage": 62,
          "attackSpeed": 0.5,
          "range": 1.25,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 1.4,
            "damage": 1233,
            "penetrating_damage": 62,
            "attack_range": 1.25,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls2_alligator_attack_01",
              "wls2_alligator_attack_02"
            ],
            "hit_empty_sounds": [
              "wls2_alligator_attack_01",
              "wls2_alligator_attack_02"
            ]
          }
        }
      ],
      "rank": "elite",
      "source": "avatars/wls2_mob_elite_animal_alligator_5 + weapons/wls2_weapon_melee_crocodile_elite",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_elite_animal_alligator_5",
        "tier": 5,
        "experience": 5000,
        "resistance": 200,
        "max_health": 6820,
        "stats": {
          "health": 6820,
          "move_speed": 3.5,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1,
          "water_pressure_resistance": 1,
          "wind_resistance": 1,
          "snow_resistance": 1
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 110,
        "avatar_type": "animal",
        "sub_type": "animal_alligator",
        "rank": "elite",
        "is_taunter": true,
        "taunt": {
          "time": 4,
          "chance": 1,
          "cooldown": 4
        },
        "stack_collection_id": "wls2_mob_elite_animal_alligator_5_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_crocodile_elite"
        },
        "movement": {
          "radius": 0.5,
          "height": 0.6,
          "smooth_start_time": 0.5
        },
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_elite_animal_bear_5",
      "name": "路易斯安那黑熊",
      "tier": 5,
      "base": {
        "health": 20630,
        "damage": 1352,
        "penetrating_damage": 68,
        "penetration": 68,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 0.625,
        "range": 1.6,
        "moveSpeed": 4.75,
        "tier": 5
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_elite_bear_5",
          "weight": 0.7,
          "damage": 1352,
          "penetrating_damage": 68,
          "attackSpeed": 0.625,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 0.8,
            "attack_ending_time": 0.8,
            "damage": 1352,
            "penetrating_damage": 68,
            "attack_range": 1.6,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                1
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_bear_attack1"
            ],
            "hit_empty_sounds": [
              "wls_mob_bear_attack1"
            ]
          }
        },
        {
          "id": "wls2_weapon_melee_elite_bear_special_5",
          "weight": 0.3,
          "damage": 2027,
          "penetrating_damage": 101,
          "attackSpeed": 0.6341463414634148,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 1,
            "attack_ending_time": 1.05,
            "damage": 2027,
            "penetrating_damage": 101,
            "attack_range": 1.6,
            "speed_modifier": 1.3,
            "hit_states": {
              "type": "random",
              "states_count": [
                0
              ]
            },
            "attack_action": {
              "type": "cone",
              "radius": 2.8,
              "angle": 120
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_bear_attack2"
            ],
            "hit_empty_sounds": [
              "wls_mob_bear_attack2"
            ]
          }
        }
      ],
      "rank": "elite",
      "source": "avatars/wls2_mob_elite_animal_bear_5 + weapons/wls2_weapon_melee_elite_bear_5",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_elite_animal_bear_5",
        "tier": 5,
        "experience": 7500,
        "resistance": 0,
        "max_health": 20630,
        "stats": {
          "health": 20630,
          "move_speed": 4.75,
          "view_range": 6,
          "view_angle": 90,
          "attack_speed_modifier": 1,
          "water_pressure_resistance": 1,
          "wind_resistance": 1,
          "snow_resistance": 1
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 115,
        "avatar_type": "animal",
        "sub_type": "animal_bear",
        "rank": "elite",
        "is_taunter": true,
        "taunt": {
          "time": 6,
          "chance": 1,
          "cooldown": 5
        },
        "stack_collection_id": "wls2_mob_elite_animal_bear_5_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_elite_bear_5",
          "probability": 0.7
        },
        "weapon_2": {
          "weapon_id": "wls2_weapon_melee_elite_bear_special_5",
          "probability": 0.3
        },
        "movement": {
          "radius": 0.88,
          "height": 2,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_bear_mob"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_elite_animal_cat_5",
      "name": "黑豹",
      "tier": 5,
      "base": {
        "health": 12450,
        "damage": 625,
        "penetrating_damage": 31,
        "penetration": 31,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 0.8333333333333334,
        "range": 1.6,
        "moveSpeed": 5.75,
        "tier": 5
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_elite_cat_5",
          "weight": 1,
          "damage": 625,
          "penetrating_damage": 31,
          "attackSpeed": 0.8333333333333334,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 0.6,
            "damage": 625,
            "penetrating_damage": 31,
            "attack_range": 1.6,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_cougar_attack1",
              "wls_mob_cougar_attack2"
            ],
            "hit_empty_sounds": [
              "wls_mob_cougar_attack1",
              "wls_mob_cougar_attack2"
            ]
          }
        }
      ],
      "rank": "elite",
      "source": "avatars/wls2_mob_elite_animal_cat_5 + weapons/wls2_weapon_melee_elite_cat_5",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_elite_animal_cat_5",
        "tier": 5,
        "experience": 5000,
        "resistance": 0,
        "max_health": 12450,
        "stats": {
          "health": 12450,
          "move_speed": 5.75,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1,
          "water_pressure_resistance": 0.3,
          "wind_resistance": 0.15,
          "snow_resistance": 0.35
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 110,
        "avatar_type": "animal",
        "sub_type": "animal_cat",
        "rank": "elite",
        "is_taunter": true,
        "taunt": {
          "time": 2,
          "chance": 1,
          "cooldown": 4
        },
        "stack_collection_id": "wls2_mob_elite_animal_cat_5_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_elite_cat_5"
        },
        "movement": {
          "radius": 0.41,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_puma_mob",
          "fullhp_crit_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_elite_animal_wolf_5",
      "name": "红狼王",
      "tier": 5,
      "base": {
        "health": 14830,
        "damage": 652,
        "penetrating_damage": 33,
        "penetration": 33,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 0.8333333333333334,
        "range": 1.6,
        "moveSpeed": 5.75,
        "tier": 5
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_elite_wolf_5",
          "weight": 1,
          "damage": 652,
          "penetrating_damage": 33,
          "attackSpeed": 0.8333333333333334,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 0.6,
            "damage": 652,
            "penetrating_damage": 33,
            "attack_range": 1.6,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0,
                1
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_elite_wolf_attack1",
              "wls_mob_elite_wolf_attack2",
              "wls_mob_elite_wolf_attack3",
              "wls_mob_elite_wolf_attack4"
            ],
            "hit_empty_sounds": [
              "wls_mob_elite_wolf_attack1",
              "wls_mob_elite_wolf_attack2",
              "wls_mob_elite_wolf_attack3",
              "wls_mob_elite_wolf_attack4"
            ]
          }
        }
      ],
      "rank": "elite",
      "source": "avatars/wls2_mob_elite_animal_wolf_5 + weapons/wls2_weapon_melee_elite_wolf_5",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_elite_animal_wolf_5",
        "tier": 5,
        "experience": 5000,
        "resistance": 0,
        "max_health": 14830,
        "stats": {
          "health": 14830,
          "move_speed": 5.75,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1,
          "water_pressure_resistance": 0.3,
          "wind_resistance": 0.15,
          "snow_resistance": 0.35
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 100,
        "avatar_type": "animal",
        "sub_type": "animal_wolf",
        "rank": "elite",
        "is_taunter": true,
        "taunt": {
          "time": 4,
          "chance": 1,
          "cooldown": 5
        },
        "stack_collection_id": "wls2_mob_elite_animal_wolf_5_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_elite_wolf_5"
        },
        "movement": {
          "radius": 0.41,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_direwolf_mob",
          "root_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_animal_cat_6",
      "name": "阿拉斯加猞猁",
      "tier": 6,
      "base": {
        "health": 10800,
        "damage": 531,
        "penetrating_damage": 32,
        "penetration": 32,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 1.0,
        "range": 1.6,
        "moveSpeed": 5.75,
        "tier": 6
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_cat_6",
          "weight": 1,
          "damage": 531,
          "penetrating_damage": 32,
          "attackSpeed": 1.0,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 0.4,
            "damage": 531,
            "penetrating_damage": 32,
            "attack_range": 1.6,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0,
                1
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_lynx_attack",
              "wls_mob_lynx_attack1"
            ],
            "hit_empty_sounds": [
              "wls_mob_lynx_attack",
              "wls_mob_lynx_attack1"
            ]
          }
        }
      ],
      "rank": "common",
      "source": "avatars/wls2_mob_animal_cat_6 + weapons/wls2_weapon_melee_cat_6",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_animal_cat_6",
        "tier": 6,
        "experience": 4000,
        "resistance": 0,
        "max_health": 10800,
        "stats": {
          "health": 10800,
          "move_speed": 5.75,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1,
          "water_pressure_resistance": 0.3,
          "wind_resistance": 0.5,
          "snow_resistance": 0.6
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 120,
        "avatar_type": "animal",
        "sub_type": "animal_cat",
        "rank": "common",
        "is_taunter": true,
        "taunt": {
          "time": 2,
          "chance": 1,
          "cooldown": 4
        },
        "stack_collection_id": "wls2_mob_animal_cat_6_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_cat_6"
        },
        "movement": {
          "radius": 0.6,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_lynx_mob",
          "bleed_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_animal_wolf_6",
      "name": "阿拉斯加狼",
      "tier": 6,
      "base": {
        "health": 12240,
        "damage": 681,
        "penetrating_damage": 41,
        "penetration": 41,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 1.0,
        "range": 1.6,
        "moveSpeed": 5.75,
        "tier": 6
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_wolf_6",
          "weight": 1,
          "damage": 681,
          "penetrating_damage": 41,
          "attackSpeed": 1.0,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 0.4,
            "damage": 681,
            "penetrating_damage": 41,
            "attack_range": 1.6,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_direwolf_attack2"
            ],
            "hit_empty_sounds": [
              "wls_mob_direwolf_attack2"
            ]
          }
        }
      ],
      "rank": "common",
      "source": "avatars/wls2_mob_animal_wolf_6 + weapons/wls2_weapon_melee_wolf_6",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_animal_wolf_6",
        "tier": 6,
        "experience": 4000,
        "resistance": 0,
        "max_health": 12240,
        "stats": {
          "health": 12240,
          "move_speed": 5.75,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1,
          "water_pressure_resistance": 0.3,
          "wind_resistance": 0.5,
          "snow_resistance": 0.6
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 115,
        "avatar_type": "animal",
        "sub_type": "animal_wolf",
        "rank": "common",
        "is_taunter": true,
        "taunt": {
          "time": 4,
          "chance": 1,
          "cooldown": 5
        },
        "stack_collection_id": "wls2_mob_animal_wolf_6_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_wolf_6"
        },
        "movement": {
          "radius": 0.41,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_wolf_mob",
          "slow_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_elite_animal_bear_6",
      "name": "科迪亚克熊",
      "tier": 6,
      "base": {
        "health": 38340,
        "damage": 1579,
        "penetrating_damage": 95,
        "penetration": 95,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 0.8333333333333333,
        "range": 1.6,
        "moveSpeed": 4.75,
        "tier": 6
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_elite_bear_6",
          "weight": 0.7,
          "damage": 1579,
          "penetrating_damage": 95,
          "attackSpeed": 0.8333333333333333,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 0.8,
            "attack_ending_time": 0.4,
            "damage": 1579,
            "penetrating_damage": 95,
            "attack_range": 1.6,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                1
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_bear_attack1"
            ],
            "hit_empty_sounds": [
              "wls_mob_bear_attack1"
            ]
          }
        },
        {
          "id": "wls2_weapon_melee_elite_bear_special_6",
          "weight": 0.3,
          "damage": 2368,
          "penetrating_damage": 142,
          "attackSpeed": 0.6341463414634148,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 1,
            "attack_ending_time": 1.05,
            "damage": 2368,
            "penetrating_damage": 142,
            "attack_range": 1.6,
            "speed_modifier": 1.3,
            "hit_states": {
              "type": "random",
              "states_count": [
                0
              ]
            },
            "attack_action": {
              "type": "cone",
              "radius": 2.8,
              "angle": 120
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_bear_attack2"
            ],
            "hit_empty_sounds": [
              "wls_mob_bear_attack2"
            ]
          }
        }
      ],
      "rank": "elite",
      "source": "avatars/wls2_mob_elite_animal_bear_6 + weapons/wls2_weapon_melee_elite_bear_6",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_elite_animal_bear_6",
        "tier": 6,
        "experience": 12000,
        "resistance": 0,
        "max_health": 38340,
        "stats": {
          "health": 38340,
          "move_speed": 4.75,
          "view_range": 6,
          "view_angle": 90,
          "attack_speed_modifier": 1,
          "water_pressure_resistance": 1,
          "wind_resistance": 1,
          "snow_resistance": 1
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 140,
        "avatar_type": "animal",
        "sub_type": "animal_bear",
        "rank": "elite",
        "is_taunter": true,
        "taunt": {
          "time": 6,
          "chance": 1,
          "cooldown": 5
        },
        "stack_collection_id": "wls2_mob_elite_animal_bear_6_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_elite_bear_6",
          "probability": 0.7
        },
        "weapon_2": {
          "weapon_id": "wls2_weapon_melee_elite_bear_special_6",
          "probability": 0.3
        },
        "movement": {
          "radius": 0.88,
          "height": 2,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_bear_mob"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_elite_animal_cat_6",
      "name": "北美美洲狮",
      "tier": 6,
      "base": {
        "health": 23040,
        "damage": 811,
        "penetrating_damage": 49,
        "penetration": 49,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 1.0,
        "range": 1.6,
        "moveSpeed": 5.75,
        "tier": 6
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_elite_cat_6",
          "weight": 1,
          "damage": 811,
          "penetrating_damage": 49,
          "attackSpeed": 1.0,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 0.4,
            "damage": 811,
            "penetrating_damage": 49,
            "attack_range": 1.6,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_cougar_attack1",
              "wls_mob_cougar_attack2"
            ],
            "hit_empty_sounds": [
              "wls_mob_cougar_attack1",
              "wls_mob_cougar_attack2"
            ]
          }
        }
      ],
      "rank": "elite",
      "source": "avatars/wls2_mob_elite_animal_cat_6 + weapons/wls2_weapon_melee_elite_cat_6",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_elite_animal_cat_6",
        "tier": 6,
        "experience": 8000,
        "resistance": 0,
        "max_health": 23040,
        "stats": {
          "health": 23040,
          "move_speed": 5.75,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1,
          "water_pressure_resistance": 0.3,
          "wind_resistance": 0.7,
          "snow_resistance": 0.77
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 135,
        "avatar_type": "animal",
        "sub_type": "animal_cat",
        "rank": "elite",
        "is_taunter": true,
        "taunt": {
          "time": 2,
          "chance": 1,
          "cooldown": 4
        },
        "stack_collection_id": "wls2_mob_elite_animal_cat_6_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_elite_cat_6"
        },
        "movement": {
          "radius": 0.41,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_puma_mob",
          "fullhp_crit_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_elite_animal_wolf_6",
      "name": "阿拉斯加阿尔法狼",
      "tier": 6,
      "base": {
        "health": 27540,
        "damage": 819,
        "penetrating_damage": 49,
        "penetration": 49,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 1.0,
        "range": 1.6,
        "moveSpeed": 5.75,
        "tier": 6
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_elite_wolf_6",
          "weight": 1,
          "damage": 819,
          "penetrating_damage": 49,
          "attackSpeed": 1.0,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 0.4,
            "damage": 819,
            "penetrating_damage": 49,
            "attack_range": 1.6,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0,
                1
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_elite_wolf_attack1",
              "wls_mob_elite_wolf_attack2",
              "wls_mob_elite_wolf_attack3",
              "wls_mob_elite_wolf_attack4"
            ],
            "hit_empty_sounds": [
              "wls_mob_elite_wolf_attack1",
              "wls_mob_elite_wolf_attack2",
              "wls_mob_elite_wolf_attack3",
              "wls_mob_elite_wolf_attack4"
            ]
          }
        }
      ],
      "rank": "elite",
      "source": "avatars/wls2_mob_elite_animal_wolf_6 + weapons/wls2_weapon_melee_elite_wolf_6",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_elite_animal_wolf_6",
        "tier": 6,
        "experience": 8000,
        "resistance": 0,
        "max_health": 27540,
        "stats": {
          "health": 27540,
          "move_speed": 5.75,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1,
          "water_pressure_resistance": 0.3,
          "wind_resistance": 0.7,
          "snow_resistance": 0.77
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 125,
        "avatar_type": "animal",
        "sub_type": "animal_wolf",
        "rank": "elite",
        "is_taunter": true,
        "taunt": {
          "time": 4,
          "chance": 1,
          "cooldown": 5
        },
        "stack_collection_id": "wls2_mob_elite_animal_wolf_6_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_elite_wolf_6"
        },
        "movement": {
          "radius": 0.41,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_direwolf_mob",
          "root_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_animal_cat_7",
      "name": "山猫 山猫",
      "tier": 7,
      "base": {
        "health": 23100,
        "damage": 850,
        "penetrating_damage": 85,
        "penetration": 85,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 1.0,
        "range": 1.6,
        "moveSpeed": 5.75,
        "tier": 7
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_cat_7",
          "weight": 1,
          "damage": 850,
          "penetrating_damage": 85,
          "attackSpeed": 1.0,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 0.4,
            "damage": 850,
            "penetrating_damage": 85,
            "attack_range": 1.6,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0,
                1
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_lynx_attack",
              "wls_mob_lynx_attack1"
            ],
            "hit_empty_sounds": [
              "wls_mob_lynx_attack",
              "wls_mob_lynx_attack1"
            ]
          }
        }
      ],
      "rank": "common",
      "source": "avatars/wls2_mob_animal_cat_7 + weapons/wls2_weapon_melee_cat_7",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_animal_cat_7",
        "tier": 7,
        "experience": 6500,
        "resistance": 0,
        "max_health": 23100,
        "stats": {
          "health": 23100,
          "move_speed": 5.75,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1,
          "water_pressure_resistance": 0.3,
          "wind_resistance": 0.5,
          "snow_resistance": 0.6
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 145,
        "avatar_type": "animal",
        "sub_type": "animal_cat",
        "rank": "common",
        "is_taunter": true,
        "taunt": {
          "time": 2,
          "chance": 1,
          "cooldown": 4
        },
        "stack_collection_id": "wls2_mob_animal_cat_7_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_cat_7"
        },
        "movement": {
          "radius": 0.6,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_lynx_mob",
          "bleed_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_animal_wolf_7",
      "name": "墨西哥 狼",
      "tier": 7,
      "base": {
        "health": 26400,
        "damage": 1090,
        "penetrating_damage": 109,
        "penetration": 109,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 1.0,
        "range": 1.6,
        "moveSpeed": 5.75,
        "tier": 7
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_wolf_7",
          "weight": 1,
          "damage": 1090,
          "penetrating_damage": 109,
          "attackSpeed": 1.0,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 0.4,
            "damage": 1090,
            "penetrating_damage": 109,
            "attack_range": 1.6,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_direwolf_attack2"
            ],
            "hit_empty_sounds": [
              "wls_mob_direwolf_attack2"
            ]
          }
        }
      ],
      "rank": "common",
      "source": "avatars/wls2_mob_animal_wolf_7 + weapons/wls2_weapon_melee_wolf_7",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_animal_wolf_7",
        "tier": 7,
        "experience": 6500,
        "resistance": 0,
        "max_health": 26400,
        "stats": {
          "health": 26400,
          "move_speed": 5.75,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1,
          "water_pressure_resistance": 0.3,
          "wind_resistance": 0.5,
          "snow_resistance": 0.6
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 140,
        "avatar_type": "animal",
        "sub_type": "animal_wolf",
        "rank": "common",
        "is_taunter": true,
        "taunt": {
          "time": 4,
          "chance": 1,
          "cooldown": 5
        },
        "stack_collection_id": "wls2_mob_animal_wolf_7_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_wolf_7"
        },
        "movement": {
          "radius": 0.41,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_wolf_mob",
          "slow_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_elite_animal_bear_7",
      "name": "美国黑熊",
      "tier": 7,
      "base": {
        "health": 82500,
        "damage": 2526,
        "penetrating_damage": 253,
        "penetration": 253,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 0.8333333333333333,
        "range": 1.6,
        "moveSpeed": 4.75,
        "tier": 7
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_elite_bear_7",
          "weight": 0.7,
          "damage": 2526,
          "penetrating_damage": 253,
          "attackSpeed": 0.8333333333333333,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 0.8,
            "attack_ending_time": 0.4,
            "damage": 2526,
            "penetrating_damage": 253,
            "attack_range": 1.6,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                1
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_bear_attack1"
            ],
            "hit_empty_sounds": [
              "wls_mob_bear_attack1"
            ]
          }
        },
        {
          "id": "wls2_weapon_melee_elite_bear_special_7",
          "weight": 0.3,
          "damage": 3789,
          "penetrating_damage": 379,
          "attackSpeed": 0.6341463414634148,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 1,
            "attack_ending_time": 1.05,
            "damage": 3789,
            "penetrating_damage": 379,
            "attack_range": 1.6,
            "speed_modifier": 1.3,
            "hit_states": {
              "type": "random",
              "states_count": [
                0
              ]
            },
            "attack_action": {
              "type": "cone",
              "radius": 2.8,
              "angle": 120
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_bear_attack2"
            ],
            "hit_empty_sounds": [
              "wls_mob_bear_attack2"
            ]
          }
        }
      ],
      "rank": "elite",
      "source": "avatars/wls2_mob_elite_animal_bear_7 + weapons/wls2_weapon_melee_elite_bear_7",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_elite_animal_bear_7",
        "tier": 7,
        "experience": 19500,
        "resistance": 0,
        "max_health": 82500,
        "stats": {
          "health": 82500,
          "move_speed": 4.75,
          "view_range": 6,
          "view_angle": 90,
          "attack_speed_modifier": 1,
          "water_pressure_resistance": 1,
          "wind_resistance": 1,
          "snow_resistance": 1
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 175,
        "avatar_type": "animal",
        "sub_type": "animal_animal_bear",
        "rank": "elite",
        "is_taunter": true,
        "taunt": {
          "time": 6,
          "chance": 1,
          "cooldown": 5
        },
        "stack_collection_id": "wls2_mob_elite_animal_bear_7_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_elite_bear_7",
          "probability": 0.7
        },
        "weapon_2": {
          "weapon_id": "wls2_weapon_melee_elite_bear_special_7",
          "probability": 0.3
        },
        "movement": {
          "radius": 0.88,
          "height": 2,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_bear_mob"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_elite_animal_cat_7",
      "name": "山地美洲狮",
      "tier": 7,
      "base": {
        "health": 49500,
        "damage": 1298,
        "penetrating_damage": 130,
        "penetration": 130,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 1.0,
        "range": 1.6,
        "moveSpeed": 5.75,
        "tier": 7
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_elite_cat_7",
          "weight": 1,
          "damage": 1298,
          "penetrating_damage": 130,
          "attackSpeed": 1.0,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 0.4,
            "damage": 1298,
            "penetrating_damage": 130,
            "attack_range": 1.6,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_cougar_attack1",
              "wls_mob_cougar_attack2"
            ],
            "hit_empty_sounds": [
              "wls_mob_cougar_attack1",
              "wls_mob_cougar_attack2"
            ]
          }
        }
      ],
      "rank": "elite",
      "source": "avatars/wls2_mob_elite_animal_cat_7 + weapons/wls2_weapon_melee_elite_cat_7",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_elite_animal_cat_7",
        "tier": 7,
        "experience": 13000,
        "resistance": 0,
        "max_health": 49500,
        "stats": {
          "health": 49500,
          "move_speed": 5.75,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1,
          "water_pressure_resistance": 0.3,
          "wind_resistance": 0.7,
          "snow_resistance": 0.77
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 165,
        "avatar_type": "animal",
        "sub_type": "animal_cat",
        "rank": "elite",
        "is_taunter": true,
        "taunt": {
          "time": 2,
          "chance": 1,
          "cooldown": 4
        },
        "stack_collection_id": "wls2_mob_elite_animal_cat_7_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_elite_cat_7"
        },
        "movement": {
          "radius": 0.41,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_puma_mob",
          "fullhp_crit_common"
        ],
        "knockdown_immune": true
      }
    },
    {
      "id": "wls2_mob_elite_animal_wolf_7",
      "name": "墨西哥阿尔法狼",
      "tier": 7,
      "base": {
        "health": 59400,
        "damage": 1310,
        "penetrating_damage": 130,
        "penetration": 130,
        "armor": 0,
        "resistance": 0,
        "attackSpeed": 1.0,
        "range": 1.6,
        "moveSpeed": 5.75,
        "tier": 7
      },
      "attacks": [
        {
          "id": "wls2_weapon_melee_elite_wolf_7",
          "weight": 1,
          "damage": 1310,
          "penetrating_damage": 130,
          "attackSpeed": 1.0,
          "range": 1.6,
          "sourceDefinition": {
            "attack_damage_time": 0.6,
            "attack_ending_time": 0.4,
            "damage": 1310,
            "penetrating_damage": 130,
            "attack_range": 1.6,
            "speed_modifier": 1,
            "hit_states": {
              "type": "random",
              "states_count": [
                0,
                1
              ]
            },
            "attack_action": {
              "type": "simple"
            },
            "tags": [
              "melee",
              "animal"
            ],
            "hit_sounds": [
              "wls_mob_elite_wolf_attack1",
              "wls_mob_elite_wolf_attack2",
              "wls_mob_elite_wolf_attack3",
              "wls_mob_elite_wolf_attack4"
            ],
            "hit_empty_sounds": [
              "wls_mob_elite_wolf_attack1",
              "wls_mob_elite_wolf_attack2",
              "wls_mob_elite_wolf_attack3",
              "wls_mob_elite_wolf_attack4"
            ]
          }
        }
      ],
      "rank": "elite",
      "source": "avatars/wls2_mob_elite_animal_wolf_7 + weapons/wls2_weapon_melee_elite_wolf_7",
      "confidence": "verified",
      "attackTimingConfidence": "inferred_from_animation_timings",
      "description": "面板使用第一套普通攻击；特殊攻击、嘲讽、控制与动作取消不在基础对战模拟内。",
      "sourceAvatar": {
        "behaviour_id": "wls2_mob_animal_no_drink",
        "behaviour_relation_id": "animal_aggressive",
        "avatar_view_id": "wls2_mob_elite_animal_wolf_7",
        "tier": 7,
        "experience": 13000,
        "resistance": 0,
        "max_health": 59400,
        "stats": {
          "health": 59400,
          "move_speed": 5.75,
          "view_range": 5,
          "view_angle": 90,
          "attack_speed_modifier": 1,
          "water_pressure_resistance": 0.3,
          "wind_resistance": 0.7,
          "snow_resistance": 0.77
        },
        "level_stats": {
          "health": 0
        },
        "loot_inventory": "loot_5",
        "mob_relation_cost": 155,
        "avatar_type": "animal",
        "sub_type": "animal_wolf",
        "rank": "elite",
        "is_taunter": true,
        "taunt": {
          "time": 4,
          "chance": 1,
          "cooldown": 5
        },
        "stack_collection_id": "wls2_mob_elite_animal_wolf_7_loot",
        "weapon_1": {
          "weapon_id": "wls2_weapon_melee_elite_wolf_7"
        },
        "movement": {
          "radius": 0.41,
          "height": 1.8,
          "smooth_start_time": 0.5
        },
        "perks": [
          "taunt_direwolf_mob",
          "root_common"
        ],
        "knockdown_immune": true
      }
    }
  ],
  "notes": [
    "技能按原版 198 个独立节点列出：同名不同阶是不同节点，每节点只有未学/已学。自由配点不检查前置、技能书或角色等级。",
    "技能的武器类型加成保留独立属性；非战斗、宠物、场景或特殊触发技能仅记录，不伪造效果。",
    "食物只列合法有名称与图标的 food/heal 行为物品；恢复速率 health_regen 和即时恢复 health 不混为同一数值。",
    "动物默认普通攻击速度来自伤害前摇+后摇的倒数；这不是已实机验证的 AI 出手频率，特殊攻击保留来源但不混入普通攻击。"
  ],
  "audit": {
    "animalCount": 25,
    "accessoryCount": 104,
    "foodCount": 115,
    "skillCount": 198,
    "supportedSkillCount": 57,
    "foodImageCount": 115,
    "accessoryImageCount": 104
  },
  "images": {
    "wls2_armor_neck_1": "wiki-assets/images/b41a9e6094a75d27e54058be4d42965a671bf4ea43e6f080995f8d7dff896f2a.png",
    "wls2_armor_neck_10": "wiki-assets/images/0ec2b01a0f1ee1a31e4425b62dad8dfe06ffecd4080af252370d094c64d84a26.png",
    "wls2_armor_neck_2": "wiki-assets/images/a8c078a399113a2b2c82f5afa98ee169056eddb9309b23ef0b943f0502c6cac3.png",
    "wls2_armor_neck_3": "wiki-assets/images/cfd4d3a8a01070e08344204bd0c6df09259ce2627d1b5aec7c935bfda9eb79bb.png",
    "wls2_armor_neck_4": "wiki-assets/images/2a8e150364253c66ea3bb50947d8b49f3e36aad599755c39be580349933546c2.png",
    "wls2_armor_neck_5": "wiki-assets/images/ca6895ec56f9ea366b76eb6f13b61149c34e9278fb8ff80284e6c4e5dff26741.png",
    "wls2_armor_neck_6": "wiki-assets/images/9b2665d4b66de824f6208ae0f20124a3c16fa23e48f5f16dce99f703b6161040.png",
    "wls2_armor_neck_7": "wiki-assets/images/10b440013de8d440187e54ab3213571dbaea1efe3ff28306fcfa08604d58f582.png",
    "wls2_armor_neck_8": "wiki-assets/images/089302096a0a7439283be8f00592f15eb413d3919431c004cd4e0959a9ebc66c.png",
    "wls2_armor_neck_9": "wiki-assets/images/cd8655c8bbb87b610cf9afadd6c825144cecf03aec36f84e33da18ab20431f30.png",
    "wls2_armor_ring_1": "wiki-assets/images/edebf10839a49530a5de3ecf40eacec94a62afb3c5ce0d2200f51a42e4aa78f0.png",
    "wls2_armor_ring_10": "wiki-assets/images/cbec4b83c5b5830005041d976a45718c6cc6fbcde60b9667f2bb9cef19eca865.png",
    "wls2_armor_ring_2": "wiki-assets/images/8cb93efdf13159d108033373ee868ef8d2c558f7709624a3bbda3a092c49f4b7.png",
    "wls2_armor_ring_3": "wiki-assets/images/57612bff8052edf5ac3eecedd7cfdba2a05cc310b7bc8a410cd5b7497ad02809.png",
    "wls2_armor_ring_4": "wiki-assets/images/ff1babd3d9efa0f10bc25dfff409771c3a4a14e76ec0637df776dd49c0a1b172.png",
    "wls2_armor_ring_5": "wiki-assets/images/d2279eeaa8db6a7fb3ab41ddead4cd7efe92841dccd98c1f5e2f56f598a6c1fb.png",
    "wls2_armor_ring_6": "wiki-assets/images/f1abb6466643187311af0415217c76a7b49f06b99854776f90dba8c2d379bf04.png",
    "wls2_armor_ring_7": "wiki-assets/images/dbae946e90547193ab6170a796aadb2c811bef3efb087d016a24ddc9e28de8f9.png",
    "wls2_armor_ring_8": "wiki-assets/images/fb4b586d0e0f43a2ea764ce2987534911644485e3f49d026838fb8999a105455.png",
    "wls2_armor_ring_9": "wiki-assets/images/31649bbec5712301af022e68708d3f6d3c22fd31af0a43cd0f23f46dbfae0a70.png",
    "wls2_armor_ring_easter_penalty_resistnace_rare": "wiki-assets/images/31649bbec5712301af022e68708d3f6d3c22fd31af0a43cd0f23f46dbfae0a70.png",
    "wls2_armor_ring_easter_penalty_uncommon": "wiki-assets/images/31649bbec5712301af022e68708d3f6d3c22fd31af0a43cd0f23f46dbfae0a70.png",
    "wls2_armor_ring_easter_resistance_uncommon": "wiki-assets/images/fb4b586d0e0f43a2ea764ce2987534911644485e3f49d026838fb8999a105455.png",
    "wls2_armor_ring_easter_resistance_warm_rare": "wiki-assets/images/fb4b586d0e0f43a2ea764ce2987534911644485e3f49d026838fb8999a105455.png",
    "wls2_armor_ring_easter_warm_penalty_rare": "wiki-assets/images/cbec4b83c5b5830005041d976a45718c6cc6fbcde60b9667f2bb9cef19eca865.png",
    "wls2_armor_ring_easter_warm_uncommon": "wiki-assets/images/cbec4b83c5b5830005041d976a45718c6cc6fbcde60b9667f2bb9cef19eca865.png",
    "wls2_armor_ring_halloween_21_penalty_resistnace_rare": "wiki-assets/images/31649bbec5712301af022e68708d3f6d3c22fd31af0a43cd0f23f46dbfae0a70.png",
    "wls2_armor_ring_halloween_21_penalty_uncommon": "wiki-assets/images/31649bbec5712301af022e68708d3f6d3c22fd31af0a43cd0f23f46dbfae0a70.png",
    "wls2_armor_ring_halloween_21_penalty_uncommon_weak": "wiki-assets/images/31649bbec5712301af022e68708d3f6d3c22fd31af0a43cd0f23f46dbfae0a70.png",
    "wls2_armor_ring_halloween_21_resistance_uncommon": "wiki-assets/images/fb4b586d0e0f43a2ea764ce2987534911644485e3f49d026838fb8999a105455.png",
    "wls2_armor_ring_halloween_21_resistance_uncommon_weak": "wiki-assets/images/fb4b586d0e0f43a2ea764ce2987534911644485e3f49d026838fb8999a105455.png",
    "wls2_armor_ring_halloween_21_resistance_warm_rare": "wiki-assets/images/fb4b586d0e0f43a2ea764ce2987534911644485e3f49d026838fb8999a105455.png",
    "wls2_armor_ring_halloween_21_warm_penalty_rare": "wiki-assets/images/cbec4b83c5b5830005041d976a45718c6cc6fbcde60b9667f2bb9cef19eca865.png",
    "wls2_armor_ring_halloween_21_warm_uncommon": "wiki-assets/images/cbec4b83c5b5830005041d976a45718c6cc6fbcde60b9667f2bb9cef19eca865.png",
    "wls2_armor_ring_halloween_21_warm_uncommon_weak": "wiki-assets/images/cbec4b83c5b5830005041d976a45718c6cc6fbcde60b9667f2bb9cef19eca865.png",
    "wls2_armor_ring_halloween_23_cold_uncommon": "wiki-assets/images/51067688113150f8ed0d97766983484b9551b3d4c058c51b187ce63ea5ac44b8.png",
    "wls2_battlepass3_ring_all_stats_2_epic": "wiki-assets/images/e881296e0f234e2b3852ead6e527cd6fd04acd09fa2443ffde2f88dfb70c5e40.png",
    "wls2_battlepass3_ring_all_stats_3_epic": "wiki-assets/images/e881296e0f234e2b3852ead6e527cd6fd04acd09fa2443ffde2f88dfb70c5e40.png",
    "wls2_battlepass3_ring_all_stats_4_epic": "wiki-assets/images/e881296e0f234e2b3852ead6e527cd6fd04acd09fa2443ffde2f88dfb70c5e40.png",
    "wls2_battlepass3_ring_all_stats_5_epic": "wiki-assets/images/e881296e0f234e2b3852ead6e527cd6fd04acd09fa2443ffde2f88dfb70c5e40.png",
    "wls2_battlepass3_ring_all_stats_6_epic": "wiki-assets/images/e881296e0f234e2b3852ead6e527cd6fd04acd09fa2443ffde2f88dfb70c5e40.png",
    "wls2_battlepass3_ring_all_stats_7_epic": "wiki-assets/images/e881296e0f234e2b3852ead6e527cd6fd04acd09fa2443ffde2f88dfb70c5e40.png",
    "wls2_battlepass6_neck_thanksgiving_2": "wiki-assets/images/78ba29fb12e2c678aa3be093714084893b93ba2977c1223e40c5f4349e7f5cd9.png",
    "wls2_battlepass6_neck_thanksgiving_3": "wiki-assets/images/78ba29fb12e2c678aa3be093714084893b93ba2977c1223e40c5f4349e7f5cd9.png",
    "wls2_battlepass6_neck_thanksgiving_4": "wiki-assets/images/78ba29fb12e2c678aa3be093714084893b93ba2977c1223e40c5f4349e7f5cd9.png",
    "wls2_battlepass6_neck_thanksgiving_5": "wiki-assets/images/78ba29fb12e2c678aa3be093714084893b93ba2977c1223e40c5f4349e7f5cd9.png",
    "wls2_battlepass6_neck_thanksgiving_6": "wiki-assets/images/78ba29fb12e2c678aa3be093714084893b93ba2977c1223e40c5f4349e7f5cd9.png",
    "wls2_battlepass6_neck_thanksgiving_7": "wiki-assets/images/78ba29fb12e2c678aa3be093714084893b93ba2977c1223e40c5f4349e7f5cd9.png",
    "wls2_battlepass6_ring_pet_2": "wiki-assets/images/2326235ff84e51f800de6bd51235ae715babaa419c1d194da7377da43e125e66.png",
    "wls2_battlepass6_ring_pet_3": "wiki-assets/images/2326235ff84e51f800de6bd51235ae715babaa419c1d194da7377da43e125e66.png",
    "wls2_battlepass6_ring_pet_4": "wiki-assets/images/2326235ff84e51f800de6bd51235ae715babaa419c1d194da7377da43e125e66.png",
    "wls2_battlepass6_ring_pet_5": "wiki-assets/images/2326235ff84e51f800de6bd51235ae715babaa419c1d194da7377da43e125e66.png",
    "wls2_battlepass6_ring_pet_6": "wiki-assets/images/2326235ff84e51f800de6bd51235ae715babaa419c1d194da7377da43e125e66.png",
    "wls2_battlepass6_ring_thanksgiving_2": "wiki-assets/images/e60841fa39866f2a2636676cf67028e2ea002135b018ba60ea45e11402676368.png",
    "wls2_battlepass6_ring_thanksgiving_3": "wiki-assets/images/e60841fa39866f2a2636676cf67028e2ea002135b018ba60ea45e11402676368.png",
    "wls2_battlepass6_ring_thanksgiving_4": "wiki-assets/images/e60841fa39866f2a2636676cf67028e2ea002135b018ba60ea45e11402676368.png",
    "wls2_battlepass6_ring_thanksgiving_5": "wiki-assets/images/e60841fa39866f2a2636676cf67028e2ea002135b018ba60ea45e11402676368.png",
    "wls2_battlepass6_ring_thanksgiving_6": "wiki-assets/images/e60841fa39866f2a2636676cf67028e2ea002135b018ba60ea45e11402676368.png",
    "wls2_battlepass6_ring_thanksgiving_7": "wiki-assets/images/e60841fa39866f2a2636676cf67028e2ea002135b018ba60ea45e11402676368.png",
    "wls2_battlepass7_ring_2": "wiki-assets/images/54e79ab0f40f64b48232f5837f4f0225c83daa0098ad3798e1338ff2e8db2afc.png",
    "wls2_battlepass7_ring_3": "wiki-assets/images/54e79ab0f40f64b48232f5837f4f0225c83daa0098ad3798e1338ff2e8db2afc.png",
    "wls2_battlepass7_ring_4": "wiki-assets/images/54e79ab0f40f64b48232f5837f4f0225c83daa0098ad3798e1338ff2e8db2afc.png",
    "wls2_battlepass7_ring_5": "wiki-assets/images/54e79ab0f40f64b48232f5837f4f0225c83daa0098ad3798e1338ff2e8db2afc.png",
    "wls2_battlepass7_ring_6": "wiki-assets/images/54e79ab0f40f64b48232f5837f4f0225c83daa0098ad3798e1338ff2e8db2afc.png",
    "wls2_battlepass7_ring_7": "wiki-assets/images/54e79ab0f40f64b48232f5837f4f0225c83daa0098ad3798e1338ff2e8db2afc.png",
    "wls2_battlepass8_ring_2": "wiki-assets/images/0db4ebde0be372c5bbedf733138e031930274540dc136b80edec4d4386615561.png",
    "wls2_battlepass8_ring_3": "wiki-assets/images/0db4ebde0be372c5bbedf733138e031930274540dc136b80edec4d4386615561.png",
    "wls2_battlepass8_ring_4": "wiki-assets/images/0db4ebde0be372c5bbedf733138e031930274540dc136b80edec4d4386615561.png",
    "wls2_battlepass8_ring_5": "wiki-assets/images/0db4ebde0be372c5bbedf733138e031930274540dc136b80edec4d4386615561.png",
    "wls2_battlepass8_ring_6": "wiki-assets/images/0db4ebde0be372c5bbedf733138e031930274540dc136b80edec4d4386615561.png",
    "wls2_battlepass8_ring_7": "wiki-assets/images/0db4ebde0be372c5bbedf733138e031930274540dc136b80edec4d4386615561.png",
    "wls2_battlepass_2025_neck_new_year_2": "wiki-assets/images/2e4a64933a29c5c476540d6d282b336ffaff2118d98c76fea5992f90dc539280.png",
    "wls2_battlepass_2025_neck_new_year_3": "wiki-assets/images/2e4a64933a29c5c476540d6d282b336ffaff2118d98c76fea5992f90dc539280.png",
    "wls2_battlepass_2025_neck_new_year_4": "wiki-assets/images/2e4a64933a29c5c476540d6d282b336ffaff2118d98c76fea5992f90dc539280.png",
    "wls2_battlepass_2025_neck_new_year_5": "wiki-assets/images/2e4a64933a29c5c476540d6d282b336ffaff2118d98c76fea5992f90dc539280.png",
    "wls2_battlepass_2025_neck_new_year_6": "wiki-assets/images/2e4a64933a29c5c476540d6d282b336ffaff2118d98c76fea5992f90dc539280.png",
    "wls2_battlepass_2025_neck_new_year_7": "wiki-assets/images/2e4a64933a29c5c476540d6d282b336ffaff2118d98c76fea5992f90dc539280.png",
    "wls2_battlepass_2025_neck_saint_patrick_3": "wiki-assets/images/0b7fcabc4d3dd3a8613945a626130e41499249f4c3c2d0150de0b338735baf96.png",
    "wls2_battlepass_2025_neck_saint_patrick_4": "wiki-assets/images/0b7fcabc4d3dd3a8613945a626130e41499249f4c3c2d0150de0b338735baf96.png",
    "wls2_battlepass_2025_neck_saint_patrick_5": "wiki-assets/images/0b7fcabc4d3dd3a8613945a626130e41499249f4c3c2d0150de0b338735baf96.png",
    "wls2_battlepass_2025_neck_saint_patrick_6": "wiki-assets/images/0b7fcabc4d3dd3a8613945a626130e41499249f4c3c2d0150de0b338735baf96.png",
    "wls2_battlepass_ring_fire_bloom_2": "wiki-assets/images/23eaa65c44aba603f0bfaa4f3ec757731e389d06e9b0865c67ade539ff4433d9.png",
    "wls2_battlepass_ring_fire_bloom_3": "wiki-assets/images/23eaa65c44aba603f0bfaa4f3ec757731e389d06e9b0865c67ade539ff4433d9.png",
    "wls2_battlepass_ring_fire_bloom_4": "wiki-assets/images/23eaa65c44aba603f0bfaa4f3ec757731e389d06e9b0865c67ade539ff4433d9.png",
    "wls2_battlepass_ring_fire_bloom_5": "wiki-assets/images/23eaa65c44aba603f0bfaa4f3ec757731e389d06e9b0865c67ade539ff4433d9.png",
    "wls2_battlepass_ring_fire_bloom_6": "wiki-assets/images/23eaa65c44aba603f0bfaa4f3ec757731e389d06e9b0865c67ade539ff4433d9.png",
    "wls2_diary_armor_ring_rare": "wiki-assets/images/57612bff8052edf5ac3eecedd7cfdba2a05cc310b7bc8a410cd5b7497ad02809.png",
    "wls2_necklace_lunar_2": "wiki-assets/images/7a9421fe154e36916f2453abf4ae46e7d37578d9a7a464e1dfb375dec1eb15b4.png",
    "wls2_necklace_lunar_3": "wiki-assets/images/7a9421fe154e36916f2453abf4ae46e7d37578d9a7a464e1dfb375dec1eb15b4.png",
    "wls2_necklace_lunar_4": "wiki-assets/images/7a9421fe154e36916f2453abf4ae46e7d37578d9a7a464e1dfb375dec1eb15b4.png",
    "wls2_necklace_lunar_5": "wiki-assets/images/7a9421fe154e36916f2453abf4ae46e7d37578d9a7a464e1dfb375dec1eb15b4.png",
    "wls2_necklace_lunar_6": "wiki-assets/images/7a9421fe154e36916f2453abf4ae46e7d37578d9a7a464e1dfb375dec1eb15b4.png",
    "wls2_necklace_lunar_7": "wiki-assets/images/7a9421fe154e36916f2453abf4ae46e7d37578d9a7a464e1dfb375dec1eb15b4.png",
    "wls2_necklace_xmas_2025_2": "wiki-assets/images/b9713fdb138df1d54745162af6b3feed5c317fdb53df6ec530dd1f2edcc422e6.png",
    "wls2_necklace_xmas_2025_3": "wiki-assets/images/b9713fdb138df1d54745162af6b3feed5c317fdb53df6ec530dd1f2edcc422e6.png",
    "wls2_necklace_xmas_2025_4": "wiki-assets/images/b9713fdb138df1d54745162af6b3feed5c317fdb53df6ec530dd1f2edcc422e6.png",
    "wls2_necklace_xmas_2025_5": "wiki-assets/images/b9713fdb138df1d54745162af6b3feed5c317fdb53df6ec530dd1f2edcc422e6.png",
    "wls2_necklace_xmas_2025_6": "wiki-assets/images/b9713fdb138df1d54745162af6b3feed5c317fdb53df6ec530dd1f2edcc422e6.png",
    "wls2_necklace_xmas_2025_7": "wiki-assets/images/b9713fdb138df1d54745162af6b3feed5c317fdb53df6ec530dd1f2edcc422e6.png",
    "wls2_ring_steam": "wiki-assets/images/ecf942c7032dbbbb60be14ec3b65ad444e037c78acb9cfbd65acebdcb05bd857.png",
    "wls_reward_ring_armor": "wiki-assets/images/8cb93efdf13159d108033373ee868ef8d2c558f7709624a3bbda3a092c49f4b7.png",
    "wls_reward_ring_attspeed": "wiki-assets/images/edebf10839a49530a5de3ecf40eacec94a62afb3c5ce0d2200f51a42e4aa78f0.png",
    "wls_reward_ring_spirit": "wiki-assets/images/57612bff8052edf5ac3eecedd7cfdba2a05cc310b7bc8a410cd5b7497ad02809.png",
    "wls_the_one_ring": "wiki-assets/images/b558cda6f9fc291813642ecff0e13fe846ef1dd4fbd1b99046d3267945238669.png",
    "wls2_coffee": "wiki-assets/images/6d89dd0129c9101387581ba7e672811e612d835f27bb8b64ab9e6e30f910602e.png",
    "wls2_consumable_corn_1": "wiki-assets/images/4aa3532a01365341dd26cd1ac45d4e0a1580ecc808a122e17a0a4ae4d1abd56b.png",
    "wls2_consumable_corn_porridge_1_common": "wiki-assets/images/332e8ce99b07cd9d06adf4d07d6ef86dab2d43154a82ad3ae17b6d26a1dc2022.png",
    "wls2_consumable_easter_bun": "wiki-assets/images/0be7a53b1dbe1f73d033645af675b0d2252e0e43689aa1ac94210918c992923a.png",
    "wls2_consumable_flask_heal_1": "wiki-assets/images/07b68373111b6c89f0a4153475905a12252ee12838fb3e77c59a3b71f6f2dc12.png",
    "wls2_consumable_flask_water_1": "wiki-assets/images/63d20ffba8fce7acf8bff9f1b17aa1f7951f59e1068cd57e40f7d5477ed4f5e9.png",
    "wls2_consumable_food_dryer_1": "wiki-assets/images/7020e08e38c5c579bff8991c9744145094792a5375bd69855aefb00f12610909.png",
    "wls2_consumable_food_kitchen_1": "wiki-assets/images/ba6990377679d3c73deda17d433dc71b397d37679ea16e831d1569a7adca6aac.png",
    "wls2_consumable_fortune_cookie": "wiki-assets/images/cd137f983752b599e1b9098df9c6890128eb39c118852e22c9ad543a0140835a.png",
    "wls2_consumable_grilled_meat_1_common": "wiki-assets/images/2fafa25aa90e0aa9352dbab691cd508c380bae04f640a3f35a487b9d084e7471.png",
    "wls2_consumable_heal_bandage_1": "wiki-assets/images/05dc8afc99c50c548a2e124e41d6290fa1bbb99954a822a6d6ccc74aeb49d9bd.png",
    "wls2_consumable_oil_heal_1": "wiki-assets/images/95bfb662c5807058c11d6395726ed54c86efdd77ad8eaba0558cb1a807abad91.png",
    "wls2_consumable_st_patricks_day_beer": "wiki-assets/images/5b9c82bd74cb69e98bc9992a6399962ae5d13696260fb30138baf8b3c7745426.png",
    "wls2_consumable_valentines_day_cakes": "wiki-assets/images/45a9949c7fca12f36113d3d2c91c62a1b03d9a0960906d119382b8753af3f7ae.png",
    "wls2_consumable_wls_day_2026_pie": "wiki-assets/images/5d75323a29eb79d1a730fd45bc7a6af6ae951b41900d1168a248c9127cbb6ce9.png",
    "wls2_easter_candy": "wiki-assets/images/23284713edfdb7602fb449909a185a77479545589646ff225b39019c48f0cc7b.png",
    "wls2_gingerbread_food_xmas_2025": "wiki-assets/images/3220e948a952e673fad2b3993359f16e9d2ff2dc39db5ab94262afa18b6483a3.png",
    "wls2_halloween_food_pumpkin": "wiki-assets/images/f67444893b375751e453c953e0daab75a354e41f65b70ec4bb11b9b22e3c60b7.png",
    "wls2_halloween_food_pumpkin_porridge": "wiki-assets/images/8d61a01fbb5af22d10b7e23bd5a53261cd9a4eb9712aa117f9153da8f4431dfe.png",
    "wls2_resourse_miscellaneous_herb_1": "wiki-assets/images/6622167fe2be0f7d861a2daeccb7003d9f6aed70a2c0ccb0d114bc16a24e60e6.png",
    "wls2_steam_food": "wiki-assets/images/737292769079370cd9934554c1ac500f3cd117dce5dae4c68619f85d461bce9b.png",
    "wls2_xmas_21_consumable_candy": "wiki-assets/images/23284713edfdb7602fb449909a185a77479545589646ff225b39019c48f0cc7b.png",
    "wls_halloween_candy": "wiki-assets/images/6378566e8bdbbee667811cd277621e83344a97532bde7ce6fbc76a8dc8b92485.png",
    "wls_whiskey": "wiki-assets/images/98e3455f1987bb4582aafff4c37635cd95fbb4353d1c520c855c0e103231a914.png",
    "wls2_consumable_baked_poultry_2_uncommon": "wiki-assets/images/591eb32be90656eee45f3e9484a0d29fdd6437274f56dafd0796288c74ec721b.png",
    "wls2_consumable_cactus_drink_2_common": "wiki-assets/images/681b97be75acf6cb6adc7dbcf84b9045d2cb4fee484bd750f1463d6beb488341.png",
    "wls2_consumable_cowboy_bisquits_2_common": "wiki-assets/images/afb3fbe579d88ebe4a6e7ef10186861c701446ed1d0517ad703da86a154f4d4e.png",
    "wls2_consumable_flask_heal_2": "wiki-assets/images/64a16c84d191840230737ab1099747ba672d853a0877e12014fa93b2f3d867bb.png",
    "wls2_consumable_food_dryer_2": "wiki-assets/images/837f148e0272971b343cbcd69b22539f528811205587baf0800c505e20cee7e8.png",
    "wls2_consumable_heal_bandage_2": "wiki-assets/images/d69a7ecb4b3b75f00ad4effa405e3b4ad470c13f1c247a8ae84ab15b64a0cf4f.png",
    "wls2_consumable_oil_heal_2": "wiki-assets/images/3d2be31463de1af5a9911a74991cfc93d9f1c085f8cd5bba37d76e27aabcb981.png",
    "wls2_consumable_schnitzel_2_common": "wiki-assets/images/0b9400d501a767696e3634b3e281764c5780da8dbba7a11debce9b6c9ba0cf35.png",
    "wls2_resourse_miscellaneous_herb_2": "wiki-assets/images/00a58fb547a67459d87ca74b1f82e74a45b49406983552320a4dc85ef824c19f.png",
    "wls_cactus_berry": "wiki-assets/images/307adc0f5e5932ae54df54bef7b01b2ae75d5243518fffe407d0b6de90aa783c.png",
    "wls2_consumable_balm_heal_3": "wiki-assets/images/250a74c6444dcd92f2cba3dfdfa1f964e5c60041c5c632bfa4e9c6129f0c452e.png",
    "wls2_consumable_bean_bread_3_common": "wiki-assets/images/d7b6129973bb17639b6bf796a267d49fe682e5ff7e3cbddc46125078102eedf9.png",
    "wls2_consumable_beans_1": "wiki-assets/images/29277157b8759ae48738be2de1cc3fcc8c3d12d4cb1c07093e2a785a16231623.png",
    "wls2_consumable_blueberry_meat_pie_3_rare": "wiki-assets/images/49038c149d85a89a8f621d0df311f79fc91e911d85d6f3b9b351e62d9cb60253.png",
    "wls2_consumable_compote_3_common": "wiki-assets/images/98067260f6e45453aeabdcad6818784040f7bffcf56d066713caea9a383025ef.png",
    "wls2_consumable_flask_heal_3": "wiki-assets/images/c9191d7947832db4b33603586fed43158a01263aae9d597cf3cac56f4228c225.png",
    "wls2_consumable_food_bonfire_3": "wiki-assets/images/0174f7adbab0a1d47bcf268aeae7a74510271b9d694d28fafa37b9179c59ed0a.png",
    "wls2_consumable_heal_bandage_3": "wiki-assets/images/df73ea9aa62cbd285c5089589729d36ff716cd9b290c4f8e39a8ba493b1784d3.png",
    "wls2_consumable_hunter_stew_3_uncommon": "wiki-assets/images/3126337014ada2e815c03770bb319c86636bc679e069fcb7b52a25c0da1c265d.png",
    "wls2_consumable_oil_heal_3": "wiki-assets/images/e5e00b0b411110f20c438502a154714759d942584460629ffe50d65399b4c6b0.png",
    "wls2_consumable_pemmican_3_uncommon": "wiki-assets/images/530bbfba1b3c720138977810f8c0929e0d1ac30a02e2df45a4bb842931203b55.png",
    "wls2_consumable_ribs_blueberry_3_common": "wiki-assets/images/1160bcaf51c60582d76439f754377a03d3770437c07321b3581e6f2468725431.png",
    "wls2_consumable_roasted_bone_marrow_t3": "wiki-assets/images/2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355.png",
    "wls2_consumable_st_patricks_day_pie_t3": "wiki-assets/images/4e724de747000ffe5f925302e0b728ab5f79119edc01a134543377586f07dfc9.png",
    "wls2_resourse_miscellaneous_herb_3": "wiki-assets/images/0aba29cf573ba6b7a977c8260642e55d9469bb23e06363ef39477b5c39419740.png",
    "wls_berry": "wiki-assets/images/7e02446c908829d856ae985b2ac2c643882c1c83c0c245bc86d1f9e50617ba99.png",
    "wls2_consumable_bacon_bread_pudding_4_uncommon": "wiki-assets/images/6e396911fe856c617905140a72ba36112e206eccc9ae545c99439a07b35b85e7.png",
    "wls2_consumable_balm_heal_4": "wiki-assets/images/3d6cbbd155932d41504e0b069ef6325ef0abc3d0391ec9dcf15d0e4532b37b21.png",
    "wls2_consumable_cabbage": "wiki-assets/images/e4b7286577be786915cd868209d1933247f68107e7ff19cf1b73144a3290ef06.png",
    "wls2_consumable_fillet_steak_4_common": "wiki-assets/images/bb3262e81c086ac7839970ccb5751f3d2370f0974d0ed93941dd1d8eba8bfc27.png",
    "wls2_consumable_flask_heal_4": "wiki-assets/images/ba632c139057762eaedacdccbc05238a2f2868aae0aa84cf4fa64244bb359d12.png",
    "wls2_consumable_fried_chicken_4_common": "wiki-assets/images/04617852c7943e6e54ed7d80b79e87a863a5155d760f8ee82f31de0545fb52f0.png",
    "wls2_consumable_fried_trout_4_rare": "wiki-assets/images/da16c2f9054690dc2cf8a54fa7f02042757cacb940cca565982ff6e99a36dad1.png",
    "wls2_consumable_heal_bandage_4": "wiki-assets/images/717808ff84076a80740d1c0c4a2fca02f49a3687d2f2cb778be35475983be572.png",
    "wls2_consumable_hoppin_john_4_uncommon": "wiki-assets/images/a653d160defb58bc013a62dad5869effa9f1cf60c56db5dd31bf8848f22bc844.png",
    "wls2_consumable_iced_tea_4_uncommon": "wiki-assets/images/713767460141741e8dba05de53b7a09de00be75c86aab23212f1e78d9f703fee.png",
    "wls2_consumable_oil_heal_4": "wiki-assets/images/ac9f94dbac26d6676222263f8a89befbe0ad973eca34efed9321e7b2fff3cf75.png",
    "wls2_consumable_roasted_bone_marrow_t4": "wiki-assets/images/2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355.png",
    "wls2_consumable_smithfield_ham_4_rare": "wiki-assets/images/4ffb3e7ab10cbfc56999e24ec0226ad6a6f138e44c8f3494801b5133a8bdeb48.png",
    "wls2_consumable_southern_tea_punch_4_rare": "wiki-assets/images/d683ee88322ef59f97b90a5f389c4601093587748ff808414dd522a26dc60bfb.png",
    "wls2_consumable_tea_4_common": "wiki-assets/images/9e83fef8b0794f794509821c5135244014dccc6502e9bf4b9e78ee02a2532a05.png",
    "wls2_resourse_miscellaneous_herb_4": "wiki-assets/images/1035b1d41276dd2cfaeb831a27c7a85584002d883eee9271a37fa32065e28452.png",
    "wls2_consumable_balm_heal_5": "wiki-assets/images/6fc7c1a9bc7f59d4f014cae52c1a0a12cc92ceabe277504f83e99afa1f678275.png",
    "wls2_consumable_boudin_corndog_5_rare": "wiki-assets/images/db71774b0df6fbdd46ae4e44b9a71b94cdfb4d81938e5b3d7b54aa32c9cfab3a.png",
    "wls2_consumable_cajun_pumpkin_porridge_5_uncommon": "wiki-assets/images/31e4d521e0ac325b79b1aab885a8215779c4625845daa1dd90f39e6d731c6ce3.png",
    "wls2_consumable_coffee_5_common": "wiki-assets/images/88154ada2388717e81687bd8a36f1c6fdbc31676945d48bb43e8e496ec0ac067.png",
    "wls2_consumable_courtbouillon_5_rare": "wiki-assets/images/66cf1a918c83f72d9527f850105d7506be350d60af96ca2d4e50e68b0d22df26.png",
    "wls2_consumable_flask_heal_5": "wiki-assets/images/1ef6f51a8337a52a95b25b4a586d1950e618fa26b4130f8a97a4f41e566c3b23.png",
    "wls2_consumable_gumbo_5_rare": "wiki-assets/images/3944362d22dc18062c62bb22aeee995a6787ccbf15266bfd8f6c4e25aef3867d.png",
    "wls2_consumable_irish_coffee_5_rare": "wiki-assets/images/9b801a636755d77570e5f08036eef4f9e44ff4dbc4f7cae5917fa67bb27ab8d1.png",
    "wls2_consumable_medallion_steak_5_common": "wiki-assets/images/5c5332589d65b6c98d4c18eb49f07d3bc5efad47a6a8456aa2a1a1cc2083b90c.png",
    "wls2_consumable_oil_heal_5": "wiki-assets/images/dc6bf375fe4c71405488bce0d555b9bb3cea8311a74d304bf26aeabb69cf041c.png",
    "wls2_consumable_potlikker_stew_5_uncommon": "wiki-assets/images/c7a35021a7c288f94f6226440cb19ed465503607ae726ba33c8288a4c99fc320.png",
    "wls2_consumable_pumpkin_1": "wiki-assets/images/f67444893b375751e453c953e0daab75a354e41f65b70ec4bb11b9b22e3c60b7.png",
    "wls2_consumable_pumpkin_bisque_5_common": "wiki-assets/images/271a4b0982b785954223d6ee585be0a37f2f477c5d1e1886af0d7fac69b06541.png",
    "wls2_consumable_roasted_bone_marrow_t5": "wiki-assets/images/2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355.png",
    "wls2_consumable_spiced_coffee_5_uncommon": "wiki-assets/images/01e48f3a1bbda249a35378e2f4d3d67504c566ef30b52417c79ceaf28afb0624.png",
    "wls2_consumable_st_patricks_day_pie_t5": "wiki-assets/images/4e724de747000ffe5f925302e0b728ab5f79119edc01a134543377586f07dfc9.png",
    "wls2_resourse_miscellaneous_herb_5": "wiki-assets/images/b670ba6bdc9f6699965ef0fed70ba6c6b0cd71bd959ee9868c4e82d45337f70d.png",
    "wls2_consumable_akutaq_6_rare": "wiki-assets/images/a73ea80bd9f3b7494324df1dd4ea5f2ea7695486199248ad927d609726084cf0.png",
    "wls2_consumable_baked_potato_6_common": "wiki-assets/images/17788243f4985ad364175802fc66cf0dc70568951878608409d5397768f1c6b1.png",
    "wls2_consumable_caribu_potato_6_uncommon": "wiki-assets/images/91a9c4e7bb6539cbf50a200c17b08e8e054b2b02f51d9ea36405736e5b76b51d.png",
    "wls2_consumable_caribu_soup_6_uncommon": "wiki-assets/images/1e7f7138394e60074d1e43b488caf0fff4574ad046cda517bf2d61d192c1b1b8.png",
    "wls2_consumable_caribu_steak_6_common": "wiki-assets/images/df875b22dc9feaf5f6aedb38cdae9a7cb999fdb16aeaef26b598d1a5371ec052.png",
    "wls2_consumable_flask_heal_6": "wiki-assets/images/aa63029eb43d5a2ef1037f7a57c4d8d6bbbc8c4adb2b1e3536ad061934305ec5.png",
    "wls2_consumable_injun_drink_6_common": "wiki-assets/images/2e700053d492efc3f922a9163f1a36ebd8ad9339c54f5b55d926b7b6643a77ba.png",
    "wls2_consumable_injun_drink_6_rare": "wiki-assets/images/4178b53cd96cdc0d7645f69e543f7a551638142d1b4ed03e898f93b0a3e469fe.png",
    "wls2_consumable_injun_drink_6_uncommon": "wiki-assets/images/23f726ab739c2ac4a30925ae215dbf16eab8879d79cdd46abb8cea3c034b339e.png",
    "wls2_consumable_meat_soup_6_rare": "wiki-assets/images/d9ee3b05fe1f6f92d8ab511c4ab263d9632da28818368f887fc2b3c70dcfbefa.png",
    "wls2_consumable_oil_heal_6": "wiki-assets/images/37a4b1cd28de1f0eb58a3a1e22da8730335a24cefb0a6bf374784576e92d875b.png",
    "wls2_consumable_potato_1": "wiki-assets/images/e520bfa84144c54bf538ca6000758a310d7567e92938de61b6af383703a21edd.png",
    "wls2_consumable_roasted_bone_marrow_t6": "wiki-assets/images/2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355.png",
    "wls2_consumable_salmon_chowder_6_rare": "wiki-assets/images/4f4346f236aa72b2a064c60dc6239b283bed89691800a986d32d0094094e61c2.png",
    "wls2_resourse_miscellaneous_herb_6": "wiki-assets/images/3b673572c9bab689767204ca1a21719b1f0596eb18d198c1d99cc2fc58a532ed.png",
    "wls2_consumable_bass_cakes_7_rare": "wiki-assets/images/8497dce15251902400f146e97ef2ecade6705ec967c859dd2629bd2a84665c7d.png",
    "wls2_consumable_beef_ragout_7_rare": "wiki-assets/images/5489785917637b57a4d05e3b7755147b28844ec8d83b3247f53c2331cfbdb5ef.png",
    "wls2_consumable_bloody_molly_7_rare": "wiki-assets/images/312eff2c0f7c1679184a86920c07dae0391fd2890df8008a59cd3c26301e8725.png",
    "wls2_consumable_chili_con_carne_7_rare": "wiki-assets/images/a62db4fd72e9eace0e5187dc100e694bba2ac830b9f54f5c06563fb55cd73805.png",
    "wls2_consumable_flask_heal_7": "wiki-assets/images/e62c15c1d7285c6e6a6bd095fe59325f8035efdc071bbbfdaf01db863d362ba7.png",
    "wls2_consumable_lime_squash_7_common": "wiki-assets/images/5d1a990dd75e9dc37ad023513fd51b098dc34e894bf5fcd3fee2b634011f956a.png",
    "wls2_consumable_mohito_7_uncommon": "wiki-assets/images/6d9d63913d2afca8c084d3036279a4d37d65734a0914e8f346457145f58a779d.png",
    "wls2_consumable_oil_heal_7": "wiki-assets/images/296066d137f2415c770ce878839fa61d7a78e45ac89ebf1d53d383e3e3bd8375.png",
    "wls2_consumable_pueblo_firepot_7_uncommon": "wiki-assets/images/feef88f956ce78d0a58147313a05f2743fe44826c90ff617894ed30a9b638394.png",
    "wls2_consumable_rib_steak_7_common": "wiki-assets/images/98e0461e101d3469ff407162af6578ae018b2d6da4730172c33a6738e45897d3.png",
    "wls2_consumable_roasted_bone_marrow_t7": "wiki-assets/images/2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355.png",
    "wls2_consumable_st_patricks_day_pie_t7": "wiki-assets/images/4e724de747000ffe5f925302e0b728ab5f79119edc01a134543377586f07dfc9.png",
    "wls2_consumable_stewed_tomato_7_common": "wiki-assets/images/9e603c8ebbf957ed3c78ba09a4bdee4b1e6c08ca3a30110ba9127a35379264c6.png",
    "wls2_consumable_taco_7_uncommon": "wiki-assets/images/9633d874d20d8cc25149de0cbb067ee0f2290f1be5a119a008cf9e7cde835a17.png",
    "wls2_consumable_tomato_1": "wiki-assets/images/23244e7c11adaefbd988f8eaef99556836ef5d76f9ad56f20dc8d13cd9f6a56f.png",
    "wls2_resourse_miscellaneous_herb_7": "wiki-assets/images/043542c869983e669f46ab83b1e9cac294c68a91538ab05133c8dbe261d78c8f.png",
    "wls2_ws_day2021_candy": "wiki-assets/images/0b79f8da84ea741723842aab2721b518d329a411c7a37dc625592b1a7588c32e.png"
  },
  "imageSources": {
    "wls2_armor_neck_1": {
      "file": "westland_wiki_assets/equipment/wls2_armor_neck_1.png",
      "bytes": 26146,
      "sha256": "b41a9e6094a75d27e54058be4d42965a671bf4ea43e6f080995f8d7dff896f2a"
    },
    "wls2_armor_neck_10": {
      "file": "westland_wiki_assets/equipment/wls2_armor_neck_10.png",
      "bytes": 29827,
      "sha256": "0ec2b01a0f1ee1a31e4425b62dad8dfe06ffecd4080af252370d094c64d84a26"
    },
    "wls2_armor_neck_2": {
      "file": "westland_wiki_assets/equipment/wls2_armor_neck_2.png",
      "bytes": 26983,
      "sha256": "a8c078a399113a2b2c82f5afa98ee169056eddb9309b23ef0b943f0502c6cac3"
    },
    "wls2_armor_neck_3": {
      "file": "westland_wiki_assets/equipment/wls2_armor_neck_3.png",
      "bytes": 25417,
      "sha256": "cfd4d3a8a01070e08344204bd0c6df09259ce2627d1b5aec7c935bfda9eb79bb"
    },
    "wls2_armor_neck_4": {
      "file": "westland_wiki_assets/equipment/wls2_armor_neck_4.png",
      "bytes": 25880,
      "sha256": "2a8e150364253c66ea3bb50947d8b49f3e36aad599755c39be580349933546c2"
    },
    "wls2_armor_neck_5": {
      "file": "westland_wiki_assets/equipment/wls2_armor_neck_5.png",
      "bytes": 25512,
      "sha256": "ca6895ec56f9ea366b76eb6f13b61149c34e9278fb8ff80284e6c4e5dff26741"
    },
    "wls2_armor_neck_6": {
      "file": "westland_wiki_assets/equipment/wls2_armor_neck_6.png",
      "bytes": 21833,
      "sha256": "9b2665d4b66de824f6208ae0f20124a3c16fa23e48f5f16dce99f703b6161040"
    },
    "wls2_armor_neck_7": {
      "file": "westland_wiki_assets/equipment/wls2_armor_neck_7.png",
      "bytes": 27466,
      "sha256": "10b440013de8d440187e54ab3213571dbaea1efe3ff28306fcfa08604d58f582"
    },
    "wls2_armor_neck_8": {
      "file": "westland_wiki_assets/equipment/wls2_armor_neck_8.png",
      "bytes": 28815,
      "sha256": "089302096a0a7439283be8f00592f15eb413d3919431c004cd4e0959a9ebc66c"
    },
    "wls2_armor_neck_9": {
      "file": "westland_wiki_assets/equipment/wls2_armor_neck_9.png",
      "bytes": 32521,
      "sha256": "cd8655c8bbb87b610cf9afadd6c825144cecf03aec36f84e33da18ab20431f30"
    },
    "wls2_armor_ring_1": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_1.png",
      "bytes": 23770,
      "sha256": "edebf10839a49530a5de3ecf40eacec94a62afb3c5ce0d2200f51a42e4aa78f0"
    },
    "wls2_armor_ring_10": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_10.png",
      "bytes": 23606,
      "sha256": "cbec4b83c5b5830005041d976a45718c6cc6fbcde60b9667f2bb9cef19eca865"
    },
    "wls2_armor_ring_2": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_2.png",
      "bytes": 18190,
      "sha256": "8cb93efdf13159d108033373ee868ef8d2c558f7709624a3bbda3a092c49f4b7"
    },
    "wls2_armor_ring_3": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_3.png",
      "bytes": 21634,
      "sha256": "57612bff8052edf5ac3eecedd7cfdba2a05cc310b7bc8a410cd5b7497ad02809"
    },
    "wls2_armor_ring_4": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_4.png",
      "bytes": 22743,
      "sha256": "ff1babd3d9efa0f10bc25dfff409771c3a4a14e76ec0637df776dd49c0a1b172"
    },
    "wls2_armor_ring_5": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_5.png",
      "bytes": 24801,
      "sha256": "d2279eeaa8db6a7fb3ab41ddead4cd7efe92841dccd98c1f5e2f56f598a6c1fb"
    },
    "wls2_armor_ring_6": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_6.png",
      "bytes": 22833,
      "sha256": "f1abb6466643187311af0415217c76a7b49f06b99854776f90dba8c2d379bf04"
    },
    "wls2_armor_ring_7": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_7.png",
      "bytes": 24470,
      "sha256": "dbae946e90547193ab6170a796aadb2c811bef3efb087d016a24ddc9e28de8f9"
    },
    "wls2_armor_ring_8": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_8.png",
      "bytes": 26239,
      "sha256": "fb4b586d0e0f43a2ea764ce2987534911644485e3f49d026838fb8999a105455"
    },
    "wls2_armor_ring_9": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_9.png",
      "bytes": 23463,
      "sha256": "31649bbec5712301af022e68708d3f6d3c22fd31af0a43cd0f23f46dbfae0a70"
    },
    "wls2_armor_ring_easter_penalty_resistnace_rare": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_easter_penalty_resistnace_rare.png",
      "bytes": 23463,
      "sha256": "31649bbec5712301af022e68708d3f6d3c22fd31af0a43cd0f23f46dbfae0a70"
    },
    "wls2_armor_ring_easter_penalty_uncommon": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_easter_penalty_uncommon.png",
      "bytes": 23463,
      "sha256": "31649bbec5712301af022e68708d3f6d3c22fd31af0a43cd0f23f46dbfae0a70"
    },
    "wls2_armor_ring_easter_resistance_uncommon": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_easter_resistance_uncommon.png",
      "bytes": 26239,
      "sha256": "fb4b586d0e0f43a2ea764ce2987534911644485e3f49d026838fb8999a105455"
    },
    "wls2_armor_ring_easter_resistance_warm_rare": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_easter_resistance_warm_rare.png",
      "bytes": 26239,
      "sha256": "fb4b586d0e0f43a2ea764ce2987534911644485e3f49d026838fb8999a105455"
    },
    "wls2_armor_ring_easter_warm_penalty_rare": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_easter_warm_penalty_rare.png",
      "bytes": 23606,
      "sha256": "cbec4b83c5b5830005041d976a45718c6cc6fbcde60b9667f2bb9cef19eca865"
    },
    "wls2_armor_ring_easter_warm_uncommon": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_easter_warm_uncommon.png",
      "bytes": 23606,
      "sha256": "cbec4b83c5b5830005041d976a45718c6cc6fbcde60b9667f2bb9cef19eca865"
    },
    "wls2_armor_ring_halloween_21_penalty_resistnace_rare": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_21_penalty_resistnace_rare.png",
      "bytes": 23463,
      "sha256": "31649bbec5712301af022e68708d3f6d3c22fd31af0a43cd0f23f46dbfae0a70"
    },
    "wls2_armor_ring_halloween_21_penalty_uncommon": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_21_penalty_uncommon.png",
      "bytes": 23463,
      "sha256": "31649bbec5712301af022e68708d3f6d3c22fd31af0a43cd0f23f46dbfae0a70"
    },
    "wls2_armor_ring_halloween_21_penalty_uncommon_weak": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_21_penalty_uncommon_weak.png",
      "bytes": 23463,
      "sha256": "31649bbec5712301af022e68708d3f6d3c22fd31af0a43cd0f23f46dbfae0a70"
    },
    "wls2_armor_ring_halloween_21_resistance_uncommon": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_21_resistance_uncommon.png",
      "bytes": 26239,
      "sha256": "fb4b586d0e0f43a2ea764ce2987534911644485e3f49d026838fb8999a105455"
    },
    "wls2_armor_ring_halloween_21_resistance_uncommon_weak": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_21_resistance_uncommon_weak.png",
      "bytes": 26239,
      "sha256": "fb4b586d0e0f43a2ea764ce2987534911644485e3f49d026838fb8999a105455"
    },
    "wls2_armor_ring_halloween_21_resistance_warm_rare": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_21_resistance_warm_rare.png",
      "bytes": 26239,
      "sha256": "fb4b586d0e0f43a2ea764ce2987534911644485e3f49d026838fb8999a105455"
    },
    "wls2_armor_ring_halloween_21_warm_penalty_rare": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_21_warm_penalty_rare.png",
      "bytes": 23606,
      "sha256": "cbec4b83c5b5830005041d976a45718c6cc6fbcde60b9667f2bb9cef19eca865"
    },
    "wls2_armor_ring_halloween_21_warm_uncommon": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_21_warm_uncommon.png",
      "bytes": 23606,
      "sha256": "cbec4b83c5b5830005041d976a45718c6cc6fbcde60b9667f2bb9cef19eca865"
    },
    "wls2_armor_ring_halloween_21_warm_uncommon_weak": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_21_warm_uncommon_weak.png",
      "bytes": 23606,
      "sha256": "cbec4b83c5b5830005041d976a45718c6cc6fbcde60b9667f2bb9cef19eca865"
    },
    "wls2_armor_ring_halloween_23_cold_uncommon": {
      "file": "westland_wiki_assets/equipment/wls2_armor_ring_halloween_23_cold_uncommon.png",
      "bytes": 21540,
      "sha256": "51067688113150f8ed0d97766983484b9551b3d4c058c51b187ce63ea5ac44b8"
    },
    "wls2_battlepass3_ring_all_stats_2_epic": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass3_ring_all_stats_2_epic.png",
      "bytes": 24002,
      "sha256": "e881296e0f234e2b3852ead6e527cd6fd04acd09fa2443ffde2f88dfb70c5e40"
    },
    "wls2_battlepass3_ring_all_stats_3_epic": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass3_ring_all_stats_3_epic.png",
      "bytes": 24002,
      "sha256": "e881296e0f234e2b3852ead6e527cd6fd04acd09fa2443ffde2f88dfb70c5e40"
    },
    "wls2_battlepass3_ring_all_stats_4_epic": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass3_ring_all_stats_4_epic.png",
      "bytes": 24002,
      "sha256": "e881296e0f234e2b3852ead6e527cd6fd04acd09fa2443ffde2f88dfb70c5e40"
    },
    "wls2_battlepass3_ring_all_stats_5_epic": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass3_ring_all_stats_5_epic.png",
      "bytes": 24002,
      "sha256": "e881296e0f234e2b3852ead6e527cd6fd04acd09fa2443ffde2f88dfb70c5e40"
    },
    "wls2_battlepass3_ring_all_stats_6_epic": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass3_ring_all_stats_6_epic.png",
      "bytes": 24002,
      "sha256": "e881296e0f234e2b3852ead6e527cd6fd04acd09fa2443ffde2f88dfb70c5e40"
    },
    "wls2_battlepass3_ring_all_stats_7_epic": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass3_ring_all_stats_7_epic.png",
      "bytes": 24002,
      "sha256": "e881296e0f234e2b3852ead6e527cd6fd04acd09fa2443ffde2f88dfb70c5e40"
    },
    "wls2_battlepass6_neck_thanksgiving_2": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass6_neck_thanksgiving_2.png",
      "bytes": 26439,
      "sha256": "78ba29fb12e2c678aa3be093714084893b93ba2977c1223e40c5f4349e7f5cd9"
    },
    "wls2_battlepass6_neck_thanksgiving_3": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass6_neck_thanksgiving_3.png",
      "bytes": 26439,
      "sha256": "78ba29fb12e2c678aa3be093714084893b93ba2977c1223e40c5f4349e7f5cd9"
    },
    "wls2_battlepass6_neck_thanksgiving_4": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass6_neck_thanksgiving_4.png",
      "bytes": 26439,
      "sha256": "78ba29fb12e2c678aa3be093714084893b93ba2977c1223e40c5f4349e7f5cd9"
    },
    "wls2_battlepass6_neck_thanksgiving_5": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass6_neck_thanksgiving_5.png",
      "bytes": 26439,
      "sha256": "78ba29fb12e2c678aa3be093714084893b93ba2977c1223e40c5f4349e7f5cd9"
    },
    "wls2_battlepass6_neck_thanksgiving_6": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass6_neck_thanksgiving_6.png",
      "bytes": 26439,
      "sha256": "78ba29fb12e2c678aa3be093714084893b93ba2977c1223e40c5f4349e7f5cd9"
    },
    "wls2_battlepass6_neck_thanksgiving_7": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass6_neck_thanksgiving_7.png",
      "bytes": 26439,
      "sha256": "78ba29fb12e2c678aa3be093714084893b93ba2977c1223e40c5f4349e7f5cd9"
    },
    "wls2_battlepass6_ring_pet_2": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass6_ring_pet_2.png",
      "bytes": 34304,
      "sha256": "2326235ff84e51f800de6bd51235ae715babaa419c1d194da7377da43e125e66"
    },
    "wls2_battlepass6_ring_pet_3": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass6_ring_pet_3.png",
      "bytes": 34304,
      "sha256": "2326235ff84e51f800de6bd51235ae715babaa419c1d194da7377da43e125e66"
    },
    "wls2_battlepass6_ring_pet_4": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass6_ring_pet_4.png",
      "bytes": 34304,
      "sha256": "2326235ff84e51f800de6bd51235ae715babaa419c1d194da7377da43e125e66"
    },
    "wls2_battlepass6_ring_pet_5": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass6_ring_pet_5.png",
      "bytes": 34304,
      "sha256": "2326235ff84e51f800de6bd51235ae715babaa419c1d194da7377da43e125e66"
    },
    "wls2_battlepass6_ring_pet_6": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass6_ring_pet_6.png",
      "bytes": 34304,
      "sha256": "2326235ff84e51f800de6bd51235ae715babaa419c1d194da7377da43e125e66"
    },
    "wls2_battlepass6_ring_thanksgiving_2": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass6_ring_thanksgiving_2.png",
      "bytes": 24927,
      "sha256": "e60841fa39866f2a2636676cf67028e2ea002135b018ba60ea45e11402676368"
    },
    "wls2_battlepass6_ring_thanksgiving_3": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass6_ring_thanksgiving_3.png",
      "bytes": 24927,
      "sha256": "e60841fa39866f2a2636676cf67028e2ea002135b018ba60ea45e11402676368"
    },
    "wls2_battlepass6_ring_thanksgiving_4": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass6_ring_thanksgiving_4.png",
      "bytes": 24927,
      "sha256": "e60841fa39866f2a2636676cf67028e2ea002135b018ba60ea45e11402676368"
    },
    "wls2_battlepass6_ring_thanksgiving_5": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass6_ring_thanksgiving_5.png",
      "bytes": 24927,
      "sha256": "e60841fa39866f2a2636676cf67028e2ea002135b018ba60ea45e11402676368"
    },
    "wls2_battlepass6_ring_thanksgiving_6": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass6_ring_thanksgiving_6.png",
      "bytes": 24927,
      "sha256": "e60841fa39866f2a2636676cf67028e2ea002135b018ba60ea45e11402676368"
    },
    "wls2_battlepass6_ring_thanksgiving_7": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass6_ring_thanksgiving_7.png",
      "bytes": 24927,
      "sha256": "e60841fa39866f2a2636676cf67028e2ea002135b018ba60ea45e11402676368"
    },
    "wls2_battlepass7_ring_2": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass7_ring_2.png",
      "bytes": 28812,
      "sha256": "54e79ab0f40f64b48232f5837f4f0225c83daa0098ad3798e1338ff2e8db2afc"
    },
    "wls2_battlepass7_ring_3": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass7_ring_3.png",
      "bytes": 28812,
      "sha256": "54e79ab0f40f64b48232f5837f4f0225c83daa0098ad3798e1338ff2e8db2afc"
    },
    "wls2_battlepass7_ring_4": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass7_ring_4.png",
      "bytes": 28812,
      "sha256": "54e79ab0f40f64b48232f5837f4f0225c83daa0098ad3798e1338ff2e8db2afc"
    },
    "wls2_battlepass7_ring_5": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass7_ring_5.png",
      "bytes": 28812,
      "sha256": "54e79ab0f40f64b48232f5837f4f0225c83daa0098ad3798e1338ff2e8db2afc"
    },
    "wls2_battlepass7_ring_6": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass7_ring_6.png",
      "bytes": 28812,
      "sha256": "54e79ab0f40f64b48232f5837f4f0225c83daa0098ad3798e1338ff2e8db2afc"
    },
    "wls2_battlepass7_ring_7": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass7_ring_7.png",
      "bytes": 28812,
      "sha256": "54e79ab0f40f64b48232f5837f4f0225c83daa0098ad3798e1338ff2e8db2afc"
    },
    "wls2_battlepass8_ring_2": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass8_ring_2.png",
      "bytes": 22828,
      "sha256": "0db4ebde0be372c5bbedf733138e031930274540dc136b80edec4d4386615561"
    },
    "wls2_battlepass8_ring_3": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass8_ring_3.png",
      "bytes": 22828,
      "sha256": "0db4ebde0be372c5bbedf733138e031930274540dc136b80edec4d4386615561"
    },
    "wls2_battlepass8_ring_4": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass8_ring_4.png",
      "bytes": 22828,
      "sha256": "0db4ebde0be372c5bbedf733138e031930274540dc136b80edec4d4386615561"
    },
    "wls2_battlepass8_ring_5": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass8_ring_5.png",
      "bytes": 22828,
      "sha256": "0db4ebde0be372c5bbedf733138e031930274540dc136b80edec4d4386615561"
    },
    "wls2_battlepass8_ring_6": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass8_ring_6.png",
      "bytes": 22828,
      "sha256": "0db4ebde0be372c5bbedf733138e031930274540dc136b80edec4d4386615561"
    },
    "wls2_battlepass8_ring_7": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass8_ring_7.png",
      "bytes": 22828,
      "sha256": "0db4ebde0be372c5bbedf733138e031930274540dc136b80edec4d4386615561"
    },
    "wls2_battlepass_2025_neck_new_year_2": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_new_year_2.png",
      "bytes": 27494,
      "sha256": "2e4a64933a29c5c476540d6d282b336ffaff2118d98c76fea5992f90dc539280"
    },
    "wls2_battlepass_2025_neck_new_year_3": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_new_year_3.png",
      "bytes": 27494,
      "sha256": "2e4a64933a29c5c476540d6d282b336ffaff2118d98c76fea5992f90dc539280"
    },
    "wls2_battlepass_2025_neck_new_year_4": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_new_year_4.png",
      "bytes": 27494,
      "sha256": "2e4a64933a29c5c476540d6d282b336ffaff2118d98c76fea5992f90dc539280"
    },
    "wls2_battlepass_2025_neck_new_year_5": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_new_year_5.png",
      "bytes": 27494,
      "sha256": "2e4a64933a29c5c476540d6d282b336ffaff2118d98c76fea5992f90dc539280"
    },
    "wls2_battlepass_2025_neck_new_year_6": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_new_year_6.png",
      "bytes": 27494,
      "sha256": "2e4a64933a29c5c476540d6d282b336ffaff2118d98c76fea5992f90dc539280"
    },
    "wls2_battlepass_2025_neck_new_year_7": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_new_year_7.png",
      "bytes": 27494,
      "sha256": "2e4a64933a29c5c476540d6d282b336ffaff2118d98c76fea5992f90dc539280"
    },
    "wls2_battlepass_2025_neck_saint_patrick_3": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_saint_patrick_3.png",
      "bytes": 24811,
      "sha256": "0b7fcabc4d3dd3a8613945a626130e41499249f4c3c2d0150de0b338735baf96"
    },
    "wls2_battlepass_2025_neck_saint_patrick_4": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_saint_patrick_4.png",
      "bytes": 24811,
      "sha256": "0b7fcabc4d3dd3a8613945a626130e41499249f4c3c2d0150de0b338735baf96"
    },
    "wls2_battlepass_2025_neck_saint_patrick_5": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_saint_patrick_5.png",
      "bytes": 24811,
      "sha256": "0b7fcabc4d3dd3a8613945a626130e41499249f4c3c2d0150de0b338735baf96"
    },
    "wls2_battlepass_2025_neck_saint_patrick_6": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass_2025_neck_saint_patrick_6.png",
      "bytes": 24811,
      "sha256": "0b7fcabc4d3dd3a8613945a626130e41499249f4c3c2d0150de0b338735baf96"
    },
    "wls2_battlepass_ring_fire_bloom_2": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass_ring_fire_bloom_2.png",
      "bytes": 31374,
      "sha256": "23eaa65c44aba603f0bfaa4f3ec757731e389d06e9b0865c67ade539ff4433d9"
    },
    "wls2_battlepass_ring_fire_bloom_3": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass_ring_fire_bloom_3.png",
      "bytes": 31374,
      "sha256": "23eaa65c44aba603f0bfaa4f3ec757731e389d06e9b0865c67ade539ff4433d9"
    },
    "wls2_battlepass_ring_fire_bloom_4": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass_ring_fire_bloom_4.png",
      "bytes": 31374,
      "sha256": "23eaa65c44aba603f0bfaa4f3ec757731e389d06e9b0865c67ade539ff4433d9"
    },
    "wls2_battlepass_ring_fire_bloom_5": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass_ring_fire_bloom_5.png",
      "bytes": 31374,
      "sha256": "23eaa65c44aba603f0bfaa4f3ec757731e389d06e9b0865c67ade539ff4433d9"
    },
    "wls2_battlepass_ring_fire_bloom_6": {
      "file": "westland_wiki_assets/equipment/wls2_battlepass_ring_fire_bloom_6.png",
      "bytes": 31374,
      "sha256": "23eaa65c44aba603f0bfaa4f3ec757731e389d06e9b0865c67ade539ff4433d9"
    },
    "wls2_diary_armor_ring_rare": {
      "file": "westland_wiki_assets/equipment/wls2_diary_armor_ring_rare.png",
      "bytes": 21634,
      "sha256": "57612bff8052edf5ac3eecedd7cfdba2a05cc310b7bc8a410cd5b7497ad02809"
    },
    "wls2_necklace_lunar_2": {
      "file": "westland_wiki_assets/equipment/wls2_necklace_lunar_2.png",
      "bytes": 29255,
      "sha256": "7a9421fe154e36916f2453abf4ae46e7d37578d9a7a464e1dfb375dec1eb15b4"
    },
    "wls2_necklace_lunar_3": {
      "file": "westland_wiki_assets/equipment/wls2_necklace_lunar_3.png",
      "bytes": 29255,
      "sha256": "7a9421fe154e36916f2453abf4ae46e7d37578d9a7a464e1dfb375dec1eb15b4"
    },
    "wls2_necklace_lunar_4": {
      "file": "westland_wiki_assets/equipment/wls2_necklace_lunar_4.png",
      "bytes": 29255,
      "sha256": "7a9421fe154e36916f2453abf4ae46e7d37578d9a7a464e1dfb375dec1eb15b4"
    },
    "wls2_necklace_lunar_5": {
      "file": "westland_wiki_assets/equipment/wls2_necklace_lunar_5.png",
      "bytes": 29255,
      "sha256": "7a9421fe154e36916f2453abf4ae46e7d37578d9a7a464e1dfb375dec1eb15b4"
    },
    "wls2_necklace_lunar_6": {
      "file": "westland_wiki_assets/equipment/wls2_necklace_lunar_6.png",
      "bytes": 29255,
      "sha256": "7a9421fe154e36916f2453abf4ae46e7d37578d9a7a464e1dfb375dec1eb15b4"
    },
    "wls2_necklace_lunar_7": {
      "file": "westland_wiki_assets/equipment/wls2_necklace_lunar_7.png",
      "bytes": 29255,
      "sha256": "7a9421fe154e36916f2453abf4ae46e7d37578d9a7a464e1dfb375dec1eb15b4"
    },
    "wls2_necklace_xmas_2025_2": {
      "file": "westland_wiki_assets/equipment/wls2_necklace_xmas_2025_2.png",
      "bytes": 24168,
      "sha256": "b9713fdb138df1d54745162af6b3feed5c317fdb53df6ec530dd1f2edcc422e6"
    },
    "wls2_necklace_xmas_2025_3": {
      "file": "westland_wiki_assets/equipment/wls2_necklace_xmas_2025_3.png",
      "bytes": 24168,
      "sha256": "b9713fdb138df1d54745162af6b3feed5c317fdb53df6ec530dd1f2edcc422e6"
    },
    "wls2_necklace_xmas_2025_4": {
      "file": "westland_wiki_assets/equipment/wls2_necklace_xmas_2025_4.png",
      "bytes": 24168,
      "sha256": "b9713fdb138df1d54745162af6b3feed5c317fdb53df6ec530dd1f2edcc422e6"
    },
    "wls2_necklace_xmas_2025_5": {
      "file": "westland_wiki_assets/equipment/wls2_necklace_xmas_2025_5.png",
      "bytes": 24168,
      "sha256": "b9713fdb138df1d54745162af6b3feed5c317fdb53df6ec530dd1f2edcc422e6"
    },
    "wls2_necklace_xmas_2025_6": {
      "file": "westland_wiki_assets/equipment/wls2_necklace_xmas_2025_6.png",
      "bytes": 24168,
      "sha256": "b9713fdb138df1d54745162af6b3feed5c317fdb53df6ec530dd1f2edcc422e6"
    },
    "wls2_necklace_xmas_2025_7": {
      "file": "westland_wiki_assets/equipment/wls2_necklace_xmas_2025_7.png",
      "bytes": 24168,
      "sha256": "b9713fdb138df1d54745162af6b3feed5c317fdb53df6ec530dd1f2edcc422e6"
    },
    "wls2_ring_steam": {
      "file": "westland_wiki_assets/equipment/wls2_ring_steam.png",
      "bytes": 29184,
      "sha256": "ecf942c7032dbbbb60be14ec3b65ad444e037c78acb9cfbd65acebdcb05bd857"
    },
    "wls_reward_ring_armor": {
      "file": "westland_wiki_assets/equipment/wls_reward_ring_armor.png",
      "bytes": 18190,
      "sha256": "8cb93efdf13159d108033373ee868ef8d2c558f7709624a3bbda3a092c49f4b7"
    },
    "wls_reward_ring_attspeed": {
      "file": "westland_wiki_assets/equipment/wls_reward_ring_attspeed.png",
      "bytes": 23770,
      "sha256": "edebf10839a49530a5de3ecf40eacec94a62afb3c5ce0d2200f51a42e4aa78f0"
    },
    "wls_reward_ring_spirit": {
      "file": "westland_wiki_assets/equipment/wls_reward_ring_spirit.png",
      "bytes": 21634,
      "sha256": "57612bff8052edf5ac3eecedd7cfdba2a05cc310b7bc8a410cd5b7497ad02809"
    },
    "wls_the_one_ring": {
      "file": "westland_wiki_assets/equipment/wls_the_one_ring.png",
      "bytes": 25732,
      "sha256": "b558cda6f9fc291813642ecff0e13fe846ef1dd4fbd1b99046d3267945238669"
    },
    "wls2_coffee": {
      "file": "westland_wiki_assets/inventory/6d89dd0129c9101387581ba7e672811e612d835f27bb8b64ab9e6e30f910602e.png",
      "bytes": 31805,
      "sha256": "6d89dd0129c9101387581ba7e672811e612d835f27bb8b64ab9e6e30f910602e"
    },
    "wls2_consumable_corn_1": {
      "file": "westland_wiki_assets/inventory/4aa3532a01365341dd26cd1ac45d4e0a1580ecc808a122e17a0a4ae4d1abd56b.png",
      "bytes": 35518,
      "sha256": "4aa3532a01365341dd26cd1ac45d4e0a1580ecc808a122e17a0a4ae4d1abd56b"
    },
    "wls2_consumable_corn_porridge_1_common": {
      "file": "westland_wiki_assets/inventory/332e8ce99b07cd9d06adf4d07d6ef86dab2d43154a82ad3ae17b6d26a1dc2022.png",
      "bytes": 29141,
      "sha256": "332e8ce99b07cd9d06adf4d07d6ef86dab2d43154a82ad3ae17b6d26a1dc2022"
    },
    "wls2_consumable_easter_bun": {
      "file": "westland_wiki_assets/inventory/0be7a53b1dbe1f73d033645af675b0d2252e0e43689aa1ac94210918c992923a.png",
      "bytes": 37065,
      "sha256": "0be7a53b1dbe1f73d033645af675b0d2252e0e43689aa1ac94210918c992923a"
    },
    "wls2_consumable_flask_heal_1": {
      "file": "westland_wiki_assets/inventory/07b68373111b6c89f0a4153475905a12252ee12838fb3e77c59a3b71f6f2dc12.png",
      "bytes": 22953,
      "sha256": "07b68373111b6c89f0a4153475905a12252ee12838fb3e77c59a3b71f6f2dc12"
    },
    "wls2_consumable_flask_water_1": {
      "file": "westland_wiki_assets/inventory/63d20ffba8fce7acf8bff9f1b17aa1f7951f59e1068cd57e40f7d5477ed4f5e9.png",
      "bytes": 30553,
      "sha256": "63d20ffba8fce7acf8bff9f1b17aa1f7951f59e1068cd57e40f7d5477ed4f5e9"
    },
    "wls2_consumable_food_dryer_1": {
      "file": "westland_wiki_assets/inventory/7020e08e38c5c579bff8991c9744145094792a5375bd69855aefb00f12610909.png",
      "bytes": 27852,
      "sha256": "7020e08e38c5c579bff8991c9744145094792a5375bd69855aefb00f12610909"
    },
    "wls2_consumable_food_kitchen_1": {
      "file": "westland_wiki_assets/inventory/ba6990377679d3c73deda17d433dc71b397d37679ea16e831d1569a7adca6aac.png",
      "bytes": 28339,
      "sha256": "ba6990377679d3c73deda17d433dc71b397d37679ea16e831d1569a7adca6aac"
    },
    "wls2_consumable_fortune_cookie": {
      "file": "westland_wiki_assets/inventory/cd137f983752b599e1b9098df9c6890128eb39c118852e22c9ad543a0140835a.png",
      "bytes": 25424,
      "sha256": "cd137f983752b599e1b9098df9c6890128eb39c118852e22c9ad543a0140835a"
    },
    "wls2_consumable_grilled_meat_1_common": {
      "file": "westland_wiki_assets/inventory/2fafa25aa90e0aa9352dbab691cd508c380bae04f640a3f35a487b9d084e7471.png",
      "bytes": 30420,
      "sha256": "2fafa25aa90e0aa9352dbab691cd508c380bae04f640a3f35a487b9d084e7471"
    },
    "wls2_consumable_heal_bandage_1": {
      "file": "westland_wiki_assets/inventory/05dc8afc99c50c548a2e124e41d6290fa1bbb99954a822a6d6ccc74aeb49d9bd.png",
      "bytes": 33445,
      "sha256": "05dc8afc99c50c548a2e124e41d6290fa1bbb99954a822a6d6ccc74aeb49d9bd"
    },
    "wls2_consumable_oil_heal_1": {
      "file": "westland_wiki_assets/inventory/95bfb662c5807058c11d6395726ed54c86efdd77ad8eaba0558cb1a807abad91.png",
      "bytes": 23145,
      "sha256": "95bfb662c5807058c11d6395726ed54c86efdd77ad8eaba0558cb1a807abad91"
    },
    "wls2_consumable_st_patricks_day_beer": {
      "file": "westland_wiki_assets/inventory/5b9c82bd74cb69e98bc9992a6399962ae5d13696260fb30138baf8b3c7745426.png",
      "bytes": 24604,
      "sha256": "5b9c82bd74cb69e98bc9992a6399962ae5d13696260fb30138baf8b3c7745426"
    },
    "wls2_consumable_valentines_day_cakes": {
      "file": "westland_wiki_assets/inventory/45a9949c7fca12f36113d3d2c91c62a1b03d9a0960906d119382b8753af3f7ae.png",
      "bytes": 32075,
      "sha256": "45a9949c7fca12f36113d3d2c91c62a1b03d9a0960906d119382b8753af3f7ae"
    },
    "wls2_consumable_wls_day_2026_pie": {
      "file": "westland_wiki_assets/inventory/5d75323a29eb79d1a730fd45bc7a6af6ae951b41900d1168a248c9127cbb6ce9.png",
      "bytes": 29596,
      "sha256": "5d75323a29eb79d1a730fd45bc7a6af6ae951b41900d1168a248c9127cbb6ce9"
    },
    "wls2_easter_candy": {
      "file": "westland_wiki_assets/inventory/23284713edfdb7602fb449909a185a77479545589646ff225b39019c48f0cc7b.png",
      "bytes": 30706,
      "sha256": "23284713edfdb7602fb449909a185a77479545589646ff225b39019c48f0cc7b"
    },
    "wls2_gingerbread_food_xmas_2025": {
      "file": "westland_wiki_assets/inventory/3220e948a952e673fad2b3993359f16e9d2ff2dc39db5ab94262afa18b6483a3.png",
      "bytes": 21732,
      "sha256": "3220e948a952e673fad2b3993359f16e9d2ff2dc39db5ab94262afa18b6483a3"
    },
    "wls2_halloween_food_pumpkin": {
      "file": "westland_wiki_assets/inventory/f67444893b375751e453c953e0daab75a354e41f65b70ec4bb11b9b22e3c60b7.png",
      "bytes": 29094,
      "sha256": "f67444893b375751e453c953e0daab75a354e41f65b70ec4bb11b9b22e3c60b7"
    },
    "wls2_halloween_food_pumpkin_porridge": {
      "file": "westland_wiki_assets/inventory/8d61a01fbb5af22d10b7e23bd5a53261cd9a4eb9712aa117f9153da8f4431dfe.png",
      "bytes": 22797,
      "sha256": "8d61a01fbb5af22d10b7e23bd5a53261cd9a4eb9712aa117f9153da8f4431dfe"
    },
    "wls2_resourse_miscellaneous_herb_1": {
      "file": "westland_wiki_assets/inventory/6622167fe2be0f7d861a2daeccb7003d9f6aed70a2c0ccb0d114bc16a24e60e6.png",
      "bytes": 26784,
      "sha256": "6622167fe2be0f7d861a2daeccb7003d9f6aed70a2c0ccb0d114bc16a24e60e6"
    },
    "wls2_steam_food": {
      "file": "westland_wiki_assets/inventory/737292769079370cd9934554c1ac500f3cd117dce5dae4c68619f85d461bce9b.png",
      "bytes": 26501,
      "sha256": "737292769079370cd9934554c1ac500f3cd117dce5dae4c68619f85d461bce9b"
    },
    "wls2_xmas_21_consumable_candy": {
      "file": "westland_wiki_assets/inventory/23284713edfdb7602fb449909a185a77479545589646ff225b39019c48f0cc7b.png",
      "bytes": 30706,
      "sha256": "23284713edfdb7602fb449909a185a77479545589646ff225b39019c48f0cc7b"
    },
    "wls_halloween_candy": {
      "file": "westland_wiki_assets/inventory/6378566e8bdbbee667811cd277621e83344a97532bde7ce6fbc76a8dc8b92485.png",
      "bytes": 32956,
      "sha256": "6378566e8bdbbee667811cd277621e83344a97532bde7ce6fbc76a8dc8b92485"
    },
    "wls_whiskey": {
      "file": "westland_wiki_assets/inventory/98e3455f1987bb4582aafff4c37635cd95fbb4353d1c520c855c0e103231a914.png",
      "bytes": 22032,
      "sha256": "98e3455f1987bb4582aafff4c37635cd95fbb4353d1c520c855c0e103231a914"
    },
    "wls2_consumable_baked_poultry_2_uncommon": {
      "file": "westland_wiki_assets/inventory/591eb32be90656eee45f3e9484a0d29fdd6437274f56dafd0796288c74ec721b.png",
      "bytes": 34825,
      "sha256": "591eb32be90656eee45f3e9484a0d29fdd6437274f56dafd0796288c74ec721b"
    },
    "wls2_consumable_cactus_drink_2_common": {
      "file": "westland_wiki_assets/inventory/681b97be75acf6cb6adc7dbcf84b9045d2cb4fee484bd750f1463d6beb488341.png",
      "bytes": 27165,
      "sha256": "681b97be75acf6cb6adc7dbcf84b9045d2cb4fee484bd750f1463d6beb488341"
    },
    "wls2_consumable_cowboy_bisquits_2_common": {
      "file": "westland_wiki_assets/inventory/afb3fbe579d88ebe4a6e7ef10186861c701446ed1d0517ad703da86a154f4d4e.png",
      "bytes": 26824,
      "sha256": "afb3fbe579d88ebe4a6e7ef10186861c701446ed1d0517ad703da86a154f4d4e"
    },
    "wls2_consumable_flask_heal_2": {
      "file": "westland_wiki_assets/inventory/64a16c84d191840230737ab1099747ba672d853a0877e12014fa93b2f3d867bb.png",
      "bytes": 21472,
      "sha256": "64a16c84d191840230737ab1099747ba672d853a0877e12014fa93b2f3d867bb"
    },
    "wls2_consumable_food_dryer_2": {
      "file": "westland_wiki_assets/inventory/837f148e0272971b343cbcd69b22539f528811205587baf0800c505e20cee7e8.png",
      "bytes": 27782,
      "sha256": "837f148e0272971b343cbcd69b22539f528811205587baf0800c505e20cee7e8"
    },
    "wls2_consumable_heal_bandage_2": {
      "file": "westland_wiki_assets/inventory/d69a7ecb4b3b75f00ad4effa405e3b4ad470c13f1c247a8ae84ab15b64a0cf4f.png",
      "bytes": 28806,
      "sha256": "d69a7ecb4b3b75f00ad4effa405e3b4ad470c13f1c247a8ae84ab15b64a0cf4f"
    },
    "wls2_consumable_oil_heal_2": {
      "file": "westland_wiki_assets/inventory/3d2be31463de1af5a9911a74991cfc93d9f1c085f8cd5bba37d76e27aabcb981.png",
      "bytes": 21481,
      "sha256": "3d2be31463de1af5a9911a74991cfc93d9f1c085f8cd5bba37d76e27aabcb981"
    },
    "wls2_consumable_schnitzel_2_common": {
      "file": "westland_wiki_assets/inventory/0b9400d501a767696e3634b3e281764c5780da8dbba7a11debce9b6c9ba0cf35.png",
      "bytes": 23827,
      "sha256": "0b9400d501a767696e3634b3e281764c5780da8dbba7a11debce9b6c9ba0cf35"
    },
    "wls2_resourse_miscellaneous_herb_2": {
      "file": "westland_wiki_assets/inventory/00a58fb547a67459d87ca74b1f82e74a45b49406983552320a4dc85ef824c19f.png",
      "bytes": 25268,
      "sha256": "00a58fb547a67459d87ca74b1f82e74a45b49406983552320a4dc85ef824c19f"
    },
    "wls_cactus_berry": {
      "file": "westland_wiki_assets/inventory/307adc0f5e5932ae54df54bef7b01b2ae75d5243518fffe407d0b6de90aa783c.png",
      "bytes": 29443,
      "sha256": "307adc0f5e5932ae54df54bef7b01b2ae75d5243518fffe407d0b6de90aa783c"
    },
    "wls2_consumable_balm_heal_3": {
      "file": "westland_wiki_assets/inventory/250a74c6444dcd92f2cba3dfdfa1f964e5c60041c5c632bfa4e9c6129f0c452e.png",
      "bytes": 21570,
      "sha256": "250a74c6444dcd92f2cba3dfdfa1f964e5c60041c5c632bfa4e9c6129f0c452e"
    },
    "wls2_consumable_bean_bread_3_common": {
      "file": "westland_wiki_assets/inventory/d7b6129973bb17639b6bf796a267d49fe682e5ff7e3cbddc46125078102eedf9.png",
      "bytes": 24964,
      "sha256": "d7b6129973bb17639b6bf796a267d49fe682e5ff7e3cbddc46125078102eedf9"
    },
    "wls2_consumable_beans_1": {
      "file": "westland_wiki_assets/inventory/29277157b8759ae48738be2de1cc3fcc8c3d12d4cb1c07093e2a785a16231623.png",
      "bytes": 27479,
      "sha256": "29277157b8759ae48738be2de1cc3fcc8c3d12d4cb1c07093e2a785a16231623"
    },
    "wls2_consumable_blueberry_meat_pie_3_rare": {
      "file": "westland_wiki_assets/inventory/49038c149d85a89a8f621d0df311f79fc91e911d85d6f3b9b351e62d9cb60253.png",
      "bytes": 27438,
      "sha256": "49038c149d85a89a8f621d0df311f79fc91e911d85d6f3b9b351e62d9cb60253"
    },
    "wls2_consumable_compote_3_common": {
      "file": "westland_wiki_assets/inventory/98067260f6e45453aeabdcad6818784040f7bffcf56d066713caea9a383025ef.png",
      "bytes": 24889,
      "sha256": "98067260f6e45453aeabdcad6818784040f7bffcf56d066713caea9a383025ef"
    },
    "wls2_consumable_flask_heal_3": {
      "file": "westland_wiki_assets/inventory/c9191d7947832db4b33603586fed43158a01263aae9d597cf3cac56f4228c225.png",
      "bytes": 22905,
      "sha256": "c9191d7947832db4b33603586fed43158a01263aae9d597cf3cac56f4228c225"
    },
    "wls2_consumable_food_bonfire_3": {
      "file": "westland_wiki_assets/inventory/0174f7adbab0a1d47bcf268aeae7a74510271b9d694d28fafa37b9179c59ed0a.png",
      "bytes": 33558,
      "sha256": "0174f7adbab0a1d47bcf268aeae7a74510271b9d694d28fafa37b9179c59ed0a"
    },
    "wls2_consumable_heal_bandage_3": {
      "file": "westland_wiki_assets/inventory/df73ea9aa62cbd285c5089589729d36ff716cd9b290c4f8e39a8ba493b1784d3.png",
      "bytes": 25994,
      "sha256": "df73ea9aa62cbd285c5089589729d36ff716cd9b290c4f8e39a8ba493b1784d3"
    },
    "wls2_consumable_hunter_stew_3_uncommon": {
      "file": "westland_wiki_assets/inventory/3126337014ada2e815c03770bb319c86636bc679e069fcb7b52a25c0da1c265d.png",
      "bytes": 26298,
      "sha256": "3126337014ada2e815c03770bb319c86636bc679e069fcb7b52a25c0da1c265d"
    },
    "wls2_consumable_oil_heal_3": {
      "file": "westland_wiki_assets/inventory/e5e00b0b411110f20c438502a154714759d942584460629ffe50d65399b4c6b0.png",
      "bytes": 21075,
      "sha256": "e5e00b0b411110f20c438502a154714759d942584460629ffe50d65399b4c6b0"
    },
    "wls2_consumable_pemmican_3_uncommon": {
      "file": "westland_wiki_assets/inventory/530bbfba1b3c720138977810f8c0929e0d1ac30a02e2df45a4bb842931203b55.png",
      "bytes": 32313,
      "sha256": "530bbfba1b3c720138977810f8c0929e0d1ac30a02e2df45a4bb842931203b55"
    },
    "wls2_consumable_ribs_blueberry_3_common": {
      "file": "westland_wiki_assets/inventory/1160bcaf51c60582d76439f754377a03d3770437c07321b3581e6f2468725431.png",
      "bytes": 36070,
      "sha256": "1160bcaf51c60582d76439f754377a03d3770437c07321b3581e6f2468725431"
    },
    "wls2_consumable_roasted_bone_marrow_t3": {
      "file": "westland_wiki_assets/inventory/2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355.png",
      "bytes": 25571,
      "sha256": "2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355"
    },
    "wls2_consumable_st_patricks_day_pie_t3": {
      "file": "westland_wiki_assets/inventory/4e724de747000ffe5f925302e0b728ab5f79119edc01a134543377586f07dfc9.png",
      "bytes": 33309,
      "sha256": "4e724de747000ffe5f925302e0b728ab5f79119edc01a134543377586f07dfc9"
    },
    "wls2_resourse_miscellaneous_herb_3": {
      "file": "westland_wiki_assets/inventory/0aba29cf573ba6b7a977c8260642e55d9469bb23e06363ef39477b5c39419740.png",
      "bytes": 30001,
      "sha256": "0aba29cf573ba6b7a977c8260642e55d9469bb23e06363ef39477b5c39419740"
    },
    "wls_berry": {
      "file": "westland_wiki_assets/inventory/7e02446c908829d856ae985b2ac2c643882c1c83c0c245bc86d1f9e50617ba99.png",
      "bytes": 28692,
      "sha256": "7e02446c908829d856ae985b2ac2c643882c1c83c0c245bc86d1f9e50617ba99"
    },
    "wls2_consumable_bacon_bread_pudding_4_uncommon": {
      "file": "westland_wiki_assets/inventory/6e396911fe856c617905140a72ba36112e206eccc9ae545c99439a07b35b85e7.png",
      "bytes": 30577,
      "sha256": "6e396911fe856c617905140a72ba36112e206eccc9ae545c99439a07b35b85e7"
    },
    "wls2_consumable_balm_heal_4": {
      "file": "westland_wiki_assets/inventory/3d6cbbd155932d41504e0b069ef6325ef0abc3d0391ec9dcf15d0e4532b37b21.png",
      "bytes": 23511,
      "sha256": "3d6cbbd155932d41504e0b069ef6325ef0abc3d0391ec9dcf15d0e4532b37b21"
    },
    "wls2_consumable_cabbage": {
      "file": "westland_wiki_assets/inventory/e4b7286577be786915cd868209d1933247f68107e7ff19cf1b73144a3290ef06.png",
      "bytes": 36988,
      "sha256": "e4b7286577be786915cd868209d1933247f68107e7ff19cf1b73144a3290ef06"
    },
    "wls2_consumable_fillet_steak_4_common": {
      "file": "westland_wiki_assets/inventory/bb3262e81c086ac7839970ccb5751f3d2370f0974d0ed93941dd1d8eba8bfc27.png",
      "bytes": 26519,
      "sha256": "bb3262e81c086ac7839970ccb5751f3d2370f0974d0ed93941dd1d8eba8bfc27"
    },
    "wls2_consumable_flask_heal_4": {
      "file": "westland_wiki_assets/inventory/ba632c139057762eaedacdccbc05238a2f2868aae0aa84cf4fa64244bb359d12.png",
      "bytes": 23316,
      "sha256": "ba632c139057762eaedacdccbc05238a2f2868aae0aa84cf4fa64244bb359d12"
    },
    "wls2_consumable_fried_chicken_4_common": {
      "file": "westland_wiki_assets/inventory/04617852c7943e6e54ed7d80b79e87a863a5155d760f8ee82f31de0545fb52f0.png",
      "bytes": 26453,
      "sha256": "04617852c7943e6e54ed7d80b79e87a863a5155d760f8ee82f31de0545fb52f0"
    },
    "wls2_consumable_fried_trout_4_rare": {
      "file": "westland_wiki_assets/inventory/da16c2f9054690dc2cf8a54fa7f02042757cacb940cca565982ff6e99a36dad1.png",
      "bytes": 33393,
      "sha256": "da16c2f9054690dc2cf8a54fa7f02042757cacb940cca565982ff6e99a36dad1"
    },
    "wls2_consumable_heal_bandage_4": {
      "file": "westland_wiki_assets/inventory/717808ff84076a80740d1c0c4a2fca02f49a3687d2f2cb778be35475983be572.png",
      "bytes": 24676,
      "sha256": "717808ff84076a80740d1c0c4a2fca02f49a3687d2f2cb778be35475983be572"
    },
    "wls2_consumable_hoppin_john_4_uncommon": {
      "file": "westland_wiki_assets/inventory/a653d160defb58bc013a62dad5869effa9f1cf60c56db5dd31bf8848f22bc844.png",
      "bytes": 23612,
      "sha256": "a653d160defb58bc013a62dad5869effa9f1cf60c56db5dd31bf8848f22bc844"
    },
    "wls2_consumable_iced_tea_4_uncommon": {
      "file": "westland_wiki_assets/inventory/713767460141741e8dba05de53b7a09de00be75c86aab23212f1e78d9f703fee.png",
      "bytes": 24426,
      "sha256": "713767460141741e8dba05de53b7a09de00be75c86aab23212f1e78d9f703fee"
    },
    "wls2_consumable_oil_heal_4": {
      "file": "westland_wiki_assets/inventory/ac9f94dbac26d6676222263f8a89befbe0ad973eca34efed9321e7b2fff3cf75.png",
      "bytes": 20364,
      "sha256": "ac9f94dbac26d6676222263f8a89befbe0ad973eca34efed9321e7b2fff3cf75"
    },
    "wls2_consumable_roasted_bone_marrow_t4": {
      "file": "westland_wiki_assets/inventory/2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355.png",
      "bytes": 25571,
      "sha256": "2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355"
    },
    "wls2_consumable_smithfield_ham_4_rare": {
      "file": "westland_wiki_assets/inventory/4ffb3e7ab10cbfc56999e24ec0226ad6a6f138e44c8f3494801b5133a8bdeb48.png",
      "bytes": 25391,
      "sha256": "4ffb3e7ab10cbfc56999e24ec0226ad6a6f138e44c8f3494801b5133a8bdeb48"
    },
    "wls2_consumable_southern_tea_punch_4_rare": {
      "file": "westland_wiki_assets/inventory/d683ee88322ef59f97b90a5f389c4601093587748ff808414dd522a26dc60bfb.png",
      "bytes": 28604,
      "sha256": "d683ee88322ef59f97b90a5f389c4601093587748ff808414dd522a26dc60bfb"
    },
    "wls2_consumable_tea_4_common": {
      "file": "westland_wiki_assets/inventory/9e83fef8b0794f794509821c5135244014dccc6502e9bf4b9e78ee02a2532a05.png",
      "bytes": 19458,
      "sha256": "9e83fef8b0794f794509821c5135244014dccc6502e9bf4b9e78ee02a2532a05"
    },
    "wls2_resourse_miscellaneous_herb_4": {
      "file": "westland_wiki_assets/inventory/1035b1d41276dd2cfaeb831a27c7a85584002d883eee9271a37fa32065e28452.png",
      "bytes": 28078,
      "sha256": "1035b1d41276dd2cfaeb831a27c7a85584002d883eee9271a37fa32065e28452"
    },
    "wls2_consumable_balm_heal_5": {
      "file": "westland_wiki_assets/inventory/6fc7c1a9bc7f59d4f014cae52c1a0a12cc92ceabe277504f83e99afa1f678275.png",
      "bytes": 26609,
      "sha256": "6fc7c1a9bc7f59d4f014cae52c1a0a12cc92ceabe277504f83e99afa1f678275"
    },
    "wls2_consumable_boudin_corndog_5_rare": {
      "file": "westland_wiki_assets/inventory/db71774b0df6fbdd46ae4e44b9a71b94cdfb4d81938e5b3d7b54aa32c9cfab3a.png",
      "bytes": 23255,
      "sha256": "db71774b0df6fbdd46ae4e44b9a71b94cdfb4d81938e5b3d7b54aa32c9cfab3a"
    },
    "wls2_consumable_cajun_pumpkin_porridge_5_uncommon": {
      "file": "westland_wiki_assets/inventory/31e4d521e0ac325b79b1aab885a8215779c4625845daa1dd90f39e6d731c6ce3.png",
      "bytes": 24424,
      "sha256": "31e4d521e0ac325b79b1aab885a8215779c4625845daa1dd90f39e6d731c6ce3"
    },
    "wls2_consumable_coffee_5_common": {
      "file": "westland_wiki_assets/inventory/88154ada2388717e81687bd8a36f1c6fdbc31676945d48bb43e8e496ec0ac067.png",
      "bytes": 22951,
      "sha256": "88154ada2388717e81687bd8a36f1c6fdbc31676945d48bb43e8e496ec0ac067"
    },
    "wls2_consumable_courtbouillon_5_rare": {
      "file": "westland_wiki_assets/inventory/66cf1a918c83f72d9527f850105d7506be350d60af96ca2d4e50e68b0d22df26.png",
      "bytes": 24108,
      "sha256": "66cf1a918c83f72d9527f850105d7506be350d60af96ca2d4e50e68b0d22df26"
    },
    "wls2_consumable_flask_heal_5": {
      "file": "westland_wiki_assets/inventory/1ef6f51a8337a52a95b25b4a586d1950e618fa26b4130f8a97a4f41e566c3b23.png",
      "bytes": 22443,
      "sha256": "1ef6f51a8337a52a95b25b4a586d1950e618fa26b4130f8a97a4f41e566c3b23"
    },
    "wls2_consumable_gumbo_5_rare": {
      "file": "westland_wiki_assets/inventory/3944362d22dc18062c62bb22aeee995a6787ccbf15266bfd8f6c4e25aef3867d.png",
      "bytes": 22599,
      "sha256": "3944362d22dc18062c62bb22aeee995a6787ccbf15266bfd8f6c4e25aef3867d"
    },
    "wls2_consumable_irish_coffee_5_rare": {
      "file": "westland_wiki_assets/inventory/9b801a636755d77570e5f08036eef4f9e44ff4dbc4f7cae5917fa67bb27ab8d1.png",
      "bytes": 27980,
      "sha256": "9b801a636755d77570e5f08036eef4f9e44ff4dbc4f7cae5917fa67bb27ab8d1"
    },
    "wls2_consumable_medallion_steak_5_common": {
      "file": "westland_wiki_assets/inventory/5c5332589d65b6c98d4c18eb49f07d3bc5efad47a6a8456aa2a1a1cc2083b90c.png",
      "bytes": 27677,
      "sha256": "5c5332589d65b6c98d4c18eb49f07d3bc5efad47a6a8456aa2a1a1cc2083b90c"
    },
    "wls2_consumable_oil_heal_5": {
      "file": "westland_wiki_assets/inventory/dc6bf375fe4c71405488bce0d555b9bb3cea8311a74d304bf26aeabb69cf041c.png",
      "bytes": 19428,
      "sha256": "dc6bf375fe4c71405488bce0d555b9bb3cea8311a74d304bf26aeabb69cf041c"
    },
    "wls2_consumable_potlikker_stew_5_uncommon": {
      "file": "westland_wiki_assets/inventory/c7a35021a7c288f94f6226440cb19ed465503607ae726ba33c8288a4c99fc320.png",
      "bytes": 28533,
      "sha256": "c7a35021a7c288f94f6226440cb19ed465503607ae726ba33c8288a4c99fc320"
    },
    "wls2_consumable_pumpkin_1": {
      "file": "westland_wiki_assets/inventory/f67444893b375751e453c953e0daab75a354e41f65b70ec4bb11b9b22e3c60b7.png",
      "bytes": 29094,
      "sha256": "f67444893b375751e453c953e0daab75a354e41f65b70ec4bb11b9b22e3c60b7"
    },
    "wls2_consumable_pumpkin_bisque_5_common": {
      "file": "westland_wiki_assets/inventory/271a4b0982b785954223d6ee585be0a37f2f477c5d1e1886af0d7fac69b06541.png",
      "bytes": 23618,
      "sha256": "271a4b0982b785954223d6ee585be0a37f2f477c5d1e1886af0d7fac69b06541"
    },
    "wls2_consumable_roasted_bone_marrow_t5": {
      "file": "westland_wiki_assets/inventory/2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355.png",
      "bytes": 25571,
      "sha256": "2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355"
    },
    "wls2_consumable_spiced_coffee_5_uncommon": {
      "file": "westland_wiki_assets/inventory/01e48f3a1bbda249a35378e2f4d3d67504c566ef30b52417c79ceaf28afb0624.png",
      "bytes": 31156,
      "sha256": "01e48f3a1bbda249a35378e2f4d3d67504c566ef30b52417c79ceaf28afb0624"
    },
    "wls2_consumable_st_patricks_day_pie_t5": {
      "file": "westland_wiki_assets/inventory/4e724de747000ffe5f925302e0b728ab5f79119edc01a134543377586f07dfc9.png",
      "bytes": 33309,
      "sha256": "4e724de747000ffe5f925302e0b728ab5f79119edc01a134543377586f07dfc9"
    },
    "wls2_resourse_miscellaneous_herb_5": {
      "file": "westland_wiki_assets/inventory/b670ba6bdc9f6699965ef0fed70ba6c6b0cd71bd959ee9868c4e82d45337f70d.png",
      "bytes": 29277,
      "sha256": "b670ba6bdc9f6699965ef0fed70ba6c6b0cd71bd959ee9868c4e82d45337f70d"
    },
    "wls2_consumable_akutaq_6_rare": {
      "file": "westland_wiki_assets/inventory/a73ea80bd9f3b7494324df1dd4ea5f2ea7695486199248ad927d609726084cf0.png",
      "bytes": 30782,
      "sha256": "a73ea80bd9f3b7494324df1dd4ea5f2ea7695486199248ad927d609726084cf0"
    },
    "wls2_consumable_baked_potato_6_common": {
      "file": "westland_wiki_assets/inventory/17788243f4985ad364175802fc66cf0dc70568951878608409d5397768f1c6b1.png",
      "bytes": 33573,
      "sha256": "17788243f4985ad364175802fc66cf0dc70568951878608409d5397768f1c6b1"
    },
    "wls2_consumable_caribu_potato_6_uncommon": {
      "file": "westland_wiki_assets/inventory/91a9c4e7bb6539cbf50a200c17b08e8e054b2b02f51d9ea36405736e5b76b51d.png",
      "bytes": 31210,
      "sha256": "91a9c4e7bb6539cbf50a200c17b08e8e054b2b02f51d9ea36405736e5b76b51d"
    },
    "wls2_consumable_caribu_soup_6_uncommon": {
      "file": "westland_wiki_assets/inventory/1e7f7138394e60074d1e43b488caf0fff4574ad046cda517bf2d61d192c1b1b8.png",
      "bytes": 31610,
      "sha256": "1e7f7138394e60074d1e43b488caf0fff4574ad046cda517bf2d61d192c1b1b8"
    },
    "wls2_consumable_caribu_steak_6_common": {
      "file": "westland_wiki_assets/inventory/df875b22dc9feaf5f6aedb38cdae9a7cb999fdb16aeaef26b598d1a5371ec052.png",
      "bytes": 31812,
      "sha256": "df875b22dc9feaf5f6aedb38cdae9a7cb999fdb16aeaef26b598d1a5371ec052"
    },
    "wls2_consumable_flask_heal_6": {
      "file": "westland_wiki_assets/inventory/aa63029eb43d5a2ef1037f7a57c4d8d6bbbc8c4adb2b1e3536ad061934305ec5.png",
      "bytes": 22160,
      "sha256": "aa63029eb43d5a2ef1037f7a57c4d8d6bbbc8c4adb2b1e3536ad061934305ec5"
    },
    "wls2_consumable_injun_drink_6_common": {
      "file": "westland_wiki_assets/inventory/2e700053d492efc3f922a9163f1a36ebd8ad9339c54f5b55d926b7b6643a77ba.png",
      "bytes": 25038,
      "sha256": "2e700053d492efc3f922a9163f1a36ebd8ad9339c54f5b55d926b7b6643a77ba"
    },
    "wls2_consumable_injun_drink_6_rare": {
      "file": "westland_wiki_assets/inventory/4178b53cd96cdc0d7645f69e543f7a551638142d1b4ed03e898f93b0a3e469fe.png",
      "bytes": 36365,
      "sha256": "4178b53cd96cdc0d7645f69e543f7a551638142d1b4ed03e898f93b0a3e469fe"
    },
    "wls2_consumable_injun_drink_6_uncommon": {
      "file": "westland_wiki_assets/inventory/23f726ab739c2ac4a30925ae215dbf16eab8879d79cdd46abb8cea3c034b339e.png",
      "bytes": 27545,
      "sha256": "23f726ab739c2ac4a30925ae215dbf16eab8879d79cdd46abb8cea3c034b339e"
    },
    "wls2_consumable_meat_soup_6_rare": {
      "file": "westland_wiki_assets/inventory/d9ee3b05fe1f6f92d8ab511c4ab263d9632da28818368f887fc2b3c70dcfbefa.png",
      "bytes": 27698,
      "sha256": "d9ee3b05fe1f6f92d8ab511c4ab263d9632da28818368f887fc2b3c70dcfbefa"
    },
    "wls2_consumable_oil_heal_6": {
      "file": "westland_wiki_assets/inventory/37a4b1cd28de1f0eb58a3a1e22da8730335a24cefb0a6bf374784576e92d875b.png",
      "bytes": 26022,
      "sha256": "37a4b1cd28de1f0eb58a3a1e22da8730335a24cefb0a6bf374784576e92d875b"
    },
    "wls2_consumable_potato_1": {
      "file": "westland_wiki_assets/inventory/e520bfa84144c54bf538ca6000758a310d7567e92938de61b6af383703a21edd.png",
      "bytes": 29468,
      "sha256": "e520bfa84144c54bf538ca6000758a310d7567e92938de61b6af383703a21edd"
    },
    "wls2_consumable_roasted_bone_marrow_t6": {
      "file": "westland_wiki_assets/inventory/2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355.png",
      "bytes": 25571,
      "sha256": "2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355"
    },
    "wls2_consumable_salmon_chowder_6_rare": {
      "file": "westland_wiki_assets/inventory/4f4346f236aa72b2a064c60dc6239b283bed89691800a986d32d0094094e61c2.png",
      "bytes": 26126,
      "sha256": "4f4346f236aa72b2a064c60dc6239b283bed89691800a986d32d0094094e61c2"
    },
    "wls2_resourse_miscellaneous_herb_6": {
      "file": "westland_wiki_assets/inventory/3b673572c9bab689767204ca1a21719b1f0596eb18d198c1d99cc2fc58a532ed.png",
      "bytes": 38278,
      "sha256": "3b673572c9bab689767204ca1a21719b1f0596eb18d198c1d99cc2fc58a532ed"
    },
    "wls2_consumable_bass_cakes_7_rare": {
      "file": "westland_wiki_assets/inventory/8497dce15251902400f146e97ef2ecade6705ec967c859dd2629bd2a84665c7d.png",
      "bytes": 27540,
      "sha256": "8497dce15251902400f146e97ef2ecade6705ec967c859dd2629bd2a84665c7d"
    },
    "wls2_consumable_beef_ragout_7_rare": {
      "file": "westland_wiki_assets/inventory/5489785917637b57a4d05e3b7755147b28844ec8d83b3247f53c2331cfbdb5ef.png",
      "bytes": 26484,
      "sha256": "5489785917637b57a4d05e3b7755147b28844ec8d83b3247f53c2331cfbdb5ef"
    },
    "wls2_consumable_bloody_molly_7_rare": {
      "file": "westland_wiki_assets/inventory/312eff2c0f7c1679184a86920c07dae0391fd2890df8008a59cd3c26301e8725.png",
      "bytes": 21350,
      "sha256": "312eff2c0f7c1679184a86920c07dae0391fd2890df8008a59cd3c26301e8725"
    },
    "wls2_consumable_chili_con_carne_7_rare": {
      "file": "westland_wiki_assets/inventory/a62db4fd72e9eace0e5187dc100e694bba2ac830b9f54f5c06563fb55cd73805.png",
      "bytes": 24727,
      "sha256": "a62db4fd72e9eace0e5187dc100e694bba2ac830b9f54f5c06563fb55cd73805"
    },
    "wls2_consumable_flask_heal_7": {
      "file": "westland_wiki_assets/inventory/e62c15c1d7285c6e6a6bd095fe59325f8035efdc071bbbfdaf01db863d362ba7.png",
      "bytes": 19784,
      "sha256": "e62c15c1d7285c6e6a6bd095fe59325f8035efdc071bbbfdaf01db863d362ba7"
    },
    "wls2_consumable_lime_squash_7_common": {
      "file": "westland_wiki_assets/inventory/5d1a990dd75e9dc37ad023513fd51b098dc34e894bf5fcd3fee2b634011f956a.png",
      "bytes": 24987,
      "sha256": "5d1a990dd75e9dc37ad023513fd51b098dc34e894bf5fcd3fee2b634011f956a"
    },
    "wls2_consumable_mohito_7_uncommon": {
      "file": "westland_wiki_assets/inventory/6d9d63913d2afca8c084d3036279a4d37d65734a0914e8f346457145f58a779d.png",
      "bytes": 25785,
      "sha256": "6d9d63913d2afca8c084d3036279a4d37d65734a0914e8f346457145f58a779d"
    },
    "wls2_consumable_oil_heal_7": {
      "file": "westland_wiki_assets/inventory/296066d137f2415c770ce878839fa61d7a78e45ac89ebf1d53d383e3e3bd8375.png",
      "bytes": 27299,
      "sha256": "296066d137f2415c770ce878839fa61d7a78e45ac89ebf1d53d383e3e3bd8375"
    },
    "wls2_consumable_pueblo_firepot_7_uncommon": {
      "file": "westland_wiki_assets/inventory/feef88f956ce78d0a58147313a05f2743fe44826c90ff617894ed30a9b638394.png",
      "bytes": 25875,
      "sha256": "feef88f956ce78d0a58147313a05f2743fe44826c90ff617894ed30a9b638394"
    },
    "wls2_consumable_rib_steak_7_common": {
      "file": "westland_wiki_assets/inventory/98e0461e101d3469ff407162af6578ae018b2d6da4730172c33a6738e45897d3.png",
      "bytes": 25187,
      "sha256": "98e0461e101d3469ff407162af6578ae018b2d6da4730172c33a6738e45897d3"
    },
    "wls2_consumable_roasted_bone_marrow_t7": {
      "file": "westland_wiki_assets/inventory/2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355.png",
      "bytes": 25571,
      "sha256": "2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355"
    },
    "wls2_consumable_st_patricks_day_pie_t7": {
      "file": "westland_wiki_assets/inventory/4e724de747000ffe5f925302e0b728ab5f79119edc01a134543377586f07dfc9.png",
      "bytes": 33309,
      "sha256": "4e724de747000ffe5f925302e0b728ab5f79119edc01a134543377586f07dfc9"
    },
    "wls2_consumable_stewed_tomato_7_common": {
      "file": "westland_wiki_assets/inventory/9e603c8ebbf957ed3c78ba09a4bdee4b1e6c08ca3a30110ba9127a35379264c6.png",
      "bytes": 23360,
      "sha256": "9e603c8ebbf957ed3c78ba09a4bdee4b1e6c08ca3a30110ba9127a35379264c6"
    },
    "wls2_consumable_taco_7_uncommon": {
      "file": "westland_wiki_assets/inventory/9633d874d20d8cc25149de0cbb067ee0f2290f1be5a119a008cf9e7cde835a17.png",
      "bytes": 27297,
      "sha256": "9633d874d20d8cc25149de0cbb067ee0f2290f1be5a119a008cf9e7cde835a17"
    },
    "wls2_consumable_tomato_1": {
      "file": "westland_wiki_assets/inventory/23244e7c11adaefbd988f8eaef99556836ef5d76f9ad56f20dc8d13cd9f6a56f.png",
      "bytes": 25079,
      "sha256": "23244e7c11adaefbd988f8eaef99556836ef5d76f9ad56f20dc8d13cd9f6a56f"
    },
    "wls2_resourse_miscellaneous_herb_7": {
      "file": "westland_wiki_assets/inventory/043542c869983e669f46ab83b1e9cac294c68a91538ab05133c8dbe261d78c8f.png",
      "bytes": 30994,
      "sha256": "043542c869983e669f46ab83b1e9cac294c68a91538ab05133c8dbe261d78c8f"
    },
    "wls2_ws_day2021_candy": {
      "file": "westland_wiki_assets/inventory/0b79f8da84ea741723842aab2721b518d329a411c7a37dc625592b1a7588c32e.png",
      "bytes": 24172,
      "sha256": "0b79f8da84ea741723842aab2721b518d329a411c7a37dc625592b1a7588c32e"
    }
  }
};
