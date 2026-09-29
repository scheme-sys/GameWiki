/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-inventory-45"] = {
  "section": "inventory",
  "records": [
    {
      "id": "wls2_extention_workbench_timetocraft_4_uncommon",
      "item_id": "wls2_extention_workbench_timetocraft_4_uncommon",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "零件工作台",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_uncommon",
      "image_id": "wls2_extention_workbench_timetocraft_4_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到零件工作台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "河间地"
      ],
      "workbenches": [
        "零件工作台"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_workbench_timetocraft_4_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_workbench_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_4"
        ],
        "quest_referenced": false
      },
      "image_key": "0c89940736d311752d87ab6d2d8de11e0704f6f8e61fa2ec9c494d90684fe39c",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 10.0,
            "display": "10%"
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
      "id": "wls2_extention_workbench_queue_4_rare",
      "item_id": "wls2_extention_workbench_queue_4_rare",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "零件工作台",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_cashback_common",
      "image_id": "wls2_extention_workbench_queue_4_rare",
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
        "安装到零件工作台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "河间地"
      ],
      "workbenches": [
        "零件工作台"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_workbench_queue_4_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_queue_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_workbench_queue_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_4"
        ],
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
      "id": "wls2_extention_well_pricetoskip_5_common",
      "item_id": "wls2_extention_well_pricetoskip_5_common",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "井",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_common",
      "image_id": "wls2_extention_well_pricetoskip_5_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 14.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到井后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "井"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_well_pricetoskip_5_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_well_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "93850f0ff7e501c2098e9532cfac2afa11f5a2392ecce6feb69cb14f51f70888",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 14.0,
            "display": "14%"
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
      "id": "wls2_extention_well_pricetoskip_5_epic",
      "item_id": "wls2_extention_well_pricetoskip_5_epic",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "井",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_rare",
      "image_id": "wls2_extention_well_pricetoskip_5_epic",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到井后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "井"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_well_pricetoskip_5_epic",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_well_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "198f809eee08d02452aafd60687bc71b48e482e6ec2832d2681a9be229015bf5",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 20.0,
            "display": "20%"
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
      "id": "wls2_extention_well_pricetoskip_5_rare",
      "item_id": "wls2_extention_well_pricetoskip_5_rare",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "井",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_rare",
      "image_id": "wls2_extention_well_pricetoskip_5_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 18.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到井后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "井"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_well_pricetoskip_5_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_well_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "198f809eee08d02452aafd60687bc71b48e482e6ec2832d2681a9be229015bf5",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 18.0,
            "display": "18%"
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
      "id": "wls2_extention_well_pricetoskip_5_uncommon",
      "item_id": "wls2_extention_well_pricetoskip_5_uncommon",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "井",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_uncommon",
      "image_id": "wls2_extention_well_pricetoskip_5_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 16.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到井后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "井"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_well_pricetoskip_5_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_well_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "48314ab3c71e3800f04d2efe04885f24443d649dfa71294f9bd2a9bb12d7c810",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 16.0,
            "display": "16%"
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
      "id": "wls2_extention_well_timetocraft_5_common",
      "item_id": "wls2_extention_well_timetocraft_5_common",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "井",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_common",
      "image_id": "wls2_extention_well_timetocraft_5_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 14.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到井后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "井"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_well_timetocraft_5_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_well_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "194a79e35d64168bf0f3f6d185bbd72aa1c8fc13d25f1c3483f316736b980fa7",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 14.0,
            "display": "14%"
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
      "id": "wls2_extention_well_timetocraft_5_epic",
      "item_id": "wls2_extention_well_timetocraft_5_epic",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "井",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_rare",
      "image_id": "wls2_extention_well_timetocraft_5_epic",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到井后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "井"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_well_timetocraft_5_epic",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_well_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "e2e4bf9daad2316d7e852b3450e45fd8e7f8483c4b5891c52890a7c78125a3eb",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 20.0,
            "display": "20%"
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
      "id": "wls2_extention_well_timetocraft_5_rare",
      "item_id": "wls2_extention_well_timetocraft_5_rare",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "井",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_rare",
      "image_id": "wls2_extention_well_timetocraft_5_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 18.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到井后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "井"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_well_timetocraft_5_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_well_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "e2e4bf9daad2316d7e852b3450e45fd8e7f8483c4b5891c52890a7c78125a3eb",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 18.0,
            "display": "18%"
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
      "id": "wls2_extention_well_timetocraft_5_uncommon",
      "item_id": "wls2_extention_well_timetocraft_5_uncommon",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "井",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_uncommon",
      "image_id": "wls2_extention_well_timetocraft_5_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 16.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到井后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "井"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_well_timetocraft_5_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_well_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "0c89940736d311752d87ab6d2d8de11e0704f6f8e61fa2ec9c494d90684fe39c",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 16.0,
            "display": "16%"
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
      "id": "wls2_extention_well_queue_5_rare",
      "item_id": "wls2_extention_well_queue_5_rare",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "井",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_cashback_uncommon",
      "image_id": "wls2_extention_well_queue_5_rare",
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
        "安装到井后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "井"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_well_queue_5_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_queue_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_well_queue_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "092aa433907ff34158b7ace2b0a8cb7446c50f8f931a8a9b7b98dedbb4edfe74",
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
      "id": "wls2_extention_recycle_pricetoskip_5_common",
      "item_id": "wls2_extention_recycle_pricetoskip_5_common",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "分解台",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_common",
      "image_id": "wls2_extention_recycle_pricetoskip_5_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 14.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到分解台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "分解台"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_recycle_pricetoskip_5_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_recycle_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "93850f0ff7e501c2098e9532cfac2afa11f5a2392ecce6feb69cb14f51f70888",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 14.0,
            "display": "14%"
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
      "id": "wls2_extention_recycle_pricetoskip_5_epic",
      "item_id": "wls2_extention_recycle_pricetoskip_5_epic",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "分解台",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_rare",
      "image_id": "wls2_extention_recycle_pricetoskip_5_epic",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到分解台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "分解台"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_recycle_pricetoskip_5_epic",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_recycle_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "198f809eee08d02452aafd60687bc71b48e482e6ec2832d2681a9be229015bf5",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 20.0,
            "display": "20%"
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
      "id": "wls2_extention_recycle_pricetoskip_5_rare",
      "item_id": "wls2_extention_recycle_pricetoskip_5_rare",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "分解台",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_rare",
      "image_id": "wls2_extention_recycle_pricetoskip_5_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 18.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到分解台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "分解台"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_recycle_pricetoskip_5_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_recycle_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "198f809eee08d02452aafd60687bc71b48e482e6ec2832d2681a9be229015bf5",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 18.0,
            "display": "18%"
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
      "id": "wls2_extention_recycle_pricetoskip_5_uncommon",
      "item_id": "wls2_extention_recycle_pricetoskip_5_uncommon",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "分解台",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_uncommon",
      "image_id": "wls2_extention_recycle_pricetoskip_5_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 16.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到分解台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "分解台"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_recycle_pricetoskip_5_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_recycle_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "48314ab3c71e3800f04d2efe04885f24443d649dfa71294f9bd2a9bb12d7c810",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 16.0,
            "display": "16%"
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
      "id": "wls2_extention_recycle_timetocraft_5_common",
      "item_id": "wls2_extention_recycle_timetocraft_5_common",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "分解台",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_common",
      "image_id": "wls2_extention_recycle_timetocraft_5_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 14.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到分解台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "分解台"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_recycle_timetocraft_5_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_recycle_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "194a79e35d64168bf0f3f6d185bbd72aa1c8fc13d25f1c3483f316736b980fa7",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 14.0,
            "display": "14%"
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
      "id": "wls2_extention_recycle_timetocraft_5_epic",
      "item_id": "wls2_extention_recycle_timetocraft_5_epic",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "分解台",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_rare",
      "image_id": "wls2_extention_recycle_timetocraft_5_epic",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到分解台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "分解台"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_recycle_timetocraft_5_epic",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_recycle_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "e2e4bf9daad2316d7e852b3450e45fd8e7f8483c4b5891c52890a7c78125a3eb",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 20.0,
            "display": "20%"
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
      "id": "wls2_extention_recycle_timetocraft_5_rare",
      "item_id": "wls2_extention_recycle_timetocraft_5_rare",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "分解台",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_rare",
      "image_id": "wls2_extention_recycle_timetocraft_5_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 18.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到分解台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "分解台"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_recycle_timetocraft_5_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_recycle_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "e2e4bf9daad2316d7e852b3450e45fd8e7f8483c4b5891c52890a7c78125a3eb",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 18.0,
            "display": "18%"
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
      "id": "wls2_extention_recycle_timetocraft_5_uncommon",
      "item_id": "wls2_extention_recycle_timetocraft_5_uncommon",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "分解台",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_uncommon",
      "image_id": "wls2_extention_recycle_timetocraft_5_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 16.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到分解台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "分解台"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_recycle_timetocraft_5_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_recycle_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "0c89940736d311752d87ab6d2d8de11e0704f6f8e61fa2ec9c494d90684fe39c",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 16.0,
            "display": "16%"
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
      "id": "wls2_extention_recycle_queue_5_rare",
      "item_id": "wls2_extention_recycle_queue_5_rare",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "分解台",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_cashback_uncommon",
      "image_id": "wls2_extention_recycle_queue_5_rare",
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
        "安装到分解台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "分解台"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_recycle_queue_5_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_queue_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_recycle_queue_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "092aa433907ff34158b7ace2b0a8cb7446c50f8f931a8a9b7b98dedbb4edfe74",
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
      "id": "wls2_extention_stone_pricetoskip_5_common",
      "item_id": "wls2_extention_stone_pricetoskip_5_common",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "割石机",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_common",
      "image_id": "wls2_extention_stone_pricetoskip_5_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 14.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到割石机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "割石机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stone_pricetoskip_5_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_stone_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "93850f0ff7e501c2098e9532cfac2afa11f5a2392ecce6feb69cb14f51f70888",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 14.0,
            "display": "14%"
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
      "id": "wls2_extention_stone_pricetoskip_5_epic",
      "item_id": "wls2_extention_stone_pricetoskip_5_epic",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "割石机",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_rare",
      "image_id": "wls2_extention_stone_pricetoskip_5_epic",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到割石机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "割石机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stone_pricetoskip_5_epic",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_stone_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "198f809eee08d02452aafd60687bc71b48e482e6ec2832d2681a9be229015bf5",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 20.0,
            "display": "20%"
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
      "id": "wls2_extention_stone_pricetoskip_5_rare",
      "item_id": "wls2_extention_stone_pricetoskip_5_rare",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "割石机",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_rare",
      "image_id": "wls2_extention_stone_pricetoskip_5_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 18.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到割石机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "割石机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stone_pricetoskip_5_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_stone_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "198f809eee08d02452aafd60687bc71b48e482e6ec2832d2681a9be229015bf5",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 18.0,
            "display": "18%"
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
      "id": "wls2_extention_stone_pricetoskip_5_uncommon",
      "item_id": "wls2_extention_stone_pricetoskip_5_uncommon",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "割石机",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_uncommon",
      "image_id": "wls2_extention_stone_pricetoskip_5_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 16.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到割石机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "割石机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stone_pricetoskip_5_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_stone_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "48314ab3c71e3800f04d2efe04885f24443d649dfa71294f9bd2a9bb12d7c810",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 16.0,
            "display": "16%"
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
      "id": "wls2_extention_stone_timetocraft_5_common",
      "item_id": "wls2_extention_stone_timetocraft_5_common",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "割石机",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_common",
      "image_id": "wls2_extention_stone_timetocraft_5_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 14.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到割石机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "割石机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stone_timetocraft_5_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_stone_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "194a79e35d64168bf0f3f6d185bbd72aa1c8fc13d25f1c3483f316736b980fa7",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 14.0,
            "display": "14%"
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
      "id": "wls2_extention_stone_timetocraft_5_epic",
      "item_id": "wls2_extention_stone_timetocraft_5_epic",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "割石机",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_rare",
      "image_id": "wls2_extention_stone_timetocraft_5_epic",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到割石机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "割石机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stone_timetocraft_5_epic",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_stone_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "e2e4bf9daad2316d7e852b3450e45fd8e7f8483c4b5891c52890a7c78125a3eb",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 20.0,
            "display": "20%"
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
      "id": "wls2_extention_stone_timetocraft_5_rare",
      "item_id": "wls2_extention_stone_timetocraft_5_rare",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "割石机",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_rare",
      "image_id": "wls2_extention_stone_timetocraft_5_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 18.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到割石机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "割石机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stone_timetocraft_5_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_stone_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "e2e4bf9daad2316d7e852b3450e45fd8e7f8483c4b5891c52890a7c78125a3eb",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 18.0,
            "display": "18%"
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
      "id": "wls2_extention_stone_timetocraft_5_uncommon",
      "item_id": "wls2_extention_stone_timetocraft_5_uncommon",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "割石机",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_uncommon",
      "image_id": "wls2_extention_stone_timetocraft_5_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 16.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到割石机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "割石机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stone_timetocraft_5_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_stone_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "0c89940736d311752d87ab6d2d8de11e0704f6f8e61fa2ec9c494d90684fe39c",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 16.0,
            "display": "16%"
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
      "id": "wls2_extention_stone_queue_5_rare",
      "item_id": "wls2_extention_stone_queue_5_rare",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "割石机",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_cashback_uncommon",
      "image_id": "wls2_extention_stone_queue_5_rare",
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
        "安装到割石机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "割石机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stone_queue_5_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_queue_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_stone_queue_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "092aa433907ff34158b7ace2b0a8cb7446c50f8f931a8a9b7b98dedbb4edfe74",
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
      "id": "wls2_extention_stone_levelup_5_common",
      "item_id": "wls2_extention_stone_levelup_5_common",
      "name": "镜头组",
      "name_en": "Lens Set",
      "name_source": "official_zh",
      "description": "有几率制作出高 1 级的物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "割石机",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_levelup_common",
      "image_id": "wls2_extention_stone_levelup_5_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "level_increment_chance",
          "label": "成品等级提升概率",
          "value": 14.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到割石机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "割石机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stone_levelup_5_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_levelup_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_stone_levelup_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "d8512ea4a41a5888ec7c940f2d3ee64a7e27e008696bbd2715d9f9878d389bda",
      "numeric": {
        "summary": [
          {
            "key": "level_increment_chance",
            "label": "成品等级提升概率",
            "unit": "%",
            "value": 14.0,
            "display": "14%"
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
      "id": "wls2_extention_stone_levelup_5_epic",
      "item_id": "wls2_extention_stone_levelup_5_epic",
      "name": "镜头组",
      "name_en": "Lens Set",
      "name_source": "official_zh",
      "description": "有几率制作出高 1 级的物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "割石机",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_levelup_rare",
      "image_id": "wls2_extention_stone_levelup_5_epic",
      "equipment_id": null,
      "stats": [
        {
          "id": "level_increment_chance",
          "label": "成品等级提升概率",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到割石机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "割石机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stone_levelup_5_epic",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_levelup_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_stone_levelup_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "33123de001d3c8567bac4f0a9b5223d28ce5eed1a402a320174223c68d1f177e",
      "numeric": {
        "summary": [
          {
            "key": "level_increment_chance",
            "label": "成品等级提升概率",
            "unit": "%",
            "value": 20.0,
            "display": "20%"
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
      "id": "wls2_extention_stone_levelup_5_rare",
      "item_id": "wls2_extention_stone_levelup_5_rare",
      "name": "镜头组",
      "name_en": "Lens Set",
      "name_source": "official_zh",
      "description": "有几率制作出高 1 级的物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "割石机",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_levelup_rare",
      "image_id": "wls2_extention_stone_levelup_5_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "level_increment_chance",
          "label": "成品等级提升概率",
          "value": 18.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到割石机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "割石机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stone_levelup_5_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_levelup_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_stone_levelup_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "33123de001d3c8567bac4f0a9b5223d28ce5eed1a402a320174223c68d1f177e",
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
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "插件等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_extention_stone_levelup_5_uncommon",
      "item_id": "wls2_extention_stone_levelup_5_uncommon",
      "name": "镜头组",
      "name_en": "Lens Set",
      "name_source": "official_zh",
      "description": "有几率制作出高 1 级的物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "割石机",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_levelup_uncommon",
      "image_id": "wls2_extention_stone_levelup_5_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "level_increment_chance",
          "label": "成品等级提升概率",
          "value": 16.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到割石机后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "割石机"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stone_levelup_5_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_levelup_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_stone_levelup_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "4d41940c34cf5ae21d8f5df2a9847ec603a5c1ee1fdc261b2fb9b815cc0c6d11",
      "numeric": {
        "summary": [
          {
            "key": "level_increment_chance",
            "label": "成品等级提升概率",
            "unit": "%",
            "value": 16.0,
            "display": "16%"
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
      "id": "wls2_extention_kitchen_pricetoskip_5_common",
      "item_id": "wls2_extention_kitchen_pricetoskip_5_common",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "厨房",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_common",
      "image_id": "wls2_extention_kitchen_pricetoskip_5_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 14.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到厨房后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "厨房"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_kitchen_pricetoskip_5_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_kitchen_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "93850f0ff7e501c2098e9532cfac2afa11f5a2392ecce6feb69cb14f51f70888",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 14.0,
            "display": "14%"
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
      "id": "wls2_extention_kitchen_pricetoskip_5_epic",
      "item_id": "wls2_extention_kitchen_pricetoskip_5_epic",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "厨房",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_rare",
      "image_id": "wls2_extention_kitchen_pricetoskip_5_epic",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到厨房后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "厨房"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_kitchen_pricetoskip_5_epic",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_kitchen_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "198f809eee08d02452aafd60687bc71b48e482e6ec2832d2681a9be229015bf5",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 20.0,
            "display": "20%"
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
      "id": "wls2_extention_kitchen_pricetoskip_5_rare",
      "item_id": "wls2_extention_kitchen_pricetoskip_5_rare",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "厨房",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_rare",
      "image_id": "wls2_extention_kitchen_pricetoskip_5_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 18.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到厨房后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "厨房"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_kitchen_pricetoskip_5_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_kitchen_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "198f809eee08d02452aafd60687bc71b48e482e6ec2832d2681a9be229015bf5",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 18.0,
            "display": "18%"
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
      "id": "wls2_extention_kitchen_pricetoskip_5_uncommon",
      "item_id": "wls2_extention_kitchen_pricetoskip_5_uncommon",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "厨房",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_pricetoskip_uncommon",
      "image_id": "wls2_extention_kitchen_pricetoskip_5_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 16.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到厨房后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "厨房"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_kitchen_pricetoskip_5_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_pricetoskip_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_kitchen_pricetoskip_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "48314ab3c71e3800f04d2efe04885f24443d649dfa71294f9bd2a9bb12d7c810",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 16.0,
            "display": "16%"
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
      "id": "wls2_extention_kitchen_timetocraft_5_common",
      "item_id": "wls2_extention_kitchen_timetocraft_5_common",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "厨房",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_common",
      "image_id": "wls2_extention_kitchen_timetocraft_5_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 14.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到厨房后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "厨房"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_kitchen_timetocraft_5_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_kitchen_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "194a79e35d64168bf0f3f6d185bbd72aa1c8fc13d25f1c3483f316736b980fa7",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 14.0,
            "display": "14%"
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
      "id": "wls2_extention_kitchen_timetocraft_5_epic",
      "item_id": "wls2_extention_kitchen_timetocraft_5_epic",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "厨房",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_rare",
      "image_id": "wls2_extention_kitchen_timetocraft_5_epic",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到厨房后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "厨房"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_kitchen_timetocraft_5_epic",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_kitchen_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "e2e4bf9daad2316d7e852b3450e45fd8e7f8483c4b5891c52890a7c78125a3eb",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 20.0,
            "display": "20%"
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
      "id": "wls2_extention_kitchen_timetocraft_5_rare",
      "item_id": "wls2_extention_kitchen_timetocraft_5_rare",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "厨房",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_rare",
      "image_id": "wls2_extention_kitchen_timetocraft_5_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 18.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到厨房后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "厨房"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_kitchen_timetocraft_5_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_kitchen_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "e2e4bf9daad2316d7e852b3450e45fd8e7f8483c4b5891c52890a7c78125a3eb",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 18.0,
            "display": "18%"
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
      "id": "wls2_extention_kitchen_timetocraft_5_uncommon",
      "item_id": "wls2_extention_kitchen_timetocraft_5_uncommon",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "厨房",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_timetocraft_uncommon",
      "image_id": "wls2_extention_kitchen_timetocraft_5_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 16.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到厨房后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "厨房"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_kitchen_timetocraft_5_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_timetocraft_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_kitchen_timetocraft_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "0c89940736d311752d87ab6d2d8de11e0704f6f8e61fa2ec9c494d90684fe39c",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 16.0,
            "display": "16%"
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
      "id": "wls2_extention_kitchen_queue_5_rare",
      "item_id": "wls2_extention_kitchen_queue_5_rare",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "厨房",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_extention_cashback_uncommon",
      "image_id": "wls2_extention_kitchen_queue_5_rare",
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
        "安装到厨房后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [
        "厨房"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_kitchen_queue_5_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "inventory_stack_extention_queue_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_workshop_kitchen_queue_extention",
        "blueprint_lootbox_id": null,
        "source_location_ids": [
          "wls2_loc_special_bc_5"
        ],
        "quest_referenced": false
      },
      "image_key": "092aa433907ff34158b7ace2b0a8cb7446c50f8f931a8a9b7b98dedbb4edfe74",
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
      "id": "wls2_extention_stable_pricetoskip_growing_t5_common",
      "item_id": "wls2_extention_stable_pricetoskip_growing_t5_common",
      "name": "增长上的折扣",
      "name_en": "Discount on growth",
      "name_source": "official_zh",
      "description": "将此标志放置在马厩以使马增长速度提速变得更便宜",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_discount_Common",
      "image_id": "wls2_extention_stable_pricetoskip_growing_t5_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "grow_price_reduction_percent",
          "label": "折扣 在 增长 加速 上",
          "value": 14.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_pricetoskip_growing_t5_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_pricetoskip_growing_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_pricetoskip_growing",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1e5ef0aabfe626e482aae70c76a4794440261e0da334d3aff7066c84e8b7cd5d",
      "numeric": {
        "summary": [
          {
            "key": "grow_price_reduction_percent",
            "label": "折扣 在 增长 加速 上",
            "unit": "%",
            "value": 14.0,
            "display": "14%"
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
      "id": "wls2_extention_stable_pricetoskip_growing_t5_epic",
      "item_id": "wls2_extention_stable_pricetoskip_growing_t5_epic",
      "name": "增长上的折扣",
      "name_en": "Discount on growth",
      "name_source": "official_zh",
      "description": "将此标志放置在马厩以使马增长速度提速变得更便宜",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_discount_Rare+Epic",
      "image_id": "wls2_extention_stable_pricetoskip_growing_t5_epic",
      "equipment_id": null,
      "stats": [
        {
          "id": "grow_price_reduction_percent",
          "label": "折扣 在 增长 加速 上",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_pricetoskip_growing_t5_epic",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_pricetoskip_growing_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_pricetoskip_growing",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a57246890f1059eafa81979aba0b38504e42d98a91524299f5148bca61d00cd5",
      "numeric": {
        "summary": [
          {
            "key": "grow_price_reduction_percent",
            "label": "折扣 在 增长 加速 上",
            "unit": "%",
            "value": 20.0,
            "display": "20%"
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
      "id": "wls2_extention_stable_pricetoskip_growing_t5_rare",
      "item_id": "wls2_extention_stable_pricetoskip_growing_t5_rare",
      "name": "增长上的折扣",
      "name_en": "Discount on growth",
      "name_source": "official_zh",
      "description": "将此标志放置在马厩以使马增长速度提速变得更便宜",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_discount_Rare+Epic",
      "image_id": "wls2_extention_stable_pricetoskip_growing_t5_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "grow_price_reduction_percent",
          "label": "折扣 在 增长 加速 上",
          "value": 18.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_pricetoskip_growing_t5_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_pricetoskip_growing_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_pricetoskip_growing",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a57246890f1059eafa81979aba0b38504e42d98a91524299f5148bca61d00cd5",
      "numeric": {
        "summary": [
          {
            "key": "grow_price_reduction_percent",
            "label": "折扣 在 增长 加速 上",
            "unit": "%",
            "value": 18.0,
            "display": "18%"
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
      "id": "wls2_extention_stable_pricetoskip_growing_t5_uncommon",
      "item_id": "wls2_extention_stable_pricetoskip_growing_t5_uncommon",
      "name": "增长上的折扣",
      "name_en": "Discount on growth",
      "name_source": "official_zh",
      "description": "将此标志放置在马厩以使马增长速度提速变得更便宜",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_discount_Uncommon",
      "image_id": "wls2_extention_stable_pricetoskip_growing_t5_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "grow_price_reduction_percent",
          "label": "折扣 在 增长 加速 上",
          "value": 16.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_pricetoskip_growing_t5_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_pricetoskip_growing_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_pricetoskip_growing",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "8b04f0ae48e9efb34446ecafbf21a8767b993d99c3701551950b50e11b9169b8",
      "numeric": {
        "summary": [
          {
            "key": "grow_price_reduction_percent",
            "label": "折扣 在 增长 加速 上",
            "unit": "%",
            "value": 16.0,
            "display": "16%"
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
      "id": "wls2_extention_stable_feeder_t5_common",
      "item_id": "wls2_extention_stable_feeder_t5_common",
      "name": "延长 饲养器",
      "name_en": "Extended feeder",
      "name_source": "official_zh",
      "description": "更大的容量让你能够长时间忘记喂养",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_feederhorse_Common",
      "image_id": "wls2_extention_stable_feeder_t5_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "food_amount_increment_percent",
          "label": "食物产量增加",
          "value": 28.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_feeder_t5_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_feeder_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_feeder",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "07189b6634fa370d187890a8bf35584a69999dd2d47dc584a5f68bccb608bde5",
      "numeric": {
        "summary": [
          {
            "key": "food_amount_increment_percent",
            "label": "食物产量增加",
            "unit": "%",
            "value": 28.0,
            "display": "28%"
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
      "id": "wls2_extention_stable_feeder_t5_epic",
      "item_id": "wls2_extention_stable_feeder_t5_epic",
      "name": "延长 饲养器",
      "name_en": "Extended feeder",
      "name_source": "official_zh",
      "description": "更大的容量让你能够长时间忘记喂养",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_feederhorse_Rare+Epic",
      "image_id": "wls2_extention_stable_feeder_t5_epic",
      "equipment_id": null,
      "stats": [
        {
          "id": "food_amount_increment_percent",
          "label": "食物产量增加",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_feeder_t5_epic",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_feeder_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_feeder",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "79a509cbd82cdfc0f3831f4e33b9c9d63812a392c7135505fba36db2b238fc24",
      "numeric": {
        "summary": [
          {
            "key": "food_amount_increment_percent",
            "label": "食物产量增加",
            "unit": "%",
            "value": 40.0,
            "display": "40%"
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
      "id": "wls2_extention_stable_feeder_t5_rare",
      "item_id": "wls2_extention_stable_feeder_t5_rare",
      "name": "延长 饲养器",
      "name_en": "Extended feeder",
      "name_source": "official_zh",
      "description": "更大的容量让你能够长时间忘记喂养",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_feederhorse_Rare+Epic",
      "image_id": "wls2_extention_stable_feeder_t5_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "food_amount_increment_percent",
          "label": "食物产量增加",
          "value": 36.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_feeder_t5_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_feeder_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_feeder",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "79a509cbd82cdfc0f3831f4e33b9c9d63812a392c7135505fba36db2b238fc24",
      "numeric": {
        "summary": [
          {
            "key": "food_amount_increment_percent",
            "label": "食物产量增加",
            "unit": "%",
            "value": 36.0,
            "display": "36%"
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
      "id": "wls2_extention_stable_feeder_t5_uncommon",
      "item_id": "wls2_extention_stable_feeder_t5_uncommon",
      "name": "延长 饲养器",
      "name_en": "Extended feeder",
      "name_source": "official_zh",
      "description": "更大的容量让你能够长时间忘记喂养",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_feederhorse_Uncommon",
      "image_id": "wls2_extention_stable_feeder_t5_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "food_amount_increment_percent",
          "label": "食物产量增加",
          "value": 32.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_feeder_t5_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_feeder_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_feeder",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "c448f0109caf460018e83ff635422b72dc9b1b2d9271518e0148f7d1a3f2e7a5",
      "numeric": {
        "summary": [
          {
            "key": "food_amount_increment_percent",
            "label": "食物产量增加",
            "unit": "%",
            "value": 32.0,
            "display": "32%"
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
      "id": "wls2_extention_stable_pricetoskip_breeding_t5_common",
      "item_id": "wls2_extention_stable_pricetoskip_breeding_t5_common",
      "name": "繁殖上的折扣",
      "name_en": "Discount on breeding",
      "name_source": "official_zh",
      "description": "将此标志放置在马厩以使马繁殖加速更便宜",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_discount_Common",
      "image_id": "wls2_extention_stable_pricetoskip_breeding_t5_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "breeding_price_reduction_percent",
          "label": "折扣 在 繁殖 加速 上",
          "value": 14.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_pricetoskip_breeding_t5_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_pricetoskip_breeding_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_pricetoskip_breeding",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1e5ef0aabfe626e482aae70c76a4794440261e0da334d3aff7066c84e8b7cd5d",
      "numeric": {
        "summary": [
          {
            "key": "breeding_price_reduction_percent",
            "label": "折扣 在 繁殖 加速 上",
            "unit": "%",
            "value": 14.0,
            "display": "14%"
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
      "id": "wls2_extention_stable_pricetoskip_breeding_t5_epic",
      "item_id": "wls2_extention_stable_pricetoskip_breeding_t5_epic",
      "name": "繁殖上的折扣",
      "name_en": "Discount on breeding",
      "name_source": "official_zh",
      "description": "将此标志放置在马厩以使马繁殖加速更便宜",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_discount_Rare+Epic",
      "image_id": "wls2_extention_stable_pricetoskip_breeding_t5_epic",
      "equipment_id": null,
      "stats": [
        {
          "id": "breeding_price_reduction_percent",
          "label": "折扣 在 繁殖 加速 上",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_pricetoskip_breeding_t5_epic",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_pricetoskip_breeding_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_pricetoskip_breeding",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a57246890f1059eafa81979aba0b38504e42d98a91524299f5148bca61d00cd5",
      "numeric": {
        "summary": [
          {
            "key": "breeding_price_reduction_percent",
            "label": "折扣 在 繁殖 加速 上",
            "unit": "%",
            "value": 20.0,
            "display": "20%"
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
      "id": "wls2_extention_stable_pricetoskip_breeding_t5_rare",
      "item_id": "wls2_extention_stable_pricetoskip_breeding_t5_rare",
      "name": "繁殖上的折扣",
      "name_en": "Discount on breeding",
      "name_source": "official_zh",
      "description": "将此标志放置在马厩以使马繁殖加速更便宜",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_discount_Rare+Epic",
      "image_id": "wls2_extention_stable_pricetoskip_breeding_t5_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "breeding_price_reduction_percent",
          "label": "折扣 在 繁殖 加速 上",
          "value": 18.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_pricetoskip_breeding_t5_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_pricetoskip_breeding_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_pricetoskip_breeding",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a57246890f1059eafa81979aba0b38504e42d98a91524299f5148bca61d00cd5",
      "numeric": {
        "summary": [
          {
            "key": "breeding_price_reduction_percent",
            "label": "折扣 在 繁殖 加速 上",
            "unit": "%",
            "value": 18.0,
            "display": "18%"
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
      "id": "wls2_extention_stable_pricetoskip_breeding_t5_uncommon",
      "item_id": "wls2_extention_stable_pricetoskip_breeding_t5_uncommon",
      "name": "繁殖上的折扣",
      "name_en": "Discount on breeding",
      "name_source": "official_zh",
      "description": "将此标志放置在马厩以使马繁殖加速更便宜",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_discount_Uncommon",
      "image_id": "wls2_extention_stable_pricetoskip_breeding_t5_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "breeding_price_reduction_percent",
          "label": "折扣 在 繁殖 加速 上",
          "value": 16.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_pricetoskip_breeding_t5_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_pricetoskip_breeding_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_pricetoskip_breeding",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "8b04f0ae48e9efb34446ecafbf21a8767b993d99c3701551950b50e11b9169b8",
      "numeric": {
        "summary": [
          {
            "key": "breeding_price_reduction_percent",
            "label": "折扣 在 繁殖 加速 上",
            "unit": "%",
            "value": 16.0,
            "display": "16%"
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
      "id": "wls2_extention_stable_growing_draft_t5_common",
      "item_id": "wls2_extention_stable_growing_draft_t5_common",
      "name": "蔬菜 喂食器",
      "name_en": "Vegetable feeder",
      "name_source": "official_zh",
      "description": "专用喂食器，用于多样化饮食，促进生长",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_growinghorse_Common",
      "image_id": "wls2_extention_stable_growing_draft_t5_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "horse_wagon_grow_speed_percent_modifier_stat",
          "label": "到 生长 时间 的 草案 马",
          "value": 14.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_growing_draft_t5_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_growing_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_growing_draft",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1dcc6008b7167d2e29a1d3ba30c7ea516683dceb3860d31f9b56fdae89e6e084",
      "numeric": {
        "summary": [
          {
            "key": "horse_wagon_grow_speed_percent_modifier_stat",
            "label": "到 生长 时间 的 草案 马",
            "unit": "%",
            "value": 14.0,
            "display": "14%"
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
      "id": "wls2_extention_stable_growing_draft_t5_epic",
      "item_id": "wls2_extention_stable_growing_draft_t5_epic",
      "name": "蔬菜 喂食器",
      "name_en": "Vegetable feeder",
      "name_source": "official_zh",
      "description": "专用喂食器，用于多样化饮食，促进生长",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_growinghorse_Rare+Epic",
      "image_id": "wls2_extention_stable_growing_draft_t5_epic",
      "equipment_id": null,
      "stats": [
        {
          "id": "horse_wagon_grow_speed_percent_modifier_stat",
          "label": "到 生长 时间 的 草案 马",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_growing_draft_t5_epic",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_growing_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_growing_draft",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "20a3977428b218902e467d9e919a2ace68b97f0aeacdb0e8ef63f16c6cb58463",
      "numeric": {
        "summary": [
          {
            "key": "horse_wagon_grow_speed_percent_modifier_stat",
            "label": "到 生长 时间 的 草案 马",
            "unit": "%",
            "value": 20.0,
            "display": "20%"
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
      "id": "wls2_extention_stable_growing_draft_t5_rare",
      "item_id": "wls2_extention_stable_growing_draft_t5_rare",
      "name": "蔬菜 喂食器",
      "name_en": "Vegetable feeder",
      "name_source": "official_zh",
      "description": "专用喂食器，用于多样化饮食，促进生长",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_growinghorse_Rare+Epic",
      "image_id": "wls2_extention_stable_growing_draft_t5_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "horse_wagon_grow_speed_percent_modifier_stat",
          "label": "到 生长 时间 的 草案 马",
          "value": 18.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_growing_draft_t5_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_growing_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_growing_draft",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "20a3977428b218902e467d9e919a2ace68b97f0aeacdb0e8ef63f16c6cb58463",
      "numeric": {
        "summary": [
          {
            "key": "horse_wagon_grow_speed_percent_modifier_stat",
            "label": "到 生长 时间 的 草案 马",
            "unit": "%",
            "value": 18.0,
            "display": "18%"
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
      "id": "wls2_extention_stable_growing_draft_t5_uncommon",
      "item_id": "wls2_extention_stable_growing_draft_t5_uncommon",
      "name": "蔬菜 喂食器",
      "name_en": "Vegetable feeder",
      "name_source": "official_zh",
      "description": "专用喂食器，用于多样化饮食，促进生长",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_growinghorse_Uncommon",
      "image_id": "wls2_extention_stable_growing_draft_t5_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "horse_wagon_grow_speed_percent_modifier_stat",
          "label": "到 生长 时间 的 草案 马",
          "value": 16.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_growing_draft_t5_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_growing_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_growing_draft",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "90bb140b675ba47083e07949c3d3fe69be3309b5a887b9e00bce86437d66957b",
      "numeric": {
        "summary": [
          {
            "key": "horse_wagon_grow_speed_percent_modifier_stat",
            "label": "到 生长 时间 的 草案 马",
            "unit": "%",
            "value": 16.0,
            "display": "16%"
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
      "id": "wls2_extention_stable_growing_riding_t5_common",
      "item_id": "wls2_extention_stable_growing_riding_t5_common",
      "name": "蔬菜 喂食器",
      "name_en": "Vegetable feeder",
      "name_source": "official_zh",
      "description": "专用喂食器，用于多样化饮食，促进生长",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_growinghorse_Common",
      "image_id": "wls2_extention_stable_growing_riding_t5_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "horse_riding_grow_speed_percent_modifier_stat",
          "label": "到 成长 时间 的 骑马",
          "value": 14.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_growing_riding_t5_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_growing_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_growing_riding",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1dcc6008b7167d2e29a1d3ba30c7ea516683dceb3860d31f9b56fdae89e6e084",
      "numeric": {
        "summary": [
          {
            "key": "horse_riding_grow_speed_percent_modifier_stat",
            "label": "到 成长 时间 的 骑马",
            "unit": "%",
            "value": 14.0,
            "display": "14%"
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
      "id": "wls2_extention_stable_growing_riding_t5_epic",
      "item_id": "wls2_extention_stable_growing_riding_t5_epic",
      "name": "蔬菜 喂食器",
      "name_en": "Vegetable feeder",
      "name_source": "official_zh",
      "description": "专用喂食器，用于多样化饮食，促进生长",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_growinghorse_Rare+Epic",
      "image_id": "wls2_extention_stable_growing_riding_t5_epic",
      "equipment_id": null,
      "stats": [
        {
          "id": "horse_riding_grow_speed_percent_modifier_stat",
          "label": "到 成长 时间 的 骑马",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_growing_riding_t5_epic",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_growing_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_growing_riding",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "20a3977428b218902e467d9e919a2ace68b97f0aeacdb0e8ef63f16c6cb58463",
      "numeric": {
        "summary": [
          {
            "key": "horse_riding_grow_speed_percent_modifier_stat",
            "label": "到 成长 时间 的 骑马",
            "unit": "%",
            "value": 20.0,
            "display": "20%"
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
      "id": "wls2_extention_stable_growing_riding_t5_rare",
      "item_id": "wls2_extention_stable_growing_riding_t5_rare",
      "name": "蔬菜 喂食器",
      "name_en": "Vegetable feeder",
      "name_source": "official_zh",
      "description": "专用喂食器，用于多样化饮食，促进生长",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_growinghorse_Rare+Epic",
      "image_id": "wls2_extention_stable_growing_riding_t5_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "horse_riding_grow_speed_percent_modifier_stat",
          "label": "到 成长 时间 的 骑马",
          "value": 18.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_growing_riding_t5_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_growing_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_growing_riding",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "20a3977428b218902e467d9e919a2ace68b97f0aeacdb0e8ef63f16c6cb58463",
      "numeric": {
        "summary": [
          {
            "key": "horse_riding_grow_speed_percent_modifier_stat",
            "label": "到 成长 时间 的 骑马",
            "unit": "%",
            "value": 18.0,
            "display": "18%"
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
      "id": "wls2_extention_stable_growing_riding_t5_uncommon",
      "item_id": "wls2_extention_stable_growing_riding_t5_uncommon",
      "name": "蔬菜 喂食器",
      "name_en": "Vegetable feeder",
      "name_source": "official_zh",
      "description": "专用喂食器，用于多样化饮食，促进生长",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_growinghorse_Uncommon",
      "image_id": "wls2_extention_stable_growing_riding_t5_uncommon",
      "equipment_id": null,
      "stats": [
        {
          "id": "horse_riding_grow_speed_percent_modifier_stat",
          "label": "到 成长 时间 的 骑马",
          "value": 16.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_growing_riding_t5_uncommon",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_growing_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_growing_riding",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "90bb140b675ba47083e07949c3d3fe69be3309b5a887b9e00bce86437d66957b",
      "numeric": {
        "summary": [
          {
            "key": "horse_riding_grow_speed_percent_modifier_stat",
            "label": "到 成长 时间 的 骑马",
            "unit": "%",
            "value": 16.0,
            "display": "16%"
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
      "id": "wls2_extention_stable_capacity_t5_rare",
      "item_id": "wls2_extention_stable_capacity_t5_rare",
      "name": "额外摊位",
      "name_en": "Additional stall",
      "name_source": "official_zh",
      "description": "额外 空间 为了 一匹 马",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_stable_Rare+Epic",
      "image_id": "wls2_extention_stable_capacity_t5_rare",
      "equipment_id": null,
      "stats": [
        {
          "id": "capacity_increment",
          "label": "容量增加",
          "value": 3,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_capacity_t5_rare",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_capacity_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_capacity",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "043882ba928c42ce204d4ffa6ced42df2c2270aa2b9948bde1021f304d37069b",
      "numeric": {
        "summary": [
          {
            "key": "capacity_increment",
            "label": "容量增加",
            "unit": "",
            "value": 3,
            "display": "3"
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
      "id": "wls2_extention_stable_appetite_draft_t5_common",
      "item_id": "wls2_extention_stable_appetite_draft_t5_common",
      "name": "饲料分配器",
      "name_en": "Feed dispenser",
      "name_source": "official_zh",
      "description": "减少饲料消耗，具有舒适的马设计",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "坐骑喂食器",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "single",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_extention_fillhorse_Common",
      "image_id": "wls2_extention_stable_appetite_draft_t5_common",
      "equipment_id": null,
      "stats": [
        {
          "id": "horse_wagon_feed_dispenser_stat",
          "label": "喂养 消费 通过 草案 马",
          "value": 14.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [
        "安装到坐骑喂食器后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "坐骑喂食器"
      ],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_extention_stable_appetite_draft_t5_common",
        "reason": "physical_workbench_augmentation",
        "name_key": "wls2_extention_stable_appetite_name",
        "sorting_group": "extention",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": "wls2_extention_stable_appetite_draft",
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ccd37934b05cbbff5a44f0c57e0c49628765d015188aa9e1ba2faf71d22be1e3",
      "numeric": {
        "summary": [
          {
            "key": "horse_wagon_feed_dispenser_stat",
            "label": "喂养 消费 通过 草案 马",
            "unit": "%",
            "value": 14.0,
            "display": "14%"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "插件等级",
        "default_level": null
      }
    }
  ]
};
