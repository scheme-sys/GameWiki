/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-inventory-4"] = {
  "section": "inventory",
  "records": [
    {
      "id": "wls2_weapon_melee_knife_5_epic",
      "item_id": "wls2_weapon_melee_knife_5_epic",
      "name": "军用匕首",
      "name_en": "Army knife",
      "name_source": "official_zh",
      "description": "简洁与超高效是现代军队最重要的标志",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_melee_knife_5_epic_icon",
      "image_id": "wls2_weapon_melee_knife_5_epic",
      "equipment_id": "wls2_weapon_melee_knife_5_epic",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 160,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 649,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 649
            },
            {
              "level": 2,
              "value": 714
            },
            {
              "level": 3,
              "value": 779
            },
            {
              "level": 4,
              "value": 844
            },
            {
              "level": 5,
              "value": 909
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 10.0
            },
            {
              "level": 3,
              "value": 15.0
            },
            {
              "level": 4,
              "value": 20.0
            },
            {
              "level": 5,
              "value": 25.0
            }
          ]
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 100,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 100
            },
            {
              "level": 2,
              "value": 125.0
            },
            {
              "level": 3,
              "value": 150.0
            },
            {
              "level": 4,
              "value": 175.0
            },
            {
              "level": 5,
              "value": 200
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 30.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 32,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 32
            },
            {
              "level": 2,
              "value": 36
            },
            {
              "level": 3,
              "value": 39
            },
            {
              "level": 4,
              "value": 42
            },
            {
              "level": 5,
              "value": 45
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_knife_5_epic",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_5",
              "name": "结实皮革",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 2
            },
            {
              "id": "wls2_resourse_epic_rubber",
              "name": "橡胶",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_melee_knife_5_epic",
          "result_name": "军用匕首",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_melee_knife_5_epic",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_melee_knife_5_epic_name",
        "sorting_group": "weapon_melee_knife",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "c93ccc4462e9f0a650c899046230a58e0c1fd4e468c0a1b5356e5b5bdb1f3f10"
    },
    {
      "id": "wls2_weapon_melee_knife_5_common",
      "item_id": "wls2_weapon_melee_knife_5_common",
      "name": "刺刀",
      "name_en": "Bayonet knife",
      "name_source": "official_zh",
      "description": "即使跟步枪分开了，依然是一个很棒的武器",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls_sword_bayonet",
      "image_id": "wls2_weapon_melee_knife_5_common",
      "equipment_id": "wls2_weapon_melee_knife_5_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 303,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 303
            },
            {
              "level": 2,
              "value": 333
            },
            {
              "level": 3,
              "value": 363
            },
            {
              "level": 4,
              "value": 394
            },
            {
              "level": 5,
              "value": 424
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 30.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 15,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 15
            },
            {
              "level": 2,
              "value": 17
            },
            {
              "level": 3,
              "value": 18
            },
            {
              "level": 4,
              "value": 20
            },
            {
              "level": 5,
              "value": 21
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_knife_5_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_5",
              "name": "结实皮革",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 1
            }
          ],
          "result_id": "wls2_weapon_melee_knife_5_common",
          "result_name": "刺刀",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_melee_5",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_knife_5_common",
          "result_name": "刺刀",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_melee_knife_5_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_5_common_name",
        "sorting_group": "weapon_melee_knife",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "9bde81ccf9c28842ce25dc8d8303239e9dd88a9616c6d842929809ef4487a0f1"
    },
    {
      "id": "wls2_weapon_melee_knife_5_uncommon",
      "item_id": "wls2_weapon_melee_knife_5_uncommon",
      "name": "警长匕首",
      "name_en": "Sheriff's knife",
      "name_source": "official_zh",
      "description": "不要乱动这把又长又锋利的刀",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_knife_5_uncommon_icon",
      "image_id": "wls2_weapon_melee_knife_5_uncommon",
      "equipment_id": "wls2_weapon_melee_knife_5_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 160,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 418,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 418
            },
            {
              "level": 2,
              "value": 460
            },
            {
              "level": 3,
              "value": 502
            },
            {
              "level": 4,
              "value": 543
            },
            {
              "level": 5,
              "value": 585
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 30.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 21,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 21
            },
            {
              "level": 2,
              "value": 23
            },
            {
              "level": 3,
              "value": 25
            },
            {
              "level": 4,
              "value": 27
            },
            {
              "level": 5,
              "value": 29
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_knife_5_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_5",
              "name": "结实皮革",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_melee_knife_5_uncommon",
          "result_name": "警长匕首",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_melee_6",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_knife_5_uncommon",
          "result_name": "警长匕首",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_melee_knife_5_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_5_uncommon_name",
        "sorting_group": "weapon_melee_knife",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "cfa91458167610e3681beae112870c9949832b9172e74be987a24358ff2a3e4b"
    },
    {
      "id": "wls2_weapon_melee_sabre_5_rare",
      "item_id": "wls2_weapon_melee_sabre_5_rare",
      "name": "军官军刀",
      "name_en": "Officer's saber",
      "name_source": "official_zh",
      "description": "催生出了现代军刀击剑训练方法",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "长矛与军刀",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_sabre_5_rare_icon",
      "image_id": "wls2_weapon_melee_sabre_5_rare",
      "equipment_id": "wls2_weapon_melee_sabre_5_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 200,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 812,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 812
            },
            {
              "level": 2,
              "value": 893
            },
            {
              "level": 3,
              "value": 975
            },
            {
              "level": 4,
              "value": 1055
            },
            {
              "level": 5,
              "value": 1136
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 20.0
            },
            {
              "level": 4,
              "value": 25.0
            },
            {
              "level": 5,
              "value": 30.0
            }
          ]
        },
        {
          "id": "dot_time",
          "label": "持续伤害时长",
          "value": 3,
          "unit": "秒"
        },
        {
          "id": "dot_amount",
          "label": "每次持续伤害",
          "value": 100,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 100
            },
            {
              "level": 2,
              "value": 150
            },
            {
              "level": 3,
              "value": 200
            },
            {
              "level": 4,
              "value": 250
            },
            {
              "level": 5,
              "value": 300
            }
          ]
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 30.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 41,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 41
            },
            {
              "level": 2,
              "value": 45
            },
            {
              "level": 3,
              "value": 49
            },
            {
              "level": 4,
              "value": 53
            },
            {
              "level": 5,
              "value": 57
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_sabre_5_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 6
            },
            {
              "id": "wls2_resourse_secondary_leather_5",
              "name": "结实皮革",
              "amount": 6
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_melee_sabre_5_rare",
          "result_name": "军官军刀",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_melee_sabre_5_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_sabre_5_rare_name",
        "sorting_group": "weapon_melee_spear_saber",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a7de822386947698e8df1a90adfbfd15fc6187066b4bf9c8a3ecbe9184825b4e"
    },
    {
      "id": "wls2_weapon_melee_sabre_5_epic",
      "item_id": "wls2_weapon_melee_sabre_5_epic",
      "name": "军用军刀",
      "name_en": "Army saber",
      "name_source": "official_zh",
      "description": "手握这种军刀的人甚至都无需战斗！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "长矛与军刀",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_melee_sabre_5_epic_icon",
      "image_id": "wls2_weapon_melee_sabre_5_epic",
      "equipment_id": "wls2_weapon_melee_sabre_5_epic",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 200,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1115,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1115
            },
            {
              "level": 2,
              "value": 1227
            },
            {
              "level": 3,
              "value": 1339
            },
            {
              "level": 4,
              "value": 1450
            },
            {
              "level": 5,
              "value": 1561
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "dot_time",
          "label": "持续伤害时长",
          "value": 3,
          "unit": "秒"
        },
        {
          "id": "dot_amount",
          "label": "每次持续伤害",
          "value": 100,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 100
            },
            {
              "level": 2,
              "value": 150
            },
            {
              "level": 3,
              "value": 200
            },
            {
              "level": 4,
              "value": 250
            },
            {
              "level": 5,
              "value": 300
            }
          ]
        },
        {
          "id": "slow_time",
          "label": "减速时长",
          "value": 0.5,
          "unit": "秒",
          "levels": [
            {
              "level": 1,
              "value": 0.5
            },
            {
              "level": 2,
              "value": 0.6
            },
            {
              "level": 3,
              "value": 0.7
            },
            {
              "level": 4,
              "value": 0.8
            },
            {
              "level": 5,
              "value": 1
            }
          ]
        },
        {
          "id": "slow_modifier",
          "label": "减速幅度",
          "value": 40.0,
          "unit": "%"
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 30.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 56,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 56
            },
            {
              "level": 2,
              "value": 61
            },
            {
              "level": 3,
              "value": 67
            },
            {
              "level": 4,
              "value": 73
            },
            {
              "level": 5,
              "value": 78
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_sabre_5_epic",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 6
            },
            {
              "id": "wls2_resourse_secondary_leather_5",
              "name": "结实皮革",
              "amount": 6
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_epic_rubber",
              "name": "橡胶",
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_melee_sabre_5_epic",
          "result_name": "军用军刀",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_melee_sabre_5_epic",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_melee_sabre_5_epic_name",
        "sorting_group": "weapon_melee_spear_saber",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5bb36d7742e4081b4bd59a60651a0d146cbe2f2e1cfa54af560c42fadbf5e3fb"
    },
    {
      "id": "wls2_weapon_melee_sabre_5_common",
      "item_id": "wls2_weapon_melee_sabre_5_common",
      "name": "同盟军刀",
      "name_en": "Confederate saber",
      "name_source": "official_zh",
      "description": "能够斩断苍蝇身上的毛",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "长矛与军刀",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls_confiderate_saber",
      "image_id": "wls2_weapon_melee_sabre_5_common",
      "equipment_id": "wls2_weapon_melee_sabre_5_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 185,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 416,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 416
            },
            {
              "level": 2,
              "value": 458
            },
            {
              "level": 3,
              "value": 499
            },
            {
              "level": 4,
              "value": 541
            },
            {
              "level": 5,
              "value": 583
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 30.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 21,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 21
            },
            {
              "level": 2,
              "value": 23
            },
            {
              "level": 3,
              "value": 25
            },
            {
              "level": 4,
              "value": 27
            },
            {
              "level": 5,
              "value": 29
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_sabre_5_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_5",
              "name": "结实皮革",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_melee_sabre_5_common",
          "result_name": "同盟军刀",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_melee_10",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_sabre_5_common",
          "result_name": "同盟军刀",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_melee_sabre_5_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_sabre_5_common_name",
        "sorting_group": "weapon_melee_spear_saber",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "65cae350a1044c67a7b6aca8ba8041053c9c62e6276136edfe3152e70da9ea1f"
    },
    {
      "id": "wls2_weapon_easter_22_shotgun_3_t5",
      "item_id": "wls2_weapon_easter_22_shotgun_3_t5",
      "name": "吉尔的霰弹枪",
      "name_en": "Jill's Shotgun",
      "name_source": "official_zh",
      "description": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_3",
      "image_id": "wls2_weapon_easter_22_shotgun_3_t5",
      "equipment_id": "wls2_weapon_easter_22_shotgun_3_t5",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 240,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 970,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 970
            },
            {
              "level": 2,
              "value": 1057
            },
            {
              "level": 3,
              "value": 1152
            },
            {
              "level": 4,
              "value": 1256
            },
            {
              "level": 5,
              "value": 1369
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 8.0
            },
            {
              "level": 3,
              "value": 10.0
            },
            {
              "level": 4,
              "value": 13.0
            },
            {
              "level": 5,
              "value": 15.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 24,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 24
            },
            {
              "level": 2,
              "value": 26
            },
            {
              "level": 3,
              "value": 29
            },
            {
              "level": 4,
              "value": 31
            },
            {
              "level": 5,
              "value": 34
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_shotgun_3_t5_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 6
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_shotgun_3_t5",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "b603fc5880f23feb9453ab8321797febd8f12e94181fa85643ed60dc0dad717d"
    },
    {
      "id": "wls2_weapon_ws_day2024_shotgun_5",
      "item_id": "wls2_weapon_ws_day2024_shotgun_5",
      "name": "周年庆散弹枪",
      "name_en": "Anniversary shotgun",
      "name_source": "official_zh",
      "description": "奖励武器。用来射击和炫耀都很合适！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_shotgun",
      "image_id": "wls2_weapon_ws_day2024_shotgun_5",
      "equipment_id": "wls2_weapon_ws_day2024_shotgun_5",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 27,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 27
            },
            {
              "level": 2,
              "value": 30
            },
            {
              "level": 3,
              "value": 32
            },
            {
              "level": 4,
              "value": 35
            },
            {
              "level": 5,
              "value": 38
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 330,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1078,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1078
            },
            {
              "level": 2,
              "value": 1186
            },
            {
              "level": 3,
              "value": 1294
            },
            {
              "level": 4,
              "value": 1402
            },
            {
              "level": 5,
              "value": 1510
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 3.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 3.0
            },
            {
              "level": 2,
              "value": 3.0
            },
            {
              "level": 3,
              "value": 3.0
            },
            {
              "level": 4,
              "value": 4.0
            },
            {
              "level": 5,
              "value": 5.0
            },
            {
              "level": 6,
              "value": 7.0
            }
          ]
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 3.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 3.0
            },
            {
              "level": 2,
              "value": 3.0
            },
            {
              "level": 3,
              "value": 3.0
            },
            {
              "level": 4,
              "value": 4.0
            },
            {
              "level": 5,
              "value": 5.0
            },
            {
              "level": 6,
              "value": 7.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_ws_day2024_shotgun_5_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_5",
              "name": "合金紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
              "amount": 8
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_ws_day2024_shotgun_5",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "6bdc4c31a15835b2cc5bb429be5dc30f4a657f1c3c5d2641401f1392035faeaf"
    },
    {
      "id": "wls2_weapon_easter_22_shotgun_1_t5",
      "item_id": "wls2_weapon_easter_22_shotgun_1_t5",
      "name": "彩炮 II",
      "name_en": "Confetti II",
      "name_source": "official_zh",
      "description": "虽然叫彩炮，但它射的可不是彩色纸屑。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_1",
      "image_id": "wls2_weapon_easter_22_shotgun_1_t5",
      "equipment_id": "wls2_weapon_easter_22_shotgun_1_t5",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 240,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 638,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 638
            },
            {
              "level": 2,
              "value": 695
            },
            {
              "level": 3,
              "value": 758
            },
            {
              "level": 4,
              "value": 826
            },
            {
              "level": 5,
              "value": 900
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 16,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 16
            },
            {
              "level": 2,
              "value": 17
            },
            {
              "level": 3,
              "value": 19
            },
            {
              "level": 4,
              "value": 21
            },
            {
              "level": 5,
              "value": 23
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_shotgun_1_t5_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 6
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_shotgun_1_t5",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_1_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "d1c2b456a47cdd2eb077a97ca0c3442c116588041d48920508ec0f8f5b65f6a6"
    },
    {
      "id": "wls2_weapon_range_shotgun_5_rare",
      "item_id": "wls2_weapon_range_shotgun_5_rare",
      "name": "战壕枪",
      "name_en": "Trench gun",
      "name_source": "official_zh",
      "description": "由著名枪匠约翰·勃朗宁设计的霰弹枪",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_shotgun_5_rare_icon",
      "image_id": "wls2_weapon_range_shotgun_5_rare",
      "equipment_id": "wls2_weapon_range_shotgun_5_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 330,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1150,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1150
            },
            {
              "level": 2,
              "value": 1250
            },
            {
              "level": 3,
              "value": 1350
            },
            {
              "level": 4,
              "value": 1450
            },
            {
              "level": 5,
              "value": 1550
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 20.0
            },
            {
              "level": 4,
              "value": 25.0
            },
            {
              "level": 5,
              "value": 30.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 27,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 27
            },
            {
              "level": 2,
              "value": 30
            },
            {
              "level": 3,
              "value": 32
            },
            {
              "level": 4,
              "value": 35
            },
            {
              "level": 5,
              "value": 38
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_shotgun_5_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
              "amount": 8
            }
          ],
          "result_id": "wls2_weapon_range_shotgun_5_rare",
          "result_name": "战壕枪",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_shotgun_5_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_5_rare_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ffd852a11a83d35540fe6a802f73043bb0cb2cdc810d11989f0b045ef04802c5"
    },
    {
      "id": "wls2_weapon_xmas2024_shotgun_5",
      "item_id": "wls2_weapon_xmas2024_shotgun_5",
      "name": "暴风雪",
      "name_en": "Blizzard",
      "name_source": "official_zh",
      "description": "没有人能阻止自然的力量",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_xmas_24_shotgun",
      "image_id": "wls2_weapon_xmas2024_shotgun_5",
      "equipment_id": "wls2_weapon_xmas2024_shotgun_5",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 35,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 35
            },
            {
              "level": 2,
              "value": 38
            },
            {
              "level": 3,
              "value": 41
            },
            {
              "level": 4,
              "value": 45
            },
            {
              "level": 5,
              "value": 48
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 330,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1382,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1382
            },
            {
              "level": 2,
              "value": 1521
            },
            {
              "level": 3,
              "value": 1659
            },
            {
              "level": 4,
              "value": 1797
            },
            {
              "level": 5,
              "value": 1935
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 20.0
            },
            {
              "level": 4,
              "value": 25.0
            },
            {
              "level": 5,
              "value": 30.0
            }
          ]
        },
        {
          "id": "slow_time",
          "label": "减速时长",
          "value": 0.5,
          "unit": "秒",
          "levels": [
            {
              "level": 1,
              "value": 0.5
            },
            {
              "level": 2,
              "value": 0.75
            },
            {
              "level": 3,
              "value": 1
            },
            {
              "level": 4,
              "value": 1.25
            },
            {
              "level": 5,
              "value": 1.5
            }
          ]
        },
        {
          "id": "slow_modifier",
          "label": "减速幅度",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 20.0
            },
            {
              "level": 4,
              "value": 25.0
            },
            {
              "level": 5,
              "value": 30.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_xmas2024_shotgun_5_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_5",
              "name": "合金紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
              "amount": 4
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_xmas2024_shotgun_5",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_xmas2024_shotgun_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a9b84b7752f67ea6e3a9a3123f0817d61b81d6a079e2cefec840bddc456043fb"
    },
    {
      "id": "wls2_weapon_range_shotgun_5_epic",
      "item_id": "wls2_weapon_range_shotgun_5_epic",
      "name": "温彻斯特 M1897",
      "name_en": "Winchester Model 1897",
      "name_source": "official_zh",
      "description": "可能没有任何枪械能与这把霰弹枪的高效相提并论",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_range_shotgun_5_epic_icon",
      "image_id": "wls2_weapon_range_shotgun_5_epic",
      "equipment_id": "wls2_weapon_range_shotgun_5_epic",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 326,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1430,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1430
            },
            {
              "level": 2,
              "value": 1570
            },
            {
              "level": 3,
              "value": 1710
            },
            {
              "level": 4,
              "value": 1850
            },
            {
              "level": 5,
              "value": 1985
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 10.0
            },
            {
              "level": 3,
              "value": 15.0
            },
            {
              "level": 4,
              "value": 20.0
            },
            {
              "level": 5,
              "value": 25.0
            }
          ]
        },
        {
          "id": "dot_time",
          "label": "持续伤害时长",
          "value": 4,
          "unit": "秒"
        },
        {
          "id": "dot_amount",
          "label": "每次持续伤害",
          "value": 100,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 100
            },
            {
              "level": 2,
              "value": 150
            },
            {
              "level": 3,
              "value": 200
            },
            {
              "level": 4,
              "value": 250
            },
            {
              "level": 5,
              "value": 300
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 35,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 35
            },
            {
              "level": 2,
              "value": 38
            },
            {
              "level": 3,
              "value": 41
            },
            {
              "level": 4,
              "value": 45
            },
            {
              "level": 5,
              "value": 48
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_shotgun_5_epic",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 5
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
              "amount": 5
            },
            {
              "id": "wls2_resourse_epic_industrial_gunparts",
              "name": "工业零件",
              "amount": 5
            }
          ],
          "result_id": "wls2_weapon_range_shotgun_5_epic",
          "result_name": "温彻斯特 M1897",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_shotgun_5_epic",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_range_shotgun_5_epic_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "d434921f6cc377838e7d2ff2100c3213e25661c09018de7f0899d4403b9156d2"
    },
    {
      "id": "wls2_weapon_lunar_shotgun_5_rare",
      "item_id": "wls2_weapon_lunar_shotgun_5_rare",
      "name": "火焰 霰弹枪",
      "name_en": "Flame shotgun",
      "name_source": "official_zh",
      "description": "一发子弹像一群火热的马将打击你的敌人",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_lunar_icon",
      "image_id": "wls2_weapon_lunar_shotgun_5_rare",
      "equipment_id": "wls2_weapon_lunar_shotgun_5_rare",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 27,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 27
            },
            {
              "level": 2,
              "value": 30
            },
            {
              "level": 3,
              "value": 32
            },
            {
              "level": 4,
              "value": 35
            },
            {
              "level": 5,
              "value": 38
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 330,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1150,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1150
            },
            {
              "level": 2,
              "value": 1250
            },
            {
              "level": 3,
              "value": 1350
            },
            {
              "level": 4,
              "value": 1450
            },
            {
              "level": 5,
              "value": 1550
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 20.0
            },
            {
              "level": 4,
              "value": 25.0
            },
            {
              "level": 5,
              "value": 30.0
            }
          ]
        },
        {
          "id": "dot_time",
          "label": "持续伤害时长",
          "value": 4,
          "unit": "秒"
        },
        {
          "id": "dot_amount",
          "label": "每次持续伤害",
          "value": 115,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 115
            },
            {
              "level": 2,
              "value": 125
            },
            {
              "level": 3,
              "value": 135
            },
            {
              "level": 4,
              "value": 145
            },
            {
              "level": 5,
              "value": 155
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_lunar_shotgun_5_rare_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 6
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_lunar_shotgun_5_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "bf5e960bdef4f9f82aa0c8fc9494b6b25d6bddc4b3cfc1186206b9538776e403"
    },
    {
      "id": "wls2_weapon_easter_22_shotgun_2_t5",
      "item_id": "wls2_weapon_easter_22_shotgun_2_t5",
      "name": "爆笑",
      "name_en": "Killing Joke",
      "name_source": "official_zh",
      "description": "可能也没那么好笑，但是很好射！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_2",
      "image_id": "wls2_weapon_easter_22_shotgun_2_t5",
      "equipment_id": "wls2_weapon_easter_22_shotgun_2_t5",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 240,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 752,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 752
            },
            {
              "level": 2,
              "value": 820
            },
            {
              "level": 3,
              "value": 893
            },
            {
              "level": 4,
              "value": 974
            },
            {
              "level": 5,
              "value": 1062
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 19,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 19
            },
            {
              "level": 2,
              "value": 20
            },
            {
              "level": 3,
              "value": 22
            },
            {
              "level": 4,
              "value": 24
            },
            {
              "level": 5,
              "value": 27
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_shotgun_2_t5_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 6
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_shotgun_2_t5",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ff8ebdcba688f7fb3994b9092f379473e9608ad1274854dabfeed893e32aad40"
    },
    {
      "id": "wls2_weapon_ws_day2023_shotgun_uncommon_5",
      "item_id": "wls2_weapon_ws_day2023_shotgun_uncommon_5",
      "name": "节日霰弹枪 1889",
      "name_en": "Festive Shotgun 1889",
      "name_source": "official_zh",
      "description": "这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_confetti",
      "image_id": "wls2_weapon_ws_day2023_shotgun_uncommon_5",
      "equipment_id": "wls2_weapon_ws_day2023_shotgun_uncommon_5",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 175,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 14,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_ws_day2023_shotgun_uncommon_5_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_nails_5",
              "name": "合金紧固件",
              "amount": 1
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 2
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_ws_day2023_shotgun_uncommon_5",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2023_confetti_name_3",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "19ec3b11c91c9510b1a9197e8884c5ce5b8a9e2754ed229399c39ef895a55950"
    },
    {
      "id": "wls2_weapon_range_shotgun_5_common",
      "item_id": "wls2_weapon_range_shotgun_5_common",
      "name": "马车夫之枪",
      "name_en": "Coach gun",
      "name_source": "official_zh",
      "description": "有了这把枪，你的射击精度会大幅提高，尤其是在近距离的时候",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls_henry_.44",
      "image_id": "wls2_weapon_range_shotgun_5_common",
      "equipment_id": "wls2_weapon_range_shotgun_5_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 330,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 600,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 600
            },
            {
              "level": 2,
              "value": 660
            },
            {
              "level": 3,
              "value": 720
            },
            {
              "level": 4,
              "value": 770
            },
            {
              "level": 5,
              "value": 830
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 14,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 14
            },
            {
              "level": 2,
              "value": 15
            },
            {
              "level": 3,
              "value": 17
            },
            {
              "level": 4,
              "value": 18
            },
            {
              "level": 5,
              "value": 19
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_shotgun_5_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_range_shotgun_5_common",
          "result_name": "马车夫之枪",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_static_event_trader_offer_shotgun_5_common",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_shotgun_5_common",
          "result_name": "马车夫之枪",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_weapon_14",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_shotgun_5_common",
          "result_name": "马车夫之枪",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_shotgun_5_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_5_common_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "c6d6dc0eb93fa94cc56e2507388471cc20ec8576fd72ccc7a196f0d82bd6795c"
    },
    {
      "id": "wls2_weapon_range_bow_6_common",
      "item_id": "wls2_weapon_range_bow_6_common",
      "name": "力量 弓",
      "name_en": "Power bow",
      "name_source": "official_zh",
      "description": "结合传统工艺与工程成就",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弓",
      "tier": 6,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_weapon_range_bow_6_common_icon",
      "image_id": "wls2_weapon_range_bow_6_common",
      "equipment_id": "wls2_weapon_range_bow_6_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 165,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 616,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 616
            },
            {
              "level": 2,
              "value": 678
            },
            {
              "level": 3,
              "value": 739
            },
            {
              "level": 4,
              "value": 801
            },
            {
              "level": 5,
              "value": 862
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 31,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 31
            },
            {
              "level": 2,
              "value": 33
            },
            {
              "level": 3,
              "value": 35
            },
            {
              "level": 4,
              "value": 37
            },
            {
              "level": 5,
              "value": 39
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_bow_6_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_rope_6",
              "name": "皮绳",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_plank_6",
              "name": "桤木板",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_leather_6",
              "name": "坚固的皮革",
              "amount": 1
            }
          ],
          "result_id": "wls2_weapon_range_bow_6_common",
          "result_name": "力量 弓",
          "amount": 1,
          "min_level": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_bow_6_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_bow_6_common_name",
        "sorting_group": "bow",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "6ad44f0f9f56ea3f67467c1560a0d4a0767e7be21a968a86d886961d1b18b317"
    },
    {
      "id": "wls2_weapon_easter_22_bow_t6",
      "item_id": "wls2_weapon_easter_22_bow_t6",
      "name": "胡咧咧弓",
      "name_en": "Balderdash",
      "name_source": "official_zh",
      "description": "不得不说，造这把弓的人很有想象力。更重要的是，它真的能当弓用！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弓",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_bow",
      "image_id": "wls2_weapon_easter_22_bow_t6",
      "equipment_id": "wls2_weapon_easter_22_bow_t6",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 165,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 47,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 47
            },
            {
              "level": 2,
              "value": 51
            },
            {
              "level": 3,
              "value": 56
            },
            {
              "level": 4,
              "value": 61
            },
            {
              "level": 5,
              "value": 66
            }
          ]
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 784,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 784
            },
            {
              "level": 2,
              "value": 855
            },
            {
              "level": 3,
              "value": 931
            },
            {
              "level": 4,
              "value": 1015
            },
            {
              "level": 5,
              "value": 1107
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "slow_time",
          "label": "减速时长",
          "value": 0.5,
          "unit": "秒",
          "levels": [
            {
              "level": 1,
              "value": 0.5
            },
            {
              "level": 2,
              "value": 0.75
            },
            {
              "level": 3,
              "value": 1
            },
            {
              "level": 4,
              "value": 1.25
            },
            {
              "level": 5,
              "value": 1.5
            }
          ]
        },
        {
          "id": "slow_modifier",
          "label": "减速幅度",
          "value": 25.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_bow_t6_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_rope_5",
              "name": "大麻绳",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_5",
              "name": "结实皮革",
              "amount": 2
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_bow_t6",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_bow_name",
        "sorting_group": "bow",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "2425b779a25241ed1a0fbfd05ad4b6714587e6454870ea15a5599bab34883655"
    },
    {
      "id": "wls2_weapon_easter_22_crossbow_t6",
      "item_id": "wls2_weapon_easter_22_crossbow_t6",
      "name": "胡萝卜弩",
      "name_en": "Carrotbow",
      "name_source": "official_zh",
      "description": "它会让你明白，表面人畜无害的胡萝卜，其实暗藏杀机。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弩",
      "tier": 6,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_crossbow",
      "image_id": "wls2_weapon_easter_22_crossbow_t6",
      "equipment_id": "wls2_weapon_easter_22_crossbow_t6",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 48,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 48
            },
            {
              "level": 2,
              "value": 52
            },
            {
              "level": 3,
              "value": 57
            },
            {
              "level": 4,
              "value": 62
            },
            {
              "level": 5,
              "value": 68
            }
          ]
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 800,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 800
            },
            {
              "level": 2,
              "value": 872
            },
            {
              "level": 3,
              "value": 950
            },
            {
              "level": 4,
              "value": 1036
            },
            {
              "level": 5,
              "value": 1129
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 7.0
            },
            {
              "level": 3,
              "value": 9.0
            },
            {
              "level": 4,
              "value": 11.0
            },
            {
              "level": 5,
              "value": 13.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_crossbow_t6_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_rope_5",
              "name": "大麻绳",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 4
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_crossbow_t6",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_crossbow_name",
        "sorting_group": "crossbow",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a1542e4b88b3b40e4786fe8c7f9cd22aab6f9dd7d1f6a59fe93990301703047a"
    },
    {
      "id": "wls2_weapon_range_revolver_6_uncommon",
      "item_id": "wls2_weapon_range_revolver_6_uncommon",
      "name": "博查德自动手枪",
      "name_en": "Borchardt Auto Pistol",
      "name_source": "official_zh",
      "description": "创新设计，历史火力",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 6,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_revolver_6_uncommon",
      "image_id": "wls2_weapon_range_revolver_6_uncommon",
      "equipment_id": "wls2_weapon_range_revolver_6_uncommon",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 66,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 66
            },
            {
              "level": 2,
              "value": 72
            },
            {
              "level": 3,
              "value": 79
            },
            {
              "level": 4,
              "value": 85
            },
            {
              "level": 5,
              "value": 92
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 300,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1094,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1094
            },
            {
              "level": 2,
              "value": 1204
            },
            {
              "level": 3,
              "value": 1313
            },
            {
              "level": 4,
              "value": 1423
            },
            {
              "level": 5,
              "value": 1532
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_revolver_6_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_nails_6",
              "name": "钨紧固件",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_6",
              "name": "钨枪部件",
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_range_revolver_6_uncommon",
          "result_name": "博查德自动手枪",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_revolver_6_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_6_uncommon_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "0ae8062ef9830c0732a5411f6161fba5a7614c082dfa83f8a87d23aea549dfb2"
    },
    {
      "id": "wls2_weapon_ws_day2024_colt_6",
      "item_id": "wls2_weapon_ws_day2024_colt_6",
      "name": "周年庆左轮手枪",
      "name_en": "Anniversary revolver",
      "name_source": "official_zh",
      "description": "奖励武器。用来射击和炫耀都很合适！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 6,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_colt",
      "image_id": "wls2_weapon_ws_day2024_colt_6",
      "equipment_id": "wls2_weapon_ws_day2024_colt_6",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 93,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 93
            },
            {
              "level": 2,
              "value": 102
            },
            {
              "level": 3,
              "value": 111
            },
            {
              "level": 4,
              "value": 121
            },
            {
              "level": 5,
              "value": 130
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 300,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1546,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1546
            },
            {
              "level": 2,
              "value": 1700
            },
            {
              "level": 3,
              "value": 1855
            },
            {
              "level": 4,
              "value": 2009
            },
            {
              "level": 5,
              "value": 2164
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 3.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 3.0
            },
            {
              "level": 2,
              "value": 3.0
            },
            {
              "level": 3,
              "value": 3.0
            },
            {
              "level": 4,
              "value": 4.0
            },
            {
              "level": 5,
              "value": 5.0
            },
            {
              "level": 6,
              "value": 7.0
            }
          ]
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 3.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 3.0
            },
            {
              "level": 2,
              "value": 3.0
            },
            {
              "level": 3,
              "value": 3.0
            },
            {
              "level": 4,
              "value": 4.0
            },
            {
              "level": 5,
              "value": 5.0
            },
            {
              "level": 6,
              "value": 7.0
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_ws_day2024_colt_6_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_6",
              "name": "钨紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_6",
              "name": "钨枪部件",
              "amount": 4
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_ws_day2024_colt_6",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2021_colt_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "7ce8cf8bb085e07e25cdaea78af5b06425dee0b735aebbe5754c3e3fe4f6c910"
    },
    {
      "id": "wls2_weapon_range_revolver_6_rare",
      "item_id": "wls2_weapon_range_revolver_6_rare",
      "name": "巴拉贝勒姆",
      "name_en": "Parabellum",
      "name_source": "official_zh",
      "description": "\"如果你想要和平，就要准备战争\"，是它制造者的座右铭",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_revolver_6_rare",
      "image_id": "wls2_weapon_range_revolver_6_rare",
      "equipment_id": "wls2_weapon_range_revolver_6_rare",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 93,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 93
            },
            {
              "level": 2,
              "value": 102
            },
            {
              "level": 3,
              "value": 111
            },
            {
              "level": 4,
              "value": 121
            },
            {
              "level": 5,
              "value": 130
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 300,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1546,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1546
            },
            {
              "level": 2,
              "value": 1700
            },
            {
              "level": 3,
              "value": 1855
            },
            {
              "level": 4,
              "value": 2009
            },
            {
              "level": 5,
              "value": 2164
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 20.0
            },
            {
              "level": 4,
              "value": 25.0
            },
            {
              "level": 5,
              "value": 30.0
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_revolver_6_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_6",
              "name": "钨紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_6",
              "name": "钨枪部件",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_range_revolver_6_rare",
          "result_name": "巴拉贝勒姆",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_revolver_6_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_6_rare_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "d5b147d592c6a47c0d1aae1b4e8bf426c387c05f17cb770e7577101193eedb3f"
    },
    {
      "id": "wls2_weapon_range_revolver_6_common",
      "item_id": "wls2_weapon_range_revolver_6_common",
      "name": "布朗宁No.1",
      "name_en": "Browning No.1",
      "name_source": "official_zh",
      "description": "“马挑工”这个绰号来自于手柄上的工厂标志",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 6,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_revolver_6_common",
      "image_id": "wls2_weapon_range_revolver_6_common",
      "equipment_id": "wls2_weapon_range_revolver_6_common",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 48,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 48
            },
            {
              "level": 2,
              "value": 52
            },
            {
              "level": 3,
              "value": 57
            },
            {
              "level": 4,
              "value": 62
            },
            {
              "level": 5,
              "value": 67
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 300,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 794,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 794
            },
            {
              "level": 2,
              "value": 873
            },
            {
              "level": 3,
              "value": 952
            },
            {
              "level": 4,
              "value": 1032
            },
            {
              "level": 5,
              "value": 1111
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_revolver_6_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_6",
              "name": "钨紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_6",
              "name": "钨枪部件",
              "amount": 1
            }
          ],
          "result_id": "wls2_weapon_range_revolver_6_common",
          "result_name": "布朗宁No.1",
          "amount": 1,
          "min_level": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_revolver_6_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_6_common_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "b61b5e4f15a5b31481307abce34c6a420e3846fc58ff901ead93f4e79b23e1d1"
    },
    {
      "id": "wls2_weapon_range_halloween_23_pistol_6",
      "item_id": "wls2_weapon_range_halloween_23_pistol_6",
      "name": "恶灵的恐怖",
      "name_en": "Terror of Spirits",
      "name_source": "official_zh",
      "description": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 6,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_halloween_range_revolver",
      "image_id": "wls2_weapon_range_halloween_23_pistol_6",
      "equipment_id": "wls2_weapon_range_halloween_23_pistol_6",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 300,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1546,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1546
            },
            {
              "level": 2,
              "value": 1700
            },
            {
              "level": 3,
              "value": 1855
            },
            {
              "level": 4,
              "value": 2009
            },
            {
              "level": 5,
              "value": 2164
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 20.0
            },
            {
              "level": 4,
              "value": 25.0
            },
            {
              "level": 5,
              "value": 30.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 93,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 93
            },
            {
              "level": 2,
              "value": 102
            },
            {
              "level": 3,
              "value": 111
            },
            {
              "level": 4,
              "value": 121
            },
            {
              "level": 5,
              "value": 130
            }
          ]
        },
        {
          "id": "ghost_damage_modifier",
          "label": "对幽灵的伤害增加",
          "value": 50.0,
          "unit": "%"
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_range_halloween_23_pistol_6_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 7
            },
            {
              "id": "wls2_resourse_fourfold_nails_5",
              "name": "合金紧固件",
              "amount": 7
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_6",
              "name": "钨枪部件",
              "amount": 3
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_halloween_23_pistol_6",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "dd1ce2c981e1f8db3aea5221fc903d64f2725ee6eb1e76b5fac9e36bbb30e04c"
    },
    {
      "id": "wls2_weapon_range_revolver_6_epic",
      "item_id": "wls2_weapon_range_revolver_6_epic",
      "name": "毛瑟扫帚手枪",
      "name_en": "Mauser Broomhandle",
      "name_source": "official_zh",
      "description": "这把毛瑟枪得名于其独特的细长握把",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 6,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_revolver_6_epic",
      "image_id": "wls2_weapon_range_revolver_6_epic",
      "equipment_id": "wls2_weapon_range_revolver_6_epic",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 119,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 119
            },
            {
              "level": 2,
              "value": 131
            },
            {
              "level": 3,
              "value": 143
            },
            {
              "level": 4,
              "value": 155
            },
            {
              "level": 5,
              "value": 167
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 300,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1982,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1982
            },
            {
              "level": 2,
              "value": 2181
            },
            {
              "level": 3,
              "value": 2379
            },
            {
              "level": 4,
              "value": 2577
            },
            {
              "level": 5,
              "value": 2775
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 7.5
            },
            {
              "level": 3,
              "value": 10.0
            },
            {
              "level": 4,
              "value": 15.0
            },
            {
              "level": 5,
              "value": 20.0
            }
          ]
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 7.5
            },
            {
              "level": 3,
              "value": 10.0
            },
            {
              "level": 4,
              "value": 15.0
            },
            {
              "level": 5,
              "value": 20.0
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_revolver_6_epic",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_6",
              "name": "钨枪部件",
              "amount": 3
            },
            {
              "id": "wls2_resourse_epic_industrial_gunparts",
              "name": "工业零件",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_range_revolver_6_epic",
          "result_name": "毛瑟扫帚手枪",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_revolver_6_epic",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_6_epic_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "0775273df6034152545d3eea59f0efb461f7d94f1f2797233b6f16ddf24e2981"
    },
    {
      "id": "wls2_weapon_easter_22_6_epic_colt",
      "item_id": "wls2_weapon_easter_22_6_epic_colt",
      "name": "集市柯尔特左轮",
      "name_en": "Fair Colt",
      "name_source": "official_zh",
      "description": "闪亮且五颜六色的顶级柯尔特左轮。是时候找点乐子了！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 6,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_colt",
      "image_id": "wls2_weapon_easter_22_6_epic_colt",
      "equipment_id": "wls2_weapon_easter_22_6_epic_colt",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 300,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1982,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1982
            },
            {
              "level": 2,
              "value": 2181
            },
            {
              "level": 3,
              "value": 2379
            },
            {
              "level": 4,
              "value": 2577
            },
            {
              "level": 5,
              "value": 2775
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 7.5
            },
            {
              "level": 3,
              "value": 10.0
            },
            {
              "level": 4,
              "value": 15.0
            },
            {
              "level": 5,
              "value": 20.0
            }
          ]
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 7.5
            },
            {
              "level": 3,
              "value": 10.0
            },
            {
              "level": 4,
              "value": 15.0
            },
            {
              "level": 5,
              "value": 20.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 119,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 119
            },
            {
              "level": 2,
              "value": 131
            },
            {
              "level": 3,
              "value": 143
            },
            {
              "level": 4,
              "value": 155
            },
            {
              "level": 5,
              "value": 167
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_6_epic_colt_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_5",
              "name": "合金紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
              "amount": 4
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_6_epic_colt",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_colt_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4ad6966c738dbe7f579ff441f1819c0a24401d3d06b6a75b47cd52a88d1fcb0f"
    },
    {
      "id": "wls2_weapon_easter_22_colt_t6",
      "item_id": "wls2_weapon_easter_22_colt_t6",
      "name": "集市柯尔特左轮",
      "name_en": "Fair Colt",
      "name_source": "official_zh",
      "description": "闪亮且五颜六色的顶级柯尔特左轮。是时候找点乐子了！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_colt",
      "image_id": "wls2_weapon_easter_22_colt_t6",
      "equipment_id": "wls2_weapon_easter_22_colt_t6",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 250,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1574,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1574
            },
            {
              "level": 2,
              "value": 1716
            },
            {
              "level": 3,
              "value": 1870
            },
            {
              "level": 4,
              "value": 2038
            },
            {
              "level": 5,
              "value": 2222
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 18.0
            },
            {
              "level": 3,
              "value": 21.0
            },
            {
              "level": 4,
              "value": 24.0
            },
            {
              "level": 5,
              "value": 27.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 94,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 94
            },
            {
              "level": 2,
              "value": 103
            },
            {
              "level": 3,
              "value": 112
            },
            {
              "level": 4,
              "value": 122
            },
            {
              "level": 5,
              "value": 133
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_colt_t6_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_5",
              "name": "合金紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
              "amount": 4
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_colt_t6",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_colt_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4ad6966c738dbe7f579ff441f1819c0a24401d3d06b6a75b47cd52a88d1fcb0f"
    },
    {
      "id": "wls2_weapon_easter_22_pepperbox_t6",
      "item_id": "wls2_weapon_easter_22_pepperbox_t6",
      "name": "集市胡椒盒手枪",
      "name_en": "Fair Pepperbox",
      "name_source": "official_zh",
      "description": "耀眼！聒噪！就像集市的烟花一样。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_pepperbox",
      "image_id": "wls2_weapon_easter_22_pepperbox_t6",
      "equipment_id": "wls2_weapon_easter_22_pepperbox_t6",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 300,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 910,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 910
            },
            {
              "level": 2,
              "value": 992
            },
            {
              "level": 3,
              "value": 1082
            },
            {
              "level": 4,
              "value": 1179
            },
            {
              "level": 5,
              "value": 1285
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 8.0
            },
            {
              "level": 3,
              "value": 10.0
            },
            {
              "level": 4,
              "value": 13.0
            },
            {
              "level": 5,
              "value": 15.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 55,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 55
            },
            {
              "level": 2,
              "value": 60
            },
            {
              "level": 3,
              "value": 65
            },
            {
              "level": 4,
              "value": 71
            },
            {
              "level": 5,
              "value": 77
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_pepperbox_t6_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_5",
              "name": "合金紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
              "amount": 4
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_pepperbox_t6",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_pepperbox_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "48dbba8973c8ec0a2f19a45a194fd7defe67d00f08f7e838e203f59413ea1fb2"
    },
    {
      "id": "wls2_weapon_easter_22_mallet_t6",
      "item_id": "wls2_weapon_easter_22_mallet_t6",
      "name": "复活节木槌",
      "name_en": "Easter Mallet",
      "name_source": "official_zh",
      "description": "一把集市上的彩色木槌。柄上写着：“晚安”。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "棍棒与锤",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_mallet",
      "image_id": "wls2_weapon_easter_22_mallet_t6",
      "equipment_id": "wls2_weapon_easter_22_mallet_t6",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1306,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1306
            },
            {
              "level": 2,
              "value": 1424
            },
            {
              "level": 3,
              "value": 1552
            },
            {
              "level": 4,
              "value": 1691
            },
            {
              "level": 5,
              "value": 1844
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 8.0
            },
            {
              "level": 3,
              "value": 10.0
            },
            {
              "level": 4,
              "value": 13.0
            },
            {
              "level": 5,
              "value": 15.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 78,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 78
            },
            {
              "level": 2,
              "value": 85
            },
            {
              "level": 3,
              "value": 93
            },
            {
              "level": 4,
              "value": 101
            },
            {
              "level": 5,
              "value": 111
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_mallet_t6_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_5",
              "name": "结实皮革",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 2
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_mallet_t6",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_mallet_name",
        "sorting_group": "weapon_melee_mace_mallet",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "860034db285f055a40f2f5eed90b3fd608bd3c29d8adae878d8038239224dd46"
    },
    {
      "id": "wls2_weapon_easter_22_mace_t6",
      "item_id": "wls2_weapon_easter_22_mace_t6",
      "name": "彩绘狼牙棒",
      "name_en": "Painted Mace",
      "name_source": "official_zh",
      "description": "涂有节日彩绘的近战武器，适合用来砸烂彩蛋，以及脑袋。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "棍棒与锤",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_mace",
      "image_id": "wls2_weapon_easter_22_mace_t6",
      "equipment_id": "wls2_weapon_easter_22_mace_t6",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 71,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 71
            },
            {
              "level": 2,
              "value": 78
            },
            {
              "level": 3,
              "value": 85
            },
            {
              "level": 4,
              "value": 92
            },
            {
              "level": 5,
              "value": 101
            }
          ]
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1189,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1189
            },
            {
              "level": 2,
              "value": 1296
            },
            {
              "level": 3,
              "value": 1413
            },
            {
              "level": 4,
              "value": 1540
            },
            {
              "level": 5,
              "value": 1678
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 8.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 8.0
            },
            {
              "level": 2,
              "value": 10.0
            },
            {
              "level": 3,
              "value": 15.0
            },
            {
              "level": 4,
              "value": 18.0
            },
            {
              "level": 5,
              "value": 20.0
            }
          ]
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 30.0
            },
            {
              "level": 3,
              "value": 50.0
            },
            {
              "level": 4,
              "value": 70.0
            },
            {
              "level": 5,
              "value": 100
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_mace_t6_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 2
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_mace_t6",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_mace_name",
        "sorting_group": "weapon_melee_mace_mallet",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4359f4620e9a54f4108fa4f18a03fef601cfd512f8801a51b0ee2b8b24c18150"
    },
    {
      "id": "wls2_weapon_range_rifle_6_rare",
      "item_id": "wls2_weapon_range_rifle_6_rare",
      "name": "克拉格-约尔根森",
      "name_en": "Krag-Jorgensen",
      "name_source": "official_zh",
      "description": "这支步枪以其平滑的操作而备受赞赏，尤其因其精准度而受到重视",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_rifle_6_rare",
      "image_id": "wls2_weapon_range_rifle_6_rare",
      "equipment_id": "wls2_weapon_range_rifle_6_rare",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 111,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 111
            },
            {
              "level": 2,
              "value": 122
            },
            {
              "level": 3,
              "value": 134
            },
            {
              "level": 4,
              "value": 145
            },
            {
              "level": 5,
              "value": 156
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 330,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1854,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1854
            },
            {
              "level": 2,
              "value": 2040
            },
            {
              "level": 3,
              "value": 2225
            },
            {
              "level": 4,
              "value": 2411
            },
            {
              "level": 5,
              "value": 2596
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "slow_time",
          "label": "减速时长",
          "value": 0.5,
          "unit": "秒",
          "levels": [
            {
              "level": 1,
              "value": 0.5
            },
            {
              "level": 2,
              "value": 0.75
            },
            {
              "level": 3,
              "value": 1
            },
            {
              "level": 4,
              "value": 1.25
            },
            {
              "level": 5,
              "value": 1.5
            }
          ]
        },
        {
          "id": "slow_modifier",
          "label": "减速幅度",
          "value": 25.0,
          "unit": "%"
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_rifle_6_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_6",
              "name": "桤木板",
              "amount": 8
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_6",
              "name": "钨紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_6",
              "name": "钨枪部件",
              "amount": 8
            }
          ],
          "result_id": "wls2_weapon_range_rifle_6_rare",
          "result_name": "克拉格-约尔根森",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_rifle_6_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_rifle_6_rare_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "44ceb3a56f7565dd815fdded8b9448e80c589686a772a9f04ff4bfd25586b142"
    },
    {
      "id": "wls2_weapon_range_rifle_6_uncommon",
      "item_id": "wls2_weapon_range_rifle_6_uncommon",
      "name": "李-恩菲尔德",
      "name_en": "Lee–Enfield",
      "name_source": "official_zh",
      "description": "以其快速的手动操作而闻名，因其可靠性和快速射击而受到青睐",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 6,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_rifle_6_uncommon",
      "image_id": "wls2_weapon_range_rifle_6_uncommon",
      "equipment_id": "wls2_weapon_range_rifle_6_uncommon",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 79,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 79
            },
            {
              "level": 2,
              "value": 87
            },
            {
              "level": 3,
              "value": 95
            },
            {
              "level": 4,
              "value": 103
            },
            {
              "level": 5,
              "value": 111
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 330,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1313,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1313
            },
            {
              "level": 2,
              "value": 1444
            },
            {
              "level": 3,
              "value": 1576
            },
            {
              "level": 4,
              "value": 1707
            },
            {
              "level": 5,
              "value": 1838
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_rifle_6_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_6",
              "name": "桤木板",
              "amount": 6
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_nails_6",
              "name": "钨紧固件",
              "amount": 3
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_6",
              "name": "钨枪部件",
              "amount": 6
            }
          ],
          "result_id": "wls2_weapon_range_rifle_6_uncommon",
          "result_name": "李-恩菲尔德",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_rifle_6_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_rifle_6_uncommon_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "38cff034e1a5bb98be20b512e18d599b04372ba61926424dc76a8bdd68e0ab69"
    },
    {
      "id": "wls2_xmas_23_weapon_range_rifle_6_epic",
      "item_id": "wls2_xmas_23_weapon_range_rifle_6_epic",
      "name": "极光",
      "name_en": "Aurora",
      "name_source": "official_zh",
      "description": "这支滑膛枪会让你的敌人惊慌失措！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 6,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_xmas_22_weapon_range_rifle_5_rare",
      "image_id": "wls2_xmas_23_weapon_range_rifle_6_epic",
      "equipment_id": "wls2_xmas_23_weapon_range_rifle_6_epic",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 330,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 330
            }
          ],
          "per_level_after_max": 0,
          "after_level": 1
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 20.0,
          "unit": "%"
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 10.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 206,
          "unit": ""
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_xmas_23_weapon_range_rifle_6_epic_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_6",
              "name": "桤木板",
              "amount": 5
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 7
            },
            {
              "id": "wls2_resourse_fourfold_nails_5",
              "name": "合金紧固件",
              "amount": 5
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_6",
              "name": "钨枪部件",
              "amount": 7
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_xmas_23_weapon_range_rifle_6_epic",
        "reason": "audited_player_equipment",
        "name_key": "wls2_xmas_22_weapon_range_rifle_5_rare_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "8313d4dc889e82562cb7a523732290388598154edb06726be707d104d33fa470"
    },
    {
      "id": "wls2_weapon_range_rifle_6_common",
      "item_id": "wls2_weapon_range_rifle_6_common",
      "name": "温彻斯特画廊枪",
      "name_en": "Winchester Gallery Gun",
      "name_source": "official_zh",
      "description": "在射击场表现出色。对于击倒土匪也非常有效。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 6,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_rifle_6_common",
      "image_id": "wls2_weapon_range_rifle_6_common",
      "equipment_id": "wls2_weapon_range_rifle_6_common",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 57,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 57
            },
            {
              "level": 2,
              "value": 63
            },
            {
              "level": 3,
              "value": 69
            },
            {
              "level": 4,
              "value": 74
            },
            {
              "level": 5,
              "value": 80
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 330,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 952,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 952
            },
            {
              "level": 2,
              "value": 1047
            },
            {
              "level": 3,
              "value": 1142
            },
            {
              "level": 4,
              "value": 1238
            },
            {
              "level": 5,
              "value": 1333
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_rifle_6_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_6",
              "name": "桤木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_6",
              "name": "钨紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_6",
              "name": "钨枪部件",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_range_rifle_6_common",
          "result_name": "温彻斯特画廊枪",
          "amount": 1,
          "min_level": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_rifle_6_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_rifle_6_common_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "f0f8cba5c4b967a36f2281a090489fd2ad85b179ae29b75caddf1a3392ade7dc"
    },
    {
      "id": "wls2_weapon_range_rifle_6_epic",
      "item_id": "wls2_weapon_range_rifle_6_epic",
      "name": "野蛮模型99",
      "name_en": "Savage Model 99",
      "name_source": "official_zh",
      "description": "因其创新的旋转弹夹和出色的准确性而备受赞誉",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 6,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_rifle_6_epic",
      "image_id": "wls2_weapon_range_rifle_6_epic",
      "equipment_id": "wls2_weapon_range_rifle_6_epic",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 143,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 143
            },
            {
              "level": 2,
              "value": 157
            },
            {
              "level": 3,
              "value": 171
            },
            {
              "level": 4,
              "value": 186
            },
            {
              "level": 5,
              "value": 200
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 330,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 2379,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2379
            },
            {
              "level": 2,
              "value": 2617
            },
            {
              "level": 3,
              "value": 2855
            },
            {
              "level": 4,
              "value": 3093
            },
            {
              "level": 5,
              "value": 3331
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "slow_time",
          "label": "减速时长",
          "value": 0.75,
          "unit": "秒",
          "levels": [
            {
              "level": 1,
              "value": 0.75
            },
            {
              "level": 2,
              "value": 1
            },
            {
              "level": 3,
              "value": 1.25
            },
            {
              "level": 4,
              "value": 1.5
            },
            {
              "level": 5,
              "value": 1.75
            }
          ]
        },
        {
          "id": "slow_modifier",
          "label": "减速幅度",
          "value": 30.0,
          "unit": "%"
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 8.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 8.0
            },
            {
              "level": 2,
              "value": 10.0
            },
            {
              "level": 3,
              "value": 13.0
            },
            {
              "level": 4,
              "value": 15.0
            },
            {
              "level": 5,
              "value": 18.0
            }
          ]
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_rifle_6_epic",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_6",
              "name": "桤木板",
              "amount": 10
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_6",
              "name": "钨枪部件",
              "amount": 5
            },
            {
              "id": "wls2_resourse_epic_industrial_gunparts",
              "name": "工业零件",
              "amount": 8
            }
          ],
          "result_id": "wls2_weapon_range_rifle_6_epic",
          "result_name": "野蛮模型99",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_rifle_6_epic",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_rifle_6_epic_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "0fa77c1ae88248e5354a445ad06d2c6bdb21d05916cbdd2ec56844fe39d218fe"
    },
    {
      "id": "wls2_weapon_melee_knife_6_common",
      "item_id": "wls2_weapon_melee_knife_6_common",
      "name": "捕鲸刀",
      "name_en": "Whaling knife",
      "name_source": "official_zh",
      "description": "海员的选择，适用于崎岖使用",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 6,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_melee_knife_6_common",
      "image_id": "wls2_weapon_melee_knife_6_common",
      "equipment_id": "wls2_weapon_melee_knife_6_common",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 29,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 29
            },
            {
              "level": 2,
              "value": 32
            },
            {
              "level": 3,
              "value": 35
            },
            {
              "level": 4,
              "value": 38
            },
            {
              "level": 5,
              "value": 41
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 485,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 485
            },
            {
              "level": 2,
              "value": 533
            },
            {
              "level": 3,
              "value": 582
            },
            {
              "level": 4,
              "value": 630
            },
            {
              "level": 5,
              "value": 679
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_knife_6_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_6",
              "name": "坚固的皮革",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 1
            }
          ],
          "result_id": "wls2_weapon_melee_knife_6_common",
          "result_name": "捕鲸刀",
          "amount": 1,
          "min_level": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_melee_knife_6_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_6_common_name",
        "sorting_group": "weapon_melee_knife",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "18c75d7a90f5820b498ef3abdae1fc96bc0c3203fbfb8d416c455cf8de71256a"
    },
    {
      "id": "wls2_weapon_melee_knife_6_uncommon",
      "item_id": "wls2_weapon_melee_knife_6_uncommon",
      "name": "推剑",
      "name_en": "Push dagger",
      "name_source": "official_zh",
      "description": "潜行阴影中的突袭",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 6,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_melee_knife_6_uncommon",
      "image_id": "wls2_weapon_melee_knife_6_uncommon",
      "equipment_id": "wls2_weapon_melee_knife_6_uncommon",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 40,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 40
            },
            {
              "level": 2,
              "value": 44
            },
            {
              "level": 3,
              "value": 48
            },
            {
              "level": 4,
              "value": 52
            },
            {
              "level": 5,
              "value": 56
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 160,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 669,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 669
            },
            {
              "level": 2,
              "value": 736
            },
            {
              "level": 3,
              "value": 803
            },
            {
              "level": 4,
              "value": 869
            },
            {
              "level": 5,
              "value": 936
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_knife_6_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_6",
              "name": "坚固的皮革",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_melee_knife_6_uncommon",
          "result_name": "推剑",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_melee_knife_6_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_6_uncommon_name",
        "sorting_group": "weapon_melee_knife",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a89726a6b02ffa66cde911f57e4340ee70a5e1bb6971fb2a3bc1306fb29cd3bf"
    },
    {
      "id": "wls2_weapon_melee_knife_6_rare",
      "item_id": "wls2_weapon_melee_knife_6_rare",
      "name": "海军短剑",
      "name_en": "Naval dirk dagger",
      "name_source": "official_zh",
      "description": "航海者对陆地冒险的精确度",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_melee_knife_6_rare",
      "image_id": "wls2_weapon_melee_knife_6_rare",
      "equipment_id": "wls2_weapon_melee_knife_6_rare",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 57,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 57
            },
            {
              "level": 2,
              "value": 63
            },
            {
              "level": 3,
              "value": 82
            },
            {
              "level": 4,
              "value": 96
            },
            {
              "level": 5,
              "value": 112
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 170,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 944,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 944
            },
            {
              "level": 2,
              "value": 1038
            },
            {
              "level": 3,
              "value": 1133
            },
            {
              "level": 4,
              "value": 1227
            },
            {
              "level": 5,
              "value": 1322
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 20.0
            },
            {
              "level": 4,
              "value": 25.0
            },
            {
              "level": 5,
              "value": 30.0
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_knife_6_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 6
            },
            {
              "id": "wls2_resourse_secondary_leather_6",
              "name": "坚固的皮革",
              "amount": 6
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_melee_knife_6_rare",
          "result_name": "海军短剑",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_melee_knife_6_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_6_rare_name",
        "sorting_group": "weapon_melee_knife",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "59841b9e5f0b2696730d51381c445fbcfb8d6d1c52521fc953f5f2ba3e89bbf2"
    },
    {
      "id": "wls2_weapon_melee_knife_6_epic",
      "item_id": "wls2_weapon_melee_knife_6_epic",
      "name": "狗拉雪橇者的刀",
      "name_en": "Musher's knife",
      "name_source": "official_zh",
      "description": "轻便但耐用的伴侣在冰冷的小径上",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 6,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_musher's_knife_6_epic",
      "image_id": "wls2_weapon_melee_knife_6_epic",
      "equipment_id": "wls2_weapon_melee_knife_6_epic",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 73,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 73
            },
            {
              "level": 2,
              "value": 91
            },
            {
              "level": 3,
              "value": 108
            },
            {
              "level": 4,
              "value": 126
            },
            {
              "level": 5,
              "value": 143
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 170,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1210,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1210
            },
            {
              "level": 2,
              "value": 1331
            },
            {
              "level": 3,
              "value": 1453
            },
            {
              "level": 4,
              "value": 1574
            },
            {
              "level": 5,
              "value": 1695
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 15.0
            },
            {
              "level": 4,
              "value": 20.0
            },
            {
              "level": 5,
              "value": 25.0
            }
          ]
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 30.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 30.0
            },
            {
              "level": 2,
              "value": 35.0
            },
            {
              "level": 3,
              "value": 40.0
            },
            {
              "level": 4,
              "value": 45.0
            },
            {
              "level": 5,
              "value": 50.0
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_knife_6_epic",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 8
            },
            {
              "id": "wls2_resourse_secondary_leather_6",
              "name": "坚固的皮革",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 2
            },
            {
              "id": "wls2_resourse_epic_rubber",
              "name": "橡胶",
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_melee_knife_6_epic",
          "result_name": "狗拉雪橇者的刀",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_melee_knife_6_epic",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_6_epic_name",
        "sorting_group": "weapon_melee_knife",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ba80c48d7dec416161c2c793f6e2f7876026550bdb2a6fc6268a3aa7e8e0c559"
    },
    {
      "id": "wls2_weapon_melee_spear_6_rare",
      "item_id": "wls2_weapon_melee_spear_6_rare",
      "name": "坚固的鱼叉",
      "name_en": "Rugged Harpoon",
      "name_source": "official_zh",
      "description": "坚韧而适应频繁遭遇",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "长矛与军刀",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_melee_spear_6_rare",
      "image_id": "wls2_weapon_melee_spear_6_rare",
      "equipment_id": "wls2_weapon_melee_spear_6_rare",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 86,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 86
            },
            {
              "level": 2,
              "value": 94
            },
            {
              "level": 3,
              "value": 123
            },
            {
              "level": 4,
              "value": 144
            },
            {
              "level": 5,
              "value": 168
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 190,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1416,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1416
            },
            {
              "level": 2,
              "value": 1558
            },
            {
              "level": 3,
              "value": 1699
            },
            {
              "level": 4,
              "value": 1841
            },
            {
              "level": 5,
              "value": 1982
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "dot_time",
          "label": "持续伤害时长",
          "value": 3,
          "unit": "秒"
        },
        {
          "id": "dot_amount",
          "label": "每次持续伤害",
          "value": 200,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 200
            },
            {
              "level": 2,
              "value": 250
            },
            {
              "level": 3,
              "value": 300
            },
            {
              "level": 4,
              "value": 350
            },
            {
              "level": 5,
              "value": 400
            }
          ]
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 40.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_spear_6_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 6
            },
            {
              "id": "wls2_resourse_secondary_plank_6",
              "name": "桤木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_6",
              "name": "坚固的皮革",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_melee_spear_6_rare",
          "result_name": "坚固的鱼叉",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_melee_spear_6_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_spear_6_rare_name",
        "sorting_group": "weapon_melee_spear_saber",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "82aacb9084fb329315fe2311b358dd05812fb4a7ee8091d20d268410db80dd02"
    },
    {
      "id": "wls2_weapon_range_shotgun_6_common",
      "item_id": "wls2_weapon_range_shotgun_6_common",
      "name": "Rem M10 暴乱",
      "name_en": "Rem M10 Riot",
      "name_source": "official_zh",
      "description": "这把霰弹枪，凭借其独特的底部弹出设计，提供了无与伦比的可靠性",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 6,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_shotgun_6_common",
      "image_id": "wls2_weapon_range_shotgun_6_common",
      "equipment_id": "wls2_weapon_range_shotgun_6_common",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 27,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 27
            },
            {
              "level": 2,
              "value": 29
            },
            {
              "level": 3,
              "value": 32
            },
            {
              "level": 4,
              "value": 35
            },
            {
              "level": 5,
              "value": 37
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 330,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 960,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 960
            },
            {
              "level": 2,
              "value": 1045
            },
            {
              "level": 3,
              "value": 1135
            },
            {
              "level": 4,
              "value": 1225
            },
            {
              "level": 5,
              "value": 1325
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_shotgun_6_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_6",
              "name": "桤木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_6",
              "name": "钨紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_6",
              "name": "钨枪部件",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_range_shotgun_6_common",
          "result_name": "Rem M10 暴乱",
          "amount": 1,
          "min_level": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_shotgun_6_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_6_common_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "2dca6cc36316a013fa1c188bcfb4f51621045f124811c6802b36b1a22dbd63bc"
    },
    {
      "id": "wls2_weapon_easter_22_shotgun_3_t6",
      "item_id": "wls2_weapon_easter_22_shotgun_3_t6",
      "name": "吉尔的霰弹枪",
      "name_en": "Jill's Shotgun",
      "name_source": "official_zh",
      "description": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_3",
      "image_id": "wls2_weapon_easter_22_shotgun_3_t6",
      "equipment_id": "wls2_weapon_easter_22_shotgun_3_t6",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 250,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1550,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1550
            },
            {
              "level": 2,
              "value": 1690
            },
            {
              "level": 3,
              "value": 1842
            },
            {
              "level": 4,
              "value": 2007
            },
            {
              "level": 5,
              "value": 2188
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 8.0
            },
            {
              "level": 3,
              "value": 10.0
            },
            {
              "level": 4,
              "value": 13.0
            },
            {
              "level": 5,
              "value": 15.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 47,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 47
            },
            {
              "level": 2,
              "value": 51
            },
            {
              "level": 3,
              "value": 55
            },
            {
              "level": 4,
              "value": 60
            },
            {
              "level": 5,
              "value": 66
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_shotgun_3_t6_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_5",
              "name": "合金紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
              "amount": 6
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_shotgun_3_t6",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_3_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "b603fc5880f23feb9453ab8321797febd8f12e94181fa85643ed60dc0dad717d"
    },
    {
      "id": "wls2_weapon_ws_day2024_shotgun_6",
      "item_id": "wls2_weapon_ws_day2024_shotgun_6",
      "name": "周年庆散弹枪",
      "name_en": "Anniversary shotgun",
      "name_source": "official_zh",
      "description": "奖励武器。用来射击和炫耀都很合适！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 6,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_shotgun",
      "image_id": "wls2_weapon_ws_day2024_shotgun_6",
      "equipment_id": "wls2_weapon_ws_day2024_shotgun_6",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 52,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 52
            },
            {
              "level": 2,
              "value": 57
            },
            {
              "level": 3,
              "value": 62
            },
            {
              "level": 4,
              "value": 67
            },
            {
              "level": 5,
              "value": 72
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 330,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1725,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1725
            },
            {
              "level": 2,
              "value": 1897
            },
            {
              "level": 3,
              "value": 2070
            },
            {
              "level": 4,
              "value": 2242
            },
            {
              "level": 5,
              "value": 2415
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 3.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 3.0
            },
            {
              "level": 2,
              "value": 3.0
            },
            {
              "level": 3,
              "value": 3.0
            },
            {
              "level": 4,
              "value": 4.0
            },
            {
              "level": 5,
              "value": 5.0
            },
            {
              "level": 6,
              "value": 7.0
            }
          ]
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 3.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 3.0
            },
            {
              "level": 2,
              "value": 3.0
            },
            {
              "level": 3,
              "value": 3.0
            },
            {
              "level": 4,
              "value": 4.0
            },
            {
              "level": 5,
              "value": 5.0
            },
            {
              "level": 6,
              "value": 7.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_ws_day2024_shotgun_6_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_6",
              "name": "桤木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_6",
              "name": "钨紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_6",
              "name": "钨枪部件",
              "amount": 8
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_ws_day2024_shotgun_6",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2021_shotgun_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "6bdc4c31a15835b2cc5bb429be5dc30f4a657f1c3c5d2641401f1392035faeaf"
    },
    {
      "id": "wls2_weapon_range_shotgun_6_epic",
      "item_id": "wls2_weapon_range_shotgun_6_epic",
      "name": "寡妇制造者",
      "name_en": "Widowmaker",
      "name_source": "official_zh",
      "description": "一款可靠的、半自动的霰弹枪，适用于精英射手",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 6,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_range_shotgun_6_epic_icon",
      "image_id": "wls2_weapon_range_shotgun_6_epic",
      "equipment_id": "wls2_weapon_range_shotgun_6_epic",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 66,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 66
            },
            {
              "level": 2,
              "value": 73
            },
            {
              "level": 3,
              "value": 80
            },
            {
              "level": 4,
              "value": 86
            },
            {
              "level": 5,
              "value": 93
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 330,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 2285,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2285
            },
            {
              "level": 2,
              "value": 2505
            },
            {
              "level": 3,
              "value": 2725
            },
            {
              "level": 4,
              "value": 2950
            },
            {
              "level": 5,
              "value": 3175
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 10.0
            },
            {
              "level": 3,
              "value": 15.0
            },
            {
              "level": 4,
              "value": 20.0
            },
            {
              "level": 5,
              "value": 25.0
            }
          ]
        },
        {
          "id": "dot_time",
          "label": "持续伤害时长",
          "value": 4,
          "unit": "秒"
        },
        {
          "id": "dot_amount",
          "label": "每次持续伤害",
          "value": 300,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 300
            },
            {
              "level": 2,
              "value": 350
            },
            {
              "level": 3,
              "value": 400
            },
            {
              "level": 4,
              "value": 450
            },
            {
              "level": 5,
              "value": 500
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_shotgun_6_epic",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_6",
              "name": "桤木板",
              "amount": 5
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_6",
              "name": "钨枪部件",
              "amount": 5
            },
            {
              "id": "wls2_resourse_epic_industrial_gunparts",
              "name": "工业零件",
              "amount": 8
            }
          ],
          "result_id": "wls2_weapon_range_shotgun_6_epic",
          "result_name": "寡妇制造者",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_shotgun_6_epic",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_6_epic_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "b116963d6bb55281e31c82ace74fb302d633979ba58de4dfb2bfe98a3828947e"
    },
    {
      "id": "wls2_weapon_range_shotgun_6_rare",
      "item_id": "wls2_weapon_range_shotgun_6_rare",
      "name": "座头鲸",
      "name_en": "Humpback",
      "name_source": "official_zh",
      "description": "这款布朗宁模型以其独特的外观和毁灭性的威力而著称",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_shotgun_6_rare",
      "image_id": "wls2_weapon_range_shotgun_6_rare",
      "equipment_id": "wls2_weapon_range_shotgun_6_rare",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 52,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 52
            },
            {
              "level": 2,
              "value": 57
            },
            {
              "level": 3,
              "value": 62
            },
            {
              "level": 4,
              "value": 67
            },
            {
              "level": 5,
              "value": 72
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 330,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1800,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1800
            },
            {
              "level": 2,
              "value": 1975
            },
            {
              "level": 3,
              "value": 2145
            },
            {
              "level": 4,
              "value": 2325
            },
            {
              "level": 5,
              "value": 2490
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 20.0
            },
            {
              "level": 4,
              "value": 25.0
            },
            {
              "level": 5,
              "value": 30.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_shotgun_6_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_6",
              "name": "桤木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_6",
              "name": "钨紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_6",
              "name": "钨枪部件",
              "amount": 8
            }
          ],
          "result_id": "wls2_weapon_range_shotgun_6_rare",
          "result_name": "座头鲸",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_shotgun_6_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_6_rare_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "014f89fc55425ceba6ad805d2117ce64642fe39af5dbdf087986091cba9cb383"
    },
    {
      "id": "wls2_weapon_easter_22_shotgun_1_t6",
      "item_id": "wls2_weapon_easter_22_shotgun_1_t6",
      "name": "彩炮 II",
      "name_en": "Confetti II",
      "name_source": "official_zh",
      "description": "虽然叫彩炮，但它射的可不是彩色纸屑。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 6,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_1",
      "image_id": "wls2_weapon_easter_22_shotgun_1_t6",
      "equipment_id": "wls2_weapon_easter_22_shotgun_1_t6",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 250,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 861,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 861
            },
            {
              "level": 2,
              "value": 939
            },
            {
              "level": 3,
              "value": 1023
            },
            {
              "level": 4,
              "value": 1115
            },
            {
              "level": 5,
              "value": 1216
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 26,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 26
            },
            {
              "level": 2,
              "value": 28
            },
            {
              "level": 3,
              "value": 31
            },
            {
              "level": 4,
              "value": 33
            },
            {
              "level": 5,
              "value": 36
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_shotgun_1_t6_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_5",
              "name": "合金紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
              "amount": 6
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_shotgun_1_t6",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_1_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "d1c2b456a47cdd2eb077a97ca0c3442c116588041d48920508ec0f8f5b65f6a6"
    },
    {
      "id": "wls2_weapon_xmas2024_shotgun_6",
      "item_id": "wls2_weapon_xmas2024_shotgun_6",
      "name": "暴风雪",
      "name_en": "Blizzard",
      "name_source": "official_zh",
      "description": "没有人能阻止自然的力量",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 6,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_xmas_24_shotgun",
      "image_id": "wls2_weapon_xmas2024_shotgun_6",
      "equipment_id": "wls2_weapon_xmas2024_shotgun_6",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 66,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 66
            },
            {
              "level": 2,
              "value": 73
            },
            {
              "level": 3,
              "value": 80
            },
            {
              "level": 4,
              "value": 86
            },
            {
              "level": 5,
              "value": 93
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 330,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 2211,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2211
            },
            {
              "level": 2,
              "value": 2432
            },
            {
              "level": 3,
              "value": 2653
            },
            {
              "level": 4,
              "value": 2875
            },
            {
              "level": 5,
              "value": 3096
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 20.0
            },
            {
              "level": 4,
              "value": 25.0
            },
            {
              "level": 5,
              "value": 30.0
            }
          ]
        },
        {
          "id": "slow_time",
          "label": "减速时长",
          "value": 0.5,
          "unit": "秒",
          "levels": [
            {
              "level": 1,
              "value": 0.5
            },
            {
              "level": 2,
              "value": 0.75
            },
            {
              "level": 3,
              "value": 1
            },
            {
              "level": 4,
              "value": 1.25
            },
            {
              "level": 5,
              "value": 1.5
            }
          ]
        },
        {
          "id": "slow_modifier",
          "label": "减速幅度",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 20.0
            },
            {
              "level": 4,
              "value": 25.0
            },
            {
              "level": 5,
              "value": 30.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_xmas2024_shotgun_6_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_6",
              "name": "钨紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_6",
              "name": "钨枪部件",
              "amount": 4
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_xmas2024_shotgun_6",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_xmas2024_shotgun_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a9b84b7752f67ea6e3a9a3123f0817d61b81d6a079e2cefec840bddc456043fb"
    },
    {
      "id": "wls2_weapon_lunar_shotgun_6_rare",
      "item_id": "wls2_weapon_lunar_shotgun_6_rare",
      "name": "火焰 霰弹枪",
      "name_en": "Flame shotgun",
      "name_source": "official_zh",
      "description": "一发子弹像一群火热的马将打击你的敌人",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 6,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_lunar_icon",
      "image_id": "wls2_weapon_lunar_shotgun_6_rare",
      "equipment_id": "wls2_weapon_lunar_shotgun_6_rare",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 52,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 52
            },
            {
              "level": 2,
              "value": 57
            },
            {
              "level": 3,
              "value": 62
            },
            {
              "level": 4,
              "value": 67
            },
            {
              "level": 5,
              "value": 72
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 330,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1800,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1800
            },
            {
              "level": 2,
              "value": 1975
            },
            {
              "level": 3,
              "value": 2145
            },
            {
              "level": 4,
              "value": 2325
            },
            {
              "level": 5,
              "value": 2490
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 20.0
            },
            {
              "level": 4,
              "value": 25.0
            },
            {
              "level": 5,
              "value": 30.0
            }
          ]
        },
        {
          "id": "dot_time",
          "label": "持续伤害时长",
          "value": 4,
          "unit": "秒"
        },
        {
          "id": "dot_amount",
          "label": "每次持续伤害",
          "value": 180,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 180
            },
            {
              "level": 2,
              "value": 200
            },
            {
              "level": 3,
              "value": 215
            },
            {
              "level": 4,
              "value": 230
            },
            {
              "level": 5,
              "value": 250
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_lunar_shotgun_6_rare_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_5",
              "name": "合金紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
              "amount": 6
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_lunar_shotgun_6_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_lunar_shotgun_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "bf5e960bdef4f9f82aa0c8fc9494b6b25d6bddc4b3cfc1186206b9538776e403"
    },
    {
      "id": "wls2_weapon_easter_22_shotgun_2_t6",
      "item_id": "wls2_weapon_easter_22_shotgun_2_t6",
      "name": "爆笑",
      "name_en": "Killing Joke",
      "name_source": "official_zh",
      "description": "可能也没那么好笑，但是很好射！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 6,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_2",
      "image_id": "wls2_weapon_easter_22_shotgun_2_t6",
      "equipment_id": "wls2_weapon_easter_22_shotgun_2_t6",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 250,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1203,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1203
            },
            {
              "level": 2,
              "value": 1311
            },
            {
              "level": 3,
              "value": 1429
            },
            {
              "level": 4,
              "value": 1558
            },
            {
              "level": 5,
              "value": 1698
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 36,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 36
            },
            {
              "level": 2,
              "value": 39
            },
            {
              "level": 3,
              "value": 43
            },
            {
              "level": 4,
              "value": 47
            },
            {
              "level": 5,
              "value": 51
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_shotgun_2_t6_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_5",
              "name": "合金紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
              "amount": 6
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_shotgun_2_t6",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_shotgun_2_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ff8ebdcba688f7fb3994b9092f379473e9608ad1274854dabfeed893e32aad40"
    },
    {
      "id": "wls2_weapon_range_shotgun_6_uncommon",
      "item_id": "wls2_weapon_range_shotgun_6_uncommon",
      "name": "雷明顿打发",
      "name_en": "Remington Whipped",
      "name_source": "official_zh",
      "description": "野兽具有残暴的设计和无与伦比的火力，使其成为可怕的对手",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 6,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_weapon_range_shotgun_6_uncommon",
      "image_id": "wls2_weapon_range_shotgun_6_uncommon",
      "equipment_id": "wls2_weapon_range_shotgun_6_uncommon",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 37,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 37
            },
            {
              "level": 2,
              "value": 41
            },
            {
              "level": 3,
              "value": 44
            },
            {
              "level": 4,
              "value": 48
            },
            {
              "level": 5,
              "value": 52
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 330,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1295,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1295
            },
            {
              "level": 2,
              "value": 1425
            },
            {
              "level": 3,
              "value": 1525
            },
            {
              "level": 4,
              "value": 1575
            },
            {
              "level": 5,
              "value": 1775
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_shotgun_6_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_6",
              "name": "桤木板",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_nails_6",
              "name": "钨紧固件",
              "amount": 3
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_6",
              "name": "钨枪部件",
              "amount": 6
            }
          ],
          "result_id": "wls2_weapon_range_shotgun_6_uncommon",
          "result_name": "雷明顿打发",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_shotgun_6_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_6_uncommon_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "6d828245f283a56e1f2f13e748a22f659e8b047a85d3cda635b67a993fc8f393"
    },
    {
      "id": "wls2_weapon_easter_22_bow_t7",
      "item_id": "wls2_weapon_easter_22_bow_t7",
      "name": "胡咧咧弓",
      "name_en": "Balderdash",
      "name_source": "official_zh",
      "description": "不得不说，造这把弓的人很有想象力。更重要的是，它真的能当弓用！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弓",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_bow",
      "image_id": "wls2_weapon_easter_22_bow_t7",
      "equipment_id": "wls2_weapon_easter_22_bow_t7",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 165,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 73,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 73
            },
            {
              "level": 2,
              "value": 80
            },
            {
              "level": 3,
              "value": 88
            },
            {
              "level": 4,
              "value": 95
            },
            {
              "level": 5,
              "value": 102
            }
          ]
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1212,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1212
            },
            {
              "level": 2,
              "value": 1212
            },
            {
              "level": 3,
              "value": 1212
            },
            {
              "level": 4,
              "value": 1212
            },
            {
              "level": 5,
              "value": 1212
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "slow_time",
          "label": "减速时长",
          "value": 0.5,
          "unit": "秒",
          "levels": [
            {
              "level": 1,
              "value": 0.5
            },
            {
              "level": 2,
              "value": 0.75
            },
            {
              "level": 3,
              "value": 1
            },
            {
              "level": 4,
              "value": 1.25
            },
            {
              "level": 5,
              "value": 1.5
            }
          ]
        },
        {
          "id": "slow_modifier",
          "label": "减速幅度",
          "value": 25.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_bow_t7_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_rope_6",
              "name": "皮绳",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_plank_6",
              "name": "桤木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_6",
              "name": "坚固的皮革",
              "amount": 2
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_bow_t7",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_bow_name",
        "sorting_group": "bow",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "2425b779a25241ed1a0fbfd05ad4b6714587e6454870ea15a5599bab34883655"
    },
    {
      "id": "wls2_weapon_range_bow_7_common",
      "item_id": "wls2_weapon_range_bow_7_common",
      "name": "野马弓",
      "name_en": "Bronco bow",
      "name_source": "official_zh",
      "description": "使用双张力弦系统在每一次射击中注入力量、精确性和自豪感",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弓",
      "tier": 7,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_bow_7_common_icon",
      "image_id": "wls2_weapon_range_bow_7_common",
      "equipment_id": "wls2_weapon_range_bow_7_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 165,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 49,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 49
            },
            {
              "level": 2,
              "value": 54
            },
            {
              "level": 3,
              "value": 59
            },
            {
              "level": 4,
              "value": 64
            },
            {
              "level": 5,
              "value": 69
            }
          ]
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 986,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 986
            },
            {
              "level": 2,
              "value": 1084
            },
            {
              "level": 3,
              "value": 1183
            },
            {
              "level": 4,
              "value": 1281
            },
            {
              "level": 5,
              "value": 1380
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_bow_7_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_rope_7",
              "name": "皮带",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_plank_7",
              "name": "山核桃木板",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_leather_7",
              "name": "密集皮革",
              "amount": 1
            }
          ],
          "result_id": "wls2_weapon_range_bow_7_common",
          "result_name": "野马弓",
          "amount": 1,
          "min_level": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_bow_7_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_bow_7_common_name",
        "sorting_group": "bow",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "9dd59939882e269c94820b61c9cb104b4c752f6c14b32c90a0b33e254c5f499d"
    },
    {
      "id": "wls2_weapon_easter_22_crossbow_t7",
      "item_id": "wls2_weapon_easter_22_crossbow_t7",
      "name": "胡萝卜弩",
      "name_en": "Carrotbow",
      "name_source": "official_zh",
      "description": "它会让你明白，表面人畜无害的胡萝卜，其实暗藏杀机。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弩",
      "tier": 7,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_crossbow",
      "image_id": "wls2_weapon_easter_22_crossbow_t7",
      "equipment_id": "wls2_weapon_easter_22_crossbow_t7",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 74,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 74
            },
            {
              "level": 2,
              "value": 81
            },
            {
              "level": 3,
              "value": 89
            },
            {
              "level": 4,
              "value": 96
            },
            {
              "level": 5,
              "value": 104
            }
          ]
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1240,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1240
            },
            {
              "level": 2,
              "value": 1364
            },
            {
              "level": 3,
              "value": 1488
            },
            {
              "level": 4,
              "value": 1612
            },
            {
              "level": 5,
              "value": 1736
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 7.0
            },
            {
              "level": 3,
              "value": 9.0
            },
            {
              "level": 4,
              "value": 11.0
            },
            {
              "level": 5,
              "value": 13.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_crossbow_t7_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_rope_6",
              "name": "皮绳",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_plank_6",
              "name": "桤木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 4
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_crossbow_t7",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_crossbow_name",
        "sorting_group": "crossbow",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a1542e4b88b3b40e4786fe8c7f9cd22aab6f9dd7d1f6a59fe93990301703047a"
    },
    {
      "id": "wls2_weapon_range_revolver_7_rare",
      "item_id": "wls2_weapon_range_revolver_7_rare",
      "name": "伯格曼 火星 1903",
      "name_en": "Bergmann mars 1903",
      "name_source": "official_zh",
      "description": "",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_revolver_7_rare_icon",
      "image_id": "wls2_weapon_range_revolver_7_rare",
      "equipment_id": "wls2_weapon_range_revolver_7_rare",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 148,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 148
            },
            {
              "level": 2,
              "value": 163
            },
            {
              "level": 3,
              "value": 178
            },
            {
              "level": 4,
              "value": 193
            },
            {
              "level": 5,
              "value": 208
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 300,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 2474,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2474
            },
            {
              "level": 2,
              "value": 2721
            },
            {
              "level": 3,
              "value": 2968
            },
            {
              "level": 4,
              "value": 3216
            },
            {
              "level": 5,
              "value": 3463
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 20.0
            },
            {
              "level": 4,
              "value": 25.0
            },
            {
              "level": 5,
              "value": 30.0
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 50.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_revolver_7_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_7",
              "name": "钼紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_7",
              "name": "钼 枪部件",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_range_revolver_7_rare",
          "result_name": "伯格曼 火星 1903",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_revolver_7_rare",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_range_revolver_7_rare_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "07220d8bab51df916c0939c58e612d10280ab808179b08e2bac2e0f7f5ee8034"
    },
    {
      "id": "wls2_weapon_ws_day2024_colt_7",
      "item_id": "wls2_weapon_ws_day2024_colt_7",
      "name": "周年庆左轮手枪",
      "name_en": "Anniversary revolver",
      "name_source": "official_zh",
      "description": "奖励武器。用来射击和炫耀都很合适！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 7,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_colt",
      "image_id": "wls2_weapon_ws_day2024_colt_7",
      "equipment_id": "wls2_weapon_ws_day2024_colt_7",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 148,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 148
            },
            {
              "level": 2,
              "value": 163
            },
            {
              "level": 3,
              "value": 178
            },
            {
              "level": 4,
              "value": 193
            },
            {
              "level": 5,
              "value": 208
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 300,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 2474,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2474
            },
            {
              "level": 2,
              "value": 2721
            },
            {
              "level": 3,
              "value": 2968
            },
            {
              "level": 4,
              "value": 3216
            },
            {
              "level": 5,
              "value": 3463
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 3.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 3.0
            },
            {
              "level": 2,
              "value": 3.0
            },
            {
              "level": 3,
              "value": 3.0
            },
            {
              "level": 4,
              "value": 4.0
            },
            {
              "level": 5,
              "value": 5.0
            },
            {
              "level": 6,
              "value": 7.0
            }
          ]
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 3.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 3.0
            },
            {
              "level": 2,
              "value": 3.0
            },
            {
              "level": 3,
              "value": 3.0
            },
            {
              "level": 4,
              "value": 4.0
            },
            {
              "level": 5,
              "value": 5.0
            },
            {
              "level": 6,
              "value": 7.0
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 50.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_ws_day2024_colt_7_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_7",
              "name": "钼紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_7",
              "name": "钼 枪部件",
              "amount": 4
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_ws_day2024_colt_7",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2021_colt_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "7ce8cf8bb085e07e25cdaea78af5b06425dee0b735aebbe5754c3e3fe4f6c910"
    },
    {
      "id": "wls2_weapon_range_halloween_23_pistol_7",
      "item_id": "wls2_weapon_range_halloween_23_pistol_7",
      "name": "恶灵的恐怖",
      "name_en": "Terror of Spirits",
      "name_source": "official_zh",
      "description": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 7,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_halloween_range_revolver",
      "image_id": "wls2_weapon_range_halloween_23_pistol_7",
      "equipment_id": "wls2_weapon_range_halloween_23_pistol_7",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 300,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 2474,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2474
            },
            {
              "level": 2,
              "value": 2721
            },
            {
              "level": 3,
              "value": 2969
            },
            {
              "level": 4,
              "value": 3216
            },
            {
              "level": 5,
              "value": 3464
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 10.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 20.0
            },
            {
              "level": 4,
              "value": 25.0
            },
            {
              "level": 5,
              "value": 30.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 148,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 148
            },
            {
              "level": 2,
              "value": 163
            },
            {
              "level": 3,
              "value": 178
            },
            {
              "level": 4,
              "value": 192
            },
            {
              "level": 5,
              "value": 207
            }
          ]
        },
        {
          "id": "ghost_damage_modifier",
          "label": "对幽灵的伤害增加",
          "value": 50.0,
          "unit": "%"
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 50.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_range_halloween_23_pistol_7_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 7
            },
            {
              "id": "wls2_resourse_fourfold_nails_6",
              "name": "钨紧固件",
              "amount": 7
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_7",
              "name": "钼 枪部件",
              "amount": 3
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_halloween_23_pistol_7",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_halloween_23_pistol_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "dd1ce2c981e1f8db3aea5221fc903d64f2725ee6eb1e76b5fac9e36bbb30e04c"
    },
    {
      "id": "wls2_weapon_range_revolver_7_epic",
      "item_id": "wls2_weapon_range_revolver_7_epic",
      "name": "火山手枪",
      "name_en": "Volcanic pistol",
      "name_source": "official_zh",
      "description": "",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 7,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_revolver_7_epic_icon",
      "image_id": "wls2_weapon_range_revolver_7_epic",
      "equipment_id": "wls2_weapon_range_revolver_7_epic",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 190,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 190
            },
            {
              "level": 2,
              "value": 209
            },
            {
              "level": 3,
              "value": 228
            },
            {
              "level": 4,
              "value": 247
            },
            {
              "level": 5,
              "value": 266
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 300,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 3171,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 3171
            },
            {
              "level": 2,
              "value": 3488
            },
            {
              "level": 3,
              "value": 3805
            },
            {
              "level": 4,
              "value": 4123
            },
            {
              "level": 5,
              "value": 4440
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 7.5
            },
            {
              "level": 3,
              "value": 10.0
            },
            {
              "level": 4,
              "value": 15.0
            },
            {
              "level": 5,
              "value": 20.0
            }
          ]
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 7.5
            },
            {
              "level": 3,
              "value": 10.0
            },
            {
              "level": 4,
              "value": 15.0
            },
            {
              "level": 5,
              "value": 20.0
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 50.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_revolver_7_epic",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_7",
              "name": "钼 枪部件",
              "amount": 3
            },
            {
              "id": "wls2_resourse_epic_industrial_gunparts",
              "name": "工业零件",
              "amount": 6
            }
          ],
          "result_id": "wls2_weapon_range_revolver_7_epic",
          "result_name": "火山手枪",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_revolver_7_epic",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_range_revolver_7_epic_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "78f65abe60a51c14a46906cb41b3fda42fb93369901996987dacd298402ef410"
    },
    {
      "id": "wls2_weapon_range_revolver_7_common",
      "item_id": "wls2_weapon_range_revolver_7_common",
      "name": "纳甘 M1910",
      "name_en": "Nagant M1910",
      "name_source": "official_zh",
      "description": "重的，响的，占据着左轮手枪进化中独特的位置",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 7,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_revolver_7_common_icon",
      "image_id": "wls2_weapon_range_revolver_7_common",
      "equipment_id": "wls2_weapon_range_revolver_7_common",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 76,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 76
            },
            {
              "level": 2,
              "value": 84
            },
            {
              "level": 3,
              "value": 91
            },
            {
              "level": 4,
              "value": 99
            },
            {
              "level": 5,
              "value": 107
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 300,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1270,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1270
            },
            {
              "level": 2,
              "value": 1397
            },
            {
              "level": 3,
              "value": 1524
            },
            {
              "level": 4,
              "value": 1652
            },
            {
              "level": 5,
              "value": 1779
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 50.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_revolver_7_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_7",
              "name": "钼紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_7",
              "name": "钼 枪部件",
              "amount": 1
            }
          ],
          "result_id": "wls2_weapon_range_revolver_7_common",
          "result_name": "纳甘 M1910",
          "amount": 1,
          "min_level": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_revolver_7_common",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_range_revolver_7_common_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4b097d4fea1af29eeda7d919913f2c32eac914baf06519af05dd55181db56c42"
    },
    {
      "id": "wls2_weapon_range_revolver_7_uncommon",
      "item_id": "wls2_weapon_range_revolver_7_uncommon",
      "name": "罗斯-斯泰尔 1907",
      "name_en": "Roth-Steyr 1907",
      "name_source": "official_zh",
      "description": "不寻常像维也纳咖啡，但实用和设计精良",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 7,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_revolver_7_uncommon_icon",
      "image_id": "wls2_weapon_range_revolver_7_uncommon",
      "equipment_id": "wls2_weapon_range_revolver_7_uncommon",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 105,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 105
            },
            {
              "level": 2,
              "value": 116
            },
            {
              "level": 3,
              "value": 126
            },
            {
              "level": 4,
              "value": 137
            },
            {
              "level": 5,
              "value": 147
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 300,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1750,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1750
            },
            {
              "level": 2,
              "value": 1925
            },
            {
              "level": 3,
              "value": 2100
            },
            {
              "level": 4,
              "value": 2276
            },
            {
              "level": 5,
              "value": 2451
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 50.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_revolver_7_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_nails_7",
              "name": "钼紧固件",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_7",
              "name": "钼 枪部件",
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_range_revolver_7_uncommon",
          "result_name": "罗斯-斯泰尔 1907",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_range_revolver_7_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_range_revolver_7_uncommon_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "c18a4bdbc1c14b20df8b29fb19dcc82b9e2e14a21e0666249bd6057bf2031ae3"
    },
    {
      "id": "wls2_weapon_easter_22_7_epic_colt",
      "item_id": "wls2_weapon_easter_22_7_epic_colt",
      "name": "集市柯尔特左轮",
      "name_en": "Fair Colt",
      "name_source": "official_zh",
      "description": "闪亮且五颜六色的顶级柯尔特左轮。是时候找点乐子了！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 7,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_colt",
      "image_id": "wls2_weapon_easter_22_7_epic_colt",
      "equipment_id": "wls2_weapon_easter_22_7_epic_colt",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 190,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 190
            },
            {
              "level": 2,
              "value": 209
            },
            {
              "level": 3,
              "value": 228
            },
            {
              "level": 4,
              "value": 247
            },
            {
              "level": 5,
              "value": 266
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 300,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 3171,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 3171
            },
            {
              "level": 2,
              "value": 3488
            },
            {
              "level": 3,
              "value": 3805
            },
            {
              "level": 4,
              "value": 4123
            },
            {
              "level": 5,
              "value": 4440
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 7.5
            },
            {
              "level": 3,
              "value": 10.0
            },
            {
              "level": 4,
              "value": 15.0
            },
            {
              "level": 5,
              "value": 20.0
            }
          ]
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 7.5
            },
            {
              "level": 3,
              "value": 10.0
            },
            {
              "level": 4,
              "value": 15.0
            },
            {
              "level": 5,
              "value": 20.0
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 50.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_7_epic_colt_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_6",
              "name": "钨紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_6",
              "name": "钨枪部件",
              "amount": 4
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_7_epic_colt",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_colt_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4ad6966c738dbe7f579ff441f1819c0a24401d3d06b6a75b47cd52a88d1fcb0f"
    },
    {
      "id": "wls2_weapon_easter_22_colt_t7",
      "item_id": "wls2_weapon_easter_22_colt_t7",
      "name": "集市柯尔特左轮",
      "name_en": "Fair Colt",
      "name_source": "official_zh",
      "description": "闪亮且五颜六色的顶级柯尔特左轮。是时候找点乐子了！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_colt",
      "image_id": "wls2_weapon_easter_22_colt_t7",
      "equipment_id": "wls2_weapon_easter_22_colt_t7",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 250,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 2518,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2518
            },
            {
              "level": 2,
              "value": 2770
            },
            {
              "level": 3,
              "value": 3022
            },
            {
              "level": 4,
              "value": 3273
            },
            {
              "level": 5,
              "value": 3525
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 18.0
            },
            {
              "level": 3,
              "value": 21.0
            },
            {
              "level": 4,
              "value": 24.0
            },
            {
              "level": 5,
              "value": 27.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 151,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 151
            },
            {
              "level": 2,
              "value": 166
            },
            {
              "level": 3,
              "value": 181
            },
            {
              "level": 4,
              "value": 196
            },
            {
              "level": 5,
              "value": 211
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 50.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_colt_t7_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_5",
              "name": "合金紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
              "amount": 4
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_colt_t7",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_colt_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4ad6966c738dbe7f579ff441f1819c0a24401d3d06b6a75b47cd52a88d1fcb0f"
    },
    {
      "id": "wls2_weapon_easter_22_pepperbox_t7",
      "item_id": "wls2_weapon_easter_22_pepperbox_t7",
      "name": "集市胡椒盒手枪",
      "name_en": "Fair Pepperbox",
      "name_source": "official_zh",
      "description": "耀眼！聒噪！就像集市的烟花一样。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_pepperbox",
      "image_id": "wls2_weapon_easter_22_pepperbox_t7",
      "equipment_id": "wls2_weapon_easter_22_pepperbox_t7",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 300,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1229,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1229
            },
            {
              "level": 2,
              "value": 1352
            },
            {
              "level": 3,
              "value": 1475
            },
            {
              "level": 4,
              "value": 1598
            },
            {
              "level": 5,
              "value": 1721
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 8.0
            },
            {
              "level": 3,
              "value": 10.0
            },
            {
              "level": 4,
              "value": 13.0
            },
            {
              "level": 5,
              "value": 15.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 74,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 74
            },
            {
              "level": 2,
              "value": 81
            },
            {
              "level": 3,
              "value": 89
            },
            {
              "level": 4,
              "value": 96
            },
            {
              "level": 5,
              "value": 104
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 50.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_pepperbox_t7_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_6",
              "name": "钨紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_6",
              "name": "钨枪部件",
              "amount": 4
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_pepperbox_t7",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_pepperbox_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "48dbba8973c8ec0a2f19a45a194fd7defe67d00f08f7e838e203f59413ea1fb2"
    },
    {
      "id": "wls2_weapon_easter_22_mallet_t7",
      "item_id": "wls2_weapon_easter_22_mallet_t7",
      "name": "复活节木槌",
      "name_en": "Easter Mallet",
      "name_source": "official_zh",
      "description": "一把集市上的彩色木槌。柄上写着：“晚安”。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "棍棒与锤",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_mallet",
      "image_id": "wls2_weapon_easter_22_mallet_t7",
      "equipment_id": "wls2_weapon_easter_22_mallet_t7",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 2154,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2154
            },
            {
              "level": 2,
              "value": 2369
            },
            {
              "level": 3,
              "value": 2585
            },
            {
              "level": 4,
              "value": 2800
            },
            {
              "level": 5,
              "value": 3016
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 5.0
            },
            {
              "level": 2,
              "value": 8.0
            },
            {
              "level": 3,
              "value": 10.0
            },
            {
              "level": 4,
              "value": 13.0
            },
            {
              "level": 5,
              "value": 15.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 129,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 129
            },
            {
              "level": 2,
              "value": 142
            },
            {
              "level": 3,
              "value": 155
            },
            {
              "level": 4,
              "value": 168
            },
            {
              "level": 5,
              "value": 181
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_mallet_t7_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_6",
              "name": "桤木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_6",
              "name": "坚固的皮革",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 2
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_mallet_t7",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_mallet_name",
        "sorting_group": "weapon_melee_mace_mallet",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "860034db285f055a40f2f5eed90b3fd608bd3c29d8adae878d8038239224dd46"
    },
    {
      "id": "wls2_weapon_easter_22_mace_t7",
      "item_id": "wls2_weapon_easter_22_mace_t7",
      "name": "彩绘狼牙棒",
      "name_en": "Painted Mace",
      "name_source": "official_zh",
      "description": "涂有节日彩绘的近战武器，适合用来砸烂彩蛋，以及脑袋。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "棍棒与锤",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_mace",
      "image_id": "wls2_weapon_easter_22_mace_t7",
      "equipment_id": "wls2_weapon_easter_22_mace_t7",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 118,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 118
            },
            {
              "level": 2,
              "value": 130
            },
            {
              "level": 3,
              "value": 142
            },
            {
              "level": 4,
              "value": 153
            },
            {
              "level": 5,
              "value": 165
            }
          ]
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1961,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1961
            },
            {
              "level": 2,
              "value": 2157
            },
            {
              "level": 3,
              "value": 2353
            },
            {
              "level": 4,
              "value": 2549
            },
            {
              "level": 5,
              "value": 2745
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 8.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 8.0
            },
            {
              "level": 2,
              "value": 10.0
            },
            {
              "level": 3,
              "value": 15.0
            },
            {
              "level": 4,
              "value": 18.0
            },
            {
              "level": 5,
              "value": 20.0
            }
          ]
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
          "value": 15.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 15.0
            },
            {
              "level": 2,
              "value": 30.0
            },
            {
              "level": 3,
              "value": 50.0
            },
            {
              "level": 4,
              "value": 70.0
            },
            {
              "level": 5,
              "value": 100
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_mace_t7_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_6",
              "name": "桤木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 2
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_weapon_easter_22_mace_t7",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_easter_mace_name",
        "sorting_group": "weapon_melee_mace_mallet",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4359f4620e9a54f4108fa4f18a03fef601cfd512f8801a51b0ee2b8b24c18150"
    }
  ]
};
