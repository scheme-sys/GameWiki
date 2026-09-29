/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-equipment-2"] = {
  "section": "equipment",
  "records": [
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 31,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 31,
        "description": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "name": "inventory_stack_view_wls2_armor_head_easter_2_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_2",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_easter_2",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "en": {
          "description": "Even the toughest cowboys sometimes need to have some fun.",
          "full_description": "Even the toughest cowboys sometimes need to have some fun.",
          "name": "Easter Cowboy Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "name_key": "inventory_stack_view_wls2_armor_head_easter_2_name",
        "zh": {
          "description": "最硬核的牛仔，有时也需要放松。",
          "full_description": "最硬核的牛仔，有时也需要放松。",
          "name": "复活节牛仔帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_cloth_2": 2,
                "wls2_resourse_secondary_leather_2": 4
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_easter_2"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_easter_2_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_easter_currency_egg": 200
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_easter_2",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_head_easter_2"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_easter_24_currency_egg": 200
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_easter_2",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter_22_trader_head_easter_2"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_2",
      "stat_curves": {
        "armor": {
          "1": 38,
          "2": 41,
          "3": 45,
          "4": 49,
          "5": 53,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 964,
          "2": 1060,
          "3": 1157,
          "4": 1252,
          "5": 1349
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "0d9d5950c6f1865699ac0f3dff15cf730eec2ce431709578b5e80ded7a78e016",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "复活节牛仔帽",
        "name_en": "Easter Cowboy Hat",
        "description_zh": "最硬核的牛仔，有时也需要放松。",
        "description_en": "Even the toughest cowboys sometimes need to have some fun.",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_head_easter_2 复活节牛仔帽 easter cowboy hat 最硬核的牛仔，有时也需要放松。 even the toughest cowboys sometimes need to have some fun. armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 38,
            "unit": "",
            "display": "38"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 964,
            "unit": "",
            "display": "964"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 38,
              "max_durability": 964
            },
            "display": {
              "armor": "38",
              "max_durability": "964"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 41,
              "max_durability": 1060
            },
            "display": {
              "armor": "41",
              "max_durability": "1060"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 45,
              "max_durability": 1157
            },
            "display": {
              "armor": "45",
              "max_durability": "1157"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 49,
              "max_durability": 1252
            },
            "display": {
              "armor": "49",
              "max_durability": "1252"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 53,
              "max_durability": 1349
            },
            "display": {
              "armor": "53",
              "max_durability": "1349"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 54,
              "max_durability": 1349
            },
            "display": {
              "armor": "54",
              "max_durability": "1349"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1053。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 33,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 33,
        "description": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "name": "inventory_stack_view_wls2_armor_head_easter_new_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_3",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_easter_2_new",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "en": {
          "description": "A festive hat for hunters who never miss a hidden egg",
          "full_description": "A festive hat for hunters who never miss a hidden egg",
          "name": "Egg Hunter hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "name_key": "inventory_stack_view_wls2_armor_head_easter_new_name",
        "zh": {
          "description": "一个节日的帽子给从不错过一个隐藏的蛋的猎人",
          "full_description": "一个节日的帽子给从不错过一个隐藏的蛋的猎人",
          "name": "蛋猎人帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_2": 2,
                "wls2_resourse_secondary_leather_2": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_easter_2_new"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_easter_2_new_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_3",
      "stat_curves": {
        "armor": {
          "1": 30,
          "2": 33,
          "3": 35,
          "4": 38,
          "5": 41,
          "per_level_after_max": 1
        },
        "dexterity": {
          "1": 2
        },
        "max_durability": {
          "1": 532,
          "2": 580,
          "3": 628,
          "4": 677,
          "5": 725
        },
        "stamina": {
          "1": 2
        },
        "strength": {
          "1": 2
        },
        "wisdom": {
          "1": 2
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "stamina": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_resistance",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_resistance",
          "en": "Defense",
          "zh": "防御"
        },
        "strength": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_strength",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_strength",
          "en": "Damage",
          "zh": "伤害"
        },
        "wisdom": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_wisdom",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_wisdom",
          "en": "Spirit",
          "zh": "精神"
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 2,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "599bf24e23a724057f8254ff6171ad2dbd1cbc7994c818bbf6c384a9654b8f32",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "蛋猎人帽",
        "name_en": "Egg Hunter hat",
        "description_zh": "一个节日的帽子给从不错过一个隐藏的蛋的猎人",
        "description_en": "A festive hat for hunters who never miss a hidden egg",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_head_easter_2_new 蛋猎人帽 egg hunter hat 一个节日的帽子给从不错过一个隐藏的蛋的猎人 a festive hat for hunters who never miss a hidden egg armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 30,
            "unit": "",
            "display": "30"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 532,
            "unit": "",
            "display": "532"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 2,
            "unit": "",
            "display": "+2"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": 2,
            "unit": "",
            "display": "+2"
          }
        ],
        "fixed": [
          {
            "key": "stamina",
            "label": "防御加成",
            "value": 2,
            "unit": "",
            "display": "+2"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": 2,
            "unit": "",
            "display": "+2"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 30,
              "max_durability": 532
            },
            "display": {
              "armor": "30",
              "max_durability": "532"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 33,
              "max_durability": 580
            },
            "display": {
              "armor": "33",
              "max_durability": "580"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 35,
              "max_durability": 628
            },
            "display": {
              "armor": "35",
              "max_durability": "628"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 38,
              "max_durability": 677
            },
            "display": {
              "armor": "38",
              "max_durability": "677"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 41,
              "max_durability": 725
            },
            "display": {
              "armor": "41",
              "max_durability": "725"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 42,
              "max_durability": 725
            },
            "display": {
              "armor": "42",
              "max_durability": "725"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1041。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 31,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 31,
        "description": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "name": "inventory_stack_view_wls2_armor_head_easter_2_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_2",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_easter_2_t4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "en": {
          "description": "Even the toughest cowboys sometimes need to have some fun.",
          "full_description": "Even the toughest cowboys sometimes need to have some fun.",
          "name": "Easter Cowboy Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "name_key": "inventory_stack_view_wls2_armor_head_easter_2_name",
        "zh": {
          "description": "最硬核的牛仔，有时也需要放松。",
          "full_description": "最硬核的牛仔，有时也需要放松。",
          "name": "复活节牛仔帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_cloth_3": 2,
                "wls2_resourse_secondary_leather_3": 4
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_easter_2_t4"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_easter_2_t4_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_2",
      "stat_curves": {
        "armor": {
          "1": 75,
          "2": 83,
          "3": 90,
          "4": 98,
          "5": 105,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1
        },
        "max_durability": {
          "1": 2366,
          "2": 2602,
          "3": 2839,
          "4": 3075,
          "5": 3312
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "0d9d5950c6f1865699ac0f3dff15cf730eec2ce431709578b5e80ded7a78e016",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "复活节牛仔帽",
        "name_en": "Easter Cowboy Hat",
        "description_zh": "最硬核的牛仔，有时也需要放松。",
        "description_en": "Even the toughest cowboys sometimes need to have some fun.",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_head_easter_2_t4 复活节牛仔帽 easter cowboy hat 最硬核的牛仔，有时也需要放松。 even the toughest cowboys sometimes need to have some fun. armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 75,
            "unit": "",
            "display": "75"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 2366,
            "unit": "",
            "display": "2366"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 1,
            "unit": "",
            "display": "1"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 75,
              "max_durability": 2366
            },
            "display": {
              "armor": "75",
              "max_durability": "2366"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 83,
              "max_durability": 2602
            },
            "display": {
              "armor": "83",
              "max_durability": "2602"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 90,
              "max_durability": 2839
            },
            "display": {
              "armor": "90",
              "max_durability": "2839"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 98,
              "max_durability": 3075
            },
            "display": {
              "armor": "98",
              "max_durability": "3075"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 105,
              "max_durability": 3312
            },
            "display": {
              "armor": "105",
              "max_durability": "3312"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 106,
              "max_durability": 3312
            },
            "display": {
              "armor": "106",
              "max_durability": "3312"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1105。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 31,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 31,
        "description": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "name": "inventory_stack_view_wls2_armor_head_easter_2_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_2",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_easter_2_t5",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "en": {
          "description": "Even the toughest cowboys sometimes need to have some fun.",
          "full_description": "Even the toughest cowboys sometimes need to have some fun.",
          "name": "Easter Cowboy Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "name_key": "inventory_stack_view_wls2_armor_head_easter_2_name",
        "zh": {
          "description": "最硬核的牛仔，有时也需要放松。",
          "full_description": "最硬核的牛仔，有时也需要放松。",
          "name": "复活节牛仔帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_cloth_4": 2,
                "wls2_resourse_secondary_leather_4": 4
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_easter_2_t5"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_easter_2_t5_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_2",
      "stat_curves": {
        "armor": {
          "1": 162,
          "2": 178,
          "3": 194,
          "4": 211,
          "5": 227,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "max_durability": {
          "1": 7840,
          "2": 8624,
          "3": 9408,
          "4": 10192,
          "5": 10976
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 5,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "0d9d5950c6f1865699ac0f3dff15cf730eec2ce431709578b5e80ded7a78e016",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "复活节牛仔帽",
        "name_en": "Easter Cowboy Hat",
        "description_zh": "最硬核的牛仔，有时也需要放松。",
        "description_en": "Even the toughest cowboys sometimes need to have some fun.",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_head_easter_2_t5 复活节牛仔帽 easter cowboy hat 最硬核的牛仔，有时也需要放松。 even the toughest cowboys sometimes need to have some fun. armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 162,
            "unit": "",
            "display": "162"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 7840,
            "unit": "",
            "display": "7840"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 162,
              "max_durability": 7840
            },
            "display": {
              "armor": "162",
              "max_durability": "7840"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 178,
              "max_durability": 8624
            },
            "display": {
              "armor": "178",
              "max_durability": "8624"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 194,
              "max_durability": 9408
            },
            "display": {
              "armor": "194",
              "max_durability": "9408"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 211,
              "max_durability": 10192
            },
            "display": {
              "armor": "211",
              "max_durability": "10192"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 227,
              "max_durability": 10976
            },
            "display": {
              "armor": "227",
              "max_durability": "10976"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 228,
              "max_durability": 10976
            },
            "display": {
              "armor": "228",
              "max_durability": "10976"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1227。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 31,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 31,
        "description": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "name": "inventory_stack_view_wls2_armor_head_easter_2_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_2",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_easter_2_t6",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "en": {
          "description": "Even the toughest cowboys sometimes need to have some fun.",
          "full_description": "Even the toughest cowboys sometimes need to have some fun.",
          "name": "Easter Cowboy Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "name_key": "inventory_stack_view_wls2_armor_head_easter_2_name",
        "zh": {
          "description": "最硬核的牛仔，有时也需要放松。",
          "full_description": "最硬核的牛仔，有时也需要放松。",
          "name": "复活节牛仔帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_cloth_5": 2,
                "wls2_resourse_secondary_leather_5": 4
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_easter_2_t6"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_easter_2_t6_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_2",
      "stat_curves": {
        "armor": {
          "1": 300,
          "2": 330,
          "3": 360,
          "4": 390,
          "5": 420,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0
        },
        "max_durability": {
          "1": 14112,
          "2": 15523,
          "3": 16934,
          "4": 18346,
          "5": 19757
        },
        "warm_modifier": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 6,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "0d9d5950c6f1865699ac0f3dff15cf730eec2ce431709578b5e80ded7a78e016",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "复活节牛仔帽",
        "name_en": "Easter Cowboy Hat",
        "description_zh": "最硬核的牛仔，有时也需要放松。",
        "description_en": "Even the toughest cowboys sometimes need to have some fun.",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_head_easter_2_t6 复活节牛仔帽 easter cowboy hat 最硬核的牛仔，有时也需要放松。 even the toughest cowboys sometimes need to have some fun. armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 300,
            "unit": "",
            "display": "300"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 14112,
            "unit": "",
            "display": "14112"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 0,
            "unit": "",
            "display": "0"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 300,
              "max_durability": 14112
            },
            "display": {
              "armor": "300",
              "max_durability": "14112"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 330,
              "max_durability": 15523
            },
            "display": {
              "armor": "330",
              "max_durability": "15523"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 360,
              "max_durability": 16934
            },
            "display": {
              "armor": "360",
              "max_durability": "16934"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 390,
              "max_durability": 18346
            },
            "display": {
              "armor": "390",
              "max_durability": "18346"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 420,
              "max_durability": 19757
            },
            "display": {
              "armor": "420",
              "max_durability": "19757"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 421,
              "max_durability": 19757
            },
            "display": {
              "armor": "421",
              "max_durability": "19757"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1420。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 31,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 31,
        "description": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "name": "inventory_stack_view_wls2_armor_head_easter_2_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_2",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_easter_2_t7",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "en": {
          "description": "Even the toughest cowboys sometimes need to have some fun.",
          "full_description": "Even the toughest cowboys sometimes need to have some fun.",
          "name": "Easter Cowboy Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_easter_2_description",
        "name_key": "inventory_stack_view_wls2_armor_head_easter_2_name",
        "zh": {
          "description": "最硬核的牛仔，有时也需要放松。",
          "full_description": "最硬核的牛仔，有时也需要放松。",
          "name": "复活节牛仔帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_cloth_6": 2,
                "wls2_resourse_secondary_leather_6": 4
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_easter_2_t7"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_easter_2_t7_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_2",
      "stat_curves": {
        "armor": {
          "1": 300,
          "2": 330,
          "3": 360,
          "4": 390,
          "5": 420,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1
        },
        "max_durability": {
          "1": 25402,
          "2": 27942,
          "3": 30482,
          "4": 33023,
          "5": 35563
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 7,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "0d9d5950c6f1865699ac0f3dff15cf730eec2ce431709578b5e80ded7a78e016",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "复活节牛仔帽",
        "name_en": "Easter Cowboy Hat",
        "description_zh": "最硬核的牛仔，有时也需要放松。",
        "description_en": "Even the toughest cowboys sometimes need to have some fun.",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_head_easter_2_t7 复活节牛仔帽 easter cowboy hat 最硬核的牛仔，有时也需要放松。 even the toughest cowboys sometimes need to have some fun. armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 300,
            "unit": "",
            "display": "300"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 25402,
            "unit": "",
            "display": "25402"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 1,
            "unit": "",
            "display": "1"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 300,
              "max_durability": 25402
            },
            "display": {
              "armor": "300",
              "max_durability": "25402"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 330,
              "max_durability": 27942
            },
            "display": {
              "armor": "330",
              "max_durability": "27942"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 360,
              "max_durability": 30482
            },
            "display": {
              "armor": "360",
              "max_durability": "30482"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 390,
              "max_durability": 33023
            },
            "display": {
              "armor": "390",
              "max_durability": "33023"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 420,
              "max_durability": 35563
            },
            "display": {
              "armor": "420",
              "max_durability": "35563"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 421,
              "max_durability": 35563
            },
            "display": {
              "armor": "421",
              "max_durability": "35563"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1420。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 33,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 33,
        "description": "inventory_stack_view_wls2_armor_head_easter_3_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_easter_3_description",
        "name": "inventory_stack_view_wls2_armor_head_easter_3_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_3",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_easter_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_easter_3_description",
        "en": {
          "description": "Provides a decent appearance for a festive Easter tea party.",
          "full_description": "Provides a decent appearance for a festive Easter tea party.",
          "name": "Fred Hatter's Top Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_easter_3_description",
        "name_key": "inventory_stack_view_wls2_armor_head_easter_3_name",
        "zh": {
          "description": "适合戴着它参加复活节茶会。",
          "full_description": "适合戴着它参加复活节茶会。",
          "name": "弗雷德·哈特的高顶礼帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_cloth_3": 4,
                "wls2_resourse_secondary_leather_3": 4
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_easter_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_easter_3_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_easter_currency_egg": 1500
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_easter_3",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_easter_top_hat"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_easter_24_currency_egg": 1000
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_easter_3",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter_22_trader_head_easter_3"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_3",
      "stat_curves": {
        "armor": {
          "1": 180,
          "2": 198,
          "3": 216,
          "4": 234,
          "5": 252,
          "per_level_after_max": 1
        },
        "dexterity": {
          "1": 1,
          "2": 3,
          "3": 5,
          "4": 7,
          "5": 9
        },
        "evasion": {
          "1": 0.06,
          "2": 0.08,
          "3": 0.1,
          "4": 0.12,
          "5": 0.14
        },
        "max_durability": {
          "1": 6958,
          "2": 7654,
          "3": 8350,
          "4": 9045,
          "5": 9741
        },
        "reduced_detection_radius": {
          "1": 0.06,
          "2": 0.08,
          "3": 0.1,
          "4": 0.12,
          "5": 0.14
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "evasion": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_evasion",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_percent_format"
          },
          "display_key": "ui_item_stats_evasion",
          "en": "Dodge chance {0}",
          "zh": "躲避几率 {0}"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "reduced_detection_radius": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_reduced_detection_radius_v2",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_percent_format"
          },
          "display_key": "ui_item_stats_reduced_detection_radius_v2",
          "en": "Stealth {0}",
          "zh": "潜行 {0}"
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "599bf24e23a724057f8254ff6171ad2dbd1cbc7994c818bbf6c384a9654b8f32",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "弗雷德·哈特的高顶礼帽",
        "name_en": "Fred Hatter's Top Hat",
        "description_zh": "适合戴着它参加复活节茶会。",
        "description_en": "Provides a decent appearance for a festive Easter tea party.",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_head_easter_3 弗雷德·哈特的高顶礼帽 fred hatter's top hat 适合戴着它参加复活节茶会。 provides a decent appearance for a festive easter tea party. armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 180,
            "unit": "",
            "display": "180"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 6958,
            "unit": "",
            "display": "6958"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          },
          {
            "key": "evasion",
            "label": "闪避率",
            "value": 0.06,
            "unit": "%",
            "display": "+6%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 180,
              "dexterity": 1,
              "evasion": 0.06,
              "max_durability": 6958,
              "reduced_detection_radius": 0.06
            },
            "display": {
              "armor": "180",
              "dexterity": "+1",
              "evasion": "+6%",
              "max_durability": "6958",
              "reduced_detection_radius": "+6%"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 198,
              "dexterity": 3,
              "evasion": 0.08,
              "max_durability": 7654,
              "reduced_detection_radius": 0.08
            },
            "display": {
              "armor": "198",
              "dexterity": "+3",
              "evasion": "+8%",
              "max_durability": "7654",
              "reduced_detection_radius": "+8%"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 216,
              "dexterity": 5,
              "evasion": 0.1,
              "max_durability": 8350,
              "reduced_detection_radius": 0.1
            },
            "display": {
              "armor": "216",
              "dexterity": "+5",
              "evasion": "+10%",
              "max_durability": "8350",
              "reduced_detection_radius": "+10%"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 234,
              "dexterity": 7,
              "evasion": 0.12,
              "max_durability": 9045,
              "reduced_detection_radius": 0.12
            },
            "display": {
              "armor": "234",
              "dexterity": "+7",
              "evasion": "+12%",
              "max_durability": "9045",
              "reduced_detection_radius": "+12%"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 252,
              "dexterity": 9,
              "evasion": 0.14,
              "max_durability": 9741,
              "reduced_detection_radius": 0.14
            },
            "display": {
              "armor": "252",
              "dexterity": "+9",
              "evasion": "+14%",
              "max_durability": "9741",
              "reduced_detection_radius": "+14%"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 253,
              "dexterity": 9,
              "evasion": 0.14,
              "max_durability": 9741,
              "reduced_detection_radius": 0.14
            },
            "display": {
              "armor": "253",
              "dexterity": "+9",
              "evasion": "+14%",
              "max_durability": "9741",
              "reduced_detection_radius": "+14%"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "evasion",
            "label": "闪避率",
            "unit": "%"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          },
          {
            "key": "reduced_detection_radius",
            "label": "隐蔽加成",
            "unit": "%"
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1252。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 33,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 33,
        "description": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "name": "inventory_stack_view_wls2_armor_head_easter_new_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_3",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_easter_3_new",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "en": {
          "description": "A festive hat for hunters who never miss a hidden egg",
          "full_description": "A festive hat for hunters who never miss a hidden egg",
          "name": "Egg Hunter hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "name_key": "inventory_stack_view_wls2_armor_head_easter_new_name",
        "zh": {
          "description": "一个节日的帽子给从不错过一个隐藏的蛋的猎人",
          "full_description": "一个节日的帽子给从不错过一个隐藏的蛋的猎人",
          "name": "蛋猎人帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_3": 2,
                "wls2_resourse_secondary_leather_3": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_easter_3_new"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_easter_3_new_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_3",
      "stat_curves": {
        "armor": {
          "1": 68,
          "2": 74,
          "3": 81,
          "4": 88,
          "5": 95,
          "per_level_after_max": 1
        },
        "dexterity": {
          "1": 3
        },
        "max_durability": {
          "1": 1330,
          "2": 1460,
          "3": 1590,
          "4": 1720,
          "5": 1850
        },
        "stamina": {
          "1": 3
        },
        "strength": {
          "1": 3
        },
        "wisdom": {
          "1": 3
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "stamina": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_resistance",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_resistance",
          "en": "Defense",
          "zh": "防御"
        },
        "strength": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_strength",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_strength",
          "en": "Damage",
          "zh": "伤害"
        },
        "wisdom": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_wisdom",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_wisdom",
          "en": "Spirit",
          "zh": "精神"
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "599bf24e23a724057f8254ff6171ad2dbd1cbc7994c818bbf6c384a9654b8f32",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "蛋猎人帽",
        "name_en": "Egg Hunter hat",
        "description_zh": "一个节日的帽子给从不错过一个隐藏的蛋的猎人",
        "description_en": "A festive hat for hunters who never miss a hidden egg",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_head_easter_3_new 蛋猎人帽 egg hunter hat 一个节日的帽子给从不错过一个隐藏的蛋的猎人 a festive hat for hunters who never miss a hidden egg armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 68,
            "unit": "",
            "display": "68"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 1330,
            "unit": "",
            "display": "1330"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 3,
            "unit": "",
            "display": "+3"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": 3,
            "unit": "",
            "display": "+3"
          }
        ],
        "fixed": [
          {
            "key": "stamina",
            "label": "防御加成",
            "value": 3,
            "unit": "",
            "display": "+3"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": 3,
            "unit": "",
            "display": "+3"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 68,
              "max_durability": 1330
            },
            "display": {
              "armor": "68",
              "max_durability": "1330"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 74,
              "max_durability": 1460
            },
            "display": {
              "armor": "74",
              "max_durability": "1460"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 81,
              "max_durability": 1590
            },
            "display": {
              "armor": "81",
              "max_durability": "1590"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 88,
              "max_durability": 1720
            },
            "display": {
              "armor": "88",
              "max_durability": "1720"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 95,
              "max_durability": 1850
            },
            "display": {
              "armor": "95",
              "max_durability": "1850"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 96,
              "max_durability": 1850
            },
            "display": {
              "armor": "96",
              "max_durability": "1850"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1095。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 33,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 33,
        "description": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "name": "inventory_stack_view_wls2_armor_head_easter_new_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_3",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_easter_4_new",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "en": {
          "description": "A festive hat for hunters who never miss a hidden egg",
          "full_description": "A festive hat for hunters who never miss a hidden egg",
          "name": "Egg Hunter hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "name_key": "inventory_stack_view_wls2_armor_head_easter_new_name",
        "zh": {
          "description": "一个节日的帽子给从不错过一个隐藏的蛋的猎人",
          "full_description": "一个节日的帽子给从不错过一个隐藏的蛋的猎人",
          "name": "蛋猎人帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_leather_4": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_easter_4_new"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_easter_4_new_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_3",
      "stat_curves": {
        "armor": {
          "1": 135,
          "2": 149,
          "3": 162,
          "4": 176,
          "5": 189,
          "per_level_after_max": 1
        },
        "dexterity": {
          "1": 4
        },
        "max_durability": {
          "1": 4820,
          "2": 5305,
          "3": 5800,
          "4": 6270,
          "5": 6750
        },
        "stamina": {
          "1": 4
        },
        "strength": {
          "1": 4
        },
        "wisdom": {
          "1": 4
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "stamina": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_resistance",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_resistance",
          "en": "Defense",
          "zh": "防御"
        },
        "strength": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_strength",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_strength",
          "en": "Damage",
          "zh": "伤害"
        },
        "wisdom": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_wisdom",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_wisdom",
          "en": "Spirit",
          "zh": "精神"
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "599bf24e23a724057f8254ff6171ad2dbd1cbc7994c818bbf6c384a9654b8f32",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "蛋猎人帽",
        "name_en": "Egg Hunter hat",
        "description_zh": "一个节日的帽子给从不错过一个隐藏的蛋的猎人",
        "description_en": "A festive hat for hunters who never miss a hidden egg",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_head_easter_4_new 蛋猎人帽 egg hunter hat 一个节日的帽子给从不错过一个隐藏的蛋的猎人 a festive hat for hunters who never miss a hidden egg armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 135,
            "unit": "",
            "display": "135"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 4820,
            "unit": "",
            "display": "4820"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 4,
            "unit": "",
            "display": "+4"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": 4,
            "unit": "",
            "display": "+4"
          }
        ],
        "fixed": [
          {
            "key": "stamina",
            "label": "防御加成",
            "value": 4,
            "unit": "",
            "display": "+4"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": 4,
            "unit": "",
            "display": "+4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 135,
              "max_durability": 4820
            },
            "display": {
              "armor": "135",
              "max_durability": "4820"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 149,
              "max_durability": 5305
            },
            "display": {
              "armor": "149",
              "max_durability": "5305"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 162,
              "max_durability": 5800
            },
            "display": {
              "armor": "162",
              "max_durability": "5800"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 176,
              "max_durability": 6270
            },
            "display": {
              "armor": "176",
              "max_durability": "6270"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 189,
              "max_durability": 6750
            },
            "display": {
              "armor": "189",
              "max_durability": "6750"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 190,
              "max_durability": 6750
            },
            "display": {
              "armor": "190",
              "max_durability": "6750"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1189。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 33,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 33,
        "description": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "name": "inventory_stack_view_wls2_armor_head_easter_new_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_3",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_easter_5_new",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "en": {
          "description": "A festive hat for hunters who never miss a hidden egg",
          "full_description": "A festive hat for hunters who never miss a hidden egg",
          "name": "Egg Hunter hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "name_key": "inventory_stack_view_wls2_armor_head_easter_new_name",
        "zh": {
          "description": "一个节日的帽子给从不错过一个隐藏的蛋的猎人",
          "full_description": "一个节日的帽子给从不错过一个隐藏的蛋的猎人",
          "name": "蛋猎人帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_5": 2,
                "wls2_resourse_secondary_leather_5": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_easter_5_new"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_easter_5_new_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_3",
      "stat_curves": {
        "armor": {
          "1": 228,
          "2": 251,
          "3": 274,
          "4": 296,
          "5": 319,
          "per_level_after_max": 1
        },
        "dexterity": {
          "1": 5
        },
        "max_durability": {
          "1": 14000,
          "2": 15400,
          "3": 16800,
          "4": 18200,
          "5": 19560
        },
        "stamina": {
          "1": 5
        },
        "strength": {
          "1": 5
        },
        "wisdom": {
          "1": 5
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "stamina": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_resistance",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_resistance",
          "en": "Defense",
          "zh": "防御"
        },
        "strength": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_strength",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_strength",
          "en": "Damage",
          "zh": "伤害"
        },
        "wisdom": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_wisdom",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_wisdom",
          "en": "Spirit",
          "zh": "精神"
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 5,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "599bf24e23a724057f8254ff6171ad2dbd1cbc7994c818bbf6c384a9654b8f32",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "蛋猎人帽",
        "name_en": "Egg Hunter hat",
        "description_zh": "一个节日的帽子给从不错过一个隐藏的蛋的猎人",
        "description_en": "A festive hat for hunters who never miss a hidden egg",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_head_easter_5_new 蛋猎人帽 egg hunter hat 一个节日的帽子给从不错过一个隐藏的蛋的猎人 a festive hat for hunters who never miss a hidden egg armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 228,
            "unit": "",
            "display": "228"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 14000,
            "unit": "",
            "display": "14000"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 5,
            "unit": "",
            "display": "+5"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": 5,
            "unit": "",
            "display": "+5"
          }
        ],
        "fixed": [
          {
            "key": "stamina",
            "label": "防御加成",
            "value": 5,
            "unit": "",
            "display": "+5"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": 5,
            "unit": "",
            "display": "+5"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 228,
              "max_durability": 14000
            },
            "display": {
              "armor": "228",
              "max_durability": "14000"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 251,
              "max_durability": 15400
            },
            "display": {
              "armor": "251",
              "max_durability": "15400"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 274,
              "max_durability": 16800
            },
            "display": {
              "armor": "274",
              "max_durability": "16800"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 296,
              "max_durability": 18200
            },
            "display": {
              "armor": "296",
              "max_durability": "18200"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 319,
              "max_durability": 19560
            },
            "display": {
              "armor": "319",
              "max_durability": "19560"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 320,
              "max_durability": 19560
            },
            "display": {
              "armor": "320",
              "max_durability": "19560"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1319。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 33,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 33,
        "description": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "name": "inventory_stack_view_wls2_armor_head_easter_new_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_3",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_easter_6_new",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "en": {
          "description": "A festive hat for hunters who never miss a hidden egg",
          "full_description": "A festive hat for hunters who never miss a hidden egg",
          "name": "Egg Hunter hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "name_key": "inventory_stack_view_wls2_armor_head_easter_new_name",
        "zh": {
          "description": "一个节日的帽子给从不错过一个隐藏的蛋的猎人",
          "full_description": "一个节日的帽子给从不错过一个隐藏的蛋的猎人",
          "name": "蛋猎人帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_6": 2,
                "wls2_resourse_secondary_leather_6": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_easter_6_new"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_easter_6_new_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_3",
      "stat_curves": {
        "armor": {
          "1": 540,
          "2": 594,
          "3": 648,
          "4": 702,
          "5": 756,
          "per_level_after_max": 1
        },
        "dexterity": {
          "1": 6
        },
        "max_durability": {
          "1": 25250,
          "2": 27750,
          "3": 30300,
          "4": 32800,
          "5": 35350
        },
        "stamina": {
          "1": 6
        },
        "strength": {
          "1": 6
        },
        "wisdom": {
          "1": 6
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "stamina": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_resistance",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_resistance",
          "en": "Defense",
          "zh": "防御"
        },
        "strength": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_strength",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_strength",
          "en": "Damage",
          "zh": "伤害"
        },
        "wisdom": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_wisdom",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_wisdom",
          "en": "Spirit",
          "zh": "精神"
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 6,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "599bf24e23a724057f8254ff6171ad2dbd1cbc7994c818bbf6c384a9654b8f32",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "蛋猎人帽",
        "name_en": "Egg Hunter hat",
        "description_zh": "一个节日的帽子给从不错过一个隐藏的蛋的猎人",
        "description_en": "A festive hat for hunters who never miss a hidden egg",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_head_easter_6_new 蛋猎人帽 egg hunter hat 一个节日的帽子给从不错过一个隐藏的蛋的猎人 a festive hat for hunters who never miss a hidden egg armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 540,
            "unit": "",
            "display": "540"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 25250,
            "unit": "",
            "display": "25250"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 6,
            "unit": "",
            "display": "+6"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": 6,
            "unit": "",
            "display": "+6"
          }
        ],
        "fixed": [
          {
            "key": "stamina",
            "label": "防御加成",
            "value": 6,
            "unit": "",
            "display": "+6"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": 6,
            "unit": "",
            "display": "+6"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 540,
              "max_durability": 25250
            },
            "display": {
              "armor": "540",
              "max_durability": "25250"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 594,
              "max_durability": 27750
            },
            "display": {
              "armor": "594",
              "max_durability": "27750"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 648,
              "max_durability": 30300
            },
            "display": {
              "armor": "648",
              "max_durability": "30300"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 702,
              "max_durability": 32800
            },
            "display": {
              "armor": "702",
              "max_durability": "32800"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 756,
              "max_durability": 35350
            },
            "display": {
              "armor": "756",
              "max_durability": "35350"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 757,
              "max_durability": 35350
            },
            "display": {
              "armor": "757",
              "max_durability": "35350"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1756。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 33,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 33,
        "description": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "name": "inventory_stack_view_wls2_armor_head_easter_new_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_3",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_easter_7_new",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "en": {
          "description": "A festive hat for hunters who never miss a hidden egg",
          "full_description": "A festive hat for hunters who never miss a hidden egg",
          "name": "Egg Hunter hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_easter_new_description",
        "name_key": "inventory_stack_view_wls2_armor_head_easter_new_name",
        "zh": {
          "description": "一个节日的帽子给从不错过一个隐藏的蛋的猎人",
          "full_description": "一个节日的帽子给从不错过一个隐藏的蛋的猎人",
          "name": "蛋猎人帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_7": 2,
                "wls2_resourse_secondary_leather_7": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_easter_7_new"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_easter_7_new_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_3",
      "stat_curves": {
        "armor": {
          "1": 1080,
          "2": 1188,
          "3": 1296,
          "4": 1404,
          "5": 1512,
          "per_level_after_max": 1
        },
        "dexterity": {
          "1": 7
        },
        "max_durability": {
          "1": 45950,
          "2": 50500,
          "3": 55150,
          "4": 59700,
          "5": 64300
        },
        "stamina": {
          "1": 7
        },
        "strength": {
          "1": 7
        },
        "wisdom": {
          "1": 7
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "stamina": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_resistance",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_resistance",
          "en": "Defense",
          "zh": "防御"
        },
        "strength": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_strength",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_strength",
          "en": "Damage",
          "zh": "伤害"
        },
        "wisdom": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_wisdom",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_wisdom",
          "en": "Spirit",
          "zh": "精神"
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 7,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "599bf24e23a724057f8254ff6171ad2dbd1cbc7994c818bbf6c384a9654b8f32",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "蛋猎人帽",
        "name_en": "Egg Hunter hat",
        "description_zh": "一个节日的帽子给从不错过一个隐藏的蛋的猎人",
        "description_en": "A festive hat for hunters who never miss a hidden egg",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_head_easter_7_new 蛋猎人帽 egg hunter hat 一个节日的帽子给从不错过一个隐藏的蛋的猎人 a festive hat for hunters who never miss a hidden egg armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 1080,
            "unit": "",
            "display": "1080"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 45950,
            "unit": "",
            "display": "45950"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 7,
            "unit": "",
            "display": "+7"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": 7,
            "unit": "",
            "display": "+7"
          }
        ],
        "fixed": [
          {
            "key": "stamina",
            "label": "防御加成",
            "value": 7,
            "unit": "",
            "display": "+7"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": 7,
            "unit": "",
            "display": "+7"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 1080,
              "max_durability": 45950
            },
            "display": {
              "armor": "1080",
              "max_durability": "45950"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 1188,
              "max_durability": 50500
            },
            "display": {
              "armor": "1188",
              "max_durability": "50500"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1296,
              "max_durability": 55150
            },
            "display": {
              "armor": "1296",
              "max_durability": "55150"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1404,
              "max_durability": 59700
            },
            "display": {
              "armor": "1404",
              "max_durability": "59700"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1512,
              "max_durability": 64300
            },
            "display": {
              "armor": "1512",
              "max_durability": "64300"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1513,
              "max_durability": 64300
            },
            "display": {
              "armor": "1513",
              "max_durability": "64300"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 2512。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 11,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 11,
        "description": "inventory_stack_view_wls2_armor_head_fbo_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_fbo_epic_description",
        "name": "inventory_stack_view_wls2_armor_head_fbo_epic_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_fbo_epic",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_fbo_2_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_fbo_epic_description",
        "en": {
          "description": "Protect eyes from the sun and head from stray bullets",
          "full_description": "Protect eyes from the sun and head from stray bullets",
          "name": "Nameless Hero Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_fbo_epic_description",
        "name_key": "inventory_stack_view_wls2_armor_head_fbo_epic_name",
        "zh": {
          "description": "保护眼睛不受头顶的烈阳和飞来的子弹的伤害",
          "full_description": "保护眼睛不受头顶的烈阳和飞来的子弹的伤害",
          "name": "无名英雄帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_cloth_2": 4,
                "wls2_resourse_secondary_leather_2": 4
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_fbo_2_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_fbo_2_rare_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_fbo_epic",
      "stat_curves": {
        "armor": {
          "default": 40
        },
        "dexterity": {
          "default": 3
        },
        "max_durability": {
          "default": 320
        },
        "warm_modifier": {
          "default": 1
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 2,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "3fa93dc1a6de70901c11d00bc81fda18dfd18e523702280a92f96fb684cd81d1",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "无名英雄帽子",
        "name_en": "Nameless Hero Hat",
        "description_zh": "保护眼睛不受头顶的烈阳和飞来的子弹的伤害",
        "description_en": "Protect eyes from the sun and head from stray bullets",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_head_fbo_2_rare 无名英雄帽子 nameless hero hat 保护眼睛不受头顶的烈阳和飞来的子弹的伤害 protect eyes from the sun and head from stray bullets armor 护甲 head head armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 40,
            "unit": "",
            "display": "40"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 320,
            "unit": "",
            "display": "320"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 3,
            "unit": "",
            "display": "+3"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 9,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 9,
        "description": "inventory_stack_view_wls2_armor_head_rare_t4_lvl5_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_rare_t4_lvl5_description",
        "name": "inventory_stack_view_wls2_armor_head_rare_t4_lvl5_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls2_armor_head_upgrade_4_icon",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_rare_t4_lvl5",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_rare_t4_lvl5_description",
        "en": {
          "description": "Wide-brimmed hat. Simple and elegant",
          "full_description": "Wide-brimmed hat. Simple and elegant",
          "name": "Gentleman hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_rare_t4_lvl5_description",
        "name_key": "inventory_stack_view_wls2_armor_head_rare_t4_lvl5_name",
        "zh": {
          "description": "宽边帽，简约且优雅。",
          "full_description": "宽边帽，简约且优雅。",
          "name": "绅士帽"
        }
      },
      "official_inclusion_status": "special_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_head_upgrade_4_icon",
      "stat_curves": {
        "armor": {
          "default": 120
        },
        "max_durability": {
          "default": 125
        },
        "warm_modifier": {
          "default": 0.75
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "337a57730d601b4dbf938a8bc43abd56814c715812e0e648977b1acd4fc67c08",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "绅士帽",
        "name_en": "Gentleman hat",
        "description_zh": "宽边帽，简约且优雅。",
        "description_en": "Wide-brimmed hat. Simple and elegant",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_head_rare_t4_lvl5 绅士帽 gentleman hat 宽边帽，简约且优雅。 wide-brimmed hat. simple and elegant armor 护甲 head head armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 120,
            "unit": "",
            "display": "120"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 125,
            "unit": "",
            "display": "125"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.75,
            "unit": "",
            "display": "0.75"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 8,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 8,
        "description": "inventory_stack_view_wls2_armor_head_uncommon_t4_lvl4_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_uncommon_t4_lvl4_description",
        "name": "inventory_stack_view_wls2_armor_head_uncommon_t4_lvl4_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls2_armor_head_4_icon",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_uncommon_t4_lvl4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_uncommon_t4_lvl4_description",
        "en": {
          "description": "Classy hat for a true cowboy",
          "full_description": "Classy hat for a true cowboy",
          "name": "Stetson"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_uncommon_t4_lvl4_description",
        "name_key": "inventory_stack_view_wls2_armor_head_uncommon_t4_lvl4_name",
        "zh": {
          "description": "真正的牛仔都喜欢的漂亮帽子。",
          "full_description": "真正的牛仔都喜欢的漂亮帽子。",
          "name": "牛仔帽"
        }
      },
      "official_inclusion_status": "special_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_head_4_icon",
      "stat_curves": {
        "armor": {
          "default": 90
        },
        "max_durability": {
          "default": 62.5
        },
        "warm_modifier": {
          "default": 0.5
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "78b552fedb1d583af199c65d0a3ebfbe5aedaccdaf2082c060551e1c81462a78",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "牛仔帽",
        "name_en": "Stetson",
        "description_zh": "真正的牛仔都喜欢的漂亮帽子。",
        "description_en": "Classy hat for a true cowboy",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_head_uncommon_t4_lvl4 牛仔帽 stetson 真正的牛仔都喜欢的漂亮帽子。 classy hat for a true cowboy armor 护甲 head head armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 90,
            "unit": "",
            "display": "90"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 62.5,
            "unit": "",
            "display": "62.5"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 4,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 4,
        "description": "inventory_stack_view_wls_clothes_strong_leather_hat_2.5_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_strong_leather_hat_2.5_description",
        "name": "inventory_stack_view_wls_clothes_strong_leather_hat_2.5_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_strong_leather_hat_2.5",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_upgrade_2",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_strong_leather_hat_2.5_description",
        "en": {
          "description": "Hat reinforced with nails offer additional protection.",
          "full_description": "Hat reinforced with nails offer additional protection.",
          "name": "Reinforced leather hat"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_strong_leather_hat_2.5_description",
        "name_key": "inventory_stack_view_wls_clothes_strong_leather_hat_2.5_name",
        "zh": {
          "description": "帽子里装有金属板，可免受许多威胁侵害。",
          "full_description": "帽子里装有金属板，可免受许多威胁侵害。",
          "name": "强化的皮帽"
        }
      },
      "official_inclusion_status": "special_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_strong_leather_hat_2.5",
      "stat_curves": {
        "armor": {
          "default": 30
        },
        "max_durability": {
          "default": 75
        },
        "warm_modifier": {
          "default": 0.75
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 2,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "e58c24028da97dccfc0bed835e04a3b4ecd32f3a8f104dff1fbbe7bb4f3b7f60",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "强化的皮帽",
        "name_en": "Reinforced leather hat",
        "description_zh": "帽子里装有金属板，可免受许多威胁侵害。",
        "description_en": "Hat reinforced with nails offer additional protection.",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_head_upgrade_2 强化的皮帽 reinforced leather hat 帽子里装有金属板，可免受许多威胁侵害。 hat reinforced with nails offer additional protection. armor 护甲 head head armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 30,
            "unit": "",
            "display": "30"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 75,
            "unit": "",
            "display": "75"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.75,
            "unit": "",
            "display": "0.75"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 22,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 22,
        "description": "inventory_stack_view_Armor_head_upgrade_3_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_Armor_head_upgrade_3_description",
        "name": "inventory_stack_view_Armor_head_upgrade_3_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/armor_head_upgrade_3",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_upgrade_3",
      "localization": {
        "description_key": "inventory_stack_view_Armor_head_upgrade_3_description",
        "en": {
          "description": "A hat that won't let your ears freeze over the long haul.",
          "full_description": "A hat that won't let your ears freeze over the long haul.",
          "name": "Fur lined hat"
        },
        "full_description_key": "inventory_stack_view_Armor_head_upgrade_3_description",
        "name_key": "inventory_stack_view_Armor_head_upgrade_3_name",
        "zh": {
          "description": "一顶不会让你的耳朵因长途出行而冻住的帽子。",
          "full_description": "一顶不会让你的耳朵因长途出行而冻住的帽子。",
          "name": "毛皮亚麻帽子"
        }
      },
      "official_inclusion_status": "special_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/armor_head_upgrade_3",
      "stat_curves": {
        "armor": {
          "default": 60
        },
        "max_durability": {
          "default": 100
        },
        "warm_modifier": {
          "default": 2
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "6b4ac374393d6d1e12e86bb2f27ed364961a576efba603f5e6d434b32b784877",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "毛皮亚麻帽子",
        "name_en": "Fur lined hat",
        "description_zh": "一顶不会让你的耳朵因长途出行而冻住的帽子。",
        "description_en": "A hat that won't let your ears freeze over the long haul.",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_head_upgrade_3 毛皮亚麻帽子 fur lined hat 一顶不会让你的耳朵因长途出行而冻住的帽子。 a hat that won't let your ears freeze over the long haul. armor 护甲 head head armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 60,
            "unit": "",
            "display": "60"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 100,
            "unit": "",
            "display": "100"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 2,
            "unit": "",
            "display": "2"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 6,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 6,
        "description": "inventory_stack_view_wls_clothes_improved_armored_hat_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_improved_armored_hat_description",
        "name": "inventory_stack_view_wls_clothes_improved_armored_hat_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_improved_armored_hat",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_upgrade_4",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_improved_armored_hat_description",
        "en": {
          "description": "The additional metal plates make this hat almost bulletproof. ",
          "full_description": "The additional metal plates make this hat almost bulletproof. ",
          "name": "Superior armored cap"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_improved_armored_hat_description",
        "name_key": "inventory_stack_view_wls_clothes_improved_armored_hat_name",
        "zh": {
          "description": "更多的金属使这顶帽子几乎刀枪不入。",
          "full_description": "更多的金属使这顶帽子几乎刀枪不入。",
          "name": "改良的装甲帽"
        }
      },
      "official_inclusion_status": "special_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_improved_armored_hat",
      "stat_curves": {
        "armor": {
          "default": 120
        },
        "max_durability": {
          "default": 125
        },
        "warm_modifier": {
          "default": 0.75
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "9065d88fc9274000f3d5ec47ea46b2d61966b453e6f56914aee8aedc88d4338b",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "改良的装甲帽",
        "name_en": "Superior armored cap",
        "description_zh": "更多的金属使这顶帽子几乎刀枪不入。",
        "description_en": "The additional metal plates make this hat almost bulletproof. ",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_head_upgrade_4 改良的装甲帽 superior armored cap 更多的金属使这顶帽子几乎刀枪不入。 the additional metal plates make this hat almost bulletproof.  armor 护甲 head head armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 120,
            "unit": "",
            "display": "120"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 125,
            "unit": "",
            "display": "125"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.75,
            "unit": "",
            "display": "0.75"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_Armor_head_upgrade_5_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_Armor_head_upgrade_5_description",
        "name": "inventory_stack_view_Armor_head_upgrade_5_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_improved_armored_hat",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_upgrade_5",
      "localization": {
        "description_key": "inventory_stack_view_Armor_head_upgrade_5_description",
        "en": {
          "description": "Clothing of the Sheriff's Deputy. Wearing it will make you incredibly cool, but you will always be the target for bandits!",
          "full_description": "Clothing of the Sheriff's Deputy. Wearing it will make you incredibly cool, but you will always be the target for bandits!",
          "name": "Deputy's hat"
        },
        "full_description_key": "inventory_stack_view_Armor_head_upgrade_5_description",
        "name_key": "inventory_stack_view_Armor_head_upgrade_5_name",
        "zh": {
          "description": "副警长的服装。穿上它，你就能瞬间容光焕发，不过你也会成为强盗的攻击目标！",
          "full_description": "副警长的服装。穿上它，你就能瞬间容光焕发，不过你也会成为强盗的攻击目标！",
          "name": "副警长帽子"
        }
      },
      "official_inclusion_status": "special_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_improved_armored_hat",
      "stat_curves": {
        "armor": {
          "default": 240
        },
        "max_durability": {
          "default": 150
        },
        "warm_modifier": {
          "default": 0.75
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 5,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "9065d88fc9274000f3d5ec47ea46b2d61966b453e6f56914aee8aedc88d4338b",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "副警长帽子",
        "name_en": "Deputy's hat",
        "description_zh": "副警长的服装。穿上它，你就能瞬间容光焕发，不过你也会成为强盗的攻击目标！",
        "description_en": "Clothing of the Sheriff's Deputy. Wearing it will make you incredibly cool, but you will always be the target for bandits!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_head_upgrade_5 副警长帽子 deputy's hat 副警长的服装。穿上它，你就能瞬间容光焕发，不过你也会成为强盗的攻击目标！ clothing of the sheriff's deputy. wearing it will make you incredibly cool, but you will always be the target for bandits! armor 护甲 head head armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 240,
            "unit": "",
            "display": "240"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 150,
            "unit": "",
            "display": "150"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.75,
            "unit": "",
            "display": "0.75"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 36,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 36,
        "description": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "name": "inventory_stack_view_wls2_armor_head_ws_day2021_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_ws_day2021",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_ws_day2021",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "en": {
          "description": "Won't fit for hunting but perfect for celebrating!",
          "full_description": "Won't fit for hunting but perfect for celebrating!",
          "name": "Star Spangled Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "name_key": "inventory_stack_view_wls2_armor_head_ws_day2021_name",
        "zh": {
          "description": "不适合狩猎，但很适合庆祝！",
          "full_description": "不适合狩猎，但很适合庆祝！",
          "name": "缀满星星的帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_cloth_4": 4,
                "wls2_resourse_secondary_leather_4": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_ws_day2021"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_ws_day2021_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_ws_day2021",
      "stat_curves": {
        "armor": {
          "1": 81,
          "2": 81,
          "3": 81,
          "4": 81,
          "5": 81,
          "6": 81,
          "per_level_after_max": 1
        },
        "evasion": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.06
        },
        "max_durability": {
          "1": 2433,
          "2": 2433,
          "3": 2433,
          "4": 2433,
          "5": 2433,
          "6": 2433
        },
        "move_speed_modifier": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.06
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "evasion": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_evasion",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_percent_format"
          },
          "display_key": "ui_item_stats_evasion",
          "en": "Dodge chance {0}",
          "zh": "躲避几率 {0}"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "move_speed_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name": "ui_item_stats_move_speed_modifier",
            "sprite": "Text_mesh_pro/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_percent_format"
          },
          "display_key": "ui_item_stats_move_speed_modifier",
          "en": "Run speed",
          "zh": "奔跑速度"
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "a28768276a9cf73d902544a725aa3714f23aaeb284a9e077d3df872d57a4d782",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "缀满星星的帽子",
        "name_en": "Star Spangled Hat",
        "description_zh": "不适合狩猎，但很适合庆祝！",
        "description_en": "Won't fit for hunting but perfect for celebrating!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_head_ws_day2021 缀满星星的帽子 star spangled hat 不适合狩猎，但很适合庆祝！ won't fit for hunting but perfect for celebrating! armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 81,
            "unit": "",
            "display": "81"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 2433,
            "unit": "",
            "display": "2433"
          },
          {
            "key": "evasion",
            "label": "闪避率",
            "value": 0.03,
            "unit": "%",
            "display": "+3%"
          },
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.03,
            "unit": "%",
            "display": "+3%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 81,
              "evasion": 0.03,
              "move_speed_modifier": 0.03
            },
            "display": {
              "armor": "81",
              "evasion": "+3%",
              "move_speed_modifier": "+3%"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 81,
              "evasion": 0.03,
              "move_speed_modifier": 0.03
            },
            "display": {
              "armor": "81",
              "evasion": "+3%",
              "move_speed_modifier": "+3%"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 81,
              "evasion": 0.03,
              "move_speed_modifier": 0.03
            },
            "display": {
              "armor": "81",
              "evasion": "+3%",
              "move_speed_modifier": "+3%"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 81,
              "evasion": 0.04,
              "move_speed_modifier": 0.04
            },
            "display": {
              "armor": "81",
              "evasion": "+4%",
              "move_speed_modifier": "+4%"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 81,
              "evasion": 0.05,
              "move_speed_modifier": 0.05
            },
            "display": {
              "armor": "81",
              "evasion": "+5%",
              "move_speed_modifier": "+5%"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 81,
              "evasion": 0.06,
              "move_speed_modifier": 0.06
            },
            "display": {
              "armor": "81",
              "evasion": "+6%",
              "move_speed_modifier": "+6%"
            }
          },
          {
            "level": 7,
            "values": {
              "armor": 82,
              "evasion": 0.06,
              "move_speed_modifier": 0.06
            },
            "display": {
              "armor": "82",
              "evasion": "+6%",
              "move_speed_modifier": "+6%"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "evasion",
            "label": "闪避率",
            "unit": "%"
          },
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "unit": "%"
          }
        ],
        "notes": [
          "防御：7 级起每级增加 1，最高 1081。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 36,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 36,
        "description": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "name": "inventory_stack_view_wls2_armor_head_ws_day2021_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_ws_day2021",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_ws_day2024_2",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "en": {
          "description": "Won't fit for hunting but perfect for celebrating!",
          "full_description": "Won't fit for hunting but perfect for celebrating!",
          "name": "Star Spangled Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "name_key": "inventory_stack_view_wls2_armor_head_ws_day2021_name",
        "zh": {
          "description": "不适合狩猎，但很适合庆祝！",
          "full_description": "不适合狩猎，但很适合庆祝！",
          "name": "缀满星星的帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_2": 2,
                "wls2_resourse_secondary_leather_2": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_ws_day2024_2"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_ws_day2024_2_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_ws_day2021",
      "stat_curves": {
        "armor": {
          "1": 30,
          "2": 33,
          "3": 35,
          "4": 38,
          "5": 41,
          "per_level_after_max": 1
        },
        "dexterity": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        },
        "max_durability": {
          "1": 532,
          "2": 580,
          "3": 628,
          "4": 677,
          "5": 725
        },
        "stamina": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        },
        "strength": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        },
        "wisdom": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "stamina": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_resistance",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_resistance",
          "en": "Defense",
          "zh": "防御"
        },
        "strength": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_strength",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_strength",
          "en": "Damage",
          "zh": "伤害"
        },
        "wisdom": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_wisdom",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_wisdom",
          "en": "Spirit",
          "zh": "精神"
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 2,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "a28768276a9cf73d902544a725aa3714f23aaeb284a9e077d3df872d57a4d782",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "缀满星星的帽子",
        "name_en": "Star Spangled Hat",
        "description_zh": "不适合狩猎，但很适合庆祝！",
        "description_en": "Won't fit for hunting but perfect for celebrating!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_head_ws_day2024_2 缀满星星的帽子 star spangled hat 不适合狩猎，但很适合庆祝！ won't fit for hunting but perfect for celebrating! armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 30,
            "unit": "",
            "display": "30"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 532,
            "unit": "",
            "display": "532"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 30,
              "dexterity": 1,
              "max_durability": 532,
              "stamina": 1,
              "strength": 1,
              "wisdom": 1
            },
            "display": {
              "armor": "30",
              "dexterity": "+1",
              "max_durability": "532",
              "stamina": "+1",
              "strength": "+1",
              "wisdom": "+1"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 33,
              "dexterity": 2,
              "max_durability": 580,
              "stamina": 2,
              "strength": 2,
              "wisdom": 2
            },
            "display": {
              "armor": "33",
              "dexterity": "+2",
              "max_durability": "580",
              "stamina": "+2",
              "strength": "+2",
              "wisdom": "+2"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 35,
              "dexterity": 3,
              "max_durability": 628,
              "stamina": 3,
              "strength": 3,
              "wisdom": 3
            },
            "display": {
              "armor": "35",
              "dexterity": "+3",
              "max_durability": "628",
              "stamina": "+3",
              "strength": "+3",
              "wisdom": "+3"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 38,
              "dexterity": 4,
              "max_durability": 677,
              "stamina": 4,
              "strength": 4,
              "wisdom": 4
            },
            "display": {
              "armor": "38",
              "dexterity": "+4",
              "max_durability": "677",
              "stamina": "+4",
              "strength": "+4",
              "wisdom": "+4"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 41,
              "dexterity": 5,
              "max_durability": 725,
              "stamina": 5,
              "strength": 5,
              "wisdom": 5
            },
            "display": {
              "armor": "41",
              "dexterity": "+5",
              "max_durability": "725",
              "stamina": "+5",
              "strength": "+5",
              "wisdom": "+5"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 42,
              "dexterity": 6,
              "max_durability": 725,
              "stamina": 6,
              "strength": 6,
              "wisdom": 6
            },
            "display": {
              "armor": "42",
              "dexterity": "+6",
              "max_durability": "725",
              "stamina": "+6",
              "strength": "+6",
              "wisdom": "+6"
            }
          },
          {
            "level": 7,
            "values": {
              "armor": 43,
              "dexterity": 7,
              "max_durability": 725,
              "stamina": 7,
              "strength": 7,
              "wisdom": 7
            },
            "display": {
              "armor": "43",
              "dexterity": "+7",
              "max_durability": "725",
              "stamina": "+7",
              "strength": "+7",
              "wisdom": "+7"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "unit": ""
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "unit": ""
          },
          {
            "key": "wisdom",
            "label": "精神",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1041。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 36,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 36,
        "description": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "name": "inventory_stack_view_wls2_armor_head_ws_day2021_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_ws_day2021",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_ws_day2024_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "en": {
          "description": "Won't fit for hunting but perfect for celebrating!",
          "full_description": "Won't fit for hunting but perfect for celebrating!",
          "name": "Star Spangled Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "name_key": "inventory_stack_view_wls2_armor_head_ws_day2021_name",
        "zh": {
          "description": "不适合狩猎，但很适合庆祝！",
          "full_description": "不适合狩猎，但很适合庆祝！",
          "name": "缀满星星的帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_3": 2,
                "wls2_resourse_secondary_leather_3": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_ws_day2024_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_ws_day2024_3_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_ws_day2021",
      "stat_curves": {
        "armor": {
          "1": 68,
          "2": 74,
          "3": 81,
          "4": 88,
          "5": 95,
          "per_level_after_max": 1
        },
        "dexterity": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        },
        "max_durability": {
          "1": 1457,
          "2": 1602,
          "3": 1748,
          "4": 1894,
          "5": 2039
        },
        "stamina": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        },
        "strength": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        },
        "wisdom": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "stamina": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_resistance",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_resistance",
          "en": "Defense",
          "zh": "防御"
        },
        "strength": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_strength",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_strength",
          "en": "Damage",
          "zh": "伤害"
        },
        "wisdom": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_wisdom",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_wisdom",
          "en": "Spirit",
          "zh": "精神"
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "a28768276a9cf73d902544a725aa3714f23aaeb284a9e077d3df872d57a4d782",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "缀满星星的帽子",
        "name_en": "Star Spangled Hat",
        "description_zh": "不适合狩猎，但很适合庆祝！",
        "description_en": "Won't fit for hunting but perfect for celebrating!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_head_ws_day2024_3 缀满星星的帽子 star spangled hat 不适合狩猎，但很适合庆祝！ won't fit for hunting but perfect for celebrating! armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 68,
            "unit": "",
            "display": "68"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 1457,
            "unit": "",
            "display": "1457"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 68,
              "dexterity": 1,
              "max_durability": 1457,
              "stamina": 1,
              "strength": 1,
              "wisdom": 1
            },
            "display": {
              "armor": "68",
              "dexterity": "+1",
              "max_durability": "1457",
              "stamina": "+1",
              "strength": "+1",
              "wisdom": "+1"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 74,
              "dexterity": 2,
              "max_durability": 1602,
              "stamina": 2,
              "strength": 2,
              "wisdom": 2
            },
            "display": {
              "armor": "74",
              "dexterity": "+2",
              "max_durability": "1602",
              "stamina": "+2",
              "strength": "+2",
              "wisdom": "+2"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 81,
              "dexterity": 3,
              "max_durability": 1748,
              "stamina": 3,
              "strength": 3,
              "wisdom": 3
            },
            "display": {
              "armor": "81",
              "dexterity": "+3",
              "max_durability": "1748",
              "stamina": "+3",
              "strength": "+3",
              "wisdom": "+3"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 88,
              "dexterity": 4,
              "max_durability": 1894,
              "stamina": 4,
              "strength": 4,
              "wisdom": 4
            },
            "display": {
              "armor": "88",
              "dexterity": "+4",
              "max_durability": "1894",
              "stamina": "+4",
              "strength": "+4",
              "wisdom": "+4"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 95,
              "dexterity": 5,
              "max_durability": 2039,
              "stamina": 5,
              "strength": 5,
              "wisdom": 5
            },
            "display": {
              "armor": "95",
              "dexterity": "+5",
              "max_durability": "2039",
              "stamina": "+5",
              "strength": "+5",
              "wisdom": "+5"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 96,
              "dexterity": 6,
              "max_durability": 2039,
              "stamina": 6,
              "strength": 6,
              "wisdom": 6
            },
            "display": {
              "armor": "96",
              "dexterity": "+6",
              "max_durability": "2039",
              "stamina": "+6",
              "strength": "+6",
              "wisdom": "+6"
            }
          },
          {
            "level": 7,
            "values": {
              "armor": 97,
              "dexterity": 7,
              "max_durability": 2039,
              "stamina": 7,
              "strength": 7,
              "wisdom": 7
            },
            "display": {
              "armor": "97",
              "dexterity": "+7",
              "max_durability": "2039",
              "stamina": "+7",
              "strength": "+7",
              "wisdom": "+7"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "unit": ""
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "unit": ""
          },
          {
            "key": "wisdom",
            "label": "精神",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1095。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 36,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 36,
        "description": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "name": "inventory_stack_view_wls2_armor_head_ws_day2021_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_ws_day2021",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_ws_day2024_4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "en": {
          "description": "Won't fit for hunting but perfect for celebrating!",
          "full_description": "Won't fit for hunting but perfect for celebrating!",
          "name": "Star Spangled Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "name_key": "inventory_stack_view_wls2_armor_head_ws_day2021_name",
        "zh": {
          "description": "不适合狩猎，但很适合庆祝！",
          "full_description": "不适合狩猎，但很适合庆祝！",
          "name": "缀满星星的帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_leather_4": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_ws_day2024_4"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_ws_day2024_4_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_ws_day2021",
      "stat_curves": {
        "armor": {
          "1": 135,
          "2": 149,
          "3": 162,
          "4": 176,
          "5": 189,
          "per_level_after_max": 1
        },
        "dexterity": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        },
        "max_durability": {
          "1": 4652,
          "2": 5117,
          "3": 5582,
          "4": 6047,
          "5": 6513
        },
        "stamina": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        },
        "strength": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        },
        "wisdom": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "stamina": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_resistance",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_resistance",
          "en": "Defense",
          "zh": "防御"
        },
        "strength": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_strength",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_strength",
          "en": "Damage",
          "zh": "伤害"
        },
        "wisdom": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_wisdom",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_wisdom",
          "en": "Spirit",
          "zh": "精神"
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "a28768276a9cf73d902544a725aa3714f23aaeb284a9e077d3df872d57a4d782",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "缀满星星的帽子",
        "name_en": "Star Spangled Hat",
        "description_zh": "不适合狩猎，但很适合庆祝！",
        "description_en": "Won't fit for hunting but perfect for celebrating!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_head_ws_day2024_4 缀满星星的帽子 star spangled hat 不适合狩猎，但很适合庆祝！ won't fit for hunting but perfect for celebrating! armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 135,
            "unit": "",
            "display": "135"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 4652,
            "unit": "",
            "display": "4652"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 135,
              "dexterity": 1,
              "max_durability": 4652,
              "stamina": 1,
              "strength": 1,
              "wisdom": 1
            },
            "display": {
              "armor": "135",
              "dexterity": "+1",
              "max_durability": "4652",
              "stamina": "+1",
              "strength": "+1",
              "wisdom": "+1"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 149,
              "dexterity": 2,
              "max_durability": 5117,
              "stamina": 2,
              "strength": 2,
              "wisdom": 2
            },
            "display": {
              "armor": "149",
              "dexterity": "+2",
              "max_durability": "5117",
              "stamina": "+2",
              "strength": "+2",
              "wisdom": "+2"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 162,
              "dexterity": 3,
              "max_durability": 5582,
              "stamina": 3,
              "strength": 3,
              "wisdom": 3
            },
            "display": {
              "armor": "162",
              "dexterity": "+3",
              "max_durability": "5582",
              "stamina": "+3",
              "strength": "+3",
              "wisdom": "+3"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 176,
              "dexterity": 4,
              "max_durability": 6047,
              "stamina": 4,
              "strength": 4,
              "wisdom": 4
            },
            "display": {
              "armor": "176",
              "dexterity": "+4",
              "max_durability": "6047",
              "stamina": "+4",
              "strength": "+4",
              "wisdom": "+4"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 189,
              "dexterity": 5,
              "max_durability": 6513,
              "stamina": 5,
              "strength": 5,
              "wisdom": 5
            },
            "display": {
              "armor": "189",
              "dexterity": "+5",
              "max_durability": "6513",
              "stamina": "+5",
              "strength": "+5",
              "wisdom": "+5"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 190,
              "dexterity": 6,
              "max_durability": 6513,
              "stamina": 6,
              "strength": 6,
              "wisdom": 6
            },
            "display": {
              "armor": "190",
              "dexterity": "+6",
              "max_durability": "6513",
              "stamina": "+6",
              "strength": "+6",
              "wisdom": "+6"
            }
          },
          {
            "level": 7,
            "values": {
              "armor": 191,
              "dexterity": 7,
              "max_durability": 6513,
              "stamina": 7,
              "strength": 7,
              "wisdom": 7
            },
            "display": {
              "armor": "191",
              "dexterity": "+7",
              "max_durability": "6513",
              "stamina": "+7",
              "strength": "+7",
              "wisdom": "+7"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "unit": ""
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "unit": ""
          },
          {
            "key": "wisdom",
            "label": "精神",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1189。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 36,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 36,
        "description": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "name": "inventory_stack_view_wls2_armor_head_ws_day2021_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_ws_day2021",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_ws_day2024_5",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "en": {
          "description": "Won't fit for hunting but perfect for celebrating!",
          "full_description": "Won't fit for hunting but perfect for celebrating!",
          "name": "Star Spangled Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "name_key": "inventory_stack_view_wls2_armor_head_ws_day2021_name",
        "zh": {
          "description": "不适合狩猎，但很适合庆祝！",
          "full_description": "不适合狩猎，但很适合庆祝！",
          "name": "缀满星星的帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_5": 2,
                "wls2_resourse_secondary_leather_5": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_ws_day2024_5"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_ws_day2024_5_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_ws_day2021",
      "stat_curves": {
        "armor": {
          "1": 228,
          "2": 251,
          "3": 274,
          "4": 296,
          "5": 319,
          "per_level_after_max": 1
        },
        "dexterity": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        },
        "max_durability": {
          "1": 13989,
          "2": 15387,
          "3": 16786,
          "4": 18185,
          "5": 19584
        },
        "stamina": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        },
        "strength": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        },
        "wisdom": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "stamina": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_resistance",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_resistance",
          "en": "Defense",
          "zh": "防御"
        },
        "strength": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_strength",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_strength",
          "en": "Damage",
          "zh": "伤害"
        },
        "wisdom": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_wisdom",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_wisdom",
          "en": "Spirit",
          "zh": "精神"
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 5,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "a28768276a9cf73d902544a725aa3714f23aaeb284a9e077d3df872d57a4d782",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "缀满星星的帽子",
        "name_en": "Star Spangled Hat",
        "description_zh": "不适合狩猎，但很适合庆祝！",
        "description_en": "Won't fit for hunting but perfect for celebrating!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_head_ws_day2024_5 缀满星星的帽子 star spangled hat 不适合狩猎，但很适合庆祝！ won't fit for hunting but perfect for celebrating! armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 228,
            "unit": "",
            "display": "228"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 13989,
            "unit": "",
            "display": "13989"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 228,
              "dexterity": 1,
              "max_durability": 13989,
              "stamina": 1,
              "strength": 1,
              "wisdom": 1
            },
            "display": {
              "armor": "228",
              "dexterity": "+1",
              "max_durability": "13989",
              "stamina": "+1",
              "strength": "+1",
              "wisdom": "+1"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 251,
              "dexterity": 2,
              "max_durability": 15387,
              "stamina": 2,
              "strength": 2,
              "wisdom": 2
            },
            "display": {
              "armor": "251",
              "dexterity": "+2",
              "max_durability": "15387",
              "stamina": "+2",
              "strength": "+2",
              "wisdom": "+2"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 274,
              "dexterity": 3,
              "max_durability": 16786,
              "stamina": 3,
              "strength": 3,
              "wisdom": 3
            },
            "display": {
              "armor": "274",
              "dexterity": "+3",
              "max_durability": "16786",
              "stamina": "+3",
              "strength": "+3",
              "wisdom": "+3"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 296,
              "dexterity": 4,
              "max_durability": 18185,
              "stamina": 4,
              "strength": 4,
              "wisdom": 4
            },
            "display": {
              "armor": "296",
              "dexterity": "+4",
              "max_durability": "18185",
              "stamina": "+4",
              "strength": "+4",
              "wisdom": "+4"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 319,
              "dexterity": 5,
              "max_durability": 19584,
              "stamina": 5,
              "strength": 5,
              "wisdom": 5
            },
            "display": {
              "armor": "319",
              "dexterity": "+5",
              "max_durability": "19584",
              "stamina": "+5",
              "strength": "+5",
              "wisdom": "+5"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 320,
              "dexterity": 6,
              "max_durability": 19584,
              "stamina": 6,
              "strength": 6,
              "wisdom": 6
            },
            "display": {
              "armor": "320",
              "dexterity": "+6",
              "max_durability": "19584",
              "stamina": "+6",
              "strength": "+6",
              "wisdom": "+6"
            }
          },
          {
            "level": 7,
            "values": {
              "armor": 321,
              "dexterity": 7,
              "max_durability": 19584,
              "stamina": 7,
              "strength": 7,
              "wisdom": 7
            },
            "display": {
              "armor": "321",
              "dexterity": "+7",
              "max_durability": "19584",
              "stamina": "+7",
              "strength": "+7",
              "wisdom": "+7"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "unit": ""
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "unit": ""
          },
          {
            "key": "wisdom",
            "label": "精神",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1319。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 36,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 36,
        "description": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "name": "inventory_stack_view_wls2_armor_head_ws_day2021_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_ws_day2021",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_ws_day2024_6",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "en": {
          "description": "Won't fit for hunting but perfect for celebrating!",
          "full_description": "Won't fit for hunting but perfect for celebrating!",
          "name": "Star Spangled Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "name_key": "inventory_stack_view_wls2_armor_head_ws_day2021_name",
        "zh": {
          "description": "不适合狩猎，但很适合庆祝！",
          "full_description": "不适合狩猎，但很适合庆祝！",
          "name": "缀满星星的帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_6": 2,
                "wls2_resourse_secondary_leather_6": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_ws_day2024_6"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_ws_day2024_6_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_ws_day2021",
      "stat_curves": {
        "armor": {
          "1": 540,
          "2": 594,
          "3": 648,
          "4": 702,
          "5": 756,
          "per_level_after_max": 1
        },
        "dexterity": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        },
        "max_durability": {
          "1": 25180,
          "2": 27697,
          "3": 30215,
          "4": 32733,
          "5": 35251
        },
        "stamina": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        },
        "strength": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        },
        "wisdom": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "stamina": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_resistance",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_resistance",
          "en": "Defense",
          "zh": "防御"
        },
        "strength": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_strength",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_strength",
          "en": "Damage",
          "zh": "伤害"
        },
        "wisdom": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_wisdom",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_wisdom",
          "en": "Spirit",
          "zh": "精神"
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 6,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "a28768276a9cf73d902544a725aa3714f23aaeb284a9e077d3df872d57a4d782",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "缀满星星的帽子",
        "name_en": "Star Spangled Hat",
        "description_zh": "不适合狩猎，但很适合庆祝！",
        "description_en": "Won't fit for hunting but perfect for celebrating!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_head_ws_day2024_6 缀满星星的帽子 star spangled hat 不适合狩猎，但很适合庆祝！ won't fit for hunting but perfect for celebrating! armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 540,
            "unit": "",
            "display": "540"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 25180,
            "unit": "",
            "display": "25180"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 540,
              "dexterity": 1,
              "max_durability": 25180,
              "stamina": 1,
              "strength": 1,
              "wisdom": 1
            },
            "display": {
              "armor": "540",
              "dexterity": "+1",
              "max_durability": "25180",
              "stamina": "+1",
              "strength": "+1",
              "wisdom": "+1"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 594,
              "dexterity": 2,
              "max_durability": 27697,
              "stamina": 2,
              "strength": 2,
              "wisdom": 2
            },
            "display": {
              "armor": "594",
              "dexterity": "+2",
              "max_durability": "27697",
              "stamina": "+2",
              "strength": "+2",
              "wisdom": "+2"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 648,
              "dexterity": 3,
              "max_durability": 30215,
              "stamina": 3,
              "strength": 3,
              "wisdom": 3
            },
            "display": {
              "armor": "648",
              "dexterity": "+3",
              "max_durability": "30215",
              "stamina": "+3",
              "strength": "+3",
              "wisdom": "+3"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 702,
              "dexterity": 4,
              "max_durability": 32733,
              "stamina": 4,
              "strength": 4,
              "wisdom": 4
            },
            "display": {
              "armor": "702",
              "dexterity": "+4",
              "max_durability": "32733",
              "stamina": "+4",
              "strength": "+4",
              "wisdom": "+4"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 756,
              "dexterity": 5,
              "max_durability": 35251,
              "stamina": 5,
              "strength": 5,
              "wisdom": 5
            },
            "display": {
              "armor": "756",
              "dexterity": "+5",
              "max_durability": "35251",
              "stamina": "+5",
              "strength": "+5",
              "wisdom": "+5"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 757,
              "dexterity": 6,
              "max_durability": 35251,
              "stamina": 6,
              "strength": 6,
              "wisdom": 6
            },
            "display": {
              "armor": "757",
              "dexterity": "+6",
              "max_durability": "35251",
              "stamina": "+6",
              "strength": "+6",
              "wisdom": "+6"
            }
          },
          {
            "level": 7,
            "values": {
              "armor": 758,
              "dexterity": 7,
              "max_durability": 35251,
              "stamina": 7,
              "strength": 7,
              "wisdom": 7
            },
            "display": {
              "armor": "758",
              "dexterity": "+7",
              "max_durability": "35251",
              "stamina": "+7",
              "strength": "+7",
              "wisdom": "+7"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "unit": ""
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "unit": ""
          },
          {
            "key": "wisdom",
            "label": "精神",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1756。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 36,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 36,
        "description": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "name": "inventory_stack_view_wls2_armor_head_ws_day2021_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_ws_day2021",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_ws_day2024_7",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "en": {
          "description": "Won't fit for hunting but perfect for celebrating!",
          "full_description": "Won't fit for hunting but perfect for celebrating!",
          "name": "Star Spangled Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_ws_day2021_description",
        "name_key": "inventory_stack_view_wls2_armor_head_ws_day2021_name",
        "zh": {
          "description": "不适合狩猎，但很适合庆祝！",
          "full_description": "不适合狩猎，但很适合庆祝！",
          "name": "缀满星星的帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_7": 2,
                "wls2_resourse_secondary_leather_7": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_ws_day2024_7"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_ws_day2024_7_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_ws_day2021",
      "stat_curves": {
        "armor": {
          "1": 1080,
          "2": 1188,
          "3": 1296,
          "4": 1404,
          "5": 1512,
          "per_level_after_max": 1
        },
        "dexterity": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        },
        "max_durability": {
          "1": 45950,
          "2": 50500,
          "3": 55150,
          "4": 59700,
          "5": 64300
        },
        "stamina": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        },
        "strength": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        },
        "wisdom": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "stamina": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_resistance",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_resistance",
          "en": "Defense",
          "zh": "防御"
        },
        "strength": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_strength",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_strength",
          "en": "Damage",
          "zh": "伤害"
        },
        "wisdom": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_wisdom",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_wisdom",
          "en": "Spirit",
          "zh": "精神"
        }
      },
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 7,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "a28768276a9cf73d902544a725aa3714f23aaeb284a9e077d3df872d57a4d782",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "缀满星星的帽子",
        "name_en": "Star Spangled Hat",
        "description_zh": "不适合狩猎，但很适合庆祝！",
        "description_en": "Won't fit for hunting but perfect for celebrating!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_head_ws_day2024_7 缀满星星的帽子 star spangled hat 不适合狩猎，但很适合庆祝！ won't fit for hunting but perfect for celebrating! armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 1080,
            "unit": "",
            "display": "1080"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 45950,
            "unit": "",
            "display": "45950"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 1080,
              "dexterity": 1,
              "max_durability": 45950,
              "stamina": 1,
              "strength": 1,
              "wisdom": 1
            },
            "display": {
              "armor": "1080",
              "dexterity": "+1",
              "max_durability": "45950",
              "stamina": "+1",
              "strength": "+1",
              "wisdom": "+1"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 1188,
              "dexterity": 2,
              "max_durability": 50500,
              "stamina": 2,
              "strength": 2,
              "wisdom": 2
            },
            "display": {
              "armor": "1188",
              "dexterity": "+2",
              "max_durability": "50500",
              "stamina": "+2",
              "strength": "+2",
              "wisdom": "+2"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1296,
              "dexterity": 3,
              "max_durability": 55150,
              "stamina": 3,
              "strength": 3,
              "wisdom": 3
            },
            "display": {
              "armor": "1296",
              "dexterity": "+3",
              "max_durability": "55150",
              "stamina": "+3",
              "strength": "+3",
              "wisdom": "+3"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1404,
              "dexterity": 4,
              "max_durability": 59700,
              "stamina": 4,
              "strength": 4,
              "wisdom": 4
            },
            "display": {
              "armor": "1404",
              "dexterity": "+4",
              "max_durability": "59700",
              "stamina": "+4",
              "strength": "+4",
              "wisdom": "+4"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1512,
              "dexterity": 5,
              "max_durability": 64300,
              "stamina": 5,
              "strength": 5,
              "wisdom": 5
            },
            "display": {
              "armor": "1512",
              "dexterity": "+5",
              "max_durability": "64300",
              "stamina": "+5",
              "strength": "+5",
              "wisdom": "+5"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1513,
              "dexterity": 6,
              "max_durability": 64300,
              "stamina": 6,
              "strength": 6,
              "wisdom": 6
            },
            "display": {
              "armor": "1513",
              "dexterity": "+6",
              "max_durability": "64300",
              "stamina": "+6",
              "strength": "+6",
              "wisdom": "+6"
            }
          },
          {
            "level": 7,
            "values": {
              "armor": 1514,
              "dexterity": 7,
              "max_durability": 64300,
              "stamina": 7,
              "strength": 7,
              "wisdom": 7
            },
            "display": {
              "armor": "1514",
              "dexterity": "+7",
              "max_durability": "64300",
              "stamina": "+7",
              "strength": "+7",
              "wisdom": "+7"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "unit": ""
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "unit": ""
          },
          {
            "key": "wisdom",
            "label": "精神",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 2512。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 1,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 1,
        "description": "inventory_stack_view_wls_clothes_trousers_1_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_trousers_1_description",
        "name": "inventory_stack_view_wls_clothes_trousers_1_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_trousers_1",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_1",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_trousers_1_description",
        "en": {
          "description": "Simple pants, well stitched.",
          "full_description": "Simple pants, well stitched.",
          "name": "Pants"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_trousers_1_description",
        "name_key": "inventory_stack_view_wls_clothes_trousers_1_name",
        "zh": {
          "description": "简单的裤子，缝合得很好。",
          "full_description": "简单的裤子，缝合得很好。",
          "name": "裤子"
        }
      },
      "official_inclusion_status": "special_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_trousers_1",
      "stat_curves": {
        "armor": {
          "default": 10
        },
        "max_durability": {
          "default": 50,
          "max": 25
        },
        "warm_modifier": {
          "default": 0.5
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 1,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "52b471a83b178d77fbcbeff6ac98efff137fc5f37828e3d706054540e491222d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "裤子",
        "name_en": "Pants",
        "description_zh": "简单的裤子，缝合得很好。",
        "description_en": "Simple pants, well stitched.",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_legs_1 裤子 pants 简单的裤子，缝合得很好。 simple pants, well stitched. armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 10,
            "unit": "",
            "display": "10"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": null,
            "unit": "",
            "display": "待确认"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [
          "耐久的旧版资料存在冲突：基础值 50，上限 25。"
        ],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 1,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 1,
        "description": "inventory_stack_view_wls2_armor_legs_1_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_1_common_description",
        "name": "inventory_stack_view_wls2_armor_legs_1_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_trousers_1",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_1_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_1_common_description",
        "en": {
          "description": "Simple pants, well stitched",
          "full_description": "Simple pants, well stitched",
          "name": "Pants"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_1_common_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_1_common_name",
        "zh": {
          "description": "简单的裤子，缝合得很好",
          "full_description": "简单的裤子，缝合得很好",
          "name": "裤子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_1": 2
          },
          "learn_exp": 100,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_cloth_1": 2
              },
              "learn_exp": 100,
              "min_level": 1,
              "result": {
                "inventory_stack_id": "wls2_armor_legs_1_common"
              },
              "type": "workbench"
            },
            "recipe_id": "wls2_armor_legs_1_common_ab_ftue"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_trousers_1",
      "stat_curves": {
        "armor": {
          "1": 10,
          "2": 11,
          "3": 12,
          "4": 13,
          "5": 14,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 150,
          "2": 165,
          "3": 180,
          "4": 195,
          "5": 210
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 1,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_5"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_10"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "coin_id": "spend_coin_soft_15"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "coin_id": "spend_coin_soft_20"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "52b471a83b178d77fbcbeff6ac98efff137fc5f37828e3d706054540e491222d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "裤子",
        "name_en": "Pants",
        "description_zh": "简单的裤子，缝合得很好",
        "description_en": "Simple pants, well stitched",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_legs_1_common 裤子 pants 简单的裤子，缝合得很好 simple pants, well stitched armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 10,
            "unit": "",
            "display": "10"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 150,
            "unit": "",
            "display": "150"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 10,
              "max_durability": 150
            },
            "display": {
              "armor": "10",
              "max_durability": "150"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 11,
              "max_durability": 165
            },
            "display": {
              "armor": "11",
              "max_durability": "165"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 12,
              "max_durability": 180
            },
            "display": {
              "armor": "12",
              "max_durability": "180"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 13,
              "max_durability": 195
            },
            "display": {
              "armor": "13",
              "max_durability": "195"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 14,
              "max_durability": 210
            },
            "display": {
              "armor": "14",
              "max_durability": "210"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 15,
              "max_durability": 210
            },
            "display": {
              "armor": "15",
              "max_durability": "210"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1014。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 2,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 2,
        "description": "inventory_stack_view_wls2_armor_legs_1_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_1_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_legs_1_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_trousers_reinforced_1.5",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_1_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_1_uncommon_description",
        "en": {
          "description": "Leather patches in just the right spots will add to your courage",
          "full_description": "Leather patches in just the right spots will add to your courage",
          "name": "Fine trousers"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_1_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_1_uncommon_name",
        "zh": {
          "description": "打对了位置的补丁能给你带来勇气",
          "full_description": "打对了位置的补丁能给你带来勇气",
          "name": "精良长裤"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_leather_1": 2,
            "wls2_resourse_tertiary_clothroll_1": 2
          },
          "learn_exp": 200,
          "min_level": 0,
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_uncommon_legs_desc"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_legs_1_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_ftue_ab_tutorial_trader_slot_3"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_trousers_reinforced_1.5",
      "stat_curves": {
        "armor": {
          "1": 13,
          "2": 14,
          "3": 15,
          "4": 16,
          "5": 18,
          "per_level_after_max": 1
        },
        "dexterity": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 2,
          "5": 3
        },
        "max_durability": {
          "1": 180,
          "2": 195,
          "3": 210,
          "4": 225,
          "5": 240
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 1,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_5"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_10"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "coin_id": "spend_coin_soft_15"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "coin_id": "spend_coin_soft_20"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "238a3c63a6b6c7ee85698d99cb6aaf596a83dada08c6caeadf13884b1fef24a3",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "精良长裤",
        "name_en": "Fine trousers",
        "description_zh": "打对了位置的补丁能给你带来勇气",
        "description_en": "Leather patches in just the right spots will add to your courage",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_legs_1_uncommon 精良长裤 fine trousers 打对了位置的补丁能给你带来勇气 leather patches in just the right spots will add to your courage armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 13,
            "unit": "",
            "display": "13"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 180,
            "unit": "",
            "display": "180"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 13,
              "dexterity": 1,
              "max_durability": 180
            },
            "display": {
              "armor": "13",
              "dexterity": "+1",
              "max_durability": "180"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 14,
              "dexterity": 1,
              "max_durability": 195
            },
            "display": {
              "armor": "14",
              "dexterity": "+1",
              "max_durability": "195"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 15,
              "dexterity": 1,
              "max_durability": 210
            },
            "display": {
              "armor": "15",
              "dexterity": "+1",
              "max_durability": "210"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 16,
              "dexterity": 2,
              "max_durability": 225
            },
            "display": {
              "armor": "16",
              "dexterity": "+2",
              "max_durability": "225"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 18,
              "dexterity": 3,
              "max_durability": 240
            },
            "display": {
              "armor": "18",
              "dexterity": "+3",
              "max_durability": "240"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 19,
              "dexterity": 3,
              "max_durability": 240
            },
            "display": {
              "armor": "19",
              "dexterity": "+3",
              "max_durability": "240"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1018。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 3,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 3,
        "description": "inventory_stack_view_wls_clothes_leather_pants_2_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_leather_pants_2_description",
        "name": "inventory_stack_view_wls_clothes_leather_pants_2_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_leather_pants_2",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_2",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_leather_pants_2_description",
        "en": {
          "description": "Durable denim jeans worn by prospectors and farmers.",
          "full_description": "Durable denim jeans worn by prospectors and farmers.",
          "name": "Jeans"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_leather_pants_2_description",
        "name_key": "inventory_stack_view_wls_clothes_leather_pants_2_name",
        "zh": {
          "description": "耐用且美观的牛仔裤。",
          "full_description": "耐用且美观的牛仔裤。",
          "name": "牛仔裤"
        }
      },
      "official_inclusion_status": "special_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_leather_pants_2",
      "stat_curves": {
        "armor": {
          "default": 45
        },
        "max_durability": {
          "default": 75,
          "max": 37
        },
        "warm_modifier": {
          "default": 1
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 2,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "371b7f56af11eb5942906e3eb71054e21ec70326e9d41e3858a9d24ef7be1305",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "牛仔裤",
        "name_en": "Jeans",
        "description_zh": "耐用且美观的牛仔裤。",
        "description_en": "Durable denim jeans worn by prospectors and farmers.",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_legs_2 牛仔裤 jeans 耐用且美观的牛仔裤。 durable denim jeans worn by prospectors and farmers. armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 45,
            "unit": "",
            "display": "45"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": null,
            "unit": "",
            "display": "待确认"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [
          "耐久的旧版资料存在冲突：基础值 75，上限 37。"
        ],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 3,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 3,
        "description": "inventory_stack_view_wls2_armor_legs_2_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_2_common_description",
        "name": "inventory_stack_view_wls2_armor_legs_2_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_leather_pants_2",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_2_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_2_common_description",
        "en": {
          "description": "Durable and beautiful jeans",
          "full_description": "Durable and beautiful jeans",
          "name": "Jeans"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_2_common_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_2_common_name",
        "zh": {
          "description": "耐用且美观的牛仔裤",
          "full_description": "耐用且美观的牛仔裤",
          "name": "牛仔裤"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_2": 3,
            "wls2_resourse_secondary_leather_2": 4
          },
          "learn_exp": 200,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_legs_2_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_50coins_dynamic_smuggler_offer_legs_upgrade_2"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_leather_pants_2",
      "stat_curves": {
        "armor": {
          "1": 20,
          "2": 22,
          "3": 24,
          "4": 26,
          "5": 28,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "max_durability": {
          "1": 260,
          "2": 285,
          "3": 305,
          "4": 330,
          "5": 350
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 2,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_10"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_20"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "coin_id": "spend_coin_soft_30"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "coin_id": "spend_coin_soft_40"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "371b7f56af11eb5942906e3eb71054e21ec70326e9d41e3858a9d24ef7be1305",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "牛仔裤",
        "name_en": "Jeans",
        "description_zh": "耐用且美观的牛仔裤",
        "description_en": "Durable and beautiful jeans",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_legs_2_common 牛仔裤 jeans 耐用且美观的牛仔裤 durable and beautiful jeans armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 20,
            "unit": "",
            "display": "20"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 260,
            "unit": "",
            "display": "260"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 20,
              "max_durability": 260
            },
            "display": {
              "armor": "20",
              "max_durability": "260"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 22,
              "max_durability": 285
            },
            "display": {
              "armor": "22",
              "max_durability": "285"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 24,
              "max_durability": 305
            },
            "display": {
              "armor": "24",
              "max_durability": "305"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 26,
              "max_durability": 330
            },
            "display": {
              "armor": "26",
              "max_durability": "330"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 28,
              "max_durability": 350
            },
            "display": {
              "armor": "28",
              "max_durability": "350"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 29,
              "max_durability": 350
            },
            "display": {
              "armor": "29",
              "max_durability": "350"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1028。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 4,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 4,
        "description": "inventory_stack_view_wls2_armor_legs_2_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_2_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_legs_2_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_legs_2_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_reinforced_leather_pants_2.5",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_2_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_2_uncommon_description",
        "en": {
          "description": "Rivets reinforcing jeans and faith in the irresistibility",
          "full_description": "Rivets reinforcing jeans and faith in the irresistibility",
          "name": "Fine jeans"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_2_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_2_uncommon_name",
        "zh": {
          "description": "铆钉加固的长裤，无人能够抗拒其魅力",
          "full_description": "铆钉加固的长裤，无人能够抗拒其魅力",
          "name": "精良牛仔裤"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_2": 1,
            "wls2_resourse_secondary_leather_2": 5,
            "wls2_resourse_tertiary_clothroll_2": 2
          },
          "learn_exp": 400,
          "min_level": 0,
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_uncommon_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_reinforced_leather_pants_2.5",
      "stat_curves": {
        "armor": {
          "1": 25,
          "2": 28,
          "3": 30,
          "4": 33,
          "5": 35,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "dexterity": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 2,
          "5": 3
        },
        "max_durability": {
          "1": 360,
          "2": 400,
          "3": 430,
          "4": 460,
          "5": 490
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 2,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_10"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_20"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "coin_id": "spend_coin_soft_30"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "coin_id": "spend_coin_soft_40"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "be857ae05496b3a0646f85788e7d240537cb44d76278a06072a6fc65a165bbf4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "精良牛仔裤",
        "name_en": "Fine jeans",
        "description_zh": "铆钉加固的长裤，无人能够抗拒其魅力",
        "description_en": "Rivets reinforcing jeans and faith in the irresistibility",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_legs_2_uncommon 精良牛仔裤 fine jeans 铆钉加固的长裤，无人能够抗拒其魅力 rivets reinforcing jeans and faith in the irresistibility armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 25,
            "unit": "",
            "display": "25"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 360,
            "unit": "",
            "display": "360"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "fixed": [
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 25,
              "dexterity": 1,
              "max_durability": 360
            },
            "display": {
              "armor": "25",
              "dexterity": "+1",
              "max_durability": "360"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 28,
              "dexterity": 1,
              "max_durability": 400
            },
            "display": {
              "armor": "28",
              "dexterity": "+1",
              "max_durability": "400"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 30,
              "dexterity": 1,
              "max_durability": 430
            },
            "display": {
              "armor": "30",
              "dexterity": "+1",
              "max_durability": "430"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 33,
              "dexterity": 2,
              "max_durability": 460
            },
            "display": {
              "armor": "33",
              "dexterity": "+2",
              "max_durability": "460"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 35,
              "dexterity": 3,
              "max_durability": 490
            },
            "display": {
              "armor": "35",
              "dexterity": "+3",
              "max_durability": "490"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 36,
              "dexterity": 3,
              "max_durability": 490
            },
            "display": {
              "armor": "36",
              "dexterity": "+3",
              "max_durability": "490"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1035。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 7,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 7,
        "description": "inventory_stack_view_wls_clothes_fur_pants_2_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_fur_pants_2_description",
        "name": "inventory_stack_view_wls_clothes_fur_pants_2_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_fur_pants_2",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_3",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_fur_pants_2_description",
        "en": {
          "description": "Pants lined with fleece. Wearing these allows you to spend the night right in the snow",
          "full_description": "Pants lined with fleece. Wearing these allows you to spend the night right in the snow",
          "name": "Fur pants"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_fur_pants_2_description",
        "name_key": "inventory_stack_view_wls_clothes_fur_pants_2_name",
        "zh": {
          "description": "羊毛织成的裤子。穿上它，你可以在雪地里过夜。",
          "full_description": "羊毛织成的裤子。穿上它，你可以在雪地里过夜。",
          "name": "毛皮裤子"
        }
      },
      "official_inclusion_status": "special_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_fur_pants_2",
      "stat_curves": {
        "armor": {
          "default": 75
        },
        "max_durability": {
          "default": 100,
          "max": 50
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "9eaba4b4090ce227e6605c5dfff775860d894e510a4799c956e33d115f5e6af5",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "毛皮裤子",
        "name_en": "Fur pants",
        "description_zh": "羊毛织成的裤子。穿上它，你可以在雪地里过夜。",
        "description_en": "Pants lined with fleece. Wearing these allows you to spend the night right in the snow",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_legs_3 毛皮裤子 fur pants 羊毛织成的裤子。穿上它，你可以在雪地里过夜。 pants lined with fleece. wearing these allows you to spend the night right in the snow armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 75,
            "unit": "",
            "display": "75"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": null,
            "unit": "",
            "display": "待确认"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 3,
            "unit": "",
            "display": "3"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [
          "耐久的旧版资料存在冲突：基础值 100，上限 50。"
        ],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 7,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 7,
        "description": "inventory_stack_view_wls2_armor_legs_3_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_3_common_description",
        "name": "inventory_stack_view_wls2_armor_legs_3_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_legs_3_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_fur_pants_2",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_3_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_3_common_description",
        "en": {
          "description": "Pants lined with fleece. Allows you to spend the night right in the snow",
          "full_description": "Pants lined with fleece. Allows you to spend the night right in the snow",
          "name": "Fur pants"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_3_common_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_3_common_name",
        "zh": {
          "description": "羊毛织成的裤子。穿上它，你可以在雪地里过夜",
          "full_description": "羊毛织成的裤子。穿上它，你可以在雪地里过夜",
          "name": "毛皮裤子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_3": 3,
            "wls2_resourse_secondary_leather_3": 4
          },
          "learn_exp": 400,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_legs_3_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_75coins_dynamic_smuggler_offer_legs_3"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_legs_3_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_warmclothing_trader_offer_legs_t3_common"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_fur_pants_2",
      "stat_curves": {
        "armor": {
          "1": 40,
          "2": 44,
          "3": 48,
          "4": 52,
          "5": 56,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0
        },
        "max_durability": {
          "1": 700,
          "2": 760,
          "3": 860,
          "4": 910,
          "5": 960
        },
        "warm_modifier": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_20"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_30"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "coin_id": "spend_coin_soft_40"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "coin_id": "spend_coin_soft_50"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "9eaba4b4090ce227e6605c5dfff775860d894e510a4799c956e33d115f5e6af5",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "毛皮裤子",
        "name_en": "Fur pants",
        "description_zh": "羊毛织成的裤子。穿上它，你可以在雪地里过夜",
        "description_en": "Pants lined with fleece. Allows you to spend the night right in the snow",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_legs_3_common 毛皮裤子 fur pants 羊毛织成的裤子。穿上它，你可以在雪地里过夜 pants lined with fleece. allows you to spend the night right in the snow armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 40,
            "unit": "",
            "display": "40"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 700,
            "unit": "",
            "display": "700"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 0,
            "unit": "",
            "display": "0"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 40,
              "max_durability": 700
            },
            "display": {
              "armor": "40",
              "max_durability": "700"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 44,
              "max_durability": 760
            },
            "display": {
              "armor": "44",
              "max_durability": "760"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 48,
              "max_durability": 860
            },
            "display": {
              "armor": "48",
              "max_durability": "860"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 52,
              "max_durability": 910
            },
            "display": {
              "armor": "52",
              "max_durability": "910"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 56,
              "max_durability": 960
            },
            "display": {
              "armor": "56",
              "max_durability": "960"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 57,
              "max_durability": 960
            },
            "display": {
              "armor": "57",
              "max_durability": "960"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1056。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 28,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 28,
        "description": "wls2_armor_legs_3_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_head_3_epic_description",
        "name": "wls2_armor_legs_3_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_legs_upgrade_3_icon",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_3_epic",
      "localization": {
        "description_key": "wls2_armor_legs_3_epic_description",
        "en": {
          "description": "Sturdy hunting pants withstand the pursuit of a wild beast. And protect against the wild beast, too.",
          "full_description": "A sturdy hunting hat that protects your head from the scorching heat in the mountains.",
          "name": "Mountain hunter pants"
        },
        "full_description_key": "wls2_armor_head_3_epic_description",
        "name_key": "wls2_armor_legs_3_epic_name",
        "zh": {
          "description": "结实的打猎裤子，帮您逃脱野兽的追杀。当然，被追上时也能挡住野兽的攻击。",
          "full_description": "这顶结实的打猎帽可以让您的头部抵抗山里的酷热。",
          "name": "山岭猎人裤"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 1,
            "wls2_resourse_fourfold_nails_3": 2,
            "wls2_resourse_secondary_leather_3": 7,
            "wls2_resourse_tertiary_clothroll_3": 3
          },
          "learn_exp": 1600,
          "min_level": 0,
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_epic_t3_desc"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_easter_currency_egg": 500
              },
              "result": {
                "inventory_stack_id": "wls2_armor_legs_3_epic",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_t3_epic_legs"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_easter_24_currency_egg": 500
              },
              "result": {
                "inventory_stack_id": "wls2_armor_legs_3_epic",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter_22_trader_t3_epic_legs"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_2_a",
            "durability_factor": 0.25,
            "level_max": 70,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_3_epic",
            "transaction_id": "transaction_iap_wls_2_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_1_a",
            "durability_factor": 0.25,
            "level_max": 90,
            "level_min": 71,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_3_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_legs_upgrade_3_icon",
      "stat_curves": {
        "armor": {
          "1": 120,
          "2": 132,
          "3": 144,
          "4": 156,
          "5": 168,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1
        },
        "dexterity": {
          "1": 2,
          "2": 4,
          "3": 6,
          "4": 8,
          "5": 10
        },
        "firearm_resistance": {
          "1": 0.04,
          "2": 0.08,
          "3": 0.12,
          "4": 0.16,
          "5": 0.2
        },
        "health_modifier": {
          "1": 0.04,
          "2": 0.06,
          "3": 0.08,
          "4": 0.1,
          "5": 0.12
        },
        "max_durability": {
          "1": 1900,
          "2": 2100,
          "3": 2280,
          "4": 2470,
          "5": 2660
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "firearm_resistance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_firearm_resistance_v2",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_percent_format"
          },
          "display_key": "ui_item_stats_firearm_resistance_v2",
          "en": "Firearm resistance {0}",
          "zh": "枪弹抗性 {0}"
        },
        "health_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_health_modifier_v2",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_percent_format"
          },
          "display_key": "ui_item_stats_health_modifier_v2",
          "en": "Max health {0}",
          "zh": "最大生命值 {0}"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": {
        "10": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_20"
        },
        "11": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_25"
        },
        "12": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_30"
        },
        "13": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_35"
        },
        "14": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_40"
        },
        "15": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "16": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "17": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "18": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "19": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "2": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_3"
        },
        "20": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "21": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "22": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "23": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "24": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "25": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "26": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "27": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "28": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "29": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "3": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_7"
        },
        "30": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "31": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "32": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "33": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "34": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "35": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "36": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "37": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "38": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "39": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "4": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_10"
        },
        "40": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "41": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "42": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "43": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "44": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "45": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "46": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "47": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "48": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "49": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "5": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_15"
        },
        "50": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "6": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_2"
        },
        "7": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_5"
        },
        "8": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_10"
        },
        "9": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_15"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "85fcb56939a9ab83d9f89094f6fe7ee739e6dfff20f22b0a5a820e1fbebb8150",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "山岭猎人裤",
        "name_en": "Mountain hunter pants",
        "description_zh": "这顶结实的打猎帽可以让您的头部抵抗山里的酷热。",
        "description_en": "A sturdy hunting hat that protects your head from the scorching heat in the mountains.",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_legs_3_epic 山岭猎人裤 mountain hunter pants 这顶结实的打猎帽可以让您的头部抵抗山里的酷热。 a sturdy hunting hat that protects your head from the scorching heat in the mountains. armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 120,
            "unit": "",
            "display": "120"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 1900,
            "unit": "",
            "display": "1900"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 2,
            "unit": "",
            "display": "+2"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "fixed": [
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 120,
              "dexterity": 2,
              "firearm_resistance": 0.04,
              "health_modifier": 0.04,
              "max_durability": 1900
            },
            "display": {
              "armor": "120",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "health_modifier": "+4%",
              "max_durability": "1900"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 132,
              "dexterity": 4,
              "firearm_resistance": 0.08,
              "health_modifier": 0.06,
              "max_durability": 2100
            },
            "display": {
              "armor": "132",
              "dexterity": "+4",
              "firearm_resistance": "+8%",
              "health_modifier": "+6%",
              "max_durability": "2100"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 144,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "health_modifier": 0.08,
              "max_durability": 2280
            },
            "display": {
              "armor": "144",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "health_modifier": "+8%",
              "max_durability": "2280"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 156,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "health_modifier": 0.1,
              "max_durability": 2470
            },
            "display": {
              "armor": "156",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "health_modifier": "+10%",
              "max_durability": "2470"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 168,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_modifier": 0.12,
              "max_durability": 2660
            },
            "display": {
              "armor": "168",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_modifier": "+12%",
              "max_durability": "2660"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 169,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_modifier": 0.12,
              "max_durability": 2660
            },
            "display": {
              "armor": "169",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_modifier": "+12%",
              "max_durability": "2660"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "firearm_resistance",
            "label": "枪弹抗性",
            "unit": "%"
          },
          {
            "key": "health_modifier",
            "label": "生命加成",
            "unit": "%"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1168。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 25,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 25,
        "description": "inventory_stack_view_wls2_armor_legs_3_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_3_rare_description",
        "name": "inventory_stack_view_wls2_armor_legs_3_rare_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_legs_3_rare_name_with_wrapping",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_fur_pants_rare",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_3_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_3_rare_description",
        "en": {
          "description": "Makes you look like a bear",
          "full_description": "Makes you look like a bear",
          "name": "Bear fur pants"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_3_rare_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_3_rare_name",
        "zh": {
          "description": "使你看起来像一只熊",
          "full_description": "使你看起来像一只熊",
          "name": "熊皮长裤"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 2,
            "wls2_resourse_secondary_leather_3": 7,
            "wls2_resourse_tertiary_clothroll_3": 3
          },
          "learn_exp": 1600,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_10_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_1_a",
            "durability_factor": 0.25,
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_3_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_fur_pants_rare",
      "stat_curves": {
        "armor": {
          "1": 90,
          "2": 99,
          "3": 108,
          "4": 117,
          "5": 126,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0
        },
        "dexterity": {
          "1": 2,
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
        },
        "health_increment": {
          "1": 25,
          "2": 30,
          "3": 35,
          "4": 40,
          "5": 45
        },
        "max_durability": {
          "1": 1590,
          "2": 1750,
          "3": 1910,
          "4": 2070,
          "5": 2230
        },
        "warm_modifier": {
          "1": 2,
          "2": 2,
          "3": 2,
          "4": 2,
          "5": 2
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "health_increment": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name_value_format": "ui_item_stats_health_modifier_v2",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_health_modifier_v2",
          "en": "Max health {0}",
          "zh": "最大生命值 {0}"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_25"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_50"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_2"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_4"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "1da237d4be883560ec001eef6aac72822258758ff45195f873c83d051d614c8f",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "熊皮长裤",
        "name_en": "Bear fur pants",
        "description_zh": "使你看起来像一只熊",
        "description_en": "Makes you look like a bear",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_legs_3_rare 熊皮长裤 bear fur pants 使你看起来像一只熊 makes you look like a bear armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 90,
            "unit": "",
            "display": "90"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 1590,
            "unit": "",
            "display": "1590"
          },
          {
            "key": "health_increment",
            "label": "生命加成",
            "value": 25,
            "unit": "",
            "display": "+25"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 2,
            "unit": "",
            "display": "+2"
          }
        ],
        "fixed": [
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 0,
            "unit": "",
            "display": "0"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 2,
            "unit": "",
            "display": "2"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 90,
              "dexterity": 2,
              "health_increment": 25,
              "max_durability": 1590
            },
            "display": {
              "armor": "90",
              "dexterity": "+2",
              "health_increment": "+25",
              "max_durability": "1590"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 99,
              "dexterity": 3,
              "health_increment": 30,
              "max_durability": 1750
            },
            "display": {
              "armor": "99",
              "dexterity": "+3",
              "health_increment": "+30",
              "max_durability": "1750"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 108,
              "dexterity": 4,
              "health_increment": 35,
              "max_durability": 1910
            },
            "display": {
              "armor": "108",
              "dexterity": "+4",
              "health_increment": "+35",
              "max_durability": "1910"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 117,
              "dexterity": 5,
              "health_increment": 40,
              "max_durability": 2070
            },
            "display": {
              "armor": "117",
              "dexterity": "+5",
              "health_increment": "+40",
              "max_durability": "2070"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 126,
              "dexterity": 6,
              "health_increment": 45,
              "max_durability": 2230
            },
            "display": {
              "armor": "126",
              "dexterity": "+6",
              "health_increment": "+45",
              "max_durability": "2230"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 127,
              "dexterity": 6,
              "health_increment": 45,
              "max_durability": 2230
            },
            "display": {
              "armor": "127",
              "dexterity": "+6",
              "health_increment": "+45",
              "max_durability": "2230"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "health_increment",
            "label": "生命加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1126。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 18,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 18,
        "description": "inventory_stack_view_wls2_armor_legs_3_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_3_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_legs_3_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_legs_3_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/armor_legs_upgrade_3",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_3_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_3_uncommon_description",
        "en": {
          "description": "Not only will it warm you up on a cold day, it will also protect you from the enemy",
          "full_description": "Not only will it warm you up on a cold day, it will also protect you from the enemy",
          "name": "Winter pants"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_3_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_3_uncommon_name",
        "zh": {
          "description": "不仅能让你在寒冷的日子里暖和起来，还能保护你免受敌人的伤害",
          "full_description": "不仅能让你在寒冷的日子里暖和起来，还能保护你免受敌人的伤害",
          "name": "冬季长裤"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 1,
            "wls2_resourse_secondary_leather_3": 5,
            "wls2_resourse_tertiary_clothroll_3": 2
          },
          "learn_exp": 800,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_5_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_uncommon_desc"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_legs_3_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_warmclothing_trader_offer_legs_t3_uncommon"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_1_a",
            "durability_factor": 0.25,
            "level_max": 80,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_3_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary03/armor_legs_upgrade_3",
      "stat_curves": {
        "armor": {
          "1": 50,
          "2": 55,
          "3": 60,
          "4": 65,
          "5": 70,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0
        },
        "dexterity": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 2,
          "5": 3
        },
        "max_durability": {
          "1": 910,
          "2": 1000,
          "3": 1090,
          "4": 1180,
          "5": 1270
        },
        "warm_modifier": {
          "1": 1.5,
          "2": 1.5,
          "3": 1.5,
          "4": 1.5,
          "5": 1.5
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_20"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_30"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_1"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_2"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "6b2a701d2d734fb3f43eadaa5c7617b5403f580bf22b1cc9132bf94d15a66e62",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "冬季长裤",
        "name_en": "Winter pants",
        "description_zh": "不仅能让你在寒冷的日子里暖和起来，还能保护你免受敌人的伤害",
        "description_en": "Not only will it warm you up on a cold day, it will also protect you from the enemy",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_legs_3_uncommon 冬季长裤 winter pants 不仅能让你在寒冷的日子里暖和起来，还能保护你免受敌人的伤害 not only will it warm you up on a cold day, it will also protect you from the enemy armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 50,
            "unit": "",
            "display": "50"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 910,
            "unit": "",
            "display": "910"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 0,
            "unit": "",
            "display": "0"
          }
        ],
        "fixed": [
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 50,
              "dexterity": 1,
              "max_durability": 910
            },
            "display": {
              "armor": "50",
              "dexterity": "+1",
              "max_durability": "910"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 55,
              "dexterity": 1,
              "max_durability": 1000
            },
            "display": {
              "armor": "55",
              "dexterity": "+1",
              "max_durability": "1000"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 60,
              "dexterity": 1,
              "max_durability": 1090
            },
            "display": {
              "armor": "60",
              "dexterity": "+1",
              "max_durability": "1090"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 65,
              "dexterity": 2,
              "max_durability": 1180
            },
            "display": {
              "armor": "65",
              "dexterity": "+2",
              "max_durability": "1180"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 70,
              "dexterity": 3,
              "max_durability": 1270
            },
            "display": {
              "armor": "70",
              "dexterity": "+3",
              "max_durability": "1270"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 71,
              "dexterity": 3,
              "max_durability": 1270
            },
            "display": {
              "armor": "71",
              "dexterity": "+3",
              "max_durability": "1270"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1070。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 5,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 5,
        "description": "inventory_stack_view_wls_clothes_armored_pants_3_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_armored_pants_3_description",
        "name": "inventory_stack_view_wls_clothes_armored_pants_3_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_armored_pants_3",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_4",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_armored_pants_3_description",
        "en": {
          "description": "Pants with hidden armored plates keep you well protected against attacks",
          "full_description": "Pants with hidden armored plates keep you well protected against attacks",
          "name": "Armored pants"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_armored_pants_3_description",
        "name_key": "inventory_stack_view_wls_clothes_armored_pants_3_name",
        "zh": {
          "description": "装有隐藏装甲板的裤子，可抵御攻击。",
          "full_description": "装有隐藏装甲板的裤子，可抵御攻击。",
          "name": "装甲裤"
        }
      },
      "official_inclusion_status": "special_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_armored_pants_3",
      "stat_curves": {
        "armor": {
          "default": 150
        },
        "max_durability": {
          "default": 125,
          "max": 62
        },
        "warm_modifier": {
          "default": 1
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "21ee38624248def74c60d31cbfcd6e56a0cd2b8bcfac2ec7bdcfd020d88d8e91",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "装甲裤",
        "name_en": "Armored pants",
        "description_zh": "装有隐藏装甲板的裤子，可抵御攻击。",
        "description_en": "Pants with hidden armored plates keep you well protected against attacks",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_legs_4 装甲裤 armored pants 装有隐藏装甲板的裤子，可抵御攻击。 pants with hidden armored plates keep you well protected against attacks armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 150,
            "unit": "",
            "display": "150"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": null,
            "unit": "",
            "display": "待确认"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [
          "耐久的旧版资料存在冲突：基础值 125，上限 62。"
        ],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 8,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 8,
        "description": "inventory_stack_view_wls2_armor_legs_4_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_4_common_description",
        "name": "inventory_stack_view_wls2_armor_legs_4_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls2_armor_legs_4_icon",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_4_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_4_common_description",
        "en": {
          "description": "These durable pants won't fail you, even in the most difficult of times",
          "full_description": "These durable pants won't fail you, even in the most difficult of times",
          "name": "Cowboy pants"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_4_common_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_4_common_name",
        "zh": {
          "description": "即使在最困难的时候，这条耐穿的裤子也不会让你失望。",
          "full_description": "即使在最困难的时候，这条耐穿的裤子也不会让你失望。",
          "name": "牛仔长裤"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_4": 3,
            "wls2_resourse_secondary_leather_4": 4
          },
          "learn_exp": 800,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_legs_4_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_11"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_legs_4_icon",
      "stat_curves": {
        "armor": {
          "1": 80,
          "2": 88,
          "3": 96,
          "4": 104,
          "5": 112,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1
        },
        "max_durability": {
          "1": 1850,
          "2": 2040,
          "3": 2220,
          "4": 2410,
          "5": 2590
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_30"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_40"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "coin_id": "spend_coin_soft_50"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "coin_id": "spend_coin_soft_60"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "eee86e0965daf4500c641e9e534fdd42668f178dcbd1f383838ccb0b30be90cd",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "牛仔长裤",
        "name_en": "Cowboy pants",
        "description_zh": "即使在最困难的时候，这条耐穿的裤子也不会让你失望。",
        "description_en": "These durable pants won't fail you, even in the most difficult of times",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_legs_4_common 牛仔长裤 cowboy pants 即使在最困难的时候，这条耐穿的裤子也不会让你失望。 these durable pants won't fail you, even in the most difficult of times armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 80,
            "unit": "",
            "display": "80"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 1850,
            "unit": "",
            "display": "1850"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 1,
            "unit": "",
            "display": "1"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 80,
              "max_durability": 1850
            },
            "display": {
              "armor": "80",
              "max_durability": "1850"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 88,
              "max_durability": 2040
            },
            "display": {
              "armor": "88",
              "max_durability": "2040"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 96,
              "max_durability": 2220
            },
            "display": {
              "armor": "96",
              "max_durability": "2220"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 104,
              "max_durability": 2410
            },
            "display": {
              "armor": "104",
              "max_durability": "2410"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 112,
              "max_durability": 2590
            },
            "display": {
              "armor": "112",
              "max_durability": "2590"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 113,
              "max_durability": 2590
            },
            "display": {
              "armor": "113",
              "max_durability": "2590"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1112。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 10,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 10,
        "description": "inventory_stack_view_wls2_armor_legs_4_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_4_rare_description",
        "name": "inventory_stack_view_wls2_armor_legs_4_rare_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_legs_4_rare_name_with_wrapping",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls2_armor_legs_4_rare_icon",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_4_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_4_rare_description",
        "en": {
          "description": "Made from tanned leather and decorated with steel rivets",
          "full_description": "Made from tanned leather and decorated with steel rivets",
          "name": "Gunslinger pants"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_4_rare_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_4_rare_name",
        "zh": {
          "description": "由鞣制皮革制作而成，以钢制铆钉作为装饰",
          "full_description": "由鞣制皮革制作而成，以钢制铆钉作为装饰",
          "name": "枪手长裤"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_4": 2,
            "wls2_resourse_secondary_leather_4": 7,
            "wls2_resourse_tertiary_clothroll_4": 3
          },
          "learn_exp": 1600,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_12_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_legs_4_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_13"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_1_a",
            "durability_factor": 0.25,
            "level_max": 110,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_4_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_legs_4_rare_icon",
      "stat_curves": {
        "armor": {
          "1": 180,
          "2": 198,
          "3": 216,
          "4": 234,
          "5": 252,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 2,
          "2": 2,
          "3": 2,
          "4": 2,
          "5": 2
        },
        "dexterity": {
          "1": 2,
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
        },
        "max_durability": {
          "1": 5260,
          "2": 5780,
          "3": 6300,
          "4": 6820,
          "5": 7370
        },
        "reduced_detection_radius": {
          "1": 0.06,
          "2": 0.07,
          "3": 0.08,
          "4": 0.09,
          "5": 0.1
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "reduced_detection_radius": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_reduced_detection_radius_v2",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_percent_format"
          },
          "display_key": "ui_item_stats_reduced_detection_radius_v2",
          "en": "Stealth {0}",
          "zh": "潜行 {0}"
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_50"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_75"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_5"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_10"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "85cf3fc92f09b7396db23b36415f5344ae9994baea0c4a9a93e213cdcea35521",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "枪手长裤",
        "name_en": "Gunslinger pants",
        "description_zh": "由鞣制皮革制作而成，以钢制铆钉作为装饰",
        "description_en": "Made from tanned leather and decorated with steel rivets",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_legs_4_rare 枪手长裤 gunslinger pants 由鞣制皮革制作而成，以钢制铆钉作为装饰 made from tanned leather and decorated with steel rivets armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 180,
            "unit": "",
            "display": "180"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 5260,
            "unit": "",
            "display": "5260"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 2,
            "unit": "",
            "display": "+2"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 2,
            "unit": "",
            "display": "2"
          }
        ],
        "fixed": [
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 180,
              "dexterity": 2,
              "max_durability": 5260,
              "reduced_detection_radius": 0.06
            },
            "display": {
              "armor": "180",
              "dexterity": "+2",
              "max_durability": "5260",
              "reduced_detection_radius": "+6%"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 198,
              "dexterity": 3,
              "max_durability": 5780,
              "reduced_detection_radius": 0.07
            },
            "display": {
              "armor": "198",
              "dexterity": "+3",
              "max_durability": "5780",
              "reduced_detection_radius": "+7%"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 216,
              "dexterity": 4,
              "max_durability": 6300,
              "reduced_detection_radius": 0.08
            },
            "display": {
              "armor": "216",
              "dexterity": "+4",
              "max_durability": "6300",
              "reduced_detection_radius": "+8%"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 234,
              "dexterity": 5,
              "max_durability": 6820,
              "reduced_detection_radius": 0.09
            },
            "display": {
              "armor": "234",
              "dexterity": "+5",
              "max_durability": "6820",
              "reduced_detection_radius": "+9%"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 252,
              "dexterity": 6,
              "max_durability": 7370,
              "reduced_detection_radius": 0.1
            },
            "display": {
              "armor": "252",
              "dexterity": "+6",
              "max_durability": "7370",
              "reduced_detection_radius": "+10%"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 253,
              "dexterity": 6,
              "max_durability": 7370,
              "reduced_detection_radius": 0.1
            },
            "display": {
              "armor": "253",
              "dexterity": "+6",
              "max_durability": "7370",
              "reduced_detection_radius": "+10%"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          },
          {
            "key": "reduced_detection_radius",
            "label": "隐蔽加成",
            "unit": "%"
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1252。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 9,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 9,
        "description": "inventory_stack_view_wls2_armor_legs_4_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_4_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_legs_4_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls2_armor_legs_upgrade_4_icon",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_4_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_4_uncommon_description",
        "en": {
          "description": "Comfortable pants for all occasions",
          "full_description": "Comfortable pants for all occasions",
          "name": "Ranger pants"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_4_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_4_uncommon_name",
        "zh": {
          "description": "适合所有场合的舒适裤子。",
          "full_description": "适合所有场合的舒适裤子。",
          "name": "游侠长裤"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_4": 1,
            "wls2_resourse_secondary_leather_4": 5,
            "wls2_resourse_tertiary_clothroll_4": 2
          },
          "learn_exp": 1600,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_5_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_uncommon_desc"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_legs_4_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_12"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_1_a",
            "durability_factor": 0.25,
            "level_max": 100,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_4_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_legs_upgrade_4_icon",
      "stat_curves": {
        "armor": {
          "1": 100,
          "2": 110,
          "3": 120,
          "4": 130,
          "5": 140,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 1.5,
          "2": 1.5,
          "3": 1.5,
          "4": 1.5,
          "5": 1.5
        },
        "dexterity": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 2,
          "5": 3
        },
        "max_durability": {
          "1": 2840,
          "2": 3120,
          "3": 3400,
          "4": 3690,
          "5": 3970
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_30"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_50"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_2"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_4"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "b441a64e10d2904572abc890cc1a09e21a4217480eded788195c6bc11afcab50",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "游侠长裤",
        "name_en": "Ranger pants",
        "description_zh": "适合所有场合的舒适裤子。",
        "description_en": "Comfortable pants for all occasions",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_legs_4_uncommon 游侠长裤 ranger pants 适合所有场合的舒适裤子。 comfortable pants for all occasions armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 100,
            "unit": "",
            "display": "100"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 2840,
            "unit": "",
            "display": "2840"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 100,
              "dexterity": 1,
              "max_durability": 2840
            },
            "display": {
              "armor": "100",
              "dexterity": "+1",
              "max_durability": "2840"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 110,
              "dexterity": 1,
              "max_durability": 3120
            },
            "display": {
              "armor": "110",
              "dexterity": "+1",
              "max_durability": "3120"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 120,
              "dexterity": 1,
              "max_durability": 3400
            },
            "display": {
              "armor": "120",
              "dexterity": "+1",
              "max_durability": "3400"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 130,
              "dexterity": 2,
              "max_durability": 3690
            },
            "display": {
              "armor": "130",
              "dexterity": "+2",
              "max_durability": "3690"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 140,
              "dexterity": 3,
              "max_durability": 3970
            },
            "display": {
              "armor": "140",
              "dexterity": "+3",
              "max_durability": "3970"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 141,
              "dexterity": 3,
              "max_durability": 3970
            },
            "display": {
              "armor": "141",
              "dexterity": "+3",
              "max_durability": "3970"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1140。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_Armor_legs_5_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_Armor_legs_5_description",
        "name": "inventory_stack_view_Armor_legs_5_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_armored_pants_3",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_5",
      "localization": {
        "description_key": "inventory_stack_view_Armor_legs_5_description",
        "en": {
          "description": "A real cowboy can be recognized by his clothes. Stylish and comfortable, these pants are designed to conquer the wild west.",
          "full_description": "A real cowboy can be recognized by his clothes. Stylish and comfortable, these pants are designed to conquer the wild west.",
          "name": "Ranger pants"
        },
        "full_description_key": "inventory_stack_view_Armor_legs_5_description",
        "name_key": "inventory_stack_view_Armor_legs_5_name",
        "zh": {
          "description": "真正的牛仔会穿着既时髦又舒适的标志性服装。这条裤子就是为了征服狂野西部而生。",
          "full_description": "真正的牛仔会穿着既时髦又舒适的标志性服装。这条裤子就是为了征服狂野西部而生。",
          "name": "游侠长裤"
        }
      },
      "official_inclusion_status": "special_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_armored_pants_3",
      "stat_curves": {
        "armor": {
          "default": 300
        },
        "max_durability": {
          "default": 150,
          "max": 75
        },
        "warm_modifier": {
          "default": 1
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 5,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "21ee38624248def74c60d31cbfcd6e56a0cd2b8bcfac2ec7bdcfd020d88d8e91",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "游侠长裤",
        "name_en": "Ranger pants",
        "description_zh": "真正的牛仔会穿着既时髦又舒适的标志性服装。这条裤子就是为了征服狂野西部而生。",
        "description_en": "A real cowboy can be recognized by his clothes. Stylish and comfortable, these pants are designed to conquer the wild west.",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_legs_5 游侠长裤 ranger pants 真正的牛仔会穿着既时髦又舒适的标志性服装。这条裤子就是为了征服狂野西部而生。 a real cowboy can be recognized by his clothes. stylish and comfortable, these pants are designed to conquer the wild west. armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 300,
            "unit": "",
            "display": "300"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": null,
            "unit": "",
            "display": "待确认"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [
          "耐久的旧版资料存在冲突：基础值 150，上限 75。"
        ],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 20,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 20,
        "description": "inventory_stack_view_wls2_armor_legs_5_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_5_common_description",
        "name": "inventory_stack_view_wls2_armor_legs_5_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_legs_5_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_legs_5_icon",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_5_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_5_common_description",
        "en": {
          "description": "Clothing of the Sheriff's Deputy",
          "full_description": "Clothing of the Sheriff's Deputy",
          "name": "Deputy's pants"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_5_common_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_5_common_name",
        "zh": {
          "description": "副警长的服装",
          "full_description": "副警长的服装",
          "name": "副警长裤子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_5": 2,
            "wls2_resourse_secondary_leather_5": 4
          },
          "learn_exp": 1600,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_legs_5_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_14"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_legs_5_icon",
      "stat_curves": {
        "armor": {
          "1": 160,
          "2": 176,
          "3": 192,
          "4": 208,
          "5": 224,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "max_durability": {
          "1": 6000,
          "2": 6600,
          "3": 7200,
          "4": 7800,
          "5": 8400
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "water_pressure_resistance": {
          "1": 0.02,
          "2": 0.02,
          "3": 0.02,
          "4": 0.02,
          "5": 0.02
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        },
        "water_pressure_resistance": {
          "definition": {
            "is_percent": true,
            "name": "ui_item_stats_water_pressure_resistance",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_minus_percent_format"
          },
          "display_key": "ui_item_stats_water_pressure_resistance",
          "en": "Slowing down from swamp \nwater",
          "zh": "沼泽地水域使速度减慢"
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 5,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_50"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_60"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "coin_id": "spend_coin_soft_70"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "coin_id": "spend_coin_soft_80"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "9e5d5a9b893ab14453480886059964d65c42855fc716f19af83c6d5d19823b43",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "副警长裤子",
        "name_en": "Deputy's pants",
        "description_zh": "副警长的服装",
        "description_en": "Clothing of the Sheriff's Deputy",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_legs_5_common 副警长裤子 deputy's pants 副警长的服装 clothing of the sheriff's deputy armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 160,
            "unit": "",
            "display": "160"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 6000,
            "unit": "",
            "display": "6000"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "fixed": [
          {
            "key": "water_pressure_resistance",
            "label": "沼泽减速",
            "value": 0.02,
            "unit": "%",
            "display": "-2%"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 160,
              "max_durability": 6000
            },
            "display": {
              "armor": "160",
              "max_durability": "6000"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 176,
              "max_durability": 6600
            },
            "display": {
              "armor": "176",
              "max_durability": "6600"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 192,
              "max_durability": 7200
            },
            "display": {
              "armor": "192",
              "max_durability": "7200"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 208,
              "max_durability": 7800
            },
            "display": {
              "armor": "208",
              "max_durability": "7800"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 224,
              "max_durability": 8400
            },
            "display": {
              "armor": "224",
              "max_durability": "8400"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 225,
              "max_durability": 8400
            },
            "display": {
              "armor": "225",
              "max_durability": "8400"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1224。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 30,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 30,
        "description": "wls2_armor_legs_5_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_legs_5_epic_description",
        "name": "wls2_armor_legs_5_epic_name",
        "name_with_wrapping": "wls2_armor_legs_5_epic_name_with_wrapping",
        "rarity": "epic",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_legs_5_epic_icon",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_5_epic",
      "localization": {
        "description_key": "wls2_armor_legs_5_epic_description",
        "en": {
          "description": "Provides unmatched legs protection. Take good care of your legs, otherwise how else will you spur your horse?!",
          "full_description": "Provides unmatched legs protection. Take good care of your legs, otherwise how else will you spur your horse?!",
          "name": "Reinforced pants"
        },
        "full_description_key": "wls2_armor_legs_5_epic_description",
        "name_key": "wls2_armor_legs_5_epic_name",
        "zh": {
          "description": "可提供无与伦比的足部保护。不照顾好你的腿，怎么能够策马扬鞭呢？！",
          "full_description": "可提供无与伦比的足部保护。不照顾好你的腿，怎么能够策马扬鞭呢？！",
          "name": "强化的裤子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 5,
            "wls2_resourse_fourfold_nails_4": 4,
            "wls2_resourse_secondary_leather_5": 8,
            "wls2_resourse_tertiary_clothroll_5": 4
          },
          "learn_exp": 3200,
          "min_level": 0,
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_epic_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.25,
            "level_max": 105,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_5_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_2_a",
            "durability_factor": 0.25,
            "level_min": 106,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_5_epic",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_legs_5_epic_icon",
      "stat_curves": {
        "armor": {
          "1": 480,
          "2": 528,
          "3": 576,
          "4": 624,
          "5": 672,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "dexterity": {
          "1": 2,
          "2": 4,
          "3": 6,
          "4": 8,
          "5": 10
        },
        "firearm_resistance": {
          "1": 0.04,
          "2": 0.08,
          "3": 0.12,
          "4": 0.16,
          "5": 0.2
        },
        "health_increment": {
          "1": 70,
          "2": 90,
          "3": 110,
          "4": 130,
          "5": 150
        },
        "max_durability": {
          "1": 20650,
          "2": 22700,
          "3": 24750,
          "4": 26800,
          "5": 28900
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "water_pressure_resistance": {
          "1": 0.02,
          "2": 0.02,
          "3": 0.02,
          "4": 0.02,
          "5": 0.02
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "firearm_resistance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_firearm_resistance_v2",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_percent_format"
          },
          "display_key": "ui_item_stats_firearm_resistance_v2",
          "en": "Firearm resistance {0}",
          "zh": "枪弹抗性 {0}"
        },
        "health_increment": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name_value_format": "ui_item_stats_health_modifier_v2",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_health_modifier_v2",
          "en": "Max health {0}",
          "zh": "最大生命值 {0}"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        },
        "water_pressure_resistance": {
          "definition": {
            "is_percent": true,
            "name": "ui_item_stats_water_pressure_resistance",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_minus_percent_format"
          },
          "display_key": "ui_item_stats_water_pressure_resistance",
          "en": "Slowing down from swamp \nwater",
          "zh": "沼泽地水域使速度减慢"
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 5,
      "tool_id": null,
      "upgrade": {
        "10": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_20"
        },
        "11": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_25"
        },
        "12": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_30"
        },
        "13": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_35"
        },
        "14": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_40"
        },
        "15": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "16": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "17": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "18": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "19": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "2": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_15"
        },
        "20": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "21": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "22": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "23": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "24": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "25": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "26": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "27": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "28": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "29": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "3": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_25"
        },
        "30": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "31": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "32": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "33": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "34": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "35": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "36": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "37": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "38": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "39": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "4": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "40": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "41": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "42": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "43": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "44": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "45": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "46": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "47": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "48": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "49": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "5": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_100"
        },
        "50": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "6": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_2"
        },
        "7": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_5"
        },
        "8": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_10"
        },
        "9": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_15"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "9a3c6674d8a8c4a93d299a43c10150f0dd9897ea7a2c24922368d8308b80a32b",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "强化的裤子",
        "name_en": "Reinforced pants",
        "description_zh": "可提供无与伦比的足部保护。不照顾好你的腿，怎么能够策马扬鞭呢？！",
        "description_en": "Provides unmatched legs protection. Take good care of your legs, otherwise how else will you spur your horse?!",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_legs_5_epic 强化的裤子 reinforced pants 可提供无与伦比的足部保护。不照顾好你的腿，怎么能够策马扬鞭呢？！ provides unmatched legs protection. take good care of your legs, otherwise how else will you spur your horse?! armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 480,
            "unit": "",
            "display": "480"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 20650,
            "unit": "",
            "display": "20650"
          },
          {
            "key": "health_increment",
            "label": "生命加成",
            "value": 70,
            "unit": "",
            "display": "+70"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 2,
            "unit": "",
            "display": "+2"
          }
        ],
        "fixed": [
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          },
          {
            "key": "water_pressure_resistance",
            "label": "沼泽减速",
            "value": 0.02,
            "unit": "%",
            "display": "-2%"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 480,
              "dexterity": 2,
              "firearm_resistance": 0.04,
              "health_increment": 70,
              "max_durability": 20650
            },
            "display": {
              "armor": "480",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "health_increment": "+70",
              "max_durability": "20650"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 528,
              "dexterity": 4,
              "firearm_resistance": 0.08,
              "health_increment": 90,
              "max_durability": 22700
            },
            "display": {
              "armor": "528",
              "dexterity": "+4",
              "firearm_resistance": "+8%",
              "health_increment": "+90",
              "max_durability": "22700"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 576,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "health_increment": 110,
              "max_durability": 24750
            },
            "display": {
              "armor": "576",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "health_increment": "+110",
              "max_durability": "24750"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 624,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "health_increment": 130,
              "max_durability": 26800
            },
            "display": {
              "armor": "624",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "health_increment": "+130",
              "max_durability": "26800"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 672,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_increment": 150,
              "max_durability": 28900
            },
            "display": {
              "armor": "672",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_increment": "+150",
              "max_durability": "28900"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 673,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_increment": 150,
              "max_durability": 28900
            },
            "display": {
              "armor": "673",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_increment": "+150",
              "max_durability": "28900"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "firearm_resistance",
            "label": "枪弹抗性",
            "unit": "%"
          },
          {
            "key": "health_increment",
            "label": "生命加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1672。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 22,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 22,
        "description": "inventory_stack_view_wls2_armor_legs_5_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_5_rare_description",
        "name": "inventory_stack_view_wls2_armor_legs_5_rare_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_legs_5_rare_name_with_wrapping",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_legs_5_rare_icon",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_5_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_5_rare_description",
        "en": {
          "description": "These pants were designed to conquer the Wild West",
          "full_description": "These pants were designed to conquer the Wild West",
          "name": "Sheriff's pants"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_5_rare_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_5_rare_name",
        "zh": {
          "description": "这条裤子就是为了征服狂野西部而生",
          "full_description": "这条裤子就是为了征服狂野西部而生",
          "name": "警长长裤"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_4": 2,
            "wls2_resourse_secondary_leather_5": 7,
            "wls2_resourse_tertiary_clothroll_5": 3
          },
          "learn_exp": 3200,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_15_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_2_a",
            "durability_factor": 0.25,
            "level_max": 105,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_5_rare",
            "transaction_id": "transaction_iap_wls_2_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_1_a",
            "durability_factor": 0.25,
            "level_min": 106,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_5_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_legs_5_rare_icon",
      "stat_curves": {
        "armor": {
          "1": 304,
          "2": 334,
          "3": 365,
          "4": 395,
          "5": 426,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "dexterity": {
          "1": 2,
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
        },
        "firearm_resistance": {
          "1": 0.04,
          "2": 0.08,
          "3": 0.12,
          "4": 0.16,
          "5": 0.2
        },
        "max_durability": {
          "1": 14700,
          "2": 16100,
          "3": 17600,
          "4": 19100,
          "5": 20550
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "water_pressure_resistance": {
          "1": 0.02,
          "2": 0.02,
          "3": 0.02,
          "4": 0.02,
          "5": 0.02
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "firearm_resistance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_firearm_resistance_v2",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_percent_format"
          },
          "display_key": "ui_item_stats_firearm_resistance_v2",
          "en": "Firearm resistance {0}",
          "zh": "枪弹抗性 {0}"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        },
        "water_pressure_resistance": {
          "definition": {
            "is_percent": true,
            "name": "ui_item_stats_water_pressure_resistance",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_minus_percent_format"
          },
          "display_key": "ui_item_stats_water_pressure_resistance",
          "en": "Slowing down from swamp \nwater",
          "zh": "沼泽地水域使速度减慢"
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 5,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_100"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_200"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_10"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_20"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "e87f6b8ae3fffc1d8e3cecb665f9ccdb8c70c684dfa090a1ae7d4c185cc792d0",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "警长长裤",
        "name_en": "Sheriff's pants",
        "description_zh": "这条裤子就是为了征服狂野西部而生",
        "description_en": "These pants were designed to conquer the Wild West",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_legs_5_rare 警长长裤 sheriff's pants 这条裤子就是为了征服狂野西部而生 these pants were designed to conquer the wild west armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 304,
            "unit": "",
            "display": "304"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 14700,
            "unit": "",
            "display": "14700"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 2,
            "unit": "",
            "display": "+2"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "fixed": [
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          },
          {
            "key": "water_pressure_resistance",
            "label": "沼泽减速",
            "value": 0.02,
            "unit": "%",
            "display": "-2%"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 304,
              "dexterity": 2,
              "firearm_resistance": 0.04,
              "max_durability": 14700
            },
            "display": {
              "armor": "304",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "max_durability": "14700"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 334,
              "dexterity": 3,
              "firearm_resistance": 0.08,
              "max_durability": 16100
            },
            "display": {
              "armor": "334",
              "dexterity": "+3",
              "firearm_resistance": "+8%",
              "max_durability": "16100"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 365,
              "dexterity": 4,
              "firearm_resistance": 0.12,
              "max_durability": 17600
            },
            "display": {
              "armor": "365",
              "dexterity": "+4",
              "firearm_resistance": "+12%",
              "max_durability": "17600"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 395,
              "dexterity": 5,
              "firearm_resistance": 0.16,
              "max_durability": 19100
            },
            "display": {
              "armor": "395",
              "dexterity": "+5",
              "firearm_resistance": "+16%",
              "max_durability": "19100"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 426,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 20550
            },
            "display": {
              "armor": "426",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
              "max_durability": "20550"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 427,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 20550
            },
            "display": {
              "armor": "427",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
              "max_durability": "20550"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "firearm_resistance",
            "label": "枪弹抗性",
            "unit": "%"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1426。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 40,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 40,
        "description": "inventory_stack_view_wls2_armor_legs_5_rare_crocodile_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_5_rare_crocodile_description",
        "name": "inventory_stack_view_wls2_armor_legs_5_rare_crocodile_name",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_armor_legs_5_rare_crocodile_icon",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_5_rare_crocodile",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_5_rare_crocodile_description",
        "en": {
          "description": "Pants with reinforced patches made of thick alligator skin. A full Hunter set will protect against mosquitoes",
          "full_description": "Pants with reinforced patches made of thick alligator skin. A full Hunter set will protect against mosquitoes",
          "name": "Alligator hunter pants"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_5_rare_crocodile_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_5_rare_crocodile_name",
        "zh": {
          "description": "裤子带有加固的补丁，由厚鳄鱼皮制成。完整的猎人套装将保护免受蚊子侵扰。",
          "full_description": "裤子带有加固的补丁，由厚鳄鱼皮制成。完整的猎人套装将保护免受蚊子侵扰。",
          "name": "短吻鳄猎人裤子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_5": 2,
            "wls2_resourse_primary_hide_alligator": 2,
            "wls2_resourse_secondary_cloth_5": 3,
            "wls2_resourse_secondary_leather_5": 1
          },
          "learn_exp": 3200,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_15_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_crocodile_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.25,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_5_rare_crocodile",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_armor_legs_5_rare_crocodile_icon",
      "stat_curves": {
        "armor": {
          "1": 304,
          "2": 334,
          "3": 365,
          "4": 395,
          "5": 426,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1
        },
        "dexterity": {
          "1": 2,
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
        },
        "max_durability": {
          "1": 14700,
          "2": 16100,
          "3": 17600,
          "4": 19100,
          "5": 20550
        },
        "mosquito_invulnerability": {
          "default": 1
        },
        "swamp_animal_resistance": {
          "1": 0.04,
          "2": 0.08,
          "3": 0.12,
          "4": 0.16,
          "5": 0.2
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "water_pressure_resistance": {
          "1": 0.1,
          "2": 0.1,
          "3": 0.1,
          "4": 0.1,
          "5": 0.1
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "mosquito_invulnerability": {
          "definition": {
            "is_percent": true,
            "name_value_format": "ui_item_stats_mosquito_mosquito_invulnerability",
            "sprite": "UI_main01/StatusBar_defence_from_moskito",
            "tooltip_type": "special"
          },
          "display_key": "ui_item_stats_mosquito_mosquito_invulnerability",
          "en": "{0}% mosquito protection with full Alligator hunter set",
          "zh": "穿着完整的短吻鳄猎人套装时{0}% 蚊子保护"
        },
        "swamp_animal_resistance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_swamp_animal_resistance_v2",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_percent_format"
          },
          "display_key": "ui_item_stats_swamp_animal_resistance_v2",
          "en": "Protection against animals in the marshes {0}",
          "zh": "在沼泽地对动物的保护 {0}"
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        },
        "water_pressure_resistance": {
          "definition": {
            "is_percent": true,
            "name": "ui_item_stats_water_pressure_resistance",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_minus_percent_format"
          },
          "display_key": "ui_item_stats_water_pressure_resistance",
          "en": "Slowing down from swamp \nwater",
          "zh": "沼泽地水域使速度减慢"
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 5,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_100"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_200"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_10"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_20"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "5503fdb8cabe987466c54ccbe0104af143e823b18d080e631966a8998c5d9e38",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "短吻鳄猎人裤子",
        "name_en": "Alligator hunter pants",
        "description_zh": "裤子带有加固的补丁，由厚鳄鱼皮制成。完整的猎人套装将保护免受蚊子侵扰。",
        "description_en": "Pants with reinforced patches made of thick alligator skin. A full Hunter set will protect against mosquitoes",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_legs_5_rare_crocodile 短吻鳄猎人裤子 alligator hunter pants 裤子带有加固的补丁，由厚鳄鱼皮制成。完整的猎人套装将保护免受蚊子侵扰。 pants with reinforced patches made of thick alligator skin. a full hunter set will protect against mosquitoes armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 304,
            "unit": "",
            "display": "304"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 14700,
            "unit": "",
            "display": "14700"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 2,
            "unit": "",
            "display": "+2"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "fixed": [
          {
            "key": "mosquito_invulnerability",
            "label": "完整猎鳄套装防蚊",
            "value": 1,
            "unit": "%",
            "display": "100%"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          },
          {
            "key": "water_pressure_resistance",
            "label": "沼泽减速",
            "value": 0.1,
            "unit": "%",
            "display": "-10%"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 304,
              "dexterity": 2,
              "max_durability": 14700,
              "swamp_animal_resistance": 0.04
            },
            "display": {
              "armor": "304",
              "dexterity": "+2",
              "max_durability": "14700",
              "swamp_animal_resistance": "+4%"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 334,
              "dexterity": 3,
              "max_durability": 16100,
              "swamp_animal_resistance": 0.08
            },
            "display": {
              "armor": "334",
              "dexterity": "+3",
              "max_durability": "16100",
              "swamp_animal_resistance": "+8%"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 365,
              "dexterity": 4,
              "max_durability": 17600,
              "swamp_animal_resistance": 0.12
            },
            "display": {
              "armor": "365",
              "dexterity": "+4",
              "max_durability": "17600",
              "swamp_animal_resistance": "+12%"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 395,
              "dexterity": 5,
              "max_durability": 19100,
              "swamp_animal_resistance": 0.16
            },
            "display": {
              "armor": "395",
              "dexterity": "+5",
              "max_durability": "19100",
              "swamp_animal_resistance": "+16%"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 426,
              "dexterity": 6,
              "max_durability": 20550,
              "swamp_animal_resistance": 0.2
            },
            "display": {
              "armor": "426",
              "dexterity": "+6",
              "max_durability": "20550",
              "swamp_animal_resistance": "+20%"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 427,
              "dexterity": 6,
              "max_durability": 20550,
              "swamp_animal_resistance": 0.2
            },
            "display": {
              "armor": "427",
              "dexterity": "+6",
              "max_durability": "20550",
              "swamp_animal_resistance": "+20%"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          },
          {
            "key": "swamp_animal_resistance",
            "label": "沼泽动物抗性",
            "unit": "%"
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1426。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 24,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 24,
        "description": "inventory_stack_view_wls2_armor_legs_5_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_5_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_legs_5_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_legs_5_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_legs_upgrade_5_icon",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_5_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_5_uncommon_description",
        "en": {
          "description": "Pants with a bandolier for your ammunition",
          "full_description": "Pants with a bandolier for your ammunition",
          "name": "Gunfighter's pants"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_5_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_5_uncommon_name",
        "zh": {
          "description": "配有子弹带的裤子，适合携带弹药",
          "full_description": "配有子弹带的裤子，适合携带弹药",
          "name": "枪手裤子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_5": 3,
            "wls2_resourse_secondary_leather_5": 5
          },
          "learn_exp": 1600,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_7_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_uncommon_desc"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_legs_5_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_15"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_2_a",
            "durability_factor": 0.25,
            "level_max": 100,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_5_uncommon",
            "transaction_id": "transaction_iap_wls_2_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_1_a",
            "durability_factor": 0.25,
            "level_max": 120,
            "level_min": 101,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_5_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_legs_upgrade_5_icon",
      "stat_curves": {
        "armor": {
          "1": 216,
          "2": 238,
          "3": 259,
          "4": 281,
          "5": 302,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "dexterity": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5
        },
        "max_durability": {
          "1": 8300,
          "2": 9100,
          "3": 9950,
          "4": 10800,
          "5": 11600
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "water_pressure_resistance": {
          "1": 0.02,
          "2": 0.02,
          "3": 0.02,
          "4": 0.02,
          "5": 0.02
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        },
        "water_pressure_resistance": {
          "definition": {
            "is_percent": true,
            "name": "ui_item_stats_water_pressure_resistance",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_minus_percent_format"
          },
          "display_key": "ui_item_stats_water_pressure_resistance",
          "en": "Slowing down from swamp \nwater",
          "zh": "沼泽地水域使速度减慢"
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 5,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_50"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_100"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_5"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_10"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "6d181875f6e4c351f53e8f7a0b3e2ca9b65179356d06c8ff4a098ad9482dfef9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "枪手裤子",
        "name_en": "Gunfighter's pants",
        "description_zh": "配有子弹带的裤子，适合携带弹药",
        "description_en": "Pants with a bandolier for your ammunition",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_legs_5_uncommon 枪手裤子 gunfighter's pants 配有子弹带的裤子，适合携带弹药 pants with a bandolier for your ammunition armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 216,
            "unit": "",
            "display": "216"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 8300,
            "unit": "",
            "display": "8300"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "fixed": [
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          },
          {
            "key": "water_pressure_resistance",
            "label": "沼泽减速",
            "value": 0.02,
            "unit": "%",
            "display": "-2%"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 216,
              "dexterity": 1,
              "max_durability": 8300
            },
            "display": {
              "armor": "216",
              "dexterity": "+1",
              "max_durability": "8300"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 238,
              "dexterity": 2,
              "max_durability": 9100
            },
            "display": {
              "armor": "238",
              "dexterity": "+2",
              "max_durability": "9100"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 259,
              "dexterity": 3,
              "max_durability": 9950
            },
            "display": {
              "armor": "259",
              "dexterity": "+3",
              "max_durability": "9950"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 281,
              "dexterity": 4,
              "max_durability": 10800
            },
            "display": {
              "armor": "281",
              "dexterity": "+4",
              "max_durability": "10800"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 302,
              "dexterity": 5,
              "max_durability": 11600
            },
            "display": {
              "armor": "302",
              "dexterity": "+5",
              "max_durability": "11600"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 303,
              "dexterity": 5,
              "max_durability": 11600
            },
            "display": {
              "armor": "303",
              "dexterity": "+5",
              "max_durability": "11600"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1302。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 36,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 36,
        "description": "inventory_stack_view_wls2_armor_legs_6_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_6_common_description",
        "name": "inventory_stack_view_wls2_armor_legs_6_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_armor_legs_6_common",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_6_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_6_common_description",
        "en": {
          "description": "Reliable cover for journeying souls",
          "full_description": "Reliable cover for journeying souls",
          "name": "Wanderer pants"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_6_common_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_6_common_name",
        "zh": {
          "description": "可靠的保护，为旅行的灵魂",
          "full_description": "可靠的保护，为旅行的灵魂",
          "name": "漫游者裤子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_6": 2,
            "wls2_resourse_secondary_leather_6": 4
          },
          "learn_exp": 3200,
          "min_level": 1,
          "required_electricity": 4,
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_armor_legs_6_common",
      "stat_curves": {
        "armor": {
          "1": 320,
          "2": 352,
          "3": 384,
          "4": 416,
          "5": 448,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0
        },
        "max_durability": {
          "1": 10670,
          "2": 11750,
          "3": 12800,
          "4": 13900,
          "5": 14950
        },
        "snow_resistance": {
          "1": 0.02,
          "2": 0.02,
          "3": 0.02,
          "4": 0.02,
          "5": 0.02
        },
        "warm_modifier": {
          "1": 1.5,
          "2": 1.5,
          "3": 1.5,
          "4": 1.5,
          "5": 1.5
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "snow_resistance": {
          "definition": {
            "is_percent": true,
            "name": "ui_item_stats_snow_resistance",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_minus_percent_format"
          },
          "display_key": "ui_item_stats_snow_resistance",
          "en": "Slowdown from Snowdrifts",
          "zh": "雪堆减速"
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 6,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_70"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_80"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "coin_id": "spend_coin_soft_90"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "coin_id": "spend_coin_soft_100"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "a9dcb3b0e8b65d6bddac09ecde5b3d14062820f27833d7dfa59b4587886f1347",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "漫游者裤子",
        "name_en": "Wanderer pants",
        "description_zh": "可靠的保护，为旅行的灵魂",
        "description_en": "Reliable cover for journeying souls",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_legs_6_common 漫游者裤子 wanderer pants 可靠的保护，为旅行的灵魂 reliable cover for journeying souls armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 320,
            "unit": "",
            "display": "320"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 10670,
            "unit": "",
            "display": "10670"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 0,
            "unit": "",
            "display": "0"
          },
          {
            "key": "snow_resistance",
            "label": "雪地减速",
            "value": 0.02,
            "unit": "%",
            "display": "-2%"
          }
        ],
        "fixed": [
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 320,
              "max_durability": 10670
            },
            "display": {
              "armor": "320",
              "max_durability": "10670"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 352,
              "max_durability": 11750
            },
            "display": {
              "armor": "352",
              "max_durability": "11750"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 384,
              "max_durability": 12800
            },
            "display": {
              "armor": "384",
              "max_durability": "12800"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 416,
              "max_durability": 13900
            },
            "display": {
              "armor": "416",
              "max_durability": "13900"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 448,
              "max_durability": 14950
            },
            "display": {
              "armor": "448",
              "max_durability": "14950"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 449,
              "max_durability": 14950
            },
            "display": {
              "armor": "449",
              "max_durability": "14950"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1448。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 39,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 39,
        "description": "inventory_stack_view_wls2_armor_legs_6_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_6_epic_description",
        "name": "inventory_stack_view_wls2_armor_legs_6_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_legs_6_epic",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_6_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_6_epic_description",
        "en": {
          "description": "Insulated pants tailored for adventurers, give superior protection against icy winds and rugged terrains",
          "full_description": "Insulated pants tailored for adventurers, give superior protection against icy winds and rugged terrains",
          "name": "Boreal legend pants"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_6_epic_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_6_epic_name",
        "zh": {
          "description": "为冒险者量身定制的保温裤，可提供卓越的防护，抵御寒风和崎岖地形",
          "full_description": "为冒险者量身定制的保温裤，可提供卓越的防护，抵御寒风和崎岖地形",
          "name": "极地传奇裤子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 7,
            "wls2_resourse_fourfold_nails_6": 4,
            "wls2_resourse_secondary_cloth_6": 20,
            "wls2_resourse_secondary_leather_6": 8
          },
          "learn_exp": 6400,
          "min_level": 0,
          "required_electricity": 10,
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_epic_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.25,
            "level_max": 125,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_6_epic",
            "transaction_id": "transaction_iap_wls_4_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.25,
            "level_min": 126,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_6_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_legs_6_epic",
      "stat_curves": {
        "armor": {
          "1": 865,
          "2": 952,
          "3": 1038,
          "4": 1125,
          "5": 1211,
          "per_level_after_max": 1
        },
        "dexterity": {
          "1": 5,
          "2": 7,
          "3": 9,
          "4": 10,
          "5": 12
        },
        "firearm_resistance": {
          "1": 0.04,
          "2": 0.08,
          "3": 0.12,
          "4": 0.16,
          "5": 0.2
        },
        "health_increment": {
          "1": 100,
          "2": 120,
          "3": 140,
          "4": 160,
          "5": 200
        },
        "max_durability": {
          "1": 37050,
          "2": 40750,
          "3": 44500,
          "4": 48200,
          "5": 51900
        },
        "snow_resistance": {
          "1": 0.02,
          "2": 0.02,
          "3": 0.02,
          "4": 0.02,
          "5": 0.02
        },
        "warm_modifier": {
          "1": 2,
          "2": 2,
          "3": 2,
          "4": 2,
          "5": 2
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "firearm_resistance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_firearm_resistance_v2",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_percent_format"
          },
          "display_key": "ui_item_stats_firearm_resistance_v2",
          "en": "Firearm resistance {0}",
          "zh": "枪弹抗性 {0}"
        },
        "health_increment": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name_value_format": "ui_item_stats_health_modifier_v2",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_health_modifier_v2",
          "en": "Max health {0}",
          "zh": "最大生命值 {0}"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "snow_resistance": {
          "definition": {
            "is_percent": true,
            "name": "ui_item_stats_snow_resistance",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_minus_percent_format"
          },
          "display_key": "ui_item_stats_snow_resistance",
          "en": "Slowdown from Snowdrifts",
          "zh": "雪堆减速"
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 6,
      "tool_id": null,
      "upgrade": {
        "10": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_20"
        },
        "11": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_25"
        },
        "12": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_30"
        },
        "13": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_35"
        },
        "14": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_40"
        },
        "15": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "16": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "17": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "18": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "19": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "2": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_25"
        },
        "20": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "21": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "22": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "23": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "24": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "25": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "26": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "27": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "28": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "29": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "3": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "30": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "31": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "32": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "33": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "34": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "35": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "36": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "37": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "38": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "39": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "4": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_100"
        },
        "40": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "41": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "42": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "43": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "44": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "45": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "46": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "47": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "48": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "49": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "5": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_150"
        },
        "50": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "6": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_2"
        },
        "7": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_5"
        },
        "8": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_10"
        },
        "9": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_15"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "dc1be28529e4add5c472949ac7cbde43ae9769f37114e064d42eebf5ca9638c1",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "极地传奇裤子",
        "name_en": "Boreal legend pants",
        "description_zh": "为冒险者量身定制的保温裤，可提供卓越的防护，抵御寒风和崎岖地形",
        "description_en": "Insulated pants tailored for adventurers, give superior protection against icy winds and rugged terrains",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_legs_6_epic 极地传奇裤子 boreal legend pants 为冒险者量身定制的保温裤，可提供卓越的防护，抵御寒风和崎岖地形 insulated pants tailored for adventurers, give superior protection against icy winds and rugged terrains armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 865,
            "unit": "",
            "display": "865"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 37050,
            "unit": "",
            "display": "37050"
          },
          {
            "key": "health_increment",
            "label": "生命加成",
            "value": 100,
            "unit": "",
            "display": "+100"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 5,
            "unit": "",
            "display": "+5"
          }
        ],
        "fixed": [
          {
            "key": "snow_resistance",
            "label": "雪地减速",
            "value": 0.02,
            "unit": "%",
            "display": "-2%"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 2,
            "unit": "",
            "display": "2"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 865,
              "dexterity": 5,
              "firearm_resistance": 0.04,
              "health_increment": 100,
              "max_durability": 37050
            },
            "display": {
              "armor": "865",
              "dexterity": "+5",
              "firearm_resistance": "+4%",
              "health_increment": "+100",
              "max_durability": "37050"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 952,
              "dexterity": 7,
              "firearm_resistance": 0.08,
              "health_increment": 120,
              "max_durability": 40750
            },
            "display": {
              "armor": "952",
              "dexterity": "+7",
              "firearm_resistance": "+8%",
              "health_increment": "+120",
              "max_durability": "40750"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1038,
              "dexterity": 9,
              "firearm_resistance": 0.12,
              "health_increment": 140,
              "max_durability": 44500
            },
            "display": {
              "armor": "1038",
              "dexterity": "+9",
              "firearm_resistance": "+12%",
              "health_increment": "+140",
              "max_durability": "44500"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1125,
              "dexterity": 10,
              "firearm_resistance": 0.16,
              "health_increment": 160,
              "max_durability": 48200
            },
            "display": {
              "armor": "1125",
              "dexterity": "+10",
              "firearm_resistance": "+16%",
              "health_increment": "+160",
              "max_durability": "48200"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1211,
              "dexterity": 12,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 51900
            },
            "display": {
              "armor": "1211",
              "dexterity": "+12",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "51900"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1212,
              "dexterity": 12,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 51900
            },
            "display": {
              "armor": "1212",
              "dexterity": "+12",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "51900"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "firearm_resistance",
            "label": "枪弹抗性",
            "unit": "%"
          },
          {
            "key": "health_increment",
            "label": "生命加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 2211。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 38,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 38,
        "description": "inventory_stack_view_wls2_armor_legs_6_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_6_rare_description",
        "name": "inventory_stack_view_wls2_armor_legs_6_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_armor_legs_6_rare",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_6_rare_description",
        "en": {
          "description": "Supreme protection for icy realms",
          "full_description": "Supreme protection for icy realms",
          "name": "Klondike conqueror pants"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_6_rare_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_6_rare_name",
        "zh": {
          "description": "冰雪领域的至高保护",
          "full_description": "冰雪领域的至高保护",
          "name": "肯洛迪克征服者裤子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_6": 3,
            "wls2_resourse_secondary_cloth_6": 15,
            "wls2_resourse_secondary_leather_6": 7
          },
          "learn_exp": 6400,
          "min_level": 0,
          "required_electricity": 8,
          "transaction_id": "transaction_iap_wls_15_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.25,
            "level_max": 120,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_6_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_2_a",
            "durability_factor": 0.25,
            "level_min": 121,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_6_rare",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_armor_legs_6_rare",
      "stat_curves": {
        "armor": {
          "1": 720,
          "2": 792,
          "3": 864,
          "4": 936,
          "5": 1008,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0
        },
        "dexterity": {
          "1": 4,
          "2": 5,
          "3": 6,
          "4": 8,
          "5": 10
        },
        "firearm_resistance": {
          "1": 0.04,
          "2": 0.08,
          "3": 0.12,
          "4": 0.16,
          "5": 0.2
        },
        "max_durability": {
          "1": 26350,
          "2": 29000,
          "3": 31600,
          "4": 34250,
          "5": 36850
        },
        "snow_resistance": {
          "1": 0.02,
          "2": 0.02,
          "3": 0.02,
          "4": 0.02,
          "5": 0.02
        },
        "warm_modifier": {
          "1": 2,
          "2": 2,
          "3": 2,
          "4": 2,
          "5": 2
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "firearm_resistance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_firearm_resistance_v2",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_percent_format"
          },
          "display_key": "ui_item_stats_firearm_resistance_v2",
          "en": "Firearm resistance {0}",
          "zh": "枪弹抗性 {0}"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "snow_resistance": {
          "definition": {
            "is_percent": true,
            "name": "ui_item_stats_snow_resistance",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_minus_percent_format"
          },
          "display_key": "ui_item_stats_snow_resistance",
          "en": "Slowdown from Snowdrifts",
          "zh": "雪堆减速"
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 6,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_200"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_400"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_20"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_40"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "023fe310a431a323e48325426eeaf770c4cdc22b48c69497c30182234b031f7c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "肯洛迪克征服者裤子",
        "name_en": "Klondike conqueror pants",
        "description_zh": "冰雪领域的至高保护",
        "description_en": "Supreme protection for icy realms",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_legs_6_rare 肯洛迪克征服者裤子 klondike conqueror pants 冰雪领域的至高保护 supreme protection for icy realms armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 720,
            "unit": "",
            "display": "720"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 26350,
            "unit": "",
            "display": "26350"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 4,
            "unit": "",
            "display": "+4"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 0,
            "unit": "",
            "display": "0"
          }
        ],
        "fixed": [
          {
            "key": "snow_resistance",
            "label": "雪地减速",
            "value": 0.02,
            "unit": "%",
            "display": "-2%"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 2,
            "unit": "",
            "display": "2"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 720,
              "dexterity": 4,
              "firearm_resistance": 0.04,
              "max_durability": 26350
            },
            "display": {
              "armor": "720",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "max_durability": "26350"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 792,
              "dexterity": 5,
              "firearm_resistance": 0.08,
              "max_durability": 29000
            },
            "display": {
              "armor": "792",
              "dexterity": "+5",
              "firearm_resistance": "+8%",
              "max_durability": "29000"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 864,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "max_durability": 31600
            },
            "display": {
              "armor": "864",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "max_durability": "31600"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 936,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "max_durability": 34250
            },
            "display": {
              "armor": "936",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "max_durability": "34250"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1008,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 36850
            },
            "display": {
              "armor": "1008",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "max_durability": "36850"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1009,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 36850
            },
            "display": {
              "armor": "1009",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "max_durability": "36850"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "firearm_resistance",
            "label": "枪弹抗性",
            "unit": "%"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 2008。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 37,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 37,
        "description": "inventory_stack_view_wls2_armor_legs_6_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_6_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_legs_6_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_armor_legs_6_uncommon",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_6_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_6_uncommon_description",
        "en": {
          "description": "Durable pants for frontier trails",
          "full_description": "Durable pants for frontier trails",
          "name": "Frontier pants"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_6_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_6_uncommon_name",
        "zh": {
          "description": "耐用的裤子，适用于边疆小径",
          "full_description": "耐用的裤子，适用于边疆小径",
          "name": "前线人裤子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_6": 1,
            "wls2_resourse_secondary_cloth_6": 3,
            "wls2_resourse_secondary_leather_6": 5
          },
          "learn_exp": 3200,
          "min_level": 0,
          "required_electricity": 6,
          "transaction_id": "transaction_iap_wls_7_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_uncommon_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_2_a",
            "durability_factor": 0.25,
            "level_max": 120,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_6_uncommon",
            "transaction_id": "transaction_iap_wls_2_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_1_a",
            "durability_factor": 0.25,
            "level_min": 121,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_6_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_armor_legs_6_uncommon",
      "stat_curves": {
        "armor": {
          "1": 400,
          "2": 440,
          "3": 480,
          "4": 520,
          "5": 560,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0
        },
        "dexterity": {
          "1": 4,
          "2": 5,
          "3": 6,
          "4": 8,
          "5": 10
        },
        "max_durability": {
          "1": 14850,
          "2": 16350,
          "3": 17800,
          "4": 19300,
          "5": 20800
        },
        "snow_resistance": {
          "1": 0.02,
          "2": 0.02,
          "3": 0.02,
          "4": 0.02,
          "5": 0.02
        },
        "warm_modifier": {
          "1": 2,
          "2": 2,
          "3": 2,
          "4": 2,
          "5": 2
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "snow_resistance": {
          "definition": {
            "is_percent": true,
            "name": "ui_item_stats_snow_resistance",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_minus_percent_format"
          },
          "display_key": "ui_item_stats_snow_resistance",
          "en": "Slowdown from Snowdrifts",
          "zh": "雪堆减速"
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 6,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_100"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_200"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_5"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_10"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "ad18bb5168c5dd84e3609293482a356779144336f0fae1c4cfad895c0c20e81c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "前线人裤子",
        "name_en": "Frontier pants",
        "description_zh": "耐用的裤子，适用于边疆小径",
        "description_en": "Durable pants for frontier trails",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_legs_6_uncommon 前线人裤子 frontier pants 耐用的裤子，适用于边疆小径 durable pants for frontier trails armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 400,
            "unit": "",
            "display": "400"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 14850,
            "unit": "",
            "display": "14850"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 4,
            "unit": "",
            "display": "+4"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 0,
            "unit": "",
            "display": "0"
          }
        ],
        "fixed": [
          {
            "key": "snow_resistance",
            "label": "雪地减速",
            "value": 0.02,
            "unit": "%",
            "display": "-2%"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 2,
            "unit": "",
            "display": "2"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 400,
              "dexterity": 4,
              "max_durability": 14850
            },
            "display": {
              "armor": "400",
              "dexterity": "+4",
              "max_durability": "14850"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 440,
              "dexterity": 5,
              "max_durability": 16350
            },
            "display": {
              "armor": "440",
              "dexterity": "+5",
              "max_durability": "16350"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 480,
              "dexterity": 6,
              "max_durability": 17800
            },
            "display": {
              "armor": "480",
              "dexterity": "+6",
              "max_durability": "17800"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 520,
              "dexterity": 8,
              "max_durability": 19300
            },
            "display": {
              "armor": "520",
              "dexterity": "+8",
              "max_durability": "19300"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 560,
              "dexterity": 10,
              "max_durability": 20800
            },
            "display": {
              "armor": "560",
              "dexterity": "+10",
              "max_durability": "20800"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 561,
              "dexterity": 10,
              "max_durability": 20800
            },
            "display": {
              "armor": "561",
              "dexterity": "+10",
              "max_durability": "20800"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1560。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 42,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 42,
        "equip_behaviour": {
          "type": "durability"
        },
        "name": "wls2_armor_legs_7_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_7_common",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_7_common",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Bronco pants"
        },
        "full_description_key": null,
        "name_key": "wls2_armor_legs_7_common_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "布朗科裤子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_7": 2,
            "wls2_resourse_secondary_leather_7": 4
          },
          "learn_exp": 3200,
          "min_level": 1,
          "required_electricity": 8,
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_7_common",
      "stat_curves": {
        "armor": {
          "1": 640,
          "2": 704,
          "3": 768,
          "4": 832,
          "5": 896,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1
        },
        "max_durability": {
          "1": 18750,
          "2": 20600,
          "3": 22500,
          "4": 24350,
          "5": 26250
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 7,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_90"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_100"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "coin_id": "spend_coin_soft_110"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "coin_id": "spend_coin_soft_120"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "27e9e204dbdb835bc993563dcc302dcf8c349a1a4f18e7a613d31f9303611158",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "布朗科裤子",
        "name_en": "Bronco pants",
        "description_zh": "",
        "description_en": "",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_legs_7_common 布朗科裤子 bronco pants armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 640,
            "unit": "",
            "display": "640"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 18750,
            "unit": "",
            "display": "18750"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 1,
            "unit": "",
            "display": "1"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 640,
              "max_durability": 18750
            },
            "display": {
              "armor": "640",
              "max_durability": "18750"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 704,
              "max_durability": 20600
            },
            "display": {
              "armor": "704",
              "max_durability": "20600"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 768,
              "max_durability": 22500
            },
            "display": {
              "armor": "768",
              "max_durability": "22500"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 832,
              "max_durability": 24350
            },
            "display": {
              "armor": "832",
              "max_durability": "24350"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 896,
              "max_durability": 26250
            },
            "display": {
              "armor": "896",
              "max_durability": "26250"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 897,
              "max_durability": 26250
            },
            "display": {
              "armor": "897",
              "max_durability": "26250"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1896。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 45,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 45,
        "equip_behaviour": {
          "type": "durability"
        },
        "name": "wls2_armor_legs_7_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_7_epic",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_7_epic",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Rio Bravo legend pants"
        },
        "full_description_key": null,
        "name_key": "wls2_armor_legs_7_epic_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "里约布拉沃传奇裤子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 9,
            "wls2_resourse_fourfold_nails_7": 4,
            "wls2_resourse_secondary_cloth_7": 20,
            "wls2_resourse_secondary_leather_7": 8
          },
          "learn_exp": 6400,
          "min_level": 0,
          "required_electricity": 20,
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_epic_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_4_a",
            "durability_factor": 0.25,
            "level_max": 130,
            "level_min": 115,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_7_epic",
            "transaction_id": "transaction_iap_wls_5_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.25,
            "level_min": 131,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_7_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_7_epic",
      "stat_curves": {
        "armor": {
          "1": 1730,
          "2": 1903,
          "3": 2076,
          "4": 2249,
          "5": 2422,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 2,
          "2": 2,
          "3": 2,
          "4": 2,
          "5": 2
        },
        "dexterity": {
          "1": 8,
          "2": 9,
          "3": 10,
          "4": 12,
          "5": 14
        },
        "fire_resistance": {
          "1": 0.04,
          "2": 0.08,
          "3": 0.12,
          "4": 0.16,
          "5": 0.2
        },
        "firearm_resistance": {
          "1": 0.04,
          "2": 0.08,
          "3": 0.12,
          "4": 0.16,
          "5": 0.2
        },
        "health_increment": {
          "1": 100,
          "2": 120,
          "3": 140,
          "4": 160,
          "5": 200
        },
        "max_durability": {
          "1": 66700,
          "2": 73400,
          "3": 80050,
          "4": 86700,
          "5": 93400
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "fire_resistance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name": "ui_item_stats_fire_resistance",
            "name_value_format": "ui_item_stats_fire_resistance_v2",
            "sprite": "UI_main01/StatusBar_FireDefence",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_percent_format"
          },
          "display_key": "ui_item_stats_fire_resistance",
          "en": "Fire resistance",
          "zh": "耐火性"
        },
        "firearm_resistance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_firearm_resistance_v2",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_percent_format"
          },
          "display_key": "ui_item_stats_firearm_resistance_v2",
          "en": "Firearm resistance {0}",
          "zh": "枪弹抗性 {0}"
        },
        "health_increment": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name_value_format": "ui_item_stats_health_modifier_v2",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_health_modifier_v2",
          "en": "Max health {0}",
          "zh": "最大生命值 {0}"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 7,
      "tool_id": null,
      "upgrade": {
        "10": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_20"
        },
        "11": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_25"
        },
        "12": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_30"
        },
        "13": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_35"
        },
        "14": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_40"
        },
        "15": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "16": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "17": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "18": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "19": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "2": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "20": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "21": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "22": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "23": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "24": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "25": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "26": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "27": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "28": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "29": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "3": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_100"
        },
        "30": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "31": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "32": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "33": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "34": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "35": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "36": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "37": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "38": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "39": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "4": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_150"
        },
        "40": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "41": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "42": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "43": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "44": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "45": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "46": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "47": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "48": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "49": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "5": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_200"
        },
        "50": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
        },
        "6": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_2"
        },
        "7": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_5"
        },
        "8": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_10"
        },
        "9": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_15"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "96bd70afe948d1bd402496372676b2798e3c0fbe3411220c6a1674d9de6c836a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "里约布拉沃传奇裤子",
        "name_en": "Rio Bravo legend pants",
        "description_zh": "",
        "description_en": "",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_legs_7_epic 里约布拉沃传奇裤子 rio bravo legend pants armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 1730,
            "unit": "",
            "display": "1730"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 66700,
            "unit": "",
            "display": "66700"
          },
          {
            "key": "health_increment",
            "label": "生命加成",
            "value": 100,
            "unit": "",
            "display": "+100"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 8,
            "unit": "",
            "display": "+8"
          }
        ],
        "fixed": [
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 2,
            "unit": "",
            "display": "2"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 1730,
              "dexterity": 8,
              "fire_resistance": 0.04,
              "firearm_resistance": 0.04,
              "health_increment": 100,
              "max_durability": 66700
            },
            "display": {
              "armor": "1730",
              "dexterity": "+8",
              "fire_resistance": "+4%",
              "firearm_resistance": "+4%",
              "health_increment": "+100",
              "max_durability": "66700"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 1903,
              "dexterity": 9,
              "fire_resistance": 0.08,
              "firearm_resistance": 0.08,
              "health_increment": 120,
              "max_durability": 73400
            },
            "display": {
              "armor": "1903",
              "dexterity": "+9",
              "fire_resistance": "+8%",
              "firearm_resistance": "+8%",
              "health_increment": "+120",
              "max_durability": "73400"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 2076,
              "dexterity": 10,
              "fire_resistance": 0.12,
              "firearm_resistance": 0.12,
              "health_increment": 140,
              "max_durability": 80050
            },
            "display": {
              "armor": "2076",
              "dexterity": "+10",
              "fire_resistance": "+12%",
              "firearm_resistance": "+12%",
              "health_increment": "+140",
              "max_durability": "80050"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 2249,
              "dexterity": 12,
              "fire_resistance": 0.16,
              "firearm_resistance": 0.16,
              "health_increment": 160,
              "max_durability": 86700
            },
            "display": {
              "armor": "2249",
              "dexterity": "+12",
              "fire_resistance": "+16%",
              "firearm_resistance": "+16%",
              "health_increment": "+160",
              "max_durability": "86700"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 2422,
              "dexterity": 14,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 93400
            },
            "display": {
              "armor": "2422",
              "dexterity": "+14",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "93400"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 2423,
              "dexterity": 14,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 93400
            },
            "display": {
              "armor": "2423",
              "dexterity": "+14",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "93400"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "fire_resistance",
            "label": "火焰抗性",
            "unit": "%"
          },
          {
            "key": "firearm_resistance",
            "label": "枪弹抗性",
            "unit": "%"
          },
          {
            "key": "health_increment",
            "label": "生命加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 3422。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 44,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 44,
        "equip_behaviour": {
          "type": "durability"
        },
        "name": "wls2_armor_legs_7_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_7_rare",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_7_rare",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "City Marshal's pants"
        },
        "full_description_key": null,
        "name_key": "wls2_armor_legs_7_rare_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "城市警长的裤子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_7": 3,
            "wls2_resourse_secondary_cloth_7": 15,
            "wls2_resourse_secondary_leather_7": 7
          },
          "learn_exp": 6400,
          "min_level": 0,
          "required_electricity": 16,
          "transaction_id": "transaction_iap_wls_15_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.25,
            "level_max": 125,
            "level_min": 115,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_7_rare",
            "transaction_id": "transaction_iap_wls_4_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.25,
            "level_min": 126,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_7_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_7_rare",
      "stat_curves": {
        "armor": {
          "1": 1440,
          "2": 1584,
          "3": 1728,
          "4": 1872,
          "5": 2016,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 2,
          "2": 2,
          "3": 2,
          "4": 2,
          "5": 2
        },
        "dexterity": {
          "1": 6,
          "2": 7,
          "3": 8,
          "4": 10,
          "5": 12
        },
        "fire_resistance": {
          "1": 0.04,
          "2": 0.08,
          "3": 0.12,
          "4": 0.16,
          "5": 0.2
        },
        "firearm_resistance": {
          "1": 0.04,
          "2": 0.08,
          "3": 0.12,
          "4": 0.16,
          "5": 0.2
        },
        "max_durability": {
          "1": 47800,
          "2": 52550,
          "3": 57350,
          "4": 62150,
          "5": 66900
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "fire_resistance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name": "ui_item_stats_fire_resistance",
            "name_value_format": "ui_item_stats_fire_resistance_v2",
            "sprite": "UI_main01/StatusBar_FireDefence",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_percent_format"
          },
          "display_key": "ui_item_stats_fire_resistance",
          "en": "Fire resistance",
          "zh": "耐火性"
        },
        "firearm_resistance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_firearm_resistance_v2",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_percent_format"
          },
          "display_key": "ui_item_stats_firearm_resistance_v2",
          "en": "Firearm resistance {0}",
          "zh": "枪弹抗性 {0}"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 7,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_400"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_800"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_40"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_75"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "f0aea1b3364480e0e350dd781362edc169d9389896a925e7706893baeae5017b",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "城市警长的裤子",
        "name_en": "City Marshal's pants",
        "description_zh": "",
        "description_en": "",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_legs_7_rare 城市警长的裤子 city marshal's pants armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 1440,
            "unit": "",
            "display": "1440"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 47800,
            "unit": "",
            "display": "47800"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 6,
            "unit": "",
            "display": "+6"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 2,
            "unit": "",
            "display": "2"
          }
        ],
        "fixed": [
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 1440,
              "dexterity": 6,
              "fire_resistance": 0.04,
              "firearm_resistance": 0.04,
              "max_durability": 47800
            },
            "display": {
              "armor": "1440",
              "dexterity": "+6",
              "fire_resistance": "+4%",
              "firearm_resistance": "+4%",
              "max_durability": "47800"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 1584,
              "dexterity": 7,
              "fire_resistance": 0.08,
              "firearm_resistance": 0.08,
              "max_durability": 52550
            },
            "display": {
              "armor": "1584",
              "dexterity": "+7",
              "fire_resistance": "+8%",
              "firearm_resistance": "+8%",
              "max_durability": "52550"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1728,
              "dexterity": 8,
              "fire_resistance": 0.12,
              "firearm_resistance": 0.12,
              "max_durability": 57350
            },
            "display": {
              "armor": "1728",
              "dexterity": "+8",
              "fire_resistance": "+12%",
              "firearm_resistance": "+12%",
              "max_durability": "57350"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1872,
              "dexterity": 10,
              "fire_resistance": 0.16,
              "firearm_resistance": 0.16,
              "max_durability": 62150
            },
            "display": {
              "armor": "1872",
              "dexterity": "+10",
              "fire_resistance": "+16%",
              "firearm_resistance": "+16%",
              "max_durability": "62150"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 2016,
              "dexterity": 12,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "max_durability": 66900
            },
            "display": {
              "armor": "2016",
              "dexterity": "+12",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "max_durability": "66900"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 2017,
              "dexterity": 12,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "max_durability": 66900
            },
            "display": {
              "armor": "2017",
              "dexterity": "+12",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "max_durability": "66900"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "fire_resistance",
            "label": "火焰抗性",
            "unit": "%"
          },
          {
            "key": "firearm_resistance",
            "label": "枪弹抗性",
            "unit": "%"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 3016。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 43,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 43,
        "equip_behaviour": {
          "type": "durability"
        },
        "name": "wls2_armor_legs_7_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_7_uncommon",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_7_uncommon",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Sandscar pants"
        },
        "full_description_key": null,
        "name_key": "wls2_armor_legs_7_uncommon_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "沙痕裤"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_7": 1,
            "wls2_resourse_secondary_cloth_7": 3,
            "wls2_resourse_secondary_leather_7": 5
          },
          "learn_exp": 3200,
          "min_level": 0,
          "required_electricity": 12,
          "transaction_id": "transaction_iap_wls_8_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_uncommon_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.25,
            "level_max": 125,
            "level_min": 115,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_7_uncommon",
            "transaction_id": "transaction_iap_wls_3_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_2_a",
            "durability_factor": 0.25,
            "level_min": 126,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_legs_7_uncommon",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_7_uncommon",
      "stat_curves": {
        "armor": {
          "1": 800,
          "2": 880,
          "3": 960,
          "4": 1040,
          "5": 1120,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 2,
          "2": 2,
          "3": 2,
          "4": 2,
          "5": 2
        },
        "dexterity": {
          "1": 6,
          "2": 7,
          "3": 8,
          "4": 10,
          "5": 12
        },
        "fire_resistance": {
          "1": 0.02,
          "2": 0.04,
          "3": 0.06,
          "4": 0.08,
          "5": 0.1
        },
        "max_durability": {
          "1": 26700,
          "2": 29400,
          "3": 32050,
          "4": 34750,
          "5": 37400
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "cool_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_warmth_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_warmth_modifier",
          "en": "Heat up to:",
          "zh": "到热度："
        },
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "fire_resistance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name": "ui_item_stats_fire_resistance",
            "name_value_format": "ui_item_stats_fire_resistance_v2",
            "sprite": "UI_main01/StatusBar_FireDefence",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_percent_format"
          },
          "display_key": "ui_item_stats_fire_resistance",
          "en": "Fire resistance",
          "zh": "耐火性"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 7,
      "tool_id": null,
      "upgrade": {
        "10": {
          "coin_id": "spend_coin_soft_150"
        },
        "11": {
          "coin_id": "spend_coin_soft_200"
        },
        "12": {
          "coin_id": "spend_coin_soft_250"
        },
        "13": {
          "coin_id": "spend_coin_soft_300"
        },
        "14": {
          "coin_id": "spend_coin_soft_400"
        },
        "15": {
          "coin_id": "spend_coin_soft_500"
        },
        "16": {
          "coin_id": "spend_coin_soft_600"
        },
        "17": {
          "coin_id": "spend_coin_soft_700"
        },
        "18": {
          "coin_id": "spend_coin_soft_800"
        },
        "19": {
          "coin_id": "spend_coin_soft_900"
        },
        "2": {
          "coin_id": "spend_coin_soft_200"
        },
        "20": {
          "coin_id": "spend_coin_soft_1000"
        },
        "21": {
          "coin_id": "spend_coin_soft_1000"
        },
        "22": {
          "coin_id": "spend_coin_soft_1000"
        },
        "23": {
          "coin_id": "spend_coin_soft_1000"
        },
        "24": {
          "coin_id": "spend_coin_soft_1000"
        },
        "25": {
          "coin_id": "spend_coin_soft_1000"
        },
        "26": {
          "coin_id": "spend_coin_soft_1000"
        },
        "27": {
          "coin_id": "spend_coin_soft_1000"
        },
        "28": {
          "coin_id": "spend_coin_soft_1000"
        },
        "29": {
          "coin_id": "spend_coin_soft_1000"
        },
        "3": {
          "coin_id": "spend_coin_soft_400"
        },
        "30": {
          "coin_id": "spend_coin_soft_1000"
        },
        "31": {
          "coin_id": "spend_coin_soft_1000"
        },
        "32": {
          "coin_id": "spend_coin_soft_1000"
        },
        "33": {
          "coin_id": "spend_coin_soft_1000"
        },
        "34": {
          "coin_id": "spend_coin_soft_1000"
        },
        "35": {
          "coin_id": "spend_coin_soft_1000"
        },
        "36": {
          "coin_id": "spend_coin_soft_1000"
        },
        "37": {
          "coin_id": "spend_coin_soft_1000"
        },
        "38": {
          "coin_id": "spend_coin_soft_1000"
        },
        "39": {
          "coin_id": "spend_coin_soft_1000"
        },
        "4": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_10"
        },
        "40": {
          "coin_id": "spend_coin_soft_1000"
        },
        "41": {
          "coin_id": "spend_coin_soft_1000"
        },
        "42": {
          "coin_id": "spend_coin_soft_1000"
        },
        "43": {
          "coin_id": "spend_coin_soft_1000"
        },
        "44": {
          "coin_id": "spend_coin_soft_1000"
        },
        "45": {
          "coin_id": "spend_coin_soft_1000"
        },
        "46": {
          "coin_id": "spend_coin_soft_1000"
        },
        "47": {
          "coin_id": "spend_coin_soft_1000"
        },
        "48": {
          "coin_id": "spend_coin_soft_1000"
        },
        "49": {
          "coin_id": "spend_coin_soft_1000"
        },
        "5": {
          "server_wallets_transaction_id": "server_wallets_shop_transaction_20"
        },
        "50": {
          "coin_id": "spend_coin_soft_1000"
        },
        "6": {
          "coin_id": "spend_coin_soft_10"
        },
        "7": {
          "coin_id": "spend_coin_soft_25"
        },
        "8": {
          "coin_id": "spend_coin_soft_50"
        },
        "9": {
          "coin_id": "spend_coin_soft_100"
        }
      },
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "61597f7069c1775e403435a0b535328a94d261ed081c5ca0ebf632d86229ad07",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "沙痕裤",
        "name_en": "Sandscar pants",
        "description_zh": "",
        "description_en": "",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_legs_7_uncommon 沙痕裤 sandscar pants armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 800,
            "unit": "",
            "display": "800"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 26700,
            "unit": "",
            "display": "26700"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 6,
            "unit": "",
            "display": "+6"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 2,
            "unit": "",
            "display": "2"
          }
        ],
        "fixed": [
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 800,
              "dexterity": 6,
              "fire_resistance": 0.02,
              "max_durability": 26700
            },
            "display": {
              "armor": "800",
              "dexterity": "+6",
              "fire_resistance": "+2%",
              "max_durability": "26700"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 880,
              "dexterity": 7,
              "fire_resistance": 0.04,
              "max_durability": 29400
            },
            "display": {
              "armor": "880",
              "dexterity": "+7",
              "fire_resistance": "+4%",
              "max_durability": "29400"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 960,
              "dexterity": 8,
              "fire_resistance": 0.06,
              "max_durability": 32050
            },
            "display": {
              "armor": "960",
              "dexterity": "+8",
              "fire_resistance": "+6%",
              "max_durability": "32050"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1040,
              "dexterity": 10,
              "fire_resistance": 0.08,
              "max_durability": 34750
            },
            "display": {
              "armor": "1040",
              "dexterity": "+10",
              "fire_resistance": "+8%",
              "max_durability": "34750"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1120,
              "dexterity": 12,
              "fire_resistance": 0.1,
              "max_durability": 37400
            },
            "display": {
              "armor": "1120",
              "dexterity": "+12",
              "fire_resistance": "+10%",
              "max_durability": "37400"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1121,
              "dexterity": 12,
              "fire_resistance": 0.1,
              "max_durability": 37400
            },
            "display": {
              "armor": "1121",
              "dexterity": "+12",
              "fire_resistance": "+10%",
              "max_durability": "37400"
            }
          }
        ],
        "columns": [
          {
            "key": "armor",
            "label": "防御",
            "unit": ""
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "fire_resistance",
            "label": "火焰抗性",
            "unit": "%"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 2120。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 9,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 9,
        "description": "inventory_stack_view_wls2_armor_legs_rare_t4_lvl5_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_rare_t4_lvl5_description",
        "name": "inventory_stack_view_wls2_armor_legs_rare_t4_lvl5_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls2_armor_legs_upgrade_4_icon",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_rare_t4_lvl5",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_rare_t4_lvl5_description",
        "en": {
          "description": "Comfortable pants for all occasions",
          "full_description": "Comfortable pants for all occasions",
          "name": "Gentleman pants"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_rare_t4_lvl5_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_rare_t4_lvl5_name",
        "zh": {
          "description": "适合所有场合的舒适裤子。",
          "full_description": "适合所有场合的舒适裤子。",
          "name": "绅士长裤"
        }
      },
      "official_inclusion_status": "special_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_legs_upgrade_4_icon",
      "stat_curves": {
        "armor": {
          "default": 200
        },
        "max_durability": {
          "default": 250,
          "max": 125
        },
        "warm_modifier": {
          "default": 1.25
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "b441a64e10d2904572abc890cc1a09e21a4217480eded788195c6bc11afcab50",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "绅士长裤",
        "name_en": "Gentleman pants",
        "description_zh": "适合所有场合的舒适裤子。",
        "description_en": "Comfortable pants for all occasions",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_legs_rare_t4_lvl5 绅士长裤 gentleman pants 适合所有场合的舒适裤子。 comfortable pants for all occasions armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 200,
            "unit": "",
            "display": "200"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": null,
            "unit": "",
            "display": "待确认"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1.25,
            "unit": "",
            "display": "1.25"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [
          "耐久的旧版资料存在冲突：基础值 250，上限 125。"
        ],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 8,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 8,
        "description": "inventory_stack_view_wls2_armor_legs_uncommon_t4_lvl4_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_legs_uncommon_t4_lvl4_description",
        "name": "inventory_stack_view_wls2_armor_legs_uncommon_t4_lvl4_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls2_armor_legs_4_icon",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_uncommon_t4_lvl4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_legs_uncommon_t4_lvl4_description",
        "en": {
          "description": "These durable pants won't fail you, even in the most difficult of times",
          "full_description": "These durable pants won't fail you, even in the most difficult of times",
          "name": "Cowboy pants"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_legs_uncommon_t4_lvl4_description",
        "name_key": "inventory_stack_view_wls2_armor_legs_uncommon_t4_lvl4_name",
        "zh": {
          "description": "即使在最困难的时候，这条耐穿的裤子也不会让你失望。",
          "full_description": "即使在最困难的时候，这条耐穿的裤子也不会让你失望。",
          "name": "牛仔长裤"
        }
      },
      "official_inclusion_status": "special_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_legs_4_icon",
      "stat_curves": {
        "armor": {
          "default": 150
        },
        "max_durability": {
          "default": 125,
          "max": 62
        },
        "warm_modifier": {
          "default": 1
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "eee86e0965daf4500c641e9e534fdd42668f178dcbd1f383838ccb0b30be90cd",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "牛仔长裤",
        "name_en": "Cowboy pants",
        "description_zh": "即使在最困难的时候，这条耐穿的裤子也不会让你失望。",
        "description_en": "These durable pants won't fail you, even in the most difficult of times",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_legs_uncommon_t4_lvl4 牛仔长裤 cowboy pants 即使在最困难的时候，这条耐穿的裤子也不会让你失望。 these durable pants won't fail you, even in the most difficult of times armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 150,
            "unit": "",
            "display": "150"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": null,
            "unit": "",
            "display": "待确认"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [
          "耐久的旧版资料存在冲突：基础值 125，上限 62。"
        ],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 2,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 2,
        "description": "inventory_stack_view_wls_clothes_trousers_reinforced_1.5_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_trousers_reinforced_1.5_description",
        "name": "inventory_stack_view_wls_clothes_trousers_reinforced_1.5_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_trousers_reinforced_1.5",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_upgrade_1",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_trousers_reinforced_1.5_description",
        "en": {
          "description": "Leather patches in just the right spots will add to your courage. ",
          "full_description": "Leather patches in just the right spots will add to your courage. ",
          "name": "Sturdy pants"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_trousers_reinforced_1.5_description",
        "name_key": "inventory_stack_view_wls_clothes_trousers_reinforced_1.5_name",
        "zh": {
          "description": "打对了位置的补丁能给你带来勇气。",
          "full_description": "打对了位置的补丁能给你带来勇气。",
          "name": "结实的裤子"
        }
      },
      "official_inclusion_status": "special_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_trousers_reinforced_1.5",
      "stat_curves": {
        "armor": {
          "default": 30
        },
        "max_durability": {
          "default": 100,
          "max": 50
        },
        "warm_modifier": {
          "default": 0.75
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 1,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "238a3c63a6b6c7ee85698d99cb6aaf596a83dada08c6caeadf13884b1fef24a3",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "结实的裤子",
        "name_en": "Sturdy pants",
        "description_zh": "打对了位置的补丁能给你带来勇气。",
        "description_en": "Leather patches in just the right spots will add to your courage. ",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_legs_upgrade_1 结实的裤子 sturdy pants 打对了位置的补丁能给你带来勇气。 leather patches in just the right spots will add to your courage.  armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 30,
            "unit": "",
            "display": "30"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": null,
            "unit": "",
            "display": "待确认"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.75,
            "unit": "",
            "display": "0.75"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [
          "耐久的旧版资料存在冲突：基础值 100，上限 50。"
        ],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 4,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 4,
        "description": "inventory_stack_view_wls_clothes_reinforced_leather_pants_2.5_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_reinforced_leather_pants_2.5_description",
        "name": "inventory_stack_view_wls_clothes_reinforced_leather_pants_2.5_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_reinforced_leather_pants_2.5",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_upgrade_2",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_reinforced_leather_pants_2.5_description",
        "en": {
          "description": "Rivet reinforced jeans. Have faith in their invincibility",
          "full_description": "Rivet reinforced jeans. Have faith in their invincibility",
          "name": "Reinforced jeans"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_reinforced_leather_pants_2.5_description",
        "name_key": "inventory_stack_view_wls_clothes_reinforced_leather_pants_2.5_name",
        "zh": {
          "description": "金属板强化了牛仔裤，也强化了势不可挡的信念。",
          "full_description": "金属板强化了牛仔裤，也强化了势不可挡的信念。",
          "name": "强化的牛仔裤"
        }
      },
      "official_inclusion_status": "special_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_reinforced_leather_pants_2.5",
      "stat_curves": {
        "armor": {
          "default": 50
        },
        "max_durability": {
          "default": 150,
          "max": 75
        },
        "warm_modifier": {
          "default": 1.25
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 2,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "be857ae05496b3a0646f85788e7d240537cb44d76278a06072a6fc65a165bbf4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "强化的牛仔裤",
        "name_en": "Reinforced jeans",
        "description_zh": "金属板强化了牛仔裤，也强化了势不可挡的信念。",
        "description_en": "Rivet reinforced jeans. Have faith in their invincibility",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_legs_upgrade_2 强化的牛仔裤 reinforced jeans 金属板强化了牛仔裤，也强化了势不可挡的信念。 rivet reinforced jeans. have faith in their invincibility armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 50,
            "unit": "",
            "display": "50"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": null,
            "unit": "",
            "display": "待确认"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1.25,
            "unit": "",
            "display": "1.25"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [
          "耐久的旧版资料存在冲突：基础值 150，上限 75。"
        ],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 18,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 18,
        "description": "inventory_stack_view_Armor_legs_upgrade_3_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_Armor_legs_upgrade_3_description",
        "name": "inventory_stack_view_Armor_legs_upgrade_3_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/armor_legs_upgrade_3",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_upgrade_3",
      "localization": {
        "description_key": "inventory_stack_view_Armor_legs_upgrade_3_description",
        "en": {
          "description": "Pants lined with fleece. Wearing these allows you to spend the night right out in the snow. Keep them in good repair. ",
          "full_description": "Pants lined with fleece. Wearing these allows you to spend the night right out in the snow. Keep them in good repair. ",
          "name": "Fur lined pants"
        },
        "full_description_key": "inventory_stack_view_Armor_legs_upgrade_3_description",
        "name_key": "inventory_stack_view_Armor_legs_upgrade_3_name",
        "zh": {
          "description": "羊毛织成的裤子。穿上它，你可以在雪地里过夜。记得随时修补。",
          "full_description": "羊毛织成的裤子。穿上它，你可以在雪地里过夜。记得随时修补。",
          "name": "毛皮亚麻裤"
        }
      },
      "official_inclusion_status": "special_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/armor_legs_upgrade_3",
      "stat_curves": {
        "armor": {
          "default": 100
        },
        "max_durability": {
          "default": 200,
          "max": 100
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "6b2a701d2d734fb3f43eadaa5c7617b5403f580bf22b1cc9132bf94d15a66e62",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "毛皮亚麻裤",
        "name_en": "Fur lined pants",
        "description_zh": "羊毛织成的裤子。穿上它，你可以在雪地里过夜。记得随时修补。",
        "description_en": "Pants lined with fleece. Wearing these allows you to spend the night right out in the snow. Keep them in good repair. ",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_legs_upgrade_3 毛皮亚麻裤 fur lined pants 羊毛织成的裤子。穿上它，你可以在雪地里过夜。记得随时修补。 pants lined with fleece. wearing these allows you to spend the night right out in the snow. keep them in good repair.  armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 100,
            "unit": "",
            "display": "100"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": null,
            "unit": "",
            "display": "待确认"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 3,
            "unit": "",
            "display": "3"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [
          "耐久的旧版资料存在冲突：基础值 200，上限 100。"
        ],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 6,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 6,
        "description": "inventory_stack_view_wls_clothes_superior_armored_pants_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_superior_armored_pants_description",
        "name": "inventory_stack_view_wls_clothes_superior_armored_pants_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_superior_armored_pants",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_upgrade_4",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_superior_armored_pants_description",
        "en": {
          "description": "Pants of a true hero. Could save you on an adventure.",
          "full_description": "Pants of a true hero. Could save you on an adventure.",
          "name": "Superior armored pants"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_superior_armored_pants_description",
        "name_key": "inventory_stack_view_wls_clothes_superior_armored_pants_name",
        "zh": {
          "description": "真英雄穿的裤子，能够在任何冒险中救命。",
          "full_description": "真英雄穿的裤子，能够在任何冒险中救命。",
          "name": "优质装甲裤"
        }
      },
      "official_inclusion_status": "special_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_superior_armored_pants",
      "stat_curves": {
        "armor": {
          "default": 200
        },
        "max_durability": {
          "default": 250,
          "max": 125
        },
        "warm_modifier": {
          "default": 1.25
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "13eff8ee17ae789213e88cda82f7e166a2901cae94fc23c3ba149b4085c5b35e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "优质装甲裤",
        "name_en": "Superior armored pants",
        "description_zh": "真英雄穿的裤子，能够在任何冒险中救命。",
        "description_en": "Pants of a true hero. Could save you on an adventure.",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_legs_upgrade_4 优质装甲裤 superior armored pants 真英雄穿的裤子，能够在任何冒险中救命。 pants of a true hero. could save you on an adventure. armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 200,
            "unit": "",
            "display": "200"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": null,
            "unit": "",
            "display": "待确认"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1.25,
            "unit": "",
            "display": "1.25"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [
          "耐久的旧版资料存在冲突：基础值 250，上限 125。"
        ],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_Armor_legs_upgrade_5_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_Armor_legs_upgrade_5_description",
        "name": "inventory_stack_view_Armor_legs_upgrade_5_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_superior_armored_pants",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_legs_upgrade_5",
      "localization": {
        "description_key": "inventory_stack_view_Armor_legs_upgrade_5_description",
        "en": {
          "description": "Clothing of the Sheriff's Deputy. Wearing it will make you incredibly cool, but you will always be the target for bandits!",
          "full_description": "Clothing of the Sheriff's Deputy. Wearing it will make you incredibly cool, but you will always be the target for bandits!",
          "name": "Deputy's pants"
        },
        "full_description_key": "inventory_stack_view_Armor_legs_upgrade_5_description",
        "name_key": "inventory_stack_view_Armor_legs_upgrade_5_name",
        "zh": {
          "description": "副警长的服装。穿上它，你就能瞬间容光焕发，不过你也会成为强盗的攻击目标。",
          "full_description": "副警长的服装。穿上它，你就能瞬间容光焕发，不过你也会成为强盗的攻击目标。",
          "name": "副警长裤子"
        }
      },
      "official_inclusion_status": "special_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_superior_armored_pants",
      "stat_curves": {
        "armor": {
          "default": 400
        },
        "max_durability": {
          "default": 300,
          "max": 150
        },
        "warm_modifier": {
          "default": 1.25
        }
      },
      "stat_labels": {
        "armor": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_armor",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_armor",
          "en": "Defense",
          "zh": "防御"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "warm_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_cool_modifier",
            "tooltip_type": "temperature"
          },
          "display_key": "ui_item_stats_cool_modifier",
          "en": "Cold up to:",
          "zh": "冷却到："
        }
      },
      "subcategory": "legs",
      "tags": [
        "legs",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 5,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "13eff8ee17ae789213e88cda82f7e166a2901cae94fc23c3ba149b4085c5b35e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "副警长裤子",
        "name_en": "Deputy's pants",
        "description_zh": "副警长的服装。穿上它，你就能瞬间容光焕发，不过你也会成为强盗的攻击目标。",
        "description_en": "Clothing of the Sheriff's Deputy. Wearing it will make you incredibly cool, but you will always be the target for bandits!",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_legs_upgrade_5 副警长裤子 deputy's pants 副警长的服装。穿上它，你就能瞬间容光焕发，不过你也会成为强盗的攻击目标。 clothing of the sheriff's deputy. wearing it will make you incredibly cool, but you will always be the target for bandits! armor 护甲 legs legs armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 400,
            "unit": "",
            "display": "400"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": null,
            "unit": "",
            "display": "待确认"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1.25,
            "unit": "",
            "display": "1.25"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [
          "耐久的旧版资料存在冲突：基础值 300，上限 150。"
        ],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": -1,
      "category": "accessory",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": -1,
        "description": "inventory_stack_view_wls_amulet_enchanted_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_amulet_enchanted_description",
        "name": "inventory_stack_view_wls_amulet_tier_1_name",
        "rarity": "common",
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary03/Wls_amul_coyote",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_neck_1",
      "localization": {
        "description_key": "inventory_stack_view_wls_amulet_enchanted_description",
        "en": {
          "description": "Relic enchanted with primal energies. Grants its owner extra power",
          "full_description": "Relic enchanted with primal energies. Grants its owner extra power",
          "name": "Amulet of the Apprentice"
        },
        "full_description_key": "inventory_stack_view_wls_amulet_enchanted_description",
        "name_key": "inventory_stack_view_wls_amulet_tier_1_name",
        "zh": {
          "description": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
          "full_description": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
          "name": "学徒护身符"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_amul_coyote",
      "stat_curves": {
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
      "stat_labels": {
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "stamina": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_resistance",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_resistance",
          "en": "Defense",
          "zh": "防御"
        },
        "strength": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_strength",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_strength",
          "en": "Damage",
          "zh": "伤害"
        },
        "wisdom": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_wisdom",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_wisdom",
          "en": "Spirit",
          "zh": "精神"
        }
      },
      "subcategory": "amulet",
      "tags": [
        "amulet",
        "trinket"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "b41a9e6094a75d27e54058be4d42965a671bf4ea43e6f080995f8d7dff896f2a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "学徒护身符",
        "name_en": "Amulet of the Apprentice",
        "description_zh": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
        "description_en": "Relic enchanted with primal energies. Grants its owner extra power",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_neck_1 学徒护身符 amulet of the apprentice 施与了野性能量的圣物。能够赋予佩戴者额外力量 relic enchanted with primal energies. grants its owner extra power accessory 饰品 amulet amulet trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–3",
            "unit": "",
            "display": "0 – +3"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–3",
            "unit": "",
            "display": "0 – +3"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–3",
            "unit": "",
            "display": "0 – +3"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–3",
            "unit": "",
            "display": "0 – +3"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": -1,
      "category": "accessory",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": -1,
        "description": "inventory_stack_view_wls_amulet_enchanted_high_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_amulet_enchanted_high_description",
        "name": "inventory_stack_view_wls_amulet_tier_10_name",
        "rarity": "epic",
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary03/Wls_amul_master",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 5,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_neck_10",
      "localization": {
        "description_key": "inventory_stack_view_wls_amulet_enchanted_high_description",
        "en": {
          "description": "Relic enchanted with primal energies. Grants its owner extra power.",
          "full_description": "Relic enchanted with primal energies. Grants its owner extra power.",
          "name": "Amulet of Tempest"
        },
        "full_description_key": "inventory_stack_view_wls_amulet_enchanted_high_description",
        "name_key": "inventory_stack_view_wls_amulet_tier_10_name",
        "zh": {
          "description": "充满原始能量的圣物。能够赋予佩戴者额外力量",
          "full_description": "充满原始能量的圣物。能够赋予佩戴者额外力量",
          "name": "风暴护身符"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_amul_master",
      "stat_curves": {
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
      "stat_labels": {
        "dexterity": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_dexterity",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_dexterity",
          "en": "Atk. Speed",
          "zh": "攻击速度"
        },
        "stamina": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_resistance",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_resistance",
          "en": "Defense",
          "zh": "防御"
        },
        "strength": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_strength",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_strength",
          "en": "Damage",
          "zh": "伤害"
        },
        "wisdom": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_wisdom",
            "tooltip_type": "character",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_wisdom",
          "en": "Spirit",
          "zh": "精神"
        }
      },
      "subcategory": "amulet",
      "tags": [
        "amulet",
        "trinket"
      ],
      "throwing_item": null,
      "tier": 5,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "0ec2b01a0f1ee1a31e4425b62dad8dfe06ffecd4080af252370d094c64d84a26",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "风暴护身符",
        "name_en": "Amulet of Tempest",
        "description_zh": "充满原始能量的圣物。能够赋予佩戴者额外力量",
        "description_en": "Relic enchanted with primal energies. Grants its owner extra power.",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_neck_10 风暴护身符 amulet of tempest 充满原始能量的圣物。能够赋予佩戴者额外力量 relic enchanted with primal energies. grants its owner extra power. accessory 饰品 amulet amulet trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–999",
            "unit": "",
            "display": "0 – +999"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–999",
            "unit": "",
            "display": "0 – +999"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–999",
            "unit": "",
            "display": "0 – +999"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–999",
            "unit": "",
            "display": "0 – +999"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "装备等级",
        "default_level": null
      }
    }
  ]
};
