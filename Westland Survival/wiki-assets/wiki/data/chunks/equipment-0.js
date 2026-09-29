/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-equipment-0"] = {
  "section": "equipment",
  "records": [
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
        "description": "inventory_stack_view_wls_clothes_shirt_1_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_shirt_1_description",
        "name": "inventory_stack_view_wls_clothes_shirt_1_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_shirt_1",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_1",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_shirt_1_description",
        "en": {
          "description": "Shirt is a mandatory wardrobe element of a true cowboy. ",
          "full_description": "Shirt is a mandatory wardrobe element of a true cowboy. ",
          "name": "Shirt"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_shirt_1_description",
        "name_key": "inventory_stack_view_wls_clothes_shirt_1_name",
        "zh": {
          "description": "真正的牛仔衣柜里必须得有一件衬衫。",
          "full_description": "真正的牛仔衣柜里必须得有一件衬衫。",
          "name": "衬衫"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_shirt_1",
      "stat_curves": {
        "armor": {
          "default": 10
        },
        "max_durability": {
          "default": 25
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "9c2bc3ebfc1059d1028b6b6123d7fc7116519636ce46b719c507134ce584dcc7",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "衬衫",
        "name_en": "Shirt",
        "description_zh": "真正的牛仔衣柜里必须得有一件衬衫。",
        "description_en": "Shirt is a mandatory wardrobe element of a true cowboy. ",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_body_1 衬衫 shirt 真正的牛仔衣柜里必须得有一件衬衫。 shirt is a mandatory wardrobe element of a true cowboy.  armor 护甲 body chest armor armor_storage"
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
            "value": 25,
            "unit": "",
            "display": "25"
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
      "bodypart": 1,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 1,
        "description": "inventory_stack_view_wls2_armor_body_1_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_1_common_description",
        "name": "inventory_stack_view_wls2_armor_body_1_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_shirt_1",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_1_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_1_common_description",
        "en": {
          "description": "Will protect you from the bites of small wild animals",
          "full_description": "Will protect you from the bites of small wild animals",
          "name": "Shirt"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_1_common_description",
        "name_key": "inventory_stack_view_wls2_armor_body_1_common_name",
        "zh": {
          "description": "使你免受小型野生动物啃咬",
          "full_description": "使你免受小型野生动物啃咬",
          "name": "衬衫"
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
                "inventory_stack_id": "wls2_armor_body_1_common"
              },
              "type": "workbench"
            },
            "recipe_id": "wls2_armor_body_1_common_ab_ftue"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_shirt_1",
      "stat_curves": {
        "armor": {
          "1": 18,
          "2": 19,
          "3": 21,
          "4": 23,
          "5": 25,
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "9c2bc3ebfc1059d1028b6b6123d7fc7116519636ce46b719c507134ce584dcc7",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "衬衫",
        "name_en": "Shirt",
        "description_zh": "使你免受小型野生动物啃咬",
        "description_en": "Will protect you from the bites of small wild animals",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_body_1_common 衬衫 shirt 使你免受小型野生动物啃咬 will protect you from the bites of small wild animals armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 18,
            "unit": "",
            "display": "18"
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
              "armor": 18,
              "max_durability": 150
            },
            "display": {
              "armor": "18",
              "max_durability": "150"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 19,
              "max_durability": 165
            },
            "display": {
              "armor": "19",
              "max_durability": "165"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 21,
              "max_durability": 180
            },
            "display": {
              "armor": "21",
              "max_durability": "180"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 23,
              "max_durability": 195
            },
            "display": {
              "armor": "23",
              "max_durability": "195"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 25,
              "max_durability": 210
            },
            "display": {
              "armor": "25",
              "max_durability": "210"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 26,
              "max_durability": 210
            },
            "display": {
              "armor": "26",
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
          "防御：6 级起每级增加 1，最高 1025。"
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
        "description": "inventory_stack_view_wls2_armor_body_1_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_1_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_body_1_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_vest_jacketed_1.5",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_1_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_1_uncommon_description",
        "en": {
          "description": "Every gentleman should own a vest",
          "full_description": "Every gentleman should own a vest",
          "name": "Waistcoat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_1_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_body_1_uncommon_name",
        "zh": {
          "description": "是绅士就该穿背心",
          "full_description": "是绅士就该穿背心",
          "name": "背心"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_leather_1": 7,
            "wls2_resourse_tertiary_clothroll_1": 1
          },
          "learn_exp": 200,
          "min_level": 0,
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_epic_t3_desc"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_body_1_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_ftue_ab_tutorial_trader_slot_1"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_vest_jacketed_1.5",
      "stat_curves": {
        "armor": {
          "1": 22,
          "2": 24,
          "3": 26,
          "4": 28,
          "5": 31,
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "ad3a2c57fd5ccadfae75effb5711647df04d390137173ba538b831a87f0a4f8e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "背心",
        "name_en": "Waistcoat",
        "description_zh": "是绅士就该穿背心",
        "description_en": "Every gentleman should own a vest",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_body_1_uncommon 背心 waistcoat 是绅士就该穿背心 every gentleman should own a vest armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 22,
            "unit": "",
            "display": "22"
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
              "armor": 22,
              "dexterity": 1,
              "max_durability": 180
            },
            "display": {
              "armor": "22",
              "dexterity": "+1",
              "max_durability": "180"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 24,
              "dexterity": 1,
              "max_durability": 195
            },
            "display": {
              "armor": "24",
              "dexterity": "+1",
              "max_durability": "195"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 26,
              "dexterity": 1,
              "max_durability": 210
            },
            "display": {
              "armor": "26",
              "dexterity": "+1",
              "max_durability": "210"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 28,
              "dexterity": 2,
              "max_durability": 225
            },
            "display": {
              "armor": "28",
              "dexterity": "+2",
              "max_durability": "225"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 31,
              "dexterity": 3,
              "max_durability": 240
            },
            "display": {
              "armor": "31",
              "dexterity": "+3",
              "max_durability": "240"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 32,
              "dexterity": 3,
              "max_durability": 240
            },
            "display": {
              "armor": "32",
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
          "防御：6 级起每级增加 1，最高 1031。"
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
        "description": "inventory_stack_view_wls_clothes_leather_jacket_2_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_leather_jacket_2_description",
        "name": "inventory_stack_view_wls_clothes_leather_jacket_2_name",
        "sorting_group_id": "armor_body",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_leather_jacket_2",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_2",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_leather_jacket_2_description",
        "en": {
          "description": "This robust leather jacket helps you not worry too much about the enemy attacks.",
          "full_description": "This robust leather jacket helps you not worry too much about the enemy attacks.",
          "name": "Leather jacket"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_leather_jacket_2_description",
        "name_key": "inventory_stack_view_wls_clothes_leather_jacket_2_name",
        "zh": {
          "description": "坚固的皮夹克可以让你不用过于担心敌人的攻击。",
          "full_description": "坚固的皮夹克可以让你不用过于担心敌人的攻击。",
          "name": "皮夹克"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_leather_jacket_2",
      "stat_curves": {
        "armor": {
          "default": 45
        },
        "max_durability": {
          "default": 37
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
      "tier": 2,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "5aba4b97bfc78e47e10af373d95f461b294a0e8a9eb77560b32d804ff05d86b3",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "皮夹克",
        "name_en": "Leather jacket",
        "description_zh": "坚固的皮夹克可以让你不用过于担心敌人的攻击。",
        "description_en": "This robust leather jacket helps you not worry too much about the enemy attacks.",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_body_2 皮夹克 leather jacket 坚固的皮夹克可以让你不用过于担心敌人的攻击。 this robust leather jacket helps you not worry too much about the enemy attacks. armor 护甲 body chest armor armor_storage"
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
            "value": 37,
            "unit": "",
            "display": "37"
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
        "description": "inventory_stack_view_wls2_armor_body_2_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_2_common_description",
        "name": "inventory_stack_view_wls2_armor_body_2_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_leather_jacket_2",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_2_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_2_common_description",
        "en": {
          "description": "This robust jacket helps you not worry too much about enemy attacks",
          "full_description": "This robust jacket helps you not worry too much about enemy attacks",
          "name": "Leather jacket"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_2_common_description",
        "name_key": "inventory_stack_view_wls2_armor_body_2_common_name",
        "zh": {
          "description": "坚固的皮夹克可以让你不用过于担心敌人的攻击",
          "full_description": "坚固的皮夹克可以让你不用过于担心敌人的攻击",
          "name": "皮夹克"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_2": 2,
            "wls2_resourse_secondary_leather_2": 5
          },
          "learn_exp": 200,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_body_2_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_75coins_dynamic_smuggler_offer_body_upgrade_2"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_leather_jacket_2",
      "stat_curves": {
        "armor": {
          "1": 35,
          "2": 39,
          "3": 42,
          "4": 46,
          "5": 49,
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
          "1": 390,
          "2": 425,
          "3": 460,
          "4": 490,
          "5": 525
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
      "image_key": "5aba4b97bfc78e47e10af373d95f461b294a0e8a9eb77560b32d804ff05d86b3",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "皮夹克",
        "name_en": "Leather jacket",
        "description_zh": "坚固的皮夹克可以让你不用过于担心敌人的攻击",
        "description_en": "This robust jacket helps you not worry too much about enemy attacks",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_body_2_common 皮夹克 leather jacket 坚固的皮夹克可以让你不用过于担心敌人的攻击 this robust jacket helps you not worry too much about enemy attacks armor 护甲 body chest armor armor_storage"
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
            "value": 390,
            "unit": "",
            "display": "390"
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
              "armor": 35,
              "max_durability": 390
            },
            "display": {
              "armor": "35",
              "max_durability": "390"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 39,
              "max_durability": 425
            },
            "display": {
              "armor": "39",
              "max_durability": "425"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 42,
              "max_durability": 460
            },
            "display": {
              "armor": "42",
              "max_durability": "460"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 46,
              "max_durability": 490
            },
            "display": {
              "armor": "46",
              "max_durability": "490"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 49,
              "max_durability": 525
            },
            "display": {
              "armor": "49",
              "max_durability": "525"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 50,
              "max_durability": 525
            },
            "display": {
              "armor": "50",
              "max_durability": "525"
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
          "防御：6 级起每级增加 1，最高 1049。"
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
        "description": "inventory_stack_view_wls2_armor_body_2_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_2_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_body_2_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_body_2_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_strong_leather_jacket_2.5",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_2_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_2_uncommon_description",
        "en": {
          "description": "Bronze rivets provide extra protection to this leather jacket",
          "full_description": "Bronze rivets provide extra protection to this leather jacket",
          "name": "Sturdy jacket"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_2_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_body_2_uncommon_name",
        "zh": {
          "description": "金属板为皮夹克添加了额外的保护",
          "full_description": "金属板为皮夹克添加了额外的保护",
          "name": "结实的夹克"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_2": 1,
            "wls2_resourse_secondary_leather_2": 7,
            "wls2_resourse_tertiary_clothroll_2": 1
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_strong_leather_jacket_2.5",
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
        "dexterity": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 2,
          "5": 3
        },
        "max_durability": {
          "1": 540,
          "2": 590,
          "3": 640,
          "4": 690,
          "5": 740
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
      "image_key": "5c73d3fe35a85213de374f29a67629b3b3d10de7c56ea6eeea8c89e76cde13c3",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "结实的夹克",
        "name_en": "Sturdy jacket",
        "description_zh": "金属板为皮夹克添加了额外的保护",
        "description_en": "Bronze rivets provide extra protection to this leather jacket",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_body_2_uncommon 结实的夹克 sturdy jacket 金属板为皮夹克添加了额外的保护 bronze rivets provide extra protection to this leather jacket armor 护甲 body chest armor armor_storage"
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
            "value": 540,
            "unit": "",
            "display": "540"
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
              "armor": 44,
              "dexterity": 1,
              "max_durability": 540
            },
            "display": {
              "armor": "44",
              "dexterity": "+1",
              "max_durability": "540"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 48,
              "dexterity": 1,
              "max_durability": 590
            },
            "display": {
              "armor": "48",
              "dexterity": "+1",
              "max_durability": "590"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 53,
              "dexterity": 1,
              "max_durability": 640
            },
            "display": {
              "armor": "53",
              "dexterity": "+1",
              "max_durability": "640"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 57,
              "dexterity": 2,
              "max_durability": 690
            },
            "display": {
              "armor": "57",
              "dexterity": "+2",
              "max_durability": "690"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 61,
              "dexterity": 3,
              "max_durability": 740
            },
            "display": {
              "armor": "61",
              "dexterity": "+3",
              "max_durability": "740"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 62,
              "dexterity": 3,
              "max_durability": 740
            },
            "display": {
              "armor": "62",
              "dexterity": "+3",
              "max_durability": "740"
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
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 7,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 7,
        "description": "inventory_stack_view_wls_clothes_fur_jacket_2_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_fur_jacket_2_description",
        "name": "inventory_stack_view_wls_clothes_fur_jacket_2_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_fur_jacket_2",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_3",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_fur_jacket_2_description",
        "en": {
          "description": "Jacket with a thick fur designed to protect you from severely cold weather",
          "full_description": "Jacket with a thick fur designed to protect you from severely cold weather",
          "name": "Fur jacket"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_fur_jacket_2_description",
        "name_key": "inventory_stack_view_wls_clothes_fur_jacket_2_name",
        "zh": {
          "description": "带有厚重毛皮的夹克，用来抵御极其严寒的天气。",
          "full_description": "带有厚重毛皮的夹克，用来抵御极其严寒的天气。",
          "name": "毛皮夹克"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_fur_jacket_2",
      "stat_curves": {
        "armor": {
          "default": 105
        },
        "max_durability": {
          "default": 50
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
      "image_key": "e2a31a2b718fed98a3678ab8c3643b7235a8f507f7ae1eea6e08013ddf0b03f1",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "毛皮夹克",
        "name_en": "Fur jacket",
        "description_zh": "带有厚重毛皮的夹克，用来抵御极其严寒的天气。",
        "description_en": "Jacket with a thick fur designed to protect you from severely cold weather",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_body_3 毛皮夹克 fur jacket 带有厚重毛皮的夹克，用来抵御极其严寒的天气。 jacket with a thick fur designed to protect you from severely cold weather armor 护甲 body chest armor armor_storage"
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
            "value": 50,
            "unit": "",
            "display": "50"
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
        "description": "inventory_stack_view_wls2_armor_body_3_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_3_common_description",
        "name": "inventory_stack_view_wls2_armor_body_3_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_body_3_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_fur_jacket_2",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_3_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_3_common_description",
        "en": {
          "description": "Jacket with thick fur designed to protect you from severely cold weather",
          "full_description": "Jacket with thick fur designed to protect you from severely cold weather",
          "name": "Fur coat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_3_common_description",
        "name_key": "inventory_stack_view_wls2_armor_body_3_common_name",
        "zh": {
          "description": "带有厚重毛皮的夹克，用来抵御极其严寒的天气",
          "full_description": "带有厚重毛皮的夹克，用来抵御极其严寒的天气",
          "name": "毛皮大衣"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_3": 2,
            "wls2_resourse_secondary_leather_3": 5
          },
          "learn_exp": 400,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_body_3_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_100coins_dynamic_smuggler_offer_body_3"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_body_3_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_warmclothing_trader_offer_body_t3_common"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_fur_jacket_2",
      "stat_curves": {
        "armor": {
          "1": 70,
          "2": 77,
          "3": 84,
          "4": 91,
          "5": 98,
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
          "1": 870,
          "2": 960,
          "3": 1060,
          "4": 1130,
          "5": 1200
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "e2a31a2b718fed98a3678ab8c3643b7235a8f507f7ae1eea6e08013ddf0b03f1",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "毛皮大衣",
        "name_en": "Fur coat",
        "description_zh": "带有厚重毛皮的夹克，用来抵御极其严寒的天气",
        "description_en": "Jacket with thick fur designed to protect you from severely cold weather",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_body_3_common 毛皮大衣 fur coat 带有厚重毛皮的夹克，用来抵御极其严寒的天气 jacket with thick fur designed to protect you from severely cold weather armor 护甲 body chest armor armor_storage"
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
            "value": 870,
            "unit": "",
            "display": "870"
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
              "armor": 70,
              "max_durability": 870
            },
            "display": {
              "armor": "70",
              "max_durability": "870"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 77,
              "max_durability": 960
            },
            "display": {
              "armor": "77",
              "max_durability": "960"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 84,
              "max_durability": 1060
            },
            "display": {
              "armor": "84",
              "max_durability": "1060"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 91,
              "max_durability": 1130
            },
            "display": {
              "armor": "91",
              "max_durability": "1130"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 98,
              "max_durability": 1200
            },
            "display": {
              "armor": "98",
              "max_durability": "1200"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 99,
              "max_durability": 1200
            },
            "display": {
              "armor": "99",
              "max_durability": "1200"
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
          "防御：6 级起每级增加 1，最高 1098。"
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
        "description": "wls2_armor_body_3_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_head_3_epic_description",
        "name": "wls2_armor_body_3_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_body_upgrade_3_icon",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_3_epic",
      "localization": {
        "description_key": "wls2_armor_body_3_epic_description",
        "en": {
          "description": "A well-made hunting jacket that will keep you warm while lurking in ambush.",
          "full_description": "A sturdy hunting hat that protects your head from the scorching heat in the mountains.",
          "name": "Mountain hunter jacket"
        },
        "full_description_key": "wls2_armor_head_3_epic_description",
        "name_key": "wls2_armor_body_3_epic_name",
        "zh": {
          "description": "一件精致的打猎夹克。穿上它，在暗处埋伏时也不会觉得冷。",
          "full_description": "这顶结实的打猎帽可以让您的头部抵抗山里的酷热。",
          "name": "山岭猎人夹克"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 1,
            "wls2_resourse_fourfold_nails_3": 2,
            "wls2_resourse_secondary_leather_3": 10,
            "wls2_resourse_tertiary_clothroll_3": 2
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
                "inventory_stack_id": "wls2_armor_body_3_epic",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_t3_epic_body"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_easter_24_currency_egg": 500
              },
              "result": {
                "inventory_stack_id": "wls2_armor_body_3_epic",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter_22_trader_t3_epic_body"
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
            "stack_id": "wls2_armor_body_3_epic",
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
            "stack_id": "wls2_armor_body_3_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_body_upgrade_3_icon",
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
      "image_key": "1ed842f84fb89d1796b03a4d50249c726b381c89dd91217f5e0bd04a13252abb",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "山岭猎人夹克",
        "name_en": "Mountain hunter jacket",
        "description_zh": "这顶结实的打猎帽可以让您的头部抵抗山里的酷热。",
        "description_en": "A sturdy hunting hat that protects your head from the scorching heat in the mountains.",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_body_3_epic 山岭猎人夹克 mountain hunter jacket 这顶结实的打猎帽可以让您的头部抵抗山里的酷热。 a sturdy hunting hat that protects your head from the scorching heat in the mountains. armor 护甲 body chest armor armor_storage"
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
        "description": "inventory_stack_view_wls2_armor_body_3_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_3_rare_description",
        "name": "inventory_stack_view_wls2_armor_body_3_rare_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_body_3_rare_name_with_wrapping",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_fur_jacket_rare",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_3_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_3_rare_description",
        "en": {
          "description": "Makes you look like a bear",
          "full_description": "Makes you look like a bear",
          "name": "Bear fur coat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_3_rare_description",
        "name_key": "inventory_stack_view_wls2_armor_body_3_rare_name",
        "zh": {
          "description": "使你看起来像一只熊",
          "full_description": "使你看起来像一只熊",
          "name": "熊皮大衣"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 2,
            "wls2_resourse_secondary_leather_3": 10,
            "wls2_resourse_tertiary_clothroll_3": 2
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
            "stack_id": "wls2_armor_body_3_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_fur_jacket_rare",
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
          "1": 1860,
          "2": 2040,
          "3": 2230,
          "4": 2410,
          "5": 2600
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "4c1eaa8017cb5dd7ba238ee8fa526e734489f4c26c428681ff40d5f64f8e48c8",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "熊皮大衣",
        "name_en": "Bear fur coat",
        "description_zh": "使你看起来像一只熊",
        "description_en": "Makes you look like a bear",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_body_3_rare 熊皮大衣 bear fur coat 使你看起来像一只熊 makes you look like a bear armor 护甲 body chest armor armor_storage"
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
            "value": 1860,
            "unit": "",
            "display": "1860"
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
              "armor": 158,
              "dexterity": 2,
              "health_increment": 25,
              "max_durability": 1860
            },
            "display": {
              "armor": "158",
              "dexterity": "+2",
              "health_increment": "+25",
              "max_durability": "1860"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 173,
              "dexterity": 3,
              "health_increment": 30,
              "max_durability": 2040
            },
            "display": {
              "armor": "173",
              "dexterity": "+3",
              "health_increment": "+30",
              "max_durability": "2040"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 189,
              "dexterity": 4,
              "health_increment": 35,
              "max_durability": 2230
            },
            "display": {
              "armor": "189",
              "dexterity": "+4",
              "health_increment": "+35",
              "max_durability": "2230"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 205,
              "dexterity": 5,
              "health_increment": 40,
              "max_durability": 2410
            },
            "display": {
              "armor": "205",
              "dexterity": "+5",
              "health_increment": "+40",
              "max_durability": "2410"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 221,
              "dexterity": 6,
              "health_increment": 45,
              "max_durability": 2600
            },
            "display": {
              "armor": "221",
              "dexterity": "+6",
              "health_increment": "+45",
              "max_durability": "2600"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 222,
              "dexterity": 6,
              "health_increment": 45,
              "max_durability": 2600
            },
            "display": {
              "armor": "222",
              "dexterity": "+6",
              "health_increment": "+45",
              "max_durability": "2600"
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
        "description": "inventory_stack_view_wls2_armor_body_3_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_3_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_body_3_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_body_3_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/armor_body_upgrade_3",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_3_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_3_uncommon_description",
        "en": {
          "description": "Not only will it warm you up on a cold day, it will also protect you from the enemy",
          "full_description": "Not only will it warm you up on a cold day, it will also protect you from the enemy",
          "name": "Winter coat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_3_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_body_3_uncommon_name",
        "zh": {
          "description": "不仅能让你在寒冷的日子里暖和起来，还能保护你免受敌人的伤害",
          "full_description": "不仅能让你在寒冷的日子里暖和起来，还能保护你免受敌人的伤害",
          "name": "冬季大衣"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 1,
            "wls2_resourse_secondary_leather_3": 7,
            "wls2_resourse_tertiary_clothroll_3": 1
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
                "inventory_stack_id": "wls2_armor_body_3_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_warmclothing_trader_offer_body_t3_uncommon"
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
            "stack_id": "wls2_armor_body_3_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary03/armor_body_upgrade_3",
      "stat_curves": {
        "armor": {
          "1": 88,
          "2": 96,
          "3": 105,
          "4": 114,
          "5": 123,
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
          "1": 1360,
          "2": 1500,
          "3": 1640,
          "4": 1770,
          "5": 1910
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "9c926589931a8beceaa005c94e2a5a7a8069d0dcbcfb2d5baaab49b7dc232849",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "冬季大衣",
        "name_en": "Winter coat",
        "description_zh": "不仅能让你在寒冷的日子里暖和起来，还能保护你免受敌人的伤害",
        "description_en": "Not only will it warm you up on a cold day, it will also protect you from the enemy",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_body_3_uncommon 冬季大衣 winter coat 不仅能让你在寒冷的日子里暖和起来，还能保护你免受敌人的伤害 not only will it warm you up on a cold day, it will also protect you from the enemy armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 88,
            "unit": "",
            "display": "88"
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
              "armor": 88,
              "dexterity": 1,
              "max_durability": 1360
            },
            "display": {
              "armor": "88",
              "dexterity": "+1",
              "max_durability": "1360"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 96,
              "dexterity": 1,
              "max_durability": 1500
            },
            "display": {
              "armor": "96",
              "dexterity": "+1",
              "max_durability": "1500"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 105,
              "dexterity": 1,
              "max_durability": 1640
            },
            "display": {
              "armor": "105",
              "dexterity": "+1",
              "max_durability": "1640"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 114,
              "dexterity": 2,
              "max_durability": 1770
            },
            "display": {
              "armor": "114",
              "dexterity": "+2",
              "max_durability": "1770"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 123,
              "dexterity": 3,
              "max_durability": 1910
            },
            "display": {
              "armor": "123",
              "dexterity": "+3",
              "max_durability": "1910"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 124,
              "dexterity": 3,
              "max_durability": 1910
            },
            "display": {
              "armor": "124",
              "dexterity": "+3",
              "max_durability": "1910"
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
          "防御：6 级起每级增加 1，最高 1123。"
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
        "description": "inventory_stack_view_wls_clothes_reinforced_jacket_3_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_reinforced_jacket_3_description",
        "name": "inventory_stack_view_wls_clothes_reinforced_jacket_3_name",
        "sorting_group_id": "armor_body",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_reinforced_jacket_3",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_4",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_reinforced_jacket_3_description",
        "en": {
          "description": "You are almost invulnerable in this metal plated jacket",
          "full_description": "You are almost invulnerable in this metal plated jacket",
          "name": "Armored jacket"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_reinforced_jacket_3_description",
        "name_key": "inventory_stack_view_wls_clothes_reinforced_jacket_3_name",
        "zh": {
          "description": "穿上这件带有金属板的夹克，你几乎是无敌的。",
          "full_description": "穿上这件带有金属板的夹克，你几乎是无敌的。",
          "name": "装甲夹克"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_reinforced_jacket_3",
      "stat_curves": {
        "armor": {
          "default": 210
        },
        "max_durability": {
          "default": 62
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
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "fbd84796e422f050b37703267b167f07f7f5db3ff3075057256abbff165e06b4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "装甲夹克",
        "name_en": "Armored jacket",
        "description_zh": "穿上这件带有金属板的夹克，你几乎是无敌的。",
        "description_en": "You are almost invulnerable in this metal plated jacket",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_body_4 装甲夹克 armored jacket 穿上这件带有金属板的夹克，你几乎是无敌的。 you are almost invulnerable in this metal plated jacket armor 护甲 body chest armor armor_storage"
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
            "value": 62,
            "unit": "",
            "display": "62"
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
        "description": "inventory_stack_view_wls2_armor_body_4_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_4_common_description",
        "name": "inventory_stack_view_wls2_armor_body_4_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_body_4_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls2_armor_body_4_icon",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_4_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_4_common_description",
        "en": {
          "description": "Rain or shine, this leather jacket stays comfortable",
          "full_description": "Rain or shine, this leather jacket stays comfortable",
          "name": "Cowboy jacket"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_4_common_description",
        "name_key": "inventory_stack_view_wls2_armor_body_4_common_name",
        "zh": {
          "description": "不论晴雨，这件皮夹克穿起来都很舒服。",
          "full_description": "不论晴雨，这件皮夹克穿起来都很舒服。",
          "name": "牛仔夹克"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_4": 2,
            "wls2_resourse_secondary_leather_4": 5
          },
          "learn_exp": 800,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_body_4_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_6"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_body_4_icon",
      "stat_curves": {
        "armor": {
          "1": 140,
          "2": 154,
          "3": 168,
          "4": 182,
          "5": 196,
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
          "1": 2250,
          "2": 2490,
          "3": 2710,
          "4": 2940,
          "5": 3160
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
      "image_key": "35a5b90d866f86ff51ca51c9bc616c9eea859266fbe865d35ae4acfae998c105",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "牛仔夹克",
        "name_en": "Cowboy jacket",
        "description_zh": "不论晴雨，这件皮夹克穿起来都很舒服。",
        "description_en": "Rain or shine, this leather jacket stays comfortable",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_body_4_common 牛仔夹克 cowboy jacket 不论晴雨，这件皮夹克穿起来都很舒服。 rain or shine, this leather jacket stays comfortable armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 140,
            "unit": "",
            "display": "140"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 2250,
            "unit": "",
            "display": "2250"
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
              "armor": 140,
              "max_durability": 2250
            },
            "display": {
              "armor": "140",
              "max_durability": "2250"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 154,
              "max_durability": 2490
            },
            "display": {
              "armor": "154",
              "max_durability": "2490"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 168,
              "max_durability": 2710
            },
            "display": {
              "armor": "168",
              "max_durability": "2710"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 182,
              "max_durability": 2940
            },
            "display": {
              "armor": "182",
              "max_durability": "2940"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 196,
              "max_durability": 3160
            },
            "display": {
              "armor": "196",
              "max_durability": "3160"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 197,
              "max_durability": 3160
            },
            "display": {
              "armor": "197",
              "max_durability": "3160"
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
          "防御：6 级起每级增加 1，最高 1196。"
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
      "bodypart": 29,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 29,
        "description": "wls2_armor_body_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_body_4_epic_description",
        "name": "wls2_armor_body_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_body_4_epic_icon",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_4_epic",
      "localization": {
        "description_key": "wls2_armor_body_4_epic_description",
        "en": {
          "description": "Durable, moisture and wind-resistant coat. However, it's not recommended to wear in freezing cold weather.",
          "full_description": "Durable, moisture and wind-resistant coat. However, it's not recommended to wear in freezing cold weather.",
          "name": "Rubberized coat"
        },
        "full_description_key": "wls2_armor_body_4_epic_description",
        "name_key": "wls2_armor_body_4_epic_name",
        "zh": {
          "description": "这件外套不仅耐用，而且防潮又防风。但是，不建议在寒冷的天气下穿着。",
          "full_description": "这件外套不仅耐用，而且防潮又防风。但是，不建议在寒冷的天气下穿着。",
          "name": "橡胶外套"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 2,
            "wls2_resourse_fourfold_nails_4": 2,
            "wls2_resourse_secondary_leather_4": 10,
            "wls2_resourse_tertiary_clothroll_4": 2
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
            "stack_id": "wls2_armor_body_4_epic",
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
            "stack_id": "wls2_armor_body_4_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_body_4_epic_icon",
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
        "evasion": {
          "1": 0.01,
          "2": 0.02,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05
        },
        "max_durability": {
          "1": 8600,
          "2": 9460,
          "3": 10320,
          "4": 11200,
          "5": 12000
        },
        "reduced_detection_radius": {
          "1": 0.05,
          "2": 0.07,
          "3": 0.09,
          "4": 0.12,
          "5": 0.15
        },
        "warm_modifier": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1
        },
        "water_pressure_resistance": {
          "1": 0.06,
          "2": 0.06,
          "3": 0.06,
          "4": 0.06,
          "5": 0.06
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_15"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_25"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
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
      "image_key": "a57a6ae19258cc6b8a6a03f10775107b01d7da3cdecc9dd973c7cc47cccad06f",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "橡胶外套",
        "name_en": "Rubberized coat",
        "description_zh": "这件外套不仅耐用，而且防潮又防风。但是，不建议在寒冷的天气下穿着。",
        "description_en": "Durable, moisture and wind-resistant coat. However, it's not recommended to wear in freezing cold weather.",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_body_4_epic 橡胶外套 rubberized coat 这件外套不仅耐用，而且防潮又防风。但是，不建议在寒冷的天气下穿着。 durable, moisture and wind-resistant coat. however, it's not recommended to wear in freezing cold weather. armor 护甲 body chest armor armor_storage"
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
            "value": 8600,
            "unit": "",
            "display": "8600"
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
          },
          {
            "key": "water_pressure_resistance",
            "label": "沼泽减速",
            "value": 0.06,
            "unit": "%",
            "display": "-6%"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 420,
              "dexterity": 2,
              "evasion": 0.01,
              "max_durability": 8600,
              "reduced_detection_radius": 0.05
            },
            "display": {
              "armor": "420",
              "dexterity": "+2",
              "evasion": "+1%",
              "max_durability": "8600",
              "reduced_detection_radius": "+5%"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 462,
              "dexterity": 4,
              "evasion": 0.02,
              "max_durability": 9460,
              "reduced_detection_radius": 0.07
            },
            "display": {
              "armor": "462",
              "dexterity": "+4",
              "evasion": "+2%",
              "max_durability": "9460",
              "reduced_detection_radius": "+7%"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 504,
              "dexterity": 6,
              "evasion": 0.03,
              "max_durability": 10320,
              "reduced_detection_radius": 0.09
            },
            "display": {
              "armor": "504",
              "dexterity": "+6",
              "evasion": "+3%",
              "max_durability": "10320",
              "reduced_detection_radius": "+9%"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 546,
              "dexterity": 8,
              "evasion": 0.04,
              "max_durability": 11200,
              "reduced_detection_radius": 0.12
            },
            "display": {
              "armor": "546",
              "dexterity": "+8",
              "evasion": "+4%",
              "max_durability": "11200",
              "reduced_detection_radius": "+12%"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 588,
              "dexterity": 10,
              "evasion": 0.05,
              "max_durability": 12000,
              "reduced_detection_radius": 0.15
            },
            "display": {
              "armor": "588",
              "dexterity": "+10",
              "evasion": "+5%",
              "max_durability": "12000",
              "reduced_detection_radius": "+15%"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 589,
              "dexterity": 10,
              "evasion": 0.05,
              "max_durability": 12000,
              "reduced_detection_radius": 0.15
            },
            "display": {
              "armor": "589",
              "dexterity": "+10",
              "evasion": "+5%",
              "max_durability": "12000",
              "reduced_detection_radius": "+15%"
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
        "description": "inventory_stack_view_wls2_armor_body_4_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_4_rare_description",
        "name": "inventory_stack_view_wls2_armor_body_4_rare_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_body_4_rare_name_with_wrapping",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls2_armor_body_4_rare_icon",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_4_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_4_rare_description",
        "en": {
          "description": "You will look like a winner in this expensive coat",
          "full_description": "You will look like a winner in this expensive coat",
          "name": "Gunslinger jacket"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_4_rare_description",
        "name_key": "inventory_stack_view_wls2_armor_body_4_rare_name",
        "zh": {
          "description": "穿上这件贵气的大衣，你就是人生赢家",
          "full_description": "穿上这件贵气的大衣，你就是人生赢家",
          "name": "枪手夹克"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_4": 2,
            "wls2_resourse_secondary_leather_4": 10,
            "wls2_resourse_tertiary_clothroll_4": 2
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
                "inventory_stack_id": "wls2_armor_body_4_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_8"
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
            "stack_id": "wls2_armor_body_4_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_body_4_rare_icon",
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
          "1": 6140,
          "2": 6750,
          "3": 7370,
          "4": 7980,
          "5": 8590
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "7e7d7acdb1a4c7dd625f78c4b3ac9f06d3793245f9f61b8fd518a06a369809dc",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "枪手夹克",
        "name_en": "Gunslinger jacket",
        "description_zh": "穿上这件贵气的大衣，你就是人生赢家",
        "description_en": "You will look like a winner in this expensive coat",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_body_4_rare 枪手夹克 gunslinger jacket 穿上这件贵气的大衣，你就是人生赢家 you will look like a winner in this expensive coat armor 护甲 body chest armor armor_storage"
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
            "value": 6140,
            "unit": "",
            "display": "6140"
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
              "armor": 315,
              "dexterity": 2,
              "max_durability": 6140,
              "reduced_detection_radius": 0.06
            },
            "display": {
              "armor": "315",
              "dexterity": "+2",
              "max_durability": "6140",
              "reduced_detection_radius": "+6%"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 347,
              "dexterity": 3,
              "max_durability": 6750,
              "reduced_detection_radius": 0.07
            },
            "display": {
              "armor": "347",
              "dexterity": "+3",
              "max_durability": "6750",
              "reduced_detection_radius": "+7%"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 378,
              "dexterity": 4,
              "max_durability": 7370,
              "reduced_detection_radius": 0.08
            },
            "display": {
              "armor": "378",
              "dexterity": "+4",
              "max_durability": "7370",
              "reduced_detection_radius": "+8%"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 410,
              "dexterity": 5,
              "max_durability": 7980,
              "reduced_detection_radius": 0.09
            },
            "display": {
              "armor": "410",
              "dexterity": "+5",
              "max_durability": "7980",
              "reduced_detection_radius": "+9%"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 441,
              "dexterity": 6,
              "max_durability": 8590,
              "reduced_detection_radius": 0.1
            },
            "display": {
              "armor": "441",
              "dexterity": "+6",
              "max_durability": "8590",
              "reduced_detection_radius": "+10%"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 442,
              "dexterity": 6,
              "max_durability": 8590,
              "reduced_detection_radius": 0.1
            },
            "display": {
              "armor": "442",
              "dexterity": "+6",
              "max_durability": "8590",
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
        "description": "inventory_stack_view_wls2_armor_body_4_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_4_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_body_4_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_body_4_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls2_armor_body_upgrade_4_icon",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_4_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_4_uncommon_description",
        "en": {
          "description": "Practical coat for a true ranger",
          "full_description": "Practical coat for a true ranger",
          "name": "Ranger coat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_4_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_body_4_uncommon_name",
        "zh": {
          "description": "深受硬核游侠喜爱的实用型大衣",
          "full_description": "深受硬核游侠喜爱的实用型大衣",
          "name": "游侠大衣"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_4": 1,
            "wls2_resourse_secondary_leather_4": 7,
            "wls2_resourse_tertiary_clothroll_4": 1
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
                "inventory_stack_id": "wls2_armor_body_4_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_7"
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
            "stack_id": "wls2_armor_body_4_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_body_upgrade_4_icon",
      "stat_curves": {
        "armor": {
          "1": 175,
          "2": 193,
          "3": 210,
          "4": 228,
          "5": 245,
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
          "1": 3400,
          "2": 3740,
          "3": 4080,
          "4": 4420,
          "5": 4760
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
      "image_key": "93c360bc5f631f3c1f46d906b9f9d42b2e6b21dce2a500150526ed52383188fb",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "游侠大衣",
        "name_en": "Ranger coat",
        "description_zh": "深受硬核游侠喜爱的实用型大衣",
        "description_en": "Practical coat for a true ranger",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_body_4_uncommon 游侠大衣 ranger coat 深受硬核游侠喜爱的实用型大衣 practical coat for a true ranger armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 175,
            "unit": "",
            "display": "175"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 3400,
            "unit": "",
            "display": "3400"
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
              "armor": 175,
              "dexterity": 1,
              "max_durability": 3400
            },
            "display": {
              "armor": "175",
              "dexterity": "+1",
              "max_durability": "3400"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 193,
              "dexterity": 1,
              "max_durability": 3740
            },
            "display": {
              "armor": "193",
              "dexterity": "+1",
              "max_durability": "3740"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 210,
              "dexterity": 1,
              "max_durability": 4080
            },
            "display": {
              "armor": "210",
              "dexterity": "+1",
              "max_durability": "4080"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 228,
              "dexterity": 2,
              "max_durability": 4420
            },
            "display": {
              "armor": "228",
              "dexterity": "+2",
              "max_durability": "4420"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 245,
              "dexterity": 3,
              "max_durability": 4760
            },
            "display": {
              "armor": "245",
              "dexterity": "+3",
              "max_durability": "4760"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 246,
              "dexterity": 3,
              "max_durability": 4760
            },
            "display": {
              "armor": "246",
              "dexterity": "+3",
              "max_durability": "4760"
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
          "防御：6 级起每级增加 1，最高 1245。"
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
        "description": "inventory_stack_view_Armor_body_5_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_Armor_body_5_description",
        "name": "inventory_stack_view_Armor_body_5_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_reinforced_jacket_3",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_5",
      "localization": {
        "description_key": "inventory_stack_view_Armor_body_5_description",
        "en": {
          "description": "A real cowboy can be recognized by his clothes. Stylish and comfortable, this jacket is designed to conquer the Wild West.",
          "full_description": "A real cowboy can be recognized by his clothes. Stylish and comfortable, this jacket is designed to conquer the Wild West.",
          "name": "Ranger jacket"
        },
        "full_description_key": "inventory_stack_view_Armor_body_5_description",
        "name_key": "inventory_stack_view_Armor_body_5_name",
        "zh": {
          "description": "真正的牛仔会穿着既时髦又舒适的标志性服装。这件夹克就是为了征服狂野西部而生。",
          "full_description": "真正的牛仔会穿着既时髦又舒适的标志性服装。这件夹克就是为了征服狂野西部而生。",
          "name": "游侠夹克"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_reinforced_jacket_3",
      "stat_curves": {
        "armor": {
          "default": 420
        },
        "max_durability": {
          "default": 75
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
      "tier": 5,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "fbd84796e422f050b37703267b167f07f7f5db3ff3075057256abbff165e06b4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "游侠夹克",
        "name_en": "Ranger jacket",
        "description_zh": "真正的牛仔会穿着既时髦又舒适的标志性服装。这件夹克就是为了征服狂野西部而生。",
        "description_en": "A real cowboy can be recognized by his clothes. Stylish and comfortable, this jacket is designed to conquer the Wild West.",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_body_5 游侠夹克 ranger jacket 真正的牛仔会穿着既时髦又舒适的标志性服装。这件夹克就是为了征服狂野西部而生。 a real cowboy can be recognized by his clothes. stylish and comfortable, this jacket is designed to conquer the wild west. armor 护甲 body chest armor armor_storage"
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
            "value": 75,
            "unit": "",
            "display": "75"
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
        "description": "inventory_stack_view_wls2_armor_body_5_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_5_common_description",
        "name": "inventory_stack_view_wls2_armor_body_5_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_body_5_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_body_5_icon",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_5_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_5_common_description",
        "en": {
          "description": "Clothing of the Sheriff's Deputy",
          "full_description": "Clothing of the Sheriff's Deputy",
          "name": "Deputy's jacket"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_5_common_description",
        "name_key": "inventory_stack_view_wls2_armor_body_5_common_name",
        "zh": {
          "description": "副警长的服装",
          "full_description": "副警长的服装",
          "name": "副警长夹克"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_5": 2,
            "wls2_resourse_secondary_leather_5": 5
          },
          "learn_exp": 1600,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_body_5_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_9"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_body_5_icon",
      "stat_curves": {
        "armor": {
          "1": 280,
          "2": 308,
          "3": 336,
          "4": 364,
          "5": 392,
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
          "1": 7000,
          "2": 7700,
          "3": 8400,
          "4": 9100,
          "5": 9800
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "0654b977a249ef2fb2ef0c5344e8cddecb97f5ac4773d18a7455f6998c1f095e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "副警长夹克",
        "name_en": "Deputy's jacket",
        "description_zh": "副警长的服装",
        "description_en": "Clothing of the Sheriff's Deputy",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_body_5_common 副警长夹克 deputy's jacket 副警长的服装 clothing of the sheriff's deputy armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 280,
            "unit": "",
            "display": "280"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 7000,
            "unit": "",
            "display": "7000"
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
              "armor": 280,
              "max_durability": 7000
            },
            "display": {
              "armor": "280",
              "max_durability": "7000"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 308,
              "max_durability": 7700
            },
            "display": {
              "armor": "308",
              "max_durability": "7700"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 336,
              "max_durability": 8400
            },
            "display": {
              "armor": "336",
              "max_durability": "8400"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 364,
              "max_durability": 9100
            },
            "display": {
              "armor": "364",
              "max_durability": "9100"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 392,
              "max_durability": 9800
            },
            "display": {
              "armor": "392",
              "max_durability": "9800"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 393,
              "max_durability": 9800
            },
            "display": {
              "armor": "393",
              "max_durability": "9800"
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
          "防御：6 级起每级增加 1，最高 1392。"
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
        "description": "wls2_armor_body_5_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_body_5_epic_description",
        "name": "wls2_armor_body_5_epic_name",
        "name_with_wrapping": "wls2_armor_body_5_epic_name_with_wrapping",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_body_5_epic_icon",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_5_epic",
      "localization": {
        "description_key": "wls2_armor_body_5_epic_description",
        "en": {
          "description": "Not just clothing — it's true armor for a daredevil!",
          "full_description": "Not just clothing — it's true armor for a daredevil!",
          "name": "Reinforced coat"
        },
        "full_description_key": "wls2_armor_body_5_epic_description",
        "name_key": "wls2_armor_body_5_epic_name",
        "zh": {
          "description": "这不只是件衣服，更是胆大之人真正的盔甲！",
          "full_description": "这不只是件衣服，更是胆大之人真正的盔甲！",
          "name": "强化的外套"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 5,
            "wls2_resourse_fourfold_nails_4": 4,
            "wls2_resourse_secondary_leather_5": 10,
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
            "stack_id": "wls2_armor_body_5_epic",
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
            "stack_id": "wls2_armor_body_5_epic",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_body_5_epic_icon",
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
      "image_key": "98c45d779c8f99831b4f91a7daab18b8cdc26d5f562a99df3e3ce2710cbb2031",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "强化的外套",
        "name_en": "Reinforced coat",
        "description_zh": "这不只是件衣服，更是胆大之人真正的盔甲！",
        "description_en": "Not just clothing — it's true armor for a daredevil!",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_body_5_epic 强化的外套 reinforced coat 这不只是件衣服，更是胆大之人真正的盔甲！ not just clothing — it's true armor for a daredevil! armor 护甲 body chest armor armor_storage"
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
        "description": "inventory_stack_view_wls2_armor_body_5_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_5_rare_description",
        "name": "inventory_stack_view_wls2_armor_body_5_rare_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_body_5_rare_name_with_wrapping",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_body_5_rare_icon",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_5_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_5_rare_description",
        "en": {
          "description": "This jacket was designed to conquer the Wild West",
          "full_description": "This jacket was designed to conquer the Wild West",
          "name": "Sheriff's jacket"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_5_rare_description",
        "name_key": "inventory_stack_view_wls2_armor_body_5_rare_name",
        "zh": {
          "description": "这件夹克就是为了征服狂野西部而生",
          "full_description": "这件夹克就是为了征服狂野西部而生",
          "name": "警长夹克"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_4": 2,
            "wls2_resourse_secondary_leather_5": 10,
            "wls2_resourse_tertiary_clothroll_5": 2
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
            "stack_id": "wls2_armor_body_5_rare",
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
            "stack_id": "wls2_armor_body_5_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_body_5_rare_icon",
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
          "1": 16000,
          "2": 17700,
          "3": 19300,
          "4": 20900,
          "5": 22500
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
      "image_key": "3b279af8f327fcebc34b417333ebeb38f340addf95d932a4099431fe3912bd7c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "警长夹克",
        "name_en": "Sheriff's jacket",
        "description_zh": "这件夹克就是为了征服狂野西部而生",
        "description_en": "This jacket was designed to conquer the Wild West",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_body_5_rare 警长夹克 sheriff's jacket 这件夹克就是为了征服狂野西部而生 this jacket was designed to conquer the wild west armor 护甲 body chest armor armor_storage"
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
            "value": 16000,
            "unit": "",
            "display": "16000"
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
              "armor": 532,
              "dexterity": 2,
              "firearm_resistance": 0.04,
              "max_durability": 16000
            },
            "display": {
              "armor": "532",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "max_durability": "16000"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 585,
              "dexterity": 3,
              "firearm_resistance": 0.08,
              "max_durability": 17700
            },
            "display": {
              "armor": "585",
              "dexterity": "+3",
              "firearm_resistance": "+8%",
              "max_durability": "17700"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 638,
              "dexterity": 4,
              "firearm_resistance": 0.12,
              "max_durability": 19300
            },
            "display": {
              "armor": "638",
              "dexterity": "+4",
              "firearm_resistance": "+12%",
              "max_durability": "19300"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 692,
              "dexterity": 5,
              "firearm_resistance": 0.16,
              "max_durability": 20900
            },
            "display": {
              "armor": "692",
              "dexterity": "+5",
              "firearm_resistance": "+16%",
              "max_durability": "20900"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 745,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 22500
            },
            "display": {
              "armor": "745",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
              "max_durability": "22500"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 746,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 22500
            },
            "display": {
              "armor": "746",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
              "max_durability": "22500"
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
        "description": "inventory_stack_view_wls2_armor_body_5_rare_crocodile_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_5_rare_crocodile_description",
        "name": "inventory_stack_view_wls2_armor_body_5_rare_crocodile_name",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_armor_body_5_rare_crocodile_icon",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_5_rare_crocodile",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_5_rare_crocodile_description",
        "en": {
          "description": "Leather jacket with alligator skin for harsh conditions. A full Hunter set will protect against mosquitoes",
          "full_description": "Leather jacket with alligator skin for harsh conditions. A full Hunter set will protect against mosquitoes",
          "name": "Alligator hunter jacket"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_5_rare_crocodile_description",
        "name_key": "inventory_stack_view_wls2_armor_body_5_rare_crocodile_name",
        "zh": {
          "description": "皮革夹克与鳄鱼皮为严酷条件。一套完整的猎人套装将保护免受蚊子。",
          "full_description": "皮革夹克与鳄鱼皮为严酷条件。一套完整的猎人套装将保护免受蚊子。",
          "name": "短吻鳄猎人夹克"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_5": 2,
            "wls2_resourse_primary_hide_alligator": 2,
            "wls2_resourse_secondary_cloth_5": 2,
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
            "stack_id": "wls2_armor_body_5_rare_crocodile",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_armor_body_5_rare_crocodile_icon",
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
          "1": 16000,
          "2": 17700,
          "3": 19300,
          "4": 20900,
          "5": 22500
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "fda754515455462e1ae1279ef1f1c8970b03c6b89d5e17c722fb9a987c37c1f0",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "短吻鳄猎人夹克",
        "name_en": "Alligator hunter jacket",
        "description_zh": "皮革夹克与鳄鱼皮为严酷条件。一套完整的猎人套装将保护免受蚊子。",
        "description_en": "Leather jacket with alligator skin for harsh conditions. A full Hunter set will protect against mosquitoes",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_body_5_rare_crocodile 短吻鳄猎人夹克 alligator hunter jacket 皮革夹克与鳄鱼皮为严酷条件。一套完整的猎人套装将保护免受蚊子。 leather jacket with alligator skin for harsh conditions. a full hunter set will protect against mosquitoes armor 护甲 body chest armor armor_storage"
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
            "value": 16000,
            "unit": "",
            "display": "16000"
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
              "armor": 532,
              "dexterity": 2,
              "max_durability": 16000,
              "swamp_animal_resistance": 0.04
            },
            "display": {
              "armor": "532",
              "dexterity": "+2",
              "max_durability": "16000",
              "swamp_animal_resistance": "+4%"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 585,
              "dexterity": 3,
              "max_durability": 17700,
              "swamp_animal_resistance": 0.08
            },
            "display": {
              "armor": "585",
              "dexterity": "+3",
              "max_durability": "17700",
              "swamp_animal_resistance": "+8%"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 638,
              "dexterity": 4,
              "max_durability": 19300,
              "swamp_animal_resistance": 0.12
            },
            "display": {
              "armor": "638",
              "dexterity": "+4",
              "max_durability": "19300",
              "swamp_animal_resistance": "+12%"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 692,
              "dexterity": 5,
              "max_durability": 20900,
              "swamp_animal_resistance": 0.16
            },
            "display": {
              "armor": "692",
              "dexterity": "+5",
              "max_durability": "20900",
              "swamp_animal_resistance": "+16%"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 745,
              "dexterity": 6,
              "max_durability": 22500,
              "swamp_animal_resistance": 0.2
            },
            "display": {
              "armor": "745",
              "dexterity": "+6",
              "max_durability": "22500",
              "swamp_animal_resistance": "+20%"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 746,
              "dexterity": 6,
              "max_durability": 22500,
              "swamp_animal_resistance": 0.2
            },
            "display": {
              "armor": "746",
              "dexterity": "+6",
              "max_durability": "22500",
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
        "description": "inventory_stack_view_wls2_armor_body_5_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_5_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_body_5_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_body_5_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_body_upgrade_5_icon",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_5_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_5_uncommon_description",
        "en": {
          "description": "You can hide a whole arsenal under this coat",
          "full_description": "You can hide a whole arsenal under this coat",
          "name": "Gunfighter's coat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_5_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_body_5_uncommon_name",
        "zh": {
          "description": "这件外套能让你遮住整个军火库",
          "full_description": "这件外套能让你遮住整个军火库",
          "name": "枪手外套"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_5": 3,
            "wls2_resourse_secondary_leather_5": 6
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
                "inventory_stack_id": "wls2_armor_body_5_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_10"
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
            "stack_id": "wls2_armor_body_5_uncommon",
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
            "stack_id": "wls2_armor_body_5_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_body_upgrade_5_icon",
      "stat_curves": {
        "armor": {
          "1": 378,
          "2": 416,
          "3": 454,
          "4": 491,
          "5": 529,
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
          "1": 9600,
          "2": 10600,
          "3": 11500,
          "4": 12500,
          "5": 13400
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "c0683f185a3d2fb794fdcb9d04a0a6575242336edb622df868497ae4eafcfd65",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "枪手外套",
        "name_en": "Gunfighter's coat",
        "description_zh": "这件外套能让你遮住整个军火库",
        "description_en": "You can hide a whole arsenal under this coat",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_body_5_uncommon 枪手外套 gunfighter's coat 这件外套能让你遮住整个军火库 you can hide a whole arsenal under this coat armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 378,
            "unit": "",
            "display": "378"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 9600,
            "unit": "",
            "display": "9600"
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
              "armor": 378,
              "dexterity": 1,
              "max_durability": 9600
            },
            "display": {
              "armor": "378",
              "dexterity": "+1",
              "max_durability": "9600"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 416,
              "dexterity": 2,
              "max_durability": 10600
            },
            "display": {
              "armor": "416",
              "dexterity": "+2",
              "max_durability": "10600"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 454,
              "dexterity": 3,
              "max_durability": 11500
            },
            "display": {
              "armor": "454",
              "dexterity": "+3",
              "max_durability": "11500"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 491,
              "dexterity": 4,
              "max_durability": 12500
            },
            "display": {
              "armor": "491",
              "dexterity": "+4",
              "max_durability": "12500"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 529,
              "dexterity": 5,
              "max_durability": 13400
            },
            "display": {
              "armor": "529",
              "dexterity": "+5",
              "max_durability": "13400"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 530,
              "dexterity": 5,
              "max_durability": 13400
            },
            "display": {
              "armor": "530",
              "dexterity": "+5",
              "max_durability": "13400"
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
          "防御：6 级起每级增加 1，最高 1529。"
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
        "description": "inventory_stack_view_wls2_armor_body_6_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_6_common_description",
        "name": "inventory_stack_view_wls2_armor_body_6_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_armor_body_6_common",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_6_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_6_common_description",
        "en": {
          "description": "Cozy warmth for chilly trails",
          "full_description": "Cozy warmth for chilly trails",
          "name": "Wanderer jacket"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_6_common_description",
        "name_key": "inventory_stack_view_wls2_armor_body_6_common_name",
        "zh": {
          "description": "寒冷小径的温暖舒适",
          "full_description": "寒冷小径的温暖舒适",
          "name": "流浪者夹克"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_6": 2,
            "wls2_resourse_secondary_leather_6": 5
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
      "sprite": "UI_WW_AlphaBinary08/wls2_armor_body_6_common",
      "stat_curves": {
        "armor": {
          "1": 560,
          "2": 616,
          "3": 672,
          "4": 728,
          "5": 784,
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
          "1": 11650,
          "2": 12800,
          "3": 14000,
          "4": 15150,
          "5": 16300
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
      "image_key": "fd3870bd418863bafbf226623b2a051a220ecf1b83ea65b15aac4ff3c3b4eafc",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "流浪者夹克",
        "name_en": "Wanderer jacket",
        "description_zh": "寒冷小径的温暖舒适",
        "description_en": "Cozy warmth for chilly trails",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_body_6_common 流浪者夹克 wanderer jacket 寒冷小径的温暖舒适 cozy warmth for chilly trails armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 560,
            "unit": "",
            "display": "560"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 11650,
            "unit": "",
            "display": "11650"
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
            "value": 2,
            "unit": "",
            "display": "2"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 560,
              "max_durability": 11650
            },
            "display": {
              "armor": "560",
              "max_durability": "11650"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 616,
              "max_durability": 12800
            },
            "display": {
              "armor": "616",
              "max_durability": "12800"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 672,
              "max_durability": 14000
            },
            "display": {
              "armor": "672",
              "max_durability": "14000"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 728,
              "max_durability": 15150
            },
            "display": {
              "armor": "728",
              "max_durability": "15150"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 784,
              "max_durability": 16300
            },
            "display": {
              "armor": "784",
              "max_durability": "16300"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 785,
              "max_durability": 16300
            },
            "display": {
              "armor": "785",
              "max_durability": "16300"
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
          "防御：6 级起每级增加 1，最高 1784。"
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
      "bodypart": 41,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 41,
        "description": "inventory_stack_view_wls2_armor_body_6_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_6_epic_description",
        "name": "inventory_stack_view_wls2_armor_body_6_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_body_6_epic",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_6_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_6_epic_description",
        "en": {
          "description": "Coat crafted from the finest materials, gracefully withstands harsh conditions",
          "full_description": "Coat crafted from the finest materials, gracefully withstands harsh conditions",
          "name": "Boreal legend longcoat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_6_epic_description",
        "name_key": "inventory_stack_view_wls2_armor_body_6_epic_name",
        "zh": {
          "description": "由最优质材料制成的外套，优雅地承受恶劣条件",
          "full_description": "由最优质材料制成的外套，优雅地承受恶劣条件",
          "name": "极地传奇长大衣"
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
            "wls2_resourse_secondary_leather_6": 10
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
            "stack_id": "wls2_armor_body_6_epic",
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
            "stack_id": "wls2_armor_body_6_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_body_6_epic",
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
      "image_key": "e9b3d4bb7de8421cb7c2cfe26e05d8d3d9fdf8ef6c72136ec565a98a1335d8f0",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "极地传奇长大衣",
        "name_en": "Boreal legend longcoat",
        "description_zh": "由最优质材料制成的外套，优雅地承受恶劣条件",
        "description_en": "Coat crafted from the finest materials, gracefully withstands harsh conditions",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_body_6_epic 极地传奇长大衣 boreal legend longcoat 由最优质材料制成的外套，优雅地承受恶劣条件 coat crafted from the finest materials, gracefully withstands harsh conditions armor 护甲 body chest armor armor_storage"
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
        "description": "inventory_stack_view_wls2_armor_body_6_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_6_rare_description",
        "name": "inventory_stack_view_wls2_armor_body_6_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_armor_body_6_rare",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_6_rare_description",
        "en": {
          "description": "Ultimate defense against the Arctic freeze",
          "full_description": "Ultimate defense against the Arctic freeze",
          "name": "Klondike conqueror jacket"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_6_rare_description",
        "name_key": "inventory_stack_view_wls2_armor_body_6_rare_name",
        "zh": {
          "description": "抵御北极寒冷的终极防御",
          "full_description": "抵御北极寒冷的终极防御",
          "name": "肯洛迪克征服者夹克"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_6": 3,
            "wls2_resourse_secondary_cloth_6": 10,
            "wls2_resourse_secondary_leather_6": 10
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
            "stack_id": "wls2_armor_body_6_rare",
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
            "stack_id": "wls2_armor_body_6_rare",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_armor_body_6_rare",
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
          "1": 27450,
          "2": 30200,
          "3": 32900,
          "4": 35650,
          "5": 38400
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
      "image_key": "056557ae341b465571ac8e1be7090e74abccd676c4623cdf8460d2f4820a73b7",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "肯洛迪克征服者夹克",
        "name_en": "Klondike conqueror jacket",
        "description_zh": "抵御北极寒冷的终极防御",
        "description_en": "Ultimate defense against the Arctic freeze",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_body_6_rare 肯洛迪克征服者夹克 klondike conqueror jacket 抵御北极寒冷的终极防御 ultimate defense against the arctic freeze armor 护甲 body chest armor armor_storage"
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
            "value": 27450,
            "unit": "",
            "display": "27450"
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
            "value": 3,
            "unit": "",
            "display": "3"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 1260,
              "dexterity": 4,
              "firearm_resistance": 0.04,
              "max_durability": 27450
            },
            "display": {
              "armor": "1260",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "max_durability": "27450"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 1386,
              "dexterity": 5,
              "firearm_resistance": 0.08,
              "max_durability": 30200
            },
            "display": {
              "armor": "1386",
              "dexterity": "+5",
              "firearm_resistance": "+8%",
              "max_durability": "30200"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1512,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "max_durability": 32900
            },
            "display": {
              "armor": "1512",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "max_durability": "32900"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1638,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "max_durability": 35650
            },
            "display": {
              "armor": "1638",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "max_durability": "35650"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1764,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 38400
            },
            "display": {
              "armor": "1764",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "max_durability": "38400"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1765,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 38400
            },
            "display": {
              "armor": "1765",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "max_durability": "38400"
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
        "description": "inventory_stack_view_wls2_armor_body_6_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_6_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_body_6_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_armor_body_6_uncommon",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_6_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_6_uncommon_description",
        "en": {
          "description": "Hearty fabric for frigid frontiers",
          "full_description": "Hearty fabric for frigid frontiers",
          "name": "Frontier jacket"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_6_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_body_6_uncommon_name",
        "zh": {
          "description": "寒冷边疆的坚固织物",
          "full_description": "寒冷边疆的坚固织物",
          "name": "前哨人夹克"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_6": 1,
            "wls2_resourse_secondary_cloth_6": 3,
            "wls2_resourse_secondary_leather_6": 6
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
            "stack_id": "wls2_armor_body_6_uncommon",
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
            "stack_id": "wls2_armor_body_6_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_armor_body_6_uncommon",
      "stat_curves": {
        "armor": {
          "1": 700,
          "2": 770,
          "3": 840,
          "4": 910,
          "5": 980,
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
          "1": 16200,
          "2": 17800,
          "3": 19450,
          "4": 21050,
          "5": 22700
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "6797c0cabb5abd18baa3a7d9e85cd2f8afe3f83127790a3e1d7e310a5bafbf85",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "前哨人夹克",
        "name_en": "Frontier jacket",
        "description_zh": "寒冷边疆的坚固织物",
        "description_en": "Hearty fabric for frigid frontiers",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_body_6_uncommon 前哨人夹克 frontier jacket 寒冷边疆的坚固织物 hearty fabric for frigid frontiers armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 700,
            "unit": "",
            "display": "700"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 16200,
            "unit": "",
            "display": "16200"
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
            "value": 2.5,
            "unit": "",
            "display": "2.5"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 700,
              "dexterity": 4,
              "max_durability": 16200
            },
            "display": {
              "armor": "700",
              "dexterity": "+4",
              "max_durability": "16200"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 770,
              "dexterity": 5,
              "max_durability": 17800
            },
            "display": {
              "armor": "770",
              "dexterity": "+5",
              "max_durability": "17800"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 840,
              "dexterity": 6,
              "max_durability": 19450
            },
            "display": {
              "armor": "840",
              "dexterity": "+6",
              "max_durability": "19450"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 910,
              "dexterity": 8,
              "max_durability": 21050
            },
            "display": {
              "armor": "910",
              "dexterity": "+8",
              "max_durability": "21050"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 980,
              "dexterity": 10,
              "max_durability": 22700
            },
            "display": {
              "armor": "980",
              "dexterity": "+10",
              "max_durability": "22700"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 981,
              "dexterity": 10,
              "max_durability": 22700
            },
            "display": {
              "armor": "981",
              "dexterity": "+10",
              "max_durability": "22700"
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
          "防御：6 级起每级增加 1，最高 1980。"
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
        "name": "wls2_armor_body_7_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_7_common",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_7_common",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Bronco waistcoat"
        },
        "full_description_key": null,
        "name_key": "wls2_armor_body_7_common_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "野马 背心"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_cloth_7": 2,
            "wls2_resourse_secondary_leather_7": 5
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
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_7_common",
      "stat_curves": {
        "armor": {
          "1": 1120,
          "2": 1232,
          "3": 1344,
          "4": 1456,
          "5": 1568,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 2,
          "2": 2,
          "3": 2,
          "4": 2,
          "5": 2
        },
        "max_durability": {
          "1": 19500,
          "2": 21460,
          "3": 23450,
          "4": 25400,
          "5": 27350
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
      "image_key": "9ad51d0c560e8f5397f6dd801f1686d5369ac6150decbf6ad5bda73eb3d8be29",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "野马 背心",
        "name_en": "Bronco waistcoat",
        "description_zh": "",
        "description_en": "",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_body_7_common 野马 背心 bronco waistcoat armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 1120,
            "unit": "",
            "display": "1120"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 19500,
            "unit": "",
            "display": "19500"
          },
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
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 1120,
              "max_durability": 19500
            },
            "display": {
              "armor": "1120",
              "max_durability": "19500"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 1232,
              "max_durability": 21460
            },
            "display": {
              "armor": "1232",
              "max_durability": "21460"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1344,
              "max_durability": 23450
            },
            "display": {
              "armor": "1344",
              "max_durability": "23450"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1456,
              "max_durability": 25400
            },
            "display": {
              "armor": "1456",
              "max_durability": "25400"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1568,
              "max_durability": 27350
            },
            "display": {
              "armor": "1568",
              "max_durability": "27350"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1569,
              "max_durability": 27350
            },
            "display": {
              "armor": "1569",
              "max_durability": "27350"
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
          "防御：6 级起每级增加 1，最高 2568。"
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
        "equip_behaviour": {
          "type": "durability"
        },
        "name": "wls2_armor_body_7_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_7_epic",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_7_epic",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Rio Bravo legend waistcoat"
        },
        "full_description_key": null,
        "name_key": "wls2_armor_body_7_epic_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "里约布拉沃传奇背心"
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
            "wls2_resourse_secondary_leather_7": 10
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
            "stack_id": "wls2_armor_body_7_epic",
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
            "stack_id": "wls2_armor_body_7_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_7_epic",
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
      "image_key": "737df24649b347c88fedf67e3ee86d8f6b25d55b0b1953736841c14db35621e2",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "里约布拉沃传奇背心",
        "name_en": "Rio Bravo legend waistcoat",
        "description_zh": "",
        "description_en": "",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_body_7_epic 里约布拉沃传奇背心 rio bravo legend waistcoat armor 护甲 body chest armor armor_storage"
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
        "equip_behaviour": {
          "type": "durability"
        },
        "name": "wls2_armor_body_7_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_7_rare",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_7_rare",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "City Marshal's waistcoat"
        },
        "full_description_key": null,
        "name_key": "wls2_armor_body_7_rare_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "城市警长的背心"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_7": 3,
            "wls2_resourse_secondary_cloth_7": 10,
            "wls2_resourse_secondary_leather_7": 10
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
            "stack_id": "wls2_armor_body_7_rare",
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
            "stack_id": "wls2_armor_body_7_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_7_rare",
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "c5d7bdb58bb25a2a6a03393b9c7fb237591bd009c0a979245bfb58c3e1241c7e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "城市警长的背心",
        "name_en": "City Marshal's waistcoat",
        "description_zh": "",
        "description_en": "",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_body_7_rare 城市警长的背心 city marshal's waistcoat armor 护甲 body chest armor armor_storage"
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
              "max_durability": 47800
            },
            "display": {
              "armor": "2520",
              "dexterity": "+6",
              "fire_resistance": "+4%",
              "firearm_resistance": "+4%",
              "max_durability": "47800"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 2772,
              "dexterity": 7,
              "fire_resistance": 0.08,
              "firearm_resistance": 0.08,
              "max_durability": 52550
            },
            "display": {
              "armor": "2772",
              "dexterity": "+7",
              "fire_resistance": "+8%",
              "firearm_resistance": "+8%",
              "max_durability": "52550"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 3024,
              "dexterity": 8,
              "fire_resistance": 0.12,
              "firearm_resistance": 0.12,
              "max_durability": 57350
            },
            "display": {
              "armor": "3024",
              "dexterity": "+8",
              "fire_resistance": "+12%",
              "firearm_resistance": "+12%",
              "max_durability": "57350"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 3276,
              "dexterity": 10,
              "fire_resistance": 0.16,
              "firearm_resistance": 0.16,
              "max_durability": 62150
            },
            "display": {
              "armor": "3276",
              "dexterity": "+10",
              "fire_resistance": "+16%",
              "firearm_resistance": "+16%",
              "max_durability": "62150"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 3528,
              "dexterity": 12,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "max_durability": 66900
            },
            "display": {
              "armor": "3528",
              "dexterity": "+12",
              "fire_resistance": "+20%",
              "firearm_resistance": "+20%",
              "max_durability": "66900"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 3529,
              "dexterity": 12,
              "fire_resistance": 0.2,
              "firearm_resistance": 0.2,
              "max_durability": 66900
            },
            "display": {
              "armor": "3529",
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
        "name": "wls2_armor_body_7_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_7_uncommon",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_7_uncommon",
      "localization": {
        "description_key": null,
        "en": {
          "description": null,
          "full_description": null,
          "name": "Sandscar waistcoat"
        },
        "full_description_key": null,
        "name_key": "wls2_armor_body_7_uncommon_name",
        "zh": {
          "description": null,
          "full_description": null,
          "name": "沙痕背心"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_7": 1,
            "wls2_resourse_secondary_cloth_7": 3,
            "wls2_resourse_secondary_leather_7": 6
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
            "stack_id": "wls2_armor_body_7_uncommon",
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
            "stack_id": "wls2_armor_body_7_uncommon",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_7_uncommon",
      "stat_curves": {
        "armor": {
          "1": 1400,
          "2": 1540,
          "3": 1680,
          "4": 1820,
          "5": 1960,
          "per_level_after_max": 1
        },
        "cool_modifier": {
          "1": 2.5,
          "2": 2.5,
          "3": 2.5,
          "4": 2.5,
          "5": 2.5
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
          "1": 29150,
          "2": 32100,
          "3": 35000,
          "4": 38000,
          "5": 40800
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "31be97e9072540106994523eb6d4e2a1ccdc6c2a55985929edc5ac8f16adfc8d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "沙痕背心",
        "name_en": "Sandscar waistcoat",
        "description_zh": "",
        "description_en": "",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_body_7_uncommon 沙痕背心 sandscar waistcoat armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 1400,
            "unit": "",
            "display": "1400"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 29150,
            "unit": "",
            "display": "29150"
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
            "value": 2.5,
            "unit": "",
            "display": "2.5"
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
              "armor": 1400,
              "dexterity": 6,
              "fire_resistance": 0.02,
              "max_durability": 29150
            },
            "display": {
              "armor": "1400",
              "dexterity": "+6",
              "fire_resistance": "+2%",
              "max_durability": "29150"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 1540,
              "dexterity": 7,
              "fire_resistance": 0.04,
              "max_durability": 32100
            },
            "display": {
              "armor": "1540",
              "dexterity": "+7",
              "fire_resistance": "+4%",
              "max_durability": "32100"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 1680,
              "dexterity": 8,
              "fire_resistance": 0.06,
              "max_durability": 35000
            },
            "display": {
              "armor": "1680",
              "dexterity": "+8",
              "fire_resistance": "+6%",
              "max_durability": "35000"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 1820,
              "dexterity": 10,
              "fire_resistance": 0.08,
              "max_durability": 38000
            },
            "display": {
              "armor": "1820",
              "dexterity": "+10",
              "fire_resistance": "+8%",
              "max_durability": "38000"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 1960,
              "dexterity": 12,
              "fire_resistance": 0.1,
              "max_durability": 40800
            },
            "display": {
              "armor": "1960",
              "dexterity": "+12",
              "fire_resistance": "+10%",
              "max_durability": "40800"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 1961,
              "dexterity": 12,
              "fire_resistance": 0.1,
              "max_durability": 40800
            },
            "display": {
              "armor": "1961",
              "dexterity": "+12",
              "fire_resistance": "+10%",
              "max_durability": "40800"
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
          "防御：6 级起每级增加 1，最高 2960。"
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
        "description": "inventory_stack_view_wls2_armor_body_fbo_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_fbo_epic_description",
        "name": "inventory_stack_view_wls2_armor_body_fbo_epic_name",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_body_fbo_epic",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_fbo_2_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_fbo_epic_description",
        "en": {
          "description": "Sometimes there is nothing such handy and practical as a piece of cloth with a neckhole",
          "full_description": "Sometimes there is nothing such handy and practical as a piece of cloth with a neckhole",
          "name": "Nameless Hero Poncho"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_fbo_epic_description",
        "name_key": "inventory_stack_view_wls2_armor_body_fbo_epic_name",
        "zh": {
          "description": "有时候没什么东西比脖子处带个洞的布更方便实用",
          "full_description": "有时候没什么东西比脖子处带个洞的布更方便实用",
          "name": "无名英雄披风"
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
                "inventory_stack_id": "wls2_armor_body_fbo_2_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_body_fbo_2_rare_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_body_fbo_epic",
      "stat_curves": {
        "armor": {
          "default": 95
        },
        "dexterity": {
          "default": 3
        },
        "max_durability": {
          "default": 395
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
      "image_key": "eccc2f343666095bf4934411b4a3bf1e8d6437756431d3c485cf23f0b4a15bf0",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "无名英雄披风",
        "name_en": "Nameless Hero Poncho",
        "description_zh": "有时候没什么东西比脖子处带个洞的布更方便实用",
        "description_en": "Sometimes there is nothing such handy and practical as a piece of cloth with a neckhole",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_body_fbo_2_rare 无名英雄披风 nameless hero poncho 有时候没什么东西比脖子处带个洞的布更方便实用 sometimes there is nothing such handy and practical as a piece of cloth with a neckhole armor 护甲 body chest armor armor_storage"
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
            "value": 395,
            "unit": "",
            "display": "395"
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
        "description": "inventory_stack_view_wls2_armor_body_rare_t4_lvl5_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_rare_t4_lvl5_description",
        "name": "inventory_stack_view_wls2_armor_body_rare_t4_lvl5_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls2_armor_body_upgrade_4_icon",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_rare_t4_lvl5",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_rare_t4_lvl5_description",
        "en": {
          "description": "A perfect coat",
          "full_description": "A perfect coat",
          "name": "Gentleman coat"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_rare_t4_lvl5_description",
        "name_key": "inventory_stack_view_wls2_armor_body_rare_t4_lvl5_name",
        "zh": {
          "description": "一件完美的外套。",
          "full_description": "一件完美的外套。",
          "name": "绅士外套"
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
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_body_upgrade_4_icon",
      "stat_curves": {
        "armor": {
          "default": 280
        },
        "max_durability": {
          "default": 125
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
      "image_key": "93c360bc5f631f3c1f46d906b9f9d42b2e6b21dce2a500150526ed52383188fb",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "绅士外套",
        "name_en": "Gentleman coat",
        "description_zh": "一件完美的外套。",
        "description_en": "A perfect coat",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_body_rare_t4_lvl5 绅士外套 gentleman coat 一件完美的外套。 a perfect coat armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 280,
            "unit": "",
            "display": "280"
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
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 8,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 8,
        "description": "inventory_stack_view_wls2_armor_body_uncommon_t4_lvl4_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_body_uncommon_t4_lvl4_description",
        "name": "inventory_stack_view_wls2_armor_body_uncommon_t4_lvl4_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls2_armor_body_4_icon",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_uncommon_t4_lvl4",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_body_uncommon_t4_lvl4_description",
        "en": {
          "description": "Rain or shine, this leather jacket stays comfortable",
          "full_description": "Rain or shine, this leather jacket stays comfortable",
          "name": "Cowboy jacket"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_body_uncommon_t4_lvl4_description",
        "name_key": "inventory_stack_view_wls2_armor_body_uncommon_t4_lvl4_name",
        "zh": {
          "description": "不论晴雨，这件皮夹克穿起来都很舒服。",
          "full_description": "不论晴雨，这件皮夹克穿起来都很舒服。",
          "name": "牛仔夹克"
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
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_body_4_icon",
      "stat_curves": {
        "armor": {
          "default": 210
        },
        "max_durability": {
          "default": 62
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
      "tier": 4,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "35a5b90d866f86ff51ca51c9bc616c9eea859266fbe865d35ae4acfae998c105",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "牛仔夹克",
        "name_en": "Cowboy jacket",
        "description_zh": "不论晴雨，这件皮夹克穿起来都很舒服。",
        "description_en": "Rain or shine, this leather jacket stays comfortable",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_body_uncommon_t4_lvl4 牛仔夹克 cowboy jacket 不论晴雨，这件皮夹克穿起来都很舒服。 rain or shine, this leather jacket stays comfortable armor 护甲 body chest armor armor_storage"
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
            "value": 62,
            "unit": "",
            "display": "62"
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
      "bodypart": 2,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 2,
        "description": "inventory_stack_view_wls_clothes_vest_jacketed_1.5_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_vest_jacketed_1.5_description",
        "name": "inventory_stack_view_wls_clothes_vest_jacketed_1.5_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_vest_jacketed_1.5",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_upgrade_1",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_vest_jacketed_1.5_description",
        "en": {
          "description": "Every gentleman should own a vest.",
          "full_description": "Every gentleman should own a vest.",
          "name": "Vest with a shirt"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_vest_jacketed_1.5_description",
        "name_key": "inventory_stack_view_wls_clothes_vest_jacketed_1.5_name",
        "zh": {
          "description": "是绅士就该穿背心。",
          "full_description": "是绅士就该穿背心。",
          "name": "背心衬衫"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_vest_jacketed_1.5",
      "stat_curves": {
        "armor": {
          "default": 30
        },
        "max_durability": {
          "default": 50
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
      "subcategory": "body",
      "tags": [
        "chest",
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
      "image_key": "ad3a2c57fd5ccadfae75effb5711647df04d390137173ba538b831a87f0a4f8e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "背心衬衫",
        "name_en": "Vest with a shirt",
        "description_zh": "是绅士就该穿背心。",
        "description_en": "Every gentleman should own a vest.",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_body_upgrade_1 背心衬衫 vest with a shirt 是绅士就该穿背心。 every gentleman should own a vest. armor 护甲 body chest armor armor_storage"
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
            "value": 50,
            "unit": "",
            "display": "50"
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
      "bodypart": 4,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 4,
        "description": "inventory_stack_view_wls_clothes_strong_leather_jacket_2.5_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_strong_leather_jacket_2.5_description",
        "name": "inventory_stack_view_wls_clothes_strong_leather_jacket_2.5_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_strong_leather_jacket_2.5",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_upgrade_2",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_strong_leather_jacket_2.5_description",
        "en": {
          "description": "Bronze rivets within provide extra protection to this leather jacket.",
          "full_description": "Bronze rivets within provide extra protection to this leather jacket.",
          "name": "Reinforced leather jacket"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_strong_leather_jacket_2.5_description",
        "name_key": "inventory_stack_view_wls_clothes_strong_leather_jacket_2.5_name",
        "zh": {
          "description": "金属板为皮夹克添加了额外的保护。",
          "full_description": "金属板为皮夹克添加了额外的保护。",
          "name": "强化的皮夹克"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_strong_leather_jacket_2.5",
      "stat_curves": {
        "armor": {
          "default": 70
        },
        "max_durability": {
          "default": 75
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
      "image_key": "5c73d3fe35a85213de374f29a67629b3b3d10de7c56ea6eeea8c89e76cde13c3",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "强化的皮夹克",
        "name_en": "Reinforced leather jacket",
        "description_zh": "金属板为皮夹克添加了额外的保护。",
        "description_en": "Bronze rivets within provide extra protection to this leather jacket.",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_body_upgrade_2 强化的皮夹克 reinforced leather jacket 金属板为皮夹克添加了额外的保护。 bronze rivets within provide extra protection to this leather jacket. armor 护甲 body chest armor armor_storage"
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
            "value": 75,
            "unit": "",
            "display": "75"
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
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 18,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 18,
        "description": "inventory_stack_view_Armor_body_upgrade_3_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_Armor_body_upgrade_3_description",
        "name": "inventory_stack_view_Armor_body_upgrade_3_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/armor_body_upgrade_3",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_upgrade_3",
      "localization": {
        "description_key": "inventory_stack_view_Armor_body_upgrade_3_description",
        "en": {
          "description": "Winter coat with a thick fur-lining designed to protect against severely cold weather.",
          "full_description": "Winter coat with a thick fur-lining designed to protect against severely cold weather.",
          "name": "Fur lined jacket"
        },
        "full_description_key": "inventory_stack_view_Armor_body_upgrade_3_description",
        "name_key": "inventory_stack_view_Armor_body_upgrade_3_name",
        "zh": {
          "description": "带有厚重毛皮的夹克，用来抵御极其严寒的天气",
          "full_description": "带有厚重毛皮的夹克，用来抵御极其严寒的天气",
          "name": "毛皮亚麻夹克"
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
      "sprite": "UI_WW_AlphaBinary03/armor_body_upgrade_3",
      "stat_curves": {
        "armor": {
          "default": 140
        },
        "max_durability": {
          "default": 100
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
      "image_key": "9c926589931a8beceaa005c94e2a5a7a8069d0dcbcfb2d5baaab49b7dc232849",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "毛皮亚麻夹克",
        "name_en": "Fur lined jacket",
        "description_zh": "带有厚重毛皮的夹克，用来抵御极其严寒的天气",
        "description_en": "Winter coat with a thick fur-lining designed to protect against severely cold weather.",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_body_upgrade_3 毛皮亚麻夹克 fur lined jacket 带有厚重毛皮的夹克，用来抵御极其严寒的天气 winter coat with a thick fur-lining designed to protect against severely cold weather. armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 140,
            "unit": "",
            "display": "140"
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
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 6,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 6,
        "description": "inventory_stack_view_wls_clothes_improved_armored_jacket_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_improved_armored_jacket_description",
        "name": "inventory_stack_view_wls_clothes_improved_armored_jacket_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_improved_armored_jacket",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_upgrade_4",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_improved_armored_jacket_description",
        "en": {
          "description": "Jacket for a real bounty hunter.",
          "full_description": "Jacket for a real bounty hunter.",
          "name": "Superior armored jacket"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_improved_armored_jacket_description",
        "name_key": "inventory_stack_view_wls_clothes_improved_armored_jacket_name",
        "zh": {
          "description": "为真正的赏金猎人打造的夹克。",
          "full_description": "为真正的赏金猎人打造的夹克。",
          "name": "优质装甲夹克"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_improved_armored_jacket",
      "stat_curves": {
        "armor": {
          "default": 280
        },
        "max_durability": {
          "default": 125
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
      "image_key": "6f6e98e7d41703f64835798ff6f4de5981bddb7a0dc968cfb7e439e89927d326",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "优质装甲夹克",
        "name_en": "Superior armored jacket",
        "description_zh": "为真正的赏金猎人打造的夹克。",
        "description_en": "Jacket for a real bounty hunter.",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_body_upgrade_4 优质装甲夹克 superior armored jacket 为真正的赏金猎人打造的夹克。 jacket for a real bounty hunter. armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 280,
            "unit": "",
            "display": "280"
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
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": null,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_Armor_body_upgrade_5_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_Armor_body_upgrade_5_description",
        "name": "inventory_stack_view_Armor_body_upgrade_5_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_improved_armored_jacket",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_body_upgrade_5",
      "localization": {
        "description_key": "inventory_stack_view_Armor_body_upgrade_5_description",
        "en": {
          "description": "Clothing of the Sheriff's Deputy. Wearing it will make you incredibly cool, but you will always be the target for bandits!",
          "full_description": "Clothing of the Sheriff's Deputy. Wearing it will make you incredibly cool, but you will always be the target for bandits!",
          "name": "Deputy's jacket"
        },
        "full_description_key": "inventory_stack_view_Armor_body_upgrade_5_description",
        "name_key": "inventory_stack_view_Armor_body_upgrade_5_name",
        "zh": {
          "description": "副警长的服装。穿上它，你就能瞬间容光焕发，不过你也会成为强盗的攻击目标！",
          "full_description": "副警长的服装。穿上它，你就能瞬间容光焕发，不过你也会成为强盗的攻击目标！",
          "name": "副警长夹克"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_improved_armored_jacket",
      "stat_curves": {
        "armor": {
          "default": 560
        },
        "max_durability": {
          "default": 150
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
      "image_key": "6f6e98e7d41703f64835798ff6f4de5981bddb7a0dc968cfb7e439e89927d326",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "副警长夹克",
        "name_en": "Deputy's jacket",
        "description_zh": "副警长的服装。穿上它，你就能瞬间容光焕发，不过你也会成为强盗的攻击目标！",
        "description_en": "Clothing of the Sheriff's Deputy. Wearing it will make you incredibly cool, but you will always be the target for bandits!",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_body_upgrade_5 副警长夹克 deputy's jacket 副警长的服装。穿上它，你就能瞬间容光焕发，不过你也会成为强盗的攻击目标！ clothing of the sheriff's deputy. wearing it will make you incredibly cool, but you will always be the target for bandits! armor 护甲 body chest armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 560,
            "unit": "",
            "display": "560"
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
        "player_scope_layer": "special_legacy"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 1,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 1,
        "description": "inventory_stack_view_wls_clothes_boots_1_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_boots_1_description",
        "name": "inventory_stack_view_wls_clothes_boots_1_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_boots_1",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_1",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_boots_1_description",
        "en": {
          "description": "It is better to wear simple boots than hurt your bare feet with nettles.",
          "full_description": "It is better to wear simple boots than hurt your bare feet with nettles.",
          "name": "Boots"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_boots_1_description",
        "name_key": "inventory_stack_view_wls_clothes_boots_1_name",
        "zh": {
          "description": "简单的靴子。最好穿上一双结实的靴子。",
          "full_description": "简单的靴子。最好穿上一双结实的靴子。",
          "name": "靴子"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_boots_1",
      "stat_curves": {
        "armor": {
          "default": 5
        },
        "max_durability": {
          "default": 25
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
      "image_key": "b3f7481a31fe58f7438c4c6e65d9805e5cd1c708806314bab3eb38904d6bd7cd",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "靴子",
        "name_en": "Boots",
        "description_zh": "简单的靴子。最好穿上一双结实的靴子。",
        "description_en": "It is better to wear simple boots than hurt your bare feet with nettles.",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_boots_1 靴子 boots 简单的靴子。最好穿上一双结实的靴子。 it is better to wear simple boots than hurt your bare feet with nettles. armor 护甲 boots boots armor armor_storage"
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
        "description": "inventory_stack_view_wls2_armor_boots_1_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_1_common_description",
        "name": "inventory_stack_view_wls2_armor_boots_1_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_boots_1",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 1,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_1_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_1_common_description",
        "en": {
          "description": "It is better to wear simple boots than hurt your bare feet on nettles",
          "full_description": "It is better to wear simple boots than hurt your bare feet on nettles",
          "name": "Boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_1_common_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_1_common_name",
        "zh": {
          "description": "最好穿上一双结实的靴子",
          "full_description": "最好穿上一双结实的靴子",
          "name": "靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_secondary_leather_1": 2,
            "wls2_resourse_secondary_rope_1": 2
          },
          "learn_exp": 100,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_secondary_leather_1": 2,
                "wls2_resourse_secondary_rope_1": 2
              },
              "learn_exp": 100,
              "min_level": 1,
              "result": {
                "inventory_stack_id": "wls2_armor_boots_1_common"
              },
              "type": "workbench"
            },
            "recipe_id": "wls2_armor_boots_1_common_ab_ftue"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_boots_1",
      "stat_curves": {
        "armor": {
          "1": 5,
          "2": 6,
          "3": 7,
          "4": 8,
          "5": 9,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 150,
          "2": 165,
          "3": 180,
          "4": 195,
          "5": 210
        },
        "move_speed_modifier": {
          "1": 0.05,
          "2": 0.05,
          "3": 0.05,
          "4": 0.05,
          "5": 0.05
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
      "image_key": "b3f7481a31fe58f7438c4c6e65d9805e5cd1c708806314bab3eb38904d6bd7cd",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "靴子",
        "name_en": "Boots",
        "description_zh": "最好穿上一双结实的靴子",
        "description_en": "It is better to wear simple boots than hurt your bare feet on nettles",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_boots_1_common 靴子 boots 最好穿上一双结实的靴子 it is better to wear simple boots than hurt your bare feet on nettles armor 护甲 boots boots armor armor_storage"
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
            "value": 150,
            "unit": "",
            "display": "150"
          },
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.05,
            "unit": "%",
            "display": "+5%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 5,
              "max_durability": 150
            },
            "display": {
              "armor": "5",
              "max_durability": "150"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 6,
              "max_durability": 165
            },
            "display": {
              "armor": "6",
              "max_durability": "165"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 7,
              "max_durability": 180
            },
            "display": {
              "armor": "7",
              "max_durability": "180"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 8,
              "max_durability": 195
            },
            "display": {
              "armor": "8",
              "max_durability": "195"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 9,
              "max_durability": 210
            },
            "display": {
              "armor": "9",
              "max_durability": "210"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 10,
              "max_durability": 210
            },
            "display": {
              "armor": "10",
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
          "防御：6 级起每级增加 1，最高 1009。"
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
        "description": "inventory_stack_view_wls2_armor_boots_1_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_1_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_boots_1_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
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
      "item_id": "wls2_armor_boots_1_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_1_uncommon_description",
        "en": {
          "description": "Strong enough for a battle with wild animals",
          "full_description": "Strong enough for a battle with wild animals",
          "name": "Simple boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_1_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_1_uncommon_name",
        "zh": {
          "description": "威力强大，足以应对大型猎物",
          "full_description": "威力强大，足以应对大型猎物",
          "name": "简易靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_1": 2,
            "wls2_resourse_secondary_leather_1": 3,
            "wls2_resourse_secondary_rope_1": 3
          },
          "learn_exp": 200,
          "min_level": 0,
          "type": "workbench",
          "where_to_find_blueprint_hint": "ui_hint_blueprint_epic_t3_desc"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_boots_1_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_ftue_ab_tutorial_trader_slot_2"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_boots_fortified_1",
      "stat_curves": {
        "armor": {
          "1": 6,
          "2": 7,
          "3": 8,
          "4": 9,
          "5": 10,
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
        },
        "move_speed_modifier": {
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
      "image_key": "55f7d198cb8ae94f203cd820b5f6662674fbdcff55e0e95f4d19ef64943f0648",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "简易靴子",
        "name_en": "Simple boots",
        "description_zh": "威力强大，足以应对大型猎物",
        "description_en": "Strong enough for a battle with wild animals",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_boots_1_uncommon 简易靴子 simple boots 威力强大，足以应对大型猎物 strong enough for a battle with wild animals armor 护甲 boots boots armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 6,
            "unit": "",
            "display": "6"
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
          },
          {
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.1,
            "unit": "%",
            "display": "+10%"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 6,
              "dexterity": 1,
              "max_durability": 180
            },
            "display": {
              "armor": "6",
              "dexterity": "+1",
              "max_durability": "180"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 7,
              "dexterity": 1,
              "max_durability": 195
            },
            "display": {
              "armor": "7",
              "dexterity": "+1",
              "max_durability": "195"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 8,
              "dexterity": 1,
              "max_durability": 210
            },
            "display": {
              "armor": "8",
              "dexterity": "+1",
              "max_durability": "210"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 9,
              "dexterity": 2,
              "max_durability": 225
            },
            "display": {
              "armor": "9",
              "dexterity": "+2",
              "max_durability": "225"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 10,
              "dexterity": 3,
              "max_durability": 240
            },
            "display": {
              "armor": "10",
              "dexterity": "+3",
              "max_durability": "240"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 11,
              "dexterity": 3,
              "max_durability": 240
            },
            "display": {
              "armor": "11",
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
          "防御：6 级起每级增加 1，最高 1010。"
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
        "description": "inventory_stack_view_wls_clothes_leather_boots_2_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_leather_boots_2_description",
        "name": "inventory_stack_view_wls_clothes_leather_boots_2_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_leather_boots_2",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_2",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_leather_boots_2_description",
        "en": {
          "description": "Durable leather boots",
          "full_description": "Durable leather boots",
          "name": "Leather boots"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_leather_boots_2_description",
        "name_key": "inventory_stack_view_wls_clothes_leather_boots_2_name",
        "zh": {
          "description": "结实的皮靴。",
          "full_description": "结实的皮靴。",
          "name": "皮靴"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_leather_boots_2",
      "stat_curves": {
        "armor": {
          "default": 25
        },
        "max_durability": {
          "default": 37
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
      "tier": 2,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "f5e0452add70dcf772f930266069a1bda8edae01149fcd808ed04bceac827ae4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "皮靴",
        "name_en": "Leather boots",
        "description_zh": "结实的皮靴。",
        "description_en": "Durable leather boots",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_boots_2 皮靴 leather boots 结实的皮靴。 durable leather boots armor 护甲 boots boots armor armor_storage"
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
        "description": "inventory_stack_view_wls2_armor_boots_2_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_2_common_description",
        "name": "inventory_stack_view_wls2_armor_boots_2_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_leather_boots_2",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_2_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_2_common_description",
        "en": {
          "description": "Durable leather boots",
          "full_description": "Durable leather boots",
          "name": "Leather boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_2_common_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_2_common_name",
        "zh": {
          "description": "结实的皮靴",
          "full_description": "结实的皮靴",
          "name": "皮靴"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_2": 1,
            "wls2_resourse_secondary_leather_2": 2,
            "wls2_resourse_secondary_rope_2": 2
          },
          "learn_exp": 200,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_boots_2_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_50coins_dynamic_town_trader_offer_boots_2"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_boots_2_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_75coins_dynamic_smuggler_offer_boots_upgrade_2"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_leather_boots_2",
      "stat_curves": {
        "armor": {
          "1": 10,
          "2": 11,
          "3": 12,
          "4": 13,
          "5": 14,
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
          "1": 130,
          "2": 140,
          "3": 155,
          "4": 165,
          "5": 175
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
      "image_key": "f5e0452add70dcf772f930266069a1bda8edae01149fcd808ed04bceac827ae4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "皮靴",
        "name_en": "Leather boots",
        "description_zh": "结实的皮靴",
        "description_en": "Durable leather boots",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_boots_2_common 皮靴 leather boots 结实的皮靴 durable leather boots armor 护甲 boots boots armor armor_storage"
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
            "value": 130,
            "unit": "",
            "display": "130"
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
              "armor": 10,
              "max_durability": 130
            },
            "display": {
              "armor": "10",
              "max_durability": "130"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 11,
              "max_durability": 140
            },
            "display": {
              "armor": "11",
              "max_durability": "140"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 12,
              "max_durability": 155
            },
            "display": {
              "armor": "12",
              "max_durability": "155"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 13,
              "max_durability": 165
            },
            "display": {
              "armor": "13",
              "max_durability": "165"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 14,
              "max_durability": 175
            },
            "display": {
              "armor": "14",
              "max_durability": "175"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 15,
              "max_durability": 175
            },
            "display": {
              "armor": "15",
              "max_durability": "175"
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
      "bodypart": 4,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 4,
        "description": "inventory_stack_view_wls2_armor_boots_2_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_2_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_boots_2_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
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
      "item_id": "wls2_armor_boots_2_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_2_uncommon_description",
        "en": {
          "description": "Boots reinforced with nails give added protection",
          "full_description": "Boots reinforced with nails give added protection",
          "name": "Sturdy boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_2_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_2_uncommon_name",
        "zh": {
          "description": "钉子不仅加固了长靴，还提供了额外的保护",
          "full_description": "钉子不仅加固了长靴，还提供了额外的保护",
          "name": "结实的靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_2": 2,
            "wls2_resourse_secondary_leather_2": 3,
            "wls2_resourse_secondary_rope_2": 3
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
                "inventory_stack_id": "wls2_armor_boots_2_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_80coins_dynamic_town_trader_offer_boots_uncommon_2"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_reinforced_leather_boots_2.5",
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
        "dexterity": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 2,
          "5": 3
        },
        "max_durability": {
          "1": 180,
          "2": 200,
          "3": 220,
          "4": 230,
          "5": 250
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
      "image_key": "4577f81056c7a132880f15b6f3cb6d27e855a2abcbc1981c4297271dfd5c04c5",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "结实的靴子",
        "name_en": "Sturdy boots",
        "description_zh": "钉子不仅加固了长靴，还提供了额外的保护",
        "description_en": "Boots reinforced with nails give added protection",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_boots_2_uncommon 结实的靴子 sturdy boots 钉子不仅加固了长靴，还提供了额外的保护 boots reinforced with nails give added protection armor 护甲 boots boots armor armor_storage"
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
              "max_durability": 200
            },
            "display": {
              "armor": "14",
              "dexterity": "+1",
              "max_durability": "200"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 15,
              "dexterity": 1,
              "max_durability": 220
            },
            "display": {
              "armor": "15",
              "dexterity": "+1",
              "max_durability": "220"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 16,
              "dexterity": 2,
              "max_durability": 230
            },
            "display": {
              "armor": "16",
              "dexterity": "+2",
              "max_durability": "230"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 18,
              "dexterity": 3,
              "max_durability": 250
            },
            "display": {
              "armor": "18",
              "dexterity": "+3",
              "max_durability": "250"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 19,
              "dexterity": 3,
              "max_durability": 250
            },
            "display": {
              "armor": "19",
              "dexterity": "+3",
              "max_durability": "250"
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
      "bodypart": 7,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 7,
        "description": "inventory_stack_view_wls_clothes_fur_boots_2_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_fur_boots_2_description",
        "name": "inventory_stack_view_wls_clothes_fur_boots_2_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_fur_boots_2",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_3",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_fur_boots_2_description",
        "en": {
          "description": "These boots are designed to be worn in severely cold weather. It can save you from frostbite and wolves",
          "full_description": "These boots are designed to be worn in severely cold weather. It can save you from frostbite and wolves",
          "name": "Fur boots"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_fur_boots_2_description",
        "name_key": "inventory_stack_view_wls_clothes_fur_boots_2_name",
        "zh": {
          "description": "用来在极为寒冷的天气条件下穿戴，既能防寒，也能防狼。",
          "full_description": "用来在极为寒冷的天气条件下穿戴，既能防寒，也能防狼。",
          "name": "毛皮靴"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_fur_boots_2",
      "stat_curves": {
        "armor": {
          "default": 45
        },
        "max_durability": {
          "default": 50
        },
        "move_speed_modifier": {
          "default": 0.05
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
      "image_key": "f8dccfbc981e3024913d4647cbff5cbd4ced31efed62f1185fcf6091f5e2f7d0",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "毛皮靴",
        "name_en": "Fur boots",
        "description_zh": "用来在极为寒冷的天气条件下穿戴，既能防寒，也能防狼。",
        "description_en": "These boots are designed to be worn in severely cold weather. It can save you from frostbite and wolves",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_boots_3 毛皮靴 fur boots 用来在极为寒冷的天气条件下穿戴，既能防寒，也能防狼。 these boots are designed to be worn in severely cold weather. it can save you from frostbite and wolves armor 护甲 boots boots armor armor_storage"
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
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.05,
            "unit": "%",
            "display": "+5%"
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
        "description": "inventory_stack_view_wls2_armor_boots_3_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_3_common_description",
        "name": "inventory_stack_view_wls2_armor_boots_3_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_boots_3_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_fur_boots_2",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_3_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_3_common_description",
        "en": {
          "description": "These boots are designed to be worn in severely cold weather",
          "full_description": "These boots are designed to be worn in severely cold weather",
          "name": "Fur boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_3_common_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_3_common_name",
        "zh": {
          "description": "用来在极为寒冷的天气条件下穿戴，既能防寒，也能防狼",
          "full_description": "用来在极为寒冷的天气条件下穿戴，既能防寒，也能防狼",
          "name": "毛皮靴"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 1,
            "wls2_resourse_secondary_leather_3": 2,
            "wls2_resourse_secondary_rope_3": 2
          },
          "learn_exp": 400,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_boots_3_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_100coins_dynamic_smuggler_offer_boots_3"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_boots_3_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_warmclothing_trader_offer_boots_t3_common"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_fur_boots_2",
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
        "move_speed_modifier": {
          "1": 0.05,
          "2": 0.05,
          "3": 0.05,
          "4": 0.05,
          "5": 0.05
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
      "image_key": "f8dccfbc981e3024913d4647cbff5cbd4ced31efed62f1185fcf6091f5e2f7d0",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "毛皮靴",
        "name_en": "Fur boots",
        "description_zh": "用来在极为寒冷的天气条件下穿戴，既能防寒，也能防狼",
        "description_en": "These boots are designed to be worn in severely cold weather",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_boots_3_common 毛皮靴 fur boots 用来在极为寒冷的天气条件下穿戴，既能防寒，也能防狼 these boots are designed to be worn in severely cold weather armor 护甲 boots boots armor armor_storage"
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
            "value": 1,
            "unit": "",
            "display": "1"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 20,
              "max_durability": 520
            },
            "display": {
              "armor": "20",
              "max_durability": "520"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 22,
              "max_durability": 580
            },
            "display": {
              "armor": "22",
              "max_durability": "580"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 24,
              "max_durability": 650
            },
            "display": {
              "armor": "24",
              "max_durability": "650"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 26,
              "max_durability": 680
            },
            "display": {
              "armor": "26",
              "max_durability": "680"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 28,
              "max_durability": 720
            },
            "display": {
              "armor": "28",
              "max_durability": "720"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 29,
              "max_durability": 720
            },
            "display": {
              "armor": "29",
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
      "bodypart": 28,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 28,
        "description": "wls2_armor_boots_3_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_head_3_epic_description",
        "name": "wls2_armor_boots_3_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_boots_upgrade_3_icon",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_3_epic",
      "localization": {
        "description_key": "wls2_armor_boots_3_epic_description",
        "en": {
          "description": "All-day hunting — and not a single callus!",
          "full_description": "A sturdy hunting hat that protects your head from the scorching heat in the mountains.",
          "name": "Mountain hunter boots"
        },
        "full_description_key": "wls2_armor_head_3_epic_description",
        "name_key": "wls2_armor_boots_3_epic_name",
        "zh": {
          "description": "在外打猎一整天，脚上也不会起茧！",
          "full_description": "这顶结实的打猎帽可以让您的头部抵抗山里的酷热。",
          "name": "山岭猎人靴"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 1,
            "wls2_resourse_fourfold_nails_3": 3,
            "wls2_resourse_secondary_leather_3": 4,
            "wls2_resourse_secondary_rope_3": 4
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
                "inventory_stack_id": "wls2_armor_boots_3_epic",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_t3_epic_boots"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_easter_24_currency_egg": 500
              },
              "result": {
                "inventory_stack_id": "wls2_armor_boots_3_epic",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter_22_trader_t3_epic_boots"
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
            "stack_id": "wls2_armor_boots_3_epic",
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
            "stack_id": "wls2_armor_boots_3_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_boots_upgrade_3_icon",
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
        "boots",
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
      "image_key": "d31bb7b26028deaf45341435f83342bb85337b52475bc64926c7f805dea3aa49",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "山岭猎人靴",
        "name_en": "Mountain hunter boots",
        "description_zh": "这顶结实的打猎帽可以让您的头部抵抗山里的酷热。",
        "description_en": "A sturdy hunting hat that protects your head from the scorching heat in the mountains.",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_boots_3_epic 山岭猎人靴 mountain hunter boots 这顶结实的打猎帽可以让您的头部抵抗山里的酷热。 a sturdy hunting hat that protects your head from the scorching heat in the mountains. armor 护甲 boots boots armor armor_storage"
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
        "description": "inventory_stack_view_wls2_armor_boots_3_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_3_rare_description",
        "name": "inventory_stack_view_wls2_armor_boots_3_rare_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_boots_3_rare_name_with_wrapping",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_fur_boots_rare",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_3_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_3_rare_description",
        "en": {
          "description": "Makes you look like a bear",
          "full_description": "Makes you look like a bear",
          "name": "Bear fur boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_3_rare_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_3_rare_name",
        "zh": {
          "description": "使你看起来像一只熊",
          "full_description": "使你看起来像一只熊",
          "name": "熊皮靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 3,
            "wls2_resourse_secondary_leather_3": 4,
            "wls2_resourse_secondary_rope_3": 4
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
            "stack_id": "wls2_armor_boots_3_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_fur_boots_rare",
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
          "1": 1060,
          "2": 1165,
          "3": 1270,
          "4": 1375,
          "5": 1480
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
        "boots",
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
      "image_key": "d936d2b66af04f858e99a0d8f167b26e6cba460437a02be73ea807861aa696a6",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "熊皮靴子",
        "name_en": "Bear fur boots",
        "description_zh": "使你看起来像一只熊",
        "description_en": "Makes you look like a bear",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_boots_3_rare 熊皮靴子 bear fur boots 使你看起来像一只熊 makes you look like a bear armor 护甲 boots boots armor armor_storage"
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
            "value": 1060,
            "unit": "",
            "display": "1060"
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
              "armor": 45,
              "dexterity": 2,
              "health_increment": 25,
              "max_durability": 1060
            },
            "display": {
              "armor": "45",
              "dexterity": "+2",
              "health_increment": "+25",
              "max_durability": "1060"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 50,
              "dexterity": 3,
              "health_increment": 30,
              "max_durability": 1165
            },
            "display": {
              "armor": "50",
              "dexterity": "+3",
              "health_increment": "+30",
              "max_durability": "1165"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 54,
              "dexterity": 4,
              "health_increment": 35,
              "max_durability": 1270
            },
            "display": {
              "armor": "54",
              "dexterity": "+4",
              "health_increment": "+35",
              "max_durability": "1270"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 59,
              "dexterity": 5,
              "health_increment": 40,
              "max_durability": 1375
            },
            "display": {
              "armor": "59",
              "dexterity": "+5",
              "health_increment": "+40",
              "max_durability": "1375"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 63,
              "dexterity": 6,
              "health_increment": 45,
              "max_durability": 1480
            },
            "display": {
              "armor": "63",
              "dexterity": "+6",
              "health_increment": "+45",
              "max_durability": "1480"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 64,
              "dexterity": 6,
              "health_increment": 45,
              "max_durability": 1480
            },
            "display": {
              "armor": "64",
              "dexterity": "+6",
              "health_increment": "+45",
              "max_durability": "1480"
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
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 19,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 19,
        "description": "inventory_stack_view_wls2_armor_boots_3_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_3_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_boots_3_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_boots_3_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
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
      "item_id": "wls2_armor_boots_3_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_3_uncommon_description",
        "en": {
          "description": "Not only will it warm you up on a cold day, it will also protect you from the enemy",
          "full_description": "Not only will it warm you up on a cold day, it will also protect you from the enemy",
          "name": "Winter boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_3_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_3_uncommon_name",
        "zh": {
          "description": "不仅能让你在寒冷的日子里暖和起来，还能保护你免受敌人的伤害",
          "full_description": "不仅能让你在寒冷的日子里暖和起来，还能保护你免受敌人的伤害",
          "name": "冬季靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 2,
            "wls2_resourse_secondary_leather_3": 3,
            "wls2_resourse_secondary_rope_3": 3
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
                "inventory_stack_id": "wls2_armor_boots_3_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_static_warmclothing_trader_offer_boots_t3_uncommon"
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
            "stack_id": "wls2_armor_boots_3_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary03/armor_boots_upgrade_3",
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
          "1": 680,
          "2": 750,
          "3": 820,
          "4": 890,
          "5": 950
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
        "boots",
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
      "image_key": "02692476d68beef53597f6bbb0fab66767123830a26ff0e46cd87698ff69e24c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "冬季靴子",
        "name_en": "Winter boots",
        "description_zh": "不仅能让你在寒冷的日子里暖和起来，还能保护你免受敌人的伤害",
        "description_en": "Not only will it warm you up on a cold day, it will also protect you from the enemy",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_boots_3_uncommon 冬季靴子 winter boots 不仅能让你在寒冷的日子里暖和起来，还能保护你免受敌人的伤害 not only will it warm you up on a cold day, it will also protect you from the enemy armor 护甲 boots boots armor armor_storage"
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
            "value": 680,
            "unit": "",
            "display": "680"
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
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 25,
              "dexterity": 1,
              "max_durability": 680
            },
            "display": {
              "armor": "25",
              "dexterity": "+1",
              "max_durability": "680"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 28,
              "dexterity": 1,
              "max_durability": 750
            },
            "display": {
              "armor": "28",
              "dexterity": "+1",
              "max_durability": "750"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 30,
              "dexterity": 1,
              "max_durability": 820
            },
            "display": {
              "armor": "30",
              "dexterity": "+1",
              "max_durability": "820"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 33,
              "dexterity": 2,
              "max_durability": 890
            },
            "display": {
              "armor": "33",
              "dexterity": "+2",
              "max_durability": "890"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 35,
              "dexterity": 3,
              "max_durability": 950
            },
            "display": {
              "armor": "35",
              "dexterity": "+3",
              "max_durability": "950"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 36,
              "dexterity": 3,
              "max_durability": 950
            },
            "display": {
              "armor": "36",
              "dexterity": "+3",
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
      "bodypart": 5,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 5,
        "description": "inventory_stack_view_wls_clothes_metal_boots_3_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_clothes_metal_boots_3_description",
        "name": "inventory_stack_view_wls_clothes_metal_boots_3_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_metal_boots_3",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_4",
      "localization": {
        "description_key": "inventory_stack_view_wls_clothes_metal_boots_3_description",
        "en": {
          "description": "Exceptionally strong armored boots will protect your feet from fang bites.",
          "full_description": "Exceptionally strong armored boots will protect your feet from fang bites.",
          "name": "Armored boots"
        },
        "full_description_key": "inventory_stack_view_wls_clothes_metal_boots_3_description",
        "name_key": "inventory_stack_view_wls_clothes_metal_boots_3_name",
        "zh": {
          "description": "这双特别强的装甲靴子可以抵御任何獠牙。",
          "full_description": "这双特别强的装甲靴子可以抵御任何獠牙。",
          "name": "装甲靴"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_metal_boots_3",
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
      "image_key": "d2addb8a9ae5c74bf3d5cdf44cb7f08d6a7cd6b2beaeee207e476397e15f4a7e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "装甲靴",
        "name_en": "Armored boots",
        "description_zh": "这双特别强的装甲靴子可以抵御任何獠牙。",
        "description_en": "Exceptionally strong armored boots will protect your feet from fang bites.",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_boots_4 装甲靴 armored boots 这双特别强的装甲靴子可以抵御任何獠牙。 exceptionally strong armored boots will protect your feet from fang bites. armor 护甲 boots boots armor armor_storage"
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
        "description": "inventory_stack_view_wls2_armor_boots_4_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_4_common_description",
        "name": "inventory_stack_view_wls2_armor_boots_4_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
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
      "item_id": "wls2_armor_boots_4_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_4_common_description",
        "en": {
          "description": "You can cross the Wild West in these boots",
          "full_description": "You can cross the Wild West in these boots",
          "name": "Cowboy boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_4_common_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_4_common_name",
        "zh": {
          "description": "穿上这双靴子，就能穿越蛮荒的西部。",
          "full_description": "穿上这双靴子，就能穿越蛮荒的西部。",
          "name": "牛仔靴"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_4": 1,
            "wls2_resourse_secondary_leather_4": 2,
            "wls2_resourse_secondary_rope_4": 2
          },
          "learn_exp": 800,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_boots_4_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_150coins_dynamic_town_trader_offer_boots_common_4"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_boots_4_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_16"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_boots_4_icon",
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
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1
        },
        "max_durability": {
          "1": 1230,
          "2": 1360,
          "3": 1480,
          "4": 1600,
          "5": 1730
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
      "image_key": "dd43ccaa9793cc581642f2d3795b3e8bb59157cf0ca69060c407a8e71845755b",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "牛仔靴",
        "name_en": "Cowboy boots",
        "description_zh": "穿上这双靴子，就能穿越蛮荒的西部。",
        "description_en": "You can cross the Wild West in these boots",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_boots_4_common 牛仔靴 cowboy boots 穿上这双靴子，就能穿越蛮荒的西部。 you can cross the wild west in these boots armor 护甲 boots boots armor armor_storage"
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
            "value": 1230,
            "unit": "",
            "display": "1230"
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
              "armor": 40,
              "max_durability": 1230
            },
            "display": {
              "armor": "40",
              "max_durability": "1230"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 44,
              "max_durability": 1360
            },
            "display": {
              "armor": "44",
              "max_durability": "1360"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 48,
              "max_durability": 1480
            },
            "display": {
              "armor": "48",
              "max_durability": "1480"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 52,
              "max_durability": 1600
            },
            "display": {
              "armor": "52",
              "max_durability": "1600"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 56,
              "max_durability": 1730
            },
            "display": {
              "armor": "56",
              "max_durability": "1730"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 57,
              "max_durability": 1730
            },
            "display": {
              "armor": "57",
              "max_durability": "1730"
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
      "bodypart": 29,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 29,
        "description": "wls2_armor_boots_4_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_boots_4_epic_description",
        "name": "wls2_armor_boots_4_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_boots_4_epic_icon",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_4_epic",
      "localization": {
        "description_key": "wls2_armor_boots_4_epic_description",
        "en": {
          "description": "You can cross a river in these boots and keep your feet dry!",
          "full_description": "You can cross a river in these boots and keep your feet dry!",
          "name": "Rubberized boots"
        },
        "full_description_key": "wls2_armor_boots_4_epic_description",
        "name_key": "wls2_armor_boots_4_epic_name",
        "zh": {
          "description": "穿着这双鞋子过河，不会把你的脚打湿！",
          "full_description": "穿着这双鞋子过河，不会把你的脚打湿！",
          "name": "橡胶靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 1,
            "wls2_resourse_fourfold_nails_4": 4,
            "wls2_resourse_secondary_leather_4": 4,
            "wls2_resourse_secondary_rope_4": 6
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
            "stack_id": "wls2_armor_boots_4_epic",
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
            "stack_id": "wls2_armor_boots_4_epic",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_boots_4_epic_icon",
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
        "evasion": {
          "1": 0.01,
          "2": 0.02,
          "3": 0.03,
          "4": 0.04,
          "5": 0.05
        },
        "max_durability": {
          "1": 6020,
          "2": 6620,
          "3": 7220,
          "4": 7800,
          "5": 8450
        },
        "move_speed_modifier": {
          "1": 0.23,
          "2": 0.23,
          "3": 0.23,
          "4": 0.23,
          "5": 0.23
        },
        "reduced_detection_radius": {
          "1": 0.05,
          "2": 0.07,
          "3": 0.09,
          "4": 0.12,
          "5": 0.15
        },
        "warm_modifier": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 1
        },
        "water_pressure_resistance": {
          "1": 0.06,
          "2": 0.06,
          "3": 0.06,
          "4": 0.06,
          "5": 0.06
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
        "armor_storage"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_15"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_25"
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
          "server_wallets_transaction_id": "server_wallets_shop_transaction_50"
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
      "image_key": "68dd0aa02f5fc85ba7ddc8625e50f0add10db0b6a5b9b28e8f5a440a3b84fdca",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "橡胶靴子",
        "name_en": "Rubberized boots",
        "description_zh": "穿着这双鞋子过河，不会把你的脚打湿！",
        "description_en": "You can cross a river in these boots and keep your feet dry!",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_boots_4_epic 橡胶靴子 rubberized boots 穿着这双鞋子过河，不会把你的脚打湿！ you can cross a river in these boots and keep your feet dry! armor 护甲 boots boots armor armor_storage"
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
            "value": 6020,
            "unit": "",
            "display": "6020"
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
            "value": 1,
            "unit": "",
            "display": "1"
          },
          {
            "key": "water_pressure_resistance",
            "label": "沼泽减速",
            "value": 0.06,
            "unit": "%",
            "display": "-6%"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 120,
              "dexterity": 2,
              "evasion": 0.01,
              "max_durability": 6020,
              "reduced_detection_radius": 0.05
            },
            "display": {
              "armor": "120",
              "dexterity": "+2",
              "evasion": "+1%",
              "max_durability": "6020",
              "reduced_detection_radius": "+5%"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 132,
              "dexterity": 4,
              "evasion": 0.02,
              "max_durability": 6620,
              "reduced_detection_radius": 0.07
            },
            "display": {
              "armor": "132",
              "dexterity": "+4",
              "evasion": "+2%",
              "max_durability": "6620",
              "reduced_detection_radius": "+7%"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 144,
              "dexterity": 6,
              "evasion": 0.03,
              "max_durability": 7220,
              "reduced_detection_radius": 0.09
            },
            "display": {
              "armor": "144",
              "dexterity": "+6",
              "evasion": "+3%",
              "max_durability": "7220",
              "reduced_detection_radius": "+9%"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 156,
              "dexterity": 8,
              "evasion": 0.04,
              "max_durability": 7800,
              "reduced_detection_radius": 0.12
            },
            "display": {
              "armor": "156",
              "dexterity": "+8",
              "evasion": "+4%",
              "max_durability": "7800",
              "reduced_detection_radius": "+12%"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 168,
              "dexterity": 10,
              "evasion": 0.05,
              "max_durability": 8450,
              "reduced_detection_radius": 0.15
            },
            "display": {
              "armor": "168",
              "dexterity": "+10",
              "evasion": "+5%",
              "max_durability": "8450",
              "reduced_detection_radius": "+15%"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 169,
              "dexterity": 10,
              "evasion": 0.05,
              "max_durability": 8450,
              "reduced_detection_radius": 0.15
            },
            "display": {
              "armor": "169",
              "dexterity": "+10",
              "evasion": "+5%",
              "max_durability": "8450",
              "reduced_detection_radius": "+15%"
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
      "bodypart": 10,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 10,
        "description": "inventory_stack_view_wls2_armor_boots_4_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_4_rare_description",
        "name": "inventory_stack_view_wls2_armor_boots_4_rare_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_boots_4_rare_name_with_wrapping",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls2_armor_boots_4_rare_icon",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_4_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_4_rare_description",
        "en": {
          "description": "Boots with spurs on the back of the heel",
          "full_description": "Boots with spurs on the back of the heel",
          "name": "Gunslinger boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_4_rare_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_4_rare_name",
        "zh": {
          "description": "脚跟处带有马刺的长靴",
          "full_description": "脚跟处带有马刺的长靴",
          "name": "枪手靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_4": 3,
            "wls2_resourse_secondary_leather_4": 4,
            "wls2_resourse_secondary_rope_4": 4
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
                "inventory_stack_id": "wls2_armor_boots_4_rare",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_18"
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
            "stack_id": "wls2_armor_boots_4_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_boots_4_rare_icon",
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
          "2": 3,
          "3": 4,
          "4": 5,
          "5": 6
        },
        "max_durability": {
          "1": 3950,
          "2": 4340,
          "3": 4730,
          "4": 5140,
          "5": 5520
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
      "image_key": "a34e89456a2ba401be6157b405a37c694519497f33204e7b1ec40c8359d25206",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "枪手靴子",
        "name_en": "Gunslinger boots",
        "description_zh": "脚跟处带有马刺的长靴",
        "description_en": "Boots with spurs on the back of the heel",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_boots_4_rare 枪手靴子 gunslinger boots 脚跟处带有马刺的长靴 boots with spurs on the back of the heel armor 护甲 boots boots armor armor_storage"
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
            "value": 3950,
            "unit": "",
            "display": "3950"
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
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 90,
              "dexterity": 2,
              "max_durability": 3950,
              "reduced_detection_radius": 0.06
            },
            "display": {
              "armor": "90",
              "dexterity": "+2",
              "max_durability": "3950",
              "reduced_detection_radius": "+6%"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 99,
              "dexterity": 3,
              "max_durability": 4340,
              "reduced_detection_radius": 0.07
            },
            "display": {
              "armor": "99",
              "dexterity": "+3",
              "max_durability": "4340",
              "reduced_detection_radius": "+7%"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 108,
              "dexterity": 4,
              "max_durability": 4730,
              "reduced_detection_radius": 0.08
            },
            "display": {
              "armor": "108",
              "dexterity": "+4",
              "max_durability": "4730",
              "reduced_detection_radius": "+8%"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 117,
              "dexterity": 5,
              "max_durability": 5140,
              "reduced_detection_radius": 0.09
            },
            "display": {
              "armor": "117",
              "dexterity": "+5",
              "max_durability": "5140",
              "reduced_detection_radius": "+9%"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 126,
              "dexterity": 6,
              "max_durability": 5520,
              "reduced_detection_radius": 0.1
            },
            "display": {
              "armor": "126",
              "dexterity": "+6",
              "max_durability": "5520",
              "reduced_detection_radius": "+10%"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 127,
              "dexterity": 6,
              "max_durability": 5520,
              "reduced_detection_radius": 0.1
            },
            "display": {
              "armor": "127",
              "dexterity": "+6",
              "max_durability": "5520",
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
        "description": "inventory_stack_view_wls2_armor_boots_4_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_4_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_boots_4_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
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
      "item_id": "wls2_armor_boots_4_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_4_uncommon_description",
        "en": {
          "description": "Practical boots for a true ranger",
          "full_description": "Practical boots for a true ranger",
          "name": "Ranger boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_4_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_4_uncommon_name",
        "zh": {
          "description": "深受硬核游侠喜爱的实用型靴子",
          "full_description": "深受硬核游侠喜爱的实用型靴子",
          "name": "游侠靴"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_4": 2,
            "wls2_resourse_secondary_leather_4": 3,
            "wls2_resourse_secondary_rope_4": 3
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
                "inventory_stack_id": "wls2_armor_boots_4_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_350coins_dynamic_town_trader_offer_boots_uncommon_4"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_boots_4_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_17"
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
            "stack_id": "wls2_armor_boots_4_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary03/wls2_armor_boots_upgrade_4_icon",
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
          "1": 1990,
          "2": 2180,
          "3": 2380,
          "4": 2580,
          "5": 2780
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
      "image_key": "b4fabbbf4997fecdf57ef2e0879a049f1e7635b3c5c83915f33845f830a0034c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "游侠靴",
        "name_en": "Ranger boots",
        "description_zh": "深受硬核游侠喜爱的实用型靴子",
        "description_en": "Practical boots for a true ranger",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_boots_4_uncommon 游侠靴 ranger boots 深受硬核游侠喜爱的实用型靴子 practical boots for a true ranger armor 护甲 boots boots armor armor_storage"
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
            "value": 1990,
            "unit": "",
            "display": "1990"
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
              "armor": 50,
              "dexterity": 1,
              "max_durability": 1990
            },
            "display": {
              "armor": "50",
              "dexterity": "+1",
              "max_durability": "1990"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 55,
              "dexterity": 1,
              "max_durability": 2180
            },
            "display": {
              "armor": "55",
              "dexterity": "+1",
              "max_durability": "2180"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 60,
              "dexterity": 1,
              "max_durability": 2380
            },
            "display": {
              "armor": "60",
              "dexterity": "+1",
              "max_durability": "2380"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 65,
              "dexterity": 2,
              "max_durability": 2580
            },
            "display": {
              "armor": "65",
              "dexterity": "+2",
              "max_durability": "2580"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 70,
              "dexterity": 3,
              "max_durability": 2780
            },
            "display": {
              "armor": "70",
              "dexterity": "+3",
              "max_durability": "2780"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 71,
              "dexterity": 3,
              "max_durability": 2780
            },
            "display": {
              "armor": "71",
              "dexterity": "+3",
              "max_durability": "2780"
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
      "bodypart": null,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "description": "inventory_stack_view_Armor_boots_5_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_Armor_boots_5_description",
        "name": "inventory_stack_view_Armor_boots_5_name",
        "sorting_group_id": "legasy",
        "sprite": "UI_WW_AlphaBinary03/wls_clothes_metal_boots_3",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_5",
      "localization": {
        "description_key": "inventory_stack_view_Armor_boots_5_description",
        "en": {
          "description": "A real cowboy can be recognized by his clothes. Stylish and comfortable. These boots are designed to conquer the wild west.",
          "full_description": "A real cowboy can be recognized by his clothes. Stylish and comfortable. These boots are designed to conquer the wild west.",
          "name": "Ranger boots"
        },
        "full_description_key": "inventory_stack_view_Armor_boots_5_description",
        "name_key": "inventory_stack_view_Armor_boots_5_name",
        "zh": {
          "description": "真正的牛仔会穿着既时髦又舒适的标志性服装。这双靴子就是为了征服狂野西部而生。",
          "full_description": "真正的牛仔会穿着既时髦又舒适的标志性服装。这双靴子就是为了征服狂野西部而生。",
          "name": "游侠靴"
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
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_metal_boots_3",
      "stat_curves": {
        "armor": {
          "default": 180
        },
        "max_durability": {
          "default": 75
        },
        "move_speed_modifier": {
          "default": 0.25
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
      "tier": 5,
      "tool_id": null,
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "d2addb8a9ae5c74bf3d5cdf44cb7f08d6a7cd6b2beaeee207e476397e15f4a7e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "游侠靴",
        "name_en": "Ranger boots",
        "description_zh": "真正的牛仔会穿着既时髦又舒适的标志性服装。这双靴子就是为了征服狂野西部而生。",
        "description_en": "A real cowboy can be recognized by his clothes. Stylish and comfortable. These boots are designed to conquer the wild west.",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "未标注",
        "search_text": "wls2_armor_boots_5 游侠靴 ranger boots 真正的牛仔会穿着既时髦又舒适的标志性服装。这双靴子就是为了征服狂野西部而生。 a real cowboy can be recognized by his clothes. stylish and comfortable. these boots are designed to conquer the wild west. armor 护甲 boots boots armor armor_storage"
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
            "key": "move_speed_modifier",
            "label": "移动速度加成",
            "value": 0.25,
            "unit": "%",
            "display": "+25%"
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
      "bodypart": 21,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 21,
        "description": "inventory_stack_view_wls2_armor_boots_5_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_5_common_description",
        "name": "inventory_stack_view_wls2_armor_boots_5_common_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_boots_5_common_name_with_wrapping",
        "rarity": "common",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_boots_5_icon",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_5_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_5_common_description",
        "en": {
          "description": "Clothing of the Sheriff's Deputy",
          "full_description": "Clothing of the Sheriff's Deputy",
          "name": "Deputy's boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_5_common_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_5_common_name",
        "zh": {
          "description": "副警长的服装",
          "full_description": "副警长的服装",
          "name": "副警长靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_5": 1,
            "wls2_resourse_secondary_leather_5": 2,
            "wls2_resourse_secondary_rope_5": 2
          },
          "learn_exp": 1600,
          "min_level": 1,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_boots_5_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_300coins_dynamic_town_trader_offer_boots_common_5"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_boots_5_common",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_19"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_boots_5_icon",
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
          "1": 0.5,
          "2": 0.5,
          "3": 0.5,
          "4": 0.5,
          "5": 0.5
        },
        "max_durability": {
          "1": 4330,
          "2": 4770,
          "3": 5200,
          "4": 5630,
          "5": 6050
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
      "image_key": "589bcd10a74255b2224bbdbb9859d3c6dd96a406dba34dd46217d8578b03621e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "副警长靴子",
        "name_en": "Deputy's boots",
        "description_zh": "副警长的服装",
        "description_en": "Clothing of the Sheriff's Deputy",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_boots_5_common 副警长靴子 deputy's boots 副警长的服装 clothing of the sheriff's deputy armor 护甲 boots boots armor armor_storage"
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
            "value": 4330,
            "unit": "",
            "display": "4330"
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
              "armor": 80,
              "max_durability": 4330
            },
            "display": {
              "armor": "80",
              "max_durability": "4330"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 88,
              "max_durability": 4770
            },
            "display": {
              "armor": "88",
              "max_durability": "4770"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 96,
              "max_durability": 5200
            },
            "display": {
              "armor": "96",
              "max_durability": "5200"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 104,
              "max_durability": 5630
            },
            "display": {
              "armor": "104",
              "max_durability": "5630"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 112,
              "max_durability": 6050
            },
            "display": {
              "armor": "112",
              "max_durability": "6050"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 113,
              "max_durability": 6050
            },
            "display": {
              "armor": "113",
              "max_durability": "6050"
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
      "bodypart": 30,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 30,
        "description": "wls2_armor_boots_5_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_boots_5_epic_description",
        "name": "wls2_armor_boots_5_epic_name",
        "name_with_wrapping": "wls2_armor_boots_5_epic_name_with_wrapping",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_boots_5_epic_icon",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_5_epic",
      "localization": {
        "description_key": "wls2_armor_boots_5_epic_description",
        "en": {
          "description": "Reliable. Comfortable. Stylish. Just one look — and ya know who's the boss!",
          "full_description": "Reliable. Comfortable. Stylish. Just one look — and ya know who's the boss!",
          "name": "Reinforced boots"
        },
        "full_description_key": "wls2_armor_boots_5_epic_description",
        "name_key": "wls2_armor_boots_5_epic_name",
        "zh": {
          "description": "可靠、舒服、时尚。只需一眼，你就知道谁才是真正的老大！",
          "full_description": "可靠、舒服、时尚。只需一眼，你就知道谁才是真正的老大！",
          "name": "强化的靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 4,
            "wls2_resourse_fourfold_nails_5": 5,
            "wls2_resourse_secondary_leather_5": 4,
            "wls2_resourse_secondary_rope_5": 6
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
            "stack_id": "wls2_armor_boots_5_epic",
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
            "stack_id": "wls2_armor_boots_5_epic",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_boots_5_epic_icon",
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
        "boots",
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
      "image_key": "40964741745f86e2ef3d3088e4f89bdb070e8f6242c4d309313cbdf1467d75a4",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "强化的靴子",
        "name_en": "Reinforced boots",
        "description_zh": "可靠、舒服、时尚。只需一眼，你就知道谁才是真正的老大！",
        "description_en": "Reliable. Comfortable. Stylish. Just one look — and ya know who's the boss!",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_boots_5_epic 强化的靴子 reinforced boots 可靠、舒服、时尚。只需一眼，你就知道谁才是真正的老大！ reliable. comfortable. stylish. just one look — and ya know who's the boss! armor 护甲 boots boots armor armor_storage"
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
        "has_direct_recipe": true,
        "has_stats": true,
        "has_upgrade": true,
        "player_scope_layer": "core_player_equipment"
      },
      "backpack": null,
      "backpack_id": null,
      "bodypart": 23,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 23,
        "description": "inventory_stack_view_wls2_armor_boots_5_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_5_rare_description",
        "name": "inventory_stack_view_wls2_armor_boots_5_rare_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_boots_5_rare_name_with_wrapping",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_boots_5_rare_icon",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_5_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_5_rare_description",
        "en": {
          "description": "These boots were designed to conquer the Wild West",
          "full_description": "These boots were designed to conquer the Wild West",
          "name": "Sheriff's boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_5_rare_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_5_rare_name",
        "zh": {
          "description": "这双靴子就是为了征服狂野西部而生",
          "full_description": "这双靴子就是为了征服狂野西部而生",
          "name": "警长靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_5": 3,
            "wls2_resourse_secondary_leather_5": 4,
            "wls2_resourse_secondary_rope_5": 4
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
            "stack_id": "wls2_armor_boots_5_rare",
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
            "stack_id": "wls2_armor_boots_5_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_boots_5_rare_icon",
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
          "1": 12600,
          "2": 13900,
          "3": 15100,
          "4": 16350,
          "5": 17600
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
      "image_key": "6ae83e7f773d08e4e1804d054ec2f9be2dbecc16827d490e5016ff365714f5c3",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "警长靴子",
        "name_en": "Sheriff's boots",
        "description_zh": "这双靴子就是为了征服狂野西部而生",
        "description_en": "These boots were designed to conquer the Wild West",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_boots_5_rare 警长靴子 sheriff's boots 这双靴子就是为了征服狂野西部而生 these boots were designed to conquer the wild west armor 护甲 boots boots armor armor_storage"
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
            "value": 12600,
            "unit": "",
            "display": "12600"
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
              "max_durability": 12600
            },
            "display": {
              "armor": "152",
              "dexterity": "+2",
              "firearm_resistance": "+4%",
              "max_durability": "12600"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 167,
              "dexterity": 3,
              "firearm_resistance": 0.08,
              "max_durability": 13900
            },
            "display": {
              "armor": "167",
              "dexterity": "+3",
              "firearm_resistance": "+8%",
              "max_durability": "13900"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 182,
              "dexterity": 4,
              "firearm_resistance": 0.12,
              "max_durability": 15100
            },
            "display": {
              "armor": "182",
              "dexterity": "+4",
              "firearm_resistance": "+12%",
              "max_durability": "15100"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 198,
              "dexterity": 5,
              "firearm_resistance": 0.16,
              "max_durability": 16350
            },
            "display": {
              "armor": "198",
              "dexterity": "+5",
              "firearm_resistance": "+16%",
              "max_durability": "16350"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 213,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 17600
            },
            "display": {
              "armor": "213",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
              "max_durability": "17600"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 214,
              "dexterity": 6,
              "firearm_resistance": 0.2,
              "max_durability": 17600
            },
            "display": {
              "armor": "214",
              "dexterity": "+6",
              "firearm_resistance": "+20%",
              "max_durability": "17600"
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
        "description": "inventory_stack_view_wls2_armor_boots_5_rare_crocodile_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_5_rare_crocodile_description",
        "name": "inventory_stack_view_wls2_armor_boots_5_rare_crocodile_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_armor_boots_5_rare_crocodile_icon",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_5_rare_crocodile",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_5_rare_crocodile_description",
        "en": {
          "description": "Sturdy boots for swampy and difficult terrain. A full Hunter set will protect against mosquitoes",
          "full_description": "Sturdy boots for swampy and difficult terrain. A full Hunter set will protect against mosquitoes",
          "name": "Alligator hunter boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_5_rare_crocodile_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_5_rare_crocodile_name",
        "zh": {
          "description": "坚固的靴子用于沼泽和困难的地形。一整套猎人装备将保护免受蚊子的侵扰。",
          "full_description": "坚固的靴子用于沼泽和困难的地形。一整套猎人装备将保护免受蚊子的侵扰。",
          "name": "短吻鳄猎人靴"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_5": 3,
            "wls2_resourse_primary_hide_alligator": 1,
            "wls2_resourse_secondary_leather_5": 1,
            "wls2_resourse_secondary_rope_5": 4
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
            "stack_id": "wls2_armor_boots_5_rare_crocodile",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_armor_boots_5_rare_crocodile_icon",
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
          "1": 12600,
          "2": 13900,
          "3": 15100,
          "4": 16350,
          "5": 17600
        },
        "mosquito_invulnerability": {
          "default": 1
        },
        "move_speed_modifier": {
          "1": 0.2,
          "2": 0.2,
          "3": 0.2,
          "4": 0.2,
          "5": 0.2
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
      "subcategory": "boots",
      "tags": [
        "boots",
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
      "image_key": "d8b8729211de55c7f42e344c115bcd5fbca9937202492cec10ce8a9b174c3276",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "短吻鳄猎人靴",
        "name_en": "Alligator hunter boots",
        "description_zh": "坚固的靴子用于沼泽和困难的地形。一整套猎人装备将保护免受蚊子的侵扰。",
        "description_en": "Sturdy boots for swampy and difficult terrain. A full Hunter set will protect against mosquitoes",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_boots_5_rare_crocodile 短吻鳄猎人靴 alligator hunter boots 坚固的靴子用于沼泽和困难的地形。一整套猎人装备将保护免受蚊子的侵扰。 sturdy boots for swampy and difficult terrain. a full hunter set will protect against mosquitoes armor 护甲 boots boots armor armor_storage"
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
            "value": 12600,
            "unit": "",
            "display": "12600"
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
            "value": 0.1,
            "unit": "%",
            "display": "-10%"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 152,
              "dexterity": 2,
              "max_durability": 12600,
              "swamp_animal_resistance": 0.04
            },
            "display": {
              "armor": "152",
              "dexterity": "+2",
              "max_durability": "12600",
              "swamp_animal_resistance": "+4%"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 167,
              "dexterity": 3,
              "max_durability": 13900,
              "swamp_animal_resistance": 0.08
            },
            "display": {
              "armor": "167",
              "dexterity": "+3",
              "max_durability": "13900",
              "swamp_animal_resistance": "+8%"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 182,
              "dexterity": 4,
              "max_durability": 15100,
              "swamp_animal_resistance": 0.12
            },
            "display": {
              "armor": "182",
              "dexterity": "+4",
              "max_durability": "15100",
              "swamp_animal_resistance": "+12%"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 198,
              "dexterity": 5,
              "max_durability": 16350,
              "swamp_animal_resistance": 0.16
            },
            "display": {
              "armor": "198",
              "dexterity": "+5",
              "max_durability": "16350",
              "swamp_animal_resistance": "+16%"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 213,
              "dexterity": 6,
              "max_durability": 17600,
              "swamp_animal_resistance": 0.2
            },
            "display": {
              "armor": "213",
              "dexterity": "+6",
              "max_durability": "17600",
              "swamp_animal_resistance": "+20%"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 214,
              "dexterity": 6,
              "max_durability": 17600,
              "swamp_animal_resistance": 0.2
            },
            "display": {
              "armor": "214",
              "dexterity": "+6",
              "max_durability": "17600",
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
        "description": "inventory_stack_view_wls2_armor_boots_5_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_5_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_boots_5_uncommon_name",
        "name_with_wrapping": "inventory_stack_view_wls2_armor_boots_5_uncommon_name_with_wrapping",
        "rarity": "uncommon",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_boots_upgrade_5_icon",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_5_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_5_uncommon_description",
        "en": {
          "description": "Comfortable for horse riding, and for running on your own two feet",
          "full_description": "Comfortable for horse riding, and for running on your own two feet",
          "name": "Gunfighter's boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_5_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_5_uncommon_name",
        "zh": {
          "description": "无论是骑马还是走路，都会让你倍感舒适",
          "full_description": "无论是骑马还是走路，都会让你倍感舒适",
          "name": "枪手靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_5": 2,
            "wls2_resourse_secondary_leather_5": 3,
            "wls2_resourse_secondary_rope_5": 3
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
                "inventory_stack_id": "wls2_armor_boots_5_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_500coins_dynamic_town_trader_offer_boots_uncommon_5"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_boots_5_uncommon",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_south_trader_merchant_dymamic_armor_20"
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
            "stack_id": "wls2_armor_boots_5_uncommon",
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
            "stack_id": "wls2_armor_boots_5_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_boots_upgrade_5_icon",
      "stat_curves": {
        "armor": {
          "1": 108,
          "2": 119,
          "3": 130,
          "4": 140,
          "5": 151,
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
          "1": 6550,
          "2": 7200,
          "3": 7850,
          "4": 8500,
          "5": 9200
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
      "image_key": "62c4786c86dd53a336ecfb78d15ad91b7a67620ba1f8e2de8bec1b1b9b4cb12d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "枪手靴子",
        "name_en": "Gunfighter's boots",
        "description_zh": "无论是骑马还是走路，都会让你倍感舒适",
        "description_en": "Comfortable for horse riding, and for running on your own two feet",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_boots_5_uncommon 枪手靴子 gunfighter's boots 无论是骑马还是走路，都会让你倍感舒适 comfortable for horse riding, and for running on your own two feet armor 护甲 boots boots armor armor_storage"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 108,
            "unit": "",
            "display": "108"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 6550,
            "unit": "",
            "display": "6550"
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
              "armor": 108,
              "dexterity": 1,
              "max_durability": 6550
            },
            "display": {
              "armor": "108",
              "dexterity": "+1",
              "max_durability": "6550"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 119,
              "dexterity": 2,
              "max_durability": 7200
            },
            "display": {
              "armor": "119",
              "dexterity": "+2",
              "max_durability": "7200"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 130,
              "dexterity": 3,
              "max_durability": 7850
            },
            "display": {
              "armor": "130",
              "dexterity": "+3",
              "max_durability": "7850"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 140,
              "dexterity": 4,
              "max_durability": 8500
            },
            "display": {
              "armor": "140",
              "dexterity": "+4",
              "max_durability": "8500"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 151,
              "dexterity": 5,
              "max_durability": 9200
            },
            "display": {
              "armor": "151",
              "dexterity": "+5",
              "max_durability": "9200"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 152,
              "dexterity": 5,
              "max_durability": 9200
            },
            "display": {
              "armor": "152",
              "dexterity": "+5",
              "max_durability": "9200"
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
          "防御：6 级起每级增加 1，最高 1151。"
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
        "description": "inventory_stack_view_wls2_armor_boots_6_common_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_6_common_description",
        "name": "inventory_stack_view_wls2_armor_boots_6_common_name",
        "rarity": "common",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_armor_boots_6_common",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_6_common",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_6_common_description",
        "en": {
          "description": "Sturdy soles for the roaming soul",
          "full_description": "Sturdy soles for the roaming soul",
          "name": "Wanderer boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_6_common_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_6_common_name",
        "zh": {
          "description": "漫游的灵魂需要坚固的鞋底",
          "full_description": "漫游的灵魂需要坚固的鞋底",
          "name": "流浪者靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_6": 1,
            "wls2_resourse_secondary_leather_6": 2,
            "wls2_resourse_secondary_rope_6": 2
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
      "sprite": "UI_WW_AlphaBinary08/wls2_armor_boots_6_common",
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
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0
        },
        "max_durability": {
          "1": 8750,
          "2": 9600,
          "3": 10500,
          "4": 11350,
          "5": 12250
        },
        "move_speed_modifier": {
          "1": 0.05,
          "2": 0.05,
          "3": 0.05,
          "4": 0.05,
          "5": 0.05
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
      "image_key": "394a9df7621c24b8dfa4166f636f6676c6e7cd6355905383a9489f86a7f23843",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "流浪者靴子",
        "name_en": "Wanderer boots",
        "description_zh": "漫游的灵魂需要坚固的鞋底",
        "description_en": "Sturdy soles for the roaming soul",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_boots_6_common 流浪者靴子 wanderer boots 漫游的灵魂需要坚固的鞋底 sturdy soles for the roaming soul armor 护甲 boots boots armor armor_storage"
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
            "value": 8750,
            "unit": "",
            "display": "8750"
          },
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 0,
            "unit": "",
            "display": "0"
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
              "armor": 160,
              "max_durability": 8750
            },
            "display": {
              "armor": "160",
              "max_durability": "8750"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 176,
              "max_durability": 9600
            },
            "display": {
              "armor": "176",
              "max_durability": "9600"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 192,
              "max_durability": 10500
            },
            "display": {
              "armor": "192",
              "max_durability": "10500"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 208,
              "max_durability": 11350
            },
            "display": {
              "armor": "208",
              "max_durability": "11350"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 224,
              "max_durability": 12250
            },
            "display": {
              "armor": "224",
              "max_durability": "12250"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 225,
              "max_durability": 12250
            },
            "display": {
              "armor": "225",
              "max_durability": "12250"
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
      "bodypart": 38,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 38,
        "description": "inventory_stack_view_wls2_armor_boots_6_epic_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_6_epic_description",
        "name": "inventory_stack_view_wls2_armor_boots_6_epic_name",
        "rarity": "epic",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary04/wls2_armor_boots_6_epic",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_6_epic",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_6_epic_description",
        "en": {
          "description": "Sturdy boots lined with fur and equipped with spikes for stability on snow and ice",
          "full_description": "Sturdy boots lined with fur and equipped with spikes for stability on snow and ice",
          "name": "Boreal legend boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_6_epic_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_6_epic_name",
        "zh": {
          "description": "坚固的靴子里衬着毛皮，并配有钉子，以增强在雪地和冰面上的稳定性",
          "full_description": "坚固的靴子里衬着毛皮，并配有钉子，以增强在雪地和冰面上的稳定性",
          "name": "极地传奇靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "epic",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_epic_rubber": 6,
            "wls2_resourse_fourfold_nails_6": 5,
            "wls2_resourse_secondary_leather_6": 4,
            "wls2_resourse_secondary_rope_6": 6
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
            "stack_id": "wls2_armor_boots_6_epic",
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
            "stack_id": "wls2_armor_boots_6_epic",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_boots_6_epic",
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
        "boots",
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
      "image_key": "2377730d0c20c4b3599e06e2311c628a611e2dada6e27a5b64aaf330d026b9ac",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "极地传奇靴子",
        "name_en": "Boreal legend boots",
        "description_zh": "坚固的靴子里衬着毛皮，并配有钉子，以增强在雪地和冰面上的稳定性",
        "description_en": "Sturdy boots lined with fur and equipped with spikes for stability on snow and ice",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_boots_6_epic 极地传奇靴子 boreal legend boots 坚固的靴子里衬着毛皮，并配有钉子，以增强在雪地和冰面上的稳定性 sturdy boots lined with fur and equipped with spikes for stability on snow and ice armor 护甲 boots boots armor armor_storage"
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
        "description": "inventory_stack_view_wls2_armor_boots_6_rare_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_6_rare_description",
        "name": "inventory_stack_view_wls2_armor_boots_6_rare_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_armor_boots_6_rare",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_6_rare",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_6_rare_description",
        "en": {
          "description": "Elite gear for polar expeditions",
          "full_description": "Elite gear for polar expeditions",
          "name": "Klondike conqueror boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_6_rare_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_6_rare_name",
        "zh": {
          "description": "极地探险的精英装备",
          "full_description": "极地探险的精英装备",
          "name": "肯洛迪克征服者靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "rare",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_6": 3,
            "wls2_resourse_secondary_leather_6": 4,
            "wls2_resourse_secondary_rope_6": 4
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
            "stack_id": "wls2_armor_boots_6_rare",
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
            "stack_id": "wls2_armor_boots_6_rare",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_armor_boots_6_rare",
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
          "1": 24150,
          "2": 26550,
          "3": 29000,
          "4": 31400,
          "5": 33800
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
      "image_key": "9c5ace19bc71f0e7a5887ac44efc44d9e22969d6ca0863ef839c5880fc2e4df1",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "肯洛迪克征服者靴子",
        "name_en": "Klondike conqueror boots",
        "description_zh": "极地探险的精英装备",
        "description_en": "Elite gear for polar expeditions",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_boots_6_rare 肯洛迪克征服者靴子 klondike conqueror boots 极地探险的精英装备 elite gear for polar expeditions armor 护甲 boots boots armor armor_storage"
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
            "value": 24150,
            "unit": "",
            "display": "24150"
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
              "max_durability": 24150
            },
            "display": {
              "armor": "360",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "max_durability": "24150"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 396,
              "dexterity": 5,
              "firearm_resistance": 0.08,
              "max_durability": 26550
            },
            "display": {
              "armor": "396",
              "dexterity": "+5",
              "firearm_resistance": "+8%",
              "max_durability": "26550"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 432,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "max_durability": 29000
            },
            "display": {
              "armor": "432",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "max_durability": "29000"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 468,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "max_durability": 31400
            },
            "display": {
              "armor": "468",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "max_durability": "31400"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 504,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 33800
            },
            "display": {
              "armor": "504",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "max_durability": "33800"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 505,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 33800
            },
            "display": {
              "armor": "505",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "max_durability": "33800"
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
        "description": "inventory_stack_view_wls2_armor_boots_6_uncommon_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_boots_6_uncommon_description",
        "name": "inventory_stack_view_wls2_armor_boots_6_uncommon_name",
        "rarity": "uncommon",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary08/wls2_armor_boots_6_uncommon",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_boots_6_uncommon",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_boots_6_uncommon_description",
        "en": {
          "description": "Rugged shoes for wild paths",
          "full_description": "Rugged shoes for wild paths",
          "name": "Frontier boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_boots_6_uncommon_description",
        "name_key": "inventory_stack_view_wls2_armor_boots_6_uncommon_name",
        "zh": {
          "description": "野外路径的坚固鞋",
          "full_description": "野外路径的坚固鞋",
          "name": "前哨人靴子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_6": 2,
            "wls2_resourse_secondary_leather_6": 3,
            "wls2_resourse_secondary_rope_6": 3
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
            "stack_id": "wls2_armor_boots_6_uncommon",
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
            "stack_id": "wls2_armor_boots_6_uncommon",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary08/wls2_armor_boots_6_uncommon",
      "stat_curves": {
        "armor": {
          "1": 200,
          "2": 220,
          "3": 240,
          "4": 260,
          "5": 280,
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
          "1": 12800,
          "2": 14100,
          "3": 15400,
          "4": 16700,
          "5": 17950
        },
        "move_speed_modifier": {
          "1": 0.1,
          "2": 0.1,
          "3": 0.1,
          "4": 0.1,
          "5": 0.1
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
      "image_key": "951940089711b0ea82569104ca39065401b1735378f3b211859a8b846d5bd27f",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "前哨人靴子",
        "name_en": "Frontier boots",
        "description_zh": "野外路径的坚固鞋",
        "description_en": "Rugged shoes for wild paths",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_boots_6_uncommon 前哨人靴子 frontier boots 野外路径的坚固鞋 rugged shoes for wild paths armor 护甲 boots boots armor armor_storage"
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
            "value": 12800,
            "unit": "",
            "display": "12800"
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
            "value": 0.1,
            "unit": "%",
            "display": "+10%"
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
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 200,
              "dexterity": 4,
              "max_durability": 12800
            },
            "display": {
              "armor": "200",
              "dexterity": "+4",
              "max_durability": "12800"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 220,
              "dexterity": 5,
              "max_durability": 14100
            },
            "display": {
              "armor": "220",
              "dexterity": "+5",
              "max_durability": "14100"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 240,
              "dexterity": 6,
              "max_durability": 15400
            },
            "display": {
              "armor": "240",
              "dexterity": "+6",
              "max_durability": "15400"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 260,
              "dexterity": 8,
              "max_durability": 16700
            },
            "display": {
              "armor": "260",
              "dexterity": "+8",
              "max_durability": "16700"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 280,
              "dexterity": 10,
              "max_durability": 17950
            },
            "display": {
              "armor": "280",
              "dexterity": "+10",
              "max_durability": "17950"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 281,
              "dexterity": 10,
              "max_durability": 17950
            },
            "display": {
              "armor": "281",
              "dexterity": "+10",
              "max_durability": "17950"
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
          "防御：6 级起每级增加 1，最高 1280。"
        ],
        "level_label": "装备等级",
        "default_level": 1
      }
    }
  ]
};
