/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-equipment-10"] = {
  "section": "equipment",
  "records": [
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
        "description": "inventory_stack_view_wls_improved_metal_tomahawk_description",
        "full_description": "inventory_stack_view_wls_improved_metal_tomahawk_description",
        "name": "inventory_stack_view_wls_improved_metal_tomahawk_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary01/wls_improved_metal_tomahawk",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_middle_3"
      },
      "item_id": "wls2_weapon_melee_middle_3",
      "localization": {
        "description_key": "inventory_stack_view_wls_improved_metal_tomahawk_description",
        "en": {
          "description": "Only the best Indigenous warriors carry such tomahawks",
          "full_description": "Only the best Indigenous warriors carry such tomahawks",
          "name": "Warrior tomahawk"
        },
        "full_description_key": "inventory_stack_view_wls_improved_metal_tomahawk_description",
        "name_key": "inventory_stack_view_wls_improved_metal_tomahawk_name",
        "zh": {
          "description": "只有最强的印第安战士才拥有这样的战斧。",
          "full_description": "只有最强的印第安战士才拥有这样的战斧。",
          "name": "战士战斧"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_plank_3": 2
          },
          "result": {
            "inventory_stack_id": "wls2_weapon_melee_middle_3"
          },
          "type": "recycle"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_melee_middle_3"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_50coins_dynamic_south_trader_offer_middle_3"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_plank_3": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_melee_middle_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_melee_middle_3"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary01/wls_improved_metal_tomahawk",
      "stat_curves": {
        "max_durability": {
          "default": 86
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
      "tier": 3,
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
        "damage": 209,
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
        "prefab_common_id": "@Tomohawk_Metal_Upgrade",
        "prefab_pbr_id": "@Tomohawk_Metal_Upgrade_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_melee_middle_3",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.1,
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.4,
        "attacks_per_second_inferred": 0.9090909090909091,
        "damage": 209,
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
      "image_key": "68c12041a71e1882f376283573e544ad42c9670a98785e7d9bf04540288c5798",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "战士战斧",
        "name_en": "Warrior tomahawk",
        "description_zh": "只有最强的印第安战士才拥有这样的战斧。",
        "description_en": "Only the best Indigenous warriors carry such tomahawks",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_middle_3 战士战斧 warrior tomahawk 只有最强的印第安战士才拥有这样的战斧。 only the best indigenous warriors carry such tomahawks weapon 武器 event_melee weapon weapon_storage quick wls2_weapon_melee_middle_3"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 209,
            "unit": "",
            "display": "209"
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
            "value": 86,
            "unit": "",
            "display": "86"
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
        "description": "inventory_stack_view_wls_saber_description",
        "full_description": "inventory_stack_view_wls_saber_description",
        "name": "inventory_stack_view_wls_saber_name",
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
        "weapon_id": "wls2_weapon_melee_middle_4"
      },
      "item_id": "wls2_weapon_melee_middle_4",
      "localization": {
        "description_key": "inventory_stack_view_wls_saber_description",
        "en": {
          "description": "A favorite weapon of cavalry.",
          "full_description": "A favorite weapon of cavalry.",
          "name": "Saber"
        },
        "full_description_key": "inventory_stack_view_wls_saber_description",
        "name_key": "inventory_stack_view_wls_saber_name",
        "zh": {
          "description": "骑兵最钟爱的武器。",
          "full_description": "骑兵最钟爱的武器。",
          "name": "军刀"
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
          "default": 122
        },
        "penetrating_damage": {
          "default": 10
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
        "attack_ending_time": 0.6,
        "attack_range": 1.3,
        "damage": 330,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_saber_empty_hit"
        ],
        "hit_sounds": [
          "wls2_weapon_melee_saber_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Saber",
        "prefab_pbr_id": "@Saber_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm"
        ]
      },
      "weapon_id": "wls2_weapon_melee_middle_4",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.1,
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.3,
        "attacks_per_second_inferred": 0.9090909090909091,
        "damage": 330,
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
        "name_zh": "军刀",
        "name_en": "Saber",
        "description_zh": "骑兵最钟爱的武器。",
        "description_en": "A favorite weapon of cavalry.",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "未标注",
        "search_text": "wls2_weapon_melee_middle_4 军刀 saber 骑兵最钟爱的武器。 a favorite weapon of cavalry. weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_melee_middle_4"
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
            "value": 122,
            "unit": "",
            "display": "122"
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
            "value": 10,
            "unit": "",
            "display": "10"
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
        "description": "inventory_stack_view_wls_confiderate_saber_description",
        "full_description": "inventory_stack_view_wls_confiderate_saber_description",
        "name": "inventory_stack_view_wls_confiderate_saber_name",
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
        "weapon_id": "wls2_weapon_melee_middle_5"
      },
      "item_id": "wls2_weapon_melee_middle_5",
      "localization": {
        "description_key": "inventory_stack_view_wls_confiderate_saber_description",
        "en": {
          "description": "A product of the best blacksmiths. Delivers death to the enemy and can spectacularly cut the wings of a fly",
          "full_description": "A product of the best blacksmiths. Delivers death to the enemy and can spectacularly cut the wings of a fly",
          "name": "Confederate saber"
        },
        "full_description_key": "inventory_stack_view_wls_confiderate_saber_description",
        "name_key": "inventory_stack_view_wls_confiderate_saber_name",
        "zh": {
          "description": "出自最卓越的枪匠之手，能够给敌人带去死亡。",
          "full_description": "出自最卓越的枪匠之手，能够给敌人带去死亡。",
          "name": "同盟军刀"
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
          "default": 182
        },
        "penetrating_damage": {
          "default": 30
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
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "damage": 594,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_saber_empty_hit"
        ],
        "hit_sounds": [
          "wls2_weapon_melee_saber_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Saber_Confederation",
        "prefab_pbr_id": "@Saber_Confederation_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm"
        ]
      },
      "weapon_id": "wls2_weapon_melee_middle_5",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.1,
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 0.9090909090909091,
        "damage": 594,
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
        "name_zh": "同盟军刀",
        "name_en": "Confederate saber",
        "description_zh": "出自最卓越的枪匠之手，能够给敌人带去死亡。",
        "description_en": "A product of the best blacksmiths. Delivers death to the enemy and can spectacularly cut the wings of a fly",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "未标注",
        "search_text": "wls2_weapon_melee_middle_5 同盟军刀 confederate saber 出自最卓越的枪匠之手，能够给敌人带去死亡。 a product of the best blacksmiths. delivers death to the enemy and can spectacularly cut the wings of a fly weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_melee_middle_5"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 594,
            "unit": "",
            "display": "594"
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
            "value": 182,
            "unit": "",
            "display": "182"
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
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "value": 30,
            "unit": "",
            "display": "30"
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
        "description": "inventory_stack_view_wls2_weapon_middle_1_description",
        "full_description": "inventory_stack_view_wls2_weapon_middle_1_description",
        "name": "inventory_stack_view_wls2_weapon_middle_1_name",
        "rarity": "common",
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
        "weapon_id": "wls2_weapon_melee_middle_spear_1"
      },
      "item_id": "wls2_weapon_melee_middle_spear_1",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_middle_1_description",
        "en": {
          "description": "A simple pine spear with a copper tip",
          "full_description": "A simple pine spear with a copper tip",
          "name": "Copper spear"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_middle_1_description",
        "name_key": "inventory_stack_view_wls2_weapon_middle_1_name",
        "zh": {
          "description": "使用松树枝和铜尖制成的简易长矛",
          "full_description": "使用松树枝和铜尖制成的简易长矛",
          "name": "铜矛"
        }
      },
      "official_inclusion_status": "special_bound_legacy",
      "rarity": "common",
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
        "attack_range": 1.4,
        "damage": 55,
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
        "prefab_common_id": "@Spear_Copper",
        "prefab_pbr_id": "@Spear_Copper_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm"
        ]
      },
      "weapon_id": "wls2_weapon_melee_middle_spear_1",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 1.4,
        "attacks_per_second_inferred": 0.8333333333333334,
        "damage": 55,
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
        "name_zh": "铜矛",
        "name_en": "Copper spear",
        "description_zh": "使用松树枝和铜尖制成的简易长矛",
        "description_en": "A simple pine spear with a copper tip",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_middle_spear_1 铜矛 copper spear 使用松树枝和铜尖制成的简易长矛 a simple pine spear with a copper tip weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_melee_middle_spear_1"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 55,
            "unit": "",
            "display": "55"
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
            "value": 36,
            "unit": "",
            "display": "36"
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
        "description": "inventory_stack_view_wls2_weapon_middle_2_description",
        "full_description": "inventory_stack_view_wls2_weapon_middle_2_description",
        "name": "inventory_stack_view_wls2_weapon_middle_2_name",
        "rarity": "common",
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
        "weapon_id": "wls2_weapon_melee_middle_spear_2"
      },
      "item_id": "wls2_weapon_melee_middle_spear_2",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_middle_2_description",
        "en": {
          "description": "A spear with a strong oak shaft and a bronze tip",
          "full_description": "A spear with a strong oak shaft and a bronze tip",
          "name": "Bronze spear"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_middle_2_description",
        "name_key": "inventory_stack_view_wls2_weapon_middle_2_name",
        "zh": {
          "description": "使用坚固的橡树枝和青铜矛尖制成的长矛",
          "full_description": "使用坚固的橡树枝和青铜矛尖制成的长矛",
          "name": "青铜矛"
        }
      },
      "official_inclusion_status": "special_bound_legacy",
      "rarity": "common",
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
          "default": 54
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 1.4,
        "damage": 100,
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
        "prefab_common_id": "@Spear_Bronze",
        "prefab_pbr_id": "@Spear_Bronze_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm"
        ]
      },
      "weapon_id": "wls2_weapon_melee_middle_spear_2",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 1.4,
        "attacks_per_second_inferred": 0.8333333333333334,
        "damage": 100,
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
        "name_zh": "青铜矛",
        "name_en": "Bronze spear",
        "description_zh": "使用坚固的橡树枝和青铜矛尖制成的长矛",
        "description_en": "A spear with a strong oak shaft and a bronze tip",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_middle_spear_2 青铜矛 bronze spear 使用坚固的橡树枝和青铜矛尖制成的长矛 a spear with a strong oak shaft and a bronze tip weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_melee_middle_spear_2"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 100,
            "unit": "",
            "display": "100"
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
            "value": 54,
            "unit": "",
            "display": "54"
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
        "description": "inventory_stack_view_wls_metal_spear_description",
        "full_description": "inventory_stack_view_wls_metal_spear_description",
        "name": "inventory_stack_view_wls_metal_spear_name",
        "rarity": "common",
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
        "weapon_id": "wls2_weapon_melee_middle_spear_3"
      },
      "item_id": "wls2_weapon_melee_middle_spear_3",
      "localization": {
        "description_key": "inventory_stack_view_wls_metal_spear_description",
        "en": {
          "description": "A work of art",
          "full_description": "A work of art",
          "name": "Iron spear"
        },
        "full_description_key": "inventory_stack_view_wls_metal_spear_description",
        "name_key": "inventory_stack_view_wls_metal_spear_name",
        "zh": {
          "description": "高手使用",
          "full_description": "高手使用",
          "name": "铁矛"
        }
      },
      "official_inclusion_status": "special_bound_legacy",
      "rarity": "common",
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
          "default": 81
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
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.7,
        "attack_range": 1.4,
        "damage": 187,
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
        "prefab_common_id": "@Spear_Metal",
        "prefab_pbr_id": "@Spear_Metal_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm"
        ]
      },
      "weapon_id": "wls2_weapon_melee_middle_spear_3",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.7,
        "attack_range": 1.4,
        "attacks_per_second_inferred": 0.8333333333333334,
        "damage": 187,
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
        "name_zh": "铁矛",
        "name_en": "Iron spear",
        "description_zh": "高手使用",
        "description_en": "A work of art",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_middle_spear_3 铁矛 iron spear 高手使用 a work of art weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_melee_middle_spear_3"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 187,
            "unit": "",
            "display": "187"
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
            "value": 81,
            "unit": "",
            "display": "81"
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
        "description": "inventory_stack_view_wls2_weapon_melee_sabre_4_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_sabre_4_common_description",
        "name": "inventory_stack_view_wls2_weapon_melee_sabre_4_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_spear_saber",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls_saber",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "sabre"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_sabre_4_common"
      },
      "item_id": "wls2_weapon_melee_sabre_4_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_sabre_4_common_description",
        "en": {
          "description": "A favorite weapon of the cavalry",
          "full_description": "A favorite weapon of the cavalry",
          "name": "Saber"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_sabre_4_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_sabre_4_common_name",
        "zh": {
          "description": "骑兵最钟爱的武器",
          "full_description": "骑兵最钟爱的武器",
          "name": "军刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 2,
            "wls2_resourse_secondary_ingot_4": 2,
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
                "inventory_stack_id": "wls2_weapon_melee_sabre_4_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_melee_7"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls_saber",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.2
        },
        "damage": {
          "1": 278,
          "2": 307,
          "3": 334,
          "4": 362,
          "5": 391,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 140,
          "2": 140,
          "3": 140,
          "4": 140,
          "5": 140
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
      "subcategory": "spear_saber",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "sabre"
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
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.7,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_saber_empty_hit"
        ],
        "hit_sounds": [
          "wls2_weapon_melee_saber_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Saber",
        "prefab_pbr_id": "@Saber_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_melee_sabre_4_common",
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
      "image_key": "d2b1cb0f6f21c31ce6945aadab6485aa3f4465ce9eb5f102af784e919328a887",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "军刀",
        "name_en": "Saber",
        "description_zh": "骑兵最钟爱的武器",
        "description_en": "A favorite weapon of the cavalry",
        "category_zh": "武器",
        "subcategory": "spear_saber",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_sabre_4_common 军刀 saber 骑兵最钟爱的武器 a favorite weapon of the cavalry weapon 武器 spear_saber weapon weapon_storage quick sabre wls2_weapon_melee_sabre_4_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 278,
            "unit": "",
            "display": "278"
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
            "value": 140,
            "unit": "",
            "display": "140"
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
              "damage": 278,
              "penetrating_damage": 8
            },
            "display": {
              "damage": "278",
              "penetrating_damage": "8"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 307,
              "penetrating_damage": 9
            },
            "display": {
              "damage": "307",
              "penetrating_damage": "9"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 334,
              "penetrating_damage": 10
            },
            "display": {
              "damage": "334",
              "penetrating_damage": "10"
            }
          },
          {
            "level": 4,
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
            "level": 5,
            "values": {
              "damage": 391,
              "penetrating_damage": 12
            },
            "display": {
              "damage": "391",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 392,
              "penetrating_damage": 12
            },
            "display": {
              "damage": "392",
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
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "unit": ""
          }
        ],
        "notes": [
          "伤害：6 级起每级增加 1，最高 1391。",
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
        "description": "wls2_weapon_melee_sabre_4_epic_description",
        "full_description": "wls2_weapon_melee_sabre_4_epic_description",
        "name": "wls2_weapon_melee_sabre_4_epic_name",
        "name_with_wrapping": "wls2_weapon_melee_sabre_4_epic_name_with_wrapping",
        "rarity": "epic",
        "sorting_group_id": "weapon_melee_spear_saber",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_melee_sabre_4_epic_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "sabre"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_sabre_4_epic"
      },
      "item_id": "wls2_weapon_melee_sabre_4_epic",
      "localization": {
        "description_key": "wls2_weapon_melee_sabre_4_epic_description",
        "en": {
          "description": "They say every lawman in the northeast owns one. There can't be many bandits left out there",
          "full_description": "They say every lawman in the northeast owns one. There can't be many bandits left out there",
          "name": "Police saber"
        },
        "full_description_key": "wls2_weapon_melee_sabre_4_epic_description",
        "name_key": "wls2_weapon_melee_sabre_4_epic_name",
        "zh": {
          "description": "据说东北部每个执法人员人手一把。外面的强盗全都闻风而散",
          "full_description": "据说东北部每个执法人员人手一把。外面的强盗全都闻风而散",
          "name": "警用军刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 2,
            "wls2_resourse_primary_coal_3": 4,
            "wls2_resourse_secondary_ingot_4": 4,
            "wls2_resourse_secondary_leather_4": 6
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
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_melee_sabre_4_epic",
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
            "stack_id": "wls2_weapon_melee_sabre_4_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_melee_sabre_4_epic_icon",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.2
        },
        "damage": {
          "1": 697,
          "2": 767,
          "3": 836,
          "4": 906,
          "5": 976,
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
          "1": 136,
          "2": 136,
          "3": 136,
          "4": 136,
          "5": 136
        },
        "penetrating_damage": {
          "1": 21,
          "2": 23,
          "3": 25,
          "4": 27,
          "5": 29
        },
        "slow_modifier": {
          "1": 0.4,
          "2": 0.4,
          "3": 0.4,
          "4": 0.4,
          "5": 0.4
        },
        "slow_time": {
          "1": 0.5,
          "2": 0.6,
          "3": 0.7,
          "4": 0.8,
          "5": 1
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
      "subcategory": "spear_saber",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "sabre"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_10"
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
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.7,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_saber_empty_hit"
        ],
        "hit_sounds": [
          "wls2_weapon_melee_saber_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Saber_police",
        "prefab_pbr_id": "@Saber_police_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_melee_sabre_4_epic",
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
      "image_key": "2f9abbe30ed3b56443dfc55ee42529d3dc1aa16d77d60994c42a1bcfb0ae6ce2",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "警用军刀",
        "name_en": "Police saber",
        "description_zh": "据说东北部每个执法人员人手一把。外面的强盗全都闻风而散",
        "description_en": "They say every lawman in the northeast owns one. There can't be many bandits left out there",
        "category_zh": "武器",
        "subcategory": "spear_saber",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_melee_sabre_4_epic 警用军刀 police saber 据说东北部每个执法人员人手一把。外面的强盗全都闻风而散 they say every lawman in the northeast owns one. there can't be many bandits left out there weapon 武器 spear_saber weapon weapon_storage quick sabre wls2_weapon_melee_sabre_4_epic"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 697,
            "unit": "",
            "display": "697"
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
            "value": 136,
            "unit": "",
            "display": "136"
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
            "key": "dot_time",
            "label": "持续伤害时间",
            "value": 4,
            "unit": "秒",
            "display": "4 秒"
          },
          {
            "key": "slow_modifier",
            "label": "目标减速",
            "value": 0.4,
            "unit": "%",
            "display": "40%"
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
              "damage": 697,
              "dot_amount": 100,
              "penetrating_damage": 21,
              "slow_time": 0.5
            },
            "display": {
              "damage": "697",
              "dot_amount": "100",
              "penetrating_damage": "21",
              "slow_time": "0.5 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 767,
              "dot_amount": 150,
              "penetrating_damage": 23,
              "slow_time": 0.6
            },
            "display": {
              "damage": "767",
              "dot_amount": "150",
              "penetrating_damage": "23",
              "slow_time": "0.6 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 836,
              "dot_amount": 200,
              "penetrating_damage": 25,
              "slow_time": 0.7
            },
            "display": {
              "damage": "836",
              "dot_amount": "200",
              "penetrating_damage": "25",
              "slow_time": "0.7 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 906,
              "dot_amount": 250,
              "penetrating_damage": 27,
              "slow_time": 0.8
            },
            "display": {
              "damage": "906",
              "dot_amount": "250",
              "penetrating_damage": "27",
              "slow_time": "0.8 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 976,
              "dot_amount": 300,
              "penetrating_damage": 29,
              "slow_time": 1
            },
            "display": {
              "damage": "976",
              "dot_amount": "300",
              "penetrating_damage": "29",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 977,
              "dot_amount": 300,
              "penetrating_damage": 29,
              "slow_time": 1
            },
            "display": {
              "damage": "977",
              "dot_amount": "300",
              "penetrating_damage": "29",
              "slow_time": "1 秒"
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
          "伤害：6 级起每级增加 1，最高 1976。",
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
        "description": "inventory_stack_view_wls2_weapon_melee_sabre_4_rare_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_sabre_4_rare_description",
        "name": "inventory_stack_view_wls2_weapon_melee_sabre_4_rare_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_melee_sabre_4_rare_name_with_wrapping",
        "rarity": "rare",
        "sorting_group_id": "weapon_melee_spear_saber",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_sabre_4_rare_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "sabre"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_sabre_4_rare"
      },
      "item_id": "wls2_weapon_melee_sabre_4_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_sabre_4_rare_description",
        "en": {
          "description": "Ornately engraved with gilding",
          "full_description": "Ornately engraved with gilding",
          "name": "English saber"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_sabre_4_rare_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_sabre_4_rare_name",
        "zh": {
          "description": "浮夸地镀了一层金",
          "full_description": "浮夸地镀了一层金",
          "name": "英式军刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 4,
            "wls2_resourse_secondary_ingot_4": 4,
            "wls2_resourse_secondary_leather_4": 6
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
                "inventory_stack_id": "wls2_weapon_melee_sabre_4_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_melee_9"
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
            "stack_id": "wls2_weapon_melee_sabre_4_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_sabre_4_rare_icon",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.2
        },
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.1,
          "3": 0.15,
          "4": 0.2,
          "5": 0.25
        },
        "damage": {
          "1": 507,
          "2": 558,
          "3": 609,
          "4": 660,
          "5": 711,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 140,
          "2": 140,
          "3": 140,
          "4": 140,
          "5": 140
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
        "sabre"
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
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.7,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_saber_empty_hit"
        ],
        "hit_sounds": [
          "wls2_weapon_melee_saber_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Saber_English",
        "prefab_pbr_id": "@Saber_English_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_melee_sabre_4_rare",
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
      "image_key": "232da52695eb16e9e8d6c2101cdb91e1a53871bb58a8c093cf93f5f95ba99143",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "英式军刀",
        "name_en": "English saber",
        "description_zh": "浮夸地镀了一层金",
        "description_en": "Ornately engraved with gilding",
        "category_zh": "武器",
        "subcategory": "spear_saber",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_melee_sabre_4_rare 英式军刀 english saber 浮夸地镀了一层金 ornately engraved with gilding weapon 武器 spear_saber weapon weapon_storage quick sabre wls2_weapon_melee_sabre_4_rare"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 507,
            "unit": "",
            "display": "507"
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
            "value": 140,
            "unit": "",
            "display": "140"
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
              "critical_hit_chance": 0.05,
              "damage": 507,
              "penetrating_damage": 15
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "507",
              "penetrating_damage": "15"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.1,
              "damage": 558,
              "penetrating_damage": 17
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "558",
              "penetrating_damage": "17"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 609,
              "penetrating_damage": 18
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "609",
              "penetrating_damage": "18"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 660,
              "penetrating_damage": 20
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "660",
              "penetrating_damage": "20"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 711,
              "penetrating_damage": 21
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "711",
              "penetrating_damage": "21"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 712,
              "penetrating_damage": 21
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "712",
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
          "伤害：6 级起每级增加 1，最高 1711。",
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
        "description": "inventory_stack_view_wls2_weapon_melee_sabre_4_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_sabre_4_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_melee_sabre_4_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_melee_sabre_4_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_melee_spear_saber",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_sabre_4_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "sabre"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_sabre_4_uncommon"
      },
      "item_id": "wls2_weapon_melee_sabre_4_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_sabre_4_uncommon_description",
        "en": {
          "description": "Fighting with a saber demands speed and agility",
          "full_description": "Fighting with a saber demands speed and agility",
          "name": "Cavalry saber"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_sabre_4_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_sabre_4_uncommon_name",
        "zh": {
          "description": "用这种军刀作战需要速度与敏捷",
          "full_description": "用这种军刀作战需要速度与敏捷",
          "name": "骑兵军刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 3,
            "wls2_resourse_secondary_ingot_4": 3,
            "wls2_resourse_secondary_leather_4": 5
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
                "inventory_stack_id": "wls2_weapon_melee_sabre_4_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_melee_8"
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
            "stack_id": "wls2_weapon_melee_sabre_4_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_sabre_4_uncommon_icon",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.2
        },
        "damage": {
          "1": 359,
          "2": 395,
          "3": 431,
          "4": 466,
          "5": 503,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 140,
          "2": 140,
          "3": 140,
          "4": 140,
          "5": 140
        },
        "penetrating_damage": {
          "1": 11,
          "2": 12,
          "3": 13,
          "4": 14,
          "5": 15
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
      "subcategory": "spear_saber",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "sabre"
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
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.7,
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
        "prefab_common_id": "@Sabre_Cavalier",
        "prefab_pbr_id": "@Sabre_Cavalier_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_melee_sabre_4_uncommon",
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
      "image_key": "1b2ee4eea9df3d7bb890a1e53db48b10447446ca4aa22a86714f58bf2a347530",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "骑兵军刀",
        "name_en": "Cavalry saber",
        "description_zh": "用这种军刀作战需要速度与敏捷",
        "description_en": "Fighting with a saber demands speed and agility",
        "category_zh": "武器",
        "subcategory": "spear_saber",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_melee_sabre_4_uncommon 骑兵军刀 cavalry saber 用这种军刀作战需要速度与敏捷 fighting with a saber demands speed and agility weapon 武器 spear_saber weapon weapon_storage quick sabre wls2_weapon_melee_sabre_4_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 359,
            "unit": "",
            "display": "359"
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
            "value": 140,
            "unit": "",
            "display": "140"
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
              "damage": 359,
              "penetrating_damage": 11
            },
            "display": {
              "damage": "359",
              "penetrating_damage": "11"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 395,
              "penetrating_damage": 12
            },
            "display": {
              "damage": "395",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 431,
              "penetrating_damage": 13
            },
            "display": {
              "damage": "431",
              "penetrating_damage": "13"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 466,
              "penetrating_damage": 14
            },
            "display": {
              "damage": "466",
              "penetrating_damage": "14"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 503,
              "penetrating_damage": 15
            },
            "display": {
              "damage": "503",
              "penetrating_damage": "15"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 504,
              "penetrating_damage": 15
            },
            "display": {
              "damage": "504",
              "penetrating_damage": "15"
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
          "伤害：6 级起每级增加 1，最高 1503。",
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
        "description": "inventory_stack_view_wls2_weapon_melee_sabre_5_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_sabre_5_common_description",
        "name": "inventory_stack_view_wls2_weapon_melee_sabre_5_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_melee_sabre_5_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_spear_saber",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls_confiderate_saber",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "sabre"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_sabre_5_common"
      },
      "item_id": "wls2_weapon_melee_sabre_5_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_sabre_5_common_description",
        "en": {
          "description": "Spectacularly cuts the wings of a fly",
          "full_description": "Spectacularly cuts the wings of a fly",
          "name": "Confederate saber"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_sabre_5_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_sabre_5_common_name",
        "zh": {
          "description": "能够斩断苍蝇身上的毛",
          "full_description": "能够斩断苍蝇身上的毛",
          "name": "同盟军刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 4,
            "wls2_resourse_secondary_ingot_5": 2,
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
                "inventory_stack_id": "wls2_weapon_melee_sabre_5_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_melee_10"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls_confiderate_saber",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.3
        },
        "damage": {
          "1": 416,
          "2": 458,
          "3": 499,
          "4": 541,
          "5": 583,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 185,
          "2": 185,
          "3": 185,
          "4": 185,
          "5": 185
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
      "subcategory": "spear_saber",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "sabre"
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
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.7,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_saber_empty_hit"
        ],
        "hit_sounds": [
          "wls2_weapon_melee_saber_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Saber_Confederation",
        "prefab_pbr_id": "@Saber_Confederation_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_melee_sabre_5_common",
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
      "image_key": "65cae350a1044c67a7b6aca8ba8041053c9c62e6276136edfe3152e70da9ea1f",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "同盟军刀",
        "name_en": "Confederate saber",
        "description_zh": "能够斩断苍蝇身上的毛",
        "description_en": "Spectacularly cuts the wings of a fly",
        "category_zh": "武器",
        "subcategory": "spear_saber",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_sabre_5_common 同盟军刀 confederate saber 能够斩断苍蝇身上的毛 spectacularly cuts the wings of a fly weapon 武器 spear_saber weapon weapon_storage quick sabre wls2_weapon_melee_sabre_5_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 416,
            "unit": "",
            "display": "416"
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
            "value": 185,
            "unit": "",
            "display": "185"
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
            "value": 0.3,
            "unit": "%",
            "display": "30%"
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
              "damage": 416,
              "penetrating_damage": 21
            },
            "display": {
              "damage": "416",
              "penetrating_damage": "21"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 458,
              "penetrating_damage": 23
            },
            "display": {
              "damage": "458",
              "penetrating_damage": "23"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 499,
              "penetrating_damage": 25
            },
            "display": {
              "damage": "499",
              "penetrating_damage": "25"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 541,
              "penetrating_damage": 27
            },
            "display": {
              "damage": "541",
              "penetrating_damage": "27"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 583,
              "penetrating_damage": 29
            },
            "display": {
              "damage": "583",
              "penetrating_damage": "29"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 584,
              "penetrating_damage": 29
            },
            "display": {
              "damage": "584",
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
          "伤害：6 级起每级增加 1，最高 1583。",
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
        "description": "wls2_weapon_melee_sabre_5_epic_description",
        "full_description": "wls2_weapon_melee_sabre_5_epic_description",
        "name": "wls2_weapon_melee_sabre_5_epic_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_melee_spear_saber",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_melee_sabre_5_epic_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "sabre"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_sabre_5_epic"
      },
      "item_id": "wls2_weapon_melee_sabre_5_epic",
      "localization": {
        "description_key": "wls2_weapon_melee_sabre_5_epic_description",
        "en": {
          "description": "Those who own this saber don't even have to fight!",
          "full_description": "Those who own this saber don't even have to fight!",
          "name": "Army saber"
        },
        "full_description_key": "wls2_weapon_melee_sabre_5_epic_description",
        "name_key": "wls2_weapon_melee_sabre_5_epic_name",
        "zh": {
          "description": "手握这种军刀的人甚至都无需战斗！",
          "full_description": "手握这种军刀的人甚至都无需战斗！",
          "name": "军用军刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 3,
            "wls2_resourse_primary_coal_3": 6,
            "wls2_resourse_secondary_ingot_5": 4,
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
            "stack_id": "wls2_weapon_melee_sabre_5_epic",
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
            "stack_id": "wls2_weapon_melee_sabre_5_epic",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_melee_sabre_5_epic_icon",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.3
        },
        "damage": {
          "1": 1115,
          "2": 1227,
          "3": 1339,
          "4": 1450,
          "5": 1561,
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
          "1": 200,
          "2": 200,
          "3": 200,
          "4": 200,
          "5": 200
        },
        "penetrating_damage": {
          "1": 56,
          "2": 61,
          "3": 67,
          "4": 73,
          "5": 78
        },
        "slow_modifier": {
          "1": 0.4,
          "2": 0.4,
          "3": 0.4,
          "4": 0.4,
          "5": 0.4
        },
        "slow_time": {
          "1": 0.5,
          "2": 0.6,
          "3": 0.7,
          "4": 0.8,
          "5": 1
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
      "subcategory": "spear_saber",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "sabre"
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
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.7,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_saber_empty_hit"
        ],
        "hit_sounds": [
          "wls2_weapon_melee_saber_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Saber_army",
        "prefab_pbr_id": "@Saber_army_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_melee_sabre_5_epic",
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
      "image_key": "5bb36d7742e4081b4bd59a60651a0d146cbe2f2e1cfa54af560c42fadbf5e3fb",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "军用军刀",
        "name_en": "Army saber",
        "description_zh": "手握这种军刀的人甚至都无需战斗！",
        "description_en": "Those who own this saber don't even have to fight!",
        "category_zh": "武器",
        "subcategory": "spear_saber",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_melee_sabre_5_epic 军用军刀 army saber 手握这种军刀的人甚至都无需战斗！ those who own this saber don't even have to fight! weapon 武器 spear_saber weapon weapon_storage quick sabre wls2_weapon_melee_sabre_5_epic"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1115,
            "unit": "",
            "display": "1115"
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
            "value": 200,
            "unit": "",
            "display": "200"
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
            "value": 0.3,
            "unit": "%",
            "display": "30%"
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
            "value": 0.4,
            "unit": "%",
            "display": "40%"
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
              "damage": 1115,
              "dot_amount": 100,
              "penetrating_damage": 56,
              "slow_time": 0.5
            },
            "display": {
              "damage": "1115",
              "dot_amount": "100",
              "penetrating_damage": "56",
              "slow_time": "0.5 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 1227,
              "dot_amount": 150,
              "penetrating_damage": 61,
              "slow_time": 0.6
            },
            "display": {
              "damage": "1227",
              "dot_amount": "150",
              "penetrating_damage": "61",
              "slow_time": "0.6 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 1339,
              "dot_amount": 200,
              "penetrating_damage": 67,
              "slow_time": 0.7
            },
            "display": {
              "damage": "1339",
              "dot_amount": "200",
              "penetrating_damage": "67",
              "slow_time": "0.7 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 1450,
              "dot_amount": 250,
              "penetrating_damage": 73,
              "slow_time": 0.8
            },
            "display": {
              "damage": "1450",
              "dot_amount": "250",
              "penetrating_damage": "73",
              "slow_time": "0.8 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 1561,
              "dot_amount": 300,
              "penetrating_damage": 78,
              "slow_time": 1
            },
            "display": {
              "damage": "1561",
              "dot_amount": "300",
              "penetrating_damage": "78",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 1562,
              "dot_amount": 300,
              "penetrating_damage": 78,
              "slow_time": 1
            },
            "display": {
              "damage": "1562",
              "dot_amount": "300",
              "penetrating_damage": "78",
              "slow_time": "1 秒"
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
          "伤害：6 级起每级增加 1，最高 2561。",
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
        "description": "inventory_stack_view_wls2_weapon_melee_sabre_5_rare_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_sabre_5_rare_description",
        "name": "inventory_stack_view_wls2_weapon_melee_sabre_5_rare_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_melee_sabre_5_rare_name_with_wrapping",
        "rarity": "rare",
        "sorting_group_id": "weapon_melee_spear_saber",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_sabre_5_rare_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "sabre"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_sabre_5_rare"
      },
      "item_id": "wls2_weapon_melee_sabre_5_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_sabre_5_rare_description",
        "en": {
          "description": "Gave rise to a discipline of modern saber fencing",
          "full_description": "Gave rise to a discipline of modern saber fencing",
          "name": "Officer's saber"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_sabre_5_rare_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_sabre_5_rare_name",
        "zh": {
          "description": "催生出了现代军刀击剑训练方法",
          "full_description": "催生出了现代军刀击剑训练方法",
          "name": "军官军刀"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 6,
            "wls2_resourse_secondary_ingot_5": 4,
            "wls2_resourse_secondary_leather_5": 6
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
            "stack_id": "wls2_weapon_melee_sabre_5_rare",
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
            "stack_id": "wls2_weapon_melee_sabre_5_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_sabre_5_rare_icon",
      "stat_curves": {
        "animal_damage_modifier": {
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
          "1": 812,
          "2": 893,
          "3": 975,
          "4": 1055,
          "5": 1136,
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
          "1": 200,
          "2": 200,
          "3": 200,
          "4": 200,
          "5": 200
        },
        "penetrating_damage": {
          "1": 41,
          "2": 45,
          "3": 49,
          "4": 53,
          "5": 57
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
      "subcategory": "spear_saber",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "sabre"
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
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.6,
        "attack_range": 1.7,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_saber_empty_hit"
        ],
        "hit_sounds": [
          "wls2_weapon_melee_saber_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Saber_Officer",
        "prefab_pbr_id": "@Saber_Officer_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_melee_sabre_5_rare",
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
      "image_key": "a7de822386947698e8df1a90adfbfd15fc6187066b4bf9c8a3ecbe9184825b4e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "军官军刀",
        "name_en": "Officer's saber",
        "description_zh": "催生出了现代军刀击剑训练方法",
        "description_en": "Gave rise to a discipline of modern saber fencing",
        "category_zh": "武器",
        "subcategory": "spear_saber",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_melee_sabre_5_rare 军官军刀 officer's saber 催生出了现代军刀击剑训练方法 gave rise to a discipline of modern saber fencing weapon 武器 spear_saber weapon weapon_storage quick sabre wls2_weapon_melee_sabre_5_rare"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 812,
            "unit": "",
            "display": "812"
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
            "value": 200,
            "unit": "",
            "display": "200"
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
            "value": 0.3,
            "unit": "%",
            "display": "30%"
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
              "critical_hit_chance": 0.1,
              "damage": 812,
              "dot_amount": 100,
              "penetrating_damage": 41
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "812",
              "dot_amount": "100",
              "penetrating_damage": "41"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 893,
              "dot_amount": 150,
              "penetrating_damage": 45
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "893",
              "dot_amount": "150",
              "penetrating_damage": "45"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 975,
              "dot_amount": 200,
              "penetrating_damage": 49
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "975",
              "dot_amount": "200",
              "penetrating_damage": "49"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 1055,
              "dot_amount": 250,
              "penetrating_damage": 53
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "1055",
              "dot_amount": "250",
              "penetrating_damage": "53"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 1136,
              "dot_amount": 300,
              "penetrating_damage": 57
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "1136",
              "dot_amount": "300",
              "penetrating_damage": "57"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 1137,
              "dot_amount": 300,
              "penetrating_damage": 57
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "1137",
              "dot_amount": "300",
              "penetrating_damage": "57"
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
          "伤害：6 级起每级增加 1，最高 2136。",
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
        "description": "inventory_stack_view_wls_wooden_club_description",
        "full_description": "inventory_stack_view_wls_wooden_club_description",
        "name": "inventory_stack_view_wls_wooden_club_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_mace_mallet",
        "sprite": "UI_WW_AlphaBinary05/wls_wooden_club",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "club"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_slow_0"
      },
      "item_id": "wls2_weapon_melee_slow_0",
      "localization": {
        "description_key": "inventory_stack_view_wls_wooden_club_description",
        "en": {
          "description": "Even an ordinary stick hits better than bare hands",
          "full_description": "Even an ordinary stick hits better than bare hands",
          "name": "Wooden club"
        },
        "full_description_key": "inventory_stack_view_wls_wooden_club_description",
        "name_key": "inventory_stack_view_wls_wooden_club_name",
        "zh": {
          "description": "即使是再平常的棍子，也比赤手打人更疼。",
          "full_description": "即使是再平常的棍子，也比赤手打人更疼。",
          "name": "木棍"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_wood_1": 2
          },
          "type": "simple"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_primary_wood_1": 2
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_melee_slow_0"
              },
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_melee_slow_0_carpentry"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls_wooden_club",
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
          "1": 35,
          "2": 35,
          "3": 35,
          "4": 35,
          "5": 35
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
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 100,
          "radius": 2,
          "type": "cone"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 1.3,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_weapon_hit_empty"
        ],
        "hit_sounds": [
          "wls_weapon_club_hit"
        ],
        "hit_states": {
          "states_count": [
            1
          ],
          "type": "random"
        },
        "prefab_common_id": "@Club_Wooden",
        "prefab_pbr_id": "@Club_Wooden_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "blunt"
        ]
      },
      "weapon_id": "wls2_weapon_melee_slow_0",
      "weapon_summary": {
        "attack_action": {
          "angle": 100,
          "radius": 2,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.7,
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 1.3,
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
      "image_key": "7b05c01dd3536a36492bf434326b887c9cf211dac0d212269a5bf9c7cc359968",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "木棍",
        "name_en": "Wooden club",
        "description_zh": "即使是再平常的棍子，也比赤手打人更疼。",
        "description_en": "Even an ordinary stick hits better than bare hands",
        "category_zh": "武器",
        "subcategory": "mace_mallet",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_slow_0 木棍 wooden club 即使是再平常的棍子，也比赤手打人更疼。 even an ordinary stick hits better than bare hands weapon 武器 mace_mallet weapon weapon_storage quick club wls2_weapon_melee_slow_0"
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
            "value": 0.5882352941176471,
            "unit": "次/秒",
            "display": "0.59 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 35,
            "unit": "",
            "display": "35"
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
            "value": 100,
            "unit": "°",
            "display": "100°"
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
        "description": "inventory_stack_view_wls_stone_hammer_description",
        "full_description": "inventory_stack_view_wls_stone_hammer_description",
        "name": "inventory_stack_view_wls_stone_hammer_name",
        "rarity": "common",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/Wls_ear",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "club"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_slow_1"
      },
      "item_id": "wls2_weapon_melee_slow_1",
      "localization": {
        "description_key": "inventory_stack_view_wls_stone_hammer_description",
        "en": {
          "description": "Slow and heavy, but the blow is crushing.",
          "full_description": "Slow and heavy, but the blow is crushing.",
          "name": "Stone hammer"
        },
        "full_description_key": "inventory_stack_view_wls_stone_hammer_description",
        "name_key": "inventory_stack_view_wls_stone_hammer_name",
        "zh": {
          "description": "缓慢而沉重，但杀伤力十足。",
          "full_description": "缓慢而沉重，但杀伤力十足。",
          "name": "石锤"
        }
      },
      "official_inclusion_status": "special_bound_legacy",
      "rarity": "common",
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
          "default": 24
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
      "subcategory": "club",
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
          "angle": 110,
          "radius": 2,
          "type": "cone"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 1.5,
        "damage": 72,
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
          "steelarm"
        ]
      },
      "weapon_id": "wls2_weapon_melee_slow_1",
      "weapon_summary": {
        "attack_action": {
          "angle": 110,
          "radius": 2,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.7,
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 1.5,
        "attacks_per_second_inferred": 0.5882352941176471,
        "damage": 72,
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
        "name_zh": "石锤",
        "name_en": "Stone hammer",
        "description_zh": "缓慢而沉重，但杀伤力十足。",
        "description_en": "Slow and heavy, but the blow is crushing.",
        "category_zh": "武器",
        "subcategory": "club",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_slow_1 石锤 stone hammer 缓慢而沉重，但杀伤力十足。 slow and heavy, but the blow is crushing. weapon 武器 club weapon weapon_storage quick club wls2_weapon_melee_slow_1"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 72,
            "unit": "",
            "display": "72"
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
            "value": 24,
            "unit": "",
            "display": "24"
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
            "value": 110,
            "unit": "°",
            "display": "110°"
          },
          {
            "key": "attack_radius",
            "label": "攻击范围半径",
            "value": 2,
            "unit": "",
            "display": "2"
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
        "description": "inventory_stack_view_wls2_weapon_melee_slow_2_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_slow_2_description",
        "name": "inventory_stack_view_wls2_weapon_melee_slow_2_name",
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
        "weapon_id": "wls2_weapon_melee_slow_2"
      },
      "item_id": "wls2_weapon_melee_slow_2",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_slow_2_description",
        "en": {
          "description": "Beats off any desire to deal with the owner of this hammer.",
          "full_description": "Beats off any desire to deal with the owner of this hammer.",
          "name": "Bronze hammer"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_slow_2_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_slow_2_name",
        "zh": {
          "description": "打败任何与这把锤子的主人打交道的欲望。",
          "full_description": "打败任何与这把锤子的主人打交道的欲望。",
          "name": "青铜锤"
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
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 1.5,
        "damage": 130,
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
          "steelarm"
        ]
      },
      "weapon_id": "wls2_weapon_melee_slow_2",
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
        "damage": 130,
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
        "name_zh": "青铜锤",
        "name_en": "Bronze hammer",
        "description_zh": "打败任何与这把锤子的主人打交道的欲望。",
        "description_en": "Beats off any desire to deal with the owner of this hammer.",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "未标注",
        "search_text": "wls2_weapon_melee_slow_2 青铜锤 bronze hammer 打败任何与这把锤子的主人打交道的欲望。 beats off any desire to deal with the owner of this hammer. weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_melee_slow_2"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 130,
            "unit": "",
            "display": "130"
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
            "value": 36,
            "unit": "",
            "display": "36"
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
        "description": "inventory_stack_view_wls_metal_hammer_description",
        "full_description": "inventory_stack_view_wls_metal_hammer_description",
        "name": "inventory_stack_view_wls_metal_hammer_name",
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
        "weapon_id": "wls2_weapon_melee_slow_3"
      },
      "item_id": "wls2_weapon_melee_slow_3",
      "localization": {
        "description_key": "inventory_stack_view_wls_metal_hammer_description",
        "en": {
          "description": "Thor might envy the owner of this hammer.",
          "full_description": "Thor might envy the owner of this hammer.",
          "name": "Iron hammer"
        },
        "full_description_key": "inventory_stack_view_wls_metal_hammer_description",
        "name_key": "inventory_stack_view_wls_metal_hammer_name",
        "zh": {
          "description": "连雷神都会羡慕这把锤子的主人。",
          "full_description": "连雷神都会羡慕这把锤子的主人。",
          "name": "铁锤"
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
          "default": 54
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
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 1.5,
        "damage": 253,
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
          "steelarm"
        ]
      },
      "weapon_id": "wls2_weapon_melee_slow_3",
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
        "damage": 253,
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
        "name_zh": "铁锤",
        "name_en": "Iron hammer",
        "description_zh": "连雷神都会羡慕这把锤子的主人。",
        "description_en": "Thor might envy the owner of this hammer.",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "未标注",
        "search_text": "wls2_weapon_melee_slow_3 铁锤 iron hammer 连雷神都会羡慕这把锤子的主人。 thor might envy the owner of this hammer. weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_melee_slow_3"
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
            "value": 0.5882352941176471,
            "unit": "次/秒",
            "display": "0.59 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 54,
            "unit": "",
            "display": "54"
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
        "description": "inventory_stack_view_Weapon_melee_slow_4_description",
        "full_description": "inventory_stack_view_Weapon_melee_slow_4_description",
        "name": "inventory_stack_view_Weapon_melee_slow_4_name",
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
        "weapon_id": "wls2_weapon_melee_slow_4"
      },
      "item_id": "wls2_weapon_melee_slow_4",
      "localization": {
        "description_key": "inventory_stack_view_Weapon_melee_slow_4_description",
        "en": {
          "description": "The Indigenous had crude weapons too, this club is proof of that!",
          "full_description": "The Indigenous had crude weapons too, this club is proof of that!",
          "name": "Wooden club"
        },
        "full_description_key": "inventory_stack_view_Weapon_melee_slow_4_description",
        "name_key": "inventory_stack_view_Weapon_melee_slow_4_name",
        "zh": {
          "description": "印第安人也有粗糙的武器，这根棒子就是很好的例子",
          "full_description": "印第安人也有粗糙的武器，这根棒子就是很好的例子",
          "name": "木棒"
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
          "default": 81
        },
        "penetrating_damage": {
          "default": 13
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
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 1.5,
        "damage": 440,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_saber_empty_hit"
        ],
        "hit_sounds": [
          "wls2_weapon_melee_saber_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Saber_Dummy",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm"
        ]
      },
      "weapon_id": "wls2_weapon_melee_slow_4",
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
        "damage": 440,
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
        "name_zh": "木棒",
        "name_en": "Wooden club",
        "description_zh": "印第安人也有粗糙的武器，这根棒子就是很好的例子",
        "description_en": "The Indigenous had crude weapons too, this club is proof of that!",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "未标注",
        "search_text": "wls2_weapon_melee_slow_4 木棒 wooden club 印第安人也有粗糙的武器，这根棒子就是很好的例子 the indigenous had crude weapons too, this club is proof of that! weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_melee_slow_4"
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
            "value": 0.5882352941176471,
            "unit": "次/秒",
            "display": "0.59 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 81,
            "unit": "",
            "display": "81"
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
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "value": 13,
            "unit": "",
            "display": "13"
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
        "description": "inventory_stack_view_Weapon_melee_slow_5_description",
        "full_description": "inventory_stack_view_Weapon_melee_slow_5_description",
        "name": "inventory_stack_view_Weapon_melee_slow_5_name",
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
        "weapon_id": "wls2_weapon_melee_slow_5"
      },
      "item_id": "wls2_weapon_melee_slow_5",
      "localization": {
        "description_key": "inventory_stack_view_Weapon_melee_slow_5_description",
        "en": {
          "description": "Not many thugs will stay on their feet after a blow from a war mace",
          "full_description": "Not many thugs will stay on their feet after a blow from a war mace",
          "name": "War mace"
        },
        "full_description_key": "inventory_stack_view_Weapon_melee_slow_5_description",
        "name_key": "inventory_stack_view_Weapon_melee_slow_5_name",
        "zh": {
          "description": "没有多少恶棍在挨了战斗狼牙棒一击后还能站住脚跟",
          "full_description": "没有多少恶棍在挨了战斗狼牙棒一击后还能站住脚跟",
          "name": "战斗狼牙棒"
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
          "default": 122
        },
        "penetrating_damage": {
          "default": 40
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
          "angle": 120,
          "radius": 2,
          "type": "cone"
        },
        "attack_damage_time": 0.5,
        "attack_ending_time": 1.2,
        "attack_range": 1.5,
        "damage": 798,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_saber_empty_hit"
        ],
        "hit_sounds": [
          "wls2_weapon_melee_saber_hit"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Saber_Dummy",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm"
        ]
      },
      "weapon_id": "wls2_weapon_melee_slow_5",
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
        "damage": 798,
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
        "name_zh": "战斗狼牙棒",
        "name_en": "War mace",
        "description_zh": "没有多少恶棍在挨了战斗狼牙棒一击后还能站住脚跟",
        "description_en": "Not many thugs will stay on their feet after a blow from a war mace",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "未标注",
        "search_text": "wls2_weapon_melee_slow_5 战斗狼牙棒 war mace 没有多少恶棍在挨了战斗狼牙棒一击后还能站住脚跟 not many thugs will stay on their feet after a blow from a war mace weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_melee_slow_5"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 798,
            "unit": "",
            "display": "798"
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
            "value": 122,
            "unit": "",
            "display": "122"
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
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "value": 40,
            "unit": "",
            "display": "40"
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
        "description": "inventory_stack_view_wls2_weapon_melee_spear_1_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_spear_1_common_description",
        "name": "inventory_stack_view_wls2_weapon_melee_spear_1_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_spear_saber",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_middle_1",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "spear"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_spear_1_common"
      },
      "item_id": "wls2_weapon_melee_spear_1_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_spear_1_common_description",
        "en": {
          "description": "A simple pine spear with a copper tip",
          "full_description": "A simple pine spear with a copper tip",
          "name": "Copper spear"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_spear_1_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_spear_1_common_name",
        "zh": {
          "description": "使用松树枝和铜尖制成的简易长矛",
          "full_description": "使用松树枝和铜尖制成的简易长矛",
          "name": "铜矛"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_1": 2,
            "wls2_resourse_secondary_ingot_1": 2,
            "wls2_resourse_secondary_leather_1": 2,
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
                "inventory_stack_id": "wls2_weapon_melee_spear_1_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_25coins_dynamic_town_trader_offer_spear_1"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_middle_1",
      "stat_curves": {
        "damage": {
          "1": 63,
          "2": 69,
          "3": 76,
          "4": 82,
          "5": 88,
          "per_level_after_max": 1
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
        "spear"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 2.2,
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
        "prefab_common_id": "@Spear_Copper",
        "prefab_pbr_id": "@Spear_Copper_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_melee_spear_1_common",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 2.2,
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
      "image_key": "aac0fe4fe7567540fc8b468183bb1c41f3592692f325db2c22d5164e35cca9d1",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "铜矛",
        "name_en": "Copper spear",
        "description_zh": "使用松树枝和铜尖制成的简易长矛",
        "description_en": "A simple pine spear with a copper tip",
        "category_zh": "武器",
        "subcategory": "spear_saber",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_spear_1_common 铜矛 copper spear 使用松树枝和铜尖制成的简易长矛 a simple pine spear with a copper tip weapon 武器 spear_saber weapon weapon_storage quick spear wls2_weapon_melee_spear_1_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 63,
            "unit": "",
            "display": "63"
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
            "value": 70,
            "unit": "",
            "display": "70"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 2.2,
            "unit": "",
            "display": "2.2"
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
              "damage": 63
            },
            "display": {
              "damage": "63"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 69
            },
            "display": {
              "damage": "69"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 76
            },
            "display": {
              "damage": "76"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 82
            },
            "display": {
              "damage": "82"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 88
            },
            "display": {
              "damage": "88"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 89
            },
            "display": {
              "damage": "89"
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
          "伤害：6 级起每级增加 1，最高 1088。",
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
        "description": "inventory_stack_view_wls2_weapon_melee_spear_2_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_spear_2_common_description",
        "name": "inventory_stack_view_wls2_weapon_melee_spear_2_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_spear_saber",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_middle_2",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "spear"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_spear_2_common"
      },
      "item_id": "wls2_weapon_melee_spear_2_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_spear_2_common_description",
        "en": {
          "description": "A spear from strong oak with a bronze tip",
          "full_description": "A spear from strong oak with a bronze tip",
          "name": "Bronze spear"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_spear_2_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_spear_2_common_name",
        "zh": {
          "description": "使用坚固的橡树枝和青铜矛尖制成的长矛",
          "full_description": "使用坚固的橡树枝和青铜矛尖制成的长矛",
          "name": "青铜矛"
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
                "inventory_stack_id": "wls2_weapon_melee_spear_2_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_50coins_dynamic_town_trader_offer_spear_2"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_middle_2",
      "stat_curves": {
        "damage": {
          "1": 101,
          "2": 111,
          "3": 121,
          "4": 131,
          "5": 141,
          "per_level_after_max": 1
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
        "spear"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 2.2,
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
        "prefab_common_id": "@Spear_Bronze",
        "prefab_pbr_id": "@Spear_Bronze_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_melee_spear_2_common",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 2.2,
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
      "image_key": "47cbedef5a497a9037eb20bcb5361bc38b312117a730eb354df3daa8b6febf66",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "青铜矛",
        "name_en": "Bronze spear",
        "description_zh": "使用坚固的橡树枝和青铜矛尖制成的长矛",
        "description_en": "A spear from strong oak with a bronze tip",
        "category_zh": "武器",
        "subcategory": "spear_saber",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_spear_2_common 青铜矛 bronze spear 使用坚固的橡树枝和青铜矛尖制成的长矛 a spear from strong oak with a bronze tip weapon 武器 spear_saber weapon weapon_storage quick spear wls2_weapon_melee_spear_2_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 101,
            "unit": "",
            "display": "101"
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
            "value": 70,
            "unit": "",
            "display": "70"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 2.2,
            "unit": "",
            "display": "2.2"
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
              "damage": 101
            },
            "display": {
              "damage": "101"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 111
            },
            "display": {
              "damage": "111"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 121
            },
            "display": {
              "damage": "121"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 131
            },
            "display": {
              "damage": "131"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 141
            },
            "display": {
              "damage": "141"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 142
            },
            "display": {
              "damage": "142"
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
          "伤害：6 级起每级增加 1，最高 1141。",
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
        "description": "inventory_stack_view_wls2_weapon_melee_spear_2_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_spear_2_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_melee_spear_2_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_melee_spear_2_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_melee_spear_saber",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_spear_2_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "spear"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_spear_2_uncommon"
      },
      "item_id": "wls2_weapon_melee_spear_2_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_spear_2_uncommon_description",
        "en": {
          "description": "Has a special crossbar beneath the blade",
          "full_description": "Has a special crossbar beneath the blade",
          "name": "War spear"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_spear_2_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_spear_2_uncommon_name",
        "zh": {
          "description": "剑刃下方设有特制横梁",
          "full_description": "剑刃下方设有特制横梁",
          "name": "战矛"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_1": 4,
            "wls2_resourse_secondary_ingot_2": 3,
            "wls2_resourse_secondary_leather_2": 3,
            "wls2_resourse_secondary_plank_2": 3
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
                "inventory_stack_id": "wls2_weapon_melee_spear_2_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_100coins_dynamic_town_trader_offer_spear_2_uncommon"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_spear_2_uncommon_icon",
      "stat_curves": {
        "damage": {
          "1": 139,
          "2": 153,
          "3": 167,
          "4": 181,
          "5": 195,
          "per_level_after_max": 1
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
        "spear"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 2.2,
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
        "prefab_common_id": "@Spear_Bronze_war",
        "prefab_pbr_id": "@Spear_Bronze_war_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_melee_spear_2_uncommon",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 2.2,
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
      "image_key": "811ad7da635042902c9738afdd61fb514f8e0158703df05673eb536aae59f100",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "战矛",
        "name_en": "War spear",
        "description_zh": "剑刃下方设有特制横梁",
        "description_en": "Has a special crossbar beneath the blade",
        "category_zh": "武器",
        "subcategory": "spear_saber",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_melee_spear_2_uncommon 战矛 war spear 剑刃下方设有特制横梁 has a special crossbar beneath the blade weapon 武器 spear_saber weapon weapon_storage quick spear wls2_weapon_melee_spear_2_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 139,
            "unit": "",
            "display": "139"
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
            "value": 70,
            "unit": "",
            "display": "70"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 2.2,
            "unit": "",
            "display": "2.2"
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
              "damage": 139
            },
            "display": {
              "damage": "139"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 153
            },
            "display": {
              "damage": "153"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 167
            },
            "display": {
              "damage": "167"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 181
            },
            "display": {
              "damage": "181"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 195
            },
            "display": {
              "damage": "195"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 196
            },
            "display": {
              "damage": "196"
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
          "伤害：6 级起每级增加 1，最高 1195。",
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
        "description": "inventory_stack_view_wls2_weapon_melee_spear_3_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_spear_3_common_description",
        "name": "inventory_stack_view_wls2_weapon_melee_spear_3_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_spear_saber",
        "sprite": "UI_WW_AlphaBinary05/wls_metal_spear",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "spear"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_spear_3_common"
      },
      "item_id": "wls2_weapon_melee_spear_3_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_spear_3_common_description",
        "en": {
          "description": "A spear with a metal spearhead shaped like a triangle",
          "full_description": "A spear with a metal spearhead shaped like a triangle",
          "name": "Iron spear"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_spear_3_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_spear_3_common_name",
        "zh": {
          "description": "带有金属三角矛头的长矛",
          "full_description": "带有金属三角矛头的长矛",
          "name": "铁矛"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_2": 2,
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
                "inventory_stack_id": "wls2_weapon_melee_spear_3_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_125coins_dynamic_town_trader_offer_spear_3_common"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls_metal_spear",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.1
        },
        "damage": {
          "1": 177,
          "2": 195,
          "3": 213,
          "4": 231,
          "5": 249,
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
        }
      },
      "subcategory": "spear_saber",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "spear"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 2.2,
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
        "prefab_common_id": "@Spear_Metal",
        "prefab_pbr_id": "@Spear_Metal_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_melee_spear_3_common",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 2.2,
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
      "image_key": "489453591d1df7f022a08503c7783bb7f356d52b155a567c8ad181d69dbb744b",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "铁矛",
        "name_en": "Iron spear",
        "description_zh": "带有金属三角矛头的长矛",
        "description_en": "A spear with a metal spearhead shaped like a triangle",
        "category_zh": "武器",
        "subcategory": "spear_saber",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_melee_spear_3_common 铁矛 iron spear 带有金属三角矛头的长矛 a spear with a metal spearhead shaped like a triangle weapon 武器 spear_saber weapon weapon_storage quick spear wls2_weapon_melee_spear_3_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 177,
            "unit": "",
            "display": "177"
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
            "value": 110,
            "unit": "",
            "display": "110"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 2.2,
            "unit": "",
            "display": "2.2"
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
              "damage": 177
            },
            "display": {
              "damage": "177"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 195
            },
            "display": {
              "damage": "195"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 213
            },
            "display": {
              "damage": "213"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 231
            },
            "display": {
              "damage": "231"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 249
            },
            "display": {
              "damage": "249"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 250
            },
            "display": {
              "damage": "250"
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
          "伤害：6 级起每级增加 1，最高 1249。",
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
        "description": "inventory_stack_view_wls2_weapon_melee_spear_3_rare_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_spear_3_rare_description",
        "name": "inventory_stack_view_wls2_weapon_melee_spear_3_rare_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_melee_spear_3_rare_name_with_wrapping",
        "rarity": "rare",
        "sorting_group_id": "weapon_melee_spear_saber",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_spear_3_rare_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "spear"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_spear_3_rare"
      },
      "item_id": "wls2_weapon_melee_spear_3_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_spear_3_rare_description",
        "en": {
          "description": "A melee spear decorated with feathers",
          "full_description": "A melee spear decorated with feathers",
          "name": "Apache spear"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_spear_3_rare_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_spear_3_rare_name",
        "zh": {
          "description": "以羽毛作为装饰的近战长矛",
          "full_description": "以羽毛作为装饰的近战长矛",
          "name": "阿帕切长矛"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_2": 4,
            "wls2_resourse_secondary_ingot_3": 4,
            "wls2_resourse_secondary_leather_3": 4,
            "wls2_resourse_secondary_plank_3": 4
          },
          "learn_exp": 800,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_5_a",
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
            "stack_id": "wls2_weapon_melee_spear_3_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_spear_3_rare_icon",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.1
        },
        "critical_hit_chance": {
          "1": 0.13,
          "2": 0.15,
          "3": 0.18,
          "4": 0.2,
          "5": 0.25
        },
        "damage": {
          "1": 345,
          "2": 381,
          "3": 415,
          "4": 450,
          "5": 484,
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
        "spear"
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
          "coin_id": "spend_coin_soft_35"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 2.2,
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
        "prefab_common_id": "@Spear_Apachi",
        "prefab_pbr_id": "@Spear_Apachi_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_melee_spear_3_rare",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 2.2,
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
      "image_key": "4598ac01b527a497ccee6b9f28faed1c6dda76857512e5e254cac2e3041fbcb1",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "阿帕切长矛",
        "name_en": "Apache spear",
        "description_zh": "以羽毛作为装饰的近战长矛",
        "description_en": "A melee spear decorated with feathers",
        "category_zh": "武器",
        "subcategory": "spear_saber",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_melee_spear_3_rare 阿帕切长矛 apache spear 以羽毛作为装饰的近战长矛 a melee spear decorated with feathers weapon 武器 spear_saber weapon weapon_storage quick spear wls2_weapon_melee_spear_3_rare"
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
            "value": 0.8333333333333334,
            "unit": "次/秒",
            "display": "0.83 次/秒"
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
            "value": 2.2,
            "unit": "",
            "display": "2.2"
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
              "critical_hit_chance": 0.13,
              "damage": 345
            },
            "display": {
              "critical_hit_chance": "13%",
              "damage": "345"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.15,
              "damage": 381
            },
            "display": {
              "critical_hit_chance": "15%",
              "damage": "381"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 415
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "415"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.2,
              "damage": 450
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "450"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 484
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "484"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 485
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "485"
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
        "description": "inventory_stack_view_wls2_weapon_melee_spear_3_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_spear_3_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_melee_spear_3_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_melee_spear_saber",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_spear_3_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "spear"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_spear_3_uncommon"
      },
      "item_id": "wls2_weapon_melee_spear_3_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_spear_3_uncommon_description",
        "en": {
          "description": "Has a wooden shaft with an iron spearhead affixed",
          "full_description": "Has a wooden shaft with an iron spearhead affixed",
          "name": "Pike"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_spear_3_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_spear_3_uncommon_name",
        "zh": {
          "description": "木制矛柄，铁制矛头",
          "full_description": "木制矛柄，铁制矛头",
          "name": "长矛"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_2": 3,
            "wls2_resourse_secondary_ingot_3": 3,
            "wls2_resourse_secondary_leather_3": 3,
            "wls2_resourse_secondary_plank_3": 3
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
                "inventory_stack_id": "wls2_weapon_melee_spear_3_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_200coins_dynamic_town_trader_offer_spear_3_uncommon"
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
            "stack_id": "wls2_weapon_melee_spear_3_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_spear_3_uncommon_icon",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.1
        },
        "damage": {
          "1": 245,
          "2": 270,
          "3": 294,
          "4": 318,
          "5": 343,
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
        }
      },
      "subcategory": "spear_saber",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "spear"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 2.2,
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
        "prefab_common_id": "@Spear_Lance",
        "prefab_pbr_id": "@Spear_Lance_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_melee_spear_3_uncommon",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 2.2,
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
      "image_key": "9f10a04478186cffca8fc13bfecd72c3e02d7c4d52bd5343109965162d5b53e2",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "长矛",
        "name_en": "Pike",
        "description_zh": "木制矛柄，铁制矛头",
        "description_en": "Has a wooden shaft with an iron spearhead affixed",
        "category_zh": "武器",
        "subcategory": "spear_saber",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_melee_spear_3_uncommon 长矛 pike 木制矛柄，铁制矛头 has a wooden shaft with an iron spearhead affixed weapon 武器 spear_saber weapon weapon_storage quick spear wls2_weapon_melee_spear_3_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 245,
            "unit": "",
            "display": "245"
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
            "value": 110,
            "unit": "",
            "display": "110"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 2.2,
            "unit": "",
            "display": "2.2"
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
              "damage": 245
            },
            "display": {
              "damage": "245"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 270
            },
            "display": {
              "damage": "270"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 294
            },
            "display": {
              "damage": "294"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 318
            },
            "display": {
              "damage": "318"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 343
            },
            "display": {
              "damage": "343"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 344
            },
            "display": {
              "damage": "344"
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
          "伤害：6 级起每级增加 1，最高 1343。",
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
        "description": "inventory_stack_view_wls2_weapon_melee_spear_6_rare_description",
        "full_description": "inventory_stack_view_wls2_weapon_melee_spear_6_rare_description",
        "name": "inventory_stack_view_wls2_weapon_melee_spear_6_rare_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_melee_spear_saber",
        "sprite": "UI_WW_AlphaBinary08/wls2_weapon_melee_spear_6_rare",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "spear"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_melee_spear_6_rare"
      },
      "item_id": "wls2_weapon_melee_spear_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_melee_spear_6_rare_description",
        "en": {
          "description": "Tough and resilient for frequent encounters",
          "full_description": "Tough and resilient for frequent encounters",
          "name": "Rugged Harpoon"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_melee_spear_6_rare_description",
        "name_key": "inventory_stack_view_wls2_weapon_melee_spear_6_rare_name",
        "zh": {
          "description": "坚韧而适应频繁遭遇",
          "full_description": "坚韧而适应频繁遭遇",
          "name": "坚固的鱼叉"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_coal_3": 6,
            "wls2_resourse_secondary_ingot_6": 4,
            "wls2_resourse_secondary_leather_6": 4,
            "wls2_resourse_secondary_plank_6": 4
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
            "discounted_transaction_id": "transaction_iap_wls_4_a",
            "durability_factor": 0.25,
            "level_max": 120,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_melee_spear_6_rare",
            "transaction_id": "transaction_iap_wls_5_a"
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
            "stack_id": "wls2_weapon_melee_spear_6_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_melee_spear_6_rare",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.4
        },
        "damage": {
          "1": 1416,
          "2": 1558,
          "3": 1699,
          "4": 1841,
          "5": 1982,
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
          "1": 190,
          "2": 190,
          "3": 190,
          "4": 190,
          "5": 190
        },
        "penetrating_damage": {
          "1": 86,
          "2": 94,
          "3": 123,
          "4": 144,
          "5": 168
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
        }
      },
      "subcategory": "spear_saber",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "spear"
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 2.2,
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
        "prefab_common_id": "@Harpoon",
        "prefab_pbr_id": "@Harpoon_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "steelarm",
          "edged"
        ]
      },
      "weapon_id": "wls2_weapon_melee_spear_6_rare",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 2.2,
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
      "image_key": "82aacb9084fb329315fe2311b358dd05812fb4a7ee8091d20d268410db80dd02",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "坚固的鱼叉",
        "name_en": "Rugged Harpoon",
        "description_zh": "坚韧而适应频繁遭遇",
        "description_en": "Tough and resilient for frequent encounters",
        "category_zh": "武器",
        "subcategory": "spear_saber",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_melee_spear_6_rare 坚固的鱼叉 rugged harpoon 坚韧而适应频繁遭遇 tough and resilient for frequent encounters weapon 武器 spear_saber weapon weapon_storage quick spear wls2_weapon_melee_spear_6_rare"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1416,
            "unit": "",
            "display": "1416"
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
            "value": 190,
            "unit": "",
            "display": "190"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 2.2,
            "unit": "",
            "display": "2.2"
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
            "key": "dot_time",
            "label": "持续伤害时间",
            "value": 3,
            "unit": "秒",
            "display": "3 秒"
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
              "damage": 1416,
              "dot_amount": 200,
              "penetrating_damage": 86
            },
            "display": {
              "damage": "1416",
              "dot_amount": "200",
              "penetrating_damage": "86"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 1558,
              "dot_amount": 250,
              "penetrating_damage": 94
            },
            "display": {
              "damage": "1558",
              "dot_amount": "250",
              "penetrating_damage": "94"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 1699,
              "dot_amount": 300,
              "penetrating_damage": 123
            },
            "display": {
              "damage": "1699",
              "dot_amount": "300",
              "penetrating_damage": "123"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 1841,
              "dot_amount": 350,
              "penetrating_damage": 144
            },
            "display": {
              "damage": "1841",
              "dot_amount": "350",
              "penetrating_damage": "144"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 1982,
              "dot_amount": 400,
              "penetrating_damage": 168
            },
            "display": {
              "damage": "1982",
              "dot_amount": "400",
              "penetrating_damage": "168"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 1983,
              "dot_amount": 400,
              "penetrating_damage": 168
            },
            "display": {
              "damage": "1983",
              "dot_amount": "400",
              "penetrating_damage": "168"
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
          "伤害：6 级起每级增加 1，最高 2982。",
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
        "description": "inventory_stack_view_wls2_weapon_range_bow_1_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_bow_1_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_bow_1_common_name",
        "rarity": "common",
        "sorting_group_id": "bow",
        "sprite": "UI_WW_AlphaBinary05/wls_short_wooden_bow",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "bow"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_bow_1_common"
      },
      "item_id": "wls2_weapon_range_bow_1_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_bow_1_common_description",
        "en": {
          "description": "Ancient weapon for hunting small game",
          "full_description": "Ancient weapon for hunting small game",
          "name": "Short bow"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_bow_1_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_bow_1_common_name",
        "zh": {
          "description": "用于狩猎小型猎物的古代武器",
          "full_description": "用于狩猎小型猎物的古代武器",
          "name": "短弓"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_primary_wood_1": 3,
            "wls2_resourse_secondary_leather_1": 1,
            "wls2_resourse_secondary_rope_1": 3
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
      "sprite": "UI_WW_AlphaBinary05/wls_short_wooden_bow",
      "stat_curves": {
        "damage": {
          "1": 50,
          "2": 55,
          "3": 60,
          "4": 65,
          "5": 70,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 50,
          "2": 50,
          "3": 50,
          "4": 50,
          "5": 50
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
      "subcategory": "bow",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "bow"
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
          "wls2_weapon_range_bow_1_common"
        ],
        "hit_sounds": [
          "bow_reload_sound",
          "wls2_weapon_range_bow_1_common"
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
      "weapon_id": "wls2_weapon_range_bow_1_common",
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
      "image_key": "d9496f56e85668155c95ac69df649d77b8d88f2c872220fb6b00a99c532784f3",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "短弓",
        "name_en": "Short bow",
        "description_zh": "用于狩猎小型猎物的古代武器",
        "description_en": "Ancient weapon for hunting small game",
        "category_zh": "武器",
        "subcategory": "bow",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_bow_1_common 短弓 short bow 用于狩猎小型猎物的古代武器 ancient weapon for hunting small game weapon 武器 bow weapon weapon_storage quick bow wls2_weapon_range_bow_1_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 50,
            "unit": "",
            "display": "50"
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
            "value": 50,
            "unit": "",
            "display": "50"
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
              "damage": 50
            },
            "display": {
              "damage": "50"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 55
            },
            "display": {
              "damage": "55"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 60
            },
            "display": {
              "damage": "60"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 65
            },
            "display": {
              "damage": "65"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 70
            },
            "display": {
              "damage": "70"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 71
            },
            "display": {
              "damage": "71"
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
          "伤害：6 级起每级增加 1，最高 1070。",
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
        "description": "inventory_stack_view_wls2_weapon_range_bow_2_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_bow_2_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_bow_2_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_range_bow_2_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "bow",
        "sprite": "UI_WW_AlphaBinary05/weapon_range_throwing_bow_2",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "bow"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_bow_2_common"
      },
      "item_id": "wls2_weapon_range_bow_2_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_bow_2_common_description",
        "en": {
          "description": "Handy and light, suitable for hunting",
          "full_description": "Handy and light, suitable for hunting",
          "name": "Reinforced bow"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_bow_2_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_bow_2_common_name",
        "zh": {
          "description": "轻便灵活，适合用于狩猎",
          "full_description": "轻便灵活，适合用于狩猎",
          "name": "强化弓"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_leather_2": 1,
            "wls2_resourse_secondary_plank_2": 3,
            "wls2_resourse_secondary_rope_2": 3
          },
          "learn_exp": 200,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/weapon_range_throwing_bow_2",
      "stat_curves": {
        "damage": {
          "1": 80,
          "2": 88,
          "3": 96,
          "4": 104,
          "5": 112,
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
      "subcategory": "bow",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "bow"
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
          "wls2_weapon_range_bow_2_common"
        ],
        "hit_sounds": [
          "bow_reload_sound",
          "wls2_weapon_range_bow_2_common"
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
      "weapon_id": "wls2_weapon_range_bow_2_common",
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
      "image_key": "bbae953820ef3d11b7821982a2e925615aa65f6e3aabfe863efd4c75e9e36c56",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "强化弓",
        "name_en": "Reinforced bow",
        "description_zh": "轻便灵活，适合用于狩猎",
        "description_en": "Handy and light, suitable for hunting",
        "category_zh": "武器",
        "subcategory": "bow",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_bow_2_common 强化弓 reinforced bow 轻便灵活，适合用于狩猎 handy and light, suitable for hunting weapon 武器 bow weapon weapon_storage quick bow wls2_weapon_range_bow_2_common"
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
              "damage": 80
            },
            "display": {
              "damage": "80"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 88
            },
            "display": {
              "damage": "88"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 96
            },
            "display": {
              "damage": "96"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 104
            },
            "display": {
              "damage": "104"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 112
            },
            "display": {
              "damage": "112"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 113
            },
            "display": {
              "damage": "113"
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
          "伤害：6 级起每级增加 1，最高 1112。",
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
        "description": "inventory_stack_view_wls2_weapon_range_bow_2_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_bow_2_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_range_bow_2_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_range_bow_2_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "bow",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_bow_2_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "bow"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_bow_2_uncommon"
      },
      "item_id": "wls2_weapon_range_bow_2_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_bow_2_uncommon_description",
        "en": {
          "description": "A traditional weapon crafted and used by Indigenous peoples of America",
          "full_description": "A traditional weapon crafted and used by Indigenous peoples of America",
          "name": "Indigenous Warrior's Bow"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_bow_2_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_bow_2_uncommon_name",
        "zh": {
          "description": "这种印第安人手工制作的弓能够连续发射箭矢",
          "full_description": "这种印第安人手工制作的弓能够连续发射箭矢",
          "name": "印第安弓"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_leather_2": 2,
            "wls2_resourse_secondary_plank_2": 4,
            "wls2_resourse_secondary_rope_2": 4
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
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_bow_2_uncommon_icon",
      "stat_curves": {
        "damage": {
          "1": 100,
          "2": 110,
          "3": 120,
          "4": 130,
          "5": 140,
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
      "subcategory": "bow",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "bow"
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
          "wls2_weapon_range_bow_2_uncommon"
        ],
        "hit_sounds": [
          "bow_reload_sound",
          "wls2_weapon_range_bow_2_uncommon"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Bow_indian",
        "prefab_pbr_id": "@Bow_indian_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "bow"
        ]
      },
      "weapon_id": "wls2_weapon_range_bow_2_uncommon",
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
      "image_key": "ed8ccb74d79eef0d616c617fabb4596b1abc75bb91f3d0efb6e88ccd66e82ad0",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "印第安弓",
        "name_en": "Indigenous Warrior's Bow",
        "description_zh": "这种印第安人手工制作的弓能够连续发射箭矢",
        "description_en": "A traditional weapon crafted and used by Indigenous peoples of America",
        "category_zh": "武器",
        "subcategory": "bow",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_bow_2_uncommon 印第安弓 indigenous warrior's bow 这种印第安人手工制作的弓能够连续发射箭矢 a traditional weapon crafted and used by indigenous peoples of america weapon 武器 bow weapon weapon_storage quick bow wls2_weapon_range_bow_2_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 100,
            "unit": "",
            "display": "100"
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
              "damage": 100
            },
            "display": {
              "damage": "100"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 110
            },
            "display": {
              "damage": "110"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 120
            },
            "display": {
              "damage": "120"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 130
            },
            "display": {
              "damage": "130"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 140
            },
            "display": {
              "damage": "140"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 141
            },
            "display": {
              "damage": "141"
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
          "伤害：6 级起每级增加 1，最高 1140。",
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
        "description": "inventory_stack_view_wls2_weapon_range_bow_3_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_bow_3_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_bow_3_common_name",
        "rarity": "common",
        "sorting_group_id": "bow",
        "sprite": "UI_WW_AlphaBinary05/wls_medium_composite_bow",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "bow"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_bow_3_common"
      },
      "item_id": "wls2_weapon_range_bow_3_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_bow_3_common_description",
        "en": {
          "description": "Longbow made of two types of wood.",
          "full_description": "Longbow made of two types of wood.",
          "name": "Longbow"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_bow_3_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_bow_3_common_name",
        "zh": {
          "description": "由两种木材制成的长弓。",
          "full_description": "由两种木材制成的长弓。",
          "name": "长弓"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_leather_3": 1,
            "wls2_resourse_secondary_plank_3": 3,
            "wls2_resourse_secondary_rope_3": 3
          },
          "learn_exp": 400,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls_medium_composite_bow",
      "stat_curves": {
        "damage": {
          "1": 149,
          "2": 164,
          "3": 178,
          "4": 194,
          "5": 208,
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
      "subcategory": "bow",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "bow"
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
          "wls2_weapon_range_bow_3_common"
        ],
        "hit_sounds": [
          "bow_reload_sound",
          "wls2_weapon_range_bow_3_common"
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
      "weapon_id": "wls2_weapon_range_bow_3_common",
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
      "image_key": "b81c83ff47271a22d17c725140b1e9d469023bb1f651d43386a4197e8e8058e9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "长弓",
        "name_en": "Longbow",
        "description_zh": "由两种木材制成的长弓。",
        "description_en": "Longbow made of two types of wood.",
        "category_zh": "武器",
        "subcategory": "bow",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_bow_3_common 长弓 longbow 由两种木材制成的长弓。 longbow made of two types of wood. weapon 武器 bow weapon weapon_storage quick bow wls2_weapon_range_bow_3_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 149,
            "unit": "",
            "display": "149"
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
            "value": 80,
            "unit": "",
            "display": "80"
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
              "damage": 149
            },
            "display": {
              "damage": "149"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 164
            },
            "display": {
              "damage": "164"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 178
            },
            "display": {
              "damage": "178"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 194
            },
            "display": {
              "damage": "194"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 208
            },
            "display": {
              "damage": "208"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 209
            },
            "display": {
              "damage": "209"
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
          "伤害：6 级起每级增加 1，最高 1208。",
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
        "description": "inventory_stack_view_wls2_weapon_range_bow_3_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_bow_3_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_range_bow_3_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_range_bow_3_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "bow",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_bow_3_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "bow"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_bow_3_uncommon"
      },
      "item_id": "wls2_weapon_range_bow_3_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_bow_3_uncommon_description",
        "en": {
          "description": "Silent, deadly and accurate at close range",
          "full_description": "Silent, deadly and accurate at close range",
          "name": "Apache bow"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_bow_3_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_bow_3_uncommon_name",
        "zh": {
          "description": "安静，致命，近距离射击时准度惊人",
          "full_description": "安静，致命，近距离射击时准度惊人",
          "name": "阿帕切弓"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_leather_3": 2,
            "wls2_resourse_secondary_plank_3": 4,
            "wls2_resourse_secondary_rope_3": 4
          },
          "learn_exp": 800,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_5_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_uncommon_desc"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_bow_3_uncommon_icon",
      "stat_curves": {
        "damage": {
          "1": 193,
          "2": 212,
          "3": 231,
          "4": 251,
          "5": 270,
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
      "subcategory": "bow",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "bow"
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
          "wls2_weapon_range_bow_3_uncommon"
        ],
        "hit_sounds": [
          "bow_reload_sound",
          "wls2_weapon_range_bow_3_uncommon"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Bow_apachi",
        "prefab_pbr_id": "@Bow_apachi_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "bow"
        ]
      },
      "weapon_id": "wls2_weapon_range_bow_3_uncommon",
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
      "image_key": "bfdb4f901dba0f336d9a49239524b0d38461aa9a69d3473d730020cf50d9aac4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "阿帕切弓",
        "name_en": "Apache bow",
        "description_zh": "安静，致命，近距离射击时准度惊人",
        "description_en": "Silent, deadly and accurate at close range",
        "category_zh": "武器",
        "subcategory": "bow",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_bow_3_uncommon 阿帕切弓 apache bow 安静，致命，近距离射击时准度惊人 silent, deadly and accurate at close range weapon 武器 bow weapon weapon_storage quick bow wls2_weapon_range_bow_3_uncommon"
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
            "value": 0.588235294117647,
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
              "damage": 193
            },
            "display": {
              "damage": "193"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 212
            },
            "display": {
              "damage": "212"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 231
            },
            "display": {
              "damage": "231"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 251
            },
            "display": {
              "damage": "251"
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
        "description": "inventory_stack_view_wls2_weapon_range_bow_4_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_bow_4_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_bow_4_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_range_bow_4_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "bow",
        "sprite": "UI_WW_AlphaBinary05/wls_long_composite_bow",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "bow"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_bow_4_common"
      },
      "item_id": "wls2_weapon_range_bow_4_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_bow_4_common_description",
        "en": {
          "description": "Combines small size and high power",
          "full_description": "Combines small size and high power",
          "name": "Composite bow"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_bow_4_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_bow_4_common_name",
        "zh": {
          "description": "虽尺寸较小，但威力巨大",
          "full_description": "虽尺寸较小，但威力巨大",
          "name": "复合弓"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_leather_4": 1,
            "wls2_resourse_secondary_plank_4": 3,
            "wls2_resourse_secondary_rope_4": 3
          },
          "learn_exp": 800,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_bow_4_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_weapon_1"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls_long_composite_bow",
      "stat_curves": {
        "damage": {
          "1": 220,
          "2": 242,
          "3": 264,
          "4": 286,
          "5": 308,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 130,
          "2": 130,
          "3": 130,
          "4": 130,
          "5": 130
        },
        "penetrating_damage": {
          "1": 7,
          "2": 7,
          "3": 8,
          "4": 9,
          "5": 9
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
      "subcategory": "bow",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "bow"
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
          "wls2_weapon_range_bow_4_common"
        ],
        "hit_sounds": [
          "bow_reload_sound",
          "wls2_weapon_range_bow_4_common"
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
      "weapon_id": "wls2_weapon_range_bow_4_common",
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
      "image_key": "01dceb03adcbad5c572f7fa49f629388b1eaa1cbedb57eec7f83285da0d43b97",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "复合弓",
        "name_en": "Composite bow",
        "description_zh": "虽尺寸较小，但威力巨大",
        "description_en": "Combines small size and high power",
        "category_zh": "武器",
        "subcategory": "bow",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_bow_4_common 复合弓 composite bow 虽尺寸较小，但威力巨大 combines small size and high power weapon 武器 bow weapon weapon_storage quick bow wls2_weapon_range_bow_4_common"
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
            "value": 0.588235294117647,
            "unit": "次/秒",
            "display": "0.59 次/秒"
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
              "damage": 220,
              "penetrating_damage": 7
            },
            "display": {
              "damage": "220",
              "penetrating_damage": "7"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 242,
              "penetrating_damage": 7
            },
            "display": {
              "damage": "242",
              "penetrating_damage": "7"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 264,
              "penetrating_damage": 8
            },
            "display": {
              "damage": "264",
              "penetrating_damage": "8"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 286,
              "penetrating_damage": 9
            },
            "display": {
              "damage": "286",
              "penetrating_damage": "9"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 308,
              "penetrating_damage": 9
            },
            "display": {
              "damage": "308",
              "penetrating_damage": "9"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 309,
              "penetrating_damage": 9
            },
            "display": {
              "damage": "309",
              "penetrating_damage": "9"
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
          "伤害：6 级起每级增加 1，最高 1308。",
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
        "description": "inventory_stack_view_wls2_weapon_range_bow_5_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_bow_5_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_bow_5_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_range_bow_5_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "bow",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_bow_5_common_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "bow"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_bow_5_common"
      },
      "item_id": "wls2_weapon_range_bow_5_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_bow_5_common_description",
        "en": {
          "description": "Length of the bow gives extra flexibility and speed",
          "full_description": "Length of the bow gives extra flexibility and speed",
          "name": "Recurve bow"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_bow_5_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_bow_5_common_name",
        "zh": {
          "description": "长度赋予了这把弓额外的弹性与速度",
          "full_description": "长度赋予了这把弓额外的弹性与速度",
          "name": "反曲弓"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_leather_5": 1,
            "wls2_resourse_secondary_plank_5": 3,
            "wls2_resourse_secondary_rope_5": 3
          },
          "learn_exp": 1600,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_bow_5_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_weapon_2"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_bow_5_common_icon",
      "stat_curves": {
        "damage": {
          "1": 385,
          "2": 424,
          "3": 462,
          "4": 501,
          "5": 539,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 165,
          "2": 165,
          "3": 165,
          "4": 165,
          "5": 165
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
      "subcategory": "bow",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "bow"
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
          "wls2_weapon_range_bow_5_common"
        ],
        "hit_sounds": [
          "bow_reload_sound",
          "wls2_weapon_range_bow_5_common"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Bow_Composite_Longbow",
        "prefab_pbr_id": "@Bow_Composite_Longbow_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "bow"
        ]
      },
      "weapon_id": "wls2_weapon_range_bow_5_common",
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
      "image_key": "fff843d5d0c33eeba82e7e53029a12c61511945be297098aa8df11a2e060b31f",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "反曲弓",
        "name_en": "Recurve bow",
        "description_zh": "长度赋予了这把弓额外的弹性与速度",
        "description_en": "Length of the bow gives extra flexibility and speed",
        "category_zh": "武器",
        "subcategory": "bow",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_bow_5_common 反曲弓 recurve bow 长度赋予了这把弓额外的弹性与速度 length of the bow gives extra flexibility and speed weapon 武器 bow weapon weapon_storage quick bow wls2_weapon_range_bow_5_common"
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
            "value": 0.588235294117647,
            "unit": "次/秒",
            "display": "0.59 次/秒"
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
              "damage": 385,
              "penetrating_damage": 19
            },
            "display": {
              "damage": "385",
              "penetrating_damage": "19"
            }
          },
          {
            "level": 2,
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
            "level": 3,
            "values": {
              "damage": 462,
              "penetrating_damage": 23
            },
            "display": {
              "damage": "462",
              "penetrating_damage": "23"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 501,
              "penetrating_damage": 25
            },
            "display": {
              "damage": "501",
              "penetrating_damage": "25"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 539,
              "penetrating_damage": 27
            },
            "display": {
              "damage": "539",
              "penetrating_damage": "27"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 540,
              "penetrating_damage": 27
            },
            "display": {
              "damage": "540",
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
        "description": "inventory_stack_view_wls2_weapon_range_bow_6_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_bow_6_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_bow_6_common_name",
        "rarity": "common",
        "sorting_group_id": "bow",
        "sprite": "UI_WW_AlphaBinary07/wls2_weapon_range_bow_6_common_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "bow"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_bow_6_common"
      },
      "item_id": "wls2_weapon_range_bow_6_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_bow_6_common_description",
        "en": {
          "description": "Combines traditional craftsmanship with engineering achievements",
          "full_description": "Combines traditional craftsmanship with engineering achievements",
          "name": "Power bow"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_bow_6_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_bow_6_common_name",
        "zh": {
          "description": "结合传统工艺与工程成就",
          "full_description": "结合传统工艺与工程成就",
          "name": "力量 弓"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_leather_6": 1,
            "wls2_resourse_secondary_plank_6": 3,
            "wls2_resourse_secondary_rope_6": 3
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
      "sprite": "UI_WW_AlphaBinary07/wls2_weapon_range_bow_6_common_icon",
      "stat_curves": {
        "damage": {
          "1": 616,
          "2": 678,
          "3": 739,
          "4": 801,
          "5": 862,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 165,
          "2": 165,
          "3": 165,
          "4": 165,
          "5": 165
        },
        "penetrating_damage": {
          "1": 31,
          "2": 33,
          "3": 35,
          "4": 37,
          "5": 39
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
      "subcategory": "bow",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "bow"
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
          "wls2_weapon_range_bow_5_common"
        ],
        "hit_sounds": [
          "bow_reload_sound",
          "wls2_weapon_range_bow_5_common"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Bow_Power_Longbow",
        "prefab_pbr_id": "@Bow_Power_Longbow_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "bow"
        ]
      },
      "weapon_id": "wls2_weapon_range_bow_6_common",
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
      "image_key": "6ad44f0f9f56ea3f67467c1560a0d4a0767e7be21a968a86d886961d1b18b317",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "力量 弓",
        "name_en": "Power bow",
        "description_zh": "结合传统工艺与工程成就",
        "description_en": "Combines traditional craftsmanship with engineering achievements",
        "category_zh": "武器",
        "subcategory": "bow",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_bow_6_common 力量 弓 power bow 结合传统工艺与工程成就 combines traditional craftsmanship with engineering achievements weapon 武器 bow weapon weapon_storage quick bow wls2_weapon_range_bow_6_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 616,
            "unit": "",
            "display": "616"
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
            "value": 165,
            "unit": "",
            "display": "165"
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
              "damage": 616,
              "penetrating_damage": 31
            },
            "display": {
              "damage": "616",
              "penetrating_damage": "31"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 678,
              "penetrating_damage": 33
            },
            "display": {
              "damage": "678",
              "penetrating_damage": "33"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 739,
              "penetrating_damage": 35
            },
            "display": {
              "damage": "739",
              "penetrating_damage": "35"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 801,
              "penetrating_damage": 37
            },
            "display": {
              "damage": "801",
              "penetrating_damage": "37"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 862,
              "penetrating_damage": 39
            },
            "display": {
              "damage": "862",
              "penetrating_damage": "39"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 863,
              "penetrating_damage": 39
            },
            "display": {
              "damage": "863",
              "penetrating_damage": "39"
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
          "伤害：6 级起每级增加 1，最高 1862。",
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
        "description": "inventory_stack_view_wls2_weapon_range_bow_7_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_bow_7_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_bow_7_common_name",
        "rarity": "common",
        "sorting_group_id": "bow",
        "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_bow_7_common_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "bow"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_bow_7_common"
      },
      "item_id": "wls2_weapon_range_bow_7_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_bow_7_common_description",
        "en": {
          "description": "Uses a dual-tension string system to pack power, precision, and pride into every shot",
          "full_description": "Uses a dual-tension string system to pack power, precision, and pride into every shot",
          "name": "Bronco bow"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_bow_7_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_bow_7_common_name",
        "zh": {
          "description": "使用双张力弦系统在每一次射击中注入力量、精确性和自豪感",
          "full_description": "使用双张力弦系统在每一次射击中注入力量、精确性和自豪感",
          "name": "野马弓"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_leather_7": 1,
            "wls2_resourse_secondary_plank_7": 3,
            "wls2_resourse_secondary_rope_7": 3
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
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_bow_7_common_icon",
      "stat_curves": {
        "damage": {
          "1": 986,
          "2": 1084,
          "3": 1183,
          "4": 1281,
          "5": 1380,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 165,
          "2": 165,
          "3": 165,
          "4": 165,
          "5": 165
        },
        "penetrating_damage": {
          "1": 49,
          "2": 54,
          "3": 59,
          "4": 64,
          "5": 69
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
      "subcategory": "bow",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "bow"
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
          "wls2_weapon_range_bow_5_common"
        ],
        "hit_sounds": [
          "bow_reload_sound",
          "wls2_weapon_range_bow_5_common"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Bow_T7",
        "prefab_pbr_id": "@Bow_T7",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "bow"
        ]
      },
      "weapon_id": "wls2_weapon_range_bow_7_common",
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
      "image_key": "9dd59939882e269c94820b61c9cb104b4c752f6c14b32c90a0b33e254c5f499d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "野马弓",
        "name_en": "Bronco bow",
        "description_zh": "使用双张力弦系统在每一次射击中注入力量、精确性和自豪感",
        "description_en": "Uses a dual-tension string system to pack power, precision, and pride into every shot",
        "category_zh": "武器",
        "subcategory": "bow",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_bow_7_common 野马弓 bronco bow 使用双张力弦系统在每一次射击中注入力量、精确性和自豪感 uses a dual-tension string system to pack power, precision, and pride into every shot weapon 武器 bow weapon weapon_storage quick bow wls2_weapon_range_bow_7_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 986,
            "unit": "",
            "display": "986"
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
            "value": 165,
            "unit": "",
            "display": "165"
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
              "damage": 986,
              "penetrating_damage": 49
            },
            "display": {
              "damage": "986",
              "penetrating_damage": "49"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 1084,
              "penetrating_damage": 54
            },
            "display": {
              "damage": "1084",
              "penetrating_damage": "54"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 1183,
              "penetrating_damage": 59
            },
            "display": {
              "damage": "1183",
              "penetrating_damage": "59"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 1281,
              "penetrating_damage": 64
            },
            "display": {
              "damage": "1281",
              "penetrating_damage": "64"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 1380,
              "penetrating_damage": 69
            },
            "display": {
              "damage": "1380",
              "penetrating_damage": "69"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 1381,
              "penetrating_damage": 69
            },
            "display": {
              "damage": "1381",
              "penetrating_damage": "69"
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
          "伤害：6 级起每级增加 1，最高 2380。",
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
        "description": "inventory_stack_view_wls2_weapon_range_diary_rifle_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_diary_rifle_description",
        "name": "inventory_stack_view_wls2_weapon_range_diary_rifle_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary06/wls2_weapon_range_diary_rifle_2_rare",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_diary_rifle_2_rare"
      },
      "item_id": "wls2_weapon_range_diary_rifle_2_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_diary_rifle_description",
        "en": {
          "description": "Solves any problem",
          "full_description": "Solves any problem",
          "name": "Nameless Hero Rifle"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_diary_rifle_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_diary_rifle_name",
        "zh": {
          "description": "可解决任何问题",
          "full_description": "可解决任何问题",
          "name": "无名英雄步枪"
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
                "wls2_resourse_fourfold_gunparts_2": 4,
                "wls2_resourse_fourfold_nails_2": 4,
                "wls2_resourse_secondary_ingot_2": 8,
                "wls2_resourse_secondary_plank_2": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_range_diary_rifle_2_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_range_diary_rifle_2_rare_recycle"
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
            "stack_id": "wls2_weapon_range_diary_rifle_2_rare",
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
            "stack_id": "wls2_weapon_range_diary_rifle_2_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_weapon_range_diary_rifle_2_rare",
      "stat_curves": {
        "damage": {
          "default": 270
        },
        "max_durability": {
          "default": 130
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
      "subcategory": "rifle",
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
        "prefab_common_id": "@Riffle_Henry_1860",
        "prefab_pbr_id": "@Riffle_Henry_1860_pbr",
        "speed_modifier": 1,
        "tags": [
          "firearm",
          "ranged",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_diary_rifle_2_rare",
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
          "firearm",
          "ranged",
          "rifle"
        ]
      },
      "image_key": "4a11c395310a75f883e419e1991efe1f62d8ed401f01de6f1b061207b02ce402",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "无名英雄步枪",
        "name_en": "Nameless Hero Rifle",
        "description_zh": "可解决任何问题",
        "description_en": "Solves any problem",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_diary_rifle_2_rare 无名英雄步枪 nameless hero rifle 可解决任何问题 solves any problem weapon 武器 rifle weapon weapon_storage quick wls2_weapon_range_diary_rifle_2_rare"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 270,
            "unit": "",
            "display": "270"
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
            "value": 130,
            "unit": "",
            "display": "130"
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
        "description": "inventory_stack_view_wls2_weapon_range_fbo_colt_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_fbo_colt_description",
        "name": "inventory_stack_view_wls2_weapon_range_fbo_colt_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_range_fbo_colt",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_fbo_colt_2_rare"
      },
      "item_id": "wls2_weapon_range_fbo_colt_2_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_fbo_colt_description",
        "en": {
          "description": "The mere sight of the weapon better than any words",
          "full_description": "The mere sight of the weapon better than any words",
          "name": "Nameless Hero Colt"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_fbo_colt_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_fbo_colt_name",
        "zh": {
          "description": "能看到武器胜过任何言语",
          "full_description": "能看到武器胜过任何言语",
          "name": "无名英雄柯尔特左轮"
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
                "wls2_resourse_fourfold_gunparts_2": 2,
                "wls2_resourse_fourfold_nails_2": 4,
                "wls2_resourse_secondary_ingot_2": 8
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_range_fbo_colt_2_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_range_fbo_colt_2_rare_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_range_fbo_colt",
      "stat_curves": {
        "damage": {
          "default": 270
        },
        "max_durability": {
          "default": 130
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 4,
        "damage": 270,
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
      "weapon_id": "wls2_weapon_range_fbo_colt_2_rare",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 4,
        "attacks_per_second_inferred": 1.25,
        "damage": 270,
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
      "image_key": "629b08aeec04cebedc273ccdf85bafc73404cab1d731230cda70c365cae03b17",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "无名英雄柯尔特左轮",
        "name_en": "Nameless Hero Colt",
        "description_zh": "能看到武器胜过任何言语",
        "description_en": "The mere sight of the weapon better than any words",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_fbo_colt_2_rare 无名英雄柯尔特左轮 nameless hero colt 能看到武器胜过任何言语 the mere sight of the weapon better than any words weapon 武器 pistol weapon weapon_storage quick wls2_weapon_range_fbo_colt_2_rare"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 270,
            "unit": "",
            "display": "270"
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
            "value": 130,
            "unit": "",
            "display": "130"
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
        "description": "inventory_stack_view_wls2_weapon_range_fbo_colt_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_fbo_colt_description",
        "name": "inventory_stack_view_wls2_weapon_range_fbo_colt_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary04/wls2_weapon_range_fbo_colt",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_fbo_colt_2_rare_new"
      },
      "item_id": "wls2_weapon_range_fbo_colt_2_rare_new",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_fbo_colt_description",
        "en": {
          "description": "The mere sight of the weapon better than any words",
          "full_description": "The mere sight of the weapon better than any words",
          "name": "Nameless Hero Colt"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_fbo_colt_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_fbo_colt_name",
        "zh": {
          "description": "能看到武器胜过任何言语",
          "full_description": "能看到武器胜过任何言语",
          "name": "无名英雄柯尔特左轮"
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
                "wls2_resourse_fourfold_gunparts_2": 2,
                "wls2_resourse_fourfold_nails_2": 4,
                "wls2_resourse_secondary_ingot_2": 8
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_range_fbo_colt_2_rare_new"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_range_fbo_colt_2_rare_new_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_range_fbo_colt",
      "stat_curves": {
        "damage": {
          "default": 270
        },
        "max_durability": {
          "default": 130
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
      "weapon_id": "wls2_weapon_range_fbo_colt_2_rare_new",
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
      "image_key": "629b08aeec04cebedc273ccdf85bafc73404cab1d731230cda70c365cae03b17",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "无名英雄柯尔特左轮",
        "name_en": "Nameless Hero Colt",
        "description_zh": "能看到武器胜过任何言语",
        "description_en": "The mere sight of the weapon better than any words",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_fbo_colt_2_rare_new 无名英雄柯尔特左轮 nameless hero colt 能看到武器胜过任何言语 the mere sight of the weapon better than any words weapon 武器 pistol weapon weapon_storage quick wls2_weapon_range_fbo_colt_2_rare_new"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 270,
            "unit": "",
            "display": "270"
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
            "value": 130,
            "unit": "",
            "display": "130"
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
        "description": "inventory_stack_view_wls_indian_musket_description",
        "full_description": "inventory_stack_view_wls_indian_musket_description",
        "name": "inventory_stack_view_wls_indian_musket_name",
        "rarity": "common",
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
        "weapon_id": "wls2_weapon_range_firearms_musket_2"
      },
      "item_id": "wls2_weapon_range_firearms_musket_2",
      "localization": {
        "description_key": "inventory_stack_view_wls_indian_musket_description",
        "en": {
          "description": "The first firearm Indigenous started using.",
          "full_description": "The first firearm Indigenous started using.",
          "name": "Kentucky Musket"
        },
        "full_description_key": "inventory_stack_view_wls_indian_musket_description",
        "name_key": "inventory_stack_view_wls_indian_musket_name",
        "zh": {
          "description": "印第安人所使用的首支火器。",
          "full_description": "印第安人所使用的首支火器。",
          "name": "印第安人滑膛枪"
        }
      },
      "official_inclusion_status": "special_bound_legacy",
      "rarity": "common",
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
          "default": 75
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 1.4,
        "attack_range": 4.5,
        "damage": 135,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_weapon_range_firearms_musket_2"
        ],
        "hit_sounds": [
          "wls2_weapon_range_firearms_musket_2"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Mushket_Indian",
        "prefab_pbr_id": "@Mushket_Indian_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_firearms_musket_2",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.7,
        "attack_damage_time": 0.3,
        "attack_ending_time": 1.4,
        "attack_range": 4.5,
        "attacks_per_second_inferred": 0.5882352941176471,
        "damage": 135,
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
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "印第安人滑膛枪",
        "name_en": "Kentucky Musket",
        "description_zh": "印第安人所使用的首支火器。",
        "description_en": "The first firearm Indigenous started using.",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_firearms_musket_2 印第安人滑膛枪 kentucky musket 印第安人所使用的首支火器。 the first firearm indigenous started using. weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_range_firearms_musket_2"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 135,
            "unit": "",
            "display": "135"
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
            "value": 75,
            "unit": "",
            "display": "75"
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
        "description": "inventory_stack_view_wls_springfield_.58_description",
        "full_description": "inventory_stack_view_wls_springfield_.58_description",
        "name": "inventory_stack_view_wls_springfield_.58_name",
        "rarity": "uncommon",
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
        "weapon_id": "wls2_weapon_range_firearms_musket_3"
      },
      "item_id": "wls2_weapon_range_firearms_musket_3",
      "localization": {
        "description_key": "inventory_stack_view_wls_springfield_.58_description",
        "en": {
          "description": "This rifle is suitable for hunting wild animals",
          "full_description": "This rifle is suitable for hunting wild animals",
          "name": "Springfield .58 rifle"
        },
        "full_description_key": "inventory_stack_view_wls_springfield_.58_description",
        "name_key": "inventory_stack_view_wls_springfield_.58_name",
        "zh": {
          "description": "这支步枪适合用来狩猎野生动物。",
          "full_description": "这支步枪适合用来狩猎野生动物。",
          "name": "斯普林菲尔德. 58 口径步枪"
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
        "max_durability": {
          "default": 110
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 1.3,
        "attack_range": 4.5,
        "damage": 275,
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
        "prefab_common_id": "@Mushket_Springfield_58",
        "prefab_pbr_id": "@Mushket_Springfield_58_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_firearms_musket_3",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.6,
        "attack_damage_time": 0.3,
        "attack_ending_time": 1.3,
        "attack_range": 4.5,
        "attacks_per_second_inferred": 0.625,
        "damage": 275,
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
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "斯普林菲尔德. 58 口径步枪",
        "name_en": "Springfield .58 rifle",
        "description_zh": "这支步枪适合用来狩猎野生动物。",
        "description_en": "This rifle is suitable for hunting wild animals",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_firearms_musket_3 斯普林菲尔德. 58 口径步枪 springfield .58 rifle 这支步枪适合用来狩猎野生动物。 this rifle is suitable for hunting wild animals weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_range_firearms_musket_3"
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
            "value": 0.625,
            "unit": "次/秒",
            "display": "0.62 次/秒"
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
            "value": 4.5,
            "unit": "",
            "display": "4.5"
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
        "description": "inventory_stack_view_Weapon_range_firearms_musket_4_description",
        "full_description": "inventory_stack_view_Weapon_range_firearms_musket_4_description",
        "name": "inventory_stack_view_Weapon_range_firearms_musket_4_name",
        "rarity": "uncommon",
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
        "weapon_id": "wls2_weapon_range_firearms_musket_4"
      },
      "item_id": "wls2_weapon_range_firearms_musket_4",
      "localization": {
        "description_key": "inventory_stack_view_Weapon_range_firearms_musket_4_description",
        "en": {
          "description": "If you can master \"Brown Bess,\" you can master the West!",
          "full_description": "If you can master \"Brown Bess,\" you can master the West!",
          "name": "Brown Bess musket"
        },
        "full_description_key": "inventory_stack_view_Weapon_range_firearms_musket_4_description",
        "name_key": "inventory_stack_view_Weapon_range_firearms_musket_4_name",
        "zh": {
          "description": "如果你能驾驭得了“棕色贝丝”，那你就能驾驭西部世界",
          "full_description": "如果你能驾驭得了“棕色贝丝”，那你就能驾驭西部世界",
          "name": "棕贝斯火枪"
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
        "max_durability": {
          "default": 170
        },
        "penetrating_damage": {
          "default": 17
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 1.3,
        "attack_range": 4.5,
        "damage": 550,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_weapon_range_firearms_shotgun_3"
        ],
        "hit_sounds": [
          "wls2_weapon_range_firearms_shotgun_3"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Musket_Brown_Bess",
        "prefab_pbr_id": "@Musket_Brown_Bess_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_firearms_musket_4",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.6,
        "attack_damage_time": 0.3,
        "attack_ending_time": 1.3,
        "attack_range": 4.5,
        "attacks_per_second_inferred": 0.625,
        "damage": 550,
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
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "棕贝斯火枪",
        "name_en": "Brown Bess musket",
        "description_zh": "如果你能驾驭得了“棕色贝丝”，那你就能驾驭西部世界",
        "description_en": "If you can master \"Brown Bess,\" you can master the West!",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_firearms_musket_4 棕贝斯火枪 brown bess musket 如果你能驾驭得了“棕色贝丝”，那你就能驾驭西部世界 if you can master \"brown bess,\" you can master the west! weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_range_firearms_musket_4"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 550,
            "unit": "",
            "display": "550"
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
            "value": 170,
            "unit": "",
            "display": "170"
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
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "value": 17,
            "unit": "",
            "display": "17"
          },
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
        "description": "inventory_stack_view_wls2_weapon_range_firearms_pistol_1_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_firearms_pistol_1_description",
        "name": "inventory_stack_view_wls2_weapon_range_firearms_pistol_1_name",
        "rarity": "common",
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
        "weapon_id": "wls2_weapon_range_firearms_pistol_1"
      },
      "item_id": "wls2_weapon_range_firearms_pistol_1",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_firearms_pistol_1_description",
        "en": {
          "description": "A simple and not very reliable pistol, yet better than a knife or a club.",
          "full_description": "A simple and not very reliable pistol, yet better than a knife or a club.",
          "name": "Wheel Lock pistol"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_firearms_pistol_1_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_firearms_pistol_1_name",
        "zh": {
          "description": "一把简单且不太可靠的手枪，但比刀或棍棒更好。",
          "full_description": "一把简单且不太可靠的手枪，但比刀或棍棒更好。",
          "name": "轮锁手枪"
        }
      },
      "official_inclusion_status": "special_bound_legacy",
      "rarity": "common",
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
          "default": 60
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
          "type": "simple"
        },
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 3.5,
        "damage": 70,
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
        "prefab_common_id": "@Pistol_Wheellock",
        "prefab_pbr_id": "@Pistol_Wheellock_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_firearms_pistol_1",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.8333333333333334,
        "damage": 70,
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
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "轮锁手枪",
        "name_en": "Wheel Lock pistol",
        "description_zh": "一把简单且不太可靠的手枪，但比刀或棍棒更好。",
        "description_en": "A simple and not very reliable pistol, yet better than a knife or a club.",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_firearms_pistol_1 轮锁手枪 wheel lock pistol 一把简单且不太可靠的手枪，但比刀或棍棒更好。 a simple and not very reliable pistol, yet better than a knife or a club. weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_range_firearms_pistol_1"
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
            "value": 0.8333333333333334,
            "unit": "次/秒",
            "display": "0.83 次/秒"
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
        "description": "inventory_stack_view_wls_pepperbox_description",
        "full_description": "inventory_stack_view_wls_pepperbox_description",
        "name": "inventory_stack_view_wls_pepperbox_name",
        "rarity": "common",
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
        "weapon_id": "wls2_weapon_range_firearms_pistol_2"
      },
      "item_id": "wls2_weapon_range_firearms_pistol_2",
      "localization": {
        "description_key": "inventory_stack_view_wls_pepperbox_description",
        "en": {
          "description": "The first revolver. Simple and crude.",
          "full_description": "The first revolver. Simple and crude.",
          "name": "Pepperbox Gun"
        },
        "full_description_key": "inventory_stack_view_wls_pepperbox_description",
        "name_key": "inventory_stack_view_wls_pepperbox_name",
        "zh": {
          "description": "第一把左轮手枪，简单粗暴。",
          "full_description": "第一把左轮手枪，简单粗暴。",
          "name": "胡椒盒左轮手枪"
        }
      },
      "official_inclusion_status": "special_bound_legacy",
      "rarity": "common",
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
          "default": 90
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 3.5,
        "damage": 130,
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
      "weapon_id": "wls2_weapon_range_firearms_pistol_2",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.8333333333333334,
        "damage": 130,
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
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "胡椒盒左轮手枪",
        "name_en": "Pepperbox Gun",
        "description_zh": "第一把左轮手枪，简单粗暴。",
        "description_en": "The first revolver. Simple and crude.",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_firearms_pistol_2 胡椒盒左轮手枪 pepperbox gun 第一把左轮手枪，简单粗暴。 the first revolver. simple and crude. weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_range_firearms_pistol_2"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 130,
            "unit": "",
            "display": "130"
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
            "value": 90,
            "unit": "",
            "display": "90"
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
        "description": "inventory_stack_view_Weapon_range_firearms_pistol_3_description",
        "full_description": "inventory_stack_view_Weapon_range_firearms_pistol_3_description",
        "name": "inventory_stack_view_Weapon_range_firearms_pistol_3_name",
        "rarity": "uncommon",
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
        "weapon_id": "wls2_weapon_range_firearms_pistol_3"
      },
      "item_id": "wls2_weapon_range_firearms_pistol_3",
      "localization": {
        "description_key": "inventory_stack_view_Weapon_range_firearms_pistol_3_description",
        "en": {
          "description": "Challenging bandits to duels is a bad idea, but this pistol will help you thin their ranks",
          "full_description": "Challenging bandits to duels is a bad idea, but this pistol will help you thin their ranks",
          "name": "Flint dueling pistol"
        },
        "full_description_key": "inventory_stack_view_Weapon_range_firearms_pistol_3_description",
        "name_key": "inventory_stack_view_Weapon_range_firearms_pistol_3_name",
        "zh": {
          "description": "挑唆强盗引发冲突不是个好主意，但这把手枪能帮助你减少他们的数量",
          "full_description": "挑唆强盗引发冲突不是个好主意，但这把手枪能帮助你减少他们的数量",
          "name": "燧石决斗手枪"
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
        "max_durability": {
          "default": 135
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 3.5,
        "damage": 210,
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
      "weapon_id": "wls2_weapon_range_firearms_pistol_3",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.8333333333333334,
        "damage": 210,
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
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "燧石决斗手枪",
        "name_en": "Flint dueling pistol",
        "description_zh": "挑唆强盗引发冲突不是个好主意，但这把手枪能帮助你减少他们的数量",
        "description_en": "Challenging bandits to duels is a bad idea, but this pistol will help you thin their ranks",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_firearms_pistol_3 燧石决斗手枪 flint dueling pistol 挑唆强盗引发冲突不是个好主意，但这把手枪能帮助你减少他们的数量 challenging bandits to duels is a bad idea, but this pistol will help you thin their ranks weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_range_firearms_pistol_3"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 210,
            "unit": "",
            "display": "210"
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
            "value": 135,
            "unit": "",
            "display": "135"
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
        "description": "inventory_stack_view_wls_colt_description",
        "full_description": "inventory_stack_view_wls_colt_description",
        "name": "inventory_stack_view_wls_colt_name",
        "rarity": "rare",
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
        "weapon_id": "wls2_weapon_range_firearms_revolver_4"
      },
      "item_id": "wls2_weapon_range_firearms_revolver_4",
      "localization": {
        "description_key": "inventory_stack_view_wls_colt_description",
        "en": {
          "description": "The most popular gun in the Wild West",
          "full_description": "The most popular gun in the Wild West",
          "name": "Colt"
        },
        "full_description_key": "inventory_stack_view_wls_colt_description",
        "name_key": "inventory_stack_view_wls_colt_name",
        "zh": {
          "description": "狂野西部最受欢迎的手枪。",
          "full_description": "狂野西部最受欢迎的手枪。",
          "name": "柯尔特左轮手枪"
        }
      },
      "official_inclusion_status": "special_bound_legacy",
      "rarity": "rare",
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
          "default": 175
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 4,
        "damage": 473,
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
      "weapon_id": "wls2_weapon_range_firearms_revolver_4",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.5,
        "attack_range": 4,
        "attacks_per_second_inferred": 1.25,
        "damage": 473,
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
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "柯尔特左轮手枪",
        "name_en": "Colt",
        "description_zh": "狂野西部最受欢迎的手枪。",
        "description_en": "The most popular gun in the Wild West",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_firearms_revolver_4 柯尔特左轮手枪 colt 狂野西部最受欢迎的手枪。 the most popular gun in the wild west weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_range_firearms_revolver_4"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 473,
            "unit": "",
            "display": "473"
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
            "value": 175,
            "unit": "",
            "display": "175"
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
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "value": 14,
            "unit": "",
            "display": "14"
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
        "description": "inventory_stack_view_wls_schofield_description",
        "full_description": "inventory_stack_view_wls_schofield_description",
        "name": "inventory_stack_view_wls_schofield_name",
        "rarity": "rare",
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
        "weapon_id": "wls2_weapon_range_firearms_revolver_5"
      },
      "item_id": "wls2_weapon_range_firearms_revolver_5",
      "localization": {
        "description_key": "inventory_stack_view_wls_schofield_description",
        "en": {
          "description": "The best of the best revolver. ",
          "full_description": "The best of the best revolver. ",
          "name": "Schofield"
        },
        "full_description_key": "inventory_stack_view_wls_schofield_description",
        "name_key": "inventory_stack_view_wls_schofield_name",
        "zh": {
          "description": "最好的左轮手枪。",
          "full_description": "最好的左轮手枪。",
          "name": "斯科菲尔德左轮手枪"
        }
      },
      "official_inclusion_status": "special_bound_legacy",
      "rarity": "rare",
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
          "default": 250
        },
        "penetrating_damage": {
          "default": 45
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.35,
        "attack_range": 4,
        "damage": 893,
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
      "weapon_id": "wls2_weapon_range_firearms_revolver_5",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.6499999999999999,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.35,
        "attack_range": 4,
        "attacks_per_second_inferred": 1.5384615384615388,
        "damage": 893,
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
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "斯科菲尔德左轮手枪",
        "name_en": "Schofield",
        "description_zh": "最好的左轮手枪。",
        "description_en": "The best of the best revolver. ",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_firearms_revolver_5 斯科菲尔德左轮手枪 schofield 最好的左轮手枪。 the best of the best revolver.  weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_range_firearms_revolver_5"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 893,
            "unit": "",
            "display": "893"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 1.5384615384615388,
            "unit": "次/秒",
            "display": "1.54 次/秒"
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
            "value": 4,
            "unit": "",
            "display": "4"
          }
        ],
        "fixed": [
          {
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "value": 45,
            "unit": "",
            "display": "45"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 0.6499999999999999,
            "unit": "秒",
            "display": "0.65 秒"
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
        "description": "inventory_stack_view_Weapon_range_firearms_rifle_4_description",
        "full_description": "inventory_stack_view_Weapon_range_firearms_rifle_4_description",
        "name": "inventory_stack_view_Weapon_range_firearms_rifle_4_name",
        "rarity": "rare",
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
        "weapon_id": "wls2_weapon_range_firearms_rifle_4"
      },
      "item_id": "wls2_weapon_range_firearms_rifle_4",
      "localization": {
        "description_key": "inventory_stack_view_Weapon_range_firearms_rifle_4_description",
        "en": {
          "description": "Despite this gun's name, don't shoot it while riding horseback",
          "full_description": "Despite this gun's name, don't shoot it while riding horseback",
          "name": "Coachman's gun"
        },
        "full_description_key": "inventory_stack_view_Weapon_range_firearms_rifle_4_description",
        "name_key": "inventory_stack_view_Weapon_range_firearms_rifle_4_name",
        "zh": {
          "description": "虽然它叫这个名字，但千万不要在马背上射击",
          "full_description": "虽然它叫这个名字，但千万不要在马背上射击",
          "name": "马车夫之枪"
        }
      },
      "official_inclusion_status": "special_bound_legacy",
      "rarity": "rare",
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
          "default": 200
        },
        "penetrating_damage": {
          "default": 18
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.8,
        "attack_range": 6.5,
        "damage": 605,
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
        "prefab_common_id": "@Riffle_Dummy",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_firearms_rifle_4",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.1,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.8,
        "attack_range": 6.5,
        "attacks_per_second_inferred": 0.9090909090909091,
        "damage": 605,
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
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "马车夫之枪",
        "name_en": "Coachman's gun",
        "description_zh": "虽然它叫这个名字，但千万不要在马背上射击",
        "description_en": "Despite this gun's name, don't shoot it while riding horseback",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_firearms_rifle_4 马车夫之枪 coachman's gun 虽然它叫这个名字，但千万不要在马背上射击 despite this gun's name, don't shoot it while riding horseback weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_range_firearms_rifle_4"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 605,
            "unit": "",
            "display": "605"
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
            "value": 200,
            "unit": "",
            "display": "200"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 6.5,
            "unit": "",
            "display": "6.5"
          }
        ],
        "fixed": [
          {
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "value": 18,
            "unit": "",
            "display": "18"
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
        "description": "inventory_stack_view_wls_winchester_.45_description",
        "full_description": "inventory_stack_view_wls_winchester_.45_description",
        "name": "inventory_stack_view_wls_winchester_.45_name",
        "rarity": "epic",
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
        "weapon_id": "wls2_weapon_range_firearms_rifle_5"
      },
      "item_id": "wls2_weapon_range_firearms_rifle_5",
      "localization": {
        "description_key": "inventory_stack_view_wls_winchester_.45_description",
        "en": {
          "description": "Legend of the Wild West.",
          "full_description": "Legend of the Wild West.",
          "name": "Winchester .45 rifle"
        },
        "full_description_key": "inventory_stack_view_wls_winchester_.45_description",
        "name_key": "inventory_stack_view_wls_winchester_.45_name",
        "zh": {
          "description": "狂野西部中的传奇武器。",
          "full_description": "狂野西部中的传奇武器。",
          "name": "温彻斯特 .45 口径步枪"
        }
      },
      "official_inclusion_status": "special_bound_legacy",
      "rarity": "epic",
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
          "default": 300
        },
        "penetrating_damage": {
          "default": 55
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
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "damage": 1100,
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
        "prefab_common_id": "@Riffle_Winchester_45",
        "prefab_pbr_id": "@Riffle_Winchester_45_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_firearms_rifle_5",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.0,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.7,
        "attack_range": 6,
        "attacks_per_second_inferred": 1.0,
        "damage": 1100,
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
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "温彻斯特 .45 口径步枪",
        "name_en": "Winchester .45 rifle",
        "description_zh": "狂野西部中的传奇武器。",
        "description_en": "Legend of the Wild West.",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_range_firearms_rifle_5 温彻斯特 .45 口径步枪 winchester .45 rifle 狂野西部中的传奇武器。 legend of the wild west. weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_range_firearms_rifle_5"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 1100,
            "unit": "",
            "display": "1100"
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
            "value": 300,
            "unit": "",
            "display": "300"
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
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "value": 55,
            "unit": "",
            "display": "55"
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
        "description": "inventory_stack_view_Weapon_range_firearms_rifle_4_description",
        "full_description": "inventory_stack_view_Weapon_range_firearms_rifle_4_description",
        "name": "inventory_stack_view_Weapon_range_firearms_rifle_4_name",
        "rarity": "common",
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
        "weapon_id": "wls2_weapon_range_firearms_shotgun_2"
      },
      "item_id": "wls2_weapon_range_firearms_shotgun_2",
      "localization": {
        "description_key": "inventory_stack_view_Weapon_range_firearms_rifle_4_description",
        "en": {
          "description": "Despite this gun's name, don't shoot it while riding horseback",
          "full_description": "Despite this gun's name, don't shoot it while riding horseback",
          "name": "Coachman's gun"
        },
        "full_description_key": "inventory_stack_view_Weapon_range_firearms_rifle_4_description",
        "name_key": "inventory_stack_view_Weapon_range_firearms_rifle_4_name",
        "zh": {
          "description": "虽然它叫这个名字，但千万不要在马背上射击",
          "full_description": "虽然它叫这个名字，但千万不要在马背上射击",
          "name": "马车夫之枪"
        }
      },
      "official_inclusion_status": "special_bound_legacy",
      "rarity": "common",
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
          "default": 90
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
          "angle": 40,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.05,
        "attack_ending_time": 1.05,
        "attack_range": 3.5,
        "damage": 145,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_weapon_range_firearms_shotgun_2"
        ],
        "hit_sounds": [
          "wls2_weapon_range_firearms_shotgun_2"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Riffle_Winchester_45",
        "prefab_pbr_id": "@Riffle_Winchester_45_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_range_firearms_shotgun_2",
      "weapon_summary": {
        "attack_action": {
          "angle": 40,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.1,
        "attack_damage_time": 0.05,
        "attack_ending_time": 1.05,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.9090909090909091,
        "damage": 145,
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
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "马车夫之枪",
        "name_en": "Coachman's gun",
        "description_zh": "虽然它叫这个名字，但千万不要在马背上射击",
        "description_en": "Despite this gun's name, don't shoot it while riding horseback",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_firearms_shotgun_2 马车夫之枪 coachman's gun 虽然它叫这个名字，但千万不要在马背上射击 despite this gun's name, don't shoot it while riding horseback weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_range_firearms_shotgun_2"
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
            "value": 0.9090909090909091,
            "unit": "次/秒",
            "display": "0.91 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 90,
            "unit": "",
            "display": "90"
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
          },
          {
            "key": "attack_angle",
            "label": "攻击扇面",
            "value": 40,
            "unit": "°",
            "display": "40°"
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
        "description": "inventory_stack_view_wls_break-open_shotgun_description",
        "full_description": "inventory_stack_view_wls_break-open_shotgun_description",
        "name": "inventory_stack_view_wls_break-open_shotgun_name",
        "rarity": "uncommon",
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
        "weapon_id": "wls2_weapon_range_firearms_shotgun_3"
      },
      "item_id": "wls2_weapon_range_firearms_shotgun_3",
      "localization": {
        "description_key": "inventory_stack_view_wls_break-open_shotgun_description",
        "en": {
          "description": "The sawn off barrels makes this gun more deadly than a regular shotgun",
          "full_description": "The sawn off barrels makes this gun more deadly than a regular shotgun",
          "name": "Break-open shotgun"
        },
        "full_description_key": "inventory_stack_view_wls_break-open_shotgun_description",
        "name_key": "inventory_stack_view_wls_break-open_shotgun_name",
        "zh": {
          "description": "折叠枪比普通的枪支威力更大。",
          "full_description": "折叠枪比普通的枪支威力更大。",
          "name": "折管式散弹枪"
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
        "max_durability": {
          "default": 135
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
          "angle": 40,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.05,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "damage": 220,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_weapon_range_firearms_shotgun_3"
        ],
        "hit_sounds": [
          "wls2_weapon_range_firearms_shotgun_3"
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
      "weapon_id": "wls2_weapon_range_firearms_shotgun_3",
      "weapon_summary": {
        "attack_action": {
          "angle": 40,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.05,
        "attack_damage_time": 0.05,
        "attack_ending_time": 1,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.9523809523809523,
        "damage": 220,
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
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "折管式散弹枪",
        "name_en": "Break-open shotgun",
        "description_zh": "折叠枪比普通的枪支威力更大。",
        "description_en": "The sawn off barrels makes this gun more deadly than a regular shotgun",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_firearms_shotgun_3 折管式散弹枪 break-open shotgun 折叠枪比普通的枪支威力更大。 the sawn off barrels makes this gun more deadly than a regular shotgun weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_range_firearms_shotgun_3"
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
            "value": 0.9523809523809523,
            "unit": "次/秒",
            "display": "0.95 次/秒"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 135,
            "unit": "",
            "display": "135"
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
            "value": 1.05,
            "unit": "秒",
            "display": "1.05 秒"
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
            "value": 40,
            "unit": "°",
            "display": "40°"
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
        "description": "inventory_stack_view_wls_fast_load_shotgun_description",
        "full_description": "inventory_stack_view_wls_fast_load_shotgun_description",
        "name": "inventory_stack_view_wls_fast_load_shotgun_name",
        "rarity": "uncommon",
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
        "weapon_id": "wls2_weapon_range_firearms_shotgun_4"
      },
      "item_id": "wls2_weapon_range_firearms_shotgun_4",
      "localization": {
        "description_key": "inventory_stack_view_wls_fast_load_shotgun_description",
        "en": {
          "description": "Fast and powerful gun that can stop any opponent",
          "full_description": "Fast and powerful gun that can stop any opponent",
          "name": "Fast load shotgun"
        },
        "full_description_key": "inventory_stack_view_wls_fast_load_shotgun_description",
        "name_key": "inventory_stack_view_wls_fast_load_shotgun_name",
        "zh": {
          "description": "快速且强大的散弹枪，能够阻止任何对手。",
          "full_description": "快速且强大的散弹枪，能够阻止任何对手。",
          "name": "快速装填散弹枪"
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
        "max_durability": {
          "default": 200
        },
        "penetrating_damage": {
          "default": 6
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
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.05,
        "attack_ending_time": 0.95,
        "attack_range": 3.5,
        "damage": 380,
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
        "prefab_common_id": "@Shotgun_FastLoad",
        "prefab_pbr_id": "@Shotgun_FastLoad_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_range_firearms_shotgun_4",
      "weapon_summary": {
        "attack_action": {
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.0,
        "attack_damage_time": 0.05,
        "attack_ending_time": 0.95,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 1.0,
        "damage": 380,
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
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "快速装填散弹枪",
        "name_en": "Fast load shotgun",
        "description_zh": "快速且强大的散弹枪，能够阻止任何对手。",
        "description_en": "Fast and powerful gun that can stop any opponent",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_firearms_shotgun_4 快速装填散弹枪 fast load shotgun 快速且强大的散弹枪，能够阻止任何对手。 fast and powerful gun that can stop any opponent weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_range_firearms_shotgun_4"
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
            "value": 1.0,
            "unit": "次/秒",
            "display": "1 次/秒"
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
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "value": 6,
            "unit": "",
            "display": "6"
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
        "description": "inventory_stack_view_wls_henry_.44_description",
        "full_description": "inventory_stack_view_wls_henry_.44_description",
        "name": "inventory_stack_view_wls_henry_.44_name",
        "rarity": "rare",
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
        "weapon_id": "wls2_weapon_range_firearms_shotgun_5"
      },
      "item_id": "wls2_weapon_range_firearms_shotgun_5",
      "localization": {
        "description_key": "inventory_stack_view_wls_henry_.44_description",
        "en": {
          "description": "The lever principle rifle, shoots revolver rounds",
          "full_description": "The lever principle rifle, shoots revolver rounds",
          "name": "Henry .44 rifle"
        },
        "full_description_key": "inventory_stack_view_wls_henry_.44_description",
        "name_key": "inventory_stack_view_wls_henry_.44_name",
        "zh": {
          "description": "运用杠杆原理的步枪，发射左轮手枪的子弹。",
          "full_description": "运用杠杆原理的步枪，发射左轮手枪的子弹。",
          "name": "亨利 .44 步枪"
        }
      },
      "official_inclusion_status": "special_bound_legacy",
      "rarity": "rare",
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
          "default": 300
        },
        "penetrating_damage": {
          "default": 17
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
          "angle": 50,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.05,
        "attack_ending_time": 0.9,
        "attack_range": 3.5,
        "damage": 675,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_henry_44"
        ],
        "hit_sounds": [
          "wls_henry_44"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "max_damage": 2.5,
        "prefab_common_id": "@Riffle_Henry44",
        "prefab_pbr_id": "@Riffle_Henry44_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_weapon_range_firearms_shotgun_5",
      "weapon_summary": {
        "attack_action": {
          "angle": 50,
          "radius": 4,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 0.9500000000000001,
        "attack_damage_time": 0.05,
        "attack_ending_time": 0.9,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 1.0526315789473684,
        "damage": 675,
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
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "亨利 .44 步枪",
        "name_en": "Henry .44 rifle",
        "description_zh": "运用杠杆原理的步枪，发射左轮手枪的子弹。",
        "description_en": "The lever principle rifle, shoots revolver rounds",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_firearms_shotgun_5 亨利 .44 步枪 henry .44 rifle 运用杠杆原理的步枪，发射左轮手枪的子弹。 the lever principle rifle, shoots revolver rounds weapon 武器 other_weapon weapon weapon_storage quick wls2_weapon_range_firearms_shotgun_5"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 675,
            "unit": "",
            "display": "675"
          },
          {
            "key": "attack_rate",
            "label": "基础攻速（估算）",
            "value": 1.0526315789473684,
            "unit": "次/秒",
            "display": "1.05 次/秒"
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
            "value": 3.5,
            "unit": "",
            "display": "3.5"
          }
        ],
        "fixed": [
          {
            "key": "penetrating_damage",
            "label": "穿刺伤害",
            "value": 17,
            "unit": "",
            "display": "17"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 0.9500000000000001,
            "unit": "秒",
            "display": "0.95 秒"
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
            "value": 50,
            "unit": "°",
            "display": "50°"
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
        "description": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "name": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary07/wls2_halloween_range_revolver",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon",
          "festive"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_halloween_23_pistol_2"
      },
      "item_id": "wls2_weapon_range_halloween_23_pistol_2",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "en": {
          "description": "This gun strikes fear into all the spirits across the Wild West",
          "full_description": "This gun strikes fear into all the spirits across the Wild West",
          "name": "Terror of Spirits"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_name",
        "zh": {
          "description": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
          "full_description": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
          "name": "恶灵的恐怖"
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
                "wls2_resourse_fourfold_gunparts_2": 3,
                "wls2_resourse_fourfold_nails_2": 2,
                "wls2_resourse_secondary_ingot_2": 4
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_range_halloween_23_pistol_2"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_range_halloween_23_pistol_2_recycle"
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
            "stack_id": "wls2_weapon_range_halloween_23_pistol_2",
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
            "stack_id": "wls2_weapon_range_halloween_23_pistol_2",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary07/wls2_halloween_range_revolver",
      "stat_curves": {
        "damage": {
          "1": 155,
          "2": 170,
          "3": 186,
          "4": 201,
          "5": 217,
          "per_level_after_max": 1
        },
        "ghost_damage_modifier": {
          "default": 0.5
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
        "ghost_damage_modifier": {
          "definition": {
            "is_percent": true,
            "name_value_format": "ui_item_stats_ghost_damage",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_ghost_damage",
          "en": "Damage to ghosts increased by {0}",
          "zh": "对幽灵的伤害增加 {0}"
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
        "fire_weapon",
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
        "prefab_common_id": "@Revolver_hw23",
        "prefab_pbr_id": "@Revolver_hw23_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_halloween_23_pistol_2",
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
      "image_key": "dd1ce2c981e1f8db3aea5221fc903d64f2725ee6eb1e76b5fac9e36bbb30e04c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "恶灵的恐怖",
        "name_en": "Terror of Spirits",
        "description_zh": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
        "description_en": "This gun strikes fear into all the spirits across the Wild West",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_range_halloween_23_pistol_2 恶灵的恐怖 terror of spirits 这把枪在整个西部荒野中引起了所有灵魂的恐惧 this gun strikes fear into all the spirits across the wild west weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon festive wls2_weapon_range_halloween_23_pistol_2"
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
            "value": 1.25,
            "unit": "次/秒",
            "display": "1.25 次/秒"
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
            "value": 5,
            "unit": "",
            "display": "5"
          }
        ],
        "fixed": [
          {
            "key": "ghost_damage_modifier",
            "label": "对幽灵伤害加成",
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
        "description": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "name": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary07/wls2_halloween_range_revolver",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_halloween_23_pistol_3"
      },
      "item_id": "wls2_weapon_range_halloween_23_pistol_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "en": {
          "description": "This gun strikes fear into all the spirits across the Wild West",
          "full_description": "This gun strikes fear into all the spirits across the Wild West",
          "name": "Terror of Spirits"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_name",
        "zh": {
          "description": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
          "full_description": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
          "name": "恶灵的恐怖"
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
                "wls2_resourse_fourfold_gunparts_3": 3,
                "wls2_resourse_fourfold_nails_3": 7,
                "wls2_resourse_secondary_ingot_3": 7
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_range_halloween_23_pistol_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_range_halloween_23_pistol_3_recycle"
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
            "stack_id": "wls2_weapon_range_halloween_23_pistol_3",
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
            "stack_id": "wls2_weapon_range_halloween_23_pistol_3",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary07/wls2_halloween_range_revolver",
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
        "ghost_damage_modifier": {
          "default": 0.5
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
        "ghost_damage_modifier": {
          "definition": {
            "is_percent": true,
            "name_value_format": "ui_item_stats_ghost_damage",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_ghost_damage",
          "en": "Damage to ghosts increased by {0}",
          "zh": "对幽灵的伤害增加 {0}"
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
        "fire_weapon",
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
        "prefab_common_id": "@Revolver_hw23",
        "prefab_pbr_id": "@Revolver_hw23_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_halloween_23_pistol_3",
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
      "image_key": "dd1ce2c981e1f8db3aea5221fc903d64f2725ee6eb1e76b5fac9e36bbb30e04c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "恶灵的恐怖",
        "name_en": "Terror of Spirits",
        "description_zh": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
        "description_en": "This gun strikes fear into all the spirits across the Wild West",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_range_halloween_23_pistol_3 恶灵的恐怖 terror of spirits 这把枪在整个西部荒野中引起了所有灵魂的恐惧 this gun strikes fear into all the spirits across the wild west weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon festive wls2_weapon_range_halloween_23_pistol_3"
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
            "key": "ghost_damage_modifier",
            "label": "对幽灵伤害加成",
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
        "description": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "name": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary07/wls2_halloween_range_revolver",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_halloween_23_pistol_4"
      },
      "item_id": "wls2_weapon_range_halloween_23_pistol_4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "en": {
          "description": "This gun strikes fear into all the spirits across the Wild West",
          "full_description": "This gun strikes fear into all the spirits across the Wild West",
          "name": "Terror of Spirits"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_name",
        "zh": {
          "description": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
          "full_description": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
          "name": "恶灵的恐怖"
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
                "wls2_resourse_fourfold_gunparts_4": 3,
                "wls2_resourse_fourfold_nails_4": 7,
                "wls2_resourse_secondary_ingot_4": 7
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_range_halloween_23_pistol_4"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_range_halloween_23_pistol_4_recycle"
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
            "stack_id": "wls2_weapon_range_halloween_23_pistol_4",
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
            "stack_id": "wls2_weapon_range_halloween_23_pistol_4",
            "transaction_id": "transaction_iap_wls_5_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary07/wls2_halloween_range_revolver",
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
        "ghost_damage_modifier": {
          "default": 0.5
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
        "ghost_damage_modifier": {
          "definition": {
            "is_percent": true,
            "name_value_format": "ui_item_stats_ghost_damage",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_ghost_damage",
          "en": "Damage to ghosts increased by {0}",
          "zh": "对幽灵的伤害增加 {0}"
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
        "fire_weapon",
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
        "prefab_common_id": "@Revolver_hw23",
        "prefab_pbr_id": "@Revolver_hw23_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_halloween_23_pistol_4",
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
      "image_key": "dd1ce2c981e1f8db3aea5221fc903d64f2725ee6eb1e76b5fac9e36bbb30e04c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "恶灵的恐怖",
        "name_en": "Terror of Spirits",
        "description_zh": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
        "description_en": "This gun strikes fear into all the spirits across the Wild West",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_range_halloween_23_pistol_4 恶灵的恐怖 terror of spirits 这把枪在整个西部荒野中引起了所有灵魂的恐惧 this gun strikes fear into all the spirits across the wild west weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon festive wls2_weapon_range_halloween_23_pistol_4"
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
            "key": "ghost_damage_modifier",
            "label": "对幽灵伤害加成",
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
        "description": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "name": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary07/wls2_halloween_range_revolver",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon",
          "festive"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_halloween_23_pistol_5"
      },
      "item_id": "wls2_weapon_range_halloween_23_pistol_5",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "en": {
          "description": "This gun strikes fear into all the spirits across the Wild West",
          "full_description": "This gun strikes fear into all the spirits across the Wild West",
          "name": "Terror of Spirits"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_name",
        "zh": {
          "description": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
          "full_description": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
          "name": "恶灵的恐怖"
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
                "wls2_resourse_fourfold_gunparts_5": 3,
                "wls2_resourse_fourfold_nails_4": 7,
                "wls2_resourse_secondary_ingot_5": 7
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_range_halloween_23_pistol_5"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_range_halloween_23_pistol_5_recycle"
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
            "stack_id": "wls2_weapon_range_halloween_23_pistol_5",
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
            "stack_id": "wls2_weapon_range_halloween_23_pistol_5",
            "transaction_id": "transaction_iap_wls_8_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary07/wls2_halloween_range_revolver",
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
        "ghost_damage_modifier": {
          "default": 0.5
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
        "ghost_damage_modifier": {
          "definition": {
            "is_percent": true,
            "name_value_format": "ui_item_stats_ghost_damage",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_ghost_damage",
          "en": "Damage to ghosts increased by {0}",
          "zh": "对幽灵的伤害增加 {0}"
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
        "fire_weapon",
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
        "prefab_common_id": "@Revolver_hw23",
        "prefab_pbr_id": "@Revolver_hw23_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_halloween_23_pistol_5",
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
      "image_key": "dd1ce2c981e1f8db3aea5221fc903d64f2725ee6eb1e76b5fac9e36bbb30e04c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "恶灵的恐怖",
        "name_en": "Terror of Spirits",
        "description_zh": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
        "description_en": "This gun strikes fear into all the spirits across the Wild West",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_range_halloween_23_pistol_5 恶灵的恐怖 terror of spirits 这把枪在整个西部荒野中引起了所有灵魂的恐惧 this gun strikes fear into all the spirits across the wild west weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon festive wls2_weapon_range_halloween_23_pistol_5"
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
            "key": "ghost_damage_modifier",
            "label": "对幽灵伤害加成",
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
        "description": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "name": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary07/wls2_halloween_range_revolver",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon",
          "festive"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_halloween_23_pistol_6"
      },
      "item_id": "wls2_weapon_range_halloween_23_pistol_6",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "en": {
          "description": "This gun strikes fear into all the spirits across the Wild West",
          "full_description": "This gun strikes fear into all the spirits across the Wild West",
          "name": "Terror of Spirits"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_name",
        "zh": {
          "description": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
          "full_description": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
          "name": "恶灵的恐怖"
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
                "wls2_resourse_fourfold_gunparts_6": 3,
                "wls2_resourse_fourfold_nails_5": 7,
                "wls2_resourse_secondary_ingot_6": 7
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_range_halloween_23_pistol_6"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_range_halloween_23_pistol_6_recycle"
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
            "stack_id": "wls2_weapon_range_halloween_23_pistol_6",
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
            "stack_id": "wls2_weapon_range_halloween_23_pistol_6",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary07/wls2_halloween_range_revolver",
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
        "ghost_damage_modifier": {
          "default": 0.5
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
        "ghost_damage_modifier": {
          "definition": {
            "is_percent": true,
            "name_value_format": "ui_item_stats_ghost_damage",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_ghost_damage",
          "en": "Damage to ghosts increased by {0}",
          "zh": "对幽灵的伤害增加 {0}"
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
        "fire_weapon",
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
        "prefab_common_id": "@Revolver_hw23",
        "prefab_pbr_id": "@Revolver_hw23_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_halloween_23_pistol_6",
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
      "image_key": "dd1ce2c981e1f8db3aea5221fc903d64f2725ee6eb1e76b5fac9e36bbb30e04c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "恶灵的恐怖",
        "name_en": "Terror of Spirits",
        "description_zh": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
        "description_en": "This gun strikes fear into all the spirits across the Wild West",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_range_halloween_23_pistol_6 恶灵的恐怖 terror of spirits 这把枪在整个西部荒野中引起了所有灵魂的恐惧 this gun strikes fear into all the spirits across the wild west weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon festive wls2_weapon_range_halloween_23_pistol_6"
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
            "key": "ghost_damage_modifier",
            "label": "对幽灵伤害加成",
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
        "description": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "name": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_name",
        "rarity": "epic",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary07/wls2_halloween_range_revolver",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "pistol",
          "fire_weapon",
          "festive"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_halloween_23_pistol_7"
      },
      "item_id": "wls2_weapon_range_halloween_23_pistol_7",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "en": {
          "description": "This gun strikes fear into all the spirits across the Wild West",
          "full_description": "This gun strikes fear into all the spirits across the Wild West",
          "name": "Terror of Spirits"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_name",
        "zh": {
          "description": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
          "full_description": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
          "name": "恶灵的恐怖"
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
                "wls2_resourse_fourfold_gunparts_7": 3,
                "wls2_resourse_fourfold_nails_6": 7,
                "wls2_resourse_secondary_ingot_7": 7
              },
              "result": {
                "inventory_stack_id": "wls2_weapon_range_halloween_23_pistol_7"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_weapon_range_halloween_23_pistol_7_recycle"
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
            "stack_id": "wls2_weapon_range_halloween_23_pistol_7",
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
            "stack_id": "wls2_weapon_range_halloween_23_pistol_7",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary07/wls2_halloween_range_revolver",
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
          "3": 2969,
          "4": 3216,
          "5": 3464,
          "per_level_after_max": 1
        },
        "ghost_damage_modifier": {
          "default": 0.5
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
          "4": 192,
          "5": 207
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
        "ghost_damage_modifier": {
          "definition": {
            "is_percent": true,
            "name_value_format": "ui_item_stats_ghost_damage",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_ghost_damage",
          "en": "Damage to ghosts increased by {0}",
          "zh": "对幽灵的伤害增加 {0}"
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
        "fire_weapon",
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
        "prefab_common_id": "@Revolver_hw23",
        "prefab_pbr_id": "@Revolver_hw23_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_halloween_23_pistol_7",
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
      "image_key": "dd1ce2c981e1f8db3aea5221fc903d64f2725ee6eb1e76b5fac9e36bbb30e04c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "恶灵的恐怖",
        "name_en": "Terror of Spirits",
        "description_zh": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
        "description_en": "This gun strikes fear into all the spirits across the Wild West",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "史诗",
        "search_text": "wls2_weapon_range_halloween_23_pistol_7 恶灵的恐怖 terror of spirits 这把枪在整个西部荒野中引起了所有灵魂的恐惧 this gun strikes fear into all the spirits across the wild west weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon festive wls2_weapon_range_halloween_23_pistol_7"
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
            "key": "ghost_damage_modifier",
            "label": "对幽灵伤害加成",
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
              "damage": 2969,
              "penetrating_damage": 178
            },
            "display": {
              "critical_hit_chance": "20%",
              "damage": "2969",
              "penetrating_damage": "178"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.25,
              "damage": 3216,
              "penetrating_damage": 192
            },
            "display": {
              "critical_hit_chance": "25%",
              "damage": "3216",
              "penetrating_damage": "192"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 3464,
              "penetrating_damage": 207
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "3464",
              "penetrating_damage": "207"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.3,
              "damage": 3465,
              "penetrating_damage": 207
            },
            "display": {
              "critical_hit_chance": "30%",
              "damage": "3465",
              "penetrating_damage": "207"
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
          "伤害：6 级起每级增加 1，最高 4464。",
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
        "description": "inventory_stack_view_wls2_weapon_range_musket_2_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_musket_2_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_range_musket_2_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary05/wls_indian_musket",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "rifle",
          "fire_weapon",
          "festive"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_musket_2_uncommon"
      },
      "item_id": "wls2_weapon_range_musket_2_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_musket_2_uncommon_description",
        "en": {
          "description": "Shows the excellent Indigenous craftsmanship ",
          "full_description": "Shows the excellent Indigenous craftsmanship ",
          "name": "Kentucky Musket"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_musket_2_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_musket_2_uncommon_name",
        "zh": {
          "description": "这把火绳枪展示了美洲原住民巧夺天工的制作工艺",
          "full_description": "这把火绳枪展示了美洲原住民巧夺天工的制作工艺",
          "name": "印第安人滑膛枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_2": 4,
            "wls2_resourse_fourfold_nails_2": 2,
            "wls2_resourse_secondary_ingot_2": 6,
            "wls2_resourse_secondary_plank_2": 4
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
                "inventory_stack_id": "wls2_weapon_range_musket_2_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_50coins_dynamic_smuggler_offer_musket_2"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_musket_2_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_musket_2_uncommon"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls_indian_musket",
      "stat_curves": {
        "damage": {
          "1": 183,
          "2": 201,
          "3": 220,
          "4": 238,
          "5": 256,
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
      "subcategory": "rifle",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "rifle",
        "fire_weapon",
        "festive"
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
        "attack_ending_time": 1.4,
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls_musket_03"
        ],
        "hit_sounds": [
          "wls_musket_03"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Mushket_Indian",
        "prefab_pbr_id": "@Mushket_Indian_pbr",
        "speed_modifier": 1,
        "tags": [
          "firearm",
          "ranged",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_musket_2_uncommon",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.7,
        "attack_damage_time": 0.3,
        "attack_ending_time": 1.4,
        "attack_range": 5,
        "attacks_per_second_inferred": 0.5882352941176471,
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
      "image_key": "a0127ab29d23c081678fcbcd8229edd5a24a01504900fa12f64fd6a2d772a8eb",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "印第安人滑膛枪",
        "name_en": "Kentucky Musket",
        "description_zh": "这把火绳枪展示了美洲原住民巧夺天工的制作工艺",
        "description_en": "Shows the excellent Indigenous craftsmanship ",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_musket_2_uncommon 印第安人滑膛枪 kentucky musket 这把火绳枪展示了美洲原住民巧夺天工的制作工艺 shows the excellent indigenous craftsmanship  weapon 武器 rifle weapon weapon_storage quick rifle fire_weapon festive wls2_weapon_range_musket_2_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 183,
            "unit": "",
            "display": "183"
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
            "value": 5,
            "unit": "",
            "display": "5"
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
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "damage": 183
            },
            "display": {
              "damage": "183"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 201
            },
            "display": {
              "damage": "201"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 220
            },
            "display": {
              "damage": "220"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 238
            },
            "display": {
              "damage": "238"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 256
            },
            "display": {
              "damage": "256"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 257
            },
            "display": {
              "damage": "257"
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
          "伤害：6 级起每级增加 1，最高 1256。",
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
        "description": "inventory_stack_view_wls2_weapon_range_musket_3_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_musket_3_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_musket_3_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_range_musket_3_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary05/wls_springfield_.58",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "rifle",
          "fire_weapon"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_musket_3_common"
      },
      "item_id": "wls2_weapon_range_musket_3_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_musket_3_common_description",
        "en": {
          "description": "This rifle is suitable for hunting wild animals",
          "full_description": "This rifle is suitable for hunting wild animals",
          "name": "Springfield .58 rifle"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_musket_3_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_musket_3_common_name",
        "zh": {
          "description": "这支步枪适合用来狩猎野生动物。",
          "full_description": "这支步枪适合用来狩猎野生动物。",
          "name": "斯普林菲尔德.58 步枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_3": 2,
            "wls2_resourse_fourfold_nails_3": 1,
            "wls2_resourse_secondary_ingot_3": 4,
            "wls2_resourse_secondary_plank_3": 3
          },
          "learn_exp": 400,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_musket_3_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_100coins_dynamic_smuggler_offer_musket_3"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls_springfield_.58",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.1
        },
        "damage": {
          "1": 233,
          "2": 256,
          "3": 281,
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
        "attack_ending_time": 1.4,
        "attack_range": 5,
        "durability_price": 1,
        "hit_empty_sounds": [
          "wls2_weapon_range_musket_3_common"
        ],
        "hit_sounds": [
          "wls2_weapon_range_musket_3_common"
        ],
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "prefab_common_id": "@Mushket_Springfield_58",
        "prefab_pbr_id": "@Mushket_Springfield_58_pbr",
        "speed_modifier": 1,
        "tags": [
          "firearm",
          "ranged",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_musket_3_common",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.7,
        "attack_damage_time": 0.3,
        "attack_ending_time": 1.4,
        "attack_range": 5,
        "attacks_per_second_inferred": 0.5882352941176471,
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
      "image_key": "1cd340ad871ae5a844eed24bf6ad20cf7ae2130019c7a120b7e79a94cebe92eb",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "斯普林菲尔德.58 步枪",
        "name_en": "Springfield .58 rifle",
        "description_zh": "这支步枪适合用来狩猎野生动物。",
        "description_en": "This rifle is suitable for hunting wild animals",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_musket_3_common 斯普林菲尔德.58 步枪 springfield .58 rifle 这支步枪适合用来狩猎野生动物。 this rifle is suitable for hunting wild animals weapon 武器 rifle weapon weapon_storage quick rifle fire_weapon wls2_weapon_range_musket_3_common"
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
            "value": 0.5882352941176471,
            "unit": "次/秒",
            "display": "0.59 次/秒"
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
            "value": 5,
            "unit": "",
            "display": "5"
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
              "damage": 233
            },
            "display": {
              "damage": "233"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 256
            },
            "display": {
              "damage": "256"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 281
            },
            "display": {
              "damage": "281"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 304
            },
            "display": {
              "damage": "304"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 327
            },
            "display": {
              "damage": "327"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 328
            },
            "display": {
              "damage": "328"
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_weapon_range_musket_3_rare_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_musket_3_rare_description",
        "name": "inventory_stack_view_wls2_weapon_range_musket_3_rare_name",
        "rarity": "rare",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_musket_3_rare_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "rifle",
          "fire_weapon"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_musket_3_rare"
      },
      "item_id": "wls2_weapon_range_musket_3_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_musket_3_rare_description",
        "en": {
          "description": "A single-shot rifle designed by Christian Sharps",
          "full_description": "A single-shot rifle designed by Christian Sharps",
          "name": "Sharps rifle"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_musket_3_rare_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_musket_3_rare_name",
        "zh": {
          "description": "由克里斯蒂安·夏普斯设计的单发步枪",
          "full_description": "由克里斯蒂安·夏普斯设计的单发步枪",
          "name": "夏普步枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_3": 5,
            "wls2_resourse_fourfold_nails_3": 3,
            "wls2_resourse_secondary_ingot_3": 8,
            "wls2_resourse_secondary_plank_3": 5
          },
          "learn_exp": 800,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_20_a",
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
            "level_max": 70,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_weapon_range_musket_3_rare",
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
            "stack_id": "wls2_weapon_range_musket_3_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_musket_3_rare_icon",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.1
        },
        "damage": {
          "1": 455,
          "2": 501,
          "3": 546,
          "4": 592,
          "5": 637,
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
        "attack_ending_time": 1.4,
        "attack_range": 5,
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
        "prefab_common_id": "@Mushket_Sharps_Carbine",
        "prefab_pbr_id": "@Mushket_Sharps_Carbine_pbr",
        "speed_modifier": 1,
        "tags": [
          "firearm",
          "ranged",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_musket_3_rare",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.7,
        "attack_damage_time": 0.3,
        "attack_ending_time": 1.4,
        "attack_range": 5,
        "attacks_per_second_inferred": 0.5882352941176471,
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
      "image_key": "15aacb00d0e8beef6fd194ef225a590d7ed1ac8ca624b72f4da818f9c43ebf4e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "夏普步枪",
        "name_en": "Sharps rifle",
        "description_zh": "由克里斯蒂安·夏普斯设计的单发步枪",
        "description_en": "A single-shot rifle designed by Christian Sharps",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "稀有",
        "search_text": "wls2_weapon_range_musket_3_rare 夏普步枪 sharps rifle 由克里斯蒂安·夏普斯设计的单发步枪 a single-shot rifle designed by christian sharps weapon 武器 rifle weapon weapon_storage quick rifle fire_weapon wls2_weapon_range_musket_3_rare"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 455,
            "unit": "",
            "display": "455"
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
            "key": "animal_damage_modifier",
            "label": "对动物伤害加成",
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
              "damage": 455,
              "slow_time": 0.5
            },
            "display": {
              "damage": "455",
              "slow_time": "0.5 秒"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 501,
              "slow_time": 0.75
            },
            "display": {
              "damage": "501",
              "slow_time": "0.75 秒"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 546,
              "slow_time": 1
            },
            "display": {
              "damage": "546",
              "slow_time": "1 秒"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 592,
              "slow_time": 1.25
            },
            "display": {
              "damage": "592",
              "slow_time": "1.25 秒"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 637,
              "slow_time": 1.5
            },
            "display": {
              "damage": "637",
              "slow_time": "1.5 秒"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 638,
              "slow_time": 1.5
            },
            "display": {
              "damage": "638",
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
          "伤害：6 级起每级增加 1，最高 1637。",
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
        "description": "inventory_stack_view_wls2_weapon_range_musket_3_uncommon_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_musket_3_uncommon_description",
        "name": "inventory_stack_view_wls2_weapon_range_musket_3_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_musket_3_uncommon_icon",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "rifle",
          "fire_weapon"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_weapon_range_musket_3_uncommon"
      },
      "item_id": "wls2_weapon_range_musket_3_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_musket_3_uncommon_description",
        "en": {
          "description": "Compact and light weapon",
          "full_description": "Compact and light weapon",
          "name": "Smith carbine"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_musket_3_uncommon_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_musket_3_uncommon_name",
        "zh": {
          "description": "紧凑且轻便的武器",
          "full_description": "紧凑且轻便的武器",
          "name": "史密斯卡宾枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_3": 4,
            "wls2_resourse_fourfold_nails_3": 2,
            "wls2_resourse_secondary_ingot_3": 6,
            "wls2_resourse_secondary_plank_3": 4
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
                "inventory_stack_id": "wls2_weapon_range_musket_3_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_event_trader_offer_musket_3_uncommon"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_musket_3_uncommon_icon",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.1
        },
        "damage": {
          "1": 322,
          "2": 354,
          "3": 386,
          "4": 419,
          "5": 451,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 116,
          "2": 116,
          "3": 116,
          "4": 116,
          "5": 116
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
        "attack_ending_time": 1.4,
        "attack_range": 5,
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
        "prefab_common_id": "@Mushket_Smith_Carbine",
        "prefab_pbr_id": "@Mushket_Smith_Carbine_pbr",
        "speed_modifier": 1,
        "tags": [
          "firearm",
          "ranged",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_musket_3_uncommon",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.7,
        "attack_damage_time": 0.3,
        "attack_ending_time": 1.4,
        "attack_range": 5,
        "attacks_per_second_inferred": 0.5882352941176471,
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
      "image_key": "0eed874c8f3e18981d143b2f863472152c70c5088ef4fd1d485ef7a15c7e7f31",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "史密斯卡宾枪",
        "name_en": "Smith carbine",
        "description_zh": "紧凑且轻便的武器",
        "description_en": "Compact and light weapon",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "优秀",
        "search_text": "wls2_weapon_range_musket_3_uncommon 史密斯卡宾枪 smith carbine 紧凑且轻便的武器 compact and light weapon weapon 武器 rifle weapon weapon_storage quick rifle fire_weapon wls2_weapon_range_musket_3_uncommon"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 322,
            "unit": "",
            "display": "322"
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
            "value": 116,
            "unit": "",
            "display": "116"
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
            "key": "animal_damage_modifier",
            "label": "对动物伤害加成",
            "value": 0.1,
            "unit": "%",
            "display": "10%"
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
              "damage": 322
            },
            "display": {
              "damage": "322"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 354
            },
            "display": {
              "damage": "354"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 386
            },
            "display": {
              "damage": "386"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 419
            },
            "display": {
              "damage": "419"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 451
            },
            "display": {
              "damage": "451"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 452
            },
            "display": {
              "damage": "452"
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
          "伤害：6 级起每级增加 1，最高 1451。",
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
        "description": "inventory_stack_view_wls2_weapon_range_musket_4_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_musket_4_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_musket_4_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_weapon_range_musket_4_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "weapon_range_rifle",
        "sprite": "UI_WW_AlphaBinary05/Weapon_range_firearms_musket_4",
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
        "weapon_id": "wls2_weapon_range_musket_4_common"
      },
      "item_id": "wls2_weapon_range_musket_4_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_musket_4_common_description",
        "en": {
          "description": "If you can master \"Brown Bess\", you can master the West.",
          "full_description": "If you can master \"Brown Bess\", you can master the West.",
          "name": "Brown Bess musket"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_musket_4_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_musket_4_common_name",
        "zh": {
          "description": "如果你能驾驭得了“棕色贝丝”，那你就能驾驭西部世界。",
          "full_description": "如果你能驾驭得了“棕色贝丝”，那你就能驾驭西部世界。",
          "name": "棕色贝丝滑膛枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_4": 2,
            "wls2_resourse_fourfold_nails_4": 1,
            "wls2_resourse_secondary_ingot_4": 4,
            "wls2_resourse_secondary_plank_4": 3
          },
          "learn_exp": 800,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_weapon_range_musket_4_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_weapon_8"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/Weapon_range_firearms_musket_4",
      "stat_curves": {
        "animal_damage_modifier": {
          "default": 0.2
        },
        "damage": {
          "1": 373,
          "2": 410,
          "3": 448,
          "4": 485,
          "5": 523,
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
          "1": 11,
          "2": 12,
          "3": 13,
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
        "attack_ending_time": 1.4,
        "attack_range": 5,
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
        "prefab_common_id": "@Musket_Brown_Bess",
        "prefab_pbr_id": "@Musket_Brown_Bess_pbr",
        "speed_modifier": 1,
        "tags": [
          "firearm",
          "ranged",
          "rifle"
        ]
      },
      "weapon_id": "wls2_weapon_range_musket_4_common",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.7,
        "attack_damage_time": 0.3,
        "attack_ending_time": 1.4,
        "attack_range": 5,
        "attacks_per_second_inferred": 0.5882352941176471,
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
      "image_key": "6129bf86b8f45be703ccda110aed30e2ac859fc386d7db823b6cf8b127c14465",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "棕色贝丝滑膛枪",
        "name_en": "Brown Bess musket",
        "description_zh": "如果你能驾驭得了“棕色贝丝”，那你就能驾驭西部世界。",
        "description_en": "If you can master \"Brown Bess\", you can master the West.",
        "category_zh": "武器",
        "subcategory": "rifle",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_musket_4_common 棕色贝丝滑膛枪 brown bess musket 如果你能驾驭得了“棕色贝丝”，那你就能驾驭西部世界。 if you can master \"brown bess\", you can master the west. weapon 武器 rifle weapon weapon_storage quick rifle fire_weapon wls2_weapon_range_musket_4_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 373,
            "unit": "",
            "display": "373"
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
            "value": 170,
            "unit": "",
            "display": "170"
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
            "key": "animal_damage_modifier",
            "label": "对动物伤害加成",
            "value": 0.2,
            "unit": "%",
            "display": "20%"
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
              "damage": 373,
              "penetrating_damage": 11
            },
            "display": {
              "damage": "373",
              "penetrating_damage": "11"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 410,
              "penetrating_damage": 12
            },
            "display": {
              "damage": "410",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 448,
              "penetrating_damage": 13
            },
            "display": {
              "damage": "448",
              "penetrating_damage": "13"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 485,
              "penetrating_damage": 15
            },
            "display": {
              "damage": "485",
              "penetrating_damage": "15"
            }
          },
          {
            "level": 5,
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
            "level": 6,
            "values": {
              "damage": 524,
              "penetrating_damage": 16
            },
            "display": {
              "damage": "524",
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
        "description": "inventory_stack_view_wls2_weapon_range_pistol_0_common_description",
        "full_description": "inventory_stack_view_wls2_weapon_range_pistol_0_common_description",
        "name": "inventory_stack_view_wls2_weapon_range_pistol_0_common_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_pistol_0_common",
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
        "weapon_id": "wls2_weapon_range_pistol_0_common"
      },
      "item_id": "wls2_weapon_range_pistol_0_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_weapon_range_pistol_0_common_description",
        "en": {
          "description": "Deals more damage with smoke and noise than with bullets",
          "full_description": "Deals more damage with smoke and noise than with bullets",
          "name": "Zip gun"
        },
        "full_description_key": "inventory_stack_view_wls2_weapon_range_pistol_0_common_description",
        "name_key": "inventory_stack_view_wls2_weapon_range_pistol_0_common_name",
        "zh": {
          "description": "用烟雾和噪音造成的伤害比子弹更大",
          "full_description": "用烟雾和噪音造成的伤害比子弹更大",
          "name": "自制枪"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_miscellaneous_gunpowder_1": 2,
            "wls2_resourse_primary_wood_1": 2,
            "wls_metal_scrap": 5
          },
          "learn_exp": 50,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_miscellaneous_gunpowder_1": 2,
                "wls2_resourse_primary_wood_1": 2,
                "wls_metal_scrap": 5
              },
              "learn_exp": 50,
              "min_level": 1,
              "result": {
                "inventory_stack_id": "wls2_weapon_range_pistol_0_common"
              },
              "type": "workbench"
            },
            "recipe_id": "wls2_weapon_range_pistol_0_common_workshop"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_pistol_0_common",
      "stat_curves": {
        "damage": {
          "1": 50,
          "2": 55,
          "3": 60,
          "4": 65,
          "5": 70,
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
      "upgrade": null,
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
        "prefab_common_id": "@Pistol_Handmade",
        "prefab_pbr_id": "@Pistol_Handmade_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_weapon_range_pistol_0_common",
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
      "image_key": "23a9375b37112d9f946728f117791b2df4a920bd70a7e6429e5cca47b85d168a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "自制枪",
        "name_en": "Zip gun",
        "description_zh": "用烟雾和噪音造成的伤害比子弹更大",
        "description_en": "Deals more damage with smoke and noise than with bullets",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "普通",
        "search_text": "wls2_weapon_range_pistol_0_common 自制枪 zip gun 用烟雾和噪音造成的伤害比子弹更大 deals more damage with smoke and noise than with bullets weapon 武器 pistol weapon weapon_storage quick pistol fire_weapon wls2_weapon_range_pistol_0_common"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 50,
            "unit": "",
            "display": "50"
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
            "value": 40,
            "unit": "",
            "display": "40"
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
              "damage": 50
            },
            "display": {
              "damage": "50"
            }
          },
          {
            "level": 2,
            "values": {
              "damage": 55
            },
            "display": {
              "damage": "55"
            }
          },
          {
            "level": 3,
            "values": {
              "damage": 60
            },
            "display": {
              "damage": "60"
            }
          },
          {
            "level": 4,
            "values": {
              "damage": 65
            },
            "display": {
              "damage": "65"
            }
          },
          {
            "level": 5,
            "values": {
              "damage": 70
            },
            "display": {
              "damage": "70"
            }
          },
          {
            "level": 6,
            "values": {
              "damage": 71
            },
            "display": {
              "damage": "71"
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
          "伤害：6 级起每级增加 1，最高 1070。",
          "基础攻速按攻击间隔估算；角色属性、技能与动作速度会影响实战攻速。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    }
  ]
};
