/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-inventory-34"] = {
  "section": "inventory",
  "records": [
    {
      "id": "wls2_extention_repairshop_timetocraft_uncommon",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "维修商店",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
      "id": "wls2_extention_repairshop_queue_common",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "维修商店",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到维修商店后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "维修商店"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_repairshop_queue_uncommon",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "维修商店",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
      "id": "wls2_extention_repairshop_reflect_common",
      "name": "陷阱",
      "name_en": "Trap",
      "name_source": "official_zh",
      "description": "陷阱会对试图破坏工作台的歹徒造成伤害",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "维修商店",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到维修商店后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_repairshop_reflect",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 100
            }
          ],
          "result_id": "wls2_extention_repairshop_reflect_common",
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
        "维修商店"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_repairshop_reflect_uncommon",
      "name": "陷阱",
      "name_en": "Trap",
      "name_source": "official_zh",
      "description": "陷阱会对试图破坏工作台的歹徒造成伤害",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "维修商店",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
      "id": "wls2_extention_herbalist_pricetoskip_common",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "草药桌",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到草药桌后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_herbalist_pricetoskip",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 400
            }
          ],
          "result_id": "wls2_extention_herbalist_pricetoskip_common",
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
        "草药桌"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_herbalist_pricetoskip_uncommon",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "草药桌",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到草药桌后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "草药桌"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_herbalist_cashback_uncommon",
      "name": "划线规",
      "name_en": "Marking Gauge",
      "name_source": "official_zh",
      "description": "制作时有几率返还 1 个单位的资源",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "草药桌",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到草药桌后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "草药桌"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_herbalist_timetofix_common",
      "name": "备件盒",
      "name_en": "Spares Box",
      "name_source": "official_zh",
      "description": "如果有歹徒破坏了工作台，可以加快工作台的修理时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "草药桌",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到草药桌后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_herbalist_timetofix",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 100
            }
          ],
          "result_id": "wls2_extention_herbalist_timetofix_common",
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
        "草药桌"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_herbalist_timetofix_uncommon",
      "name": "备件盒",
      "name_en": "Spares Box",
      "name_source": "official_zh",
      "description": "如果有歹徒破坏了工作台，可以加快工作台的修理时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "草药桌",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到草药桌后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "草药桌"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_herbalist_timetobuild_uncommon",
      "name": "建造加速插件",
      "name_en": "",
      "name_source": "descriptive_fallback",
      "description": "加快工作台升级时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "草药桌",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到草药桌后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "草药桌"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_herbalist_health_uncommon",
      "name": "牢固框架",
      "name_en": "Strong frame",
      "name_source": "official_zh",
      "description": "增加工作台耐久度。歹徒需要花费更大工夫才能破坏工作台",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "草药桌",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到草药桌后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "草药桌"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_herbalist_timetocraft_common",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "草药桌",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到草药桌后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_herbalist_timetocraft",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 400
            }
          ],
          "result_id": "wls2_extention_herbalist_timetocraft_common",
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
        "草药桌"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_herbalist_timetocraft_uncommon",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "草药桌",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到草药桌后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "草药桌"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_herbalist_queue_common",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "草药桌",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到草药桌后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "草药桌"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_herbalist_queue_uncommon",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "草药桌",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到草药桌后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "草药桌"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_herbalist_extraresource_uncommon",
      "name": "锋利刀片",
      "name_en": "Sharp Cutter",
      "name_source": "official_zh",
      "description": "在制作过程中有几率获得额外资源。对武器和护甲不起作用",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "草药桌",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到草药桌后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "草药桌"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_herbalist_reflect_common",
      "name": "陷阱",
      "name_en": "Trap",
      "name_source": "official_zh",
      "description": "陷阱会对试图破坏工作台的歹徒造成伤害",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "草药桌",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到草药桌后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_herbalist_reflect",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 100
            }
          ],
          "result_id": "wls2_extention_herbalist_reflect_common",
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
        "草药桌"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_herbalist_reflect_uncommon",
      "name": "陷阱",
      "name_en": "Trap",
      "name_source": "official_zh",
      "description": "陷阱会对试图破坏工作台的歹徒造成伤害",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "草药桌",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到草药桌后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "草药桌"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_smelter_pricetoskip_common",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "铸造厂",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到铸造厂后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_smelter_pricetoskip",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 400
            }
          ],
          "result_id": "wls2_extention_smelter_pricetoskip_common",
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
        "铸造厂"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_smelter_pricetoskip_uncommon",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "铸造厂",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到铸造厂后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "铸造厂"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_smelter_cashback_uncommon",
      "name": "划线规",
      "name_en": "Marking Gauge",
      "name_source": "official_zh",
      "description": "制作时有几率返还 1 个单位的资源",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "铸造厂",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到铸造厂后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "铸造厂"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_smelter_timetofix_common",
      "name": "备件盒",
      "name_en": "Spares Box",
      "name_source": "official_zh",
      "description": "如果有歹徒破坏了工作台，可以加快工作台的修理时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "铸造厂",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到铸造厂后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_smelter_timetofix",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 100
            }
          ],
          "result_id": "wls2_extention_smelter_timetofix_common",
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
        "铸造厂"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_smelter_timetofix_uncommon",
      "name": "备件盒",
      "name_en": "Spares Box",
      "name_source": "official_zh",
      "description": "如果有歹徒破坏了工作台，可以加快工作台的修理时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "铸造厂",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到铸造厂后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "铸造厂"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_smelter_timetobuild_uncommon",
      "name": "建造加速插件",
      "name_en": "",
      "name_source": "descriptive_fallback",
      "description": "加快工作台升级时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "铸造厂",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到铸造厂后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "铸造厂"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_smelter_health_uncommon",
      "name": "牢固框架",
      "name_en": "Strong frame",
      "name_source": "official_zh",
      "description": "增加工作台耐久度。歹徒需要花费更大工夫才能破坏工作台",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "铸造厂",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到铸造厂后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "铸造厂"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_smelter_timetocraft_common",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "铸造厂",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到铸造厂后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_smelter_timetocraft",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 400
            }
          ],
          "result_id": "wls2_extention_smelter_timetocraft_common",
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
        "铸造厂"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_smelter_timetocraft_uncommon",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "铸造厂",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到铸造厂后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "铸造厂"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_smelter_queue_common",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "铸造厂",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到铸造厂后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "歹徒前哨"
      ],
      "workbenches": [
        "铸造厂"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_smelter_queue_uncommon",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "铸造厂",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到铸造厂后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "铸造厂"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_smelter_extraresource_uncommon",
      "name": "锋利刀片",
      "name_en": "Sharp Cutter",
      "name_source": "official_zh",
      "description": "在制作过程中有几率获得额外资源。对武器和护甲不起作用",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "铸造厂",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到铸造厂后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "铸造厂"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_smelter_reflect_common",
      "name": "陷阱",
      "name_en": "Trap",
      "name_source": "official_zh",
      "description": "陷阱会对试图破坏工作台的歹徒造成伤害",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "铸造厂",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到铸造厂后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_smelter_reflect",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 100
            }
          ],
          "result_id": "wls2_extention_smelter_reflect_common",
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
        "铸造厂"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_smelter_reflect_uncommon",
      "name": "陷阱",
      "name_en": "Trap",
      "name_source": "official_zh",
      "description": "陷阱会对试图破坏工作台的歹徒造成伤害",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "铸造厂",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到铸造厂后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "铸造厂"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_workbench_pricetoskip_common",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "零件工作台",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到零件工作台后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_workbench_pricetoskip",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 400
            }
          ],
          "result_id": "wls2_extention_workbench_pricetoskip_common",
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
        "零件工作台"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_workbench_pricetoskip_uncommon",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "零件工作台",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到零件工作台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "零件工作台"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_workbench_cashback_uncommon",
      "name": "划线规",
      "name_en": "Marking Gauge",
      "name_source": "official_zh",
      "description": "制作时有几率返还 1 个单位的资源",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "零件工作台",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到零件工作台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "零件工作台"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_workbench_timetofix_common",
      "name": "备件盒",
      "name_en": "Spares Box",
      "name_source": "official_zh",
      "description": "如果有歹徒破坏了工作台，可以加快工作台的修理时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "零件工作台",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到零件工作台后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_workbench_timetofix",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 100
            }
          ],
          "result_id": "wls2_extention_workbench_timetofix_common",
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
        "零件工作台"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_workbench_timetofix_uncommon",
      "name": "备件盒",
      "name_en": "Spares Box",
      "name_source": "official_zh",
      "description": "如果有歹徒破坏了工作台，可以加快工作台的修理时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "零件工作台",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到零件工作台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "零件工作台"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_workbench_timetobuild_uncommon",
      "name": "建造加速插件",
      "name_en": "",
      "name_source": "descriptive_fallback",
      "description": "加快工作台升级时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "零件工作台",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到零件工作台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "零件工作台"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_workbench_health_uncommon",
      "name": "牢固框架",
      "name_en": "Strong frame",
      "name_source": "official_zh",
      "description": "增加工作台耐久度。歹徒需要花费更大工夫才能破坏工作台",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "零件工作台",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到零件工作台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "零件工作台"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_workbench_timetocraft_common",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "零件工作台",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到零件工作台后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_workbench_timetocraft",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 400
            }
          ],
          "result_id": "wls2_extention_workbench_timetocraft_common",
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
        "零件工作台"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_workbench_timetocraft_uncommon",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "零件工作台",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到零件工作台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "零件工作台"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_workbench_queue_common",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "零件工作台",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "歹徒前哨"
      ],
      "workbenches": [
        "零件工作台"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_workbench_queue_uncommon",
      "name": "输送机传动装置",
      "name_en": "Conveyor drive",
      "name_source": "official_zh",
      "description": "允许同时制作多个物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "零件工作台",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到零件工作台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "零件工作台"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_workbench_extraresource_uncommon",
      "name": "锋利刀片",
      "name_en": "Sharp Cutter",
      "name_source": "official_zh",
      "description": "在制作过程中有几率获得额外资源。对武器和护甲不起作用",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "零件工作台",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到零件工作台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "零件工作台"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_workbench_reflect_common",
      "name": "陷阱",
      "name_en": "Trap",
      "name_source": "official_zh",
      "description": "陷阱会对试图破坏工作台的歹徒造成伤害",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "零件工作台",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到零件工作台后生效"
      ],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_random_gear_workbench_reflect",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 100
            }
          ],
          "result_id": "wls2_extention_workbench_reflect_common",
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
        "零件工作台"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_workbench_reflect_uncommon",
      "name": "陷阱",
      "name_en": "Trap",
      "name_source": "official_zh",
      "description": "陷阱会对试图破坏工作台的歹徒造成伤害",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "零件工作台",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
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
        "安装到零件工作台后生效"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [
        "零件工作台"
      ],
      "blueprints": [],
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
      "id": "wls2_extention_well_pricetoskip_3_common",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "井",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 4.0,
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
        "山岳前哨"
      ],
      "workbenches": [
        "井"
      ],
      "blueprints": [],
      "image_key": "93850f0ff7e501c2098e9532cfac2afa11f5a2392ecce6feb69cb14f51f70888",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 4.0,
            "display": "4%"
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
      "id": "wls2_extention_well_pricetoskip_3_uncommon",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "井",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 6.0,
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
        "山岳前哨"
      ],
      "workbenches": [
        "井"
      ],
      "blueprints": [],
      "image_key": "48314ab3c71e3800f04d2efe04885f24443d649dfa71294f9bd2a9bb12d7c810",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 6.0,
            "display": "6%"
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
      "id": "wls2_extention_well_timetocraft_3_common",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "井",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 4.0,
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
        "山岳前哨"
      ],
      "workbenches": [
        "井"
      ],
      "blueprints": [],
      "image_key": "194a79e35d64168bf0f3f6d185bbd72aa1c8fc13d25f1c3483f316736b980fa7",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 4.0,
            "display": "4%"
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
      "id": "wls2_extention_well_timetocraft_3_uncommon",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "井",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 6.0,
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
        "山岳前哨"
      ],
      "workbenches": [
        "井"
      ],
      "blueprints": [],
      "image_key": "0c89940736d311752d87ab6d2d8de11e0704f6f8e61fa2ec9c494d90684fe39c",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 6.0,
            "display": "6%"
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
      "id": "wls2_extention_recycle_pricetoskip_3_common",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "分解台",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 4.0,
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
        "山岳前哨"
      ],
      "workbenches": [
        "分解台"
      ],
      "blueprints": [],
      "image_key": "93850f0ff7e501c2098e9532cfac2afa11f5a2392ecce6feb69cb14f51f70888",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 4.0,
            "display": "4%"
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
      "id": "wls2_extention_recycle_pricetoskip_3_uncommon",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "分解台",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 6.0,
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
        "山岳前哨"
      ],
      "workbenches": [
        "分解台"
      ],
      "blueprints": [],
      "image_key": "48314ab3c71e3800f04d2efe04885f24443d649dfa71294f9bd2a9bb12d7c810",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 6.0,
            "display": "6%"
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
      "id": "wls2_extention_recycle_timetocraft_3_common",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "分解台",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 4.0,
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
        "山岳前哨"
      ],
      "workbenches": [
        "分解台"
      ],
      "blueprints": [],
      "image_key": "194a79e35d64168bf0f3f6d185bbd72aa1c8fc13d25f1c3483f316736b980fa7",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 4.0,
            "display": "4%"
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
      "id": "wls2_extention_recycle_timetocraft_3_uncommon",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "分解台",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 6.0,
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
        "山岳前哨"
      ],
      "workbenches": [
        "分解台"
      ],
      "blueprints": [],
      "image_key": "0c89940736d311752d87ab6d2d8de11e0704f6f8e61fa2ec9c494d90684fe39c",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 6.0,
            "display": "6%"
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
      "id": "wls2_extention_stone_pricetoskip_3_common",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "割石机",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 4.0,
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
        "山岳前哨"
      ],
      "workbenches": [
        "割石机"
      ],
      "blueprints": [],
      "image_key": "93850f0ff7e501c2098e9532cfac2afa11f5a2392ecce6feb69cb14f51f70888",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 4.0,
            "display": "4%"
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
      "id": "wls2_extention_stone_pricetoskip_3_uncommon",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "割石机",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 6.0,
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
        "山岳前哨"
      ],
      "workbenches": [
        "割石机"
      ],
      "blueprints": [],
      "image_key": "48314ab3c71e3800f04d2efe04885f24443d649dfa71294f9bd2a9bb12d7c810",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 6.0,
            "display": "6%"
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
      "id": "wls2_extention_stone_timetocraft_3_common",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "割石机",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 4.0,
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
        "山岳前哨"
      ],
      "workbenches": [
        "割石机"
      ],
      "blueprints": [],
      "image_key": "194a79e35d64168bf0f3f6d185bbd72aa1c8fc13d25f1c3483f316736b980fa7",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 4.0,
            "display": "4%"
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
      "id": "wls2_extention_stone_timetocraft_3_uncommon",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "割石机",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 6.0,
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
        "山岳前哨"
      ],
      "workbenches": [
        "割石机"
      ],
      "blueprints": [],
      "image_key": "0c89940736d311752d87ab6d2d8de11e0704f6f8e61fa2ec9c494d90684fe39c",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 6.0,
            "display": "6%"
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
      "id": "wls2_extention_stone_levelup_3_common",
      "name": "镜头组",
      "name_en": "Lens Set",
      "name_source": "official_zh",
      "description": "有几率制作出高 1 级的物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "割石机",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "level_increment_chance",
          "label": "成品等级提升概率",
          "value": 4.0,
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
        "山岳前哨"
      ],
      "workbenches": [
        "割石机"
      ],
      "blueprints": [],
      "image_key": "d8512ea4a41a5888ec7c940f2d3ee64a7e27e008696bbd2715d9f9878d389bda",
      "numeric": {
        "summary": [
          {
            "key": "level_increment_chance",
            "label": "成品等级提升概率",
            "unit": "%",
            "value": 4.0,
            "display": "4%"
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
      "id": "wls2_extention_stone_levelup_3_uncommon",
      "name": "镜头组",
      "name_en": "Lens Set",
      "name_source": "official_zh",
      "description": "有几率制作出高 1 级的物品",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "割石机",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "level_increment_chance",
          "label": "成品等级提升概率",
          "value": 6.0,
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
        "山岳前哨"
      ],
      "workbenches": [
        "割石机"
      ],
      "blueprints": [],
      "image_key": "4d41940c34cf5ae21d8f5df2a9847ec603a5c1ee1fdc261b2fb9b815cc0c6d11",
      "numeric": {
        "summary": [
          {
            "key": "level_increment_chance",
            "label": "成品等级提升概率",
            "unit": "%",
            "value": 6.0,
            "display": "6%"
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
      "id": "wls2_extention_kitchen_pricetoskip_3_common",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "厨房",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 4.0,
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
        "山岳前哨"
      ],
      "workbenches": [
        "厨房"
      ],
      "blueprints": [],
      "image_key": "93850f0ff7e501c2098e9532cfac2afa11f5a2392ecce6feb69cb14f51f70888",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 4.0,
            "display": "4%"
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
      "id": "wls2_extention_kitchen_pricetoskip_3_uncommon",
      "name": "主发条",
      "name_en": "Mainspring",
      "name_source": "official_zh",
      "description": "降低加速花费",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "厨房",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "skip_time_price_reduction",
          "label": "加速制作费用降低",
          "value": 6.0,
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
        "山岳前哨"
      ],
      "workbenches": [
        "厨房"
      ],
      "blueprints": [],
      "image_key": "48314ab3c71e3800f04d2efe04885f24443d649dfa71294f9bd2a9bb12d7c810",
      "numeric": {
        "summary": [
          {
            "key": "skip_time_price_reduction",
            "label": "加速制作费用降低",
            "unit": "%",
            "value": 6.0,
            "display": "6%"
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
      "id": "wls2_extention_kitchen_timetocraft_3_common",
      "name": "转动装置",
      "name_en": "Wheelwork",
      "name_source": "official_zh",
      "description": "减少物品制作时间",
      "category": "augmentation",
      "category_label": "工作台插件",
      "subcategory": "厨房",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "craft_time_reduction",
          "label": "制作时间缩短",
          "value": 4.0,
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
        "山岳前哨"
      ],
      "workbenches": [
        "厨房"
      ],
      "blueprints": [],
      "image_key": "194a79e35d64168bf0f3f6d185bbd72aa1c8fc13d25f1c3483f316736b980fa7",
      "numeric": {
        "summary": [
          {
            "key": "craft_time_reduction",
            "label": "制作时间缩短",
            "unit": "%",
            "value": 4.0,
            "display": "4%"
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
