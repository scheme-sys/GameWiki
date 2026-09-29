/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-inventory-2"] = {
  "section": "inventory",
  "records": [
    {
      "id": "wls2_weapon_xmas2020_lollipike",
      "name": "尖锐的棒棒糖",
      "name_en": "Sharpened lollipop",
      "name_source": "official_zh",
      "description": "可对敌人的健康造成非常非常巨大的影响！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_xmas2020_lollipike",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 110,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 233,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 233
            },
            {
              "level": 2,
              "value": 256
            },
            {
              "level": 3,
              "value": 279
            },
            {
              "level": 4,
              "value": 304
            },
            {
              "level": 5,
              "value": 327
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 13.0
            },
            {
              "level": 3,
              "value": 15.0
            },
            {
              "level": 4,
              "value": 18.0
            },
            {
              "level": 5,
              "value": 20.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_xmas2020_trader_wls_random_item_24",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_xmas2020_lollipike",
          "result_name": "尖锐的棒棒糖",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_weapon_xmas2020_lollipike",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 5
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_xmas2020_lollipike",
          "result_name": "尖锐的棒棒糖",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "32532b84e0b3608e003b9734e36c465659c6e1d98ccab9982f8465adde61ee72"
    },
    {
      "id": "wls2_weapon_melee_middle_3",
      "name": "战士战斧",
      "name_en": "Warrior tomahawk",
      "name_source": "official_zh",
      "description": "只有最强的印第安战士才拥有这样的战斧。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_melee_middle_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 86,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_50coins_dynamic_south_trader_offer_middle_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_middle_3",
          "result_name": "战士战斧",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_melee_middle_3",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 2
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "68c12041a71e1882f376283573e544ad42c9670a98785e7d9bf04540288c5798"
    },
    {
      "id": "wls2_halloween_21_weapon_melee_staff_3",
      "name": "碎颅者",
      "name_en": "Skull crusher",
      "name_source": "official_zh",
      "description": "它的名字就说明了一切",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_halloween_21_weapon_melee_staff_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 60,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 328,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 328
            },
            {
              "level": 2,
              "value": 361
            },
            {
              "level": 3,
              "value": 394
            },
            {
              "level": 4,
              "value": 427
            },
            {
              "level": 5,
              "value": 459
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 25.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 25.0
            },
            {
              "level": 2,
              "value": 50.0
            },
            {
              "level": 3,
              "value": 75.0
            },
            {
              "level": 4,
              "value": 100
            },
            {
              "level": 5,
              "value": 150.0
            }
          ]
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 12.0
            },
            {
              "level": 3,
              "value": 14.0
            },
            {
              "level": 4,
              "value": 16.0
            },
            {
              "level": 5,
              "value": 18.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_melee_staff_3",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_25_currency_pumpkin",
              "name": "幽灵南瓜",
              "amount": 150
            }
          ],
          "result_id": "wls2_halloween_21_weapon_melee_staff_3",
          "result_name": "碎颅者",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_halloween_21_weapon_melee_staff_3_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_stoneblock_3",
              "name": "玄武岩块",
              "amount": 2
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "62c80c5494ea6ba416796f55ec99409da6345033ed8645cc1b7642bcfa565e26"
    },
    {
      "id": "wls2_halloween_2h_staff_3",
      "name": "碎颅者",
      "name_en": "Skull crusher",
      "name_source": "official_zh",
      "description": "它的名字就说明了一切",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_halloween_2h_staff_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 60,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 328,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 328
            },
            {
              "level": 2,
              "value": 361
            },
            {
              "level": 3,
              "value": 394
            },
            {
              "level": 4,
              "value": 427
            },
            {
              "level": 5,
              "value": 459
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 25.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 25.0
            },
            {
              "level": 2,
              "value": 50.0
            },
            {
              "level": 3,
              "value": 75.0
            },
            {
              "level": 4,
              "value": 100
            },
            {
              "level": 5,
              "value": 150.0
            }
          ]
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 12.0
            },
            {
              "level": 3,
              "value": 14.0
            },
            {
              "level": 4,
              "value": 16.0
            },
            {
              "level": 5,
              "value": 18.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_2h_staff_3",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 5
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 4
            },
            {
              "id": "wls_bear_claw",
              "name": "熊爪",
              "amount": 2
            }
          ],
          "result_id": "wls2_halloween_2h_staff_3",
          "result_name": "碎颅者",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "62c80c5494ea6ba416796f55ec99409da6345033ed8645cc1b7642bcfa565e26"
    },
    {
      "id": "wls2_halloween_21_weapon_melee_cross_3",
      "name": "神圣十字弩",
      "name_en": "Holy cross",
      "name_source": "official_zh",
      "description": "这个物品绝对是从当地教堂里偷来的",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_halloween_21_weapon_melee_cross_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 60,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 297,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 297
            },
            {
              "level": 2,
              "value": 330
            },
            {
              "level": 3,
              "value": 363
            },
            {
              "level": 4,
              "value": 396
            },
            {
              "level": 5,
              "value": 418
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 8.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 8.0
            },
            {
              "level": 2,
              "value": 10.0
            },
            {
              "level": 3,
              "value": 15.0
            },
            {
              "level": 4,
              "value": 18.0
            },
            {
              "level": 5,
              "value": 20.0
            }
          ]
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 30.0
            },
            {
              "level": 3,
              "value": 50.0
            },
            {
              "level": 4,
              "value": 70.0
            },
            {
              "level": 5,
              "value": 100
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_melee_cross_3",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_25_currency_pumpkin",
              "name": "幽灵南瓜",
              "amount": 150
            }
          ],
          "result_id": "wls2_halloween_21_weapon_melee_cross_3",
          "result_name": "神圣十字弩",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_halloween_21_weapon_melee_cross_3_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 2
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "5616b248c841591e5ae24b7fe7d2fd8e344c2a1dcd87c727f31d1be97ccbf301"
    },
    {
      "id": "wls2_halloween_event_melee_cross_2h_2",
      "name": "神圣十字弩",
      "name_en": "Holy cross",
      "name_source": "official_zh",
      "description": "这个物品绝对是从当地教堂里偷来的",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_halloween_event_melee_cross_2h_2",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 60,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 270,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 270
            },
            {
              "level": 2,
              "value": 300
            },
            {
              "level": 3,
              "value": 330
            },
            {
              "level": 4,
              "value": 360
            },
            {
              "level": 5,
              "value": 380
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 8.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 8.0
            },
            {
              "level": 2,
              "value": 10.0
            },
            {
              "level": 3,
              "value": 15.0
            },
            {
              "level": 4,
              "value": 18.0
            },
            {
              "level": 5,
              "value": 20.0
            }
          ]
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 30.0
            },
            {
              "level": 3,
              "value": 50.0
            },
            {
              "level": 4,
              "value": 70.0
            },
            {
              "level": 5,
              "value": 100
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_event_melee_cross_2h_2",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_2",
              "name": "褐煤",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 4
            }
          ],
          "result_id": "wls2_halloween_event_melee_cross_2h_2",
          "result_name": "神圣十字弩",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "5616b248c841591e5ae24b7fe7d2fd8e344c2a1dcd87c727f31d1be97ccbf301"
    },
    {
      "id": "wls2_weapon_xmas2020_candy_staff",
      "name": "糖果棒",
      "name_en": "Candy staff",
      "name_source": "official_zh",
      "description": "带有美好设计初衷的沉重双头棒",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_xmas2020_candy_staff",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 52,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 198,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 198
            },
            {
              "level": 2,
              "value": 220
            },
            {
              "level": 3,
              "value": 242
            },
            {
              "level": 4,
              "value": 275
            },
            {
              "level": 5,
              "value": 330
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 20.0
            },
            {
              "level": 3,
              "value": 25.0
            },
            {
              "level": 4,
              "value": 30.0
            },
            {
              "level": 5,
              "value": 35.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_xmas2020_trader_wls_random_item_17",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_xmas2020_candy_staff",
          "result_name": "糖果棒",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_weapon_xmas2020_candy_staff",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_2",
              "name": "褐煤",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_xmas2020_candy_staff",
          "result_name": "糖果棒",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "5dfc6aaf6a3fd7e9e9dde7f0a5016be3e67d4cc9ec11e2c24cebe72d7a21461b"
    },
    {
      "id": "wls2_halloween_21_weapon_melee_scythe_3",
      "name": "长柄镰刀",
      "name_en": "Scythe",
      "name_source": "official_zh",
      "description": "拿上它，你就能够化身成割人如割草的死神！或者也可以真的用来割一割院子里的杂草。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_halloween_21_weapon_melee_scythe_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 385,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 385
            },
            {
              "level": 2,
              "value": 429
            },
            {
              "level": 3,
              "value": 473
            },
            {
              "level": 4,
              "value": 506
            },
            {
              "level": 5,
              "value": 550
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 8.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 8.0
            },
            {
              "level": 2,
              "value": 10.0
            },
            {
              "level": 3,
              "value": 12.0
            },
            {
              "level": 4,
              "value": 14.0
            },
            {
              "level": 5,
              "value": 16.0
            }
          ]
        },
        {
          "id": "slow_time",
          "label": "减速时长",
          "value": 0.75,
          "unit": "秒",
          "levels": [
            {
              "level": 1,
              "value": 0.75
            },
            {
              "level": 2,
              "value": 1
            },
            {
              "level": 3,
              "value": 1.25
            },
            {
              "level": 4,
              "value": 1.5
            },
            {
              "level": 5,
              "value": 1.75
            }
          ]
        },
        {
          "id": "slow_modifier",
          "label": "减速幅度",
          "value": 35.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_melee_scythe_3",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_25_currency_pumpkin",
              "name": "幽灵南瓜",
              "amount": 150
            }
          ],
          "result_id": "wls2_halloween_21_weapon_melee_scythe_3",
          "result_name": "长柄镰刀",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_halloween_21_weapon_melee_scythe_3_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 2
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "4caf6a83c8ef67e5c387f95526851606ce66f00fca9e5d604a259c4bd601eebc"
    },
    {
      "id": "wls2_halloween_event_scythe",
      "name": "长柄镰刀",
      "name_en": "Scythe",
      "name_source": "official_zh",
      "description": "拿上它，你就能够化身成割人如割草的死神！或者也可以真的用来割一割院子里的杂草。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_halloween_event_scythe",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 385,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 385
            },
            {
              "level": 2,
              "value": 429
            },
            {
              "level": 3,
              "value": 473
            },
            {
              "level": 4,
              "value": 506
            },
            {
              "level": 5,
              "value": 550
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 8.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 8.0
            },
            {
              "level": 2,
              "value": 10.0
            },
            {
              "level": 3,
              "value": 12.0
            },
            {
              "level": 4,
              "value": 14.0
            },
            {
              "level": 5,
              "value": 16.0
            }
          ]
        },
        {
          "id": "slow_time",
          "label": "减速时长",
          "value": 0.75,
          "unit": "秒",
          "levels": [
            {
              "level": 1,
              "value": 0.75
            },
            {
              "level": 2,
              "value": 1
            },
            {
              "level": 3,
              "value": 1.25
            },
            {
              "level": 4,
              "value": 1.5
            },
            {
              "level": 5,
              "value": 1.75
            }
          ]
        },
        {
          "id": "slow_modifier",
          "label": "减速幅度",
          "value": 35.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_event_scythe",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 4
            }
          ],
          "result_id": "wls2_halloween_event_scythe",
          "result_name": "长柄镰刀",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "4caf6a83c8ef67e5c387f95526851606ce66f00fca9e5d604a259c4bd601eebc"
    },
    {
      "id": "wls2_halloween_1h_sickle_3",
      "name": "骨誓",
      "name_en": "Bone Vow",
      "name_source": "official_zh",
      "description": "在某些文化里，这种武器是团结一致的象征",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_halloween_1h_sickle_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 130,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 319,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 319
            },
            {
              "level": 2,
              "value": 352
            },
            {
              "level": 3,
              "value": 385
            },
            {
              "level": 4,
              "value": 418
            },
            {
              "level": 5,
              "value": 440
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "slow_time",
          "label": "减速时长",
          "value": 0.5,
          "unit": "秒",
          "levels": [
            {
              "level": 1,
              "value": 0.5
            },
            {
              "level": 2,
              "value": 0.75
            },
            {
              "level": 3,
              "value": 1
            },
            {
              "level": 4,
              "value": 1.25
            },
            {
              "level": 5,
              "value": 1.5
            }
          ]
        },
        {
          "id": "slow_modifier",
          "label": "减速幅度",
          "value": 25.0,
          "unit": "%"
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_1h_sickle_3",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 2
            },
            {
              "id": "wls_wolf_fang",
              "name": "狼牙",
              "amount": 2
            }
          ],
          "result_id": "wls2_halloween_1h_sickle_3",
          "result_name": "骨誓",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "0722f4fc2acf4e92034ce7bf674cc9bcbc53dc93921fa49cbb3ec0ef2469e4c9"
    },
    {
      "id": "wls2_halloween_21_weapon_melee_sickle_3",
      "name": "骨誓",
      "name_en": "Bone Vow",
      "name_source": "official_zh",
      "description": "在某些文化里，这种武器是团结一致的象征",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_halloween_21_weapon_melee_sickle_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 130,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 319,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 319
            },
            {
              "level": 2,
              "value": 352
            },
            {
              "level": 3,
              "value": 385
            },
            {
              "level": 4,
              "value": 418
            },
            {
              "level": 5,
              "value": 440
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "slow_time",
          "label": "减速时长",
          "value": 0.5,
          "unit": "秒",
          "levels": [
            {
              "level": 1,
              "value": 0.5
            },
            {
              "level": 2,
              "value": 0.75
            },
            {
              "level": 3,
              "value": 1
            },
            {
              "level": 4,
              "value": 1.25
            },
            {
              "level": 5,
              "value": 1.5
            }
          ]
        },
        {
          "id": "slow_modifier",
          "label": "减速幅度",
          "value": 25.0,
          "unit": "%"
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_melee_sickle_3",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_25_currency_pumpkin",
              "name": "幽灵南瓜",
              "amount": 150
            }
          ],
          "result_id": "wls2_halloween_21_weapon_melee_sickle_3",
          "result_name": "骨誓",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_halloween_21_weapon_melee_sickle_3",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 2
            },
            {
              "id": "wls_wolf_fang",
              "name": "狼牙",
              "amount": 2
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "0722f4fc2acf4e92034ce7bf674cc9bcbc53dc93921fa49cbb3ec0ef2469e4c9"
    },
    {
      "id": "wls2_weapon_melee_knife_3_common",
      "name": "博伊刀",
      "name_en": "Bowie knife",
      "name_source": "official_zh",
      "description": "狂野西部居民能够买得起的最好的刀刃",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_melee_knife_3_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 119,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 119
            },
            {
              "level": 2,
              "value": 130
            },
            {
              "level": 3,
              "value": 142
            },
            {
              "level": 4,
              "value": 154
            },
            {
              "level": 5,
              "value": 166
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_knife_3_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_2",
              "name": "褐煤",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 1
            }
          ],
          "result_id": "wls2_weapon_melee_knife_3_common",
          "result_name": "博伊刀",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_100coins_dynamic_town_trader_offer_fast_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_knife_3_common",
          "result_name": "博伊刀",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_town_collection_butcher_shop",
          "label": "建设提交",
          "target_id": "wls2_town_collection_butcher_shop",
          "name": "商店项目",
          "amount": 5
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "a474bda62b0ea22881b9156ddc5647c03bb8bb68f4dc5ce9f6f7c7145a0d66ed"
    },
    {
      "id": "wls2_weapon_melee_knife_3_epic",
      "name": "大刀",
      "name_en": "Bolo",
      "name_source": "official_zh",
      "description": "形似大砍刀，但是更短一些。虽说谈不上什么优雅，但是胜在高效",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 3,
      "rarity": "epic",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_melee_knife_3_epic",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 76,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 253,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 253
            },
            {
              "level": 2,
              "value": 278
            },
            {
              "level": 3,
              "value": 304
            },
            {
              "level": 4,
              "value": 330
            },
            {
              "level": 5,
              "value": 355
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 10.0
            },
            {
              "level": 3,
              "value": 15.0
            },
            {
              "level": 4,
              "value": 20.0
            },
            {
              "level": 5,
              "value": 25.0
            }
          ]
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 20.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 20.0
            },
            {
              "level": 2,
              "value": 40.0
            },
            {
              "level": 3,
              "value": 60.0
            },
            {
              "level": 4,
              "value": 80.0
            },
            {
              "level": 5,
              "value": 100
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_knife_3_epic",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_2",
              "name": "褐煤",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 3
            },
            {
              "id": "wls2_resourse_epic_rubber",
              "name": "橡胶",
              "amount": 1
            }
          ],
          "result_id": "wls2_weapon_melee_knife_3_epic",
          "result_name": "大刀",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "efdbb4a3f87e2952f93fed7af01d0e3c942077554f908bc753a1a7001096a6e8"
    },
    {
      "id": "wls2_weapon_melee_knife_3_uncommon",
      "name": "绿河",
      "name_en": "Green River",
      "name_source": "official_zh",
      "description": "绿河刀具早些年在美国西部红极一时",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_melee_knife_3_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 163,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 163
            },
            {
              "level": 2,
              "value": 179
            },
            {
              "level": 3,
              "value": 196
            },
            {
              "level": 4,
              "value": 212
            },
            {
              "level": 5,
              "value": 229
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_knife_3_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_2",
              "name": "褐煤",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_melee_knife_3_uncommon",
          "result_name": "绿河",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_150coins_dynamic_town_trader_offer_knife_3_uncommon",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_knife_3_uncommon",
          "result_name": "绿河",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "a5464c90e877dd154e2fe22e080bbd33dde24bba8a9a4d09a6470b4b47ef0567"
    },
    {
      "id": "wls2_weapon_melee_spear_3_common",
      "name": "铁矛",
      "name_en": "Iron spear",
      "name_source": "official_zh",
      "description": "带有金属三角矛头的长矛",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "长矛与军刀",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_melee_spear_3_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 110,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 177,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 177
            },
            {
              "level": 2,
              "value": 195
            },
            {
              "level": 3,
              "value": 213
            },
            {
              "level": 4,
              "value": 231
            },
            {
              "level": 5,
              "value": 249
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_spear_3_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_2",
              "name": "褐煤",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_melee_spear_3_common",
          "result_name": "铁矛",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_125coins_dynamic_town_trader_offer_spear_3_common",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_spear_3_common",
          "result_name": "铁矛",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "489453591d1df7f022a08503c7783bb7f356d52b155a567c8ad181d69dbb744b"
    },
    {
      "id": "wls2_weapon_melee_spear_3_uncommon",
      "name": "长矛",
      "name_en": "Pike",
      "name_source": "official_zh",
      "description": "木制矛柄，铁制矛头",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "长矛与军刀",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_melee_spear_3_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 110,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 245,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 245
            },
            {
              "level": 2,
              "value": 270
            },
            {
              "level": 3,
              "value": 294
            },
            {
              "level": 4,
              "value": 318
            },
            {
              "level": 5,
              "value": 343
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_spear_3_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_2",
              "name": "褐煤",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_melee_spear_3_uncommon",
          "result_name": "长矛",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_200coins_dynamic_town_trader_offer_spear_3_uncommon",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_spear_3_uncommon",
          "result_name": "长矛",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "9f10a04478186cffca8fc13bfecd72c3e02d7c4d52bd5343109965162d5b53e2"
    },
    {
      "id": "wls2_weapon_melee_spear_3_rare",
      "name": "阿帕切长矛",
      "name_en": "Apache spear",
      "name_source": "official_zh",
      "description": "以羽毛作为装饰的近战长矛",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "长矛与军刀",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_melee_spear_3_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 110,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 345,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 345
            },
            {
              "level": 2,
              "value": 381
            },
            {
              "level": 3,
              "value": 415
            },
            {
              "level": 4,
              "value": 450
            },
            {
              "level": 5,
              "value": 484
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 13.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 13.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 18.0
            },
            {
              "level": 4,
              "value": 20.0
            },
            {
              "level": 5,
              "value": 25.0
            }
          ]
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_spear_3_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_2",
              "name": "褐煤",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_melee_spear_3_rare",
          "result_name": "阿帕切长矛",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "4598ac01b527a497ccee6b9f28faed1c6dda76857512e5e254cac2e3041fbcb1"
    },
    {
      "id": "wls2_xmas_22_weapon_snowball",
      "name": "雪球",
      "name_en": "Snowballs",
      "name_source": "official_zh",
      "description": "打在身上也是会疼的！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "雪球",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_xmas_22_weapon_snowball",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 20,
          "unit": ""
        },
        {
          "id": "slow_time",
          "label": "减速时长",
          "value": 3,
          "unit": "秒"
        },
        {
          "id": "slow_modifier",
          "label": "减速幅度",
          "value": 50.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "冬季庆典"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "68f57db31a65d30ebddc723eb14ad61f899f54e402538bdb88b8576bdf1e2555"
    },
    {
      "id": "wls2_xmas_23_weapon_snowball",
      "name": "雪球",
      "name_en": "Snowballs",
      "name_source": "official_zh",
      "description": "打在身上也是会疼的！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "雪球",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_xmas_23_weapon_snowball",
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "冬季庆典"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "68f57db31a65d30ebddc723eb14ad61f899f54e402538bdb88b8576bdf1e2555"
    },
    {
      "id": "wls2_weapon_easter_22_shotgun_3_t3",
      "name": "吉尔的霰弹枪",
      "name_en": "Jill's Shotgun",
      "name_source": "official_zh",
      "description": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_easter_22_shotgun_3_t3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 210,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 380,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 380
            },
            {
              "level": 2,
              "value": 414
            },
            {
              "level": 3,
              "value": 451
            },
            {
              "level": 4,
              "value": 492
            },
            {
              "level": 5,
              "value": 536
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 8.0
            },
            {
              "level": 3,
              "value": 10.0
            },
            {
              "level": 4,
              "value": 13.0
            },
            {
              "level": 5,
              "value": 15.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_shotgun_3_t3_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_2",
              "name": "青铜紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_2",
              "name": "青铜武器零件",
              "amount": 6
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "b603fc5880f23feb9453ab8321797febd8f12e94181fa85643ed60dc0dad717d"
    },
    {
      "id": "wls2_weapon_ws_day2021_shotgun",
      "name": "周年庆散弹枪",
      "name_en": "Anniversary shotgun",
      "name_source": "official_zh",
      "description": "奖励武器。用来射击和炫耀都很合适！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_ws_day2021_shotgun",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 230,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 572,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 572
            },
            {
              "level": 2,
              "value": 572
            },
            {
              "level": 3,
              "value": 572
            },
            {
              "level": 4,
              "value": 572
            },
            {
              "level": 5,
              "value": 572
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 3.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 3.0
            },
            {
              "level": 2,
              "value": 3.0
            },
            {
              "level": 3,
              "value": 3.0
            },
            {
              "level": 4,
              "value": 4.0
            },
            {
              "level": 5,
              "value": 4.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_ws_day2021_shotgun_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
              "amount": 8
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "6bdc4c31a15835b2cc5bb429be5dc30f4a657f1c3c5d2641401f1392035faeaf"
    },
    {
      "id": "wls2_weapon_ws_day2024_shotgun_3",
      "name": "周年庆散弹枪",
      "name_en": "Anniversary shotgun",
      "name_source": "official_zh",
      "description": "奖励武器。用来射击和炫耀都很合适！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 3,
      "rarity": "epic",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_ws_day2024_shotgun_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 385,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 385
            },
            {
              "level": 2,
              "value": 420
            },
            {
              "level": 3,
              "value": 455
            },
            {
              "level": 4,
              "value": 490
            },
            {
              "level": 5,
              "value": 525
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 3.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 3.0
            },
            {
              "level": 2,
              "value": 3.0
            },
            {
              "level": 3,
              "value": 3.0
            },
            {
              "level": 4,
              "value": 4.0
            },
            {
              "level": 5,
              "value": 5.0
            },
            {
              "level": 6,
              "value": 7.0
            }
          ]
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 3.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 3.0
            },
            {
              "level": 2,
              "value": 3.0
            },
            {
              "level": 3,
              "value": 3.0
            },
            {
              "level": 4,
              "value": 4.0
            },
            {
              "level": 5,
              "value": 5.0
            },
            {
              "level": 6,
              "value": 7.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_ws_day2024_shotgun_3_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
              "amount": 8
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "6bdc4c31a15835b2cc5bb429be5dc30f4a657f1c3c5d2641401f1392035faeaf"
    },
    {
      "id": "wls2_weapon_easter_22_shotgun_1",
      "name": "彩炮 II",
      "name_en": "Confetti II",
      "name_source": "official_zh",
      "description": "虽然叫彩炮，但它射的可不是彩色纸屑。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_easter_22_shotgun_1",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 110,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 350,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 350
            },
            {
              "level": 2,
              "value": 385
            },
            {
              "level": 3,
              "value": 420
            },
            {
              "level": 4,
              "value": 455
            },
            {
              "level": 5,
              "value": 490
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_easter_22_trader_easter_shotgun_1",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_24_currency_egg",
              "name": "复活节彩蛋",
              "amount": 200
            }
          ],
          "result_id": "wls2_weapon_easter_22_shotgun_1",
          "result_name": "彩炮 II",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_shotgun_1_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_2",
              "name": "青铜紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_2",
              "name": "青铜武器零件",
              "amount": 6
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "d1c2b456a47cdd2eb077a97ca0c3442c116588041d48920508ec0f8f5b65f6a6"
    },
    {
      "id": "wls2_weapon_range_shotgun_3_common",
      "name": "折叠霰弹枪",
      "name_en": "Folding shotgun",
      "name_source": "official_zh",
      "description": "该枪的独特设计使得使用者只需进行一次翻腕即可进行射击",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_range_shotgun_3_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 216,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 216
            },
            {
              "level": 2,
              "value": 238
            },
            {
              "level": 3,
              "value": 259
            },
            {
              "level": 4,
              "value": 281
            },
            {
              "level": 5,
              "value": 302
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_shotgun_3_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_range_shotgun_3_common",
          "result_name": "折叠霰弹枪",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_100coins_dynamic_smuggler_offer_shotgun_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_shotgun_3_common",
          "result_name": "折叠霰弹枪",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_static_event_trader_offer_shotgun_3_common",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_shotgun_3_common",
          "result_name": "折叠霰弹枪",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "63566e144b8c2bc68ec24a853cd99de6967b392f5703e0ffa922e81105202612"
    },
    {
      "id": "wls2_weapon_xmas2024_shotgun_3",
      "name": "暴风雪",
      "name_en": "Blizzard",
      "name_source": "official_zh",
      "description": "没有人能阻止自然的力量",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 3,
      "rarity": "epic",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_xmas2024_shotgun_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 180,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 572,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 572
            },
            {
              "level": 2,
              "value": 629
            },
            {
              "level": 3,
              "value": 686
            },
            {
              "level": 4,
              "value": 744
            },
            {
              "level": 5,
              "value": 801
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 20.0
            },
            {
              "level": 4,
              "value": 25.0
            },
            {
              "level": 5,
              "value": 30.0
            }
          ]
        },
        {
          "id": "slow_time",
          "label": "减速时长",
          "value": 0.5,
          "unit": "秒",
          "levels": [
            {
              "level": 1,
              "value": 0.5
            },
            {
              "level": 2,
              "value": 0.75
            },
            {
              "level": 3,
              "value": 1
            },
            {
              "level": 4,
              "value": 1.25
            },
            {
              "level": 5,
              "value": 1.5
            }
          ]
        },
        {
          "id": "slow_modifier",
          "label": "减速幅度",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 20.0
            },
            {
              "level": 4,
              "value": 25.0
            },
            {
              "level": 5,
              "value": 30.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_xmas2024_shotgun_3_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
              "amount": 4
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "a9b84b7752f67ea6e3a9a3123f0817d61b81d6a079e2cefec840bddc456043fb"
    },
    {
      "id": "wls2_weapon_range_shotgun_3_uncommon",
      "name": "波克弗林特",
      "name_en": "Bockflinte",
      "name_source": "official_zh",
      "description": "想要打得准，试试这把双管霰弹枪",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_range_shotgun_3_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 298,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 298
            },
            {
              "level": 2,
              "value": 328
            },
            {
              "level": 3,
              "value": 358
            },
            {
              "level": 4,
              "value": 388
            },
            {
              "level": 5,
              "value": 417
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_shotgun_3_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 3
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
              "amount": 6
            }
          ],
          "result_id": "wls2_weapon_range_shotgun_3_uncommon",
          "result_name": "波克弗林特",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "9de5dc1aaffd7c07176a81bf38cc09c6f9dbb95ec0f23c43e9119ff1ded678e5"
    },
    {
      "id": "wls2_weapon_lunar_shotgun_3_rare",
      "name": "火焰 霰弹枪",
      "name_en": "Flame shotgun",
      "name_source": "official_zh",
      "description": "一发子弹像一群火热的马将打击你的敌人",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 3,
      "rarity": "epic",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_lunar_shotgun_3_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 420,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 420
            },
            {
              "level": 2,
              "value": 460
            },
            {
              "level": 3,
              "value": 500
            },
            {
              "level": 4,
              "value": 550
            },
            {
              "level": 5,
              "value": 590
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 20.0
            },
            {
              "level": 4,
              "value": 25.0
            },
            {
              "level": 5,
              "value": 30.0
            }
          ]
        },
        {
          "id": "dot_time",
          "label": "持续伤害时长",
          "value": 4,
          "unit": "秒"
        },
        {
          "id": "dot_amount",
          "label": "每次持续伤害",
          "value": 40,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 40
            },
            {
              "level": 2,
              "value": 45
            },
            {
              "level": 3,
              "value": 50
            },
            {
              "level": 4,
              "value": 55
            },
            {
              "level": 5,
              "value": 60
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_lunar_shotgun_3_rare_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_2",
              "name": "青铜紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_2",
              "name": "青铜武器零件",
              "amount": 6
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "bf5e960bdef4f9f82aa0c8fc9494b6b25d6bddc4b3cfc1186206b9538776e403"
    },
    {
      "id": "wls2_weapon_easter_22_shotgun_2_t3",
      "name": "爆笑",
      "name_en": "Killing Joke",
      "name_source": "official_zh",
      "description": "可能也没那么好笑，但是很好射！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_easter_22_shotgun_2_t3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 170,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 290,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 290
            },
            {
              "level": 2,
              "value": 316
            },
            {
              "level": 3,
              "value": 345
            },
            {
              "level": 4,
              "value": 376
            },
            {
              "level": 5,
              "value": 409
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_shotgun_2_t3_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_2",
              "name": "青铜紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_2",
              "name": "青铜武器零件",
              "amount": 6
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "ff8ebdcba688f7fb3994b9092f379473e9608ad1274854dabfeed893e32aad40"
    },
    {
      "id": "wls2_weapon_ws_day2023_shotgun_uncommon_3",
      "name": "节日霰弹枪 1866",
      "name_en": "Festive Shotgun 1866",
      "name_source": "official_zh",
      "description": "这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_ws_day2023_shotgun_uncommon_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 125,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_ws_day2023_shotgun_uncommon_3_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 1
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_2",
              "name": "青铜武器零件",
              "amount": 2
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "19ec3b11c91c9510b1a9197e8884c5ce5b8a9e2754ed229399c39ef895a55950"
    },
    {
      "id": "wls2_weapon_melee_middle_4",
      "name": "军刀",
      "name_en": "Saber",
      "name_source": "official_zh",
      "description": "骑兵最钟爱的武器。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 4,
      "rarity": null,
      "max_stack": 1,
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "equipment_id": "wls2_weapon_melee_middle_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 122,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 10,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a"
    },
    {
      "id": "wls2_weapon_range_firearms_shotgun_4",
      "name": "快速装填散弹枪",
      "name_en": "Fast load shotgun",
      "name_source": "official_zh",
      "description": "快速且强大的散弹枪，能够阻止任何对手。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "equipment_id": "wls2_weapon_range_firearms_shotgun_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 200,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 6,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a"
    },
    {
      "id": "wls2_weapon_melee_slow_4",
      "name": "木棒",
      "name_en": "Wooden club",
      "name_source": "official_zh",
      "description": "印第安人也有粗糙的武器，这根棒子就是很好的例子",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 4,
      "rarity": null,
      "max_stack": 1,
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "equipment_id": "wls2_weapon_melee_slow_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 81,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 13,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a"
    },
    {
      "id": "wls2_weapon_range_firearms_revolver_4",
      "name": "柯尔特左轮手枪",
      "name_en": "Colt",
      "name_source": "official_zh",
      "description": "狂野西部最受欢迎的手枪。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "equipment_id": "wls2_weapon_range_firearms_revolver_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 175,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 14,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a"
    },
    {
      "id": "wls2_weapon_range_firearms_musket_4",
      "name": "棕贝斯火枪",
      "name_en": "Brown Bess musket",
      "name_source": "official_zh",
      "description": "如果你能驾驭得了“棕色贝丝”，那你就能驾驭西部世界",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "equipment_id": "wls2_weapon_range_firearms_musket_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 170,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 17,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a"
    },
    {
      "id": "wls2_weapon_range_throwing_bow_4",
      "name": "猎户长弓",
      "name_en": "Long hunter's bow",
      "name_source": "official_zh",
      "description": "由两种木材制成的长弓。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 4,
      "rarity": null,
      "max_stack": 1,
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "equipment_id": "wls2_weapon_range_throwing_bow_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 113,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 7,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a"
    },
    {
      "id": "wls2_weapon_melee_fast_4",
      "name": "砍刀",
      "name_en": "Machete",
      "name_source": "official_zh",
      "description": "宽长的刀刃非常适合战斗。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 4,
      "rarity": null,
      "max_stack": 1,
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "equipment_id": "wls2_weapon_melee_fast_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 101,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 8,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a"
    },
    {
      "id": "wls2_weapon_range_firearms_rifle_4",
      "name": "马车夫之枪",
      "name_en": "Coachman's gun",
      "name_source": "official_zh",
      "description": "虽然它叫这个名字，但千万不要在马背上射击",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "equipment_id": "wls2_weapon_range_firearms_rifle_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 200,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 18,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a"
    },
    {
      "id": "wls2_weapon_range_bow_4_common",
      "name": "复合弓",
      "name_en": "Composite bow",
      "name_source": "official_zh",
      "description": "虽尺寸较小，但威力巨大",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弓",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_range_bow_4_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 130,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 220,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 220
            },
            {
              "level": 2,
              "value": 242
            },
            {
              "level": 3,
              "value": 264
            },
            {
              "level": 4,
              "value": 286
            },
            {
              "level": 5,
              "value": 308
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 7,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 7
            },
            {
              "level": 2,
              "value": 7
            },
            {
              "level": 3,
              "value": 8
            },
            {
              "level": 4,
              "value": 9
            },
            {
              "level": 5,
              "value": 9
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_bow_4_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_rope_4",
              "name": "棉绳",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 1
            }
          ],
          "result_id": "wls2_weapon_range_bow_4_common",
          "result_name": "复合弓",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_weapon_1",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_bow_4_common",
          "result_name": "复合弓",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "01dceb03adcbad5c572f7fa49f629388b1eaa1cbedb57eec7f83285da0d43b97"
    },
    {
      "id": "wls2_weapon_easter_22_bow_t4",
      "name": "胡咧咧弓",
      "name_en": "Balderdash",
      "name_source": "official_zh",
      "description": "不得不说，造这把弓的人很有想象力。更重要的是，它真的能当弓用！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弓",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_easter_22_bow_t4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 130,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 16,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 16
            },
            {
              "level": 2,
              "value": 17
            },
            {
              "level": 3,
              "value": 19
            },
            {
              "level": 4,
              "value": 20
            },
            {
              "level": 5,
              "value": 22
            }
          ]
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 390,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 390
            },
            {
              "level": 2,
              "value": 425
            },
            {
              "level": 3,
              "value": 463
            },
            {
              "level": 4,
              "value": 505
            },
            {
              "level": 5,
              "value": 551
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "slow_time",
          "label": "减速时长",
          "value": 0.5,
          "unit": "秒",
          "levels": [
            {
              "level": 1,
              "value": 0.5
            },
            {
              "level": 2,
              "value": 0.75
            },
            {
              "level": 3,
              "value": 1
            },
            {
              "level": 4,
              "value": 1.25
            },
            {
              "level": 5,
              "value": 1.5
            }
          ]
        },
        {
          "id": "slow_modifier",
          "label": "减速幅度",
          "value": 25.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_bow_t4_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_rope_3",
              "name": "亚麻绳",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 2
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "2425b779a25241ed1a0fbfd05ad4b6714587e6454870ea15a5599bab34883655"
    },
    {
      "id": "wls2_weapon_easter_bow",
      "name": "胡咧咧弓",
      "name_en": "Balderdash",
      "name_source": "official_zh",
      "description": "不得不说，造这把弓的人很有想象力。更重要的是，它真的能当弓用！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弓",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_easter_bow",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 120,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 521,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 521
            },
            {
              "level": 2,
              "value": 534
            },
            {
              "level": 3,
              "value": 563
            },
            {
              "level": 4,
              "value": 575
            },
            {
              "level": 5,
              "value": 600
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 2,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2
            },
            {
              "level": 2,
              "value": 3
            },
            {
              "level": 3,
              "value": 4
            },
            {
              "level": 4,
              "value": 5
            },
            {
              "level": 5,
              "value": 6
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 16,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 16
            },
            {
              "level": 2,
              "value": 16
            },
            {
              "level": 3,
              "value": 17
            },
            {
              "level": 4,
              "value": 17
            },
            {
              "level": 5,
              "value": 18
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_easter_bow",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 600
            }
          ],
          "result_id": "wls2_weapon_easter_bow",
          "result_name": "胡咧咧弓",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_bow_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_rope_2",
              "name": "黄麻绳",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 2
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "2425b779a25241ed1a0fbfd05ad4b6714587e6454870ea15a5599bab34883655"
    },
    {
      "id": "wls2_weapon_xmas2020_bow",
      "name": "鹿角",
      "name_en": "Deer antlers",
      "name_source": "official_zh",
      "description": "蕴藏着悠久历史的多彩弓",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弓",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_xmas2020_bow",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 120,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 521,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 521
            },
            {
              "level": 2,
              "value": 534
            },
            {
              "level": 3,
              "value": 563
            },
            {
              "level": 4,
              "value": 575
            },
            {
              "level": 5,
              "value": 600
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 2,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2
            },
            {
              "level": 2,
              "value": 3
            },
            {
              "level": 3,
              "value": 4
            },
            {
              "level": 4,
              "value": 5
            },
            {
              "level": 5,
              "value": 6
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 16,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 16
            },
            {
              "level": 2,
              "value": 16
            },
            {
              "level": 3,
              "value": 17
            },
            {
              "level": 4,
              "value": 17
            },
            {
              "level": 5,
              "value": 18
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_xmas2020_trader_wls_random_item_16",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_xmas2020_bow",
          "result_name": "鹿角",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_weapon_xmas2020_bow",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_rope_3",
              "name": "亚麻绳",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_xmas2020_bow",
          "result_name": "鹿角",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "5d58293f7d76f534b07ac6e3f6b16cb747644af08ce9efc6a317065c9bf2d004"
    },
    {
      "id": "wls2_weapon_xmas2020_crossbow",
      "name": "棒棒糖十字弓",
      "name_en": "Lollipop Crossbow",
      "name_source": "official_zh",
      "description": "光彩艳丽的节日造型十字弓，可以射出尖锐的棒棒糖。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弩",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_xmas2020_crossbow",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 120,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 380,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 380
            },
            {
              "level": 2,
              "value": 392
            },
            {
              "level": 3,
              "value": 464
            },
            {
              "level": 4,
              "value": 487
            },
            {
              "level": 5,
              "value": 517
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 7.0
            },
            {
              "level": 3,
              "value": 9.0
            },
            {
              "level": 4,
              "value": 11.0
            },
            {
              "level": 5,
              "value": 13.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 11,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 11
            },
            {
              "level": 2,
              "value": 12
            },
            {
              "level": 3,
              "value": 14
            },
            {
              "level": 4,
              "value": 15
            },
            {
              "level": 5,
              "value": 16
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_xmas2020_trader_wls_random_item_18",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_xmas2020_crossbow",
          "result_name": "棒棒糖十字弓",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_weapon_xmas2020_crossbow",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_rope_4",
              "name": "棉绳",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_xmas2020_crossbow",
          "result_name": "棒棒糖十字弓",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "63b1963333cfdd2befe87af66e150e7c0941b198cdd467e7cafd050a1d3e8a67"
    },
    {
      "id": "wls2_halloween_21_weapon_range_crossbow_4",
      "name": "猎弩",
      "name_en": "Hunting crossbow",
      "name_source": "official_zh",
      "description": "强力双手武器，可以射出致命栓钉。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弩",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_halloween_21_weapon_range_crossbow_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 250,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 369,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 369
            },
            {
              "level": 2,
              "value": 405
            },
            {
              "level": 3,
              "value": 440
            },
            {
              "level": 4,
              "value": 479
            },
            {
              "level": 5,
              "value": 517
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 12.0
            },
            {
              "level": 3,
              "value": 14.0
            },
            {
              "level": 4,
              "value": 16.0
            },
            {
              "level": 5,
              "value": 18.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 11,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 11
            },
            {
              "level": 2,
              "value": 12
            },
            {
              "level": 3,
              "value": 13
            },
            {
              "level": 4,
              "value": 14
            },
            {
              "level": 5,
              "value": 16
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_range_crossbow_4",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_25_currency_pumpkin",
              "name": "幽灵南瓜",
              "amount": 300
            }
          ],
          "result_id": "wls2_halloween_21_weapon_range_crossbow_4",
          "result_name": "猎弩",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_halloween_21_weapon_range_crossbow_4_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_rope_4",
              "name": "棉绳",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 2
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "e320b1dc5f65176532fb5fbfedd75b514c37721b152d689e584a3db80869c44e"
    },
    {
      "id": "wls2_halloween_event_range_crossbow_2h",
      "name": "猎弩",
      "name_en": "Hunting crossbow",
      "name_source": "official_zh",
      "description": "强力双手武器，可以射出致命栓钉。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弩",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_halloween_event_range_crossbow_2h",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 369,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 369
            },
            {
              "level": 2,
              "value": 385
            },
            {
              "level": 3,
              "value": 440
            },
            {
              "level": 4,
              "value": 490
            },
            {
              "level": 5,
              "value": 517
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 7.0
            },
            {
              "level": 3,
              "value": 9.0
            },
            {
              "level": 4,
              "value": 11.0
            },
            {
              "level": 5,
              "value": 13.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 11,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 11
            },
            {
              "level": 2,
              "value": 12
            },
            {
              "level": 3,
              "value": 13
            },
            {
              "level": 4,
              "value": 15
            },
            {
              "level": 5,
              "value": 16
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_event_range_crossbow_2h",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_rope_4",
              "name": "棉绳",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 1
            }
          ],
          "result_id": "wls2_halloween_event_range_crossbow_2h",
          "result_name": "猎弩",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "e320b1dc5f65176532fb5fbfedd75b514c37721b152d689e584a3db80869c44e"
    },
    {
      "id": "wls2_weapon_easter_22_crossbow_t4",
      "name": "胡萝卜弩",
      "name_en": "Carrotbow",
      "name_source": "official_zh",
      "description": "它会让你明白，表面人畜无害的胡萝卜，其实暗藏杀机。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弩",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_easter_22_crossbow_t4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 130,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 13,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 13
            },
            {
              "level": 2,
              "value": 15
            },
            {
              "level": 3,
              "value": 16
            },
            {
              "level": 4,
              "value": 17
            },
            {
              "level": 5,
              "value": 19
            }
          ]
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 333,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 333
            },
            {
              "level": 2,
              "value": 363
            },
            {
              "level": 3,
              "value": 396
            },
            {
              "level": 4,
              "value": 431
            },
            {
              "level": 5,
              "value": 470
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 7.0
            },
            {
              "level": 3,
              "value": 9.0
            },
            {
              "level": 4,
              "value": 11.0
            },
            {
              "level": 5,
              "value": 13.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_crossbow_t4_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_rope_3",
              "name": "亚麻绳",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 4
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "a1542e4b88b3b40e4786fe8c7f9cd22aab6f9dd7d1f6a59fe93990301703047a"
    },
    {
      "id": "wls2_weapon_range_revolver_4_rare",
      "name": "勒马特左轮手枪",
      "name_en": "LeMat Revolver",
      "name_source": "official_zh",
      "description": "这把特别的手枪又名“葡萄弹左轮手枪”",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_range_revolver_4_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 200,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 604,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 604
            },
            {
              "level": 2,
              "value": 665
            },
            {
              "level": 3,
              "value": 725
            },
            {
              "level": 4,
              "value": 785
            },
            {
              "level": 5,
              "value": 845
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 13.0
            },
            {
              "level": 3,
              "value": 16.0
            },
            {
              "level": 4,
              "value": 19.0
            },
            {
              "level": 5,
              "value": 22.0
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 20.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 18,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 18
            },
            {
              "level": 2,
              "value": 20
            },
            {
              "level": 3,
              "value": 22
            },
            {
              "level": 4,
              "value": 24
            },
            {
              "level": 5,
              "value": 25
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_revolver_4_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_range_revolver_4_rare",
          "result_name": "勒马特左轮手枪",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_weapon_5",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_revolver_4_rare",
          "result_name": "勒马特左轮手枪",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "f2a2ec07fe2069272036293c9c43759841b537fae9c9941ab83158b8a219e5f4"
    },
    {
      "id": "wls2_weapon_ws_day2024_colt_4",
      "name": "周年庆左轮手枪",
      "name_en": "Anniversary revolver",
      "name_source": "official_zh",
      "description": "奖励武器。用来射击和炫耀都很合适！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 4,
      "rarity": "epic",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_ws_day2024_colt_4",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 18,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 18
            },
            {
              "level": 2,
              "value": 20
            },
            {
              "level": 3,
              "value": 22
            },
            {
              "level": 4,
              "value": 24
            },
            {
              "level": 5,
              "value": 25
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 200,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 604,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 604
            },
            {
              "level": 2,
              "value": 665
            },
            {
              "level": 3,
              "value": 725
            },
            {
              "level": 4,
              "value": 785
            },
            {
              "level": 5,
              "value": 845
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 3.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 3.0
            },
            {
              "level": 2,
              "value": 3.0
            },
            {
              "level": 3,
              "value": 3.0
            },
            {
              "level": 4,
              "value": 4.0
            },
            {
              "level": 5,
              "value": 5.0
            },
            {
              "level": 6,
              "value": 7.0
            }
          ]
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 3.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 3.0
            },
            {
              "level": 2,
              "value": 3.0
            },
            {
              "level": 3,
              "value": 3.0
            },
            {
              "level": 4,
              "value": 4.0
            },
            {
              "level": 5,
              "value": 5.0
            },
            {
              "level": 6,
              "value": 7.0
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_ws_day2024_colt_4_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 4
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "7ce8cf8bb085e07e25cdaea78af5b06425dee0b735aebbe5754c3e3fe4f6c910"
    },
    {
      "id": "wls2_weapon_range_revolver_4_uncommon",
      "name": "和平使者",
      "name_en": "Peacemaker",
      "name_source": "official_zh",
      "description": "由柯尔特制造的左轮手枪，精准且威力巨大",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_range_revolver_4_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 200,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 427,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 427
            },
            {
              "level": 2,
              "value": 470
            },
            {
              "level": 3,
              "value": 512
            },
            {
              "level": 4,
              "value": 555
            },
            {
              "level": 5,
              "value": 599
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 20.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 13,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 13
            },
            {
              "level": 2,
              "value": 14
            },
            {
              "level": 3,
              "value": 15
            },
            {
              "level": 4,
              "value": 17
            },
            {
              "level": 5,
              "value": 18
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_revolver_4_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_range_revolver_4_uncommon",
          "result_name": "和平使者",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_static_event_trader_offer_revolver_4_uncommon",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_revolver_4_uncommon",
          "result_name": "和平使者",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_weapon_4",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_revolver_4_uncommon",
          "result_name": "和平使者",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "9ef94a634f60de16eee4f638a854af6b91876c067d84fc4f515f913c592d3a09"
    },
    {
      "id": "wls2_weapon_xmas2020_cup_gun",
      "name": "咖啡壶",
      "name_en": "Coffeepot",
      "name_source": "official_zh",
      "description": "这件武器的发明者绝对是闲得没事做了",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_xmas2020_cup_gun",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 112,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 341,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 341
            },
            {
              "level": 2,
              "value": 367
            },
            {
              "level": 3,
              "value": 392
            },
            {
              "level": 4,
              "value": 413
            },
            {
              "level": 5,
              "value": 453
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 8.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 8.0
            },
            {
              "level": 2,
              "value": 10.0
            },
            {
              "level": 3,
              "value": 12.0
            },
            {
              "level": 4,
              "value": 14.0
            },
            {
              "level": 5,
              "value": 16.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 10,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 10
            },
            {
              "level": 2,
              "value": 11
            },
            {
              "level": 3,
              "value": 12
            },
            {
              "level": 4,
              "value": 12
            },
            {
              "level": 5,
              "value": 14
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_xmas2020_trader_wls_random_item_12",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_xmas2020_cup_gun",
          "result_name": "咖啡壶",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_weapon_xmas2020_cup_gun",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_xmas2020_cup_gun",
          "result_name": "咖啡壶",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "a79fbf4b9455072a3545f35b7df5cd4688dda18d65252cfb8c45e519bf1b4229"
    },
    {
      "id": "wls2_weapon_xmas_21_cup_gun",
      "name": "咖啡壶",
      "name_en": "Coffeepot",
      "name_source": "official_zh",
      "description": "这件武器的发明者绝对是闲得没事做了",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_xmas_21_cup_gun",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 200,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 451,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 451
            },
            {
              "level": 2,
              "value": 495
            },
            {
              "level": 3,
              "value": 539
            },
            {
              "level": 4,
              "value": 583
            },
            {
              "level": 5,
              "value": 627
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 8.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 8.0
            },
            {
              "level": 2,
              "value": 10.0
            },
            {
              "level": 3,
              "value": 12.0
            },
            {
              "level": 4,
              "value": 14.0
            },
            {
              "level": 5,
              "value": 16.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 14,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 14
            },
            {
              "level": 2,
              "value": 15
            },
            {
              "level": 3,
              "value": 16
            },
            {
              "level": 4,
              "value": 17
            },
            {
              "level": 5,
              "value": 19
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_xmas_21_trader_wls2_weapon_xmas_21_cup_gun",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_xmas_23_currency_firework",
              "name": "爆竹",
              "amount": 500
            },
            {
              "id": "wls2_xmas_25_currency_firework",
              "name": "爆竹",
              "amount": 500
            }
          ],
          "result_id": "wls2_weapon_xmas_21_cup_gun",
          "result_name": "咖啡壶",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_xmas_21_cup_gun_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 3
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "a79fbf4b9455072a3545f35b7df5cd4688dda18d65252cfb8c45e519bf1b4229"
    },
    {
      "id": "wls2_weapon_range_halloween_23_pistol_4",
      "name": "恶灵的恐怖",
      "name_en": "Terror of Spirits",
      "name_source": "official_zh",
      "description": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 4,
      "rarity": "epic",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_range_halloween_23_pistol_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 200,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 604,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 604
            },
            {
              "level": 2,
              "value": 665
            },
            {
              "level": 3,
              "value": 725
            },
            {
              "level": 4,
              "value": 785
            },
            {
              "level": 5,
              "value": 845
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 13.0
            },
            {
              "level": 3,
              "value": 16.0
            },
            {
              "level": 4,
              "value": 19.0
            },
            {
              "level": 5,
              "value": 22.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 18,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 18
            },
            {
              "level": 2,
              "value": 20
            },
            {
              "level": 3,
              "value": 22
            },
            {
              "level": 4,
              "value": 24
            },
            {
              "level": 5,
              "value": 25
            }
          ]
        },
        {
          "id": "ghost_damage_modifier",
          "label": "对幽灵的伤害增加",
          "value": 50.0,
          "unit": "%"
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_range_halloween_23_pistol_4_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 7
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 7
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 3
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "dd1ce2c981e1f8db3aea5221fc903d64f2725ee6eb1e76b5fac9e36bbb30e04c"
    },
    {
      "id": "wls2_halloween_event_range_pistol",
      "name": "手枪",
      "name_en": "Pistol",
      "name_source": "official_zh",
      "description": "枪声震耳欲聋且伤害极高",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_halloween_event_range_pistol",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 176,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 289,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 289
            },
            {
              "level": 2,
              "value": 336
            },
            {
              "level": 3,
              "value": 362
            },
            {
              "level": 4,
              "value": 394
            },
            {
              "level": 5,
              "value": 420
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 9,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 9
            },
            {
              "level": 2,
              "value": 10
            },
            {
              "level": 3,
              "value": 11
            },
            {
              "level": 4,
              "value": 12
            },
            {
              "level": 5,
              "value": 13
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_event_range_pistol",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 2
            }
          ],
          "result_id": "wls2_halloween_event_range_pistol",
          "result_name": "手枪",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "9cf2356eb8ae7d8a679cfb2eaa7d22de8152dd468083bf6bc2d0a967c6914e69"
    },
    {
      "id": "wls2_weapon_range_revolver_4_common",
      "name": "柯尔特-步行者",
      "name_en": "Colt Walker",
      "name_source": "official_zh",
      "description": "与普通步枪相同，有效射程达到 100 码",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_range_revolver_4_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 200,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 310,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 310
            },
            {
              "level": 2,
              "value": 340
            },
            {
              "level": 3,
              "value": 372
            },
            {
              "level": 4,
              "value": 402
            },
            {
              "level": 5,
              "value": 434
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 20.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 9,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 9
            },
            {
              "level": 2,
              "value": 10
            },
            {
              "level": 3,
              "value": 11
            },
            {
              "level": 4,
              "value": 12
            },
            {
              "level": 5,
              "value": 13
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_revolver_4_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 1
            }
          ],
          "result_id": "wls2_weapon_range_revolver_4_common",
          "result_name": "柯尔特-步行者",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_static_event_trader_offer_revolver_4_common",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_revolver_4_common",
          "result_name": "柯尔特-步行者",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_weapon_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_revolver_4_common",
          "result_name": "柯尔特-步行者",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "13506a7fb2eba81c83068bf1633a7bfc9e4166d08d5edd7aa47d772d9c5ce656"
    },
    {
      "id": "wls2_halloween_21_weapon_range_stakegun_4",
      "name": "穿刺者",
      "name_en": "Impaler",
      "name_source": "official_zh",
      "description": "巫医猎人的致命武器",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_halloween_21_weapon_range_stakegun_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 385,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 385
            },
            {
              "level": 2,
              "value": 424
            },
            {
              "level": 3,
              "value": 462
            },
            {
              "level": 4,
              "value": 501
            },
            {
              "level": 5,
              "value": 539
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "dot_time",
          "label": "持续伤害时长",
          "value": 3,
          "unit": "秒"
        },
        {
          "id": "dot_amount",
          "label": "每次持续伤害",
          "value": 100,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 100
            },
            {
              "level": 2,
              "value": 150
            },
            {
              "level": 3,
              "value": 200
            },
            {
              "level": 4,
              "value": 250
            },
            {
              "level": 5,
              "value": 300
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 12,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 12
            },
            {
              "level": 2,
              "value": 13
            },
            {
              "level": 3,
              "value": 14
            },
            {
              "level": 4,
              "value": 15
            },
            {
              "level": 5,
              "value": 16
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_range_stakegun_4",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_25_currency_pumpkin",
              "name": "幽灵南瓜",
              "amount": 600
            }
          ],
          "result_id": "wls2_halloween_21_weapon_range_stakegun_4",
          "result_name": "穿刺者",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_halloween_21_weapon_range_stakegun_4_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_1",
              "name": "松木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_nails_1",
              "name": "铜紧固件",
              "amount": 1
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_1",
              "name": "铜制武器零件",
              "amount": 2
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "0a79fd4d46848518f8161a55a02f38bf4a9f06ee08057e10579dbb681cb9405a"
    },
    {
      "id": "wls2_halloween_stakegun_4",
      "name": "穿刺者",
      "name_en": "Impaler",
      "name_source": "official_zh",
      "description": "恶魔猎人的致命武器",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_halloween_stakegun_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 385,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 385
            },
            {
              "level": 2,
              "value": 424
            },
            {
              "level": 3,
              "value": 462
            },
            {
              "level": 4,
              "value": 501
            },
            {
              "level": 5,
              "value": 539
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "dot_time",
          "label": "持续伤害时长",
          "value": 3,
          "unit": "秒"
        },
        {
          "id": "dot_amount",
          "label": "每次持续伤害",
          "value": 100,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 100
            },
            {
              "level": 2,
              "value": 150
            },
            {
              "level": 3,
              "value": 200
            },
            {
              "level": 4,
              "value": 250
            },
            {
              "level": 5,
              "value": 300
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 12,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 12
            },
            {
              "level": 2,
              "value": 13
            },
            {
              "level": 3,
              "value": 14
            },
            {
              "level": 4,
              "value": 15
            },
            {
              "level": 5,
              "value": 16
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_stakegun_4",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 3
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 4
            },
            {
              "id": "wls_bear_claw",
              "name": "熊爪",
              "amount": 3
            }
          ],
          "result_id": "wls2_halloween_stakegun_4",
          "result_name": "穿刺者",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "0a79fd4d46848518f8161a55a02f38bf4a9f06ee08057e10579dbb681cb9405a"
    },
    {
      "id": "wls2_weapon_easter_22_colt",
      "name": "集市柯尔特左轮",
      "name_en": "Fair Colt",
      "name_source": "official_zh",
      "description": "闪亮且五颜六色的顶级柯尔特左轮。是时候找点乐子了！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_easter_22_colt",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 170,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 615,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 615
            },
            {
              "level": 2,
              "value": 675
            },
            {
              "level": 3,
              "value": 745
            },
            {
              "level": 4,
              "value": 800
            },
            {
              "level": 5,
              "value": 865
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 18.0
            },
            {
              "level": 3,
              "value": 21.0
            },
            {
              "level": 4,
              "value": 24.0
            },
            {
              "level": 5,
              "value": 27.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 25,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 25
            },
            {
              "level": 2,
              "value": 27
            },
            {
              "level": 3,
              "value": 30
            },
            {
              "level": 4,
              "value": 32
            },
            {
              "level": 5,
              "value": 35
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_easter_22_trader_easter_colt",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_24_currency_egg",
              "name": "复活节彩蛋",
              "amount": 500
            }
          ],
          "result_id": "wls2_weapon_easter_22_colt",
          "result_name": "集市柯尔特左轮",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_colt_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
              "amount": 4
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "4ad6966c738dbe7f579ff441f1819c0a24401d3d06b6a75b47cd52a88d1fcb0f"
    },
    {
      "id": "wls2_weapon_easter_colt",
      "name": "集市柯尔特左轮",
      "name_en": "Fair Colt",
      "name_source": "official_zh",
      "description": "闪亮且五颜六色的顶级柯尔特左轮。是时候找点乐子了！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_easter_colt",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 200,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 638,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 638
            },
            {
              "level": 2,
              "value": 704
            },
            {
              "level": 3,
              "value": 770
            },
            {
              "level": 4,
              "value": 836
            },
            {
              "level": 5,
              "value": 902
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 18.0
            },
            {
              "level": 3,
              "value": 21.0
            },
            {
              "level": 4,
              "value": 24.0
            },
            {
              "level": 5,
              "value": 27.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 19,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 19
            },
            {
              "level": 2,
              "value": 21
            },
            {
              "level": 3,
              "value": 23
            },
            {
              "level": 4,
              "value": 25
            },
            {
              "level": 5,
              "value": 27
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_easter_colt",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 1000
            }
          ],
          "result_id": "wls2_weapon_easter_colt",
          "result_name": "集市柯尔特左轮",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_colt_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 4
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "4ad6966c738dbe7f579ff441f1819c0a24401d3d06b6a75b47cd52a88d1fcb0f"
    },
    {
      "id": "wls2_weapon_easter_22_pepperbox_t4",
      "name": "集市胡椒盒手枪",
      "name_en": "Fair Pepperbox",
      "name_source": "official_zh",
      "description": "耀眼！聒噪！就像集市的烟花一样。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_easter_22_pepperbox_t4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 200,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 500,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 500
            },
            {
              "level": 2,
              "value": 544
            },
            {
              "level": 3,
              "value": 593
            },
            {
              "level": 4,
              "value": 647
            },
            {
              "level": 5,
              "value": 705
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 8.0
            },
            {
              "level": 3,
              "value": 10.0
            },
            {
              "level": 4,
              "value": 13.0
            },
            {
              "level": 5,
              "value": 15.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 20,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 20
            },
            {
              "level": 2,
              "value": 22
            },
            {
              "level": 3,
              "value": 24
            },
            {
              "level": 4,
              "value": 26
            },
            {
              "level": 5,
              "value": 28
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_pepperbox_t4_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
              "amount": 4
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "48dbba8973c8ec0a2f19a45a194fd7defe67d00f08f7e838e203f59413ea1fb2"
    },
    {
      "id": "wls2_weapon_easter_pepperbox",
      "name": "集市胡椒盒手枪",
      "name_en": "Fair Pepperbox",
      "name_source": "official_zh",
      "description": "耀眼！聒噪！就像集市的烟花一样。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_easter_pepperbox",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 407,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 407
            },
            {
              "level": 2,
              "value": 440
            },
            {
              "level": 3,
              "value": 484
            },
            {
              "level": 4,
              "value": 523
            },
            {
              "level": 5,
              "value": 567
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 12,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 12
            },
            {
              "level": 2,
              "value": 13
            },
            {
              "level": 3,
              "value": 15
            },
            {
              "level": 4,
              "value": 16
            },
            {
              "level": 5,
              "value": 17
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_easter_pepperbox",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 600
            }
          ],
          "result_id": "wls2_weapon_easter_pepperbox",
          "result_name": "集市胡椒盒手枪",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_pepperbox_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
              "amount": 4
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "48dbba8973c8ec0a2f19a45a194fd7defe67d00f08f7e838e203f59413ea1fb2"
    },
    {
      "id": "wls2_weapon_easter_22_mallet",
      "name": "复活节木槌",
      "name_en": "Easter Mallet",
      "name_source": "official_zh",
      "description": "一把集市上的彩色木槌。柄上写着：“晚安”。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "棍棒与锤",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_easter_22_mallet",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 90,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 480,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 480
            },
            {
              "level": 2,
              "value": 530
            },
            {
              "level": 3,
              "value": 580
            },
            {
              "level": 4,
              "value": 630
            },
            {
              "level": 5,
              "value": 680
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 8.0
            },
            {
              "level": 3,
              "value": 10.0
            },
            {
              "level": 4,
              "value": 13.0
            },
            {
              "level": 5,
              "value": 15.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 19,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 19
            },
            {
              "level": 2,
              "value": 21
            },
            {
              "level": 3,
              "value": 23
            },
            {
              "level": 4,
              "value": 25
            },
            {
              "level": 5,
              "value": 27
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_mallet_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 2
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "860034db285f055a40f2f5eed90b3fd608bd3c29d8adae878d8038239224dd46"
    },
    {
      "id": "wls2_weapon_easter_22_mace_t4",
      "name": "彩绘狼牙棒",
      "name_en": "Painted Mace",
      "name_source": "official_zh",
      "description": "涂有节日彩绘的近战武器，适合用来砸烂彩蛋，以及脑袋。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "棍棒与锤",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_easter_22_mace_t4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 17,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 17
            },
            {
              "level": 2,
              "value": 19
            },
            {
              "level": 3,
              "value": 21
            },
            {
              "level": 4,
              "value": 23
            },
            {
              "level": 5,
              "value": 25
            }
          ]
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 437,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 437
            },
            {
              "level": 2,
              "value": 476
            },
            {
              "level": 3,
              "value": 519
            },
            {
              "level": 4,
              "value": 566
            },
            {
              "level": 5,
              "value": 617
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 8.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 8.0
            },
            {
              "level": 2,
              "value": 10.0
            },
            {
              "level": 3,
              "value": 15.0
            },
            {
              "level": 4,
              "value": 18.0
            },
            {
              "level": 5,
              "value": 20.0
            }
          ]
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 30.0
            },
            {
              "level": 3,
              "value": 50.0
            },
            {
              "level": 4,
              "value": 70.0
            },
            {
              "level": 5,
              "value": 100
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_mace_t4_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 2
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "4359f4620e9a54f4108fa4f18a03fef601cfd512f8801a51b0ee2b8b24c18150"
    },
    {
      "id": "wls2_weapon_range_rifle_4_epic",
      "name": "M1903 斯普林菲尔德",
      "name_en": "M1903 Springfield",
      "name_source": "official_zh",
      "description": "哪怕是一名商人也能用这支步枪击退一群狂暴的野牛！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 4,
      "rarity": "epic",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_range_rifle_4_epic",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 226,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 930,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 930
            },
            {
              "level": 2,
              "value": 1022
            },
            {
              "level": 3,
              "value": 1115
            },
            {
              "level": 4,
              "value": 1208
            },
            {
              "level": 5,
              "value": 1301
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "slow_time",
          "label": "减速时长",
          "value": 0.7,
          "unit": "秒",
          "levels": [
            {
              "level": 1,
              "value": 0.7
            },
            {
              "level": 2,
              "value": 0.8
            },
            {
              "level": 3,
              "value": 0.9
            },
            {
              "level": 4,
              "value": 1
            },
            {
              "level": 5,
              "value": 1.25
            }
          ]
        },
        {
          "id": "slow_modifier",
          "label": "减速幅度",
          "value": 30.0,
          "unit": "%"
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 8.0
            },
            {
              "level": 3,
              "value": 10.0
            },
            {
              "level": 4,
              "value": 13.0
            },
            {
              "level": 5,
              "value": 15.0
            }
          ]
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 20.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 28,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 28
            },
            {
              "level": 2,
              "value": 31
            },
            {
              "level": 3,
              "value": 33
            },
            {
              "level": 4,
              "value": 36
            },
            {
              "level": 5,
              "value": 39
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_rifle_4_epic",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 10
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 5
            },
            {
              "id": "wls2_resourse_epic_industrial_gunparts",
              "name": "工业零件",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_range_rifle_4_epic",
          "result_name": "M1903 斯普林菲尔德",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "54d0bdf4bd361fbe4e2c0ad98afca058c9328e6f81e13562c5e2483f148017d1"
    },
    {
      "id": "wls2_weapon_range_rifle_4_common",
      "name": "亨利 .44 步枪",
      "name_en": "Henry .44 rifle",
      "name_source": "official_zh",
      "description": "本杰明·泰勒·亨利设计，精准，顺滑，易于清理。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_range_rifle_4_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 230,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 372,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 372
            },
            {
              "level": 2,
              "value": 409
            },
            {
              "level": 3,
              "value": 447
            },
            {
              "level": 4,
              "value": 483
            },
            {
              "level": 5,
              "value": 520
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 20.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 11,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 11
            },
            {
              "level": 2,
              "value": 12
            },
            {
              "level": 3,
              "value": 13
            },
            {
              "level": 4,
              "value": 14
            },
            {
              "level": 5,
              "value": 16
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_rifle_4_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_range_rifle_4_common",
          "result_name": "亨利 .44 步枪",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_static_event_trader_offer_rifle_4_common",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_rifle_4_common",
          "result_name": "亨利 .44 步枪",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_weapon_9",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_rifle_4_common",
          "result_name": "亨利 .44 步枪",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "ade6fbeac7db3e99c266f37cc2d72ac4347c652a2dd34107fb2ff667445dccdd"
    },
    {
      "id": "wls2_weapon_range_musket_4_common",
      "name": "棕色贝丝滑膛枪",
      "name_en": "Brown Bess musket",
      "name_source": "official_zh",
      "description": "如果你能驾驭得了“棕色贝丝”，那你就能驾驭西部世界。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_range_musket_4_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 170,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 373,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 373
            },
            {
              "level": 2,
              "value": 410
            },
            {
              "level": 3,
              "value": 448
            },
            {
              "level": 4,
              "value": 485
            },
            {
              "level": 5,
              "value": 523
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 20.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 11,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 11
            },
            {
              "level": 2,
              "value": 12
            },
            {
              "level": 3,
              "value": 13
            },
            {
              "level": 4,
              "value": 15
            },
            {
              "level": 5,
              "value": 16
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_musket_4_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 1
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_range_musket_4_common",
          "result_name": "棕色贝丝滑膛枪",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_weapon_8",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_musket_4_common",
          "result_name": "棕色贝丝滑膛枪",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "6129bf86b8f45be703ccda110aed30e2ac859fc386d7db823b6cf8b127c14465"
    }
  ]
};
