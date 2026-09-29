/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-equipment-11"] = {
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
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_range_pistol_1_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_pistol_1_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_pistol_1_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary05/Weapon_range_firearms_pistol_4",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_pistol_1_common"
      },
      "item_id": "wls2_weapon_range_pistol_1_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_pistol_1_common_description",
        "en": {
          "description": "A simple and not very reliable pistol, yet better than a knife or a club",
          "full_description": "A simple and not very reliable pistol, yet better than a knife or a club",
          "name": "Wheel Lock pistol"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_pistol_1_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_pistol_1_common_name",
        "zh": {
          "description": "一把简单且不太可靠的手枪，但比刀或棍棒更好",
          "full_description": "一把简单且不太可靠的手枪，但比刀或棍棒更好",
          "name": "轮锁手枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_1": 1,
            "wls2_resourse_secondary_ingot_1": 2,
            "wls2_resourse_secondary_plank_1": 2
          },
          "learn_exp": 100,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_pistol_1_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_10coins_dynamic_smuggler_offer_pistol_1"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_pistol_1_common"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_ftue_ab_tutorial_trader_slot_6"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_pistol_1_common"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_pistol_1_common"
          },
          {
            "definition": {
              "ingredients": {
                "wls_bear_claw": 5,
                "wls_wolf_fang": 5
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_range_pistol_1_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_tutorial_trader_offer_pistol_1"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/Weapon_range_firearms_pistol_4",
      "stat_curves": {
        "damage": {
          "1": 70,
          "2": 77,
          "3": 84,
          "4": 91,
          "5": 98,
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
        "pistol",
        "fire_weapon"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 1,
        "attack_range": 4,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_pistol_02"
        ],
        "hit_sounds": [
          "wls_pistol_02"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Pistol_Wheellock",
        "prefab_pbr_id": "@Pistol_Wheellock_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_pistol_1_common",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.3,
        "attack_damage_time": 0.3,
        "attack_ending_time": 1,
        "attack_range": 4,
        "attacks_per_second_inferred": 0.7692307692307692,
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
      "image_key": "e1521919aa0b04d63743afb4278154e0285ffc739148040b624f7bfde8b69be3",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "轮锁手枪",
        "name_en": "Wheel Lock pistol",
        "description_zh": "一把简单且不太可靠的手枪，但比刀或棍棒更好",
        "description_en": "A simple and not very reliable pistol, yet better than a knife or a club",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_pistol_1_common 轮锁手枪 wheel lock pistol 一把简单且不太可靠的手枪，但比刀或棍棒更好 a simple and not very reliable pistol, yet better than a knife or a club weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_pistol_1_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 70,
            "unit": "",
            "display": "70"
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
            "value": 100,
            "unit": "",
            "display": "100"
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
              "damage": 70
            },
            "display": {
              "damage": "70"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 77
            },
            "display": {
              "damage": "77"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 84
            },
            "display": {
              "damage": "84"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 91
            },
            "display": {
              "damage": "91"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 98
            },
            "display": {
              "damage": "98"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 99
            },
            "display": {
              "damage": "99"
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
          "伤害：6 级起每级增加 1，最高 1098。",
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
        "description": "inventory_stack_view_wls2_weapon_range_pistol_2_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_pistol_2_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_pistol_2_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary05/wls_pepperbox",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_pistol_2_common"
      },
      "item_id": "wls2_weapon_range_pistol_2_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_pistol_2_common_description",
        "en": {
          "description": "The first revolver. Simple and affordable",
          "full_description": "The first revolver. Simple and affordable",
          "name": "Pepperbox Gun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_pistol_2_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_pistol_2_common_name",
        "zh": {
          "description": "第一把左轮手枪，简单粗暴。",
          "full_description": "第一把左轮手枪，简单粗暴。",
          "name": "胡椒瓶"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_2": 1,
            "wls2_resourse_fourfold_nails_2": 1,
            "wls2_resourse_secondary_ingot_2": 2
          },
          "learn_exp": 200,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_pistol_2_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_50coins_dynamyc_smuggler_offer_pistol_2"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_pistol_2_common"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_pistol_2_common"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls_pepperbox",
      "stat_curves": {
        "damage": {
          "1": 112,
          "2": 123,
          "3": 135,
          "4": 146,
          "5": 157,
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
        "pistol",
        "fire_weapon"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 1,
        "attack_range": 4,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_musket_01"
        ],
        "hit_sounds": [
          "wls_musket_01"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Pistol_Pepperbox",
        "prefab_pbr_id": "@Pistol_Pepperbox_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_pistol_2_common",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.3,
        "attack_damage_time": 0.3,
        "attack_ending_time": 1,
        "attack_range": 4,
        "attacks_per_second_inferred": 0.7692307692307692,
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
      "image_key": "4d9fda55290d5e6f24220921e0f63dc71f799737d53dee14069c8e426deb1798",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "胡椒瓶",
        "name_en": "Pepperbox Gun",
        "description_zh": "第一把左轮手枪，简单粗暴。",
        "description_en": "The first revolver. Simple and affordable",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_pistol_2_common 胡椒瓶 pepperbox gun 第一把左轮手枪，简单粗暴。 the first revolver. simple and affordable weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_pistol_2_common"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "fixed": [
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
              "damage": 112
            },
            "display": {
              "damage": "112"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 123
            },
            "display": {
              "damage": "123"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 135
            },
            "display": {
              "damage": "135"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 146
            },
            "display": {
              "damage": "146"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 157
            },
            "display": {
              "damage": "157"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 158
            },
            "display": {
              "damage": "158"
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
          "伤害：6 级起每级增加 1，最高 1157。",
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
        "description": "inventory_stack_view_wls2_weapon_range_pistol_2_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_pistol_2_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_range_pistol_2_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_pistol_2_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_pistol_2_uncommon"
      },
      "item_id": "wls2_weapon_range_pistol_2_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_pistol_2_uncommon_description",
        "en": {
          "description": "Mechanically sound with an elegant wooden grip",
          "full_description": "Mechanically sound with an elegant wooden grip",
          "name": "Mariette"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_pistol_2_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_pistol_2_uncommon_name",
        "zh": {
          "description": "机械声响与高质量影木握柄相辅相成",
          "full_description": "机械声响与高质量影木握柄相辅相成",
          "name": "玛丽耶特"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_2": 3,
            "wls2_resourse_fourfold_nails_2": 2,
            "wls2_resourse_secondary_ingot_2": 4
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
                "inventory_stack_id": "wls2_weapon_range_pistol_2_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_ftue_ab_tutorial_trader_slot_7"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_pistol_2_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_pistol_2_uncommon"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_pistol_2_uncommon_icon",
      "stat_curves": {
        "damage": {
          "1": 155,
          "2": 170,
          "3": 186,
          "4": 201,
          "5": 217,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 145,
          "2": 145,
          "3": 145,
          "4": 145,
          "5": 145
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
      "subcategory": "pistol",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "pistol",
        "fire_weapon"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 1,
        "attack_range": 4,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_musket_02"
        ],
        "hit_sounds": [
          "wls_musket_02"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Pistol_Marietta",
        "prefab_pbr_id": "@Pistol_Marietta_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_pistol_2_uncommon",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.3,
        "attack_damage_time": 0.3,
        "attack_ending_time": 1,
        "attack_range": 4,
        "attacks_per_second_inferred": 0.7692307692307692,
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
      "image_key": "d7af64f2ff81aa61da02f6f458abfb630bb79b9e70663880622d7a608092d696",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "玛丽耶特",
        "name_en": "Mariette",
        "description_zh": "机械声响与高质量影木握柄相辅相成",
        "description_en": "Mechanically sound with an elegant wooden grip",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_pistol_2_uncommon 玛丽耶特 mariette 机械声响与高质量影木握柄相辅相成 mechanically sound with an elegant wooden grip weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_pistol_2_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 155,
            "unit": "",
            "display": "155"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "fixed": [
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
              "damage": 155
            },
            "display": {
              "damage": "155"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 170
            },
            "display": {
              "damage": "170"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 186
            },
            "display": {
              "damage": "186"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 201
            },
            "display": {
              "damage": "201"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 217
            },
            "display": {
              "damage": "217"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 218
            },
            "display": {
              "damage": "218"
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
          "伤害：6 级起每级增加 1，最高 1217。",
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
        "description": "inventory_stack_view_wls2_weapon_range_pistol_3_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_pistol_3_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_pistol_3_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary05/Weapon_range_firearms_pistol_3",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_pistol_3_common"
      },
      "item_id": "wls2_weapon_range_pistol_3_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_pistol_3_common_description",
        "en": {
          "description": "Challenging bandits to duels is a bad idea, but this pistol will help you thin their ranks.",
          "full_description": "Challenging bandits to duels is a bad idea, but this pistol will help you thin their ranks.",
          "name": "Dueling pistol"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_pistol_3_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_pistol_3_common_name",
        "zh": {
          "description": "挑唆强盗引发冲突不是个好主意，但这把手枪能帮助你减少他们的数量。",
          "full_description": "挑唆强盗引发冲突不是个好主意，但这把手枪能帮助你减少他们的数量。",
          "name": "决斗手枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_3": 1,
            "wls2_resourse_fourfold_nails_3": 1,
            "wls2_resourse_secondary_ingot_3": 2
          },
          "learn_exp": 400,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_pistol_3_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_100coins_dynamic_smuggler_offer_pistol_3"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_pistol_3_common"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_pistol_3_common"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/Weapon_range_firearms_pistol_3",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.1
        },
        "damage": {
          "1": 189,
          "2": 207,
          "3": 226,
          "4": 245,
          "5": 264,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 165,
          "2": 165,
          "3": 165,
          "4": 165,
          "5": 165
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
        "pistol",
        "fire_weapon"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 1,
        "attack_range": 4,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_pistol_01"
        ],
        "hit_sounds": [
          "wls_pistol_01"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Pistol_Flint",
        "prefab_pbr_id": "@Pistol_Flint_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_pistol_3_common",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.3,
        "attack_damage_time": 0.3,
        "attack_ending_time": 1,
        "attack_range": 4,
        "attacks_per_second_inferred": 0.7692307692307692,
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
      "image_key": "1cafb1556f741e875d2ff326e72cf21ddaec45b505620799854d68b68faec569",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "决斗手枪",
        "name_en": "Dueling pistol",
        "description_zh": "挑唆强盗引发冲突不是个好主意，但这把手枪能帮助你减少他们的数量。",
        "description_en": "Challenging bandits to duels is a bad idea, but this pistol will help you thin their ranks.",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_pistol_3_common 决斗手枪 dueling pistol 挑唆强盗引发冲突不是个好主意，但这把手枪能帮助你减少他们的数量。 challenging bandits to duels is a bad idea, but this pistol will help you thin their ranks. weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_pistol_3_common"
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
            "value": 0.7692307692307692,
            "unit": "次/秒",
            "display": "0.77 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 165,
            "unit": "",
            "display": "165"
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
            "value": 0.1,
            "unit": "%",
            "display": "10%"
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
              "damage": 189
            },
            "display": {
              "damage": "189"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 207
            },
            "display": {
              "damage": "207"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 226
            },
            "display": {
              "damage": "226"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 245
            },
            "display": {
              "damage": "245"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 264
            },
            "display": {
              "damage": "264"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 265
            },
            "display": {
              "damage": "265"
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
        "description": "inventory_stack_view_wls2_weapon_range_revolver_3_rare_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_revolver_3_rare_description",
        "name": "inventory_stack_view_wls2_weapon_range_revolver_3_rare_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_revolver_3_rare_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_revolver_3_rare"
      },
      "item_id": "wls2_weapon_range_revolver_3_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_revolver_3_rare_description",
        "en": {
          "description": "Also known as the “Texas Paterson”",
          "full_description": "Also known as the “Texas Paterson”",
          "name": "Colt Paterson"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_revolver_3_rare_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_3_rare_name",
        "zh": {
          "description": "又名“德克萨斯·帕特森”",
          "full_description": "又名“德克萨斯·帕特森”",
          "name": "柯尔特-帕特森"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_3": 4,
            "wls2_resourse_fourfold_nails_3": 8,
            "wls2_resourse_secondary_ingot_3": 8
          },
          "learn_exp": 800,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_20_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_revolver_3_rare"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_revolver_3_rare"
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
            "stack_id": "wls2_weapon_range_revolver_3_rare",
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
            "stack_id": "wls2_weapon_range_revolver_3_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_revolver_3_rare_icon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.1
        },
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.12,
          "3": 0.14,
          "4": 0.16,
          "5": 0.18
        },
        "damage": {
          "1": 377,
          "2": 415,
          "3": 453,
          "4": 490,
          "5": 528,
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
        "pistol",
        "fire_weapon"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
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
        "prefab_common_id": "@Revolver_Colt_Paterson",
        "prefab_pbr_id": "@Revolver_Colt_Paterson_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_revolver_3_rare",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 4,
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
      "image_key": "acf129fa4d9e1ca8c3215ed04b0aacc31e8c308efb87c15094fddc427437f36b",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "柯尔特-帕特森",
        "name_en": "Colt Paterson",
        "description_zh": "又名“德克萨斯·帕特森”",
        "description_en": "Also known as the “Texas Paterson”",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_revolver_3_rare 柯尔特-帕特森 colt paterson 又名“德克萨斯·帕特森” also known as the “texas paterson” weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_revolver_3_rare"
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
            "value": 4,
            "unit": "",
            "display": "4"
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
              "critical_hit_chance": 0.1,
              "damage": 377
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "377"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.12,
              "damage": 415
            },
            "display": {
              "critical_hit_chance": "12%",
              "damage": "415"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.14,
              "damage": 453
            },
            "display": {
              "critical_hit_chance": "14%",
              "damage": "453"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.16,
              "damage": 490
            },
            "display": {
              "critical_hit_chance": "16%",
              "damage": "490"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 528
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "528"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 529
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "529"
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_range_revolver_3_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_revolver_3_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_range_revolver_3_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary05/wls_remington",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_revolver_3_uncommon"
      },
      "item_id": "wls2_weapon_range_revolver_3_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_revolver_3_uncommon_description",
        "en": {
          "description": "Elegant and reliable gun with a solid-frame design",
          "full_description": "Elegant and reliable gun with a solid-frame design",
          "name": "Remington"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_revolver_3_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_3_uncommon_name",
        "zh": {
          "description": "精致且值得信赖，框架结实",
          "full_description": "精致且值得信赖，框架结实",
          "name": "雷明顿左轮手枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_3": 3,
            "wls2_resourse_fourfold_nails_3": 6,
            "wls2_resourse_secondary_ingot_3": 6
          },
          "learn_exp": 800,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_8_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_uncommon_desc"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_revolver_3_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_100coins_dynamic_smuggler_offer_revolver_3"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_revolver_3_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_revolver_3_uncommon"
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
            "stack_id": "wls2_weapon_range_revolver_3_uncommon",
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
            "stack_id": "wls2_weapon_range_revolver_3_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls_remington",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.1
        },
        "damage": {
          "1": 267,
          "2": 294,
          "3": 320,
          "4": 348,
          "5": 374,
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
        "pistol",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_3"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_5"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
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
        "prefab_common_id": "@Revolver_Remington",
        "prefab_pbr_id": "@Revolver_Remington_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_revolver_3_uncommon",
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
      "image_key": "185299245ebd023adf41d06f4386d4c73a6ad9932932cfb6b5f47eec03b7cb5f",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "雷明顿左轮手枪",
        "name_en": "Remington",
        "description_zh": "精致且值得信赖，框架结实",
        "description_en": "Elegant and reliable gun with a solid-frame design",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_revolver_3_uncommon 雷明顿左轮手枪 remington 精致且值得信赖，框架结实 elegant and reliable gun with a solid-frame design weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_revolver_3_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 267,
            "unit": "",
            "display": "267"
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
            "value": 5,
            "unit": "",
            "display": "5"
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
              "damage": 267
            },
            "display": {
              "damage": "267"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 294
            },
            "display": {
              "damage": "294"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 320
            },
            "display": {
              "damage": "320"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 348
            },
            "display": {
              "damage": "348"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 374
            },
            "display": {
              "damage": "374"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 375
            },
            "display": {
              "damage": "375"
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
          "伤害：6 级起每级增加 1，最高 1374。",
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
        "description": "inventory_stack_view_wls2_weapon_range_revolver_4_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_revolver_4_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_revolver_4_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary05/wls_colt",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_revolver_4_common"
      },
      "item_id": "wls2_weapon_range_revolver_4_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_revolver_4_common_description",
        "en": {
          "description": "As effective as a common rifle at 100 yards",
          "full_description": "As effective as a common rifle at 100 yards",
          "name": "Colt Walker"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_revolver_4_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_4_common_name",
        "zh": {
          "description": "与普通步枪相同，有效射程达到 100 码",
          "full_description": "与普通步枪相同，有效射程达到 100 码",
          "name": "柯尔特-步行者"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_4": 1,
            "wls2_resourse_fourfold_nails_4": 4,
            "wls2_resourse_secondary_ingot_4": 4
          },
          "learn_exp": 800,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_revolver_4_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_weapon_3"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_revolver_4_common"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_revolver_4_common"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls_colt",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.2
        },
        "damage": {
          "1": 310,
          "2": 340,
          "3": 372,
          "4": 402,
          "5": 434,
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
        "pistol",
        "fire_weapon"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_pistol_05"
        ],
        "hit_sounds": [
          "wls_pistol_05"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Revolver_Colt_Walker",
        "prefab_pbr_id": "@Revolver_Colt_Walker_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_revolver_4_common",
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
      "image_key": "13506a7fb2eba81c83068bf1633a7bfc9e4166d08d5edd7aa47d772d9c5ce656",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "柯尔特-步行者",
        "name_en": "Colt Walker",
        "description_zh": "与普通步枪相同，有效射程达到 100 码",
        "description_en": "As effective as a common rifle at 100 yards",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_revolver_4_common 柯尔特-步行者 colt walker 与普通步枪相同，有效射程达到 100 码 as effective as a common rifle at 100 yards weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_revolver_4_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 310,
            "unit": "",
            "display": "310"
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
              "damage": 310,
              "penetrating_damage": 9
            },
            "display": {
              "damage": "310",
              "penetrating_damage": "9"
            }
          },
          {
            "level": 2,
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
            "level": 3,
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
            "level": 4,
            "values": {
              "damage": 402,
              "penetrating_damage": 12
            },
            "display": {
              "damage": "402",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 434,
              "penetrating_damage": 13
            },
            "display": {
              "damage": "434",
              "penetrating_damage": "13"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 435,
              "penetrating_damage": 13
            },
            "display": {
              "damage": "435",
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
          "伤害：6 级起每级增加 1，最高 1434。",
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
        "description": "inventory_stack_view_wls2_weapon_range_revolver_4_rare_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_revolver_4_rare_description",
        "name": "inventory_stack_view_wls2_weapon_range_revolver_4_rare_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_revolver_4_rare_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_revolver_4_rare"
      },
      "item_id": "wls2_weapon_range_revolver_4_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_revolver_4_rare_description",
        "en": {
          "description": "This unique sidearm is also known as the \"Grapeshot Revolver\"",
          "full_description": "This unique sidearm is also known as the \"Grapeshot Revolver\"",
          "name": "LeMat Revolver"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_revolver_4_rare_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_4_rare_name",
        "zh": {
          "description": "这把特别的手枪又名“葡萄弹左轮手枪”",
          "full_description": "这把特别的手枪又名“葡萄弹左轮手枪”",
          "name": "勒马特左轮手枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_4": 4,
            "wls2_resourse_fourfold_nails_4": 8,
            "wls2_resourse_secondary_ingot_4": 8
          },
          "learn_exp": 1600,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_20_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_revolver_4_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_weapon_5"
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
            "stack_id": "wls2_weapon_range_revolver_4_rare",
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
            "stack_id": "wls2_weapon_range_revolver_4_rare",
            "transaction_id": "transaction_iap_wls_4_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_revolver_4_rare_icon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.2
        },
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.13,
          "3": 0.16,
          "4": 0.19,
          "5": 0.22
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
        "pistol",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_15"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_30"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_pistol_05"
        ],
        "hit_sounds": [
          "wls_pistol_05"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Revolver_LeMat",
        "prefab_pbr_id": "@Revolver_LeMat_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_revolver_4_rare",
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
      "image_key": "f2a2ec07fe2069272036293c9c43759841b537fae9c9941ab83158b8a219e5f4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "勒马特左轮手枪",
        "name_en": "LeMat Revolver",
        "description_zh": "这把特别的手枪又名“葡萄弹左轮手枪”",
        "description_en": "This unique sidearm is also known as the \"Grapeshot Revolver\"",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_revolver_4_rare 勒马特左轮手枪 lemat revolver 这把特别的手枪又名“葡萄弹左轮手枪” this unique sidearm is also known as the \"grapeshot revolver\" weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_revolver_4_rare"
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
              "critical_hit_chance": 0.1,
              "damage": 604,
              "penetrating_damage": 18
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "604",
              "penetrating_damage": "18"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 665,
              "penetrating_damage": 20
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "665",
              "penetrating_damage": "20"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.16,
              "damage": 725,
              "penetrating_damage": 22
            },
            "display": {
              "critical_hit_chance": "16%",
              "damage": "725",
              "penetrating_damage": "22"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.19,
              "damage": 785,
              "penetrating_damage": 24
            },
            "display": {
              "critical_hit_chance": "19%",
              "damage": "785",
              "penetrating_damage": "24"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.22,
              "damage": 845,
              "penetrating_damage": 25
            },
            "display": {
              "critical_hit_chance": "22%",
              "damage": "845",
              "penetrating_damage": "25"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.22,
              "damage": 846,
              "penetrating_damage": 25
            },
            "display": {
              "critical_hit_chance": "22%",
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
        "description": "inventory_stack_view_wls2_weapon_range_revolver_4_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_revolver_4_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_range_revolver_4_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_revolver_4_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_revolver_4_uncommon"
      },
      "item_id": "wls2_weapon_range_revolver_4_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_revolver_4_uncommon_description",
        "en": {
          "description": "Powerful and accurate revolver made by Colt",
          "full_description": "Powerful and accurate revolver made by Colt",
          "name": "Peacemaker"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_revolver_4_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_4_uncommon_name",
        "zh": {
          "description": "由柯尔特制造的左轮手枪，精准且威力巨大",
          "full_description": "由柯尔特制造的左轮手枪，精准且威力巨大",
          "name": "和平使者"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_4": 3,
            "wls2_resourse_fourfold_nails_4": 6,
            "wls2_resourse_secondary_ingot_4": 6
          },
          "learn_exp": 1600,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_10_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_uncommon_desc"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_revolver_4_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_weapon_4"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_revolver_4_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_revolver_4_uncommon"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.25,
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_revolver_4_uncommon",
            "transaction_id": "transaction_iap_wls_4_a"
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
            "stack_id": "wls2_weapon_range_revolver_4_uncommon",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_revolver_4_uncommon_icon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.2
        },
        "damage": {
          "1": 427,
          "2": 470,
          "3": 512,
          "4": 555,
          "5": 599,
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
          "1": 13,
          "2": 14,
          "3": 15,
          "4": 17,
          "5": 18
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
        "pistol",
        "fire_weapon"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_pistol_05"
        ],
        "hit_sounds": [
          "wls_pistol_05"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Revolver_Peacekeeper",
        "prefab_pbr_id": "@Revolver_Peacekeeper_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_revolver_4_uncommon",
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
      "image_key": "9ef94a634f60de16eee4f638a854af6b91876c067d84fc4f515f913c592d3a09",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "和平使者",
        "name_en": "Peacemaker",
        "description_zh": "由柯尔特制造的左轮手枪，精准且威力巨大",
        "description_en": "Powerful and accurate revolver made by Colt",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_revolver_4_uncommon 和平使者 peacemaker 由柯尔特制造的左轮手枪，精准且威力巨大 powerful and accurate revolver made by colt weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_revolver_4_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 427,
            "unit": "",
            "display": "427"
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
              "damage": 427,
              "penetrating_damage": 13
            },
            "display": {
              "damage": "427",
              "penetrating_damage": "13"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 470,
              "penetrating_damage": 14
            },
            "display": {
              "damage": "470",
              "penetrating_damage": "14"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 512,
              "penetrating_damage": 15
            },
            "display": {
              "damage": "512",
              "penetrating_damage": "15"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 555,
              "penetrating_damage": 17
            },
            "display": {
              "damage": "555",
              "penetrating_damage": "17"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 599,
              "penetrating_damage": 18
            },
            "display": {
              "damage": "599",
              "penetrating_damage": "18"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 600,
              "penetrating_damage": 18
            },
            "display": {
              "damage": "600",
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
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1599。",
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
        "description": "inventory_stack_view_wls2_weapon_range_revolver_5_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_revolver_5_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_revolver_5_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_range_revolver_5_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_revolver_5_common_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_revolver_5_common"
      },
      "item_id": "wls2_weapon_range_revolver_5_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_revolver_5_common_description",
        "en": {
          "description": "The first firearm manufactured by Smith & Wesson",
          "full_description": "The first firearm manufactured by Smith & Wesson",
          "name": "S&W model 1"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_revolver_5_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_5_common_name",
        "zh": {
          "description": "由史密斯威森公司制造的首款枪械",
          "full_description": "由史密斯威森公司制造的首款枪械",
          "name": "史密斯威森-1型"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_5": 1,
            "wls2_resourse_fourfold_nails_4": 4,
            "wls2_resourse_secondary_ingot_5": 4
          },
          "learn_exp": 1600,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_revolver_5_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_weapon_6"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_revolver_5_common"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_revolver_5_common"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_revolver_5_common_icon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.3
        },
        "damage": {
          "1": 496,
          "2": 545,
          "3": 594,
          "4": 644,
          "5": 694,
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
          "1": 25,
          "2": 27,
          "3": 30,
          "4": 32,
          "5": 35
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
        "pistol",
        "fire_weapon"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_pistol_06"
        ],
        "hit_sounds": [
          "wls_pistol_06"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Revolver_SW_model1",
        "prefab_pbr_id": "@Revolver_SW_model1_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_revolver_5_common",
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
      "image_key": "57e36e3fdbf3836c3d6a105e35e091472dee743752155ce0c94bc4ce54232e51",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "史密斯威森-1型",
        "name_en": "S&W model 1",
        "description_zh": "由史密斯威森公司制造的首款枪械",
        "description_en": "The first firearm manufactured by Smith & Wesson",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_revolver_5_common 史密斯威森-1型 s&w model 1 由史密斯威森公司制造的首款枪械 the first firearm manufactured by smith & wesson weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_revolver_5_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 496,
            "unit": "",
            "display": "496"
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
              "damage": 496,
              "penetrating_damage": 25
            },
            "display": {
              "damage": "496",
              "penetrating_damage": "25"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 545,
              "penetrating_damage": 27
            },
            "display": {
              "damage": "545",
              "penetrating_damage": "27"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 594,
              "penetrating_damage": 30
            },
            "display": {
              "damage": "594",
              "penetrating_damage": "30"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 644,
              "penetrating_damage": 32
            },
            "display": {
              "damage": "644",
              "penetrating_damage": "32"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 694,
              "penetrating_damage": 35
            },
            "display": {
              "damage": "694",
              "penetrating_damage": "35"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 695,
              "penetrating_damage": 35
            },
            "display": {
              "damage": "695",
              "penetrating_damage": "35"
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
          "伤害：6 级起每级增加 1，最高 1694。",
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
        "description": "wls2_weapon_range_revolver_5_epic_description",
        "full_description": "wls2_weapon_range_revolver_5_epic_description",
        "name": "wls2_weapon_range_revolver_5_epic_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_range_revolver_5_epic_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_revolver_5_epic"
      },
      "item_id": "wls2_weapon_range_revolver_5_epic",
      "localization": {
        "description_key": "wls2_weapon_range_revolver_5_epic_description",
        "en": {
          "description": "If the gun barrel was any longer, that'd be a rifle",
          "full_description": "If the gun barrel was any longer, that'd be a rifle",
          "name": "Colt M1900"
        },
        "full_description_key": "wls2_weapon_range_revolver_5_epic_description",
        "name_key": "wls2_weapon_range_revolver_5_epic_name",
        "zh": {
          "description": "要是枪管再长一些，那就是一把步枪了",
          "full_description": "要是枪管再长一些，那就是一把步枪了",
          "name": "柯尔特 M1900"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_industrial_gunparts": 3,
            "wls2_resourse_fourfold_gunparts_5": 3,
            "wls2_resourse_secondary_ingot_5": 10
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
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.25,
            "level_max": 105,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_revolver_5_epic",
            "transaction_id": "transaction_iap_wls_10_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
            "durability_factor": 0.25,
            "level_min": 106,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_revolver_5_epic",
            "transaction_id": "transaction_iap_wls_8_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_range_revolver_5_epic_icon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.3
        },
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.075,
          "3": 0.1,
          "4": 0.15,
          "5": 0.2
        },
        "critical_modifier": {
          "1": 0.05,
          "2": 0.075,
          "3": 0.1,
          "4": 0.15,
          "5": 0.2
        },
        "damage": {
          "1": 1239,
          "2": 1363,
          "3": 1487,
          "4": 1611,
          "5": 1735,
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
          "1": 62,
          "2": 68,
          "3": 74,
          "4": 81,
          "5": 87
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
        "pistol",
        "fire_weapon"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_pistol_06"
        ],
        "hit_sounds": [
          "wls_pistol_06"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Pistol_ColtM1900",
        "prefab_pbr_id": "@Pistol_ColtM1900_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_revolver_5_epic",
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
      "image_key": "0aea6c31bc8ca4924ef5865356eae27f5d953b88341ab6807223eca41e08cfb6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "柯尔特 M1900",
        "name_en": "Colt M1900",
        "description_zh": "要是枪管再长一些，那就是一把步枪了",
        "description_en": "If the gun barrel was any longer, that'd be a rifle",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_range_revolver_5_epic 柯尔特 m1900 colt m1900 要是枪管再长一些，那就是一把步枪了 if the gun barrel was any longer, that'd be a rifle weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_revolver_5_epic"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1239,
            "unit": "",
            "display": "1239"
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
              "critical_hit_chance": 0.05,
              "critical_modifier": 0.05,
              "damage": 1239,
              "penetrating_damage": 62
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "5%",
              "damage": "1239",
              "penetrating_damage": "62"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.075,
              "critical_modifier": 0.075,
              "damage": 1363,
              "penetrating_damage": 68
            },
            "display": {
              "critical_hit_chance": "7.5%",
              "critical_modifier": "7.5%",
              "damage": "1363",
              "penetrating_damage": "68"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.1,
              "critical_modifier": 0.1,
              "damage": 1487,
              "penetrating_damage": 74
            },
            "display": {
              "critical_hit_chance": "10%",
              "critical_modifier": "10%",
              "damage": "1487",
              "penetrating_damage": "74"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.15,
              "critical_modifier": 0.15,
              "damage": 1611,
              "penetrating_damage": 81
            },
            "display": {
              "critical_hit_chance": "15%",
              "critical_modifier": "15%",
              "damage": "1611",
              "penetrating_damage": "81"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 0.2,
              "damage": 1735,
              "penetrating_damage": 87
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "20%",
              "damage": "1735",
              "penetrating_damage": "87"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 0.2,
              "damage": 1736,
              "penetrating_damage": 87
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "20%",
              "damage": "1736",
              "penetrating_damage": "87"
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
          "伤害：6 级起每级增加 1，最高 2735。",
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
        "description": "inventory_stack_view_wls2_weapon_range_revolver_5_rare_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_revolver_5_rare_description",
        "name": "inventory_stack_view_wls2_weapon_range_revolver_5_rare_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_range_revolver_5_rare_name_with_wrapping",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary05/wls_schofield",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_revolver_5_rare"
      },
      "item_id": "wls2_weapon_range_revolver_5_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_revolver_5_rare_description",
        "en": {
          "description": "Single-action revolver designed and manufactured by Smith & Wesson",
          "full_description": "Single-action revolver designed and manufactured by Smith & Wesson",
          "name": "S&W Schofield"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_revolver_5_rare_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_5_rare_name",
        "zh": {
          "description": "由史密斯威森公司研发并制造的单动式左轮手枪",
          "full_description": "由史密斯威森公司研发并制造的单动式左轮手枪",
          "name": "史密斯威森-斯科菲尔德"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_5": 4,
            "wls2_resourse_fourfold_nails_4": 8,
            "wls2_resourse_secondary_ingot_5": 8
          },
          "learn_exp": 3200,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_25_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": []
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
            "stack_id": "wls2_weapon_range_revolver_5_rare",
            "transaction_id": "transaction_iap_wls_8_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_4_a",
            "durability_factor": 0.25,
            "level_min": 106,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_revolver_5_rare",
            "transaction_id": "transaction_iap_wls_5_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls_schofield",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.3
        },
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.15,
          "3": 0.2,
          "4": 0.25,
          "5": 0.3
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
        "pistol",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_25"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_pistol_06"
        ],
        "hit_sounds": [
          "wls_pistol_06"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Revolver_Shofield",
        "prefab_pbr_id": "@Revolver_Shofield_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_revolver_5_rare",
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
      "image_key": "2cb51d344631bad93f2de3d431a61c279a784fd73cd23f596ed1855ba0c118ca",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "史密斯威森-斯科菲尔德",
        "name_en": "S&W Schofield",
        "description_zh": "由史密斯威森公司研发并制造的单动式左轮手枪",
        "description_en": "Single-action revolver designed and manufactured by Smith & Wesson",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_revolver_5_rare 史密斯威森-斯科菲尔德 s&w schofield 由史密斯威森公司研发并制造的单动式左轮手枪 single-action revolver designed and manufactured by smith & wesson weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_revolver_5_rare"
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
              "critical_hit_chance": 0.1,
              "damage": 966,
              "penetrating_damage": 48
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "966",
              "penetrating_damage": "48"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 1063,
              "penetrating_damage": 53
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "1063",
              "penetrating_damage": "53"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 1159,
              "penetrating_damage": 58
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "1159",
              "penetrating_damage": "58"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 1256,
              "penetrating_damage": 63
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "1256",
              "penetrating_damage": "63"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 1352,
              "penetrating_damage": 68
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "1352",
              "penetrating_damage": "68"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 1353,
              "penetrating_damage": 68
            },
            "display": {
              "critical_hit_chance": "30%",
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
        "description": "inventory_stack_view_wls2_weapon_range_revolver_5_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_revolver_5_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_range_revolver_5_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_range_revolver_5_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_revolver_5_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_revolver_5_uncommon"
      },
      "item_id": "wls2_weapon_range_revolver_5_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_revolver_5_uncommon_description",
        "en": {
          "description": "Pearl-handled revolver with elaborate engraving",
          "full_description": "Pearl-handled revolver with elaborate engraving",
          "name": "S&W model 2"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_revolver_5_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_5_uncommon_name",
        "zh": {
          "description": "握柄带有珍珠且纹理雕刻精巧的左轮手枪",
          "full_description": "握柄带有珍珠且纹理雕刻精巧的左轮手枪",
          "name": "史密斯威森-2 型"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_5": 3,
            "wls2_resourse_fourfold_nails_4": 6,
            "wls2_resourse_secondary_ingot_5": 6
          },
          "learn_exp": 1600,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_10_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_uncommon_desc"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_revolver_5_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_weapon_7"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_revolver_5_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_revolver_5_uncommon"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_5_a",
            "durability_factor": 0.25,
            "level_max": 105,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_revolver_5_uncommon",
            "transaction_id": "transaction_iap_wls_7_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.25,
            "level_min": 106,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_revolver_5_uncommon",
            "transaction_id": "transaction_iap_wls_4_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_revolver_5_uncommon_icon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.3
        },
        "damage": {
          "1": 684,
          "2": 752,
          "3": 820,
          "4": 889,
          "5": 958,
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
          "1": 34,
          "2": 38,
          "3": 41,
          "4": 44,
          "5": 48
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
        "pistol",
        "fire_weapon"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_pistol_06"
        ],
        "hit_sounds": [
          "wls_pistol_06"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Revolver_SW_model2",
        "prefab_pbr_id": "@Revolver_SW_model2_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_revolver_5_uncommon",
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
      "image_key": "82478b0088ecccd4704011194843134a875528b532e569233f3ef8a9696dad1d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "史密斯威森-2 型",
        "name_en": "S&W model 2",
        "description_zh": "握柄带有珍珠且纹理雕刻精巧的左轮手枪",
        "description_en": "Pearl-handled revolver with elaborate engraving",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_revolver_5_uncommon 史密斯威森-2 型 s&w model 2 握柄带有珍珠且纹理雕刻精巧的左轮手枪 pearl-handled revolver with elaborate engraving weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_revolver_5_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 684,
            "unit": "",
            "display": "684"
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
              "damage": 684,
              "penetrating_damage": 34
            },
            "display": {
              "damage": "684",
              "penetrating_damage": "34"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 752,
              "penetrating_damage": 38
            },
            "display": {
              "damage": "752",
              "penetrating_damage": "38"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 820,
              "penetrating_damage": 41
            },
            "display": {
              "damage": "820",
              "penetrating_damage": "41"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 889,
              "penetrating_damage": 44
            },
            "display": {
              "damage": "889",
              "penetrating_damage": "44"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 958,
              "penetrating_damage": 48
            },
            "display": {
              "damage": "958",
              "penetrating_damage": "48"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 959,
              "penetrating_damage": 48
            },
            "display": {
              "damage": "959",
              "penetrating_damage": "48"
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
          "伤害：6 级起每级增加 1，最高 1958。",
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
        "description": "inventory_stack_view_wls2_weapon_range_revolver_6_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_revolver_6_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_revolver_6_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_revolver_6_common",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_revolver_6_common"
      },
      "item_id": "wls2_weapon_range_revolver_6_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_revolver_6_common_description",
        "en": {
          "description": "The nickname \"Horse Picker\" comes from the factory logo on the handle",
          "full_description": "The nickname \"Horse Picker\" comes from the factory logo on the handle",
          "name": "Browning No.1"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_revolver_6_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_6_common_name",
        "zh": {
          "description": "“马挑工”这个绰号来自于手柄上的工厂标志",
          "full_description": "“马挑工”这个绰号来自于手柄上的工厂标志",
          "name": "布朗宁No.1"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_6": 1,
            "wls2_resourse_fourfold_nails_6": 4,
            "wls2_resourse_secondary_ingot_6": 4
          },
          "learn_exp": 3200,
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
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_revolver_6_common",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.4
        },
        "damage": {
          "1": 794,
          "2": 873,
          "3": 952,
          "4": 1032,
          "5": 1111,
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
          "2": 52,
          "3": 57,
          "4": 62,
          "5": 67
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
        "pistol",
        "fire_weapon"
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
          "coin_id": "spend_coin_soft_110"
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
          "coin_id": "spend_coin_soft_120"
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
          "coin_id": "spend_coin_soft_130"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_pistol_06"
        ],
        "hit_sounds": [
          "wls_pistol_06"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Pistol_BrowningM1900",
        "prefab_pbr_id": "@Pistol_BrowningM1900_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_revolver_6_common",
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
      "image_key": "b61b5e4f15a5b31481307abce34c6a420e3846fc58ff901ead93f4e79b23e1d1",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "布朗宁No.1",
        "name_en": "Browning No.1",
        "description_zh": "“马挑工”这个绰号来自于手柄上的工厂标志",
        "description_en": "The nickname \"Horse Picker\" comes from the factory logo on the handle",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_revolver_6_common 布朗宁no.1 browning no.1 “马挑工”这个绰号来自于手柄上的工厂标志 the nickname \"horse picker\" comes from the factory logo on the handle weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_revolver_6_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 794,
            "unit": "",
            "display": "794"
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
              "damage": 794,
              "penetrating_damage": 48
            },
            "display": {
              "damage": "794",
              "penetrating_damage": "48"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 873,
              "penetrating_damage": 52
            },
            "display": {
              "damage": "873",
              "penetrating_damage": "52"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 952,
              "penetrating_damage": 57
            },
            "display": {
              "damage": "952",
              "penetrating_damage": "57"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 1032,
              "penetrating_damage": 62
            },
            "display": {
              "damage": "1032",
              "penetrating_damage": "62"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 1111,
              "penetrating_damage": 67
            },
            "display": {
              "damage": "1111",
              "penetrating_damage": "67"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 1112,
              "penetrating_damage": 67
            },
            "display": {
              "damage": "1112",
              "penetrating_damage": "67"
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
          "伤害：6 级起每级增加 1，最高 2111。",
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
        "description": "inventory_stack_view_wls2_weapon_range_revolver_6_epic_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_revolver_6_epic_description",
        "name": "inventory_stack_view_wls2_weapon_range_revolver_6_epic_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_revolver_6_epic",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_revolver_6_epic"
      },
      "item_id": "wls2_weapon_range_revolver_6_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_revolver_6_epic_description",
        "en": {
          "description": "This Mauser got its name from the distinctive, slender grip",
          "full_description": "This Mauser got its name from the distinctive, slender grip",
          "name": "Mauser Broomhandle"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_revolver_6_epic_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_6_epic_name",
        "zh": {
          "description": "这把毛瑟枪得名于其独特的细长握把",
          "full_description": "这把毛瑟枪得名于其独特的细长握把",
          "name": "毛瑟扫帚手枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_industrial_gunparts": 4,
            "wls2_resourse_fourfold_gunparts_6": 3,
            "wls2_resourse_secondary_ingot_6": 10
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
            "stack_id": "wls2_weapon_range_revolver_6_epic",
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
            "stack_id": "wls2_weapon_range_revolver_6_epic",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_revolver_6_epic",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.4
        },
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.075,
          "3": 0.1,
          "4": 0.15,
          "5": 0.2
        },
        "critical_modifier": {
          "1": 0.05,
          "2": 0.075,
          "3": 0.1,
          "4": 0.15,
          "5": 0.2
        },
        "damage": {
          "1": 1982,
          "2": 2181,
          "3": 2379,
          "4": 2577,
          "5": 2775,
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
          "1": 119,
          "2": 131,
          "3": 143,
          "4": 155,
          "5": 167
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
        "pistol",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_500"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_pistol_06"
        ],
        "hit_sounds": [
          "wls_pistol_06"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Revolver_Mauser_C96",
        "prefab_pbr_id": "@Revolver_Mauser_C96_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_revolver_6_epic",
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
      "image_key": "0775273df6034152545d3eea59f0efb461f7d94f1f2797233b6f16ddf24e2981",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "毛瑟扫帚手枪",
        "name_en": "Mauser Broomhandle",
        "description_zh": "这把毛瑟枪得名于其独特的细长握把",
        "description_en": "This Mauser got its name from the distinctive, slender grip",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_range_revolver_6_epic 毛瑟扫帚手枪 mauser broomhandle 这把毛瑟枪得名于其独特的细长握把 this mauser got its name from the distinctive, slender grip weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_revolver_6_epic"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1982,
            "unit": "",
            "display": "1982"
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
              "critical_hit_chance": 0.05,
              "critical_modifier": 0.05,
              "damage": 1982,
              "penetrating_damage": 119
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "5%",
              "damage": "1982",
              "penetrating_damage": "119"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.075,
              "critical_modifier": 0.075,
              "damage": 2181,
              "penetrating_damage": 131
            },
            "display": {
              "critical_hit_chance": "7.5%",
              "critical_modifier": "7.5%",
              "damage": "2181",
              "penetrating_damage": "131"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.1,
              "critical_modifier": 0.1,
              "damage": 2379,
              "penetrating_damage": 143
            },
            "display": {
              "critical_hit_chance": "10%",
              "critical_modifier": "10%",
              "damage": "2379",
              "penetrating_damage": "143"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.15,
              "critical_modifier": 0.15,
              "damage": 2577,
              "penetrating_damage": 155
            },
            "display": {
              "critical_hit_chance": "15%",
              "critical_modifier": "15%",
              "damage": "2577",
              "penetrating_damage": "155"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 0.2,
              "damage": 2775,
              "penetrating_damage": 167
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "20%",
              "damage": "2775",
              "penetrating_damage": "167"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 0.2,
              "damage": 2776,
              "penetrating_damage": 167
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "20%",
              "damage": "2776",
              "penetrating_damage": "167"
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
          "伤害：6 级起每级增加 1，最高 3775。",
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
        "description": "inventory_stack_view_wls2_weapon_range_revolver_6_rare_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_revolver_6_rare_description",
        "name": "inventory_stack_view_wls2_weapon_range_revolver_6_rare_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_revolver_6_rare",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_revolver_6_rare"
      },
      "item_id": "wls2_weapon_range_revolver_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_revolver_6_rare_description",
        "en": {
          "description": "\"If you want peace, prepare for war\" is the motto of its maker",
          "full_description": "\"If you want peace, prepare for war\" is the motto of its maker",
          "name": "Parabellum"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_revolver_6_rare_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_6_rare_name",
        "zh": {
          "description": "\"如果你想要和平，就要准备战争\"，是它制造者的座右铭",
          "full_description": "\"如果你想要和平，就要准备战争\"，是它制造者的座右铭",
          "name": "巴拉贝勒姆"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_6": 4,
            "wls2_resourse_fourfold_nails_6": 8,
            "wls2_resourse_secondary_ingot_6": 8
          },
          "learn_exp": 6400,
          "min_level": 0,
          "required_electricity": 10,
          "transaction_id": "transaction_iap_wls_25_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.25,
            "level_max": 120,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_revolver_6_rare",
            "transaction_id": "transaction_iap_wls_10_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
            "durability_factor": 0.25,
            "level_min": 121,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_revolver_6_rare",
            "transaction_id": "transaction_iap_wls_8_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_revolver_6_rare",
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
        "pistol",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_100"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_pistol_06"
        ],
        "hit_sounds": [
          "wls_pistol_06"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Pistol_Luger_1900",
        "prefab_pbr_id": "@Pistol_Luger_1900_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_revolver_6_rare",
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
      "image_key": "d5b147d592c6a47c0d1aae1b4e8bf426c387c05f17cb770e7577101193eedb3f",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "巴拉贝勒姆",
        "name_en": "Parabellum",
        "description_zh": "\"如果你想要和平，就要准备战争\"，是它制造者的座右铭",
        "description_en": "\"If you want peace, prepare for war\" is the motto of its maker",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_revolver_6_rare 巴拉贝勒姆 parabellum \"如果你想要和平，就要准备战争\"，是它制造者的座右铭 \"if you want peace, prepare for war\" is the motto of its maker weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_revolver_6_rare"
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
              "critical_hit_chance": 0.1,
              "damage": 1546,
              "penetrating_damage": 93
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "1546",
              "penetrating_damage": "93"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 1700,
              "penetrating_damage": 102
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "1700",
              "penetrating_damage": "102"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 1855,
              "penetrating_damage": 111
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "1855",
              "penetrating_damage": "111"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 2009,
              "penetrating_damage": 121
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "2009",
              "penetrating_damage": "121"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 2164,
              "penetrating_damage": 130
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "2164",
              "penetrating_damage": "130"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 2165,
              "penetrating_damage": 130
            },
            "display": {
              "critical_hit_chance": "30%",
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
        "description": "inventory_stack_view_wls2_weapon_range_revolver_6_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_revolver_6_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_range_revolver_6_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_revolver_6_uncommon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_revolver_6_uncommon"
      },
      "item_id": "wls2_weapon_range_revolver_6_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_revolver_6_uncommon_description",
        "en": {
          "description": "Innovative design, historic firepower",
          "full_description": "Innovative design, historic firepower",
          "name": "Borchardt Auto Pistol"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_revolver_6_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_6_uncommon_name",
        "zh": {
          "description": "创新设计，历史火力",
          "full_description": "创新设计，历史火力",
          "name": "博查德自动手枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_6": 3,
            "wls2_resourse_fourfold_nails_6": 6,
            "wls2_resourse_secondary_ingot_6": 6
          },
          "learn_exp": 3200,
          "min_level": 0,
          "required_electricity": 8,
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
            "discounted_transaction_id": "transaction_iap_wls_6_a",
            "durability_factor": 0.25,
            "level_max": 120,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_revolver_6_uncommon",
            "transaction_id": "transaction_iap_wls_8_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_4_a",
            "durability_factor": 0.25,
            "level_min": 121,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_revolver_6_uncommon",
            "transaction_id": "transaction_iap_wls_5_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_revolver_6_uncommon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.4
        },
        "damage": {
          "1": 1094,
          "2": 1204,
          "3": 1313,
          "4": 1423,
          "5": 1532,
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
          "1": 66,
          "2": 72,
          "3": 79,
          "4": 85,
          "5": 92
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
        "pistol",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_15"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_30"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_pistol_06"
        ],
        "hit_sounds": [
          "wls_pistol_06"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Borchardt_C-93",
        "prefab_pbr_id": "@Borchardt_C-93_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_revolver_6_uncommon",
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
      "image_key": "0ae8062ef9830c0732a5411f6161fba5a7614c082dfa83f8a87d23aea549dfb2",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "博查德自动手枪",
        "name_en": "Borchardt Auto Pistol",
        "description_zh": "创新设计，历史火力",
        "description_en": "Innovative design, historic firepower",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_revolver_6_uncommon 博查德自动手枪 borchardt auto pistol 创新设计，历史火力 innovative design, historic firepower weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_revolver_6_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1094,
            "unit": "",
            "display": "1094"
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
              "damage": 1094,
              "penetrating_damage": 66
            },
            "display": {
              "damage": "1094",
              "penetrating_damage": "66"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 1204,
              "penetrating_damage": 72
            },
            "display": {
              "damage": "1204",
              "penetrating_damage": "72"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 1313,
              "penetrating_damage": 79
            },
            "display": {
              "damage": "1313",
              "penetrating_damage": "79"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 1423,
              "penetrating_damage": 85
            },
            "display": {
              "damage": "1423",
              "penetrating_damage": "85"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 1532,
              "penetrating_damage": 92
            },
            "display": {
              "damage": "1532",
              "penetrating_damage": "92"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 1533,
              "penetrating_damage": 92
            },
            "display": {
              "damage": "1533",
              "penetrating_damage": "92"
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
          "伤害：6 级起每级增加 1，最高 2532。",
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
        "full_description": "wls2_weapon_range_revolver_7_common_description",
        "name": "wls2_weapon_range_revolver_7_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_revolver_7_common_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_revolver_7_common"
      },
      "item_id": "wls2_weapon_range_revolver_7_common",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": "Heavy and loud, taking a unique place in revolver evolution",
          "name": "Nagant M1910"
        },
        "full_description_key": "wls2_weapon_range_revolver_7_common_description",
        "name_key": "wls2_weapon_range_revolver_7_common_name",
        "zh": {
          "description": null,
          "full_description": "重的，响的，占据着左轮手枪进化中独特的位置",
          "name": "纳甘 M1910"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_7": 1,
            "wls2_resourse_fourfold_nails_7": 4,
            "wls2_resourse_secondary_ingot_7": 4
          },
          "learn_exp": 3200,
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
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_revolver_7_common_icon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.5
        },
        "damage": {
          "1": 1270,
          "2": 1397,
          "3": 1524,
          "4": 1652,
          "5": 1779,
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
          "1": 76,
          "2": 84,
          "3": 91,
          "4": 99,
          "5": 107
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
        "pistol",
        "fire_weapon"
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
          "coin_id": "spend_coin_soft_130"
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
          "coin_id": "spend_coin_soft_140"
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
          "coin_id": "spend_coin_soft_150"
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
          "coin_id": "spend_coin_soft_160"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_pistol_06"
        ],
        "hit_sounds": [
          "wls_pistol_06"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Revolver_Nagant_pbr",
        "prefab_pbr_id": "@Revolver_Nagant_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_revolver_7_common",
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
      "image_key": "4b097d4fea1af29eeda7d919913f2c32eac914baf06519af05dd55181db56c42",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "纳甘 M1910",
        "name_en": "Nagant M1910",
        "description_zh": "重的，响的，占据着左轮手枪进化中独特的位置",
        "description_en": "Heavy and loud, taking a unique place in revolver evolution",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_revolver_7_common 纳甘 m1910 nagant m1910 重的，响的，占据着左轮手枪进化中独特的位置 heavy and loud, taking a unique place in revolver evolution weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_revolver_7_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1270,
            "unit": "",
            "display": "1270"
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
              "damage": 1270,
              "penetrating_damage": 76
            },
            "display": {
              "damage": "1270",
              "penetrating_damage": "76"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 1397,
              "penetrating_damage": 84
            },
            "display": {
              "damage": "1397",
              "penetrating_damage": "84"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 1524,
              "penetrating_damage": 91
            },
            "display": {
              "damage": "1524",
              "penetrating_damage": "91"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 1652,
              "penetrating_damage": 99
            },
            "display": {
              "damage": "1652",
              "penetrating_damage": "99"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 1779,
              "penetrating_damage": 107
            },
            "display": {
              "damage": "1779",
              "penetrating_damage": "107"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 1780,
              "penetrating_damage": 107
            },
            "display": {
              "damage": "1780",
              "penetrating_damage": "107"
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
          "伤害：6 级起每级增加 1，最高 2779。",
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
        "name": "wls2_weapon_range_revolver_7_epic_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_revolver_7_epic_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_revolver_7_epic"
      },
      "item_id": "wls2_weapon_range_revolver_7_epic",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Volcanic pistol"
        },
        "full_description_key": null,
        "name_key": "wls2_weapon_range_revolver_7_epic_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "火山手枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_industrial_gunparts": 6,
            "wls2_resourse_fourfold_gunparts_7": 3,
            "wls2_resourse_secondary_ingot_7": 10
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
            "discounted_transaction_id": "transaction_iap_wls_12_a",
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
            "stack_id": "wls2_weapon_range_revolver_7_epic",
            "transaction_id": "transaction_iap_wls_15_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
            "durability_factor": 0.25,
            "level_min": 131,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_revolver_7_epic",
            "transaction_id": "transaction_iap_wls_12_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_revolver_7_epic_icon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.5
        },
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.075,
          "3": 0.1,
          "4": 0.15,
          "5": 0.2
        },
        "critical_modifier": {
          "1": 0.05,
          "2": 0.075,
          "3": 0.1,
          "4": 0.15,
          "5": 0.2
        },
        "damage": {
          "1": 3171,
          "2": 3488,
          "3": 3805,
          "4": 4123,
          "5": 4440,
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
          "1": 190,
          "2": 209,
          "3": 228,
          "4": 247,
          "5": 266
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
        "pistol",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_150"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_250"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_400"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_750"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_pistol_06"
        ],
        "hit_sounds": [
          "wls_pistol_06"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Revolver_Volcanic_No1_pbr",
        "prefab_pbr_id": "@Revolver_Volcanic_No1_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_revolver_7_epic",
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
      "image_key": "78f65abe60a51c14a46906cb41b3fda42fb93369901996987dacd298402ef410",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "火山手枪",
        "name_en": "Volcanic pistol",
        "description_zh": "",
        "description_en": "",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_range_revolver_7_epic 火山手枪 volcanic pistol weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_revolver_7_epic"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 3171,
            "unit": "",
            "display": "3171"
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
              "critical_hit_chance": 0.05,
              "critical_modifier": 0.05,
              "damage": 3171,
              "penetrating_damage": 190
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "5%",
              "damage": "3171",
              "penetrating_damage": "190"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.075,
              "critical_modifier": 0.075,
              "damage": 3488,
              "penetrating_damage": 209
            },
            "display": {
              "critical_hit_chance": "7.5%",
              "critical_modifier": "7.5%",
              "damage": "3488",
              "penetrating_damage": "209"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.1,
              "critical_modifier": 0.1,
              "damage": 3805,
              "penetrating_damage": 228
            },
            "display": {
              "critical_hit_chance": "10%",
              "critical_modifier": "10%",
              "damage": "3805",
              "penetrating_damage": "228"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.15,
              "critical_modifier": 0.15,
              "damage": 4123,
              "penetrating_damage": 247
            },
            "display": {
              "critical_hit_chance": "15%",
              "critical_modifier": "15%",
              "damage": "4123",
              "penetrating_damage": "247"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 0.2,
              "damage": 4440,
              "penetrating_damage": 266
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "20%",
              "damage": "4440",
              "penetrating_damage": "266"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 0.2,
              "damage": 4441,
              "penetrating_damage": 266
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "20%",
              "damage": "4441",
              "penetrating_damage": "266"
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
          "伤害：6 级起每级增加 1，最高 5440。",
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
        "name": "wls2_weapon_range_revolver_7_rare_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_revolver_7_rare_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_revolver_7_rare"
      },
      "item_id": "wls2_weapon_range_revolver_7_rare",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Bergmann mars 1903"
        },
        "full_description_key": null,
        "name_key": "wls2_weapon_range_revolver_7_rare_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "伯格曼 火星 1903"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_7": 4,
            "wls2_resourse_fourfold_nails_7": 8,
            "wls2_resourse_secondary_ingot_7": 8
          },
          "learn_exp": 6400,
          "min_level": 0,
          "required_electricity": 20,
          "transaction_id": "transaction_iap_wls_25_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
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
            "stack_id": "wls2_weapon_range_revolver_7_rare",
            "transaction_id": "transaction_iap_wls_12_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.25,
            "level_min": 125,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_revolver_7_rare",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_revolver_7_rare_icon",
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
        "pistol",
        "fire_weapon"
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
          "coin_id": "spend_coin_soft_1000"
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
          "coin_id": "spend_coin_soft_2000"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_100"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_200"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_pistol_06"
        ],
        "hit_sounds": [
          "wls_pistol_06"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Revolver_bergmann_mars_pbr",
        "prefab_pbr_id": "@Revolver_bergmann_mars_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_revolver_7_rare",
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
      "image_key": "07220d8bab51df916c0939c58e612d10280ab808179b08e2bac2e0f7f5ee8034",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "伯格曼 火星 1903",
        "name_en": "Bergmann mars 1903",
        "description_zh": "",
        "description_en": "",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_revolver_7_rare 伯格曼 火星 1903 bergmann mars 1903 weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_revolver_7_rare"
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
              "critical_hit_chance": 0.1,
              "damage": 2474,
              "penetrating_damage": 148
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "2474",
              "penetrating_damage": "148"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 2721,
              "penetrating_damage": 163
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "2721",
              "penetrating_damage": "163"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 2968,
              "penetrating_damage": 178
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "2968",
              "penetrating_damage": "178"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 3216,
              "penetrating_damage": 193
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "3216",
              "penetrating_damage": "193"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 3463,
              "penetrating_damage": 208
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "3463",
              "penetrating_damage": "208"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 3464,
              "penetrating_damage": 208
            },
            "display": {
              "critical_hit_chance": "30%",
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
        "full_description": "wls2_weapon_range_revolver_7_uncommon_description",
        "name": "wls2_weapon_range_revolver_7_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_revolver_7_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_revolver_7_uncommon"
      },
      "item_id": "wls2_weapon_range_revolver_7_uncommon",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": "Unusual like Viennese coffee, but practical and well-engineered",
          "name": "Roth-Steyr 1907"
        },
        "full_description_key": "wls2_weapon_range_revolver_7_uncommon_description",
        "name_key": "wls2_weapon_range_revolver_7_uncommon_name",
        "zh": {
          "description": null,
          "full_description": "不寻常像维也纳咖啡，但实用和设计精良",
          "name": "罗斯-斯泰尔 1907"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_7": 3,
            "wls2_resourse_fourfold_nails_7": 6,
            "wls2_resourse_secondary_ingot_7": 6
          },
          "learn_exp": 3200,
          "min_level": 0,
          "required_electricity": 16,
          "transaction_id": "transaction_iap_wls_15_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_uncommon_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
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
            "stack_id": "wls2_weapon_range_revolver_7_uncommon",
            "transaction_id": "transaction_iap_wls_8_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_4_a",
            "durability_factor": 0.25,
            "level_min": 125,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_revolver_7_uncommon",
            "transaction_id": "transaction_iap_wls_5_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_revolver_7_uncommon_icon",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.5
        },
        "damage": {
          "1": 1750,
          "2": 1925,
          "3": 2100,
          "4": 2276,
          "5": 2451,
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
          "1": 105,
          "2": 116,
          "3": 126,
          "4": 137,
          "5": 147
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
        "pistol",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_30"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_60"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_pistol_06"
        ],
        "hit_sounds": [
          "wls_pistol_06"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Revolver_RothSteyr_pbr",
        "prefab_pbr_id": "@Revolver_RothSteyr_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_revolver_7_uncommon",
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
      "image_key": "c18a4bdbc1c14b20df8b29fb19dcc82b9e2e14a21e0666249bd6057bf2031ae3",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "罗斯-斯泰尔 1907",
        "name_en": "Roth-Steyr 1907",
        "description_zh": "不寻常像维也纳咖啡，但实用和设计精良",
        "description_en": "Unusual like Viennese coffee, but practical and well-engineered",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_revolver_7_uncommon 罗斯-斯泰尔 1907 roth-steyr 1907 不寻常像维也纳咖啡，但实用和设计精良 unusual like viennese coffee, but practical and well-engineered weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_revolver_7_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1750,
            "unit": "",
            "display": "1750"
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
              "damage": 1750,
              "penetrating_damage": 105
            },
            "display": {
              "damage": "1750",
              "penetrating_damage": "105"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 1925,
              "penetrating_damage": 116
            },
            "display": {
              "damage": "1925",
              "penetrating_damage": "116"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 2100,
              "penetrating_damage": 126
            },
            "display": {
              "damage": "2100",
              "penetrating_damage": "126"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 2276,
              "penetrating_damage": 137
            },
            "display": {
              "damage": "2276",
              "penetrating_damage": "137"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 2451,
              "penetrating_damage": 147
            },
            "display": {
              "damage": "2451",
              "penetrating_damage": "147"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 2452,
              "penetrating_damage": 147
            },
            "display": {
              "damage": "2452",
              "penetrating_damage": "147"
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
          "伤害：6 级起每级增加 1，最高 3451。",
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
        "description": "inventory_stack_view_wls2_weapon_range_rifle_4_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_rifle_4_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_rifle_4_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_firearms_rifle_4",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "rifle",
          "fire_weapon"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_rifle_4_common"
      },
      "item_id": "wls2_weapon_range_rifle_4_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_rifle_4_common_description",
        "en": {
          "description": "A highly accurate weapon designed by Benjamin Tyler Henry",
          "full_description": "A highly accurate weapon designed by Benjamin Tyler Henry",
          "name": "Henry .44 rifle"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_rifle_4_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_rifle_4_common_name",
        "zh": {
          "description": "本杰明·泰勒·亨利设计，精准，顺滑，易于清理。",
          "full_description": "本杰明·泰勒·亨利设计，精准，顺滑，易于清理。",
          "name": "亨利 .44 步枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_4": 2,
            "wls2_resourse_fourfold_nails_4": 2,
            "wls2_resourse_secondary_ingot_4": 4,
            "wls2_resourse_secondary_plank_4": 4
          },
          "learn_exp": 800,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_rifle_4_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_weapon_9"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_rifle_4_common"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_rifle_4_common"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_firearms_rifle_4",
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
          "1": 230,
          "2": 230,
          "3": 230,
          "4": 230,
          "5": 230
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
        "rifle",
        "fire_weapon"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_03"
        ],
        "hit_sounds": [
          "wls_rifle_03"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Riffle_Henry44",
        "prefab_pbr_id": "@Riffle_Henry44_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_rifle_4_common",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.0,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "attacks_per_second_inferred": 1.0,
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
      "image_key": "ade6fbeac7db3e99c266f37cc2d72ac4347c652a2dd34107fb2ff667445dccdd",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "亨利 .44 步枪",
        "name_en": "Henry .44 rifle",
        "description_zh": "本杰明·泰勒·亨利设计，精准，顺滑，易于清理。",
        "description_en": "A highly accurate weapon designed by Benjamin Tyler Henry",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_rifle_4_common 亨利 .44 步枪 henry .44 rifle 本杰明·泰勒·亨利设计，精准，顺滑，易于清理。 a highly accurate weapon designed by benjamin tyler henry weapon 武器 rifle weapon weapon_storage quick rifle fire_weapon wls2_weapon_range_rifle_4_common"
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
            "value": 1.0,
            "unit": "次/秒",
            "display": "1 次/秒"
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "wls2_weapon_range_rifle_4_epic_description",
        "full_description": "wls2_weapon_range_rifle_4_epic_description",
        "name": "wls2_weapon_range_rifle_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_range_rifle_4_epic_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "rifle",
          "fire_weapon"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_rifle_4_epic"
      },
      "item_id": "wls2_weapon_range_rifle_4_epic",
      "localization": {
        "description_key": "wls2_weapon_range_rifle_4_epic_description",
        "en": {
          "description": "Even a trader сan fight off a herd of furious buffaloes with this rifle!\n",
          "full_description": "Even a trader сan fight off a herd of furious buffaloes with this rifle!\n",
          "name": "M1903 Springfield"
        },
        "full_description_key": "wls2_weapon_range_rifle_4_epic_description",
        "name_key": "wls2_weapon_range_rifle_4_epic_name",
        "zh": {
          "description": "哪怕是一名商人也能用这支步枪击退一群狂暴的野牛！",
          "full_description": "哪怕是一名商人也能用这支步枪击退一群狂暴的野牛！",
          "name": "M1903 斯普林菲尔德"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_industrial_gunparts": 2,
            "wls2_resourse_fourfold_gunparts_4": 5,
            "wls2_resourse_secondary_ingot_4": 10,
            "wls2_resourse_secondary_plank_4": 10
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
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.25,
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_rifle_4_epic",
            "transaction_id": "transaction_iap_wls_10_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
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
            "stack_id": "wls2_weapon_range_rifle_4_epic",
            "transaction_id": "transaction_iap_wls_8_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_range_rifle_4_epic_icon",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.2
        },
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.08,
          "3": 0.1,
          "4": 0.13,
          "5": 0.15
        },
        "damage": {
          "1": 930,
          "2": 1022,
          "3": 1115,
          "4": 1208,
          "5": 1301,
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
          "1": 28,
          "2": 31,
          "3": 33,
          "4": 36,
          "5": 39
        },
        "slow_modifier": {
          "1": 0.3,
          "2": 0.3,
          "3": 0.3,
          "4": 0.3,
          "5": 0.3
        },
        "slow_time": {
          "1": 0.7,
          "2": 0.8,
          "3": 0.9,
          "4": 1,
          "5": 1.25
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
      "subcategory": "rifle",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "rifle",
        "fire_weapon"
      ],
      "throwing_item": null,
      "tier": 4,
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_03"
        ],
        "hit_sounds": [
          "wls_rifle_03"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Mushket_Springfield_1903",
        "prefab_pbr_id": "@Mushket_Springfield_1903_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_rifle_4_epic",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.0,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "attacks_per_second_inferred": 1.0,
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
      "image_key": "54d0bdf4bd361fbe4e2c0ad98afca058c9328e6f81e13562c5e2483f148017d1",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "M1903 斯普林菲尔德",
        "name_en": "M1903 Springfield",
        "description_zh": "哪怕是一名商人也能用这支步枪击退一群狂暴的野牛！",
        "description_en": "Even a trader сan fight off a herd of furious buffaloes with this rifle!\n",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_range_rifle_4_epic m1903 斯普林菲尔德 m1903 springfield 哪怕是一名商人也能用这支步枪击退一群狂暴的野牛！ even a trader сan fight off a herd of furious buffaloes with this rifle!\n weapon 武器 rifle weapon weapon_storage quick rifle fire_weapon wls2_weapon_range_rifle_4_epic"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 930,
            "unit": "",
            "display": "930"
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
            "value": 226,
            "unit": "",
            "display": "226"
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
            "key": "slow_modifier",
            "label": "目标减速",
            "value": 0.3,
            "unit": "%",
            "display": "30%"
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
              "critical_hit_chance": 0.05,
              "damage": 930,
              "penetrating_damage": 28,
              "slow_time": 0.7
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "930",
              "penetrating_damage": "28",
              "slow_time": "0.7 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.08,
              "damage": 1022,
              "penetrating_damage": 31,
              "slow_time": 0.8
            },
            "display": {
              "critical_hit_chance": "8%",
              "damage": "1022",
              "penetrating_damage": "31",
              "slow_time": "0.8 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 1115,
              "penetrating_damage": 33,
              "slow_time": 0.9
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "1115",
              "penetrating_damage": "33",
              "slow_time": "0.9 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 1208,
              "penetrating_damage": 36,
              "slow_time": 1
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "1208",
              "penetrating_damage": "36",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 1301,
              "penetrating_damage": 39,
              "slow_time": 1.25
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "1301",
              "penetrating_damage": "39",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 1302,
              "penetrating_damage": 39,
              "slow_time": 1.25
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "1302",
              "penetrating_damage": "39",
              "slow_time": "1.25 秒"
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
          "伤害：6 级起每级增加 1，最高 2301。",
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
        "description": "inventory_stack_view_wls2_weapon_range_rifle_4_rare_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_rifle_4_rare_description",
        "name": "inventory_stack_view_wls2_weapon_range_rifle_4_rare_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_range_rifle_4_rare_name_with_wrapping",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_rifle_4_rare_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "rifle",
          "fire_weapon"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_rifle_4_rare"
      },
      "item_id": "wls2_weapon_range_rifle_4_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_rifle_4_rare_description",
        "en": {
          "description": "This carbine is another of those great firearms Sam Colt made",
          "full_description": "This carbine is another of those great firearms Sam Colt made",
          "name": "Revolving carbine"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_rifle_4_rare_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_rifle_4_rare_name",
        "zh": {
          "description": "这把卡宾枪是山姆·柯尔特制造的伟大枪械之一",
          "full_description": "这把卡宾枪是山姆·柯尔特制造的伟大枪械之一",
          "name": "转轮卡宾枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_4": 8,
            "wls2_resourse_fourfold_nails_4": 4,
            "wls2_resourse_secondary_ingot_4": 8,
            "wls2_resourse_secondary_plank_4": 8
          },
          "learn_exp": 1600,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_20_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_rifle_4_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_weapon_10"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_rifle_4_rare"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_rifle_4_rare"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_5_a",
            "durability_factor": 0.25,
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_rifle_4_rare",
            "transaction_id": "transaction_iap_wls_7_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_4_a",
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
            "stack_id": "wls2_weapon_range_rifle_4_rare",
            "transaction_id": "transaction_iap_wls_5_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_rifle_4_rare_icon",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.2
        },
        "damage": {
          "1": 725,
          "2": 798,
          "3": 870,
          "4": 943,
          "5": 1015,
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
          "1": 22,
          "2": 24,
          "3": 26,
          "4": 28,
          "5": 30
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
          "2": 0.6,
          "3": 0.7,
          "4": 0.8,
          "5": 0.9
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
      "subcategory": "rifle",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "rifle",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_15"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_30"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_03"
        ],
        "hit_sounds": [
          "wls_rifle_03"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Riffle_Revolver_Carbine",
        "prefab_pbr_id": "@Riffle_Revolver_Carbine_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_rifle_4_rare",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.0,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "attacks_per_second_inferred": 1.0,
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
      "image_key": "a19a0f538c2056e36c904178368e5dec3fc1943766483a83187631634c43d51a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "转轮卡宾枪",
        "name_en": "Revolving carbine",
        "description_zh": "这把卡宾枪是山姆·柯尔特制造的伟大枪械之一",
        "description_en": "This carbine is another of those great firearms Sam Colt made",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_rifle_4_rare 转轮卡宾枪 revolving carbine 这把卡宾枪是山姆·柯尔特制造的伟大枪械之一 this carbine is another of those great firearms sam colt made weapon 武器 rifle weapon weapon_storage quick rifle fire_weapon wls2_weapon_range_rifle_4_rare"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 725,
            "unit": "",
            "display": "725"
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
            "value": 230,
            "unit": "",
            "display": "230"
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
            "key": "slow_modifier",
            "label": "目标减速",
            "value": 0.25,
            "unit": "%",
            "display": "25%"
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
              "damage": 725,
              "penetrating_damage": 22,
              "slow_time": 0.5
            },
            "display": {
              "damage": "725",
              "penetrating_damage": "22",
              "slow_time": "0.5 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 798,
              "penetrating_damage": 24,
              "slow_time": 0.6
            },
            "display": {
              "damage": "798",
              "penetrating_damage": "24",
              "slow_time": "0.6 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 870,
              "penetrating_damage": 26,
              "slow_time": 0.7
            },
            "display": {
              "damage": "870",
              "penetrating_damage": "26",
              "slow_time": "0.7 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 943,
              "penetrating_damage": 28,
              "slow_time": 0.8
            },
            "display": {
              "damage": "943",
              "penetrating_damage": "28",
              "slow_time": "0.8 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 1015,
              "penetrating_damage": 30,
              "slow_time": 0.9
            },
            "display": {
              "damage": "1015",
              "penetrating_damage": "30",
              "slow_time": "0.9 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 1016,
              "penetrating_damage": 30,
              "slow_time": 0.9
            },
            "display": {
              "damage": "1016",
              "penetrating_damage": "30",
              "slow_time": "0.9 秒"
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
            "key": "slow_time",
            "label": "减速持续时间",
            "unit": "秒"
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 2015。",
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
        "description": "inventory_stack_view_wls2_weapon_range_rifle_5_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_rifle_5_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_rifle_5_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_range_rifle_5_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary05/wls_winchester_.45",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "rifle",
          "fire_weapon"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_rifle_5_common"
      },
      "item_id": "wls2_weapon_range_rifle_5_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_rifle_5_common_description",
        "en": {
          "description": "The gun that won the West",
          "full_description": "The gun that won the West",
          "name": "Winchester .45 rifle"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_rifle_5_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_rifle_5_common_name",
        "zh": {
          "description": "这把枪统治了西部",
          "full_description": "这把枪统治了西部",
          "name": "温彻斯特 .45 口径步枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_5": 2,
            "wls2_resourse_fourfold_nails_4": 2,
            "wls2_resourse_secondary_ingot_5": 4,
            "wls2_resourse_secondary_plank_5": 4
          },
          "learn_exp": 1600,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_rifle_5_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_weapon_11"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_rifle_5_common"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_rifle_5_common"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls_winchester_.45",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.3
        },
        "damage": {
          "1": 595,
          "2": 655,
          "3": 714,
          "4": 773,
          "5": 833,
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
          "1": 30,
          "2": 33,
          "3": 36,
          "4": 39,
          "5": 42
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
        "rifle",
        "fire_weapon"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_09"
        ],
        "hit_sounds": [
          "wls_rifle_09"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Riffle_Winchester_45",
        "prefab_pbr_id": "@Riffle_Winchester_45_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_rifle_5_common",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.0,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "attacks_per_second_inferred": 1.0,
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
      "image_key": "50e72ccf9e3d3150c05d464376de51824a4ed1fd91ab6b4dae2ec70a5d575c15",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "温彻斯特 .45 口径步枪",
        "name_en": "Winchester .45 rifle",
        "description_zh": "这把枪统治了西部",
        "description_en": "The gun that won the West",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_rifle_5_common 温彻斯特 .45 口径步枪 winchester .45 rifle 这把枪统治了西部 the gun that won the west weapon 武器 rifle weapon weapon_storage quick rifle fire_weapon wls2_weapon_range_rifle_5_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 595,
            "unit": "",
            "display": "595"
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
            "value": 330,
            "unit": "",
            "display": "330"
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
            "value": 0.3,
            "unit": "%",
            "display": "30%"
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
              "damage": 595,
              "penetrating_damage": 30
            },
            "display": {
              "damage": "595",
              "penetrating_damage": "30"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 655,
              "penetrating_damage": 33
            },
            "display": {
              "damage": "655",
              "penetrating_damage": "33"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 714,
              "penetrating_damage": 36
            },
            "display": {
              "damage": "714",
              "penetrating_damage": "36"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 773,
              "penetrating_damage": 39
            },
            "display": {
              "damage": "773",
              "penetrating_damage": "39"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 833,
              "penetrating_damage": 42
            },
            "display": {
              "damage": "833",
              "penetrating_damage": "42"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 834,
              "penetrating_damage": 42
            },
            "display": {
              "damage": "834",
              "penetrating_damage": "42"
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
          "伤害：6 级起每级增加 1，最高 1833。",
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
        "description": "wls2_weapon_range_rifle_5_epic_description",
        "full_description": "wls2_weapon_range_rifle_5_epic_description",
        "name": "wls2_weapon_range_rifle_5_epic_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_range_rifle_5_epic_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "rifle",
          "fire_weapon"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_rifle_5_epic"
      },
      "item_id": "wls2_weapon_range_rifle_5_epic",
      "localization": {
        "description_key": "wls2_weapon_range_rifle_5_epic_description",
        "en": {
          "description": "Just invented — and has already become legendary! The bayonet can be purchased separately",
          "full_description": "Just invented — and has already become legendary! The bayonet can be purchased separately",
          "name": "Ross rifle"
        },
        "full_description_key": "wls2_weapon_range_rifle_5_epic_description",
        "name_key": "wls2_weapon_range_rifle_5_epic_name",
        "zh": {
          "description": "刚一发明出来，就已成就了传奇！刺刀可单独购买",
          "full_description": "刚一发明出来，就已成就了传奇！刺刀可单独购买",
          "name": "罗斯步枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_industrial_gunparts": 5,
            "wls2_resourse_fourfold_gunparts_5": 5,
            "wls2_resourse_secondary_ingot_5": 10,
            "wls2_resourse_secondary_plank_5": 10
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
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.25,
            "level_max": 105,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_rifle_5_epic",
            "transaction_id": "transaction_iap_wls_10_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
            "durability_factor": 0.25,
            "level_min": 106,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_rifle_5_epic",
            "transaction_id": "transaction_iap_wls_8_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_range_rifle_5_epic_icon",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.3
        },
        "critical_hit_chance": {
          "1": 0.08,
          "2": 0.1,
          "3": 0.13,
          "4": 0.15,
          "5": 0.18
        },
        "damage": {
          "1": 1487,
          "2": 1636,
          "3": 1784,
          "4": 1933,
          "5": 2081,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 324,
          "2": 324,
          "3": 324,
          "4": 324,
          "5": 324
        },
        "penetrating_damage": {
          "1": 74,
          "2": 82,
          "3": 89,
          "4": 97,
          "5": 104
        },
        "slow_modifier": {
          "1": 0.3,
          "2": 0.3,
          "3": 0.3,
          "4": 0.3,
          "5": 0.3
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
      "subcategory": "rifle",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "rifle",
        "fire_weapon"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_06"
        ],
        "hit_sounds": [
          "wls_rifle_06"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Rifle_Ross",
        "prefab_pbr_id": "@Rifle_Ross_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_rifle_5_epic",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.0,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "attacks_per_second_inferred": 1.0,
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
      "image_key": "d5d60f9c205ec87c42ee4e2b96d872252e6914ec910029db8fea99464c2b365e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "罗斯步枪",
        "name_en": "Ross rifle",
        "description_zh": "刚一发明出来，就已成就了传奇！刺刀可单独购买",
        "description_en": "Just invented — and has already become legendary! The bayonet can be purchased separately",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_range_rifle_5_epic 罗斯步枪 ross rifle 刚一发明出来，就已成就了传奇！刺刀可单独购买 just invented — and has already become legendary! the bayonet can be purchased separately weapon 武器 rifle weapon weapon_storage quick rifle fire_weapon wls2_weapon_range_rifle_5_epic"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1487,
            "unit": "",
            "display": "1487"
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
            "value": 324,
            "unit": "",
            "display": "324"
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
            "value": 0.3,
            "unit": "%",
            "display": "30%"
          },
          {
            "key": "slow_modifier",
            "label": "目标减速",
            "value": 0.3,
            "unit": "%",
            "display": "30%"
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
              "critical_hit_chance": 0.08,
              "damage": 1487,
              "penetrating_damage": 74,
              "slow_time": 0.75
            },
            "display": {
              "critical_hit_chance": "8%",
              "damage": "1487",
              "penetrating_damage": "74",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 1636,
              "penetrating_damage": 82,
              "slow_time": 1
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "1636",
              "penetrating_damage": "82",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 1784,
              "penetrating_damage": 89,
              "slow_time": 1.25
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "1784",
              "penetrating_damage": "89",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 1933,
              "penetrating_damage": 97,
              "slow_time": 1.5
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "1933",
              "penetrating_damage": "97",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 2081,
              "penetrating_damage": 104,
              "slow_time": 1.75
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "2081",
              "penetrating_damage": "104",
              "slow_time": "1.75 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 2082,
              "penetrating_damage": 104,
              "slow_time": 1.75
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "2082",
              "penetrating_damage": "104",
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
          "伤害：6 级起每级增加 1，最高 3081。",
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
        "description": "inventory_stack_view_wls2_weapon_range_rifle_5_rare_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_rifle_5_rare_description",
        "name": "inventory_stack_view_wls2_weapon_range_rifle_5_rare_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_rifle_5_rare_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "rifle",
          "fire_weapon"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_rifle_5_rare"
      },
      "item_id": "wls2_weapon_range_rifle_5_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_rifle_5_rare_description",
        "en": {
          "description": "Also known as \"Mare's Leg\"",
          "full_description": "Also known as \"Mare's Leg\"",
          "name": "Winchester Model 1892"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_rifle_5_rare_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_rifle_5_rare_name",
        "zh": {
          "description": "又名“母马腿”",
          "full_description": "又名“母马腿”",
          "name": "温彻斯特 M1892"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_5": 8,
            "wls2_resourse_fourfold_nails_4": 4,
            "wls2_resourse_secondary_ingot_5": 8,
            "wls2_resourse_secondary_plank_5": 8
          },
          "learn_exp": 3200,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_25_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_rifle_5_rare"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_rifle_5_rare"
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
            "stack_id": "wls2_weapon_range_rifle_5_rare",
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
            "stack_id": "wls2_weapon_range_rifle_5_rare",
            "transaction_id": "transaction_iap_wls_6_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_rifle_5_rare_icon",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.3
        },
        "damage": {
          "1": 1159,
          "2": 1276,
          "3": 1392,
          "4": 1508,
          "5": 1624,
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
          "1": 58,
          "2": 64,
          "3": 70,
          "4": 75,
          "5": 81
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
      "subcategory": "rifle",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "rifle",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_25"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_06"
        ],
        "hit_sounds": [
          "wls_rifle_06"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Riffle_Winchester_1892",
        "prefab_pbr_id": "@Riffle_Winchester_1892_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_rifle_5_rare",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.0,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "attacks_per_second_inferred": 1.0,
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
      "image_key": "f4ceb539c82763a8555a30e4593425b650a396c7e78893016fc434c967147f8e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "温彻斯特 M1892",
        "name_en": "Winchester Model 1892",
        "description_zh": "又名“母马腿”",
        "description_en": "Also known as \"Mare's Leg\"",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_rifle_5_rare 温彻斯特 m1892 winchester model 1892 又名“母马腿” also known as \"mare's leg\" weapon 武器 rifle weapon weapon_storage quick rifle fire_weapon wls2_weapon_range_rifle_5_rare"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1159,
            "unit": "",
            "display": "1159"
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
            "value": 330,
            "unit": "",
            "display": "330"
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
            "value": 0.3,
            "unit": "%",
            "display": "30%"
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
              "damage": 1159,
              "penetrating_damage": 58,
              "slow_time": 0.5
            },
            "display": {
              "damage": "1159",
              "penetrating_damage": "58",
              "slow_time": "0.5 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 1276,
              "penetrating_damage": 64,
              "slow_time": 0.75
            },
            "display": {
              "damage": "1276",
              "penetrating_damage": "64",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 1392,
              "penetrating_damage": 70,
              "slow_time": 1
            },
            "display": {
              "damage": "1392",
              "penetrating_damage": "70",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 1508,
              "penetrating_damage": 75,
              "slow_time": 1.25
            },
            "display": {
              "damage": "1508",
              "penetrating_damage": "75",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 1624,
              "penetrating_damage": 81,
              "slow_time": 1.5
            },
            "display": {
              "damage": "1624",
              "penetrating_damage": "81",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 1625,
              "penetrating_damage": 81,
              "slow_time": 1.5
            },
            "display": {
              "damage": "1625",
              "penetrating_damage": "81",
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
          "伤害：6 级起每级增加 1，最高 2624。",
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
        "description": "inventory_stack_view_wls2_weapon_range_rifle_6_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_rifle_6_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_rifle_6_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_rifle_6_common",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "rifle",
          "fire_weapon"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_rifle_6_common"
      },
      "item_id": "wls2_weapon_range_rifle_6_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_rifle_6_common_description",
        "en": {
          "description": "Excellent for the shooting range. Also effective for taking down bandits",
          "full_description": "Excellent for the shooting range. Also effective for taking down bandits",
          "name": "Winchester Gallery Gun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_rifle_6_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_rifle_6_common_name",
        "zh": {
          "description": "在射击场表现出色。对于击倒土匪也非常有效。",
          "full_description": "在射击场表现出色。对于击倒土匪也非常有效。",
          "name": "温彻斯特画廊枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_6": 2,
            "wls2_resourse_fourfold_nails_6": 2,
            "wls2_resourse_secondary_ingot_6": 4,
            "wls2_resourse_secondary_plank_6": 4
          },
          "learn_exp": 3200,
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
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_rifle_6_common",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.4
        },
        "damage": {
          "1": 952,
          "2": 1047,
          "3": 1142,
          "4": 1238,
          "5": 1333,
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
          "1": 57,
          "2": 63,
          "3": 69,
          "4": 74,
          "5": 80
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
        "rifle",
        "fire_weapon"
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
          "coin_id": "spend_coin_soft_110"
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
          "coin_id": "spend_coin_soft_120"
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
          "coin_id": "spend_coin_soft_130"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_09"
        ],
        "hit_sounds": [
          "wls_rifle_09"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Riffle_Winchester_1890",
        "prefab_pbr_id": "@Riffle_Winchester_1890_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_rifle_6_common",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.0,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "attacks_per_second_inferred": 1.0,
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
      "image_key": "f0f8cba5c4b967a36f2281a090489fd2ad85b179ae29b75caddf1a3392ade7dc",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "温彻斯特画廊枪",
        "name_en": "Winchester Gallery Gun",
        "description_zh": "在射击场表现出色。对于击倒土匪也非常有效。",
        "description_en": "Excellent for the shooting range. Also effective for taking down bandits",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_rifle_6_common 温彻斯特画廊枪 winchester gallery gun 在射击场表现出色。对于击倒土匪也非常有效。 excellent for the shooting range. also effective for taking down bandits weapon 武器 rifle weapon weapon_storage quick rifle fire_weapon wls2_weapon_range_rifle_6_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 952,
            "unit": "",
            "display": "952"
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
            "value": 330,
            "unit": "",
            "display": "330"
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
            "value": 0.4,
            "unit": "%",
            "display": "40%"
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
              "damage": 952,
              "penetrating_damage": 57
            },
            "display": {
              "damage": "952",
              "penetrating_damage": "57"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 1047,
              "penetrating_damage": 63
            },
            "display": {
              "damage": "1047",
              "penetrating_damage": "63"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 1142,
              "penetrating_damage": 69
            },
            "display": {
              "damage": "1142",
              "penetrating_damage": "69"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 1238,
              "penetrating_damage": 74
            },
            "display": {
              "damage": "1238",
              "penetrating_damage": "74"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 1333,
              "penetrating_damage": 80
            },
            "display": {
              "damage": "1333",
              "penetrating_damage": "80"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 1334,
              "penetrating_damage": 80
            },
            "display": {
              "damage": "1334",
              "penetrating_damage": "80"
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
          "伤害：6 级起每级增加 1，最高 2333。",
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
        "description": "inventory_stack_view_wls2_weapon_range_rifle_6_epic_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_rifle_6_epic_description",
        "name": "inventory_stack_view_wls2_weapon_range_rifle_6_epic_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_rifle_6_epic",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "rifle",
          "fire_weapon"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_rifle_6_epic"
      },
      "item_id": "wls2_weapon_range_rifle_6_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_rifle_6_epic_description",
        "en": {
          "description": "Acclaimed for its innovative rotary magazine and exceptional accuracy",
          "full_description": "Acclaimed for its innovative rotary magazine and exceptional accuracy",
          "name": "Savage Model 99"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_rifle_6_epic_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_rifle_6_epic_name",
        "zh": {
          "description": "因其创新的旋转弹夹和出色的准确性而备受赞誉",
          "full_description": "因其创新的旋转弹夹和出色的准确性而备受赞誉",
          "name": "野蛮模型99"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_industrial_gunparts": 8,
            "wls2_resourse_fourfold_gunparts_6": 5,
            "wls2_resourse_secondary_ingot_6": 10,
            "wls2_resourse_secondary_plank_6": 10
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
            "discounted_transaction_id": "transaction_iap_wls_12_a",
            "durability_factor": 0.25,
            "level_max": 125,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_rifle_6_epic",
            "transaction_id": "transaction_iap_wls_15_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
            "durability_factor": 0.25,
            "level_min": 126,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_rifle_6_epic",
            "transaction_id": "transaction_iap_wls_12_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_rifle_6_epic",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.4
        },
        "critical_hit_chance": {
          "1": 0.08,
          "2": 0.1,
          "3": 0.13,
          "4": 0.15,
          "5": 0.18
        },
        "damage": {
          "1": 2379,
          "2": 2617,
          "3": 2855,
          "4": 3093,
          "5": 3331,
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
          "1": 143,
          "2": 157,
          "3": 171,
          "4": 186,
          "5": 200
        },
        "slow_modifier": {
          "1": 0.3,
          "2": 0.3,
          "3": 0.3,
          "4": 0.3,
          "5": 0.3
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
      "subcategory": "rifle",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "rifle",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_500"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_06"
        ],
        "hit_sounds": [
          "wls_rifle_06"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Riffle_Savage_M99",
        "prefab_pbr_id": "@Riffle_Savage_M99_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_rifle_6_epic",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.0,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "attacks_per_second_inferred": 1.0,
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
      "image_key": "0fa77c1ae88248e5354a445ad06d2c6bdb21d05916cbdd2ec56844fe39d218fe",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "野蛮模型99",
        "name_en": "Savage Model 99",
        "description_zh": "因其创新的旋转弹夹和出色的准确性而备受赞誉",
        "description_en": "Acclaimed for its innovative rotary magazine and exceptional accuracy",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_range_rifle_6_epic 野蛮模型99 savage model 99 因其创新的旋转弹夹和出色的准确性而备受赞誉 acclaimed for its innovative rotary magazine and exceptional accuracy weapon 武器 rifle weapon weapon_storage quick rifle fire_weapon wls2_weapon_range_rifle_6_epic"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 2379,
            "unit": "",
            "display": "2379"
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
            "value": 330,
            "unit": "",
            "display": "330"
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
            "value": 0.4,
            "unit": "%",
            "display": "40%"
          },
          {
            "key": "slow_modifier",
            "label": "目标减速",
            "value": 0.3,
            "unit": "%",
            "display": "30%"
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
              "critical_hit_chance": 0.08,
              "damage": 2379,
              "penetrating_damage": 143,
              "slow_time": 0.75
            },
            "display": {
              "critical_hit_chance": "8%",
              "damage": "2379",
              "penetrating_damage": "143",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 2617,
              "penetrating_damage": 157,
              "slow_time": 1
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "2617",
              "penetrating_damage": "157",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 2855,
              "penetrating_damage": 171,
              "slow_time": 1.25
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "2855",
              "penetrating_damage": "171",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 3093,
              "penetrating_damage": 186,
              "slow_time": 1.5
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "3093",
              "penetrating_damage": "186",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 3331,
              "penetrating_damage": 200,
              "slow_time": 1.75
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "3331",
              "penetrating_damage": "200",
              "slow_time": "1.75 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 3332,
              "penetrating_damage": 200,
              "slow_time": 1.75
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "3332",
              "penetrating_damage": "200",
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
          "伤害：6 级起每级增加 1，最高 4331。",
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
        "description": "inventory_stack_view_wls2_weapon_range_rifle_6_rare_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_rifle_6_rare_description",
        "name": "inventory_stack_view_wls2_weapon_range_rifle_6_rare_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_rifle_6_rare",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "rifle",
          "fire_weapon"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_rifle_6_rare"
      },
      "item_id": "wls2_weapon_range_rifle_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_rifle_6_rare_description",
        "en": {
          "description": "The rifle with its smooth action is especially valued for its precision accuracy",
          "full_description": "The rifle with its smooth action is especially valued for its precision accuracy",
          "name": "Krag-Jorgensen"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_rifle_6_rare_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_rifle_6_rare_name",
        "zh": {
          "description": "这支步枪以其平滑的操作而备受赞赏，尤其因其精准度而受到重视",
          "full_description": "这支步枪以其平滑的操作而备受赞赏，尤其因其精准度而受到重视",
          "name": "克拉格-约尔根森"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_6": 8,
            "wls2_resourse_fourfold_nails_6": 4,
            "wls2_resourse_secondary_ingot_6": 8,
            "wls2_resourse_secondary_plank_6": 8
          },
          "learn_exp": 6400,
          "min_level": 0,
          "required_electricity": 10,
          "transaction_id": "transaction_iap_wls_25_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
            "durability_factor": 0.25,
            "level_max": 120,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_rifle_6_rare",
            "transaction_id": "transaction_iap_wls_12_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.25,
            "level_min": 121,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_rifle_6_rare",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_rifle_6_rare",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.4
        },
        "damage": {
          "1": 1854,
          "2": 2040,
          "3": 2225,
          "4": 2411,
          "5": 2596,
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
          "1": 111,
          "2": 122,
          "3": 134,
          "4": 145,
          "5": 156
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
      "subcategory": "rifle",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "rifle",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_100"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_06"
        ],
        "hit_sounds": [
          "wls_rifle_06"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Krag-Jorgensen",
        "prefab_pbr_id": "@Krag-Jorgensen_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_rifle_6_rare",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.0,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "attacks_per_second_inferred": 1.0,
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
      "image_key": "44ceb3a56f7565dd815fdded8b9448e80c589686a772a9f04ff4bfd25586b142",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "克拉格-约尔根森",
        "name_en": "Krag-Jorgensen",
        "description_zh": "这支步枪以其平滑的操作而备受赞赏，尤其因其精准度而受到重视",
        "description_en": "The rifle with its smooth action is especially valued for its precision accuracy",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_rifle_6_rare 克拉格-约尔根森 krag-jorgensen 这支步枪以其平滑的操作而备受赞赏，尤其因其精准度而受到重视 the rifle with its smooth action is especially valued for its precision accuracy weapon 武器 rifle weapon weapon_storage quick rifle fire_weapon wls2_weapon_range_rifle_6_rare"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1854,
            "unit": "",
            "display": "1854"
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
            "value": 330,
            "unit": "",
            "display": "330"
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
            "value": 0.4,
            "unit": "%",
            "display": "40%"
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
              "damage": 1854,
              "penetrating_damage": 111,
              "slow_time": 0.5
            },
            "display": {
              "damage": "1854",
              "penetrating_damage": "111",
              "slow_time": "0.5 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 2040,
              "penetrating_damage": 122,
              "slow_time": 0.75
            },
            "display": {
              "damage": "2040",
              "penetrating_damage": "122",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 2225,
              "penetrating_damage": 134,
              "slow_time": 1
            },
            "display": {
              "damage": "2225",
              "penetrating_damage": "134",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 2411,
              "penetrating_damage": 145,
              "slow_time": 1.25
            },
            "display": {
              "damage": "2411",
              "penetrating_damage": "145",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 2596,
              "penetrating_damage": 156,
              "slow_time": 1.5
            },
            "display": {
              "damage": "2596",
              "penetrating_damage": "156",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 2597,
              "penetrating_damage": 156,
              "slow_time": 1.5
            },
            "display": {
              "damage": "2597",
              "penetrating_damage": "156",
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
          "伤害：6 级起每级增加 1，最高 3596。",
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
        "description": "inventory_stack_view_wls2_weapon_range_rifle_6_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_rifle_6_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_range_rifle_6_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_rifle_6_uncommon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "rifle",
          "fire_weapon"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_rifle_6_uncommon"
      },
      "item_id": "wls2_weapon_range_rifle_6_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_rifle_6_uncommon_description",
        "en": {
          "description": "Renowned for its fast bolt-action, favored for its reliability and rapid firing",
          "full_description": "Renowned for its fast bolt-action, favored for its reliability and rapid firing",
          "name": "Lee–Enfield"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_rifle_6_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_rifle_6_uncommon_name",
        "zh": {
          "description": "以其快速的手动操作而闻名，因其可靠性和快速射击而受到青睐",
          "full_description": "以其快速的手动操作而闻名，因其可靠性和快速射击而受到青睐",
          "name": "李-恩菲尔德"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_6": 6,
            "wls2_resourse_fourfold_nails_6": 3,
            "wls2_resourse_secondary_ingot_6": 6,
            "wls2_resourse_secondary_plank_6": 6
          },
          "learn_exp": 3200,
          "min_level": 0,
          "required_electricity": 8,
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
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.25,
            "level_max": 120,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_rifle_6_uncommon",
            "transaction_id": "transaction_iap_wls_10_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
            "durability_factor": 0.25,
            "level_min": 121,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_rifle_6_uncommon",
            "transaction_id": "transaction_iap_wls_8_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_rifle_6_uncommon",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.4
        },
        "damage": {
          "1": 1313,
          "2": 1444,
          "3": 1576,
          "4": 1707,
          "5": 1838,
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
          "1": 79,
          "2": 87,
          "3": 95,
          "4": 103,
          "5": 111
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
        "rifle",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_15"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_30"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_09"
        ],
        "hit_sounds": [
          "wls_rifle_09"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Rifle_Lee_Enfield",
        "prefab_pbr_id": "@Rifle_Lee_Enfield_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_rifle_6_uncommon",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.0,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "attacks_per_second_inferred": 1.0,
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
      "image_key": "38cff034e1a5bb98be20b512e18d599b04372ba61926424dc76a8bdd68e0ab69",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "李-恩菲尔德",
        "name_en": "Lee–Enfield",
        "description_zh": "以其快速的手动操作而闻名，因其可靠性和快速射击而受到青睐",
        "description_en": "Renowned for its fast bolt-action, favored for its reliability and rapid firing",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_rifle_6_uncommon 李-恩菲尔德 lee–enfield 以其快速的手动操作而闻名，因其可靠性和快速射击而受到青睐 renowned for its fast bolt-action, favored for its reliability and rapid firing weapon 武器 rifle weapon weapon_storage quick rifle fire_weapon wls2_weapon_range_rifle_6_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1313,
            "unit": "",
            "display": "1313"
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
            "value": 330,
            "unit": "",
            "display": "330"
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
            "value": 0.4,
            "unit": "%",
            "display": "40%"
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
              "damage": 1313,
              "penetrating_damage": 79
            },
            "display": {
              "damage": "1313",
              "penetrating_damage": "79"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 1444,
              "penetrating_damage": 87
            },
            "display": {
              "damage": "1444",
              "penetrating_damage": "87"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 1576,
              "penetrating_damage": 95
            },
            "display": {
              "damage": "1576",
              "penetrating_damage": "95"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 1707,
              "penetrating_damage": 103
            },
            "display": {
              "damage": "1707",
              "penetrating_damage": "103"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 1838,
              "penetrating_damage": 111
            },
            "display": {
              "damage": "1838",
              "penetrating_damage": "111"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 1839,
              "penetrating_damage": 111
            },
            "display": {
              "damage": "1839",
              "penetrating_damage": "111"
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
          "伤害：6 级起每级增加 1，最高 2838。",
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
        "full_description": "wls2_weapon_range_rifle_7_common_description",
        "name": "wls2_weapon_range_rifle_7_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_rifle_7_common_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "rifle",
          "fire_weapon"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_rifle_7_common"
      },
      "item_id": "wls2_weapon_range_rifle_7_common",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": "One of the earliest semi‑auto rifles",
          "name": "Winchester 1907"
        },
        "full_description_key": "wls2_weapon_range_rifle_7_common_description",
        "name_key": "wls2_weapon_range_rifle_7_common_name",
        "zh": {
          "description": null,
          "full_description": "最早的半自动步枪之一",
          "name": "温彻斯特 1907"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_7": 2,
            "wls2_resourse_fourfold_nails_7": 2,
            "wls2_resourse_secondary_ingot_7": 4,
            "wls2_resourse_secondary_plank_7": 4
          },
          "learn_exp": 3200,
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
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_rifle_7_common_icon",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.5
        },
        "damage": {
          "1": 1523,
          "2": 1676,
          "3": 1828,
          "4": 1980,
          "5": 2132,
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
          "1": 91,
          "2": 101,
          "3": 110,
          "4": 119,
          "5": 128
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
        "rifle",
        "fire_weapon"
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
          "coin_id": "spend_coin_soft_130"
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
          "coin_id": "spend_coin_soft_140"
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
          "coin_id": "spend_coin_soft_150"
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
          "coin_id": "spend_coin_soft_160"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_09"
        ],
        "hit_sounds": [
          "wls_rifle_09"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Rifle_Winchester_1907_pbr",
        "prefab_pbr_id": "@Rifle_Winchester_1907_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_rifle_7_common",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.0,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "attacks_per_second_inferred": 1.0,
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
      "image_key": "31e6df53d3a7a1cbf1ae78a3513d6e1779b17bcc6086cfa1a7c937d2eb3043bd",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "温彻斯特 1907",
        "name_en": "Winchester 1907",
        "description_zh": "最早的半自动步枪之一",
        "description_en": "One of the earliest semi‑auto rifles",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_rifle_7_common 温彻斯特 1907 winchester 1907 最早的半自动步枪之一 one of the earliest semi‑auto rifles weapon 武器 rifle weapon weapon_storage quick rifle fire_weapon wls2_weapon_range_rifle_7_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1523,
            "unit": "",
            "display": "1523"
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
            "value": 330,
            "unit": "",
            "display": "330"
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
            "value": 0.5,
            "unit": "%",
            "display": "50%"
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
              "damage": 1523,
              "penetrating_damage": 91
            },
            "display": {
              "damage": "1523",
              "penetrating_damage": "91"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 1676,
              "penetrating_damage": 101
            },
            "display": {
              "damage": "1676",
              "penetrating_damage": "101"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 1828,
              "penetrating_damage": 110
            },
            "display": {
              "damage": "1828",
              "penetrating_damage": "110"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 1980,
              "penetrating_damage": 119
            },
            "display": {
              "damage": "1980",
              "penetrating_damage": "119"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 2132,
              "penetrating_damage": 128
            },
            "display": {
              "damage": "2132",
              "penetrating_damage": "128"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 2133,
              "penetrating_damage": 128
            },
            "display": {
              "damage": "2133",
              "penetrating_damage": "128"
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
          "伤害：6 级起每级增加 1，最高 3132。",
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
        "name": "wls2_weapon_range_rifle_7_epic_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_rifle_7_epic_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "rifle",
          "fire_weapon"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_rifle_7_epic"
      },
      "item_id": "wls2_weapon_range_rifle_7_epic",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Huot automatic rifle"
        },
        "full_description_key": null,
        "name_key": "wls2_weapon_range_rifle_7_epic_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "胡奥特自动步枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_industrial_gunparts": 10,
            "wls2_resourse_fourfold_gunparts_7": 5,
            "wls2_resourse_secondary_ingot_7": 10,
            "wls2_resourse_secondary_plank_7": 10
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
            "discounted_transaction_id": "transaction_iap_wls_12_a",
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
            "stack_id": "wls2_weapon_range_rifle_7_epic",
            "transaction_id": "transaction_iap_wls_15_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
            "durability_factor": 0.25,
            "level_min": 131,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_rifle_7_epic",
            "transaction_id": "transaction_iap_wls_12_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_rifle_7_epic_icon",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.5
        },
        "critical_hit_chance": {
          "1": 0.08,
          "2": 0.1,
          "3": 0.13,
          "4": 0.15,
          "5": 0.18
        },
        "damage": {
          "1": 3806,
          "2": 4187,
          "3": 4568,
          "4": 4948,
          "5": 5329,
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
          "1": 228,
          "2": 251,
          "3": 274,
          "4": 297,
          "5": 320
        },
        "slow_modifier": {
          "1": 0.3,
          "2": 0.3,
          "3": 0.3,
          "4": 0.3,
          "5": 0.3
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
      "subcategory": "rifle",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "rifle",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_150"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_250"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_400"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_750"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_06"
        ],
        "hit_sounds": [
          "wls_rifle_06"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Riffle_Huot_pbr",
        "prefab_pbr_id": "@Riffle_Huot_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_rifle_7_epic",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.0,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "attacks_per_second_inferred": 1.0,
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
      "image_key": "22ac74a40c7aa1929850ac130e03c1da76f6e2625cef30692a775873bc90816f",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "胡奥特自动步枪",
        "name_en": "Huot automatic rifle",
        "description_zh": "",
        "description_en": "",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_range_rifle_7_epic 胡奥特自动步枪 huot automatic rifle weapon 武器 rifle weapon weapon_storage quick rifle fire_weapon wls2_weapon_range_rifle_7_epic"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 3806,
            "unit": "",
            "display": "3806"
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
            "value": 330,
            "unit": "",
            "display": "330"
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
            "value": 0.5,
            "unit": "%",
            "display": "50%"
          },
          {
            "key": "slow_modifier",
            "label": "目标减速",
            "value": 0.3,
            "unit": "%",
            "display": "30%"
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
              "critical_hit_chance": 0.08,
              "damage": 3806,
              "penetrating_damage": 228,
              "slow_time": 0.75
            },
            "display": {
              "critical_hit_chance": "8%",
              "damage": "3806",
              "penetrating_damage": "228",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 4187,
              "penetrating_damage": 251,
              "slow_time": 1
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "4187",
              "penetrating_damage": "251",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.13,
              "damage": 4568,
              "penetrating_damage": 274,
              "slow_time": 1.25
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "4568",
              "penetrating_damage": "274",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 4948,
              "penetrating_damage": 297,
              "slow_time": 1.5
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "4948",
              "penetrating_damage": "297",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 5329,
              "penetrating_damage": 320,
              "slow_time": 1.75
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "5329",
              "penetrating_damage": "320",
              "slow_time": "1.75 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 5330,
              "penetrating_damage": 320,
              "slow_time": 1.75
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "5330",
              "penetrating_damage": "320",
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
          "伤害：6 级起每级增加 1，最高 6329。",
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
        "name": "wls2_weapon_range_rifle_7_rare_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_rifle_7_rare_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "rifle",
          "fire_weapon"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_rifle_7_rare"
      },
      "item_id": "wls2_weapon_range_rifle_7_rare",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Mondragón M1908"
        },
        "full_description_key": null,
        "name_key": "wls2_weapon_range_rifle_7_rare_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "蒙德拉贡 M1908"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_7": 8,
            "wls2_resourse_fourfold_nails_7": 4,
            "wls2_resourse_secondary_ingot_7": 8,
            "wls2_resourse_secondary_plank_7": 8
          },
          "learn_exp": 6400,
          "min_level": 0,
          "required_electricity": 20,
          "transaction_id": "transaction_iap_wls_25_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
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
            "stack_id": "wls2_weapon_range_rifle_7_rare",
            "transaction_id": "transaction_iap_wls_12_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.25,
            "level_min": 125,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_rifle_7_rare",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_rifle_7_rare_icon",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.5
        },
        "damage": {
          "1": 2966,
          "2": 3263,
          "3": 3560,
          "4": 3856,
          "5": 4153,
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
          "1": 178,
          "2": 196,
          "3": 214,
          "4": 231,
          "5": 249
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
      "subcategory": "rifle",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "rifle",
        "fire_weapon"
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
          "coin_id": "spend_coin_soft_1000"
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
          "coin_id": "spend_coin_soft_2000"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_100"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_200"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_06"
        ],
        "hit_sounds": [
          "wls_rifle_06"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Riffle_Mondragon_pbr",
        "prefab_pbr_id": "@Riffle_Mondragon_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_rifle_7_rare",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.0,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "attacks_per_second_inferred": 1.0,
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
      "image_key": "0ea43203febbe2e2aa959eb60cca8133e400e6f74b5f0dd95b5c641d8fb3bb75",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "蒙德拉贡 M1908",
        "name_en": "Mondragón M1908",
        "description_zh": "",
        "description_en": "",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_rifle_7_rare 蒙德拉贡 m1908 mondragón m1908 weapon 武器 rifle weapon weapon_storage quick rifle fire_weapon wls2_weapon_range_rifle_7_rare"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 2966,
            "unit": "",
            "display": "2966"
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
            "value": 330,
            "unit": "",
            "display": "330"
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
            "value": 0.5,
            "unit": "%",
            "display": "50%"
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
              "damage": 2966,
              "penetrating_damage": 178,
              "slow_time": 0.5
            },
            "display": {
              "damage": "2966",
              "penetrating_damage": "178",
              "slow_time": "0.5 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 3263,
              "penetrating_damage": 196,
              "slow_time": 0.75
            },
            "display": {
              "damage": "3263",
              "penetrating_damage": "196",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 3560,
              "penetrating_damage": 214,
              "slow_time": 1
            },
            "display": {
              "damage": "3560",
              "penetrating_damage": "214",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 3856,
              "penetrating_damage": 231,
              "slow_time": 1.25
            },
            "display": {
              "damage": "3856",
              "penetrating_damage": "231",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 4153,
              "penetrating_damage": 249,
              "slow_time": 1.5
            },
            "display": {
              "damage": "4153",
              "penetrating_damage": "249",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 4154,
              "penetrating_damage": 249,
              "slow_time": 1.5
            },
            "display": {
              "damage": "4154",
              "penetrating_damage": "249",
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
          "伤害：6 级起每级增加 1，最高 5153。",
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
        "full_description": "wls2_weapon_range_rifle_7_uncommon_description",
        "name": "wls2_weapon_range_rifle_7_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_rifle_7_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "rifle",
          "fire_weapon"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_rifle_7_uncommon"
      },
      "item_id": "wls2_weapon_range_rifle_7_uncommon",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": "The rifle can be easily disassembled for transport and cleaning",
          "name": "Remington Model 8"
        },
        "full_description_key": "wls2_weapon_range_rifle_7_uncommon_description",
        "name_key": "wls2_weapon_range_rifle_7_uncommon_name",
        "zh": {
          "description": null,
          "full_description": "步枪可以轻松地拆卸用于运输和清洁",
          "name": "雷明顿8型"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_7": 6,
            "wls2_resourse_fourfold_nails_7": 3,
            "wls2_resourse_secondary_ingot_7": 6,
            "wls2_resourse_secondary_plank_7": 6
          },
          "learn_exp": 3200,
          "min_level": 0,
          "required_electricity": 16,
          "transaction_id": "transaction_iap_wls_15_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_uncommon_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
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
            "stack_id": "wls2_weapon_range_rifle_7_uncommon",
            "transaction_id": "transaction_iap_wls_10_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
            "durability_factor": 0.25,
            "level_min": 125,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_rifle_7_uncommon",
            "transaction_id": "transaction_iap_wls_8_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_rifle_7_uncommon_icon",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.5
        },
        "damage": {
          "1": 2101,
          "2": 2311,
          "3": 2521,
          "4": 2731,
          "5": 2941,
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
          "1": 126,
          "2": 139,
          "3": 151,
          "4": 164,
          "5": 176
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
        "rifle",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_30"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_60"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_09"
        ],
        "hit_sounds": [
          "wls_rifle_09"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Riffle_Remington_model_8_pbr",
        "prefab_pbr_id": "@Riffle_Remington_model_8_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_rifle_7_uncommon",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.0,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "attacks_per_second_inferred": 1.0,
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
      "image_key": "7c9d2edef4c8092aa8ff59c2262640fae8542c5796eedc35a9dc4f3c7b3f4b17",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "雷明顿8型",
        "name_en": "Remington Model 8",
        "description_zh": "步枪可以轻松地拆卸用于运输和清洁",
        "description_en": "The rifle can be easily disassembled for transport and cleaning",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_rifle_7_uncommon 雷明顿8型 remington model 8 步枪可以轻松地拆卸用于运输和清洁 the rifle can be easily disassembled for transport and cleaning weapon 武器 rifle weapon weapon_storage quick rifle fire_weapon wls2_weapon_range_rifle_7_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 2101,
            "unit": "",
            "display": "2101"
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
            "value": 330,
            "unit": "",
            "display": "330"
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
            "value": 0.5,
            "unit": "%",
            "display": "50%"
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
              "damage": 2101,
              "penetrating_damage": 126
            },
            "display": {
              "damage": "2101",
              "penetrating_damage": "126"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 2311,
              "penetrating_damage": 139
            },
            "display": {
              "damage": "2311",
              "penetrating_damage": "139"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 2521,
              "penetrating_damage": 151
            },
            "display": {
              "damage": "2521",
              "penetrating_damage": "151"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 2731,
              "penetrating_damage": 164
            },
            "display": {
              "damage": "2731",
              "penetrating_damage": "164"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 2941,
              "penetrating_damage": 176
            },
            "display": {
              "damage": "2941",
              "penetrating_damage": "176"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 2942,
              "penetrating_damage": 176
            },
            "display": {
              "damage": "2942",
              "penetrating_damage": "176"
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
          "伤害：6 级起每级增加 1，最高 3941。",
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
        "description": "inventory_stack_view_wls2_weapon_range_shotgun_2_rare_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_shotgun_2_rare_description",
        "name": "inventory_stack_view_wls2_weapon_range_shotgun_2_rare_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_range_shotgun_2_rare_name_with_wrapping",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_shotgun_2_rare_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_shotgun_2_rare"
      },
      "item_id": "wls2_weapon_range_shotgun_2_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_shotgun_2_rare_description",
        "en": {
          "description": "Lightweight, fast and handy weapon for all situations",
          "full_description": "Lightweight, fast and handy weapon for all situations",
          "name": "Beretta"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_shotgun_2_rare_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_2_rare_name",
        "zh": {
          "description": "轻便、迅捷、易于使用，适用任何场合",
          "full_description": "轻便、迅捷、易于使用，适用任何场合",
          "name": "伯莱塔"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_2": 8,
            "wls2_resourse_fourfold_nails_2": 4,
            "wls2_resourse_secondary_ingot_2": 8,
            "wls2_resourse_secondary_plank_2": 4
          },
          "learn_exp": 400,
          "min_level": 0,
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_epic_t3_desc"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_shotgun_2_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_200coins_dynamic_smuggler_offer_shotgun_2"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_shotgun_2_rare"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_shotgun_2_rare"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_2_a",
            "durability_factor": 0.25,
            "level_max": 50,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_shotgun_2_rare",
            "transaction_id": "transaction_iap_wls_2_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_1_a",
            "durability_factor": 0.25,
            "level_max": 75,
            "level_min": 51,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_shotgun_2_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_shotgun_2_rare_icon",
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
      "subcategory": "shotgun",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "shotgun",
        "fire_weapon"
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
          "coin_id": "spend_coin_soft_75"
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
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_09"
        ],
        "hit_sounds": [
          "wls_rifle_09"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Shotgun_Beretta",
        "prefab_pbr_id": "@Shotgun_Beretta_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_range_shotgun_2_rare",
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
      "image_key": "46c263eb2514f19654ea04c9ee64c0d9ed6955d27aef1028e84fd9419bdfb0ad",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "伯莱塔",
        "name_en": "Beretta",
        "description_zh": "轻便、迅捷、易于使用，适用任何场合",
        "description_en": "Lightweight, fast and handy weapon for all situations",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_shotgun_2_rare 伯莱塔 beretta 轻便、迅捷、易于使用，适用任何场合 lightweight, fast and handy weapon for all situations weapon 武器 shotgun weapon weapon_storage quick shotgun fire_weapon wls2_weapon_range_shotgun_2_rare"
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
              "damage": 263
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "263"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 290
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "290"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 316
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "316"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 342
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "342"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 369
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "369"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 370
            },
            "display": {
              "critical_hit_chance": "30%",
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
        "description": "inventory_stack_view_wls2_weapon_range_shotgun_3_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_shotgun_3_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_shotgun_3_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_range_shotgun_3_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary05/wls_break-open_shotgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_shotgun_3_common"
      },
      "item_id": "wls2_weapon_range_shotgun_3_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_shotgun_3_common_description",
        "en": {
          "description": "Quickly snaps into firing position with a flick of the wrist.",
          "full_description": "Quickly snaps into firing position with a flick of the wrist.",
          "name": "Folding shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_shotgun_3_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_3_common_name",
        "zh": {
          "description": "该枪的独特设计使得使用者只需进行一次翻腕即可进行射击",
          "full_description": "该枪的独特设计使得使用者只需进行一次翻腕即可进行射击",
          "name": "折叠霰弹枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_3": 2,
            "wls2_resourse_fourfold_nails_3": 2,
            "wls2_resourse_secondary_ingot_3": 4,
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
                "inventory_stack_id": "wls2_weapon_range_shotgun_3_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_100coins_dynamic_smuggler_offer_shotgun_3"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_shotgun_3_common"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_shotgun_3_common"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls_break-open_shotgun",
      "stat_curves": {
        "damage": {
          "1": 216,
          "2": 238,
          "3": 259,
          "4": 281,
          "5": 302,
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
        "shotgun",
        "fire_weapon"
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
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_08"
        ],
        "hit_sounds": [
          "wls_rifle_08"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Shotgun_Folding",
        "prefab_pbr_id": "@Shotgun_Folding_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_range_shotgun_3_common",
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
      "image_key": "63566e144b8c2bc68ec24a853cd99de6967b392f5703e0ffa922e81105202612",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "折叠霰弹枪",
        "name_en": "Folding shotgun",
        "description_zh": "该枪的独特设计使得使用者只需进行一次翻腕即可进行射击",
        "description_en": "Quickly snaps into firing position with a flick of the wrist.",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_shotgun_3_common 折叠霰弹枪 folding shotgun 该枪的独特设计使得使用者只需进行一次翻腕即可进行射击 quickly snaps into firing position with a flick of the wrist. weapon 武器 shotgun weapon weapon_storage quick shotgun fire_weapon wls2_weapon_range_shotgun_3_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 216,
            "unit": "",
            "display": "216"
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
              "damage": 216
            },
            "display": {
              "damage": "216"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 238
            },
            "display": {
              "damage": "238"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 259
            },
            "display": {
              "damage": "259"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 281
            },
            "display": {
              "damage": "281"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 302
            },
            "display": {
              "damage": "302"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 303
            },
            "display": {
              "damage": "303"
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
          "伤害：6 级起每级增加 1，最高 1302。",
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
        "description": "inventory_stack_view_wls2_weapon_range_shotgun_3_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_shotgun_3_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_range_shotgun_3_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_range_shotgun_3_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_shotgun_3_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_shotgun_3_uncommon"
      },
      "item_id": "wls2_weapon_range_shotgun_3_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_shotgun_3_uncommon_description",
        "en": {
          "description": "For a clear shot, you need this double barrel shotgun",
          "full_description": "For a clear shot, you need this double barrel shotgun",
          "name": "Bockflinte"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_shotgun_3_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_3_uncommon_name",
        "zh": {
          "description": "想要打得准，试试这把双管霰弹枪",
          "full_description": "想要打得准，试试这把双管霰弹枪",
          "name": "波克弗林特"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_3": 6,
            "wls2_resourse_fourfold_nails_3": 3,
            "wls2_resourse_secondary_ingot_3": 6,
            "wls2_resourse_secondary_plank_3": 3
          },
          "learn_exp": 800,
          "min_level": 0,
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
            "discounted_transaction_id": "transaction_iap_wls_2_a",
            "durability_factor": 0.25,
            "level_max": 50,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_shotgun_3_uncommon",
            "transaction_id": "transaction_iap_wls_2_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_1_a",
            "durability_factor": 0.25,
            "level_max": 75,
            "level_min": 51,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_shotgun_3_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_shotgun_3_uncommon_icon",
      "stat_curves": {
        "damage": {
          "1": 298,
          "2": 328,
          "3": 358,
          "4": 388,
          "5": 417,
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
        "shotgun",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_3"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_5"
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
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_bokflint"
        ],
        "hit_sounds": [
          "wls_rifle_bokflint"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Shotgun_Bockflinte",
        "prefab_pbr_id": "@Shotgun_Bockflinte_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_range_shotgun_3_uncommon",
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
      "image_key": "9de5dc1aaffd7c07176a81bf38cc09c6f9dbb95ec0f23c43e9119ff1ded678e5",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "波克弗林特",
        "name_en": "Bockflinte",
        "description_zh": "想要打得准，试试这把双管霰弹枪",
        "description_en": "For a clear shot, you need this double barrel shotgun",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_shotgun_3_uncommon 波克弗林特 bockflinte 想要打得准，试试这把双管霰弹枪 for a clear shot, you need this double barrel shotgun weapon 武器 shotgun weapon weapon_storage quick shotgun fire_weapon wls2_weapon_range_shotgun_3_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 298,
            "unit": "",
            "display": "298"
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
              "damage": 298
            },
            "display": {
              "damage": "298"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 328
            },
            "display": {
              "damage": "328"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 358
            },
            "display": {
              "damage": "358"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 388
            },
            "display": {
              "damage": "388"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 417
            },
            "display": {
              "damage": "417"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 418
            },
            "display": {
              "damage": "418"
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
          "伤害：6 级起每级增加 1，最高 1417。",
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
        "description": "inventory_stack_view_wls2_weapon_range_shotgun_4_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_shotgun_4_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_shotgun_4_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_range_shotgun_4_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary05/wls_fast_load_shotgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_shotgun_4_common"
      },
      "item_id": "wls2_weapon_range_shotgun_4_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_shotgun_4_common_description",
        "en": {
          "description": "Fast double barrel shotgun can stop any opponent",
          "full_description": "Fast double barrel shotgun can stop any opponent",
          "name": "Fast load shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_shotgun_4_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_4_common_name",
        "zh": {
          "description": "这把发射迅速的双管霰弹枪可以干掉任何对手",
          "full_description": "这把发射迅速的双管霰弹枪可以干掉任何对手",
          "name": "快速装填霰弹枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_4": 2,
            "wls2_resourse_fourfold_nails_4": 2,
            "wls2_resourse_secondary_ingot_4": 4,
            "wls2_resourse_secondary_plank_4": 2
          },
          "learn_exp": 800,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_shotgun_4_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_weapon_12"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls_fast_load_shotgun",
      "stat_curves": {
        "damage": {
          "1": 375,
          "2": 405,
          "3": 440,
          "4": 475,
          "5": 510,
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
          "1": 5,
          "2": 6,
          "3": 6,
          "4": 7,
          "5": 7
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
        "shotgun",
        "fire_weapon"
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
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_winchester_45"
        ],
        "hit_sounds": [
          "wls_winchester_45"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Shotgun_FastLoad",
        "prefab_pbr_id": "@Shotgun_FastLoad_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_range_shotgun_4_common",
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
      "image_key": "620a0a2c13573dea17b0e978f1e5fc1080a1ae68585d8778c4d75583b2531fac",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "快速装填霰弹枪",
        "name_en": "Fast load shotgun",
        "description_zh": "这把发射迅速的双管霰弹枪可以干掉任何对手",
        "description_en": "Fast double barrel shotgun can stop any opponent",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_shotgun_4_common 快速装填霰弹枪 fast load shotgun 这把发射迅速的双管霰弹枪可以干掉任何对手 fast double barrel shotgun can stop any opponent weapon 武器 shotgun weapon weapon_storage quick shotgun fire_weapon wls2_weapon_range_shotgun_4_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 375,
            "unit": "",
            "display": "375"
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
              "damage": 375,
              "penetrating_damage": 5
            },
            "display": {
              "damage": "375",
              "penetrating_damage": "5"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 405,
              "penetrating_damage": 6
            },
            "display": {
              "damage": "405",
              "penetrating_damage": "6"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 440,
              "penetrating_damage": 6
            },
            "display": {
              "damage": "440",
              "penetrating_damage": "6"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 475,
              "penetrating_damage": 7
            },
            "display": {
              "damage": "475",
              "penetrating_damage": "7"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 510,
              "penetrating_damage": 7
            },
            "display": {
              "damage": "510",
              "penetrating_damage": "7"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 511,
              "penetrating_damage": 7
            },
            "display": {
              "damage": "511",
              "penetrating_damage": "7"
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
          "伤害：6 级起每级增加 1，最高 1510。",
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
        "description": "inventory_stack_view_wls2_weapon_range_shotgun_4_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_shotgun_4_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_range_shotgun_4_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_range_shotgun_4_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_shotgun_4_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_shotgun_4_uncommon"
      },
      "item_id": "wls2_weapon_range_shotgun_4_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_shotgun_4_uncommon_description",
        "en": {
          "description": "Convenient weapon for a real ranger",
          "full_description": "Convenient weapon for a real ranger",
          "name": "Ranger shotgun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_shotgun_4_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_4_uncommon_name",
        "zh": {
          "description": "适合真正游侠的便利武器",
          "full_description": "适合真正游侠的便利武器",
          "name": "游侠霰弹枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_4": 6,
            "wls2_resourse_fourfold_nails_4": 3,
            "wls2_resourse_secondary_ingot_4": 6,
            "wls2_resourse_secondary_plank_4": 3
          },
          "learn_exp": 1600,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_10_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_uncommon_desc"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_shotgun_4_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_weapon_13"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_shotgun_4_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_shotgun_4_uncommon"
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
            "stack_id": "wls2_weapon_range_shotgun_4_uncommon",
            "transaction_id": "transaction_iap_wls_8_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_4_a",
            "durability_factor": 0.25,
            "level_min": 106,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_shotgun_4_uncommon",
            "transaction_id": "transaction_iap_wls_5_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_shotgun_4_uncommon_icon",
      "stat_curves": {
        "damage": {
          "1": 505,
          "2": 550,
          "3": 595,
          "4": 645,
          "5": 695,
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
          "1": 7,
          "2": 8,
          "3": 9,
          "4": 9,
          "5": 10
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
        "shotgun",
        "fire_weapon"
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
          "wls_rifle_10"
        ],
        "hit_sounds": [
          "wls_rifle_10"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Shotgun_Winchester_M1887",
        "prefab_pbr_id": "@Shotgun_Winchester_M1887_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_range_shotgun_4_uncommon",
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
      "image_key": "1ae8c823e21ade26c511cea224465bb010ccb01da3c7f3be6198d475e45619eb",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "游侠霰弹枪",
        "name_en": "Ranger shotgun",
        "description_zh": "适合真正游侠的便利武器",
        "description_en": "Convenient weapon for a real ranger",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_shotgun_4_uncommon 游侠霰弹枪 ranger shotgun 适合真正游侠的便利武器 convenient weapon for a real ranger weapon 武器 shotgun weapon weapon_storage quick shotgun fire_weapon wls2_weapon_range_shotgun_4_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 505,
            "unit": "",
            "display": "505"
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
              "damage": 505,
              "penetrating_damage": 7
            },
            "display": {
              "damage": "505",
              "penetrating_damage": "7"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 550,
              "penetrating_damage": 8
            },
            "display": {
              "damage": "550",
              "penetrating_damage": "8"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 595,
              "penetrating_damage": 9
            },
            "display": {
              "damage": "595",
              "penetrating_damage": "9"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 645,
              "penetrating_damage": 9
            },
            "display": {
              "damage": "645",
              "penetrating_damage": "9"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 695,
              "penetrating_damage": 10
            },
            "display": {
              "damage": "695",
              "penetrating_damage": "10"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 696,
              "penetrating_damage": 10
            },
            "display": {
              "damage": "696",
              "penetrating_damage": "10"
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
          "伤害：6 级起每级增加 1，最高 1695。",
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
        "description": "inventory_stack_view_wls2_weapon_range_shotgun_5_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_shotgun_5_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_shotgun_5_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_range_shotgun_5_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary05/wls_henry_.44",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_shotgun_5_common"
      },
      "item_id": "wls2_weapon_range_shotgun_5_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_shotgun_5_common_description",
        "en": {
          "description": "With this gun you will have less chance of missing, especially at close range",
          "full_description": "With this gun you will have less chance of missing, especially at close range",
          "name": "Coach gun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_shotgun_5_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_5_common_name",
        "zh": {
          "description": "有了这把枪，你的射击精度会大幅提高，尤其是在近距离的时候",
          "full_description": "有了这把枪，你的射击精度会大幅提高，尤其是在近距离的时候",
          "name": "马车夫之枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_5": 2,
            "wls2_resourse_fourfold_nails_4": 2,
            "wls2_resourse_secondary_ingot_5": 4,
            "wls2_resourse_secondary_plank_5": 2
          },
          "learn_exp": 1600,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_shotgun_5_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_weapon_14"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_shotgun_5_common"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_shotgun_5_common"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls_henry_.44",
      "stat_curves": {
        "damage": {
          "1": 600,
          "2": 660,
          "3": 720,
          "4": 770,
          "5": 830,
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
          "1": 14,
          "2": 15,
          "3": 17,
          "4": 18,
          "5": 19
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
        "shotgun",
        "fire_weapon"
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
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_01"
        ],
        "hit_sounds": [
          "wls_rifle_01"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Shotgun_Winchester_M1883",
        "prefab_pbr_id": "@Shotgun_Winchester_M1883_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_range_shotgun_5_common",
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
      "image_key": "c6d6dc0eb93fa94cc56e2507388471cc20ec8576fd72ccc7a196f0d82bd6795c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "马车夫之枪",
        "name_en": "Coach gun",
        "description_zh": "有了这把枪，你的射击精度会大幅提高，尤其是在近距离的时候",
        "description_en": "With this gun you will have less chance of missing, especially at close range",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_shotgun_5_common 马车夫之枪 coach gun 有了这把枪，你的射击精度会大幅提高，尤其是在近距离的时候 with this gun you will have less chance of missing, especially at close range weapon 武器 shotgun weapon weapon_storage quick shotgun fire_weapon wls2_weapon_range_shotgun_5_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 600,
            "unit": "",
            "display": "600"
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
              "damage": 600,
              "penetrating_damage": 14
            },
            "display": {
              "damage": "600",
              "penetrating_damage": "14"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 660,
              "penetrating_damage": 15
            },
            "display": {
              "damage": "660",
              "penetrating_damage": "15"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 720,
              "penetrating_damage": 17
            },
            "display": {
              "damage": "720",
              "penetrating_damage": "17"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 770,
              "penetrating_damage": 18
            },
            "display": {
              "damage": "770",
              "penetrating_damage": "18"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 830,
              "penetrating_damage": 19
            },
            "display": {
              "damage": "830",
              "penetrating_damage": "19"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 831,
              "penetrating_damage": 19
            },
            "display": {
              "damage": "831",
              "penetrating_damage": "19"
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
          "伤害：6 级起每级增加 1，最高 1830。",
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
        "description": "wls2_weapon_range_shotgun_5_epic_description",
        "full_description": "wls2_weapon_range_shotgun_5_epic_description",
        "name": "wls2_weapon_range_shotgun_5_epic_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_range_shotgun_5_epic_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_shotgun_5_epic"
      },
      "item_id": "wls2_weapon_range_shotgun_5_epic",
      "localization": {
        "description_key": "wls2_weapon_range_shotgun_5_epic_description",
        "en": {
          "description": "There will probably never be a more effective shotgun than this",
          "full_description": "There will probably never be a more effective shotgun than this",
          "name": "Winchester Model 1897"
        },
        "full_description_key": "wls2_weapon_range_shotgun_5_epic_description",
        "name_key": "wls2_weapon_range_shotgun_5_epic_name",
        "zh": {
          "description": "可能没有任何枪械能与这把霰弹枪的高效相提并论",
          "full_description": "可能没有任何枪械能与这把霰弹枪的高效相提并论",
          "name": "温彻斯特 M1897"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_industrial_gunparts": 5,
            "wls2_resourse_fourfold_gunparts_5": 5,
            "wls2_resourse_secondary_ingot_5": 10,
            "wls2_resourse_secondary_plank_5": 5
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
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.25,
            "level_max": 105,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_shotgun_5_epic",
            "transaction_id": "transaction_iap_wls_10_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
            "durability_factor": 0.25,
            "level_min": 106,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_shotgun_5_epic",
            "transaction_id": "transaction_iap_wls_8_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_range_shotgun_5_epic_icon",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.1,
          "3": 0.15,
          "4": 0.2,
          "5": 0.25
        },
        "damage": {
          "1": 1430,
          "2": 1570,
          "3": 1710,
          "4": 1850,
          "5": 1985,
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
          "1": 4,
          "2": 4,
          "3": 4,
          "4": 4,
          "5": 4
        },
        "max_durability": {
          "1": 326,
          "2": 326,
          "3": 326,
          "4": 326,
          "5": 326
        },
        "penetrating_damage": {
          "1": 35,
          "2": 38,
          "3": 41,
          "4": 45,
          "5": 48
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
        "shotgun",
        "fire_weapon"
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
        "prefab_common_id": "@Shotgun_Winchester_M1897_2",
        "prefab_pbr_id": "@Shotgun_Winchester_M1897_2_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_range_shotgun_5_epic",
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
      "image_key": "d434921f6cc377838e7d2ff2100c3213e25661c09018de7f0899d4403b9156d2",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "温彻斯特 M1897",
        "name_en": "Winchester Model 1897",
        "description_zh": "可能没有任何枪械能与这把霰弹枪的高效相提并论",
        "description_en": "There will probably never be a more effective shotgun than this",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_range_shotgun_5_epic 温彻斯特 m1897 winchester model 1897 可能没有任何枪械能与这把霰弹枪的高效相提并论 there will probably never be a more effective shotgun than this weapon 武器 shotgun weapon weapon_storage quick shotgun fire_weapon wls2_weapon_range_shotgun_5_epic"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1430,
            "unit": "",
            "display": "1430"
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
            "value": 326,
            "unit": "",
            "display": "326"
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
              "critical_hit_chance": 0.05,
              "damage": 1430,
              "dot_amount": 100,
              "penetrating_damage": 35
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "1430",
              "dot_amount": "100",
              "penetrating_damage": "35"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 1570,
              "dot_amount": 150,
              "penetrating_damage": 38
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "1570",
              "dot_amount": "150",
              "penetrating_damage": "38"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 1710,
              "dot_amount": 200,
              "penetrating_damage": 41
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "1710",
              "dot_amount": "200",
              "penetrating_damage": "41"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 1850,
              "dot_amount": 250,
              "penetrating_damage": 45
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "1850",
              "dot_amount": "250",
              "penetrating_damage": "45"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 1985,
              "dot_amount": 300,
              "penetrating_damage": 48
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "1985",
              "dot_amount": "300",
              "penetrating_damage": "48"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 1986,
              "dot_amount": 300,
              "penetrating_damage": 48
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "1986",
              "dot_amount": "300",
              "penetrating_damage": "48"
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
          "伤害：6 级起每级增加 1，最高 2985。",
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
        "description": "inventory_stack_view_wls2_weapon_range_shotgun_5_rare_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_shotgun_5_rare_description",
        "name": "inventory_stack_view_wls2_weapon_range_shotgun_5_rare_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_range_shotgun_5_rare_name_with_wrapping",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_shotgun_5_rare_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_shotgun_5_rare"
      },
      "item_id": "wls2_weapon_range_shotgun_5_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_shotgun_5_rare_description",
        "en": {
          "description": "Shotgun designed by famous gunsmith John Browning",
          "full_description": "Shotgun designed by famous gunsmith John Browning",
          "name": "Trench gun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_shotgun_5_rare_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_5_rare_name",
        "zh": {
          "description": "由著名枪匠约翰·勃朗宁设计的霰弹枪",
          "full_description": "由著名枪匠约翰·勃朗宁设计的霰弹枪",
          "name": "战壕枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_5": 8,
            "wls2_resourse_fourfold_nails_4": 4,
            "wls2_resourse_secondary_ingot_5": 8,
            "wls2_resourse_secondary_plank_5": 4
          },
          "learn_exp": 3200,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_30_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": []
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
            "stack_id": "wls2_weapon_range_shotgun_5_rare",
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
            "stack_id": "wls2_weapon_range_shotgun_5_rare",
            "transaction_id": "transaction_iap_wls_6_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_shotgun_5_rare_icon",
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
        "shotgun",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_25"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
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
        "prefab_common_id": "@Shotgun_Winchester_M1897",
        "prefab_pbr_id": "@Shotgun_Winchester_M1897_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_range_shotgun_5_rare",
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
      "image_key": "ffd852a11a83d35540fe6a802f73043bb0cb2cdc810d11989f0b045ef04802c5",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "战壕枪",
        "name_en": "Trench gun",
        "description_zh": "由著名枪匠约翰·勃朗宁设计的霰弹枪",
        "description_en": "Shotgun designed by famous gunsmith John Browning",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_shotgun_5_rare 战壕枪 trench gun 由著名枪匠约翰·勃朗宁设计的霰弹枪 shotgun designed by famous gunsmith john browning weapon 武器 shotgun weapon weapon_storage quick shotgun fire_weapon wls2_weapon_range_shotgun_5_rare"
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
              "penetrating_damage": 27
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "1150",
              "penetrating_damage": "27"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 1250,
              "penetrating_damage": 30
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "1250",
              "penetrating_damage": "30"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 1350,
              "penetrating_damage": 32
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "1350",
              "penetrating_damage": "32"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 1450,
              "penetrating_damage": 35
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "1450",
              "penetrating_damage": "35"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 1550,
              "penetrating_damage": 38
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "1550",
              "penetrating_damage": "38"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 1551,
              "penetrating_damage": 38
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "1551",
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
        "description": "inventory_stack_view_wls2_weapon_range_shotgun_6_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_shotgun_6_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_shotgun_6_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_shotgun_6_common",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_shotgun_6_common"
      },
      "item_id": "wls2_weapon_range_shotgun_6_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_shotgun_6_common_description",
        "en": {
          "description": "This shotgun, with its unique bottom ejection, offers unmatched reliability",
          "full_description": "This shotgun, with its unique bottom ejection, offers unmatched reliability",
          "name": "Rem M10 Riot"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_shotgun_6_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_6_common_name",
        "zh": {
          "description": "这把霰弹枪，凭借其独特的底部弹出设计，提供了无与伦比的可靠性",
          "full_description": "这把霰弹枪，凭借其独特的底部弹出设计，提供了无与伦比的可靠性",
          "name": "Rem M10 暴乱"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_6": 2,
            "wls2_resourse_fourfold_nails_6": 2,
            "wls2_resourse_secondary_ingot_6": 4,
            "wls2_resourse_secondary_plank_6": 2
          },
          "learn_exp": 3200,
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
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_shotgun_6_common",
      "stat_curves": {
        "damage": {
          "1": 960,
          "2": 1045,
          "3": 1135,
          "4": 1225,
          "5": 1325,
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
          "2": 29,
          "3": 32,
          "4": 35,
          "5": 37
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
        "shotgun",
        "fire_weapon"
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
          "coin_id": "spend_coin_soft_110"
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
          "coin_id": "spend_coin_soft_120"
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
          "coin_id": "spend_coin_soft_130"
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
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_01"
        ],
        "hit_sounds": [
          "wls_rifle_01"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Remington_Model_10",
        "prefab_pbr_id": "@Remington_Model_10_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_range_shotgun_6_common",
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
      "image_key": "2dca6cc36316a013fa1c188bcfb4f51621045f124811c6802b36b1a22dbd63bc",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "Rem M10 暴乱",
        "name_en": "Rem M10 Riot",
        "description_zh": "这把霰弹枪，凭借其独特的底部弹出设计，提供了无与伦比的可靠性",
        "description_en": "This shotgun, with its unique bottom ejection, offers unmatched reliability",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_shotgun_6_common rem m10 暴乱 rem m10 riot 这把霰弹枪，凭借其独特的底部弹出设计，提供了无与伦比的可靠性 this shotgun, with its unique bottom ejection, offers unmatched reliability weapon 武器 shotgun weapon weapon_storage quick shotgun fire_weapon wls2_weapon_range_shotgun_6_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 960,
            "unit": "",
            "display": "960"
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
              "damage": 960,
              "penetrating_damage": 27
            },
            "display": {
              "damage": "960",
              "penetrating_damage": "27"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 1045,
              "penetrating_damage": 29
            },
            "display": {
              "damage": "1045",
              "penetrating_damage": "29"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 1135,
              "penetrating_damage": 32
            },
            "display": {
              "damage": "1135",
              "penetrating_damage": "32"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 1225,
              "penetrating_damage": 35
            },
            "display": {
              "damage": "1225",
              "penetrating_damage": "35"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 1325,
              "penetrating_damage": 37
            },
            "display": {
              "damage": "1325",
              "penetrating_damage": "37"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 1326,
              "penetrating_damage": 37
            },
            "display": {
              "damage": "1326",
              "penetrating_damage": "37"
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
          "伤害：6 级起每级增加 1，最高 2325。",
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
        "description": "inventory_stack_view_wls2_weapon_range_shotgun_6_epic_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_shotgun_6_epic_description",
        "name": "inventory_stack_view_wls2_weapon_range_shotgun_6_epic_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_range_shotgun_6_epic_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_shotgun_6_epic"
      },
      "item_id": "wls2_weapon_range_shotgun_6_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_shotgun_6_epic_description",
        "en": {
          "description": "A reliable, semi-automatic shotgun for elite marksmen",
          "full_description": "A reliable, semi-automatic shotgun for elite marksmen",
          "name": "Widowmaker"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_shotgun_6_epic_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_6_epic_name",
        "zh": {
          "description": "一款可靠的、半自动的霰弹枪，适用于精英射手",
          "full_description": "一款可靠的、半自动的霰弹枪，适用于精英射手",
          "name": "寡妇制造者"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_industrial_gunparts": 8,
            "wls2_resourse_fourfold_gunparts_6": 5,
            "wls2_resourse_secondary_ingot_6": 10,
            "wls2_resourse_secondary_plank_6": 5
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
            "discounted_transaction_id": "transaction_iap_wls_12_a",
            "durability_factor": 0.25,
            "level_max": 125,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_shotgun_6_epic",
            "transaction_id": "transaction_iap_wls_15_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
            "durability_factor": 0.25,
            "level_min": 126,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_shotgun_6_epic",
            "transaction_id": "transaction_iap_wls_12_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_range_shotgun_6_epic_icon",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.1,
          "3": 0.15,
          "4": 0.2,
          "5": 0.25
        },
        "damage": {
          "1": 2285,
          "2": 2505,
          "3": 2725,
          "4": 2950,
          "5": 3175,
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
          "1": 66,
          "2": 73,
          "3": 80,
          "4": 86,
          "5": 93
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
        "shotgun",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_500"
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
        "prefab_common_id": "@Riffle_Winchester_M12",
        "prefab_pbr_id": "@Riffle_Winchester_M12_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_range_shotgun_6_epic",
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
      "image_key": "b116963d6bb55281e31c82ace74fb302d633979ba58de4dfb2bfe98a3828947e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "寡妇制造者",
        "name_en": "Widowmaker",
        "description_zh": "一款可靠的、半自动的霰弹枪，适用于精英射手",
        "description_en": "A reliable, semi-automatic shotgun for elite marksmen",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_range_shotgun_6_epic 寡妇制造者 widowmaker 一款可靠的、半自动的霰弹枪，适用于精英射手 a reliable, semi-automatic shotgun for elite marksmen weapon 武器 shotgun weapon weapon_storage quick shotgun fire_weapon wls2_weapon_range_shotgun_6_epic"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 2285,
            "unit": "",
            "display": "2285"
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
              "critical_hit_chance": 0.05,
              "damage": 2285,
              "dot_amount": 300,
              "penetrating_damage": 66
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "2285",
              "dot_amount": "300",
              "penetrating_damage": "66"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 2505,
              "dot_amount": 350,
              "penetrating_damage": 73
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "2505",
              "dot_amount": "350",
              "penetrating_damage": "73"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 2725,
              "dot_amount": 400,
              "penetrating_damage": 80
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "2725",
              "dot_amount": "400",
              "penetrating_damage": "80"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 2950,
              "dot_amount": 450,
              "penetrating_damage": 86
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "2950",
              "dot_amount": "450",
              "penetrating_damage": "86"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 3175,
              "dot_amount": 500,
              "penetrating_damage": 93
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "3175",
              "dot_amount": "500",
              "penetrating_damage": "93"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 3176,
              "dot_amount": 500,
              "penetrating_damage": 93
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "3176",
              "dot_amount": "500",
              "penetrating_damage": "93"
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
          "伤害：6 级起每级增加 1，最高 4175。",
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
        "description": "inventory_stack_view_wls2_weapon_range_shotgun_6_rare_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_shotgun_6_rare_description",
        "name": "inventory_stack_view_wls2_weapon_range_shotgun_6_rare_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_shotgun_6_rare",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_shotgun_6_rare"
      },
      "item_id": "wls2_weapon_range_shotgun_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_shotgun_6_rare_description",
        "en": {
          "description": "This Browning model is distinguished by its distinctive appearance and destructive power",
          "full_description": "This Browning model is distinguished by its distinctive appearance and destructive power",
          "name": "Humpback"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_shotgun_6_rare_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_6_rare_name",
        "zh": {
          "description": "这款布朗宁模型以其独特的外观和毁灭性的威力而著称",
          "full_description": "这款布朗宁模型以其独特的外观和毁灭性的威力而著称",
          "name": "座头鲸"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_6": 8,
            "wls2_resourse_fourfold_nails_6": 4,
            "wls2_resourse_secondary_ingot_6": 8,
            "wls2_resourse_secondary_plank_6": 4
          },
          "learn_exp": 6400,
          "min_level": 0,
          "required_electricity": 10,
          "transaction_id": "transaction_iap_wls_30_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
            "durability_factor": 0.25,
            "level_max": 120,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_shotgun_6_rare",
            "transaction_id": "transaction_iap_wls_12_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.25,
            "level_min": 121,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_shotgun_6_rare",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_shotgun_6_rare",
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
        "shotgun",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_100"
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
        "prefab_common_id": "@Shotgun_Browning_Auto_5",
        "prefab_pbr_id": "@Shotgun_Browning_Auto_5_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_range_shotgun_6_rare",
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
      "image_key": "014f89fc55425ceba6ad805d2117ce64642fe39af5dbdf087986091cba9cb383",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "座头鲸",
        "name_en": "Humpback",
        "description_zh": "这款布朗宁模型以其独特的外观和毁灭性的威力而著称",
        "description_en": "This Browning model is distinguished by its distinctive appearance and destructive power",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_shotgun_6_rare 座头鲸 humpback 这款布朗宁模型以其独特的外观和毁灭性的威力而著称 this browning model is distinguished by its distinctive appearance and destructive power weapon 武器 shotgun weapon weapon_storage quick shotgun fire_weapon wls2_weapon_range_shotgun_6_rare"
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
              "penetrating_damage": 52
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "1800",
              "penetrating_damage": "52"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 1975,
              "penetrating_damage": 57
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "1975",
              "penetrating_damage": "57"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 2145,
              "penetrating_damage": 62
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "2145",
              "penetrating_damage": "62"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 2325,
              "penetrating_damage": 67
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "2325",
              "penetrating_damage": "67"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 2490,
              "penetrating_damage": 72
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "2490",
              "penetrating_damage": "72"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 2491,
              "penetrating_damage": 72
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "2491",
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
        "description": "inventory_stack_view_wls2_weapon_range_shotgun_6_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_shotgun_6_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_range_shotgun_6_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_shotgun_6_uncommon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_shotgun_6_uncommon"
      },
      "item_id": "wls2_weapon_range_shotgun_6_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_shotgun_6_uncommon_description",
        "en": {
          "description": "Beast with a brutal design and unrivaled firepower that makes it a fearsome opponent",
          "full_description": "Beast with a brutal design and unrivaled firepower that makes it a fearsome opponent",
          "name": "Remington Whipped"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_shotgun_6_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_6_uncommon_name",
        "zh": {
          "description": "野兽具有残暴的设计和无与伦比的火力，使其成为可怕的对手",
          "full_description": "野兽具有残暴的设计和无与伦比的火力，使其成为可怕的对手",
          "name": "雷明顿打发"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_6": 6,
            "wls2_resourse_fourfold_nails_6": 3,
            "wls2_resourse_secondary_ingot_6": 6,
            "wls2_resourse_secondary_plank_6": 3
          },
          "learn_exp": 3200,
          "min_level": 0,
          "required_electricity": 8,
          "transaction_id": "transaction_iap_wls_15_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_uncommon_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.25,
            "level_max": 120,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_shotgun_6_uncommon",
            "transaction_id": "transaction_iap_wls_10_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
            "durability_factor": 0.25,
            "level_min": 121,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_shotgun_6_uncommon",
            "transaction_id": "transaction_iap_wls_8_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_shotgun_6_uncommon",
      "stat_curves": {
        "damage": {
          "1": 1295,
          "2": 1425,
          "3": 1525,
          "4": 1575,
          "5": 1775,
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
          "1": 37,
          "2": 41,
          "3": 44,
          "4": 48,
          "5": 52
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
        "shotgun",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_15"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_30"
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
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_01"
        ],
        "hit_sounds": [
          "wls_rifle_01"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Remington_model_11s",
        "prefab_pbr_id": "@Remington_model_11s_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_range_shotgun_6_uncommon",
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
      "image_key": "6d828245f283a56e1f2f13e748a22f659e8b047a85d3cda635b67a993fc8f393",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "雷明顿打发",
        "name_en": "Remington Whipped",
        "description_zh": "野兽具有残暴的设计和无与伦比的火力，使其成为可怕的对手",
        "description_en": "Beast with a brutal design and unrivaled firepower that makes it a fearsome opponent",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_shotgun_6_uncommon 雷明顿打发 remington whipped 野兽具有残暴的设计和无与伦比的火力，使其成为可怕的对手 beast with a brutal design and unrivaled firepower that makes it a fearsome opponent weapon 武器 shotgun weapon weapon_storage quick shotgun fire_weapon wls2_weapon_range_shotgun_6_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1295,
            "unit": "",
            "display": "1295"
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
              "damage": 1295,
              "penetrating_damage": 37
            },
            "display": {
              "damage": "1295",
              "penetrating_damage": "37"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 1425,
              "penetrating_damage": 41
            },
            "display": {
              "damage": "1425",
              "penetrating_damage": "41"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 1525,
              "penetrating_damage": 44
            },
            "display": {
              "damage": "1525",
              "penetrating_damage": "44"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 1575,
              "penetrating_damage": 48
            },
            "display": {
              "damage": "1575",
              "penetrating_damage": "48"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 1775,
              "penetrating_damage": 52
            },
            "display": {
              "damage": "1775",
              "penetrating_damage": "52"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 1776,
              "penetrating_damage": 52
            },
            "display": {
              "damage": "1776",
              "penetrating_damage": "52"
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
          "伤害：6 级起每级增加 1，最高 2775。",
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
        "full_description": "wls2_weapon_range_shotgun_7_common_description",
        "name": "wls2_weapon_range_shotgun_7_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_shotgun_7_common_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_shotgun_7_common"
      },
      "item_id": "wls2_weapon_range_shotgun_7_common",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": "Short-barreled shotgun with a pistol grip",
          "name": "Auto & Burglar Gun"
        },
        "full_description_key": "wls2_weapon_range_shotgun_7_common_description",
        "name_key": "wls2_weapon_range_shotgun_7_common_name",
        "zh": {
          "description": null,
          "full_description": "短管霰弹枪带有手枪握把",
          "name": "自动 & 盗贼 枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_7": 2,
            "wls2_resourse_fourfold_nails_7": 2,
            "wls2_resourse_secondary_ingot_7": 4,
            "wls2_resourse_secondary_plank_7": 2
          },
          "learn_exp": 3200,
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
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_shotgun_7_common_icon",
      "stat_curves": {
        "damage": {
          "1": 1520,
          "2": 1660,
          "3": 1800,
          "4": 1950,
          "5": 2080,
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
          "1": 42,
          "2": 47,
          "3": 51,
          "4": 55,
          "5": 59
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
        "shotgun",
        "fire_weapon"
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
          "coin_id": "spend_coin_soft_130"
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
          "coin_id": "spend_coin_soft_140"
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
          "coin_id": "spend_coin_soft_150"
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
          "coin_id": "spend_coin_soft_160"
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
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_01"
        ],
        "hit_sounds": [
          "wls_rifle_01"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Shotgun_Ithaca_pbr",
        "prefab_pbr_id": "@Shotgun_Ithaca_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_range_shotgun_7_common",
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
      "image_key": "ddccce5beaf13585b0a6b247f145f05e6034950d6926bfc38384192679d1a5bd",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "自动 & 盗贼 枪",
        "name_en": "Auto & Burglar Gun",
        "description_zh": "短管霰弹枪带有手枪握把",
        "description_en": "Short-barreled shotgun with a pistol grip",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_shotgun_7_common 自动 & 盗贼 枪 auto & burglar gun 短管霰弹枪带有手枪握把 short-barreled shotgun with a pistol grip weapon 武器 shotgun weapon weapon_storage quick shotgun fire_weapon wls2_weapon_range_shotgun_7_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1520,
            "unit": "",
            "display": "1520"
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
              "damage": 1520,
              "penetrating_damage": 42
            },
            "display": {
              "damage": "1520",
              "penetrating_damage": "42"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 1660,
              "penetrating_damage": 47
            },
            "display": {
              "damage": "1660",
              "penetrating_damage": "47"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 1800,
              "penetrating_damage": 51
            },
            "display": {
              "damage": "1800",
              "penetrating_damage": "51"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 1950,
              "penetrating_damage": 55
            },
            "display": {
              "damage": "1950",
              "penetrating_damage": "55"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 2080,
              "penetrating_damage": 59
            },
            "display": {
              "damage": "2080",
              "penetrating_damage": "59"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 2081,
              "penetrating_damage": 59
            },
            "display": {
              "damage": "2081",
              "penetrating_damage": "59"
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
          "伤害：6 级起每级增加 1，最高 3080。",
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
        "name": "wls2_weapon_range_shotgun_7_epic_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_7_epic_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_shotgun_7_epic"
      },
      "item_id": "wls2_weapon_range_shotgun_7_epic",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Ithaka Model 37"
        },
        "full_description_key": null,
        "name_key": "wls2_weapon_range_shotgun_7_epic_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "伊萨卡 模型 37"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_industrial_gunparts": 10,
            "wls2_resourse_fourfold_gunparts_7": 5,
            "wls2_resourse_secondary_ingot_7": 10,
            "wls2_resourse_secondary_plank_7": 5
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
            "discounted_transaction_id": "transaction_iap_wls_12_a",
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
            "stack_id": "wls2_weapon_range_shotgun_7_epic",
            "transaction_id": "transaction_iap_wls_15_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
            "durability_factor": 0.25,
            "level_min": 131,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_shotgun_7_epic",
            "transaction_id": "transaction_iap_wls_12_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_7_epic_icon",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.1,
          "3": 0.15,
          "4": 0.2,
          "5": 0.25
        },
        "damage": {
          "1": 3650,
          "2": 4000,
          "3": 4350,
          "4": 4700,
          "5": 5050,
          "per_level_after_max": 1
        },
        "dot_amount": {
          "1": 500,
          "2": 550,
          "3": 600,
          "4": 650,
          "5": 700
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
          "1": 106,
          "2": 117,
          "3": 127,
          "4": 138,
          "5": 149
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
        "shotgun",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_150"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_250"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_400"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_750"
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
        "prefab_common_id": "@Shotgun_Marlin_1898_pbr",
        "prefab_pbr_id": "@Shotgun_Marlin_1898_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_range_shotgun_7_epic",
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
      "image_key": "46da834f84afe2a0d558e95bf7fbc9cf65e954e4c5802af685281f98b87c002b",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "伊萨卡 模型 37",
        "name_en": "Ithaka Model 37",
        "description_zh": "",
        "description_en": "",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_range_shotgun_7_epic 伊萨卡 模型 37 ithaka model 37 weapon 武器 shotgun weapon weapon_storage quick shotgun fire_weapon wls2_weapon_range_shotgun_7_epic"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 3650,
            "unit": "",
            "display": "3650"
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
              "critical_hit_chance": 0.05,
              "damage": 3650,
              "dot_amount": 500,
              "penetrating_damage": 106
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "3650",
              "dot_amount": "500",
              "penetrating_damage": "106"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 4000,
              "dot_amount": 550,
              "penetrating_damage": 117
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "4000",
              "dot_amount": "550",
              "penetrating_damage": "117"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 4350,
              "dot_amount": 600,
              "penetrating_damage": 127
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "4350",
              "dot_amount": "600",
              "penetrating_damage": "127"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 4700,
              "dot_amount": 650,
              "penetrating_damage": 138
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "4700",
              "dot_amount": "650",
              "penetrating_damage": "138"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 5050,
              "dot_amount": 700,
              "penetrating_damage": 149
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "5050",
              "dot_amount": "700",
              "penetrating_damage": "149"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 5051,
              "dot_amount": 700,
              "penetrating_damage": 149
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "5051",
              "dot_amount": "700",
              "penetrating_damage": "149"
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
          "伤害：6 级起每级增加 1，最高 6050。",
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
        "name": "wls2_weapon_range_shotgun_7_rare_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_shotgun_7_rare_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_shotgun_7_rare"
      },
      "item_id": "wls2_weapon_range_shotgun_7_rare",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Winchester Model 1912"
        },
        "full_description_key": null,
        "name_key": "wls2_weapon_range_shotgun_7_rare_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "温彻斯特 模型 1912"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_7": 8,
            "wls2_resourse_fourfold_nails_7": 4,
            "wls2_resourse_secondary_ingot_7": 8,
            "wls2_resourse_secondary_plank_7": 4
          },
          "learn_exp": 6400,
          "min_level": 0,
          "required_electricity": 20,
          "transaction_id": "transaction_iap_wls_30_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
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
            "stack_id": "wls2_weapon_range_shotgun_7_rare",
            "transaction_id": "transaction_iap_wls_12_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.25,
            "level_min": 125,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_shotgun_7_rare",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_shotgun_7_rare_icon",
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
        "shotgun",
        "fire_weapon"
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
          "coin_id": "spend_coin_soft_1000"
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
          "coin_id": "spend_coin_soft_2000"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_100"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_200"
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
        "prefab_common_id": "@Shotgun_Winchester_1912_pbr",
        "prefab_pbr_id": "@Shotgun_Winchester_1912_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_range_shotgun_7_rare",
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
      "image_key": "bf80aec6fc64d114e414bb249cc0ab1cf76e2120b38ea7c8249ac4c6c09e4e35",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "温彻斯特 模型 1912",
        "name_en": "Winchester Model 1912",
        "description_zh": "",
        "description_en": "",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_shotgun_7_rare 温彻斯特 模型 1912 winchester model 1912 weapon 武器 shotgun weapon weapon_storage quick shotgun fire_weapon wls2_weapon_range_shotgun_7_rare"
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
              "penetrating_damage": 83
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "2850",
              "penetrating_damage": "83"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 3150,
              "penetrating_damage": 91
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "3150",
              "penetrating_damage": "91"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 3400,
              "penetrating_damage": 99
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "3400",
              "penetrating_damage": "99"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 3700,
              "penetrating_damage": 108
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "3700",
              "penetrating_damage": "108"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 3950,
              "penetrating_damage": 116
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "3950",
              "penetrating_damage": "116"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 3951,
              "penetrating_damage": 116
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "3951",
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "full_description": "wls2_weapon_range_shotgun_7_uncommon_description",
        "name": "wls2_weapon_range_shotgun_7_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_shotgun_7_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "shotgun",
          "fire_weapon"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_shotgun_7_uncommon"
      },
      "item_id": "wls2_weapon_range_shotgun_7_uncommon",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": "The inertia system designed by the Swedish inventor became common in modern shotguns",
          "name": "Sjogren Shotgun"
        },
        "full_description_key": "wls2_weapon_range_shotgun_7_uncommon_description",
        "name_key": "wls2_weapon_range_shotgun_7_uncommon_name",
        "zh": {
          "description": null,
          "full_description": "瑞典发明家设计的惯性系统在现代霰弹枪中变得普遍",
          "name": "Sjogren 霰弹枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_7": 6,
            "wls2_resourse_fourfold_nails_7": 3,
            "wls2_resourse_secondary_ingot_7": 6,
            "wls2_resourse_secondary_plank_7": 3
          },
          "learn_exp": 3200,
          "min_level": 0,
          "required_electricity": 16,
          "transaction_id": "transaction_iap_wls_20_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_uncommon_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
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
            "stack_id": "wls2_weapon_range_shotgun_7_uncommon",
            "transaction_id": "transaction_iap_wls_10_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
            "durability_factor": 0.25,
            "level_min": 125,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_shotgun_7_uncommon",
            "transaction_id": "transaction_iap_wls_8_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_shotgun_7_uncommon_icon",
      "stat_curves": {
        "damage": {
          "1": 2050,
          "2": 2250,
          "3": 2450,
          "4": 2650,
          "5": 2850,
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
          "1": 59,
          "2": 64,
          "3": 70,
          "4": 76,
          "5": 82
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
        "shotgun",
        "fire_weapon"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_30"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_60"
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
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_rifle_01"
        ],
        "hit_sounds": [
          "wls_rifle_01"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Shotgun_Sjogren_pbr",
        "prefab_pbr_id": "@Shotgun_Sjogren_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_range_shotgun_7_uncommon",
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
      "image_key": "a89f7aabe9ec9db7d146c2c07986eb3d47a896679e0a46221143c26017e495ee",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "Sjogren 霰弹枪",
        "name_en": "Sjogren Shotgun",
        "description_zh": "瑞典发明家设计的惯性系统在现代霰弹枪中变得普遍",
        "description_en": "The inertia system designed by the Swedish inventor became common in modern shotguns",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_shotgun_7_uncommon sjogren 霰弹枪 sjogren shotgun 瑞典发明家设计的惯性系统在现代霰弹枪中变得普遍 the inertia system designed by the swedish inventor became common in modern shotguns weapon 武器 shotgun weapon weapon_storage quick shotgun fire_weapon wls2_weapon_range_shotgun_7_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 2050,
            "unit": "",
            "display": "2050"
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
              "damage": 2050,
              "penetrating_damage": 59
            },
            "display": {
              "damage": "2050",
              "penetrating_damage": "59"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 2250,
              "penetrating_damage": 64
            },
            "display": {
              "damage": "2250",
              "penetrating_damage": "64"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 2450,
              "penetrating_damage": 70
            },
            "display": {
              "damage": "2450",
              "penetrating_damage": "70"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 2650,
              "penetrating_damage": 76
            },
            "display": {
              "damage": "2650",
              "penetrating_damage": "76"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 2850,
              "penetrating_damage": 82
            },
            "display": {
              "damage": "2850",
              "penetrating_damage": "82"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 2851,
              "penetrating_damage": 82
            },
            "display": {
              "damage": "2851",
              "penetrating_damage": "82"
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
          "伤害：6 级起每级增加 1，最高 3850。",
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
        "description": "inventory_stack_view_wls_short_wooden_bow_description",
        "full_description": "inventory_stack_view_wls_short_wooden_bow_description",
        "name": "inventory_stack_view_wls_short_wooden_bow_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/Wls_ear",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_throwing_bow_1"
      },
      "item_id": "wls2_weapon_range_throwing_bow_1",
      "localization": {
        "description_key": "inventory_stack_view_wls_short_wooden_bow_description",
        "en": {
          "description": "Ancient weapon for hunting fast prey",
          "full_description": "Ancient weapon for hunting fast prey",
          "name": "Wooden bow"
        },
        "full_description_key": "inventory_stack_view_wls_short_wooden_bow_description",
        "name_key": "inventory_stack_view_wls_short_wooden_bow_name",
        "zh": {
          "description": "古老的武器，用来狩猎移动迅速的猎物。",
          "full_description": "古老的武器，用来狩猎移动迅速的猎物。",
          "name": "木弓"
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
          "default": 20
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
      "tier": 1,
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
          "shoot_repeat": false,
          "type": "bow"
        },
        "attack_damage_time": 0.4,
        "attack_ending_time": 1.3,
        "attack_range": 5,
        "damage": 40,
        "durability_price": 1,
        "hit_empty_sounds": [
          "bow_reload_sound",
          "wls2_weapon_range_throwing_bow_1"
        ],
        "hit_sounds": [
          "bow_reload_sound",
          "wls2_weapon_range_throwing_bow_1"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Bow_Short",
        "prefab_pbr_id": "@Bow_Short_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "bow"
        ]
      },
      "weapon_id": "wls2_weapon_range_throwing_bow_1",
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
          "shoot_repeat": false,
          "type": "bow"
        },
        "attack_cycle_time_inferred": 1.7000000000000002,
        "attack_damage_time": 0.4,
        "attack_ending_time": 1.3,
        "attack_range": 5,
        "attacks_per_second_inferred": 0.588235294117647,
        "damage": 40,
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
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "木弓",
        "name_en": "Wooden bow",
        "description_zh": "古老的武器，用来狩猎移动迅速的猎物。",
        "description_en": "Ancient weapon for hunting fast prey",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "未标注",
        "search_text": "wls2_weapon_range_throwing_bow_1 木弓 wooden bow 古老的武器，用来狩猎移动迅速的猎物。 ancient weapon for hunting fast prey weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_range_throwing_bow_1"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 40,
            "unit": "",
            "display": "40"
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
            "value": 20,
            "unit": "",
            "display": "20"
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
        "description": "inventory_stack_view_weapon_range_throwing_bow_2_description",
        "full_description": "inventory_stack_view_weapon_range_throwing_bow_2_description",
        "name": "inventory_stack_view_weapon_range_throwing_bow_2_name",
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
        "weapon_id": "wls2_weapon_range_throwing_bow_2"
      },
      "item_id": "wls2_weapon_range_throwing_bow_2",
      "localization": {
        "description_key": "inventory_stack_view_weapon_range_throwing_bow_2_description",
        "en": {
          "description": "Fine weapon for hunting. Smooth and silent.",
          "full_description": "Fine weapon for hunting. Smooth and silent.",
          "name": "Improved bow"
        },
        "full_description_key": "inventory_stack_view_weapon_range_throwing_bow_2_description",
        "name_key": "inventory_stack_view_weapon_range_throwing_bow_2_name",
        "zh": {
          "description": "一件捕猎利器，稳定好用且安静无声。",
          "full_description": "一件捕猎利器，稳定好用且安静无声。",
          "name": "改良弓箭"
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
          "default": 36
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
          "arrow_speed": 25,
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
        "attack_ending_time": 1.2,
        "attack_range": 5,
        "damage": 70,
        "durability_price": 1,
        "hit_empty_sounds": [
          "bow_reload_sound",
          "wls2_weapon_range_throwing_bow_2"
        ],
        "hit_sounds": [
          "bow_reload_sound",
          "wls2_weapon_range_throwing_bow_2"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Bow_Reinforced",
        "prefab_pbr_id": "@Bow_Reinforced_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "bow"
        ]
      },
      "weapon_id": "wls2_weapon_range_throwing_bow_2",
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
          "shoot_repeat": false,
          "type": "bow"
        },
        "attack_cycle_time_inferred": 1.6,
        "attack_damage_time": 0.4,
        "attack_ending_time": 1.2,
        "attack_range": 5,
        "attacks_per_second_inferred": 0.625,
        "damage": 70,
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
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "改良弓箭",
        "name_en": "Improved bow",
        "description_zh": "一件捕猎利器，稳定好用且安静无声。",
        "description_en": "Fine weapon for hunting. Smooth and silent.",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "未标注",
        "search_text": "wls2_weapon_range_throwing_bow_2 改良弓箭 improved bow 一件捕猎利器，稳定好用且安静无声。 fine weapon for hunting. smooth and silent. weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_range_throwing_bow_2"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 70,
            "unit": "",
            "display": "70"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 0.625,
            "unit": "次/秒",
            "display": "0.62 次/秒"
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
            "value": 5,
            "unit": "",
            "display": "5"
          }
        ],
        "fixed": [
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.6,
            "unit": "秒",
            "display": "1.6 秒"
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
        "description": "inventory_stack_view_wls_medium_composite_bow_description",
        "full_description": "inventory_stack_view_wls_medium_composite_bow_description",
        "name": "inventory_stack_view_wls_medium_composite_bow_name",
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
        "weapon_id": "wls2_weapon_range_throwing_bow_3"
      },
      "item_id": "wls2_weapon_range_throwing_bow_3",
      "localization": {
        "description_key": "inventory_stack_view_wls_medium_composite_bow_description",
        "en": {
          "description": "A bow, artfully made from three kinds of wood, the finest creation for hunting",
          "full_description": "A bow, artfully made from three kinds of wood, the finest creation for hunting",
          "name": "Average composite bow"
        },
        "full_description_key": "inventory_stack_view_wls_medium_composite_bow_description",
        "name_key": "inventory_stack_view_wls_medium_composite_bow_name",
        "zh": {
          "description": "由三种木材巧妙制成的弓，最适合狩猎。",
          "full_description": "由三种木材巧妙制成的弓，最适合狩猎。",
          "name": "普通复合弓"
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
          "default": 63
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
          "arrow_speed": 25,
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
        "attack_ending_time": 1,
        "attack_range": 5,
        "damage": 138,
        "durability_price": 1,
        "hit_empty_sounds": [
          "bow_reload_sound",
          "wls2_weapon_range_throwing_bow_3"
        ],
        "hit_sounds": [
          "bow_reload_sound",
          "wls2_weapon_range_throwing_bow_3"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Bow_Longbow",
        "prefab_pbr_id": "@Bow_Longbow_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "bow"
        ]
      },
      "weapon_id": "wls2_weapon_range_throwing_bow_3",
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
          "shoot_repeat": false,
          "type": "bow"
        },
        "attack_cycle_time_inferred": 1.4,
        "attack_damage_time": 0.4,
        "attack_ending_time": 1,
        "attack_range": 5,
        "attacks_per_second_inferred": 0.7142857142857143,
        "damage": 138,
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
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "普通复合弓",
        "name_en": "Average composite bow",
        "description_zh": "由三种木材巧妙制成的弓，最适合狩猎。",
        "description_en": "A bow, artfully made from three kinds of wood, the finest creation for hunting",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "未标注",
        "search_text": "wls2_weapon_range_throwing_bow_3 普通复合弓 average composite bow 由三种木材巧妙制成的弓，最适合狩猎。 a bow, artfully made from three kinds of wood, the finest creation for hunting weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_range_throwing_bow_3"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 138,
            "unit": "",
            "display": "138"
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
            "value": 63,
            "unit": "",
            "display": "63"
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
        "description": "inventory_stack_view_wls_long_composite_bow_description",
        "full_description": "inventory_stack_view_wls_long_composite_bow_description",
        "name": "inventory_stack_view_wls_long_composite_bow_name",
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
        "weapon_id": "wls2_weapon_range_throwing_bow_4"
      },
      "item_id": "wls2_weapon_range_throwing_bow_4",
      "localization": {
        "description_key": "inventory_stack_view_wls_long_composite_bow_description",
        "en": {
          "description": "Longbow made of two types of wood.",
          "full_description": "Longbow made of two types of wood.",
          "name": "Long hunter's bow"
        },
        "full_description_key": "inventory_stack_view_wls_long_composite_bow_description",
        "name_key": "inventory_stack_view_wls_long_composite_bow_name",
        "zh": {
          "description": "由两种木材制成的长弓。",
          "full_description": "由两种木材制成的长弓。",
          "name": "猎户长弓"
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
          "default": 113
        },
        "penetrating_damage": {
          "default": 7
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
          "arrow_speed": 25,
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
        "damage": 242,
        "durability_price": 1,
        "hit_empty_sounds": [
          "bow_reload_sound",
          "wls2_weapon_range_throwing_bow_4"
        ],
        "hit_sounds": [
          "bow_reload_sound",
          "wls2_weapon_range_throwing_bow_4"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Bow_Composite",
        "prefab_pbr_id": "@Bow_Composite_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "bow"
        ]
      },
      "weapon_id": "wls2_weapon_range_throwing_bow_4",
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
          "shoot_repeat": false,
          "type": "bow"
        },
        "attack_cycle_time_inferred": 1.7000000000000002,
        "attack_damage_time": 0.4,
        "attack_ending_time": 1.3,
        "attack_range": 5,
        "attacks_per_second_inferred": 0.588235294117647,
        "damage": 242,
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
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "猎户长弓",
        "name_en": "Long hunter's bow",
        "description_zh": "由两种木材制成的长弓。",
        "description_en": "Longbow made of two types of wood.",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "未标注",
        "search_text": "wls2_weapon_range_throwing_bow_4 猎户长弓 long hunter's bow 由两种木材制成的长弓。 longbow made of two types of wood. weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_range_throwing_bow_4"
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
            "value": 0.588235294117647,
            "unit": "次/秒",
            "display": "0.59 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 113,
            "unit": "",
            "display": "113"
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
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "value": 7,
            "unit": "",
            "display": "7"
          },
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
        "description": "inventory_stack_view_Weapon_range_throwing_bow_5_description",
        "full_description": "inventory_stack_view_Weapon_range_throwing_bow_5_description",
        "name": "inventory_stack_view_Weapon_range_throwing_bow_5_name",
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
        "weapon_id": "wls2_weapon_range_throwing_bow_5"
      },
      "item_id": "wls2_weapon_range_throwing_bow_5",
      "localization": {
        "description_key": "inventory_stack_view_Weapon_range_throwing_bow_5_description",
        "en": {
          "description": null,
          "full_description": null,
          "name": null
        },
        "full_description_key": "inventory_stack_view_Weapon_range_throwing_bow_5_description",
        "name_key": "inventory_stack_view_Weapon_range_throwing_bow_5_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": null
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
          "default": 150
        },
        "penetrating_damage": {
          "default": 21
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
        "attack_ending_time": 1,
        "attack_range": 5,
        "damage": 413,
        "durability_price": 1,
        "hit_empty_sounds": [
          "sounds_weapos_whoosh",
          "sounds_weapos_whoosh"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Bow_Dummy",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "bow"
        ]
      },
      "weapon_id": "wls2_weapon_range_throwing_bow_5",
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
        "attack_cycle_time_inferred": 1.4,
        "attack_damage_time": 0.4,
        "attack_ending_time": 1,
        "attack_range": 5,
        "attacks_per_second_inferred": 0.7142857142857143,
        "damage": 413,
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
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "wls2_weapon_range_throwing_bow_5",
        "name_en": "wls2_weapon_range_throwing_bow_5",
        "description_zh": "",
        "description_en": "",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "未标注",
        "search_text": "wls2_weapon_range_throwing_bow_5 wls2_weapon_range_throwing_bow_5 wls2_weapon_range_throwing_bow_5 weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_range_throwing_bow_5"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 413,
            "unit": "",
            "display": "413"
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
            "value": 150,
            "unit": "",
            "display": "150"
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
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "value": 21,
            "unit": "",
            "display": "21"
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
        "description": "inventory_stack_view_wls2_weapon_ws_day2021_colt_description",
        "full_description": "inventory_stack_view_wls2_weapon_ws_day2021_colt_description",
        "name": "inventory_stack_view_wls2_weapon_ws_day2021_colt_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_colt",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_ws_day2021_colt"
      },
      "item_id": "wls2_weapon_ws_day2021_colt",
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
                "inventory_stack_id": "wls2_weapon_ws_day2021_colt"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_ws_day2021_colt_recycle"
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
            "stack_id": "wls2_weapon_ws_day2021_colt",
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
            "stack_id": "wls2_weapon_ws_day2021_colt",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_colt",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.1
        },
        "critical_hit_chance": {
          "1": 0.03,
          "2": 0.03,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05
        },
        "damage": {
          "1": 474,
          "2": 474,
          "3": 474,
          "4": 474,
          "5": 474,
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
        "prefab_common_id": "@Westland_day_Revolver",
        "prefab_pbr_id": "@Westland_day_Revolver_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_ws_day2021_colt",
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
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_ws_day2021_colt 周年庆左轮手枪 anniversary revolver 奖励武器。用来射击和炫耀都很合适！ award weapon. both for shooting and showing off! weapon 武器 pistol weapon weapon_storage quick festive wls2_weapon_ws_day2021_colt"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 474,
            "unit": "",
            "display": "474"
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
              "critical_hit_chance": 0.03,
              "damage": 474
            },
            "display": {
              "critical_hit_chance": "3%",
              "damage": "474"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.03,
              "damage": 474
            },
            "display": {
              "critical_hit_chance": "3%",
              "damage": "474"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.03,
              "damage": 474
            },
            "display": {
              "critical_hit_chance": "3%",
              "damage": "474"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.04,
              "damage": 474
            },
            "display": {
              "critical_hit_chance": "4%",
              "damage": "474"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.05,
              "damage": 474
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "474"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.05,
              "damage": 475
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "475"
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
          "伤害：6 级起每级增加 1，最高 1474。",
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
        "description": "inventory_stack_view_wls2_weapon_ws_day2021_confetti_description",
        "full_description": "inventory_stack_view_wls2_weapon_ws_day2021_confetti_description",
        "name": "inventory_stack_view_wls2_weapon_ws_day2021_confetti_name",
        "rarity": "uncommon",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/Wls_ear",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_ws_day2021_confetti"
      },
      "item_id": "wls2_weapon_ws_day2021_confetti",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_ws_day2021_confetti_description",
        "en": {
          "description": "A shotgun that combines deadly precision with bursts of confetti, bringing joy to the battlefield.",
          "full_description": "A shotgun that combines deadly precision with bursts of confetti, bringing joy to the battlefield.",
          "name": null
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_ws_day2021_confetti_description",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2021_confetti_name",
        "zh": {
          "description": "这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。",
          "full_description": "这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。",
          "name": null
        }
      },
      "official_inclusion_status": "special_bound_legacy",
      "rarity": "uncommon",
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
        "damage": {
          "1": 242,
          "2": 264,
          "3": 286,
          "4": 319,
          "5": 341,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 125,
          "2": 125,
          "3": 125,
          "4": 125,
          "5": 125
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
      "subcategory": "other_weapon",
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
        "prefab_common_id": "@Westland_day_Shotgun",
        "prefab_pbr_id": "@Westland_day_Shotgun_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_ws_day2021_confetti",
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
          "pistol"
        ]
      },
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "wls2_weapon_ws_day2021_confetti",
        "name_en": "wls2_weapon_ws_day2021_confetti",
        "description_zh": "这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。",
        "description_en": "A shotgun that combines deadly precision with bursts of confetti, bringing joy to the battlefield.",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_ws_day2021_confetti wls2_weapon_ws_day2021_confetti wls2_weapon_ws_day2021_confetti 这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。 a shotgun that combines deadly precision with bursts of confetti, bringing joy to the battlefield. weapon 武器 other_weapon weapon weapon_storage quick festive wls2_weapon_ws_day2021_confetti"
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
              "damage": 242
            },
            "display": {
              "damage": "242"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 264
            },
            "display": {
              "damage": "264"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 286
            },
            "display": {
              "damage": "286"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 319
            },
            "display": {
              "damage": "319"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 341
            },
            "display": {
              "damage": "341"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 342
            },
            "display": {
              "damage": "342"
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
          "伤害：6 级起每级增加 1，最高 1341。",
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
        "rarity": "rare",
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
        "weapon_id": "wls2_weapon_ws_day2021_shotgun"
      },
      "item_id": "wls2_weapon_ws_day2021_shotgun",
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
      "rarity": "rare",
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
                "inventory_stack_id": "wls2_weapon_ws_day2021_shotgun"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_ws_day2021_shotgun_recycle"
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
            "stack_id": "wls2_weapon_ws_day2021_shotgun",
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
            "stack_id": "wls2_weapon_ws_day2021_shotgun",
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
          "5": 0.04
        },
        "damage": {
          "1": 572,
          "2": 572,
          "3": 572,
          "4": 572,
          "5": 572,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 230,
          "2": 230,
          "3": 230,
          "4": 230,
          "5": 230
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
      "weapon_id": "wls2_weapon_ws_day2021_shotgun",
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
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_ws_day2021_shotgun 周年庆散弹枪 anniversary shotgun 奖励武器。用来射击和炫耀都很合适！ award weapon. both for shooting and showing off! weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_ws_day2021_shotgun"
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
              "critical_hit_chance": 0.03,
              "damage": 572
            },
            "display": {
              "critical_hit_chance": "3%",
              "damage": "572"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.03,
              "damage": 572
            },
            "display": {
              "critical_hit_chance": "3%",
              "damage": "572"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.03,
              "damage": 572
            },
            "display": {
              "critical_hit_chance": "3%",
              "damage": "572"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.04,
              "damage": 572
            },
            "display": {
              "critical_hit_chance": "4%",
              "damage": "572"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.04,
              "damage": 572
            },
            "display": {
              "critical_hit_chance": "4%",
              "damage": "572"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.04,
              "damage": 573
            },
            "display": {
              "critical_hit_chance": "4%",
              "damage": "573"
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
          "伤害：6 级起每级增加 1，最高 1572。",
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
        "description": "inventory_stack_view_wls2_weapon_ws_day2021_confetti_description",
        "full_description": "inventory_stack_view_wls2_weapon_ws_day2021_confetti_description",
        "name": "inventory_stack_view_wls2_weapon_ws_day2023_confetti_name_1",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_confetti",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_ws_day2023_shotgun_uncommon_3"
      },
      "item_id": "wls2_weapon_ws_day2023_shotgun_uncommon_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_ws_day2021_confetti_description",
        "en": {
          "description": "A shotgun that combines deadly precision with bursts of confetti, bringing joy to the battlefield.",
          "full_description": "A shotgun that combines deadly precision with bursts of confetti, bringing joy to the battlefield.",
          "name": "Festive Shotgun 1866"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_ws_day2021_confetti_description",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2023_confetti_name_1",
        "zh": {
          "description": "这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。",
          "full_description": "这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。",
          "name": "节日霰弹枪 1866"
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
                "wls2_resourse_fourfold_gunparts_2": 2,
                "wls2_resourse_fourfold_nails_3": 1,
                "wls2_resourse_secondary_ingot_3": 2,
                "wls2_resourse_secondary_plank_3": 1
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_ws_day2023_shotgun_uncommon_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_ws_day2023_shotgun_uncommon_3_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_confetti",
      "stat_curves": {
        "max_durability": {
          "1": 125,
          "2": 125,
          "3": 125,
          "4": 125,
          "5": 125
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
        "damage": 298,
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
        "prefab_common_id": "@Westland_day_Shotgun",
        "prefab_pbr_id": "@Westland_day_Shotgun_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_ws_day2023_shotgun_uncommon_3",
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
        "damage": 298,
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
      "image_key": "19ec3b11c91c9510b1a9197e8884c5ce5b8a9e2754ed229399c39ef895a55950",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "节日霰弹枪 1866",
        "name_en": "Festive Shotgun 1866",
        "description_zh": "这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。",
        "description_en": "A shotgun that combines deadly precision with bursts of confetti, bringing joy to the battlefield.",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_ws_day2023_shotgun_uncommon_3 节日霰弹枪 1866 festive shotgun 1866 这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。 a shotgun that combines deadly precision with bursts of confetti, bringing joy to the battlefield. weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_ws_day2023_shotgun_uncommon_3"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 298,
            "unit": "",
            "display": "298"
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
        "description": "inventory_stack_view_wls2_weapon_ws_day2021_confetti_description",
        "full_description": "inventory_stack_view_wls2_weapon_ws_day2021_confetti_description",
        "name": "inventory_stack_view_wls2_weapon_ws_day2023_confetti_name_2",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_confetti",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_ws_day2023_shotgun_uncommon_4"
      },
      "item_id": "wls2_weapon_ws_day2023_shotgun_uncommon_4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_ws_day2021_confetti_description",
        "en": {
          "description": "A shotgun that combines deadly precision with bursts of confetti, bringing joy to the battlefield.",
          "full_description": "A shotgun that combines deadly precision with bursts of confetti, bringing joy to the battlefield.",
          "name": "Festive Shotgun 1872"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_ws_day2021_confetti_description",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2023_confetti_name_2",
        "zh": {
          "description": "这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。",
          "full_description": "这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。",
          "name": "节日霰弹枪1872"
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
                "wls2_resourse_fourfold_gunparts_3": 2,
                "wls2_resourse_fourfold_nails_4": 1,
                "wls2_resourse_secondary_ingot_4": 2,
                "wls2_resourse_secondary_plank_4": 1
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_ws_day2023_shotgun_uncommon_4"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_ws_day2023_shotgun_uncommon_4_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_confetti",
      "stat_curves": {
        "max_durability": {
          "1": 150,
          "2": 150,
          "3": 150,
          "4": 150,
          "5": 150
        },
        "penetrating_damage": {
          "default": 5
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
        "damage": 346,
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
        "prefab_common_id": "@Westland_day_Shotgun",
        "prefab_pbr_id": "@Westland_day_Shotgun_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_ws_day2023_shotgun_uncommon_4",
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
        "damage": 346,
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
      "image_key": "19ec3b11c91c9510b1a9197e8884c5ce5b8a9e2754ed229399c39ef895a55950",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "节日霰弹枪1872",
        "name_en": "Festive Shotgun 1872",
        "description_zh": "这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。",
        "description_en": "A shotgun that combines deadly precision with bursts of confetti, bringing joy to the battlefield.",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_ws_day2023_shotgun_uncommon_4 节日霰弹枪1872 festive shotgun 1872 这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。 a shotgun that combines deadly precision with bursts of confetti, bringing joy to the battlefield. weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_ws_day2023_shotgun_uncommon_4"
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
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "value": 5,
            "unit": "",
            "display": "5"
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
        "description": "inventory_stack_view_wls2_weapon_ws_day2021_confetti_description",
        "full_description": "inventory_stack_view_wls2_weapon_ws_day2021_confetti_description",
        "name": "inventory_stack_view_wls2_weapon_ws_day2023_confetti_name_3",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_confetti",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_ws_day2023_shotgun_uncommon_5"
      },
      "item_id": "wls2_weapon_ws_day2023_shotgun_uncommon_5",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_ws_day2021_confetti_description",
        "en": {
          "description": "A shotgun that combines deadly precision with bursts of confetti, bringing joy to the battlefield.",
          "full_description": "A shotgun that combines deadly precision with bursts of confetti, bringing joy to the battlefield.",
          "name": "Festive Shotgun 1889"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_ws_day2021_confetti_description",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2023_confetti_name_3",
        "zh": {
          "description": "这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。",
          "full_description": "这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。",
          "name": "节日霰弹枪 1889"
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
                "wls2_resourse_fourfold_gunparts_4": 2,
                "wls2_resourse_fourfold_nails_5": 1,
                "wls2_resourse_secondary_ingot_5": 2,
                "wls2_resourse_secondary_plank_5": 1
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_ws_day2023_shotgun_uncommon_5"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_ws_day2023_shotgun_uncommon_5_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_confetti",
      "stat_curves": {
        "max_durability": {
          "1": 175,
          "2": 175,
          "3": 175,
          "4": 175,
          "5": 175
        },
        "penetrating_damage": {
          "default": 14
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
        "attack_ending_time": 1.25,
        "attack_range": 3.5,
        "damage": 553,
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
        "prefab_common_id": "@Westland_day_Shotgun",
        "prefab_pbr_id": "@Westland_day_Shotgun_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_ws_day2023_shotgun_uncommon_5",
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
        "damage": 553,
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
      "image_key": "19ec3b11c91c9510b1a9197e8884c5ce5b8a9e2754ed229399c39ef895a55950",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "节日霰弹枪 1889",
        "name_en": "Festive Shotgun 1889",
        "description_zh": "这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。",
        "description_en": "A shotgun that combines deadly precision with bursts of confetti, bringing joy to the battlefield.",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_ws_day2023_shotgun_uncommon_5 节日霰弹枪 1889 festive shotgun 1889 这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。 a shotgun that combines deadly precision with bursts of confetti, bringing joy to the battlefield. weapon 武器 shotgun weapon weapon_storage quick festive wls2_weapon_ws_day2023_shotgun_uncommon_5"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 553,
            "unit": "",
            "display": "553"
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
            "value": 175,
            "unit": "",
            "display": "175"
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
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "value": 14,
            "unit": "",
            "display": "14"
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
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_ws_day2024_colt_2"
      },
      "item_id": "wls2_weapon_ws_day2024_colt_2",
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
                "wls2_resourse_fourfold_gunparts_2": 4,
                "wls2_resourse_fourfold_nails_2": 8,
                "wls2_resourse_secondary_ingot_2": 8
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_ws_day2024_colt_2"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_ws_day2024_colt_2_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_2_a",
            "durability_factor": 0.5,
            "level_max": 50,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_ws_day2024_colt_2",
            "transaction_id": "transaction_iap_wls_2_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_1_a",
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
            "stack_id": "wls2_weapon_ws_day2024_colt_2",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_colt",
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
          "1": 219,
          "2": 239,
          "3": 259,
          "4": 279,
          "5": 299,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 145,
          "2": 145,
          "3": 145,
          "4": 145,
          "5": 145
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
      "subcategory": "pistol",
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
        "prefab_common_id": "@Westland_day_Revolver",
        "prefab_pbr_id": "@Westland_day_Revolver_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_ws_day2024_colt_2",
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
        "search_text": "wls2_weapon_ws_day2024_colt_2 周年庆左轮手枪 anniversary revolver 奖励武器。用来射击和炫耀都很合适！ award weapon. both for shooting and showing off! weapon 武器 pistol weapon weapon_storage quick festive wls2_weapon_ws_day2024_colt_2"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 219,
            "unit": "",
            "display": "219"
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
            "value": 145,
            "unit": "",
            "display": "145"
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
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 219
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "219"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 239
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "239"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 259
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "259"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.04,
              "critical_modifier": 0.04,
              "damage": 279
            },
            "display": {
              "critical_hit_chance": "4%",
              "critical_modifier": "4%",
              "damage": "279"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.05,
              "critical_modifier": 0.05,
              "damage": 299
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "5%",
              "damage": "299"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.07,
              "critical_modifier": 0.07,
              "damage": 300
            },
            "display": {
              "critical_hit_chance": "7%",
              "critical_modifier": "7%",
              "damage": "300"
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
          "伤害：6 级起每级增加 1，最高 1299。",
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
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_ws_day2024_colt_3"
      },
      "item_id": "wls2_weapon_ws_day2024_colt_3",
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
                "wls2_resourse_fourfold_gunparts_3": 4,
                "wls2_resourse_fourfold_nails_3": 8,
                "wls2_resourse_secondary_ingot_3": 8
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_ws_day2024_colt_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_ws_day2024_colt_3_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.5,
            "level_max": 70,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_ws_day2024_colt_3",
            "transaction_id": "transaction_iap_wls_3_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_2_a",
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
            "stack_id": "wls2_weapon_ws_day2024_colt_3",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_colt",
      "stat_curves": {
        "bandit_damage_modifier": {
          "default": 0.1
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
          "1": 377,
          "2": 415,
          "3": 453,
          "4": 490,
          "5": 528,
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
      "weapon_id": "wls2_weapon_ws_day2024_colt_3",
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
        "search_text": "wls2_weapon_ws_day2024_colt_3 周年庆左轮手枪 anniversary revolver 奖励武器。用来射击和炫耀都很合适！ award weapon. both for shooting and showing off! weapon 武器 pistol weapon weapon_storage quick festive wls2_weapon_ws_day2024_colt_3"
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
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 377
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "377"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 415
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "415"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.03,
              "critical_modifier": 0.03,
              "damage": 453
            },
            "display": {
              "critical_hit_chance": "3%",
              "critical_modifier": "3%",
              "damage": "453"
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
              "damage": 528
            },
            "display": {
              "critical_hit_chance": "5%",
              "critical_modifier": "5%",
              "damage": "528"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.07,
              "critical_modifier": 0.07,
              "damage": 529
            },
            "display": {
              "critical_hit_chance": "7%",
              "critical_modifier": "7%",
              "damage": "529"
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
          "伤害：6 级起每级增加 1，最高 1528。",
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    }
  ]
};
