/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-inventory-19"] = {
  "section": "inventory",
  "records": [
    {
      "id": "wls_fish_t4_trout",
      "item_id": "wls_fish_t4_trout",
      "name": "鳟鱼",
      "name_en": "Trout",
      "name_source": "official_zh",
      "description": "一种淡水鱼，常见于山区溪流和湖泊",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "鱼类",
      "tier": 4,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/Resource_primary_fish_t4",
      "image_id": "wls_fish_t4_trout",
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
          "id": "wls2_pet_feeder_slot_7",
          "label": "饲料制作",
          "ingredients": [],
          "result_id": "wls_fish_t4_trout",
          "result_name": "鳟鱼",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_pet_bait_lynx_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_lynx_4",
          "name": "山猫诱饵 IV",
          "amount": 5
        },
        {
          "id": "wls2_consumable_pet_bait_pumas_4",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_pumas_4",
          "name": "美洲狮诱饵 IV",
          "amount": 5
        },
        {
          "id": "wls2_consumable_fried_trout_4_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_fried_trout_4_rare",
          "name": "炸鳟鱼",
          "amount": 4
        }
      ],
      "locations": [
        "浅湖"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls_fish_t4_trout",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_fish_t4_trout_name",
        "sorting_group": "ingredient_fish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_farm_hide_4"
        ],
        "quest_referenced": true
      },
      "image_key": "c17f343017796448fbde77b039524534f8e4056a459fea31e5424dee86f89c41",
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
      "id": "wls2_consumable_pumpkin_1",
      "item_id": "wls2_consumable_pumpkin_1",
      "name": "南瓜",
      "name_en": "Pumpkin",
      "name_source": "official_zh",
      "description": "南瓜不是最容易种植的农作物，但是收成配得上付出",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "作物",
      "tier": 5,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Consumable_pumpkin_1",
      "image_id": "wls2_consumable_pumpkin_1",
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
          "value": 16,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_recipe_field_pumpkin",
          "label": "种植",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_seed_pumpkin_1",
              "name": "南瓜子",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_pumpkin_1",
          "result_name": "南瓜",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_recipe_shed_chicken_pumpkin",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_pumpkin_1",
          "result_name": "南瓜",
          "amount": 1
        },
        {
          "id": "wls2_recipe_shed_cow_pumpkin",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_pumpkin_1",
          "result_name": "南瓜",
          "amount": 1
        },
        {
          "id": "wls2_recipe_mounts_feed_pumpkin",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_pumpkin_1",
          "result_name": "南瓜",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_pumpkin_bisque_5_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pumpkin_bisque_5_common",
          "name": "南瓜浓汤",
          "amount": 6
        },
        {
          "id": "wls2_consumable_cajun_pumpkin_porridge_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_cajun_pumpkin_porridge_5_uncommon",
          "name": "卡真南瓜燕麦",
          "amount": 10
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pumpkin_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Consumable_pumpkin_1_name",
        "sorting_group": "culture",
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
            "value": 5,
            "display": "5 点"
          },
          {
            "key": "farm_hunger",
            "label": "恢复农场动物饱食",
            "unit": "点",
            "value": 16,
            "display": "16 点"
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
      "id": "wls2_cooking_ingredient_pack_coffe_5",
      "item_id": "wls2_cooking_ingredient_pack_coffe_5",
      "name": "咖啡包",
      "name_en": "Pack of Coffee",
      "name_source": "official_zh",
      "description": "精选咖啡豆，制作最好的咖啡",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "烹饪配料",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_cooking_ingredient_pack_coffe_5",
      "image_id": "wls2_cooking_ingredient_pack_coffe_5",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_coffee_5_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_coffee_5_common",
          "name": "咖啡",
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
          "amount": 2
        }
      ],
      "locations": [
        "邪教徒营地",
        "藏匿处",
        "邻居的牧场"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_cooking_ingredient_pack_coffe_5",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pack_coffe_5_common_name",
        "sorting_group": "ingredient_geo",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5",
          "bandit_hideout_01"
        ],
        "quest_referenced": false
      },
      "image_key": "0f477dd3f059f9b274ab7b3dcb89370f4f91e583e339671d086d869e050df93d"
    },
    {
      "id": "wls2_cooking_ingredient_spice_sauce_5",
      "item_id": "wls2_cooking_ingredient_spice_sauce_5",
      "name": "辣酱",
      "name_en": "Spicy sauce",
      "name_source": "official_zh",
      "description": "一种美味的调味品，为各种菜肴增添鲜明的风味，特别受潮湿地带菜肴的喜爱",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "烹饪配料",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_cooking_ingredient_spice_sauce_5",
      "image_id": "wls2_cooking_ingredient_spice_sauce_5",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_cajun_pumpkin_porridge_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_cajun_pumpkin_porridge_5_uncommon",
          "name": "卡真南瓜燕麦",
          "amount": 1
        },
        {
          "id": "wls2_consumable_potlikker_stew_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_potlikker_stew_5_uncommon",
          "name": "玉米面包汤",
          "amount": 1
        },
        {
          "id": "wls2_consumable_gumbo_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_gumbo_5_rare",
          "name": "龙虾浓汤",
          "amount": 1
        },
        {
          "id": "wls2_consumable_courtbouillon_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_courtbouillon_5_rare",
          "name": "鱼汤",
          "amount": 1
        },
        {
          "id": "wls2_consumable_boudin_corndog_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_boudin_corndog_5_rare",
          "name": "布丁玉米犬",
          "amount": 2
        }
      ],
      "locations": [
        "邪教徒营地",
        "藏匿处",
        "邻居的牧场"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_cooking_ingredient_spice_sauce_5",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_spice_sauce_5_common_name",
        "sorting_group": "ingredient_geo",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5",
          "bandit_hideout_01"
        ],
        "quest_referenced": false
      },
      "image_key": "5648bc42794690c0fd9c9fb5d2dc8e8f6472bac4e3174cb5f4310b1da603ad74"
    },
    {
      "id": "wls2_cooking_ingredient_exotic_meat_5",
      "item_id": "wls2_cooking_ingredient_exotic_meat_5",
      "name": "异国风味肉",
      "name_en": "Exotic meat",
      "name_source": "official_zh",
      "description": "从鳄鱼身上获取的口味温和的肉，非常适合准备特色菜肴",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "肉类",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_cooking_ingredient_exotic_meat_5",
      "image_id": "wls2_cooking_ingredient_exotic_meat_5",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_hunger",
          "label": "恢复宠物饱食",
          "value": 25,
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
          "id": "wls2_pet_feeder_slot_8",
          "label": "饲料制作",
          "ingredients": [],
          "result_id": "wls2_cooking_ingredient_exotic_meat_5",
          "result_name": "异国风味肉",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_cajun_pumpkin_porridge_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_cajun_pumpkin_porridge_5_uncommon",
          "name": "卡真南瓜燕麦",
          "amount": 3
        },
        {
          "id": "wls2_consumable_gumbo_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_gumbo_5_rare",
          "name": "龙虾浓汤",
          "amount": 3
        },
        {
          "id": "wls2_consumable_boudin_corndog_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_boudin_corndog_5_rare",
          "name": "布丁玉米犬",
          "amount": 5
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_cooking_ingredient_exotic_meat_5",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_exotic_meat_5_common_name",
        "sorting_group": "ingredient_meat",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "d88adb37e5898ce34ed050b040234e131ac8f889c4d29d57f57c6358de167609",
      "numeric": {
        "summary": [
          {
            "key": "pet_hunger",
            "label": "恢复宠物饱食",
            "unit": "点",
            "value": 25,
            "display": "25 点"
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
      "id": "wls_fish_t5_catfish",
      "item_id": "wls_fish_t5_catfish",
      "name": "鲶鱼",
      "name_en": "Catfish",
      "name_source": "official_zh",
      "description": "一条河鱼，味道细腻。完美适合传统的卡津汤",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "鱼类",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/Resource_primary_fish_t5",
      "image_id": "wls_fish_t5_catfish",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_hunger",
          "label": "恢复宠物饱食",
          "value": 25,
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
          "id": "wls2_pet_feeder_slot_9",
          "label": "饲料制作",
          "ingredients": [],
          "result_id": "wls_fish_t5_catfish",
          "result_name": "鲶鱼",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_pet_bait_lynx_5",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_lynx_5",
          "name": "山猫诱饵 V",
          "amount": 5
        },
        {
          "id": "wls2_consumable_pet_bait_pumas_5",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_pumas_5",
          "name": "美洲狮诱饵 V",
          "amount": 5
        },
        {
          "id": "wls2_consumable_courtbouillon_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_courtbouillon_5_rare",
          "name": "鱼汤",
          "amount": 4
        }
      ],
      "locations": [
        "河口"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls_fish_t5_catfish",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_fish_t5_catfish_name",
        "sorting_group": "ingredient_fish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_farm_hide_5"
        ],
        "quest_referenced": true
      },
      "image_key": "e36b507a31c8be78305232b5c28458e5ef380e26c11624209179280cfe21c560",
      "numeric": {
        "summary": [
          {
            "key": "pet_hunger",
            "label": "恢复宠物饱食",
            "unit": "点",
            "value": 25,
            "display": "25 点"
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
      "id": "wls2_consumable_potato_1",
      "item_id": "wls2_consumable_potato_1",
      "name": "土豆",
      "name_en": "Potato",
      "name_source": "official_zh",
      "description": "多才多艺的蔬菜，许多菜肴的主要成分",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "作物",
      "tier": 6,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/Consumable_potato_1",
      "image_id": "wls2_consumable_potato_1",
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
          "value": 18,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_recipe_field_potato",
          "label": "种植",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_seed_potato_1",
              "name": "种子马铃薯",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_potato_1",
          "result_name": "土豆",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_recipe_shed_cow_potato",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_potato_1",
          "result_name": "土豆",
          "amount": 1
        },
        {
          "id": "wls2_recipe_mounts_feed_potato",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_potato_1",
          "result_name": "土豆",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_baked_potato_6_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_baked_potato_6_common",
          "name": "烤土豆",
          "amount": 6
        },
        {
          "id": "wls2_consumable_caribu_potato_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_caribu_potato_6_uncommon",
          "name": "驯鹿与土豆泥",
          "amount": 10
        },
        {
          "id": "wls2_consumable_salmon_chowder_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_salmon_chowder_6_rare",
          "name": "三文鱼杂烩汤",
          "amount": 10
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_potato_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_potato_1_name",
        "sorting_group": "culture",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "e520bfa84144c54bf538ca6000758a310d7567e92938de61b6af383703a21edd",
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
            "value": 18,
            "display": "18 点"
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
      "id": "wls2_cooking_ingredient_leafes_6",
      "item_id": "wls2_cooking_ingredient_leafes_6",
      "name": "北方草药",
      "name_en": "Northern herbs",
      "name_source": "official_zh",
      "description": "一束来自北方荒野深处的松针、草药和浆果的收藏品",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "烹饪配料",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_cooking_ingredient_leafes_6",
      "image_id": "wls2_cooking_ingredient_leafes_6",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_collection_broken_alaska_hut",
          "label": "建设提交",
          "target_id": "wls2_collection_broken_alaska_hut",
          "name": "淘金者的食品储藏室",
          "amount": 20
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
          "amount": 2
        }
      ],
      "locations": [
        "挖掘者的巢穴",
        "藏匿处",
        "邻居的牧场"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_cooking_ingredient_leafes_6",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_cooking_ingredient_leafes_6_name",
        "sorting_group": "ingredient_geo",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_6",
          "bandit_hideout_01"
        ],
        "quest_referenced": false
      },
      "image_key": "45cf7a56349bb3ff713e7624a6ea7b13a380afe4a7c9f9ea73c99425d601e134"
    },
    {
      "id": "wls2_cooking_ingredient_canned_food_6",
      "item_id": "wls2_cooking_ingredient_canned_food_6",
      "name": "罐装食品",
      "name_en": "Canned food",
      "name_source": "official_zh",
      "description": "在冰冷的土地和干燥的草原上保持新鲜的蔬菜和肉类",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "烹饪配料",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_cooking_ingredient_canned_food_6",
      "image_id": "wls2_cooking_ingredient_canned_food_6",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_collection_broken_alaska_hut",
          "label": "建设提交",
          "target_id": "wls2_collection_broken_alaska_hut",
          "name": "淘金者的食品储藏室",
          "amount": 20
        },
        {
          "id": "wls2_consumable_caribu_potato_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_caribu_potato_6_uncommon",
          "name": "驯鹿与土豆泥",
          "amount": 1
        },
        {
          "id": "wls2_consumable_caribu_soup_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_caribu_soup_6_uncommon",
          "name": "驯鹿杂烩汤",
          "amount": 1
        },
        {
          "id": "wls2_consumable_akutaq_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_akutaq_6_rare",
          "name": "阿库塔克",
          "amount": 1
        },
        {
          "id": "wls2_consumable_meat_soup_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_meat_soup_6_rare",
          "name": "辣味浓郁的汤",
          "amount": 2
        },
        {
          "id": "wls2_consumable_salmon_chowder_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_salmon_chowder_6_rare",
          "name": "三文鱼杂烩汤",
          "amount": 2
        }
      ],
      "locations": [
        "挖掘者的巢穴",
        "藏匿处",
        "邻居的牧场"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_cooking_ingredient_canned_food_6",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_cooking_ingredient_canned_food_6_name",
        "sorting_group": "ingredient_geo",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_6",
          "bandit_hideout_01"
        ],
        "quest_referenced": false
      },
      "image_key": "58819c153e798d22f899a3d4cd0ac73250672c079539fed048bc9eb281686cf6"
    },
    {
      "id": "wls2_resourse_miscellaneous_meat_6",
      "item_id": "wls2_resourse_miscellaneous_meat_6",
      "name": "多汁的大腿",
      "name_en": "Juicy haunch",
      "name_source": "official_zh",
      "description": "如果烹饪得当，多汁的大腿肉既有营养又健康，而且非常美味",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "肉类",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/Resourse_miscellaneous_meat_6",
      "image_id": "wls2_resourse_miscellaneous_meat_6",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_hunger",
          "label": "恢复宠物饱食",
          "value": 30,
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
          "id": "wls2_pet_feeder_slot_10",
          "label": "饲料制作",
          "ingredients": [],
          "result_id": "wls2_resourse_miscellaneous_meat_6",
          "result_name": "多汁的大腿",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_pet_bait_wolfs_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_wolfs_6",
          "name": "狼诱饵 VI",
          "amount": 10
        },
        {
          "id": "wls2_consumable_pet_bait_direwolfs_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_direwolfs_6",
          "name": "阿尔法狼诱饵 VI",
          "amount": 12
        },
        {
          "id": "wls2_consumable_pet_bait_bears_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_6",
          "name": "熊诱饵VI",
          "amount": 15
        },
        {
          "id": "wls2_consumable_pet_heal_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_6",
          "name": "特效疗愈饼干",
          "amount": 2
        },
        {
          "id": "wls2_consumable_caribu_steak_6_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_caribu_steak_6_common",
          "name": "驯鹿牛排",
          "amount": 2
        },
        {
          "id": "wls2_consumable_caribu_potato_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_caribu_potato_6_uncommon",
          "name": "驯鹿与土豆泥",
          "amount": 3
        },
        {
          "id": "wls2_consumable_caribu_soup_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_caribu_soup_6_uncommon",
          "name": "驯鹿杂烩汤",
          "amount": 4
        },
        {
          "id": "wls2_consumable_akutaq_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_akutaq_6_rare",
          "name": "阿库塔克",
          "amount": 6
        },
        {
          "id": "wls2_consumable_meat_soup_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_meat_soup_6_rare",
          "name": "辣味浓郁的汤",
          "amount": 6
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_meat_6",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_resourse_miscellaneous_meat_6_name",
        "sorting_group": "ingredient_meat",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "e60ea35ec699b6f47e8eb6683ad8a94d16de9d86ef439daf9caff7d19765e69f",
      "numeric": {
        "summary": [
          {
            "key": "pet_hunger",
            "label": "恢复宠物饱食",
            "unit": "点",
            "value": 30,
            "display": "30 点"
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
      "id": "wls_fish_t6_salmon",
      "item_id": "wls_fish_t6_salmon",
      "name": "国王鲑鱼",
      "name_en": "King salmon",
      "name_source": "official_zh",
      "description": "一条大的，肥的鲑鱼，有丰富的味道。理想的用于一碗丰盛的汤。",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "鱼类",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/Resource_primary_fish_t6",
      "image_id": "wls_fish_t6_salmon",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_hunger",
          "label": "恢复宠物饱食",
          "value": 30,
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
          "id": "wls2_pet_feeder_slot_11",
          "label": "饲料制作",
          "ingredients": [],
          "result_id": "wls_fish_t6_salmon",
          "result_name": "国王鲑鱼",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_pet_bait_lynx_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_lynx_6",
          "name": "猞猁诱饵VI",
          "amount": 5
        },
        {
          "id": "wls2_consumable_pet_bait_pumas_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_pumas_6",
          "name": "彪马诱饵 VI",
          "amount": 5
        },
        {
          "id": "wls2_consumable_salmon_chowder_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_salmon_chowder_6_rare",
          "name": "三文鱼杂烩汤",
          "amount": 4
        }
      ],
      "locations": [
        "冰川湖"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls_fish_t6_salmon",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_fish_t6_salmon_name",
        "sorting_group": "ingredient_fish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_farm_hide_6"
        ],
        "quest_referenced": true
      },
      "image_key": "45fa239d8ffbfa3be9843a90fc0ceccc9b513195b2775952f8209870d28e6b0f",
      "numeric": {
        "summary": [
          {
            "key": "pet_hunger",
            "label": "恢复宠物饱食",
            "unit": "点",
            "value": 30,
            "display": "30 点"
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
      "id": "wls2_consumable_tomato_1",
      "item_id": "wls2_consumable_tomato_1",
      "name": "番茄",
      "name_en": "Tomato",
      "name_source": "official_zh",
      "description": "曾经被恐惧为有毒的，这种浆果在野西部的菜肴中赢得了它的位置。",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "作物",
      "tier": 7,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/Consumable_tomato_1",
      "image_id": "wls2_consumable_tomato_1",
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
          "value": 20,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_recipe_field_tomato",
          "label": "种植",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_seed_tomato_1",
              "name": "番茄种子",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_tomato_1",
          "result_name": "番茄",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_recipe_shed_cow_tomato",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_tomato_1",
          "result_name": "番茄",
          "amount": 1
        },
        {
          "id": "wls2_recipe_shed_chicken_tomato",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_tomato_1",
          "result_name": "番茄",
          "amount": 1
        },
        {
          "id": "wls2_recipe_mounts_feed_tomato",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_tomato_1",
          "result_name": "番茄",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_stewed_tomato_7_common",
          "label": "工作台制作",
          "target_id": "wls2_consumable_stewed_tomato_7_common",
          "name": "炖番茄",
          "amount": 8
        },
        {
          "id": "wls2_consumable_pueblo_firepot_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pueblo_firepot_7_uncommon",
          "name": "普韦布洛 火锅",
          "amount": 12
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
        "id": "wls2_consumable_tomato_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_consumable_tomato_1_name",
        "sorting_group": "culture",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "23244e7c11adaefbd988f8eaef99556836ef5d76f9ad56f20dc8d13cd9f6a56f",
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
      "id": "wls2_cooking_ingredient_lime_crate_7",
      "item_id": "wls2_cooking_ingredient_lime_crate_7",
      "name": "石灰 箱",
      "name_en": "Lime crate",
      "name_source": "official_zh",
      "description": "当生活给你酸橙……做柠檬水",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "烹饪配料",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_cooking_ingredient_lime_crate_7",
      "image_id": "wls2_cooking_ingredient_lime_crate_7",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
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
        },
        {
          "id": "wls2_consumable_bloody_molly_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_bloody_molly_7_rare",
          "name": "血腥玛丽",
          "amount": 2
        }
      ],
      "locations": [
        "藏匿处"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_cooking_ingredient_lime_crate_7",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_cooking_ingredient_lime_crate_7_name",
        "sorting_group": "ingredient_geo",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "bandit_hideout_01"
        ],
        "quest_referenced": false
      },
      "image_key": "92d6006e8fe4656e1f8cdd532d009e5aca156eca1839032fe9c8aeef1f93505e"
    },
    {
      "id": "wls2_cooking_ingredient_conserved_chili_7",
      "item_id": "wls2_cooking_ingredient_conserved_chili_7",
      "name": "罐装辣椒",
      "name_en": "Canned chili",
      "name_source": "official_zh",
      "description": "一个单独的罐头曾经清空了一个酒吧。真实的故事。",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "烹饪配料",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_cooking_ingredient_conserved_chili_7",
      "image_id": "wls2_cooking_ingredient_conserved_chili_7",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_taco_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_taco_7_uncommon",
          "name": "塔可",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pueblo_firepot_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pueblo_firepot_7_uncommon",
          "name": "普韦布洛 火锅",
          "amount": 1
        },
        {
          "id": "wls2_consumable_beef_ragout_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_beef_ragout_7_rare",
          "name": "牛肉 炖菜",
          "amount": 1
        },
        {
          "id": "wls2_consumable_bass_cakes_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_bass_cakes_7_rare",
          "name": "低音蛋糕",
          "amount": 1
        },
        {
          "id": "wls2_consumable_chili_con_carne_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_chili_con_carne_7_rare",
          "name": "辣椒与肉",
          "amount": 2
        }
      ],
      "locations": [
        "藏匿处"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_cooking_ingredient_conserved_chili_7",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_cooking_ingredient_conserved_chili_7_name",
        "sorting_group": "ingredient_geo",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "bandit_hideout_01"
        ],
        "quest_referenced": false
      },
      "image_key": "f0a3484dd515518bef33288f98c51f58ccf44c7ac47ba48bd2ced087e9b1f349"
    },
    {
      "id": "wls2_resourse_miscellaneous_meat_7",
      "item_id": "wls2_resourse_miscellaneous_meat_7",
      "name": "优质肉",
      "name_en": "Prime meat",
      "name_source": "official_zh",
      "description": "这个切割因其丰富的风味和黄油般的质地而受到珍视。",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "肉类",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_consumable_meat_7_icon",
      "image_id": "wls2_resourse_miscellaneous_meat_7",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_hunger",
          "label": "恢复宠物饱食",
          "value": 35,
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
          "id": "wls2_pet_feeder_slot_12",
          "label": "饲料制作",
          "ingredients": [],
          "result_id": "wls2_resourse_miscellaneous_meat_7",
          "result_name": "优质肉",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_pet_bait_wolfs_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_wolfs_7",
          "name": "狼诱饵 VII",
          "amount": 10
        },
        {
          "id": "wls2_consumable_pet_bait_direwolfs_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_direwolfs_7",
          "name": "头狼诱饵 VII",
          "amount": 12
        },
        {
          "id": "wls2_consumable_pet_bait_bears_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_7",
          "name": "熊诱饵 VII",
          "amount": 15
        },
        {
          "id": "wls2_consumable_pet_heal_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_heal_7",
          "name": "鼠尾草治疗饼干",
          "amount": 2
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
          "id": "wls2_consumable_beef_ragout_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_beef_ragout_7_rare",
          "name": "牛肉 炖菜",
          "amount": 8
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
        "id": "wls2_resourse_miscellaneous_meat_7",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_resourse_miscellaneous_meat_7_name",
        "sorting_group": "ingredient_meat",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "59c5c27628e32ab282d4aa5866494e9e71aee6a47a2316693bd07454e68d34ab",
      "numeric": {
        "summary": [
          {
            "key": "pet_hunger",
            "label": "恢复宠物饱食",
            "unit": "点",
            "value": 35,
            "display": "35 点"
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
      "id": "wls_fish_t7_bass",
      "item_id": "wls_fish_t7_bass",
      "name": "低音",
      "name_en": "Bass",
      "name_source": "official_zh",
      "description": "一条大鱼，带有嫩白色肉，流行于烹饪",
      "category": "crop",
      "category_label": "作物与食材",
      "subcategory": "鱼类",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/Resource_primary_fish_t7",
      "image_id": "wls_fish_t7_bass",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_hunger",
          "label": "恢复宠物饱食",
          "value": 35,
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
          "id": "wls2_pet_feeder_slot_13",
          "label": "饲料制作",
          "ingredients": [],
          "result_id": "wls_fish_t7_bass",
          "result_name": "低音",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_consumable_pet_bait_lynx_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_lynx_7",
          "name": "山猫诱饵 VII",
          "amount": 5
        },
        {
          "id": "wls2_consumable_pet_bait_pumas_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_pumas_7",
          "name": "美洲狮诱饵 VII",
          "amount": 5
        },
        {
          "id": "wls2_consumable_bass_cakes_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_consumable_bass_cakes_7_rare",
          "name": "低音蛋糕",
          "amount": 4
        }
      ],
      "locations": [
        "多刺湖"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls_fish_t7_bass",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_fish_t7_bass_name",
        "sorting_group": "ingredient_fish",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_farm_hide_7"
        ],
        "quest_referenced": true
      },
      "image_key": "75dcc2bea29ad243ef14b12373cd5aeb3608ad7089a3708c9e782433b9cfb39a",
      "numeric": {
        "summary": [
          {
            "key": "pet_hunger",
            "label": "恢复宠物饱食",
            "unit": "点",
            "value": 35,
            "display": "35 点"
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
      "id": "wls2_halloween_seed_pumpkin",
      "item_id": "wls2_halloween_seed_pumpkin",
      "name": "南瓜种子",
      "name_en": "Pumpkin seeds",
      "name_source": "official_zh",
      "description": "种下的话可能会长成很有营养的南瓜",
      "category": "seed",
      "category_label": "种子",
      "subcategory": "作物种子",
      "tier": 1,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "image_id": "wls2_halloween_seed_pumpkin",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_halloween_food_pumpkin",
          "label": "工作台制作",
          "target_id": "wls2_halloween_food_pumpkin",
          "name": "南瓜",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_halloween_seed_pumpkin",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_halloween_seeds_name",
        "sorting_group": "legasy",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a"
    },
    {
      "id": "wls2_resourse_miscellaneous_seed_corn_1",
      "item_id": "wls2_resourse_miscellaneous_seed_corn_1",
      "name": "玉米种子",
      "name_en": "Corn seeds",
      "name_source": "official_zh",
      "description": "你可以在田地里种植和收割玉米",
      "category": "seed",
      "category_label": "种子",
      "subcategory": "作物种子",
      "tier": 1,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/wls_corn_seeds",
      "image_id": "wls2_resourse_miscellaneous_seed_corn_1",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls_collection_dovecote",
          "label": "建设提交",
          "target_id": "wls_collection_dovecote",
          "name": "建设提交",
          "amount": 4
        },
        {
          "id": "wls2_recipe_field_corn",
          "label": "种植",
          "target_id": "wls2_consumable_corn_1",
          "name": "玉米",
          "amount": 1
        }
      ],
      "locations": [
        "森林湖"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_seed_corn_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_corn_seeds_name",
        "sorting_group": "seed",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_farm_hide_1"
        ],
        "quest_referenced": false
      },
      "image_key": "8c070e0263cadd6358deb8b473249be77cdb10bb9191f34f0ba33fdfcb27d1f1"
    },
    {
      "id": "wls2_resourse_miscellaneous_seed_fiber",
      "item_id": "wls2_resourse_miscellaneous_seed_fiber",
      "name": "荨麻种子",
      "name_en": "Nettle Seeds",
      "name_source": "official_zh",
      "description": "你可以在田地里种植植物，然后收集纤维",
      "category": "seed",
      "category_label": "种子",
      "subcategory": "作物种子",
      "tier": 1,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_farm_fiber_t1_seeds_icon",
      "image_id": "wls2_resourse_miscellaneous_seed_fiber",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_recipe_field_fiber_1",
          "label": "种植",
          "target_id": "wls2_resourse_primary_fiber_1",
          "name": "荨麻",
          "amount": 1
        }
      ],
      "locations": [
        "森林湖"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_seed_fiber",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Resourse_miscellaneous_seed_nettle_name",
        "sorting_group": "seed",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_farm_hide_1"
        ],
        "quest_referenced": false
      },
      "image_key": "c28977f8c867afdf8d6a3549da6198231701d024f2e17c9a3821b97fe325efe4"
    },
    {
      "id": "wls2_resourse_miscellaneous_seed_wheat",
      "item_id": "wls2_resourse_miscellaneous_seed_wheat",
      "name": "小麦种子",
      "name_en": "Wheat seeds",
      "name_source": "official_zh",
      "description": "你可以在田地里种植和收割小麦",
      "category": "seed",
      "category_label": "种子",
      "subcategory": "作物种子",
      "tier": 2,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_farm_wheat_seeds_icon",
      "image_id": "wls2_resourse_miscellaneous_seed_wheat",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_recipe_field_wheat",
          "label": "种植",
          "target_id": "wls2_consumable_wheat",
          "name": "小麦",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_seed_wheat",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_farm_wheat_seed_name",
        "sorting_group": "seed",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "473797fb792c8d299b81e1aa46df780d9e3bc1fe51d82872d2881e3c926f4066"
    },
    {
      "id": "wls2_resourse_miscellaneous_seed_jute_1",
      "item_id": "wls2_resourse_miscellaneous_seed_jute_1",
      "name": "黄麻种子",
      "name_en": "Jute seed",
      "name_source": "official_zh",
      "description": "你可以在田地里种植植物，然后收集纤维",
      "category": "seed",
      "category_label": "种子",
      "subcategory": "作物种子",
      "tier": 2,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Resourse_miscellaneous_seed_Jute_1",
      "image_id": "wls2_resourse_miscellaneous_seed_jute_1",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_recipe_field_fiber_2",
          "label": "种植",
          "target_id": "wls2_resourse_primary_fiber_2",
          "name": "黄麻",
          "amount": 1
        }
      ],
      "locations": [
        "浓雾湖"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_seed_jute_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Resourse_miscellaneous_seed_Jute_1_name",
        "sorting_group": "seed",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_farm_hide_2"
        ],
        "quest_referenced": false
      },
      "image_key": "23bcdd25e7fd308183d71701aff4cbddd28f9c48642f0f68d39e86297ae96441"
    },
    {
      "id": "wls2_resourse_miscellaneous_seed_cotton_1",
      "item_id": "wls2_resourse_miscellaneous_seed_cotton_1",
      "name": "亚麻种子",
      "name_en": "Linen seeds",
      "name_source": "official_zh",
      "description": "你可以在田地里种植植物，然后收集纤维",
      "category": "seed",
      "category_label": "种子",
      "subcategory": "作物种子",
      "tier": 3,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Resourse_miscellaneous_seed_linen_1",
      "image_id": "wls2_resourse_miscellaneous_seed_cotton_1",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_recipe_field_fiber_3",
          "label": "种植",
          "target_id": "wls2_resourse_primary_fiber_3",
          "name": "亚麻",
          "amount": 1
        }
      ],
      "locations": [
        "山湖"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_seed_cotton_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Resourse_miscellaneous_seed_linen_1_name",
        "sorting_group": "seed",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_farm_hide_3"
        ],
        "quest_referenced": false
      },
      "image_key": "73f9ea84ad8550e7097a6366be020c9c9e8470a8cb305d69b1c1113e2597488c"
    },
    {
      "id": "wls2_resourse_miscellaneous_seed_oat",
      "item_id": "wls2_resourse_miscellaneous_seed_oat",
      "name": "燕麦种子",
      "name_en": "Oats seeds",
      "name_source": "official_zh",
      "description": "可种在园圃上。马儿们会感激你的。",
      "category": "seed",
      "category_label": "种子",
      "subcategory": "作物种子",
      "tier": 3,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/wls_seeds_of_oats",
      "image_id": "wls2_resourse_miscellaneous_seed_oat",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_recipe_field_oats",
          "label": "种植",
          "target_id": "wls2_consumable_oat",
          "name": "燕麦",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_seed_oat",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls_seeds_of_oats_name",
        "sorting_group": "seed",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "32f98eca2e6e318a9a1492a5cecb2a16eba11152a526eabf6ca709288e37c7ff"
    },
    {
      "id": "wls2_resourse_miscellaneous_seed_beans_1",
      "item_id": "wls2_resourse_miscellaneous_seed_beans_1",
      "name": "豆类种子",
      "name_en": "Bean seeds",
      "name_source": "official_zh",
      "description": "你可以在田地里种植和收割豆子",
      "category": "seed",
      "category_label": "种子",
      "subcategory": "作物种子",
      "tier": 3,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Resourse_miscellaneous_seed_beans_1",
      "image_id": "wls2_resourse_miscellaneous_seed_beans_1",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_recipe_field_beans",
          "label": "种植",
          "target_id": "wls2_consumable_beans_1",
          "name": "青豆",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_seed_beans_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Consumable_beans_1_name",
        "sorting_group": "seed",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "df1c0ea70133fc5203e3354b7ab2f62836d46e4b81d3a214c2ba1be7140cbffb"
    },
    {
      "id": "wls2_resourse_miscellaneous_seed_cabbage",
      "item_id": "wls2_resourse_miscellaneous_seed_cabbage",
      "name": "卷心菜种子",
      "name_en": "Cabbage seeds",
      "name_source": "official_zh",
      "description": "你可以在田地里种植和收割卷心菜",
      "category": "seed",
      "category_label": "种子",
      "subcategory": "作物种子",
      "tier": 4,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_farm_cabbage_seeds_icon",
      "image_id": "wls2_resourse_miscellaneous_seed_cabbage",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_recipe_field_cabbage",
          "label": "种植",
          "target_id": "wls2_consumable_cabbage",
          "name": "卷心菜",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_seed_cabbage",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_farm_cabbage_seed_name",
        "sorting_group": "seed",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "d6a3c2d93a6c8c88cae8fb418071863399db258457b1bf37dbce319dc48ce765"
    },
    {
      "id": "wls2_resourse_miscellaneous_seed_linen_1",
      "item_id": "wls2_resourse_miscellaneous_seed_linen_1",
      "name": "棉花种子",
      "name_en": "Cotton seed",
      "name_source": "official_zh",
      "description": "你可以在田地里种植植物，然后收集纤维",
      "category": "seed",
      "category_label": "种子",
      "subcategory": "作物种子",
      "tier": 4,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Resourse_miscellaneous_seed_cotton_1",
      "image_id": "wls2_resourse_miscellaneous_seed_linen_1",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_recipe_field_fiber_4",
          "label": "种植",
          "target_id": "wls2_resourse_primary_fiber_4",
          "name": "棉花",
          "amount": 1
        }
      ],
      "locations": [
        "浅湖"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_seed_linen_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Resourse_miscellaneous_seed_cotton_1_name",
        "sorting_group": "seed",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_farm_hide_4"
        ],
        "quest_referenced": false
      },
      "image_key": "35d94f342f6a29f57b0148ae03d245b1a33aeca3eae8cee314c2cdfa9e5af8db"
    },
    {
      "id": "wls2_resourse_miscellaneous_seed_pumpkin_1",
      "item_id": "wls2_resourse_miscellaneous_seed_pumpkin_1",
      "name": "南瓜子",
      "name_en": "Pumpkin seeds",
      "name_source": "official_zh",
      "description": "你可以在田地里种植和收割南瓜",
      "category": "seed",
      "category_label": "种子",
      "subcategory": "作物种子",
      "tier": 5,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Resourse_miscellaneous_seed_pumpkin_1",
      "image_id": "wls2_resourse_miscellaneous_seed_pumpkin_1",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_recipe_field_pumpkin",
          "label": "种植",
          "target_id": "wls2_consumable_pumpkin_1",
          "name": "南瓜",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_seed_pumpkin_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Resourse_miscellaneous_seed_pumpkin_1_name",
        "sorting_group": "seed",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "e90cf8d6cab0cbec7c6c5ca252b1faab095336e69b9474f34321b2fd1c0c5349"
    },
    {
      "id": "wls2_resourse_miscellaneous_seed_hemp_1",
      "item_id": "wls2_resourse_miscellaneous_seed_hemp_1",
      "name": "大麻种子",
      "name_en": "Hemp seeds",
      "name_source": "official_zh",
      "description": "将这些种子种在田地里，然后收集纤维",
      "category": "seed",
      "category_label": "种子",
      "subcategory": "作物种子",
      "tier": 5,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary01/Resourse_miscellaneous_seed_hemp_1",
      "image_id": "wls2_resourse_miscellaneous_seed_hemp_1",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_recipe_field_fiber_5",
          "label": "种植",
          "target_id": "wls2_resourse_primary_fiber_5",
          "name": "大麻",
          "amount": 1
        }
      ],
      "locations": [
        "河口"
      ],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_seed_hemp_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_Resourse_miscellaneous_seed_hemp_1_name",
        "sorting_group": "seed",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_farm_hide_5"
        ],
        "quest_referenced": false
      },
      "image_key": "83dfd520d8be6fd6e6d9b1c5bd838ac0151e058b5a9169c9ab6f3687f833ffb7"
    },
    {
      "id": "wls2_resourse_miscellaneous_seed_potato_1",
      "item_id": "wls2_resourse_miscellaneous_seed_potato_1",
      "name": "种子马铃薯",
      "name_en": "Seed potato",
      "name_source": "official_zh",
      "description": "种植自己的土豆",
      "category": "seed",
      "category_label": "种子",
      "subcategory": "作物种子",
      "tier": 6,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/Resourse_miscellaneous_seed_potato_1",
      "image_id": "wls2_resourse_miscellaneous_seed_potato_1",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_recipe_field_potato",
          "label": "种植",
          "target_id": "wls2_consumable_potato_1",
          "name": "土豆",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_seed_potato_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_resourse_miscellaneous_seed_potato_1_name",
        "sorting_group": "seed",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "3b4175c24771121e0fa0accfbc318e2a16a3e648bc5e723c83cad6748a2894ee"
    },
    {
      "id": "wls2_resourse_miscellaneous_seed_tomato_1",
      "item_id": "wls2_resourse_miscellaneous_seed_tomato_1",
      "name": "番茄种子",
      "name_en": "Tomato seeds",
      "name_source": "official_zh",
      "description": "你可以在田地里种植和收获番茄。",
      "category": "seed",
      "category_label": "种子",
      "subcategory": "作物种子",
      "tier": 7,
      "rarity": "common",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/Resourse_miscellaneous_seed_tomato_1",
      "image_id": "wls2_resourse_miscellaneous_seed_tomato_1",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_recipe_field_tomato",
          "label": "种植",
          "target_id": "wls2_consumable_tomato_1",
          "name": "番茄",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_resourse_miscellaneous_seed_tomato_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_resourse_miscellaneous_seed_tomato_1_name",
        "sorting_group": "seed",
        "stat_table": null,
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "f691d9d2d51543dc3e8df01981f056add54ead3d6ff58714e669848b448ef687"
    },
    {
      "id": "wls2_consumable_pet_cannedfood",
      "item_id": "wls2_consumable_pet_cannedfood",
      "name": "欢乐宠物罐头",
      "name_en": "Happy Paw Can",
      "name_source": "official_zh",
      "description": "最美味，且营养最均衡的膳食。味道像鸡肉！",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "农场饲料",
      "tier": 1,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_canned_food",
      "image_id": "wls2_consumable_pet_cannedfood",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_hunger",
          "label": "恢复宠物饱食",
          "value": 75,
          "unit": "点"
        },
        {
          "id": "pet_boost",
          "label": "宠物增益",
          "value": 3600,
          "unit": ""
        },
        {
          "id": "pet_boost_growth",
          "label": "宠物成长加速",
          "value": 3600,
          "unit": ""
        },
        {
          "id": "pet_boost_adaptation",
          "label": "宠物适应加速",
          "value": 3600,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_pet_feeder_slot_6",
          "label": "饲料制作",
          "ingredients": [],
          "result_id": "wls2_consumable_pet_cannedfood",
          "result_name": "欢乐宠物罐头",
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
        "id": "wls2_consumable_pet_cannedfood",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_cannedfood_name",
        "sorting_group": "farm_feed",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a1b849bf9153a74c7e32167f029cedb6e68a239b29736e89a15640dd2293675d",
      "numeric": {
        "summary": [
          {
            "key": "pet_hunger",
            "label": "恢复宠物饱食",
            "unit": "点",
            "value": 75,
            "display": "75 点"
          },
          {
            "key": "pet_boost",
            "label": "宠物增益",
            "unit": "",
            "value": 3600,
            "display": "3600"
          },
          {
            "key": "pet_boost_growth",
            "label": "宠物成长加速",
            "unit": "",
            "value": 3600,
            "display": "3600"
          },
          {
            "key": "pet_boost_adaptation",
            "label": "宠物适应加速",
            "unit": "",
            "value": 3600,
            "display": "3600"
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
      "id": "wls2_consumable_farm_cow_food",
      "item_id": "wls2_consumable_farm_cow_food",
      "name": "牛饲料",
      "name_en": "Cow feed",
      "name_source": "official_zh",
      "description": "粉碎的混合饲料。牛的吸收效率要高得多，而且和新鲜食物一样美味",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "农场饲料",
      "tier": 1,
      "rarity": "rare",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_farm_cow_food_icon",
      "image_id": "wls2_consumable_farm_cow_food",
      "equipment_id": null,
      "stats": [
        {
          "id": "farm_hunger",
          "label": "恢复农场动物饱食",
          "value": 1000,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_recipe_shed_cow_feed",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_farm_cow_food",
          "result_name": "牛饲料",
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
        "id": "wls2_consumable_farm_cow_food",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_farm_cow_food_name",
        "sorting_group": "farm_feed",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ff7ead648217b8f564cd9b928c0d77b9ce553c8ad0a23e68413b560778add205",
      "numeric": {
        "summary": [
          {
            "key": "farm_hunger",
            "label": "恢复农场动物饱食",
            "unit": "点",
            "value": 1000,
            "display": "1000 点"
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
      "id": "wls2_consumable_farm_chicken_food",
      "item_id": "wls2_consumable_farm_chicken_food",
      "name": "鸡饲料",
      "name_en": "Chicken feed",
      "name_source": "official_zh",
      "description": "粉碎的混合饲料。鸡的吸收效率要高得多，而且和新鲜食物一样美味。",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "农场饲料",
      "tier": 1,
      "rarity": "rare",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_farm_chicken_feed_icon",
      "image_id": "wls2_consumable_farm_chicken_food",
      "equipment_id": null,
      "stats": [
        {
          "id": "farm_hunger",
          "label": "恢复农场动物饱食",
          "value": 330,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_recipe_shed_chicken_feed",
          "label": "工棚建造",
          "ingredients": [],
          "result_id": "wls2_consumable_farm_chicken_food",
          "result_name": "鸡饲料",
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
        "id": "wls2_consumable_farm_chicken_food",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_farm_chicken_food_name",
        "sorting_group": "farm_feed",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "2053a3c64a55abe67776e0dc89ebc156ce97d48fe772958b7ea234ffd356acd7",
      "numeric": {
        "summary": [
          {
            "key": "farm_hunger",
            "label": "恢复农场动物饱食",
            "unit": "点",
            "value": 330,
            "display": "330 点"
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
      "id": "wls2_consumable_pet_heal_1",
      "item_id": "wls2_consumable_pet_heal_1",
      "name": "草本疗愈饼干",
      "name_en": "Herbal healing cracker",
      "name_source": "official_zh",
      "description": "好吃的饼干，里面有药。你的宠物根本不会注意到任何异样！",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "宠物治疗",
      "tier": 1,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_heal_1_icon",
      "image_id": "wls2_consumable_pet_heal_1",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_health_regen",
          "label": "恢复宠物生命",
          "value": 300,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "为宠物恢复生命"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_heal_1",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_herb_1",
              "name": "医用草药",
              "amount": 5
            },
            {
              "id": "wls2_resourse_miscellaneous_meat_1",
              "name": "硬肉",
              "amount": 5
            },
            {
              "id": "wls2_consumable_corn_1",
              "name": "玉米",
              "amount": 5
            }
          ],
          "result_id": "wls2_consumable_pet_heal_1",
          "result_name": "草本疗愈饼干",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_pets_bait_trader_pet_heal_1_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_pet_heal_1",
          "result_name": "草本疗愈饼干",
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
        "id": "wls2_consumable_pet_heal_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_heal_1_name",
        "sorting_group": "pet_heal",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "cd4ea2b0f1702746602348324ff0b5554e79c903701bc9d174b162ea0bd713be",
      "numeric": {
        "summary": [
          {
            "key": "pet_health_regen",
            "label": "恢复宠物生命",
            "unit": "点",
            "value": 300,
            "display": "300 点"
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
      "id": "wls2_consumable_pet_bait_direwolfs_1",
      "item_id": "wls2_consumable_pet_bait_direwolfs_1",
      "name": "头狼诱饵 I",
      "name_en": "Alpha wolf bait I",
      "name_source": "official_zh",
      "description": "最高可引诱 20 级头狼",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "恐狼诱饵",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_bait_direwolfs_1_icon",
      "image_id": "wls2_consumable_pet_bait_direwolfs_1",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_bait_direwolfs_1",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_1",
              "name": "皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_miscellaneous_meat_1",
              "name": "硬肉",
              "amount": 3
            },
            {
              "id": "wls_cactus_berry",
              "name": "仙人掌果",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_pet_bait_direwolfs_1",
          "result_name": "头狼诱饵 I",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_pets_bait_trader_bait_direwolfs_1_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_pet_bait_direwolfs_1",
          "result_name": "头狼诱饵 I",
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
        "id": "wls2_consumable_pet_bait_direwolfs_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_direwolfs_1_name",
        "sorting_group": "pet_bait_direwolfs",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ccd8d1d5e12b1bbc27dcac6791f7b8f6b0e33d374a3ebb7df3816462810c3ac3"
    },
    {
      "id": "wls2_consumable_pet_bait_bears_1",
      "item_id": "wls2_consumable_pet_bait_bears_1",
      "name": "熊诱饵 I",
      "name_en": "Bear bait I",
      "name_source": "official_zh",
      "description": "最高可引诱 25 级熊",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "熊诱饵",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_bait_bears_1_icon",
      "image_id": "wls2_consumable_pet_bait_bears_1",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_bait_bears_1",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_1",
              "name": "皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_miscellaneous_herb_1",
              "name": "医用草药",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_meat_1",
              "name": "硬肉",
              "amount": 4
            },
            {
              "id": "wls_cactus_berry",
              "name": "仙人掌果",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_pet_bait_bears_1",
          "result_name": "熊诱饵 I",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_pets_bait_trader_bait_bears_1_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_pet_bait_bears_1",
          "result_name": "熊诱饵 I",
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
        "id": "wls2_consumable_pet_bait_bears_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_bears_1_name",
        "sorting_group": "pet_bait_bears",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "223de2e30abb0da90e3dc50feed4d40cba449aef1457bf4aac7e645d6bd1b9a5"
    },
    {
      "id": "wls2_consumable_pet_bait_wolfs_1",
      "item_id": "wls2_consumable_pet_bait_wolfs_1",
      "name": "狼诱饵 I",
      "name_en": "Wolf bait I",
      "name_source": "official_zh",
      "description": "最高可引诱 15 级狼",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "狼诱饵",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_bait_wolfs_1_icon",
      "image_id": "wls2_consumable_pet_bait_wolfs_1",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_bait_wolfs_1",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_1",
              "name": "皮",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_meat_1",
              "name": "硬肉",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_pet_bait_wolfs_1",
          "result_name": "狼诱饵 I",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_pets_bait_trader_bait_wolfs_1_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_pet_bait_wolfs_1",
          "result_name": "狼诱饵 I",
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
        "id": "wls2_consumable_pet_bait_wolfs_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_wolfs_1_name",
        "sorting_group": "pet_bait_wolfs",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4c766b740099acc012d3c80b3ce5d9228e67f1602449f2e96715f069201758cb"
    },
    {
      "id": "wls2_consumable_pet_bait_lynx_1",
      "item_id": "wls2_consumable_pet_bait_lynx_1",
      "name": "野猫诱饵 I",
      "name_en": "Wildcat Bait I",
      "name_source": "official_zh",
      "description": "最高可引诱 15 级山猫",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "猞猁诱饵",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_bait_lynx_1_icon",
      "image_id": "wls2_consumable_pet_bait_lynx_1",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_bait_lynx_1",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_fiber_1",
              "name": "荨麻",
              "amount": 3
            },
            {
              "id": "wls2_resourse_primary_hide_1",
              "name": "皮",
              "amount": 1
            },
            {
              "id": "wls2_cooking_ingredient_meat_white_2",
              "name": "白肉",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_pet_bait_lynx_1",
          "result_name": "野猫诱饵 I",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_pets_bait_trader_bait_lynx_1_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_pet_bait_lynx_1",
          "result_name": "野猫诱饵 I",
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
        "id": "wls2_consumable_pet_bait_lynx_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_lynx_1_name",
        "sorting_group": "pet_bait_lynx",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "cd4e749e5281c68ed8e05f6abf44e64364e41e1f281e699a15b199c321dc471a"
    },
    {
      "id": "wls2_consumable_pet_bait_pumas_1",
      "item_id": "wls2_consumable_pet_bait_pumas_1",
      "name": "美洲狮诱饵 I",
      "name_en": "Puma bait I",
      "name_source": "official_zh",
      "description": "最高可引诱 20 级美洲狮",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "美洲狮诱饵",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_bait_pumas_1_icon",
      "image_id": "wls2_consumable_pet_bait_pumas_1",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_bait_pumas_1",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_1",
              "name": "皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_miscellaneous_herb_1",
              "name": "医用草药",
              "amount": 1
            },
            {
              "id": "wls2_cooking_ingredient_meat_white_2",
              "name": "白肉",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_pet_bait_pumas_1",
          "result_name": "美洲狮诱饵 I",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_pets_bait_trader_bait_pumas_1_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_pet_bait_pumas_1",
          "result_name": "美洲狮诱饵 I",
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
        "id": "wls2_consumable_pet_bait_pumas_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_pumas_1_name",
        "sorting_group": "pet_bait_pumas",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "7f797d7acc70fd54a67a1e72f4329c656aede5a9c0fd2eab16a310e101ae7d5b"
    },
    {
      "id": "wls2_consumable_oats_1",
      "item_id": "wls2_consumable_oats_1",
      "name": "马儿甜点",
      "name_en": "Horse Sugar Treats",
      "name_source": "official_zh",
      "description": "经过蒸馏并压成块状的糖。在长途旅行中，你的马匹会很乐于享受这样的小吃。",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "农场饲料",
      "tier": 2,
      "rarity": "rare",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_sugar_cubes_icon",
      "image_id": "wls2_consumable_oats_1",
      "equipment_id": null,
      "stats": [
        {
          "id": "energy_horse",
          "label": "恢复坐骑体力",
          "value": 25,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [
        "恢复坐骑体力"
      ],
      "recipes": [
        {
          "id": "wls2_static_town_trader_offer_outs",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_oats_1",
          "result_name": "马儿甜点",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_static_town_trader_offer_30oats",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_oats_1",
          "result_name": "马儿甜点",
          "amount": 30,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_static_town_trader_offer_70oats",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_oats_1",
          "result_name": "马儿甜点",
          "amount": 70,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_swamp_trader_2_oats_20",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_oats_1",
          "result_name": "马儿甜点",
          "amount": 20,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_alaska_trader_2_oats_20",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_oats_1",
          "result_name": "马儿甜点",
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
        "id": "wls2_consumable_oats_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_wls2_horse_sugar_name",
        "sorting_group": "farm_feed",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "d0b41aefbf3122a80ad8c37f58bb8f9a1cab804729b3c9a55c70ee81d8c14e19",
      "numeric": {
        "summary": [
          {
            "key": "energy_horse",
            "label": "恢复坐骑体力",
            "unit": "",
            "value": 25,
            "display": "25"
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
      "id": "wls2_consumable_pet_heal_2",
      "item_id": "wls2_consumable_pet_heal_2",
      "name": "强效治愈饼干",
      "name_en": "Strong healing cracker",
      "name_source": "official_zh",
      "description": "好吃的饼干，里面有药。你的宠物根本不会注意到任何异样！",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "宠物治疗",
      "tier": 2,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_heal_2_icon",
      "image_id": "wls2_consumable_pet_heal_2",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_health_regen",
          "label": "恢复宠物生命",
          "value": 600,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "为宠物恢复生命"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_heal_2",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_herb_2",
              "name": "车前草",
              "amount": 5
            },
            {
              "id": "wls2_resourse_miscellaneous_meat_1",
              "name": "硬肉",
              "amount": 5
            },
            {
              "id": "wls2_cooking_ingredient_meat_white_2",
              "name": "白肉",
              "amount": 2
            },
            {
              "id": "wls2_consumable_corn_1",
              "name": "玉米",
              "amount": 5
            }
          ],
          "result_id": "wls2_consumable_pet_heal_2",
          "result_name": "强效治愈饼干",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_pets_bait_trader_pet_heal_2_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_pet_heal_2",
          "result_name": "强效治愈饼干",
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
        "id": "wls2_consumable_pet_heal_2",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_heal_2_name",
        "sorting_group": "pet_heal",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ac39fa44635aa6ce50cd911c1ba1fd471cf9791f0ba1aa1d0e38196340ac3d7e",
      "numeric": {
        "summary": [
          {
            "key": "pet_health_regen",
            "label": "恢复宠物生命",
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
      "id": "wls2_consumable_pet_bait_direwolfs_2",
      "item_id": "wls2_consumable_pet_bait_direwolfs_2",
      "name": "头狼诱饵 II",
      "name_en": "Alpha wolf bait II",
      "name_source": "official_zh",
      "description": "最高可引诱 40 级头狼",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "恐狼诱饵",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_bait_direwolfs_2_icon",
      "image_id": "wls2_consumable_pet_bait_direwolfs_2",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_bait_direwolfs_2",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_2",
              "name": "薄兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_miscellaneous_meat_3",
              "name": "多汁的肋骨",
              "amount": 2
            },
            {
              "id": "wls_cactus_berry",
              "name": "仙人掌果",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_pet_bait_direwolfs_2",
          "result_name": "头狼诱饵 II",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pet_bait_direwolfs_2",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_direwolfs_2_name",
        "sorting_group": "pet_bait_direwolfs",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "3e8e1af64c0dc30b445f82fe5406a6204dbc6556fce8d1fe8cb65cdced776af2"
    },
    {
      "id": "wls2_consumable_pet_bait_bears_2",
      "item_id": "wls2_consumable_pet_bait_bears_2",
      "name": "熊诱饵 II",
      "name_en": "Bear bait II",
      "name_source": "official_zh",
      "description": "最高可引诱 45 级熊",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "熊诱饵",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_bait_bears_2_icon",
      "image_id": "wls2_consumable_pet_bait_bears_2",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_bait_bears_2",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_2",
              "name": "薄兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_miscellaneous_herb_2",
              "name": "车前草",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_meat_3",
              "name": "多汁的肋骨",
              "amount": 3
            },
            {
              "id": "wls_cactus_berry",
              "name": "仙人掌果",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_pet_bait_bears_2",
          "result_name": "熊诱饵 II",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pet_bait_bears_2",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_bears_2_name",
        "sorting_group": "pet_bait_bears",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "b982d4c5031de69838f4b3ab7aa24071ef94effd114938ad441a6aa9e53cd35c"
    },
    {
      "id": "wls2_consumable_pet_bait_wolfs_2",
      "item_id": "wls2_consumable_pet_bait_wolfs_2",
      "name": "狼诱饵 II",
      "name_en": "Wolf bait II",
      "name_source": "official_zh",
      "description": "最高可引诱 35 级狼",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "狼诱饵",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_bait_wolfs_2_icon",
      "image_id": "wls2_consumable_pet_bait_wolfs_2",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_bait_wolfs_2",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_2",
              "name": "薄兽皮",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_meat_3",
              "name": "多汁的肋骨",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_pet_bait_wolfs_2",
          "result_name": "狼诱饵 II",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pet_bait_wolfs_2",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_wolfs_2_name",
        "sorting_group": "pet_bait_wolfs",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "3c930253b69f62fdf60de5422c6bd56a0db8917dddda427244d2a7e5e8cb0864"
    },
    {
      "id": "wls2_consumable_pet_bait_lynx_2",
      "item_id": "wls2_consumable_pet_bait_lynx_2",
      "name": "山猫诱饵 II",
      "name_en": "Lynx bait II",
      "name_source": "official_zh",
      "description": "最高可引诱 35 级山猫",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "猞猁诱饵",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_bait_lynx_2_icon",
      "image_id": "wls2_consumable_pet_bait_lynx_2",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_bait_lynx_2",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_fiber_2",
              "name": "黄麻",
              "amount": 3
            },
            {
              "id": "wls2_resourse_primary_hide_2",
              "name": "薄兽皮",
              "amount": 1
            },
            {
              "id": "wls2_cooking_ingredient_meat_white_2",
              "name": "白肉",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_pet_bait_lynx_2",
          "result_name": "山猫诱饵 II",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pet_bait_lynx_2",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_lynx_2_name",
        "sorting_group": "pet_bait_lynx",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "013df731b20df6b1d06f016965016f62da8662ca392e83a08a6da3bd0fbf6da8"
    },
    {
      "id": "wls2_consumable_pet_bait_pumas_2",
      "item_id": "wls2_consumable_pet_bait_pumas_2",
      "name": "美洲狮诱饵 II",
      "name_en": "Puma bait II",
      "name_source": "official_zh",
      "description": "最高可引诱 40 级美洲狮",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "美洲狮诱饵",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_bait_pumas_2_icon",
      "image_id": "wls2_consumable_pet_bait_pumas_2",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_bait_pumas_2",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_2",
              "name": "薄兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_miscellaneous_herb_2",
              "name": "车前草",
              "amount": 1
            },
            {
              "id": "wls2_cooking_ingredient_meat_white_2",
              "name": "白肉",
              "amount": 4
            }
          ],
          "result_id": "wls2_consumable_pet_bait_pumas_2",
          "result_name": "美洲狮诱饵 II",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pet_bait_pumas_2",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_pumas_2_name",
        "sorting_group": "pet_bait_pumas",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "290d97128d57ece432ce32f5a07b1528608be49963b281ce4eb72fb8ee8b417b"
    },
    {
      "id": "wls2_consumable_pet_bait_universal_2",
      "item_id": "wls2_consumable_pet_bait_universal_2",
      "name": "雷利的通用诱饵 II",
      "name_en": "Railey's Universal Bait II",
      "name_source": "official_zh",
      "description": "允许诱导动物直到第2级。不适用于鳄鱼。提供即时适应。",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "通用诱饵",
      "tier": 2,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_pet_bait_universal_2_icon",
      "image_id": "wls2_consumable_pet_bait_universal_2",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pet_bait_universal_2",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_universal_2_name",
        "sorting_group": "pet_bait_universal",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4fbc54610edcf6b3f7203b8211aec08389d3b469e9677e958f2497c998844b13"
    },
    {
      "id": "wls2_consumable_pet_bait_coyotes_1",
      "item_id": "wls2_consumable_pet_bait_coyotes_1",
      "name": "丛林狼诱饵",
      "name_en": "Coyote bait",
      "name_source": "official_zh",
      "description": "可引诱丛林狼",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "郊狼诱饵",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_bait_coyotes_1_icon",
      "image_id": "wls2_consumable_pet_bait_coyotes_1",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_bait_coyotes_1",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_1",
              "name": "皮",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_meat_1",
              "name": "硬肉",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_pet_bait_coyotes_1",
          "result_name": "丛林狼诱饵",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pet_bait_coyotes_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_coyotes_1_name",
        "sorting_group": "pet_bait_coyotes",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "246d38543bf0849d388438e28227e5f4014d864b9f594f4f2142622d21fe613a"
    },
    {
      "id": "wls2_consumable_pet_bait_boars_1",
      "item_id": "wls2_consumable_pet_bait_boars_1",
      "name": "野猪诱饵",
      "name_en": "Boar bait",
      "name_source": "official_zh",
      "description": "允许引诱野猪达到5级",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "野猪诱饵",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_bait_boars_1_icon",
      "image_id": "wls2_consumable_pet_bait_boars_1",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_bait_boars_1",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_1",
              "name": "皮",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_meat_1",
              "name": "硬肉",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_pet_bait_boars_1",
          "result_name": "野猪诱饵",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pet_bait_boars_1",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_boars_1_name",
        "sorting_group": "pet_bait_boars",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5344234cd1461c312a55983fd4da5586350270d5fc9cc8858e528ae7db50aa3c"
    },
    {
      "id": "wls2_consumable_farm_horse_food",
      "item_id": "wls2_consumable_farm_horse_food",
      "name": "马饲料",
      "name_en": "Horse feed",
      "name_source": "official_zh",
      "description": "粉碎的混合饲料。马匹吸收更好，味道和新鲜食物一样美味。",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "农场饲料",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 100,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_farm_horse_food_icon",
      "image_id": "wls2_consumable_farm_horse_food",
      "equipment_id": null,
      "stats": [
        {
          "id": "farm_hunger",
          "label": "恢复农场动物饱食",
          "value": 400,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_consumable_farm_horse_food_1",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_farm_horse_food",
          "result_name": "马饲料",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_consumable_farm_horse_food_5",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_farm_horse_food",
          "result_name": "马饲料",
          "amount": 5,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_recipe_mounts_horse_feed",
          "label": "工棚建造",
          "ingredients": [
            {
              "id": "wls2_consumable_farm_horse_food",
              "name": "马饲料",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_farm_horse_food",
          "result_name": "马饲料",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_recipe_mounts_horse_feed",
          "label": "工棚建造",
          "target_id": "wls2_consumable_farm_horse_food",
          "name": "马饲料",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_farm_horse_food",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_mounts_horse_food_name",
        "sorting_group": "farm_feed",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "b044b7ffc925b1f8014b81759fdeea74fa4f6a0021648bf2a8c529848b2463d1",
      "numeric": {
        "summary": [
          {
            "key": "farm_hunger",
            "label": "恢复农场动物饱食",
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
      "id": "wls2_consumable_mounts_fertility_restorer_3",
      "item_id": "wls2_consumable_mounts_fertility_restorer_3",
      "name": "马匹灵药",
      "name_en": "Equine elixir",
      "name_source": "official_zh",
      "description": "一种美洲原住民药剂，可以恢复一匹活跃马匹的2点生育能力。适合第3级的马。",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "坐骑繁育",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_mounts_fertility_restorer_3_icon",
      "image_id": "wls2_consumable_mounts_fertility_restorer_3",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_fertility_regen",
          "label": "恢复繁育力",
          "value": 2,
          "unit": ""
        },
        {
          "id": "max_pet_tier",
          "label": "适用最高阶级",
          "value": 3,
          "unit": "阶"
        }
      ],
      "effects": [],
      "uses": [
        "恢复繁育能力"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_mounts_fertility_restorer_3",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_wls2_consumable_mounts_fertility_restorer_3_name",
        "sorting_group": "horse_mounts_fertility",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "dc36561bb6c3c1d82828071069e2f960ea168f7516c8c72bb51d29d78b564037",
      "numeric": {
        "summary": [
          {
            "key": "pet_fertility_regen",
            "label": "恢复繁育力",
            "unit": "",
            "value": 2,
            "display": "2"
          },
          {
            "key": "max_pet_tier",
            "label": "适用最高阶级",
            "unit": "阶",
            "value": 3,
            "display": "3 阶"
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
      "id": "wls2_consumable_pet_heal_3",
      "item_id": "wls2_consumable_pet_heal_3",
      "name": "极佳的疗愈饼干",
      "name_en": "Excellent healing cracker",
      "name_source": "official_zh",
      "description": "好吃的饼干，里面有药。你的宠物根本不会注意到任何异样！",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "宠物治疗",
      "tier": 3,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_heal_3_icon",
      "image_id": "wls2_consumable_pet_heal_3",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_health_regen",
          "label": "恢复宠物生命",
          "value": 1100,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "为宠物恢复生命"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_heal_3",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_herb_3",
              "name": "藿香",
              "amount": 5
            },
            {
              "id": "wls2_cooking_ingredient_meat_white_2",
              "name": "白肉",
              "amount": 5
            },
            {
              "id": "wls2_consumable_corn_1",
              "name": "玉米",
              "amount": 5
            }
          ],
          "result_id": "wls2_consumable_pet_heal_3",
          "result_name": "极佳的疗愈饼干",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_pets_bait_trader_pet_heal_3_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_pet_heal_3",
          "result_name": "极佳的疗愈饼干",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_south_trader_pet_heal_3_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_pet_heal_3",
          "result_name": "极佳的疗愈饼干",
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
        "id": "wls2_consumable_pet_heal_3",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_heal_3_name",
        "sorting_group": "pet_heal",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "f8ff8265e7f6af7c28d04201f4a8da9cbc7d5b5056d47db060d7573b31bf1119",
      "numeric": {
        "summary": [
          {
            "key": "pet_health_regen",
            "label": "恢复宠物生命",
            "unit": "点",
            "value": 1100,
            "display": "1100 点"
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
      "id": "wls2_consumable_pets_fertility_restorer_3",
      "item_id": "wls2_consumable_pets_fertility_restorer_3",
      "name": "宠物圣水",
      "name_en": "Pets elixir",
      "name_source": "official_zh",
      "description": "一种原住民药剂，可以为一只活跃宠物恢复2点生育能力。适用于三级或以下的宠物。",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "宠物繁育",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_pets_fertility_restorer_3",
      "image_id": "wls2_consumable_pets_fertility_restorer_3",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_fertility_regen",
          "label": "恢复繁育力",
          "value": 2,
          "unit": ""
        },
        {
          "id": "max_pet_tier",
          "label": "适用最高阶级",
          "value": 3,
          "unit": "阶"
        }
      ],
      "effects": [],
      "uses": [
        "恢复繁育能力"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pets_fertility_restorer_3",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_wls2_consumable_pets_fertility_restorer_3_name",
        "sorting_group": "pets_fertility",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "968eab7a3cdd9094258a3abae840d78298306c5f5180510891af9918d2b2700f",
      "numeric": {
        "summary": [
          {
            "key": "pet_fertility_regen",
            "label": "恢复繁育力",
            "unit": "",
            "value": 2,
            "display": "2"
          },
          {
            "key": "max_pet_tier",
            "label": "适用最高阶级",
            "unit": "阶",
            "value": 3,
            "display": "3 阶"
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
      "id": "wls2_consumable_pet_bait_direwolfs_3",
      "item_id": "wls2_consumable_pet_bait_direwolfs_3",
      "name": "头狼诱饵 III",
      "name_en": "Alpha wolf bait III",
      "name_source": "official_zh",
      "description": "最高可引诱 60 级头狼",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "恐狼诱饵",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_bait_direwolfs_3_icon",
      "image_id": "wls2_consumable_pet_bait_direwolfs_3",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_bait_direwolfs_3",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_3",
              "name": "兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_miscellaneous_meat_3",
              "name": "多汁的肋骨",
              "amount": 3
            },
            {
              "id": "wls_cactus_berry",
              "name": "仙人掌果",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_pet_bait_direwolfs_3",
          "result_name": "头狼诱饵 III",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pet_bait_direwolfs_3",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_direwolfs_3_name",
        "sorting_group": "pet_bait_direwolfs",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5634b9bdb3689c8570b199a25a92f9223b27ffe5e7e628f2627e1c81a3f94d47"
    },
    {
      "id": "wls2_consumable_pet_bait_bears_3",
      "item_id": "wls2_consumable_pet_bait_bears_3",
      "name": "熊诱饵 III",
      "name_en": "Bear bait III",
      "name_source": "official_zh",
      "description": "最高可引诱 65 级熊",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "熊诱饵",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_bait_bears_3_icon",
      "image_id": "wls2_consumable_pet_bait_bears_3",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_bait_bears_3",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_3",
              "name": "兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_miscellaneous_herb_3",
              "name": "藿香",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_meat_3",
              "name": "多汁的肋骨",
              "amount": 4
            },
            {
              "id": "wls_cactus_berry",
              "name": "仙人掌果",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_pet_bait_bears_3",
          "result_name": "熊诱饵 III",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pet_bait_bears_3",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_bears_3_name",
        "sorting_group": "pet_bait_bears",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "0794960223b1ed34ce4a9c3e08606e841eb21e5ea73334f9cf8a0d1963bb0e61"
    },
    {
      "id": "wls2_consumable_pet_bait_wolfs_3",
      "item_id": "wls2_consumable_pet_bait_wolfs_3",
      "name": "狼诱饵 III",
      "name_en": "Wolf bait III",
      "name_source": "official_zh",
      "description": "最高可引诱 55 级狼",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "狼诱饵",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_bait_wolfs_3_icon",
      "image_id": "wls2_consumable_pet_bait_wolfs_3",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_bait_wolfs_3",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_3",
              "name": "兽皮",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_meat_3",
              "name": "多汁的肋骨",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_pet_bait_wolfs_3",
          "result_name": "狼诱饵 III",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pet_bait_wolfs_3",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_wolfs_3_name",
        "sorting_group": "pet_bait_wolfs",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "2e896d3afd6c45a1b012d5f9fd43b9b1404e4abdd4e509e32dea84df72e7d8c0"
    },
    {
      "id": "wls2_consumable_pet_bait_lynx_3",
      "item_id": "wls2_consumable_pet_bait_lynx_3",
      "name": "山猫诱饵 III",
      "name_en": "Lynx bait III",
      "name_source": "official_zh",
      "description": "最高可引诱 55 级山猫",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "猞猁诱饵",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_bait_lynx_3_icon",
      "image_id": "wls2_consumable_pet_bait_lynx_3",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_bait_lynx_3",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_fiber_3",
              "name": "亚麻",
              "amount": 3
            },
            {
              "id": "wls2_resourse_primary_hide_3",
              "name": "兽皮",
              "amount": 1
            },
            {
              "id": "wls2_cooking_ingredient_meat_white_2",
              "name": "白肉",
              "amount": 4
            }
          ],
          "result_id": "wls2_consumable_pet_bait_lynx_3",
          "result_name": "山猫诱饵 III",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pet_bait_lynx_3",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_lynx_3_name",
        "sorting_group": "pet_bait_lynx",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "f475cee77eb284f0080bda2d75dbd84136f0fb93da019ebc1ccd28d0986caccd"
    },
    {
      "id": "wls2_consumable_pet_bait_pumas_3",
      "item_id": "wls2_consumable_pet_bait_pumas_3",
      "name": "美洲狮诱饵 III",
      "name_en": "Puma bait III",
      "name_source": "official_zh",
      "description": "最高可引诱 60 级美洲狮",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "美洲狮诱饵",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_bait_pumas_3_icon",
      "image_id": "wls2_consumable_pet_bait_pumas_3",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_bait_pumas_3",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_3",
              "name": "兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_miscellaneous_herb_3",
              "name": "藿香",
              "amount": 1
            },
            {
              "id": "wls2_cooking_ingredient_meat_white_2",
              "name": "白肉",
              "amount": 5
            }
          ],
          "result_id": "wls2_consumable_pet_bait_pumas_3",
          "result_name": "美洲狮诱饵 III",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pet_bait_pumas_3",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_pumas_3_name",
        "sorting_group": "pet_bait_pumas",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4f3992c0df20288cf7af1dffb63b55f1e37c0c33f1237efa0ab030b3f48a24ba"
    },
    {
      "id": "wls2_consumable_pet_bait_universal_3",
      "item_id": "wls2_consumable_pet_bait_universal_3",
      "name": "雷利的通用诱饵 III",
      "name_en": "Railey's Universal Bait III",
      "name_source": "official_zh",
      "description": "允许诱导动物直到3级。不适用于鳄鱼。提供即时适应。",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "通用诱饵",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_pet_bait_universal_3_icon",
      "image_id": "wls2_consumable_pet_bait_universal_3",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pet_bait_universal_3",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_universal_3_name",
        "sorting_group": "pet_bait_universal",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "cd0fd283b4b92c6b958c002807bfa877b8dd39d07eafaeca5dc2abc1a06058e9"
    },
    {
      "id": "wls2_consumable_mounts_fertility_restorer_4",
      "item_id": "wls2_consumable_mounts_fertility_restorer_4",
      "name": "马匹活力灵药",
      "name_en": "Equine vital elixir",
      "name_source": "official_zh",
      "description": "一种强力的美洲原住民药剂，可以恢复一匹活跃马匹的2点生育能力。适合第4级或以下的马。",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "坐骑繁育",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_consumable_mounts_fertility_restorer_4_icon",
      "image_id": "wls2_consumable_mounts_fertility_restorer_4",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_fertility_regen",
          "label": "恢复繁育力",
          "value": 2,
          "unit": ""
        },
        {
          "id": "max_pet_tier",
          "label": "适用最高阶级",
          "value": 4,
          "unit": "阶"
        }
      ],
      "effects": [],
      "uses": [
        "恢复繁育能力"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_mounts_fertility_restorer_4",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_wls2_consumable_mounts_fertility_restorer_4_name",
        "sorting_group": "horse_mounts_fertility",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "079d3d3698645c61479e1979a257eb7caac1a76a58ff094a984944336338a5b4",
      "numeric": {
        "summary": [
          {
            "key": "pet_fertility_regen",
            "label": "恢复繁育力",
            "unit": "",
            "value": 2,
            "display": "2"
          },
          {
            "key": "max_pet_tier",
            "label": "适用最高阶级",
            "unit": "阶",
            "value": 4,
            "display": "4 阶"
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
      "id": "wls2_consumable_pet_heal_4",
      "item_id": "wls2_consumable_pet_heal_4",
      "name": "土著疗愈饼干",
      "name_en": "Indigenous healing cracker",
      "name_source": "official_zh",
      "description": "好吃的饼干，里面有药。你的宠物根本不会注意到任何异样！",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "宠物治疗",
      "tier": 4,
      "rarity": "common",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_heal_4_icon",
      "image_id": "wls2_consumable_pet_heal_4",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_health_regen",
          "label": "恢复宠物生命",
          "value": 2000,
          "unit": "点"
        }
      ],
      "effects": [],
      "uses": [
        "为宠物恢复生命"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_heal_4",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_herb_4",
              "name": "洋甘菊",
              "amount": 5
            },
            {
              "id": "wls2_cooking_ingredient_meat_white_2",
              "name": "白肉",
              "amount": 5
            },
            {
              "id": "wls2_consumable_meat_tenderloin",
              "name": "肉片",
              "amount": 2
            },
            {
              "id": "wls2_consumable_corn_1",
              "name": "玉米",
              "amount": 5
            }
          ],
          "result_id": "wls2_consumable_pet_heal_4",
          "result_name": "土著疗愈饼干",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_pets_bait_trader_pet_heal_4_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_pet_heal_4",
          "result_name": "土著疗愈饼干",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_south_trader_pet_heal_4_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_pet_heal_4",
          "result_name": "土著疗愈饼干",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_swamp_trader_pet_heal_4_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_pet_heal_4",
          "result_name": "土著疗愈饼干",
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
        "id": "wls2_consumable_pet_heal_4",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_heal_4_name",
        "sorting_group": "pet_heal",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "3ccf1355e829f48944bcbf03d0d6f3f92f9117e6961cf8ef4ce0c4519d8a6dff",
      "numeric": {
        "summary": [
          {
            "key": "pet_health_regen",
            "label": "恢复宠物生命",
            "unit": "点",
            "value": 2000,
            "display": "2000 点"
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
      "id": "wls2_consumable_pets_fertility_restorer_4",
      "item_id": "wls2_consumable_pets_fertility_restorer_4",
      "name": "宠物活力灵药",
      "name_en": "Pets vital elixir",
      "name_source": "official_zh",
      "description": "一种原住民药剂，可以为一只活跃的宠物恢复2点生育能力。适用于4级或以下的宠物。",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "宠物繁育",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 20,
      "stack_type": "limited",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_consumable_pets_fertility_restorer_4",
      "image_id": "wls2_consumable_pets_fertility_restorer_4",
      "equipment_id": null,
      "stats": [
        {
          "id": "pet_fertility_regen",
          "label": "恢复繁育力",
          "value": 2,
          "unit": ""
        },
        {
          "id": "max_pet_tier",
          "label": "适用最高阶级",
          "value": 4,
          "unit": "阶"
        }
      ],
      "effects": [],
      "uses": [
        "恢复繁育能力"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pets_fertility_restorer_4",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_wls2_consumable_pets_fertility_restorer_4_name",
        "sorting_group": "pets_fertility",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "197c53aa7dd62619c6a712b7042eb571329e77180f778b60cc19ebe1d0e797bd",
      "numeric": {
        "summary": [
          {
            "key": "pet_fertility_regen",
            "label": "恢复繁育力",
            "unit": "",
            "value": 2,
            "display": "2"
          },
          {
            "key": "max_pet_tier",
            "label": "适用最高阶级",
            "unit": "阶",
            "value": 4,
            "display": "4 阶"
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
      "id": "wls2_consumable_pet_bait_direwolfs_4",
      "item_id": "wls2_consumable_pet_bait_direwolfs_4",
      "name": "头狼诱饵 IV",
      "name_en": "Alpha wolf bait IV",
      "name_source": "official_zh",
      "description": "最高可引诱 80 级头狼",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "恐狼诱饵",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_bait_direwolfs_4_icon",
      "image_id": "wls2_consumable_pet_bait_direwolfs_4",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_bait_direwolfs_4",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_4",
              "name": "精致兽皮",
              "amount": 2
            },
            {
              "id": "wls2_consumable_meat_tenderloin",
              "name": "肉片",
              "amount": 6
            },
            {
              "id": "wls_cactus_berry",
              "name": "仙人掌果",
              "amount": 3
            }
          ],
          "result_id": "wls2_consumable_pet_bait_direwolfs_4",
          "result_name": "头狼诱饵 IV",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pet_bait_direwolfs_4",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_direwolfs_4_name",
        "sorting_group": "pet_bait_direwolfs",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1e8f483c645e5537910c42d7eaa09f894e7786a4ce10da112b141eadfe9fedba"
    },
    {
      "id": "wls2_consumable_pet_bait_bears_4",
      "item_id": "wls2_consumable_pet_bait_bears_4",
      "name": "熊诱饵 IV",
      "name_en": "Bear bait IV",
      "name_source": "official_zh",
      "description": "最高可引诱 85 级熊",
      "category": "pet_supply",
      "category_label": "宠物与饲养用品",
      "subcategory": "熊诱饵",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_consumable_pet_bait_bears_4_icon",
      "image_id": "wls2_consumable_pet_bait_bears_4",
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [
        "用于吸引对应种类的宠物"
      ],
      "recipes": [
        {
          "id": "wls2_consumable_pet_bait_bears_4",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_4",
              "name": "精致兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_miscellaneous_herb_4",
              "name": "洋甘菊",
              "amount": 1
            },
            {
              "id": "wls2_consumable_meat_tenderloin",
              "name": "肉片",
              "amount": 8
            },
            {
              "id": "wls_cactus_berry",
              "name": "仙人掌果",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_pet_bait_bears_4",
          "result_name": "熊诱饵 IV",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_consumable_pet_bait_bears_4",
        "reason": "physical_inventory_stack",
        "name_key": "inventory_stack_view_pet_bait_bears_4_name",
        "sorting_group": "pet_bait_bears",
        "stat_table": null,
        "behaviour_table": "inventory_stack_behaviours",
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "c24034f07107aff5e2aa7f0534678dceca0ea57ee3710256f43698f7b74eb4bc"
    }
  ]
};
