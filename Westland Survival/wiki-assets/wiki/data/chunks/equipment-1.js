/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-equipment-1"] = {
  "section": "equipment",
  "records": [
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
      "bodypart": 41,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 41,
        "equip_behaviour": {
          "type": "durability"
        },
        "name": "wls2_armor_boots_7_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_7_common",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_7_common",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Bronco boots"
        },
        "full_description_key": null,
        "name_key": "wls2_armor_boots_7_common_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "野马 靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_7": 1,
            "wls2_resourse_secondary_leather_7": 2,
            "wls2_resourse_secondary_rope_7": 2
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
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_7_common",
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
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1
        },
        "max_durability": {
          "1": 17180,
          "2": 18900,
          "3": 20600,
          "4": 22350,
          "5": 24050
        },
        "move_speed_modifier": {
          "1": 0.05,
          "2": 0.05,
          "3": 0.05,
          "4": 0.05,
          "5": 0.05
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
      "subcategory": "boots",
      "tags": [
        "boots",
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
      "image_key": "dbec9ecf259fdc8c41e142719aecbd6562421642ae0360e3eba89b4effb7ed9e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "野马 靴子",
        "name_en": "Bronco boots",
        "description_zh": "",
        "description_en": "",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_boots_7_common 野马 靴子 bronco boots armor 护甲 boots boots armor armor_storage"
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
            "value": 17180,
            "unit": "",
            "display": "17180"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 1,
            "unit": "",
            "display": "1"
          },
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.05,
            "unit": "%",
            "display": "+5%"
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
              "armor": 320,
              "max_durability": 17180
            },
            "display": {
              "armor": "320",
              "max_durability": "17180"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 352,
              "max_durability": 18900
            },
            "display": {
              "armor": "352",
              "max_durability": "18900"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 384,
              "max_durability": 20600
            },
            "display": {
              "armor": "384",
              "max_durability": "20600"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 416,
              "max_durability": 22350
            },
            "display": {
              "armor": "416",
              "max_durability": "22350"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 448,
              "max_durability": 24050
            },
            "display": {
              "armor": "448",
              "max_durability": "24050"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 449,
              "max_durability": 24050
            },
            "display": {
              "armor": "449",
              "max_durability": "24050"
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
      "bodypart": 44,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 44,
        "equip_behaviour": {
          "type": "durability"
        },
        "name": "wls2_armor_boots_7_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_7_epic",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_7_epic",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Rio Bravo legend boots"
        },
        "full_description_key": null,
        "name_key": "wls2_armor_boots_7_epic_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "里约勇士传奇靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 8,
            "wls2_resourse_fourfold_nails_7": 5,
            "wls2_resourse_secondary_leather_7": 4,
            "wls2_resourse_secondary_rope_7": 6
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
            "stack_id": "wls2_armor_boots_7_epic",
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
            "stack_id": "wls2_armor_boots_7_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_7_epic",
      "stat_curves": {
        "armor": {
          "1": 860,
          "2": 946,
          "3": 1032,
          "4": 1118,
          "5": 1204,
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
          "1": 61400,
          "2": 67500,
          "3": 73650,
          "4": 79800,
          "5": 85900
        },
        "move_speed_modifier": {
          "1": 0.23,
          "2": 0.23,
          "3": 0.23,
          "4": 0.23,
          "5": 0.23
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
      "subcategory": "boots",
      "tags": [
        "boots",
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
      "image_key": "3c6ca2a2c2c624af13d3d0be11b051de6aad36c2c902612d8b68337ccc88ff6c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "里约勇士传奇靴子",
        "name_en": "Rio Bravo legend boots",
        "description_zh": "",
        "description_en": "",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_boots_7_epic 里约勇士传奇靴子 rio bravo legend boots armor 护甲 boots boots armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 860,
            "unit": "",
            "display": "860"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 61400,
            "unit": "",
            "display": "61400"
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
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.23,
            "unit": "%",
            "display": "+23%"
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
              "armor": 860,
              "dexterity": 8,
              "fire_resistance": 0.04,
              "firearm_resistance": 0.04,
              "health_increment": 100,
              "max_durability": 61400
            },
            "display": {
              "armor": "860",
              "dexterity": "+8",
              "fire_resistance": "+4%",
              "firearm_resistance": "+4%",
              "health_increment": "+100",
              "max_durability": "61400"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 946,
              "dexterity": 9,
              "fire_resistance": 0.08,
              "firearm_resistance": 0.08,
              "health_increment": 120,
              "max_durability": 67500
            },
            "display": {
              "armor": "946",
              "dexterity": "+9",
              "fire_resistance": "+8%",
              "firearm_resistance": "+8%",
              "health_increment": "+120",
              "max_durability": "67500"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1032,
              "dexterity": 10,
              "fire_resistance": 0.12,
              "firearm_resistance": 0.12,
              "health_increment": 140,
              "max_durability": 73650
            },
            "display": {
              "armor": "1032",
              "dexterity": "+10",
              "fire_resistance": "+12%",
              "firearm_resistance": "+12%",
              "health_increment": "+140",
              "max_durability": "73650"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1118,
              "dexterity": 12,
              "fire_resistance": 0.16,
              "firearm_resistance": 0.16,
              "health_increment": 160,
              "max_durability": 79800
            },
            "display": {
              "armor": "1118",
              "dexterity": "+12",
              "fire_resistance": "+16%",
              "firearm_resistance": "+16%",
              "health_increment": "+160",
              "max_durability": "79800"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1204,
              "dexterity": 14,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 85900
            },
            "display": {
              "armor": "1204",
              "dexterity": "+14",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "85900"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1205,
              "dexterity": 14,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 85900
            },
            "display": {
              "armor": "1205",
              "dexterity": "+14",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "85900"
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
          "防御：6 级起每级增加 1，最高 2204。"
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
        "name": "wls2_armor_boots_7_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_7_rare",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_7_rare",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "City Marshal's boots"
        },
        "full_description_key": null,
        "name_key": "wls2_armor_boots_7_rare_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "城市治安官的靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_7": 3,
            "wls2_resourse_secondary_leather_7": 4,
            "wls2_resourse_secondary_rope_7": 4
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
            "stack_id": "wls2_armor_boots_7_rare",
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
            "stack_id": "wls2_armor_boots_7_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_7_rare",
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
          "1": 44100,
          "2": 48500,
          "3": 53000,
          "4": 57350,
          "5": 61750
        },
        "move_speed_modifier": {
          "1": 0.2,
          "2": 0.2,
          "3": 0.2,
          "4": 0.2,
          "5": 0.2
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
      "subcategory": "boots",
      "tags": [
        "boots",
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
      "image_key": "a444b125e83775db8885afb1bb0afd3dbf48194e70e062c5b12116cb61e5c6e3",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "城市治安官的靴子",
        "name_en": "City Marshal's boots",
        "description_zh": "",
        "description_en": "",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_boots_7_rare 城市治安官的靴子 city marshal's boots armor 护甲 boots boots armor armor_storage"
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
            "value": 44100,
            "unit": "",
            "display": "44100"
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
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.2,
            "unit": "%",
            "display": "+20%"
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
              "armor": 720,
              "dexterity": 6,
              "fire_resistance": 0.04,
              "firearm_resistance": 0.04,
              "max_durability": 44100
            },
            "display": {
              "armor": "720",
              "dexterity": "+6",
              "fire_resistance": "+4%",
              "firearm_resistance": "+4%",
              "max_durability": "44100"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 792,
              "dexterity": 7,
              "fire_resistance": 0.08,
              "firearm_resistance": 0.08,
              "max_durability": 48500
            },
            "display": {
              "armor": "792",
              "dexterity": "+7",
              "fire_resistance": "+8%",
              "firearm_resistance": "+8%",
              "max_durability": "48500"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 864,
              "dexterity": 8,
              "fire_resistance": 0.12,
              "firearm_resistance": 0.12,
              "max_durability": 53000
            },
            "display": {
              "armor": "864",
              "dexterity": "+8",
              "fire_resistance": "+12%",
              "firearm_resistance": "+12%",
              "max_durability": "53000"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 936,
              "dexterity": 10,
              "fire_resistance": 0.16,
              "firearm_resistance": 0.16,
              "max_durability": 57350
            },
            "display": {
              "armor": "936",
              "dexterity": "+10",
              "fire_resistance": "+16%",
              "firearm_resistance": "+16%",
              "max_durability": "57350"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1008,
              "dexterity": 12,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "max_durability": 61750
            },
            "display": {
              "armor": "1008",
              "dexterity": "+12",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "max_durability": "61750"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1009,
              "dexterity": 12,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "max_durability": 61750
            },
            "display": {
              "armor": "1009",
              "dexterity": "+12",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "max_durability": "61750"
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
      "bodypart": 42,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 42,
        "equip_behaviour": {
          "type": "durability"
        },
        "name": "wls2_armor_boots_7_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_7_uncommon",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_7_uncommon",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Sandscar boots"
        },
        "full_description_key": null,
        "name_key": "wls2_armor_boots_7_uncommon_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "沙痕靴"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_7": 2,
            "wls2_resourse_secondary_leather_7": 3,
            "wls2_resourse_secondary_rope_7": 3
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
            "stack_id": "wls2_armor_boots_7_uncommon",
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
            "stack_id": "wls2_armor_boots_7_uncommon",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_7_uncommon",
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
          "1": 1.5,
          "2": 1.5,
          "3": 1.5,
          "4": 1.5,
          "5": 1.5
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
          "1": 23050,
          "2": 25400,
          "3": 27700,
          "4": 30000,
          "5": 32300
        },
        "move_speed_modifier": {
          "1": 0.1,
          "2": 0.1,
          "3": 0.1,
          "4": 0.1,
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
      "subcategory": "boots",
      "tags": [
        "boots",
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
      "image_key": "2c8981f08d639d2156df16301ac8fefb5d095ad5fa32c8189ef397797a56f213",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "沙痕靴",
        "name_en": "Sandscar boots",
        "description_zh": "",
        "description_en": "",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_boots_7_uncommon 沙痕靴 sandscar boots armor 护甲 boots boots armor armor_storage"
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
            "value": 23050,
            "unit": "",
            "display": "23050"
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
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.1,
            "unit": "%",
            "display": "+10%"
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
              "armor": 400,
              "dexterity": 6,
              "fire_resistance": 0.02,
              "max_durability": 23050
            },
            "display": {
              "armor": "400",
              "dexterity": "+6",
              "fire_resistance": "+2%",
              "max_durability": "23050"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 440,
              "dexterity": 7,
              "fire_resistance": 0.04,
              "max_durability": 25400
            },
            "display": {
              "armor": "440",
              "dexterity": "+7",
              "fire_resistance": "+4%",
              "max_durability": "25400"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 480,
              "dexterity": 8,
              "fire_resistance": 0.06,
              "max_durability": 27700
            },
            "display": {
              "armor": "480",
              "dexterity": "+8",
              "fire_resistance": "+6%",
              "max_durability": "27700"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 520,
              "dexterity": 10,
              "fire_resistance": 0.08,
              "max_durability": 30000
            },
            "display": {
              "armor": "520",
              "dexterity": "+10",
              "fire_resistance": "+8%",
              "max_durability": "30000"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 560,
              "dexterity": 12,
              "fire_resistance": 0.1,
              "max_durability": 32300
            },
            "display": {
              "armor": "560",
              "dexterity": "+12",
              "fire_resistance": "+10%",
              "max_durability": "32300"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 561,
              "dexterity": 12,
              "fire_resistance": 0.1,
              "max_durability": 32300
            },
            "display": {
              "armor": "561",
              "dexterity": "+12",
              "fire_resistance": "+10%",
              "max_durability": "32300"
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
        "description": "inventory_stack_view_wls2_armor_boots_rare_t4_lvl5_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_rare_t4_lvl5_description",
        "name": "inventory_stack_view_wls2_armor_boots_rare_t4_lvl5_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls2_armor_boots_upgrade_4_icon",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_rare_t4_lvl5",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_rare_t4_lvl5_description",
        "en": {
          "description": "Every gentleman should have a pair of these boots",
          "full_description": "Every gentleman should have a pair of these boots",
          "name": "Gentleman boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_rare_t4_lvl5_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_rare_t4_lvl5_name",
        "zh": {
          "description": "穿上这双靴子，就能征服世界。",
          "full_description": "穿上这双靴子，就能征服世界。",
          "name": "绅士靴"
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
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_boots_upgrade_4_icon",
      "stat_curves": {
        "armor": {
          "default": 120
        },
        "max_durability": {
          "default": 125
        },
        "move_speed_modifier": {
          "default": 0.25
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
      "subcategory": "boots",
      "tags": [
        "boots",
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
      "image_key": "b4fabbbf4997fecdf57ef2e0879a049f1e7635b3c5c83915f33845f830a0034c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "绅士靴",
        "name_en": "Gentleman boots",
        "description_zh": "穿上这双靴子，就能征服世界。",
        "description_en": "Every gentleman should have a pair of these boots",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_boots_rare_t4_lvl5 绅士靴 gentleman boots 穿上这双靴子，就能征服世界。 every gentleman should have a pair of these boots armor 护甲 boots boots armor armor_storage"
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
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.25,
            "unit": "%",
            "display": "+25%"
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
        "description": "inventory_stack_view_wls2_armor_boots_uncommon_t4_lvl4_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_uncommon_t4_lvl4_description",
        "name": "inventory_stack_view_wls2_armor_boots_uncommon_t4_lvl4_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls2_armor_boots_4_icon",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_uncommon_t4_lvl4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_uncommon_t4_lvl4_description",
        "en": {
          "description": "You could cross the entire Wild West in these boots",
          "full_description": "You could cross the entire Wild West in these boots",
          "name": "Cowboy boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_uncommon_t4_lvl4_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_uncommon_t4_lvl4_name",
        "zh": {
          "description": "穿上这双靴子，就能穿越蛮荒的西部。",
          "full_description": "穿上这双靴子，就能穿越蛮荒的西部。",
          "name": "牛仔靴"
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
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_boots_4_icon",
      "stat_curves": {
        "armor": {
          "default": 90
        },
        "max_durability": {
          "default": 62
        },
        "move_speed_modifier": {
          "default": 0.2
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
      "subcategory": "boots",
      "tags": [
        "boots",
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
      "image_key": "dd43ccaa9793cc581642f2d3795b3e8bb59157cf0ca69060c407a8e71845755b",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "牛仔靴",
        "name_en": "Cowboy boots",
        "description_zh": "穿上这双靴子，就能穿越蛮荒的西部。",
        "description_en": "You could cross the entire Wild West in these boots",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_boots_uncommon_t4_lvl4 牛仔靴 cowboy boots 穿上这双靴子，就能穿越蛮荒的西部。 you could cross the entire wild west in these boots armor 护甲 boots boots armor armor_storage"
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
            "value": 62,
            "unit": "",
            "display": "62"
          },
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.2,
            "unit": "%",
            "display": "+20%"
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
      "bodypart": 2,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 2,
        "description": "inventory_stack_view_wls_clothes_boots_fortified_1.5_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_boots_fortified_1.5_description",
        "name": "inventory_stack_view_wls_clothes_boots_fortified_1.5_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_boots_fortified_1",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_upgrade_1",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_boots_fortified_1.5_description",
        "en": {
          "description": "Sturdy boots good enough to travel in bad weather.",
          "full_description": "Sturdy boots good enough to travel in bad weather.",
          "name": "Sturdy boots"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_boots_fortified_1.5_description",
        "name_key": "inventory_stack_view_wls_clothes_boots_fortified_1.5_name",
        "zh": {
          "description": "这双结实的靴子适合在任何恶劣的条件下使用。",
          "full_description": "这双结实的靴子适合在任何恶劣的条件下使用。",
          "name": "结实的靴子"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_boots_fortified_1",
      "stat_curves": {
        "armor": {
          "default": 15
        },
        "max_durability": {
          "default": 50
        },
        "move_speed_modifier": {
          "default": 0.1
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
      "subcategory": "boots",
      "tags": [
        "boots",
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
      "image_key": "55f7d198cb8ae94f203cd820b5f6662674fbdcff55e0e95f4d19ef64943f0648",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "结实的靴子",
        "name_en": "Sturdy boots",
        "description_zh": "这双结实的靴子适合在任何恶劣的条件下使用。",
        "description_en": "Sturdy boots good enough to travel in bad weather.",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_boots_upgrade_1 结实的靴子 sturdy boots 这双结实的靴子适合在任何恶劣的条件下使用。 sturdy boots good enough to travel in bad weather. armor 护甲 boots boots armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 15,
            "unit": "",
            "display": "15"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 50,
            "unit": "",
            "display": "50"
          },
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.1,
            "unit": "%",
            "display": "+10%"
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
        "description": "inventory_stack_view_wls_clothes_reinforced_leather_boots_2.5_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_reinforced_leather_boots_2.5_description",
        "name": "inventory_stack_view_wls_clothes_reinforced_leather_boots_2.5_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_reinforced_leather_boots_2.5",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_upgrade_2",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_reinforced_leather_boots_2.5_description",
        "en": {
          "description": "Boots reinforced with nails offer additional protection",
          "full_description": "Boots reinforced with nails offer additional protection",
          "name": "Reinforced leather boots"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_reinforced_leather_boots_2.5_description",
        "name_key": "inventory_stack_view_wls_clothes_reinforced_leather_boots_2.5_name",
        "zh": {
          "description": "皮靴中装了一对金属板，能够提供额外的保护。",
          "full_description": "皮靴中装了一对金属板，能够提供额外的保护。",
          "name": "强化的皮靴"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_reinforced_leather_boots_2.5",
      "stat_curves": {
        "armor": {
          "default": 30
        },
        "max_durability": {
          "default": 75
        },
        "move_speed_modifier": {
          "default": 0.15
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
      "subcategory": "boots",
      "tags": [
        "boots",
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
      "image_key": "4577f81056c7a132880f15b6f3cb6d27e855a2abcbc1981c4297271dfd5c04c5",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "强化的皮靴",
        "name_en": "Reinforced leather boots",
        "description_zh": "皮靴中装了一对金属板，能够提供额外的保护。",
        "description_en": "Boots reinforced with nails offer additional protection",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_boots_upgrade_2 强化的皮靴 reinforced leather boots 皮靴中装了一对金属板，能够提供额外的保护。 boots reinforced with nails offer additional protection armor 护甲 boots boots armor armor_storage"
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
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.15,
            "unit": "%",
            "display": "+15%"
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
      "bodypart": 19,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 19,
        "description": "inventory_stack_view_Armor_boots_upgrade_3_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_Armor_boots_upgrade_3_description",
        "name": "inventory_stack_view_Armor_boots_upgrade_3_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/armor_boots_upgrade_3",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_upgrade_3",
      "localization": {
        "description_key": "inventory_stack_view_Armor_boots_upgrade_3_description",
        "en": {
          "description": "These boots are designed to be worn in severely cold weather. It can save you from frostbite and wolves. You wont get any corns wearing these.",
          "full_description": "These boots are designed to be worn in severely cold weather. It can save you from frostbite and wolves. You wont get any corns wearing these.",
          "name": "Fur lined boots"
        },
        "full_description_key": "inventory_stack_view_Armor_boots_upgrade_3_description",
        "name_key": "inventory_stack_view_Armor_boots_upgrade_3_name",
        "zh": {
          "description": "用来在极为寒冷的天气条件下穿戴，既能防寒，也能防狼。放心，不会磨出茧子的。",
          "full_description": "用来在极为寒冷的天气条件下穿戴，既能防寒，也能防狼。放心，不会磨出茧子的。",
          "name": "毛皮亚麻靴"
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
      "sprite": "UI_WW_AlphaBinary03/armor_boots_upgrade_3",
      "stat_curves": {
        "armor": {
          "default": 60
        },
        "max_durability": {
          "default": 100
        },
        "move_speed_modifier": {
          "default": 0.1
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
      "subcategory": "boots",
      "tags": [
        "boots",
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
      "image_key": "02692476d68beef53597f6bbb0fab66767123830a26ff0e46cd87698ff69e24c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "毛皮亚麻靴",
        "name_en": "Fur lined boots",
        "description_zh": "用来在极为寒冷的天气条件下穿戴，既能防寒，也能防狼。放心，不会磨出茧子的。",
        "description_en": "These boots are designed to be worn in severely cold weather. It can save you from frostbite and wolves. You wont get any corns wearing these.",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_boots_upgrade_3 毛皮亚麻靴 fur lined boots 用来在极为寒冷的天气条件下穿戴，既能防寒，也能防狼。放心，不会磨出茧子的。 these boots are designed to be worn in severely cold weather. it can save you from frostbite and wolves. you wont get any corns wearing these. armor 护甲 boots boots armor armor_storage"
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
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.1,
            "unit": "%",
            "display": "+10%"
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
        "description": "inventory_stack_view_wls_clothes_superior_armored_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_superior_armored_boots_description",
        "name": "inventory_stack_view_wls_clothes_superior_armored_boots_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_superior_armored_boots",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_upgrade_4",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_superior_armored_boots_description",
        "en": {
          "description": "The best shoes in the Wild West.",
          "full_description": "The best shoes in the Wild West.",
          "name": "Superior armored boots"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_superior_armored_boots_description",
        "name_key": "inventory_stack_view_wls_clothes_superior_armored_boots_name",
        "zh": {
          "description": "狂野西部最好的鞋子。",
          "full_description": "狂野西部最好的鞋子。",
          "name": "优质装甲靴"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_superior_armored_boots",
      "stat_curves": {
        "armor": {
          "default": 120
        },
        "max_durability": {
          "default": 125
        },
        "move_speed_modifier": {
          "default": 0.25
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
      "subcategory": "boots",
      "tags": [
        "boots",
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
      "image_key": "fdfedf9e4be60aed8376521327cec4edea0c6317253463a118d35535ea8635a4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "优质装甲靴",
        "name_en": "Superior armored boots",
        "description_zh": "狂野西部最好的鞋子。",
        "description_en": "The best shoes in the Wild West.",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_boots_upgrade_4 优质装甲靴 superior armored boots 狂野西部最好的鞋子。 the best shoes in the wild west. armor 护甲 boots boots armor armor_storage"
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
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.25,
            "unit": "%",
            "display": "+25%"
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
        "description": "inventory_stack_view_Armor_boots_upgrade_5_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_Armor_boots_upgrade_5_description",
        "name": "inventory_stack_view_Armor_boots_upgrade_5_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_superior_armored_boots",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_upgrade_5",
      "localization": {
        "description_key": "inventory_stack_view_Armor_boots_upgrade_5_description",
        "en": {
          "description": "Clothing of the Sheriff's Deputy. Wearing it will make you incredibly cool, but you will always be the target for bandits!",
          "full_description": "Clothing of the Sheriff's Deputy. Wearing it will make you incredibly cool, but you will always be the target for bandits!",
          "name": "Deputy's boots"
        },
        "full_description_key": "inventory_stack_view_Armor_boots_upgrade_5_description",
        "name_key": "inventory_stack_view_Armor_boots_upgrade_5_name",
        "zh": {
          "description": "副警长的服装。穿上它，你就能瞬间容光焕发，不过你也会成为强盗的攻击目标！",
          "full_description": "副警长的服装。穿上它，你就能瞬间容光焕发，不过你也会成为强盗的攻击目标！",
          "name": "副警长靴子"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_superior_armored_boots",
      "stat_curves": {
        "armor": {
          "default": 240
        },
        "max_durability": {
          "default": 150
        },
        "move_speed_modifier": {
          "default": 0.3
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
      "subcategory": "boots",
      "tags": [
        "boots",
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
      "image_key": "fdfedf9e4be60aed8376521327cec4edea0c6317253463a118d35535ea8635a4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "副警长靴子",
        "name_en": "Deputy's boots",
        "description_zh": "副警长的服装。穿上它，你就能瞬间容光焕发，不过你也会成为强盗的攻击目标！",
        "description_en": "Clothing of the Sheriff's Deputy. Wearing it will make you incredibly cool, but you will always be the target for bandits!",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_boots_upgrade_5 副警长靴子 deputy's boots 副警长的服装。穿上它，你就能瞬间容光焕发，不过你也会成为强盗的攻击目标！ clothing of the sheriff's deputy. wearing it will make you incredibly cool, but you will always be the target for bandits! armor 护甲 boots boots armor armor_storage"
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
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.3,
            "unit": "%",
            "display": "+30%"
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
      "bodypart": 56,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 56,
        "description": "wls2_armor_easter_2026_body_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_body_description",
        "name": "wls2_armor_easter_2026_body_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_easter_2026",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_body_2_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_body_description",
        "en": {
          "description": "A festive coat with the spring spirit",
          "full_description": "A festive coat with the spring spirit",
          "name": "Spring Rider Coat"
        },
        "full_description_key": "wls2_armor_easter_2026_body_description",
        "name_key": "wls2_armor_easter_2026_body_name",
        "zh": {
          "description": "一个节日的外套带着春天的精神",
          "full_description": "一个节日的外套带着春天的精神",
          "name": "春季 骑手 外套"
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
                "wls2_resourse_secondary_leather_2": 10,
                "wls2_resourse_tertiary_clothroll_2": 2
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_body_2_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_body_2_epic_recycle"
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
            "stack_id": "wls2_armor_easter_2026_body_2_epic",
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
            "stack_id": "wls2_armor_easter_2026_body_2_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_easter_2026",
      "stat_curves": {
        "armor": {
          "1": 105,
          "2": 115,
          "3": 125,
          "4": 135,
          "5": 145,
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
        "max_durability": {
          "1": 1090,
          "2": 1200,
          "3": 1300,
          "4": 1400,
          "5": 1500
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "730908f8485703e047c2fca1fd34ca35fda83364fe1cb39254b4b8d15e89b021",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "春季 骑手 外套",
        "name_en": "Spring Rider Coat",
        "description_zh": "一个节日的外套带着春天的精神",
        "description_en": "A festive coat with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_body_2_epic 春季 骑手 外套 spring rider coat 一个节日的外套带着春天的精神 a festive coat with the spring spirit armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 105,
            "unit": "",
            "display": "105"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 1090,
            "unit": "",
            "display": "1090"
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
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 105,
              "dexterity": 2,
              "max_durability": 1090
            },
            "display": {
              "armor": "105",
              "dexterity": "+2",
              "max_durability": "1090"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 115,
              "dexterity": 4,
              "max_durability": 1200
            },
            "display": {
              "armor": "115",
              "dexterity": "+4",
              "max_durability": "1200"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 125,
              "dexterity": 6,
              "max_durability": 1300
            },
            "display": {
              "armor": "125",
              "dexterity": "+6",
              "max_durability": "1300"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 135,
              "dexterity": 8,
              "max_durability": 1400
            },
            "display": {
              "armor": "135",
              "dexterity": "+8",
              "max_durability": "1400"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 145,
              "dexterity": 10,
              "max_durability": 1500
            },
            "display": {
              "armor": "145",
              "dexterity": "+10",
              "max_durability": "1500"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 146,
              "dexterity": 10,
              "max_durability": 1500
            },
            "display": {
              "armor": "146",
              "dexterity": "+10",
              "max_durability": "1500"
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
          "防御：6 级起每级增加 1，最高 1145。"
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
      "bodypart": 56,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 56,
        "description": "wls2_armor_easter_2026_body_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_body_description",
        "name": "wls2_armor_easter_2026_body_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_easter_2026",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_body_3_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_body_description",
        "en": {
          "description": "A festive coat with the spring spirit",
          "full_description": "A festive coat with the spring spirit",
          "name": "Spring Rider Coat"
        },
        "full_description_key": "wls2_armor_easter_2026_body_description",
        "name_key": "wls2_armor_easter_2026_body_name",
        "zh": {
          "description": "一个节日的外套带着春天的精神",
          "full_description": "一个节日的外套带着春天的精神",
          "name": "春季 骑手 外套"
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
                "wls2_resourse_secondary_leather_3": 10,
                "wls2_resourse_tertiary_clothroll_3": 2
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_body_3_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_body_3_epic_recycle"
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
            "stack_id": "wls2_armor_easter_2026_body_3_epic",
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
            "stack_id": "wls2_armor_easter_2026_body_3_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_easter_2026",
      "stat_curves": {
        "armor": {
          "1": 210,
          "2": 231,
          "3": 252,
          "4": 273,
          "5": 294,
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
          "1": 2170,
          "2": 2390,
          "3": 2600,
          "4": 2820,
          "5": 3040
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "730908f8485703e047c2fca1fd34ca35fda83364fe1cb39254b4b8d15e89b021",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "春季 骑手 外套",
        "name_en": "Spring Rider Coat",
        "description_zh": "一个节日的外套带着春天的精神",
        "description_en": "A festive coat with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_body_3_epic 春季 骑手 外套 spring rider coat 一个节日的外套带着春天的精神 a festive coat with the spring spirit armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 210,
            "unit": "",
            "display": "210"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 2170,
            "unit": "",
            "display": "2170"
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
              "armor": 210,
              "dexterity": 2,
              "firearm_resistance": 0.04,
              "health_modifier": 0.04,
              "max_durability": 2170
            },
            "display": {
              "armor": "210",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "health_modifier": "+4%",
              "max_durability": "2170"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 231,
              "dexterity": 4,
              "firearm_resistance": 0.08,
              "health_modifier": 0.06,
              "max_durability": 2390
            },
            "display": {
              "armor": "231",
              "dexterity": "+4",
              "firearm_resistance": "+8%",
              "health_modifier": "+6%",
              "max_durability": "2390"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 252,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "health_modifier": 0.08,
              "max_durability": 2600
            },
            "display": {
              "armor": "252",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "health_modifier": "+8%",
              "max_durability": "2600"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 273,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "health_modifier": 0.1,
              "max_durability": 2820
            },
            "display": {
              "armor": "273",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "health_modifier": "+10%",
              "max_durability": "2820"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 294,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_modifier": 0.12,
              "max_durability": 3040
            },
            "display": {
              "armor": "294",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_modifier": "+12%",
              "max_durability": "3040"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 295,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_modifier": 0.12,
              "max_durability": 3040
            },
            "display": {
              "armor": "295",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_modifier": "+12%",
              "max_durability": "3040"
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
          "防御：6 级起每级增加 1，最高 1294。"
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
      "bodypart": 56,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 56,
        "description": "wls2_armor_easter_2026_body_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_body_description",
        "name": "wls2_armor_easter_2026_body_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_easter_2026",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_body_4_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_body_description",
        "en": {
          "description": "A festive coat with the spring spirit",
          "full_description": "A festive coat with the spring spirit",
          "name": "Spring Rider Coat"
        },
        "full_description_key": "wls2_armor_easter_2026_body_description",
        "name_key": "wls2_armor_easter_2026_body_name",
        "zh": {
          "description": "一个节日的外套带着春天的精神",
          "full_description": "一个节日的外套带着春天的精神",
          "name": "春季 骑手 外套"
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
                "wls2_resourse_secondary_leather_4": 10,
                "wls2_resourse_tertiary_clothroll_4": 2
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_body_4_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_body_4_epic_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_2_a",
            "durability_factor": 0.25,
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_easter_2026_body_4_epic",
            "transaction_id": "transaction_iap_wls_2_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_1_a",
            "durability_factor": 0.25,
            "level_max": 110,
            "level_min": 91,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_easter_2026_body_4_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_easter_2026",
      "stat_curves": {
        "armor": {
          "1": 420,
          "2": 462,
          "3": 504,
          "4": 546,
          "5": 588,
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
          "1": 0.02,
          "2": 0.04,
          "3": 0.06,
          "4": 0.08,
          "5": 0.1
        },
        "health_increment": {
          "1": 35,
          "2": 45,
          "3": 55,
          "4": 65,
          "5": 75
        },
        "max_durability": {
          "1": 8350,
          "2": 9200,
          "3": 10050,
          "4": 10850,
          "5": 11700
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
        }
      },
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "730908f8485703e047c2fca1fd34ca35fda83364fe1cb39254b4b8d15e89b021",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "春季 骑手 外套",
        "name_en": "Spring Rider Coat",
        "description_zh": "一个节日的外套带着春天的精神",
        "description_en": "A festive coat with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_body_4_epic 春季 骑手 外套 spring rider coat 一个节日的外套带着春天的精神 a festive coat with the spring spirit armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 420,
            "unit": "",
            "display": "420"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 8350,
            "unit": "",
            "display": "8350"
          },
          {
            "key": "health_increment",
            "label": "生命加成",
            "value": 35,
            "unit": "",
            "display": "+35"
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
            "value": 1,
            "unit": "",
            "display": "1"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 420,
              "dexterity": 2,
              "firearm_resistance": 0.02,
              "health_increment": 35,
              "max_durability": 8350
            },
            "display": {
              "armor": "420",
              "dexterity": "+2",
              "firearm_resistance": "+2%",
              "health_increment": "+35",
              "max_durability": "8350"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 462,
              "dexterity": 4,
              "firearm_resistance": 0.04,
              "health_increment": 45,
              "max_durability": 9200
            },
            "display": {
              "armor": "462",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "health_increment": "+45",
              "max_durability": "9200"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 504,
              "dexterity": 6,
              "firearm_resistance": 0.06,
              "health_increment": 55,
              "max_durability": 10050
            },
            "display": {
              "armor": "504",
              "dexterity": "+6",
              "firearm_resistance": "+6%",
              "health_increment": "+55",
              "max_durability": "10050"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 546,
              "dexterity": 8,
              "firearm_resistance": 0.08,
              "health_increment": 65,
              "max_durability": 10850
            },
            "display": {
              "armor": "546",
              "dexterity": "+8",
              "firearm_resistance": "+8%",
              "health_increment": "+65",
              "max_durability": "10850"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 588,
              "dexterity": 10,
              "firearm_resistance": 0.1,
              "health_increment": 75,
              "max_durability": 11700
            },
            "display": {
              "armor": "588",
              "dexterity": "+10",
              "firearm_resistance": "+10%",
              "health_increment": "+75",
              "max_durability": "11700"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 589,
              "dexterity": 10,
              "firearm_resistance": 0.1,
              "health_increment": 75,
              "max_durability": 11700
            },
            "display": {
              "armor": "589",
              "dexterity": "+10",
              "firearm_resistance": "+10%",
              "health_increment": "+75",
              "max_durability": "11700"
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
          "防御：6 级起每级增加 1，最高 1588。"
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
      "bodypart": 56,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 56,
        "description": "wls2_armor_easter_2026_body_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_body_description",
        "name": "wls2_armor_easter_2026_body_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_easter_2026",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_body_5_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_body_description",
        "en": {
          "description": "A festive coat with the spring spirit",
          "full_description": "A festive coat with the spring spirit",
          "name": "Spring Rider Coat"
        },
        "full_description_key": "wls2_armor_easter_2026_body_description",
        "name_key": "wls2_armor_easter_2026_body_name",
        "zh": {
          "description": "一个节日的外套带着春天的精神",
          "full_description": "一个节日的外套带着春天的精神",
          "name": "春季 骑手 外套"
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
                "wls2_resourse_secondary_leather_5": 10,
                "wls2_resourse_tertiary_clothroll_5": 2
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_body_5_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_body_5_epic_recycle"
          }
        ]
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
            "stack_id": "wls2_armor_easter_2026_body_5_epic",
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
            "stack_id": "wls2_armor_easter_2026_body_5_epic",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_easter_2026",
      "stat_curves": {
        "armor": {
          "1": 840,
          "2": 924,
          "3": 1008,
          "4": 1092,
          "5": 1176,
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
          "1": 22400,
          "2": 24700,
          "3": 26900,
          "4": 29150,
          "5": 31400
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "730908f8485703e047c2fca1fd34ca35fda83364fe1cb39254b4b8d15e89b021",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "春季 骑手 外套",
        "name_en": "Spring Rider Coat",
        "description_zh": "一个节日的外套带着春天的精神",
        "description_en": "A festive coat with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_body_5_epic 春季 骑手 外套 spring rider coat 一个节日的外套带着春天的精神 a festive coat with the spring spirit armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 840,
            "unit": "",
            "display": "840"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 22400,
            "unit": "",
            "display": "22400"
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
              "armor": 840,
              "dexterity": 2,
              "firearm_resistance": 0.04,
              "health_increment": 70,
              "max_durability": 22400
            },
            "display": {
              "armor": "840",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "health_increment": "+70",
              "max_durability": "22400"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 924,
              "dexterity": 4,
              "firearm_resistance": 0.08,
              "health_increment": 90,
              "max_durability": 24700
            },
            "display": {
              "armor": "924",
              "dexterity": "+4",
              "firearm_resistance": "+8%",
              "health_increment": "+90",
              "max_durability": "24700"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1008,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "health_increment": 110,
              "max_durability": 26900
            },
            "display": {
              "armor": "1008",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "health_increment": "+110",
              "max_durability": "26900"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1092,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "health_increment": 130,
              "max_durability": 29150
            },
            "display": {
              "armor": "1092",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "health_increment": "+130",
              "max_durability": "29150"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1176,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_increment": 150,
              "max_durability": 31400
            },
            "display": {
              "armor": "1176",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_increment": "+150",
              "max_durability": "31400"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1177,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_increment": 150,
              "max_durability": 31400
            },
            "display": {
              "armor": "1177",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_increment": "+150",
              "max_durability": "31400"
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
          "防御：6 级起每级增加 1，最高 2176。"
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
      "bodypart": 56,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 56,
        "description": "wls2_armor_easter_2026_body_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_body_description",
        "name": "wls2_armor_easter_2026_body_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_easter_2026",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_body_6_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_body_description",
        "en": {
          "description": "A festive coat with the spring spirit",
          "full_description": "A festive coat with the spring spirit",
          "name": "Spring Rider Coat"
        },
        "full_description_key": "wls2_armor_easter_2026_body_description",
        "name_key": "wls2_armor_easter_2026_body_name",
        "zh": {
          "description": "一个节日的外套带着春天的精神",
          "full_description": "一个节日的外套带着春天的精神",
          "name": "春季 骑手 外套"
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
                "wls2_resourse_secondary_leather_6": 10,
                "wls2_resourse_tertiary_clothroll_5": 3
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_body_6_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_body_6_epic_recycle"
          }
        ]
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
            "stack_id": "wls2_armor_easter_2026_body_6_epic",
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
            "stack_id": "wls2_armor_easter_2026_body_6_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_easter_2026",
      "stat_curves": {
        "armor": {
          "1": 1500,
          "2": 1650,
          "3": 1800,
          "4": 1950,
          "5": 2100,
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
          "1": 38550,
          "2": 42400,
          "3": 46250,
          "4": 50100,
          "5": 53960
        },
        "snow_resistance": {
          "1": 0.02,
          "2": 0.02,
          "3": 0.02,
          "4": 0.02,
          "5": 0.02
        },
        "warm_modifier": {
          "1": 3,
          "2": 3,
          "3": 3,
          "4": 3,
          "5": 3
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
      "subcategory": "body",
      "tags": [
        "chest",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 6,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "730908f8485703e047c2fca1fd34ca35fda83364fe1cb39254b4b8d15e89b021",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "春季 骑手 外套",
        "name_en": "Spring Rider Coat",
        "description_zh": "一个节日的外套带着春天的精神",
        "description_en": "A festive coat with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_body_6_epic 春季 骑手 外套 spring rider coat 一个节日的外套带着春天的精神 a festive coat with the spring spirit armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 1500,
            "unit": "",
            "display": "1500"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 38550,
            "unit": "",
            "display": "38550"
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
            "value": 3,
            "unit": "",
            "display": "3"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 1500,
              "dexterity": 5,
              "firearm_resistance": 0.04,
              "health_increment": 100,
              "max_durability": 38550
            },
            "display": {
              "armor": "1500",
              "dexterity": "+5",
              "firearm_resistance": "+4%",
              "health_increment": "+100",
              "max_durability": "38550"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 1650,
              "dexterity": 7,
              "firearm_resistance": 0.08,
              "health_increment": 120,
              "max_durability": 42400
            },
            "display": {
              "armor": "1650",
              "dexterity": "+7",
              "firearm_resistance": "+8%",
              "health_increment": "+120",
              "max_durability": "42400"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1800,
              "dexterity": 9,
              "firearm_resistance": 0.12,
              "health_increment": 140,
              "max_durability": 46250
            },
            "display": {
              "armor": "1800",
              "dexterity": "+9",
              "firearm_resistance": "+12%",
              "health_increment": "+140",
              "max_durability": "46250"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1950,
              "dexterity": 10,
              "firearm_resistance": 0.16,
              "health_increment": 160,
              "max_durability": 50100
            },
            "display": {
              "armor": "1950",
              "dexterity": "+10",
              "firearm_resistance": "+16%",
              "health_increment": "+160",
              "max_durability": "50100"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 2100,
              "dexterity": 12,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 53960
            },
            "display": {
              "armor": "2100",
              "dexterity": "+12",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "53960"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 2101,
              "dexterity": 12,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 53960
            },
            "display": {
              "armor": "2101",
              "dexterity": "+12",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "53960"
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
          "防御：6 级起每级增加 1，最高 3100。"
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
      "bodypart": 56,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 56,
        "description": "wls2_armor_easter_2026_body_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_body_description",
        "name": "wls2_armor_easter_2026_body_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_easter_2026",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_body_7_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_body_description",
        "en": {
          "description": "A festive coat with the spring spirit",
          "full_description": "A festive coat with the spring spirit",
          "name": "Spring Rider Coat"
        },
        "full_description_key": "wls2_armor_easter_2026_body_description",
        "name_key": "wls2_armor_easter_2026_body_name",
        "zh": {
          "description": "一个节日的外套带着春天的精神",
          "full_description": "一个节日的外套带着春天的精神",
          "name": "春季 骑手 外套"
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
                "wls2_resourse_secondary_leather_7": 10,
                "wls2_resourse_tertiary_clothroll_5": 4
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_body_7_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_body_7_epic_recycle"
          }
        ]
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
            "stack_id": "wls2_armor_easter_2026_body_7_epic",
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
            "stack_id": "wls2_armor_easter_2026_body_7_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_easter_2026",
      "stat_curves": {
        "armor": {
          "1": 3000,
          "2": 3300,
          "3": 3600,
          "4": 3900,
          "5": 4200,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 3,
          "2": 3,
          "3": 3,
          "4": 3,
          "5": 3
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
          "1": 69400,
          "2": 76300,
          "3": 83250,
          "4": 90200,
          "5": 97150
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
      "subcategory": "body",
      "tags": [
        "chest",
        "armor",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 7,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "730908f8485703e047c2fca1fd34ca35fda83364fe1cb39254b4b8d15e89b021",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "春季 骑手 外套",
        "name_en": "Spring Rider Coat",
        "description_zh": "一个节日的外套带着春天的精神",
        "description_en": "A festive coat with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_body_7_epic 春季 骑手 外套 spring rider coat 一个节日的外套带着春天的精神 a festive coat with the spring spirit armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 3000,
            "unit": "",
            "display": "3000"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 69400,
            "unit": "",
            "display": "69400"
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
            "value": 3,
            "unit": "",
            "display": "3"
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
              "armor": 3000,
              "dexterity": 8,
              "fire_resistance": 0.04,
              "firearm_resistance": 0.04,
              "health_increment": 100,
              "max_durability": 69400
            },
            "display": {
              "armor": "3000",
              "dexterity": "+8",
              "fire_resistance": "+4%",
              "firearm_resistance": "+4%",
              "health_increment": "+100",
              "max_durability": "69400"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 3300,
              "dexterity": 9,
              "fire_resistance": 0.08,
              "firearm_resistance": 0.08,
              "health_increment": 120,
              "max_durability": 76300
            },
            "display": {
              "armor": "3300",
              "dexterity": "+9",
              "fire_resistance": "+8%",
              "firearm_resistance": "+8%",
              "health_increment": "+120",
              "max_durability": "76300"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 3600,
              "dexterity": 10,
              "fire_resistance": 0.12,
              "firearm_resistance": 0.12,
              "health_increment": 140,
              "max_durability": 83250
            },
            "display": {
              "armor": "3600",
              "dexterity": "+10",
              "fire_resistance": "+12%",
              "firearm_resistance": "+12%",
              "health_increment": "+140",
              "max_durability": "83250"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 3900,
              "dexterity": 12,
              "fire_resistance": 0.16,
              "firearm_resistance": 0.16,
              "health_increment": 160,
              "max_durability": 90200
            },
            "display": {
              "armor": "3900",
              "dexterity": "+12",
              "fire_resistance": "+16%",
              "firearm_resistance": "+16%",
              "health_increment": "+160",
              "max_durability": "90200"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 4200,
              "dexterity": 14,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 97150
            },
            "display": {
              "armor": "4200",
              "dexterity": "+14",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "97150"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 4201,
              "dexterity": 14,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 97150
            },
            "display": {
              "armor": "4201",
              "dexterity": "+14",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "97150"
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
          "防御：6 级起每级增加 1，最高 5200。"
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
      "bodypart": 52,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 52,
        "description": "wls2_armor_easter_2026_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_boots_description",
        "name": "wls2_armor_easter_2026_boots_name",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_easter_2026",
        "tags": [
          "armor",
          "boots",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_boots_2_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_boots_description",
        "en": {
          "description": "Festive boots with the spring spirit",
          "full_description": "Festive boots with the spring spirit",
          "name": "Spring Rider Boots"
        },
        "full_description_key": "wls2_armor_easter_2026_boots_description",
        "name_key": "wls2_armor_easter_2026_boots_name",
        "zh": {
          "description": "节日靴子与春天精神",
          "full_description": "节日靴子与春天精神",
          "name": "弹簧 骑手 靴子"
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
                "wls2_resourse_fourfold_nails_2": 4,
                "wls2_resourse_secondary_leather_2": 4,
                "wls2_resourse_secondary_rope_2": 6
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_boots_2_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_boots_2_epic_recycle"
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
            "stack_id": "wls2_armor_easter_2026_boots_2_epic",
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
            "stack_id": "wls2_armor_easter_2026_boots_2_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_easter_2026",
      "stat_curves": {
        "armor": {
          "1": 30,
          "2": 33,
          "3": 36,
          "4": 40,
          "5": 45,
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
        "max_durability": {
          "1": 650,
          "2": 750,
          "3": 810,
          "4": 880,
          "5": 950
        },
        "move_speed_modifier": {
          "1": 0.21,
          "2": 0.21,
          "3": 0.21,
          "4": 0.21,
          "5": 0.21
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
      "subcategory": "boots",
      "tags": [
        "armor",
        "boots",
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
      "image_key": "1515700c3d6f41e7af2f6ae017e465b8313a2894f4a95602d0b4bc6695ac0546",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "弹簧 骑手 靴子",
        "name_en": "Spring Rider Boots",
        "description_zh": "节日靴子与春天精神",
        "description_en": "Festive boots with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_boots_2_epic 弹簧 骑手 靴子 spring rider boots 节日靴子与春天精神 festive boots with the spring spirit armor 护甲 boots armor boots armor_storage"
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
            "value": 650,
            "unit": "",
            "display": "650"
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
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.21,
            "unit": "%",
            "display": "+21%"
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
              "armor": 30,
              "dexterity": 2,
              "max_durability": 650
            },
            "display": {
              "armor": "30",
              "dexterity": "+2",
              "max_durability": "650"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 33,
              "dexterity": 4,
              "max_durability": 750
            },
            "display": {
              "armor": "33",
              "dexterity": "+4",
              "max_durability": "750"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 36,
              "dexterity": 6,
              "max_durability": 810
            },
            "display": {
              "armor": "36",
              "dexterity": "+6",
              "max_durability": "810"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 40,
              "dexterity": 8,
              "max_durability": 880
            },
            "display": {
              "armor": "40",
              "dexterity": "+8",
              "max_durability": "880"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 45,
              "dexterity": 10,
              "max_durability": 950
            },
            "display": {
              "armor": "45",
              "dexterity": "+10",
              "max_durability": "950"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 46,
              "dexterity": 10,
              "max_durability": 950
            },
            "display": {
              "armor": "46",
              "dexterity": "+10",
              "max_durability": "950"
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
          "防御：6 级起每级增加 1，最高 1045。"
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
      "bodypart": 52,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 52,
        "description": "wls2_armor_easter_2026_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_boots_description",
        "name": "wls2_armor_easter_2026_boots_name",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_easter_2026",
        "tags": [
          "armor",
          "boots",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_boots_3_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_boots_description",
        "en": {
          "description": "Festive boots with the spring spirit",
          "full_description": "Festive boots with the spring spirit",
          "name": "Spring Rider Boots"
        },
        "full_description_key": "wls2_armor_easter_2026_boots_description",
        "name_key": "wls2_armor_easter_2026_boots_name",
        "zh": {
          "description": "节日靴子与春天精神",
          "full_description": "节日靴子与春天精神",
          "name": "弹簧 骑手 靴子"
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
                "wls2_resourse_fourfold_nails_3": 4,
                "wls2_resourse_secondary_leather_3": 4,
                "wls2_resourse_secondary_rope_3": 6
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_boots_3_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_boots_3_epic_recycle"
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
            "stack_id": "wls2_armor_easter_2026_boots_3_epic",
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
            "stack_id": "wls2_armor_easter_2026_boots_3_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_easter_2026",
      "stat_curves": {
        "armor": {
          "1": 60,
          "2": 66,
          "3": 72,
          "4": 78,
          "5": 84,
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
          "1": 1360,
          "2": 1490,
          "3": 1630,
          "4": 1770,
          "5": 1900
        },
        "move_speed_modifier": {
          "1": 0.23,
          "2": 0.23,
          "3": 0.23,
          "4": 0.23,
          "5": 0.23
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
      "subcategory": "boots",
      "tags": [
        "armor",
        "boots",
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
      "image_key": "1515700c3d6f41e7af2f6ae017e465b8313a2894f4a95602d0b4bc6695ac0546",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "弹簧 骑手 靴子",
        "name_en": "Spring Rider Boots",
        "description_zh": "节日靴子与春天精神",
        "description_en": "Festive boots with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_boots_3_epic 弹簧 骑手 靴子 spring rider boots 节日靴子与春天精神 festive boots with the spring spirit armor 护甲 boots armor boots armor_storage"
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
            "value": 1360,
            "unit": "",
            "display": "1360"
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
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.23,
            "unit": "%",
            "display": "+23%"
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
              "armor": 60,
              "dexterity": 2,
              "firearm_resistance": 0.04,
              "health_modifier": 0.04,
              "max_durability": 1360
            },
            "display": {
              "armor": "60",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "health_modifier": "+4%",
              "max_durability": "1360"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 66,
              "dexterity": 4,
              "firearm_resistance": 0.08,
              "health_modifier": 0.06,
              "max_durability": 1490
            },
            "display": {
              "armor": "66",
              "dexterity": "+4",
              "firearm_resistance": "+8%",
              "health_modifier": "+6%",
              "max_durability": "1490"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 72,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "health_modifier": 0.08,
              "max_durability": 1630
            },
            "display": {
              "armor": "72",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "health_modifier": "+8%",
              "max_durability": "1630"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 78,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "health_modifier": 0.1,
              "max_durability": 1770
            },
            "display": {
              "armor": "78",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "health_modifier": "+10%",
              "max_durability": "1770"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 84,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_modifier": 0.12,
              "max_durability": 1900
            },
            "display": {
              "armor": "84",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_modifier": "+12%",
              "max_durability": "1900"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 85,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_modifier": 0.12,
              "max_durability": 1900
            },
            "display": {
              "armor": "85",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_modifier": "+12%",
              "max_durability": "1900"
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
          "防御：6 级起每级增加 1，最高 1084。"
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
      "bodypart": 52,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 52,
        "description": "wls2_armor_easter_2026_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_boots_description",
        "name": "wls2_armor_easter_2026_boots_name",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_easter_2026",
        "tags": [
          "armor",
          "boots",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_boots_4_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_boots_description",
        "en": {
          "description": "Festive boots with the spring spirit",
          "full_description": "Festive boots with the spring spirit",
          "name": "Spring Rider Boots"
        },
        "full_description_key": "wls2_armor_easter_2026_boots_description",
        "name_key": "wls2_armor_easter_2026_boots_name",
        "zh": {
          "description": "节日靴子与春天精神",
          "full_description": "节日靴子与春天精神",
          "name": "弹簧 骑手 靴子"
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
                "wls2_resourse_fourfold_nails_4": 4,
                "wls2_resourse_secondary_leather_4": 4,
                "wls2_resourse_secondary_rope_4": 6
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_boots_4_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_boots_4_epic_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_2_a",
            "durability_factor": 0.25,
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_easter_2026_boots_4_epic",
            "transaction_id": "transaction_iap_wls_2_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_1_a",
            "durability_factor": 0.25,
            "level_max": 110,
            "level_min": 91,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_easter_2026_boots_4_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_easter_2026",
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
          "1": 0.02,
          "2": 0.04,
          "3": 0.06,
          "4": 0.08,
          "5": 0.1
        },
        "health_increment": {
          "1": 35,
          "2": 45,
          "3": 55,
          "4": 65,
          "5": 75
        },
        "max_durability": {
          "1": 6250,
          "2": 6900,
          "3": 7500,
          "4": 8150,
          "5": 8750
        },
        "move_speed_modifier": {
          "1": 0.23,
          "2": 0.23,
          "3": 0.23,
          "4": 0.23,
          "5": 0.23
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
      "subcategory": "boots",
      "tags": [
        "armor",
        "boots",
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
      "image_key": "1515700c3d6f41e7af2f6ae017e465b8313a2894f4a95602d0b4bc6695ac0546",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "弹簧 骑手 靴子",
        "name_en": "Spring Rider Boots",
        "description_zh": "节日靴子与春天精神",
        "description_en": "Festive boots with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_boots_4_epic 弹簧 骑手 靴子 spring rider boots 节日靴子与春天精神 festive boots with the spring spirit armor 护甲 boots armor boots armor_storage"
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
            "value": 6250,
            "unit": "",
            "display": "6250"
          },
          {
            "key": "health_increment",
            "label": "生命加成",
            "value": 35,
            "unit": "",
            "display": "+35"
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
            "value": 1,
            "unit": "",
            "display": "1"
          },
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.23,
            "unit": "%",
            "display": "+23%"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 120,
              "dexterity": 2,
              "firearm_resistance": 0.02,
              "health_increment": 35,
              "max_durability": 6250
            },
            "display": {
              "armor": "120",
              "dexterity": "+2",
              "firearm_resistance": "+2%",
              "health_increment": "+35",
              "max_durability": "6250"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 132,
              "dexterity": 4,
              "firearm_resistance": 0.04,
              "health_increment": 45,
              "max_durability": 6900
            },
            "display": {
              "armor": "132",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "health_increment": "+45",
              "max_durability": "6900"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 144,
              "dexterity": 6,
              "firearm_resistance": 0.06,
              "health_increment": 55,
              "max_durability": 7500
            },
            "display": {
              "armor": "144",
              "dexterity": "+6",
              "firearm_resistance": "+6%",
              "health_increment": "+55",
              "max_durability": "7500"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 156,
              "dexterity": 8,
              "firearm_resistance": 0.08,
              "health_increment": 65,
              "max_durability": 8150
            },
            "display": {
              "armor": "156",
              "dexterity": "+8",
              "firearm_resistance": "+8%",
              "health_increment": "+65",
              "max_durability": "8150"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 168,
              "dexterity": 10,
              "firearm_resistance": 0.1,
              "health_increment": 75,
              "max_durability": 8750
            },
            "display": {
              "armor": "168",
              "dexterity": "+10",
              "firearm_resistance": "+10%",
              "health_increment": "+75",
              "max_durability": "8750"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 169,
              "dexterity": 10,
              "firearm_resistance": 0.1,
              "health_increment": 75,
              "max_durability": 8750
            },
            "display": {
              "armor": "169",
              "dexterity": "+10",
              "firearm_resistance": "+10%",
              "health_increment": "+75",
              "max_durability": "8750"
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
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 52,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 52,
        "description": "wls2_armor_easter_2026_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_boots_description",
        "name": "wls2_armor_easter_2026_boots_name",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_easter_2026",
        "tags": [
          "armor",
          "boots",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_boots_5_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_boots_description",
        "en": {
          "description": "Festive boots with the spring spirit",
          "full_description": "Festive boots with the spring spirit",
          "name": "Spring Rider Boots"
        },
        "full_description_key": "wls2_armor_easter_2026_boots_description",
        "name_key": "wls2_armor_easter_2026_boots_name",
        "zh": {
          "description": "节日靴子与春天精神",
          "full_description": "节日靴子与春天精神",
          "name": "弹簧 骑手 靴子"
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
                "wls2_resourse_fourfold_nails_5": 4,
                "wls2_resourse_secondary_leather_5": 4,
                "wls2_resourse_secondary_rope_5": 6
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_boots_5_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_boots_5_epic_recycle"
          }
        ]
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
            "stack_id": "wls2_armor_easter_2026_boots_5_epic",
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
            "stack_id": "wls2_armor_easter_2026_boots_5_epic",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_easter_2026",
      "stat_curves": {
        "armor": {
          "1": 240,
          "2": 264,
          "3": 288,
          "4": 312,
          "5": 336,
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
        "health_increment": {
          "1": 70,
          "2": 90,
          "3": 110,
          "4": 130,
          "5": 150
        },
        "max_durability": {
          "1": 17950,
          "2": 19750,
          "3": 21520,
          "4": 23350,
          "5": 25100
        },
        "move_speed_modifier": {
          "1": 0.23,
          "2": 0.23,
          "3": 0.23,
          "4": 0.23,
          "5": 0.23
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
      "subcategory": "boots",
      "tags": [
        "armor",
        "boots",
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
      "image_key": "1515700c3d6f41e7af2f6ae017e465b8313a2894f4a95602d0b4bc6695ac0546",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "弹簧 骑手 靴子",
        "name_en": "Spring Rider Boots",
        "description_zh": "节日靴子与春天精神",
        "description_en": "Festive boots with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_boots_5_epic 弹簧 骑手 靴子 spring rider boots 节日靴子与春天精神 festive boots with the spring spirit armor 护甲 boots armor boots armor_storage"
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
            "value": 17950,
            "unit": "",
            "display": "17950"
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
            "value": 4,
            "unit": "",
            "display": "+4"
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
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.23,
            "unit": "%",
            "display": "+23%"
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
              "armor": 240,
              "dexterity": 4,
              "firearm_resistance": 0.04,
              "health_increment": 70,
              "max_durability": 17950
            },
            "display": {
              "armor": "240",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "health_increment": "+70",
              "max_durability": "17950"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 264,
              "dexterity": 5,
              "firearm_resistance": 0.08,
              "health_increment": 90,
              "max_durability": 19750
            },
            "display": {
              "armor": "264",
              "dexterity": "+5",
              "firearm_resistance": "+8%",
              "health_increment": "+90",
              "max_durability": "19750"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 288,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "health_increment": 110,
              "max_durability": 21520
            },
            "display": {
              "armor": "288",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "health_increment": "+110",
              "max_durability": "21520"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 312,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "health_increment": 130,
              "max_durability": 23350
            },
            "display": {
              "armor": "312",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "health_increment": "+130",
              "max_durability": "23350"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 336,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_increment": 150,
              "max_durability": 25100
            },
            "display": {
              "armor": "336",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_increment": "+150",
              "max_durability": "25100"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 337,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_increment": 150,
              "max_durability": 25100
            },
            "display": {
              "armor": "337",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_increment": "+150",
              "max_durability": "25100"
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
          "防御：6 级起每级增加 1，最高 1336。"
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
      "bodypart": 52,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 52,
        "description": "wls2_armor_easter_2026_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_boots_description",
        "name": "wls2_armor_easter_2026_boots_name",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_easter_2026",
        "tags": [
          "armor",
          "boots",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_boots_6_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_boots_description",
        "en": {
          "description": "Festive boots with the spring spirit",
          "full_description": "Festive boots with the spring spirit",
          "name": "Spring Rider Boots"
        },
        "full_description_key": "wls2_armor_easter_2026_boots_description",
        "name_key": "wls2_armor_easter_2026_boots_name",
        "zh": {
          "description": "节日靴子与春天精神",
          "full_description": "节日靴子与春天精神",
          "name": "弹簧 骑手 靴子"
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
                "wls2_resourse_fourfold_nails_6": 4,
                "wls2_resourse_secondary_leather_6": 4,
                "wls2_resourse_secondary_rope_6": 6
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_boots_6_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_boots_6_epic_recycle"
          }
        ]
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
            "stack_id": "wls2_armor_easter_2026_boots_6_epic",
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
            "stack_id": "wls2_armor_easter_2026_boots_6_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_easter_2026",
      "stat_curves": {
        "armor": {
          "1": 430,
          "2": 473,
          "3": 516,
          "4": 559,
          "5": 602,
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
          "1": 34100,
          "2": 37500,
          "3": 40950,
          "4": 44350,
          "5": 47750
        },
        "move_speed_modifier": {
          "1": 0.23,
          "2": 0.23,
          "3": 0.23,
          "4": 0.23,
          "5": 0.23
        },
        "snow_resistance": {
          "1": 0.02,
          "2": 0.02,
          "3": 0.02,
          "4": 0.02,
          "5": 0.02
        },
        "warm_modifier": {
          "1": 2.5,
          "2": 2.5,
          "3": 2.5,
          "4": 2.5,
          "5": 2.5
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
      "subcategory": "boots",
      "tags": [
        "armor",
        "boots",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 6,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "1515700c3d6f41e7af2f6ae017e465b8313a2894f4a95602d0b4bc6695ac0546",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "弹簧 骑手 靴子",
        "name_en": "Spring Rider Boots",
        "description_zh": "节日靴子与春天精神",
        "description_en": "Festive boots with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_boots_6_epic 弹簧 骑手 靴子 spring rider boots 节日靴子与春天精神 festive boots with the spring spirit armor 护甲 boots armor boots armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 430,
            "unit": "",
            "display": "430"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 34100,
            "unit": "",
            "display": "34100"
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
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.23,
            "unit": "%",
            "display": "+23%"
          },
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
            "value": 2.5,
            "unit": "",
            "display": "2.5"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 430,
              "dexterity": 5,
              "firearm_resistance": 0.04,
              "health_increment": 100,
              "max_durability": 34100
            },
            "display": {
              "armor": "430",
              "dexterity": "+5",
              "firearm_resistance": "+4%",
              "health_increment": "+100",
              "max_durability": "34100"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 473,
              "dexterity": 7,
              "firearm_resistance": 0.08,
              "health_increment": 120,
              "max_durability": 37500
            },
            "display": {
              "armor": "473",
              "dexterity": "+7",
              "firearm_resistance": "+8%",
              "health_increment": "+120",
              "max_durability": "37500"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 516,
              "dexterity": 9,
              "firearm_resistance": 0.12,
              "health_increment": 140,
              "max_durability": 40950
            },
            "display": {
              "armor": "516",
              "dexterity": "+9",
              "firearm_resistance": "+12%",
              "health_increment": "+140",
              "max_durability": "40950"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 559,
              "dexterity": 10,
              "firearm_resistance": 0.16,
              "health_increment": 160,
              "max_durability": 44350
            },
            "display": {
              "armor": "559",
              "dexterity": "+10",
              "firearm_resistance": "+16%",
              "health_increment": "+160",
              "max_durability": "44350"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 602,
              "dexterity": 12,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 47750
            },
            "display": {
              "armor": "602",
              "dexterity": "+12",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "47750"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 603,
              "dexterity": 12,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 47750
            },
            "display": {
              "armor": "603",
              "dexterity": "+12",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "47750"
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
          "防御：6 级起每级增加 1，最高 1602。"
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
      "bodypart": 52,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 52,
        "description": "wls2_armor_easter_2026_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_boots_description",
        "name": "wls2_armor_easter_2026_boots_name",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_easter_2026",
        "tags": [
          "armor",
          "boots",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_boots_7_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_boots_description",
        "en": {
          "description": "Festive boots with the spring spirit",
          "full_description": "Festive boots with the spring spirit",
          "name": "Spring Rider Boots"
        },
        "full_description_key": "wls2_armor_easter_2026_boots_description",
        "name_key": "wls2_armor_easter_2026_boots_name",
        "zh": {
          "description": "节日靴子与春天精神",
          "full_description": "节日靴子与春天精神",
          "name": "弹簧 骑手 靴子"
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
                "wls2_resourse_fourfold_nails_7": 4,
                "wls2_resourse_secondary_leather_7": 4,
                "wls2_resourse_secondary_rope_7": 6
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_boots_7_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_boots_7_epic_recycle"
          }
        ]
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
            "stack_id": "wls2_armor_easter_2026_boots_7_epic",
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
            "stack_id": "wls2_armor_easter_2026_boots_7_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_boots_easter_2026",
      "stat_curves": {
        "armor": {
          "1": 860,
          "2": 946,
          "3": 1032,
          "4": 1118,
          "5": 1204,
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
          "1": 61400,
          "2": 67500,
          "3": 73650,
          "4": 79800,
          "5": 85900
        },
        "move_speed_modifier": {
          "1": 0.23,
          "2": 0.23,
          "3": 0.23,
          "4": 0.23,
          "5": 0.23
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
      "subcategory": "boots",
      "tags": [
        "armor",
        "boots",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 7,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "1515700c3d6f41e7af2f6ae017e465b8313a2894f4a95602d0b4bc6695ac0546",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "弹簧 骑手 靴子",
        "name_en": "Spring Rider Boots",
        "description_zh": "节日靴子与春天精神",
        "description_en": "Festive boots with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_boots_7_epic 弹簧 骑手 靴子 spring rider boots 节日靴子与春天精神 festive boots with the spring spirit armor 护甲 boots armor boots armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 860,
            "unit": "",
            "display": "860"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 61400,
            "unit": "",
            "display": "61400"
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
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.23,
            "unit": "%",
            "display": "+23%"
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
              "armor": 860,
              "dexterity": 8,
              "fire_resistance": 0.04,
              "firearm_resistance": 0.04,
              "health_increment": 100,
              "max_durability": 61400
            },
            "display": {
              "armor": "860",
              "dexterity": "+8",
              "fire_resistance": "+4%",
              "firearm_resistance": "+4%",
              "health_increment": "+100",
              "max_durability": "61400"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 946,
              "dexterity": 9,
              "fire_resistance": 0.08,
              "firearm_resistance": 0.08,
              "health_increment": 120,
              "max_durability": 67500
            },
            "display": {
              "armor": "946",
              "dexterity": "+9",
              "fire_resistance": "+8%",
              "firearm_resistance": "+8%",
              "health_increment": "+120",
              "max_durability": "67500"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1032,
              "dexterity": 10,
              "fire_resistance": 0.12,
              "firearm_resistance": 0.12,
              "health_increment": 140,
              "max_durability": 73650
            },
            "display": {
              "armor": "1032",
              "dexterity": "+10",
              "fire_resistance": "+12%",
              "firearm_resistance": "+12%",
              "health_increment": "+140",
              "max_durability": "73650"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1118,
              "dexterity": 12,
              "fire_resistance": 0.16,
              "firearm_resistance": 0.16,
              "health_increment": 160,
              "max_durability": 79800
            },
            "display": {
              "armor": "1118",
              "dexterity": "+12",
              "fire_resistance": "+16%",
              "firearm_resistance": "+16%",
              "health_increment": "+160",
              "max_durability": "79800"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1204,
              "dexterity": 14,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 85900
            },
            "display": {
              "armor": "1204",
              "dexterity": "+14",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "85900"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1205,
              "dexterity": 14,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 85900
            },
            "display": {
              "armor": "1205",
              "dexterity": "+14",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "85900"
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
          "防御：6 级起每级增加 1，最高 2204。"
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
      "bodypart": 63,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 63,
        "description": "wls2_armor_easter_2026_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_head_description",
        "name": "wls2_armor_easter_2026_head_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_easter_2026",
        "tags": [
          "armor",
          "head",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_head_2_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_head_description",
        "en": {
          "description": "A festive hat with the spring spirit",
          "full_description": "A festive hat with the spring spirit",
          "name": "Spring Rider Hat"
        },
        "full_description_key": "wls2_armor_easter_2026_head_description",
        "name_key": "wls2_armor_easter_2026_head_name",
        "zh": {
          "description": "一个节日的帽子与春天的精神",
          "full_description": "一个节日的帽子与春天的精神",
          "name": "弹簧 骑手 帽"
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
                "wls2_resourse_secondary_cloth_2": 4,
                "wls2_resourse_secondary_leather_2": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_head_2_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_head_2_epic_recycle"
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
            "stack_id": "wls2_armor_easter_2026_head_2_epic",
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
            "stack_id": "wls2_armor_easter_2026_head_2_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_easter_2026",
      "stat_curves": {
        "armor": {
          "1": 45,
          "2": 50,
          "3": 55,
          "4": 60,
          "5": 65,
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
        "max_durability": {
          "1": 800,
          "2": 900,
          "3": 1000,
          "4": 1050,
          "5": 1150
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
      "subcategory": "head",
      "tags": [
        "armor",
        "head",
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
      "image_key": "ac2f97244ba65f66a3d23dfb223ba5a2d844c548e349ce76e35373c6bffab25e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "弹簧 骑手 帽",
        "name_en": "Spring Rider Hat",
        "description_zh": "一个节日的帽子与春天的精神",
        "description_en": "A festive hat with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_head_2_epic 弹簧 骑手 帽 spring rider hat 一个节日的帽子与春天的精神 a festive hat with the spring spirit armor 护甲 head armor head armor_storage"
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
            "value": 800,
            "unit": "",
            "display": "800"
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
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 45,
              "dexterity": 2,
              "max_durability": 800
            },
            "display": {
              "armor": "45",
              "dexterity": "+2",
              "max_durability": "800"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 50,
              "dexterity": 4,
              "max_durability": 900
            },
            "display": {
              "armor": "50",
              "dexterity": "+4",
              "max_durability": "900"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 55,
              "dexterity": 6,
              "max_durability": 1000
            },
            "display": {
              "armor": "55",
              "dexterity": "+6",
              "max_durability": "1000"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 60,
              "dexterity": 8,
              "max_durability": 1050
            },
            "display": {
              "armor": "60",
              "dexterity": "+8",
              "max_durability": "1050"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 65,
              "dexterity": 10,
              "max_durability": 1150
            },
            "display": {
              "armor": "65",
              "dexterity": "+10",
              "max_durability": "1150"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 66,
              "dexterity": 10,
              "max_durability": 1150
            },
            "display": {
              "armor": "66",
              "dexterity": "+10",
              "max_durability": "1150"
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
          "防御：6 级起每级增加 1，最高 1065。"
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
      "bodypart": 63,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 63,
        "description": "wls2_armor_easter_2026_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_head_description",
        "name": "wls2_armor_easter_2026_head_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_easter_2026",
        "tags": [
          "armor",
          "head",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_head_3_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_head_description",
        "en": {
          "description": "A festive hat with the spring spirit",
          "full_description": "A festive hat with the spring spirit",
          "name": "Spring Rider Hat"
        },
        "full_description_key": "wls2_armor_easter_2026_head_description",
        "name_key": "wls2_armor_easter_2026_head_name",
        "zh": {
          "description": "一个节日的帽子与春天的精神",
          "full_description": "一个节日的帽子与春天的精神",
          "name": "弹簧 骑手 帽"
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
                "wls2_resourse_secondary_cloth_3": 4,
                "wls2_resourse_secondary_leather_3": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_head_3_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_head_3_epic_recycle"
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
            "stack_id": "wls2_armor_easter_2026_head_3_epic",
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
            "stack_id": "wls2_armor_easter_2026_head_3_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_easter_2026",
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
          "1": 1630,
          "2": 1790,
          "3": 1960,
          "4": 2120,
          "5": 2280
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
      "subcategory": "head",
      "tags": [
        "armor",
        "head",
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
      "image_key": "ac2f97244ba65f66a3d23dfb223ba5a2d844c548e349ce76e35373c6bffab25e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "弹簧 骑手 帽",
        "name_en": "Spring Rider Hat",
        "description_zh": "一个节日的帽子与春天的精神",
        "description_en": "A festive hat with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_head_3_epic 弹簧 骑手 帽 spring rider hat 一个节日的帽子与春天的精神 a festive hat with the spring spirit armor 护甲 head armor head armor_storage"
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
            "value": 1630,
            "unit": "",
            "display": "1630"
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
              "armor": 90,
              "dexterity": 2,
              "firearm_resistance": 0.04,
              "health_modifier": 0.04,
              "max_durability": 1630
            },
            "display": {
              "armor": "90",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "health_modifier": "+4%",
              "max_durability": "1630"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 99,
              "dexterity": 4,
              "firearm_resistance": 0.08,
              "health_modifier": 0.06,
              "max_durability": 1790
            },
            "display": {
              "armor": "99",
              "dexterity": "+4",
              "firearm_resistance": "+8%",
              "health_modifier": "+6%",
              "max_durability": "1790"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 108,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "health_modifier": 0.08,
              "max_durability": 1960
            },
            "display": {
              "armor": "108",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "health_modifier": "+8%",
              "max_durability": "1960"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 117,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "health_modifier": 0.1,
              "max_durability": 2120
            },
            "display": {
              "armor": "117",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "health_modifier": "+10%",
              "max_durability": "2120"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 126,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_modifier": 0.12,
              "max_durability": 2280
            },
            "display": {
              "armor": "126",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_modifier": "+12%",
              "max_durability": "2280"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 127,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_modifier": 0.12,
              "max_durability": 2280
            },
            "display": {
              "armor": "127",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_modifier": "+12%",
              "max_durability": "2280"
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
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 63,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 63,
        "description": "wls2_armor_easter_2026_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_head_description",
        "name": "wls2_armor_easter_2026_head_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_easter_2026",
        "tags": [
          "armor",
          "head",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_head_4_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_head_description",
        "en": {
          "description": "A festive hat with the spring spirit",
          "full_description": "A festive hat with the spring spirit",
          "name": "Spring Rider Hat"
        },
        "full_description_key": "wls2_armor_easter_2026_head_description",
        "name_key": "wls2_armor_easter_2026_head_name",
        "zh": {
          "description": "一个节日的帽子与春天的精神",
          "full_description": "一个节日的帽子与春天的精神",
          "name": "弹簧 骑手 帽"
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
                "wls2_resourse_secondary_cloth_4": 4,
                "wls2_resourse_secondary_leather_4": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_head_4_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_head_4_epic_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_2_a",
            "durability_factor": 0.25,
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_easter_2026_head_4_epic",
            "transaction_id": "transaction_iap_wls_2_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_1_a",
            "durability_factor": 0.25,
            "level_max": 110,
            "level_min": 91,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_easter_2026_head_4_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_easter_2026",
      "stat_curves": {
        "armor": {
          "1": 180,
          "2": 200,
          "3": 220,
          "4": 230,
          "5": 250,
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
          "1": 0.02,
          "2": 0.04,
          "3": 0.06,
          "4": 0.08,
          "5": 0.1
        },
        "health_increment": {
          "1": 35,
          "2": 45,
          "3": 55,
          "4": 65,
          "5": 75
        },
        "max_durability": {
          "1": 6900,
          "2": 7600,
          "3": 8300,
          "4": 8950,
          "5": 9650
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
        }
      },
      "subcategory": "head",
      "tags": [
        "armor",
        "head",
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
      "image_key": "ac2f97244ba65f66a3d23dfb223ba5a2d844c548e349ce76e35373c6bffab25e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "弹簧 骑手 帽",
        "name_en": "Spring Rider Hat",
        "description_zh": "一个节日的帽子与春天的精神",
        "description_en": "A festive hat with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_head_4_epic 弹簧 骑手 帽 spring rider hat 一个节日的帽子与春天的精神 a festive hat with the spring spirit armor 护甲 head armor head armor_storage"
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
            "value": 6900,
            "unit": "",
            "display": "6900"
          },
          {
            "key": "health_increment",
            "label": "生命加成",
            "value": 35,
            "unit": "",
            "display": "+35"
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
            "value": 1,
            "unit": "",
            "display": "1"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 180,
              "dexterity": 2,
              "firearm_resistance": 0.02,
              "health_increment": 35,
              "max_durability": 6900
            },
            "display": {
              "armor": "180",
              "dexterity": "+2",
              "firearm_resistance": "+2%",
              "health_increment": "+35",
              "max_durability": "6900"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 200,
              "dexterity": 4,
              "firearm_resistance": 0.04,
              "health_increment": 45,
              "max_durability": 7600
            },
            "display": {
              "armor": "200",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "health_increment": "+45",
              "max_durability": "7600"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 220,
              "dexterity": 6,
              "firearm_resistance": 0.06,
              "health_increment": 55,
              "max_durability": 8300
            },
            "display": {
              "armor": "220",
              "dexterity": "+6",
              "firearm_resistance": "+6%",
              "health_increment": "+55",
              "max_durability": "8300"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 230,
              "dexterity": 8,
              "firearm_resistance": 0.08,
              "health_increment": 65,
              "max_durability": 8950
            },
            "display": {
              "armor": "230",
              "dexterity": "+8",
              "firearm_resistance": "+8%",
              "health_increment": "+65",
              "max_durability": "8950"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 250,
              "dexterity": 10,
              "firearm_resistance": 0.1,
              "health_increment": 75,
              "max_durability": 9650
            },
            "display": {
              "armor": "250",
              "dexterity": "+10",
              "firearm_resistance": "+10%",
              "health_increment": "+75",
              "max_durability": "9650"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 251,
              "dexterity": 10,
              "firearm_resistance": 0.1,
              "health_increment": 75,
              "max_durability": 9650
            },
            "display": {
              "armor": "251",
              "dexterity": "+10",
              "firearm_resistance": "+10%",
              "health_increment": "+75",
              "max_durability": "9650"
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
          "防御：6 级起每级增加 1，最高 1250。"
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
      "bodypart": 63,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 63,
        "description": "wls2_armor_easter_2026_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_head_description",
        "name": "wls2_armor_easter_2026_head_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_easter_2026",
        "tags": [
          "armor",
          "head",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_head_5_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_head_description",
        "en": {
          "description": "A festive hat with the spring spirit",
          "full_description": "A festive hat with the spring spirit",
          "name": "Spring Rider Hat"
        },
        "full_description_key": "wls2_armor_easter_2026_head_description",
        "name_key": "wls2_armor_easter_2026_head_name",
        "zh": {
          "description": "一个节日的帽子与春天的精神",
          "full_description": "一个节日的帽子与春天的精神",
          "name": "弹簧 骑手 帽"
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
                "wls2_resourse_secondary_cloth_5": 4,
                "wls2_resourse_secondary_leather_5": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_head_5_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_head_5_epic_recycle"
          }
        ]
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
            "stack_id": "wls2_armor_easter_2026_head_5_epic",
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
            "stack_id": "wls2_armor_easter_2026_head_5_epic",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_easter_2026",
      "stat_curves": {
        "armor": {
          "1": 360,
          "2": 396,
          "3": 432,
          "4": 468,
          "5": 504,
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
          "1": 19700,
          "2": 21700,
          "3": 23700,
          "4": 25650,
          "5": 27650
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
      "subcategory": "head",
      "tags": [
        "armor",
        "head",
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
      "image_key": "ac2f97244ba65f66a3d23dfb223ba5a2d844c548e349ce76e35373c6bffab25e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "弹簧 骑手 帽",
        "name_en": "Spring Rider Hat",
        "description_zh": "一个节日的帽子与春天的精神",
        "description_en": "A festive hat with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_head_5_epic 弹簧 骑手 帽 spring rider hat 一个节日的帽子与春天的精神 a festive hat with the spring spirit armor 护甲 head armor head armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 360,
            "unit": "",
            "display": "360"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 19700,
            "unit": "",
            "display": "19700"
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
              "armor": 360,
              "dexterity": 2,
              "firearm_resistance": 0.04,
              "health_increment": 70,
              "max_durability": 19700
            },
            "display": {
              "armor": "360",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "health_increment": "+70",
              "max_durability": "19700"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 396,
              "dexterity": 4,
              "firearm_resistance": 0.08,
              "health_increment": 90,
              "max_durability": 21700
            },
            "display": {
              "armor": "396",
              "dexterity": "+4",
              "firearm_resistance": "+8%",
              "health_increment": "+90",
              "max_durability": "21700"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 432,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "health_increment": 110,
              "max_durability": 23700
            },
            "display": {
              "armor": "432",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "health_increment": "+110",
              "max_durability": "23700"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 468,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "health_increment": 130,
              "max_durability": 25650
            },
            "display": {
              "armor": "468",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "health_increment": "+130",
              "max_durability": "25650"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 504,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_increment": 150,
              "max_durability": 27650
            },
            "display": {
              "armor": "504",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_increment": "+150",
              "max_durability": "27650"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 505,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_increment": 150,
              "max_durability": 27650
            },
            "display": {
              "armor": "505",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_increment": "+150",
              "max_durability": "27650"
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
          "防御：6 级起每级增加 1，最高 1504。"
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
      "bodypart": 63,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 63,
        "description": "wls2_armor_easter_2026_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_head_description",
        "name": "wls2_armor_easter_2026_head_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_easter_2026",
        "tags": [
          "armor",
          "head",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_head_6_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_head_description",
        "en": {
          "description": "A festive hat with the spring spirit",
          "full_description": "A festive hat with the spring spirit",
          "name": "Spring Rider Hat"
        },
        "full_description_key": "wls2_armor_easter_2026_head_description",
        "name_key": "wls2_armor_easter_2026_head_name",
        "zh": {
          "description": "一个节日的帽子与春天的精神",
          "full_description": "一个节日的帽子与春天的精神",
          "name": "弹簧 骑手 帽"
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
                "wls2_resourse_secondary_cloth_6": 4,
                "wls2_resourse_secondary_leather_6": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_head_6_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_head_6_epic_recycle"
          }
        ]
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
            "stack_id": "wls2_armor_easter_2026_head_6_epic",
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
            "stack_id": "wls2_armor_easter_2026_head_6_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_easter_2026",
      "stat_curves": {
        "armor": {
          "1": 650,
          "2": 715,
          "3": 780,
          "4": 845,
          "5": 910,
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
          "1": 35600,
          "2": 39150,
          "3": 42700,
          "4": 46250,
          "5": 49800
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
      "subcategory": "head",
      "tags": [
        "armor",
        "head",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 6,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "ac2f97244ba65f66a3d23dfb223ba5a2d844c548e349ce76e35373c6bffab25e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "弹簧 骑手 帽",
        "name_en": "Spring Rider Hat",
        "description_zh": "一个节日的帽子与春天的精神",
        "description_en": "A festive hat with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_head_6_epic 弹簧 骑手 帽 spring rider hat 一个节日的帽子与春天的精神 a festive hat with the spring spirit armor 护甲 head armor head armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 650,
            "unit": "",
            "display": "650"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 35600,
            "unit": "",
            "display": "35600"
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
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 650,
              "dexterity": 5,
              "firearm_resistance": 0.04,
              "health_increment": 100,
              "max_durability": 35600
            },
            "display": {
              "armor": "650",
              "dexterity": "+5",
              "firearm_resistance": "+4%",
              "health_increment": "+100",
              "max_durability": "35600"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 715,
              "dexterity": 7,
              "firearm_resistance": 0.08,
              "health_increment": 120,
              "max_durability": 39150
            },
            "display": {
              "armor": "715",
              "dexterity": "+7",
              "firearm_resistance": "+8%",
              "health_increment": "+120",
              "max_durability": "39150"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 780,
              "dexterity": 9,
              "firearm_resistance": 0.12,
              "health_increment": 140,
              "max_durability": 42700
            },
            "display": {
              "armor": "780",
              "dexterity": "+9",
              "firearm_resistance": "+12%",
              "health_increment": "+140",
              "max_durability": "42700"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 845,
              "dexterity": 10,
              "firearm_resistance": 0.16,
              "health_increment": 160,
              "max_durability": 46250
            },
            "display": {
              "armor": "845",
              "dexterity": "+10",
              "firearm_resistance": "+16%",
              "health_increment": "+160",
              "max_durability": "46250"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 910,
              "dexterity": 12,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 49800
            },
            "display": {
              "armor": "910",
              "dexterity": "+12",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "49800"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 911,
              "dexterity": 12,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 49800
            },
            "display": {
              "armor": "911",
              "dexterity": "+12",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "49800"
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
          "防御：6 级起每级增加 1，最高 1910。"
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
      "bodypart": 63,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 63,
        "description": "wls2_armor_easter_2026_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_head_description",
        "name": "wls2_armor_easter_2026_head_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_easter_2026",
        "tags": [
          "armor",
          "head",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_head_7_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_head_description",
        "en": {
          "description": "A festive hat with the spring spirit",
          "full_description": "A festive hat with the spring spirit",
          "name": "Spring Rider Hat"
        },
        "full_description_key": "wls2_armor_easter_2026_head_description",
        "name_key": "wls2_armor_easter_2026_head_name",
        "zh": {
          "description": "一个节日的帽子与春天的精神",
          "full_description": "一个节日的帽子与春天的精神",
          "name": "弹簧 骑手 帽"
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
                "wls2_resourse_secondary_cloth_7": 4,
                "wls2_resourse_secondary_leather_7": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_head_7_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_head_7_epic_recycle"
          }
        ]
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
            "stack_id": "wls2_armor_easter_2026_head_7_epic",
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
            "stack_id": "wls2_armor_easter_2026_head_7_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_easter_2026",
      "stat_curves": {
        "armor": {
          "1": 1300,
          "2": 1430,
          "3": 1560,
          "4": 1690,
          "5": 1820,
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
          "1": 64050,
          "2": 70450,
          "3": 76850,
          "4": 83250,
          "5": 89650
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
      "subcategory": "head",
      "tags": [
        "armor",
        "head",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 7,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "ac2f97244ba65f66a3d23dfb223ba5a2d844c548e349ce76e35373c6bffab25e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "弹簧 骑手 帽",
        "name_en": "Spring Rider Hat",
        "description_zh": "一个节日的帽子与春天的精神",
        "description_en": "A festive hat with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_head_7_epic 弹簧 骑手 帽 spring rider hat 一个节日的帽子与春天的精神 a festive hat with the spring spirit armor 护甲 head armor head armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 1300,
            "unit": "",
            "display": "1300"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 64050,
            "unit": "",
            "display": "64050"
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
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 1300,
              "dexterity": 8,
              "fire_resistance": 0.04,
              "firearm_resistance": 0.04,
              "health_increment": 100,
              "max_durability": 64050
            },
            "display": {
              "armor": "1300",
              "dexterity": "+8",
              "fire_resistance": "+4%",
              "firearm_resistance": "+4%",
              "health_increment": "+100",
              "max_durability": "64050"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 1430,
              "dexterity": 9,
              "fire_resistance": 0.08,
              "firearm_resistance": 0.08,
              "health_increment": 120,
              "max_durability": 70450
            },
            "display": {
              "armor": "1430",
              "dexterity": "+9",
              "fire_resistance": "+8%",
              "firearm_resistance": "+8%",
              "health_increment": "+120",
              "max_durability": "70450"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1560,
              "dexterity": 10,
              "fire_resistance": 0.12,
              "firearm_resistance": 0.12,
              "health_increment": 140,
              "max_durability": 76850
            },
            "display": {
              "armor": "1560",
              "dexterity": "+10",
              "fire_resistance": "+12%",
              "firearm_resistance": "+12%",
              "health_increment": "+140",
              "max_durability": "76850"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1690,
              "dexterity": 12,
              "fire_resistance": 0.16,
              "firearm_resistance": 0.16,
              "health_increment": 160,
              "max_durability": 83250
            },
            "display": {
              "armor": "1690",
              "dexterity": "+12",
              "fire_resistance": "+16%",
              "firearm_resistance": "+16%",
              "health_increment": "+160",
              "max_durability": "83250"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1820,
              "dexterity": 14,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 89650
            },
            "display": {
              "armor": "1820",
              "dexterity": "+14",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "89650"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1821,
              "dexterity": 14,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 89650
            },
            "display": {
              "armor": "1821",
              "dexterity": "+14",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "89650"
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
          "防御：6 级起每级增加 1，最高 2820。"
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
      "bodypart": 53,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 53,
        "description": "wls2_armor_easter_2026_armor_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_armor_legs_description",
        "name": "wls2_armor_easter_2026_armor_legs_name",
        "rarity": "epic",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_easter_2026",
        "tags": [
          "armor",
          "legs",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_legs_2_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_armor_legs_description",
        "en": {
          "description": "Festive pants with the spring spirit",
          "full_description": "Festive pants with the spring spirit",
          "name": "Spring Rider Pants"
        },
        "full_description_key": "wls2_armor_easter_2026_armor_legs_description",
        "name_key": "wls2_armor_easter_2026_armor_legs_name",
        "zh": {
          "description": "节日裤子与春天精神",
          "full_description": "节日裤子与春天精神",
          "name": "春季 骑手 裤子"
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
                "wls2_resourse_secondary_leather_2": 6,
                "wls2_resourse_tertiary_clothroll_2": 2
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_legs_2_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_legs_2_epic_recycle"
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
            "stack_id": "wls2_armor_easter_2026_legs_2_epic",
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
            "stack_id": "wls2_armor_easter_2026_legs_2_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_easter_2026",
      "stat_curves": {
        "armor": {
          "1": 60,
          "2": 65,
          "3": 70,
          "4": 75,
          "5": 85,
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
        "max_durability": {
          "1": 950,
          "2": 1050,
          "3": 1150,
          "4": 1250,
          "5": 1300
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
        "armor",
        "legs",
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
      "image_key": "369c4c38b41006f862ca7167d4039e45b045279389e459c51597253d7e33b7dd",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "春季 骑手 裤子",
        "name_en": "Spring Rider Pants",
        "description_zh": "节日裤子与春天精神",
        "description_en": "Festive pants with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_legs_2_epic 春季 骑手 裤子 spring rider pants 节日裤子与春天精神 festive pants with the spring spirit armor 护甲 legs armor legs armor_storage"
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
            "value": 950,
            "unit": "",
            "display": "950"
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
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 60,
              "dexterity": 2,
              "max_durability": 950
            },
            "display": {
              "armor": "60",
              "dexterity": "+2",
              "max_durability": "950"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 65,
              "dexterity": 4,
              "max_durability": 1050
            },
            "display": {
              "armor": "65",
              "dexterity": "+4",
              "max_durability": "1050"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 70,
              "dexterity": 6,
              "max_durability": 1150
            },
            "display": {
              "armor": "70",
              "dexterity": "+6",
              "max_durability": "1150"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 75,
              "dexterity": 8,
              "max_durability": 1250
            },
            "display": {
              "armor": "75",
              "dexterity": "+8",
              "max_durability": "1250"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 85,
              "dexterity": 10,
              "max_durability": 1300
            },
            "display": {
              "armor": "85",
              "dexterity": "+10",
              "max_durability": "1300"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 86,
              "dexterity": 10,
              "max_durability": 1300
            },
            "display": {
              "armor": "86",
              "dexterity": "+10",
              "max_durability": "1300"
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
          "防御：6 级起每级增加 1，最高 1085。"
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
      "bodypart": 53,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 53,
        "description": "wls2_armor_easter_2026_armor_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_armor_legs_description",
        "name": "wls2_armor_easter_2026_armor_legs_name",
        "rarity": "epic",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_easter_2026",
        "tags": [
          "armor",
          "legs",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_legs_3_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_armor_legs_description",
        "en": {
          "description": "Festive pants with the spring spirit",
          "full_description": "Festive pants with the spring spirit",
          "name": "Spring Rider Pants"
        },
        "full_description_key": "wls2_armor_easter_2026_armor_legs_description",
        "name_key": "wls2_armor_easter_2026_armor_legs_name",
        "zh": {
          "description": "节日裤子与春天精神",
          "full_description": "节日裤子与春天精神",
          "name": "春季 骑手 裤子"
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
                "wls2_resourse_secondary_leather_3": 6,
                "wls2_resourse_tertiary_clothroll_3": 2
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_legs_3_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_legs_3_epic_recycle"
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
            "stack_id": "wls2_armor_easter_2026_legs_3_epic",
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
            "stack_id": "wls2_armor_easter_2026_legs_3_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_easter_2026",
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
        "armor",
        "legs",
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
      "image_key": "369c4c38b41006f862ca7167d4039e45b045279389e459c51597253d7e33b7dd",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "春季 骑手 裤子",
        "name_en": "Spring Rider Pants",
        "description_zh": "节日裤子与春天精神",
        "description_en": "Festive pants with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_legs_3_epic 春季 骑手 裤子 spring rider pants 节日裤子与春天精神 festive pants with the spring spirit armor 护甲 legs armor legs armor_storage"
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
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 53,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 53,
        "description": "wls2_armor_easter_2026_armor_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_armor_legs_description",
        "name": "wls2_armor_easter_2026_armor_legs_name",
        "rarity": "epic",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_easter_2026",
        "tags": [
          "armor",
          "legs",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_legs_4_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_armor_legs_description",
        "en": {
          "description": "Festive pants with the spring spirit",
          "full_description": "Festive pants with the spring spirit",
          "name": "Spring Rider Pants"
        },
        "full_description_key": "wls2_armor_easter_2026_armor_legs_description",
        "name_key": "wls2_armor_easter_2026_armor_legs_name",
        "zh": {
          "description": "节日裤子与春天精神",
          "full_description": "节日裤子与春天精神",
          "name": "春季 骑手 裤子"
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
                "wls2_resourse_secondary_leather_4": 6,
                "wls2_resourse_tertiary_clothroll_4": 2
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_legs_4_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_legs_4_epic_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_2_a",
            "durability_factor": 0.25,
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_easter_2026_legs_4_epic",
            "transaction_id": "transaction_iap_wls_2_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_1_a",
            "durability_factor": 0.25,
            "level_max": 110,
            "level_min": 91,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_armor_easter_2026_legs_4_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_easter_2026",
      "stat_curves": {
        "armor": {
          "1": 240,
          "2": 260,
          "3": 290,
          "4": 310,
          "5": 340,
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
          "1": 0.02,
          "2": 0.04,
          "3": 0.06,
          "4": 0.08,
          "5": 0.1
        },
        "health_increment": {
          "1": 35,
          "2": 45,
          "3": 55,
          "4": 65,
          "5": 75
        },
        "max_durability": {
          "1": 7200,
          "2": 7900,
          "3": 8600,
          "4": 9350,
          "5": 10050
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
        }
      },
      "subcategory": "legs",
      "tags": [
        "armor",
        "legs",
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
      "image_key": "369c4c38b41006f862ca7167d4039e45b045279389e459c51597253d7e33b7dd",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "春季 骑手 裤子",
        "name_en": "Spring Rider Pants",
        "description_zh": "节日裤子与春天精神",
        "description_en": "Festive pants with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_legs_4_epic 春季 骑手 裤子 spring rider pants 节日裤子与春天精神 festive pants with the spring spirit armor 护甲 legs armor legs armor_storage"
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
            "value": 7200,
            "unit": "",
            "display": "7200"
          },
          {
            "key": "health_increment",
            "label": "生命加成",
            "value": 35,
            "unit": "",
            "display": "+35"
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
            "value": 1,
            "unit": "",
            "display": "1"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 240,
              "dexterity": 2,
              "firearm_resistance": 0.02,
              "health_increment": 35,
              "max_durability": 7200
            },
            "display": {
              "armor": "240",
              "dexterity": "+2",
              "firearm_resistance": "+2%",
              "health_increment": "+35",
              "max_durability": "7200"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 260,
              "dexterity": 4,
              "firearm_resistance": 0.04,
              "health_increment": 45,
              "max_durability": 7900
            },
            "display": {
              "armor": "260",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "health_increment": "+45",
              "max_durability": "7900"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 290,
              "dexterity": 6,
              "firearm_resistance": 0.06,
              "health_increment": 55,
              "max_durability": 8600
            },
            "display": {
              "armor": "290",
              "dexterity": "+6",
              "firearm_resistance": "+6%",
              "health_increment": "+55",
              "max_durability": "8600"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 310,
              "dexterity": 8,
              "firearm_resistance": 0.08,
              "health_increment": 65,
              "max_durability": 9350
            },
            "display": {
              "armor": "310",
              "dexterity": "+8",
              "firearm_resistance": "+8%",
              "health_increment": "+65",
              "max_durability": "9350"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 340,
              "dexterity": 10,
              "firearm_resistance": 0.1,
              "health_increment": 75,
              "max_durability": 10050
            },
            "display": {
              "armor": "340",
              "dexterity": "+10",
              "firearm_resistance": "+10%",
              "health_increment": "+75",
              "max_durability": "10050"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 341,
              "dexterity": 10,
              "firearm_resistance": 0.1,
              "health_increment": 75,
              "max_durability": 10050
            },
            "display": {
              "armor": "341",
              "dexterity": "+10",
              "firearm_resistance": "+10%",
              "health_increment": "+75",
              "max_durability": "10050"
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
          "防御：6 级起每级增加 1，最高 1340。"
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
      "bodypart": 53,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 53,
        "description": "wls2_armor_easter_2026_armor_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_armor_legs_description",
        "name": "wls2_armor_easter_2026_armor_legs_name",
        "rarity": "epic",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_easter_2026",
        "tags": [
          "armor",
          "legs",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_legs_5_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_armor_legs_description",
        "en": {
          "description": "Festive pants with the spring spirit",
          "full_description": "Festive pants with the spring spirit",
          "name": "Spring Rider Pants"
        },
        "full_description_key": "wls2_armor_easter_2026_armor_legs_description",
        "name_key": "wls2_armor_easter_2026_armor_legs_name",
        "zh": {
          "description": "节日裤子与春天精神",
          "full_description": "节日裤子与春天精神",
          "name": "春季 骑手 裤子"
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
                "wls2_resourse_secondary_leather_5": 6,
                "wls2_resourse_tertiary_clothroll_5": 2
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_legs_5_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_legs_5_epic_recycle"
          }
        ]
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
            "stack_id": "wls2_armor_easter_2026_legs_5_epic",
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
            "stack_id": "wls2_armor_easter_2026_legs_5_epic",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_easter_2026",
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
        "armor",
        "legs",
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
      "image_key": "369c4c38b41006f862ca7167d4039e45b045279389e459c51597253d7e33b7dd",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "春季 骑手 裤子",
        "name_en": "Spring Rider Pants",
        "description_zh": "节日裤子与春天精神",
        "description_en": "Festive pants with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_legs_5_epic 春季 骑手 裤子 spring rider pants 节日裤子与春天精神 festive pants with the spring spirit armor 护甲 legs armor legs armor_storage"
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
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 53,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 53,
        "description": "wls2_armor_easter_2026_armor_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_armor_legs_description",
        "name": "wls2_armor_easter_2026_armor_legs_name",
        "rarity": "epic",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_easter_2026",
        "tags": [
          "armor",
          "legs",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_legs_6_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_armor_legs_description",
        "en": {
          "description": "Festive pants with the spring spirit",
          "full_description": "Festive pants with the spring spirit",
          "name": "Spring Rider Pants"
        },
        "full_description_key": "wls2_armor_easter_2026_armor_legs_description",
        "name_key": "wls2_armor_easter_2026_armor_legs_name",
        "zh": {
          "description": "节日裤子与春天精神",
          "full_description": "节日裤子与春天精神",
          "name": "春季 骑手 裤子"
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
                "wls2_resourse_secondary_leather_6": 6,
                "wls2_resourse_tertiary_clothroll_5": 3
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_legs_6_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_legs_6_epic_recycle"
          }
        ]
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
            "stack_id": "wls2_armor_easter_2026_legs_6_epic",
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
            "stack_id": "wls2_armor_easter_2026_legs_6_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_easter_2026",
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
        "armor",
        "legs",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 6,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "369c4c38b41006f862ca7167d4039e45b045279389e459c51597253d7e33b7dd",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "春季 骑手 裤子",
        "name_en": "Spring Rider Pants",
        "description_zh": "节日裤子与春天精神",
        "description_en": "Festive pants with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_legs_6_epic 春季 骑手 裤子 spring rider pants 节日裤子与春天精神 festive pants with the spring spirit armor 护甲 legs armor legs armor_storage"
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
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 53,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 53,
        "description": "wls2_armor_easter_2026_armor_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_easter_2026_armor_legs_description",
        "name": "wls2_armor_easter_2026_armor_legs_name",
        "rarity": "epic",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_easter_2026",
        "tags": [
          "armor",
          "legs",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_easter_2026_legs_7_epic",
      "localization": {
        "description_key": "wls2_armor_easter_2026_armor_legs_description",
        "en": {
          "description": "Festive pants with the spring spirit",
          "full_description": "Festive pants with the spring spirit",
          "name": "Spring Rider Pants"
        },
        "full_description_key": "wls2_armor_easter_2026_armor_legs_description",
        "name_key": "wls2_armor_easter_2026_armor_legs_name",
        "zh": {
          "description": "节日裤子与春天精神",
          "full_description": "节日裤子与春天精神",
          "name": "春季 骑手 裤子"
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
                "wls2_resourse_secondary_leather_7": 6,
                "wls2_resourse_tertiary_clothroll_5": 4
              },
              "result": {
                "inventory_stack_id": "wls2_armor_easter_2026_legs_7_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_easter_2026_legs_7_epic_recycle"
          }
        ]
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
            "stack_id": "wls2_armor_easter_2026_legs_7_epic",
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
            "stack_id": "wls2_armor_easter_2026_legs_7_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_legs_easter_2026",
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
        "armor",
        "legs",
        "armor_storage"
      ],
      "throwing_item": null,
      "tier": 7,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "369c4c38b41006f862ca7167d4039e45b045279389e459c51597253d7e33b7dd",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "春季 骑手 裤子",
        "name_en": "Spring Rider Pants",
        "description_zh": "节日裤子与春天精神",
        "description_en": "Festive pants with the spring spirit",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_easter_2026_legs_7_epic 春季 骑手 裤子 spring rider pants 节日裤子与春天精神 festive pants with the spring spirit armor 护甲 legs armor legs armor_storage"
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
        "description": "inventory_stack_view_wls_clothes_hat_1_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_hat_1_description",
        "name": "inventory_stack_view_wls_clothes_hat_1_name",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_hat_1",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_1",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_hat_1_description",
        "en": {
          "description": "Simple hat that provides protection from the sun and rain.",
          "full_description": "Simple hat that provides protection from the sun and rain.",
          "name": "Hat"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_hat_1_description",
        "name_key": "inventory_stack_view_wls_clothes_hat_1_name",
        "zh": {
          "description": "简单的帽子，防雨又防晒的优雅护具。",
          "full_description": "简单的帽子，防雨又防晒的优雅护具。",
          "name": "帽子"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_hat_1",
      "stat_curves": {
        "armor": {
          "default": 5
        },
        "max_durability": {
          "default": 25
        },
        "warm_modifier": {
          "default": 0.25
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
      "tier": 1,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "4748537df9868cfef94b2cd9fd72dba88c6afbe3cf288242d5338f6e62496222",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "帽子",
        "name_en": "Hat",
        "description_zh": "简单的帽子，防雨又防晒的优雅护具。",
        "description_en": "Simple hat that provides protection from the sun and rain.",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_head_1 帽子 hat 简单的帽子，防雨又防晒的优雅护具。 simple hat that provides protection from the sun and rain. armor 护甲 head head armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 5,
            "unit": "",
            "display": "5"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 25,
            "unit": "",
            "display": "25"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.25,
            "unit": "",
            "display": "0.25"
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
        "description": "inventory_stack_view_wls2_armor_head_1_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_1_common_description",
        "name": "inventory_stack_view_wls2_armor_head_1_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_hat_1",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_1_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_1_common_description",
        "en": {
          "description": "Provides protection from the sun and rain",
          "full_description": "Provides protection from the sun and rain",
          "name": "Straw hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_1_common_description",
        "name_key": "inventory_stack_view_wls2_armor_head_1_common_name",
        "zh": {
          "description": "简单的帽子，防雨又防晒的优雅护具。",
          "full_description": "简单的帽子，防雨又防晒的优雅护具。",
          "name": "草帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_1": 1,
            "wls2_resourse_secondary_rope_1": 1
          },
          "learn_exp": 100,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_cloth_1": 1,
                "wls2_resourse_secondary_rope_1": 1
              },
              "learn_exp": 100,
              "min_level": 1,
              "result": {
                "inventory_stack_id": "wls2_armor_head_1_common"
              },
              "type": "workbench"
            },
            "recipe_id": "wls2_armor_head_1_common_ab_ftue"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_hat_1",
      "stat_curves": {
        "armor": {
          "1": 8,
          "2": 9,
          "3": 10,
          "4": 11,
          "5": 12,
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
      "subcategory": "head",
      "tags": [
        "head",
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
      "image_key": "4748537df9868cfef94b2cd9fd72dba88c6afbe3cf288242d5338f6e62496222",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "草帽",
        "name_en": "Straw hat",
        "description_zh": "简单的帽子，防雨又防晒的优雅护具。",
        "description_en": "Provides protection from the sun and rain",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_head_1_common 草帽 straw hat 简单的帽子，防雨又防晒的优雅护具。 provides protection from the sun and rain armor 护甲 head head armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 8,
            "unit": "",
            "display": "8"
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
              "armor": 8,
              "max_durability": 150
            },
            "display": {
              "armor": "8",
              "max_durability": "150"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 9,
              "max_durability": 165
            },
            "display": {
              "armor": "9",
              "max_durability": "165"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 10,
              "max_durability": 180
            },
            "display": {
              "armor": "10",
              "max_durability": "180"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 11,
              "max_durability": 195
            },
            "display": {
              "armor": "11",
              "max_durability": "195"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 12,
              "max_durability": 210
            },
            "display": {
              "armor": "12",
              "max_durability": "210"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 13,
              "max_durability": 210
            },
            "display": {
              "armor": "13",
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
          "防御：6 级起每级增加 1，最高 1012。"
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
        "description": "inventory_stack_view_wls_clothes_leather_hat_2_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_leather_hat_2_description",
        "name": "inventory_stack_view_wls_clothes_leather_hat_2_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_leather_hat_2",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_2",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_leather_hat_2_description",
        "en": {
          "description": "Fine leather hat that not only protects you from the sun, but also from the impact of the whip",
          "full_description": "Fine leather hat that not only protects you from the sun, but also from the impact of the whip",
          "name": "Leather hat"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_leather_hat_2_description",
        "name_key": "inventory_stack_view_wls_clothes_leather_hat_2_name",
        "zh": {
          "description": "优秀的皮帽不仅可以保护您免受阳光照射，还可以抵挡鞭子的抽打。",
          "full_description": "优秀的皮帽不仅可以保护您免受阳光照射，还可以抵挡鞭子的抽打。",
          "name": "皮帽"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_leather_hat_2",
      "stat_curves": {
        "armor": {
          "default": 25
        },
        "max_durability": {
          "default": 37
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
      "tier": 2,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "817217b34a513f2299e1ee3c54afd78b085e4f7abcc787a6f37dffb471e9fbaa",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "皮帽",
        "name_en": "Leather hat",
        "description_zh": "优秀的皮帽不仅可以保护您免受阳光照射，还可以抵挡鞭子的抽打。",
        "description_en": "Fine leather hat that not only protects you from the sun, but also from the impact of the whip",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_head_2 皮帽 leather hat 优秀的皮帽不仅可以保护您免受阳光照射，还可以抵挡鞭子的抽打。 fine leather hat that not only protects you from the sun, but also from the impact of the whip armor 护甲 head head armor armor_storage"
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
            "value": 37,
            "unit": "",
            "display": "37"
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
        "description": "inventory_stack_view_wls2_armor_head_2_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_2_common_description",
        "name": "inventory_stack_view_wls2_armor_head_2_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_leather_hat_2",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_2_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_2_common_description",
        "en": {
          "description": "Fine leather hat that not only protects you from the sun, but also from the impact of the whip",
          "full_description": "Fine leather hat that not only protects you from the sun, but also from the impact of the whip",
          "name": "Leather hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_2_common_description",
        "name_key": "inventory_stack_view_wls2_armor_head_2_common_name",
        "zh": {
          "description": "优秀的皮帽不仅可以保护您免受阳光照射，还可以抵挡鞭子的抽打",
          "full_description": "优秀的皮帽不仅可以保护您免受阳光照射，还可以抵挡鞭子的抽打",
          "name": "皮帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_2": 2,
            "wls2_resourse_secondary_leather_2": 3
          },
          "learn_exp": 200,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_head_2_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_25coins_dynamic_town_trader_offer_head_2"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_head_2_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_50coins_dynamic_smuggler_offer_head_upgrade_2"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_head_2_common"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_ftue_ab_tutorial_trader_slot_4"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_leather_hat_2",
      "stat_curves": {
        "armor": {
          "1": 15,
          "2": 17,
          "3": 18,
          "4": 20,
          "5": 21,
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
      "subcategory": "head",
      "tags": [
        "head",
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
      "image_key": "817217b34a513f2299e1ee3c54afd78b085e4f7abcc787a6f37dffb471e9fbaa",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "皮帽",
        "name_en": "Leather hat",
        "description_zh": "优秀的皮帽不仅可以保护您免受阳光照射，还可以抵挡鞭子的抽打",
        "description_en": "Fine leather hat that not only protects you from the sun, but also from the impact of the whip",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_head_2_common 皮帽 leather hat 优秀的皮帽不仅可以保护您免受阳光照射，还可以抵挡鞭子的抽打 fine leather hat that not only protects you from the sun, but also from the impact of the whip armor 护甲 head head armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 15,
            "unit": "",
            "display": "15"
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
              "armor": 15,
              "max_durability": 260
            },
            "display": {
              "armor": "15",
              "max_durability": "260"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 17,
              "max_durability": 285
            },
            "display": {
              "armor": "17",
              "max_durability": "285"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 18,
              "max_durability": 305
            },
            "display": {
              "armor": "18",
              "max_durability": "305"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 20,
              "max_durability": 330
            },
            "display": {
              "armor": "20",
              "max_durability": "330"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 21,
              "max_durability": 350
            },
            "display": {
              "armor": "21",
              "max_durability": "350"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 22,
              "max_durability": 350
            },
            "display": {
              "armor": "22",
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
          "防御：6 级起每级增加 1，最高 1021。"
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
        "description": "inventory_stack_view_wls2_armor_head_2_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_2_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_head_2_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
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
      "item_id": "wls2_armor_head_2_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_2_uncommon_description",
        "en": {
          "description": "Leather hat reinforced by rivets",
          "full_description": "Leather hat reinforced by rivets",
          "name": "Sturdy hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_2_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_head_2_uncommon_name",
        "zh": {
          "description": "铆钉加固的皮帽",
          "full_description": "铆钉加固的皮帽",
          "name": "结实的帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_2": 1,
            "wls2_resourse_secondary_cloth_2": 3,
            "wls2_resourse_secondary_leather_2": 4
          },
          "learn_exp": 400,
          "min_level": 0,
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_uncommon_desc"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_head_2_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_40coins_dynamic_town_trader_offer_head_uncommon_2"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_strong_leather_hat_2.5",
      "stat_curves": {
        "armor": {
          "1": 19,
          "2": 21,
          "3": 23,
          "4": 24,
          "5": 26,
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
      "subcategory": "head",
      "tags": [
        "head",
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
      "image_key": "e58c24028da97dccfc0bed835e04a3b4ecd32f3a8f104dff1fbbe7bb4f3b7f60",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "结实的帽子",
        "name_en": "Sturdy hat",
        "description_zh": "铆钉加固的皮帽",
        "description_en": "Leather hat reinforced by rivets",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_head_2_uncommon 结实的帽子 sturdy hat 铆钉加固的皮帽 leather hat reinforced by rivets armor 护甲 head head armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 19,
            "unit": "",
            "display": "19"
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
              "armor": 19,
              "dexterity": 1,
              "max_durability": 360
            },
            "display": {
              "armor": "19",
              "dexterity": "+1",
              "max_durability": "360"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 21,
              "dexterity": 1,
              "max_durability": 400
            },
            "display": {
              "armor": "21",
              "dexterity": "+1",
              "max_durability": "400"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 23,
              "dexterity": 1,
              "max_durability": 430
            },
            "display": {
              "armor": "23",
              "dexterity": "+1",
              "max_durability": "430"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 24,
              "dexterity": 2,
              "max_durability": 460
            },
            "display": {
              "armor": "24",
              "dexterity": "+2",
              "max_durability": "460"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 26,
              "dexterity": 3,
              "max_durability": 490
            },
            "display": {
              "armor": "26",
              "dexterity": "+3",
              "max_durability": "490"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 27,
              "dexterity": 3,
              "max_durability": 490
            },
            "display": {
              "armor": "27",
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
          "防御：6 级起每级增加 1，最高 1026。"
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
        "description": "inventory_stack_view_wls_clothes_fur_cap_2_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_fur_cap_2_description",
        "name": "inventory_stack_view_wls_clothes_fur_cap_2_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_fur_cap_2",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_3",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_fur_cap_2_description",
        "en": {
          "description": "A hat that does not let your ears freeze.",
          "full_description": "A hat that does not let your ears freeze.",
          "name": "Fur hat"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_fur_cap_2_description",
        "name_key": "inventory_stack_view_wls_clothes_fur_cap_2_name",
        "zh": {
          "description": "一顶不会让你的耳朵冻住的帽子。",
          "full_description": "一顶不会让你的耳朵冻住的帽子。",
          "name": "毛皮帽"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_fur_cap_2",
      "stat_curves": {
        "armor": {
          "default": 45
        },
        "max_durability": {
          "default": 50
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
      "image_key": "742378f40561b27b94d6ce8968c17c80a886eed9d411ce6866687d0f2414ae0d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "毛皮帽",
        "name_en": "Fur hat",
        "description_zh": "一顶不会让你的耳朵冻住的帽子。",
        "description_en": "A hat that does not let your ears freeze.",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_head_3 毛皮帽 fur hat 一顶不会让你的耳朵冻住的帽子。 a hat that does not let your ears freeze. armor 护甲 head head armor armor_storage"
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
            "value": 50,
            "unit": "",
            "display": "50"
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
        "description": "inventory_stack_view_wls2_armor_head_3_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_3_common_description",
        "name": "inventory_stack_view_wls2_armor_head_3_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_fur_cap_2",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_3_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_3_common_description",
        "en": {
          "description": "A hat that doesn't let your ears freeze over the long haul",
          "full_description": "A hat that doesn't let your ears freeze over the long haul",
          "name": "Fur hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_3_common_description",
        "name_key": "inventory_stack_view_wls2_armor_head_3_common_name",
        "zh": {
          "description": "一顶不会让你的耳朵因长途出行而冻住的帽子",
          "full_description": "一顶不会让你的耳朵因长途出行而冻住的帽子",
          "name": "毛皮帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_3": 2,
            "wls2_resourse_secondary_leather_3": 3
          },
          "learn_exp": 400,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_head_3_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_75coins_dynamic_smuggler_offer_head_3"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_head_3_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_warmclothing_trader_offer_head_t3_common"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_fur_cap_2",
      "stat_curves": {
        "armor": {
          "1": 30,
          "2": 33,
          "3": 36,
          "4": 39,
          "5": 42,
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
          "1": 520,
          "2": 580,
          "3": 650,
          "4": 680,
          "5": 720
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
      "image_key": "742378f40561b27b94d6ce8968c17c80a886eed9d411ce6866687d0f2414ae0d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "毛皮帽",
        "name_en": "Fur hat",
        "description_zh": "一顶不会让你的耳朵因长途出行而冻住的帽子",
        "description_en": "A hat that doesn't let your ears freeze over the long haul",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_head_3_common 毛皮帽 fur hat 一顶不会让你的耳朵因长途出行而冻住的帽子 a hat that doesn't let your ears freeze over the long haul armor 护甲 head head armor armor_storage"
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
            "value": 520,
            "unit": "",
            "display": "520"
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
              "armor": 30,
              "max_durability": 520
            },
            "display": {
              "armor": "30",
              "max_durability": "520"
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
              "armor": 36,
              "max_durability": 650
            },
            "display": {
              "armor": "36",
              "max_durability": "650"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 39,
              "max_durability": 680
            },
            "display": {
              "armor": "39",
              "max_durability": "680"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 42,
              "max_durability": 720
            },
            "display": {
              "armor": "42",
              "max_durability": "720"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 43,
              "max_durability": 720
            },
            "display": {
              "armor": "43",
              "max_durability": "720"
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
          "防御：6 级起每级增加 1，最高 1042。"
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
        "description": "wls2_armor_head_3_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_head_3_epic_description",
        "name": "wls2_armor_head_3_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_upgrade_3_icon",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_3_epic",
      "localization": {
        "description_key": "wls2_armor_head_3_epic_description",
        "en": {
          "description": "A sturdy hunting hat that protects your head from the scorching heat in the mountains.",
          "full_description": "A sturdy hunting hat that protects your head from the scorching heat in the mountains.",
          "name": "Mountain hunter hat"
        },
        "full_description_key": "wls2_armor_head_3_epic_description",
        "name_key": "wls2_armor_head_3_epic_name",
        "zh": {
          "description": "这顶结实的打猎帽可以让您的头部抵抗山里的酷热。",
          "full_description": "这顶结实的打猎帽可以让您的头部抵抗山里的酷热。",
          "name": "山岭猎人帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 1,
            "wls2_resourse_fourfold_nails_3": 2,
            "wls2_resourse_secondary_cloth_3": 4,
            "wls2_resourse_secondary_leather_3": 5
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
                "inventory_stack_id": "wls2_armor_head_3_epic",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_t3_epic_head"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_easter_24_currency_egg": 500
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_3_epic",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter_22_trader_t3_epic_head"
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
            "stack_id": "wls2_armor_head_3_epic",
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
            "stack_id": "wls2_armor_head_3_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_upgrade_3_icon",
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
          "1": 1630,
          "2": 1790,
          "3": 1960,
          "4": 2120,
          "5": 2280
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
      "subcategory": "head",
      "tags": [
        "head",
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
      "image_key": "83c797af438fdce23a7770aa3f6ee55641bd88f89d5b45c7a9d272affc866fa8",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "山岭猎人帽",
        "name_en": "Mountain hunter hat",
        "description_zh": "这顶结实的打猎帽可以让您的头部抵抗山里的酷热。",
        "description_en": "A sturdy hunting hat that protects your head from the scorching heat in the mountains.",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_head_3_epic 山岭猎人帽 mountain hunter hat 这顶结实的打猎帽可以让您的头部抵抗山里的酷热。 a sturdy hunting hat that protects your head from the scorching heat in the mountains. armor 护甲 head head armor armor_storage"
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
            "value": 1630,
            "unit": "",
            "display": "1630"
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
              "armor": 90,
              "dexterity": 2,
              "firearm_resistance": 0.04,
              "health_modifier": 0.04,
              "max_durability": 1630
            },
            "display": {
              "armor": "90",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "health_modifier": "+4%",
              "max_durability": "1630"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 99,
              "dexterity": 4,
              "firearm_resistance": 0.08,
              "health_modifier": 0.06,
              "max_durability": 1790
            },
            "display": {
              "armor": "99",
              "dexterity": "+4",
              "firearm_resistance": "+8%",
              "health_modifier": "+6%",
              "max_durability": "1790"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 108,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "health_modifier": 0.08,
              "max_durability": 1960
            },
            "display": {
              "armor": "108",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "health_modifier": "+8%",
              "max_durability": "1960"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 117,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "health_modifier": 0.1,
              "max_durability": 2120
            },
            "display": {
              "armor": "117",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "health_modifier": "+10%",
              "max_durability": "2120"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 126,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_modifier": 0.12,
              "max_durability": 2280
            },
            "display": {
              "armor": "126",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_modifier": "+12%",
              "max_durability": "2280"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 127,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_modifier": 0.12,
              "max_durability": 2280
            },
            "display": {
              "armor": "127",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_modifier": "+12%",
              "max_durability": "2280"
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
      "bodypart": 27,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 27,
        "description": "inventory_stack_view_wls2_armor_head_3_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_3_rare_description",
        "name": "inventory_stack_view_wls2_armor_head_3_rare_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_head_3_rare_name_with_wrapping",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_fur_cap_rare",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_3_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_3_rare_description",
        "en": {
          "description": "Makes you look like a bear",
          "full_description": "Makes you look like a bear",
          "name": "Bear fur hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_3_rare_description",
        "name_key": "inventory_stack_view_wls2_armor_head_3_rare_name",
        "zh": {
          "description": "使你看起来像一只熊",
          "full_description": "使你看起来像一只熊",
          "name": "熊皮帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 2,
            "wls2_resourse_secondary_cloth_3": 4,
            "wls2_resourse_secondary_leather_3": 5
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
            "stack_id": "wls2_armor_head_3_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_fur_cap_rare",
      "stat_curves": {
        "armor": {
          "1": 68,
          "2": 74,
          "3": 81,
          "4": 88,
          "5": 95,
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
          "1": 1330,
          "2": 1460,
          "3": 1590,
          "4": 1720,
          "5": 1850
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
      "subcategory": "head",
      "tags": [
        "head",
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
      "image_key": "4a2482827ce5fe66df1db9a539b850f4f0f4b5ff0d786afc90ae548228945861",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "熊皮帽子",
        "name_en": "Bear fur hat",
        "description_zh": "使你看起来像一只熊",
        "description_en": "Makes you look like a bear",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_head_3_rare 熊皮帽子 bear fur hat 使你看起来像一只熊 makes you look like a bear armor 护甲 head head armor armor_storage"
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
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 68,
              "dexterity": 2,
              "health_increment": 25,
              "max_durability": 1330
            },
            "display": {
              "armor": "68",
              "dexterity": "+2",
              "health_increment": "+25",
              "max_durability": "1330"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 74,
              "dexterity": 3,
              "health_increment": 30,
              "max_durability": 1460
            },
            "display": {
              "armor": "74",
              "dexterity": "+3",
              "health_increment": "+30",
              "max_durability": "1460"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 81,
              "dexterity": 4,
              "health_increment": 35,
              "max_durability": 1590
            },
            "display": {
              "armor": "81",
              "dexterity": "+4",
              "health_increment": "+35",
              "max_durability": "1590"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 88,
              "dexterity": 5,
              "health_increment": 40,
              "max_durability": 1720
            },
            "display": {
              "armor": "88",
              "dexterity": "+5",
              "health_increment": "+40",
              "max_durability": "1720"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 95,
              "dexterity": 6,
              "health_increment": 45,
              "max_durability": 1850
            },
            "display": {
              "armor": "95",
              "dexterity": "+6",
              "health_increment": "+45",
              "max_durability": "1850"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 96,
              "dexterity": 6,
              "health_increment": 45,
              "max_durability": 1850
            },
            "display": {
              "armor": "96",
              "dexterity": "+6",
              "health_increment": "+45",
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
        "description": "inventory_stack_view_wls2_armor_head_3_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_3_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_head_3_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_head_3_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
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
      "item_id": "wls2_armor_head_3_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_3_uncommon_description",
        "en": {
          "description": "Not only will it warm you up on a cold day, it will also protect you from the enemy",
          "full_description": "Not only will it warm you up on a cold day, it will also protect you from the enemy",
          "name": "Winter hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_3_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_head_3_uncommon_name",
        "zh": {
          "description": "不仅能让你在寒冷的日子里暖和起来，还能保护你免受敌人的伤害",
          "full_description": "不仅能让你在寒冷的日子里暖和起来，还能保护你免受敌人的伤害",
          "name": "冬季帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 1,
            "wls2_resourse_secondary_cloth_3": 3,
            "wls2_resourse_secondary_leather_3": 4
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
                "inventory_stack_id": "wls2_armor_head_3_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_warmclothing_trader_offer_head_t3_uncommon"
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
            "stack_id": "wls2_armor_head_3_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary03/armor_head_upgrade_3",
      "stat_curves": {
        "armor": {
          "1": 38,
          "2": 41,
          "3": 45,
          "4": 49,
          "5": 53,
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
      "image_key": "6b4ac374393d6d1e12e86bb2f27ed364961a576efba603f5e6d434b32b784877",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "冬季帽",
        "name_en": "Winter hat",
        "description_zh": "不仅能让你在寒冷的日子里暖和起来，还能保护你免受敌人的伤害",
        "description_en": "Not only will it warm you up on a cold day, it will also protect you from the enemy",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_head_3_uncommon 冬季帽 winter hat 不仅能让你在寒冷的日子里暖和起来，还能保护你免受敌人的伤害 not only will it warm you up on a cold day, it will also protect you from the enemy armor 护甲 head head armor armor_storage"
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
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 38,
              "dexterity": 1,
              "max_durability": 910
            },
            "display": {
              "armor": "38",
              "dexterity": "+1",
              "max_durability": "910"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 41,
              "dexterity": 1,
              "max_durability": 1000
            },
            "display": {
              "armor": "41",
              "dexterity": "+1",
              "max_durability": "1000"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 45,
              "dexterity": 1,
              "max_durability": 1090
            },
            "display": {
              "armor": "45",
              "dexterity": "+1",
              "max_durability": "1090"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 49,
              "dexterity": 2,
              "max_durability": 1180
            },
            "display": {
              "armor": "49",
              "dexterity": "+2",
              "max_durability": "1180"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 53,
              "dexterity": 3,
              "max_durability": 1270
            },
            "display": {
              "armor": "53",
              "dexterity": "+3",
              "max_durability": "1270"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 54,
              "dexterity": 3,
              "max_durability": 1270
            },
            "display": {
              "armor": "54",
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
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 5,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 5,
        "description": "inventory_stack_view_wls_clothes_reinforced_cap_3_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_reinforced_cap_3_description",
        "name": "inventory_stack_view_wls_clothes_reinforced_cap_3_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_reinforced_cap_3",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_4",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_reinforced_cap_3_description",
        "en": {
          "description": "Strong armored plates sewn into the hat give extra protection to the head.",
          "full_description": "Strong armored plates sewn into the hat give extra protection to the head.",
          "name": "Armored cap"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_reinforced_cap_3_description",
        "name_key": "inventory_stack_view_wls_clothes_reinforced_cap_3_name",
        "zh": {
          "description": "强韧的装甲板缝在帽子里，为头部提供额外的保护。",
          "full_description": "强韧的装甲板缝在帽子里，为头部提供额外的保护。",
          "name": "装甲帽"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_reinforced_cap_3",
      "stat_curves": {
        "armor": {
          "default": 90
        },
        "max_durability": {
          "default": 62
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
      "image_key": "56ad2c70aabd5b95d1c0461010bb10d13cb61d1bf1db38b8c44325e90f9ba44e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "装甲帽",
        "name_en": "Armored cap",
        "description_zh": "强韧的装甲板缝在帽子里，为头部提供额外的保护。",
        "description_en": "Strong armored plates sewn into the hat give extra protection to the head.",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_head_4 装甲帽 armored cap 强韧的装甲板缝在帽子里，为头部提供额外的保护。 strong armored plates sewn into the hat give extra protection to the head. armor 护甲 head head armor armor_storage"
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
            "value": 62,
            "unit": "",
            "display": "62"
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
        "description": "inventory_stack_view_wls2_armor_head_4_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_4_common_description",
        "name": "inventory_stack_view_wls2_armor_head_4_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
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
      "item_id": "wls2_armor_head_4_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_4_common_description",
        "en": {
          "description": "Classy hat for a true cowboy",
          "full_description": "Classy hat for a true cowboy",
          "name": "Stetson"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_4_common_description",
        "name_key": "inventory_stack_view_wls2_armor_head_4_common_name",
        "zh": {
          "description": "真正的牛仔都喜欢的漂亮帽子。",
          "full_description": "真正的牛仔都喜欢的漂亮帽子。",
          "name": "牛仔帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_4": 2,
            "wls2_resourse_secondary_leather_4": 3
          },
          "learn_exp": 800,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_head_4_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_75coins_dynamic_town_trader_offer_head_common_4"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_head_4_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_1"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_head_4_icon",
      "stat_curves": {
        "armor": {
          "1": 60,
          "2": 66,
          "3": 72,
          "4": 78,
          "5": 84,
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
          "1": 1650,
          "2": 1810,
          "3": 1970,
          "4": 2140,
          "5": 2300
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
      "image_key": "78b552fedb1d583af199c65d0a3ebfbe5aedaccdaf2082c060551e1c81462a78",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "牛仔帽",
        "name_en": "Stetson",
        "description_zh": "真正的牛仔都喜欢的漂亮帽子。",
        "description_en": "Classy hat for a true cowboy",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_head_4_common 牛仔帽 stetson 真正的牛仔都喜欢的漂亮帽子。 classy hat for a true cowboy armor 护甲 head head armor armor_storage"
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
            "value": 1650,
            "unit": "",
            "display": "1650"
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
              "armor": 60,
              "max_durability": 1650
            },
            "display": {
              "armor": "60",
              "max_durability": "1650"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 66,
              "max_durability": 1810
            },
            "display": {
              "armor": "66",
              "max_durability": "1810"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 72,
              "max_durability": 1970
            },
            "display": {
              "armor": "72",
              "max_durability": "1970"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 78,
              "max_durability": 2140
            },
            "display": {
              "armor": "78",
              "max_durability": "2140"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 84,
              "max_durability": 2300
            },
            "display": {
              "armor": "84",
              "max_durability": "2300"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 85,
              "max_durability": 2300
            },
            "display": {
              "armor": "85",
              "max_durability": "2300"
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
          "防御：6 级起每级增加 1，最高 1084。"
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
        "description": "inventory_stack_view_wls2_armor_head_4_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_4_rare_description",
        "name": "inventory_stack_view_wls2_armor_head_4_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls2_armor_head_4_rare_icon",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_4_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_4_rare_description",
        "en": {
          "description": "Made from tanned leather and decorated with a hatband",
          "full_description": "Made from tanned leather and decorated with a hatband",
          "name": "Gunslinger hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_4_rare_description",
        "name_key": "inventory_stack_view_wls2_armor_head_4_rare_name",
        "zh": {
          "description": "由鞣制皮革制作而成，以帽带作为装饰",
          "full_description": "由鞣制皮革制作而成，以帽带作为装饰",
          "name": "枪手帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_4": 2,
            "wls2_resourse_secondary_cloth_4": 4,
            "wls2_resourse_secondary_leather_4": 5
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
                "inventory_stack_id": "wls2_armor_head_4_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_3"
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
            "stack_id": "wls2_armor_head_4_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_head_4_rare_icon",
      "stat_curves": {
        "armor": {
          "1": 135,
          "2": 149,
          "3": 162,
          "4": 176,
          "5": 189,
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
          "1": 4820,
          "2": 5305,
          "3": 5800,
          "4": 6270,
          "5": 6750
        },
        "reduced_detection_radius": {
          "1": 0.05,
          "2": 0.07,
          "3": 0.09,
          "4": 0.11,
          "5": 0.13
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
      "subcategory": "head",
      "tags": [
        "head",
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
      "image_key": "356267d6afc138db471569c69736f27a6cffc4be96afd9686942be321f82c4b8",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "枪手帽子",
        "name_en": "Gunslinger hat",
        "description_zh": "由鞣制皮革制作而成，以帽带作为装饰",
        "description_en": "Made from tanned leather and decorated with a hatband",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_head_4_rare 枪手帽子 gunslinger hat 由鞣制皮革制作而成，以帽带作为装饰 made from tanned leather and decorated with a hatband armor 护甲 head head armor armor_storage"
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
              "armor": 135,
              "dexterity": 2,
              "max_durability": 4820,
              "reduced_detection_radius": 0.05
            },
            "display": {
              "armor": "135",
              "dexterity": "+2",
              "max_durability": "4820",
              "reduced_detection_radius": "+5%"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 149,
              "dexterity": 3,
              "max_durability": 5305,
              "reduced_detection_radius": 0.07
            },
            "display": {
              "armor": "149",
              "dexterity": "+3",
              "max_durability": "5305",
              "reduced_detection_radius": "+7%"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 162,
              "dexterity": 4,
              "max_durability": 5800,
              "reduced_detection_radius": 0.09
            },
            "display": {
              "armor": "162",
              "dexterity": "+4",
              "max_durability": "5800",
              "reduced_detection_radius": "+9%"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 176,
              "dexterity": 5,
              "max_durability": 6270,
              "reduced_detection_radius": 0.11
            },
            "display": {
              "armor": "176",
              "dexterity": "+5",
              "max_durability": "6270",
              "reduced_detection_radius": "+11%"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 189,
              "dexterity": 6,
              "max_durability": 6750,
              "reduced_detection_radius": 0.13
            },
            "display": {
              "armor": "189",
              "dexterity": "+6",
              "max_durability": "6750",
              "reduced_detection_radius": "+13%"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 190,
              "dexterity": 6,
              "max_durability": 6750,
              "reduced_detection_radius": 0.13
            },
            "display": {
              "armor": "190",
              "dexterity": "+6",
              "max_durability": "6750",
              "reduced_detection_radius": "+13%"
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
        "description": "inventory_stack_view_wls2_armor_head_4_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_4_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_head_4_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_head_4_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
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
      "item_id": "wls2_armor_head_4_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_4_uncommon_description",
        "en": {
          "description": "Wide-brimmed hat. Simple and elegant",
          "full_description": "Wide-brimmed hat. Simple and elegant",
          "name": "Ranger hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_4_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_head_4_uncommon_name",
        "zh": {
          "description": "宽边帽，简约且优雅",
          "full_description": "宽边帽，简约且优雅",
          "name": "游侠帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_4": 1,
            "wls2_resourse_secondary_cloth_4": 3,
            "wls2_resourse_secondary_leather_4": 4
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
                "inventory_stack_id": "wls2_armor_head_4_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_200coins_dynamic_town_trader_offer_head_uncommon_4"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_head_4_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_2"
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
            "stack_id": "wls2_armor_head_4_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_head_upgrade_4_icon",
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
        "dexterity": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 2,
          "5": 3
        },
        "max_durability": {
          "1": 2270,
          "2": 2490,
          "3": 2720,
          "4": 2945,
          "5": 3170
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
      "subcategory": "head",
      "tags": [
        "head",
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
      "image_key": "337a57730d601b4dbf938a8bc43abd56814c715812e0e648977b1acd4fc67c08",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "游侠帽子",
        "name_en": "Ranger hat",
        "description_zh": "宽边帽，简约且优雅",
        "description_en": "Wide-brimmed hat. Simple and elegant",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_head_4_uncommon 游侠帽子 ranger hat 宽边帽，简约且优雅 wide-brimmed hat. simple and elegant armor 护甲 head head armor armor_storage"
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
            "value": 2270,
            "unit": "",
            "display": "2270"
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
              "armor": 75,
              "dexterity": 1,
              "max_durability": 2270
            },
            "display": {
              "armor": "75",
              "dexterity": "+1",
              "max_durability": "2270"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 83,
              "dexterity": 1,
              "max_durability": 2490
            },
            "display": {
              "armor": "83",
              "dexterity": "+1",
              "max_durability": "2490"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 90,
              "dexterity": 1,
              "max_durability": 2720
            },
            "display": {
              "armor": "90",
              "dexterity": "+1",
              "max_durability": "2720"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 98,
              "dexterity": 2,
              "max_durability": 2945
            },
            "display": {
              "armor": "98",
              "dexterity": "+2",
              "max_durability": "2945"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 105,
              "dexterity": 3,
              "max_durability": 3170
            },
            "display": {
              "armor": "105",
              "dexterity": "+3",
              "max_durability": "3170"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 106,
              "dexterity": 3,
              "max_durability": 3170
            },
            "display": {
              "armor": "106",
              "dexterity": "+3",
              "max_durability": "3170"
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
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_Armor_head_5_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_Armor_head_5_description",
        "name": "inventory_stack_view_Armor_head_5_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_reinforced_cap_3",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_5",
      "localization": {
        "description_key": "inventory_stack_view_Armor_head_5_description",
        "en": {
          "description": "A real cowboy can be recognized by his clothes. Stylish and comfortable. This hat is designed to conquer the wild west.",
          "full_description": "A real cowboy can be recognized by his clothes. Stylish and comfortable. This hat is designed to conquer the wild west.",
          "name": "Ranger hat"
        },
        "full_description_key": "inventory_stack_view_Armor_head_5_description",
        "name_key": "inventory_stack_view_Armor_head_5_name",
        "zh": {
          "description": "真正的牛仔会穿着既时髦又舒适的标志性服装。这顶帽子就是为了征服狂野西部而生。",
          "full_description": "真正的牛仔会穿着既时髦又舒适的标志性服装。这顶帽子就是为了征服狂野西部而生。",
          "name": "游侠帽"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_reinforced_cap_3",
      "stat_curves": {
        "armor": {
          "default": 180
        },
        "max_durability": {
          "default": 75
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
      "tier": 5,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "56ad2c70aabd5b95d1c0461010bb10d13cb61d1bf1db38b8c44325e90f9ba44e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "游侠帽",
        "name_en": "Ranger hat",
        "description_zh": "真正的牛仔会穿着既时髦又舒适的标志性服装。这顶帽子就是为了征服狂野西部而生。",
        "description_en": "A real cowboy can be recognized by his clothes. Stylish and comfortable. This hat is designed to conquer the wild west.",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_head_5 游侠帽 ranger hat 真正的牛仔会穿着既时髦又舒适的标志性服装。这顶帽子就是为了征服狂野西部而生。 a real cowboy can be recognized by his clothes. stylish and comfortable. this hat is designed to conquer the wild west. armor 护甲 head head armor armor_storage"
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
            "value": 75,
            "unit": "",
            "display": "75"
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
        "description": "inventory_stack_view_wls2_armor_head_5_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_5_common_description",
        "name": "inventory_stack_view_wls2_armor_head_5_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_head_5_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_head_5_icon",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_5_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_5_common_description",
        "en": {
          "description": "Clothing of the Sheriff's Deputy",
          "full_description": "Clothing of the Sheriff's Deputy",
          "name": "Deputy's hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_5_common_description",
        "name_key": "inventory_stack_view_wls2_armor_head_5_common_name",
        "zh": {
          "description": "副警长的服装",
          "full_description": "副警长的服装",
          "name": "副警长帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_5": 2,
            "wls2_resourse_secondary_leather_5": 3
          },
          "learn_exp": 1600,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_head_5_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_150coins_dynamic_town_trader_offer_head_common_5"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_head_5_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_4"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_head_5_icon",
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
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "max_durability": {
          "1": 5350,
          "2": 5870,
          "3": 6400,
          "4": 6930,
          "5": 7460
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
      "subcategory": "head",
      "tags": [
        "head",
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
      "image_key": "bd8087c286dbdab17bebda9fac7a88d5e23e1bab13eba6eba261464982a49b4c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "副警长帽子",
        "name_en": "Deputy's hat",
        "description_zh": "副警长的服装",
        "description_en": "Clothing of the Sheriff's Deputy",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_head_5_common 副警长帽子 deputy's hat 副警长的服装 clothing of the sheriff's deputy armor 护甲 head head armor armor_storage"
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
            "value": 5350,
            "unit": "",
            "display": "5350"
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
              "armor": 120,
              "max_durability": 5350
            },
            "display": {
              "armor": "120",
              "max_durability": "5350"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 132,
              "max_durability": 5870
            },
            "display": {
              "armor": "132",
              "max_durability": "5870"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 144,
              "max_durability": 6400
            },
            "display": {
              "armor": "144",
              "max_durability": "6400"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 156,
              "max_durability": 6930
            },
            "display": {
              "armor": "156",
              "max_durability": "6930"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 168,
              "max_durability": 7460
            },
            "display": {
              "armor": "168",
              "max_durability": "7460"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 169,
              "max_durability": 7460
            },
            "display": {
              "armor": "169",
              "max_durability": "7460"
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
      "bodypart": 35,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 35,
        "description": "wls2_armor_head_5_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_head_5_epic_description",
        "name": "wls2_armor_head_5_epic_name",
        "name_with_wrapping": "wls2_armor_head_5_epic_name_with_wrapping",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_5_epic_icon",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_5_epic",
      "localization": {
        "description_key": "wls2_armor_head_5_epic_description",
        "en": {
          "description": "You're allowed to keep this hat on even indoors. It's best not to take it off at all, as it protects your head",
          "full_description": "You're allowed to keep this hat on even indoors. It's best not to take it off at all, as it protects your head",
          "name": "Reinforced hat"
        },
        "full_description_key": "wls2_armor_head_5_epic_description",
        "name_key": "wls2_armor_head_5_epic_name",
        "zh": {
          "description": "哪怕是在室内，你也可以戴着这顶帽子。它可以有效地保护你的头，所以最好还是别摘下来",
          "full_description": "哪怕是在室内，你也可以戴着这顶帽子。它可以有效地保护你的头，所以最好还是别摘下来",
          "name": "强化的帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 3,
            "wls2_resourse_fourfold_nails_4": 4,
            "wls2_resourse_secondary_cloth_5": 4,
            "wls2_resourse_secondary_leather_5": 6
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
            "stack_id": "wls2_armor_head_5_epic",
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
            "stack_id": "wls2_armor_head_5_epic",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_5_epic_icon",
      "stat_curves": {
        "armor": {
          "1": 360,
          "2": 396,
          "3": 432,
          "4": 468,
          "5": 504,
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
          "1": 19700,
          "2": 21700,
          "3": 23700,
          "4": 25650,
          "5": 27650
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
      "subcategory": "head",
      "tags": [
        "head",
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
      "image_key": "85c526241a48b46378411101c8422cd4d192383e47782f5eea5ee7b5e4a4823b",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "强化的帽子",
        "name_en": "Reinforced hat",
        "description_zh": "哪怕是在室内，你也可以戴着这顶帽子。它可以有效地保护你的头，所以最好还是别摘下来",
        "description_en": "You're allowed to keep this hat on even indoors. It's best not to take it off at all, as it protects your head",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_head_5_epic 强化的帽子 reinforced hat 哪怕是在室内，你也可以戴着这顶帽子。它可以有效地保护你的头，所以最好还是别摘下来 you're allowed to keep this hat on even indoors. it's best not to take it off at all, as it protects your head armor 护甲 head head armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 360,
            "unit": "",
            "display": "360"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 19700,
            "unit": "",
            "display": "19700"
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
              "armor": 360,
              "dexterity": 2,
              "firearm_resistance": 0.04,
              "health_increment": 70,
              "max_durability": 19700
            },
            "display": {
              "armor": "360",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "health_increment": "+70",
              "max_durability": "19700"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 396,
              "dexterity": 4,
              "firearm_resistance": 0.08,
              "health_increment": 90,
              "max_durability": 21700
            },
            "display": {
              "armor": "396",
              "dexterity": "+4",
              "firearm_resistance": "+8%",
              "health_increment": "+90",
              "max_durability": "21700"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 432,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "health_increment": 110,
              "max_durability": 23700
            },
            "display": {
              "armor": "432",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "health_increment": "+110",
              "max_durability": "23700"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 468,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "health_increment": 130,
              "max_durability": 25650
            },
            "display": {
              "armor": "468",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "health_increment": "+130",
              "max_durability": "25650"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 504,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_increment": 150,
              "max_durability": 27650
            },
            "display": {
              "armor": "504",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_increment": "+150",
              "max_durability": "27650"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 505,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "health_increment": 150,
              "max_durability": 27650
            },
            "display": {
              "armor": "505",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "health_increment": "+150",
              "max_durability": "27650"
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
          "防御：6 级起每级增加 1，最高 1504。"
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
        "description": "inventory_stack_view_wls2_armor_head_5_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_5_rare_description",
        "name": "inventory_stack_view_wls2_armor_head_5_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_head_5_rare_icon",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_5_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_5_rare_description",
        "en": {
          "description": "This hat was designed to conquer the Wild West",
          "full_description": "This hat was designed to conquer the Wild West",
          "name": "Sheriff's hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_5_rare_description",
        "name_key": "inventory_stack_view_wls2_armor_head_5_rare_name",
        "zh": {
          "description": "这顶帽子就是为了征服狂野西部而生",
          "full_description": "这顶帽子就是为了征服狂野西部而生",
          "name": "警长帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_4": 4,
            "wls2_resourse_secondary_cloth_5": 4,
            "wls2_resourse_secondary_leather_5": 5
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
            "stack_id": "wls2_armor_head_5_rare",
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
            "stack_id": "wls2_armor_head_5_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_head_5_rare_icon",
      "stat_curves": {
        "armor": {
          "1": 228,
          "2": 251,
          "3": 274,
          "4": 296,
          "5": 319,
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
          "1": 14000,
          "2": 15400,
          "3": 16800,
          "4": 18200,
          "5": 19560
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
      "subcategory": "head",
      "tags": [
        "head",
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
      "image_key": "40bae83a87338f8cd9ad77e0eaa8f37e71cab77401ef585d7dbeb4b48a6dab7d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "警长帽子",
        "name_en": "Sheriff's hat",
        "description_zh": "这顶帽子就是为了征服狂野西部而生",
        "description_en": "This hat was designed to conquer the Wild West",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_head_5_rare 警长帽子 sheriff's hat 这顶帽子就是为了征服狂野西部而生 this hat was designed to conquer the wild west armor 护甲 head head armor armor_storage"
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
              "armor": 228,
              "dexterity": 2,
              "firearm_resistance": 0.04,
              "max_durability": 14000
            },
            "display": {
              "armor": "228",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "max_durability": "14000"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 251,
              "dexterity": 3,
              "firearm_resistance": 0.08,
              "max_durability": 15400
            },
            "display": {
              "armor": "251",
              "dexterity": "+3",
              "firearm_resistance": "+8%",
              "max_durability": "15400"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 274,
              "dexterity": 4,
              "firearm_resistance": 0.12,
              "max_durability": 16800
            },
            "display": {
              "armor": "274",
              "dexterity": "+4",
              "firearm_resistance": "+12%",
              "max_durability": "16800"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 296,
              "dexterity": 5,
              "firearm_resistance": 0.16,
              "max_durability": 18200
            },
            "display": {
              "armor": "296",
              "dexterity": "+5",
              "firearm_resistance": "+16%",
              "max_durability": "18200"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 319,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 19560
            },
            "display": {
              "armor": "319",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
              "max_durability": "19560"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 320,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 19560
            },
            "display": {
              "armor": "320",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
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
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 49,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 49,
        "description": "inventory_stack_view_wls2_armor_head_5_rare_crocodile_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_5_rare_crocodile_description",
        "name": "inventory_stack_view_wls2_armor_head_5_crocodile_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_armor_head_5_rare_crocodile_icon",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_5_rare_crocodile",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_5_rare_crocodile_description",
        "en": {
          "description": "Headgear of a marshes expert. A full Hunter set will protect against mosquitoes",
          "full_description": "Headgear of a marshes expert. A full Hunter set will protect against mosquitoes",
          "name": "Alligator hunter hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_5_rare_crocodile_description",
        "name_key": "inventory_stack_view_wls2_armor_head_5_crocodile_rare_name",
        "zh": {
          "description": "沼泽专家的头饰。一整套猎人装将保护免受蚊子侵扰。",
          "full_description": "沼泽专家的头饰。一整套猎人装将保护免受蚊子侵扰。",
          "name": "短吻鳄猎人帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_5": 2,
            "wls2_resourse_primary_hide_alligator": 1,
            "wls2_resourse_secondary_cloth_5": 4,
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
            "stack_id": "wls2_armor_head_5_rare_crocodile",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_armor_head_5_rare_crocodile_icon",
      "stat_curves": {
        "armor": {
          "1": 228,
          "2": 251,
          "3": 274,
          "4": 296,
          "5": 319,
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
          "1": 14000,
          "2": 15400,
          "3": 16800,
          "4": 18200,
          "5": 19560
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
      "subcategory": "head",
      "tags": [
        "head",
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
      "image_key": "93647835e6633c1464a3c3e51f4bdbc9bcbb320985bb1d1bb69687b6554119d5",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "短吻鳄猎人帽",
        "name_en": "Alligator hunter hat",
        "description_zh": "沼泽专家的头饰。一整套猎人装将保护免受蚊子侵扰。",
        "description_en": "Headgear of a marshes expert. A full Hunter set will protect against mosquitoes",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_head_5_rare_crocodile 短吻鳄猎人帽 alligator hunter hat 沼泽专家的头饰。一整套猎人装将保护免受蚊子侵扰。 headgear of a marshes expert. a full hunter set will protect against mosquitoes armor 护甲 head head armor armor_storage"
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
              "armor": 228,
              "dexterity": 2,
              "max_durability": 14000,
              "swamp_animal_resistance": 0.04
            },
            "display": {
              "armor": "228",
              "dexterity": "+2",
              "max_durability": "14000",
              "swamp_animal_resistance": "+4%"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 251,
              "dexterity": 3,
              "max_durability": 15400,
              "swamp_animal_resistance": 0.08
            },
            "display": {
              "armor": "251",
              "dexterity": "+3",
              "max_durability": "15400",
              "swamp_animal_resistance": "+8%"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 274,
              "dexterity": 4,
              "max_durability": 16800,
              "swamp_animal_resistance": 0.12
            },
            "display": {
              "armor": "274",
              "dexterity": "+4",
              "max_durability": "16800",
              "swamp_animal_resistance": "+12%"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 296,
              "dexterity": 5,
              "max_durability": 18200,
              "swamp_animal_resistance": 0.16
            },
            "display": {
              "armor": "296",
              "dexterity": "+5",
              "max_durability": "18200",
              "swamp_animal_resistance": "+16%"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 319,
              "dexterity": 6,
              "max_durability": 19560,
              "swamp_animal_resistance": 0.2
            },
            "display": {
              "armor": "319",
              "dexterity": "+6",
              "max_durability": "19560",
              "swamp_animal_resistance": "+20%"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 320,
              "dexterity": 6,
              "max_durability": 19560,
              "swamp_animal_resistance": 0.2
            },
            "display": {
              "armor": "320",
              "dexterity": "+6",
              "max_durability": "19560",
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
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 26,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 26,
        "description": "inventory_stack_view_wls2_armor_head_5_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_5_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_head_5_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_head_5_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_head_upgrade_5_icon",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_5_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_5_uncommon_description",
        "en": {
          "description": "This hat was made for gunfire",
          "full_description": "This hat was made for gunfire",
          "name": "Gunfighter's hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_5_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_head_5_uncommon_name",
        "zh": {
          "description": "这顶帽子专为枪战而生",
          "full_description": "这顶帽子专为枪战而生",
          "name": "枪手帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_5": 3,
            "wls2_resourse_secondary_leather_5": 4
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
                "inventory_stack_id": "wls2_armor_head_5_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_350coins_dynamic_town_trader_offer_head_uncommon_5"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_head_5_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_5"
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
            "stack_id": "wls2_armor_head_5_uncommon",
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
            "stack_id": "wls2_armor_head_5_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_head_upgrade_5_icon",
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
        "dexterity": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5
        },
        "max_durability": {
          "1": 7850,
          "2": 8600,
          "3": 9400,
          "4": 10200,
          "5": 11000
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
      "subcategory": "head",
      "tags": [
        "head",
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
      "image_key": "3b4428d0ae27388054be6400f7f04a3f6ec87fb21bc8f5ee9cbfea5f096b9638",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "枪手帽子",
        "name_en": "Gunfighter's hat",
        "description_zh": "这顶帽子专为枪战而生",
        "description_en": "This hat was made for gunfire",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_head_5_uncommon 枪手帽子 gunfighter's hat 这顶帽子专为枪战而生 this hat was made for gunfire armor 护甲 head head armor armor_storage"
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
            "value": 7850,
            "unit": "",
            "display": "7850"
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
              "armor": 162,
              "dexterity": 1,
              "max_durability": 7850
            },
            "display": {
              "armor": "162",
              "dexterity": "+1",
              "max_durability": "7850"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 178,
              "dexterity": 2,
              "max_durability": 8600
            },
            "display": {
              "armor": "178",
              "dexterity": "+2",
              "max_durability": "8600"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 194,
              "dexterity": 3,
              "max_durability": 9400
            },
            "display": {
              "armor": "194",
              "dexterity": "+3",
              "max_durability": "9400"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 211,
              "dexterity": 4,
              "max_durability": 10200
            },
            "display": {
              "armor": "211",
              "dexterity": "+4",
              "max_durability": "10200"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 227,
              "dexterity": 5,
              "max_durability": 11000
            },
            "display": {
              "armor": "227",
              "dexterity": "+5",
              "max_durability": "11000"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 228,
              "dexterity": 5,
              "max_durability": 11000
            },
            "display": {
              "armor": "228",
              "dexterity": "+5",
              "max_durability": "11000"
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
        "description": "inventory_stack_view_wls2_armor_head_6_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_6_common_description",
        "name": "inventory_stack_view_wls2_armor_head_6_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_armor_head_6_common",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_6_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_6_common_description",
        "en": {
          "description": "Keeps warm on any trail",
          "full_description": "Keeps warm on any trail",
          "name": "Wanderer hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_6_common_description",
        "name_key": "inventory_stack_view_wls2_armor_head_6_common_name",
        "zh": {
          "description": "任何小径都保持温暖",
          "full_description": "任何小径都保持温暖",
          "name": "漫游者帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_6": 2,
            "wls2_resourse_secondary_leather_6": 3
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
      "sprite": "UI_WW_AlphaBinary08/wls2_armor_head_6_common",
      "stat_curves": {
        "armor": {
          "1": 240,
          "2": 264,
          "3": 288,
          "4": 312,
          "5": 336,
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
          "1": 9700,
          "2": 10700,
          "3": 11650,
          "4": 12600,
          "5": 13600
        },
        "snow_resistance": {
          "1": 0.02,
          "2": 0.02,
          "3": 0.02,
          "4": 0.02,
          "5": 0.02
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
      "subcategory": "head",
      "tags": [
        "head",
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
      "image_key": "e5458779be1c7eda74edb8d9301fc0bb16eaed8c52cda92120c2e953c16acf42",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "漫游者帽子",
        "name_en": "Wanderer hat",
        "description_zh": "任何小径都保持温暖",
        "description_en": "Keeps warm on any trail",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_head_6_common 漫游者帽子 wanderer hat 任何小径都保持温暖 keeps warm on any trail armor 护甲 head head armor armor_storage"
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
            "value": 9700,
            "unit": "",
            "display": "9700"
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
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 240,
              "max_durability": 9700
            },
            "display": {
              "armor": "240",
              "max_durability": "9700"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 264,
              "max_durability": 10700
            },
            "display": {
              "armor": "264",
              "max_durability": "10700"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 288,
              "max_durability": 11650
            },
            "display": {
              "armor": "288",
              "max_durability": "11650"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 312,
              "max_durability": 12600
            },
            "display": {
              "armor": "312",
              "max_durability": "12600"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 336,
              "max_durability": 13600
            },
            "display": {
              "armor": "336",
              "max_durability": "13600"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 337,
              "max_durability": 13600
            },
            "display": {
              "armor": "337",
              "max_durability": "13600"
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
          "防御：6 级起每级增加 1，最高 1336。"
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
      "bodypart": 48,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 48,
        "description": "inventory_stack_view_wls2_armor_head_6_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_6_epic_description",
        "name": "inventory_stack_view_wls2_armor_head_6_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_6_epic",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_6_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_6_epic_description",
        "en": {
          "description": "This decorated hat provides comfort in the harsh Boreal climate",
          "full_description": "This decorated hat provides comfort in the harsh Boreal climate",
          "name": "Boreal legend hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_6_epic_description",
        "name_key": "inventory_stack_view_wls2_armor_head_6_epic_name",
        "zh": {
          "description": "这顶装饰帽在严酷的极地气候中提供舒适",
          "full_description": "这顶装饰帽在严酷的极地气候中提供舒适",
          "name": "极地传奇帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 5,
            "wls2_resourse_fourfold_nails_6": 4,
            "wls2_resourse_secondary_cloth_6": 4,
            "wls2_resourse_secondary_leather_6": 6
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
            "stack_id": "wls2_armor_head_6_epic",
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
            "stack_id": "wls2_armor_head_6_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_head_6_epic",
      "stat_curves": {
        "armor": {
          "1": 650,
          "2": 715,
          "3": 780,
          "4": 845,
          "5": 910,
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
          "1": 35600,
          "2": 39150,
          "3": 42700,
          "4": 46250,
          "5": 49800
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
      "subcategory": "head",
      "tags": [
        "head",
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
      "image_key": "b6e79a039c6fe517c937ae20f20e12f90d5f49e387d506ea9e9c06125d03b2b8",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "极地传奇帽",
        "name_en": "Boreal legend hat",
        "description_zh": "这顶装饰帽在严酷的极地气候中提供舒适",
        "description_en": "This decorated hat provides comfort in the harsh Boreal climate",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_head_6_epic 极地传奇帽 boreal legend hat 这顶装饰帽在严酷的极地气候中提供舒适 this decorated hat provides comfort in the harsh boreal climate armor 护甲 head head armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 650,
            "unit": "",
            "display": "650"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 35600,
            "unit": "",
            "display": "35600"
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
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 650,
              "dexterity": 5,
              "firearm_resistance": 0.04,
              "health_increment": 100,
              "max_durability": 35600
            },
            "display": {
              "armor": "650",
              "dexterity": "+5",
              "firearm_resistance": "+4%",
              "health_increment": "+100",
              "max_durability": "35600"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 715,
              "dexterity": 7,
              "firearm_resistance": 0.08,
              "health_increment": 120,
              "max_durability": 39150
            },
            "display": {
              "armor": "715",
              "dexterity": "+7",
              "firearm_resistance": "+8%",
              "health_increment": "+120",
              "max_durability": "39150"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 780,
              "dexterity": 9,
              "firearm_resistance": 0.12,
              "health_increment": 140,
              "max_durability": 42700
            },
            "display": {
              "armor": "780",
              "dexterity": "+9",
              "firearm_resistance": "+12%",
              "health_increment": "+140",
              "max_durability": "42700"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 845,
              "dexterity": 10,
              "firearm_resistance": 0.16,
              "health_increment": 160,
              "max_durability": 46250
            },
            "display": {
              "armor": "845",
              "dexterity": "+10",
              "firearm_resistance": "+16%",
              "health_increment": "+160",
              "max_durability": "46250"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 910,
              "dexterity": 12,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 49800
            },
            "display": {
              "armor": "910",
              "dexterity": "+12",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "49800"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 911,
              "dexterity": 12,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 49800
            },
            "display": {
              "armor": "911",
              "dexterity": "+12",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "49800"
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
          "防御：6 级起每级增加 1，最高 1910。"
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
      "bodypart": 47,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 47,
        "description": "inventory_stack_view_wls2_armor_head_6_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_6_rare_description",
        "name": "inventory_stack_view_wls2_armor_head_6_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_armor_head_6_rare",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_6_rare_description",
        "en": {
          "description": "Warm cowboy hat with Arctic vibe",
          "full_description": "Warm cowboy hat with Arctic vibe",
          "name": "Klondike conqueror hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_6_rare_description",
        "name_key": "inventory_stack_view_wls2_armor_head_6_rare_name",
        "zh": {
          "description": "带有北极风情的温暖牛仔帽",
          "full_description": "带有北极风情的温暖牛仔帽",
          "name": "肯洛迪克征服者帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_6": 3,
            "wls2_resourse_secondary_cloth_6": 4,
            "wls2_resourse_secondary_leather_6": 5
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
            "stack_id": "wls2_armor_head_6_rare",
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
            "stack_id": "wls2_armor_head_6_rare",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_armor_head_6_rare",
      "stat_curves": {
        "armor": {
          "1": 540,
          "2": 594,
          "3": 648,
          "4": 702,
          "5": 756,
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
          "1": 25250,
          "2": 27750,
          "3": 30300,
          "4": 32800,
          "5": 35350
        },
        "snow_resistance": {
          "1": 0.02,
          "2": 0.02,
          "3": 0.02,
          "4": 0.02,
          "5": 0.02
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
      "subcategory": "head",
      "tags": [
        "head",
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
      "image_key": "38d36511a90bb13ac9aac9e9fb4e169a235eef67bb397888cc471dfa124b35ef",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "肯洛迪克征服者帽子",
        "name_en": "Klondike conqueror hat",
        "description_zh": "带有北极风情的温暖牛仔帽",
        "description_en": "Warm cowboy hat with Arctic vibe",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_head_6_rare 肯洛迪克征服者帽子 klondike conqueror hat 带有北极风情的温暖牛仔帽 warm cowboy hat with arctic vibe armor 护甲 head head armor armor_storage"
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
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 540,
              "dexterity": 4,
              "firearm_resistance": 0.04,
              "max_durability": 25250
            },
            "display": {
              "armor": "540",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "max_durability": "25250"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 594,
              "dexterity": 5,
              "firearm_resistance": 0.08,
              "max_durability": 27750
            },
            "display": {
              "armor": "594",
              "dexterity": "+5",
              "firearm_resistance": "+8%",
              "max_durability": "27750"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 648,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "max_durability": 30300
            },
            "display": {
              "armor": "648",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "max_durability": "30300"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 702,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "max_durability": 32800
            },
            "display": {
              "armor": "702",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "max_durability": "32800"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 756,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 35350
            },
            "display": {
              "armor": "756",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "max_durability": "35350"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 757,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 35350
            },
            "display": {
              "armor": "757",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
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
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 46,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 46,
        "description": "inventory_stack_view_wls2_armor_head_6_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_6_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_head_6_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_armor_head_6_uncommon",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_6_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_6_uncommon_description",
        "en": {
          "description": "Fur with tail for rugged flair",
          "full_description": "Fur with tail for rugged flair",
          "name": "Frontier hat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_6_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_head_6_uncommon_name",
        "zh": {
          "description": "毛皮带尾巴，展现粗犷风采",
          "full_description": "毛皮带尾巴，展现粗犷风采",
          "name": "前哨人帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_6": 3,
            "wls2_resourse_secondary_leather_6": 4
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
            "stack_id": "wls2_armor_head_6_uncommon",
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
            "stack_id": "wls2_armor_head_6_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_armor_head_6_uncommon",
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
        "dexterity": {
          "1": 4,
          "2": 5,
          "3": 6,
          "4": 8,
          "5": 10
        },
        "max_durability": {
          "1": 14200,
          "2": 15600,
          "3": 17000,
          "4": 18400,
          "5": 19850
        },
        "snow_resistance": {
          "1": 0.02,
          "2": 0.02,
          "3": 0.02,
          "4": 0.02,
          "5": 0.02
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
      "subcategory": "head",
      "tags": [
        "head",
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
      "image_key": "b09a2b31bd0482c14e22fee57fa42b9984fd7b62e191eb41eb29e6c2f13ed560",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "前哨人帽子",
        "name_en": "Frontier hat",
        "description_zh": "毛皮带尾巴，展现粗犷风采",
        "description_en": "Fur with tail for rugged flair",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_head_6_uncommon 前哨人帽子 frontier hat 毛皮带尾巴，展现粗犷风采 fur with tail for rugged flair armor 护甲 head head armor armor_storage"
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
            "value": 14200,
            "unit": "",
            "display": "14200"
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
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 300,
              "dexterity": 4,
              "max_durability": 14200
            },
            "display": {
              "armor": "300",
              "dexterity": "+4",
              "max_durability": "14200"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 330,
              "dexterity": 5,
              "max_durability": 15600
            },
            "display": {
              "armor": "330",
              "dexterity": "+5",
              "max_durability": "15600"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 360,
              "dexterity": 6,
              "max_durability": 17000
            },
            "display": {
              "armor": "360",
              "dexterity": "+6",
              "max_durability": "17000"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 390,
              "dexterity": 8,
              "max_durability": 18400
            },
            "display": {
              "armor": "390",
              "dexterity": "+8",
              "max_durability": "18400"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 420,
              "dexterity": 10,
              "max_durability": 19850
            },
            "display": {
              "armor": "420",
              "dexterity": "+10",
              "max_durability": "19850"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 421,
              "dexterity": 10,
              "max_durability": 19850
            },
            "display": {
              "armor": "421",
              "dexterity": "+10",
              "max_durability": "19850"
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
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 51,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 51,
        "equip_behaviour": {
          "type": "durability"
        },
        "name": "wls2_armor_head_7_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_7_common",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_7_common",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Bronco hat"
        },
        "full_description_key": null,
        "name_key": "wls2_armor_head_7_common_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "野马 帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_7": 2,
            "wls2_resourse_secondary_leather_7": 3
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
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_7_common",
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
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1
        },
        "max_durability": {
          "1": 17950,
          "2": 19750,
          "3": 21550,
          "4": 23350,
          "5": 25150
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
      "image_key": "6b1a1f90b4c9495930d7cd9fb4a4d21be8a3320389181469644d5948a6ea607a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "野马 帽子",
        "name_en": "Bronco hat",
        "description_zh": "",
        "description_en": "",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_head_7_common 野马 帽子 bronco hat armor 护甲 head head armor armor_storage"
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
            "value": 17950,
            "unit": "",
            "display": "17950"
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
              "armor": 480,
              "max_durability": 17950
            },
            "display": {
              "armor": "480",
              "max_durability": "17950"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 528,
              "max_durability": 19750
            },
            "display": {
              "armor": "528",
              "max_durability": "19750"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 576,
              "max_durability": 21550
            },
            "display": {
              "armor": "576",
              "max_durability": "21550"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 624,
              "max_durability": 23350
            },
            "display": {
              "armor": "624",
              "max_durability": "23350"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 672,
              "max_durability": 25150
            },
            "display": {
              "armor": "672",
              "max_durability": "25150"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 673,
              "max_durability": 25150
            },
            "display": {
              "armor": "673",
              "max_durability": "25150"
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
      "bodypart": 54,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 54,
        "equip_behaviour": {
          "type": "durability"
        },
        "name": "wls2_armor_head_7_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_7_epic",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_7_epic",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Rio Bravo legend hat"
        },
        "full_description_key": null,
        "name_key": "wls2_armor_head_7_epic_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "里约布拉沃传奇帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 7,
            "wls2_resourse_fourfold_nails_7": 4,
            "wls2_resourse_secondary_cloth_7": 4,
            "wls2_resourse_secondary_leather_7": 6
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
            "stack_id": "wls2_armor_head_7_epic",
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
            "stack_id": "wls2_armor_head_7_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_7_epic",
      "stat_curves": {
        "armor": {
          "1": 1300,
          "2": 1430,
          "3": 1560,
          "4": 1690,
          "5": 1820,
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
          "1": 64050,
          "2": 70450,
          "3": 76850,
          "4": 83250,
          "5": 89650
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
      "subcategory": "head",
      "tags": [
        "head",
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
      "image_key": "9b72c0936cad4bc19c69dea33407a883e6a30feff6ecef404a06c442a95f3aed",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "里约布拉沃传奇帽",
        "name_en": "Rio Bravo legend hat",
        "description_zh": "",
        "description_en": "",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_head_7_epic 里约布拉沃传奇帽 rio bravo legend hat armor 护甲 head head armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 1300,
            "unit": "",
            "display": "1300"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 64050,
            "unit": "",
            "display": "64050"
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
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 1300,
              "dexterity": 8,
              "fire_resistance": 0.04,
              "firearm_resistance": 0.04,
              "health_increment": 100,
              "max_durability": 64050
            },
            "display": {
              "armor": "1300",
              "dexterity": "+8",
              "fire_resistance": "+4%",
              "firearm_resistance": "+4%",
              "health_increment": "+100",
              "max_durability": "64050"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 1430,
              "dexterity": 9,
              "fire_resistance": 0.08,
              "firearm_resistance": 0.08,
              "health_increment": 120,
              "max_durability": 70450
            },
            "display": {
              "armor": "1430",
              "dexterity": "+9",
              "fire_resistance": "+8%",
              "firearm_resistance": "+8%",
              "health_increment": "+120",
              "max_durability": "70450"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1560,
              "dexterity": 10,
              "fire_resistance": 0.12,
              "firearm_resistance": 0.12,
              "health_increment": 140,
              "max_durability": 76850
            },
            "display": {
              "armor": "1560",
              "dexterity": "+10",
              "fire_resistance": "+12%",
              "firearm_resistance": "+12%",
              "health_increment": "+140",
              "max_durability": "76850"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1690,
              "dexterity": 12,
              "fire_resistance": 0.16,
              "firearm_resistance": 0.16,
              "health_increment": 160,
              "max_durability": 83250
            },
            "display": {
              "armor": "1690",
              "dexterity": "+12",
              "fire_resistance": "+16%",
              "firearm_resistance": "+16%",
              "health_increment": "+160",
              "max_durability": "83250"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1820,
              "dexterity": 14,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 89650
            },
            "display": {
              "armor": "1820",
              "dexterity": "+14",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "89650"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1821,
              "dexterity": 14,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "health_increment": 200,
              "max_durability": 89650
            },
            "display": {
              "armor": "1821",
              "dexterity": "+14",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "health_increment": "+200",
              "max_durability": "89650"
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
          "防御：6 级起每级增加 1，最高 2820。"
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
      "bodypart": 53,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 53,
        "equip_behaviour": {
          "type": "durability"
        },
        "name": "wls2_armor_head_7_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_7_rare",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_7_rare",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "City Marshal's hat"
        },
        "full_description_key": null,
        "name_key": "wls2_armor_head_7_rare_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "城市治安官的帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_7": 3,
            "wls2_resourse_secondary_cloth_7": 4,
            "wls2_resourse_secondary_leather_7": 5
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
            "stack_id": "wls2_armor_head_7_rare",
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
            "stack_id": "wls2_armor_head_7_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_7_rare",
      "stat_curves": {
        "armor": {
          "1": 1080,
          "2": 1188,
          "3": 1296,
          "4": 1404,
          "5": 1512,
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
          "1": 45950,
          "2": 50500,
          "3": 55150,
          "4": 59700,
          "5": 64300
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
      "subcategory": "head",
      "tags": [
        "head",
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
      "image_key": "ea72d7856542b1afe9993e7cad03a0eb4264e66f3e95d71ce9a9bb5bcbd8fae3",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "城市治安官的帽子",
        "name_en": "City Marshal's hat",
        "description_zh": "",
        "description_en": "",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_head_7_rare 城市治安官的帽子 city marshal's hat armor 护甲 head head armor armor_storage"
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
            "value": 6,
            "unit": "",
            "display": "+6"
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
              "armor": 1080,
              "dexterity": 6,
              "fire_resistance": 0.04,
              "firearm_resistance": 0.04,
              "max_durability": 45950
            },
            "display": {
              "armor": "1080",
              "dexterity": "+6",
              "fire_resistance": "+4%",
              "firearm_resistance": "+4%",
              "max_durability": "45950"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 1188,
              "dexterity": 7,
              "fire_resistance": 0.08,
              "firearm_resistance": 0.08,
              "max_durability": 50500
            },
            "display": {
              "armor": "1188",
              "dexterity": "+7",
              "fire_resistance": "+8%",
              "firearm_resistance": "+8%",
              "max_durability": "50500"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1296,
              "dexterity": 8,
              "fire_resistance": 0.12,
              "firearm_resistance": 0.12,
              "max_durability": 55150
            },
            "display": {
              "armor": "1296",
              "dexterity": "+8",
              "fire_resistance": "+12%",
              "firearm_resistance": "+12%",
              "max_durability": "55150"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1404,
              "dexterity": 10,
              "fire_resistance": 0.16,
              "firearm_resistance": 0.16,
              "max_durability": 59700
            },
            "display": {
              "armor": "1404",
              "dexterity": "+10",
              "fire_resistance": "+16%",
              "firearm_resistance": "+16%",
              "max_durability": "59700"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1512,
              "dexterity": 12,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "max_durability": 64300
            },
            "display": {
              "armor": "1512",
              "dexterity": "+12",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "max_durability": "64300"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1513,
              "dexterity": 12,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "max_durability": 64300
            },
            "display": {
              "armor": "1513",
              "dexterity": "+12",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
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
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 52,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 52,
        "equip_behaviour": {
          "type": "durability"
        },
        "name": "wls2_armor_head_7_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_7_uncommon",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_head_7_uncommon",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Sandscar hat"
        },
        "full_description_key": null,
        "name_key": "wls2_armor_head_7_uncommon_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "沙痕帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_7": 3,
            "wls2_resourse_secondary_leather_7": 4
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
            "stack_id": "wls2_armor_head_7_uncommon",
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
            "stack_id": "wls2_armor_head_7_uncommon",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_head_7_uncommon",
      "stat_curves": {
        "armor": {
          "1": 600,
          "2": 660,
          "3": 720,
          "4": 780,
          "5": 840,
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
          "1": 25500,
          "2": 28050,
          "3": 30600,
          "4": 33150,
          "5": 35700
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
      "subcategory": "head",
      "tags": [
        "head",
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
      "image_key": "20ef9ac8d3d23ceee17d3dee9d4769f0a790e50acde53efae091ef18f3120a3d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "沙痕帽",
        "name_en": "Sandscar hat",
        "description_zh": "",
        "description_en": "",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_head_7_uncommon 沙痕帽 sandscar hat armor 护甲 head head armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 600,
            "unit": "",
            "display": "600"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 25500,
            "unit": "",
            "display": "25500"
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
              "armor": 600,
              "dexterity": 6,
              "fire_resistance": 0.02,
              "max_durability": 25500
            },
            "display": {
              "armor": "600",
              "dexterity": "+6",
              "fire_resistance": "+2%",
              "max_durability": "25500"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 660,
              "dexterity": 7,
              "fire_resistance": 0.04,
              "max_durability": 28050
            },
            "display": {
              "armor": "660",
              "dexterity": "+7",
              "fire_resistance": "+4%",
              "max_durability": "28050"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 720,
              "dexterity": 8,
              "fire_resistance": 0.06,
              "max_durability": 30600
            },
            "display": {
              "armor": "720",
              "dexterity": "+8",
              "fire_resistance": "+6%",
              "max_durability": "30600"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 780,
              "dexterity": 10,
              "fire_resistance": 0.08,
              "max_durability": 33150
            },
            "display": {
              "armor": "780",
              "dexterity": "+10",
              "fire_resistance": "+8%",
              "max_durability": "33150"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 840,
              "dexterity": 12,
              "fire_resistance": 0.1,
              "max_durability": 35700
            },
            "display": {
              "armor": "840",
              "dexterity": "+12",
              "fire_resistance": "+10%",
              "max_durability": "35700"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 841,
              "dexterity": 12,
              "fire_resistance": 0.1,
              "max_durability": 35700
            },
            "display": {
              "armor": "841",
              "dexterity": "+12",
              "fire_resistance": "+10%",
              "max_durability": "35700"
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
          "防御：6 级起每级增加 1，最高 1840。"
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
      "bodypart": 32,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 32,
        "description": "inventory_stack_view_wls2_armor_head_easter_1_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_head_easter_1_description",
        "name": "inventory_stack_view_wls2_armor_head_easter_1_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_1",
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
      "item_id": "wls2_armor_head_easter_1",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_head_easter_1_description",
        "en": {
          "description": "Not only rabbit's feet bring you luck!",
          "full_description": "Not only rabbit's feet bring you luck!",
          "name": "Bunny Ears Сirclet"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_head_easter_1_description",
        "name_key": "inventory_stack_view_wls2_armor_head_easter_1_name",
        "zh": {
          "description": "不是只有兔子脚才能带来好运！",
          "full_description": "不是只有兔子脚才能带来好运！",
          "name": "兔耳发箍"
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
                "wls2_resourse_secondary_cloth_1": 2,
                "wls2_resourse_secondary_leather_1": 4
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_easter_1"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_head_easter_1_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_easter_currency_egg": 100
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_easter_1",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_head_easter_1"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_easter_24_currency_egg": 100
              },
              "result": {
                "inventory_stack_id": "wls2_armor_head_easter_1",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter_22_trader_head_easter_1"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_easter2021_hat_1",
      "stat_curves": {
        "armor": {
          "1": 19,
          "2": 21,
          "3": 23,
          "4": 24,
          "5": 26,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 160,
          "2": 175,
          "3": 190,
          "4": 205,
          "5": 220
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
      "tier": 2,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "cb59bd8875034b908bb4a5fc4f1db4d7d5930ca7076eba1c81f93d532a349962",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "兔耳发箍",
        "name_en": "Bunny Ears Сirclet",
        "description_zh": "不是只有兔子脚才能带来好运！",
        "description_en": "Not only rabbit's feet bring you luck!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_head_easter_1 兔耳发箍 bunny ears сirclet 不是只有兔子脚才能带来好运！ not only rabbit's feet bring you luck! armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 19,
            "unit": "",
            "display": "19"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 160,
            "unit": "",
            "display": "160"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 19,
              "max_durability": 160
            },
            "display": {
              "armor": "19",
              "max_durability": "160"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 21,
              "max_durability": 175
            },
            "display": {
              "armor": "21",
              "max_durability": "175"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 23,
              "max_durability": 190
            },
            "display": {
              "armor": "23",
              "max_durability": "190"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 24,
              "max_durability": 205
            },
            "display": {
              "armor": "24",
              "max_durability": "205"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 26,
              "max_durability": 220
            },
            "display": {
              "armor": "26",
              "max_durability": "220"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 27,
              "max_durability": 220
            },
            "display": {
              "armor": "27",
              "max_durability": "220"
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
          "防御：6 级起每级增加 1，最高 1026。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    }
  ]
};
