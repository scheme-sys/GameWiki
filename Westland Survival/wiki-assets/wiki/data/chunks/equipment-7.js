/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-equipment-7"] = {
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
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_23_armor_body_4_rare",
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
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_leather_4": 10,
                "wls2_resourse_tertiary_clothroll_4": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_body_4_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_body_4_rare_recycle"
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
            "stack_id": "wls2_halloween_23_armor_body_4_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_body_rare_icon",
      "stat_curves": {
        "armor": {
          "1": 315,
          "2": 347,
          "3": 378,
          "4": 410,
          "5": 441,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 3,
          "2": 3,
          "3": 3,
          "4": 3,
          "5": 3
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
        "max_durability": {
          "1": 6203,
          "2": 6823,
          "3": 7443,
          "4": 8063,
          "5": 8684
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
        "search_text": "wls2_halloween_23_armor_body_4_rare 幽灵骑士的外套 phantom rider's coat 据说这件外套的主人与死神本人达成了交易 they say the owner of this coat has made a deal with death herself armor 护甲 body chest armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 315,
            "unit": "",
            "display": "315"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 6203,
            "unit": "",
            "display": "6203"
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
            "value": 3,
            "unit": "",
            "display": "3"
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
              "armor": 315,
              "dexterity": 2,
              "max_durability": 6203,
              "reduced_detection_radius": 0.06
            },
            "display": {
              "armor": "315",
              "dexterity": "+2",
              "max_durability": "6203",
              "reduced_detection_radius": "+6%"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 347,
              "dexterity": 3,
              "max_durability": 6823,
              "reduced_detection_radius": 0.07
            },
            "display": {
              "armor": "347",
              "dexterity": "+3",
              "max_durability": "6823",
              "reduced_detection_radius": "+7%"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 378,
              "dexterity": 4,
              "max_durability": 7443,
              "reduced_detection_radius": 0.08
            },
            "display": {
              "armor": "378",
              "dexterity": "+4",
              "max_durability": "7443",
              "reduced_detection_radius": "+8%"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 410,
              "dexterity": 5,
              "max_durability": 8063,
              "reduced_detection_radius": 0.09
            },
            "display": {
              "armor": "410",
              "dexterity": "+5",
              "max_durability": "8063",
              "reduced_detection_radius": "+9%"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 441,
              "dexterity": 6,
              "max_durability": 8684,
              "reduced_detection_radius": 0.1
            },
            "display": {
              "armor": "441",
              "dexterity": "+6",
              "max_durability": "8684",
              "reduced_detection_radius": "+10%"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 442,
              "dexterity": 6,
              "max_durability": 8684,
              "reduced_detection_radius": 0.1
            },
            "display": {
              "armor": "442",
              "dexterity": "+6",
              "max_durability": "8684",
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
          "防御：6 级起每级增加 1，最高 1441。"
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
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_23_armor_body_5_rare",
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
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_leather_5": 10,
                "wls2_resourse_tertiary_clothroll_5": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_body_5_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_body_5_rare_recycle"
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
            "stack_id": "wls2_halloween_23_armor_body_5_rare",
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
            "stack_id": "wls2_halloween_23_armor_body_5_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_body_rare_icon",
      "stat_curves": {
        "armor": {
          "1": 532,
          "2": 585,
          "3": 638,
          "4": 692,
          "5": 745,
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
        "search_text": "wls2_halloween_23_armor_body_5_rare 幽灵骑士的外套 phantom rider's coat 据说这件外套的主人与死神本人达成了交易 they say the owner of this coat has made a deal with death herself armor 护甲 body chest armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 532,
            "unit": "",
            "display": "532"
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
              "armor": 532,
              "dexterity": 2,
              "firearm_resistance": 0.04,
              "max_durability": 15987
            },
            "display": {
              "armor": "532",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "max_durability": "15987"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 585,
              "dexterity": 3,
              "firearm_resistance": 0.08,
              "max_durability": 17586
            },
            "display": {
              "armor": "585",
              "dexterity": "+3",
              "firearm_resistance": "+8%",
              "max_durability": "17586"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 638,
              "dexterity": 4,
              "firearm_resistance": 0.12,
              "max_durability": 19184
            },
            "display": {
              "armor": "638",
              "dexterity": "+4",
              "firearm_resistance": "+12%",
              "max_durability": "19184"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 692,
              "dexterity": 5,
              "firearm_resistance": 0.16,
              "max_durability": 20783
            },
            "display": {
              "armor": "692",
              "dexterity": "+5",
              "firearm_resistance": "+16%",
              "max_durability": "20783"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 745,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 22382
            },
            "display": {
              "armor": "745",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
              "max_durability": "22382"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 746,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 22382
            },
            "display": {
              "armor": "746",
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
          "防御：6 级起每级增加 1，最高 1745。"
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
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_23_armor_body_6_rare",
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
                "wls2_resourse_fourfold_nails_5": 2,
                "wls2_resourse_secondary_leather_6": 10,
                "wls2_resourse_tertiary_clothroll_5": 3
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_body_6_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_body_6_rare_recycle"
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
            "stack_id": "wls2_halloween_23_armor_body_6_rare",
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
            "stack_id": "wls2_halloween_23_armor_body_6_rare",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_body_rare_icon",
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
        "death_penalty_reduction": {
          "default": 0.05
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
        "search_text": "wls2_halloween_23_armor_body_6_rare 幽灵骑士的外套 phantom rider's coat 据说这件外套的主人与死神本人达成了交易 they say the owner of this coat has made a deal with death herself armor 护甲 body chest armor armor_storage festive"
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
            "key": "death_penalty_reduction",
            "label": "死亡耐久损失减免",
            "value": 0.05,
            "unit": "%",
            "display": "5%"
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
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_23_armor_body_7_rare",
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
                "wls2_resourse_fourfold_nails_6": 2,
                "wls2_resourse_secondary_cloth_6": 3,
                "wls2_resourse_secondary_leather_7": 10
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_body_7_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_body_7_rare_recycle"
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
            "stack_id": "wls2_halloween_23_armor_body_7_rare",
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
            "stack_id": "wls2_halloween_23_armor_body_7_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_body_rare_icon",
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
        "death_penalty_reduction": {
          "default": 0.05
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
        "search_text": "wls2_halloween_23_armor_body_7_rare 幽灵骑士的外套 phantom rider's coat 据说这件外套的主人与死神本人达成了交易 they say the owner of this coat has made a deal with death herself armor 护甲 body chest armor armor_storage festive"
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
      "bodypart": 34,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 34,
        "description": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_boots_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_boots_rare_icon",
        "tags": [
          "boots",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_23_armor_boots_2_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "en": {
          "description": "Step bravely into the unknown with these boots",
          "full_description": "Step bravely into the unknown with these boots",
          "name": "Phantom Rider's Boots"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_boots_name",
        "zh": {
          "description": "勇敢地踏入未知的领域，穿上这些靴子",
          "full_description": "勇敢地踏入未知的领域，穿上这些靴子",
          "name": "幽灵骑士之靴"
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
                "wls2_resourse_secondary_leather_2": 3,
                "wls2_resourse_secondary_rope_2": 3
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_boots_2_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_boots_2_rare_recycle"
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
            "stack_id": "wls2_halloween_23_armor_boots_2_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_boots_rare_icon",
      "stat_curves": {
        "armor": {
          "1": 13,
          "2": 14,
          "3": 15,
          "4": 16,
          "5": 18,
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
          "1": 160,
          "2": 175,
          "3": 190,
          "4": 205,
          "5": 220
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
      "tier": 2,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "8bde8656b05c5858a5ec61151b94e3db54a0cad051763c5c85d3859452a7924e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幽灵骑士之靴",
        "name_en": "Phantom Rider's Boots",
        "description_zh": "勇敢地踏入未知的领域，穿上这些靴子",
        "description_en": "Step bravely into the unknown with these boots",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_boots_2_rare 幽灵骑士之靴 phantom rider's boots 勇敢地踏入未知的领域，穿上这些靴子 step bravely into the unknown with these boots armor 护甲 boots boots armor armor_storage festive"
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
            "value": 160,
            "unit": "",
            "display": "160"
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
              "armor": 13,
              "dexterity": 1,
              "max_durability": 160
            },
            "display": {
              "armor": "13",
              "dexterity": "+1",
              "max_durability": "160"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 14,
              "dexterity": 1,
              "max_durability": 175
            },
            "display": {
              "armor": "14",
              "dexterity": "+1",
              "max_durability": "175"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 15,
              "dexterity": 1,
              "max_durability": 190
            },
            "display": {
              "armor": "15",
              "dexterity": "+1",
              "max_durability": "190"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 16,
              "dexterity": 2,
              "max_durability": 205
            },
            "display": {
              "armor": "16",
              "dexterity": "+2",
              "max_durability": "205"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 18,
              "dexterity": 3,
              "max_durability": 220
            },
            "display": {
              "armor": "18",
              "dexterity": "+3",
              "max_durability": "220"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 19,
              "dexterity": 3,
              "max_durability": 220
            },
            "display": {
              "armor": "19",
              "dexterity": "+3",
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
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 34,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 34,
        "description": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_boots_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_boots_rare_icon",
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
      "item_id": "wls2_halloween_23_armor_boots_3_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "en": {
          "description": "Step bravely into the unknown with these boots",
          "full_description": "Step bravely into the unknown with these boots",
          "name": "Phantom Rider's Boots"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_boots_name",
        "zh": {
          "description": "勇敢地踏入未知的领域，穿上这些靴子",
          "full_description": "勇敢地踏入未知的领域，穿上这些靴子",
          "name": "幽灵骑士之靴"
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
                "inventory_stack_id": "wls2_halloween_23_armor_boots_3_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_boots_3_rare_recycle"
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
            "stack_id": "wls2_halloween_23_armor_boots_3_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_boots_rare_icon",
      "stat_curves": {
        "armor": {
          "1": 45,
          "2": 50,
          "3": 54,
          "4": 59,
          "5": 63,
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
          "1": 1092,
          "2": 1201,
          "3": 1311,
          "4": 1419,
          "5": 1529
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
      "tier": 3,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "8bde8656b05c5858a5ec61151b94e3db54a0cad051763c5c85d3859452a7924e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幽灵骑士之靴",
        "name_en": "Phantom Rider's Boots",
        "description_zh": "勇敢地踏入未知的领域，穿上这些靴子",
        "description_en": "Step bravely into the unknown with these boots",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_boots_3_rare 幽灵骑士之靴 phantom rider's boots 勇敢地踏入未知的领域，穿上这些靴子 step bravely into the unknown with these boots armor 护甲 boots boots armor armor_storage festive"
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
            "value": 1092,
            "unit": "",
            "display": "1092"
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
              "armor": 45,
              "dexterity": 2,
              "health_increment": 25,
              "max_durability": 1092
            },
            "display": {
              "armor": "45",
              "dexterity": "+2",
              "health_increment": "+25",
              "max_durability": "1092"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 50,
              "dexterity": 3,
              "health_increment": 30,
              "max_durability": 1201
            },
            "display": {
              "armor": "50",
              "dexterity": "+3",
              "health_increment": "+30",
              "max_durability": "1201"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 54,
              "dexterity": 4,
              "health_increment": 35,
              "max_durability": 1311
            },
            "display": {
              "armor": "54",
              "dexterity": "+4",
              "health_increment": "+35",
              "max_durability": "1311"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 59,
              "dexterity": 5,
              "health_increment": 40,
              "max_durability": 1419
            },
            "display": {
              "armor": "59",
              "dexterity": "+5",
              "health_increment": "+40",
              "max_durability": "1419"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 63,
              "dexterity": 6,
              "health_increment": 45,
              "max_durability": 1529
            },
            "display": {
              "armor": "63",
              "dexterity": "+6",
              "health_increment": "+45",
              "max_durability": "1529"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 64,
              "dexterity": 6,
              "health_increment": 45,
              "max_durability": 1529
            },
            "display": {
              "armor": "64",
              "dexterity": "+6",
              "health_increment": "+45",
              "max_durability": "1529"
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
          "防御：6 级起每级增加 1，最高 1063。"
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
        "description": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_boots_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_boots_rare_icon",
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
      "item_id": "wls2_halloween_23_armor_boots_4_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "en": {
          "description": "Step bravely into the unknown with these boots",
          "full_description": "Step bravely into the unknown with these boots",
          "name": "Phantom Rider's Boots"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_boots_name",
        "zh": {
          "description": "勇敢地踏入未知的领域，穿上这些靴子",
          "full_description": "勇敢地踏入未知的领域，穿上这些靴子",
          "name": "幽灵骑士之靴"
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
                "inventory_stack_id": "wls2_halloween_23_armor_boots_4_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_boots_4_rare_recycle"
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
            "stack_id": "wls2_halloween_23_armor_boots_4_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_boots_rare_icon",
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
          "1": 2,
          "2": 2,
          "3": 2,
          "4": 2,
          "5": 2
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
        "max_durability": {
          "1": 4135,
          "2": 4549,
          "3": 4962,
          "4": 5376,
          "5": 5789
        },
        "move_speed_modifier": {
          "1": 0.2,
          "2": 0.2,
          "3": 0.2,
          "4": 0.2,
          "5": 0.2
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
      "image_key": "8bde8656b05c5858a5ec61151b94e3db54a0cad051763c5c85d3859452a7924e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幽灵骑士之靴",
        "name_en": "Phantom Rider's Boots",
        "description_zh": "勇敢地踏入未知的领域，穿上这些靴子",
        "description_en": "Step bravely into the unknown with these boots",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_boots_4_rare 幽灵骑士之靴 phantom rider's boots 勇敢地踏入未知的领域，穿上这些靴子 step bravely into the unknown with these boots armor 护甲 boots boots armor armor_storage festive"
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
            "value": 4135,
            "unit": "",
            "display": "4135"
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
            "key": "death_penalty_reduction",
            "label": "死亡耐久损失减免",
            "value": 0.05,
            "unit": "%",
            "display": "5%"
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
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 90,
              "dexterity": 2,
              "max_durability": 4135,
              "reduced_detection_radius": 0.06
            },
            "display": {
              "armor": "90",
              "dexterity": "+2",
              "max_durability": "4135",
              "reduced_detection_radius": "+6%"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 99,
              "dexterity": 3,
              "max_durability": 4549,
              "reduced_detection_radius": 0.07
            },
            "display": {
              "armor": "99",
              "dexterity": "+3",
              "max_durability": "4549",
              "reduced_detection_radius": "+7%"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 108,
              "dexterity": 4,
              "max_durability": 4962,
              "reduced_detection_radius": 0.08
            },
            "display": {
              "armor": "108",
              "dexterity": "+4",
              "max_durability": "4962",
              "reduced_detection_radius": "+8%"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 117,
              "dexterity": 5,
              "max_durability": 5376,
              "reduced_detection_radius": 0.09
            },
            "display": {
              "armor": "117",
              "dexterity": "+5",
              "max_durability": "5376",
              "reduced_detection_radius": "+9%"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 126,
              "dexterity": 6,
              "max_durability": 5789,
              "reduced_detection_radius": 0.1
            },
            "display": {
              "armor": "126",
              "dexterity": "+6",
              "max_durability": "5789",
              "reduced_detection_radius": "+10%"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 127,
              "dexterity": 6,
              "max_durability": 5789,
              "reduced_detection_radius": 0.1
            },
            "display": {
              "armor": "127",
              "dexterity": "+6",
              "max_durability": "5789",
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
      "bodypart": 34,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 34,
        "description": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_boots_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_boots_rare_icon",
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
      "item_id": "wls2_halloween_23_armor_boots_5_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "en": {
          "description": "Step bravely into the unknown with these boots",
          "full_description": "Step bravely into the unknown with these boots",
          "name": "Phantom Rider's Boots"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_boots_name",
        "zh": {
          "description": "勇敢地踏入未知的领域，穿上这些靴子",
          "full_description": "勇敢地踏入未知的领域，穿上这些靴子",
          "name": "幽灵骑士之靴"
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
                "wls2_resourse_fourfold_nails_5": 3,
                "wls2_resourse_secondary_leather_5": 4,
                "wls2_resourse_secondary_rope_5": 4
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_boots_5_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_boots_5_rare_recycle"
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
            "stack_id": "wls2_halloween_23_armor_boots_5_rare",
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
            "stack_id": "wls2_halloween_23_armor_boots_5_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_boots_rare_icon",
      "stat_curves": {
        "armor": {
          "1": 152,
          "2": 167,
          "3": 182,
          "4": 198,
          "5": 213,
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
      "image_key": "8bde8656b05c5858a5ec61151b94e3db54a0cad051763c5c85d3859452a7924e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幽灵骑士之靴",
        "name_en": "Phantom Rider's Boots",
        "description_zh": "勇敢地踏入未知的领域，穿上这些靴子",
        "description_en": "Step bravely into the unknown with these boots",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_boots_5_rare 幽灵骑士之靴 phantom rider's boots 勇敢地踏入未知的领域，穿上这些靴子 step bravely into the unknown with these boots armor 护甲 boots boots armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 152,
            "unit": "",
            "display": "152"
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
              "armor": 152,
              "dexterity": 2,
              "firearm_resistance": 0.04,
              "max_durability": 12656
            },
            "display": {
              "armor": "152",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "max_durability": "12656"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 167,
              "dexterity": 3,
              "firearm_resistance": 0.08,
              "max_durability": 13922
            },
            "display": {
              "armor": "167",
              "dexterity": "+3",
              "firearm_resistance": "+8%",
              "max_durability": "13922"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 182,
              "dexterity": 4,
              "firearm_resistance": 0.12,
              "max_durability": 15188
            },
            "display": {
              "armor": "182",
              "dexterity": "+4",
              "firearm_resistance": "+12%",
              "max_durability": "15188"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 198,
              "dexterity": 5,
              "firearm_resistance": 0.16,
              "max_durability": 16453
            },
            "display": {
              "armor": "198",
              "dexterity": "+5",
              "firearm_resistance": "+16%",
              "max_durability": "16453"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 213,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 17719
            },
            "display": {
              "armor": "213",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
              "max_durability": "17719"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 214,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 17719
            },
            "display": {
              "armor": "214",
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
          "防御：6 级起每级增加 1，最高 1213。"
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
        "description": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_boots_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_boots_rare_icon",
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
      "item_id": "wls2_halloween_23_armor_boots_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "en": {
          "description": "Step bravely into the unknown with these boots",
          "full_description": "Step bravely into the unknown with these boots",
          "name": "Phantom Rider's Boots"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_boots_name",
        "zh": {
          "description": "勇敢地踏入未知的领域，穿上这些靴子",
          "full_description": "勇敢地踏入未知的领域，穿上这些靴子",
          "name": "幽灵骑士之靴"
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
                "wls2_resourse_fourfold_nails_6": 3,
                "wls2_resourse_secondary_leather_6": 4,
                "wls2_resourse_secondary_rope_6": 4
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_boots_6_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_boots_6_rare_recycle"
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
            "stack_id": "wls2_halloween_23_armor_boots_6_rare",
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
            "stack_id": "wls2_halloween_23_armor_boots_6_rare",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_boots_rare_icon",
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
        "death_penalty_reduction": {
          "default": 0.05
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
      "image_key": "8bde8656b05c5858a5ec61151b94e3db54a0cad051763c5c85d3859452a7924e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幽灵骑士之靴",
        "name_en": "Phantom Rider's Boots",
        "description_zh": "勇敢地踏入未知的领域，穿上这些靴子",
        "description_en": "Step bravely into the unknown with these boots",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_boots_6_rare 幽灵骑士之靴 phantom rider's boots 勇敢地踏入未知的领域，穿上这些靴子 step bravely into the unknown with these boots armor 护甲 boots boots armor armor_storage festive"
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
            "key": "death_penalty_reduction",
            "label": "死亡耐久损失减免",
            "value": 0.05,
            "unit": "%",
            "display": "5%"
          },
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
            "value": 1,
            "unit": "",
            "display": "1"
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
      "bodypart": 34,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 34,
        "description": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_boots_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_boots_rare_icon",
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
      "item_id": "wls2_halloween_23_armor_boots_7_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "en": {
          "description": "Step bravely into the unknown with these boots",
          "full_description": "Step bravely into the unknown with these boots",
          "name": "Phantom Rider's Boots"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_boots_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_boots_name",
        "zh": {
          "description": "勇敢地踏入未知的领域，穿上这些靴子",
          "full_description": "勇敢地踏入未知的领域，穿上这些靴子",
          "name": "幽灵骑士之靴"
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
                "wls2_resourse_fourfold_nails_7": 3,
                "wls2_resourse_secondary_leather_7": 4,
                "wls2_resourse_secondary_rope_7": 4
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_boots_7_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_boots_7_rare_recycle"
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
            "stack_id": "wls2_halloween_23_armor_boots_7_rare",
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
            "stack_id": "wls2_halloween_23_armor_boots_7_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_boots_rare_icon",
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
        "death_penalty_reduction": {
          "default": 0.05
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
      "image_key": "8bde8656b05c5858a5ec61151b94e3db54a0cad051763c5c85d3859452a7924e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幽灵骑士之靴",
        "name_en": "Phantom Rider's Boots",
        "description_zh": "勇敢地踏入未知的领域，穿上这些靴子",
        "description_en": "Step bravely into the unknown with these boots",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_boots_7_rare 幽灵骑士之靴 phantom rider's boots 勇敢地踏入未知的领域，穿上这些靴子 step bravely into the unknown with these boots armor 护甲 boots boots armor armor_storage festive"
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
            "key": "death_penalty_reduction",
            "label": "死亡耐久损失减免",
            "value": 0.05,
            "unit": "%",
            "display": "5%"
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
      "bodypart": 44,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 44,
        "description": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_head_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_head_rare_icon",
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
      "item_id": "wls2_halloween_23_armor_head_2_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "en": {
          "description": "This hat will keep you deadly stylish",
          "full_description": "This hat will keep you deadly stylish",
          "name": "Phantom Rider's Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_head_name",
        "zh": {
          "description": "这顶帽子将让你时尚至极",
          "full_description": "这顶帽子将让你时尚至极",
          "name": "幻影骑士帽子"
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
                "wls2_resourse_secondary_cloth_2": 3,
                "wls2_resourse_secondary_leather_2": 4
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_head_2_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_head_2_rare_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 900
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_head_2_rare",
                "item_level": 5
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_23_trader_armor_head_2_rare"
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
            "stack_id": "wls2_halloween_23_armor_head_2_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_head_rare_icon",
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
          "1": 160,
          "2": 175,
          "3": 190,
          "4": 205,
          "5": 220
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
      "image_key": "f0019403e91d554fe31bc4f33d0b5094ccd771720193ad6899ba7d30cac831a9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幻影骑士帽子",
        "name_en": "Phantom Rider's Hat",
        "description_zh": "这顶帽子将让你时尚至极",
        "description_en": "This hat will keep you deadly stylish",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_head_2_rare 幻影骑士帽子 phantom rider's hat 这顶帽子将让你时尚至极 this hat will keep you deadly stylish armor 护甲 head head armor armor_storage festive"
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
              "armor": 19,
              "dexterity": 1,
              "max_durability": 160
            },
            "display": {
              "armor": "19",
              "dexterity": "+1",
              "max_durability": "160"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 21,
              "dexterity": 1,
              "max_durability": 175
            },
            "display": {
              "armor": "21",
              "dexterity": "+1",
              "max_durability": "175"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 23,
              "dexterity": 1,
              "max_durability": 190
            },
            "display": {
              "armor": "23",
              "dexterity": "+1",
              "max_durability": "190"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 24,
              "dexterity": 2,
              "max_durability": 205
            },
            "display": {
              "armor": "24",
              "dexterity": "+2",
              "max_durability": "205"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 26,
              "dexterity": 3,
              "max_durability": 220
            },
            "display": {
              "armor": "26",
              "dexterity": "+3",
              "max_durability": "220"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 27,
              "dexterity": 3,
              "max_durability": 220
            },
            "display": {
              "armor": "27",
              "dexterity": "+3",
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
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 44,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 44,
        "description": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_head_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_head_rare_icon",
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
      "item_id": "wls2_halloween_23_armor_head_3_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "en": {
          "description": "This hat will keep you deadly stylish",
          "full_description": "This hat will keep you deadly stylish",
          "name": "Phantom Rider's Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_head_name",
        "zh": {
          "description": "这顶帽子将让你时尚至极",
          "full_description": "这顶帽子将让你时尚至极",
          "name": "幻影骑士帽子"
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
                "inventory_stack_id": "wls2_halloween_23_armor_head_3_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_head_3_rare_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 900
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_head_3_rare",
                "item_level": 5
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_23_trader_armor_head_3_rare"
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
            "stack_id": "wls2_halloween_23_armor_head_3_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_head_rare_icon",
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
          "1": 1457,
          "2": 1602,
          "3": 1748,
          "4": 1894,
          "5": 2039
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
      "image_key": "f0019403e91d554fe31bc4f33d0b5094ccd771720193ad6899ba7d30cac831a9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幻影骑士帽子",
        "name_en": "Phantom Rider's Hat",
        "description_zh": "这顶帽子将让你时尚至极",
        "description_en": "This hat will keep you deadly stylish",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_head_3_rare 幻影骑士帽子 phantom rider's hat 这顶帽子将让你时尚至极 this hat will keep you deadly stylish armor 护甲 head head armor armor_storage festive"
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
            "value": 2,
            "unit": "",
            "display": "2"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 68,
              "dexterity": 2,
              "health_increment": 25,
              "max_durability": 1457
            },
            "display": {
              "armor": "68",
              "dexterity": "+2",
              "health_increment": "+25",
              "max_durability": "1457"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 74,
              "dexterity": 3,
              "health_increment": 30,
              "max_durability": 1602
            },
            "display": {
              "armor": "74",
              "dexterity": "+3",
              "health_increment": "+30",
              "max_durability": "1602"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 81,
              "dexterity": 4,
              "health_increment": 35,
              "max_durability": 1748
            },
            "display": {
              "armor": "81",
              "dexterity": "+4",
              "health_increment": "+35",
              "max_durability": "1748"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 88,
              "dexterity": 5,
              "health_increment": 40,
              "max_durability": 1894
            },
            "display": {
              "armor": "88",
              "dexterity": "+5",
              "health_increment": "+40",
              "max_durability": "1894"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 95,
              "dexterity": 6,
              "health_increment": 45,
              "max_durability": 2039
            },
            "display": {
              "armor": "95",
              "dexterity": "+6",
              "health_increment": "+45",
              "max_durability": "2039"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 96,
              "dexterity": 6,
              "health_increment": 45,
              "max_durability": 2039
            },
            "display": {
              "armor": "96",
              "dexterity": "+6",
              "health_increment": "+45",
              "max_durability": "2039"
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
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 44,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 44,
        "description": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_head_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_head_rare_icon",
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
      "item_id": "wls2_halloween_23_armor_head_4_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "en": {
          "description": "This hat will keep you deadly stylish",
          "full_description": "This hat will keep you deadly stylish",
          "name": "Phantom Rider's Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_head_name",
        "zh": {
          "description": "这顶帽子将让你时尚至极",
          "full_description": "这顶帽子将让你时尚至极",
          "name": "幻影骑士帽子"
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
                "inventory_stack_id": "wls2_halloween_23_armor_head_4_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_head_4_rare_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 900
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_head_4_rare",
                "item_level": 5
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_23_trader_armor_head_4_rare"
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
            "stack_id": "wls2_halloween_23_armor_head_4_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_head_rare_icon",
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
          "1": 2,
          "2": 2,
          "3": 2,
          "4": 2,
          "5": 2
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
        "max_durability": {
          "1": 4652,
          "2": 5117,
          "3": 5582,
          "4": 6047,
          "5": 6513
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
      "image_key": "f0019403e91d554fe31bc4f33d0b5094ccd771720193ad6899ba7d30cac831a9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幻影骑士帽子",
        "name_en": "Phantom Rider's Hat",
        "description_zh": "这顶帽子将让你时尚至极",
        "description_en": "This hat will keep you deadly stylish",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_head_4_rare 幻影骑士帽子 phantom rider's hat 这顶帽子将让你时尚至极 this hat will keep you deadly stylish armor 护甲 head head armor armor_storage festive"
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
              "armor": 135,
              "dexterity": 2,
              "max_durability": 4652,
              "reduced_detection_radius": 0.05
            },
            "display": {
              "armor": "135",
              "dexterity": "+2",
              "max_durability": "4652",
              "reduced_detection_radius": "+5%"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 149,
              "dexterity": 3,
              "max_durability": 5117,
              "reduced_detection_radius": 0.07
            },
            "display": {
              "armor": "149",
              "dexterity": "+3",
              "max_durability": "5117",
              "reduced_detection_radius": "+7%"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 162,
              "dexterity": 4,
              "max_durability": 5582,
              "reduced_detection_radius": 0.09
            },
            "display": {
              "armor": "162",
              "dexterity": "+4",
              "max_durability": "5582",
              "reduced_detection_radius": "+9%"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 176,
              "dexterity": 5,
              "max_durability": 6047,
              "reduced_detection_radius": 0.11
            },
            "display": {
              "armor": "176",
              "dexterity": "+5",
              "max_durability": "6047",
              "reduced_detection_radius": "+11%"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 189,
              "dexterity": 6,
              "max_durability": 6513,
              "reduced_detection_radius": 0.13
            },
            "display": {
              "armor": "189",
              "dexterity": "+6",
              "max_durability": "6513",
              "reduced_detection_radius": "+13%"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 190,
              "dexterity": 6,
              "max_durability": 6513,
              "reduced_detection_radius": 0.13
            },
            "display": {
              "armor": "190",
              "dexterity": "+6",
              "max_durability": "6513",
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
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 44,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 44,
        "description": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_head_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_head_rare_icon",
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
      "item_id": "wls2_halloween_23_armor_head_5_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "en": {
          "description": "This hat will keep you deadly stylish",
          "full_description": "This hat will keep you deadly stylish",
          "name": "Phantom Rider's Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_head_name",
        "zh": {
          "description": "这顶帽子将让你时尚至极",
          "full_description": "这顶帽子将让你时尚至极",
          "name": "幻影骑士帽子"
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
                "wls2_resourse_fourfold_nails_4": 4,
                "wls2_resourse_secondary_cloth_5": 4,
                "wls2_resourse_secondary_leather_5": 5
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_head_5_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_head_5_rare_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 900
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_head_5_rare",
                "item_level": 5
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_23_trader_armor_head_5_rare"
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
            "stack_id": "wls2_halloween_23_armor_head_5_rare",
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
            "stack_id": "wls2_halloween_23_armor_head_5_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_head_rare_icon",
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
      "image_key": "f0019403e91d554fe31bc4f33d0b5094ccd771720193ad6899ba7d30cac831a9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幻影骑士帽子",
        "name_en": "Phantom Rider's Hat",
        "description_zh": "这顶帽子将让你时尚至极",
        "description_en": "This hat will keep you deadly stylish",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_head_5_rare 幻影骑士帽子 phantom rider's hat 这顶帽子将让你时尚至极 this hat will keep you deadly stylish armor 护甲 head head armor armor_storage festive"
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
              "max_durability": 13989
            },
            "display": {
              "armor": "228",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "max_durability": "13989"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 251,
              "dexterity": 3,
              "firearm_resistance": 0.08,
              "max_durability": 15387
            },
            "display": {
              "armor": "251",
              "dexterity": "+3",
              "firearm_resistance": "+8%",
              "max_durability": "15387"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 274,
              "dexterity": 4,
              "firearm_resistance": 0.12,
              "max_durability": 16786
            },
            "display": {
              "armor": "274",
              "dexterity": "+4",
              "firearm_resistance": "+12%",
              "max_durability": "16786"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 296,
              "dexterity": 5,
              "firearm_resistance": 0.16,
              "max_durability": 18185
            },
            "display": {
              "armor": "296",
              "dexterity": "+5",
              "firearm_resistance": "+16%",
              "max_durability": "18185"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 319,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 19584
            },
            "display": {
              "armor": "319",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
              "max_durability": "19584"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 320,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 19584
            },
            "display": {
              "armor": "320",
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
      "bodypart": 44,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 44,
        "description": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_head_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_head_rare_icon",
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
      "item_id": "wls2_halloween_23_armor_head_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "en": {
          "description": "This hat will keep you deadly stylish",
          "full_description": "This hat will keep you deadly stylish",
          "name": "Phantom Rider's Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_head_name",
        "zh": {
          "description": "这顶帽子将让你时尚至极",
          "full_description": "这顶帽子将让你时尚至极",
          "name": "幻影骑士帽子"
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
                "wls2_resourse_secondary_cloth_6": 4,
                "wls2_resourse_secondary_leather_6": 5
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_head_6_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_head_6_rare_recycle"
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
            "stack_id": "wls2_halloween_23_armor_head_6_rare",
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
            "stack_id": "wls2_halloween_23_armor_head_6_rare",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_head_rare_icon",
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
        "death_penalty_reduction": {
          "default": 0.05
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
      "image_key": "f0019403e91d554fe31bc4f33d0b5094ccd771720193ad6899ba7d30cac831a9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幻影骑士帽子",
        "name_en": "Phantom Rider's Hat",
        "description_zh": "这顶帽子将让你时尚至极",
        "description_en": "This hat will keep you deadly stylish",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_head_6_rare 幻影骑士帽子 phantom rider's hat 这顶帽子将让你时尚至极 this hat will keep you deadly stylish armor 护甲 head head armor armor_storage festive"
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
            "key": "death_penalty_reduction",
            "label": "死亡耐久损失减免",
            "value": 0.05,
            "unit": "%",
            "display": "5%"
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
      "bodypart": 44,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 44,
        "description": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_head_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_head_rare_icon",
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
      "item_id": "wls2_halloween_23_armor_head_7_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "en": {
          "description": "This hat will keep you deadly stylish",
          "full_description": "This hat will keep you deadly stylish",
          "name": "Phantom Rider's Hat"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_head_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_head_name",
        "zh": {
          "description": "这顶帽子将让你时尚至极",
          "full_description": "这顶帽子将让你时尚至极",
          "name": "幻影骑士帽子"
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
                "wls2_resourse_secondary_cloth_7": 4,
                "wls2_resourse_secondary_leather_7": 5
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_head_7_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_head_7_rare_recycle"
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
            "stack_id": "wls2_halloween_23_armor_head_7_rare",
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
            "stack_id": "wls2_halloween_23_armor_head_7_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_head_rare_icon",
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
        "death_penalty_reduction": {
          "default": 0.05
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
      "image_key": "f0019403e91d554fe31bc4f33d0b5094ccd771720193ad6899ba7d30cac831a9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幻影骑士帽子",
        "name_en": "Phantom Rider's Hat",
        "description_zh": "这顶帽子将让你时尚至极",
        "description_en": "This hat will keep you deadly stylish",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_head_7_rare 幻影骑士帽子 phantom rider's hat 这顶帽子将让你时尚至极 this hat will keep you deadly stylish armor 护甲 head head armor armor_storage festive"
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
      "bodypart": 35,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 35,
        "description": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_legs_name",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_legs_rare_icon",
        "tags": [
          "legs",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_23_armor_legs_2_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "en": {
          "description": "These hauntingly stylish trousers are also very practical",
          "full_description": "These hauntingly stylish trousers are also very practical",
          "name": "Phantom Rider's Trousers"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_legs_name",
        "zh": {
          "description": "这些令人心醉的时尚裤子也非常实用。",
          "full_description": "这些令人心醉的时尚裤子也非常实用。",
          "name": "幽灵骑士的裤子"
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
                "wls2_resourse_secondary_leather_2": 5,
                "wls2_resourse_tertiary_clothroll_2": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_legs_2_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_legs_2_rare_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 900
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_legs_2_rare",
                "item_level": 5
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_23_trader_armor_legs_2_rare"
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
            "stack_id": "wls2_halloween_23_armor_legs_2_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_legs_rare_icon",
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
          "1": 160,
          "2": 175,
          "3": 190,
          "4": 205,
          "5": 220
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
      "subcategory": "legs",
      "tags": [
        "legs",
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
      "image_key": "be76e8b79e8e353b20af75050289a534b873ba8249c537cb6b0f8227862f3b0a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幽灵骑士的裤子",
        "name_en": "Phantom Rider's Trousers",
        "description_zh": "这些令人心醉的时尚裤子也非常实用。",
        "description_en": "These hauntingly stylish trousers are also very practical",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_legs_2_rare 幽灵骑士的裤子 phantom rider's trousers 这些令人心醉的时尚裤子也非常实用。 these hauntingly stylish trousers are also very practical armor 护甲 legs legs armor armor_storage festive"
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
            "value": 160,
            "unit": "",
            "display": "160"
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
              "armor": 25,
              "dexterity": 1,
              "max_durability": 160
            },
            "display": {
              "armor": "25",
              "dexterity": "+1",
              "max_durability": "160"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 28,
              "dexterity": 1,
              "max_durability": 175
            },
            "display": {
              "armor": "28",
              "dexterity": "+1",
              "max_durability": "175"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 30,
              "dexterity": 1,
              "max_durability": 190
            },
            "display": {
              "armor": "30",
              "dexterity": "+1",
              "max_durability": "190"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 33,
              "dexterity": 2,
              "max_durability": 205
            },
            "display": {
              "armor": "33",
              "dexterity": "+2",
              "max_durability": "205"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 35,
              "dexterity": 3,
              "max_durability": 220
            },
            "display": {
              "armor": "35",
              "dexterity": "+3",
              "max_durability": "220"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 36,
              "dexterity": 3,
              "max_durability": 220
            },
            "display": {
              "armor": "36",
              "dexterity": "+3",
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
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 35,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 35,
        "description": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_legs_name",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_legs_rare_icon",
        "tags": [
          "legs",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_23_armor_legs_3_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "en": {
          "description": "These hauntingly stylish trousers are also very practical",
          "full_description": "These hauntingly stylish trousers are also very practical",
          "name": "Phantom Rider's Trousers"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_legs_name",
        "zh": {
          "description": "这些令人心醉的时尚裤子也非常实用。",
          "full_description": "这些令人心醉的时尚裤子也非常实用。",
          "name": "幽灵骑士的裤子"
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
                "wls2_resourse_secondary_leather_3": 7,
                "wls2_resourse_tertiary_clothroll_3": 3
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_legs_3_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_legs_3_rare_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 900
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_legs_3_rare",
                "item_level": 5
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_23_trader_armor_legs_3_rare"
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
            "stack_id": "wls2_halloween_23_armor_legs_3_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_legs_rare_icon",
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
          "1": 1457,
          "2": 1602,
          "3": 1748,
          "4": 1894,
          "5": 2039
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
      "subcategory": "legs",
      "tags": [
        "legs",
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
      "image_key": "be76e8b79e8e353b20af75050289a534b873ba8249c537cb6b0f8227862f3b0a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幽灵骑士的裤子",
        "name_en": "Phantom Rider's Trousers",
        "description_zh": "这些令人心醉的时尚裤子也非常实用。",
        "description_en": "These hauntingly stylish trousers are also very practical",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_legs_3_rare 幽灵骑士的裤子 phantom rider's trousers 这些令人心醉的时尚裤子也非常实用。 these hauntingly stylish trousers are also very practical armor 护甲 legs legs armor armor_storage festive"
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
            "value": 1457,
            "unit": "",
            "display": "1457"
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
              "max_durability": 1457
            },
            "display": {
              "armor": "90",
              "dexterity": "+2",
              "health_increment": "+25",
              "max_durability": "1457"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 99,
              "dexterity": 3,
              "health_increment": 30,
              "max_durability": 1602
            },
            "display": {
              "armor": "99",
              "dexterity": "+3",
              "health_increment": "+30",
              "max_durability": "1602"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 108,
              "dexterity": 4,
              "health_increment": 35,
              "max_durability": 1748
            },
            "display": {
              "armor": "108",
              "dexterity": "+4",
              "health_increment": "+35",
              "max_durability": "1748"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 117,
              "dexterity": 5,
              "health_increment": 40,
              "max_durability": 1894
            },
            "display": {
              "armor": "117",
              "dexterity": "+5",
              "health_increment": "+40",
              "max_durability": "1894"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 126,
              "dexterity": 6,
              "health_increment": 45,
              "max_durability": 2039
            },
            "display": {
              "armor": "126",
              "dexterity": "+6",
              "health_increment": "+45",
              "max_durability": "2039"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 127,
              "dexterity": 6,
              "health_increment": 45,
              "max_durability": 2039
            },
            "display": {
              "armor": "127",
              "dexterity": "+6",
              "health_increment": "+45",
              "max_durability": "2039"
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
        "description": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_legs_name",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_legs_rare_icon",
        "tags": [
          "legs",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_23_armor_legs_4_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "en": {
          "description": "These hauntingly stylish trousers are also very practical",
          "full_description": "These hauntingly stylish trousers are also very practical",
          "name": "Phantom Rider's Trousers"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_legs_name",
        "zh": {
          "description": "这些令人心醉的时尚裤子也非常实用。",
          "full_description": "这些令人心醉的时尚裤子也非常实用。",
          "name": "幽灵骑士的裤子"
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
                "wls2_resourse_secondary_leather_4": 7,
                "wls2_resourse_tertiary_clothroll_4": 3
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_legs_4_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_legs_4_rare_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 900
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_legs_4_rare",
                "item_level": 5
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_23_trader_armor_legs_4_rare"
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
            "stack_id": "wls2_halloween_23_armor_legs_4_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_legs_rare_icon",
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
        "max_durability": {
          "1": 5169,
          "2": 5686,
          "3": 6203,
          "4": 6719,
          "5": 7236
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
      "image_key": "be76e8b79e8e353b20af75050289a534b873ba8249c537cb6b0f8227862f3b0a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幽灵骑士的裤子",
        "name_en": "Phantom Rider's Trousers",
        "description_zh": "这些令人心醉的时尚裤子也非常实用。",
        "description_en": "These hauntingly stylish trousers are also very practical",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_legs_4_rare 幽灵骑士的裤子 phantom rider's trousers 这些令人心醉的时尚裤子也非常实用。 these hauntingly stylish trousers are also very practical armor 护甲 legs legs armor armor_storage festive"
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
            "value": 5169,
            "unit": "",
            "display": "5169"
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
              "armor": 180,
              "dexterity": 2,
              "max_durability": 5169,
              "reduced_detection_radius": 0.06
            },
            "display": {
              "armor": "180",
              "dexterity": "+2",
              "max_durability": "5169",
              "reduced_detection_radius": "+6%"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 198,
              "dexterity": 3,
              "max_durability": 5686,
              "reduced_detection_radius": 0.07
            },
            "display": {
              "armor": "198",
              "dexterity": "+3",
              "max_durability": "5686",
              "reduced_detection_radius": "+7%"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 216,
              "dexterity": 4,
              "max_durability": 6203,
              "reduced_detection_radius": 0.08
            },
            "display": {
              "armor": "216",
              "dexterity": "+4",
              "max_durability": "6203",
              "reduced_detection_radius": "+8%"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 234,
              "dexterity": 5,
              "max_durability": 6719,
              "reduced_detection_radius": 0.09
            },
            "display": {
              "armor": "234",
              "dexterity": "+5",
              "max_durability": "6719",
              "reduced_detection_radius": "+9%"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 252,
              "dexterity": 6,
              "max_durability": 7236,
              "reduced_detection_radius": 0.1
            },
            "display": {
              "armor": "252",
              "dexterity": "+6",
              "max_durability": "7236",
              "reduced_detection_radius": "+10%"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 253,
              "dexterity": 6,
              "max_durability": 7236,
              "reduced_detection_radius": 0.1
            },
            "display": {
              "armor": "253",
              "dexterity": "+6",
              "max_durability": "7236",
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
        "description": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_legs_name",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_legs_rare_icon",
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
      "item_id": "wls2_halloween_23_armor_legs_5_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "en": {
          "description": "These hauntingly stylish trousers are also very practical",
          "full_description": "These hauntingly stylish trousers are also very practical",
          "name": "Phantom Rider's Trousers"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_legs_name",
        "zh": {
          "description": "这些令人心醉的时尚裤子也非常实用。",
          "full_description": "这些令人心醉的时尚裤子也非常实用。",
          "name": "幽灵骑士的裤子"
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
                "wls2_resourse_secondary_leather_5": 7,
                "wls2_resourse_tertiary_clothroll_5": 3
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_legs_5_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_legs_5_rare_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_25_currency_pumpkin": 900
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_legs_5_rare",
                "item_level": 5
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_23_trader_armor_legs_5_rare"
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
            "stack_id": "wls2_halloween_23_armor_legs_5_rare",
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
            "stack_id": "wls2_halloween_23_armor_legs_5_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_legs_rare_icon",
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
      "image_key": "be76e8b79e8e353b20af75050289a534b873ba8249c537cb6b0f8227862f3b0a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幽灵骑士的裤子",
        "name_en": "Phantom Rider's Trousers",
        "description_zh": "这些令人心醉的时尚裤子也非常实用。",
        "description_en": "These hauntingly stylish trousers are also very practical",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_legs_5_rare 幽灵骑士的裤子 phantom rider's trousers 这些令人心醉的时尚裤子也非常实用。 these hauntingly stylish trousers are also very practical armor 护甲 legs legs armor armor_storage festive"
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
              "max_durability": 14655
            },
            "display": {
              "armor": "304",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "max_durability": "14655"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 334,
              "dexterity": 3,
              "firearm_resistance": 0.08,
              "max_durability": 16120
            },
            "display": {
              "armor": "334",
              "dexterity": "+3",
              "firearm_resistance": "+8%",
              "max_durability": "16120"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 365,
              "dexterity": 4,
              "firearm_resistance": 0.12,
              "max_durability": 17586
            },
            "display": {
              "armor": "365",
              "dexterity": "+4",
              "firearm_resistance": "+12%",
              "max_durability": "17586"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 395,
              "dexterity": 5,
              "firearm_resistance": 0.16,
              "max_durability": 19051
            },
            "display": {
              "armor": "395",
              "dexterity": "+5",
              "firearm_resistance": "+16%",
              "max_durability": "19051"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 426,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 20516
            },
            "display": {
              "armor": "426",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
              "max_durability": "20516"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 427,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 20516
            },
            "display": {
              "armor": "427",
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
        "description": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_legs_name",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_legs_rare_icon",
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
      "item_id": "wls2_halloween_23_armor_legs_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "en": {
          "description": "These hauntingly stylish trousers are also very practical",
          "full_description": "These hauntingly stylish trousers are also very practical",
          "name": "Phantom Rider's Trousers"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_legs_name",
        "zh": {
          "description": "这些令人心醉的时尚裤子也非常实用。",
          "full_description": "这些令人心醉的时尚裤子也非常实用。",
          "name": "幽灵骑士的裤子"
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
                "wls2_resourse_secondary_leather_6": 7,
                "wls2_resourse_tertiary_clothroll_5": 4
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_legs_6_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_legs_6_rare_recycle"
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
            "stack_id": "wls2_halloween_23_armor_legs_6_rare",
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
            "stack_id": "wls2_halloween_23_armor_legs_6_rare",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_legs_rare_icon",
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
        "death_penalty_reduction": {
          "default": 0.05
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
      "image_key": "be76e8b79e8e353b20af75050289a534b873ba8249c537cb6b0f8227862f3b0a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幽灵骑士的裤子",
        "name_en": "Phantom Rider's Trousers",
        "description_zh": "这些令人心醉的时尚裤子也非常实用。",
        "description_en": "These hauntingly stylish trousers are also very practical",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_legs_6_rare 幽灵骑士的裤子 phantom rider's trousers 这些令人心醉的时尚裤子也非常实用。 these hauntingly stylish trousers are also very practical armor 护甲 legs legs armor armor_storage festive"
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
            "key": "death_penalty_reduction",
            "label": "死亡耐久损失减免",
            "value": 0.05,
            "unit": "%",
            "display": "5%"
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
      "bodypart": 35,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 35,
        "description": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "name": "inventory_stack_view_wls2_halloween_23_armor_legs_name",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_legs_rare_icon",
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
      "item_id": "wls2_halloween_23_armor_legs_7_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "en": {
          "description": "These hauntingly stylish trousers are also very practical",
          "full_description": "These hauntingly stylish trousers are also very practical",
          "name": "Phantom Rider's Trousers"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_23_armor_legs_description",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_legs_name",
        "zh": {
          "description": "这些令人心醉的时尚裤子也非常实用。",
          "full_description": "这些令人心醉的时尚裤子也非常实用。",
          "name": "幽灵骑士的裤子"
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
                "wls2_resourse_secondary_cloth_6": 4,
                "wls2_resourse_secondary_leather_7": 7
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_23_armor_legs_7_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_23_armor_legs_7_rare_recycle"
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
            "stack_id": "wls2_halloween_23_armor_legs_7_rare",
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
            "stack_id": "wls2_halloween_23_armor_legs_7_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_legs_rare_icon",
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
        "death_penalty_reduction": {
          "default": 0.05
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
      "image_key": "be76e8b79e8e353b20af75050289a534b873ba8249c537cb6b0f8227862f3b0a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幽灵骑士的裤子",
        "name_en": "Phantom Rider's Trousers",
        "description_zh": "这些令人心醉的时尚裤子也非常实用。",
        "description_en": "These hauntingly stylish trousers are also very practical",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_halloween_23_armor_legs_7_rare 幽灵骑士的裤子 phantom rider's trousers 这些令人心醉的时尚裤子也非常实用。 these hauntingly stylish trousers are also very practical armor 护甲 legs legs armor armor_storage festive"
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
        "description": "inventory_stack_view_wls2_halloween_2h_staff_3_description",
        "full_description": "inventory_stack_view_wls2_halloween_2h_staff_3_description",
        "name": "inventory_stack_view_wls2_halloween_2h_staff_3_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary05/wls2_halloween_2h_staff_3",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_2h_staff_3"
      },
      "item_id": "wls2_halloween_2h_staff_3",
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
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_ingot_3": 4,
            "wls2_resourse_secondary_leather_3": 3,
            "wls2_resourse_secondary_plank_3": 5,
            "wls_bear_claw": 2
          },
          "is_legacy": true,
          "learn_exp": 400,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_halloween_2h_staff_3"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_3": 4,
                "wls2_resourse_secondary_leather_3": 3,
                "wls2_resourse_secondary_plank_3": 5,
                "wls_bear_claw": 2
              },
              "is_legacy": true,
              "learn_exp": 400,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_halloween_2h_staff_3"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_halloween_2h_staff_3"
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
      "weapon_id": "wls2_halloween_2h_staff_3",
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
      "image_key": "62c80c5494ea6ba416796f55ec99409da6345033ed8645cc1b7642bcfa565e26",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "碎颅者",
        "name_en": "Skull crusher",
        "description_zh": "它的名字就说明了一切",
        "description_en": "The name speaks for itself",
        "category_zh": "武器",
        "subcategory": "event_melee",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_2h_staff_3 碎颅者 skull crusher 它的名字就说明了一切 the name speaks for itself weapon 武器 event_melee weapon weapon_storage quick wls2_halloween_2h_staff_3"
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
      "bodypart": 19,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 19,
        "description": "inventory_stack_view_wls2_halloween_body_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_body_description",
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
      "item_id": "wls2_halloween_armor_body_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_body_description",
        "en": {
          "description": "Protective clothing of veteran Claude. As he says, it protects both from bullets and from the evil eye",
          "full_description": "Protective clothing of veteran Claude. As he says, it protects both from bullets and from the evil eye",
          "name": "Whitecrest armor"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_body_description",
        "name_key": "inventory_stack_view_wls2_halloween_body_name",
        "zh": {
          "description": "老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。",
          "full_description": "老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。",
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
                "inventory_stack_id": "wls2_halloween_armor_body_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_armor_body_3_recycle"
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
          "default": 125
        },
        "max_durability": {
          "default": 1700
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
        "description_zh": "老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。",
        "description_en": "Protective clothing of veteran Claude. As he says, it protects both from bullets and from the evil eye",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_armor_body_3 白峰护甲 whitecrest armor 老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。 protective clothing of veteran claude. as he says, it protects both from bullets and from the evil eye armor 护甲 body chest armor armor_storage"
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
            "value": 1700,
            "unit": "",
            "display": "1700"
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
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 20,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 20,
        "description": "inventory_stack_view_wls2_halloween_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_boots_description",
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
      "item_id": "wls2_halloween_armor_boots_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_boots_description",
        "en": {
          "description": "Protective clothing of veteran Claude. As he says, it protects both from bullets and from the evil eye",
          "full_description": "Protective clothing of veteran Claude. As he says, it protects both from bullets and from the evil eye",
          "name": "Whitecrest boots"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_boots_description",
        "name_key": "inventory_stack_view_wls2_halloween_boots_name",
        "zh": {
          "description": "老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。",
          "full_description": "老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。",
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
                "inventory_stack_id": "wls2_halloween_armor_boots_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_armor_boots_3_recycle"
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
          "default": 50
        },
        "max_durability": {
          "default": 2428
        },
        "move_speed_modifier": {
          "default": 0.05
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
        "description_zh": "老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。",
        "description_en": "Protective clothing of veteran Claude. As he says, it protects both from bullets and from the evil eye",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_armor_boots_3 白峰靴子 whitecrest boots 老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。 protective clothing of veteran claude. as he says, it protects both from bullets and from the evil eye armor 护甲 boots armor boots armor_storage"
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
            "value": 2428,
            "unit": "",
            "display": "2428"
          },
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.05,
            "unit": "%",
            "display": "+5%"
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
        "description": "inventory_stack_view_wls2_halloween_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_head_description",
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
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_armor_head_1",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_head_description",
        "en": {
          "description": "Won't protect you from the bullets, but will give you a spooky look",
          "full_description": "Won't protect you from the bullets, but will give you a spooky look",
          "name": "Pumpkin Helmet"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_head_description",
        "name_key": "inventory_stack_view_wls2_halloween_head_name",
        "zh": {
          "description": "不能防弹，却能让你看起来恐怖万分",
          "full_description": "不能防弹，却能让你看起来恐怖万分",
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
                "wls2_resourse_secondary_cloth_1": 2,
                "wls2_resourse_secondary_leather_1": 1
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_armor_head_1"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_armor_head_1_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_event_currency_pumpkin": 5
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_armor_head_1"
              },
              "show_only_if_learned": true,
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_event_trade_head"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_halloween_currency_pumpkin": 50
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_armor_head_1"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_trader_event_head"
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
          "default": 30
        },
        "max_durability": {
          "default": 330
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
        "armor",
        "head",
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
      "image_key": "050cec842c9abab557e4c5395a32ac16a9ab194a96415f9db455bea74eeaedff",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜头盔",
        "name_en": "Pumpkin Helmet",
        "description_zh": "不能防弹，却能让你看起来恐怖万分",
        "description_en": "Won't protect you from the bullets, but will give you a spooky look",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_armor_head_1 南瓜头盔 pumpkin helmet 不能防弹，却能让你看起来恐怖万分 won't protect you from the bullets, but will give you a spooky look armor 护甲 head armor head armor_storage"
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
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 19,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 19,
        "description": "inventory_stack_view_wls2_halloween_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_legs_description",
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
      "item_id": "wls2_halloween_armor_legs_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_legs_description",
        "en": {
          "description": "Protective clothing of veteran Claude. As he says, it protects both from bullets and from the evil eye",
          "full_description": "Protective clothing of veteran Claude. As he says, it protects both from bullets and from the evil eye",
          "name": "Whitecrest pants"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_legs_description",
        "name_key": "inventory_stack_view_wls2_halloween_legs_name",
        "zh": {
          "description": "老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。",
          "full_description": "老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。",
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
                "inventory_stack_id": "wls2_halloween_armor_legs_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_armor_legs_3_recycle"
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
          "default": 80
        },
        "max_durability": {
          "default": 2428
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
        "description_zh": "老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。",
        "description_en": "Protective clothing of veteran Claude. As he says, it protects both from bullets and from the evil eye",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_armor_legs_3 白峰裤子 whitecrest pants 老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。 protective clothing of veteran claude. as he says, it protects both from bullets and from the evil eye armor 护甲 legs armor legs armor_storage"
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
            "value": 2428,
            "unit": "",
            "display": "2428"
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
        "has_direct_recipe": true,
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
        "description": "inventory_stack_view_wls2_halloween_body_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_body_description",
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
          "armor_storage",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_event_armor_body_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_body_description",
        "en": {
          "description": "Protective clothing of veteran Claude. As he says, it protects both from bullets and from the evil eye",
          "full_description": "Protective clothing of veteran Claude. As he says, it protects both from bullets and from the evil eye",
          "name": "Whitecrest armor"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_body_description",
        "name_key": "inventory_stack_view_wls2_halloween_body_name",
        "zh": {
          "description": "老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。",
          "full_description": "老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。",
          "name": "白峰护甲"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 3,
            "wls2_resourse_secondary_rope_3": 4,
            "wls2_resourse_tertiary_clothroll_3": 4
          },
          "is_legacy": true,
          "learn_exp": 400,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_halloween_event_armor_body_3"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_3": 3,
                "wls2_resourse_secondary_rope_3": 4,
                "wls2_resourse_tertiary_clothroll_3": 4
              },
              "is_legacy": true,
              "learn_exp": 400,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_halloween_event_armor_body_3"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_halloween_event_armor_body_3"
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
        "max_durability": {
          "1": 2042,
          "2": 2246,
          "3": 2450,
          "4": 2655,
          "5": 2859
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
      "image_key": "a7976e8cba44799bab58d3e460f3bc2fd012ad03d2ea0d804f57e8c3ec59920d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "白峰护甲",
        "name_en": "Whitecrest armor",
        "description_zh": "老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。",
        "description_en": "Protective clothing of veteran Claude. As he says, it protects both from bullets and from the evil eye",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_event_armor_body_3 白峰护甲 whitecrest armor 老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。 protective clothing of veteran claude. as he says, it protects both from bullets and from the evil eye armor 护甲 body chest armor armor_storage festive"
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
        "has_direct_recipe": true,
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
        "description": "inventory_stack_view_wls2_halloween_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_boots_description",
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
          "armor_storage",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_event_armor_boots_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_boots_description",
        "en": {
          "description": "Protective clothing of veteran Claude. As he says, it protects both from bullets and from the evil eye",
          "full_description": "Protective clothing of veteran Claude. As he says, it protects both from bullets and from the evil eye",
          "name": "Whitecrest boots"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_boots_description",
        "name_key": "inventory_stack_view_wls2_halloween_boots_name",
        "zh": {
          "description": "老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。",
          "full_description": "老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。",
          "name": "白峰靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 2,
            "wls2_resourse_secondary_leather_3": 2,
            "wls2_resourse_tertiary_clothroll_3": 10
          },
          "is_legacy": true,
          "learn_exp": 400,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_halloween_event_armor_boots_3"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_3": 2,
                "wls2_resourse_secondary_leather_3": 2,
                "wls2_resourse_tertiary_clothroll_3": 10
              },
              "is_legacy": true,
              "learn_exp": 400,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_halloween_event_armor_boots_3"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_halloween_event_armor_boots_3"
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
        "description_zh": "老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。",
        "description_en": "Protective clothing of veteran Claude. As he says, it protects both from bullets and from the evil eye",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_event_armor_boots_3 白峰靴子 whitecrest boots 老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。 protective clothing of veteran claude. as he says, it protects both from bullets and from the evil eye armor 护甲 boots armor boots armor_storage festive"
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
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.1,
            "unit": "%",
            "display": "+10%"
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
        "has_direct_recipe": true,
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
        "description": "inventory_stack_view_wls2_halloween_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_halloween_legs_description",
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
          "armor_storage",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_halloween_event_armor_legs_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_legs_description",
        "en": {
          "description": "Protective clothing of veteran Claude. As he says, it protects both from bullets and from the evil eye",
          "full_description": "Protective clothing of veteran Claude. As he says, it protects both from bullets and from the evil eye",
          "name": "Whitecrest pants"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_legs_description",
        "name_key": "inventory_stack_view_wls2_halloween_legs_name",
        "zh": {
          "description": "老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。",
          "full_description": "老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。",
          "name": "白峰裤子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 2,
            "wls2_resourse_secondary_leather_3": 3,
            "wls2_resourse_tertiary_clothroll_3": 7
          },
          "is_legacy": true,
          "learn_exp": 400,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_halloween_event_armor_legs_3"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_3": 2,
                "wls2_resourse_secondary_leather_3": 3,
                "wls2_resourse_tertiary_clothroll_3": 7
              },
              "is_legacy": true,
              "learn_exp": 400,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_halloween_event_armor_legs_3"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_halloween_event_armor_legs_3"
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
        "max_durability": {
          "1": 1671,
          "2": 1838,
          "3": 2005,
          "4": 2172,
          "5": 2339
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
        "description_zh": "老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。",
        "description_en": "Protective clothing of veteran Claude. As he says, it protects both from bullets and from the evil eye",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_event_armor_legs_3 白峰裤子 whitecrest pants 老兵克劳德的坚固护甲。正如克劳德所说，这款护甲不仅可以防弹，还可以阻挡恶毒的眼光。 protective clothing of veteran claude. as he says, it protects both from bullets and from the evil eye armor 护甲 legs armor legs armor_storage festive"
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
        "description": "inventory_stack_view_wls2_halloween_melee_cross_2h_1_description",
        "full_description": "inventory_stack_view_wls2_halloween_melee_cross_2h_1_description",
        "name": "inventory_stack_view_wls2_halloween_melee_cross_2h_1_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_melee_cross_2h_1",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_event_melee_cross_2h_1"
      },
      "item_id": "wls2_halloween_event_melee_cross_2h_1",
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
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_leather_3": 2,
            "wls2_resourse_secondary_plank_2": 4,
            "wls2_resourse_secondary_rope_2": 3
          },
          "is_legacy": true,
          "learn_exp": 200,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_halloween_event_melee_cross_2h_1"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_leather_3": 2,
                "wls2_resourse_secondary_plank_2": 4,
                "wls2_resourse_secondary_rope_2": 3
              },
              "is_legacy": true,
              "learn_exp": 200,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_halloween_event_melee_cross_2h_1"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_halloween_event_melee_cross_2h_1"
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
      "weapon_id": "wls2_halloween_event_melee_cross_2h_1",
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
        "search_text": "wls2_halloween_event_melee_cross_2h_1 牧师 preacher 面对敌人，这把武器相当可靠 serves faithfully against all enemies weapon 武器 event_melee weapon weapon_storage quick festive wls2_halloween_event_melee_cross_2h_1"
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
        "description": "inventory_stack_view_wls2_halloween_melee_cross_2h_3_description",
        "full_description": "inventory_stack_view_wls2_halloween_melee_cross_2h_3_description",
        "name": "inventory_stack_view_wls2_halloween_melee_cross_2h_3_name",
        "rarity": "common",
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
        "weapon_id": "wls2_halloween_event_melee_cross_2h_2"
      },
      "item_id": "wls2_halloween_event_melee_cross_2h_2",
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
          "learn_exp": 400,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_halloween_event_melee_cross_2h_2"
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
              "learn_exp": 400,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_halloween_event_melee_cross_2h_2"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_halloween_event_melee_cross_2h_2"
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
          "1": 270,
          "2": 300,
          "3": 330,
          "4": 360,
          "5": 380,
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
      "weapon_id": "wls2_halloween_event_melee_cross_2h_2",
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
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_event_melee_cross_2h_2 神圣十字弩 holy cross 这个物品绝对是从当地教堂里偷来的 this item was definitely stolen from the local church weapon 武器 event_melee weapon weapon_storage quick festive wls2_halloween_event_melee_cross_2h_2"
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
              "damage": 270
            },
            "display": {
              "critical_hit_chance": "8%",
              "critical_modifier": "15%",
              "damage": "270"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.1,
              "critical_modifier": 0.3,
              "damage": 300
            },
            "display": {
              "critical_hit_chance": "10%",
              "critical_modifier": "30%",
              "damage": "300"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.15,
              "critical_modifier": 0.5,
              "damage": 330
            },
            "display": {
              "critical_hit_chance": "15%",
              "critical_modifier": "50%",
              "damage": "330"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.18,
              "critical_modifier": 0.7,
              "damage": 360
            },
            "display": {
              "critical_hit_chance": "18%",
              "critical_modifier": "70%",
              "damage": "360"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 1,
              "damage": 380
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "100%",
              "damage": "380"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.2,
              "critical_modifier": 1,
              "damage": 381
            },
            "display": {
              "critical_hit_chance": "20%",
              "critical_modifier": "100%",
              "damage": "381"
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
          "伤害：6 级起每级增加 1，最高 1380。",
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
        "description": "inventory_stack_view_wls2_halloween_range_crossbow_1h_description",
        "full_description": "inventory_stack_view_wls2_halloween_range_crossbow_1h_description",
        "name": "inventory_stack_view_wls2_halloween_range_crossbow_1h_name",
        "rarity": "common",
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
        "weapon_id": "wls2_halloween_event_range_crossbow_1h"
      },
      "item_id": "wls2_halloween_event_range_crossbow_1h",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_range_crossbow_1h_description",
        "en": {
          "description": "Catherine's favorite crossbow. She uses it to defend the ranch with Allwin.",
          "full_description": "Catherine's favorite crossbow. She uses it to defend the ranch with Allwin.",
          "name": "Thief's doom"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_range_crossbow_1h_description",
        "name_key": "inventory_stack_view_wls2_halloween_range_crossbow_1h_name",
        "zh": {
          "description": "这是卡瑟琳最喜欢的十字弩。她和阿尔文一起守护牧场时使用。",
          "full_description": "这是卡瑟琳最喜欢的十字弩。她和阿尔文一起守护牧场时使用。",
          "name": "盗贼的末日"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_3": 1,
            "wls2_resourse_secondary_plank_3": 4,
            "wls2_resourse_secondary_rope_3": 2
          },
          "is_legacy": true,
          "learn_exp": 400,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_halloween_event_range_crossbow_1h"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_3": 1,
                "wls2_resourse_secondary_plank_3": 4,
                "wls2_resourse_secondary_rope_3": 2
              },
              "is_legacy": true,
              "learn_exp": 400,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_halloween_event_range_crossbow_1h"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_halloween_event_range_crossbow_1h"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_crossbow_1h",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.1,
          "2": 0.12,
          "3": 0.14,
          "4": 0.16,
          "5": 0.18
        },
        "damage": {
          "1": 193,
          "2": 209,
          "3": 226,
          "4": 242,
          "5": 264,
          "per_level_after_max": 1
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
      "weapon_id": "wls2_halloween_event_range_crossbow_1h",
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
      "image_key": "408c4b283fadcbc0cb7928e528d27445429ea997bf9ca3007cf3c9e806ed06e2",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "盗贼的末日",
        "name_en": "Thief's doom",
        "description_zh": "这是卡瑟琳最喜欢的十字弩。她和阿尔文一起守护牧场时使用。",
        "description_en": "Catherine's favorite crossbow. She uses it to defend the ranch with Allwin.",
        "category_zh": "武器",
        "subcategory": "crossbow",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_event_range_crossbow_1h 盗贼的末日 thief's doom 这是卡瑟琳最喜欢的十字弩。她和阿尔文一起守护牧场时使用。 catherine's favorite crossbow. she uses it to defend the ranch with allwin. weapon 武器 crossbow weapon weapon_storage quick festive wls2_halloween_event_range_crossbow_1h"
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
              "damage": 193
            },
            "display": {
              "critical_hit_chance": "10%",
              "damage": "193"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.12,
              "damage": 209
            },
            "display": {
              "critical_hit_chance": "12%",
              "damage": "209"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.14,
              "damage": 226
            },
            "display": {
              "critical_hit_chance": "14%",
              "damage": "226"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.16,
              "damage": 242
            },
            "display": {
              "critical_hit_chance": "16%",
              "damage": "242"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 264
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "264"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_hit_chance": 0.18,
              "damage": 265
            },
            "display": {
              "critical_hit_chance": "18%",
              "damage": "265"
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
        "rarity": "common",
        "sorting_group_id": "crossbow",
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_crossbow_2h",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_event_range_crossbow_2h"
      },
      "item_id": "wls2_halloween_event_range_crossbow_2h",
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
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_4": 1,
            "wls2_resourse_secondary_plank_4": 4,
            "wls2_resourse_secondary_rope_4": 3
          },
          "is_legacy": true,
          "learn_exp": 800,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_halloween_event_range_crossbow_2h"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_4": 1,
                "wls2_resourse_secondary_plank_4": 4,
                "wls2_resourse_secondary_rope_4": 3
              },
              "is_legacy": true,
              "learn_exp": 800,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_halloween_event_range_crossbow_2h"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_halloween_event_range_crossbow_2h"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_crossbow_2h",
      "stat_curves": {
        "critical_hit_chance": {
          "1": 0.05,
          "2": 0.07,
          "3": 0.09,
          "4": 0.11,
          "5": 0.13
        },
        "damage": {
          "1": 369,
          "2": 385,
          "3": 440,
          "4": 490,
          "5": 517,
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
          "1": 11,
          "2": 12,
          "3": 13,
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
      "weapon_id": "wls2_halloween_event_range_crossbow_2h",
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
      "image_key": "e320b1dc5f65176532fb5fbfedd75b514c37721b152d689e584a3db80869c44e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "猎弩",
        "name_en": "Hunting crossbow",
        "description_zh": "强力双手武器，可以射出致命栓钉。",
        "description_en": "A powerful two-handed weapon that shoots lethal bolts.",
        "category_zh": "武器",
        "subcategory": "crossbow",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_event_range_crossbow_2h 猎弩 hunting crossbow 强力双手武器，可以射出致命栓钉。 a powerful two-handed weapon that shoots lethal bolts. weapon 武器 crossbow weapon weapon_storage quick festive wls2_halloween_event_range_crossbow_2h"
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
            "value": 150,
            "unit": "",
            "display": "150"
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
              "damage": 369,
              "penetrating_damage": 11
            },
            "display": {
              "critical_hit_chance": "5%",
              "damage": "369",
              "penetrating_damage": "11"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_hit_chance": 0.07,
              "damage": 385,
              "penetrating_damage": 12
            },
            "display": {
              "critical_hit_chance": "7%",
              "damage": "385",
              "penetrating_damage": "12"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_hit_chance": 0.09,
              "damage": 440,
              "penetrating_damage": 13
            },
            "display": {
              "critical_hit_chance": "9%",
              "damage": "440",
              "penetrating_damage": "13"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_hit_chance": 0.11,
              "damage": 490,
              "penetrating_damage": 15
            },
            "display": {
              "critical_hit_chance": "11%",
              "damage": "490",
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
        "description": "inventory_stack_view_wls2_halloween_range_pistol_description",
        "full_description": "inventory_stack_view_wls2_halloween_range_pistol_description",
        "name": "inventory_stack_view_wls2_halloween_range_pistol_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_pistol",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_event_range_pistol"
      },
      "item_id": "wls2_halloween_event_range_pistol",
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
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_4": 2,
            "wls2_resourse_fourfold_nails_4": 2,
            "wls2_resourse_secondary_ingot_4": 6
          },
          "is_legacy": true,
          "learn_exp": 400,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_halloween_event_range_pistol"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_4": 2,
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_ingot_4": 6
              },
              "is_legacy": true,
              "learn_exp": 400,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_halloween_event_range_pistol"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_halloween_event_range_pistol"
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
          "default": 0.2
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
      "weapon_id": "wls2_halloween_event_range_pistol",
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
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_event_range_pistol 手枪 pistol 枪声震耳欲聋且伤害极高 deafening and painful shots weapon 武器 pistol weapon weapon_storage quick wls2_halloween_event_range_pistol"
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
        "description": "inventory_stack_view_wls2_halloween_range_shotgun_description",
        "full_description": "inventory_stack_view_wls2_halloween_range_shotgun_description",
        "name": "inventory_stack_view_wls2_halloween_range_shotgun_name",
        "rarity": "common",
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
        "weapon_id": "wls2_halloween_event_range_shotgun"
      },
      "item_id": "wls2_halloween_event_range_shotgun",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_range_shotgun_description",
        "en": {
          "description": "Deadly ranged weapon. Farmer's Allwin handiwork.",
          "full_description": "Deadly ranged weapon. Farmer's Allwin handiwork.",
          "name": "Pumpker's Message"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_range_shotgun_description",
        "name_key": "inventory_stack_view_wls2_halloween_range_shotgun_name",
        "zh": {
          "description": "致命远程武器，出自农夫的阿尔文之手。",
          "full_description": "致命远程武器，出自农夫的阿尔文之手。",
          "name": "南瓜人之信"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_4": 3,
            "wls2_resourse_fourfold_nails_4": 2,
            "wls2_resourse_secondary_ingot_4": 6,
            "wls2_resourse_secondary_plank_5": 4
          },
          "is_legacy": true,
          "learn_exp": 800,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_halloween_event_range_shotgun"
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
                "wls2_resourse_secondary_ingot_4": 6,
                "wls2_resourse_secondary_plank_5": 4
              },
              "is_legacy": true,
              "learn_exp": 800,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_halloween_event_range_shotgun"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_halloween_event_range_shotgun"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
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
          "1": 226,
          "2": 226,
          "3": 226,
          "4": 226,
          "5": 226
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
          "type": "simple"
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
      "weapon_id": "wls2_halloween_event_range_shotgun",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
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
        "name_zh": "南瓜人之信",
        "name_en": "Pumpker's Message",
        "description_zh": "致命远程武器，出自农夫的阿尔文之手。",
        "description_en": "Deadly ranged weapon. Farmer's Allwin handiwork.",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_event_range_shotgun 南瓜人之信 pumpker's message 致命远程武器，出自农夫的阿尔文之手。 deadly ranged weapon. farmer's allwin handiwork. weapon 武器 shotgun weapon weapon_storage quick festive wls2_halloween_event_range_shotgun"
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
        "rarity": "common",
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
        "weapon_id": "wls2_halloween_event_range_shotgun_axe"
      },
      "item_id": "wls2_halloween_event_range_shotgun_axe",
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
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_4": 2,
            "wls2_resourse_fourfold_nails_4": 2,
            "wls2_resourse_secondary_ingot_4": 8,
            "wls2_resourse_secondary_plank_5": 4
          },
          "is_legacy": true,
          "learn_exp": 800,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_halloween_event_range_shotgun_axe"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_4": 2,
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_ingot_4": 8,
                "wls2_resourse_secondary_plank_5": 4
              },
              "is_legacy": true,
              "learn_exp": 800,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_halloween_event_range_shotgun_axe"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_halloween_event_range_shotgun_axe"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
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
      "weapon_id": "wls2_halloween_event_range_shotgun_axe",
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
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_event_range_shotgun_axe 古董 сuriosity 刻有刀刃的独特枪支。 a unique firearm with a blade on it.  tool 工具 axe wls2_tools_axe_0 wls2_tools_axe_1 wls2_tools_axe_2 wls2_tools_axe_3 wls2_tools_axe_4 wls2_tools_axe_5 weapon weapon_storage quick hatchet_iron hatchet tool festive wls2_halloween_event_range_shotgun_axe"
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
        "description": "inventory_stack_view_wls_halloween_scythe_description",
        "full_description": "inventory_stack_view_wls_halloween_scythe_description",
        "name": "inventory_stack_view_wls_halloween_scythe_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_knife"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_halloween_scythe",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_event_scythe"
      },
      "item_id": "wls2_halloween_event_scythe",
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
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_ingot_4": 4,
            "wls2_resourse_secondary_leather_4": 2,
            "wls2_resourse_secondary_plank_4": 3
          },
          "is_legacy": true,
          "learn_exp": 400,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_halloween_event_scythe"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_4": 4,
                "wls2_resourse_secondary_leather_4": 2,
                "wls2_resourse_secondary_plank_4": 3
              },
              "is_legacy": true,
              "learn_exp": 400,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_halloween_event_scythe"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_halloween_event_scythe"
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
      "weapon_id": "wls2_halloween_event_scythe",
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
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_event_scythe 长柄镰刀 scythe 拿上它，你就能够化身成割人如割草的死神！或者也可以真的用来割一割院子里的杂草。 you can embody the grim reaper, come to cut life short! or you can simply harvest the corn. weapon 武器 event_melee weapon weapon_storage quick festive wls2_halloween_event_scythe"
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
        "description": "inventory_stack_view_wls2_halloween_melee_cross_2h_1_description",
        "full_description": "inventory_stack_view_wls2_halloween_melee_cross_2h_1_description",
        "name": "inventory_stack_view_wls2_halloween_melee_cross_2h_1_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_melee_cross_2h_1",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_melee_cross_2h_1"
      },
      "item_id": "wls2_halloween_melee_cross_2h_1",
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
                "wls2_resourse_secondary_leather_2": 2,
                "wls2_resourse_secondary_plank_2": 2,
                "wls2_resourse_secondary_rope_2": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_melee_cross_2h_1"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_melee_cross_2h_1_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_melee_cross_2h_1",
      "stat_curves": {
        "max_durability": {
          "default": 80
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
        "attack_ending_time": 1.1,
        "attack_range": 1.6,
        "damage": 148,
        "durability_price": 1,
        "hit_empty_sounds": [
          "sounds_weapos_whoosh"
        ],
        "hit_sounds": [
          "studded_club_hit2"
        ],
        "hit_states": {
          "states_count": [
            0
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
      "weapon_id": "wls2_halloween_melee_cross_2h_1",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.7000000000000002,
        "attack_damage_time": 0.6,
        "attack_ending_time": 1.1,
        "attack_range": 1.6,
        "attacks_per_second_inferred": 0.588235294117647,
        "damage": 148,
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
        "search_text": "wls2_halloween_melee_cross_2h_1 牧师 preacher 面对敌人，这把武器相当可靠 serves faithfully against all enemies weapon 武器 event_melee weapon weapon_storage quick festive wls2_halloween_melee_cross_2h_1"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 148,
            "unit": "",
            "display": "148"
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
        "description": "inventory_stack_view_wls2_halloween_melee_cross_2h_3_description",
        "full_description": "inventory_stack_view_wls2_halloween_melee_cross_2h_3_description",
        "name": "inventory_stack_view_wls2_halloween_melee_cross_2h_3_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_melee_cross_2h_2",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_melee_cross_2h_2"
      },
      "item_id": "wls2_halloween_melee_cross_2h_2",
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
      "rarity": "common",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_3": 2,
                "wls2_resourse_secondary_leather_3": 2,
                "wls2_resourse_secondary_plank_3": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_melee_cross_2h_2"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_melee_cross_2h_2_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_melee_cross_2h_2",
      "stat_curves": {
        "max_durability": {
          "default": 80
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
        "attack_ending_time": 1.1,
        "attack_range": 1.6,
        "damage": 221,
        "durability_price": 1,
        "hit_empty_sounds": [
          "sounds_weapos_whoosh"
        ],
        "hit_sounds": [
          "sounds_pve_axe_hit1"
        ],
        "hit_states": {
          "states_count": [
            0
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
      "weapon_id": "wls2_halloween_melee_cross_2h_2",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.7000000000000002,
        "attack_damage_time": 0.6,
        "attack_ending_time": 1.1,
        "attack_range": 1.6,
        "attacks_per_second_inferred": 0.588235294117647,
        "damage": 221,
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
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_melee_cross_2h_2 神圣十字弩 holy cross 这个物品绝对是从当地教堂里偷来的 this item was definitely stolen from the local church weapon 武器 event_melee weapon weapon_storage quick festive wls2_halloween_melee_cross_2h_2"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 221,
            "unit": "",
            "display": "221"
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
        "description": "inventory_stack_view_wls2_halloween_range_crossbow_1h_description",
        "full_description": "inventory_stack_view_wls2_halloween_range_crossbow_1h_description",
        "name": "inventory_stack_view_wls2_halloween_range_crossbow_1h_name",
        "rarity": "common",
        "sorting_group_id": "crossbow",
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_crossbow_1h",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_range_crossbow_1h"
      },
      "item_id": "wls2_halloween_range_crossbow_1h",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_range_crossbow_1h_description",
        "en": {
          "description": "Catherine's favorite crossbow. She uses it to defend the ranch with Allwin.",
          "full_description": "Catherine's favorite crossbow. She uses it to defend the ranch with Allwin.",
          "name": "Thief's doom"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_range_crossbow_1h_description",
        "name_key": "inventory_stack_view_wls2_halloween_range_crossbow_1h_name",
        "zh": {
          "description": "这是卡瑟琳最喜欢的十字弩。她和阿尔文一起守护牧场时使用。",
          "full_description": "这是卡瑟琳最喜欢的十字弩。她和阿尔文一起守护牧场时使用。",
          "name": "盗贼的末日"
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
                "wls2_resourse_secondary_ingot_3": 2,
                "wls2_resourse_secondary_plank_4": 4,
                "wls2_resourse_secondary_rope_3": 4
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_range_crossbow_1h"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_range_crossbow_1h_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_crossbow_1h",
      "stat_curves": {
        "max_durability": {
          "default": 80
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
      "subcategory": "crossbow",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
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
          "shoot_repeat": true,
          "type": "bow"
        },
        "attack_damage_time": 0.4,
        "attack_ending_time": 0.4,
        "attack_range": 5,
        "damage": 125,
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
            3
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
      "weapon_id": "wls2_halloween_range_crossbow_1h",
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
        "attack_range": 5,
        "attacks_per_second_inferred": 1.25,
        "damage": 125,
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
        "description_zh": "这是卡瑟琳最喜欢的十字弩。她和阿尔文一起守护牧场时使用。",
        "description_en": "Catherine's favorite crossbow. She uses it to defend the ranch with Allwin.",
        "category_zh": "武器",
        "subcategory": "crossbow",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_range_crossbow_1h 盗贼的末日 thief's doom 这是卡瑟琳最喜欢的十字弩。她和阿尔文一起守护牧场时使用。 catherine's favorite crossbow. she uses it to defend the ranch with allwin. weapon 武器 crossbow weapon weapon_storage quick festive wls2_halloween_range_crossbow_1h"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 125,
            "unit": "",
            "display": "125"
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
        "description": "inventory_stack_view_wls2_halloween_range_crossbow_2h_description",
        "full_description": "inventory_stack_view_wls2_halloween_range_crossbow_2h_description",
        "name": "inventory_stack_view_wls2_halloween_range_crossbow_2h_name",
        "rarity": "common",
        "sorting_group_id": "crossbow",
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_crossbow_2h",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_range_crossbow_2h"
      },
      "item_id": "wls2_halloween_range_crossbow_2h",
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
      "rarity": "common",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_4": 2,
                "wls2_resourse_secondary_plank_4": 4,
                "wls2_resourse_secondary_rope_4": 4
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_range_crossbow_2h"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_range_crossbow_2h_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_crossbow_2h",
      "stat_curves": {
        "max_durability": {
          "default": 80
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
        "attack_range": 5,
        "damage": 195,
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
      "weapon_id": "wls2_halloween_range_crossbow_2h",
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
        "attack_range": 5,
        "attacks_per_second_inferred": 1.25,
        "damage": 195,
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
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_range_crossbow_2h 猎弩 hunting crossbow 强力双手武器，可以射出致命栓钉。 a powerful two-handed weapon that shoots lethal bolts. weapon 武器 crossbow weapon weapon_storage quick festive wls2_halloween_range_crossbow_2h"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 195,
            "unit": "",
            "display": "195"
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
        "description": "inventory_stack_view_wls2_halloween_range_pistol_description",
        "full_description": "inventory_stack_view_wls2_halloween_range_pistol_description",
        "name": "inventory_stack_view_wls2_halloween_range_pistol_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_pistol",
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_pistol",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_range_pistol"
      },
      "item_id": "wls2_halloween_range_pistol",
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
      "rarity": "common",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_5": 1,
                "wls2_resourse_secondary_ingot_1": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_range_pistol"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_range_pistol_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_pistol",
      "stat_curves": {
        "max_durability": {
          "default": 80
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
      "subcategory": "pistol",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "festive"
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
        "damage": 218,
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
          "firearm",
          "pistol"
        ]
      },
      "weapon_id": "wls2_halloween_range_pistol",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.8333333333333334,
        "damage": 218,
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
      "image_key": "9cf2356eb8ae7d8a679cfb2eaa7d22de8152dd468083bf6bc2d0a967c6914e69",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "手枪",
        "name_en": "Pistol",
        "description_zh": "枪声震耳欲聋且伤害极高",
        "description_en": "Deafening and painful shots",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_range_pistol 手枪 pistol 枪声震耳欲聋且伤害极高 deafening and painful shots weapon 武器 pistol weapon weapon_storage quick festive wls2_halloween_range_pistol"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 218,
            "unit": "",
            "display": "218"
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
            "value": 80,
            "unit": "",
            "display": "80"
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
        "name": "inventory_stack_view_wls2_halloween_range_shotgun_name",
        "rarity": "common",
        "sorting_group_id": "weapon_range_shotgun",
        "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_shotgun",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_range_shotgun"
      },
      "item_id": "wls2_halloween_range_shotgun",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_range_shotgun_description",
        "en": {
          "description": "Deadly ranged weapon. Farmer's Allwin handiwork.",
          "full_description": "Deadly ranged weapon. Farmer's Allwin handiwork.",
          "name": "Pumpker's Message"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_range_shotgun_description",
        "name_key": "inventory_stack_view_wls2_halloween_range_shotgun_name",
        "zh": {
          "description": "致命远程武器，出自农夫的阿尔文之手。",
          "full_description": "致命远程武器，出自农夫的阿尔文之手。",
          "name": "南瓜人之信"
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
                "wls2_resourse_fourfold_gunparts_1": 1,
                "wls2_resourse_secondary_ingot_1": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_range_shotgun"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_range_shotgun_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_shotgun",
      "stat_curves": {
        "max_durability": {
          "default": 80
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
      "tier": 1,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 30,
          "radius": 3.5,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 0.45,
        "attack_range": 3.5,
        "damage": 210,
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
        "prefab_common_id": "@halloween_gun_2",
        "prefab_pbr_id": "@halloween_gun_2_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_halloween_range_shotgun",
      "weapon_summary": {
        "attack_action": {
          "angle": 30,
          "radius": 3.5,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 0.7,
        "attack_damage_time": 0.25,
        "attack_ending_time": 0.45,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 1.4285714285714286,
        "damage": 210,
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
      "image_key": "ad4545c3d3e21558f4c83774a345709c72f78a4dc91356b3fab7537c0322fb20",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "南瓜人之信",
        "name_en": "Pumpker's Message",
        "description_zh": "致命远程武器，出自农夫的阿尔文之手。",
        "description_en": "Deadly ranged weapon. Farmer's Allwin handiwork.",
        "category_zh": "武器",
        "subcategory": "shotgun",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_range_shotgun 南瓜人之信 pumpker's message 致命远程武器，出自农夫的阿尔文之手。 deadly ranged weapon. farmer's allwin handiwork. weapon 武器 shotgun weapon weapon_storage quick festive wls2_halloween_range_shotgun"
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
            "value": 1.4285714285714286,
            "unit": "次/秒",
            "display": "1.43 次/秒"
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
            "value": 3.5,
            "unit": "",
            "display": "3.5"
          }
        ],
        "fixed": [
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 0.7,
            "unit": "秒",
            "display": "0.7 秒"
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
            "value": 30,
            "unit": "°",
            "display": "30°"
          },
          {
            "key": "attack_radius",
            "label": "攻击范围半径",
            "value": 3.5,
            "unit": "",
            "display": "3.5"
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
        "rarity": "common",
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
          "festive"
        ],
        "tier": 1,
        "tool_id": "wls2_halloween_range_shotgun_axe",
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_range_shotgun_axe"
      },
      "item_id": "wls2_halloween_range_shotgun_axe",
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
      "rarity": "common",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_1": 1,
                "wls2_resourse_secondary_ingot_1": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_range_shotgun_axe"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_range_shotgun_axe_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_shotgun_axe",
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
        "festive"
      ],
      "throwing_item": null,
      "tier": 1,
      "tool_id": "wls2_halloween_range_shotgun_axe",
      "upgrade": null,
      "use_behaviour": null,
      "weapon": {
        "attack_action": {
          "angle": 30,
          "radius": 3.5,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.35,
        "attack_range": 3.5,
        "damage": 160,
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
        "prefab_common_id": "@halloween_gun_1",
        "prefab_pbr_id": "@halloween_gun_1_pbr",
        "speed_modifier": 1,
        "tags": [
          "ranged",
          "firearm",
          "shotgun"
        ]
      },
      "weapon_id": "wls2_halloween_range_shotgun_axe",
      "weapon_summary": {
        "attack_action": {
          "angle": 30,
          "radius": 3.5,
          "type": "cone"
        },
        "attack_cycle_time_inferred": 1.6,
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.35,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.625,
        "damage": 160,
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
      "image_key": "c23acd4f3b25946e2425cc49e5fe3188be6b88d3cda68116148d229697720094",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "古董",
        "name_en": "Сuriosity",
        "description_zh": "刻有刀刃的独特枪支。",
        "description_en": "A unique firearm with a blade on it. ",
        "category_zh": "工具",
        "subcategory": "axe",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_range_shotgun_axe 古董 сuriosity 刻有刀刃的独特枪支。 a unique firearm with a blade on it.  tool 工具 axe wls2_tools_axe_0 wls2_tools_axe_1 wls2_tools_axe_2 wls2_tools_axe_3 wls2_tools_axe_4 wls2_tools_axe_5 weapon weapon_storage quick festive wls2_halloween_range_shotgun_axe"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 160,
            "unit": "",
            "display": "160"
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
            "value": 3.5,
            "unit": "",
            "display": "3.5"
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
          },
          {
            "key": "attack_angle",
            "label": "攻击扇面",
            "value": 30,
            "unit": "°",
            "display": "30°"
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
        "description": "inventory_stack_view_wls_halloween_scythe_description",
        "full_description": "inventory_stack_view_wls_halloween_scythe_description",
        "name": "inventory_stack_view_wls_halloween_scythe_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary03/wls_halloween_scythe",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "festive"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_halloween_scythe"
      },
      "item_id": "wls2_halloween_scythe",
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
      "rarity": "common",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_3": 2,
                "wls2_resourse_secondary_leather_3": 2,
                "wls2_resourse_secondary_plank_3": 2
              },
              "result": {
                "inventory_stack_id": "wls2_halloween_scythe"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_halloween_scythe_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_halloween_scythe",
      "stat_curves": {
        "max_durability": {
          "default": 80
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
        "quick",
        "festive"
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
        "attack_damage_time": 0.6,
        "attack_ending_time": 0.7,
        "attack_range": 2,
        "damage": 230,
        "durability_price": 1,
        "hit_empty_sounds": [
          "sounds_weapos_whoosh",
          "sounds_weapos_whoosh"
        ],
        "hit_sounds": [
          "wls2_weapon_melee_middle_5"
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
      "weapon_id": "wls2_halloween_scythe",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2999999999999998,
        "attack_damage_time": 0.6,
        "attack_ending_time": 0.7,
        "attack_range": 2,
        "attacks_per_second_inferred": 0.7692307692307694,
        "damage": 230,
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
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_scythe 长柄镰刀 scythe 拿上它，你就能够化身成割人如割草的死神！或者也可以真的用来割一割院子里的杂草。 you can embody the grim reaper, come to cut life short! or you can simply harvest the corn. weapon 武器 event_melee weapon weapon_storage quick festive wls2_halloween_scythe"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 230,
            "unit": "",
            "display": "230"
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
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_halloween_stakegun_4_description",
        "full_description": "inventory_stack_view_wls2_halloween_stakegun_4_description",
        "name": "inventory_stack_view_wls2_halloween_stakegun_4_name",
        "rarity": "common",
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
        "weapon_id": "wls2_halloween_stakegun_4"
      },
      "item_id": "wls2_halloween_stakegun_4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_halloween_stakegun_4_description",
        "en": {
          "description": "Deadly weapon of demon hunters",
          "full_description": "Deadly weapon of demon hunters",
          "name": "Impaler"
        },
        "full_description_key": "inventory_stack_view_wls2_halloween_stakegun_4_description",
        "name_key": "inventory_stack_view_wls2_halloween_stakegun_4_name",
        "zh": {
          "description": "恶魔猎人的致命武器",
          "full_description": "恶魔猎人的致命武器",
          "name": "穿刺者"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_gunparts_4": 4,
            "wls2_resourse_fourfold_nails_4": 3,
            "wls2_resourse_secondary_plank_4": 4,
            "wls_bear_claw": 3
          },
          "is_legacy": true,
          "learn_exp": 800,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_halloween_stakegun_4"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_gunparts_4": 4,
                "wls2_resourse_fourfold_nails_4": 3,
                "wls2_resourse_secondary_plank_4": 4,
                "wls_bear_claw": 3
              },
              "is_legacy": true,
              "learn_exp": 800,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_halloween_stakegun_4"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_halloween_stakegun_4"
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
          "min_charge_time": 1,
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
      "weapon_id": "wls2_halloween_stakegun_4",
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
        "description_zh": "恶魔猎人的致命武器",
        "description_en": "Deadly weapon of demon hunters",
        "category_zh": "武器",
        "subcategory": "pistol",
        "rarity_zh": "普通",
        "search_text": "wls2_halloween_stakegun_4 穿刺者 impaler 恶魔猎人的致命武器 deadly weapon of demon hunters weapon 武器 pistol weapon weapon_storage quick festive wls2_halloween_stakegun_4"
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
        "prefab_common_id": "@Molotov",
        "speed_modifier": 1,
        "start_time": 2,
        "tool_damage": 16
      },
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_molotov_description",
        "full_description": "inventory_stack_view_wls2_molotov_description",
        "max_amount": 20,
        "name": "inventory_stack_view_wls2_molotov_name",
        "rarity": "rare",
        "show_amounts": true,
        "sprite": "UI_WW_AlphaBinary10/wls2_consumable_throw_molotov",
        "tags": [
          "quick"
        ],
        "type": "limited",
        "weapon_id": "wls2_molotov"
      },
      "item_id": "wls2_molotov",
      "localization": {
        "description_key": "inventory_stack_view_wls2_molotov_description",
        "en": {
          "description": "Hotter than chili and twice as explosive",
          "full_description": "Hotter than chili and twice as explosive",
          "name": "Burning mix"
        },
        "full_description_key": "inventory_stack_view_wls2_molotov_description",
        "name_key": "inventory_stack_view_wls2_molotov_name",
        "zh": {
          "description": "比辣椒更热，两倍于爆炸性",
          "full_description": "比辣椒更热，两倍于爆炸性",
          "name": "燃烧混合物"
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
      "sprite": "UI_WW_AlphaBinary10/wls2_consumable_throw_molotov",
      "stat_curves": {},
      "stat_labels": {},
      "subcategory": "other_tool",
      "tags": [
        "quick"
      ],
      "throwing_item": {
        "hit_sound_id": "wls_dynamite_explosion",
        "max_range": 5,
        "prefab": "@Molotov",
        "throw_end_time": 0.5,
        "throw_height": 2,
        "throw_max_rotation_speed": 500,
        "throw_min_rotation_speed": 100,
        "throw_release_time": 0.125,
        "throw_speed": 5,
        "throw_start_time": 0.85,
        "zone_trigger_id": "wls2_zone_thrown_molotov",
        "zone_trigger_life_time": 5
      },
      "tier": null,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": {
        "throwing_item_id": "wls2_molotov",
        "type": "throw_item"
      },
      "weapon": {
        "attack_action": {
          "type": "simple"
        },
        "attack_damage_time": 0.85,
        "attack_ending_time": 0.15,
        "attack_range": 5,
        "damage": 100,
        "hit_states": {
          "states_count": [
            0
          ],
          "type": "random"
        },
        "speed_modifier": 1,
        "tags": [
          "fire"
        ]
      },
      "weapon_id": "wls2_molotov",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.0,
        "attack_damage_time": 0.85,
        "attack_ending_time": 0.15,
        "attack_range": 5,
        "attacks_per_second_inferred": 1.0,
        "damage": 100,
        "durability_price": null,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "fire"
        ]
      },
      "image_key": "529b3697aacfda0e5b5e1c20aea8a40c5be23973d03502743ffe7112f9e17656",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "燃烧混合物",
        "name_en": "Burning mix",
        "description_zh": "比辣椒更热，两倍于爆炸性",
        "description_en": "Hotter than chili and twice as explosive",
        "category_zh": "工具",
        "subcategory": "other_tool",
        "rarity_zh": "稀有",
        "search_text": "wls2_molotov 燃烧混合物 burning mix 比辣椒更热，两倍于爆炸性 hotter than chili and twice as explosive tool 工具 other_tool quick wls2_molotov"
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
            "value": 1.0,
            "unit": "次/秒",
            "display": "1 次/秒"
          },
          {
            "key": "attack_range",
            "label": "攻击距离",
            "value": 5,
            "unit": "",
            "display": "5"
          },
          {
            "key": "attack_cycle",
            "label": "基础攻击间隔",
            "value": 1.0,
            "unit": "秒",
            "display": "1 秒"
          }
        ],
        "fixed": [
          {
            "key": "gathering_damage",
            "label": "采集效率",
            "value": 16,
            "unit": "",
            "display": "16"
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
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "weapon",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_wls2_mosquito_torch_description",
        "dot": 2,
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_mosquito_torch_description",
        "name": "inventory_stack_view_wls2_mosquito_torch_name",
        "rarity": "uncommon",
        "sorting_group_id": "tool_torch",
        "sprite": "UI_WW_AlphaBinary06/wls2_mosquito_torch",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick",
          "light_source",
          "mosquito_torch",
          "fire"
        ],
        "tier": 5,
        "type": "use_durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls2_mosquito_torch"
      },
      "item_id": "wls2_mosquito_torch",
      "localization": {
        "description_key": "inventory_stack_view_wls2_mosquito_torch_description",
        "en": {
          "description": "Scares away mosquitoes",
          "full_description": "Scares away mosquitoes",
          "name": "Repellent torch"
        },
        "full_description_key": "inventory_stack_view_wls2_mosquito_torch_description",
        "name_key": "inventory_stack_view_wls2_mosquito_torch_name",
        "zh": {
          "description": "驱赶走蚊子",
          "full_description": "驱赶走蚊子",
          "name": "驱蚊火炬"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_miscellaneous_vodka_1": 1,
            "wls2_resourse_secondary_plank_5": 1,
            "wls2_resourse_secondary_rope_5": 2
          },
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_mosquito_torch",
      "stat_curves": {
        "max_durability": {
          "default": 100
        },
        "mosquito_reduction": {
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
        "mosquito_reduction": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mosquito_reduction",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mosquito_reduction",
          "en": "Mosquito Protection",
          "zh": "防蚊保护"
        }
      },
      "subcategory": "other_weapon",
      "tags": [
        "weapon",
        "weapon_storage",
        "quick",
        "light_source",
        "mosquito_torch",
        "fire"
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
        "attack_ending_time": 0.7,
        "attack_range": 1.3,
        "damage": 80,
        "durability_price": 1,
        "hit_empty_sounds": [
          "sounds_weapons_torch",
          "sounds_weapons_torch",
          "sounds_weapons_torch"
        ],
        "hit_sounds": [
          "sounds_weapons_torch",
          "sounds_weapons_torch",
          "sounds_weapons_torch"
        ],
        "hit_states": {
          "states_count": [
            1,
            2
          ],
          "type": "random"
        },
        "prefab_common_id": "@Torch_repellent",
        "prefab_pbr_id": "@Torch_repellent_pbr",
        "speed_modifier": 1,
        "tags": [
          "melee",
          "fire"
        ]
      },
      "weapon_id": "wls2_mosquito_torch",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.5,
        "attack_ending_time": 0.7,
        "attack_range": 1.3,
        "attacks_per_second_inferred": 0.8333333333333334,
        "damage": 80,
        "durability_price": 1,
        "level_damage": null,
        "max_damage": null,
        "penetrating_damage": null,
        "speed_modifier": 1,
        "tags": [
          "melee",
          "fire"
        ]
      },
      "image_key": "b9686eb14f6aff931cc002d795bdc764b8cef0057833202fedb4bffd020b55de",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "驱蚊火炬",
        "name_en": "Repellent torch",
        "description_zh": "驱赶走蚊子",
        "description_en": "Scares away mosquitoes",
        "category_zh": "武器",
        "subcategory": "other_weapon",
        "rarity_zh": "优秀",
        "search_text": "wls2_mosquito_torch 驱蚊火炬 repellent torch 驱赶走蚊子 scares away mosquitoes weapon 武器 other_weapon weapon weapon_storage quick light_source mosquito_torch fire wls2_mosquito_torch"
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
            "value": 0.8333333333333334,
            "unit": "次/秒",
            "display": "0.83 次/秒"
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
            "value": 1.3,
            "unit": "",
            "display": "1.3"
          }
        ],
        "fixed": [
          {
            "key": "mosquito_reduction",
            "label": "防蚊能力",
            "value": 5,
            "unit": "",
            "display": "5"
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
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 0,
      "category": "mount_equipment",
      "gathering_tool": null,
      "inventory_stack": {
        "allow_recycle": true,
        "bodypart": 0,
        "description": "wls2_mount_equipment_saddle_1_description",
        "equip_behaviour": {
          "type": "saddle"
        },
        "full_description": "wls2_mount_equipment_saddle_1_description",
        "name": "wls2_mount_equipment_saddle_1_name",
        "rarity": "common",
        "sorting_group_id": "horse",
        "sprite": "UI_WW_AlphaBinary04/wls2_horse_saddle_1",
        "tags": [
          "mount_saddle",
          "trinket"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_mount_equipment_saddle_common_3",
      "localization": {
        "description_key": "wls2_mount_equipment_saddle_1_description",
        "en": {
          "description": "Designed for cutting cattle from the herd, with a deep seat for security",
          "full_description": "Designed for cutting cattle from the herd, with a deep seat for security",
          "name": "Cutting Saddle"
        },
        "full_description_key": "wls2_mount_equipment_saddle_1_description",
        "name_key": "wls2_mount_equipment_saddle_1_name",
        "zh": {
          "description": "设计用于将牛从牛群中分离出来，配有深座以确保安全。",
          "full_description": "设计用于将牛从牛群中分离出来，配有深座以确保安全。",
          "name": "切割鞍座"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_leather_3": 5,
            "wls2_resourse_tertiary_clothroll_3": 1,
            "wls_horse_saddle": 1
          },
          "min_level": 0,
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_horse_saddle_1",
      "stat_curves": {
        "mount_inventory_size": {
          "default": 4
        }
      },
      "stat_labels": {
        "mount_inventory_size": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_inventory_size",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_inventory_size",
          "en": "Saddlebag size",
          "zh": "马包尺寸"
        }
      },
      "subcategory": "saddle",
      "tags": [
        "mount_saddle",
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
      "image_key": "75925d8274d82c2ac6a75432f113e16599e010497d65c147b07d674219477b49",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "切割鞍座",
        "name_en": "Cutting Saddle",
        "description_zh": "设计用于将牛从牛群中分离出来，配有深座以确保安全。",
        "description_en": "Designed for cutting cattle from the herd, with a deep seat for security",
        "category_zh": "坐骑装备",
        "subcategory": "saddle",
        "rarity_zh": "普通",
        "search_text": "wls2_mount_equipment_saddle_common_3 切割鞍座 cutting saddle 设计用于将牛从牛群中分离出来，配有深座以确保安全。 designed for cutting cattle from the herd, with a deep seat for security mount_equipment 坐骑装备 saddle mount_saddle trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "mount_inventory_size",
            "label": "鞍袋容量",
            "value": 4,
            "unit": "格",
            "display": "4 格"
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
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 1,
      "category": "mount_equipment",
      "gathering_tool": null,
      "inventory_stack": {
        "allow_recycle": true,
        "bodypart": 1,
        "description": "wls2_mount_equipment_saddle_rare_3_description",
        "equip_behaviour": {
          "type": "saddle"
        },
        "full_description": "wls2_mount_equipment_saddle_rare_3_description",
        "name": "wls2_mount_equipment_saddle_rare_3_name",
        "rarity": "rare",
        "sorting_group_id": "horse",
        "sprite": "UI_WW_AlphaBinary04/wls2_horse_saddle_3",
        "tags": [
          "mount_saddle",
          "trinket"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_mount_equipment_saddle_rare_3",
      "localization": {
        "description_key": "wls2_mount_equipment_saddle_rare_3_description",
        "en": {
          "description": "A versatile saddle named after Cheyenne, popular for its comfort and style",
          "full_description": "A versatile saddle named after Cheyenne, popular for its comfort and style",
          "name": "Сheyenne Saddle"
        },
        "full_description_key": "wls2_mount_equipment_saddle_rare_3_description",
        "name_key": "wls2_mount_equipment_saddle_rare_3_name",
        "zh": {
          "description": "一款以夏延命名的多功能马鞍，以其舒适和风格而闻名。",
          "full_description": "一款以夏延命名的多功能马鞍，以其舒适和风格而闻名。",
          "name": "夏延马鞍"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_mount_equipment_saddle_uncommon_3": 1,
            "wls2_resourse_fourfold_nails_3": 10,
            "wls2_resourse_secondary_leather_3": 10,
            "wls_horse_saddle": 2
          },
          "min_level": 0,
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_horse_saddle_3",
      "stat_curves": {
        "mount_endurance": {
          "default": 5
        },
        "mount_inventory_size": {
          "default": 5
        },
        "mount_speed": {
          "default": 5
        }
      },
      "stat_labels": {
        "mount_endurance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_endurance",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_endurance",
          "en": "Horse endurance",
          "zh": "马耐力"
        },
        "mount_inventory_size": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_inventory_size",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_inventory_size",
          "en": "Saddlebag size",
          "zh": "马包尺寸"
        },
        "mount_speed": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_speed",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_speed",
          "en": "Horse speed",
          "zh": "马速"
        }
      },
      "subcategory": "saddle",
      "tags": [
        "mount_saddle",
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
      "image_key": "624038c704cb39ca77890c2cd33ac930e49a99ca8aeba84de65e95ecef8a7437",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "夏延马鞍",
        "name_en": "Сheyenne Saddle",
        "description_zh": "一款以夏延命名的多功能马鞍，以其舒适和风格而闻名。",
        "description_en": "A versatile saddle named after Cheyenne, popular for its comfort and style",
        "category_zh": "坐骑装备",
        "subcategory": "saddle",
        "rarity_zh": "稀有",
        "search_text": "wls2_mount_equipment_saddle_rare_3 夏延马鞍 сheyenne saddle 一款以夏延命名的多功能马鞍，以其舒适和风格而闻名。 a versatile saddle named after cheyenne, popular for its comfort and style mount_equipment 坐骑装备 saddle mount_saddle trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "mount_inventory_size",
            "label": "鞍袋容量",
            "value": 5,
            "unit": "格",
            "display": "5 格"
          },
          {
            "key": "mount_speed",
            "label": "坐骑速度加成",
            "value": 5,
            "unit": "",
            "display": "5"
          },
          {
            "key": "mount_endurance",
            "label": "坐骑耐力加成",
            "value": 5,
            "unit": "",
            "display": "5"
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
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 2,
      "category": "mount_equipment",
      "gathering_tool": null,
      "inventory_stack": {
        "allow_recycle": true,
        "bodypart": 2,
        "description": "wls2_mount_equipment_saddle_rare_4_description",
        "equip_behaviour": {
          "type": "saddle"
        },
        "full_description": "wls2_mount_equipment_saddle_rare_4_description",
        "name": "wls2_mount_equipment_saddle_rare_4_name",
        "rarity": "rare",
        "sorting_group_id": "horse",
        "sprite": "UI_WW_AlphaBinary04/wls2_horse_saddle_4",
        "tags": [
          "mount_saddle",
          "trinket"
        ],
        "tier": 4,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_mount_equipment_saddle_rare_4",
      "localization": {
        "description_key": "wls2_mount_equipment_saddle_rare_4_description",
        "en": {
          "description": "Crafted with attention to detail and style, reflecting the artisan's skill and dedication",
          "full_description": "Crafted with attention to detail and style, reflecting the artisan's skill and dedication",
          "name": "Hope Saddle"
        },
        "full_description_key": "wls2_mount_equipment_saddle_rare_4_description",
        "name_key": "wls2_mount_equipment_saddle_rare_4_name",
        "zh": {
          "description": "精心制作，注重细节和风格，体现了工匠的技艺和奉献精神。",
          "full_description": "精心制作，注重细节和风格，体现了工匠的技艺和奉献精神。",
          "name": "希望鞍部"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_mount_equipment_saddle_uncommon_4": 1,
            "wls2_resourse_fourfold_nails_4": 15,
            "wls2_resourse_secondary_leather_4": 15,
            "wls_horse_saddle": 3
          },
          "min_level": 0,
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_horse_saddle_4",
      "stat_curves": {
        "mount_endurance": {
          "default": 10
        },
        "mount_inventory_size": {
          "default": 6
        },
        "mount_speed": {
          "default": 10
        }
      },
      "stat_labels": {
        "mount_endurance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_endurance",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_endurance",
          "en": "Horse endurance",
          "zh": "马耐力"
        },
        "mount_inventory_size": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_inventory_size",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_inventory_size",
          "en": "Saddlebag size",
          "zh": "马包尺寸"
        },
        "mount_speed": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_speed",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_speed",
          "en": "Horse speed",
          "zh": "马速"
        }
      },
      "subcategory": "saddle",
      "tags": [
        "mount_saddle",
        "trinket"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "a6d6333eab675ab97857298744f8ac916df00c129f1a4ff1c686cc6d4e77ef16",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "希望鞍部",
        "name_en": "Hope Saddle",
        "description_zh": "精心制作，注重细节和风格，体现了工匠的技艺和奉献精神。",
        "description_en": "Crafted with attention to detail and style, reflecting the artisan's skill and dedication",
        "category_zh": "坐骑装备",
        "subcategory": "saddle",
        "rarity_zh": "稀有",
        "search_text": "wls2_mount_equipment_saddle_rare_4 希望鞍部 hope saddle 精心制作，注重细节和风格，体现了工匠的技艺和奉献精神。 crafted with attention to detail and style, reflecting the artisan's skill and dedication mount_equipment 坐骑装备 saddle mount_saddle trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "mount_inventory_size",
            "label": "鞍袋容量",
            "value": 6,
            "unit": "格",
            "display": "6 格"
          },
          {
            "key": "mount_speed",
            "label": "坐骑速度加成",
            "value": 10,
            "unit": "",
            "display": "10"
          },
          {
            "key": "mount_endurance",
            "label": "坐骑耐力加成",
            "value": 10,
            "unit": "",
            "display": "10"
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
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 3,
      "category": "mount_equipment",
      "gathering_tool": null,
      "inventory_stack": {
        "allow_recycle": true,
        "bodypart": 3,
        "description": "wls2_mount_equipment_saddle_rare_5_description",
        "equip_behaviour": {
          "type": "saddle"
        },
        "full_description": "wls2_mount_equipment_saddle_rare_5_description",
        "name": "wls2_mount_equipment_saddle_rare_5_name",
        "rarity": "rare",
        "sorting_group_id": "horse",
        "sprite": "UI_WW_AlphaBinary04/wls2_horse_saddle_5",
        "tags": [
          "mount_saddle",
          "trinket"
        ],
        "tier": 5,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_mount_equipment_saddle_rare_5",
      "localization": {
        "description_key": "wls2_mount_equipment_saddle_rare_5_description",
        "en": {
          "description": "Designed for roping and ranch work, with a strong tree and deep seat",
          "full_description": "Designed for roping and ranch work, with a strong tree and deep seat",
          "name": "Wade Saddle"
        },
        "full_description_key": "wls2_mount_equipment_saddle_rare_5_description",
        "name_key": "wls2_mount_equipment_saddle_rare_5_name",
        "zh": {
          "description": "专为套绳和牧场工作设计，具有坚固的鞍架和深座。",
          "full_description": "专为套绳和牧场工作设计，具有坚固的鞍架和深座。",
          "name": "韦德鞍"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_mount_equipment_saddle_uncommon_5": 1,
            "wls2_resourse_fourfold_nails_5": 20,
            "wls2_resourse_secondary_leather_5": 20,
            "wls_horse_saddle": 4
          },
          "min_level": 0,
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_horse_saddle_5",
      "stat_curves": {
        "mount_endurance": {
          "default": 15
        },
        "mount_inventory_size": {
          "default": 7
        },
        "mount_speed": {
          "default": 15
        }
      },
      "stat_labels": {
        "mount_endurance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_endurance",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_endurance",
          "en": "Horse endurance",
          "zh": "马耐力"
        },
        "mount_inventory_size": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_inventory_size",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_inventory_size",
          "en": "Saddlebag size",
          "zh": "马包尺寸"
        },
        "mount_speed": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_speed",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_speed",
          "en": "Horse speed",
          "zh": "马速"
        }
      },
      "subcategory": "saddle",
      "tags": [
        "mount_saddle",
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
      "image_key": "7ba93b19344aa7a5d1dfad8698075b61f7fc82241b1d51f8ba2c8096f740b0e2",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "韦德鞍",
        "name_en": "Wade Saddle",
        "description_zh": "专为套绳和牧场工作设计，具有坚固的鞍架和深座。",
        "description_en": "Designed for roping and ranch work, with a strong tree and deep seat",
        "category_zh": "坐骑装备",
        "subcategory": "saddle",
        "rarity_zh": "稀有",
        "search_text": "wls2_mount_equipment_saddle_rare_5 韦德鞍 wade saddle 专为套绳和牧场工作设计，具有坚固的鞍架和深座。 designed for roping and ranch work, with a strong tree and deep seat mount_equipment 坐骑装备 saddle mount_saddle trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "mount_inventory_size",
            "label": "鞍袋容量",
            "value": 7,
            "unit": "格",
            "display": "7 格"
          },
          {
            "key": "mount_speed",
            "label": "坐骑速度加成",
            "value": 15,
            "unit": "",
            "display": "15"
          },
          {
            "key": "mount_endurance",
            "label": "坐骑耐力加成",
            "value": 15,
            "unit": "",
            "display": "15"
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
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 4,
      "category": "mount_equipment",
      "gathering_tool": null,
      "inventory_stack": {
        "allow_recycle": true,
        "bodypart": 4,
        "description": "wls2_mount_equipment_saddle_rare_6_description",
        "equip_behaviour": {
          "type": "saddle"
        },
        "full_description": "wls2_mount_equipment_saddle_rare_6_description",
        "name": "wls2_mount_equipment_saddle_rare_6_name",
        "rarity": "rare",
        "sorting_group_id": "horse",
        "sprite": "UI_WW_AlphaBinary04/wls2_horse_saddle_6",
        "tags": [
          "mount_saddle",
          "trinket"
        ],
        "tier": 6,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_mount_equipment_saddle_rare_6",
      "localization": {
        "description_key": "wls2_mount_equipment_saddle_rare_6_description",
        "en": {
          "description": "Perfect for long expeditions, offering maximum comfort and gear storage",
          "full_description": "Perfect for long expeditions, offering maximum comfort and gear storage",
          "name": "Outfitter Saddle"
        },
        "full_description_key": "wls2_mount_equipment_saddle_rare_6_description",
        "name_key": "wls2_mount_equipment_saddle_rare_6_name",
        "zh": {
          "description": "非常适合长途探险，提供最大的舒适度和装备存储空间。",
          "full_description": "非常适合长途探险，提供最大的舒适度和装备存储空间。",
          "name": "装备马鞍"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_mount_equipment_saddle_uncommon_6": 1,
            "wls2_resourse_fourfold_nails_6": 20,
            "wls2_resourse_secondary_leather_6": 20,
            "wls_horse_saddle": 5
          },
          "min_level": 0,
          "required_electricity": 8,
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_horse_saddle_6",
      "stat_curves": {
        "mount_endurance": {
          "default": 20
        },
        "mount_inventory_size": {
          "default": 8
        },
        "mount_speed": {
          "default": 20
        }
      },
      "stat_labels": {
        "mount_endurance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_endurance",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_endurance",
          "en": "Horse endurance",
          "zh": "马耐力"
        },
        "mount_inventory_size": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_inventory_size",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_inventory_size",
          "en": "Saddlebag size",
          "zh": "马包尺寸"
        },
        "mount_speed": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_speed",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_speed",
          "en": "Horse speed",
          "zh": "马速"
        }
      },
      "subcategory": "saddle",
      "tags": [
        "mount_saddle",
        "trinket"
      ],
      "throwing_item": null,
      "tier": 6,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "28a27eb9b86bd6410eb5271291c8b6ff1b45cd4c598fd3eb0d3a067687d6a3c1",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "装备马鞍",
        "name_en": "Outfitter Saddle",
        "description_zh": "非常适合长途探险，提供最大的舒适度和装备存储空间。",
        "description_en": "Perfect for long expeditions, offering maximum comfort and gear storage",
        "category_zh": "坐骑装备",
        "subcategory": "saddle",
        "rarity_zh": "稀有",
        "search_text": "wls2_mount_equipment_saddle_rare_6 装备马鞍 outfitter saddle 非常适合长途探险，提供最大的舒适度和装备存储空间。 perfect for long expeditions, offering maximum comfort and gear storage mount_equipment 坐骑装备 saddle mount_saddle trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "mount_inventory_size",
            "label": "鞍袋容量",
            "value": 8,
            "unit": "格",
            "display": "8 格"
          },
          {
            "key": "mount_speed",
            "label": "坐骑速度加成",
            "value": 20,
            "unit": "",
            "display": "20"
          },
          {
            "key": "mount_endurance",
            "label": "坐骑耐力加成",
            "value": 20,
            "unit": "",
            "display": "20"
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
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 5,
      "category": "mount_equipment",
      "gathering_tool": null,
      "inventory_stack": {
        "allow_recycle": true,
        "bodypart": 5,
        "description": "wls2_mount_equipment_saddle_rare_6_description",
        "equip_behaviour": {
          "type": "saddle"
        },
        "full_description": "wls2_mount_equipment_saddle_rare_7_description",
        "name": "wls2_mount_equipment_saddle_rare_7_name",
        "rarity": "rare",
        "sorting_group_id": "horse",
        "sprite": "UI_WW_AlphaBinary10/wls2_horse_saddle_7",
        "tags": [
          "mount_saddle",
          "trinket"
        ],
        "tier": 7,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_mount_equipment_saddle_rare_7",
      "localization": {
        "description_key": "wls2_mount_equipment_saddle_rare_6_description",
        "en": {
          "description": "Perfect for long expeditions, offering maximum comfort and gear storage",
          "full_description": "A saddle that's got more mileage than a bounty hunter's boots",
          "name": "Charro Saddle"
        },
        "full_description_key": "wls2_mount_equipment_saddle_rare_7_description",
        "name_key": "wls2_mount_equipment_saddle_rare_7_name",
        "zh": {
          "description": "非常适合长途探险，提供最大的舒适度和装备存储空间。",
          "full_description": "一个鞍座，比赏金猎人的靴子有更多的里程数",
          "name": "查罗鞍"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_mount_equipment_saddle_uncommon_7": 1,
            "wls2_resourse_fourfold_nails_7": 20,
            "wls2_resourse_secondary_leather_7": 20,
            "wls_horse_saddle": 6
          },
          "min_level": 0,
          "required_electricity": 16,
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_horse_saddle_7",
      "stat_curves": {
        "mount_endurance": {
          "default": 25
        },
        "mount_inventory_size": {
          "default": 9
        },
        "mount_speed": {
          "default": 25
        }
      },
      "stat_labels": {
        "mount_endurance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_endurance",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_endurance",
          "en": "Horse endurance",
          "zh": "马耐力"
        },
        "mount_inventory_size": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_inventory_size",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_inventory_size",
          "en": "Saddlebag size",
          "zh": "马包尺寸"
        },
        "mount_speed": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_speed",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_speed",
          "en": "Horse speed",
          "zh": "马速"
        }
      },
      "subcategory": "saddle",
      "tags": [
        "mount_saddle",
        "trinket"
      ],
      "throwing_item": null,
      "tier": 7,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "939dcd527bfaff10c29c82f2f909dd0238aee0979e0b7307e17fea5a66affd84",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "查罗鞍",
        "name_en": "Charro Saddle",
        "description_zh": "一个鞍座，比赏金猎人的靴子有更多的里程数",
        "description_en": "A saddle that's got more mileage than a bounty hunter's boots",
        "category_zh": "坐骑装备",
        "subcategory": "saddle",
        "rarity_zh": "稀有",
        "search_text": "wls2_mount_equipment_saddle_rare_7 查罗鞍 charro saddle 一个鞍座，比赏金猎人的靴子有更多的里程数 a saddle that's got more mileage than a bounty hunter's boots mount_equipment 坐骑装备 saddle mount_saddle trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "mount_inventory_size",
            "label": "鞍袋容量",
            "value": 9,
            "unit": "格",
            "display": "9 格"
          },
          {
            "key": "mount_speed",
            "label": "坐骑速度加成",
            "value": 25,
            "unit": "",
            "display": "25"
          },
          {
            "key": "mount_endurance",
            "label": "坐骑耐力加成",
            "value": 25,
            "unit": "",
            "display": "25"
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
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 1,
      "category": "mount_equipment",
      "gathering_tool": null,
      "inventory_stack": {
        "allow_recycle": true,
        "bodypart": 1,
        "description": "wls2_mount_equipment_saddle_uncommon_3_description",
        "equip_behaviour": {
          "type": "saddle"
        },
        "full_description": "wls2_mount_equipment_saddle_uncommon_3_description",
        "name": "wls2_mount_equipment_saddle_uncommon_3_name",
        "rarity": "uncommon",
        "sorting_group_id": "horse",
        "sprite": "UI_WW_AlphaBinary04/wls2_horse_saddle_3",
        "tags": [
          "mount_saddle",
          "trinket"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_mount_equipment_saddle_uncommon_3",
      "localization": {
        "description_key": "wls2_mount_equipment_saddle_uncommon_3_description",
        "en": {
          "description": "Traditional cowboy saddle for everyday ranch work and long rides across varied terrain",
          "full_description": "Traditional cowboy saddle for everyday ranch work and long rides across varied terrain",
          "name": "Stock Saddle"
        },
        "full_description_key": "wls2_mount_equipment_saddle_uncommon_3_description",
        "name_key": "wls2_mount_equipment_saddle_uncommon_3_name",
        "zh": {
          "description": "传统牛仔鞍适用于日常牧场工作和长途骑行穿越各种地形",
          "full_description": "传统牛仔鞍适用于日常牧场工作和长途骑行穿越各种地形",
          "name": "马鞍"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_mount_equipment_saddle_common_3": 1,
            "wls2_resourse_secondary_leather_3": 10,
            "wls2_resourse_tertiary_clothroll_3": 10,
            "wls_horse_saddle": 1
          },
          "min_level": 0,
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_horse_saddle_3",
      "stat_curves": {
        "mount_endurance": {
          "default": 5
        },
        "mount_inventory_size": {
          "default": 4
        },
        "mount_speed": {
          "default": 5
        }
      },
      "stat_labels": {
        "mount_endurance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_endurance",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_endurance",
          "en": "Horse endurance",
          "zh": "马耐力"
        },
        "mount_inventory_size": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_inventory_size",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_inventory_size",
          "en": "Saddlebag size",
          "zh": "马包尺寸"
        },
        "mount_speed": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_speed",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_speed",
          "en": "Horse speed",
          "zh": "马速"
        }
      },
      "subcategory": "saddle",
      "tags": [
        "mount_saddle",
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
      "image_key": "624038c704cb39ca77890c2cd33ac930e49a99ca8aeba84de65e95ecef8a7437",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "马鞍",
        "name_en": "Stock Saddle",
        "description_zh": "传统牛仔鞍适用于日常牧场工作和长途骑行穿越各种地形",
        "description_en": "Traditional cowboy saddle for everyday ranch work and long rides across varied terrain",
        "category_zh": "坐骑装备",
        "subcategory": "saddle",
        "rarity_zh": "优秀",
        "search_text": "wls2_mount_equipment_saddle_uncommon_3 马鞍 stock saddle 传统牛仔鞍适用于日常牧场工作和长途骑行穿越各种地形 traditional cowboy saddle for everyday ranch work and long rides across varied terrain mount_equipment 坐骑装备 saddle mount_saddle trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "mount_inventory_size",
            "label": "鞍袋容量",
            "value": 4,
            "unit": "格",
            "display": "4 格"
          },
          {
            "key": "mount_speed",
            "label": "坐骑速度加成",
            "value": 5,
            "unit": "",
            "display": "5"
          },
          {
            "key": "mount_endurance",
            "label": "坐骑耐力加成",
            "value": 5,
            "unit": "",
            "display": "5"
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
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 2,
      "category": "mount_equipment",
      "gathering_tool": null,
      "inventory_stack": {
        "allow_recycle": true,
        "bodypart": 2,
        "description": "wls2_mount_equipment_saddle_uncommon_4_description",
        "equip_behaviour": {
          "type": "saddle"
        },
        "full_description": "wls2_mount_equipment_saddle_uncommon_4_description",
        "name": "wls2_mount_equipment_saddle_uncommon_4_name",
        "rarity": "uncommon",
        "sorting_group_id": "horse",
        "sprite": "UI_WW_AlphaBinary04/wls2_horse_saddle_4",
        "tags": [
          "mount_saddle",
          "trinket"
        ],
        "tier": 4,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_mount_equipment_saddle_uncommon_4",
      "localization": {
        "description_key": "wls2_mount_equipment_saddle_uncommon_4_description",
        "en": {
          "description": "Ensures a smooth ride during long adventures through forests and mountains",
          "full_description": "Ensures a smooth ride during long adventures through forests and mountains",
          "name": "Trail Saddle"
        },
        "full_description_key": "wls2_mount_equipment_saddle_uncommon_4_description",
        "name_key": "wls2_mount_equipment_saddle_uncommon_4_name",
        "zh": {
          "description": "确保在穿越森林和山脉的长途冒险中顺畅行驶",
          "full_description": "确保在穿越森林和山脉的长途冒险中顺畅行驶",
          "name": "马鞍"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_mount_equipment_saddle_rare_3": 1,
            "wls2_resourse_secondary_leather_4": 15,
            "wls2_resourse_tertiary_clothroll_4": 15,
            "wls_horse_saddle": 2
          },
          "min_level": 0,
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_horse_saddle_4",
      "stat_curves": {
        "mount_endurance": {
          "default": 10
        },
        "mount_inventory_size": {
          "default": 5
        },
        "mount_speed": {
          "default": 10
        }
      },
      "stat_labels": {
        "mount_endurance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_endurance",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_endurance",
          "en": "Horse endurance",
          "zh": "马耐力"
        },
        "mount_inventory_size": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_inventory_size",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_inventory_size",
          "en": "Saddlebag size",
          "zh": "马包尺寸"
        },
        "mount_speed": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_speed",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_speed",
          "en": "Horse speed",
          "zh": "马速"
        }
      },
      "subcategory": "saddle",
      "tags": [
        "mount_saddle",
        "trinket"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "a6d6333eab675ab97857298744f8ac916df00c129f1a4ff1c686cc6d4e77ef16",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "马鞍",
        "name_en": "Trail Saddle",
        "description_zh": "确保在穿越森林和山脉的长途冒险中顺畅行驶",
        "description_en": "Ensures a smooth ride during long adventures through forests and mountains",
        "category_zh": "坐骑装备",
        "subcategory": "saddle",
        "rarity_zh": "优秀",
        "search_text": "wls2_mount_equipment_saddle_uncommon_4 马鞍 trail saddle 确保在穿越森林和山脉的长途冒险中顺畅行驶 ensures a smooth ride during long adventures through forests and mountains mount_equipment 坐骑装备 saddle mount_saddle trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "mount_inventory_size",
            "label": "鞍袋容量",
            "value": 5,
            "unit": "格",
            "display": "5 格"
          },
          {
            "key": "mount_speed",
            "label": "坐骑速度加成",
            "value": 10,
            "unit": "",
            "display": "10"
          },
          {
            "key": "mount_endurance",
            "label": "坐骑耐力加成",
            "value": 10,
            "unit": "",
            "display": "10"
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
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 3,
      "category": "mount_equipment",
      "gathering_tool": null,
      "inventory_stack": {
        "allow_recycle": true,
        "bodypart": 3,
        "description": "wls2_mount_equipment_saddle_uncommon_5_description",
        "equip_behaviour": {
          "type": "saddle"
        },
        "full_description": "wls2_mount_equipment_saddle_uncommon_5_description",
        "name": "wls2_mount_equipment_saddle_uncommon_5_name",
        "rarity": "uncommon",
        "sorting_group_id": "horse",
        "sprite": "UI_WW_AlphaBinary04/wls2_horse_saddle_5",
        "tags": [
          "mount_saddle",
          "trinket"
        ],
        "tier": 5,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_mount_equipment_saddle_uncommon_5",
      "localization": {
        "description_key": "wls2_mount_equipment_saddle_uncommon_5_description",
        "en": {
          "description": "Good for riding in marshy landscapes, made of durable and water-resistant materials",
          "full_description": "Good for riding in marshy landscapes, made of durable and water-resistant materials",
          "name": "Swamp Saddle"
        },
        "full_description_key": "wls2_mount_equipment_saddle_uncommon_5_description",
        "name_key": "wls2_mount_equipment_saddle_uncommon_5_name",
        "zh": {
          "description": "适合在沼泽地形骑行，由耐用和防水材料制成。",
          "full_description": "适合在沼泽地形骑行，由耐用和防水材料制成。",
          "name": "沼泽鞍"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_mount_equipment_saddle_rare_4": 1,
            "wls2_resourse_secondary_leather_5": 20,
            "wls2_resourse_tertiary_clothroll_5": 20,
            "wls_horse_saddle": 3
          },
          "min_level": 0,
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_horse_saddle_5",
      "stat_curves": {
        "mount_endurance": {
          "default": 15
        },
        "mount_inventory_size": {
          "default": 6
        },
        "mount_speed": {
          "default": 15
        }
      },
      "stat_labels": {
        "mount_endurance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_endurance",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_endurance",
          "en": "Horse endurance",
          "zh": "马耐力"
        },
        "mount_inventory_size": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_inventory_size",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_inventory_size",
          "en": "Saddlebag size",
          "zh": "马包尺寸"
        },
        "mount_speed": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_speed",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_speed",
          "en": "Horse speed",
          "zh": "马速"
        }
      },
      "subcategory": "saddle",
      "tags": [
        "mount_saddle",
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
      "image_key": "7ba93b19344aa7a5d1dfad8698075b61f7fc82241b1d51f8ba2c8096f740b0e2",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "沼泽鞍",
        "name_en": "Swamp Saddle",
        "description_zh": "适合在沼泽地形骑行，由耐用和防水材料制成。",
        "description_en": "Good for riding in marshy landscapes, made of durable and water-resistant materials",
        "category_zh": "坐骑装备",
        "subcategory": "saddle",
        "rarity_zh": "优秀",
        "search_text": "wls2_mount_equipment_saddle_uncommon_5 沼泽鞍 swamp saddle 适合在沼泽地形骑行，由耐用和防水材料制成。 good for riding in marshy landscapes, made of durable and water-resistant materials mount_equipment 坐骑装备 saddle mount_saddle trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "mount_inventory_size",
            "label": "鞍袋容量",
            "value": 6,
            "unit": "格",
            "display": "6 格"
          },
          {
            "key": "mount_speed",
            "label": "坐骑速度加成",
            "value": 15,
            "unit": "",
            "display": "15"
          },
          {
            "key": "mount_endurance",
            "label": "坐骑耐力加成",
            "value": 15,
            "unit": "",
            "display": "15"
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
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 4,
      "category": "mount_equipment",
      "gathering_tool": null,
      "inventory_stack": {
        "allow_recycle": true,
        "bodypart": 4,
        "description": "wls2_mount_equipment_saddle_uncommon_6_description",
        "equip_behaviour": {
          "type": "saddle"
        },
        "full_description": "wls2_mount_equipment_saddle_uncommon_6_description",
        "name": "wls2_mount_equipment_saddle_uncommon_6_name",
        "rarity": "uncommon",
        "sorting_group_id": "horse",
        "sprite": "UI_WW_AlphaBinary04/wls2_horse_saddle_6",
        "tags": [
          "mount_saddle",
          "trinket"
        ],
        "tier": 6,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_mount_equipment_saddle_uncommon_6",
      "localization": {
        "description_key": "wls2_mount_equipment_saddle_uncommon_6_description",
        "en": {
          "description": "Military saddle used by cavalry, known for its lightweight",
          "full_description": "Military saddle used by cavalry, known for its lightweight",
          "name": "McClellan Saddle"
        },
        "full_description_key": "wls2_mount_equipment_saddle_uncommon_6_description",
        "name_key": "wls2_mount_equipment_saddle_uncommon_6_name",
        "zh": {
          "description": "轻型军用马鞍，骑兵使用，以其轻便著称",
          "full_description": "轻型军用马鞍，骑兵使用，以其轻便著称",
          "name": "麦克莱伦鞍座"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_mount_equipment_saddle_rare_5": 1,
            "wls2_resourse_secondary_cloth_6": 50,
            "wls2_resourse_secondary_leather_6": 20,
            "wls_horse_saddle": 4
          },
          "min_level": 0,
          "required_electricity": 8,
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_horse_saddle_6",
      "stat_curves": {
        "mount_endurance": {
          "default": 20
        },
        "mount_inventory_size": {
          "default": 7
        },
        "mount_speed": {
          "default": 20
        }
      },
      "stat_labels": {
        "mount_endurance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_endurance",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_endurance",
          "en": "Horse endurance",
          "zh": "马耐力"
        },
        "mount_inventory_size": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_inventory_size",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_inventory_size",
          "en": "Saddlebag size",
          "zh": "马包尺寸"
        },
        "mount_speed": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_speed",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_speed",
          "en": "Horse speed",
          "zh": "马速"
        }
      },
      "subcategory": "saddle",
      "tags": [
        "mount_saddle",
        "trinket"
      ],
      "throwing_item": null,
      "tier": 6,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "28a27eb9b86bd6410eb5271291c8b6ff1b45cd4c598fd3eb0d3a067687d6a3c1",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "麦克莱伦鞍座",
        "name_en": "McClellan Saddle",
        "description_zh": "轻型军用马鞍，骑兵使用，以其轻便著称",
        "description_en": "Military saddle used by cavalry, known for its lightweight",
        "category_zh": "坐骑装备",
        "subcategory": "saddle",
        "rarity_zh": "优秀",
        "search_text": "wls2_mount_equipment_saddle_uncommon_6 麦克莱伦鞍座 mcclellan saddle 轻型军用马鞍，骑兵使用，以其轻便著称 military saddle used by cavalry, known for its lightweight mount_equipment 坐骑装备 saddle mount_saddle trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "mount_inventory_size",
            "label": "鞍袋容量",
            "value": 7,
            "unit": "格",
            "display": "7 格"
          },
          {
            "key": "mount_speed",
            "label": "坐骑速度加成",
            "value": 20,
            "unit": "",
            "display": "20"
          },
          {
            "key": "mount_endurance",
            "label": "坐骑耐力加成",
            "value": 20,
            "unit": "",
            "display": "20"
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
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 5,
      "category": "mount_equipment",
      "gathering_tool": null,
      "inventory_stack": {
        "allow_recycle": true,
        "bodypart": 5,
        "description": "wls2_mount_equipment_saddle_uncommon_6_description",
        "equip_behaviour": {
          "type": "saddle"
        },
        "full_description": "wls2_mount_equipment_saddle_uncommon_7_description",
        "name": "wls2_mount_equipment_saddle_uncommon_7_name",
        "rarity": "uncommon",
        "sorting_group_id": "horse",
        "sprite": "UI_WW_AlphaBinary10/wls2_horse_saddle_7",
        "tags": [
          "mount_saddle",
          "trinket"
        ],
        "tier": 7,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_mount_equipment_saddle_uncommon_7",
      "localization": {
        "description_key": "wls2_mount_equipment_saddle_uncommon_6_description",
        "en": {
          "description": "Military saddle used by cavalry, known for its lightweight",
          "full_description": "For riders who don't need maps — just grit and sunsets",
          "name": "Vaquero Saddle"
        },
        "full_description_key": "wls2_mount_equipment_saddle_uncommon_7_description",
        "name_key": "wls2_mount_equipment_saddle_uncommon_7_name",
        "zh": {
          "description": "轻型军用马鞍，骑兵使用，以其轻便著称",
          "full_description": "对于不需要地图的骑手 — 只需要勇气和日落",
          "name": "牛仔 鞍"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_mount_equipment_saddle_rare_6": 1,
            "wls2_resourse_secondary_cloth_7": 50,
            "wls2_resourse_secondary_leather_7": 20,
            "wls_horse_saddle": 5
          },
          "min_level": 0,
          "required_electricity": 16,
          "type": "workbench"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_horse_saddle_7",
      "stat_curves": {
        "mount_endurance": {
          "default": 25
        },
        "mount_inventory_size": {
          "default": 8
        },
        "mount_speed": {
          "default": 25
        }
      },
      "stat_labels": {
        "mount_endurance": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_endurance",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_endurance",
          "en": "Horse endurance",
          "zh": "马耐力"
        },
        "mount_inventory_size": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_inventory_size",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_inventory_size",
          "en": "Saddlebag size",
          "zh": "马包尺寸"
        },
        "mount_speed": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_mount_speed",
            "tooltip_type": "common"
          },
          "display_key": "ui_item_stats_mount_speed",
          "en": "Horse speed",
          "zh": "马速"
        }
      },
      "subcategory": "saddle",
      "tags": [
        "mount_saddle",
        "trinket"
      ],
      "throwing_item": null,
      "tier": 7,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "939dcd527bfaff10c29c82f2f909dd0238aee0979e0b7307e17fea5a66affd84",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "牛仔 鞍",
        "name_en": "Vaquero Saddle",
        "description_zh": "对于不需要地图的骑手 — 只需要勇气和日落",
        "description_en": "For riders who don't need maps — just grit and sunsets",
        "category_zh": "坐骑装备",
        "subcategory": "saddle",
        "rarity_zh": "优秀",
        "search_text": "wls2_mount_equipment_saddle_uncommon_7 牛仔 鞍 vaquero saddle 对于不需要地图的骑手 — 只需要勇气和日落 for riders who don't need maps — just grit and sunsets mount_equipment 坐骑装备 saddle mount_saddle trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "mount_inventory_size",
            "label": "鞍袋容量",
            "value": 8,
            "unit": "格",
            "display": "8 格"
          },
          {
            "key": "mount_speed",
            "label": "坐骑速度加成",
            "value": 25,
            "unit": "",
            "display": "25"
          },
          {
            "key": "mount_endurance",
            "label": "坐骑耐力加成",
            "value": 25,
            "unit": "",
            "display": "25"
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
        "description": "wls2_necklace_lunar_desc",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_necklace_lunar_desc",
        "name": "wls2_necklace_lunar_name",
        "rarity": "rare",
        "show_description": true,
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary10/wls2_lunar_charm_2026",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 2,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_necklace_lunar_2",
      "localization": {
        "description_key": "wls2_necklace_lunar_desc",
        "en": {
          "description": "A fiery horse amulet guards your ranch, slowing the rise of bandits’ anger",
          "full_description": "A fiery horse amulet guards your ranch, slowing the rise of bandits’ anger",
          "name": "Lunar Pendant"
        },
        "full_description_key": "wls2_necklace_lunar_desc",
        "name_key": "wls2_necklace_lunar_name",
        "zh": {
          "description": "一个火热的马护身符守护你的牧场，减缓强盗的愤怒上升",
          "full_description": "一个火热的马护身符守护你的牧场，减缓强盗的愤怒上升",
          "name": "月球吊坠"
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
      "sprite": "UI_WW_AlphaBinary10/wls2_lunar_charm_2026",
      "stat_curves": {
        "bandit_duty_cost_reduction": {
          "default": 0.5
        },
        "health_increment": {
          "default": 100
        }
      },
      "stat_labels": {
        "bandit_duty_cost_reduction": {
          "definition": {
            "is_percent": true,
            "name": "bandit_duty_cost_reduction",
            "name_value_format": "ui_item_stats_bandit_duty_cost_reduction",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "bandit_duty_cost_reduction",
          "en": null,
          "zh": null
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
        }
      },
      "subcategory": "amulet",
      "tags": [
        "amulet",
        "trinket"
      ],
      "throwing_item": null,
      "tier": 2,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "7a9421fe154e36916f2453abf4ae46e7d37578d9a7a464e1dfb375dec1eb15b4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "月球吊坠",
        "name_en": "Lunar Pendant",
        "description_zh": "一个火热的马护身符守护你的牧场，减缓强盗的愤怒上升",
        "description_en": "A fiery horse amulet guards your ranch, slowing the rise of bandits’ anger",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "稀有",
        "search_text": "wls2_necklace_lunar_2 月球吊坠 lunar pendant 一个火热的马护身符守护你的牧场，减缓强盗的愤怒上升 a fiery horse amulet guards your ranch, slowing the rise of bandits’ anger accessory 饰品 amulet amulet trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "health_increment",
            "label": "生命加成",
            "value": 100,
            "unit": "",
            "display": "+100"
          },
          {
            "key": "bandit_duty_cost_reduction",
            "label": "强盗过路费减免",
            "value": 0.5,
            "unit": "%",
            "display": "50%"
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
        "description": "wls2_necklace_lunar_desc",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_necklace_lunar_desc",
        "name": "wls2_necklace_lunar_name",
        "rarity": "rare",
        "show_description": true,
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary10/wls2_lunar_charm_2026",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_necklace_lunar_3",
      "localization": {
        "description_key": "wls2_necklace_lunar_desc",
        "en": {
          "description": "A fiery horse amulet guards your ranch, slowing the rise of bandits’ anger",
          "full_description": "A fiery horse amulet guards your ranch, slowing the rise of bandits’ anger",
          "name": "Lunar Pendant"
        },
        "full_description_key": "wls2_necklace_lunar_desc",
        "name_key": "wls2_necklace_lunar_name",
        "zh": {
          "description": "一个火热的马护身符守护你的牧场，减缓强盗的愤怒上升",
          "full_description": "一个火热的马护身符守护你的牧场，减缓强盗的愤怒上升",
          "name": "月球吊坠"
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
      "sprite": "UI_WW_AlphaBinary10/wls2_lunar_charm_2026",
      "stat_curves": {
        "bandit_duty_cost_reduction": {
          "default": 0.5
        },
        "health_increment": {
          "default": 150
        }
      },
      "stat_labels": {
        "bandit_duty_cost_reduction": {
          "definition": {
            "is_percent": true,
            "name": "bandit_duty_cost_reduction",
            "name_value_format": "ui_item_stats_bandit_duty_cost_reduction",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "bandit_duty_cost_reduction",
          "en": null,
          "zh": null
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
      "image_key": "7a9421fe154e36916f2453abf4ae46e7d37578d9a7a464e1dfb375dec1eb15b4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "月球吊坠",
        "name_en": "Lunar Pendant",
        "description_zh": "一个火热的马护身符守护你的牧场，减缓强盗的愤怒上升",
        "description_en": "A fiery horse amulet guards your ranch, slowing the rise of bandits’ anger",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "稀有",
        "search_text": "wls2_necklace_lunar_3 月球吊坠 lunar pendant 一个火热的马护身符守护你的牧场，减缓强盗的愤怒上升 a fiery horse amulet guards your ranch, slowing the rise of bandits’ anger accessory 饰品 amulet amulet trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "health_increment",
            "label": "生命加成",
            "value": 150,
            "unit": "",
            "display": "+150"
          },
          {
            "key": "bandit_duty_cost_reduction",
            "label": "强盗过路费减免",
            "value": 0.5,
            "unit": "%",
            "display": "50%"
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
        "description": "wls2_necklace_lunar_desc",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_necklace_lunar_desc",
        "name": "wls2_necklace_lunar_name",
        "rarity": "rare",
        "show_description": true,
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary10/wls2_lunar_charm_2026",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 4,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_necklace_lunar_4",
      "localization": {
        "description_key": "wls2_necklace_lunar_desc",
        "en": {
          "description": "A fiery horse amulet guards your ranch, slowing the rise of bandits’ anger",
          "full_description": "A fiery horse amulet guards your ranch, slowing the rise of bandits’ anger",
          "name": "Lunar Pendant"
        },
        "full_description_key": "wls2_necklace_lunar_desc",
        "name_key": "wls2_necklace_lunar_name",
        "zh": {
          "description": "一个火热的马护身符守护你的牧场，减缓强盗的愤怒上升",
          "full_description": "一个火热的马护身符守护你的牧场，减缓强盗的愤怒上升",
          "name": "月球吊坠"
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
      "sprite": "UI_WW_AlphaBinary10/wls2_lunar_charm_2026",
      "stat_curves": {
        "bandit_duty_cost_reduction": {
          "default": 0.5
        },
        "health_increment": {
          "default": 300
        }
      },
      "stat_labels": {
        "bandit_duty_cost_reduction": {
          "definition": {
            "is_percent": true,
            "name": "bandit_duty_cost_reduction",
            "name_value_format": "ui_item_stats_bandit_duty_cost_reduction",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "bandit_duty_cost_reduction",
          "en": null,
          "zh": null
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
        }
      },
      "subcategory": "amulet",
      "tags": [
        "amulet",
        "trinket"
      ],
      "throwing_item": null,
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "7a9421fe154e36916f2453abf4ae46e7d37578d9a7a464e1dfb375dec1eb15b4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "月球吊坠",
        "name_en": "Lunar Pendant",
        "description_zh": "一个火热的马护身符守护你的牧场，减缓强盗的愤怒上升",
        "description_en": "A fiery horse amulet guards your ranch, slowing the rise of bandits’ anger",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "稀有",
        "search_text": "wls2_necklace_lunar_4 月球吊坠 lunar pendant 一个火热的马护身符守护你的牧场，减缓强盗的愤怒上升 a fiery horse amulet guards your ranch, slowing the rise of bandits’ anger accessory 饰品 amulet amulet trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "health_increment",
            "label": "生命加成",
            "value": 300,
            "unit": "",
            "display": "+300"
          },
          {
            "key": "bandit_duty_cost_reduction",
            "label": "强盗过路费减免",
            "value": 0.5,
            "unit": "%",
            "display": "50%"
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
        "description": "wls2_necklace_lunar_desc",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_necklace_lunar_desc",
        "name": "wls2_necklace_lunar_name",
        "rarity": "rare",
        "show_description": true,
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary10/wls2_lunar_charm_2026",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 5,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_necklace_lunar_5",
      "localization": {
        "description_key": "wls2_necklace_lunar_desc",
        "en": {
          "description": "A fiery horse amulet guards your ranch, slowing the rise of bandits’ anger",
          "full_description": "A fiery horse amulet guards your ranch, slowing the rise of bandits’ anger",
          "name": "Lunar Pendant"
        },
        "full_description_key": "wls2_necklace_lunar_desc",
        "name_key": "wls2_necklace_lunar_name",
        "zh": {
          "description": "一个火热的马护身符守护你的牧场，减缓强盗的愤怒上升",
          "full_description": "一个火热的马护身符守护你的牧场，减缓强盗的愤怒上升",
          "name": "月球吊坠"
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
      "sprite": "UI_WW_AlphaBinary10/wls2_lunar_charm_2026",
      "stat_curves": {
        "bandit_duty_cost_reduction": {
          "default": 0.5
        },
        "health_increment": {
          "default": 500
        }
      },
      "stat_labels": {
        "bandit_duty_cost_reduction": {
          "definition": {
            "is_percent": true,
            "name": "bandit_duty_cost_reduction",
            "name_value_format": "ui_item_stats_bandit_duty_cost_reduction",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "bandit_duty_cost_reduction",
          "en": null,
          "zh": null
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
      "image_key": "7a9421fe154e36916f2453abf4ae46e7d37578d9a7a464e1dfb375dec1eb15b4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "月球吊坠",
        "name_en": "Lunar Pendant",
        "description_zh": "一个火热的马护身符守护你的牧场，减缓强盗的愤怒上升",
        "description_en": "A fiery horse amulet guards your ranch, slowing the rise of bandits’ anger",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "稀有",
        "search_text": "wls2_necklace_lunar_5 月球吊坠 lunar pendant 一个火热的马护身符守护你的牧场，减缓强盗的愤怒上升 a fiery horse amulet guards your ranch, slowing the rise of bandits’ anger accessory 饰品 amulet amulet trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "health_increment",
            "label": "生命加成",
            "value": 500,
            "unit": "",
            "display": "+500"
          },
          {
            "key": "bandit_duty_cost_reduction",
            "label": "强盗过路费减免",
            "value": 0.5,
            "unit": "%",
            "display": "50%"
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
