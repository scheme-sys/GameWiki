/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-inventory-33"] = {
  "section": "inventory",
  "records": [
    {
      "id": "wls2_extention_forge_pricetoskip_uncommon",
      "item_id": "wls2_extention_forge_pricetoskip_uncommon",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "熔炉",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_uncommon",
      "image_id": "wls2_extention_forge_pricetoskip_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 17.0
            },
            {
              "level": 3,
              "value": 19.0
            },
            {
              "level": 4,
              "value": 21.0
            },
            {
              "level": 5,
              "value": 23.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到熔炉后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "熔炉"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_forge_pricetoskip_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_forge_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "48314ab3c71e3800f04d2efe04885f24443d649dfa71294f9bd2a9bb12d7c810",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 15.0,
            "display": "15%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "skip_time_price_reduction": 15.0
            },
            "display": {
              "skip_time_price_reduction": "15%"
            }
          },
          {
            "level": 2,
            "values": {
              "skip_time_price_reduction": 17.0
            },
            "display": {
              "skip_time_price_reduction": "17%"
            }
          },
          {
            "level": 3,
            "values": {
              "skip_time_price_reduction": 19.0
            },
            "display": {
              "skip_time_price_reduction": "19%"
            }
          },
          {
            "level": 4,
            "values": {
              "skip_time_price_reduction": 21.0
            },
            "display": {
              "skip_time_price_reduction": "21%"
            }
          },
          {
            "level": 5,
            "values": {
              "skip_time_price_reduction": 23.0
            },
            "display": {
              "skip_time_price_reduction": "23%"
            }
          }
        ],
        "columns": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_forge_cashback_uncommon",
      "item_id": "wls2_extention_forge_cashback_uncommon",
      "name": "划线规",
      "name_en": "Marking Gauge",
      "name_source": "official_zh",
      "description": "制作时有几率返还 1 个单位的资源",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "熔炉",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_cashback_uncommon",
      "image_id": "wls2_extention_forge_cashback_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "cashback_chance",
          "label": "材料返还概率",
          "value": 12.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 12.0
            },
            {
              "level": 2,
              "value": 13.0
            },
            {
              "level": 3,
              "value": 14.0
            },
            {
              "level": 4,
              "value": 15.0
            },
            {
              "level": 5,
              "value": 16.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到熔炉后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "熔炉"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_forge_cashback_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_cashback_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_forge_cashback_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "092aa433907ff34158b7ace2b0a8cb7446c50f8f931a8a9b7b98dedbb4edfe74",
      "numeric": {
        "summary": [
          {
            "key": "cashback_chance",
            "label": "材料返还概率",
            "unit": "%",
            "value": 12.0,
            "display": "12%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "cashback_chance": 12.0
            },
            "display": {
              "cashback_chance": "12%"
            }
          },
          {
            "level": 2,
            "values": {
              "cashback_chance": 13.0
            },
            "display": {
              "cashback_chance": "13%"
            }
          },
          {
            "level": 3,
            "values": {
              "cashback_chance": 14.0
            },
            "display": {
              "cashback_chance": "14%"
            }
          },
          {
            "level": 4,
            "values": {
              "cashback_chance": 15.0
            },
            "display": {
              "cashback_chance": "15%"
            }
          },
          {
            "level": 5,
            "values": {
              "cashback_chance": 16.0
            },
            "display": {
              "cashback_chance": "16%"
            }
          }
        ],
        "columns": [
          {
            "key": "cashback_chance",
            "label": "材料返还概率",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_forge_timetofix_common",
      "item_id": "wls2_extention_forge_timetofix_common",
      "name": "备件盒",
      "name_en": "Spares Box",
      "name_source": "official_zh",
      "description": "如果有歹徒破坏了工作台，可以加快工作台的修理时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "熔炉",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetofix_common",
      "image_id": "wls2_extention_forge_timetofix_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "repair_time_reduction",
          "label": "修理时间缩短",
          "value": 20.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 20.0
            },
            {
              "level": 2,
              "value": 22.0
            },
            {
              "level": 3,
              "value": 24.0
            },
            {
              "level": 4,
              "value": 26.0
            },
            {
              "level": 5,
              "value": 28.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到熔炉后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_forge_timetofix",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 100
            }
          ],
          "result_id": "wls2_extention_forge_timetofix_common",
          "result_name": "备件盒",
          "amount": 1,
          "item_level": 5
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "熔炉"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_forge_timetofix_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetofix_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_forge_timetofix_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1231f77e8a5e0ecc765e060eb02acfe4103aa044ef2380e33c15d79fd3f67642",
      "numeric": {
        "summary": [
          {
            "key": "repair_time_reduction",
            "label": "修理时间缩短",
            "unit": "%",
            "value": 20.0,
            "display": "20%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "repair_time_reduction": 20.0
            },
            "display": {
              "repair_time_reduction": "20%"
            }
          },
          {
            "level": 2,
            "values": {
              "repair_time_reduction": 22.0
            },
            "display": {
              "repair_time_reduction": "22%"
            }
          },
          {
            "level": 3,
            "values": {
              "repair_time_reduction": 24.0
            },
            "display": {
              "repair_time_reduction": "24%"
            }
          },
          {
            "level": 4,
            "values": {
              "repair_time_reduction": 26.0
            },
            "display": {
              "repair_time_reduction": "26%"
            }
          },
          {
            "level": 5,
            "values": {
              "repair_time_reduction": 28.0
            },
            "display": {
              "repair_time_reduction": "28%"
            }
          }
        ],
        "columns": [
          {
            "key": "repair_time_reduction",
            "label": "修理时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_forge_timetofix_uncommon",
      "item_id": "wls2_extention_forge_timetofix_uncommon",
      "name": "备件盒",
      "name_en": "Spares Box",
      "name_source": "official_zh",
      "description": "如果有歹徒破坏了工作台，可以加快工作台的修理时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "熔炉",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetofix_uncommon",
      "image_id": "wls2_extention_forge_timetofix_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "repair_time_reduction",
          "label": "修理时间缩短",
          "value": 34.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 34.0
            },
            {
              "level": 2,
              "value": 38.0
            },
            {
              "level": 3,
              "value": 42.0
            },
            {
              "level": 4,
              "value": 46.0
            },
            {
              "level": 5,
              "value": 50.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到熔炉后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "熔炉"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_forge_timetofix_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetofix_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_forge_timetofix_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "55e12ba3f19d631e18781bacb68ed2e18325e99535c72b63f9d26be58b440d1d",
      "numeric": {
        "summary": [
          {
            "key": "repair_time_reduction",
            "label": "修理时间缩短",
            "unit": "%",
            "value": 34.0,
            "display": "34%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "repair_time_reduction": 34.0
            },
            "display": {
              "repair_time_reduction": "34%"
            }
          },
          {
            "level": 2,
            "values": {
              "repair_time_reduction": 38.0
            },
            "display": {
              "repair_time_reduction": "38%"
            }
          },
          {
            "level": 3,
            "values": {
              "repair_time_reduction": 42.0
            },
            "display": {
              "repair_time_reduction": "42%"
            }
          },
          {
            "level": 4,
            "values": {
              "repair_time_reduction": 46.0
            },
            "display": {
              "repair_time_reduction": "46%"
            }
          },
          {
            "level": 5,
            "values": {
              "repair_time_reduction": 50.0
            },
            "display": {
              "repair_time_reduction": "50%"
            }
          }
        ],
        "columns": [
          {
            "key": "repair_time_reduction",
            "label": "修理时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_forge_timetobuild_uncommon",
      "item_id": "wls2_extention_forge_timetobuild_uncommon",
      "name": "建造加速插件",
      "name_en": "",
      "name_source": "descriptive_fallback",
      "description": "加快工作台升级时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "熔炉",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls_bone_knife",
      "image_id": "wls2_extention_forge_timetobuild_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "construction_time_reduction",
          "label": "建造时间缩短",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 17.0
            },
            {
              "level": 3,
              "value": 19.0
            },
            {
              "level": 4,
              "value": 21.0
            },
            {
              "level": 5,
              "value": 23.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到熔炉后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "熔炉"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_forge_timetobuild_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetobuild_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_forge_timetobuild_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a01ec765769152690101d8c94b56686750e2a6b7e78019cb50e1df5e9ed6b6a2",
      "numeric": {
        "summary": [
          {
            "key": "construction_time_reduction",
            "label": "建造时间缩短",
            "unit": "%",
            "value": 15.0,
            "display": "15%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "construction_time_reduction": 15.0
            },
            "display": {
              "construction_time_reduction": "15%"
            }
          },
          {
            "level": 2,
            "values": {
              "construction_time_reduction": 17.0
            },
            "display": {
              "construction_time_reduction": "17%"
            }
          },
          {
            "level": 3,
            "values": {
              "construction_time_reduction": 19.0
            },
            "display": {
              "construction_time_reduction": "19%"
            }
          },
          {
            "level": 4,
            "values": {
              "construction_time_reduction": 21.0
            },
            "display": {
              "construction_time_reduction": "21%"
            }
          },
          {
            "level": 5,
            "values": {
              "construction_time_reduction": 23.0
            },
            "display": {
              "construction_time_reduction": "23%"
            }
          }
        ],
        "columns": [
          {
            "key": "construction_time_reduction",
            "label": "建造时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_forge_health_uncommon",
      "item_id": "wls2_extention_forge_health_uncommon",
      "name": "牢固框架",
      "name_en": "Strong frame",
      "name_source": "official_zh",
      "description": "增加工作台耐久度。歹徒需要花费更大工夫才能破坏工作台",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "熔炉",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_health_uncommon",
      "image_id": "wls2_extention_forge_health_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "building_health",
          "label": "建筑生命",
          "value": 60,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 60
            },
            {
              "level": 2,
              "value": 70
            },
            {
              "level": 3,
              "value": 80
            },
            {
              "level": 4,
              "value": 90
            },
            {
              "level": 5,
              "value": 100
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到熔炉后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "熔炉"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_forge_health_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_health_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_forge_health_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "39ace5cf1d588557e139cff21063410c71a4488ad94fc49c2694c3360ef26e0a",
      "numeric": {
        "summary": [
          {
            "key": "building_health",
            "label": "建筑生命",
            "unit": "",
            "value": 60,
            "display": "60"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "building_health": 60
            },
            "display": {
              "building_health": "60"
            }
          },
          {
            "level": 2,
            "values": {
              "building_health": 70
            },
            "display": {
              "building_health": "70"
            }
          },
          {
            "level": 3,
            "values": {
              "building_health": 80
            },
            "display": {
              "building_health": "80"
            }
          },
          {
            "level": 4,
            "values": {
              "building_health": 90
            },
            "display": {
              "building_health": "90"
            }
          },
          {
            "level": 5,
            "values": {
              "building_health": 100
            },
            "display": {
              "building_health": "100"
            }
          }
        ],
        "columns": [
          {
            "key": "building_health",
            "label": "建筑生命",
            "unit": ""
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_forge_timetocraft_common",
      "item_id": "wls2_extention_forge_timetocraft_common",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "熔炉",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_common",
      "image_id": "wls2_extention_forge_timetocraft_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 6.0
            },
            {
              "level": 3,
              "value": 7.0
            },
            {
              "level": 4,
              "value": 8.0
            },
            {
              "level": 5,
              "value": 9.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到熔炉后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_forge_timetocraft",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 400
            }
          ],
          "result_id": "wls2_extention_forge_timetocraft_common",
          "result_name": "转动装置",
          "amount": 1,
          "item_level": 5
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "熔炉"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_forge_timetocraft_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_forge_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "194a79e35d64168bf0f3f6d185bbd72aa1c8fc13d25f1c3483f316736b980fa7",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 5.0,
            "display": "5%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "craft_time_reduction": 5.0
            },
            "display": {
              "craft_time_reduction": "5%"
            }
          },
          {
            "level": 2,
            "values": {
              "craft_time_reduction": 6.0
            },
            "display": {
              "craft_time_reduction": "6%"
            }
          },
          {
            "level": 3,
            "values": {
              "craft_time_reduction": 7.0
            },
            "display": {
              "craft_time_reduction": "7%"
            }
          },
          {
            "level": 4,
            "values": {
              "craft_time_reduction": 8.0
            },
            "display": {
              "craft_time_reduction": "8%"
            }
          },
          {
            "level": 5,
            "values": {
              "craft_time_reduction": 9.0
            },
            "display": {
              "craft_time_reduction": "9%"
            }
          }
        ],
        "columns": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_forge_timetocraft_uncommon",
      "item_id": "wls2_extention_forge_timetocraft_uncommon",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "熔炉",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_uncommon",
      "image_id": "wls2_extention_forge_timetocraft_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 17.0
            },
            {
              "level": 3,
              "value": 19.0
            },
            {
              "level": 4,
              "value": 21.0
            },
            {
              "level": 5,
              "value": 23.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到熔炉后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "熔炉"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_forge_timetocraft_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_forge_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "0c89940736d311752d87ab6d2d8de11e0704f6f8e61fa2ec9c494d90684fe39c",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 15.0,
            "display": "15%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "craft_time_reduction": 15.0
            },
            "display": {
              "craft_time_reduction": "15%"
            }
          },
          {
            "level": 2,
            "values": {
              "craft_time_reduction": 17.0
            },
            "display": {
              "craft_time_reduction": "17%"
            }
          },
          {
            "level": 3,
            "values": {
              "craft_time_reduction": 19.0
            },
            "display": {
              "craft_time_reduction": "19%"
            }
          },
          {
            "level": 4,
            "values": {
              "craft_time_reduction": 21.0
            },
            "display": {
              "craft_time_reduction": "21%"
            }
          },
          {
            "level": 5,
            "values": {
              "craft_time_reduction": 23.0
            },
            "display": {
              "craft_time_reduction": "23%"
            }
          }
        ],
        "columns": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_forge_queue_common",
      "item_id": "wls2_extention_forge_queue_common",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "熔炉",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_cashback_common",
      "image_id": "wls2_extention_forge_queue_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "additional_prodiuction_slot",
          "label": "额外生产队列",
          "value": 1,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [
        "安装到熔炉后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "熔炉"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_forge_queue_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_queue_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_forge_queue_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5f41b0668f8d0d33fa8af005b6377cd0f1150e22e634229b3b5861e6faa9a50e",
      "numeric": {
        "summary": [
          {
            "key": "additional_prodiuction_slot",
            "label": "额外生产队列",
            "unit": "",
            "value": 1,
            "display": "1"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "插件等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_extention_forge_queue_uncommon",
      "item_id": "wls2_extention_forge_queue_uncommon",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "熔炉",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_cashback_common",
      "image_id": "wls2_extention_forge_queue_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "additional_prodiuction_slot",
          "label": "额外生产队列",
          "value": 2,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [
        "安装到熔炉后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "熔炉"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_forge_queue_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_queue_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_forge_queue_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5f41b0668f8d0d33fa8af005b6377cd0f1150e22e634229b3b5861e6faa9a50e",
      "numeric": {
        "summary": [
          {
            "key": "additional_prodiuction_slot",
            "label": "额外生产队列",
            "unit": "",
            "value": 2,
            "display": "2"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "插件等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_extention_forge_damage_common",
      "item_id": "wls2_extention_forge_damage_common",
      "name": "金刚砂轮",
      "name_en": "Emery Wheel",
      "name_source": "official_zh",
      "description": "给予额外的伤害点数给那个在工作台上用这个模块制作的武器",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "熔炉",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_damage_common",
      "image_id": "wls2_extention_forge_damage_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "damage",
          "label": "伤害",
          "value": 4,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 4
            },
            {
              "level": 2,
              "value": 6
            },
            {
              "level": 3,
              "value": 8
            },
            {
              "level": 4,
              "value": 10
            },
            {
              "level": 5,
              "value": 12
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到熔炉后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_forge_damage",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 1000
            }
          ],
          "result_id": "wls2_extention_forge_damage_common",
          "result_name": "金刚砂轮",
          "amount": 1,
          "item_level": 5
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "熔炉"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_forge_damage_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_damage_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_forge_stat_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "074c8a37ce2cfa213921869d35afe74570912a05badb57e9353c4c35610e4ac0",
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "unit": "",
            "value": 4,
            "display": "4"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 4
            },
            "display": {
              "damage": "4"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 6
            },
            "display": {
              "damage": "6"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 8
            },
            "display": {
              "damage": "8"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 10
            },
            "display": {
              "damage": "10"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 12
            },
            "display": {
              "damage": "12"
            }
          }
        ],
        "columns": [
          {
            "key": "damage",
            "label": "伤害",
            "unit": ""
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_forge_damage_uncommon",
      "item_id": "wls2_extention_forge_damage_uncommon",
      "name": "金刚砂轮",
      "name_en": "Emery Wheel",
      "name_source": "official_zh",
      "description": "给予额外的伤害点数给那个在工作台上用这个模块制作的武器",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "熔炉",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_damage_uncommon",
      "image_id": "wls2_extention_forge_damage_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "damage",
          "label": "伤害",
          "value": 14,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 14
            },
            {
              "level": 2,
              "value": 16
            },
            {
              "level": 3,
              "value": 18
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
        }
      ],
      "effects": [],
      "uses": [
        "安装到熔炉后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "熔炉"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_forge_damage_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_damage_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_forge_stat_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "90dc7deb5fa2f7a4ffccde58dd56a02370b8ec30b16d4afbb35c57b159649587",
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "unit": "",
            "value": 14,
            "display": "14"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 14
            },
            "display": {
              "damage": "14"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 16
            },
            "display": {
              "damage": "16"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 18
            },
            "display": {
              "damage": "18"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 20
            },
            "display": {
              "damage": "20"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 22
            },
            "display": {
              "damage": "22"
            }
          }
        ],
        "columns": [
          {
            "key": "damage",
            "label": "伤害",
            "unit": ""
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_forge_levelup_uncommon",
      "item_id": "wls2_extention_forge_levelup_uncommon",
      "name": "镜头组",
      "name_en": "Lens Set",
      "name_source": "official_zh",
      "description": "有几率制作出高 1 级的物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "熔炉",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_levelup_uncommon",
      "image_id": "wls2_extention_forge_levelup_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "level_increment_chance",
          "label": "成品等级提升概率",
          "value": 18.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 18.0
            },
            {
              "level": 2,
              "value": 20.0
            },
            {
              "level": 3,
              "value": 22.0
            },
            {
              "level": 4,
              "value": 24.0
            },
            {
              "level": 5,
              "value": 26.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到熔炉后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "熔炉"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_forge_levelup_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_levelup_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_forge_stat_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4d41940c34cf5ae21d8f5df2a9847ec603a5c1ee1fdc261b2fb9b815cc0c6d11",
      "numeric": {
        "summary": [
          {
            "key": "level_increment_chance",
            "label": "成品等级提升概率",
            "unit": "%",
            "value": 18.0,
            "display": "18%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "level_increment_chance": 18.0
            },
            "display": {
              "level_increment_chance": "18%"
            }
          },
          {
            "level": 2,
            "values": {
              "level_increment_chance": 20.0
            },
            "display": {
              "level_increment_chance": "20%"
            }
          },
          {
            "level": 3,
            "values": {
              "level_increment_chance": 22.0
            },
            "display": {
              "level_increment_chance": "22%"
            }
          },
          {
            "level": 4,
            "values": {
              "level_increment_chance": 24.0
            },
            "display": {
              "level_increment_chance": "24%"
            }
          },
          {
            "level": 5,
            "values": {
              "level_increment_chance": 26.0
            },
            "display": {
              "level_increment_chance": "26%"
            }
          }
        ],
        "columns": [
          {
            "key": "level_increment_chance",
            "label": "成品等级提升概率",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_forge_reflect_common",
      "item_id": "wls2_extention_forge_reflect_common",
      "name": "陷阱",
      "name_en": "Trap",
      "name_source": "official_zh",
      "description": "陷阱会对试图破坏工作台的歹徒造成伤害",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "熔炉",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_reflect_common",
      "image_id": "wls2_extention_forge_reflect_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "spikes_damage",
          "label": "尖刺伤害",
          "value": 4,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 4
            },
            {
              "level": 2,
              "value": 5
            },
            {
              "level": 3,
              "value": 6
            },
            {
              "level": 4,
              "value": 7
            },
            {
              "level": 5,
              "value": 8
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到熔炉后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_forge_reflect",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 100
            }
          ],
          "result_id": "wls2_extention_forge_reflect_common",
          "result_name": "陷阱",
          "amount": 1,
          "item_level": 5
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "熔炉"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_forge_reflect_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_reflect_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_forge_reflect_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ad0c5eea1b00caeff979909876ac015287c3144e8c64ddad44fa4d9310f57485",
      "numeric": {
        "summary": [
          {
            "key": "spikes_damage",
            "label": "尖刺伤害",
            "unit": "",
            "value": 4,
            "display": "4"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "spikes_damage": 4
            },
            "display": {
              "spikes_damage": "4"
            }
          },
          {
            "level": 2,
            "values": {
              "spikes_damage": 5
            },
            "display": {
              "spikes_damage": "5"
            }
          },
          {
            "level": 3,
            "values": {
              "spikes_damage": 6
            },
            "display": {
              "spikes_damage": "6"
            }
          },
          {
            "level": 4,
            "values": {
              "spikes_damage": 7
            },
            "display": {
              "spikes_damage": "7"
            }
          },
          {
            "level": 5,
            "values": {
              "spikes_damage": 8
            },
            "display": {
              "spikes_damage": "8"
            }
          }
        ],
        "columns": [
          {
            "key": "spikes_damage",
            "label": "尖刺伤害",
            "unit": ""
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_forge_reflect_uncommon",
      "item_id": "wls2_extention_forge_reflect_uncommon",
      "name": "陷阱",
      "name_en": "Trap",
      "name_source": "official_zh",
      "description": "陷阱会对试图破坏工作台的歹徒造成伤害",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "熔炉",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_reflect_uncommon",
      "image_id": "wls2_extention_forge_reflect_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "spikes_damage",
          "label": "尖刺伤害",
          "value": 10,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 10
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
              "value": 16
            },
            {
              "level": 5,
              "value": 18
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到熔炉后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "熔炉"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_forge_reflect_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_reflect_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_forge_reflect_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ba779517e705eef7d1e8e1ce3f95be213631ff76a6df66411bd237d27ff371eb",
      "numeric": {
        "summary": [
          {
            "key": "spikes_damage",
            "label": "尖刺伤害",
            "unit": "",
            "value": 10,
            "display": "10"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "spikes_damage": 10
            },
            "display": {
              "spikes_damage": "10"
            }
          },
          {
            "level": 2,
            "values": {
              "spikes_damage": 12
            },
            "display": {
              "spikes_damage": "12"
            }
          },
          {
            "level": 3,
            "values": {
              "spikes_damage": 14
            },
            "display": {
              "spikes_damage": "14"
            }
          },
          {
            "level": 4,
            "values": {
              "spikes_damage": 16
            },
            "display": {
              "spikes_damage": "16"
            }
          },
          {
            "level": 5,
            "values": {
              "spikes_damage": 18
            },
            "display": {
              "spikes_damage": "18"
            }
          }
        ],
        "columns": [
          {
            "key": "spikes_damage",
            "label": "尖刺伤害",
            "unit": ""
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_leather_pricetoskip_common",
      "item_id": "wls2_extention_leather_pricetoskip_common",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "皮革烘干器",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_common",
      "image_id": "wls2_extention_leather_pricetoskip_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 6.0
            },
            {
              "level": 3,
              "value": 7.0
            },
            {
              "level": 4,
              "value": 8.0
            },
            {
              "level": 5,
              "value": 9.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到皮革烘干器后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_leather_pricetoskip",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 400
            }
          ],
          "result_id": "wls2_extention_leather_pricetoskip_common",
          "result_name": "主发条",
          "amount": 1,
          "item_level": 5
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "皮革烘干器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_leather_pricetoskip_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_leather_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "93850f0ff7e501c2098e9532cfac2afa11f5a2392ecce6feb69cb14f51f70888",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 5.0,
            "display": "5%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "skip_time_price_reduction": 5.0
            },
            "display": {
              "skip_time_price_reduction": "5%"
            }
          },
          {
            "level": 2,
            "values": {
              "skip_time_price_reduction": 6.0
            },
            "display": {
              "skip_time_price_reduction": "6%"
            }
          },
          {
            "level": 3,
            "values": {
              "skip_time_price_reduction": 7.0
            },
            "display": {
              "skip_time_price_reduction": "7%"
            }
          },
          {
            "level": 4,
            "values": {
              "skip_time_price_reduction": 8.0
            },
            "display": {
              "skip_time_price_reduction": "8%"
            }
          },
          {
            "level": 5,
            "values": {
              "skip_time_price_reduction": 9.0
            },
            "display": {
              "skip_time_price_reduction": "9%"
            }
          }
        ],
        "columns": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_leather_pricetoskip_uncommon",
      "item_id": "wls2_extention_leather_pricetoskip_uncommon",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "皮革烘干器",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_uncommon",
      "image_id": "wls2_extention_leather_pricetoskip_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 17.0
            },
            {
              "level": 3,
              "value": 19.0
            },
            {
              "level": 4,
              "value": 21.0
            },
            {
              "level": 5,
              "value": 23.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到皮革烘干器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "皮革烘干器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_leather_pricetoskip_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_leather_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "48314ab3c71e3800f04d2efe04885f24443d649dfa71294f9bd2a9bb12d7c810",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 15.0,
            "display": "15%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "skip_time_price_reduction": 15.0
            },
            "display": {
              "skip_time_price_reduction": "15%"
            }
          },
          {
            "level": 2,
            "values": {
              "skip_time_price_reduction": 17.0
            },
            "display": {
              "skip_time_price_reduction": "17%"
            }
          },
          {
            "level": 3,
            "values": {
              "skip_time_price_reduction": 19.0
            },
            "display": {
              "skip_time_price_reduction": "19%"
            }
          },
          {
            "level": 4,
            "values": {
              "skip_time_price_reduction": 21.0
            },
            "display": {
              "skip_time_price_reduction": "21%"
            }
          },
          {
            "level": 5,
            "values": {
              "skip_time_price_reduction": 23.0
            },
            "display": {
              "skip_time_price_reduction": "23%"
            }
          }
        ],
        "columns": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_leather_cashback_uncommon",
      "item_id": "wls2_extention_leather_cashback_uncommon",
      "name": "划线规",
      "name_en": "Marking Gauge",
      "name_source": "official_zh",
      "description": "制作时有几率返还 1 个单位的资源",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "皮革烘干器",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_cashback_uncommon",
      "image_id": "wls2_extention_leather_cashback_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "cashback_chance",
          "label": "材料返还概率",
          "value": 12.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 12.0
            },
            {
              "level": 2,
              "value": 13.0
            },
            {
              "level": 3,
              "value": 14.0
            },
            {
              "level": 4,
              "value": 15.0
            },
            {
              "level": 5,
              "value": 16.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到皮革烘干器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "皮革烘干器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_leather_cashback_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_cashback_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_leather_cashback_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "092aa433907ff34158b7ace2b0a8cb7446c50f8f931a8a9b7b98dedbb4edfe74",
      "numeric": {
        "summary": [
          {
            "key": "cashback_chance",
            "label": "材料返还概率",
            "unit": "%",
            "value": 12.0,
            "display": "12%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "cashback_chance": 12.0
            },
            "display": {
              "cashback_chance": "12%"
            }
          },
          {
            "level": 2,
            "values": {
              "cashback_chance": 13.0
            },
            "display": {
              "cashback_chance": "13%"
            }
          },
          {
            "level": 3,
            "values": {
              "cashback_chance": 14.0
            },
            "display": {
              "cashback_chance": "14%"
            }
          },
          {
            "level": 4,
            "values": {
              "cashback_chance": 15.0
            },
            "display": {
              "cashback_chance": "15%"
            }
          },
          {
            "level": 5,
            "values": {
              "cashback_chance": 16.0
            },
            "display": {
              "cashback_chance": "16%"
            }
          }
        ],
        "columns": [
          {
            "key": "cashback_chance",
            "label": "材料返还概率",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_leather_timetofix_common",
      "item_id": "wls2_extention_leather_timetofix_common",
      "name": "备件盒",
      "name_en": "Spares Box",
      "name_source": "official_zh",
      "description": "如果有歹徒破坏了工作台，可以加快工作台的修理时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "皮革烘干器",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetofix_common",
      "image_id": "wls2_extention_leather_timetofix_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "repair_time_reduction",
          "label": "修理时间缩短",
          "value": 20.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 20.0
            },
            {
              "level": 2,
              "value": 22.0
            },
            {
              "level": 3,
              "value": 24.0
            },
            {
              "level": 4,
              "value": 26.0
            },
            {
              "level": 5,
              "value": 28.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到皮革烘干器后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_leather_timetofix",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 100
            }
          ],
          "result_id": "wls2_extention_leather_timetofix_common",
          "result_name": "备件盒",
          "amount": 1,
          "item_level": 5
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "皮革烘干器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_leather_timetofix_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetofix_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_leather_timetofix_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1231f77e8a5e0ecc765e060eb02acfe4103aa044ef2380e33c15d79fd3f67642",
      "numeric": {
        "summary": [
          {
            "key": "repair_time_reduction",
            "label": "修理时间缩短",
            "unit": "%",
            "value": 20.0,
            "display": "20%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "repair_time_reduction": 20.0
            },
            "display": {
              "repair_time_reduction": "20%"
            }
          },
          {
            "level": 2,
            "values": {
              "repair_time_reduction": 22.0
            },
            "display": {
              "repair_time_reduction": "22%"
            }
          },
          {
            "level": 3,
            "values": {
              "repair_time_reduction": 24.0
            },
            "display": {
              "repair_time_reduction": "24%"
            }
          },
          {
            "level": 4,
            "values": {
              "repair_time_reduction": 26.0
            },
            "display": {
              "repair_time_reduction": "26%"
            }
          },
          {
            "level": 5,
            "values": {
              "repair_time_reduction": 28.0
            },
            "display": {
              "repair_time_reduction": "28%"
            }
          }
        ],
        "columns": [
          {
            "key": "repair_time_reduction",
            "label": "修理时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_leather_timetofix_uncommon",
      "item_id": "wls2_extention_leather_timetofix_uncommon",
      "name": "备件盒",
      "name_en": "Spares Box",
      "name_source": "official_zh",
      "description": "如果有歹徒破坏了工作台，可以加快工作台的修理时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "皮革烘干器",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetofix_uncommon",
      "image_id": "wls2_extention_leather_timetofix_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "repair_time_reduction",
          "label": "修理时间缩短",
          "value": 34.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 34.0
            },
            {
              "level": 2,
              "value": 38.0
            },
            {
              "level": 3,
              "value": 42.0
            },
            {
              "level": 4,
              "value": 46.0
            },
            {
              "level": 5,
              "value": 50.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到皮革烘干器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "皮革烘干器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_leather_timetofix_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetofix_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_leather_timetofix_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "55e12ba3f19d631e18781bacb68ed2e18325e99535c72b63f9d26be58b440d1d",
      "numeric": {
        "summary": [
          {
            "key": "repair_time_reduction",
            "label": "修理时间缩短",
            "unit": "%",
            "value": 34.0,
            "display": "34%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "repair_time_reduction": 34.0
            },
            "display": {
              "repair_time_reduction": "34%"
            }
          },
          {
            "level": 2,
            "values": {
              "repair_time_reduction": 38.0
            },
            "display": {
              "repair_time_reduction": "38%"
            }
          },
          {
            "level": 3,
            "values": {
              "repair_time_reduction": 42.0
            },
            "display": {
              "repair_time_reduction": "42%"
            }
          },
          {
            "level": 4,
            "values": {
              "repair_time_reduction": 46.0
            },
            "display": {
              "repair_time_reduction": "46%"
            }
          },
          {
            "level": 5,
            "values": {
              "repair_time_reduction": 50.0
            },
            "display": {
              "repair_time_reduction": "50%"
            }
          }
        ],
        "columns": [
          {
            "key": "repair_time_reduction",
            "label": "修理时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_leather_timetobuild_uncommon",
      "item_id": "wls2_extention_leather_timetobuild_uncommon",
      "name": "建造加速插件",
      "name_en": "",
      "name_source": "descriptive_fallback",
      "description": "加快工作台升级时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "皮革烘干器",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls_bone_knife",
      "image_id": "wls2_extention_leather_timetobuild_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "construction_time_reduction",
          "label": "建造时间缩短",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 17.0
            },
            {
              "level": 3,
              "value": 19.0
            },
            {
              "level": 4,
              "value": 21.0
            },
            {
              "level": 5,
              "value": 23.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到皮革烘干器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "皮革烘干器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_leather_timetobuild_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetobuild_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_leather_timetobuild_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a01ec765769152690101d8c94b56686750e2a6b7e78019cb50e1df5e9ed6b6a2",
      "numeric": {
        "summary": [
          {
            "key": "construction_time_reduction",
            "label": "建造时间缩短",
            "unit": "%",
            "value": 15.0,
            "display": "15%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "construction_time_reduction": 15.0
            },
            "display": {
              "construction_time_reduction": "15%"
            }
          },
          {
            "level": 2,
            "values": {
              "construction_time_reduction": 17.0
            },
            "display": {
              "construction_time_reduction": "17%"
            }
          },
          {
            "level": 3,
            "values": {
              "construction_time_reduction": 19.0
            },
            "display": {
              "construction_time_reduction": "19%"
            }
          },
          {
            "level": 4,
            "values": {
              "construction_time_reduction": 21.0
            },
            "display": {
              "construction_time_reduction": "21%"
            }
          },
          {
            "level": 5,
            "values": {
              "construction_time_reduction": 23.0
            },
            "display": {
              "construction_time_reduction": "23%"
            }
          }
        ],
        "columns": [
          {
            "key": "construction_time_reduction",
            "label": "建造时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_leather_health_uncommon",
      "item_id": "wls2_extention_leather_health_uncommon",
      "name": "牢固框架",
      "name_en": "Strong frame",
      "name_source": "official_zh",
      "description": "增加工作台耐久度。歹徒需要花费更大工夫才能破坏工作台",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "皮革烘干器",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_health_uncommon",
      "image_id": "wls2_extention_leather_health_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "building_health",
          "label": "建筑生命",
          "value": 60,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 60
            },
            {
              "level": 2,
              "value": 70
            },
            {
              "level": 3,
              "value": 80
            },
            {
              "level": 4,
              "value": 90
            },
            {
              "level": 5,
              "value": 100
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到皮革烘干器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "皮革烘干器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_leather_health_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_health_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_leather_health_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "39ace5cf1d588557e139cff21063410c71a4488ad94fc49c2694c3360ef26e0a",
      "numeric": {
        "summary": [
          {
            "key": "building_health",
            "label": "建筑生命",
            "unit": "",
            "value": 60,
            "display": "60"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "building_health": 60
            },
            "display": {
              "building_health": "60"
            }
          },
          {
            "level": 2,
            "values": {
              "building_health": 70
            },
            "display": {
              "building_health": "70"
            }
          },
          {
            "level": 3,
            "values": {
              "building_health": 80
            },
            "display": {
              "building_health": "80"
            }
          },
          {
            "level": 4,
            "values": {
              "building_health": 90
            },
            "display": {
              "building_health": "90"
            }
          },
          {
            "level": 5,
            "values": {
              "building_health": 100
            },
            "display": {
              "building_health": "100"
            }
          }
        ],
        "columns": [
          {
            "key": "building_health",
            "label": "建筑生命",
            "unit": ""
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_leather_timetocraft_common",
      "item_id": "wls2_extention_leather_timetocraft_common",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "皮革烘干器",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_common",
      "image_id": "wls2_extention_leather_timetocraft_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 6.0
            },
            {
              "level": 3,
              "value": 7.0
            },
            {
              "level": 4,
              "value": 8.0
            },
            {
              "level": 5,
              "value": 9.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到皮革烘干器后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_leather_timetocraft",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 400
            }
          ],
          "result_id": "wls2_extention_leather_timetocraft_common",
          "result_name": "转动装置",
          "amount": 1,
          "item_level": 5
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "皮革烘干器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_leather_timetocraft_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_leather_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "194a79e35d64168bf0f3f6d185bbd72aa1c8fc13d25f1c3483f316736b980fa7",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 5.0,
            "display": "5%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "craft_time_reduction": 5.0
            },
            "display": {
              "craft_time_reduction": "5%"
            }
          },
          {
            "level": 2,
            "values": {
              "craft_time_reduction": 6.0
            },
            "display": {
              "craft_time_reduction": "6%"
            }
          },
          {
            "level": 3,
            "values": {
              "craft_time_reduction": 7.0
            },
            "display": {
              "craft_time_reduction": "7%"
            }
          },
          {
            "level": 4,
            "values": {
              "craft_time_reduction": 8.0
            },
            "display": {
              "craft_time_reduction": "8%"
            }
          },
          {
            "level": 5,
            "values": {
              "craft_time_reduction": 9.0
            },
            "display": {
              "craft_time_reduction": "9%"
            }
          }
        ],
        "columns": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_leather_timetocraft_uncommon",
      "item_id": "wls2_extention_leather_timetocraft_uncommon",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "皮革烘干器",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_uncommon",
      "image_id": "wls2_extention_leather_timetocraft_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 17.0
            },
            {
              "level": 3,
              "value": 19.0
            },
            {
              "level": 4,
              "value": 21.0
            },
            {
              "level": 5,
              "value": 23.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到皮革烘干器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "皮革烘干器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_leather_timetocraft_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_leather_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "0c89940736d311752d87ab6d2d8de11e0704f6f8e61fa2ec9c494d90684fe39c",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 15.0,
            "display": "15%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "craft_time_reduction": 15.0
            },
            "display": {
              "craft_time_reduction": "15%"
            }
          },
          {
            "level": 2,
            "values": {
              "craft_time_reduction": 17.0
            },
            "display": {
              "craft_time_reduction": "17%"
            }
          },
          {
            "level": 3,
            "values": {
              "craft_time_reduction": 19.0
            },
            "display": {
              "craft_time_reduction": "19%"
            }
          },
          {
            "level": 4,
            "values": {
              "craft_time_reduction": 21.0
            },
            "display": {
              "craft_time_reduction": "21%"
            }
          },
          {
            "level": 5,
            "values": {
              "craft_time_reduction": 23.0
            },
            "display": {
              "craft_time_reduction": "23%"
            }
          }
        ],
        "columns": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_leather_queue_common",
      "item_id": "wls2_extention_leather_queue_common",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "皮革烘干器",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_cashback_common",
      "image_id": "wls2_extention_leather_queue_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "additional_prodiuction_slot",
          "label": "额外生产队列",
          "value": 1,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [
        "安装到皮革烘干器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "皮革烘干器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_leather_queue_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_queue_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_leather_queue_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5f41b0668f8d0d33fa8af005b6377cd0f1150e22e634229b3b5861e6faa9a50e",
      "numeric": {
        "summary": [
          {
            "key": "additional_prodiuction_slot",
            "label": "额外生产队列",
            "unit": "",
            "value": 1,
            "display": "1"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "插件等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_extention_leather_queue_uncommon",
      "item_id": "wls2_extention_leather_queue_uncommon",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "皮革烘干器",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_cashback_common",
      "image_id": "wls2_extention_leather_queue_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "additional_prodiuction_slot",
          "label": "额外生产队列",
          "value": 2,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [
        "安装到皮革烘干器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "皮革烘干器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_leather_queue_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_queue_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_leather_queue_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5f41b0668f8d0d33fa8af005b6377cd0f1150e22e634229b3b5861e6faa9a50e",
      "numeric": {
        "summary": [
          {
            "key": "additional_prodiuction_slot",
            "label": "额外生产队列",
            "unit": "",
            "value": 2,
            "display": "2"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "插件等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_extention_leather_extraresource_uncommon",
      "item_id": "wls2_extention_leather_extraresource_uncommon",
      "name": "锋利刀片",
      "name_en": "Sharp Cutter",
      "name_source": "official_zh",
      "description": "在制作过程中有几率获得额外资源。对武器和护甲不起作用",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "皮革烘干器",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_extraresource_uncommon",
      "image_id": "wls2_extention_leather_extraresource_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "amount_increment_chance",
          "label": "额外产出概率",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 17.0
            },
            {
              "level": 3,
              "value": 19.0
            },
            {
              "level": 4,
              "value": 21.0
            },
            {
              "level": 5,
              "value": 23.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到皮革烘干器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "皮革烘干器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_leather_extraresource_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_extraresource_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_leather_extraresource_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a7d147b631be2e7f74d771282ee1539be9aa2d166452e3c3a3807d93ce176fc8",
      "numeric": {
        "summary": [
          {
            "key": "amount_increment_chance",
            "label": "额外产出概率",
            "unit": "%",
            "value": 15.0,
            "display": "15%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "amount_increment_chance": 15.0
            },
            "display": {
              "amount_increment_chance": "15%"
            }
          },
          {
            "level": 2,
            "values": {
              "amount_increment_chance": 17.0
            },
            "display": {
              "amount_increment_chance": "17%"
            }
          },
          {
            "level": 3,
            "values": {
              "amount_increment_chance": 19.0
            },
            "display": {
              "amount_increment_chance": "19%"
            }
          },
          {
            "level": 4,
            "values": {
              "amount_increment_chance": 21.0
            },
            "display": {
              "amount_increment_chance": "21%"
            }
          },
          {
            "level": 5,
            "values": {
              "amount_increment_chance": 23.0
            },
            "display": {
              "amount_increment_chance": "23%"
            }
          }
        ],
        "columns": [
          {
            "key": "amount_increment_chance",
            "label": "额外产出概率",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_leather_reflect_common",
      "item_id": "wls2_extention_leather_reflect_common",
      "name": "陷阱",
      "name_en": "Trap",
      "name_source": "official_zh",
      "description": "陷阱会对试图破坏工作台的歹徒造成伤害",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "皮革烘干器",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_reflect_common",
      "image_id": "wls2_extention_leather_reflect_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "spikes_damage",
          "label": "尖刺伤害",
          "value": 4,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 4
            },
            {
              "level": 2,
              "value": 5
            },
            {
              "level": 3,
              "value": 6
            },
            {
              "level": 4,
              "value": 7
            },
            {
              "level": 5,
              "value": 8
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到皮革烘干器后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_leather_reflect",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 100
            }
          ],
          "result_id": "wls2_extention_leather_reflect_common",
          "result_name": "陷阱",
          "amount": 1,
          "item_level": 5
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "皮革烘干器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_leather_reflect_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_reflect_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_leather_reflect_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ad0c5eea1b00caeff979909876ac015287c3144e8c64ddad44fa4d9310f57485",
      "numeric": {
        "summary": [
          {
            "key": "spikes_damage",
            "label": "尖刺伤害",
            "unit": "",
            "value": 4,
            "display": "4"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "spikes_damage": 4
            },
            "display": {
              "spikes_damage": "4"
            }
          },
          {
            "level": 2,
            "values": {
              "spikes_damage": 5
            },
            "display": {
              "spikes_damage": "5"
            }
          },
          {
            "level": 3,
            "values": {
              "spikes_damage": 6
            },
            "display": {
              "spikes_damage": "6"
            }
          },
          {
            "level": 4,
            "values": {
              "spikes_damage": 7
            },
            "display": {
              "spikes_damage": "7"
            }
          },
          {
            "level": 5,
            "values": {
              "spikes_damage": 8
            },
            "display": {
              "spikes_damage": "8"
            }
          }
        ],
        "columns": [
          {
            "key": "spikes_damage",
            "label": "尖刺伤害",
            "unit": ""
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_leather_reflect_uncommon",
      "item_id": "wls2_extention_leather_reflect_uncommon",
      "name": "陷阱",
      "name_en": "Trap",
      "name_source": "official_zh",
      "description": "陷阱会对试图破坏工作台的歹徒造成伤害",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "皮革烘干器",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_reflect_uncommon",
      "image_id": "wls2_extention_leather_reflect_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "spikes_damage",
          "label": "尖刺伤害",
          "value": 10,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 10
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
              "value": 16
            },
            {
              "level": 5,
              "value": 18
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到皮革烘干器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "皮革烘干器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_leather_reflect_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_reflect_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_leather_reflect_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ba779517e705eef7d1e8e1ce3f95be213631ff76a6df66411bd237d27ff371eb",
      "numeric": {
        "summary": [
          {
            "key": "spikes_damage",
            "label": "尖刺伤害",
            "unit": "",
            "value": 10,
            "display": "10"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "spikes_damage": 10
            },
            "display": {
              "spikes_damage": "10"
            }
          },
          {
            "level": 2,
            "values": {
              "spikes_damage": 12
            },
            "display": {
              "spikes_damage": "12"
            }
          },
          {
            "level": 3,
            "values": {
              "spikes_damage": 14
            },
            "display": {
              "spikes_damage": "14"
            }
          },
          {
            "level": 4,
            "values": {
              "spikes_damage": 16
            },
            "display": {
              "spikes_damage": "16"
            }
          },
          {
            "level": 5,
            "values": {
              "spikes_damage": 18
            },
            "display": {
              "spikes_damage": "18"
            }
          }
        ],
        "columns": [
          {
            "key": "spikes_damage",
            "label": "尖刺伤害",
            "unit": ""
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_bonfire_pricetoskip_common",
      "item_id": "wls2_extention_bonfire_pricetoskip_common",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "篝火",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_common",
      "image_id": "wls2_extention_bonfire_pricetoskip_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 6.0
            },
            {
              "level": 3,
              "value": 7.0
            },
            {
              "level": 4,
              "value": 8.0
            },
            {
              "level": 5,
              "value": 9.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到篝火后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_bonfire_pricetoskip",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 400
            }
          ],
          "result_id": "wls2_extention_bonfire_pricetoskip_common",
          "result_name": "主发条",
          "amount": 1,
          "item_level": 5
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "篝火"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_bonfire_pricetoskip_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_bonfire_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "93850f0ff7e501c2098e9532cfac2afa11f5a2392ecce6feb69cb14f51f70888",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 5.0,
            "display": "5%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "skip_time_price_reduction": 5.0
            },
            "display": {
              "skip_time_price_reduction": "5%"
            }
          },
          {
            "level": 2,
            "values": {
              "skip_time_price_reduction": 6.0
            },
            "display": {
              "skip_time_price_reduction": "6%"
            }
          },
          {
            "level": 3,
            "values": {
              "skip_time_price_reduction": 7.0
            },
            "display": {
              "skip_time_price_reduction": "7%"
            }
          },
          {
            "level": 4,
            "values": {
              "skip_time_price_reduction": 8.0
            },
            "display": {
              "skip_time_price_reduction": "8%"
            }
          },
          {
            "level": 5,
            "values": {
              "skip_time_price_reduction": 9.0
            },
            "display": {
              "skip_time_price_reduction": "9%"
            }
          }
        ],
        "columns": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_bonfire_pricetoskip_uncommon",
      "item_id": "wls2_extention_bonfire_pricetoskip_uncommon",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "篝火",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_uncommon",
      "image_id": "wls2_extention_bonfire_pricetoskip_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 17.0
            },
            {
              "level": 3,
              "value": 19.0
            },
            {
              "level": 4,
              "value": 21.0
            },
            {
              "level": 5,
              "value": 23.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到篝火后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "篝火"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_bonfire_pricetoskip_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_bonfire_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "48314ab3c71e3800f04d2efe04885f24443d649dfa71294f9bd2a9bb12d7c810",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 15.0,
            "display": "15%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "skip_time_price_reduction": 15.0
            },
            "display": {
              "skip_time_price_reduction": "15%"
            }
          },
          {
            "level": 2,
            "values": {
              "skip_time_price_reduction": 17.0
            },
            "display": {
              "skip_time_price_reduction": "17%"
            }
          },
          {
            "level": 3,
            "values": {
              "skip_time_price_reduction": 19.0
            },
            "display": {
              "skip_time_price_reduction": "19%"
            }
          },
          {
            "level": 4,
            "values": {
              "skip_time_price_reduction": 21.0
            },
            "display": {
              "skip_time_price_reduction": "21%"
            }
          },
          {
            "level": 5,
            "values": {
              "skip_time_price_reduction": 23.0
            },
            "display": {
              "skip_time_price_reduction": "23%"
            }
          }
        ],
        "columns": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_bonfire_cashback_uncommon",
      "item_id": "wls2_extention_bonfire_cashback_uncommon",
      "name": "划线规",
      "name_en": "Marking Gauge",
      "name_source": "official_zh",
      "description": "制作时有几率返还 1 个单位的资源",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "篝火",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_cashback_uncommon",
      "image_id": "wls2_extention_bonfire_cashback_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "cashback_chance",
          "label": "材料返还概率",
          "value": 12.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 12.0
            },
            {
              "level": 2,
              "value": 13.0
            },
            {
              "level": 3,
              "value": 14.0
            },
            {
              "level": 4,
              "value": 15.0
            },
            {
              "level": 5,
              "value": 16.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到篝火后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "篝火"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_bonfire_cashback_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_cashback_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_bonfire_cashback_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "092aa433907ff34158b7ace2b0a8cb7446c50f8f931a8a9b7b98dedbb4edfe74",
      "numeric": {
        "summary": [
          {
            "key": "cashback_chance",
            "label": "材料返还概率",
            "unit": "%",
            "value": 12.0,
            "display": "12%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "cashback_chance": 12.0
            },
            "display": {
              "cashback_chance": "12%"
            }
          },
          {
            "level": 2,
            "values": {
              "cashback_chance": 13.0
            },
            "display": {
              "cashback_chance": "13%"
            }
          },
          {
            "level": 3,
            "values": {
              "cashback_chance": 14.0
            },
            "display": {
              "cashback_chance": "14%"
            }
          },
          {
            "level": 4,
            "values": {
              "cashback_chance": 15.0
            },
            "display": {
              "cashback_chance": "15%"
            }
          },
          {
            "level": 5,
            "values": {
              "cashback_chance": 16.0
            },
            "display": {
              "cashback_chance": "16%"
            }
          }
        ],
        "columns": [
          {
            "key": "cashback_chance",
            "label": "材料返还概率",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_bonfire_timetofix_common",
      "item_id": "wls2_extention_bonfire_timetofix_common",
      "name": "备件盒",
      "name_en": "Spares Box",
      "name_source": "official_zh",
      "description": "如果有歹徒破坏了工作台，可以加快工作台的修理时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "篝火",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetofix_common",
      "image_id": "wls2_extention_bonfire_timetofix_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "repair_time_reduction",
          "label": "修理时间缩短",
          "value": 20.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 20.0
            },
            {
              "level": 2,
              "value": 22.0
            },
            {
              "level": 3,
              "value": 24.0
            },
            {
              "level": 4,
              "value": 26.0
            },
            {
              "level": 5,
              "value": 28.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到篝火后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_bonfire_timetofix",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 100
            }
          ],
          "result_id": "wls2_extention_bonfire_timetofix_common",
          "result_name": "备件盒",
          "amount": 1,
          "item_level": 5
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "篝火"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_bonfire_timetofix_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetofix_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_bonfire_timetofix_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1231f77e8a5e0ecc765e060eb02acfe4103aa044ef2380e33c15d79fd3f67642",
      "numeric": {
        "summary": [
          {
            "key": "repair_time_reduction",
            "label": "修理时间缩短",
            "unit": "%",
            "value": 20.0,
            "display": "20%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "repair_time_reduction": 20.0
            },
            "display": {
              "repair_time_reduction": "20%"
            }
          },
          {
            "level": 2,
            "values": {
              "repair_time_reduction": 22.0
            },
            "display": {
              "repair_time_reduction": "22%"
            }
          },
          {
            "level": 3,
            "values": {
              "repair_time_reduction": 24.0
            },
            "display": {
              "repair_time_reduction": "24%"
            }
          },
          {
            "level": 4,
            "values": {
              "repair_time_reduction": 26.0
            },
            "display": {
              "repair_time_reduction": "26%"
            }
          },
          {
            "level": 5,
            "values": {
              "repair_time_reduction": 28.0
            },
            "display": {
              "repair_time_reduction": "28%"
            }
          }
        ],
        "columns": [
          {
            "key": "repair_time_reduction",
            "label": "修理时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_bonfire_timetofix_uncommon",
      "item_id": "wls2_extention_bonfire_timetofix_uncommon",
      "name": "备件盒",
      "name_en": "Spares Box",
      "name_source": "official_zh",
      "description": "如果有歹徒破坏了工作台，可以加快工作台的修理时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "篝火",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetofix_uncommon",
      "image_id": "wls2_extention_bonfire_timetofix_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "repair_time_reduction",
          "label": "修理时间缩短",
          "value": 34.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 34.0
            },
            {
              "level": 2,
              "value": 38.0
            },
            {
              "level": 3,
              "value": 42.0
            },
            {
              "level": 4,
              "value": 46.0
            },
            {
              "level": 5,
              "value": 50.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到篝火后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "篝火"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_bonfire_timetofix_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetofix_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_bonfire_timetofix_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "55e12ba3f19d631e18781bacb68ed2e18325e99535c72b63f9d26be58b440d1d",
      "numeric": {
        "summary": [
          {
            "key": "repair_time_reduction",
            "label": "修理时间缩短",
            "unit": "%",
            "value": 34.0,
            "display": "34%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "repair_time_reduction": 34.0
            },
            "display": {
              "repair_time_reduction": "34%"
            }
          },
          {
            "level": 2,
            "values": {
              "repair_time_reduction": 38.0
            },
            "display": {
              "repair_time_reduction": "38%"
            }
          },
          {
            "level": 3,
            "values": {
              "repair_time_reduction": 42.0
            },
            "display": {
              "repair_time_reduction": "42%"
            }
          },
          {
            "level": 4,
            "values": {
              "repair_time_reduction": 46.0
            },
            "display": {
              "repair_time_reduction": "46%"
            }
          },
          {
            "level": 5,
            "values": {
              "repair_time_reduction": 50.0
            },
            "display": {
              "repair_time_reduction": "50%"
            }
          }
        ],
        "columns": [
          {
            "key": "repair_time_reduction",
            "label": "修理时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_bonfire_timetobuild_uncommon",
      "item_id": "wls2_extention_bonfire_timetobuild_uncommon",
      "name": "建造加速插件",
      "name_en": "",
      "name_source": "descriptive_fallback",
      "description": "加快工作台升级时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "篝火",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls_bone_knife",
      "image_id": "wls2_extention_bonfire_timetobuild_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "construction_time_reduction",
          "label": "建造时间缩短",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 17.0
            },
            {
              "level": 3,
              "value": 19.0
            },
            {
              "level": 4,
              "value": 21.0
            },
            {
              "level": 5,
              "value": 23.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到篝火后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "篝火"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_bonfire_timetobuild_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetobuild_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_bonfire_timetobuild_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a01ec765769152690101d8c94b56686750e2a6b7e78019cb50e1df5e9ed6b6a2",
      "numeric": {
        "summary": [
          {
            "key": "construction_time_reduction",
            "label": "建造时间缩短",
            "unit": "%",
            "value": 15.0,
            "display": "15%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "construction_time_reduction": 15.0
            },
            "display": {
              "construction_time_reduction": "15%"
            }
          },
          {
            "level": 2,
            "values": {
              "construction_time_reduction": 17.0
            },
            "display": {
              "construction_time_reduction": "17%"
            }
          },
          {
            "level": 3,
            "values": {
              "construction_time_reduction": 19.0
            },
            "display": {
              "construction_time_reduction": "19%"
            }
          },
          {
            "level": 4,
            "values": {
              "construction_time_reduction": 21.0
            },
            "display": {
              "construction_time_reduction": "21%"
            }
          },
          {
            "level": 5,
            "values": {
              "construction_time_reduction": 23.0
            },
            "display": {
              "construction_time_reduction": "23%"
            }
          }
        ],
        "columns": [
          {
            "key": "construction_time_reduction",
            "label": "建造时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_bonfire_health_uncommon",
      "item_id": "wls2_extention_bonfire_health_uncommon",
      "name": "牢固框架",
      "name_en": "Strong frame",
      "name_source": "official_zh",
      "description": "增加工作台耐久度。歹徒需要花费更大工夫才能破坏工作台",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "篝火",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_health_uncommon",
      "image_id": "wls2_extention_bonfire_health_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "building_health",
          "label": "建筑生命",
          "value": 60,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 60
            },
            {
              "level": 2,
              "value": 70
            },
            {
              "level": 3,
              "value": 80
            },
            {
              "level": 4,
              "value": 90
            },
            {
              "level": 5,
              "value": 100
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到篝火后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "篝火"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_bonfire_health_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_health_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_bonfire_health_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "39ace5cf1d588557e139cff21063410c71a4488ad94fc49c2694c3360ef26e0a",
      "numeric": {
        "summary": [
          {
            "key": "building_health",
            "label": "建筑生命",
            "unit": "",
            "value": 60,
            "display": "60"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "building_health": 60
            },
            "display": {
              "building_health": "60"
            }
          },
          {
            "level": 2,
            "values": {
              "building_health": 70
            },
            "display": {
              "building_health": "70"
            }
          },
          {
            "level": 3,
            "values": {
              "building_health": 80
            },
            "display": {
              "building_health": "80"
            }
          },
          {
            "level": 4,
            "values": {
              "building_health": 90
            },
            "display": {
              "building_health": "90"
            }
          },
          {
            "level": 5,
            "values": {
              "building_health": 100
            },
            "display": {
              "building_health": "100"
            }
          }
        ],
        "columns": [
          {
            "key": "building_health",
            "label": "建筑生命",
            "unit": ""
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_bonfire_timetocraft_common",
      "item_id": "wls2_extention_bonfire_timetocraft_common",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "篝火",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_common",
      "image_id": "wls2_extention_bonfire_timetocraft_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 6.0
            },
            {
              "level": 3,
              "value": 7.0
            },
            {
              "level": 4,
              "value": 8.0
            },
            {
              "level": 5,
              "value": 9.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到篝火后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_bonfire_timetocraft",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 400
            }
          ],
          "result_id": "wls2_extention_bonfire_timetocraft_common",
          "result_name": "转动装置",
          "amount": 1,
          "item_level": 5
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "篝火"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_bonfire_timetocraft_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_bonfire_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "194a79e35d64168bf0f3f6d185bbd72aa1c8fc13d25f1c3483f316736b980fa7",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 5.0,
            "display": "5%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "craft_time_reduction": 5.0
            },
            "display": {
              "craft_time_reduction": "5%"
            }
          },
          {
            "level": 2,
            "values": {
              "craft_time_reduction": 6.0
            },
            "display": {
              "craft_time_reduction": "6%"
            }
          },
          {
            "level": 3,
            "values": {
              "craft_time_reduction": 7.0
            },
            "display": {
              "craft_time_reduction": "7%"
            }
          },
          {
            "level": 4,
            "values": {
              "craft_time_reduction": 8.0
            },
            "display": {
              "craft_time_reduction": "8%"
            }
          },
          {
            "level": 5,
            "values": {
              "craft_time_reduction": 9.0
            },
            "display": {
              "craft_time_reduction": "9%"
            }
          }
        ],
        "columns": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_bonfire_timetocraft_uncommon",
      "item_id": "wls2_extention_bonfire_timetocraft_uncommon",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "篝火",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_uncommon",
      "image_id": "wls2_extention_bonfire_timetocraft_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 17.0
            },
            {
              "level": 3,
              "value": 19.0
            },
            {
              "level": 4,
              "value": 21.0
            },
            {
              "level": 5,
              "value": 23.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到篝火后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "篝火"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_bonfire_timetocraft_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_bonfire_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "0c89940736d311752d87ab6d2d8de11e0704f6f8e61fa2ec9c494d90684fe39c",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 15.0,
            "display": "15%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "craft_time_reduction": 15.0
            },
            "display": {
              "craft_time_reduction": "15%"
            }
          },
          {
            "level": 2,
            "values": {
              "craft_time_reduction": 17.0
            },
            "display": {
              "craft_time_reduction": "17%"
            }
          },
          {
            "level": 3,
            "values": {
              "craft_time_reduction": 19.0
            },
            "display": {
              "craft_time_reduction": "19%"
            }
          },
          {
            "level": 4,
            "values": {
              "craft_time_reduction": 21.0
            },
            "display": {
              "craft_time_reduction": "21%"
            }
          },
          {
            "level": 5,
            "values": {
              "craft_time_reduction": 23.0
            },
            "display": {
              "craft_time_reduction": "23%"
            }
          }
        ],
        "columns": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_bonfire_queue_common",
      "item_id": "wls2_extention_bonfire_queue_common",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "篝火",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_cashback_common",
      "image_id": "wls2_extention_bonfire_queue_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "additional_prodiuction_slot",
          "label": "额外生产队列",
          "value": 1,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [
        "安装到篝火后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "篝火"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_bonfire_queue_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_queue_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_bonfire_queue_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5f41b0668f8d0d33fa8af005b6377cd0f1150e22e634229b3b5861e6faa9a50e",
      "numeric": {
        "summary": [
          {
            "key": "additional_prodiuction_slot",
            "label": "额外生产队列",
            "unit": "",
            "value": 1,
            "display": "1"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "插件等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_extention_bonfire_queue_uncommon",
      "item_id": "wls2_extention_bonfire_queue_uncommon",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "篝火",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_cashback_common",
      "image_id": "wls2_extention_bonfire_queue_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "additional_prodiuction_slot",
          "label": "额外生产队列",
          "value": 2,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [
        "安装到篝火后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "篝火"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_bonfire_queue_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_queue_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_bonfire_queue_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5f41b0668f8d0d33fa8af005b6377cd0f1150e22e634229b3b5861e6faa9a50e",
      "numeric": {
        "summary": [
          {
            "key": "additional_prodiuction_slot",
            "label": "额外生产队列",
            "unit": "",
            "value": 2,
            "display": "2"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "插件等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_extention_bonfire_extraresource_uncommon",
      "item_id": "wls2_extention_bonfire_extraresource_uncommon",
      "name": "锋利刀片",
      "name_en": "Sharp Cutter",
      "name_source": "official_zh",
      "description": "在制作过程中有几率获得额外资源。对武器和护甲不起作用",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "篝火",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_extraresource_uncommon",
      "image_id": "wls2_extention_bonfire_extraresource_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "amount_increment_chance",
          "label": "额外产出概率",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 17.0
            },
            {
              "level": 3,
              "value": 19.0
            },
            {
              "level": 4,
              "value": 21.0
            },
            {
              "level": 5,
              "value": 23.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到篝火后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "篝火"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_bonfire_extraresource_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_extraresource_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_bonfire_extraresource_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a7d147b631be2e7f74d771282ee1539be9aa2d166452e3c3a3807d93ce176fc8",
      "numeric": {
        "summary": [
          {
            "key": "amount_increment_chance",
            "label": "额外产出概率",
            "unit": "%",
            "value": 15.0,
            "display": "15%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "amount_increment_chance": 15.0
            },
            "display": {
              "amount_increment_chance": "15%"
            }
          },
          {
            "level": 2,
            "values": {
              "amount_increment_chance": 17.0
            },
            "display": {
              "amount_increment_chance": "17%"
            }
          },
          {
            "level": 3,
            "values": {
              "amount_increment_chance": 19.0
            },
            "display": {
              "amount_increment_chance": "19%"
            }
          },
          {
            "level": 4,
            "values": {
              "amount_increment_chance": 21.0
            },
            "display": {
              "amount_increment_chance": "21%"
            }
          },
          {
            "level": 5,
            "values": {
              "amount_increment_chance": 23.0
            },
            "display": {
              "amount_increment_chance": "23%"
            }
          }
        ],
        "columns": [
          {
            "key": "amount_increment_chance",
            "label": "额外产出概率",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_bonfire_reflect_common",
      "item_id": "wls2_extention_bonfire_reflect_common",
      "name": "陷阱",
      "name_en": "Trap",
      "name_source": "official_zh",
      "description": "陷阱会对试图破坏工作台的歹徒造成伤害",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "篝火",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_reflect_common",
      "image_id": "wls2_extention_bonfire_reflect_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "spikes_damage",
          "label": "尖刺伤害",
          "value": 4,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 4
            },
            {
              "level": 2,
              "value": 5
            },
            {
              "level": 3,
              "value": 6
            },
            {
              "level": 4,
              "value": 7
            },
            {
              "level": 5,
              "value": 8
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到篝火后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_bonfire_reflect",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 100
            }
          ],
          "result_id": "wls2_extention_bonfire_reflect_common",
          "result_name": "陷阱",
          "amount": 1,
          "item_level": 5
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "篝火"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_bonfire_reflect_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_reflect_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_bonfire_reflect_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ad0c5eea1b00caeff979909876ac015287c3144e8c64ddad44fa4d9310f57485",
      "numeric": {
        "summary": [
          {
            "key": "spikes_damage",
            "label": "尖刺伤害",
            "unit": "",
            "value": 4,
            "display": "4"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "spikes_damage": 4
            },
            "display": {
              "spikes_damage": "4"
            }
          },
          {
            "level": 2,
            "values": {
              "spikes_damage": 5
            },
            "display": {
              "spikes_damage": "5"
            }
          },
          {
            "level": 3,
            "values": {
              "spikes_damage": 6
            },
            "display": {
              "spikes_damage": "6"
            }
          },
          {
            "level": 4,
            "values": {
              "spikes_damage": 7
            },
            "display": {
              "spikes_damage": "7"
            }
          },
          {
            "level": 5,
            "values": {
              "spikes_damage": 8
            },
            "display": {
              "spikes_damage": "8"
            }
          }
        ],
        "columns": [
          {
            "key": "spikes_damage",
            "label": "尖刺伤害",
            "unit": ""
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_bonfire_reflect_uncommon",
      "item_id": "wls2_extention_bonfire_reflect_uncommon",
      "name": "陷阱",
      "name_en": "Trap",
      "name_source": "official_zh",
      "description": "陷阱会对试图破坏工作台的歹徒造成伤害",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "篝火",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_reflect_uncommon",
      "image_id": "wls2_extention_bonfire_reflect_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "spikes_damage",
          "label": "尖刺伤害",
          "value": 10,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 10
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
              "value": 16
            },
            {
              "level": 5,
              "value": 18
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到篝火后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "篝火"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_bonfire_reflect_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_reflect_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_bonfire_reflect_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ba779517e705eef7d1e8e1ce3f95be213631ff76a6df66411bd237d27ff371eb",
      "numeric": {
        "summary": [
          {
            "key": "spikes_damage",
            "label": "尖刺伤害",
            "unit": "",
            "value": 10,
            "display": "10"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "spikes_damage": 10
            },
            "display": {
              "spikes_damage": "10"
            }
          },
          {
            "level": 2,
            "values": {
              "spikes_damage": 12
            },
            "display": {
              "spikes_damage": "12"
            }
          },
          {
            "level": 3,
            "values": {
              "spikes_damage": 14
            },
            "display": {
              "spikes_damage": "14"
            }
          },
          {
            "level": 4,
            "values": {
              "spikes_damage": 16
            },
            "display": {
              "spikes_damage": "16"
            }
          },
          {
            "level": 5,
            "values": {
              "spikes_damage": 18
            },
            "display": {
              "spikes_damage": "18"
            }
          }
        ],
        "columns": [
          {
            "key": "spikes_damage",
            "label": "尖刺伤害",
            "unit": ""
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_sewing_pricetoskip_common",
      "item_id": "wls2_extention_sewing_pricetoskip_common",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "织布机",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_common",
      "image_id": "wls2_extention_sewing_pricetoskip_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 6.0
            },
            {
              "level": 3,
              "value": 7.0
            },
            {
              "level": 4,
              "value": 8.0
            },
            {
              "level": 5,
              "value": 9.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到织布机后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_sewing_pricetoskip",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 400
            }
          ],
          "result_id": "wls2_extention_sewing_pricetoskip_common",
          "result_name": "主发条",
          "amount": 1,
          "item_level": 5
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "织布机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_sewing_pricetoskip_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_sewing_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "93850f0ff7e501c2098e9532cfac2afa11f5a2392ecce6feb69cb14f51f70888",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 5.0,
            "display": "5%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "skip_time_price_reduction": 5.0
            },
            "display": {
              "skip_time_price_reduction": "5%"
            }
          },
          {
            "level": 2,
            "values": {
              "skip_time_price_reduction": 6.0
            },
            "display": {
              "skip_time_price_reduction": "6%"
            }
          },
          {
            "level": 3,
            "values": {
              "skip_time_price_reduction": 7.0
            },
            "display": {
              "skip_time_price_reduction": "7%"
            }
          },
          {
            "level": 4,
            "values": {
              "skip_time_price_reduction": 8.0
            },
            "display": {
              "skip_time_price_reduction": "8%"
            }
          },
          {
            "level": 5,
            "values": {
              "skip_time_price_reduction": 9.0
            },
            "display": {
              "skip_time_price_reduction": "9%"
            }
          }
        ],
        "columns": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_sewing_pricetoskip_uncommon",
      "item_id": "wls2_extention_sewing_pricetoskip_uncommon",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "织布机",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_uncommon",
      "image_id": "wls2_extention_sewing_pricetoskip_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 17.0
            },
            {
              "level": 3,
              "value": 19.0
            },
            {
              "level": 4,
              "value": 21.0
            },
            {
              "level": 5,
              "value": 23.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到织布机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "织布机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_sewing_pricetoskip_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_sewing_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "48314ab3c71e3800f04d2efe04885f24443d649dfa71294f9bd2a9bb12d7c810",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 15.0,
            "display": "15%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "skip_time_price_reduction": 15.0
            },
            "display": {
              "skip_time_price_reduction": "15%"
            }
          },
          {
            "level": 2,
            "values": {
              "skip_time_price_reduction": 17.0
            },
            "display": {
              "skip_time_price_reduction": "17%"
            }
          },
          {
            "level": 3,
            "values": {
              "skip_time_price_reduction": 19.0
            },
            "display": {
              "skip_time_price_reduction": "19%"
            }
          },
          {
            "level": 4,
            "values": {
              "skip_time_price_reduction": 21.0
            },
            "display": {
              "skip_time_price_reduction": "21%"
            }
          },
          {
            "level": 5,
            "values": {
              "skip_time_price_reduction": 23.0
            },
            "display": {
              "skip_time_price_reduction": "23%"
            }
          }
        ],
        "columns": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_sewing_cashback_uncommon",
      "item_id": "wls2_extention_sewing_cashback_uncommon",
      "name": "划线规",
      "name_en": "Marking Gauge",
      "name_source": "official_zh",
      "description": "制作时有几率返还 1 个单位的资源",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "织布机",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_cashback_uncommon",
      "image_id": "wls2_extention_sewing_cashback_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "cashback_chance",
          "label": "材料返还概率",
          "value": 12.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 12.0
            },
            {
              "level": 2,
              "value": 13.0
            },
            {
              "level": 3,
              "value": 14.0
            },
            {
              "level": 4,
              "value": 15.0
            },
            {
              "level": 5,
              "value": 16.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到织布机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "织布机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_sewing_cashback_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_cashback_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_sewing_cashback_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "092aa433907ff34158b7ace2b0a8cb7446c50f8f931a8a9b7b98dedbb4edfe74",
      "numeric": {
        "summary": [
          {
            "key": "cashback_chance",
            "label": "材料返还概率",
            "unit": "%",
            "value": 12.0,
            "display": "12%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "cashback_chance": 12.0
            },
            "display": {
              "cashback_chance": "12%"
            }
          },
          {
            "level": 2,
            "values": {
              "cashback_chance": 13.0
            },
            "display": {
              "cashback_chance": "13%"
            }
          },
          {
            "level": 3,
            "values": {
              "cashback_chance": 14.0
            },
            "display": {
              "cashback_chance": "14%"
            }
          },
          {
            "level": 4,
            "values": {
              "cashback_chance": 15.0
            },
            "display": {
              "cashback_chance": "15%"
            }
          },
          {
            "level": 5,
            "values": {
              "cashback_chance": 16.0
            },
            "display": {
              "cashback_chance": "16%"
            }
          }
        ],
        "columns": [
          {
            "key": "cashback_chance",
            "label": "材料返还概率",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_sewing_timetofix_common",
      "item_id": "wls2_extention_sewing_timetofix_common",
      "name": "备件盒",
      "name_en": "Spares Box",
      "name_source": "official_zh",
      "description": "如果有歹徒破坏了工作台，可以加快工作台的修理时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "织布机",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetofix_common",
      "image_id": "wls2_extention_sewing_timetofix_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "repair_time_reduction",
          "label": "修理时间缩短",
          "value": 20.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 20.0
            },
            {
              "level": 2,
              "value": 22.0
            },
            {
              "level": 3,
              "value": 24.0
            },
            {
              "level": 4,
              "value": 26.0
            },
            {
              "level": 5,
              "value": 28.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到织布机后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_sewing_timetofix",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 100
            }
          ],
          "result_id": "wls2_extention_sewing_timetofix_common",
          "result_name": "备件盒",
          "amount": 1,
          "item_level": 5
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "织布机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_sewing_timetofix_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetofix_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_sewing_timetofix_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1231f77e8a5e0ecc765e060eb02acfe4103aa044ef2380e33c15d79fd3f67642",
      "numeric": {
        "summary": [
          {
            "key": "repair_time_reduction",
            "label": "修理时间缩短",
            "unit": "%",
            "value": 20.0,
            "display": "20%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "repair_time_reduction": 20.0
            },
            "display": {
              "repair_time_reduction": "20%"
            }
          },
          {
            "level": 2,
            "values": {
              "repair_time_reduction": 22.0
            },
            "display": {
              "repair_time_reduction": "22%"
            }
          },
          {
            "level": 3,
            "values": {
              "repair_time_reduction": 24.0
            },
            "display": {
              "repair_time_reduction": "24%"
            }
          },
          {
            "level": 4,
            "values": {
              "repair_time_reduction": 26.0
            },
            "display": {
              "repair_time_reduction": "26%"
            }
          },
          {
            "level": 5,
            "values": {
              "repair_time_reduction": 28.0
            },
            "display": {
              "repair_time_reduction": "28%"
            }
          }
        ],
        "columns": [
          {
            "key": "repair_time_reduction",
            "label": "修理时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_sewing_timetofix_uncommon",
      "item_id": "wls2_extention_sewing_timetofix_uncommon",
      "name": "备件盒",
      "name_en": "Spares Box",
      "name_source": "official_zh",
      "description": "如果有歹徒破坏了工作台，可以加快工作台的修理时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "织布机",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetofix_uncommon",
      "image_id": "wls2_extention_sewing_timetofix_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "repair_time_reduction",
          "label": "修理时间缩短",
          "value": 34.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 34.0
            },
            {
              "level": 2,
              "value": 38.0
            },
            {
              "level": 3,
              "value": 42.0
            },
            {
              "level": 4,
              "value": 46.0
            },
            {
              "level": 5,
              "value": 50.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到织布机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "织布机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_sewing_timetofix_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetofix_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_sewing_timetofix_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "55e12ba3f19d631e18781bacb68ed2e18325e99535c72b63f9d26be58b440d1d",
      "numeric": {
        "summary": [
          {
            "key": "repair_time_reduction",
            "label": "修理时间缩短",
            "unit": "%",
            "value": 34.0,
            "display": "34%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "repair_time_reduction": 34.0
            },
            "display": {
              "repair_time_reduction": "34%"
            }
          },
          {
            "level": 2,
            "values": {
              "repair_time_reduction": 38.0
            },
            "display": {
              "repair_time_reduction": "38%"
            }
          },
          {
            "level": 3,
            "values": {
              "repair_time_reduction": 42.0
            },
            "display": {
              "repair_time_reduction": "42%"
            }
          },
          {
            "level": 4,
            "values": {
              "repair_time_reduction": 46.0
            },
            "display": {
              "repair_time_reduction": "46%"
            }
          },
          {
            "level": 5,
            "values": {
              "repair_time_reduction": 50.0
            },
            "display": {
              "repair_time_reduction": "50%"
            }
          }
        ],
        "columns": [
          {
            "key": "repair_time_reduction",
            "label": "修理时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_sewing_timetobuild_uncommon",
      "item_id": "wls2_extention_sewing_timetobuild_uncommon",
      "name": "建造加速插件",
      "name_en": "",
      "name_source": "descriptive_fallback",
      "description": "加快工作台升级时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "织布机",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls_bone_knife",
      "image_id": "wls2_extention_sewing_timetobuild_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "construction_time_reduction",
          "label": "建造时间缩短",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 17.0
            },
            {
              "level": 3,
              "value": 19.0
            },
            {
              "level": 4,
              "value": 21.0
            },
            {
              "level": 5,
              "value": 23.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到织布机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "织布机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_sewing_timetobuild_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetobuild_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_sewing_timetobuild_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a01ec765769152690101d8c94b56686750e2a6b7e78019cb50e1df5e9ed6b6a2",
      "numeric": {
        "summary": [
          {
            "key": "construction_time_reduction",
            "label": "建造时间缩短",
            "unit": "%",
            "value": 15.0,
            "display": "15%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "construction_time_reduction": 15.0
            },
            "display": {
              "construction_time_reduction": "15%"
            }
          },
          {
            "level": 2,
            "values": {
              "construction_time_reduction": 17.0
            },
            "display": {
              "construction_time_reduction": "17%"
            }
          },
          {
            "level": 3,
            "values": {
              "construction_time_reduction": 19.0
            },
            "display": {
              "construction_time_reduction": "19%"
            }
          },
          {
            "level": 4,
            "values": {
              "construction_time_reduction": 21.0
            },
            "display": {
              "construction_time_reduction": "21%"
            }
          },
          {
            "level": 5,
            "values": {
              "construction_time_reduction": 23.0
            },
            "display": {
              "construction_time_reduction": "23%"
            }
          }
        ],
        "columns": [
          {
            "key": "construction_time_reduction",
            "label": "建造时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_sewing_health_uncommon",
      "item_id": "wls2_extention_sewing_health_uncommon",
      "name": "牢固框架",
      "name_en": "Strong frame",
      "name_source": "official_zh",
      "description": "增加工作台耐久度。歹徒需要花费更大工夫才能破坏工作台",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "织布机",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_health_uncommon",
      "image_id": "wls2_extention_sewing_health_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "building_health",
          "label": "建筑生命",
          "value": 60,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 60
            },
            {
              "level": 2,
              "value": 70
            },
            {
              "level": 3,
              "value": 80
            },
            {
              "level": 4,
              "value": 90
            },
            {
              "level": 5,
              "value": 100
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到织布机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "织布机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_sewing_health_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_health_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_sewing_health_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "39ace5cf1d588557e139cff21063410c71a4488ad94fc49c2694c3360ef26e0a",
      "numeric": {
        "summary": [
          {
            "key": "building_health",
            "label": "建筑生命",
            "unit": "",
            "value": 60,
            "display": "60"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "building_health": 60
            },
            "display": {
              "building_health": "60"
            }
          },
          {
            "level": 2,
            "values": {
              "building_health": 70
            },
            "display": {
              "building_health": "70"
            }
          },
          {
            "level": 3,
            "values": {
              "building_health": 80
            },
            "display": {
              "building_health": "80"
            }
          },
          {
            "level": 4,
            "values": {
              "building_health": 90
            },
            "display": {
              "building_health": "90"
            }
          },
          {
            "level": 5,
            "values": {
              "building_health": 100
            },
            "display": {
              "building_health": "100"
            }
          }
        ],
        "columns": [
          {
            "key": "building_health",
            "label": "建筑生命",
            "unit": ""
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_sewing_timetocraft_common",
      "item_id": "wls2_extention_sewing_timetocraft_common",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "织布机",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_common",
      "image_id": "wls2_extention_sewing_timetocraft_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 6.0
            },
            {
              "level": 3,
              "value": 7.0
            },
            {
              "level": 4,
              "value": 8.0
            },
            {
              "level": 5,
              "value": 9.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到织布机后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_sewing_timetocraft",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 400
            }
          ],
          "result_id": "wls2_extention_sewing_timetocraft_common",
          "result_name": "转动装置",
          "amount": 1,
          "item_level": 5
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "织布机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_sewing_timetocraft_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_sewing_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "194a79e35d64168bf0f3f6d185bbd72aa1c8fc13d25f1c3483f316736b980fa7",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 5.0,
            "display": "5%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "craft_time_reduction": 5.0
            },
            "display": {
              "craft_time_reduction": "5%"
            }
          },
          {
            "level": 2,
            "values": {
              "craft_time_reduction": 6.0
            },
            "display": {
              "craft_time_reduction": "6%"
            }
          },
          {
            "level": 3,
            "values": {
              "craft_time_reduction": 7.0
            },
            "display": {
              "craft_time_reduction": "7%"
            }
          },
          {
            "level": 4,
            "values": {
              "craft_time_reduction": 8.0
            },
            "display": {
              "craft_time_reduction": "8%"
            }
          },
          {
            "level": 5,
            "values": {
              "craft_time_reduction": 9.0
            },
            "display": {
              "craft_time_reduction": "9%"
            }
          }
        ],
        "columns": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_sewing_timetocraft_uncommon",
      "item_id": "wls2_extention_sewing_timetocraft_uncommon",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "织布机",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_uncommon",
      "image_id": "wls2_extention_sewing_timetocraft_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 17.0
            },
            {
              "level": 3,
              "value": 19.0
            },
            {
              "level": 4,
              "value": 21.0
            },
            {
              "level": 5,
              "value": 23.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到织布机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "织布机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_sewing_timetocraft_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_sewing_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "0c89940736d311752d87ab6d2d8de11e0704f6f8e61fa2ec9c494d90684fe39c",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 15.0,
            "display": "15%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "craft_time_reduction": 15.0
            },
            "display": {
              "craft_time_reduction": "15%"
            }
          },
          {
            "level": 2,
            "values": {
              "craft_time_reduction": 17.0
            },
            "display": {
              "craft_time_reduction": "17%"
            }
          },
          {
            "level": 3,
            "values": {
              "craft_time_reduction": 19.0
            },
            "display": {
              "craft_time_reduction": "19%"
            }
          },
          {
            "level": 4,
            "values": {
              "craft_time_reduction": 21.0
            },
            "display": {
              "craft_time_reduction": "21%"
            }
          },
          {
            "level": 5,
            "values": {
              "craft_time_reduction": 23.0
            },
            "display": {
              "craft_time_reduction": "23%"
            }
          }
        ],
        "columns": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_sewing_queue_common",
      "item_id": "wls2_extention_sewing_queue_common",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "织布机",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_cashback_common",
      "image_id": "wls2_extention_sewing_queue_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "additional_prodiuction_slot",
          "label": "额外生产队列",
          "value": 1,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [
        "安装到织布机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "织布机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_sewing_queue_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_queue_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_sewing_queue_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5f41b0668f8d0d33fa8af005b6377cd0f1150e22e634229b3b5861e6faa9a50e",
      "numeric": {
        "summary": [
          {
            "key": "additional_prodiuction_slot",
            "label": "额外生产队列",
            "unit": "",
            "value": 1,
            "display": "1"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "插件等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_extention_sewing_queue_uncommon",
      "item_id": "wls2_extention_sewing_queue_uncommon",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "织布机",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_cashback_common",
      "image_id": "wls2_extention_sewing_queue_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "additional_prodiuction_slot",
          "label": "额外生产队列",
          "value": 2,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [
        "安装到织布机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "织布机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_sewing_queue_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_queue_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_sewing_queue_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5f41b0668f8d0d33fa8af005b6377cd0f1150e22e634229b3b5861e6faa9a50e",
      "numeric": {
        "summary": [
          {
            "key": "additional_prodiuction_slot",
            "label": "额外生产队列",
            "unit": "",
            "value": 2,
            "display": "2"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "插件等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_extention_sewing_extraresource_uncommon",
      "item_id": "wls2_extention_sewing_extraresource_uncommon",
      "name": "锋利刀片",
      "name_en": "Sharp Cutter",
      "name_source": "official_zh",
      "description": "在制作过程中有几率获得额外资源。对武器和护甲不起作用",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "织布机",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_extraresource_uncommon",
      "image_id": "wls2_extention_sewing_extraresource_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "amount_increment_chance",
          "label": "额外产出概率",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 17.0
            },
            {
              "level": 3,
              "value": 19.0
            },
            {
              "level": 4,
              "value": 21.0
            },
            {
              "level": 5,
              "value": 23.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到织布机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "织布机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_sewing_extraresource_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_extraresource_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_sewing_extraresource_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a7d147b631be2e7f74d771282ee1539be9aa2d166452e3c3a3807d93ce176fc8",
      "numeric": {
        "summary": [
          {
            "key": "amount_increment_chance",
            "label": "额外产出概率",
            "unit": "%",
            "value": 15.0,
            "display": "15%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "amount_increment_chance": 15.0
            },
            "display": {
              "amount_increment_chance": "15%"
            }
          },
          {
            "level": 2,
            "values": {
              "amount_increment_chance": 17.0
            },
            "display": {
              "amount_increment_chance": "17%"
            }
          },
          {
            "level": 3,
            "values": {
              "amount_increment_chance": 19.0
            },
            "display": {
              "amount_increment_chance": "19%"
            }
          },
          {
            "level": 4,
            "values": {
              "amount_increment_chance": 21.0
            },
            "display": {
              "amount_increment_chance": "21%"
            }
          },
          {
            "level": 5,
            "values": {
              "amount_increment_chance": 23.0
            },
            "display": {
              "amount_increment_chance": "23%"
            }
          }
        ],
        "columns": [
          {
            "key": "amount_increment_chance",
            "label": "额外产出概率",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_sewing_reflect_common",
      "item_id": "wls2_extention_sewing_reflect_common",
      "name": "陷阱",
      "name_en": "Trap",
      "name_source": "official_zh",
      "description": "陷阱会对试图破坏工作台的歹徒造成伤害",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "织布机",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_reflect_common",
      "image_id": "wls2_extention_sewing_reflect_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "spikes_damage",
          "label": "尖刺伤害",
          "value": 4,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 4
            },
            {
              "level": 2,
              "value": 5
            },
            {
              "level": 3,
              "value": 6
            },
            {
              "level": 4,
              "value": 7
            },
            {
              "level": 5,
              "value": 8
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到织布机后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_sewing_reflect",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 100
            }
          ],
          "result_id": "wls2_extention_sewing_reflect_common",
          "result_name": "陷阱",
          "amount": 1,
          "item_level": 5
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "织布机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_sewing_reflect_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_reflect_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_sewing_reflect_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ad0c5eea1b00caeff979909876ac015287c3144e8c64ddad44fa4d9310f57485",
      "numeric": {
        "summary": [
          {
            "key": "spikes_damage",
            "label": "尖刺伤害",
            "unit": "",
            "value": 4,
            "display": "4"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "spikes_damage": 4
            },
            "display": {
              "spikes_damage": "4"
            }
          },
          {
            "level": 2,
            "values": {
              "spikes_damage": 5
            },
            "display": {
              "spikes_damage": "5"
            }
          },
          {
            "level": 3,
            "values": {
              "spikes_damage": 6
            },
            "display": {
              "spikes_damage": "6"
            }
          },
          {
            "level": 4,
            "values": {
              "spikes_damage": 7
            },
            "display": {
              "spikes_damage": "7"
            }
          },
          {
            "level": 5,
            "values": {
              "spikes_damage": 8
            },
            "display": {
              "spikes_damage": "8"
            }
          }
        ],
        "columns": [
          {
            "key": "spikes_damage",
            "label": "尖刺伤害",
            "unit": ""
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_sewing_reflect_uncommon",
      "item_id": "wls2_extention_sewing_reflect_uncommon",
      "name": "陷阱",
      "name_en": "Trap",
      "name_source": "official_zh",
      "description": "陷阱会对试图破坏工作台的歹徒造成伤害",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "织布机",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_reflect_uncommon",
      "image_id": "wls2_extention_sewing_reflect_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "spikes_damage",
          "label": "尖刺伤害",
          "value": 10,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 10
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
              "value": 16
            },
            {
              "level": 5,
              "value": 18
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到织布机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "织布机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_sewing_reflect_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_reflect_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_sewing_reflect_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ba779517e705eef7d1e8e1ce3f95be213631ff76a6df66411bd237d27ff371eb",
      "numeric": {
        "summary": [
          {
            "key": "spikes_damage",
            "label": "尖刺伤害",
            "unit": "",
            "value": 10,
            "display": "10"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "spikes_damage": 10
            },
            "display": {
              "spikes_damage": "10"
            }
          },
          {
            "level": 2,
            "values": {
              "spikes_damage": 12
            },
            "display": {
              "spikes_damage": "12"
            }
          },
          {
            "level": 3,
            "values": {
              "spikes_damage": 14
            },
            "display": {
              "spikes_damage": "14"
            }
          },
          {
            "level": 4,
            "values": {
              "spikes_damage": 16
            },
            "display": {
              "spikes_damage": "16"
            }
          },
          {
            "level": 5,
            "values": {
              "spikes_damage": 18
            },
            "display": {
              "spikes_damage": "18"
            }
          }
        ],
        "columns": [
          {
            "key": "spikes_damage",
            "label": "尖刺伤害",
            "unit": ""
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_repairshop_pricetoskip_common",
      "item_id": "wls2_extention_repairshop_pricetoskip_common",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "维修商店",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_common",
      "image_id": "wls2_extention_repairshop_pricetoskip_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 6.0
            },
            {
              "level": 3,
              "value": 7.0
            },
            {
              "level": 4,
              "value": 8.0
            },
            {
              "level": 5,
              "value": 9.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到维修商店后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_repairshop_pricetoskip",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 400
            }
          ],
          "result_id": "wls2_extention_repairshop_pricetoskip_common",
          "result_name": "主发条",
          "amount": 1,
          "item_level": 5
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "维修商店"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_repairshop_pricetoskip_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_repairshop_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "93850f0ff7e501c2098e9532cfac2afa11f5a2392ecce6feb69cb14f51f70888",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 5.0,
            "display": "5%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "skip_time_price_reduction": 5.0
            },
            "display": {
              "skip_time_price_reduction": "5%"
            }
          },
          {
            "level": 2,
            "values": {
              "skip_time_price_reduction": 6.0
            },
            "display": {
              "skip_time_price_reduction": "6%"
            }
          },
          {
            "level": 3,
            "values": {
              "skip_time_price_reduction": 7.0
            },
            "display": {
              "skip_time_price_reduction": "7%"
            }
          },
          {
            "level": 4,
            "values": {
              "skip_time_price_reduction": 8.0
            },
            "display": {
              "skip_time_price_reduction": "8%"
            }
          },
          {
            "level": 5,
            "values": {
              "skip_time_price_reduction": 9.0
            },
            "display": {
              "skip_time_price_reduction": "9%"
            }
          }
        ],
        "columns": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_repairshop_pricetoskip_uncommon",
      "item_id": "wls2_extention_repairshop_pricetoskip_uncommon",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "维修商店",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_uncommon",
      "image_id": "wls2_extention_repairshop_pricetoskip_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 17.0
            },
            {
              "level": 3,
              "value": 19.0
            },
            {
              "level": 4,
              "value": 21.0
            },
            {
              "level": 5,
              "value": 23.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到维修商店后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "维修商店"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_repairshop_pricetoskip_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_repairshop_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "48314ab3c71e3800f04d2efe04885f24443d649dfa71294f9bd2a9bb12d7c810",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 15.0,
            "display": "15%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "skip_time_price_reduction": 15.0
            },
            "display": {
              "skip_time_price_reduction": "15%"
            }
          },
          {
            "level": 2,
            "values": {
              "skip_time_price_reduction": 17.0
            },
            "display": {
              "skip_time_price_reduction": "17%"
            }
          },
          {
            "level": 3,
            "values": {
              "skip_time_price_reduction": 19.0
            },
            "display": {
              "skip_time_price_reduction": "19%"
            }
          },
          {
            "level": 4,
            "values": {
              "skip_time_price_reduction": 21.0
            },
            "display": {
              "skip_time_price_reduction": "21%"
            }
          },
          {
            "level": 5,
            "values": {
              "skip_time_price_reduction": 23.0
            },
            "display": {
              "skip_time_price_reduction": "23%"
            }
          }
        ],
        "columns": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_repairshop_timetofix_common",
      "item_id": "wls2_extention_repairshop_timetofix_common",
      "name": "备件盒",
      "name_en": "Spares Box",
      "name_source": "official_zh",
      "description": "如果有歹徒破坏了工作台，可以加快工作台的修理时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "维修商店",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetofix_common",
      "image_id": "wls2_extention_repairshop_timetofix_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "construction_time_reduction",
          "label": "建造时间缩短",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 6.0
            },
            {
              "level": 3,
              "value": 7.0
            },
            {
              "level": 4,
              "value": 8.0
            },
            {
              "level": 5,
              "value": 9.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到维修商店后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_repairshop_timetofix",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 100
            }
          ],
          "result_id": "wls2_extention_repairshop_timetofix_common",
          "result_name": "备件盒",
          "amount": 1,
          "item_level": 5
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "维修商店"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_repairshop_timetofix_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetofix_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_repairshop_timetofix_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1231f77e8a5e0ecc765e060eb02acfe4103aa044ef2380e33c15d79fd3f67642",
      "numeric": {
        "summary": [
          {
            "key": "construction_time_reduction",
            "label": "建造时间缩短",
            "unit": "%",
            "value": 5.0,
            "display": "5%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "construction_time_reduction": 5.0
            },
            "display": {
              "construction_time_reduction": "5%"
            }
          },
          {
            "level": 2,
            "values": {
              "construction_time_reduction": 6.0
            },
            "display": {
              "construction_time_reduction": "6%"
            }
          },
          {
            "level": 3,
            "values": {
              "construction_time_reduction": 7.0
            },
            "display": {
              "construction_time_reduction": "7%"
            }
          },
          {
            "level": 4,
            "values": {
              "construction_time_reduction": 8.0
            },
            "display": {
              "construction_time_reduction": "8%"
            }
          },
          {
            "level": 5,
            "values": {
              "construction_time_reduction": 9.0
            },
            "display": {
              "construction_time_reduction": "9%"
            }
          }
        ],
        "columns": [
          {
            "key": "construction_time_reduction",
            "label": "建造时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_repairshop_timetofix_uncommon",
      "item_id": "wls2_extention_repairshop_timetofix_uncommon",
      "name": "备件盒",
      "name_en": "Spares Box",
      "name_source": "official_zh",
      "description": "如果有歹徒破坏了工作台，可以加快工作台的修理时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "维修商店",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetofix_uncommon",
      "image_id": "wls2_extention_repairshop_timetofix_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "construction_time_reduction",
          "label": "建造时间缩短",
          "value": 34.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 34.0
            },
            {
              "level": 2,
              "value": 38.0
            },
            {
              "level": 3,
              "value": 42.0
            },
            {
              "level": 4,
              "value": 46.0
            },
            {
              "level": 5,
              "value": 50.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到维修商店后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "维修商店"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_repairshop_timetofix_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetofix_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_repairshop_timetofix_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "55e12ba3f19d631e18781bacb68ed2e18325e99535c72b63f9d26be58b440d1d",
      "numeric": {
        "summary": [
          {
            "key": "construction_time_reduction",
            "label": "建造时间缩短",
            "unit": "%",
            "value": 34.0,
            "display": "34%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "construction_time_reduction": 34.0
            },
            "display": {
              "construction_time_reduction": "34%"
            }
          },
          {
            "level": 2,
            "values": {
              "construction_time_reduction": 38.0
            },
            "display": {
              "construction_time_reduction": "38%"
            }
          },
          {
            "level": 3,
            "values": {
              "construction_time_reduction": 42.0
            },
            "display": {
              "construction_time_reduction": "42%"
            }
          },
          {
            "level": 4,
            "values": {
              "construction_time_reduction": 46.0
            },
            "display": {
              "construction_time_reduction": "46%"
            }
          },
          {
            "level": 5,
            "values": {
              "construction_time_reduction": 50.0
            },
            "display": {
              "construction_time_reduction": "50%"
            }
          }
        ],
        "columns": [
          {
            "key": "construction_time_reduction",
            "label": "建造时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_repairshop_timetobuild_uncommon",
      "item_id": "wls2_extention_repairshop_timetobuild_uncommon",
      "name": "建造加速插件",
      "name_en": "",
      "name_source": "descriptive_fallback",
      "description": "加快工作台升级时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "维修商店",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls_bone_knife",
      "image_id": "wls2_extention_repairshop_timetobuild_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "cashback_chance",
          "label": "材料返还概率",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 17.0
            },
            {
              "level": 3,
              "value": 19.0
            },
            {
              "level": 4,
              "value": 21.0
            },
            {
              "level": 5,
              "value": 23.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到维修商店后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "维修商店"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_repairshop_timetobuild_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetobuild_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_repairshop_timetobuild_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a01ec765769152690101d8c94b56686750e2a6b7e78019cb50e1df5e9ed6b6a2",
      "numeric": {
        "summary": [
          {
            "key": "cashback_chance",
            "label": "材料返还概率",
            "unit": "%",
            "value": 15.0,
            "display": "15%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "cashback_chance": 15.0
            },
            "display": {
              "cashback_chance": "15%"
            }
          },
          {
            "level": 2,
            "values": {
              "cashback_chance": 17.0
            },
            "display": {
              "cashback_chance": "17%"
            }
          },
          {
            "level": 3,
            "values": {
              "cashback_chance": 19.0
            },
            "display": {
              "cashback_chance": "19%"
            }
          },
          {
            "level": 4,
            "values": {
              "cashback_chance": 21.0
            },
            "display": {
              "cashback_chance": "21%"
            }
          },
          {
            "level": 5,
            "values": {
              "cashback_chance": 23.0
            },
            "display": {
              "cashback_chance": "23%"
            }
          }
        ],
        "columns": [
          {
            "key": "cashback_chance",
            "label": "材料返还概率",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_repairshop_health_uncommon",
      "item_id": "wls2_extention_repairshop_health_uncommon",
      "name": "牢固框架",
      "name_en": "Strong frame",
      "name_source": "official_zh",
      "description": "增加工作台耐久度。歹徒需要花费更大工夫才能破坏工作台",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "维修商店",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_health_uncommon",
      "image_id": "wls2_extention_repairshop_health_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "building_health",
          "label": "建筑生命",
          "value": 60,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 60
            },
            {
              "level": 2,
              "value": 70
            },
            {
              "level": 3,
              "value": 80
            },
            {
              "level": 4,
              "value": 90
            },
            {
              "level": 5,
              "value": 100
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到维修商店后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "维修商店"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_repairshop_health_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_health_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_repairshop_health_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "39ace5cf1d588557e139cff21063410c71a4488ad94fc49c2694c3360ef26e0a",
      "numeric": {
        "summary": [
          {
            "key": "building_health",
            "label": "建筑生命",
            "unit": "",
            "value": 60,
            "display": "60"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "building_health": 60
            },
            "display": {
              "building_health": "60"
            }
          },
          {
            "level": 2,
            "values": {
              "building_health": 70
            },
            "display": {
              "building_health": "70"
            }
          },
          {
            "level": 3,
            "values": {
              "building_health": 80
            },
            "display": {
              "building_health": "80"
            }
          },
          {
            "level": 4,
            "values": {
              "building_health": 90
            },
            "display": {
              "building_health": "90"
            }
          },
          {
            "level": 5,
            "values": {
              "building_health": 100
            },
            "display": {
              "building_health": "100"
            }
          }
        ],
        "columns": [
          {
            "key": "building_health",
            "label": "建筑生命",
            "unit": ""
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    },
    {
      "id": "wls2_extention_repairshop_timetocraft_common",
      "item_id": "wls2_extention_repairshop_timetocraft_common",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "维修商店",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_common",
      "image_id": "wls2_extention_repairshop_timetocraft_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 6.0
            },
            {
              "level": 3,
              "value": 7.0
            },
            {
              "level": 4,
              "value": 8.0
            },
            {
              "level": 5,
              "value": 9.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [
        "安装到维修商店后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_repairshop_timetocraft",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 400
            }
          ],
          "result_id": "wls2_extention_repairshop_timetocraft_common",
          "result_name": "转动装置",
          "amount": 1,
          "item_level": 5
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "维修商店"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_repairshop_timetocraft_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_repairshop_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "194a79e35d64168bf0f3f6d185bbd72aa1c8fc13d25f1c3483f316736b980fa7",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 5.0,
            "display": "5%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "craft_time_reduction": 5.0
            },
            "display": {
              "craft_time_reduction": "5%"
            }
          },
          {
            "level": 2,
            "values": {
              "craft_time_reduction": 6.0
            },
            "display": {
              "craft_time_reduction": "6%"
            }
          },
          {
            "level": 3,
            "values": {
              "craft_time_reduction": 7.0
            },
            "display": {
              "craft_time_reduction": "7%"
            }
          },
          {
            "level": 4,
            "values": {
              "craft_time_reduction": 8.0
            },
            "display": {
              "craft_time_reduction": "8%"
            }
          },
          {
            "level": 5,
            "values": {
              "craft_time_reduction": 9.0
            },
            "display": {
              "craft_time_reduction": "9%"
            }
          }
        ],
        "columns": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%"
          }
        ],
        "notes": [],
        "level_label": "插件等级",
        "default_level": 1
      }
    }
  ]
};
