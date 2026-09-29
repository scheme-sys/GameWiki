/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-inventory-5"] = {
  "section": "inventory",
  "records": [
    {
      "id": "wls2_xmas_23_weapon_range_rifle_7_epic",
      "item_id": "wls2_xmas_23_weapon_range_rifle_7_epic",
      "name": "极光",
      "name_en": "Aurora",
      "name_source": "official_zh",
      "description": "这支滑膛枪会让你的敌人惊慌失措！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 7,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_xmas_22_weapon_range_rifle_5_rare",
      "image_id": "wls2_xmas_23_weapon_range_rifle_7_epic",
      "equipment_id": "wls2_xmas_23_weapon_range_rifle_7_epic",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 400,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 400
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
          "value": 330,
          "unit": ""
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 50.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_xmas_23_weapon_range_rifle_7_epic_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_7",
              "name": "山核桃木板",
              "amount": 5
            },
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 7
            },
            {
              "id": "wls2_resourse_fourfold_nails_6",
              "name": "钨紧固件",
              "amount": 5
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_7",
              "name": "钼 枪部件",
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
        "id": "wls2_xmas_23_weapon_range_rifle_7_epic",
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
      "id": "wls2_weapon_range_rifle_7_common",
      "item_id": "wls2_weapon_range_rifle_7_common",
      "name": "温彻斯特 1907",
      "name_en": "Winchester 1907",
      "name_source": "official_zh",
      "description": "最早的半自动步枪之一",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 7,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_rifle_7_common_icon",
      "image_id": "wls2_weapon_range_rifle_7_common",
      "equipment_id": "wls2_weapon_range_rifle_7_common",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 91,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 91
            },
            {
              "level": 2,
              "value": 101
            },
            {
              "level": 3,
              "value": 110
            },
            {
              "level": 4,
              "value": 119
            },
            {
              "level": 5,
              "value": 128
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
          "value": 1523,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1523
            },
            {
              "level": 2,
              "value": 1676
            },
            {
              "level": 3,
              "value": 1828
            },
            {
              "level": 4,
              "value": 1980
            },
            {
              "level": 5,
              "value": 2132
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 50.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_rifle_7_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_7",
              "name": "山核桃木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_7",
              "name": "钼紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_7",
              "name": "钼 枪部件",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_range_rifle_7_common",
          "result_name": "温彻斯特 1907",
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
        "id": "wls2_weapon_range_rifle_7_common",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_range_rifle_7_common_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "31e6df53d3a7a1cbf1ae78a3513d6e1779b17bcc6086cfa1a7c937d2eb3043bd"
    },
    {
      "id": "wls2_weapon_range_rifle_7_epic",
      "item_id": "wls2_weapon_range_rifle_7_epic",
      "name": "胡奥特自动步枪",
      "name_en": "Huot automatic rifle",
      "name_source": "official_zh",
      "description": "",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 7,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_rifle_7_epic_icon",
      "image_id": "wls2_weapon_range_rifle_7_epic",
      "equipment_id": "wls2_weapon_range_rifle_7_epic",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 228,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 228
            },
            {
              "level": 2,
              "value": 251
            },
            {
              "level": 3,
              "value": 274
            },
            {
              "level": 4,
              "value": 297
            },
            {
              "level": 5,
              "value": 320
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
          "value": 3806,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 3806
            },
            {
              "level": 2,
              "value": 4187
            },
            {
              "level": 3,
              "value": 4568
            },
            {
              "level": 4,
              "value": 4948
            },
            {
              "level": 5,
              "value": 5329
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
          "value": 50.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_rifle_7_epic",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_7",
              "name": "山核桃木板",
              "amount": 10
            },
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_7",
              "name": "钼 枪部件",
              "amount": 5
            },
            {
              "id": "wls2_resourse_epic_industrial_gunparts",
              "name": "工业零件",
              "amount": 10
            }
          ],
          "result_id": "wls2_weapon_range_rifle_7_epic",
          "result_name": "胡奥特自动步枪",
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
        "id": "wls2_weapon_range_rifle_7_epic",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_range_rifle_7_epic_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "22ac74a40c7aa1929850ac130e03c1da76f6e2625cef30692a775873bc90816f"
    },
    {
      "id": "wls2_weapon_range_rifle_7_rare",
      "item_id": "wls2_weapon_range_rifle_7_rare",
      "name": "蒙德拉贡 M1908",
      "name_en": "Mondragón M1908",
      "name_source": "official_zh",
      "description": "",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_rifle_7_rare_icon",
      "image_id": "wls2_weapon_range_rifle_7_rare",
      "equipment_id": "wls2_weapon_range_rifle_7_rare",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 178,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 178
            },
            {
              "level": 2,
              "value": 196
            },
            {
              "level": 3,
              "value": 214
            },
            {
              "level": 4,
              "value": 231
            },
            {
              "level": 5,
              "value": 249
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
          "value": 2966,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2966
            },
            {
              "level": 2,
              "value": 3263
            },
            {
              "level": 3,
              "value": 3560
            },
            {
              "level": 4,
              "value": 3856
            },
            {
              "level": 5,
              "value": 4153
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
          "value": 50.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_rifle_7_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_7",
              "name": "山核桃木板",
              "amount": 8
            },
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_7",
              "name": "钼紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_7",
              "name": "钼 枪部件",
              "amount": 8
            }
          ],
          "result_id": "wls2_weapon_range_rifle_7_rare",
          "result_name": "蒙德拉贡 M1908",
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
        "id": "wls2_weapon_range_rifle_7_rare",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_range_rifle_7_rare_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "0ea43203febbe2e2aa959eb60cca8133e400e6f74b5f0dd95b5c641d8fb3bb75"
    },
    {
      "id": "wls2_weapon_range_rifle_7_uncommon",
      "item_id": "wls2_weapon_range_rifle_7_uncommon",
      "name": "雷明顿8型",
      "name_en": "Remington Model 8",
      "name_source": "official_zh",
      "description": "步枪可以轻松地拆卸用于运输和清洁",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 7,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_rifle_7_uncommon_icon",
      "image_id": "wls2_weapon_range_rifle_7_uncommon",
      "equipment_id": "wls2_weapon_range_rifle_7_uncommon",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 126,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 126
            },
            {
              "level": 2,
              "value": 139
            },
            {
              "level": 3,
              "value": 151
            },
            {
              "level": 4,
              "value": 164
            },
            {
              "level": 5,
              "value": 176
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
          "value": 2101,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2101
            },
            {
              "level": 2,
              "value": 2311
            },
            {
              "level": 3,
              "value": 2521
            },
            {
              "level": 4,
              "value": 2731
            },
            {
              "level": 5,
              "value": 2941
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 50.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_rifle_7_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_7",
              "name": "山核桃木板",
              "amount": 6
            },
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_nails_7",
              "name": "钼紧固件",
              "amount": 3
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_7",
              "name": "钼 枪部件",
              "amount": 6
            }
          ],
          "result_id": "wls2_weapon_range_rifle_7_uncommon",
          "result_name": "雷明顿8型",
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
        "id": "wls2_weapon_range_rifle_7_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_range_rifle_7_uncommon_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "7c9d2edef4c8092aa8ff59c2262640fae8542c5796eedc35a9dc4f3c7b3f4b17"
    },
    {
      "id": "wls2_weapon_melee_knife_7_uncommon",
      "item_id": "wls2_weapon_melee_knife_7_uncommon",
      "name": "屠夫的刀",
      "name_en": "Butcher's Blade",
      "name_source": "official_zh",
      "description": "长刃刀，设计用于与火器一起使用",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 7,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_melee_knife_7_uncommon_icon",
      "image_id": "wls2_weapon_melee_knife_7_uncommon",
      "equipment_id": "wls2_weapon_melee_knife_7_uncommon",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 64,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 64
            },
            {
              "level": 2,
              "value": 71
            },
            {
              "level": 3,
              "value": 77
            },
            {
              "level": 4,
              "value": 83
            },
            {
              "level": 5,
              "value": 90
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
          "value": 1070,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1070
            },
            {
              "level": 2,
              "value": 1177
            },
            {
              "level": 3,
              "value": 1284
            },
            {
              "level": 4,
              "value": 1392
            },
            {
              "level": 5,
              "value": 1499
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
          "id": "wls2_weapon_melee_knife_7_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 8
            },
            {
              "id": "wls2_resourse_secondary_leather_7",
              "name": "密集皮革",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_melee_knife_7_uncommon",
          "result_name": "屠夫的刀",
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
        "id": "wls2_weapon_melee_knife_7_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_melee_knife_7_uncommon_name",
        "sorting_group": "weapon_melee_knife",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "e9799651a65766b99a5536f0c99f41efc73c515fdb5d089045c6ebd2c24b6502"
    },
    {
      "id": "wls2_weapon_melee_knife_7_common",
      "item_id": "wls2_weapon_melee_knife_7_common",
      "name": "德玛格刺刀",
      "name_en": "Bayonet Demag",
      "name_source": "official_zh",
      "description": "具有独特的“曲柄手柄”形状",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 7,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_melee_knife_7_common_icon",
      "image_id": "wls2_weapon_melee_knife_7_common",
      "equipment_id": "wls2_weapon_melee_knife_7_common",
      "stats": [
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
              "value": 65
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
          "value": 776,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 776
            },
            {
              "level": 2,
              "value": 854
            },
            {
              "level": 3,
              "value": 931
            },
            {
              "level": 4,
              "value": 1009
            },
            {
              "level": 5,
              "value": 1086
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
          "id": "wls2_weapon_melee_knife_7_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_7",
              "name": "密集皮革",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 1
            }
          ],
          "result_id": "wls2_weapon_melee_knife_7_common",
          "result_name": "德玛格刺刀",
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
        "id": "wls2_weapon_melee_knife_7_common",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_melee_knife_7_common_name",
        "sorting_group": "weapon_melee_knife",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "92d378fd4d99ffe5885989a141a45355f2a6a24f76c4c912aa0437b0d5b956c0"
    },
    {
      "id": "wls2_weapon_melee_knife_7_rare",
      "item_id": "wls2_weapon_melee_knife_7_rare",
      "name": "战壕刀 M1918",
      "name_en": "Trench Knife M1918",
      "name_source": "official_zh",
      "description": "",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_melee_knife_7_rare_icon",
      "image_id": "wls2_weapon_melee_knife_7_rare",
      "equipment_id": "wls2_weapon_melee_knife_7_rare",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 91,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 91
            },
            {
              "level": 2,
              "value": 100
            },
            {
              "level": 3,
              "value": 109
            },
            {
              "level": 4,
              "value": 118
            },
            {
              "level": 5,
              "value": 127
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
          "value": 1510,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1510
            },
            {
              "level": 2,
              "value": 1661
            },
            {
              "level": 3,
              "value": 1812
            },
            {
              "level": 4,
              "value": 1964
            },
            {
              "level": 5,
              "value": 2115
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
          "id": "wls2_weapon_melee_knife_7_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 10
            },
            {
              "id": "wls2_resourse_secondary_leather_7",
              "name": "密集皮革",
              "amount": 6
            },
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_melee_knife_7_rare",
          "result_name": "战壕刀 M1918",
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
        "id": "wls2_weapon_melee_knife_7_rare",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_melee_knife_7_rare_name",
        "sorting_group": "weapon_melee_knife",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "e6787308b2d6b6faf7e25a5baa0cef8ad5c1feaa6949cc36b1df08493b2bf3c0"
    },
    {
      "id": "wls2_weapon_melee_knife_7_epic",
      "item_id": "wls2_weapon_melee_knife_7_epic",
      "name": "猎人小刀",
      "name_en": "Hunter's knife",
      "name_source": "official_zh",
      "description": "",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 7,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_melee_knife_7_epic_icon",
      "image_id": "wls2_weapon_melee_knife_7_epic",
      "equipment_id": "wls2_weapon_melee_knife_7_epic",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 116,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 116
            },
            {
              "level": 2,
              "value": 128
            },
            {
              "level": 3,
              "value": 139
            },
            {
              "level": 4,
              "value": 151
            },
            {
              "level": 5,
              "value": 163
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
          "value": 1936,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1936
            },
            {
              "level": 2,
              "value": 2130
            },
            {
              "level": 3,
              "value": 2323
            },
            {
              "level": 4,
              "value": 2517
            },
            {
              "level": 5,
              "value": 2710
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
          "value": 50.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_knife_7_epic",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 10
            },
            {
              "id": "wls2_resourse_secondary_leather_7",
              "name": "密集皮革",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 2
            },
            {
              "id": "wls2_resourse_epic_rubber",
              "name": "橡胶",
              "amount": 5
            }
          ],
          "result_id": "wls2_weapon_melee_knife_7_epic",
          "result_name": "猎人小刀",
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
        "id": "wls2_weapon_melee_knife_7_epic",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_melee_knife_7_epic_name",
        "sorting_group": "weapon_melee_knife",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "c4d084a9c83639ea848ac9eb8cb50714b509da5165c93f549862f181c4fc4c9a"
    },
    {
      "id": "wls2_weapon_range_shotgun_7_uncommon",
      "item_id": "wls2_weapon_range_shotgun_7_uncommon",
      "name": "Sjogren 霰弹枪",
      "name_en": "Sjogren Shotgun",
      "name_source": "official_zh",
      "description": "瑞典发明家设计的惯性系统在现代霰弹枪中变得普遍",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 7,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_shotgun_7_uncommon_icon",
      "image_id": "wls2_weapon_range_shotgun_7_uncommon",
      "equipment_id": "wls2_weapon_range_shotgun_7_uncommon",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 59,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 59
            },
            {
              "level": 2,
              "value": 64
            },
            {
              "level": 3,
              "value": 70
            },
            {
              "level": 4,
              "value": 76
            },
            {
              "level": 5,
              "value": 82
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
          "value": 2050,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2050
            },
            {
              "level": 2,
              "value": 2250
            },
            {
              "level": 3,
              "value": 2450
            },
            {
              "level": 4,
              "value": 2650
            },
            {
              "level": 5,
              "value": 2850
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
          "id": "wls2_weapon_range_shotgun_7_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_7",
              "name": "山核桃木板",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_nails_7",
              "name": "钼紧固件",
              "amount": 3
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_7",
              "name": "钼 枪部件",
              "amount": 6
            }
          ],
          "result_id": "wls2_weapon_range_shotgun_7_uncommon",
          "result_name": "Sjogren 霰弹枪",
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
        "id": "wls2_weapon_range_shotgun_7_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_range_shotgun_7_uncommon_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a89f7aabe9ec9db7d146c2c07986eb3d47a896679e0a46221143c26017e495ee"
    },
    {
      "id": "wls2_weapon_range_shotgun_7_epic",
      "item_id": "wls2_weapon_range_shotgun_7_epic",
      "name": "伊萨卡 模型 37",
      "name_en": "Ithaka Model 37",
      "name_source": "official_zh",
      "description": "",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 7,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_7_epic_icon",
      "image_id": "wls2_weapon_range_shotgun_7_epic",
      "equipment_id": "wls2_weapon_range_shotgun_7_epic",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 106,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 106
            },
            {
              "level": 2,
              "value": 117
            },
            {
              "level": 3,
              "value": 127
            },
            {
              "level": 4,
              "value": 138
            },
            {
              "level": 5,
              "value": 149
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
          "value": 3650,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 3650
            },
            {
              "level": 2,
              "value": 4000
            },
            {
              "level": 3,
              "value": 4350
            },
            {
              "level": 4,
              "value": 4700
            },
            {
              "level": 5,
              "value": 5050
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
          "value": 500,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 500
            },
            {
              "level": 2,
              "value": 550
            },
            {
              "level": 3,
              "value": 600
            },
            {
              "level": 4,
              "value": 650
            },
            {
              "level": 5,
              "value": 700
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_shotgun_7_epic",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_7",
              "name": "山核桃木板",
              "amount": 5
            },
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_7",
              "name": "钼 枪部件",
              "amount": 5
            },
            {
              "id": "wls2_resourse_epic_industrial_gunparts",
              "name": "工业零件",
              "amount": 10
            }
          ],
          "result_id": "wls2_weapon_range_shotgun_7_epic",
          "result_name": "伊萨卡 模型 37",
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
        "id": "wls2_weapon_range_shotgun_7_epic",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_range_shotgun_7_epic_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "46da834f84afe2a0d558e95bf7fbc9cf65e954e4c5802af685281f98b87c002b"
    },
    {
      "id": "wls2_weapon_easter_22_shotgun_3_t7",
      "item_id": "wls2_weapon_easter_22_shotgun_3_t7",
      "name": "吉尔的霰弹枪",
      "name_en": "Jill's Shotgun",
      "name_source": "official_zh",
      "description": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_3",
      "image_id": "wls2_weapon_easter_22_shotgun_3_t7",
      "equipment_id": "wls2_weapon_easter_22_shotgun_3_t7",
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
          "value": 2477,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2477
            },
            {
              "level": 2,
              "value": 2725
            },
            {
              "level": 3,
              "value": 2972
            },
            {
              "level": 4,
              "value": 3220
            },
            {
              "level": 5,
              "value": 3468
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
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_shotgun_3_t7_recycle",
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
        "id": "wls2_weapon_easter_22_shotgun_3_t7",
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
      "id": "wls2_weapon_ws_day2024_shotgun_7",
      "item_id": "wls2_weapon_ws_day2024_shotgun_7",
      "name": "周年庆散弹枪",
      "name_en": "Anniversary shotgun",
      "name_source": "official_zh",
      "description": "奖励武器。用来射击和炫耀都很合适！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 7,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_shotgun",
      "image_id": "wls2_weapon_ws_day2024_shotgun_7",
      "equipment_id": "wls2_weapon_ws_day2024_shotgun_7",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 83,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 83
            },
            {
              "level": 2,
              "value": 91
            },
            {
              "level": 3,
              "value": 100
            },
            {
              "level": 4,
              "value": 108
            },
            {
              "level": 5,
              "value": 116
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
          "value": 2760,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2760
            },
            {
              "level": 2,
              "value": 3036
            },
            {
              "level": 3,
              "value": 3312
            },
            {
              "level": 4,
              "value": 3588
            },
            {
              "level": 5,
              "value": 3864
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
          "id": "wls2_weapon_ws_day2024_shotgun_7_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_6",
              "name": "桤木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_7",
              "name": "钼紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_7",
              "name": "钼 枪部件",
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
        "id": "wls2_weapon_ws_day2024_shotgun_7",
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
      "id": "wls2_weapon_easter_22_shotgun_1_t7",
      "item_id": "wls2_weapon_easter_22_shotgun_1_t7",
      "name": "彩炮 II",
      "name_en": "Confetti II",
      "name_source": "official_zh",
      "description": "虽然叫彩炮，但它射的可不是彩色纸屑。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 7,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_1",
      "image_id": "wls2_weapon_easter_22_shotgun_1_t7",
      "equipment_id": "wls2_weapon_easter_22_shotgun_1_t7",
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
          "value": 1163,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1163
            },
            {
              "level": 2,
              "value": 1279
            },
            {
              "level": 3,
              "value": 1396
            },
            {
              "level": 4,
              "value": 1512
            },
            {
              "level": 5,
              "value": 1628
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
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
              "value": 39
            },
            {
              "level": 3,
              "value": 42
            },
            {
              "level": 4,
              "value": 46
            },
            {
              "level": 5,
              "value": 49
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_shotgun_1_t7_recycle",
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
        "id": "wls2_weapon_easter_22_shotgun_1_t7",
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
      "id": "wls2_weapon_xmas2024_shotgun_7",
      "item_id": "wls2_weapon_xmas2024_shotgun_7",
      "name": "暴风雪",
      "name_en": "Blizzard",
      "name_source": "official_zh",
      "description": "没有人能阻止自然的力量",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 7,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_xmas_24_shotgun",
      "image_id": "wls2_weapon_xmas2024_shotgun_7",
      "equipment_id": "wls2_weapon_xmas2024_shotgun_7",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 106,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 106
            },
            {
              "level": 2,
              "value": 117
            },
            {
              "level": 3,
              "value": 127
            },
            {
              "level": 4,
              "value": 138
            },
            {
              "level": 5,
              "value": 148
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
          "value": 3538,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 3538
            },
            {
              "level": 2,
              "value": 3892
            },
            {
              "level": 3,
              "value": 4246
            },
            {
              "level": 4,
              "value": 4599
            },
            {
              "level": 5,
              "value": 4953
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
          "id": "wls2_weapon_xmas2024_shotgun_7_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_7",
              "name": "钼紧固件",
              "amount": 2
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
        "id": "wls2_weapon_xmas2024_shotgun_7",
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
      "id": "wls2_weapon_range_shotgun_7_rare",
      "item_id": "wls2_weapon_range_shotgun_7_rare",
      "name": "温彻斯特 模型 1912",
      "name_en": "Winchester Model 1912",
      "name_source": "official_zh",
      "description": "",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_shotgun_7_rare_icon",
      "image_id": "wls2_weapon_range_shotgun_7_rare",
      "equipment_id": "wls2_weapon_range_shotgun_7_rare",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 83,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 83
            },
            {
              "level": 2,
              "value": 91
            },
            {
              "level": 3,
              "value": 99
            },
            {
              "level": 4,
              "value": 108
            },
            {
              "level": 5,
              "value": 116
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
          "value": 2850,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2850
            },
            {
              "level": 2,
              "value": 3150
            },
            {
              "level": 3,
              "value": 3400
            },
            {
              "level": 4,
              "value": 3700
            },
            {
              "level": 5,
              "value": 3950
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
          "id": "wls2_weapon_range_shotgun_7_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_7",
              "name": "山核桃木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_7",
              "name": "钼紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_7",
              "name": "钼 枪部件",
              "amount": 8
            }
          ],
          "result_id": "wls2_weapon_range_shotgun_7_rare",
          "result_name": "温彻斯特 模型 1912",
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
        "id": "wls2_weapon_range_shotgun_7_rare",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_range_shotgun_7_rare_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "bf80aec6fc64d114e414bb249cc0ab1cf76e2120b38ea7c8249ac4c6c09e4e35"
    },
    {
      "id": "wls2_weapon_lunar_shotgun_7_rare",
      "item_id": "wls2_weapon_lunar_shotgun_7_rare",
      "name": "火焰 霰弹枪",
      "name_en": "Flame shotgun",
      "name_source": "official_zh",
      "description": "一发子弹像一群火热的马将打击你的敌人",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 7,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_lunar_icon",
      "image_id": "wls2_weapon_lunar_shotgun_7_rare",
      "equipment_id": "wls2_weapon_lunar_shotgun_7_rare",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 83,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 83
            },
            {
              "level": 2,
              "value": 91
            },
            {
              "level": 3,
              "value": 99
            },
            {
              "level": 4,
              "value": 108
            },
            {
              "level": 5,
              "value": 116
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
          "value": 2850,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2850
            },
            {
              "level": 2,
              "value": 3150
            },
            {
              "level": 3,
              "value": 3400
            },
            {
              "level": 4,
              "value": 3700
            },
            {
              "level": 5,
              "value": 3950
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
          "value": 285,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 285
            },
            {
              "level": 2,
              "value": 315
            },
            {
              "level": 3,
              "value": 340
            },
            {
              "level": 4,
              "value": 370
            },
            {
              "level": 5,
              "value": 400
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_lunar_shotgun_7_rare_recycle",
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
        "id": "wls2_weapon_lunar_shotgun_7_rare",
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
      "id": "wls2_weapon_easter_22_shotgun_2_t7",
      "item_id": "wls2_weapon_easter_22_shotgun_2_t7",
      "name": "爆笑",
      "name_en": "Killing Joke",
      "name_source": "official_zh",
      "description": "可能也没那么好笑，但是很好射！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 7,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_2",
      "image_id": "wls2_weapon_easter_22_shotgun_2_t7",
      "equipment_id": "wls2_weapon_easter_22_shotgun_2_t7",
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
          "value": 1924,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1924
            },
            {
              "level": 2,
              "value": 2116
            },
            {
              "level": 3,
              "value": 2309
            },
            {
              "level": 4,
              "value": 2501
            },
            {
              "level": 5,
              "value": 2694
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 58,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 58
            },
            {
              "level": 2,
              "value": 64
            },
            {
              "level": 3,
              "value": 70
            },
            {
              "level": 4,
              "value": 75
            },
            {
              "level": 5,
              "value": 81
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_shotgun_2_t7_recycle",
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
        "id": "wls2_weapon_easter_22_shotgun_2_t7",
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
      "id": "wls2_weapon_range_shotgun_7_common",
      "item_id": "wls2_weapon_range_shotgun_7_common",
      "name": "自动 & 盗贼 枪",
      "name_en": "Auto & Burglar Gun",
      "name_source": "official_zh",
      "description": "短管霰弹枪带有手枪握把",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 7,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_weapon_range_shotgun_7_common_icon",
      "image_id": "wls2_weapon_range_shotgun_7_common",
      "equipment_id": "wls2_weapon_range_shotgun_7_common",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 42,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 42
            },
            {
              "level": 2,
              "value": 47
            },
            {
              "level": 3,
              "value": 51
            },
            {
              "level": 4,
              "value": 55
            },
            {
              "level": 5,
              "value": 59
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
          "value": 1520,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1520
            },
            {
              "level": 2,
              "value": 1660
            },
            {
              "level": 3,
              "value": 1800
            },
            {
              "level": 4,
              "value": 1950
            },
            {
              "level": 5,
              "value": 2080
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
          "id": "wls2_weapon_range_shotgun_7_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_7",
              "name": "山核桃木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_7",
              "name": "钼紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_7",
              "name": "钼 枪部件",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_range_shotgun_7_common",
          "result_name": "自动 & 盗贼 枪",
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
        "id": "wls2_weapon_range_shotgun_7_common",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_range_shotgun_7_common_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ddccce5beaf13585b0a6b247f145f05e6034950d6926bfc38384192679d1a5bd"
    },
    {
      "id": "wls_xmas2019_red_jacket",
      "item_id": "wls_xmas2019_red_jacket",
      "name": "圣诞老人的红色外套",
      "name_en": "Santa's red jacket",
      "name_source": "official_zh",
      "description": "结实耐寒的外套，能够承受敌人的攻击。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_jacket",
      "image_id": "wls_xmas2019_red_jacket",
      "equipment_id": "wls_xmas2019_red_jacket",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1500,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 110,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 2.25,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_xmas2019_red_jacket_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_hide_3",
              "name": "兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
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
        "id": "wls_xmas2019_red_jacket",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_xmas_red_jacket_name",
        "sorting_group": "armor_body",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "c501388d571f728bcee3cf8d3307ca2fe635b2232e4d9476682197b34c5ab0c9"
    },
    {
      "id": "wls_xmas_red_jacket",
      "item_id": "wls_xmas_red_jacket",
      "name": "圣诞老人的红色外套",
      "name_en": "Santa's red jacket",
      "name_source": "official_zh",
      "description": "结实耐寒的外套，能够承受敌人的攻击。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_jacket",
      "image_id": "wls_xmas_red_jacket",
      "equipment_id": "wls_xmas_red_jacket",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1020,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 40,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 2.25,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_xmas_red_jacket_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_hide_2",
              "name": "薄兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 1
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
        "id": "wls_xmas_red_jacket",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_xmas_red_jacket_name",
        "sorting_group": "armor_body",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "c501388d571f728bcee3cf8d3307ca2fe635b2232e4d9476682197b34c5ab0c9"
    },
    {
      "id": "wls_xmas2019_green_jacket",
      "item_id": "wls_xmas2019_green_jacket",
      "name": "圣诞老人的绿色外套",
      "name_en": "Santa's green jacket",
      "name_source": "official_zh",
      "description": "结实耐寒的外套，能够承受敌人的攻击。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_jacket",
      "image_id": "wls_xmas2019_green_jacket",
      "equipment_id": "wls_xmas2019_green_jacket",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1150,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 90,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 2.25,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_xmas2019_green_jacket_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_hide_3",
              "name": "兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
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
        "id": "wls_xmas2019_green_jacket",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_xmas_green_jacket_name",
        "sorting_group": "armor_body",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ecd1c33dc41a62b77a64fe947b9a7c1308c82a2aab31b6241103be10e4682597"
    },
    {
      "id": "wls_xmas_green_jacket",
      "item_id": "wls_xmas_green_jacket",
      "name": "圣诞老人的绿色外套",
      "name_en": "Santa's green jacket",
      "name_source": "official_zh",
      "description": "结实耐寒的外套，能够承受敌人的攻击。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_jacket",
      "image_id": "wls_xmas_green_jacket",
      "equipment_id": "wls_xmas_green_jacket",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1020,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 25,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 2.25,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_xmas_green_jacket_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_hide_2",
              "name": "薄兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 1
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
        "id": "wls_xmas_green_jacket",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_xmas_green_jacket_name",
        "sorting_group": "armor_body",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ecd1c33dc41a62b77a64fe947b9a7c1308c82a2aab31b6241103be10e4682597"
    },
    {
      "id": "wls2_armor_body_1_uncommon",
      "item_id": "wls2_armor_body_1_uncommon",
      "name": "背心",
      "name_en": "Waistcoat",
      "name_source": "official_zh",
      "description": "是绅士就该穿背心",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 1,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_vest_jacketed_1.5",
      "image_id": "wls2_armor_body_1_uncommon",
      "equipment_id": "wls2_armor_body_1_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 180,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 180
            },
            {
              "level": 2,
              "value": 195
            },
            {
              "level": 3,
              "value": 210
            },
            {
              "level": 4,
              "value": 225
            },
            {
              "level": 5,
              "value": 240
            }
          ]
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 22,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 22
            },
            {
              "level": 2,
              "value": 24
            },
            {
              "level": 3,
              "value": 26
            },
            {
              "level": 4,
              "value": 28
            },
            {
              "level": 5,
              "value": 31
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 1,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1
            },
            {
              "level": 2,
              "value": 1
            },
            {
              "level": 3,
              "value": 1
            },
            {
              "level": 4,
              "value": 2
            },
            {
              "level": 5,
              "value": 3
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_armor_body_1_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_1",
              "name": "薄皮革",
              "amount": 7
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_1",
              "name": "布卷",
              "amount": 1
            }
          ],
          "result_id": "wls2_armor_body_1_uncommon",
          "result_name": "背心",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_ftue_ab_tutorial_trader_slot_1",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_armor_body_1_uncommon",
          "result_name": "背心",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_armor_body_1_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_armor_body_1_uncommon_name",
        "sorting_group": "armor_body",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ad3a2c57fd5ccadfae75effb5711647df04d390137173ba538b831a87f0a4f8e"
    },
    {
      "id": "wls2_armor_body_upgrade_1",
      "item_id": "wls2_armor_body_upgrade_1",
      "name": "背心衬衫",
      "name_en": "Vest with a shirt",
      "name_source": "official_zh",
      "description": "是绅士就该穿背心。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 1,
      "rarity": null,
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_vest_jacketed_1.5",
      "image_id": "wls2_armor_body_upgrade_1",
      "equipment_id": "wls2_armor_body_upgrade_1",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 50,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 30,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 0.75,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_armor_body_upgrade_1",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_clothes_vest_jacketed_1.5_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ad3a2c57fd5ccadfae75effb5711647df04d390137173ba538b831a87f0a4f8e"
    },
    {
      "id": "wls2_armor_body_1",
      "item_id": "wls2_armor_body_1",
      "name": "衬衫",
      "name_en": "Shirt",
      "name_source": "official_zh",
      "description": "真正的牛仔衣柜里必须得有一件衬衫。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 1,
      "rarity": null,
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_shirt_1",
      "image_id": "wls2_armor_body_1",
      "equipment_id": "wls2_armor_body_1",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 25,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 10,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 0.5,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_armor_body_1",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_clothes_shirt_1_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "9c2bc3ebfc1059d1028b6b6123d7fc7116519636ce46b719c507134ce584dcc7"
    },
    {
      "id": "wls2_armor_body_1_common",
      "item_id": "wls2_armor_body_1_common",
      "name": "衬衫",
      "name_en": "Shirt",
      "name_source": "official_zh",
      "description": "使你免受小型野生动物啃咬",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_shirt_1",
      "image_id": "wls2_armor_body_1_common",
      "equipment_id": "wls2_armor_body_1_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 150
            },
            {
              "level": 2,
              "value": 165
            },
            {
              "level": 3,
              "value": 180
            },
            {
              "level": 4,
              "value": 195
            },
            {
              "level": 5,
              "value": 210
            }
          ]
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 18,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 18
            },
            {
              "level": 2,
              "value": 19
            },
            {
              "level": 3,
              "value": 21
            },
            {
              "level": 4,
              "value": 23
            },
            {
              "level": 5,
              "value": 25
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
          "id": "wls2_armor_body_1_common_ab_ftue",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 2
            }
          ],
          "result_id": "wls2_armor_body_1_common",
          "result_name": "衬衫",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_armor_body_1_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 2
            }
          ],
          "result_id": "wls2_armor_body_1_common",
          "result_name": "衬衫",
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
        "id": "wls2_armor_body_1_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_armor_body_1_common_name",
        "sorting_group": "armor_body",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "9c2bc3ebfc1059d1028b6b6123d7fc7116519636ce46b719c507134ce584dcc7"
    },
    {
      "id": "wls_xmas2019_red_pants",
      "item_id": "wls_xmas2019_red_pants",
      "name": "圣诞老人的红色裤子",
      "name_en": "Santa's red pants",
      "name_source": "official_zh",
      "description": "充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "下装",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_pants",
      "image_id": "wls_xmas2019_red_pants",
      "equipment_id": "wls_xmas2019_red_pants",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1500,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 80,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 2.25,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_xmas2019_red_pants_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_hide_3",
              "name": "兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
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
        "id": "wls_xmas2019_red_pants",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_xmas_red_pants_name",
        "sorting_group": "armor_legs",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "d220312076e1a330731e2e7294b90e87b0ae6859fb8ccbe085fa7ba1b4cf7fdd"
    },
    {
      "id": "wls_xmas_red_pants",
      "item_id": "wls_xmas_red_pants",
      "name": "圣诞老人的红色裤子",
      "name_en": "Santa's red pants",
      "name_source": "official_zh",
      "description": "充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "下装",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_pants",
      "image_id": "wls_xmas_red_pants",
      "equipment_id": "wls_xmas_red_pants",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1020,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 40,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 2.25,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_xmas_red_pants_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_hide_2",
              "name": "薄兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 1
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
        "id": "wls_xmas_red_pants",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_xmas_red_pants_name",
        "sorting_group": "armor_legs",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "d220312076e1a330731e2e7294b90e87b0ae6859fb8ccbe085fa7ba1b4cf7fdd"
    },
    {
      "id": "wls_xmas2019_green_pants",
      "item_id": "wls_xmas2019_green_pants",
      "name": "圣诞老人的绿色裤子",
      "name_en": "Santa's green pants",
      "name_source": "official_zh",
      "description": "充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "下装",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_pants",
      "image_id": "wls_xmas2019_green_pants",
      "equipment_id": "wls_xmas2019_green_pants",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1150,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 55,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 2.25,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_xmas2019_green_pants_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_hide_3",
              "name": "兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
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
        "id": "wls_xmas2019_green_pants",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_xmas_green_pants_name",
        "sorting_group": "armor_legs",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "13f9f0b146e868612e7fff6eebaee2b42767623bdf51f67ed440e819a693b0d0"
    },
    {
      "id": "wls_xmas_green_pants",
      "item_id": "wls_xmas_green_pants",
      "name": "圣诞老人的绿色裤子",
      "name_en": "Santa's green pants",
      "name_source": "official_zh",
      "description": "充满节庆气息的温暖裤子，可以抵挡严寒和恶棍的袭击。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "下装",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_pants",
      "image_id": "wls_xmas_green_pants",
      "equipment_id": "wls_xmas_green_pants",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1020,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 25,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 2.25,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_xmas_green_pants_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_hide_2",
              "name": "薄兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 1
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
        "id": "wls_xmas_green_pants",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_xmas_green_pants_name",
        "sorting_group": "armor_legs",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "13f9f0b146e868612e7fff6eebaee2b42767623bdf51f67ed440e819a693b0d0"
    },
    {
      "id": "wls2_armor_legs_1_uncommon",
      "item_id": "wls2_armor_legs_1_uncommon",
      "name": "精良长裤",
      "name_en": "Fine trousers",
      "name_source": "official_zh",
      "description": "打对了位置的补丁能给你带来勇气",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "下装",
      "tier": 1,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_trousers_reinforced_1.5",
      "image_id": "wls2_armor_legs_1_uncommon",
      "equipment_id": "wls2_armor_legs_1_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 180,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 180
            },
            {
              "level": 2,
              "value": 195
            },
            {
              "level": 3,
              "value": 210
            },
            {
              "level": 4,
              "value": 225
            },
            {
              "level": 5,
              "value": 240
            }
          ]
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 13,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 13
            },
            {
              "level": 2,
              "value": 14
            },
            {
              "level": 3,
              "value": 15
            },
            {
              "level": 4,
              "value": 16
            },
            {
              "level": 5,
              "value": 18
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 1,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1
            },
            {
              "level": 2,
              "value": 1
            },
            {
              "level": 3,
              "value": 1
            },
            {
              "level": 4,
              "value": 2
            },
            {
              "level": 5,
              "value": 3
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_armor_legs_1_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_1",
              "name": "薄皮革",
              "amount": 2
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_1",
              "name": "布卷",
              "amount": 2
            }
          ],
          "result_id": "wls2_armor_legs_1_uncommon",
          "result_name": "精良长裤",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_ftue_ab_tutorial_trader_slot_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_armor_legs_1_uncommon",
          "result_name": "精良长裤",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_armor_legs_1_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_armor_legs_1_uncommon_name",
        "sorting_group": "armor_legs",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "238a3c63a6b6c7ee85698d99cb6aaf596a83dada08c6caeadf13884b1fef24a3"
    },
    {
      "id": "wls2_armor_legs_upgrade_1",
      "item_id": "wls2_armor_legs_upgrade_1",
      "name": "结实的裤子",
      "name_en": "Sturdy pants",
      "name_source": "official_zh",
      "description": "打对了位置的补丁能给你带来勇气。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "下装",
      "tier": 1,
      "rarity": null,
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_trousers_reinforced_1.5",
      "image_id": "wls2_armor_legs_upgrade_1",
      "equipment_id": "wls2_armor_legs_upgrade_1",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 50,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 30,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 0.75,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_armor_legs_upgrade_1",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_clothes_trousers_reinforced_1.5_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "238a3c63a6b6c7ee85698d99cb6aaf596a83dada08c6caeadf13884b1fef24a3"
    },
    {
      "id": "wls2_armor_legs_1",
      "item_id": "wls2_armor_legs_1",
      "name": "裤子",
      "name_en": "Pants",
      "name_source": "official_zh",
      "description": "简单的裤子，缝合得很好。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "下装",
      "tier": 1,
      "rarity": null,
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_trousers_1",
      "image_id": "wls2_armor_legs_1",
      "equipment_id": "wls2_armor_legs_1",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 25,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 10,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 0.5,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_armor_legs_1",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_clothes_trousers_1_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "52b471a83b178d77fbcbeff6ac98efff137fc5f37828e3d706054540e491222d"
    },
    {
      "id": "wls2_armor_legs_1_common",
      "item_id": "wls2_armor_legs_1_common",
      "name": "裤子",
      "name_en": "Pants",
      "name_source": "official_zh",
      "description": "简单的裤子，缝合得很好",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "下装",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_trousers_1",
      "image_id": "wls2_armor_legs_1_common",
      "equipment_id": "wls2_armor_legs_1_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 150
            },
            {
              "level": 2,
              "value": 165
            },
            {
              "level": 3,
              "value": 180
            },
            {
              "level": 4,
              "value": 195
            },
            {
              "level": 5,
              "value": 210
            }
          ]
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 10,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 10
            },
            {
              "level": 2,
              "value": 11
            },
            {
              "level": 3,
              "value": 12
            },
            {
              "level": 4,
              "value": 13
            },
            {
              "level": 5,
              "value": 14
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
          "id": "wls2_armor_legs_1_common_ab_ftue",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 2
            }
          ],
          "result_id": "wls2_armor_legs_1_common",
          "result_name": "裤子",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_armor_legs_1_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 2
            }
          ],
          "result_id": "wls2_armor_legs_1_common",
          "result_name": "裤子",
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
        "id": "wls2_armor_legs_1_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_armor_legs_1_common_name",
        "sorting_group": "armor_legs",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "52b471a83b178d77fbcbeff6ac98efff137fc5f37828e3d706054540e491222d"
    },
    {
      "id": "wls2_halloween_armor_head_1",
      "item_id": "wls2_halloween_armor_head_1",
      "name": "南瓜头盔",
      "name_en": "Pumpkin Helmet",
      "name_source": "official_zh",
      "description": "不能防弹，却能让你看起来恐怖万分",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "头部",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_armor_head_1",
      "image_id": "wls2_halloween_armor_head_1",
      "equipment_id": "wls2_halloween_armor_head_1",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 330,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 30,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 2,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_trader_event_head",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_currency_pumpkin",
              "name": "黑暗南瓜",
              "amount": 50
            }
          ],
          "result_id": "wls2_halloween_armor_head_1",
          "result_name": "南瓜头盔",
          "amount": 1
        },
        {
          "id": "wls2_halloween_event_trade_head",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_event_currency_pumpkin",
              "name": "不祥的南瓜",
              "amount": 5
            }
          ],
          "result_id": "wls2_halloween_armor_head_1",
          "result_name": "南瓜头盔",
          "amount": 1
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_halloween_armor_head_1_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_1",
              "name": "薄皮革",
              "amount": 1
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
        "id": "wls2_halloween_armor_head_1",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_halloween_head_name",
        "sorting_group": "armor_head",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "050cec842c9abab557e4c5395a32ac16a9ab194a96415f9db455bea74eeaedff"
    },
    {
      "id": "wls_xmas2019_red_hat",
      "item_id": "wls_xmas2019_red_hat",
      "name": "圣诞老人的红色毛帽",
      "name_en": "Santa's red cap",
      "name_source": "official_zh",
      "description": "有着华丽节庆外观的温暖毛帽，让你的耳朵不再受冻。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "头部",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_hat",
      "image_id": "wls_xmas2019_red_hat",
      "equipment_id": "wls_xmas2019_red_hat",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1500,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 55,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 1.25,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_xmas2019_red_hat_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_hide_3",
              "name": "兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
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
        "id": "wls_xmas2019_red_hat",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_xmas_red_hat_name",
        "sorting_group": "armor_head",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "66bd2803d0637af52c9ccb0edbf4b7de9d586f48d6b1d6885de14bc1bc529f35"
    },
    {
      "id": "wls_xmas_red_hat",
      "item_id": "wls_xmas_red_hat",
      "name": "圣诞老人的红色毛帽",
      "name_en": "Santa's red cap",
      "name_source": "official_zh",
      "description": "有着华丽节庆外观的温暖毛帽，让你的耳朵不再受冻。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "头部",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_hat",
      "image_id": "wls_xmas_red_hat",
      "equipment_id": "wls_xmas_red_hat",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1020,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 20,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 1.25,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_xmas_red_hat_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_hide_2",
              "name": "薄兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 1
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
        "id": "wls_xmas_red_hat",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_xmas_red_hat_name",
        "sorting_group": "armor_head",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "66bd2803d0637af52c9ccb0edbf4b7de9d586f48d6b1d6885de14bc1bc529f35"
    },
    {
      "id": "wls_xmas2019_green_hat",
      "item_id": "wls_xmas2019_green_hat",
      "name": "圣诞老人的绿色毛帽",
      "name_en": "Santa's green cap",
      "name_source": "official_zh",
      "description": "有着华丽节庆外观的温暖毛帽，让你的耳朵不再受冻。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "头部",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_hat",
      "image_id": "wls_xmas2019_green_hat",
      "equipment_id": "wls_xmas2019_green_hat",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1150,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 40,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 1.25,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_xmas2019_green_hat_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_hide_3",
              "name": "兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
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
        "id": "wls_xmas2019_green_hat",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_xmas_green_hat_name",
        "sorting_group": "armor_head",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ed74abe9200be9cd494b710260922e9f98a121f7b593f15243328587d519c9c8"
    },
    {
      "id": "wls_xmas_green_hat",
      "item_id": "wls_xmas_green_hat",
      "name": "圣诞老人的绿色毛帽",
      "name_en": "Santa's green cap",
      "name_source": "official_zh",
      "description": "有着华丽节庆外观的温暖毛帽，让你的耳朵不再受冻。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "头部",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_hat",
      "image_id": "wls_xmas_green_hat",
      "equipment_id": "wls_xmas_green_hat",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1020,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 10,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 1.25,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_xmas_green_hat_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_hide_2",
              "name": "薄兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 1
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
        "id": "wls_xmas_green_hat",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_xmas_green_hat_name",
        "sorting_group": "armor_head",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ed74abe9200be9cd494b710260922e9f98a121f7b593f15243328587d519c9c8"
    },
    {
      "id": "wls2_armor_head_1",
      "item_id": "wls2_armor_head_1",
      "name": "帽子",
      "name_en": "Hat",
      "name_source": "official_zh",
      "description": "简单的帽子，防雨又防晒的优雅护具。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "头部",
      "tier": 1,
      "rarity": null,
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_hat_1",
      "image_id": "wls2_armor_head_1",
      "equipment_id": "wls2_armor_head_1",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 25,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 5,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 0.25,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_armor_head_1",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_clothes_hat_1_name",
        "sorting_group": "armor_head",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4748537df9868cfef94b2cd9fd72dba88c6afbe3cf288242d5338f6e62496222"
    },
    {
      "id": "wls_injun_hunter_hat",
      "item_id": "wls_injun_hunter_hat",
      "name": "玛卡娅之羽",
      "name_en": "Makya's Feather",
      "name_source": "official_zh",
      "description": "代表最出色猎人的传统印第安标志",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "头部",
      "tier": 1,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_injun_hunter_hat",
      "image_id": "wls_injun_hunter_hat",
      "equipment_id": "wls_injun_hunter_hat",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": "",
          "per_level": 400,
          "maximum": 30000
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 0,
          "unit": "",
          "per_level": 10,
          "maximum": 900
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 0,
          "unit": "",
          "per_level": 1,
          "maximum": 15
        },
        {
          "id": "cool_modifier",
          "label": "耐热",
          "value": 1,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_injun_hunter_hat_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls_bear_claw",
              "name": "熊爪",
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
        "id": "wls_injun_hunter_hat",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_injun_hunter_hat_name",
        "sorting_group": "armor_head",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "da455dcd59f7aa644396598d55712f6304c07b07d5a38936a2f7592b787cdbf7"
    },
    {
      "id": "wls2_armor_head_1_common",
      "item_id": "wls2_armor_head_1_common",
      "name": "草帽",
      "name_en": "Straw hat",
      "name_source": "official_zh",
      "description": "简单的帽子，防雨又防晒的优雅护具。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "头部",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_hat_1",
      "image_id": "wls2_armor_head_1_common",
      "equipment_id": "wls2_armor_head_1_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 150
            },
            {
              "level": 2,
              "value": 165
            },
            {
              "level": 3,
              "value": 180
            },
            {
              "level": 4,
              "value": 195
            },
            {
              "level": 5,
              "value": 210
            }
          ]
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 8,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 8
            },
            {
              "level": 2,
              "value": 9
            },
            {
              "level": 3,
              "value": 10
            },
            {
              "level": 4,
              "value": 11
            },
            {
              "level": 5,
              "value": 12
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
          "id": "wls2_armor_head_1_common_ab_ftue",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_rope_1",
              "name": "绳索",
              "amount": 1
            }
          ],
          "result_id": "wls2_armor_head_1_common",
          "result_name": "草帽",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_armor_head_1_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_rope_1",
              "name": "绳索",
              "amount": 1
            }
          ],
          "result_id": "wls2_armor_head_1_common",
          "result_name": "草帽",
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
        "id": "wls2_armor_head_1_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_armor_head_1_common_name",
        "sorting_group": "armor_head",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4748537df9868cfef94b2cd9fd72dba88c6afbe3cf288242d5338f6e62496222"
    },
    {
      "id": "wls_injun_spirit_hat",
      "item_id": "wls_injun_spirit_hat",
      "name": "鹿灵之羽",
      "name_en": "Chuchip's Feather",
      "name_source": "official_zh",
      "description": "通常由印第安人萨满在举行灵魂仪式时穿戴。几乎算不上是防具",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "头部",
      "tier": 1,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_injun_spirit_hat",
      "image_id": "wls_injun_spirit_hat",
      "equipment_id": "wls_injun_spirit_hat",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": "",
          "per_level": 400,
          "maximum": 30000
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 0,
          "unit": "",
          "per_level": 10,
          "maximum": 900
        },
        {
          "id": "wisdom",
          "label": "精神",
          "value": 0,
          "unit": "",
          "per_level": 1,
          "maximum": 30
        },
        {
          "id": "cool_modifier",
          "label": "耐热",
          "value": 1,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_injun_spirit_hat_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls_bear_claw",
              "name": "熊爪",
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
        "id": "wls_injun_spirit_hat",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_injun_spirit_hat_name",
        "sorting_group": "armor_head",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ca5b0caf99d8321c5dae0364862bbf1563752efba312f5377198ab1d589c2075"
    },
    {
      "id": "wls_xmas2019_red_boots",
      "item_id": "wls_xmas2019_red_boots",
      "name": "圣诞老人的红色靴子",
      "name_en": "Santa's red boots",
      "name_source": "official_zh",
      "description": "温暖厚实的节日靴子，可帮助你在雪地上行走。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "鞋靴",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_boots",
      "image_id": "wls_xmas2019_red_boots",
      "equipment_id": "wls_xmas2019_red_boots",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1500,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 40,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 1.25,
          "unit": ""
        },
        {
          "id": "move_speed_modifier",
          "label": "移动速度加成",
          "value": 6.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_xmas2019_red_boots_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_hide_3",
              "name": "兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
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
        "id": "wls_xmas2019_red_boots",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_xmas_red_boots_name",
        "sorting_group": "armor_boots",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "b45f6221df7319425dedd8013e453ec614ebe2b8bf95954512c159945d69e97d"
    },
    {
      "id": "wls_xmas_red_boots",
      "item_id": "wls_xmas_red_boots",
      "name": "圣诞老人的红色靴子",
      "name_en": "Santa's red boots",
      "name_source": "official_zh",
      "description": "温暖厚实的节日靴子，可帮助你在雪地上行走。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "鞋靴",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_red_boots",
      "image_id": "wls_xmas_red_boots",
      "equipment_id": "wls_xmas_red_boots",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1020,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 20,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 1.25,
          "unit": ""
        },
        {
          "id": "move_speed_modifier",
          "label": "移动速度加成",
          "value": 6.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_xmas_red_boots_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_hide_2",
              "name": "薄兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 1
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
        "id": "wls_xmas_red_boots",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_xmas_red_boots_name",
        "sorting_group": "armor_boots",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "b45f6221df7319425dedd8013e453ec614ebe2b8bf95954512c159945d69e97d"
    },
    {
      "id": "wls_xmas2019_green_boots",
      "item_id": "wls_xmas2019_green_boots",
      "name": "圣诞老人的绿色靴子",
      "name_en": "Santa's green boots",
      "name_source": "official_zh",
      "description": "温暖厚实的节日靴子，可帮助你在雪地上行走。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "鞋靴",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_boots",
      "image_id": "wls_xmas2019_green_boots",
      "equipment_id": "wls_xmas2019_green_boots",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1150,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 25,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 1.25,
          "unit": ""
        },
        {
          "id": "move_speed_modifier",
          "label": "移动速度加成",
          "value": 6.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_xmas2019_green_boots_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_hide_3",
              "name": "兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
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
        "id": "wls_xmas2019_green_boots",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_xmas_green_boots_name",
        "sorting_group": "armor_boots",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "8420d8dcdf845804f0543cb04b8de08e5e3a3316573cf9606d539d376b87ad07"
    },
    {
      "id": "wls_xmas_green_boots",
      "item_id": "wls_xmas_green_boots",
      "name": "圣诞老人的绿色靴子",
      "name_en": "Santa's green boots",
      "name_source": "official_zh",
      "description": "温暖厚实的节日靴子，可帮助你在雪地上行走。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "鞋靴",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_xmas_green_boots",
      "image_id": "wls_xmas_green_boots",
      "equipment_id": "wls_xmas_green_boots",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1020,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 10,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 1.25,
          "unit": ""
        },
        {
          "id": "move_speed_modifier",
          "label": "移动速度加成",
          "value": 6.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_xmas_green_boots_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_hide_2",
              "name": "薄兽皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 1
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
        "id": "wls_xmas_green_boots",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_xmas_green_boots_name",
        "sorting_group": "armor_boots",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "8420d8dcdf845804f0543cb04b8de08e5e3a3316573cf9606d539d376b87ad07"
    },
    {
      "id": "wls2_armor_boots_1_uncommon",
      "item_id": "wls2_armor_boots_1_uncommon",
      "name": "简易靴子",
      "name_en": "Simple boots",
      "name_source": "official_zh",
      "description": "威力强大，足以应对大型猎物",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "鞋靴",
      "tier": 1,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_boots_fortified_1",
      "image_id": "wls2_armor_boots_1_uncommon",
      "equipment_id": "wls2_armor_boots_1_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 180,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 180
            },
            {
              "level": 2,
              "value": 195
            },
            {
              "level": 3,
              "value": 210
            },
            {
              "level": 4,
              "value": 225
            },
            {
              "level": 5,
              "value": 240
            }
          ]
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 6,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 6
            },
            {
              "level": 2,
              "value": 7
            },
            {
              "level": 3,
              "value": 8
            },
            {
              "level": 4,
              "value": 9
            },
            {
              "level": 5,
              "value": 10
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "move_speed_modifier",
          "label": "移动速度加成",
          "value": 10.0,
          "unit": "%"
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 1,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1
            },
            {
              "level": 2,
              "value": 1
            },
            {
              "level": 3,
              "value": 1
            },
            {
              "level": 4,
              "value": 2
            },
            {
              "level": 5,
              "value": 3
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_armor_boots_1_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_rope_1",
              "name": "绳索",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_leather_1",
              "name": "薄皮革",
              "amount": 3
            },
            {
              "id": "wls2_resourse_fourfold_nails_1",
              "name": "铜紧固件",
              "amount": 2
            }
          ],
          "result_id": "wls2_armor_boots_1_uncommon",
          "result_name": "简易靴子",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_ftue_ab_tutorial_trader_slot_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_armor_boots_1_uncommon",
          "result_name": "简易靴子",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_armor_boots_1_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_armor_boots_1_uncommon_name",
        "sorting_group": "armor_boots",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "55f7d198cb8ae94f203cd820b5f6662674fbdcff55e0e95f4d19ef64943f0648"
    },
    {
      "id": "wls2_armor_boots_upgrade_1",
      "item_id": "wls2_armor_boots_upgrade_1",
      "name": "结实的靴子",
      "name_en": "Sturdy boots",
      "name_source": "official_zh",
      "description": "这双结实的靴子适合在任何恶劣的条件下使用。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "鞋靴",
      "tier": 1,
      "rarity": null,
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_boots_fortified_1",
      "image_id": "wls2_armor_boots_upgrade_1",
      "equipment_id": "wls2_armor_boots_upgrade_1",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 50,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 15,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 0.5,
          "unit": ""
        },
        {
          "id": "move_speed_modifier",
          "label": "移动速度加成",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_armor_boots_upgrade_1",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_clothes_boots_fortified_1.5_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "55f7d198cb8ae94f203cd820b5f6662674fbdcff55e0e95f4d19ef64943f0648"
    },
    {
      "id": "wls2_armor_boots_1",
      "item_id": "wls2_armor_boots_1",
      "name": "靴子",
      "name_en": "Boots",
      "name_source": "official_zh",
      "description": "简单的靴子。最好穿上一双结实的靴子。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "鞋靴",
      "tier": 1,
      "rarity": null,
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_boots_1",
      "image_id": "wls2_armor_boots_1",
      "equipment_id": "wls2_armor_boots_1",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 25,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 5,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 0.25,
          "unit": ""
        },
        {
          "id": "move_speed_modifier",
          "label": "移动速度加成",
          "value": 5.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_armor_boots_1",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_clothes_boots_1_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "b3f7481a31fe58f7438c4c6e65d9805e5cd1c708806314bab3eb38904d6bd7cd"
    },
    {
      "id": "wls2_armor_boots_1_common",
      "item_id": "wls2_armor_boots_1_common",
      "name": "靴子",
      "name_en": "Boots",
      "name_source": "official_zh",
      "description": "最好穿上一双结实的靴子",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "鞋靴",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_boots_1",
      "image_id": "wls2_armor_boots_1_common",
      "equipment_id": "wls2_armor_boots_1_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 150
            },
            {
              "level": 2,
              "value": 165
            },
            {
              "level": 3,
              "value": 180
            },
            {
              "level": 4,
              "value": 195
            },
            {
              "level": 5,
              "value": 210
            }
          ]
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 5,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 5
            },
            {
              "level": 2,
              "value": 6
            },
            {
              "level": 3,
              "value": 7
            },
            {
              "level": 4,
              "value": 8
            },
            {
              "level": 5,
              "value": 9
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "move_speed_modifier",
          "label": "移动速度加成",
          "value": 5.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_armor_boots_1_common_ab_ftue",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_rope_1",
              "name": "绳索",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_1",
              "name": "薄皮革",
              "amount": 2
            }
          ],
          "result_id": "wls2_armor_boots_1_common",
          "result_name": "靴子",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_armor_boots_1_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_rope_1",
              "name": "绳索",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_1",
              "name": "薄皮革",
              "amount": 2
            }
          ],
          "result_id": "wls2_armor_boots_1_common",
          "result_name": "靴子",
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
        "id": "wls2_armor_boots_1_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_armor_boots_1_common_name",
        "sorting_group": "armor_boots",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "b3f7481a31fe58f7438c4c6e65d9805e5cd1c708806314bab3eb38904d6bd7cd"
    },
    {
      "id": "wls2_armor_xmas2024_body_2_rare",
      "item_id": "wls2_armor_xmas2024_body_2_rare",
      "name": "奶奶的复仇",
      "name_en": "Grandma's Revenge",
      "name_source": "official_zh",
      "description": "节日盔甲为了战斗假日卡路里",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 2,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary09/wls2_armor_xmas2024_body",
      "image_id": "wls2_armor_xmas2024_body_2_rare",
      "equipment_id": "wls2_armor_xmas2024_body_2_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 735,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 735
            },
            {
              "level": 2,
              "value": 800
            },
            {
              "level": 3,
              "value": 870
            },
            {
              "level": 4,
              "value": 940
            },
            {
              "level": 5,
              "value": 1005
            }
          ]
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 1,
          "unit": ""
        },
        {
          "id": "cool_modifier",
          "label": "耐热",
          "value": 0.5,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 80,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 80
            },
            {
              "level": 2,
              "value": 85
            },
            {
              "level": 3,
              "value": 95
            },
            {
              "level": 4,
              "value": 100
            },
            {
              "level": 5,
              "value": 110
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 2,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2
            },
            {
              "level": 2,
              "value": 3
            },
            {
              "level": 3,
              "value": 4
            },
            {
              "level": 4,
              "value": 5
            },
            {
              "level": 5,
              "value": 6
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_xmax2024_armor_body_2_rare_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_nails_2",
              "name": "青铜紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_2",
              "name": "黄麻织物卷",
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
        "id": "wls2_armor_xmas2024_body_2_rare",
        "reason": "audited_player_equipment",
        "name_key": "wls2_armor_xmas2024_body_name",
        "sorting_group": "armor_body",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4db205d05f980c2d4b30cfee1c759581bfe489d1e019b923bb243af4e6f8fb96"
    },
    {
      "id": "wls2_diary_armor_body_2_rare",
      "item_id": "wls2_diary_armor_body_2_rare",
      "name": "孤星风衣",
      "name_en": "Lone Star Trench Coat",
      "name_source": "official_zh",
      "description": "穿上孤星风衣，以时尚姿态勇闯荒野",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 2,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_armor_body_3",
      "image_id": "wls2_diary_armor_body_2_rare",
      "equipment_id": "wls2_diary_armor_body_2_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 530,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 0.5,
          "unit": ""
        },
        {
          "id": "cool_modifier",
          "label": "耐热",
          "value": 0.5,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 79,
          "unit": ""
        },
        {
          "id": "strength",
          "label": "力量",
          "value": 2,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_diary_armor_body_2_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_diary_armor_body_2_rare_name",
        "sorting_group": "armor_body",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a7976e8cba44799bab58d3e460f3bc2fd012ad03d2ea0d804f57e8c3ec59920d"
    },
    {
      "id": "wls2_halloween_23_armor_body_2_rare",
      "item_id": "wls2_halloween_23_armor_body_2_rare",
      "name": "幽灵骑士的外套",
      "name_en": "Phantom Rider's Coat",
      "name_source": "official_zh",
      "description": "据说这件外套的主人与死神本人达成了交易",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 2,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_halloween_23_armor_body_rare_icon",
      "image_id": "wls2_halloween_23_armor_body_2_rare",
      "equipment_id": "wls2_halloween_23_armor_body_2_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 240,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 240
            },
            {
              "level": 2,
              "value": 260
            },
            {
              "level": 3,
              "value": 280
            },
            {
              "level": 4,
              "value": 300
            },
            {
              "level": 5,
              "value": 320
            }
          ]
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 0.5,
          "unit": ""
        },
        {
          "id": "cool_modifier",
          "label": "耐热",
          "value": 0.5,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 44,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 44
            },
            {
              "level": 2,
              "value": 48
            },
            {
              "level": 3,
              "value": 53
            },
            {
              "level": 4,
              "value": 57
            },
            {
              "level": 5,
              "value": 61
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 1,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1
            },
            {
              "level": 2,
              "value": 1
            },
            {
              "level": 3,
              "value": 1
            },
            {
              "level": 4,
              "value": 2
            },
            {
              "level": 5,
              "value": 3
            }
          ]
        },
        {
          "id": "death_penalty_reduction",
          "label": "死亡损失降低",
          "value": 5.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_halloween_23_armor_body_2_rare_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 7
            },
            {
              "id": "wls2_resourse_fourfold_nails_2",
              "name": "青铜紧固件",
              "amount": 1
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_2",
              "name": "黄麻织物卷",
              "amount": 1
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
        "id": "wls2_halloween_23_armor_body_2_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_halloween_23_armor_body_name",
        "sorting_group": "armor_body",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "819ad205a1c59c896d6a23499c187165db05be54cf9406cb30da9edd42d35da5"
    },
    {
      "id": "wls2_armor_body_upgrade_2",
      "item_id": "wls2_armor_body_upgrade_2",
      "name": "强化的皮夹克",
      "name_en": "Reinforced leather jacket",
      "name_source": "official_zh",
      "description": "金属板为皮夹克添加了额外的保护。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 2,
      "rarity": null,
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_strong_leather_jacket_2.5",
      "image_id": "wls2_armor_body_upgrade_2",
      "equipment_id": "wls2_armor_body_upgrade_2",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 75,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 70,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 1.25,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_armor_body_upgrade_2",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_clothes_strong_leather_jacket_2.5_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5c73d3fe35a85213de374f29a67629b3b3d10de7c56ea6eeea8c89e76cde13c3"
    },
    {
      "id": "wls2_armor_body_fbo_2_rare",
      "item_id": "wls2_armor_body_fbo_2_rare",
      "name": "无名英雄披风",
      "name_en": "Nameless Hero Poncho",
      "name_source": "official_zh",
      "description": "有时候没什么东西比脖子处带个洞的布更方便实用",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 2,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_armor_body_fbo_epic",
      "image_id": "wls2_armor_body_fbo_2_rare",
      "equipment_id": "wls2_armor_body_fbo_2_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 395,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 1,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 95,
          "unit": ""
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 3,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_armor_body_fbo_2_rare_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_cloth_2",
              "name": "麻布",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
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
        "id": "wls2_armor_body_fbo_2_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_armor_body_fbo_epic_name",
        "sorting_group": "armor_body",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "eccc2f343666095bf4934411b4a3bf1e8d6437756431d3c485cf23f0b4a15bf0"
    },
    {
      "id": "wls2_armor_easter_2026_body_2_epic",
      "item_id": "wls2_armor_easter_2026_body_2_epic",
      "name": "春季 骑手 外套",
      "name_en": "Spring Rider Coat",
      "name_source": "official_zh",
      "description": "一个节日的外套带着春天的精神",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 2,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_body_easter_2026",
      "image_id": "wls2_armor_easter_2026_body_2_epic",
      "equipment_id": "wls2_armor_easter_2026_body_2_epic",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1090,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1090
            },
            {
              "level": 2,
              "value": 1200
            },
            {
              "level": 3,
              "value": 1300
            },
            {
              "level": 4,
              "value": 1400
            },
            {
              "level": 5,
              "value": 1500
            }
          ]
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 0.5,
          "unit": ""
        },
        {
          "id": "cool_modifier",
          "label": "耐热",
          "value": 0.5,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 105,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 105
            },
            {
              "level": 2,
              "value": 115
            },
            {
              "level": 3,
              "value": 125
            },
            {
              "level": 4,
              "value": 135
            },
            {
              "level": 5,
              "value": 145
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 2,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2
            },
            {
              "level": 2,
              "value": 4
            },
            {
              "level": 3,
              "value": 6
            },
            {
              "level": 4,
              "value": 8
            },
            {
              "level": 5,
              "value": 10
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_armor_easter_2026_body_2_epic_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_nails_2",
              "name": "青铜紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_2",
              "name": "黄麻织物卷",
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
        "id": "wls2_armor_easter_2026_body_2_epic",
        "reason": "audited_player_equipment",
        "name_key": "wls2_armor_easter_2026_body_name",
        "sorting_group": "armor_body",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "730908f8485703e047c2fca1fd34ca35fda83364fe1cb39254b4b8d15e89b021"
    },
    {
      "id": "wls2_bp_season_flame_armor_body_2_epic",
      "item_id": "wls2_bp_season_flame_armor_body_2_epic",
      "name": "炽热骑手衬衫",
      "name_en": "Blazing Rider shirt",
      "name_source": "official_zh",
      "description": "红色如地平线日落",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 2,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_MBP_2025_body",
      "image_id": "wls2_bp_season_flame_armor_body_2_epic",
      "equipment_id": "wls2_bp_season_flame_armor_body_2_epic",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1090,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1090
            },
            {
              "level": 2,
              "value": 1200
            },
            {
              "level": 3,
              "value": 1300
            },
            {
              "level": 4,
              "value": 1400
            },
            {
              "level": 5,
              "value": 1500
            }
          ]
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 0.5,
          "unit": ""
        },
        {
          "id": "cool_modifier",
          "label": "耐热",
          "value": 0.5,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 105,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 105
            },
            {
              "level": 2,
              "value": 115
            },
            {
              "level": 3,
              "value": 125
            },
            {
              "level": 4,
              "value": 135
            },
            {
              "level": 5,
              "value": 145
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 2,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2
            },
            {
              "level": 2,
              "value": 4
            },
            {
              "level": 3,
              "value": 6
            },
            {
              "level": 4,
              "value": 8
            },
            {
              "level": 5,
              "value": 10
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_bp_season_flame_armor_body_2_epic_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_nails_2",
              "name": "青铜紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_2",
              "name": "黄麻织物卷",
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
        "id": "wls2_bp_season_flame_armor_body_2_epic",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_bp_season_flame_armor_body_name",
        "sorting_group": "armor_body",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "2eef92ba7d9e6d5e0fadfed06140b155cd666d38414964732795d095ffc36712"
    },
    {
      "id": "wls2_armor_st_patrick_jacket_t2_2026",
      "item_id": "wls2_armor_st_patrick_jacket_t2_2026",
      "name": "爱尔兰运气夹克",
      "name_en": "Irish Luck Jacket",
      "name_source": "official_zh",
      "description": "不知怎的，当你穿它时，事情感觉就稍微容易一点。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 2,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_armor_patrick2026_body",
      "image_id": "wls2_armor_st_patrick_jacket_t2_2026",
      "equipment_id": "wls2_armor_st_patrick_jacket_t2_2026",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1090,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1090
            },
            {
              "level": 2,
              "value": 1200
            },
            {
              "level": 3,
              "value": 1300
            },
            {
              "level": 4,
              "value": 1400
            },
            {
              "level": 5,
              "value": 1500
            }
          ]
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 0.5,
          "unit": ""
        },
        {
          "id": "cool_modifier",
          "label": "耐热",
          "value": 0.5,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 105,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 105
            },
            {
              "level": 2,
              "value": 115
            },
            {
              "level": 3,
              "value": 125
            },
            {
              "level": 4,
              "value": 135
            },
            {
              "level": 5,
              "value": 145
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 2,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 2
            },
            {
              "level": 2,
              "value": 4
            },
            {
              "level": 3,
              "value": 6
            },
            {
              "level": 4,
              "value": 8
            },
            {
              "level": 5,
              "value": 10
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_armor_st_patrick_jacket_t2_2026_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_nails_2",
              "name": "青铜紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_2",
              "name": "黄麻织物卷",
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
        "id": "wls2_armor_st_patrick_jacket_t2_2026",
        "reason": "audited_player_equipment",
        "name_key": "wls2_armor_st_patrick_jacket_2026_name",
        "sorting_group": "armor_body",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "8bdc140f7e751a2f4dbec6abb5dca50b28855135b55145f43e250c137228260e"
    },
    {
      "id": "wls_injun_hunter_armor",
      "item_id": "wls_injun_hunter_armor",
      "name": "玛卡娅之绘",
      "name_en": "Makya's Paintings",
      "name_source": "official_zh",
      "description": "用于代表最出色印第安猎人的圣痕",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 2,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_injun_hunter_armor",
      "image_id": "wls_injun_hunter_armor",
      "equipment_id": "wls_injun_hunter_armor",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": "",
          "per_level": 400,
          "maximum": 30000
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 0,
          "unit": "",
          "per_level": 25,
          "maximum": 1900
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 0,
          "unit": "",
          "per_level": 1,
          "maximum": 15
        },
        {
          "id": "cool_modifier",
          "label": "耐热",
          "value": 2,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_injun_hunter_armor_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls_wolf_fang",
              "name": "狼牙",
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
        "id": "wls_injun_hunter_armor",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_injun_hunter_armor_name",
        "sorting_group": "armor_body",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "e31dfd3dd2f19bad15489aa26435067d88d260a95779cb3d68c8db15aba36fa6"
    },
    {
      "id": "wls2_armor_body_2",
      "item_id": "wls2_armor_body_2",
      "name": "皮夹克",
      "name_en": "Leather jacket",
      "name_source": "official_zh",
      "description": "坚固的皮夹克可以让你不用过于担心敌人的攻击。",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 2,
      "rarity": null,
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_leather_jacket_2",
      "image_id": "wls2_armor_body_2",
      "equipment_id": "wls2_armor_body_2",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 37,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 45,
          "unit": ""
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 1,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_armor_body_2",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_clothes_leather_jacket_2_name",
        "sorting_group": "armor_body",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5aba4b97bfc78e47e10af373d95f461b294a0e8a9eb77560b32d804ff05d86b3"
    },
    {
      "id": "wls2_armor_body_2_common",
      "item_id": "wls2_armor_body_2_common",
      "name": "皮夹克",
      "name_en": "Leather jacket",
      "name_source": "official_zh",
      "description": "坚固的皮夹克可以让你不用过于担心敌人的攻击",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_leather_jacket_2",
      "image_id": "wls2_armor_body_2_common",
      "equipment_id": "wls2_armor_body_2_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 390,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 390
            },
            {
              "level": 2,
              "value": 425
            },
            {
              "level": 3,
              "value": 460
            },
            {
              "level": 4,
              "value": 490
            },
            {
              "level": 5,
              "value": 525
            }
          ]
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 0.5,
          "unit": ""
        },
        {
          "id": "cool_modifier",
          "label": "耐热",
          "value": 0.5,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 35,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 35
            },
            {
              "level": 2,
              "value": 39
            },
            {
              "level": 3,
              "value": 42
            },
            {
              "level": 4,
              "value": 46
            },
            {
              "level": 5,
              "value": 49
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
          "id": "wls2_armor_body_2_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_2",
              "name": "麻布",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 5
            }
          ],
          "result_id": "wls2_armor_body_2_common",
          "result_name": "皮夹克",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_75coins_dynamic_smuggler_offer_body_upgrade_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_armor_body_2_common",
          "result_name": "皮夹克",
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
        "id": "wls2_armor_body_2_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_armor_body_2_common_name",
        "sorting_group": "armor_body",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5aba4b97bfc78e47e10af373d95f461b294a0e8a9eb77560b32d804ff05d86b3"
    },
    {
      "id": "wls2_armor_body_2_uncommon",
      "item_id": "wls2_armor_body_2_uncommon",
      "name": "结实的夹克",
      "name_en": "Sturdy jacket",
      "name_source": "official_zh",
      "description": "金属板为皮夹克添加了额外的保护",
      "category": "armor",
      "category_label": "护甲",
      "subcategory": "上装",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_clothes_strong_leather_jacket_2.5",
      "image_id": "wls2_armor_body_2_uncommon",
      "equipment_id": "wls2_armor_body_2_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 540,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 540
            },
            {
              "level": 2,
              "value": 590
            },
            {
              "level": 3,
              "value": 640
            },
            {
              "level": 4,
              "value": 690
            },
            {
              "level": 5,
              "value": 740
            }
          ]
        },
        {
          "id": "warm_modifier",
          "label": "御寒",
          "value": 0.5,
          "unit": ""
        },
        {
          "id": "cool_modifier",
          "label": "耐热",
          "value": 0.5,
          "unit": ""
        },
        {
          "id": "armor",
          "label": "防御",
          "value": 44,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 44
            },
            {
              "level": 2,
              "value": 48
            },
            {
              "level": 3,
              "value": 53
            },
            {
              "level": 4,
              "value": 57
            },
            {
              "level": 5,
              "value": 61
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 1,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1
            },
            {
              "level": 2,
              "value": 1
            },
            {
              "level": 3,
              "value": 1
            },
            {
              "level": 4,
              "value": 2
            },
            {
              "level": 5,
              "value": 3
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_armor_body_2_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 7
            },
            {
              "id": "wls2_resourse_fourfold_nails_2",
              "name": "青铜紧固件",
              "amount": 1
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_2",
              "name": "黄麻织物卷",
              "amount": 1
            }
          ],
          "result_id": "wls2_armor_body_2_uncommon",
          "result_name": "结实的夹克",
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
        "id": "wls2_armor_body_2_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_armor_body_2_uncommon_name",
        "sorting_group": "armor_body",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5c73d3fe35a85213de374f29a67629b3b3d10de7c56ea6eeea8c89e76cde13c3"
    }
  ]
};
