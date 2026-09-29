/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-inventory-13"] = {
  "section": "inventory",
  "records": [
    {
      "id": "wls2_backpack_indian_1_common",
      "name": "学徒包",
      "name_en": "Apprentice bag",
      "name_source": "official_zh",
      "description": "简约的布包，适合刚开始探索自然之人。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_indian_1_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "health_increment",
          "label": "生命增加",
          "value": 3,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 3
            },
            {
              "level": 2,
              "value": 6
            },
            {
              "level": 3,
              "value": 9
            },
            {
              "level": 4,
              "value": 12
            },
            {
              "level": 5,
              "value": 15
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
          "id": "wls2_backpack_indian_1_common_ab_ftue",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 5
            },
            {
              "id": "wls2_resourse_secondary_rope_1",
              "name": "绳索",
              "amount": 5
            }
          ],
          "result_id": "wls2_backpack_indian_1_common",
          "result_name": "学徒包",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_backpack_indian_1_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 5
            },
            {
              "id": "wls2_resourse_secondary_rope_1",
              "name": "绳索",
              "amount": 5
            }
          ],
          "result_id": "wls2_backpack_indian_1_common",
          "result_name": "学徒包",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_backpack_indian_1_common_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_rope_1",
              "name": "绳索",
              "amount": 3
            }
          ],
          "result_id": "wls2_backpack_indian_1_common",
          "result_name": "学徒包",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "85507006c821f9b38610a1c27a22f1e17bc6cc77ca0049cecf6aa130cf2b9df7"
    },
    {
      "id": "wls2_backpack_1",
      "name": "肩包",
      "name_en": "Shoulder bag",
      "name_source": "official_zh",
      "description": "简单的包，能够让你携带更多物品。可增加 5 个物品栏槽位",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_1",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_backpack_1_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_1",
              "name": "布料",
              "amount": 5
            },
            {
              "id": "wls2_resourse_secondary_rope_1",
              "name": "绳索",
              "amount": 5
            }
          ],
          "result_id": "wls2_backpack_1",
          "result_name": "肩包",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "75234a439aa4fc301af656d7df50adb45483fb3577e11f257b43a6fdfe96a79a"
    },
    {
      "id": "wls2_backpack_2",
      "name": "布制背包",
      "name_en": "Cloth backpack",
      "name_source": "official_zh",
      "description": "高密纤维制成的背包，底部采用皮革。可增加 10 个物品栏槽位",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_2",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_backpack_2_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_2",
              "name": "麻布",
              "amount": 10
            },
            {
              "id": "wls2_resourse_secondary_rope_2",
              "name": "黄麻绳",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_instruments_1",
              "name": "铜制工具",
              "amount": 3
            }
          ],
          "result_id": "wls2_backpack_2",
          "result_name": "布制背包",
          "amount": 1
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_backpack_2_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_leather_1",
              "name": "薄皮革",
              "amount": 12
            },
            {
              "id": "wls2_resourse_fourfold_instruments_1",
              "name": "铜制工具",
              "amount": 12
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_2",
              "name": "黄麻织物卷",
              "amount": 20
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "797115c4da427c30c6d87a1a3ebc179e66df19a03d6148df5016c3a2d6da37e0"
    },
    {
      "id": "wls2_backpack_cowboy_2_common",
      "name": "改良包",
      "name_en": "Improved bag",
      "name_source": "official_zh",
      "description": "采用更结实的织物制成，内有皮革打底。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_cowboy_2_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "resistance",
          "label": "伤害抗性",
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
              "value": 5
            },
            {
              "level": 4,
              "value": 6
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
          "id": "wls2_backpack_cowboy_2_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_1",
              "name": "薄皮革",
              "amount": 12
            },
            {
              "id": "wls2_resourse_fourfold_instruments_1",
              "name": "铜制工具",
              "amount": 12
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_2",
              "name": "黄麻织物卷",
              "amount": 20
            }
          ],
          "result_id": "wls2_backpack_cowboy_2_common",
          "result_name": "改良包",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_250coins_dynamic_town_trader_offer_backpack_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_backpack_cowboy_2_common",
          "result_name": "改良包",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_backpack_cowboy_2_common_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_1",
              "name": "薄皮革",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_instruments_1",
              "name": "铜制工具",
              "amount": 6
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_2",
              "name": "黄麻织物卷",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_cowboy_2_common",
          "result_name": "改良包",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_backpack_cowboy_2_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_backpack_cowboy_2_uncommon",
          "name": "结实包",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "c78ef478ebe46dca780a1c18b5685eac8fbd59c5e0ee7cce17fc2c6ca65daf6f"
    },
    {
      "id": "wls2_backpack_fbo_2_rare",
      "name": "无名英雄背包",
      "name_en": "Nameless Hero Backpack",
      "name_source": "official_zh",
      "description": "定制，比简易的背包更加宽敞精美",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 2,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_fbo_2_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "resistance",
          "label": "伤害抗性",
          "value": 10,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_backpack_fbo_2_rare_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_leather_1",
              "name": "薄皮革",
              "amount": 12
            },
            {
              "id": "wls2_resourse_fourfold_instruments_1",
              "name": "铜制工具",
              "amount": 12
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_2",
              "name": "黄麻织物卷",
              "amount": 20
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "e4e2e94e83f451dd8790bfdecce31f60e94a41dd33c591c0993133930cd0f7db"
    },
    {
      "id": "wls2_backpack_cowboy_2_uncommon",
      "name": "结实包",
      "name_en": "Sturdy bag",
      "name_source": "official_zh",
      "description": "结实而宽敞的包，带有皮革补丁。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_cowboy_2_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "resistance",
          "label": "伤害抗性",
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
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_backpack_cowboy_2_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_1",
              "name": "薄皮革",
              "amount": 14
            },
            {
              "id": "wls2_resourse_fourfold_instruments_2",
              "name": "青铜工具",
              "amount": 8
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_2",
              "name": "黄麻织物卷",
              "amount": 20
            },
            {
              "id": "wls2_backpack_cowboy_2_common",
              "name": "改良包",
              "amount": 1
            }
          ],
          "result_id": "wls2_backpack_cowboy_2_uncommon",
          "result_name": "结实包",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_backpack_cowboy_2_uncommon_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_1",
              "name": "薄皮革",
              "amount": 7
            },
            {
              "id": "wls2_resourse_fourfold_instruments_2",
              "name": "青铜工具",
              "amount": 4
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_2",
              "name": "黄麻织物卷",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_cowboy_2_uncommon",
          "result_name": "结实包",
          "amount": 1
        },
        {
          "id": "wls2_1000coins_dynamic_town_trader_offer_backpack_2_uncommon",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_backpack_cowboy_2_uncommon",
          "result_name": "结实包",
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
      "image_key": "9222775e388dfab81f2401a198276d7054ec5cd79931d904d8f7415c27fb3902"
    },
    {
      "id": "wls2_backpack_indian_2_common",
      "name": "追随者包",
      "name_en": "Follower bag",
      "name_source": "official_zh",
      "description": "美洲原住民样式的大号包。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_indian_2_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "health_increment",
          "label": "生命增加",
          "value": 5,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 5
            },
            {
              "level": 2,
              "value": 10
            },
            {
              "level": 3,
              "value": 15
            },
            {
              "level": 4,
              "value": 20
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
          "id": "wls2_backpack_indian_2_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_1",
              "name": "薄皮革",
              "amount": 12
            },
            {
              "id": "wls2_resourse_fourfold_instruments_1",
              "name": "铜制工具",
              "amount": 12
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_2",
              "name": "黄麻织物卷",
              "amount": 20
            }
          ],
          "result_id": "wls2_backpack_indian_2_common",
          "result_name": "追随者包",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_backpack_indian_2_common_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_1",
              "name": "薄皮革",
              "amount": 6
            },
            {
              "id": "wls2_resourse_fourfold_instruments_1",
              "name": "铜制工具",
              "amount": 6
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_2",
              "name": "黄麻织物卷",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_indian_2_common",
          "result_name": "追随者包",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_backpack_indian_2_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_backpack_indian_2_uncommon",
          "name": "门徒包",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "0718f2bee85d343e8319b2803622d77980273a6bcaf05bcfe73c12741dd73fc8"
    },
    {
      "id": "wls2_backpack_indian_2_uncommon",
      "name": "门徒包",
      "name_en": "Disciple bag",
      "name_source": "official_zh",
      "description": "用厚布制成的包，适合那些已经学会了与大自然和谐相处之人。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 2,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_indian_2_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "health_increment",
          "label": "生命增加",
          "value": 20,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 20
            },
            {
              "level": 2,
              "value": 40
            },
            {
              "level": 3,
              "value": 60
            },
            {
              "level": 4,
              "value": 80
            },
            {
              "level": 5,
              "value": 100
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
          "id": "wls2_backpack_indian_2_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_1",
              "name": "薄皮革",
              "amount": 14
            },
            {
              "id": "wls2_resourse_fourfold_instruments_2",
              "name": "青铜工具",
              "amount": 8
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_2",
              "name": "黄麻织物卷",
              "amount": 20
            },
            {
              "id": "wls2_backpack_indian_2_common",
              "name": "追随者包",
              "amount": 1
            }
          ],
          "result_id": "wls2_backpack_indian_2_uncommon",
          "result_name": "门徒包",
          "amount": 1,
          "min_level": 1
        },
        {
          "id": "wls2_backpack_indian_2_uncommon_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_1",
              "name": "薄皮革",
              "amount": 7
            },
            {
              "id": "wls2_resourse_fourfold_instruments_2",
              "name": "青铜工具",
              "amount": 4
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_2",
              "name": "黄麻织物卷",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_indian_2_uncommon",
          "result_name": "门徒包",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "067857e18a0915c4f23b81bbf7e5abbbe5e47765298bb33c376c63e4e541fe3d"
    },
    {
      "id": "wls2_backpack_indian_3_uncommon",
      "name": "探路者包",
      "name_en": "Pathfinder bag",
      "name_source": "official_zh",
      "description": "鞣制皮革使这个包十分结实，很适合长途旅行。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_indian_3_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "health_increment",
          "label": "生命增加",
          "value": 30,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 30
            },
            {
              "level": 2,
              "value": 60
            },
            {
              "level": 3,
              "value": 90
            },
            {
              "level": 4,
              "value": 120
            },
            {
              "level": 5,
              "value": 150
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
          "id": "wls2_backpack_indian_3_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_instruments_3",
              "name": "铁制工具",
              "amount": 20
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_3",
              "name": "亚麻织物卷",
              "amount": 20
            },
            {
              "id": "wls2_backpack_indian_3_common",
              "name": "草药师包",
              "amount": 1
            }
          ],
          "result_id": "wls2_backpack_indian_3_uncommon",
          "result_name": "探路者包",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_backpack_indian_3_uncommon_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_instruments_3",
              "name": "铁制工具",
              "amount": 10
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_3",
              "name": "亚麻织物卷",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_indian_3_uncommon",
          "result_name": "探路者包",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_backpack_indian_3_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_indian_3_rare",
          "name": "治疗者背包",
          "amount": 1
        },
        {
          "id": "wls2_backpack_indian_4_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_backpack_indian_4_uncommon",
          "name": "猎人背包",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "d085fc46ee2cedaf0df2ccbaa7388a1e9a3bc2a661c37adf8a6a0868af81e42c"
    },
    {
      "id": "wls2_backpack_cowboy_3_common",
      "name": "改良背包",
      "name_en": "Improved backpack",
      "name_source": "official_zh",
      "description": "由亚麻织物制成，配以实心皮带。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_cowboy_3_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "resistance",
          "label": "伤害抗性",
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
          "id": "wls2_backpack_cowboy_3_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_instruments_2",
              "name": "青铜工具",
              "amount": 20
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_3",
              "name": "亚麻织物卷",
              "amount": 20
            }
          ],
          "result_id": "wls2_backpack_cowboy_3_common",
          "result_name": "改良背包",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_500coins_dynamic_town_trader_offer_backpack_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_backpack_cowboy_3_common",
          "result_name": "改良背包",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_backpack_cowboy_3_common_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 5
            },
            {
              "id": "wls2_resourse_fourfold_instruments_2",
              "name": "青铜工具",
              "amount": 10
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_3",
              "name": "亚麻织物卷",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_cowboy_3_common",
          "result_name": "改良背包",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_backpack_cowboy_3_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_backpack_cowboy_3_uncommon",
          "name": "结实背包",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "db856ef2deba0b9b11da60ce24daa3fc1947f6c2311795560dda70093f9d3c29"
    },
    {
      "id": "wls2_backpack_indian_3_rare",
      "name": "治疗者背包",
      "name_en": "Healer backpack",
      "name_source": "official_zh",
      "description": "装饰着特殊的饰物，彰显其主人在部落中的重要地位。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_indian_3_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "health_increment",
          "label": "生命增加",
          "value": 60,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 60
            },
            {
              "level": 2,
              "value": 120
            },
            {
              "level": 3,
              "value": 180
            },
            {
              "level": 4,
              "value": 240
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
          "id": "wisdom",
          "label": "精神",
          "value": 3,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 3
            },
            {
              "level": 2,
              "value": 6
            },
            {
              "level": 3,
              "value": 9
            },
            {
              "level": 4,
              "value": 12
            },
            {
              "level": 5,
              "value": 15
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
          "id": "wls2_backpack_indian_3_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_instruments_3",
              "name": "铁制工具",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 20
            },
            {
              "id": "wls2_backpack_indian_3_uncommon",
              "name": "探路者包",
              "amount": 1
            }
          ],
          "result_id": "wls2_backpack_indian_3_rare",
          "result_name": "治疗者背包",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_backpack_indian_3_rare_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_instruments_3",
              "name": "铁制工具",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_indian_3_rare",
          "result_name": "治疗者背包",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "5dc31aa820aa345b1f4a4c3ae2ac3e6b22fa5818d610014f136e3e786734de53"
    },
    {
      "id": "wls2_backpack_cowboy_3_rare",
      "name": "牛仔背包",
      "name_en": "Cowboy backpack",
      "name_source": "official_zh",
      "description": "真正的牛仔所钟爱的皮革背包。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_cowboy_3_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "resistance",
          "label": "伤害抗性",
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
              "value": 17
            }
          ]
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 3,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 3
            },
            {
              "level": 2,
              "value": 6
            },
            {
              "level": 3,
              "value": 9
            },
            {
              "level": 4,
              "value": 12
            },
            {
              "level": 5,
              "value": 15
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
          "id": "wls2_backpack_cowboy_3_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_instruments_3",
              "name": "铁制工具",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 20
            },
            {
              "id": "wls2_backpack_cowboy_3_uncommon",
              "name": "结实背包",
              "amount": 1
            }
          ],
          "result_id": "wls2_backpack_cowboy_3_rare",
          "result_name": "牛仔背包",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_backpack_cowboy_3_rare_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_instruments_3",
              "name": "铁制工具",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_nails_3",
              "name": "铁扣件",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_cowboy_3_rare",
          "result_name": "牛仔背包",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "0f9067ffff18722e95a42e4688cf92fd051d03fcd3906b4a8d76199b4577083c"
    },
    {
      "id": "wls2_backpack_3",
      "name": "皮革背包",
      "name_en": "Leather backpack",
      "name_source": "official_zh",
      "description": "空间大且外观时尚。可增加 15 个物品栏槽位",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_backpack_3_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_3",
              "name": "亚麻布料",
              "amount": 15
            },
            {
              "id": "wls2_resourse_secondary_rope_3",
              "name": "亚麻绳",
              "amount": 15
            },
            {
              "id": "wls2_resourse_fourfold_instruments_2",
              "name": "青铜工具",
              "amount": 3
            }
          ],
          "result_id": "wls2_backpack_3",
          "result_name": "皮革背包",
          "amount": 1
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_backpack_3_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_instruments_2",
              "name": "青铜工具",
              "amount": 20
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_3",
              "name": "亚麻织物卷",
              "amount": 20
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "d101deb93b66184caaeaa259019cabeaa8eace9f1bb717d6af32666ea6857628"
    },
    {
      "id": "wls2_backpack_cowboy_3_uncommon",
      "name": "结实背包",
      "name_en": "Sturdy backpack",
      "name_source": "official_zh",
      "description": "长途旅行的理想之选。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_cowboy_3_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "resistance",
          "label": "伤害抗性",
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
          "id": "wls2_backpack_cowboy_3_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_instruments_3",
              "name": "铁制工具",
              "amount": 20
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_3",
              "name": "亚麻织物卷",
              "amount": 20
            },
            {
              "id": "wls2_backpack_cowboy_3_common",
              "name": "改良背包",
              "amount": 1
            }
          ],
          "result_id": "wls2_backpack_cowboy_3_uncommon",
          "result_name": "结实背包",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_backpack_cowboy_3_uncommon_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_instruments_3",
              "name": "铁制工具",
              "amount": 10
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_3",
              "name": "亚麻织物卷",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_cowboy_3_uncommon",
          "result_name": "结实背包",
          "amount": 1
        },
        {
          "id": "wls2_1500coins_dynamic_town_trader_offer_backpack_uncommon_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_backpack_cowboy_3_uncommon",
          "result_name": "结实背包",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_backpack_cowboy_3_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_cowboy_3_rare",
          "name": "牛仔背包",
          "amount": 1
        },
        {
          "id": "wls2_backpack_cowboy_4_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_backpack_cowboy_4_uncommon",
          "name": "游侠背包",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "9dbd1aed82a7c0e92aee99733570f706dbaaa71350354f084b9cf96e34fc0abe"
    },
    {
      "id": "wls2_backpack_indian_3_common",
      "name": "草药师包",
      "name_en": "Herbalist bag",
      "name_source": "official_zh",
      "description": "简约但又很宽敞的包，可以容纳草本植物、浆果和其他野生食物。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_indian_3_common",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "health_increment",
          "label": "生命增加",
          "value": 8,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 8
            },
            {
              "level": 2,
              "value": 16
            },
            {
              "level": 3,
              "value": 24
            },
            {
              "level": 4,
              "value": 32
            },
            {
              "level": 5,
              "value": 40
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
          "id": "wls2_backpack_indian_3_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_instruments_2",
              "name": "青铜工具",
              "amount": 20
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_3",
              "name": "亚麻织物卷",
              "amount": 20
            }
          ],
          "result_id": "wls2_backpack_indian_3_common",
          "result_name": "草药师包",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_backpack_indian_3_common_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_2",
              "name": "皮革",
              "amount": 5
            },
            {
              "id": "wls2_resourse_fourfold_instruments_2",
              "name": "青铜工具",
              "amount": 10
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_3",
              "name": "亚麻织物卷",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_indian_3_common",
          "result_name": "草药师包",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_backpack_indian_3_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_backpack_indian_3_uncommon",
          "name": "探路者包",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "3ec4d36e4dbb37c148f93a1fb099c400263cf507e1be5209fd9976acf707c1a7"
    },
    {
      "id": "wls2_xmas_21_backpack",
      "name": "兰普斯背包",
      "name_en": "Rampus’ backpack",
      "name_source": "official_zh",
      "description": "曾经的主人把炸药放在这里，你会发现它有更好的用途",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 4,
      "rarity": "epic",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_xmas_21_backpack",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "evasion",
          "label": "闪避率",
          "value": 1.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 1.0
            },
            {
              "level": 2,
              "value": 2.0
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
              "value": 2
            },
            {
              "level": 4,
              "value": 2
            },
            {
              "level": 5,
              "value": 4
            }
          ]
        },
        {
          "id": "wisdom",
          "label": "精神",
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
          ],
          "per_level_after_max": 1,
          "after_level": 5
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_xmas_21_trader_wls2_xmas_21_backpack",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_xmas_23_currency_firework",
              "name": "爆竹",
              "amount": 1500
            },
            {
              "id": "wls2_xmas_25_currency_firework",
              "name": "爆竹",
              "amount": 1500
            }
          ],
          "result_id": "wls2_xmas_21_backpack",
          "result_name": "兰普斯背包",
          "amount": 1,
          "item_level": 3
        },
        {
          "id": "wls2_easter_22_trader_xmas_21_backpack",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_24_currency_egg",
              "name": "复活节彩蛋",
              "amount": 1500
            }
          ],
          "result_id": "wls2_xmas_21_backpack",
          "result_name": "兰普斯背包",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_xmas_21_backpack_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_instruments_4",
              "name": "钢铁工具",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 20
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "705cc2dc9647ebca08e211ef3abe08eca7e022b0a7280af0b54ca8d891386083"
    },
    {
      "id": "wls2_easter_22_backpack",
      "name": "幸运背包",
      "name_en": "Lucky Backpack",
      "name_source": "official_zh",
      "description": "带有银马掌的破背包。他们说这是吉尔从一个名叫卢克的牛仔那里赢的。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 4,
      "rarity": "epic",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_easter_22_backpack",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "strength",
          "label": "力量",
          "value": 15,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 15
            },
            {
              "level": 2,
              "value": 20
            },
            {
              "level": 3,
              "value": 25
            },
            {
              "level": 4,
              "value": 30
            },
            {
              "level": 5,
              "value": 35
            }
          ]
        },
        {
          "id": "reduced_detection_radius",
          "label": "被发现范围缩小",
          "value": 4.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 4.0
            },
            {
              "level": 2,
              "value": 6.0
            },
            {
              "level": 3,
              "value": 8.0
            },
            {
              "level": 4,
              "value": 10.0
            },
            {
              "level": 5,
              "value": 12.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_easter_22_trader_easter_backpack",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_24_currency_egg",
              "name": "复活节彩蛋",
              "amount": 1500
            }
          ],
          "result_id": "wls2_easter_22_backpack",
          "result_name": "幸运背包",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_easter_22_backpack_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_instruments_4",
              "name": "钢铁工具",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 20
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "68e20d05bd4254b8c69db4b7716c0b29369f5c14ffc56f04ef7bcc9c548186d6"
    },
    {
      "id": "wls2_backpack_indian_4_rare",
      "name": "战士背包",
      "name_en": "Warrior backpack",
      "name_source": "official_zh",
      "description": "耐用的背包，适合随时准备保卫部落和大自然之人。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_indian_4_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "health_increment",
          "label": "生命增加",
          "value": 80,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 80
            },
            {
              "level": 2,
              "value": 160
            },
            {
              "level": 3,
              "value": 240
            },
            {
              "level": 4,
              "value": 320
            },
            {
              "level": 5,
              "value": 400
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "wisdom",
          "label": "精神",
          "value": 4,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 4
            },
            {
              "level": 2,
              "value": 8
            },
            {
              "level": 3,
              "value": 12
            },
            {
              "level": 4,
              "value": 16
            },
            {
              "level": 5,
              "value": 20
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
          "id": "wls2_backpack_indian_4_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_instruments_4",
              "name": "钢铁工具",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 20
            },
            {
              "id": "wls2_backpack_indian_4_uncommon",
              "name": "猎人背包",
              "amount": 1
            }
          ],
          "result_id": "wls2_backpack_indian_4_rare",
          "result_name": "战士背包",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_backpack_indian_4_rare_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_instruments_4",
              "name": "钢铁工具",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_indian_4_rare",
          "result_name": "战士背包",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_backpack_indian_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_indian_5_rare",
          "name": "酋长背包",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "be8865b5e0fbc985c681fa44a820dbb1c9ad446e77c992728c0a7464333b0ac6"
    },
    {
      "id": "wls2_backpack_cowboy_4_rare",
      "name": "枪手背包",
      "name_en": "Gunslinger backpack",
      "name_source": "official_zh",
      "description": "由皮革和钢铁材料制成的优质背包。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_cowboy_4_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "resistance",
          "label": "伤害抗性",
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
              "value": 19
            },
            {
              "level": 5,
              "value": 20
            }
          ]
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 4,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 4
            },
            {
              "level": 2,
              "value": 8
            },
            {
              "level": 3,
              "value": 12
            },
            {
              "level": 4,
              "value": 16
            },
            {
              "level": 5,
              "value": 20
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
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
      "recipes": [
        {
          "id": "wls2_backpack_cowboy_4_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_instruments_4",
              "name": "钢铁工具",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 20
            },
            {
              "id": "wls2_backpack_cowboy_4_uncommon",
              "name": "游侠背包",
              "amount": 1
            }
          ],
          "result_id": "wls2_backpack_cowboy_4_rare",
          "result_name": "枪手背包",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_backpack_cowboy_4_rare_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_instruments_4",
              "name": "钢铁工具",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_cowboy_4_rare",
          "result_name": "枪手背包",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_backpack_cowboy_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_cowboy_5_rare",
          "name": "副警长背包",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "5e6e5a3484bca7648b74438893beab467e3ac0f12d4297cd45be8db6bffd2d51"
    },
    {
      "id": "wls2_backpack_cowboy_4_uncommon",
      "name": "游侠背包",
      "name_en": "Ranger backpack",
      "name_source": "official_zh",
      "description": "由亚麻织物和厚皮革制成。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_cowboy_4_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "resistance",
          "label": "伤害抗性",
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
              "value": 16
            },
            {
              "level": 4,
              "value": 17
            },
            {
              "level": 5,
              "value": 18
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_backpack_cowboy_4_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_instruments_4",
              "name": "钢铁工具",
              "amount": 8
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_4",
              "name": "棉花织物卷",
              "amount": 20
            },
            {
              "id": "wls2_backpack_cowboy_3_uncommon",
              "name": "结实背包",
              "amount": 1
            }
          ],
          "result_id": "wls2_backpack_cowboy_4_uncommon",
          "result_name": "游侠背包",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_backpack_cowboy_4_uncommon_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_instruments_4",
              "name": "钢铁工具",
              "amount": 4
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_4",
              "name": "棉花织物卷",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_cowboy_4_uncommon",
          "result_name": "游侠背包",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_backpack_cowboy_4_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_cowboy_4_rare",
          "name": "枪手背包",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "feabf975f2ab0a0441ff2589b46dfa132aa526b6f5fca1f4c6dd571a9a96684c"
    },
    {
      "id": "wls2_backpack_ws_day2022",
      "name": "爱国者背包",
      "name_en": "Patriot's Backpack",
      "name_source": "official_zh",
      "description": "山姆叔叔也有一个这样的背包！",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_ws_day2022",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 4,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 4
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
            },
            {
              "level": 6,
              "value": 6
            }
          ]
        },
        {
          "id": "evasion",
          "label": "闪避率",
          "value": 4.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 4.0
            },
            {
              "level": 2,
              "value": 4.0
            },
            {
              "level": 3,
              "value": 4.0
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
              "value": 6.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_backpack_ws_day2022_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_instruments_4",
              "name": "钢铁工具",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 20
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "4d9b40388d32b1ace6c64965b5fedf3905ec49887986d94e46bd46526b05780d"
    },
    {
      "id": "wls2_backpack_indian_4_uncommon",
      "name": "猎人背包",
      "name_en": "Hunter backpack",
      "name_source": "official_zh",
      "description": "结实的背包，带有一个部落符号。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 4,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_indian_4_uncommon",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "health_increment",
          "label": "生命增加",
          "value": 40,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 40
            },
            {
              "level": 2,
              "value": 80
            },
            {
              "level": 3,
              "value": 120
            },
            {
              "level": 4,
              "value": 160
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
          "id": "wls2_backpack_indian_4_uncommon",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_instruments_4",
              "name": "钢铁工具",
              "amount": 8
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_4",
              "name": "棉花织物卷",
              "amount": 20
            },
            {
              "id": "wls2_backpack_indian_3_uncommon",
              "name": "探路者包",
              "amount": 1
            }
          ],
          "result_id": "wls2_backpack_indian_4_uncommon",
          "result_name": "猎人背包",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_backpack_indian_4_uncommon_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_instruments_4",
              "name": "钢铁工具",
              "amount": 4
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_4",
              "name": "棉花织物卷",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_indian_4_uncommon",
          "result_name": "猎人背包",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_backpack_indian_4_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_indian_4_rare",
          "name": "战士背包",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "cedd2f4c84b67e26921213348fa26199dbda43abd0a2292363893cd33f0603f9"
    },
    {
      "id": "wls2_halloween_21_backpack_coffin",
      "name": "金格的把戏",
      "name_en": "Django's Trick",
      "name_source": "official_zh",
      "description": "没有人敢偷看这个背包里面。所以，你可以把很多东西放进去！",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 4,
      "rarity": "epic",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_halloween_21_backpack_coffin",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "resistance",
          "label": "伤害抗性",
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
              "value": 19
            },
            {
              "level": 5,
              "value": 20
            }
          ]
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 4,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 4
            },
            {
              "level": 2,
              "value": 8
            },
            {
              "level": 3,
              "value": 12
            },
            {
              "level": 4,
              "value": 16
            },
            {
              "level": 5,
              "value": 20
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
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
      "recipes": [
        {
          "id": "wls2_halloween_21_trader_wls2_halloween_21_backpack_coffin",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_25_currency_pumpkin",
              "name": "幽灵南瓜",
              "amount": 900
            }
          ],
          "result_id": "wls2_halloween_21_backpack_coffin",
          "result_name": "金格的把戏",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_halloween_21_backpack_coffin_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_instruments_4",
              "name": "钢铁工具",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 20
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "f218462602c7ca4d5d786350e6fec1ecb759987c6476d43e4642c0b91da0f496"
    },
    {
      "id": "wls2_backpack_cowboy_5_rare",
      "name": "副警长背包",
      "name_en": "Deputy's backpack",
      "name_source": "official_zh",
      "description": "最坚固的背包，对许多牛仔来说就如同美梦成真一般。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_cowboy_5_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "resistance",
          "label": "伤害抗性",
          "value": 21,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 21
            },
            {
              "level": 2,
              "value": 22
            },
            {
              "level": 3,
              "value": 23
            },
            {
              "level": 4,
              "value": 24
            },
            {
              "level": 5,
              "value": 25
            }
          ]
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 5,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 5
            },
            {
              "level": 2,
              "value": 10
            },
            {
              "level": 3,
              "value": 15
            },
            {
              "level": 4,
              "value": 20
            },
            {
              "level": 5,
              "value": 25
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "death_penalty_reduction",
          "label": "死亡损失降低",
          "value": 10.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_backpack_cowboy_5_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_5",
              "name": "结实皮革",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_instruments_5",
              "name": "镀镍工具",
              "amount": 18
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_5",
              "name": "大麻织物卷",
              "amount": 20
            },
            {
              "id": "wls2_backpack_cowboy_4_rare",
              "name": "枪手背包",
              "amount": 1
            }
          ],
          "result_id": "wls2_backpack_cowboy_5_rare",
          "result_name": "副警长背包",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_backpack_cowboy_5_rare_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_5",
              "name": "结实皮革",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_instruments_5",
              "name": "镀镍工具",
              "amount": 9
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_5",
              "name": "大麻织物卷",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_cowboy_5_rare",
          "result_name": "副警长背包",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_backpack_cowboy_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_cowboy_6_rare",
          "name": "肯洛迪克征服者背包",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "3bded889d4d81ae6910f5450b9e6781f6e239addc95fd75f5c7ad2f5d75801fa"
    },
    {
      "id": "wls2_xmas_22_backpack",
      "name": "寒冰恐魔背包",
      "name_en": "Icy terror backpack",
      "name_source": "official_zh",
      "description": "传说这个背包曾属于一个邪恶的萨满…",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_xmas_22_backpack",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "death_penalty_reduction",
          "label": "死亡损失降低",
          "value": 100,
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
      "image_key": "6ebaa16875f83c50bbf0f00c92ab855d96e153a3d393484d3c440de7d9218c7c"
    },
    {
      "id": "wls2_backpack_indian_5_rare",
      "name": "酋长背包",
      "name_en": "Chieftain backpack",
      "name_source": "official_zh",
      "description": "背包上的符号代表力量、智慧以及和平。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 5,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_indian_5_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "health_increment",
          "label": "生命增加",
          "value": 100,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 100
            },
            {
              "level": 2,
              "value": 200
            },
            {
              "level": 3,
              "value": 300
            },
            {
              "level": 4,
              "value": 400
            },
            {
              "level": 5,
              "value": 500
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "wisdom",
          "label": "精神",
          "value": 5,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 5
            },
            {
              "level": 2,
              "value": 10
            },
            {
              "level": 3,
              "value": 15
            },
            {
              "level": 4,
              "value": 20
            },
            {
              "level": 5,
              "value": 25
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
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_backpack_indian_5_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_5",
              "name": "结实皮革",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_instruments_5",
              "name": "镀镍工具",
              "amount": 18
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_5",
              "name": "大麻织物卷",
              "amount": 20
            },
            {
              "id": "wls2_backpack_indian_4_rare",
              "name": "战士背包",
              "amount": 1
            }
          ],
          "result_id": "wls2_backpack_indian_5_rare",
          "result_name": "酋长背包",
          "amount": 1,
          "min_level": 0
        },
        {
          "id": "wls2_backpack_indian_5_rare_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_5",
              "name": "结实皮革",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_instruments_5",
              "name": "镀镍工具",
              "amount": 9
            },
            {
              "id": "wls2_resourse_tertiary_clothroll_5",
              "name": "大麻织物卷",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_indian_5_rare",
          "result_name": "酋长背包",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_backpack_indian_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_indian_6_rare",
          "name": "德纳利精神袋",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "f083e1512aa01770fc94e00b9120f2c7a0b2437594dafea98ff70301a59fc11d"
    },
    {
      "id": "wls2_easter_backpack_6",
      "name": "幸运背包",
      "name_en": "Lucky Backpack",
      "name_source": "official_zh",
      "description": "带有银马掌的破背包。他们说这是吉尔从一个名叫卢克的牛仔那里赢的。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 6,
      "rarity": "epic",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_easter_backpack_6",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "health_increment",
          "label": "生命增加",
          "value": 100,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 100
            },
            {
              "level": 2,
              "value": 200
            },
            {
              "level": 3,
              "value": 300
            },
            {
              "level": 4,
              "value": 400
            },
            {
              "level": 5,
              "value": 500
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "strength",
          "label": "力量",
          "value": 15,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 15
            },
            {
              "level": 2,
              "value": 20
            },
            {
              "level": 3,
              "value": 25
            },
            {
              "level": 4,
              "value": 30
            },
            {
              "level": 5,
              "value": 35
            }
          ]
        },
        {
          "id": "reduced_detection_radius",
          "label": "被发现范围缩小",
          "value": 4.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 4.0
            },
            {
              "level": 2,
              "value": 6.0
            },
            {
              "level": 3,
              "value": 8.0
            },
            {
              "level": 4,
              "value": 10.0
            },
            {
              "level": 5,
              "value": 12.0
            }
          ]
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
      "image_key": "68e20d05bd4254b8c69db4b7716c0b29369f5c14ffc56f04ef7bcc9c548186d6"
    },
    {
      "id": "wls2_backpack_indian_6_rare",
      "name": "德纳利精神袋",
      "name_en": "Denali spirit bag",
      "name_source": "official_zh",
      "description": "用本土智慧精心打造，这个袋子拥抱着北方耐力的核心",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_indian_6_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "pet_damage_modifier",
          "label": "宠物伤害加成",
          "value": 6.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 6.0
            },
            {
              "level": 2,
              "value": 7.0
            },
            {
              "level": 3,
              "value": 8.0
            },
            {
              "level": 4,
              "value": 9.0
            },
            {
              "level": 5,
              "value": 10.0
            }
          ]
        },
        {
          "id": "pet_health_increment",
          "label": "宠物生命增加",
          "value": 300,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 300
            },
            {
              "level": 2,
              "value": 600
            },
            {
              "level": 3,
              "value": 900
            },
            {
              "level": 4,
              "value": 1200
            },
            {
              "level": 5,
              "value": 1500
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "wisdom",
          "label": "精神",
          "value": 5,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 5
            },
            {
              "level": 2,
              "value": 10
            },
            {
              "level": 3,
              "value": 15
            },
            {
              "level": 4,
              "value": 20
            },
            {
              "level": 5,
              "value": 25
            }
          ]
        },
        {
          "id": "move_speed_modifier",
          "label": "移动速度加成",
          "value": 6.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 6.0
            },
            {
              "level": 2,
              "value": 7.0
            },
            {
              "level": 3,
              "value": 8.0
            },
            {
              "level": 4,
              "value": 9.0
            },
            {
              "level": 5,
              "value": 10.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_backpack_indian_6_rare_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_6",
              "name": "皮毛",
              "amount": 25
            },
            {
              "id": "wls2_resourse_secondary_leather_6",
              "name": "坚固的皮革",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_instruments_6",
              "name": "钨工具",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_indian_6_rare",
          "result_name": "德纳利精神袋",
          "amount": 1
        },
        {
          "id": "wls2_backpack_indian_6_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_6",
              "name": "皮毛",
              "amount": 50
            },
            {
              "id": "wls2_resourse_secondary_leather_6",
              "name": "坚固的皮革",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_instruments_6",
              "name": "钨工具",
              "amount": 18
            },
            {
              "id": "wls2_backpack_indian_5_rare",
              "name": "酋长背包",
              "amount": 1
            }
          ],
          "result_id": "wls2_backpack_indian_6_rare",
          "result_name": "德纳利精神袋",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_backpack_indian_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_indian_7_rare",
          "name": "峡谷 精神 包",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "93813f95da9780663c517aa4c4a7f5c6f48712205a3648ca2d20deef82e7d723"
    },
    {
      "id": "wls2_backpack_cowboy_6_rare",
      "name": "肯洛迪克征服者背包",
      "name_en": "Klondike conqueror rucksack",
      "name_source": "official_zh",
      "description": "即使在寒冷的日子里也适合长时间的冒险",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 6,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_cowboy_6_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "health_increment",
          "label": "生命增加",
          "value": 200,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 200
            },
            {
              "level": 2,
              "value": 400
            },
            {
              "level": 3,
              "value": 600
            },
            {
              "level": 4,
              "value": 800
            },
            {
              "level": 5,
              "value": 1000
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 5,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 5
            },
            {
              "level": 2,
              "value": 10
            },
            {
              "level": 3,
              "value": 15
            },
            {
              "level": 4,
              "value": 20
            },
            {
              "level": 5,
              "value": 25
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
          "id": "penetrating_damage_resistance",
          "label": "穿透伤害防御",
          "value": 15.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_backpack_cowboy_6_rare_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_6",
              "name": "皮毛",
              "amount": 25
            },
            {
              "id": "wls2_resourse_secondary_leather_6",
              "name": "坚固的皮革",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_instruments_6",
              "name": "钨工具",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_cowboy_6_rare",
          "result_name": "肯洛迪克征服者背包",
          "amount": 1
        },
        {
          "id": "wls2_backpack_cowboy_6_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_6",
              "name": "皮毛",
              "amount": 50
            },
            {
              "id": "wls2_resourse_secondary_leather_6",
              "name": "坚固的皮革",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_instruments_6",
              "name": "钨工具",
              "amount": 18
            },
            {
              "id": "wls2_backpack_cowboy_5_rare",
              "name": "副警长背包",
              "amount": 1
            }
          ],
          "result_id": "wls2_backpack_cowboy_6_rare",
          "result_name": "肯洛迪克征服者背包",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_backpack_cowboy_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_cowboy_7_rare",
          "name": "里约布拉沃传奇背包",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "bf565a1e5529e1ffd9dac158df81a4ed4239147879cdf6fade54a8a7d41adc07"
    },
    {
      "id": "wls2_backpack_indian_7_rare",
      "name": "峡谷 精神 包",
      "name_en": "Canyon spirit bag",
      "name_source": "official_zh",
      "description": "包含所有里奥布拉沃领土的神秘力量！",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_indian_7_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "pet_damage_modifier",
          "label": "宠物伤害加成",
          "value": 6.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 6.0
            },
            {
              "level": 2,
              "value": 7.0
            },
            {
              "level": 3,
              "value": 8.0
            },
            {
              "level": 4,
              "value": 9.0
            },
            {
              "level": 5,
              "value": 10.0
            }
          ]
        },
        {
          "id": "pet_health_increment",
          "label": "宠物生命增加",
          "value": 300,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 300
            },
            {
              "level": 2,
              "value": 600
            },
            {
              "level": 3,
              "value": 900
            },
            {
              "level": 4,
              "value": 1200
            },
            {
              "level": 5,
              "value": 1500
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "wisdom",
          "label": "精神",
          "value": 5,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 5
            },
            {
              "level": 2,
              "value": 10
            },
            {
              "level": 3,
              "value": 15
            },
            {
              "level": 4,
              "value": 20
            },
            {
              "level": 5,
              "value": 25
            }
          ]
        },
        {
          "id": "move_speed_modifier",
          "label": "移动速度加成",
          "value": 6.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 6.0
            },
            {
              "level": 2,
              "value": 7.0
            },
            {
              "level": 3,
              "value": 8.0
            },
            {
              "level": 4,
              "value": 9.0
            },
            {
              "level": 5,
              "value": 10.0
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_backpack_indian_7_rare_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_7",
              "name": "羊毛 布料",
              "amount": 25
            },
            {
              "id": "wls2_resourse_secondary_leather_7",
              "name": "密集皮革",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_instruments_7",
              "name": "钼工具",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_indian_7_rare",
          "result_name": "峡谷 精神 包",
          "amount": 1
        },
        {
          "id": "wls2_backpack_indian_7_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_7",
              "name": "羊毛 布料",
              "amount": 50
            },
            {
              "id": "wls2_resourse_secondary_leather_7",
              "name": "密集皮革",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_instruments_7",
              "name": "钼工具",
              "amount": 18
            },
            {
              "id": "wls2_backpack_indian_6_rare",
              "name": "德纳利精神袋",
              "amount": 1
            }
          ],
          "result_id": "wls2_backpack_indian_7_rare",
          "result_name": "峡谷 精神 包",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "30cf794b672b9a33106b7542437e507618890a99aa8f4b69ffb4f92058b44bee"
    },
    {
      "id": "wls2_easter_backpack_7",
      "name": "幸运背包",
      "name_en": "Lucky Backpack",
      "name_source": "official_zh",
      "description": "带有银马掌的破背包。他们说这是吉尔从一个名叫卢克的牛仔那里赢的。",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 7,
      "rarity": "epic",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_easter_backpack_7",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "health_increment",
          "label": "生命增加",
          "value": 100,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 100
            },
            {
              "level": 2,
              "value": 200
            },
            {
              "level": 3,
              "value": 300
            },
            {
              "level": 4,
              "value": 400
            },
            {
              "level": 5,
              "value": 500
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "strength",
          "label": "力量",
          "value": 15,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 15
            },
            {
              "level": 2,
              "value": 20
            },
            {
              "level": 3,
              "value": 25
            },
            {
              "level": 4,
              "value": 30
            },
            {
              "level": 5,
              "value": 35
            }
          ]
        },
        {
          "id": "reduced_detection_radius",
          "label": "被发现范围缩小",
          "value": 4.0,
          "unit": "%",
          "levels": [
            {
              "level": 1,
              "value": 4.0
            },
            {
              "level": 2,
              "value": 6.0
            },
            {
              "level": 3,
              "value": 8.0
            },
            {
              "level": 4,
              "value": 10.0
            },
            {
              "level": 5,
              "value": 12.0
            }
          ]
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
      "image_key": "68e20d05bd4254b8c69db4b7716c0b29369f5c14ffc56f04ef7bcc9c548186d6"
    },
    {
      "id": "wls2_backpack_cowboy_7_rare",
      "name": "里约布拉沃传奇背包",
      "name_en": "Rio Bravo legend backpack",
      "name_source": "official_zh",
      "description": "一个独特的背包给一个独特的人",
      "category": "backpack",
      "category_label": "背包",
      "subcategory": "背包",
      "tier": 7,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_backpack_cowboy_7_rare",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 100,
          "unit": ""
        },
        {
          "id": "health_increment",
          "label": "生命增加",
          "value": 200,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 200
            },
            {
              "level": 2,
              "value": 400
            },
            {
              "level": 3,
              "value": 600
            },
            {
              "level": 4,
              "value": 800
            },
            {
              "level": 5,
              "value": 1000
            }
          ],
          "per_level_after_max": 1,
          "after_level": 5
        },
        {
          "id": "dexterity",
          "label": "攻击速度",
          "value": 5,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 5
            },
            {
              "level": 2,
              "value": 10
            },
            {
              "level": 3,
              "value": 15
            },
            {
              "level": 4,
              "value": 20
            },
            {
              "level": 5,
              "value": 25
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
          "id": "penetrating_damage_resistance",
          "label": "穿透伤害防御",
          "value": 15.0,
          "unit": "%"
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_backpack_cowboy_7_rare_repair",
          "label": "修理",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_7",
              "name": "羊毛 布料",
              "amount": 25
            },
            {
              "id": "wls2_resourse_secondary_leather_7",
              "name": "密集皮革",
              "amount": 10
            },
            {
              "id": "wls2_resourse_fourfold_instruments_7",
              "name": "钼工具",
              "amount": 10
            }
          ],
          "result_id": "wls2_backpack_cowboy_7_rare",
          "result_name": "里约布拉沃传奇背包",
          "amount": 1
        },
        {
          "id": "wls2_backpack_cowboy_7_rare",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_7",
              "name": "羊毛 布料",
              "amount": 50
            },
            {
              "id": "wls2_resourse_secondary_leather_7",
              "name": "密集皮革",
              "amount": 20
            },
            {
              "id": "wls2_resourse_fourfold_instruments_7",
              "name": "钼工具",
              "amount": 18
            },
            {
              "id": "wls2_backpack_cowboy_6_rare",
              "name": "肯洛迪克征服者背包",
              "amount": 1
            }
          ],
          "result_id": "wls2_backpack_cowboy_7_rare",
          "result_name": "里约布拉沃传奇背包",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "7399e19828b0368d34bafaa36a6271031dc1d65c76d26c7e85ea03963880a6f9"
    },
    {
      "id": "wls2_molotov",
      "name": "燃烧混合物",
      "name_en": "Burning mix",
      "name_source": "official_zh",
      "description": "比辣椒更热，两倍于爆炸性",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "其他工具",
      "tier": null,
      "rarity": "rare",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_molotov",
      "stats": [],
      "effects": [],
      "uses": [
        "作为投掷消耗品使用"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "529b3697aacfda0e5b5e1c20aea8a40c5be23973d03502743ffe7112f9e17656"
    },
    {
      "id": "wls2_birthday_melee_pick",
      "name": "奢华",
      "name_en": "Luxury",
      "name_source": "official_zh",
      "description": "奇妙的手工制品，甚至可用于意想不到的目的",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "其他工具",
      "tier": 1,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_birthday_melee_pick",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
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
      "image_key": "6bfede1dfa9b3cd1e0aa5b87bf08e0e1214981f4ce9e1ce1f289768cbac54f71"
    },
    {
      "id": "wls2_halloween_range_shotgun_axe",
      "name": "古董",
      "name_en": "Сuriosity",
      "name_source": "official_zh",
      "description": "刻有刀刃的独特枪支。",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "斧头",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_halloween_range_shotgun_axe",
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
      "recycle_results": [
        {
          "id": "wls2_halloween_range_shotgun_axe_recycle",
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
      "image_key": "c23acd4f3b25946e2425cc49e5fe3188be6b88d3cda68116148d229697720094"
    },
    {
      "id": "wls_xmas2019_axe",
      "name": "圣诞斧",
      "name_en": "Christmas axe",
      "name_source": "official_zh",
      "description": "如果你要砍柴，可以用这个",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "斧头",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls_xmas2019_axe",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 120,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_xmas2019_axe_recycle",
          "label": "回收可得",
          "outputs": [
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
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "46b07a3b4f888bc02102391dc5f9c675361bc64779ef8f43b712c2c28c555818"
    },
    {
      "id": "wls2_birthday_range_shotgun_axe",
      "name": "奇珍 II",
      "name_en": "Curiosity II",
      "name_source": "official_zh",
      "description": "刻有刀刃的独特枪支。",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "斧头",
      "tier": 1,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_birthday_range_shotgun_axe",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_birthday_range_shotgun_axe_recycle",
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
      "image_key": "e4780353fb5aaf58d01bbbb42c9aefe85c6b6fcf81f7de1bad1f6c2b9adc6fb6"
    },
    {
      "id": "wls2_tools_axe_0",
      "name": "斧头",
      "name_en": "Axe",
      "name_source": "official_zh",
      "description": "砍伐木头的简易工具",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "斧头",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_tools_axe_0",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 40,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_tools_axe_0_workshop",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_wood_1",
              "name": "松木",
              "amount": 3
            },
            {
              "id": "wls2_resourse_primary_stone_1",
              "name": "石头",
              "amount": 3
            }
          ],
          "result_id": "wls2_tools_axe_0",
          "result_name": "斧头",
          "amount": 1
        },
        {
          "id": "wls2_tools_axe_0",
          "label": "随身制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_wood_1",
              "name": "松木",
              "amount": 3
            },
            {
              "id": "wls2_resourse_primary_stone_1",
              "name": "石头",
              "amount": 3
            }
          ],
          "result_id": "wls2_tools_axe_0",
          "result_name": "斧头",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "fc40f3db8407e03cee47ff2274e941886ea1699b2cb09b267ec4ece59a705192"
    },
    {
      "id": "wls2_tools_axe_1",
      "name": "铜斧",
      "name_en": "Copper axe",
      "name_source": "official_zh",
      "description": "用来获取木材的铜制工具",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "斧头",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_tools_axe_1",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 120,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_tools_axe_1",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_wood_1",
              "name": "松木",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_1",
              "name": "铜锭",
              "amount": 1
            }
          ],
          "result_id": "wls2_tools_axe_1",
          "result_name": "铜斧",
          "amount": 1
        },
        {
          "id": "wls2_10coins_dynamic_town_trader_offer_axe_1",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_axe_1",
          "result_name": "铜斧",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "5c96b5df6c6031e770a26eeb724d4d0d25bed9575d4bbd529abf05749ad0332c"
    },
    {
      "id": "wls2_binoculars",
      "name": "双筒望远镜",
      "name_en": "Binoculars",
      "name_source": "official_zh",
      "description": "方便观察远距离物体。对侦查至关重要！",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "望远镜",
      "tier": 1,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_binoculars",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 20,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [
        "侦察远处区域"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "ebdfd66d601a1c4bac637b2a291a12d461ac214dbfb50105520622da90024434"
    },
    {
      "id": "wls2_ws_day2021_currency_firework",
      "name": "周年庆烟花",
      "name_en": "",
      "name_source": "descriptive_fallback",
      "description": "",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "烟花",
      "tier": 1,
      "rarity": "common",
      "max_stack": 5,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_ws_day2021_currency_firework",
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "7075f7486e41a694fb020b5b817b7eb89d32d4302a5d0dd69845fcae1a8d4cf5"
    },
    {
      "id": "wls_fishing_rod",
      "name": "鱼竿",
      "name_en": "Fishing rod",
      "name_source": "official_zh",
      "description": "钓鱼必要的物品。",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "钓竿",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls_fishing_rod",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 150,
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
      "image_key": "5ffb11785fc02369a1632ee6d21f9d0bde9c9dd11041b4841a43c88a55f00ff0"
    },
    {
      "id": "wls_shovel",
      "name": "铲子",
      "name_en": "Shovel",
      "name_source": "official_zh",
      "description": "一个很棒的工具，用来挖坑或赶走流浪汉。",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "铲子",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls_shovel",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 70,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls_shovel_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls_metal_scrap",
              "name": "金属废料",
              "amount": 5
            },
            {
              "id": "wls2_resourse_primary_wood_1",
              "name": "松木",
              "amount": 1
            }
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "65fc9944ce09cb95cf354d650ce7f69952bffebaebee95a00c535736e57e39e5"
    },
    {
      "id": "wls2_tools_pickaxe_1",
      "name": "铜稿",
      "name_en": "Copper pickaxe",
      "name_source": "official_zh",
      "description": "铜稿能够用来开采矿石和石头",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "镐",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_tools_pickaxe_1",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 120,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_tools_pickaxe_1",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_wood_1",
              "name": "松木",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_ingot_1",
              "name": "铜锭",
              "amount": 1
            }
          ],
          "result_id": "wls2_tools_pickaxe_1",
          "result_name": "铜稿",
          "amount": 1
        },
        {
          "id": "wls2_10coins_dynamic_town_trader_offer_pickaxe_1",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_pickaxe_1",
          "result_name": "铜稿",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "d587dc9dfc4808b0b4fa5c537b14ec2f1482e784dfe0110e0660ec07209fc702"
    },
    {
      "id": "wls2_tools_pickaxe_0",
      "name": "镐子",
      "name_en": "Pickaxe",
      "name_source": "official_zh",
      "description": "开采石矿和铁矿的工具。",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "镐",
      "tier": 1,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_tools_pickaxe_0",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 40,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_tools_pickaxe_0_workshop",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_wood_1",
              "name": "松木",
              "amount": 3
            },
            {
              "id": "wls2_resourse_primary_stone_1",
              "name": "石头",
              "amount": 3
            }
          ],
          "result_id": "wls2_tools_pickaxe_0",
          "result_name": "镐子",
          "amount": 1
        },
        {
          "id": "wls2_tools_pickaxe_0",
          "label": "随身制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_wood_1",
              "name": "松木",
              "amount": 3
            },
            {
              "id": "wls2_resourse_primary_stone_1",
              "name": "石头",
              "amount": 3
            }
          ],
          "result_id": "wls2_tools_pickaxe_0",
          "result_name": "镐子",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "87af103ba91b5c5e5761920cb05699657e959740916182425c9dd4443c9663cd"
    },
    {
      "id": "wls2_weapon_xmas_21_axe",
      "name": "圣诞斧",
      "name_en": "Festive axe",
      "name_source": "official_zh",
      "description": "劈柴也是一种庆祝！",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "斧头",
      "tier": 2,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_xmas_21_axe",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 85,
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
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_xmas_21_axe_recycle",
          "label": "回收可得",
          "outputs": [
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
          ]
        }
      ],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "46b07a3b4f888bc02102391dc5f9c675361bc64779ef8f43b712c2c28c555818"
    },
    {
      "id": "wls2_tools_axe_2",
      "name": "青铜斧",
      "name_en": "Bronze axe",
      "name_source": "official_zh",
      "description": "由黄铜制成看上去还不错的斧子。没有哪棵树能经得住它的威力",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "斧头",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_tools_axe_2",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 320,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_tools_axe_2",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 1
            }
          ],
          "result_id": "wls2_tools_axe_2",
          "result_name": "青铜斧",
          "amount": 1
        },
        {
          "id": "wls2_50coins_dynamic_town_trader_offer_axe_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_axe_2",
          "result_name": "青铜斧",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_25coins_dynamic_smuggler_offer_axe_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_axe_2",
          "result_name": "青铜斧",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_ftue_ab_tutorial_trader_slot_10",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_axe_2",
          "result_name": "青铜斧",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "654671dc4cd6ff715b69c85d9ab89a4e332cfb0cbfbf3c7e1ff6f2c501a23df1"
    },
    {
      "id": "wls2_tools_pickaxe_2",
      "name": "青铜镐",
      "name_en": "Bronze pickaxe",
      "name_source": "official_zh",
      "description": "由坚固的青铜制成的稿子，比铜稿和石稿更好用",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "镐",
      "tier": 2,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_tools_pickaxe_2",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 320,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_tools_pickaxe_2",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_2",
              "name": "橡木板",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_ingot_2",
              "name": "青铜锭",
              "amount": 1
            }
          ],
          "result_id": "wls2_tools_pickaxe_2",
          "result_name": "青铜镐",
          "amount": 1
        },
        {
          "id": "wls2_50coins_dynamic_town_trader_offer_pickaxe_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_pickaxe_2",
          "result_name": "青铜镐",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_25coins_dynamic_smuggler_offer_pickaxe_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_pickaxe_2",
          "result_name": "青铜镐",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_ftue_ab_tutorial_trader_slot_9",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_pickaxe_2",
          "result_name": "青铜镐",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "b1268021974e19ddf85b5ce45aae1d723f85b6b09f6f3c05104e7dd0fd5b51f9"
    },
    {
      "id": "wls2_weapon_easter_22_pick",
      "name": "胡萝卜镐",
      "name_en": "Сarrot Pickaxe",
      "name_source": "official_zh",
      "description": "看起来不太能挖矿的样子，但能让你明白兔子洞有多深。",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "其他工具",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_easter_22_pick",
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
          "value": 230,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 230
            },
            {
              "level": 2,
              "value": 250
            },
            {
              "level": 3,
              "value": 275
            },
            {
              "level": 4,
              "value": 295
            },
            {
              "level": 5,
              "value": 315
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
          "id": "wls2_weapon_easter_22_pick_recycle",
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
      "image_key": "6b9fc12c6fbbc1c0714b3251c4bc14880a16d5d30c24227049e28541ab8fe943"
    },
    {
      "id": "wls2_weapon_easter_pick",
      "name": "胡萝卜镐",
      "name_en": "Сarrot Pickaxe",
      "name_source": "official_zh",
      "description": "看起来不太能挖矿的样子，但能让你明白兔子洞有多深。",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "其他工具",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_easter_pick",
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
          "value": 253,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 253
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
              "value": 330
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
              "value": 125
            },
            {
              "level": 3,
              "value": 150
            },
            {
              "level": 4,
              "value": 175
            },
            {
              "level": 5,
              "value": 200
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_easter2021_trader_easter_pick",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 150
            }
          ],
          "result_id": "wls2_weapon_easter_pick",
          "result_name": "胡萝卜镐",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_weapon_easter_pick",
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
      "image_key": "6b9fc12c6fbbc1c0714b3251c4bc14880a16d5d30c24227049e28541ab8fe943"
    },
    {
      "id": "wls2_weapon_xmas_21_ice_axe",
      "name": "冰雪女王斧",
      "name_en": "Ice queen axe",
      "name_source": "official_zh",
      "description": "很适合砍木头和脑袋",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "斧头",
      "tier": 3,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_xmas_21_ice_axe",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 95,
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
              "value": 407
            },
            {
              "level": 3,
              "value": 462
            },
            {
              "level": 4,
              "value": 495
            },
            {
              "level": 5,
              "value": 550
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
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [
        {
          "id": "wls2_weapon_xmas_21_ice_axe_recycle",
          "label": "回收可得",
          "outputs": [
            {
              "id": "wls2_resourse_primary_coal_2",
              "name": "褐煤",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 2
            },
            {
              "id": "wls2_resourse_secondary_leather_3",
              "name": "皮毛皮",
              "amount": 3
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
      "image_key": "43e22e5eeb62a6ddb42554b4b588a7622d674a4efcc1b69ba8a30039e110f418"
    },
    {
      "id": "wls2_weapon_xmas2020_axe",
      "name": "圣诞斧",
      "name_en": "Christmas axe",
      "name_source": "official_zh",
      "description": "如果你要砍柴，可以用这个",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "斧头",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_xmas2020_axe",
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
          "value": 443,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 443
            },
            {
              "level": 2,
              "value": 487
            },
            {
              "level": 3,
              "value": 532
            },
            {
              "level": 4,
              "value": 576
            },
            {
              "level": 5,
              "value": 620
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
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_xmas2020_trader_wls_random_item_15",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_xmas2020_axe",
          "result_name": "圣诞斧",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_weapon_xmas2020_axe",
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
              "amount": 4
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 2
            }
          ],
          "result_id": "wls2_weapon_xmas2020_axe",
          "result_name": "圣诞斧",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "46b07a3b4f888bc02102391dc5f9c675361bc64779ef8f43b712c2c28c555818"
    },
    {
      "id": "wls2_tools_axe_3",
      "name": "铁斧",
      "name_en": "Iron axe",
      "name_source": "official_zh",
      "description": "可靠有效的工具，用来砍伐各种类型的木头。",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "斧头",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_tools_axe_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 700,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_tools_axe_3",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 1
            }
          ],
          "result_id": "wls2_tools_axe_3",
          "result_name": "铁斧",
          "amount": 1
        },
        {
          "id": "wls2_100coins_dynamic_town_trader_offer_axe_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_axe_3",
          "result_name": "铁斧",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_50coins_dynamic_smuggler_offer_axe_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_axe_3",
          "result_name": "铁斧",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "2f031acf12a84828af7e71f6fa08c9bb9cee8b32ff707e667ce6d70e8a030522"
    },
    {
      "id": "wls2_tools_tnt_1",
      "name": "炸药",
      "name_en": "Dynamite",
      "name_source": "official_zh",
      "description": "当需要拆除障碍物或敌人基地的坚固墙壁时非常有用",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "爆炸物",
      "tier": 3,
      "rarity": "uncommon",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_tools_tnt_1",
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_tools_tnt_1",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_gunpowder_1",
              "name": "火药",
              "amount": 3
            },
            {
              "id": "wls2_resourse_miscellaneous_glicerin_1",
              "name": "甘油",
              "amount": 3
            }
          ],
          "result_id": "wls2_tools_tnt_1",
          "result_name": "炸药",
          "amount": 1
        },
        {
          "id": "wls2_75coins_dynamic_smuggler_offer_tnt",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_tnt_1",
          "result_name": "炸药",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_south_trader_merchant_resources_5",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_tnt_1",
          "result_name": "炸药",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "5092eaac31602fa1338599ccd1ffa6d77a481ef544630f12546ff603f4652e42"
    },
    {
      "id": "wls2_tools_pickaxe_3",
      "name": "铁镐",
      "name_en": "Iron pickaxe",
      "name_source": "official_zh",
      "description": "可靠且耐用的工具，用来开采石头和矿石。",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "镐",
      "tier": 3,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_tools_pickaxe_3",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 700,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_tools_pickaxe_3",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_3",
              "name": "枫木板",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_ingot_3",
              "name": "铁锭",
              "amount": 1
            }
          ],
          "result_id": "wls2_tools_pickaxe_3",
          "result_name": "铁镐",
          "amount": 1
        },
        {
          "id": "wls2_100coins_dynamic_town_trader_offer_pickaxe_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_pickaxe_3",
          "result_name": "铁镐",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_50coins_dynamic_smuggler_offer_pickaxe_3",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_pickaxe_3",
          "result_name": "铁镐",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "14cdf608dcbd5ee9678fd1adad117ce48586775d2acdc7ec72e6a894d2cc97ca"
    },
    {
      "id": "wls2_halloween_21_weapon_range_shotgun_axe_4",
      "name": "古董",
      "name_en": "Сuriosity",
      "name_source": "official_zh",
      "description": "刻有刀刃的独特枪支。",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "斧头",
      "tier": 4,
      "rarity": "rare",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_halloween_21_weapon_range_shotgun_axe_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 226,
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
          "id": "wls2_halloween_21_trader_wls2_halloween_21_weapon_range_shotgun_axe_4",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_25_currency_pumpkin",
              "name": "幽灵南瓜",
              "amount": 600
            }
          ],
          "result_id": "wls2_halloween_21_weapon_range_shotgun_axe_4",
          "result_name": "古董",
          "amount": 1,
          "item_level": 3
        }
      ],
      "recycle_results": [
        {
          "id": "wls2_halloween_21_weapon_range_shotgun_axe_4_recycle",
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
      "image_key": "c23acd4f3b25946e2425cc49e5fe3188be6b88d3cda68116148d229697720094"
    },
    {
      "id": "wls2_halloween_event_range_shotgun_axe",
      "name": "古董",
      "name_en": "Сuriosity",
      "name_source": "official_zh",
      "description": "刻有刀刃的独特枪支。",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "斧头",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_halloween_event_range_shotgun_axe",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 226,
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
          "id": "wls2_halloween_event_range_shotgun_axe",
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
              "amount": 2
            }
          ],
          "result_id": "wls2_halloween_event_range_shotgun_axe",
          "result_name": "古董",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "c23acd4f3b25946e2425cc49e5fe3188be6b88d3cda68116148d229697720094"
    },
    {
      "id": "wls2_tools_axe_4",
      "name": "钢铁斧",
      "name_en": "Steel axe",
      "name_source": "official_zh",
      "description": "很好用的钢斧。经验老道的樵夫首选",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "斧头",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_tools_axe_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1600,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 3,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_tools_axe_4",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 1
            }
          ],
          "result_id": "wls2_tools_axe_4",
          "result_name": "钢铁斧",
          "amount": 1
        },
        {
          "id": "wls2_150coins_dynamic_town_trader_offer_axe_4",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_axe_4",
          "result_name": "钢铁斧",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "bc86307a07cb38e09a5f8cc9f8dd7ce8a9a0d4e9290df9e969032c53ba263269"
    },
    {
      "id": "wls_fishing_rod_t4",
      "name": "灰树钓鱼杆",
      "name_en": "Ash fishing rod",
      "name_source": "official_zh",
      "description": "坚固而灵活的钓鱼竿。握在手中感觉良好，轻松应对大鱼的拉扯。",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "钓竿",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls_fishing_rod_t4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 500,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls_fishing_rod_t4",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_rope_4",
              "name": "棉绳",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 1
            }
          ],
          "result_id": "wls_fishing_rod_t4",
          "result_name": "灰树钓鱼杆",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "122fb7bd81b928af7d54ce76e794ebb0d57a41c29657d815bb6e1dc1c8d77a4d"
    },
    {
      "id": "wls2_tools_pickaxe_4",
      "name": "钢铁稿",
      "name_en": "Steel pickaxe",
      "name_source": "official_zh",
      "description": "很好用的钢铁稿。现在是时候出去挖点金子了",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "镐",
      "tier": 4,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_tools_pickaxe_4",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1600,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 3,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_tools_pickaxe_4",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 1
            }
          ],
          "result_id": "wls2_tools_pickaxe_4",
          "result_name": "钢铁稿",
          "amount": 1
        },
        {
          "id": "wls2_150coins_dynamic_town_trader_offer_pickaxe_4",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_pickaxe_4",
          "result_name": "钢铁稿",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "381279facf60f7df43c68693242e3fa9d2f2eb1b4cfa2c10680e90a911d1cd3f"
    },
    {
      "id": "wls2_weapon_xmas2020_ice_axe",
      "name": "冰雪女王斧",
      "name_en": "Ice queen axe",
      "name_source": "official_zh",
      "description": "看起来女王喜欢砍树",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "斧头",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_weapon_xmas2020_ice_axe",
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
          "value": 343,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 343
            },
            {
              "level": 2,
              "value": 388
            },
            {
              "level": 3,
              "value": 442
            },
            {
              "level": 4,
              "value": 474
            },
            {
              "level": 5,
              "value": 526
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
          "value": 17,
          "unit": "",
          "levels": [
            {
              "level": 1,
              "value": 17
            },
            {
              "level": 2,
              "value": 19
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
              "value": 26
            }
          ]
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_xmas2020_trader_wls_random_item_14",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_weapon_xmas2020_ice_axe",
          "result_name": "冰雪女王斧",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料",
          "item_level": 3
        },
        {
          "id": "wls2_weapon_xmas2020_ice_axe",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 3
            },
            {
              "id": "wls2_resourse_secondary_leather_5",
              "name": "结实皮革",
              "amount": 8
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 4
            }
          ],
          "result_id": "wls2_weapon_xmas2020_ice_axe",
          "result_name": "冰雪女王斧",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "43e22e5eeb62a6ddb42554b4b588a7622d674a4efcc1b69ba8a30039e110f418"
    },
    {
      "id": "wls2_tools_axe_5",
      "name": "合金斧",
      "name_en": "Alloy axe",
      "name_source": "official_zh",
      "description": "由不锈钢制成的优质斧头。哪怕再强壮的树干也会倒下",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "斧头",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_tools_axe_5",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 2500,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 8,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_tools_axe_5",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 1
            }
          ],
          "result_id": "wls2_tools_axe_5",
          "result_name": "合金斧",
          "amount": 1
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_melee_1",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_axe_5",
          "result_name": "合金斧",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_200coins_dynamic_town_trader_offer_axe_5",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_axe_5",
          "result_name": "合金斧",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "43d91590777f749f9a382e7f6fcaa542ddebdb6c248d85058514313c279e7521"
    },
    {
      "id": "wls_fishing_rod_t5",
      "name": "柏树钓鱼杆",
      "name_en": "Cypress fishing rod",
      "name_source": "official_zh",
      "description": "轻量级和抗湿性。 沼泽地区钓鱼的完美选择。",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "钓竿",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls_fishing_rod_t5",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 1000,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls_fishing_rod_t5",
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
              "amount": 1
            }
          ],
          "result_id": "wls_fishing_rod_t5",
          "result_name": "柏树钓鱼杆",
          "amount": 1,
          "min_level": 0
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "bbfe399feb661bfcfde9a962d583b628bbcc492d0c938287a4cc18ef8b22fd40"
    },
    {
      "id": "wls2_tools_pickaxe_5",
      "name": "合金稿",
      "name_en": "Alloy pickaxe",
      "name_source": "official_zh",
      "description": "由不锈钢制成的优质稿子。它能够忠心地陪伴你许多年",
      "category": "tool",
      "category_label": "工具",
      "subcategory": "镐",
      "tier": 5,
      "rarity": "common",
      "max_stack": 1,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": "wls2_tools_pickaxe_5",
      "stats": [
        {
          "id": "max_durability",
          "label": "耐久",
          "value": 2500,
          "unit": ""
        },
        {
          "id": "penetrating_damage",
          "label": "穿透伤害",
          "value": 8,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_tools_pickaxe_5",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 1
            }
          ],
          "result_id": "wls2_tools_pickaxe_5",
          "result_name": "合金稿",
          "amount": 1
        },
        {
          "id": "wls2_south_trader_merchant_dymamic_melee_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_pickaxe_5",
          "result_name": "合金稿",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_200coins_dynamic_town_trader_offer_pickaxe_5",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_tools_pickaxe_5",
          "result_name": "合金稿",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "118fd66ebb53a5c5545e497c178b7d8812fd69e450ac9842ab6e2214c83a4c31"
    }
  ]
};
