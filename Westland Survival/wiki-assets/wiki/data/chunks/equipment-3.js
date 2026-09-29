/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-equipment-3"] = {
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
      "bodypart": -1,
      "category": "accessory",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": -1,
        "description": "inventory_stack_view_wls_amulet_enchanted_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_amulet_enchanted_description",
        "name": "inventory_stack_view_wls_amulet_tier_2_name",
        "rarity": "common",
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary03/Wls_amul_horse",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_neck_2",
      "localization": {
        "description_key": "inventory_stack_view_wls_amulet_enchanted_description",
        "en": {
          "description": "Relic enchanted with primal energies. Grants its owner extra power",
          "full_description": "Relic enchanted with primal energies. Grants its owner extra power",
          "name": "Amulet of the Disciple"
        },
        "full_description_key": "inventory_stack_view_wls_amulet_enchanted_description",
        "name_key": "inventory_stack_view_wls_amulet_tier_2_name",
        "zh": {
          "description": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
          "full_description": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
          "name": "门徒护身符"
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
      "sprite": "UI_WW_AlphaBinary03/Wls_amul_horse",
      "stat_curves": {
        "dexterity": {
          "default": 0,
          "max": 4
        },
        "stamina": {
          "default": 0,
          "max": 4
        },
        "strength": {
          "default": 0,
          "max": 4
        },
        "wisdom": {
          "default": 0,
          "max": 4
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
      "image_key": "a8c078a399113a2b2c82f5afa98ee169056eddb9309b23ef0b943f0502c6cac3",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "门徒护身符",
        "name_en": "Amulet of the Disciple",
        "description_zh": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
        "description_en": "Relic enchanted with primal energies. Grants its owner extra power",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_neck_2 门徒护身符 amulet of the disciple 施与了野性能量的圣物。能够赋予佩戴者额外力量 relic enchanted with primal energies. grants its owner extra power accessory 饰品 amulet amulet trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–4",
            "unit": "",
            "display": "0 – +4"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–4",
            "unit": "",
            "display": "0 – +4"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–4",
            "unit": "",
            "display": "0 – +4"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–4",
            "unit": "",
            "display": "0 – +4"
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
        "description": "inventory_stack_view_wls_amulet_enchanted_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_amulet_enchanted_description",
        "name": "inventory_stack_view_wls_amulet_tier_3_name",
        "rarity": "uncommon",
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary03/Wls_amul_bufalo",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_neck_3",
      "localization": {
        "description_key": "inventory_stack_view_wls_amulet_enchanted_description",
        "en": {
          "description": "Relic enchanted with primal energies. Grants its owner extra power",
          "full_description": "Relic enchanted with primal energies. Grants its owner extra power",
          "name": "Amulet of the Enchanter"
        },
        "full_description_key": "inventory_stack_view_wls_amulet_enchanted_description",
        "name_key": "inventory_stack_view_wls_amulet_tier_3_name",
        "zh": {
          "description": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
          "full_description": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
          "name": "魔法师护身符"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_amul_bufalo",
      "stat_curves": {
        "dexterity": {
          "default": 0,
          "max": 5
        },
        "stamina": {
          "default": 0,
          "max": 5
        },
        "strength": {
          "default": 0,
          "max": 5
        },
        "wisdom": {
          "default": 0,
          "max": 5
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
      "image_key": "cfd4d3a8a01070e08344204bd0c6df09259ce2627d1b5aec7c935bfda9eb79bb",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "魔法师护身符",
        "name_en": "Amulet of the Enchanter",
        "description_zh": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
        "description_en": "Relic enchanted with primal energies. Grants its owner extra power",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_neck_3 魔法师护身符 amulet of the enchanter 施与了野性能量的圣物。能够赋予佩戴者额外力量 relic enchanted with primal energies. grants its owner extra power accessory 饰品 amulet amulet trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–5",
            "unit": "",
            "display": "0 – +5"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–5",
            "unit": "",
            "display": "0 – +5"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–5",
            "unit": "",
            "display": "0 – +5"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–5",
            "unit": "",
            "display": "0 – +5"
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
        "description": "inventory_stack_view_wls_amulet_enchanted_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_amulet_enchanted_description",
        "name": "inventory_stack_view_wls_amulet_tier_4_name",
        "rarity": "uncommon",
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary03/Wls_amul_cougar",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_neck_4",
      "localization": {
        "description_key": "inventory_stack_view_wls_amulet_enchanted_description",
        "en": {
          "description": "Relic enchanted with primal energies. Grants its owner extra power",
          "full_description": "Relic enchanted with primal energies. Grants its owner extra power",
          "name": "Amulet of the Herbalist"
        },
        "full_description_key": "inventory_stack_view_wls_amulet_enchanted_description",
        "name_key": "inventory_stack_view_wls_amulet_tier_4_name",
        "zh": {
          "description": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
          "full_description": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
          "name": "草药师护身符"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_amul_cougar",
      "stat_curves": {
        "dexterity": {
          "default": 0,
          "max": 6
        },
        "stamina": {
          "default": 0,
          "max": 6
        },
        "strength": {
          "default": 0,
          "max": 6
        },
        "wisdom": {
          "default": 0,
          "max": 6
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
      "image_key": "2a8e150364253c66ea3bb50947d8b49f3e36aad599755c39be580349933546c2",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "草药师护身符",
        "name_en": "Amulet of the Herbalist",
        "description_zh": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
        "description_en": "Relic enchanted with primal energies. Grants its owner extra power",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_neck_4 草药师护身符 amulet of the herbalist 施与了野性能量的圣物。能够赋予佩戴者额外力量 relic enchanted with primal energies. grants its owner extra power accessory 饰品 amulet amulet trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–6",
            "unit": "",
            "display": "0 – +6"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–6",
            "unit": "",
            "display": "0 – +6"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–6",
            "unit": "",
            "display": "0 – +6"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–6",
            "unit": "",
            "display": "0 – +6"
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
        "description": "inventory_stack_view_wls_amulet_enchanted_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_amulet_enchanted_description",
        "name": "inventory_stack_view_wls_amulet_tier_5_name",
        "rarity": "common",
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary03/Wls_amul_bear",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 4,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_neck_5",
      "localization": {
        "description_key": "inventory_stack_view_wls_amulet_enchanted_description",
        "en": {
          "description": "Relic enchanted with primal energies. Grants its owner extra power",
          "full_description": "Relic enchanted with primal energies. Grants its owner extra power",
          "name": "Amulet of the Hunter"
        },
        "full_description_key": "inventory_stack_view_wls_amulet_enchanted_description",
        "name_key": "inventory_stack_view_wls_amulet_tier_5_name",
        "zh": {
          "description": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
          "full_description": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
          "name": "猎人护身符"
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
      "sprite": "UI_WW_AlphaBinary03/Wls_amul_bear",
      "stat_curves": {
        "dexterity": {
          "default": 0,
          "max": 7
        },
        "stamina": {
          "default": 0,
          "max": 7
        },
        "strength": {
          "default": 0,
          "max": 7
        },
        "wisdom": {
          "default": 0,
          "max": 7
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
      "image_key": "ca6895ec56f9ea366b76eb6f13b61149c34e9278fb8ff80284e6c4e5dff26741",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "猎人护身符",
        "name_en": "Amulet of the Hunter",
        "description_zh": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
        "description_en": "Relic enchanted with primal energies. Grants its owner extra power",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_neck_5 猎人护身符 amulet of the hunter 施与了野性能量的圣物。能够赋予佩戴者额外力量 relic enchanted with primal energies. grants its owner extra power accessory 饰品 amulet amulet trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–7",
            "unit": "",
            "display": "0 – +7"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–7",
            "unit": "",
            "display": "0 – +7"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–7",
            "unit": "",
            "display": "0 – +7"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–7",
            "unit": "",
            "display": "0 – +7"
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
        "description": "inventory_stack_view_wls_amulet_enchanted_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_amulet_enchanted_description",
        "name": "inventory_stack_view_wls_amulet_tier_6_name",
        "rarity": "common",
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary03/wls_amul_elk",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 4,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_neck_6",
      "localization": {
        "description_key": "inventory_stack_view_wls_amulet_enchanted_description",
        "en": {
          "description": "Relic enchanted with primal energies. Grants its owner extra power",
          "full_description": "Relic enchanted with primal energies. Grants its owner extra power",
          "name": "Amulet of the Warrior"
        },
        "full_description_key": "inventory_stack_view_wls_amulet_enchanted_description",
        "name_key": "inventory_stack_view_wls_amulet_tier_6_name",
        "zh": {
          "description": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
          "full_description": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
          "name": "战士护身符"
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
      "sprite": "UI_WW_AlphaBinary03/wls_amul_elk",
      "stat_curves": {
        "dexterity": {
          "default": 0,
          "max": 8
        },
        "stamina": {
          "default": 0,
          "max": 8
        },
        "strength": {
          "default": 0,
          "max": 8
        },
        "wisdom": {
          "default": 0,
          "max": 8
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
      "image_key": "9b2665d4b66de824f6208ae0f20124a3c16fa23e48f5f16dce99f703b6161040",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "战士护身符",
        "name_en": "Amulet of the Warrior",
        "description_zh": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
        "description_en": "Relic enchanted with primal energies. Grants its owner extra power",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_neck_6 战士护身符 amulet of the warrior 施与了野性能量的圣物。能够赋予佩戴者额外力量 relic enchanted with primal energies. grants its owner extra power accessory 饰品 amulet amulet trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–8",
            "unit": "",
            "display": "0 – +8"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–8",
            "unit": "",
            "display": "0 – +8"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–8",
            "unit": "",
            "display": "0 – +8"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–8",
            "unit": "",
            "display": "0 – +8"
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
        "description": "inventory_stack_view_wls_amulet_enchanted_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_amulet_enchanted_description",
        "name": "inventory_stack_view_wls_amulet_tier_7_name",
        "rarity": "uncommon",
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary03/wls_amul_feather",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 4,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_neck_7",
      "localization": {
        "description_key": "inventory_stack_view_wls_amulet_enchanted_description",
        "en": {
          "description": "Relic enchanted with primal energies. Grants its owner extra power",
          "full_description": "Relic enchanted with primal energies. Grants its owner extra power",
          "name": "Amulet of the Shaman"
        },
        "full_description_key": "inventory_stack_view_wls_amulet_enchanted_description",
        "name_key": "inventory_stack_view_wls_amulet_tier_7_name",
        "zh": {
          "description": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
          "full_description": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
          "name": "萨满护身符"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/wls_amul_feather",
      "stat_curves": {
        "dexterity": {
          "default": 0,
          "max": 9
        },
        "stamina": {
          "default": 0,
          "max": 9
        },
        "strength": {
          "default": 0,
          "max": 9
        },
        "wisdom": {
          "default": 0,
          "max": 9
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
      "image_key": "10b440013de8d440187e54ab3213571dbaea1efe3ff28306fcfa08604d58f582",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "萨满护身符",
        "name_en": "Amulet of the Shaman",
        "description_zh": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
        "description_en": "Relic enchanted with primal energies. Grants its owner extra power",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_neck_7 萨满护身符 amulet of the shaman 施与了野性能量的圣物。能够赋予佩戴者额外力量 relic enchanted with primal energies. grants its owner extra power accessory 饰品 amulet amulet trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–9",
            "unit": "",
            "display": "0 – +9"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–9",
            "unit": "",
            "display": "0 – +9"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–9",
            "unit": "",
            "display": "0 – +9"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–9",
            "unit": "",
            "display": "0 – +9"
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
        "description": "inventory_stack_view_wls_amulet_enchanted_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_amulet_enchanted_description",
        "name": "inventory_stack_view_wls_amulet_tier_8_name",
        "rarity": "rare",
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary03/wls_amul_bone_choker",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 4,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_neck_8",
      "localization": {
        "description_key": "inventory_stack_view_wls_amulet_enchanted_description",
        "en": {
          "description": "Relic enchanted with primal energies. Grants its owner extra power",
          "full_description": "Relic enchanted with primal energies. Grants its owner extra power",
          "name": "Amulet of the Chieftain"
        },
        "full_description_key": "inventory_stack_view_wls_amulet_enchanted_description",
        "name_key": "inventory_stack_view_wls_amulet_tier_8_name",
        "zh": {
          "description": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
          "full_description": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
          "name": "酋长护身符"
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
      "sprite": "UI_WW_AlphaBinary03/wls_amul_bone_choker",
      "stat_curves": {
        "dexterity": {
          "default": 0,
          "max": 10
        },
        "stamina": {
          "default": 0,
          "max": 10
        },
        "strength": {
          "default": 0,
          "max": 10
        },
        "wisdom": {
          "default": 0,
          "max": 10
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
      "image_key": "089302096a0a7439283be8f00592f15eb413d3919431c004cd4e0959a9ebc66c",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "酋长护身符",
        "name_en": "Amulet of the Chieftain",
        "description_zh": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
        "description_en": "Relic enchanted with primal energies. Grants its owner extra power",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_neck_8 酋长护身符 amulet of the chieftain 施与了野性能量的圣物。能够赋予佩戴者额外力量 relic enchanted with primal energies. grants its owner extra power accessory 饰品 amulet amulet trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–10",
            "unit": "",
            "display": "0 – +10"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–10",
            "unit": "",
            "display": "0 – +10"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–10",
            "unit": "",
            "display": "0 – +10"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–10",
            "unit": "",
            "display": "0 – +10"
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
        "description": "inventory_stack_view_wls_amulet_enchanted_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_amulet_enchanted_description",
        "name": "inventory_stack_view_wls_amulet_tier_9_name",
        "rarity": "rare",
        "show_stats": true,
        "sorting_group_id": "neck",
        "sprite": "UI_WW_AlphaBinary03/wls_amul_claws",
        "tags": [
          "amulet",
          "trinket"
        ],
        "tier": 5,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_neck_9",
      "localization": {
        "description_key": "inventory_stack_view_wls_amulet_enchanted_description",
        "en": {
          "description": "Relic enchanted with primal energies. Grants its owner extra power",
          "full_description": "Relic enchanted with primal energies. Grants its owner extra power",
          "name": "Amulet of the Guardian"
        },
        "full_description_key": "inventory_stack_view_wls_amulet_enchanted_description",
        "name_key": "inventory_stack_view_wls_amulet_tier_9_name",
        "zh": {
          "description": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
          "full_description": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
          "name": "守护者护身符"
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
      "sprite": "UI_WW_AlphaBinary03/wls_amul_claws",
      "stat_curves": {
        "dexterity": {
          "default": 0,
          "max": 15
        },
        "stamina": {
          "default": 0,
          "max": 15
        },
        "strength": {
          "default": 0,
          "max": 15
        },
        "wisdom": {
          "default": 0,
          "max": 15
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
      "image_key": "cd8655c8bbb87b610cf9afadd6c825144cecf03aec36f84e33da18ab20431f30",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "守护者护身符",
        "name_en": "Amulet of the Guardian",
        "description_zh": "施与了野性能量的圣物。能够赋予佩戴者额外力量",
        "description_en": "Relic enchanted with primal energies. Grants its owner extra power",
        "category_zh": "饰品",
        "subcategory": "amulet",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_neck_9 守护者护身符 amulet of the guardian 施与了野性能量的圣物。能够赋予佩戴者额外力量 relic enchanted with primal energies. grants its owner extra power accessory 饰品 amulet amulet trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–15",
            "unit": "",
            "display": "0 – +15"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–15",
            "unit": "",
            "display": "0 – +15"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–15",
            "unit": "",
            "display": "0 – +15"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–15",
            "unit": "",
            "display": "0 – +15"
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
        "description": "inventory_stack_view_wls_ring_trials_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_ring_trials_description",
        "name": "inventory_stack_view_wls_ring_tier_1_name",
        "rarity": "common",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_withy",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_1",
      "localization": {
        "description_key": "inventory_stack_view_wls_ring_trials_description",
        "en": {
          "description": "Canyon trials reward. Grants its owner extra power",
          "full_description": "Canyon trials reward. Grants its owner extra power",
          "name": "Ring of the Apprentice"
        },
        "full_description_key": "inventory_stack_view_wls_ring_trials_description",
        "name_key": "inventory_stack_view_wls_ring_tier_1_name",
        "zh": {
          "description": "试炼峡谷的奖励，能够赋予所有者额外的力量",
          "full_description": "试炼峡谷的奖励，能够赋予所有者额外的力量",
          "name": "学徒之戒"
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
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_withy",
      "stat_curves": {
        "dexterity": {
          "default": 0,
          "max": 3
        },
        "stamina": {
          "default": 0,
          "max": 3
        },
        "strength": {
          "default": 0,
          "max": 3
        },
        "wisdom": {
          "default": 0,
          "max": 3
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
      "image_key": "edebf10839a49530a5de3ecf40eacec94a62afb3c5ce0d2200f51a42e4aa78f0",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "学徒之戒",
        "name_en": "Ring of the Apprentice",
        "description_zh": "试炼峡谷的奖励，能够赋予所有者额外的力量",
        "description_en": "Canyon trials reward. Grants its owner extra power",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_ring_1 学徒之戒 ring of the apprentice 试炼峡谷的奖励，能够赋予所有者额外的力量 canyon trials reward. grants its owner extra power accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–3",
            "unit": "",
            "display": "0 – +3"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–3",
            "unit": "",
            "display": "0 – +3"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–3",
            "unit": "",
            "display": "0 – +3"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–3",
            "unit": "",
            "display": "0 – +3"
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
        "description": "inventory_stack_view_wls_ring_enchanted_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_ring_enchanted_description",
        "name": "inventory_stack_view_wls_ring_tier_10_name",
        "rarity": "epic",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_buffalo",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 5,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_10",
      "localization": {
        "description_key": "inventory_stack_view_wls_ring_enchanted_description",
        "en": {
          "description": "Аccessory еnchanted with primal energies. Grants its owner extra power",
          "full_description": "Аccessory еnchanted with primal energies. Grants its owner extra power",
          "name": "Ring of Tempest"
        },
        "full_description_key": "inventory_stack_view_wls_ring_enchanted_description",
        "name_key": "inventory_stack_view_wls_ring_tier_10_name",
        "zh": {
          "description": "施与了野性能量的饰品。能够赋予佩戴者额外力量",
          "full_description": "施与了野性能量的饰品。能够赋予佩戴者额外力量",
          "name": "风暴指环"
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
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_buffalo",
      "stat_curves": {
        "dexterity": {
          "default": 0,
          "max": 999
        },
        "stamina": {
          "default": 0,
          "max": 999
        },
        "strength": {
          "default": 0,
          "max": 999
        },
        "wisdom": {
          "default": 0,
          "max": 999
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
      "image_key": "cbec4b83c5b5830005041d976a45718c6cc6fbcde60b9667f2bb9cef19eca865",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "风暴指环",
        "name_en": "Ring of Tempest",
        "description_zh": "施与了野性能量的饰品。能够赋予佩戴者额外力量",
        "description_en": "Аccessory еnchanted with primal energies. Grants its owner extra power",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_ring_10 风暴指环 ring of tempest 施与了野性能量的饰品。能够赋予佩戴者额外力量 аccessory еnchanted with primal energies. grants its owner extra power accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–999",
            "unit": "",
            "display": "0 – +999"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–999",
            "unit": "",
            "display": "0 – +999"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–999",
            "unit": "",
            "display": "0 – +999"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–999",
            "unit": "",
            "display": "0 – +999"
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
        "description": "inventory_stack_view_wls_ring_trials_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_ring_trials_description",
        "name": "inventory_stack_view_wls_ring_tier_2_name",
        "rarity": "common",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_pearl",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_2",
      "localization": {
        "description_key": "inventory_stack_view_wls_ring_trials_description",
        "en": {
          "description": "Canyon trials reward. Grants its owner extra power",
          "full_description": "Canyon trials reward. Grants its owner extra power",
          "name": "Ring of the Disciple"
        },
        "full_description_key": "inventory_stack_view_wls_ring_trials_description",
        "name_key": "inventory_stack_view_wls_ring_tier_2_name",
        "zh": {
          "description": "试炼峡谷的奖励，能够赋予所有者额外的力量",
          "full_description": "试炼峡谷的奖励，能够赋予所有者额外的力量",
          "name": "门徒指环"
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
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_pearl",
      "stat_curves": {
        "dexterity": {
          "default": 0,
          "max": 4
        },
        "stamina": {
          "default": 0,
          "max": 4
        },
        "strength": {
          "default": 0,
          "max": 4
        },
        "wisdom": {
          "default": 0,
          "max": 4
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
      "image_key": "8cb93efdf13159d108033373ee868ef8d2c558f7709624a3bbda3a092c49f4b7",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "门徒指环",
        "name_en": "Ring of the Disciple",
        "description_zh": "试炼峡谷的奖励，能够赋予所有者额外的力量",
        "description_en": "Canyon trials reward. Grants its owner extra power",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_ring_2 门徒指环 ring of the disciple 试炼峡谷的奖励，能够赋予所有者额外的力量 canyon trials reward. grants its owner extra power accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–4",
            "unit": "",
            "display": "0 – +4"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–4",
            "unit": "",
            "display": "0 – +4"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–4",
            "unit": "",
            "display": "0 – +4"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–4",
            "unit": "",
            "display": "0 – +4"
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
        "description": "inventory_stack_view_wls_ring_trials_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_ring_trials_description",
        "name": "inventory_stack_view_wls_ring_tier_3_name",
        "rarity": "uncommon",
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
      "item_id": "wls2_armor_ring_3",
      "localization": {
        "description_key": "inventory_stack_view_wls_ring_trials_description",
        "en": {
          "description": "Canyon trials reward. Grants its owner extra power",
          "full_description": "Canyon trials reward. Grants its owner extra power",
          "name": "Ring of the Enchanter"
        },
        "full_description_key": "inventory_stack_view_wls_ring_trials_description",
        "name_key": "inventory_stack_view_wls_ring_tier_3_name",
        "zh": {
          "description": "试炼峡谷的奖励，能够赋予所有者额外的力量",
          "full_description": "试炼峡谷的奖励，能够赋予所有者额外的力量",
          "name": "魔法师指环"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
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
        "dexterity": {
          "default": 0,
          "max": 5
        },
        "stamina": {
          "default": 0,
          "max": 5
        },
        "strength": {
          "default": 0,
          "max": 5
        },
        "wisdom": {
          "default": 0,
          "max": 5
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
      "image_key": "57612bff8052edf5ac3eecedd7cfdba2a05cc310b7bc8a410cd5b7497ad02809",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "魔法师指环",
        "name_en": "Ring of the Enchanter",
        "description_zh": "试炼峡谷的奖励，能够赋予所有者额外的力量",
        "description_en": "Canyon trials reward. Grants its owner extra power",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_ring_3 魔法师指环 ring of the enchanter 试炼峡谷的奖励，能够赋予所有者额外的力量 canyon trials reward. grants its owner extra power accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–5",
            "unit": "",
            "display": "0 – +5"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–5",
            "unit": "",
            "display": "0 – +5"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–5",
            "unit": "",
            "display": "0 – +5"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–5",
            "unit": "",
            "display": "0 – +5"
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
        "description": "inventory_stack_view_wls_ring_trials_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_ring_trials_description",
        "name": "inventory_stack_view_wls_ring_tier_4_name",
        "rarity": "uncommon",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_mazewood",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_4",
      "localization": {
        "description_key": "inventory_stack_view_wls_ring_trials_description",
        "en": {
          "description": "Canyon trials reward. Grants its owner extra power",
          "full_description": "Canyon trials reward. Grants its owner extra power",
          "name": "Ring of the Herbalist"
        },
        "full_description_key": "inventory_stack_view_wls_ring_trials_description",
        "name_key": "inventory_stack_view_wls_ring_tier_4_name",
        "zh": {
          "description": "试炼峡谷的奖励，能够赋予所有者额外的力量",
          "full_description": "试炼峡谷的奖励，能够赋予所有者额外的力量",
          "name": "草药商之戒"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_mazewood",
      "stat_curves": {
        "dexterity": {
          "default": 0,
          "max": 6
        },
        "stamina": {
          "default": 0,
          "max": 6
        },
        "strength": {
          "default": 0,
          "max": 6
        },
        "wisdom": {
          "default": 0,
          "max": 6
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
      "image_key": "ff1babd3d9efa0f10bc25dfff409771c3a4a14e76ec0637df776dd49c0a1b172",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "草药商之戒",
        "name_en": "Ring of the Herbalist",
        "description_zh": "试炼峡谷的奖励，能够赋予所有者额外的力量",
        "description_en": "Canyon trials reward. Grants its owner extra power",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_ring_4 草药商之戒 ring of the herbalist 试炼峡谷的奖励，能够赋予所有者额外的力量 canyon trials reward. grants its owner extra power accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–6",
            "unit": "",
            "display": "0 – +6"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–6",
            "unit": "",
            "display": "0 – +6"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–6",
            "unit": "",
            "display": "0 – +6"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–6",
            "unit": "",
            "display": "0 – +6"
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
        "description": "inventory_stack_view_wls_ring_trials_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_ring_trials_description",
        "name": "inventory_stack_view_wls_ring_tier_5_name",
        "rarity": "common",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_iron",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 4,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_5",
      "localization": {
        "description_key": "inventory_stack_view_wls_ring_trials_description",
        "en": {
          "description": "Canyon trials reward. Grants its owner extra power",
          "full_description": "Canyon trials reward. Grants its owner extra power",
          "name": "Ring of the Hunter"
        },
        "full_description_key": "inventory_stack_view_wls_ring_trials_description",
        "name_key": "inventory_stack_view_wls_ring_tier_5_name",
        "zh": {
          "description": "试炼峡谷的奖励，能够赋予所有者额外的力量",
          "full_description": "试炼峡谷的奖励，能够赋予所有者额外的力量",
          "name": "猎人之戒"
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
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_iron",
      "stat_curves": {
        "dexterity": {
          "default": 0,
          "max": 7
        },
        "stamina": {
          "default": 0,
          "max": 7
        },
        "strength": {
          "default": 0,
          "max": 7
        },
        "wisdom": {
          "default": 0,
          "max": 7
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
      "image_key": "d2279eeaa8db6a7fb3ab41ddead4cd7efe92841dccd98c1f5e2f56f598a6c1fb",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "猎人之戒",
        "name_en": "Ring of the Hunter",
        "description_zh": "试炼峡谷的奖励，能够赋予所有者额外的力量",
        "description_en": "Canyon trials reward. Grants its owner extra power",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_ring_5 猎人之戒 ring of the hunter 试炼峡谷的奖励，能够赋予所有者额外的力量 canyon trials reward. grants its owner extra power accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–7",
            "unit": "",
            "display": "0 – +7"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–7",
            "unit": "",
            "display": "0 – +7"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–7",
            "unit": "",
            "display": "0 – +7"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–7",
            "unit": "",
            "display": "0 – +7"
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
        "description": "inventory_stack_view_wls_ring_trials_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_ring_trials_description",
        "name": "inventory_stack_view_wls_ring_tier_6_name",
        "rarity": "common",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_wood",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 4,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_6",
      "localization": {
        "description_key": "inventory_stack_view_wls_ring_trials_description",
        "en": {
          "description": "Canyon trials reward. Grants its owner extra power",
          "full_description": "Canyon trials reward. Grants its owner extra power",
          "name": "Ring of the Warrior"
        },
        "full_description_key": "inventory_stack_view_wls_ring_trials_description",
        "name_key": "inventory_stack_view_wls_ring_tier_6_name",
        "zh": {
          "description": "试炼峡谷的奖励，能够赋予所有者额外的力量",
          "full_description": "试炼峡谷的奖励，能够赋予所有者额外的力量",
          "name": "战士之戒"
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
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_wood",
      "stat_curves": {
        "dexterity": {
          "default": 0,
          "max": 8
        },
        "stamina": {
          "default": 0,
          "max": 8
        },
        "strength": {
          "default": 0,
          "max": 8
        },
        "wisdom": {
          "default": 0,
          "max": 8
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
      "image_key": "f1abb6466643187311af0415217c76a7b49f06b99854776f90dba8c2d379bf04",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "战士之戒",
        "name_en": "Ring of the Warrior",
        "description_zh": "试炼峡谷的奖励，能够赋予所有者额外的力量",
        "description_en": "Canyon trials reward. Grants its owner extra power",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_ring_6 战士之戒 ring of the warrior 试炼峡谷的奖励，能够赋予所有者额外的力量 canyon trials reward. grants its owner extra power accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–8",
            "unit": "",
            "display": "0 – +8"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–8",
            "unit": "",
            "display": "0 – +8"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–8",
            "unit": "",
            "display": "0 – +8"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–8",
            "unit": "",
            "display": "0 – +8"
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
        "description": "inventory_stack_view_wls_ring_trials_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_ring_trials_description",
        "name": "inventory_stack_view_wls_ring_tier_7_name",
        "rarity": "uncommon",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_wolf",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 4,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_7",
      "localization": {
        "description_key": "inventory_stack_view_wls_ring_trials_description",
        "en": {
          "description": "Canyon trials reward. Grants its owner extra power",
          "full_description": "Canyon trials reward. Grants its owner extra power",
          "name": "Ring of the Shaman"
        },
        "full_description_key": "inventory_stack_view_wls_ring_trials_description",
        "name_key": "inventory_stack_view_wls_ring_tier_7_name",
        "zh": {
          "description": "试炼峡谷的奖励，能够赋予所有者额外的力量",
          "full_description": "试炼峡谷的奖励，能够赋予所有者额外的力量",
          "name": "巫师之戒"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_wolf",
      "stat_curves": {
        "dexterity": {
          "default": 0,
          "max": 9
        },
        "stamina": {
          "default": 0,
          "max": 9
        },
        "strength": {
          "default": 0,
          "max": 9
        },
        "wisdom": {
          "default": 0,
          "max": 9
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
      "image_key": "dbae946e90547193ab6170a796aadb2c811bef3efb087d016a24ddc9e28de8f9",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "巫师之戒",
        "name_en": "Ring of the Shaman",
        "description_zh": "试炼峡谷的奖励，能够赋予所有者额外的力量",
        "description_en": "Canyon trials reward. Grants its owner extra power",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_ring_7 巫师之戒 ring of the shaman 试炼峡谷的奖励，能够赋予所有者额外的力量 canyon trials reward. grants its owner extra power accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–9",
            "unit": "",
            "display": "0 – +9"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–9",
            "unit": "",
            "display": "0 – +9"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–9",
            "unit": "",
            "display": "0 – +9"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–9",
            "unit": "",
            "display": "0 – +9"
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
        "description": "inventory_stack_view_wls_ring_highest_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_ring_highest_description",
        "name": "inventory_stack_view_wls_ring_tier_8_name",
        "rarity": "rare",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_stone",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 4,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_8",
      "localization": {
        "description_key": "inventory_stack_view_wls_ring_highest_description",
        "en": {
          "description": "Canyon trials top reward. Grants its owner extra power.",
          "full_description": "Canyon trials top reward. Grants its owner extra power.",
          "name": "Ring of the Chieftain"
        },
        "full_description_key": "inventory_stack_view_wls_ring_highest_description",
        "name_key": "inventory_stack_view_wls_ring_tier_8_name",
        "zh": {
          "description": "试炼峡谷的终极奖励，能够赋予所有者额外的力量",
          "full_description": "试炼峡谷的终极奖励，能够赋予所有者额外的力量",
          "name": "酋长之戒"
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
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_stone",
      "stat_curves": {
        "dexterity": {
          "default": 0,
          "max": 10
        },
        "stamina": {
          "default": 0,
          "max": 10
        },
        "strength": {
          "default": 0,
          "max": 10
        },
        "wisdom": {
          "default": 0,
          "max": 10
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
      "image_key": "fb4b586d0e0f43a2ea764ce2987534911644485e3f49d026838fb8999a105455",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "酋长之戒",
        "name_en": "Ring of the Chieftain",
        "description_zh": "试炼峡谷的终极奖励，能够赋予所有者额外的力量",
        "description_en": "Canyon trials top reward. Grants its owner extra power.",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_ring_8 酋长之戒 ring of the chieftain 试炼峡谷的终极奖励，能够赋予所有者额外的力量 canyon trials top reward. grants its owner extra power. accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–10",
            "unit": "",
            "display": "0 – +10"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–10",
            "unit": "",
            "display": "0 – +10"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–10",
            "unit": "",
            "display": "0 – +10"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–10",
            "unit": "",
            "display": "0 – +10"
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
        "description": "inventory_stack_view_wls_ring_enchanted_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "inventory_stack_view_wls_ring_enchanted_description",
        "name": "inventory_stack_view_wls_ring_tier_9_name",
        "rarity": "rare",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_violetstone",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 5,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_9",
      "localization": {
        "description_key": "inventory_stack_view_wls_ring_enchanted_description",
        "en": {
          "description": "Аccessory еnchanted with primal energies. Grants its owner extra power",
          "full_description": "Аccessory еnchanted with primal energies. Grants its owner extra power",
          "name": "Ring of the Guardian"
        },
        "full_description_key": "inventory_stack_view_wls_ring_enchanted_description",
        "name_key": "inventory_stack_view_wls_ring_tier_9_name",
        "zh": {
          "description": "施与了野性能量的饰品。能够赋予佩戴者额外力量",
          "full_description": "施与了野性能量的饰品。能够赋予佩戴者额外力量",
          "name": "守护者指环"
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
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_violetstone",
      "stat_curves": {
        "dexterity": {
          "default": 0,
          "max": 15
        },
        "stamina": {
          "default": 0,
          "max": 15
        },
        "strength": {
          "default": 0,
          "max": 15
        },
        "wisdom": {
          "default": 0,
          "max": 15
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
      "image_key": "31649bbec5712301af022e68708d3f6d3c22fd31af0a43cd0f23f46dbfae0a70",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "守护者指环",
        "name_en": "Ring of the Guardian",
        "description_zh": "施与了野性能量的饰品。能够赋予佩戴者额外力量",
        "description_en": "Аccessory еnchanted with primal energies. Grants its owner extra power",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_ring_9 守护者指环 ring of the guardian 施与了野性能量的饰品。能够赋予佩戴者额外力量 аccessory еnchanted with primal energies. grants its owner extra power accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "dexterity",
            "label": "攻速加成",
            "value": "0–15",
            "unit": "",
            "display": "0 – +15"
          },
          {
            "key": "strength",
            "label": "伤害加成",
            "value": "0–15",
            "unit": "",
            "display": "0 – +15"
          },
          {
            "key": "stamina",
            "label": "防御加成",
            "value": "0–15",
            "unit": "",
            "display": "0 – +15"
          },
          {
            "key": "wisdom",
            "label": "精神",
            "value": "0–15",
            "unit": "",
            "display": "0 – +15"
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
        "description": "wls2_armor_ring_easter_penalty_resistnace_rare_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_armor_ring_easter_penalty_resistnace_rare_description",
        "name": "wls2_armor_ring_easter_penalty_resistnace_rare_name",
        "rarity": "common",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_violetstone",
        "tags": [
          "ring1",
          "ring2",
          "trinket",
          "festive"
        ],
        "tier": 4,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_easter_penalty_resistnace_rare",
      "localization": {
        "description_key": "wls2_armor_ring_easter_penalty_resistnace_rare_description",
        "en": {
          "description": "He was performing the \"bullet-catch with teeth\" trick particularly well...for a while.",
          "full_description": "He was performing the \"bullet-catch with teeth\" trick particularly well...for a while.",
          "name": "Former Illusionist's Ring"
        },
        "full_description_key": "wls2_armor_ring_easter_penalty_resistnace_rare_description",
        "name_key": "wls2_armor_ring_easter_penalty_resistnace_rare_name",
        "zh": {
          "description": "他的拿手好戏是“牙齿接子弹”……没能拿手太久。",
          "full_description": "他的拿手好戏是“牙齿接子弹”……没能拿手太久。",
          "name": "前任魔术师的戒指"
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
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_violetstone",
      "stat_curves": {
        "death_penalty_reduction": {
          "default": 0.05
        },
        "firearm_resistance": {
          "default": 0.05
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
        }
      },
      "subcategory": "ring",
      "tags": [
        "ring1",
        "ring2",
        "trinket",
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
      "image_key": "31649bbec5712301af022e68708d3f6d3c22fd31af0a43cd0f23f46dbfae0a70",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "前任魔术师的戒指",
        "name_en": "Former Illusionist's Ring",
        "description_zh": "他的拿手好戏是“牙齿接子弹”……没能拿手太久。",
        "description_en": "He was performing the \"bullet-catch with teeth\" trick particularly well...for a while.",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_ring_easter_penalty_resistnace_rare 前任魔术师的戒指 former illusionist's ring 他的拿手好戏是“牙齿接子弹”……没能拿手太久。 he was performing the \"bullet-catch with teeth\" trick particularly well...for a while. accessory 饰品 ring ring1 ring2 trinket festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "death_penalty_reduction",
            "label": "死亡耐久损失减免",
            "value": 0.05,
            "unit": "%",
            "display": "5%"
          },
          {
            "key": "firearm_resistance",
            "label": "枪弹抗性",
            "value": 0.05,
            "unit": "%",
            "display": "+5%"
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
        "description": "wls2_armor_ring_easter_penalty_uncommon_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_armor_ring_easter_penalty_uncommon_description",
        "name": "wls2_armor_ring_easter_penalty_uncommon_name",
        "rarity": "common",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_violetstone",
        "tags": [
          "ring1",
          "ring2",
          "trinket",
          "festive"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_easter_penalty_uncommon",
      "localization": {
        "description_key": "wls2_armor_ring_easter_penalty_uncommon_description",
        "en": {
          "description": "A worn-out ring with an engraved horseshoe that seems to have helped its owner more than once",
          "full_description": "A worn-out ring with an engraved horseshoe that seems to have helped its owner more than once",
          "name": "Lucky Ring"
        },
        "full_description_key": "wls2_armor_ring_easter_penalty_uncommon_description",
        "name_key": "wls2_armor_ring_easter_penalty_uncommon_name",
        "zh": {
          "description": "一枚破烂不堪的戒指，上面刻有马蹄标志。似乎帮了它的主人许多次。",
          "full_description": "一枚破烂不堪的戒指，上面刻有马蹄标志。似乎帮了它的主人许多次。",
          "name": "幸运戒指"
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
                "inventory_stack_id": "wls2_armor_ring_easter_penalty_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_ring_easter_penalty_uncommon"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_easter_24_currency_egg": 1000
              },
              "result": {
                "inventory_stack_id": "wls2_armor_ring_easter_penalty_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter_22_trader_ring_easter_penalty_uncommon"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_violetstone",
      "stat_curves": {
        "death_penalty_reduction": {
          "default": 0.05
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
        }
      },
      "subcategory": "ring",
      "tags": [
        "ring1",
        "ring2",
        "trinket",
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
      "image_key": "31649bbec5712301af022e68708d3f6d3c22fd31af0a43cd0f23f46dbfae0a70",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幸运戒指",
        "name_en": "Lucky Ring",
        "description_zh": "一枚破烂不堪的戒指，上面刻有马蹄标志。似乎帮了它的主人许多次。",
        "description_en": "A worn-out ring with an engraved horseshoe that seems to have helped its owner more than once",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_ring_easter_penalty_uncommon 幸运戒指 lucky ring 一枚破烂不堪的戒指，上面刻有马蹄标志。似乎帮了它的主人许多次。 a worn-out ring with an engraved horseshoe that seems to have helped its owner more than once accessory 饰品 ring ring1 ring2 trinket festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "death_penalty_reduction",
            "label": "死亡耐久损失减免",
            "value": 0.05,
            "unit": "%",
            "display": "5%"
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
        "description": "wls2_armor_ring_easter_resistance_uncommon_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_armor_ring_easter_resistance_uncommon_description",
        "name": "wls2_armor_ring_easter_resistance_uncommon_name",
        "rarity": "rare",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_stone",
        "tags": [
          "ring1",
          "ring2",
          "trinket",
          "festive"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_easter_resistance_uncommon",
      "localization": {
        "description_key": "wls2_armor_ring_easter_resistance_uncommon_description",
        "en": {
          "description": "Ring of the best duck shooter at the fair. But they say he was assisted by a dog",
          "full_description": "Ring of the best duck shooter at the fair. But they say he was assisted by a dog",
          "name": "Duck Shooter ring"
        },
        "full_description_key": "wls2_armor_ring_easter_resistance_uncommon_description",
        "name_key": "wls2_armor_ring_easter_resistance_uncommon_name",
        "zh": {
          "description": "集市上最好的猎鹿人的戒指。不过传言说他打猎的时候带了猎犬。",
          "full_description": "集市上最好的猎鹿人的戒指。不过传言说他打猎的时候带了猎犬。",
          "name": "猎鹿人戒指"
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
                "wls2_easter_currency_egg": 1000
              },
              "result": {
                "inventory_stack_id": "wls2_armor_ring_easter_resistance_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_ring_easter_resistance_uncommon"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_easter_24_currency_egg": 1000
              },
              "result": {
                "inventory_stack_id": "wls2_armor_ring_easter_resistance_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter_22_trader_ring_easter_resistance_uncommon"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_stone",
      "stat_curves": {
        "firearm_resistance": {
          "default": 0.05
        }
      },
      "stat_labels": {
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
        }
      },
      "subcategory": "ring",
      "tags": [
        "ring1",
        "ring2",
        "trinket",
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
      "image_key": "fb4b586d0e0f43a2ea764ce2987534911644485e3f49d026838fb8999a105455",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "猎鹿人戒指",
        "name_en": "Duck Shooter ring",
        "description_zh": "集市上最好的猎鹿人的戒指。不过传言说他打猎的时候带了猎犬。",
        "description_en": "Ring of the best duck shooter at the fair. But they say he was assisted by a dog",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_ring_easter_resistance_uncommon 猎鹿人戒指 duck shooter ring 集市上最好的猎鹿人的戒指。不过传言说他打猎的时候带了猎犬。 ring of the best duck shooter at the fair. but they say he was assisted by a dog accessory 饰品 ring ring1 ring2 trinket festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "firearm_resistance",
            "label": "枪弹抗性",
            "value": 0.05,
            "unit": "%",
            "display": "+5%"
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
        "description": "wls2_armor_ring_easter_resistance_warm_rare_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_armor_ring_easter_resistance_warm_rare_description",
        "name": "wls2_armor_ring_easter_resistance_warm_rare_name",
        "rarity": "common",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_stone",
        "tags": [
          "ring1",
          "ring2",
          "trinket",
          "festive"
        ],
        "tier": 4,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_easter_resistance_warm_rare",
      "localization": {
        "description_key": "wls2_armor_ring_easter_resistance_warm_rare_description",
        "en": {
          "description": "A slightly smoky ring that used to belong to an old fair fakir.",
          "full_description": "A slightly smoky ring that used to belong to an old fair fakir.",
          "name": "Fire-Eater's Ring"
        },
        "full_description_key": "wls2_armor_ring_easter_resistance_warm_rare_description",
        "name_key": "wls2_armor_ring_easter_resistance_warm_rare_name",
        "zh": {
          "description": "有些烟熏痕迹的戒指。曾经属于一位老苦行僧。",
          "full_description": "有些烟熏痕迹的戒指。曾经属于一位老苦行僧。",
          "name": "吞火者的戒指"
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
                "inventory_stack_id": "wls2_armor_ring_easter_resistance_warm_rare"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_ring_easter_resistance_warm_rare"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_stone",
      "stat_curves": {
        "firearm_resistance": {
          "default": 0.05
        },
        "warm_modifier": {
          "default": 4
        }
      },
      "stat_labels": {
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
      "subcategory": "ring",
      "tags": [
        "ring1",
        "ring2",
        "trinket",
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
      "image_key": "fb4b586d0e0f43a2ea764ce2987534911644485e3f49d026838fb8999a105455",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "吞火者的戒指",
        "name_en": "Fire-Eater's Ring",
        "description_zh": "有些烟熏痕迹的戒指。曾经属于一位老苦行僧。",
        "description_en": "A slightly smoky ring that used to belong to an old fair fakir.",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_ring_easter_resistance_warm_rare 吞火者的戒指 fire-eater's ring 有些烟熏痕迹的戒指。曾经属于一位老苦行僧。 a slightly smoky ring that used to belong to an old fair fakir. accessory 饰品 ring ring1 ring2 trinket festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "firearm_resistance",
            "label": "枪弹抗性",
            "value": 0.05,
            "unit": "%",
            "display": "+5%"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 4,
            "unit": "",
            "display": "4"
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
        "description": "wls2_armor_ring_easter_warm_penalty_rare_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_armor_ring_easter_warm_penalty_rare_description",
        "name": "wls2_armor_ring_easter_warm_penalty_rare_name",
        "rarity": "common",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_buffalo",
        "tags": [
          "ring1",
          "ring2",
          "trinket",
          "festive"
        ],
        "tier": 4,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_easter_warm_penalty_rare",
      "localization": {
        "description_key": "wls2_armor_ring_easter_warm_penalty_rare_description",
        "en": {
          "description": "He said that smoking wouldn't kill him.",
          "full_description": "He said that smoking wouldn't kill him.",
          "name": "Fireworks Master's Ring"
        },
        "full_description_key": "wls2_armor_ring_easter_warm_penalty_rare_description",
        "name_key": "wls2_armor_ring_easter_warm_penalty_rare_name",
        "zh": {
          "description": "他说抽烟不会影响健康。",
          "full_description": "他说抽烟不会影响健康。",
          "name": "烟花大师的戒指"
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
                "inventory_stack_id": "wls2_armor_ring_easter_warm_penalty_rare"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_ring_easter_wam_penalty_rare"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_buffalo",
      "stat_curves": {
        "death_penalty_reduction": {
          "default": 0.05
        },
        "warm_modifier": {
          "default": 4
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
      "subcategory": "ring",
      "tags": [
        "ring1",
        "ring2",
        "trinket",
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
      "image_key": "cbec4b83c5b5830005041d976a45718c6cc6fbcde60b9667f2bb9cef19eca865",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "烟花大师的戒指",
        "name_en": "Fireworks Master's Ring",
        "description_zh": "他说抽烟不会影响健康。",
        "description_en": "He said that smoking wouldn't kill him.",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_ring_easter_warm_penalty_rare 烟花大师的戒指 fireworks master's ring 他说抽烟不会影响健康。 he said that smoking wouldn't kill him. accessory 饰品 ring ring1 ring2 trinket festive"
      },
      "numeric": {
        "summary": [
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
            "value": 4,
            "unit": "",
            "display": "4"
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
        "description": "wls2_armor_ring_easter_warm_uncommon_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_armor_ring_easter_warm_uncommon_description",
        "name": "wls2_armor_ring_easter_warm_uncommon_name",
        "rarity": "common",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_buffalo",
        "tags": [
          "ring1",
          "ring2",
          "trinket",
          "festive"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_easter_warm_uncommon",
      "localization": {
        "description_key": "wls2_armor_ring_easter_warm_uncommon_description",
        "en": {
          "description": "Warms its owner with memories of a funfair and good booze",
          "full_description": "Warms its owner with memories of a funfair and good booze",
          "name": "Carnival Ring"
        },
        "full_description_key": "wls2_armor_ring_easter_warm_uncommon_description",
        "name_key": "wls2_armor_ring_easter_warm_uncommon_name",
        "zh": {
          "description": "光彩夺目的游乐场公子哥的戒指。它能为主人带来关于盛宴和美酒的回忆。",
          "full_description": "光彩夺目的游乐场公子哥的戒指。它能为主人带来关于盛宴和美酒的回忆。",
          "name": "狂欢节戒指"
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
                "inventory_stack_id": "wls2_armor_ring_easter_warm_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter2021_trader_ring_easter_warm_uncommon"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_easter_24_currency_egg": 1000
              },
              "result": {
                "inventory_stack_id": "wls2_armor_ring_easter_warm_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_easter_22_trader_ring_easter_warm_uncommon"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_buffalo",
      "stat_curves": {
        "warm_modifier": {
          "default": 4
        }
      },
      "stat_labels": {
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
      "subcategory": "ring",
      "tags": [
        "ring1",
        "ring2",
        "trinket",
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
      "image_key": "cbec4b83c5b5830005041d976a45718c6cc6fbcde60b9667f2bb9cef19eca865",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "狂欢节戒指",
        "name_en": "Carnival Ring",
        "description_zh": "光彩夺目的游乐场公子哥的戒指。它能为主人带来关于盛宴和美酒的回忆。",
        "description_en": "Warms its owner with memories of a funfair and good booze",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_ring_easter_warm_uncommon 狂欢节戒指 carnival ring 光彩夺目的游乐场公子哥的戒指。它能为主人带来关于盛宴和美酒的回忆。 warms its owner with memories of a funfair and good booze accessory 饰品 ring ring1 ring2 trinket festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 4,
            "unit": "",
            "display": "4"
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
        "description": "wls2_armor_ring_halloween_21_penalty_resistnace_rare_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_armor_ring_halloween_21_penalty_resistnace_rare_description",
        "name": "wls2_armor_ring_halloween_21_penalty_resistnace_rare_name",
        "rarity": "rare",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_violetstone",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 4,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_halloween_21_penalty_resistnace_rare",
      "localization": {
        "description_key": "wls2_armor_ring_halloween_21_penalty_resistnace_rare_description",
        "en": {
          "description": "He was performing the \"bullet-catch with teeth\" trick particularly well...for a while.",
          "full_description": "He was performing the \"bullet-catch with teeth\" trick particularly well...for a while.",
          "name": "Former Illusionist's Ring"
        },
        "full_description_key": "wls2_armor_ring_halloween_21_penalty_resistnace_rare_description",
        "name_key": "wls2_armor_ring_halloween_21_penalty_resistnace_rare_name",
        "zh": {
          "description": "他的拿手好戏是“牙齿接子弹”……没能拿手太久。",
          "full_description": "他的拿手好戏是“牙齿接子弹”……没能拿手太久。",
          "name": "前任魔术师的戒指"
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
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_violetstone",
      "stat_curves": {
        "death_penalty_reduction": {
          "default": 0.05
        },
        "firearm_resistance": {
          "default": 0.05
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
      "image_key": "31649bbec5712301af022e68708d3f6d3c22fd31af0a43cd0f23f46dbfae0a70",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "前任魔术师的戒指",
        "name_en": "Former Illusionist's Ring",
        "description_zh": "他的拿手好戏是“牙齿接子弹”……没能拿手太久。",
        "description_en": "He was performing the \"bullet-catch with teeth\" trick particularly well...for a while.",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_ring_halloween_21_penalty_resistnace_rare 前任魔术师的戒指 former illusionist's ring 他的拿手好戏是“牙齿接子弹”……没能拿手太久。 he was performing the \"bullet-catch with teeth\" trick particularly well...for a while. accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "death_penalty_reduction",
            "label": "死亡耐久损失减免",
            "value": 0.05,
            "unit": "%",
            "display": "5%"
          },
          {
            "key": "firearm_resistance",
            "label": "枪弹抗性",
            "value": 0.05,
            "unit": "%",
            "display": "+5%"
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
        "description": "wls2_armor_ring_halloween_21_penalty_uncommon_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_armor_ring_halloween_21_penalty_uncommon_description",
        "name": "wls2_armor_ring_halloween_21_penalty_uncommon_name",
        "rarity": "uncommon",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_violetstone",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_halloween_21_penalty_uncommon",
      "localization": {
        "description_key": "wls2_armor_ring_halloween_21_penalty_uncommon_description",
        "en": {
          "description": "A worn-out ring with an engraved horseshoe that seems to have helped its owner more than once.",
          "full_description": "A worn-out ring with an engraved horseshoe that seems to have helped its owner more than once.",
          "name": "Lucky Ring"
        },
        "full_description_key": "wls2_armor_ring_halloween_21_penalty_uncommon_description",
        "name_key": "wls2_armor_ring_halloween_21_penalty_uncommon_name",
        "zh": {
          "description": "一枚破烂不堪的戒指，上面刻有马蹄标志。似乎帮了它的主人许多次。",
          "full_description": "一枚破烂不堪的戒指，上面刻有马蹄标志。似乎帮了它的主人许多次。",
          "name": "幸运戒指"
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
                "inventory_stack_id": "wls2_armor_ring_halloween_21_penalty_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_armor_ring_halloween_21_penalty_uncommon"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_xmas_23_currency_firework": 1000,
                "wls2_xmas_25_currency_firework": 1000
              },
              "result": {
                "inventory_stack_id": "wls2_armor_ring_halloween_21_penalty_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas_21_trader_wls2_armor_ring_halloween_21_penalty_uncommon"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_violetstone",
      "stat_curves": {
        "death_penalty_reduction": {
          "default": 0.05
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
      "image_key": "31649bbec5712301af022e68708d3f6d3c22fd31af0a43cd0f23f46dbfae0a70",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幸运戒指",
        "name_en": "Lucky Ring",
        "description_zh": "一枚破烂不堪的戒指，上面刻有马蹄标志。似乎帮了它的主人许多次。",
        "description_en": "A worn-out ring with an engraved horseshoe that seems to have helped its owner more than once.",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_ring_halloween_21_penalty_uncommon 幸运戒指 lucky ring 一枚破烂不堪的戒指，上面刻有马蹄标志。似乎帮了它的主人许多次。 a worn-out ring with an engraved horseshoe that seems to have helped its owner more than once. accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "death_penalty_reduction",
            "label": "死亡耐久损失减免",
            "value": 0.05,
            "unit": "%",
            "display": "5%"
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
        "description": "wls2_armor_ring_halloween_21_penalty_uncommon_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_armor_ring_halloween_21_penalty_uncommon_description",
        "name": "wls2_armor_ring_halloween_21_penalty_uncommon_name",
        "rarity": "uncommon",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_violetstone",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 2,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_halloween_21_penalty_uncommon_weak",
      "localization": {
        "description_key": "wls2_armor_ring_halloween_21_penalty_uncommon_description",
        "en": {
          "description": "A worn-out ring with an engraved horseshoe that seems to have helped its owner more than once.",
          "full_description": "A worn-out ring with an engraved horseshoe that seems to have helped its owner more than once.",
          "name": "Lucky Ring"
        },
        "full_description_key": "wls2_armor_ring_halloween_21_penalty_uncommon_description",
        "name_key": "wls2_armor_ring_halloween_21_penalty_uncommon_name",
        "zh": {
          "description": "一枚破烂不堪的戒指，上面刻有马蹄标志。似乎帮了它的主人许多次。",
          "full_description": "一枚破烂不堪的戒指，上面刻有马蹄标志。似乎帮了它的主人许多次。",
          "name": "幸运戒指"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_violetstone",
      "stat_curves": {
        "death_penalty_reduction": {
          "default": 0.01
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
      "image_key": "31649bbec5712301af022e68708d3f6d3c22fd31af0a43cd0f23f46dbfae0a70",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "幸运戒指",
        "name_en": "Lucky Ring",
        "description_zh": "一枚破烂不堪的戒指，上面刻有马蹄标志。似乎帮了它的主人许多次。",
        "description_en": "A worn-out ring with an engraved horseshoe that seems to have helped its owner more than once.",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_ring_halloween_21_penalty_uncommon_weak 幸运戒指 lucky ring 一枚破烂不堪的戒指，上面刻有马蹄标志。似乎帮了它的主人许多次。 a worn-out ring with an engraved horseshoe that seems to have helped its owner more than once. accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "death_penalty_reduction",
            "label": "死亡耐久损失减免",
            "value": 0.01,
            "unit": "%",
            "display": "1%"
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
        "description": "wls2_armor_ring_halloween_21_resistance_uncommon_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_armor_ring_halloween_21_resistance_uncommon_description",
        "name": "wls2_armor_ring_halloween_21_resistance_uncommon_name",
        "rarity": "uncommon",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_stone",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_halloween_21_resistance_uncommon",
      "localization": {
        "description_key": "wls2_armor_ring_halloween_21_resistance_uncommon_description",
        "en": {
          "description": "Ring of the best duck shooter at the fair. But they say he was assisted by a dog.",
          "full_description": "Ring of the best duck shooter at the fair. But they say he was assisted by a dog.",
          "name": "Duck Shooter ring"
        },
        "full_description_key": "wls2_armor_ring_halloween_21_resistance_uncommon_description",
        "name_key": "wls2_armor_ring_halloween_21_resistance_uncommon_name",
        "zh": {
          "description": "集市上最好的猎鹿人的戒指。不过传言说他打猎的时候带了猎犬。",
          "full_description": "集市上最好的猎鹿人的戒指。不过传言说他打猎的时候带了猎犬。",
          "name": "猎鹿人戒指"
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
                "inventory_stack_id": "wls2_armor_ring_halloween_21_resistance_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_armor_ring_halloween_21_resistance_uncommon"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_xmas_23_currency_firework": 1000,
                "wls2_xmas_25_currency_firework": 1000
              },
              "result": {
                "inventory_stack_id": "wls2_armor_ring_halloween_21_resistance_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas_21_trader_wls2_armor_ring_halloween_21_resistance_uncommon"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_stone",
      "stat_curves": {
        "firearm_resistance": {
          "default": 0.05
        }
      },
      "stat_labels": {
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
      "image_key": "fb4b586d0e0f43a2ea764ce2987534911644485e3f49d026838fb8999a105455",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "猎鹿人戒指",
        "name_en": "Duck Shooter ring",
        "description_zh": "集市上最好的猎鹿人的戒指。不过传言说他打猎的时候带了猎犬。",
        "description_en": "Ring of the best duck shooter at the fair. But they say he was assisted by a dog.",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_ring_halloween_21_resistance_uncommon 猎鹿人戒指 duck shooter ring 集市上最好的猎鹿人的戒指。不过传言说他打猎的时候带了猎犬。 ring of the best duck shooter at the fair. but they say he was assisted by a dog. accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "firearm_resistance",
            "label": "枪弹抗性",
            "value": 0.05,
            "unit": "%",
            "display": "+5%"
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
        "description": "wls2_armor_ring_halloween_21_resistance_uncommon_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_armor_ring_halloween_21_resistance_uncommon_description",
        "name": "wls2_armor_ring_halloween_21_resistance_uncommon_name",
        "rarity": "uncommon",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_stone",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 2,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_halloween_21_resistance_uncommon_weak",
      "localization": {
        "description_key": "wls2_armor_ring_halloween_21_resistance_uncommon_description",
        "en": {
          "description": "Ring of the best duck shooter at the fair. But they say he was assisted by a dog.",
          "full_description": "Ring of the best duck shooter at the fair. But they say he was assisted by a dog.",
          "name": "Duck Shooter ring"
        },
        "full_description_key": "wls2_armor_ring_halloween_21_resistance_uncommon_description",
        "name_key": "wls2_armor_ring_halloween_21_resistance_uncommon_name",
        "zh": {
          "description": "集市上最好的猎鹿人的戒指。不过传言说他打猎的时候带了猎犬。",
          "full_description": "集市上最好的猎鹿人的戒指。不过传言说他打猎的时候带了猎犬。",
          "name": "猎鹿人戒指"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_stone",
      "stat_curves": {
        "firearm_resistance": {
          "default": 0.01
        }
      },
      "stat_labels": {
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
      "image_key": "fb4b586d0e0f43a2ea764ce2987534911644485e3f49d026838fb8999a105455",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "猎鹿人戒指",
        "name_en": "Duck Shooter ring",
        "description_zh": "集市上最好的猎鹿人的戒指。不过传言说他打猎的时候带了猎犬。",
        "description_en": "Ring of the best duck shooter at the fair. But they say he was assisted by a dog.",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_ring_halloween_21_resistance_uncommon_weak 猎鹿人戒指 duck shooter ring 集市上最好的猎鹿人的戒指。不过传言说他打猎的时候带了猎犬。 ring of the best duck shooter at the fair. but they say he was assisted by a dog. accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "firearm_resistance",
            "label": "枪弹抗性",
            "value": 0.01,
            "unit": "%",
            "display": "+1%"
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
        "description": "wls2_armor_ring_halloween_21_resistance_warm_rare_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_armor_ring_halloween_21_resistance_warm_rare_description",
        "name": "wls2_armor_ring_halloween_21_resistance_warm_rare_name",
        "rarity": "rare",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_stone",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 4,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_halloween_21_resistance_warm_rare",
      "localization": {
        "description_key": "wls2_armor_ring_halloween_21_resistance_warm_rare_description",
        "en": {
          "description": "A slightly smoky ring that used to belong to an old fair fakir.",
          "full_description": "A slightly smoky ring that used to belong to an old fair fakir.",
          "name": "Fire-Eater's Ring"
        },
        "full_description_key": "wls2_armor_ring_halloween_21_resistance_warm_rare_description",
        "name_key": "wls2_armor_ring_halloween_21_resistance_warm_rare_name",
        "zh": {
          "description": "有些烟熏痕迹的戒指。曾经属于一位老苦行僧。",
          "full_description": "有些烟熏痕迹的戒指。曾经属于一位老苦行僧。",
          "name": "吞火者的戒指"
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
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_stone",
      "stat_curves": {
        "firearm_resistance": {
          "default": 0.05
        },
        "warm_modifier": {
          "default": 4
        }
      },
      "stat_labels": {
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
      "image_key": "fb4b586d0e0f43a2ea764ce2987534911644485e3f49d026838fb8999a105455",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "吞火者的戒指",
        "name_en": "Fire-Eater's Ring",
        "description_zh": "有些烟熏痕迹的戒指。曾经属于一位老苦行僧。",
        "description_en": "A slightly smoky ring that used to belong to an old fair fakir.",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_ring_halloween_21_resistance_warm_rare 吞火者的戒指 fire-eater's ring 有些烟熏痕迹的戒指。曾经属于一位老苦行僧。 a slightly smoky ring that used to belong to an old fair fakir. accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "firearm_resistance",
            "label": "枪弹抗性",
            "value": 0.05,
            "unit": "%",
            "display": "+5%"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 4,
            "unit": "",
            "display": "4"
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
        "description": "wls2_armor_ring_halloween_21_warm_penalty_rare_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_armor_ring_halloween_21_warm_penalty_rare_description",
        "name": "wls2_armor_ring_halloween_21_warm_penalty_rare_name",
        "rarity": "rare",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_buffalo",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 4,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_halloween_21_warm_penalty_rare",
      "localization": {
        "description_key": "wls2_armor_ring_halloween_21_warm_penalty_rare_description",
        "en": {
          "description": "He said that smoking wouldn't kill him.",
          "full_description": "He said that smoking wouldn't kill him.",
          "name": "Fireworks Master's Ring"
        },
        "full_description_key": "wls2_armor_ring_halloween_21_warm_penalty_rare_description",
        "name_key": "wls2_armor_ring_halloween_21_warm_penalty_rare_name",
        "zh": {
          "description": "他说抽烟不会影响健康。",
          "full_description": "他说抽烟不会影响健康。",
          "name": "烟花大师的戒指"
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
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_buffalo",
      "stat_curves": {
        "death_penalty_reduction": {
          "default": 0.05
        },
        "warm_modifier": {
          "default": 4
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
      "image_key": "cbec4b83c5b5830005041d976a45718c6cc6fbcde60b9667f2bb9cef19eca865",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "烟花大师的戒指",
        "name_en": "Fireworks Master's Ring",
        "description_zh": "他说抽烟不会影响健康。",
        "description_en": "He said that smoking wouldn't kill him.",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_ring_halloween_21_warm_penalty_rare 烟花大师的戒指 fireworks master's ring 他说抽烟不会影响健康。 he said that smoking wouldn't kill him. accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
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
            "value": 4,
            "unit": "",
            "display": "4"
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
        "description": "wls2_armor_ring_halloween_21_warm_uncommon_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_armor_ring_halloween_21_warm_uncommon_description",
        "name": "wls2_armor_ring_halloween_21_warm_uncommon_name",
        "rarity": "uncommon",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_buffalo",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_halloween_21_warm_uncommon",
      "localization": {
        "description_key": "wls2_armor_ring_halloween_21_warm_uncommon_description",
        "en": {
          "description": "Flamboyant fairground dandy's ring. Warms its owner with memories of a funfair and good booze.",
          "full_description": "Flamboyant fairground dandy's ring. Warms its owner with memories of a funfair and good booze.",
          "name": "Carnival Ring"
        },
        "full_description_key": "wls2_armor_ring_halloween_21_warm_uncommon_description",
        "name_key": "wls2_armor_ring_halloween_21_warm_uncommon_name",
        "zh": {
          "description": "光彩夺目的游乐场公子哥的戒指。它能为主人带来关于盛宴和美酒的回忆。",
          "full_description": "光彩夺目的游乐场公子哥的戒指。它能为主人带来关于盛宴和美酒的回忆。",
          "name": "狂欢节戒指"
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
                "inventory_stack_id": "wls2_armor_ring_halloween_21_warm_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_armor_ring_halloween_21_warm_uncommon"
          },
          {
            "definition": {
              "ingredients": {
                "wls2_xmas_23_currency_firework": 1000,
                "wls2_xmas_25_currency_firework": 1000
              },
              "result": {
                "inventory_stack_id": "wls2_armor_ring_halloween_21_warm_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas_21_trader_wls2_armor_ring_halloween_21_warm_uncommon"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_buffalo",
      "stat_curves": {
        "warm_modifier": {
          "default": 4
        }
      },
      "stat_labels": {
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
      "image_key": "cbec4b83c5b5830005041d976a45718c6cc6fbcde60b9667f2bb9cef19eca865",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "狂欢节戒指",
        "name_en": "Carnival Ring",
        "description_zh": "光彩夺目的游乐场公子哥的戒指。它能为主人带来关于盛宴和美酒的回忆。",
        "description_en": "Flamboyant fairground dandy's ring. Warms its owner with memories of a funfair and good booze.",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_ring_halloween_21_warm_uncommon 狂欢节戒指 carnival ring 光彩夺目的游乐场公子哥的戒指。它能为主人带来关于盛宴和美酒的回忆。 flamboyant fairground dandy's ring. warms its owner with memories of a funfair and good booze. accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 4,
            "unit": "",
            "display": "4"
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
        "description": "wls2_armor_ring_halloween_21_warm_uncommon_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_armor_ring_halloween_21_warm_uncommon_description",
        "name": "wls2_armor_ring_halloween_21_warm_uncommon_name",
        "rarity": "uncommon",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary03/Wls_ring_buffalo",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 2,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_halloween_21_warm_uncommon_weak",
      "localization": {
        "description_key": "wls2_armor_ring_halloween_21_warm_uncommon_description",
        "en": {
          "description": "Flamboyant fairground dandy's ring. Warms its owner with memories of a funfair and good booze.",
          "full_description": "Flamboyant fairground dandy's ring. Warms its owner with memories of a funfair and good booze.",
          "name": "Carnival Ring"
        },
        "full_description_key": "wls2_armor_ring_halloween_21_warm_uncommon_description",
        "name_key": "wls2_armor_ring_halloween_21_warm_uncommon_name",
        "zh": {
          "description": "光彩夺目的游乐场公子哥的戒指。它能为主人带来关于盛宴和美酒的回忆。",
          "full_description": "光彩夺目的游乐场公子哥的戒指。它能为主人带来关于盛宴和美酒的回忆。",
          "name": "狂欢节戒指"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "uncommon",
      "recipe": {
        "direct": null,
        "result_sources": []
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary03/Wls_ring_buffalo",
      "stat_curves": {
        "warm_modifier": {
          "default": 1
        }
      },
      "stat_labels": {
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
      "image_key": "cbec4b83c5b5830005041d976a45718c6cc6fbcde60b9667f2bb9cef19eca865",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "狂欢节戒指",
        "name_en": "Carnival Ring",
        "description_zh": "光彩夺目的游乐场公子哥的戒指。它能为主人带来关于盛宴和美酒的回忆。",
        "description_en": "Flamboyant fairground dandy's ring. Warms its owner with memories of a funfair and good booze.",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_ring_halloween_21_warm_uncommon_weak 狂欢节戒指 carnival ring 光彩夺目的游乐场公子哥的戒指。它能为主人带来关于盛宴和美酒的回忆。 flamboyant fairground dandy's ring. warms its owner with memories of a funfair and good booze. accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
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
      "bodypart": -1,
      "category": "accessory",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": -1,
        "description": "wls2_armor_ring_halloween_23_cold_uncommon_description",
        "equip_behaviour": {
          "type": "states"
        },
        "full_description": "wls2_armor_ring_halloween_23_cold_uncommon_description",
        "name": "wls2_armor_ring_halloween_23_cold_uncommon_name",
        "rarity": "uncommon",
        "show_stats": true,
        "sorting_group_id": "ring",
        "sprite": "UI_WW_AlphaBinary07/Wls_ring_buffalo_gold",
        "tags": [
          "ring1",
          "ring2",
          "trinket"
        ],
        "tier": 3,
        "type": "single",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_ring_halloween_23_cold_uncommon",
      "localization": {
        "description_key": "wls2_armor_ring_halloween_23_cold_uncommon_description",
        "en": {
          "description": "A cool accessory for hot weather! It chills its owner with cool memories of the fair and frosty beverages",
          "full_description": "A cool accessory for hot weather! It chills its owner with cool memories of the fair and frosty beverages",
          "name": "Festive Ring"
        },
        "full_description_key": "wls2_armor_ring_halloween_23_cold_uncommon_description",
        "name_key": "wls2_armor_ring_halloween_23_cold_uncommon_name",
        "zh": {
          "description": "炎热天气的一个酷炫配饰！它通过带来公平和冰凉饮料的美好回忆来给主人带来清凉。",
          "full_description": "炎热天气的一个酷炫配饰！它通过带来公平和冰凉饮料的美好回忆来给主人带来清凉。",
          "name": "节日环形"
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
                "inventory_stack_id": "wls2_armor_ring_halloween_23_cold_uncommon"
              },
              "type": "trader"
            },
            "recipe_id": "wls2_halloween_21_trader_wls2_armor_ring_halloween_23_cold_uncommon"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary07/Wls_ring_buffalo_gold",
      "stat_curves": {
        "cool_modifier": {
          "default": 4
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
      "image_key": "51067688113150f8ed0d97766983484b9551b3d4c058c51b187ce63ea5ac44b8",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "节日环形",
        "name_en": "Festive Ring",
        "description_zh": "炎热天气的一个酷炫配饰！它通过带来公平和冰凉饮料的美好回忆来给主人带来清凉。",
        "description_en": "A cool accessory for hot weather! It chills its owner with cool memories of the fair and frosty beverages",
        "category_zh": "饰品",
        "subcategory": "ring",
        "rarity_zh": "优秀",
        "search_text": "wls2_armor_ring_halloween_23_cold_uncommon 节日环形 festive ring 炎热天气的一个酷炫配饰！它通过带来公平和冰凉饮料的美好回忆来给主人带来清凉。 a cool accessory for hot weather! it chills its owner with cool memories of the fair and frosty beverages accessory 饰品 ring ring1 ring2 trinket"
      },
      "numeric": {
        "summary": [
          {
            "key": "cool_modifier",
            "label": "隔热",
            "value": 4,
            "unit": "",
            "display": "4"
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
      "bodypart": 55,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 55,
        "description": "wls2_armor_st_patrick_jacket_2026_desc",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_st_patrick_jacket_2026_desc",
        "name": "wls2_armor_st_patrick_jacket_2026_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_patrick2026_body",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_st_patrick_jacket_t2_2026",
      "localization": {
        "description_key": "wls2_armor_st_patrick_jacket_2026_desc",
        "en": {
          "description": "Somehow, things feel just a little easier when you wear it",
          "full_description": "Somehow, things feel just a little easier when you wear it",
          "name": "Irish Luck Jacket"
        },
        "full_description_key": "wls2_armor_st_patrick_jacket_2026_desc",
        "name_key": "wls2_armor_st_patrick_jacket_2026_name",
        "zh": {
          "description": "不知怎的，当你穿它时，事情感觉就稍微容易一点。",
          "full_description": "不知怎的，当你穿它时，事情感觉就稍微容易一点。",
          "name": "爱尔兰运气夹克"
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
                "inventory_stack_id": "wls2_armor_st_patrick_jacket_t2_2026"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_st_patrick_jacket_t2_2026_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_patrick2026_body",
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
      "image_key": "8bdc140f7e751a2f4dbec6abb5dca50b28855135b55145f43e250c137228260e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "爱尔兰运气夹克",
        "name_en": "Irish Luck Jacket",
        "description_zh": "不知怎的，当你穿它时，事情感觉就稍微容易一点。",
        "description_en": "Somehow, things feel just a little easier when you wear it",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_st_patrick_jacket_t2_2026 爱尔兰运气夹克 irish luck jacket 不知怎的，当你穿它时，事情感觉就稍微容易一点。 somehow, things feel just a little easier when you wear it armor 护甲 body chest armor armor_storage"
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
      "bodypart": 55,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 55,
        "description": "wls2_armor_st_patrick_jacket_2026_desc",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_st_patrick_jacket_2026_desc",
        "name": "wls2_armor_st_patrick_jacket_2026_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_patrick2026_body",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_st_patrick_jacket_t3_2026",
      "localization": {
        "description_key": "wls2_armor_st_patrick_jacket_2026_desc",
        "en": {
          "description": "Somehow, things feel just a little easier when you wear it",
          "full_description": "Somehow, things feel just a little easier when you wear it",
          "name": "Irish Luck Jacket"
        },
        "full_description_key": "wls2_armor_st_patrick_jacket_2026_desc",
        "name_key": "wls2_armor_st_patrick_jacket_2026_name",
        "zh": {
          "description": "不知怎的，当你穿它时，事情感觉就稍微容易一点。",
          "full_description": "不知怎的，当你穿它时，事情感觉就稍微容易一点。",
          "name": "爱尔兰运气夹克"
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
                "inventory_stack_id": "wls2_armor_st_patrick_jacket_t3_2026"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_st_patrick_jacket_t3_2026_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_patrick2026_body",
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
      "image_key": "8bdc140f7e751a2f4dbec6abb5dca50b28855135b55145f43e250c137228260e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "爱尔兰运气夹克",
        "name_en": "Irish Luck Jacket",
        "description_zh": "不知怎的，当你穿它时，事情感觉就稍微容易一点。",
        "description_en": "Somehow, things feel just a little easier when you wear it",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_st_patrick_jacket_t3_2026 爱尔兰运气夹克 irish luck jacket 不知怎的，当你穿它时，事情感觉就稍微容易一点。 somehow, things feel just a little easier when you wear it armor 护甲 body chest armor armor_storage"
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
      "bodypart": 55,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 55,
        "description": "wls2_armor_st_patrick_jacket_2026_desc",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_st_patrick_jacket_2026_desc",
        "name": "wls2_armor_st_patrick_jacket_2026_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_patrick2026_body",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 4,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_st_patrick_jacket_t4_2026",
      "localization": {
        "description_key": "wls2_armor_st_patrick_jacket_2026_desc",
        "en": {
          "description": "Somehow, things feel just a little easier when you wear it",
          "full_description": "Somehow, things feel just a little easier when you wear it",
          "name": "Irish Luck Jacket"
        },
        "full_description_key": "wls2_armor_st_patrick_jacket_2026_desc",
        "name_key": "wls2_armor_st_patrick_jacket_2026_name",
        "zh": {
          "description": "不知怎的，当你穿它时，事情感觉就稍微容易一点。",
          "full_description": "不知怎的，当你穿它时，事情感觉就稍微容易一点。",
          "name": "爱尔兰运气夹克"
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
                "inventory_stack_id": "wls2_armor_st_patrick_jacket_t4_2026"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_st_patrick_jacket_t4_2026_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_patrick2026_body",
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
      "image_key": "8bdc140f7e751a2f4dbec6abb5dca50b28855135b55145f43e250c137228260e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "爱尔兰运气夹克",
        "name_en": "Irish Luck Jacket",
        "description_zh": "不知怎的，当你穿它时，事情感觉就稍微容易一点。",
        "description_en": "Somehow, things feel just a little easier when you wear it",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_st_patrick_jacket_t4_2026 爱尔兰运气夹克 irish luck jacket 不知怎的，当你穿它时，事情感觉就稍微容易一点。 somehow, things feel just a little easier when you wear it armor 护甲 body chest armor armor_storage"
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
      "bodypart": 55,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 55,
        "description": "wls2_armor_st_patrick_jacket_2026_desc",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_st_patrick_jacket_2026_desc",
        "name": "wls2_armor_st_patrick_jacket_2026_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_patrick2026_body",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 5,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_st_patrick_jacket_t5_2026",
      "localization": {
        "description_key": "wls2_armor_st_patrick_jacket_2026_desc",
        "en": {
          "description": "Somehow, things feel just a little easier when you wear it",
          "full_description": "Somehow, things feel just a little easier when you wear it",
          "name": "Irish Luck Jacket"
        },
        "full_description_key": "wls2_armor_st_patrick_jacket_2026_desc",
        "name_key": "wls2_armor_st_patrick_jacket_2026_name",
        "zh": {
          "description": "不知怎的，当你穿它时，事情感觉就稍微容易一点。",
          "full_description": "不知怎的，当你穿它时，事情感觉就稍微容易一点。",
          "name": "爱尔兰运气夹克"
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
                "inventory_stack_id": "wls2_armor_st_patrick_jacket_t5_2026"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_st_patrick_jacket_t5_2026_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_patrick2026_body",
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
      "image_key": "8bdc140f7e751a2f4dbec6abb5dca50b28855135b55145f43e250c137228260e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "爱尔兰运气夹克",
        "name_en": "Irish Luck Jacket",
        "description_zh": "不知怎的，当你穿它时，事情感觉就稍微容易一点。",
        "description_en": "Somehow, things feel just a little easier when you wear it",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_st_patrick_jacket_t5_2026 爱尔兰运气夹克 irish luck jacket 不知怎的，当你穿它时，事情感觉就稍微容易一点。 somehow, things feel just a little easier when you wear it armor 护甲 body chest armor armor_storage"
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
      "bodypart": 55,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 55,
        "description": "wls2_armor_st_patrick_jacket_2026_desc",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_st_patrick_jacket_2026_desc",
        "name": "wls2_armor_st_patrick_jacket_2026_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_patrick2026_body",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 6,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_st_patrick_jacket_t6_2026",
      "localization": {
        "description_key": "wls2_armor_st_patrick_jacket_2026_desc",
        "en": {
          "description": "Somehow, things feel just a little easier when you wear it",
          "full_description": "Somehow, things feel just a little easier when you wear it",
          "name": "Irish Luck Jacket"
        },
        "full_description_key": "wls2_armor_st_patrick_jacket_2026_desc",
        "name_key": "wls2_armor_st_patrick_jacket_2026_name",
        "zh": {
          "description": "不知怎的，当你穿它时，事情感觉就稍微容易一点。",
          "full_description": "不知怎的，当你穿它时，事情感觉就稍微容易一点。",
          "name": "爱尔兰运气夹克"
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
                "inventory_stack_id": "wls2_armor_st_patrick_jacket_t6_2026"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_st_patrick_jacket_t6_2026_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_patrick2026_body",
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
      "image_key": "8bdc140f7e751a2f4dbec6abb5dca50b28855135b55145f43e250c137228260e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "爱尔兰运气夹克",
        "name_en": "Irish Luck Jacket",
        "description_zh": "不知怎的，当你穿它时，事情感觉就稍微容易一点。",
        "description_en": "Somehow, things feel just a little easier when you wear it",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_st_patrick_jacket_t6_2026 爱尔兰运气夹克 irish luck jacket 不知怎的，当你穿它时，事情感觉就稍微容易一点。 somehow, things feel just a little easier when you wear it armor 护甲 body chest armor armor_storage"
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
      "bodypart": 55,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 55,
        "description": "wls2_armor_st_patrick_jacket_2026_desc",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_st_patrick_jacket_2026_desc",
        "name": "wls2_armor_st_patrick_jacket_2026_name",
        "rarity": "epic",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary10/wls2_armor_patrick2026_body",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_st_patrick_jacket_t7_2026",
      "localization": {
        "description_key": "wls2_armor_st_patrick_jacket_2026_desc",
        "en": {
          "description": "Somehow, things feel just a little easier when you wear it",
          "full_description": "Somehow, things feel just a little easier when you wear it",
          "name": "Irish Luck Jacket"
        },
        "full_description_key": "wls2_armor_st_patrick_jacket_2026_desc",
        "name_key": "wls2_armor_st_patrick_jacket_2026_name",
        "zh": {
          "description": "不知怎的，当你穿它时，事情感觉就稍微容易一点。",
          "full_description": "不知怎的，当你穿它时，事情感觉就稍微容易一点。",
          "name": "爱尔兰运气夹克"
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
                "inventory_stack_id": "wls2_armor_st_patrick_jacket_t7_2026"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_st_patrick_jacket_t7_2026_recycle"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_patrick2026_body",
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
      "image_key": "8bdc140f7e751a2f4dbec6abb5dca50b28855135b55145f43e250c137228260e",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "爱尔兰运气夹克",
        "name_en": "Irish Luck Jacket",
        "description_zh": "不知怎的，当你穿它时，事情感觉就稍微容易一点。",
        "description_en": "Somehow, things feel just a little easier when you wear it",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "史诗",
        "search_text": "wls2_armor_st_patrick_jacket_t7_2026 爱尔兰运气夹克 irish luck jacket 不知怎的，当你穿它时，事情感觉就稍微容易一点。 somehow, things feel just a little easier when you wear it armor 护甲 body chest armor armor_storage"
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
        "description": "inventory_stack_view_wls2_armor_xmas2020_elf_body_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_xmas2020_elf_body_description",
        "name": "inventory_stack_view_wls2_armor_xmas2020_elf_body_name",
        "rarity": "common",
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
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_xmas2020_elf_body",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_xmas2020_elf_body_description",
        "en": {
          "description": "The mere sight of an elf should trigger joy. But still, there are doubts",
          "full_description": "The mere sight of an elf should trigger joy. But still, there are doubts",
          "name": "Courier elf's outfit"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_xmas2020_elf_body_description",
        "name_key": "inventory_stack_view_wls2_armor_xmas2020_elf_body_name",
        "zh": {
          "description": "只要看到一个小精灵就会引起欢笑。不过，还是会有疑虑。",
          "full_description": "只要看到一个小精灵就会引起欢笑。不过，还是会有疑虑。",
          "name": "助手精灵套装"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_4": 2,
            "wls2_resourse_secondary_leather_3": 5,
            "wls2_resourse_tertiary_clothroll_4": 3
          },
          "is_legacy": true,
          "learn_exp": 200,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_armor_xmas2020_elf_body"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_leather_3": 5,
                "wls2_resourse_tertiary_clothroll_4": 3
              },
              "is_legacy": true,
              "learn_exp": 200,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_elf_body"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_armor_xmas2020_elf_body"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_elf_body",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_7"
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
          "1": 272,
          "2": 295,
          "3": 302,
          "4": 326,
          "5": 356,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 4473,
          "2": 5010,
          "3": 5427,
          "4": 5813,
          "5": 6203
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
      "image_key": "8c4cd044c00f4b472283ad95a7a57770c0d63e9d929447c9be25b84ff9193269",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "助手精灵套装",
        "name_en": "Courier elf's outfit",
        "description_zh": "只要看到一个小精灵就会引起欢笑。不过，还是会有疑虑。",
        "description_en": "The mere sight of an elf should trigger joy. But still, there are doubts",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_xmas2020_elf_body 助手精灵套装 courier elf's outfit 只要看到一个小精灵就会引起欢笑。不过，还是会有疑虑。 the mere sight of an elf should trigger joy. but still, there are doubts armor 护甲 body chest armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 272,
            "unit": "",
            "display": "272"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 4473,
            "unit": "",
            "display": "4473"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 272,
              "max_durability": 4473
            },
            "display": {
              "armor": "272",
              "max_durability": "4473"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 295,
              "max_durability": 5010
            },
            "display": {
              "armor": "295",
              "max_durability": "5010"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 302,
              "max_durability": 5427
            },
            "display": {
              "armor": "302",
              "max_durability": "5427"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 326,
              "max_durability": 5813
            },
            "display": {
              "armor": "326",
              "max_durability": "5813"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 356,
              "max_durability": 6203
            },
            "display": {
              "armor": "356",
              "max_durability": "6203"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 357,
              "max_durability": 6203
            },
            "display": {
              "armor": "357",
              "max_durability": "6203"
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
          "防御：6 级起每级增加 1，最高 1356。"
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
      "bodypart": 26,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 26,
        "description": "inventory_stack_view_wls2_armor_xmas2020_elf_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_xmas2020_elf_boots_description",
        "name": "inventory_stack_view_wls2_armor_xmas2020_elf_boots_name",
        "rarity": "common",
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
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_xmas2020_elf_boots",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_xmas2020_elf_boots_description",
        "en": {
          "description": "Legend says that elves usually help in taking care of celebrations",
          "full_description": "Legend says that elves usually help in taking care of celebrations",
          "name": "Courier Elf's boots"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_xmas2020_elf_boots_description",
        "name_key": "inventory_stack_view_wls2_armor_xmas2020_elf_boots_name",
        "zh": {
          "description": "传说圣诞精灵通常会帮忙举办庆典活动",
          "full_description": "传说圣诞精灵通常会帮忙举办庆典活动",
          "name": "圣诞精灵靴"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_4": 2,
            "wls2_resourse_secondary_cloth_4": 3,
            "wls2_resourse_secondary_leather_3": 4
          },
          "is_legacy": true,
          "learn_exp": 200,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_armor_xmas2020_elf_boots"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_cloth_4": 3,
                "wls2_resourse_secondary_leather_3": 4
              },
              "is_legacy": true,
              "learn_exp": 200,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_elf_boots"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_armor_xmas2020_elf_boots"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_elf_boots",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_5"
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
          "1": 75,
          "2": 80,
          "3": 92,
          "4": 101,
          "5": 16,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 1842,
          "2": 2171,
          "3": 2385,
          "4": 2602,
          "5": 2756
        },
        "move_speed_modifier": {
          "1": 0.05,
          "2": 0.05,
          "3": 0.05,
          "4": 0.05,
          "5": 0.05
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
      "image_key": "2b8c6e5e132f6491e31022fe34f7c65aa77580fca9e27b850ef3a6571dcac00b",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "圣诞精灵靴",
        "name_en": "Courier Elf's boots",
        "description_zh": "传说圣诞精灵通常会帮忙举办庆典活动",
        "description_en": "Legend says that elves usually help in taking care of celebrations",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_xmas2020_elf_boots 圣诞精灵靴 courier elf's boots 传说圣诞精灵通常会帮忙举办庆典活动 legend says that elves usually help in taking care of celebrations armor 护甲 boots boots armor armor_storage festive"
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
            "value": 1842,
            "unit": "",
            "display": "1842"
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
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 75,
              "max_durability": 1842
            },
            "display": {
              "armor": "75",
              "max_durability": "1842"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 80,
              "max_durability": 2171
            },
            "display": {
              "armor": "80",
              "max_durability": "2171"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 92,
              "max_durability": 2385
            },
            "display": {
              "armor": "92",
              "max_durability": "2385"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 101,
              "max_durability": 2602
            },
            "display": {
              "armor": "101",
              "max_durability": "2602"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 16,
              "max_durability": 2756
            },
            "display": {
              "armor": "16",
              "max_durability": "2756"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 17,
              "max_durability": 2756
            },
            "display": {
              "armor": "17",
              "max_durability": "2756"
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
          "防御：6 级起每级增加 1，最高 1016。",
          "防御在 5 级变为 16（4 级为 101），已保留原值。"
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
      "bodypart": 28,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 28,
        "description": "inventory_stack_view_wls2_armor_xmas2020_elf_head_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_xmas2020_elf_head_description",
        "name": "inventory_stack_view_wls2_armor_xmas2020_elf_head_name",
        "rarity": "common",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_xmas2020_elf_head",
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
      "item_id": "wls2_armor_xmas2020_elf_head",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_xmas2020_elf_head_description",
        "en": {
          "description": "The mere sight of an elf should trigger joy. But still, there are doubts.",
          "full_description": "The mere sight of an elf should trigger joy. But still, there are doubts.",
          "name": "Helper elf's helmet"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_xmas2020_elf_head_description",
        "name_key": "inventory_stack_view_wls2_armor_xmas2020_elf_head_name",
        "zh": {
          "description": "只要看到一个小精灵就会引起欢笑。不过，还是会有疑虑。",
          "full_description": "只要看到一个小精灵就会引起欢笑。不过，还是会有疑虑。",
          "name": "助手精灵头盔"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_4": 2,
            "wls2_resourse_secondary_leather_3": 7,
            "wls2_resourse_tertiary_clothroll_4": 2
          },
          "is_legacy": true,
          "learn_exp": 200,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_armor_xmas2020_elf_head"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_4": 2,
                "wls2_resourse_secondary_leather_3": 7,
                "wls2_resourse_tertiary_clothroll_4": 2
              },
              "is_legacy": true,
              "learn_exp": 200,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_elf_head"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_armor_xmas2020_elf_head"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_elf_head",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_6"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_xmas2020_elf_head",
      "stat_curves": {
        "armor": {
          "1": 118,
          "2": 128,
          "3": 134,
          "4": 146,
          "5": 152,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 3817,
          "2": 4274,
          "3": 4682,
          "4": 5089,
          "5": 5447
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
      "image_key": "b293e5c27e7f602568725fc36394f2699fbb04a2999a3a39cefb1c848c0c1968",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "助手精灵头盔",
        "name_en": "Helper elf's helmet",
        "description_zh": "只要看到一个小精灵就会引起欢笑。不过，还是会有疑虑。",
        "description_en": "The mere sight of an elf should trigger joy. But still, there are doubts.",
        "category_zh": "护甲",
        "subcategory": "head",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_xmas2020_elf_head 助手精灵头盔 helper elf's helmet 只要看到一个小精灵就会引起欢笑。不过，还是会有疑虑。 the mere sight of an elf should trigger joy. but still, there are doubts. armor 护甲 head head armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 118,
            "unit": "",
            "display": "118"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 3817,
            "unit": "",
            "display": "3817"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 118,
              "max_durability": 3817
            },
            "display": {
              "armor": "118",
              "max_durability": "3817"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 128,
              "max_durability": 4274
            },
            "display": {
              "armor": "128",
              "max_durability": "4274"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 134,
              "max_durability": 4682
            },
            "display": {
              "armor": "134",
              "max_durability": "4682"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 146,
              "max_durability": 5089
            },
            "display": {
              "armor": "146",
              "max_durability": "5089"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 152,
              "max_durability": 5447
            },
            "display": {
              "armor": "152",
              "max_durability": "5447"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 153,
              "max_durability": 5447
            },
            "display": {
              "armor": "153",
              "max_durability": "5447"
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
          "防御：6 级起每级增加 1，最高 1152。"
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
      "bodypart": 26,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 26,
        "description": "inventory_stack_view_wls2_armor_xmas2020_elf_legs_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls2_armor_xmas2020_elf_legs_description",
        "name": "inventory_stack_view_wls2_armor_xmas2020_elf_legs_name",
        "rarity": "common",
        "sorting_group_id": "armor_legs",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary05/wls2_armor_xmas2020_elf_legs",
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
      "item_id": "wls2_armor_xmas2020_elf_legs",
      "localization": {
        "description_key": "inventory_stack_view_wls2_armor_xmas2020_elf_legs_description",
        "en": {
          "description": "The mere sight of an elf should trigger joy. But still, there are doubts",
          "full_description": "The mere sight of an elf should trigger joy. But still, there are doubts",
          "name": "Helper elf's pants"
        },
        "full_description_key": "inventory_stack_view_wls2_armor_xmas2020_elf_legs_description",
        "name_key": "inventory_stack_view_wls2_armor_xmas2020_elf_legs_name",
        "zh": {
          "description": "只要看到一个小精灵就会引起欢笑。不过，还是会有疑虑。",
          "full_description": "只要看到一个小精灵就会引起欢笑。不过，还是会有疑虑。",
          "name": "助手精灵裤子"
        }
      },
      "official_inclusion_status": "core_player_equipment",
      "rarity": "common",
      "recipe": {
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_4": 3,
            "wls2_resourse_secondary_leather_3": 3,
            "wls2_resourse_secondary_rope_4": 3
          },
          "is_legacy": true,
          "learn_exp": 200,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_armor_xmas2020_elf_legs"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_4": 3,
                "wls2_resourse_secondary_leather_3": 3,
                "wls2_resourse_secondary_rope_4": 3
              },
              "is_legacy": true,
              "learn_exp": 200,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_elf_legs"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_armor_xmas2020_elf_legs"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_elf_legs",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_8"
          }
        ]
      },
      "repair_offers": {
        "backpack": [],
        "regular": []
      },
      "sprite": "UI_WW_AlphaBinary05/wls2_armor_xmas2020_elf_legs",
      "stat_curves": {
        "armor": {
          "1": 155,
          "2": 162,
          "3": 175,
          "4": 192,
          "5": 201,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 2742,
          "2": 3070,
          "3": 3363,
          "4": 3656,
          "5": 3913
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
      "image_key": "61c0de24c478bddae8b45b9edc14638f52a74b4a4a567468cdf93406e4861a13",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "助手精灵裤子",
        "name_en": "Helper elf's pants",
        "description_zh": "只要看到一个小精灵就会引起欢笑。不过，还是会有疑虑。",
        "description_en": "The mere sight of an elf should trigger joy. But still, there are doubts",
        "category_zh": "护甲",
        "subcategory": "legs",
        "rarity_zh": "普通",
        "search_text": "wls2_armor_xmas2020_elf_legs 助手精灵裤子 helper elf's pants 只要看到一个小精灵就会引起欢笑。不过，还是会有疑虑。 the mere sight of an elf should trigger joy. but still, there are doubts armor 护甲 legs legs armor armor_storage festive"
      },
      "numeric": {
        "summary": [
          {
            "key": "armor",
            "label": "防御",
            "value": 155,
            "unit": "",
            "display": "155"
          },
          {
            "key": "max_durability",
            "label": "耐久",
            "value": 2742,
            "unit": "",
            "display": "2742"
          },
          {
            "key": "warm_modifier",
            "label": "保暖",
            "value": 1.5,
            "unit": "",
            "display": "1.5"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 155,
              "max_durability": 2742
            },
            "display": {
              "armor": "155",
              "max_durability": "2742"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 162,
              "max_durability": 3070
            },
            "display": {
              "armor": "162",
              "max_durability": "3070"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 175,
              "max_durability": 3363
            },
            "display": {
              "armor": "175",
              "max_durability": "3363"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 192,
              "max_durability": 3656
            },
            "display": {
              "armor": "192",
              "max_durability": "3656"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 201,
              "max_durability": 3913
            },
            "display": {
              "armor": "201",
              "max_durability": "3913"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 202,
              "max_durability": 3913
            },
            "display": {
              "armor": "202",
              "max_durability": "3913"
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
          "防御：6 级起每级增加 1，最高 1201。"
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
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_jacket",
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
      "item_id": "wls2_armor_xmas2020_green_body",
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
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 1,
            "wls2_resourse_secondary_leather_3": 7,
            "wls2_resourse_tertiary_clothroll_3": 2
          },
          "is_legacy": true,
          "learn_exp": 100,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_armor_xmas2020_green_body"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_3": 1,
                "wls2_resourse_secondary_leather_3": 7,
                "wls2_resourse_tertiary_clothroll_3": 2
              },
              "is_legacy": true,
              "learn_exp": 100,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_green_body"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_armor_xmas2020_green_body"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_green_body",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_21"
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
          "1": 88,
          "2": 96,
          "3": 105,
          "4": 114,
          "5": 123,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 857,
          "2": 942,
          "3": 1028,
          "4": 1114,
          "5": 1200
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
        "search_text": "wls2_armor_xmas2020_green_body 圣诞老人的绿色外套 santa's green jacket 结实耐寒的外套，能够承受敌人的攻击。 this jacket with protection from extreme cold will also constrain attacks from opponents armor 护甲 body chest armor armor_storage festive"
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
            "value": 857,
            "unit": "",
            "display": "857"
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
              "armor": 88,
              "max_durability": 857
            },
            "display": {
              "armor": "88",
              "max_durability": "857"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 96,
              "max_durability": 942
            },
            "display": {
              "armor": "96",
              "max_durability": "942"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 105,
              "max_durability": 1028
            },
            "display": {
              "armor": "105",
              "max_durability": "1028"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 114,
              "max_durability": 1114
            },
            "display": {
              "armor": "114",
              "max_durability": "1114"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 123,
              "max_durability": 1200
            },
            "display": {
              "armor": "123",
              "max_durability": "1200"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 124,
              "max_durability": 1200
            },
            "display": {
              "armor": "124",
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
        "has_direct_recipe": true,
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
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_boots",
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
      "item_id": "wls2_armor_xmas2020_green_boots",
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
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 1,
            "wls2_resourse_secondary_cloth_3": 3,
            "wls2_resourse_secondary_leather_3": 5
          },
          "is_legacy": true,
          "learn_exp": 100,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_armor_xmas2020_green_boots"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_3": 1,
                "wls2_resourse_secondary_cloth_3": 3,
                "wls2_resourse_secondary_leather_3": 5
              },
              "is_legacy": true,
              "learn_exp": 100,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_green_boots"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_armor_xmas2020_green_boots"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_green_boots",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_19"
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
          "1": 25,
          "2": 28,
          "3": 30,
          "4": 33,
          "5": 35,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 428,
          "2": 471,
          "3": 514,
          "4": 557,
          "5": 600
        },
        "move_speed_modifier": {
          "1": 0.1,
          "2": 0.1,
          "3": 0.1,
          "4": 0.1,
          "5": 0.1
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
        "search_text": "wls2_armor_xmas2020_green_boots 圣诞老人的绿色靴子 santa's green boots 温暖厚实的节日靴子，可帮助你在雪地上行走。 warm holiday boots will help to get through the snow. armor 护甲 boots boots armor armor_storage festive"
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
            "value": 428,
            "unit": "",
            "display": "428"
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
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 25,
              "max_durability": 428
            },
            "display": {
              "armor": "25",
              "max_durability": "428"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 28,
              "max_durability": 471
            },
            "display": {
              "armor": "28",
              "max_durability": "471"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 30,
              "max_durability": 514
            },
            "display": {
              "armor": "30",
              "max_durability": "514"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 33,
              "max_durability": 557
            },
            "display": {
              "armor": "33",
              "max_durability": "557"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 35,
              "max_durability": 600
            },
            "display": {
              "armor": "35",
              "max_durability": "600"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 36,
              "max_durability": 600
            },
            "display": {
              "armor": "36",
              "max_durability": "600"
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
        "description": "inventory_stack_view_wls_xmas_green_hat_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "inventory_stack_view_wls_xmas_green_hat_description",
        "name": "inventory_stack_view_wls_xmas_green_hat_name",
        "rarity": "common",
        "sorting_group_id": "armor_head",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_hat",
        "tags": [
          "head",
          "armor",
          "armor_storage"
        ],
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_xmas2020_green_head",
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
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 1,
            "wls2_resourse_secondary_leather_3": 8,
            "wls2_resourse_tertiary_clothroll_3": 1
          },
          "is_legacy": true,
          "learn_exp": 100,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_armor_xmas2020_green_head"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_3": 1,
                "wls2_resourse_secondary_leather_3": 8,
                "wls2_resourse_tertiary_clothroll_3": 1
              },
              "is_legacy": true,
              "learn_exp": 100,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_green_head"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_armor_xmas2020_green_head"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_green_head",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_20"
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
          "1": 68,
          "2": 74,
          "3": 81,
          "4": 88,
          "5": 95,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 971,
          "2": 1068,
          "3": 1165,
          "4": 1262,
          "5": 1359
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
        "search_text": "wls2_armor_xmas2020_green_head 圣诞老人的绿色毛帽 santa's green cap 有着华丽节庆外观的温暖毛帽，让你的耳朵不再受冻。 a warm cap with a festive look will not let your ears freeze. armor 护甲 head head armor armor_storage"
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
            "value": 971,
            "unit": "",
            "display": "971"
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
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 68,
              "max_durability": 971
            },
            "display": {
              "armor": "68",
              "max_durability": "971"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 74,
              "max_durability": 1068
            },
            "display": {
              "armor": "74",
              "max_durability": "1068"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 81,
              "max_durability": 1165
            },
            "display": {
              "armor": "81",
              "max_durability": "1165"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 88,
              "max_durability": 1262
            },
            "display": {
              "armor": "88",
              "max_durability": "1262"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 95,
              "max_durability": 1359
            },
            "display": {
              "armor": "95",
              "max_durability": "1359"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 96,
              "max_durability": 1359
            },
            "display": {
              "armor": "96",
              "max_durability": "1359"
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
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_xmas2020_green_legs",
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
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 2,
            "wls2_resourse_secondary_leather_3": 4,
            "wls2_resourse_secondary_rope_3": 3
          },
          "is_legacy": true,
          "learn_exp": 100,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_armor_xmas2020_green_legs"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_3": 2,
                "wls2_resourse_secondary_leather_3": 4,
                "wls2_resourse_secondary_rope_3": 3
              },
              "is_legacy": true,
              "learn_exp": 100,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_green_legs"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_armor_xmas2020_green_legs"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_green_legs",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_22"
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
          "1": 50,
          "2": 55,
          "3": 60,
          "4": 65,
          "5": 70,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 643,
          "2": 707,
          "3": 771,
          "4": 835,
          "5": 900
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
        "search_text": "wls2_armor_xmas2020_green_legs 圣诞老人的绿色裤子 santa's green pants 充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。 warm holiday pants will protect against scoundrels and the cold armor 护甲 legs legs armor armor_storage festive"
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
            "value": 643,
            "unit": "",
            "display": "643"
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
              "armor": 50,
              "max_durability": 643
            },
            "display": {
              "armor": "50",
              "max_durability": "643"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 55,
              "max_durability": 707
            },
            "display": {
              "armor": "55",
              "max_durability": "707"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 60,
              "max_durability": 771
            },
            "display": {
              "armor": "60",
              "max_durability": "771"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 65,
              "max_durability": 835
            },
            "display": {
              "armor": "65",
              "max_durability": "835"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 70,
              "max_durability": 900
            },
            "display": {
              "armor": "70",
              "max_durability": "900"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 71,
              "max_durability": 900
            },
            "display": {
              "armor": "71",
              "max_durability": "900"
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
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_xmas2020_red_body",
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
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 2,
            "wls2_resourse_secondary_leather_3": 8,
            "wls2_resourse_tertiary_clothroll_3": 3
          },
          "is_legacy": true,
          "learn_exp": 150,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_armor_xmas2020_red_body"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_3": 2,
                "wls2_resourse_secondary_leather_3": 8,
                "wls2_resourse_tertiary_clothroll_3": 3
              },
              "is_legacy": true,
              "learn_exp": 150,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_red_body"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_armor_xmas2020_red_body"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_red_body",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_27"
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
          "1": 140,
          "2": 154,
          "3": 168,
          "4": 182,
          "5": 196,
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
          "1": 2.25,
          "2": 2.25,
          "3": 2.25,
          "4": 2.25,
          "5": 2.25
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
        "search_text": "wls2_armor_xmas2020_red_body 圣诞老人的红色外套 santa's red jacket 结实耐寒的外套，能够承受敌人的攻击。 this jacket has protection from extreme cold and withstands attacks from opponents armor 护甲 body chest armor armor_storage festive"
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
            "value": 1671,
            "unit": "",
            "display": "1671"
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
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 140,
              "max_durability": 1671
            },
            "display": {
              "armor": "140",
              "max_durability": "1671"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 154,
              "max_durability": 1838
            },
            "display": {
              "armor": "154",
              "max_durability": "1838"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 168,
              "max_durability": 2005
            },
            "display": {
              "armor": "168",
              "max_durability": "2005"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 182,
              "max_durability": 2172
            },
            "display": {
              "armor": "182",
              "max_durability": "2172"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 196,
              "max_durability": 2339
            },
            "display": {
              "armor": "196",
              "max_durability": "2339"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 197,
              "max_durability": 2339
            },
            "display": {
              "armor": "197",
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
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_xmas2020_red_boots",
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
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 2,
            "wls2_resourse_secondary_cloth_3": 4,
            "wls2_resourse_secondary_leather_3": 6
          },
          "is_legacy": true,
          "learn_exp": 150,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_armor_xmas2020_red_boots"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_3": 2,
                "wls2_resourse_secondary_cloth_3": 4,
                "wls2_resourse_secondary_leather_3": 6
              },
              "is_legacy": true,
              "learn_exp": 150,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_red_boots"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_armor_xmas2020_red_boots"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_red_boots",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_25"
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
          "1": 40,
          "2": 44,
          "3": 48,
          "4": 52,
          "5": 56,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 928,
          "2": 1021,
          "3": 1114,
          "4": 1207,
          "5": 1299
        },
        "move_speed_modifier": {
          "1": 0.05,
          "2": 0.05,
          "3": 0.05,
          "4": 0.05,
          "5": 0.05
        },
        "warm_modifier": {
          "1": 1.25,
          "2": 1.25,
          "3": 1.25,
          "4": 1.25,
          "5": 1.25
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
        "rarity_zh": "普通",
        "search_text": "wls2_armor_xmas2020_red_boots 圣诞老人的红色靴子 santa's red boots 温暖厚实的节日靴子，可帮助你在雪地上行走。 warm holiday boots will help to get through the snow armor 护甲 boots boots armor armor_storage festive"
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
            "value": 928,
            "unit": "",
            "display": "928"
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
            "value": 1.25,
            "unit": "",
            "display": "1.25"
          }
        ],
        "fixed": [],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 40,
              "max_durability": 928
            },
            "display": {
              "armor": "40",
              "max_durability": "928"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 44,
              "max_durability": 1021
            },
            "display": {
              "armor": "44",
              "max_durability": "1021"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 48,
              "max_durability": 1114
            },
            "display": {
              "armor": "48",
              "max_durability": "1114"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 52,
              "max_durability": 1207
            },
            "display": {
              "armor": "52",
              "max_durability": "1207"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 56,
              "max_durability": 1299
            },
            "display": {
              "armor": "56",
              "max_durability": "1299"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 57,
              "max_durability": 1299
            },
            "display": {
              "armor": "57",
              "max_durability": "1299"
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
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_xmas2020_red_head",
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
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 2,
            "wls2_resourse_secondary_leather_3": 11,
            "wls2_resourse_tertiary_clothroll_3": 2
          },
          "is_legacy": true,
          "learn_exp": 150,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_armor_xmas2020_red_head"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_3": 2,
                "wls2_resourse_secondary_leather_3": 11,
                "wls2_resourse_tertiary_clothroll_3": 2
              },
              "is_legacy": true,
              "learn_exp": 150,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_red_head"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_armor_xmas2020_red_head"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_red_head",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_26"
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
          "1": 60,
          "2": 66,
          "3": 72,
          "4": 78,
          "5": 84,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 1114,
          "2": 1225,
          "3": 1337,
          "4": 1448,
          "5": 1559
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
        "search_text": "wls2_armor_xmas2020_red_head 圣诞老人的红色毛帽 santa's red cap 有着华丽节庆外观的温暖毛帽，让你的耳朵不再受冻。 a warm cap with a festive look will not let your ears freeze. armor 护甲 head head armor armor_storage festive"
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
            "value": 1114,
            "unit": "",
            "display": "1114"
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
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 60,
              "max_durability": 1114
            },
            "display": {
              "armor": "60",
              "max_durability": "1114"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 66,
              "max_durability": 1225
            },
            "display": {
              "armor": "66",
              "max_durability": "1225"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 72,
              "max_durability": 1337
            },
            "display": {
              "armor": "72",
              "max_durability": "1337"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 78,
              "max_durability": 1448
            },
            "display": {
              "armor": "78",
              "max_durability": "1448"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 84,
              "max_durability": 1559
            },
            "display": {
              "armor": "84",
              "max_durability": "1559"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 85,
              "max_durability": 1559
            },
            "display": {
              "armor": "85",
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
        "tier": 3,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_xmas2020_red_legs",
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
        "direct": {
          "ingredients": {
            "wls2_resourse_fourfold_nails_3": 3,
            "wls2_resourse_secondary_leather_3": 6,
            "wls2_resourse_secondary_rope_3": 4
          },
          "is_legacy": true,
          "learn_exp": 150,
          "min_level": 0,
          "result": {
            "inventory_stack_id": "wls2_armor_xmas2020_red_legs"
          },
          "show_only_if_learned": true,
          "type": "workbench"
        },
        "result_sources": [
          {
            "definition": {
              "ingredients": {
                "wls2_resourse_fourfold_nails_3": 3,
                "wls2_resourse_secondary_leather_3": 6,
                "wls2_resourse_secondary_rope_3": 4
              },
              "is_legacy": true,
              "learn_exp": 150,
              "min_level": 0,
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_red_legs"
              },
              "show_only_if_learned": true,
              "type": "workbench"
            },
            "recipe_id": "wls2_armor_xmas2020_red_legs"
          },
          {
            "definition": {
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2020_red_legs",
                "item_level": 3
              },
              "type": "trader"
            },
            "recipe_id": "wls2_xmas2020_trader_wls_random_item_28"
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
          "1": 80,
          "2": 88,
          "3": 96,
          "4": 104,
          "5": 112,
          "per_level_after_max": 1
        },
        "max_durability": {
          "1": 1299,
          "2": 1429,
          "3": 1559,
          "4": 1689,
          "5": 1819
        },
        "warm_modifier": {
          "1": 2.25,
          "2": 2.25,
          "3": 2.25,
          "4": 2.25,
          "5": 2.25
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
      "tier": 3,
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
        "search_text": "wls2_armor_xmas2020_red_legs 圣诞老人的红色裤子 santa's red pants 充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。 warm holiday pants will protect against scoundrels and the cold armor 护甲 legs legs armor armor_storage festive"
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
            "value": 1299,
            "unit": "",
            "display": "1299"
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
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 80,
              "max_durability": 1299
            },
            "display": {
              "armor": "80",
              "max_durability": "1299"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 88,
              "max_durability": 1429
            },
            "display": {
              "armor": "88",
              "max_durability": "1429"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 96,
              "max_durability": 1559
            },
            "display": {
              "armor": "96",
              "max_durability": "1559"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 104,
              "max_durability": 1689
            },
            "display": {
              "armor": "104",
              "max_durability": "1689"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 112,
              "max_durability": 1819
            },
            "display": {
              "armor": "112",
              "max_durability": "1819"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 113,
              "max_durability": 1819
            },
            "display": {
              "armor": "113",
              "max_durability": "1819"
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
        "has_direct_recipe": false,
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
        "description": "wls2_armor_xmas2024_body_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_body_description",
        "name": "wls2_armor_xmas2024_body_name",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_body",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_xmas2024_body_2_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_body_description",
        "en": {
          "description": "Festive armor for battling holiday calories",
          "full_description": "Festive armor for battling holiday calories",
          "name": "Grandma's Revenge"
        },
        "full_description_key": "wls2_armor_xmas2024_body_description",
        "name_key": "wls2_armor_xmas2024_body_name",
        "zh": {
          "description": "节日盔甲为了战斗假日卡路里",
          "full_description": "节日盔甲为了战斗假日卡路里",
          "name": "奶奶的复仇"
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
                "wls2_resourse_secondary_leather_2": 10,
                "wls2_resourse_tertiary_clothroll_2": 2
              },
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2024_body_2_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_body_2_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_body_2_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_body",
      "stat_curves": {
        "armor": {
          "1": 80,
          "2": 85,
          "3": 95,
          "4": 100,
          "5": 110,
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
          "1": 735,
          "2": 800,
          "3": 870,
          "4": 940,
          "5": 1005
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
      "image_key": "4db205d05f980c2d4b30cfee1c759581bfe489d1e019b923bb243af4e6f8fb96",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "奶奶的复仇",
        "name_en": "Grandma's Revenge",
        "description_zh": "节日盔甲为了战斗假日卡路里",
        "description_en": "Festive armor for battling holiday calories",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_body_2_rare 奶奶的复仇 grandma's revenge 节日盔甲为了战斗假日卡路里 festive armor for battling holiday calories armor 护甲 body chest armor armor_storage"
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
            "value": 735,
            "unit": "",
            "display": "735"
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
              "armor": 80,
              "dexterity": 2,
              "max_durability": 735
            },
            "display": {
              "armor": "80",
              "dexterity": "+2",
              "max_durability": "735"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 85,
              "dexterity": 3,
              "max_durability": 800
            },
            "display": {
              "armor": "85",
              "dexterity": "+3",
              "max_durability": "800"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 95,
              "dexterity": 4,
              "max_durability": 870
            },
            "display": {
              "armor": "95",
              "dexterity": "+4",
              "max_durability": "870"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 100,
              "dexterity": 5,
              "max_durability": 940
            },
            "display": {
              "armor": "100",
              "dexterity": "+5",
              "max_durability": "940"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 110,
              "dexterity": 6,
              "max_durability": 1005
            },
            "display": {
              "armor": "110",
              "dexterity": "+6",
              "max_durability": "1005"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 111,
              "dexterity": 6,
              "max_durability": 1005
            },
            "display": {
              "armor": "111",
              "dexterity": "+6",
              "max_durability": "1005"
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
          "防御：6 级起每级增加 1，最高 1110。"
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
      "bodypart": 43,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 43,
        "description": "wls2_armor_xmas2024_body_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_body_description",
        "name": "wls2_armor_xmas2024_body_name",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_body",
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
      "item_id": "wls2_armor_xmas2024_body_3_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_body_description",
        "en": {
          "description": "Festive armor for battling holiday calories",
          "full_description": "Festive armor for battling holiday calories",
          "name": "Grandma's Revenge"
        },
        "full_description_key": "wls2_armor_xmas2024_body_description",
        "name_key": "wls2_armor_xmas2024_body_name",
        "zh": {
          "description": "节日盔甲为了战斗假日卡路里",
          "full_description": "节日盔甲为了战斗假日卡路里",
          "name": "奶奶的复仇"
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
                "inventory_stack_id": "wls2_armor_xmas2024_body_3_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_body_3_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_body_3_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_body",
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
          "1": 1821,
          "2": 2002,
          "3": 2185,
          "4": 2366,
          "5": 2549
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
      "image_key": "4db205d05f980c2d4b30cfee1c759581bfe489d1e019b923bb243af4e6f8fb96",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "奶奶的复仇",
        "name_en": "Grandma's Revenge",
        "description_zh": "节日盔甲为了战斗假日卡路里",
        "description_en": "Festive armor for battling holiday calories",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_body_3_rare 奶奶的复仇 grandma's revenge 节日盔甲为了战斗假日卡路里 festive armor for battling holiday calories armor 护甲 body chest armor armor_storage festive"
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
              "armor": 158,
              "dexterity": 2,
              "health_increment": 35,
              "max_durability": 1821
            },
            "display": {
              "armor": "158",
              "dexterity": "+2",
              "health_increment": "+35",
              "max_durability": "1821"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 173,
              "dexterity": 3,
              "health_increment": 40,
              "max_durability": 2002
            },
            "display": {
              "armor": "173",
              "dexterity": "+3",
              "health_increment": "+40",
              "max_durability": "2002"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 189,
              "dexterity": 4,
              "health_increment": 45,
              "max_durability": 2185
            },
            "display": {
              "armor": "189",
              "dexterity": "+4",
              "health_increment": "+45",
              "max_durability": "2185"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 205,
              "dexterity": 5,
              "health_increment": 50,
              "max_durability": 2366
            },
            "display": {
              "armor": "205",
              "dexterity": "+5",
              "health_increment": "+50",
              "max_durability": "2366"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 221,
              "dexterity": 6,
              "health_increment": 55,
              "max_durability": 2549
            },
            "display": {
              "armor": "221",
              "dexterity": "+6",
              "health_increment": "+55",
              "max_durability": "2549"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 222,
              "dexterity": 6,
              "health_increment": 55,
              "max_durability": 2549
            },
            "display": {
              "armor": "222",
              "dexterity": "+6",
              "health_increment": "+55",
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
    },
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
      "bodypart": 43,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 43,
        "description": "wls2_armor_xmas2024_body_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_body_description",
        "name": "wls2_armor_xmas2024_body_name",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_body",
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
      "item_id": "wls2_armor_xmas2024_body_4_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_body_description",
        "en": {
          "description": "Festive armor for battling holiday calories",
          "full_description": "Festive armor for battling holiday calories",
          "name": "Grandma's Revenge"
        },
        "full_description_key": "wls2_armor_xmas2024_body_description",
        "name_key": "wls2_armor_xmas2024_body_name",
        "zh": {
          "description": "节日盔甲为了战斗假日卡路里",
          "full_description": "节日盔甲为了战斗假日卡路里",
          "name": "奶奶的复仇"
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
                "inventory_stack_id": "wls2_armor_xmas2024_body_4_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_body_4_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_body_4_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_body",
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
          "1": 6203,
          "2": 6823,
          "3": 7443,
          "4": 8063,
          "5": 8684
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
      "image_key": "4db205d05f980c2d4b30cfee1c759581bfe489d1e019b923bb243af4e6f8fb96",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "奶奶的复仇",
        "name_en": "Grandma's Revenge",
        "description_zh": "节日盔甲为了战斗假日卡路里",
        "description_en": "Festive armor for battling holiday calories",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_body_4_rare 奶奶的复仇 grandma's revenge 节日盔甲为了战斗假日卡路里 festive armor for battling holiday calories armor 护甲 body chest armor armor_storage festive"
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
              "armor": 315,
              "dexterity": 2,
              "health_increment": 50,
              "max_durability": 6203
            },
            "display": {
              "armor": "315",
              "dexterity": "+2",
              "health_increment": "+50",
              "max_durability": "6203"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 347,
              "dexterity": 3,
              "health_increment": 55,
              "max_durability": 6823
            },
            "display": {
              "armor": "347",
              "dexterity": "+3",
              "health_increment": "+55",
              "max_durability": "6823"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 378,
              "dexterity": 4,
              "health_increment": 60,
              "max_durability": 7443
            },
            "display": {
              "armor": "378",
              "dexterity": "+4",
              "health_increment": "+60",
              "max_durability": "7443"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 410,
              "dexterity": 5,
              "health_increment": 65,
              "max_durability": 8063
            },
            "display": {
              "armor": "410",
              "dexterity": "+5",
              "health_increment": "+65",
              "max_durability": "8063"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 441,
              "dexterity": 6,
              "health_increment": 70,
              "max_durability": 8684
            },
            "display": {
              "armor": "441",
              "dexterity": "+6",
              "health_increment": "+70",
              "max_durability": "8684"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 442,
              "dexterity": 6,
              "health_increment": 70,
              "max_durability": 8684
            },
            "display": {
              "armor": "442",
              "dexterity": "+6",
              "health_increment": "+70",
              "max_durability": "8684"
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
      "bodypart": 43,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 43,
        "description": "wls2_armor_xmas2024_body_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_body_description",
        "name": "wls2_armor_xmas2024_body_name",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_body",
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
      "item_id": "wls2_armor_xmas2024_body_5_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_body_description",
        "en": {
          "description": "Festive armor for battling holiday calories",
          "full_description": "Festive armor for battling holiday calories",
          "name": "Grandma's Revenge"
        },
        "full_description_key": "wls2_armor_xmas2024_body_description",
        "name_key": "wls2_armor_xmas2024_body_name",
        "zh": {
          "description": "节日盔甲为了战斗假日卡路里",
          "full_description": "节日盔甲为了战斗假日卡路里",
          "name": "奶奶的复仇"
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
                "inventory_stack_id": "wls2_armor_xmas2024_body_5_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_body_5_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_body_5_rare",
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
            "stack_id": "wls2_armor_xmas2024_body_5_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_body",
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
          "1": 15987,
          "2": 17586,
          "3": 19184,
          "4": 20783,
          "5": 22382
        },
        "warm_modifier": {
          "1": 3,
          "2": 3,
          "3": 3,
          "4": 3,
          "5": 3
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
      "image_key": "4db205d05f980c2d4b30cfee1c759581bfe489d1e019b923bb243af4e6f8fb96",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "奶奶的复仇",
        "name_en": "Grandma's Revenge",
        "description_zh": "节日盔甲为了战斗假日卡路里",
        "description_en": "Festive armor for battling holiday calories",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_body_5_rare 奶奶的复仇 grandma's revenge 节日盔甲为了战斗假日卡路里 festive armor for battling holiday calories armor 护甲 body chest armor armor_storage festive"
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
            "value": 3,
            "unit": "",
            "display": "3"
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
              "dexterity": 4,
              "firearm_resistance": 0.04,
              "max_durability": 15987
            },
            "display": {
              "armor": "532",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "max_durability": "15987"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 585,
              "dexterity": 5,
              "firearm_resistance": 0.08,
              "max_durability": 17586
            },
            "display": {
              "armor": "585",
              "dexterity": "+5",
              "firearm_resistance": "+8%",
              "max_durability": "17586"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 638,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "max_durability": 19184
            },
            "display": {
              "armor": "638",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "max_durability": "19184"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 692,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "max_durability": 20783
            },
            "display": {
              "armor": "692",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "max_durability": "20783"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 745,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 22382
            },
            "display": {
              "armor": "745",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "max_durability": "22382"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 746,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 22382
            },
            "display": {
              "armor": "746",
              "dexterity": "+10",
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
      "bodypart": 43,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 43,
        "description": "wls2_armor_xmas2024_body_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_body_description",
        "name": "wls2_armor_xmas2024_body_name",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_body",
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
      "item_id": "wls2_armor_xmas2024_body_6_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_body_description",
        "en": {
          "description": "Festive armor for battling holiday calories",
          "full_description": "Festive armor for battling holiday calories",
          "name": "Grandma's Revenge"
        },
        "full_description_key": "wls2_armor_xmas2024_body_description",
        "name_key": "wls2_armor_xmas2024_body_name",
        "zh": {
          "description": "节日盔甲为了战斗假日卡路里",
          "full_description": "节日盔甲为了战斗假日卡路里",
          "name": "奶奶的复仇"
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
                "inventory_stack_id": "wls2_armor_xmas2024_body_6_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_body_6_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_body_6_rare",
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
            "stack_id": "wls2_armor_xmas2024_body_6_rare",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_body",
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
      "image_key": "4db205d05f980c2d4b30cfee1c759581bfe489d1e019b923bb243af4e6f8fb96",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "奶奶的复仇",
        "name_en": "Grandma's Revenge",
        "description_zh": "节日盔甲为了战斗假日卡路里",
        "description_en": "Festive armor for battling holiday calories",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_body_6_rare 奶奶的复仇 grandma's revenge 节日盔甲为了战斗假日卡路里 festive armor for battling holiday calories armor 护甲 body chest armor armor_storage festive"
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
      "bodypart": 43,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 43,
        "description": "wls2_armor_xmas2024_body_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_body_description",
        "name": "wls2_armor_xmas2024_body_name",
        "rarity": "rare",
        "sorting_group_id": "armor_body",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_body",
        "tags": [
          "chest",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_xmas2024_body_7_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_body_description",
        "en": {
          "description": "Festive armor for battling holiday calories",
          "full_description": "Festive armor for battling holiday calories",
          "name": "Grandma's Revenge"
        },
        "full_description_key": "wls2_armor_xmas2024_body_description",
        "name_key": "wls2_armor_xmas2024_body_name",
        "zh": {
          "description": "节日盔甲为了战斗假日卡路里",
          "full_description": "节日盔甲为了战斗假日卡路里",
          "name": "奶奶的复仇"
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
                "wls2_resourse_secondary_leather_7": 10,
                "wls2_resourse_tertiary_clothroll_5": 4
              },
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2024_body_7_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_xmas2024_body_7_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_body_7_rare",
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
            "stack_id": "wls2_armor_xmas2024_body_7_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_body",
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
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "4db205d05f980c2d4b30cfee1c759581bfe489d1e019b923bb243af4e6f8fb96",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "奶奶的复仇",
        "name_en": "Grandma's Revenge",
        "description_zh": "节日盔甲为了战斗假日卡路里",
        "description_en": "Festive armor for battling holiday calories",
        "category_zh": "护甲",
        "subcategory": "body",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_body_7_rare 奶奶的复仇 grandma's revenge 节日盔甲为了战斗假日卡路里 festive armor for battling holiday calories armor 护甲 body chest armor armor_storage"
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
        "description": "wls2_armor_xmas2024_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_boots_description",
        "name": "wls2_armor_xmas2024_boots_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_boots",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 2,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_xmas2024_boots_2_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_boots_description",
        "en": {
          "description": "Santa's secret weapon for staying on his feet",
          "full_description": "Santa's secret weapon for staying on his feet",
          "name": "Festive Boots"
        },
        "full_description_key": "wls2_armor_xmas2024_boots_description",
        "name_key": "wls2_armor_xmas2024_boots_name",
        "zh": {
          "description": "圣诞老人保持站立的秘密武器",
          "full_description": "圣诞老人保持站立的秘密武器",
          "name": "节日靴子"
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
                "wls2_resourse_fourfold_nails_2": 3,
                "wls2_resourse_secondary_leather_2": 4,
                "wls2_resourse_secondary_rope_2": 4
              },
              "result": {
                "inventory_stack_id": "wls2_armor_xmas2024_boots_2_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_boots_2_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_boots_2_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_boots",
      "stat_curves": {
        "armor": {
          "1": 25,
          "2": 25,
          "3": 25,
          "4": 30,
          "5": 30,
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
          "1": 280,
          "2": 310,
          "3": 340,
          "4": 355,
          "5": 385
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
      "image_key": "26cc505a101d52f8982310ebe706b7545e07a888f3fd39e176132cd806e3738d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "节日靴子",
        "name_en": "Festive Boots",
        "description_zh": "圣诞老人保持站立的秘密武器",
        "description_en": "Santa's secret weapon for staying on his feet",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_boots_2_rare 节日靴子 festive boots 圣诞老人保持站立的秘密武器 santa's secret weapon for staying on his feet armor 护甲 boots boots armor armor_storage"
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
            "value": 280,
            "unit": "",
            "display": "280"
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
          }
        ],
        "levels": [
          {
            "level": 1,
            "values": {
              "armor": 25,
              "dexterity": 2,
              "max_durability": 280
            },
            "display": {
              "armor": "25",
              "dexterity": "+2",
              "max_durability": "280"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 25,
              "dexterity": 3,
              "max_durability": 310
            },
            "display": {
              "armor": "25",
              "dexterity": "+3",
              "max_durability": "310"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 25,
              "dexterity": 4,
              "max_durability": 340
            },
            "display": {
              "armor": "25",
              "dexterity": "+4",
              "max_durability": "340"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 30,
              "dexterity": 5,
              "max_durability": 355
            },
            "display": {
              "armor": "30",
              "dexterity": "+5",
              "max_durability": "355"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 30,
              "dexterity": 6,
              "max_durability": 385
            },
            "display": {
              "armor": "30",
              "dexterity": "+6",
              "max_durability": "385"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 31,
              "dexterity": 6,
              "max_durability": 385
            },
            "display": {
              "armor": "31",
              "dexterity": "+6",
              "max_durability": "385"
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
          "防御：6 级起每级增加 1，最高 1030。"
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
        "description": "wls2_armor_xmas2024_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_boots_description",
        "name": "wls2_armor_xmas2024_boots_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_boots",
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
      "item_id": "wls2_armor_xmas2024_boots_3_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_boots_description",
        "en": {
          "description": "Santa's secret weapon for staying on his feet",
          "full_description": "Santa's secret weapon for staying on his feet",
          "name": "Festive Boots"
        },
        "full_description_key": "wls2_armor_xmas2024_boots_description",
        "name_key": "wls2_armor_xmas2024_boots_name",
        "zh": {
          "description": "圣诞老人保持站立的秘密武器",
          "full_description": "圣诞老人保持站立的秘密武器",
          "name": "节日靴子"
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
                "inventory_stack_id": "wls2_armor_xmas2024_boots_3_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_boots_3_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_boots_3_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_boots",
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
      "image_key": "26cc505a101d52f8982310ebe706b7545e07a888f3fd39e176132cd806e3738d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "节日靴子",
        "name_en": "Festive Boots",
        "description_zh": "圣诞老人保持站立的秘密武器",
        "description_en": "Santa's secret weapon for staying on his feet",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_boots_3_rare 节日靴子 festive boots 圣诞老人保持站立的秘密武器 santa's secret weapon for staying on his feet armor 护甲 boots boots armor armor_storage festive"
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
              "health_increment": 35,
              "max_durability": 1092
            },
            "display": {
              "armor": "45",
              "dexterity": "+2",
              "health_increment": "+35",
              "max_durability": "1092"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 50,
              "dexterity": 3,
              "health_increment": 40,
              "max_durability": 1201
            },
            "display": {
              "armor": "50",
              "dexterity": "+3",
              "health_increment": "+40",
              "max_durability": "1201"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 54,
              "dexterity": 4,
              "health_increment": 45,
              "max_durability": 1311
            },
            "display": {
              "armor": "54",
              "dexterity": "+4",
              "health_increment": "+45",
              "max_durability": "1311"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 59,
              "dexterity": 5,
              "health_increment": 50,
              "max_durability": 1419
            },
            "display": {
              "armor": "59",
              "dexterity": "+5",
              "health_increment": "+50",
              "max_durability": "1419"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 63,
              "dexterity": 6,
              "health_increment": 55,
              "max_durability": 1529
            },
            "display": {
              "armor": "63",
              "dexterity": "+6",
              "health_increment": "+55",
              "max_durability": "1529"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 64,
              "dexterity": 6,
              "health_increment": 55,
              "max_durability": 1529
            },
            "display": {
              "armor": "64",
              "dexterity": "+6",
              "health_increment": "+55",
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
      "bodypart": 40,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 40,
        "description": "wls2_armor_xmas2024_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_boots_description",
        "name": "wls2_armor_xmas2024_boots_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_boots",
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
      "item_id": "wls2_armor_xmas2024_boots_4_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_boots_description",
        "en": {
          "description": "Santa's secret weapon for staying on his feet",
          "full_description": "Santa's secret weapon for staying on his feet",
          "name": "Festive Boots"
        },
        "full_description_key": "wls2_armor_xmas2024_boots_description",
        "name_key": "wls2_armor_xmas2024_boots_name",
        "zh": {
          "description": "圣诞老人保持站立的秘密武器",
          "full_description": "圣诞老人保持站立的秘密武器",
          "name": "节日靴子"
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
                "inventory_stack_id": "wls2_armor_xmas2024_boots_4_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_boots_4_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_boots_4_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_boots",
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
          "1": 50,
          "2": 55,
          "3": 60,
          "4": 65,
          "5": 70
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
      "image_key": "26cc505a101d52f8982310ebe706b7545e07a888f3fd39e176132cd806e3738d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "节日靴子",
        "name_en": "Festive Boots",
        "description_zh": "圣诞老人保持站立的秘密武器",
        "description_en": "Santa's secret weapon for staying on his feet",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_boots_4_rare 节日靴子 festive boots 圣诞老人保持站立的秘密武器 santa's secret weapon for staying on his feet armor 护甲 boots boots armor armor_storage festive"
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
              "armor": 90,
              "dexterity": 2,
              "health_increment": 50,
              "max_durability": 4135
            },
            "display": {
              "armor": "90",
              "dexterity": "+2",
              "health_increment": "+50",
              "max_durability": "4135"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 99,
              "dexterity": 3,
              "health_increment": 55,
              "max_durability": 4549
            },
            "display": {
              "armor": "99",
              "dexterity": "+3",
              "health_increment": "+55",
              "max_durability": "4549"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 108,
              "dexterity": 4,
              "health_increment": 60,
              "max_durability": 4962
            },
            "display": {
              "armor": "108",
              "dexterity": "+4",
              "health_increment": "+60",
              "max_durability": "4962"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 117,
              "dexterity": 5,
              "health_increment": 65,
              "max_durability": 5376
            },
            "display": {
              "armor": "117",
              "dexterity": "+5",
              "health_increment": "+65",
              "max_durability": "5376"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 126,
              "dexterity": 6,
              "health_increment": 70,
              "max_durability": 5789
            },
            "display": {
              "armor": "126",
              "dexterity": "+6",
              "health_increment": "+70",
              "max_durability": "5789"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 127,
              "dexterity": 6,
              "health_increment": 70,
              "max_durability": 5789
            },
            "display": {
              "armor": "127",
              "dexterity": "+6",
              "health_increment": "+70",
              "max_durability": "5789"
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
      "bodypart": 40,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 40,
        "description": "wls2_armor_xmas2024_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_boots_description",
        "name": "wls2_armor_xmas2024_boots_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_boots",
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
      "item_id": "wls2_armor_xmas2024_boots_5_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_boots_description",
        "en": {
          "description": "Santa's secret weapon for staying on his feet",
          "full_description": "Santa's secret weapon for staying on his feet",
          "name": "Festive Boots"
        },
        "full_description_key": "wls2_armor_xmas2024_boots_description",
        "name_key": "wls2_armor_xmas2024_boots_name",
        "zh": {
          "description": "圣诞老人保持站立的秘密武器",
          "full_description": "圣诞老人保持站立的秘密武器",
          "name": "节日靴子"
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
                "inventory_stack_id": "wls2_armor_xmas2024_boots_5_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_boots_5_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_boots_5_rare",
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
            "stack_id": "wls2_armor_xmas2024_boots_5_rare",
            "transaction_id": "transaction_iap_wls_1_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_boots",
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
      "image_key": "26cc505a101d52f8982310ebe706b7545e07a888f3fd39e176132cd806e3738d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "节日靴子",
        "name_en": "Festive Boots",
        "description_zh": "圣诞老人保持站立的秘密武器",
        "description_en": "Santa's secret weapon for staying on his feet",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_boots_5_rare 节日靴子 festive boots 圣诞老人保持站立的秘密武器 santa's secret weapon for staying on his feet armor 护甲 boots boots armor armor_storage festive"
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
              "dexterity": 4,
              "firearm_resistance": 0.04,
              "max_durability": 12656
            },
            "display": {
              "armor": "152",
              "dexterity": "+4",
              "firearm_resistance": "+4%",
              "max_durability": "12656"
            }
          },
          {
            "level": 2,
            "values": {
              "armor": 167,
              "dexterity": 5,
              "firearm_resistance": 0.08,
              "max_durability": 13922
            },
            "display": {
              "armor": "167",
              "dexterity": "+5",
              "firearm_resistance": "+8%",
              "max_durability": "13922"
            }
          },
          {
            "level": 3,
            "values": {
              "armor": 182,
              "dexterity": 6,
              "firearm_resistance": 0.12,
              "max_durability": 15188
            },
            "display": {
              "armor": "182",
              "dexterity": "+6",
              "firearm_resistance": "+12%",
              "max_durability": "15188"
            }
          },
          {
            "level": 4,
            "values": {
              "armor": 198,
              "dexterity": 8,
              "firearm_resistance": 0.16,
              "max_durability": 16453
            },
            "display": {
              "armor": "198",
              "dexterity": "+8",
              "firearm_resistance": "+16%",
              "max_durability": "16453"
            }
          },
          {
            "level": 5,
            "values": {
              "armor": 213,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 17719
            },
            "display": {
              "armor": "213",
              "dexterity": "+10",
              "firearm_resistance": "+20%",
              "max_durability": "17719"
            }
          },
          {
            "level": 6,
            "values": {
              "armor": 214,
              "dexterity": 10,
              "firearm_resistance": 0.2,
              "max_durability": 17719
            },
            "display": {
              "armor": "214",
              "dexterity": "+10",
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
      "bodypart": 40,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 40,
        "description": "wls2_armor_xmas2024_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_boots_description",
        "name": "wls2_armor_xmas2024_boots_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_boots",
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
      "item_id": "wls2_armor_xmas2024_boots_6_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_boots_description",
        "en": {
          "description": "Santa's secret weapon for staying on his feet",
          "full_description": "Santa's secret weapon for staying on his feet",
          "name": "Festive Boots"
        },
        "full_description_key": "wls2_armor_xmas2024_boots_description",
        "name_key": "wls2_armor_xmas2024_boots_name",
        "zh": {
          "description": "圣诞老人保持站立的秘密武器",
          "full_description": "圣诞老人保持站立的秘密武器",
          "name": "节日靴子"
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
                "inventory_stack_id": "wls2_armor_xmas2024_boots_6_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_xmax2024_armor_boots_6_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_boots_6_rare",
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
            "stack_id": "wls2_armor_xmas2024_boots_6_rare",
            "transaction_id": "transaction_iap_wls_2_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_boots",
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
      "image_key": "26cc505a101d52f8982310ebe706b7545e07a888f3fd39e176132cd806e3738d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "节日靴子",
        "name_en": "Festive Boots",
        "description_zh": "圣诞老人保持站立的秘密武器",
        "description_en": "Santa's secret weapon for staying on his feet",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_boots_6_rare 节日靴子 festive boots 圣诞老人保持站立的秘密武器 santa's secret weapon for staying on his feet armor 护甲 boots boots armor armor_storage festive"
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
      "bodypart": 40,
      "category": "armor",
      "gathering_tool": null,
      "inventory_stack": {
        "bodypart": 40,
        "description": "wls2_armor_xmas2024_boots_description",
        "equip_behaviour": {
          "type": "durability"
        },
        "full_description": "wls2_armor_xmas2024_boots_description",
        "name": "wls2_armor_xmas2024_boots_name",
        "rarity": "rare",
        "sorting_group_id": "armor_boots",
        "sound_equip": {
          "sound_id": "wls2_sounds_item_equip_cloth"
        },
        "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_boots",
        "tags": [
          "boots",
          "armor",
          "armor_storage"
        ],
        "tier": 7,
        "type": "durability",
        "use_behaviour_button_text": "use_behaviour_button_text_equip"
      },
      "item_id": "wls2_armor_xmas2024_boots_7_rare",
      "localization": {
        "description_key": "wls2_armor_xmas2024_boots_description",
        "en": {
          "description": "Santa's secret weapon for staying on his feet",
          "full_description": "Santa's secret weapon for staying on his feet",
          "name": "Festive Boots"
        },
        "full_description_key": "wls2_armor_xmas2024_boots_description",
        "name_key": "wls2_armor_xmas2024_boots_name",
        "zh": {
          "description": "圣诞老人保持站立的秘密武器",
          "full_description": "圣诞老人保持站立的秘密武器",
          "name": "节日靴子"
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
                "inventory_stack_id": "wls2_armor_xmas2024_boots_7_rare"
              },
              "type": "recycle"
            },
            "recipe_id": "wls2_armor_xmas2024_boots_7_rare_recycle"
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
            "stack_id": "wls2_armor_xmas2024_boots_7_rare",
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
            "stack_id": "wls2_armor_xmas2024_boots_7_rare",
            "transaction_id": "transaction_iap_wls_3_a"
          }
        ]
      },
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_boots",
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
      "upgrade": null,
      "use_behaviour": null,
      "weapon": null,
      "weapon_id": null,
      "weapon_summary": null,
      "image_key": "26cc505a101d52f8982310ebe706b7545e07a888f3fd39e176132cd806e3738d",
      "_wiki": {
        "domain": "equipment",
        "name_zh": "节日靴子",
        "name_en": "Festive Boots",
        "description_zh": "圣诞老人保持站立的秘密武器",
        "description_en": "Santa's secret weapon for staying on his feet",
        "category_zh": "护甲",
        "subcategory": "boots",
        "rarity_zh": "稀有",
        "search_text": "wls2_armor_xmas2024_boots_7_rare 节日靴子 festive boots 圣诞老人保持站立的秘密武器 santa's secret weapon for staying on his feet armor 护甲 boots boots armor armor_storage"
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
    }
  ]
};
