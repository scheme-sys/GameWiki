/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-equipment-14"] = {
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
      "bodypart": 15,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 15,
        "description": "inventory_stack_view_wls_xmas_green_pants_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_xmas_green_pants_description",
        "name": "inventory_stack_view_wls_xmas_green_pants_name",
        "rarity": "common",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_pants",
        "tags": [
          "legs",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls_xmas2019_green_pants",
      "localization": {
        "description_key": "inventory_stack_view_wls_xmas_green_pants_description",
        "en": {
          "description": "Warm holiday pants will protect against scoundrels and the cold",
          "full_description": "Warm holiday pants will protect against scoundrels and the cold",
          "name": "Santa's green pants"
        },
        "full_description_key": "inventory_stack_view_wls_xmas_green_pants_description",
        "name_key": "inventory_stack_view_wls_xmas_green_pants_name",
        "zh": {
          "description": "充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。",
          "full_description": "充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。",
          "name": "圣诞老人的绿色裤子"
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
                "wls2_resourse_primary_hide_3": 2,
                "wls2_resourse_secondary_cloth_1": 2
              },
              "result": {
                "inventory_stack_id": "wls_xmas2019_green_pants"
              },
              "type": "recycle"
            },
            "recipe_id": "wls_xmas2019_green_pants_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_pants",
      "stat_curves": {
        "armor": {
          "default": 55
        },
        "max_durability": {
          "default": 1150
        },
        "warm_modifier": {
          "default": 2.25
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
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 1,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "13f9f0b146e868612e7fff6eebaee2b42767623bdf51f67ed440e819a693b0d0",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞老人的绿色裤子",
        "name_en": "Santa's green pants",
        "description_zh": "充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。",
        "description_en": "Warm holiday pants will protect against scoundrels and the cold",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "普通",
        "search_text": "wls_xmas2019_green_pants 圣诞老人的绿色裤子 santa's green pants 充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。 warm holiday pants will protect against scoundrels and the cold armor 护甲 legs legs armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 55,
            "unit": "",
            "display": "55"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 1150,
            "unit": "",
            "display": "1150"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 2.25,
            "unit": "",
            "display": "2.25"
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
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls_xmas2019_handgun"
      },
      "item_id": "wls_xmas2019_handgun",
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
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_plank_1": 2
              },
              "result": {
                "inventory_stack_id": "wls_xmas2019_handgun"
              },
              "type": "recycle"
            },
            "recipe_id": "wls_xmas2019_handgun_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_handgun",
      "stat_curves": {
        "max_durability": {
          "default": 200,
          "max": 200
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
        "damage": 350,
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
      "weapon_id": "wls_xmas2019_handgun",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.2,
        "attack_damage_time": 0.3,
        "attack_ending_time": 0.9,
        "attack_range": 3.5,
        "attacks_per_second_inferred": 0.8333333333333334,
        "damage": 350,
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
        "search_text": "wls_xmas2019_handgun 五彩纸屑 confetti 采用雪花作为装饰的袖珍手枪 cute pistol decorated with a snowflake weapon 武器 pistol weapon weapon_storage quick festive wls_xmas2019_handgun"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 350,
            "unit": "",
            "display": "350"
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
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls_xmas2019_lollipike"
      },
      "item_id": "wls_xmas2019_lollipike",
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
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_2": 3,
                "wls2_resourse_secondary_leather_2": 3
              },
              "result": {
                "inventory_stack_id": "wls_xmas2019_lollipike"
              },
              "type": "recycle"
            },
            "recipe_id": "wls_xmas2019_lollipike_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_santa_lollipike",
      "stat_curves": {
        "max_durability": {
          "default": 100,
          "max": 100
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
        "attack_damage_time": 0.25,
        "attack_ending_time": 0.55,
        "attack_range": 1,
        "damage": 155,
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
      "weapon_id": "wls_xmas2019_lollipike",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 0.8,
        "attack_damage_time": 0.25,
        "attack_ending_time": 0.55,
        "attack_range": 1,
        "attacks_per_second_inferred": 1.25,
        "damage": 155,
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
        "search_text": "wls_xmas2019_lollipike 尖锐的棒棒糖 sharpened lollipop 可对敌人的健康造成非常非常巨大的影响！ very, very bad for your enemies health! weapon 武器 event_melee weapon weapon_storage quick festive wls_xmas2019_lollipike"
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
            "value": 100,
            "unit": "",
            "display": "100"
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
        "rarity": "common",
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
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls_xmas2019_red_boots",
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
      "rarity": "common",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_primary_hide_3": 2,
                "wls2_resourse_secondary_cloth_1": 2
              },
              "result": {
                "inventory_stack_id": "wls_xmas2019_red_boots"
              },
              "type": "recycle"
            },
            "recipe_id": "wls_xmas2019_red_boots_recycle"
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
          "default": 40
        },
        "max_durability": {
          "default": 1500
        },
        "move_speed_modifier": {
          "default": 0.06
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
      "tier": 1,
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
        "rarity_zh": "普通",
        "search_text": "wls_xmas2019_red_boots 圣诞老人的红色靴子 santa's red boots 温暖厚实的节日靴子，可帮助你在雪地上行走。 warm holiday boots will help to get through the snow armor 护甲 boots boots armor armor_storage festive"
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
            "value": 1500,
            "unit": "",
            "display": "1500"
          },
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.06,
            "unit": "%",
            "display": "+6%"
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
        "rarity": "common",
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
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls_xmas2019_red_hat",
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
      "rarity": "common",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_primary_hide_3": 2,
                "wls2_resourse_secondary_cloth_1": 2
              },
              "result": {
                "inventory_stack_id": "wls_xmas2019_red_hat"
              },
              "type": "recycle"
            },
            "recipe_id": "wls_xmas2019_red_hat_recycle"
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
          "default": 55
        },
        "max_durability": {
          "default": 1500
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
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 1,
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
        "rarity_zh": "普通",
        "search_text": "wls_xmas2019_red_hat 圣诞老人的红色毛帽 santa's red cap 有着华丽节庆外观的温暖毛帽，让你的耳朵不再受冻。 a warm cap with a festive look will not let your ears freeze. armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 55,
            "unit": "",
            "display": "55"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 1500,
            "unit": "",
            "display": "1500"
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
        "rarity": "common",
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
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls_xmas2019_red_jacket",
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
      "rarity": "common",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_primary_hide_3": 2,
                "wls2_resourse_secondary_cloth_1": 2
              },
              "result": {
                "inventory_stack_id": "wls_xmas2019_red_jacket"
              },
              "type": "recycle"
            },
            "recipe_id": "wls_xmas2019_red_jacket_recycle"
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
          "default": 110
        },
        "max_durability": {
          "default": 1500
        },
        "warm_modifier": {
          "default": 2.25
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
      "tier": 1,
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
        "rarity_zh": "普通",
        "search_text": "wls_xmas2019_red_jacket 圣诞老人的红色外套 santa's red jacket 结实耐寒的外套，能够承受敌人的攻击。 this jacket has protection from extreme cold and withstands attacks from opponents armor 护甲 body chest armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 110,
            "unit": "",
            "display": "110"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 1500,
            "unit": "",
            "display": "1500"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 2.25,
            "unit": "",
            "display": "2.25"
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
        "description": "inventory_stack_view_wls_xmas_red_pants_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_xmas_red_pants_description",
        "name": "inventory_stack_view_wls_xmas_red_pants_name",
        "rarity": "common",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_pants",
        "tags": [
          "legs",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls_xmas2019_red_pants",
      "localization": {
        "description_key": "inventory_stack_view_wls_xmas_red_pants_description",
        "en": {
          "description": "Warm holiday pants will protect against scoundrels and the cold",
          "full_description": "Warm holiday pants will protect against scoundrels and the cold",
          "name": "Santa's red pants"
        },
        "full_description_key": "inventory_stack_view_wls_xmas_red_pants_description",
        "name_key": "inventory_stack_view_wls_xmas_red_pants_name",
        "zh": {
          "description": "充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。",
          "full_description": "充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。",
          "name": "圣诞老人的红色裤子"
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
                "wls2_resourse_primary_hide_3": 2,
                "wls2_resourse_secondary_cloth_1": 2
              },
              "result": {
                "inventory_stack_id": "wls_xmas2019_red_pants"
              },
              "type": "recycle"
            },
            "recipe_id": "wls_xmas2019_red_pants_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_pants",
      "stat_curves": {
        "armor": {
          "default": 80
        },
        "max_durability": {
          "default": 1500
        },
        "warm_modifier": {
          "default": 2.25
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
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 1,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "d220312076e1a330731e2e7294b90e87b0ae6859fb8ccbe085fa7ba1b4cf7fdd",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞老人的红色裤子",
        "name_en": "Santa's red pants",
        "description_zh": "充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。",
        "description_en": "Warm holiday pants will protect against scoundrels and the cold",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "普通",
        "search_text": "wls_xmas2019_red_pants 圣诞老人的红色裤子 santa's red pants 充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。 warm holiday pants will protect against scoundrels and the cold armor 护甲 legs legs armor armor_storage festive"
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
            "value": 1500,
            "unit": "",
            "display": "1500"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 2.25,
            "unit": "",
            "display": "2.25"
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
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls_xmas2019_shotgun"
      },
      "item_id": "wls_xmas2019_shotgun",
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
                "inventory_stack_id": "wls_xmas2019_shotgun"
              },
              "type": "recycle"
            },
            "recipe_id": "wls_xmas2019_shotgun_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_santa_shotgun",
      "stat_curves": {
        "max_durability": {
          "default": 150,
          "max": 150
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
          "angle": 45,
          "radius": 4,
          "type": "cone"
        },
        "attack_damage_time": 0.25,
        "attack_ending_time": 1.25,
        "attack_range": 3.5,
        "damage": 350,
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
      "weapon_id": "wls_xmas2019_shotgun",
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
        "damage": 350,
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
        "search_text": "wls_xmas2019_shotgun 圣诞老人的枪 santa's gun 通常圣诞老人会给好孩子美好的礼物，但这次他为那些坏蛋准备了厉害的枪支。拥有范围效果。 santa always brings presents for good kids, but this year he's also made a gun for the bad ones! wide area of effect. weapon 武器 shotgun weapon weapon_storage quick festive wls_xmas2019_shotgun"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 350,
            "unit": "",
            "display": "350"
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
        "description": "inventory_stack_view_wls_santa_staff_description",
        "full_description": "inventory_stack_view_wls_santa_staff_description",
        "name": "inventory_stack_view_wls_santa_staff_name",
        "rarity": "common",
        "sorting_group_id": "weapon_melee_other_event",
        "sprite": "UI_WW_AlphaBinary03/wls_santa_staff",
        "tags": [
          "weapon",
          "weapon_storage",
          "quick"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip",
        "weapon_id": "wls_xmas2019_wooden_staff"
      },
      "item_id": "wls_xmas2019_wooden_staff",
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
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_ingot_3": 2,
                "wls2_resourse_secondary_plank_3": 4
              },
              "result": {
                "inventory_stack_id": "wls_xmas2019_wooden_staff"
              },
              "type": "recycle"
            },
            "recipe_id": "wls_xmas2019_wooden_staff_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_santa_staff",
      "stat_curves": {
        "max_durability": {
          "default": 60,
          "max": 60
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
        "attack_damage_time": 0.6,
        "attack_ending_time": 0.8,
        "attack_range": 2,
        "damage": 240,
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
      "weapon_id": "wls_xmas2019_wooden_staff",
      "weapon_summary": {
        "attack_action": {
          "type": "simple"
        },
        "attack_cycle_time_inferred": 1.4,
        "attack_damage_time": 0.6,
        "attack_ending_time": 0.8,
        "attack_range": 2,
        "attacks_per_second_inferred": 0.7142857142857143,
        "damage": 240,
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
        "search_text": "wls_xmas2019_wooden_staff 圣诞老人的拐杖 santa's staff 不仅能用来辅助行走，还能用来对抗不法之徒。 can be used not only for walking assistance, but for knocking down outlaws as well. weapon 武器 event_melee weapon weapon_storage quick wls_xmas2019_wooden_staff"
      },
      "numeric": {
        "summary": [
          {
            "key": "damage",
            "label": "伤害",
            "value": 240,
            "unit": "",
            "display": "240"
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
      "bodypart": 16,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 16,
        "description": "inventory_stack_view_wls_xmas_green_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_xmas_green_boots_description",
        "name": "inventory_stack_view_wls_xmas_green_boots_name",
        "rarity": "common",
        "sorting_group_id": "armor_boots",
        "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_boots",
        "tags": [
          "boots",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls_xmas_green_boots",
      "localization": {
        "description_key": "inventory_stack_view_wls_xmas_green_boots_description",
        "en": {
          "description": "Warm holiday boots will help to get through the snow.",
          "full_description": "Warm holiday boots will help to get through the snow.",
          "name": "Santa's green boots"
        },
        "full_description_key": "inventory_stack_view_wls_xmas_green_boots_description",
        "name_key": "inventory_stack_view_wls_xmas_green_boots_name",
        "zh": {
          "description": "温暖厚实的节日靴子，可帮助你在雪地上行走。",
          "full_description": "温暖厚实的节日靴子，可帮助你在雪地上行走。",
          "name": "圣诞老人的绿色靴子"
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
                "wls2_resourse_primary_hide_2": 2,
                "wls2_resourse_secondary_cloth_1": 1
              },
              "result": {
                "inventory_stack_id": "wls_xmas_green_boots"
              },
              "type": "recycle"
            },
            "recipe_id": "wls_xmas_green_boots_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_boots",
      "stat_curves": {
        "armor": {
          "default": 10
        },
        "max_durability": {
          "default": 1020
        },
        "move_speed_modifier": {
          "default": 0.06
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
      "tier": 1,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "8420d8dcdf845804f0543cb04b8de08e5e3a3316573cf9606d539d376b87ad07",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞老人的绿色靴子",
        "name_en": "Santa's green boots",
        "description_zh": "温暖厚实的节日靴子，可帮助你在雪地上行走。",
        "description_en": "Warm holiday boots will help to get through the snow.",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "普通",
        "search_text": "wls_xmas_green_boots 圣诞老人的绿色靴子 santa's green boots 温暖厚实的节日靴子，可帮助你在雪地上行走。 warm holiday boots will help to get through the snow. armor 护甲 boots boots armor armor_storage festive"
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
            "value": 1020,
            "unit": "",
            "display": "1020"
          },
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.06,
            "unit": "%",
            "display": "+6%"
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
        "description": "inventory_stack_view_wls_xmas_green_hat_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_xmas_green_hat_description",
        "name": "inventory_stack_view_wls_xmas_green_hat_name",
        "rarity": "common",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_hat",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls_xmas_green_hat",
      "localization": {
        "description_key": "inventory_stack_view_wls_xmas_green_hat_description",
        "en": {
          "description": "A warm cap with a festive look will not let your ears freeze.",
          "full_description": "A warm cap with a festive look will not let your ears freeze.",
          "name": "Santa's green cap"
        },
        "full_description_key": "inventory_stack_view_wls_xmas_green_hat_description",
        "name_key": "inventory_stack_view_wls_xmas_green_hat_name",
        "zh": {
          "description": "有着华丽节庆外观的温暖毛帽，让你的耳朵不再受冻。",
          "full_description": "有着华丽节庆外观的温暖毛帽，让你的耳朵不再受冻。",
          "name": "圣诞老人的绿色毛帽"
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
                "wls2_resourse_primary_hide_2": 2,
                "wls2_resourse_secondary_cloth_1": 1
              },
              "result": {
                "inventory_stack_id": "wls_xmas_green_hat"
              },
              "type": "recycle"
            },
            "recipe_id": "wls_xmas_green_hat_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_hat",
      "stat_curves": {
        "armor": {
          "default": 10
        },
        "max_durability": {
          "default": 1020
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
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 1,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "ed74abe9200be9cd494b710260922e9f98a121f7b593f15243328587d519c9c8",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞老人的绿色毛帽",
        "name_en": "Santa's green cap",
        "description_zh": "有着华丽节庆外观的温暖毛帽，让你的耳朵不再受冻。",
        "description_en": "A warm cap with a festive look will not let your ears freeze.",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "普通",
        "search_text": "wls_xmas_green_hat 圣诞老人的绿色毛帽 santa's green cap 有着华丽节庆外观的温暖毛帽，让你的耳朵不再受冻。 a warm cap with a festive look will not let your ears freeze. armor 护甲 head head armor armor_storage festive"
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
            "value": 1020,
            "unit": "",
            "display": "1020"
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
      "bodypart": 15,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 15,
        "description": "inventory_stack_view_wls_xmas_green_jacket_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_xmas_green_jacket_description",
        "name": "inventory_stack_view_wls_xmas_green_jacket_name",
        "rarity": "common",
        "sorting_group_id": "armor_body",
        "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_jacket",
        "tags": [
          "chest",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls_xmas_green_jacket",
      "localization": {
        "description_key": "inventory_stack_view_wls_xmas_green_jacket_description",
        "en": {
          "description": "This jacket with protection from extreme cold will also constrain attacks from opponents",
          "full_description": "This jacket with protection from extreme cold will also constrain attacks from opponents",
          "name": "Santa's green jacket"
        },
        "full_description_key": "inventory_stack_view_wls_xmas_green_jacket_description",
        "name_key": "inventory_stack_view_wls_xmas_green_jacket_name",
        "zh": {
          "description": "结实耐寒的外套，能够承受敌人的攻击。",
          "full_description": "结实耐寒的外套，能够承受敌人的攻击。",
          "name": "圣诞老人的绿色外套"
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
                "wls2_resourse_primary_hide_2": 2,
                "wls2_resourse_secondary_cloth_1": 1
              },
              "result": {
                "inventory_stack_id": "wls_xmas_green_jacket"
              },
              "type": "recycle"
            },
            "recipe_id": "wls_xmas_green_jacket_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_jacket",
      "stat_curves": {
        "armor": {
          "default": 25
        },
        "max_durability": {
          "default": 1020
        },
        "warm_modifier": {
          "default": 2.25
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
      "tier": 1,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "ecd1c33dc41a62b77a64fe947b9a7c1308c82a2aab31b6241103be10e4682597",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞老人的绿色外套",
        "name_en": "Santa's green jacket",
        "description_zh": "结实耐寒的外套，能够承受敌人的攻击。",
        "description_en": "This jacket with protection from extreme cold will also constrain attacks from opponents",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "普通",
        "search_text": "wls_xmas_green_jacket 圣诞老人的绿色外套 santa's green jacket 结实耐寒的外套，能够承受敌人的攻击。 this jacket with protection from extreme cold will also constrain attacks from opponents armor 护甲 body chest armor armor_storage festive"
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
            "value": 1020,
            "unit": "",
            "display": "1020"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 2.25,
            "unit": "",
            "display": "2.25"
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
      "bodypart": 15,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 15,
        "description": "inventory_stack_view_wls_xmas_green_pants_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_xmas_green_pants_description",
        "name": "inventory_stack_view_wls_xmas_green_pants_name",
        "rarity": "common",
        "sorting_group_id": "armor_legs",
        "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_pants",
        "tags": [
          "legs",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls_xmas_green_pants",
      "localization": {
        "description_key": "inventory_stack_view_wls_xmas_green_pants_description",
        "en": {
          "description": "Warm holiday pants will protect against scoundrels and the cold",
          "full_description": "Warm holiday pants will protect against scoundrels and the cold",
          "name": "Santa's green pants"
        },
        "full_description_key": "inventory_stack_view_wls_xmas_green_pants_description",
        "name_key": "inventory_stack_view_wls_xmas_green_pants_name",
        "zh": {
          "description": "充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。",
          "full_description": "充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。",
          "name": "圣诞老人的绿色裤子"
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
                "wls2_resourse_primary_hide_2": 2,
                "wls2_resourse_secondary_cloth_1": 1
              },
              "result": {
                "inventory_stack_id": "wls_xmas_green_pants"
              },
              "type": "recycle"
            },
            "recipe_id": "wls_xmas_green_pants_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_pants",
      "stat_curves": {
        "armor": {
          "default": 25
        },
        "max_durability": {
          "default": 1020
        },
        "warm_modifier": {
          "default": 2.25
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
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 1,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "13f9f0b146e868612e7fff6eebaee2b42767623bdf51f67ed440e819a693b0d0",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞老人的绿色裤子",
        "name_en": "Santa's green pants",
        "description_zh": "充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。",
        "description_en": "Warm holiday pants will protect against scoundrels and the cold",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "普通",
        "search_text": "wls_xmas_green_pants 圣诞老人的绿色裤子 santa's green pants 充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。 warm holiday pants will protect against scoundrels and the cold armor 护甲 legs legs armor armor_storage festive"
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
            "value": 1020,
            "unit": "",
            "display": "1020"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 2.25,
            "unit": "",
            "display": "2.25"
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
        "rarity": "common",
        "sorting_group_id": "armor_boots",
        "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_boots",
        "tags": [
          "boots",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls_xmas_red_boots",
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
      "rarity": "common",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_primary_hide_2": 2,
                "wls2_resourse_secondary_cloth_1": 1
              },
              "result": {
                "inventory_stack_id": "wls_xmas_red_boots"
              },
              "type": "recycle"
            },
            "recipe_id": "wls_xmas_red_boots_recycle"
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
          "default": 20
        },
        "max_durability": {
          "default": 1020
        },
        "move_speed_modifier": {
          "default": 0.06
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
      "tier": 1,
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
        "rarity_zh": "普通",
        "search_text": "wls_xmas_red_boots 圣诞老人的红色靴子 santa's red boots 温暖厚实的节日靴子，可帮助你在雪地上行走。 warm holiday boots will help to get through the snow armor 护甲 boots boots armor armor_storage festive"
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
            "value": 1020,
            "unit": "",
            "display": "1020"
          },
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.06,
            "unit": "%",
            "display": "+6%"
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
        "rarity": "common",
        "sorting_group_id": "armor_head",
        "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_hat",
        "tags": [
          "head",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls_xmas_red_hat",
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
      "rarity": "common",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_primary_hide_2": 2,
                "wls2_resourse_secondary_cloth_1": 1
              },
              "result": {
                "inventory_stack_id": "wls_xmas_red_hat"
              },
              "type": "recycle"
            },
            "recipe_id": "wls_xmas_red_hat_recycle"
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
          "default": 20
        },
        "max_durability": {
          "default": 1020
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
      "subcategory": "head",
      "tags": [
        "head",
        "armor",
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 1,
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
        "rarity_zh": "普通",
        "search_text": "wls_xmas_red_hat 圣诞老人的红色毛帽 santa's red cap 有着华丽节庆外观的温暖毛帽，让你的耳朵不再受冻。 a warm cap with a festive look will not let your ears freeze. armor 护甲 head head armor armor_storage festive"
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
            "value": 1020,
            "unit": "",
            "display": "1020"
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
        "rarity": "common",
        "sorting_group_id": "armor_body",
        "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_jacket",
        "tags": [
          "chest",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls_xmas_red_jacket",
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
      "rarity": "common",
      "recipe": {
        "direct": null,
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_primary_hide_2": 2,
                "wls2_resourse_secondary_cloth_1": 1
              },
              "result": {
                "inventory_stack_id": "wls_xmas_red_jacket"
              },
              "type": "recycle"
            },
            "recipe_id": "wls_xmas_red_jacket_recycle"
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
          "default": 40
        },
        "max_durability": {
          "default": 1020
        },
        "warm_modifier": {
          "default": 2.25
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
      "tier": 1,
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
        "rarity_zh": "普通",
        "search_text": "wls_xmas_red_jacket 圣诞老人的红色外套 santa's red jacket 结实耐寒的外套，能够承受敌人的攻击。 this jacket has protection from extreme cold and withstands attacks from opponents armor 护甲 body chest armor armor_storage festive"
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
            "value": 1020,
            "unit": "",
            "display": "1020"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 2.25,
            "unit": "",
            "display": "2.25"
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
        "description": "inventory_stack_view_wls_xmas_red_pants_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_xmas_red_pants_description",
        "name": "inventory_stack_view_wls_xmas_red_pants_name",
        "rarity": "common",
        "sorting_group_id": "armor_legs",
        "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_pants",
        "tags": [
          "legs",
          "armor",
          "armor_storage",
          "festive"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls_xmas_red_pants",
      "localization": {
        "description_key": "inventory_stack_view_wls_xmas_red_pants_description",
        "en": {
          "description": "Warm holiday pants will protect against scoundrels and the cold",
          "full_description": "Warm holiday pants will protect against scoundrels and the cold",
          "name": "Santa's red pants"
        },
        "full_description_key": "inventory_stack_view_wls_xmas_red_pants_description",
        "name_key": "inventory_stack_view_wls_xmas_red_pants_name",
        "zh": {
          "description": "充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。",
          "full_description": "充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。",
          "name": "圣诞老人的红色裤子"
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
                "wls2_resourse_primary_hide_2": 2,
                "wls2_resourse_secondary_cloth_1": 1
              },
              "result": {
                "inventory_stack_id": "wls_xmas_red_pants"
              },
              "type": "recycle"
            },
            "recipe_id": "wls_xmas_red_pants_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_pants",
      "stat_curves": {
        "armor": {
          "default": 40
        },
        "max_durability": {
          "default": 1020
        },
        "warm_modifier": {
          "default": 2.25
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
        "armor_storage",
        "festive"
      ],
      "throwing_item": null,
      "tier": 1,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "d220312076e1a330731e2e7294b90e87b0ae6859fb8ccbe085fa7ba1b4cf7fdd",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞老人的红色裤子",
        "name_en": "Santa's red pants",
        "description_zh": "充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。",
        "description_en": "Warm holiday pants will protect against scoundrels and the cold",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "普通",
        "search_text": "wls_xmas_red_pants 圣诞老人的红色裤子 santa's red pants 充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。 warm holiday pants will protect against scoundrels and the cold armor 护甲 legs legs armor armor_storage festive"
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
            "value": 1020,
            "unit": "",
            "display": "1020"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 2.25,
            "unit": "",
            "display": "2.25"
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
