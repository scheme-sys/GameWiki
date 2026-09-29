/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-equipment-9"] = {
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
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_easter_shotgun_1_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_shotgun_1_description",
        "name": "inventory_stack_view_wls2_weapon_easter_shotgun_1_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_1",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_22_shotgun_1_t5"
      },
      "item_id": "wls2_weapon_easter_22_shotgun_1_t5",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_1_description",
        "en": {
          "description": "Despite the name, it doesn't shoot confetti.",
          "full_description": "Despite the name, it doesn't shoot confetti.",
          "name": "Confetti II"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_1_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_1_name",
        "zh": {
          "description": "虽然叫彩炮，但它射的可不是彩色纸屑。",
          "full_description": "虽然叫彩炮，但它射的可不是彩色纸屑。",
          "name": "彩炮 II"
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
                "wls2_resourse_fourfold_gunparts_4": 6,
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_ingot_4": 4,
                "wls2_resourse_secondary_plank_4": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_22_shotgun_1_t5"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_22_shotgun_1_t5_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
            "durability_factor": 0.25,
            "level_max": 105,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_1_t5",
            "transaction_id": "transaction_iap_wls_8_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_5_a",
            "durability_factor": 0.25,
            "level_min": 106,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_1_t5",
            "transaction_id": "transaction_iap_wls_6_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_1",
      "stat_curves": {
        "damage": {
          "1": 638,
          "2": 695,
          "3": 758,
          "4": 826,
          "5": 900,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 240,
          "2": 240,
          "3": 240,
          "4": 240,
          "5": 240
        },
        "penetrating_damage": {
          "1": 16,
          "2": 17,
          "3": 19,
          "4": 21,
          "5": 23
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
        "festive",
        "shotgun",
        "fire_weapon"
      ],
      "throwing_item": null,
      "tier": 5,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 65,
          "radius": 3.3,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 2.6,
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
        "prefab_common_id": "@Easter_shotgun_1",
        "prefab_pbr_id": "@Easter_shotgun_1_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_easter_22_shotgun_1_t5",
      "weapon_summary": {
        "attack_action": {
          "angle": 65,
          "radius": 3.3,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.5,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 2.6,
        "attacks_per_second_inferred": 0.6666666666666666,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "d1c2b456a47cdd2eb077a97ca0c3442c116588041d48920508ec0f8f5b65f6a6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "彩炮 II",
        "name_en": "Confetti II",
        "description_zh": "虽然叫彩炮，但它射的可不是彩色纸屑。",
        "description_en": "Despite the name, it doesn't shoot confetti.",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_easter_22_shotgun_1_t5 彩炮 ii confetti ii 虽然叫彩炮，但它射的可不是彩色纸屑。 despite the name, it doesn't shoot confetti. weapon 武器 shotgun weapon weapon_storage quick festive shotgun fire_weapon wls2_weapon_easter_22_shotgun_1_t5"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 638,
            "unit": "",
            "display": "638"
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
            "value": 240,
            "unit": "",
            "display": "240"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 2.6,
            "unit": "",
            "display": "2.6"
          }
        ],
        "fixed": [
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
          },
          {
            "key": "attack_angle",
            "label": "攻击扇面",
            "value": 65,
            "unit": "°",
            "display": "65°"
          },
          {
            "key": "attack_radius",
            "label": "攻击范围半径",
            "value": 3.3,
            "unit": "",
            "display": "3.3"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 638,
              "penetrating_damage": 16
            },
            "display": {
              "damage": "638",
              "penetrating_damage": "16"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 695,
              "penetrating_damage": 17
            },
            "display": {
              "damage": "695",
              "penetrating_damage": "17"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 758,
              "penetrating_damage": 19
            },
            "display": {
              "damage": "758",
              "penetrating_damage": "19"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 826,
              "penetrating_damage": 21
            },
            "display": {
              "damage": "826",
              "penetrating_damage": "21"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 900,
              "penetrating_damage": 23
            },
            "display": {
              "damage": "900",
              "penetrating_damage": "23"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 901,
              "penetrating_damage": 23
            },
            "display": {
              "damage": "901",
              "penetrating_damage": "23"
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
          "伤害：6 级起每级增加 1，最高 1900。",
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
        "description": "inventory_stack_view_wls2_weapon_easter_shotgun_1_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_shotgun_1_description",
        "name": "inventory_stack_view_wls2_weapon_easter_shotgun_1_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_1",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_22_shotgun_1_t6"
      },
      "item_id": "wls2_weapon_easter_22_shotgun_1_t6",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_1_description",
        "en": {
          "description": "Despite the name, it doesn't shoot confetti.",
          "full_description": "Despite the name, it doesn't shoot confetti.",
          "name": "Confetti II"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_1_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_1_name",
        "zh": {
          "description": "虽然叫彩炮，但它射的可不是彩色纸屑。",
          "full_description": "虽然叫彩炮，但它射的可不是彩色纸屑。",
          "name": "彩炮 II"
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
                "wls2_resourse_fourfold_gunparts_5": 6,
                "wls2_resourse_fourfold_nails_5": 2,
                "wls2_resourse_secondary_ingot_5": 4,
                "wls2_resourse_secondary_plank_5": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_22_shotgun_1_t6"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_22_shotgun_1_t6_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
            "durability_factor": 0.25,
            "level_max": 125,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_1_t6",
            "transaction_id": "transaction_iap_wls_12_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.25,
            "level_min": 126,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_1_t6",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_1",
      "stat_curves": {
        "damage": {
          "1": 861,
          "2": 939,
          "3": 1023,
          "4": 1115,
          "5": 1216,
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
          "1": 26,
          "2": 28,
          "3": 31,
          "4": 33,
          "5": 36
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
        "festive",
        "shotgun",
        "fire_weapon"
      ],
      "throwing_item": null,
      "tier": 6,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 65,
          "radius": 3.3,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 2.6,
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
        "prefab_common_id": "@Easter_shotgun_1",
        "prefab_pbr_id": "@Easter_shotgun_1_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_easter_22_shotgun_1_t6",
      "weapon_summary": {
        "attack_action": {
          "angle": 65,
          "radius": 3.3,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.5,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 2.6,
        "attacks_per_second_inferred": 0.6666666666666666,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "d1c2b456a47cdd2eb077a97ca0c3442c116588041d48920508ec0f8f5b65f6a6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "彩炮 II",
        "name_en": "Confetti II",
        "description_zh": "虽然叫彩炮，但它射的可不是彩色纸屑。",
        "description_en": "Despite the name, it doesn't shoot confetti.",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_easter_22_shotgun_1_t6 彩炮 ii confetti ii 虽然叫彩炮，但它射的可不是彩色纸屑。 despite the name, it doesn't shoot confetti. weapon 武器 shotgun weapon weapon_storage quick festive shotgun fire_weapon wls2_weapon_easter_22_shotgun_1_t6"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 861,
            "unit": "",
            "display": "861"
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
            "value": 250,
            "unit": "",
            "display": "250"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 2.6,
            "unit": "",
            "display": "2.6"
          }
        ],
        "fixed": [
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
          },
          {
            "key": "attack_angle",
            "label": "攻击扇面",
            "value": 65,
            "unit": "°",
            "display": "65°"
          },
          {
            "key": "attack_radius",
            "label": "攻击范围半径",
            "value": 3.3,
            "unit": "",
            "display": "3.3"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 861,
              "penetrating_damage": 26
            },
            "display": {
              "damage": "861",
              "penetrating_damage": "26"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 939,
              "penetrating_damage": 28
            },
            "display": {
              "damage": "939",
              "penetrating_damage": "28"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 1023,
              "penetrating_damage": 31
            },
            "display": {
              "damage": "1023",
              "penetrating_damage": "31"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 1115,
              "penetrating_damage": 33
            },
            "display": {
              "damage": "1115",
              "penetrating_damage": "33"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 1216,
              "penetrating_damage": 36
            },
            "display": {
              "damage": "1216",
              "penetrating_damage": "36"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 1217,
              "penetrating_damage": 36
            },
            "display": {
              "damage": "1217",
              "penetrating_damage": "36"
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
          "伤害：6 级起每级增加 1，最高 2216。",
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
        "description": "inventory_stack_view_wls2_weapon_easter_shotgun_1_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_shotgun_1_description",
        "name": "inventory_stack_view_wls2_weapon_easter_shotgun_1_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_1",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_22_shotgun_1_t7"
      },
      "item_id": "wls2_weapon_easter_22_shotgun_1_t7",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_1_description",
        "en": {
          "description": "Despite the name, it doesn't shoot confetti.",
          "full_description": "Despite the name, it doesn't shoot confetti.",
          "name": "Confetti II"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_1_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_1_name",
        "zh": {
          "description": "虽然叫彩炮，但它射的可不是彩色纸屑。",
          "full_description": "虽然叫彩炮，但它射的可不是彩色纸屑。",
          "name": "彩炮 II"
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
                "wls2_resourse_fourfold_gunparts_6": 6,
                "wls2_resourse_fourfold_nails_6": 2,
                "wls2_resourse_secondary_ingot_6": 4,
                "wls2_resourse_secondary_plank_6": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_22_shotgun_1_t7"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_22_shotgun_1_t7_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
            "durability_factor": 0.25,
            "level_max": 130,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_1_t7",
            "transaction_id": "transaction_iap_wls_12_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.25,
            "level_min": 131,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_1_t7",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_1",
      "stat_curves": {
        "damage": {
          "1": 1163,
          "2": 1279,
          "3": 1396,
          "4": 1512,
          "5": 1628,
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
          "1": 35,
          "2": 39,
          "3": 42,
          "4": 46,
          "5": 49
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
        "festive",
        "shotgun",
        "fire_weapon"
      ],
      "throwing_item": null,
      "tier": 7,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 65,
          "radius": 3.3,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 2.6,
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
        "prefab_common_id": "@Easter_shotgun_1",
        "prefab_pbr_id": "@Easter_shotgun_1_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_easter_22_shotgun_1_t7",
      "weapon_summary": {
        "attack_action": {
          "angle": 65,
          "radius": 3.3,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.5,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 2.6,
        "attacks_per_second_inferred": 0.6666666666666666,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "d1c2b456a47cdd2eb077a97ca0c3442c116588041d48920508ec0f8f5b65f6a6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "彩炮 II",
        "name_en": "Confetti II",
        "description_zh": "虽然叫彩炮，但它射的可不是彩色纸屑。",
        "description_en": "Despite the name, it doesn't shoot confetti.",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_easter_22_shotgun_1_t7 彩炮 ii confetti ii 虽然叫彩炮，但它射的可不是彩色纸屑。 despite the name, it doesn't shoot confetti. weapon 武器 shotgun weapon weapon_storage quick festive shotgun fire_weapon wls2_weapon_easter_22_shotgun_1_t7"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1163,
            "unit": "",
            "display": "1163"
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
            "value": 250,
            "unit": "",
            "display": "250"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 2.6,
            "unit": "",
            "display": "2.6"
          }
        ],
        "fixed": [
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
          },
          {
            "key": "attack_angle",
            "label": "攻击扇面",
            "value": 65,
            "unit": "°",
            "display": "65°"
          },
          {
            "key": "attack_radius",
            "label": "攻击范围半径",
            "value": 3.3,
            "unit": "",
            "display": "3.3"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 1163,
              "penetrating_damage": 35
            },
            "display": {
              "damage": "1163",
              "penetrating_damage": "35"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 1279,
              "penetrating_damage": 39
            },
            "display": {
              "damage": "1279",
              "penetrating_damage": "39"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 1396,
              "penetrating_damage": 42
            },
            "display": {
              "damage": "1396",
              "penetrating_damage": "42"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 1512,
              "penetrating_damage": 46
            },
            "display": {
              "damage": "1512",
              "penetrating_damage": "46"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 1628,
              "penetrating_damage": 49
            },
            "display": {
              "damage": "1628",
              "penetrating_damage": "49"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 1629,
              "penetrating_damage": 49
            },
            "display": {
              "damage": "1629",
              "penetrating_damage": "49"
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
          "伤害：6 级起每级增加 1，最高 2628。",
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
        "description": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "name": "inventory_stack_view_wls2_weapon_easter_shotgun_2_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_2",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_22_shotgun_2"
      },
      "item_id": "wls2_weapon_easter_22_shotgun_2",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "en": {
          "description": "May not be that funny. But shoots perfectly!",
          "full_description": "May not be that funny. But shoots perfectly!",
          "name": "Killing Joke"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_name",
        "zh": {
          "description": "可能也没那么好笑，但是很好射！",
          "full_description": "可能也没那么好笑，但是很好射！",
          "name": "爆笑"
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
                "wls2_easter_24_currency_egg": 300
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_22_shotgun_2",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter_22_trader_easter_shotgun_2"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_3": 6,
                "wls2_resourse_fourfold_nails_3": 2,
                "wls2_resourse_secondary_ingot_3": 4,
                "wls2_resourse_secondary_plank_3": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_22_shotgun_2"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_22_shotgun_2_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_4_a",
            "durability_factor": 0.25,
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_2",
            "transaction_id": "transaction_iap_wls_5_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
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
            "stack_id": "wls2_weapon_easter_22_shotgun_2",
            "transaction_id": "transaction_iap_wls_4_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_2",
      "stat_curves": {
        "damage": {
          "1": 470,
          "2": 517,
          "3": 565,
          "4": 610,
          "5": 660,
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
          "1": 9,
          "2": 10,
          "3": 11,
          "4": 12,
          "5": 13
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
        "festive",
        "shotgun",
        "fire_weapon"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "santa_shotgun"
        ],
        "hit_sounds": [
          "santa_shotgun"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Easter_shotgun_2",
        "prefab_pbr_id": "@Easter_shotgun_2_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_easter_22_shotgun_2",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.5,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.6666666666666666,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "ff8ebdcba688f7fb3994b9092f379473e9608ad1274854dabfeed893e32aad40",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "爆笑",
        "name_en": "Killing Joke",
        "description_zh": "可能也没那么好笑，但是很好射！",
        "description_en": "May not be that funny. But shoots perfectly!",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_easter_22_shotgun_2 爆笑 killing joke 可能也没那么好笑，但是很好射！ may not be that funny. but shoots perfectly! weapon 武器 shotgun weapon weapon_storage quick festive shotgun fire_weapon wls2_weapon_easter_22_shotgun_2"
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
            "value": 0.6666666666666666,
            "unit": "次/秒",
            "display": "0.67 次/秒"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 470,
              "penetrating_damage": 9
            },
            "display": {
              "damage": "470",
              "penetrating_damage": "9"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 517,
              "penetrating_damage": 10
            },
            "display": {
              "damage": "517",
              "penetrating_damage": "10"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 565,
              "penetrating_damage": 11
            },
            "display": {
              "damage": "565",
              "penetrating_damage": "11"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 610,
              "penetrating_damage": 12
            },
            "display": {
              "damage": "610",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 660,
              "penetrating_damage": 13
            },
            "display": {
              "damage": "660",
              "penetrating_damage": "13"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 661,
              "penetrating_damage": 13
            },
            "display": {
              "damage": "661",
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
        "description": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "name": "inventory_stack_view_wls2_weapon_easter_shotgun_2_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_2",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_22_shotgun_2_t3"
      },
      "item_id": "wls2_weapon_easter_22_shotgun_2_t3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "en": {
          "description": "May not be that funny. But shoots perfectly!",
          "full_description": "May not be that funny. But shoots perfectly!",
          "name": "Killing Joke"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_name",
        "zh": {
          "description": "可能也没那么好笑，但是很好射！",
          "full_description": "可能也没那么好笑，但是很好射！",
          "name": "爆笑"
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
                "wls2_resourse_fourfold_gunparts_2": 6,
                "wls2_resourse_fourfold_nails_2": 2,
                "wls2_resourse_secondary_ingot_2": 4,
                "wls2_resourse_secondary_plank_2": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_22_shotgun_2_t3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_22_shotgun_2_t3_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.25,
            "level_max": 70,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_2_t3",
            "transaction_id": "transaction_iap_wls_4_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
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
            "stack_id": "wls2_weapon_easter_22_shotgun_2_t3",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_2",
      "stat_curves": {
        "damage": {
          "1": 290,
          "2": 316,
          "3": 345,
          "4": 376,
          "5": 409,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 170,
          "2": 170,
          "3": 170,
          "4": 170,
          "5": 170
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
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "shotgun",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive",
        "shotgun",
        "fire_weapon"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "santa_shotgun"
        ],
        "hit_sounds": [
          "santa_shotgun"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Easter_shotgun_2",
        "prefab_pbr_id": "@Easter_shotgun_2_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_easter_22_shotgun_2_t3",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.5,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.6666666666666666,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "ff8ebdcba688f7fb3994b9092f379473e9608ad1274854dabfeed893e32aad40",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "爆笑",
        "name_en": "Killing Joke",
        "description_zh": "可能也没那么好笑，但是很好射！",
        "description_en": "May not be that funny. But shoots perfectly!",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_easter_22_shotgun_2_t3 爆笑 killing joke 可能也没那么好笑，但是很好射！ may not be that funny. but shoots perfectly! weapon 武器 shotgun weapon weapon_storage quick festive shotgun fire_weapon wls2_weapon_easter_22_shotgun_2_t3"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 290,
            "unit": "",
            "display": "290"
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
            "value": 170,
            "unit": "",
            "display": "170"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 290
            },
            "display": {
              "damage": "290"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 316
            },
            "display": {
              "damage": "316"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 345
            },
            "display": {
              "damage": "345"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 376
            },
            "display": {
              "damage": "376"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 409
            },
            "display": {
              "damage": "409"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 410
            },
            "display": {
              "damage": "410"
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
        "notes": [
          "伤害：6 级起每级增加 1，最高 1409。",
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
        "description": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "name": "inventory_stack_view_wls2_weapon_easter_shotgun_2_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_2",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_22_shotgun_2_t5"
      },
      "item_id": "wls2_weapon_easter_22_shotgun_2_t5",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "en": {
          "description": "May not be that funny. But shoots perfectly!",
          "full_description": "May not be that funny. But shoots perfectly!",
          "name": "Killing Joke"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_name",
        "zh": {
          "description": "可能也没那么好笑，但是很好射！",
          "full_description": "可能也没那么好笑，但是很好射！",
          "name": "爆笑"
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
                "wls2_resourse_fourfold_gunparts_4": 6,
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_ingot_4": 4,
                "wls2_resourse_secondary_plank_4": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_22_shotgun_2_t5"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_22_shotgun_2_t5_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
            "durability_factor": 0.25,
            "level_max": 105,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_2_t5",
            "transaction_id": "transaction_iap_wls_8_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_5_a",
            "durability_factor": 0.25,
            "level_min": 106,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_2_t5",
            "transaction_id": "transaction_iap_wls_6_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_2",
      "stat_curves": {
        "damage": {
          "1": 752,
          "2": 820,
          "3": 893,
          "4": 974,
          "5": 1062,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 240,
          "2": 240,
          "3": 240,
          "4": 240,
          "5": 240
        },
        "penetrating_damage": {
          "1": 19,
          "2": 20,
          "3": 22,
          "4": 24,
          "5": 27
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
        "festive",
        "shotgun",
        "fire_weapon"
      ],
      "throwing_item": null,
      "tier": 5,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "santa_shotgun"
        ],
        "hit_sounds": [
          "santa_shotgun"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Easter_shotgun_2",
        "prefab_pbr_id": "@Easter_shotgun_2_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_easter_22_shotgun_2_t5",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.5,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.6666666666666666,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "ff8ebdcba688f7fb3994b9092f379473e9608ad1274854dabfeed893e32aad40",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "爆笑",
        "name_en": "Killing Joke",
        "description_zh": "可能也没那么好笑，但是很好射！",
        "description_en": "May not be that funny. But shoots perfectly!",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_easter_22_shotgun_2_t5 爆笑 killing joke 可能也没那么好笑，但是很好射！ may not be that funny. but shoots perfectly! weapon 武器 shotgun weapon weapon_storage quick festive shotgun fire_weapon wls2_weapon_easter_22_shotgun_2_t5"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 752,
            "unit": "",
            "display": "752"
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
            "value": 240,
            "unit": "",
            "display": "240"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 752,
              "penetrating_damage": 19
            },
            "display": {
              "damage": "752",
              "penetrating_damage": "19"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 820,
              "penetrating_damage": 20
            },
            "display": {
              "damage": "820",
              "penetrating_damage": "20"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 893,
              "penetrating_damage": 22
            },
            "display": {
              "damage": "893",
              "penetrating_damage": "22"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 974,
              "penetrating_damage": 24
            },
            "display": {
              "damage": "974",
              "penetrating_damage": "24"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 1062,
              "penetrating_damage": 27
            },
            "display": {
              "damage": "1062",
              "penetrating_damage": "27"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 1063,
              "penetrating_damage": 27
            },
            "display": {
              "damage": "1063",
              "penetrating_damage": "27"
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
          "伤害：6 级起每级增加 1，最高 2062。",
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
        "description": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "name": "inventory_stack_view_wls2_weapon_easter_shotgun_2_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_2",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_22_shotgun_2_t6"
      },
      "item_id": "wls2_weapon_easter_22_shotgun_2_t6",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "en": {
          "description": "May not be that funny. But shoots perfectly!",
          "full_description": "May not be that funny. But shoots perfectly!",
          "name": "Killing Joke"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_name",
        "zh": {
          "description": "可能也没那么好笑，但是很好射！",
          "full_description": "可能也没那么好笑，但是很好射！",
          "name": "爆笑"
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
                "wls2_resourse_fourfold_gunparts_5": 6,
                "wls2_resourse_fourfold_nails_5": 2,
                "wls2_resourse_secondary_ingot_5": 4,
                "wls2_resourse_secondary_plank_5": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_22_shotgun_2_t6"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_22_shotgun_2_t6_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
            "durability_factor": 0.25,
            "level_max": 125,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_2_t6",
            "transaction_id": "transaction_iap_wls_12_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.25,
            "level_min": 126,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_2_t6",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_2",
      "stat_curves": {
        "damage": {
          "1": 1203,
          "2": 1311,
          "3": 1429,
          "4": 1558,
          "5": 1698,
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
          "1": 36,
          "2": 39,
          "3": 43,
          "4": 47,
          "5": 51
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
        "festive",
        "shotgun",
        "fire_weapon"
      ],
      "throwing_item": null,
      "tier": 6,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "santa_shotgun"
        ],
        "hit_sounds": [
          "santa_shotgun"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Easter_shotgun_2",
        "prefab_pbr_id": "@Easter_shotgun_2_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_easter_22_shotgun_2_t6",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.5,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.6666666666666666,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "ff8ebdcba688f7fb3994b9092f379473e9608ad1274854dabfeed893e32aad40",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "爆笑",
        "name_en": "Killing Joke",
        "description_zh": "可能也没那么好笑，但是很好射！",
        "description_en": "May not be that funny. But shoots perfectly!",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_easter_22_shotgun_2_t6 爆笑 killing joke 可能也没那么好笑，但是很好射！ may not be that funny. but shoots perfectly! weapon 武器 shotgun weapon weapon_storage quick festive shotgun fire_weapon wls2_weapon_easter_22_shotgun_2_t6"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1203,
            "unit": "",
            "display": "1203"
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
            "value": 250,
            "unit": "",
            "display": "250"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 1203,
              "penetrating_damage": 36
            },
            "display": {
              "damage": "1203",
              "penetrating_damage": "36"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 1311,
              "penetrating_damage": 39
            },
            "display": {
              "damage": "1311",
              "penetrating_damage": "39"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 1429,
              "penetrating_damage": 43
            },
            "display": {
              "damage": "1429",
              "penetrating_damage": "43"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 1558,
              "penetrating_damage": 47
            },
            "display": {
              "damage": "1558",
              "penetrating_damage": "47"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 1698,
              "penetrating_damage": 51
            },
            "display": {
              "damage": "1698",
              "penetrating_damage": "51"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 1699,
              "penetrating_damage": 51
            },
            "display": {
              "damage": "1699",
              "penetrating_damage": "51"
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
          "伤害：6 级起每级增加 1，最高 2698。",
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
        "description": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "name": "inventory_stack_view_wls2_weapon_easter_shotgun_2_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_2",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_22_shotgun_2_t7"
      },
      "item_id": "wls2_weapon_easter_22_shotgun_2_t7",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "en": {
          "description": "May not be that funny. But shoots perfectly!",
          "full_description": "May not be that funny. But shoots perfectly!",
          "name": "Killing Joke"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_name",
        "zh": {
          "description": "可能也没那么好笑，但是很好射！",
          "full_description": "可能也没那么好笑，但是很好射！",
          "name": "爆笑"
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
                "wls2_resourse_fourfold_gunparts_6": 6,
                "wls2_resourse_fourfold_nails_6": 2,
                "wls2_resourse_secondary_ingot_6": 4,
                "wls2_resourse_secondary_plank_6": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_22_shotgun_2_t7"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_22_shotgun_2_t7_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
            "durability_factor": 0.25,
            "level_max": 130,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_2_t7",
            "transaction_id": "transaction_iap_wls_12_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.25,
            "level_min": 131,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_2_t7",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_2",
      "stat_curves": {
        "damage": {
          "1": 1924,
          "2": 2116,
          "3": 2309,
          "4": 2501,
          "5": 2694,
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
          "1": 58,
          "2": 64,
          "3": 70,
          "4": 75,
          "5": 81
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
        "festive",
        "shotgun",
        "fire_weapon"
      ],
      "throwing_item": null,
      "tier": 7,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "santa_shotgun"
        ],
        "hit_sounds": [
          "santa_shotgun"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Easter_shotgun_2",
        "prefab_pbr_id": "@Easter_shotgun_2_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_easter_22_shotgun_2_t7",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.5,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.6666666666666666,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "ff8ebdcba688f7fb3994b9092f379473e9608ad1274854dabfeed893e32aad40",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "爆笑",
        "name_en": "Killing Joke",
        "description_zh": "可能也没那么好笑，但是很好射！",
        "description_en": "May not be that funny. But shoots perfectly!",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_easter_22_shotgun_2_t7 爆笑 killing joke 可能也没那么好笑，但是很好射！ may not be that funny. but shoots perfectly! weapon 武器 shotgun weapon weapon_storage quick festive shotgun fire_weapon wls2_weapon_easter_22_shotgun_2_t7"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1924,
            "unit": "",
            "display": "1924"
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
            "value": 250,
            "unit": "",
            "display": "250"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 1924,
              "penetrating_damage": 58
            },
            "display": {
              "damage": "1924",
              "penetrating_damage": "58"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 2116,
              "penetrating_damage": 64
            },
            "display": {
              "damage": "2116",
              "penetrating_damage": "64"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 2309,
              "penetrating_damage": 70
            },
            "display": {
              "damage": "2309",
              "penetrating_damage": "70"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 2501,
              "penetrating_damage": 75
            },
            "display": {
              "damage": "2501",
              "penetrating_damage": "75"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 2694,
              "penetrating_damage": 81
            },
            "display": {
              "damage": "2694",
              "penetrating_damage": "81"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 2695,
              "penetrating_damage": 81
            },
            "display": {
              "damage": "2695",
              "penetrating_damage": "81"
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
          "伤害：6 级起每级增加 1，最高 3694。",
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
        "description": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "name": "inventory_stack_view_wls2_weapon_easter_shotgun_3_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_3",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_22_shotgun_3"
      },
      "item_id": "wls2_weapon_easter_22_shotgun_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "en": {
          "description": "The favorite shotgun of the Fair Hostess. Don't mess with the lady in red!",
          "full_description": "The favorite shotgun of the Fair Hostess. Don't mess with the lady in red!",
          "name": "Jill's Shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_name",
        "zh": {
          "description": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
          "full_description": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
          "name": "吉尔的霰弹枪"
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
                "wls2_resourse_fourfold_gunparts_3": 6,
                "wls2_resourse_fourfold_nails_3": 2,
                "wls2_resourse_secondary_ingot_3": 4,
                "wls2_resourse_secondary_plank_3": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_22_shotgun_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_22_shotgun_3_recycle"
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
            "stack_id": "wls2_weapon_easter_22_shotgun_3",
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
            "stack_id": "wls2_weapon_easter_22_shotgun_3",
            "transaction_id": "transaction_iap_wls_4_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_4_a",
            "durability_factor": 0.25,
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_3",
            "transaction_id": "transaction_iap_wls_5_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
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
            "stack_id": "wls2_weapon_easter_22_shotgun_3",
            "transaction_id": "transaction_iap_wls_4_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_3",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.08,
          "3": 0.1,
          "4": 0.13,
          "5": 0.15
        },
        "damage": {
          "1": 610,
          "2": 670,
          "3": 730,
          "4": 790,
          "5": 850,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 230,
          "2": 230,
          "3": 230,
          "4": 230,
          "5": 230
        },
        "penetrating_damage": {
          "1": 12,
          "2": 13,
          "3": 15,
          "4": 16,
          "5": 17
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
        "festive",
        "shotgun",
        "fire_weapon"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
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
        "prefab_common_id": "@Easter_shotgun_3",
        "prefab_pbr_id": "@Easter_shotgun_3_pbr",
        "speed_modifier": 1.125,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_easter_22_shotgun_3",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.25,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.8,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1.125,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "b603fc5880f23feb9453ab8321797febd8f12e94181fa85643ed60dc0dad717d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "吉尔的霰弹枪",
        "name_en": "Jill's Shotgun",
        "description_zh": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
        "description_en": "The favorite shotgun of the Fair Hostess. Don't mess with the lady in red!",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_easter_22_shotgun_3 吉尔的霰弹枪 jill's shotgun 集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！ the favorite shotgun of the fair hostess. don't mess with the lady in red! weapon 武器 shotgun weapon weapon_storage quick festive shotgun fire_weapon wls2_weapon_easter_22_shotgun_3"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 610,
            "unit": "",
            "display": "610"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.8,
            "unit": "次/秒",
            "display": "0.8 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 230,
            "unit": "",
            "display": "230"
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
            "value": 1.25,
            "unit": "秒",
            "display": "1.25 秒"
          },
          {
            "key": "attack_speed_multiplier",
            "label": "动作速度倍率",
            "value": 1.125,
            "unit": "倍",
            "display": "1.125 倍"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_hit_chance": 0.05,
              "damage": 610,
              "penetrating_damage": 12
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "610",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.08,
              "damage": 670,
              "penetrating_damage": 13
            },
            "display": {
              "critical_hit_chance": "8%",
              "damage": "670",
              "penetrating_damage": "13"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 730,
              "penetrating_damage": 15
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "730",
              "penetrating_damage": "15"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 790,
              "penetrating_damage": 16
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "790",
              "penetrating_damage": "16"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 850,
              "penetrating_damage": 17
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "850",
              "penetrating_damage": "17"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 851,
              "penetrating_damage": 17
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "851",
              "penetrating_damage": "17"
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
          "伤害：6 级起每级增加 1，最高 1850。",
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
        "description": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "name": "inventory_stack_view_wls2_weapon_easter_shotgun_3_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_3",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_22_shotgun_3_t3"
      },
      "item_id": "wls2_weapon_easter_22_shotgun_3_t3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "en": {
          "description": "The favorite shotgun of the Fair Hostess. Don't mess with the lady in red!",
          "full_description": "The favorite shotgun of the Fair Hostess. Don't mess with the lady in red!",
          "name": "Jill's Shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_name",
        "zh": {
          "description": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
          "full_description": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
          "name": "吉尔的霰弹枪"
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
                "wls2_resourse_fourfold_gunparts_2": 6,
                "wls2_resourse_fourfold_nails_2": 2,
                "wls2_resourse_secondary_ingot_2": 4,
                "wls2_resourse_secondary_plank_2": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_22_shotgun_3_t3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_22_shotgun_3_t3_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.25,
            "level_max": 70,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_3_t3",
            "transaction_id": "transaction_iap_wls_4_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
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
            "stack_id": "wls2_weapon_easter_22_shotgun_3_t3",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_3",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.08,
          "3": 0.1,
          "4": 0.13,
          "5": 0.15
        },
        "damage": {
          "1": 380,
          "2": 414,
          "3": 451,
          "4": 492,
          "5": 536,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 210,
          "2": 210,
          "3": 210,
          "4": 210,
          "5": 210
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
        }
      },
      "subcategory": "shotgun",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive",
        "shotgun",
        "fire_weapon"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
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
        "prefab_common_id": "@Easter_shotgun_3",
        "prefab_pbr_id": "@Easter_shotgun_3_pbr",
        "speed_modifier": 1.125,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_easter_22_shotgun_3_t3",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.25,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.8,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1.125,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "b603fc5880f23feb9453ab8321797febd8f12e94181fa85643ed60dc0dad717d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "吉尔的霰弹枪",
        "name_en": "Jill's Shotgun",
        "description_zh": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
        "description_en": "The favorite shotgun of the Fair Hostess. Don't mess with the lady in red!",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_easter_22_shotgun_3_t3 吉尔的霰弹枪 jill's shotgun 集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！ the favorite shotgun of the fair hostess. don't mess with the lady in red! weapon 武器 shotgun weapon weapon_storage quick festive shotgun fire_weapon wls2_weapon_easter_22_shotgun_3_t3"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 380,
            "unit": "",
            "display": "380"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.8,
            "unit": "次/秒",
            "display": "0.8 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 210,
            "unit": "",
            "display": "210"
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
            "value": 1.25,
            "unit": "秒",
            "display": "1.25 秒"
          },
          {
            "key": "attack_speed_multiplier",
            "label": "动作速度倍率",
            "value": 1.125,
            "unit": "倍",
            "display": "1.125 倍"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_hit_chance": 0.05,
              "damage": 380
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "380"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.08,
              "damage": 414
            },
            "display": {
              "critical_hit_chance": "8%",
              "damage": "414"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 451
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "451"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 492
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "492"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 536
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "536"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 537
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "537"
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
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1536。",
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
        "description": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "name": "inventory_stack_view_wls2_weapon_easter_shotgun_3_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_3",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_22_shotgun_3_t5"
      },
      "item_id": "wls2_weapon_easter_22_shotgun_3_t5",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "en": {
          "description": "The favorite shotgun of the Fair Hostess. Don't mess with the lady in red!",
          "full_description": "The favorite shotgun of the Fair Hostess. Don't mess with the lady in red!",
          "name": "Jill's Shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_name",
        "zh": {
          "description": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
          "full_description": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
          "name": "吉尔的霰弹枪"
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
                "wls2_resourse_fourfold_gunparts_4": 6,
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_ingot_4": 4,
                "wls2_resourse_secondary_plank_4": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_22_shotgun_3_t5"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_22_shotgun_3_t5_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
            "durability_factor": 0.25,
            "level_max": 105,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_3_t5",
            "transaction_id": "transaction_iap_wls_8_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_5_a",
            "durability_factor": 0.25,
            "level_min": 106,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_3_t5",
            "transaction_id": "transaction_iap_wls_6_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_3",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.08,
          "3": 0.1,
          "4": 0.13,
          "5": 0.15
        },
        "damage": {
          "1": 970,
          "2": 1057,
          "3": 1152,
          "4": 1256,
          "5": 1369,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 240,
          "2": 240,
          "3": 240,
          "4": 240,
          "5": 240
        },
        "penetrating_damage": {
          "1": 24,
          "2": 26,
          "3": 29,
          "4": 31,
          "5": 34
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
        "festive",
        "shotgun",
        "fire_weapon"
      ],
      "throwing_item": null,
      "tier": 5,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
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
        "prefab_common_id": "@Easter_shotgun_3",
        "prefab_pbr_id": "@Easter_shotgun_3_pbr",
        "speed_modifier": 1.125,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_easter_22_shotgun_3_t5",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.25,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.8,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1.125,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "b603fc5880f23feb9453ab8321797febd8f12e94181fa85643ed60dc0dad717d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "吉尔的霰弹枪",
        "name_en": "Jill's Shotgun",
        "description_zh": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
        "description_en": "The favorite shotgun of the Fair Hostess. Don't mess with the lady in red!",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_easter_22_shotgun_3_t5 吉尔的霰弹枪 jill's shotgun 集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！ the favorite shotgun of the fair hostess. don't mess with the lady in red! weapon 武器 shotgun weapon weapon_storage quick festive shotgun fire_weapon wls2_weapon_easter_22_shotgun_3_t5"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 970,
            "unit": "",
            "display": "970"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.8,
            "unit": "次/秒",
            "display": "0.8 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 240,
            "unit": "",
            "display": "240"
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
            "value": 1.25,
            "unit": "秒",
            "display": "1.25 秒"
          },
          {
            "key": "attack_speed_multiplier",
            "label": "动作速度倍率",
            "value": 1.125,
            "unit": "倍",
            "display": "1.125 倍"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_hit_chance": 0.05,
              "damage": 970,
              "penetrating_damage": 24
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "970",
              "penetrating_damage": "24"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.08,
              "damage": 1057,
              "penetrating_damage": 26
            },
            "display": {
              "critical_hit_chance": "8%",
              "damage": "1057",
              "penetrating_damage": "26"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 1152,
              "penetrating_damage": 29
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "1152",
              "penetrating_damage": "29"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 1256,
              "penetrating_damage": 31
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "1256",
              "penetrating_damage": "31"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 1369,
              "penetrating_damage": 34
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "1369",
              "penetrating_damage": "34"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 1370,
              "penetrating_damage": 34
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "1370",
              "penetrating_damage": "34"
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
          "伤害：6 级起每级增加 1，最高 2369。",
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
        "description": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "name": "inventory_stack_view_wls2_weapon_easter_shotgun_3_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_3",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_22_shotgun_3_t6"
      },
      "item_id": "wls2_weapon_easter_22_shotgun_3_t6",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "en": {
          "description": "The favorite shotgun of the Fair Hostess. Don't mess with the lady in red!",
          "full_description": "The favorite shotgun of the Fair Hostess. Don't mess with the lady in red!",
          "name": "Jill's Shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_name",
        "zh": {
          "description": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
          "full_description": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
          "name": "吉尔的霰弹枪"
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
                "wls2_resourse_fourfold_gunparts_5": 6,
                "wls2_resourse_fourfold_nails_5": 2,
                "wls2_resourse_secondary_ingot_5": 4,
                "wls2_resourse_secondary_plank_5": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_22_shotgun_3_t6"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_22_shotgun_3_t6_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
            "durability_factor": 0.25,
            "level_max": 125,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_3_t6",
            "transaction_id": "transaction_iap_wls_12_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.25,
            "level_min": 126,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_3_t6",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_3",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.08,
          "3": 0.1,
          "4": 0.13,
          "5": 0.15
        },
        "damage": {
          "1": 1550,
          "2": 1690,
          "3": 1842,
          "4": 2007,
          "5": 2188,
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
          "1": 47,
          "2": 51,
          "3": 55,
          "4": 60,
          "5": 66
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
        "festive",
        "shotgun",
        "fire_weapon"
      ],
      "throwing_item": null,
      "tier": 6,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
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
        "prefab_common_id": "@Easter_shotgun_3",
        "prefab_pbr_id": "@Easter_shotgun_3_pbr",
        "speed_modifier": 1.125,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_easter_22_shotgun_3_t6",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.25,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.8,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1.125,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "b603fc5880f23feb9453ab8321797febd8f12e94181fa85643ed60dc0dad717d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "吉尔的霰弹枪",
        "name_en": "Jill's Shotgun",
        "description_zh": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
        "description_en": "The favorite shotgun of the Fair Hostess. Don't mess with the lady in red!",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_easter_22_shotgun_3_t6 吉尔的霰弹枪 jill's shotgun 集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！ the favorite shotgun of the fair hostess. don't mess with the lady in red! weapon 武器 shotgun weapon weapon_storage quick festive shotgun fire_weapon wls2_weapon_easter_22_shotgun_3_t6"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1550,
            "unit": "",
            "display": "1550"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.8,
            "unit": "次/秒",
            "display": "0.8 次/秒"
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
            "value": 3.5,
            "unit": "",
            "display": "3.5"
          }
        ],
        "fixed": [
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.25,
            "unit": "秒",
            "display": "1.25 秒"
          },
          {
            "key": "attack_speed_multiplier",
            "label": "动作速度倍率",
            "value": 1.125,
            "unit": "倍",
            "display": "1.125 倍"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_hit_chance": 0.05,
              "damage": 1550,
              "penetrating_damage": 47
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "1550",
              "penetrating_damage": "47"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.08,
              "damage": 1690,
              "penetrating_damage": 51
            },
            "display": {
              "critical_hit_chance": "8%",
              "damage": "1690",
              "penetrating_damage": "51"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 1842,
              "penetrating_damage": 55
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "1842",
              "penetrating_damage": "55"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 2007,
              "penetrating_damage": 60
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "2007",
              "penetrating_damage": "60"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 2188,
              "penetrating_damage": 66
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "2188",
              "penetrating_damage": "66"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 2189,
              "penetrating_damage": 66
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "2189",
              "penetrating_damage": "66"
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
          "伤害：6 级起每级增加 1，最高 3188。",
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
        "description": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "name": "inventory_stack_view_wls2_weapon_easter_shotgun_3_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_3",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_22_shotgun_3_t7"
      },
      "item_id": "wls2_weapon_easter_22_shotgun_3_t7",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "en": {
          "description": "The favorite shotgun of the Fair Hostess. Don't mess with the lady in red!",
          "full_description": "The favorite shotgun of the Fair Hostess. Don't mess with the lady in red!",
          "name": "Jill's Shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_name",
        "zh": {
          "description": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
          "full_description": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
          "name": "吉尔的霰弹枪"
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
                "wls2_resourse_fourfold_gunparts_6": 6,
                "wls2_resourse_fourfold_nails_6": 2,
                "wls2_resourse_secondary_ingot_6": 4,
                "wls2_resourse_secondary_plank_6": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_22_shotgun_3_t7"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_22_shotgun_3_t7_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
            "durability_factor": 0.25,
            "level_max": 130,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_3_t7",
            "transaction_id": "transaction_iap_wls_12_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.25,
            "level_min": 131,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_easter_22_shotgun_3_t7",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_3",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.08,
          "3": 0.1,
          "4": 0.13,
          "5": 0.15
        },
        "damage": {
          "1": 2477,
          "2": 2725,
          "3": 2972,
          "4": 3220,
          "5": 3468,
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
          "1": 74,
          "2": 81,
          "3": 89,
          "4": 96,
          "5": 104
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
        "festive",
        "shotgun",
        "fire_weapon"
      ],
      "throwing_item": null,
      "tier": 7,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
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
        "prefab_common_id": "@Easter_shotgun_3",
        "prefab_pbr_id": "@Easter_shotgun_3_pbr",
        "speed_modifier": 1.125,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_easter_22_shotgun_3_t7",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.25,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.8,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1.125,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "b603fc5880f23feb9453ab8321797febd8f12e94181fa85643ed60dc0dad717d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "吉尔的霰弹枪",
        "name_en": "Jill's Shotgun",
        "description_zh": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
        "description_en": "The favorite shotgun of the Fair Hostess. Don't mess with the lady in red!",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_easter_22_shotgun_3_t7 吉尔的霰弹枪 jill's shotgun 集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！ the favorite shotgun of the fair hostess. don't mess with the lady in red! weapon 武器 shotgun weapon weapon_storage quick festive shotgun fire_weapon wls2_weapon_easter_22_shotgun_3_t7"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 2477,
            "unit": "",
            "display": "2477"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.8,
            "unit": "次/秒",
            "display": "0.8 次/秒"
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
            "value": 3.5,
            "unit": "",
            "display": "3.5"
          }
        ],
        "fixed": [
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.25,
            "unit": "秒",
            "display": "1.25 秒"
          },
          {
            "key": "attack_speed_multiplier",
            "label": "动作速度倍率",
            "value": 1.125,
            "unit": "倍",
            "display": "1.125 倍"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_hit_chance": 0.05,
              "damage": 2477,
              "penetrating_damage": 74
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "2477",
              "penetrating_damage": "74"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.08,
              "damage": 2725,
              "penetrating_damage": 81
            },
            "display": {
              "critical_hit_chance": "8%",
              "damage": "2725",
              "penetrating_damage": "81"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 2972,
              "penetrating_damage": 89
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "2972",
              "penetrating_damage": "89"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 3220,
              "penetrating_damage": 96
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "3220",
              "penetrating_damage": "96"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 3468,
              "penetrating_damage": 104
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "3468",
              "penetrating_damage": "104"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 3469,
              "penetrating_damage": 104
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "3469",
              "penetrating_damage": "104"
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
          "伤害：6 级起每级增加 1，最高 4468。",
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
        "description": "inventory_stack_view_wls2_weapon_easter_bow_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_bow_description",
        "name": "inventory_stack_view_wls2_weapon_easter_bow_name",
        "rarity": "common",
        "sorting_group_id": "bow",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_bow",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_bow"
      },
      "item_id": "wls2_weapon_easter_bow",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_bow_description",
        "en": {
          "description": "The creator of the bow has a good imagination, you must give him that. More importantly, it shoots!",
          "full_description": "The creator of the bow has a good imagination, you must give him that. More importantly, it shoots!",
          "name": "Balderdash"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_bow_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_bow_name",
        "zh": {
          "description": "不得不说，造这把弓的人很有想象力。更重要的是，它真的能当弓用！",
          "full_description": "不得不说，造这把弓的人很有想象力。更重要的是，它真的能当弓用！",
          "name": "胡咧咧弓"
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
                "wls2_easter_currency_egg": 600
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_bow",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_easter_bow"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_leather_2": 2,
                "wls2_resourse_secondary_plank_3": 4,
                "wls2_resourse_secondary_rope_2": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_bow"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_bow_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_bow",
      "stat_curves": {
        "damage": {
          "1": 521,
          "2": 534,
          "3": 563,
          "4": 575,
          "5": 600,
          "per_level_after_max": 1
        },
        "dexterity": {
          "1": 2,
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
        },
        "max_durability": {
          "1": 120,
          "2": 120,
          "3": 120,
          "4": 120,
          "5": 120
        },
        "penetrating_damage": {
          "1": 16,
          "2": 16,
          "3": 17,
          "4": 17,
          "5": 18
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
      "subcategory": "bow",
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
          "arrow_speed": 20,
          "bow_stretched_time": 0.3,
          "headshot_probability": 0.3,
          "max_charge_damage_multiplier": 2.5,
          "min_charge_time": 1,
          "miss_overcharge_time": 1,
          "miss_shot_distance": 15,
          "runaway_range": 0.5,
          "shoot_repeat": false,
          "type": "bow"
        },
        "attack_damage_time": 0.4,
        "attack_ending_time": 1.3,
        "attack_range": 7,
        "durability_price": 1,
        "hit_empty_sounds": [
          "painted_bow_load",
          "painted_bow_shoot"
        ],
        "hit_sounds": [
          "wls2_weapon_easter_bow_01"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Easter_bow",
        "speed_modifier": 1,
        "tags": [
          "ranged"
        ]
      },
      "weapon_id": "wls2_weapon_easter_bow",
      "weapon_summary": {
        "attack_action": {
          "arrow_speed": 20,
          "bow_stretched_time": 0.3,
          "headshot_probability": 0.3,
          "max_charge_damage_multiplier": 2.5,
          "min_charge_time": 1,
          "miss_overcharge_time": 1,
          "miss_shot_distance": 15,
          "runaway_range": 0.5,
          "shoot_repeat": false,
          "type": "bow"
        },
        "attack_cycle_time_inferred": 1.7000000000000002,
        "attack_damage_time": 0.4,
        "attack_ending_time": 1.3,
        "attack_range": 7,
        "attacks_per_second_inferred": 0.588235294117647,
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
      "image_key": "2425b779a25241ed1a0fbfd05ad4b6714587e6454870ea15a5599bab34883655",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "胡咧咧弓",
        "name_en": "Balderdash",
        "description_zh": "不得不说，造这把弓的人很有想象力。更重要的是，它真的能当弓用！",
        "description_en": "The creator of the bow has a good imagination, you must give him that. More importantly, it shoots!",
        "category_zh": "武器",
        "subcategory": "bow",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_easter_bow 胡咧咧弓 balderdash 不得不说，造这把弓的人很有想象力。更重要的是，它真的能当弓用！ the creator of the bow has a good imagination, you must give him that. more importantly, it shoots! weapon 武器 bow weapon weapon_storage quick festive wls2_weapon_easter_bow"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 521,
            "unit": "",
            "display": "521"
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
            "value": 120,
            "unit": "",
            "display": "120"
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
              "damage": 521,
              "dexterity": 2,
              "penetrating_damage": 16
            },
            "display": {
              "damage": "521",
              "dexterity": "+2",
              "penetrating_damage": "16"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 534,
              "dexterity": 3,
              "penetrating_damage": 16
            },
            "display": {
              "damage": "534",
              "dexterity": "+3",
              "penetrating_damage": "16"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 563,
              "dexterity": 4,
              "penetrating_damage": 17
            },
            "display": {
              "damage": "563",
              "dexterity": "+4",
              "penetrating_damage": "17"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 575,
              "dexterity": 5,
              "penetrating_damage": 17
            },
            "display": {
              "damage": "575",
              "dexterity": "+5",
              "penetrating_damage": "17"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 600,
              "dexterity": 6,
              "penetrating_damage": 18
            },
            "display": {
              "damage": "600",
              "dexterity": "+6",
              "penetrating_damage": "18"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 601,
              "dexterity": 6,
              "penetrating_damage": 18
            },
            "display": {
              "damage": "601",
              "dexterity": "+6",
              "penetrating_damage": "18"
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
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1600。",
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
        "description": "inventory_stack_view_wls2_weapon_easter_colt_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_colt_description",
        "name": "inventory_stack_view_wls2_weapon_easter_colt_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_colt",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_colt"
      },
      "item_id": "wls2_weapon_easter_colt",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_colt_description",
        "en": {
          "description": "A bright and foppish-colored first-class colt. Time to have some fun!",
          "full_description": "A bright and foppish-colored first-class colt. Time to have some fun!",
          "name": "Fair Colt"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_colt_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_colt_name",
        "zh": {
          "description": "闪亮且五颜六色的顶级柯尔特左轮。是时候找点乐子了！",
          "full_description": "闪亮且五颜六色的顶级柯尔特左轮。是时候找点乐子了！",
          "name": "集市柯尔特左轮"
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
                "wls2_easter_currency_egg": 1000
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_colt",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_easter_colt"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_4": 4,
                "wls2_resourse_fourfold_nails_4": 8,
                "wls2_resourse_secondary_ingot_4": 8
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_colt"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_colt_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_colt",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.2
        },
        "critical_hit_chance": {
          "1": 0.15,
          "2": 0.18,
          "3": 0.21,
          "4": 0.24,
          "5": 0.27
        },
        "damage": {
          "1": 638,
          "2": 704,
          "3": 770,
          "4": 836,
          "5": 902,
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
          "1": 19,
          "2": 21,
          "3": 23,
          "4": 25,
          "5": 27
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
          "type": "simple"
        },
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_weapon_range_firearms_revolver_4"
        ],
        "hit_sounds": [
          "wls2_weapon_range_firearms_revolver_4"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Easter_revolver_SW_model1",
        "prefab_pbr_id": "@Easter_revolver_SW_model1_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm"
        ]
      },
      "weapon_id": "wls2_weapon_easter_colt",
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
          "firearm"
        ]
      },
      "image_key": "4ad6966c738dbe7f579ff441f1819c0a24401d3d06b6a75b47cd52a88d1fcb0f",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "集市柯尔特左轮",
        "name_en": "Fair Colt",
        "description_zh": "闪亮且五颜六色的顶级柯尔特左轮。是时候找点乐子了！",
        "description_en": "A bright and foppish-colored first-class colt. Time to have some fun!",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_easter_colt 集市柯尔特左轮 fair colt 闪亮且五颜六色的顶级柯尔特左轮。是时候找点乐子了！ a bright and foppish-colored first-class colt. time to have some fun! weapon 武器 pistol weapon weapon_storage quick festive wls2_weapon_easter_colt"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 638,
            "unit": "",
            "display": "638"
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
            "key": "bandit_damage_modifier",
            "label": "对强盗伤害加成",
            "value": 0.2,
            "unit": "%",
            "display": "20%"
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
              "critical_hit_chance": 0.15,
              "damage": 638,
              "penetrating_damage": 19
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "638",
              "penetrating_damage": "19"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 704,
              "penetrating_damage": 21
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "704",
              "penetrating_damage": "21"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.21,
              "damage": 770,
              "penetrating_damage": 23
            },
            "display": {
              "critical_hit_chance": "21%",
              "damage": "770",
              "penetrating_damage": "23"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.24,
              "damage": 836,
              "penetrating_damage": 25
            },
            "display": {
              "critical_hit_chance": "24%",
              "damage": "836",
              "penetrating_damage": "25"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.27,
              "damage": 902,
              "penetrating_damage": 27
            },
            "display": {
              "critical_hit_chance": "27%",
              "damage": "902",
              "penetrating_damage": "27"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.27,
              "damage": 903,
              "penetrating_damage": 27
            },
            "display": {
              "critical_hit_chance": "27%",
              "damage": "903",
              "penetrating_damage": "27"
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
          "伤害：6 级起每级增加 1，最高 1902。",
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
        "description": "inventory_stack_view_wls2_weapon_easter_crossbow_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_crossbow_description",
        "name": "inventory_stack_view_wls2_weapon_easter_crossbow_name",
        "rarity": "common",
        "sorting_group_id": "crossbow",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_crossbow",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_crossbow"
      },
      "item_id": "wls2_weapon_easter_crossbow",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_crossbow_description",
        "en": {
          "description": "Allows you to find out how painfully a seemingly harmless carrot hits.",
          "full_description": "Allows you to find out how painfully a seemingly harmless carrot hits.",
          "name": "Carrotbow"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_crossbow_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_crossbow_name",
        "zh": {
          "description": "它会让你明白，表面人畜无害的胡萝卜，其实暗藏杀机。",
          "full_description": "它会让你明白，表面人畜无害的胡萝卜，其实暗藏杀机。",
          "name": "胡萝卜弩"
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
                "wls2_easter_currency_egg": 800
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_crossbow",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_easter_crossbow"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_3": 2,
                "wls2_resourse_secondary_plank_4": 4,
                "wls2_resourse_secondary_rope_3": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_crossbow"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_crossbow_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_crossbow",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.07,
          "3": 0.09,
          "4": 0.11,
          "5": 0.13
        },
        "damage": {
          "1": 345,
          "2": 356,
          "3": 422,
          "4": 443,
          "5": 470,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 120,
          "2": 120,
          "3": 120,
          "4": 120,
          "5": 120
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
      "tier": 2,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "arrow_speed": 25,
          "bow_stretched_time": 0.3,
          "headshot_probability": 0.3,
          "max_charge_damage_multiplier": 2.5,
          "min_charge_time": 1,
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
          "bow_reload_sound",
          "wls2_weapon_easter_crossbow_01"
        ],
        "hit_sounds": [
          "bow_reload_sound",
          "wls2_weapon_easter_crossbow_01"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Easter_crossbow",
        "speed_modifier": 1,
        "tags": [
          "ranged"
        ]
      },
      "weapon_id": "wls2_weapon_easter_crossbow",
      "weapon_summary": {
        "attack_action": {
          "arrow_speed": 25,
          "bow_stretched_time": 0.3,
          "headshot_probability": 0.3,
          "max_charge_damage_multiplier": 2.5,
          "min_charge_time": 1,
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
      "image_key": "a1542e4b88b3b40e4786fe8c7f9cd22aab6f9dd7d1f6a59fe93990301703047a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "胡萝卜弩",
        "name_en": "Carrotbow",
        "description_zh": "它会让你明白，表面人畜无害的胡萝卜，其实暗藏杀机。",
        "description_en": "Allows you to find out how painfully a seemingly harmless carrot hits.",
        "category_zh": "武器",
        "subcategory": "crossbow",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_easter_crossbow 胡萝卜弩 carrotbow 它会让你明白，表面人畜无害的胡萝卜，其实暗藏杀机。 allows you to find out how painfully a seemingly harmless carrot hits. weapon 武器 crossbow weapon weapon_storage quick festive wls2_weapon_easter_crossbow"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 345,
            "unit": "",
            "display": "345"
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
            "value": 120,
            "unit": "",
            "display": "120"
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
              "critical_hit_chance": 0.05,
              "damage": 345
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "345"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.07,
              "damage": 356
            },
            "display": {
              "critical_hit_chance": "7%",
              "damage": "356"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.09,
              "damage": 422
            },
            "display": {
              "critical_hit_chance": "9%",
              "damage": "422"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.11,
              "damage": 443
            },
            "display": {
              "critical_hit_chance": "11%",
              "damage": "443"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 470
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "470"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 471
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "471"
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
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1470。",
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
        "description": "inventory_stack_view_wls2_weapon_easter_mace_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_mace_description",
        "name": "inventory_stack_view_wls2_weapon_easter_mace_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_mace_mallet",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_mace",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_mace"
      },
      "item_id": "wls2_weapon_easter_mace",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_mace_description",
        "en": {
          "description": "A festively painted melee weapon, perfect for smashing eggs. Or someone's head.",
          "full_description": "A festively painted melee weapon, perfect for smashing eggs. Or someone's head.",
          "name": "Painted Mace"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_mace_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_mace_name",
        "zh": {
          "description": "涂有节日彩绘的近战武器，适合用来砸烂彩蛋，以及脑袋。",
          "full_description": "涂有节日彩绘的近战武器，适合用来砸烂彩蛋，以及脑袋。",
          "name": "彩绘狼牙棒"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_ingot_3": 2,
            "wls2_resourse_secondary_leather_3": 2
          },
          "result": {
            "inventory_stack_id": "wls2_weapon_easter_mace"
          },
          "type": "recycle"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_easter_currency_egg": 150
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_mace",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_easter_mace"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_3": 2,
                "wls2_resourse_secondary_leather_3": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_mace"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_mace"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_mace",
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
          "1": 234,
          "2": 270,
          "3": 292,
          "4": 308,
          "5": 352,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
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
      "subcategory": "mace_mallet",
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
        "attack_range": 2,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_club_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Easter_hammer_mace",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_weapon_easter_mace",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.5,
        "attack_damage_time": 0.5,
        "attack_ending_time": 1,
        "attack_range": 2,
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
          "blunt"
        ]
      },
      "image_key": "4359f4620e9a54f4108fa4f18a03fef601cfd512f8801a51b0ee2b8b24c18150",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "彩绘狼牙棒",
        "name_en": "Painted Mace",
        "description_zh": "涂有节日彩绘的近战武器，适合用来砸烂彩蛋，以及脑袋。",
        "description_en": "A festively painted melee weapon, perfect for smashing eggs. Or someone's head.",
        "category_zh": "武器",
        "subcategory": "mace_mallet",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_easter_mace 彩绘狼牙棒 painted mace 涂有节日彩绘的近战武器，适合用来砸烂彩蛋，以及脑袋。 a festively painted melee weapon, perfect for smashing eggs. or someone's head. weapon 武器 mace_mallet weapon weapon_storage quick festive wls2_weapon_easter_mace"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 234,
            "unit": "",
            "display": "234"
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
            "value": 100,
            "unit": "",
            "display": "100"
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
              "critical_hit_chance": 0.08,
              "critical_modifier": 0.15,
              "damage": 234
            },
            "display": {
              "critical_hit_chance": "8%",
              "critical_modifier": "15%",
              "damage": "234"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.1,
              "critical_modifier": 0.3,
              "damage": 270
            },
            "display": {
              "critical_hit_chance": "10%",
              "critical_modifier": "30%",
              "damage": "270"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.15,
              "critical_modifier": 0.5,
              "damage": 292
            },
            "display": {
              "critical_hit_chance": "15%",
              "critical_modifier": "50%",
              "damage": "292"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.18,
              "critical_modifier": 0.7,
              "damage": 308
            },
            "display": {
              "critical_hit_chance": "18%",
              "critical_modifier": "70%",
              "damage": "308"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 1,
              "damage": 352
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "100%",
              "damage": "352"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 1,
              "damage": 353
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "100%",
              "damage": "353"
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
        "description": "inventory_stack_view_wls2_weapon_easter_mallet_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_mallet_description",
        "name": "inventory_stack_view_wls2_weapon_easter_mallet_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_mace_mallet",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_mallet",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_mallet"
      },
      "item_id": "wls2_weapon_easter_mallet",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_mallet_description",
        "en": {
          "description": "A colorful mallet from the fair attraction. The handle reads: \"Good night\".",
          "full_description": "A colorful mallet from the fair attraction. The handle reads: \"Good night\".",
          "name": "Easter Mallet"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_mallet_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_mallet_name",
        "zh": {
          "description": "一把集市上的彩色木槌。柄上写着：“晚安”。",
          "full_description": "一把集市上的彩色木槌。柄上写着：“晚安”。",
          "name": "复活节木槌"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_ingot_3": 2,
            "wls2_resourse_secondary_plank_3": 2
          },
          "result": {
            "inventory_stack_id": "wls2_weapon_easter_mallet"
          },
          "type": "recycle"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_easter_currency_egg": 250
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_mallet",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_easter_mallet"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_3": 2,
                "wls2_resourse_secondary_plank_3": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_mallet"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_mallet"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_mallet",
      "stat_curves": {
        "damage": {
          "1": 358,
          "2": 407,
          "3": 468,
          "4": 490,
          "5": 523,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 120,
          "2": 120,
          "3": 120,
          "4": 120,
          "5": 120
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
      "subcategory": "mace_mallet",
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
        "attack_range": 2,
        "durability_price": 1,
        "hit_empty_sounds": [
          "sounds_weapos_whoosh",
          "sounds_weapos_whoosh"
        ],
        "hit_sounds": [
          "wls2_weapon_easter_hummer_01"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Easter_hammer_mallet",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_weapon_easter_mallet",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.5,
        "attack_damage_time": 0.5,
        "attack_ending_time": 1,
        "attack_range": 2,
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
          "blunt"
        ]
      },
      "image_key": "860034db285f055a40f2f5eed90b3fd608bd3c29d8adae878d8038239224dd46",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "复活节木槌",
        "name_en": "Easter Mallet",
        "description_zh": "一把集市上的彩色木槌。柄上写着：“晚安”。",
        "description_en": "A colorful mallet from the fair attraction. The handle reads: \"Good night\".",
        "category_zh": "武器",
        "subcategory": "mace_mallet",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_easter_mallet 复活节木槌 easter mallet 一把集市上的彩色木槌。柄上写着：“晚安”。 a colorful mallet from the fair attraction. the handle reads: \"good night\". weapon 武器 mace_mallet weapon weapon_storage quick festive wls2_weapon_easter_mallet"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 358,
            "unit": "",
            "display": "358"
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
            "value": 120,
            "unit": "",
            "display": "120"
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
              "damage": 358,
              "slow_time": 0.75
            },
            "display": {
              "damage": "358",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 407,
              "slow_time": 1
            },
            "display": {
              "damage": "407",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 468,
              "slow_time": 1.25
            },
            "display": {
              "damage": "468",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 490,
              "slow_time": 1.5
            },
            "display": {
              "damage": "490",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 523,
              "slow_time": 1.75
            },
            "display": {
              "damage": "523",
              "slow_time": "1.75 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 524,
              "slow_time": 1.75
            },
            "display": {
              "damage": "524",
              "slow_time": "1.75 秒"
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
          "伤害：6 级起每级增加 1，最高 1523。",
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
        "description": "inventory_stack_view_wls2_weapon_easter_pepperbox_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_pepperbox_description",
        "name": "inventory_stack_view_wls2_weapon_easter_pepperbox_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_pepperbox",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_pepperbox"
      },
      "item_id": "wls2_weapon_easter_pepperbox",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_pepperbox_description",
        "en": {
          "description": "Bright! Noisy! Like the fair's fireworks.",
          "full_description": "Bright! Noisy! Like the fair's fireworks.",
          "name": "Fair Pepperbox"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_pepperbox_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_pepperbox_name",
        "zh": {
          "description": "耀眼！聒噪！就像集市的烟花一样。",
          "full_description": "耀眼！聒噪！就像集市的烟花一样。",
          "name": "集市胡椒盒手枪"
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
                "wls2_easter_currency_egg": 600
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_pepperbox",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_easter_pepperbox"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_3": 4,
                "wls2_resourse_fourfold_nails_3": 8,
                "wls2_resourse_secondary_ingot_3": 8
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_pepperbox"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_pepperbox_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_pepperbox",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.2
        },
        "damage": {
          "1": 407,
          "2": 440,
          "3": 484,
          "4": 523,
          "5": 567,
          "per_level_after_max": 1
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
          "3": 15,
          "4": 16,
          "5": 17
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
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 4.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_remington"
        ],
        "hit_sounds": [
          "wls_remington"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Easter_pistol_Marietta",
        "prefab_pbr_id": "@Easter_pistol_Marietta_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm"
        ]
      },
      "weapon_id": "wls2_weapon_easter_pepperbox",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 4.5,
        "attacks_per_second_inferred": 0.8333333333333334,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm"
        ]
      },
      "image_key": "48dbba8973c8ec0a2f19a45a194fd7defe67d00f08f7e838e203f59413ea1fb2",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "集市胡椒盒手枪",
        "name_en": "Fair Pepperbox",
        "description_zh": "耀眼！聒噪！就像集市的烟花一样。",
        "description_en": "Bright! Noisy! Like the fair's fireworks.",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_easter_pepperbox 集市胡椒盒手枪 fair pepperbox 耀眼！聒噪！就像集市的烟花一样。 bright! noisy! like the fair's fireworks. weapon 武器 pistol weapon weapon_storage quick festive wls2_weapon_easter_pepperbox"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 407,
            "unit": "",
            "display": "407"
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
            "value": 150,
            "unit": "",
            "display": "150"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 4.5,
            "unit": "",
            "display": "4.5"
          }
        ],
        "fixed": [
          {
            "key": "bandit_damage_modifier",
            "label": "对强盗伤害加成",
            "value": 0.2,
            "unit": "%",
            "display": "20%"
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
              "damage": 407,
              "penetrating_damage": 12
            },
            "display": {
              "damage": "407",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 440,
              "penetrating_damage": 13
            },
            "display": {
              "damage": "440",
              "penetrating_damage": "13"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 484,
              "penetrating_damage": 15
            },
            "display": {
              "damage": "484",
              "penetrating_damage": "15"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 523,
              "penetrating_damage": 16
            },
            "display": {
              "damage": "523",
              "penetrating_damage": "16"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 567,
              "penetrating_damage": 17
            },
            "display": {
              "damage": "567",
              "penetrating_damage": "17"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 568,
              "penetrating_damage": 17
            },
            "display": {
              "damage": "568",
              "penetrating_damage": "17"
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
          "伤害：6 级起每级增加 1，最高 1567。",
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
      "category": "tool",
      "gathering_tool": {
        "durability_price": 1,
        "ending_time": 0.5,
        "prefab_common_id": "@Easter_pickaxe",
        "prefab_pbr_id": "@Easter_pickaxe_pbr",
        "sounds": [
          "kirk_use_steel",
          "kirk_use_steel",
          "kirk_use_steel"
        ],
        "speed_modifier": 1,
        "start_time": 0.5,
        "tool_damage": 1
      },
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_easter_pick_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_pick_description",
        "name": "inventory_stack_view_wls2_weapon_easter_pick_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_pick",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "tool_id": "wls2_weapon_easter_pick",
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_pick"
      },
      "item_id": "wls2_weapon_easter_pick",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_pick_description",
        "en": {
          "description": "Doesn't seem practical for mining, but allows you to find out how deep the rabbit hole is.",
          "full_description": "Doesn't seem practical for mining, but allows you to find out how deep the rabbit hole is.",
          "name": "Сarrot Pickaxe"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_pick_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_pick_name",
        "zh": {
          "description": "看起来不太能挖矿的样子，但能让你明白兔子洞有多深。",
          "full_description": "看起来不太能挖矿的样子，但能让你明白兔子洞有多深。",
          "name": "胡萝卜镐"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_ingot_3": 2,
            "wls2_resourse_secondary_plank_3": 2
          },
          "result": {
            "inventory_stack_id": "wls2_weapon_easter_pick"
          },
          "type": "recycle"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_easter_currency_egg": 150
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_pick",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_easter_pick"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_3": 2,
                "wls2_resourse_secondary_plank_3": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_pick"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_pick"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_pick",
      "stat_curves": {
        "damage": {
          "1": 253,
          "2": 275,
          "3": 297,
          "4": 319,
          "5": 330,
          "per_level_after_max": 1
        },
        "dot_amount": {
          "1": 100,
          "2": 125,
          "3": 150,
          "4": 175,
          "5": 200
        },
        "dot_time": {
          "1": 3,
          "2": 3,
          "3": 3,
          "4": 3,
          "5": 3
        },
        "max_durability": {
          "1": 140,
          "2": 140,
          "3": 140,
          "4": 140,
          "5": 140
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
      "subcategory": "other_tool",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": "wls2_weapon_easter_pick",
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.6,
        "attack_ending_time": 0.8,
        "attack_range": 1.2,
        "durability_price": 1,
        "hit_empty_sounds": [
          "iron_thing_whoosh2",
          "iron_thing_whoosh1"
        ],
        "hit_sounds": [
          "wls2_weapon_easter_hummer_02",
          "wls2_weapon_easter_hummer_02"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Easter_pickaxe",
        "prefab_pbr_id": "@Easter_pickaxe_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_easter_pick",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.4,
        "attack_damage_time": 0.6,
        "attack_ending_time": 0.8,
        "attack_range": 1.2,
        "attacks_per_second_inferred": 0.7142857142857143,
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
      "image_key": "6b9fc12c6fbbc1c0714b3251c4bc14880a16d5d30c24227049e28541ab8fe943",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "胡萝卜镐",
        "name_en": "Сarrot Pickaxe",
        "description_zh": "看起来不太能挖矿的样子，但能让你明白兔子洞有多深。",
        "description_en": "Doesn't seem practical for mining, but allows you to find out how deep the rabbit hole is.",
        "category_zh": "工具",
        "subcategory": "other_tool",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_easter_pick 胡萝卜镐 сarrot pickaxe 看起来不太能挖矿的样子，但能让你明白兔子洞有多深。 doesn't seem practical for mining, but allows you to find out how deep the rabbit hole is. tool 工具 other_tool weapon weapon_storage quick festive wls2_weapon_easter_pick"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 253,
            "unit": "",
            "display": "253"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.7142857142857143,
            "unit": "次/秒",
            "display": "0.71 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 140,
            "unit": "",
            "display": "140"
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
            "value": 1.4,
            "unit": "秒",
            "display": "1.4 秒"
          },
          {
            "key": "attack_durability_cost",
            "label": "每次攻击耐久消耗",
            "value": 1,
            "unit": "点",
            "display": "1 点"
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
              "damage": 253,
              "dot_amount": 100
            },
            "display": {
              "damage": "253",
              "dot_amount": "100"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 275,
              "dot_amount": 125
            },
            "display": {
              "damage": "275",
              "dot_amount": "125"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 297,
              "dot_amount": 150
            },
            "display": {
              "damage": "297",
              "dot_amount": "150"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 319,
              "dot_amount": 175
            },
            "display": {
              "damage": "319",
              "dot_amount": "175"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 330,
              "dot_amount": 200
            },
            "display": {
              "damage": "330",
              "dot_amount": "200"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 331,
              "dot_amount": 200
            },
            "display": {
              "damage": "331",
              "dot_amount": "200"
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
          "伤害：6 级起每级增加 1，最高 1330。",
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
        "description": "inventory_stack_view_wls2_weapon_easter_shotgun_1_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_shotgun_1_description",
        "name": "inventory_stack_view_wls2_weapon_easter_shotgun_1_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_1",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_shotgun_1"
      },
      "item_id": "wls2_weapon_easter_shotgun_1",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_1_description",
        "en": {
          "description": "Despite the name, it doesn't shoot confetti.",
          "full_description": "Despite the name, it doesn't shoot confetti.",
          "name": "Confetti II"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_1_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_1_name",
        "zh": {
          "description": "虽然叫彩炮，但它射的可不是彩色纸屑。",
          "full_description": "虽然叫彩炮，但它射的可不是彩色纸屑。",
          "name": "彩炮 II"
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
                "wls2_easter_currency_egg": 500
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_shotgun_1",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_easter_shotgun_1"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_3": 6,
                "wls2_resourse_fourfold_nails_3": 2,
                "wls2_resourse_secondary_ingot_3": 4,
                "wls2_resourse_secondary_plank_3": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_shotgun_1"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_shotgun_1_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_1",
      "stat_curves": {
        "damage": {
          "1": 220,
          "2": 240,
          "3": 260,
          "4": 290,
          "5": 310,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 125,
          "2": 125,
          "3": 125,
          "4": 125,
          "5": 125
        },
        "penetrating_damage": {
          "1": 3,
          "2": 4,
          "3": 4,
          "4": 4,
          "5": 5
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
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
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
        "prefab_common_id": "@Easter_shotgun_1",
        "prefab_pbr_id": "@Easter_shotgun_1_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_easter_shotgun_1",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.5,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.6666666666666666,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "d1c2b456a47cdd2eb077a97ca0c3442c116588041d48920508ec0f8f5b65f6a6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "彩炮 II",
        "name_en": "Confetti II",
        "description_zh": "虽然叫彩炮，但它射的可不是彩色纸屑。",
        "description_en": "Despite the name, it doesn't shoot confetti.",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_easter_shotgun_1 彩炮 ii confetti ii 虽然叫彩炮，但它射的可不是彩色纸屑。 despite the name, it doesn't shoot confetti. weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_easter_shotgun_1"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 220,
            "unit": "",
            "display": "220"
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
            "value": 125,
            "unit": "",
            "display": "125"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 220,
              "penetrating_damage": 3
            },
            "display": {
              "damage": "220",
              "penetrating_damage": "3"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 240,
              "penetrating_damage": 4
            },
            "display": {
              "damage": "240",
              "penetrating_damage": "4"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 260,
              "penetrating_damage": 4
            },
            "display": {
              "damage": "260",
              "penetrating_damage": "4"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 290,
              "penetrating_damage": 4
            },
            "display": {
              "damage": "290",
              "penetrating_damage": "4"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 310,
              "penetrating_damage": 5
            },
            "display": {
              "damage": "310",
              "penetrating_damage": "5"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 311,
              "penetrating_damage": 5
            },
            "display": {
              "damage": "311",
              "penetrating_damage": "5"
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
          "伤害：6 级起每级增加 1，最高 1310。",
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
        "description": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "name": "inventory_stack_view_wls2_weapon_easter_shotgun_2_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_2",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_shotgun_2"
      },
      "item_id": "wls2_weapon_easter_shotgun_2",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "en": {
          "description": "May not be that funny. But shoots perfectly!",
          "full_description": "May not be that funny. But shoots perfectly!",
          "name": "Killing Joke"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_name",
        "zh": {
          "description": "可能也没那么好笑，但是很好射！",
          "full_description": "可能也没那么好笑，但是很好射！",
          "name": "爆笑"
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
                "wls2_easter_currency_egg": 600
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_shotgun_2",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_easter_shotgun_2"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_4": 6,
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_ingot_4": 4,
                "wls2_resourse_secondary_plank_4": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_shotgun_2"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_shotgun_2_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_2",
      "stat_curves": {
        "damage": {
          "1": 300,
          "2": 330,
          "3": 360,
          "4": 390,
          "5": 420,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 125,
          "2": 125,
          "3": 125,
          "4": 125,
          "5": 125
        },
        "penetrating_damage": {
          "1": 5,
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
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "santa_shotgun"
        ],
        "hit_sounds": [
          "santa_shotgun"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Easter_shotgun_2",
        "prefab_pbr_id": "@Easter_shotgun_2_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_easter_shotgun_2",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.5,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.6666666666666666,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "ff8ebdcba688f7fb3994b9092f379473e9608ad1274854dabfeed893e32aad40",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "爆笑",
        "name_en": "Killing Joke",
        "description_zh": "可能也没那么好笑，但是很好射！",
        "description_en": "May not be that funny. But shoots perfectly!",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_easter_shotgun_2 爆笑 killing joke 可能也没那么好笑，但是很好射！ may not be that funny. but shoots perfectly! weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_easter_shotgun_2"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 300,
            "unit": "",
            "display": "300"
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
            "value": 125,
            "unit": "",
            "display": "125"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 300,
              "penetrating_damage": 5
            },
            "display": {
              "damage": "300",
              "penetrating_damage": "5"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 330,
              "penetrating_damage": 5
            },
            "display": {
              "damage": "330",
              "penetrating_damage": "5"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 360,
              "penetrating_damage": 5
            },
            "display": {
              "damage": "360",
              "penetrating_damage": "5"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 390,
              "penetrating_damage": 6
            },
            "display": {
              "damage": "390",
              "penetrating_damage": "6"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 420,
              "penetrating_damage": 6
            },
            "display": {
              "damage": "420",
              "penetrating_damage": "6"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 421,
              "penetrating_damage": 6
            },
            "display": {
              "damage": "421",
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
        "description": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "full_description": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "name": "inventory_stack_view_wls2_weapon_easter_shotgun_3_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_3",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_easter_shotgun_3"
      },
      "item_id": "wls2_weapon_easter_shotgun_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "en": {
          "description": "The favorite shotgun of the Fair Hostess. Don't mess with the lady in red!",
          "full_description": "The favorite shotgun of the Fair Hostess. Don't mess with the lady in red!",
          "name": "Jill's Shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_description",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_name",
        "zh": {
          "description": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
          "full_description": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
          "name": "吉尔的霰弹枪"
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
                "wls2_easter_currency_egg": 1500
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_shotgun_3",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_easter_shotgun_3"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_4": 6,
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_ingot_4": 4,
                "wls2_resourse_secondary_plank_4": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_easter_shotgun_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_easter_shotgun_3_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_3",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.08,
          "3": 0.1,
          "4": 0.13,
          "5": 0.15
        },
        "damage": {
          "1": 560,
          "2": 610,
          "3": 670,
          "4": 720,
          "5": 780,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 230,
          "2": 230,
          "3": 230,
          "4": 230,
          "5": 230
        },
        "penetrating_damage": {
          "1": 8,
          "2": 9,
          "3": 10,
          "4": 11,
          "5": 12
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
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
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
        "prefab_common_id": "@Easter_shotgun_3",
        "prefab_pbr_id": "@Easter_shotgun_3_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_easter_shotgun_3",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.5,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.6666666666666666,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "b603fc5880f23feb9453ab8321797febd8f12e94181fa85643ed60dc0dad717d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "吉尔的霰弹枪",
        "name_en": "Jill's Shotgun",
        "description_zh": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
        "description_en": "The favorite shotgun of the Fair Hostess. Don't mess with the lady in red!",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_easter_shotgun_3 吉尔的霰弹枪 jill's shotgun 集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！ the favorite shotgun of the fair hostess. don't mess with the lady in red! weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_easter_shotgun_3"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 560,
            "unit": "",
            "display": "560"
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
            "value": 230,
            "unit": "",
            "display": "230"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_hit_chance": 0.05,
              "damage": 560,
              "penetrating_damage": 8
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "560",
              "penetrating_damage": "8"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.08,
              "damage": 610,
              "penetrating_damage": 9
            },
            "display": {
              "critical_hit_chance": "8%",
              "damage": "610",
              "penetrating_damage": "9"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 670,
              "penetrating_damage": 10
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "670",
              "penetrating_damage": "10"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 720,
              "penetrating_damage": 11
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "720",
              "penetrating_damage": "11"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 780,
              "penetrating_damage": 12
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "780",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 781,
              "penetrating_damage": 12
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "781",
              "penetrating_damage": "12"
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
          "伤害：6 级起每级增加 1，最高 1780。",
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
        "description": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "full_description": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "name": "inventory_stack_view_wls2_weapon_lunar_shotgun_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_lunar_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive",
          "shotgun"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_lunar_shotgun_2_rare"
      },
      "item_id": "wls2_weapon_lunar_shotgun_2_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "en": {
          "description": "A shot like a herd of fiery horses will strike your enemies",
          "full_description": "A shot like a herd of fiery horses will strike your enemies",
          "name": "Flame shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "name_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_name",
        "zh": {
          "description": "一发子弹像一群火热的马将打击你的敌人",
          "full_description": "一发子弹像一群火热的马将打击你的敌人",
          "name": "火焰 霰弹枪"
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
                "wls2_resourse_fourfold_gunparts_1": 6,
                "wls2_resourse_fourfold_nails_1": 2,
                "wls2_resourse_secondary_ingot_1": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_lunar_shotgun_2_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_lunar_shotgun_2_rare_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_4_a",
            "durability_factor": 0.5,
            "level_max": 50,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_lunar_shotgun_2_rare",
            "transaction_id": "transaction_iap_wls_5_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.5,
            "level_max": 70,
            "level_min": 51,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_lunar_shotgun_2_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_lunar_icon",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
        },
        "damage": {
          "1": 263,
          "2": 290,
          "3": 316,
          "4": 342,
          "5": 369,
          "per_level_after_max": 1
        },
        "dot_amount": {
          "1": 26,
          "2": 29,
          "3": 32,
          "4": 35,
          "5": 37
        },
        "dot_time": {
          "1": 4,
          "2": 4,
          "3": 4,
          "4": 4,
          "5": 4
        },
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
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
      "subcategory": "shotgun",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive",
        "shotgun"
      ],
      "throwing_item": null,
      "tier": 2,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_05"
        ],
        "hit_sounds": [
          "wls_rifle_05"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Shotgun_M1897_Lunar",
        "prefab_pbr_id": "@Shotgun_M1897_Lunar",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_lunar_shotgun_2_rare",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.25,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.8,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "bf5e960bdef4f9f82aa0c8fc9494b6b25d6bddc4b3cfc1186206b9538776e403",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "火焰 霰弹枪",
        "name_en": "Flame shotgun",
        "description_zh": "一发子弹像一群火热的马将打击你的敌人",
        "description_en": "A shot like a herd of fiery horses will strike your enemies",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_lunar_shotgun_2_rare 火焰 霰弹枪 flame shotgun 一发子弹像一群火热的马将打击你的敌人 a shot like a herd of fiery horses will strike your enemies weapon 武器 shotgun weapon weapon_storage quick festive shotgun wls2_weapon_lunar_shotgun_2_rare"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 263,
            "unit": "",
            "display": "263"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.8,
            "unit": "次/秒",
            "display": "0.8 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 100,
            "unit": "",
            "display": "100"
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
            "key": "dot_time",
            "label": "持续伤害时间",
            "value": 4,
            "unit": "秒",
            "display": "4 秒"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.25,
            "unit": "秒",
            "display": "1.25 秒"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 263,
              "dot_amount": 26
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "263",
              "dot_amount": "26"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 290,
              "dot_amount": 29
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "290",
              "dot_amount": "29"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 316,
              "dot_amount": 32
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "316",
              "dot_amount": "32"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 342,
              "dot_amount": 35
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "342",
              "dot_amount": "35"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 369,
              "dot_amount": 37
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "369",
              "dot_amount": "37"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 370,
              "dot_amount": 37
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "370",
              "dot_amount": "37"
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
            "key": "dot_amount",
            "label": "持续伤害总量",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1369。",
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
        "description": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "full_description": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "name": "inventory_stack_view_wls2_weapon_lunar_shotgun_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_lunar_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive",
          "shotgun"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_lunar_shotgun_3_rare"
      },
      "item_id": "wls2_weapon_lunar_shotgun_3_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "en": {
          "description": "A shot like a herd of fiery horses will strike your enemies",
          "full_description": "A shot like a herd of fiery horses will strike your enemies",
          "name": "Flame shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "name_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_name",
        "zh": {
          "description": "一发子弹像一群火热的马将打击你的敌人",
          "full_description": "一发子弹像一群火热的马将打击你的敌人",
          "name": "火焰 霰弹枪"
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
                "wls2_resourse_fourfold_gunparts_2": 6,
                "wls2_resourse_fourfold_nails_2": 2,
                "wls2_resourse_secondary_ingot_2": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_lunar_shotgun_3_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_lunar_shotgun_3_rare_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
            "durability_factor": 0.5,
            "level_max": 70,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_lunar_shotgun_3_rare",
            "transaction_id": "transaction_iap_wls_8_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_4_a",
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
            "stack_id": "wls2_weapon_lunar_shotgun_3_rare",
            "transaction_id": "transaction_iap_wls_5_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_lunar_icon",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
        },
        "damage": {
          "1": 420,
          "2": 460,
          "3": 500,
          "4": 550,
          "5": 590,
          "per_level_after_max": 1
        },
        "dot_amount": {
          "1": 40,
          "2": 45,
          "3": 50,
          "4": 55,
          "5": 60
        },
        "dot_time": {
          "1": 4,
          "2": 4,
          "3": 4,
          "4": 4,
          "5": 4
        },
        "max_durability": {
          "1": 150,
          "2": 150,
          "3": 150,
          "4": 150,
          "5": 150
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
      "subcategory": "shotgun",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive",
        "shotgun"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_05"
        ],
        "hit_sounds": [
          "wls_rifle_05"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Shotgun_M1897_Lunar",
        "prefab_pbr_id": "@Shotgun_M1897_Lunar",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_lunar_shotgun_3_rare",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.25,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.8,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "bf5e960bdef4f9f82aa0c8fc9494b6b25d6bddc4b3cfc1186206b9538776e403",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "火焰 霰弹枪",
        "name_en": "Flame shotgun",
        "description_zh": "一发子弹像一群火热的马将打击你的敌人",
        "description_en": "A shot like a herd of fiery horses will strike your enemies",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_lunar_shotgun_3_rare 火焰 霰弹枪 flame shotgun 一发子弹像一群火热的马将打击你的敌人 a shot like a herd of fiery horses will strike your enemies weapon 武器 shotgun weapon weapon_storage quick festive shotgun wls2_weapon_lunar_shotgun_3_rare"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 420,
            "unit": "",
            "display": "420"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.8,
            "unit": "次/秒",
            "display": "0.8 次/秒"
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
            "value": 3.5,
            "unit": "",
            "display": "3.5"
          }
        ],
        "fixed": [
          {
            "key": "dot_time",
            "label": "持续伤害时间",
            "value": 4,
            "unit": "秒",
            "display": "4 秒"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.25,
            "unit": "秒",
            "display": "1.25 秒"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 420,
              "dot_amount": 40
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "420",
              "dot_amount": "40"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 460,
              "dot_amount": 45
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "460",
              "dot_amount": "45"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 500,
              "dot_amount": 50
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "500",
              "dot_amount": "50"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 550,
              "dot_amount": 55
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "550",
              "dot_amount": "55"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 590,
              "dot_amount": 60
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "590",
              "dot_amount": "60"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 591,
              "dot_amount": 60
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "591",
              "dot_amount": "60"
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
            "key": "dot_amount",
            "label": "持续伤害总量",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1590。",
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
        "description": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "full_description": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "name": "inventory_stack_view_wls2_weapon_lunar_shotgun_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_lunar_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive",
          "shotgun"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_lunar_shotgun_4_rare"
      },
      "item_id": "wls2_weapon_lunar_shotgun_4_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "en": {
          "description": "A shot like a herd of fiery horses will strike your enemies",
          "full_description": "A shot like a herd of fiery horses will strike your enemies",
          "name": "Flame shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "name_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_name",
        "zh": {
          "description": "一发子弹像一群火热的马将打击你的敌人",
          "full_description": "一发子弹像一群火热的马将打击你的敌人",
          "name": "火焰 霰弹枪"
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
                "wls2_resourse_fourfold_gunparts_3": 6,
                "wls2_resourse_fourfold_nails_3": 2,
                "wls2_resourse_secondary_ingot_3": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_lunar_shotgun_4_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_lunar_shotgun_4_rare_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.5,
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_lunar_shotgun_4_rare",
            "transaction_id": "transaction_iap_wls_10_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
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
            "stack_id": "wls2_weapon_lunar_shotgun_4_rare",
            "transaction_id": "transaction_iap_wls_8_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_lunar_icon",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
        },
        "damage": {
          "1": 650,
          "2": 710,
          "3": 770,
          "4": 840,
          "5": 900,
          "per_level_after_max": 1
        },
        "dot_amount": {
          "1": 65,
          "2": 70,
          "3": 77,
          "4": 85,
          "5": 90
        },
        "dot_time": {
          "1": 4,
          "2": 4,
          "3": 4,
          "4": 4,
          "5": 4
        },
        "max_durability": {
          "1": 230,
          "2": 230,
          "3": 230,
          "4": 230,
          "5": 230
        },
        "penetrating_damage": {
          "1": 10,
          "2": 12,
          "3": 14,
          "4": 16,
          "5": 18
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
      "subcategory": "shotgun",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive",
        "shotgun"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_05"
        ],
        "hit_sounds": [
          "wls_rifle_05"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Shotgun_M1897_Lunar",
        "prefab_pbr_id": "@Shotgun_M1897_Lunar",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_lunar_shotgun_4_rare",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.25,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.8,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "bf5e960bdef4f9f82aa0c8fc9494b6b25d6bddc4b3cfc1186206b9538776e403",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "火焰 霰弹枪",
        "name_en": "Flame shotgun",
        "description_zh": "一发子弹像一群火热的马将打击你的敌人",
        "description_en": "A shot like a herd of fiery horses will strike your enemies",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_lunar_shotgun_4_rare 火焰 霰弹枪 flame shotgun 一发子弹像一群火热的马将打击你的敌人 a shot like a herd of fiery horses will strike your enemies weapon 武器 shotgun weapon weapon_storage quick festive shotgun wls2_weapon_lunar_shotgun_4_rare"
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
            "value": 0.8,
            "unit": "次/秒",
            "display": "0.8 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 230,
            "unit": "",
            "display": "230"
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
            "key": "dot_time",
            "label": "持续伤害时间",
            "value": 4,
            "unit": "秒",
            "display": "4 秒"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.25,
            "unit": "秒",
            "display": "1.25 秒"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 650,
              "dot_amount": 65,
              "penetrating_damage": 10
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "650",
              "dot_amount": "65",
              "penetrating_damage": "10"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 710,
              "dot_amount": 70,
              "penetrating_damage": 12
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "710",
              "dot_amount": "70",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 770,
              "dot_amount": 77,
              "penetrating_damage": 14
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "770",
              "dot_amount": "77",
              "penetrating_damage": "14"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 840,
              "dot_amount": 85,
              "penetrating_damage": 16
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "840",
              "dot_amount": "85",
              "penetrating_damage": "16"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 900,
              "dot_amount": 90,
              "penetrating_damage": 18
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "900",
              "dot_amount": "90",
              "penetrating_damage": "18"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 901,
              "dot_amount": 90,
              "penetrating_damage": 18
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "901",
              "dot_amount": "90",
              "penetrating_damage": "18"
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
          "伤害：6 级起每级增加 1，最高 1900。",
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
        "description": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "full_description": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "name": "inventory_stack_view_wls2_weapon_lunar_shotgun_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_lunar_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive",
          "shotgun"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_lunar_shotgun_5_rare"
      },
      "item_id": "wls2_weapon_lunar_shotgun_5_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "en": {
          "description": "A shot like a herd of fiery horses will strike your enemies",
          "full_description": "A shot like a herd of fiery horses will strike your enemies",
          "name": "Flame shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "name_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_name",
        "zh": {
          "description": "一发子弹像一群火热的马将打击你的敌人",
          "full_description": "一发子弹像一群火热的马将打击你的敌人",
          "name": "火焰 霰弹枪"
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
                "wls2_resourse_fourfold_gunparts_4": 6,
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_ingot_4": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_lunar_shotgun_5_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_lunar_shotgun_5_rare_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.5,
            "level_max": 105,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_lunar_shotgun_5_rare",
            "transaction_id": "transaction_iap_wls_10_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
            "durability_factor": 0.5,
            "level_min": 106,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_lunar_shotgun_5_rare",
            "transaction_id": "transaction_iap_wls_8_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_lunar_icon",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
        },
        "damage": {
          "1": 1150,
          "2": 1250,
          "3": 1350,
          "4": 1450,
          "5": 1550,
          "per_level_after_max": 1
        },
        "dot_amount": {
          "1": 115,
          "2": 125,
          "3": 135,
          "4": 145,
          "5": 155
        },
        "dot_time": {
          "1": 4,
          "2": 4,
          "3": 4,
          "4": 4,
          "5": 4
        },
        "max_durability": {
          "1": 330,
          "2": 330,
          "3": 330,
          "4": 330,
          "5": 330
        },
        "penetrating_damage": {
          "1": 27,
          "2": 30,
          "3": 32,
          "4": 35,
          "5": 38
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
      "subcategory": "shotgun",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive",
        "shotgun"
      ],
      "throwing_item": null,
      "tier": 5,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_05"
        ],
        "hit_sounds": [
          "wls_rifle_05"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Shotgun_M1897_Lunar",
        "prefab_pbr_id": "@Shotgun_M1897_Lunar",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_lunar_shotgun_5_rare",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.25,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.8,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "bf5e960bdef4f9f82aa0c8fc9494b6b25d6bddc4b3cfc1186206b9538776e403",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "火焰 霰弹枪",
        "name_en": "Flame shotgun",
        "description_zh": "一发子弹像一群火热的马将打击你的敌人",
        "description_en": "A shot like a herd of fiery horses will strike your enemies",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_lunar_shotgun_5_rare 火焰 霰弹枪 flame shotgun 一发子弹像一群火热的马将打击你的敌人 a shot like a herd of fiery horses will strike your enemies weapon 武器 shotgun weapon weapon_storage quick festive shotgun wls2_weapon_lunar_shotgun_5_rare"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1150,
            "unit": "",
            "display": "1150"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.8,
            "unit": "次/秒",
            "display": "0.8 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 330,
            "unit": "",
            "display": "330"
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
            "key": "dot_time",
            "label": "持续伤害时间",
            "value": 4,
            "unit": "秒",
            "display": "4 秒"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.25,
            "unit": "秒",
            "display": "1.25 秒"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 1150,
              "dot_amount": 115,
              "penetrating_damage": 27
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "1150",
              "dot_amount": "115",
              "penetrating_damage": "27"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 1250,
              "dot_amount": 125,
              "penetrating_damage": 30
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "1250",
              "dot_amount": "125",
              "penetrating_damage": "30"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 1350,
              "dot_amount": 135,
              "penetrating_damage": 32
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "1350",
              "dot_amount": "135",
              "penetrating_damage": "32"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 1450,
              "dot_amount": 145,
              "penetrating_damage": 35
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "1450",
              "dot_amount": "145",
              "penetrating_damage": "35"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 1550,
              "dot_amount": 155,
              "penetrating_damage": 38
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "1550",
              "dot_amount": "155",
              "penetrating_damage": "38"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 1551,
              "dot_amount": 155,
              "penetrating_damage": 38
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "1551",
              "dot_amount": "155",
              "penetrating_damage": "38"
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
          "伤害：6 级起每级增加 1，最高 2550。",
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
        "description": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "full_description": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "name": "inventory_stack_view_wls2_weapon_lunar_shotgun_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_lunar_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive",
          "shotgun"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_lunar_shotgun_6_rare"
      },
      "item_id": "wls2_weapon_lunar_shotgun_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "en": {
          "description": "A shot like a herd of fiery horses will strike your enemies",
          "full_description": "A shot like a herd of fiery horses will strike your enemies",
          "name": "Flame shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "name_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_name",
        "zh": {
          "description": "一发子弹像一群火热的马将打击你的敌人",
          "full_description": "一发子弹像一群火热的马将打击你的敌人",
          "name": "火焰 霰弹枪"
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
                "wls2_resourse_fourfold_gunparts_5": 6,
                "wls2_resourse_fourfold_nails_5": 2,
                "wls2_resourse_secondary_ingot_5": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_lunar_shotgun_6_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_lunar_shotgun_6_rare_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_12_a",
            "durability_factor": 0.5,
            "level_max": 125,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_lunar_shotgun_6_rare",
            "transaction_id": "transaction_iap_wls_15_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
            "durability_factor": 0.5,
            "level_min": 126,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_lunar_shotgun_6_rare",
            "transaction_id": "transaction_iap_wls_12_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_lunar_icon",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
        },
        "damage": {
          "1": 1800,
          "2": 1975,
          "3": 2145,
          "4": 2325,
          "5": 2490,
          "per_level_after_max": 1
        },
        "dot_amount": {
          "1": 180,
          "2": 200,
          "3": 215,
          "4": 230,
          "5": 250
        },
        "dot_time": {
          "1": 4,
          "2": 4,
          "3": 4,
          "4": 4,
          "5": 4
        },
        "max_durability": {
          "1": 330,
          "2": 330,
          "3": 330,
          "4": 330,
          "5": 330
        },
        "penetrating_damage": {
          "1": 52,
          "2": 57,
          "3": 62,
          "4": 67,
          "5": 72
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
      "subcategory": "shotgun",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive",
        "shotgun"
      ],
      "throwing_item": null,
      "tier": 6,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_05"
        ],
        "hit_sounds": [
          "wls_rifle_05"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Shotgun_M1897_Lunar",
        "prefab_pbr_id": "@Shotgun_M1897_Lunar",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_lunar_shotgun_6_rare",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.25,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.8,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "bf5e960bdef4f9f82aa0c8fc9494b6b25d6bddc4b3cfc1186206b9538776e403",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "火焰 霰弹枪",
        "name_en": "Flame shotgun",
        "description_zh": "一发子弹像一群火热的马将打击你的敌人",
        "description_en": "A shot like a herd of fiery horses will strike your enemies",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_lunar_shotgun_6_rare 火焰 霰弹枪 flame shotgun 一发子弹像一群火热的马将打击你的敌人 a shot like a herd of fiery horses will strike your enemies weapon 武器 shotgun weapon weapon_storage quick festive shotgun wls2_weapon_lunar_shotgun_6_rare"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1800,
            "unit": "",
            "display": "1800"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.8,
            "unit": "次/秒",
            "display": "0.8 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 330,
            "unit": "",
            "display": "330"
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
            "key": "dot_time",
            "label": "持续伤害时间",
            "value": 4,
            "unit": "秒",
            "display": "4 秒"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.25,
            "unit": "秒",
            "display": "1.25 秒"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 1800,
              "dot_amount": 180,
              "penetrating_damage": 52
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "1800",
              "dot_amount": "180",
              "penetrating_damage": "52"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 1975,
              "dot_amount": 200,
              "penetrating_damage": 57
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "1975",
              "dot_amount": "200",
              "penetrating_damage": "57"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 2145,
              "dot_amount": 215,
              "penetrating_damage": 62
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "2145",
              "dot_amount": "215",
              "penetrating_damage": "62"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 2325,
              "dot_amount": 230,
              "penetrating_damage": 67
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "2325",
              "dot_amount": "230",
              "penetrating_damage": "67"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 2490,
              "dot_amount": 250,
              "penetrating_damage": 72
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "2490",
              "dot_amount": "250",
              "penetrating_damage": "72"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 2491,
              "dot_amount": 250,
              "penetrating_damage": 72
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "2491",
              "dot_amount": "250",
              "penetrating_damage": "72"
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
          "伤害：6 级起每级增加 1，最高 3490。",
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
        "description": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "full_description": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "name": "inventory_stack_view_wls2_weapon_lunar_shotgun_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_lunar_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive",
          "shotgun"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_lunar_shotgun_7_rare"
      },
      "item_id": "wls2_weapon_lunar_shotgun_7_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "en": {
          "description": "A shot like a herd of fiery horses will strike your enemies",
          "full_description": "A shot like a herd of fiery horses will strike your enemies",
          "name": "Flame shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_description",
        "name_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_name",
        "zh": {
          "description": "一发子弹像一群火热的马将打击你的敌人",
          "full_description": "一发子弹像一群火热的马将打击你的敌人",
          "name": "火焰 霰弹枪"
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
                "wls2_resourse_fourfold_gunparts_6": 6,
                "wls2_resourse_fourfold_nails_6": 2,
                "wls2_resourse_secondary_ingot_6": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_lunar_shotgun_7_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_lunar_shotgun_7_rare_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_12_a",
            "durability_factor": 0.5,
            "level_max": 130,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_lunar_shotgun_7_rare",
            "transaction_id": "transaction_iap_wls_15_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
            "durability_factor": 0.5,
            "level_min": 131,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_lunar_shotgun_7_rare",
            "transaction_id": "transaction_iap_wls_12_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_lunar_icon",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
        },
        "damage": {
          "1": 2850,
          "2": 3150,
          "3": 3400,
          "4": 3700,
          "5": 3950,
          "per_level_after_max": 1
        },
        "dot_amount": {
          "1": 285,
          "2": 315,
          "3": 340,
          "4": 370,
          "5": 400
        },
        "dot_time": {
          "1": 4,
          "2": 4,
          "3": 4,
          "4": 4,
          "5": 4
        },
        "max_durability": {
          "1": 330,
          "2": 330,
          "3": 330,
          "4": 330,
          "5": 330
        },
        "penetrating_damage": {
          "1": 83,
          "2": 91,
          "3": 99,
          "4": 108,
          "5": 116
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
      "subcategory": "shotgun",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive",
        "shotgun"
      ],
      "throwing_item": null,
      "tier": 7,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_05"
        ],
        "hit_sounds": [
          "wls_rifle_05"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Shotgun_M1897_Lunar",
        "prefab_pbr_id": "@Shotgun_M1897_Lunar",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_lunar_shotgun_7_rare",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.25,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.8,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": 2.5,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "image_key": "bf5e960bdef4f9f82aa0c8fc9494b6b25d6bddc4b3cfc1186206b9538776e403",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "火焰 霰弹枪",
        "name_en": "Flame shotgun",
        "description_zh": "一发子弹像一群火热的马将打击你的敌人",
        "description_en": "A shot like a herd of fiery horses will strike your enemies",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_lunar_shotgun_7_rare 火焰 霰弹枪 flame shotgun 一发子弹像一群火热的马将打击你的敌人 a shot like a herd of fiery horses will strike your enemies weapon 武器 shotgun weapon weapon_storage quick festive shotgun wls2_weapon_lunar_shotgun_7_rare"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 2850,
            "unit": "",
            "display": "2850"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.8,
            "unit": "次/秒",
            "display": "0.8 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 330,
            "unit": "",
            "display": "330"
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
            "key": "dot_time",
            "label": "持续伤害时间",
            "value": 4,
            "unit": "秒",
            "display": "4 秒"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.25,
            "unit": "秒",
            "display": "1.25 秒"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 2850,
              "dot_amount": 285,
              "penetrating_damage": 83
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "2850",
              "dot_amount": "285",
              "penetrating_damage": "83"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 3150,
              "dot_amount": 315,
              "penetrating_damage": 91
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "3150",
              "dot_amount": "315",
              "penetrating_damage": "91"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 3400,
              "dot_amount": 340,
              "penetrating_damage": 99
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "3400",
              "dot_amount": "340",
              "penetrating_damage": "99"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 3700,
              "dot_amount": 370,
              "penetrating_damage": 108
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "3700",
              "dot_amount": "370",
              "penetrating_damage": "108"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 3950,
              "dot_amount": 400,
              "penetrating_damage": 116
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "3950",
              "dot_amount": "400",
              "penetrating_damage": "116"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 3951,
              "dot_amount": 400,
              "penetrating_damage": 116
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "3951",
              "dot_amount": "400",
              "penetrating_damage": "116"
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
          "伤害：6 级起每级增加 1，最高 4950。",
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
        "description": "inventory_stack_view_wls_wooden_spear_description",
        "full_description": "inventory_stack_view_wls_wooden_spear_description",
        "name": "inventory_stack_view_wls_wooden_spear_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_spear_saber",
        "sprite": "UI_WW_AlphaBinary05/wls_wooden_spear",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "club"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_fast_0"
      },
      "item_id": "wls2_weapon_melee_fast_0",
      "localization": {
        "description_key": "inventory_stack_view_wls_wooden_spear_description",
        "en": {
          "description": "You can make a nice spear from a stick. ",
          "full_description": "You can make a nice spear from a stick. ",
          "name": "Wooden spear"
        },
        "full_description_key": "inventory_stack_view_wls_wooden_spear_description",
        "name_key": "inventory_stack_view_wls_wooden_spear_name",
        "zh": {
          "description": "你可以用木棒制作一支不错的长矛。",
          "full_description": "你可以用木棒制作一支不错的长矛。",
          "name": "木制长矛"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_wood_1": 4
          },
          "type": "simple"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_primary_wood_1": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_melee_fast_0"
              },
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_melee_fast_0_carpentry"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls_wooden_spear",
      "stat_curves": {
        "damage": {
          "1": 20,
          "2": 22,
          "3": 24,
          "4": 26,
          "5": 28,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 40,
          "2": 40,
          "3": 40,
          "4": 40,
          "5": 40
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
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "spear_saber",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "club"
      ],
      "throwing_item": null,
      "tier": 1,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 1.7,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_bone_spear_empty_hit"
        ],
        "hit_sounds": [
          "wls_bone_spear"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Spear_Wood",
        "prefab_pbr_id": "@Spear_Wood_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_melee_fast_0",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 1.7,
        "attacks_per_second_inferred": 0.8333333333333334,
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
      "image_key": "03a77094c972335f238474f66334e10fbd60fb1270ec62fadedf3d515359814a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "木制长矛",
        "name_en": "Wooden spear",
        "description_zh": "你可以用木棒制作一支不错的长矛。",
        "description_en": "You can make a nice spear from a stick. ",
        "category_zh": "武器",
        "subcategory": "spear_saber",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_fast_0 木制长矛 wooden spear 你可以用木棒制作一支不错的长矛。 you can make a nice spear from a stick.  weapon 武器 spear_saber weapon weapon_storage quick club wls2_weapon_melee_fast_0"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 20,
            "unit": "",
            "display": "20"
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
            "value": 40,
            "unit": "",
            "display": "40"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.7,
            "unit": "",
            "display": "1.7"
          }
        ],
        "fixed": [
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
              "damage": 20
            },
            "display": {
              "damage": "20"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 22
            },
            "display": {
              "damage": "22"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 24
            },
            "display": {
              "damage": "24"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 26
            },
            "display": {
              "damage": "26"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 28
            },
            "display": {
              "damage": "28"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 29
            },
            "display": {
              "damage": "29"
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
        "notes": [
          "伤害：6 级起每级增加 1，最高 1028。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls_stone_knife_description",
        "full_description": "inventory_stack_view_wls_stone_knife_description",
        "name": "inventory_stack_view_wls_stone_knife_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW/wls_stone_knife",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_fast_1"
      },
      "item_id": "wls2_weapon_melee_fast_1",
      "localization": {
        "description_key": "inventory_stack_view_wls_stone_knife_description",
        "en": {
          "description": "A small piece of hewn stone in the right hands turns into a weapon",
          "full_description": "A small piece of hewn stone in the right hands turns into a weapon",
          "name": "Stone knife"
        },
        "full_description_key": "inventory_stack_view_wls_stone_knife_description",
        "name_key": "inventory_stack_view_wls_stone_knife_name",
        "zh": {
          "description": "只要用的人对，一小块凿石也能变成一件武器",
          "full_description": "只要用的人对，一小块凿石也能变成一件武器",
          "name": "石刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_stone_1": 3,
            "wls2_resourse_primary_wood_1": 2
          },
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW/wls_stone_knife",
      "stat_curves": {
        "damage": {
          "1": 30,
          "2": 33,
          "3": 36,
          "4": 39,
          "5": 42,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 40,
          "2": 40,
          "3": 40,
          "4": 40,
          "5": 40
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
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.4,
        "attack_ending_time": 0.4,
        "attack_range": 1,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_Stone",
        "prefab_pbr_id": "@Knife_Stone_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_melee_fast_1",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.4,
        "attack_ending_time": 0.4,
        "attack_range": 1,
        "attacks_per_second_inferred": 1.25,
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
      "image_key": "6cd02f7119829d025e635b83d5a94be055ce83d23ef89e13f26ae1f06c7aa172",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "石刀",
        "name_en": "Stone knife",
        "description_zh": "只要用的人对，一小块凿石也能变成一件武器",
        "description_en": "A small piece of hewn stone in the right hands turns into a weapon",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_fast_1 石刀 stone knife 只要用的人对，一小块凿石也能变成一件武器 a small piece of hewn stone in the right hands turns into a weapon weapon 武器 knife weapon weapon_storage quick wls2_weapon_melee_fast_1"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 30,
            "unit": "",
            "display": "30"
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
            "value": 40,
            "unit": "",
            "display": "40"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1,
            "unit": "",
            "display": "1"
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
              "damage": 30
            },
            "display": {
              "damage": "30"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 33
            },
            "display": {
              "damage": "33"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 36
            },
            "display": {
              "damage": "36"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 39
            },
            "display": {
              "damage": "39"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 42
            },
            "display": {
              "damage": "42"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 43
            },
            "display": {
              "damage": "43"
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
        "notes": [
          "伤害：6 级起每级增加 1，最高 1042。",
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": true,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_bound_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "can_not_be_dropped": true,
        "description": "inventory_stack_view_wls2_weapon_melee_fast_2_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_fast_2_description",
        "name": "inventory_stack_view_wls2_weapon_melee_fast_2_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/Wls_ear",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_fast_2"
      },
      "item_id": "wls2_weapon_melee_fast_2",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_fast_2_description",
        "en": {
          "description": "A simple copper knife is better than a stone one. It will help fend off wild beasts and bandits",
          "full_description": "A simple copper knife is better than a stone one. It will help fend off wild beasts and bandits",
          "name": "Copper knife"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_fast_2_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_fast_2_name",
        "zh": {
          "description": "简单的铜刀。 它比石头好。 它将有助于抵御野兽和土匪。",
          "full_description": "简单的铜刀。 它比石头好。 它将有助于抵御野兽和土匪。",
          "name": "铜刀"
        }
      },
      "official_inclusion_status": "special_bound_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "stat_curves": {
        "max_durability": {
          "default": 30
        }
      },
      "stat_labels": {
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "other_weapon",
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
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1,
        "damage": 45,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_Copper",
        "prefab_pbr_id": "@Knife_Copper_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm"
        ]
      },
      "weapon_id": "wls2_weapon_melee_fast_2",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1,
        "attacks_per_second_inferred": 1.25,
        "damage": 45,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm"
        ]
      },
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "铜刀",
        "name_en": "Copper knife",
        "description_zh": "简单的铜刀。 它比石头好。 它将有助于抵御野兽和土匪。",
        "description_en": "A simple copper knife is better than a stone one. It will help fend off wild beasts and bandits",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "未标注",
        "search_text": "wls2_weapon_melee_fast_2 铜刀 copper knife 简单的铜刀。 它比石头好。 它将有助于抵御野兽和土匪。 a simple copper knife is better than a stone one. it will help fend off wild beasts and bandits weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_melee_fast_2"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 45,
            "unit": "",
            "display": "45"
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
            "value": 30,
            "unit": "",
            "display": "30"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1,
            "unit": "",
            "display": "1"
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
        "levels": [],
        "columns": [],
        "notes": [
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
        ],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": true,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_bound_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "can_not_be_dropped": true,
        "description": "inventory_stack_view_wls_bowie_knife_description",
        "full_description": "inventory_stack_view_wls_bowie_knife_description",
        "name": "inventory_stack_view_wls_bowie_knife_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/Wls_ear",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_fast_3"
      },
      "item_id": "wls2_weapon_melee_fast_3",
      "localization": {
        "description_key": "inventory_stack_view_wls_bowie_knife_description",
        "en": {
          "description": "Best knife that a Wild West resident can afford",
          "full_description": "Best knife that a Wild West resident can afford",
          "name": "Bowie knife"
        },
        "full_description_key": "inventory_stack_view_wls_bowie_knife_description",
        "name_key": "inventory_stack_view_wls_bowie_knife_name",
        "zh": {
          "description": "狂野西部居民能够买得起的最好的刀刃。",
          "full_description": "狂野西部居民能够买得起的最好的刀刃。",
          "name": "博伊刀"
        }
      },
      "official_inclusion_status": "special_bound_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "stat_curves": {
        "max_durability": {
          "default": 68
        }
      },
      "stat_labels": {
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "other_weapon",
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
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1,
        "damage": 154,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_Bowie",
        "prefab_pbr_id": "@Knife_Bowie_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm"
        ]
      },
      "weapon_id": "wls2_weapon_melee_fast_3",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1,
        "attacks_per_second_inferred": 1.25,
        "damage": 154,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm"
        ]
      },
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "博伊刀",
        "name_en": "Bowie knife",
        "description_zh": "狂野西部居民能够买得起的最好的刀刃。",
        "description_en": "Best knife that a Wild West resident can afford",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "未标注",
        "search_text": "wls2_weapon_melee_fast_3 博伊刀 bowie knife 狂野西部居民能够买得起的最好的刀刃。 best knife that a wild west resident can afford weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_melee_fast_3"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 154,
            "unit": "",
            "display": "154"
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
            "value": 68,
            "unit": "",
            "display": "68"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1,
            "unit": "",
            "display": "1"
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
        "levels": [],
        "columns": [],
        "notes": [
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
        ],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": true,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_bound_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "can_not_be_dropped": true,
        "description": "inventory_stack_view_wls_machete_description",
        "full_description": "inventory_stack_view_wls_machete_description",
        "name": "inventory_stack_view_wls_machete_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/Wls_ear",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_fast_4"
      },
      "item_id": "wls2_weapon_melee_fast_4",
      "localization": {
        "description_key": "inventory_stack_view_wls_machete_description",
        "en": {
          "description": "Long, wide blade, perfect for a fight with the enemy",
          "full_description": "Long, wide blade, perfect for a fight with the enemy",
          "name": "Machete"
        },
        "full_description_key": "inventory_stack_view_wls_machete_description",
        "name_key": "inventory_stack_view_wls_machete_name",
        "zh": {
          "description": "宽长的刀刃非常适合战斗。",
          "full_description": "宽长的刀刃非常适合战斗。",
          "name": "砍刀"
        }
      },
      "official_inclusion_status": "special_bound_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "stat_curves": {
        "max_durability": {
          "default": 101
        },
        "penetrating_damage": {
          "default": 8
        }
      },
      "stat_labels": {
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
      "subcategory": "other_weapon",
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
        "attack_ending_time": 0.3,
        "attack_range": 1,
        "damage": 275,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_Machete",
        "prefab_pbr_id": "@Knife_Machete_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm"
        ]
      },
      "weapon_id": "wls2_weapon_melee_fast_4",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.3,
        "attack_range": 1,
        "attacks_per_second_inferred": 1.25,
        "damage": 275,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm"
        ]
      },
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "砍刀",
        "name_en": "Machete",
        "description_zh": "宽长的刀刃非常适合战斗。",
        "description_en": "Long, wide blade, perfect for a fight with the enemy",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "未标注",
        "search_text": "wls2_weapon_melee_fast_4 砍刀 machete 宽长的刀刃非常适合战斗。 long, wide blade, perfect for a fight with the enemy weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_melee_fast_4"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 275,
            "unit": "",
            "display": "275"
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
            "value": 101,
            "unit": "",
            "display": "101"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "fixed": [
          {
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "value": 8,
            "unit": "",
            "display": "8"
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
        "levels": [],
        "columns": [],
        "notes": [
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
        ],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": true,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_bound_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "can_not_be_dropped": true,
        "description": "inventory_stack_view_wls_sword_bayonet_description",
        "full_description": "inventory_stack_view_wls_sword_bayonet_description",
        "name": "inventory_stack_view_wls_sword_bayonet_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/Wls_ear",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_fast_5"
      },
      "item_id": "wls2_weapon_melee_fast_5",
      "localization": {
        "description_key": "inventory_stack_view_wls_sword_bayonet_description",
        "en": {
          "description": "Detached from a rifle this is still a great weapon",
          "full_description": "Detached from a rifle this is still a great weapon",
          "name": "Bayonet knife"
        },
        "full_description_key": "inventory_stack_view_wls_sword_bayonet_description",
        "name_key": "inventory_stack_view_wls_sword_bayonet_name",
        "zh": {
          "description": "即使跟步枪分开了，依然是一个很棒的武器。",
          "full_description": "即使跟步枪分开了，依然是一个很棒的武器。",
          "name": "刺刀"
        }
      },
      "official_inclusion_status": "special_bound_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "stat_curves": {
        "max_durability": {
          "default": 152
        },
        "penetrating_damage": {
          "default": 25
        }
      },
      "stat_labels": {
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
      "subcategory": "other_weapon",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick"
      ],
      "throwing_item": null,
      "tier": 5,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.4,
        "attack_ending_time": 0.4,
        "attack_range": 1.3,
        "damage": 495,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_Bayonet",
        "prefab_pbr_id": "@Knife_Bayonet_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm"
        ]
      },
      "weapon_id": "wls2_weapon_melee_fast_5",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.4,
        "attack_ending_time": 0.4,
        "attack_range": 1.3,
        "attacks_per_second_inferred": 1.25,
        "damage": 495,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm"
        ]
      },
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "刺刀",
        "name_en": "Bayonet knife",
        "description_zh": "即使跟步枪分开了，依然是一个很棒的武器。",
        "description_en": "Detached from a rifle this is still a great weapon",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "未标注",
        "search_text": "wls2_weapon_melee_fast_5 刺刀 bayonet knife 即使跟步枪分开了，依然是一个很棒的武器。 detached from a rifle this is still a great weapon weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_melee_fast_5"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 495,
            "unit": "",
            "display": "495"
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
            "value": 152,
            "unit": "",
            "display": "152"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.3,
            "unit": "",
            "display": "1.3"
          }
        ],
        "fixed": [
          {
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "value": 25,
            "unit": "",
            "display": "25"
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
        "levels": [],
        "columns": [],
        "notes": [
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
        ],
        "level_label": "装备等级",
        "default_level": null
      }
    },
    {
      "audit": {
        "avatar_referenced": false,
        "can_not_be_dropped": true,
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "special_bound_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "can_not_be_dropped": true,
        "description": "inventory_stack_view_wls2_weapon_melee_fast_dagger_2_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_fast_dagger_2_description",
        "name": "inventory_stack_view_wls2_weapon_melee_fast_dagger_2_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/Wls_ear",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_fast_dagger_2"
      },
      "item_id": "wls2_weapon_melee_fast_dagger_2",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_fast_dagger_2_description",
        "en": {
          "description": "Excellent dagger",
          "full_description": "Excellent dagger",
          "name": "Bronze dagger"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_fast_dagger_2_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_fast_dagger_2_name",
        "zh": {
          "description": "优秀的匕首",
          "full_description": "优秀的匕首",
          "name": "青铜匕首"
        }
      },
      "official_inclusion_status": "special_bound_legacy",
      "rarity": null,
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "stat_curves": {
        "max_durability": {
          "default": 45
        }
      },
      "stat_labels": {
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "other_weapon",
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
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1,
        "damage": 80,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_Bronze",
        "prefab_pbr_id": "@Knife_Bronze_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm"
        ]
      },
      "weapon_id": "wls2_weapon_melee_fast_dagger_2",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1,
        "attacks_per_second_inferred": 1.25,
        "damage": 80,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm"
        ]
      },
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "青铜匕首",
        "name_en": "Bronze dagger",
        "description_zh": "优秀的匕首",
        "description_en": "Excellent dagger",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "未标注",
        "search_text": "wls2_weapon_melee_fast_dagger_2 青铜匕首 bronze dagger 优秀的匕首 excellent dagger weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_melee_fast_dagger_2"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 80,
            "unit": "",
            "display": "80"
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
            "value": 45,
            "unit": "",
            "display": "45"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1,
            "unit": "",
            "display": "1"
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
        "levels": [],
        "columns": [],
        "notes": [
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
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
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_hammer_1_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_hammer_1_common_description",
        "name": "inventory_stack_view_wls2_weapon_melee_hammer_1_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_mace_mallet",
        "sprite": "UI_WW_AlphaBinary05/Weapon_melee_slow_1",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "club"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_hammer_1_common"
      },
      "item_id": "wls2_weapon_melee_hammer_1_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_hammer_1_common_description",
        "en": {
          "description": "Slow and heavy, but the blow is crushing",
          "full_description": "Slow and heavy, but the blow is crushing",
          "name": "Stone hammer"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_hammer_1_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_hammer_1_common_name",
        "zh": {
          "description": "缓慢而沉重，但杀伤力十足",
          "full_description": "缓慢而沉重，但杀伤力十足",
          "name": "石锤"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_leather_1": 2,
            "wls2_resourse_secondary_plank_1": 2,
            "wls2_resourse_secondary_stoneblock_1": 2
          },
          "learn_exp": 100,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/Weapon_melee_slow_1",
      "stat_curves": {
        "damage": {
          "1": 89,
          "2": 98,
          "3": 107,
          "4": 116,
          "5": 125,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 40,
          "2": 40,
          "3": 40,
          "4": 40,
          "5": 40
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
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "mace_mallet",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "club"
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
      "weapon": {
        "attack_action": {
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_club_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Hammer_Stone",
        "prefab_pbr_id": "@Hammer_Stone_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_weapon_melee_hammer_1_common",
      "weapon_summary": {
        "attack_action": {
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.7,
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 0.5882352941176471,
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
      "image_key": "e337586e615a0b47321d2c2fc92ef2b67db4d09fc08f3c50df6a67854c674bf9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "石锤",
        "name_en": "Stone hammer",
        "description_zh": "缓慢而沉重，但杀伤力十足",
        "description_en": "Slow and heavy, but the blow is crushing",
        "category_zh": "武器",
        "subcategory": "mace_mallet",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_hammer_1_common 石锤 stone hammer 缓慢而沉重，但杀伤力十足 slow and heavy, but the blow is crushing weapon 武器 mace_mallet weapon weapon_storage quick club wls2_weapon_melee_hammer_1_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 89,
            "unit": "",
            "display": "89"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.5882352941176471,
            "unit": "次/秒",
            "display": "0.59 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 40,
            "unit": "",
            "display": "40"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.7,
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
              "damage": 89
            },
            "display": {
              "damage": "89"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 98
            },
            "display": {
              "damage": "98"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 107
            },
            "display": {
              "damage": "107"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 116
            },
            "display": {
              "damage": "116"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 125
            },
            "display": {
              "damage": "125"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 126
            },
            "display": {
              "damage": "126"
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
        "notes": [
          "伤害：6 级起每级增加 1，最高 1125。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_hammer_1_rare_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_hammer_1_rare_description",
        "name": "inventory_stack_view_wls2_weapon_melee_hammer_1_rare_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_melee_hammer_1_rare_name_with_wrapping",
        "rarity": "rare",
        "sorting_group_id": "weapon_melee_mace_mallet",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_hammer_1_rare_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "club"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_hammer_1_rare"
      },
      "item_id": "wls2_weapon_melee_hammer_1_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_hammer_1_rare_description",
        "en": {
          "description": "At once elegant and deadly",
          "full_description": "At once elegant and deadly",
          "name": "Spiked club"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_hammer_1_rare_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_hammer_1_rare_name",
        "zh": {
          "description": "优雅且致命",
          "full_description": "优雅且致命",
          "name": "狼牙棒"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_leather_1": 4,
            "wls2_resourse_secondary_plank_1": 4
          },
          "learn_exp": 200,
          "min_level": 0,
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_hammer_1_rare_icon",
      "stat_curves": {
        "critical_modifier": {
          "1": 0.25,
          "2": 0.5,
          "3": 0.75,
          "4": 1,
          "5": 1.5
        },
        "damage": {
          "1": 123,
          "2": 135,
          "3": 147,
          "4": 160,
          "5": 172,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 40,
          "2": 40,
          "3": 40,
          "4": 40,
          "5": 40
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
      "subcategory": "mace_mallet",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "club"
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
          "coin_id": "spend_coin_soft_15"
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
          "coin_id": "spend_coin_soft_25"
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
      "weapon": {
        "attack_action": {
          "angle": 90,
          "radius": 2,
          "type": "cone"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.7,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_club_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Club_Indian",
        "prefab_pbr_id": "@Club_Indian_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_weapon_melee_hammer_1_rare",
      "weapon_summary": {
        "attack_action": {
          "angle": 90,
          "radius": 2,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.7,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 0.8333333333333334,
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
      "image_key": "ffa9b8d5884801edebfa41594eaa3e05f43e1e00e1f1d83b4d5fafad054c565e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "狼牙棒",
        "name_en": "Spiked club",
        "description_zh": "优雅且致命",
        "description_en": "At once elegant and deadly",
        "category_zh": "武器",
        "subcategory": "mace_mallet",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_melee_hammer_1_rare 狼牙棒 spiked club 优雅且致命 at once elegant and deadly weapon 武器 mace_mallet weapon weapon_storage quick club wls2_weapon_melee_hammer_1_rare"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 123,
            "unit": "",
            "display": "123"
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
            "value": 40,
            "unit": "",
            "display": "40"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
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
          },
          {
            "key": "attack_angle",
            "label": "攻击扇面",
            "value": 90,
            "unit": "°",
            "display": "90°"
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
              "critical_modifier": 0.25,
              "damage": 123
            },
            "display": {
              "critical_modifier": "25%",
              "damage": "123"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_modifier": 0.5,
              "damage": 135
            },
            "display": {
              "critical_modifier": "50%",
              "damage": "135"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_modifier": 0.75,
              "damage": 147
            },
            "display": {
              "critical_modifier": "75%",
              "damage": "147"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_modifier": 1,
              "damage": 160
            },
            "display": {
              "critical_modifier": "100%",
              "damage": "160"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_modifier": 1.5,
              "damage": 172
            },
            "display": {
              "critical_modifier": "150%",
              "damage": "172"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_modifier": 1.5,
              "damage": 173
            },
            "display": {
              "critical_modifier": "150%",
              "damage": "173"
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
          "伤害：6 级起每级增加 1，最高 1172。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_hammer_2_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_hammer_2_common_description",
        "name": "inventory_stack_view_wls2_weapon_melee_hammer_2_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_melee_hammer_2_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_mace_mallet",
        "sprite": "UI_WW_AlphaBinary05/Weapon_melee_slow_2",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "club"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_hammer_2_common"
      },
      "item_id": "wls2_weapon_melee_hammer_2_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_hammer_2_common_description",
        "en": {
          "description": "Beats off any desire to deal with the owner of this hammer",
          "full_description": "Beats off any desire to deal with the owner of this hammer",
          "name": "Bronze hammer"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_hammer_2_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_hammer_2_common_name",
        "zh": {
          "description": "打败任何与这把锤子的主人打交道的欲望",
          "full_description": "打败任何与这把锤子的主人打交道的欲望",
          "name": "青铜锤"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_1": 3,
            "wls2_resourse_secondary_ingot_2": 2,
            "wls2_resourse_secondary_leather_2": 2,
            "wls2_resourse_secondary_plank_2": 2
          },
          "learn_exp": 200,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_melee_hammer_2_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_50coins_dynamic_town_trader_offer_slow_2"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/Weapon_melee_slow_2",
      "stat_curves": {
        "damage": {
          "1": 143,
          "2": 157,
          "3": 171,
          "4": 186,
          "5": 200,
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
      "subcategory": "mace_mallet",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "club"
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
      "weapon": {
        "attack_action": {
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_club_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Hammer_Bronze",
        "prefab_pbr_id": "@Hammer_Bronze_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_weapon_melee_hammer_2_common",
      "weapon_summary": {
        "attack_action": {
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.7,
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 0.5882352941176471,
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
      "image_key": "b7dcc42454f4199e36ca923926d4b89562116ffb7438ecd33071712da8ebbc29",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "青铜锤",
        "name_en": "Bronze hammer",
        "description_zh": "打败任何与这把锤子的主人打交道的欲望",
        "description_en": "Beats off any desire to deal with the owner of this hammer",
        "category_zh": "武器",
        "subcategory": "mace_mallet",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_hammer_2_common 青铜锤 bronze hammer 打败任何与这把锤子的主人打交道的欲望 beats off any desire to deal with the owner of this hammer weapon 武器 mace_mallet weapon weapon_storage quick club wls2_weapon_melee_hammer_2_common"
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
            "value": 0.5882352941176471,
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
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.7,
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
              "damage": 143
            },
            "display": {
              "damage": "143"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 157
            },
            "display": {
              "damage": "157"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 171
            },
            "display": {
              "damage": "171"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 186
            },
            "display": {
              "damage": "186"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 200
            },
            "display": {
              "damage": "200"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 201
            },
            "display": {
              "damage": "201"
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
        "notes": [
          "伤害：6 级起每级增加 1，最高 1200。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_hammer_2_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_hammer_2_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_melee_hammer_2_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_melee_hammer_2_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_melee_mace_mallet",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_hammer_2_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "club"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_hammer_2_uncommon"
      },
      "item_id": "wls2_weapon_melee_hammer_2_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_hammer_2_uncommon_description",
        "en": {
          "description": "Knocks enemies away and to the ground",
          "full_description": "Knocks enemies away and to the ground",
          "name": "Two-handed hammer"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_hammer_2_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_hammer_2_uncommon_name",
        "zh": {
          "description": "将敌人轰飞或是击倒",
          "full_description": "将敌人轰飞或是击倒",
          "name": "双头锤"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_1": 3,
            "wls2_resourse_secondary_ingot_2": 3,
            "wls2_resourse_secondary_leather_2": 3
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
                "inventory_stack_id": "wls2_weapon_melee_hammer_2_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_75coins_dynamic_town_trader_offer_hammer_2_uncommon"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_hammer_2_uncommon_icon",
      "stat_curves": {
        "damage": {
          "1": 197,
          "2": 217,
          "3": 236,
          "4": 256,
          "5": 276,
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
      "subcategory": "mace_mallet",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "club"
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
      "weapon": {
        "attack_action": {
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_club_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Hammer_Two_Handed",
        "prefab_pbr_id": "@Hammer_Two_Handed_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_weapon_melee_hammer_2_uncommon",
      "weapon_summary": {
        "attack_action": {
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.7,
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 0.5882352941176471,
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
      "image_key": "921daba77b600bc187a76b877f1cfefd52400998e82e90e0e34b25a2b0e7de37",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "双头锤",
        "name_en": "Two-handed hammer",
        "description_zh": "将敌人轰飞或是击倒",
        "description_en": "Knocks enemies away and to the ground",
        "category_zh": "武器",
        "subcategory": "mace_mallet",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_melee_hammer_2_uncommon 双头锤 two-handed hammer 将敌人轰飞或是击倒 knocks enemies away and to the ground weapon 武器 mace_mallet weapon weapon_storage quick club wls2_weapon_melee_hammer_2_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 197,
            "unit": "",
            "display": "197"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.5882352941176471,
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
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.7,
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
              "damage": 197
            },
            "display": {
              "damage": "197"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 217
            },
            "display": {
              "damage": "217"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 236
            },
            "display": {
              "damage": "236"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 256
            },
            "display": {
              "damage": "256"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 276
            },
            "display": {
              "damage": "276"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 277
            },
            "display": {
              "damage": "277"
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
        "notes": [
          "伤害：6 级起每级增加 1，最高 1276。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_hammer_3_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_hammer_3_common_description",
        "name": "inventory_stack_view_wls2_weapon_melee_hammer_3_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_mace_mallet",
        "sprite": "UI_WW_AlphaBinary05/Weapon_melee_slow_3",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "club"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_hammer_3_common"
      },
      "item_id": "wls2_weapon_melee_hammer_3_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_hammer_3_common_description",
        "en": {
          "description": "Thor might envy the owner of this hammer",
          "full_description": "Thor might envy the owner of this hammer",
          "name": "Iron hammer"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_hammer_3_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_hammer_3_common_name",
        "zh": {
          "description": "连雷神都会羡慕这把锤子的主人",
          "full_description": "连雷神都会羡慕这把锤子的主人",
          "name": "铁锤"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_2": 3,
            "wls2_resourse_secondary_ingot_3": 2,
            "wls2_resourse_secondary_leather_3": 2,
            "wls2_resourse_secondary_plank_3": 2
          },
          "learn_exp": 400,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_melee_hammer_3_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_100coins_dynamic_town_trader_offer_slow_3"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/Weapon_melee_slow_3",
      "stat_curves": {
        "damage": {
          "1": 251,
          "2": 276,
          "3": 301,
          "4": 327,
          "5": 352,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 80,
          "2": 80,
          "3": 80,
          "4": 80,
          "5": 80
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
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "mace_mallet",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "club"
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
      "weapon": {
        "attack_action": {
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_club_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Hammer_Iron",
        "prefab_pbr_id": "@Hammer_Iron_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_weapon_melee_hammer_3_common",
      "weapon_summary": {
        "attack_action": {
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.7,
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 0.5882352941176471,
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
      "image_key": "a087488265c4d09d3e13548e77c250b5ef682ebcb870c208e28c9fd544557de2",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "铁锤",
        "name_en": "Iron hammer",
        "description_zh": "连雷神都会羡慕这把锤子的主人",
        "description_en": "Thor might envy the owner of this hammer",
        "category_zh": "武器",
        "subcategory": "mace_mallet",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_hammer_3_common 铁锤 iron hammer 连雷神都会羡慕这把锤子的主人 thor might envy the owner of this hammer weapon 武器 mace_mallet weapon weapon_storage quick club wls2_weapon_melee_hammer_3_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 251,
            "unit": "",
            "display": "251"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.5882352941176471,
            "unit": "次/秒",
            "display": "0.59 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 80,
            "unit": "",
            "display": "80"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.7,
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
              "damage": 251
            },
            "display": {
              "damage": "251"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 276
            },
            "display": {
              "damage": "276"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 301
            },
            "display": {
              "damage": "301"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 327
            },
            "display": {
              "damage": "327"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 352
            },
            "display": {
              "damage": "352"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 353
            },
            "display": {
              "damage": "353"
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
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_hammer_3_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_hammer_3_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_melee_hammer_3_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_melee_hammer_3_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_melee_mace_mallet",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_hammer_3_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "club"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_hammer_3_uncommon"
      },
      "item_id": "wls2_weapon_melee_hammer_3_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_hammer_3_uncommon_description",
        "en": {
          "description": "The heavy hammerhead can crush the strongest armor",
          "full_description": "The heavy hammerhead can crush the strongest armor",
          "name": "War hammer"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_hammer_3_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_hammer_3_uncommon_name",
        "zh": {
          "description": "沉重的锤头能够粉碎任何护甲",
          "full_description": "沉重的锤头能够粉碎任何护甲",
          "name": "战锤"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_2": 3,
            "wls2_resourse_secondary_ingot_3": 3,
            "wls2_resourse_secondary_leather_3": 3
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
                "inventory_stack_id": "wls2_weapon_melee_hammer_3_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_150coins_dynamic_town_trader_offer_hammer_3_uncommon"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_hammer_3_uncommon_icon",
      "stat_curves": {
        "damage": {
          "1": 347,
          "2": 382,
          "3": 416,
          "4": 451,
          "5": 485,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 80,
          "2": 80,
          "3": 80,
          "4": 80,
          "5": 80
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
        "max_durability": {
          "definition": {},
          "display_key": null,
          "en": null,
          "zh": null
        }
      },
      "subcategory": "mace_mallet",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "club"
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
          "coin_id": "spend_coin_soft_35"
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
      "weapon": {
        "attack_action": {
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_club_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Hammer_Clevetc",
        "prefab_pbr_id": "@Hammer_Clevetc_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_weapon_melee_hammer_3_uncommon",
      "weapon_summary": {
        "attack_action": {
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.7,
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 0.5882352941176471,
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
      "image_key": "05b676bbacba3bd81bad57352a57535d7ced87c7bd934468eb7656f892bc7b85",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "战锤",
        "name_en": "War hammer",
        "description_zh": "沉重的锤头能够粉碎任何护甲",
        "description_en": "The heavy hammerhead can crush the strongest armor",
        "category_zh": "武器",
        "subcategory": "mace_mallet",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_melee_hammer_3_uncommon 战锤 war hammer 沉重的锤头能够粉碎任何护甲 the heavy hammerhead can crush the strongest armor weapon 武器 mace_mallet weapon weapon_storage quick club wls2_weapon_melee_hammer_3_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 347,
            "unit": "",
            "display": "347"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.5882352941176471,
            "unit": "次/秒",
            "display": "0.59 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 80,
            "unit": "",
            "display": "80"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.7,
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
              "damage": 347
            },
            "display": {
              "damage": "347"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 382
            },
            "display": {
              "damage": "382"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 416
            },
            "display": {
              "damage": "416"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 451
            },
            "display": {
              "damage": "451"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 485
            },
            "display": {
              "damage": "485"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 486
            },
            "display": {
              "damage": "486"
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
        "notes": [
          "伤害：6 级起每级增加 1，最高 1485。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_knife_1_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_knife_1_common_description",
        "name": "inventory_stack_view_wls2_weapon_melee_knife_1_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_fast_2",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_1_common"
      },
      "item_id": "wls2_weapon_melee_knife_1_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_knife_1_common_description",
        "en": {
          "description": "Simple copper knife, but still better than stone",
          "full_description": "Simple copper knife, but still better than stone",
          "name": "Copper knife"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_knife_1_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_1_common_name",
        "zh": {
          "description": "普通的铜匕首，但总比石头好使",
          "full_description": "普通的铜匕首，但总比石头好使",
          "name": "铜刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_1": 1,
            "wls2_resourse_secondary_ingot_1": 1,
            "wls2_resourse_secondary_leather_1": 2
          },
          "learn_exp": 100,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_fast_2",
      "stat_curves": {
        "damage": {
          "1": 36,
          "2": 40,
          "3": 43,
          "4": 47,
          "5": 50,
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
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_Copper",
        "prefab_pbr_id": "@Knife_Copper_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_1_common",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "5925741989313421ea1a90b33372094759b97ae1118dece9b22dddf9492d1ace",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "铜刀",
        "name_en": "Copper knife",
        "description_zh": "普通的铜匕首，但总比石头好使",
        "description_en": "Simple copper knife, but still better than stone",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_knife_1_common 铜刀 copper knife 普通的铜匕首，但总比石头好使 simple copper knife, but still better than stone weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_1_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 36,
            "unit": "",
            "display": "36"
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
            "value": 60,
            "unit": "",
            "display": "60"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
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
              "damage": 36
            },
            "display": {
              "damage": "36"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 40
            },
            "display": {
              "damage": "40"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 43
            },
            "display": {
              "damage": "43"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 47
            },
            "display": {
              "damage": "47"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 50
            },
            "display": {
              "damage": "50"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 51
            },
            "display": {
              "damage": "51"
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
        "notes": [
          "伤害：6 级起每级增加 1，最高 1050。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_knife_2_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_knife_2_common_description",
        "name": "inventory_stack_view_wls2_weapon_melee_knife_2_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_fast_3",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_2_common"
      },
      "item_id": "wls2_weapon_melee_knife_2_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_knife_2_common_description",
        "en": {
          "description": "Excellent dagger for self defense",
          "full_description": "Excellent dagger for self defense",
          "name": "Bronze dagger"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_knife_2_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_2_common_name",
        "zh": {
          "description": "极其适合自卫的匕首",
          "full_description": "极其适合自卫的匕首",
          "name": "青铜匕首"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_1": 2,
            "wls2_resourse_secondary_ingot_2": 1,
            "wls2_resourse_secondary_leather_2": 2
          },
          "learn_exp": 200,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_melee_knife_2_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_50coins_dynamic_town_trader_offer_dagger_2"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_fast_3",
      "stat_curves": {
        "damage": {
          "1": 67,
          "2": 74,
          "3": 81,
          "4": 87,
          "5": 94,
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
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_Bronze",
        "prefab_pbr_id": "@Knife_Bronze_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_2_common",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "44d20ff2f27e1297af6795532488de9459d6e826425d576a367b35c02011a3f0",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "青铜匕首",
        "name_en": "Bronze dagger",
        "description_zh": "极其适合自卫的匕首",
        "description_en": "Excellent dagger for self defense",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_knife_2_common 青铜匕首 bronze dagger 极其适合自卫的匕首 excellent dagger for self defense weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_2_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 67,
            "unit": "",
            "display": "67"
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
            "value": 60,
            "unit": "",
            "display": "60"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
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
              "damage": 67
            },
            "display": {
              "damage": "67"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 74
            },
            "display": {
              "damage": "74"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 81
            },
            "display": {
              "damage": "81"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 87
            },
            "display": {
              "damage": "87"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 94
            },
            "display": {
              "damage": "94"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 95
            },
            "display": {
              "damage": "95"
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
        "notes": [
          "伤害：6 级起每级增加 1，最高 1094。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_knife_2_rare_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_knife_2_rare_description",
        "name": "inventory_stack_view_wls2_weapon_melee_knife_2_rare_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_melee_knife_2_rare_name_with_wrapping",
        "rarity": "rare",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_knife_2_rare_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_2_rare"
      },
      "item_id": "wls2_weapon_melee_knife_2_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_knife_2_rare_description",
        "en": {
          "description": "The most famous Green River knife",
          "full_description": "The most famous Green River knife",
          "name": "Skinner Buffalo"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_knife_2_rare_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_2_rare_name",
        "zh": {
          "description": "最负盛名的绿河匕首",
          "full_description": "最负盛名的绿河匕首",
          "name": "水牛剥皮刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_1": 3,
            "wls2_resourse_secondary_ingot_2": 3,
            "wls2_resourse_secondary_leather_2": 4
          },
          "learn_exp": 400,
          "min_level": 0,
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_skinner_desc"
        },
        "result_sources": []
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
            "stack_id": "wls2_weapon_melee_knife_2_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_knife_2_rare_icon",
      "stat_curves": {
        "damage": {
          "1": 131,
          "2": 144,
          "3": 157,
          "4": 170,
          "5": 183,
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
          "1": 75,
          "2": 75,
          "3": 75,
          "4": 75,
          "5": 75
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
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
          "coin_id": "spend_coin_soft_15"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_Skinner_Buffalo",
        "prefab_pbr_id": "@Knife_Skinner_Buffalo_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_2_rare",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "864ef879ce9040dd010af29935fa3d8da95ad5d5cec86b5d58f2570f2f1172a0",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "水牛剥皮刀",
        "name_en": "Skinner Buffalo",
        "description_zh": "最负盛名的绿河匕首",
        "description_en": "The most famous Green River knife",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_melee_knife_2_rare 水牛剥皮刀 skinner buffalo 最负盛名的绿河匕首 the most famous green river knife weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_2_rare"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 131,
            "unit": "",
            "display": "131"
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
            "value": 75,
            "unit": "",
            "display": "75"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
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
              "damage": 131,
              "dot_amount": 100
            },
            "display": {
              "damage": "131",
              "dot_amount": "100"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 144,
              "dot_amount": 150
            },
            "display": {
              "damage": "144",
              "dot_amount": "150"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 157,
              "dot_amount": 200
            },
            "display": {
              "damage": "157",
              "dot_amount": "200"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 170,
              "dot_amount": 250
            },
            "display": {
              "damage": "170",
              "dot_amount": "250"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 183,
              "dot_amount": 300
            },
            "display": {
              "damage": "183",
              "dot_amount": "300"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 184,
              "dot_amount": 300
            },
            "display": {
              "damage": "184",
              "dot_amount": "300"
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
          "伤害：6 级起每级增加 1，最高 1183。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_knife_2_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_knife_2_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_melee_knife_2_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_melee_knife_2_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_knife_2_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_2_uncommon"
      },
      "item_id": "wls2_weapon_melee_knife_2_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_knife_2_uncommon_description",
        "en": {
          "description": "A knife intended for close combat fighting",
          "full_description": "A knife intended for close combat fighting",
          "name": "War knife"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_knife_2_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_2_uncommon_name",
        "zh": {
          "description": "用于近身格斗的匕首",
          "full_description": "用于近身格斗的匕首",
          "name": "战刃"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_1": 2,
            "wls2_resourse_secondary_ingot_2": 2,
            "wls2_resourse_secondary_leather_2": 3
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
                "inventory_stack_id": "wls2_weapon_melee_knife_2_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_75coins_dynamic_town_trader_offer_knife_2_uncommon"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_melee_knife_2_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_ftue_ab_tutorial_trader_slot_8"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_knife_2_uncommon_icon",
      "stat_curves": {
        "damage": {
          "1": 93,
          "2": 102,
          "3": 111,
          "4": 121,
          "5": 130,
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
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_Bronze_Dagger",
        "prefab_pbr_id": "@Knife_Bronze_Dagger_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_2_uncommon",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "2fc7d19a99a459e65133654a9d2376206336d2b6b48d91f9a8daab3bce9a8dc5",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "战刃",
        "name_en": "War knife",
        "description_zh": "用于近身格斗的匕首",
        "description_en": "A knife intended for close combat fighting",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_melee_knife_2_uncommon 战刃 war knife 用于近身格斗的匕首 a knife intended for close combat fighting weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_2_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 93,
            "unit": "",
            "display": "93"
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
            "value": 60,
            "unit": "",
            "display": "60"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
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
              "damage": 93
            },
            "display": {
              "damage": "93"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 102
            },
            "display": {
              "damage": "102"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 111
            },
            "display": {
              "damage": "111"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 121
            },
            "display": {
              "damage": "121"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 130
            },
            "display": {
              "damage": "130"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 131
            },
            "display": {
              "damage": "131"
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
        "notes": [
          "伤害：6 级起每级增加 1，最高 1130。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_knife_3_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_knife_3_common_description",
        "name": "inventory_stack_view_wls2_weapon_melee_knife_3_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls_bowie_knife",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_3_common"
      },
      "item_id": "wls2_weapon_melee_knife_3_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_knife_3_common_description",
        "en": {
          "description": "Best knife that a Wild West resident can afford",
          "full_description": "Best knife that a Wild West resident can afford",
          "name": "Bowie knife"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_knife_3_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_3_common_name",
        "zh": {
          "description": "狂野西部居民能够买得起的最好的刀刃",
          "full_description": "狂野西部居民能够买得起的最好的刀刃",
          "name": "博伊刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_2": 1,
            "wls2_resourse_secondary_ingot_3": 1,
            "wls2_resourse_secondary_leather_3": 2
          },
          "learn_exp": 400,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_melee_knife_3_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_100coins_dynamic_town_trader_offer_fast_3"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls_bowie_knife",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.1
        },
        "damage": {
          "1": 119,
          "2": 130,
          "3": 142,
          "4": 154,
          "5": 166,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
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
        }
      },
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_Bowie",
        "prefab_pbr_id": "@Knife_Bowie_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_3_common",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "a474bda62b0ea22881b9156ddc5647c03bb8bb68f4dc5ce9f6f7c7145a0d66ed",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "博伊刀",
        "name_en": "Bowie knife",
        "description_zh": "狂野西部居民能够买得起的最好的刀刃",
        "description_en": "Best knife that a Wild West resident can afford",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_knife_3_common 博伊刀 bowie knife 狂野西部居民能够买得起的最好的刀刃 best knife that a wild west resident can afford weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_3_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 119,
            "unit": "",
            "display": "119"
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
            "value": 100,
            "unit": "",
            "display": "100"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
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
              "damage": 119
            },
            "display": {
              "damage": "119"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 130
            },
            "display": {
              "damage": "130"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 142
            },
            "display": {
              "damage": "142"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 154
            },
            "display": {
              "damage": "154"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 166
            },
            "display": {
              "damage": "166"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 167
            },
            "display": {
              "damage": "167"
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
        "notes": [
          "伤害：6 级起每级增加 1，最高 1166。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "wls2_weapon_melee_knife_3_epic_description",
        "full_description": "wls2_weapon_melee_knife_3_epic_description",
        "name": "wls2_weapon_melee_knife_3_epic_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_melee_knife_3_epic_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_3_epic"
      },
      "item_id": "wls2_weapon_melee_knife_3_epic",
      "localization": {
        "description_key": "wls2_weapon_melee_knife_3_epic_description",
        "en": {
          "description": "Just like a machete but shorter. Not that elegant, however highly effective",
          "full_description": "Just like a machete but shorter. Not that elegant, however highly effective",
          "name": "Bolo"
        },
        "full_description_key": "wls2_weapon_melee_knife_3_epic_description",
        "name_key": "wls2_weapon_melee_knife_3_epic_name",
        "zh": {
          "description": "形似大砍刀，但是更短一些。虽说谈不上什么优雅，但是胜在高效",
          "full_description": "形似大砍刀，但是更短一些。虽说谈不上什么优雅，但是胜在高效",
          "name": "大刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 1,
            "wls2_resourse_primary_coal_2": 2,
            "wls2_resourse_secondary_ingot_3": 3,
            "wls2_resourse_secondary_leather_3": 4
          },
          "learn_exp": 800,
          "min_level": 0,
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_epic_t3_desc"
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
            "stack_id": "wls2_weapon_melee_knife_3_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_melee_knife_3_epic_icon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.1
        },
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.1,
          "3": 0.15,
          "4": 0.2,
          "5": 0.25
        },
        "critical_modifier": {
          "1": 0.2,
          "2": 0.4,
          "3": 0.6,
          "4": 0.8,
          "5": 1
        },
        "damage": {
          "1": 253,
          "2": 278,
          "3": 304,
          "4": 330,
          "5": 355,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 76,
          "2": 76,
          "3": 76,
          "4": 76,
          "5": 76
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
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_Bolo",
        "prefab_pbr_id": "@Knife_Bolo_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_3_epic",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "efdbb4a3f87e2952f93fed7af01d0e3c942077554f908bc753a1a7001096a6e8",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "大刀",
        "name_en": "Bolo",
        "description_zh": "形似大砍刀，但是更短一些。虽说谈不上什么优雅，但是胜在高效",
        "description_en": "Just like a machete but shorter. Not that elegant, however highly effective",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_melee_knife_3_epic 大刀 bolo 形似大砍刀，但是更短一些。虽说谈不上什么优雅，但是胜在高效 just like a machete but shorter. not that elegant, however highly effective weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_3_epic"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 253,
            "unit": "",
            "display": "253"
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
            "value": 76,
            "unit": "",
            "display": "76"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
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
              "critical_hit_chance": 0.05,
              "critical_modifier": 0.2,
              "damage": 253
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "20%",
              "damage": "253"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.1,
              "critical_modifier": 0.4,
              "damage": 278
            },
            "display": {
              "critical_hit_chance": "10%",
              "critical_modifier": "40%",
              "damage": "278"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.15,
              "critical_modifier": 0.6,
              "damage": 304
            },
            "display": {
              "critical_hit_chance": "15%",
              "critical_modifier": "60%",
              "damage": "304"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 0.8,
              "damage": 330
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "80%",
              "damage": "330"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.25,
              "critical_modifier": 1,
              "damage": 355
            },
            "display": {
              "critical_hit_chance": "25%",
              "critical_modifier": "100%",
              "damage": "355"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.25,
              "critical_modifier": 1,
              "damage": 356
            },
            "display": {
              "critical_hit_chance": "25%",
              "critical_modifier": "100%",
              "damage": "356"
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
          "伤害：6 级起每级增加 1，最高 1355。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_knife_3_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_knife_3_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_melee_knife_3_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_knife_3_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_3_uncommon"
      },
      "item_id": "wls2_weapon_melee_knife_3_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_knife_3_uncommon_description",
        "en": {
          "description": "Green River knives were ubiquitous in the early American West",
          "full_description": "Green River knives were ubiquitous in the early American West",
          "name": "Green River"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_knife_3_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_3_uncommon_name",
        "zh": {
          "description": "绿河刀具早些年在美国西部红极一时",
          "full_description": "绿河刀具早些年在美国西部红极一时",
          "name": "绿河"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_2": 2,
            "wls2_resourse_secondary_ingot_3": 2,
            "wls2_resourse_secondary_leather_3": 3
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
                "inventory_stack_id": "wls2_weapon_melee_knife_3_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_150coins_dynamic_town_trader_offer_knife_3_uncommon"
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
            "stack_id": "wls2_weapon_melee_knife_3_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_knife_3_uncommon_icon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.1
        },
        "damage": {
          "1": 163,
          "2": 179,
          "3": 196,
          "4": 212,
          "5": 229,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
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
        }
      },
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
          "coin_id": "spend_coin_soft_35"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_Green_River",
        "prefab_pbr_id": "@Knife_Green_River_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_3_uncommon",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "a5464c90e877dd154e2fe22e080bbd33dde24bba8a9a4d09a6470b4b47ef0567",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "绿河",
        "name_en": "Green River",
        "description_zh": "绿河刀具早些年在美国西部红极一时",
        "description_en": "Green River knives were ubiquitous in the early American West",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_melee_knife_3_uncommon 绿河 green river 绿河刀具早些年在美国西部红极一时 green river knives were ubiquitous in the early american west weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_3_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 163,
            "unit": "",
            "display": "163"
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
            "value": 100,
            "unit": "",
            "display": "100"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
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
              "damage": 163
            },
            "display": {
              "damage": "163"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 179
            },
            "display": {
              "damage": "179"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 196
            },
            "display": {
              "damage": "196"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 212
            },
            "display": {
              "damage": "212"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 229
            },
            "display": {
              "damage": "229"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 230
            },
            "display": {
              "damage": "230"
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
        "notes": [
          "伤害：6 级起每级增加 1，最高 1229。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_knife_4_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_knife_4_common_description",
        "name": "inventory_stack_view_wls2_weapon_melee_knife_4_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls_machete",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_4_common"
      },
      "item_id": "wls2_weapon_melee_knife_4_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_knife_4_common_description",
        "en": {
          "description": "Long, wide blade, perfect for a fight with the enemy",
          "full_description": "Long, wide blade, perfect for a fight with the enemy",
          "name": "Machete"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_knife_4_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_4_common_name",
        "zh": {
          "description": "宽长的刀刃非常适合战斗。",
          "full_description": "宽长的刀刃非常适合战斗。",
          "name": "砍刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 1,
            "wls2_resourse_secondary_ingot_4": 1,
            "wls2_resourse_secondary_leather_4": 2
          },
          "learn_exp": 800,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_melee_knife_4_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_150coins_dynamic_town_trader_offer_knife_4_common"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_melee_knife_4_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_melee_3"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls_machete",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.2
        },
        "damage": {
          "1": 189,
          "2": 208,
          "3": 227,
          "4": 246,
          "5": 265,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 120,
          "2": 120,
          "3": 120,
          "4": 120,
          "5": 120
        },
        "penetrating_damage": {
          "1": 6,
          "2": 6,
          "3": 7,
          "4": 7,
          "5": 8
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
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.4,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_Machete",
        "prefab_pbr_id": "@Knife_Machete_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_4_common",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.0,
        "attack_damage_time": 0.4,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.0,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "ae8657015139a479fa780298c5dc2f38a95cd84951ad641340435a05ab8da4e4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "砍刀",
        "name_en": "Machete",
        "description_zh": "宽长的刀刃非常适合战斗。",
        "description_en": "Long, wide blade, perfect for a fight with the enemy",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_knife_4_common 砍刀 machete 宽长的刀刃非常适合战斗。 long, wide blade, perfect for a fight with the enemy weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_4_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 189,
            "unit": "",
            "display": "189"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 1.0,
            "unit": "次/秒",
            "display": "1 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 120,
            "unit": "",
            "display": "120"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "bandit_damage_modifier",
            "label": "对强盗伤害加成",
            "value": 0.2,
            "unit": "%",
            "display": "20%"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.0,
            "unit": "秒",
            "display": "1 秒"
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
              "damage": 189,
              "penetrating_damage": 6
            },
            "display": {
              "damage": "189",
              "penetrating_damage": "6"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 208,
              "penetrating_damage": 6
            },
            "display": {
              "damage": "208",
              "penetrating_damage": "6"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 227,
              "penetrating_damage": 7
            },
            "display": {
              "damage": "227",
              "penetrating_damage": "7"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 246,
              "penetrating_damage": 7
            },
            "display": {
              "damage": "246",
              "penetrating_damage": "7"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 265,
              "penetrating_damage": 8
            },
            "display": {
              "damage": "265",
              "penetrating_damage": "8"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 266,
              "penetrating_damage": 8
            },
            "display": {
              "damage": "266",
              "penetrating_damage": "8"
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
          "伤害：6 级起每级增加 1，最高 1265。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_knife_4_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_knife_4_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_melee_knife_4_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_knife_4_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_4_uncommon"
      },
      "item_id": "wls2_weapon_melee_knife_4_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_knife_4_uncommon_description",
        "en": {
          "description": "A billhook with a sharp blade",
          "full_description": "A billhook with a sharp blade",
          "name": "Vesuri"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_knife_4_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_4_uncommon_name",
        "zh": {
          "description": "带有利刃的砍刀",
          "full_description": "带有利刃的砍刀",
          "name": "维苏里"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 2,
            "wls2_resourse_secondary_ingot_4": 2,
            "wls2_resourse_secondary_leather_4": 3
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
                "inventory_stack_id": "wls2_weapon_melee_knife_4_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_melee_4"
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
            "stack_id": "wls2_weapon_melee_knife_4_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_knife_4_uncommon_icon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.2
        },
        "damage": {
          "1": 261,
          "2": 287,
          "3": 314,
          "4": 340,
          "5": 365,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 120,
          "2": 120,
          "3": 120,
          "4": 120,
          "5": 120
        },
        "penetrating_damage": {
          "1": 8,
          "2": 9,
          "3": 9,
          "4": 10,
          "5": 11
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
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_4"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_8"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_Vessury",
        "prefab_pbr_id": "@Knife_Vessury_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_4_uncommon",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "43b81734fd4a81fd8ccadbce3e31aef3bd0f126b48baa860517319877d70367a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "维苏里",
        "name_en": "Vesuri",
        "description_zh": "带有利刃的砍刀",
        "description_en": "A billhook with a sharp blade",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_melee_knife_4_uncommon 维苏里 vesuri 带有利刃的砍刀 a billhook with a sharp blade weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_4_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 261,
            "unit": "",
            "display": "261"
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
            "value": 120,
            "unit": "",
            "display": "120"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "bandit_damage_modifier",
            "label": "对强盗伤害加成",
            "value": 0.2,
            "unit": "%",
            "display": "20%"
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
              "damage": 261,
              "penetrating_damage": 8
            },
            "display": {
              "damage": "261",
              "penetrating_damage": "8"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 287,
              "penetrating_damage": 9
            },
            "display": {
              "damage": "287",
              "penetrating_damage": "9"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 314,
              "penetrating_damage": 9
            },
            "display": {
              "damage": "314",
              "penetrating_damage": "9"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 340,
              "penetrating_damage": 10
            },
            "display": {
              "damage": "340",
              "penetrating_damage": "10"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 365,
              "penetrating_damage": 11
            },
            "display": {
              "damage": "365",
              "penetrating_damage": "11"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 366,
              "penetrating_damage": 11
            },
            "display": {
              "damage": "366",
              "penetrating_damage": "11"
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
          "伤害：6 级起每级增加 1，最高 1365。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_knife_5_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_knife_5_common_description",
        "name": "inventory_stack_view_wls2_weapon_melee_knife_5_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls_sword_bayonet",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_5_common"
      },
      "item_id": "wls2_weapon_melee_knife_5_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_knife_5_common_description",
        "en": {
          "description": "Detached from a rifle this is still a great weapon",
          "full_description": "Detached from a rifle this is still a great weapon",
          "name": "Bayonet knife"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_knife_5_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_5_common_name",
        "zh": {
          "description": "即使跟步枪分开了，依然是一个很棒的武器",
          "full_description": "即使跟步枪分开了，依然是一个很棒的武器",
          "name": "刺刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 2,
            "wls2_resourse_secondary_ingot_5": 1,
            "wls2_resourse_secondary_leather_5": 2
          },
          "learn_exp": 1600,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_melee_knife_5_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_melee_5"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls_sword_bayonet",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.3
        },
        "damage": {
          "1": 303,
          "2": 333,
          "3": 363,
          "4": 394,
          "5": 424,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 150,
          "2": 150,
          "3": 150,
          "4": 150,
          "5": 150
        },
        "penetrating_damage": {
          "1": 15,
          "2": 17,
          "3": 18,
          "4": 20,
          "5": 21
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
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_Bayonet",
        "prefab_pbr_id": "@Knife_Bayonet_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_5_common",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "9bde81ccf9c28842ce25dc8d8303239e9dd88a9616c6d842929809ef4487a0f1",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "刺刀",
        "name_en": "Bayonet knife",
        "description_zh": "即使跟步枪分开了，依然是一个很棒的武器",
        "description_en": "Detached from a rifle this is still a great weapon",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_knife_5_common 刺刀 bayonet knife 即使跟步枪分开了，依然是一个很棒的武器 detached from a rifle this is still a great weapon weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_5_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 303,
            "unit": "",
            "display": "303"
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
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "bandit_damage_modifier",
            "label": "对强盗伤害加成",
            "value": 0.3,
            "unit": "%",
            "display": "30%"
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
              "damage": 303,
              "penetrating_damage": 15
            },
            "display": {
              "damage": "303",
              "penetrating_damage": "15"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 333,
              "penetrating_damage": 17
            },
            "display": {
              "damage": "333",
              "penetrating_damage": "17"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 363,
              "penetrating_damage": 18
            },
            "display": {
              "damage": "363",
              "penetrating_damage": "18"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 394,
              "penetrating_damage": 20
            },
            "display": {
              "damage": "394",
              "penetrating_damage": "20"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 424,
              "penetrating_damage": 21
            },
            "display": {
              "damage": "424",
              "penetrating_damage": "21"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 425,
              "penetrating_damage": 21
            },
            "display": {
              "damage": "425",
              "penetrating_damage": "21"
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
          "伤害：6 级起每级增加 1，最高 1424。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "wls2_weapon_melee_knife_5_epic_description",
        "full_description": "wls2_weapon_melee_knife_5_epic_description",
        "name": "wls2_weapon_melee_knife_5_epic_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_melee_knife_5_epic_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_5_epic"
      },
      "item_id": "wls2_weapon_melee_knife_5_epic",
      "localization": {
        "description_key": "wls2_weapon_melee_knife_5_epic_description",
        "en": {
          "description": "Simplicity and unmatched effectiveness are the foremost symbols of a modern army",
          "full_description": "Simplicity and unmatched effectiveness are the foremost symbols of a modern army",
          "name": "Army knife"
        },
        "full_description_key": "wls2_weapon_melee_knife_5_epic_description",
        "name_key": "wls2_weapon_melee_knife_5_epic_name",
        "zh": {
          "description": "简洁与超高效是现代军队最重要的标志",
          "full_description": "简洁与超高效是现代军队最重要的标志",
          "name": "军用匕首"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 2,
            "wls2_resourse_primary_coal_3": 4,
            "wls2_resourse_secondary_ingot_5": 2,
            "wls2_resourse_secondary_leather_5": 3
          },
          "learn_exp": 1600,
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
            "stack_id": "wls2_weapon_melee_knife_5_epic",
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
            "stack_id": "wls2_weapon_melee_knife_5_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_melee_knife_5_epic_icon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.3
        },
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.1,
          "3": 0.15,
          "4": 0.2,
          "5": 0.25
        },
        "critical_modifier": {
          "1": 1,
          "2": 1.25,
          "3": 1.5,
          "4": 1.75,
          "5": 2
        },
        "damage": {
          "1": 649,
          "2": 714,
          "3": 779,
          "4": 844,
          "5": 909,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 160,
          "2": 160,
          "3": 160,
          "4": 160,
          "5": 160
        },
        "penetrating_damage": {
          "1": 32,
          "2": 36,
          "3": 39,
          "4": 42,
          "5": 45
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
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_army",
        "prefab_pbr_id": "@Knife_army_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_5_epic",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "c93ccc4462e9f0a650c899046230a58e0c1fd4e468c0a1b5356e5b5bdb1f3f10",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "军用匕首",
        "name_en": "Army knife",
        "description_zh": "简洁与超高效是现代军队最重要的标志",
        "description_en": "Simplicity and unmatched effectiveness are the foremost symbols of a modern army",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_melee_knife_5_epic 军用匕首 army knife 简洁与超高效是现代军队最重要的标志 simplicity and unmatched effectiveness are the foremost symbols of a modern army weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_5_epic"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 649,
            "unit": "",
            "display": "649"
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
            "value": 160,
            "unit": "",
            "display": "160"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "bandit_damage_modifier",
            "label": "对强盗伤害加成",
            "value": 0.3,
            "unit": "%",
            "display": "30%"
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
              "critical_hit_chance": 0.05,
              "critical_modifier": 1,
              "damage": 649,
              "penetrating_damage": 32
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "100%",
              "damage": "649",
              "penetrating_damage": "32"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.1,
              "critical_modifier": 1.25,
              "damage": 714,
              "penetrating_damage": 36
            },
            "display": {
              "critical_hit_chance": "10%",
              "critical_modifier": "125%",
              "damage": "714",
              "penetrating_damage": "36"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.15,
              "critical_modifier": 1.5,
              "damage": 779,
              "penetrating_damage": 39
            },
            "display": {
              "critical_hit_chance": "15%",
              "critical_modifier": "150%",
              "damage": "779",
              "penetrating_damage": "39"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 1.75,
              "damage": 844,
              "penetrating_damage": 42
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "175%",
              "damage": "844",
              "penetrating_damage": "42"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.25,
              "critical_modifier": 2,
              "damage": 909,
              "penetrating_damage": 45
            },
            "display": {
              "critical_hit_chance": "25%",
              "critical_modifier": "200%",
              "damage": "909",
              "penetrating_damage": "45"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.25,
              "critical_modifier": 2,
              "damage": 910,
              "penetrating_damage": 45
            },
            "display": {
              "critical_hit_chance": "25%",
              "critical_modifier": "200%",
              "damage": "910",
              "penetrating_damage": "45"
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
          },
          {
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1909。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_knife_5_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_knife_5_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_melee_knife_5_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_melee_knife_5_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_knife_5_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_5_uncommon"
      },
      "item_id": "wls2_weapon_melee_knife_5_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_knife_5_uncommon_description",
        "en": {
          "description": "Don't mess with this long and sharp knife",
          "full_description": "Don't mess with this long and sharp knife",
          "name": "Sheriff's knife"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_knife_5_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_5_uncommon_name",
        "zh": {
          "description": "不要乱动这把又长又锋利的刀",
          "full_description": "不要乱动这把又长又锋利的刀",
          "name": "警长匕首"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 4,
            "wls2_resourse_secondary_ingot_5": 2,
            "wls2_resourse_secondary_leather_5": 3
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
                "inventory_stack_id": "wls2_weapon_melee_knife_5_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_melee_6"
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
            "stack_id": "wls2_weapon_melee_knife_5_uncommon",
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
            "stack_id": "wls2_weapon_melee_knife_5_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_knife_5_uncommon_icon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.3
        },
        "damage": {
          "1": 418,
          "2": 460,
          "3": 502,
          "4": 543,
          "5": 585,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 160,
          "2": 160,
          "3": 160,
          "4": 160,
          "5": 160
        },
        "penetrating_damage": {
          "1": 21,
          "2": 23,
          "3": 25,
          "4": 27,
          "5": 29
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
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
          "coin_id": "spend_coin_soft_75"
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
          "coin_id": "spend_coin_soft_125"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_7"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_15"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_Sheriff",
        "prefab_pbr_id": "@Knife_Sheriff_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_5_uncommon",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "cfa91458167610e3681beae112870c9949832b9172e74be987a24358ff2a3e4b",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "警长匕首",
        "name_en": "Sheriff's knife",
        "description_zh": "不要乱动这把又长又锋利的刀",
        "description_en": "Don't mess with this long and sharp knife",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_melee_knife_5_uncommon 警长匕首 sheriff's knife 不要乱动这把又长又锋利的刀 don't mess with this long and sharp knife weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_5_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 418,
            "unit": "",
            "display": "418"
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
            "value": 160,
            "unit": "",
            "display": "160"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "bandit_damage_modifier",
            "label": "对强盗伤害加成",
            "value": 0.3,
            "unit": "%",
            "display": "30%"
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
              "damage": 418,
              "penetrating_damage": 21
            },
            "display": {
              "damage": "418",
              "penetrating_damage": "21"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 460,
              "penetrating_damage": 23
            },
            "display": {
              "damage": "460",
              "penetrating_damage": "23"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 502,
              "penetrating_damage": 25
            },
            "display": {
              "damage": "502",
              "penetrating_damage": "25"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 543,
              "penetrating_damage": 27
            },
            "display": {
              "damage": "543",
              "penetrating_damage": "27"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 585,
              "penetrating_damage": 29
            },
            "display": {
              "damage": "585",
              "penetrating_damage": "29"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 586,
              "penetrating_damage": 29
            },
            "display": {
              "damage": "586",
              "penetrating_damage": "29"
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
          "伤害：6 级起每级增加 1，最高 1585。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_knife_6_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_knife_6_common_description",
        "name": "inventory_stack_view_wls2_weapon_melee_knife_6_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_weapon_melee_knife_6_common",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_6_common"
      },
      "item_id": "wls2_weapon_melee_knife_6_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_knife_6_common_description",
        "en": {
          "description": "Seafarer's choice for rugged use",
          "full_description": "Seafarer's choice for rugged use",
          "name": "Whaling knife"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_knife_6_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_6_common_name",
        "zh": {
          "description": "海员的选择，适用于崎岖使用",
          "full_description": "海员的选择，适用于崎岖使用",
          "name": "捕鲸刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 2,
            "wls2_resourse_secondary_ingot_6": 1,
            "wls2_resourse_secondary_leather_6": 2
          },
          "learn_exp": 1600,
          "min_level": 1,
          "required_electricity": 6,
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_melee_knife_6_common",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.4
        },
        "damage": {
          "1": 485,
          "2": 533,
          "3": 582,
          "4": 630,
          "5": 679,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 150,
          "2": 150,
          "3": 150,
          "4": 150,
          "5": 150
        },
        "penetrating_damage": {
          "1": 29,
          "2": 32,
          "3": 35,
          "4": 38,
          "5": 41
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
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_Whaling_Flensing",
        "prefab_pbr_id": "@Knife_Whaling_Flensing_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_6_common",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "18c75d7a90f5820b498ef3abdae1fc96bc0c3203fbfb8d416c455cf8de71256a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "捕鲸刀",
        "name_en": "Whaling knife",
        "description_zh": "海员的选择，适用于崎岖使用",
        "description_en": "Seafarer's choice for rugged use",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_knife_6_common 捕鲸刀 whaling knife 海员的选择，适用于崎岖使用 seafarer's choice for rugged use weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_6_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 485,
            "unit": "",
            "display": "485"
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
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "bandit_damage_modifier",
            "label": "对强盗伤害加成",
            "value": 0.4,
            "unit": "%",
            "display": "40%"
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
              "damage": 485,
              "penetrating_damage": 29
            },
            "display": {
              "damage": "485",
              "penetrating_damage": "29"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 533,
              "penetrating_damage": 32
            },
            "display": {
              "damage": "533",
              "penetrating_damage": "32"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 582,
              "penetrating_damage": 35
            },
            "display": {
              "damage": "582",
              "penetrating_damage": "35"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 630,
              "penetrating_damage": 38
            },
            "display": {
              "damage": "630",
              "penetrating_damage": "38"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 679,
              "penetrating_damage": 41
            },
            "display": {
              "damage": "679",
              "penetrating_damage": "41"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 680,
              "penetrating_damage": 41
            },
            "display": {
              "damage": "680",
              "penetrating_damage": "41"
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
          "伤害：6 级起每级增加 1，最高 1679。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_knife_6_epic_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_knife_6_epic_description",
        "name": "inventory_stack_view_wls2_weapon_melee_knife_6_epic_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_musher's_knife_6_epic",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_6_epic"
      },
      "item_id": "wls2_weapon_melee_knife_6_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_knife_6_epic_description",
        "en": {
          "description": "Lightweight yet durable companion on icy trails",
          "full_description": "Lightweight yet durable companion on icy trails",
          "name": "Musher's knife"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_knife_6_epic_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_6_epic_name",
        "zh": {
          "description": "轻便但耐用的伴侣在冰冷的小径上",
          "full_description": "轻便但耐用的伴侣在冰冷的小径上",
          "name": "狗拉雪橇者的刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 3,
            "wls2_resourse_primary_coal_3": 8,
            "wls2_resourse_secondary_ingot_6": 2,
            "wls2_resourse_secondary_leather_6": 3
          },
          "learn_exp": 6400,
          "min_level": 0,
          "required_electricity": 12,
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
            "level_max": 120,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_melee_knife_6_epic",
            "transaction_id": "transaction_iap_wls_4_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.25,
            "level_min": 121,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_melee_knife_6_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_musher's_knife_6_epic",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.4
        },
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.15,
          "3": 0.15,
          "4": 0.2,
          "5": 0.25
        },
        "critical_modifier": {
          "1": 0.3,
          "2": 0.35,
          "3": 0.4,
          "4": 0.45,
          "5": 0.5
        },
        "damage": {
          "1": 1210,
          "2": 1331,
          "3": 1453,
          "4": 1574,
          "5": 1695,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 170,
          "2": 170,
          "3": 170,
          "4": 170,
          "5": 170
        },
        "penetrating_damage": {
          "1": 73,
          "2": 91,
          "3": 108,
          "4": 126,
          "5": 143
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
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_250"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_musher's_knife",
        "prefab_pbr_id": "@Knife_musher's_knife_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_6_epic",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "ba80c48d7dec416161c2c793f6e2f7876026550bdb2a6fc6268a3aa7e8e0c559",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "狗拉雪橇者的刀",
        "name_en": "Musher's knife",
        "description_zh": "轻便但耐用的伴侣在冰冷的小径上",
        "description_en": "Lightweight yet durable companion on icy trails",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_melee_knife_6_epic 狗拉雪橇者的刀 musher's knife 轻便但耐用的伴侣在冰冷的小径上 lightweight yet durable companion on icy trails weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_6_epic"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1210,
            "unit": "",
            "display": "1210"
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
            "value": 170,
            "unit": "",
            "display": "170"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "bandit_damage_modifier",
            "label": "对强盗伤害加成",
            "value": 0.4,
            "unit": "%",
            "display": "40%"
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
              "critical_hit_chance": 0.05,
              "critical_modifier": 0.3,
              "damage": 1210,
              "penetrating_damage": 73
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "30%",
              "damage": "1210",
              "penetrating_damage": "73"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "critical_modifier": 0.35,
              "damage": 1331,
              "penetrating_damage": 91
            },
            "display": {
              "critical_hit_chance": "15%",
              "critical_modifier": "35%",
              "damage": "1331",
              "penetrating_damage": "91"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.15,
              "critical_modifier": 0.4,
              "damage": 1453,
              "penetrating_damage": 108
            },
            "display": {
              "critical_hit_chance": "15%",
              "critical_modifier": "40%",
              "damage": "1453",
              "penetrating_damage": "108"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 0.45,
              "damage": 1574,
              "penetrating_damage": 126
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "45%",
              "damage": "1574",
              "penetrating_damage": "126"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.25,
              "critical_modifier": 0.5,
              "damage": 1695,
              "penetrating_damage": 143
            },
            "display": {
              "critical_hit_chance": "25%",
              "critical_modifier": "50%",
              "damage": "1695",
              "penetrating_damage": "143"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.25,
              "critical_modifier": 0.5,
              "damage": 1696,
              "penetrating_damage": 143
            },
            "display": {
              "critical_hit_chance": "25%",
              "critical_modifier": "50%",
              "damage": "1696",
              "penetrating_damage": "143"
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
          },
          {
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 2695。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_knife_6_rare_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_knife_6_rare_description",
        "name": "inventory_stack_view_wls2_weapon_melee_knife_6_rare_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_weapon_melee_knife_6_rare",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_6_rare"
      },
      "item_id": "wls2_weapon_melee_knife_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_knife_6_rare_description",
        "en": {
          "description": "Mariner's precision for land ventures",
          "full_description": "Mariner's precision for land ventures",
          "name": "Naval dirk dagger"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_knife_6_rare_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_6_rare_name",
        "zh": {
          "description": "航海者对陆地冒险的精确度",
          "full_description": "航海者对陆地冒险的精确度",
          "name": "海军短剑"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 6,
            "wls2_resourse_secondary_ingot_6": 4,
            "wls2_resourse_secondary_leather_6": 6
          },
          "learn_exp": 6400,
          "min_level": 0,
          "required_electricity": 10,
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
            "stack_id": "wls2_weapon_melee_knife_6_rare",
            "transaction_id": "transaction_iap_wls_4_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.25,
            "level_min": 121,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_melee_knife_6_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_melee_knife_6_rare",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.4
        },
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
        },
        "damage": {
          "1": 944,
          "2": 1038,
          "3": 1133,
          "4": 1227,
          "5": 1322,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 170,
          "2": 170,
          "3": 170,
          "4": 170,
          "5": 170
        },
        "penetrating_damage": {
          "1": 57,
          "2": 63,
          "3": 82,
          "4": 96,
          "5": 112
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
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
          "coin_id": "spend_coin_soft_250"
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
          "coin_id": "spend_coin_soft_500"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_35"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_70"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_naval_dirk",
        "prefab_pbr_id": "@Knife_naval_dirk_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_6_rare",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "59841b9e5f0b2696730d51381c445fbcfb8d6d1c52521fc953f5f2ba3e89bbf2",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "海军短剑",
        "name_en": "Naval dirk dagger",
        "description_zh": "航海者对陆地冒险的精确度",
        "description_en": "Mariner's precision for land ventures",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_melee_knife_6_rare 海军短剑 naval dirk dagger 航海者对陆地冒险的精确度 mariner's precision for land ventures weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_6_rare"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 944,
            "unit": "",
            "display": "944"
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
            "value": 170,
            "unit": "",
            "display": "170"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "bandit_damage_modifier",
            "label": "对强盗伤害加成",
            "value": 0.4,
            "unit": "%",
            "display": "40%"
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
              "critical_hit_chance": 0.1,
              "damage": 944,
              "penetrating_damage": 57
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "944",
              "penetrating_damage": "57"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 1038,
              "penetrating_damage": 63
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "1038",
              "penetrating_damage": "63"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 1133,
              "penetrating_damage": 82
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "1133",
              "penetrating_damage": "82"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 1227,
              "penetrating_damage": 96
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "1227",
              "penetrating_damage": "96"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 1322,
              "penetrating_damage": 112
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "1322",
              "penetrating_damage": "112"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 1323,
              "penetrating_damage": 112
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "1323",
              "penetrating_damage": "112"
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
          "伤害：6 级起每级增加 1，最高 2322。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_melee_knife_6_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_knife_6_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_melee_knife_6_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_weapon_melee_knife_6_uncommon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_6_uncommon"
      },
      "item_id": "wls2_weapon_melee_knife_6_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_knife_6_uncommon_description",
        "en": {
          "description": "Stealthy strike from the shadows",
          "full_description": "Stealthy strike from the shadows",
          "name": "Push dagger"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_knife_6_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_6_uncommon_name",
        "zh": {
          "description": "潜行阴影中的突袭",
          "full_description": "潜行阴影中的突袭",
          "name": "推剑"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 4,
            "wls2_resourse_secondary_ingot_6": 2,
            "wls2_resourse_secondary_leather_6": 3
          },
          "learn_exp": 3200,
          "min_level": 0,
          "required_electricity": 8,
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
            "stack_id": "wls2_weapon_melee_knife_6_uncommon",
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
            "stack_id": "wls2_weapon_melee_knife_6_uncommon",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_melee_knife_6_uncommon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.4
        },
        "damage": {
          "1": 669,
          "2": 736,
          "3": 803,
          "4": 869,
          "5": 936,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 160,
          "2": 160,
          "3": 160,
          "4": 160,
          "5": 160
        },
        "penetrating_damage": {
          "1": 40,
          "2": 44,
          "3": 48,
          "4": 52,
          "5": 56
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
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
          "coin_id": "spend_coin_soft_125"
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
          "coin_id": "spend_coin_soft_250"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_push_dagger",
        "prefab_pbr_id": "@Knife_push_dagger_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_6_uncommon",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "a89726a6b02ffa66cde911f57e4340ee70a5e1bb6971fb2a3bc1306fb29cd3bf",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "推剑",
        "name_en": "Push dagger",
        "description_zh": "潜行阴影中的突袭",
        "description_en": "Stealthy strike from the shadows",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_melee_knife_6_uncommon 推剑 push dagger 潜行阴影中的突袭 stealthy strike from the shadows weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_6_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 669,
            "unit": "",
            "display": "669"
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
            "value": 160,
            "unit": "",
            "display": "160"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "bandit_damage_modifier",
            "label": "对强盗伤害加成",
            "value": 0.4,
            "unit": "%",
            "display": "40%"
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
              "damage": 669,
              "penetrating_damage": 40
            },
            "display": {
              "damage": "669",
              "penetrating_damage": "40"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 736,
              "penetrating_damage": 44
            },
            "display": {
              "damage": "736",
              "penetrating_damage": "44"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 803,
              "penetrating_damage": 48
            },
            "display": {
              "damage": "803",
              "penetrating_damage": "48"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 869,
              "penetrating_damage": 52
            },
            "display": {
              "damage": "869",
              "penetrating_damage": "52"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 936,
              "penetrating_damage": 56
            },
            "display": {
              "damage": "936",
              "penetrating_damage": "56"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 937,
              "penetrating_damage": 56
            },
            "display": {
              "damage": "937",
              "penetrating_damage": "56"
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
          "伤害：6 级起每级增加 1，最高 1936。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "wls2_weapon_melee_knife_7_common_description",
        "full_description": "wls2_weapon_melee_knife_7_common_description",
        "name": "wls2_weapon_melee_knife_7_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_weapon_melee_knife_7_common_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_7_common"
      },
      "item_id": "wls2_weapon_melee_knife_7_common",
      "localization": {
        "description_key": "wls2_weapon_melee_knife_7_common_description",
        "en": {
          "description": "Features a unique \"crank handle\" shape",
          "full_description": "Features a unique \"crank handle\" shape",
          "name": "Bayonet Demag"
        },
        "full_description_key": "wls2_weapon_melee_knife_7_common_description",
        "name_key": "wls2_weapon_melee_knife_7_common_name",
        "zh": {
          "description": "具有独特的“曲柄手柄”形状",
          "full_description": "具有独特的“曲柄手柄”形状",
          "name": "德玛格刺刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 4,
            "wls2_resourse_secondary_ingot_7": 1,
            "wls2_resourse_secondary_leather_7": 2
          },
          "learn_exp": 1600,
          "min_level": 1,
          "required_electricity": 12,
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_melee_knife_7_common_icon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.5
        },
        "damage": {
          "1": 776,
          "2": 854,
          "3": 931,
          "4": 1009,
          "5": 1086,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 150,
          "2": 150,
          "3": 150,
          "4": 150,
          "5": 150
        },
        "penetrating_damage": {
          "1": 47,
          "2": 51,
          "3": 56,
          "4": 61,
          "5": 65
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
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@knife_Bayonet_demag_pbr",
        "prefab_pbr_id": "@knife_Bayonet_demag_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_7_common",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "92d378fd4d99ffe5885989a141a45355f2a6a24f76c4c912aa0437b0d5b956c0",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "德玛格刺刀",
        "name_en": "Bayonet Demag",
        "description_zh": "具有独特的“曲柄手柄”形状",
        "description_en": "Features a unique \"crank handle\" shape",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_knife_7_common 德玛格刺刀 bayonet demag 具有独特的“曲柄手柄”形状 features a unique \"crank handle\" shape weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_7_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 776,
            "unit": "",
            "display": "776"
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
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "bandit_damage_modifier",
            "label": "对强盗伤害加成",
            "value": 0.5,
            "unit": "%",
            "display": "50%"
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
              "damage": 776,
              "penetrating_damage": 47
            },
            "display": {
              "damage": "776",
              "penetrating_damage": "47"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 854,
              "penetrating_damage": 51
            },
            "display": {
              "damage": "854",
              "penetrating_damage": "51"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 931,
              "penetrating_damage": 56
            },
            "display": {
              "damage": "931",
              "penetrating_damage": "56"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 1009,
              "penetrating_damage": 61
            },
            "display": {
              "damage": "1009",
              "penetrating_damage": "61"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 1086,
              "penetrating_damage": 65
            },
            "display": {
              "damage": "1086",
              "penetrating_damage": "65"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 1087,
              "penetrating_damage": 65
            },
            "display": {
              "damage": "1087",
              "penetrating_damage": "65"
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
          "伤害：6 级起每级增加 1，最高 2086。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "name": "wls2_weapon_melee_knife_7_epic_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_weapon_melee_knife_7_epic_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_7_epic"
      },
      "item_id": "wls2_weapon_melee_knife_7_epic",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Hunter's knife"
        },
        "full_description_key": null,
        "name_key": "wls2_weapon_melee_knife_7_epic_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "猎人小刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 5,
            "wls2_resourse_primary_coal_3": 10,
            "wls2_resourse_secondary_ingot_7": 2,
            "wls2_resourse_secondary_leather_7": 3
          },
          "learn_exp": 6400,
          "min_level": 0,
          "required_electricity": 24,
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
            "level_max": 124,
            "level_min": 115,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_melee_knife_7_epic",
            "transaction_id": "transaction_iap_wls_5_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.25,
            "level_min": 125,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_melee_knife_7_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_melee_knife_7_epic_icon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.5
        },
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.15,
          "3": 0.15,
          "4": 0.2,
          "5": 0.25
        },
        "critical_modifier": {
          "1": 0.3,
          "2": 0.35,
          "3": 0.4,
          "4": 0.45,
          "5": 0.5
        },
        "damage": {
          "1": 1936,
          "2": 2130,
          "3": 2323,
          "4": 2517,
          "5": 2710,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 170,
          "2": 170,
          "3": 170,
          "4": 170,
          "5": 170
        },
        "penetrating_damage": {
          "1": 116,
          "2": 128,
          "3": 139,
          "4": 151,
          "5": 163
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
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_100"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_150"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_250"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_400"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_Damask_pbr",
        "prefab_pbr_id": "@Knife_Damask_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_7_epic",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "c4d084a9c83639ea848ac9eb8cb50714b509da5165c93f549862f181c4fc4c9a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "猎人小刀",
        "name_en": "Hunter's knife",
        "description_zh": "",
        "description_en": "",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_melee_knife_7_epic 猎人小刀 hunter's knife weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_7_epic"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1936,
            "unit": "",
            "display": "1936"
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
            "value": 170,
            "unit": "",
            "display": "170"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "bandit_damage_modifier",
            "label": "对强盗伤害加成",
            "value": 0.5,
            "unit": "%",
            "display": "50%"
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
              "critical_hit_chance": 0.05,
              "critical_modifier": 0.3,
              "damage": 1936,
              "penetrating_damage": 116
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "30%",
              "damage": "1936",
              "penetrating_damage": "116"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "critical_modifier": 0.35,
              "damage": 2130,
              "penetrating_damage": 128
            },
            "display": {
              "critical_hit_chance": "15%",
              "critical_modifier": "35%",
              "damage": "2130",
              "penetrating_damage": "128"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.15,
              "critical_modifier": 0.4,
              "damage": 2323,
              "penetrating_damage": 139
            },
            "display": {
              "critical_hit_chance": "15%",
              "critical_modifier": "40%",
              "damage": "2323",
              "penetrating_damage": "139"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 0.45,
              "damage": 2517,
              "penetrating_damage": 151
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "45%",
              "damage": "2517",
              "penetrating_damage": "151"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.25,
              "critical_modifier": 0.5,
              "damage": 2710,
              "penetrating_damage": 163
            },
            "display": {
              "critical_hit_chance": "25%",
              "critical_modifier": "50%",
              "damage": "2710",
              "penetrating_damage": "163"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.25,
              "critical_modifier": 0.5,
              "damage": 2711,
              "penetrating_damage": 163
            },
            "display": {
              "critical_hit_chance": "25%",
              "critical_modifier": "50%",
              "damage": "2711",
              "penetrating_damage": "163"
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
          },
          {
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 3710。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "name": "wls2_weapon_melee_knife_7_rare_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_weapon_melee_knife_7_rare_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_7_rare"
      },
      "item_id": "wls2_weapon_melee_knife_7_rare",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Trench Knife M1918"
        },
        "full_description_key": null,
        "name_key": "wls2_weapon_melee_knife_7_rare_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "战壕刀 M1918"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 10,
            "wls2_resourse_secondary_ingot_7": 4,
            "wls2_resourse_secondary_leather_7": 6
          },
          "learn_exp": 6400,
          "min_level": 0,
          "required_electricity": 20,
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
            "level_max": 124,
            "level_min": 115,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_melee_knife_7_rare",
            "transaction_id": "transaction_iap_wls_4_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.25,
            "level_min": 125,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_melee_knife_7_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_melee_knife_7_rare_icon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.5
        },
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
        },
        "damage": {
          "1": 1510,
          "2": 1661,
          "3": 1812,
          "4": 1964,
          "5": 2115,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 170,
          "2": 170,
          "3": 170,
          "4": 170,
          "5": 170
        },
        "penetrating_damage": {
          "1": 91,
          "2": 100,
          "3": 109,
          "4": 118,
          "5": 127
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
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
          "coin_id": "spend_coin_soft_500"
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
          "coin_id": "spend_coin_soft_1000"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_75"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_150"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Knife_M1918_pbr",
        "prefab_pbr_id": "@Knife_M1918_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_7_rare",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "e6787308b2d6b6faf7e25a5baa0cef8ad5c1feaa6949cc36b1df08493b2bf3c0",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "战壕刀 M1918",
        "name_en": "Trench Knife M1918",
        "description_zh": "",
        "description_en": "",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_melee_knife_7_rare 战壕刀 m1918 trench knife m1918 weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_7_rare"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1510,
            "unit": "",
            "display": "1510"
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
            "value": 170,
            "unit": "",
            "display": "170"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "bandit_damage_modifier",
            "label": "对强盗伤害加成",
            "value": 0.5,
            "unit": "%",
            "display": "50%"
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
              "critical_hit_chance": 0.1,
              "damage": 1510,
              "penetrating_damage": 91
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "1510",
              "penetrating_damage": "91"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 1661,
              "penetrating_damage": 100
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "1661",
              "penetrating_damage": "100"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 1812,
              "penetrating_damage": 109
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "1812",
              "penetrating_damage": "109"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 1964,
              "penetrating_damage": 118
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "1964",
              "penetrating_damage": "118"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 2115,
              "penetrating_damage": 127
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "2115",
              "penetrating_damage": "127"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 2116,
              "penetrating_damage": 127
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "2116",
              "penetrating_damage": "127"
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
          "伤害：6 级起每级增加 1，最高 3115。",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "wls2_weapon_melee_knife_7_uncommon_description",
        "full_description": "wls2_weapon_melee_knife_7_uncommon_description",
        "name": "wls2_weapon_melee_knife_7_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_weapon_melee_knife_7_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "knife"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_knife_7_uncommon"
      },
      "item_id": "wls2_weapon_melee_knife_7_uncommon",
      "localization": {
        "description_key": "wls2_weapon_melee_knife_7_uncommon_description",
        "en": {
          "description": "Long-blade knife, designed to be used with a firearm",
          "full_description": "Long-blade knife, designed to be used with a firearm",
          "name": "Butcher's Blade"
        },
        "full_description_key": "wls2_weapon_melee_knife_7_uncommon_description",
        "name_key": "wls2_weapon_melee_knife_7_uncommon_name",
        "zh": {
          "description": "长刃刀，设计用于与火器一起使用",
          "full_description": "长刃刀，设计用于与火器一起使用",
          "name": "屠夫的刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 8,
            "wls2_resourse_secondary_ingot_7": 2,
            "wls2_resourse_secondary_leather_7": 3
          },
          "learn_exp": 3200,
          "min_level": 0,
          "required_electricity": 16,
          "transaction_id": "transaction_iap_wls_10_a",
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
            "level_max": 124,
            "level_min": 115,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_melee_knife_7_uncommon",
            "transaction_id": "transaction_iap_wls_3_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_2_a",
            "durability_factor": 0.25,
            "level_min": 125,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_melee_knife_7_uncommon",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_melee_knife_7_uncommon_icon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.5
        },
        "damage": {
          "1": 1070,
          "2": 1177,
          "3": 1284,
          "4": 1392,
          "5": 1499,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 160,
          "2": 160,
          "3": 160,
          "4": 160,
          "5": 160
        },
        "penetrating_damage": {
          "1": 64,
          "2": 71,
          "3": 77,
          "4": 83,
          "5": 90
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
      "subcategory": "knife",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "knife"
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
          "coin_id": "spend_coin_soft_250"
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
          "coin_id": "spend_coin_soft_500"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_knife_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@knife_Bayonet_Seitengewehr_pbr",
        "prefab_pbr_id": "@knife_Bayonet_Seitengewehr_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "weapon_id": "wls2_weapon_melee_knife_7_uncommon",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.2,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged",
          "knife"
        ]
      },
      "image_key": "e9799651a65766b99a5536f0c99f41efc73c515fdb5d089045c6ebd2c24b6502",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "屠夫的刀",
        "name_en": "Butcher's Blade",
        "description_zh": "长刃刀，设计用于与火器一起使用",
        "description_en": "Long-blade knife, designed to be used with a firearm",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_melee_knife_7_uncommon 屠夫的刀 butcher's blade 长刃刀，设计用于与火器一起使用 long-blade knife, designed to be used with a firearm weapon 武器 knife weapon weapon_storage quick knife wls2_weapon_melee_knife_7_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1070,
            "unit": "",
            "display": "1070"
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
            "value": 160,
            "unit": "",
            "display": "160"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [
          {
            "key": "bandit_damage_modifier",
            "label": "对强盗伤害加成",
            "value": 0.5,
            "unit": "%",
            "display": "50%"
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
              "damage": 1070,
              "penetrating_damage": 64
            },
            "display": {
              "damage": "1070",
              "penetrating_damage": "64"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 1177,
              "penetrating_damage": 71
            },
            "display": {
              "damage": "1177",
              "penetrating_damage": "71"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 1284,
              "penetrating_damage": 77
            },
            "display": {
              "damage": "1284",
              "penetrating_damage": "77"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 1392,
              "penetrating_damage": 83
            },
            "display": {
              "damage": "1392",
              "penetrating_damage": "83"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 1499,
              "penetrating_damage": 90
            },
            "display": {
              "damage": "1499",
              "penetrating_damage": "90"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 1500,
              "penetrating_damage": 90
            },
            "display": {
              "damage": "1500",
              "penetrating_damage": "90"
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
          "伤害：6 级起每级增加 1，最高 2499。",
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
        "description": "inventory_stack_view_wls_small_stone_tamogavk_description",
        "full_description": "inventory_stack_view_wls_small_stone_tamogavk_description",
        "name": "inventory_stack_view_wls_small_stone_tamogavk_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary01/wls_small_stone_tomahawk",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_middle_1"
      },
      "item_id": "wls2_weapon_melee_middle_1",
      "localization": {
        "description_key": "inventory_stack_view_wls_small_stone_tamogavk_description",
        "en": {
          "description": "Weapons of the ancients are still effective in the struggle for food",
          "full_description": "Weapons of the ancients are still effective in the struggle for food",
          "name": "Small stone tomahawk"
        },
        "full_description_key": "inventory_stack_view_wls_small_stone_tamogavk_description",
        "name_key": "inventory_stack_view_wls_small_stone_tamogavk_name",
        "zh": {
          "description": "十分古老的武器，但用来采集食物依然有效。",
          "full_description": "十分古老的武器，但用来采集食物依然有效。",
          "name": "小型石头战斧"
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
                "wls2_resourse_primary_stone_1": 2,
                "wls2_resourse_primary_wood_1": 1
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_melee_middle_1"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_melee_middle_1_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary01/wls_small_stone_tomahawk",
      "stat_curves": {
        "max_durability": {
          "default": 46
        }
      },
      "stat_labels": {
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
      "tier": 1,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.4,
        "damage": 60,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_axe_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Tomohawk_Stone",
        "prefab_pbr_id": "@Tomohawk_stone_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_melee_middle_1",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.1,
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.4,
        "attacks_per_second_inferred": 0.9090909090909091,
        "damage": 60,
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
      "image_key": "2a7e22ffad53d87cd3ec5568532ffc0eabd3628531f37b4a98c6412b330b01f7",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "小型石头战斧",
        "name_en": "Small stone tomahawk",
        "description_zh": "十分古老的武器，但用来采集食物依然有效。",
        "description_en": "Weapons of the ancients are still effective in the struggle for food",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_middle_1 小型石头战斧 small stone tomahawk 十分古老的武器，但用来采集食物依然有效。 weapons of the ancients are still effective in the struggle for food weapon 武器 event_melee weapon weapon_storage quick wls2_weapon_melee_middle_1"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 60,
            "unit": "",
            "display": "60"
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
            "value": 46,
            "unit": "",
            "display": "46"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.4,
            "unit": "",
            "display": "1.4"
          }
        ],
        "fixed": [
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
        "levels": [],
        "columns": [],
        "notes": [
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
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
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls_medium_metal_tomahawk_description",
        "full_description": "inventory_stack_view_wls_medium_metal_tomahawk_description",
        "name": "inventory_stack_view_wls_medium_metal_tomahawk_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary05/wls_medium_metal_tomahawk",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_middle_2"
      },
      "item_id": "wls2_weapon_melee_middle_2",
      "localization": {
        "description_key": "inventory_stack_view_wls_medium_metal_tomahawk_description",
        "en": {
          "description": "Tomahawk made from fine wood and iron, a formidable weapon",
          "full_description": "Tomahawk made from fine wood and iron, a formidable weapon",
          "name": "Iron tomahawk"
        },
        "full_description_key": "inventory_stack_view_wls_medium_metal_tomahawk_description",
        "name_key": "inventory_stack_view_wls_medium_metal_tomahawk_name",
        "zh": {
          "description": "用上好木材和铁制成的强力战斧。",
          "full_description": "用上好木材和铁制成的强力战斧。",
          "name": "铁制战斧"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_melee_middle_2"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_35coins_dynamic_south_trader_offer_middle_2"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_primary_wood_1": 1,
                "wls2_resourse_secondary_ingot_2": 1
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_melee_middle_2"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_melee_middle_2_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls_medium_metal_tomahawk",
      "stat_curves": {
        "max_durability": {
          "default": 66
        }
      },
      "stat_labels": {
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
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.4,
        "damage": 110,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_axe_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Tomohawk_Metal",
        "prefab_pbr_id": "@Tomohawk_metal_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_melee_middle_2",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.1,
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.4,
        "attacks_per_second_inferred": 0.9090909090909091,
        "damage": 110,
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
      "image_key": "cc3bb96a356ebe29d6159aaf68a5e9b0313a9d515a096de617b91ac734f9f586",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "铁制战斧",
        "name_en": "Iron tomahawk",
        "description_zh": "用上好木材和铁制成的强力战斧。",
        "description_en": "Tomahawk made from fine wood and iron, a formidable weapon",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_middle_2 铁制战斧 iron tomahawk 用上好木材和铁制成的强力战斧。 tomahawk made from fine wood and iron, a formidable weapon weapon 武器 event_melee weapon weapon_storage quick wls2_weapon_melee_middle_2"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 110,
            "unit": "",
            "display": "110"
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
            "value": 66,
            "unit": "",
            "display": "66"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 1.4,
            "unit": "",
            "display": "1.4"
          }
        ],
        "fixed": [
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
        "levels": [],
        "columns": [],
        "notes": [
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
        ],
        "level_label": "装备等级",
        "default_level": null
      }
    }
  ]
};
