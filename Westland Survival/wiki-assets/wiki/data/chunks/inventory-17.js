/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-inventory-17"] = {
  "section": "inventory",
  "records": [
    {
      "id": "wls2_easter_candy",
      "item_id": "wls2_easter_candy",
      "name": "集市糖果",
      "name_en": "Fair sweet",
      "name_source": "official_zh",
      "description": "使用节日亮色纸包装的糖果。狂欢也别忘记补充能量！吃颗糖吧！",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "糖果",
      "tier": 1,
      "rarity": "common",
      "max_stack": 50,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls_easter_candy",
      "image_id": "wls2_easter_candy",
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
      "recipes": [
        {
          "id": "wls2_easter2021_trader_candy",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 2
            }
          ],
          "result_id": "wls2_easter_candy",
          "result_name": "集市糖果",
          "amount": 1
        },
        {
          "id": "wls2_easter_22_trader_candy",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_24_currency_egg",
              "name": "复活节彩蛋",
              "amount": 2
            }
          ],
          "result_id": "wls2_easter_candy",
          "result_name": "集市糖果",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_easter_24_collection_enclosure_0",
          "label": "建设提交",
          "target_id": "wls2_easter_24_collection_enclosure_0",
          "name": "兔子草地",
          "amount": 10
        },
        {
          "id": "wls2_easter_24_collection_enclosure_1",
          "label": "建设提交",
          "target_id": "wls2_easter_24_collection_enclosure_1",
          "name": "兔子草地",
          "amount": 20
        }
      ],
      "locations": [
        "春季 博览会"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_easter_candy",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_easter_candy_name",
        "sorting_group": "candy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "easter_hub_22"
        ],
        "quest_referenced": false
      },
      "image_key": "23284713edfdb7602fb449909a185a77479545589646ff225b39019c48f0cc7b",
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
      "id": "wls2_halloween_food_pumpkin",
      "item_id": "wls2_halloween_food_pumpkin",
      "name": "南瓜",
      "name_en": "Pumpkin",
      "name_source": "official_zh",
      "description": "硕大且富有营养的蔬菜。据说它还可以做成一盏灯",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "食品与饮品",
      "tier": 1,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_pumpkin_1",
      "image_id": "wls2_halloween_food_pumpkin",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 50,
          "unit": "点"
        },
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 15,
          "unit": "点"
        },
        {
          "id": "thirst",
          "label": "恢复水分",
          "value": 15,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_halloween_food_pumpkin",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_halloween_seed_pumpkin",
              "name": "南瓜种子",
              "amount": 1
            }
          ],
          "result_id": "wls2_halloween_food_pumpkin",
          "result_name": "南瓜",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_halloween_food_pumpkin_porridge",
          "label": "工作台制作",
          "target_id": "wls2_halloween_food_pumpkin_porridge",
          "name": "南瓜粥",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_halloween_food_pumpkin",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_halloween_food_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "f67444893b375751e453c953e0daab75a354e41f65b70ec4bb11b9b22e3c60b7",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 50,
            "display": "50 点"
          },
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 15,
            "display": "15 点"
          },
          {
            "key": "thirst",
            "label": "恢复水分",
            "unit": "点",
            "value": 15,
            "display": "15 点"
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
      "id": "wls2_halloween_food_pumpkin_porridge",
      "item_id": "wls2_halloween_food_pumpkin_porridge",
      "name": "南瓜粥",
      "name_en": "Pumpkin porridge",
      "name_source": "official_zh",
      "description": "美味健康的南瓜粥",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "食品与饮品",
      "tier": 1,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_food_kitchen_3",
      "image_id": "wls2_halloween_food_pumpkin_porridge",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 75,
          "unit": "点"
        },
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 75,
          "unit": "点"
        },
        {
          "id": "thirst",
          "label": "恢复水分",
          "value": 15,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_halloween_food_pumpkin_porridge",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_2",
              "name": "褐煤",
              "amount": 2
            },
            {
              "id": "wls2_halloween_food_pumpkin",
              "name": "南瓜",
              "amount": 1
            }
          ],
          "result_id": "wls2_halloween_food_pumpkin_porridge",
          "result_name": "南瓜粥",
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
        "id": "wls2_halloween_food_pumpkin_porridge",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Consumable_food_kitchen_3_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "8d61a01fbb5af22d10b7e23bd5a53261cd9a4eb9712aa117f9153da8f4431dfe",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 75,
            "display": "75 点"
          },
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 75,
            "display": "75 点"
          },
          {
            "key": "thirst",
            "label": "恢复水分",
            "unit": "点",
            "value": 15,
            "display": "15 点"
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
      "id": "wls2_consumable_food_bonfire_2",
      "item_id": "wls2_consumable_food_bonfire_2",
      "name": "熟肉",
      "name_en": "Cooked meat",
      "name_source": "official_zh",
      "description": "完美满足饥饿感并有助于伤口愈合。",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "食品与饮品",
      "tier": 1,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": true,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW/wls_cooked_meat",
      "image_id": "wls2_consumable_food_bonfire_2",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 30,
          "unit": "点"
        },
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 30,
          "unit": "点"
        },
        {
          "id": "thirst",
          "label": "恢复水分",
          "value": 5,
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
        "id": "wls2_consumable_food_bonfire_2",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_cooked_meat_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "2fafa25aa90e0aa9352dbab691cd508c380bae04f640a3f35a487b9d084e7471",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 30,
            "display": "30 点"
          },
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 30,
            "display": "30 点"
          },
          {
            "key": "thirst",
            "label": "恢复水分",
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
      "id": "wls2_consumable_food_kitchen_0",
      "item_id": "wls2_consumable_food_kitchen_0",
      "name": "玉米粥",
      "name_en": "Corn porridge",
      "name_source": "official_zh",
      "description": "营养十足，横扫饥饿，改善健康",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "食品与饮品",
      "tier": 1,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": true,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/wls_corn_porridge",
      "image_id": "wls2_consumable_food_kitchen_0",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 50,
          "unit": "点"
        },
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 30,
          "unit": "点"
        },
        {
          "id": "thirst",
          "label": "恢复水分",
          "value": 5,
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
        "id": "wls2_consumable_food_kitchen_0",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_corn_porridge_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "332e8ce99b07cd9d06adf4d07d6ef86dab2d43154a82ad3ae17b6d26a1dc2022",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 50,
            "display": "50 点"
          },
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 30,
            "display": "30 点"
          },
          {
            "key": "thirst",
            "label": "恢复水分",
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
      "id": "wls2_consumable_food_dryer_1",
      "item_id": "wls2_consumable_food_dryer_1",
      "name": "肉干",
      "name_en": "Dried meat",
      "name_source": "official_zh",
      "description": "能够很好地满足饥饿感。",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "食品与饮品",
      "tier": 1,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW/wls_dried_meat",
      "image_id": "wls2_consumable_food_dryer_1",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 30,
          "unit": "点"
        },
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 40,
          "unit": "点"
        },
        {
          "id": "thirst",
          "label": "恢复水分",
          "value": -2,
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
        "id": "wls2_consumable_food_dryer_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_dried_meat_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "7020e08e38c5c579bff8991c9744145094792a5375bd69855aefb00f12610909",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 30,
            "display": "30 点"
          },
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          },
          {
            "key": "thirst",
            "label": "恢复水分",
            "unit": "点",
            "value": -2,
            "display": "-2 点"
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
      "id": "wls2_consumable_food_kitchen_1",
      "item_id": "wls2_consumable_food_kitchen_1",
      "name": "豆汤",
      "name_en": "Bean soup",
      "name_source": "official_zh",
      "description": "健康，美味，超级满足。",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "食品与饮品",
      "tier": 1,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_food_kitchen_1",
      "image_id": "wls2_consumable_food_kitchen_1",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 75,
          "unit": "点"
        },
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 75,
          "unit": "点"
        },
        {
          "id": "thirst",
          "label": "恢复水分",
          "value": 15,
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
        "id": "wls2_consumable_food_kitchen_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Consumable_food_kitchen_1_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ba6990377679d3c73deda17d433dc71b397d37679ea16e831d1569a7adca6aac",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 75,
            "display": "75 点"
          },
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 75,
            "display": "75 点"
          },
          {
            "key": "thirst",
            "label": "恢复水分",
            "unit": "点",
            "value": 15,
            "display": "15 点"
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
      "id": "wls2_resourse_miscellaneous_flaskempty_1",
      "item_id": "wls2_resourse_miscellaneous_flaskempty_1",
      "name": "空罐子",
      "name_en": "Empty canteen",
      "name_source": "official_zh",
      "description": "一个储水罐。",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "饮品",
      "tier": 1,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/wls_jar_empty",
      "image_id": "wls2_resourse_miscellaneous_flaskempty_1",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_miscellaneous_flaskempty_1",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_1",
              "name": "薄皮革",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_miscellaneous_flaskempty_1",
          "result_name": "空罐子",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_flask_water_1",
          "label": "工作台制作",
          "target_id": "wls2_consumable_flask_water_1",
          "name": "装满了的罐子",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_flaskempty_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_jar_empty_name",
        "sorting_group": "food_drink",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "25d14822bfaec8475dde843ec2202ee6011aadb53f72ef6f64f8d9a259608924"
    },
    {
      "id": "wls2_consumable_flask_water_1",
      "item_id": "wls2_consumable_flask_water_1",
      "name": "装满了的罐子",
      "name_en": "Full canteen",
      "name_source": "official_zh",
      "description": "能够携带的水补给。",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "饮品",
      "tier": 1,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/wls_jar_full",
      "image_id": "wls2_consumable_flask_water_1",
      "equipment_id": null,
      "stats": [],
      "effects": [
        {
          "id": "wls2_consumable_water_temp_health",
          "label": "生命上限增加",
          "value": 20,
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
          "id": "wls2_consumable_flask_water_1",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_flaskempty_1",
              "name": "空罐子",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_flask_water_1",
          "result_name": "装满了的罐子",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_flask_heal_1",
          "label": "工作台制作",
          "target_id": "wls2_consumable_flask_heal_1",
          "name": "草药溶剂",
          "amount": 1
        },
        {
          "id": "wls2_resourse_miscellaneous_vodka_1",
          "label": "工作台制作",
          "target_id": "wls2_resourse_miscellaneous_vodka_1",
          "name": "酒精",
          "amount": 1
        },
        {
          "id": "wls2_consumable_flask_heal_2",
          "label": "工作台制作",
          "target_id": "wls2_consumable_flask_heal_2",
          "name": "强力药草溶剂",
          "amount": 1
        },
        {
          "id": "wls2_consumable_flask_heal_3",
          "label": "工作台制作",
          "target_id": "wls2_consumable_flask_heal_3",
          "name": "优质药草溶剂",
          "amount": 1
        },
        {
          "id": "wls2_consumable_flask_heal_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_flask_heal_4",
          "name": "印第安人秘密溶剂",
          "amount": 1
        },
        {
          "id": "wls2_consumable_flask_heal_5",
          "label": "工作台制作",
          "target_id": "wls2_consumable_flask_heal_5",
          "name": "纯粹药草溶剂",
          "amount": 1
        },
        {
          "id": "wls2_consumable_flask_heal_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_flask_heal_6",
          "name": "恶魔俱乐部浸泡",
          "amount": 1
        },
        {
          "id": "wls2_consumable_flask_heal_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_flask_heal_7",
          "name": "德克萨斯鼠尾草浸液",
          "amount": 1
        },
        {
          "id": "wls2_consumable_compote_3_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_compote_3_common",
          "name": "水果冻",
          "amount": 1
        },
        {
          "id": "wls2_consumable_cactus_drink_2_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_cactus_drink_2_common",
          "name": "仙人掌饮料",
          "amount": 1
        },
        {
          "id": "wls2_consumable_tea_4_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_tea_4_common",
          "name": "茶",
          "amount": 1
        },
        {
          "id": "wls2_consumable_coffee_5_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_coffee_5_common",
          "name": "咖啡",
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
          "id": "wls2_consumable_spiced_coffee_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_spiced_coffee_5_uncommon",
          "name": "香料咖啡",
          "amount": 1
        },
        {
          "id": "wls2_consumable_irish_coffee_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_irish_coffee_5_rare",
          "name": "爱尔兰咖啡",
          "amount": 1
        },
        {
          "id": "wls2_consumable_southern_tea_punch_4_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_southern_tea_punch_4_rare",
          "name": "南方茶酒",
          "amount": 1
        },
        {
          "id": "wls2_consumable_injun_drink_6_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_injun_drink_6_common",
          "name": "针叶树提取物",
          "amount": 1
        },
        {
          "id": "wls2_consumable_injun_drink_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_injun_drink_6_uncommon",
          "name": "因纽特针叶茶",
          "amount": 1
        },
        {
          "id": "wls2_consumable_injun_drink_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_injun_drink_6_rare",
          "name": "强烈提取",
          "amount": 1
        },
        {
          "id": "wls2_consumable_lime_squash_7_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_lime_squash_7_common",
          "name": "石灰鲜榨汁",
          "amount": 1
        },
        {
          "id": "wls2_consumable_mohito_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_mohito_7_uncommon",
          "name": "莫希托",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_flask_water_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_jar_full_name",
        "sorting_group": "food_drink",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": true
      },
      "image_key": "63d20ffba8fce7acf8bff9f1b17aa1f7951f59e1068cd57e40f7d5477ed4f5e9"
    },
    {
      "id": "wls2_consumable_schnitzel_2_common",
      "item_id": "wls2_consumable_schnitzel_2_common",
      "name": "炸肉排",
      "name_en": "Schnitzel",
      "name_source": "official_zh",
      "description": "这道菜的秘密在于它的脆皮，是由细细研磨的小麦制成的，为多汁的肉提供了令人愉悦的对比",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 2,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_food_kitchen_schnitzel_icon",
      "image_id": "wls2_consumable_schnitzel_2_common",
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
          "value": 15,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_schnitzel_temp_health",
          "label": "生命上限增加",
          "value": 40,
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
          "id": "wls2_static_town_trader_offer_food_kitchen_5",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_schnitzel_2_common",
          "result_name": "炸肉排",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_town_npc_butcher_trader_food_dryer_2_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_schnitzel_2_common",
          "result_name": "炸肉排",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_consumable_schnitzel_2_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_meat_1",
              "name": "硬肉",
              "amount": 1
            },
            {
              "id": "wls2_consumable_wheat",
              "name": "小麦",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_schnitzel_2_common",
          "result_name": "炸肉排",
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
        "id": "wls2_consumable_schnitzel_2_common",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_schnitzel_2_common_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "0b9400d501a767696e3634b3e281764c5780da8dbba7a11debce9b6c9ba0cf35",
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
            "value": 15,
            "display": "15 点"
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
      "id": "wls2_consumable_baked_poultry_2_uncommon",
      "item_id": "wls2_consumable_baked_poultry_2_uncommon",
      "name": "烤禽肉",
      "name_en": "Baked Poultry",
      "name_source": "official_zh",
      "description": "一道美味的菜肴，不仅让您的味蕾愉悦，还赋予您像公鸡一样的凶猛战斗精神，增强您的攻击",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_thanksgiving_turkey",
      "image_id": "wls2_consumable_baked_poultry_2_uncommon",
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
          "value": 15,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_baked_poultry_temp_health",
          "label": "生命上限增加",
          "value": 60,
          "unit": "",
          "duration": 3600,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_baked_poultry_temp_strength",
          "label": "力量",
          "value": 15,
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
          "id": "wls2_consumable_baked_poultry_2_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_cooking_ingredient_meat_white_2",
              "name": "白肉",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_salt_1",
              "name": "盐",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_baked_poultry_2_uncommon",
          "result_name": "烤禽肉",
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
        "id": "wls2_consumable_baked_poultry_2_uncommon",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_baked_poultry_2 _uncommon_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "591eb32be90656eee45f3e9484a0d29fdd6437274f56dafd0796288c74ec721b",
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
            "value": 15,
            "display": "15 点"
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
      "id": "wls2_consumable_cowboy_bisquits_2_common",
      "item_id": "wls2_consumable_cowboy_bisquits_2_common",
      "name": "牛仔饼干",
      "name_en": "Cowboy Biscuits",
      "name_source": "official_zh",
      "description": "正如边疆本身一样坚韧，这些以小麦为基础的饼干，也被称为“破齿者”，是任何旅程的美味伴侣",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 2,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_food_kitchen_cowboy_bisquits_icon",
      "image_id": "wls2_consumable_cowboy_bisquits_2_common",
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
          "value": 15,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_cowboy_bisquits_temp_health",
          "label": "生命上限增加",
          "value": 40,
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
          "id": "wls2_static_town_trader_offer_food_kitchen_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_cowboy_bisquits_2_common",
          "result_name": "牛仔饼干",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_consumable_cowboy_bisquits_2_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_wheat",
              "name": "小麦",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_cowboy_bisquits_2_common",
          "result_name": "牛仔饼干",
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
        "id": "wls2_consumable_cowboy_bisquits_2_common",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_cowboy_bisquits_2_common_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "afb3fbe579d88ebe4a6e7ef10186861c701446ed1d0517ad703da86a154f4d4e",
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
            "value": 15,
            "display": "15 点"
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
      "id": "wls2_consumable_food_kitchen_schnitzel",
      "item_id": "wls2_consumable_food_kitchen_schnitzel",
      "name": "炸肉排",
      "name_en": "Schnitzel",
      "name_source": "official_zh",
      "description": "裹上面包粉，用平底锅煎熟的肉片。脆脆的外皮为嫰肉带来了一种特殊风味。",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "食品与饮品",
      "tier": 2,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": true,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_food_kitchen_schnitzel_icon",
      "image_id": "wls2_consumable_food_kitchen_schnitzel",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 75,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 100,
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
        "id": "wls2_consumable_food_kitchen_schnitzel",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_food_kitchen_schnitzel_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "0b9400d501a767696e3634b3e281764c5780da8dbba7a11debce9b6c9ba0cf35",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 75,
            "display": "75 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 100,
            "display": "100 点"
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
      "id": "wls2_thanksgiving_turkey",
      "item_id": "wls2_thanksgiving_turkey",
      "name": "烤家禽肉",
      "name_en": "Roasted poultry",
      "name_source": "official_zh",
      "description": "非常适合摆上节日餐桌",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "食品与饮品",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": true,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_thanksgiving_turkey",
      "image_id": "wls2_thanksgiving_turkey",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 150,
          "unit": "点"
        },
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
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
        "id": "wls2_thanksgiving_turkey",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_thanksgiving_turkey_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "591eb32be90656eee45f3e9484a0d29fdd6437274f56dafd0796288c74ec721b",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 150,
            "display": "150 点"
          },
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
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
      "id": "wls2_consumable_food_kitchen_2",
      "item_id": "wls2_consumable_food_kitchen_2",
      "name": "燕麦粥",
      "name_en": "Oatmeal",
      "name_source": "official_zh",
      "description": "软糯丝滑的美味好粥",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "食品与饮品",
      "tier": 2,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": true,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_food_kitchen_2",
      "image_id": "wls2_consumable_food_kitchen_2",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 75,
          "unit": "点"
        },
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 75,
          "unit": "点"
        },
        {
          "id": "thirst",
          "label": "恢复水分",
          "value": 15,
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
        "id": "wls2_consumable_food_kitchen_2",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Consumable_food_kitchen_2_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "7f78ea8cf217148cc7ce9bf33b09c685c6225ab85a215514f3e1a1580dab970d",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 75,
            "display": "75 点"
          },
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 75,
            "display": "75 点"
          },
          {
            "key": "thirst",
            "label": "恢复水分",
            "unit": "点",
            "value": 15,
            "display": "15 点"
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
      "id": "wls2_consumable_food_kitchen_cowboy_bisquits",
      "item_id": "wls2_consumable_food_kitchen_cowboy_bisquits",
      "name": "牛仔饼干",
      "name_en": "Cowboy Biscuits",
      "name_source": "official_zh",
      "description": "石头一样硬的牛仔饼干，被大家戏称为“蹦牙饼干”。咖啡的好伴侣！",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "食品与饮品",
      "tier": 2,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": true,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_food_kitchen_cowboy_bisquits_icon",
      "image_id": "wls2_consumable_food_kitchen_cowboy_bisquits",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 50,
          "unit": "点"
        },
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
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_food_kitchen_cowboy_bisquits",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_food_kitchen_cowboy_bisquits_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "afb3fbe579d88ebe4a6e7ef10186861c701446ed1d0517ad703da86a154f4d4e",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 50,
            "display": "50 点"
          },
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
      "id": "wls2_thanksgiving_raw_turkey",
      "item_id": "wls2_thanksgiving_raw_turkey",
      "name": "白肉",
      "name_en": "White meat",
      "name_source": "official_zh",
      "description": "很有营养的食物，富含脂肪和蛋白质",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "食品与饮品",
      "tier": 2,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": true,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_meat_white_icon",
      "image_id": "wls2_thanksgiving_raw_turkey",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_hunger",
          "label": "恢复宠物饱食",
          "value": 10,
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
        "id": "wls2_thanksgiving_raw_turkey",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_meat_white_name",
        "sorting_group": "legasy",
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
      "id": "wls2_consumable_food_dryer_2",
      "item_id": "wls2_consumable_food_dryer_2",
      "name": "鱼干",
      "name_en": "Dried fish",
      "name_source": "official_zh",
      "description": "能够满足饥饿，但不能解渴。",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "食品与饮品",
      "tier": 2,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW/wls_dried_fish",
      "image_id": "wls2_consumable_food_dryer_2",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 30,
          "unit": "点"
        },
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 40,
          "unit": "点"
        },
        {
          "id": "thirst",
          "label": "恢复水分",
          "value": -2,
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
        "id": "wls2_consumable_food_dryer_2",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_dried_fish_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "837f148e0272971b343cbcd69b22539f528811205587baf0800c505e20cee7e8",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 30,
            "display": "30 点"
          },
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          },
          {
            "key": "thirst",
            "label": "恢复水分",
            "unit": "点",
            "value": -2,
            "display": "-2 点"
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
      "id": "wls2_consumable_cactus_drink_2_common",
      "item_id": "wls2_consumable_cactus_drink_2_common",
      "name": "仙人掌饮料",
      "name_en": "Cactus Drink",
      "name_source": "official_zh",
      "description": "一种清爽的饮料，由仙人掌果实和水混合而成",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "饮品",
      "tier": 2,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_cactus_drink_2_common",
      "image_id": "wls2_consumable_cactus_drink_2_common",
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
          "value": 15,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_cactus_drink_temp_health",
          "label": "生命上限增加",
          "value": 40,
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
          "id": "wls2_static_town_trader_offer_food_bonfire_1",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_cactus_drink_2_common",
          "result_name": "仙人掌饮料",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_consumable_cactus_drink_2_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_flask_water_1",
              "name": "装满了的罐子",
              "amount": 1
            },
            {
              "id": "wls_cactus_berry",
              "name": "仙人掌果",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_cactus_drink_2_common",
          "result_name": "仙人掌饮料",
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
        "id": "wls2_consumable_cactus_drink_2_common",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_cactus_drink_2_common_name",
        "sorting_group": "food_drink",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "681b97be75acf6cb6adc7dbcf84b9045d2cb4fee484bd750f1463d6beb488341",
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
            "value": 15,
            "display": "15 点"
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
      "id": "wls2_consumable_st_patricks_day_pie_t3",
      "item_id": "wls2_consumable_st_patricks_day_pie_t3",
      "name": "三叶草的爱尔兰派",
      "name_en": "Shamrock's Irish Pie",
      "name_source": "official_zh",
      "description": "一个金黄色的外壳派，提升你的信心",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_consumable_st_patricks_day_pie",
      "image_id": "wls2_consumable_st_patricks_day_pie_t3",
      "equipment_id": null,
      "stats": [],
      "effects": [
        {
          "id": "wls2_consumable_st_patricks_day_pie_t3_temp_strength",
          "label": "力量",
          "value": 5,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_st_patricks_day_pie_t3_dexterity",
          "label": "攻击速度",
          "value": 5,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_st_patricks_day_pie_t3_temp_stamina",
          "label": "体力属性",
          "value": 5,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_st_patricks_day_pie_t3_temp_spirit",
          "label": "精神",
          "value": 5,
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
        "id": "wls2_consumable_st_patricks_day_pie_t3",
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
      "id": "wls2_consumable_bean_bread_3_common",
      "item_id": "wls2_consumable_bean_bread_3_common",
      "name": "切诺基豆面包",
      "name_en": "Cherokee Bean Bread",
      "name_source": "official_zh",
      "description": "由豆类制成的柔软湿润的面包，是美洲原住民历史的永恒部分",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 3,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_bean_bread_3_common",
      "image_id": "wls2_consumable_bean_bread_3_common",
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
          "value": 20,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_bean_bread_temp_health",
          "label": "生命上限增加",
          "value": 75,
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
          "id": "wls2_consumable_bean_bread_3_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_beans_1",
              "name": "青豆",
              "amount": 3
            },
            {
              "id": "wls2_consumable_wheat",
              "name": "小麦",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_bean_bread_3_common",
          "result_name": "切诺基豆面包",
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
        "id": "wls2_consumable_bean_bread_3_common",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_bean_bread_3_common_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "d7b6129973bb17639b6bf796a267d49fe682e5ff7e3cbddc46125078102eedf9",
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
            "value": 20,
            "display": "20 点"
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
      "id": "wls2_consumable_pemmican_3_uncommon",
      "item_id": "wls2_consumable_pemmican_3_uncommon",
      "name": "干肉饼",
      "name_en": "Pemmican",
      "name_source": "official_zh",
      "description": "传统的美国土著人生存食品，滋养您的精神并培养与野生生物的和谐联系",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_pemmican_3_uncommon",
      "image_id": "wls2_consumable_pemmican_3_uncommon",
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
          "value": 20,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_pemmican_temp_health",
          "label": "生命上限增加",
          "value": 100,
          "unit": "",
          "duration": 3600,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_pemmican_temp_spirit",
          "label": "精神",
          "value": 7,
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
          "id": "wls2_consumable_pemmican_3_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_meat_3",
              "name": "多汁的肋骨",
              "amount": 2
            },
            {
              "id": "wls2_consumable_beans_1",
              "name": "青豆",
              "amount": 10
            },
            {
              "id": "wls2_resourse_miscellaneous_salt_1",
              "name": "盐",
              "amount": 3
            },
            {
              "id": "wls_berry",
              "name": "蓝莓",
              "amount": 5
            }
          ],
          "result_id": "wls2_consumable_pemmican_3_uncommon",
          "result_name": "干肉饼",
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
        "id": "wls2_consumable_pemmican_3_uncommon",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pemmican_3_uncommon_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "530bbfba1b3c720138977810f8c0929e0d1ac30a02e2df45a4bb842931203b55",
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
            "value": 20,
            "display": "20 点"
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
      "id": "wls2_consumable_hunter_stew_3_uncommon",
      "item_id": "wls2_consumable_hunter_stew_3_uncommon",
      "name": "温暖的野生炖菜",
      "name_en": "Warming Wild Stew",
      "name_source": "official_zh",
      "description": "由嫩肋骨和蓝莓的甜味制成的舒缓滋养炖菜，温暖您的灵魂并抵御寒冷",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_hunter_stew_3_uncommon",
      "image_id": "wls2_consumable_hunter_stew_3_uncommon",
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
          "value": 20,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_hunter_stew_temp_health",
          "label": "生命上限增加",
          "value": 100,
          "unit": "",
          "duration": 3600,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_hunter_stew_temp_warm",
          "label": "御寒",
          "value": 4,
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
          "id": "wls2_static_warmclothing_trader_offer_food_t3_uncommon",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_hunter_stew_3_uncommon",
          "result_name": "温暖的野生炖菜",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_consumable_hunter_stew_3_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_meat_3",
              "name": "多汁的肋骨",
              "amount": 3
            },
            {
              "id": "wls2_consumable_wheat",
              "name": "小麦",
              "amount": 10
            },
            {
              "id": "wls2_resourse_miscellaneous_salt_1",
              "name": "盐",
              "amount": 1
            },
            {
              "id": "wls_berry",
              "name": "蓝莓",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_hunter_stew_3_uncommon",
          "result_name": "温暖的野生炖菜",
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
        "id": "wls2_consumable_hunter_stew_3_uncommon",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_hunter_stew_3_uncommon_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "3126337014ada2e815c03770bb319c86636bc679e069fcb7b52a25c0da1c265d",
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
            "value": 20,
            "display": "20 点"
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
      "id": "wls2_consumable_food_bonfire_3",
      "item_id": "wls2_consumable_food_bonfire_3",
      "name": "炸鱼",
      "name_en": "Fried fish",
      "name_source": "official_zh",
      "description": "能够很好地填补饥饿并治愈伤口",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW/wls_fried_fish",
      "image_id": "wls2_consumable_food_bonfire_3",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 30,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 20,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_food_bonfire_3_temp_health",
          "label": "生命上限增加",
          "value": 75,
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
          "id": "wls2_consumable_food_bonfire_3",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls_fish",
              "name": "水牛鱼",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_food_bonfire_3",
          "result_name": "炸鱼",
          "amount": 1
        },
        {
          "id": "wls2_static_town_trader_offer_food_bonfire_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_food_bonfire_3",
          "result_name": "炸鱼",
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
        "id": "wls2_consumable_food_bonfire_3",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_fried_fish_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "0174f7adbab0a1d47bcf268aeae7a74510271b9d694d28fafa37b9179c59ed0a",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 30,
            "display": "30 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 20,
            "display": "20 点"
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
      "id": "wls2_consumable_ribs_blueberry_3_common",
      "item_id": "wls2_consumable_ribs_blueberry_3_common",
      "name": "烤鸡",
      "name_en": "Grilled chicken",
      "name_source": "official_zh",
      "description": "金黄色的多汁鸡肉烤制而成",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 3,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_consumable_chicken_legs_3_common",
      "image_id": "wls2_consumable_ribs_blueberry_3_common",
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
          "value": 20,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_ribs_blueberry_temp_health",
          "label": "生命上限增加",
          "value": 75,
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
          "id": "wls2_consumable_ribs_blueberry_3_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_cooking_ingredient_meat_white_2",
              "name": "白肉",
              "amount": 1
            },
            {
              "id": "wls_berry",
              "name": "蓝莓",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_ribs_blueberry_3_common",
          "result_name": "烤鸡",
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
        "id": "wls2_consumable_ribs_blueberry_3_common",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_chicken_3_common_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1160bcaf51c60582d76439f754377a03d3770437c07321b3581e6f2468725431",
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
            "value": 20,
            "display": "20 点"
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
      "id": "wls2_consumable_roasted_bone_marrow_t3",
      "item_id": "wls2_consumable_roasted_bone_marrow_t3",
      "name": "熏骨髓",
      "name_en": "Smoked Marrowbone",
      "name_source": "official_zh",
      "description": "足够丰盛以使你变得坚韧并增加你的宠物的攻击力的额外咬合力",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_roasted_bone_marrow",
      "image_id": "wls2_consumable_roasted_bone_marrow_t3",
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
          "value": 20,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_roasted_bone_marrow_t3_temp_pet_damage",
          "label": "宠物额外伤害",
          "value": 40,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_blueberry_meat_pie_temp_health",
          "label": "生命上限增加",
          "value": 150,
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
        "id": "wls2_consumable_roasted_bone_marrow_t3",
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
            "value": 20,
            "display": "20 点"
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
      "id": "wls2_consumable_blueberry_meat_pie_3_rare",
      "item_id": "wls2_consumable_blueberry_meat_pie_3_rare",
      "name": "蓝莓汁猪排",
      "name_en": "Ribs in Blueberry Sauce",
      "name_source": "official_zh",
      "description": "一个传统的土著食谱，用蓝莓酱调制出美味多汁的肋骨。",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_ribs_blueberry_3_common",
      "image_id": "wls2_consumable_blueberry_meat_pie_3_rare",
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
          "value": 20,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_blueberry_meat_pie_temp_health",
          "label": "生命上限增加",
          "value": 150,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_blueberry_meat_pie_temp_strength",
          "label": "力量",
          "value": 30,
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
          "id": "wls2_consumable_blueberry_meat_pie_3_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_meat_3",
              "name": "多汁的肋骨",
              "amount": 3
            },
            {
              "id": "wls2_consumable_wheat",
              "name": "小麦",
              "amount": 10
            },
            {
              "id": "wls2_resourse_miscellaneous_spice_1",
              "name": "香料",
              "amount": 2
            },
            {
              "id": "wls_berry",
              "name": "蓝莓",
              "amount": 5
            }
          ],
          "result_id": "wls2_consumable_blueberry_meat_pie_3_rare",
          "result_name": "蓝莓汁猪排",
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
        "id": "wls2_consumable_blueberry_meat_pie_3_rare",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_ribs_blueberry_3_common_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "49038c149d85a89a8f621d0df311f79fc91e911d85d6f3b9b351e62d9cb60253",
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
            "value": 20,
            "display": "20 点"
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
      "id": "wls2_coffee_cup",
      "item_id": "wls2_coffee_cup",
      "name": "牛仔咖啡",
      "name_en": "Cowboy coffee",
      "name_source": "official_zh",
      "description": "备受牛仔喜爱的风味饮品。提供能量，还能解渴。",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "食品与饮品",
      "tier": 3,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": true,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_coffee_cup",
      "image_id": "wls2_coffee_cup",
      "equipment_id": null,
      "stats": [
        {
          "id": "energy",
          "label": "恢复体力",
          "value": 5,
          "unit": ""
        },
        {
          "id": "thirst",
          "label": "恢复水分",
          "value": 10,
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
        "id": "wls2_coffee_cup",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_coffee_cup_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "227fff453fdc421ecedc07fffab13532a43c16cc944f1023bda9a7cefb6ad65f",
      "numeric": {
        "summary": [
          {
            "key": "energy",
            "label": "恢复体力",
            "unit": "",
            "value": 5,
            "display": "5"
          },
          {
            "key": "thirst",
            "label": "恢复水分",
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
      "id": "wls2_consumable_food_kitchen_5",
      "item_id": "wls2_consumable_food_kitchen_5",
      "name": "牛排",
      "name_en": "Steak",
      "name_source": "official_zh",
      "description": "美味的三分熟牛排，完美",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "食品与饮品",
      "tier": 3,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": true,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_food_kitchen_5",
      "image_id": "wls2_consumable_food_kitchen_5",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "thirst",
          "label": "恢复水分",
          "value": 30,
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
        "id": "wls2_consumable_food_kitchen_5",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Consumable_food_kitchen_5_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "668b3a7b69c86273e2529c8a227be25b041a9f5eade8faf9fc854e45f8ed8c92",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "thirst",
            "label": "恢复水分",
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
      "id": "wls2_consumable_food_bonfire_1",
      "item_id": "wls2_consumable_food_bonfire_1",
      "name": "糖渍水果",
      "name_en": "Compote",
      "name_source": "official_zh",
      "description": "优秀的解渴物品，在火坑上由浆果制成",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "食品与饮品",
      "tier": 3,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": true,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW/wls_compote",
      "image_id": "wls2_consumable_food_bonfire_1",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 35,
          "unit": "点"
        },
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 10,
          "unit": "点"
        },
        {
          "id": "thirst",
          "label": "恢复水分",
          "value": 75,
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
        "id": "wls2_consumable_food_bonfire_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_compote_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "98067260f6e45453aeabdcad6818784040f7bffcf56d066713caea9a383025ef",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 35,
            "display": "35 点"
          },
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 10,
            "display": "10 点"
          },
          {
            "key": "thirst",
            "label": "恢复水分",
            "unit": "点",
            "value": 75,
            "display": "75 点"
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
      "id": "wls2_consumable_compote_3_common",
      "item_id": "wls2_consumable_compote_3_common",
      "name": "水果冻",
      "name_en": "Compote",
      "name_source": "official_zh",
      "description": "通过将美味的蓝莓浸泡在水中制作的一种清爽饮料，捕捉自然的甜味",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "饮品",
      "tier": 3,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW/wls_compote",
      "image_id": "wls2_consumable_compote_3_common",
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
          "value": 20,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_compote_temp_health",
          "label": "生命上限增加",
          "value": 75,
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
          "id": "wls2_consumable_compote_3_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_flask_water_1",
              "name": "装满了的罐子",
              "amount": 1
            },
            {
              "id": "wls_berry",
              "name": "蓝莓",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_compote_3_common",
          "result_name": "水果冻",
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
        "id": "wls2_consumable_compote_3_common",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_compote_3_common_name",
        "sorting_group": "food_drink",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "98067260f6e45453aeabdcad6818784040f7bffcf56d066713caea9a383025ef",
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
            "value": 20,
            "display": "20 点"
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
      "id": "wls2_consumable_smithfield_ham_4_rare",
      "item_id": "wls2_consumable_smithfield_ham_4_rare",
      "name": "史密斯菲尔德火腿",
      "name_en": "Smithfield Ham",
      "name_source": "official_zh",
      "description": "这款美味的火腿采用受人尊敬的南方食谱制作，能提高你的专注力，激发你内心的狙击手",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_smithfield_ham_4_rare",
      "image_id": "wls2_consumable_smithfield_ham_4_rare",
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
          "value": 25,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_smithfield_ham_temp_health",
          "label": "生命上限增加",
          "value": 300,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_smithfield_ham_temp_dexterity",
          "label": "攻击速度",
          "value": 10,
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
          "id": "wls2_consumable_smithfield_ham_4_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_meat_tenderloin",
              "name": "肉片",
              "amount": 5
            },
            {
              "id": "wls2_consumable_cabbage",
              "name": "卷心菜",
              "amount": 10
            },
            {
              "id": "wls2_resourse_miscellaneous_spice_1",
              "name": "香料",
              "amount": 2
            },
            {
              "id": "wls2_cooking_ingredient_mustard_4",
              "name": "芥末",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_smithfield_ham_4_rare",
          "result_name": "史密斯菲尔德火腿",
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
        "id": "wls2_consumable_smithfield_ham_4_rare",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_smithfield_ham_4_rare_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4ffb3e7ab10cbfc56999e24ec0226ad6a6f138e44c8f3494801b5133a8bdeb48",
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
            "value": 25,
            "display": "25 点"
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
      "id": "wls2_consumable_bacon_bread_pudding_4_uncommon",
      "item_id": "wls2_consumable_bacon_bread_pudding_4_uncommon",
      "name": "培根面包布丁",
      "name_en": "Bacon Bread Pudding",
      "name_source": "official_zh",
      "description": "一种受人珍爱的南方美食，有着酥脆的培根和柔软的面团，使你有力量以极高效率抵御野生动物的攻击",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_bacon_bread_pudding_4_uncommon",
      "image_id": "wls2_consumable_bacon_bread_pudding_4_uncommon",
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
          "value": 25,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_bacon_bread_pudding_temp_health",
          "label": "生命上限增加",
          "value": 200,
          "unit": "",
          "duration": 3600,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_bacon_bread_pudding_temp_move_speed",
          "label": "动物伤害抗性",
          "value": 10.0,
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
          "id": "wls2_consumable_bacon_bread_pudding_4_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_meat_tenderloin",
              "name": "肉片",
              "amount": 3
            },
            {
              "id": "wls2_consumable_wheat",
              "name": "小麦",
              "amount": 10
            },
            {
              "id": "wls2_resourse_miscellaneous_salt_1",
              "name": "盐",
              "amount": 4
            },
            {
              "id": "wls2_cooking_ingredient_mustard_4",
              "name": "芥末",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_bacon_bread_pudding_4_uncommon",
          "result_name": "培根面包布丁",
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
        "id": "wls2_consumable_bacon_bread_pudding_4_uncommon",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_bacon_bread_pudding_4_uncommon_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "6e396911fe856c617905140a72ba36112e206eccc9ae545c99439a07b35b85e7",
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
            "value": 25,
            "display": "25 点"
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
      "id": "wls2_consumable_fried_trout_4_rare",
      "item_id": "wls2_consumable_fried_trout_4_rare",
      "name": "炸鳟鱼",
      "name_en": "Fried trout",
      "name_source": "official_zh",
      "description": "一个简单的，令人满足的菜肴，带有酥脆的皮和软的，易碎的肉",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_consumable_fried_trout_4_rare",
      "image_id": "wls2_consumable_fried_trout_4_rare",
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
          "value": 25,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_bacon_bread_pudding_temp_health",
          "label": "生命上限增加",
          "value": 200,
          "unit": "",
          "duration": 3600,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_bacon_bread_pudding_temp_move_speed",
          "label": "动物伤害抗性",
          "value": 10.0,
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
          "id": "wls2_consumable_fried_trout_4_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls_fish_t4_trout",
              "name": "鳟鱼",
              "amount": 4
            },
            {
              "id": "wls2_consumable_wheat",
              "name": "小麦",
              "amount": 10
            },
            {
              "id": "wls2_resourse_miscellaneous_salt_1",
              "name": "盐",
              "amount": 4
            },
            {
              "id": "wls2_cooking_ingredient_mustard_4",
              "name": "芥末",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_fried_trout_4_rare",
          "result_name": "炸鳟鱼",
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
        "id": "wls2_consumable_fried_trout_4_rare",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_fried_trout_4_rare_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "da16c2f9054690dc2cf8a54fa7f02042757cacb940cca565982ff6e99a36dad1",
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
            "value": 25,
            "display": "25 点"
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
      "id": "wls2_consumable_fried_chicken_4_common",
      "item_id": "wls2_consumable_fried_chicken_4_common",
      "name": "炸鸡",
      "name_en": "Fried Chicken",
      "name_source": "official_zh",
      "description": "每一块嫩鸡都炸成金黄色、酥脆完美，捕捉到了肯塔基炸鸡传统的垂涎鲜美",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 4,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_fried_chicken_4_common",
      "image_id": "wls2_consumable_fried_chicken_4_common",
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
          "value": 25,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_fried_chicken_temp_health",
          "label": "生命上限增加",
          "value": 150,
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
          "id": "wls2_consumable_fried_chicken_4_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_cooking_ingredient_meat_white_2",
              "name": "白肉",
              "amount": 2
            },
            {
              "id": "wls2_consumable_wheat",
              "name": "小麦",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_fried_chicken_4_common",
          "result_name": "炸鸡",
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
        "id": "wls2_consumable_fried_chicken_4_common",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_fried_chicken_4_common_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "04617852c7943e6e54ed7d80b79e87a863a5155d760f8ee82f31de0545fb52f0",
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
            "value": 25,
            "display": "25 点"
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
      "id": "wls2_consumable_roasted_bone_marrow_t4",
      "item_id": "wls2_consumable_roasted_bone_marrow_t4",
      "name": "熏骨髓",
      "name_en": "Smoked Marrowbone",
      "name_source": "official_zh",
      "description": "足够丰盛以使你变得坚韧并增加你的宠物的攻击力的额外咬合力",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_roasted_bone_marrow",
      "image_id": "wls2_consumable_roasted_bone_marrow_t4",
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
          "value": 25,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_roasted_bone_marrow_t4_temp_pet_damage",
          "label": "宠物额外伤害",
          "value": 75,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_smithfield_ham_temp_health",
          "label": "生命上限增加",
          "value": 300,
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
        "id": "wls2_consumable_roasted_bone_marrow_t4",
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
            "value": 25,
            "display": "25 点"
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
      "id": "wls2_consumable_fillet_steak_4_common",
      "item_id": "wls2_consumable_fillet_steak_4_common",
      "name": "牛排",
      "name_en": "Fillet Steak",
      "name_source": "official_zh",
      "description": "一块优质的牛排，用一点盐煎得完美，是每个牛仔的喜爱",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 4,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_fillet_steak_4_common",
      "image_id": "wls2_consumable_fillet_steak_4_common",
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
          "value": 25,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_fillet_steak_temp_health",
          "label": "生命上限增加",
          "value": 150,
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
          "id": "wls2_consumable_fillet_steak_4_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_meat_tenderloin",
              "name": "肉片",
              "amount": 2
            },
            {
              "id": "wls_berry",
              "name": "蓝莓",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_fillet_steak_4_common",
          "result_name": "牛排",
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
        "id": "wls2_consumable_fillet_steak_4_common",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_fillet _steak_4_common_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "bb3262e81c086ac7839970ccb5751f3d2370f0974d0ed93941dd1d8eba8bfc27",
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
            "value": 25,
            "display": "25 点"
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
      "id": "wls2_consumable_hoppin_john_4_uncommon",
      "item_id": "wls2_consumable_hoppin_john_4_uncommon",
      "name": "跳跃约翰",
      "name_en": "Hoppin' John",
      "name_source": "official_zh",
      "description": "一道经典的南方菜肴有着成千上万种变化。但这个特别的食谱会让你在使用斧头和镐时变得更加高效！",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_hoppin_john_4_uncommon",
      "image_id": "wls2_consumable_hoppin_john_4_uncommon",
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
          "value": 25,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_hoppin_john_temp_health",
          "label": "生命上限增加",
          "value": 200,
          "unit": "",
          "duration": 3600,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_hoppin_john_temp_gathering",
          "label": "采集速度加成",
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
          "id": "wls2_consumable_hoppin_john_4_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_meat_tenderloin",
              "name": "肉片",
              "amount": 2
            },
            {
              "id": "wls2_consumable_cabbage",
              "name": "卷心菜",
              "amount": 10
            },
            {
              "id": "wls2_resourse_miscellaneous_salt_1",
              "name": "盐",
              "amount": 4
            },
            {
              "id": "wls2_cooking_ingredient_mustard_4",
              "name": "芥末",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_hoppin_john_4_uncommon",
          "result_name": "跳跃约翰",
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
        "id": "wls2_consumable_hoppin_john_4_uncommon",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_hoppin_john_4_uncommon_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a653d160defb58bc013a62dad5869effa9f1cf60c56db5dd31bf8848f22bc844",
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
            "value": 25,
            "display": "25 点"
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
      "id": "wls2_consumable_food_kitchen_3",
      "item_id": "wls2_consumable_food_kitchen_3",
      "name": "南瓜粥",
      "name_en": "Pumpkin porridge",
      "name_source": "official_zh",
      "description": "美味健康的南瓜粥",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "食品与饮品",
      "tier": 4,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": true,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_food_kitchen_3",
      "image_id": "wls2_consumable_food_kitchen_3",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 110,
          "unit": "点"
        },
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "thirst",
          "label": "恢复水分",
          "value": 40,
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
        "id": "wls2_consumable_food_kitchen_3",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Consumable_food_kitchen_3_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "8d61a01fbb5af22d10b7e23bd5a53261cd9a4eb9712aa117f9153da8f4431dfe",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 110,
            "display": "110 点"
          },
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "thirst",
            "label": "恢复水分",
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
      "id": "wls2_consumable_food_kitchen_coleslaw",
      "item_id": "wls2_consumable_food_kitchen_coleslaw",
      "name": "卷心菜沙拉",
      "name_en": "Coleslaw",
      "name_source": "official_zh",
      "description": "一份简单的卷心菜沙拉。容易烹饪、可长期保存，最重要的是——非常健康。",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "食品与饮品",
      "tier": 4,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": true,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_food_kitchen_coleslaw_icon",
      "image_id": "wls2_consumable_food_kitchen_coleslaw",
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 40,
          "unit": "点"
        },
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
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_food_kitchen_coleslaw",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_food_kitchen_coleslaw_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ee333410586eae468d28e697319a06e2f951812a49d5c0a9ed29db7a9cf8cb0a",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          },
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
      "id": "wls2_consumable_iced_tea_4_uncommon",
      "item_id": "wls2_consumable_iced_tea_4_uncommon",
      "name": "冰茶",
      "name_en": "Iced Tea",
      "name_source": "official_zh",
      "description": "一种凉爽清新的饮料，非常适合炎炎夏日",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "饮品",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_iced_tea_4_uncommon",
      "image_id": "wls2_consumable_iced_tea_4_uncommon",
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
          "value": 25,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_iced_tea_temp_health",
          "label": "生命上限增加",
          "value": 200,
          "unit": "",
          "duration": 3600,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_iced_tea_temp_cool",
          "label": "耐热",
          "value": 4,
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
          "id": "wls2_south_trader_food_t4_uncommon",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_iced_tea_4_uncommon",
          "result_name": "冰茶",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_consumable_iced_tea_4_uncommon",
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
              "id": "wls2_cooking_ingredient_pack_tea_4",
              "name": "茶包",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_iced_tea_4_uncommon",
          "result_name": "冰茶",
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
        "id": "wls2_consumable_iced_tea_4_uncommon",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_iced_tea_4_uncommon_name",
        "sorting_group": "food_drink",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "713767460141741e8dba05de53b7a09de00be75c86aab23212f1e78d9f703fee",
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
            "value": 25,
            "display": "25 点"
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
      "id": "wls2_consumable_southern_tea_punch_4_rare",
      "item_id": "wls2_consumable_southern_tea_punch_4_rare",
      "name": "南方茶酒",
      "name_en": "Southern Tea Punch",
      "name_source": "official_zh",
      "description": "这种饮料不仅使人精神焕发，而且赋予勇气和力量，面对任何敌人",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "饮品",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_southern_tea_punch_4_rare",
      "image_id": "wls2_consumable_southern_tea_punch_4_rare",
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
          "value": 25,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_southern_tea_punch_temp_health",
          "label": "生命上限增加",
          "value": 300,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_southern_tea_punch_temp_strength",
          "label": "力量",
          "value": 100,
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
          "id": "wls2_consumable_southern_tea_punch_4_rare",
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
              "id": "wls2_cooking_ingredient_pack_tea_4",
              "name": "茶包",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_southern_tea_punch_4_rare",
          "result_name": "南方茶酒",
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
        "id": "wls2_consumable_southern_tea_punch_4_rare",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_southern_tea_punch _4_rare_name",
        "sorting_group": "food_drink",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "d683ee88322ef59f97b90a5f389c4601093587748ff808414dd522a26dc60bfb",
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
            "value": 25,
            "display": "25 点"
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
      "id": "wls2_consumable_tea_4_common",
      "item_id": "wls2_consumable_tea_4_common",
      "name": "茶",
      "name_en": "Tea",
      "name_source": "official_zh",
      "description": "一种永恒的令人宽慰的饮料，非常适合每天的任何时刻",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "饮品",
      "tier": 4,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_tea_4_common",
      "image_id": "wls2_consumable_tea_4_common",
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
          "value": 25,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_tea_temp_health",
          "label": "生命上限增加",
          "value": 150,
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
          "id": "wls2_consumable_tea_4_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_flask_water_1",
              "name": "装满了的罐子",
              "amount": 1
            },
            {
              "id": "wls2_cooking_ingredient_pack_tea_4",
              "name": "茶包",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_tea_4_common",
          "result_name": "茶",
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
        "id": "wls2_consumable_tea_4_common",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_tea_4_common_name",
        "sorting_group": "food_drink",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "9e83fef8b0794f794509821c5135244014dccc6502e9bf4b9e78ee02a2532a05",
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
            "value": 25,
            "display": "25 点"
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
      "id": "wls2_consumable_st_patricks_day_pie_t5",
      "item_id": "wls2_consumable_st_patricks_day_pie_t5",
      "name": "三叶草的爱尔兰派",
      "name_en": "Shamrock's Irish Pie",
      "name_source": "official_zh",
      "description": "一个金黄色的外壳派，提升你的信心",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_consumable_st_patricks_day_pie",
      "image_id": "wls2_consumable_st_patricks_day_pie_t5",
      "equipment_id": null,
      "stats": [],
      "effects": [
        {
          "id": "wls2_consumable_st_patricks_day_pie_t5_temp_strength",
          "label": "力量",
          "value": 15,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_st_patricks_day_pie_t5_dexterity",
          "label": "攻击速度",
          "value": 15,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_st_patricks_day_pie_t5_temp_stamina",
          "label": "体力属性",
          "value": 15,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_st_patricks_day_pie_t5_temp_spirit",
          "label": "精神",
          "value": 15,
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
        "id": "wls2_consumable_st_patricks_day_pie_t5",
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
      "id": "wls2_consumable_pumpkin_bisque_5_common",
      "item_id": "wls2_consumable_pumpkin_bisque_5_common",
      "name": "南瓜浓汤",
      "name_en": "Pumpkin Bisque",
      "name_source": "official_zh",
      "description": "这是一道备受喜爱的法国风味浓汤，因其美味和令人宽慰而在卡真料理中广受赞誉",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_pumpkin_bisque_5_common",
      "image_id": "wls2_consumable_pumpkin_bisque_5_common",
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
          "value": 30,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_pumpkin_bisque_temp_health",
          "label": "生命上限增加",
          "value": 300,
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
          "id": "wls2_swamp_trader_2_food_kitchen_4",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_pumpkin_bisque_5_common",
          "result_name": "南瓜浓汤",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_consumable_pumpkin_bisque_5_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_pumpkin_1",
              "name": "南瓜",
              "amount": 6
            }
          ],
          "result_id": "wls2_consumable_pumpkin_bisque_5_common",
          "result_name": "南瓜浓汤",
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
        "id": "wls2_consumable_pumpkin_bisque_5_common",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pumpkin_bisque_5_common_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "271a4b0982b785954223d6ee585be0a37f2f477c5d1e1886af0d7fac69b06541",
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
      "id": "wls2_consumable_cajun_pumpkin_porridge_5_uncommon",
      "item_id": "wls2_consumable_cajun_pumpkin_porridge_5_uncommon",
      "name": "卡真南瓜燕麦",
      "name_en": "Cajun Pumpkin Porridge",
      "name_source": "official_zh",
      "description": "南瓜粥配香肠能给你力量穿越沼泽地",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_cajun_pumpkin_porridge_5_uncommon",
      "image_id": "wls2_consumable_cajun_pumpkin_porridge_5_uncommon",
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
          "value": 30,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_cajun_pumpkin_porridge_temp_health",
          "label": "生命上限增加",
          "value": 400,
          "unit": "",
          "duration": 3600,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_cajun_pumpkin_porridge_temp_resistance_water",
          "label": "沼泽地水域使速度减慢",
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
          "id": "wls2_swamp_trader_2_food_kitchen_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_cajun_pumpkin_porridge_5_uncommon",
          "result_name": "卡真南瓜燕麦",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_consumable_cajun_pumpkin_porridge_5_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_cooking_ingredient_exotic_meat_5",
              "name": "异国风味肉",
              "amount": 3
            },
            {
              "id": "wls2_consumable_pumpkin_1",
              "name": "南瓜",
              "amount": 10
            },
            {
              "id": "wls2_resourse_miscellaneous_salt_1",
              "name": "盐",
              "amount": 4
            },
            {
              "id": "wls2_cooking_ingredient_spice_sauce_5",
              "name": "辣酱",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_cajun_pumpkin_porridge_5_uncommon",
          "result_name": "卡真南瓜燕麦",
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
        "id": "wls2_consumable_cajun_pumpkin_porridge_5_uncommon",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_cajun_pumpkin_porridge_5_uncommon_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "31e4d521e0ac325b79b1aab885a8215779c4625845daa1dd90f39e6d731c6ce3",
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
      "id": "wls2_consumable_boudin_corndog_5_rare",
      "item_id": "wls2_consumable_boudin_corndog_5_rare",
      "name": "布丁玉米犬",
      "name_en": "Boudin Corn dog",
      "name_source": "official_zh",
      "description": "全美国最喜爱的食物，融入了美味的卡真风味，给您的肚子带来幸福，为您的攻击带来力量",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_boudin_corndog_5_rare",
      "image_id": "wls2_consumable_boudin_corndog_5_rare",
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
          "value": 30,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_boudin_corndog_temp_health",
          "label": "生命上限增加",
          "value": 500,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_boudin_corndog_temp_strength",
          "label": "力量",
          "value": 200,
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
          "id": "wls2_consumable_boudin_corndog_5_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_cooking_ingredient_exotic_meat_5",
              "name": "异国风味肉",
              "amount": 5
            },
            {
              "id": "wls2_consumable_corn_1",
              "name": "玉米",
              "amount": 10
            },
            {
              "id": "wls2_resourse_miscellaneous_spice_1",
              "name": "香料",
              "amount": 2
            },
            {
              "id": "wls2_cooking_ingredient_spice_sauce_5",
              "name": "辣酱",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_boudin_corndog_5_rare",
          "result_name": "布丁玉米犬",
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
        "id": "wls2_consumable_boudin_corndog_5_rare",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_boudin_corndog_5_rare_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "db71774b0df6fbdd46ae4e44b9a71b94cdfb4d81938e5b3d7b54aa32c9cfab3a",
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
      "id": "wls2_consumable_roasted_bone_marrow_t5",
      "item_id": "wls2_consumable_roasted_bone_marrow_t5",
      "name": "熏骨髓",
      "name_en": "Smoked Marrowbone",
      "name_source": "official_zh",
      "description": "足够丰盛以使你变得坚韧并增加你的宠物的攻击力的额外咬合力",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_roasted_bone_marrow",
      "image_id": "wls2_consumable_roasted_bone_marrow_t5",
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
          "value": 30,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_roasted_bone_marrow_t5_temp_pet_damage",
          "label": "宠物额外伤害",
          "value": 125,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_irish_coffee_temp_health",
          "label": "生命上限增加",
          "value": 500,
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
        "id": "wls2_consumable_roasted_bone_marrow_t5",
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
      "id": "wls2_consumable_potlikker_stew_5_uncommon",
      "item_id": "wls2_consumable_potlikker_stew_5_uncommon",
      "name": "玉米面包汤",
      "name_en": "Potlikker with Cornbread",
      "name_source": "official_zh",
      "description": "一种美味的炖菜体现了你内在的力量，在战斗中提供额外的防御力来抵御敌人的攻击",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_potlikker_stew_5_uncommon",
      "image_id": "wls2_consumable_potlikker_stew_5_uncommon",
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
          "value": 30,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_potlikker_stew_temp_health",
          "label": "生命上限增加",
          "value": 400,
          "unit": "",
          "duration": 3600,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_potlikker_stew_temp_crit_chance",
          "label": "体力属性",
          "value": 15,
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
          "id": "wls2_consumable_potlikker_stew_5_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_meat_tenderloin",
              "name": "肉片",
              "amount": 4
            },
            {
              "id": "wls2_consumable_corn_1",
              "name": "玉米",
              "amount": 10
            },
            {
              "id": "wls2_consumable_wheat",
              "name": "小麦",
              "amount": 10
            },
            {
              "id": "wls2_cooking_ingredient_spice_sauce_5",
              "name": "辣酱",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_potlikker_stew_5_uncommon",
          "result_name": "玉米面包汤",
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
        "id": "wls2_consumable_potlikker_stew_5_uncommon",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_potlikker_stew_5_uncommon_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "c7a35021a7c288f94f6226440cb19ed465503607ae726ba33c8288a4c99fc320",
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
      "id": "wls2_consumable_medallion_steak_5_common",
      "item_id": "wls2_consumable_medallion_steak_5_common",
      "name": "肉眼牛排配肉汁",
      "name_en": "Medallion Steak with Gravy",
      "name_source": "official_zh",
      "description": "多汁嫩滑，烹饪得恰到好处的牛排，用辣酱提升了它的风味",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_medallion_steak_5_common",
      "image_id": "wls2_consumable_medallion_steak_5_common",
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
          "value": 30,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_medallion_steak_temp_health",
          "label": "生命上限增加",
          "value": 300,
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
          "id": "wls2_swamp_trader_2_food_kitchen_5",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_medallion_steak_5_common",
          "result_name": "肉眼牛排配肉汁",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_consumable_medallion_steak_5_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_meat_tenderloin",
              "name": "肉片",
              "amount": 4
            },
            {
              "id": "wls_berry",
              "name": "蓝莓",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_medallion_steak_5_common",
          "result_name": "肉眼牛排配肉汁",
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
        "id": "wls2_consumable_medallion_steak_5_common",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_medallion_steak_5_common_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5c5332589d65b6c98d4c18eb49f07d3bc5efad47a6a8456aa2a1a1cc2083b90c",
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
      "id": "wls2_consumable_courtbouillon_5_rare",
      "item_id": "wls2_consumable_courtbouillon_5_rare",
      "name": "鱼汤",
      "name_en": "Fish broth",
      "name_source": "official_zh",
      "description": "一种卡津风格的鱼菜，带有香料和蔬菜。辛辣，芳香，和富有风味。",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_consumable_courtbouillon_5_rare",
      "image_id": "wls2_consumable_courtbouillon_5_rare",
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
          "value": 30,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_gumbo_temp_health",
          "label": "生命上限增加",
          "value": 500,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_gumbo_temp_stamina",
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
          "id": "wls2_consumable_courtbouillon_5_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls_fish_t5_catfish",
              "name": "鲶鱼",
              "amount": 4
            },
            {
              "id": "wls2_consumable_cabbage",
              "name": "卷心菜",
              "amount": 4
            },
            {
              "id": "wls2_resourse_miscellaneous_spice_1",
              "name": "香料",
              "amount": 4
            },
            {
              "id": "wls2_cooking_ingredient_spice_sauce_5",
              "name": "辣酱",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_courtbouillon_5_rare",
          "result_name": "鱼汤",
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
        "id": "wls2_consumable_courtbouillon_5_rare",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_courtbouillon_5_rare_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "66cf1a918c83f72d9527f850105d7506be350d60af96ca2d4e50e68b0d22df26",
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
      "id": "wls2_consumable_gumbo_5_rare",
      "item_id": "wls2_consumable_gumbo_5_rare",
      "name": "龙虾浓汤",
      "name_en": "Gumbo",
      "name_source": "official_zh",
      "description": "传统的卡真浓汤以其混合的口味和提高精确度的能力而闻名，在战斗中增加暴击几率",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_gumbo_5_rare",
      "image_id": "wls2_consumable_gumbo_5_rare",
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
          "value": 30,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_gumbo_temp_health",
          "label": "生命上限增加",
          "value": 500,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_gumbo_temp_stamina",
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
          "id": "wls2_consumable_gumbo_5_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_cooking_ingredient_exotic_meat_5",
              "name": "异国风味肉",
              "amount": 3
            },
            {
              "id": "wls2_consumable_meat_tenderloin",
              "name": "肉片",
              "amount": 4
            },
            {
              "id": "wls2_resourse_miscellaneous_salt_1",
              "name": "盐",
              "amount": 6
            },
            {
              "id": "wls2_cooking_ingredient_spice_sauce_5",
              "name": "辣酱",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_gumbo_5_rare",
          "result_name": "龙虾浓汤",
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
        "id": "wls2_consumable_gumbo_5_rare",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_gumbo_5_rare_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "3944362d22dc18062c62bb22aeee995a6787ccbf15266bfd8f6c4e25aef3867d",
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
      "id": "wls2_consumable_food_bonfire_4",
      "item_id": "wls2_consumable_food_bonfire_4",
      "name": "烤肋骨",
      "name_en": "Grilled ribs",
      "name_source": "official_zh",
      "description": "与皮塔饼和蔬菜沙拉一起食用",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "食品与饮品",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": true,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls2_consumable_food_bonfire_4",
      "image_id": "wls2_consumable_food_bonfire_4",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 45,
          "unit": "点"
        },
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 45,
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
        "id": "wls2_consumable_food_bonfire_4",
        "reason": "physical_inventory_stack",
        "name_key": "wls2_consumable_food_bonfire_4_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ef46e0e9f4f0382a387bd57bbfec2d05cf2e95ef71b7523c1db80ee29239a255",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 45,
            "display": "45 点"
          },
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 45,
            "display": "45 点"
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
      "id": "wls2_consumable_food_kitchen_4",
      "item_id": "wls2_consumable_food_kitchen_4",
      "name": "豆汤",
      "name_en": "Bean soup",
      "name_source": "official_zh",
      "description": "健康，美味，超级满足。",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "食品与饮品",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": true,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_food_kitchen_1",
      "image_id": "wls2_consumable_food_kitchen_4",
      "equipment_id": null,
      "stats": [
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 120,
          "unit": "点"
        },
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "thirst",
          "label": "恢复水分",
          "value": 50,
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
        "id": "wls2_consumable_food_kitchen_4",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Consumable_food_kitchen_1_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ba6990377679d3c73deda17d433dc71b397d37679ea16e831d1569a7adca6aac",
      "numeric": {
        "summary": [
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 120,
            "display": "120 点"
          },
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "thirst",
            "label": "恢复水分",
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
      "id": "wls2_consumable_coffee_5_common",
      "item_id": "wls2_consumable_coffee_5_common",
      "name": "咖啡",
      "name_en": "Coffee",
      "name_source": "official_zh",
      "description": "一种经典饮料，因其丰富的醇厚风味和香气而受到赞誉",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "饮品",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_coffee_5_common",
      "image_id": "wls2_consumable_coffee_5_common",
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
          "value": 30,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_coffee_temp_health",
          "label": "生命上限增加",
          "value": 300,
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
          "id": "wls2_swamp_trader_2_food_bonfire_1",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_coffee_5_common",
          "result_name": "咖啡",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_consumable_coffee_5_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_flask_water_1",
              "name": "装满了的罐子",
              "amount": 1
            },
            {
              "id": "wls2_cooking_ingredient_pack_coffe_5",
              "name": "咖啡包",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_coffee_5_common",
          "result_name": "咖啡",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_collection_alaska_sledge",
          "label": "建设提交",
          "target_id": "wls2_collection_alaska_sledge",
          "name": "狗拉雪橇",
          "amount": 20
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_coffee_5_common",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_coffee_5_common_name",
        "sorting_group": "food_drink",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "88154ada2388717e81687bd8a36f1c6fdbc31676945d48bb43e8e496ec0ac067",
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
      "id": "wls2_consumable_irish_coffee_5_rare",
      "item_id": "wls2_consumable_irish_coffee_5_rare",
      "name": "爱尔兰咖啡",
      "name_en": "Irish Coffee",
      "name_source": "official_zh",
      "description": "咖啡和精神药剂的芬芳混合提高了你的敏捷性，改善了闪避的机会",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "饮品",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_irish_coffee_5_rare",
      "image_id": "wls2_consumable_irish_coffee_5_rare",
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
          "value": 30,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_irish_coffee_temp_health",
          "label": "生命上限增加",
          "value": 500,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_irish_coffee_temp_dexterity",
          "label": "闪避率",
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
          "id": "wls2_consumable_irish_coffee_5_rare",
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
              "id": "wls2_cooking_ingredient_pack_coffe_5",
              "name": "咖啡包",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_irish_coffee_5_rare",
          "result_name": "爱尔兰咖啡",
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
        "id": "wls2_consumable_irish_coffee_5_rare",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_irish_coffee_5_rare_name",
        "sorting_group": "food_drink",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "9b801a636755d77570e5f08036eef4f9e44ff4dbc4f7cae5917fa67bb27ab8d1",
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
      "id": "wls2_consumable_spiced_coffee_5_uncommon",
      "item_id": "wls2_consumable_spiced_coffee_5_uncommon",
      "name": "香料咖啡",
      "name_en": "Spiced Coffee",
      "name_source": "official_zh",
      "description": "一种迷人的饮料，散发着迷人的香气，以增强身体的能力和自然驱虫而闻名",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "饮品",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_spiced_coffee_5_uncommon",
      "image_id": "wls2_consumable_spiced_coffee_5_uncommon",
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
          "value": 30,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_spiced_coffee_temp_health",
          "label": "生命上限增加",
          "value": 400,
          "unit": "",
          "duration": 3600,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_spiced_coffee_temp_mosquito_reduction",
          "label": "蚊虫影响降低",
          "value": 100,
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
          "id": "wls2_consumable_spiced_coffee_5_uncommon",
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
              "id": "wls2_cooking_ingredient_pack_coffe_5",
              "name": "咖啡包",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_spiced_coffee_5_uncommon",
          "result_name": "香料咖啡",
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
        "id": "wls2_consumable_spiced_coffee_5_uncommon",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_spiced_coffee_5_uncommon_name",
        "sorting_group": "food_drink",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "01e48f3a1bbda249a35378e2f4d3d67504c566ef30b52417c79ceaf28afb0624",
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
      "id": "wls2_consumable_salmon_chowder_6_rare",
      "item_id": "wls2_consumable_salmon_chowder_6_rare",
      "name": "三文鱼杂烩汤",
      "name_en": "Salmon chowder",
      "name_source": "official_zh",
      "description": "一道丰盛、浓厚的鱼菜，以其浓郁的味道、烟熏的香气和高脂肪含量而闻名",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_consumable_salmon_chowder_6_rare",
      "image_id": "wls2_consumable_salmon_chowder_6_rare",
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
          "id": "wls2_consumable_meat_soup_6_rare_temp_health",
          "label": "生命上限增加",
          "value": 700,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_meat_soup_6_rare_firearm_resistance",
          "label": "枪弹抗性",
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
          "id": "wls2_consumable_salmon_chowder_6_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls_fish_t6_salmon",
              "name": "国王鲑鱼",
              "amount": 4
            },
            {
              "id": "wls2_consumable_meat_tenderloin",
              "name": "肉片",
              "amount": 10
            },
            {
              "id": "wls2_consumable_potato_1",
              "name": "土豆",
              "amount": 10
            },
            {
              "id": "wls2_cooking_ingredient_canned_food_6",
              "name": "罐装食品",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_salmon_chowder_6_rare",
          "result_name": "三文鱼杂烩汤",
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
        "id": "wls2_consumable_salmon_chowder_6_rare",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_salmon_chowder_6_rare_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4f4346f236aa72b2a064c60dc6239b283bed89691800a986d32d0094094e61c2",
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
      "id": "wls2_consumable_baked_potato_6_common",
      "item_id": "wls2_consumable_baked_potato_6_common",
      "name": "烤土豆",
      "name_en": "Baked potato",
      "name_source": "official_zh",
      "description": "任何人都可以做的简单而令人满意的一餐",
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
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_baked_potato_6_common",
      "image_id": "wls2_consumable_baked_potato_6_common",
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
          "id": "wls2_consumable_baked_potato_6_common_temp_health",
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
          "id": "wls2_consumable_baked_potato_6_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_potato_1",
              "name": "土豆",
              "amount": 6
            }
          ],
          "result_id": "wls2_consumable_baked_potato_6_common",
          "result_name": "烤土豆",
          "amount": 1
        },
        {
          "id": "wls2_alaska_trader_2_food_kitchen_6",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_baked_potato_6_common",
          "result_name": "烤土豆",
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
        "id": "wls2_consumable_baked_potato_6_common",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_baked_potato_6_common_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "17788243f4985ad364175802fc66cf0dc70568951878608409d5397768f1c6b1",
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
      "id": "wls2_consumable_roasted_bone_marrow_t6",
      "item_id": "wls2_consumable_roasted_bone_marrow_t6",
      "name": "熏骨髓",
      "name_en": "Smoked Marrowbone",
      "name_source": "official_zh",
      "description": "足够丰盛以使你变得坚韧并增加你的宠物的攻击力的额外咬合力",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_roasted_bone_marrow",
      "image_id": "wls2_consumable_roasted_bone_marrow_t6",
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
          "id": "wls2_consumable_roasted_bone_marrow_t6_temp_pet_damage",
          "label": "宠物额外伤害",
          "value": 200,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_meat_soup_6_rare_temp_health",
          "label": "生命上限增加",
          "value": 700,
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
        "id": "wls2_consumable_roasted_bone_marrow_t6",
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
      "id": "wls2_consumable_meat_soup_6_rare",
      "item_id": "wls2_consumable_meat_soup_6_rare",
      "name": "辣味浓郁的汤",
      "name_en": "Spicy hearty soup",
      "name_source": "official_zh",
      "description": "特别辣的汤，不仅对健康有益，还能增强对子弹的敏捷性",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_cooking_ingredient_meat_broth_5",
      "image_id": "wls2_consumable_meat_soup_6_rare",
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
          "id": "wls2_consumable_meat_soup_6_rare_temp_health",
          "label": "生命上限增加",
          "value": 700,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_meat_soup_6_rare_firearm_resistance",
          "label": "枪弹抗性",
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
          "id": "wls2_consumable_meat_soup_6_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_meat_6",
              "name": "多汁的大腿",
              "amount": 6
            },
            {
              "id": "wls2_consumable_meat_tenderloin",
              "name": "肉片",
              "amount": 6
            },
            {
              "id": "wls2_resourse_miscellaneous_spice_1",
              "name": "香料",
              "amount": 2
            },
            {
              "id": "wls2_cooking_ingredient_canned_food_6",
              "name": "罐装食品",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_meat_soup_6_rare",
          "result_name": "辣味浓郁的汤",
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
        "id": "wls2_consumable_meat_soup_6_rare",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_meat_soup_6_rare_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "d9ee3b05fe1f6f92d8ab511c4ab263d9632da28818368f887fc2b3c70dcfbefa",
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
      "id": "wls2_consumable_akutaq_6_rare",
      "item_id": "wls2_consumable_akutaq_6_rare",
      "name": "阿库塔克",
      "name_en": "Akutaq",
      "name_source": "official_zh",
      "description": "一种传统的甜点——结合了北方荒野的味道和对抗幽灵的特殊功效",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_consumable_akutaq_6_rare",
      "image_id": "wls2_consumable_akutaq_6_rare",
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
          "id": "wls2_consumable_akutaq_6_rare_temp_health",
          "label": "生命上限增加",
          "value": 700,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_akutaq_6_rare_temp_ghost_damage",
          "label": "灵体伤害",
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
          "id": "wls2_consumable_akutaq_6_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_meat_6",
              "name": "多汁的大腿",
              "amount": 6
            },
            {
              "id": "wls2_resourse_miscellaneous_salt_1",
              "name": "盐",
              "amount": 6
            },
            {
              "id": "wls2_cooking_ingredient_canned_food_6",
              "name": "罐装食品",
              "amount": 1
            },
            {
              "id": "wls_berry",
              "name": "蓝莓",
              "amount": 10
            }
          ],
          "result_id": "wls2_consumable_akutaq_6_rare",
          "result_name": "阿库塔克",
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
        "id": "wls2_consumable_akutaq_6_rare",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_akutaq_6_rare_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a73ea80bd9f3b7494324df1dd4ea5f2ea7695486199248ad927d609726084cf0",
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
      "id": "wls2_consumable_caribu_potato_6_uncommon",
      "item_id": "wls2_consumable_caribu_potato_6_uncommon",
      "name": "驯鹿与土豆泥",
      "name_en": "Caribou with mash",
      "name_source": "official_zh",
      "description": "鹿肉配土豆泥。即使是它的气味也能给你的宠物带来力量，更不用说对你自己的健康了。",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 6,
      "rarity": "uncommon",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_caribu_potato_6_uncommon",
      "image_id": "wls2_consumable_caribu_potato_6_uncommon",
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
          "id": "wls2_consumable_caribu_potato_6_uncommon_temp_health",
          "label": "生命上限增加",
          "value": 600,
          "unit": "",
          "duration": 3600,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_caribu_potato_6_uncommon_temp_pet_damage",
          "label": "宠物额外伤害",
          "value": 125,
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
          "id": "wls2_consumable_caribu_potato_6_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_meat_6",
              "name": "多汁的大腿",
              "amount": 3
            },
            {
              "id": "wls2_consumable_potato_1",
              "name": "土豆",
              "amount": 10
            },
            {
              "id": "wls2_resourse_miscellaneous_salt_1",
              "name": "盐",
              "amount": 5
            },
            {
              "id": "wls2_cooking_ingredient_canned_food_6",
              "name": "罐装食品",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_caribu_potato_6_uncommon",
          "result_name": "驯鹿与土豆泥",
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
        "id": "wls2_consumable_caribu_potato_6_uncommon",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_caribu_potato_6_uncommon_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "91a9c4e7bb6539cbf50a200c17b08e8e054b2b02f51d9ea36405736e5b76b51d",
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
      "id": "wls2_consumable_caribu_soup_6_uncommon",
      "item_id": "wls2_consumable_caribu_soup_6_uncommon",
      "name": "驯鹿杂烩汤",
      "name_en": "Caribou chowder",
      "name_source": "official_zh",
      "description": "基于因纽特人食谱的简单食物。从寒冷中取暖并加快资源收集速度。",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 6,
      "rarity": "uncommon",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_caribu_soup_6_uncommon",
      "image_id": "wls2_consumable_caribu_soup_6_uncommon",
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
          "id": "wls2_consumable_caribu_soup_6_uncommon_temp_health",
          "label": "生命上限增加",
          "value": 600,
          "unit": "",
          "duration": 3600,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_caribu_soup_6_uncommon_temp_warm",
          "label": "御寒",
          "value": 8,
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
          "id": "wls2_consumable_caribu_soup_6_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_meat_6",
              "name": "多汁的大腿",
              "amount": 4
            },
            {
              "id": "wls2_consumable_cabbage",
              "name": "卷心菜",
              "amount": 10
            },
            {
              "id": "wls2_resourse_miscellaneous_salt_1",
              "name": "盐",
              "amount": 5
            },
            {
              "id": "wls2_cooking_ingredient_canned_food_6",
              "name": "罐装食品",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_caribu_soup_6_uncommon",
          "result_name": "驯鹿杂烩汤",
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
        "id": "wls2_consumable_caribu_soup_6_uncommon",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_caribu_soup_6_uncommon_name",
        "sorting_group": "food_dish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1e7f7138394e60074d1e43b488caf0fff4574ad046cda517bf2d61d192c1b1b8",
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
    }
  ]
};
