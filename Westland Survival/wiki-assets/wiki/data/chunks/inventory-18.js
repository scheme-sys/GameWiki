/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-inventory-18"] = {
  "section": "inventory",
  "records": [
    {
      "id": "wls2_consumable_caribu_steak_6_common",
      "item_id": "wls2_consumable_caribu_steak_6_common",
      "name": "驯鹿牛排",
      "name_en": "Caribou steak",
      "name_source": "official_zh",
      "description": "一块炸驯鹿肉是真正的雪地征服者的食物",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_caribu_steak_6_common",
      "image_id": "wls2_consumable_caribu_steak_6_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 35,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_caribu_steak_6_common_temp_health",
          "label": "生命上限增加",
          "value": 500,
          "unit": "",
          "duration": 7200,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_caribu_steak_6_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_meat_6",
              "name": "多汁的大腿",
              "amount": 2
            },
            {
              "id": "wls_berry",
              "name": "蓝莓",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_caribu_steak_6_common",
          "result_name": "驯鹿牛排",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_caribu_steak_6_common",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_caribu_steak_6_common_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "df875b22dc9feaf5f6aedb38cdae9a7cb999fdb16aeaef26b598d1a5371ec052",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 35,
            "display": "35 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_injun_drink_6_uncommon",
      "item_id": "wls2_consumable_injun_drink_6_uncommon",
      "name": "因纽特针叶茶",
      "name_en": "Inuit coniferous tea",
      "name_source": "official_zh",
      "description": "一种根据北方土著居民的秘方酿制的饮品。能够振奋身体，恢复健康。",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "饮品",
      "tier": 6,
      "rarity": "uncommon",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_injun_drink_6_uncommon",
      "image_id": "wls2_consumable_injun_drink_6_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 35,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_injun_drink_6_uncommon_temp_health",
          "label": "生命上限增加",
          "value": 600,
          "unit": "",
          "duration": 3600,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_injun_drink_6_uncommon_temp_snow_resistance",
          "label": "雪堆减速",
          "value": 20.0,
          "unit": "%",
          "duration": 3600,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_injun_drink_6_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_flask_water_1",
              "name": "装满了的罐子",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_spice_1",
              "name": "香料",
              "amount": 2
            },
            {
              "id": "wls2_cooking_ingredient_leafes_6",
              "name": "北方草药",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_injun_drink_6_uncommon",
          "result_name": "因纽特针叶茶",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_injun_drink_6_uncommon",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_injun_drink_6_uncommon_name",
        "sorting_group": "food_drink",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "23f726ab739c2ac4a30925ae215dbf16eab8879d79cdd46abb8cea3c034b339e",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 35,
            "display": "35 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_injun_drink_6_rare",
      "item_id": "wls2_consumable_injun_drink_6_rare",
      "name": "强烈提取",
      "name_en": "Strong extract",
      "name_source": "official_zh",
      "description": "这种天然草药提高了您的健康，并在战斗中给予您额外的伤害",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "饮品",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_consumable_injun_drink_6_rare",
      "image_id": "wls2_consumable_injun_drink_6_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 35,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_injun_drink_6_rare_temp_health",
          "label": "生命上限增加",
          "value": 700,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_injun_drink_6_rare_temp_strength",
          "label": "力量",
          "value": 250,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_injun_drink_6_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_flask_water_1",
              "name": "装满了的罐子",
              "amount": 1
            },
            {
              "id": "wls_whiskey",
              "name": "威士忌",
              "amount": 2
            },
            {
              "id": "wls2_resourse_miscellaneous_spice_1",
              "name": "香料",
              "amount": 3
            },
            {
              "id": "wls2_cooking_ingredient_leafes_6",
              "name": "北方草药",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_injun_drink_6_rare",
          "result_name": "强烈提取",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_injun_drink_6_rare",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_injun_drink_6_rare_name",
        "sorting_group": "food_drink",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4178b53cd96cdc0d7645f69e543f7a551638142d1b4ed03e898f93b0a3e469fe",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 35,
            "display": "35 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_injun_drink_6_common",
      "item_id": "wls2_consumable_injun_drink_6_common",
      "name": "针叶树提取物",
      "name_en": "Coniferous extract",
      "name_source": "official_zh",
      "description": "一种由北方草药酿制而成的饮料是你在北方荒野中恢复体力所需要的",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "饮品",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_injun_drink_6_common",
      "image_id": "wls2_consumable_injun_drink_6_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 35,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_injun_drink_6_common_temp_health",
          "label": "生命上限增加",
          "value": 500,
          "unit": "",
          "duration": 7200,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_injun_drink_6_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_flask_water_1",
              "name": "装满了的罐子",
              "amount": 1
            },
            {
              "id": "wls2_cooking_ingredient_leafes_6",
              "name": "北方草药",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_injun_drink_6_common",
          "result_name": "针叶树提取物",
          "amount": 1
        },
        {
          "id": "wls2_alaska_trader_2_drink_bonefire_6",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_injun_drink_6_common",
          "result_name": "针叶树提取物",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_injun_drink_6_common",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_injun_drink_6_common_name",
        "sorting_group": "food_drink",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "2e700053d492efc3f922a9163f1a36ebd8ad9339c54f5b55d926b7b6643a77ba",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 35,
            "display": "35 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_st_patricks_day_pie_t7",
      "item_id": "wls2_consumable_st_patricks_day_pie_t7",
      "name": "三叶草的爱尔兰派",
      "name_en": "Shamrock's Irish Pie",
      "name_source": "official_zh",
      "description": "一个金黄色的外壳派，提升你的信心",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_consumable_st_patricks_day_pie",
      "image_id": "wls2_consumable_st_patricks_day_pie_t7",
      "equipment_id": null,
      "stats": [],
      "effects": [
        {
          "id": "wls2_consumable_st_patricks_day_pie_t7_temp_strength",
          "label": "力量",
          "value": 25,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_st_patricks_day_pie_t7_dexterity",
          "label": "攻击速度",
          "value": 25,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_st_patricks_day_pie_t7_temp_stamina",
          "label": "体力属性",
          "value": 25,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_st_patricks_day_pie_t7_temp_spirit",
          "label": "精神",
          "value": 25,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_st_patricks_day_pie_t7",
        "reason": "physical_inventory_stack",
        "name_key": "wls2_consumable_st_patricks_day_pie_name",
        "sorting_group": "food_dish",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4e724de747000ffe5f925302e0b728ab5f79119edc01a134543377586f07dfc9"
    },
    {
      "id": "wls2_consumable_bass_cakes_7_rare",
      "item_id": "wls2_consumable_bass_cakes_7_rare",
      "name": "低音蛋糕",
      "name_en": "Bass cakes",
      "name_source": "official_zh",
      "description": "一道用玉米粉煎鲈鱼片制成的丰盛菜肴。旅行者和猎人们的最爱",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_consumable_bass_cakes_7_rare",
      "image_id": "wls2_consumable_bass_cakes_7_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 40,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_beef_ragout_7_rare_temp_health",
          "label": "生命上限增加",
          "value": 800,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_beef_ragout_7_rare_temp_ghost_damage_resistance",
          "label": "防护 对 抗 鬼魂",
          "value": 5.0,
          "unit": "%",
          "duration": 1800,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_bass_cakes_7_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls_fish_t7_bass",
              "name": "低音",
              "amount": 4
            },
            {
              "id": "wls2_consumable_corn_1",
              "name": "玉米",
              "amount": 10
            },
            {
              "id": "wls2_resourse_miscellaneous_spice_1",
              "name": "香料",
              "amount": 4
            },
            {
              "id": "wls2_cooking_ingredient_conserved_chili_7",
              "name": "罐装辣椒",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_bass_cakes_7_rare",
          "result_name": "低音蛋糕",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_bass_cakes_7_rare",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_bass_cakes_7_rare_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "8497dce15251902400f146e97ef2ecade6705ec967c859dd2629bd2a84665c7d",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_taco_7_uncommon",
      "item_id": "wls2_consumable_taco_7_uncommon",
      "name": "塔可",
      "name_en": "Taco",
      "name_source": "official_zh",
      "description": "香料，既能激活你，也能激活你的宠物",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 7,
      "rarity": "uncommon",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls_2_consumable_taco_7_uncommon",
      "image_id": "wls2_consumable_taco_7_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 40,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_taco_7_uncommon_temp_health",
          "label": "生命上限增加",
          "value": 700,
          "unit": "",
          "duration": 3600,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_taco_7_uncommon_temp_pet_armor",
          "label": "你的宠物受到的伤害",
          "value": 5.0,
          "unit": "%",
          "duration": 3600,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_taco_7_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_meat_7",
              "name": "优质肉",
              "amount": 7
            },
            {
              "id": "wls2_consumable_corn_1",
              "name": "玉米",
              "amount": 7
            },
            {
              "id": "wls2_resourse_miscellaneous_salt_1",
              "name": "盐",
              "amount": 7
            },
            {
              "id": "wls2_cooking_ingredient_conserved_chili_7",
              "name": "罐装辣椒",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_taco_7_uncommon",
          "result_name": "塔可",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_taco_7_uncommon",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_taco_7_uncommon_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "9633d874d20d8cc25149de0cbb067ee0f2290f1be5a119a008cf9e7cde835a17",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_pueblo_firepot_7_uncommon",
      "item_id": "wls2_consumable_pueblo_firepot_7_uncommon",
      "name": "普韦布洛 火锅",
      "name_en": "Pueblo firepot",
      "name_source": "official_zh",
      "description": "如此辣，甚至火都怕它",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 7,
      "rarity": "uncommon",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_consumable_pueblo_firepot_7_uncommon",
      "image_id": "wls2_consumable_pueblo_firepot_7_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 40,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_pueblo_firepot_7_uncommon_temp_health",
          "label": "生命上限增加",
          "value": 700,
          "unit": "",
          "duration": 3600,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_pueblo_firepot_7_uncommon_temp_fire_resistance",
          "label": "耐火性",
          "value": 20.0,
          "unit": "%",
          "duration": 3600,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pueblo_firepot_7_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_meat_7",
              "name": "优质肉",
              "amount": 6
            },
            {
              "id": "wls2_consumable_tomato_1",
              "name": "番茄",
              "amount": 12
            },
            {
              "id": "wls2_resourse_miscellaneous_salt_1",
              "name": "盐",
              "amount": 6
            },
            {
              "id": "wls2_cooking_ingredient_conserved_chili_7",
              "name": "罐装辣椒",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_pueblo_firepot_7_uncommon",
          "result_name": "普韦布洛 火锅",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pueblo_firepot_7_uncommon",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_pueblo_firepot_7_uncommon_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "feef88f956ce78d0a58147313a05f2743fe44826c90ff617894ed30a9b638394",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_stewed_tomato_7_common",
      "item_id": "wls2_consumable_stewed_tomato_7_common",
      "name": "炖番茄",
      "name_en": "Stewed tomatoes",
      "name_source": "official_zh",
      "description": "提升健康和加速恢复",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_consumable_stewed_tomato_7_common",
      "image_id": "wls2_consumable_stewed_tomato_7_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 40,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_stewed_tomato_7_common_temp_health",
          "label": "生命上限增加",
          "value": 600,
          "unit": "",
          "duration": 7200,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_stewed_tomato_7_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_tomato_1",
              "name": "番茄",
              "amount": 8
            }
          ],
          "result_id": "wls2_consumable_stewed_tomato_7_common",
          "result_name": "炖番茄",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_stewed_tomato_7_common",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_stewed_tomato_7_common_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "9e603c8ebbf957ed3c78ba09a4bdee4b1e6c08ca3a30110ba9127a35379264c6",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_roasted_bone_marrow_t7",
      "item_id": "wls2_consumable_roasted_bone_marrow_t7",
      "name": "熏骨髓",
      "name_en": "Smoked Marrowbone",
      "name_source": "official_zh",
      "description": "足够丰盛以使你变得坚韧并增加你的宠物的攻击力的额外咬合力",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_roasted_bone_marrow",
      "image_id": "wls2_consumable_roasted_bone_marrow_t7",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 40,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_roasted_bone_marrow_t7_temp_pet_damage",
          "label": "宠物额外伤害",
          "value": 300,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_bloody_molly_7_rare_temp_health",
          "label": "生命上限增加",
          "value": 800,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_roasted_bone_marrow_t7",
        "reason": "physical_inventory_stack",
        "name_key": "wls2_consumable_roasted_bone_marrow_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "2bb89d54e55f68147c3d897a4434fac6f67813621ea832f999aac61d2c212355",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_beef_ragout_7_rare",
      "item_id": "wls2_consumable_beef_ragout_7_rare",
      "name": "牛肉 炖菜",
      "name_en": "Beef stew",
      "name_source": "official_zh",
      "description": "在这个炖菜之后，没有鬼会吓到你",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_consumable_beef_ragout_7_rare",
      "image_id": "wls2_consumable_beef_ragout_7_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 40,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_beef_ragout_7_rare_temp_health",
          "label": "生命上限增加",
          "value": 800,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_beef_ragout_7_rare_temp_ghost_damage_resistance",
          "label": "防护 对 抗 鬼魂",
          "value": 5.0,
          "unit": "%",
          "duration": 1800,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_beef_ragout_7_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_meat_7",
              "name": "优质肉",
              "amount": 8
            },
            {
              "id": "wls2_consumable_meat_tenderloin",
              "name": "肉片",
              "amount": 8
            },
            {
              "id": "wls2_resourse_miscellaneous_spice_1",
              "name": "香料",
              "amount": 4
            },
            {
              "id": "wls2_cooking_ingredient_conserved_chili_7",
              "name": "罐装辣椒",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_beef_ragout_7_rare",
          "result_name": "牛肉 炖菜",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_beef_ragout_7_rare",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_beef_ragout_7_rare_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5489785917637b57a4d05e3b7755147b28844ec8d83b3247f53c2331cfbdb5ef",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_rib_steak_7_common",
      "item_id": "wls2_consumable_rib_steak_7_common",
      "name": "肋骨牛排",
      "name_en": "Rib steak",
      "name_source": "official_zh",
      "description": "提升健康和恢复的高级牛排",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_consumable_rib_steak_7_common",
      "image_id": "wls2_consumable_rib_steak_7_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 40,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_rib_steak_7_common_temp_health",
          "label": "生命上限增加",
          "value": 600,
          "unit": "",
          "duration": 7200,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_rib_steak_7_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_meat_7",
              "name": "优质肉",
              "amount": 2
            },
            {
              "id": "wls2_resourse_miscellaneous_salt_1",
              "name": "盐",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_rib_steak_7_common",
          "result_name": "肋骨牛排",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_rib_steak_7_common",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_rib_steak_7_common_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "98e0461e101d3469ff407162af6578ae018b2d6da4730172c33a6738e45897d3",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_chili_con_carne_7_rare",
      "item_id": "wls2_consumable_chili_con_carne_7_rare",
      "name": "辣椒与肉",
      "name_en": "Chili con carne",
      "name_source": "official_zh",
      "description": "在面对最强大的敌人时给予信心",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_consumable_chili_con_carne_7_rare",
      "image_id": "wls2_consumable_chili_con_carne_7_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 40,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_chili_con_carne_7_rare_temp_health",
          "label": "生命上限增加",
          "value": 800,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_chili_con_carne_7_rare_temp_damage_to_bosses",
          "label": "对帮派领袖造成的伤害",
          "value": 5.0,
          "unit": "%",
          "duration": 1800,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_chili_con_carne_7_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_meat_7",
              "name": "优质肉",
              "amount": 8
            },
            {
              "id": "wls2_consumable_beans_1",
              "name": "青豆",
              "amount": 8
            },
            {
              "id": "wls2_resourse_miscellaneous_salt_1",
              "name": "盐",
              "amount": 8
            },
            {
              "id": "wls2_cooking_ingredient_conserved_chili_7",
              "name": "罐装辣椒",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_chili_con_carne_7_rare",
          "result_name": "辣椒与肉",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_chili_con_carne_7_rare",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_chili_con_carne_7_rare_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a62db4fd72e9eace0e5187dc100e694bba2ac830b9f54f5c06563fb55cd73805",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_lime_squash_7_common",
      "item_id": "wls2_consumable_lime_squash_7_common",
      "name": "石灰鲜榨汁",
      "name_en": "Lime squash",
      "name_source": "official_zh",
      "description": "一种清爽和芳香的饮料",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "饮品",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_consumable_lime_squash_7_common",
      "image_id": "wls2_consumable_lime_squash_7_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 40,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_lime_squash_7_common_temp_health",
          "label": "生命上限增加",
          "value": 600,
          "unit": "",
          "duration": 7200,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_lime_squash_7_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_flask_water_1",
              "name": "装满了的罐子",
              "amount": 1
            },
            {
              "id": "wls2_cooking_ingredient_lime_crate_7",
              "name": "石灰 箱",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_lime_squash_7_common",
          "result_name": "石灰鲜榨汁",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_lime_squash_7_common",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_lime_squash_7_common_name",
        "sorting_group": "food_drink",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5d1a990dd75e9dc37ad023513fd51b098dc34e894bf5fcd3fee2b634011f956a",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_mohito_7_uncommon",
      "item_id": "wls2_consumable_mohito_7_uncommon",
      "name": "莫希托",
      "name_en": "Mohito",
      "name_source": "official_zh",
      "description": "完美的冷却伴侣对辣的餐点和热的气候",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "饮品",
      "tier": 7,
      "rarity": "uncommon",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_consumable_mohito_7_uncommon",
      "image_id": "wls2_consumable_mohito_7_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 40,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_mohito_7_uncommon_temp_health",
          "label": "生命上限增加",
          "value": 700,
          "unit": "",
          "duration": 3600,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_mohito_7_uncommon_temp_cool",
          "label": "耐热",
          "value": 6,
          "unit": "",
          "duration": 3600,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_mohito_7_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_flask_water_1",
              "name": "装满了的罐子",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_spice_1",
              "name": "香料",
              "amount": 2
            },
            {
              "id": "wls2_cooking_ingredient_lime_crate_7",
              "name": "石灰 箱",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_mohito_7_uncommon",
          "result_name": "莫希托",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_mohito_7_uncommon",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_mohito_7_uncommon_name",
        "sorting_group": "food_drink",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "6d9d63913d2afca8c084d3036279a4d37d65734a0914e8f346457145f58a779d",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_bloody_molly_7_rare",
      "item_id": "wls2_consumable_bloody_molly_7_rare",
      "name": "血腥玛丽",
      "name_en": "Bloody Molly",
      "name_source": "official_zh",
      "description": "尝起来像复仇和番茄",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "饮品",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_consumable_bloody_molly_7_rare",
      "image_id": "wls2_consumable_bloody_molly_7_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 40,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_bloody_molly_7_rare_temp_health",
          "label": "生命上限增加",
          "value": 800,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_bloody_molly_7_rare_temp_crit_chance",
          "label": "暴击率",
          "value": 7.0,
          "unit": "%",
          "duration": 1800,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_bloody_molly_7_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_tomato_1",
              "name": "番茄",
              "amount": 2
            },
            {
              "id": "wls_whiskey",
              "name": "威士忌",
              "amount": 2
            },
            {
              "id": "wls2_resourse_miscellaneous_spice_1",
              "name": "香料",
              "amount": 4
            },
            {
              "id": "wls2_cooking_ingredient_lime_crate_7",
              "name": "石灰 箱",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_bloody_molly_7_rare",
          "result_name": "血腥玛丽",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_bloody_molly_7_rare",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_bloody_molly_7_rare_name",
        "sorting_group": "food_drink",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "312eff2c0f7c1679184a86920c07dae0391fd2890df8008a59cd3c26301e8725",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_ws_day2021_candy",
      "item_id": "wls2_ws_day2021_candy",
      "name": "周年庆糖果",
      "name_en": "Anniversary candy",
      "name_source": "official_zh",
      "description": "用甜蜜来提醒节日的到来，还能提供许多能量",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "糖果",
      "tier": 8,
      "rarity": "uncommon",
      "max_stack": 50,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_ws_day2021_candy",
      "image_id": "wls2_ws_day2021_candy",
      "equipment_id": null,
      "stats": [
        {
          "id": "energy",
          "label": "恢复体力",
          "value": 5,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_ws_day2021_candy",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_ws_day2021_candy_name",
        "sorting_group": "candy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "0b79f8da84ea741723842aab2721b518d329a411c7a37dc625592b1a7588c32e",
      "numeric": {
        "summary": [
          {
            "key": "energy",
            "label": "恢复体力",
            "unit": "",
            "value": 5,
            "display": "5"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_heal_bandage_1",
      "item_id": "wls2_consumable_heal_bandage_1",
      "name": "绷带",
      "name_en": "Selfmade bandage",
      "name_source": "official_zh",
      "description": "能够治愈伤口。配合药膏和威士忌使用效果更佳。",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "绷带",
      "tier": 1,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_heal_bandage_1",
      "image_id": "wls2_consumable_heal_bandage_1",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 60,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_heal_bandage_1_hebalist",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_herb_1",
              "name": "医用草药",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_heal_bandage_1",
          "result_name": "绷带",
          "amount": 1
        },
        {
          "id": "wls2_consumable_heal_bandage_1",
          "label": "随身制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_herb_1",
              "name": "医用草药",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_heal_bandage_1",
          "result_name": "绷带",
          "amount": 1
        },
        {
          "id": "wls2_ftue_ab_tutorial_trader_slot_5",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_heal_bandage_1",
          "result_name": "绷带",
          "amount": 20,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_heal_bandage_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_bandage_name",
        "sorting_group": "heal_bandage",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "05dc8afc99c50c548a2e124e41d6290fa1bbb99954a822a6d6ccc74aeb49d9bd",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 60,
            "display": "60 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_resourse_miscellaneous_herb_1",
      "item_id": "wls2_resourse_miscellaneous_herb_1",
      "name": "医用草药",
      "name_en": "Medicative herb",
      "name_source": "official_zh",
      "description": "用来治疗伤口，可加工制成药草溶剂",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "草药",
      "tier": 1,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/wls_medicative_herb",
      "image_id": "wls2_resourse_miscellaneous_herb_1",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 30,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_1coins_dynamic_south_trader_offer_herb_1",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_resourse_miscellaneous_herb_1",
          "result_name": "医用草药",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_trader_herb_1_price1",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_resourse_miscellaneous_herb_1",
          "result_name": "医用草药",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_heal_bandage_1_hebalist",
          "label": "工作台制作",
          "target_id": "wls2_consumable_heal_bandage_1",
          "name": "绷带",
          "amount": 1
        },
        {
          "id": "wls2_consumable_heal_bandage_1",
          "label": "随身制作",
          "target_id": "wls2_consumable_heal_bandage_1",
          "name": "绷带",
          "amount": 1
        },
        {
          "id": "wls2_consumable_flask_heal_1",
          "label": "工作台制作",
          "target_id": "wls2_consumable_flask_heal_1",
          "name": "草药溶剂",
          "amount": 3
        },
        {
          "id": "wls_static_south_trader_offer_herb_1_to_herb_2",
          "label": "交易兑换",
          "target_id": "wls2_resourse_miscellaneous_herb_2",
          "name": "车前草",
          "amount": 2
        },
        {
          "id": "wls2_trader_herb_2_price2",
          "label": "交易兑换",
          "target_id": "wls2_resourse_miscellaneous_herb_2",
          "name": "车前草",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_pumas_1",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_pumas_1",
          "name": "美洲狮诱饵 I",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_bait_bears_1",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_1",
          "name": "熊诱饵 I",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_heal_1",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_1",
          "name": "草本疗愈饼干",
          "amount": 5
        }
      ],
      "locations": [
        "森林湖",
        "松树森林"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_herb_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_medicative_herb_name",
        "sorting_group": "heal_herb",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_farm_hide_1",
          "wls2_loc_farm_wood_1"
        ],
        "quest_referenced": true
      },
      "image_key": "6622167fe2be0f7d861a2daeccb7003d9f6aed70a2c0ccb0d114bc16a24e60e6",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 30,
            "display": "30 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_flask_heal_1",
      "item_id": "wls2_consumable_flask_heal_1",
      "name": "草药溶剂",
      "name_en": "Herbal infusion",
      "name_source": "official_zh",
      "description": "治疗用液体，可快速治愈伤口",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "药剂",
      "tier": 1,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/wls_herbal_infusion",
      "image_id": "wls2_consumable_flask_heal_1",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 120,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_flask_heal_1",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_herb_1",
              "name": "医用草药",
              "amount": 3
            },
            {
              "id": "wls2_consumable_flask_water_1",
              "name": "装满了的罐子",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_flask_heal_1",
          "result_name": "草药溶剂",
          "amount": 1
        },
        {
          "id": "wls2_static_town_trader_offer_flsk_heal_1",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_flask_heal_1",
          "result_name": "草药溶剂",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_5coins_dynamic_south_trader_offer_flask_heal_1",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_flask_heal_1",
          "result_name": "草药溶剂",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_oil_heal_1",
          "label": "工作台制作",
          "target_id": "wls2_consumable_oil_heal_1",
          "name": "草本 药膏",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_flask_heal_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_herbal_infusion_name",
        "sorting_group": "heal_flask",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "07b68373111b6c89f0a4153475905a12252ee12838fb3e77c59a3b71f6f2dc12",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 120,
            "display": "120 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_oil_heal_1",
      "item_id": "wls2_consumable_oil_heal_1",
      "name": "草本 药膏",
      "name_en": "Herbal ointment",
      "name_source": "official_zh",
      "description": "用来愈合伤口十分有效",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "药膏",
      "tier": 1,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/wls_salve",
      "image_id": "wls2_consumable_oil_heal_1",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 240,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_oil_heal_1",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_flask_heal_1",
              "name": "草药溶剂",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_vodka_1",
              "name": "酒精",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_oil_heal_1",
          "result_name": "草本 药膏",
          "amount": 1
        },
        {
          "id": "wls2_10coins_dynamic_south_trader_offer_oil_heal_1",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_oil_heal_1",
          "result_name": "草本 药膏",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_oil_heal_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_salve_name",
        "sorting_group": "heal_oil",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "95bfb662c5807058c11d6395726ed54c86efdd77ad8eaba0558cb1a807abad91",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 240,
            "display": "240 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_heal_bandage_2",
      "item_id": "wls2_consumable_heal_bandage_2",
      "name": "轻型绷带",
      "name_en": "Light bandage",
      "name_source": "official_zh",
      "description": "用来包扎程度较轻的伤口",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "绷带",
      "tier": 2,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_heal_bandage_2",
      "image_id": "wls2_consumable_heal_bandage_2",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 120,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_heal_bandage_2",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_2",
              "name": "麻布",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_herb_2",
              "name": "车前草",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_heal_bandage_2",
          "result_name": "轻型绷带",
          "amount": 1
        },
        {
          "id": "wls2_10coins_dynamic_smuggler_offer_bandage_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_heal_bandage_2",
          "result_name": "轻型绷带",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_heal_bandage_2",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Consumable_heal_bandage_2_name",
        "sorting_group": "heal_bandage",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "d69a7ecb4b3b75f00ad4effa405e3b4ad470c13f1c247a8ae84ab15b64a0cf4f",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 120,
            "display": "120 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_resourse_miscellaneous_herb_2",
      "item_id": "wls2_resourse_miscellaneous_herb_2",
      "name": "车前草",
      "name_en": "Plantago",
      "name_source": "official_zh",
      "description": "止血化瘀，恢复伤口。",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "草药",
      "tier": 2,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Resourse_miscellaneous_herb_2",
      "image_id": "wls2_resourse_miscellaneous_herb_2",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 40,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls_static_south_trader_offer_herb_1_to_herb_2",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_herb_1",
              "name": "医用草药",
              "amount": 2
            }
          ],
          "result_id": "wls2_resourse_miscellaneous_herb_2",
          "result_name": "车前草",
          "amount": 1
        },
        {
          "id": "wls2_2coins_dynamic_south_trader_offer_herb_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_resourse_miscellaneous_herb_2",
          "result_name": "车前草",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_trader_herb_2_price2",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_herb_1",
              "name": "医用草药",
              "amount": 3
            }
          ],
          "result_id": "wls2_resourse_miscellaneous_herb_2",
          "result_name": "车前草",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_heal_bandage_2",
          "label": "工作台制作",
          "target_id": "wls2_consumable_heal_bandage_2",
          "name": "轻型绷带",
          "amount": 1
        },
        {
          "id": "wls2_consumable_flask_heal_2",
          "label": "工作台制作",
          "target_id": "wls2_consumable_flask_heal_2",
          "name": "强力药草溶剂",
          "amount": 3
        },
        {
          "id": "wls_static_south_trader_offer_herb_2_to_herb_3",
          "label": "交易兑换",
          "target_id": "wls2_resourse_miscellaneous_herb_3",
          "name": "藿香",
          "amount": 2
        },
        {
          "id": "wls2_trader_herb_3_price3",
          "label": "交易兑换",
          "target_id": "wls2_resourse_miscellaneous_herb_3",
          "name": "藿香",
          "amount": 3
        },
        {
          "id": "wls2_collection_storyline_part_3_quest_22",
          "label": "建设提交",
          "target_id": "wls2_collection_storyline_part_3_quest_22",
          "name": "实验室",
          "amount": 20
        },
        {
          "id": "wls2_consumable_pet_bait_pumas_2",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_pumas_2",
          "name": "美洲狮诱饵 II",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_bait_bears_2",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_2",
          "name": "熊诱饵 II",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_heal_2",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_2",
          "name": "强效治愈饼干",
          "amount": 5
        }
      ],
      "locations": [
        "浓雾湖",
        "古老的橡树森林"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_herb_2",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Resourse_miscellaneous_herb_2_name",
        "sorting_group": "heal_herb",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_farm_hide_2",
          "wls2_loc_farm_wood_2_legacy"
        ],
        "quest_referenced": true
      },
      "image_key": "00a58fb547a67459d87ca74b1f82e74a45b49406983552320a4dc85ef824c19f",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_flask_heal_2",
      "item_id": "wls2_consumable_flask_heal_2",
      "name": "强力药草溶剂",
      "name_en": "Strong herbal infusion",
      "name_source": "official_zh",
      "description": "稀有的药草，可治愈严重的伤口",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "药剂",
      "tier": 2,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_flask_heal_2",
      "image_id": "wls2_consumable_flask_heal_2",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 240,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_flask_heal_2",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_herb_2",
              "name": "车前草",
              "amount": 3
            },
            {
              "id": "wls2_consumable_flask_water_1",
              "name": "装满了的罐子",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_flask_heal_2",
          "result_name": "强力药草溶剂",
          "amount": 1
        },
        {
          "id": "wls2_10coins_dynamic_south_trader_offer_flask_heal_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_flask_heal_2",
          "result_name": "强力药草溶剂",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_oil_heal_2",
          "label": "工作台制作",
          "target_id": "wls2_consumable_oil_heal_2",
          "name": "强效药膏",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_flask_heal_2",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Consumable_flask_heal_2_name",
        "sorting_group": "heal_flask",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "64a16c84d191840230737ab1099747ba672d853a0877e12014fa93b2f3d867bb",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 240,
            "display": "240 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_oil_heal_2",
      "item_id": "wls2_consumable_oil_heal_2",
      "name": "强效药膏",
      "name_en": "Strong ointment",
      "name_source": "official_zh",
      "description": "能够清理伤口上的细菌。",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "药膏",
      "tier": 2,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_oil_heal_2",
      "image_id": "wls2_consumable_oil_heal_2",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 480,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_oil_heal_2",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_flask_heal_2",
              "name": "强力药草溶剂",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_vodka_1",
              "name": "酒精",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_oil_heal_2",
          "result_name": "强效药膏",
          "amount": 1
        },
        {
          "id": "wls2_20coins_dynamic_south_trader_offer_oil_heal_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_oil_heal_2",
          "result_name": "强效药膏",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_oil_heal_2",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Consumable_oil_heal_2_name",
        "sorting_group": "heal_oil",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": true
      },
      "image_key": "3d2be31463de1af5a9911a74991cfc93d9f1c085f8cd5bba37d76e27aabcb981",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 480,
            "display": "480 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_balm_heal_3",
      "item_id": "wls2_consumable_balm_heal_3",
      "name": "消毒软膏",
      "name_en": "Disinfectant balm",
      "name_source": "official_zh",
      "description": "化学与医药方面所有最伟大的进步都在这根实用的管子里",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "治疗用品",
      "tier": 3,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_consumable_balm_heal_3_icon",
      "image_id": "wls2_consumable_balm_heal_3",
      "equipment_id": null,
      "stats": [
        {
          "id": "health",
          "label": "即时恢复生命",
          "value": 720,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 360,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_balm_heal_3",
        "reason": "physical_inventory_stack",
        "name_key": "wls2_consumable_balm_heal_3_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "250a74c6444dcd92f2cba3dfdfa1f964e5c60041c5c632bfa4e9c6129f0c452e",
      "numeric": {
        "summary": [
          {
            "key": "health",
            "label": "即时恢复生命",
            "unit": "点",
            "value": 720,
            "display": "720 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 360,
            "display": "360 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_heal_bandage_3",
      "item_id": "wls2_consumable_heal_bandage_3",
      "name": "绷带",
      "name_en": "Bandage",
      "name_source": "official_zh",
      "description": "用来包扎中等程度的伤口",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "绷带",
      "tier": 3,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_heal_bandage_3",
      "image_id": "wls2_consumable_heal_bandage_3",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 180,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_heal_bandage_3",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_3",
              "name": "亚麻布料",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_herb_3",
              "name": "藿香",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_heal_bandage_3",
          "result_name": "绷带",
          "amount": 1
        },
        {
          "id": "wls2_25coins_dynamic_smuggler_offer_bandage_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_heal_bandage_3",
          "result_name": "绷带",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_town_collection_drugstore_1",
          "label": "建设提交",
          "target_id": "wls2_town_collection_drugstore_1",
          "name": "诊所项目",
          "amount": 20
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_heal_bandage_3",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Consumable_heal_bandage_3_name",
        "sorting_group": "heal_bandage",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "df73ea9aa62cbd285c5089589729d36ff716cd9b290c4f8e39a8ba493b1784d3",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 180,
            "display": "180 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_resourse_miscellaneous_herb_3",
      "item_id": "wls2_resourse_miscellaneous_herb_3",
      "name": "藿香",
      "name_en": "Agastache",
      "name_source": "official_zh",
      "description": "以愈合力见长。",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "草药",
      "tier": 3,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Resourse_miscellaneous_herb_3",
      "image_id": "wls2_resourse_miscellaneous_herb_3",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 50,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls_static_south_trader_offer_herb_2_to_herb_3",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_herb_2",
              "name": "车前草",
              "amount": 2
            }
          ],
          "result_id": "wls2_resourse_miscellaneous_herb_3",
          "result_name": "藿香",
          "amount": 1
        },
        {
          "id": "wls2_3coins_dynamic_south_trader_offer_herb_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_resourse_miscellaneous_herb_3",
          "result_name": "藿香",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_trader_herb_3_price3",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_herb_2",
              "name": "车前草",
              "amount": 3
            }
          ],
          "result_id": "wls2_resourse_miscellaneous_herb_3",
          "result_name": "藿香",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_heal_bandage_3",
          "label": "工作台制作",
          "target_id": "wls2_consumable_heal_bandage_3",
          "name": "绷带",
          "amount": 1
        },
        {
          "id": "wls2_consumable_flask_heal_3",
          "label": "工作台制作",
          "target_id": "wls2_consumable_flask_heal_3",
          "name": "优质药草溶剂",
          "amount": 3
        },
        {
          "id": "wls2_trader_herb_4_price4",
          "label": "交易兑换",
          "target_id": "wls2_resourse_miscellaneous_herb_4",
          "name": "洋甘菊",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_pumas_3",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_pumas_3",
          "name": "美洲狮诱饵 III",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_bait_bears_3",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_3",
          "name": "熊诱饵 III",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_heal_3",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_3",
          "name": "极佳的疗愈饼干",
          "amount": 5
        }
      ],
      "locations": [
        "山湖",
        "干燥森林",
        "雪枫树林"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_herb_3",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Resourse_miscellaneous_herb_3_name",
        "sorting_group": "heal_herb",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_farm_hide_3",
          "Dead_Pine_Forest",
          "wls2_loc_farm_wood_3"
        ],
        "quest_referenced": true
      },
      "image_key": "0aba29cf573ba6b7a977c8260642e55d9469bb23e06363ef39477b5c39419740",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 50,
            "display": "50 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_flask_heal_3",
      "item_id": "wls2_consumable_flask_heal_3",
      "name": "优质药草溶剂",
      "name_en": "Excellent herbal infusion",
      "name_source": "official_zh",
      "description": "妙手回春！",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "药剂",
      "tier": 3,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_flask_heal_3",
      "image_id": "wls2_consumable_flask_heal_3",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 400,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_flask_heal_3",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_herb_3",
              "name": "藿香",
              "amount": 3
            },
            {
              "id": "wls2_consumable_flask_water_1",
              "name": "装满了的罐子",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_flask_heal_3",
          "result_name": "优质药草溶剂",
          "amount": 1
        },
        {
          "id": "wls2_15coins_dynamic_south_trader_offer_flask_heal_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_flask_heal_3",
          "result_name": "优质药草溶剂",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_trader_heal_1_price1",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_flask_heal_3",
          "result_name": "优质药草溶剂",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_swamp_trader_2_flask_heal_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_flask_heal_3",
          "result_name": "优质药草溶剂",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_oil_heal_3",
          "label": "工作台制作",
          "target_id": "wls2_consumable_oil_heal_3",
          "name": "优秀 药膏",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_flask_heal_3",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Consumable_flask_heal_3_name",
        "sorting_group": "heal_flask",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "c9191d7947832db4b33603586fed43158a01263aae9d597cf3cac56f4228c225",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 400,
            "display": "400 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_oil_heal_3",
      "item_id": "wls2_consumable_oil_heal_3",
      "name": "优秀 药膏",
      "name_en": "Excellent ointment",
      "name_source": "official_zh",
      "description": "十分有效的药物。",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "药膏",
      "tier": 3,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_oil_heal_3",
      "image_id": "wls2_consumable_oil_heal_3",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 800,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_oil_heal_3",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_flask_heal_3",
              "name": "优质药草溶剂",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_vodka_1",
              "name": "酒精",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_oil_heal_3",
          "result_name": "优秀 药膏",
          "amount": 1
        },
        {
          "id": "wls2_30coins_dynamic_south_trader_offer_oil_heal_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_oil_heal_3",
          "result_name": "优秀 药膏",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_trader_heal_4_price4",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_oil_heal_3",
          "result_name": "优秀 药膏",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_swamp_trader_2_oil_heal_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_oil_heal_3",
          "result_name": "优秀 药膏",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_oil_heal_3",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Consumable_oil_heal_3_name",
        "sorting_group": "heal_oil",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": true
      },
      "image_key": "e5e00b0b411110f20c438502a154714759d942584460629ffe50d65399b4c6b0",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 800,
            "display": "800 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_balm_heal_4",
      "item_id": "wls2_consumable_balm_heal_4",
      "name": "医用软膏",
      "name_en": "Medicine balm",
      "name_source": "official_zh",
      "description": "这个方便的药包能够挽救最为严重的创伤",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "治疗用品",
      "tier": 4,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_consumable_balm_heal_4_icon",
      "image_id": "wls2_consumable_balm_heal_4",
      "equipment_id": null,
      "stats": [
        {
          "id": "health",
          "label": "即时恢复生命",
          "value": 960,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 480,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_balm_heal_4",
        "reason": "physical_inventory_stack",
        "name_key": "wls2_consumable_balm_heal_4_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "3d6cbbd155932d41504e0b069ef6325ef0abc3d0391ec9dcf15d0e4532b37b21",
      "numeric": {
        "summary": [
          {
            "key": "health",
            "label": "即时恢复生命",
            "unit": "点",
            "value": 960,
            "display": "960 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 480,
            "display": "480 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_heal_bandage_4",
      "item_id": "wls2_consumable_heal_bandage_4",
      "name": "重型绷带",
      "name_en": "Heavy bandage",
      "name_source": "official_zh",
      "description": "用来包扎程度严重的伤口",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "绷带",
      "tier": 4,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_heal_bandage_4",
      "image_id": "wls2_consumable_heal_bandage_4",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 240,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_heal_bandage_4",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_4",
              "name": "棉花布料",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_herb_4",
              "name": "洋甘菊",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_heal_bandage_4",
          "result_name": "重型绷带",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_heal_bandage_4",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Consumable_heal_bandage_4_name",
        "sorting_group": "heal_bandage",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "717808ff84076a80740d1c0c4a2fca02f49a3687d2f2cb778be35475983be572",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 240,
            "display": "240 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_resourse_miscellaneous_herb_4",
      "item_id": "wls2_resourse_miscellaneous_herb_4",
      "name": "洋甘菊",
      "name_en": "Matricaria chamomilla",
      "name_source": "official_zh",
      "description": "治疗头疼脑涨等小病的最佳选择。",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "草药",
      "tier": 4,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Resourse_miscellaneous_herb_4",
      "image_id": "wls2_resourse_miscellaneous_herb_4",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 60,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_4coins_dynamic_south_trader_offer_herb_4",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_resourse_miscellaneous_herb_4",
          "result_name": "洋甘菊",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_trader_herb_4_price4",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_herb_3",
              "name": "藿香",
              "amount": 3
            }
          ],
          "result_id": "wls2_resourse_miscellaneous_herb_4",
          "result_name": "洋甘菊",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_heal_bandage_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_heal_bandage_4",
          "name": "重型绷带",
          "amount": 1
        },
        {
          "id": "wls2_consumable_flask_heal_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_flask_heal_4",
          "name": "印第安人秘密溶剂",
          "amount": 3
        },
        {
          "id": "wls2_trader_herb_5_price5",
          "label": "交易兑换",
          "target_id": "wls2_resourse_miscellaneous_herb_5",
          "name": "亚伦的枝条",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_pumas_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_pumas_4",
          "name": "美洲狮诱饵 IV",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_bait_bears_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_4",
          "name": "熊诱饵 IV",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_bait_boars_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_boars_4",
          "name": "野猪诱饵IV",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_heal_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_4",
          "name": "土著疗愈饼干",
          "amount": 5
        }
      ],
      "locations": [
        "浅湖",
        "梣木林",
        "淹没高原",
        "冰川湖"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_herb_4",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Resourse_miscellaneous_herb_4_name",
        "sorting_group": "heal_herb",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_farm_hide_4",
          "wls2_loc_farm_wood_4",
          "wls2_loc_farm_stone_4",
          "wls2_loc_farm_hide_6"
        ],
        "quest_referenced": false
      },
      "image_key": "1035b1d41276dd2cfaeb831a27c7a85584002d883eee9271a37fa32065e28452",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 60,
            "display": "60 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_flask_heal_4",
      "item_id": "wls2_consumable_flask_heal_4",
      "name": "印第安人秘密溶剂",
      "name_en": "Indigenous secret infusion",
      "name_source": "official_zh",
      "description": "这种药剂的秘诀是个大秘密！",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "药剂",
      "tier": 4,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_flask_heal_4",
      "image_id": "wls2_consumable_flask_heal_4",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 600,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_flask_heal_4",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_herb_4",
              "name": "洋甘菊",
              "amount": 3
            },
            {
              "id": "wls2_consumable_flask_water_1",
              "name": "装满了的罐子",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_flask_heal_4",
          "result_name": "印第安人秘密溶剂",
          "amount": 1
        },
        {
          "id": "wls2_20coins_dynamic_south_trader_offer_flask_heal_4",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_flask_heal_4",
          "result_name": "印第安人秘密溶剂",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_trader_heal_2_price2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_flask_heal_4",
          "result_name": "印第安人秘密溶剂",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_swamp_trader_2_flask_heal_4",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_flask_heal_4",
          "result_name": "印第安人秘密溶剂",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_oil_heal_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_oil_heal_4",
          "name": "土著 药膏",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_flask_heal_4",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Consumable_flask_heal_4_name",
        "sorting_group": "heal_flask",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ba632c139057762eaedacdccbc05238a2f2868aae0aa84cf4fa64244bb359d12",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 600,
            "display": "600 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_oil_heal_4",
      "item_id": "wls2_consumable_oil_heal_4",
      "name": "土著 药膏",
      "name_en": "Indigenous ointment",
      "name_source": "official_zh",
      "description": "从“大蛇”那里要来的秘密药膏药方。",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "药膏",
      "tier": 4,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_oil_heal_4",
      "image_id": "wls2_consumable_oil_heal_4",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 1200,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_oil_heal_4",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_flask_heal_4",
              "name": "印第安人秘密溶剂",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_vodka_1",
              "name": "酒精",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_oil_heal_4",
          "result_name": "土著 药膏",
          "amount": 1
        },
        {
          "id": "wls2_40coins_dynamic_south_trader_offer_oil_heal_4",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_oil_heal_4",
          "result_name": "土著 药膏",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_trader_heal_5_price5",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_oil_heal_4",
          "result_name": "土著 药膏",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_swamp_trader_2_oil_heal_4",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_oil_heal_4",
          "result_name": "土著 药膏",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_alaska_trader_2_oil_heal_4",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_oil_heal_4",
          "result_name": "土著 药膏",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_oil_heal_4",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Consumable_oil_heal_4_name",
        "sorting_group": "heal_oil",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ac9f94dbac26d6676222263f8a89befbe0ad973eca34efed9321e7b2fff3cf75",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 1200,
            "display": "1200 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_balm_heal_5",
      "item_id": "wls2_consumable_balm_heal_5",
      "name": "军用软膏",
      "name_en": "Army balm",
      "name_source": "official_zh",
      "description": "治愈一切创伤，就是这么直白",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "治疗用品",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_consumable_balm_heal_5_icon",
      "image_id": "wls2_consumable_balm_heal_5",
      "equipment_id": null,
      "stats": [
        {
          "id": "health",
          "label": "即时恢复生命",
          "value": 1280,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 640,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_balm_heal_5",
        "reason": "physical_inventory_stack",
        "name_key": "wls2_consumable_balm_heal_5_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "6fc7c1a9bc7f59d4f014cae52c1a0a12cc92ceabe277504f83e99afa1f678275",
      "numeric": {
        "summary": [
          {
            "key": "health",
            "label": "即时恢复生命",
            "unit": "点",
            "value": 1280,
            "display": "1280 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 640,
            "display": "640 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_resourse_miscellaneous_herb_5",
      "item_id": "wls2_resourse_miscellaneous_herb_5",
      "name": "亚伦的枝条",
      "name_en": "Aaron's rod",
      "name_source": "official_zh",
      "description": "月光仙人掌的真实种类可以用作治疗",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "草药",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Resourse_miscellaneous_herb_5",
      "image_id": "wls2_resourse_miscellaneous_herb_5",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 70,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_trader_herb_5_price5",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_herb_4",
              "name": "洋甘菊",
              "amount": 3
            }
          ],
          "result_id": "wls2_resourse_miscellaneous_herb_5",
          "result_name": "亚伦的枝条",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_flask_heal_5",
          "label": "工作台制作",
          "target_id": "wls2_consumable_flask_heal_5",
          "name": "纯粹药草溶剂",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_pumas_5",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_pumas_5",
          "name": "美洲狮诱饵 V",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_bait_bears_5",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_5",
          "name": "熊诱饵 V",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_bait_elite_crocodiles_5",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_elite_crocodiles_5",
          "name": "短吻鳄诱饵",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_heal_5",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_5",
          "name": "纯净疗愈饼干",
          "amount": 5
        }
      ],
      "locations": [
        "河口",
        "冰川湖"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_herb_5",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Resourse_miscellaneous_herb_5_name",
        "sorting_group": "heal_herb",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_farm_hide_5",
          "wls2_loc_farm_hide_6"
        ],
        "quest_referenced": false
      },
      "image_key": "b670ba6bdc9f6699965ef0fed70ba6c6b0cd71bd959ee9868c4e82d45337f70d",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 70,
            "display": "70 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_flask_heal_5",
      "item_id": "wls2_consumable_flask_heal_5",
      "name": "纯粹药草溶剂",
      "name_en": "Pure herbal infusion",
      "name_source": "official_zh",
      "description": "你在狂野西部能找到的最好药物。",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "药剂",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_flask_heal_5",
      "image_id": "wls2_consumable_flask_heal_5",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 900,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_flask_heal_5",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_herb_5",
              "name": "亚伦的枝条",
              "amount": 3
            },
            {
              "id": "wls2_consumable_flask_water_1",
              "name": "装满了的罐子",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_flask_heal_5",
          "result_name": "纯粹药草溶剂",
          "amount": 1
        },
        {
          "id": "wls2_trader_heal_3_price3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_flask_heal_5",
          "result_name": "纯粹药草溶剂",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_swamp_trader_2_flask_heal_5",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_flask_heal_5",
          "result_name": "纯粹药草溶剂",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_alaska_trader_2_flask_heal_5",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_flask_heal_5",
          "result_name": "纯粹药草溶剂",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_oil_heal_5",
          "label": "工作台制作",
          "target_id": "wls2_consumable_oil_heal_5",
          "name": "纯软膏",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_flask_heal_5",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Consumable_flask_heal_5_name",
        "sorting_group": "heal_flask",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1ef6f51a8337a52a95b25b4a586d1950e618fa26b4130f8a97a4f41e566c3b23",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 900,
            "display": "900 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_oil_heal_5",
      "item_id": "wls2_consumable_oil_heal_5",
      "name": "纯软膏",
      "name_en": "Pure ointment",
      "name_source": "official_zh",
      "description": "甚至连最严重的情感创伤也能治愈",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "药膏",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_oil_heal_5",
      "image_id": "wls2_consumable_oil_heal_5",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 1800,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_oil_heal_5",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_flask_heal_5",
              "name": "纯粹药草溶剂",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_vodka_1",
              "name": "酒精",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_oil_heal_5",
          "result_name": "纯软膏",
          "amount": 1
        },
        {
          "id": "wls2_alaska_trader_2_oil_heal_5",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_oil_heal_5",
          "result_name": "纯软膏",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_oil_heal_5",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Consumable_oil_heal_5_name",
        "sorting_group": "heal_oil",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "dc6bf375fe4c71405488bce0d555b9bb3cea8311a74d304bf26aeabb69cf041c",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 1800,
            "display": "1800 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_balm_heal_6",
      "item_id": "wls2_consumable_balm_heal_6",
      "name": "六阶治疗膏",
      "name_en": "",
      "name_source": "descriptive_fallback",
      "description": "",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "治疗用品",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "image_id": "wls2_consumable_balm_heal_6",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 1280,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_balm_heal_6",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_balm_heal_6_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 1280,
            "display": "1280 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_resourse_miscellaneous_herb_6",
      "item_id": "wls2_resourse_miscellaneous_herb_6",
      "name": "恶魔俱乐部",
      "name_en": "Devil’s club",
      "name_source": "official_zh",
      "description": "不负其名，它被用来制造最强效的治疗剂",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "草药",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_resourse_miscellaneous_herb_6",
      "image_id": "wls2_resourse_miscellaneous_herb_6",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 80,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_flask_heal_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_flask_heal_6",
          "name": "恶魔俱乐部浸泡",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_pumas_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_pumas_6",
          "name": "彪马诱饵 VI",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_bait_bears_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_6",
          "name": "熊诱饵VI",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_heal_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_6",
          "name": "特效疗愈饼干",
          "amount": 5
        }
      ],
      "locations": [
        "冰川湖",
        "北方森林",
        "德纳利山"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_herb_6",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_resourse_miscellaneous_herb_6_name",
        "sorting_group": "heal_herb",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_farm_hide_6",
          "wls2_loc_farm_wood_6",
          "wls2_loc_farm_stone_6"
        ],
        "quest_referenced": false
      },
      "image_key": "3b673572c9bab689767204ca1a21719b1f0596eb18d198c1d99cc2fc58a532ed",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 80,
            "display": "80 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_flask_heal_6",
      "item_id": "wls2_consumable_flask_heal_6",
      "name": "恶魔俱乐部浸泡",
      "name_en": "Devil’s club infusion",
      "name_source": "official_zh",
      "description": "来自恶魔俱乐部的一种药剂，可以让任何人重新站起来",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "药剂",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_flask_heal_6",
      "image_id": "wls2_consumable_flask_heal_6",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 1200,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_flask_heal_6",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_herb_6",
              "name": "恶魔俱乐部",
              "amount": 3
            },
            {
              "id": "wls2_consumable_flask_water_1",
              "name": "装满了的罐子",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_flask_heal_6",
          "result_name": "恶魔俱乐部浸泡",
          "amount": 1
        },
        {
          "id": "wls2_alaska_trader_2_flask_heal_6",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_flask_heal_6",
          "result_name": "恶魔俱乐部浸泡",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_oil_heal_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_oil_heal_6",
          "name": "恶魔俱乐部膏",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_flask_heal_6",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_flask_heal_6_name",
        "sorting_group": "heal_flask",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "aa63029eb43d5a2ef1037f7a57c4d8d6bbbc8c4adb2b1e3536ad061934305ec5",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 1200,
            "display": "1200 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_oil_heal_6",
      "item_id": "wls2_consumable_oil_heal_6",
      "name": "恶魔俱乐部膏",
      "name_en": "Devil’s club ointment",
      "name_source": "official_zh",
      "description": "野生浆果制成的神奇药物",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "药膏",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_oil_heal_6",
      "image_id": "wls2_consumable_oil_heal_6",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 2400,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_oil_heal_6",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_flask_heal_6",
              "name": "恶魔俱乐部浸泡",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_vodka_1",
              "name": "酒精",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_oil_heal_6",
          "result_name": "恶魔俱乐部膏",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_oil_heal_6",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_oil_heal_6_name",
        "sorting_group": "heal_oil",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "37a4b1cd28de1f0eb58a3a1e22da8730335a24cefb0a6bf374784576e92d875b",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 2400,
            "display": "2400 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_resourse_miscellaneous_herb_7",
      "item_id": "wls2_resourse_miscellaneous_herb_7",
      "name": "德克萨斯鼠尾草",
      "name_en": "Texas sage",
      "name_source": "official_zh",
      "description": "抗旱植物具有治疗属性",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "草药",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_resourse_miscellaneous_herb_7_icon",
      "image_id": "wls2_resourse_miscellaneous_herb_7",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 90,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_flask_heal_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_flask_heal_7",
          "name": "德克萨斯鼠尾草浸液",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_pumas_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_pumas_7",
          "name": "美洲狮诱饵 VII",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_bait_bears_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_7",
          "name": "熊诱饵 VII",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_bait_boars_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_boars_7",
          "name": "野猪诱饵VII",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_heal_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_7",
          "name": "鼠尾草治疗饼干",
          "amount": 5
        }
      ],
      "locations": [
        "多刺湖",
        "沙痕峡谷"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_herb_7",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_resourse_miscellaneous_herb_7_name",
        "sorting_group": "heal_herb",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_farm_hide_7",
          "wls2_loc_farm_stone_7"
        ],
        "quest_referenced": false
      },
      "image_key": "043542c869983e669f46ab83b1e9cac294c68a91538ab05133c8dbe261d78c8f",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 90,
            "display": "90 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_flask_heal_7",
      "item_id": "wls2_consumable_flask_heal_7",
      "name": "德克萨斯鼠尾草浸液",
      "name_en": "Texas sage infusion",
      "name_source": "official_zh",
      "description": "一种从鼠尾草花朵中酿造的治愈饮料",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "药剂",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_consumable_flask_heal_7_icon",
      "image_id": "wls2_consumable_flask_heal_7",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 1500,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_flask_heal_7",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_herb_7",
              "name": "德克萨斯鼠尾草",
              "amount": 3
            },
            {
              "id": "wls2_consumable_flask_water_1",
              "name": "装满了的罐子",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_flask_heal_7",
          "result_name": "德克萨斯鼠尾草浸液",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_oil_heal_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_oil_heal_7",
          "name": "德克萨斯鼠尾草软膏",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_flask_heal_7",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_flask_heal_7_name",
        "sorting_group": "heal_flask",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "e62c15c1d7285c6e6a6bd095fe59325f8035efdc071bbbfdaf01db863d362ba7",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 1500,
            "display": "1500 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_oil_heal_7",
      "item_id": "wls2_consumable_oil_heal_7",
      "name": "德克萨斯鼠尾草软膏",
      "name_en": "Texas sage ointment",
      "name_source": "official_zh",
      "description": "一种由鼠尾草花制成的镇静药膏",
      "category": "medicine",
      "category_label": "药品与治疗",
      "subcategory": "药膏",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_consumable_oil_heal_7_icon",
      "image_id": "wls2_consumable_oil_heal_7",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 3000,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_oil_heal_7",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_flask_heal_7",
              "name": "德克萨斯鼠尾草浸液",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_vodka_1",
              "name": "酒精",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_oil_heal_7",
          "result_name": "德克萨斯鼠尾草软膏",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_oil_heal_7",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_oil_heal_7_name",
        "sorting_group": "heal_oil",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "296066d137f2415c770ce878839fa61d7a78e45ac89ebf1d53d383e3e3bd8375",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 3000,
            "display": "3000 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_corn_1",
      "item_id": "wls2_consumable_corn_1",
      "name": "玉米",
      "name_en": "Corn",
      "name_source": "official_zh",
      "description": "具有标志性的前哨人象征，非常适合各种美味食谱，无论是您还是您的牧场牲畜",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "作物",
      "tier": 1,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/wls_corn",
      "image_id": "wls2_consumable_corn_1",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 10,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 5,
          "unit": "点"
        },
        {
          "id": "farm_hunger",
          "label": "恢复农场动物饱食",
          "value": 8,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_recipe_field_corn",
          "label": "种植",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_seed_corn_1",
              "name": "玉米种子",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_corn_1",
          "result_name": "玉米",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_recipe_shed_chicken_corn",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_corn_1",
          "result_name": "玉米",
          "amount": 1
        },
        {
          "id": "wls2_recipe_shed_cow_corn",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_corn_1",
          "result_name": "玉米",
          "amount": 1
        },
        {
          "id": "wls2_recipe_mounts_feed_corn",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_corn_1",
          "result_name": "玉米",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_resourse_miscellaneous_vodka_1",
          "label": "工作台制作",
          "target_id": "wls2_resourse_miscellaneous_vodka_1",
          "name": "酒精",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_heal_1",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_1",
          "name": "草本疗愈饼干",
          "amount": 5
        },
        {
          "id": "wls2_consumable_pet_heal_2",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_2",
          "name": "强效治愈饼干",
          "amount": 5
        },
        {
          "id": "wls2_consumable_pet_heal_3",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_3",
          "name": "极佳的疗愈饼干",
          "amount": 5
        },
        {
          "id": "wls2_consumable_pet_heal_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_4",
          "name": "土著疗愈饼干",
          "amount": 5
        },
        {
          "id": "wls2_consumable_pet_heal_5",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_5",
          "name": "纯净疗愈饼干",
          "amount": 5
        },
        {
          "id": "wls2_consumable_pet_heal_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_6",
          "name": "特效疗愈饼干",
          "amount": 5
        },
        {
          "id": "wls2_consumable_pet_heal_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_7",
          "name": "鼠尾草治疗饼干",
          "amount": 5
        },
        {
          "id": "wls2_consumable_corn_porridge_1_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_corn_porridge_1_common",
          "name": "玉米燕麦",
          "amount": 2
        },
        {
          "id": "wls2_consumable_potlikker_stew_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_potlikker_stew_5_uncommon",
          "name": "玉米面包汤",
          "amount": 10
        },
        {
          "id": "wls2_consumable_boudin_corndog_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_boudin_corndog_5_rare",
          "name": "布丁玉米犬",
          "amount": 10
        },
        {
          "id": "wls2_consumable_taco_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_taco_7_uncommon",
          "name": "塔可",
          "amount": 7
        },
        {
          "id": "wls2_consumable_bass_cakes_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_bass_cakes_7_rare",
          "name": "低音蛋糕",
          "amount": 10
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_corn_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_corn_name",
        "sorting_group": "culture",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4aa3532a01365341dd26cd1ac45d4e0a1580ecc808a122e17a0a4ae4d1abd56b",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 10,
            "display": "10 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 5,
            "display": "5 点"
          },
          {
            "key": "farm_hunger",
            "label": "恢复农场动物饱食",
            "unit": "点",
            "value": 8,
            "display": "8 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls_whiskey",
      "item_id": "wls_whiskey",
      "name": "威士忌",
      "name_en": "Whiskey",
      "name_source": "official_zh",
      "description": "请小心，威士忌可能会因其醉人的影响而损害你的能力",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "烹饪配料",
      "tier": 1,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW/wls_whiskey",
      "image_id": "wls_whiskey",
      "equipment_id": null,
      "stats": [
        {
          "id": "alcohol",
          "label": "酒精值",
          "value": 9,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_static_town_trader_offer_whiskey",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls_whiskey",
          "result_name": "威士忌",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_resourse_miscellaneous_vodka_from_whiskey",
          "label": "工作台制作",
          "target_id": "wls2_resourse_miscellaneous_vodka_1",
          "name": "酒精",
          "amount": 3
        },
        {
          "id": "wls2_consumable_irish_coffee_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_irish_coffee_5_rare",
          "name": "爱尔兰咖啡",
          "amount": 2
        },
        {
          "id": "wls2_consumable_southern_tea_punch_4_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_southern_tea_punch_4_rare",
          "name": "南方茶酒",
          "amount": 2
        },
        {
          "id": "wls2_consumable_injun_drink_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_injun_drink_6_rare",
          "name": "强烈提取",
          "amount": 2
        },
        {
          "id": "wls2_consumable_bloody_molly_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_bloody_molly_7_rare",
          "name": "血腥玛丽",
          "amount": 2
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls_whiskey",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_whiskey_name",
        "sorting_group": "ingredient_geo",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "98e3455f1987bb4582aafff4c37635cd95fbb4353d1c520c855c0e103231a914",
      "numeric": {
        "summary": [
          {
            "key": "alcohol",
            "label": "酒精值",
            "unit": "",
            "value": 9,
            "display": "9"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_resourse_miscellaneous_salt_1",
      "item_id": "wls2_resourse_miscellaneous_salt_1",
      "name": "盐",
      "name_en": "Salt",
      "name_source": "official_zh",
      "description": "几乎是最必要的补品",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "烹饪配料",
      "tier": 1,
      "rarity": "uncommon",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls2_resourse_miscellaneous_salt_1",
      "image_id": "wls2_resourse_miscellaneous_salt_1",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_dynamic_town_trader_offer_salt_1",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_resourse_miscellaneous_salt_1",
          "result_name": "盐",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_dynamic_town_trader_offer_spice_1",
          "label": "交易兑换",
          "target_id": "wls2_resourse_miscellaneous_spice_1",
          "name": "香料",
          "amount": 10
        },
        {
          "id": "wls2_town_collection_butcher_shop",
          "label": "建设提交",
          "target_id": "wls2_town_collection_butcher_shop",
          "name": "商店项目",
          "amount": 20
        },
        {
          "id": "wls2_consumable_baked_poultry_2_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_baked_poultry_2_uncommon",
          "name": "烤禽肉",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pemmican_3_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pemmican_3_uncommon",
          "name": "干肉饼",
          "amount": 3
        },
        {
          "id": "wls2_consumable_hunter_stew_3_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_hunter_stew_3_uncommon",
          "name": "温暖的野生炖菜",
          "amount": 1
        },
        {
          "id": "wls2_consumable_hoppin_john_4_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_hoppin_john_4_uncommon",
          "name": "跳跃约翰",
          "amount": 4
        },
        {
          "id": "wls2_consumable_bacon_bread_pudding_4_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_bacon_bread_pudding_4_uncommon",
          "name": "培根面包布丁",
          "amount": 4
        },
        {
          "id": "wls2_consumable_fried_trout_4_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_fried_trout_4_rare",
          "name": "炸鳟鱼",
          "amount": 4
        },
        {
          "id": "wls2_consumable_cajun_pumpkin_porridge_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_cajun_pumpkin_porridge_5_uncommon",
          "name": "卡真南瓜燕麦",
          "amount": 4
        },
        {
          "id": "wls2_consumable_gumbo_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_gumbo_5_rare",
          "name": "龙虾浓汤",
          "amount": 6
        },
        {
          "id": "wls2_consumable_caribu_potato_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_caribu_potato_6_uncommon",
          "name": "驯鹿与土豆泥",
          "amount": 5
        },
        {
          "id": "wls2_consumable_caribu_soup_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_caribu_soup_6_uncommon",
          "name": "驯鹿杂烩汤",
          "amount": 5
        },
        {
          "id": "wls2_consumable_akutaq_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_akutaq_6_rare",
          "name": "阿库塔克",
          "amount": 6
        },
        {
          "id": "wls2_consumable_rib_steak_7_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_rib_steak_7_common",
          "name": "肋骨牛排",
          "amount": 2
        },
        {
          "id": "wls2_consumable_taco_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_taco_7_uncommon",
          "name": "塔可",
          "amount": 7
        },
        {
          "id": "wls2_consumable_pueblo_firepot_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pueblo_firepot_7_uncommon",
          "name": "普韦布洛 火锅",
          "amount": 6
        },
        {
          "id": "wls2_consumable_chili_con_carne_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_chili_con_carne_7_rare",
          "name": "辣椒与肉",
          "amount": 8
        }
      ],
      "locations": [
        "列车袭击",
        "临时停车点",
        "枪战地点",
        "古道"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_salt_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_salt_name",
        "sorting_group": "ingredient_geo",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "train_crush_39",
          "train_raid",
          "Shootup_01",
          "wls2_loc_event_escort_01"
        ],
        "quest_referenced": false
      },
      "image_key": "34389f22c5d0a1498213af7b6a42dc5bf0ed2b0c0e50d9e43c13d1a7b0bb159a"
    },
    {
      "id": "wls2_resourse_miscellaneous_spice_1",
      "item_id": "wls2_resourse_miscellaneous_spice_1",
      "name": "香料",
      "name_en": "Spice",
      "name_source": "official_zh",
      "description": "不同香料的混合物",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "烹饪配料",
      "tier": 1,
      "rarity": "uncommon",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls2_resourse_miscellaneous_spice_1",
      "image_id": "wls2_resourse_miscellaneous_spice_1",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_dynamic_town_trader_offer_spice_1",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_salt_1",
              "name": "盐",
              "amount": 10
            }
          ],
          "result_id": "wls2_resourse_miscellaneous_spice_1",
          "result_name": "香料",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_iced_tea_4_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_iced_tea_4_uncommon",
          "name": "冰茶",
          "amount": 2
        },
        {
          "id": "wls2_consumable_spiced_coffee_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_spiced_coffee_5_uncommon",
          "name": "香料咖啡",
          "amount": 2
        },
        {
          "id": "wls2_consumable_irish_coffee_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_irish_coffee_5_rare",
          "name": "爱尔兰咖啡",
          "amount": 3
        },
        {
          "id": "wls2_consumable_courtbouillon_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_courtbouillon_5_rare",
          "name": "鱼汤",
          "amount": 4
        },
        {
          "id": "wls2_consumable_boudin_corndog_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_boudin_corndog_5_rare",
          "name": "布丁玉米犬",
          "amount": 2
        },
        {
          "id": "wls2_consumable_southern_tea_punch_4_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_southern_tea_punch_4_rare",
          "name": "南方茶酒",
          "amount": 3
        },
        {
          "id": "wls2_consumable_smithfield_ham_4_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_smithfield_ham_4_rare",
          "name": "史密斯菲尔德火腿",
          "amount": 2
        },
        {
          "id": "wls2_consumable_blueberry_meat_pie_3_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_blueberry_meat_pie_3_rare",
          "name": "蓝莓汁猪排",
          "amount": 2
        },
        {
          "id": "wls2_consumable_injun_drink_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_injun_drink_6_uncommon",
          "name": "因纽特针叶茶",
          "amount": 2
        },
        {
          "id": "wls2_consumable_injun_drink_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_injun_drink_6_rare",
          "name": "强烈提取",
          "amount": 3
        },
        {
          "id": "wls2_consumable_meat_soup_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_meat_soup_6_rare",
          "name": "辣味浓郁的汤",
          "amount": 2
        },
        {
          "id": "wls2_consumable_beef_ragout_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_beef_ragout_7_rare",
          "name": "牛肉 炖菜",
          "amount": 4
        },
        {
          "id": "wls2_consumable_bass_cakes_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_bass_cakes_7_rare",
          "name": "低音蛋糕",
          "amount": 4
        },
        {
          "id": "wls2_consumable_mohito_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_mohito_7_uncommon",
          "name": "莫希托",
          "amount": 2
        },
        {
          "id": "wls2_consumable_bloody_molly_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_bloody_molly_7_rare",
          "name": "血腥玛丽",
          "amount": 4
        }
      ],
      "locations": [
        "列车袭击",
        "临时停车点",
        "枪战地点",
        "古道"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_spice_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_spice_name",
        "sorting_group": "ingredient_geo",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "train_crush_39",
          "train_raid",
          "Shootup_01",
          "wls2_loc_event_escort_01"
        ],
        "quest_referenced": false
      },
      "image_key": "1d80269d1f0f672e2e09dffbc0d0dd641788582810d9a8b49dfbf8730697692b"
    },
    {
      "id": "wls2_resourse_miscellaneous_meat_1",
      "item_id": "wls2_resourse_miscellaneous_meat_1",
      "name": "硬肉",
      "name_en": "Tough meat",
      "name_source": "official_zh",
      "description": "常被认为是低质量的，但如果烹饪得当，它将成为许多美味菜肴的主食",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "肉类",
      "tier": 1,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_meat_tough_icon",
      "image_id": "wls2_resourse_miscellaneous_meat_1",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_hunger",
          "label": "恢复宠物饱食",
          "value": 2,
          "unit": "点"
        },
        {
          "id": "pet_health_regen",
          "label": "恢复宠物生命",
          "value": 2,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "为宠物恢复生命"
      ],
      "recipes": [
        {
          "id": "wls2_pet_feeder_slot_1",
          "label": "饲料制作",
          "ingredients": [],
          "result_id": "wls2_resourse_miscellaneous_meat_1",
          "result_name": "硬肉",
          "amount": 1
        },
        {
          "id": "wls2_pets_bait_trader_meat_1_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_resourse_miscellaneous_meat_1",
          "result_name": "硬肉",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_town_npc_butcher_trader_meat_1_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_resourse_miscellaneous_meat_1",
          "result_name": "硬肉",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_pet_bait_wolfs_1",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_wolfs_1",
          "name": "狼诱饵 I",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pet_bait_direwolfs_1",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_direwolfs_1",
          "name": "头狼诱饵 I",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_bears_1",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_1",
          "name": "熊诱饵 I",
          "amount": 4
        },
        {
          "id": "wls2_consumable_pet_bait_coyotes_1",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_coyotes_1",
          "name": "丛林狼诱饵",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_boars_1",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_boars_1",
          "name": "野猪诱饵",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_heal_1",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_1",
          "name": "草本疗愈饼干",
          "amount": 5
        },
        {
          "id": "wls2_consumable_pet_heal_2",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_2",
          "name": "强效治愈饼干",
          "amount": 5
        },
        {
          "id": "wls2_consumable_schnitzel_2_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_schnitzel_2_common",
          "name": "炸肉排",
          "amount": 1
        },
        {
          "id": "wls2_consumable_grilled_meat_1_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_grilled_meat_1_common",
          "name": "烤肉",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_meat_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_meat_tough_name",
        "sorting_group": "ingredient_meat",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": true
      },
      "image_key": "79f171494983cc4d8d2f27993bf0c00a38adbc758463a101ee0196e692631629",
      "numeric": {
        "summary": [
          {
            "key": "pet_hunger",
            "label": "恢复宠物饱食",
            "unit": "点",
            "value": 2,
            "display": "2 点"
          },
          {
            "key": "pet_health_regen",
            "label": "恢复宠物生命",
            "unit": "点",
            "value": 2,
            "display": "2 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls_fish",
      "item_id": "wls_fish",
      "name": "水牛鱼",
      "name_en": "Buffalo fish",
      "name_source": "official_zh",
      "description": "炸它以发现它的真正价值",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "鱼类",
      "tier": 1,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/Resource_primary_fish_t3_buffalo_fish",
      "image_id": "wls_fish",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_food_bonfire_3",
          "label": "工作台制作",
          "target_id": "wls2_consumable_food_bonfire_3",
          "name": "炸鱼",
          "amount": 1
        }
      ],
      "locations": [
        "浅湖",
        "河口",
        "冰川湖",
        "多刺湖"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls_fish",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_fish_name",
        "sorting_group": "ingredient_fish",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_farm_hide_4",
          "wls2_loc_farm_hide_5",
          "wls2_loc_farm_hide_6",
          "wls2_loc_farm_hide_7"
        ],
        "quest_referenced": false
      },
      "image_key": "b7a0bb07a97898a6740bd1652c0ff47ff1e8d832308edea46f8638dde7f58bc3"
    },
    {
      "id": "wls2_consumable_wheat",
      "item_id": "wls2_consumable_wheat",
      "name": "小麦",
      "name_en": "Wheat",
      "name_source": "official_zh",
      "description": "小麦是基本农作物之一。家鸡很喜欢吃小麦。",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "作物",
      "tier": 2,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_farm_wheat_icon",
      "image_id": "wls2_consumable_wheat",
      "equipment_id": null,
      "stats": [
        {
          "id": "farm_hunger",
          "label": "恢复农场动物饱食",
          "value": 10,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_recipe_field_wheat",
          "label": "种植",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_seed_wheat",
              "name": "小麦种子",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_wheat",
          "result_name": "小麦",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_recipe_shed_chicken_wheat",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_wheat",
          "result_name": "小麦",
          "amount": 1
        },
        {
          "id": "wls2_recipe_shed_cow_wheat",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_wheat",
          "result_name": "小麦",
          "amount": 1
        },
        {
          "id": "wls2_recipe_mounts_feed_wheat",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_wheat",
          "result_name": "小麦",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_schnitzel_2_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_schnitzel_2_common",
          "name": "炸肉排",
          "amount": 3
        },
        {
          "id": "wls2_consumable_cowboy_bisquits_2_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_cowboy_bisquits_2_common",
          "name": "牛仔饼干",
          "amount": 3
        },
        {
          "id": "wls2_consumable_bean_bread_3_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_bean_bread_3_common",
          "name": "切诺基豆面包",
          "amount": 3
        },
        {
          "id": "wls2_consumable_fried_chicken_4_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_fried_chicken_4_common",
          "name": "炸鸡",
          "amount": 3
        },
        {
          "id": "wls2_consumable_hunter_stew_3_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_hunter_stew_3_uncommon",
          "name": "温暖的野生炖菜",
          "amount": 10
        },
        {
          "id": "wls2_consumable_bacon_bread_pudding_4_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_bacon_bread_pudding_4_uncommon",
          "name": "培根面包布丁",
          "amount": 10
        },
        {
          "id": "wls2_consumable_fried_trout_4_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_fried_trout_4_rare",
          "name": "炸鳟鱼",
          "amount": 10
        },
        {
          "id": "wls2_consumable_potlikker_stew_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_potlikker_stew_5_uncommon",
          "name": "玉米面包汤",
          "amount": 10
        },
        {
          "id": "wls2_consumable_blueberry_meat_pie_3_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_blueberry_meat_pie_3_rare",
          "name": "蓝莓汁猪排",
          "amount": 10
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_wheat",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_farm_wheat_name",
        "sorting_group": "culture",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1d297168322a4c786d329446ba0c8353b209e9e800979fc326ebcc7cc2fb24e9",
      "numeric": {
        "summary": [
          {
            "key": "farm_hunger",
            "label": "恢复农场动物饱食",
            "unit": "点",
            "value": 10,
            "display": "10 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls_cactus_berry",
      "item_id": "wls_cactus_berry",
      "name": "仙人掌果",
      "name_en": "Cactus fruit",
      "name_source": "official_zh",
      "description": "仙人掌果做成的饮品很清爽",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "烹饪配料",
      "tier": 2,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW/wls_cactus_berry",
      "image_id": "wls_cactus_berry",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 5,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_static_town_trader_offer_cactus",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls_cactus_berry",
          "result_name": "仙人掌果",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_pet_bait_direwolfs_1",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_direwolfs_1",
          "name": "头狼诱饵 I",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_direwolfs_2",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_direwolfs_2",
          "name": "头狼诱饵 II",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_direwolfs_3",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_direwolfs_3",
          "name": "头狼诱饵 III",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_direwolfs_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_direwolfs_4",
          "name": "头狼诱饵 IV",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_direwolfs_5",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_direwolfs_5",
          "name": "头狼诱饵 V",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_direwolfs_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_direwolfs_6",
          "name": "阿尔法狼诱饵 VI",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_direwolfs_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_direwolfs_7",
          "name": "头狼诱饵 VII",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_bears_1",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_1",
          "name": "熊诱饵 I",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pet_bait_bears_2",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_2",
          "name": "熊诱饵 II",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pet_bait_bears_3",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_3",
          "name": "熊诱饵 III",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pet_bait_bears_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_4",
          "name": "熊诱饵 IV",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pet_bait_bears_5",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_5",
          "name": "熊诱饵 V",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pet_bait_bears_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_6",
          "name": "熊诱饵VI",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pet_bait_bears_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_7",
          "name": "熊诱饵 VII",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pet_bait_boars_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_boars_4",
          "name": "野猪诱饵IV",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pet_bait_boars_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_boars_7",
          "name": "野猪诱饵VII",
          "amount": 2
        },
        {
          "id": "wls2_consumable_cactus_drink_2_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_cactus_drink_2_common",
          "name": "仙人掌饮料",
          "amount": 2
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls_cactus_berry",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_cactus_berry_name",
        "sorting_group": "ingredient_geo",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "307adc0f5e5932ae54df54bef7b01b2ae75d5243518fffe407d0b6de90aa783c",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 5,
            "display": "5 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_cooking_ingredient_meat_white_2",
      "item_id": "wls2_cooking_ingredient_meat_white_2",
      "name": "白肉",
      "name_en": "White meat",
      "name_source": "official_zh",
      "description": "很有营养的食物，富含脂肪和蛋白质",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "肉类",
      "tier": 2,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_meat_white_icon",
      "image_id": "wls2_cooking_ingredient_meat_white_2",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_hunger",
          "label": "恢复宠物饱食",
          "value": 10,
          "unit": "点"
        },
        {
          "id": "pet_health_regen",
          "label": "恢复宠物生命",
          "value": 5,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "为宠物恢复生命"
      ],
      "recipes": [
        {
          "id": "wls2_thanksgiving_trade_turkey",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls_watches",
              "name": "坏手表",
              "amount": 3
            },
            {
              "id": "wls2_resourse_miscellaneous_lamp_1",
              "name": "煤油灯",
              "amount": 1
            },
            {
              "id": "wls_wolf_fang",
              "name": "狼牙",
              "amount": 5
            }
          ],
          "result_id": "wls2_cooking_ingredient_meat_white_2",
          "result_name": "白肉",
          "amount": 1
        },
        {
          "id": "wls2_pet_feeder_slot_2",
          "label": "饲料制作",
          "ingredients": [],
          "result_id": "wls2_cooking_ingredient_meat_white_2",
          "result_name": "白肉",
          "amount": 1
        },
        {
          "id": "wls2_town_npc_butcher_trader_meat_2_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_cooking_ingredient_meat_white_2",
          "result_name": "白肉",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_pet_bait_lynx_1",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_lynx_1",
          "name": "野猫诱饵 I",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pet_bait_lynx_2",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_lynx_2",
          "name": "山猫诱饵 II",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_lynx_3",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_lynx_3",
          "name": "山猫诱饵 III",
          "amount": 4
        },
        {
          "id": "wls2_consumable_pet_bait_meat_lynx_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_lynx_4",
          "name": "山猫诱饵 IV",
          "amount": 7
        },
        {
          "id": "wls2_consumable_pet_bait_pumas_1",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_pumas_1",
          "name": "美洲狮诱饵 I",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_pumas_2",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_pumas_2",
          "name": "美洲狮诱饵 II",
          "amount": 4
        },
        {
          "id": "wls2_consumable_pet_bait_pumas_3",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_pumas_3",
          "name": "美洲狮诱饵 III",
          "amount": 5
        },
        {
          "id": "wls2_consumable_pet_heal_2",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_2",
          "name": "强效治愈饼干",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pet_heal_3",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_3",
          "name": "极佳的疗愈饼干",
          "amount": 5
        },
        {
          "id": "wls2_consumable_pet_heal_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_4",
          "name": "土著疗愈饼干",
          "amount": 5
        },
        {
          "id": "wls2_consumable_baked_poultry_2_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_baked_poultry_2_uncommon",
          "name": "烤禽肉",
          "amount": 1
        },
        {
          "id": "wls2_consumable_ribs_blueberry_3_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_ribs_blueberry_3_common",
          "name": "烤鸡",
          "amount": 1
        },
        {
          "id": "wls2_consumable_fried_chicken_4_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_fried_chicken_4_common",
          "name": "炸鸡",
          "amount": 2
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_cooking_ingredient_meat_white_2",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_meat_white_name",
        "sorting_group": "ingredient_meat",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "3b48a4b56be6558a028eddb7ac8bf078c9fdc237714f743f3c4285bb0bf02b25",
      "numeric": {
        "summary": [
          {
            "key": "pet_hunger",
            "label": "恢复宠物饱食",
            "unit": "点",
            "value": 10,
            "display": "10 点"
          },
          {
            "key": "pet_health_regen",
            "label": "恢复宠物生命",
            "unit": "点",
            "value": 5,
            "display": "5 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_oat",
      "item_id": "wls2_consumable_oat",
      "name": "燕麦",
      "name_en": "Oats",
      "name_source": "official_zh",
      "description": "一种营养丰富的植物，可用作牧场动物的食物。",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "作物",
      "tier": 3,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/wls_oats",
      "image_id": "wls2_consumable_oat",
      "equipment_id": null,
      "stats": [
        {
          "id": "farm_hunger",
          "label": "恢复农场动物饱食",
          "value": 12,
          "unit": "点"
        },
        {
          "id": "additional_mounts_hunger",
          "label": "额外坐骑饱食",
          "value": 12,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_recipe_field_oats",
          "label": "种植",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_seed_oat",
              "name": "燕麦种子",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_oat",
          "result_name": "燕麦",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_recipe_shed_chicken_oat",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_oat",
          "result_name": "燕麦",
          "amount": 1
        },
        {
          "id": "wls2_recipe_shed_cow_oat",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_oat",
          "result_name": "燕麦",
          "amount": 1
        },
        {
          "id": "wls2_recipe_mounts_feed_oat",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_oat",
          "result_name": "燕麦",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_oat",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_oats_name",
        "sorting_group": "culture",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "88ce22f319c4e0c6c194ef619eab16fda63465856a6b9730a0ffe255800553e3",
      "numeric": {
        "summary": [
          {
            "key": "farm_hunger",
            "label": "恢复农场动物饱食",
            "unit": "点",
            "value": 12,
            "display": "12 点"
          },
          {
            "key": "additional_mounts_hunger",
            "label": "额外坐骑饱食",
            "unit": "",
            "value": 12,
            "display": "12"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_beans_1",
      "item_id": "wls2_consumable_beans_1",
      "name": "青豆",
      "name_en": "Green beans",
      "name_source": "official_zh",
      "description": "请适量食用",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "作物",
      "tier": 3,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_beans_1",
      "image_id": "wls2_consumable_beans_1",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 5,
          "unit": "点"
        },
        {
          "id": "farm_hunger",
          "label": "恢复农场动物饱食",
          "value": 12,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_recipe_field_beans",
          "label": "种植",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_seed_beans_1",
              "name": "豆类种子",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_beans_1",
          "result_name": "青豆",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_recipe_shed_chicken_beans",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_beans_1",
          "result_name": "青豆",
          "amount": 1
        },
        {
          "id": "wls2_recipe_shed_cow_beans",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_beans_1",
          "result_name": "青豆",
          "amount": 1
        },
        {
          "id": "wls2_recipe_mounts_feed_beans",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_beans_1",
          "result_name": "青豆",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_bean_bread_3_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_bean_bread_3_common",
          "name": "切诺基豆面包",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pemmican_3_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pemmican_3_uncommon",
          "name": "干肉饼",
          "amount": 10
        },
        {
          "id": "wls2_consumable_chili_con_carne_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_chili_con_carne_7_rare",
          "name": "辣椒与肉",
          "amount": 8
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_beans_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_beans_name",
        "sorting_group": "culture",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": true
      },
      "image_key": "29277157b8759ae48738be2de1cc3fcc8c3d12d4cb1c07093e2a785a16231623",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 5,
            "display": "5 点"
          },
          {
            "key": "farm_hunger",
            "label": "恢复农场动物饱食",
            "unit": "点",
            "value": 12,
            "display": "12 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls_berry",
      "item_id": "wls_berry",
      "name": "蓝莓",
      "name_en": "Blueberry",
      "name_source": "official_zh",
      "description": "多汁又甜，这些独特的浆果是各种土著菜肴中受人喜爱的成分。",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "烹饪配料",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW/wls_berry",
      "image_id": "wls_berry",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 5,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_static_town_trader_offer_berry",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls_berry",
          "result_name": "蓝莓",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_compote_3_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_compote_3_common",
          "name": "水果冻",
          "amount": 2
        },
        {
          "id": "wls2_consumable_ribs_blueberry_3_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_ribs_blueberry_3_common",
          "name": "烤鸡",
          "amount": 2
        },
        {
          "id": "wls2_consumable_fillet_steak_4_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_fillet_steak_4_common",
          "name": "牛排",
          "amount": 2
        },
        {
          "id": "wls2_consumable_medallion_steak_5_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_medallion_steak_5_common",
          "name": "肉眼牛排配肉汁",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pemmican_3_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pemmican_3_uncommon",
          "name": "干肉饼",
          "amount": 5
        },
        {
          "id": "wls2_consumable_hunter_stew_3_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_hunter_stew_3_uncommon",
          "name": "温暖的野生炖菜",
          "amount": 3
        },
        {
          "id": "wls2_consumable_blueberry_meat_pie_3_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_blueberry_meat_pie_3_rare",
          "name": "蓝莓汁猪排",
          "amount": 5
        },
        {
          "id": "wls2_consumable_caribu_steak_6_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_caribu_steak_6_common",
          "name": "驯鹿牛排",
          "amount": 2
        },
        {
          "id": "wls2_consumable_akutaq_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_akutaq_6_rare",
          "name": "阿库塔克",
          "amount": 10
        }
      ],
      "locations": [
        "高地",
        "雪枫树林",
        "山湖",
        "北方森林",
        "冰川湖"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls_berry",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_blueberry_3_common_name",
        "sorting_group": "ingredient_geo",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_farm_stone_3",
          "wls2_loc_farm_wood_3",
          "wls2_loc_farm_hide_3",
          "wls2_loc_farm_wood_6",
          "wls2_loc_farm_hide_6"
        ],
        "quest_referenced": false
      },
      "image_key": "7e02446c908829d856ae985b2ac2c643882c1c83c0c245bc86d1f9e50617ba99",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 5,
            "display": "5 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_resourse_miscellaneous_meat_3",
      "item_id": "wls2_resourse_miscellaneous_meat_3",
      "name": "多汁的肋骨",
      "name_en": "Ribs",
      "name_source": "official_zh",
      "description": "美味的生排骨，非常适合炖或烘烤到完美",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "肉类",
      "tier": 3,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Resourse_miscellaneous_meat_3",
      "image_id": "wls2_resourse_miscellaneous_meat_3",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_hunger",
          "label": "恢复宠物饱食",
          "value": 15,
          "unit": "点"
        },
        {
          "id": "pet_health_regen",
          "label": "恢复宠物生命",
          "value": 5,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "为宠物恢复生命"
      ],
      "recipes": [
        {
          "id": "wls2_pet_feeder_slot_3",
          "label": "饲料制作",
          "ingredients": [],
          "result_id": "wls2_resourse_miscellaneous_meat_3",
          "result_name": "多汁的肋骨",
          "amount": 1
        },
        {
          "id": "wls2_town_npc_butcher_trader_meat_3_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_resourse_miscellaneous_meat_3",
          "result_name": "多汁的肋骨",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_pet_bait_wolfs_2",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_wolfs_2",
          "name": "狼诱饵 II",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_bait_wolfs_3",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_wolfs_3",
          "name": "狼诱饵 III",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pet_bait_direwolfs_2",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_direwolfs_2",
          "name": "头狼诱饵 II",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pet_bait_direwolfs_3",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_direwolfs_3",
          "name": "头狼诱饵 III",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_bears_2",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_2",
          "name": "熊诱饵 II",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_bears_3",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_3",
          "name": "熊诱饵 III",
          "amount": 4
        },
        {
          "id": "wls2_consumable_pemmican_3_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pemmican_3_uncommon",
          "name": "干肉饼",
          "amount": 2
        },
        {
          "id": "wls2_consumable_hunter_stew_3_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_hunter_stew_3_uncommon",
          "name": "温暖的野生炖菜",
          "amount": 3
        },
        {
          "id": "wls2_consumable_blueberry_meat_pie_3_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_blueberry_meat_pie_3_rare",
          "name": "蓝莓汁猪排",
          "amount": 3
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_meat_3",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Resourse_miscellaneous_meat_3_name",
        "sorting_group": "ingredient_meat",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "333b23d80c5aee1762181118ea088ca0c292626aa2b6118b242845d50667a9eb",
      "numeric": {
        "summary": [
          {
            "key": "pet_hunger",
            "label": "恢复宠物饱食",
            "unit": "点",
            "value": 15,
            "display": "15 点"
          },
          {
            "key": "pet_health_regen",
            "label": "恢复宠物生命",
            "unit": "点",
            "value": 5,
            "display": "5 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_cabbage",
      "item_id": "wls2_consumable_cabbage",
      "name": "卷心菜",
      "name_en": "Cabbage",
      "name_source": "official_zh",
      "description": "多汁的卷心菜叶可以做为任何餐食的完美配菜。",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "作物",
      "tier": 4,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_farm_cabbage_icon",
      "image_id": "wls2_consumable_cabbage",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 5,
          "unit": "点"
        },
        {
          "id": "farm_hunger",
          "label": "恢复农场动物饱食",
          "value": 14,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_recipe_field_cabbage",
          "label": "种植",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_seed_cabbage",
              "name": "卷心菜种子",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_cabbage",
          "result_name": "卷心菜",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_recipe_shed_chicken_cabbage",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_cabbage",
          "result_name": "卷心菜",
          "amount": 1
        },
        {
          "id": "wls2_recipe_shed_cow_cabbage",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_cabbage",
          "result_name": "卷心菜",
          "amount": 1
        },
        {
          "id": "wls2_recipe_mounts_feed_cabbage",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_cabbage",
          "result_name": "卷心菜",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_hoppin_john_4_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_hoppin_john_4_uncommon",
          "name": "跳跃约翰",
          "amount": 10
        },
        {
          "id": "wls2_consumable_courtbouillon_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_courtbouillon_5_rare",
          "name": "鱼汤",
          "amount": 4
        },
        {
          "id": "wls2_consumable_smithfield_ham_4_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_smithfield_ham_4_rare",
          "name": "史密斯菲尔德火腿",
          "amount": 10
        },
        {
          "id": "wls2_consumable_caribu_soup_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_caribu_soup_6_uncommon",
          "name": "驯鹿杂烩汤",
          "amount": 10
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_cabbage",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_farm_cabbage_name",
        "sorting_group": "culture",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "e4b7286577be786915cd868209d1933247f68107e7ff19cf1b73144a3290ef06",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 5,
            "display": "5 点"
          },
          {
            "key": "farm_hunger",
            "label": "恢复农场动物饱食",
            "unit": "点",
            "value": 14,
            "display": "14 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_cooking_ingredient_mustard_4",
      "item_id": "wls2_cooking_ingredient_mustard_4",
      "name": "芥末",
      "name_en": "Mustard",
      "name_source": "official_zh",
      "description": "一种香辣的调味品，为菜肴增添美味风味，在南方地区很受欢迎",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "烹饪配料",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_cooking_ingredient_mustard_4",
      "image_id": "wls2_cooking_ingredient_mustard_4",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_hoppin_john_4_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_hoppin_john_4_uncommon",
          "name": "跳跃约翰",
          "amount": 1
        },
        {
          "id": "wls2_consumable_bacon_bread_pudding_4_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_bacon_bread_pudding_4_uncommon",
          "name": "培根面包布丁",
          "amount": 1
        },
        {
          "id": "wls2_consumable_fried_trout_4_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_fried_trout_4_rare",
          "name": "炸鳟鱼",
          "amount": 1
        },
        {
          "id": "wls2_consumable_smithfield_ham_4_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_smithfield_ham_4_rare",
          "name": "史密斯菲尔德火腿",
          "amount": 2
        }
      ],
      "locations": [
        "河间地",
        "藏匿处",
        "邻居的牧场"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_cooking_ingredient_mustard_4",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_mustard_4_common_name",
        "sorting_group": "ingredient_geo",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_4",
          "bandit_hideout_01"
        ],
        "quest_referenced": false
      },
      "image_key": "37ce86e7beb4b75fcf91a64b62e080280b014b0fe037bb06f56a3990170e618d"
    },
    {
      "id": "wls2_cooking_ingredient_pack_tea_4",
      "item_id": "wls2_cooking_ingredient_pack_tea_4",
      "name": "茶包",
      "name_en": "Tea box",
      "name_source": "official_zh",
      "description": "精选茶叶的精美合集，为愉悦的茶体验带来和谐的风味交响曲",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "烹饪配料",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_cooking_ingredient_pack_tea_4",
      "image_id": "wls2_cooking_ingredient_pack_tea_4",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_tea_4_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_tea_4_common",
          "name": "茶",
          "amount": 1
        },
        {
          "id": "wls2_consumable_iced_tea_4_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_iced_tea_4_uncommon",
          "name": "冰茶",
          "amount": 1
        },
        {
          "id": "wls2_consumable_southern_tea_punch_4_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_southern_tea_punch_4_rare",
          "name": "南方茶酒",
          "amount": 2
        }
      ],
      "locations": [
        "河间地",
        "藏匿处",
        "邻居的牧场"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_cooking_ingredient_pack_tea_4",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pack_tea_4_common_name",
        "sorting_group": "ingredient_geo",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_4",
          "bandit_hideout_01"
        ],
        "quest_referenced": false
      },
      "image_key": "42ce9cdf418b8f594653588a0bc0a36e3930b4d71faea7e02535a84664dc96a6"
    },
    {
      "id": "wls2_resourse_miscellaneous_meat_2",
      "item_id": "wls2_resourse_miscellaneous_meat_2",
      "name": "嫩肉",
      "name_en": "Tender meat",
      "name_source": "official_zh",
      "description": "高品质的肉块，柔软多汁，含有适量的脂肪",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "肉类",
      "tier": 4,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Resourse_miscellaneous_meat_2",
      "image_id": "wls2_resourse_miscellaneous_meat_2",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_hunger",
          "label": "恢复宠物饱食",
          "value": 20,
          "unit": "点"
        },
        {
          "id": "pet_health_regen",
          "label": "恢复宠物生命",
          "value": 5,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "为宠物恢复生命"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_meat_2",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_meat_soft_name",
        "sorting_group": "ingredient_meat",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4732b60de5ffc5a6c820b68fffe9315032fa28999cde48c4b7e7383078e9fb67",
      "numeric": {
        "summary": [
          {
            "key": "pet_hunger",
            "label": "恢复宠物饱食",
            "unit": "点",
            "value": 20,
            "display": "20 点"
          },
          {
            "key": "pet_health_regen",
            "label": "恢复宠物生命",
            "unit": "点",
            "value": 5,
            "display": "5 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_meat_tenderloin",
      "item_id": "wls2_consumable_meat_tenderloin",
      "name": "肉片",
      "name_en": "Filet",
      "name_source": "official_zh",
      "description": "肉类最嫰的部分。很难得到，因此非常宝贵。",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "肉类",
      "tier": 4,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_meat_tenderloin_icon",
      "image_id": "wls2_consumable_meat_tenderloin",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_hunger",
          "label": "恢复宠物饱食",
          "value": 20,
          "unit": "点"
        },
        {
          "id": "pet_health_regen",
          "label": "恢复宠物生命",
          "value": 5,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "为宠物恢复生命"
      ],
      "recipes": [
        {
          "id": "wls2_pet_feeder_slot_5",
          "label": "饲料制作",
          "ingredients": [],
          "result_id": "wls2_consumable_meat_tenderloin",
          "result_name": "肉片",
          "amount": 1
        },
        {
          "id": "wls2_pets_bait_trader_meat_2_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_meat_tenderloin",
          "result_name": "肉片",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_town_npc_butcher_trader_meat_4_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_meat_tenderloin",
          "result_name": "肉片",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_pet_bait_wolfs_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_wolfs_4",
          "name": "狼诱饵 IV",
          "amount": 5
        },
        {
          "id": "wls2_consumable_pet_bait_wolfs_5",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_wolfs_5",
          "name": "狼诱饵 V",
          "amount": 10
        },
        {
          "id": "wls2_consumable_pet_bait_wolfs_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_wolfs_7",
          "name": "狼诱饵 VII",
          "amount": 15
        },
        {
          "id": "wls2_consumable_pet_bait_direwolfs_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_direwolfs_4",
          "name": "头狼诱饵 IV",
          "amount": 6
        },
        {
          "id": "wls2_consumable_pet_bait_direwolfs_5",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_direwolfs_5",
          "name": "头狼诱饵 V",
          "amount": 12
        },
        {
          "id": "wls2_consumable_pet_bait_bears_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_4",
          "name": "熊诱饵 IV",
          "amount": 8
        },
        {
          "id": "wls2_consumable_pet_bait_bears_5",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_5",
          "name": "熊诱饵 V",
          "amount": 15
        },
        {
          "id": "wls2_consumable_pet_bait_boars_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_boars_4",
          "name": "野猪诱饵IV",
          "amount": 10
        },
        {
          "id": "wls2_consumable_pet_bait_boars_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_boars_7",
          "name": "野猪诱饵VII",
          "amount": 15
        },
        {
          "id": "wls2_consumable_pet_bait_elite_crocodiles_5",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_elite_crocodiles_5",
          "name": "短吻鳄诱饵",
          "amount": 16
        },
        {
          "id": "wls2_consumable_pet_heal_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_4",
          "name": "土著疗愈饼干",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pet_heal_5",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_5",
          "name": "纯净疗愈饼干",
          "amount": 5
        },
        {
          "id": "wls2_consumable_pet_heal_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_6",
          "name": "特效疗愈饼干",
          "amount": 5
        },
        {
          "id": "wls2_consumable_pet_heal_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_7",
          "name": "鼠尾草治疗饼干",
          "amount": 5
        },
        {
          "id": "wls2_consumable_fillet_steak_4_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_fillet_steak_4_common",
          "name": "牛排",
          "amount": 2
        },
        {
          "id": "wls2_consumable_medallion_steak_5_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_medallion_steak_5_common",
          "name": "肉眼牛排配肉汁",
          "amount": 4
        },
        {
          "id": "wls2_consumable_hoppin_john_4_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_hoppin_john_4_uncommon",
          "name": "跳跃约翰",
          "amount": 2
        },
        {
          "id": "wls2_consumable_bacon_bread_pudding_4_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_bacon_bread_pudding_4_uncommon",
          "name": "培根面包布丁",
          "amount": 3
        },
        {
          "id": "wls2_consumable_potlikker_stew_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_potlikker_stew_5_uncommon",
          "name": "玉米面包汤",
          "amount": 4
        },
        {
          "id": "wls2_consumable_gumbo_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_gumbo_5_rare",
          "name": "龙虾浓汤",
          "amount": 4
        },
        {
          "id": "wls2_consumable_smithfield_ham_4_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_smithfield_ham_4_rare",
          "name": "史密斯菲尔德火腿",
          "amount": 5
        },
        {
          "id": "wls2_consumable_meat_soup_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_meat_soup_6_rare",
          "name": "辣味浓郁的汤",
          "amount": 6
        },
        {
          "id": "wls2_consumable_salmon_chowder_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_salmon_chowder_6_rare",
          "name": "三文鱼杂烩汤",
          "amount": 10
        },
        {
          "id": "wls2_consumable_beef_ragout_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_beef_ragout_7_rare",
          "name": "牛肉 炖菜",
          "amount": 8
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_meat_tenderloin",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_meat_tenderloin_name",
        "sorting_group": "ingredient_meat",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "b909047bcdb614f58f03f215a81dd01f5a1f5b8550a8e123699d7d35048595a0",
      "numeric": {
        "summary": [
          {
            "key": "pet_hunger",
            "label": "恢复宠物饱食",
            "unit": "点",
            "value": 20,
            "display": "20 点"
          },
          {
            "key": "pet_health_regen",
            "label": "恢复宠物生命",
            "unit": "点",
            "value": 5,
            "display": "5 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    }
  ]
};
