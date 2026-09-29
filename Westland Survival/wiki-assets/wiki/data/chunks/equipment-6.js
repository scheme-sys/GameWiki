/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-equipment-6"] = {
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
      "bodypart": 51,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 51,
        "description": "inventory_stack_view_wls2_bp_season_flame_armor_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_bp_season_flame_armor_legs_description",
        "name": "inventory_stack_view_wls2_bp_season_flame_armor_legs_name",
        "rarity": "epic",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_MBP_2025_legs",
        "tags": [
          "armor",
          "legs",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_bp_season_flame_armor_legs_7_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_bp_season_flame_armor_legs_description",
        "en": {
          "description": "Red as the horizon sunset",
          "full_description": "Red as the horizon sunset",
          "name": "Blazing Rider pants"
        },
        "full_description_key": "inventory_stack_view_wls2_bp_season_flame_armor_legs_description",
        "name_key": "inventory_stack_view_wls2_bp_season_flame_armor_legs_name",
        "zh": {
          "description": "红色如地平线日落",
          "full_description": "红色如地平线日落",
          "name": "炽热骑手裤"
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
                "inventory_stack_id": "wls2_bp_season_flame_armor_legs_7_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_bp_season_flame_armor_legs_7_epic_recycle"
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
            "stack_id": "wls2_bp_season_flame_armor_legs_7_epic",
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
            "stack_id": "wls2_bp_season_flame_armor_legs_7_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_MBP_2025_legs",
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
      "image_key": "aadbef55bd08b86f1bd4473d16f4b00cfc8f99b1b54f1cd252ad25612d6ededb",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "炽热骑手裤",
        "name_en": "Blazing Rider pants",
        "description_zh": "红色如地平线日落",
        "description_en": "Red as the horizon sunset",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "史诗",
        "search_text": "wls2_bp_season_flame_armor_legs_7_epic 炽热骑手裤 blazing rider pants 红色如地平线日落 red as the horizon sunset armor 护甲 legs armor legs armor_storage"
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
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 19,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 19,
        "description": "inventory_stack_view_wls2_diary_armor_body_2_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_diary_armor_body_2_rare_description",
        "name": "inventory_stack_view_wls2_diary_armor_body_2_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_armor_body_3",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_diary_armor_body_2_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_diary_armor_body_2_rare_description",
        "en": {
          "description": "Brave the wild in style with the Lone Star Trench Coat",
          "full_description": "Brave the wild in style with the Lone Star Trench Coat",
          "name": "Lone Star Trench Coat"
        },
        "full_description_key": "inventory_stack_view_wls2_diary_armor_body_2_rare_description",
        "name_key": "inventory_stack_view_wls2_diary_armor_body_2_rare_name",
        "zh": {
          "description": "穿上孤星风衣，以时尚姿态勇闯荒野",
          "full_description": "穿上孤星风衣，以时尚姿态勇闯荒野",
          "name": "孤星风衣"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_armor_body_3",
      "stat_curves": {
        "armor": {
          "default": 79
        },
        "cool_modifier": {
          "default": 0.5
        },
        "max_durability": {
          "default": 530
        },
        "strength": {
          "default": 2
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
      "image_key": "a7976e8cba44799bab58d3e460f3bc2fd012ad03d2ea0d804f57e8c3ec59920d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "孤星风衣",
        "name_en": "Lone Star Trench Coat",
        "description_zh": "穿上孤星风衣，以时尚姿态勇闯荒野",
        "description_en": "Brave the wild in style with the Lone Star Trench Coat",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_diary_armor_body_2_rare 孤星风衣 lone star trench coat 穿上孤星风衣，以时尚姿态勇闯荒野 brave the wild in style with the lone star trench coat armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 79,
            "unit": "",
            "display": "79"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 530,
            "unit": "",
            "display": "530"
          },
          {
            "key": "strength",
            "label": "伤害加成",
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
      "bodypart": 20,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 20,
        "description": "inventory_stack_view_wls2_diary_armor_boots_2_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_diary_armor_boots_2_rare_description",
        "name": "inventory_stack_view_wls2_diary_armor_boots_2_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_armor_boots_3",
        "tags": [
          "armor",
          "boots",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_diary_armor_boots_2_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_diary_armor_boots_2_rare_description",
        "en": {
          "description": "Step confidently through the wilderness with the Lone Star Boots",
          "full_description": "Step confidently through the wilderness with the Lone Star Boots",
          "name": "Lone Star Boots"
        },
        "full_description_key": "inventory_stack_view_wls2_diary_armor_boots_2_rare_description",
        "name_key": "inventory_stack_view_wls2_diary_armor_boots_2_rare_name",
        "zh": {
          "description": "穿上Lone Star Boots，自信地穿越荒野",
          "full_description": "穿上Lone Star Boots，自信地穿越荒野",
          "name": "孤星靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_armor_boots_3",
      "stat_curves": {
        "armor": {
          "default": 23
        },
        "cool_modifier": {
          "default": 0.5
        },
        "max_durability": {
          "default": 350
        },
        "move_speed_modifier": {
          "default": 0.15
        },
        "strength": {
          "default": 2
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
      "image_key": "90e3dab5e16583386df2d72ae3042e0de5909ff4487b185487dcd9b6596b364e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "孤星靴子",
        "name_en": "Lone Star Boots",
        "description_zh": "穿上Lone Star Boots，自信地穿越荒野",
        "description_en": "Step confidently through the wilderness with the Lone Star Boots",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_diary_armor_boots_2_rare 孤星靴子 lone star boots 穿上lone star boots，自信地穿越荒野 step confidently through the wilderness with the lone star boots armor 护甲 boots armor boots armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 23,
            "unit": "",
            "display": "23"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 350,
            "unit": "",
            "display": "350"
          },
          {
            "key": "strength",
            "label": "伤害加成",
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
            "value": 0.15,
            "unit": "%",
            "display": "+15%"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
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
      "bodypart": 26,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 26,
        "description": "inventory_stack_view_wls2_diary_armor_head_2_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_diary_armor_head_2_rare_description",
        "name": "inventory_stack_view_wls2_diary_armor_head_2_rare_name",
        "rarity": "rare",
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
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_diary_armor_head_2_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_diary_armor_head_2_rare_description",
        "en": {
          "description": "The Lone Star Hat embodies the spirit of the West with its classic design",
          "full_description": "The Lone Star Hat embodies the spirit of the West with its classic design",
          "name": "Lone Star Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_diary_armor_head_2_rare_description",
        "name_key": "inventory_stack_view_wls2_diary_armor_head_2_rare_name",
        "zh": {
          "description": "孤星帽以其经典设计体现了西部精神",
          "full_description": "孤星帽以其经典设计体现了西部精神",
          "name": "孤星帽"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_head_upgrade_5_icon",
      "stat_curves": {
        "armor": {
          "default": 34
        },
        "cool_modifier": {
          "default": 0.5
        },
        "max_durability": {
          "default": 350
        },
        "strength": {
          "default": 2
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
      "image_key": "3b4428d0ae27388054be6400f7f04a3f6ec87fb21bc8f5ee9cbfea5f096b9638",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "孤星帽",
        "name_en": "Lone Star Hat",
        "description_zh": "孤星帽以其经典设计体现了西部精神",
        "description_en": "The Lone Star Hat embodies the spirit of the West with its classic design",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_diary_armor_head_2_rare 孤星帽 lone star hat 孤星帽以其经典设计体现了西部精神 the lone star hat embodies the spirit of the west with its classic design armor 护甲 head head armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 34,
            "unit": "",
            "display": "34"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 350,
            "unit": "",
            "display": "350"
          },
          {
            "key": "strength",
            "label": "伤害加成",
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
      "bodypart": 19,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 19,
        "description": "inventory_stack_view_wls2_diary_armor_legs_2_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_diary_armor_legs_2_rare_description",
        "name": "inventory_stack_view_wls2_diary_armor_legs_2_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_armor_legs_3",
        "tags": [
          "armor",
          "legs",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_diary_armor_legs_2_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_diary_armor_legs_2_rare_description",
        "en": {
          "description": "The Lone Star Pants provide comfort and toughness",
          "full_description": "The Lone Star Pants provide comfort and toughness",
          "name": "Lone Star Pants"
        },
        "full_description_key": "inventory_stack_view_wls2_diary_armor_legs_2_rare_description",
        "name_key": "inventory_stack_view_wls2_diary_armor_legs_2_rare_name",
        "zh": {
          "description": "孤星裤提供舒适性和耐用性",
          "full_description": "孤星裤提供舒适性和耐用性",
          "name": "孤星裤"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_armor_legs_3",
      "stat_curves": {
        "armor": {
          "default": 45
        },
        "cool_modifier": {
          "default": 0.5
        },
        "max_durability": {
          "default": 350
        },
        "strength": {
          "default": 2
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
      "image_key": "bdef3d173bd7fe8e9e21cf99a3089bf9621f53961486d4b5e84997446566d668",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "孤星裤",
        "name_en": "Lone Star Pants",
        "description_zh": "孤星裤提供舒适性和耐用性",
        "description_en": "The Lone Star Pants provide comfort and toughness",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_diary_armor_legs_2_rare 孤星裤 lone star pants 孤星裤提供舒适性和耐用性 the lone star pants provide comfort and toughness armor 护甲 legs armor legs armor_storage"
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
            "value": 350,
            "unit": "",
            "display": "350"
          },
          {
            "key": "strength",
            "label": "伤害加成",
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
        "description": "inventory_stack_view_wls2_diary_armor_ring_rare_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls2_diary_armor_ring_rare_description",
        "name": "inventory_stack_view_wls_ring_tier_3_name",
        "rarity": "rare",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_bone",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_diary_armor_ring_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_diary_armor_ring_rare_description",
        "en": {
          "description": "Grants its owner extra power",
          "full_description": "Grants its owner extra power",
          "name": "Ring of the Enchanter"
        },
        "full_description_key": "inventory_stack_view_wls2_diary_armor_ring_rare_description",
        "name_key": "inventory_stack_view_wls_ring_tier_3_name",
        "zh": {
          "description": "能够赋予所有者额外的力量",
          "full_description": "能够赋予所有者额外的力量",
          "name": "魔法师指环"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_bone",
      "stat_curves": {
        "strength": {
          "default": 5
        }
      },
      "stat_labels": {
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
        }
      },
      "subcategory": "ring",
      "tags": [
        "ring1",
        "ring2",
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
      "image_key": "57612bff8052edf5ac3eecedd7cfdba2a05cc310b7bc8a410cd5b7497ad02809",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "魔法师指环",
        "name_en": "Ring of the Enchanter",
        "description_zh": "能够赋予所有者额外的力量",
        "description_en": "Grants its owner extra power",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "稀有",
        "search_text": "wls2_diary_armor_ring_rare 魔法师指环 ring of the enchanter 能够赋予所有者额外的力量 grants its owner extra power accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "strength",
            "label": "伤害加成",
            "value": 5,
            "unit": "",
            "display": "+5"
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
      "bodypart": 13,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 13,
        "description": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_description",
        "name": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_body",
        "tags": [
          "chest",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_easter_22_armor_body_4_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_description",
        "en": {
          "description": "It’s doubtful that this embroidered jacket will scare away the beast. But it will definitely make you a true Fair Star!",
          "full_description": "It’s doubtful that this embroidered jacket will scare away the beast. But it will definitely make you a true Fair Star!",
          "name": "Jackalope Hunter Shirt"
        },
        "full_description_key": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_description",
        "name_key": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_name",
        "zh": {
          "description": "无法确定这件刺绣夹克能否吓跑野兽。但它绝对会让你成为真正的集市之星！",
          "full_description": "无法确定这件刺绣夹克能否吓跑野兽。但它绝对会让你成为真正的集市之星！",
          "name": "鹿角兔猎人衬衫"
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
                "inventory_stack_id": "wls2_easter_22_armor_body_4_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_easter_22_armor_body_4_epic_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_easter_24_currency_egg": 1500
              },
              "result": {
                "inventory_stack_id": "wls2_easter_22_armor_body_4_epic",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter_22_trader_t4_epic_body"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_body",
      "stat_curves": {
        "armor": {
          "1": 425,
          "2": 467,
          "3": 509,
          "4": 551,
          "5": 593,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 2,
          "2": 2,
          "3": 2,
          "4": 2,
          "5": 2
        },
        "health_increment": {
          "1": 30,
          "2": 40,
          "3": 50,
          "4": 60,
          "5": 70
        },
        "max_durability": {
          "1": 8350,
          "2": 9185,
          "3": 10020,
          "4": 10854,
          "5": 11689
        },
        "strength": {
          "1": 1,
          "2": 3,
          "3": 5,
          "4": 7,
          "5": 9
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
      "image_key": "579eda327db0c24efe69057261cef6cddf64178273c31fee84fffa1d926181e4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角兔猎人衬衫",
        "name_en": "Jackalope Hunter Shirt",
        "description_zh": "无法确定这件刺绣夹克能否吓跑野兽。但它绝对会让你成为真正的集市之星！",
        "description_en": "It’s doubtful that this embroidered jacket will scare away the beast. But it will definitely make you a true Fair Star!",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_easter_22_armor_body_4_epic 鹿角兔猎人衬衫 jackalope hunter shirt 无法确定这件刺绣夹克能否吓跑野兽。但它绝对会让你成为真正的集市之星！ it’s doubtful that this embroidered jacket will scare away the beast. but it will definitely make you a true fair star! armor 护甲 body chest armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 425,
            "unit": "",
            "display": "425"
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
            "value": 30,
            "unit": "",
            "display": "+30"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": 1,
            "unit": "",
            "display": "+1"
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
              "armor": 425,
              "health_increment": 30,
              "max_durability": 8350,
              "strength": 1
            },
            "display": {
              "armor": "425",
              "health_increment": "+30",
              "max_durability": "8350",
              "strength": "+1"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 467,
              "health_increment": 40,
              "max_durability": 9185,
              "strength": 3
            },
            "display": {
              "armor": "467",
              "health_increment": "+40",
              "max_durability": "9185",
              "strength": "+3"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 509,
              "health_increment": 50,
              "max_durability": 10020,
              "strength": 5
            },
            "display": {
              "armor": "509",
              "health_increment": "+50",
              "max_durability": "10020",
              "strength": "+5"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 551,
              "health_increment": 60,
              "max_durability": 10854,
              "strength": 7
            },
            "display": {
              "armor": "551",
              "health_increment": "+60",
              "max_durability": "10854",
              "strength": "+7"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 593,
              "health_increment": 70,
              "max_durability": 11689,
              "strength": 9
            },
            "display": {
              "armor": "593",
              "health_increment": "+70",
              "max_durability": "11689",
              "strength": "+9"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 594,
              "health_increment": 70,
              "max_durability": 11689,
              "strength": 9
            },
            "display": {
              "armor": "594",
              "health_increment": "+70",
              "max_durability": "11689",
              "strength": "+9"
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
            "key": "health_increment",
            "label": "生命加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1593。"
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
      "bodypart": 13,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 13,
        "description": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_description",
        "name": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_body",
        "tags": [
          "chest",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_easter_22_armor_body_5_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_description",
        "en": {
          "description": "It’s doubtful that this embroidered jacket will scare away the beast. But it will definitely make you a true Fair Star!",
          "full_description": "It’s doubtful that this embroidered jacket will scare away the beast. But it will definitely make you a true Fair Star!",
          "name": "Jackalope Hunter Shirt"
        },
        "full_description_key": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_description",
        "name_key": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_name",
        "zh": {
          "description": "无法确定这件刺绣夹克能否吓跑野兽。但它绝对会让你成为真正的集市之星！",
          "full_description": "无法确定这件刺绣夹克能否吓跑野兽。但它绝对会让你成为真正的集市之星！",
          "name": "鹿角兔猎人衬衫"
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
      "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_body",
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
      "image_key": "579eda327db0c24efe69057261cef6cddf64178273c31fee84fffa1d926181e4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角兔猎人衬衫",
        "name_en": "Jackalope Hunter Shirt",
        "description_zh": "无法确定这件刺绣夹克能否吓跑野兽。但它绝对会让你成为真正的集市之星！",
        "description_en": "It’s doubtful that this embroidered jacket will scare away the beast. But it will definitely make you a true Fair Star!",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_easter_22_armor_body_5_epic 鹿角兔猎人衬衫 jackalope hunter shirt 无法确定这件刺绣夹克能否吓跑野兽。但它绝对会让你成为真正的集市之星！ it’s doubtful that this embroidered jacket will scare away the beast. but it will definitely make you a true fair star! armor 护甲 body chest armor armor_storage festive"
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
      "bodypart": 13,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 13,
        "description": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_description",
        "name": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_body",
        "tags": [
          "chest",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_easter_22_armor_body_6_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_description",
        "en": {
          "description": "It’s doubtful that this embroidered jacket will scare away the beast. But it will definitely make you a true Fair Star!",
          "full_description": "It’s doubtful that this embroidered jacket will scare away the beast. But it will definitely make you a true Fair Star!",
          "name": "Jackalope Hunter Shirt"
        },
        "full_description_key": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_description",
        "name_key": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_name",
        "zh": {
          "description": "无法确定这件刺绣夹克能否吓跑野兽。但它绝对会让你成为真正的集市之星！",
          "full_description": "无法确定这件刺绣夹克能否吓跑野兽。但它绝对会让你成为真正的集市之星！",
          "name": "鹿角兔猎人衬衫"
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
      "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_body",
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
      "image_key": "579eda327db0c24efe69057261cef6cddf64178273c31fee84fffa1d926181e4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角兔猎人衬衫",
        "name_en": "Jackalope Hunter Shirt",
        "description_zh": "无法确定这件刺绣夹克能否吓跑野兽。但它绝对会让你成为真正的集市之星！",
        "description_en": "It’s doubtful that this embroidered jacket will scare away the beast. But it will definitely make you a true Fair Star!",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_easter_22_armor_body_6_epic 鹿角兔猎人衬衫 jackalope hunter shirt 无法确定这件刺绣夹克能否吓跑野兽。但它绝对会让你成为真正的集市之星！ it’s doubtful that this embroidered jacket will scare away the beast. but it will definitely make you a true fair star! armor 护甲 body chest armor armor_storage festive"
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
      "bodypart": 13,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 13,
        "description": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_description",
        "name": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_body",
        "tags": [
          "chest",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_easter_22_armor_body_7_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_description",
        "en": {
          "description": "It’s doubtful that this embroidered jacket will scare away the beast. But it will definitely make you a true Fair Star!",
          "full_description": "It’s doubtful that this embroidered jacket will scare away the beast. But it will definitely make you a true Fair Star!",
          "name": "Jackalope Hunter Shirt"
        },
        "full_description_key": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_description",
        "name_key": "inventory_stack_view_wls2_easter_22_armor_body_4_epic_name",
        "zh": {
          "description": "无法确定这件刺绣夹克能否吓跑野兽。但它绝对会让你成为真正的集市之星！",
          "full_description": "无法确定这件刺绣夹克能否吓跑野兽。但它绝对会让你成为真正的集市之星！",
          "name": "鹿角兔猎人衬衫"
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
      "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_body",
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
      "image_key": "579eda327db0c24efe69057261cef6cddf64178273c31fee84fffa1d926181e4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角兔猎人衬衫",
        "name_en": "Jackalope Hunter Shirt",
        "description_zh": "无法确定这件刺绣夹克能否吓跑野兽。但它绝对会让你成为真正的集市之星！",
        "description_en": "It’s doubtful that this embroidered jacket will scare away the beast. But it will definitely make you a true Fair Star!",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_easter_22_armor_body_7_epic 鹿角兔猎人衬衫 jackalope hunter shirt 无法确定这件刺绣夹克能否吓跑野兽。但它绝对会让你成为真正的集市之星！ it’s doubtful that this embroidered jacket will scare away the beast. but it will definitely make you a true fair star! armor 护甲 body chest armor armor_storage festive"
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
      "bodypart": 13,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 13,
        "description": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_description",
        "name": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_boots",
        "tags": [
          "armor",
          "boots",
          "armor_storage",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_easter_22_armor_boots_4_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_description",
        "en": {
          "description": "Even if you're a bad dancer, these boots help to rock the Fair. Hey, who wants the story about Jackalope hunt?",
          "full_description": "Even if you're a bad dancer, these boots help to rock the Fair. Hey, who wants the story about Jackalope hunt?",
          "name": "Jackalope Hunter Boots"
        },
        "full_description_key": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_description",
        "name_key": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_name",
        "zh": {
          "description": "即使你跳舞跳得不好，这双靴子也能让你在集市上大放异彩。谁想知道狩猎鹿角兔的故事？",
          "full_description": "即使你跳舞跳得不好，这双靴子也能让你在集市上大放异彩。谁想知道狩猎鹿角兔的故事？",
          "name": "鹿角兔猎人靴子"
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
                "inventory_stack_id": "wls2_easter_22_armor_boots_4_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_easter_22_armor_boots_4_epic_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_easter_24_currency_egg": 1500
              },
              "result": {
                "inventory_stack_id": "wls2_easter_22_armor_boots_4_epic",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter_22_trader_t4_epic_boots"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_boots",
      "stat_curves": {
        "armor": {
          "1": 125,
          "2": 137,
          "3": 149,
          "4": 161,
          "5": 179,
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
          "2": 3,
          "3": 5,
          "4": 7,
          "5": 9
        },
        "health_increment": {
          "1": 30,
          "2": 40,
          "3": 50,
          "4": 60,
          "5": 70
        },
        "max_durability": {
          "1": 6262,
          "2": 6888,
          "3": 7515,
          "4": 8141,
          "5": 8767
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
      "image_key": "f51210b5cf564dfb1e786a3dfd76921d02b80aa880293015eb453dc63fa476da",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角兔猎人靴子",
        "name_en": "Jackalope Hunter Boots",
        "description_zh": "即使你跳舞跳得不好，这双靴子也能让你在集市上大放异彩。谁想知道狩猎鹿角兔的故事？",
        "description_en": "Even if you're a bad dancer, these boots help to rock the Fair. Hey, who wants the story about Jackalope hunt?",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_easter_22_armor_boots_4_epic 鹿角兔猎人靴子 jackalope hunter boots 即使你跳舞跳得不好，这双靴子也能让你在集市上大放异彩。谁想知道狩猎鹿角兔的故事？ even if you're a bad dancer, these boots help to rock the fair. hey, who wants the story about jackalope hunt? armor 护甲 boots armor boots armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 125,
            "unit": "",
            "display": "125"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 6262,
            "unit": "",
            "display": "6262"
          },
          {
            "key": "health_increment",
            "label": "生命加成",
            "value": 30,
            "unit": "",
            "display": "+30"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 1,
            "unit": "",
            "display": "+1"
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
            "value": 0.5,
            "unit": "",
            "display": "0.5"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 125,
              "dexterity": 1,
              "health_increment": 30,
              "max_durability": 6262
            },
            "display": {
              "armor": "125",
              "dexterity": "+1",
              "health_increment": "+30",
              "max_durability": "6262"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 137,
              "dexterity": 3,
              "health_increment": 40,
              "max_durability": 6888
            },
            "display": {
              "armor": "137",
              "dexterity": "+3",
              "health_increment": "+40",
              "max_durability": "6888"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 149,
              "dexterity": 5,
              "health_increment": 50,
              "max_durability": 7515
            },
            "display": {
              "armor": "149",
              "dexterity": "+5",
              "health_increment": "+50",
              "max_durability": "7515"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 161,
              "dexterity": 7,
              "health_increment": 60,
              "max_durability": 8141
            },
            "display": {
              "armor": "161",
              "dexterity": "+7",
              "health_increment": "+60",
              "max_durability": "8141"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 179,
              "dexterity": 9,
              "health_increment": 70,
              "max_durability": 8767
            },
            "display": {
              "armor": "179",
              "dexterity": "+9",
              "health_increment": "+70",
              "max_durability": "8767"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 180,
              "dexterity": 9,
              "health_increment": 70,
              "max_durability": 8767
            },
            "display": {
              "armor": "180",
              "dexterity": "+9",
              "health_increment": "+70",
              "max_durability": "8767"
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
          "防御：6 级起每级增加 1，最高 1179。"
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
      "bodypart": 13,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 13,
        "description": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_description",
        "name": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_boots",
        "tags": [
          "armor",
          "boots",
          "armor_storage",
          "festive"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_easter_22_armor_boots_5_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_description",
        "en": {
          "description": "Even if you're a bad dancer, these boots help to rock the Fair. Hey, who wants the story about Jackalope hunt?",
          "full_description": "Even if you're a bad dancer, these boots help to rock the Fair. Hey, who wants the story about Jackalope hunt?",
          "name": "Jackalope Hunter Boots"
        },
        "full_description_key": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_description",
        "name_key": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_name",
        "zh": {
          "description": "即使你跳舞跳得不好，这双靴子也能让你在集市上大放异彩。谁想知道狩猎鹿角兔的故事？",
          "full_description": "即使你跳舞跳得不好，这双靴子也能让你在集市上大放异彩。谁想知道狩猎鹿角兔的故事？",
          "name": "鹿角兔猎人靴子"
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
      "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_boots",
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
      "image_key": "f51210b5cf564dfb1e786a3dfd76921d02b80aa880293015eb453dc63fa476da",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角兔猎人靴子",
        "name_en": "Jackalope Hunter Boots",
        "description_zh": "即使你跳舞跳得不好，这双靴子也能让你在集市上大放异彩。谁想知道狩猎鹿角兔的故事？",
        "description_en": "Even if you're a bad dancer, these boots help to rock the Fair. Hey, who wants the story about Jackalope hunt?",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_easter_22_armor_boots_5_epic 鹿角兔猎人靴子 jackalope hunter boots 即使你跳舞跳得不好，这双靴子也能让你在集市上大放异彩。谁想知道狩猎鹿角兔的故事？ even if you're a bad dancer, these boots help to rock the fair. hey, who wants the story about jackalope hunt? armor 护甲 boots armor boots armor_storage festive"
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
      "bodypart": 13,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 13,
        "description": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_description",
        "name": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_boots",
        "tags": [
          "armor",
          "boots",
          "armor_storage",
          "festive"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_easter_22_armor_boots_6_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_description",
        "en": {
          "description": "Even if you're a bad dancer, these boots help to rock the Fair. Hey, who wants the story about Jackalope hunt?",
          "full_description": "Even if you're a bad dancer, these boots help to rock the Fair. Hey, who wants the story about Jackalope hunt?",
          "name": "Jackalope Hunter Boots"
        },
        "full_description_key": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_description",
        "name_key": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_name",
        "zh": {
          "description": "即使你跳舞跳得不好，这双靴子也能让你在集市上大放异彩。谁想知道狩猎鹿角兔的故事？",
          "full_description": "即使你跳舞跳得不好，这双靴子也能让你在集市上大放异彩。谁想知道狩猎鹿角兔的故事？",
          "name": "鹿角兔猎人靴子"
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
      "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_boots",
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
      "image_key": "f51210b5cf564dfb1e786a3dfd76921d02b80aa880293015eb453dc63fa476da",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角兔猎人靴子",
        "name_en": "Jackalope Hunter Boots",
        "description_zh": "即使你跳舞跳得不好，这双靴子也能让你在集市上大放异彩。谁想知道狩猎鹿角兔的故事？",
        "description_en": "Even if you're a bad dancer, these boots help to rock the Fair. Hey, who wants the story about Jackalope hunt?",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_easter_22_armor_boots_6_epic 鹿角兔猎人靴子 jackalope hunter boots 即使你跳舞跳得不好，这双靴子也能让你在集市上大放异彩。谁想知道狩猎鹿角兔的故事？ even if you're a bad dancer, these boots help to rock the fair. hey, who wants the story about jackalope hunt? armor 护甲 boots armor boots armor_storage festive"
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
      "bodypart": 13,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 13,
        "description": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_description",
        "name": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_boots",
        "tags": [
          "armor",
          "boots",
          "armor_storage",
          "festive"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_easter_22_armor_boots_7_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_description",
        "en": {
          "description": "Even if you're a bad dancer, these boots help to rock the Fair. Hey, who wants the story about Jackalope hunt?",
          "full_description": "Even if you're a bad dancer, these boots help to rock the Fair. Hey, who wants the story about Jackalope hunt?",
          "name": "Jackalope Hunter Boots"
        },
        "full_description_key": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_description",
        "name_key": "inventory_stack_view_wls2_easter_22_armor_boots_4_epic_name",
        "zh": {
          "description": "即使你跳舞跳得不好，这双靴子也能让你在集市上大放异彩。谁想知道狩猎鹿角兔的故事？",
          "full_description": "即使你跳舞跳得不好，这双靴子也能让你在集市上大放异彩。谁想知道狩猎鹿角兔的故事？",
          "name": "鹿角兔猎人靴子"
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
      "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_boots",
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
      "image_key": "f51210b5cf564dfb1e786a3dfd76921d02b80aa880293015eb453dc63fa476da",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角兔猎人靴子",
        "name_en": "Jackalope Hunter Boots",
        "description_zh": "即使你跳舞跳得不好，这双靴子也能让你在集市上大放异彩。谁想知道狩猎鹿角兔的故事？",
        "description_en": "Even if you're a bad dancer, these boots help to rock the Fair. Hey, who wants the story about Jackalope hunt?",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_easter_22_armor_boots_7_epic 鹿角兔猎人靴子 jackalope hunter boots 即使你跳舞跳得不好，这双靴子也能让你在集市上大放异彩。谁想知道狩猎鹿角兔的故事？ even if you're a bad dancer, these boots help to rock the fair. hey, who wants the story about jackalope hunt? armor 护甲 boots armor boots armor_storage festive"
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
      "bodypart": 13,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 13,
        "description": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_description",
        "name": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_head",
        "tags": [
          "armor",
          "head",
          "armor_storage",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_easter_22_armor_head_4_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_description",
        "en": {
          "description": "This fancy hat will protect you from the sun, but not from the admiring glances!",
          "full_description": "This fancy hat will protect you from the sun, but not from the admiring glances!",
          "name": "Jackalope Hunter Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_description",
        "name_key": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_name",
        "zh": {
          "description": "这顶精致的帽子可以帮你遮住阳光，但挡不住别人羡慕的目光！",
          "full_description": "这顶精致的帽子可以帮你遮住阳光，但挡不住别人羡慕的目光！",
          "name": "鹿角兔猎人帽"
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
                "inventory_stack_id": "wls2_easter_22_armor_head_4_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_easter_22_armor_head_4_epic_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_easter_24_currency_egg": 1500
              },
              "result": {
                "inventory_stack_id": "wls2_easter_22_armor_head_4_epic",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter_22_trader_t4_epic_head"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_head",
      "stat_curves": {
        "armor": {
          "1": 185,
          "2": 205,
          "3": 225,
          "4": 235,
          "5": 255,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1
        },
        "health_increment": {
          "1": 30,
          "2": 40,
          "3": 50,
          "4": 60,
          "5": 70
        },
        "max_durability": {
          "1": 6898,
          "2": 7574,
          "3": 8270,
          "4": 8946,
          "5": 9642
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "wisdom": {
          "1": 1,
          "2": 3,
          "3": 5,
          "4": 7,
          "5": 9
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
        "armor",
        "head",
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
      "image_key": "85574a93213bb10ff0bfe048776c83f578f7e038498b577c89ab4393995bb832",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角兔猎人帽",
        "name_en": "Jackalope Hunter Hat",
        "description_zh": "这顶精致的帽子可以帮你遮住阳光，但挡不住别人羡慕的目光！",
        "description_en": "This fancy hat will protect you from the sun, but not from the admiring glances!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_easter_22_armor_head_4_epic 鹿角兔猎人帽 jackalope hunter hat 这顶精致的帽子可以帮你遮住阳光，但挡不住别人羡慕的目光！ this fancy hat will protect you from the sun, but not from the admiring glances! armor 护甲 head armor head armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 185,
            "unit": "",
            "display": "185"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 6898,
            "unit": "",
            "display": "6898"
          },
          {
            "key": "health_increment",
            "label": "生命加成",
            "value": 30,
            "unit": "",
            "display": "+30"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": 1,
            "unit": "",
            "display": "+1"
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
              "armor": 185,
              "health_increment": 30,
              "max_durability": 6898,
              "wisdom": 1
            },
            "display": {
              "armor": "185",
              "health_increment": "+30",
              "max_durability": "6898",
              "wisdom": "+1"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 205,
              "health_increment": 40,
              "max_durability": 7574,
              "wisdom": 3
            },
            "display": {
              "armor": "205",
              "health_increment": "+40",
              "max_durability": "7574",
              "wisdom": "+3"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 225,
              "health_increment": 50,
              "max_durability": 8270,
              "wisdom": 5
            },
            "display": {
              "armor": "225",
              "health_increment": "+50",
              "max_durability": "8270",
              "wisdom": "+5"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 235,
              "health_increment": 60,
              "max_durability": 8946,
              "wisdom": 7
            },
            "display": {
              "armor": "235",
              "health_increment": "+60",
              "max_durability": "8946",
              "wisdom": "+7"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 255,
              "health_increment": 70,
              "max_durability": 9642,
              "wisdom": 9
            },
            "display": {
              "armor": "255",
              "health_increment": "+70",
              "max_durability": "9642",
              "wisdom": "+9"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 256,
              "health_increment": 70,
              "max_durability": 9642,
              "wisdom": 9
            },
            "display": {
              "armor": "256",
              "health_increment": "+70",
              "max_durability": "9642",
              "wisdom": "+9"
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
            "key": "health_increment",
            "label": "生命加成",
            "unit": ""
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "unit": ""
          },
          {
            "key": "wisdom",
            "label": "精神",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1255。"
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
      "bodypart": 13,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 13,
        "description": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_description",
        "name": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_head",
        "tags": [
          "armor",
          "head",
          "armor_storage",
          "festive"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_easter_22_armor_head_5_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_description",
        "en": {
          "description": "This fancy hat will protect you from the sun, but not from the admiring glances!",
          "full_description": "This fancy hat will protect you from the sun, but not from the admiring glances!",
          "name": "Jackalope Hunter Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_description",
        "name_key": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_name",
        "zh": {
          "description": "这顶精致的帽子可以帮你遮住阳光，但挡不住别人羡慕的目光！",
          "full_description": "这顶精致的帽子可以帮你遮住阳光，但挡不住别人羡慕的目光！",
          "name": "鹿角兔猎人帽"
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
      "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_head",
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
      "image_key": "85574a93213bb10ff0bfe048776c83f578f7e038498b577c89ab4393995bb832",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角兔猎人帽",
        "name_en": "Jackalope Hunter Hat",
        "description_zh": "这顶精致的帽子可以帮你遮住阳光，但挡不住别人羡慕的目光！",
        "description_en": "This fancy hat will protect you from the sun, but not from the admiring glances!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_easter_22_armor_head_5_epic 鹿角兔猎人帽 jackalope hunter hat 这顶精致的帽子可以帮你遮住阳光，但挡不住别人羡慕的目光！ this fancy hat will protect you from the sun, but not from the admiring glances! armor 护甲 head armor head armor_storage festive"
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
      "bodypart": 13,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 13,
        "description": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_description",
        "name": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_head",
        "tags": [
          "armor",
          "head",
          "armor_storage",
          "festive"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_easter_22_armor_head_6_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_description",
        "en": {
          "description": "This fancy hat will protect you from the sun, but not from the admiring glances!",
          "full_description": "This fancy hat will protect you from the sun, but not from the admiring glances!",
          "name": "Jackalope Hunter Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_description",
        "name_key": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_name",
        "zh": {
          "description": "这顶精致的帽子可以帮你遮住阳光，但挡不住别人羡慕的目光！",
          "full_description": "这顶精致的帽子可以帮你遮住阳光，但挡不住别人羡慕的目光！",
          "name": "鹿角兔猎人帽"
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
      "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_head",
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
      "image_key": "85574a93213bb10ff0bfe048776c83f578f7e038498b577c89ab4393995bb832",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角兔猎人帽",
        "name_en": "Jackalope Hunter Hat",
        "description_zh": "这顶精致的帽子可以帮你遮住阳光，但挡不住别人羡慕的目光！",
        "description_en": "This fancy hat will protect you from the sun, but not from the admiring glances!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_easter_22_armor_head_6_epic 鹿角兔猎人帽 jackalope hunter hat 这顶精致的帽子可以帮你遮住阳光，但挡不住别人羡慕的目光！ this fancy hat will protect you from the sun, but not from the admiring glances! armor 护甲 head armor head armor_storage festive"
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
      "bodypart": 13,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 13,
        "description": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_description",
        "name": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_head",
        "tags": [
          "armor",
          "head",
          "armor_storage",
          "festive"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_easter_22_armor_head_7_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_description",
        "en": {
          "description": "This fancy hat will protect you from the sun, but not from the admiring glances!",
          "full_description": "This fancy hat will protect you from the sun, but not from the admiring glances!",
          "name": "Jackalope Hunter Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_description",
        "name_key": "inventory_stack_view_wls2_easter_22_armor_head_4_epic_name",
        "zh": {
          "description": "这顶精致的帽子可以帮你遮住阳光，但挡不住别人羡慕的目光！",
          "full_description": "这顶精致的帽子可以帮你遮住阳光，但挡不住别人羡慕的目光！",
          "name": "鹿角兔猎人帽"
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
      "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_head",
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
      "image_key": "85574a93213bb10ff0bfe048776c83f578f7e038498b577c89ab4393995bb832",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角兔猎人帽",
        "name_en": "Jackalope Hunter Hat",
        "description_zh": "这顶精致的帽子可以帮你遮住阳光，但挡不住别人羡慕的目光！",
        "description_en": "This fancy hat will protect you from the sun, but not from the admiring glances!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_easter_22_armor_head_7_epic 鹿角兔猎人帽 jackalope hunter hat 这顶精致的帽子可以帮你遮住阳光，但挡不住别人羡慕的目光！ this fancy hat will protect you from the sun, but not from the admiring glances! armor 护甲 head armor head armor_storage festive"
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
      "bodypart": 13,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 13,
        "description": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_description",
        "name": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_legs",
        "tags": [
          "armor",
          "legs",
          "armor_storage",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_easter_22_armor_legs_4_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_description",
        "en": {
          "description": "Old Nick claims these bizarre trousers are terrifying Jackalopes. However, not only them.",
          "full_description": "Old Nick claims these bizarre trousers are terrifying Jackalopes. However, not only them.",
          "name": "Jackalope Hunter Chaps"
        },
        "full_description_key": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_description",
        "name_key": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_name",
        "zh": {
          "description": "老尼克声称这些猎奇裤子会让鹿角兔感到恐惧。然而，不止它们。",
          "full_description": "老尼克声称这些猎奇裤子会让鹿角兔感到恐惧。然而，不止它们。",
          "name": "鹿角兔猎人皮裤"
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
                "inventory_stack_id": "wls2_easter_22_armor_legs_4_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_easter_22_armor_legs_4_epic_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_easter_24_currency_egg": 1500
              },
              "result": {
                "inventory_stack_id": "wls2_easter_22_armor_legs_4_epic",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter_22_trader_t4_epic_legs"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_legs",
      "stat_curves": {
        "armor": {
          "1": 245,
          "2": 265,
          "3": 295,
          "4": 315,
          "5": 345,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1
        },
        "health_increment": {
          "1": 30,
          "2": 40,
          "3": 50,
          "4": 60,
          "5": 70
        },
        "max_durability": {
          "1": 7177,
          "2": 7892,
          "3": 8608,
          "4": 9344,
          "5": 10059
        },
        "stamina": {
          "1": 1,
          "2": 3,
          "3": 5,
          "4": 7,
          "5": 9
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
      "image_key": "083a5629e5d0db7a50c1396fd86d0355cea40449883aa90c5f276c82f54c4b46",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角兔猎人皮裤",
        "name_en": "Jackalope Hunter Chaps",
        "description_zh": "老尼克声称这些猎奇裤子会让鹿角兔感到恐惧。然而，不止它们。",
        "description_en": "Old Nick claims these bizarre trousers are terrifying Jackalopes. However, not only them.",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "史诗",
        "search_text": "wls2_easter_22_armor_legs_4_epic 鹿角兔猎人皮裤 jackalope hunter chaps 老尼克声称这些猎奇裤子会让鹿角兔感到恐惧。然而，不止它们。 old nick claims these bizarre trousers are terrifying jackalopes. however, not only them. armor 护甲 legs armor legs armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 245,
            "unit": "",
            "display": "245"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 7177,
            "unit": "",
            "display": "7177"
          },
          {
            "key": "health_increment",
            "label": "生命加成",
            "value": 30,
            "unit": "",
            "display": "+30"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": 1,
            "unit": "",
            "display": "+1"
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
              "armor": 245,
              "health_increment": 30,
              "max_durability": 7177,
              "stamina": 1
            },
            "display": {
              "armor": "245",
              "health_increment": "+30",
              "max_durability": "7177",
              "stamina": "+1"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 265,
              "health_increment": 40,
              "max_durability": 7892,
              "stamina": 3
            },
            "display": {
              "armor": "265",
              "health_increment": "+40",
              "max_durability": "7892",
              "stamina": "+3"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 295,
              "health_increment": 50,
              "max_durability": 8608,
              "stamina": 5
            },
            "display": {
              "armor": "295",
              "health_increment": "+50",
              "max_durability": "8608",
              "stamina": "+5"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 315,
              "health_increment": 60,
              "max_durability": 9344,
              "stamina": 7
            },
            "display": {
              "armor": "315",
              "health_increment": "+60",
              "max_durability": "9344",
              "stamina": "+7"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 345,
              "health_increment": 70,
              "max_durability": 10059,
              "stamina": 9
            },
            "display": {
              "armor": "345",
              "health_increment": "+70",
              "max_durability": "10059",
              "stamina": "+9"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 346,
              "health_increment": 70,
              "max_durability": 10059,
              "stamina": 9
            },
            "display": {
              "armor": "346",
              "health_increment": "+70",
              "max_durability": "10059",
              "stamina": "+9"
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
            "key": "health_increment",
            "label": "生命加成",
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
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1345。"
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
      "bodypart": 13,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 13,
        "description": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_description",
        "name": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_legs",
        "tags": [
          "armor",
          "legs",
          "armor_storage",
          "festive"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_easter_22_armor_legs_5_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_description",
        "en": {
          "description": "Old Nick claims these bizarre trousers are terrifying Jackalopes. However, not only them.",
          "full_description": "Old Nick claims these bizarre trousers are terrifying Jackalopes. However, not only them.",
          "name": "Jackalope Hunter Chaps"
        },
        "full_description_key": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_description",
        "name_key": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_name",
        "zh": {
          "description": "老尼克声称这些猎奇裤子会让鹿角兔感到恐惧。然而，不止它们。",
          "full_description": "老尼克声称这些猎奇裤子会让鹿角兔感到恐惧。然而，不止它们。",
          "name": "鹿角兔猎人皮裤"
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
      "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_legs",
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
      "image_key": "083a5629e5d0db7a50c1396fd86d0355cea40449883aa90c5f276c82f54c4b46",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角兔猎人皮裤",
        "name_en": "Jackalope Hunter Chaps",
        "description_zh": "老尼克声称这些猎奇裤子会让鹿角兔感到恐惧。然而，不止它们。",
        "description_en": "Old Nick claims these bizarre trousers are terrifying Jackalopes. However, not only them.",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "史诗",
        "search_text": "wls2_easter_22_armor_legs_5_epic 鹿角兔猎人皮裤 jackalope hunter chaps 老尼克声称这些猎奇裤子会让鹿角兔感到恐惧。然而，不止它们。 old nick claims these bizarre trousers are terrifying jackalopes. however, not only them. armor 护甲 legs armor legs armor_storage festive"
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
      "bodypart": 13,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 13,
        "description": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_description",
        "name": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_legs",
        "tags": [
          "armor",
          "legs",
          "armor_storage",
          "festive"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_easter_22_armor_legs_6_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_description",
        "en": {
          "description": "Old Nick claims these bizarre trousers are terrifying Jackalopes. However, not only them.",
          "full_description": "Old Nick claims these bizarre trousers are terrifying Jackalopes. However, not only them.",
          "name": "Jackalope Hunter Chaps"
        },
        "full_description_key": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_description",
        "name_key": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_name",
        "zh": {
          "description": "老尼克声称这些猎奇裤子会让鹿角兔感到恐惧。然而，不止它们。",
          "full_description": "老尼克声称这些猎奇裤子会让鹿角兔感到恐惧。然而，不止它们。",
          "name": "鹿角兔猎人皮裤"
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
      "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_legs",
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
      "image_key": "083a5629e5d0db7a50c1396fd86d0355cea40449883aa90c5f276c82f54c4b46",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角兔猎人皮裤",
        "name_en": "Jackalope Hunter Chaps",
        "description_zh": "老尼克声称这些猎奇裤子会让鹿角兔感到恐惧。然而，不止它们。",
        "description_en": "Old Nick claims these bizarre trousers are terrifying Jackalopes. However, not only them.",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "史诗",
        "search_text": "wls2_easter_22_armor_legs_6_epic 鹿角兔猎人皮裤 jackalope hunter chaps 老尼克声称这些猎奇裤子会让鹿角兔感到恐惧。然而，不止它们。 old nick claims these bizarre trousers are terrifying jackalopes. however, not only them. armor 护甲 legs armor legs armor_storage festive"
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
      "bodypart": 13,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 13,
        "description": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_description",
        "name": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_legs",
        "tags": [
          "armor",
          "legs",
          "armor_storage",
          "festive"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_easter_22_armor_legs_7_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_description",
        "en": {
          "description": "Old Nick claims these bizarre trousers are terrifying Jackalopes. However, not only them.",
          "full_description": "Old Nick claims these bizarre trousers are terrifying Jackalopes. However, not only them.",
          "name": "Jackalope Hunter Chaps"
        },
        "full_description_key": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_description",
        "name_key": "inventory_stack_view_wls2_easter_22_armor_legs_4_epic_name",
        "zh": {
          "description": "老尼克声称这些猎奇裤子会让鹿角兔感到恐惧。然而，不止它们。",
          "full_description": "老尼克声称这些猎奇裤子会让鹿角兔感到恐惧。然而，不止它们。",
          "name": "鹿角兔猎人皮裤"
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
      "sprite": "UI_WW_AlphaBinary06/wls2_armor_easter2022_legs",
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
      "image_key": "083a5629e5d0db7a50c1396fd86d0355cea40449883aa90c5f276c82f54c4b46",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角兔猎人皮裤",
        "name_en": "Jackalope Hunter Chaps",
        "description_zh": "老尼克声称这些猎奇裤子会让鹿角兔感到恐惧。然而，不止它们。",
        "description_en": "Old Nick claims these bizarre trousers are terrifying Jackalopes. However, not only them.",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "史诗",
        "search_text": "wls2_easter_22_armor_legs_7_epic 鹿角兔猎人皮裤 jackalope hunter chaps 老尼克声称这些猎奇裤子会让鹿角兔感到恐惧。然而，不止它们。 old nick claims these bizarre trousers are terrifying jackalopes. however, not only them. armor 护甲 legs armor legs armor_storage festive"
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
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": {
        "inventory_id": "wls2_backpack_15_slots",
        "second_quick_cell_enabled": true,
        "shop_pack_description": "ui_offer_inventory_backpack_15_cells_label"
      },
      "backpack_id": "wls2_backpack_15_quick",
      "bodypart": 27,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15_quick",
        "bodypart": 27,
        "description": "inventory_stack_view_wls2_easter_22_backpack_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_easter_22_backpack_description",
        "name": "inventory_stack_view_wls2_easter_22_backpack_name",
        "rarity": "epic",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary06/wls2_easter_22_backpack",
        "tags": [
          "backpack",
          "armor_storage",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_easter_22_backpack",
      "localization": {
        "description_key": "inventory_stack_view_wls2_easter_22_backpack_description",
        "en": {
          "description": "A battered backpack with a gold horseshoe. They say Jill won it in a card game from a cowboy named Luke.",
          "full_description": "A battered backpack with a gold horseshoe. They say Jill won it in a card game from a cowboy named Luke.",
          "name": "Lucky Backpack"
        },
        "full_description_key": "inventory_stack_view_wls2_easter_22_backpack_description",
        "name_key": "inventory_stack_view_wls2_easter_22_backpack_name",
        "zh": {
          "description": "带有银马掌的破背包。他们说这是吉尔从一个名叫卢克的牛仔那里赢的。",
          "full_description": "带有银马掌的破背包。他们说这是吉尔从一个名叫卢克的牛仔那里赢的。",
          "name": "幸运背包"
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
                "wls2_resourse_fourfold_instruments_4": 20,
                "wls2_resourse_fourfold_nails_4": 20,
                "wls2_resourse_secondary_leather_4": 20
              },
              "result": {
                "inventory_stack_id": "wls2_easter_22_backpack"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_easter_22_backpack_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_easter_24_currency_egg": 1500
              },
              "result": {
                "inventory_stack_id": "wls2_easter_22_backpack",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter_22_trader_easter_backpack"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_12_a",
            "durability_factor": 0.9,
            "level_max": 80,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_easter_22_backpack",
            "transaction_id": "transaction_iap_wls_15_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.9,
            "level_min": 81,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_easter_22_backpack",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_easter_22_backpack",
      "stat_curves": {
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
        },
        "reduced_detection_radius": {
          "1": 0.04,
          "2": 0.06,
          "3": 0.08,
          "4": 0.1,
          "5": 0.12
        },
        "strength": {
          "1": 15,
          "2": 20,
          "3": 25,
          "4": 30,
          "5": 35
        }
      },
      "stat_labels": {
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
        }
      },
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "image_key": "68e20d05bd4254b8c69db4b7716c0b29369f5c14ffc56f04ef7bcc9c548186d6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幸运背包",
        "name_en": "Lucky Backpack",
        "description_zh": "带有银马掌的破背包。他们说这是吉尔从一个名叫卢克的牛仔那里赢的。",
        "description_en": "A battered backpack with a gold horseshoe. They say Jill won it in a card game from a cowboy named Luke.",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "史诗",
        "search_text": "wls2_easter_22_backpack 幸运背包 lucky backpack 带有银马掌的破背包。他们说这是吉尔从一个名叫卢克的牛仔那里赢的。 a battered backpack with a gold horseshoe. they say jill won it in a card game from a cowboy named luke. backpack 背包 backpack backpack armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "inventory_size",
            "label": "背包容量",
            "value": 15,
            "unit": "格",
            "display": "15 格"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 100,
            "unit": "",
            "display": "100"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": 15,
            "unit": "",
            "display": "+15"
          },
          {
            "key": "reduced_detection_radius",
            "label": "隐蔽加成",
            "value": 0.04,
            "unit": "%",
            "display": "+4%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "reduced_detection_radius": 0.04,
              "strength": 15
            },
            "display": {
              "reduced_detection_radius": "+4%",
              "strength": "+15"
            }
          },
          {
            "level": 2,
            "values": {
              "reduced_detection_radius": 0.06,
              "strength": 20
            },
            "display": {
              "reduced_detection_radius": "+6%",
              "strength": "+20"
            }
          },
          {
            "level": 3,
            "values": {
              "reduced_detection_radius": 0.08,
              "strength": 25
            },
            "display": {
              "reduced_detection_radius": "+8%",
              "strength": "+25"
            }
          },
          {
            "level": 4,
            "values": {
              "reduced_detection_radius": 0.1,
              "strength": 30
            },
            "display": {
              "reduced_detection_radius": "+10%",
              "strength": "+30"
            }
          },
          {
            "level": 5,
            "values": {
              "reduced_detection_radius": 0.12,
              "strength": 35
            },
            "display": {
              "reduced_detection_radius": "+12%",
              "strength": "+35"
            }
          }
        ],
        "columns": [
          {
            "key": "reduced_detection_radius",
            "label": "隐蔽加成",
            "unit": "%"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "unit": ""
          }
        ],
        "notes": [],
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
      "backpack": {
        "additional_slot_tags": {
          "food": 3,
          "tool": 2
        },
        "inventory_id": "wls2_backpack_15_slots",
        "second_quick_cell_enabled": true,
        "shop_pack_description": "ui_offer_inventory_backpack_t6_15_cells_label"
      },
      "backpack_id": "wls2_backpack_15_quick_all",
      "bodypart": 27,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15_quick_all",
        "bodypart": 27,
        "description": "inventory_stack_view_wls2_easter_22_backpack_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_easter_22_backpack_description",
        "name": "inventory_stack_view_wls2_easter_22_backpack_name",
        "rarity": "epic",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary06/wls2_easter_22_backpack",
        "tags": [
          "backpack",
          "armor_storage",
          "festive"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_easter_backpack_6",
      "localization": {
        "description_key": "inventory_stack_view_wls2_easter_22_backpack_description",
        "en": {
          "description": "A battered backpack with a gold horseshoe. They say Jill won it in a card game from a cowboy named Luke.",
          "full_description": "A battered backpack with a gold horseshoe. They say Jill won it in a card game from a cowboy named Luke.",
          "name": "Lucky Backpack"
        },
        "full_description_key": "inventory_stack_view_wls2_easter_22_backpack_description",
        "name_key": "inventory_stack_view_wls2_easter_22_backpack_name",
        "zh": {
          "description": "带有银马掌的破背包。他们说这是吉尔从一个名叫卢克的牛仔那里赢的。",
          "full_description": "带有银马掌的破背包。他们说这是吉尔从一个名叫卢克的牛仔那里赢的。",
          "name": "幸运背包"
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
      "sprite": "UI_WW_AlphaBinary06/wls2_easter_22_backpack",
      "stat_curves": {
        "health_increment": {
          "1": 100,
          "2": 200,
          "3": 300,
          "4": 400,
          "5": 500,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
        },
        "reduced_detection_radius": {
          "1": 0.04,
          "2": 0.06,
          "3": 0.08,
          "4": 0.1,
          "5": 0.12
        },
        "strength": {
          "1": 15,
          "2": 20,
          "3": 25,
          "4": 30,
          "5": 35
        }
      },
      "stat_labels": {
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
        }
      },
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "image_key": "68e20d05bd4254b8c69db4b7716c0b29369f5c14ffc56f04ef7bcc9c548186d6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幸运背包",
        "name_en": "Lucky Backpack",
        "description_zh": "带有银马掌的破背包。他们说这是吉尔从一个名叫卢克的牛仔那里赢的。",
        "description_en": "A battered backpack with a gold horseshoe. They say Jill won it in a card game from a cowboy named Luke.",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "史诗",
        "search_text": "wls2_easter_backpack_6 幸运背包 lucky backpack 带有银马掌的破背包。他们说这是吉尔从一个名叫卢克的牛仔那里赢的。 a battered backpack with a gold horseshoe. they say jill won it in a card game from a cowboy named luke. backpack 背包 backpack backpack armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "inventory_size",
            "label": "背包容量",
            "value": 15,
            "unit": "格",
            "display": "15 格"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 100,
            "unit": "",
            "display": "100"
          },
          {
            "key": "health_increment",
            "label": "生命加成",
            "value": 100,
            "unit": "",
            "display": "+100"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": 15,
            "unit": "",
            "display": "+15"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "health_increment": 100,
              "reduced_detection_radius": 0.04,
              "strength": 15
            },
            "display": {
              "health_increment": "+100",
              "reduced_detection_radius": "+4%",
              "strength": "+15"
            }
          },
          {
            "level": 2,
            "values": {
              "health_increment": 200,
              "reduced_detection_radius": 0.06,
              "strength": 20
            },
            "display": {
              "health_increment": "+200",
              "reduced_detection_radius": "+6%",
              "strength": "+20"
            }
          },
          {
            "level": 3,
            "values": {
              "health_increment": 300,
              "reduced_detection_radius": 0.08,
              "strength": 25
            },
            "display": {
              "health_increment": "+300",
              "reduced_detection_radius": "+8%",
              "strength": "+25"
            }
          },
          {
            "level": 4,
            "values": {
              "health_increment": 400,
              "reduced_detection_radius": 0.1,
              "strength": 30
            },
            "display": {
              "health_increment": "+400",
              "reduced_detection_radius": "+10%",
              "strength": "+30"
            }
          },
          {
            "level": 5,
            "values": {
              "health_increment": 500,
              "reduced_detection_radius": 0.12,
              "strength": 35
            },
            "display": {
              "health_increment": "+500",
              "reduced_detection_radius": "+12%",
              "strength": "+35"
            }
          },
          {
            "level": 6,
            "values": {
              "health_increment": 501,
              "reduced_detection_radius": 0.12,
              "strength": 35
            },
            "display": {
              "health_increment": "+501",
              "reduced_detection_radius": "+12%",
              "strength": "+35"
            }
          }
        ],
        "columns": [
          {
            "key": "health_increment",
            "label": "生命加成",
            "unit": ""
          },
          {
            "key": "reduced_detection_radius",
            "label": "隐蔽加成",
            "unit": "%"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "unit": ""
          }
        ],
        "notes": [
          "生命加成：6 级起每级增加 1，最高 +1500。"
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
      "backpack": {
        "additional_slot_tags": {
          "food": 3,
          "pet_bait": 1,
          "tool": 4,
          "transport_fuel": 1,
          "wls2_tools_tnt_1": 1
        },
        "inventory_id": "wls2_backpack_15_slots",
        "second_quick_cell_enabled": true,
        "shop_pack_description": "ui_offer_inventory_backpack_t7_15_cells_label"
      },
      "backpack_id": "wls2_backpack_15_quick_10_slots",
      "bodypart": 27,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15_quick_10_slots",
        "bodypart": 27,
        "description": "inventory_stack_view_wls2_easter_22_backpack_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_easter_22_backpack_description",
        "name": "inventory_stack_view_wls2_easter_22_backpack_name",
        "rarity": "epic",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary06/wls2_easter_22_backpack",
        "tags": [
          "backpack",
          "armor_storage",
          "festive"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_easter_backpack_7",
      "localization": {
        "description_key": "inventory_stack_view_wls2_easter_22_backpack_description",
        "en": {
          "description": "A battered backpack with a gold horseshoe. They say Jill won it in a card game from a cowboy named Luke.",
          "full_description": "A battered backpack with a gold horseshoe. They say Jill won it in a card game from a cowboy named Luke.",
          "name": "Lucky Backpack"
        },
        "full_description_key": "inventory_stack_view_wls2_easter_22_backpack_description",
        "name_key": "inventory_stack_view_wls2_easter_22_backpack_name",
        "zh": {
          "description": "带有银马掌的破背包。他们说这是吉尔从一个名叫卢克的牛仔那里赢的。",
          "full_description": "带有银马掌的破背包。他们说这是吉尔从一个名叫卢克的牛仔那里赢的。",
          "name": "幸运背包"
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
      "sprite": "UI_WW_AlphaBinary06/wls2_easter_22_backpack",
      "stat_curves": {
        "health_increment": {
          "1": 100,
          "2": 200,
          "3": 300,
          "4": 400,
          "5": 500,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
        },
        "reduced_detection_radius": {
          "1": 0.04,
          "2": 0.06,
          "3": 0.08,
          "4": 0.1,
          "5": 0.12
        },
        "strength": {
          "1": 15,
          "2": 20,
          "3": 25,
          "4": 30,
          "5": 35
        }
      },
      "stat_labels": {
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
        }
      },
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "image_key": "68e20d05bd4254b8c69db4b7716c0b29369f5c14ffc56f04ef7bcc9c548186d6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幸运背包",
        "name_en": "Lucky Backpack",
        "description_zh": "带有银马掌的破背包。他们说这是吉尔从一个名叫卢克的牛仔那里赢的。",
        "description_en": "A battered backpack with a gold horseshoe. They say Jill won it in a card game from a cowboy named Luke.",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "史诗",
        "search_text": "wls2_easter_backpack_7 幸运背包 lucky backpack 带有银马掌的破背包。他们说这是吉尔从一个名叫卢克的牛仔那里赢的。 a battered backpack with a gold horseshoe. they say jill won it in a card game from a cowboy named luke. backpack 背包 backpack backpack armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "inventory_size",
            "label": "背包容量",
            "value": 15,
            "unit": "格",
            "display": "15 格"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 100,
            "unit": "",
            "display": "100"
          },
          {
            "key": "health_increment",
            "label": "生命加成",
            "value": 100,
            "unit": "",
            "display": "+100"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": 15,
            "unit": "",
            "display": "+15"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "health_increment": 100,
              "reduced_detection_radius": 0.04,
              "strength": 15
            },
            "display": {
              "health_increment": "+100",
              "reduced_detection_radius": "+4%",
              "strength": "+15"
            }
          },
          {
            "level": 2,
            "values": {
              "health_increment": 200,
              "reduced_detection_radius": 0.06,
              "strength": 20
            },
            "display": {
              "health_increment": "+200",
              "reduced_detection_radius": "+6%",
              "strength": "+20"
            }
          },
          {
            "level": 3,
            "values": {
              "health_increment": 300,
              "reduced_detection_radius": 0.08,
              "strength": 25
            },
            "display": {
              "health_increment": "+300",
              "reduced_detection_radius": "+8%",
              "strength": "+25"
            }
          },
          {
            "level": 4,
            "values": {
              "health_increment": 400,
              "reduced_detection_radius": 0.1,
              "strength": 30
            },
            "display": {
              "health_increment": "+400",
              "reduced_detection_radius": "+10%",
              "strength": "+30"
            }
          },
          {
            "level": 5,
            "values": {
              "health_increment": 500,
              "reduced_detection_radius": 0.12,
              "strength": 35
            },
            "display": {
              "health_increment": "+500",
              "reduced_detection_radius": "+12%",
              "strength": "+35"
            }
          },
          {
            "level": 6,
            "values": {
              "health_increment": 501,
              "reduced_detection_radius": 0.12,
              "strength": 35
            },
            "display": {
              "health_increment": "+501",
              "reduced_detection_radius": "+12%",
              "strength": "+35"
            }
          }
        ],
        "columns": [
          {
            "key": "health_increment",
            "label": "生命加成",
            "unit": ""
          },
          {
            "key": "reduced_detection_radius",
            "label": "隐蔽加成",
            "unit": "%"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "unit": ""
          }
        ],
        "notes": [
          "生命加成：6 级起每级增加 1，最高 +1500。"
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
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_halloween_1h_scythe_4_description",
        "full_description": "inventory_stack_view_wls2_halloween_1h_scythe_4_description",
        "name": "inventory_stack_view_wls2_halloween_1h_scythe_4_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_halloween_1h_scythe_4",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_1h_scythe_4"
      },
      "item_id": "wls2_halloween_1h_scythe_4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_1h_scythe_4_description",
        "en": {
          "description": "Grim and deadly, just like its name.",
          "full_description": "Grim and deadly, just like its name.",
          "name": "Funerary Pick"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_1h_scythe_4_description",
        "name_key": "inventory_stack_view_wls2_halloween_1h_scythe_4_name",
        "zh": {
          "description": "就像它的名字一样，冷酷而致命。",
          "full_description": "就像它的名字一样，冷酷而致命。",
          "name": "葬仪之选"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_ingot_4": 2,
            "wls2_resourse_secondary_leather_4": 3,
            "wls2_resourse_secondary_plank_4": 2,
            "wls_wolf_fang": 3
          },
          "is_legacy": true,
          "learn_exp": 400,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_halloween_1h_scythe_4"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_4": 2,
                "wls2_resourse_secondary_leather_4": 3,
                "wls2_resourse_secondary_plank_4": 2,
                "wls_wolf_fang": 3
              },
              "is_legacy": true,
              "learn_exp": 400,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_halloween_1h_scythe_4"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_halloween_1h_scythe_4"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_halloween_1h_scythe_4",
      "stat_curves": {
        "damage": {
          "1": 143,
          "2": 154,
          "3": 165,
          "4": 187,
          "5": 198,
          "per_level_after_max": 1
        },
        "dot_amount": {
          "1": 200,
          "2": 300,
          "3": 400,
          "4": 500,
          "5": 600
        },
        "dot_time": {
          "1": 3,
          "2": 3,
          "3": 3,
          "4": 3,
          "5": 3
        },
        "max_durability": {
          "1": 110,
          "2": 110,
          "3": 110,
          "4": 110,
          "5": 110
        },
        "penetrating_damage": {
          "1": 4,
          "2": 5,
          "3": 5,
          "4": 6,
          "5": 6
        }
      },
      "stat_labels": {
        "damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_damage",
            "tooltip_type": "weapon"
          },
          "display_key": "ui_item_stats_damage",
          "en": "Damage",
          "zh": "伤害"
        },
        "dot_amount": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name_value_format": "ui_item_stats_dot_amount",
            "second_diff_format": "ui_item_stats_diff_plus_format",
            "second_value": "dot_time",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special"
          },
          "display_key": "ui_item_stats_dot_amount",
          "en": "Deals {0} damage over {1} seconds",
          "zh": "在 {1} 秒内造成 {0} 伤害"
        },
        "dot_time": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "penetrating_damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_penetrating_damage",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_penetrating_damage",
          "en": "Piercing damage",
          "zh": "穿刺伤害"
        }
      },
      "subcategory": "event_melee",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.2,
        "durability_price": 1,
        "hit_empty_sounds": [
          "tomahawk_hammer_whoosh2",
          "tomahawk_hammer_whoosh2"
        ],
        "hit_sounds": [
          "crow_war_club_hit1",
          "crow_war_club_hit2"
        ],
        "hit_states": {
          "states_count": [
            0,
            1
          ],
          "type": "random"
        },
        "prefab_common_id": "@Halloween_Skull_Scythe",
        "prefab_pbr_id": "@Halloween_Skull_Scythe_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_halloween_1h_scythe_4",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.1,
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.2,
        "attacks_per_second_inferred": 0.9090909090909091,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "image_key": "ce6c0eb31767c8b96ad182981d0dd23ce21a6618398ef7b9d8581db7c19bdaa6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "葬仪之选",
        "name_en": "Funerary Pick",
        "description_zh": "就像它的名字一样，冷酷而致命。",
        "description_en": "Grim and deadly, just like its name.",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_1h_scythe_4 葬仪之选 funerary pick 就像它的名字一样，冷酷而致命。 grim and deadly, just like its name. weapon 武器 event_melee weapon weapon_storage quick wls2_halloween_1h_scythe_4"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 143,
            "unit": "",
            "display": "143"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.9090909090909091,
            "unit": "次/秒",
            "display": "0.91 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 110,
            "unit": "",
            "display": "110"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.2,
            "unit": "",
            "display": "1.2"
          }
        ],
        "fixed": [
          {
            "key": "dot_time",
            "label": "持续伤害时间",
            "value": 3,
            "unit": "秒",
            "display": "3 秒"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.1,
            "unit": "秒",
            "display": "1.1 秒"
          },
          {
            "key": "attack_durability_cost",
            "label": "每次攻击耐久消耗",
            "value": 1,
            "unit": "点",
            "display": "1 点"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 143,
              "dot_amount": 200,
              "penetrating_damage": 4
            },
            "display": {
              "damage": "143",
              "dot_amount": "200",
              "penetrating_damage": "4"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 154,
              "dot_amount": 300,
              "penetrating_damage": 5
            },
            "display": {
              "damage": "154",
              "dot_amount": "300",
              "penetrating_damage": "5"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 165,
              "dot_amount": 400,
              "penetrating_damage": 5
            },
            "display": {
              "damage": "165",
              "dot_amount": "400",
              "penetrating_damage": "5"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 187,
              "dot_amount": 500,
              "penetrating_damage": 6
            },
            "display": {
              "damage": "187",
              "dot_amount": "500",
              "penetrating_damage": "6"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 198,
              "dot_amount": 600,
              "penetrating_damage": 6
            },
            "display": {
              "damage": "198",
              "dot_amount": "600",
              "penetrating_damage": "6"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 199,
              "dot_amount": 600,
              "penetrating_damage": 6
            },
            "display": {
              "damage": "199",
              "dot_amount": "600",
              "penetrating_damage": "6"
            }
          }
        ],
        "columns": [
          {
            "key": "damage",
            "label": "伤害",
            "unit": ""
          },
          {
            "key": "dot_amount",
            "label": "持续伤害总量",
            "unit": ""
          },
          {
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1198。",
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
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
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_halloween_1h_sickle_3_description",
        "full_description": "inventory_stack_view_wls2_halloween_1h_sickle_3_description",
        "name": "inventory_stack_view_wls2_halloween_1h_sickle_3_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary05/wls2_halloween_1h_sickle_3",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_1h_sickle_3"
      },
      "item_id": "wls2_halloween_1h_sickle_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_1h_sickle_3_description",
        "en": {
          "description": "In some cultures this weapon's image is part of a unity symbol",
          "full_description": "In some cultures this weapon's image is part of a unity symbol",
          "name": "Bone Vow"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_1h_sickle_3_description",
        "name_key": "inventory_stack_view_wls2_halloween_1h_sickle_3_name",
        "zh": {
          "description": "在某些文化里，这种武器是团结一致的象征",
          "full_description": "在某些文化里，这种武器是团结一致的象征",
          "name": "骨誓"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_ingot_3": 2,
            "wls2_resourse_secondary_leather_3": 2,
            "wls2_resourse_secondary_plank_3": 3,
            "wls_wolf_fang": 2
          },
          "is_legacy": true,
          "learn_exp": 200,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_halloween_1h_sickle_3"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_3": 2,
                "wls2_resourse_secondary_leather_3": 2,
                "wls2_resourse_secondary_plank_3": 3,
                "wls_wolf_fang": 2
              },
              "is_legacy": true,
              "learn_exp": 200,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_halloween_1h_sickle_3"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_halloween_1h_sickle_3"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_halloween_1h_sickle_3",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.1
        },
        "damage": {
          "1": 319,
          "2": 352,
          "3": 385,
          "4": 418,
          "5": 440,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 130,
          "2": 130,
          "3": 130,
          "4": 130,
          "5": 130
        },
        "slow_modifier": {
          "1": 0.25,
          "2": 0.25,
          "3": 0.25,
          "4": 0.25,
          "5": 0.25
        },
        "slow_time": {
          "1": 0.5,
          "2": 0.75,
          "3": 1,
          "4": 1.25,
          "5": 1.5
        }
      },
      "stat_labels": {
        "bandit_damage_modifier": {
          "definition": {
            "is_percent": true,
            "name": "ui_item_stats_damage_to_bandits",
            "name_value_format": "ui_item_stats_damage_to_bandits",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_damage_to_bandits",
          "en": "{0} additional damage to bandits",
          "zh": "{0} 额外 伤害 给 强盗"
        },
        "damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_damage",
            "tooltip_type": "weapon"
          },
          "display_key": "ui_item_stats_damage",
          "en": "Damage",
          "zh": "伤害"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "slow_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_slow_modifier",
            "second_diff_format": "ui_item_stats_diff_plus_format",
            "second_value": "slow_time",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_slow_modifier",
          "en": "Slows target by {0} for {1} sec",
          "zh": "使目标减速 {0}，持续 {1} 秒"
        },
        "slow_time": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "event_melee",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.4,
        "attack_range": 1.2,
        "durability_price": 1,
        "hit_empty_sounds": [
          "dag_knife_whoosh1",
          "dag_knife_whoosh2"
        ],
        "hit_sounds": [
          "dag_knife_hit1",
          "dag_knife_hit2"
        ],
        "hit_states": {
          "states_count": [
            0,
            2
          ],
          "type": "random"
        },
        "prefab_common_id": "@Halloween_Skull_Sickle_2",
        "prefab_pbr_id": "@Halloween_Skull_Sickle_2_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_halloween_1h_sickle_3",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.9,
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.4,
        "attack_range": 1.2,
        "attacks_per_second_inferred": 1.1111111111111112,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "image_key": "0722f4fc2acf4e92034ce7bf674cc9bcbc53dc93921fa49cbb3ec0ef2469e4c9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "骨誓",
        "name_en": "Bone Vow",
        "description_zh": "在某些文化里，这种武器是团结一致的象征",
        "description_en": "In some cultures this weapon's image is part of a unity symbol",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_1h_sickle_3 骨誓 bone vow 在某些文化里，这种武器是团结一致的象征 in some cultures this weapon's image is part of a unity symbol weapon 武器 event_melee weapon weapon_storage quick wls2_halloween_1h_sickle_3"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 319,
            "unit": "",
            "display": "319"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 1.1111111111111112,
            "unit": "次/秒",
            "display": "1.11 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 130,
            "unit": "",
            "display": "130"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.2,
            "unit": "",
            "display": "1.2"
          }
        ],
        "fixed": [
          {
            "key": "bandit_damage_modifier",
            "label": "对强盗伤害加成",
            "value": 0.1,
            "unit": "%",
            "display": "10%"
          },
          {
            "key": "slow_modifier",
            "label": "目标减速",
            "value": 0.25,
            "unit": "%",
            "display": "25%"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 0.9,
            "unit": "秒",
            "display": "0.9 秒"
          },
          {
            "key": "attack_durability_cost",
            "label": "每次攻击耐久消耗",
            "value": 1,
            "unit": "点",
            "display": "1 点"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 319,
              "slow_time": 0.5
            },
            "display": {
              "damage": "319",
              "slow_time": "0.5 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 352,
              "slow_time": 0.75
            },
            "display": {
              "damage": "352",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 385,
              "slow_time": 1
            },
            "display": {
              "damage": "385",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 418,
              "slow_time": 1.25
            },
            "display": {
              "damage": "418",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 440,
              "slow_time": 1.5
            },
            "display": {
              "damage": "440",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 441,
              "slow_time": 1.5
            },
            "display": {
              "damage": "441",
              "slow_time": "1.5 秒"
            }
          }
        ],
        "columns": [
          {
            "key": "damage",
            "label": "伤害",
            "unit": ""
          },
          {
            "key": "slow_time",
            "label": "减速持续时间",
            "unit": "秒"
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1440。",
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
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
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_halloween_1h_sword_4_description",
        "full_description": "inventory_stack_view_wls2_halloween_1h_sword_4_description",
        "name": "inventory_stack_view_wls2_halloween_1h_sword_4_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_halloween_1h_sword_4",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_1h_sword_4"
      },
      "item_id": "wls2_halloween_1h_sword_4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_1h_sword_4_description",
        "en": {
          "description": "Quite an uncommon sword with a highly dangerous blade",
          "full_description": "Quite an uncommon sword with a highly dangerous blade",
          "name": "Flesh Seeker"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_1h_sword_4_description",
        "name_key": "inventory_stack_view_wls2_halloween_1h_sword_4_name",
        "zh": {
          "description": "一把相当不寻常的剑，剑刃非常危险。",
          "full_description": "一把相当不寻常的剑，剑刃非常危险。",
          "name": "寻肉者"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_ingot_4": 3,
            "wls2_resourse_secondary_leather_4": 3,
            "wls2_resourse_secondary_plank_4": 3,
            "wls_wolf_fang": 3
          },
          "is_legacy": true,
          "learn_exp": 400,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_halloween_1h_sword_4"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_4": 3,
                "wls2_resourse_secondary_leather_4": 3,
                "wls2_resourse_secondary_plank_4": 3,
                "wls_wolf_fang": 3
              },
              "is_legacy": true,
              "learn_exp": 400,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_halloween_1h_sword_4"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_halloween_1h_sword_4"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_halloween_1h_sword_4",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.2
        },
        "damage": {
          "1": 242,
          "2": 275,
          "3": 297,
          "4": 319,
          "5": 352,
          "per_level_after_max": 1
        },
        "dot_amount": {
          "1": 50,
          "2": 100,
          "3": 150,
          "4": 200,
          "5": 250
        },
        "dot_time": {
          "1": 3,
          "2": 3,
          "3": 3,
          "4": 3,
          "5": 3
        },
        "max_durability": {
          "1": 126,
          "2": 126,
          "3": 126,
          "4": 126,
          "5": 126
        },
        "penetrating_damage": {
          "1": 7,
          "2": 8,
          "3": 9,
          "4": 10,
          "5": 11
        },
        "slow_modifier": {
          "1": 0.1,
          "2": 0.1,
          "3": 0.1,
          "4": 0.1,
          "5": 0.1
        },
        "slow_time": {
          "1": 0.5,
          "2": 0.75,
          "3": 1,
          "4": 1.25,
          "5": 1.5
        }
      },
      "stat_labels": {
        "animal_damage_modifier": {
          "definition": {
            "is_percent": true,
            "name": "ui_item_stats_damage_to_animals",
            "name_value_format": "ui_item_stats_damage_to_animals",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_damage_to_animals",
          "en": "{0} additional damage to animals",
          "zh": "对动物的{0}额外伤害"
        },
        "damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_damage",
            "tooltip_type": "weapon"
          },
          "display_key": "ui_item_stats_damage",
          "en": "Damage",
          "zh": "伤害"
        },
        "dot_amount": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name_value_format": "ui_item_stats_dot_amount",
            "second_diff_format": "ui_item_stats_diff_plus_format",
            "second_value": "dot_time",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special"
          },
          "display_key": "ui_item_stats_dot_amount",
          "en": "Deals {0} damage over {1} seconds",
          "zh": "在 {1} 秒内造成 {0} 伤害"
        },
        "dot_time": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "penetrating_damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_penetrating_damage",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_penetrating_damage",
          "en": "Piercing damage",
          "zh": "穿刺伤害"
        },
        "slow_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_slow_modifier",
            "second_diff_format": "ui_item_stats_diff_plus_format",
            "second_value": "slow_time",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_slow_modifier",
          "en": "Slows target by {0} for {1} sec",
          "zh": "使目标减速 {0}，持续 {1} 秒"
        },
        "slow_time": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "event_melee",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 1,
        "attack_range": 1.2,
        "durability_price": 1,
        "hit_empty_sounds": [
          "iron_thing_whoosh2",
          "iron_thing_whoosh1"
        ],
        "hit_sounds": [
          "iron_thing_hit1",
          "iron_thing_hit2"
        ],
        "hit_states": {
          "states_count": [
            1,
            2
          ],
          "type": "random"
        },
        "prefab_common_id": "@Halloween_Skull_Sickle_1",
        "prefab_pbr_id": "@Halloween_Skull_Sickle_1_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_halloween_1h_sword_4",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.5,
        "attack_damage_time": 0.5,
        "attack_ending_time": 1,
        "attack_range": 1.2,
        "attacks_per_second_inferred": 0.6666666666666666,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "image_key": "4ce20aa9236b716c71b92b181c5c8feb9bca4ba391c79d54cbc4bb0e324a5298",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "寻肉者",
        "name_en": "Flesh Seeker",
        "description_zh": "一把相当不寻常的剑，剑刃非常危险。",
        "description_en": "Quite an uncommon sword with a highly dangerous blade",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_1h_sword_4 寻肉者 flesh seeker 一把相当不寻常的剑，剑刃非常危险。 quite an uncommon sword with a highly dangerous blade weapon 武器 event_melee weapon weapon_storage quick wls2_halloween_1h_sword_4"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 242,
            "unit": "",
            "display": "242"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.6666666666666666,
            "unit": "次/秒",
            "display": "0.67 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 126,
            "unit": "",
            "display": "126"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.2,
            "unit": "",
            "display": "1.2"
          }
        ],
        "fixed": [
          {
            "key": "animal_damage_modifier",
            "label": "对动物伤害加成",
            "value": 0.2,
            "unit": "%",
            "display": "20%"
          },
          {
            "key": "dot_time",
            "label": "持续伤害时间",
            "value": 3,
            "unit": "秒",
            "display": "3 秒"
          },
          {
            "key": "slow_modifier",
            "label": "目标减速",
            "value": 0.1,
            "unit": "%",
            "display": "10%"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.5,
            "unit": "秒",
            "display": "1.5 秒"
          },
          {
            "key": "attack_durability_cost",
            "label": "每次攻击耐久消耗",
            "value": 1,
            "unit": "点",
            "display": "1 点"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 242,
              "dot_amount": 50,
              "penetrating_damage": 7,
              "slow_time": 0.5
            },
            "display": {
              "damage": "242",
              "dot_amount": "50",
              "penetrating_damage": "7",
              "slow_time": "0.5 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 275,
              "dot_amount": 100,
              "penetrating_damage": 8,
              "slow_time": 0.75
            },
            "display": {
              "damage": "275",
              "dot_amount": "100",
              "penetrating_damage": "8",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 297,
              "dot_amount": 150,
              "penetrating_damage": 9,
              "slow_time": 1
            },
            "display": {
              "damage": "297",
              "dot_amount": "150",
              "penetrating_damage": "9",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 319,
              "dot_amount": 200,
              "penetrating_damage": 10,
              "slow_time": 1.25
            },
            "display": {
              "damage": "319",
              "dot_amount": "200",
              "penetrating_damage": "10",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 352,
              "dot_amount": 250,
              "penetrating_damage": 11,
              "slow_time": 1.5
            },
            "display": {
              "damage": "352",
              "dot_amount": "250",
              "penetrating_damage": "11",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 353,
              "dot_amount": 250,
              "penetrating_damage": 11,
              "slow_time": 1.5
            },
            "display": {
              "damage": "353",
              "dot_amount": "250",
              "penetrating_damage": "11",
              "slow_time": "1.5 秒"
            }
          }
        ],
        "columns": [
          {
            "key": "damage",
            "label": "伤害",
            "unit": ""
          },
          {
            "key": "dot_amount",
            "label": "持续伤害总量",
            "unit": ""
          },
          {
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "unit": ""
          },
          {
            "key": "slow_time",
            "label": "减速持续时间",
            "unit": "秒"
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1352。",
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
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
      "bodypart": 19,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 19,
        "description": "inventory_stack_view_wls2_halloween_21_whitecreast_body_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_21_whitecreast_body_description",
        "name": "inventory_stack_view_wls2_halloween_body_name",
        "rarity": "common",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_armor_body_3",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_21_armor_body_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_21_whitecreast_body_description",
        "en": {
          "description": "Experienced Pumpkin harvestor jacket. Claude Whitecrest's gift.",
          "full_description": "Experienced Pumpkin harvestor jacket. Claude Whitecrest's gift.",
          "name": "Whitecrest armor"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_21_whitecreast_body_description",
        "name_key": "inventory_stack_view_wls2_halloween_body_name",
        "zh": {
          "description": "经验丰富的南瓜猎人的盔甲。克劳德·白峰的赠礼。",
          "full_description": "经验丰富的南瓜猎人的盔甲。克劳德·白峰的赠礼。",
          "name": "白峰护甲"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
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
                "inventory_stack_id": "wls2_halloween_21_armor_body_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_armor_body_3_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 300
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_armor_body_3",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_armor_body_3"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_armor_body_3",
      "stat_curves": {
        "armor": {
          "1": 150,
          "2": 170,
          "3": 180,
          "4": 205,
          "5": 220,
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
          "1": 2042,
          "2": 2246,
          "3": 2450,
          "4": 2655,
          "5": 2859
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
      "image_key": "a7976e8cba44799bab58d3e460f3bc2fd012ad03d2ea0d804f57e8c3ec59920d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "白峰护甲",
        "name_en": "Whitecrest armor",
        "description_zh": "经验丰富的南瓜猎人的盔甲。克劳德·白峰的赠礼。",
        "description_en": "Experienced Pumpkin harvestor jacket. Claude Whitecrest's gift.",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_21_armor_body_3 白峰护甲 whitecrest armor 经验丰富的南瓜猎人的盔甲。克劳德·白峰的赠礼。 experienced pumpkin harvestor jacket. claude whitecrest's gift. armor 护甲 body chest armor armor_storage"
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
            "value": 2042,
            "unit": "",
            "display": "2042"
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
              "armor": 150,
              "max_durability": 2042
            },
            "display": {
              "armor": "150",
              "max_durability": "2042"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 170,
              "max_durability": 2246
            },
            "display": {
              "armor": "170",
              "max_durability": "2246"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 180,
              "max_durability": 2450
            },
            "display": {
              "armor": "180",
              "max_durability": "2450"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 205,
              "max_durability": 2655
            },
            "display": {
              "armor": "205",
              "max_durability": "2655"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 220,
              "max_durability": 2859
            },
            "display": {
              "armor": "220",
              "max_durability": "2859"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 221,
              "max_durability": 2859
            },
            "display": {
              "armor": "221",
              "max_durability": "2859"
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
          "防御：6 级起每级增加 1，最高 1220。"
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
      "bodypart": 6,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 6,
        "description": "inventory_stack_view_wls2_halloween_21_armor_body_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_21_armor_body_4_epic_description",
        "name": "inventory_stack_view_wls2_halloween_21_armor_body_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_improved_armored_jacket",
        "tags": [
          "chest",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_21_armor_body_4_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_21_armor_body_4_epic_description",
        "en": {
          "description": "Award for saving the Harvest Fair. Let everyone be jealous!",
          "full_description": "Award for saving the Harvest Fair. Let everyone be jealous!",
          "name": "Pumpkin Buster Jacket"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_21_armor_body_4_epic_description",
        "name_key": "inventory_stack_view_wls2_halloween_21_armor_body_4_epic_name",
        "zh": {
          "description": "挽救丰收集市的奖励。所有人都眼红！",
          "full_description": "挽救丰收集市的奖励。所有人都眼红！",
          "name": "南瓜小鬼夹克"
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
                "inventory_stack_id": "wls2_halloween_21_armor_body_4_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_armor_body_4_epic_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_improved_armored_jacket",
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
          "2": 9185,
          "3": 10020,
          "4": 10854,
          "5": 11689
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
      "image_key": "6f6e98e7d41703f64835798ff6f4de5981bddb7a0dc968cfb7e439e89927d326",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜小鬼夹克",
        "name_en": "Pumpkin Buster Jacket",
        "description_zh": "挽救丰收集市的奖励。所有人都眼红！",
        "description_en": "Award for saving the Harvest Fair. Let everyone be jealous!",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_halloween_21_armor_body_4_epic 南瓜小鬼夹克 pumpkin buster jacket 挽救丰收集市的奖励。所有人都眼红！ award for saving the harvest fair. let everyone be jealous! armor 护甲 body chest armor armor_storage festive"
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
              "max_durability": 9185
            },
            "display": {
              "armor": "462",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "health_increment": "+45",
              "max_durability": "9185"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 504,
              "dexterity": 6,
              "firearm_resistance": 0.06,
              "health_increment": 55,
              "max_durability": 10020
            },
            "display": {
              "armor": "504",
              "dexterity": "+6",
              "firearm_resistance": "+6%",
              "health_increment": "+55",
              "max_durability": "10020"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 546,
              "dexterity": 8,
              "firearm_resistance": 0.08,
              "health_increment": 65,
              "max_durability": 10854
            },
            "display": {
              "armor": "546",
              "dexterity": "+8",
              "firearm_resistance": "+8%",
              "health_increment": "+65",
              "max_durability": "10854"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 588,
              "dexterity": 10,
              "firearm_resistance": 0.1,
              "health_increment": 75,
              "max_durability": 11689
            },
            "display": {
              "armor": "588",
              "dexterity": "+10",
              "firearm_resistance": "+10%",
              "health_increment": "+75",
              "max_durability": "11689"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 589,
              "dexterity": 10,
              "firearm_resistance": 0.1,
              "health_increment": 75,
              "max_durability": 11689
            },
            "display": {
              "armor": "589",
              "dexterity": "+10",
              "firearm_resistance": "+10%",
              "health_increment": "+75",
              "max_durability": "11689"
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
      "bodypart": 20,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 20,
        "description": "inventory_stack_view_wls2_halloween_21_whitecreast_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_21_whitecreast_boots_description",
        "name": "inventory_stack_view_wls2_halloween_boots_name",
        "rarity": "common",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_armor_boots_3",
        "tags": [
          "armor",
          "boots",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_21_armor_boots_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_21_whitecreast_boots_description",
        "en": {
          "description": "Experienced Pumpkin harvestor boots. Claude Whitecrest's gift.",
          "full_description": "Experienced Pumpkin harvestor boots. Claude Whitecrest's gift.",
          "name": "Whitecrest boots"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_21_whitecreast_boots_description",
        "name_key": "inventory_stack_view_wls2_halloween_boots_name",
        "zh": {
          "description": "经验丰富的南瓜猎人的靴子。克劳德·白峰的赠礼。",
          "full_description": "经验丰富的南瓜猎人的靴子。克劳德·白峰的赠礼。",
          "name": "白峰靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_leather_3": 2,
                "wls2_resourse_secondary_rope_3": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_armor_boots_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_armor_boots_3_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 300
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_armor_boots_3",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_armor_boots_3"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_armor_boots_3",
      "stat_curves": {
        "armor": {
          "1": 20,
          "2": 25,
          "3": 30,
          "4": 35,
          "5": 40,
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
          "1": 1114,
          "2": 1225,
          "3": 1337,
          "4": 1448,
          "5": 1559
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
      "image_key": "90e3dab5e16583386df2d72ae3042e0de5909ff4487b185487dcd9b6596b364e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "白峰靴子",
        "name_en": "Whitecrest boots",
        "description_zh": "经验丰富的南瓜猎人的靴子。克劳德·白峰的赠礼。",
        "description_en": "Experienced Pumpkin harvestor boots. Claude Whitecrest's gift.",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_21_armor_boots_3 白峰靴子 whitecrest boots 经验丰富的南瓜猎人的靴子。克劳德·白峰的赠礼。 experienced pumpkin harvestor boots. claude whitecrest's gift. armor 护甲 boots armor boots armor_storage"
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
            "value": 1114,
            "unit": "",
            "display": "1114"
          },
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
            "value": 0.1,
            "unit": "%",
            "display": "+10%"
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
              "armor": 20,
              "max_durability": 1114
            },
            "display": {
              "armor": "20",
              "max_durability": "1114"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 25,
              "max_durability": 1225
            },
            "display": {
              "armor": "25",
              "max_durability": "1225"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 30,
              "max_durability": 1337
            },
            "display": {
              "armor": "30",
              "max_durability": "1337"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 35,
              "max_durability": 1448
            },
            "display": {
              "armor": "35",
              "max_durability": "1448"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 40,
              "max_durability": 1559
            },
            "display": {
              "armor": "40",
              "max_durability": "1559"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 41,
              "max_durability": 1559
            },
            "display": {
              "armor": "41",
              "max_durability": "1559"
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
          "防御：6 级起每级增加 1，最高 1040。"
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
      "bodypart": 6,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 6,
        "description": "inventory_stack_view_wls2_wls2_halloween_21_armor_boots_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_wls2_halloween_21_armor_boots_4_epic_description",
        "name": "inventory_stack_view_wls2_halloween_21_armor_boots_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_superior_armored_boots",
        "tags": [
          "armor",
          "boots",
          "armor_storage",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_21_armor_boots_4_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_wls2_halloween_21_armor_boots_4_epic_description",
        "en": {
          "description": null,
          "full_description": null,
          "name": "Pumpkin Buster Boots"
        },
        "full_description_key": "inventory_stack_view_wls2_wls2_halloween_21_armor_boots_4_epic_description",
        "name_key": "inventory_stack_view_wls2_halloween_21_armor_boots_4_epic_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "南瓜小鬼靴子"
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
                "wls2_resourse_secondary_leather_4": 4,
                "wls2_resourse_secondary_rope_4": 4
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_armor_boots_4_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_armor_boots_4_epic_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_superior_armored_boots",
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
          "1": 6262,
          "2": 6888,
          "3": 7515,
          "4": 8141,
          "5": 8767
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
      "image_key": "fdfedf9e4be60aed8376521327cec4edea0c6317253463a118d35535ea8635a4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜小鬼靴子",
        "name_en": "Pumpkin Buster Boots",
        "description_zh": "",
        "description_en": "",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_halloween_21_armor_boots_4_epic 南瓜小鬼靴子 pumpkin buster boots armor 护甲 boots armor boots armor_storage festive"
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
            "value": 6262,
            "unit": "",
            "display": "6262"
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
              "max_durability": 6262
            },
            "display": {
              "armor": "120",
              "dexterity": "+2",
              "firearm_resistance": "+2%",
              "health_increment": "+35",
              "max_durability": "6262"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 132,
              "dexterity": 4,
              "firearm_resistance": 0.04,
              "health_increment": 45,
              "max_durability": 6888
            },
            "display": {
              "armor": "132",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "health_increment": "+45",
              "max_durability": "6888"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 144,
              "dexterity": 6,
              "firearm_resistance": 0.06,
              "health_increment": 55,
              "max_durability": 7515
            },
            "display": {
              "armor": "144",
              "dexterity": "+6",
              "firearm_resistance": "+6%",
              "health_increment": "+55",
              "max_durability": "7515"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 156,
              "dexterity": 8,
              "firearm_resistance": 0.08,
              "health_increment": 65,
              "max_durability": 8141
            },
            "display": {
              "armor": "156",
              "dexterity": "+8",
              "firearm_resistance": "+8%",
              "health_increment": "+65",
              "max_durability": "8141"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 168,
              "dexterity": 10,
              "firearm_resistance": 0.1,
              "health_increment": 75,
              "max_durability": 8767
            },
            "display": {
              "armor": "168",
              "dexterity": "+10",
              "firearm_resistance": "+10%",
              "health_increment": "+75",
              "max_durability": "8767"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 169,
              "dexterity": 10,
              "firearm_resistance": 0.1,
              "health_increment": 75,
              "max_durability": 8767
            },
            "display": {
              "armor": "169",
              "dexterity": "+10",
              "firearm_resistance": "+10%",
              "health_increment": "+75",
              "max_durability": "8767"
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
      "bodypart": 23,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 23,
        "description": "inventory_stack_view_wls2_halloween_21_whitecreast_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_21_whitecreast_head_description",
        "name": "inventory_stack_view_wls2_halloween_head_name",
        "rarity": "common",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_armor_head_1",
        "tags": [
          "armor",
          "head",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_21_armor_head_1",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_21_whitecreast_head_description",
        "en": {
          "description": "Experienced Pumpkin harvestor helmet. Claude Whitecrest's gift",
          "full_description": "Experienced Pumpkin harvestor helmet. Claude Whitecrest's gift",
          "name": "Pumpkin Helmet"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_21_whitecreast_head_description",
        "name_key": "inventory_stack_view_wls2_halloween_head_name",
        "zh": {
          "description": "经验丰富的南瓜猎人头盔。 Claude Whitecrest的礼物",
          "full_description": "经验丰富的南瓜猎人头盔。 Claude Whitecrest的礼物",
          "name": "南瓜头盔"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_3": 2,
                "wls2_resourse_secondary_cloth_3": 3,
                "wls2_resourse_secondary_leather_3": 3
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_armor_head_1"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_armor_head_1_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 300
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_armor_head_1",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_armor_head_1"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_armor_head_1",
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
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "max_durability": {
          "1": 330,
          "2": 360,
          "3": 420,
          "4": 420,
          "5": 450
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
      "image_key": "050cec842c9abab557e4c5395a32ac16a9ab194a96415f9db455bea74eeaedff",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜头盔",
        "name_en": "Pumpkin Helmet",
        "description_zh": "经验丰富的南瓜猎人头盔。 Claude Whitecrest的礼物",
        "description_en": "Experienced Pumpkin harvestor helmet. Claude Whitecrest's gift",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_21_armor_head_1 南瓜头盔 pumpkin helmet 经验丰富的南瓜猎人头盔。 claude whitecrest的礼物 experienced pumpkin harvestor helmet. claude whitecrest's gift armor 护甲 head armor head armor_storage"
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
            "value": 330,
            "unit": "",
            "display": "330"
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
              "armor": 30,
              "max_durability": 330
            },
            "display": {
              "armor": "30",
              "max_durability": "330"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 33,
              "max_durability": 360
            },
            "display": {
              "armor": "33",
              "max_durability": "360"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 36,
              "max_durability": 420
            },
            "display": {
              "armor": "36",
              "max_durability": "420"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 39,
              "max_durability": 420
            },
            "display": {
              "armor": "39",
              "max_durability": "420"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 42,
              "max_durability": 450
            },
            "display": {
              "armor": "42",
              "max_durability": "450"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 43,
              "max_durability": 450
            },
            "display": {
              "armor": "43",
              "max_durability": "450"
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
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 6,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 6,
        "description": "inventory_stack_view_wls2_halloween_21_armor_head_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_21_armor_head_4_epic_description",
        "name": "inventory_stack_view_wls2_halloween_21_armor_head_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_improved_armored_hat",
        "tags": [
          "armor",
          "head",
          "armor_storage",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_21_armor_head_4_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_21_armor_head_4_epic_description",
        "en": {
          "description": "Reward for saving the Harvest Fair. Let everyone be jealous! Even a werewolf won’t gnaw them!",
          "full_description": "Reward for saving the Harvest Fair. Let everyone be jealous! Even a werewolf won’t gnaw them!",
          "name": "Pumpkin Buster Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_21_armor_head_4_epic_description",
        "name_key": "inventory_stack_view_wls2_halloween_21_armor_head_4_epic_name",
        "zh": {
          "description": "挽救丰收集市的奖励。所有人都眼红！狼人也舍不得啃它！",
          "full_description": "挽救丰收集市的奖励。所有人都眼红！狼人也舍不得啃它！",
          "name": "南瓜小鬼帽子"
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
                "wls2_resourse_secondary_leather_4": 4
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_armor_head_4_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_armor_head_4_epic_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 900
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_armor_head_4_epic",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_armor_boots_4_epic"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 900
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_armor_head_4_epic",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_armor_head_4_epic"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_improved_armored_hat",
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
          "1": 6898,
          "2": 7574,
          "3": 8270,
          "4": 8946,
          "5": 9642
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
      "image_key": "9065d88fc9274000f3d5ec47ea46b2d61966b453e6f56914aee8aedc88d4338b",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜小鬼帽子",
        "name_en": "Pumpkin Buster Hat",
        "description_zh": "挽救丰收集市的奖励。所有人都眼红！狼人也舍不得啃它！",
        "description_en": "Reward for saving the Harvest Fair. Let everyone be jealous! Even a werewolf won’t gnaw them!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "史诗",
        "search_text": "wls2_halloween_21_armor_head_4_epic 南瓜小鬼帽子 pumpkin buster hat 挽救丰收集市的奖励。所有人都眼红！狼人也舍不得啃它！ reward for saving the harvest fair. let everyone be jealous! even a werewolf won’t gnaw them! armor 护甲 head armor head armor_storage festive"
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
            "value": 6898,
            "unit": "",
            "display": "6898"
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
              "max_durability": 6898
            },
            "display": {
              "armor": "180",
              "dexterity": "+2",
              "firearm_resistance": "+2%",
              "health_increment": "+35",
              "max_durability": "6898"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 200,
              "dexterity": 4,
              "firearm_resistance": 0.04,
              "health_increment": 45,
              "max_durability": 7574
            },
            "display": {
              "armor": "200",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "health_increment": "+45",
              "max_durability": "7574"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 220,
              "dexterity": 6,
              "firearm_resistance": 0.06,
              "health_increment": 55,
              "max_durability": 8270
            },
            "display": {
              "armor": "220",
              "dexterity": "+6",
              "firearm_resistance": "+6%",
              "health_increment": "+55",
              "max_durability": "8270"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 230,
              "dexterity": 8,
              "firearm_resistance": 0.08,
              "health_increment": 65,
              "max_durability": 8946
            },
            "display": {
              "armor": "230",
              "dexterity": "+8",
              "firearm_resistance": "+8%",
              "health_increment": "+65",
              "max_durability": "8946"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 250,
              "dexterity": 10,
              "firearm_resistance": 0.1,
              "health_increment": 75,
              "max_durability": 9642
            },
            "display": {
              "armor": "250",
              "dexterity": "+10",
              "firearm_resistance": "+10%",
              "health_increment": "+75",
              "max_durability": "9642"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 251,
              "dexterity": 10,
              "firearm_resistance": 0.1,
              "health_increment": 75,
              "max_durability": 9642
            },
            "display": {
              "armor": "251",
              "dexterity": "+10",
              "firearm_resistance": "+10%",
              "health_increment": "+75",
              "max_durability": "9642"
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
      "bodypart": 19,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 19,
        "description": "inventory_stack_view_wls2_halloween_21_whitecreast_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_21_whitecreast_legs_description",
        "name": "inventory_stack_view_wls2_halloween_legs_name",
        "rarity": "common",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_armor_legs_3",
        "tags": [
          "armor",
          "legs",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_21_armor_legs_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_21_whitecreast_legs_description",
        "en": {
          "description": "Experienced Pumpkin harvestor pants. Claude Whitecrest's gift.",
          "full_description": "Experienced Pumpkin harvestor pants. Claude Whitecrest's gift.",
          "name": "Whitecrest pants"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_21_whitecreast_legs_description",
        "name_key": "inventory_stack_view_wls2_halloween_legs_name",
        "zh": {
          "description": "经验丰富的南瓜猎人的裤子。克劳德·白峰的赠礼。",
          "full_description": "经验丰富的南瓜猎人的裤子。克劳德·白峰的赠礼。",
          "name": "白峰裤子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
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
                "inventory_stack_id": "wls2_halloween_21_armor_legs_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_armor_legs_3_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 300
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_armor_legs_3",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_armor_legs_3"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_armor_legs_3",
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
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "max_durability": {
          "1": 1671,
          "2": 1838,
          "3": 2005,
          "4": 2172,
          "5": 2339
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
      "image_key": "bdef3d173bd7fe8e9e21cf99a3089bf9621f53961486d4b5e84997446566d668",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "白峰裤子",
        "name_en": "Whitecrest pants",
        "description_zh": "经验丰富的南瓜猎人的裤子。克劳德·白峰的赠礼。",
        "description_en": "Experienced Pumpkin harvestor pants. Claude Whitecrest's gift.",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_21_armor_legs_3 白峰裤子 whitecrest pants 经验丰富的南瓜猎人的裤子。克劳德·白峰的赠礼。 experienced pumpkin harvestor pants. claude whitecrest's gift. armor 护甲 legs armor legs armor_storage"
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
            "value": 1671,
            "unit": "",
            "display": "1671"
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
              "armor": 50,
              "max_durability": 1671
            },
            "display": {
              "armor": "50",
              "max_durability": "1671"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 55,
              "max_durability": 1838
            },
            "display": {
              "armor": "55",
              "max_durability": "1838"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 60,
              "max_durability": 2005
            },
            "display": {
              "armor": "60",
              "max_durability": "2005"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 65,
              "max_durability": 2172
            },
            "display": {
              "armor": "65",
              "max_durability": "2172"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 70,
              "max_durability": 2339
            },
            "display": {
              "armor": "70",
              "max_durability": "2339"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 71,
              "max_durability": 2339
            },
            "display": {
              "armor": "71",
              "max_durability": "2339"
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
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 6,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 6,
        "description": "inventory_stack_view_wls2_halloween_21_armor_legs_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_21_armor_legs_4_epic_description",
        "name": "inventory_stack_view_wls2_halloween_21_armor_legs_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_legs",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_superior_armored_pants",
        "tags": [
          "armor",
          "legs",
          "armor_storage",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_21_armor_legs_4_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_21_armor_legs_4_epic_description",
        "en": {
          "description": "Reward for saving the Harvest Fair. Let everyone be jealous!",
          "full_description": "Reward for saving the Harvest Fair. Let everyone be jealous!",
          "name": "Pumpkin Buster Pants"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_21_armor_legs_4_epic_description",
        "name_key": "inventory_stack_view_wls2_halloween_21_armor_legs_4_epic_name",
        "zh": {
          "description": "挽救丰收集市的奖励。所有人都眼红！",
          "full_description": "挽救丰收集市的奖励。所有人都眼红！",
          "name": "南瓜小鬼裤子"
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
                "inventory_stack_id": "wls2_halloween_21_armor_legs_4_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_armor_legs_4_epic_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 900
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_armor_legs_4_epic",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_armor_body_4_epic"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 900
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_armor_legs_4_epic",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_armor_legs_4_epic"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_superior_armored_pants",
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
          "1": 7177,
          "2": 7892,
          "3": 8608,
          "4": 9344,
          "5": 10059
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
      "image_key": "13eff8ee17ae789213e88cda82f7e166a2901cae94fc23c3ba149b4085c5b35e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜小鬼裤子",
        "name_en": "Pumpkin Buster Pants",
        "description_zh": "挽救丰收集市的奖励。所有人都眼红！",
        "description_en": "Reward for saving the Harvest Fair. Let everyone be jealous!",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "史诗",
        "search_text": "wls2_halloween_21_armor_legs_4_epic 南瓜小鬼裤子 pumpkin buster pants 挽救丰收集市的奖励。所有人都眼红！ reward for saving the harvest fair. let everyone be jealous! armor 护甲 legs armor legs armor_storage festive"
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
            "value": 7177,
            "unit": "",
            "display": "7177"
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
              "max_durability": 7177
            },
            "display": {
              "armor": "240",
              "dexterity": "+2",
              "firearm_resistance": "+2%",
              "health_increment": "+35",
              "max_durability": "7177"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 260,
              "dexterity": 4,
              "firearm_resistance": 0.04,
              "health_increment": 45,
              "max_durability": 7892
            },
            "display": {
              "armor": "260",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "health_increment": "+45",
              "max_durability": "7892"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 290,
              "dexterity": 6,
              "firearm_resistance": 0.06,
              "health_increment": 55,
              "max_durability": 8608
            },
            "display": {
              "armor": "290",
              "dexterity": "+6",
              "firearm_resistance": "+6%",
              "health_increment": "+55",
              "max_durability": "8608"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 310,
              "dexterity": 8,
              "firearm_resistance": 0.08,
              "health_increment": 65,
              "max_durability": 9344
            },
            "display": {
              "armor": "310",
              "dexterity": "+8",
              "firearm_resistance": "+8%",
              "health_increment": "+65",
              "max_durability": "9344"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 340,
              "dexterity": 10,
              "firearm_resistance": 0.1,
              "health_increment": 75,
              "max_durability": 10059
            },
            "display": {
              "armor": "340",
              "dexterity": "+10",
              "firearm_resistance": "+10%",
              "health_increment": "+75",
              "max_durability": "10059"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 341,
              "dexterity": 10,
              "firearm_resistance": 0.1,
              "health_increment": 75,
              "max_durability": 10059
            },
            "display": {
              "armor": "341",
              "dexterity": "+10",
              "firearm_resistance": "+10%",
              "health_increment": "+75",
              "max_durability": "10059"
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
      "backpack": {
        "inventory_id": "wls2_backpack_15_slots",
        "second_quick_cell_enabled": true,
        "shop_pack_description": "ui_offer_inventory_backpack_15_cells_label"
      },
      "backpack_id": "wls2_backpack_15_quick",
      "bodypart": 25,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15_quick",
        "bodypart": 25,
        "description": "wls2_halloween_21_backpack_coffin_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "wls2_halloween_21_backpack_coffin_description",
        "name": "wls2_halloween_21_backpack_coffin_name",
        "rarity": "epic",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary04/wls2_halloween_wicked_backpack",
        "tags": [
          "backpack",
          "armor_storage",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_21_backpack_coffin",
      "localization": {
        "description_key": "wls2_halloween_21_backpack_coffin_description",
        "en": {
          "description": "No one will dare to peek inside this backpack. So, pretty much anything can be inside!",
          "full_description": "No one will dare to peek inside this backpack. So, pretty much anything can be inside!",
          "name": "Django's Trick"
        },
        "full_description_key": "wls2_halloween_21_backpack_coffin_description",
        "name_key": "wls2_halloween_21_backpack_coffin_name",
        "zh": {
          "description": "没有人敢偷看这个背包里面。所以，你可以把很多东西放进去！",
          "full_description": "没有人敢偷看这个背包里面。所以，你可以把很多东西放进去！",
          "name": "金格的把戏"
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
                "wls2_resourse_fourfold_instruments_4": 20,
                "wls2_resourse_fourfold_nails_4": 20,
                "wls2_resourse_secondary_leather_4": 20
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_backpack_coffin"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_backpack_coffin_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 900
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_backpack_coffin",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_backpack_coffin"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_12_a",
            "durability_factor": 0.9,
            "level_max": 80,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_halloween_21_backpack_coffin",
            "transaction_id": "transaction_iap_wls_15_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.9,
            "level_min": 81,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_halloween_21_backpack_coffin",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_halloween_wicked_backpack",
      "stat_curves": {
        "death_penalty_reduction": {
          "1": 0.05,
          "2": 0.05,
          "3": 0.05,
          "4": 0.05,
          "5": 0.05
        },
        "dexterity": {
          "1": 4,
          "2": 8,
          "3": 12,
          "4": 16,
          "5": 20,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
        },
        "resistance": {
          "1": 16,
          "2": 17,
          "3": 18,
          "4": 19,
          "5": 20
        }
      },
      "stat_labels": {
        "death_penalty_reduction": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_death_penalty_reduction",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_death_penalty_reduction",
          "en": "Items durability loss upon death is {0} less",
          "zh": "死亡时，物品损失的耐久度减少 {0}"
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
        "resistance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_resistance",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_resistance",
          "en": "Defense",
          "zh": "防御"
        }
      },
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "image_key": "f218462602c7ca4d5d786350e6fec1ecb759987c6476d43e4642c0b91da0f496",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "金格的把戏",
        "name_en": "Django's Trick",
        "description_zh": "没有人敢偷看这个背包里面。所以，你可以把很多东西放进去！",
        "description_en": "No one will dare to peek inside this backpack. So, pretty much anything can be inside!",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "史诗",
        "search_text": "wls2_halloween_21_backpack_coffin 金格的把戏 django's trick 没有人敢偷看这个背包里面。所以，你可以把很多东西放进去！ no one will dare to peek inside this backpack. so, pretty much anything can be inside! backpack 背包 backpack backpack armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "inventory_size",
            "label": "背包容量",
            "value": 15,
            "unit": "格",
            "display": "15 格"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 100,
            "unit": "",
            "display": "100"
          },
          {
            "key": "resistance",
            "label": "防御",
            "value": 16,
            "unit": "",
            "display": "16"
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
            "key": "death_penalty_reduction",
            "label": "死亡耐久损失减免",
            "value": 0.05,
            "unit": "%",
            "display": "5%"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "dexterity": 4,
              "resistance": 16
            },
            "display": {
              "dexterity": "+4",
              "resistance": "16"
            }
          },
          {
            "level": 2,
            "values": {
              "dexterity": 8,
              "resistance": 17
            },
            "display": {
              "dexterity": "+8",
              "resistance": "17"
            }
          },
          {
            "level": 3,
            "values": {
              "dexterity": 12,
              "resistance": 18
            },
            "display": {
              "dexterity": "+12",
              "resistance": "18"
            }
          },
          {
            "level": 4,
            "values": {
              "dexterity": 16,
              "resistance": 19
            },
            "display": {
              "dexterity": "+16",
              "resistance": "19"
            }
          },
          {
            "level": 5,
            "values": {
              "dexterity": 20,
              "resistance": 20
            },
            "display": {
              "dexterity": "+20",
              "resistance": "20"
            }
          },
          {
            "level": 6,
            "values": {
              "dexterity": 21,
              "resistance": 20
            },
            "display": {
              "dexterity": "+21",
              "resistance": "20"
            }
          }
        ],
        "columns": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "resistance",
            "label": "防御",
            "unit": ""
          }
        ],
        "notes": [
          "攻速加成：6 级起每级增加 1，最高 +1020。"
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
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_halloween_melee_cross_2h_1_description",
        "full_description": "inventory_stack_view_wls2_halloween_melee_cross_2h_1_description",
        "name": "inventory_stack_view_wls2_halloween_melee_cross_2h_1_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_melee_cross_2h_1",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_21_weapon_melee_cross_2"
      },
      "item_id": "wls2_halloween_21_weapon_melee_cross_2",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_melee_cross_2h_1_description",
        "en": {
          "description": "Serves faithfully against all enemies",
          "full_description": "Serves faithfully against all enemies",
          "name": "Preacher"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_melee_cross_2h_1_description",
        "name_key": "inventory_stack_view_wls2_halloween_melee_cross_2h_1_name",
        "zh": {
          "description": "面对敌人，这把武器相当可靠",
          "full_description": "面对敌人，这把武器相当可靠",
          "name": "牧师"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 150
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_melee_cross_2",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_melee_cross_2"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_leather_2": 2,
                "wls2_resourse_secondary_plank_2": 2,
                "wls2_resourse_secondary_rope_2": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_melee_cross_2"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_weapon_melee_cross_2_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_melee_cross_2h_1",
      "stat_curves": {
        "critical_modifier": {
          "1": 0.15,
          "2": 0.2,
          "3": 0.25,
          "4": 0.3,
          "5": 0.35
        },
        "damage": {
          "1": 120,
          "2": 130,
          "3": 140,
          "4": 160,
          "5": 170,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 36,
          "2": 36,
          "3": 36,
          "4": 36,
          "5": 36
        }
      },
      "stat_labels": {
        "critical_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_critical_modifier",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_critical_modifier",
          "en": "Critical damage increased by {0}",
          "zh": "暴击伤害提高 {0}"
        },
        "damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_damage",
            "tooltip_type": "weapon"
          },
          "display_key": "ui_item_stats_damage",
          "en": "Damage",
          "zh": "伤害"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "event_melee",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick"
      ],
      "throwing_item": null,
      "tier": 2,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.6,
        "attack_ending_time": 1.1,
        "attack_range": 1.6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "sounds_weapos_whoosh",
          "sounds_weapos_whoosh"
        ],
        "hit_sounds": [
          "wls2_halloween_melee_cross_2h_hit",
          "wls2_halloween_melee_cross_2h_hit"
        ],
        "hit_states": {
          "states_count": [
            0,
            1
          ],
          "type": "random"
        },
        "prefab_common_id": "@Halloween_Cross_Wooden",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_halloween_21_weapon_melee_cross_2",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.7000000000000002,
        "attack_damage_time": 0.6,
        "attack_ending_time": 1.1,
        "attack_range": 1.6,
        "attacks_per_second_inferred": 0.588235294117647,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "image_key": "7f6828311ba5dbd582a3320eee805fbcd780b2c21aa9a0b728fa2a6156b0b7ba",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "牧师",
        "name_en": "Preacher",
        "description_zh": "面对敌人，这把武器相当可靠",
        "description_en": "Serves faithfully against all enemies",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_21_weapon_melee_cross_2 牧师 preacher 面对敌人，这把武器相当可靠 serves faithfully against all enemies weapon 武器 event_melee weapon weapon_storage quick wls2_halloween_21_weapon_melee_cross_2"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 120,
            "unit": "",
            "display": "120"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.588235294117647,
            "unit": "次/秒",
            "display": "0.59 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 36,
            "unit": "",
            "display": "36"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.6,
            "unit": "",
            "display": "1.6"
          }
        ],
        "fixed": [
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.7000000000000002,
            "unit": "秒",
            "display": "1.7 秒"
          },
          {
            "key": "attack_durability_cost",
            "label": "每次攻击耐久消耗",
            "value": 1,
            "unit": "点",
            "display": "1 点"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_modifier": 0.15,
              "damage": 120
            },
            "display": {
              "critical_modifier": "15%",
              "damage": "120"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_modifier": 0.2,
              "damage": 130
            },
            "display": {
              "critical_modifier": "20%",
              "damage": "130"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_modifier": 0.25,
              "damage": 140
            },
            "display": {
              "critical_modifier": "25%",
              "damage": "140"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_modifier": 0.3,
              "damage": 160
            },
            "display": {
              "critical_modifier": "30%",
              "damage": "160"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_modifier": 0.35,
              "damage": 170
            },
            "display": {
              "critical_modifier": "35%",
              "damage": "170"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_modifier": 0.35,
              "damage": 171
            },
            "display": {
              "critical_modifier": "35%",
              "damage": "171"
            }
          }
        ],
        "columns": [
          {
            "key": "critical_modifier",
            "label": "暴击伤害加成",
            "unit": "%"
          },
          {
            "key": "damage",
            "label": "伤害",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1170。",
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
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
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_halloween_melee_cross_2h_3_description",
        "full_description": "inventory_stack_view_wls2_halloween_melee_cross_2h_3_description",
        "name": "inventory_stack_view_wls2_halloween_melee_cross_2h_3_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_melee_cross_2h_2",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_21_weapon_melee_cross_3"
      },
      "item_id": "wls2_halloween_21_weapon_melee_cross_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_melee_cross_2h_3_description",
        "en": {
          "description": "This item was definitely stolen from the local church",
          "full_description": "This item was definitely stolen from the local church",
          "name": "Holy cross"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_melee_cross_2h_3_description",
        "name_key": "inventory_stack_view_wls2_halloween_melee_cross_2h_3_name",
        "zh": {
          "description": "这个物品绝对是从当地教堂里偷来的",
          "full_description": "这个物品绝对是从当地教堂里偷来的",
          "name": "神圣十字弩"
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
                "wls2_halloween_25_currency_pumpkin": 150
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_melee_cross_3",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_melee_cross_3"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_3": 2,
                "wls2_resourse_secondary_leather_3": 2,
                "wls2_resourse_secondary_plank_3": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_melee_cross_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_weapon_melee_cross_3_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_melee_cross_2h_2",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.08,
          "2": 0.1,
          "3": 0.15,
          "4": 0.18,
          "5": 0.2
        },
        "critical_modifier": {
          "1": 0.15,
          "2": 0.3,
          "3": 0.5,
          "4": 0.7,
          "5": 1
        },
        "damage": {
          "1": 297,
          "2": 330,
          "3": 363,
          "4": 396,
          "5": 418,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 60,
          "2": 60,
          "3": 60,
          "4": 60,
          "5": 60
        }
      },
      "stat_labels": {
        "critical_hit_chance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_critical_hit_chance",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_critical_hit_chance",
          "en": "{0} of critical strike chance",
          "zh": "{0} 暴击几率"
        },
        "critical_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_critical_modifier",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_critical_modifier",
          "en": "Critical damage increased by {0}",
          "zh": "暴击伤害提高 {0}"
        },
        "damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_damage",
            "tooltip_type": "weapon"
          },
          "display_key": "ui_item_stats_damage",
          "en": "Damage",
          "zh": "伤害"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "event_melee",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.6,
        "attack_ending_time": 1.1,
        "attack_range": 1.6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "sounds_weapos_whoosh",
          "sounds_weapos_whoosh"
        ],
        "hit_sounds": [
          "tomahawk_hammer_hit1",
          "tomahawk_hammer_hit2"
        ],
        "hit_states": {
          "states_count": [
            0,
            1
          ],
          "type": "random"
        },
        "prefab_common_id": "@Halloween_Cross_Metal",
        "prefab_pbr_id": "@Halloween_Cross_Metal_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_halloween_21_weapon_melee_cross_3",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.7000000000000002,
        "attack_damage_time": 0.6,
        "attack_ending_time": 1.1,
        "attack_range": 1.6,
        "attacks_per_second_inferred": 0.588235294117647,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "image_key": "5616b248c841591e5ae24b7fe7d2fd8e344c2a1dcd87c727f31d1be97ccbf301",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "神圣十字弩",
        "name_en": "Holy cross",
        "description_zh": "这个物品绝对是从当地教堂里偷来的",
        "description_en": "This item was definitely stolen from the local church",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "优秀",
        "search_text": "wls2_halloween_21_weapon_melee_cross_3 神圣十字弩 holy cross 这个物品绝对是从当地教堂里偷来的 this item was definitely stolen from the local church weapon 武器 event_melee weapon weapon_storage quick festive wls2_halloween_21_weapon_melee_cross_3"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 297,
            "unit": "",
            "display": "297"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.588235294117647,
            "unit": "次/秒",
            "display": "0.59 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 60,
            "unit": "",
            "display": "60"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.6,
            "unit": "",
            "display": "1.6"
          }
        ],
        "fixed": [
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.7000000000000002,
            "unit": "秒",
            "display": "1.7 秒"
          },
          {
            "key": "attack_durability_cost",
            "label": "每次攻击耐久消耗",
            "value": 1,
            "unit": "点",
            "display": "1 点"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_hit_chance": 0.08,
              "critical_modifier": 0.15,
              "damage": 297
            },
            "display": {
              "critical_hit_chance": "8%",
              "critical_modifier": "15%",
              "damage": "297"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.1,
              "critical_modifier": 0.3,
              "damage": 330
            },
            "display": {
              "critical_hit_chance": "10%",
              "critical_modifier": "30%",
              "damage": "330"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.15,
              "critical_modifier": 0.5,
              "damage": 363
            },
            "display": {
              "critical_hit_chance": "15%",
              "critical_modifier": "50%",
              "damage": "363"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.18,
              "critical_modifier": 0.7,
              "damage": 396
            },
            "display": {
              "critical_hit_chance": "18%",
              "critical_modifier": "70%",
              "damage": "396"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 1,
              "damage": 418
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "100%",
              "damage": "418"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 1,
              "damage": 419
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "100%",
              "damage": "419"
            }
          }
        ],
        "columns": [
          {
            "key": "critical_hit_chance",
            "label": "暴击率",
            "unit": "%"
          },
          {
            "key": "critical_modifier",
            "label": "暴击伤害加成",
            "unit": "%"
          },
          {
            "key": "damage",
            "label": "伤害",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1418。",
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
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
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls_halloween_scythe_description",
        "full_description": "inventory_stack_view_wls_halloween_scythe_description",
        "name": "inventory_stack_view_wls_halloween_scythe_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_melee_other_event",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_halloween_scythe",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_21_weapon_melee_scythe_3"
      },
      "item_id": "wls2_halloween_21_weapon_melee_scythe_3",
      "localization": {
        "description_key": "inventory_stack_view_wls_halloween_scythe_description",
        "en": {
          "description": "You can embody the Grim Reaper, come to cut life short! Or you can simply harvest the corn.",
          "full_description": "You can embody the Grim Reaper, come to cut life short! Or you can simply harvest the corn.",
          "name": "Scythe"
        },
        "full_description_key": "inventory_stack_view_wls_halloween_scythe_description",
        "name_key": "inventory_stack_view_wls_halloween_scythe_name",
        "zh": {
          "description": "拿上它，你就能够化身成割人如割草的死神！或者也可以真的用来割一割院子里的杂草。",
          "full_description": "拿上它，你就能够化身成割人如割草的死神！或者也可以真的用来割一割院子里的杂草。",
          "name": "长柄镰刀"
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
                "wls2_halloween_25_currency_pumpkin": 150
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_melee_scythe_3",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_melee_scythe_3"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_3": 2,
                "wls2_resourse_secondary_leather_3": 2,
                "wls2_resourse_secondary_plank_3": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_melee_scythe_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_weapon_melee_scythe_3_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_halloween_scythe",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.08,
          "2": 0.1,
          "3": 0.12,
          "4": 0.14,
          "5": 0.16
        },
        "damage": {
          "1": 385,
          "2": 429,
          "3": 473,
          "4": 506,
          "5": 550,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 150,
          "2": 150,
          "3": 150,
          "4": 150,
          "5": 150
        },
        "slow_modifier": {
          "1": 0.35,
          "2": 0.35,
          "3": 0.35,
          "4": 0.35,
          "5": 0.35
        },
        "slow_time": {
          "1": 0.75,
          "2": 1,
          "3": 1.25,
          "4": 1.5,
          "5": 1.75
        }
      },
      "stat_labels": {
        "critical_hit_chance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_critical_hit_chance",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_critical_hit_chance",
          "en": "{0} of critical strike chance",
          "zh": "{0} 暴击几率"
        },
        "damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_damage",
            "tooltip_type": "weapon"
          },
          "display_key": "ui_item_stats_damage",
          "en": "Damage",
          "zh": "伤害"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "slow_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_slow_modifier",
            "second_diff_format": "ui_item_stats_diff_plus_format",
            "second_value": "slow_time",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_slow_modifier",
          "en": "Slows target by {0} for {1} sec",
          "zh": "使目标减速 {0}，持续 {1} 秒"
        },
        "slow_time": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "event_melee",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.6,
        "attack_ending_time": 0.7,
        "attack_range": 2,
        "durability_price": 1,
        "hit_empty_sounds": [
          "sounds_weapos_whoosh",
          "sounds_weapos_whoosh"
        ],
        "hit_sounds": [
          "wls2_weapon_melee_sabre_4_common"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Halloween_Scythe",
        "prefab_pbr_id": "@Halloween_Scythe_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_halloween_21_weapon_melee_scythe_3",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2999999999999998,
        "attack_damage_time": 0.6,
        "attack_ending_time": 0.7,
        "attack_range": 2,
        "attacks_per_second_inferred": 0.7692307692307694,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "image_key": "4caf6a83c8ef67e5c387f95526851606ce66f00fca9e5d604a259c4bd601eebc",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "长柄镰刀",
        "name_en": "Scythe",
        "description_zh": "拿上它，你就能够化身成割人如割草的死神！或者也可以真的用来割一割院子里的杂草。",
        "description_en": "You can embody the Grim Reaper, come to cut life short! Or you can simply harvest the corn.",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "优秀",
        "search_text": "wls2_halloween_21_weapon_melee_scythe_3 长柄镰刀 scythe 拿上它，你就能够化身成割人如割草的死神！或者也可以真的用来割一割院子里的杂草。 you can embody the grim reaper, come to cut life short! or you can simply harvest the corn. weapon 武器 event_melee weapon weapon_storage quick wls2_halloween_21_weapon_melee_scythe_3"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 385,
            "unit": "",
            "display": "385"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.7692307692307694,
            "unit": "次/秒",
            "display": "0.77 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 150,
            "unit": "",
            "display": "150"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 2,
            "unit": "",
            "display": "2"
          }
        ],
        "fixed": [
          {
            "key": "slow_modifier",
            "label": "目标减速",
            "value": 0.35,
            "unit": "%",
            "display": "35%"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.2999999999999998,
            "unit": "秒",
            "display": "1.3 秒"
          },
          {
            "key": "attack_durability_cost",
            "label": "每次攻击耐久消耗",
            "value": 1,
            "unit": "点",
            "display": "1 点"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_hit_chance": 0.08,
              "damage": 385,
              "slow_time": 0.75
            },
            "display": {
              "critical_hit_chance": "8%",
              "damage": "385",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 429,
              "slow_time": 1
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "429",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.12,
              "damage": 473,
              "slow_time": 1.25
            },
            "display": {
              "critical_hit_chance": "12%",
              "damage": "473",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.14,
              "damage": 506,
              "slow_time": 1.5
            },
            "display": {
              "critical_hit_chance": "14%",
              "damage": "506",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.16,
              "damage": 550,
              "slow_time": 1.75
            },
            "display": {
              "critical_hit_chance": "16%",
              "damage": "550",
              "slow_time": "1.75 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.16,
              "damage": 551,
              "slow_time": 1.75
            },
            "display": {
              "critical_hit_chance": "16%",
              "damage": "551",
              "slow_time": "1.75 秒"
            }
          }
        ],
        "columns": [
          {
            "key": "critical_hit_chance",
            "label": "暴击率",
            "unit": "%"
          },
          {
            "key": "damage",
            "label": "伤害",
            "unit": ""
          },
          {
            "key": "slow_time",
            "label": "减速持续时间",
            "unit": "秒"
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1550。",
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
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
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_halloween_1h_scythe_4_description",
        "full_description": "inventory_stack_view_wls2_halloween_1h_scythe_4_description",
        "name": "inventory_stack_view_wls2_halloween_1h_scythe_4_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_melee_other_event",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_halloween_1h_scythe_4",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_21_weapon_melee_scythe_4"
      },
      "item_id": "wls2_halloween_21_weapon_melee_scythe_4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_1h_scythe_4_description",
        "en": {
          "description": "Grim and deadly, just like its name.",
          "full_description": "Grim and deadly, just like its name.",
          "name": "Funerary Pick"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_1h_scythe_4_description",
        "name_key": "inventory_stack_view_wls2_halloween_1h_scythe_4_name",
        "zh": {
          "description": "就像它的名字一样，冷酷而致命。",
          "full_description": "就像它的名字一样，冷酷而致命。",
          "name": "葬仪之选"
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
                "wls2_halloween_25_currency_pumpkin": 150
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_melee_scythe_4",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_melee_scythe_4"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_4": 4,
                "wls2_resourse_secondary_leather_4": 6
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_melee_scythe_4"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_weapon_melee_scythe_4_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_halloween_1h_scythe_4",
      "stat_curves": {
        "damage": {
          "1": 330,
          "2": 363,
          "3": 396,
          "4": 429,
          "5": 462,
          "per_level_after_max": 1
        },
        "dot_amount": {
          "1": 300,
          "2": 350,
          "3": 400,
          "4": 450,
          "5": 500
        },
        "dot_time": {
          "1": 3,
          "2": 3,
          "3": 3,
          "4": 3,
          "5": 3
        },
        "max_durability": {
          "1": 110,
          "2": 110,
          "3": 110,
          "4": 110,
          "5": 110
        },
        "penetrating_damage": {
          "1": 10,
          "2": 11,
          "3": 12,
          "4": 13,
          "5": 14
        }
      },
      "stat_labels": {
        "damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_damage",
            "tooltip_type": "weapon"
          },
          "display_key": "ui_item_stats_damage",
          "en": "Damage",
          "zh": "伤害"
        },
        "dot_amount": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name_value_format": "ui_item_stats_dot_amount",
            "second_diff_format": "ui_item_stats_diff_plus_format",
            "second_value": "dot_time",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special"
          },
          "display_key": "ui_item_stats_dot_amount",
          "en": "Deals {0} damage over {1} seconds",
          "zh": "在 {1} 秒内造成 {0} 伤害"
        },
        "dot_time": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "penetrating_damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_penetrating_damage",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_penetrating_damage",
          "en": "Piercing damage",
          "zh": "穿刺伤害"
        }
      },
      "subcategory": "event_melee",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.2,
        "durability_price": 1,
        "hit_empty_sounds": [
          "tomahawk_hammer_whoosh2",
          "tomahawk_hammer_whoosh2"
        ],
        "hit_sounds": [
          "crow_war_club_hit1",
          "crow_war_club_hit2"
        ],
        "hit_states": {
          "states_count": [
            0,
            1
          ],
          "type": "random"
        },
        "prefab_common_id": "@Halloween_Skull_Scythe",
        "prefab_pbr_id": "@Halloween_Skull_Scythe_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_halloween_21_weapon_melee_scythe_4",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.1,
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.2,
        "attacks_per_second_inferred": 0.9090909090909091,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "image_key": "ce6c0eb31767c8b96ad182981d0dd23ce21a6618398ef7b9d8581db7c19bdaa6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "葬仪之选",
        "name_en": "Funerary Pick",
        "description_zh": "就像它的名字一样，冷酷而致命。",
        "description_en": "Grim and deadly, just like its name.",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_21_weapon_melee_scythe_4 葬仪之选 funerary pick 就像它的名字一样，冷酷而致命。 grim and deadly, just like its name. weapon 武器 event_melee weapon weapon_storage quick festive wls2_halloween_21_weapon_melee_scythe_4"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 330,
            "unit": "",
            "display": "330"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.9090909090909091,
            "unit": "次/秒",
            "display": "0.91 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 110,
            "unit": "",
            "display": "110"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.2,
            "unit": "",
            "display": "1.2"
          }
        ],
        "fixed": [
          {
            "key": "dot_time",
            "label": "持续伤害时间",
            "value": 3,
            "unit": "秒",
            "display": "3 秒"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.1,
            "unit": "秒",
            "display": "1.1 秒"
          },
          {
            "key": "attack_durability_cost",
            "label": "每次攻击耐久消耗",
            "value": 1,
            "unit": "点",
            "display": "1 点"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 330,
              "dot_amount": 300,
              "penetrating_damage": 10
            },
            "display": {
              "damage": "330",
              "dot_amount": "300",
              "penetrating_damage": "10"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 363,
              "dot_amount": 350,
              "penetrating_damage": 11
            },
            "display": {
              "damage": "363",
              "dot_amount": "350",
              "penetrating_damage": "11"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 396,
              "dot_amount": 400,
              "penetrating_damage": 12
            },
            "display": {
              "damage": "396",
              "dot_amount": "400",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 429,
              "dot_amount": 450,
              "penetrating_damage": 13
            },
            "display": {
              "damage": "429",
              "dot_amount": "450",
              "penetrating_damage": "13"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 462,
              "dot_amount": 500,
              "penetrating_damage": 14
            },
            "display": {
              "damage": "462",
              "dot_amount": "500",
              "penetrating_damage": "14"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 463,
              "dot_amount": 500,
              "penetrating_damage": 14
            },
            "display": {
              "damage": "463",
              "dot_amount": "500",
              "penetrating_damage": "14"
            }
          }
        ],
        "columns": [
          {
            "key": "damage",
            "label": "伤害",
            "unit": ""
          },
          {
            "key": "dot_amount",
            "label": "持续伤害总量",
            "unit": ""
          },
          {
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1462。",
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
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
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_halloween_1h_sickle_3_description",
        "full_description": "inventory_stack_view_wls2_halloween_1h_sickle_3_description",
        "name": "inventory_stack_view_wls2_halloween_1h_sickle_3_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary05/wls2_halloween_1h_sickle_3",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_21_weapon_melee_sickle_3"
      },
      "item_id": "wls2_halloween_21_weapon_melee_sickle_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_1h_sickle_3_description",
        "en": {
          "description": "In some cultures this weapon's image is part of a unity symbol",
          "full_description": "In some cultures this weapon's image is part of a unity symbol",
          "name": "Bone Vow"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_1h_sickle_3_description",
        "name_key": "inventory_stack_view_wls2_halloween_1h_sickle_3_name",
        "zh": {
          "description": "在某些文化里，这种武器是团结一致的象征",
          "full_description": "在某些文化里，这种武器是团结一致的象征",
          "name": "骨誓"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_ingot_3": 2,
            "wls2_resourse_secondary_leather_3": 2,
            "wls2_resourse_secondary_plank_3": 2,
            "wls_wolf_fang": 2
          },
          "result": {
            "inventory_stack_id": "wls2_halloween_21_weapon_melee_sickle_3"
          },
          "type": "recycle"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 150
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_melee_sickle_3",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_melee_sickle_3"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_3": 2,
                "wls2_resourse_secondary_leather_3": 2,
                "wls2_resourse_secondary_plank_3": 2,
                "wls_wolf_fang": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_melee_sickle_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_weapon_melee_sickle_3"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_halloween_1h_sickle_3",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.1
        },
        "damage": {
          "1": 319,
          "2": 352,
          "3": 385,
          "4": 418,
          "5": 440,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 130,
          "2": 130,
          "3": 130,
          "4": 130,
          "5": 130
        },
        "slow_modifier": {
          "1": 0.25,
          "2": 0.25,
          "3": 0.25,
          "4": 0.25,
          "5": 0.25
        },
        "slow_time": {
          "1": 0.5,
          "2": 0.75,
          "3": 1,
          "4": 1.25,
          "5": 1.5
        }
      },
      "stat_labels": {
        "bandit_damage_modifier": {
          "definition": {
            "is_percent": true,
            "name": "ui_item_stats_damage_to_bandits",
            "name_value_format": "ui_item_stats_damage_to_bandits",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_damage_to_bandits",
          "en": "{0} additional damage to bandits",
          "zh": "{0} 额外 伤害 给 强盗"
        },
        "damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_damage",
            "tooltip_type": "weapon"
          },
          "display_key": "ui_item_stats_damage",
          "en": "Damage",
          "zh": "伤害"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "slow_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_slow_modifier",
            "second_diff_format": "ui_item_stats_diff_plus_format",
            "second_value": "slow_time",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_slow_modifier",
          "en": "Slows target by {0} for {1} sec",
          "zh": "使目标减速 {0}，持续 {1} 秒"
        },
        "slow_time": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "event_melee",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.4,
        "attack_range": 1.2,
        "durability_price": 1,
        "hit_empty_sounds": [
          "dag_knife_whoosh1",
          "dag_knife_whoosh2"
        ],
        "hit_sounds": [
          "dag_knife_hit1",
          "dag_knife_hit2"
        ],
        "hit_states": {
          "states_count": [
            0,
            2
          ],
          "type": "random"
        },
        "prefab_common_id": "@Halloween_Skull_Sickle_2",
        "prefab_pbr_id": "@Halloween_Skull_Sickle_2_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_halloween_21_weapon_melee_sickle_3",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.9,
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.4,
        "attack_range": 1.2,
        "attacks_per_second_inferred": 1.1111111111111112,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "image_key": "0722f4fc2acf4e92034ce7bf674cc9bcbc53dc93921fa49cbb3ec0ef2469e4c9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "骨誓",
        "name_en": "Bone Vow",
        "description_zh": "在某些文化里，这种武器是团结一致的象征",
        "description_en": "In some cultures this weapon's image is part of a unity symbol",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "优秀",
        "search_text": "wls2_halloween_21_weapon_melee_sickle_3 骨誓 bone vow 在某些文化里，这种武器是团结一致的象征 in some cultures this weapon's image is part of a unity symbol weapon 武器 event_melee weapon weapon_storage quick festive wls2_halloween_21_weapon_melee_sickle_3"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 319,
            "unit": "",
            "display": "319"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 1.1111111111111112,
            "unit": "次/秒",
            "display": "1.11 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 130,
            "unit": "",
            "display": "130"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.2,
            "unit": "",
            "display": "1.2"
          }
        ],
        "fixed": [
          {
            "key": "bandit_damage_modifier",
            "label": "对强盗伤害加成",
            "value": 0.1,
            "unit": "%",
            "display": "10%"
          },
          {
            "key": "slow_modifier",
            "label": "目标减速",
            "value": 0.25,
            "unit": "%",
            "display": "25%"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 0.9,
            "unit": "秒",
            "display": "0.9 秒"
          },
          {
            "key": "attack_durability_cost",
            "label": "每次攻击耐久消耗",
            "value": 1,
            "unit": "点",
            "display": "1 点"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 319,
              "slow_time": 0.5
            },
            "display": {
              "damage": "319",
              "slow_time": "0.5 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 352,
              "slow_time": 0.75
            },
            "display": {
              "damage": "352",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 385,
              "slow_time": 1
            },
            "display": {
              "damage": "385",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 418,
              "slow_time": 1.25
            },
            "display": {
              "damage": "418",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 440,
              "slow_time": 1.5
            },
            "display": {
              "damage": "440",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 441,
              "slow_time": 1.5
            },
            "display": {
              "damage": "441",
              "slow_time": "1.5 秒"
            }
          }
        ],
        "columns": [
          {
            "key": "damage",
            "label": "伤害",
            "unit": ""
          },
          {
            "key": "slow_time",
            "label": "减速持续时间",
            "unit": "秒"
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1440。",
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
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
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_halloween_2h_staff_3_description",
        "full_description": "inventory_stack_view_wls2_halloween_2h_staff_3_description",
        "name": "inventory_stack_view_wls2_halloween_2h_staff_3_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary05/wls2_halloween_2h_staff_3",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_21_weapon_melee_staff_3"
      },
      "item_id": "wls2_halloween_21_weapon_melee_staff_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_2h_staff_3_description",
        "en": {
          "description": "The name speaks for itself",
          "full_description": "The name speaks for itself",
          "name": "Skull crusher"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_2h_staff_3_description",
        "name_key": "inventory_stack_view_wls2_halloween_2h_staff_3_name",
        "zh": {
          "description": "它的名字就说明了一切",
          "full_description": "它的名字就说明了一切",
          "name": "碎颅者"
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
                "wls2_halloween_25_currency_pumpkin": 150
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_melee_staff_3",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_melee_staff_3"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_plank_3": 2,
                "wls2_resourse_secondary_stoneblock_3": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_melee_staff_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_weapon_melee_staff_3_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_halloween_2h_staff_3",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.12,
          "3": 0.14,
          "4": 0.16,
          "5": 0.18
        },
        "critical_modifier": {
          "1": 0.25,
          "2": 0.5,
          "3": 0.75,
          "4": 1,
          "5": 1.5
        },
        "damage": {
          "1": 328,
          "2": 361,
          "3": 394,
          "4": 427,
          "5": 459,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 60,
          "2": 60,
          "3": 60,
          "4": 60,
          "5": 60
        }
      },
      "stat_labels": {
        "critical_hit_chance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_critical_hit_chance",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_critical_hit_chance",
          "en": "{0} of critical strike chance",
          "zh": "{0} 暴击几率"
        },
        "critical_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_critical_modifier",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_critical_modifier",
          "en": "Critical damage increased by {0}",
          "zh": "暴击伤害提高 {0}"
        },
        "damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_damage",
            "tooltip_type": "weapon"
          },
          "display_key": "ui_item_stats_damage",
          "en": "Damage",
          "zh": "伤害"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "event_melee",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_damage_time": 0.6,
        "attack_ending_time": 1.1,
        "attack_range": 2,
        "durability_price": 1,
        "hit_empty_sounds": [
          "santa_staff",
          "santa_staff"
        ],
        "hit_sounds": [
          "craw_war_club_hit1",
          "craw_war_club_hit2"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Halloween_Skull_Staff",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_halloween_21_weapon_melee_staff_3",
      "weapon_summary": {
        "attack_action": {
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.7000000000000002,
        "attack_damage_time": 0.6,
        "attack_ending_time": 1.1,
        "attack_range": 2,
        "attacks_per_second_inferred": 0.588235294117647,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "image_key": "62c80c5494ea6ba416796f55ec99409da6345033ed8645cc1b7642bcfa565e26",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "碎颅者",
        "name_en": "Skull crusher",
        "description_zh": "它的名字就说明了一切",
        "description_en": "The name speaks for itself",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "优秀",
        "search_text": "wls2_halloween_21_weapon_melee_staff_3 碎颅者 skull crusher 它的名字就说明了一切 the name speaks for itself weapon 武器 event_melee weapon weapon_storage quick festive wls2_halloween_21_weapon_melee_staff_3"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 328,
            "unit": "",
            "display": "328"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.588235294117647,
            "unit": "次/秒",
            "display": "0.59 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 60,
            "unit": "",
            "display": "60"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 2,
            "unit": "",
            "display": "2"
          }
        ],
        "fixed": [
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.7000000000000002,
            "unit": "秒",
            "display": "1.7 秒"
          },
          {
            "key": "attack_durability_cost",
            "label": "每次攻击耐久消耗",
            "value": 1,
            "unit": "点",
            "display": "1 点"
          },
          {
            "key": "attack_angle",
            "label": "攻击扇面",
            "value": 120,
            "unit": "°",
            "display": "120°"
          },
          {
            "key": "attack_radius",
            "label": "攻击范围半径",
            "value": 2,
            "unit": "",
            "display": "2"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_hit_chance": 0.1,
              "critical_modifier": 0.25,
              "damage": 328
            },
            "display": {
              "critical_hit_chance": "10%",
              "critical_modifier": "25%",
              "damage": "328"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.12,
              "critical_modifier": 0.5,
              "damage": 361
            },
            "display": {
              "critical_hit_chance": "12%",
              "critical_modifier": "50%",
              "damage": "361"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.14,
              "critical_modifier": 0.75,
              "damage": 394
            },
            "display": {
              "critical_hit_chance": "14%",
              "critical_modifier": "75%",
              "damage": "394"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.16,
              "critical_modifier": 1,
              "damage": 427
            },
            "display": {
              "critical_hit_chance": "16%",
              "critical_modifier": "100%",
              "damage": "427"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.18,
              "critical_modifier": 1.5,
              "damage": 459
            },
            "display": {
              "critical_hit_chance": "18%",
              "critical_modifier": "150%",
              "damage": "459"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.18,
              "critical_modifier": 1.5,
              "damage": 460
            },
            "display": {
              "critical_hit_chance": "18%",
              "critical_modifier": "150%",
              "damage": "460"
            }
          }
        ],
        "columns": [
          {
            "key": "critical_hit_chance",
            "label": "暴击率",
            "unit": "%"
          },
          {
            "key": "critical_modifier",
            "label": "暴击伤害加成",
            "unit": "%"
          },
          {
            "key": "damage",
            "label": "伤害",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1459。",
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
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
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_halloween_1h_sword_4_description",
        "full_description": "inventory_stack_view_wls2_halloween_1h_sword_4_description",
        "name": "inventory_stack_view_wls2_halloween_1h_sword_4_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary05/wls2_halloween_1h_sword_4",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_21_weapon_melee_sword_4"
      },
      "item_id": "wls2_halloween_21_weapon_melee_sword_4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_1h_sword_4_description",
        "en": {
          "description": "Quite an uncommon sword with a highly dangerous blade",
          "full_description": "Quite an uncommon sword with a highly dangerous blade",
          "name": "Flesh Seeker"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_1h_sword_4_description",
        "name_key": "inventory_stack_view_wls2_halloween_1h_sword_4_name",
        "zh": {
          "description": "一把相当不寻常的剑，剑刃非常危险。",
          "full_description": "一把相当不寻常的剑，剑刃非常危险。",
          "name": "寻肉者"
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
                "wls2_halloween_25_currency_pumpkin": 150
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_melee_sword_4",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_melee_sword_4"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_3": 4,
                "wls2_resourse_secondary_leather_3": 6
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_melee_sword_4"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_weapon_melee_sword_4_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_halloween_1h_sword_4",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.1
        },
        "damage": {
          "1": 242,
          "2": 275,
          "3": 297,
          "4": 319,
          "5": 352,
          "per_level_after_max": 1
        },
        "dot_amount": {
          "1": 50,
          "2": 100,
          "3": 150,
          "4": 200,
          "5": 250
        },
        "dot_time": {
          "1": 3,
          "2": 3,
          "3": 3,
          "4": 3,
          "5": 3
        },
        "max_durability": {
          "1": 126,
          "2": 126,
          "3": 126,
          "4": 126,
          "5": 126
        },
        "penetrating_damage": {
          "1": 7,
          "2": 8,
          "3": 9,
          "4": 10,
          "5": 11
        },
        "slow_modifier": {
          "1": 0.1,
          "2": 0.1,
          "3": 0.1,
          "4": 0.1,
          "5": 0.1
        },
        "slow_time": {
          "1": 0.5,
          "2": 0.75,
          "3": 1,
          "4": 1.25,
          "5": 1.5
        }
      },
      "stat_labels": {
        "animal_damage_modifier": {
          "definition": {
            "is_percent": true,
            "name": "ui_item_stats_damage_to_animals",
            "name_value_format": "ui_item_stats_damage_to_animals",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_damage_to_animals",
          "en": "{0} additional damage to animals",
          "zh": "对动物的{0}额外伤害"
        },
        "damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_damage",
            "tooltip_type": "weapon"
          },
          "display_key": "ui_item_stats_damage",
          "en": "Damage",
          "zh": "伤害"
        },
        "dot_amount": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name_value_format": "ui_item_stats_dot_amount",
            "second_diff_format": "ui_item_stats_diff_plus_format",
            "second_value": "dot_time",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special"
          },
          "display_key": "ui_item_stats_dot_amount",
          "en": "Deals {0} damage over {1} seconds",
          "zh": "在 {1} 秒内造成 {0} 伤害"
        },
        "dot_time": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "penetrating_damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_penetrating_damage",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_penetrating_damage",
          "en": "Piercing damage",
          "zh": "穿刺伤害"
        },
        "slow_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_slow_modifier",
            "second_diff_format": "ui_item_stats_diff_plus_format",
            "second_value": "slow_time",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_slow_modifier",
          "en": "Slows target by {0} for {1} sec",
          "zh": "使目标减速 {0}，持续 {1} 秒"
        },
        "slow_time": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "event_melee",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 1,
        "attack_range": 1.2,
        "durability_price": 1,
        "hit_empty_sounds": [
          "iron_thing_whoosh2",
          "iron_thing_whoosh1"
        ],
        "hit_sounds": [
          "iron_thing_hit1",
          "iron_thing_hit2"
        ],
        "hit_states": {
          "states_count": [
            1,
            2
          ],
          "type": "random"
        },
        "prefab_common_id": "@Halloween_Skull_Sickle_1",
        "prefab_pbr_id": "@Halloween_Skull_Sickle_1_pbr",
        "speed_modifier": 1.365,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_halloween_21_weapon_melee_sword_4",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.5,
        "attack_damage_time": 0.5,
        "attack_ending_time": 1,
        "attack_range": 1.2,
        "attacks_per_second_inferred": 0.6666666666666666,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1.365,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "image_key": "4ce20aa9236b716c71b92b181c5c8feb9bca4ba391c79d54cbc4bb0e324a5298",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "寻肉者",
        "name_en": "Flesh Seeker",
        "description_zh": "一把相当不寻常的剑，剑刃非常危险。",
        "description_en": "Quite an uncommon sword with a highly dangerous blade",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_21_weapon_melee_sword_4 寻肉者 flesh seeker 一把相当不寻常的剑，剑刃非常危险。 quite an uncommon sword with a highly dangerous blade weapon 武器 event_melee weapon weapon_storage quick festive wls2_halloween_21_weapon_melee_sword_4"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 242,
            "unit": "",
            "display": "242"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.6666666666666666,
            "unit": "次/秒",
            "display": "0.67 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 126,
            "unit": "",
            "display": "126"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.2,
            "unit": "",
            "display": "1.2"
          }
        ],
        "fixed": [
          {
            "key": "animal_damage_modifier",
            "label": "对动物伤害加成",
            "value": 0.1,
            "unit": "%",
            "display": "10%"
          },
          {
            "key": "dot_time",
            "label": "持续伤害时间",
            "value": 3,
            "unit": "秒",
            "display": "3 秒"
          },
          {
            "key": "slow_modifier",
            "label": "目标减速",
            "value": 0.1,
            "unit": "%",
            "display": "10%"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.5,
            "unit": "秒",
            "display": "1.5 秒"
          },
          {
            "key": "attack_speed_multiplier",
            "label": "动作速度倍率",
            "value": 1.365,
            "unit": "倍",
            "display": "1.365 倍"
          },
          {
            "key": "attack_durability_cost",
            "label": "每次攻击耐久消耗",
            "value": 1,
            "unit": "点",
            "display": "1 点"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 242,
              "dot_amount": 50,
              "penetrating_damage": 7,
              "slow_time": 0.5
            },
            "display": {
              "damage": "242",
              "dot_amount": "50",
              "penetrating_damage": "7",
              "slow_time": "0.5 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 275,
              "dot_amount": 100,
              "penetrating_damage": 8,
              "slow_time": 0.75
            },
            "display": {
              "damage": "275",
              "dot_amount": "100",
              "penetrating_damage": "8",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 297,
              "dot_amount": 150,
              "penetrating_damage": 9,
              "slow_time": 1
            },
            "display": {
              "damage": "297",
              "dot_amount": "150",
              "penetrating_damage": "9",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 319,
              "dot_amount": 200,
              "penetrating_damage": 10,
              "slow_time": 1.25
            },
            "display": {
              "damage": "319",
              "dot_amount": "200",
              "penetrating_damage": "10",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 352,
              "dot_amount": 250,
              "penetrating_damage": 11,
              "slow_time": 1.5
            },
            "display": {
              "damage": "352",
              "dot_amount": "250",
              "penetrating_damage": "11",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 353,
              "dot_amount": 250,
              "penetrating_damage": 11,
              "slow_time": 1.5
            },
            "display": {
              "damage": "353",
              "dot_amount": "250",
              "penetrating_damage": "11",
              "slow_time": "1.5 秒"
            }
          }
        ],
        "columns": [
          {
            "key": "damage",
            "label": "伤害",
            "unit": ""
          },
          {
            "key": "dot_amount",
            "label": "持续伤害总量",
            "unit": ""
          },
          {
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "unit": ""
          },
          {
            "key": "slow_time",
            "label": "减速持续时间",
            "unit": "秒"
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1352。",
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
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
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_halloween_21_range_crossbow_3_description",
        "full_description": "inventory_stack_view_wls2_halloween_21_range_crossbow_3_description",
        "name": "inventory_stack_view_wls2_halloween_range_crossbow_1h_name",
        "rarity": "uncommon",
        "sorting_group_id": "crossbow",
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_crossbow_1h",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_21_weapon_range_crossbow_3"
      },
      "item_id": "wls2_halloween_21_weapon_range_crossbow_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_21_range_crossbow_3_description",
        "en": {
          "description": "Deadly long-range weapon. Effective for shooting Pumpkins",
          "full_description": "Deadly long-range weapon. Effective for shooting Pumpkins",
          "name": "Thief's doom"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_21_range_crossbow_3_description",
        "name_key": "inventory_stack_view_wls2_halloween_range_crossbow_1h_name",
        "zh": {
          "description": "致死的远程武器。对射击南瓜非常有效",
          "full_description": "致死的远程武器。对射击南瓜非常有效",
          "name": "盗贼的末日"
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
                "wls2_halloween_25_currency_pumpkin": 300
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_range_crossbow_3",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_range_crossbow_3"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_3": 2,
                "wls2_resourse_secondary_plank_4": 4,
                "wls2_resourse_secondary_rope_3": 4
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_range_crossbow_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_weapon_range_crossbow_3_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_crossbow_1h",
      "stat_curves": {
        "damage": {
          "1": 193,
          "2": 209,
          "3": 226,
          "4": 242,
          "5": 264,
          "per_level_after_max": 1
        },
        "dot_amount": {
          "1": 200,
          "2": 250,
          "3": 300,
          "4": 350,
          "5": 400
        },
        "dot_time": {
          "1": 3,
          "2": 3,
          "3": 3,
          "4": 3,
          "5": 3
        },
        "max_durability": {
          "1": 66,
          "2": 66,
          "3": 66,
          "4": 66,
          "5": 66
        }
      },
      "stat_labels": {
        "damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_damage",
            "tooltip_type": "weapon"
          },
          "display_key": "ui_item_stats_damage",
          "en": "Damage",
          "zh": "伤害"
        },
        "dot_amount": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name_value_format": "ui_item_stats_dot_amount",
            "second_diff_format": "ui_item_stats_diff_plus_format",
            "second_value": "dot_time",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special"
          },
          "display_key": "ui_item_stats_dot_amount",
          "en": "Deals {0} damage over {1} seconds",
          "zh": "在 {1} 秒内造成 {0} 伤害"
        },
        "dot_time": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "crossbow",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "arrow_speed": 25,
          "bow_stretched_time": 0.3,
          "headshot_probability": 0.3,
          "max_charge_damage_multiplier": 2.5,
          "min_charge_time": 0.75,
          "miss_overcharge_time": 1,
          "miss_shot_distance": 15,
          "runaway_range": 0.5,
          "shoot_repeat": true,
          "type": "bow"
        },
        "attack_damage_time": 0.4,
        "attack_ending_time": 0.4,
        "attack_range": 6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_halloween_range_crossbow_load",
          "wls2_halloween_range_crossbow_shoot"
        ],
        "hit_sounds": [
          "wls2_halloween_range_crossbow_load",
          "wls2_halloween_range_crossbow_shoot"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@halloween_Crossbow_small",
        "prefab_pbr_id": "@halloween_Crossbow_small_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged"
        ]
      },
      "weapon_id": "wls2_halloween_21_weapon_range_crossbow_3",
      "weapon_summary": {
        "attack_action": {
          "arrow_speed": 25,
          "bow_stretched_time": 0.3,
          "headshot_probability": 0.3,
          "max_charge_damage_multiplier": 2.5,
          "min_charge_time": 0.75,
          "miss_overcharge_time": 1,
          "miss_shot_distance": 15,
          "runaway_range": 0.5,
          "shoot_repeat": true,
          "type": "bow"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.4,
        "attack_ending_time": 0.4,
        "attack_range": 6,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged"
        ]
      },
      "image_key": "408c4b283fadcbc0cb7928e528d27445429ea997bf9ca3007cf3c9e806ed06e2",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "盗贼的末日",
        "name_en": "Thief's doom",
        "description_zh": "致死的远程武器。对射击南瓜非常有效",
        "description_en": "Deadly long-range weapon. Effective for shooting Pumpkins",
        "category_zh": "武器",
        "subcategory": "crossbow",
        "rarity_zh": "优秀",
        "search_text": "wls2_halloween_21_weapon_range_crossbow_3 盗贼的末日 thief's doom 致死的远程武器。对射击南瓜非常有效 deadly long-range weapon. effective for shooting pumpkins weapon 武器 crossbow weapon weapon_storage quick festive wls2_halloween_21_weapon_range_crossbow_3"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 193,
            "unit": "",
            "display": "193"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 1.25,
            "unit": "次/秒",
            "display": "1.25 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 66,
            "unit": "",
            "display": "66"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 6,
            "unit": "",
            "display": "6"
          }
        ],
        "fixed": [
          {
            "key": "dot_time",
            "label": "持续伤害时间",
            "value": 3,
            "unit": "秒",
            "display": "3 秒"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 0.8,
            "unit": "秒",
            "display": "0.8 秒"
          },
          {
            "key": "attack_durability_cost",
            "label": "每次攻击耐久消耗",
            "value": 1,
            "unit": "点",
            "display": "1 点"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 193,
              "dot_amount": 200
            },
            "display": {
              "damage": "193",
              "dot_amount": "200"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 209,
              "dot_amount": 250
            },
            "display": {
              "damage": "209",
              "dot_amount": "250"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 226,
              "dot_amount": 300
            },
            "display": {
              "damage": "226",
              "dot_amount": "300"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 242,
              "dot_amount": 350
            },
            "display": {
              "damage": "242",
              "dot_amount": "350"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 264,
              "dot_amount": 400
            },
            "display": {
              "damage": "264",
              "dot_amount": "400"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 265,
              "dot_amount": 400
            },
            "display": {
              "damage": "265",
              "dot_amount": "400"
            }
          }
        ],
        "columns": [
          {
            "key": "damage",
            "label": "伤害",
            "unit": ""
          },
          {
            "key": "dot_amount",
            "label": "持续伤害总量",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1264。",
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
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
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_halloween_range_crossbow_2h_description",
        "full_description": "inventory_stack_view_wls2_halloween_range_crossbow_2h_description",
        "name": "inventory_stack_view_wls2_halloween_range_crossbow_2h_name",
        "rarity": "rare",
        "sorting_group_id": "crossbow",
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_crossbow_2h",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_21_weapon_range_crossbow_4"
      },
      "item_id": "wls2_halloween_21_weapon_range_crossbow_4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_range_crossbow_2h_description",
        "en": {
          "description": "A powerful two-handed weapon that shoots lethal bolts.",
          "full_description": "A powerful two-handed weapon that shoots lethal bolts.",
          "name": "Hunting crossbow"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_range_crossbow_2h_description",
        "name_key": "inventory_stack_view_wls2_halloween_range_crossbow_2h_name",
        "zh": {
          "description": "强力双手武器，可以射出致命栓钉。",
          "full_description": "强力双手武器，可以射出致命栓钉。",
          "name": "猎弩"
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
                "wls2_halloween_25_currency_pumpkin": 300
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_range_crossbow_4",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_range_crossbow_4"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_4": 2,
                "wls2_resourse_secondary_plank_4": 4,
                "wls2_resourse_secondary_rope_4": 4
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_range_crossbow_4"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_weapon_range_crossbow_4_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_2_a",
            "durability_factor": 0.5,
            "level_max": 70,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_halloween_21_weapon_range_crossbow_4",
            "transaction_id": "transaction_iap_wls_2_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_1_a",
            "durability_factor": 0.5,
            "level_max": 90,
            "level_min": 71,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_halloween_21_weapon_range_crossbow_4",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_crossbow_2h",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.12,
          "3": 0.14,
          "4": 0.16,
          "5": 0.18
        },
        "damage": {
          "1": 369,
          "2": 405,
          "3": 440,
          "4": 479,
          "5": 517,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 250,
          "2": 250,
          "3": 250,
          "4": 250,
          "5": 250
        },
        "penetrating_damage": {
          "1": 11,
          "2": 12,
          "3": 13,
          "4": 14,
          "5": 16
        }
      },
      "stat_labels": {
        "critical_hit_chance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_critical_hit_chance",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_critical_hit_chance",
          "en": "{0} of critical strike chance",
          "zh": "{0} 暴击几率"
        },
        "damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_damage",
            "tooltip_type": "weapon"
          },
          "display_key": "ui_item_stats_damage",
          "en": "Damage",
          "zh": "伤害"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "penetrating_damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_penetrating_damage",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_penetrating_damage",
          "en": "Piercing damage",
          "zh": "穿刺伤害"
        }
      },
      "subcategory": "crossbow",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "arrow_speed": 25,
          "bow_stretched_time": 0.3,
          "headshot_probability": 0.3,
          "max_charge_damage_multiplier": 2.5,
          "min_charge_time": 0.75,
          "miss_overcharge_time": 1,
          "miss_shot_distance": 15,
          "runaway_range": 0.5,
          "shoot_repeat": true,
          "type": "bow"
        },
        "attack_damage_time": 0.4,
        "attack_ending_time": 0.4,
        "attack_range": 6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_halloween_range_crossbow_load",
          "wls2_halloween_range_crossbow_shoot"
        ],
        "hit_sounds": [
          "wls2_halloween_range_crossbow_load",
          "wls2_halloween_range_crossbow_shoot"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@halloween_Crossbow",
        "prefab_pbr_id": "@halloween_Crossbow_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged"
        ]
      },
      "weapon_id": "wls2_halloween_21_weapon_range_crossbow_4",
      "weapon_summary": {
        "attack_action": {
          "arrow_speed": 25,
          "bow_stretched_time": 0.3,
          "headshot_probability": 0.3,
          "max_charge_damage_multiplier": 2.5,
          "min_charge_time": 0.75,
          "miss_overcharge_time": 1,
          "miss_shot_distance": 15,
          "runaway_range": 0.5,
          "shoot_repeat": true,
          "type": "bow"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.4,
        "attack_ending_time": 0.4,
        "attack_range": 6,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged"
        ]
      },
      "image_key": "e320b1dc5f65176532fb5fbfedd75b514c37721b152d689e584a3db80869c44e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "猎弩",
        "name_en": "Hunting crossbow",
        "description_zh": "强力双手武器，可以射出致命栓钉。",
        "description_en": "A powerful two-handed weapon that shoots lethal bolts.",
        "category_zh": "武器",
        "subcategory": "crossbow",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_21_weapon_range_crossbow_4 猎弩 hunting crossbow 强力双手武器，可以射出致命栓钉。 a powerful two-handed weapon that shoots lethal bolts. weapon 武器 crossbow weapon weapon_storage quick wls2_halloween_21_weapon_range_crossbow_4"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 369,
            "unit": "",
            "display": "369"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 1.25,
            "unit": "次/秒",
            "display": "1.25 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 250,
            "unit": "",
            "display": "250"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 6,
            "unit": "",
            "display": "6"
          }
        ],
        "fixed": [
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 0.8,
            "unit": "秒",
            "display": "0.8 秒"
          },
          {
            "key": "attack_durability_cost",
            "label": "每次攻击耐久消耗",
            "value": 1,
            "unit": "点",
            "display": "1 点"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 369,
              "penetrating_damage": 11
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "369",
              "penetrating_damage": "11"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.12,
              "damage": 405,
              "penetrating_damage": 12
            },
            "display": {
              "critical_hit_chance": "12%",
              "damage": "405",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.14,
              "damage": 440,
              "penetrating_damage": 13
            },
            "display": {
              "critical_hit_chance": "14%",
              "damage": "440",
              "penetrating_damage": "13"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.16,
              "damage": 479,
              "penetrating_damage": 14
            },
            "display": {
              "critical_hit_chance": "16%",
              "damage": "479",
              "penetrating_damage": "14"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 517,
              "penetrating_damage": 16
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "517",
              "penetrating_damage": "16"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 518,
              "penetrating_damage": 16
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "518",
              "penetrating_damage": "16"
            }
          }
        ],
        "columns": [
          {
            "key": "critical_hit_chance",
            "label": "暴击率",
            "unit": "%"
          },
          {
            "key": "damage",
            "label": "伤害",
            "unit": ""
          },
          {
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1517。",
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
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
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_halloween_range_pistol_description",
        "full_description": "inventory_stack_view_wls2_halloween_range_pistol_description",
        "name": "inventory_stack_view_wls2_halloween_range_pistol_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_pistol",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_21_weapon_range_pistol_4"
      },
      "item_id": "wls2_halloween_21_weapon_range_pistol_4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_range_pistol_description",
        "en": {
          "description": "Deafening and painful shots",
          "full_description": "Deafening and painful shots",
          "name": "Pistol"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_range_pistol_description",
        "name_key": "inventory_stack_view_wls2_halloween_range_pistol_name",
        "zh": {
          "description": "枪声震耳欲聋且伤害极高",
          "full_description": "枪声震耳欲聋且伤害极高",
          "name": "手枪"
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
                "wls2_halloween_25_currency_pumpkin": 450
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_range_pistol_4",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_range_pistol_4"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_5": 1,
                "wls2_resourse_secondary_ingot_1": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_range_pistol_4"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_weapon_range_pistol_4_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_pistol",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.1
        },
        "damage": {
          "1": 289,
          "2": 336,
          "3": 362,
          "4": 394,
          "5": 420,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 176,
          "2": 176,
          "3": 176,
          "4": 176,
          "5": 176
        },
        "penetrating_damage": {
          "1": 9,
          "2": 10,
          "3": 11,
          "4": 12,
          "5": 13
        }
      },
      "stat_labels": {
        "bandit_damage_modifier": {
          "definition": {
            "is_percent": true,
            "name": "ui_item_stats_damage_to_bandits",
            "name_value_format": "ui_item_stats_damage_to_bandits",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_damage_to_bandits",
          "en": "{0} additional damage to bandits",
          "zh": "{0} 额外 伤害 给 强盗"
        },
        "damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_damage",
            "tooltip_type": "weapon"
          },
          "display_key": "ui_item_stats_damage",
          "en": "Damage",
          "zh": "伤害"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "penetrating_damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_penetrating_damage",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_penetrating_damage",
          "en": "Piercing damage",
          "zh": "穿刺伤害"
        }
      },
      "subcategory": "pistol",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_halloween_range_pistol_hit"
        ],
        "hit_sounds": [
          "wls2_halloween_range_pistol_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Halloween_Pistol",
        "prefab_pbr_id": "@Halloween_Pistol_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "pistol"
        ]
      },
      "weapon_id": "wls2_halloween_21_weapon_range_pistol_4",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.8333333333333334,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "pistol"
        ]
      },
      "image_key": "9cf2356eb8ae7d8a679cfb2eaa7d22de8152dd468083bf6bc2d0a967c6914e69",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "手枪",
        "name_en": "Pistol",
        "description_zh": "枪声震耳欲聋且伤害极高",
        "description_en": "Deafening and painful shots",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "优秀",
        "search_text": "wls2_halloween_21_weapon_range_pistol_4 手枪 pistol 枪声震耳欲聋且伤害极高 deafening and painful shots weapon 武器 pistol weapon weapon_storage quick festive wls2_halloween_21_weapon_range_pistol_4"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 289,
            "unit": "",
            "display": "289"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.8333333333333334,
            "unit": "次/秒",
            "display": "0.83 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 176,
            "unit": "",
            "display": "176"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 3.5,
            "unit": "",
            "display": "3.5"
          }
        ],
        "fixed": [
          {
            "key": "bandit_damage_modifier",
            "label": "对强盗伤害加成",
            "value": 0.1,
            "unit": "%",
            "display": "10%"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.2,
            "unit": "秒",
            "display": "1.2 秒"
          },
          {
            "key": "attack_durability_cost",
            "label": "每次攻击耐久消耗",
            "value": 1,
            "unit": "点",
            "display": "1 点"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 289,
              "penetrating_damage": 9
            },
            "display": {
              "damage": "289",
              "penetrating_damage": "9"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 336,
              "penetrating_damage": 10
            },
            "display": {
              "damage": "336",
              "penetrating_damage": "10"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 362,
              "penetrating_damage": 11
            },
            "display": {
              "damage": "362",
              "penetrating_damage": "11"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 394,
              "penetrating_damage": 12
            },
            "display": {
              "damage": "394",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 420,
              "penetrating_damage": 13
            },
            "display": {
              "damage": "420",
              "penetrating_damage": "13"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 421,
              "penetrating_damage": 13
            },
            "display": {
              "damage": "421",
              "penetrating_damage": "13"
            }
          }
        ],
        "columns": [
          {
            "key": "damage",
            "label": "伤害",
            "unit": ""
          },
          {
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1420。",
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
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
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_halloween_range_shotgun_description",
        "full_description": "inventory_stack_view_wls2_halloween_range_shotgun_description",
        "name": "inventory_stack_view_wls2_halloween_21_range_shotgun_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_shotgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_21_weapon_range_shotgun_4"
      },
      "item_id": "wls2_halloween_21_weapon_range_shotgun_4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_range_shotgun_description",
        "en": {
          "description": "Deadly ranged weapon. Farmer's Allwin handiwork.",
          "full_description": "Deadly ranged weapon. Farmer's Allwin handiwork.",
          "name": "Pumpkinhead's Message"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_range_shotgun_description",
        "name_key": "inventory_stack_view_wls2_halloween_21_range_shotgun_name",
        "zh": {
          "description": "致命远程武器，出自农夫的阿尔文之手。",
          "full_description": "致命远程武器，出自农夫的阿尔文之手。",
          "name": "南瓜头的消息"
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
                "wls2_halloween_25_currency_pumpkin": 600
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_range_shotgun_4",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_range_shotgun_4"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_1": 1,
                "wls2_resourse_secondary_ingot_1": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_range_shotgun_4"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_weapon_range_shotgun_4_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_4_a",
            "durability_factor": 0.5,
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_halloween_21_weapon_range_shotgun_4",
            "transaction_id": "transaction_iap_wls_5_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.5,
            "level_max": 110,
            "level_min": 91,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_halloween_21_weapon_range_shotgun_4",
            "transaction_id": "transaction_iap_wls_4_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_shotgun",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.07,
          "3": 0.09,
          "4": 0.11,
          "5": 0.13
        },
        "damage": {
          "1": 650,
          "2": 720,
          "3": 790,
          "4": 850,
          "5": 920,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 200,
          "2": 200,
          "3": 200,
          "4": 200,
          "5": 200
        },
        "penetrating_damage": {
          "1": 10,
          "2": 11,
          "3": 12,
          "4": 13,
          "5": 14
        }
      },
      "stat_labels": {
        "critical_hit_chance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_critical_hit_chance",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_critical_hit_chance",
          "en": "{0} of critical strike chance",
          "zh": "{0} 暴击几率"
        },
        "damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_damage",
            "tooltip_type": "weapon"
          },
          "display_key": "ui_item_stats_damage",
          "en": "Damage",
          "zh": "伤害"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "penetrating_damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_penetrating_damage",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_penetrating_damage",
          "en": "Piercing damage",
          "zh": "穿刺伤害"
        }
      },
      "subcategory": "shotgun",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 45,
          "radius": 3.5,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.3,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_halloween_range_shotgun_axe_shoot"
        ],
        "hit_sounds": [
          "wls2_halloween_range_shotgun_axe_shoot"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@halloween_gun_2",
        "prefab_pbr_id": "@halloween_gun_2_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_halloween_21_weapon_range_shotgun_4",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 3.5,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.55,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.3,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.6451612903225806,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "shotgun"
        ]
      },
      "image_key": "ad4545c3d3e21558f4c83774a345709c72f78a4dc91356b3fab7537c0322fb20",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜头的消息",
        "name_en": "Pumpkinhead's Message",
        "description_zh": "致命远程武器，出自农夫的阿尔文之手。",
        "description_en": "Deadly ranged weapon. Farmer's Allwin handiwork.",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_21_weapon_range_shotgun_4 南瓜头的消息 pumpkinhead's message 致命远程武器，出自农夫的阿尔文之手。 deadly ranged weapon. farmer's allwin handiwork. weapon 武器 shotgun weapon weapon_storage quick festive wls2_halloween_21_weapon_range_shotgun_4"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 650,
            "unit": "",
            "display": "650"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.6451612903225806,
            "unit": "次/秒",
            "display": "0.65 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 200,
            "unit": "",
            "display": "200"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 3.5,
            "unit": "",
            "display": "3.5"
          }
        ],
        "fixed": [
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.55,
            "unit": "秒",
            "display": "1.55 秒"
          },
          {
            "key": "attack_durability_cost",
            "label": "每次攻击耐久消耗",
            "value": 1,
            "unit": "点",
            "display": "1 点"
          },
          {
            "key": "attack_angle",
            "label": "攻击扇面",
            "value": 45,
            "unit": "°",
            "display": "45°"
          },
          {
            "key": "attack_radius",
            "label": "攻击范围半径",
            "value": 3.5,
            "unit": "",
            "display": "3.5"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_hit_chance": 0.05,
              "damage": 650,
              "penetrating_damage": 10
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "650",
              "penetrating_damage": "10"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.07,
              "damage": 720,
              "penetrating_damage": 11
            },
            "display": {
              "critical_hit_chance": "7%",
              "damage": "720",
              "penetrating_damage": "11"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.09,
              "damage": 790,
              "penetrating_damage": 12
            },
            "display": {
              "critical_hit_chance": "9%",
              "damage": "790",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.11,
              "damage": 850,
              "penetrating_damage": 13
            },
            "display": {
              "critical_hit_chance": "11%",
              "damage": "850",
              "penetrating_damage": "13"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 920,
              "penetrating_damage": 14
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "920",
              "penetrating_damage": "14"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 921,
              "penetrating_damage": 14
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "921",
              "penetrating_damage": "14"
            }
          }
        ],
        "columns": [
          {
            "key": "critical_hit_chance",
            "label": "暴击率",
            "unit": "%"
          },
          {
            "key": "damage",
            "label": "伤害",
            "unit": ""
          },
          {
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1920。",
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": true,
        "can_not_be_dropped": false,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "tool",
      "gathering_tool": {
        "durability_price": 1,
        "ending_time": 0.5,
        "prefab_common_id": "@halloween_gun_1",
        "prefab_pbr_id": "@halloween_gun_1_pbr",
        "sounds": [
          "axe_use_wood",
          "axe_use_wood",
          "axe_use_wood",
          "axe_use_wood"
        ],
        "speed_modifier": 1,
        "start_time": 0.5,
        "tool_damage": 1
      },
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_halloween_range_shotgun_axe_description",
        "full_description": "inventory_stack_view_wls2_halloween_range_shotgun_axe_description",
        "name": "inventory_stack_view_wls2_halloween_range_shotgun_axe_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_shotgun_axe",
        "tags": [
          "wls2_tools_axe_0",
          "wls2_tools_axe_1",
          "wls2_tools_axe_2",
          "wls2_tools_axe_3",
          "wls2_tools_axe_4",
          "wls2_tools_axe_5",
          "weapon",
          "weapon_storage",
          "quick",
          "hatchet_iron",
          "hatchet",
          "tool",
          "festive"
        ],
        "tier": 4,
        "tool_id": "wls2_halloween_range_shotgun_axe",
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_21_weapon_range_shotgun_axe_4"
      },
      "item_id": "wls2_halloween_21_weapon_range_shotgun_axe_4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_range_shotgun_axe_description",
        "en": {
          "description": "A unique firearm with a blade on it. ",
          "full_description": "A unique firearm with a blade on it. ",
          "name": "Сuriosity"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_range_shotgun_axe_description",
        "name_key": "inventory_stack_view_wls2_halloween_range_shotgun_axe_name",
        "zh": {
          "description": "刻有刀刃的独特枪支。",
          "full_description": "刻有刀刃的独特枪支。",
          "name": "古董"
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
                "wls2_halloween_25_currency_pumpkin": 600
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_range_shotgun_axe_4",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_range_shotgun_axe_4"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_1": 1,
                "wls2_resourse_secondary_ingot_1": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_range_shotgun_axe_4"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_weapon_range_shotgun_axe_4_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.5,
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_halloween_21_weapon_range_shotgun_axe_4",
            "transaction_id": "transaction_iap_wls_4_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.5,
            "level_max": 110,
            "level_min": 91,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_halloween_21_weapon_range_shotgun_axe_4",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_shotgun_axe",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.08,
          "3": 0.1,
          "4": 0.13,
          "5": 0.15
        },
        "damage": {
          "1": 470,
          "2": 520,
          "3": 570,
          "4": 620,
          "5": 660,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 226,
          "2": 226,
          "3": 226,
          "4": 226,
          "5": 226
        },
        "penetrating_damage": {
          "1": 7,
          "2": 8,
          "3": 9,
          "4": 9,
          "5": 10
        }
      },
      "stat_labels": {
        "critical_hit_chance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_critical_hit_chance",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_critical_hit_chance",
          "en": "{0} of critical strike chance",
          "zh": "{0} 暴击几率"
        },
        "damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_damage",
            "tooltip_type": "weapon"
          },
          "display_key": "ui_item_stats_damage",
          "en": "Damage",
          "zh": "伤害"
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "penetrating_damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_penetrating_damage",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_penetrating_damage",
          "en": "Piercing damage",
          "zh": "穿刺伤害"
        }
      },
      "subcategory": "axe",
      "tags": [
        "wls2_tools_axe_0",
        "wls2_tools_axe_1",
        "wls2_tools_axe_2",
        "wls2_tools_axe_3",
        "wls2_tools_axe_4",
        "wls2_tools_axe_5",
        "weapon",
        "weapon_storage",
        "quick",
        "hatchet_iron",
        "hatchet",
        "tool",
        "festive"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": "wls2_halloween_range_shotgun_axe",
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 45,
          "radius": 3.5,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 0.6,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_weapon_range_firearms_shotgun_4"
        ],
        "hit_sounds": [
          "wls2_weapon_range_firearms_shotgun_4"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@halloween_gun_1",
        "prefab_pbr_id": "@halloween_gun_1_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_halloween_21_weapon_range_shotgun_axe_4",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 3.5,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 0.85,
        "attack_damage_time": 0.25,
        "attack_ending_time": 0.6,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 1.1764705882352942,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "shotgun"
        ]
      },
      "image_key": "c23acd4f3b25946e2425cc49e5fe3188be6b88d3cda68116148d229697720094",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "古董",
        "name_en": "Сuriosity",
        "description_zh": "刻有刀刃的独特枪支。",
        "description_en": "A unique firearm with a blade on it. ",
        "category_zh": "工具",
        "subcategory": "axe",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_21_weapon_range_shotgun_axe_4 古董 сuriosity 刻有刀刃的独特枪支。 a unique firearm with a blade on it.  tool 工具 axe wls2_tools_axe_0 wls2_tools_axe_1 wls2_tools_axe_2 wls2_tools_axe_3 wls2_tools_axe_4 wls2_tools_axe_5 weapon weapon_storage quick hatchet_iron hatchet tool festive wls2_halloween_21_weapon_range_shotgun_axe_4"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 470,
            "unit": "",
            "display": "470"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 1.1764705882352942,
            "unit": "次/秒",
            "display": "1.18 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 226,
            "unit": "",
            "display": "226"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 3.5,
            "unit": "",
            "display": "3.5"
          }
        ],
        "fixed": [
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 0.85,
            "unit": "秒",
            "display": "0.85 秒"
          },
          {
            "key": "attack_durability_cost",
            "label": "每次攻击耐久消耗",
            "value": 1,
            "unit": "点",
            "display": "1 点"
          },
          {
            "key": "attack_angle",
            "label": "攻击扇面",
            "value": 45,
            "unit": "°",
            "display": "45°"
          },
          {
            "key": "attack_radius",
            "label": "攻击范围半径",
            "value": 3.5,
            "unit": "",
            "display": "3.5"
          },
          {
            "key": "gathering_damage",
            "label": "采集效率",
            "value": 1,
            "unit": "",
            "display": "1"
          },
          {
            "key": "gathering_durability_cost",
            "label": "每次采集耐久消耗",
            "value": 1,
            "unit": "点",
            "display": "1 点"
          },
          {
            "key": "gathering_cycle",
            "label": "基础采集间隔",
            "value": 1.0,
            "unit": "秒",
            "display": "1 秒"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_hit_chance": 0.05,
              "damage": 470,
              "penetrating_damage": 7
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "470",
              "penetrating_damage": "7"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.08,
              "damage": 520,
              "penetrating_damage": 8
            },
            "display": {
              "critical_hit_chance": "8%",
              "damage": "520",
              "penetrating_damage": "8"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 570,
              "penetrating_damage": 9
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "570",
              "penetrating_damage": "9"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 620,
              "penetrating_damage": 9
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "620",
              "penetrating_damage": "9"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 660,
              "penetrating_damage": 10
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "660",
              "penetrating_damage": "10"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 661,
              "penetrating_damage": 10
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "661",
              "penetrating_damage": "10"
            }
          }
        ],
        "columns": [
          {
            "key": "critical_hit_chance",
            "label": "暴击率",
            "unit": "%"
          },
          {
            "key": "damage",
            "label": "伤害",
            "unit": ""
          },
          {
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1660。",
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
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
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_halloween_21_stakegun_4_description",
        "full_description": "inventory_stack_view_wls2_halloween_21_stakegun_4_description",
        "name": "inventory_stack_view_wls2_halloween_stakegun_4_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary05/wls2_halloween_stakegun_4",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_21_weapon_range_stakegun_4"
      },
      "item_id": "wls2_halloween_21_weapon_range_stakegun_4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_21_stakegun_4_description",
        "en": {
          "description": "Deadly witch hunters weapon",
          "full_description": "Deadly witch hunters weapon",
          "name": "Impaler"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_21_stakegun_4_description",
        "name_key": "inventory_stack_view_wls2_halloween_stakegun_4_name",
        "zh": {
          "description": "巫医猎人的致命武器",
          "full_description": "巫医猎人的致命武器",
          "name": "穿刺者"
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
                "wls2_halloween_25_currency_pumpkin": 600
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_range_stakegun_4",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_range_stakegun_4"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_1": 2,
                "wls2_resourse_fourfold_nails_1": 1,
                "wls2_resourse_secondary_plank_1": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_21_weapon_range_stakegun_4"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_21_weapon_range_stakegun_4_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_halloween_stakegun_4",
      "stat_curves": {
        "damage": {
          "1": 385,
          "2": 424,
          "3": 462,
          "4": 501,
          "5": 539,
          "per_level_after_max": 1
        },
        "dot_amount": {
          "1": 100,
          "2": 150,
          "3": 200,
          "4": 250,
          "5": 300
        },
        "dot_time": {
          "1": 3,
          "2": 3,
          "3": 3,
          "4": 3,
          "5": 3
        },
        "max_durability": {
          "1": 150,
          "2": 150,
          "3": 150,
          "4": 150,
          "5": 150
        },
        "penetrating_damage": {
          "1": 12,
          "2": 13,
          "3": 14,
          "4": 15,
          "5": 16
        }
      },
      "stat_labels": {
        "damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_damage",
            "tooltip_type": "weapon"
          },
          "display_key": "ui_item_stats_damage",
          "en": "Damage",
          "zh": "伤害"
        },
        "dot_amount": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name_value_format": "ui_item_stats_dot_amount",
            "second_diff_format": "ui_item_stats_diff_plus_format",
            "second_value": "dot_time",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special"
          },
          "display_key": "ui_item_stats_dot_amount",
          "en": "Deals {0} damage over {1} seconds",
          "zh": "在 {1} 秒内造成 {0} 伤害"
        },
        "dot_time": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        },
        "penetrating_damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_penetrating_damage",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_penetrating_damage",
          "en": "Piercing damage",
          "zh": "穿刺伤害"
        }
      },
      "subcategory": "pistol",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "arrow_speed": 25,
          "bow_stretched_time": 0.3,
          "headshot_probability": 0.3,
          "max_charge_damage_multiplier": 2.5,
          "min_charge_time": 0.75,
          "miss_overcharge_time": 1,
          "miss_shot_distance": 15,
          "runaway_range": 0.5,
          "shoot_repeat": true,
          "type": "bow"
        },
        "attack_damage_time": 0.4,
        "attack_ending_time": 0.4,
        "attack_range": 7,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_halloween_range_crossbow_load",
          "wls2_halloween_range_crossbow_shoot"
        ],
        "hit_sounds": [
          "wls2_halloween_range_crossbow_load",
          "wls2_halloween_range_crossbow_shoot"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@halloween_skull_gun",
        "speed_modifier": 1,
        "tags": [
          "ranged"
        ]
      },
      "weapon_id": "wls2_halloween_21_weapon_range_stakegun_4",
      "weapon_summary": {
        "attack_action": {
          "arrow_speed": 25,
          "bow_stretched_time": 0.3,
          "headshot_probability": 0.3,
          "max_charge_damage_multiplier": 2.5,
          "min_charge_time": 0.75,
          "miss_overcharge_time": 1,
          "miss_shot_distance": 15,
          "runaway_range": 0.5,
          "shoot_repeat": true,
          "type": "bow"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.4,
        "attack_ending_time": 0.4,
        "attack_range": 7,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged"
        ]
      },
      "image_key": "0a79fd4d46848518f8161a55a02f38bf4a9f06ee08057e10579dbb681cb9405a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "穿刺者",
        "name_en": "Impaler",
        "description_zh": "巫医猎人的致命武器",
        "description_en": "Deadly witch hunters weapon",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "优秀",
        "search_text": "wls2_halloween_21_weapon_range_stakegun_4 穿刺者 impaler 巫医猎人的致命武器 deadly witch hunters weapon weapon 武器 pistol weapon weapon_storage quick festive wls2_halloween_21_weapon_range_stakegun_4"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 385,
            "unit": "",
            "display": "385"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 1.25,
            "unit": "次/秒",
            "display": "1.25 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 150,
            "unit": "",
            "display": "150"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 7,
            "unit": "",
            "display": "7"
          }
        ],
        "fixed": [
          {
            "key": "dot_time",
            "label": "持续伤害时间",
            "value": 3,
            "unit": "秒",
            "display": "3 秒"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 0.8,
            "unit": "秒",
            "display": "0.8 秒"
          },
          {
            "key": "attack_durability_cost",
            "label": "每次攻击耐久消耗",
            "value": 1,
            "unit": "点",
            "display": "1 点"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 385,
              "dot_amount": 100,
              "penetrating_damage": 12
            },
            "display": {
              "damage": "385",
              "dot_amount": "100",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 424,
              "dot_amount": 150,
              "penetrating_damage": 13
            },
            "display": {
              "damage": "424",
              "dot_amount": "150",
              "penetrating_damage": "13"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 462,
              "dot_amount": 200,
              "penetrating_damage": 14
            },
            "display": {
              "damage": "462",
              "dot_amount": "200",
              "penetrating_damage": "14"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 501,
              "dot_amount": 250,
              "penetrating_damage": 15
            },
            "display": {
              "damage": "501",
              "dot_amount": "250",
              "penetrating_damage": "15"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 539,
              "dot_amount": 300,
              "penetrating_damage": 16
            },
            "display": {
              "damage": "539",
              "dot_amount": "300",
              "penetrating_damage": "16"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 540,
              "dot_amount": 300,
              "penetrating_damage": 16
            },
            "display": {
              "damage": "540",
              "dot_amount": "300",
              "penetrating_damage": "16"
            }
          }
        ],
        "columns": [
          {
            "key": "damage",
            "label": "伤害",
            "unit": ""
          },
          {
            "key": "dot_amount",
            "label": "持续伤害总量",
            "unit": ""
          },
          {
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1539。",
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
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
      "bodypart": 35,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 35,
        "description": "inventory_stack_view_wls2_halloween_22_armor_body_5_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_22_armor_body_5_rare_description",
        "name": "inventory_stack_view_wls2_halloween_22_armor_body_5_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_body_5_rare_icon",
        "tags": [
          "chest",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_22_armor_body_5_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_22_armor_body_5_rare_description",
        "en": {
          "description": "A thick coat fabric shields you from bullets and a necklace of the fangs makes you look terrifying.",
          "full_description": "A thick coat fabric shields you from bullets and a necklace of the fangs makes you look terrifying.",
          "name": "Pumpkin Hunter coat"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_22_armor_body_5_rare_description",
        "name_key": "inventory_stack_view_wls2_halloween_22_armor_body_5_rare_name",
        "zh": {
          "description": "一件厚厚的外套可以让你免受子弹的伤害，一条獠牙项链能够让别人对你更加畏惧。",
          "full_description": "一件厚厚的外套可以让你免受子弹的伤害，一条獠牙项链能够让别人对你更加畏惧。",
          "name": "南瓜猎人外套"
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
                "wls2_resourse_secondary_leather_5": 8,
                "wls2_resourse_tertiary_clothroll_5": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_body_5_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_22_armor_body_5_rare_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 900
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_body_5_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_22_trader_armor_body_5_rare"
          }
        ]
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
            "stack_id": "wls2_halloween_22_armor_body_5_rare",
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
            "stack_id": "wls2_halloween_22_armor_body_5_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_body_5_rare_icon",
      "stat_curves": {
        "armor": {
          "1": 630,
          "2": 693,
          "3": 756,
          "4": 819,
          "5": 882,
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
        "firearm_resistance": {
          "1": 0.04,
          "2": 0.08,
          "3": 0.12,
          "4": 0.16,
          "5": 0.2
        },
        "max_durability": {
          "1": 15987,
          "2": 17586,
          "3": 19184,
          "4": 20783,
          "5": 22382
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "5c7ace2f9d23f8607b5ddc76f7f959498c1aa719e94921cf140b2a5f86575f15",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜猎人外套",
        "name_en": "Pumpkin Hunter coat",
        "description_zh": "一件厚厚的外套可以让你免受子弹的伤害，一条獠牙项链能够让别人对你更加畏惧。",
        "description_en": "A thick coat fabric shields you from bullets and a necklace of the fangs makes you look terrifying.",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_22_armor_body_5_rare 南瓜猎人外套 pumpkin hunter coat 一件厚厚的外套可以让你免受子弹的伤害，一条獠牙项链能够让别人对你更加畏惧。 a thick coat fabric shields you from bullets and a necklace of the fangs makes you look terrifying. armor 护甲 body chest armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 630,
            "unit": "",
            "display": "630"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 15987,
            "unit": "",
            "display": "15987"
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
              "armor": 630,
              "dexterity": 2,
              "firearm_resistance": 0.04,
              "max_durability": 15987
            },
            "display": {
              "armor": "630",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "max_durability": "15987"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 693,
              "dexterity": 3,
              "firearm_resistance": 0.08,
              "max_durability": 17586
            },
            "display": {
              "armor": "693",
              "dexterity": "+3",
              "firearm_resistance": "+8%",
              "max_durability": "17586"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 756,
              "dexterity": 4,
              "firearm_resistance": 0.12,
              "max_durability": 19184
            },
            "display": {
              "armor": "756",
              "dexterity": "+4",
              "firearm_resistance": "+12%",
              "max_durability": "19184"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 819,
              "dexterity": 5,
              "firearm_resistance": 0.16,
              "max_durability": 20783
            },
            "display": {
              "armor": "819",
              "dexterity": "+5",
              "firearm_resistance": "+16%",
              "max_durability": "20783"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 882,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 22382
            },
            "display": {
              "armor": "882",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
              "max_durability": "22382"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 883,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 22382
            },
            "display": {
              "armor": "883",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
              "max_durability": "22382"
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
          "防御：6 级起每级增加 1，最高 1882。"
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
      "bodypart": 35,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 35,
        "description": "inventory_stack_view_wls2_halloween_22_armor_body_5_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_22_armor_body_5_rare_description",
        "name": "inventory_stack_view_wls2_halloween_22_armor_body_5_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_body_5_rare_icon",
        "tags": [
          "chest",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_22_armor_body_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_22_armor_body_5_rare_description",
        "en": {
          "description": "A thick coat fabric shields you from bullets and a necklace of the fangs makes you look terrifying.",
          "full_description": "A thick coat fabric shields you from bullets and a necklace of the fangs makes you look terrifying.",
          "name": "Pumpkin Hunter coat"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_22_armor_body_5_rare_description",
        "name_key": "inventory_stack_view_wls2_halloween_22_armor_body_5_rare_name",
        "zh": {
          "description": "一件厚厚的外套可以让你免受子弹的伤害，一条獠牙项链能够让别人对你更加畏惧。",
          "full_description": "一件厚厚的外套可以让你免受子弹的伤害，一条獠牙项链能够让别人对你更加畏惧。",
          "name": "南瓜猎人外套"
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
                "wls2_resourse_secondary_leather_6": 8,
                "wls2_resourse_tertiary_clothroll_5": 3
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_body_6_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_22_armor_body_6_rare_recycle"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_body_6_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_22_trader_armor_body_6_rare"
          }
        ]
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
            "stack_id": "wls2_halloween_22_armor_body_6_rare",
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
            "stack_id": "wls2_halloween_22_armor_body_6_rare",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_body_5_rare_icon",
      "stat_curves": {
        "armor": {
          "1": 1260,
          "2": 1386,
          "3": 1512,
          "4": 1638,
          "5": 1764,
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
          "1": 28777,
          "2": 31655,
          "3": 34531,
          "4": 37409,
          "5": 40288
        },
        "snow_resistance": {
          "1": 0.02,
          "2": 0.02,
          "3": 0.02,
          "4": 0.02,
          "5": 0.02
        },
        "warm_modifier": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "5c7ace2f9d23f8607b5ddc76f7f959498c1aa719e94921cf140b2a5f86575f15",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜猎人外套",
        "name_en": "Pumpkin Hunter coat",
        "description_zh": "一件厚厚的外套可以让你免受子弹的伤害，一条獠牙项链能够让别人对你更加畏惧。",
        "description_en": "A thick coat fabric shields you from bullets and a necklace of the fangs makes you look terrifying.",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_22_armor_body_6_rare 南瓜猎人外套 pumpkin hunter coat 一件厚厚的外套可以让你免受子弹的伤害，一条獠牙项链能够让别人对你更加畏惧。 a thick coat fabric shields you from bullets and a necklace of the fangs makes you look terrifying. armor 护甲 body chest armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 1260,
            "unit": "",
            "display": "1260"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 28777,
            "unit": "",
            "display": "28777"
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
            "value": 0,
            "unit": "",
            "display": "0"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 1260,
              "dexterity": 4,
              "firearm_resistance": 0.04,
              "max_durability": 28777
            },
            "display": {
              "armor": "1260",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "max_durability": "28777"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 1386,
              "dexterity": 5,
              "firearm_resistance": 0.08,
              "max_durability": 31655
            },
            "display": {
              "armor": "1386",
              "dexterity": "+5",
              "firearm_resistance": "+8%",
              "max_durability": "31655"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1512,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "max_durability": 34531
            },
            "display": {
              "armor": "1512",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "max_durability": "34531"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1638,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "max_durability": 37409
            },
            "display": {
              "armor": "1638",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "max_durability": "37409"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1764,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 40288
            },
            "display": {
              "armor": "1764",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "max_durability": "40288"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1765,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 40288
            },
            "display": {
              "armor": "1765",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "max_durability": "40288"
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
          "防御：6 级起每级增加 1，最高 2764。"
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
      "bodypart": 35,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 35,
        "description": "inventory_stack_view_wls2_halloween_22_armor_body_5_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_22_armor_body_5_rare_description",
        "name": "inventory_stack_view_wls2_halloween_22_armor_body_5_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_body_5_rare_icon",
        "tags": [
          "chest",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_22_armor_body_7_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_22_armor_body_5_rare_description",
        "en": {
          "description": "A thick coat fabric shields you from bullets and a necklace of the fangs makes you look terrifying.",
          "full_description": "A thick coat fabric shields you from bullets and a necklace of the fangs makes you look terrifying.",
          "name": "Pumpkin Hunter coat"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_22_armor_body_5_rare_description",
        "name_key": "inventory_stack_view_wls2_halloween_22_armor_body_5_rare_name",
        "zh": {
          "description": "一件厚厚的外套可以让你免受子弹的伤害，一条獠牙项链能够让别人对你更加畏惧。",
          "full_description": "一件厚厚的外套可以让你免受子弹的伤害，一条獠牙项链能够让别人对你更加畏惧。",
          "name": "南瓜猎人外套"
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
                "wls2_resourse_secondary_leather_7": 8,
                "wls2_resourse_tertiary_clothroll_5": 4
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_body_7_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_22_armor_body_7_rare_recycle"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_body_7_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_22_trader_armor_body_7_rare"
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
            "level_min": 115,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_halloween_22_armor_body_7_rare",
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
            "stack_id": "wls2_halloween_22_armor_body_7_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_body_5_rare_icon",
      "stat_curves": {
        "armor": {
          "1": 2520,
          "2": 2772,
          "3": 3024,
          "4": 3276,
          "5": 3528,
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
          "1": 51798,
          "2": 56978,
          "3": 62157,
          "4": 67337,
          "5": 72517
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "5c7ace2f9d23f8607b5ddc76f7f959498c1aa719e94921cf140b2a5f86575f15",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜猎人外套",
        "name_en": "Pumpkin Hunter coat",
        "description_zh": "一件厚厚的外套可以让你免受子弹的伤害，一条獠牙项链能够让别人对你更加畏惧。",
        "description_en": "A thick coat fabric shields you from bullets and a necklace of the fangs makes you look terrifying.",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_22_armor_body_7_rare 南瓜猎人外套 pumpkin hunter coat 一件厚厚的外套可以让你免受子弹的伤害，一条獠牙项链能够让别人对你更加畏惧。 a thick coat fabric shields you from bullets and a necklace of the fangs makes you look terrifying. armor 护甲 body chest armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 2520,
            "unit": "",
            "display": "2520"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 51798,
            "unit": "",
            "display": "51798"
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
            "value": 3,
            "unit": "",
            "display": "3"
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
              "armor": 2520,
              "dexterity": 6,
              "fire_resistance": 0.04,
              "firearm_resistance": 0.04,
              "max_durability": 51798
            },
            "display": {
              "armor": "2520",
              "dexterity": "+6",
              "fire_resistance": "+4%",
              "firearm_resistance": "+4%",
              "max_durability": "51798"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 2772,
              "dexterity": 7,
              "fire_resistance": 0.08,
              "firearm_resistance": 0.08,
              "max_durability": 56978
            },
            "display": {
              "armor": "2772",
              "dexterity": "+7",
              "fire_resistance": "+8%",
              "firearm_resistance": "+8%",
              "max_durability": "56978"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 3024,
              "dexterity": 8,
              "fire_resistance": 0.12,
              "firearm_resistance": 0.12,
              "max_durability": 62157
            },
            "display": {
              "armor": "3024",
              "dexterity": "+8",
              "fire_resistance": "+12%",
              "firearm_resistance": "+12%",
              "max_durability": "62157"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 3276,
              "dexterity": 10,
              "fire_resistance": 0.16,
              "firearm_resistance": 0.16,
              "max_durability": 67337
            },
            "display": {
              "armor": "3276",
              "dexterity": "+10",
              "fire_resistance": "+16%",
              "firearm_resistance": "+16%",
              "max_durability": "67337"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 3528,
              "dexterity": 12,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "max_durability": 72517
            },
            "display": {
              "armor": "3528",
              "dexterity": "+12",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "max_durability": "72517"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 3529,
              "dexterity": 12,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "max_durability": 72517
            },
            "display": {
              "armor": "3529",
              "dexterity": "+12",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "max_durability": "72517"
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
          "防御：6 级起每级增加 1，最高 4528。"
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
        "description": "inventory_stack_view_wls2_halloween_22_armor_boots_5_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_22_armor_boots_5_rare_description",
        "name": "inventory_stack_view_wls2_halloween_22_armor_boots_5_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_boots_5_rare_icon",
        "tags": [
          "boots",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_22_armor_boots_5_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_22_armor_boots_5_rare_description",
        "en": {
          "description": "Durable boots made of genuine leather. But whose skin was that?..",
          "full_description": "Durable boots made of genuine leather. But whose skin was that?..",
          "name": "Pumpkin Hunter boots"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_22_armor_boots_5_rare_description",
        "name_key": "inventory_stack_view_wls2_halloween_22_armor_boots_5_rare_name",
        "zh": {
          "description": "结实耐穿的靴子，由真皮制成。但那是谁的皮呢？",
          "full_description": "结实耐穿的靴子，由真皮制成。但那是谁的皮呢？",
          "name": "南瓜猎人靴"
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
                "wls2_resourse_secondary_leather_5": 3,
                "wls2_resourse_secondary_rope_5": 4,
                "wls2_resourse_tertiary_clothroll_5": 3
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_boots_5_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_22_armor_boots_5_rare_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 900
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_boots_5_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_22_trader_armor_boots_5_rare"
          }
        ]
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
            "stack_id": "wls2_halloween_22_armor_boots_5_rare",
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
            "stack_id": "wls2_halloween_22_armor_boots_5_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_boots_5_rare_icon",
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
        "firearm_resistance": {
          "1": 0.04,
          "2": 0.08,
          "3": 0.12,
          "4": 0.16,
          "5": 0.2
        },
        "max_durability": {
          "1": 12656,
          "2": 13922,
          "3": 15188,
          "4": 16453,
          "5": 17719
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
        "boots",
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
      "image_key": "9f4960656cc958ab4fc299435c80309acb7f06435b992a421c1191b99bb79bf6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜猎人靴",
        "name_en": "Pumpkin Hunter boots",
        "description_zh": "结实耐穿的靴子，由真皮制成。但那是谁的皮呢？",
        "description_en": "Durable boots made of genuine leather. But whose skin was that?..",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_22_armor_boots_5_rare 南瓜猎人靴 pumpkin hunter boots 结实耐穿的靴子，由真皮制成。但那是谁的皮呢？ durable boots made of genuine leather. but whose skin was that?.. armor 护甲 boots boots armor armor_storage festive"
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
            "value": 12656,
            "unit": "",
            "display": "12656"
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
              "armor": 180,
              "dexterity": 2,
              "firearm_resistance": 0.04,
              "max_durability": 12656
            },
            "display": {
              "armor": "180",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "max_durability": "12656"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 198,
              "dexterity": 3,
              "firearm_resistance": 0.08,
              "max_durability": 13922
            },
            "display": {
              "armor": "198",
              "dexterity": "+3",
              "firearm_resistance": "+8%",
              "max_durability": "13922"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 216,
              "dexterity": 4,
              "firearm_resistance": 0.12,
              "max_durability": 15188
            },
            "display": {
              "armor": "216",
              "dexterity": "+4",
              "firearm_resistance": "+12%",
              "max_durability": "15188"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 234,
              "dexterity": 5,
              "firearm_resistance": 0.16,
              "max_durability": 16453
            },
            "display": {
              "armor": "234",
              "dexterity": "+5",
              "firearm_resistance": "+16%",
              "max_durability": "16453"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 252,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 17719
            },
            "display": {
              "armor": "252",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
              "max_durability": "17719"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 253,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 17719
            },
            "display": {
              "armor": "253",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
              "max_durability": "17719"
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
        "description": "inventory_stack_view_wls2_halloween_22_armor_boots_5_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_22_armor_boots_5_rare_description",
        "name": "inventory_stack_view_wls2_halloween_22_armor_boots_5_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_boots_5_rare_icon",
        "tags": [
          "boots",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_22_armor_boots_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_22_armor_boots_5_rare_description",
        "en": {
          "description": "Durable boots made of genuine leather. But whose skin was that?..",
          "full_description": "Durable boots made of genuine leather. But whose skin was that?..",
          "name": "Pumpkin Hunter boots"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_22_armor_boots_5_rare_description",
        "name_key": "inventory_stack_view_wls2_halloween_22_armor_boots_5_rare_name",
        "zh": {
          "description": "结实耐穿的靴子，由真皮制成。但那是谁的皮呢？",
          "full_description": "结实耐穿的靴子，由真皮制成。但那是谁的皮呢？",
          "name": "南瓜猎人靴"
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
                "wls2_resourse_secondary_leather_6": 3,
                "wls2_resourse_secondary_rope_6": 4,
                "wls2_resourse_tertiary_clothroll_5": 4
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_boots_6_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_22_armor_boots_6_rare_recycle"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_boots_6_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_22_trader_armor_boots_6_rare"
          }
        ]
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
            "stack_id": "wls2_halloween_22_armor_boots_6_rare",
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
            "stack_id": "wls2_halloween_22_armor_boots_6_rare",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_boots_5_rare_icon",
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
          "1": 22781,
          "2": 25060,
          "3": 27338,
          "4": 29615,
          "5": 31894
        },
        "move_speed_modifier": {
          "1": 0.2,
          "2": 0.2,
          "3": 0.2,
          "4": 0.2,
          "5": 0.2
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
        "boots",
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
      "image_key": "9f4960656cc958ab4fc299435c80309acb7f06435b992a421c1191b99bb79bf6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜猎人靴",
        "name_en": "Pumpkin Hunter boots",
        "description_zh": "结实耐穿的靴子，由真皮制成。但那是谁的皮呢？",
        "description_en": "Durable boots made of genuine leather. But whose skin was that?..",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_22_armor_boots_6_rare 南瓜猎人靴 pumpkin hunter boots 结实耐穿的靴子，由真皮制成。但那是谁的皮呢？ durable boots made of genuine leather. but whose skin was that?.. armor 护甲 boots boots armor armor_storage festive"
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
            "value": 22781,
            "unit": "",
            "display": "22781"
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
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.2,
            "unit": "%",
            "display": "+20%"
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
            "value": 2,
            "unit": "",
            "display": "2"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 360,
              "dexterity": 4,
              "firearm_resistance": 0.04,
              "max_durability": 22781
            },
            "display": {
              "armor": "360",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "max_durability": "22781"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 396,
              "dexterity": 5,
              "firearm_resistance": 0.08,
              "max_durability": 25060
            },
            "display": {
              "armor": "396",
              "dexterity": "+5",
              "firearm_resistance": "+8%",
              "max_durability": "25060"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 432,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "max_durability": 27338
            },
            "display": {
              "armor": "432",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "max_durability": "27338"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 468,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "max_durability": 29615
            },
            "display": {
              "armor": "468",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "max_durability": "29615"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 504,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 31894
            },
            "display": {
              "armor": "504",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "max_durability": "31894"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 505,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 31894
            },
            "display": {
              "armor": "505",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "max_durability": "31894"
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
      "bodypart": 33,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 33,
        "description": "inventory_stack_view_wls2_halloween_22_armor_boots_5_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_22_armor_boots_5_rare_description",
        "name": "inventory_stack_view_wls2_halloween_22_armor_boots_5_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_boots_5_rare_icon",
        "tags": [
          "boots",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_22_armor_boots_7_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_22_armor_boots_5_rare_description",
        "en": {
          "description": "Durable boots made of genuine leather. But whose skin was that?..",
          "full_description": "Durable boots made of genuine leather. But whose skin was that?..",
          "name": "Pumpkin Hunter boots"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_22_armor_boots_5_rare_description",
        "name_key": "inventory_stack_view_wls2_halloween_22_armor_boots_5_rare_name",
        "zh": {
          "description": "结实耐穿的靴子，由真皮制成。但那是谁的皮呢？",
          "full_description": "结实耐穿的靴子，由真皮制成。但那是谁的皮呢？",
          "name": "南瓜猎人靴"
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
                "wls2_resourse_secondary_leather_7": 3,
                "wls2_resourse_secondary_rope_7": 4,
                "wls2_resourse_tertiary_clothroll_5": 5
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_boots_7_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_22_armor_boots_7_rare_recycle"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_boots_7_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_22_trader_armor_boots_7_rare"
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
            "level_min": 115,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_halloween_22_armor_boots_7_rare",
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
            "stack_id": "wls2_halloween_22_armor_boots_7_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_boots_5_rare_icon",
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
          "1": 41005,
          "2": 45106,
          "3": 49207,
          "4": 53307,
          "5": 57408
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
      "image_key": "9f4960656cc958ab4fc299435c80309acb7f06435b992a421c1191b99bb79bf6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜猎人靴",
        "name_en": "Pumpkin Hunter boots",
        "description_zh": "结实耐穿的靴子，由真皮制成。但那是谁的皮呢？",
        "description_en": "Durable boots made of genuine leather. But whose skin was that?..",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_22_armor_boots_7_rare 南瓜猎人靴 pumpkin hunter boots 结实耐穿的靴子，由真皮制成。但那是谁的皮呢？ durable boots made of genuine leather. but whose skin was that?.. armor 护甲 boots boots armor armor_storage festive"
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
            "value": 41005,
            "unit": "",
            "display": "41005"
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
              "max_durability": 41005
            },
            "display": {
              "armor": "720",
              "dexterity": "+6",
              "fire_resistance": "+4%",
              "firearm_resistance": "+4%",
              "max_durability": "41005"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 792,
              "dexterity": 7,
              "fire_resistance": 0.08,
              "firearm_resistance": 0.08,
              "max_durability": 45106
            },
            "display": {
              "armor": "792",
              "dexterity": "+7",
              "fire_resistance": "+8%",
              "firearm_resistance": "+8%",
              "max_durability": "45106"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 864,
              "dexterity": 8,
              "fire_resistance": 0.12,
              "firearm_resistance": 0.12,
              "max_durability": 49207
            },
            "display": {
              "armor": "864",
              "dexterity": "+8",
              "fire_resistance": "+12%",
              "firearm_resistance": "+12%",
              "max_durability": "49207"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 936,
              "dexterity": 10,
              "fire_resistance": 0.16,
              "firearm_resistance": 0.16,
              "max_durability": 53307
            },
            "display": {
              "armor": "936",
              "dexterity": "+10",
              "fire_resistance": "+16%",
              "firearm_resistance": "+16%",
              "max_durability": "53307"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1008,
              "dexterity": 12,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "max_durability": 57408
            },
            "display": {
              "armor": "1008",
              "dexterity": "+12",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "max_durability": "57408"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1009,
              "dexterity": 12,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "max_durability": 57408
            },
            "display": {
              "armor": "1009",
              "dexterity": "+12",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "max_durability": "57408"
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
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 40,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 40,
        "description": "inventory_stack_view_wls2_halloween_22_armor_head_5_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_22_armor_head_5_rare_description",
        "name": "inventory_stack_view_wls2_halloween_22_armor_head_5_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_head_5_rare_icon",
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
      "item_id": "wls2_halloween_22_armor_head_5_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_22_armor_head_5_rare_description",
        "en": {
          "description": "Guarantees victory in a competition \"The most terrifying costume\" while staying incognito.",
          "full_description": "Guarantees victory in a competition \"The most terrifying costume\" while staying incognito.",
          "name": "Pumpkin Hunter mask"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_22_armor_head_5_rare_description",
        "name_key": "inventory_stack_view_wls2_halloween_22_armor_head_5_rare_name",
        "zh": {
          "description": "保证能在“最可怕装扮”大赛中获胜，同时也能一直将你伪装起来。",
          "full_description": "保证能在“最可怕装扮”大赛中获胜，同时也能一直将你伪装起来。",
          "name": "南瓜猎人面具"
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
                "wls2_resourse_fourfold_nails_5": 4,
                "wls2_resourse_secondary_cloth_5": 4,
                "wls2_resourse_secondary_leather_5": 4
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_head_5_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_22_armor_head_5_rare_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 900
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_head_5_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_22_trader_armor_head_5_rare"
          }
        ]
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
            "stack_id": "wls2_halloween_22_armor_head_5_rare",
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
            "stack_id": "wls2_halloween_22_armor_head_5_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_head_5_rare_icon",
      "stat_curves": {
        "armor": {
          "1": 270,
          "2": 297,
          "3": 324,
          "4": 351,
          "5": 378,
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
        "firearm_resistance": {
          "1": 0.04,
          "2": 0.08,
          "3": 0.12,
          "4": 0.16,
          "5": 0.2
        },
        "max_durability": {
          "1": 13989,
          "2": 15387,
          "3": 16786,
          "4": 18185,
          "5": 19584
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
      "image_key": "edd3185c40051a5d3b7fdba89b77f238c1d3f7334dd02cca9999cb9a6d565355",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜猎人面具",
        "name_en": "Pumpkin Hunter mask",
        "description_zh": "保证能在“最可怕装扮”大赛中获胜，同时也能一直将你伪装起来。",
        "description_en": "Guarantees victory in a competition \"The most terrifying costume\" while staying incognito.",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_22_armor_head_5_rare 南瓜猎人面具 pumpkin hunter mask 保证能在“最可怕装扮”大赛中获胜，同时也能一直将你伪装起来。 guarantees victory in a competition \"the most terrifying costume\" while staying incognito. armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 270,
            "unit": "",
            "display": "270"
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
              "armor": 270,
              "dexterity": 2,
              "firearm_resistance": 0.04,
              "max_durability": 13989
            },
            "display": {
              "armor": "270",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "max_durability": "13989"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 297,
              "dexterity": 3,
              "firearm_resistance": 0.08,
              "max_durability": 15387
            },
            "display": {
              "armor": "297",
              "dexterity": "+3",
              "firearm_resistance": "+8%",
              "max_durability": "15387"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 324,
              "dexterity": 4,
              "firearm_resistance": 0.12,
              "max_durability": 16786
            },
            "display": {
              "armor": "324",
              "dexterity": "+4",
              "firearm_resistance": "+12%",
              "max_durability": "16786"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 351,
              "dexterity": 5,
              "firearm_resistance": 0.16,
              "max_durability": 18185
            },
            "display": {
              "armor": "351",
              "dexterity": "+5",
              "firearm_resistance": "+16%",
              "max_durability": "18185"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 378,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 19584
            },
            "display": {
              "armor": "378",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
              "max_durability": "19584"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 379,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 19584
            },
            "display": {
              "armor": "379",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
              "max_durability": "19584"
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
          "防御：6 级起每级增加 1，最高 1378。"
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
      "bodypart": 40,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 40,
        "description": "inventory_stack_view_wls2_halloween_22_armor_head_5_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_22_armor_head_5_rare_description",
        "name": "inventory_stack_view_wls2_halloween_22_armor_head_5_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_head_5_rare_icon",
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
      "item_id": "wls2_halloween_22_armor_head_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_22_armor_head_5_rare_description",
        "en": {
          "description": "Guarantees victory in a competition \"The most terrifying costume\" while staying incognito.",
          "full_description": "Guarantees victory in a competition \"The most terrifying costume\" while staying incognito.",
          "name": "Pumpkin Hunter mask"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_22_armor_head_5_rare_description",
        "name_key": "inventory_stack_view_wls2_halloween_22_armor_head_5_rare_name",
        "zh": {
          "description": "保证能在“最可怕装扮”大赛中获胜，同时也能一直将你伪装起来。",
          "full_description": "保证能在“最可怕装扮”大赛中获胜，同时也能一直将你伪装起来。",
          "name": "南瓜猎人面具"
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
                "wls2_resourse_fourfold_nails_6": 4,
                "wls2_resourse_secondary_cloth_6": 4,
                "wls2_resourse_secondary_leather_6": 4
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_head_6_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_22_armor_head_6_rare_recycle"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_head_6_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_22_trader_armor_head_6_rare"
          }
        ]
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
            "stack_id": "wls2_halloween_22_armor_head_6_rare",
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
            "stack_id": "wls2_halloween_22_armor_head_6_rare",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_head_5_rare_icon",
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
          "1": 25180,
          "2": 27697,
          "3": 30215,
          "4": 32733,
          "5": 35251
        },
        "snow_resistance": {
          "1": 0.02,
          "2": 0.02,
          "3": 0.02,
          "4": 0.02,
          "5": 0.02
        },
        "warm_modifier": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0
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
      "image_key": "edd3185c40051a5d3b7fdba89b77f238c1d3f7334dd02cca9999cb9a6d565355",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜猎人面具",
        "name_en": "Pumpkin Hunter mask",
        "description_zh": "保证能在“最可怕装扮”大赛中获胜，同时也能一直将你伪装起来。",
        "description_en": "Guarantees victory in a competition \"The most terrifying costume\" while staying incognito.",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_22_armor_head_6_rare 南瓜猎人面具 pumpkin hunter mask 保证能在“最可怕装扮”大赛中获胜，同时也能一直将你伪装起来。 guarantees victory in a competition \"the most terrifying costume\" while staying incognito. armor 护甲 head head armor armor_storage festive"
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
            "value": 0,
            "unit": "",
            "display": "0"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 540,
              "dexterity": 4,
              "firearm_resistance": 0.04,
              "max_durability": 25180
            },
            "display": {
              "armor": "540",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "max_durability": "25180"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 594,
              "dexterity": 5,
              "firearm_resistance": 0.08,
              "max_durability": 27697
            },
            "display": {
              "armor": "594",
              "dexterity": "+5",
              "firearm_resistance": "+8%",
              "max_durability": "27697"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 648,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "max_durability": 30215
            },
            "display": {
              "armor": "648",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "max_durability": "30215"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 702,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "max_durability": 32733
            },
            "display": {
              "armor": "702",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "max_durability": "32733"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 756,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 35251
            },
            "display": {
              "armor": "756",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "max_durability": "35251"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 757,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 35251
            },
            "display": {
              "armor": "757",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "max_durability": "35251"
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
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 40,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 40,
        "description": "inventory_stack_view_wls2_halloween_22_armor_head_5_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_22_armor_head_5_rare_description",
        "name": "inventory_stack_view_wls2_halloween_22_armor_head_5_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_head_5_rare_icon",
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
      "item_id": "wls2_halloween_22_armor_head_7_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_22_armor_head_5_rare_description",
        "en": {
          "description": "Guarantees victory in a competition \"The most terrifying costume\" while staying incognito.",
          "full_description": "Guarantees victory in a competition \"The most terrifying costume\" while staying incognito.",
          "name": "Pumpkin Hunter mask"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_22_armor_head_5_rare_description",
        "name_key": "inventory_stack_view_wls2_halloween_22_armor_head_5_rare_name",
        "zh": {
          "description": "保证能在“最可怕装扮”大赛中获胜，同时也能一直将你伪装起来。",
          "full_description": "保证能在“最可怕装扮”大赛中获胜，同时也能一直将你伪装起来。",
          "name": "南瓜猎人面具"
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
                "wls2_resourse_fourfold_nails_7": 4,
                "wls2_resourse_secondary_cloth_7": 4,
                "wls2_resourse_secondary_leather_7": 4
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_head_7_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_22_armor_head_7_rare_recycle"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_head_7_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_22_trader_armor_head_7_rare"
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
            "level_min": 115,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_halloween_22_armor_head_7_rare",
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
            "stack_id": "wls2_halloween_22_armor_head_7_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_head_5_rare_icon",
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
          "1": 45324,
          "2": 49857,
          "3": 54389,
          "4": 58922,
          "5": 63454
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
      "image_key": "edd3185c40051a5d3b7fdba89b77f238c1d3f7334dd02cca9999cb9a6d565355",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜猎人面具",
        "name_en": "Pumpkin Hunter mask",
        "description_zh": "保证能在“最可怕装扮”大赛中获胜，同时也能一直将你伪装起来。",
        "description_en": "Guarantees victory in a competition \"The most terrifying costume\" while staying incognito.",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_22_armor_head_7_rare 南瓜猎人面具 pumpkin hunter mask 保证能在“最可怕装扮”大赛中获胜，同时也能一直将你伪装起来。 guarantees victory in a competition \"the most terrifying costume\" while staying incognito. armor 护甲 head head armor armor_storage festive"
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
            "value": 45324,
            "unit": "",
            "display": "45324"
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
              "max_durability": 45324
            },
            "display": {
              "armor": "1080",
              "dexterity": "+6",
              "fire_resistance": "+4%",
              "firearm_resistance": "+4%",
              "max_durability": "45324"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 1188,
              "dexterity": 7,
              "fire_resistance": 0.08,
              "firearm_resistance": 0.08,
              "max_durability": 49857
            },
            "display": {
              "armor": "1188",
              "dexterity": "+7",
              "fire_resistance": "+8%",
              "firearm_resistance": "+8%",
              "max_durability": "49857"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1296,
              "dexterity": 8,
              "fire_resistance": 0.12,
              "firearm_resistance": 0.12,
              "max_durability": 54389
            },
            "display": {
              "armor": "1296",
              "dexterity": "+8",
              "fire_resistance": "+12%",
              "firearm_resistance": "+12%",
              "max_durability": "54389"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1404,
              "dexterity": 10,
              "fire_resistance": 0.16,
              "firearm_resistance": 0.16,
              "max_durability": 58922
            },
            "display": {
              "armor": "1404",
              "dexterity": "+10",
              "fire_resistance": "+16%",
              "firearm_resistance": "+16%",
              "max_durability": "58922"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1512,
              "dexterity": 12,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "max_durability": 63454
            },
            "display": {
              "armor": "1512",
              "dexterity": "+12",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "max_durability": "63454"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1513,
              "dexterity": 12,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "max_durability": 63454
            },
            "display": {
              "armor": "1513",
              "dexterity": "+12",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "max_durability": "63454"
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
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 34,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 34,
        "description": "inventory_stack_view_wls2_halloween_22_armor_legs_5_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_22_armor_legs_5_rare_description",
        "name": "inventory_stack_view_wls2_halloween_22_armor_legs_5_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_legs_5_rare_icon",
        "tags": [
          "legs",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_22_armor_legs_5_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_22_armor_legs_5_rare_description",
        "en": {
          "description": "Loose-fitting pants. It's rumored that the belt buckle is not fake and is made of a real skull.",
          "full_description": "Loose-fitting pants. It's rumored that the belt buckle is not fake and is made of a real skull.",
          "name": "Pumpkin Hunter pants"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_22_armor_legs_5_rare_description",
        "name_key": "inventory_stack_view_wls2_halloween_22_armor_legs_5_rare_name",
        "zh": {
          "description": "宽松的裤子。据传，它的皮带扣不是假的，而是由真正的头骨制成。",
          "full_description": "宽松的裤子。据传，它的皮带扣不是假的，而是由真正的头骨制成。",
          "name": "南瓜猎人裤"
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
                "wls2_resourse_secondary_leather_5": 6,
                "wls2_resourse_tertiary_clothroll_5": 3
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_legs_5_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_22_armor_legs_5_rare_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 900
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_legs_5_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_22_trader_armor_legs_5_rare"
          }
        ]
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
            "stack_id": "wls2_halloween_22_armor_legs_5_rare",
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
            "stack_id": "wls2_halloween_22_armor_legs_5_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_legs_5_rare_icon",
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
        "firearm_resistance": {
          "1": 0.04,
          "2": 0.08,
          "3": 0.12,
          "4": 0.16,
          "5": 0.2
        },
        "max_durability": {
          "1": 14655,
          "2": 16120,
          "3": 17586,
          "4": 19051,
          "5": 20516
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
      "image_key": "039f5b410c7c8bf3539645a401fe84d63328b1790befb0970b1d426593eb76f6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜猎人裤",
        "name_en": "Pumpkin Hunter pants",
        "description_zh": "宽松的裤子。据传，它的皮带扣不是假的，而是由真正的头骨制成。",
        "description_en": "Loose-fitting pants. It's rumored that the belt buckle is not fake and is made of a real skull.",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_22_armor_legs_5_rare 南瓜猎人裤 pumpkin hunter pants 宽松的裤子。据传，它的皮带扣不是假的，而是由真正的头骨制成。 loose-fitting pants. it's rumored that the belt buckle is not fake and is made of a real skull. armor 护甲 legs legs armor armor_storage festive"
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
            "value": 14655,
            "unit": "",
            "display": "14655"
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
              "max_durability": 14655
            },
            "display": {
              "armor": "360",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "max_durability": "14655"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 396,
              "dexterity": 3,
              "firearm_resistance": 0.08,
              "max_durability": 16120
            },
            "display": {
              "armor": "396",
              "dexterity": "+3",
              "firearm_resistance": "+8%",
              "max_durability": "16120"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 432,
              "dexterity": 4,
              "firearm_resistance": 0.12,
              "max_durability": 17586
            },
            "display": {
              "armor": "432",
              "dexterity": "+4",
              "firearm_resistance": "+12%",
              "max_durability": "17586"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 468,
              "dexterity": 5,
              "firearm_resistance": 0.16,
              "max_durability": 19051
            },
            "display": {
              "armor": "468",
              "dexterity": "+5",
              "firearm_resistance": "+16%",
              "max_durability": "19051"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 504,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 20516
            },
            "display": {
              "armor": "504",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
              "max_durability": "20516"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 505,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 20516
            },
            "display": {
              "armor": "505",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
              "max_durability": "20516"
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
      "bodypart": 34,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 34,
        "description": "inventory_stack_view_wls2_halloween_22_armor_legs_5_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_22_armor_legs_5_rare_description",
        "name": "inventory_stack_view_wls2_halloween_22_armor_legs_5_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_legs_5_rare_icon",
        "tags": [
          "legs",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_22_armor_legs_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_22_armor_legs_5_rare_description",
        "en": {
          "description": "Loose-fitting pants. It's rumored that the belt buckle is not fake and is made of a real skull.",
          "full_description": "Loose-fitting pants. It's rumored that the belt buckle is not fake and is made of a real skull.",
          "name": "Pumpkin Hunter pants"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_22_armor_legs_5_rare_description",
        "name_key": "inventory_stack_view_wls2_halloween_22_armor_legs_5_rare_name",
        "zh": {
          "description": "宽松的裤子。据传，它的皮带扣不是假的，而是由真正的头骨制成。",
          "full_description": "宽松的裤子。据传，它的皮带扣不是假的，而是由真正的头骨制成。",
          "name": "南瓜猎人裤"
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
                "wls2_resourse_secondary_leather_6": 6,
                "wls2_resourse_tertiary_clothroll_5": 4
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_legs_6_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_22_armor_legs_6_rare_recycle"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_legs_6_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_22_trader_armor_legs_6_rare"
          }
        ]
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
            "stack_id": "wls2_halloween_22_armor_legs_6_rare",
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
            "stack_id": "wls2_halloween_22_armor_legs_6_rare",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_legs_5_rare_icon",
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
          "1": 26379,
          "2": 29016,
          "3": 31655,
          "4": 34292,
          "5": 36929
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
      "image_key": "039f5b410c7c8bf3539645a401fe84d63328b1790befb0970b1d426593eb76f6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜猎人裤",
        "name_en": "Pumpkin Hunter pants",
        "description_zh": "宽松的裤子。据传，它的皮带扣不是假的，而是由真正的头骨制成。",
        "description_en": "Loose-fitting pants. It's rumored that the belt buckle is not fake and is made of a real skull.",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_22_armor_legs_6_rare 南瓜猎人裤 pumpkin hunter pants 宽松的裤子。据传，它的皮带扣不是假的，而是由真正的头骨制成。 loose-fitting pants. it's rumored that the belt buckle is not fake and is made of a real skull. armor 护甲 legs legs armor armor_storage festive"
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
            "value": 26379,
            "unit": "",
            "display": "26379"
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
              "max_durability": 26379
            },
            "display": {
              "armor": "720",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "max_durability": "26379"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 792,
              "dexterity": 5,
              "firearm_resistance": 0.08,
              "max_durability": 29016
            },
            "display": {
              "armor": "792",
              "dexterity": "+5",
              "firearm_resistance": "+8%",
              "max_durability": "29016"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 864,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "max_durability": 31655
            },
            "display": {
              "armor": "864",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "max_durability": "31655"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 936,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "max_durability": 34292
            },
            "display": {
              "armor": "936",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "max_durability": "34292"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1008,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 36929
            },
            "display": {
              "armor": "1008",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "max_durability": "36929"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1009,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 36929
            },
            "display": {
              "armor": "1009",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "max_durability": "36929"
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
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 34,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 34,
        "description": "inventory_stack_view_wls2_halloween_22_armor_legs_5_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_22_armor_legs_5_rare_description",
        "name": "inventory_stack_view_wls2_halloween_22_armor_legs_5_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_legs_5_rare_icon",
        "tags": [
          "legs",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_22_armor_legs_7_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_22_armor_legs_5_rare_description",
        "en": {
          "description": "Loose-fitting pants. It's rumored that the belt buckle is not fake and is made of a real skull.",
          "full_description": "Loose-fitting pants. It's rumored that the belt buckle is not fake and is made of a real skull.",
          "name": "Pumpkin Hunter pants"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_22_armor_legs_5_rare_description",
        "name_key": "inventory_stack_view_wls2_halloween_22_armor_legs_5_rare_name",
        "zh": {
          "description": "宽松的裤子。据传，它的皮带扣不是假的，而是由真正的头骨制成。",
          "full_description": "宽松的裤子。据传，它的皮带扣不是假的，而是由真正的头骨制成。",
          "name": "南瓜猎人裤"
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
                "wls2_resourse_secondary_leather_7": 6,
                "wls2_resourse_tertiary_clothroll_5": 5
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_legs_7_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_22_armor_legs_7_rare_recycle"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_halloween_22_armor_legs_7_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_22_trader_armor_legs_7_rare"
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
            "level_min": 115,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_halloween_22_armor_legs_7_rare",
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
            "stack_id": "wls2_halloween_22_armor_legs_7_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_halloween_22_armor_legs_5_rare_icon",
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
          "1": 47482,
          "2": 52230,
          "3": 56979,
          "4": 61727,
          "5": 66475
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
      "image_key": "039f5b410c7c8bf3539645a401fe84d63328b1790befb0970b1d426593eb76f6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜猎人裤",
        "name_en": "Pumpkin Hunter pants",
        "description_zh": "宽松的裤子。据传，它的皮带扣不是假的，而是由真正的头骨制成。",
        "description_en": "Loose-fitting pants. It's rumored that the belt buckle is not fake and is made of a real skull.",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_22_armor_legs_7_rare 南瓜猎人裤 pumpkin hunter pants 宽松的裤子。据传，它的皮带扣不是假的，而是由真正的头骨制成。 loose-fitting pants. it's rumored that the belt buckle is not fake and is made of a real skull. armor 护甲 legs legs armor armor_storage festive"
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
            "value": 47482,
            "unit": "",
            "display": "47482"
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
              "max_durability": 47482
            },
            "display": {
              "armor": "1440",
              "dexterity": "+6",
              "fire_resistance": "+4%",
              "firearm_resistance": "+4%",
              "max_durability": "47482"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 1584,
              "dexterity": 7,
              "fire_resistance": 0.08,
              "firearm_resistance": 0.08,
              "max_durability": 52230
            },
            "display": {
              "armor": "1584",
              "dexterity": "+7",
              "fire_resistance": "+8%",
              "firearm_resistance": "+8%",
              "max_durability": "52230"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1728,
              "dexterity": 8,
              "fire_resistance": 0.12,
              "firearm_resistance": 0.12,
              "max_durability": 56979
            },
            "display": {
              "armor": "1728",
              "dexterity": "+8",
              "fire_resistance": "+12%",
              "firearm_resistance": "+12%",
              "max_durability": "56979"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1872,
              "dexterity": 10,
              "fire_resistance": 0.16,
              "firearm_resistance": 0.16,
              "max_durability": 61727
            },
            "display": {
              "armor": "1872",
              "dexterity": "+10",
              "fire_resistance": "+16%",
              "firearm_resistance": "+16%",
              "max_durability": "61727"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 2016,
              "dexterity": 12,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "max_durability": 66475
            },
            "display": {
              "armor": "2016",
              "dexterity": "+12",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "max_durability": "66475"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 2017,
              "dexterity": 12,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "max_durability": 66475
            },
            "display": {
              "armor": "2017",
              "dexterity": "+12",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "max_durability": "66475"
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
        "description": "inventory_stack_view_wls2_halloween_23_armor_body_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_body_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_body_name",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_body_rare_icon",
        "tags": [
          "chest",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_23_armor_body_2_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_body_description",
        "en": {
          "description": "They say the owner of this coat has made a deal with Death herself",
          "full_description": "They say the owner of this coat has made a deal with Death herself",
          "name": "Phantom Rider's Coat"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_body_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_body_name",
        "zh": {
          "description": "据说这件外套的主人与死神本人达成了交易",
          "full_description": "据说这件外套的主人与死神本人达成了交易",
          "name": "幽灵骑士的外套"
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
                "wls2_resourse_fourfold_nails_2": 1,
                "wls2_resourse_secondary_leather_2": 7,
                "wls2_resourse_tertiary_clothroll_2": 1
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_body_2_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_body_2_rare_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_1_a",
            "durability_factor": 0.25,
            "level_max": 70,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_halloween_23_armor_body_2_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_body_rare_icon",
      "stat_curves": {
        "armor": {
          "1": 44,
          "2": 48,
          "3": 53,
          "4": 57,
          "5": 61,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "death_penalty_reduction": {
          "default": 0.05
        },
        "dexterity": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 2,
          "5": 3
        },
        "max_durability": {
          "1": 240,
          "2": 260,
          "3": 280,
          "4": 300,
          "5": 320
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
        "death_penalty_reduction": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_death_penalty_reduction",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_death_penalty_reduction",
          "en": "Items durability loss upon death is {0} less",
          "zh": "死亡时，物品损失的耐久度减少 {0}"
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
      "image_key": "819ad205a1c59c896d6a23499c187165db05be54cf9406cb30da9edd42d35da5",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幽灵骑士的外套",
        "name_en": "Phantom Rider's Coat",
        "description_zh": "据说这件外套的主人与死神本人达成了交易",
        "description_en": "They say the owner of this coat has made a deal with Death herself",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_body_2_rare 幽灵骑士的外套 phantom rider's coat 据说这件外套的主人与死神本人达成了交易 they say the owner of this coat has made a deal with death herself armor 护甲 body chest armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 44,
            "unit": "",
            "display": "44"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 240,
            "unit": "",
            "display": "240"
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
            "key": "death_penalty_reduction",
            "label": "死亡耐久损失减免",
            "value": 0.05,
            "unit": "%",
            "display": "5%"
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
              "armor": 44,
              "dexterity": 1,
              "max_durability": 240
            },
            "display": {
              "armor": "44",
              "dexterity": "+1",
              "max_durability": "240"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 48,
              "dexterity": 1,
              "max_durability": 260
            },
            "display": {
              "armor": "48",
              "dexterity": "+1",
              "max_durability": "260"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 53,
              "dexterity": 1,
              "max_durability": 280
            },
            "display": {
              "armor": "53",
              "dexterity": "+1",
              "max_durability": "280"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 57,
              "dexterity": 2,
              "max_durability": 300
            },
            "display": {
              "armor": "57",
              "dexterity": "+2",
              "max_durability": "300"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 61,
              "dexterity": 3,
              "max_durability": 320
            },
            "display": {
              "armor": "61",
              "dexterity": "+3",
              "max_durability": "320"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 62,
              "dexterity": 3,
              "max_durability": 320
            },
            "display": {
              "armor": "62",
              "dexterity": "+3",
              "max_durability": "320"
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
          "防御：6 级起每级增加 1，最高 1061。"
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
        "description": "inventory_stack_view_wls2_halloween_23_armor_body_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_body_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_body_name",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_body_rare_icon",
        "tags": [
          "chest",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_23_armor_body_3_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_body_description",
        "en": {
          "description": "They say the owner of this coat has made a deal with Death herself",
          "full_description": "They say the owner of this coat has made a deal with Death herself",
          "name": "Phantom Rider's Coat"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_body_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_body_name",
        "zh": {
          "description": "据说这件外套的主人与死神本人达成了交易",
          "full_description": "据说这件外套的主人与死神本人达成了交易",
          "name": "幽灵骑士的外套"
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
                "wls2_resourse_secondary_leather_3": 10,
                "wls2_resourse_tertiary_clothroll_3": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_body_3_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_body_3_rare_recycle"
          }
        ]
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
            "stack_id": "wls2_halloween_23_armor_body_3_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_body_rare_icon",
      "stat_curves": {
        "armor": {
          "1": 158,
          "2": 173,
          "3": 189,
          "4": 205,
          "5": 221,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0
        },
        "death_penalty_reduction": {
          "default": 0.05
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
          "1": 1821,
          "2": 2002,
          "3": 2185,
          "4": 2366,
          "5": 2549
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
        "death_penalty_reduction": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name_value_format": "ui_item_stats_death_penalty_reduction",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_death_penalty_reduction",
          "en": "Items durability loss upon death is {0} less",
          "zh": "死亡时，物品损失的耐久度减少 {0}"
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "819ad205a1c59c896d6a23499c187165db05be54cf9406cb30da9edd42d35da5",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幽灵骑士的外套",
        "name_en": "Phantom Rider's Coat",
        "description_zh": "据说这件外套的主人与死神本人达成了交易",
        "description_en": "They say the owner of this coat has made a deal with Death herself",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_body_3_rare 幽灵骑士的外套 phantom rider's coat 据说这件外套的主人与死神本人达成了交易 they say the owner of this coat has made a deal with death herself armor 护甲 body chest armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 158,
            "unit": "",
            "display": "158"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 1821,
            "unit": "",
            "display": "1821"
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
            "key": "death_penalty_reduction",
            "label": "死亡耐久损失减免",
            "value": 0.05,
            "unit": "%",
            "display": "5%"
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
              "armor": 158,
              "dexterity": 2,
              "health_increment": 25,
              "max_durability": 1821
            },
            "display": {
              "armor": "158",
              "dexterity": "+2",
              "health_increment": "+25",
              "max_durability": "1821"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 173,
              "dexterity": 3,
              "health_increment": 30,
              "max_durability": 2002
            },
            "display": {
              "armor": "173",
              "dexterity": "+3",
              "health_increment": "+30",
              "max_durability": "2002"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 189,
              "dexterity": 4,
              "health_increment": 35,
              "max_durability": 2185
            },
            "display": {
              "armor": "189",
              "dexterity": "+4",
              "health_increment": "+35",
              "max_durability": "2185"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 205,
              "dexterity": 5,
              "health_increment": 40,
              "max_durability": 2366
            },
            "display": {
              "armor": "205",
              "dexterity": "+5",
              "health_increment": "+40",
              "max_durability": "2366"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 221,
              "dexterity": 6,
              "health_increment": 45,
              "max_durability": 2549
            },
            "display": {
              "armor": "221",
              "dexterity": "+6",
              "health_increment": "+45",
              "max_durability": "2549"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 222,
              "dexterity": 6,
              "health_increment": 45,
              "max_durability": 2549
            },
            "display": {
              "armor": "222",
              "dexterity": "+6",
              "health_increment": "+45",
              "max_durability": "2549"
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
          "防御：6 级起每级增加 1，最高 1221。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    }
  ]
};
