/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-inventory-3"] = {
  "section": "inventory",
  "records": [
    {
      "id": "wls2_weapon_xmas2020_rifle",
      "item_id": "wls2_weapon_xmas2020_rifle",
      "name": "礼物滑膛枪",
      "name_en": "Gift musket",
      "name_source": "official_zh",
      "description": "本来是一份礼物的，但是……",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_rifle",
      "image_id": "wls2_weapon_xmas2020_rifle",
      "equipment_id": "wls2_weapon_xmas2020_rifle",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 145,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 372,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 372
            },
            {
              "level": 2,
              "value": 409
            },
            {
              "level": 3,
              "value": 447
            },
            {
              "level": 4,
              "value": 483
            },
            {
              "level": 5,
              "value": 520
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 11,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 11
            },
            {
              "level": 2,
              "value": 12
            },
            {
              "level": 3,
              "value": 13
            },
            {
              "level": 4,
              "value": 14
            },
            {
              "level": 5,
              "value": 16
            }
          ]
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_xmas2020_trader_wls_random_item_4",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_xmas2020_rifle",
          "result_name": "礼物滑膛枪",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_weapon_xmas2020_rifle",
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
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 5
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_xmas2020_rifle",
          "result_name": "礼物滑膛枪",
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
        "id": "wls2_weapon_xmas2020_rifle",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_rifle_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "bea18242dbc7d3b73c33aa0bd0560650205069c41527101457ea668e559c87c1"
    },
    {
      "id": "wls2_weapon_xmas_21_rifle",
      "item_id": "wls2_weapon_xmas_21_rifle",
      "name": "礼物滑膛枪",
      "name_en": "Gift musket",
      "name_source": "official_zh",
      "description": "即使是老枪手，有时也想再次感受自己的童年",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_rifle",
      "image_id": "wls2_weapon_xmas_21_rifle",
      "equipment_id": "wls2_weapon_xmas_21_rifle",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 215,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 759,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 759
            },
            {
              "level": 2,
              "value": 836
            },
            {
              "level": 3,
              "value": 908
            },
            {
              "level": 4,
              "value": 979
            },
            {
              "level": 5,
              "value": 1051
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_modifier",
          "label": "暴击伤害加成",
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
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 23,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 23
            },
            {
              "level": 2,
              "value": 25
            },
            {
              "level": 3,
              "value": 27
            },
            {
              "level": 4,
              "value": 29
            },
            {
              "level": 5,
              "value": 32
            }
          ]
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_xmas_21_trader_wls2_weapon_xmas_21_rifle",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_xmas_23_currency_firework",
              "name": "爆竹",
              "amount": 500
            },
            {
              "id": "wls2_xmas_25_currency_firework",
              "name": "爆竹",
              "amount": 500
            }
          ],
          "result_id": "wls2_weapon_xmas_21_rifle",
          "result_name": "礼物滑膛枪",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_xmas_21_rifle_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 8
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
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
        "id": "wls2_weapon_xmas_21_rifle",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_rifle_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "bea18242dbc7d3b73c33aa0bd0560650205069c41527101457ea668e559c87c1"
    },
    {
      "id": "wls2_weapon_range_rifle_4_rare",
      "item_id": "wls2_weapon_range_rifle_4_rare",
      "name": "转轮卡宾枪",
      "name_en": "Revolving carbine",
      "name_source": "official_zh",
      "description": "这把卡宾枪是山姆·柯尔特制造的伟大枪械之一",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_rifle_4_rare_icon",
      "image_id": "wls2_weapon_range_rifle_4_rare",
      "equipment_id": "wls2_weapon_range_rifle_4_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 230,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 725,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 725
            },
            {
              "level": 2,
              "value": 798
            },
            {
              "level": 3,
              "value": 870
            },
            {
              "level": 4,
              "value": 943
            },
            {
              "level": 5,
              "value": 1015
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
              "value": 0.9
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
          "value": 20.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
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
              "value": 30
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_rifle_4_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 8
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 8
            }
          ],
          "result_id": "wls2_weapon_range_rifle_4_rare",
          "result_name": "转轮卡宾枪",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_static_event_trader_offer_rifle_4_rare",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_rifle_4_rare",
          "result_name": "转轮卡宾枪",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_weapon_10",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_rifle_4_rare",
          "result_name": "转轮卡宾枪",
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
        "id": "wls2_weapon_range_rifle_4_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_rifle_4_rare_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a19a0f538c2056e36c904178368e5dec3fc1943766483a83187631634c43d51a"
    },
    {
      "id": "wls2_weapon_xmas2020_bell_staff",
      "item_id": "wls2_weapon_xmas2020_bell_staff",
      "name": "叮叮",
      "name_en": "Ding-ding",
      "name_source": "official_zh",
      "description": "每一击都伴随着清脆的铃铛声",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_bell_staff",
      "image_id": "wls2_weapon_xmas2020_bell_staff",
      "equipment_id": "wls2_weapon_xmas2020_bell_staff",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 234,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 234
            },
            {
              "level": 2,
              "value": 270
            },
            {
              "level": 3,
              "value": 292
            },
            {
              "level": 4,
              "value": 308
            },
            {
              "level": 5,
              "value": 352
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
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 7,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 7
            },
            {
              "level": 2,
              "value": 8
            },
            {
              "level": 3,
              "value": 9
            },
            {
              "level": 4,
              "value": 9
            },
            {
              "level": 5,
              "value": 11
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_xmas2020_trader_wls_random_item_10",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_xmas2020_bell_staff",
          "result_name": "叮叮",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_weapon_xmas2020_bell_staff",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_xmas2020_bell_staff",
          "result_name": "叮叮",
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
        "id": "wls2_weapon_xmas2020_bell_staff",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_bell_staff_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "6e9dcfcd955618c332479344e900274e28498ad91c821d152aaa3f35e02b415c"
    },
    {
      "id": "wls2_halloween_1h_sword_4",
      "item_id": "wls2_halloween_1h_sword_4",
      "name": "寻肉者",
      "name_en": "Flesh Seeker",
      "name_source": "official_zh",
      "description": "一把相当不寻常的剑，剑刃非常危险。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_halloween_1h_sword_4",
      "image_id": "wls2_halloween_1h_sword_4",
      "equipment_id": "wls2_halloween_1h_sword_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 126,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 242,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 242
            },
            {
              "level": 2,
              "value": 275
            },
            {
              "level": 3,
              "value": 297
            },
            {
              "level": 4,
              "value": 319
            },
            {
              "level": 5,
              "value": 352
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
          "value": 10.0,
          "unit": "%"
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
          "value": 50,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 50
            },
            {
              "level": 2,
              "value": 100
            },
            {
              "level": 3,
              "value": 150
            },
            {
              "level": 4,
              "value": 200
            },
            {
              "level": 5,
              "value": 250
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 7,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 7
            },
            {
              "level": 2,
              "value": 8
            },
            {
              "level": 3,
              "value": 9
            },
            {
              "level": 4,
              "value": 10
            },
            {
              "level": 5,
              "value": 11
            }
          ]
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_1h_sword_4",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 3
            },
            {
              "id": "wls_wolf_fang",
              "name": "狼牙",
              "amount": 3
            }
          ],
          "result_id": "wls2_halloween_1h_sword_4",
          "result_name": "寻肉者",
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
        "id": "wls2_halloween_1h_sword_4",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_halloween_1h_sword_4_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4ce20aa9236b716c71b92b181c5c8feb9bca4ba391c79d54cbc4bb0e324a5298"
    },
    {
      "id": "wls2_weapon_xmas2020_scythe",
      "item_id": "wls2_weapon_xmas2020_scythe",
      "name": "收割",
      "name_en": "Harvest",
      "name_source": "official_zh",
      "description": "割掉杂草，还有敌人的脑袋。用缎带和铃铛装饰。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_scythe",
      "image_id": "wls2_weapon_xmas2020_scythe",
      "equipment_id": "wls2_weapon_xmas2020_scythe",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 120,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 358,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 358
            },
            {
              "level": 2,
              "value": 407
            },
            {
              "level": 3,
              "value": 468
            },
            {
              "level": 4,
              "value": 490
            },
            {
              "level": 5,
              "value": 523
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
              "value": 12.0
            },
            {
              "level": 3,
              "value": 14.0
            },
            {
              "level": 4,
              "value": 16.0
            },
            {
              "level": 5,
              "value": 18.0
            }
          ]
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
          "value": 35.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 11,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 11
            },
            {
              "level": 2,
              "value": 12
            },
            {
              "level": 3,
              "value": 14
            },
            {
              "level": 4,
              "value": 15
            },
            {
              "level": 5,
              "value": 16
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_xmas2020_trader_wls_random_item_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_xmas2020_scythe",
          "result_name": "收割",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_weapon_xmas2020_scythe",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 6
            }
          ],
          "result_id": "wls2_weapon_xmas2020_scythe",
          "result_name": "收割",
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
        "id": "wls2_weapon_xmas2020_scythe",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_scythe_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "8f4ef27aa5323bd74755b5bae00cafd9b5ad3b034836afa2581e68f978551e91"
    },
    {
      "id": "wls2_weapon_xmas_21_scythe",
      "item_id": "wls2_weapon_xmas_21_scythe",
      "name": "收割",
      "name_en": "Harvest",
      "name_source": "official_zh",
      "description": "割掉杂草，还有敌人的脑袋。用缎带和铃铛装饰。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_scythe",
      "image_id": "wls2_weapon_xmas_21_scythe",
      "equipment_id": "wls2_weapon_xmas_21_scythe",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 140,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 470,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 470
            },
            {
              "level": 2,
              "value": 515
            },
            {
              "level": 3,
              "value": 566
            },
            {
              "level": 4,
              "value": 610
            },
            {
              "level": 5,
              "value": 656
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
              "value": 12.0
            },
            {
              "level": 3,
              "value": 14.0
            },
            {
              "level": 4,
              "value": 16.0
            },
            {
              "level": 5,
              "value": 18.0
            }
          ]
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
          "value": 35.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_xmas_21_scythe_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 6
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
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
        "id": "wls2_weapon_xmas_21_scythe",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_scythe_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "8f4ef27aa5323bd74755b5bae00cafd9b5ad3b034836afa2581e68f978551e91"
    },
    {
      "id": "wls2_halloween_1h_scythe_4",
      "item_id": "wls2_halloween_1h_scythe_4",
      "name": "葬仪之选",
      "name_en": "Funerary Pick",
      "name_source": "official_zh",
      "description": "就像它的名字一样，冷酷而致命。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_halloween_1h_scythe_4",
      "image_id": "wls2_halloween_1h_scythe_4",
      "equipment_id": "wls2_halloween_1h_scythe_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 110,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 143,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 143
            },
            {
              "level": 2,
              "value": 154
            },
            {
              "level": 3,
              "value": 165
            },
            {
              "level": 4,
              "value": 187
            },
            {
              "level": 5,
              "value": 198
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
              "value": 300
            },
            {
              "level": 3,
              "value": 400
            },
            {
              "level": 4,
              "value": 500
            },
            {
              "level": 5,
              "value": 600
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 4,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 4
            },
            {
              "level": 2,
              "value": 5
            },
            {
              "level": 3,
              "value": 5
            },
            {
              "level": 4,
              "value": 6
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
      "recipes": [
        {
          "id": "wls2_halloween_1h_scythe_4",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 2
            },
            {
              "id": "wls_wolf_fang",
              "name": "狼牙",
              "amount": 3
            }
          ],
          "result_id": "wls2_halloween_1h_scythe_4",
          "result_name": "葬仪之选",
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
        "id": "wls2_halloween_1h_scythe_4",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_halloween_1h_scythe_4_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ce6c0eb31767c8b96ad182981d0dd23ce21a6618398ef7b9d8581db7c19bdaa6"
    },
    {
      "id": "wls2_halloween_21_weapon_melee_scythe_4",
      "item_id": "wls2_halloween_21_weapon_melee_scythe_4",
      "name": "葬仪之选",
      "name_en": "Funerary Pick",
      "name_source": "official_zh",
      "description": "就像它的名字一样，冷酷而致命。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_halloween_1h_scythe_4",
      "image_id": "wls2_halloween_21_weapon_melee_scythe_4",
      "equipment_id": "wls2_halloween_21_weapon_melee_scythe_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 110,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 330,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 330
            },
            {
              "level": 2,
              "value": 363
            },
            {
              "level": 3,
              "value": 396
            },
            {
              "level": 4,
              "value": 429
            },
            {
              "level": 5,
              "value": 462
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
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
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
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_melee_scythe_4",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_25_currency_pumpkin",
              "name": "幽灵南瓜",
              "amount": 150
            }
          ],
          "result_id": "wls2_halloween_21_weapon_melee_scythe_4",
          "result_name": "葬仪之选",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_halloween_21_weapon_melee_scythe_4_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 6
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
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
        "id": "wls2_halloween_21_weapon_melee_scythe_4",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_halloween_1h_scythe_4_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ce6c0eb31767c8b96ad182981d0dd23ce21a6618398ef7b9d8581db7c19bdaa6"
    },
    {
      "id": "wls2_weapon_melee_knife_4_common",
      "item_id": "wls2_weapon_melee_knife_4_common",
      "name": "砍刀",
      "name_en": "Machete",
      "name_source": "official_zh",
      "description": "宽长的刀刃非常适合战斗。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls_machete",
      "image_id": "wls2_weapon_melee_knife_4_common",
      "equipment_id": "wls2_weapon_melee_knife_4_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 120,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 189,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 189
            },
            {
              "level": 2,
              "value": 208
            },
            {
              "level": 3,
              "value": 227
            },
            {
              "level": 4,
              "value": 246
            },
            {
              "level": 5,
              "value": 265
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 20.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 6,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 6
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
              "value": 7
            },
            {
              "level": 5,
              "value": 8
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_knife_4_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 1
            }
          ],
          "result_id": "wls2_weapon_melee_knife_4_common",
          "result_name": "砍刀",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_melee_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_knife_4_common",
          "result_name": "砍刀",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_150coins_dynamic_town_trader_offer_knife_4_common",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_knife_4_common",
          "result_name": "砍刀",
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
        "id": "wls2_weapon_melee_knife_4_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_4_common_name",
        "sorting_group": "weapon_melee_knife",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ae8657015139a479fa780298c5dc2f38a95cd84951ad641340435a05ab8da4e4"
    },
    {
      "id": "wls2_weapon_xmas2020_dagger",
      "item_id": "wls2_weapon_xmas2020_dagger",
      "name": "礼物匕首",
      "name_en": "Gift dagger",
      "name_source": "official_zh",
      "description": "本来是一份礼物的，但是……",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_dagger",
      "image_id": "wls2_weapon_xmas2020_dagger",
      "equipment_id": "wls2_weapon_xmas2020_dagger",
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
          "value": 274,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 274
            },
            {
              "level": 2,
              "value": 301
            },
            {
              "level": 3,
              "value": 329
            },
            {
              "level": 4,
              "value": 356
            },
            {
              "level": 5,
              "value": 384
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
          "id": "penetrating_damage",
          "label": "穿透伤害",
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
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_xmas2020_trader_wls_random_item_13",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_xmas2020_dagger",
          "result_name": "礼物匕首",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_weapon_xmas2020_dagger",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 6
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 5
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_xmas2020_dagger",
          "result_name": "礼物匕首",
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
        "id": "wls2_weapon_xmas2020_dagger",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_dagger_name",
        "sorting_group": "weapon_melee_knife",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "0d803878c1cbcc96e945ffcd9564052ff18be044676bcfb5ad329b20cf5ca9f0"
    },
    {
      "id": "wls2_weapon_xmas_21_dagger",
      "item_id": "wls2_weapon_xmas_21_dagger",
      "name": "礼物匕首",
      "name_en": "Gift dagger",
      "name_source": "official_zh",
      "description": "打扮的五彩缤纷可不仅仅有利于礼物开箱哦",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_dagger",
      "image_id": "wls2_weapon_xmas_21_dagger",
      "equipment_id": "wls2_weapon_xmas_21_dagger",
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
          "value": 274,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 274
            },
            {
              "level": 2,
              "value": 301
            },
            {
              "level": 3,
              "value": 329
            },
            {
              "level": 4,
              "value": 356
            },
            {
              "level": 5,
              "value": 384
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
          "id": "penetrating_damage",
          "label": "穿透伤害",
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
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_xmas_21_dagger_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
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
        "id": "wls2_weapon_xmas_21_dagger",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_dagger_name",
        "sorting_group": "weapon_melee_knife",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "0d803878c1cbcc96e945ffcd9564052ff18be044676bcfb5ad329b20cf5ca9f0"
    },
    {
      "id": "wls2_weapon_melee_knife_4_uncommon",
      "item_id": "wls2_weapon_melee_knife_4_uncommon",
      "name": "维苏里",
      "name_en": "Vesuri",
      "name_source": "official_zh",
      "description": "带有利刃的砍刀",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_knife_4_uncommon_icon",
      "image_id": "wls2_weapon_melee_knife_4_uncommon",
      "equipment_id": "wls2_weapon_melee_knife_4_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 120,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 261,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 261
            },
            {
              "level": 2,
              "value": 287
            },
            {
              "level": 3,
              "value": 314
            },
            {
              "level": 4,
              "value": 340
            },
            {
              "level": 5,
              "value": 365
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 20.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
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
              "value": 9
            },
            {
              "level": 4,
              "value": 10
            },
            {
              "level": 5,
              "value": 11
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_knife_4_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_melee_knife_4_uncommon",
          "result_name": "维苏里",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_melee_4",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_knife_4_uncommon",
          "result_name": "维苏里",
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
        "id": "wls2_weapon_melee_knife_4_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_4_uncommon_name",
        "sorting_group": "weapon_melee_knife",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "43b81734fd4a81fd8ccadbce3e31aef3bd0f126b48baa860517319877d70367a"
    },
    {
      "id": "wls2_weapon_xmas2020_saber",
      "item_id": "wls2_weapon_xmas2020_saber",
      "name": "五彩纸谢军刀",
      "name_en": "Confettirate saber",
      "name_source": "official_zh",
      "description": "好像名字哪里出了点问题",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "长矛与军刀",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_saber",
      "image_id": "wls2_weapon_xmas2020_saber",
      "equipment_id": "wls2_weapon_xmas2020_saber",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 96,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 377,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 377
            },
            {
              "level": 2,
              "value": 415
            },
            {
              "level": 3,
              "value": 453
            },
            {
              "level": 4,
              "value": 491
            },
            {
              "level": 5,
              "value": 528
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 13.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 13.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 18.0
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
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 11,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 11
            },
            {
              "level": 2,
              "value": 12
            },
            {
              "level": 3,
              "value": 14
            },
            {
              "level": 4,
              "value": 15
            },
            {
              "level": 5,
              "value": 16
            }
          ]
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_xmas2020_trader_wls_random_item_11",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_xmas2020_saber",
          "result_name": "五彩纸谢军刀",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_weapon_xmas2020_saber",
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
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_xmas2020_saber",
          "result_name": "五彩纸谢军刀",
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
        "id": "wls2_weapon_xmas2020_saber",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_saber_name",
        "sorting_group": "weapon_melee_spear_saber",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "d491db8acc1eabfe70b26c34d4be10f9364fbeb48f159dc0a0d0317e79517263"
    },
    {
      "id": "wls2_weapon_xmas_21_saber",
      "item_id": "wls2_weapon_xmas_21_saber",
      "name": "五彩纸谢军刀",
      "name_en": "Confettirate saber",
      "name_source": "official_zh",
      "description": "喜庆但相当尖利耐用的东西",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "长矛与军刀",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_saber",
      "image_id": "wls2_weapon_xmas_21_saber",
      "equipment_id": "wls2_weapon_xmas_21_saber",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 120,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 466,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 466
            },
            {
              "level": 2,
              "value": 510
            },
            {
              "level": 3,
              "value": 560
            },
            {
              "level": 4,
              "value": 606
            },
            {
              "level": 5,
              "value": 650
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "critical_hit_chance",
          "label": "暴击率",
          "value": 13.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 13.0
            },
            {
              "level": 2,
              "value": 15.0
            },
            {
              "level": 3,
              "value": 18.0
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
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 20.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_xmas_21_saber_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 6
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
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
        "id": "wls2_weapon_xmas_21_saber",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_saber_name",
        "sorting_group": "weapon_melee_spear_saber",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "d491db8acc1eabfe70b26c34d4be10f9364fbeb48f159dc0a0d0317e79517263"
    },
    {
      "id": "wls2_weapon_melee_sabre_4_common",
      "item_id": "wls2_weapon_melee_sabre_4_common",
      "name": "军刀",
      "name_en": "Saber",
      "name_source": "official_zh",
      "description": "骑兵最钟爱的武器",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "长矛与军刀",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls_saber",
      "image_id": "wls2_weapon_melee_sabre_4_common",
      "equipment_id": "wls2_weapon_melee_sabre_4_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 140,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 278,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 278
            },
            {
              "level": 2,
              "value": 307
            },
            {
              "level": 3,
              "value": 334
            },
            {
              "level": 4,
              "value": 362
            },
            {
              "level": 5,
              "value": 391
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 20.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
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
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_sabre_4_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_melee_sabre_4_common",
          "result_name": "军刀",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_melee_7",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_sabre_4_common",
          "result_name": "军刀",
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
        "id": "wls2_weapon_melee_sabre_4_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_sabre_4_common_name",
        "sorting_group": "weapon_melee_spear_saber",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "d2b1cb0f6f21c31ce6945aadab6485aa3f4465ce9eb5f102af784e919328a887"
    },
    {
      "id": "wls2_weapon_melee_sabre_4_rare",
      "item_id": "wls2_weapon_melee_sabre_4_rare",
      "name": "英式军刀",
      "name_en": "English saber",
      "name_source": "official_zh",
      "description": "浮夸地镀了一层金",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "长矛与军刀",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_sabre_4_rare_icon",
      "image_id": "wls2_weapon_melee_sabre_4_rare",
      "equipment_id": "wls2_weapon_melee_sabre_4_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 140,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 507,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 507
            },
            {
              "level": 2,
              "value": 558
            },
            {
              "level": 3,
              "value": 609
            },
            {
              "level": 4,
              "value": 660
            },
            {
              "level": 5,
              "value": 711
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
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 20.0,
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
          "id": "wls2_weapon_melee_sabre_4_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 6
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_melee_sabre_4_rare",
          "result_name": "英式军刀",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_melee_9",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_sabre_4_rare",
          "result_name": "英式军刀",
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
        "id": "wls2_weapon_melee_sabre_4_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_sabre_4_rare_name",
        "sorting_group": "weapon_melee_spear_saber",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "232da52695eb16e9e8d6c2101cdb91e1a53871bb58a8c093cf93f5f95ba99143"
    },
    {
      "id": "wls2_weapon_melee_sabre_4_epic",
      "item_id": "wls2_weapon_melee_sabre_4_epic",
      "name": "警用军刀",
      "name_en": "Police saber",
      "name_source": "official_zh",
      "description": "据说东北部每个执法人员人手一把。外面的强盗全都闻风而散",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "长矛与军刀",
      "tier": 4,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_melee_sabre_4_epic_icon",
      "image_id": "wls2_weapon_melee_sabre_4_epic",
      "equipment_id": "wls2_weapon_melee_sabre_4_epic",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 136,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 697,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 697
            },
            {
              "level": 2,
              "value": 767
            },
            {
              "level": 3,
              "value": 836
            },
            {
              "level": 4,
              "value": 906
            },
            {
              "level": 5,
              "value": 976
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
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
          "value": 20.0,
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
          "id": "wls2_weapon_melee_sabre_4_epic",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 6
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_epic_rubber",
              "name": "橡胶",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_melee_sabre_4_epic",
          "result_name": "警用军刀",
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
        "id": "wls2_weapon_melee_sabre_4_epic",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_melee_sabre_4_epic_name",
        "sorting_group": "weapon_melee_spear_saber",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "2f9abbe30ed3b56443dfc55ee42529d3dc1aa16d77d60994c42a1bcfb0ae6ce2"
    },
    {
      "id": "wls2_weapon_melee_sabre_4_uncommon",
      "item_id": "wls2_weapon_melee_sabre_4_uncommon",
      "name": "骑兵军刀",
      "name_en": "Cavalry saber",
      "name_source": "official_zh",
      "description": "用这种军刀作战需要速度与敏捷",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "长矛与军刀",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_sabre_4_uncommon_icon",
      "image_id": "wls2_weapon_melee_sabre_4_uncommon",
      "equipment_id": "wls2_weapon_melee_sabre_4_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 140,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 359,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 359
            },
            {
              "level": 2,
              "value": 395
            },
            {
              "level": 3,
              "value": 431
            },
            {
              "level": 4,
              "value": 466
            },
            {
              "level": 5,
              "value": 503
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 20.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 11,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 11
            },
            {
              "level": 2,
              "value": 12
            },
            {
              "level": 3,
              "value": 13
            },
            {
              "level": 4,
              "value": 14
            },
            {
              "level": 5,
              "value": 15
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_sabre_4_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 5
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_melee_sabre_4_uncommon",
          "result_name": "骑兵军刀",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_melee_8",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_sabre_4_uncommon",
          "result_name": "骑兵军刀",
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
        "id": "wls2_weapon_melee_sabre_4_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_sabre_4_uncommon_name",
        "sorting_group": "weapon_melee_spear_saber",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1b2ee4eea9df3d7bb890a1e53db48b10447446ca4aa22a86714f58bf2a347530"
    },
    {
      "id": "wls2_halloween_event_range_shotgun",
      "item_id": "wls2_halloween_event_range_shotgun",
      "name": "南瓜人之信",
      "name_en": "Pumpker's Message",
      "name_source": "official_zh",
      "description": "致命远程武器，出自农夫的阿尔文之手。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_shotgun",
      "image_id": "wls2_halloween_event_range_shotgun",
      "equipment_id": "wls2_halloween_event_range_shotgun",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 226,
          "unit": ""
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
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 650,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 650
            },
            {
              "level": 2,
              "value": 720
            },
            {
              "level": 3,
              "value": 790
            },
            {
              "level": 4,
              "value": 850
            },
            {
              "level": 5,
              "value": 920
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
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
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_event_range_shotgun",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 3
            }
          ],
          "result_id": "wls2_halloween_event_range_shotgun",
          "result_name": "南瓜人之信",
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
        "id": "wls2_halloween_event_range_shotgun",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_halloween_range_shotgun_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ad4545c3d3e21558f4c83774a345709c72f78a4dc91356b3fab7537c0322fb20"
    },
    {
      "id": "wls2_halloween_21_weapon_range_shotgun_4",
      "item_id": "wls2_halloween_21_weapon_range_shotgun_4",
      "name": "南瓜头的消息",
      "name_en": "Pumpkinhead's Message",
      "name_source": "official_zh",
      "description": "致命远程武器，出自农夫的阿尔文之手。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_shotgun",
      "image_id": "wls2_halloween_21_weapon_range_shotgun_4",
      "equipment_id": "wls2_halloween_21_weapon_range_shotgun_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 200,
          "unit": ""
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
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 650,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 650
            },
            {
              "level": 2,
              "value": 720
            },
            {
              "level": 3,
              "value": 790
            },
            {
              "level": 4,
              "value": 850
            },
            {
              "level": 5,
              "value": 920
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
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
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_range_shotgun_4",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_25_currency_pumpkin",
              "name": "幽灵南瓜",
              "amount": 600
            }
          ],
          "result_id": "wls2_halloween_21_weapon_range_shotgun_4",
          "result_name": "南瓜头的消息",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_halloween_21_weapon_range_shotgun_4_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_1",
              "name": "铜锭",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_1",
              "name": "铜制武器零件",
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
        "id": "wls2_halloween_21_weapon_range_shotgun_4",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_halloween_21_range_shotgun_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ad4545c3d3e21558f4c83774a345709c72f78a4dc91356b3fab7537c0322fb20"
    },
    {
      "id": "wls2_weapon_easter_22_shotgun_3",
      "item_id": "wls2_weapon_easter_22_shotgun_3",
      "name": "吉尔的霰弹枪",
      "name_en": "Jill's Shotgun",
      "name_source": "official_zh",
      "description": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_3",
      "image_id": "wls2_weapon_easter_22_shotgun_3",
      "equipment_id": "wls2_weapon_easter_22_shotgun_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 230,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 610,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 610
            },
            {
              "level": 2,
              "value": 670
            },
            {
              "level": 3,
              "value": 730
            },
            {
              "level": 4,
              "value": 790
            },
            {
              "level": 5,
              "value": 850
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
          "value": 12,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 12
            },
            {
              "level": 2,
              "value": 13
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
              "value": 17
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_shotgun_3_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
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
        "id": "wls2_weapon_easter_22_shotgun_3",
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
      "id": "wls2_weapon_easter_shotgun_3",
      "item_id": "wls2_weapon_easter_shotgun_3",
      "name": "吉尔的霰弹枪",
      "name_en": "Jill's Shotgun",
      "name_source": "official_zh",
      "description": "集市负责人最爱的霰弹枪。千万别惹那位穿红衣服的女士！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_3",
      "image_id": "wls2_weapon_easter_shotgun_3",
      "equipment_id": "wls2_weapon_easter_shotgun_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 230,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 560,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 560
            },
            {
              "level": 2,
              "value": 610
            },
            {
              "level": 3,
              "value": 670
            },
            {
              "level": 4,
              "value": 720
            },
            {
              "level": 5,
              "value": 780
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
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_easter_shotgun_3",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 1500
            }
          ],
          "result_id": "wls2_weapon_easter_shotgun_3",
          "result_name": "吉尔的霰弹枪",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_shotgun_3_recycle",
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
        "id": "wls2_weapon_easter_shotgun_3",
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
      "id": "wls2_weapon_ws_day2024_shotgun_4",
      "item_id": "wls2_weapon_ws_day2024_shotgun_4",
      "name": "周年庆散弹枪",
      "name_en": "Anniversary shotgun",
      "name_source": "official_zh",
      "description": "奖励武器。用来射击和炫耀都很合适！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 4,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_shotgun",
      "image_id": "wls2_weapon_ws_day2024_shotgun_4",
      "equipment_id": "wls2_weapon_ws_day2024_shotgun_4",
      "stats": [
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
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 230,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 626,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 626
            },
            {
              "level": 2,
              "value": 682
            },
            {
              "level": 3,
              "value": 739
            },
            {
              "level": 4,
              "value": 796
            },
            {
              "level": 5,
              "value": 853
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
          "id": "wls2_weapon_ws_day2024_shotgun_4_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
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
        "id": "wls2_weapon_ws_day2024_shotgun_4",
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
      "id": "wls2_weapon_xmas2020_shotgun",
      "item_id": "wls2_weapon_xmas2020_shotgun",
      "name": "圣诞老人的枪",
      "name_en": "Santa's gun",
      "name_source": "official_zh",
      "description": "通常圣诞老人会给好孩子美好的礼物，但这次他为那些坏蛋准备了厉害的枪支。拥有范围效果。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_santa_shotgun",
      "image_id": "wls2_weapon_xmas2020_shotgun",
      "equipment_id": "wls2_weapon_xmas2020_shotgun",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 125,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 470,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 470
            },
            {
              "level": 2,
              "value": 520
            },
            {
              "level": 3,
              "value": 570
            },
            {
              "level": 4,
              "value": 620
            },
            {
              "level": 5,
              "value": 660
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
          "value": 7,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 7
            },
            {
              "level": 2,
              "value": 8
            },
            {
              "level": 3,
              "value": 9
            },
            {
              "level": 4,
              "value": 9
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
      "recipes": [
        {
          "id": "wls2_xmas2020_trader_wls_random_item_29",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_xmas2020_shotgun",
          "result_name": "圣诞老人的枪",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_weapon_xmas2020_shotgun",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 5
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_xmas2020_shotgun",
          "result_name": "圣诞老人的枪",
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
        "id": "wls2_weapon_xmas2020_shotgun",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_santa_shotgun_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "3eaafa2b81d54b1abd5eb97d117ad6262857f0e5bc6bf148e6d37296fafeb7c5"
    },
    {
      "id": "wls2_weapon_xmas_21_shotgun",
      "item_id": "wls2_weapon_xmas_21_shotgun",
      "name": "圣诞老人的枪",
      "name_en": "Santa's gun",
      "name_source": "official_zh",
      "description": "通常圣诞老人会给好孩子美好的礼物，但这次他为那些坏蛋准备了厉害的枪支。拥有范围效果。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_santa_shotgun",
      "image_id": "wls2_weapon_xmas_21_shotgun",
      "equipment_id": "wls2_weapon_xmas_21_shotgun",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 215,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 680,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 680
            },
            {
              "level": 2,
              "value": 730
            },
            {
              "level": 3,
              "value": 780
            },
            {
              "level": 4,
              "value": 830
            },
            {
              "level": 5,
              "value": 880
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
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_xmas_21_shotgun_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 8
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
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
        "id": "wls2_weapon_xmas_21_shotgun",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_santa_shotgun_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "3eaafa2b81d54b1abd5eb97d117ad6262857f0e5bc6bf148e6d37296fafeb7c5"
    },
    {
      "id": "wls2_weapon_easter_22_shotgun_1_t4",
      "item_id": "wls2_weapon_easter_22_shotgun_1_t4",
      "name": "彩炮 II",
      "name_en": "Confetti II",
      "name_source": "official_zh",
      "description": "虽然叫彩炮，但它射的可不是彩色纸屑。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_1",
      "image_id": "wls2_weapon_easter_22_shotgun_1_t4",
      "equipment_id": "wls2_weapon_easter_22_shotgun_1_t4",
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
          "value": 473,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 473
            },
            {
              "level": 2,
              "value": 515
            },
            {
              "level": 3,
              "value": 561
            },
            {
              "level": 4,
              "value": 612
            },
            {
              "level": 5,
              "value": 667
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 9,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 9
            },
            {
              "level": 2,
              "value": 10
            },
            {
              "level": 3,
              "value": 11
            },
            {
              "level": 4,
              "value": 12
            },
            {
              "level": 5,
              "value": 13
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_shotgun_1_t4_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
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
        "id": "wls2_weapon_easter_22_shotgun_1_t4",
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
      "id": "wls2_weapon_easter_shotgun_1",
      "item_id": "wls2_weapon_easter_shotgun_1",
      "name": "彩炮 II",
      "name_en": "Confetti II",
      "name_source": "official_zh",
      "description": "虽然叫彩炮，但它射的可不是彩色纸屑。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_1",
      "image_id": "wls2_weapon_easter_shotgun_1",
      "equipment_id": "wls2_weapon_easter_shotgun_1",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 125,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 220,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 220
            },
            {
              "level": 2,
              "value": 240
            },
            {
              "level": 3,
              "value": 260
            },
            {
              "level": 4,
              "value": 290
            },
            {
              "level": 5,
              "value": 310
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 3,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 3
            },
            {
              "level": 2,
              "value": 4
            },
            {
              "level": 3,
              "value": 4
            },
            {
              "level": 4,
              "value": 4
            },
            {
              "level": 5,
              "value": 5
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_easter_shotgun_1",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 500
            }
          ],
          "result_id": "wls2_weapon_easter_shotgun_1",
          "result_name": "彩炮 II",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_shotgun_1_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
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
        "id": "wls2_weapon_easter_shotgun_1",
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
      "id": "wls2_weapon_range_shotgun_4_common",
      "item_id": "wls2_weapon_range_shotgun_4_common",
      "name": "快速装填霰弹枪",
      "name_en": "Fast load shotgun",
      "name_source": "official_zh",
      "description": "这把发射迅速的双管霰弹枪可以干掉任何对手",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls_fast_load_shotgun",
      "image_id": "wls2_weapon_range_shotgun_4_common",
      "equipment_id": "wls2_weapon_range_shotgun_4_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 230,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 375,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 375
            },
            {
              "level": 2,
              "value": 405
            },
            {
              "level": 3,
              "value": 440
            },
            {
              "level": 4,
              "value": 475
            },
            {
              "level": 5,
              "value": 510
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
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
              "value": 6
            },
            {
              "level": 4,
              "value": 7
            },
            {
              "level": 5,
              "value": 7
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_shotgun_4_common",
          "label": "工作台制作",
          "ingredients": [
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
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_range_shotgun_4_common",
          "result_name": "快速装填霰弹枪",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_weapon_12",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_shotgun_4_common",
          "result_name": "快速装填霰弹枪",
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
        "id": "wls2_weapon_range_shotgun_4_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_4_common_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "620a0a2c13573dea17b0e978f1e5fc1080a1ae68585d8778c4d75583b2531fac"
    },
    {
      "id": "wls2_weapon_xmas2024_shotgun_4",
      "item_id": "wls2_weapon_xmas2024_shotgun_4",
      "name": "暴风雪",
      "name_en": "Blizzard",
      "name_source": "official_zh",
      "description": "没有人能阻止自然的力量",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 4,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_xmas_24_shotgun",
      "image_id": "wls2_weapon_xmas2024_shotgun_4",
      "equipment_id": "wls2_weapon_xmas2024_shotgun_4",
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
              "value": 31
            },
            {
              "level": 4,
              "value": 32
            },
            {
              "level": 5,
              "value": 34
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 230,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 867,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 867
            },
            {
              "level": 2,
              "value": 930
            },
            {
              "level": 3,
              "value": 994
            },
            {
              "level": 4,
              "value": 1059
            },
            {
              "level": 5,
              "value": 1122
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
          "id": "wls2_weapon_xmas2024_shotgun_4_recycle",
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
        "id": "wls2_weapon_xmas2024_shotgun_4",
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
      "id": "wls2_weapon_range_shotgun_4_uncommon",
      "item_id": "wls2_weapon_range_shotgun_4_uncommon",
      "name": "游侠霰弹枪",
      "name_en": "Ranger shotgun",
      "name_source": "official_zh",
      "description": "适合真正游侠的便利武器",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_shotgun_4_uncommon_icon",
      "image_id": "wls2_weapon_range_shotgun_4_uncommon",
      "equipment_id": "wls2_weapon_range_shotgun_4_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 230,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 505,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 505
            },
            {
              "level": 2,
              "value": 550
            },
            {
              "level": 3,
              "value": 595
            },
            {
              "level": 4,
              "value": 645
            },
            {
              "level": 5,
              "value": 695
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 7,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 7
            },
            {
              "level": 2,
              "value": 8
            },
            {
              "level": 3,
              "value": 9
            },
            {
              "level": 4,
              "value": 9
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
      "recipes": [
        {
          "id": "wls2_weapon_range_shotgun_4_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 3
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 6
            }
          ],
          "result_id": "wls2_weapon_range_shotgun_4_uncommon",
          "result_name": "游侠霰弹枪",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_static_event_trader_offer_shotgun_4_uncommon",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_shotgun_4_uncommon",
          "result_name": "游侠霰弹枪",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_weapon_13",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_shotgun_4_uncommon",
          "result_name": "游侠霰弹枪",
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
        "id": "wls2_weapon_range_shotgun_4_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_4_uncommon_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1ae8c823e21ade26c511cea224465bb010ccb01da3c7f3be6198d475e45619eb"
    },
    {
      "id": "wls2_weapon_lunar_shotgun_4_rare",
      "item_id": "wls2_weapon_lunar_shotgun_4_rare",
      "name": "火焰 霰弹枪",
      "name_en": "Flame shotgun",
      "name_source": "official_zh",
      "description": "一发子弹像一群火热的马将打击你的敌人",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 4,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_lunar_icon",
      "image_id": "wls2_weapon_lunar_shotgun_4_rare",
      "equipment_id": "wls2_weapon_lunar_shotgun_4_rare",
      "stats": [
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 10,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 10
            },
            {
              "level": 2,
              "value": 12
            },
            {
              "level": 3,
              "value": 14
            },
            {
              "level": 4,
              "value": 16
            },
            {
              "level": 5,
              "value": 18
            }
          ]
        },
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 230,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 650,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 650
            },
            {
              "level": 2,
              "value": 710
            },
            {
              "level": 3,
              "value": 770
            },
            {
              "level": 4,
              "value": 840
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
          "value": 65,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 65
            },
            {
              "level": 2,
              "value": 70
            },
            {
              "level": 3,
              "value": 77
            },
            {
              "level": 4,
              "value": 85
            },
            {
              "level": 5,
              "value": 90
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_lunar_shotgun_4_rare_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
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
        "id": "wls2_weapon_lunar_shotgun_4_rare",
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
      "id": "wls2_weapon_easter_22_shotgun_2",
      "item_id": "wls2_weapon_easter_22_shotgun_2",
      "name": "爆笑",
      "name_en": "Killing Joke",
      "name_source": "official_zh",
      "description": "可能也没那么好笑，但是很好射！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_2",
      "image_id": "wls2_weapon_easter_22_shotgun_2",
      "equipment_id": "wls2_weapon_easter_22_shotgun_2",
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
          "value": 470,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 470
            },
            {
              "level": 2,
              "value": 517
            },
            {
              "level": 3,
              "value": 565
            },
            {
              "level": 4,
              "value": 610
            },
            {
              "level": 5,
              "value": 660
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 9,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 9
            },
            {
              "level": 2,
              "value": 10
            },
            {
              "level": 3,
              "value": 11
            },
            {
              "level": 4,
              "value": 12
            },
            {
              "level": 5,
              "value": 13
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_easter_22_trader_easter_shotgun_2",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_24_currency_egg",
              "name": "复活节彩蛋",
              "amount": 300
            }
          ],
          "result_id": "wls2_weapon_easter_22_shotgun_2",
          "result_name": "爆笑",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_shotgun_2_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
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
        "id": "wls2_weapon_easter_22_shotgun_2",
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
      "id": "wls2_weapon_easter_shotgun_2",
      "item_id": "wls2_weapon_easter_shotgun_2",
      "name": "爆笑",
      "name_en": "Killing Joke",
      "name_source": "official_zh",
      "description": "可能也没那么好笑，但是很好射！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_shotgun_2",
      "image_id": "wls2_weapon_easter_shotgun_2",
      "equipment_id": "wls2_weapon_easter_shotgun_2",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 125,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 300,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 300
            },
            {
              "level": 2,
              "value": 330
            },
            {
              "level": 3,
              "value": 360
            },
            {
              "level": 4,
              "value": 390
            },
            {
              "level": 5,
              "value": 420
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 5,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 5
            },
            {
              "level": 2,
              "value": 5
            },
            {
              "level": 3,
              "value": 5
            },
            {
              "level": 4,
              "value": 6
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
      "recipes": [
        {
          "id": "wls2_easter2021_trader_easter_shotgun_2",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 600
            }
          ],
          "result_id": "wls2_weapon_easter_shotgun_2",
          "result_name": "爆笑",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_shotgun_2_recycle",
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
        "id": "wls2_weapon_easter_shotgun_2",
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
      "id": "wls2_weapon_ws_day2023_shotgun_uncommon_4",
      "item_id": "wls2_weapon_ws_day2023_shotgun_uncommon_4",
      "name": "节日霰弹枪1872",
      "name_en": "Festive Shotgun 1872",
      "name_source": "official_zh",
      "description": "这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_confetti",
      "image_id": "wls2_weapon_ws_day2023_shotgun_uncommon_4",
      "equipment_id": "wls2_weapon_ws_day2023_shotgun_uncommon_4",
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
          "value": 5,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_ws_day2023_shotgun_uncommon_4_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 1
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
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
        "id": "wls2_weapon_ws_day2023_shotgun_uncommon_4",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2023_confetti_name_2",
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
      "id": "wls2_weapon_range_firearms_shotgun_5",
      "item_id": "wls2_weapon_range_firearms_shotgun_5",
      "name": "亨利 .44 步枪",
      "name_en": "Henry .44 rifle",
      "name_source": "official_zh",
      "description": "运用杠杆原理的步枪，发射左轮手枪的子弹。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "image_id": "wls2_weapon_range_firearms_shotgun_5",
      "equipment_id": "wls2_weapon_range_firearms_shotgun_5",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 300,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 17,
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
        "id": "wls2_weapon_range_firearms_shotgun_5",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_henry_.44_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a"
    },
    {
      "id": "wls2_weapon_melee_fast_5",
      "item_id": "wls2_weapon_melee_fast_5",
      "name": "刺刀",
      "name_en": "Bayonet knife",
      "name_source": "official_zh",
      "description": "即使跟步枪分开了，依然是一个很棒的武器。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 5,
      "rarity": null,
      "max_stack": 1,
      "stack_type": "durability",
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "image_id": "wls2_weapon_melee_fast_5",
      "equipment_id": "wls2_weapon_melee_fast_5",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 152,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 25,
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
        "id": "wls2_weapon_melee_fast_5",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_sword_bayonet_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a"
    },
    {
      "id": "wls2_weapon_melee_middle_5",
      "item_id": "wls2_weapon_melee_middle_5",
      "name": "同盟军刀",
      "name_en": "Confederate saber",
      "name_source": "official_zh",
      "description": "出自最卓越的枪匠之手，能够给敌人带去死亡。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 5,
      "rarity": null,
      "max_stack": 1,
      "stack_type": "durability",
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "image_id": "wls2_weapon_melee_middle_5",
      "equipment_id": "wls2_weapon_melee_middle_5",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 182,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 30,
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
        "id": "wls2_weapon_melee_middle_5",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_confiderate_saber_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a"
    },
    {
      "id": "wls2_weapon_melee_slow_5",
      "item_id": "wls2_weapon_melee_slow_5",
      "name": "战斗狼牙棒",
      "name_en": "War mace",
      "name_source": "official_zh",
      "description": "没有多少恶棍在挨了战斗狼牙棒一击后还能站住脚跟",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 5,
      "rarity": null,
      "max_stack": 1,
      "stack_type": "durability",
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "image_id": "wls2_weapon_melee_slow_5",
      "equipment_id": "wls2_weapon_melee_slow_5",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 122,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 40,
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
        "id": "wls2_weapon_melee_slow_5",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_Weapon_melee_slow_5_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a"
    },
    {
      "id": "wls2_weapon_range_firearms_revolver_5",
      "item_id": "wls2_weapon_range_firearms_revolver_5",
      "name": "斯科菲尔德左轮手枪",
      "name_en": "Schofield",
      "name_source": "official_zh",
      "description": "最好的左轮手枪。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "image_id": "wls2_weapon_range_firearms_revolver_5",
      "equipment_id": "wls2_weapon_range_firearms_revolver_5",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 250,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 45,
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
        "id": "wls2_weapon_range_firearms_revolver_5",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_schofield_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a"
    },
    {
      "id": "wls2_weapon_range_throwing_bow_5",
      "item_id": "wls2_weapon_range_throwing_bow_5",
      "name": "旧版五阶弓",
      "name_en": "",
      "name_source": "descriptive_fallback",
      "description": "",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 5,
      "rarity": null,
      "max_stack": 1,
      "stack_type": "durability",
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "image_id": "wls2_weapon_range_throwing_bow_5",
      "equipment_id": "wls2_weapon_range_throwing_bow_5",
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
          "value": 21,
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
        "id": "wls2_weapon_range_throwing_bow_5",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_Weapon_range_throwing_bow_5_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a"
    },
    {
      "id": "wls2_weapon_range_firearms_rifle_5",
      "item_id": "wls2_weapon_range_firearms_rifle_5",
      "name": "温彻斯特 .45 口径步枪",
      "name_en": "Winchester .45 rifle",
      "name_source": "official_zh",
      "description": "狂野西部中的传奇武器。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "image_id": "wls2_weapon_range_firearms_rifle_5",
      "equipment_id": "wls2_weapon_range_firearms_rifle_5",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 300,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 55,
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
        "id": "wls2_weapon_range_firearms_rifle_5",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_winchester_.45_name",
        "sorting_group": "legasy",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a"
    },
    {
      "id": "wls2_mosquito_torch",
      "item_id": "wls2_mosquito_torch",
      "name": "驱蚊火炬",
      "name_en": "Repellent torch",
      "name_source": "official_zh",
      "description": "驱赶走蚊子",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "use_durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_mosquito_torch",
      "image_id": "wls2_mosquito_torch",
      "equipment_id": "wls2_mosquito_torch",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "mosquito_reduction",
          "label": "蚊虫影响降低",
          "value": 5,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_mosquito_torch",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_rope_5",
              "name": "大麻绳",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 1
            },
            {
              "id": "wls2_resourse_miscellaneous_vodka_1",
              "name": "酒精",
              "amount": 1
            }
          ],
          "result_id": "wls2_mosquito_torch",
          "result_name": "驱蚊火炬",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "source": {
        "table": "inventory_stacks",
        "id": "wls2_mosquito_torch",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_mosquito_torch_name",
        "sorting_group": "tool_torch",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": true
      },
      "image_key": "b9686eb14f6aff931cc002d795bdc764b8cef0057833202fedb4bffd020b55de"
    },
    {
      "id": "wls2_weapon_xmas2020_ice_bow",
      "item_id": "wls2_weapon_xmas2020_ice_bow",
      "name": "冰雪女王弓",
      "name_en": "Ice queen bow",
      "name_source": "official_zh",
      "description": "非常脆弱，但很优雅",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弓",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_ice_bow",
      "image_id": "wls2_weapon_xmas2020_ice_bow",
      "equipment_id": "wls2_weapon_xmas2020_ice_bow",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 440,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 440
            },
            {
              "level": 2,
              "value": 479
            },
            {
              "level": 3,
              "value": 517
            },
            {
              "level": 4,
              "value": 556
            },
            {
              "level": 5,
              "value": 611
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "slow_time",
          "label": "减速时长",
          "value": 1,
          "unit": "秒",
          "levels": [
            {
              "level": 1,
              "value": 1
            },
            {
              "level": 2,
              "value": 1.25
            },
            {
              "level": 3,
              "value": 1.5
            },
            {
              "level": 4,
              "value": 1.75
            },
            {
              "level": 5,
              "value": 2
            }
          ]
        },
        {
          "id": "slow_modifier",
          "label": "减速幅度",
          "value": 30.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 30.0
            },
            {
              "level": 2,
              "value": 30.0
            },
            {
              "level": 3,
              "value": 35.0
            },
            {
              "level": 4,
              "value": 35.0
            },
            {
              "level": 5,
              "value": 40.0
            }
          ]
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
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
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_xmas2020_trader_wls_random_item_9",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_xmas2020_ice_bow",
          "result_name": "冰雪女王弓",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_weapon_xmas2020_ice_bow",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_rope_5",
              "name": "大麻绳",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 6
            },
            {
              "id": "wls2_resourse_secondary_leather_5",
              "name": "结实皮革",
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_xmas2020_ice_bow",
          "result_name": "冰雪女王弓",
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
        "id": "wls2_weapon_xmas2020_ice_bow",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_ice_bow_name",
        "sorting_group": "bow",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1bb6c5fb17dd4696ce4c67a74eef70c430ae7f67e1aa835b226fc1baa7f562f1"
    },
    {
      "id": "wls2_weapon_range_bow_5_common",
      "item_id": "wls2_weapon_range_bow_5_common",
      "name": "反曲弓",
      "name_en": "Recurve bow",
      "name_source": "official_zh",
      "description": "长度赋予了这把弓额外的弹性与速度",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弓",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_bow_5_common_icon",
      "image_id": "wls2_weapon_range_bow_5_common",
      "equipment_id": "wls2_weapon_range_bow_5_common",
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
          "value": 385,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 385
            },
            {
              "level": 2,
              "value": 424
            },
            {
              "level": 3,
              "value": 462
            },
            {
              "level": 4,
              "value": 501
            },
            {
              "level": 5,
              "value": 539
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
              "value": 21
            },
            {
              "level": 3,
              "value": 23
            },
            {
              "level": 4,
              "value": 25
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
      "recipes": [
        {
          "id": "wls2_weapon_range_bow_5_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_rope_5",
              "name": "大麻绳",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_leather_5",
              "name": "结实皮革",
              "amount": 1
            }
          ],
          "result_id": "wls2_weapon_range_bow_5_common",
          "result_name": "反曲弓",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_weapon_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_bow_5_common",
          "result_name": "反曲弓",
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
        "id": "wls2_weapon_range_bow_5_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_bow_5_common_name",
        "sorting_group": "bow",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": true
      },
      "image_key": "fff843d5d0c33eeba82e7e53029a12c61511945be297098aa8df11a2e060b31f"
    },
    {
      "id": "wls2_weapon_easter_22_bow_t5",
      "item_id": "wls2_weapon_easter_22_bow_t5",
      "name": "胡咧咧弓",
      "name_en": "Balderdash",
      "name_source": "official_zh",
      "description": "不得不说，造这把弓的人很有想象力。更重要的是，它真的能当弓用！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弓",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_bow",
      "image_id": "wls2_weapon_easter_22_bow_t5",
      "equipment_id": "wls2_weapon_easter_22_bow_t5",
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
          "value": 25,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 25
            },
            {
              "level": 2,
              "value": 28
            },
            {
              "level": 3,
              "value": 30
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
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 507,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 507
            },
            {
              "level": 2,
              "value": 553
            },
            {
              "level": 3,
              "value": 602
            },
            {
              "level": 4,
              "value": 657
            },
            {
              "level": 5,
              "value": 716
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
          "id": "wls2_weapon_easter_22_bow_t5_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_rope_4",
              "name": "棉绳",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
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
        "id": "wls2_weapon_easter_22_bow_t5",
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
      "id": "wls2_weapon_easter_22_crossbow_t5",
      "item_id": "wls2_weapon_easter_22_crossbow_t5",
      "name": "胡萝卜弩",
      "name_en": "Carrotbow",
      "name_source": "official_zh",
      "description": "它会让你明白，表面人畜无害的胡萝卜，其实暗藏杀机。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弩",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_crossbow",
      "image_id": "wls2_weapon_easter_22_crossbow_t5",
      "equipment_id": "wls2_weapon_easter_22_crossbow_t5",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 140,
          "unit": ""
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
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 516,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 516
            },
            {
              "level": 2,
              "value": 562
            },
            {
              "level": 3,
              "value": 613
            },
            {
              "level": 4,
              "value": 668
            },
            {
              "level": 5,
              "value": 728
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
          "id": "wls2_weapon_easter_22_crossbow_t5_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_rope_4",
              "name": "棉绳",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
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
        "id": "wls2_weapon_easter_22_crossbow_t5",
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
      "id": "wls2_weapon_range_revolver_5_common",
      "item_id": "wls2_weapon_range_revolver_5_common",
      "name": "史密斯威森-1型",
      "name_en": "S&W model 1",
      "name_source": "official_zh",
      "description": "由史密斯威森公司制造的首款枪械",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_revolver_5_common_icon",
      "image_id": "wls2_weapon_range_revolver_5_common",
      "equipment_id": "wls2_weapon_range_revolver_5_common",
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
          "value": 496,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 496
            },
            {
              "level": 2,
              "value": 545
            },
            {
              "level": 3,
              "value": 594
            },
            {
              "level": 4,
              "value": 644
            },
            {
              "level": 5,
              "value": 694
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
          "value": 25,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 25
            },
            {
              "level": 2,
              "value": 27
            },
            {
              "level": 3,
              "value": 30
            },
            {
              "level": 4,
              "value": 32
            },
            {
              "level": 5,
              "value": 35
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_revolver_5_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
              "amount": 1
            }
          ],
          "result_id": "wls2_weapon_range_revolver_5_common",
          "result_name": "史密斯威森-1型",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_static_event_trader_offer_revolver_5_common",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_revolver_5_common",
          "result_name": "史密斯威森-1型",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_weapon_6",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_revolver_5_common",
          "result_name": "史密斯威森-1型",
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
        "id": "wls2_weapon_range_revolver_5_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_5_common_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "57e36e3fdbf3836c3d6a105e35e091472dee743752155ce0c94bc4ce54232e51"
    },
    {
      "id": "wls2_weapon_range_revolver_5_uncommon",
      "item_id": "wls2_weapon_range_revolver_5_uncommon",
      "name": "史密斯威森-2 型",
      "name_en": "S&W model 2",
      "name_source": "official_zh",
      "description": "握柄带有珍珠且纹理雕刻精巧的左轮手枪",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 5,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_revolver_5_uncommon_icon",
      "image_id": "wls2_weapon_range_revolver_5_uncommon",
      "equipment_id": "wls2_weapon_range_revolver_5_uncommon",
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
          "value": 684,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 684
            },
            {
              "level": 2,
              "value": 752
            },
            {
              "level": 3,
              "value": 820
            },
            {
              "level": 4,
              "value": 889
            },
            {
              "level": 5,
              "value": 958
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
          "value": 34,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 34
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
              "value": 44
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
          "id": "wls2_weapon_range_revolver_5_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_range_revolver_5_uncommon",
          "result_name": "史密斯威森-2 型",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_static_event_trader_offer_revolver_5_uncommon",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_revolver_5_uncommon",
          "result_name": "史密斯威森-2 型",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_weapon_7",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_revolver_5_uncommon",
          "result_name": "史密斯威森-2 型",
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
        "id": "wls2_weapon_range_revolver_5_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_5_uncommon_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "82478b0088ecccd4704011194843134a875528b532e569233f3ef8a9696dad1d"
    },
    {
      "id": "wls2_weapon_range_revolver_5_rare",
      "item_id": "wls2_weapon_range_revolver_5_rare",
      "name": "史密斯威森-斯科菲尔德",
      "name_en": "S&W Schofield",
      "name_source": "official_zh",
      "description": "由史密斯威森公司研发并制造的单动式左轮手枪",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls_schofield",
      "image_id": "wls2_weapon_range_revolver_5_rare",
      "equipment_id": "wls2_weapon_range_revolver_5_rare",
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
          "value": 966,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 966
            },
            {
              "level": 2,
              "value": 1063
            },
            {
              "level": 3,
              "value": 1159
            },
            {
              "level": 4,
              "value": 1256
            },
            {
              "level": 5,
              "value": 1352
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
          "value": 30.0,
          "unit": "%"
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
              "value": 53
            },
            {
              "level": 3,
              "value": 58
            },
            {
              "level": 4,
              "value": 63
            },
            {
              "level": 5,
              "value": 68
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_revolver_5_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_range_revolver_5_rare",
          "result_name": "史密斯威森-斯科菲尔德",
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
        "id": "wls2_weapon_range_revolver_5_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_5_rare_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "2cb51d344631bad93f2de3d431a61c279a784fd73cd23f596ed1855ba0c118ca"
    },
    {
      "id": "wls2_weapon_ws_day2024_colt_5",
      "item_id": "wls2_weapon_ws_day2024_colt_5",
      "name": "周年庆左轮手枪",
      "name_en": "Anniversary revolver",
      "name_source": "official_zh",
      "description": "奖励武器。用来射击和炫耀都很合适！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_colt",
      "image_id": "wls2_weapon_ws_day2024_colt_5",
      "equipment_id": "wls2_weapon_ws_day2024_colt_5",
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
              "value": 53
            },
            {
              "level": 3,
              "value": 58
            },
            {
              "level": 4,
              "value": 63
            },
            {
              "level": 5,
              "value": 68
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
          "value": 966,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 966
            },
            {
              "level": 2,
              "value": 1063
            },
            {
              "level": 3,
              "value": 1159
            },
            {
              "level": 4,
              "value": 1256
            },
            {
              "level": 5,
              "value": 1352
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
          "value": 30.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_ws_day2024_colt_5_recycle",
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
        "id": "wls2_weapon_ws_day2024_colt_5",
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
      "id": "wls2_weapon_range_halloween_23_pistol_5",
      "item_id": "wls2_weapon_range_halloween_23_pistol_5",
      "name": "恶灵的恐怖",
      "name_en": "Terror of Spirits",
      "name_source": "official_zh",
      "description": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_halloween_range_revolver",
      "image_id": "wls2_weapon_range_halloween_23_pistol_5",
      "equipment_id": "wls2_weapon_range_halloween_23_pistol_5",
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
          "value": 966,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 966
            },
            {
              "level": 2,
              "value": 1063
            },
            {
              "level": 3,
              "value": 1159
            },
            {
              "level": 4,
              "value": 1256
            },
            {
              "level": 5,
              "value": 1352
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
          "value": 48,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 48
            },
            {
              "level": 2,
              "value": 53
            },
            {
              "level": 3,
              "value": 58
            },
            {
              "level": 4,
              "value": 63
            },
            {
              "level": 5,
              "value": 68
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
          "value": 30.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_range_halloween_23_pistol_5_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 7
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 7
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
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
        "id": "wls2_weapon_range_halloween_23_pistol_5",
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
      "id": "wls2_weapon_range_revolver_5_epic",
      "item_id": "wls2_weapon_range_revolver_5_epic",
      "name": "柯尔特 M1900",
      "name_en": "Colt M1900",
      "name_source": "official_zh",
      "description": "要是枪管再长一些，那就是一把步枪了",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_range_revolver_5_epic_icon",
      "image_id": "wls2_weapon_range_revolver_5_epic",
      "equipment_id": "wls2_weapon_range_revolver_5_epic",
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
          "value": 1239,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1239
            },
            {
              "level": 2,
              "value": 1363
            },
            {
              "level": 3,
              "value": 1487
            },
            {
              "level": 4,
              "value": 1611
            },
            {
              "level": 5,
              "value": 1735
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
          "value": 30.0,
          "unit": "%"
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 62,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 62
            },
            {
              "level": 2,
              "value": 68
            },
            {
              "level": 3,
              "value": 74
            },
            {
              "level": 4,
              "value": 81
            },
            {
              "level": 5,
              "value": 87
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_revolver_5_epic",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
              "amount": 3
            },
            {
              "id": "wls2_resourse_epic_industrial_gunparts",
              "name": "工业零件",
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_range_revolver_5_epic",
          "result_name": "柯尔特 M1900",
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
        "id": "wls2_weapon_range_revolver_5_epic",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_range_revolver_5_epic_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "0aea6c31bc8ca4924ef5865356eae27f5d953b88341ab6807223eca41e08cfb6"
    },
    {
      "id": "wls2_weapon_easter_22_5_colt",
      "item_id": "wls2_weapon_easter_22_5_colt",
      "name": "集市柯尔特左轮",
      "name_en": "Fair Colt",
      "name_source": "official_zh",
      "description": "闪亮且五颜六色的顶级柯尔特左轮。是时候找点乐子了！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_colt",
      "image_id": "wls2_weapon_easter_22_5_colt",
      "equipment_id": "wls2_weapon_easter_22_5_colt",
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
          "value": 966,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 966
            },
            {
              "level": 2,
              "value": 1063
            },
            {
              "level": 3,
              "value": 1159
            },
            {
              "level": 4,
              "value": 1256
            },
            {
              "level": 5,
              "value": 1352
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
          "value": 48,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 48
            },
            {
              "level": 2,
              "value": 53
            },
            {
              "level": 3,
              "value": 58
            },
            {
              "level": 4,
              "value": 63
            },
            {
              "level": 5,
              "value": 68
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 30.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_5_colt_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
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
        "id": "wls2_weapon_easter_22_5_colt",
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
      "id": "wls2_weapon_easter_22_5_epic_colt",
      "item_id": "wls2_weapon_easter_22_5_epic_colt",
      "name": "集市柯尔特左轮",
      "name_en": "Fair Colt",
      "name_source": "official_zh",
      "description": "闪亮且五颜六色的顶级柯尔特左轮。是时候找点乐子了！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_colt",
      "image_id": "wls2_weapon_easter_22_5_epic_colt",
      "equipment_id": "wls2_weapon_easter_22_5_epic_colt",
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
          "value": 1239,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1239
            },
            {
              "level": 2,
              "value": 1363
            },
            {
              "level": 3,
              "value": 1487
            },
            {
              "level": 4,
              "value": 1611
            },
            {
              "level": 5,
              "value": 1735
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
          "value": 62,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 62
            },
            {
              "level": 2,
              "value": 68
            },
            {
              "level": 3,
              "value": 74
            },
            {
              "level": 4,
              "value": 81
            },
            {
              "level": 5,
              "value": 87
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 30.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_5_epic_colt_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
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
        "id": "wls2_weapon_easter_22_5_epic_colt",
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
      "id": "wls2_weapon_easter_22_colt_t5",
      "item_id": "wls2_weapon_easter_22_colt_t5",
      "name": "集市柯尔特左轮",
      "name_en": "Fair Colt",
      "name_source": "official_zh",
      "description": "闪亮且五颜六色的顶级柯尔特左轮。是时候找点乐子了！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_colt",
      "image_id": "wls2_weapon_easter_22_colt_t5",
      "equipment_id": "wls2_weapon_easter_22_colt_t5",
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
          "value": 984,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 984
            },
            {
              "level": 2,
              "value": 1073
            },
            {
              "level": 3,
              "value": 1169
            },
            {
              "level": 4,
              "value": 1274
            },
            {
              "level": 5,
              "value": 1389
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
              "value": 58
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
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 30.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_colt_t5_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
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
        "id": "wls2_weapon_easter_22_colt_t5",
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
      "id": "wls2_weapon_easter_22_pepperbox_t5",
      "item_id": "wls2_weapon_easter_22_pepperbox_t5",
      "name": "集市胡椒盒手枪",
      "name_en": "Fair Pepperbox",
      "name_source": "official_zh",
      "description": "耀眼！聒噪！就像集市的烟花一样。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_pepperbox",
      "image_id": "wls2_weapon_easter_22_pepperbox_t5",
      "equipment_id": "wls2_weapon_easter_22_pepperbox_t5",
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
          "value": 674,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 674
            },
            {
              "level": 2,
              "value": 735
            },
            {
              "level": 3,
              "value": 801
            },
            {
              "level": 4,
              "value": 873
            },
            {
              "level": 5,
              "value": 952
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
          "value": 34,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 34
            },
            {
              "level": 2,
              "value": 37
            },
            {
              "level": 3,
              "value": 40
            },
            {
              "level": 4,
              "value": 44
            },
            {
              "level": 5,
              "value": 48
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 30.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_pepperbox_t5_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
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
        "id": "wls2_weapon_easter_22_pepperbox_t5",
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
      "id": "wls2_weapon_easter_22_mallet_t5",
      "item_id": "wls2_weapon_easter_22_mallet_t5",
      "name": "复活节木槌",
      "name_en": "Easter Mallet",
      "name_source": "official_zh",
      "description": "一把集市上的彩色木槌。柄上写着：“晚安”。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "棍棒与锤",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_mallet",
      "image_id": "wls2_weapon_easter_22_mallet_t5",
      "equipment_id": "wls2_weapon_easter_22_mallet_t5",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 130,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 792,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 792
            },
            {
              "level": 2,
              "value": 863
            },
            {
              "level": 3,
              "value": 941
            },
            {
              "level": 4,
              "value": 1026
            },
            {
              "level": 5,
              "value": 1118
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
          "value": 40,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 40
            },
            {
              "level": 2,
              "value": 43
            },
            {
              "level": 3,
              "value": 47
            },
            {
              "level": 4,
              "value": 51
            },
            {
              "level": 5,
              "value": 56
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_mallet_t5_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
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
        "id": "wls2_weapon_easter_22_mallet_t5",
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
      "id": "wls2_weapon_easter_22_mace_t5",
      "item_id": "wls2_weapon_easter_22_mace_t5",
      "name": "彩绘狼牙棒",
      "name_en": "Painted Mace",
      "name_source": "official_zh",
      "description": "涂有节日彩绘的近战武器，适合用来砸烂彩蛋，以及脑袋。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "棍棒与锤",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_mace",
      "image_id": "wls2_weapon_easter_22_mace_t5",
      "equipment_id": "wls2_weapon_easter_22_mace_t5",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 130,
          "unit": ""
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
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 721,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 721
            },
            {
              "level": 2,
              "value": 786
            },
            {
              "level": 3,
              "value": 857
            },
            {
              "level": 4,
              "value": 934
            },
            {
              "level": 5,
              "value": 1018
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
          "id": "wls2_weapon_easter_22_mace_t5_recycle",
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
        "id": "wls2_weapon_easter_22_mace_t5",
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
      "id": "wls2_xmas_22_weapon_range_rifle_5_rare",
      "item_id": "wls2_xmas_22_weapon_range_rifle_5_rare",
      "name": "极光",
      "name_en": "Aurora",
      "name_source": "official_zh",
      "description": "这支滑膛枪会让你的敌人惊慌失措！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_xmas_22_weapon_range_rifle_5_rare",
      "image_id": "wls2_xmas_22_weapon_range_rifle_5_rare",
      "equipment_id": "wls2_xmas_22_weapon_range_rifle_5_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 200,
          "unit": ""
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
          "value": 129,
          "unit": ""
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 30.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_xmas_22_weapon_range_rifle_5_rare_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 7
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_5",
              "name": "镀镍武器零件",
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
        "id": "wls2_xmas_22_weapon_range_rifle_5_rare",
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
      "id": "wls2_xmas_23_weapon_range_rifle_5_epic",
      "item_id": "wls2_xmas_23_weapon_range_rifle_5_epic",
      "name": "极光",
      "name_en": "Aurora",
      "name_source": "official_zh",
      "description": "这支滑膛枪会让你的敌人惊慌失措！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_xmas_22_weapon_range_rifle_5_rare",
      "image_id": "wls2_xmas_23_weapon_range_rifle_5_epic",
      "equipment_id": "wls2_xmas_23_weapon_range_rifle_5_epic",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 300,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 300
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
          "value": 129,
          "unit": ""
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 30.0,
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
        "id": "wls2_xmas_23_weapon_range_rifle_5_epic",
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
      "id": "wls2_weapon_range_rifle_5_common",
      "item_id": "wls2_weapon_range_rifle_5_common",
      "name": "温彻斯特 .45 口径步枪",
      "name_en": "Winchester .45 rifle",
      "name_source": "official_zh",
      "description": "这把枪统治了西部",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls_winchester_.45",
      "image_id": "wls2_weapon_range_rifle_5_common",
      "equipment_id": "wls2_weapon_range_rifle_5_common",
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
          "value": 595,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 595
            },
            {
              "level": 2,
              "value": 655
            },
            {
              "level": 3,
              "value": 714
            },
            {
              "level": 4,
              "value": 773
            },
            {
              "level": 5,
              "value": 833
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
          "value": 30,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 30
            },
            {
              "level": 2,
              "value": 33
            },
            {
              "level": 3,
              "value": 36
            },
            {
              "level": 4,
              "value": 39
            },
            {
              "level": 5,
              "value": 42
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_rifle_5_common",
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
          "result_id": "wls2_weapon_range_rifle_5_common",
          "result_name": "温彻斯特 .45 口径步枪",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_static_event_trader_offer_rifle_5_common",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_rifle_5_common",
          "result_name": "温彻斯特 .45 口径步枪",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_weapon_11",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_rifle_5_common",
          "result_name": "温彻斯特 .45 口径步枪",
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
        "id": "wls2_weapon_range_rifle_5_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_rifle_5_common_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "50e72ccf9e3d3150c05d464376de51824a4ed1fd91ab6b4dae2ec70a5d575c15"
    },
    {
      "id": "wls2_weapon_range_rifle_5_rare",
      "item_id": "wls2_weapon_range_rifle_5_rare",
      "name": "温彻斯特 M1892",
      "name_en": "Winchester Model 1892",
      "name_source": "official_zh",
      "description": "又名“母马腿”",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_rifle_5_rare_icon",
      "image_id": "wls2_weapon_range_rifle_5_rare",
      "equipment_id": "wls2_weapon_range_rifle_5_rare",
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
          "value": 1159,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1159
            },
            {
              "level": 2,
              "value": 1276
            },
            {
              "level": 3,
              "value": 1392
            },
            {
              "level": 4,
              "value": 1508
            },
            {
              "level": 5,
              "value": 1624
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
          "value": 30.0,
          "unit": "%"
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
      "recipes": [
        {
          "id": "wls2_weapon_range_rifle_5_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 8
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
          "result_id": "wls2_weapon_range_rifle_5_rare",
          "result_name": "温彻斯特 M1892",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_static_event_trader_offer_rifle_5_rare",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_rifle_5_rare",
          "result_name": "温彻斯特 M1892",
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
        "id": "wls2_weapon_range_rifle_5_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_rifle_5_rare_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "f4ceb539c82763a8555a30e4593425b650a396c7e78893016fc434c967147f8e"
    },
    {
      "id": "wls2_weapon_range_rifle_5_epic",
      "item_id": "wls2_weapon_range_rifle_5_epic",
      "name": "罗斯步枪",
      "name_en": "Ross rifle",
      "name_source": "official_zh",
      "description": "刚一发明出来，就已成就了传奇！刺刀可单独购买",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_range_rifle_5_epic_icon",
      "image_id": "wls2_weapon_range_rifle_5_epic",
      "equipment_id": "wls2_weapon_range_rifle_5_epic",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 324,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 1487,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 1487
            },
            {
              "level": 2,
              "value": 1636
            },
            {
              "level": 3,
              "value": 1784
            },
            {
              "level": 4,
              "value": 1933
            },
            {
              "level": 5,
              "value": 2081
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
          "value": 30.0,
          "unit": "%"
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
              "value": 82
            },
            {
              "level": 3,
              "value": 89
            },
            {
              "level": 4,
              "value": 97
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
      "recipes": [
        {
          "id": "wls2_weapon_range_rifle_5_epic",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 10
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
          "result_id": "wls2_weapon_range_rifle_5_epic",
          "result_name": "罗斯步枪",
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
        "id": "wls2_weapon_range_rifle_5_epic",
        "reason": "audited_player_equipment",
        "name_key": "wls2_weapon_range_rifle_5_epic_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "d5d60f9c205ec87c42ee4e2b96d872252e6914ec910029db8fea99464c2b365e"
    }
  ]
};
