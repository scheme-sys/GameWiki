/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-equipment-4"] = {
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
      "bodypart": 50,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 50,
        "description": "wls2_armor_xmas2024_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_head_description",
        "name": "wls2_armor_xmas2024_head_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_head",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_xmas2024_head_2_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_head_description",
        "en": {
          "description": "The red nose is not included",
          "full_description": "The red nose is not included",
          "name": "Deer antler headband"
        },
        "full_description_key": "wls2_armor_xmas2024_head_description",
        "name_key": "wls2_armor_xmas2024_head_name",
        "zh": {
          "description": "红色的鼻子不包括在内",
          "full_description": "红色的鼻子不包括在内",
          "name": "鹿角头带"
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
                "wls2_resourse_secondary_cloth_2": 4,
                "wls2_resourse_secondary_leather_2": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2024_head_2_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_head_2_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_head_2_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_head",
      "stat_curves": {
        "armor": {
          "1": 35,
          "2": 35,
          "3": 40,
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
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
        },
        "max_durability": {
          "1": 525,
          "2": 585,
          "3": 625,
          "4": 645,
          "5": 715
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
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "4752e3bd7b271ccf6cb9f2a1d5a749b1c0acbb12ffec31ad29b9f5e58da7add6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角头带",
        "name_en": "Deer antler headband",
        "description_zh": "红色的鼻子不包括在内",
        "description_en": "The red nose is not included",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_head_2_rare 鹿角头带 deer antler headband 红色的鼻子不包括在内 the red nose is not included armor 护甲 head head armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 35,
            "unit": "",
            "display": "35"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 525,
            "unit": "",
            "display": "525"
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
              "armor": 35,
              "dexterity": 2,
              "max_durability": 525
            },
            "display": {
              "armor": "35",
              "dexterity": "+2",
              "max_durability": "525"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 35,
              "dexterity": 3,
              "max_durability": 585
            },
            "display": {
              "armor": "35",
              "dexterity": "+3",
              "max_durability": "585"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 40,
              "dexterity": 4,
              "max_durability": 625
            },
            "display": {
              "armor": "40",
              "dexterity": "+4",
              "max_durability": "625"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 40,
              "dexterity": 5,
              "max_durability": 645
            },
            "display": {
              "armor": "40",
              "dexterity": "+5",
              "max_durability": "645"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 45,
              "dexterity": 6,
              "max_durability": 715
            },
            "display": {
              "armor": "45",
              "dexterity": "+6",
              "max_durability": "715"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 46,
              "dexterity": 6,
              "max_durability": 715
            },
            "display": {
              "armor": "46",
              "dexterity": "+6",
              "max_durability": "715"
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
      "bodypart": 50,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 50,
        "description": "wls2_armor_xmas2024_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_head_description",
        "name": "wls2_armor_xmas2024_head_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_head",
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
      "item_id": "wls2_armor_xmas2024_head_3_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_head_description",
        "en": {
          "description": "The red nose is not included",
          "full_description": "The red nose is not included",
          "name": "Deer antler headband"
        },
        "full_description_key": "wls2_armor_xmas2024_head_description",
        "name_key": "wls2_armor_xmas2024_head_name",
        "zh": {
          "description": "红色的鼻子不包括在内",
          "full_description": "红色的鼻子不包括在内",
          "name": "鹿角头带"
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
                "inventory_stack_id": "wls2_armor_xmas2024_head_3_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_head_3_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_head_3_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_head",
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
        "health_increment": {
          "1": 35,
          "2": 40,
          "3": 45,
          "4": 50,
          "5": 55
        },
        "max_durability": {
          "1": 1457,
          "2": 1602,
          "3": 1748,
          "4": 1894,
          "5": 2039
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
      "image_key": "4752e3bd7b271ccf6cb9f2a1d5a749b1c0acbb12ffec31ad29b9f5e58da7add6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角头带",
        "name_en": "Deer antler headband",
        "description_zh": "红色的鼻子不包括在内",
        "description_en": "The red nose is not included",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_head_3_rare 鹿角头带 deer antler headband 红色的鼻子不包括在内 the red nose is not included armor 护甲 head head armor armor_storage festive"
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
            "value": 0.5,
            "unit": "",
            "display": "0.5"
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
              "health_increment": 35,
              "max_durability": 1457
            },
            "display": {
              "armor": "68",
              "dexterity": "+2",
              "health_increment": "+35",
              "max_durability": "1457"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 74,
              "dexterity": 3,
              "health_increment": 40,
              "max_durability": 1602
            },
            "display": {
              "armor": "74",
              "dexterity": "+3",
              "health_increment": "+40",
              "max_durability": "1602"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 81,
              "dexterity": 4,
              "health_increment": 45,
              "max_durability": 1748
            },
            "display": {
              "armor": "81",
              "dexterity": "+4",
              "health_increment": "+45",
              "max_durability": "1748"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 88,
              "dexterity": 5,
              "health_increment": 50,
              "max_durability": 1894
            },
            "display": {
              "armor": "88",
              "dexterity": "+5",
              "health_increment": "+50",
              "max_durability": "1894"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 95,
              "dexterity": 6,
              "health_increment": 55,
              "max_durability": 2039
            },
            "display": {
              "armor": "95",
              "dexterity": "+6",
              "health_increment": "+55",
              "max_durability": "2039"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 96,
              "dexterity": 6,
              "health_increment": 55,
              "max_durability": 2039
            },
            "display": {
              "armor": "96",
              "dexterity": "+6",
              "health_increment": "+55",
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
      "bodypart": 50,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 50,
        "description": "wls2_armor_xmas2024_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_head_description",
        "name": "wls2_armor_xmas2024_head_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_head",
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
      "item_id": "wls2_armor_xmas2024_head_4_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_head_description",
        "en": {
          "description": "The red nose is not included",
          "full_description": "The red nose is not included",
          "name": "Deer antler headband"
        },
        "full_description_key": "wls2_armor_xmas2024_head_description",
        "name_key": "wls2_armor_xmas2024_head_name",
        "zh": {
          "description": "红色的鼻子不包括在内",
          "full_description": "红色的鼻子不包括在内",
          "name": "鹿角头带"
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
                "inventory_stack_id": "wls2_armor_xmas2024_head_4_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_head_4_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_head_4_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_head",
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
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "health_increment": {
          "1": 50,
          "2": 55,
          "3": 60,
          "4": 65,
          "5": 70
        },
        "max_durability": {
          "1": 4652,
          "2": 5117,
          "3": 5582,
          "4": 6047,
          "5": 6513
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
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "4752e3bd7b271ccf6cb9f2a1d5a749b1c0acbb12ffec31ad29b9f5e58da7add6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角头带",
        "name_en": "Deer antler headband",
        "description_zh": "红色的鼻子不包括在内",
        "description_en": "The red nose is not included",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_head_4_rare 鹿角头带 deer antler headband 红色的鼻子不包括在内 the red nose is not included armor 护甲 head head armor armor_storage festive"
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
            "key": "health_increment",
            "label": "生命加成",
            "value": 50,
            "unit": "",
            "display": "+50"
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
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 135,
              "health_increment": 50,
              "max_durability": 4652
            },
            "display": {
              "armor": "135",
              "health_increment": "+50",
              "max_durability": "4652"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 149,
              "health_increment": 55,
              "max_durability": 5117
            },
            "display": {
              "armor": "149",
              "health_increment": "+55",
              "max_durability": "5117"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 162,
              "health_increment": 60,
              "max_durability": 5582
            },
            "display": {
              "armor": "162",
              "health_increment": "+60",
              "max_durability": "5582"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 176,
              "health_increment": 65,
              "max_durability": 6047
            },
            "display": {
              "armor": "176",
              "health_increment": "+65",
              "max_durability": "6047"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 189,
              "health_increment": 70,
              "max_durability": 6513
            },
            "display": {
              "armor": "189",
              "health_increment": "+70",
              "max_durability": "6513"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 190,
              "health_increment": 70,
              "max_durability": 6513
            },
            "display": {
              "armor": "190",
              "health_increment": "+70",
              "max_durability": "6513"
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
      "bodypart": 50,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 50,
        "description": "wls2_armor_xmas2024_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_head_description",
        "name": "wls2_armor_xmas2024_head_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_head",
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
      "item_id": "wls2_armor_xmas2024_head_5_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_head_description",
        "en": {
          "description": "The red nose is not included",
          "full_description": "The red nose is not included",
          "name": "Deer antler headband"
        },
        "full_description_key": "wls2_armor_xmas2024_head_description",
        "name_key": "wls2_armor_xmas2024_head_name",
        "zh": {
          "description": "红色的鼻子不包括在内",
          "full_description": "红色的鼻子不包括在内",
          "name": "鹿角头带"
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
                "inventory_stack_id": "wls2_armor_xmas2024_head_5_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_head_5_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_head_5_rare",
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
            "stack_id": "wls2_armor_xmas2024_head_5_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_head",
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
          "1": 13989,
          "2": 15387,
          "3": 16786,
          "4": 18185,
          "5": 19584
        },
        "warm_modifier": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1
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
      "image_key": "4752e3bd7b271ccf6cb9f2a1d5a749b1c0acbb12ffec31ad29b9f5e58da7add6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角头带",
        "name_en": "Deer antler headband",
        "description_zh": "红色的鼻子不包括在内",
        "description_en": "The red nose is not included",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_head_5_rare 鹿角头带 deer antler headband 红色的鼻子不包括在内 the red nose is not included armor 护甲 head head armor armor_storage festive"
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
            "value": 4,
            "unit": "",
            "display": "+4"
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
            "value": 1,
            "unit": "",
            "display": "1"
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
              "dexterity": 4,
              "firearm_resistance": 0.04,
              "max_durability": 13989
            },
            "display": {
              "armor": "228",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "max_durability": "13989"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 251,
              "dexterity": 5,
              "firearm_resistance": 0.08,
              "max_durability": 15387
            },
            "display": {
              "armor": "251",
              "dexterity": "+5",
              "firearm_resistance": "+8%",
              "max_durability": "15387"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 274,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "max_durability": 16786
            },
            "display": {
              "armor": "274",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "max_durability": "16786"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 296,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "max_durability": 18185
            },
            "display": {
              "armor": "296",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "max_durability": "18185"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 319,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 19584
            },
            "display": {
              "armor": "319",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "max_durability": "19584"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 320,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 19584
            },
            "display": {
              "armor": "320",
              "dexterity": "+10",
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
      "bodypart": 50,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 50,
        "description": "wls2_armor_xmas2024_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_head_description",
        "name": "wls2_armor_xmas2024_head_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_head",
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
      "item_id": "wls2_armor_xmas2024_head_6_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_head_description",
        "en": {
          "description": "The red nose is not included",
          "full_description": "The red nose is not included",
          "name": "Deer antler headband"
        },
        "full_description_key": "wls2_armor_xmas2024_head_description",
        "name_key": "wls2_armor_xmas2024_head_name",
        "zh": {
          "description": "红色的鼻子不包括在内",
          "full_description": "红色的鼻子不包括在内",
          "name": "鹿角头带"
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
                "inventory_stack_id": "wls2_armor_xmas2024_head_6_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_head_6_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_head_6_rare",
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
            "stack_id": "wls2_armor_xmas2024_head_6_rare",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_head",
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
      "image_key": "4752e3bd7b271ccf6cb9f2a1d5a749b1c0acbb12ffec31ad29b9f5e58da7add6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角头带",
        "name_en": "Deer antler headband",
        "description_zh": "红色的鼻子不包括在内",
        "description_en": "The red nose is not included",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_head_6_rare 鹿角头带 deer antler headband 红色的鼻子不包括在内 the red nose is not included armor 护甲 head head armor armor_storage festive"
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
            "value": 0.5,
            "unit": "",
            "display": "0.5"
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
      "bodypart": 50,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 50,
        "description": "wls2_armor_xmas2024_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_head_description",
        "name": "wls2_armor_xmas2024_head_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_head",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_xmas2024_head_7_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_head_description",
        "en": {
          "description": "The red nose is not included",
          "full_description": "The red nose is not included",
          "name": "Deer antler headband"
        },
        "full_description_key": "wls2_armor_xmas2024_head_description",
        "name_key": "wls2_armor_xmas2024_head_name",
        "zh": {
          "description": "红色的鼻子不包括在内",
          "full_description": "红色的鼻子不包括在内",
          "name": "鹿角头带"
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
                "inventory_stack_id": "wls2_armor_xmas2024_head_7_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_xmas2024_head_7_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_head_7_rare",
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
            "stack_id": "wls2_armor_xmas2024_head_7_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_head",
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
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "4752e3bd7b271ccf6cb9f2a1d5a749b1c0acbb12ffec31ad29b9f5e58da7add6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "鹿角头带",
        "name_en": "Deer antler headband",
        "description_zh": "红色的鼻子不包括在内",
        "description_en": "The red nose is not included",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_head_7_rare 鹿角头带 deer antler headband 红色的鼻子不包括在内 the red nose is not included armor 护甲 head head armor armor_storage"
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
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 41,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 41,
        "description": "wls2_armor_xmas2024_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_legs_description",
        "name": "wls2_armor_xmas2024_legs_name",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_legs",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_xmas2024_legs_2_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_legs_description",
        "en": {
          "description": "Not just pants, but a festive statement",
          "full_description": "Not just pants, but a festive statement",
          "name": "Festive Pants"
        },
        "full_description_key": "wls2_armor_xmas2024_legs_description",
        "name_key": "wls2_armor_xmas2024_legs_name",
        "zh": {
          "description": "它不仅仅是裤子，它是一个节日的声明。",
          "full_description": "它不仅仅是裤子，它是一个节日的声明。",
          "name": "节日长裤"
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
                "wls2_resourse_secondary_leather_2": 7,
                "wls2_resourse_tertiary_clothroll_2": 3
              },
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2024_legs_2_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_legs_2_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_legs_2_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_legs",
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
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
        },
        "max_durability": {
          "1": 625,
          "2": 695,
          "3": 750,
          "4": 800,
          "5": 850
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
      "image_key": "4395dd1fa295129dc7d1988b26cc271cdb355b6b88b05527d5ef0624a6d0d637",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "节日长裤",
        "name_en": "Festive Pants",
        "description_zh": "它不仅仅是裤子，它是一个节日的声明。",
        "description_en": "Not just pants, but a festive statement",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_legs_2_rare 节日长裤 festive pants 它不仅仅是裤子，它是一个节日的声明。 not just pants, but a festive statement armor 护甲 legs legs armor armor_storage"
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
            "value": 625,
            "unit": "",
            "display": "625"
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
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 45,
              "dexterity": 2,
              "max_durability": 625
            },
            "display": {
              "armor": "45",
              "dexterity": "+2",
              "max_durability": "625"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 50,
              "dexterity": 3,
              "max_durability": 695
            },
            "display": {
              "armor": "50",
              "dexterity": "+3",
              "max_durability": "695"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 55,
              "dexterity": 4,
              "max_durability": 750
            },
            "display": {
              "armor": "55",
              "dexterity": "+4",
              "max_durability": "750"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 60,
              "dexterity": 5,
              "max_durability": 800
            },
            "display": {
              "armor": "60",
              "dexterity": "+5",
              "max_durability": "800"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 65,
              "dexterity": 6,
              "max_durability": 850
            },
            "display": {
              "armor": "65",
              "dexterity": "+6",
              "max_durability": "850"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 66,
              "dexterity": 6,
              "max_durability": 850
            },
            "display": {
              "armor": "66",
              "dexterity": "+6",
              "max_durability": "850"
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
      "bodypart": 41,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 41,
        "description": "wls2_armor_xmas2024_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_legs_description",
        "name": "wls2_armor_xmas2024_legs_name",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_legs",
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
      "item_id": "wls2_armor_xmas2024_legs_3_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_legs_description",
        "en": {
          "description": "Not just pants, but a festive statement",
          "full_description": "Not just pants, but a festive statement",
          "name": "Festive Pants"
        },
        "full_description_key": "wls2_armor_xmas2024_legs_description",
        "name_key": "wls2_armor_xmas2024_legs_name",
        "zh": {
          "description": "它不仅仅是裤子，它是一个节日的声明。",
          "full_description": "它不仅仅是裤子，它是一个节日的声明。",
          "name": "节日长裤"
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
                "inventory_stack_id": "wls2_armor_xmas2024_legs_3_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_legs_3_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_legs_3_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_legs",
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
        "health_increment": {
          "1": 35,
          "2": 40,
          "3": 45,
          "4": 50,
          "5": 55
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
      "image_key": "4395dd1fa295129dc7d1988b26cc271cdb355b6b88b05527d5ef0624a6d0d637",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "节日长裤",
        "name_en": "Festive Pants",
        "description_zh": "它不仅仅是裤子，它是一个节日的声明。",
        "description_en": "Not just pants, but a festive statement",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_legs_3_rare 节日长裤 festive pants 它不仅仅是裤子，它是一个节日的声明。 not just pants, but a festive statement armor 护甲 legs legs armor armor_storage festive"
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
            "value": 0.5,
            "unit": "",
            "display": "0.5"
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
              "health_increment": 35,
              "max_durability": 1457
            },
            "display": {
              "armor": "90",
              "dexterity": "+2",
              "health_increment": "+35",
              "max_durability": "1457"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 99,
              "dexterity": 3,
              "health_increment": 40,
              "max_durability": 1602
            },
            "display": {
              "armor": "99",
              "dexterity": "+3",
              "health_increment": "+40",
              "max_durability": "1602"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 108,
              "dexterity": 4,
              "health_increment": 45,
              "max_durability": 1748
            },
            "display": {
              "armor": "108",
              "dexterity": "+4",
              "health_increment": "+45",
              "max_durability": "1748"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 117,
              "dexterity": 5,
              "health_increment": 50,
              "max_durability": 1894
            },
            "display": {
              "armor": "117",
              "dexterity": "+5",
              "health_increment": "+50",
              "max_durability": "1894"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 126,
              "dexterity": 6,
              "health_increment": 55,
              "max_durability": 2039
            },
            "display": {
              "armor": "126",
              "dexterity": "+6",
              "health_increment": "+55",
              "max_durability": "2039"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 127,
              "dexterity": 6,
              "health_increment": 55,
              "max_durability": 2039
            },
            "display": {
              "armor": "127",
              "dexterity": "+6",
              "health_increment": "+55",
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
      "bodypart": 41,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 41,
        "description": "wls2_armor_xmas2024_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_legs_description",
        "name": "wls2_armor_xmas2024_legs_name",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_legs",
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
      "item_id": "wls2_armor_xmas2024_legs_4_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_legs_description",
        "en": {
          "description": "Not just pants, but a festive statement",
          "full_description": "Not just pants, but a festive statement",
          "name": "Festive Pants"
        },
        "full_description_key": "wls2_armor_xmas2024_legs_description",
        "name_key": "wls2_armor_xmas2024_legs_name",
        "zh": {
          "description": "它不仅仅是裤子，它是一个节日的声明。",
          "full_description": "它不仅仅是裤子，它是一个节日的声明。",
          "name": "节日长裤"
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
                "inventory_stack_id": "wls2_armor_xmas2024_legs_4_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_legs_4_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_legs_4_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_legs",
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
        "health_increment": {
          "1": 50,
          "2": 55,
          "3": 60,
          "4": 65,
          "5": 70
        },
        "max_durability": {
          "1": 5169,
          "2": 5686,
          "3": 6203,
          "4": 6719,
          "5": 7236
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
      "image_key": "4395dd1fa295129dc7d1988b26cc271cdb355b6b88b05527d5ef0624a6d0d637",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "节日长裤",
        "name_en": "Festive Pants",
        "description_zh": "它不仅仅是裤子，它是一个节日的声明。",
        "description_en": "Not just pants, but a festive statement",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_legs_4_rare 节日长裤 festive pants 它不仅仅是裤子，它是一个节日的声明。 not just pants, but a festive statement armor 护甲 legs legs armor armor_storage festive"
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
            "key": "health_increment",
            "label": "生命加成",
            "value": 50,
            "unit": "",
            "display": "+50"
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
            "value": 2,
            "unit": "",
            "display": "2"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 180,
              "dexterity": 2,
              "health_increment": 50,
              "max_durability": 5169
            },
            "display": {
              "armor": "180",
              "dexterity": "+2",
              "health_increment": "+50",
              "max_durability": "5169"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 198,
              "dexterity": 3,
              "health_increment": 55,
              "max_durability": 5686
            },
            "display": {
              "armor": "198",
              "dexterity": "+3",
              "health_increment": "+55",
              "max_durability": "5686"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 216,
              "dexterity": 4,
              "health_increment": 60,
              "max_durability": 6203
            },
            "display": {
              "armor": "216",
              "dexterity": "+4",
              "health_increment": "+60",
              "max_durability": "6203"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 234,
              "dexterity": 5,
              "health_increment": 65,
              "max_durability": 6719
            },
            "display": {
              "armor": "234",
              "dexterity": "+5",
              "health_increment": "+65",
              "max_durability": "6719"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 252,
              "dexterity": 6,
              "health_increment": 70,
              "max_durability": 7236
            },
            "display": {
              "armor": "252",
              "dexterity": "+6",
              "health_increment": "+70",
              "max_durability": "7236"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 253,
              "dexterity": 6,
              "health_increment": 70,
              "max_durability": 7236
            },
            "display": {
              "armor": "253",
              "dexterity": "+6",
              "health_increment": "+70",
              "max_durability": "7236"
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
      "bodypart": 41,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 41,
        "description": "wls2_armor_xmas2024_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_legs_description",
        "name": "wls2_armor_xmas2024_legs_name",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_legs",
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
      "item_id": "wls2_armor_xmas2024_legs_5_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_legs_description",
        "en": {
          "description": "Not just pants, but a festive statement",
          "full_description": "Not just pants, but a festive statement",
          "name": "Festive Pants"
        },
        "full_description_key": "wls2_armor_xmas2024_legs_description",
        "name_key": "wls2_armor_xmas2024_legs_name",
        "zh": {
          "description": "它不仅仅是裤子，它是一个节日的声明。",
          "full_description": "它不仅仅是裤子，它是一个节日的声明。",
          "name": "节日长裤"
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
                "inventory_stack_id": "wls2_armor_xmas2024_legs_5_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_legs_5_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_legs_5_rare",
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
            "stack_id": "wls2_armor_xmas2024_legs_5_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_legs",
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
          "1": 14655,
          "2": 16120,
          "3": 17586,
          "4": 19051,
          "5": 20516
        },
        "warm_modifier": {
          "1": 2,
          "2": 2,
          "3": 2,
          "4": 2,
          "5": 2
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
      "image_key": "4395dd1fa295129dc7d1988b26cc271cdb355b6b88b05527d5ef0624a6d0d637",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "节日长裤",
        "name_en": "Festive Pants",
        "description_zh": "它不仅仅是裤子，它是一个节日的声明。",
        "description_en": "Not just pants, but a festive statement",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_legs_5_rare 节日长裤 festive pants 它不仅仅是裤子，它是一个节日的声明。 not just pants, but a festive statement armor 护甲 legs legs armor armor_storage festive"
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
            "value": 4,
            "unit": "",
            "display": "+4"
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
              "dexterity": 4,
              "firearm_resistance": 0.04,
              "max_durability": 14655
            },
            "display": {
              "armor": "304",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "max_durability": "14655"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 334,
              "dexterity": 5,
              "firearm_resistance": 0.08,
              "max_durability": 16120
            },
            "display": {
              "armor": "334",
              "dexterity": "+5",
              "firearm_resistance": "+8%",
              "max_durability": "16120"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 365,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "max_durability": 17586
            },
            "display": {
              "armor": "365",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "max_durability": "17586"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 395,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "max_durability": 19051
            },
            "display": {
              "armor": "395",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "max_durability": "19051"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 426,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 20516
            },
            "display": {
              "armor": "426",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "max_durability": "20516"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 427,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 20516
            },
            "display": {
              "armor": "427",
              "dexterity": "+10",
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
      "bodypart": 41,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 41,
        "description": "wls2_armor_xmas2024_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_legs_description",
        "name": "wls2_armor_xmas2024_legs_name",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_legs",
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
      "item_id": "wls2_armor_xmas2024_legs_6_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_legs_description",
        "en": {
          "description": "Not just pants, but a festive statement",
          "full_description": "Not just pants, but a festive statement",
          "name": "Festive Pants"
        },
        "full_description_key": "wls2_armor_xmas2024_legs_description",
        "name_key": "wls2_armor_xmas2024_legs_name",
        "zh": {
          "description": "它不仅仅是裤子，它是一个节日的声明。",
          "full_description": "它不仅仅是裤子，它是一个节日的声明。",
          "name": "节日长裤"
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
                "inventory_stack_id": "wls2_armor_xmas2024_legs_6_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_legs_6_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_legs_6_rare",
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
            "stack_id": "wls2_armor_xmas2024_legs_6_rare",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_legs",
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
      "image_key": "4395dd1fa295129dc7d1988b26cc271cdb355b6b88b05527d5ef0624a6d0d637",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "节日长裤",
        "name_en": "Festive Pants",
        "description_zh": "它不仅仅是裤子，它是一个节日的声明。",
        "description_en": "Not just pants, but a festive statement",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_legs_6_rare 节日长裤 festive pants 它不仅仅是裤子，它是一个节日的声明。 not just pants, but a festive statement armor 护甲 legs legs armor armor_storage festive"
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
            "value": 0.5,
            "unit": "",
            "display": "0.5"
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
      "bodypart": 41,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 41,
        "description": "wls2_armor_xmas2024_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_legs_description",
        "name": "wls2_armor_xmas2024_legs_name",
        "rarity": "rare",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_legs",
        "tags": [
          "legs",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_xmas2024_legs_7_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_legs_description",
        "en": {
          "description": "Not just pants, but a festive statement",
          "full_description": "Not just pants, but a festive statement",
          "name": "Festive Pants"
        },
        "full_description_key": "wls2_armor_xmas2024_legs_description",
        "name_key": "wls2_armor_xmas2024_legs_name",
        "zh": {
          "description": "它不仅仅是裤子，它是一个节日的声明。",
          "full_description": "它不仅仅是裤子，它是一个节日的声明。",
          "name": "节日长裤"
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
                "wls2_resourse_secondary_leather_7": 7,
                "wls2_resourse_tertiary_clothroll_5": 5
              },
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2024_legs_7_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_xmas2024_legs_7_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_legs_7_rare",
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
            "stack_id": "wls2_armor_xmas2024_legs_7_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_legs",
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
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "4395dd1fa295129dc7d1988b26cc271cdb355b6b88b05527d5ef0624a6d0d637",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "节日长裤",
        "name_en": "Festive Pants",
        "description_zh": "它不仅仅是裤子，它是一个节日的声明。",
        "description_en": "Not just pants, but a festive statement",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_legs_7_rare 节日长裤 festive pants 它不仅仅是裤子，它是一个节日的声明。 not just pants, but a festive statement armor 护甲 legs legs armor armor_storage"
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
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": {
        "inventory_id": "wls2_backpack_5_slots",
        "shop_pack_description": "ui_offer_inventory_backpack_10_cells_label"
      },
      "backpack_id": "wls2_backpack_5",
      "bodypart": 0,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_5",
        "bodypart": 0,
        "description": "inventory_stack_view_wls_backpack_5_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls_backpack_5_description",
        "name": "inventory_stack_view_wls_backpack_5_name",
        "name_with_wrapping": "inventory_stack_view_wls_backpack_5_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW/wls_backpack_5",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_1",
      "localization": {
        "description_key": "inventory_stack_view_wls_backpack_5_description",
        "en": {
          "description": "Simple bag. Allows you to put extra 5 items",
          "full_description": "Simple bag. Allows you to put extra 5 items",
          "name": "Shoulder bag"
        },
        "full_description_key": "inventory_stack_view_wls_backpack_5_description",
        "name_key": "inventory_stack_view_wls_backpack_5_name",
        "zh": {
          "description": "简单的包，能够让你携带更多物品。可增加 5 个物品栏槽位",
          "full_description": "简单的包，能够让你携带更多物品。可增加 5 个物品栏槽位",
          "name": "肩包"
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
                "wls2_resourse_secondary_cloth_1": 5,
                "wls2_resourse_secondary_rope_1": 5
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_1"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_1_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW/wls_backpack_5",
      "stat_curves": {
        "max_durability": {
          "default": 100
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
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "image_key": "75234a439aa4fc301af656d7df50adb45483fb3577e11f257b43a6fdfe96a79a",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "肩包",
        "name_en": "Shoulder bag",
        "description_zh": "简单的包，能够让你携带更多物品。可增加 5 个物品栏槽位",
        "description_en": "Simple bag. Allows you to put extra 5 items",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "普通",
        "search_text": "wls2_backpack_1 肩包 shoulder bag 简单的包，能够让你携带更多物品。可增加 5 个物品栏槽位 simple bag. allows you to put extra 5 items backpack 背包 backpack backpack armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "inventory_size",
            "label": "背包容量",
            "value": 5,
            "unit": "格",
            "display": "5 格"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 100,
            "unit": "",
            "display": "100"
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
      "backpack": {
        "inventory_id": "wls2_backpack_10_slots",
        "shop_pack_description": "ui_offer_inventory_backpack_10_cells_label"
      },
      "backpack_id": "wls2_backpack_10",
      "bodypart": 1,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_10",
        "bodypart": 1,
        "description": "inventory_stack_view_wls_backpack_10_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls_backpack_10_description",
        "name": "inventory_stack_view_wls_backpack_10_name",
        "rarity": "common",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW/wls_backpack_10",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_2",
      "localization": {
        "description_key": "inventory_stack_view_wls_backpack_10_description",
        "en": {
          "description": "Backpack made of dense fabric with a leather bottom. Adds 10 inventory slots",
          "full_description": "Backpack made of dense fabric with a leather bottom. Adds 10 inventory slots",
          "name": "Cloth backpack"
        },
        "full_description_key": "inventory_stack_view_wls_backpack_10_description",
        "name_key": "inventory_stack_view_wls_backpack_10_name",
        "zh": {
          "description": "高密纤维制成的背包，底部采用皮革。可增加 10 个物品栏槽位",
          "full_description": "高密纤维制成的背包，底部采用皮革。可增加 10 个物品栏槽位",
          "name": "布制背包"
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
                "wls2_resourse_fourfold_instruments_1": 12,
                "wls2_resourse_secondary_leather_1": 12,
                "wls2_resourse_tertiary_clothroll_2": 20
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_2"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_backpack_2_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_instruments_1": 3,
                "wls2_resourse_secondary_cloth_2": 10,
                "wls2_resourse_secondary_rope_2": 10
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_2"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_2_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW/wls_backpack_10",
      "stat_curves": {
        "max_durability": {
          "default": 100
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
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "image_key": "797115c4da427c30c6d87a1a3ebc179e66df19a03d6148df5016c3a2d6da37e0",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "布制背包",
        "name_en": "Cloth backpack",
        "description_zh": "高密纤维制成的背包，底部采用皮革。可增加 10 个物品栏槽位",
        "description_en": "Backpack made of dense fabric with a leather bottom. Adds 10 inventory slots",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "普通",
        "search_text": "wls2_backpack_2 布制背包 cloth backpack 高密纤维制成的背包，底部采用皮革。可增加 10 个物品栏槽位 backpack made of dense fabric with a leather bottom. adds 10 inventory slots backpack 背包 backpack backpack armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "inventory_size",
            "label": "背包容量",
            "value": 10,
            "unit": "格",
            "display": "10 格"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 100,
            "unit": "",
            "display": "100"
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
      "backpack": {
        "inventory_id": "wls2_backpack_15_slots",
        "shop_pack_description": "ui_offer_inventory_backpack_10_cells_label"
      },
      "backpack_id": "wls2_backpack_15",
      "bodypart": 2,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15",
        "bodypart": 2,
        "description": "inventory_stack_view_wls_backpack_15_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls_backpack_15_description",
        "name": "inventory_stack_view_wls_backpack_15_name",
        "rarity": "common",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW/wls_backpack_15",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_3",
      "localization": {
        "description_key": "inventory_stack_view_wls_backpack_15_description",
        "en": {
          "description": "Very spacious and stylish. Adds 15 inventory slots",
          "full_description": "Very spacious and stylish. Adds 15 inventory slots",
          "name": "Leather backpack"
        },
        "full_description_key": "inventory_stack_view_wls_backpack_15_description",
        "name_key": "inventory_stack_view_wls_backpack_15_name",
        "zh": {
          "description": "空间大且外观时尚。可增加 15 个物品栏槽位",
          "full_description": "空间大且外观时尚。可增加 15 个物品栏槽位",
          "name": "皮革背包"
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
                "wls2_resourse_fourfold_instruments_2": 20,
                "wls2_resourse_secondary_leather_2": 10,
                "wls2_resourse_tertiary_clothroll_3": 20
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_3"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_backpack_3_recycle"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_instruments_2": 3,
                "wls2_resourse_secondary_cloth_3": 15,
                "wls2_resourse_secondary_rope_3": 15
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_3"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_3_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW/wls_backpack_15",
      "stat_curves": {
        "max_durability": {
          "default": 100
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
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "image_key": "d101deb93b66184caaeaa259019cabeaa8eace9f1bb717d6af32666ea6857628",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "皮革背包",
        "name_en": "Leather backpack",
        "description_zh": "空间大且外观时尚。可增加 15 个物品栏槽位",
        "description_en": "Very spacious and stylish. Adds 15 inventory slots",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "普通",
        "search_text": "wls2_backpack_3 皮革背包 leather backpack 空间大且外观时尚。可增加 15 个物品栏槽位 very spacious and stylish. adds 15 inventory slots backpack 背包 backpack backpack armor_storage"
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
      "backpack": {
        "inventory_id": "wls2_backpack_5_slots",
        "shop_pack_description": "ui_offer_inventory_backpack_10_cells_label"
      },
      "backpack_id": "wls2_backpack_5",
      "bodypart": 5,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_5",
        "bodypart": 5,
        "description": "inventory_stack_view_wls2_backpack_cowboy_1_common_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_cowboy_1_common_full_description",
        "name": "inventory_stack_view_wls2_backpack_cowboy_1_common_name",
        "rarity": "common",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary05/wls2_backpack_cowboy_1_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_cowboy_1_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_cowboy_1_common_description",
        "en": {
          "description": "Not so capacious, but good enough for short travels",
          "full_description": "Not so capacious, but good enough for short travels",
          "name": "Bag"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_cowboy_1_common_full_description",
        "name_key": "inventory_stack_view_wls2_backpack_cowboy_1_common_name",
        "zh": {
          "description": "一个布包。容积不大，但对于短途旅行来说已经足够。",
          "full_description": "一个布包。容积不大，但对于短途旅行来说已经足够",
          "name": "包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_1": 5,
            "wls2_resourse_secondary_rope_1": 5
          },
          "learn_exp": 800,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_cloth_1": 5,
                "wls2_resourse_secondary_rope_1": 5
              },
              "learn_exp": 800,
              "min_level": 1,
              "result": {
                "inventory_stack_id": "wls2_backpack_cowboy_1_common"
              },
              "type": "workbench"
            },
            "recipe_id": "wls2_backpack_cowboy_1_common_ab_ftue"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_cloth_1": 3,
                "wls2_resourse_secondary_rope_1": 3
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_cowboy_1_common"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_cowboy_1_common_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_backpack_cowboy_1_icon",
      "stat_curves": {
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
        },
        "resistance": {
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5
        }
      },
      "stat_labels": {
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
      "image_key": "25170a9aa00b582813f1b5be46a415ad647320a7552729a31d4682577461af2b",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "包",
        "name_en": "Bag",
        "description_zh": "一个布包。容积不大，但对于短途旅行来说已经足够",
        "description_en": "Not so capacious, but good enough for short travels",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "普通",
        "search_text": "wls2_backpack_cowboy_1_common 包 bag 一个布包。容积不大，但对于短途旅行来说已经足够 not so capacious, but good enough for short travels backpack 背包 backpack backpack armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "inventory_size",
            "label": "背包容量",
            "value": 5,
            "unit": "格",
            "display": "5 格"
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
              "resistance": 1
            },
            "display": {
              "resistance": "1"
            }
          },
          {
            "level": 2,
            "values": {
              "resistance": 2
            },
            "display": {
              "resistance": "2"
            }
          },
          {
            "level": 3,
            "values": {
              "resistance": 3
            },
            "display": {
              "resistance": "3"
            }
          },
          {
            "level": 4,
            "values": {
              "resistance": 4
            },
            "display": {
              "resistance": "4"
            }
          },
          {
            "level": 5,
            "values": {
              "resistance": 5
            },
            "display": {
              "resistance": "5"
            }
          }
        ],
        "columns": [
          {
            "key": "resistance",
            "label": "防御",
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
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": {
        "inventory_id": "wls2_backpack_10_slots",
        "shop_pack_description": "ui_offer_inventory_backpack_10_cells_label"
      },
      "backpack_id": "wls2_backpack_10",
      "bodypart": 6,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_10",
        "bodypart": 6,
        "description": "inventory_stack_view_wls2_backpack_cowboy_2_common_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_cowboy_2_common_full_description",
        "name": "inventory_stack_view_wls2_backpack_cowboy_2_common_name",
        "rarity": "common",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary05/wls2_backpack_cowboy_2_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_cowboy_2_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_cowboy_2_common_description",
        "en": {
          "description": "Made of more reliable fabric with leather bottom",
          "full_description": "Not so capacious, but good enough for short travels",
          "name": "Improved bag"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_cowboy_2_common_full_description",
        "name_key": "inventory_stack_view_wls2_backpack_cowboy_2_common_name",
        "zh": {
          "description": "采用更结实的织物制成，内有皮革打底。",
          "full_description": "采用更结实的织物制成，内有皮革打底。",
          "name": "改良包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_instruments_1": 12,
            "wls2_resourse_secondary_leather_1": 12,
            "wls2_resourse_tertiary_clothroll_2": 20
          },
          "learn_exp": 800,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_backpack_cowboy_2_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_250coins_dynamic_town_trader_offer_backpack_2"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_instruments_1": 6,
                "wls2_resourse_secondary_leather_1": 6,
                "wls2_resourse_tertiary_clothroll_2": 10
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_cowboy_2_common"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_cowboy_2_common_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_backpack_cowboy_2_icon",
      "stat_curves": {
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
        },
        "resistance": {
          "1": 3,
          "2": 4,
          "3": 5,
          "4": 6,
          "5": 7
        }
      },
      "stat_labels": {
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
      "image_key": "c78ef478ebe46dca780a1c18b5685eac8fbd59c5e0ee7cce17fc2c6ca65daf6f",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "改良包",
        "name_en": "Improved bag",
        "description_zh": "采用更结实的织物制成，内有皮革打底。",
        "description_en": "Not so capacious, but good enough for short travels",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "普通",
        "search_text": "wls2_backpack_cowboy_2_common 改良包 improved bag 采用更结实的织物制成，内有皮革打底。 not so capacious, but good enough for short travels backpack 背包 backpack backpack armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "inventory_size",
            "label": "背包容量",
            "value": 10,
            "unit": "格",
            "display": "10 格"
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
              "resistance": 3
            },
            "display": {
              "resistance": "3"
            }
          },
          {
            "level": 2,
            "values": {
              "resistance": 4
            },
            "display": {
              "resistance": "4"
            }
          },
          {
            "level": 3,
            "values": {
              "resistance": 5
            },
            "display": {
              "resistance": "5"
            }
          },
          {
            "level": 4,
            "values": {
              "resistance": 6
            },
            "display": {
              "resistance": "6"
            }
          },
          {
            "level": 5,
            "values": {
              "resistance": 7
            },
            "display": {
              "resistance": "7"
            }
          }
        ],
        "columns": [
          {
            "key": "resistance",
            "label": "防御",
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
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": {
        "inventory_id": "wls2_backpack_10_slots",
        "shop_pack_description": "ui_offer_inventory_backpack_10_cells_label"
      },
      "backpack_id": "wls2_backpack_10",
      "bodypart": 8,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_10",
        "bodypart": 8,
        "description": "inventory_stack_view_wls2_backpack_cowboy_2_uncommon_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_cowboy_2_uncommon_full_description",
        "name": "inventory_stack_view_wls2_backpack_cowboy_2_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary05/wls2_backpack_cowboy_upgrade_2_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_cowboy_2_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_cowboy_2_uncommon_description",
        "en": {
          "description": "Reliable and capacious bag with leather patches",
          "full_description": "Reliable and capacious bag with leather patches",
          "name": "Sturdy bag"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_cowboy_2_uncommon_full_description",
        "name_key": "inventory_stack_view_wls2_backpack_cowboy_2_uncommon_name",
        "zh": {
          "description": "结实而宽敞的包，带有皮革补丁。",
          "full_description": "结实而宽敞的包，带有皮革补丁。",
          "name": "结实包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_backpack_cowboy_2_common": 1,
            "wls2_resourse_fourfold_instruments_2": 8,
            "wls2_resourse_secondary_leather_1": 14,
            "wls2_resourse_tertiary_clothroll_2": 20
          },
          "learn_exp": 1600,
          "min_level": 1,
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_uncommon_desc"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_backpack_cowboy_2_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_1000coins_dynamic_town_trader_offer_backpack_2_uncommon"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_instruments_2": 4,
                "wls2_resourse_secondary_leather_1": 7,
                "wls2_resourse_tertiary_clothroll_2": 10
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_cowboy_2_uncommon"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_cowboy_2_uncommon_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_backpack_cowboy_upgrade_2_icon",
      "stat_curves": {
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
        },
        "resistance": {
          "1": 5,
          "2": 6,
          "3": 7,
          "4": 8,
          "5": 9
        }
      },
      "stat_labels": {
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
      "image_key": "9222775e388dfab81f2401a198276d7054ec5cd79931d904d8f7415c27fb3902",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "结实包",
        "name_en": "Sturdy bag",
        "description_zh": "结实而宽敞的包，带有皮革补丁。",
        "description_en": "Reliable and capacious bag with leather patches",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "优秀",
        "search_text": "wls2_backpack_cowboy_2_uncommon 结实包 sturdy bag 结实而宽敞的包，带有皮革补丁。 reliable and capacious bag with leather patches backpack 背包 backpack backpack armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "inventory_size",
            "label": "背包容量",
            "value": 10,
            "unit": "格",
            "display": "10 格"
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
            "value": 5,
            "unit": "",
            "display": "5"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "resistance": 5
            },
            "display": {
              "resistance": "5"
            }
          },
          {
            "level": 2,
            "values": {
              "resistance": 6
            },
            "display": {
              "resistance": "6"
            }
          },
          {
            "level": 3,
            "values": {
              "resistance": 7
            },
            "display": {
              "resistance": "7"
            }
          },
          {
            "level": 4,
            "values": {
              "resistance": 8
            },
            "display": {
              "resistance": "8"
            }
          },
          {
            "level": 5,
            "values": {
              "resistance": 9
            },
            "display": {
              "resistance": "9"
            }
          }
        ],
        "columns": [
          {
            "key": "resistance",
            "label": "防御",
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
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": {
        "inventory_id": "wls2_backpack_15_slots",
        "shop_pack_description": "ui_offer_inventory_backpack_10_cells_label"
      },
      "backpack_id": "wls2_backpack_15",
      "bodypart": 9,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15",
        "bodypart": 9,
        "description": "inventory_stack_view_wls2_backpack_cowboy_3_common_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_cowboy_3_common_full_description",
        "name": "inventory_stack_view_wls2_backpack_cowboy_3_common_name",
        "rarity": "common",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary05/wls2_backpack_cowboy_3_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_cowboy_3_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_cowboy_3_common_description",
        "en": {
          "description": "Made of linen fabric with solid leather belts",
          "full_description": "Made of linen fabric with solid leather belts",
          "name": "Improved backpack"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_cowboy_3_common_full_description",
        "name_key": "inventory_stack_view_wls2_backpack_cowboy_3_common_name",
        "zh": {
          "description": "由亚麻织物制成，配以实心皮带。",
          "full_description": "由亚麻织物制成，配以实心皮带。",
          "name": "改良背包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_instruments_2": 20,
            "wls2_resourse_secondary_leather_2": 10,
            "wls2_resourse_tertiary_clothroll_3": 20
          },
          "learn_exp": 800,
          "min_level": 0,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_backpack_cowboy_3_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_500coins_dynamic_town_trader_offer_backpack_3"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_instruments_2": 10,
                "wls2_resourse_secondary_leather_2": 5,
                "wls2_resourse_tertiary_clothroll_3": 10
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_cowboy_3_common"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_cowboy_3_common_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_backpack_cowboy_3_icon",
      "stat_curves": {
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
        },
        "resistance": {
          "1": 8,
          "2": 9,
          "3": 10,
          "4": 11,
          "5": 12
        }
      },
      "stat_labels": {
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
      "image_key": "db856ef2deba0b9b11da60ce24daa3fc1947f6c2311795560dda70093f9d3c29",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "改良背包",
        "name_en": "Improved backpack",
        "description_zh": "由亚麻织物制成，配以实心皮带。",
        "description_en": "Made of linen fabric with solid leather belts",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "普通",
        "search_text": "wls2_backpack_cowboy_3_common 改良背包 improved backpack 由亚麻织物制成，配以实心皮带。 made of linen fabric with solid leather belts backpack 背包 backpack backpack armor_storage"
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
            "value": 8,
            "unit": "",
            "display": "8"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "resistance": 8
            },
            "display": {
              "resistance": "8"
            }
          },
          {
            "level": 2,
            "values": {
              "resistance": 9
            },
            "display": {
              "resistance": "9"
            }
          },
          {
            "level": 3,
            "values": {
              "resistance": 10
            },
            "display": {
              "resistance": "10"
            }
          },
          {
            "level": 4,
            "values": {
              "resistance": 11
            },
            "display": {
              "resistance": "11"
            }
          },
          {
            "level": 5,
            "values": {
              "resistance": 12
            },
            "display": {
              "resistance": "12"
            }
          }
        ],
        "columns": [
          {
            "key": "resistance",
            "label": "防御",
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
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": {
        "inventory_id": "wls2_backpack_15_slots",
        "second_quick_cell_enabled": true,
        "shop_pack_description": "ui_offer_inventory_backpack_15_cells_label"
      },
      "backpack_id": "wls2_backpack_15_quick",
      "bodypart": 10,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15_quick",
        "bodypart": 10,
        "description": "inventory_stack_view_wls2_backpack_cowboy_3_rare_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_cowboy_3_rare_full_description",
        "name": "inventory_stack_view_wls2_backpack_cowboy_3_rare_name",
        "rarity": "rare",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary05/wls2_backpack_cowboy_rare_3_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_cowboy_3_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_cowboy_3_rare_description",
        "en": {
          "description": "Leather backpack for a true cowboy",
          "full_description": "Leather backpack for a true cowboy",
          "name": "Cowboy backpack"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_cowboy_3_rare_full_description",
        "name_key": "inventory_stack_view_wls2_backpack_cowboy_3_rare_name",
        "zh": {
          "description": "真正的牛仔所钟爱的皮革背包。",
          "full_description": "真正的牛仔所钟爱的皮革背包。",
          "name": "牛仔背包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_backpack_cowboy_3_uncommon": 1,
            "wls2_resourse_fourfold_instruments_3": 20,
            "wls2_resourse_fourfold_nails_3": 20,
            "wls2_resourse_secondary_leather_3": 20
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
              "ingredients": {
                "wls2_resourse_fourfold_instruments_3": 10,
                "wls2_resourse_fourfold_nails_3": 10,
                "wls2_resourse_secondary_leather_3": 10
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_cowboy_3_rare"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_cowboy_3_rare_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.9,
            "level_max": 70,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_cowboy_3_rare",
            "transaction_id": "transaction_iap_wls_10_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
            "durability_factor": 0.9,
            "level_min": 71,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_cowboy_3_rare",
            "transaction_id": "transaction_iap_wls_8_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_backpack_cowboy_rare_3_icon",
      "stat_curves": {
        "dexterity": {
          "1": 3,
          "2": 6,
          "3": 9,
          "4": 12,
          "5": 15,
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
          "1": 13,
          "2": 14,
          "3": 15,
          "4": 16,
          "5": 17
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
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "0f9067ffff18722e95a42e4688cf92fd051d03fcd3906b4a8d76199b4577083c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "牛仔背包",
        "name_en": "Cowboy backpack",
        "description_zh": "真正的牛仔所钟爱的皮革背包。",
        "description_en": "Leather backpack for a true cowboy",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "稀有",
        "search_text": "wls2_backpack_cowboy_3_rare 牛仔背包 cowboy backpack 真正的牛仔所钟爱的皮革背包。 leather backpack for a true cowboy backpack 背包 backpack backpack armor_storage"
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
            "value": 13,
            "unit": "",
            "display": "13"
          },
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": 3,
            "unit": "",
            "display": "+3"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "dexterity": 3,
              "resistance": 13
            },
            "display": {
              "dexterity": "+3",
              "resistance": "13"
            }
          },
          {
            "level": 2,
            "values": {
              "dexterity": 6,
              "resistance": 14
            },
            "display": {
              "dexterity": "+6",
              "resistance": "14"
            }
          },
          {
            "level": 3,
            "values": {
              "dexterity": 9,
              "resistance": 15
            },
            "display": {
              "dexterity": "+9",
              "resistance": "15"
            }
          },
          {
            "level": 4,
            "values": {
              "dexterity": 12,
              "resistance": 16
            },
            "display": {
              "dexterity": "+12",
              "resistance": "16"
            }
          },
          {
            "level": 5,
            "values": {
              "dexterity": 15,
              "resistance": 17
            },
            "display": {
              "dexterity": "+15",
              "resistance": "17"
            }
          },
          {
            "level": 6,
            "values": {
              "dexterity": 16,
              "resistance": 17
            },
            "display": {
              "dexterity": "+16",
              "resistance": "17"
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
          "攻速加成：6 级起每级增加 1，最高 +1015。"
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
      "backpack": {
        "inventory_id": "wls2_backpack_15_slots",
        "shop_pack_description": "ui_offer_inventory_backpack_10_cells_label"
      },
      "backpack_id": "wls2_backpack_15",
      "bodypart": 11,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15",
        "bodypart": 11,
        "description": "inventory_stack_view_wls2_backpack_cowboy_3_uncommon_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_cowboy_3_uncommon_full_description",
        "name": "inventory_stack_view_wls2_backpack_cowboy_3_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary05/wls2_backpack_cowboy_upgrade_3_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_cowboy_3_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_cowboy_3_uncommon_description",
        "en": {
          "description": "Great for traveling long distances",
          "full_description": "Great for traveling long distances",
          "name": "Sturdy backpack"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_cowboy_3_uncommon_full_description",
        "name_key": "inventory_stack_view_wls2_backpack_cowboy_3_uncommon_name",
        "zh": {
          "description": "长途旅行的理想之选。",
          "full_description": "长途旅行的理想之选。",
          "name": "结实背包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_backpack_cowboy_3_common": 1,
            "wls2_resourse_fourfold_instruments_3": 20,
            "wls2_resourse_secondary_leather_2": 20,
            "wls2_resourse_tertiary_clothroll_3": 20
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
                "inventory_stack_id": "wls2_backpack_cowboy_3_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_1500coins_dynamic_town_trader_offer_backpack_uncommon_3"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_instruments_3": 10,
                "wls2_resourse_secondary_leather_2": 10,
                "wls2_resourse_tertiary_clothroll_3": 10
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_cowboy_3_uncommon"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_cowboy_3_uncommon_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_5_a",
            "durability_factor": 0.9,
            "level_max": 70,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_cowboy_3_uncommon",
            "transaction_id": "transaction_iap_wls_7_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.9,
            "level_max": 100,
            "level_min": 71,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_cowboy_3_uncommon",
            "transaction_id": "transaction_iap_wls_4_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_backpack_cowboy_upgrade_3_icon",
      "stat_curves": {
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
        },
        "resistance": {
          "1": 10,
          "2": 11,
          "3": 12,
          "4": 13,
          "5": 14
        }
      },
      "stat_labels": {
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
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "9dbd1aed82a7c0e92aee99733570f706dbaaa71350354f084b9cf96e34fc0abe",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "结实背包",
        "name_en": "Sturdy backpack",
        "description_zh": "长途旅行的理想之选。",
        "description_en": "Great for traveling long distances",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "优秀",
        "search_text": "wls2_backpack_cowboy_3_uncommon 结实背包 sturdy backpack 长途旅行的理想之选。 great for traveling long distances backpack 背包 backpack backpack armor_storage"
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
            "value": 10,
            "unit": "",
            "display": "10"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "resistance": 10
            },
            "display": {
              "resistance": "10"
            }
          },
          {
            "level": 2,
            "values": {
              "resistance": 11
            },
            "display": {
              "resistance": "11"
            }
          },
          {
            "level": 3,
            "values": {
              "resistance": 12
            },
            "display": {
              "resistance": "12"
            }
          },
          {
            "level": 4,
            "values": {
              "resistance": 13
            },
            "display": {
              "resistance": "13"
            }
          },
          {
            "level": 5,
            "values": {
              "resistance": 14
            },
            "display": {
              "resistance": "14"
            }
          }
        ],
        "columns": [
          {
            "key": "resistance",
            "label": "防御",
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
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": {
        "inventory_id": "wls2_backpack_15_slots",
        "second_quick_cell_enabled": true,
        "shop_pack_description": "ui_offer_inventory_backpack_15_cells_label"
      },
      "backpack_id": "wls2_backpack_15_quick",
      "bodypart": 12,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15_quick",
        "bodypart": 12,
        "description": "inventory_stack_view_wls2_backpack_cowboy_4_rare_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_cowboy_4_rare_full_description",
        "name": "inventory_stack_view_wls2_backpack_cowboy_4_rare_name",
        "rarity": "rare",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary05/wls2_backpack_cowboy_rare_4_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_cowboy_4_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_cowboy_4_rare_description",
        "en": {
          "description": "One of the best backpacks, made of leather and steel materials",
          "full_description": "One of the best backpacks, made of leather and steel materials",
          "name": "Gunslinger backpack"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_cowboy_4_rare_full_description",
        "name_key": "inventory_stack_view_wls2_backpack_cowboy_4_rare_name",
        "zh": {
          "description": "由皮革和钢铁材料制成的优质背包。",
          "full_description": "由皮革和钢铁材料制成的优质背包。",
          "name": "枪手背包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_backpack_cowboy_4_uncommon": 1,
            "wls2_resourse_fourfold_instruments_4": 20,
            "wls2_resourse_fourfold_nails_4": 20,
            "wls2_resourse_secondary_leather_4": 20
          },
          "learn_exp": 3200,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_20_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_instruments_4": 10,
                "wls2_resourse_fourfold_nails_4": 10,
                "wls2_resourse_secondary_leather_4": 10
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_cowboy_4_rare"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_cowboy_4_rare_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_12_a",
            "durability_factor": 0.9,
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_cowboy_4_rare",
            "transaction_id": "transaction_iap_wls_15_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.9,
            "level_min": 91,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_cowboy_4_rare",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_backpack_cowboy_rare_4_icon",
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
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "5e6e5a3484bca7648b74438893beab467e3ac0f12d4297cd45be8db6bffd2d51",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "枪手背包",
        "name_en": "Gunslinger backpack",
        "description_zh": "由皮革和钢铁材料制成的优质背包。",
        "description_en": "One of the best backpacks, made of leather and steel materials",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "稀有",
        "search_text": "wls2_backpack_cowboy_4_rare 枪手背包 gunslinger backpack 由皮革和钢铁材料制成的优质背包。 one of the best backpacks, made of leather and steel materials backpack 背包 backpack backpack armor_storage"
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
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": {
        "inventory_id": "wls2_backpack_15_slots",
        "second_quick_cell_enabled": true,
        "shop_pack_description": "ui_offer_inventory_backpack_15_cells_label"
      },
      "backpack_id": "wls2_backpack_15_quick",
      "bodypart": 13,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15_quick",
        "bodypart": 13,
        "description": "inventory_stack_view_wls2_backpack_cowboy_4_uncommon_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_cowboy_4_uncommon_full_description",
        "name": "inventory_stack_view_wls2_backpack_cowboy_4_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary05/wls2_backpack_cowboy_upgrade_4_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_cowboy_4_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_cowboy_4_uncommon_description",
        "en": {
          "description": "Made of linen fabric and thick leather",
          "full_description": "Made of linen fabric and thick leather",
          "name": "Ranger backpack"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_cowboy_4_uncommon_full_description",
        "name_key": "inventory_stack_view_wls2_backpack_cowboy_4_uncommon_name",
        "zh": {
          "description": "由亚麻织物和厚皮革制成。",
          "full_description": "由亚麻织物和厚皮革制成。",
          "name": "游侠背包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_backpack_cowboy_3_uncommon": 1,
            "wls2_resourse_fourfold_instruments_4": 8,
            "wls2_resourse_secondary_leather_4": 20,
            "wls2_resourse_tertiary_clothroll_4": 20
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
              "ingredients": {
                "wls2_resourse_fourfold_instruments_4": 4,
                "wls2_resourse_secondary_leather_4": 10,
                "wls2_resourse_tertiary_clothroll_4": 10
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_cowboy_4_uncommon"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_cowboy_4_uncommon_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
            "durability_factor": 0.9,
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_cowboy_4_uncommon",
            "transaction_id": "transaction_iap_wls_12_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_4_a",
            "durability_factor": 0.9,
            "level_min": 91,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_cowboy_4_uncommon",
            "transaction_id": "transaction_iap_wls_5_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_backpack_cowboy_upgrade_4_icon",
      "stat_curves": {
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
        },
        "resistance": {
          "1": 14,
          "2": 15,
          "3": 16,
          "4": 17,
          "5": 18
        }
      },
      "stat_labels": {
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
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "feabf975f2ab0a0441ff2589b46dfa132aa526b6f5fca1f4c6dd571a9a96684c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "游侠背包",
        "name_en": "Ranger backpack",
        "description_zh": "由亚麻织物和厚皮革制成。",
        "description_en": "Made of linen fabric and thick leather",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "优秀",
        "search_text": "wls2_backpack_cowboy_4_uncommon 游侠背包 ranger backpack 由亚麻织物和厚皮革制成。 made of linen fabric and thick leather backpack 背包 backpack backpack armor_storage"
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
            "value": 14,
            "unit": "",
            "display": "14"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "resistance": 14
            },
            "display": {
              "resistance": "14"
            }
          },
          {
            "level": 2,
            "values": {
              "resistance": 15
            },
            "display": {
              "resistance": "15"
            }
          },
          {
            "level": 3,
            "values": {
              "resistance": 16
            },
            "display": {
              "resistance": "16"
            }
          },
          {
            "level": 4,
            "values": {
              "resistance": 17
            },
            "display": {
              "resistance": "17"
            }
          },
          {
            "level": 5,
            "values": {
              "resistance": 18
            },
            "display": {
              "resistance": "18"
            }
          }
        ],
        "columns": [
          {
            "key": "resistance",
            "label": "防御",
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
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": {
        "inventory_id": "wls2_backpack_15_slots",
        "second_quick_cell_enabled": true,
        "shop_pack_description": "ui_offer_inventory_backpack_15_cells_label"
      },
      "backpack_id": "wls2_backpack_15_quick",
      "bodypart": 14,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15_quick",
        "bodypart": 14,
        "description": "inventory_stack_view_wls2_backpack_cowboy_5_rare_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_cowboy_5_rare_full_description",
        "name": "inventory_stack_view_wls2_backpack_cowboy_5_rare_name",
        "rarity": "rare",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary05/wls2_backpack_cowboy_rare_5_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_cowboy_5_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_cowboy_5_rare_description",
        "en": {
          "description": "The strongest backpack, it's literally a dream come true for many cowboys",
          "full_description": "The strongest backpack, it's literally a dream come true for many cowboys",
          "name": "Deputy's backpack"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_cowboy_5_rare_full_description",
        "name_key": "inventory_stack_view_wls2_backpack_cowboy_5_rare_name",
        "zh": {
          "description": "最坚固的背包，对许多牛仔来说就如同美梦成真一般。",
          "full_description": "最坚固的背包，对许多牛仔来说就如同美梦成真一般。",
          "name": "副警长背包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_backpack_cowboy_4_rare": 1,
            "wls2_resourse_fourfold_instruments_5": 18,
            "wls2_resourse_secondary_leather_5": 20,
            "wls2_resourse_tertiary_clothroll_5": 20
          },
          "learn_exp": 3200,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_20_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_instruments_5": 9,
                "wls2_resourse_secondary_leather_5": 10,
                "wls2_resourse_tertiary_clothroll_5": 10
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_cowboy_5_rare"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_cowboy_5_rare_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_15_a",
            "durability_factor": 0.9,
            "level_max": 105,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_cowboy_5_rare",
            "transaction_id": "transaction_iap_wls_20_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_12_a",
            "durability_factor": 0.9,
            "level_min": 106,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_cowboy_5_rare",
            "transaction_id": "transaction_iap_wls_15_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_backpack_cowboy_rare_5_icon",
      "stat_curves": {
        "death_penalty_reduction": {
          "1": 0.1,
          "2": 0.1,
          "3": 0.1,
          "4": 0.1,
          "5": 0.1
        },
        "dexterity": {
          "1": 5,
          "2": 10,
          "3": 15,
          "4": 20,
          "5": 25,
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
          "1": 21,
          "2": 22,
          "3": 23,
          "4": 24,
          "5": 25
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
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "3bded889d4d81ae6910f5450b9e6781f6e239addc95fd75f5c7ad2f5d75801fa",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "副警长背包",
        "name_en": "Deputy's backpack",
        "description_zh": "最坚固的背包，对许多牛仔来说就如同美梦成真一般。",
        "description_en": "The strongest backpack, it's literally a dream come true for many cowboys",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "稀有",
        "search_text": "wls2_backpack_cowboy_5_rare 副警长背包 deputy's backpack 最坚固的背包，对许多牛仔来说就如同美梦成真一般。 the strongest backpack, it's literally a dream come true for many cowboys backpack 背包 backpack backpack armor_storage"
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
            "value": 21,
            "unit": "",
            "display": "21"
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
            "key": "death_penalty_reduction",
            "label": "死亡耐久损失减免",
            "value": 0.1,
            "unit": "%",
            "display": "10%"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "dexterity": 5,
              "resistance": 21
            },
            "display": {
              "dexterity": "+5",
              "resistance": "21"
            }
          },
          {
            "level": 2,
            "values": {
              "dexterity": 10,
              "resistance": 22
            },
            "display": {
              "dexterity": "+10",
              "resistance": "22"
            }
          },
          {
            "level": 3,
            "values": {
              "dexterity": 15,
              "resistance": 23
            },
            "display": {
              "dexterity": "+15",
              "resistance": "23"
            }
          },
          {
            "level": 4,
            "values": {
              "dexterity": 20,
              "resistance": 24
            },
            "display": {
              "dexterity": "+20",
              "resistance": "24"
            }
          },
          {
            "level": 5,
            "values": {
              "dexterity": 25,
              "resistance": 25
            },
            "display": {
              "dexterity": "+25",
              "resistance": "25"
            }
          },
          {
            "level": 6,
            "values": {
              "dexterity": 26,
              "resistance": 25
            },
            "display": {
              "dexterity": "+26",
              "resistance": "25"
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
          "攻速加成：6 级起每级增加 1，最高 +1025。"
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
      "bodypart": 30,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15_quick_all",
        "bodypart": 30,
        "description": "inventory_stack_view_wls2_backpack_cowboy_6_rare_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_cowboy_6_rare_description",
        "name": "inventory_stack_view_wls2_backpack_cowboy_6_rare_name",
        "rarity": "rare",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary08/wls2_backpack_cowboy_rare_6_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_cowboy_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_cowboy_6_rare_description",
        "en": {
          "description": "Tailored for long adventures even on frosty days",
          "full_description": "Tailored for long adventures even on frosty days",
          "name": "Klondike conqueror rucksack"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_cowboy_6_rare_description",
        "name_key": "inventory_stack_view_wls2_backpack_cowboy_6_rare_name",
        "zh": {
          "description": "即使在寒冷的日子里也适合长时间的冒险",
          "full_description": "即使在寒冷的日子里也适合长时间的冒险",
          "name": "肯洛迪克征服者背包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_backpack_cowboy_5_rare": 1,
            "wls2_resourse_fourfold_instruments_6": 18,
            "wls2_resourse_secondary_cloth_6": 50,
            "wls2_resourse_secondary_leather_6": 20
          },
          "learn_exp": 3200,
          "min_level": 0,
          "required_electricity": 8,
          "transaction_id": "transaction_iap_wls_20_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_instruments_6": 10,
                "wls2_resourse_secondary_cloth_6": 25,
                "wls2_resourse_secondary_leather_6": 10
              },
              "required_electricity": 2,
              "result": {
                "inventory_stack_id": "wls2_backpack_cowboy_6_rare"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_cowboy_6_rare_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_15_a",
            "durability_factor": 0.9,
            "level_max": 120,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_cowboy_6_rare",
            "transaction_id": "transaction_iap_wls_20_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_12_a",
            "durability_factor": 0.9,
            "level_min": 121,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_cowboy_6_rare",
            "transaction_id": "transaction_iap_wls_15_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_backpack_cowboy_rare_6_icon",
      "stat_curves": {
        "critical_modifier": {
          "1": 0.05,
          "2": 0.1,
          "3": 0.15,
          "4": 0.2,
          "5": 0.25
        },
        "dexterity": {
          "1": 5,
          "2": 10,
          "3": 15,
          "4": 20,
          "5": 25
        },
        "health_increment": {
          "1": 200,
          "2": 400,
          "3": 600,
          "4": 800,
          "5": 1000,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
        },
        "penetrating_damage_resistance": {
          "default": 0.15
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
        "penetrating_damage_resistance": {
          "definition": {
            "is_percent": true,
            "name": "ui_item_stats_penetrating_resistance",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_penetrating_resistance",
          "en": "Piercing damage defense",
          "zh": "穿透伤害防御"
        }
      },
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "bf565a1e5529e1ffd9dac158df81a4ed4239147879cdf6fade54a8a7d41adc07",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "肯洛迪克征服者背包",
        "name_en": "Klondike conqueror rucksack",
        "description_zh": "即使在寒冷的日子里也适合长时间的冒险",
        "description_en": "Tailored for long adventures even on frosty days",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "稀有",
        "search_text": "wls2_backpack_cowboy_6_rare 肯洛迪克征服者背包 klondike conqueror rucksack 即使在寒冷的日子里也适合长时间的冒险 tailored for long adventures even on frosty days backpack 背包 backpack backpack armor_storage"
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
            "value": 200,
            "unit": "",
            "display": "+200"
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
            "key": "penetrating_damage_resistance",
            "label": "穿刺伤害抗性",
            "value": 0.15,
            "unit": "%",
            "display": "15%"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_modifier": 0.05,
              "dexterity": 5,
              "health_increment": 200
            },
            "display": {
              "critical_modifier": "5%",
              "dexterity": "+5",
              "health_increment": "+200"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_modifier": 0.1,
              "dexterity": 10,
              "health_increment": 400
            },
            "display": {
              "critical_modifier": "10%",
              "dexterity": "+10",
              "health_increment": "+400"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_modifier": 0.15,
              "dexterity": 15,
              "health_increment": 600
            },
            "display": {
              "critical_modifier": "15%",
              "dexterity": "+15",
              "health_increment": "+600"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_modifier": 0.2,
              "dexterity": 20,
              "health_increment": 800
            },
            "display": {
              "critical_modifier": "20%",
              "dexterity": "+20",
              "health_increment": "+800"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_modifier": 0.25,
              "dexterity": 25,
              "health_increment": 1000
            },
            "display": {
              "critical_modifier": "25%",
              "dexterity": "+25",
              "health_increment": "+1000"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_modifier": 0.25,
              "dexterity": 25,
              "health_increment": 1001
            },
            "display": {
              "critical_modifier": "25%",
              "dexterity": "+25",
              "health_increment": "+1001"
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
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "health_increment",
            "label": "生命加成",
            "unit": ""
          }
        ],
        "notes": [
          "生命加成：6 级起每级增加 1，最高 +2000。"
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
      "bodypart": 32,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15_quick_10_slots",
        "bodypart": 32,
        "description": "inventory_stack_view_wls2_backpack_cowboy_7_rare_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_cowboy_7_rare_description",
        "name": "inventory_stack_view_wls2_backpack_cowboy_7_rare_name",
        "rarity": "rare",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary10/wls2_backpack_cowboy_rare_7_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_cowboy_7_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_cowboy_7_rare_description",
        "en": {
          "description": "A unique rucksack for a unique person",
          "full_description": "A unique rucksack for a unique person",
          "name": "Rio Bravo legend backpack"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_cowboy_7_rare_description",
        "name_key": "inventory_stack_view_wls2_backpack_cowboy_7_rare_name",
        "zh": {
          "description": "一个独特的背包给一个独特的人",
          "full_description": "一个独特的背包给一个独特的人",
          "name": "里约布拉沃传奇背包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_backpack_cowboy_6_rare": 1,
            "wls2_resourse_fourfold_instruments_7": 18,
            "wls2_resourse_secondary_cloth_7": 50,
            "wls2_resourse_secondary_leather_7": 20
          },
          "learn_exp": 3200,
          "min_level": 0,
          "required_electricity": 16,
          "transaction_id": "transaction_iap_wls_20_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_instruments_7": 10,
                "wls2_resourse_secondary_cloth_7": 25,
                "wls2_resourse_secondary_leather_7": 10
              },
              "required_electricity": 4,
              "result": {
                "inventory_stack_id": "wls2_backpack_cowboy_7_rare"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_cowboy_7_rare_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_15_a",
            "durability_factor": 0.9,
            "level_max": 124,
            "level_min": 115,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_cowboy_7_rare",
            "transaction_id": "transaction_iap_wls_20_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_12_a",
            "durability_factor": 0.9,
            "level_min": 125,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_cowboy_7_rare",
            "transaction_id": "transaction_iap_wls_15_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_backpack_cowboy_rare_7_icon",
      "stat_curves": {
        "critical_modifier": {
          "1": 0.05,
          "2": 0.1,
          "3": 0.15,
          "4": 0.2,
          "5": 0.25
        },
        "dexterity": {
          "1": 5,
          "2": 10,
          "3": 15,
          "4": 20,
          "5": 25
        },
        "health_increment": {
          "1": 200,
          "2": 400,
          "3": 600,
          "4": 800,
          "5": 1000,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
        },
        "penetrating_damage_resistance": {
          "default": 0.15
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
        "penetrating_damage_resistance": {
          "definition": {
            "is_percent": true,
            "name": "ui_item_stats_penetrating_resistance",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_percent_format"
          },
          "display_key": "ui_item_stats_penetrating_resistance",
          "en": "Piercing damage defense",
          "zh": "穿透伤害防御"
        }
      },
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "7399e19828b0368d34bafaa36a6271031dc1d65c76d26c7e85ea03963880a6f9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "里约布拉沃传奇背包",
        "name_en": "Rio Bravo legend backpack",
        "description_zh": "一个独特的背包给一个独特的人",
        "description_en": "A unique rucksack for a unique person",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "稀有",
        "search_text": "wls2_backpack_cowboy_7_rare 里约布拉沃传奇背包 rio bravo legend backpack 一个独特的背包给一个独特的人 a unique rucksack for a unique person backpack 背包 backpack backpack armor_storage"
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
            "value": 200,
            "unit": "",
            "display": "+200"
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
            "key": "penetrating_damage_resistance",
            "label": "穿刺伤害抗性",
            "value": 0.15,
            "unit": "%",
            "display": "15%"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "critical_modifier": 0.05,
              "dexterity": 5,
              "health_increment": 200
            },
            "display": {
              "critical_modifier": "5%",
              "dexterity": "+5",
              "health_increment": "+200"
            }
          },
          {
            "level": 2,
            "values": {
              "critical_modifier": 0.1,
              "dexterity": 10,
              "health_increment": 400
            },
            "display": {
              "critical_modifier": "10%",
              "dexterity": "+10",
              "health_increment": "+400"
            }
          },
          {
            "level": 3,
            "values": {
              "critical_modifier": 0.15,
              "dexterity": 15,
              "health_increment": 600
            },
            "display": {
              "critical_modifier": "15%",
              "dexterity": "+15",
              "health_increment": "+600"
            }
          },
          {
            "level": 4,
            "values": {
              "critical_modifier": 0.2,
              "dexterity": 20,
              "health_increment": 800
            },
            "display": {
              "critical_modifier": "20%",
              "dexterity": "+20",
              "health_increment": "+800"
            }
          },
          {
            "level": 5,
            "values": {
              "critical_modifier": 0.25,
              "dexterity": 25,
              "health_increment": 1000
            },
            "display": {
              "critical_modifier": "25%",
              "dexterity": "+25",
              "health_increment": "+1000"
            }
          },
          {
            "level": 6,
            "values": {
              "critical_modifier": 0.25,
              "dexterity": 25,
              "health_increment": 1001
            },
            "display": {
              "critical_modifier": "25%",
              "dexterity": "+25",
              "health_increment": "+1001"
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
            "key": "dexterity",
            "label": "攻速加成",
            "unit": ""
          },
          {
            "key": "health_increment",
            "label": "生命加成",
            "unit": ""
          }
        ],
        "notes": [
          "生命加成：6 级起每级增加 1，最高 +2000。"
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
        "inventory_id": "wls2_backpack_10_slots",
        "shop_pack_description": "ui_offer_inventory_backpack_10_cells_label"
      },
      "backpack_id": "wls2_backpack_10",
      "bodypart": 24,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_10",
        "bodypart": 24,
        "description": "inventory_stack_view_wls2_backpack_fbo_epic_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_fbo_epic_description",
        "name": "inventory_stack_view_wls2_backpack_fbo_epic_name",
        "rarity": "rare",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary04/wls2_backpack_fbo_epic",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_fbo_2_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_fbo_epic_description",
        "en": {
          "description": "Custom made, more spacious and fancy than simple backpacks",
          "full_description": "Custom made, more spacious and fancy than simple backpacks",
          "name": "Nameless Hero Backpack"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_fbo_epic_description",
        "name_key": "inventory_stack_view_wls2_backpack_fbo_epic_name",
        "zh": {
          "description": "定制，比简易的背包更加宽敞精美",
          "full_description": "定制，比简易的背包更加宽敞精美",
          "name": "无名英雄背包"
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
                "wls2_resourse_fourfold_instruments_1": 12,
                "wls2_resourse_secondary_leather_1": 12,
                "wls2_resourse_tertiary_clothroll_2": 20
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_fbo_2_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_backpack_fbo_2_rare_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_backpack_fbo_epic",
      "stat_curves": {
        "max_durability": {
          "default": 100
        },
        "resistance": {
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
      "image_key": "e4e2e94e83f451dd8790bfdecce31f60e94a41dd33c591c0993133930cd0f7db",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "无名英雄背包",
        "name_en": "Nameless Hero Backpack",
        "description_zh": "定制，比简易的背包更加宽敞精美",
        "description_en": "Custom made, more spacious and fancy than simple backpacks",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "稀有",
        "search_text": "wls2_backpack_fbo_2_rare 无名英雄背包 nameless hero backpack 定制，比简易的背包更加宽敞精美 custom made, more spacious and fancy than simple backpacks backpack 背包 backpack backpack armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "inventory_size",
            "label": "背包容量",
            "value": 10,
            "unit": "格",
            "display": "10 格"
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
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": {
        "inventory_id": "wls2_backpack_5_slots",
        "shop_pack_description": "ui_offer_inventory_backpack_10_cells_label"
      },
      "backpack_id": "wls2_backpack_5",
      "bodypart": 15,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_5",
        "bodypart": 15,
        "description": "inventory_stack_view_wls2_backpack_indian_1_common_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_indian_1_common_full_description",
        "name": "inventory_stack_view_wls2_backpack_indian_1_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_backpack_indian_1_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary05/wls2_backpack_injun_1_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_indian_1_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_indian_1_common_description",
        "en": {
          "description": "Simple cloth bag for those who are at the beginning of the path to exploring nature",
          "full_description": "Simple cloth bag for those who are at the beginning of the path to exploring nature",
          "name": "Apprentice bag"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_indian_1_common_full_description",
        "name_key": "inventory_stack_view_wls2_backpack_indian_1_common_name",
        "zh": {
          "description": "简约的布包，适合刚开始探索自然之人。",
          "full_description": "简约的布包，适合刚开始探索自然之人。",
          "name": "学徒包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_1": 5,
            "wls2_resourse_secondary_rope_1": 5
          },
          "learn_exp": 800,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_cloth_1": 5,
                "wls2_resourse_secondary_rope_1": 5
              },
              "learn_exp": 800,
              "min_level": 1,
              "result": {
                "inventory_stack_id": "wls2_backpack_indian_1_common"
              },
              "type": "workbench"
            },
            "recipe_id": "wls2_backpack_indian_1_common_ab_ftue"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_cloth_1": 3,
                "wls2_resourse_secondary_rope_1": 3
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_indian_1_common"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_indian_1_common_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_backpack_injun_1_icon",
      "stat_curves": {
        "health_increment": {
          "1": 3,
          "2": 6,
          "3": 9,
          "4": 12,
          "5": 15,
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
        }
      },
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "image_key": "85507006c821f9b38610a1c27a22f1e17bc6cc77ca0049cecf6aa130cf2b9df7",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "学徒包",
        "name_en": "Apprentice bag",
        "description_zh": "简约的布包，适合刚开始探索自然之人。",
        "description_en": "Simple cloth bag for those who are at the beginning of the path to exploring nature",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "普通",
        "search_text": "wls2_backpack_indian_1_common 学徒包 apprentice bag 简约的布包，适合刚开始探索自然之人。 simple cloth bag for those who are at the beginning of the path to exploring nature backpack 背包 backpack backpack armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "inventory_size",
            "label": "背包容量",
            "value": 5,
            "unit": "格",
            "display": "5 格"
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
            "value": 3,
            "unit": "",
            "display": "+3"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "health_increment": 3
            },
            "display": {
              "health_increment": "+3"
            }
          },
          {
            "level": 2,
            "values": {
              "health_increment": 6
            },
            "display": {
              "health_increment": "+6"
            }
          },
          {
            "level": 3,
            "values": {
              "health_increment": 9
            },
            "display": {
              "health_increment": "+9"
            }
          },
          {
            "level": 4,
            "values": {
              "health_increment": 12
            },
            "display": {
              "health_increment": "+12"
            }
          },
          {
            "level": 5,
            "values": {
              "health_increment": 15
            },
            "display": {
              "health_increment": "+15"
            }
          },
          {
            "level": 6,
            "values": {
              "health_increment": 16
            },
            "display": {
              "health_increment": "+16"
            }
          }
        ],
        "columns": [
          {
            "key": "health_increment",
            "label": "生命加成",
            "unit": ""
          }
        ],
        "notes": [
          "生命加成：6 级起每级增加 1，最高 +1015。"
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
      "backpack": {
        "inventory_id": "wls2_backpack_10_slots",
        "shop_pack_description": "ui_offer_inventory_backpack_10_cells_label"
      },
      "backpack_id": "wls2_backpack_10",
      "bodypart": 16,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_10",
        "bodypart": 16,
        "description": "inventory_stack_view_wls2_backpack_indian_2_common_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_indian_2_common_full_description",
        "name": "inventory_stack_view_wls2_backpack_indian_2_common_name",
        "rarity": "common",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary05/wls2_backpack_injun_2_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_indian_2_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_indian_2_common_description",
        "en": {
          "description": "Larger bag with Indigenous patterns",
          "full_description": "Larger bag with Indigenous patterns",
          "name": "Follower bag"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_indian_2_common_full_description",
        "name_key": "inventory_stack_view_wls2_backpack_indian_2_common_name",
        "zh": {
          "description": "美洲原住民样式的大号包。",
          "full_description": "美洲原住民样式的大号包。",
          "name": "追随者包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_instruments_1": 12,
            "wls2_resourse_secondary_leather_1": 12,
            "wls2_resourse_tertiary_clothroll_2": 20
          },
          "learn_exp": 800,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_instruments_1": 6,
                "wls2_resourse_secondary_leather_1": 6,
                "wls2_resourse_tertiary_clothroll_2": 10
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_indian_2_common"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_indian_2_common_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_backpack_injun_2_icon",
      "stat_curves": {
        "health_increment": {
          "1": 5,
          "2": 10,
          "3": 15,
          "4": 20,
          "5": 25,
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
        }
      },
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "image_key": "0718f2bee85d343e8319b2803622d77980273a6bcaf05bcfe73c12741dd73fc8",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "追随者包",
        "name_en": "Follower bag",
        "description_zh": "美洲原住民样式的大号包。",
        "description_en": "Larger bag with Indigenous patterns",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "普通",
        "search_text": "wls2_backpack_indian_2_common 追随者包 follower bag 美洲原住民样式的大号包。 larger bag with indigenous patterns backpack 背包 backpack backpack armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "inventory_size",
            "label": "背包容量",
            "value": 10,
            "unit": "格",
            "display": "10 格"
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
            "value": 5,
            "unit": "",
            "display": "+5"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "health_increment": 5
            },
            "display": {
              "health_increment": "+5"
            }
          },
          {
            "level": 2,
            "values": {
              "health_increment": 10
            },
            "display": {
              "health_increment": "+10"
            }
          },
          {
            "level": 3,
            "values": {
              "health_increment": 15
            },
            "display": {
              "health_increment": "+15"
            }
          },
          {
            "level": 4,
            "values": {
              "health_increment": 20
            },
            "display": {
              "health_increment": "+20"
            }
          },
          {
            "level": 5,
            "values": {
              "health_increment": 25
            },
            "display": {
              "health_increment": "+25"
            }
          },
          {
            "level": 6,
            "values": {
              "health_increment": 26
            },
            "display": {
              "health_increment": "+26"
            }
          }
        ],
        "columns": [
          {
            "key": "health_increment",
            "label": "生命加成",
            "unit": ""
          }
        ],
        "notes": [
          "生命加成：6 级起每级增加 1，最高 +1025。"
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
      "backpack": {
        "inventory_id": "wls2_backpack_10_slots",
        "shop_pack_description": "ui_offer_inventory_backpack_10_cells_label"
      },
      "backpack_id": "wls2_backpack_10",
      "bodypart": 17,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_10",
        "bodypart": 17,
        "description": "inventory_stack_view_wls2_backpack_indian_2_uncommon_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_indian_2_uncommon_full_description",
        "name": "inventory_stack_view_wls2_backpack_indian_2_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary05/wls2_backpack_injun_upgrade_2_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_indian_2_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_indian_2_uncommon_description",
        "en": {
          "description": "Thick cloth bag for those who have learned to live in harmony with nature",
          "full_description": "Thick cloth bag for those who have learned to live in harmony with nature",
          "name": "Disciple bag"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_indian_2_uncommon_full_description",
        "name_key": "inventory_stack_view_wls2_backpack_indian_2_uncommon_name",
        "zh": {
          "description": "用厚布制成的包，适合那些已经学会了与大自然和谐相处之人。",
          "full_description": "用厚布制成的包，适合那些已经学会了与大自然和谐相处之人。",
          "name": "门徒包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_backpack_indian_2_common": 1,
            "wls2_resourse_fourfold_instruments_2": 8,
            "wls2_resourse_secondary_leather_1": 14,
            "wls2_resourse_tertiary_clothroll_2": 20
          },
          "learn_exp": 1600,
          "min_level": 1,
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_uncommon_desc"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_instruments_2": 4,
                "wls2_resourse_secondary_leather_1": 7,
                "wls2_resourse_tertiary_clothroll_2": 10
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_indian_2_uncommon"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_indian_2_uncommon_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_backpack_injun_upgrade_2_icon",
      "stat_curves": {
        "health_increment": {
          "1": 20,
          "2": 40,
          "3": 60,
          "4": 80,
          "5": 100,
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
        }
      },
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "image_key": "067857e18a0915c4f23b81bbf7e5abbbe5e47765298bb33c376c63e4e541fe3d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "门徒包",
        "name_en": "Disciple bag",
        "description_zh": "用厚布制成的包，适合那些已经学会了与大自然和谐相处之人。",
        "description_en": "Thick cloth bag for those who have learned to live in harmony with nature",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "优秀",
        "search_text": "wls2_backpack_indian_2_uncommon 门徒包 disciple bag 用厚布制成的包，适合那些已经学会了与大自然和谐相处之人。 thick cloth bag for those who have learned to live in harmony with nature backpack 背包 backpack backpack armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "inventory_size",
            "label": "背包容量",
            "value": 10,
            "unit": "格",
            "display": "10 格"
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
            "value": 20,
            "unit": "",
            "display": "+20"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "health_increment": 20
            },
            "display": {
              "health_increment": "+20"
            }
          },
          {
            "level": 2,
            "values": {
              "health_increment": 40
            },
            "display": {
              "health_increment": "+40"
            }
          },
          {
            "level": 3,
            "values": {
              "health_increment": 60
            },
            "display": {
              "health_increment": "+60"
            }
          },
          {
            "level": 4,
            "values": {
              "health_increment": 80
            },
            "display": {
              "health_increment": "+80"
            }
          },
          {
            "level": 5,
            "values": {
              "health_increment": 100
            },
            "display": {
              "health_increment": "+100"
            }
          },
          {
            "level": 6,
            "values": {
              "health_increment": 101
            },
            "display": {
              "health_increment": "+101"
            }
          }
        ],
        "columns": [
          {
            "key": "health_increment",
            "label": "生命加成",
            "unit": ""
          }
        ],
        "notes": [
          "生命加成：6 级起每级增加 1，最高 +1100。"
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
      "backpack": {
        "inventory_id": "wls2_backpack_15_slots",
        "shop_pack_description": "ui_offer_inventory_backpack_10_cells_label"
      },
      "backpack_id": "wls2_backpack_15",
      "bodypart": 18,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15",
        "bodypart": 18,
        "description": "inventory_stack_view_wls2_backpack_indian_3_common_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_indian_3_common_full_description",
        "name": "inventory_stack_view_wls2_backpack_indian_3_common_name",
        "rarity": "common",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary05/wls2_backpack_injun_3_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_indian_3_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_indian_3_common_description",
        "en": {
          "description": "Simple yet capacious bag for herbs, berries, and other wild foods",
          "full_description": "Simple yet capacious bag for herbs, berries, and other wild foods",
          "name": "Herbalist bag"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_indian_3_common_full_description",
        "name_key": "inventory_stack_view_wls2_backpack_indian_3_common_name",
        "zh": {
          "description": "简约但又很宽敞的包，可以容纳草本植物、浆果和其他野生食物。",
          "full_description": "简约但又很宽敞的包，可以容纳草本植物、浆果和其他野生食物。",
          "name": "草药师包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_instruments_2": 20,
            "wls2_resourse_secondary_leather_2": 10,
            "wls2_resourse_tertiary_clothroll_3": 20
          },
          "learn_exp": 800,
          "min_level": 0,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_instruments_2": 10,
                "wls2_resourse_secondary_leather_2": 5,
                "wls2_resourse_tertiary_clothroll_3": 10
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_indian_3_common"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_indian_3_common_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_backpack_injun_3_icon",
      "stat_curves": {
        "health_increment": {
          "1": 8,
          "2": 16,
          "3": 24,
          "4": 32,
          "5": 40,
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
        }
      },
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "image_key": "3ec4d36e4dbb37c148f93a1fb099c400263cf507e1be5209fd9976acf707c1a7",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "草药师包",
        "name_en": "Herbalist bag",
        "description_zh": "简约但又很宽敞的包，可以容纳草本植物、浆果和其他野生食物。",
        "description_en": "Simple yet capacious bag for herbs, berries, and other wild foods",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "普通",
        "search_text": "wls2_backpack_indian_3_common 草药师包 herbalist bag 简约但又很宽敞的包，可以容纳草本植物、浆果和其他野生食物。 simple yet capacious bag for herbs, berries, and other wild foods backpack 背包 backpack backpack armor_storage"
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
            "value": 8,
            "unit": "",
            "display": "+8"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "health_increment": 8
            },
            "display": {
              "health_increment": "+8"
            }
          },
          {
            "level": 2,
            "values": {
              "health_increment": 16
            },
            "display": {
              "health_increment": "+16"
            }
          },
          {
            "level": 3,
            "values": {
              "health_increment": 24
            },
            "display": {
              "health_increment": "+24"
            }
          },
          {
            "level": 4,
            "values": {
              "health_increment": 32
            },
            "display": {
              "health_increment": "+32"
            }
          },
          {
            "level": 5,
            "values": {
              "health_increment": 40
            },
            "display": {
              "health_increment": "+40"
            }
          },
          {
            "level": 6,
            "values": {
              "health_increment": 41
            },
            "display": {
              "health_increment": "+41"
            }
          }
        ],
        "columns": [
          {
            "key": "health_increment",
            "label": "生命加成",
            "unit": ""
          }
        ],
        "notes": [
          "生命加成：6 级起每级增加 1，最高 +1040。"
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
      "backpack": {
        "inventory_id": "wls2_backpack_15_slots",
        "second_quick_cell_enabled": true,
        "shop_pack_description": "ui_offer_inventory_backpack_15_cells_label"
      },
      "backpack_id": "wls2_backpack_15_quick",
      "bodypart": 19,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15_quick",
        "bodypart": 19,
        "description": "inventory_stack_view_wls2_backpack_indian_3_rare_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_indian_3_rare_full_description",
        "name": "inventory_stack_view_wls2_backpack_indian_3_rare_name",
        "rarity": "rare",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary05/wls2_backpack_injun_rare_3_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_indian_3_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_indian_3_rare_description",
        "en": {
          "description": "Decorated with special ornaments to show great status of its owner in the tribe",
          "full_description": "Decorated with special ornaments to show great status of its owner in the tribe",
          "name": "Healer backpack"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_indian_3_rare_full_description",
        "name_key": "inventory_stack_view_wls2_backpack_indian_3_rare_name",
        "zh": {
          "description": "装饰着特殊的饰物，彰显其主人在部落中的重要地位。",
          "full_description": "装饰着特殊的饰物，彰显其主人在部落中的重要地位。",
          "name": "治疗者背包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_backpack_indian_3_uncommon": 1,
            "wls2_resourse_fourfold_instruments_3": 20,
            "wls2_resourse_fourfold_nails_3": 20,
            "wls2_resourse_secondary_leather_3": 20
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
              "ingredients": {
                "wls2_resourse_fourfold_instruments_3": 10,
                "wls2_resourse_fourfold_nails_3": 10,
                "wls2_resourse_secondary_leather_3": 10
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_indian_3_rare"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_indian_3_rare_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.9,
            "level_max": 70,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_indian_3_rare",
            "transaction_id": "transaction_iap_wls_10_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
            "durability_factor": 0.9,
            "level_min": 71,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_indian_3_rare",
            "transaction_id": "transaction_iap_wls_8_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_backpack_injun_rare_3_icon",
      "stat_curves": {
        "health_increment": {
          "1": 60,
          "2": 120,
          "3": 180,
          "4": 240,
          "5": 300,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
        },
        "wisdom": {
          "1": 3,
          "2": 6,
          "3": 9,
          "4": 12,
          "5": 15,
          "per_level_after_max": 1
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
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "5dc31aa820aa345b1f4a4c3ae2ac3e6b22fa5818d610014f136e3e786734de53",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "治疗者背包",
        "name_en": "Healer backpack",
        "description_zh": "装饰着特殊的饰物，彰显其主人在部落中的重要地位。",
        "description_en": "Decorated with special ornaments to show great status of its owner in the tribe",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "稀有",
        "search_text": "wls2_backpack_indian_3_rare 治疗者背包 healer backpack 装饰着特殊的饰物，彰显其主人在部落中的重要地位。 decorated with special ornaments to show great status of its owner in the tribe backpack 背包 backpack backpack armor_storage"
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
            "value": 60,
            "unit": "",
            "display": "+60"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": 3,
            "unit": "",
            "display": "+3"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "health_increment": 60,
              "wisdom": 3
            },
            "display": {
              "health_increment": "+60",
              "wisdom": "+3"
            }
          },
          {
            "level": 2,
            "values": {
              "health_increment": 120,
              "wisdom": 6
            },
            "display": {
              "health_increment": "+120",
              "wisdom": "+6"
            }
          },
          {
            "level": 3,
            "values": {
              "health_increment": 180,
              "wisdom": 9
            },
            "display": {
              "health_increment": "+180",
              "wisdom": "+9"
            }
          },
          {
            "level": 4,
            "values": {
              "health_increment": 240,
              "wisdom": 12
            },
            "display": {
              "health_increment": "+240",
              "wisdom": "+12"
            }
          },
          {
            "level": 5,
            "values": {
              "health_increment": 300,
              "wisdom": 15
            },
            "display": {
              "health_increment": "+300",
              "wisdom": "+15"
            }
          },
          {
            "level": 6,
            "values": {
              "health_increment": 301,
              "wisdom": 16
            },
            "display": {
              "health_increment": "+301",
              "wisdom": "+16"
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
            "key": "wisdom",
            "label": "精神",
            "unit": ""
          }
        ],
        "notes": [
          "生命加成：6 级起每级增加 1，最高 +1300。",
          "精神：6 级起每级增加 1，最高 +1015。"
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
      "backpack": {
        "inventory_id": "wls2_backpack_15_slots",
        "shop_pack_description": "ui_offer_inventory_backpack_10_cells_label"
      },
      "backpack_id": "wls2_backpack_15",
      "bodypart": 20,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15",
        "bodypart": 20,
        "description": "inventory_stack_view_wls2_backpack_indian_3_uncommon_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_indian_3_uncommon_full_description",
        "name": "inventory_stack_view_wls2_backpack_indian_3_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary05/wls2_backpack_injun_upgrade_3_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_indian_3_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_indian_3_uncommon_description",
        "en": {
          "description": "Tanned leather makes the bag solid enough for long trips",
          "full_description": "Tanned leather makes the bag solid enough for long trips",
          "name": "Pathfinder bag"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_indian_3_uncommon_full_description",
        "name_key": "inventory_stack_view_wls2_backpack_indian_3_uncommon_name",
        "zh": {
          "description": "鞣制皮革使这个包十分结实，很适合长途旅行。",
          "full_description": "鞣制皮革使这个包十分结实，很适合长途旅行。",
          "name": "探路者包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_backpack_indian_3_common": 1,
            "wls2_resourse_fourfold_instruments_3": 20,
            "wls2_resourse_secondary_leather_2": 20,
            "wls2_resourse_tertiary_clothroll_3": 20
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
              "ingredients": {
                "wls2_resourse_fourfold_instruments_3": 10,
                "wls2_resourse_secondary_leather_2": 10,
                "wls2_resourse_tertiary_clothroll_3": 10
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_indian_3_uncommon"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_indian_3_uncommon_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_5_a",
            "durability_factor": 0.9,
            "level_max": 70,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_indian_3_uncommon",
            "transaction_id": "transaction_iap_wls_7_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_3_a",
            "durability_factor": 0.9,
            "level_max": 100,
            "level_min": 71,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_indian_3_uncommon",
            "transaction_id": "transaction_iap_wls_4_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_backpack_injun_upgrade_3_icon",
      "stat_curves": {
        "health_increment": {
          "1": 30,
          "2": 60,
          "3": 90,
          "4": 120,
          "5": 150,
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
        }
      },
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "d085fc46ee2cedaf0df2ccbaa7388a1e9a3bc2a661c37adf8a6a0868af81e42c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "探路者包",
        "name_en": "Pathfinder bag",
        "description_zh": "鞣制皮革使这个包十分结实，很适合长途旅行。",
        "description_en": "Tanned leather makes the bag solid enough for long trips",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "优秀",
        "search_text": "wls2_backpack_indian_3_uncommon 探路者包 pathfinder bag 鞣制皮革使这个包十分结实，很适合长途旅行。 tanned leather makes the bag solid enough for long trips backpack 背包 backpack backpack armor_storage"
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
            "value": 30,
            "unit": "",
            "display": "+30"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "health_increment": 30
            },
            "display": {
              "health_increment": "+30"
            }
          },
          {
            "level": 2,
            "values": {
              "health_increment": 60
            },
            "display": {
              "health_increment": "+60"
            }
          },
          {
            "level": 3,
            "values": {
              "health_increment": 90
            },
            "display": {
              "health_increment": "+90"
            }
          },
          {
            "level": 4,
            "values": {
              "health_increment": 120
            },
            "display": {
              "health_increment": "+120"
            }
          },
          {
            "level": 5,
            "values": {
              "health_increment": 150
            },
            "display": {
              "health_increment": "+150"
            }
          },
          {
            "level": 6,
            "values": {
              "health_increment": 151
            },
            "display": {
              "health_increment": "+151"
            }
          }
        ],
        "columns": [
          {
            "key": "health_increment",
            "label": "生命加成",
            "unit": ""
          }
        ],
        "notes": [
          "生命加成：6 级起每级增加 1，最高 +1150。"
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
      "backpack": {
        "inventory_id": "wls2_backpack_15_slots",
        "second_quick_cell_enabled": true,
        "shop_pack_description": "ui_offer_inventory_backpack_15_cells_label"
      },
      "backpack_id": "wls2_backpack_15_quick",
      "bodypart": 21,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15_quick",
        "bodypart": 21,
        "description": "inventory_stack_view_wls2_backpack_indian_4_rare_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_indian_4_rare_full_description",
        "name": "inventory_stack_view_wls2_backpack_indian_4_rare_name",
        "rarity": "rare",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary05/wls2_backpack_injun_rare_4_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_indian_4_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_indian_4_rare_description",
        "en": {
          "description": "Durable backpack for one who is always ready to stand up for the tribe and for nature",
          "full_description": "Durable backpack for one who is always ready to stand up for the tribe and for nature",
          "name": "Warrior backpack"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_indian_4_rare_full_description",
        "name_key": "inventory_stack_view_wls2_backpack_indian_4_rare_name",
        "zh": {
          "description": "耐用的背包，适合随时准备保卫部落和大自然之人。",
          "full_description": "耐用的背包，适合随时准备保卫部落和大自然之人。",
          "name": "战士背包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_backpack_indian_4_uncommon": 1,
            "wls2_resourse_fourfold_instruments_4": 20,
            "wls2_resourse_fourfold_nails_4": 20,
            "wls2_resourse_secondary_leather_4": 20
          },
          "learn_exp": 3200,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_20_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_instruments_4": 10,
                "wls2_resourse_fourfold_nails_4": 10,
                "wls2_resourse_secondary_leather_4": 10
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_indian_4_rare"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_indian_4_rare_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_12_a",
            "durability_factor": 0.9,
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_indian_4_rare",
            "transaction_id": "transaction_iap_wls_15_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.9,
            "level_min": 91,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_indian_4_rare",
            "transaction_id": "transaction_iap_wls_10_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_backpack_injun_rare_4_icon",
      "stat_curves": {
        "health_increment": {
          "1": 80,
          "2": 160,
          "3": 240,
          "4": 320,
          "5": 400,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
        },
        "move_speed_modifier": {
          "1": 0.05,
          "2": 0.05,
          "3": 0.05,
          "4": 0.05,
          "5": 0.05
        },
        "wisdom": {
          "1": 4,
          "2": 8,
          "3": 12,
          "4": 16,
          "5": 20,
          "per_level_after_max": 1
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
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "be8865b5e0fbc985c681fa44a820dbb1c9ad446e77c992728c0a7464333b0ac6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "战士背包",
        "name_en": "Warrior backpack",
        "description_zh": "耐用的背包，适合随时准备保卫部落和大自然之人。",
        "description_en": "Durable backpack for one who is always ready to stand up for the tribe and for nature",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "稀有",
        "search_text": "wls2_backpack_indian_4_rare 战士背包 warrior backpack 耐用的背包，适合随时准备保卫部落和大自然之人。 durable backpack for one who is always ready to stand up for the tribe and for nature backpack 背包 backpack backpack armor_storage"
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
            "value": 80,
            "unit": "",
            "display": "+80"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": 4,
            "unit": "",
            "display": "+4"
          }
        ],
        "fixed": [
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.05,
            "unit": "%",
            "display": "+5%"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "health_increment": 80,
              "wisdom": 4
            },
            "display": {
              "health_increment": "+80",
              "wisdom": "+4"
            }
          },
          {
            "level": 2,
            "values": {
              "health_increment": 160,
              "wisdom": 8
            },
            "display": {
              "health_increment": "+160",
              "wisdom": "+8"
            }
          },
          {
            "level": 3,
            "values": {
              "health_increment": 240,
              "wisdom": 12
            },
            "display": {
              "health_increment": "+240",
              "wisdom": "+12"
            }
          },
          {
            "level": 4,
            "values": {
              "health_increment": 320,
              "wisdom": 16
            },
            "display": {
              "health_increment": "+320",
              "wisdom": "+16"
            }
          },
          {
            "level": 5,
            "values": {
              "health_increment": 400,
              "wisdom": 20
            },
            "display": {
              "health_increment": "+400",
              "wisdom": "+20"
            }
          },
          {
            "level": 6,
            "values": {
              "health_increment": 401,
              "wisdom": 21
            },
            "display": {
              "health_increment": "+401",
              "wisdom": "+21"
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
            "key": "wisdom",
            "label": "精神",
            "unit": ""
          }
        ],
        "notes": [
          "生命加成：6 级起每级增加 1，最高 +1400。",
          "精神：6 级起每级增加 1，最高 +1020。"
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
      "backpack": {
        "inventory_id": "wls2_backpack_15_slots",
        "second_quick_cell_enabled": true,
        "shop_pack_description": "ui_offer_inventory_backpack_15_cells_label"
      },
      "backpack_id": "wls2_backpack_15_quick",
      "bodypart": 22,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15_quick",
        "bodypart": 22,
        "description": "inventory_stack_view_wls2_backpack_indian_4_uncommon_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_indian_4_uncommon_full_description",
        "name": "inventory_stack_view_wls2_backpack_indian_4_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary05/wls2_backpack_injun_upgrade_4_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_indian_4_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_indian_4_uncommon_description",
        "en": {
          "description": "Solid backpack, stitched with a tribal symbol",
          "full_description": "Solid backpack, stitched with a tribal symbol",
          "name": "Hunter backpack"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_indian_4_uncommon_full_description",
        "name_key": "inventory_stack_view_wls2_backpack_indian_4_uncommon_name",
        "zh": {
          "description": "结实的背包，带有一个部落符号。",
          "full_description": "结实的背包，带有一个部落符号。",
          "name": "猎人背包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_backpack_indian_3_uncommon": 1,
            "wls2_resourse_fourfold_instruments_4": 8,
            "wls2_resourse_secondary_leather_4": 20,
            "wls2_resourse_tertiary_clothroll_4": 20
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
              "ingredients": {
                "wls2_resourse_fourfold_instruments_4": 4,
                "wls2_resourse_secondary_leather_4": 10,
                "wls2_resourse_tertiary_clothroll_4": 10
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_indian_4_uncommon"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_indian_4_uncommon_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_10_a",
            "durability_factor": 0.9,
            "level_max": 90,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_indian_4_uncommon",
            "transaction_id": "transaction_iap_wls_12_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_4_a",
            "durability_factor": 0.9,
            "level_min": 91,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_indian_4_uncommon",
            "transaction_id": "transaction_iap_wls_5_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_backpack_injun_upgrade_4_icon",
      "stat_curves": {
        "health_increment": {
          "1": 40,
          "2": 80,
          "3": 120,
          "4": 160,
          "5": 200,
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
        }
      },
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "cedd2f4c84b67e26921213348fa26199dbda43abd0a2292363893cd33f0603f9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "猎人背包",
        "name_en": "Hunter backpack",
        "description_zh": "结实的背包，带有一个部落符号。",
        "description_en": "Solid backpack, stitched with a tribal symbol",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "优秀",
        "search_text": "wls2_backpack_indian_4_uncommon 猎人背包 hunter backpack 结实的背包，带有一个部落符号。 solid backpack, stitched with a tribal symbol backpack 背包 backpack backpack armor_storage"
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
            "value": 40,
            "unit": "",
            "display": "+40"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "health_increment": 40
            },
            "display": {
              "health_increment": "+40"
            }
          },
          {
            "level": 2,
            "values": {
              "health_increment": 80
            },
            "display": {
              "health_increment": "+80"
            }
          },
          {
            "level": 3,
            "values": {
              "health_increment": 120
            },
            "display": {
              "health_increment": "+120"
            }
          },
          {
            "level": 4,
            "values": {
              "health_increment": 160
            },
            "display": {
              "health_increment": "+160"
            }
          },
          {
            "level": 5,
            "values": {
              "health_increment": 200
            },
            "display": {
              "health_increment": "+200"
            }
          },
          {
            "level": 6,
            "values": {
              "health_increment": 201
            },
            "display": {
              "health_increment": "+201"
            }
          }
        ],
        "columns": [
          {
            "key": "health_increment",
            "label": "生命加成",
            "unit": ""
          }
        ],
        "notes": [
          "生命加成：6 级起每级增加 1，最高 +1200。"
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
      "backpack": {
        "inventory_id": "wls2_backpack_15_slots",
        "second_quick_cell_enabled": true,
        "shop_pack_description": "ui_offer_inventory_backpack_15_cells_label"
      },
      "backpack_id": "wls2_backpack_15_quick",
      "bodypart": 23,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15_quick",
        "bodypart": 23,
        "description": "inventory_stack_view_wls2_backpack_indian_5_rare_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_indian_5_rare_full_description",
        "name": "inventory_stack_view_wls2_backpack_indian_5_rare_name",
        "rarity": "rare",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary05/wls2_backpack_injun_rare_5_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_indian_5_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_indian_5_rare_description",
        "en": {
          "description": "The symbols on the backpack mean strength, wisdom, and peace",
          "full_description": "The symbols on the backpack mean strength, wisdom, and peace",
          "name": "Chieftain backpack"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_indian_5_rare_full_description",
        "name_key": "inventory_stack_view_wls2_backpack_indian_5_rare_name",
        "zh": {
          "description": "背包上的符号代表力量、智慧以及和平。",
          "full_description": "背包上的符号代表力量、智慧以及和平。",
          "name": "酋长背包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_backpack_indian_4_rare": 1,
            "wls2_resourse_fourfold_instruments_5": 18,
            "wls2_resourse_secondary_leather_5": 20,
            "wls2_resourse_tertiary_clothroll_5": 20
          },
          "learn_exp": 3200,
          "min_level": 0,
          "transaction_id": "transaction_iap_wls_20_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_instruments_5": 9,
                "wls2_resourse_secondary_leather_5": 10,
                "wls2_resourse_tertiary_clothroll_5": 10
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_indian_5_rare"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_indian_5_rare_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_15_a",
            "durability_factor": 0.9,
            "level_max": 105,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_indian_5_rare",
            "transaction_id": "transaction_iap_wls_20_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_12_a",
            "durability_factor": 0.9,
            "level_min": 106,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_indian_5_rare",
            "transaction_id": "transaction_iap_wls_15_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_backpack_injun_rare_5_icon",
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
        "move_speed_modifier": {
          "1": 0.1,
          "2": 0.1,
          "3": 0.1,
          "4": 0.1,
          "5": 0.1
        },
        "wisdom": {
          "1": 5,
          "2": 10,
          "3": 15,
          "4": 20,
          "5": 25,
          "per_level_after_max": 1
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
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "f083e1512aa01770fc94e00b9120f2c7a0b2437594dafea98ff70301a59fc11d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "酋长背包",
        "name_en": "Chieftain backpack",
        "description_zh": "背包上的符号代表力量、智慧以及和平。",
        "description_en": "The symbols on the backpack mean strength, wisdom, and peace",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "稀有",
        "search_text": "wls2_backpack_indian_5_rare 酋长背包 chieftain backpack 背包上的符号代表力量、智慧以及和平。 the symbols on the backpack mean strength, wisdom, and peace backpack 背包 backpack backpack armor_storage"
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
            "key": "wisdom",
            "label": "精神",
            "value": 5,
            "unit": "",
            "display": "+5"
          }
        ],
        "fixed": [
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.1,
            "unit": "%",
            "display": "+10%"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "health_increment": 100,
              "wisdom": 5
            },
            "display": {
              "health_increment": "+100",
              "wisdom": "+5"
            }
          },
          {
            "level": 2,
            "values": {
              "health_increment": 200,
              "wisdom": 10
            },
            "display": {
              "health_increment": "+200",
              "wisdom": "+10"
            }
          },
          {
            "level": 3,
            "values": {
              "health_increment": 300,
              "wisdom": 15
            },
            "display": {
              "health_increment": "+300",
              "wisdom": "+15"
            }
          },
          {
            "level": 4,
            "values": {
              "health_increment": 400,
              "wisdom": 20
            },
            "display": {
              "health_increment": "+400",
              "wisdom": "+20"
            }
          },
          {
            "level": 5,
            "values": {
              "health_increment": 500,
              "wisdom": 25
            },
            "display": {
              "health_increment": "+500",
              "wisdom": "+25"
            }
          },
          {
            "level": 6,
            "values": {
              "health_increment": 501,
              "wisdom": 26
            },
            "display": {
              "health_increment": "+501",
              "wisdom": "+26"
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
            "key": "wisdom",
            "label": "精神",
            "unit": ""
          }
        ],
        "notes": [
          "生命加成：6 级起每级增加 1，最高 +1500。",
          "精神：6 级起每级增加 1，最高 +1025。"
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
      "bodypart": 31,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15_quick_all",
        "bodypart": 31,
        "description": "inventory_stack_view_wls2_backpack_indian_6_rare_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_indian_6_rare_description",
        "name": "inventory_stack_view_wls2_backpack_indian_6_rare_name",
        "rarity": "rare",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary08/wls2_backpack_injun_rare_6_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_indian_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_indian_6_rare_description",
        "en": {
          "description": "Crafted with native wisdom, this bag embraces the heart of boreal endurance",
          "full_description": "Crafted with native wisdom, this bag embraces the heart of boreal endurance",
          "name": "Denali spirit bag"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_indian_6_rare_description",
        "name_key": "inventory_stack_view_wls2_backpack_indian_6_rare_name",
        "zh": {
          "description": "用本土智慧精心打造，这个袋子拥抱着北方耐力的核心",
          "full_description": "用本土智慧精心打造，这个袋子拥抱着北方耐力的核心",
          "name": "德纳利精神袋"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_backpack_indian_5_rare": 1,
            "wls2_resourse_fourfold_instruments_6": 18,
            "wls2_resourse_secondary_cloth_6": 50,
            "wls2_resourse_secondary_leather_6": 20
          },
          "learn_exp": 3200,
          "min_level": 0,
          "required_electricity": 8,
          "transaction_id": "transaction_iap_wls_20_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_instruments_6": 10,
                "wls2_resourse_secondary_cloth_6": 25,
                "wls2_resourse_secondary_leather_6": 10
              },
              "required_electricity": 2,
              "result": {
                "inventory_stack_id": "wls2_backpack_indian_6_rare"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_indian_6_rare_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_15_a",
            "durability_factor": 0.9,
            "level_max": 120,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_indian_6_rare",
            "transaction_id": "transaction_iap_wls_20_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_12_a",
            "durability_factor": 0.9,
            "level_min": 121,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_indian_6_rare",
            "transaction_id": "transaction_iap_wls_15_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_backpack_injun_rare_6_icon",
      "stat_curves": {
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
        },
        "move_speed_modifier": {
          "1": 0.06,
          "2": 0.07,
          "3": 0.08,
          "4": 0.09,
          "5": 0.1
        },
        "pet_damage_modifier": {
          "1": 0.06,
          "2": 0.07,
          "3": 0.08,
          "4": 0.09,
          "5": 0.1
        },
        "pet_health_increment": {
          "1": 300,
          "2": 600,
          "3": 900,
          "4": 1200,
          "5": 1500,
          "per_level_after_max": 1
        },
        "wisdom": {
          "1": 5,
          "2": 10,
          "3": 15,
          "4": 20,
          "5": 25
        }
      },
      "stat_labels": {
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
        "pet_damage_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name": "ui_item_stats_pet_bonus_damage",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_percent_format"
          },
          "display_key": "ui_item_stats_pet_bonus_damage",
          "en": "Pet damage",
          "zh": "宠物伤害"
        },
        "pet_health_increment": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_pet_bonus_hp",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_pet_bonus_hp",
          "en": "Pet health",
          "zh": "宠物健康"
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
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "93813f95da9780663c517aa4c4a7f5c6f48712205a3648ca2d20deef82e7d723",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "德纳利精神袋",
        "name_en": "Denali spirit bag",
        "description_zh": "用本土智慧精心打造，这个袋子拥抱着北方耐力的核心",
        "description_en": "Crafted with native wisdom, this bag embraces the heart of boreal endurance",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "稀有",
        "search_text": "wls2_backpack_indian_6_rare 德纳利精神袋 denali spirit bag 用本土智慧精心打造，这个袋子拥抱着北方耐力的核心 crafted with native wisdom, this bag embraces the heart of boreal endurance backpack 背包 backpack backpack armor_storage"
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
            "key": "wisdom",
            "label": "精神",
            "value": 5,
            "unit": "",
            "display": "+5"
          },
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
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
              "move_speed_modifier": 0.06,
              "pet_damage_modifier": 0.06,
              "pet_health_increment": 300,
              "wisdom": 5
            },
            "display": {
              "move_speed_modifier": "+6%",
              "pet_damage_modifier": "+6%",
              "pet_health_increment": "+300",
              "wisdom": "+5"
            }
          },
          {
            "level": 2,
            "values": {
              "move_speed_modifier": 0.07,
              "pet_damage_modifier": 0.07,
              "pet_health_increment": 600,
              "wisdom": 10
            },
            "display": {
              "move_speed_modifier": "+7%",
              "pet_damage_modifier": "+7%",
              "pet_health_increment": "+600",
              "wisdom": "+10"
            }
          },
          {
            "level": 3,
            "values": {
              "move_speed_modifier": 0.08,
              "pet_damage_modifier": 0.08,
              "pet_health_increment": 900,
              "wisdom": 15
            },
            "display": {
              "move_speed_modifier": "+8%",
              "pet_damage_modifier": "+8%",
              "pet_health_increment": "+900",
              "wisdom": "+15"
            }
          },
          {
            "level": 4,
            "values": {
              "move_speed_modifier": 0.09,
              "pet_damage_modifier": 0.09,
              "pet_health_increment": 1200,
              "wisdom": 20
            },
            "display": {
              "move_speed_modifier": "+9%",
              "pet_damage_modifier": "+9%",
              "pet_health_increment": "+1200",
              "wisdom": "+20"
            }
          },
          {
            "level": 5,
            "values": {
              "move_speed_modifier": 0.1,
              "pet_damage_modifier": 0.1,
              "pet_health_increment": 1500,
              "wisdom": 25
            },
            "display": {
              "move_speed_modifier": "+10%",
              "pet_damage_modifier": "+10%",
              "pet_health_increment": "+1500",
              "wisdom": "+25"
            }
          },
          {
            "level": 6,
            "values": {
              "move_speed_modifier": 0.1,
              "pet_damage_modifier": 0.1,
              "pet_health_increment": 1501,
              "wisdom": 25
            },
            "display": {
              "move_speed_modifier": "+10%",
              "pet_damage_modifier": "+10%",
              "pet_health_increment": "+1501",
              "wisdom": "+25"
            }
          }
        ],
        "columns": [
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "unit": "%"
          },
          {
            "key": "pet_damage_modifier",
            "label": "宠物伤害加成",
            "unit": "%"
          },
          {
            "key": "pet_health_increment",
            "label": "宠物生命加成",
            "unit": ""
          },
          {
            "key": "wisdom",
            "label": "精神",
            "unit": ""
          }
        ],
        "notes": [
          "宠物生命加成：6 级起每级增加 1，最高 +2500。"
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
      "bodypart": 33,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15_quick_10_slots",
        "bodypart": 33,
        "description": "inventory_stack_view_wls2_backpack_indian_7_rare_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_indian_7_rare_description",
        "name": "inventory_stack_view_wls2_backpack_indian_7_rare_name",
        "rarity": "rare",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary10/wls2_backpack_injun_rare_7_icon",
        "tags": [
          "backpack",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_indian_7_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_indian_7_rare_description",
        "en": {
          "description": "Contains the mystic power of all the Rio Bravo territory!",
          "full_description": "Contains the mystic power of all the Rio Bravo territory!",
          "name": "Canyon spirit bag"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_indian_7_rare_description",
        "name_key": "inventory_stack_view_wls2_backpack_indian_7_rare_name",
        "zh": {
          "description": "包含所有里奥布拉沃领土的神秘力量！",
          "full_description": "包含所有里奥布拉沃领土的神秘力量！",
          "name": "峡谷 精神 包"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_backpack_indian_6_rare": 1,
            "wls2_resourse_fourfold_instruments_7": 18,
            "wls2_resourse_secondary_cloth_7": 50,
            "wls2_resourse_secondary_leather_7": 20
          },
          "learn_exp": 3200,
          "min_level": 0,
          "required_electricity": 16,
          "transaction_id": "transaction_iap_wls_20_a",
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_rare_desc"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_instruments_7": 10,
                "wls2_resourse_secondary_cloth_7": 25,
                "wls2_resourse_secondary_leather_7": 10
              },
              "required_electricity": 4,
              "result": {
                "inventory_stack_id": "wls2_backpack_indian_7_rare"
              },
              "type": "repair"
            },
            "recipe_id": "wls2_backpack_indian_7_rare_repair"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_15_a",
            "durability_factor": 0.9,
            "level_max": 124,
            "level_min": 115,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_indian_7_rare",
            "transaction_id": "transaction_iap_wls_20_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_12_a",
            "durability_factor": 0.9,
            "level_min": 125,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_indian_7_rare",
            "transaction_id": "transaction_iap_wls_15_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_backpack_injun_rare_7_icon",
      "stat_curves": {
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100
        },
        "move_speed_modifier": {
          "1": 0.06,
          "2": 0.07,
          "3": 0.08,
          "4": 0.09,
          "5": 0.1
        },
        "pet_damage_modifier": {
          "1": 0.06,
          "2": 0.07,
          "3": 0.08,
          "4": 0.09,
          "5": 0.1
        },
        "pet_health_increment": {
          "1": 300,
          "2": 600,
          "3": 900,
          "4": 1200,
          "5": 1500,
          "per_level_after_max": 1
        },
        "wisdom": {
          "1": 5,
          "2": 10,
          "3": 15,
          "4": 20,
          "5": 25
        }
      },
      "stat_labels": {
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
        "pet_damage_modifier": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_percent_format",
            "is_percent": true,
            "name": "ui_item_stats_pet_bonus_damage",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_percent_format"
          },
          "display_key": "ui_item_stats_pet_bonus_damage",
          "en": "Pet damage",
          "zh": "宠物伤害"
        },
        "pet_health_increment": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_pet_bonus_hp",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_pet_bonus_hp",
          "en": "Pet health",
          "zh": "宠物健康"
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
      "subcategory": "backpack",
      "tags": [
        "backpack",
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
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "30cf794b672b9a33106b7542437e507618890a99aa8f4b69ffb4f92058b44bee",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "峡谷 精神 包",
        "name_en": "Canyon spirit bag",
        "description_zh": "包含所有里奥布拉沃领土的神秘力量！",
        "description_en": "Contains the mystic power of all the Rio Bravo territory!",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "稀有",
        "search_text": "wls2_backpack_indian_7_rare 峡谷 精神 包 canyon spirit bag 包含所有里奥布拉沃领土的神秘力量！ contains the mystic power of all the rio bravo territory! backpack 背包 backpack backpack armor_storage"
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
            "key": "wisdom",
            "label": "精神",
            "value": 5,
            "unit": "",
            "display": "+5"
          },
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
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
              "move_speed_modifier": 0.06,
              "pet_damage_modifier": 0.06,
              "pet_health_increment": 300,
              "wisdom": 5
            },
            "display": {
              "move_speed_modifier": "+6%",
              "pet_damage_modifier": "+6%",
              "pet_health_increment": "+300",
              "wisdom": "+5"
            }
          },
          {
            "level": 2,
            "values": {
              "move_speed_modifier": 0.07,
              "pet_damage_modifier": 0.07,
              "pet_health_increment": 600,
              "wisdom": 10
            },
            "display": {
              "move_speed_modifier": "+7%",
              "pet_damage_modifier": "+7%",
              "pet_health_increment": "+600",
              "wisdom": "+10"
            }
          },
          {
            "level": 3,
            "values": {
              "move_speed_modifier": 0.08,
              "pet_damage_modifier": 0.08,
              "pet_health_increment": 900,
              "wisdom": 15
            },
            "display": {
              "move_speed_modifier": "+8%",
              "pet_damage_modifier": "+8%",
              "pet_health_increment": "+900",
              "wisdom": "+15"
            }
          },
          {
            "level": 4,
            "values": {
              "move_speed_modifier": 0.09,
              "pet_damage_modifier": 0.09,
              "pet_health_increment": 1200,
              "wisdom": 20
            },
            "display": {
              "move_speed_modifier": "+9%",
              "pet_damage_modifier": "+9%",
              "pet_health_increment": "+1200",
              "wisdom": "+20"
            }
          },
          {
            "level": 5,
            "values": {
              "move_speed_modifier": 0.1,
              "pet_damage_modifier": 0.1,
              "pet_health_increment": 1500,
              "wisdom": 25
            },
            "display": {
              "move_speed_modifier": "+10%",
              "pet_damage_modifier": "+10%",
              "pet_health_increment": "+1500",
              "wisdom": "+25"
            }
          },
          {
            "level": 6,
            "values": {
              "move_speed_modifier": 0.1,
              "pet_damage_modifier": 0.1,
              "pet_health_increment": 1501,
              "wisdom": 25
            },
            "display": {
              "move_speed_modifier": "+10%",
              "pet_damage_modifier": "+10%",
              "pet_health_increment": "+1501",
              "wisdom": "+25"
            }
          }
        ],
        "columns": [
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "unit": "%"
          },
          {
            "key": "pet_damage_modifier",
            "label": "宠物伤害加成",
            "unit": "%"
          },
          {
            "key": "pet_health_increment",
            "label": "宠物生命加成",
            "unit": ""
          },
          {
            "key": "wisdom",
            "label": "精神",
            "unit": ""
          }
        ],
        "notes": [
          "宠物生命加成：6 级起每级增加 1，最高 +2500。"
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
      "bodypart": 28,
      "category": "backpack",
      "gathering_tool": null,
      "inventory_stack": {
        "backpack_id": "wls2_backpack_15_quick",
        "bodypart": 28,
        "description": "inventory_stack_view_wls2_backpack_ws_day2022_rare_description",
        "equip_behaviour": {
          "type": "backpack"
        },
        "full_description": "inventory_stack_view_wls2_backpack_ws_day2022_rare_full_description",
        "name": "inventory_stack_view_wls2_backpack_ws_day2022_rare_name",
        "rarity": "rare",
        "sorting_group_id": "backpack",
        "sprite": "UI_WW_AlphaBinary06/wls2_backpack_ws_day2022",
        "tags": [
          "backpack",
          "armor_storage",
          "festive"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_backpack_ws_day2022",
      "localization": {
        "description_key": "inventory_stack_view_wls2_backpack_ws_day2022_rare_description",
        "en": {
          "description": "My Uncle Sam has the same!",
          "full_description": null,
          "name": "Patriot's Backpack"
        },
        "full_description_key": "inventory_stack_view_wls2_backpack_ws_day2022_rare_full_description",
        "name_key": "inventory_stack_view_wls2_backpack_ws_day2022_rare_name",
        "zh": {
          "description": "山姆叔叔也有一个这样的背包！",
          "full_description": null,
          "name": "爱国者背包"
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
                "wls2_resourse_fourfold_instruments_4": 20,
                "wls2_resourse_fourfold_nails_4": 20,
                "wls2_resourse_secondary_leather_4": 20
              },
              "result": {
                "inventory_stack_id": "wls2_backpack_ws_day2022"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_backpack_ws_day2022_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": [
          {
            "discounted_transaction_id": "transaction_iap_wls_7_a",
            "durability_factor": 0.9,
            "level_max": 80,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_ws_day2022",
            "transaction_id": "transaction_iap_wls_10_a"
          },
          {
            "discounted_transaction_id": "transaction_iap_wls_6_a",
            "durability_factor": 0.9,
            "level_min": 81,
            "payer_quantiles": [
              "q50",
              "q70",
              "q80",
              "q95",
              "q98"
            ],
            "stack_id": "wls2_backpack_ws_day2022",
            "transaction_id": "transaction_iap_wls_8_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary06/wls2_backpack_ws_day2022",
      "stat_curves": {
        "dexterity": {
          "1": 4,
          "2": 4,
          "3": 4,
          "4": 4,
          "5": 5,
          "6": 6
        },
        "evasion": {
          "1": 0.04,
          "2": 0.04,
          "3": 0.04,
          "4": 0.04,
          "5": 0.05,
          "6": 0.06
        },
        "max_durability": {
          "1": 100,
          "2": 100,
          "3": 100,
          "4": 100,
          "5": 100,
          "6": 100
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
      "image_key": "4d9b40388d32b1ace6c64965b5fedf3905ec49887986d94e46bd46526b05780d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "爱国者背包",
        "name_en": "Patriot's Backpack",
        "description_zh": "山姆叔叔也有一个这样的背包！",
        "description_en": "My Uncle Sam has the same!",
        "category_zh": "背包",
        "subcategory": "backpack",
        "rarity_zh": "稀有",
        "search_text": "wls2_backpack_ws_day2022 爱国者背包 patriot's backpack 山姆叔叔也有一个这样的背包！ my uncle sam has the same! backpack 背包 backpack backpack armor_storage festive"
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
            "key": "dexterity",
            "label": "攻速加成",
            "value": 4,
            "unit": "",
            "display": "+4"
          },
          {
            "key": "evasion",
            "label": "闪避率",
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
              "dexterity": 4,
              "evasion": 0.04
            },
            "display": {
              "dexterity": "+4",
              "evasion": "+4%"
            }
          },
          {
            "level": 2,
            "values": {
              "dexterity": 4,
              "evasion": 0.04
            },
            "display": {
              "dexterity": "+4",
              "evasion": "+4%"
            }
          },
          {
            "level": 3,
            "values": {
              "dexterity": 4,
              "evasion": 0.04
            },
            "display": {
              "dexterity": "+4",
              "evasion": "+4%"
            }
          },
          {
            "level": 4,
            "values": {
              "dexterity": 4,
              "evasion": 0.04
            },
            "display": {
              "dexterity": "+4",
              "evasion": "+4%"
            }
          },
          {
            "level": 5,
            "values": {
              "dexterity": 5,
              "evasion": 0.05
            },
            "display": {
              "dexterity": "+5",
              "evasion": "+5%"
            }
          },
          {
            "level": 6,
            "values": {
              "dexterity": 6,
              "evasion": 0.06
            },
            "display": {
              "dexterity": "+6",
              "evasion": "+6%"
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
            "key": "evasion",
            "label": "闪避率",
            "unit": "%"
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
      "backpack": null,
      "backpack_id": null,
      "bodypart": 41,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 41,
        "description": "inventory_stack_view_armor_thanksgiving_hat_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_armor_thanksgiving_hat_description",
        "name": "inventory_stack_view_armor_thanksgiving_hat_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_head_5_common_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary07/wls2_battlepass1_armor_head_icon",
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
      "item_id": "wls2_battlepass1_armor_head_2_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_armor_thanksgiving_hat_description",
        "en": {
          "description": "Made of durable material according to blueprints of the best Wild West weaver. Everyone will be jealous!",
          "full_description": "Made of durable material according to blueprints of the best Wild West weaver. Everyone will be jealous!",
          "name": "Pilgrim hat"
        },
        "full_description_key": "inventory_stack_view_armor_thanksgiving_hat_description",
        "name_key": "inventory_stack_view_armor_thanksgiving_hat_name",
        "zh": {
          "description": "由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！",
          "full_description": "由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！",
          "name": "旅者帽"
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
                "wls2_resourse_fourfold_nails_2": 1,
                "wls2_resourse_secondary_cloth_2": 2,
                "wls2_resourse_secondary_leather_2": 3
              },
              "result": {
                "inventory_stack_id": "wls2_battlepass1_armor_head_2_uncommon"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_battlepass1_armor_head_2_uncommon_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary07/wls2_battlepass1_armor_head_icon",
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
      "image_key": "c074c2ddbfaf734dcc8c7191199c06854691d09507bf0ed63d9abcccb56ef4a3",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "旅者帽",
        "name_en": "Pilgrim hat",
        "description_zh": "由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！",
        "description_en": "Made of durable material according to blueprints of the best Wild West weaver. Everyone will be jealous!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "优秀",
        "search_text": "wls2_battlepass1_armor_head_2_uncommon 旅者帽 pilgrim hat 由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！ made of durable material according to blueprints of the best wild west weaver. everyone will be jealous! armor 护甲 head head armor armor_storage festive"
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
      "bodypart": 41,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 41,
        "description": "inventory_stack_view_armor_thanksgiving_hat_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_armor_thanksgiving_hat_description",
        "name": "inventory_stack_view_armor_thanksgiving_hat_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_head_5_common_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary07/wls2_battlepass1_armor_head_icon",
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
      "item_id": "wls2_battlepass1_armor_head_3_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_armor_thanksgiving_hat_description",
        "en": {
          "description": "Made of durable material according to blueprints of the best Wild West weaver. Everyone will be jealous!",
          "full_description": "Made of durable material according to blueprints of the best Wild West weaver. Everyone will be jealous!",
          "name": "Pilgrim hat"
        },
        "full_description_key": "inventory_stack_view_armor_thanksgiving_hat_description",
        "name_key": "inventory_stack_view_armor_thanksgiving_hat_name",
        "zh": {
          "description": "由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！",
          "full_description": "由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！",
          "name": "旅者帽"
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
                "wls2_resourse_fourfold_nails_3": 2,
                "wls2_resourse_secondary_cloth_3": 2,
                "wls2_resourse_secondary_leather_3": 3
              },
              "result": {
                "inventory_stack_id": "wls2_battlepass1_armor_head_3_uncommon"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_battlepass1_armor_head_3_uncommon_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary07/wls2_battlepass1_armor_head_icon",
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
          "1": 964,
          "2": 1060,
          "3": 1157,
          "4": 1252,
          "5": 1349
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
      "image_key": "c074c2ddbfaf734dcc8c7191199c06854691d09507bf0ed63d9abcccb56ef4a3",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "旅者帽",
        "name_en": "Pilgrim hat",
        "description_zh": "由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！",
        "description_en": "Made of durable material according to blueprints of the best Wild West weaver. Everyone will be jealous!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "优秀",
        "search_text": "wls2_battlepass1_armor_head_3_uncommon 旅者帽 pilgrim hat 由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！ made of durable material according to blueprints of the best wild west weaver. everyone will be jealous! armor 护甲 head head armor armor_storage festive"
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
              "max_durability": 964
            },
            "display": {
              "armor": "38",
              "dexterity": "+1",
              "max_durability": "964"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 41,
              "dexterity": 1,
              "max_durability": 1060
            },
            "display": {
              "armor": "41",
              "dexterity": "+1",
              "max_durability": "1060"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 45,
              "dexterity": 1,
              "max_durability": 1157
            },
            "display": {
              "armor": "45",
              "dexterity": "+1",
              "max_durability": "1157"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 49,
              "dexterity": 2,
              "max_durability": 1252
            },
            "display": {
              "armor": "49",
              "dexterity": "+2",
              "max_durability": "1252"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 53,
              "dexterity": 3,
              "max_durability": 1349
            },
            "display": {
              "armor": "53",
              "dexterity": "+3",
              "max_durability": "1349"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 54,
              "dexterity": 3,
              "max_durability": 1349
            },
            "display": {
              "armor": "54",
              "dexterity": "+3",
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
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 41,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 41,
        "description": "inventory_stack_view_armor_thanksgiving_hat_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_armor_thanksgiving_hat_description",
        "name": "inventory_stack_view_armor_thanksgiving_hat_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_head_5_common_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary07/wls2_battlepass1_armor_head_icon",
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
      "item_id": "wls2_battlepass1_armor_head_4_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_armor_thanksgiving_hat_description",
        "en": {
          "description": "Made of durable material according to blueprints of the best Wild West weaver. Everyone will be jealous!",
          "full_description": "Made of durable material according to blueprints of the best Wild West weaver. Everyone will be jealous!",
          "name": "Pilgrim hat"
        },
        "full_description_key": "inventory_stack_view_armor_thanksgiving_hat_description",
        "name_key": "inventory_stack_view_armor_thanksgiving_hat_name",
        "zh": {
          "description": "由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！",
          "full_description": "由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！",
          "name": "旅者帽"
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
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_cloth_4": 2,
                "wls2_resourse_secondary_leather_4": 3
              },
              "result": {
                "inventory_stack_id": "wls2_battlepass1_armor_head_4_uncommon"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_battlepass1_armor_head_4_uncommon_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary07/wls2_battlepass1_armor_head_icon",
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
          "1": 2366,
          "2": 2602,
          "3": 2839,
          "4": 3075,
          "5": 3312
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
      "image_key": "c074c2ddbfaf734dcc8c7191199c06854691d09507bf0ed63d9abcccb56ef4a3",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "旅者帽",
        "name_en": "Pilgrim hat",
        "description_zh": "由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！",
        "description_en": "Made of durable material according to blueprints of the best Wild West weaver. Everyone will be jealous!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "优秀",
        "search_text": "wls2_battlepass1_armor_head_4_uncommon 旅者帽 pilgrim hat 由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！ made of durable material according to blueprints of the best wild west weaver. everyone will be jealous! armor 护甲 head head armor armor_storage festive"
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
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 75,
              "dexterity": 1,
              "max_durability": 2366
            },
            "display": {
              "armor": "75",
              "dexterity": "+1",
              "max_durability": "2366"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 83,
              "dexterity": 1,
              "max_durability": 2602
            },
            "display": {
              "armor": "83",
              "dexterity": "+1",
              "max_durability": "2602"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 90,
              "dexterity": 1,
              "max_durability": 2839
            },
            "display": {
              "armor": "90",
              "dexterity": "+1",
              "max_durability": "2839"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 98,
              "dexterity": 2,
              "max_durability": 3075
            },
            "display": {
              "armor": "98",
              "dexterity": "+2",
              "max_durability": "3075"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 105,
              "dexterity": 3,
              "max_durability": 3312
            },
            "display": {
              "armor": "105",
              "dexterity": "+3",
              "max_durability": "3312"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 106,
              "dexterity": 3,
              "max_durability": 3312
            },
            "display": {
              "armor": "106",
              "dexterity": "+3",
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
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 41,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 41,
        "description": "inventory_stack_view_armor_thanksgiving_hat_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_armor_thanksgiving_hat_description",
        "name": "inventory_stack_view_armor_thanksgiving_hat_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_head_5_common_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary07/wls2_battlepass1_armor_head_icon",
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
      "item_id": "wls2_battlepass1_armor_head_5_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_armor_thanksgiving_hat_description",
        "en": {
          "description": "Made of durable material according to blueprints of the best Wild West weaver. Everyone will be jealous!",
          "full_description": "Made of durable material according to blueprints of the best Wild West weaver. Everyone will be jealous!",
          "name": "Pilgrim hat"
        },
        "full_description_key": "inventory_stack_view_armor_thanksgiving_hat_description",
        "name_key": "inventory_stack_view_armor_thanksgiving_hat_name",
        "zh": {
          "description": "由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！",
          "full_description": "由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！",
          "name": "旅者帽"
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
                "wls2_resourse_fourfold_nails_4": 3,
                "wls2_resourse_secondary_cloth_5": 2,
                "wls2_resourse_secondary_leather_5": 3
              },
              "result": {
                "inventory_stack_id": "wls2_battlepass1_armor_head_5_uncommon"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_battlepass1_armor_head_5_uncommon_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary07/wls2_battlepass1_armor_head_icon",
      "stat_curves": {
        "armor": {
          "1": 150,
          "2": 165,
          "3": 180,
          "4": 195,
          "5": 210,
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
      "image_key": "c074c2ddbfaf734dcc8c7191199c06854691d09507bf0ed63d9abcccb56ef4a3",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "旅者帽",
        "name_en": "Pilgrim hat",
        "description_zh": "由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！",
        "description_en": "Made of durable material according to blueprints of the best Wild West weaver. Everyone will be jealous!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "优秀",
        "search_text": "wls2_battlepass1_armor_head_5_uncommon 旅者帽 pilgrim hat 由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！ made of durable material according to blueprints of the best wild west weaver. everyone will be jealous! armor 护甲 head head armor armor_storage festive"
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
            "value": 7840,
            "unit": "",
            "display": "7840"
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
              "armor": 150,
              "dexterity": 1,
              "max_durability": 7840
            },
            "display": {
              "armor": "150",
              "dexterity": "+1",
              "max_durability": "7840"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 165,
              "dexterity": 2,
              "max_durability": 8624
            },
            "display": {
              "armor": "165",
              "dexterity": "+2",
              "max_durability": "8624"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 180,
              "dexterity": 3,
              "max_durability": 9408
            },
            "display": {
              "armor": "180",
              "dexterity": "+3",
              "max_durability": "9408"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 195,
              "dexterity": 4,
              "max_durability": 10192
            },
            "display": {
              "armor": "195",
              "dexterity": "+4",
              "max_durability": "10192"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 210,
              "dexterity": 5,
              "max_durability": 10976
            },
            "display": {
              "armor": "210",
              "dexterity": "+5",
              "max_durability": "10976"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 211,
              "dexterity": 5,
              "max_durability": 10976
            },
            "display": {
              "armor": "211",
              "dexterity": "+5",
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
          "防御：6 级起每级增加 1，最高 1210。"
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
      "bodypart": 41,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 41,
        "description": "inventory_stack_view_armor_thanksgiving_hat_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_armor_thanksgiving_hat_description",
        "name": "inventory_stack_view_armor_thanksgiving_hat_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_head_5_common_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary07/wls2_battlepass1_armor_head_icon",
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
      "item_id": "wls2_battlepass1_armor_head_6_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_armor_thanksgiving_hat_description",
        "en": {
          "description": "Made of durable material according to blueprints of the best Wild West weaver. Everyone will be jealous!",
          "full_description": "Made of durable material according to blueprints of the best Wild West weaver. Everyone will be jealous!",
          "name": "Pilgrim hat"
        },
        "full_description_key": "inventory_stack_view_armor_thanksgiving_hat_description",
        "name_key": "inventory_stack_view_armor_thanksgiving_hat_name",
        "zh": {
          "description": "由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！",
          "full_description": "由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！",
          "name": "旅者帽"
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
                "wls2_resourse_fourfold_nails_5": 3,
                "wls2_resourse_secondary_cloth_6": 2,
                "wls2_resourse_secondary_leather_6": 3
              },
              "result": {
                "inventory_stack_id": "wls2_battlepass1_armor_head_6_uncommon"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_battlepass1_armor_head_6_uncommon_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary07/wls2_battlepass1_armor_head_icon",
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
          "1": 14112,
          "2": 15523,
          "3": 16934,
          "4": 18346,
          "5": 19757
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
      "image_key": "c074c2ddbfaf734dcc8c7191199c06854691d09507bf0ed63d9abcccb56ef4a3",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "旅者帽",
        "name_en": "Pilgrim hat",
        "description_zh": "由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！",
        "description_en": "Made of durable material according to blueprints of the best Wild West weaver. Everyone will be jealous!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "优秀",
        "search_text": "wls2_battlepass1_armor_head_6_uncommon 旅者帽 pilgrim hat 由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！ made of durable material according to blueprints of the best wild west weaver. everyone will be jealous! armor 护甲 head head armor armor_storage festive"
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
              "max_durability": 14112
            },
            "display": {
              "armor": "300",
              "dexterity": "+4",
              "max_durability": "14112"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 330,
              "dexterity": 5,
              "max_durability": 15523
            },
            "display": {
              "armor": "330",
              "dexterity": "+5",
              "max_durability": "15523"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 360,
              "dexterity": 6,
              "max_durability": 16934
            },
            "display": {
              "armor": "360",
              "dexterity": "+6",
              "max_durability": "16934"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 390,
              "dexterity": 8,
              "max_durability": 18346
            },
            "display": {
              "armor": "390",
              "dexterity": "+8",
              "max_durability": "18346"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 420,
              "dexterity": 10,
              "max_durability": 19757
            },
            "display": {
              "armor": "420",
              "dexterity": "+10",
              "max_durability": "19757"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 421,
              "dexterity": 10,
              "max_durability": 19757
            },
            "display": {
              "armor": "421",
              "dexterity": "+10",
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
        "has_direct_recipe": false,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 41,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 41,
        "description": "inventory_stack_view_armor_thanksgiving_hat_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_armor_thanksgiving_hat_description",
        "name": "inventory_stack_view_armor_thanksgiving_hat_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_head_5_common_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary07/wls2_battlepass1_armor_head_icon",
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
      "item_id": "wls2_battlepass1_armor_head_7_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_armor_thanksgiving_hat_description",
        "en": {
          "description": "Made of durable material according to blueprints of the best Wild West weaver. Everyone will be jealous!",
          "full_description": "Made of durable material according to blueprints of the best Wild West weaver. Everyone will be jealous!",
          "name": "Pilgrim hat"
        },
        "full_description_key": "inventory_stack_view_armor_thanksgiving_hat_description",
        "name_key": "inventory_stack_view_armor_thanksgiving_hat_name",
        "zh": {
          "description": "由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！",
          "full_description": "由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！",
          "name": "旅者帽"
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
                "wls2_resourse_fourfold_nails_6": 3,
                "wls2_resourse_secondary_cloth_7": 2,
                "wls2_resourse_secondary_leather_7": 3
              },
              "result": {
                "inventory_stack_id": "wls2_battlepass1_armor_head_7_uncommon"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_battlepass1_armor_head_7_uncommon_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary07/wls2_battlepass1_armor_head_icon",
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
      "image_key": "c074c2ddbfaf734dcc8c7191199c06854691d09507bf0ed63d9abcccb56ef4a3",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "旅者帽",
        "name_en": "Pilgrim hat",
        "description_zh": "由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！",
        "description_en": "Made of durable material according to blueprints of the best Wild West weaver. Everyone will be jealous!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "优秀",
        "search_text": "wls2_battlepass1_armor_head_7_uncommon 旅者帽 pilgrim hat 由结实耐用的材料制成，制作蓝图出自狂野西部手艺最好的织布匠人。大家一定会眼红的！ made of durable material according to blueprints of the best wild west weaver. everyone will be jealous! armor 护甲 head head armor armor_storage festive"
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
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 43,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 43,
        "description": "inventory_stack_view_armor_stpatric_hat_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_armor_stpatric_hat_description",
        "name": "inventory_stack_view_armor_stpatric_hat_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary07/wls2_battlepass3_armor_head_icon",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_battlepass3_armor_head_2_rare",
      "localization": {
        "description_key": "inventory_stack_view_armor_stpatric_hat_description",
        "en": {
          "description": "A beautiful hat made of beaver felt. They say it brings good luck!",
          "full_description": "A beautiful hat made of beaver felt. They say it brings good luck!",
          "name": "Leprechaun hat"
        },
        "full_description_key": "inventory_stack_view_armor_stpatric_hat_description",
        "name_key": "inventory_stack_view_armor_stpatric_hat_name",
        "zh": {
          "description": "一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！",
          "full_description": "一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！",
          "name": "小矮妖帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_2": 1,
            "wls2_resourse_secondary_cloth_2": 3,
            "wls2_resourse_secondary_leather_2": 4
          },
          "type": "recycle"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary07/wls2_battlepass3_armor_head_icon",
      "stat_curves": {
        "armor": {
          "1": 21,
          "2": 23,
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
        "dexterity": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 2,
          "5": 3
        },
        "max_durability": {
          "1": 175,
          "2": 190,
          "3": 205,
          "4": 220,
          "5": 235
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
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "0ba6987d2fc66e396616fe4272e20307e676a870e9584532c3966e500e406101",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "小矮妖帽子",
        "name_en": "Leprechaun hat",
        "description_zh": "一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！",
        "description_en": "A beautiful hat made of beaver felt. They say it brings good luck!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_battlepass3_armor_head_2_rare 小矮妖帽子 leprechaun hat 一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！ a beautiful hat made of beaver felt. they say it brings good luck! armor 护甲 head head armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 21,
            "unit": "",
            "display": "21"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 175,
            "unit": "",
            "display": "175"
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
            "level": 2,
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
            "level": 3,
            "values": {
              "armor": 24,
              "dexterity": 1,
              "max_durability": 205
            },
            "display": {
              "armor": "24",
              "dexterity": "+1",
              "max_durability": "205"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 26,
              "dexterity": 2,
              "max_durability": 220
            },
            "display": {
              "armor": "26",
              "dexterity": "+2",
              "max_durability": "220"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 28,
              "dexterity": 3,
              "max_durability": 235
            },
            "display": {
              "armor": "28",
              "dexterity": "+3",
              "max_durability": "235"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 29,
              "dexterity": 3,
              "max_durability": 235
            },
            "display": {
              "armor": "29",
              "dexterity": "+3",
              "max_durability": "235"
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
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 43,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 43,
        "description": "inventory_stack_view_armor_stpatric_hat_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_armor_stpatric_hat_description",
        "name": "inventory_stack_view_armor_stpatric_hat_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary07/wls2_battlepass3_armor_head_icon",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_battlepass3_armor_head_3_rare",
      "localization": {
        "description_key": "inventory_stack_view_armor_stpatric_hat_description",
        "en": {
          "description": "A beautiful hat made of beaver felt. They say it brings good luck!",
          "full_description": "A beautiful hat made of beaver felt. They say it brings good luck!",
          "name": "Leprechaun hat"
        },
        "full_description_key": "inventory_stack_view_armor_stpatric_hat_description",
        "name_key": "inventory_stack_view_armor_stpatric_hat_name",
        "zh": {
          "description": "一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！",
          "full_description": "一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！",
          "name": "小矮妖帽子"
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
          "type": "recycle"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary07/wls2_battlepass3_armor_head_icon",
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
      "image_key": "0ba6987d2fc66e396616fe4272e20307e676a870e9584532c3966e500e406101",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "小矮妖帽子",
        "name_en": "Leprechaun hat",
        "description_zh": "一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！",
        "description_en": "A beautiful hat made of beaver felt. They say it brings good luck!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_battlepass3_armor_head_3_rare 小矮妖帽子 leprechaun hat 一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！ a beautiful hat made of beaver felt. they say it brings good luck! armor 护甲 head head armor armor_storage"
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
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 43,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 43,
        "description": "inventory_stack_view_armor_stpatric_hat_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_armor_stpatric_hat_description",
        "name": "inventory_stack_view_armor_stpatric_hat_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary07/wls2_battlepass3_armor_head_icon",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_battlepass3_armor_head_4_rare",
      "localization": {
        "description_key": "inventory_stack_view_armor_stpatric_hat_description",
        "en": {
          "description": "A beautiful hat made of beaver felt. They say it brings good luck!",
          "full_description": "A beautiful hat made of beaver felt. They say it brings good luck!",
          "name": "Leprechaun hat"
        },
        "full_description_key": "inventory_stack_view_armor_stpatric_hat_description",
        "name_key": "inventory_stack_view_armor_stpatric_hat_name",
        "zh": {
          "description": "一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！",
          "full_description": "一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！",
          "name": "小矮妖帽子"
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
          "type": "recycle"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary07/wls2_battlepass3_armor_head_icon",
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
          "1": 4652,
          "2": 5117,
          "3": 5582,
          "4": 6047,
          "5": 6513
        },
        "reduced_detection_radius": {
          "1": 0.06,
          "2": 0.07,
          "3": 0.08,
          "4": 0.09,
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
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "0ba6987d2fc66e396616fe4272e20307e676a870e9584532c3966e500e406101",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "小矮妖帽子",
        "name_en": "Leprechaun hat",
        "description_zh": "一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！",
        "description_en": "A beautiful hat made of beaver felt. They say it brings good luck!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_battlepass3_armor_head_4_rare 小矮妖帽子 leprechaun hat 一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！ a beautiful hat made of beaver felt. they say it brings good luck! armor 护甲 head head armor armor_storage"
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
            "value": 1,
            "unit": "",
            "display": "1"
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
              "armor": 135,
              "dexterity": 2,
              "max_durability": 4652,
              "reduced_detection_radius": 0.06
            },
            "display": {
              "armor": "135",
              "dexterity": "+2",
              "max_durability": "4652",
              "reduced_detection_radius": "+6%"
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
              "reduced_detection_radius": 0.08
            },
            "display": {
              "armor": "162",
              "dexterity": "+4",
              "max_durability": "5582",
              "reduced_detection_radius": "+8%"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 176,
              "dexterity": 5,
              "max_durability": 6047,
              "reduced_detection_radius": 0.09
            },
            "display": {
              "armor": "176",
              "dexterity": "+5",
              "max_durability": "6047",
              "reduced_detection_radius": "+9%"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 189,
              "dexterity": 6,
              "max_durability": 6513,
              "reduced_detection_radius": 0.1
            },
            "display": {
              "armor": "189",
              "dexterity": "+6",
              "max_durability": "6513",
              "reduced_detection_radius": "+10%"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 190,
              "dexterity": 6,
              "max_durability": 6513,
              "reduced_detection_radius": 0.1
            },
            "display": {
              "armor": "190",
              "dexterity": "+6",
              "max_durability": "6513",
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
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 43,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 43,
        "description": "inventory_stack_view_armor_stpatric_hat_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_armor_stpatric_hat_description",
        "name": "inventory_stack_view_armor_stpatric_hat_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary07/wls2_battlepass3_armor_head_icon",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_battlepass3_armor_head_5_rare",
      "localization": {
        "description_key": "inventory_stack_view_armor_stpatric_hat_description",
        "en": {
          "description": "A beautiful hat made of beaver felt. They say it brings good luck!",
          "full_description": "A beautiful hat made of beaver felt. They say it brings good luck!",
          "name": "Leprechaun hat"
        },
        "full_description_key": "inventory_stack_view_armor_stpatric_hat_description",
        "name_key": "inventory_stack_view_armor_stpatric_hat_name",
        "zh": {
          "description": "一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！",
          "full_description": "一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！",
          "name": "小矮妖帽子"
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
          "type": "recycle"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary07/wls2_battlepass3_armor_head_icon",
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
      "tier": 5,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "0ba6987d2fc66e396616fe4272e20307e676a870e9584532c3966e500e406101",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "小矮妖帽子",
        "name_en": "Leprechaun hat",
        "description_zh": "一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！",
        "description_en": "A beautiful hat made of beaver felt. They say it brings good luck!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_battlepass3_armor_head_5_rare 小矮妖帽子 leprechaun hat 一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！ a beautiful hat made of beaver felt. they say it brings good luck! armor 护甲 head head armor armor_storage"
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
            "value": 1.5,
            "unit": "",
            "display": "1.5"
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
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 43,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 43,
        "description": "inventory_stack_view_armor_stpatric_hat_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_armor_stpatric_hat_description",
        "name": "inventory_stack_view_armor_stpatric_hat_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary07/wls2_battlepass3_armor_head_icon",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_battlepass3_armor_head_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_armor_stpatric_hat_description",
        "en": {
          "description": "A beautiful hat made of beaver felt. They say it brings good luck!",
          "full_description": "A beautiful hat made of beaver felt. They say it brings good luck!",
          "name": "Leprechaun hat"
        },
        "full_description_key": "inventory_stack_view_armor_stpatric_hat_description",
        "name_key": "inventory_stack_view_armor_stpatric_hat_name",
        "zh": {
          "description": "一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！",
          "full_description": "一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！",
          "name": "小矮妖帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_5": 4,
            "wls2_resourse_secondary_cloth_6": 4,
            "wls2_resourse_secondary_leather_6": 5
          },
          "type": "recycle"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary07/wls2_battlepass3_armor_head_icon",
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
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1
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
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "0ba6987d2fc66e396616fe4272e20307e676a870e9584532c3966e500e406101",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "小矮妖帽子",
        "name_en": "Leprechaun hat",
        "description_zh": "一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！",
        "description_en": "A beautiful hat made of beaver felt. They say it brings good luck!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_battlepass3_armor_head_6_rare 小矮妖帽子 leprechaun hat 一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！ a beautiful hat made of beaver felt. they say it brings good luck! armor 护甲 head head armor armor_storage"
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
            "value": 1,
            "unit": "",
            "display": "1"
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
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": false,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 43,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 43,
        "description": "inventory_stack_view_armor_stpatric_hat_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_armor_stpatric_hat_description",
        "name": "inventory_stack_view_armor_stpatric_hat_name",
        "rarity": "rare",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary07/wls2_battlepass3_armor_head_icon",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_battlepass3_armor_head_7_rare",
      "localization": {
        "description_key": "inventory_stack_view_armor_stpatric_hat_description",
        "en": {
          "description": "A beautiful hat made of beaver felt. They say it brings good luck!",
          "full_description": "A beautiful hat made of beaver felt. They say it brings good luck!",
          "name": "Leprechaun hat"
        },
        "full_description_key": "inventory_stack_view_armor_stpatric_hat_description",
        "name_key": "inventory_stack_view_armor_stpatric_hat_name",
        "zh": {
          "description": "一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！",
          "full_description": "一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！",
          "name": "小矮妖帽子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_6": 4,
            "wls2_resourse_secondary_cloth_7": 4,
            "wls2_resourse_secondary_leather_7": 5
          },
          "type": "recycle"
        },
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary07/wls2_battlepass3_armor_head_icon",
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
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "0ba6987d2fc66e396616fe4272e20307e676a870e9584532c3966e500e406101",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "小矮妖帽子",
        "name_en": "Leprechaun hat",
        "description_zh": "一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！",
        "description_en": "A beautiful hat made of beaver felt. They say it brings good luck!",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "稀有",
        "search_text": "wls2_battlepass3_armor_head_7_rare 小矮妖帽子 leprechaun hat 一顶漂亮的帽子，用河狸毛毡制成。据说，它能带来好运！ a beautiful hat made of beaver felt. they say it brings good luck! armor 护甲 head head armor armor_storage"
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
        "description": "wls2_battlepass3_ring_all_stats_epic_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_battlepass3_ring_all_stats_epic_description",
        "name": "wls2_battlepass3_ring_all_stats_epic_name",
        "rarity": "epic",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary07/wls_ring_st_patrick",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 2,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_battlepass3_ring_all_stats_2_epic",
      "localization": {
        "description_key": "wls2_battlepass3_ring_all_stats_epic_description",
        "en": {
          "description": "It used to belong to one of the leprechauns, but now it's yours!",
          "full_description": "It used to belong to one of the leprechauns, but now it's yours!",
          "name": "“Luck O' The Irish” Ring"
        },
        "full_description_key": "wls2_battlepass3_ring_all_stats_epic_description",
        "name_key": "wls2_battlepass3_ring_all_stats_epic_name",
        "zh": {
          "description": "它曾经属于一个小矮妖，但现在它是你的了！",
          "full_description": "它曾经属于一个小矮妖，但现在它是你的了！",
          "name": "幸运戒指"
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
      "sprite": "UI_WW_AlphaBinary07/wls_ring_st_patrick",
      "stat_curves": {
        "dexterity": {
          "default": 2
        },
        "stamina": {
          "default": 2
        },
        "strength": {
          "default": 2
        },
        "wisdom": {
          "default": 2
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
      "subcategory": "ring",
      "tags": [
        "ring1",
        "ring2",
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
      "image_key": "e881296e0f234e2b3852ead6e527cd6fd04acd09fa2443ffde2f88dfb70c5e40",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幸运戒指",
        "name_en": "“Luck O' The Irish” Ring",
        "description_zh": "它曾经属于一个小矮妖，但现在它是你的了！",
        "description_en": "It used to belong to one of the leprechauns, but now it's yours!",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "史诗",
        "search_text": "wls2_battlepass3_ring_all_stats_2_epic 幸运戒指 “luck o' the irish” ring 它曾经属于一个小矮妖，但现在它是你的了！ it used to belong to one of the leprechauns, but now it's yours! accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
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
          },
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
        "description": "wls2_battlepass3_ring_all_stats_epic_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_battlepass3_ring_all_stats_epic_description",
        "name": "wls2_battlepass3_ring_all_stats_epic_name",
        "rarity": "epic",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary07/wls_ring_st_patrick",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_battlepass3_ring_all_stats_3_epic",
      "localization": {
        "description_key": "wls2_battlepass3_ring_all_stats_epic_description",
        "en": {
          "description": "It used to belong to one of the leprechauns, but now it's yours!",
          "full_description": "It used to belong to one of the leprechauns, but now it's yours!",
          "name": "“Luck O' The Irish” Ring"
        },
        "full_description_key": "wls2_battlepass3_ring_all_stats_epic_description",
        "name_key": "wls2_battlepass3_ring_all_stats_epic_name",
        "zh": {
          "description": "它曾经属于一个小矮妖，但现在它是你的了！",
          "full_description": "它曾经属于一个小矮妖，但现在它是你的了！",
          "name": "幸运戒指"
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
      "sprite": "UI_WW_AlphaBinary07/wls_ring_st_patrick",
      "stat_curves": {
        "dexterity": {
          "default": 3
        },
        "stamina": {
          "default": 3
        },
        "strength": {
          "default": 3
        },
        "wisdom": {
          "default": 3
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
      "image_key": "e881296e0f234e2b3852ead6e527cd6fd04acd09fa2443ffde2f88dfb70c5e40",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幸运戒指",
        "name_en": "“Luck O' The Irish” Ring",
        "description_zh": "它曾经属于一个小矮妖，但现在它是你的了！",
        "description_en": "It used to belong to one of the leprechauns, but now it's yours!",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "史诗",
        "search_text": "wls2_battlepass3_ring_all_stats_3_epic 幸运戒指 “luck o' the irish” ring 它曾经属于一个小矮妖，但现在它是你的了！ it used to belong to one of the leprechauns, but now it's yours! accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
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
          },
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
        "description": "wls2_battlepass3_ring_all_stats_epic_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_battlepass3_ring_all_stats_epic_description",
        "name": "wls2_battlepass3_ring_all_stats_epic_name",
        "rarity": "epic",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary07/wls_ring_st_patrick",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 4,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_battlepass3_ring_all_stats_4_epic",
      "localization": {
        "description_key": "wls2_battlepass3_ring_all_stats_epic_description",
        "en": {
          "description": "It used to belong to one of the leprechauns, but now it's yours!",
          "full_description": "It used to belong to one of the leprechauns, but now it's yours!",
          "name": "“Luck O' The Irish” Ring"
        },
        "full_description_key": "wls2_battlepass3_ring_all_stats_epic_description",
        "name_key": "wls2_battlepass3_ring_all_stats_epic_name",
        "zh": {
          "description": "它曾经属于一个小矮妖，但现在它是你的了！",
          "full_description": "它曾经属于一个小矮妖，但现在它是你的了！",
          "name": "幸运戒指"
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
      "sprite": "UI_WW_AlphaBinary07/wls_ring_st_patrick",
      "stat_curves": {
        "dexterity": {
          "default": 4
        },
        "stamina": {
          "default": 4
        },
        "strength": {
          "default": 4
        },
        "wisdom": {
          "default": 4
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
      "subcategory": "ring",
      "tags": [
        "ring1",
        "ring2",
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
      "image_key": "e881296e0f234e2b3852ead6e527cd6fd04acd09fa2443ffde2f88dfb70c5e40",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幸运戒指",
        "name_en": "“Luck O' The Irish” Ring",
        "description_zh": "它曾经属于一个小矮妖，但现在它是你的了！",
        "description_en": "It used to belong to one of the leprechauns, but now it's yours!",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "史诗",
        "search_text": "wls2_battlepass3_ring_all_stats_4_epic 幸运戒指 “luck o' the irish” ring 它曾经属于一个小矮妖，但现在它是你的了！ it used to belong to one of the leprechauns, but now it's yours! accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
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
          },
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
        "description": "wls2_battlepass3_ring_all_stats_epic_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_battlepass3_ring_all_stats_epic_description",
        "name": "wls2_battlepass3_ring_all_stats_epic_name",
        "rarity": "epic",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary07/wls_ring_st_patrick",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 5,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_battlepass3_ring_all_stats_5_epic",
      "localization": {
        "description_key": "wls2_battlepass3_ring_all_stats_epic_description",
        "en": {
          "description": "It used to belong to one of the leprechauns, but now it's yours!",
          "full_description": "It used to belong to one of the leprechauns, but now it's yours!",
          "name": "“Luck O' The Irish” Ring"
        },
        "full_description_key": "wls2_battlepass3_ring_all_stats_epic_description",
        "name_key": "wls2_battlepass3_ring_all_stats_epic_name",
        "zh": {
          "description": "它曾经属于一个小矮妖，但现在它是你的了！",
          "full_description": "它曾经属于一个小矮妖，但现在它是你的了！",
          "name": "幸运戒指"
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
      "sprite": "UI_WW_AlphaBinary07/wls_ring_st_patrick",
      "stat_curves": {
        "dexterity": {
          "default": 5
        },
        "stamina": {
          "default": 5
        },
        "strength": {
          "default": 5
        },
        "wisdom": {
          "default": 5
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
      "subcategory": "ring",
      "tags": [
        "ring1",
        "ring2",
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
      "image_key": "e881296e0f234e2b3852ead6e527cd6fd04acd09fa2443ffde2f88dfb70c5e40",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幸运戒指",
        "name_en": "“Luck O' The Irish” Ring",
        "description_zh": "它曾经属于一个小矮妖，但现在它是你的了！",
        "description_en": "It used to belong to one of the leprechauns, but now it's yours!",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "史诗",
        "search_text": "wls2_battlepass3_ring_all_stats_5_epic 幸运戒指 “luck o' the irish” ring 它曾经属于一个小矮妖，但现在它是你的了！ it used to belong to one of the leprechauns, but now it's yours! accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
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
          },
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
        "description": "wls2_battlepass3_ring_all_stats_epic_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_battlepass3_ring_all_stats_epic_description",
        "name": "wls2_battlepass3_ring_all_stats_epic_name",
        "rarity": "epic",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary07/wls_ring_st_patrick",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 6,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_battlepass3_ring_all_stats_6_epic",
      "localization": {
        "description_key": "wls2_battlepass3_ring_all_stats_epic_description",
        "en": {
          "description": "It used to belong to one of the leprechauns, but now it's yours!",
          "full_description": "It used to belong to one of the leprechauns, but now it's yours!",
          "name": "“Luck O' The Irish” Ring"
        },
        "full_description_key": "wls2_battlepass3_ring_all_stats_epic_description",
        "name_key": "wls2_battlepass3_ring_all_stats_epic_name",
        "zh": {
          "description": "它曾经属于一个小矮妖，但现在它是你的了！",
          "full_description": "它曾经属于一个小矮妖，但现在它是你的了！",
          "name": "幸运戒指"
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
      "sprite": "UI_WW_AlphaBinary07/wls_ring_st_patrick",
      "stat_curves": {
        "dexterity": {
          "default": 6
        },
        "stamina": {
          "default": 6
        },
        "strength": {
          "default": 6
        },
        "wisdom": {
          "default": 6
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
      "subcategory": "ring",
      "tags": [
        "ring1",
        "ring2",
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
      "image_key": "e881296e0f234e2b3852ead6e527cd6fd04acd09fa2443ffde2f88dfb70c5e40",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幸运戒指",
        "name_en": "“Luck O' The Irish” Ring",
        "description_zh": "它曾经属于一个小矮妖，但现在它是你的了！",
        "description_en": "It used to belong to one of the leprechauns, but now it's yours!",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "史诗",
        "search_text": "wls2_battlepass3_ring_all_stats_6_epic 幸运戒指 “luck o' the irish” ring 它曾经属于一个小矮妖，但现在它是你的了！ it used to belong to one of the leprechauns, but now it's yours! accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
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
          },
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
        "description": "wls2_battlepass3_ring_all_stats_epic_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_battlepass3_ring_all_stats_epic_description",
        "name": "wls2_battlepass3_ring_all_stats_epic_name",
        "rarity": "epic",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary07/wls_ring_st_patrick",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 7,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_battlepass3_ring_all_stats_7_epic",
      "localization": {
        "description_key": "wls2_battlepass3_ring_all_stats_epic_description",
        "en": {
          "description": "It used to belong to one of the leprechauns, but now it's yours!",
          "full_description": "It used to belong to one of the leprechauns, but now it's yours!",
          "name": "“Luck O' The Irish” Ring"
        },
        "full_description_key": "wls2_battlepass3_ring_all_stats_epic_description",
        "name_key": "wls2_battlepass3_ring_all_stats_epic_name",
        "zh": {
          "description": "它曾经属于一个小矮妖，但现在它是你的了！",
          "full_description": "它曾经属于一个小矮妖，但现在它是你的了！",
          "name": "幸运戒指"
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
      "sprite": "UI_WW_AlphaBinary07/wls_ring_st_patrick",
      "stat_curves": {
        "dexterity": {
          "default": 7
        },
        "stamina": {
          "default": 7
        },
        "strength": {
          "default": 7
        },
        "wisdom": {
          "default": 7
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
      "subcategory": "ring",
      "tags": [
        "ring1",
        "ring2",
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
      "image_key": "e881296e0f234e2b3852ead6e527cd6fd04acd09fa2443ffde2f88dfb70c5e40",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幸运戒指",
        "name_en": "“Luck O' The Irish” Ring",
        "description_zh": "它曾经属于一个小矮妖，但现在它是你的了！",
        "description_en": "It used to belong to one of the leprechauns, but now it's yours!",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "史诗",
        "search_text": "wls2_battlepass3_ring_all_stats_7_epic 幸运戒指 “luck o' the irish” ring 它曾经属于一个小矮妖，但现在它是你的了！ it used to belong to one of the leprechauns, but now it's yours! accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
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
          },
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
        "description": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "name": "inventory_stack_view_wls2_event_neck_thanksgiving24_name",
        "rarity": "epic",
        "show_description": true,
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary09/wls2_thaknsgiving_neck_2024",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 2,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_battlepass6_neck_thanksgiving_2",
      "localization": {
        "description_key": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "en": {
          "description": "An elegant decoration created in honor of the day when families come together to celebrate gratitude and joy",
          "full_description": "An elegant decoration created in honor of the day when families come together to celebrate gratitude and joy",
          "name": "Frontier Fall Amulet"
        },
        "full_description_key": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "name_key": "inventory_stack_view_wls2_event_neck_thanksgiving24_name",
        "zh": {
          "description": "一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。",
          "full_description": "一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。",
          "name": "边疆 秋天 护身符"
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
      "sprite": "UI_WW_AlphaBinary09/wls2_thaknsgiving_neck_2024",
      "stat_curves": {
        "cool_modifier": {
          "default": 3
        },
        "health_increment": {
          "default": 100
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "stat_labels": {
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
      "image_key": "78ba29fb12e2c678aa3be093714084893b93ba2977c1223e40c5f4349e7f5cd9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "边疆 秋天 护身符",
        "name_en": "Frontier Fall Amulet",
        "description_zh": "一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。",
        "description_en": "An elegant decoration created in honor of the day when families come together to celebrate gratitude and joy",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "史诗",
        "search_text": "wls2_battlepass6_neck_thanksgiving_2 边疆 秋天 护身符 frontier fall amulet 一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。 an elegant decoration created in honor of the day when families come together to celebrate gratitude and joy accessory 饰品 amulet amulet trinket"
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
            "key": "cool_modifier",
            "label": "隔热",
            "value": 3,
            "unit": "",
            "display": "3"
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
        "description": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "name": "inventory_stack_view_wls2_event_neck_thanksgiving24_name",
        "rarity": "epic",
        "show_description": true,
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary09/wls2_thaknsgiving_neck_2024",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_battlepass6_neck_thanksgiving_3",
      "localization": {
        "description_key": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "en": {
          "description": "An elegant decoration created in honor of the day when families come together to celebrate gratitude and joy",
          "full_description": "An elegant decoration created in honor of the day when families come together to celebrate gratitude and joy",
          "name": "Frontier Fall Amulet"
        },
        "full_description_key": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "name_key": "inventory_stack_view_wls2_event_neck_thanksgiving24_name",
        "zh": {
          "description": "一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。",
          "full_description": "一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。",
          "name": "边疆 秋天 护身符"
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
      "sprite": "UI_WW_AlphaBinary09/wls2_thaknsgiving_neck_2024",
      "stat_curves": {
        "cool_modifier": {
          "default": 3
        },
        "health_increment": {
          "default": 150
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "stat_labels": {
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
      "image_key": "78ba29fb12e2c678aa3be093714084893b93ba2977c1223e40c5f4349e7f5cd9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "边疆 秋天 护身符",
        "name_en": "Frontier Fall Amulet",
        "description_zh": "一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。",
        "description_en": "An elegant decoration created in honor of the day when families come together to celebrate gratitude and joy",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "史诗",
        "search_text": "wls2_battlepass6_neck_thanksgiving_3 边疆 秋天 护身符 frontier fall amulet 一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。 an elegant decoration created in honor of the day when families come together to celebrate gratitude and joy accessory 饰品 amulet amulet trinket"
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
            "key": "cool_modifier",
            "label": "隔热",
            "value": 3,
            "unit": "",
            "display": "3"
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
        "description": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "name": "inventory_stack_view_wls2_event_neck_thanksgiving24_name",
        "rarity": "epic",
        "show_description": true,
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary09/wls2_thaknsgiving_neck_2024",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 4,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_battlepass6_neck_thanksgiving_4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "en": {
          "description": "An elegant decoration created in honor of the day when families come together to celebrate gratitude and joy",
          "full_description": "An elegant decoration created in honor of the day when families come together to celebrate gratitude and joy",
          "name": "Frontier Fall Amulet"
        },
        "full_description_key": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "name_key": "inventory_stack_view_wls2_event_neck_thanksgiving24_name",
        "zh": {
          "description": "一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。",
          "full_description": "一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。",
          "name": "边疆 秋天 护身符"
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
      "sprite": "UI_WW_AlphaBinary09/wls2_thaknsgiving_neck_2024",
      "stat_curves": {
        "cool_modifier": {
          "default": 3
        },
        "health_increment": {
          "default": 300
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "stat_labels": {
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
      "image_key": "78ba29fb12e2c678aa3be093714084893b93ba2977c1223e40c5f4349e7f5cd9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "边疆 秋天 护身符",
        "name_en": "Frontier Fall Amulet",
        "description_zh": "一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。",
        "description_en": "An elegant decoration created in honor of the day when families come together to celebrate gratitude and joy",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "史诗",
        "search_text": "wls2_battlepass6_neck_thanksgiving_4 边疆 秋天 护身符 frontier fall amulet 一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。 an elegant decoration created in honor of the day when families come together to celebrate gratitude and joy accessory 饰品 amulet amulet trinket"
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
            "key": "cool_modifier",
            "label": "隔热",
            "value": 3,
            "unit": "",
            "display": "3"
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
        "description": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "name": "inventory_stack_view_wls2_event_neck_thanksgiving24_name",
        "rarity": "epic",
        "show_description": true,
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary09/wls2_thaknsgiving_neck_2024",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 5,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_battlepass6_neck_thanksgiving_5",
      "localization": {
        "description_key": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "en": {
          "description": "An elegant decoration created in honor of the day when families come together to celebrate gratitude and joy",
          "full_description": "An elegant decoration created in honor of the day when families come together to celebrate gratitude and joy",
          "name": "Frontier Fall Amulet"
        },
        "full_description_key": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "name_key": "inventory_stack_view_wls2_event_neck_thanksgiving24_name",
        "zh": {
          "description": "一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。",
          "full_description": "一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。",
          "name": "边疆 秋天 护身符"
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
      "sprite": "UI_WW_AlphaBinary09/wls2_thaknsgiving_neck_2024",
      "stat_curves": {
        "cool_modifier": {
          "default": 3
        },
        "health_increment": {
          "default": 500
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "stat_labels": {
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
      "image_key": "78ba29fb12e2c678aa3be093714084893b93ba2977c1223e40c5f4349e7f5cd9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "边疆 秋天 护身符",
        "name_en": "Frontier Fall Amulet",
        "description_zh": "一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。",
        "description_en": "An elegant decoration created in honor of the day when families come together to celebrate gratitude and joy",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "史诗",
        "search_text": "wls2_battlepass6_neck_thanksgiving_5 边疆 秋天 护身符 frontier fall amulet 一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。 an elegant decoration created in honor of the day when families come together to celebrate gratitude and joy accessory 饰品 amulet amulet trinket"
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
            "key": "cool_modifier",
            "label": "隔热",
            "value": 3,
            "unit": "",
            "display": "3"
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
        "description": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "name": "inventory_stack_view_wls2_event_neck_thanksgiving24_name",
        "rarity": "epic",
        "show_description": true,
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary09/wls2_thaknsgiving_neck_2024",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 6,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_battlepass6_neck_thanksgiving_6",
      "localization": {
        "description_key": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "en": {
          "description": "An elegant decoration created in honor of the day when families come together to celebrate gratitude and joy",
          "full_description": "An elegant decoration created in honor of the day when families come together to celebrate gratitude and joy",
          "name": "Frontier Fall Amulet"
        },
        "full_description_key": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "name_key": "inventory_stack_view_wls2_event_neck_thanksgiving24_name",
        "zh": {
          "description": "一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。",
          "full_description": "一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。",
          "name": "边疆 秋天 护身符"
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
      "sprite": "UI_WW_AlphaBinary09/wls2_thaknsgiving_neck_2024",
      "stat_curves": {
        "cool_modifier": {
          "default": 3
        },
        "health_increment": {
          "default": 700
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "stat_labels": {
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
      "subcategory": "amulet",
      "tags": [
        "amulet",
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
      "image_key": "78ba29fb12e2c678aa3be093714084893b93ba2977c1223e40c5f4349e7f5cd9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "边疆 秋天 护身符",
        "name_en": "Frontier Fall Amulet",
        "description_zh": "一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。",
        "description_en": "An elegant decoration created in honor of the day when families come together to celebrate gratitude and joy",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "史诗",
        "search_text": "wls2_battlepass6_neck_thanksgiving_6 边疆 秋天 护身符 frontier fall amulet 一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。 an elegant decoration created in honor of the day when families come together to celebrate gratitude and joy accessory 饰品 amulet amulet trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "health_increment",
            "label": "生命加成",
            "value": 700,
            "unit": "",
            "display": "+700"
          },
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
            "value": 3,
            "unit": "",
            "display": "3"
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
        "description": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "name": "inventory_stack_view_wls2_event_neck_thanksgiving24_name",
        "rarity": "epic",
        "show_description": true,
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary09/wls2_thaknsgiving_neck_2024",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 7,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_battlepass6_neck_thanksgiving_7",
      "localization": {
        "description_key": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "en": {
          "description": "An elegant decoration created in honor of the day when families come together to celebrate gratitude and joy",
          "full_description": "An elegant decoration created in honor of the day when families come together to celebrate gratitude and joy",
          "name": "Frontier Fall Amulet"
        },
        "full_description_key": "inventory_stack_view_wls2_event_ring_thanksgiving23_description",
        "name_key": "inventory_stack_view_wls2_event_neck_thanksgiving24_name",
        "zh": {
          "description": "一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。",
          "full_description": "一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。",
          "name": "边疆 秋天 护身符"
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
      "sprite": "UI_WW_AlphaBinary09/wls2_thaknsgiving_neck_2024",
      "stat_curves": {
        "cool_modifier": {
          "default": 3
        },
        "health_increment": {
          "default": 900
        },
        "warm_modifier": {
          "default": 3
        }
      },
      "stat_labels": {
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
      "subcategory": "amulet",
      "tags": [
        "amulet",
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
      "image_key": "78ba29fb12e2c678aa3be093714084893b93ba2977c1223e40c5f4349e7f5cd9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "边疆 秋天 护身符",
        "name_en": "Frontier Fall Amulet",
        "description_zh": "一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。",
        "description_en": "An elegant decoration created in honor of the day when families come together to celebrate gratitude and joy",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "史诗",
        "search_text": "wls2_battlepass6_neck_thanksgiving_7 边疆 秋天 护身符 frontier fall amulet 一个优雅的装饰，为了纪念家人团聚庆祝感恩和喜悦的日子而创造的。 an elegant decoration created in honor of the day when families come together to celebrate gratitude and joy accessory 饰品 amulet amulet trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "health_increment",
            "label": "生命加成",
            "value": 900,
            "unit": "",
            "display": "+900"
          },
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
            "value": 3,
            "unit": "",
            "display": "3"
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
        "description": "wls2_battlepass6_ring_pet_desc",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_battlepass6_ring_pet_desc",
        "name": "wls2_battlepass6_ring_pet_name",
        "rarity": "epic",
        "show_description": true,
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary09/wls_ring_stat_pets",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 2,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_battlepass6_ring_pet_2",
      "localization": {
        "description_key": "wls2_battlepass6_ring_pet_desc",
        "en": {
          "description": "Possesses natural power that enhances the pet's characteristics",
          "full_description": "Possesses natural power that enhances the pet's characteristics",
          "name": "Animal Mastery ring"
        },
        "full_description_key": "wls2_battlepass6_ring_pet_desc",
        "name_key": "wls2_battlepass6_ring_pet_name",
        "zh": {
          "description": "拥有增强宠物特征的自然力量",
          "full_description": "拥有增强宠物特征的自然力量",
          "name": "动物 掌握 环"
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
      "sprite": "UI_WW_AlphaBinary09/wls_ring_stat_pets",
      "stat_curves": {
        "pet_bonus_damage": {
          "default": 10
        },
        "pet_health_increment": {
          "default": 200
        }
      },
      "stat_labels": {
        "pet_bonus_damage": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_pet_bonus_damage",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_pet_bonus_damage",
          "en": "Pet damage",
          "zh": "宠物伤害"
        },
        "pet_health_increment": {
          "definition": {
            "diff_format": "ui_item_stats_diff_plus_format",
            "name": "ui_item_stats_pet_bonus_hp",
            "sprite": "UI_WW_Inventory/TooltipUnique",
            "tooltip_type": "special",
            "value_format": "ui_item_stats_plus_format"
          },
          "display_key": "ui_item_stats_pet_bonus_hp",
          "en": "Pet health",
          "zh": "宠物健康"
        }
      },
      "subcategory": "ring",
      "tags": [
        "ring1",
        "ring2",
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
      "image_key": "2326235ff84e51f800de6bd51235ae715babaa419c1d194da7377da43e125e66",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "动物 掌握 环",
        "name_en": "Animal Mastery ring",
        "description_zh": "拥有增强宠物特征的自然力量",
        "description_en": "Possesses natural power that enhances the pet's characteristics",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "史诗",
        "search_text": "wls2_battlepass6_ring_pet_2 动物 掌握 环 animal mastery ring 拥有增强宠物特征的自然力量 possesses natural power that enhances the pet's characteristics accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "pet_bonus_damage",
            "label": "宠物伤害加成",
            "value": 10,
            "unit": "",
            "display": "+10"
          },
          {
            "key": "pet_health_increment",
            "label": "宠物生命加成",
            "value": 200,
            "unit": "",
            "display": "+200"
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
