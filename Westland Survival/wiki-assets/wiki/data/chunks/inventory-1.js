/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-inventory-1"] = {
  "section": "inventory",
  "records": [
    {
      "id": "wls2_weapon_melee_hammer_2_common",
      "item_id": "wls2_weapon_melee_hammer_2_common",
      "name": "青铜锤",
      "name_en": "Bronze hammer",
      "name_source": "official_zh",
      "description": "打败任何与这把锤子的主人打交道的欲望",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "棍棒与锤",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/Weapon_melee_slow_2",
      "image_id": "wls2_weapon_melee_hammer_2_common",
      "equipment_id": "wls2_weapon_melee_hammer_2_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 60,
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
          ],
          "per_level_after_max": 1,
          "after_level": 5
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_hammer_2_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_1",
              "name": "煤炭",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_melee_hammer_2_common",
          "result_name": "青铜锤",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_50coins_dynamic_town_trader_offer_slow_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_hammer_2_common",
          "result_name": "青铜锤",
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
        "id": "wls2_weapon_melee_hammer_2_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_hammer_2_common_name",
        "sorting_group": "weapon_melee_mace_mallet",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "b7dcc42454f4199e36ca923926d4b89562116ffb7438ecd33071712da8ebbc29"
    },
    {
      "id": "wls2_weapon_range_musket_2_uncommon",
      "item_id": "wls2_weapon_range_musket_2_uncommon",
      "name": "印第安人滑膛枪",
      "name_en": "Kentucky Musket",
      "name_source": "official_zh",
      "description": "这把火绳枪展示了美洲原住民巧夺天工的制作工艺",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls_indian_musket",
      "image_id": "wls2_weapon_range_musket_2_uncommon",
      "equipment_id": "wls2_weapon_range_musket_2_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 80,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 183,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 183
            },
            {
              "level": 2,
              "value": 201
            },
            {
              "level": 3,
              "value": 220
            },
            {
              "level": 4,
              "value": 238
            },
            {
              "level": 5,
              "value": 256
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
          "id": "wls2_weapon_range_musket_2_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_nails_2",
              "name": "青铜紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_2",
              "name": "青铜武器零件",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_range_musket_2_uncommon",
          "result_name": "印第安人滑膛枪",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_50coins_dynamic_smuggler_offer_musket_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_musket_2_uncommon",
          "result_name": "印第安人滑膛枪",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_static_event_trader_offer_musket_2_uncommon",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_musket_2_uncommon",
          "result_name": "印第安人滑膛枪",
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
        "id": "wls2_weapon_range_musket_2_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_musket_2_uncommon_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a0127ab29d23c081678fcbcd8229edd5a24a01504900fa12f64fd6a2d772a8eb"
    },
    {
      "id": "wls2_weapon_range_diary_rifle_2_rare",
      "item_id": "wls2_weapon_range_diary_rifle_2_rare",
      "name": "无名英雄步枪",
      "name_en": "Nameless Hero Rifle",
      "name_source": "official_zh",
      "description": "可解决任何问题",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 2,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary06/wls2_weapon_range_diary_rifle_2_rare",
      "image_id": "wls2_weapon_range_diary_rifle_2_rare",
      "equipment_id": "wls2_weapon_range_diary_rifle_2_rare",
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
          "value": 270,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_range_diary_rifle_2_rare_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_2",
              "name": "青铜紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_2",
              "name": "青铜武器零件",
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
        "id": "wls2_weapon_range_diary_rifle_2_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_diary_rifle_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "4a11c395310a75f883e419e1991efe1f62d8ed401f01de6f1b061207b02ce402"
    },
    {
      "id": "wls2_weapon_xmas2020_wooden_staff",
      "item_id": "wls2_weapon_xmas2020_wooden_staff",
      "name": "圣诞老人的拐杖",
      "name_en": "Santa's Staff",
      "name_source": "official_zh",
      "description": "不仅能用来辅助行走，还能用来对抗不法之徒。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_santa_staff",
      "image_id": "wls2_weapon_xmas2020_wooden_staff",
      "equipment_id": "wls2_weapon_xmas2020_wooden_staff",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 36,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 120,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 120
            },
            {
              "level": 2,
              "value": 130
            },
            {
              "level": 3,
              "value": 140
            },
            {
              "level": 4,
              "value": 160
            },
            {
              "level": 5,
              "value": 170
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
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
              "value": 20.0
            },
            {
              "level": 3,
              "value": 25.0
            },
            {
              "level": 4,
              "value": 30.0
            },
            {
              "level": 5,
              "value": 35.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_xmas2020_trader_wls_random_item_1",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_xmas2020_wooden_staff",
          "result_name": "圣诞老人的拐杖",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_weapon_xmas2020_wooden_staff",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_rope_2",
              "name": "黄麻绳",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_xmas2020_wooden_staff",
          "result_name": "圣诞老人的拐杖",
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
        "id": "wls2_weapon_xmas2020_wooden_staff",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_santa_staff_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ff9a00a5491c0b31c4e344dc3d6293f5ec71ec1d70a2dbd43520c7dc737ffa41"
    },
    {
      "id": "wls2_weapon_xmas_21_candy_staff",
      "item_id": "wls2_weapon_xmas_21_candy_staff",
      "name": "多彩的工作人员",
      "name_en": "Colored staff",
      "name_source": "official_zh",
      "description": "带有美好设计初衷的沉重双头棒",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_candy_staff",
      "image_id": "wls2_weapon_xmas_21_candy_staff",
      "equipment_id": "wls2_weapon_xmas_21_candy_staff",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 55,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 170,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 170
            },
            {
              "level": 2,
              "value": 190
            },
            {
              "level": 3,
              "value": 210
            },
            {
              "level": 4,
              "value": 240
            },
            {
              "level": 5,
              "value": 270
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_xmas_21_candy_staff_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
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
        "id": "wls2_weapon_xmas_21_candy_staff",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_xmas_21_candy_staff_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5dfc6aaf6a3fd7e9e9dde7f0a5016be3e67d4cc9ec11e2c24cebe72d7a21461b"
    },
    {
      "id": "wls_injun_iron_spiked_mace",
      "item_id": "wls_injun_iron_spiked_mace",
      "name": "尖刺狼牙棒",
      "name_en": "Spiked Mace",
      "name_source": "official_zh",
      "description": "带有危险尖刺的结实木棍",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_injun_iron_spiked_mace",
      "image_id": "wls_injun_iron_spiked_mace",
      "equipment_id": "wls_injun_iron_spiked_mace",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 50,
          "unit": "",
          "per_level": 10,
          "maximum": 300
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 25,
          "unit": "",
          "per_level": 25,
          "maximum": 1500
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 0,
          "unit": "",
          "per_level": 1,
          "maximum": 20
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 5,
              "value": 10.0
            },
            {
              "level": 10,
              "value": 20.0
            },
            {
              "level": 20,
              "value": 30.0
            },
            {
              "level": 30,
              "value": 40.0
            },
            {
              "level": 50,
              "value": 50.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_injun_iron_spiked_mace_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
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
        "id": "wls_injun_iron_spiked_mace",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_injun_iron_spiked_mace_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5f2cd11e734af7aa629aa7c117504a13d9d6fd617f789607be64eaeaecbe4d8c"
    },
    {
      "id": "wls_injun_wooden_spiked_mace",
      "item_id": "wls_injun_wooden_spiked_mace",
      "name": "尖刺狼牙棒",
      "name_en": "Spiked Mace",
      "name_source": "official_zh",
      "description": "带有危险尖刺的结实木棍",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 2,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_injun_wooden_spiked_mace",
      "image_id": "wls_injun_wooden_spiked_mace",
      "equipment_id": "wls_injun_wooden_spiked_mace",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 50,
          "unit": "",
          "per_level": 10,
          "maximum": 300
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 100,
          "unit": "",
          "per_level": 35,
          "maximum": 2100
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 5,
              "value": 10.0
            },
            {
              "level": 10,
              "value": 20.0
            },
            {
              "level": 20,
              "value": 30.0
            },
            {
              "level": 30,
              "value": 40.0
            },
            {
              "level": 50,
              "value": 50.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_injun_wooden_spiked_mace_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
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
        "id": "wls_injun_wooden_spiked_mace",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_injun_iron_spiked_mace_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "c7fb2ceaee2ffc84037d107ac9239c980b02235b842a0cf9739fb6dbbe4b70bc"
    },
    {
      "id": "wls2_weapon_xmas_21_lollipike",
      "item_id": "wls2_weapon_xmas_21_lollipike",
      "name": "尖锐的棒棒糖",
      "name_en": "Sharpened lollipop",
      "name_source": "official_zh",
      "description": "可对敌人的健康造成非常非常巨大的影响！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 2,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_santa_lollipike",
      "image_id": "wls2_weapon_xmas_21_lollipike",
      "equipment_id": "wls2_weapon_xmas_21_lollipike",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 60,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 145,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 145
            },
            {
              "level": 2,
              "value": 165
            },
            {
              "level": 3,
              "value": 185
            },
            {
              "level": 4,
              "value": 205
            },
            {
              "level": 5,
              "value": 225
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
              "value": 13.0
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
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_xmas_21_lollipike_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
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
        "id": "wls2_weapon_xmas_21_lollipike",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_santa_lollipike_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "32532b84e0b3608e003b9734e36c465659c6e1d98ccab9982f8465adde61ee72"
    },
    {
      "id": "wls_injun_iron_sword",
      "item_id": "wls_injun_iron_sword",
      "name": "枪托战棍",
      "name_en": "Gunstock War Club",
      "name_source": "official_zh",
      "description": "还好有一根尖刺，不然看上去似乎一点杀伤力也没有",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_injun_iron_sword",
      "image_id": "wls_injun_iron_sword",
      "equipment_id": "wls_injun_iron_sword",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 50,
          "unit": "",
          "per_level": 15,
          "maximum": 300
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 21,
          "unit": "",
          "per_level": 21,
          "maximum": 1500
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 0,
          "unit": "",
          "per_level": 1,
          "maximum": 20
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 5,
              "value": 10.0
            },
            {
              "level": 10,
              "value": 20.0
            },
            {
              "level": 20,
              "value": 30.0
            },
            {
              "level": 30,
              "value": 40.0
            },
            {
              "level": 50,
              "value": 50.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_injun_iron_sword_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
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
        "id": "wls_injun_iron_sword",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_injun_iron_sword_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1592a6b531d5b165834af05983fe610e752f79702e0db420794e6ad6f318f827"
    },
    {
      "id": "wls2_halloween_21_weapon_melee_cross_2",
      "item_id": "wls2_halloween_21_weapon_melee_cross_2",
      "name": "牧师",
      "name_en": "Preacher",
      "name_source": "official_zh",
      "description": "面对敌人，这把武器相当可靠",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_melee_cross_2h_1",
      "image_id": "wls2_halloween_21_weapon_melee_cross_2",
      "equipment_id": "wls2_halloween_21_weapon_melee_cross_2",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 36,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 120,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 120
            },
            {
              "level": 2,
              "value": 130
            },
            {
              "level": 3,
              "value": 140
            },
            {
              "level": 4,
              "value": 160
            },
            {
              "level": 5,
              "value": 170
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
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
              "value": 20.0
            },
            {
              "level": 3,
              "value": 25.0
            },
            {
              "level": 4,
              "value": 30.0
            },
            {
              "level": 5,
              "value": 35.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_melee_cross_2",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_25_currency_pumpkin",
              "name": "幽灵南瓜",
              "amount": 150
            }
          ],
          "result_id": "wls2_halloween_21_weapon_melee_cross_2",
          "result_name": "牧师",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_halloween_21_weapon_melee_cross_2_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_rope_2",
              "name": "黄麻绳",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
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
        "id": "wls2_halloween_21_weapon_melee_cross_2",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_halloween_melee_cross_2h_1_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "7f6828311ba5dbd582a3320eee805fbcd780b2c21aa9a0b728fa2a6156b0b7ba"
    },
    {
      "id": "wls2_halloween_event_melee_cross_2h_1",
      "item_id": "wls2_halloween_event_melee_cross_2h_1",
      "name": "牧师",
      "name_en": "Preacher",
      "name_source": "official_zh",
      "description": "面对敌人，这把武器相当可靠",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_melee_cross_2h_1",
      "image_id": "wls2_halloween_event_melee_cross_2h_1",
      "equipment_id": "wls2_halloween_event_melee_cross_2h_1",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 36,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 120,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 120
            },
            {
              "level": 2,
              "value": 130
            },
            {
              "level": 3,
              "value": 140
            },
            {
              "level": 4,
              "value": 160
            },
            {
              "level": 5,
              "value": 170
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
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
              "value": 20.0
            },
            {
              "level": 3,
              "value": 25.0
            },
            {
              "level": 4,
              "value": 30.0
            },
            {
              "level": 5,
              "value": 35.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_event_melee_cross_2h_1",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_rope_2",
              "name": "黄麻绳",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 2
            }
          ],
          "result_id": "wls2_halloween_event_melee_cross_2h_1",
          "result_name": "牧师",
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
        "id": "wls2_halloween_event_melee_cross_2h_1",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_halloween_melee_cross_2h_1_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "7f6828311ba5dbd582a3320eee805fbcd780b2c21aa9a0b728fa2a6156b0b7ba"
    },
    {
      "id": "wls2_halloween_melee_cross_2h_1",
      "item_id": "wls2_halloween_melee_cross_2h_1",
      "name": "牧师",
      "name_en": "Preacher",
      "name_source": "official_zh",
      "description": "面对敌人，这把武器相当可靠",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_melee_cross_2h_1",
      "image_id": "wls2_halloween_melee_cross_2h_1",
      "equipment_id": "wls2_halloween_melee_cross_2h_1",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 80,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_halloween_melee_cross_2h_1_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_rope_2",
              "name": "黄麻绳",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
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
        "id": "wls2_halloween_melee_cross_2h_1",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_halloween_melee_cross_2h_1_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "7f6828311ba5dbd582a3320eee805fbcd780b2c21aa9a0b728fa2a6156b0b7ba"
    },
    {
      "id": "wls2_halloween_melee_cross_2h_2",
      "item_id": "wls2_halloween_melee_cross_2h_2",
      "name": "神圣十字弩",
      "name_en": "Holy cross",
      "name_source": "official_zh",
      "description": "这个物品绝对是从当地教堂里偷来的",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_melee_cross_2h_2",
      "image_id": "wls2_halloween_melee_cross_2h_2",
      "equipment_id": "wls2_halloween_melee_cross_2h_2",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 80,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_halloween_melee_cross_2h_2_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
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
        "id": "wls2_halloween_melee_cross_2h_2",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_halloween_melee_cross_2h_3_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "5616b248c841591e5ae24b7fe7d2fd8e344c2a1dcd87c727f31d1be97ccbf301"
    },
    {
      "id": "wls2_weapon_melee_middle_2",
      "item_id": "wls2_weapon_melee_middle_2",
      "name": "铁制战斧",
      "name_en": "Iron tomahawk",
      "name_source": "official_zh",
      "description": "用上好木材和铁制成的强力战斧。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls_medium_metal_tomahawk",
      "image_id": "wls2_weapon_melee_middle_2",
      "equipment_id": "wls2_weapon_melee_middle_2",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 66,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_35coins_dynamic_south_trader_offer_middle_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_middle_2",
          "result_name": "铁制战斧",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_melee_middle_2_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_wood_1",
              "name": "松木",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
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
        "id": "wls2_weapon_melee_middle_2",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_medium_metal_tomahawk_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "cc3bb96a356ebe29d6159aaf68a5e9b0313a9d515a096de617b91ac734f9f586"
    },
    {
      "id": "wls2_weapon_melee_knife_2_uncommon",
      "item_id": "wls2_weapon_melee_knife_2_uncommon",
      "name": "战刃",
      "name_en": "War knife",
      "name_source": "official_zh",
      "description": "用于近身格斗的匕首",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_knife_2_uncommon_icon",
      "image_id": "wls2_weapon_melee_knife_2_uncommon",
      "equipment_id": "wls2_weapon_melee_knife_2_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 60,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
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
          ],
          "per_level_after_max": 1,
          "after_level": 5
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_knife_2_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_1",
              "name": "煤炭",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_melee_knife_2_uncommon",
          "result_name": "战刃",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_75coins_dynamic_town_trader_offer_knife_2_uncommon",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_knife_2_uncommon",
          "result_name": "战刃",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_ftue_ab_tutorial_trader_slot_8",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_knife_2_uncommon",
          "result_name": "战刃",
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
        "id": "wls2_weapon_melee_knife_2_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_2_uncommon_name",
        "sorting_group": "weapon_melee_knife",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "2fc7d19a99a459e65133654a9d2376206336d2b6b48d91f9a8daab3bce9a8dc5"
    },
    {
      "id": "wls2_weapon_melee_knife_2_rare",
      "item_id": "wls2_weapon_melee_knife_2_rare",
      "name": "水牛剥皮刀",
      "name_en": "Skinner Buffalo",
      "name_source": "official_zh",
      "description": "最负盛名的绿河匕首",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 2,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_knife_2_rare_icon",
      "image_id": "wls2_weapon_melee_knife_2_rare",
      "equipment_id": "wls2_weapon_melee_knife_2_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 75,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 131,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 131
            },
            {
              "level": 2,
              "value": 144
            },
            {
              "level": 3,
              "value": 157
            },
            {
              "level": 4,
              "value": 170
            },
            {
              "level": 5,
              "value": 183
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
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_melee_knife_2_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_1",
              "name": "煤炭",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_melee_knife_2_rare",
          "result_name": "水牛剥皮刀",
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
        "id": "wls2_weapon_melee_knife_2_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_2_rare_name",
        "sorting_group": "weapon_melee_knife",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "864ef879ce9040dd010af29935fa3d8da95ad5d5cec86b5d58f2570f2f1172a0"
    },
    {
      "id": "wls_injun_ceremonial_dagger",
      "item_id": "wls_injun_ceremonial_dagger",
      "name": "海狸尾刀",
      "name_en": "Beaver Tail Knife",
      "name_source": "official_zh",
      "description": "锋利的印第安匕首",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_injun_ceremonial_dagger",
      "image_id": "wls_injun_ceremonial_dagger",
      "equipment_id": "wls_injun_ceremonial_dagger",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 50,
          "unit": "",
          "per_level": 15,
          "maximum": 300
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 30,
          "unit": "",
          "per_level": 25,
          "maximum": 1500
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 0,
          "unit": "",
          "per_level": 1,
          "maximum": 20
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 10.0,
          "unit": "%",
          "levels": [
            {
              "level": 5,
              "value": 10.0
            },
            {
              "level": 10,
              "value": 20.0
            },
            {
              "level": 20,
              "value": 30.0
            },
            {
              "level": 30,
              "value": 40.0
            },
            {
              "level": 50,
              "value": 50.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_injun_ceremonial_dagger_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_coal_1",
              "name": "煤炭",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
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
        "id": "wls_injun_ceremonial_dagger",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_injun_ceremonial_dagger_name",
        "sorting_group": "weapon_melee_knife",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "f3318cd6155212b2e21fa9ba804d3afa45e1760a9848bf171c328a17e31dead3"
    },
    {
      "id": "wls2_weapon_melee_knife_2_common",
      "item_id": "wls2_weapon_melee_knife_2_common",
      "name": "青铜匕首",
      "name_en": "Bronze dagger",
      "name_source": "official_zh",
      "description": "极其适合自卫的匕首",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "短刀",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_fast_3",
      "image_id": "wls2_weapon_melee_knife_2_common",
      "equipment_id": "wls2_weapon_melee_knife_2_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 60,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 67,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 67
            },
            {
              "level": 2,
              "value": 74
            },
            {
              "level": 3,
              "value": 81
            },
            {
              "level": 4,
              "value": 87
            },
            {
              "level": 5,
              "value": 94
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
          "id": "wls2_weapon_melee_knife_2_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_1",
              "name": "煤炭",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 1
            }
          ],
          "result_id": "wls2_weapon_melee_knife_2_common",
          "result_name": "青铜匕首",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_50coins_dynamic_town_trader_offer_dagger_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_knife_2_common",
          "result_name": "青铜匕首",
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
        "id": "wls2_weapon_melee_knife_2_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_knife_2_common_name",
        "sorting_group": "weapon_melee_knife",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "44d20ff2f27e1297af6795532488de9459d6e826425d576a367b35c02011a3f0"
    },
    {
      "id": "wls2_weapon_melee_spear_2_uncommon",
      "item_id": "wls2_weapon_melee_spear_2_uncommon",
      "name": "战矛",
      "name_en": "War spear",
      "name_source": "official_zh",
      "description": "剑刃下方设有特制横梁",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "长矛与军刀",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_spear_2_uncommon_icon",
      "image_id": "wls2_weapon_melee_spear_2_uncommon",
      "equipment_id": "wls2_weapon_melee_spear_2_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 70,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 139,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 139
            },
            {
              "level": 2,
              "value": 153
            },
            {
              "level": 3,
              "value": 167
            },
            {
              "level": 4,
              "value": 181
            },
            {
              "level": 5,
              "value": 195
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
          "id": "wls2_weapon_melee_spear_2_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_1",
              "name": "煤炭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_melee_spear_2_uncommon",
          "result_name": "战矛",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_100coins_dynamic_town_trader_offer_spear_2_uncommon",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_spear_2_uncommon",
          "result_name": "战矛",
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
        "id": "wls2_weapon_melee_spear_2_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_spear_2_uncommon_name",
        "sorting_group": "weapon_melee_spear_saber",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "811ad7da635042902c9738afdd61fb514f8e0158703df05673eb536aae59f100"
    },
    {
      "id": "wls2_weapon_melee_spear_2_common",
      "item_id": "wls2_weapon_melee_spear_2_common",
      "name": "青铜矛",
      "name_en": "Bronze spear",
      "name_source": "official_zh",
      "description": "使用坚固的橡树枝和青铜矛尖制成的长矛",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "长矛与军刀",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_middle_2",
      "image_id": "wls2_weapon_melee_spear_2_common",
      "equipment_id": "wls2_weapon_melee_spear_2_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 70,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 101,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 101
            },
            {
              "level": 2,
              "value": 111
            },
            {
              "level": 3,
              "value": 121
            },
            {
              "level": 4,
              "value": 131
            },
            {
              "level": 5,
              "value": 141
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
          "id": "wls2_weapon_melee_spear_2_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_1",
              "name": "煤炭",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_melee_spear_2_common",
          "result_name": "青铜矛",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_50coins_dynamic_town_trader_offer_spear_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_spear_2_common",
          "result_name": "青铜矛",
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
        "id": "wls2_weapon_melee_spear_2_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_spear_2_common_name",
        "sorting_group": "weapon_melee_spear_saber",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "47cbedef5a497a9037eb20bcb5361bc38b312117a730eb354df3daa8b6febf66"
    },
    {
      "id": "wls2_weapon_range_shotgun_2_rare",
      "item_id": "wls2_weapon_range_shotgun_2_rare",
      "name": "伯莱塔",
      "name_en": "Beretta",
      "name_source": "official_zh",
      "description": "轻便、迅捷、易于使用，适用任何场合",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 2,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_shotgun_2_rare_icon",
      "image_id": "wls2_weapon_range_shotgun_2_rare",
      "equipment_id": "wls2_weapon_range_shotgun_2_rare",
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
          "value": 263,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 263
            },
            {
              "level": 2,
              "value": 290
            },
            {
              "level": 3,
              "value": 316
            },
            {
              "level": 4,
              "value": 342
            },
            {
              "level": 5,
              "value": 369
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
          "id": "wls2_weapon_range_shotgun_2_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_2",
              "name": "青铜紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_2",
              "name": "青铜武器零件",
              "amount": 8
            }
          ],
          "result_id": "wls2_weapon_range_shotgun_2_rare",
          "result_name": "伯莱塔",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_200coins_dynamic_smuggler_offer_shotgun_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_shotgun_2_rare",
          "result_name": "伯莱塔",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_static_event_trader_offer_shotgun_2_rare",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_shotgun_2_rare",
          "result_name": "伯莱塔",
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
        "id": "wls2_weapon_range_shotgun_2_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_shotgun_2_rare_name",
        "sorting_group": "weapon_range_shotgun",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "46c263eb2514f19654ea04c9ee64c0d9ed6955d27aef1028e84fd9419bdfb0ad"
    },
    {
      "id": "wls2_weapon_ws_day2024_shotgun_2",
      "item_id": "wls2_weapon_ws_day2024_shotgun_2",
      "name": "周年庆散弹枪",
      "name_en": "Anniversary shotgun",
      "name_source": "official_zh",
      "description": "奖励武器。用来射击和炫耀都很合适！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 2,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_shotgun",
      "image_id": "wls2_weapon_ws_day2024_shotgun_2",
      "equipment_id": "wls2_weapon_ws_day2024_shotgun_2",
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
          "value": 263,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 263
            },
            {
              "level": 2,
              "value": 290
            },
            {
              "level": 3,
              "value": 316
            },
            {
              "level": 4,
              "value": 342
            },
            {
              "level": 5,
              "value": 369
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
          "id": "wls2_weapon_ws_day2024_shotgun_2_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_2",
              "name": "青铜紧固件",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_2",
              "name": "青铜武器零件",
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
        "id": "wls2_weapon_ws_day2024_shotgun_2",
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
      "id": "wls2_weapon_xmas2024_shotgun_2",
      "item_id": "wls2_weapon_xmas2024_shotgun_2",
      "name": "暴风雪",
      "name_en": "Blizzard",
      "name_source": "official_zh",
      "description": "没有人能阻止自然的力量",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 2,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary08/wls2_xmas_24_shotgun",
      "image_id": "wls2_weapon_xmas2024_shotgun_2",
      "equipment_id": "wls2_weapon_xmas2024_shotgun_2",
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
          "value": 346,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 346
            },
            {
              "level": 2,
              "value": 381
            },
            {
              "level": 3,
              "value": 415
            },
            {
              "level": 4,
              "value": 449
            },
            {
              "level": 5,
              "value": 485
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
          "id": "wls2_weapon_xmas2024_shotgun_2_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_2",
              "name": "青铜紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_2",
              "name": "青铜武器零件",
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
        "id": "wls2_weapon_xmas2024_shotgun_2",
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
      "id": "wls2_weapon_lunar_shotgun_2_rare",
      "item_id": "wls2_weapon_lunar_shotgun_2_rare",
      "name": "火焰 霰弹枪",
      "name_en": "Flame shotgun",
      "name_source": "official_zh",
      "description": "一发子弹像一群火热的马将打击你的敌人",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "霰弹枪",
      "tier": 2,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary10/wls2_weapon_range_shotgun_lunar_icon",
      "image_id": "wls2_weapon_lunar_shotgun_2_rare",
      "equipment_id": "wls2_weapon_lunar_shotgun_2_rare",
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
          "value": 263,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 263
            },
            {
              "level": 2,
              "value": 290
            },
            {
              "level": 3,
              "value": 316
            },
            {
              "level": 4,
              "value": 342
            },
            {
              "level": 5,
              "value": 369
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
          "value": 26,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 26
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
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_lunar_shotgun_2_rare_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_1",
              "name": "铜锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_1",
              "name": "铜紧固件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_1",
              "name": "铜制武器零件",
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
        "id": "wls2_weapon_lunar_shotgun_2_rare",
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
      "id": "wls2_weapon_melee_fast_3",
      "item_id": "wls2_weapon_melee_fast_3",
      "name": "博伊刀",
      "name_en": "Bowie knife",
      "name_source": "official_zh",
      "description": "狂野西部居民能够买得起的最好的刀刃。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 3,
      "rarity": null,
      "max_stack": 1,
      "stack_type": "durability",
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "image_id": "wls2_weapon_melee_fast_3",
      "equipment_id": "wls2_weapon_melee_fast_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 68,
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
        "id": "wls2_weapon_melee_fast_3",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_bowie_knife_name",
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
      "id": "wls2_weapon_ws_day2021_confetti",
      "item_id": "wls2_weapon_ws_day2021_confetti",
      "name": "周年庆礼花枪",
      "name_en": "",
      "name_source": "descriptive_fallback",
      "description": "这支霰弹枪结合了致命的精准度和五彩缤纷的喜庆气氛，为战场带来欢乐。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "image_id": "wls2_weapon_ws_day2021_confetti",
      "equipment_id": "wls2_weapon_ws_day2021_confetti",
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
          "value": 242,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 242
            },
            {
              "level": 2,
              "value": 264
            },
            {
              "level": 3,
              "value": 286
            },
            {
              "level": 4,
              "value": 319
            },
            {
              "level": 5,
              "value": 341
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
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
        "id": "wls2_weapon_ws_day2021_confetti",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_ws_day2021_confetti_name",
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
      "id": "wls2_weapon_range_firearms_shotgun_3",
      "item_id": "wls2_weapon_range_firearms_shotgun_3",
      "name": "折管式散弹枪",
      "name_en": "Break-open shotgun",
      "name_source": "official_zh",
      "description": "折叠枪比普通的枪支威力更大。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "image_id": "wls2_weapon_range_firearms_shotgun_3",
      "equipment_id": "wls2_weapon_range_firearms_shotgun_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 135,
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
        "id": "wls2_weapon_range_firearms_shotgun_3",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_break-open_shotgun_name",
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
      "id": "wls2_weapon_range_firearms_musket_3",
      "item_id": "wls2_weapon_range_firearms_musket_3",
      "name": "斯普林菲尔德. 58 口径步枪",
      "name_en": "Springfield .58 rifle",
      "name_source": "official_zh",
      "description": "这支步枪适合用来狩猎野生动物。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "image_id": "wls2_weapon_range_firearms_musket_3",
      "equipment_id": "wls2_weapon_range_firearms_musket_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 110,
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
        "id": "wls2_weapon_range_firearms_musket_3",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_springfield_.58_name",
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
      "id": "wls2_weapon_range_throwing_bow_3",
      "item_id": "wls2_weapon_range_throwing_bow_3",
      "name": "普通复合弓",
      "name_en": "Average composite bow",
      "name_source": "official_zh",
      "description": "由三种木材巧妙制成的弓，最适合狩猎。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 3,
      "rarity": null,
      "max_stack": 1,
      "stack_type": "durability",
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "image_id": "wls2_weapon_range_throwing_bow_3",
      "equipment_id": "wls2_weapon_range_throwing_bow_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 63,
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
        "id": "wls2_weapon_range_throwing_bow_3",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_medium_composite_bow_name",
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
      "id": "wls2_weapon_range_firearms_pistol_3",
      "item_id": "wls2_weapon_range_firearms_pistol_3",
      "name": "燧石决斗手枪",
      "name_en": "Flint dueling pistol",
      "name_source": "official_zh",
      "description": "挑唆强盗引发冲突不是个好主意，但这把手枪能帮助你减少他们的数量",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "image_id": "wls2_weapon_range_firearms_pistol_3",
      "equipment_id": "wls2_weapon_range_firearms_pistol_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 135,
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
        "id": "wls2_weapon_range_firearms_pistol_3",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_Weapon_range_firearms_pistol_3_name",
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
      "id": "wls2_weapon_melee_middle_spear_3",
      "item_id": "wls2_weapon_melee_middle_spear_3",
      "name": "铁矛",
      "name_en": "Iron spear",
      "name_source": "official_zh",
      "description": "高手使用",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "image_id": "wls2_weapon_melee_middle_spear_3",
      "equipment_id": "wls2_weapon_melee_middle_spear_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 81,
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
        "id": "wls2_weapon_melee_middle_spear_3",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_metal_spear_name",
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
      "id": "wls2_weapon_melee_slow_3",
      "item_id": "wls2_weapon_melee_slow_3",
      "name": "铁锤",
      "name_en": "Iron hammer",
      "name_source": "official_zh",
      "description": "连雷神都会羡慕这把锤子的主人。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "其他武器",
      "tier": 3,
      "rarity": null,
      "max_stack": 1,
      "stack_type": "durability",
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "sprite": "UI_WW_AlphaBinary03/Wls_ear",
      "image_id": "wls2_weapon_melee_slow_3",
      "equipment_id": "wls2_weapon_melee_slow_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 54,
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
        "id": "wls2_weapon_melee_slow_3",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_metal_hammer_name",
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
      "id": "wls2_weapon_easter_22_bow_t3",
      "item_id": "wls2_weapon_easter_22_bow_t3",
      "name": "胡咧咧弓",
      "name_en": "Balderdash",
      "name_source": "official_zh",
      "description": "不得不说，造这把弓的人很有想象力。更重要的是，它真的能当弓用！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弓",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_bow",
      "image_id": "wls2_weapon_easter_22_bow_t3",
      "equipment_id": "wls2_weapon_easter_22_bow_t3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 80,
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
              "value": 327
            },
            {
              "level": 3,
              "value": 356
            },
            {
              "level": 4,
              "value": 389
            },
            {
              "level": 5,
              "value": 423
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
          "id": "wls2_weapon_easter_22_bow_t3_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_rope_2",
              "name": "黄麻绳",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
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
        "id": "wls2_weapon_easter_22_bow_t3",
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
      "id": "wls2_weapon_range_bow_3_common",
      "item_id": "wls2_weapon_range_bow_3_common",
      "name": "长弓",
      "name_en": "Longbow",
      "name_source": "official_zh",
      "description": "由两种木材制成的长弓。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弓",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls_medium_composite_bow",
      "image_id": "wls2_weapon_range_bow_3_common",
      "equipment_id": "wls2_weapon_range_bow_3_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 80,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 149,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 149
            },
            {
              "level": 2,
              "value": 164
            },
            {
              "level": 3,
              "value": 178
            },
            {
              "level": 4,
              "value": 194
            },
            {
              "level": 5,
              "value": 208
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
          "id": "wls2_weapon_range_bow_3_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_rope_3",
              "name": "亚麻绳",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 1
            }
          ],
          "result_id": "wls2_weapon_range_bow_3_common",
          "result_name": "长弓",
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
        "id": "wls2_weapon_range_bow_3_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_bow_3_common_name",
        "sorting_group": "bow",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": true
      },
      "image_key": "b81c83ff47271a22d17c725140b1e9d469023bb1f651d43386a4197e8e8058e9"
    },
    {
      "id": "wls2_weapon_range_bow_3_uncommon",
      "item_id": "wls2_weapon_range_bow_3_uncommon",
      "name": "阿帕切弓",
      "name_en": "Apache bow",
      "name_source": "official_zh",
      "description": "安静，致命，近距离射击时准度惊人",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弓",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_bow_3_uncommon_icon",
      "image_id": "wls2_weapon_range_bow_3_uncommon",
      "equipment_id": "wls2_weapon_range_bow_3_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 80,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 193,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 193
            },
            {
              "level": 2,
              "value": 212
            },
            {
              "level": 3,
              "value": 231
            },
            {
              "level": 4,
              "value": 251
            },
            {
              "level": 5,
              "value": 270
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
          "id": "wls2_weapon_range_bow_3_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_rope_3",
              "name": "亚麻绳",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_range_bow_3_uncommon",
          "result_name": "阿帕切弓",
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
        "id": "wls2_weapon_range_bow_3_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_bow_3_uncommon_name",
        "sorting_group": "bow",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "bfdb4f901dba0f336d9a49239524b0d38461aa9a69d3473d730020cf50d9aac4"
    },
    {
      "id": "wls2_weapon_xmas_21_crossbow",
      "item_id": "wls2_weapon_xmas_21_crossbow",
      "name": "棒棒糖十字弓",
      "name_en": "Lollipop Crossbow",
      "name_source": "official_zh",
      "description": "光彩艳丽的节日造型十字弓，可以射出尖锐的棒棒糖。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弩",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_santa_crossbow",
      "image_id": "wls2_weapon_xmas_21_crossbow",
      "equipment_id": "wls2_weapon_xmas_21_crossbow",
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
          "value": 237,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 237
            },
            {
              "level": 2,
              "value": 270
            },
            {
              "level": 3,
              "value": 303
            },
            {
              "level": 4,
              "value": 336
            },
            {
              "level": 5,
              "value": 369
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
      "recipes": [
        {
          "id": "wls2_xmas_21_trader_wls2_weapon_xmas_21_crossbow",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_xmas_23_currency_firework",
              "name": "爆竹",
              "amount": 200
            },
            {
              "id": "wls2_xmas_25_currency_firework",
              "name": "爆竹",
              "amount": 200
            }
          ],
          "result_id": "wls2_weapon_xmas_21_crossbow",
          "result_name": "棒棒糖十字弓",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_xmas_21_crossbow_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_rope_3",
              "name": "亚麻绳",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
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
        "id": "wls2_weapon_xmas_21_crossbow",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_santa_crossbow_name",
        "sorting_group": "crossbow",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "63b1963333cfdd2befe87af66e150e7c0941b198cdd467e7cafd050a1d3e8a67"
    },
    {
      "id": "wls2_halloween_21_weapon_range_crossbow_3",
      "item_id": "wls2_halloween_21_weapon_range_crossbow_3",
      "name": "盗贼的末日",
      "name_en": "Thief's doom",
      "name_source": "official_zh",
      "description": "致死的远程武器。对射击南瓜非常有效",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弩",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_crossbow_1h",
      "image_id": "wls2_halloween_21_weapon_range_crossbow_3",
      "equipment_id": "wls2_halloween_21_weapon_range_crossbow_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 66,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 193,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 193
            },
            {
              "level": 2,
              "value": 209
            },
            {
              "level": 3,
              "value": 226
            },
            {
              "level": 4,
              "value": 242
            },
            {
              "level": 5,
              "value": 264
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
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_range_crossbow_3",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_25_currency_pumpkin",
              "name": "幽灵南瓜",
              "amount": 300
            }
          ],
          "result_id": "wls2_halloween_21_weapon_range_crossbow_3",
          "result_name": "盗贼的末日",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_halloween_21_weapon_range_crossbow_3_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_rope_3",
              "name": "亚麻绳",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
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
        "id": "wls2_halloween_21_weapon_range_crossbow_3",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_halloween_range_crossbow_1h_name",
        "sorting_group": "crossbow",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "408c4b283fadcbc0cb7928e528d27445429ea997bf9ca3007cf3c9e806ed06e2"
    },
    {
      "id": "wls2_halloween_event_range_crossbow_1h",
      "item_id": "wls2_halloween_event_range_crossbow_1h",
      "name": "盗贼的末日",
      "name_en": "Thief's doom",
      "name_source": "official_zh",
      "description": "这是卡瑟琳最喜欢的十字弩。她和阿尔文一起守护牧场时使用。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弩",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_crossbow_1h",
      "image_id": "wls2_halloween_event_range_crossbow_1h",
      "equipment_id": "wls2_halloween_event_range_crossbow_1h",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 66,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 193,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 193
            },
            {
              "level": 2,
              "value": 209
            },
            {
              "level": 3,
              "value": 226
            },
            {
              "level": 4,
              "value": 242
            },
            {
              "level": 5,
              "value": 264
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
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_event_range_crossbow_1h",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_rope_3",
              "name": "亚麻绳",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
              "amount": 1
            }
          ],
          "result_id": "wls2_halloween_event_range_crossbow_1h",
          "result_name": "盗贼的末日",
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
        "id": "wls2_halloween_event_range_crossbow_1h",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_halloween_range_crossbow_1h_name",
        "sorting_group": "crossbow",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "408c4b283fadcbc0cb7928e528d27445429ea997bf9ca3007cf3c9e806ed06e2"
    },
    {
      "id": "wls2_weapon_easter_22_crossbow",
      "item_id": "wls2_weapon_easter_22_crossbow",
      "name": "胡萝卜弩",
      "name_en": "Carrotbow",
      "name_source": "official_zh",
      "description": "它会让你明白，表面人畜无害的胡萝卜，其实暗藏杀机。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "弩",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_crossbow",
      "image_id": "wls2_weapon_easter_22_crossbow",
      "equipment_id": "wls2_weapon_easter_22_crossbow",
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
          "value": 215,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 215
            },
            {
              "level": 2,
              "value": 235
            },
            {
              "level": 3,
              "value": 260
            },
            {
              "level": 4,
              "value": 280
            },
            {
              "level": 5,
              "value": 300
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
      "recipes": [
        {
          "id": "wls2_easter_22_trader_easter_crossbow",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_24_currency_egg",
              "name": "复活节彩蛋",
              "amount": 200
            }
          ],
          "result_id": "wls2_weapon_easter_22_crossbow",
          "result_name": "胡萝卜弩",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_crossbow_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_rope_2",
              "name": "黄麻绳",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
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
        "id": "wls2_weapon_easter_22_crossbow",
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
      "id": "wls2_weapon_xmas2020_handgun",
      "item_id": "wls2_weapon_xmas2020_handgun",
      "name": "五彩纸屑",
      "name_en": "Confetti",
      "name_source": "official_zh",
      "description": "采用雪花作为装饰的袖珍手枪",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_handgun",
      "image_id": "wls2_weapon_xmas2020_handgun",
      "equipment_id": "wls2_weapon_xmas2020_handgun",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 152,
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
              "value": 352
            },
            {
              "level": 3,
              "value": 380
            },
            {
              "level": 4,
              "value": 413
            },
            {
              "level": 5,
              "value": 440
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_xmas2020_trader_wls_random_item_23",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_xmas2020_handgun",
          "result_name": "五彩纸屑",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_weapon_xmas2020_handgun",
          "label": "工作台制作",
          "ingredients": [
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
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_xmas2020_handgun",
          "result_name": "五彩纸屑",
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
        "id": "wls2_weapon_xmas2020_handgun",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_xmas2019_handgun_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "d740e95ce459396d570cbcfd86b3ddbc04325f56eafb0f3f657b7e6684490418"
    },
    {
      "id": "wls2_weapon_xmas_21_handgun",
      "item_id": "wls2_weapon_xmas_21_handgun",
      "name": "五彩纸屑",
      "name_en": "Confetti",
      "name_source": "official_zh",
      "description": "采用雪花作为装饰的袖珍手枪",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_xmas2019_handgun",
      "image_id": "wls2_weapon_xmas_21_handgun",
      "equipment_id": "wls2_weapon_xmas_21_handgun",
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
          "value": 363,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 363
            },
            {
              "level": 2,
              "value": 396
            },
            {
              "level": 3,
              "value": 429
            },
            {
              "level": 4,
              "value": 462
            },
            {
              "level": 5,
              "value": 495
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
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_xmas_21_trader_wls2_weapon_xmas_21_handgun",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_xmas_23_currency_firework",
              "name": "爆竹",
              "amount": 300
            },
            {
              "id": "wls2_xmas_25_currency_firework",
              "name": "爆竹",
              "amount": 300
            }
          ],
          "result_id": "wls2_weapon_xmas_21_handgun",
          "result_name": "五彩纸屑",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_xmas_21_handgun_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
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
        "id": "wls2_weapon_xmas_21_handgun",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_xmas2019_handgun_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "d740e95ce459396d570cbcfd86b3ddbc04325f56eafb0f3f657b7e6684490418"
    },
    {
      "id": "wls2_weapon_range_pistol_3_common",
      "item_id": "wls2_weapon_range_pistol_3_common",
      "name": "决斗手枪",
      "name_en": "Dueling pistol",
      "name_source": "official_zh",
      "description": "挑唆强盗引发冲突不是个好主意，但这把手枪能帮助你减少他们的数量。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/Weapon_range_firearms_pistol_3",
      "image_id": "wls2_weapon_range_pistol_3_common",
      "equipment_id": "wls2_weapon_range_pistol_3_common",
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
          "value": 189,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 189
            },
            {
              "level": 2,
              "value": 207
            },
            {
              "level": 3,
              "value": 226
            },
            {
              "level": 4,
              "value": 245
            },
            {
              "level": 5,
              "value": 264
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_pistol_3_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 1
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
              "amount": 1
            }
          ],
          "result_id": "wls2_weapon_range_pistol_3_common",
          "result_name": "决斗手枪",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_100coins_dynamic_smuggler_offer_pistol_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_pistol_3_common",
          "result_name": "决斗手枪",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_static_event_trader_offer_pistol_3_common",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_pistol_3_common",
          "result_name": "决斗手枪",
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
        "id": "wls2_weapon_range_pistol_3_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_pistol_3_common_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1cafb1556f741e875d2ff326e72cf21ddaec45b505620799854d68b68faec569"
    },
    {
      "id": "wls2_weapon_ws_day2021_colt",
      "item_id": "wls2_weapon_ws_day2021_colt",
      "name": "周年庆左轮手枪",
      "name_en": "Anniversary revolver",
      "name_source": "official_zh",
      "description": "奖励武器。用来射击和炫耀都很合适！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_colt",
      "image_id": "wls2_weapon_ws_day2021_colt",
      "equipment_id": "wls2_weapon_ws_day2021_colt",
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
          "value": 474,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 474
            },
            {
              "level": 2,
              "value": 474
            },
            {
              "level": 3,
              "value": 474
            },
            {
              "level": 4,
              "value": 474
            },
            {
              "level": 5,
              "value": 474
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
            }
          ]
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_ws_day2021_colt_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
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
        "id": "wls2_weapon_ws_day2021_colt",
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
      "id": "wls2_weapon_ws_day2024_colt_3",
      "item_id": "wls2_weapon_ws_day2024_colt_3",
      "name": "周年庆左轮手枪",
      "name_en": "Anniversary revolver",
      "name_source": "official_zh",
      "description": "奖励武器。用来射击和炫耀都很合适！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 3,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_weapon_ws_day2021_colt",
      "image_id": "wls2_weapon_ws_day2024_colt_3",
      "equipment_id": "wls2_weapon_ws_day2024_colt_3",
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
              "value": 490
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
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_ws_day2024_colt_3_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
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
        "id": "wls2_weapon_ws_day2024_colt_3",
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
      "id": "wls2_weapon_range_halloween_23_pistol_3",
      "item_id": "wls2_weapon_range_halloween_23_pistol_3",
      "name": "恶灵的恐怖",
      "name_en": "Terror of Spirits",
      "name_source": "official_zh",
      "description": "这把枪在整个西部荒野中引起了所有灵魂的恐惧",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 3,
      "rarity": "epic",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary07/wls2_halloween_range_revolver",
      "image_id": "wls2_weapon_range_halloween_23_pistol_3",
      "equipment_id": "wls2_weapon_range_halloween_23_pistol_3",
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
              "value": 490
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
          "id": "ghost_damage_modifier",
          "label": "对幽灵的伤害增加",
          "value": 50.0,
          "unit": "%"
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_range_halloween_23_pistol_3_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 7
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 7
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
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
        "id": "wls2_weapon_range_halloween_23_pistol_3",
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
      "id": "wls2_halloween_21_weapon_range_pistol_4",
      "item_id": "wls2_halloween_21_weapon_range_pistol_4",
      "name": "手枪",
      "name_en": "Pistol",
      "name_source": "official_zh",
      "description": "枪声震耳欲聋且伤害极高",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls2_halloween_range_pistol",
      "image_id": "wls2_halloween_21_weapon_range_pistol_4",
      "equipment_id": "wls2_halloween_21_weapon_range_pistol_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 176,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 289,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 289
            },
            {
              "level": 2,
              "value": 336
            },
            {
              "level": 3,
              "value": 362
            },
            {
              "level": 4,
              "value": 394
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
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_range_pistol_4",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_25_currency_pumpkin",
              "name": "幽灵南瓜",
              "amount": 450
            }
          ],
          "result_id": "wls2_halloween_21_weapon_range_pistol_4",
          "result_name": "手枪",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_halloween_21_weapon_range_pistol_4_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_1",
              "name": "铜锭",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_nails_5",
              "name": "合金紧固件",
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
        "id": "wls2_halloween_21_weapon_range_pistol_4",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_halloween_range_pistol_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "9cf2356eb8ae7d8a679cfb2eaa7d22de8152dd468083bf6bc2d0a967c6914e69"
    },
    {
      "id": "wls2_weapon_range_revolver_3_rare",
      "item_id": "wls2_weapon_range_revolver_3_rare",
      "name": "柯尔特-帕特森",
      "name_en": "Colt Paterson",
      "name_source": "official_zh",
      "description": "又名“德克萨斯·帕特森”",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_revolver_3_rare_icon",
      "image_id": "wls2_weapon_range_revolver_3_rare",
      "equipment_id": "wls2_weapon_range_revolver_3_rare",
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
              "value": 490
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
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_revolver_3_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_range_revolver_3_rare",
          "result_name": "柯尔特-帕特森",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_static_event_trader_offer_revolver_3_rare",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_revolver_3_rare",
          "result_name": "柯尔特-帕特森",
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
        "id": "wls2_weapon_range_revolver_3_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_3_rare_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "acf129fa4d9e1ca8c3215ed04b0aacc31e8c308efb87c15094fddc427437f36b"
    },
    {
      "id": "wls2_weapon_easter_22_colt_t3",
      "item_id": "wls2_weapon_easter_22_colt_t3",
      "name": "集市柯尔特左轮",
      "name_en": "Fair Colt",
      "name_source": "official_zh",
      "description": "闪亮且五颜六色的顶级柯尔特左轮。是时候找点乐子了！",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_colt",
      "image_id": "wls2_weapon_easter_22_colt_t3",
      "equipment_id": "wls2_weapon_easter_22_colt_t3",
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
          "value": 385,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 385
            },
            {
              "level": 2,
              "value": 420
            },
            {
              "level": 3,
              "value": 457
            },
            {
              "level": 4,
              "value": 499
            },
            {
              "level": 5,
              "value": 543
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
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_colt_t3_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_2",
              "name": "青铜紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_2",
              "name": "青铜武器零件",
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
        "id": "wls2_weapon_easter_22_colt_t3",
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
      "id": "wls2_weapon_easter_22_pepperbox",
      "item_id": "wls2_weapon_easter_22_pepperbox",
      "name": "集市胡椒盒手枪",
      "name_en": "Fair Pepperbox",
      "name_source": "official_zh",
      "description": "耀眼！聒噪！就像集市的烟花一样。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_pepperbox",
      "image_id": "wls2_weapon_easter_22_pepperbox",
      "equipment_id": "wls2_weapon_easter_22_pepperbox",
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
          "value": 370,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 370
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
              "value": 515
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
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_easter_22_trader_easter_pepperbox",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_24_currency_egg",
              "name": "复活节彩蛋",
              "amount": 300
            }
          ],
          "result_id": "wls2_weapon_easter_22_pepperbox",
          "result_name": "集市胡椒盒手枪",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_22_pepperbox_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_2",
              "name": "青铜紧固件",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_2",
              "name": "青铜武器零件",
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
        "id": "wls2_weapon_easter_22_pepperbox",
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
      "id": "wls2_weapon_range_revolver_3_uncommon",
      "item_id": "wls2_weapon_range_revolver_3_uncommon",
      "name": "雷明顿左轮手枪",
      "name_en": "Remington",
      "name_source": "official_zh",
      "description": "精致且值得信赖，框架结实",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "手枪",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls_remington",
      "image_id": "wls2_weapon_range_revolver_3_uncommon",
      "equipment_id": "wls2_weapon_range_revolver_3_uncommon",
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
          "value": 267,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 267
            },
            {
              "level": 2,
              "value": 294
            },
            {
              "level": 3,
              "value": 320
            },
            {
              "level": 4,
              "value": 348
            },
            {
              "level": 5,
              "value": 374
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "bandit_damage_modifier",
          "label": "额外 伤害 给 强盗",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_revolver_3_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_range_revolver_3_uncommon",
          "result_name": "雷明顿左轮手枪",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_100coins_dynamic_smuggler_offer_revolver_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_revolver_3_uncommon",
          "result_name": "雷明顿左轮手枪",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_static_event_trader_offer_revolver_3_uncommon",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_revolver_3_uncommon",
          "result_name": "雷明顿左轮手枪",
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
        "id": "wls2_weapon_range_revolver_3_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_revolver_3_uncommon_name",
        "sorting_group": "weapon_range_pistol",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "185299245ebd023adf41d06f4386d4c73a6ad9932932cfb6b5f47eec03b7cb5f"
    },
    {
      "id": "wls2_weapon_easter_22_mallet_t3",
      "item_id": "wls2_weapon_easter_22_mallet_t3",
      "name": "复活节木槌",
      "name_en": "Easter Mallet",
      "name_source": "official_zh",
      "description": "一把集市上的彩色木槌。柄上写着：“晚安”。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "棍棒与锤",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_mallet",
      "image_id": "wls2_weapon_easter_22_mallet_t3",
      "equipment_id": "wls2_weapon_easter_22_mallet_t3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 80,
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
              "value": 327
            },
            {
              "level": 3,
              "value": 356
            },
            {
              "level": 4,
              "value": 389
            },
            {
              "level": 5,
              "value": 423
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
          "id": "wls2_weapon_easter_22_mallet_t3_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
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
        "id": "wls2_weapon_easter_22_mallet_t3",
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
      "id": "wls2_weapon_easter_mallet",
      "item_id": "wls2_weapon_easter_mallet",
      "name": "复活节木槌",
      "name_en": "Easter Mallet",
      "name_source": "official_zh",
      "description": "一把集市上的彩色木槌。柄上写着：“晚安”。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "棍棒与锤",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_mallet",
      "image_id": "wls2_weapon_easter_mallet",
      "equipment_id": "wls2_weapon_easter_mallet",
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
      "recipes": [
        {
          "id": "wls2_easter2021_trader_easter_mallet",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 250
            }
          ],
          "result_id": "wls2_weapon_easter_mallet",
          "result_name": "复活节木槌",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_mallet",
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
        "id": "wls2_weapon_easter_mallet",
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
      "id": "wls2_weapon_easter_22_mace",
      "item_id": "wls2_weapon_easter_22_mace",
      "name": "彩绘狼牙棒",
      "name_en": "Painted Mace",
      "name_source": "official_zh",
      "description": "涂有节日彩绘的近战武器，适合用来砸烂彩蛋，以及脑袋。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "棍棒与锤",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_mace",
      "image_id": "wls2_weapon_easter_22_mace",
      "equipment_id": "wls2_weapon_easter_22_mace",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 90,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 265,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 265
            },
            {
              "level": 2,
              "value": 291
            },
            {
              "level": 3,
              "value": 320
            },
            {
              "level": 4,
              "value": 345
            },
            {
              "level": 5,
              "value": 370
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
          "id": "wls2_weapon_easter_22_mace_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
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
        "id": "wls2_weapon_easter_22_mace",
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
      "id": "wls2_weapon_easter_mace",
      "item_id": "wls2_weapon_easter_mace",
      "name": "彩绘狼牙棒",
      "name_en": "Painted Mace",
      "name_source": "official_zh",
      "description": "涂有节日彩绘的近战武器，适合用来砸烂彩蛋，以及脑袋。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "棍棒与锤",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary04/wls2_easter_range_mace",
      "image_id": "wls2_weapon_easter_mace",
      "equipment_id": "wls2_weapon_easter_mace",
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
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_easter_mace",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 150
            }
          ],
          "result_id": "wls2_weapon_easter_mace",
          "result_name": "彩绘狼牙棒",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_mace",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
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
        "id": "wls2_weapon_easter_mace",
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
      "id": "wls2_weapon_melee_hammer_3_uncommon",
      "item_id": "wls2_weapon_melee_hammer_3_uncommon",
      "name": "战锤",
      "name_en": "War hammer",
      "name_source": "official_zh",
      "description": "沉重的锤头能够粉碎任何护甲",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "棍棒与锤",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_melee_hammer_3_uncommon_icon",
      "image_id": "wls2_weapon_melee_hammer_3_uncommon",
      "equipment_id": "wls2_weapon_melee_hammer_3_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 80,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 347,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 347
            },
            {
              "level": 2,
              "value": 382
            },
            {
              "level": 3,
              "value": 416
            },
            {
              "level": 4,
              "value": 451
            },
            {
              "level": 5,
              "value": 485
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
          "id": "wls2_weapon_melee_hammer_3_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_2",
              "name": "褐煤",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 3
            }
          ],
          "result_id": "wls2_weapon_melee_hammer_3_uncommon",
          "result_name": "战锤",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_150coins_dynamic_town_trader_offer_hammer_3_uncommon",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_hammer_3_uncommon",
          "result_name": "战锤",
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
        "id": "wls2_weapon_melee_hammer_3_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_hammer_3_uncommon_name",
        "sorting_group": "weapon_melee_mace_mallet",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "05b676bbacba3bd81bad57352a57535d7ced87c7bd934468eb7656f892bc7b85"
    },
    {
      "id": "wls2_weapon_melee_hammer_3_common",
      "item_id": "wls2_weapon_melee_hammer_3_common",
      "name": "铁锤",
      "name_en": "Iron hammer",
      "name_source": "official_zh",
      "description": "连雷神都会羡慕这把锤子的主人",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "棍棒与锤",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/Weapon_melee_slow_3",
      "image_id": "wls2_weapon_melee_hammer_3_common",
      "equipment_id": "wls2_weapon_melee_hammer_3_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 80,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 251,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 251
            },
            {
              "level": 2,
              "value": 276
            },
            {
              "level": 3,
              "value": 301
            },
            {
              "level": 4,
              "value": 327
            },
            {
              "level": 5,
              "value": 352
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
          "id": "wls2_weapon_melee_hammer_3_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_2",
              "name": "褐煤",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_melee_hammer_3_common",
          "result_name": "铁锤",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_100coins_dynamic_town_trader_offer_slow_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_melee_hammer_3_common",
          "result_name": "铁锤",
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
        "id": "wls2_weapon_melee_hammer_3_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_melee_hammer_3_common_name",
        "sorting_group": "weapon_melee_mace_mallet",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a087488265c4d09d3e13548e77c250b5ef682ebcb870c208e28c9fd544557de2"
    },
    {
      "id": "wls2_weapon_range_musket_3_uncommon",
      "item_id": "wls2_weapon_range_musket_3_uncommon",
      "name": "史密斯卡宾枪",
      "name_en": "Smith carbine",
      "name_source": "official_zh",
      "description": "紧凑且轻便的武器",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_musket_3_uncommon_icon",
      "image_id": "wls2_weapon_range_musket_3_uncommon",
      "equipment_id": "wls2_weapon_range_musket_3_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 116,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 322,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 322
            },
            {
              "level": 2,
              "value": 354
            },
            {
              "level": 3,
              "value": 386
            },
            {
              "level": 4,
              "value": 419
            },
            {
              "level": 5,
              "value": 451
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_musket_3_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 2
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_range_musket_3_uncommon",
          "result_name": "史密斯卡宾枪",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_static_event_trader_offer_musket_3_uncommon",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_musket_3_uncommon",
          "result_name": "史密斯卡宾枪",
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
        "id": "wls2_weapon_range_musket_3_uncommon",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_musket_3_uncommon_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "0eed874c8f3e18981d143b2f863472152c70c5088ef4fd1d485ef7a15c7e7f31"
    },
    {
      "id": "wls2_weapon_range_musket_3_rare",
      "item_id": "wls2_weapon_range_musket_3_rare",
      "name": "夏普步枪",
      "name_en": "Sharps rifle",
      "name_source": "official_zh",
      "description": "由克里斯蒂安·夏普斯设计的单发步枪",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_weapon_range_musket_3_rare_icon",
      "image_id": "wls2_weapon_range_musket_3_rare",
      "equipment_id": "wls2_weapon_range_musket_3_rare",
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
          "value": 455,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 455
            },
            {
              "level": 2,
              "value": 501
            },
            {
              "level": 3,
              "value": 546
            },
            {
              "level": 4,
              "value": 592
            },
            {
              "level": 5,
              "value": 637
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
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_musket_3_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 5
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 8
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 3
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
              "amount": 5
            }
          ],
          "result_id": "wls2_weapon_range_musket_3_rare",
          "result_name": "夏普步枪",
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
        "id": "wls2_weapon_range_musket_3_rare",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_musket_3_rare_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "15aacb00d0e8beef6fd194ef225a590d7ed1ac8ca624b72f4da818f9c43ebf4e"
    },
    {
      "id": "wls2_weapon_range_musket_3_common",
      "item_id": "wls2_weapon_range_musket_3_common",
      "name": "斯普林菲尔德.58 步枪",
      "name_en": "Springfield .58 rifle",
      "name_source": "official_zh",
      "description": "这支步枪适合用来狩猎野生动物。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "步枪",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls_springfield_.58",
      "image_id": "wls2_weapon_range_musket_3_common",
      "equipment_id": "wls2_weapon_range_musket_3_common",
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
          "value": 233,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 233
            },
            {
              "level": 2,
              "value": 256
            },
            {
              "level": 3,
              "value": 281
            },
            {
              "level": 4,
              "value": 304
            },
            {
              "level": 5,
              "value": 327
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "animal_damage_modifier",
          "label": "对动物的额外伤害",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_weapon_range_musket_3_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 1
            },
            {
              "id": "wls2_resourse_fourfold_gunparts_3",
              "name": "铁制武器零件",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_range_musket_3_common",
          "result_name": "斯普林菲尔德.58 步枪",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_100coins_dynamic_smuggler_offer_musket_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_range_musket_3_common",
          "result_name": "斯普林菲尔德.58 步枪",
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
        "id": "wls2_weapon_range_musket_3_common",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_range_musket_3_common_name",
        "sorting_group": "weapon_range_rifle",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "1cd340ad871ae5a844eed24bf6ad20cf7ae2130019c7a120b7e79a94cebe92eb"
    },
    {
      "id": "wls2_weapon_xmas2020_candle_staff",
      "item_id": "wls2_weapon_xmas2020_candle_staff",
      "name": "三叉戟",
      "name_en": "Trident",
      "name_source": "official_zh",
      "description": "不会让你成为海王，但能打伤敌人",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_candle_staff",
      "image_id": "wls2_weapon_xmas2020_candle_staff",
      "equipment_id": "wls2_weapon_xmas2020_candle_staff",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 70,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 277,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 277
            },
            {
              "level": 2,
              "value": 337
            },
            {
              "level": 3,
              "value": 367
            },
            {
              "level": 4,
              "value": 387
            },
            {
              "level": 5,
              "value": 411
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
          "value": 150,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 150
            },
            {
              "level": 2,
              "value": 175
            },
            {
              "level": 3,
              "value": 200
            },
            {
              "level": 4,
              "value": 225
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
      "recipes": [
        {
          "id": "wls2_xmas2020_trader_wls_random_item_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_xmas2020_candle_staff",
          "result_name": "三叉戟",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_weapon_xmas2020_candle_staff",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 6
            },
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 5
            }
          ],
          "result_id": "wls2_weapon_xmas2020_candle_staff",
          "result_name": "三叉戟",
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
        "id": "wls2_weapon_xmas2020_candle_staff",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_candle_staff_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a500e81805dadc4ca1c024a90d213c6c71c552aea78aa9f920a15ee8c6a4d963"
    },
    {
      "id": "wls2_weapon_xmas_21_candle_staff",
      "item_id": "wls2_weapon_xmas_21_candle_staff",
      "name": "三叉戟",
      "name_en": "Trident",
      "name_source": "official_zh",
      "description": "不会让你成为海王，但能打伤敌人",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_candle_staff",
      "image_id": "wls2_weapon_xmas_21_candle_staff",
      "equipment_id": "wls2_weapon_xmas_21_candle_staff",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 60,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 352,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 352
            },
            {
              "level": 2,
              "value": 385
            },
            {
              "level": 3,
              "value": 418
            },
            {
              "level": 4,
              "value": 451
            },
            {
              "level": 5,
              "value": 484
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
          "value": 150,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 150
            },
            {
              "level": 2,
              "value": 175
            },
            {
              "level": 3,
              "value": 200
            },
            {
              "level": 4,
              "value": 225
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
          "id": "wls2_weapon_xmas_21_candle_staff",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
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
        "id": "wls2_weapon_xmas_21_candle_staff",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls2_weapon_xmas2020_candle_staff_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "a500e81805dadc4ca1c024a90d213c6c71c552aea78aa9f920a15ee8c6a4d963"
    },
    {
      "id": "wls2_weapon_xmas_21_bell_staff",
      "item_id": "wls2_weapon_xmas_21_bell_staff",
      "name": "叮叮",
      "name_en": "Ding-ding",
      "name_source": "official_zh",
      "description": "每一击都伴随着清脆的铃铛声",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_xmas_bell_staff",
      "image_id": "wls2_weapon_xmas_21_bell_staff",
      "equipment_id": "wls2_weapon_xmas_21_bell_staff",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 80,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 204,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 204
            },
            {
              "level": 2,
              "value": 237
            },
            {
              "level": 3,
              "value": 270
            },
            {
              "level": 4,
              "value": 303
            },
            {
              "level": 5,
              "value": 336
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
          "id": "wls2_weapon_xmas_21_bell_staff",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_3",
              "name": "亚麻织物卷",
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
        "id": "wls2_weapon_xmas_21_bell_staff",
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
      "id": "wls2_weapon_xmas_21_wooden_staff",
      "item_id": "wls2_weapon_xmas_21_wooden_staff",
      "name": "圣诞老人的拐杖",
      "name_en": "Santa's Staff",
      "name_source": "official_zh",
      "description": "不仅能用来辅助行走，还能用来对抗不法之徒。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary03/wls_santa_staff",
      "image_id": "wls2_weapon_xmas_21_wooden_staff",
      "equipment_id": "wls2_weapon_xmas_21_wooden_staff",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 80,
          "unit": ""
        },
        {
          "id": "damage",
          "label": "伤害",
          "value": 320,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 320
            },
            {
              "level": 2,
              "value": 350
            },
            {
              "level": 3,
              "value": 380
            },
            {
              "level": 4,
              "value": 410
            },
            {
              "level": 5,
              "value": 440
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
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
              "value": 20.0
            },
            {
              "level": 3,
              "value": 25.0
            },
            {
              "level": 4,
              "value": 30.0
            },
            {
              "level": 5,
              "value": 35.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_xmas_21_wooden_staff_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
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
        "id": "wls2_weapon_xmas_21_wooden_staff",
        "reason": "audited_player_equipment",
        "name_key": "inventory_stack_view_wls_santa_staff_name",
        "sorting_group": "weapon_melee_other_event",
        "stat_table": "inventory_stack_stats",
        "behaviour_table": null,
        "augmentation_id": null,
        "blueprint_lootbox_id": null,
        "source_location_ids": [],
        "quest_referenced": false
      },
      "image_key": "ff9a00a5491c0b31c4e344dc3d6293f5ec71ec1d70a2dbd43520c7dc737ffa41"
    },
    {
      "id": "wls2_halloween_21_weapon_melee_sword_4",
      "item_id": "wls2_halloween_21_weapon_melee_sword_4",
      "name": "寻肉者",
      "name_en": "Flesh Seeker",
      "name_source": "official_zh",
      "description": "一把相当不寻常的剑，剑刃非常危险。",
      "category": "weapon",
      "category_label": "武器",
      "subcategory": "活动近战武器",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "stack_type": "durability",
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "sprite": "UI_WW_AlphaBinary05/wls2_halloween_1h_sword_4",
      "image_id": "wls2_halloween_21_weapon_melee_sword_4",
      "equipment_id": "wls2_halloween_21_weapon_melee_sword_4",
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
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_melee_sword_4",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_25_currency_pumpkin",
              "name": "幽灵南瓜",
              "amount": 150
            }
          ],
          "result_id": "wls2_halloween_21_weapon_melee_sword_4",
          "result_name": "寻肉者",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_halloween_21_weapon_melee_sword_4_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 6
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
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
        "id": "wls2_halloween_21_weapon_melee_sword_4",
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
    }
  ]
};
