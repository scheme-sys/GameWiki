/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-equipment-12"] = {
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
        "description": "inventory_stack_view_wls2_weapon_ws_day2021_colt_description",
        "full_description": "inventory_stack_view_wls2_weapon_ws_day2021_colt_description",
        "name": "inventory_stack_view_wls2_weapon_ws_day2021_colt_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_colt",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_ws_day2024_colt_4"
      },
      "item_id": "wls2_weapon_ws_day2024_colt_4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_ws_day2021_colt_description",
        "en": {
          "description": "Award weapon. Both for shooting and showing off!",
          "full_description": "Award weapon. Both for shooting and showing off!",
          "name": "Anniversary revolver"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_ws_day2021_colt_description",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2021_colt_name",
        "zh": {
          "description": "奖励武器。用来射击和炫耀都很合适！",
          "full_description": "奖励武器。用来射击和炫耀都很合适！",
          "name": "周年庆左轮手枪"
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
                "wls2_resourse_fourfold_gunparts_4": 4,
                "wls2_resourse_fourfold_nails_4": 8,
                "wls2_resourse_secondary_ingot_4": 8
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_ws_day2024_colt_4"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_ws_day2024_colt_4_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
            "durability_factor": 0.5,
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_ws_day2024_colt_4",
            "transaction_id": "transaction_iap_wls_8_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_4_a",
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
            "stack_id": "wls2_weapon_ws_day2024_colt_4",
            "transaction_id": "transaction_iap_wls_5_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_colt",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.2
        },
        "critical_hit_chance": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "critical_modifier": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "damage": {
          "1": 604,
          "2": 665,
          "3": 725,
          "4": 785,
          "5": 845,
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
          "1": 18,
          "2": 20,
          "3": 22,
          "4": 24,
          "5": 25
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
        "attack_ending_time": 0.5,
        "attack_range": 5,
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
        "prefab_common_id": "@Westland_day_Revolver",
        "prefab_pbr_id": "@Westland_day_Revolver_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_ws_day2024_colt_4",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "image_key": "7ce8cf8bb085e07e25cdaea78af5b06425dee0b735aebbe5754c3e3fe4f6c910",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "周年庆左轮手枪",
        "name_en": "Anniversary revolver",
        "description_zh": "奖励武器。用来射击和炫耀都很合适！",
        "description_en": "Award weapon. Both for shooting and showing off!",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_ws_day2024_colt_4 周年庆左轮手枪 anniversary revolver 奖励武器。用来射击和炫耀都很合适！ award weapon. both for shooting and showing off! weapon 武器 pistol weapon weapon_storage quick festive wls2_weapon_ws_day2024_colt_4"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 604,
            "unit": "",
            "display": "604"
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
            "value": 200,
            "unit": "",
            "display": "200"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 5,
            "unit": "",
            "display": "5"
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
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 604,
              "penetrating_damage": 18
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "604",
              "penetrating_damage": "18"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 665,
              "penetrating_damage": 20
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "665",
              "penetrating_damage": "20"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 725,
              "penetrating_damage": 22
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "725",
              "penetrating_damage": "22"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.04,
              "critical_modifier": 0.04,
              "damage": 785,
              "penetrating_damage": 24
            },
            "display": {
              "critical_hit_chance": "4%",
              "critical_modifier": "4%",
              "damage": "785",
              "penetrating_damage": "24"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.05,
              "critical_modifier": 0.05,
              "damage": 845,
              "penetrating_damage": 25
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "5%",
              "damage": "845",
              "penetrating_damage": "25"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.07,
              "critical_modifier": 0.07,
              "damage": 846,
              "penetrating_damage": 25
            },
            "display": {
              "critical_hit_chance": "7%",
              "critical_modifier": "7%",
              "damage": "846",
              "penetrating_damage": "25"
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
          "伤害：6 级起每级增加 1，最高 1845。",
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
        "description": "inventory_stack_view_wls2_weapon_ws_day2021_colt_description",
        "full_description": "inventory_stack_view_wls2_weapon_ws_day2021_colt_description",
        "name": "inventory_stack_view_wls2_weapon_ws_day2021_colt_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_colt",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_ws_day2024_colt_5"
      },
      "item_id": "wls2_weapon_ws_day2024_colt_5",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_ws_day2021_colt_description",
        "en": {
          "description": "Award weapon. Both for shooting and showing off!",
          "full_description": "Award weapon. Both for shooting and showing off!",
          "name": "Anniversary revolver"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_ws_day2021_colt_description",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2021_colt_name",
        "zh": {
          "description": "奖励武器。用来射击和炫耀都很合适！",
          "full_description": "奖励武器。用来射击和炫耀都很合适！",
          "name": "周年庆左轮手枪"
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
                "wls2_resourse_fourfold_gunparts_5": 4,
                "wls2_resourse_fourfold_nails_5": 8,
                "wls2_resourse_secondary_ingot_5": 8
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_ws_day2024_colt_5"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_ws_day2024_colt_5_recycle"
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
            "stack_id": "wls2_weapon_ws_day2024_colt_5",
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
            "stack_id": "wls2_weapon_ws_day2024_colt_5",
            "transaction_id": "transaction_iap_wls_8_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_colt",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.3
        },
        "critical_hit_chance": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "critical_modifier": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "damage": {
          "1": 966,
          "2": 1063,
          "3": 1159,
          "4": 1256,
          "5": 1352,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 300,
          "2": 300,
          "3": 300,
          "4": 300,
          "5": 300
        },
        "penetrating_damage": {
          "1": 48,
          "2": 53,
          "3": 58,
          "4": 63,
          "5": 68
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
      "subcategory": "pistol",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
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
        "prefab_common_id": "@Westland_day_Revolver",
        "prefab_pbr_id": "@Westland_day_Revolver_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_ws_day2024_colt_5",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "image_key": "7ce8cf8bb085e07e25cdaea78af5b06425dee0b735aebbe5754c3e3fe4f6c910",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "周年庆左轮手枪",
        "name_en": "Anniversary revolver",
        "description_zh": "奖励武器。用来射击和炫耀都很合适！",
        "description_en": "Award weapon. Both for shooting and showing off!",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_ws_day2024_colt_5 周年庆左轮手枪 anniversary revolver 奖励武器。用来射击和炫耀都很合适！ award weapon. both for shooting and showing off! weapon 武器 pistol weapon weapon_storage quick festive wls2_weapon_ws_day2024_colt_5"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 966,
            "unit": "",
            "display": "966"
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
            "value": 300,
            "unit": "",
            "display": "300"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 5,
            "unit": "",
            "display": "5"
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
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 966,
              "penetrating_damage": 48
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "966",
              "penetrating_damage": "48"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 1063,
              "penetrating_damage": 53
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "1063",
              "penetrating_damage": "53"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 1159,
              "penetrating_damage": 58
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "1159",
              "penetrating_damage": "58"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.04,
              "critical_modifier": 0.04,
              "damage": 1256,
              "penetrating_damage": 63
            },
            "display": {
              "critical_hit_chance": "4%",
              "critical_modifier": "4%",
              "damage": "1256",
              "penetrating_damage": "63"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.05,
              "critical_modifier": 0.05,
              "damage": 1352,
              "penetrating_damage": 68
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "5%",
              "damage": "1352",
              "penetrating_damage": "68"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.07,
              "critical_modifier": 0.07,
              "damage": 1353,
              "penetrating_damage": 68
            },
            "display": {
              "critical_hit_chance": "7%",
              "critical_modifier": "7%",
              "damage": "1353",
              "penetrating_damage": "68"
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
          "伤害：6 级起每级增加 1，最高 2352。",
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
        "description": "inventory_stack_view_wls2_weapon_ws_day2021_colt_description",
        "full_description": "inventory_stack_view_wls2_weapon_ws_day2021_colt_description",
        "name": "inventory_stack_view_wls2_weapon_ws_day2021_colt_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_colt",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_ws_day2024_colt_6"
      },
      "item_id": "wls2_weapon_ws_day2024_colt_6",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_ws_day2021_colt_description",
        "en": {
          "description": "Award weapon. Both for shooting and showing off!",
          "full_description": "Award weapon. Both for shooting and showing off!",
          "name": "Anniversary revolver"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_ws_day2021_colt_description",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2021_colt_name",
        "zh": {
          "description": "奖励武器。用来射击和炫耀都很合适！",
          "full_description": "奖励武器。用来射击和炫耀都很合适！",
          "name": "周年庆左轮手枪"
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
                "wls2_resourse_fourfold_gunparts_6": 4,
                "wls2_resourse_fourfold_nails_6": 8,
                "wls2_resourse_secondary_ingot_6": 8
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_ws_day2024_colt_6"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_ws_day2024_colt_6_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
            "durability_factor": 0.5,
            "level_max": 125,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_ws_day2024_colt_6",
            "transaction_id": "transaction_iap_wls_12_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.5,
            "level_min": 126,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_ws_day2024_colt_6",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_colt",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.4
        },
        "critical_hit_chance": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "critical_modifier": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "damage": {
          "1": 1546,
          "2": 1700,
          "3": 1855,
          "4": 2009,
          "5": 2164,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 300,
          "2": 300,
          "3": 300,
          "4": 300,
          "5": 300
        },
        "penetrating_damage": {
          "1": 93,
          "2": 102,
          "3": 111,
          "4": 121,
          "5": 130
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
      "subcategory": "pistol",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
      ],
      "throwing_item": null,
      "tier": 6,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
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
        "prefab_common_id": "@Westland_day_Revolver",
        "prefab_pbr_id": "@Westland_day_Revolver_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_ws_day2024_colt_6",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "image_key": "7ce8cf8bb085e07e25cdaea78af5b06425dee0b735aebbe5754c3e3fe4f6c910",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "周年庆左轮手枪",
        "name_en": "Anniversary revolver",
        "description_zh": "奖励武器。用来射击和炫耀都很合适！",
        "description_en": "Award weapon. Both for shooting and showing off!",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_ws_day2024_colt_6 周年庆左轮手枪 anniversary revolver 奖励武器。用来射击和炫耀都很合适！ award weapon. both for shooting and showing off! weapon 武器 pistol weapon weapon_storage quick festive wls2_weapon_ws_day2024_colt_6"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1546,
            "unit": "",
            "display": "1546"
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
            "value": 300,
            "unit": "",
            "display": "300"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 5,
            "unit": "",
            "display": "5"
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
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 1546,
              "penetrating_damage": 93
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "1546",
              "penetrating_damage": "93"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 1700,
              "penetrating_damage": 102
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "1700",
              "penetrating_damage": "102"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 1855,
              "penetrating_damage": 111
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "1855",
              "penetrating_damage": "111"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.04,
              "critical_modifier": 0.04,
              "damage": 2009,
              "penetrating_damage": 121
            },
            "display": {
              "critical_hit_chance": "4%",
              "critical_modifier": "4%",
              "damage": "2009",
              "penetrating_damage": "121"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.05,
              "critical_modifier": 0.05,
              "damage": 2164,
              "penetrating_damage": 130
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "5%",
              "damage": "2164",
              "penetrating_damage": "130"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.07,
              "critical_modifier": 0.07,
              "damage": 2165,
              "penetrating_damage": 130
            },
            "display": {
              "critical_hit_chance": "7%",
              "critical_modifier": "7%",
              "damage": "2165",
              "penetrating_damage": "130"
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
          "伤害：6 级起每级增加 1，最高 3164。",
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
        "description": "inventory_stack_view_wls2_weapon_ws_day2021_colt_description",
        "full_description": "inventory_stack_view_wls2_weapon_ws_day2021_colt_description",
        "name": "inventory_stack_view_wls2_weapon_ws_day2021_colt_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_colt",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_ws_day2024_colt_7"
      },
      "item_id": "wls2_weapon_ws_day2024_colt_7",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_ws_day2021_colt_description",
        "en": {
          "description": "Award weapon. Both for shooting and showing off!",
          "full_description": "Award weapon. Both for shooting and showing off!",
          "name": "Anniversary revolver"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_ws_day2021_colt_description",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2021_colt_name",
        "zh": {
          "description": "奖励武器。用来射击和炫耀都很合适！",
          "full_description": "奖励武器。用来射击和炫耀都很合适！",
          "name": "周年庆左轮手枪"
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
                "wls2_resourse_fourfold_gunparts_7": 4,
                "wls2_resourse_fourfold_nails_7": 8,
                "wls2_resourse_secondary_ingot_7": 8
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_ws_day2024_colt_7"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_ws_day2024_colt_7_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
            "durability_factor": 0.5,
            "level_max": 130,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_ws_day2024_colt_7",
            "transaction_id": "transaction_iap_wls_12_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.5,
            "level_min": 131,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_ws_day2024_colt_7",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_colt",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.5
        },
        "critical_hit_chance": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "critical_modifier": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "damage": {
          "1": 2474,
          "2": 2721,
          "3": 2968,
          "4": 3216,
          "5": 3463,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 300,
          "2": 300,
          "3": 300,
          "4": 300,
          "5": 300
        },
        "penetrating_damage": {
          "1": 148,
          "2": 163,
          "3": 178,
          "4": 193,
          "5": 208
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
      "subcategory": "pistol",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
      ],
      "throwing_item": null,
      "tier": 7,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
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
        "prefab_common_id": "@Westland_day_Revolver",
        "prefab_pbr_id": "@Westland_day_Revolver_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_ws_day2024_colt_7",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "attacks_per_second_inferred": 1.25,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "image_key": "7ce8cf8bb085e07e25cdaea78af5b06425dee0b735aebbe5754c3e3fe4f6c910",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "周年庆左轮手枪",
        "name_en": "Anniversary revolver",
        "description_zh": "奖励武器。用来射击和炫耀都很合适！",
        "description_en": "Award weapon. Both for shooting and showing off!",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_ws_day2024_colt_7 周年庆左轮手枪 anniversary revolver 奖励武器。用来射击和炫耀都很合适！ award weapon. both for shooting and showing off! weapon 武器 pistol weapon weapon_storage quick festive wls2_weapon_ws_day2024_colt_7"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 2474,
            "unit": "",
            "display": "2474"
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
            "value": 300,
            "unit": "",
            "display": "300"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 5,
            "unit": "",
            "display": "5"
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
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 2474,
              "penetrating_damage": 148
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "2474",
              "penetrating_damage": "148"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 2721,
              "penetrating_damage": 163
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "2721",
              "penetrating_damage": "163"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 2968,
              "penetrating_damage": 178
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "2968",
              "penetrating_damage": "178"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.04,
              "critical_modifier": 0.04,
              "damage": 3216,
              "penetrating_damage": 193
            },
            "display": {
              "critical_hit_chance": "4%",
              "critical_modifier": "4%",
              "damage": "3216",
              "penetrating_damage": "193"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.05,
              "critical_modifier": 0.05,
              "damage": 3463,
              "penetrating_damage": 208
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "5%",
              "damage": "3463",
              "penetrating_damage": "208"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.07,
              "critical_modifier": 0.07,
              "damage": 3464,
              "penetrating_damage": 208
            },
            "display": {
              "critical_hit_chance": "7%",
              "critical_modifier": "7%",
              "damage": "3464",
              "penetrating_damage": "208"
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
          "伤害：6 级起每级增加 1，最高 4463。",
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
        "description": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "full_description": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "name": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_shotgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_ws_day2024_shotgun_2"
      },
      "item_id": "wls2_weapon_ws_day2024_shotgun_2",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "en": {
          "description": "Award weapon. Both for shooting and showing off!",
          "full_description": "Award weapon. Both for shooting and showing off!",
          "name": "Anniversary shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_name",
        "zh": {
          "description": "奖励武器。用来射击和炫耀都很合适！",
          "full_description": "奖励武器。用来射击和炫耀都很合适！",
          "name": "周年庆散弹枪"
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
                "wls2_resourse_fourfold_gunparts_2": 8,
                "wls2_resourse_fourfold_nails_2": 4,
                "wls2_resourse_secondary_ingot_2": 8,
                "wls2_resourse_secondary_plank_2": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_ws_day2024_shotgun_2"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_ws_day2024_shotgun_2_recycle"
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
            "stack_id": "wls2_weapon_ws_day2024_shotgun_2",
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
            "stack_id": "wls2_weapon_ws_day2024_shotgun_2",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_shotgun",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "critical_modifier": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "damage": {
          "1": 263,
          "2": 290,
          "3": 316,
          "4": 342,
          "5": 369,
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
      "subcategory": "shotgun",
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
        "prefab_common_id": "@Westland_day_Winchester_M1897",
        "prefab_pbr_id": "@Westland_day_Winchester_M1897_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_ws_day2024_shotgun_2",
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
      "image_key": "6bdc4c31a15835b2cc5bb429be5dc30f4a657f1c3c5d2641401f1392035faeaf",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "周年庆散弹枪",
        "name_en": "Anniversary shotgun",
        "description_zh": "奖励武器。用来射击和炫耀都很合适！",
        "description_en": "Award weapon. Both for shooting and showing off!",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_ws_day2024_shotgun_2 周年庆散弹枪 anniversary shotgun 奖励武器。用来射击和炫耀都很合适！ award weapon. both for shooting and showing off! weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_ws_day2024_shotgun_2"
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
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 263
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "263"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 290
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "290"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 316
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "316"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.04,
              "critical_modifier": 0.04,
              "damage": 342
            },
            "display": {
              "critical_hit_chance": "4%",
              "critical_modifier": "4%",
              "damage": "342"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.05,
              "critical_modifier": 0.05,
              "damage": 369
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "5%",
              "damage": "369"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.07,
              "critical_modifier": 0.07,
              "damage": 370
            },
            "display": {
              "critical_hit_chance": "7%",
              "critical_modifier": "7%",
              "damage": "370"
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
        "description": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "full_description": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "name": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_shotgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_ws_day2024_shotgun_3"
      },
      "item_id": "wls2_weapon_ws_day2024_shotgun_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "en": {
          "description": "Award weapon. Both for shooting and showing off!",
          "full_description": "Award weapon. Both for shooting and showing off!",
          "name": "Anniversary shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_name",
        "zh": {
          "description": "奖励武器。用来射击和炫耀都很合适！",
          "full_description": "奖励武器。用来射击和炫耀都很合适！",
          "name": "周年庆散弹枪"
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
                "wls2_resourse_fourfold_gunparts_3": 8,
                "wls2_resourse_fourfold_nails_3": 4,
                "wls2_resourse_secondary_ingot_3": 8,
                "wls2_resourse_secondary_plank_3": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_ws_day2024_shotgun_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_ws_day2024_shotgun_3_recycle"
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
            "stack_id": "wls2_weapon_ws_day2024_shotgun_3",
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
            "stack_id": "wls2_weapon_ws_day2024_shotgun_3",
            "transaction_id": "transaction_iap_wls_5_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_shotgun",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "critical_modifier": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "damage": {
          "1": 385,
          "2": 420,
          "3": 455,
          "4": 490,
          "5": 525,
          "per_level_after_max": 1
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
      "subcategory": "shotgun",
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
        "prefab_common_id": "@Westland_day_Winchester_M1897",
        "prefab_pbr_id": "@Westland_day_Winchester_M1897_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_ws_day2024_shotgun_3",
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
      "image_key": "6bdc4c31a15835b2cc5bb429be5dc30f4a657f1c3c5d2641401f1392035faeaf",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "周年庆散弹枪",
        "name_en": "Anniversary shotgun",
        "description_zh": "奖励武器。用来射击和炫耀都很合适！",
        "description_en": "Award weapon. Both for shooting and showing off!",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_ws_day2024_shotgun_3 周年庆散弹枪 anniversary shotgun 奖励武器。用来射击和炫耀都很合适！ award weapon. both for shooting and showing off! weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_ws_day2024_shotgun_3"
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
            "value": 0.6666666666666666,
            "unit": "次/秒",
            "display": "0.67 次/秒"
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
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 385
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "385"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 420
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "420"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 455
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "455"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.04,
              "critical_modifier": 0.04,
              "damage": 490
            },
            "display": {
              "critical_hit_chance": "4%",
              "critical_modifier": "4%",
              "damage": "490"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.05,
              "critical_modifier": 0.05,
              "damage": 525
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "5%",
              "damage": "525"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.07,
              "critical_modifier": 0.07,
              "damage": 526
            },
            "display": {
              "critical_hit_chance": "7%",
              "critical_modifier": "7%",
              "damage": "526"
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
          "伤害：6 级起每级增加 1，最高 1525。",
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
        "description": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "full_description": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "name": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_shotgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_ws_day2024_shotgun_4"
      },
      "item_id": "wls2_weapon_ws_day2024_shotgun_4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "en": {
          "description": "Award weapon. Both for shooting and showing off!",
          "full_description": "Award weapon. Both for shooting and showing off!",
          "name": "Anniversary shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_name",
        "zh": {
          "description": "奖励武器。用来射击和炫耀都很合适！",
          "full_description": "奖励武器。用来射击和炫耀都很合适！",
          "name": "周年庆散弹枪"
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
                "wls2_resourse_fourfold_gunparts_4": 8,
                "wls2_resourse_fourfold_nails_4": 4,
                "wls2_resourse_secondary_ingot_4": 8,
                "wls2_resourse_secondary_plank_4": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_ws_day2024_shotgun_4"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_ws_day2024_shotgun_4_recycle"
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
            "stack_id": "wls2_weapon_ws_day2024_shotgun_4",
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
            "stack_id": "wls2_weapon_ws_day2024_shotgun_4",
            "transaction_id": "transaction_iap_wls_8_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_shotgun",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "critical_modifier": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "damage": {
          "1": 626,
          "2": 682,
          "3": 739,
          "4": 796,
          "5": 853,
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
          "1": 16,
          "2": 17,
          "3": 18,
          "4": 20,
          "5": 21
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
        "prefab_common_id": "@Westland_day_Winchester_M1897",
        "prefab_pbr_id": "@Westland_day_Winchester_M1897_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_ws_day2024_shotgun_4",
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
      "image_key": "6bdc4c31a15835b2cc5bb429be5dc30f4a657f1c3c5d2641401f1392035faeaf",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "周年庆散弹枪",
        "name_en": "Anniversary shotgun",
        "description_zh": "奖励武器。用来射击和炫耀都很合适！",
        "description_en": "Award weapon. Both for shooting and showing off!",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_ws_day2024_shotgun_4 周年庆散弹枪 anniversary shotgun 奖励武器。用来射击和炫耀都很合适！ award weapon. both for shooting and showing off! weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_ws_day2024_shotgun_4"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 626,
            "unit": "",
            "display": "626"
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
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 626,
              "penetrating_damage": 16
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "626",
              "penetrating_damage": "16"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 682,
              "penetrating_damage": 17
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "682",
              "penetrating_damage": "17"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 739,
              "penetrating_damage": 18
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "739",
              "penetrating_damage": "18"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.04,
              "critical_modifier": 0.04,
              "damage": 796,
              "penetrating_damage": 20
            },
            "display": {
              "critical_hit_chance": "4%",
              "critical_modifier": "4%",
              "damage": "796",
              "penetrating_damage": "20"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.05,
              "critical_modifier": 0.05,
              "damage": 853,
              "penetrating_damage": 21
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "5%",
              "damage": "853",
              "penetrating_damage": "21"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.07,
              "critical_modifier": 0.07,
              "damage": 854,
              "penetrating_damage": 21
            },
            "display": {
              "critical_hit_chance": "7%",
              "critical_modifier": "7%",
              "damage": "854",
              "penetrating_damage": "21"
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
          "伤害：6 级起每级增加 1，最高 1853。",
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
        "description": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "full_description": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "name": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_shotgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_ws_day2024_shotgun_5"
      },
      "item_id": "wls2_weapon_ws_day2024_shotgun_5",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "en": {
          "description": "Award weapon. Both for shooting and showing off!",
          "full_description": "Award weapon. Both for shooting and showing off!",
          "name": "Anniversary shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_name",
        "zh": {
          "description": "奖励武器。用来射击和炫耀都很合适！",
          "full_description": "奖励武器。用来射击和炫耀都很合适！",
          "name": "周年庆散弹枪"
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
                "wls2_resourse_fourfold_gunparts_5": 8,
                "wls2_resourse_fourfold_nails_5": 4,
                "wls2_resourse_secondary_ingot_5": 8,
                "wls2_resourse_secondary_plank_5": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_ws_day2024_shotgun_5"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_ws_day2024_shotgun_5_recycle"
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
            "stack_id": "wls2_weapon_ws_day2024_shotgun_5",
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
            "stack_id": "wls2_weapon_ws_day2024_shotgun_5",
            "transaction_id": "transaction_iap_wls_8_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_shotgun",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "critical_modifier": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "damage": {
          "1": 1078,
          "2": 1186,
          "3": 1294,
          "4": 1402,
          "5": 1510,
          "per_level_after_max": 1
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
      "subcategory": "shotgun",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
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
        "prefab_common_id": "@Westland_day_Winchester_M1897",
        "prefab_pbr_id": "@Westland_day_Winchester_M1897_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_ws_day2024_shotgun_5",
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
      "image_key": "6bdc4c31a15835b2cc5bb429be5dc30f4a657f1c3c5d2641401f1392035faeaf",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "周年庆散弹枪",
        "name_en": "Anniversary shotgun",
        "description_zh": "奖励武器。用来射击和炫耀都很合适！",
        "description_en": "Award weapon. Both for shooting and showing off!",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_ws_day2024_shotgun_5 周年庆散弹枪 anniversary shotgun 奖励武器。用来射击和炫耀都很合适！ award weapon. both for shooting and showing off! weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_ws_day2024_shotgun_5"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1078,
            "unit": "",
            "display": "1078"
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
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 1078,
              "penetrating_damage": 27
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "1078",
              "penetrating_damage": "27"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 1186,
              "penetrating_damage": 30
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "1186",
              "penetrating_damage": "30"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 1294,
              "penetrating_damage": 32
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "1294",
              "penetrating_damage": "32"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.04,
              "critical_modifier": 0.04,
              "damage": 1402,
              "penetrating_damage": 35
            },
            "display": {
              "critical_hit_chance": "4%",
              "critical_modifier": "4%",
              "damage": "1402",
              "penetrating_damage": "35"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.05,
              "critical_modifier": 0.05,
              "damage": 1510,
              "penetrating_damage": 38
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "5%",
              "damage": "1510",
              "penetrating_damage": "38"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.07,
              "critical_modifier": 0.07,
              "damage": 1511,
              "penetrating_damage": 38
            },
            "display": {
              "critical_hit_chance": "7%",
              "critical_modifier": "7%",
              "damage": "1511",
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
          "伤害：6 级起每级增加 1，最高 2510。",
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
        "description": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "full_description": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "name": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_shotgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_ws_day2024_shotgun_6"
      },
      "item_id": "wls2_weapon_ws_day2024_shotgun_6",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "en": {
          "description": "Award weapon. Both for shooting and showing off!",
          "full_description": "Award weapon. Both for shooting and showing off!",
          "name": "Anniversary shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_name",
        "zh": {
          "description": "奖励武器。用来射击和炫耀都很合适！",
          "full_description": "奖励武器。用来射击和炫耀都很合适！",
          "name": "周年庆散弹枪"
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
                "wls2_resourse_fourfold_gunparts_6": 8,
                "wls2_resourse_fourfold_nails_6": 4,
                "wls2_resourse_secondary_ingot_6": 8,
                "wls2_resourse_secondary_plank_6": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_ws_day2024_shotgun_6"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_ws_day2024_shotgun_6_recycle"
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
            "stack_id": "wls2_weapon_ws_day2024_shotgun_6",
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
            "stack_id": "wls2_weapon_ws_day2024_shotgun_6",
            "transaction_id": "transaction_iap_wls_12_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_shotgun",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "critical_modifier": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "damage": {
          "1": 1725,
          "2": 1897,
          "3": 2070,
          "4": 2242,
          "5": 2415,
          "per_level_after_max": 1
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
      "subcategory": "shotgun",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
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
        "prefab_common_id": "@Westland_day_Winchester_M1897",
        "prefab_pbr_id": "@Westland_day_Winchester_M1897_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_ws_day2024_shotgun_6",
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
      "image_key": "6bdc4c31a15835b2cc5bb429be5dc30f4a657f1c3c5d2641401f1392035faeaf",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "周年庆散弹枪",
        "name_en": "Anniversary shotgun",
        "description_zh": "奖励武器。用来射击和炫耀都很合适！",
        "description_en": "Award weapon. Both for shooting and showing off!",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_ws_day2024_shotgun_6 周年庆散弹枪 anniversary shotgun 奖励武器。用来射击和炫耀都很合适！ award weapon. both for shooting and showing off! weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_ws_day2024_shotgun_6"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1725,
            "unit": "",
            "display": "1725"
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
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 1725,
              "penetrating_damage": 52
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "1725",
              "penetrating_damage": "52"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 1897,
              "penetrating_damage": 57
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "1897",
              "penetrating_damage": "57"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 2070,
              "penetrating_damage": 62
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "2070",
              "penetrating_damage": "62"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.04,
              "critical_modifier": 0.04,
              "damage": 2242,
              "penetrating_damage": 67
            },
            "display": {
              "critical_hit_chance": "4%",
              "critical_modifier": "4%",
              "damage": "2242",
              "penetrating_damage": "67"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.05,
              "critical_modifier": 0.05,
              "damage": 2415,
              "penetrating_damage": 72
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "5%",
              "damage": "2415",
              "penetrating_damage": "72"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.07,
              "critical_modifier": 0.07,
              "damage": 2416,
              "penetrating_damage": 72
            },
            "display": {
              "critical_hit_chance": "7%",
              "critical_modifier": "7%",
              "damage": "2416",
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
          "伤害：6 级起每级增加 1，最高 3415。",
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
        "description": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "full_description": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "name": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_shotgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_ws_day2024_shotgun_7"
      },
      "item_id": "wls2_weapon_ws_day2024_shotgun_7",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "en": {
          "description": "Award weapon. Both for shooting and showing off!",
          "full_description": "Award weapon. Both for shooting and showing off!",
          "name": "Anniversary shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_description",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_name",
        "zh": {
          "description": "奖励武器。用来射击和炫耀都很合适！",
          "full_description": "奖励武器。用来射击和炫耀都很合适！",
          "name": "周年庆散弹枪"
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
                "wls2_resourse_fourfold_gunparts_7": 8,
                "wls2_resourse_fourfold_nails_7": 4,
                "wls2_resourse_secondary_ingot_7": 8,
                "wls2_resourse_secondary_plank_6": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_ws_day2024_shotgun_7"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_ws_day2024_shotgun_7_recycle"
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
            "stack_id": "wls2_weapon_ws_day2024_shotgun_7",
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
            "stack_id": "wls2_weapon_ws_day2024_shotgun_7",
            "transaction_id": "transaction_iap_wls_12_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_shotgun",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "critical_modifier": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05,
          "6": 0.07
        },
        "damage": {
          "1": 2760,
          "2": 3036,
          "3": 3312,
          "4": 3588,
          "5": 3864,
          "per_level_after_max": 1
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
          "3": 100,
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
      "subcategory": "shotgun",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
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
        "prefab_common_id": "@Westland_day_Winchester_M1897",
        "prefab_pbr_id": "@Westland_day_Winchester_M1897_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_ws_day2024_shotgun_7",
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
      "image_key": "6bdc4c31a15835b2cc5bb429be5dc30f4a657f1c3c5d2641401f1392035faeaf",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "周年庆散弹枪",
        "name_en": "Anniversary shotgun",
        "description_zh": "奖励武器。用来射击和炫耀都很合适！",
        "description_en": "Award weapon. Both for shooting and showing off!",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_ws_day2024_shotgun_7 周年庆散弹枪 anniversary shotgun 奖励武器。用来射击和炫耀都很合适！ award weapon. both for shooting and showing off! weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_ws_day2024_shotgun_7"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 2760,
            "unit": "",
            "display": "2760"
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
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 2760,
              "penetrating_damage": 83
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "2760",
              "penetrating_damage": "83"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 3036,
              "penetrating_damage": 91
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "3036",
              "penetrating_damage": "91"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 3312,
              "penetrating_damage": 100
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "3312",
              "penetrating_damage": "100"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.04,
              "critical_modifier": 0.04,
              "damage": 3588,
              "penetrating_damage": 108
            },
            "display": {
              "critical_hit_chance": "4%",
              "critical_modifier": "4%",
              "damage": "3588",
              "penetrating_damage": "108"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.05,
              "critical_modifier": 0.05,
              "damage": 3864,
              "penetrating_damage": 116
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "5%",
              "damage": "3864",
              "penetrating_damage": "116"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.07,
              "critical_modifier": 0.07,
              "damage": 3865,
              "penetrating_damage": 116
            },
            "display": {
              "critical_hit_chance": "7%",
              "critical_modifier": "7%",
              "damage": "3865",
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
          "伤害：6 级起每级增加 1，最高 4864。",
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
        "durability_price": 3,
        "ending_time": 0.5,
        "prefab_common_id": "@NewYear_Hatchet",
        "prefab_pbr_id": "@NewYear_Hatchet_pbr",
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
        "description": "inventory_stack_view_wls_xmas2019_axe_description",
        "full_description": "inventory_stack_view_wls_xmas2019_axe_description",
        "name": "inventory_stack_view_wls_xmas2019_axe_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_axe",
        "tags": [
          "wls2_tools_axe_4",
          "wls2_tools_axe_1",
          "wls2_tools_axe_2",
          "wls2_tools_axe_3",
          "wls2_tools_axe_0",
          "hatchet_iron",
          "hatchet",
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "tool_id": "wls2_weapon_xmas2020_axe",
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas2020_axe"
      },
      "item_id": "wls2_weapon_xmas2020_axe",
      "localization": {
        "description_key": "inventory_stack_view_wls_xmas2019_axe_description",
        "en": {
          "description": "In case if you need to chop any firewood",
          "full_description": "In case if you need to chop any firewood",
          "name": "Christmas axe"
        },
        "full_description_key": "inventory_stack_view_wls_xmas2019_axe_description",
        "name_key": "inventory_stack_view_wls_xmas2019_axe_name",
        "zh": {
          "description": "如果你要砍柴，可以用这个",
          "full_description": "如果你要砍柴，可以用这个",
          "name": "圣诞斧"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 3,
            "wls2_resourse_secondary_ingot_4": 2,
            "wls2_resourse_secondary_leather_4": 4
          },
          "is_legacy": true,
          "learn_exp": 150,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_weapon_xmas2020_axe"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_primary_coal_3": 3,
                "wls2_resourse_secondary_ingot_4": 2,
                "wls2_resourse_secondary_leather_4": 4
              },
              "is_legacy": true,
              "learn_exp": 150,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_axe"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_xmas2020_axe"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_axe",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_15"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_axe",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
        },
        "damage": {
          "1": 443,
          "2": 487,
          "3": 532,
          "4": 576,
          "5": 620,
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
          "1": 140,
          "2": 140,
          "3": 140,
          "4": 140,
          "5": 140
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
      "subcategory": "axe",
      "tags": [
        "wls2_tools_axe_4",
        "wls2_tools_axe_1",
        "wls2_tools_axe_2",
        "wls2_tools_axe_3",
        "wls2_tools_axe_0",
        "hatchet_iron",
        "hatchet",
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": "wls2_weapon_xmas2020_axe",
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
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_axe_hit"
        ],
        "hit_states": {
          "states_count": [
            0,
            1
          ],
          "type": "random"
        },
        "prefab_common_id": "@NewYear_Hatchet",
        "prefab_pbr_id": "@NewYear_Hatchet_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2020_axe",
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
      "image_key": "46b07a3b4f888bc02102391dc5f9c675361bc64779ef8f43b712c2c28c555818",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞斧",
        "name_en": "Christmas axe",
        "description_zh": "如果你要砍柴，可以用这个",
        "description_en": "In case if you need to chop any firewood",
        "category_zh": "工具",
        "subcategory": "axe",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_xmas2020_axe 圣诞斧 christmas axe 如果你要砍柴，可以用这个 in case if you need to chop any firewood tool 工具 axe wls2_tools_axe_4 wls2_tools_axe_1 wls2_tools_axe_2 wls2_tools_axe_3 wls2_tools_axe_0 hatchet_iron hatchet weapon weapon_storage quick festive wls2_weapon_xmas2020_axe"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 443,
            "unit": "",
            "display": "443"
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
            "value": 3,
            "unit": "点",
            "display": "3 点"
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
              "critical_hit_chance": 0.1,
              "damage": 443,
              "dot_amount": 100
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "443",
              "dot_amount": "100"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 487,
              "dot_amount": 150
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "487",
              "dot_amount": "150"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 532,
              "dot_amount": 200
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "532",
              "dot_amount": "200"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 576,
              "dot_amount": 250
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "576",
              "dot_amount": "250"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 620,
              "dot_amount": 300
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "620",
              "dot_amount": "300"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 621,
              "dot_amount": 300
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "621",
              "dot_amount": "300"
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
          "伤害：6 级起每级增加 1，最高 1620。",
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
        "description": "inventory_stack_view_wls2_weapon_xmas2020_bell_staff_description",
        "full_description": "inventory_stack_view_wls2_weapon_xmas2020_bell_staff_description",
        "name": "inventory_stack_view_wls2_weapon_xmas2020_bell_staff_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary05/wls2_xmas_bell_staff",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas2020_bell_staff"
      },
      "item_id": "wls2_weapon_xmas2020_bell_staff",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_xmas2020_bell_staff_description",
        "en": {
          "description": "Each hit is accompanied by a clear sound of bells",
          "full_description": "Each hit is accompanied by a clear sound of bells",
          "name": "Ding-ding"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_xmas2020_bell_staff_description",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_bell_staff_name",
        "zh": {
          "description": "每一击都伴随着清脆的铃铛声",
          "full_description": "每一击都伴随着清脆的铃铛声",
          "name": "叮叮"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_ingot_4": 4,
            "wls2_resourse_secondary_leather_4": 3,
            "wls2_resourse_secondary_plank_4": 4
          },
          "is_legacy": true,
          "learn_exp": 200,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_weapon_xmas2020_bell_staff"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_4": 4,
                "wls2_resourse_secondary_leather_4": 3,
                "wls2_resourse_secondary_plank_4": 4
              },
              "is_legacy": true,
              "learn_exp": 200,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_bell_staff"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_xmas2020_bell_staff"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_bell_staff",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_10"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_bell_staff",
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
        },
        "penetrating_damage": {
          "1": 7,
          "2": 8,
          "3": 9,
          "4": 9,
          "5": 11
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
        "attack_ending_time": 1,
        "attack_range": 2,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_bellstick_swing",
          "wls_bellstick_swing"
        ],
        "hit_sounds": [
          "wls_bellstick_hit",
          "wls_bellstick_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Xmas_Bell_Staff",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2020_bell_staff",
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
      "image_key": "6e9dcfcd955618c332479344e900274e28498ad91c821d152aaa3f35e02b415c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "叮叮",
        "name_en": "Ding-ding",
        "description_zh": "每一击都伴随着清脆的铃铛声",
        "description_en": "Each hit is accompanied by a clear sound of bells",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_xmas2020_bell_staff 叮叮 ding-ding 每一击都伴随着清脆的铃铛声 each hit is accompanied by a clear sound of bells weapon 武器 event_melee weapon weapon_storage quick festive wls2_weapon_xmas2020_bell_staff"
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
              "damage": 234,
              "penetrating_damage": 7
            },
            "display": {
              "critical_hit_chance": "8%",
              "critical_modifier": "15%",
              "damage": "234",
              "penetrating_damage": "7"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.1,
              "critical_modifier": 0.3,
              "damage": 270,
              "penetrating_damage": 8
            },
            "display": {
              "critical_hit_chance": "10%",
              "critical_modifier": "30%",
              "damage": "270",
              "penetrating_damage": "8"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.15,
              "critical_modifier": 0.5,
              "damage": 292,
              "penetrating_damage": 9
            },
            "display": {
              "critical_hit_chance": "15%",
              "critical_modifier": "50%",
              "damage": "292",
              "penetrating_damage": "9"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.18,
              "critical_modifier": 0.7,
              "damage": 308,
              "penetrating_damage": 9
            },
            "display": {
              "critical_hit_chance": "18%",
              "critical_modifier": "70%",
              "damage": "308",
              "penetrating_damage": "9"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 1,
              "damage": 352,
              "penetrating_damage": 11
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "100%",
              "damage": "352",
              "penetrating_damage": "11"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 1,
              "damage": 353,
              "penetrating_damage": 11
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "100%",
              "damage": "353",
              "penetrating_damage": "11"
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
        "description": "inventory_stack_view_wls_xmas2019_bow_description",
        "full_description": "inventory_stack_view_wls_xmas2019_bow_description",
        "name": "inventory_stack_view_wls_xmas2019_bow_name",
        "rarity": "common",
        "sorting_group_id": "bow",
        "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_bow",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas2020_bow"
      },
      "item_id": "wls2_weapon_xmas2020_bow",
      "localization": {
        "description_key": "inventory_stack_view_wls_xmas2019_bow_description",
        "en": {
          "description": "Colorful bow with a very rich history",
          "full_description": "Colorful bow with a very rich history",
          "name": "Deer antlers"
        },
        "full_description_key": "inventory_stack_view_wls_xmas2019_bow_description",
        "name_key": "inventory_stack_view_wls_xmas2019_bow_name",
        "zh": {
          "description": "蕴藏着悠久历史的多彩弓",
          "full_description": "蕴藏着悠久历史的多彩弓",
          "name": "鹿角"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_leather_3": 2,
            "wls2_resourse_secondary_plank_3": 4,
            "wls2_resourse_secondary_rope_3": 4
          },
          "is_legacy": true,
          "learn_exp": 200,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_weapon_xmas2020_bow"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_leather_3": 2,
                "wls2_resourse_secondary_plank_3": 4,
                "wls2_resourse_secondary_rope_3": 4
              },
              "is_legacy": true,
              "learn_exp": 200,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_bow"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_xmas2020_bow"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_bow",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_16"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_bow",
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
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "bow_reload_sound",
          "wls2_weapon_range_throwing_bow_2"
        ],
        "hit_sounds": [
          "wls2_weapon_range_throwing_bow_2"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@NewYear_Bow",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "bow"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2020_bow",
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
        "attack_range": 5,
        "attacks_per_second_inferred": 0.588235294117647,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "bow"
        ]
      },
      "image_key": "5d58293f7d76f534b07ac6e3f6b16cb747644af08ce9efc6a317065c9bf2d004",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角",
        "name_en": "Deer antlers",
        "description_zh": "蕴藏着悠久历史的多彩弓",
        "description_en": "Colorful bow with a very rich history",
        "category_zh": "武器",
        "subcategory": "bow",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_xmas2020_bow 鹿角 deer antlers 蕴藏着悠久历史的多彩弓 colorful bow with a very rich history weapon 武器 bow weapon weapon_storage quick festive wls2_weapon_xmas2020_bow"
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
            "value": 5,
            "unit": "",
            "display": "5"
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
        "description": "inventory_stack_view_wls2_weapon_xmas2020_candle_staff_description",
        "full_description": "inventory_stack_view_wls2_weapon_xmas2020_candle_staff_description",
        "name": "inventory_stack_view_wls2_weapon_xmas2020_candle_staff_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary05/wls2_xmas_candle_staff",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas2020_candle_staff"
      },
      "item_id": "wls2_weapon_xmas2020_candle_staff",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_xmas2020_candle_staff_description",
        "en": {
          "description": "It won't make you a king of the sea but it can hurt enemies",
          "full_description": "It won't make you a king of the sea but it can hurt enemies",
          "name": "Trident"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_xmas2020_candle_staff_description",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_candle_staff_name",
        "zh": {
          "description": "不会让你成为海王，但能打伤敌人",
          "full_description": "不会让你成为海王，但能打伤敌人",
          "name": "三叉戟"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_ingot_4": 5,
            "wls2_resourse_secondary_leather_4": 4,
            "wls2_resourse_secondary_plank_5": 6
          },
          "is_legacy": true,
          "learn_exp": 150,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_weapon_xmas2020_candle_staff"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_4": 5,
                "wls2_resourse_secondary_leather_4": 4,
                "wls2_resourse_secondary_plank_5": 6
              },
              "is_legacy": true,
              "learn_exp": 150,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_candle_staff"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_xmas2020_candle_staff"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_candle_staff",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_3"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_candle_staff",
      "stat_curves": {
        "damage": {
          "1": 277,
          "2": 337,
          "3": 367,
          "4": 387,
          "5": 411,
          "per_level_after_max": 1
        },
        "dot_amount": {
          "1": 150,
          "2": 175,
          "3": 200,
          "4": 225,
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
          "1": 70,
          "2": 70,
          "3": 70,
          "4": 70,
          "5": 70
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
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 2,
        "durability_price": 1,
        "hit_empty_sounds": [
          "sounds_weapons_torch"
        ],
        "hit_sounds": [
          "sounds_weapons_torch"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Xmas_Candle_Staff",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2020_candle_staff",
      "weapon_summary": {
        "attack_action": {
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.7,
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 2,
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
      "image_key": "a500e81805dadc4ca1c024a90d213c6c71c552aea78aa9f920a15ee8c6a4d963",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "三叉戟",
        "name_en": "Trident",
        "description_zh": "不会让你成为海王，但能打伤敌人",
        "description_en": "It won't make you a king of the sea but it can hurt enemies",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_xmas2020_candle_staff 三叉戟 trident 不会让你成为海王，但能打伤敌人 it won't make you a king of the sea but it can hurt enemies weapon 武器 event_melee weapon weapon_storage quick festive wls2_weapon_xmas2020_candle_staff"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 277,
            "unit": "",
            "display": "277"
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
            "value": 70,
            "unit": "",
            "display": "70"
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
            "key": "dot_time",
            "label": "持续伤害时间",
            "value": 3,
            "unit": "秒",
            "display": "3 秒"
          },
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
              "damage": 277,
              "dot_amount": 150
            },
            "display": {
              "damage": "277",
              "dot_amount": "150"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 337,
              "dot_amount": 175
            },
            "display": {
              "damage": "337",
              "dot_amount": "175"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 367,
              "dot_amount": 200
            },
            "display": {
              "damage": "367",
              "dot_amount": "200"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 387,
              "dot_amount": 225
            },
            "display": {
              "damage": "387",
              "dot_amount": "225"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 411,
              "dot_amount": 250
            },
            "display": {
              "damage": "411",
              "dot_amount": "250"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 412,
              "dot_amount": 250
            },
            "display": {
              "damage": "412",
              "dot_amount": "250"
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
          "伤害：6 级起每级增加 1，最高 1411。",
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
        "description": "inventory_stack_view_wls_xmas2019_candy_staff_description",
        "full_description": "inventory_stack_view_wls_xmas2019_candy_staff_description",
        "name": "inventory_stack_view_wls_xmas2019_candy_staff_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_candy_staff",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas2020_candy_staff"
      },
      "item_id": "wls2_weapon_xmas2020_candy_staff",
      "localization": {
        "description_key": "inventory_stack_view_wls_xmas2019_candy_staff_description",
        "en": {
          "description": "Heavy two-handed staff made with the best intentions",
          "full_description": "Heavy two-handed staff made with the best intentions",
          "name": "Candy staff"
        },
        "full_description_key": "inventory_stack_view_wls_xmas2019_candy_staff_description",
        "name_key": "inventory_stack_view_wls_xmas2019_candy_staff_name",
        "zh": {
          "description": "带有美好设计初衷的沉重双头棒",
          "full_description": "带有美好设计初衷的沉重双头棒",
          "name": "糖果棒"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_2": 2,
            "wls2_resourse_secondary_ingot_3": 4,
            "wls2_resourse_secondary_leather_3": 3,
            "wls2_resourse_secondary_plank_3": 3
          },
          "is_legacy": true,
          "learn_exp": 150,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_weapon_xmas2020_candy_staff"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_primary_coal_2": 2,
                "wls2_resourse_secondary_ingot_3": 4,
                "wls2_resourse_secondary_leather_3": 3,
                "wls2_resourse_secondary_plank_3": 3
              },
              "is_legacy": true,
              "learn_exp": 150,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_candy_staff"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_xmas2020_candy_staff"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_candy_staff",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_17"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_candy_staff",
      "stat_curves": {
        "critical_modifier": {
          "1": 0.15,
          "2": 0.2,
          "3": 0.25,
          "4": 0.3,
          "5": 0.35
        },
        "damage": {
          "1": 198,
          "2": 220,
          "3": 242,
          "4": 275,
          "5": 330,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 52,
          "2": 52,
          "3": 52,
          "4": 52,
          "5": 52
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
        "attack_range": 2,
        "durability_price": 1,
        "hit_empty_sounds": [
          "tomahawk_hammer_whoosh2",
          "tomahawk_hammer_whoosh2"
        ],
        "hit_sounds": [
          "wls2_halloween_melee_cross_2h_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@NewYear_Stick",
        "prefab_pbr_id": "@NewYear_Stick_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2020_candy_staff",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
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
      "image_key": "5dfc6aaf6a3fd7e9e9dde7f0a5016be3e67d4cc9ec11e2c24cebe72d7a21461b",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "糖果棒",
        "name_en": "Candy staff",
        "description_zh": "带有美好设计初衷的沉重双头棒",
        "description_en": "Heavy two-handed staff made with the best intentions",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_xmas2020_candy_staff 糖果棒 candy staff 带有美好设计初衷的沉重双头棒 heavy two-handed staff made with the best intentions weapon 武器 event_melee weapon weapon_storage quick festive wls2_weapon_xmas2020_candy_staff"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 198,
            "unit": "",
            "display": "198"
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
            "value": 52,
            "unit": "",
            "display": "52"
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
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_modifier": 0.15,
              "damage": 198
            },
            "display": {
              "critical_modifier": "15%",
              "damage": "198"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_modifier": 0.2,
              "damage": 220
            },
            "display": {
              "critical_modifier": "20%",
              "damage": "220"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_modifier": 0.25,
              "damage": 242
            },
            "display": {
              "critical_modifier": "25%",
              "damage": "242"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_modifier": 0.3,
              "damage": 275
            },
            "display": {
              "critical_modifier": "30%",
              "damage": "275"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_modifier": 0.35,
              "damage": 330
            },
            "display": {
              "critical_modifier": "35%",
              "damage": "330"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_modifier": 0.35,
              "damage": 331
            },
            "display": {
              "critical_modifier": "35%",
              "damage": "331"
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
        "description": "inventory_stack_view_wls_santa_crossbow_description",
        "full_description": "inventory_stack_view_wls_santa_crossbow_description",
        "name": "inventory_stack_view_wls_santa_crossbow_name",
        "rarity": "common",
        "sorting_group_id": "crossbow",
        "sprite": "UI_WW_AlphaBinary03/wls_santa_crossbow",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas2020_crossbow"
      },
      "item_id": "wls2_weapon_xmas2020_crossbow",
      "localization": {
        "description_key": "inventory_stack_view_wls_santa_crossbow_description",
        "en": {
          "description": "Spectacular holiday crossbow, which shoots sharpened lollipops.",
          "full_description": "Spectacular holiday crossbow, which shoots sharpened lollipops.",
          "name": "Lollipop Crossbow"
        },
        "full_description_key": "inventory_stack_view_wls_santa_crossbow_description",
        "name_key": "inventory_stack_view_wls_santa_crossbow_name",
        "zh": {
          "description": "光彩艳丽的节日造型十字弓，可以射出尖锐的棒棒糖。",
          "full_description": "光彩艳丽的节日造型十字弓，可以射出尖锐的棒棒糖。",
          "name": "棒棒糖十字弓"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_4": 3,
            "wls2_resourse_secondary_plank_4": 4,
            "wls2_resourse_secondary_rope_4": 3
          },
          "is_legacy": true,
          "learn_exp": 200,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_weapon_xmas2020_crossbow"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_4": 3,
                "wls2_resourse_secondary_plank_4": 4,
                "wls2_resourse_secondary_rope_4": 3
              },
              "is_legacy": true,
              "learn_exp": 200,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_crossbow"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_xmas2020_crossbow"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_crossbow",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_18"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_santa_crossbow",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.07,
          "3": 0.09,
          "4": 0.11,
          "5": 0.13
        },
        "damage": {
          "1": 380,
          "2": 392,
          "3": 464,
          "4": 487,
          "5": 517,
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
          "1": 11,
          "2": 12,
          "3": 14,
          "4": 15,
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
          "santa_crossbow"
        ],
        "hit_sounds": [
          "bow_reload_sound",
          "santa_crossbow"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Santas_Crossbow",
        "prefab_pbr_id": "@Santas_Crossbow_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2020_crossbow",
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
      "image_key": "63b1963333cfdd2befe87af66e150e7c0941b198cdd467e7cafd050a1d3e8a67",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "棒棒糖十字弓",
        "name_en": "Lollipop Crossbow",
        "description_zh": "光彩艳丽的节日造型十字弓，可以射出尖锐的棒棒糖。",
        "description_en": "Spectacular holiday crossbow, which shoots sharpened lollipops.",
        "category_zh": "武器",
        "subcategory": "crossbow",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_xmas2020_crossbow 棒棒糖十字弓 lollipop crossbow 光彩艳丽的节日造型十字弓，可以射出尖锐的棒棒糖。 spectacular holiday crossbow, which shoots sharpened lollipops. weapon 武器 crossbow weapon weapon_storage quick festive wls2_weapon_xmas2020_crossbow"
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
              "damage": 380,
              "penetrating_damage": 11
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "380",
              "penetrating_damage": "11"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.07,
              "damage": 392,
              "penetrating_damage": 12
            },
            "display": {
              "critical_hit_chance": "7%",
              "damage": "392",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.09,
              "damage": 464,
              "penetrating_damage": 14
            },
            "display": {
              "critical_hit_chance": "9%",
              "damage": "464",
              "penetrating_damage": "14"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.11,
              "damage": 487,
              "penetrating_damage": 15
            },
            "display": {
              "critical_hit_chance": "11%",
              "damage": "487",
              "penetrating_damage": "15"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 517,
              "penetrating_damage": 16
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "517",
              "penetrating_damage": "16"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 518,
              "penetrating_damage": 16
            },
            "display": {
              "critical_hit_chance": "13%",
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
        "description": "inventory_stack_view_wls2_weapon_xmas2020_cup_gun_description",
        "full_description": "inventory_stack_view_wls2_weapon_xmas2020_cup_gun_description",
        "name": "inventory_stack_view_wls2_weapon_xmas2020_cup_gun_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary05/wls2_xmas_cup_gun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas2020_cup_gun"
      },
      "item_id": "wls2_weapon_xmas2020_cup_gun",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_xmas2020_cup_gun_description",
        "en": {
          "description": "The weapon's inventor had definitely nothing to do",
          "full_description": "The weapon's inventor had definitely nothing to do",
          "name": "Coffeepot"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_xmas2020_cup_gun_description",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_cup_gun_name",
        "zh": {
          "description": "这件武器的发明者绝对是闲得没事做了",
          "full_description": "这件武器的发明者绝对是闲得没事做了",
          "name": "咖啡壶"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_4": 3,
            "wls2_resourse_fourfold_nails_4": 4,
            "wls2_resourse_secondary_ingot_4": 8
          },
          "is_legacy": true,
          "learn_exp": 200,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_weapon_xmas2020_cup_gun"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_4": 3,
                "wls2_resourse_fourfold_nails_4": 4,
                "wls2_resourse_secondary_ingot_4": 8
              },
              "is_legacy": true,
              "learn_exp": 200,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_cup_gun"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_xmas2020_cup_gun"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_cup_gun",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_12"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_cup_gun",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.2
        },
        "critical_hit_chance": {
          "1": 0.08,
          "2": 0.1,
          "3": 0.12,
          "4": 0.14,
          "5": 0.16
        },
        "damage": {
          "1": 341,
          "2": 367,
          "3": 392,
          "4": 413,
          "5": 453,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 112,
          "2": 112,
          "3": 112,
          "4": 112,
          "5": 112
        },
        "penetrating_damage": {
          "1": 10,
          "2": 11,
          "3": 12,
          "4": 12,
          "5": 14
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
        "prefab_common_id": "@Xmas_Cup_Gun",
        "prefab_pbr_id": "@Xmas_Cup_Gun_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2020_cup_gun",
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
          "ranged"
        ]
      },
      "image_key": "a79fbf4b9455072a3545f35b7df5cd4688dda18d65252cfb8c45e519bf1b4229",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "咖啡壶",
        "name_en": "Coffeepot",
        "description_zh": "这件武器的发明者绝对是闲得没事做了",
        "description_en": "The weapon's inventor had definitely nothing to do",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_xmas2020_cup_gun 咖啡壶 coffeepot 这件武器的发明者绝对是闲得没事做了 the weapon's inventor had definitely nothing to do weapon 武器 pistol weapon weapon_storage quick festive wls2_weapon_xmas2020_cup_gun"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 341,
            "unit": "",
            "display": "341"
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
            "value": 112,
            "unit": "",
            "display": "112"
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
              "critical_hit_chance": 0.08,
              "damage": 341,
              "penetrating_damage": 10
            },
            "display": {
              "critical_hit_chance": "8%",
              "damage": "341",
              "penetrating_damage": "10"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 367,
              "penetrating_damage": 11
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "367",
              "penetrating_damage": "11"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.12,
              "damage": 392,
              "penetrating_damage": 12
            },
            "display": {
              "critical_hit_chance": "12%",
              "damage": "392",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.14,
              "damage": 413,
              "penetrating_damage": 12
            },
            "display": {
              "critical_hit_chance": "14%",
              "damage": "413",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.16,
              "damage": 453,
              "penetrating_damage": 14
            },
            "display": {
              "critical_hit_chance": "16%",
              "damage": "453",
              "penetrating_damage": "14"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.16,
              "damage": 454,
              "penetrating_damage": 14
            },
            "display": {
              "critical_hit_chance": "16%",
              "damage": "454",
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
          "伤害：6 级起每级增加 1，最高 1453。",
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
        "description": "inventory_stack_view_wls2_weapon_xmas2020_dagger_description",
        "full_description": "inventory_stack_view_wls2_weapon_xmas2020_dagger_description",
        "name": "inventory_stack_view_wls2_weapon_xmas2020_dagger_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_knife",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_xmas_dagger",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas2020_dagger"
      },
      "item_id": "wls2_weapon_xmas2020_dagger",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_xmas2020_dagger_description",
        "en": {
          "description": "Was meant to be a present, but...",
          "full_description": "Was meant to be a present, but...",
          "name": "Gift dagger"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_xmas2020_dagger_description",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_dagger_name",
        "zh": {
          "description": "本来是一份礼物的，但是……",
          "full_description": "本来是一份礼物的，但是……",
          "name": "礼物匕首"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_ingot_4": 4,
            "wls2_resourse_secondary_leather_4": 5,
            "wls2_resourse_secondary_plank_4": 6
          },
          "is_legacy": true,
          "learn_exp": 100,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_weapon_xmas2020_dagger"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_4": 4,
                "wls2_resourse_secondary_leather_4": 5,
                "wls2_resourse_secondary_plank_4": 6
              },
              "is_legacy": true,
              "learn_exp": 100,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_dagger"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_xmas2020_dagger"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_dagger",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_13"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_dagger",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.2
        },
        "damage": {
          "1": 274,
          "2": 301,
          "3": 329,
          "4": 356,
          "5": 384,
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
          "1": 8,
          "2": 9,
          "3": 10,
          "4": 11,
          "5": 12
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
      "subcategory": "knife",
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
        "attack_damage_time": 0.25,
        "attack_ending_time": 0.55,
        "attack_range": 1,
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
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Xmas_Dagger",
        "prefab_pbr_id": "@Xmas_Dagger_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2020_dagger",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.25,
        "attack_ending_time": 0.55,
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
      "image_key": "0d803878c1cbcc96e945ffcd9564052ff18be044676bcfb5ad329b20cf5ca9f0",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "礼物匕首",
        "name_en": "Gift dagger",
        "description_zh": "本来是一份礼物的，但是……",
        "description_en": "Was meant to be a present, but...",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_xmas2020_dagger 礼物匕首 gift dagger 本来是一份礼物的，但是…… was meant to be a present, but... weapon 武器 knife weapon weapon_storage quick festive wls2_weapon_xmas2020_dagger"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 274,
            "unit": "",
            "display": "274"
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
            "value": 1,
            "unit": "",
            "display": "1"
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
              "damage": 274,
              "dot_amount": 100,
              "penetrating_damage": 8
            },
            "display": {
              "damage": "274",
              "dot_amount": "100",
              "penetrating_damage": "8"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 301,
              "dot_amount": 150,
              "penetrating_damage": 9
            },
            "display": {
              "damage": "301",
              "dot_amount": "150",
              "penetrating_damage": "9"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 329,
              "dot_amount": 200,
              "penetrating_damage": 10
            },
            "display": {
              "damage": "329",
              "dot_amount": "200",
              "penetrating_damage": "10"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 356,
              "dot_amount": 250,
              "penetrating_damage": 11
            },
            "display": {
              "damage": "356",
              "dot_amount": "250",
              "penetrating_damage": "11"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 384,
              "dot_amount": 300,
              "penetrating_damage": 12
            },
            "display": {
              "damage": "384",
              "dot_amount": "300",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 385,
              "dot_amount": 300,
              "penetrating_damage": 12
            },
            "display": {
              "damage": "385",
              "dot_amount": "300",
              "penetrating_damage": "12"
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
          "伤害：6 级起每级增加 1，最高 1384。",
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
        "description": "inventory_stack_view_wls_xmas2019_handgun_description",
        "full_description": "inventory_stack_view_wls_xmas2019_handgun_description",
        "name": "inventory_stack_view_wls_xmas2019_handgun_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_handgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas2020_handgun"
      },
      "item_id": "wls2_weapon_xmas2020_handgun",
      "localization": {
        "description_key": "inventory_stack_view_wls_xmas2019_handgun_description",
        "en": {
          "description": "Cute pistol decorated with a snowflake",
          "full_description": "Cute pistol decorated with a snowflake",
          "name": "Confetti"
        },
        "full_description_key": "inventory_stack_view_wls_xmas2019_handgun_description",
        "name_key": "inventory_stack_view_wls_xmas2019_handgun_name",
        "zh": {
          "description": "采用雪花作为装饰的袖珍手枪",
          "full_description": "采用雪花作为装饰的袖珍手枪",
          "name": "五彩纸屑"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_4": 3,
            "wls2_resourse_fourfold_nails_4": 2,
            "wls2_resourse_secondary_ingot_4": 4
          },
          "is_legacy": true,
          "learn_exp": 800,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_weapon_xmas2020_handgun"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_4": 3,
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_ingot_4": 4
              },
              "is_legacy": true,
              "learn_exp": 800,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_handgun"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_xmas2020_handgun"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_handgun",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_23"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_handgun",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.1
        },
        "damage": {
          "1": 303,
          "2": 352,
          "3": 380,
          "4": 413,
          "5": 440,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 152,
          "2": 152,
          "3": 152,
          "4": 152,
          "5": 152
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
        "attack_range": 4.5,
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
        "prefab_common_id": "@NewYear_pistol",
        "prefab_pbr_id": "@NewYear_pistol_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2020_handgun",
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
          "shotgun"
        ]
      },
      "image_key": "d740e95ce459396d570cbcfd86b3ddbc04325f56eafb0f3f657b7e6684490418",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "五彩纸屑",
        "name_en": "Confetti",
        "description_zh": "采用雪花作为装饰的袖珍手枪",
        "description_en": "Cute pistol decorated with a snowflake",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_xmas2020_handgun 五彩纸屑 confetti 采用雪花作为装饰的袖珍手枪 cute pistol decorated with a snowflake weapon 武器 pistol weapon weapon_storage quick festive wls2_weapon_xmas2020_handgun"
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
            "value": 0.8333333333333334,
            "unit": "次/秒",
            "display": "0.83 次/秒"
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
            "value": 4.5,
            "unit": "",
            "display": "4.5"
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
              "damage": 303
            },
            "display": {
              "damage": "303"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 352
            },
            "display": {
              "damage": "352"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 380
            },
            "display": {
              "damage": "380"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 413
            },
            "display": {
              "damage": "413"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 440
            },
            "display": {
              "damage": "440"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 441
            },
            "display": {
              "damage": "441"
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
      "category": "tool",
      "gathering_tool": {
        "durability_price": 5,
        "ending_time": 0.5,
        "prefab_common_id": "@Xmas_Ice_Axe",
        "prefab_pbr_id": "@Xmas_Ice_Axe_pbr",
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
        "description": "inventory_stack_view_wls2_weapon_xmas2020_ice_axe_description",
        "full_description": "inventory_stack_view_wls2_weapon_xmas2020_ice_axe_description",
        "name": "inventory_stack_view_wls2_weapon_xmas2020_ice_axe_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary05/wls2_xmas_ice_axe",
        "tags": [
          "wls2_tools_axe_4",
          "wls2_tools_axe_1",
          "wls2_tools_axe_2",
          "wls2_tools_axe_3",
          "wls2_tools_axe_0",
          "hatchet_iron",
          "hatchet",
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 5,
        "tool_id": "wls2_weapon_xmas2020_ice_axe",
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas2020_ice_axe"
      },
      "item_id": "wls2_weapon_xmas2020_ice_axe",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_xmas2020_ice_axe_description",
        "en": {
          "description": "It looks like the queen loved cutting trees",
          "full_description": "It looks like the queen loved cutting trees",
          "name": "Ice queen axe"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_xmas2020_ice_axe_description",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_ice_axe_name",
        "zh": {
          "description": "看起来女王喜欢砍树",
          "full_description": "看起来女王喜欢砍树",
          "name": "冰雪女王斧"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 3,
            "wls2_resourse_secondary_ingot_5": 4,
            "wls2_resourse_secondary_leather_5": 8
          },
          "is_legacy": true,
          "learn_exp": 150,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_weapon_xmas2020_ice_axe"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_primary_coal_3": 3,
                "wls2_resourse_secondary_ingot_5": 4,
                "wls2_resourse_secondary_leather_5": 8
              },
              "is_legacy": true,
              "learn_exp": 150,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_ice_axe"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_xmas2020_ice_axe"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_ice_axe",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_14"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_ice_axe",
      "stat_curves": {
        "damage": {
          "1": 343,
          "2": 388,
          "3": 442,
          "4": 474,
          "5": 526,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
        },
        "penetrating_damage": {
          "1": 17,
          "2": 19,
          "3": 22,
          "4": 24,
          "5": 26
        },
        "slow_modifier": {
          "1": 0.3,
          "2": 0.3,
          "3": 0.35,
          "4": 0.35,
          "5": 0.4
        },
        "slow_time": {
          "1": 1,
          "2": 1.25,
          "3": 1.5,
          "4": 1.75,
          "5": 2
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
      "subcategory": "axe",
      "tags": [
        "wls2_tools_axe_4",
        "wls2_tools_axe_1",
        "wls2_tools_axe_2",
        "wls2_tools_axe_3",
        "wls2_tools_axe_0",
        "hatchet_iron",
        "hatchet",
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
      ],
      "throwing_item": null,
      "tier": 5,
      "tool_id": "wls2_weapon_xmas2020_ice_axe",
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
        "prefab_common_id": "@Xmas_Ice_Axe",
        "prefab_pbr_id": "@Xmas_Ice_Axe_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2020_ice_axe",
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
      "image_key": "43e22e5eeb62a6ddb42554b4b588a7622d674a4efcc1b69ba8a30039e110f418",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "冰雪女王斧",
        "name_en": "Ice queen axe",
        "description_zh": "看起来女王喜欢砍树",
        "description_en": "It looks like the queen loved cutting trees",
        "category_zh": "工具",
        "subcategory": "axe",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_xmas2020_ice_axe 冰雪女王斧 ice queen axe 看起来女王喜欢砍树 it looks like the queen loved cutting trees tool 工具 axe wls2_tools_axe_4 wls2_tools_axe_1 wls2_tools_axe_2 wls2_tools_axe_3 wls2_tools_axe_0 hatchet_iron hatchet weapon weapon_storage quick festive wls2_weapon_xmas2020_ice_axe"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 343,
            "unit": "",
            "display": "343"
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
            "value": 100,
            "unit": "",
            "display": "100"
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
            "value": 5,
            "unit": "点",
            "display": "5 点"
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
              "damage": 343,
              "penetrating_damage": 17,
              "slow_modifier": 0.3,
              "slow_time": 1
            },
            "display": {
              "damage": "343",
              "penetrating_damage": "17",
              "slow_modifier": "30%",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 388,
              "penetrating_damage": 19,
              "slow_modifier": 0.3,
              "slow_time": 1.25
            },
            "display": {
              "damage": "388",
              "penetrating_damage": "19",
              "slow_modifier": "30%",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 442,
              "penetrating_damage": 22,
              "slow_modifier": 0.35,
              "slow_time": 1.5
            },
            "display": {
              "damage": "442",
              "penetrating_damage": "22",
              "slow_modifier": "35%",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 474,
              "penetrating_damage": 24,
              "slow_modifier": 0.35,
              "slow_time": 1.75
            },
            "display": {
              "damage": "474",
              "penetrating_damage": "24",
              "slow_modifier": "35%",
              "slow_time": "1.75 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 526,
              "penetrating_damage": 26,
              "slow_modifier": 0.4,
              "slow_time": 2
            },
            "display": {
              "damage": "526",
              "penetrating_damage": "26",
              "slow_modifier": "40%",
              "slow_time": "2 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 527,
              "penetrating_damage": 26,
              "slow_modifier": 0.4,
              "slow_time": 2
            },
            "display": {
              "damage": "527",
              "penetrating_damage": "26",
              "slow_modifier": "40%",
              "slow_time": "2 秒"
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
          },
          {
            "key": "slow_modifier",
            "label": "目标减速",
            "unit": "%"
          },
          {
            "key": "slow_time",
            "label": "减速持续时间",
            "unit": "秒"
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1526。",
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
        "description": "inventory_stack_view_wls2_weapon_xmas2020_ice_bow_description",
        "full_description": "inventory_stack_view_wls2_weapon_xmas2020_ice_bow_description",
        "name": "inventory_stack_view_wls2_weapon_xmas2020_ice_bow_name",
        "rarity": "common",
        "sorting_group_id": "bow",
        "sprite": "UI_WW_AlphaBinary05/wls2_xmas_ice_bow",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas2020_ice_bow"
      },
      "item_id": "wls2_weapon_xmas2020_ice_bow",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_xmas2020_ice_bow_description",
        "en": {
          "description": "Highly fragile but so elegant",
          "full_description": "Highly fragile but so elegant",
          "name": "Ice queen bow"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_xmas2020_ice_bow_description",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_ice_bow_name",
        "zh": {
          "description": "非常脆弱，但很优雅",
          "full_description": "非常脆弱，但很优雅",
          "name": "冰雪女王弓"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_leather_5": 3,
            "wls2_resourse_secondary_plank_5": 6,
            "wls2_resourse_secondary_rope_5": 4
          },
          "is_legacy": true,
          "learn_exp": 200,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_weapon_xmas2020_ice_bow"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_leather_5": 3,
                "wls2_resourse_secondary_plank_5": 6,
                "wls2_resourse_secondary_rope_5": 4
              },
              "is_legacy": true,
              "learn_exp": 200,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_ice_bow"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_xmas2020_ice_bow"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_ice_bow",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_9"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_ice_bow",
      "stat_curves": {
        "damage": {
          "1": 440,
          "2": 479,
          "3": 517,
          "4": 556,
          "5": 611,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
        },
        "penetrating_damage": {
          "1": 22,
          "2": 24,
          "3": 26,
          "4": 28,
          "5": 31
        },
        "slow_modifier": {
          "1": 0.3,
          "2": 0.3,
          "3": 0.35,
          "4": 0.35,
          "5": 0.4
        },
        "slow_time": {
          "1": 1,
          "2": 1.25,
          "3": 1.5,
          "4": 1.75,
          "5": 2
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
      "subcategory": "bow",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
      ],
      "throwing_item": null,
      "tier": 5,
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
          "painted_bow_shoot"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Xmas_Ice_Bow",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "bow"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2020_ice_bow",
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
          "ranged",
          "bow"
        ]
      },
      "image_key": "1bb6c5fb17dd4696ce4c67a74eef70c430ae7f67e1aa835b226fc1baa7f562f1",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "冰雪女王弓",
        "name_en": "Ice queen bow",
        "description_zh": "非常脆弱，但很优雅",
        "description_en": "Highly fragile but so elegant",
        "category_zh": "武器",
        "subcategory": "bow",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_xmas2020_ice_bow 冰雪女王弓 ice queen bow 非常脆弱，但很优雅 highly fragile but so elegant weapon 武器 bow weapon weapon_storage quick festive wls2_weapon_xmas2020_ice_bow"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 440,
            "unit": "",
            "display": "440"
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
            "value": 100,
            "unit": "",
            "display": "100"
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
              "damage": 440,
              "penetrating_damage": 22,
              "slow_modifier": 0.3,
              "slow_time": 1
            },
            "display": {
              "damage": "440",
              "penetrating_damage": "22",
              "slow_modifier": "30%",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 479,
              "penetrating_damage": 24,
              "slow_modifier": 0.3,
              "slow_time": 1.25
            },
            "display": {
              "damage": "479",
              "penetrating_damage": "24",
              "slow_modifier": "30%",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 517,
              "penetrating_damage": 26,
              "slow_modifier": 0.35,
              "slow_time": 1.5
            },
            "display": {
              "damage": "517",
              "penetrating_damage": "26",
              "slow_modifier": "35%",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 556,
              "penetrating_damage": 28,
              "slow_modifier": 0.35,
              "slow_time": 1.75
            },
            "display": {
              "damage": "556",
              "penetrating_damage": "28",
              "slow_modifier": "35%",
              "slow_time": "1.75 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 611,
              "penetrating_damage": 31,
              "slow_modifier": 0.4,
              "slow_time": 2
            },
            "display": {
              "damage": "611",
              "penetrating_damage": "31",
              "slow_modifier": "40%",
              "slow_time": "2 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 612,
              "penetrating_damage": 31,
              "slow_modifier": 0.4,
              "slow_time": 2
            },
            "display": {
              "damage": "612",
              "penetrating_damage": "31",
              "slow_modifier": "40%",
              "slow_time": "2 秒"
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
          },
          {
            "key": "slow_modifier",
            "label": "目标减速",
            "unit": "%"
          },
          {
            "key": "slow_time",
            "label": "减速持续时间",
            "unit": "秒"
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1611。",
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
        "description": "inventory_stack_view_wls_santa_lollipike_description",
        "full_description": "inventory_stack_view_wls_santa_lollipike_description",
        "name": "inventory_stack_view_wls_santa_lollipike_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary03/wls_santa_lollipike",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas2020_lollipike"
      },
      "item_id": "wls2_weapon_xmas2020_lollipike",
      "localization": {
        "description_key": "inventory_stack_view_wls_santa_lollipike_description",
        "en": {
          "description": "Very, very bad for your enemies health!",
          "full_description": "Very, very bad for your enemies health!",
          "name": "Sharpened lollipop"
        },
        "full_description_key": "inventory_stack_view_wls_santa_lollipike_description",
        "name_key": "inventory_stack_view_wls_santa_lollipike_name",
        "zh": {
          "description": "可对敌人的健康造成非常非常巨大的影响！",
          "full_description": "可对敌人的健康造成非常非常巨大的影响！",
          "name": "尖锐的棒棒糖"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 3,
            "wls2_resourse_secondary_ingot_4": 3,
            "wls2_resourse_secondary_leather_4": 5
          },
          "is_legacy": true,
          "learn_exp": 200,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_weapon_xmas2020_lollipike"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_primary_coal_3": 3,
                "wls2_resourse_secondary_ingot_4": 3,
                "wls2_resourse_secondary_leather_4": 5
              },
              "is_legacy": true,
              "learn_exp": 200,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_lollipike"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_xmas2020_lollipike"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_lollipike",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_24"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_santa_lollipike",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.13,
          "3": 0.15,
          "4": 0.18,
          "5": 0.2
        },
        "damage": {
          "1": 233,
          "2": 256,
          "3": 279,
          "4": 304,
          "5": 327,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 110,
          "2": 110,
          "3": 110,
          "4": 110,
          "5": 110
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
        "attack_damage_time": 0.25,
        "attack_ending_time": 0.55,
        "attack_range": 1,
        "durability_price": 1,
        "hit_empty_sounds": [
          "sounds_weapos_whoosh",
          "sounds_weapos_whoosh"
        ],
        "hit_sounds": [
          "wls_bone_knife"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Santas_Knife",
        "prefab_pbr_id": "@Santas_Knife_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2020_lollipike",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.25,
        "attack_ending_time": 0.55,
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
      "image_key": "32532b84e0b3608e003b9734e36c465659c6e1d98ccab9982f8465adde61ee72",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "尖锐的棒棒糖",
        "name_en": "Sharpened lollipop",
        "description_zh": "可对敌人的健康造成非常非常巨大的影响！",
        "description_en": "Very, very bad for your enemies health!",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_xmas2020_lollipike 尖锐的棒棒糖 sharpened lollipop 可对敌人的健康造成非常非常巨大的影响！ very, very bad for your enemies health! weapon 武器 event_melee weapon weapon_storage quick festive wls2_weapon_xmas2020_lollipike"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 233,
            "unit": "",
            "display": "233"
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
            "value": 110,
            "unit": "",
            "display": "110"
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
              "critical_hit_chance": 0.1,
              "damage": 233
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "233"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 256
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "256"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 279
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "279"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 304
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "304"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 327
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "327"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 328
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "328"
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
          "伤害：6 级起每级增加 1，最高 1327。",
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
        "description": "inventory_stack_view_wls2_weapon_xmas2020_rifle_description",
        "full_description": "inventory_stack_view_wls2_weapon_xmas2020_rifle_description",
        "name": "inventory_stack_view_wls2_weapon_xmas2020_rifle_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary05/wls2_xmas_rifle",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas2020_rifle"
      },
      "item_id": "wls2_weapon_xmas2020_rifle",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_xmas2020_rifle_description",
        "en": {
          "description": "Was meant to be a present, but...",
          "full_description": "Was meant to be a present, but...",
          "name": "Gift musket"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_xmas2020_rifle_description",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_rifle_name",
        "zh": {
          "description": "本来是一份礼物的，但是……",
          "full_description": "本来是一份礼物的，但是……",
          "name": "礼物滑膛枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_5": 4,
            "wls2_resourse_fourfold_nails_4": 5,
            "wls2_resourse_secondary_ingot_5": 6,
            "wls2_resourse_secondary_plank_5": 4
          },
          "is_legacy": true,
          "learn_exp": 200,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_weapon_xmas2020_rifle"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_5": 4,
                "wls2_resourse_fourfold_nails_4": 5,
                "wls2_resourse_secondary_ingot_5": 6,
                "wls2_resourse_secondary_plank_5": 4
              },
              "is_legacy": true,
              "learn_exp": 200,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_rifle"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_xmas2020_rifle"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_rifle",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_4"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_rifle",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.2
        },
        "damage": {
          "1": 372,
          "2": 409,
          "3": 447,
          "4": 483,
          "5": 520,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 145,
          "2": 145,
          "3": 145,
          "4": 145,
          "5": 145
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
      "subcategory": "rifle",
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
        "attack_ending_time": 1,
        "attack_range": 7,
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
        "prefab_common_id": "@Xmas_Rifle",
        "prefab_pbr_id": "@Xmas_Rifle_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2020_rifle",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.3,
        "attack_damage_time": 0.3,
        "attack_ending_time": 1,
        "attack_range": 7,
        "attacks_per_second_inferred": 0.7692307692307692,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "rifle"
        ]
      },
      "image_key": "bea18242dbc7d3b73c33aa0bd0560650205069c41527101457ea668e559c87c1",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "礼物滑膛枪",
        "name_en": "Gift musket",
        "description_zh": "本来是一份礼物的，但是……",
        "description_en": "Was meant to be a present, but...",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_xmas2020_rifle 礼物滑膛枪 gift musket 本来是一份礼物的，但是…… was meant to be a present, but... weapon 武器 rifle weapon weapon_storage quick festive wls2_weapon_xmas2020_rifle"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 372,
            "unit": "",
            "display": "372"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.7692307692307692,
            "unit": "次/秒",
            "display": "0.77 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 145,
            "unit": "",
            "display": "145"
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
            "key": "animal_damage_modifier",
            "label": "对动物伤害加成",
            "value": 0.2,
            "unit": "%",
            "display": "20%"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.3,
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
              "damage": 372,
              "penetrating_damage": 11
            },
            "display": {
              "damage": "372",
              "penetrating_damage": "11"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 409,
              "penetrating_damage": 12
            },
            "display": {
              "damage": "409",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 447,
              "penetrating_damage": 13
            },
            "display": {
              "damage": "447",
              "penetrating_damage": "13"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 483,
              "penetrating_damage": 14
            },
            "display": {
              "damage": "483",
              "penetrating_damage": "14"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 520,
              "penetrating_damage": 16
            },
            "display": {
              "damage": "520",
              "penetrating_damage": "16"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 521,
              "penetrating_damage": 16
            },
            "display": {
              "damage": "521",
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
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1520。",
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
        "description": "inventory_stack_view_wls2_weapon_xmas2020_saber_description",
        "full_description": "inventory_stack_view_wls2_weapon_xmas2020_saber_description",
        "name": "inventory_stack_view_wls2_weapon_xmas2020_saber_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_spear_saber",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_xmas_saber",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas2020_saber"
      },
      "item_id": "wls2_weapon_xmas2020_saber",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_xmas2020_saber_description",
        "en": {
          "description": "Looks like there's something wrong with the name",
          "full_description": "Looks like there's something wrong with the name",
          "name": "Confettirate saber"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_xmas2020_saber_description",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_saber_name",
        "zh": {
          "description": "好像名字哪里出了点问题",
          "full_description": "好像名字哪里出了点问题",
          "name": "五彩纸谢军刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 4,
            "wls2_resourse_secondary_ingot_5": 3,
            "wls2_resourse_secondary_leather_5": 4
          },
          "is_legacy": true,
          "learn_exp": 200,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_weapon_xmas2020_saber"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_primary_coal_3": 4,
                "wls2_resourse_secondary_ingot_5": 3,
                "wls2_resourse_secondary_leather_5": 4
              },
              "is_legacy": true,
              "learn_exp": 200,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_saber"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_xmas2020_saber"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_saber",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_11"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_saber",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.2
        },
        "critical_hit_chance": {
          "1": 0.13,
          "2": 0.15,
          "3": 0.18,
          "4": 0.2,
          "5": 0.25
        },
        "damage": {
          "1": 377,
          "2": 415,
          "3": 453,
          "4": 491,
          "5": 528,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 96,
          "2": 96,
          "3": 96,
          "4": 96,
          "5": 96
        },
        "penetrating_damage": {
          "1": 11,
          "2": 12,
          "3": 14,
          "4": 15,
          "5": 16
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
      "subcategory": "spear_saber",
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
        "attack_range": 1.4,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_saber_empty_hit",
          "wls2_saber_empty_hit"
        ],
        "hit_sounds": [
          "wls2_weapon_melee_saber_hit"
        ],
        "hit_states": {
          "states_count": [
            0,
            2
          ],
          "type": "random"
        },
        "prefab_common_id": "@Xmas_Saber",
        "prefab_pbr_id": "@Xmas_saber_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2020_saber",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.1,
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.4,
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
      "image_key": "d491db8acc1eabfe70b26c34d4be10f9364fbeb48f159dc0a0d0317e79517263",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "五彩纸谢军刀",
        "name_en": "Confettirate saber",
        "description_zh": "好像名字哪里出了点问题",
        "description_en": "Looks like there's something wrong with the name",
        "category_zh": "武器",
        "subcategory": "spear_saber",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_xmas2020_saber 五彩纸谢军刀 confettirate saber 好像名字哪里出了点问题 looks like there's something wrong with the name weapon 武器 spear_saber weapon weapon_storage quick festive wls2_weapon_xmas2020_saber"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 377,
            "unit": "",
            "display": "377"
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
            "value": 96,
            "unit": "",
            "display": "96"
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
            "key": "animal_damage_modifier",
            "label": "对动物伤害加成",
            "value": 0.2,
            "unit": "%",
            "display": "20%"
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
              "critical_hit_chance": 0.13,
              "damage": 377,
              "penetrating_damage": 11
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "377",
              "penetrating_damage": "11"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 415,
              "penetrating_damage": 12
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "415",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 453,
              "penetrating_damage": 14
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "453",
              "penetrating_damage": "14"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 491,
              "penetrating_damage": 15
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "491",
              "penetrating_damage": "15"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 528,
              "penetrating_damage": 16
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "528",
              "penetrating_damage": "16"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 529,
              "penetrating_damage": 16
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "529",
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
          "伤害：6 级起每级增加 1，最高 1528。",
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
        "description": "inventory_stack_view_wls2_weapon_xmas2020_scythe_description",
        "full_description": "inventory_stack_view_wls2_weapon_xmas2020_scythe_description",
        "name": "inventory_stack_view_wls2_weapon_xmas2020_scythe_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_xmas_scythe",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas2020_scythe"
      },
      "item_id": "wls2_weapon_xmas2020_scythe",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_xmas2020_scythe_description",
        "en": {
          "description": "Mows the grass and your enemies' heads. Decorated with ribbon and bell.",
          "full_description": "Mows the grass and your enemies' heads. Decorated with ribbon and bell.",
          "name": "Harvest"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_xmas2020_scythe_description",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_scythe_name",
        "zh": {
          "description": "割掉杂草，还有敌人的脑袋。用缎带和铃铛装饰。",
          "full_description": "割掉杂草，还有敌人的脑袋。用缎带和铃铛装饰。",
          "name": "收割"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_ingot_4": 6,
            "wls2_resourse_secondary_leather_4": 2,
            "wls2_resourse_secondary_plank_4": 4
          },
          "is_legacy": true,
          "learn_exp": 150,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_weapon_xmas2020_scythe"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_4": 6,
                "wls2_resourse_secondary_leather_4": 2,
                "wls2_resourse_secondary_plank_4": 4
              },
              "is_legacy": true,
              "learn_exp": 150,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_scythe"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_xmas2020_scythe"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_scythe",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_2"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_scythe",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.12,
          "3": 0.14,
          "4": 0.16,
          "5": 0.18
        },
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
        "penetrating_damage": {
          "1": 11,
          "2": 12,
          "3": 14,
          "4": 15,
          "5": 16
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
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.3,
        "attack_ending_time": 1,
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
        "prefab_common_id": "@Xmas_Scythe",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2020_scythe",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.3,
        "attack_damage_time": 0.3,
        "attack_ending_time": 1,
        "attack_range": 2,
        "attacks_per_second_inferred": 0.7692307692307692,
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
      "image_key": "8f4ef27aa5323bd74755b5bae00cafd9b5ad3b034836afa2581e68f978551e91",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "收割",
        "name_en": "Harvest",
        "description_zh": "割掉杂草，还有敌人的脑袋。用缎带和铃铛装饰。",
        "description_en": "Mows the grass and your enemies' heads. Decorated with ribbon and bell.",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_xmas2020_scythe 收割 harvest 割掉杂草，还有敌人的脑袋。用缎带和铃铛装饰。 mows the grass and your enemies' heads. decorated with ribbon and bell. weapon 武器 event_melee weapon weapon_storage quick festive wls2_weapon_xmas2020_scythe"
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
            "value": 0.7692307692307692,
            "unit": "次/秒",
            "display": "0.77 次/秒"
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
            "value": 1.3,
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
              "critical_hit_chance": 0.1,
              "damage": 358,
              "penetrating_damage": 11,
              "slow_time": 0.75
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "358",
              "penetrating_damage": "11",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.12,
              "damage": 407,
              "penetrating_damage": 12,
              "slow_time": 1
            },
            "display": {
              "critical_hit_chance": "12%",
              "damage": "407",
              "penetrating_damage": "12",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.14,
              "damage": 468,
              "penetrating_damage": 14,
              "slow_time": 1.25
            },
            "display": {
              "critical_hit_chance": "14%",
              "damage": "468",
              "penetrating_damage": "14",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.16,
              "damage": 490,
              "penetrating_damage": 15,
              "slow_time": 1.5
            },
            "display": {
              "critical_hit_chance": "16%",
              "damage": "490",
              "penetrating_damage": "15",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 523,
              "penetrating_damage": 16,
              "slow_time": 1.75
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "523",
              "penetrating_damage": "16",
              "slow_time": "1.75 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 524,
              "penetrating_damage": 16,
              "slow_time": 1.75
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "524",
              "penetrating_damage": "16",
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
        "description": "inventory_stack_view_wls_santa_shotgun_description",
        "full_description": "inventory_stack_view_wls_santa_shotgun_description",
        "name": "inventory_stack_view_wls_santa_shotgun_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary03/wls_santa_shotgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas2020_shotgun"
      },
      "item_id": "wls2_weapon_xmas2020_shotgun",
      "localization": {
        "description_key": "inventory_stack_view_wls_santa_shotgun_description",
        "en": {
          "description": "Santa always brings presents for good kids, but this year he's also made a gun for the bad ones! Wide area of effect.",
          "full_description": "Santa always brings presents for good kids, but this year he's also made a gun for the bad ones! Wide area of effect.",
          "name": "Santa's gun"
        },
        "full_description_key": "inventory_stack_view_wls_santa_shotgun_description",
        "name_key": "inventory_stack_view_wls_santa_shotgun_name",
        "zh": {
          "description": "通常圣诞老人会给好孩子美好的礼物，但这次他为那些坏蛋准备了厉害的枪支。拥有范围效果。",
          "full_description": "通常圣诞老人会给好孩子美好的礼物，但这次他为那些坏蛋准备了厉害的枪支。拥有范围效果。",
          "name": "圣诞老人的枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_4": 3,
            "wls2_resourse_fourfold_nails_4": 2,
            "wls2_resourse_secondary_ingot_4": 8,
            "wls2_resourse_secondary_plank_5": 5
          },
          "is_legacy": true,
          "learn_exp": 150,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_weapon_xmas2020_shotgun"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_4": 3,
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_ingot_4": 8,
                "wls2_resourse_secondary_plank_5": 5
              },
              "is_legacy": true,
              "learn_exp": 150,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_shotgun"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_xmas2020_shotgun"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_shotgun",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_29"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_santa_shotgun",
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
          "1": 125,
          "2": 125,
          "3": 125,
          "4": 125,
          "5": 125
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
        "prefab_common_id": "@Santas_Shotgun",
        "prefab_pbr_id": "@Santas_Shotgun_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2020_shotgun",
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
          "shotgun"
        ]
      },
      "image_key": "3eaafa2b81d54b1abd5eb97d117ad6262857f0e5bc6bf148e6d37296fafeb7c5",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞老人的枪",
        "name_en": "Santa's gun",
        "description_zh": "通常圣诞老人会给好孩子美好的礼物，但这次他为那些坏蛋准备了厉害的枪支。拥有范围效果。",
        "description_en": "Santa always brings presents for good kids, but this year he's also made a gun for the bad ones! Wide area of effect.",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_xmas2020_shotgun 圣诞老人的枪 santa's gun 通常圣诞老人会给好孩子美好的礼物，但这次他为那些坏蛋准备了厉害的枪支。拥有范围效果。 santa always brings presents for good kids, but this year he's also made a gun for the bad ones! wide area of effect. weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_xmas2020_shotgun"
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
        "description": "inventory_stack_view_wls_santa_staff_description",
        "full_description": "inventory_stack_view_wls_santa_staff_description",
        "name": "inventory_stack_view_wls_santa_staff_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary03/wls_santa_staff",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas2020_wooden_staff"
      },
      "item_id": "wls2_weapon_xmas2020_wooden_staff",
      "localization": {
        "description_key": "inventory_stack_view_wls_santa_staff_description",
        "en": {
          "description": "Can be used not only for walking assistance, but for knocking down outlaws as well.",
          "full_description": "Can be used not only for walking assistance, but for knocking down outlaws as well.",
          "name": "Santa's Staff"
        },
        "full_description_key": "inventory_stack_view_wls_santa_staff_description",
        "name_key": "inventory_stack_view_wls_santa_staff_name",
        "zh": {
          "description": "不仅能用来辅助行走，还能用来对抗不法之徒。",
          "full_description": "不仅能用来辅助行走，还能用来对抗不法之徒。",
          "name": "圣诞老人的拐杖"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_leather_3": 4,
            "wls2_resourse_secondary_plank_2": 4,
            "wls2_resourse_secondary_rope_2": 2
          },
          "is_legacy": true,
          "learn_exp": 100,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_weapon_xmas2020_wooden_staff"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_leather_3": 4,
                "wls2_resourse_secondary_plank_2": 4,
                "wls2_resourse_secondary_rope_2": 2
              },
              "is_legacy": true,
              "learn_exp": 100,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_wooden_staff"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_xmas2020_wooden_staff"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2020_wooden_staff",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_1"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_santa_staff",
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
          "type": "simple"
        },
        "attack_damage_time": 0.6,
        "attack_ending_time": 0.8,
        "attack_range": 2,
        "durability_price": 1,
        "hit_empty_sounds": [
          "santa_staff",
          "santa_staff"
        ],
        "hit_sounds": [
          "wls2_weapon_melee_slow_0"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Santas_Stick",
        "prefab_pbr_id": "@Santas_Stick_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2020_wooden_staff",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.4,
        "attack_damage_time": 0.6,
        "attack_ending_time": 0.8,
        "attack_range": 2,
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
          "blunt"
        ]
      },
      "image_key": "ff9a00a5491c0b31c4e344dc3d6293f5ec71ec1d70a2dbd43520c7dc737ffa41",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞老人的拐杖",
        "name_en": "Santa's Staff",
        "description_zh": "不仅能用来辅助行走，还能用来对抗不法之徒。",
        "description_en": "Can be used not only for walking assistance, but for knocking down outlaws as well.",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_xmas2020_wooden_staff 圣诞老人的拐杖 santa's staff 不仅能用来辅助行走，还能用来对抗不法之徒。 can be used not only for walking assistance, but for knocking down outlaws as well. weapon 武器 event_melee weapon weapon_storage quick festive wls2_weapon_xmas2020_wooden_staff"
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
            "value": 0.7142857142857143,
            "unit": "次/秒",
            "display": "0.71 次/秒"
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
            "value": 2,
            "unit": "",
            "display": "2"
          }
        ],
        "fixed": [
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
        "description": "wls2_weapon_xmas2024_shotgun_description",
        "full_description": "wls2_weapon_xmas2024_shotgun_description",
        "name": "wls2_weapon_xmas2024_shotgun_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary08/wls2_xmas_24_shotgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 2,
        "type": "durability",
        "weapon_id": "wls2_weapon_xmas2024_shotgun_2"
      },
      "item_id": "wls2_weapon_xmas2024_shotgun_2",
      "localization": {
        "description_key": "wls2_weapon_xmas2024_shotgun_description",
        "en": {
          "description": "No one can stop the power of nature",
          "full_description": "No one can stop the power of nature",
          "name": "Blizzard"
        },
        "full_description_key": "wls2_weapon_xmas2024_shotgun_description",
        "name_key": "wls2_weapon_xmas2024_shotgun_name",
        "zh": {
          "description": "没有人能阻止自然的力量",
          "full_description": "没有人能阻止自然的力量",
          "name": "暴风雪"
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
                "wls2_resourse_fourfold_gunparts_2": 4,
                "wls2_resourse_fourfold_nails_2": 2,
                "wls2_resourse_secondary_ingot_2": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2024_shotgun_2"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas2024_shotgun_2_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_xmas_24_shotgun",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
        },
        "damage": {
          "1": 346,
          "2": 381,
          "3": 415,
          "4": 449,
          "5": 485,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
        },
        "slow_modifier": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
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
      "subcategory": "shotgun",
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
        "prefab_common_id": "@Shotgun_Winchester_Xmas_24_M1883",
        "prefab_pbr_id": "@Shotgun_Winchester_Xmas_24_M1883_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2024_shotgun_2",
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
      "image_key": "a9b84b7752f67ea6e3a9a3123f0817d61b81d6a079e2cefec840bddc456043fb",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "暴风雪",
        "name_en": "Blizzard",
        "description_zh": "没有人能阻止自然的力量",
        "description_en": "No one can stop the power of nature",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_xmas2024_shotgun_2 暴风雪 blizzard 没有人能阻止自然的力量 no one can stop the power of nature weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_xmas2024_shotgun_2"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 346,
            "unit": "",
            "display": "346"
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
              "damage": 346,
              "slow_modifier": 0.1,
              "slow_time": 0.5
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "346",
              "slow_modifier": "10%",
              "slow_time": "0.5 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 381,
              "slow_modifier": 0.15,
              "slow_time": 0.75
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "381",
              "slow_modifier": "15%",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 415,
              "slow_modifier": 0.2,
              "slow_time": 1
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "415",
              "slow_modifier": "20%",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 449,
              "slow_modifier": 0.25,
              "slow_time": 1.25
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "449",
              "slow_modifier": "25%",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 485,
              "slow_modifier": 0.3,
              "slow_time": 1.5
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "485",
              "slow_modifier": "30%",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 486,
              "slow_modifier": 0.3,
              "slow_time": 1.5
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "486",
              "slow_modifier": "30%",
              "slow_time": "1.5 秒"
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
            "key": "slow_modifier",
            "label": "目标减速",
            "unit": "%"
          },
          {
            "key": "slow_time",
            "label": "减速持续时间",
            "unit": "秒"
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
        "description": "wls2_weapon_xmas2024_shotgun_description",
        "full_description": "wls2_weapon_xmas2024_shotgun_description",
        "name": "wls2_weapon_xmas2024_shotgun_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary08/wls2_xmas_24_shotgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "weapon_id": "wls2_weapon_xmas2024_shotgun_3"
      },
      "item_id": "wls2_weapon_xmas2024_shotgun_3",
      "localization": {
        "description_key": "wls2_weapon_xmas2024_shotgun_description",
        "en": {
          "description": "No one can stop the power of nature",
          "full_description": "No one can stop the power of nature",
          "name": "Blizzard"
        },
        "full_description_key": "wls2_weapon_xmas2024_shotgun_description",
        "name_key": "wls2_weapon_xmas2024_shotgun_name",
        "zh": {
          "description": "没有人能阻止自然的力量",
          "full_description": "没有人能阻止自然的力量",
          "name": "暴风雪"
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
                "wls2_resourse_fourfold_gunparts_3": 4,
                "wls2_resourse_fourfold_nails_3": 2,
                "wls2_resourse_secondary_ingot_3": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2024_shotgun_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas2024_shotgun_3_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_xmas_24_shotgun",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
        },
        "damage": {
          "1": 572,
          "2": 629,
          "3": 686,
          "4": 744,
          "5": 801,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 180,
          "2": 180,
          "3": 180,
          "4": 180,
          "5": 180
        },
        "slow_modifier": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
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
      "subcategory": "shotgun",
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
        "prefab_common_id": "@Shotgun_Winchester_Xmas_24_M1883",
        "prefab_pbr_id": "@Shotgun_Winchester_Xmas_24_M1883_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2024_shotgun_3",
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
      "image_key": "a9b84b7752f67ea6e3a9a3123f0817d61b81d6a079e2cefec840bddc456043fb",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "暴风雪",
        "name_en": "Blizzard",
        "description_zh": "没有人能阻止自然的力量",
        "description_en": "No one can stop the power of nature",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_xmas2024_shotgun_3 暴风雪 blizzard 没有人能阻止自然的力量 no one can stop the power of nature weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_xmas2024_shotgun_3"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 572,
            "unit": "",
            "display": "572"
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
            "value": 180,
            "unit": "",
            "display": "180"
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
              "damage": 572,
              "slow_modifier": 0.1,
              "slow_time": 0.5
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "572",
              "slow_modifier": "10%",
              "slow_time": "0.5 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 629,
              "slow_modifier": 0.15,
              "slow_time": 0.75
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "629",
              "slow_modifier": "15%",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 686,
              "slow_modifier": 0.2,
              "slow_time": 1
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "686",
              "slow_modifier": "20%",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 744,
              "slow_modifier": 0.25,
              "slow_time": 1.25
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "744",
              "slow_modifier": "25%",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 801,
              "slow_modifier": 0.3,
              "slow_time": 1.5
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "801",
              "slow_modifier": "30%",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 802,
              "slow_modifier": 0.3,
              "slow_time": 1.5
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "802",
              "slow_modifier": "30%",
              "slow_time": "1.5 秒"
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
            "key": "slow_modifier",
            "label": "目标减速",
            "unit": "%"
          },
          {
            "key": "slow_time",
            "label": "减速持续时间",
            "unit": "秒"
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1801。",
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
        "description": "wls2_weapon_xmas2024_shotgun_description",
        "full_description": "wls2_weapon_xmas2024_shotgun_description",
        "name": "wls2_weapon_xmas2024_shotgun_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary08/wls2_xmas_24_shotgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "weapon_id": "wls2_weapon_xmas2024_shotgun_4"
      },
      "item_id": "wls2_weapon_xmas2024_shotgun_4",
      "localization": {
        "description_key": "wls2_weapon_xmas2024_shotgun_description",
        "en": {
          "description": "No one can stop the power of nature",
          "full_description": "No one can stop the power of nature",
          "name": "Blizzard"
        },
        "full_description_key": "wls2_weapon_xmas2024_shotgun_description",
        "name_key": "wls2_weapon_xmas2024_shotgun_name",
        "zh": {
          "description": "没有人能阻止自然的力量",
          "full_description": "没有人能阻止自然的力量",
          "name": "暴风雪"
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
                "wls2_resourse_fourfold_gunparts_4": 4,
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_ingot_4": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2024_shotgun_4"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas2024_shotgun_4_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_xmas_24_shotgun",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
        },
        "damage": {
          "1": 867,
          "2": 930,
          "3": 994,
          "4": 1059,
          "5": 1122,
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
          "1": 27,
          "2": 29,
          "3": 31,
          "4": 32,
          "5": 34
        },
        "slow_modifier": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
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
        "prefab_common_id": "@Shotgun_Winchester_Xmas_24_M1883",
        "prefab_pbr_id": "@Shotgun_Winchester_Xmas_24_M1883_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2024_shotgun_4",
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
      "image_key": "a9b84b7752f67ea6e3a9a3123f0817d61b81d6a079e2cefec840bddc456043fb",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "暴风雪",
        "name_en": "Blizzard",
        "description_zh": "没有人能阻止自然的力量",
        "description_en": "No one can stop the power of nature",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_xmas2024_shotgun_4 暴风雪 blizzard 没有人能阻止自然的力量 no one can stop the power of nature weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_xmas2024_shotgun_4"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 867,
            "unit": "",
            "display": "867"
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
              "damage": 867,
              "penetrating_damage": 27,
              "slow_modifier": 0.1,
              "slow_time": 0.5
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "867",
              "penetrating_damage": "27",
              "slow_modifier": "10%",
              "slow_time": "0.5 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 930,
              "penetrating_damage": 29,
              "slow_modifier": 0.15,
              "slow_time": 0.75
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "930",
              "penetrating_damage": "29",
              "slow_modifier": "15%",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 994,
              "penetrating_damage": 31,
              "slow_modifier": 0.2,
              "slow_time": 1
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "994",
              "penetrating_damage": "31",
              "slow_modifier": "20%",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 1059,
              "penetrating_damage": 32,
              "slow_modifier": 0.25,
              "slow_time": 1.25
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "1059",
              "penetrating_damage": "32",
              "slow_modifier": "25%",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 1122,
              "penetrating_damage": 34,
              "slow_modifier": 0.3,
              "slow_time": 1.5
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "1122",
              "penetrating_damage": "34",
              "slow_modifier": "30%",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 1123,
              "penetrating_damage": 34,
              "slow_modifier": 0.3,
              "slow_time": 1.5
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "1123",
              "penetrating_damage": "34",
              "slow_modifier": "30%",
              "slow_time": "1.5 秒"
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
          },
          {
            "key": "slow_modifier",
            "label": "目标减速",
            "unit": "%"
          },
          {
            "key": "slow_time",
            "label": "减速持续时间",
            "unit": "秒"
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 2122。",
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
        "description": "wls2_weapon_xmas2024_shotgun_description",
        "full_description": "wls2_weapon_xmas2024_shotgun_description",
        "name": "wls2_weapon_xmas2024_shotgun_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary08/wls2_xmas_24_shotgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 5,
        "type": "durability",
        "weapon_id": "wls2_weapon_xmas2024_shotgun_5"
      },
      "item_id": "wls2_weapon_xmas2024_shotgun_5",
      "localization": {
        "description_key": "wls2_weapon_xmas2024_shotgun_description",
        "en": {
          "description": "No one can stop the power of nature",
          "full_description": "No one can stop the power of nature",
          "name": "Blizzard"
        },
        "full_description_key": "wls2_weapon_xmas2024_shotgun_description",
        "name_key": "wls2_weapon_xmas2024_shotgun_name",
        "zh": {
          "description": "没有人能阻止自然的力量",
          "full_description": "没有人能阻止自然的力量",
          "name": "暴风雪"
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
                "wls2_resourse_fourfold_gunparts_5": 4,
                "wls2_resourse_fourfold_nails_5": 2,
                "wls2_resourse_secondary_ingot_5": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2024_shotgun_5"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas2024_shotgun_5_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_xmas_24_shotgun",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
        },
        "damage": {
          "1": 1382,
          "2": 1521,
          "3": 1659,
          "4": 1797,
          "5": 1935,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 330,
          "2": 330,
          "3": 330,
          "4": 330,
          "5": 330
        },
        "penetrating_damage": {
          "1": 35,
          "2": 38,
          "3": 41,
          "4": 45,
          "5": 48
        },
        "slow_modifier": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
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
      "subcategory": "shotgun",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
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
        "prefab_common_id": "@Shotgun_Winchester_Xmas_24_M1883",
        "prefab_pbr_id": "@Shotgun_Winchester_Xmas_24_M1883_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2024_shotgun_5",
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
      "image_key": "a9b84b7752f67ea6e3a9a3123f0817d61b81d6a079e2cefec840bddc456043fb",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "暴风雪",
        "name_en": "Blizzard",
        "description_zh": "没有人能阻止自然的力量",
        "description_en": "No one can stop the power of nature",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_xmas2024_shotgun_5 暴风雪 blizzard 没有人能阻止自然的力量 no one can stop the power of nature weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_xmas2024_shotgun_5"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1382,
            "unit": "",
            "display": "1382"
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
              "damage": 1382,
              "penetrating_damage": 35,
              "slow_modifier": 0.1,
              "slow_time": 0.5
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "1382",
              "penetrating_damage": "35",
              "slow_modifier": "10%",
              "slow_time": "0.5 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 1521,
              "penetrating_damage": 38,
              "slow_modifier": 0.15,
              "slow_time": 0.75
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "1521",
              "penetrating_damage": "38",
              "slow_modifier": "15%",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 1659,
              "penetrating_damage": 41,
              "slow_modifier": 0.2,
              "slow_time": 1
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "1659",
              "penetrating_damage": "41",
              "slow_modifier": "20%",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 1797,
              "penetrating_damage": 45,
              "slow_modifier": 0.25,
              "slow_time": 1.25
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "1797",
              "penetrating_damage": "45",
              "slow_modifier": "25%",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 1935,
              "penetrating_damage": 48,
              "slow_modifier": 0.3,
              "slow_time": 1.5
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "1935",
              "penetrating_damage": "48",
              "slow_modifier": "30%",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 1936,
              "penetrating_damage": 48,
              "slow_modifier": 0.3,
              "slow_time": 1.5
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "1936",
              "penetrating_damage": "48",
              "slow_modifier": "30%",
              "slow_time": "1.5 秒"
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
          },
          {
            "key": "slow_modifier",
            "label": "目标减速",
            "unit": "%"
          },
          {
            "key": "slow_time",
            "label": "减速持续时间",
            "unit": "秒"
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 2935。",
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
        "description": "wls2_weapon_xmas2024_shotgun_description",
        "full_description": "wls2_weapon_xmas2024_shotgun_description",
        "name": "wls2_weapon_xmas2024_shotgun_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary08/wls2_xmas_24_shotgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 6,
        "type": "durability",
        "weapon_id": "wls2_weapon_xmas2024_shotgun_6"
      },
      "item_id": "wls2_weapon_xmas2024_shotgun_6",
      "localization": {
        "description_key": "wls2_weapon_xmas2024_shotgun_description",
        "en": {
          "description": "No one can stop the power of nature",
          "full_description": "No one can stop the power of nature",
          "name": "Blizzard"
        },
        "full_description_key": "wls2_weapon_xmas2024_shotgun_description",
        "name_key": "wls2_weapon_xmas2024_shotgun_name",
        "zh": {
          "description": "没有人能阻止自然的力量",
          "full_description": "没有人能阻止自然的力量",
          "name": "暴风雪"
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
                "wls2_resourse_fourfold_gunparts_6": 4,
                "wls2_resourse_fourfold_nails_6": 2,
                "wls2_resourse_secondary_ingot_6": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2024_shotgun_6"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas2024_shotgun_6_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_xmas_24_shotgun",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
        },
        "damage": {
          "1": 2211,
          "2": 2432,
          "3": 2653,
          "4": 2875,
          "5": 3096,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 330,
          "2": 330,
          "3": 330,
          "4": 330,
          "5": 330
        },
        "penetrating_damage": {
          "1": 66,
          "2": 73,
          "3": 80,
          "4": 86,
          "5": 93
        },
        "slow_modifier": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
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
      "subcategory": "shotgun",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
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
        "prefab_common_id": "@Shotgun_Winchester_Xmas_24_M1883",
        "prefab_pbr_id": "@Shotgun_Winchester_Xmas_24_M1883_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2024_shotgun_6",
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
      "image_key": "a9b84b7752f67ea6e3a9a3123f0817d61b81d6a079e2cefec840bddc456043fb",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "暴风雪",
        "name_en": "Blizzard",
        "description_zh": "没有人能阻止自然的力量",
        "description_en": "No one can stop the power of nature",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_xmas2024_shotgun_6 暴风雪 blizzard 没有人能阻止自然的力量 no one can stop the power of nature weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_xmas2024_shotgun_6"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 2211,
            "unit": "",
            "display": "2211"
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
              "damage": 2211,
              "penetrating_damage": 66,
              "slow_modifier": 0.1,
              "slow_time": 0.5
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "2211",
              "penetrating_damage": "66",
              "slow_modifier": "10%",
              "slow_time": "0.5 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 2432,
              "penetrating_damage": 73,
              "slow_modifier": 0.15,
              "slow_time": 0.75
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "2432",
              "penetrating_damage": "73",
              "slow_modifier": "15%",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 2653,
              "penetrating_damage": 80,
              "slow_modifier": 0.2,
              "slow_time": 1
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "2653",
              "penetrating_damage": "80",
              "slow_modifier": "20%",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 2875,
              "penetrating_damage": 86,
              "slow_modifier": 0.25,
              "slow_time": 1.25
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "2875",
              "penetrating_damage": "86",
              "slow_modifier": "25%",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 3096,
              "penetrating_damage": 93,
              "slow_modifier": 0.3,
              "slow_time": 1.5
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "3096",
              "penetrating_damage": "93",
              "slow_modifier": "30%",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 3097,
              "penetrating_damage": 93,
              "slow_modifier": 0.3,
              "slow_time": 1.5
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "3097",
              "penetrating_damage": "93",
              "slow_modifier": "30%",
              "slow_time": "1.5 秒"
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
          },
          {
            "key": "slow_modifier",
            "label": "目标减速",
            "unit": "%"
          },
          {
            "key": "slow_time",
            "label": "减速持续时间",
            "unit": "秒"
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 4096。",
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
        "description": "wls2_weapon_xmas2024_shotgun_description",
        "full_description": "wls2_weapon_xmas2024_shotgun_description",
        "name": "wls2_weapon_xmas2024_shotgun_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary08/wls2_xmas_24_shotgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 7,
        "type": "durability",
        "weapon_id": "wls2_weapon_xmas2024_shotgun_7"
      },
      "item_id": "wls2_weapon_xmas2024_shotgun_7",
      "localization": {
        "description_key": "wls2_weapon_xmas2024_shotgun_description",
        "en": {
          "description": "No one can stop the power of nature",
          "full_description": "No one can stop the power of nature",
          "name": "Blizzard"
        },
        "full_description_key": "wls2_weapon_xmas2024_shotgun_description",
        "name_key": "wls2_weapon_xmas2024_shotgun_name",
        "zh": {
          "description": "没有人能阻止自然的力量",
          "full_description": "没有人能阻止自然的力量",
          "name": "暴风雪"
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
                "wls2_resourse_fourfold_gunparts_7": 4,
                "wls2_resourse_fourfold_nails_7": 2,
                "wls2_resourse_secondary_ingot_7": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas2024_shotgun_7"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas2024_shotgun_7_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_xmas_24_shotgun",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
        },
        "damage": {
          "1": 3538,
          "2": 3892,
          "3": 4246,
          "4": 4599,
          "5": 4953,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 330,
          "2": 330,
          "3": 330,
          "4": 330,
          "5": 330
        },
        "penetrating_damage": {
          "1": 106,
          "2": 117,
          "3": 127,
          "4": 138,
          "5": 148
        },
        "slow_modifier": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
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
      "subcategory": "shotgun",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
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
        "prefab_common_id": "@Shotgun_Winchester_Xmas_24_M1883",
        "prefab_pbr_id": "@Shotgun_Winchester_Xmas_24_M1883_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_xmas2024_shotgun_7",
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
      "image_key": "a9b84b7752f67ea6e3a9a3123f0817d61b81d6a079e2cefec840bddc456043fb",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "暴风雪",
        "name_en": "Blizzard",
        "description_zh": "没有人能阻止自然的力量",
        "description_en": "No one can stop the power of nature",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_xmas2024_shotgun_7 暴风雪 blizzard 没有人能阻止自然的力量 no one can stop the power of nature weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_xmas2024_shotgun_7"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 3538,
            "unit": "",
            "display": "3538"
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
              "damage": 3538,
              "penetrating_damage": 106,
              "slow_modifier": 0.1,
              "slow_time": 0.5
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "3538",
              "penetrating_damage": "106",
              "slow_modifier": "10%",
              "slow_time": "0.5 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 3892,
              "penetrating_damage": 117,
              "slow_modifier": 0.15,
              "slow_time": 0.75
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "3892",
              "penetrating_damage": "117",
              "slow_modifier": "15%",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 4246,
              "penetrating_damage": 127,
              "slow_modifier": 0.2,
              "slow_time": 1
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "4246",
              "penetrating_damage": "127",
              "slow_modifier": "20%",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 4599,
              "penetrating_damage": 138,
              "slow_modifier": 0.25,
              "slow_time": 1.25
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "4599",
              "penetrating_damage": "138",
              "slow_modifier": "25%",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 4953,
              "penetrating_damage": 148,
              "slow_modifier": 0.3,
              "slow_time": 1.5
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "4953",
              "penetrating_damage": "148",
              "slow_modifier": "30%",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 4954,
              "penetrating_damage": 148,
              "slow_modifier": 0.3,
              "slow_time": 1.5
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "4954",
              "penetrating_damage": "148",
              "slow_modifier": "30%",
              "slow_time": "1.5 秒"
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
          },
          {
            "key": "slow_modifier",
            "label": "目标减速",
            "unit": "%"
          },
          {
            "key": "slow_time",
            "label": "减速持续时间",
            "unit": "秒"
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 5953。",
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
      "category": "tool",
      "gathering_tool": {
        "durability_price": 1,
        "ending_time": 0.5,
        "prefab_common_id": "@NewYear_Hatchet",
        "prefab_pbr_id": "@NewYear_Hatchet_pbr",
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
        "description": "inventory_stack_view_wls_xmas_21_axe_description",
        "full_description": "inventory_stack_view_wls_xmas_21_axe_description",
        "name": "inventory_stack_view_wls_xmas_21_axe_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_axe",
        "tags": [
          "wls2_tools_axe_4",
          "wls2_tools_axe_1",
          "wls2_tools_axe_2",
          "wls2_tools_axe_3",
          "wls2_tools_axe_0",
          "hatchet_iron",
          "hatchet",
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 2,
        "tool_id": "wls2_weapon_xmas_21_axe",
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas_21_axe"
      },
      "item_id": "wls2_weapon_xmas_21_axe",
      "localization": {
        "description_key": "inventory_stack_view_wls_xmas_21_axe_description",
        "en": {
          "description": "Chopping wood is also a celebration!",
          "full_description": "Chopping wood is also a celebration!",
          "name": "Festive axe"
        },
        "full_description_key": "inventory_stack_view_wls_xmas_21_axe_description",
        "name_key": "inventory_stack_view_wls_xmas_21_axe_name",
        "zh": {
          "description": "劈柴也是一种庆祝！",
          "full_description": "劈柴也是一种庆祝！",
          "name": "圣诞斧"
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
                "wls2_resourse_primary_coal_1": 4,
                "wls2_resourse_secondary_ingot_2": 3,
                "wls2_resourse_secondary_leather_2": 3,
                "wls2_resourse_secondary_plank_2": 3
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_axe"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas_21_axe_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_axe",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
        },
        "damage": {
          "1": 220,
          "2": 240,
          "3": 260,
          "4": 280,
          "5": 300,
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
          "1": 85,
          "2": 85,
          "3": 85,
          "4": 85,
          "5": 85
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
      "subcategory": "axe",
      "tags": [
        "wls2_tools_axe_4",
        "wls2_tools_axe_1",
        "wls2_tools_axe_2",
        "wls2_tools_axe_3",
        "wls2_tools_axe_0",
        "hatchet_iron",
        "hatchet",
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
      ],
      "throwing_item": null,
      "tier": 2,
      "tool_id": "wls2_weapon_xmas_21_axe",
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.6,
        "attack_ending_time": 0.8,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_axe_hit"
        ],
        "hit_states": {
          "states_count": [
            0,
            1
          ],
          "type": "random"
        },
        "prefab_common_id": "@NewYear_Hatchet",
        "prefab_pbr_id": "@NewYear_Hatchet_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_xmas_21_axe",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.4,
        "attack_damage_time": 0.6,
        "attack_ending_time": 0.8,
        "attack_range": 1.5,
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
      "image_key": "46b07a3b4f888bc02102391dc5f9c675361bc64779ef8f43b712c2c28c555818",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞斧",
        "name_en": "Festive axe",
        "description_zh": "劈柴也是一种庆祝！",
        "description_en": "Chopping wood is also a celebration!",
        "category_zh": "工具",
        "subcategory": "axe",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_xmas_21_axe 圣诞斧 festive axe 劈柴也是一种庆祝！ chopping wood is also a celebration! tool 工具 axe wls2_tools_axe_4 wls2_tools_axe_1 wls2_tools_axe_2 wls2_tools_axe_3 wls2_tools_axe_0 hatchet_iron hatchet weapon weapon_storage quick festive wls2_weapon_xmas_21_axe"
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
            "value": 0.7142857142857143,
            "unit": "次/秒",
            "display": "0.71 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 85,
            "unit": "",
            "display": "85"
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
              "critical_hit_chance": 0.1,
              "damage": 220,
              "dot_amount": 100
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "220",
              "dot_amount": "100"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 240,
              "dot_amount": 150
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "240",
              "dot_amount": "150"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 260,
              "dot_amount": 200
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "260",
              "dot_amount": "200"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 280,
              "dot_amount": 250
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "280",
              "dot_amount": "250"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 300,
              "dot_amount": 300
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "300",
              "dot_amount": "300"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 301,
              "dot_amount": 300
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "301",
              "dot_amount": "300"
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
          "伤害：6 级起每级增加 1，最高 1300。",
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
        "description": "inventory_stack_view_wls2_weapon_xmas2020_bell_staff_description",
        "full_description": "inventory_stack_view_wls2_weapon_xmas2020_bell_staff_description",
        "name": "inventory_stack_view_wls2_weapon_xmas2020_bell_staff_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary05/wls2_xmas_bell_staff",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas_21_bell_staff"
      },
      "item_id": "wls2_weapon_xmas_21_bell_staff",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_xmas2020_bell_staff_description",
        "en": {
          "description": "Each hit is accompanied by a clear sound of bells",
          "full_description": "Each hit is accompanied by a clear sound of bells",
          "name": "Ding-ding"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_xmas2020_bell_staff_description",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_bell_staff_name",
        "zh": {
          "description": "每一击都伴随着清脆的铃铛声",
          "full_description": "每一击都伴随着清脆的铃铛声",
          "name": "叮叮"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_ingot_2": 4,
            "wls2_resourse_secondary_plank_3": 2,
            "wls2_resourse_tertiary_clothroll_3": 2
          },
          "result": {
            "inventory_stack_id": "wls2_weapon_xmas_21_bell_staff"
          },
          "type": "recycle"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_2": 4,
                "wls2_resourse_secondary_plank_3": 2,
                "wls2_resourse_tertiary_clothroll_3": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_bell_staff"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas_21_bell_staff"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_bell_staff",
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
          "1": 204,
          "2": 237,
          "3": 270,
          "4": 303,
          "5": 336,
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
        "attack_damage_time": 0.4,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_bellstick_swing",
          "wls_bellstick_swing"
        ],
        "hit_sounds": [
          "wls_bellstick_hit",
          "wls_bellstick_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Xmas_Bell_Staff",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_weapon_xmas_21_bell_staff",
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
          "blunt"
        ]
      },
      "image_key": "6e9dcfcd955618c332479344e900274e28498ad91c821d152aaa3f35e02b415c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "叮叮",
        "name_en": "Ding-ding",
        "description_zh": "每一击都伴随着清脆的铃铛声",
        "description_en": "Each hit is accompanied by a clear sound of bells",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_xmas_21_bell_staff 叮叮 ding-ding 每一击都伴随着清脆的铃铛声 each hit is accompanied by a clear sound of bells weapon 武器 event_melee weapon weapon_storage quick festive wls2_weapon_xmas_21_bell_staff"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 204,
            "unit": "",
            "display": "204"
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
              "critical_hit_chance": 0.08,
              "critical_modifier": 0.15,
              "damage": 204
            },
            "display": {
              "critical_hit_chance": "8%",
              "critical_modifier": "15%",
              "damage": "204"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.1,
              "critical_modifier": 0.3,
              "damage": 237
            },
            "display": {
              "critical_hit_chance": "10%",
              "critical_modifier": "30%",
              "damage": "237"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.15,
              "critical_modifier": 0.5,
              "damage": 270
            },
            "display": {
              "critical_hit_chance": "15%",
              "critical_modifier": "50%",
              "damage": "270"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.18,
              "critical_modifier": 0.7,
              "damage": 303
            },
            "display": {
              "critical_hit_chance": "18%",
              "critical_modifier": "70%",
              "damage": "303"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 1,
              "damage": 336
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "100%",
              "damage": "336"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 1,
              "damage": 337
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "100%",
              "damage": "337"
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
          "伤害：6 级起每级增加 1，最高 1336。",
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
        "description": "inventory_stack_view_wls_xmas2019_bow_description",
        "full_description": "inventory_stack_view_wls_xmas2019_bow_description",
        "name": "inventory_stack_view_wls_xmas2019_bow_name",
        "rarity": "uncommon",
        "sorting_group_id": "bow",
        "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_bow",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas_21_bow"
      },
      "item_id": "wls2_weapon_xmas_21_bow",
      "localization": {
        "description_key": "inventory_stack_view_wls_xmas2019_bow_description",
        "en": {
          "description": "Colorful bow with a very rich history",
          "full_description": "Colorful bow with a very rich history",
          "name": "Deer antlers"
        },
        "full_description_key": "inventory_stack_view_wls_xmas2019_bow_description",
        "name_key": "inventory_stack_view_wls_xmas2019_bow_name",
        "zh": {
          "description": "蕴藏着悠久历史的多彩弓",
          "full_description": "蕴藏着悠久历史的多彩弓",
          "name": "鹿角"
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
                "wls2_resourse_secondary_leather_2": 2,
                "wls2_resourse_secondary_plank_3": 4,
                "wls2_resourse_secondary_rope_2": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_bow"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas_21_bow_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_xmas_23_currency_firework": 200,
                "wls2_xmas_25_currency_firework": 200
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_bow",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas_21_trader_wls2_weapon_xmas_21_bow"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_bow",
      "stat_curves": {
        "damage": {
          "1": 112,
          "2": 122,
          "3": 132,
          "4": 142,
          "5": 152,
          "per_level_after_max": 1
        },
        "dexterity": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5
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
      "subcategory": "bow",
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
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "bow_reload_sound",
          "wls2_weapon_range_throwing_bow_2"
        ],
        "hit_sounds": [
          "wls2_weapon_range_throwing_bow_2"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@NewYear_Bow",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "bow"
        ]
      },
      "weapon_id": "wls2_weapon_xmas_21_bow",
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
        "attack_range": 5,
        "attacks_per_second_inferred": 0.588235294117647,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "bow"
        ]
      },
      "image_key": "5d58293f7d76f534b07ac6e3f6b16cb747644af08ce9efc6a317065c9bf2d004",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角",
        "name_en": "Deer antlers",
        "description_zh": "蕴藏着悠久历史的多彩弓",
        "description_en": "Colorful bow with a very rich history",
        "category_zh": "武器",
        "subcategory": "bow",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_xmas_21_bow 鹿角 deer antlers 蕴藏着悠久历史的多彩弓 colorful bow with a very rich history weapon 武器 bow weapon weapon_storage quick festive wls2_weapon_xmas_21_bow"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 112,
            "unit": "",
            "display": "112"
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
            "value": 5,
            "unit": "",
            "display": "5"
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
              "damage": 112,
              "dexterity": 1
            },
            "display": {
              "damage": "112",
              "dexterity": "+1"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 122,
              "dexterity": 2
            },
            "display": {
              "damage": "122",
              "dexterity": "+2"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 132,
              "dexterity": 3
            },
            "display": {
              "damage": "132",
              "dexterity": "+3"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 142,
              "dexterity": 4
            },
            "display": {
              "damage": "142",
              "dexterity": "+4"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 152,
              "dexterity": 5
            },
            "display": {
              "damage": "152",
              "dexterity": "+5"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 153,
              "dexterity": 5
            },
            "display": {
              "damage": "153",
              "dexterity": "+5"
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
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1152。",
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
        "description": "inventory_stack_view_wls2_weapon_xmas2020_candle_staff_description",
        "full_description": "inventory_stack_view_wls2_weapon_xmas2020_candle_staff_description",
        "name": "inventory_stack_view_wls2_weapon_xmas2020_candle_staff_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary05/wls2_xmas_candle_staff",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas_21_candle_staff"
      },
      "item_id": "wls2_weapon_xmas_21_candle_staff",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_xmas2020_candle_staff_description",
        "en": {
          "description": "It won't make you a king of the sea but it can hurt enemies",
          "full_description": "It won't make you a king of the sea but it can hurt enemies",
          "name": "Trident"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_xmas2020_candle_staff_description",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_candle_staff_name",
        "zh": {
          "description": "不会让你成为海王，但能打伤敌人",
          "full_description": "不会让你成为海王，但能打伤敌人",
          "name": "三叉戟"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_ingot_3": 2,
            "wls2_resourse_secondary_leather_3": 2,
            "wls2_resourse_secondary_plank_3": 2
          },
          "result": {
            "inventory_stack_id": "wls2_weapon_xmas_21_candle_staff"
          },
          "type": "recycle"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_3": 2,
                "wls2_resourse_secondary_leather_3": 2,
                "wls2_resourse_secondary_plank_3": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_candle_staff"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas_21_candle_staff"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_candle_staff",
      "stat_curves": {
        "damage": {
          "1": 352,
          "2": 385,
          "3": 418,
          "4": 451,
          "5": 484,
          "per_level_after_max": 1
        },
        "dot_amount": {
          "1": 150,
          "2": 175,
          "3": 200,
          "4": 225,
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
        "attack_ending_time": 1.2,
        "attack_range": 2,
        "durability_price": 1,
        "hit_empty_sounds": [
          "sounds_weapons_torch"
        ],
        "hit_sounds": [
          "sounds_weapons_torch"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Xmas_Candle_Staff",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_weapon_xmas_21_candle_staff",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.7,
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 2,
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
      "image_key": "a500e81805dadc4ca1c024a90d213c6c71c552aea78aa9f920a15ee8c6a4d963",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "三叉戟",
        "name_en": "Trident",
        "description_zh": "不会让你成为海王，但能打伤敌人",
        "description_en": "It won't make you a king of the sea but it can hurt enemies",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_xmas_21_candle_staff 三叉戟 trident 不会让你成为海王，但能打伤敌人 it won't make you a king of the sea but it can hurt enemies weapon 武器 event_melee weapon weapon_storage quick festive wls2_weapon_xmas_21_candle_staff"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 352,
            "unit": "",
            "display": "352"
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
            "value": 2,
            "unit": "",
            "display": "2"
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
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 352,
              "dot_amount": 150
            },
            "display": {
              "damage": "352",
              "dot_amount": "150"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 385,
              "dot_amount": 175
            },
            "display": {
              "damage": "385",
              "dot_amount": "175"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 418,
              "dot_amount": 200
            },
            "display": {
              "damage": "418",
              "dot_amount": "200"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 451,
              "dot_amount": 225
            },
            "display": {
              "damage": "451",
              "dot_amount": "225"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 484,
              "dot_amount": 250
            },
            "display": {
              "damage": "484",
              "dot_amount": "250"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 485,
              "dot_amount": 250
            },
            "display": {
              "damage": "485",
              "dot_amount": "250"
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
          "伤害：6 级起每级增加 1，最高 1484。",
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
        "description": "inventory_stack_view_wls_xmas2019_candy_staff_description",
        "full_description": "inventory_stack_view_wls_xmas2019_candy_staff_description",
        "name": "inventory_stack_view_wls_xmas_21_candy_staff_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_candy_staff",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas_21_candy_staff"
      },
      "item_id": "wls2_weapon_xmas_21_candy_staff",
      "localization": {
        "description_key": "inventory_stack_view_wls_xmas2019_candy_staff_description",
        "en": {
          "description": "Heavy two-handed staff made with the best intentions",
          "full_description": "Heavy two-handed staff made with the best intentions",
          "name": "Colored staff"
        },
        "full_description_key": "inventory_stack_view_wls_xmas2019_candy_staff_description",
        "name_key": "inventory_stack_view_wls_xmas_21_candy_staff_name",
        "zh": {
          "description": "带有美好设计初衷的沉重双头棒",
          "full_description": "带有美好设计初衷的沉重双头棒",
          "name": "多彩的工作人员"
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
                "wls2_resourse_secondary_leather_2": 2,
                "wls2_resourse_secondary_plank_2": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_candy_staff"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas_21_candy_staff_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_candy_staff",
      "stat_curves": {
        "damage": {
          "1": 170,
          "2": 190,
          "3": 210,
          "4": 240,
          "5": 270,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 55,
          "2": 55,
          "3": 55,
          "4": 55,
          "5": 55
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
      "subcategory": "event_melee",
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
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_damage_time": 0.6,
        "attack_ending_time": 0.8,
        "attack_range": 2,
        "durability_price": 1,
        "hit_empty_sounds": [
          "tomahawk_hammer_whoosh2",
          "tomahawk_hammer_whoosh2"
        ],
        "hit_sounds": [
          "wls2_halloween_melee_cross_2h_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@NewYear_Stick",
        "prefab_pbr_id": "@NewYear_Stick_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_weapon_xmas_21_candy_staff",
      "weapon_summary": {
        "attack_action": {
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.4,
        "attack_damage_time": 0.6,
        "attack_ending_time": 0.8,
        "attack_range": 2,
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
          "blunt"
        ]
      },
      "image_key": "5dfc6aaf6a3fd7e9e9dde7f0a5016be3e67d4cc9ec11e2c24cebe72d7a21461b",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "多彩的工作人员",
        "name_en": "Colored staff",
        "description_zh": "带有美好设计初衷的沉重双头棒",
        "description_en": "Heavy two-handed staff made with the best intentions",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_xmas_21_candy_staff 多彩的工作人员 colored staff 带有美好设计初衷的沉重双头棒 heavy two-handed staff made with the best intentions weapon 武器 event_melee weapon weapon_storage quick festive wls2_weapon_xmas_21_candy_staff"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 170,
            "unit": "",
            "display": "170"
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
            "value": 55,
            "unit": "",
            "display": "55"
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
              "damage": 170
            },
            "display": {
              "damage": "170"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 190
            },
            "display": {
              "damage": "190"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 210
            },
            "display": {
              "damage": "210"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 240
            },
            "display": {
              "damage": "240"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 270
            },
            "display": {
              "damage": "270"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 271
            },
            "display": {
              "damage": "271"
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
          "伤害：6 级起每级增加 1，最高 1270。",
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
        "description": "inventory_stack_view_wls_santa_crossbow_description",
        "full_description": "inventory_stack_view_wls_santa_crossbow_description",
        "name": "inventory_stack_view_wls_santa_crossbow_name",
        "rarity": "uncommon",
        "sorting_group_id": "crossbow",
        "sprite": "UI_WW_AlphaBinary03/wls_santa_crossbow",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas_21_crossbow"
      },
      "item_id": "wls2_weapon_xmas_21_crossbow",
      "localization": {
        "description_key": "inventory_stack_view_wls_santa_crossbow_description",
        "en": {
          "description": "Spectacular holiday crossbow, which shoots sharpened lollipops.",
          "full_description": "Spectacular holiday crossbow, which shoots sharpened lollipops.",
          "name": "Lollipop Crossbow"
        },
        "full_description_key": "inventory_stack_view_wls_santa_crossbow_description",
        "name_key": "inventory_stack_view_wls_santa_crossbow_name",
        "zh": {
          "description": "光彩艳丽的节日造型十字弓，可以射出尖锐的棒棒糖。",
          "full_description": "光彩艳丽的节日造型十字弓，可以射出尖锐的棒棒糖。",
          "name": "棒棒糖十字弓"
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
                "wls2_resourse_secondary_ingot_3": 2,
                "wls2_resourse_secondary_plank_4": 4,
                "wls2_resourse_secondary_rope_3": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_crossbow"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas_21_crossbow_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_xmas_23_currency_firework": 200,
                "wls2_xmas_25_currency_firework": 200
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_crossbow",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas_21_trader_wls2_weapon_xmas_21_crossbow"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_santa_crossbow",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.07,
          "3": 0.09,
          "4": 0.11,
          "5": 0.13
        },
        "damage": {
          "1": 237,
          "2": 270,
          "3": 303,
          "4": 336,
          "5": 369,
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
          "min_charge_time": 1,
          "miss_overcharge_time": 1,
          "miss_shot_distance": 15,
          "runaway_range": 0.5,
          "shoot_repeat": true,
          "type": "bow"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "bow_reload_sound",
          "santa_crossbow"
        ],
        "hit_sounds": [
          "bow_reload_sound",
          "santa_crossbow"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Santas_Crossbow",
        "prefab_pbr_id": "@Santas_Crossbow_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged"
        ]
      },
      "weapon_id": "wls2_weapon_xmas_21_crossbow",
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
        "attack_cycle_time_inferred": 1.0,
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "attacks_per_second_inferred": 1.0,
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
      "image_key": "63b1963333cfdd2befe87af66e150e7c0941b198cdd467e7cafd050a1d3e8a67",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "棒棒糖十字弓",
        "name_en": "Lollipop Crossbow",
        "description_zh": "光彩艳丽的节日造型十字弓，可以射出尖锐的棒棒糖。",
        "description_en": "Spectacular holiday crossbow, which shoots sharpened lollipops.",
        "category_zh": "武器",
        "subcategory": "crossbow",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_xmas_21_crossbow 棒棒糖十字弓 lollipop crossbow 光彩艳丽的节日造型十字弓，可以射出尖锐的棒棒糖。 spectacular holiday crossbow, which shoots sharpened lollipops. weapon 武器 crossbow weapon weapon_storage quick festive wls2_weapon_xmas_21_crossbow"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 237,
            "unit": "",
            "display": "237"
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
            "value": 100,
            "unit": "",
            "display": "100"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 5,
            "unit": "",
            "display": "5"
          }
        ],
        "fixed": [
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
              "critical_hit_chance": 0.05,
              "damage": 237
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "237"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.07,
              "damage": 270
            },
            "display": {
              "critical_hit_chance": "7%",
              "damage": "270"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.09,
              "damage": 303
            },
            "display": {
              "critical_hit_chance": "9%",
              "damage": "303"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.11,
              "damage": 336
            },
            "display": {
              "critical_hit_chance": "11%",
              "damage": "336"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 369
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "369"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 370
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "370"
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
        "description": "inventory_stack_view_wls2_weapon_xmas2020_cup_gun_description",
        "full_description": "inventory_stack_view_wls2_weapon_xmas2020_cup_gun_description",
        "name": "inventory_stack_view_wls2_weapon_xmas2020_cup_gun_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary05/wls2_xmas_cup_gun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas_21_cup_gun"
      },
      "item_id": "wls2_weapon_xmas_21_cup_gun",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_xmas2020_cup_gun_description",
        "en": {
          "description": "The weapon's inventor had definitely nothing to do",
          "full_description": "The weapon's inventor had definitely nothing to do",
          "name": "Coffeepot"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_xmas2020_cup_gun_description",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_cup_gun_name",
        "zh": {
          "description": "这件武器的发明者绝对是闲得没事做了",
          "full_description": "这件武器的发明者绝对是闲得没事做了",
          "name": "咖啡壶"
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
                "wls2_resourse_fourfold_gunparts_4": 3,
                "wls2_resourse_fourfold_nails_4": 6,
                "wls2_resourse_secondary_ingot_4": 6
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_cup_gun"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas_21_cup_gun_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_xmas_23_currency_firework": 500,
                "wls2_xmas_25_currency_firework": 500
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_cup_gun",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas_21_trader_wls2_weapon_xmas_21_cup_gun"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_cup_gun",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.2
        },
        "critical_hit_chance": {
          "1": 0.08,
          "2": 0.1,
          "3": 0.12,
          "4": 0.14,
          "5": 0.16
        },
        "damage": {
          "1": 451,
          "2": 495,
          "3": 539,
          "4": 583,
          "5": 627,
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
          "1": 14,
          "2": 15,
          "3": 16,
          "4": 17,
          "5": 19
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
        "attack_range": 4,
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
        "prefab_common_id": "@Xmas_Cup_Gun",
        "prefab_pbr_id": "@Xmas_Cup_Gun_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_xmas_21_cup_gun",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 4,
        "attacks_per_second_inferred": 0.8333333333333334,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "image_key": "a79fbf4b9455072a3545f35b7df5cd4688dda18d65252cfb8c45e519bf1b4229",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "咖啡壶",
        "name_en": "Coffeepot",
        "description_zh": "这件武器的发明者绝对是闲得没事做了",
        "description_en": "The weapon's inventor had definitely nothing to do",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_xmas_21_cup_gun 咖啡壶 coffeepot 这件武器的发明者绝对是闲得没事做了 the weapon's inventor had definitely nothing to do weapon 武器 pistol weapon weapon_storage quick festive wls2_weapon_xmas_21_cup_gun"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 451,
            "unit": "",
            "display": "451"
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
            "value": 4,
            "unit": "",
            "display": "4"
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
              "critical_hit_chance": 0.08,
              "damage": 451,
              "penetrating_damage": 14
            },
            "display": {
              "critical_hit_chance": "8%",
              "damage": "451",
              "penetrating_damage": "14"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 495,
              "penetrating_damage": 15
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "495",
              "penetrating_damage": "15"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.12,
              "damage": 539,
              "penetrating_damage": 16
            },
            "display": {
              "critical_hit_chance": "12%",
              "damage": "539",
              "penetrating_damage": "16"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.14,
              "damage": 583,
              "penetrating_damage": 17
            },
            "display": {
              "critical_hit_chance": "14%",
              "damage": "583",
              "penetrating_damage": "17"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.16,
              "damage": 627,
              "penetrating_damage": 19
            },
            "display": {
              "critical_hit_chance": "16%",
              "damage": "627",
              "penetrating_damage": "19"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.16,
              "damage": 628,
              "penetrating_damage": 19
            },
            "display": {
              "critical_hit_chance": "16%",
              "damage": "628",
              "penetrating_damage": "19"
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
          "伤害：6 级起每级增加 1，最高 1627。",
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
        "description": "inventory_stack_view_wls2_weapon_xmas_21_dagger_description",
        "full_description": "inventory_stack_view_wls2_weapon_xmas_21_dagger_description",
        "name": "inventory_stack_view_wls2_weapon_xmas2020_dagger_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_melee_knife",
        "sprite": "UI_WW_AlphaBinary05/wls2_xmas_dagger",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas_21_dagger"
      },
      "item_id": "wls2_weapon_xmas_21_dagger",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_xmas_21_dagger_description",
        "en": {
          "description": "Not only good for unboxing gifts",
          "full_description": "Not only good for unboxing gifts",
          "name": "Gift dagger"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_xmas_21_dagger_description",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_dagger_name",
        "zh": {
          "description": "打扮的五彩缤纷可不仅仅有利于礼物开箱哦",
          "full_description": "打扮的五彩缤纷可不仅仅有利于礼物开箱哦",
          "name": "礼物匕首"
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
                "wls2_resourse_primary_coal_3": 2,
                "wls2_resourse_secondary_ingot_4": 2,
                "wls2_resourse_secondary_leather_4": 3
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_dagger"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas_21_dagger_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_dagger",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.2
        },
        "damage": {
          "1": 274,
          "2": 301,
          "3": 329,
          "4": 356,
          "5": 384,
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
          "1": 8,
          "2": 9,
          "3": 10,
          "4": 11,
          "5": 12
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
      "subcategory": "knife",
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
        "attack_damage_time": 0.25,
        "attack_ending_time": 0.55,
        "attack_range": 1.5,
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
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Xmas_Dagger",
        "prefab_pbr_id": "@Xmas_Dagger_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_xmas_21_dagger",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.25,
        "attack_ending_time": 0.55,
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
          "edged"
        ]
      },
      "image_key": "0d803878c1cbcc96e945ffcd9564052ff18be044676bcfb5ad329b20cf5ca9f0",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "礼物匕首",
        "name_en": "Gift dagger",
        "description_zh": "打扮的五彩缤纷可不仅仅有利于礼物开箱哦",
        "description_en": "Not only good for unboxing gifts",
        "category_zh": "武器",
        "subcategory": "knife",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_xmas_21_dagger 礼物匕首 gift dagger 打扮的五彩缤纷可不仅仅有利于礼物开箱哦 not only good for unboxing gifts weapon 武器 knife weapon weapon_storage quick festive wls2_weapon_xmas_21_dagger"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 274,
            "unit": "",
            "display": "274"
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
              "damage": 274,
              "dot_amount": 100,
              "penetrating_damage": 8
            },
            "display": {
              "damage": "274",
              "dot_amount": "100",
              "penetrating_damage": "8"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 301,
              "dot_amount": 150,
              "penetrating_damage": 9
            },
            "display": {
              "damage": "301",
              "dot_amount": "150",
              "penetrating_damage": "9"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 329,
              "dot_amount": 200,
              "penetrating_damage": 10
            },
            "display": {
              "damage": "329",
              "dot_amount": "200",
              "penetrating_damage": "10"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 356,
              "dot_amount": 250,
              "penetrating_damage": 11
            },
            "display": {
              "damage": "356",
              "dot_amount": "250",
              "penetrating_damage": "11"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 384,
              "dot_amount": 300,
              "penetrating_damage": 12
            },
            "display": {
              "damage": "384",
              "dot_amount": "300",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 385,
              "dot_amount": 300,
              "penetrating_damage": 12
            },
            "display": {
              "damage": "385",
              "dot_amount": "300",
              "penetrating_damage": "12"
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
          "伤害：6 级起每级增加 1，最高 1384。",
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
        "description": "inventory_stack_view_wls_xmas2019_handgun_description",
        "full_description": "inventory_stack_view_wls_xmas2019_handgun_description",
        "name": "inventory_stack_view_wls_xmas2019_handgun_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_handgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas_21_handgun"
      },
      "item_id": "wls2_weapon_xmas_21_handgun",
      "localization": {
        "description_key": "inventory_stack_view_wls_xmas2019_handgun_description",
        "en": {
          "description": "Cute pistol decorated with a snowflake",
          "full_description": "Cute pistol decorated with a snowflake",
          "name": "Confetti"
        },
        "full_description_key": "inventory_stack_view_wls_xmas2019_handgun_description",
        "name_key": "inventory_stack_view_wls_xmas2019_handgun_name",
        "zh": {
          "description": "采用雪花作为装饰的袖珍手枪",
          "full_description": "采用雪花作为装饰的袖珍手枪",
          "name": "五彩纸屑"
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
                "wls2_resourse_fourfold_gunparts_3": 4,
                "wls2_resourse_fourfold_nails_3": 8,
                "wls2_resourse_secondary_ingot_3": 8
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_handgun"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas_21_handgun_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_xmas_23_currency_firework": 300,
                "wls2_xmas_25_currency_firework": 300
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_handgun",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas_21_trader_wls2_weapon_xmas_21_handgun"
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
            "stack_id": "wls2_weapon_xmas_21_handgun",
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
            "stack_id": "wls2_weapon_xmas_21_handgun",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_handgun",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.1
        },
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.08,
          "3": 0.1,
          "4": 0.13,
          "5": 0.15
        },
        "damage": {
          "1": 363,
          "2": 396,
          "3": 429,
          "4": 462,
          "5": 495,
          "per_level_after_max": 1
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
        "attack_range": 4.5,
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
        "prefab_common_id": "@NewYear_pistol",
        "prefab_pbr_id": "@NewYear_pistol_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_xmas_21_handgun",
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
          "firearm",
          "rifle"
        ]
      },
      "image_key": "d740e95ce459396d570cbcfd86b3ddbc04325f56eafb0f3f657b7e6684490418",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "五彩纸屑",
        "name_en": "Confetti",
        "description_zh": "采用雪花作为装饰的袖珍手枪",
        "description_en": "Cute pistol decorated with a snowflake",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_xmas_21_handgun 五彩纸屑 confetti 采用雪花作为装饰的袖珍手枪 cute pistol decorated with a snowflake weapon 武器 pistol weapon weapon_storage quick festive wls2_weapon_xmas_21_handgun"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 363,
            "unit": "",
            "display": "363"
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
            "value": 140,
            "unit": "",
            "display": "140"
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
              "critical_hit_chance": 0.05,
              "damage": 363
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "363"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.08,
              "damage": 396
            },
            "display": {
              "critical_hit_chance": "8%",
              "damage": "396"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 429
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "429"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 462
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "462"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 495
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "495"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 496
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "496"
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
          "伤害：6 级起每级增加 1，最高 1495。",
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
      "category": "tool",
      "gathering_tool": {
        "durability_price": 1,
        "ending_time": 0.5,
        "prefab_common_id": "@Xmas_Ice_Axe",
        "prefab_pbr_id": "@Xmas_Ice_Axe_pbr",
        "sounds": [
          "axe_use_wood",
          "axe_use_wood",
          "axe_use_wood",
          "axe_use_wood"
        ],
        "speed_modifier": 1,
        "start_time": 0.5,
        "tool_damage": 8
      },
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_xmas_21_ice_axe_description",
        "full_description": "inventory_stack_view_wls2_weapon_xmas_21_ice_axe_description",
        "name": "inventory_stack_view_wls2_weapon_xmas_21_ice_axe_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary05/wls2_xmas_ice_axe",
        "tags": [
          "wls2_tools_axe_4",
          "wls2_tools_axe_1",
          "wls2_tools_axe_2",
          "wls2_tools_axe_3",
          "wls2_tools_axe_0",
          "hatchet_iron",
          "hatchet",
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "tool_id": "wls2_weapon_xmas_21_ice_axe",
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas_21_ice_axe"
      },
      "item_id": "wls2_weapon_xmas_21_ice_axe",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_xmas_21_ice_axe_description",
        "en": {
          "description": "Good for chopping wood and heads",
          "full_description": "Good for chopping wood and heads",
          "name": "Ice queen axe"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_xmas_21_ice_axe_description",
        "name_key": "inventory_stack_view_wls2_weapon_xmas_21_ice_axe_name",
        "zh": {
          "description": "很适合砍木头和脑袋",
          "full_description": "很适合砍木头和脑袋",
          "name": "冰雪女王斧"
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
                "wls2_resourse_primary_coal_2": 2,
                "wls2_resourse_secondary_ingot_3": 2,
                "wls2_resourse_secondary_leather_3": 3,
                "wls2_resourse_secondary_plank_3": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_ice_axe"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas_21_ice_axe_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_ice_axe",
      "stat_curves": {
        "damage": {
          "1": 363,
          "2": 407,
          "3": 462,
          "4": 495,
          "5": 550,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 95,
          "2": 95,
          "3": 95,
          "4": 95,
          "5": 95
        },
        "slow_modifier": {
          "1": 0.3,
          "2": 0.3,
          "3": 0.35,
          "4": 0.35,
          "5": 0.4
        },
        "slow_time": {
          "1": 1,
          "2": 1.25,
          "3": 1.5,
          "4": 1.75,
          "5": 2
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
      "subcategory": "axe",
      "tags": [
        "wls2_tools_axe_4",
        "wls2_tools_axe_1",
        "wls2_tools_axe_2",
        "wls2_tools_axe_3",
        "wls2_tools_axe_0",
        "hatchet_iron",
        "hatchet",
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
      ],
      "throwing_item": null,
      "tier": 3,
      "tool_id": "wls2_weapon_xmas_21_ice_axe",
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.6,
        "attack_ending_time": 0.8,
        "attack_range": 1.5,
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
        "prefab_common_id": "@Xmas_Ice_Axe",
        "prefab_pbr_id": "@Xmas_Ice_Axe_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_xmas_21_ice_axe",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.4,
        "attack_damage_time": 0.6,
        "attack_ending_time": 0.8,
        "attack_range": 1.5,
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
      "image_key": "43e22e5eeb62a6ddb42554b4b588a7622d674a4efcc1b69ba8a30039e110f418",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "冰雪女王斧",
        "name_en": "Ice queen axe",
        "description_zh": "很适合砍木头和脑袋",
        "description_en": "Good for chopping wood and heads",
        "category_zh": "工具",
        "subcategory": "axe",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_xmas_21_ice_axe 冰雪女王斧 ice queen axe 很适合砍木头和脑袋 good for chopping wood and heads tool 工具 axe wls2_tools_axe_4 wls2_tools_axe_1 wls2_tools_axe_2 wls2_tools_axe_3 wls2_tools_axe_0 hatchet_iron hatchet weapon weapon_storage quick festive wls2_weapon_xmas_21_ice_axe"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 363,
            "unit": "",
            "display": "363"
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
            "value": 95,
            "unit": "",
            "display": "95"
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
            "value": 8,
            "unit": "",
            "display": "8"
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
              "damage": 363,
              "slow_modifier": 0.3,
              "slow_time": 1
            },
            "display": {
              "damage": "363",
              "slow_modifier": "30%",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 407,
              "slow_modifier": 0.3,
              "slow_time": 1.25
            },
            "display": {
              "damage": "407",
              "slow_modifier": "30%",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 462,
              "slow_modifier": 0.35,
              "slow_time": 1.5
            },
            "display": {
              "damage": "462",
              "slow_modifier": "35%",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 495,
              "slow_modifier": 0.35,
              "slow_time": 1.75
            },
            "display": {
              "damage": "495",
              "slow_modifier": "35%",
              "slow_time": "1.75 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 550,
              "slow_modifier": 0.4,
              "slow_time": 2
            },
            "display": {
              "damage": "550",
              "slow_modifier": "40%",
              "slow_time": "2 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 551,
              "slow_modifier": 0.4,
              "slow_time": 2
            },
            "display": {
              "damage": "551",
              "slow_modifier": "40%",
              "slow_time": "2 秒"
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
            "key": "slow_modifier",
            "label": "目标减速",
            "unit": "%"
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
        "description": "inventory_stack_view_wls2_weapon_xmas2020_ice_bow_description",
        "full_description": "inventory_stack_view_wls2_weapon_xmas2020_ice_bow_description",
        "name": "inventory_stack_view_wls2_weapon_xmas2020_ice_bow_name",
        "rarity": "rare",
        "sorting_group_id": "bow",
        "sprite": "UI_WW_AlphaBinary05/wls2_xmas_ice_bow",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas_21_ice_bow"
      },
      "item_id": "wls2_weapon_xmas_21_ice_bow",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_xmas2020_ice_bow_description",
        "en": {
          "description": "Highly fragile but so elegant",
          "full_description": "Highly fragile but so elegant",
          "name": "Ice queen bow"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_xmas2020_ice_bow_description",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_ice_bow_name",
        "zh": {
          "description": "非常脆弱，但很优雅",
          "full_description": "非常脆弱，但很优雅",
          "name": "冰雪女王弓"
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
                "wls2_resourse_secondary_leather_2": 2,
                "wls2_resourse_secondary_plank_3": 4,
                "wls2_resourse_secondary_rope_2": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_ice_bow"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas_21_ice_bow_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_xmas_23_currency_firework": 200,
                "wls2_xmas_25_currency_firework": 200
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_ice_bow",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas_21_trader_wls2_weapon_xmas_21_ice_bow"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_ice_bow",
      "stat_curves": {
        "damage": {
          "1": 180,
          "2": 200,
          "3": 220,
          "4": 240,
          "5": 260,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 77,
          "2": 77,
          "3": 77,
          "4": 77,
          "5": 77
        },
        "slow_modifier": {
          "1": 0.3,
          "2": 0.3,
          "3": 0.35,
          "4": 0.35,
          "5": 0.4
        },
        "slow_time": {
          "1": 1,
          "2": 1.25,
          "3": 1.5,
          "4": 1.75,
          "5": 2
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
      "subcategory": "bow",
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
        "attack_range": 6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "painted_bow_load",
          "painted_bow_shoot"
        ],
        "hit_sounds": [
          "painted_bow_shoot"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Xmas_Ice_Bow",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "bow"
        ]
      },
      "weapon_id": "wls2_weapon_xmas_21_ice_bow",
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
        "attack_range": 6,
        "attacks_per_second_inferred": 0.588235294117647,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "bow"
        ]
      },
      "image_key": "1bb6c5fb17dd4696ce4c67a74eef70c430ae7f67e1aa835b226fc1baa7f562f1",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "冰雪女王弓",
        "name_en": "Ice queen bow",
        "description_zh": "非常脆弱，但很优雅",
        "description_en": "Highly fragile but so elegant",
        "category_zh": "武器",
        "subcategory": "bow",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_xmas_21_ice_bow 冰雪女王弓 ice queen bow 非常脆弱，但很优雅 highly fragile but so elegant weapon 武器 bow weapon weapon_storage quick festive wls2_weapon_xmas_21_ice_bow"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 180,
            "unit": "",
            "display": "180"
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
            "value": 77,
            "unit": "",
            "display": "77"
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
              "damage": 180,
              "slow_modifier": 0.3,
              "slow_time": 1
            },
            "display": {
              "damage": "180",
              "slow_modifier": "30%",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 200,
              "slow_modifier": 0.3,
              "slow_time": 1.25
            },
            "display": {
              "damage": "200",
              "slow_modifier": "30%",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 220,
              "slow_modifier": 0.35,
              "slow_time": 1.5
            },
            "display": {
              "damage": "220",
              "slow_modifier": "35%",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 240,
              "slow_modifier": 0.35,
              "slow_time": 1.75
            },
            "display": {
              "damage": "240",
              "slow_modifier": "35%",
              "slow_time": "1.75 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 260,
              "slow_modifier": 0.4,
              "slow_time": 2
            },
            "display": {
              "damage": "260",
              "slow_modifier": "40%",
              "slow_time": "2 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 261,
              "slow_modifier": 0.4,
              "slow_time": 2
            },
            "display": {
              "damage": "261",
              "slow_modifier": "40%",
              "slow_time": "2 秒"
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
            "key": "slow_modifier",
            "label": "目标减速",
            "unit": "%"
          },
          {
            "key": "slow_time",
            "label": "减速持续时间",
            "unit": "秒"
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1260。",
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
        "description": "inventory_stack_view_wls_santa_lollipike_description",
        "full_description": "inventory_stack_view_wls_santa_lollipike_description",
        "name": "inventory_stack_view_wls_santa_lollipike_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary03/wls_santa_lollipike",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas_21_lollipike"
      },
      "item_id": "wls2_weapon_xmas_21_lollipike",
      "localization": {
        "description_key": "inventory_stack_view_wls_santa_lollipike_description",
        "en": {
          "description": "Very, very bad for your enemies health!",
          "full_description": "Very, very bad for your enemies health!",
          "name": "Sharpened lollipop"
        },
        "full_description_key": "inventory_stack_view_wls_santa_lollipike_description",
        "name_key": "inventory_stack_view_wls_santa_lollipike_name",
        "zh": {
          "description": "可对敌人的健康造成非常非常巨大的影响！",
          "full_description": "可对敌人的健康造成非常非常巨大的影响！",
          "name": "尖锐的棒棒糖"
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
                "wls2_resourse_secondary_ingot_2": 3,
                "wls2_resourse_secondary_leather_2": 3
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_lollipike"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas_21_lollipike_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_santa_lollipike",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.13,
          "3": 0.15,
          "4": 0.18,
          "5": 0.2
        },
        "damage": {
          "1": 145,
          "2": 165,
          "3": 185,
          "4": 205,
          "5": 225,
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
      "tier": 2,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 0.55,
        "attack_range": 1.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "sounds_weapos_whoosh",
          "sounds_weapos_whoosh"
        ],
        "hit_sounds": [
          "wls_bone_knife"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Santas_Knife",
        "prefab_pbr_id": "@Santas_Knife_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_xmas_21_lollipike",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.25,
        "attack_ending_time": 0.55,
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
          "edged"
        ]
      },
      "image_key": "32532b84e0b3608e003b9734e36c465659c6e1d98ccab9982f8465adde61ee72",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "尖锐的棒棒糖",
        "name_en": "Sharpened lollipop",
        "description_zh": "可对敌人的健康造成非常非常巨大的影响！",
        "description_en": "Very, very bad for your enemies health!",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_xmas_21_lollipike 尖锐的棒棒糖 sharpened lollipop 可对敌人的健康造成非常非常巨大的影响！ very, very bad for your enemies health! weapon 武器 event_melee weapon weapon_storage quick festive wls2_weapon_xmas_21_lollipike"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 145,
            "unit": "",
            "display": "145"
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
              "critical_hit_chance": 0.1,
              "damage": 145
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "145"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 165
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "165"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 185
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "185"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 205
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "205"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 225
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "225"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 226
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "226"
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
          "伤害：6 级起每级增加 1，最高 1225。",
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
        "description": "inventory_stack_view_wls2_weapon_xmas_21_rifle_description",
        "full_description": "inventory_stack_view_wls2_weapon_xmas_21_rifle_description",
        "name": "inventory_stack_view_wls2_weapon_xmas2020_rifle_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary05/wls2_xmas_rifle",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas_21_rifle"
      },
      "item_id": "wls2_weapon_xmas_21_rifle",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_xmas_21_rifle_description",
        "en": {
          "description": "Even old shooters sometimes want to feel like kids again",
          "full_description": "Even old shooters sometimes want to feel like kids again",
          "name": "Gift musket"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_xmas_21_rifle_description",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_rifle_name",
        "zh": {
          "description": "即使是老枪手，有时也想再次感受自己的童年",
          "full_description": "即使是老枪手，有时也想再次感受自己的童年",
          "name": "礼物滑膛枪"
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
                "wls2_resourse_fourfold_gunparts_4": 8,
                "wls2_resourse_fourfold_nails_4": 4,
                "wls2_resourse_secondary_ingot_4": 8,
                "wls2_resourse_secondary_plank_4": 8
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_rifle"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas_21_rifle_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_xmas_23_currency_firework": 500,
                "wls2_xmas_25_currency_firework": 500
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_rifle",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas_21_trader_wls2_weapon_xmas_21_rifle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_5_a",
            "durability_factor": 0.5,
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_xmas_21_rifle",
            "transaction_id": "transaction_iap_wls_7_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_4_a",
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
            "stack_id": "wls2_weapon_xmas_21_rifle",
            "transaction_id": "transaction_iap_wls_5_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_rifle",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.2
        },
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.07,
          "3": 0.09,
          "4": 0.11,
          "5": 0.13
        },
        "critical_modifier": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
        },
        "damage": {
          "1": 759,
          "2": 836,
          "3": 908,
          "4": 979,
          "5": 1051,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 215,
          "2": 215,
          "3": 215,
          "4": 215,
          "5": 215
        },
        "penetrating_damage": {
          "1": 23,
          "2": 25,
          "3": 27,
          "4": 29,
          "5": 32
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
      "subcategory": "rifle",
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
        "attack_damage_time": 0.4,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_springfield_58"
        ],
        "hit_sounds": [
          "wls_springfield_58"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Xmas_Rifle",
        "prefab_pbr_id": "@Xmas_Rifle_pbr",
        "speed_modifier": 1,
        "tags": [
          "firearm",
          "ranged",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_xmas_21_rifle",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.1,
        "attack_damage_time": 0.4,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "attacks_per_second_inferred": 0.9090909090909091,
        "damage": null,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "firearm",
          "ranged",
          "rifle"
        ]
      },
      "image_key": "bea18242dbc7d3b73c33aa0bd0560650205069c41527101457ea668e559c87c1",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "礼物滑膛枪",
        "name_en": "Gift musket",
        "description_zh": "即使是老枪手，有时也想再次感受自己的童年",
        "description_en": "Even old shooters sometimes want to feel like kids again",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_xmas_21_rifle 礼物滑膛枪 gift musket 即使是老枪手，有时也想再次感受自己的童年 even old shooters sometimes want to feel like kids again weapon 武器 rifle weapon weapon_storage quick festive wls2_weapon_xmas_21_rifle"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 759,
            "unit": "",
            "display": "759"
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
            "value": 215,
            "unit": "",
            "display": "215"
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
            "key": "animal_damage_modifier",
            "label": "对动物伤害加成",
            "value": 0.2,
            "unit": "%",
            "display": "20%"
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
              "critical_hit_chance": 0.05,
              "critical_modifier": 0.1,
              "damage": 759,
              "penetrating_damage": 23
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "10%",
              "damage": "759",
              "penetrating_damage": "23"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.07,
              "critical_modifier": 0.15,
              "damage": 836,
              "penetrating_damage": 25
            },
            "display": {
              "critical_hit_chance": "7%",
              "critical_modifier": "15%",
              "damage": "836",
              "penetrating_damage": "25"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.09,
              "critical_modifier": 0.2,
              "damage": 908,
              "penetrating_damage": 27
            },
            "display": {
              "critical_hit_chance": "9%",
              "critical_modifier": "20%",
              "damage": "908",
              "penetrating_damage": "27"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.11,
              "critical_modifier": 0.25,
              "damage": 979,
              "penetrating_damage": 29
            },
            "display": {
              "critical_hit_chance": "11%",
              "critical_modifier": "25%",
              "damage": "979",
              "penetrating_damage": "29"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.13,
              "critical_modifier": 0.3,
              "damage": 1051,
              "penetrating_damage": 32
            },
            "display": {
              "critical_hit_chance": "13%",
              "critical_modifier": "30%",
              "damage": "1051",
              "penetrating_damage": "32"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.13,
              "critical_modifier": 0.3,
              "damage": 1052,
              "penetrating_damage": 32
            },
            "display": {
              "critical_hit_chance": "13%",
              "critical_modifier": "30%",
              "damage": "1052",
              "penetrating_damage": "32"
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
          "伤害：6 级起每级增加 1，最高 2051。",
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
        "description": "inventory_stack_view_wls2_weapon_xmas_21_saber_description",
        "full_description": "inventory_stack_view_wls2_weapon_xmas_21_saber_description",
        "name": "inventory_stack_view_wls2_weapon_xmas2020_saber_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_melee_spear_saber",
        "sprite": "UI_WW_AlphaBinary05/wls2_xmas_saber",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas_21_saber"
      },
      "item_id": "wls2_weapon_xmas_21_saber",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_xmas_21_saber_description",
        "en": {
          "description": "Festive but quite a spiky and durable thing",
          "full_description": "Festive but quite a spiky and durable thing",
          "name": "Confettirate saber"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_xmas_21_saber_description",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_saber_name",
        "zh": {
          "description": "喜庆但相当尖利耐用的东西",
          "full_description": "喜庆但相当尖利耐用的东西",
          "name": "五彩纸谢军刀"
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
                "wls2_resourse_primary_coal_3": 4,
                "wls2_resourse_secondary_ingot_4": 4,
                "wls2_resourse_secondary_leather_4": 6
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_saber"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas_21_saber_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_saber",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.2
        },
        "critical_hit_chance": {
          "1": 0.13,
          "2": 0.15,
          "3": 0.18,
          "4": 0.2,
          "5": 0.25
        },
        "damage": {
          "1": 466,
          "2": 510,
          "3": 560,
          "4": 606,
          "5": 650,
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
      "subcategory": "spear_saber",
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
        "attack_range": 1.7,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_saber_empty_hit",
          "wls2_saber_empty_hit",
          "wls2_saber_empty_hit"
        ],
        "hit_sounds": [
          "wls2_weapon_melee_saber_hit",
          "wls2_weapon_melee_saber_hit",
          "wls2_weapon_melee_saber_hit"
        ],
        "hit_states": {
          "states_count": [
            0,
            2
          ],
          "type": "random"
        },
        "prefab_common_id": "@Xmas_Saber",
        "prefab_pbr_id": "@Xmas_saber_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_xmas_21_saber",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.1,
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.7,
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
      "image_key": "d491db8acc1eabfe70b26c34d4be10f9364fbeb48f159dc0a0d0317e79517263",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "五彩纸谢军刀",
        "name_en": "Confettirate saber",
        "description_zh": "喜庆但相当尖利耐用的东西",
        "description_en": "Festive but quite a spiky and durable thing",
        "category_zh": "武器",
        "subcategory": "spear_saber",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_xmas_21_saber 五彩纸谢军刀 confettirate saber 喜庆但相当尖利耐用的东西 festive but quite a spiky and durable thing weapon 武器 spear_saber weapon weapon_storage quick festive wls2_weapon_xmas_21_saber"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 466,
            "unit": "",
            "display": "466"
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
            "value": 120,
            "unit": "",
            "display": "120"
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
            "key": "animal_damage_modifier",
            "label": "对动物伤害加成",
            "value": 0.2,
            "unit": "%",
            "display": "20%"
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
              "critical_hit_chance": 0.13,
              "damage": 466
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "466"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 510
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "510"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 560
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "560"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 606
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "606"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 650
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "650"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 651
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "651"
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
          "伤害：6 级起每级增加 1，最高 1650。",
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
        "description": "inventory_stack_view_wls2_weapon_xmas2020_scythe_description",
        "full_description": "inventory_stack_view_wls2_weapon_xmas2020_scythe_description",
        "name": "inventory_stack_view_wls2_weapon_xmas2020_scythe_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary05/wls2_xmas_scythe",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas_21_scythe"
      },
      "item_id": "wls2_weapon_xmas_21_scythe",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_xmas2020_scythe_description",
        "en": {
          "description": "Mows the grass and your enemies' heads. Decorated with ribbon and bell.",
          "full_description": "Mows the grass and your enemies' heads. Decorated with ribbon and bell.",
          "name": "Harvest"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_xmas2020_scythe_description",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_scythe_name",
        "zh": {
          "description": "割掉杂草，还有敌人的脑袋。用缎带和铃铛装饰。",
          "full_description": "割掉杂草，还有敌人的脑袋。用缎带和铃铛装饰。",
          "name": "收割"
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
                "wls2_resourse_primary_coal_3": 4,
                "wls2_resourse_secondary_ingot_4": 4,
                "wls2_resourse_secondary_leather_4": 6
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_scythe"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas_21_scythe_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_scythe",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.12,
          "3": 0.14,
          "4": 0.16,
          "5": 0.18
        },
        "damage": {
          "1": 470,
          "2": 515,
          "3": 566,
          "4": 610,
          "5": 656,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 140,
          "2": 140,
          "3": 140,
          "4": 140,
          "5": 140
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
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.3,
        "attack_ending_time": 1,
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
        "prefab_common_id": "@Xmas_Scythe",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_xmas_21_scythe",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.3,
        "attack_damage_time": 0.3,
        "attack_ending_time": 1,
        "attack_range": 2,
        "attacks_per_second_inferred": 0.7692307692307692,
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
      "image_key": "8f4ef27aa5323bd74755b5bae00cafd9b5ad3b034836afa2581e68f978551e91",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "收割",
        "name_en": "Harvest",
        "description_zh": "割掉杂草，还有敌人的脑袋。用缎带和铃铛装饰。",
        "description_en": "Mows the grass and your enemies' heads. Decorated with ribbon and bell.",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_xmas_21_scythe 收割 harvest 割掉杂草，还有敌人的脑袋。用缎带和铃铛装饰。 mows the grass and your enemies' heads. decorated with ribbon and bell. weapon 武器 event_melee weapon weapon_storage quick wls2_weapon_xmas_21_scythe"
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
            "value": 0.7692307692307692,
            "unit": "次/秒",
            "display": "0.77 次/秒"
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
            "value": 1.3,
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
              "critical_hit_chance": 0.1,
              "damage": 470,
              "slow_time": 0.75
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "470",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.12,
              "damage": 515,
              "slow_time": 1
            },
            "display": {
              "critical_hit_chance": "12%",
              "damage": "515",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.14,
              "damage": 566,
              "slow_time": 1.25
            },
            "display": {
              "critical_hit_chance": "14%",
              "damage": "566",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.16,
              "damage": 610,
              "slow_time": 1.5
            },
            "display": {
              "critical_hit_chance": "16%",
              "damage": "610",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 656,
              "slow_time": 1.75
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "656",
              "slow_time": "1.75 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 657,
              "slow_time": 1.75
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "657",
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
          "伤害：6 级起每级增加 1，最高 1656。",
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
        "description": "inventory_stack_view_wls_santa_shotgun_description",
        "full_description": "inventory_stack_view_wls_santa_shotgun_description",
        "name": "inventory_stack_view_wls_santa_shotgun_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary03/wls_santa_shotgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas_21_shotgun"
      },
      "item_id": "wls2_weapon_xmas_21_shotgun",
      "localization": {
        "description_key": "inventory_stack_view_wls_santa_shotgun_description",
        "en": {
          "description": "Santa always brings presents for good kids, but this year he's also made a gun for the bad ones! Wide area of effect.",
          "full_description": "Santa always brings presents for good kids, but this year he's also made a gun for the bad ones! Wide area of effect.",
          "name": "Santa's gun"
        },
        "full_description_key": "inventory_stack_view_wls_santa_shotgun_description",
        "name_key": "inventory_stack_view_wls_santa_shotgun_name",
        "zh": {
          "description": "通常圣诞老人会给好孩子美好的礼物，但这次他为那些坏蛋准备了厉害的枪支。拥有范围效果。",
          "full_description": "通常圣诞老人会给好孩子美好的礼物，但这次他为那些坏蛋准备了厉害的枪支。拥有范围效果。",
          "name": "圣诞老人的枪"
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
                "wls2_resourse_fourfold_gunparts_4": 8,
                "wls2_resourse_fourfold_nails_4": 4,
                "wls2_resourse_secondary_ingot_4": 8,
                "wls2_resourse_secondary_plank_4": 8
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_shotgun"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas_21_shotgun_recycle"
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
            "stack_id": "wls2_weapon_xmas_21_shotgun",
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
            "stack_id": "wls2_weapon_xmas_21_shotgun",
            "transaction_id": "transaction_iap_wls_4_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary03/wls_santa_shotgun",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.08,
          "3": 0.1,
          "4": 0.13,
          "5": 0.15
        },
        "damage": {
          "1": 680,
          "2": 730,
          "3": 780,
          "4": 830,
          "5": 880,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 215,
          "2": 215,
          "3": 215,
          "4": 215,
          "5": 215
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
        "attack_ending_time": 1,
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
        "prefab_common_id": "@Santas_Shotgun",
        "prefab_pbr_id": "@Santas_Shotgun_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_xmas_21_shotgun",
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
          "shotgun"
        ]
      },
      "image_key": "3eaafa2b81d54b1abd5eb97d117ad6262857f0e5bc6bf148e6d37296fafeb7c5",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞老人的枪",
        "name_en": "Santa's gun",
        "description_zh": "通常圣诞老人会给好孩子美好的礼物，但这次他为那些坏蛋准备了厉害的枪支。拥有范围效果。",
        "description_en": "Santa always brings presents for good kids, but this year he's also made a gun for the bad ones! Wide area of effect.",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_xmas_21_shotgun 圣诞老人的枪 santa's gun 通常圣诞老人会给好孩子美好的礼物，但这次他为那些坏蛋准备了厉害的枪支。拥有范围效果。 santa always brings presents for good kids, but this year he's also made a gun for the bad ones! wide area of effect. weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_xmas_21_shotgun"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 680,
            "unit": "",
            "display": "680"
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
            "value": 215,
            "unit": "",
            "display": "215"
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
              "damage": 680
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "680"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.08,
              "damage": 730
            },
            "display": {
              "critical_hit_chance": "8%",
              "damage": "730"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 780
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "780"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 830
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "830"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 880
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "880"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 881
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "881"
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
          "伤害：6 级起每级增加 1，最高 1880。",
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
        "description": "inventory_stack_view_wls_santa_staff_description",
        "full_description": "inventory_stack_view_wls_santa_staff_description",
        "name": "inventory_stack_view_wls_santa_staff_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary03/wls_santa_staff",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_xmas_21_wooden_staff"
      },
      "item_id": "wls2_weapon_xmas_21_wooden_staff",
      "localization": {
        "description_key": "inventory_stack_view_wls_santa_staff_description",
        "en": {
          "description": "Can be used not only for walking assistance, but for knocking down outlaws as well.",
          "full_description": "Can be used not only for walking assistance, but for knocking down outlaws as well.",
          "name": "Santa's Staff"
        },
        "full_description_key": "inventory_stack_view_wls_santa_staff_description",
        "name_key": "inventory_stack_view_wls_santa_staff_name",
        "zh": {
          "description": "不仅能用来辅助行走，还能用来对抗不法之徒。",
          "full_description": "不仅能用来辅助行走，还能用来对抗不法之徒。",
          "name": "圣诞老人的拐杖"
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
                "wls2_resourse_secondary_ingot_3": 2,
                "wls2_resourse_secondary_plank_3": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_xmas_21_wooden_staff"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_xmas_21_wooden_staff_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_santa_staff",
      "stat_curves": {
        "critical_modifier": {
          "1": 0.15,
          "2": 0.2,
          "3": 0.25,
          "4": 0.3,
          "5": 0.35
        },
        "damage": {
          "1": 320,
          "2": 350,
          "3": 380,
          "4": 410,
          "5": 440,
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
        "attack_ending_time": 0.8,
        "attack_range": 2,
        "durability_price": 1,
        "hit_empty_sounds": [
          "santa_staff",
          "santa_staff"
        ],
        "hit_sounds": [
          "wls2_weapon_melee_slow_0"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Santas_Stick",
        "prefab_pbr_id": "@Santas_Stick_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_weapon_xmas_21_wooden_staff",
      "weapon_summary": {
        "attack_action": {
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.4,
        "attack_damage_time": 0.6,
        "attack_ending_time": 0.8,
        "attack_range": 2,
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
          "blunt"
        ]
      },
      "image_key": "ff9a00a5491c0b31c4e344dc3d6293f5ec71ec1d70a2dbd43520c7dc737ffa41",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞老人的拐杖",
        "name_en": "Santa's Staff",
        "description_zh": "不仅能用来辅助行走，还能用来对抗不法之徒。",
        "description_en": "Can be used not only for walking assistance, but for knocking down outlaws as well.",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_xmas_21_wooden_staff 圣诞老人的拐杖 santa's staff 不仅能用来辅助行走，还能用来对抗不法之徒。 can be used not only for walking assistance, but for knocking down outlaws as well. weapon 武器 event_melee weapon weapon_storage quick festive wls2_weapon_xmas_21_wooden_staff"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 320,
            "unit": "",
            "display": "320"
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
            "value": 80,
            "unit": "",
            "display": "80"
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
              "critical_modifier": 0.15,
              "damage": 320
            },
            "display": {
              "critical_modifier": "15%",
              "damage": "320"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_modifier": 0.2,
              "damage": 350
            },
            "display": {
              "critical_modifier": "20%",
              "damage": "350"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_modifier": 0.25,
              "damage": 380
            },
            "display": {
              "critical_modifier": "25%",
              "damage": "380"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_modifier": 0.3,
              "damage": 410
            },
            "display": {
              "critical_modifier": "30%",
              "damage": "410"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_modifier": 0.35,
              "damage": 440
            },
            "display": {
              "critical_modifier": "35%",
              "damage": "440"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_modifier": 0.35,
              "damage": 441
            },
            "display": {
              "critical_modifier": "35%",
              "damage": "441"
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
        "has_stats": false,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "tool",
      "gathering_tool": {
        "durability_price": 1,
        "ending_time": 2,
        "is_dynamite": true,
        "prefab_common_id": "@Dynamite",
        "sounds": [
          "wls2_weapon_melee_fast_0",
          "wls2_weapon_melee_fast_0",
          "wls2_weapon_melee_fast_0"
        ],
        "speed_modifier": 1,
        "start_time": 2,
        "tool_damage": 1
      },
      "inventory_stack": {
        "description": "wls2_ws_day2021_fireworks_description",
        "full_description": "wls2_ws_day2021_fireworks_description",
        "max_amount": 5,
        "name": "wls2_ws_day2021_fireworks_name",
        "rarity": "common",
        "show_amounts": true,
        "sorting_group_id": "currency",
        "sprite": "UI_WW_AlphaBinary04/wls2_easter_currency_egg",
        "tags": [
          "trinket"
        ],
        "tier": 1,
        "tool_id": "wls2_ws_day2021_currency_firework",
        "type": "limited"
      },
      "item_id": "wls2_ws_day2021_currency_firework",
      "localization": {
        "description_key": "wls2_ws_day2021_fireworks_description",
        "en": {
          "description": null,
          "full_description": null,
          "name": null
        },
        "full_description_key": "wls2_ws_day2021_fireworks_description",
        "name_key": "wls2_ws_day2021_fireworks_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": null
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
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_currency_egg",
      "stat_curves": {},
      "stat_labels": {},
      "subcategory": "firework",
      "tags": [
        "trinket"
      ],
      "throwing_item": null,
      "tier": 1,
      "tool_id": "wls2_ws_day2021_currency_firework",
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "7075f7486e41a694fb020b5b817b7eb89d32d4302a5d0dd69845fcae1a8d4cf5",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "wls2_ws_day2021_currency_firework",
        "name_en": "wls2_ws_day2021_currency_firework",
        "description_zh": "",
        "description_en": "",
        "category_zh": "工具",
        "subcategory": "firework",
        "rarity_zh": "普通",
        "search_text": "wls2_ws_day2021_currency_firework wls2_ws_day2021_currency_firework wls2_ws_day2021_currency_firework tool 工具 firework trinket"
      },
      "numeric": {
        "summary": [
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
            "value": 4,
            "unit": "秒",
            "display": "4 秒"
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
      "bodypart": 14,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 14,
        "description": "inventory_stack_view_wls_xmas_red_jacket_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_xmas_red_jacket_description",
        "name": "inventory_stack_view_wls_xmas_red_jacket_name",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_jacket",
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
      "item_id": "wls2_xmas_21_armor_body_3_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls_xmas_red_jacket_description",
        "en": {
          "description": "This jacket has protection from extreme cold and withstands attacks from opponents",
          "full_description": "This jacket has protection from extreme cold and withstands attacks from opponents",
          "name": "Santa's red jacket"
        },
        "full_description_key": "inventory_stack_view_wls_xmas_red_jacket_description",
        "name_key": "inventory_stack_view_wls_xmas_red_jacket_name",
        "zh": {
          "description": "结实耐寒的外套，能够承受敌人的攻击。",
          "full_description": "结实耐寒的外套，能够承受敌人的攻击。",
          "name": "圣诞老人的红色外套"
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
                "inventory_stack_id": "wls2_xmas_21_armor_body_3_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmas_21_armor_body_3_rare_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_xmas_23_currency_firework": 150,
                "wls2_xmas_25_currency_firework": 150
              },
              "result": {
                "inventory_stack_id": "wls2_xmas_21_armor_body_3_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas_21_trader_wls2_xmas_21_armor_body_3_rare"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_jacket",
      "stat_curves": {
        "armor": {
          "1": 160,
          "2": 175,
          "3": 190,
          "4": 205,
          "5": 225,
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
          "1": 1785,
          "2": 1928,
          "3": 2071,
          "4": 2213,
          "5": 2356
        },
        "warm_modifier": {
          "1": 3,
          "2": 3,
          "3": 3,
          "4": 3,
          "5": 3
        },
        "wisdom": {
          "1": 2,
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
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
      "image_key": "c501388d571f728bcee3cf8d3307ca2fe635b2232e4d9476682197b34c5ab0c9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞老人的红色外套",
        "name_en": "Santa's red jacket",
        "description_zh": "结实耐寒的外套，能够承受敌人的攻击。",
        "description_en": "This jacket has protection from extreme cold and withstands attacks from opponents",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_xmas_21_armor_body_3_rare 圣诞老人的红色外套 santa's red jacket 结实耐寒的外套，能够承受敌人的攻击。 this jacket has protection from extreme cold and withstands attacks from opponents armor 护甲 body chest armor armor_storage festive"
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
            "value": 1785,
            "unit": "",
            "display": "1785"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": 2,
            "unit": "",
            "display": "+2"
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
            "value": 3,
            "unit": "",
            "display": "3"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 160,
              "max_durability": 1785,
              "wisdom": 2
            },
            "display": {
              "armor": "160",
              "max_durability": "1785",
              "wisdom": "+2"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 175,
              "max_durability": 1928,
              "wisdom": 3
            },
            "display": {
              "armor": "175",
              "max_durability": "1928",
              "wisdom": "+3"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 190,
              "max_durability": 2071,
              "wisdom": 4
            },
            "display": {
              "armor": "190",
              "max_durability": "2071",
              "wisdom": "+4"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 205,
              "max_durability": 2213,
              "wisdom": 5
            },
            "display": {
              "armor": "205",
              "max_durability": "2213",
              "wisdom": "+5"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 225,
              "max_durability": 2356,
              "wisdom": 6
            },
            "display": {
              "armor": "225",
              "max_durability": "2356",
              "wisdom": "+6"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 226,
              "max_durability": 2356,
              "wisdom": 6
            },
            "display": {
              "armor": "226",
              "max_durability": "2356",
              "wisdom": "+6"
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
          },
          {
            "key": "wisdom",
            "label": "精神",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1225。"
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
      "bodypart": 12,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 12,
        "description": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_description",
        "name": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_xmas_21_armor_body_4_epic",
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
      "item_id": "wls2_xmas_21_armor_body_4_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_description",
        "en": {
          "description": "Protects not only from cold but also a symbol of the main holiday of the year",
          "full_description": "Protects not only from cold but also a symbol of the main holiday of the year",
          "name": "Santa Sheriff's coat"
        },
        "full_description_key": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_description",
        "name_key": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_name",
        "zh": {
          "description": "不仅能防寒，而且是一年中主要节日的象征",
          "full_description": "不仅能防寒，而且是一年中主要节日的象征",
          "name": "圣诞警长外套"
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
                "inventory_stack_id": "wls2_xmas_21_armor_body_4_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmas_21_armor_body_4_epic_recycle"
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
            "stack_id": "wls2_xmas_21_armor_body_4_epic",
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
            "stack_id": "wls2_xmas_21_armor_body_4_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_xmas_21_armor_body_4_epic",
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
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "evasion": {
          "1": 0.01,
          "2": 0.02,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05
        },
        "max_durability": {
          "1": 8350,
          "2": 9185,
          "3": 10020,
          "4": 10854,
          "5": 11689
        },
        "warm_modifier": {
          "1": 2,
          "2": 2,
          "3": 2,
          "4": 2,
          "5": 2
        },
        "wisdom": {
          "1": 2,
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
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
      "image_key": "053e2eacc19d4258352a8bb053c28c9c69412dbfa51244276338f6b0efa7ea7f",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞警长外套",
        "name_en": "Santa Sheriff's coat",
        "description_zh": "不仅能防寒，而且是一年中主要节日的象征",
        "description_en": "Protects not only from cold but also a symbol of the main holiday of the year",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_xmas_21_armor_body_4_epic 圣诞警长外套 santa sheriff's coat 不仅能防寒，而且是一年中主要节日的象征 protects not only from cold but also a symbol of the main holiday of the year armor 护甲 body chest armor armor_storage festive"
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
            "key": "wisdom",
            "label": "精神",
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
            "value": 2,
            "unit": "",
            "display": "2"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 425,
              "evasion": 0.01,
              "max_durability": 8350,
              "wisdom": 2
            },
            "display": {
              "armor": "425",
              "evasion": "+1%",
              "max_durability": "8350",
              "wisdom": "+2"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 467,
              "evasion": 0.02,
              "max_durability": 9185,
              "wisdom": 3
            },
            "display": {
              "armor": "467",
              "evasion": "+2%",
              "max_durability": "9185",
              "wisdom": "+3"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 509,
              "evasion": 0.03,
              "max_durability": 10020,
              "wisdom": 4
            },
            "display": {
              "armor": "509",
              "evasion": "+3%",
              "max_durability": "10020",
              "wisdom": "+4"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 551,
              "evasion": 0.04,
              "max_durability": 10854,
              "wisdom": 5
            },
            "display": {
              "armor": "551",
              "evasion": "+4%",
              "max_durability": "10854",
              "wisdom": "+5"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 593,
              "evasion": 0.05,
              "max_durability": 11689,
              "wisdom": 6
            },
            "display": {
              "armor": "593",
              "evasion": "+5%",
              "max_durability": "11689",
              "wisdom": "+6"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 594,
              "evasion": 0.05,
              "max_durability": 11689,
              "wisdom": 6
            },
            "display": {
              "armor": "594",
              "evasion": "+5%",
              "max_durability": "11689",
              "wisdom": "+6"
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
      "bodypart": 26,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 26,
        "description": "inventory_stack_view_wls2_armor_xmas_21_elf_body_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_xmas_21_elf_body_description",
        "name": "inventory_stack_view_wls2_armor_xmas_21_elf_body_name",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_xmas2020_elf_body",
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
      "item_id": "wls2_xmas_21_armor_body_4_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_xmas_21_elf_body_description",
        "en": {
          "description": "The Snowy Express courier uniform. What a holiday!",
          "full_description": "The Snowy Express courier uniform. What a holiday!",
          "name": "Courier elf's outfit"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_xmas_21_elf_body_description",
        "name_key": "inventory_stack_view_wls2_armor_xmas_21_elf_body_name",
        "zh": {
          "description": "冰雪快车的邮递员制服。多么美好的节日啊！",
          "full_description": "冰雪快车的邮递员制服。多么美好的节日啊！",
          "name": "邮递员精灵套装"
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
                "wls2_resourse_secondary_leather_4": 10,
                "wls2_resourse_tertiary_clothroll_4": 2
              },
              "result": {
                "inventory_stack_id": "wls2_xmas_21_armor_body_4_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmas_21_armor_body_4_rare_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_xmas_23_currency_firework": 300,
                "wls2_xmas_25_currency_firework": 300
              },
              "result": {
                "inventory_stack_id": "wls2_xmas_21_armor_body_4_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas_21_trader_wls2_xmas_21_armor_body_4_rare"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_xmas2020_elf_body",
      "stat_curves": {
        "armor": {
          "1": 320,
          "2": 350,
          "3": 380,
          "4": 420,
          "5": 450,
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
          "3": 2,
          "4": 2,
          "5": 3
        },
        "max_durability": {
          "1": 5765,
          "2": 6262,
          "3": 6759,
          "4": 7356,
          "5": 7952
        },
        "warm_modifier": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1
        },
        "wisdom": {
          "1": 2,
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
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
      "image_key": "8c4cd044c00f4b472283ad95a7a57770c0d63e9d929447c9be25b84ff9193269",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "邮递员精灵套装",
        "name_en": "Courier elf's outfit",
        "description_zh": "冰雪快车的邮递员制服。多么美好的节日啊！",
        "description_en": "The Snowy Express courier uniform. What a holiday!",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_xmas_21_armor_body_4_rare 邮递员精灵套装 courier elf's outfit 冰雪快车的邮递员制服。多么美好的节日啊！ the snowy express courier uniform. what a holiday! armor 护甲 body chest armor armor_storage festive"
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
            "value": 5765,
            "unit": "",
            "display": "5765"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          },
          {
            "key": "wisdom",
            "label": "精神",
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
              "armor": 320,
              "dexterity": 1,
              "max_durability": 5765,
              "wisdom": 2
            },
            "display": {
              "armor": "320",
              "dexterity": "+1",
              "max_durability": "5765",
              "wisdom": "+2"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 350,
              "dexterity": 1,
              "max_durability": 6262,
              "wisdom": 3
            },
            "display": {
              "armor": "350",
              "dexterity": "+1",
              "max_durability": "6262",
              "wisdom": "+3"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 380,
              "dexterity": 2,
              "max_durability": 6759,
              "wisdom": 4
            },
            "display": {
              "armor": "380",
              "dexterity": "+2",
              "max_durability": "6759",
              "wisdom": "+4"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 420,
              "dexterity": 2,
              "max_durability": 7356,
              "wisdom": 5
            },
            "display": {
              "armor": "420",
              "dexterity": "+2",
              "max_durability": "7356",
              "wisdom": "+5"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 450,
              "dexterity": 3,
              "max_durability": 7952,
              "wisdom": 6
            },
            "display": {
              "armor": "450",
              "dexterity": "+3",
              "max_durability": "7952",
              "wisdom": "+6"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 451,
              "dexterity": 3,
              "max_durability": 7952,
              "wisdom": 6
            },
            "display": {
              "armor": "451",
              "dexterity": "+3",
              "max_durability": "7952",
              "wisdom": "+6"
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
            "key": "wisdom",
            "label": "精神",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1450。"
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
      "bodypart": 12,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 12,
        "description": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_description",
        "name": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_xmas_21_armor_body_4_epic",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_xmas_21_armor_body_5_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_description",
        "en": {
          "description": "Protects not only from cold but also a symbol of the main holiday of the year",
          "full_description": "Protects not only from cold but also a symbol of the main holiday of the year",
          "name": "Santa Sheriff's coat"
        },
        "full_description_key": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_description",
        "name_key": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_name",
        "zh": {
          "description": "不仅能防寒，而且是一年中主要节日的象征",
          "full_description": "不仅能防寒，而且是一年中主要节日的象征",
          "name": "圣诞警长外套"
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
                "inventory_stack_id": "wls2_xmas_21_armor_body_5_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmas_21_armor_body_5_epic_recycle"
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
            "stack_id": "wls2_xmas_21_armor_body_5_epic",
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
            "stack_id": "wls2_xmas_21_armor_body_5_epic",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_xmas_21_armor_body_4_epic",
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
        "evasion": {
          "1": 0.01,
          "2": 0.02,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05
        },
        "max_durability": {
          "1": 22418,
          "2": 24659,
          "3": 26901,
          "4": 29143,
          "5": 31385
        },
        "warm_modifier": {
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "wisdom": {
          "1": 2,
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
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
      "image_key": "053e2eacc19d4258352a8bb053c28c9c69412dbfa51244276338f6b0efa7ea7f",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞警长外套",
        "name_en": "Santa Sheriff's coat",
        "description_zh": "不仅能防寒，而且是一年中主要节日的象征",
        "description_en": "Protects not only from cold but also a symbol of the main holiday of the year",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_xmas_21_armor_body_5_epic 圣诞警长外套 santa sheriff's coat 不仅能防寒，而且是一年中主要节日的象征 protects not only from cold but also a symbol of the main holiday of the year armor 护甲 body chest armor armor_storage"
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
            "value": 22418,
            "unit": "",
            "display": "22418"
          },
          {
            "key": "wisdom",
            "label": "精神",
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
              "armor": 840,
              "evasion": 0.01,
              "max_durability": 22418,
              "wisdom": 2
            },
            "display": {
              "armor": "840",
              "evasion": "+1%",
              "max_durability": "22418",
              "wisdom": "+2"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 924,
              "evasion": 0.02,
              "max_durability": 24659,
              "wisdom": 3
            },
            "display": {
              "armor": "924",
              "evasion": "+2%",
              "max_durability": "24659",
              "wisdom": "+3"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1008,
              "evasion": 0.03,
              "max_durability": 26901,
              "wisdom": 4
            },
            "display": {
              "armor": "1008",
              "evasion": "+3%",
              "max_durability": "26901",
              "wisdom": "+4"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1092,
              "evasion": 0.04,
              "max_durability": 29143,
              "wisdom": 5
            },
            "display": {
              "armor": "1092",
              "evasion": "+4%",
              "max_durability": "29143",
              "wisdom": "+5"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1176,
              "evasion": 0.05,
              "max_durability": 31385,
              "wisdom": 6
            },
            "display": {
              "armor": "1176",
              "evasion": "+5%",
              "max_durability": "31385",
              "wisdom": "+6"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1177,
              "evasion": 0.05,
              "max_durability": 31385,
              "wisdom": 6
            },
            "display": {
              "armor": "1177",
              "evasion": "+5%",
              "max_durability": "31385",
              "wisdom": "+6"
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
      "bodypart": 12,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 12,
        "description": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_description",
        "name": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_xmas_21_armor_body_4_epic",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_xmas_21_armor_body_6_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_description",
        "en": {
          "description": "Protects not only from cold but also a symbol of the main holiday of the year",
          "full_description": "Protects not only from cold but also a symbol of the main holiday of the year",
          "name": "Santa Sheriff's coat"
        },
        "full_description_key": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_description",
        "name_key": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_name",
        "zh": {
          "description": "不仅能防寒，而且是一年中主要节日的象征",
          "full_description": "不仅能防寒，而且是一年中主要节日的象征",
          "name": "圣诞警长外套"
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
                "inventory_stack_id": "wls2_xmas_21_armor_body_6_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmas_21_armor_body_6_epic_recycle"
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
            "stack_id": "wls2_xmas_21_armor_body_6_epic",
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
            "stack_id": "wls2_xmas_21_armor_body_6_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_xmas_21_armor_body_4_epic",
      "stat_curves": {
        "armor": {
          "1": 1500,
          "2": 1650,
          "3": 1800,
          "4": 1950,
          "5": 2100,
          "per_level_after_max": 1
        },
        "evasion": {
          "1": 0.01,
          "2": 0.02,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05
        },
        "max_durability": {
          "1": 40352,
          "2": 44387,
          "3": 48422,
          "4": 52458,
          "5": 56493
        },
        "warm_modifier": {
          "1": 3,
          "2": 3,
          "3": 3,
          "4": 3,
          "5": 3
        },
        "wisdom": {
          "1": 2,
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
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
      "image_key": "053e2eacc19d4258352a8bb053c28c9c69412dbfa51244276338f6b0efa7ea7f",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞警长外套",
        "name_en": "Santa Sheriff's coat",
        "description_zh": "不仅能防寒，而且是一年中主要节日的象征",
        "description_en": "Protects not only from cold but also a symbol of the main holiday of the year",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_xmas_21_armor_body_6_epic 圣诞警长外套 santa sheriff's coat 不仅能防寒，而且是一年中主要节日的象征 protects not only from cold but also a symbol of the main holiday of the year armor 护甲 body chest armor armor_storage"
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
            "value": 40352,
            "unit": "",
            "display": "40352"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": 2,
            "unit": "",
            "display": "+2"
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
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 1500,
              "evasion": 0.01,
              "max_durability": 40352,
              "wisdom": 2
            },
            "display": {
              "armor": "1500",
              "evasion": "+1%",
              "max_durability": "40352",
              "wisdom": "+2"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 1650,
              "evasion": 0.02,
              "max_durability": 44387,
              "wisdom": 3
            },
            "display": {
              "armor": "1650",
              "evasion": "+2%",
              "max_durability": "44387",
              "wisdom": "+3"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1800,
              "evasion": 0.03,
              "max_durability": 48422,
              "wisdom": 4
            },
            "display": {
              "armor": "1800",
              "evasion": "+3%",
              "max_durability": "48422",
              "wisdom": "+4"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1950,
              "evasion": 0.04,
              "max_durability": 52458,
              "wisdom": 5
            },
            "display": {
              "armor": "1950",
              "evasion": "+4%",
              "max_durability": "52458",
              "wisdom": "+5"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 2100,
              "evasion": 0.05,
              "max_durability": 56493,
              "wisdom": 6
            },
            "display": {
              "armor": "2100",
              "evasion": "+5%",
              "max_durability": "56493",
              "wisdom": "+6"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 2101,
              "evasion": 0.05,
              "max_durability": 56493,
              "wisdom": 6
            },
            "display": {
              "armor": "2101",
              "evasion": "+5%",
              "max_durability": "56493",
              "wisdom": "+6"
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
      "bodypart": 12,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 12,
        "description": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_description",
        "name": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_xmas_21_armor_body_4_epic",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_xmas_21_armor_body_7_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_description",
        "en": {
          "description": "Protects not only from cold but also a symbol of the main holiday of the year",
          "full_description": "Protects not only from cold but also a symbol of the main holiday of the year",
          "name": "Santa Sheriff's coat"
        },
        "full_description_key": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_description",
        "name_key": "inventory_stack_view_wls2_xmas_21_armor_body_4_epic_name",
        "zh": {
          "description": "不仅能防寒，而且是一年中主要节日的象征",
          "full_description": "不仅能防寒，而且是一年中主要节日的象征",
          "name": "圣诞警长外套"
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
                "inventory_stack_id": "wls2_xmas_21_armor_body_7_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmas_21_armor_body_7_epic_recycle"
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
            "stack_id": "wls2_xmas_21_armor_body_7_epic",
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
            "stack_id": "wls2_xmas_21_armor_body_7_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_xmas_21_armor_body_4_epic",
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
        "evasion": {
          "1": 0.01,
          "2": 0.02,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05
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
        },
        "wisdom": {
          "1": 2,
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
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
      "image_key": "053e2eacc19d4258352a8bb053c28c9c69412dbfa51244276338f6b0efa7ea7f",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞警长外套",
        "name_en": "Santa Sheriff's coat",
        "description_zh": "不仅能防寒，而且是一年中主要节日的象征",
        "description_en": "Protects not only from cold but also a symbol of the main holiday of the year",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_xmas_21_armor_body_7_epic 圣诞警长外套 santa sheriff's coat 不仅能防寒，而且是一年中主要节日的象征 protects not only from cold but also a symbol of the main holiday of the year armor 护甲 body chest armor armor_storage"
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
            "key": "wisdom",
            "label": "精神",
            "value": 2,
            "unit": "",
            "display": "+2"
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
              "armor": 3000,
              "evasion": 0.01,
              "max_durability": 69400,
              "wisdom": 2
            },
            "display": {
              "armor": "3000",
              "evasion": "+1%",
              "max_durability": "69400",
              "wisdom": "+2"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 3300,
              "evasion": 0.02,
              "max_durability": 76300,
              "wisdom": 3
            },
            "display": {
              "armor": "3300",
              "evasion": "+2%",
              "max_durability": "76300",
              "wisdom": "+3"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 3600,
              "evasion": 0.03,
              "max_durability": 83250,
              "wisdom": 4
            },
            "display": {
              "armor": "3600",
              "evasion": "+3%",
              "max_durability": "83250",
              "wisdom": "+4"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 3900,
              "evasion": 0.04,
              "max_durability": 90200,
              "wisdom": 5
            },
            "display": {
              "armor": "3900",
              "evasion": "+4%",
              "max_durability": "90200",
              "wisdom": "+5"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 4200,
              "evasion": 0.05,
              "max_durability": 97150,
              "wisdom": 6
            },
            "display": {
              "armor": "4200",
              "evasion": "+5%",
              "max_durability": "97150",
              "wisdom": "+6"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 4201,
              "evasion": 0.05,
              "max_durability": 97150,
              "wisdom": 6
            },
            "display": {
              "armor": "4201",
              "evasion": "+5%",
              "max_durability": "97150",
              "wisdom": "+6"
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
      "bodypart": 15,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 15,
        "description": "inventory_stack_view_wls_xmas_red_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_xmas_red_boots_description",
        "name": "inventory_stack_view_wls_xmas_red_boots_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_boots",
        "tags": [
          "boots",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_xmas_21_armor_boots_3_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls_xmas_red_boots_description",
        "en": {
          "description": "Warm holiday boots will help to get through the snow",
          "full_description": "Warm holiday boots will help to get through the snow",
          "name": "Santa's red boots"
        },
        "full_description_key": "inventory_stack_view_wls_xmas_red_boots_description",
        "name_key": "inventory_stack_view_wls_xmas_red_boots_name",
        "zh": {
          "description": "温暖厚实的节日靴子，可帮助你在雪地上行走。",
          "full_description": "温暖厚实的节日靴子，可帮助你在雪地上行走。",
          "name": "圣诞老人的红色靴子"
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
                "wls2_resourse_fourfold_nails_3": 3,
                "wls2_resourse_secondary_leather_3": 4,
                "wls2_resourse_secondary_rope_3": 4
              },
              "result": {
                "inventory_stack_id": "wls2_xmas_21_armor_boots_3_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmas_21_armor_boots_3_rare_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_xmas_23_currency_firework": 150,
                "wls2_xmas_25_currency_firework": 150
              },
              "result": {
                "inventory_stack_id": "wls2_xmas_21_armor_boots_3_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas_21_trader_wls2_xmas_21_armor_boots_3_rare"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_boots",
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
        "max_durability": {
          "1": 1071,
          "2": 1171,
          "3": 1299,
          "4": 1399,
          "5": 1499
        },
        "move_speed_modifier": {
          "1": 0.2,
          "2": 0.2,
          "3": 0.2,
          "4": 0.2,
          "5": 0.2
        },
        "warm_modifier": {
          "1": 2,
          "2": 2,
          "3": 2,
          "4": 2,
          "5": 2
        },
        "wisdom": {
          "1": 2,
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
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
      "subcategory": "boots",
      "tags": [
        "boots",
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
      "image_key": "b45f6221df7319425dedd8013e453ec614ebe2b8bf95954512c159945d69e97d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞老人的红色靴子",
        "name_en": "Santa's red boots",
        "description_zh": "温暖厚实的节日靴子，可帮助你在雪地上行走。",
        "description_en": "Warm holiday boots will help to get through the snow",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_xmas_21_armor_boots_3_rare 圣诞老人的红色靴子 santa's red boots 温暖厚实的节日靴子，可帮助你在雪地上行走。 warm holiday boots will help to get through the snow armor 护甲 boots boots armor armor_storage festive"
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
            "value": 1071,
            "unit": "",
            "display": "1071"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": 2,
            "unit": "",
            "display": "+2"
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
              "armor": 50,
              "max_durability": 1071,
              "wisdom": 2
            },
            "display": {
              "armor": "50",
              "max_durability": "1071",
              "wisdom": "+2"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 55,
              "max_durability": 1171,
              "wisdom": 3
            },
            "display": {
              "armor": "55",
              "max_durability": "1171",
              "wisdom": "+3"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 60,
              "max_durability": 1299,
              "wisdom": 4
            },
            "display": {
              "armor": "60",
              "max_durability": "1299",
              "wisdom": "+4"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 65,
              "max_durability": 1399,
              "wisdom": 5
            },
            "display": {
              "armor": "65",
              "max_durability": "1399",
              "wisdom": "+5"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 70,
              "max_durability": 1499,
              "wisdom": 6
            },
            "display": {
              "armor": "70",
              "max_durability": "1499",
              "wisdom": "+6"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 71,
              "max_durability": 1499,
              "wisdom": 6
            },
            "display": {
              "armor": "71",
              "max_durability": "1499",
              "wisdom": "+6"
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
          },
          {
            "key": "wisdom",
            "label": "精神",
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
      "bodypart": 12,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 12,
        "description": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_description",
        "name": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_xmas_21_armor_boots_4_epic",
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
      "item_id": "wls2_xmas_21_armor_boots_4_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_description",
        "en": {
          "description": "Holiday comes in boots like this",
          "full_description": "Holiday comes in boots like this",
          "name": "Santa Sheriff’s boots"
        },
        "full_description_key": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_description",
        "name_key": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_name",
        "zh": {
          "description": "圣诞节就该穿这样的靴子",
          "full_description": "圣诞节就该穿这样的靴子",
          "name": "圣诞警长靴子"
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
                "inventory_stack_id": "wls2_xmas_21_armor_boots_4_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmas_21_armor_boots_4_epic_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_xmas_23_currency_firework": 1500,
                "wls2_xmas_25_currency_firework": 1500
              },
              "result": {
                "inventory_stack_id": "wls2_xmas_21_armor_boots_4_epic",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas_21_trader_wls2_xmas_21_armor_boots_4_epic"
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
            "stack_id": "wls2_xmas_21_armor_boots_4_epic",
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
            "stack_id": "wls2_xmas_21_armor_boots_4_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_xmas_21_armor_boots_4_epic",
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
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "evasion": {
          "1": 0.01,
          "2": 0.02,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05
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
        },
        "wisdom": {
          "1": 2,
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
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
      "image_key": "f500e257d02539d25808f083ac753c95e629657d078f3467c81204b2d40aa040",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞警长靴子",
        "name_en": "Santa Sheriff’s boots",
        "description_zh": "圣诞节就该穿这样的靴子",
        "description_en": "Holiday comes in boots like this",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_xmas_21_armor_boots_4_epic 圣诞警长靴子 santa sheriff’s boots 圣诞节就该穿这样的靴子 holiday comes in boots like this armor 护甲 boots armor boots armor_storage festive"
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
            "key": "wisdom",
            "label": "精神",
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
              "armor": 125,
              "evasion": 0.01,
              "max_durability": 6262,
              "wisdom": 2
            },
            "display": {
              "armor": "125",
              "evasion": "+1%",
              "max_durability": "6262",
              "wisdom": "+2"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 137,
              "evasion": 0.02,
              "max_durability": 6888,
              "wisdom": 3
            },
            "display": {
              "armor": "137",
              "evasion": "+2%",
              "max_durability": "6888",
              "wisdom": "+3"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 149,
              "evasion": 0.03,
              "max_durability": 7515,
              "wisdom": 4
            },
            "display": {
              "armor": "149",
              "evasion": "+3%",
              "max_durability": "7515",
              "wisdom": "+4"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 161,
              "evasion": 0.04,
              "max_durability": 8141,
              "wisdom": 5
            },
            "display": {
              "armor": "161",
              "evasion": "+4%",
              "max_durability": "8141",
              "wisdom": "+5"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 179,
              "evasion": 0.05,
              "max_durability": 8767,
              "wisdom": 6
            },
            "display": {
              "armor": "179",
              "evasion": "+5%",
              "max_durability": "8767",
              "wisdom": "+6"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 180,
              "evasion": 0.05,
              "max_durability": 8767,
              "wisdom": 6
            },
            "display": {
              "armor": "180",
              "evasion": "+5%",
              "max_durability": "8767",
              "wisdom": "+6"
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
      "bodypart": 26,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 26,
        "description": "inventory_stack_view_wls2_armor_xmas_21_elf_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_xmas_21_elf_boots_description",
        "name": "inventory_stack_view_wls2_armor_xmas_21_elf_boots_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_xmas2020_elf_boots",
        "tags": [
          "boots",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_xmas_21_armor_boots_4_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_xmas_21_elf_boots_description",
        "en": {
          "description": "Gifts delivery is a lot of work and running around",
          "full_description": "Gifts delivery is a lot of work and running around",
          "name": "Courier elf's boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_xmas_21_elf_boots_description",
        "name_key": "inventory_stack_view_wls2_armor_xmas_21_elf_boots_name",
        "zh": {
          "description": "递送礼物是个费力活儿，而且要跑来跑去",
          "full_description": "递送礼物是个费力活儿，而且要跑来跑去",
          "name": "邮递员精灵靴子"
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
                "wls2_resourse_fourfold_nails_4": 3,
                "wls2_resourse_secondary_leather_4": 4,
                "wls2_resourse_secondary_rope_4": 4
              },
              "result": {
                "inventory_stack_id": "wls2_xmas_21_armor_boots_4_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmas_21_armor_boots_4_rare_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_xmas_23_currency_firework": 300,
                "wls2_xmas_25_currency_firework": 300
              },
              "result": {
                "inventory_stack_id": "wls2_xmas_21_armor_boots_4_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas_21_trader_wls2_xmas_21_armor_boots_4_rare"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_xmas2020_elf_boots",
      "stat_curves": {
        "armor": {
          "1": 95,
          "2": 105,
          "3": 110,
          "4": 120,
          "5": 130,
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
          "3": 2,
          "4": 2,
          "5": 3
        },
        "max_durability": {
          "1": 3777,
          "2": 4179,
          "3": 4572,
          "4": 4970,
          "5": 5368
        },
        "move_speed_modifier": {
          "1": 0.2,
          "2": 0.2,
          "3": 0.2,
          "4": 0.2,
          "5": 0.2
        },
        "warm_modifier": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1
        },
        "wisdom": {
          "1": 2,
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
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
      "subcategory": "boots",
      "tags": [
        "boots",
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
      "image_key": "2b8c6e5e132f6491e31022fe34f7c65aa77580fca9e27b850ef3a6571dcac00b",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "邮递员精灵靴子",
        "name_en": "Courier elf's boots",
        "description_zh": "递送礼物是个费力活儿，而且要跑来跑去",
        "description_en": "Gifts delivery is a lot of work and running around",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_xmas_21_armor_boots_4_rare 邮递员精灵靴子 courier elf's boots 递送礼物是个费力活儿，而且要跑来跑去 gifts delivery is a lot of work and running around armor 护甲 boots boots armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 95,
            "unit": "",
            "display": "95"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 3777,
            "unit": "",
            "display": "3777"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 1,
            "unit": "",
            "display": "+1"
          },
          {
            "key": "wisdom",
            "label": "精神",
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
            "value": 0.2,
            "unit": "%",
            "display": "+20%"
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
              "armor": 95,
              "dexterity": 1,
              "max_durability": 3777,
              "wisdom": 2
            },
            "display": {
              "armor": "95",
              "dexterity": "+1",
              "max_durability": "3777",
              "wisdom": "+2"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 105,
              "dexterity": 1,
              "max_durability": 4179,
              "wisdom": 3
            },
            "display": {
              "armor": "105",
              "dexterity": "+1",
              "max_durability": "4179",
              "wisdom": "+3"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 110,
              "dexterity": 2,
              "max_durability": 4572,
              "wisdom": 4
            },
            "display": {
              "armor": "110",
              "dexterity": "+2",
              "max_durability": "4572",
              "wisdom": "+4"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 120,
              "dexterity": 2,
              "max_durability": 4970,
              "wisdom": 5
            },
            "display": {
              "armor": "120",
              "dexterity": "+2",
              "max_durability": "4970",
              "wisdom": "+5"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 130,
              "dexterity": 3,
              "max_durability": 5368,
              "wisdom": 6
            },
            "display": {
              "armor": "130",
              "dexterity": "+3",
              "max_durability": "5368",
              "wisdom": "+6"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 131,
              "dexterity": 3,
              "max_durability": 5368,
              "wisdom": 6
            },
            "display": {
              "armor": "131",
              "dexterity": "+3",
              "max_durability": "5368",
              "wisdom": "+6"
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
            "key": "wisdom",
            "label": "精神",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1130。"
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
      "bodypart": 12,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 12,
        "description": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_description",
        "name": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_xmas_21_armor_boots_4_epic",
        "tags": [
          "armor",
          "boots",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_xmas_21_armor_boots_5_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_description",
        "en": {
          "description": "Holiday comes in boots like this",
          "full_description": "Holiday comes in boots like this",
          "name": "Santa Sheriff’s boots"
        },
        "full_description_key": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_description",
        "name_key": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_name",
        "zh": {
          "description": "圣诞节就该穿这样的靴子",
          "full_description": "圣诞节就该穿这样的靴子",
          "name": "圣诞警长靴子"
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
                "inventory_stack_id": "wls2_xmas_21_armor_boots_5_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmas_21_armor_boots_5_epic_recycle"
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
            "stack_id": "wls2_xmas_21_armor_boots_5_epic",
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
            "stack_id": "wls2_xmas_21_armor_boots_5_epic",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_xmas_21_armor_boots_4_epic",
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
        "evasion": {
          "1": 0.01,
          "2": 0.02,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05
        },
        "max_durability": {
          "1": 17934,
          "2": 19727,
          "3": 21521,
          "4": 23314,
          "5": 25108
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
        "wisdom": {
          "1": 2,
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
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
      "image_key": "f500e257d02539d25808f083ac753c95e629657d078f3467c81204b2d40aa040",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞警长靴子",
        "name_en": "Santa Sheriff’s boots",
        "description_zh": "圣诞节就该穿这样的靴子",
        "description_en": "Holiday comes in boots like this",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_xmas_21_armor_boots_5_epic 圣诞警长靴子 santa sheriff’s boots 圣诞节就该穿这样的靴子 holiday comes in boots like this armor 护甲 boots armor boots armor_storage"
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
            "value": 17934,
            "unit": "",
            "display": "17934"
          },
          {
            "key": "wisdom",
            "label": "精神",
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
              "armor": 240,
              "evasion": 0.01,
              "max_durability": 17934,
              "wisdom": 2
            },
            "display": {
              "armor": "240",
              "evasion": "+1%",
              "max_durability": "17934",
              "wisdom": "+2"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 264,
              "evasion": 0.02,
              "max_durability": 19727,
              "wisdom": 3
            },
            "display": {
              "armor": "264",
              "evasion": "+2%",
              "max_durability": "19727",
              "wisdom": "+3"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 288,
              "evasion": 0.03,
              "max_durability": 21521,
              "wisdom": 4
            },
            "display": {
              "armor": "288",
              "evasion": "+3%",
              "max_durability": "21521",
              "wisdom": "+4"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 312,
              "evasion": 0.04,
              "max_durability": 23314,
              "wisdom": 5
            },
            "display": {
              "armor": "312",
              "evasion": "+4%",
              "max_durability": "23314",
              "wisdom": "+5"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 336,
              "evasion": 0.05,
              "max_durability": 25108,
              "wisdom": 6
            },
            "display": {
              "armor": "336",
              "evasion": "+5%",
              "max_durability": "25108",
              "wisdom": "+6"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 337,
              "evasion": 0.05,
              "max_durability": 25108,
              "wisdom": 6
            },
            "display": {
              "armor": "337",
              "evasion": "+5%",
              "max_durability": "25108",
              "wisdom": "+6"
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
      "bodypart": 12,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 12,
        "description": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_description",
        "name": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_xmas_21_armor_boots_4_epic",
        "tags": [
          "armor",
          "boots",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_xmas_21_armor_boots_6_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_description",
        "en": {
          "description": "Holiday comes in boots like this",
          "full_description": "Holiday comes in boots like this",
          "name": "Santa Sheriff’s boots"
        },
        "full_description_key": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_description",
        "name_key": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_name",
        "zh": {
          "description": "圣诞节就该穿这样的靴子",
          "full_description": "圣诞节就该穿这样的靴子",
          "name": "圣诞警长靴子"
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
                "inventory_stack_id": "wls2_xmas_21_armor_boots_6_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmas_21_armor_boots_6_epic_recycle"
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
            "stack_id": "wls2_xmas_21_armor_boots_6_epic",
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
            "stack_id": "wls2_xmas_21_armor_boots_6_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_xmas_21_armor_boots_4_epic",
      "stat_curves": {
        "armor": {
          "1": 430,
          "2": 473,
          "3": 516,
          "4": 559,
          "5": 602,
          "per_level_after_max": 1
        },
        "evasion": {
          "1": 0.01,
          "2": 0.02,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05
        },
        "max_durability": {
          "1": 32281,
          "2": 35509,
          "3": 38737,
          "4": 41965,
          "5": 45193
        },
        "move_speed_modifier": {
          "1": 0.23,
          "2": 0.23,
          "3": 0.23,
          "4": 0.23,
          "5": 0.23
        },
        "warm_modifier": {
          "1": 2.5,
          "2": 2.5,
          "3": 2.5,
          "4": 2.5,
          "5": 2.5
        },
        "wisdom": {
          "1": 2,
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
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
      "image_key": "f500e257d02539d25808f083ac753c95e629657d078f3467c81204b2d40aa040",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞警长靴子",
        "name_en": "Santa Sheriff’s boots",
        "description_zh": "圣诞节就该穿这样的靴子",
        "description_en": "Holiday comes in boots like this",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_xmas_21_armor_boots_6_epic 圣诞警长靴子 santa sheriff’s boots 圣诞节就该穿这样的靴子 holiday comes in boots like this armor 护甲 boots armor boots armor_storage"
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
            "value": 32281,
            "unit": "",
            "display": "32281"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": 2,
            "unit": "",
            "display": "+2"
          },
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.23,
            "unit": "%",
            "display": "+23%"
          }
        ],
        "fixed": [
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
              "evasion": 0.01,
              "max_durability": 32281,
              "wisdom": 2
            },
            "display": {
              "armor": "430",
              "evasion": "+1%",
              "max_durability": "32281",
              "wisdom": "+2"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 473,
              "evasion": 0.02,
              "max_durability": 35509,
              "wisdom": 3
            },
            "display": {
              "armor": "473",
              "evasion": "+2%",
              "max_durability": "35509",
              "wisdom": "+3"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 516,
              "evasion": 0.03,
              "max_durability": 38737,
              "wisdom": 4
            },
            "display": {
              "armor": "516",
              "evasion": "+3%",
              "max_durability": "38737",
              "wisdom": "+4"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 559,
              "evasion": 0.04,
              "max_durability": 41965,
              "wisdom": 5
            },
            "display": {
              "armor": "559",
              "evasion": "+4%",
              "max_durability": "41965",
              "wisdom": "+5"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 602,
              "evasion": 0.05,
              "max_durability": 45193,
              "wisdom": 6
            },
            "display": {
              "armor": "602",
              "evasion": "+5%",
              "max_durability": "45193",
              "wisdom": "+6"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 603,
              "evasion": 0.05,
              "max_durability": 45193,
              "wisdom": 6
            },
            "display": {
              "armor": "603",
              "evasion": "+5%",
              "max_durability": "45193",
              "wisdom": "+6"
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
      "bodypart": 12,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 12,
        "description": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_description",
        "name": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary06/wls2_xmas_21_armor_boots_4_epic",
        "tags": [
          "armor",
          "boots",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_xmas_21_armor_boots_7_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_description",
        "en": {
          "description": "Holiday comes in boots like this",
          "full_description": "Holiday comes in boots like this",
          "name": "Santa Sheriff’s boots"
        },
        "full_description_key": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_description",
        "name_key": "inventory_stack_view_wls2_xmas_21_armor_boots_4_epic_name",
        "zh": {
          "description": "圣诞节就该穿这样的靴子",
          "full_description": "圣诞节就该穿这样的靴子",
          "name": "圣诞警长靴子"
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
                "inventory_stack_id": "wls2_xmas_21_armor_boots_7_epic"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmas_21_armor_boots_7_epic_recycle"
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
            "stack_id": "wls2_xmas_21_armor_boots_7_epic",
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
            "stack_id": "wls2_xmas_21_armor_boots_7_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_xmas_21_armor_boots_4_epic",
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
        "evasion": {
          "1": 0.01,
          "2": 0.02,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05
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
        },
        "wisdom": {
          "1": 2,
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
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
      "image_key": "f500e257d02539d25808f083ac753c95e629657d078f3467c81204b2d40aa040",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞警长靴子",
        "name_en": "Santa Sheriff’s boots",
        "description_zh": "圣诞节就该穿这样的靴子",
        "description_en": "Holiday comes in boots like this",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_xmas_21_armor_boots_7_epic 圣诞警长靴子 santa sheriff’s boots 圣诞节就该穿这样的靴子 holiday comes in boots like this armor 护甲 boots armor boots armor_storage"
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
            "key": "wisdom",
            "label": "精神",
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
              "evasion": 0.01,
              "max_durability": 61400,
              "wisdom": 2
            },
            "display": {
              "armor": "860",
              "evasion": "+1%",
              "max_durability": "61400",
              "wisdom": "+2"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 946,
              "evasion": 0.02,
              "max_durability": 67500,
              "wisdom": 3
            },
            "display": {
              "armor": "946",
              "evasion": "+2%",
              "max_durability": "67500",
              "wisdom": "+3"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1032,
              "evasion": 0.03,
              "max_durability": 73650,
              "wisdom": 4
            },
            "display": {
              "armor": "1032",
              "evasion": "+3%",
              "max_durability": "73650",
              "wisdom": "+4"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1118,
              "evasion": 0.04,
              "max_durability": 79800,
              "wisdom": 5
            },
            "display": {
              "armor": "1118",
              "evasion": "+4%",
              "max_durability": "79800",
              "wisdom": "+5"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1204,
              "evasion": 0.05,
              "max_durability": 85900,
              "wisdom": 6
            },
            "display": {
              "armor": "1204",
              "evasion": "+5%",
              "max_durability": "85900",
              "wisdom": "+6"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1205,
              "evasion": 0.05,
              "max_durability": 85900,
              "wisdom": 6
            },
            "display": {
              "armor": "1205",
              "evasion": "+5%",
              "max_durability": "85900",
              "wisdom": "+6"
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
      "bodypart": 18,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 18,
        "description": "inventory_stack_view_wls_xmas_red_hat_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_xmas_red_hat_description",
        "name": "inventory_stack_view_wls_xmas_red_hat_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_hat",
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
      "item_id": "wls2_xmas_21_armor_head_3_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls_xmas_red_hat_description",
        "en": {
          "description": "A warm cap with a festive look will not let your ears freeze.",
          "full_description": "A warm cap with a festive look will not let your ears freeze.",
          "name": "Santa's red cap"
        },
        "full_description_key": "inventory_stack_view_wls_xmas_red_hat_description",
        "name_key": "inventory_stack_view_wls_xmas_red_hat_name",
        "zh": {
          "description": "有着华丽节庆外观的温暖毛帽，让你的耳朵不再受冻。",
          "full_description": "有着华丽节庆外观的温暖毛帽，让你的耳朵不再受冻。",
          "name": "圣诞老人的红色毛帽"
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
                "wls2_resourse_secondary_cloth_3": 4,
                "wls2_resourse_secondary_leather_3": 5
              },
              "result": {
                "inventory_stack_id": "wls2_xmas_21_armor_head_3_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmas_21_armor_head_3_rare_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_xmas_23_currency_firework": 150,
                "wls2_xmas_25_currency_firework": 150
              },
              "result": {
                "inventory_stack_id": "wls2_xmas_21_armor_head_3_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas_21_trader_wls2_xmas_21_armor_head_3_rare"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_hat",
      "stat_curves": {
        "armor": {
          "1": 70,
          "2": 75,
          "3": 80,
          "4": 85,
          "5": 90,
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
          "1": 1428,
          "2": 1571,
          "3": 1714,
          "4": 1856,
          "5": 1999
        },
        "warm_modifier": {
          "1": 2,
          "2": 2,
          "3": 2,
          "4": 2,
          "5": 2
        },
        "wisdom": {
          "1": 2,
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
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
      "image_key": "66bd2803d0637af52c9ccb0edbf4b7de9d586f48d6b1d6885de14bc1bc529f35",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞老人的红色毛帽",
        "name_en": "Santa's red cap",
        "description_zh": "有着华丽节庆外观的温暖毛帽，让你的耳朵不再受冻。",
        "description_en": "A warm cap with a festive look will not let your ears freeze.",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_xmas_21_armor_head_3_rare 圣诞老人的红色毛帽 santa's red cap 有着华丽节庆外观的温暖毛帽，让你的耳朵不再受冻。 a warm cap with a festive look will not let your ears freeze. armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 70,
            "unit": "",
            "display": "70"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 1428,
            "unit": "",
            "display": "1428"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": 2,
            "unit": "",
            "display": "+2"
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
            "value": 2,
            "unit": "",
            "display": "2"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 70,
              "max_durability": 1428,
              "wisdom": 2
            },
            "display": {
              "armor": "70",
              "max_durability": "1428",
              "wisdom": "+2"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 75,
              "max_durability": 1571,
              "wisdom": 3
            },
            "display": {
              "armor": "75",
              "max_durability": "1571",
              "wisdom": "+3"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 80,
              "max_durability": 1714,
              "wisdom": 4
            },
            "display": {
              "armor": "80",
              "max_durability": "1714",
              "wisdom": "+4"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 85,
              "max_durability": 1856,
              "wisdom": 5
            },
            "display": {
              "armor": "85",
              "max_durability": "1856",
              "wisdom": "+5"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 90,
              "max_durability": 1999,
              "wisdom": 6
            },
            "display": {
              "armor": "90",
              "max_durability": "1999",
              "wisdom": "+6"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 91,
              "max_durability": 1999,
              "wisdom": 6
            },
            "display": {
              "armor": "91",
              "max_durability": "1999",
              "wisdom": "+6"
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
          },
          {
            "key": "wisdom",
            "label": "精神",
            "unit": ""
          }
        ],
        "notes": [
          "防御：6 级起每级增加 1，最高 1090。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    }
  ]
};
