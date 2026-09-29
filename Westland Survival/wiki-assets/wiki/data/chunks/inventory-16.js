/* Game archive data. See ../README.md for update instructions. */
window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);
window.WIKI_CHUNKS["wiki-chunk-inventory-16"] = {
  "section": "inventory",
  "records": [
    {
      "id": "wls2_resourse_tertiary_plate_5",
      "name": "合金板",
      "name_en": "Alloy plate",
      "name_source": "official_zh",
      "description": "制作武器所需的零件",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "加工与特殊材料",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "bound": true,
      "legacy": true,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "049511d50fa795cfd277a5fb14068b49f139293540ba886a039cffa9b825d62c"
    },
    {
      "id": "wls2_resourse_tertiary_rivet_5",
      "name": "合金铆钉",
      "name_en": "Alloy rivet",
      "name_source": "official_zh",
      "description": "你衣服上的铆钉可不仅仅是为了装饰，还能提供额外保护",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "加工与特殊材料",
      "tier": 5,
      "rarity": null,
      "max_stack": 20,
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "ee2130d6e414dc4dc499db19634e92497b05f4c1343b1ca3135c25bd5b12c7a2"
    },
    {
      "id": "wls2_resourse_primary_coal_5",
      "name": "焦煤",
      "name_en": "Сoking coal",
      "name_source": "official_zh",
      "description": "生活里不可或缺的燃料。再也没有比这更好的燃料了。",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "加工与特殊材料",
      "tier": 5,
      "rarity": null,
      "max_stack": 20,
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "b9cee017d3b906fe2ee4401c6b74be24a646cdf4c8d78e775874873284348166"
    },
    {
      "id": "wls2_resourse_tertiary_wire_5",
      "name": "镀镍线",
      "name_en": "Nickel-plated wire",
      "name_source": "official_zh",
      "description": "用于建筑",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "加工与特殊材料",
      "tier": 5,
      "rarity": null,
      "max_stack": 20,
      "bound": false,
      "legacy": true,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "2316d3eea0631d9c501030776bfff2c31181162285d86e38c5d5eaecf2b068f1"
    },
    {
      "id": "wls2_alaska_antitoxin",
      "name": "白喉疫苗",
      "name_en": "Diphtheria Vaccine",
      "name_source": "official_zh",
      "description": "一种新的药物承诺治愈这种疾病",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "区域建设材料",
      "tier": 5,
      "rarity": "epic",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_collection_alaska_sledge",
          "label": "建设提交",
          "target_id": "wls2_collection_alaska_sledge",
          "name": "狗拉雪橇",
          "amount": 50
        }
      ],
      "locations": [
        "邪教徒营地"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "76129e14de881fe30bce58e386fbcf7f7a50fd252263e1ef409c288cad130a27"
    },
    {
      "id": "wls2_resourse_primary_wood_5",
      "name": "丝柏",
      "name_en": "Cypress",
      "name_source": "official_zh",
      "description": "整个狂野西部最好的建筑材料之一！",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "原木",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_static_town_trader_offer_wood_5",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_wood_4",
              "name": "灰树",
              "amount": 5
            }
          ],
          "result_id": "wls2_resourse_primary_wood_5",
          "result_name": "丝柏",
          "amount": 1
        },
        {
          "id": "wls2_south_trader_wood_5",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_resourse_primary_wood_5",
          "result_name": "丝柏",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_easter2021_trader_random_resource_t5_wood",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 25
            }
          ],
          "result_id": "wls2_resourse_primary_wood_5",
          "result_name": "丝柏",
          "amount": 1
        },
        {
          "id": "wls2_halloween_21_trader_random_resource_t5_wood",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_25_currency_pumpkin",
              "name": "幽灵南瓜",
              "amount": 20
            }
          ],
          "result_id": "wls2_resourse_primary_wood_5",
          "result_name": "丝柏",
          "amount": 1
        },
        {
          "id": "wls2_15coins_dynamic_town_trader_offer_wood_5",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_resourse_primary_wood_5",
          "result_name": "丝柏",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_xmas_21_trader_random_resource_t5_wood",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_xmas_23_currency_firework",
              "name": "爆竹",
              "amount": 15
            },
            {
              "id": "wls2_xmas_25_currency_firework",
              "name": "爆竹",
              "amount": 15
            }
          ],
          "result_id": "wls2_resourse_primary_wood_5",
          "result_name": "丝柏",
          "amount": 1
        },
        {
          "id": "wls2_easter_22_trader_random_resource_t5_wood",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_24_currency_egg",
              "name": "复活节彩蛋",
              "amount": 15
            }
          ],
          "result_id": "wls2_resourse_primary_wood_5",
          "result_name": "丝柏",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_resourse_primary_coal_1_cypress",
          "label": "工作台制作",
          "target_id": "wls2_resourse_primary_coal_1",
          "name": "煤炭",
          "amount": 1
        },
        {
          "id": "wls2_resourse_secondary_plank_5",
          "label": "工作台制作",
          "target_id": "wls2_resourse_secondary_plank_5",
          "name": "丝柏木板",
          "amount": 3
        },
        {
          "id": "wls2_building_trap_spike_4",
          "label": "建筑制作",
          "target_id": "wls2_building_trap_spike_4",
          "name": "铁丝网",
          "amount": 5
        },
        {
          "id": "wls2_building_trap_spike_5",
          "label": "建筑制作",
          "target_id": "wls2_building_trap_spike_5",
          "name": "路桩",
          "amount": 5
        },
        {
          "id": "wls2_building_construction_fence_3",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_fence_3",
          "name": "沙包",
          "amount": 5
        },
        {
          "id": "wls2_building_construction_fence_4",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_fence_4",
          "name": "沙包",
          "amount": 5
        },
        {
          "id": "wls2_building_construction_fence_5",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_fence_5",
          "name": "沙包",
          "amount": 5
        }
      ],
      "locations": [
        "丝柏洼地",
        "梣木林",
        "河口",
        "北方森林",
        "冰川湖",
        "德纳利山"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "56e43a39e0c0662096e5678462ed2cf8b90bf2ab429ec742f93b897051fa37e7"
    },
    {
      "id": "wls2_resourse_fourfold_nails_5",
      "name": "合金紧固件",
      "name_en": "Nickel-plated fasteners",
      "name_source": "official_zh",
      "description": "多功能手工和建筑用紧固件套装",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "工具与紧固件",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_fourfold_nails_5",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 2
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 1
        },
        {
          "id": "wls2_static_event_trader_offer_fourfold_nails_5",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_fourfold_nails_4",
              "name": "钢制紧固件",
              "amount": 5
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 1
        },
        {
          "id": "wls2_armor_head_ws_day2024_5_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_head_ws_day2024_5",
              "name": "缀满星星的帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_ws_day2024_colt_5_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_colt_5",
              "name": "周年庆左轮手枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_ws_day2024_shotgun_5_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_shotgun_5",
              "name": "周年庆散弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_body_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_body_5_epic",
              "name": "圣诞警长外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_body_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_body_5_epic",
              "name": "炽热骑手衬衫",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_boots_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_boots_5_epic",
              "name": "圣诞警长靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_boots_5_epic_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_boots_5_epic",
              "name": "炽热骑手靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_legs_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_legs_5_epic",
              "name": "圣诞警长裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_legs_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_legs_5_epic",
              "name": "炽热骑手裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_colt_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_colt_t6",
              "name": "集市柯尔特左轮",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_colt_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_colt_t7",
              "name": "集市柯尔特左轮",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_6_epic_colt_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_6_epic_colt",
              "name": "集市柯尔特左轮",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_pepperbox_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_pepperbox_t6",
              "name": "集市胡椒盒手枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_1_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_1_t6",
              "name": "彩炮 II",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_2_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_2_t6",
              "name": "爆笑",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_3_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_3_t6",
              "name": "吉尔的霰弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_lunar_shotgun_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_lunar_shotgun_6_rare",
              "name": "火焰 霰弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_battlepass3_armor_head_6_rare",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_battlepass3_armor_head_6_rare",
              "name": "小矮妖帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_ws_day2023_shotgun_uncommon_5_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2023_shotgun_uncommon_5",
              "name": "节日霰弹枪 1889",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 1,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_range_pistol_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_range_pistol",
              "name": "手枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 1,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_21_weapon_range_pistol_4_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_21_weapon_range_pistol_4",
              "name": "手枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 1,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_battlepass1_armor_head_6_uncommon_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_battlepass1_armor_head_6_uncommon",
              "name": "旅者帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_body_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_body_5_rare",
              "name": "南瓜猎人外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_legs_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_legs_5_rare",
              "name": "南瓜猎人裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_head_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_head_5_rare",
              "name": "南瓜猎人面具",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_23_weapon_range_rifle_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_23_weapon_range_rifle_6_epic",
              "name": "极光",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_head_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_head_5_epic",
              "name": "圣诞警长帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_head_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_head_5_epic",
              "name": "炽热 骑手 帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_range_halloween_23_pistol_6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_range_halloween_23_pistol_6",
              "name": "恶灵的恐怖",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 7,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_head_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_head_6_rare",
              "name": "幻影骑士帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_body_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_body_6_rare",
              "name": "幽灵骑士的外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_legs_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_legs_6_rare",
              "name": "幽灵骑士的裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_boots_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_boots_5_rare",
              "name": "幽灵骑士之靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_head_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_head_6_rare",
              "name": "鹿角头带",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_body_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_body_6_rare",
              "name": "奶奶的复仇",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_legs_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_legs_6_rare",
              "name": "节日长裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_boots_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_boots_5_rare",
              "name": "节日靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_xmas2024_shotgun_5_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_xmas2024_shotgun_5",
              "name": "暴风雪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_st_patrick_jacket_t5_2026_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_st_patrick_jacket_t5_2026",
              "name": "爱尔兰运气夹克",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_head_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_head_5_epic",
              "name": "弹簧 骑手 帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_body_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_body_5_epic",
              "name": "春季 骑手 外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_legs_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_legs_5_epic",
              "name": "春季 骑手 裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_boots_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_boots_5_epic",
              "name": "弹簧 骑手 靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_head_easter_5_new_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_head_easter_5_new",
              "name": "蛋猎人帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_5",
          "result_name": "合金紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_armor_boots_5_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_5_common",
          "name": "副警长靴子",
          "amount": 1
        },
        {
          "id": "wls2_armor_boots_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_5_uncommon",
          "name": "枪手靴子",
          "amount": 2
        },
        {
          "id": "wls2_armor_boots_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_5_rare",
          "name": "警长靴子",
          "amount": 3
        },
        {
          "id": "wls2_armor_head_5_rare_crocodile",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_5_rare_crocodile",
          "name": "短吻鳄猎人帽",
          "amount": 2
        },
        {
          "id": "wls2_armor_body_5_rare_crocodile",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_5_rare_crocodile",
          "name": "短吻鳄猎人夹克",
          "amount": 2
        },
        {
          "id": "wls2_armor_legs_5_rare_crocodile",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_5_rare_crocodile",
          "name": "短吻鳄猎人裤子",
          "amount": 2
        },
        {
          "id": "wls2_armor_boots_5_rare_crocodile",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_5_rare_crocodile",
          "name": "短吻鳄猎人靴",
          "amount": 3
        },
        {
          "id": "wls2_building_production_well_5",
          "label": "建筑制作",
          "target_id": "wls2_building_production_well_5",
          "name": "井",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_laboratory_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_laboratory_5",
          "name": "实验室",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_leather_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_leather_6",
          "name": "皮革烘干器",
          "amount": 3
        },
        {
          "id": "wls2_building_trap_spike_4",
          "label": "建筑制作",
          "target_id": "wls2_building_trap_spike_4",
          "name": "铁丝网",
          "amount": 2
        },
        {
          "id": "wls2_building_trap_spike_5",
          "label": "建筑制作",
          "target_id": "wls2_building_trap_spike_5",
          "name": "路桩",
          "amount": 1
        },
        {
          "id": "wls2_building_trap_mantrap_4",
          "label": "建筑制作",
          "target_id": "wls2_building_trap_mantrap_4",
          "name": "陷阱",
          "amount": 2
        },
        {
          "id": "wls2_building_trap_mantrap_5",
          "label": "建筑制作",
          "target_id": "wls2_building_trap_mantrap_5",
          "name": "建筑制作",
          "amount": 2
        },
        {
          "id": "wls2_building_storage_chest_5_new",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_chest_5_new",
          "name": "强化箱子",
          "amount": 3
        },
        {
          "id": "wls2_building_storage_metal_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_metal_5",
          "name": "金属",
          "amount": 1
        },
        {
          "id": "wls2_building_storage_food_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_food_5",
          "name": "食物",
          "amount": 10
        },
        {
          "id": "wls2_building_storage_leather_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_leather_5",
          "name": "布料",
          "amount": 10
        },
        {
          "id": "wls2_building_construction_floor_5",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_floor_5",
          "name": "大理石地板",
          "amount": 1
        },
        {
          "id": "wls2_building_construction_wall_5",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_wall_5",
          "name": "大理石墙壁",
          "amount": 1
        },
        {
          "id": "wls2_building_construction_window_5",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_window_5",
          "name": "大理石窗户",
          "amount": 2
        },
        {
          "id": "wls2_building_construction_door_5",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_door_5",
          "name": "大理石门",
          "amount": 3
        },
        {
          "id": "wls2_building_construction_fence_3",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_fence_3",
          "name": "沙包",
          "amount": 1
        },
        {
          "id": "wls2_building_construction_fence_4",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_fence_4",
          "name": "沙包",
          "amount": 1
        },
        {
          "id": "wls2_building_construction_fence_5",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_fence_5",
          "name": "沙包",
          "amount": 1
        },
        {
          "id": "wls2_building_wagon_5",
          "label": "建设提交",
          "target_id": "wls2_building_wagon_5",
          "name": "马车",
          "amount": 10
        },
        {
          "id": "wls2_building_storage_safe_2",
          "label": "建设提交",
          "target_id": "wls2_building_storage_safe_2",
          "name": "保险箱",
          "amount": 4
        },
        {
          "id": "wls2_building_storage_safe_3",
          "label": "建设提交",
          "target_id": "wls2_building_storage_safe_3",
          "name": "保险箱",
          "amount": 6
        },
        {
          "id": "wls2_building_storage_safe_4",
          "label": "建设提交",
          "target_id": "wls2_building_storage_safe_4",
          "name": "保险箱",
          "amount": 6
        },
        {
          "id": "wls2_armor_boots_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_5_epic",
          "name": "强化的靴子",
          "amount": 5
        },
        {
          "id": "wls2_collection_transformer",
          "label": "建设提交",
          "target_id": "wls2_collection_transformer",
          "name": "建设提交",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_hq_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_hq_3",
          "name": "总部",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_hall_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_hall_3",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_safe_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_safe_3",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_safe_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_safe_4",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_saloon_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_saloon_3",
          "name": "酒吧",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_watchtower_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_watchtower_3",
          "name": "瞭望塔",
          "amount": 150
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_food_starage_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_food_starage_3",
          "name": "建设提交",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_bar_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_bar_3",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_powerplant_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_powerplant_3",
          "name": "发电站",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_module_powerplant_transformer_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_powerplant_transformer_3",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_gold_mine_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_gold_mine_3",
          "name": "金矿",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_3",
          "name": "建设提交",
          "amount": 250
        },
        {
          "id": "wls2_collection_clanbase_building_train_station_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_train_station_3",
          "name": "铁路车站",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_train_station_depot_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_train_station_depot_3",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_barrack_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_barrack_3",
          "name": "工棚",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_bedroom_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_bedroom_3",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_resting_room_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_resting_room_3",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_resting_room_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_resting_room_5",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_4",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_4",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_5",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_5",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_collection_broken_swamp_hut",
          "label": "建设提交",
          "target_id": "wls2_collection_broken_swamp_hut",
          "name": "残破的棚屋",
          "amount": 20
        },
        {
          "id": "wls2_building_production_pets_5",
          "label": "建筑制作",
          "target_id": "wls2_building_production_pets_5",
          "name": "诱饵工作台",
          "amount": 10
        },
        {
          "id": "wls2_building_production_field_5",
          "label": "建设提交",
          "target_id": "wls2_building_production_field_5",
          "name": "田地",
          "amount": 10
        },
        {
          "id": "wls2_building_collection_generator_0",
          "label": "建筑制作",
          "target_id": "wls2_building_collection_generator_0",
          "name": "发电机",
          "amount": 5
        },
        {
          "id": "wls2_building_collection_generator_1",
          "label": "建设提交",
          "target_id": "wls2_building_collection_generator_1",
          "name": "发电机",
          "amount": 10
        },
        {
          "id": "wls2_building_collection_barn_4",
          "label": "建设提交",
          "target_id": "wls2_building_collection_barn_4",
          "name": "谷仓",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_shed_chicken_5",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_chicken_5",
          "name": "鸡舍",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_shed_chicken_6",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_chicken_6",
          "name": "鸡舍",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_shed_cow_5",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_cow_5",
          "name": "牛棚",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_shed_cow_6",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_cow_6",
          "name": "牛棚",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_mounts_stable_4",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_mounts_stable_4",
          "name": "马厩",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_product_4",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_product_4",
          "name": "调味品",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_product_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_product_5",
          "name": "调味品",
          "amount": 10
        },
        {
          "id": "wls2_building_encyclopedia_4",
          "label": "建筑制作",
          "target_id": "wls2_building_encyclopedia_4",
          "name": "百科全书",
          "amount": 6
        },
        {
          "id": "wls2_collection_alaska_sledge",
          "label": "建设提交",
          "target_id": "wls2_collection_alaska_sledge",
          "name": "狗拉雪橇",
          "amount": 20
        },
        {
          "id": "wls2_mount_equipment_saddle_rare_5",
          "label": "工作台制作",
          "target_id": "wls2_mount_equipment_saddle_rare_5",
          "name": "韦德鞍",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_traders_2",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_2",
          "name": "商人的店铺",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_traders_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_3",
          "name": "商人的店铺",
          "amount": 250
        },
        {
          "id": "wls2_collection_clanbase_building_traders_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_4",
          "name": "商人的店铺",
          "amount": 460
        },
        {
          "id": "wls2_collection_clanbase_building_laboratory_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_laboratory_3",
          "name": "实验室",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_alchemist_table_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_alchemist_table_3",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_distiller_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_distiller_3",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_distiller_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_distiller_5",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_pagan_place_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_pagan_place_3",
          "name": "力量之地",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_luck_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_luck_3",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_luck_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_luck_5",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_ghost_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_ghost_3",
          "name": "建设提交",
          "amount": 100
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "11f8f6b647a23930beb9489fcc57d4ff87c3511d87079f0d3ef40528cc7682ed"
    },
    {
      "id": "wls2_resourse_fourfold_instruments_5",
      "name": "镀镍工具",
      "name_en": "Nickel-plated tools",
      "name_source": "official_zh",
      "description": "用于制造和升级工坊",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "工具与紧固件",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_fourfold_instruments_5",
          "label": "工作台制作",
          "ingredients": [
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
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_instruments_5",
          "result_name": "镀镍工具",
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
          "amount": 18
        },
        {
          "id": "wls2_backpack_indian_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_indian_5_rare",
          "name": "酋长背包",
          "amount": 18
        },
        {
          "id": "wls2_building_production_bonfire_6",
          "label": "建筑制作",
          "target_id": "wls2_building_production_bonfire_6",
          "name": "篝火",
          "amount": 1
        },
        {
          "id": "wls2_building_production_well_5",
          "label": "建筑制作",
          "target_id": "wls2_building_production_well_5",
          "name": "井",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_kitchen_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_5",
          "name": "厨房",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_kitchen_5_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_5_plus",
          "name": "厨房",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_laboratory_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_laboratory_5",
          "name": "实验室",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_smelter_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_smelter_6",
          "name": "铸造厂",
          "amount": 5
        },
        {
          "id": "wls2_building_workshop_forge_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_6",
          "name": "熔炉",
          "amount": 6
        },
        {
          "id": "wls2_building_workshop_forge_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_6_plus",
          "name": "熔炉",
          "amount": 6
        },
        {
          "id": "wls2_building_workshop_workshop_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workshop_6",
          "name": "工具工作台",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_workbench_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workbench_5",
          "name": "零件工作台",
          "amount": 5
        },
        {
          "id": "wls2_building_workshop_gunworkshop_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_5",
          "name": "枪械工坊",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_gunworkshop_5_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_5_plus",
          "name": "枪械工坊",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_armorworkshop_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_5",
          "name": "护甲工坊",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_armorworkshop_5_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_5_plus",
          "name": "护甲工坊",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_repairshop_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_5",
          "name": "维修商店",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_repairshop_5_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_5_plus",
          "name": "维修商店",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_hebalist_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_hebalist_5",
          "name": "草药桌",
          "amount": 1
        },
        {
          "id": "wls2_building_trap_mantrap_4",
          "label": "建筑制作",
          "target_id": "wls2_building_trap_mantrap_4",
          "name": "陷阱",
          "amount": 1
        },
        {
          "id": "wls2_building_trap_mantrap_5",
          "label": "建筑制作",
          "target_id": "wls2_building_trap_mantrap_5",
          "name": "建筑制作",
          "amount": 1
        },
        {
          "id": "wls2_building_storage_chest_5_new",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_chest_5_new",
          "name": "强化箱子",
          "amount": 3
        },
        {
          "id": "wls2_building_storage_stone_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_stone_5",
          "name": "石头",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_wood_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_wood_5",
          "name": "木材",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_weapon_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_weapon_5",
          "name": "武器",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_armor_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_armor_5",
          "name": "护甲",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_heal_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_heal_5",
          "name": "化学",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_fuel_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_fuel_5",
          "name": "燃料",
          "amount": 5
        },
        {
          "id": "wls2_building_wagon_5",
          "label": "建设提交",
          "target_id": "wls2_building_wagon_5",
          "name": "马车",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_safe_2",
          "label": "建设提交",
          "target_id": "wls2_building_storage_safe_2",
          "name": "保险箱",
          "amount": 4
        },
        {
          "id": "wls2_building_storage_safe_3",
          "label": "建设提交",
          "target_id": "wls2_building_storage_safe_3",
          "name": "保险箱",
          "amount": 6
        },
        {
          "id": "wls2_backpack_cowboy_5_rare_repair",
          "label": "修理",
          "target_id": "wls2_backpack_cowboy_5_rare",
          "name": "副警长背包",
          "amount": 9
        },
        {
          "id": "wls2_backpack_indian_5_rare_repair",
          "label": "修理",
          "target_id": "wls2_backpack_indian_5_rare",
          "name": "酋长背包",
          "amount": 9
        },
        {
          "id": "wls2_building_storage_trinket_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_trinket_5",
          "name": "饰品",
          "amount": 5
        },
        {
          "id": "wls2_collection_transformer",
          "label": "建设提交",
          "target_id": "wls2_collection_transformer",
          "name": "建设提交",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_recycle_4",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_4",
          "name": "分解台",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_recycle_4_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_4_plus",
          "name": "分解台",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_recycle_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_5",
          "name": "分解台",
          "amount": 6
        },
        {
          "id": "wls2_building_workshop_recycle_5_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_5_plus",
          "name": "分解台",
          "amount": 6
        },
        {
          "id": "wls2_collection_clanbase_building_hq_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_hq_3",
          "name": "总部",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_hall_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_hall_3",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_safe_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_safe_3",
          "name": "建设提交",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_powerplant_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_powerplant_3",
          "name": "发电站",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_module_powerplant_transformer_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_powerplant_transformer_3",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_gold_mine_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_gold_mine_3",
          "name": "金矿",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_carts_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_carts_3",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_5",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_5",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_building_production_pets_5",
          "label": "建筑制作",
          "target_id": "wls2_building_production_pets_5",
          "name": "诱饵工作台",
          "amount": 10
        },
        {
          "id": "wls2_building_production_field_5",
          "label": "建设提交",
          "target_id": "wls2_building_production_field_5",
          "name": "田地",
          "amount": 5
        },
        {
          "id": "wls2_building_collection_generator_0",
          "label": "建筑制作",
          "target_id": "wls2_building_collection_generator_0",
          "name": "发电机",
          "amount": 5
        },
        {
          "id": "wls2_building_collection_generator_1",
          "label": "建设提交",
          "target_id": "wls2_building_collection_generator_1",
          "name": "发电机",
          "amount": 10
        },
        {
          "id": "wls2_building_collection_barn_4",
          "label": "建设提交",
          "target_id": "wls2_building_collection_barn_4",
          "name": "谷仓",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_shed_chicken_5",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_chicken_5",
          "name": "鸡舍",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_shed_cow_5",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_cow_5",
          "name": "牛棚",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_mounts_stable_4",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_mounts_stable_4",
          "name": "马厩",
          "amount": 20
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "5a85fa919bf76464da5107744d0c755407868a81b15e62a6875764f71be6247c"
    },
    {
      "id": "wls2_resourse_tertiary_clothroll_5",
      "name": "大麻织物卷",
      "name_en": "Hemp fabric roll",
      "name_source": "official_zh",
      "description": "制作舒适而优质的衣物需要用到大麻布料",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "布卷",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_tertiary_clothroll_5",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_5",
              "name": "大麻布料",
              "amount": 5
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 1
        },
        {
          "id": "wls2_trader_clothroll_5_price140",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_tertiary_clothroll_4",
              "name": "棉花织物卷",
              "amount": 5
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 1
        },
        {
          "id": "wls2_static_event_trader_offer_tertiary_clothroll_5",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_tertiary_clothroll_4",
              "name": "棉花织物卷",
              "amount": 5
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 1
        },
        {
          "id": "wls2_xmas_21_armor_body_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_body_5_epic",
              "name": "圣诞警长外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_body_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_body_5_epic",
              "name": "炽热骑手衬衫",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_body_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_body_6_epic",
              "name": "圣诞警长外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_body_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_body_6_epic",
              "name": "炽热骑手衬衫",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_body_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_body_7_epic",
              "name": "圣诞警长外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_body_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_body_7_epic",
              "name": "炽热骑手衬衫",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_legs_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_legs_5_epic",
              "name": "圣诞警长裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_legs_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_legs_5_epic",
              "name": "炽热骑手裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_legs_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_legs_6_epic",
              "name": "圣诞警长裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_legs_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_legs_6_epic",
              "name": "炽热骑手裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_legs_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_legs_7_epic",
              "name": "圣诞警长裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_legs_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_legs_7_epic",
              "name": "炽热骑手裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_body_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_body_5_rare",
              "name": "南瓜猎人外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_legs_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_legs_5_rare",
              "name": "南瓜猎人裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_boots_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_boots_5_rare",
              "name": "南瓜猎人靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_body_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_body_6_rare",
              "name": "南瓜猎人外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_legs_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_legs_6_rare",
              "name": "南瓜猎人裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_boots_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_boots_6_rare",
              "name": "南瓜猎人靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_body_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_body_7_rare",
              "name": "南瓜猎人外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_legs_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_legs_7_rare",
              "name": "南瓜猎人裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_boots_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_boots_7_rare",
              "name": "南瓜猎人靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_body_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_body_5_rare",
              "name": "幽灵骑士的外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_body_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_body_6_rare",
              "name": "幽灵骑士的外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_legs_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_legs_5_rare",
              "name": "幽灵骑士的裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_legs_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_legs_6_rare",
              "name": "幽灵骑士的裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_body_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_body_5_rare",
              "name": "奶奶的复仇",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_body_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_body_6_rare",
              "name": "奶奶的复仇",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_xmas2024_body_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_body_7_rare",
              "name": "奶奶的复仇",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_legs_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_legs_5_rare",
              "name": "节日长裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_legs_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_legs_6_rare",
              "name": "节日长裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_xmas2024_legs_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_legs_7_rare",
              "name": "节日长裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_st_patrick_jacket_t5_2026_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_st_patrick_jacket_t5_2026",
              "name": "爱尔兰运气夹克",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_st_patrick_jacket_t6_2026_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_st_patrick_jacket_t6_2026",
              "name": "爱尔兰运气夹克",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_st_patrick_jacket_t7_2026_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_st_patrick_jacket_t7_2026",
              "name": "爱尔兰运气夹克",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_body_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_body_5_epic",
              "name": "春季 骑手 外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_body_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_body_6_epic",
              "name": "春季 骑手 外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_body_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_body_7_epic",
              "name": "春季 骑手 外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_legs_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_legs_5_epic",
              "name": "春季 骑手 裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_legs_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_legs_6_epic",
              "name": "春季 骑手 裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_legs_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_legs_7_epic",
              "name": "春季 骑手 裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_tertiary_clothroll_5",
          "result_name": "大麻织物卷",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_armor_body_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_5_rare",
          "name": "警长夹克",
          "amount": 2
        },
        {
          "id": "wls2_armor_legs_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_5_rare",
          "name": "警长长裤",
          "amount": 3
        },
        {
          "id": "wls2_backpack_cowboy_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_cowboy_5_rare",
          "name": "副警长背包",
          "amount": 20
        },
        {
          "id": "wls2_backpack_indian_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_indian_5_rare",
          "name": "酋长背包",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_gunworkshop_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_5",
          "name": "枪械工坊",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_gunworkshop_5_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_5_plus",
          "name": "枪械工坊",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_armorworkshop_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_5",
          "name": "护甲工坊",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_armorworkshop_5_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_5_plus",
          "name": "护甲工坊",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_repairshop_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_5",
          "name": "维修商店",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_repairshop_5_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_5_plus",
          "name": "维修商店",
          "amount": 3
        },
        {
          "id": "wls2_building_wagon_4",
          "label": "建设提交",
          "target_id": "wls2_building_wagon_4",
          "name": "马车",
          "amount": 16
        },
        {
          "id": "wls2_building_wagon_5",
          "label": "建设提交",
          "target_id": "wls2_building_wagon_5",
          "name": "马车",
          "amount": 20
        },
        {
          "id": "wls2_backpack_cowboy_5_rare_repair",
          "label": "修理",
          "target_id": "wls2_backpack_cowboy_5_rare",
          "name": "副警长背包",
          "amount": 10
        },
        {
          "id": "wls2_backpack_indian_5_rare_repair",
          "label": "修理",
          "target_id": "wls2_backpack_indian_5_rare",
          "name": "酋长背包",
          "amount": 10
        },
        {
          "id": "wls2_armor_body_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_5_epic",
          "name": "强化的外套",
          "amount": 4
        },
        {
          "id": "wls2_armor_legs_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_5_epic",
          "name": "强化的裤子",
          "amount": 4
        },
        {
          "id": "wls2_building_workshop_recycle_4",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_4",
          "name": "分解台",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_recycle_4_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_4_plus",
          "name": "分解台",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_recycle_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_5",
          "name": "分解台",
          "amount": 6
        },
        {
          "id": "wls2_building_workshop_recycle_5_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_5_plus",
          "name": "分解台",
          "amount": 6
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_hall_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_hall_3",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_saloon_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_saloon_3",
          "name": "酒吧",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_watchtower_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_watchtower_3",
          "name": "瞭望塔",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_food_starage_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_food_starage_3",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_bar_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_bar_3",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_train_station_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_train_station_3",
          "name": "铁路车站",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_barrack_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_barrack_3",
          "name": "工棚",
          "amount": 150
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_bedroom_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_bedroom_3",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_4",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_4",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_5",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_5",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_collection_broken_swamp_hut",
          "label": "建设提交",
          "target_id": "wls2_collection_broken_swamp_hut",
          "name": "残破的棚屋",
          "amount": 40
        },
        {
          "id": "wls2_building_production_pets_5",
          "label": "建筑制作",
          "target_id": "wls2_building_production_pets_5",
          "name": "诱饵工作台",
          "amount": 10
        },
        {
          "id": "wls2_building_collection_barn_4",
          "label": "建设提交",
          "target_id": "wls2_building_collection_barn_4",
          "name": "谷仓",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_product_4",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_product_4",
          "name": "调味品",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_product_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_product_5",
          "name": "调味品",
          "amount": 10
        },
        {
          "id": "wls2_building_encyclopedia_4",
          "label": "建筑制作",
          "target_id": "wls2_building_encyclopedia_4",
          "name": "百科全书",
          "amount": 3
        },
        {
          "id": "wls2_collection_alaska_sledge",
          "label": "建设提交",
          "target_id": "wls2_collection_alaska_sledge",
          "name": "狗拉雪橇",
          "amount": 20
        },
        {
          "id": "wls2_mount_equipment_saddle_uncommon_5",
          "label": "工作台制作",
          "target_id": "wls2_mount_equipment_saddle_uncommon_5",
          "name": "沼泽鞍",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_traders_2",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_2",
          "name": "商人的店铺",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_laboratory_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_laboratory_3",
          "name": "实验室",
          "amount": 150
        },
        {
          "id": "wls2_collection_clanbase_building_module_alchemist_table_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_alchemist_table_3",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_pagan_place_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_pagan_place_3",
          "name": "力量之地",
          "amount": 150
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_ghost_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_ghost_3",
          "name": "建设提交",
          "amount": 200
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "2ffe78f2447f2cc7d8355aa0caca7d981430cf1a76e001e04e5cfbb308a36395"
    },
    {
      "id": "wls2_resourse_secondary_cloth_5",
      "name": "大麻布料",
      "name_en": "Hemp cloth",
      "name_source": "official_zh",
      "description": "大麻布料可制成许多东西",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "布料",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_secondary_cloth_5",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_fiber_5",
              "name": "大麻",
              "amount": 20
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_5",
          "result_name": "大麻布料",
          "amount": 1
        },
        {
          "id": "wls2_trader_cloth_5_price35",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_cloth_4",
              "name": "棉花布料",
              "amount": 5
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_5",
          "result_name": "大麻布料",
          "amount": 1
        },
        {
          "id": "wls2_halloween_event_trade_cloth_t5",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_event_currency_pumpkin",
              "name": "不祥的南瓜",
              "amount": 2
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_5",
          "result_name": "大麻布料",
          "amount": 1
        },
        {
          "id": "wls2_armor_head_easter_2_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_head_easter_2_t6",
              "name": "复活节牛仔帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_5",
          "result_name": "大麻布料",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_battlepass3_armor_head_5_rare",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_battlepass3_armor_head_5_rare",
              "name": "小矮妖帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_5",
          "result_name": "大麻布料",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_battlepass1_armor_head_5_uncommon_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_battlepass1_armor_head_5_uncommon",
              "name": "旅者帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_5",
          "result_name": "大麻布料",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_head_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_head_5_rare",
              "name": "南瓜猎人面具",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_5",
          "result_name": "大麻布料",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_head_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_head_5_epic",
              "name": "圣诞警长帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_5",
          "result_name": "大麻布料",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_head_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_head_5_epic",
              "name": "炽热 骑手 帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_5",
          "result_name": "大麻布料",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_22_armor_head_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_22_armor_head_5_rare",
              "name": "逐风者的帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_5",
          "result_name": "大麻布料",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_head_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_head_5_rare",
              "name": "幻影骑士帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_5",
          "result_name": "大麻布料",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_head_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_head_5_rare",
              "name": "鹿角头带",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_5",
          "result_name": "大麻布料",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_head_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_head_5_epic",
              "name": "弹簧 骑手 帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_5",
          "result_name": "大麻布料",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_resourse_tertiary_clothroll_5",
          "label": "工作台制作",
          "target_id": "wls2_resourse_tertiary_clothroll_5",
          "name": "大麻织物卷",
          "amount": 5
        },
        {
          "id": "wls2_armor_head_5_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_5_common",
          "name": "副警长帽子",
          "amount": 2
        },
        {
          "id": "wls2_armor_body_5_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_5_common",
          "name": "副警长夹克",
          "amount": 2
        },
        {
          "id": "wls2_armor_legs_5_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_5_common",
          "name": "副警长裤子",
          "amount": 2
        },
        {
          "id": "wls2_armor_head_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_5_uncommon",
          "name": "枪手帽子",
          "amount": 3
        },
        {
          "id": "wls2_armor_body_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_5_uncommon",
          "name": "枪手外套",
          "amount": 3
        },
        {
          "id": "wls2_armor_legs_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_5_uncommon",
          "name": "枪手裤子",
          "amount": 3
        },
        {
          "id": "wls2_armor_head_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_5_rare",
          "name": "警长帽子",
          "amount": 4
        },
        {
          "id": "wls2_armor_head_5_rare_crocodile",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_5_rare_crocodile",
          "name": "短吻鳄猎人帽",
          "amount": 4
        },
        {
          "id": "wls2_armor_body_5_rare_crocodile",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_5_rare_crocodile",
          "name": "短吻鳄猎人夹克",
          "amount": 2
        },
        {
          "id": "wls2_armor_legs_5_rare_crocodile",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_5_rare_crocodile",
          "name": "短吻鳄猎人裤子",
          "amount": 3
        },
        {
          "id": "wls2_building_storage_food_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_food_5",
          "name": "食物",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_heal_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_heal_5",
          "name": "化学",
          "amount": 20
        },
        {
          "id": "wls2_armor_head_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_5_epic",
          "name": "强化的帽子",
          "amount": 4
        },
        {
          "id": "wls2_building_workshop_mounts_stable_4",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_mounts_stable_4",
          "name": "马厩",
          "amount": 80
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "7ec8a07e71e3c28a70a3f7803296c0a501e42a27868bcc8348fb4ca04e929e34"
    },
    {
      "id": "wls2_resourse_secondary_plank_5",
      "name": "丝柏木板",
      "name_en": "Cypress board",
      "name_source": "official_zh",
      "description": "在制作和建筑中都使用的关键材料",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "木板",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_secondary_plank_5",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_wood_5",
              "name": "丝柏",
              "amount": 3
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_5",
          "result_name": "丝柏木板",
          "amount": 1
        },
        {
          "id": "wls2_trader_plank_5_price25",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_4",
              "name": "梣木板",
              "amount": 5
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_5",
          "result_name": "丝柏木板",
          "amount": 1
        },
        {
          "id": "wls2_weapon_ws_day2024_shotgun_5_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_shotgun_5",
              "name": "周年庆散弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_5",
          "result_name": "丝柏木板",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_bow_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_bow_t6",
              "name": "胡咧咧弓",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_5",
          "result_name": "丝柏木板",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_crossbow_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_crossbow_t6",
              "name": "胡萝卜弩",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_5",
          "result_name": "丝柏木板",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_mace_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_mace_t6",
              "name": "彩绘狼牙棒",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_5",
          "result_name": "丝柏木板",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_mallet_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_mallet_t6",
              "name": "复活节木槌",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_5",
          "result_name": "丝柏木板",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_1_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_1_t6",
              "name": "彩炮 II",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_5",
          "result_name": "丝柏木板",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_2_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_2_t6",
              "name": "爆笑",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_5",
          "result_name": "丝柏木板",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_3_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_3_t6",
              "name": "吉尔的霰弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_5",
          "result_name": "丝柏木板",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_ws_day2023_shotgun_uncommon_5_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2023_shotgun_uncommon_5",
              "name": "节日霰弹枪 1889",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_5",
          "result_name": "丝柏木板",
          "amount": 1,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_22_weapon_range_rifle_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_22_weapon_range_rifle_5_rare",
              "name": "极光",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_5",
          "result_name": "丝柏木板",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_tools_axe_5",
          "label": "工作台制作",
          "target_id": "wls2_tools_axe_5",
          "name": "合金斧",
          "amount": 1
        },
        {
          "id": "wls2_tools_pickaxe_5",
          "label": "工作台制作",
          "target_id": "wls2_tools_pickaxe_5",
          "name": "合金稿",
          "amount": 1
        },
        {
          "id": "wls_fishing_rod_t5",
          "label": "工作台制作",
          "target_id": "wls_fishing_rod_t5",
          "name": "柏树钓鱼杆",
          "amount": 1
        },
        {
          "id": "wls2_resourse_fourfold_instruments_5",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_instruments_5",
          "name": "镀镍工具",
          "amount": 2
        },
        {
          "id": "wls2_mosquito_torch",
          "label": "工作台制作",
          "target_id": "wls2_mosquito_torch",
          "name": "驱蚊火炬",
          "amount": 1
        },
        {
          "id": "wls2_resourse_fourfold_gunparts_5",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_gunparts_5",
          "name": "镀镍武器零件",
          "amount": 1
        },
        {
          "id": "wls2_weapon_range_bow_5_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_bow_5_common",
          "name": "反曲弓",
          "amount": 3
        },
        {
          "id": "wls2_weapon_range_rifle_5_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_5_common",
          "name": "温彻斯特 .45 口径步枪",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_shotgun_5_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_5_common",
          "name": "马车夫之枪",
          "amount": 2
        },
        {
          "id": "wls2_weapon_range_rifle_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_5_rare",
          "name": "温彻斯特 M1892",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_shotgun_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_5_rare",
          "name": "战壕枪",
          "amount": 4
        },
        {
          "id": "wls2_building_production_well_5",
          "label": "建筑制作",
          "target_id": "wls2_building_production_well_5",
          "name": "井",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_laboratory_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_laboratory_5",
          "name": "实验室",
          "amount": 5
        },
        {
          "id": "wls2_building_workshop_carpentry_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_carpentry_6",
          "name": "木匠桌",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_stone_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_stone_5",
          "name": "割石机",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_leather_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_leather_5",
          "name": "皮革烘干器",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_sewing_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_sewing_5",
          "name": "织布机",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_forge_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_5",
          "name": "熔炉",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_forge_5_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_5_plus",
          "name": "熔炉",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_workshop_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workshop_5",
          "name": "工具工作台",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_workbench_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workbench_5",
          "name": "零件工作台",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_gunworkshop_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_5",
          "name": "枪械工坊",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_gunworkshop_5_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_5_plus",
          "name": "枪械工坊",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_armorworkshop_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_5",
          "name": "护甲工坊",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_armorworkshop_5_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_5_plus",
          "name": "护甲工坊",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_repairshop_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_5",
          "name": "维修商店",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_repairshop_5_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_5_plus",
          "name": "维修商店",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_hebalist_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_hebalist_5",
          "name": "草药桌",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_chest_5_new",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_chest_5_new",
          "name": "强化箱子",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_metal_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_metal_5",
          "name": "金属",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_stone_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_stone_5",
          "name": "石头",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_wood_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_wood_5",
          "name": "木材",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_food_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_food_5",
          "name": "食物",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_weapon_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_weapon_5",
          "name": "武器",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_armor_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_armor_5",
          "name": "护甲",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_heal_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_heal_5",
          "name": "化学",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_leather_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_leather_5",
          "name": "布料",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_fuel_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_fuel_5",
          "name": "燃料",
          "amount": 20
        },
        {
          "id": "wls2_building_construction_floor_5",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_floor_5",
          "name": "大理石地板",
          "amount": 12
        },
        {
          "id": "wls2_building_construction_wall_5",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_wall_5",
          "name": "大理石墙壁",
          "amount": 12
        },
        {
          "id": "wls2_building_construction_window_5",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_window_5",
          "name": "大理石窗户",
          "amount": 12
        },
        {
          "id": "wls2_building_construction_door_5",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_door_5",
          "name": "大理石门",
          "amount": 12
        },
        {
          "id": "wls2_building_construction_fence_3",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_fence_3",
          "name": "沙包",
          "amount": 2
        },
        {
          "id": "wls2_building_construction_fence_4",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_fence_4",
          "name": "沙包",
          "amount": 2
        },
        {
          "id": "wls2_building_construction_fence_5",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_fence_5",
          "name": "沙包",
          "amount": 2
        },
        {
          "id": "wls2_building_wagon_3",
          "label": "建设提交",
          "target_id": "wls2_building_wagon_3",
          "name": "马车",
          "amount": 16
        },
        {
          "id": "wls2_building_wagon_4",
          "label": "建设提交",
          "target_id": "wls2_building_wagon_4",
          "name": "马车",
          "amount": 18
        },
        {
          "id": "wls2_building_wagon_5",
          "label": "建设提交",
          "target_id": "wls2_building_wagon_5",
          "name": "马车",
          "amount": 20
        },
        {
          "id": "wls2_halloween_event_range_shotgun",
          "label": "工作台制作",
          "target_id": "wls2_halloween_event_range_shotgun",
          "name": "南瓜人之信",
          "amount": 4
        },
        {
          "id": "wls2_halloween_event_range_shotgun_axe",
          "label": "工作台制作",
          "target_id": "wls2_halloween_event_range_shotgun_axe",
          "name": "古董",
          "amount": 4
        },
        {
          "id": "wls2_building_storage_trinket_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_trinket_5",
          "name": "饰品",
          "amount": 20
        },
        {
          "id": "wls2_weapon_xmas2020_candle_staff",
          "label": "工作台制作",
          "target_id": "wls2_weapon_xmas2020_candle_staff",
          "name": "三叉戟",
          "amount": 6
        },
        {
          "id": "wls2_weapon_xmas2020_rifle",
          "label": "工作台制作",
          "target_id": "wls2_weapon_xmas2020_rifle",
          "name": "礼物滑膛枪",
          "amount": 4
        },
        {
          "id": "wls2_weapon_xmas2020_ice_bow",
          "label": "工作台制作",
          "target_id": "wls2_weapon_xmas2020_ice_bow",
          "name": "冰雪女王弓",
          "amount": 6
        },
        {
          "id": "wls2_weapon_xmas2020_shotgun",
          "label": "工作台制作",
          "target_id": "wls2_weapon_xmas2020_shotgun",
          "name": "圣诞老人的枪",
          "amount": 5
        },
        {
          "id": "wls2_weapon_range_rifle_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_5_epic",
          "name": "罗斯步枪",
          "amount": 10
        },
        {
          "id": "wls2_weapon_range_shotgun_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_5_epic",
          "name": "温彻斯特 M1897",
          "amount": 5
        },
        {
          "id": "wls2_collection_transformer",
          "label": "建设提交",
          "target_id": "wls2_collection_transformer",
          "name": "建设提交",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_recycle_4",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_4",
          "name": "分解台",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_recycle_4_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_4_plus",
          "name": "分解台",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_recycle_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_5",
          "name": "分解台",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_recycle_5_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_5_plus",
          "name": "分解台",
          "amount": 30
        },
        {
          "id": "wls2_collection_clanbase_building_hq_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_hq_3",
          "name": "总部",
          "amount": 3000
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_hall_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_hall_3",
          "name": "建设提交",
          "amount": 750
        },
        {
          "id": "wls2_collection_clanbase_building_saloon_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_saloon_3",
          "name": "酒吧",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_watchtower_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_watchtower_3",
          "name": "瞭望塔",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_food_starage_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_food_starage_3",
          "name": "建设提交",
          "amount": 250
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_bar_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_bar_3",
          "name": "建设提交",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_powerplant_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_powerplant_3",
          "name": "发电站",
          "amount": 3000
        },
        {
          "id": "wls2_collection_clanbase_building_module_powerplant_transformer_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_powerplant_transformer_3",
          "name": "建设提交",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_gold_mine_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_gold_mine_3",
          "name": "金矿",
          "amount": 5000
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_3",
          "name": "建设提交",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_carts_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_carts_3",
          "name": "建设提交",
          "amount": 2000
        },
        {
          "id": "wls2_collection_clanbase_building_train_station_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_train_station_3",
          "name": "铁路车站",
          "amount": 1500
        },
        {
          "id": "wls2_collection_clanbase_building_module_train_station_depot_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_train_station_depot_3",
          "name": "建设提交",
          "amount": 1500
        },
        {
          "id": "wls2_collection_clanbase_building_barrack_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_barrack_3",
          "name": "工棚",
          "amount": 750
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_bedroom_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_bedroom_3",
          "name": "建设提交",
          "amount": 400
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_resting_room_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_resting_room_3",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_4",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_4",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_collection_broken_swamp_hut",
          "label": "建设提交",
          "target_id": "wls2_collection_broken_swamp_hut",
          "name": "残破的棚屋",
          "amount": 60
        },
        {
          "id": "wls2_building_production_pets_5",
          "label": "建筑制作",
          "target_id": "wls2_building_production_pets_5",
          "name": "诱饵工作台",
          "amount": 40
        },
        {
          "id": "wls2_building_production_field_5",
          "label": "建设提交",
          "target_id": "wls2_building_production_field_5",
          "name": "田地",
          "amount": 20
        },
        {
          "id": "wls2_building_collection_generator_0",
          "label": "建筑制作",
          "target_id": "wls2_building_collection_generator_0",
          "name": "发电机",
          "amount": 5
        },
        {
          "id": "wls2_building_collection_generator_1",
          "label": "建设提交",
          "target_id": "wls2_building_collection_generator_1",
          "name": "发电机",
          "amount": 20
        },
        {
          "id": "wls2_building_collection_barn_4",
          "label": "建设提交",
          "target_id": "wls2_building_collection_barn_4",
          "name": "谷仓",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_shed_chicken_5",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_chicken_5",
          "name": "鸡舍",
          "amount": 40
        },
        {
          "id": "wls2_building_workshop_shed_cow_5",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_cow_5",
          "name": "牛棚",
          "amount": 40
        },
        {
          "id": "wls2_building_workshop_mounts_stable_4",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_mounts_stable_4",
          "name": "马厩",
          "amount": 40
        },
        {
          "id": "wls2_building_storage_product_4",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_product_4",
          "name": "调味品",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_product_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_product_5",
          "name": "调味品",
          "amount": 20
        },
        {
          "id": "wls2_building_encyclopedia_4",
          "label": "建筑制作",
          "target_id": "wls2_building_encyclopedia_4",
          "name": "百科全书",
          "amount": 20
        },
        {
          "id": "wls2_collection_alaska_sledge",
          "label": "建设提交",
          "target_id": "wls2_collection_alaska_sledge",
          "name": "狗拉雪橇",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_traders_2",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_2",
          "name": "商人的店铺",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_laboratory_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_laboratory_3",
          "name": "实验室",
          "amount": 750
        },
        {
          "id": "wls2_collection_clanbase_building_module_alchemist_table_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_alchemist_table_3",
          "name": "建设提交",
          "amount": 400
        },
        {
          "id": "wls2_collection_clanbase_building_module_distiller_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_distiller_3",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_pagan_place_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_pagan_place_3",
          "name": "力量之地",
          "amount": 750
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_luck_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_luck_3",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_ghost_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_ghost_3",
          "name": "建设提交",
          "amount": 400
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "368319892c4b7e3bf98ab3c1b0e23f54ec0e9f6f436030ecf8e2be04aabf4cf0"
    },
    {
      "id": "wls2_resourse_fourfold_gunparts_5",
      "name": "镀镍武器零件",
      "name_en": "Nickel-plated parts",
      "name_source": "official_zh",
      "description": "制作一级火器所需部件",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "枪械零件",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_fourfold_gunparts_5",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_5",
              "name": "丝柏木板",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_leather_5",
              "name": "结实皮革",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_ingot_5",
              "name": "武器合金锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_miscellaneous_gunpowder_1",
              "name": "火药",
              "amount": 20
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_5",
          "result_name": "镀镍武器零件",
          "amount": 1
        },
        {
          "id": "wls2_static_event_trader_offer_gunparts_5",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_fourfold_gunparts_4",
              "name": "铁零件",
              "amount": 5
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_5",
          "result_name": "镀镍武器零件",
          "amount": 1
        },
        {
          "id": "wls2_weapon_ws_day2024_colt_5_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_colt_5",
              "name": "周年庆左轮手枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_5",
          "result_name": "镀镍武器零件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_ws_day2024_shotgun_5_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_shotgun_5",
              "name": "周年庆散弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_5",
          "result_name": "镀镍武器零件",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_colt_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_colt_t6",
              "name": "集市柯尔特左轮",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_5",
          "result_name": "镀镍武器零件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_colt_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_colt_t7",
              "name": "集市柯尔特左轮",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_5",
          "result_name": "镀镍武器零件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_6_epic_colt_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_6_epic_colt",
              "name": "集市柯尔特左轮",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_5",
          "result_name": "镀镍武器零件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_pepperbox_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_pepperbox_t6",
              "name": "集市胡椒盒手枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_5",
          "result_name": "镀镍武器零件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_1_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_1_t6",
              "name": "彩炮 II",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_5",
          "result_name": "镀镍武器零件",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_2_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_2_t6",
              "name": "爆笑",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_5",
          "result_name": "镀镍武器零件",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_3_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_3_t6",
              "name": "吉尔的霰弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_5",
          "result_name": "镀镍武器零件",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_lunar_shotgun_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_lunar_shotgun_6_rare",
              "name": "火焰 霰弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_5",
          "result_name": "镀镍武器零件",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_22_weapon_range_rifle_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_22_weapon_range_rifle_5_rare",
              "name": "极光",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_5",
          "result_name": "镀镍武器零件",
          "amount": 7,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_range_halloween_23_pistol_5_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_range_halloween_23_pistol_5",
              "name": "恶灵的恐怖",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_5",
          "result_name": "镀镍武器零件",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_xmas2024_shotgun_5_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_xmas2024_shotgun_5",
              "name": "暴风雪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_5",
          "result_name": "镀镍武器零件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_weapon_range_revolver_5_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_5_common",
          "name": "史密斯威森-1型",
          "amount": 1
        },
        {
          "id": "wls2_weapon_range_rifle_5_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_5_common",
          "name": "温彻斯特 .45 口径步枪",
          "amount": 2
        },
        {
          "id": "wls2_weapon_range_shotgun_5_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_5_common",
          "name": "马车夫之枪",
          "amount": 2
        },
        {
          "id": "wls2_weapon_range_revolver_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_5_uncommon",
          "name": "史密斯威森-2 型",
          "amount": 3
        },
        {
          "id": "wls2_weapon_range_revolver_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_5_rare",
          "name": "史密斯威森-斯科菲尔德",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_rifle_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_5_rare",
          "name": "温彻斯特 M1892",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_shotgun_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_5_rare",
          "name": "战壕枪",
          "amount": 8
        },
        {
          "id": "wls2_weapon_xmas2020_rifle",
          "label": "工作台制作",
          "target_id": "wls2_weapon_xmas2020_rifle",
          "name": "礼物滑膛枪",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_revolver_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_5_epic",
          "name": "柯尔特 M1900",
          "amount": 3
        },
        {
          "id": "wls2_weapon_range_rifle_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_5_epic",
          "name": "罗斯步枪",
          "amount": 5
        },
        {
          "id": "wls2_weapon_range_shotgun_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_5_epic",
          "name": "温彻斯特 M1897",
          "amount": 5
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "b4cb064b770c03942b02b78ed6cb58bb85cd92fa6c5c5927ae9976b83eab16e6"
    },
    {
      "id": "wls2_resourse_secondary_leather_5",
      "name": "结实皮革",
      "name_en": "Strong leather",
      "name_source": "official_zh",
      "description": "适合制作高品质衣物",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "皮革",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_secondary_leather_5",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_5",
              "name": "完美兽皮",
              "amount": 3
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 1
        },
        {
          "id": "wls2_trader_leather_5_price35",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_leather_4",
              "name": "厚皮革",
              "amount": 5
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 1
        },
        {
          "id": "wls2_halloween_event_trade_leather_t5",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_event_currency_pumpkin",
              "name": "不祥的南瓜",
              "amount": 2
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 1
        },
        {
          "id": "wls2_armor_head_ws_day2024_5_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_head_ws_day2024_5",
              "name": "缀满星星的帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_body_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_body_5_epic",
              "name": "圣诞警长外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 10,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_body_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_body_5_epic",
              "name": "炽热骑手衬衫",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 10,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_boots_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_boots_5_epic",
              "name": "圣诞警长靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_boots_5_epic_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_boots_5_epic",
              "name": "炽热骑手靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_legs_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_legs_5_epic",
              "name": "圣诞警长裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_legs_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_legs_5_epic",
              "name": "炽热骑手裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_head_easter_2_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_head_easter_2_t6",
              "name": "复活节牛仔帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_bow_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_bow_t6",
              "name": "胡咧咧弓",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_mallet_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_mallet_t6",
              "name": "复活节木槌",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_battlepass3_armor_head_5_rare",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_battlepass3_armor_head_5_rare",
              "name": "小矮妖帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_battlepass1_armor_head_5_uncommon_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_battlepass1_armor_head_5_uncommon",
              "name": "旅者帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_body_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_body_5_rare",
              "name": "南瓜猎人外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_legs_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_legs_5_rare",
              "name": "南瓜猎人裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_boots_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_boots_5_rare",
              "name": "南瓜猎人靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_head_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_head_5_rare",
              "name": "南瓜猎人面具",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_head_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_head_5_epic",
              "name": "圣诞警长帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_head_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_head_5_epic",
              "name": "炽热 骑手 帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_22_armor_head_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_22_armor_head_5_rare",
              "name": "逐风者的帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_head_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_head_5_rare",
              "name": "幻影骑士帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_body_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_body_5_rare",
              "name": "幽灵骑士的外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 10,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_legs_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_legs_5_rare",
              "name": "幽灵骑士的裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 7,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_boots_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_boots_5_rare",
              "name": "幽灵骑士之靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_head_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_head_5_rare",
              "name": "鹿角头带",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_body_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_body_5_rare",
              "name": "奶奶的复仇",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 10,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_legs_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_legs_5_rare",
              "name": "节日长裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 7,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_boots_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_boots_5_rare",
              "name": "节日靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_st_patrick_jacket_t5_2026_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_st_patrick_jacket_t5_2026",
              "name": "爱尔兰运气夹克",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 10,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_head_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_head_5_epic",
              "name": "弹簧 骑手 帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_body_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_body_5_epic",
              "name": "春季 骑手 外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 10,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_legs_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_legs_5_epic",
              "name": "春季 骑手 裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_boots_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_boots_5_epic",
              "name": "弹簧 骑手 靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_head_easter_5_new_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_head_easter_5_new",
              "name": "蛋猎人帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_5",
          "result_name": "结实皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_resourse_fourfold_instruments_5",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_instruments_5",
          "name": "镀镍工具",
          "amount": 2
        },
        {
          "id": "wls2_resourse_fourfold_gunparts_5",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_gunparts_5",
          "name": "镀镍武器零件",
          "amount": 1
        },
        {
          "id": "wls2_armor_head_5_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_5_common",
          "name": "副警长帽子",
          "amount": 3
        },
        {
          "id": "wls2_armor_body_5_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_5_common",
          "name": "副警长夹克",
          "amount": 5
        },
        {
          "id": "wls2_armor_legs_5_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_5_common",
          "name": "副警长裤子",
          "amount": 4
        },
        {
          "id": "wls2_armor_boots_5_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_5_common",
          "name": "副警长靴子",
          "amount": 2
        },
        {
          "id": "wls2_armor_head_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_5_uncommon",
          "name": "枪手帽子",
          "amount": 4
        },
        {
          "id": "wls2_armor_body_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_5_uncommon",
          "name": "枪手外套",
          "amount": 6
        },
        {
          "id": "wls2_armor_legs_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_5_uncommon",
          "name": "枪手裤子",
          "amount": 5
        },
        {
          "id": "wls2_armor_boots_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_5_uncommon",
          "name": "枪手靴子",
          "amount": 3
        },
        {
          "id": "wls2_armor_head_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_5_rare",
          "name": "警长帽子",
          "amount": 5
        },
        {
          "id": "wls2_armor_body_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_5_rare",
          "name": "警长夹克",
          "amount": 10
        },
        {
          "id": "wls2_armor_legs_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_5_rare",
          "name": "警长长裤",
          "amount": 7
        },
        {
          "id": "wls2_armor_boots_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_5_rare",
          "name": "警长靴子",
          "amount": 4
        },
        {
          "id": "wls2_armor_head_5_rare_crocodile",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_5_rare_crocodile",
          "name": "短吻鳄猎人帽",
          "amount": 1
        },
        {
          "id": "wls2_armor_body_5_rare_crocodile",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_5_rare_crocodile",
          "name": "短吻鳄猎人夹克",
          "amount": 1
        },
        {
          "id": "wls2_armor_legs_5_rare_crocodile",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_5_rare_crocodile",
          "name": "短吻鳄猎人裤子",
          "amount": 1
        },
        {
          "id": "wls2_armor_boots_5_rare_crocodile",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_5_rare_crocodile",
          "name": "短吻鳄猎人靴",
          "amount": 1
        },
        {
          "id": "wls2_weapon_melee_knife_5_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_5_common",
          "name": "刺刀",
          "amount": 2
        },
        {
          "id": "wls2_weapon_melee_sabre_5_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_sabre_5_common",
          "name": "同盟军刀",
          "amount": 4
        },
        {
          "id": "wls2_weapon_melee_knife_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_5_uncommon",
          "name": "警长匕首",
          "amount": 3
        },
        {
          "id": "wls2_weapon_melee_sabre_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_sabre_5_rare",
          "name": "军官军刀",
          "amount": 6
        },
        {
          "id": "wls2_weapon_range_bow_5_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_bow_5_common",
          "name": "反曲弓",
          "amount": 1
        },
        {
          "id": "wls2_backpack_cowboy_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_cowboy_5_rare",
          "name": "副警长背包",
          "amount": 20
        },
        {
          "id": "wls2_backpack_indian_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_indian_5_rare",
          "name": "酋长背包",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_carpentry_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_carpentry_6",
          "name": "木匠桌",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_stone_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_stone_6",
          "name": "割石机",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_sewing_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_sewing_5",
          "name": "织布机",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_smelter_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_smelter_5",
          "name": "铸造厂",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_forge_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_5",
          "name": "熔炉",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_forge_5_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_5_plus",
          "name": "熔炉",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_workshop_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workshop_5",
          "name": "工具工作台",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_workbench_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workbench_5",
          "name": "零件工作台",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_metal_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_metal_5",
          "name": "金属",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_stone_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_stone_5",
          "name": "石头",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_leather_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_leather_5",
          "name": "布料",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_fuel_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_fuel_5",
          "name": "燃料",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_safe_2",
          "label": "建设提交",
          "target_id": "wls2_building_storage_safe_2",
          "name": "保险箱",
          "amount": 4
        },
        {
          "id": "wls2_building_storage_safe_3",
          "label": "建设提交",
          "target_id": "wls2_building_storage_safe_3",
          "name": "保险箱",
          "amount": 6
        },
        {
          "id": "wls2_backpack_cowboy_5_rare_repair",
          "label": "修理",
          "target_id": "wls2_backpack_cowboy_5_rare",
          "name": "副警长背包",
          "amount": 10
        },
        {
          "id": "wls2_backpack_indian_5_rare_repair",
          "label": "修理",
          "target_id": "wls2_backpack_indian_5_rare",
          "name": "酋长背包",
          "amount": 10
        },
        {
          "id": "wls2_building_storage_trinket_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_trinket_5",
          "name": "饰品",
          "amount": 20
        },
        {
          "id": "wls2_weapon_xmas2020_ice_bow",
          "label": "工作台制作",
          "target_id": "wls2_weapon_xmas2020_ice_bow",
          "name": "冰雪女王弓",
          "amount": 3
        },
        {
          "id": "wls2_weapon_xmas2020_saber",
          "label": "工作台制作",
          "target_id": "wls2_weapon_xmas2020_saber",
          "name": "五彩纸谢军刀",
          "amount": 4
        },
        {
          "id": "wls2_weapon_xmas2020_ice_axe",
          "label": "工作台制作",
          "target_id": "wls2_weapon_xmas2020_ice_axe",
          "name": "冰雪女王斧",
          "amount": 8
        },
        {
          "id": "wls2_armor_head_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_5_epic",
          "name": "强化的帽子",
          "amount": 6
        },
        {
          "id": "wls2_armor_body_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_5_epic",
          "name": "强化的外套",
          "amount": 10
        },
        {
          "id": "wls2_armor_legs_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_5_epic",
          "name": "强化的裤子",
          "amount": 8
        },
        {
          "id": "wls2_armor_boots_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_5_epic",
          "name": "强化的靴子",
          "amount": 4
        },
        {
          "id": "wls2_weapon_melee_knife_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_5_epic",
          "name": "军用匕首",
          "amount": 3
        },
        {
          "id": "wls2_weapon_melee_sabre_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_sabre_5_epic",
          "name": "军用军刀",
          "amount": 6
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_hall_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_hall_3",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_safe_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_safe_3",
          "name": "建设提交",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_saloon_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_saloon_3",
          "name": "酒吧",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_watchtower_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_watchtower_3",
          "name": "瞭望塔",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_food_starage_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_food_starage_3",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_bar_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_bar_3",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_3",
          "name": "建设提交",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_carts_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_carts_3",
          "name": "建设提交",
          "amount": 250
        },
        {
          "id": "wls2_collection_clanbase_building_train_station_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_train_station_3",
          "name": "铁路车站",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_module_train_station_depot_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_train_station_depot_3",
          "name": "建设提交",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_barrack_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_barrack_3",
          "name": "工棚",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_bedroom_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_bedroom_3",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_resting_room_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_resting_room_3",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_4",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_4",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_5",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_5",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_building_collection_generator_1",
          "label": "建设提交",
          "target_id": "wls2_building_collection_generator_1",
          "name": "发电机",
          "amount": 20
        },
        {
          "id": "wls2_building_collection_barn_4",
          "label": "建设提交",
          "target_id": "wls2_building_collection_barn_4",
          "name": "谷仓",
          "amount": 20
        },
        {
          "id": "wls2_building_encyclopedia_4",
          "label": "建筑制作",
          "target_id": "wls2_building_encyclopedia_4",
          "name": "百科全书",
          "amount": 8
        },
        {
          "id": "wls2_mount_equipment_saddle_uncommon_5",
          "label": "工作台制作",
          "target_id": "wls2_mount_equipment_saddle_uncommon_5",
          "name": "沼泽鞍",
          "amount": 20
        },
        {
          "id": "wls2_mount_equipment_saddle_rare_5",
          "label": "工作台制作",
          "target_id": "wls2_mount_equipment_saddle_rare_5",
          "name": "韦德鞍",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_traders_2",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_2",
          "name": "商人的店铺",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_laboratory_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_laboratory_3",
          "name": "实验室",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_alchemist_table_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_alchemist_table_3",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_distiller_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_distiller_3",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_pagan_place_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_pagan_place_3",
          "name": "力量之地",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_luck_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_luck_3",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_ghost_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_ghost_3",
          "name": "建设提交",
          "amount": 100
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "f674e39214208d7609445defb07bc7b14a7227668faeb12601a46128be6e81cc"
    },
    {
      "id": "wls2_resourse_secondary_stoneblock_5",
      "name": "大理石块",
      "name_en": "Marble block",
      "name_source": "official_zh",
      "description": "大豪宅里各种奢侈装饰的一部分",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "石块",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_secondary_stoneblock_5",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_stone_5",
              "name": "大理石",
              "amount": 5
            }
          ],
          "result_id": "wls2_resourse_secondary_stoneblock_5",
          "result_name": "大理石块",
          "amount": 1
        },
        {
          "id": "wls2_trader_stoneblock_5_price35",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_stoneblock_4",
              "name": "花岗岩石块",
              "amount": 5
            }
          ],
          "result_id": "wls2_resourse_secondary_stoneblock_5",
          "result_name": "大理石块",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_building_production_bonfire_6",
          "label": "建筑制作",
          "target_id": "wls2_building_production_bonfire_6",
          "name": "篝火",
          "amount": 5
        },
        {
          "id": "wls2_building_workshop_kitchen_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_5",
          "name": "厨房",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_kitchen_5_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_5_plus",
          "name": "厨房",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_carpentry_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_carpentry_6",
          "name": "木匠桌",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_stone_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_stone_6",
          "name": "割石机",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_smelter_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_smelter_5",
          "name": "铸造厂",
          "amount": 18
        },
        {
          "id": "wls2_building_workshop_smelter_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_smelter_6",
          "name": "铸造厂",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_forge_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_5",
          "name": "熔炉",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_forge_5_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_5_plus",
          "name": "熔炉",
          "amount": 12
        },
        {
          "id": "wls2_building_workshop_workshop_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workshop_5",
          "name": "工具工作台",
          "amount": 18
        },
        {
          "id": "wls2_building_workshop_hebalist_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_hebalist_5",
          "name": "草药桌",
          "amount": 5
        },
        {
          "id": "wls2_building_construction_floor_5",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_floor_5",
          "name": "大理石地板",
          "amount": 20
        },
        {
          "id": "wls2_building_construction_wall_5",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_wall_5",
          "name": "大理石墙壁",
          "amount": 20
        },
        {
          "id": "wls2_building_construction_window_5",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_window_5",
          "name": "大理石窗户",
          "amount": 20
        },
        {
          "id": "wls2_building_construction_door_5",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_door_5",
          "name": "大理石门",
          "amount": 20
        },
        {
          "id": "wls2_resourse_secondary_stoneblock_6",
          "label": "工作台制作",
          "target_id": "wls2_resourse_secondary_stoneblock_6",
          "name": "强化大理石块",
          "amount": 1
        },
        {
          "id": "wls2_collection_clanbase_building_hq_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_hq_3",
          "name": "总部",
          "amount": 3000
        },
        {
          "id": "wls2_collection_clanbase_building_saloon_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_saloon_3",
          "name": "酒吧",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_bar_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_bar_3",
          "name": "建设提交",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_powerplant_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_powerplant_3",
          "name": "发电站",
          "amount": 3000
        },
        {
          "id": "wls2_collection_clanbase_building_module_powerplant_transformer_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_powerplant_transformer_3",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_gold_mine_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_gold_mine_3",
          "name": "金矿",
          "amount": 2500
        },
        {
          "id": "wls2_collection_clanbase_building_train_station_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_train_station_3",
          "name": "铁路车站",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_module_train_station_depot_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_train_station_depot_3",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_barrack_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_barrack_3",
          "name": "工棚",
          "amount": 1000
        },
        {
          "id": "wls2_building_collection_generator_1",
          "label": "建设提交",
          "target_id": "wls2_building_collection_generator_1",
          "name": "发电机",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_laboratory_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_laboratory_3",
          "name": "实验室",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_pagan_place_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_pagan_place_3",
          "name": "力量之地",
          "amount": 1000
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "432bf8775ba9088a0719df36cfbbac4135097c89941883b0869a68c4598e7657"
    },
    {
      "id": "wls2_resourse_primary_stone_5",
      "name": "大理石",
      "name_en": "Marble",
      "name_source": "official_zh",
      "description": "用于排列建筑物内部和正面的材料。",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "石材",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_static_town_trader_offer_stone_5",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_stone_4",
              "name": "花岗岩",
              "amount": 5
            }
          ],
          "result_id": "wls2_resourse_primary_stone_5",
          "result_name": "大理石",
          "amount": 1
        },
        {
          "id": "wls2_south_trader_stone_5",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_resourse_primary_stone_5",
          "result_name": "大理石",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_easter2021_trader_random_resource_t5_stone",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 25
            }
          ],
          "result_id": "wls2_resourse_primary_stone_5",
          "result_name": "大理石",
          "amount": 1
        },
        {
          "id": "wls2_halloween_21_trader_random_resource_t5_stone",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_25_currency_pumpkin",
              "name": "幽灵南瓜",
              "amount": 20
            }
          ],
          "result_id": "wls2_resourse_primary_stone_5",
          "result_name": "大理石",
          "amount": 1
        },
        {
          "id": "wls2_15coins_dynamic_town_trader_offer_stone_5",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_resourse_primary_stone_5",
          "result_name": "大理石",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_xmas_21_trader_random_resource_t5_stone",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_xmas_23_currency_firework",
              "name": "爆竹",
              "amount": 15
            },
            {
              "id": "wls2_xmas_25_currency_firework",
              "name": "爆竹",
              "amount": 15
            }
          ],
          "result_id": "wls2_resourse_primary_stone_5",
          "result_name": "大理石",
          "amount": 1
        },
        {
          "id": "wls2_easter_22_trader_random_resource_t5_stone",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_24_currency_egg",
              "name": "复活节彩蛋",
              "amount": 15
            }
          ],
          "result_id": "wls2_resourse_primary_stone_5",
          "result_name": "大理石",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_resourse_secondary_stoneblock_5",
          "label": "工作台制作",
          "target_id": "wls2_resourse_secondary_stoneblock_5",
          "name": "大理石块",
          "amount": 5
        },
        {
          "id": "wls2_resourse_secondary_stoneblock_7",
          "label": "工作台制作",
          "target_id": "wls2_resourse_secondary_stoneblock_7",
          "name": "水磨石块",
          "amount": 3
        }
      ],
      "locations": [
        "盐矿",
        "铬铁矿",
        "德纳利山",
        "冰川湖"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "84e305cb46da9b021d531d0186a35c590a8b934558b1dc5de3f997dbf1eb070a"
    },
    {
      "id": "wls2_resourse_primary_ore_5",
      "name": "镍矿石",
      "name_en": "Nickel ore",
      "name_source": "official_zh",
      "description": "十分罕见的制作材料。用于最耐用的钢制品制作",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "矿石",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_static_indian_trader_offer_ore_5",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls_bear_claw",
              "name": "熊爪",
              "amount": 20
            },
            {
              "id": "wls_wolf_fang",
              "name": "狼牙",
              "amount": 20
            }
          ],
          "result_id": "wls2_resourse_primary_ore_5",
          "result_name": "镍矿石",
          "amount": 5
        },
        {
          "id": "wls2_south_trader_ore_5",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_resourse_primary_ore_5",
          "result_name": "镍矿石",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_easter2021_trader_random_resource_t5_ore",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_currency_egg",
              "name": "复活节彩蛋",
              "amount": 25
            }
          ],
          "result_id": "wls2_resourse_primary_ore_5",
          "result_name": "镍矿石",
          "amount": 1
        },
        {
          "id": "wls2_halloween_21_trader_random_resource_t5_ore",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_25_currency_pumpkin",
              "name": "幽灵南瓜",
              "amount": 20
            }
          ],
          "result_id": "wls2_resourse_primary_ore_5",
          "result_name": "镍矿石",
          "amount": 1
        },
        {
          "id": "wls2_xmas_21_trader_random_resource_t5_ore",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_xmas_23_currency_firework",
              "name": "爆竹",
              "amount": 15
            },
            {
              "id": "wls2_xmas_25_currency_firework",
              "name": "爆竹",
              "amount": 15
            }
          ],
          "result_id": "wls2_resourse_primary_ore_5",
          "result_name": "镍矿石",
          "amount": 1
        },
        {
          "id": "wls2_easter_22_trader_random_resource_t5_ore",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_easter_24_currency_egg",
              "name": "复活节彩蛋",
              "amount": 15
            }
          ],
          "result_id": "wls2_resourse_primary_ore_5",
          "result_name": "镍矿石",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_resourse_secondary_ingot_5",
          "label": "工作台制作",
          "target_id": "wls2_resourse_secondary_ingot_5",
          "name": "武器合金锭",
          "amount": 4
        }
      ],
      "locations": [
        "盐矿",
        "淹没高原",
        "铬铁矿",
        "德纳利山"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "8698d8492296cf1a27b358c30ab5d5719e23d0ad889dc62b7d842ff330022447"
    },
    {
      "id": "wls2_resourse_primary_fiber_5",
      "name": "大麻",
      "name_en": "Hemp",
      "name_source": "official_zh",
      "description": "最优质的大麻纤维，可用来制作布料和绳子。",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "纤维",
      "tier": 5,
      "rarity": "common",
      "max_stack": 100,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_static_south_trader_offer_fiber_5",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_fiber_4",
              "name": "棉花",
              "amount": 5
            }
          ],
          "result_id": "wls2_resourse_primary_fiber_5",
          "result_name": "大麻",
          "amount": 1
        },
        {
          "id": "wls2_south_trader_fiber_5",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_resourse_primary_fiber_5",
          "result_name": "大麻",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_recipe_field_fiber_5",
          "label": "种植",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_seed_hemp_1",
              "name": "大麻种子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_primary_fiber_5",
          "result_name": "大麻",
          "amount": 1,
          "min_level": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_resourse_secondary_rope_5",
          "label": "工作台制作",
          "target_id": "wls2_resourse_secondary_rope_5",
          "name": "大麻绳",
          "amount": 20
        },
        {
          "id": "wls2_resourse_secondary_cloth_5",
          "label": "工作台制作",
          "target_id": "wls2_resourse_secondary_cloth_5",
          "name": "大麻布料",
          "amount": 20
        },
        {
          "id": "wls2_consumable_pet_bait_lynx_5",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_lynx_5",
          "name": "山猫诱饵 V",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_lynx_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_lynx_6",
          "name": "猞猁诱饵VI",
          "amount": 3
        },
        {
          "id": "wls2_consumable_pet_bait_lynx_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_lynx_7",
          "name": "山猫诱饵 VII",
          "amount": 5
        },
        {
          "id": "wls2_consumable_pet_bait_elite_crocodiles_5",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_elite_crocodiles_5",
          "name": "短吻鳄诱饵",
          "amount": 5
        }
      ],
      "locations": [
        "河口",
        "浅湖",
        "丝柏洼地",
        "淹没高原"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "ba529020dae5c5a1f8490247cff3f24437c8e110aa154de852a5a4ee1876e4af"
    },
    {
      "id": "wls2_resourse_secondary_rope_5",
      "name": "大麻绳",
      "name_en": "Hemp rope",
      "name_source": "official_zh",
      "description": "由大麻制成的绳子，简单而可靠。不过别把它当烟给抽了",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "绳索",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_secondary_rope_5",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_fiber_5",
              "name": "大麻",
              "amount": 20
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_5",
          "result_name": "大麻绳",
          "amount": 1
        },
        {
          "id": "wls2_trader_rope_5_price25",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_rope_4",
              "name": "棉绳",
              "amount": 5
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_5",
          "result_name": "大麻绳",
          "amount": 1
        },
        {
          "id": "wls2_xmas_21_armor_boots_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_boots_5_epic",
              "name": "圣诞警长靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_5",
          "result_name": "大麻绳",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_boots_5_epic_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_boots_5_epic",
              "name": "炽热骑手靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_5",
          "result_name": "大麻绳",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_bow_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_bow_t6",
              "name": "胡咧咧弓",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_5",
          "result_name": "大麻绳",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_crossbow_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_crossbow_t6",
              "name": "胡萝卜弩",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_5",
          "result_name": "大麻绳",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_boots_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_boots_5_rare",
              "name": "南瓜猎人靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_5",
          "result_name": "大麻绳",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_boots_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_boots_5_rare",
              "name": "幽灵骑士之靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_5",
          "result_name": "大麻绳",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_boots_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_boots_5_rare",
              "name": "节日靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_5",
          "result_name": "大麻绳",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_boots_5_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_boots_5_epic",
              "name": "弹簧 骑手 靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_5",
          "result_name": "大麻绳",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls_fishing_rod_t5",
          "label": "工作台制作",
          "target_id": "wls_fishing_rod_t5",
          "name": "柏树钓鱼杆",
          "amount": 3
        },
        {
          "id": "wls2_mosquito_torch",
          "label": "工作台制作",
          "target_id": "wls2_mosquito_torch",
          "name": "驱蚊火炬",
          "amount": 2
        },
        {
          "id": "wls2_armor_boots_5_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_5_common",
          "name": "副警长靴子",
          "amount": 2
        },
        {
          "id": "wls2_armor_boots_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_5_uncommon",
          "name": "枪手靴子",
          "amount": 3
        },
        {
          "id": "wls2_armor_boots_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_5_rare",
          "name": "警长靴子",
          "amount": 4
        },
        {
          "id": "wls2_armor_boots_5_rare_crocodile",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_5_rare_crocodile",
          "name": "短吻鳄猎人靴",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_bow_5_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_bow_5_common",
          "name": "反曲弓",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_leather_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_leather_6",
          "name": "皮革烘干器",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_sewing_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_sewing_6",
          "name": "织布机",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_smelter_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_smelter_5",
          "name": "铸造厂",
          "amount": 20
        },
        {
          "id": "wls2_building_trap_spike_4",
          "label": "建筑制作",
          "target_id": "wls2_building_trap_spike_4",
          "name": "铁丝网",
          "amount": 5
        },
        {
          "id": "wls2_building_trap_spike_5",
          "label": "建筑制作",
          "target_id": "wls2_building_trap_spike_5",
          "name": "路桩",
          "amount": 3
        },
        {
          "id": "wls2_building_storage_stone_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_stone_5",
          "name": "石头",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_wood_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_wood_6",
          "name": "木材",
          "amount": 18
        },
        {
          "id": "wls2_building_storage_weapon_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_weapon_5",
          "name": "武器",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_armor_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_armor_5",
          "name": "护甲",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_fuel_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_fuel_5",
          "name": "燃料",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_trinket_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_trinket_5",
          "name": "饰品",
          "amount": 20
        },
        {
          "id": "wls2_weapon_xmas2020_ice_bow",
          "label": "工作台制作",
          "target_id": "wls2_weapon_xmas2020_ice_bow",
          "name": "冰雪女王弓",
          "amount": 4
        },
        {
          "id": "wls2_armor_boots_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_5_epic",
          "name": "强化的靴子",
          "amount": 6
        },
        {
          "id": "wls2_collection_clanbase_building_watchtower_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_watchtower_3",
          "name": "瞭望塔",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_powerplant_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_powerplant_3",
          "name": "发电站",
          "amount": 750
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_3",
          "name": "建设提交",
          "amount": 1000
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_4",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_4",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_5",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_5",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_collection_broken_swamp_hut",
          "label": "建设提交",
          "target_id": "wls2_collection_broken_swamp_hut",
          "name": "残破的棚屋",
          "amount": 40
        },
        {
          "id": "wls2_building_workshop_mounts_stable_4",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_mounts_stable_4",
          "name": "马厩",
          "amount": 80
        },
        {
          "id": "wls2_collection_clanbase_building_traders_2",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_2",
          "name": "商人的店铺",
          "amount": 100
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "eb2e1b85066b02cdf02e69a54219edcdd0fb69d7af6fd2849ca7c1a761d32d83"
    },
    {
      "id": "wls2_resourse_secondary_ingot_5",
      "name": "武器合金锭",
      "name_en": "Weapon alloy ingot",
      "name_source": "official_zh",
      "description": "适合用来打造完美的武器。",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "金属锭",
      "tier": 5,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_secondary_ingot_5",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_ore_3",
              "name": "铁矿石",
              "amount": 4
            },
            {
              "id": "wls2_resourse_primary_ore_5",
              "name": "镍矿石",
              "amount": 4
            },
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 4
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 1
        },
        {
          "id": "wls2_trader_ingot_5_price50",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_4",
              "name": "钢锭",
              "amount": 5
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 1
        },
        {
          "id": "wls2_halloween_event_trade_metal_t5",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_event_currency_pumpkin",
              "name": "不祥的南瓜",
              "amount": 2
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 1
        },
        {
          "id": "wls2_weapon_ws_day2024_colt_5_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_colt_5",
              "name": "周年庆左轮手枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_ws_day2024_shotgun_5_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_shotgun_5",
              "name": "周年庆散弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_colt_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_colt_t6",
              "name": "集市柯尔特左轮",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_colt_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_colt_t7",
              "name": "集市柯尔特左轮",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_6_epic_colt_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_6_epic_colt",
              "name": "集市柯尔特左轮",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_crossbow_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_crossbow_t6",
              "name": "胡萝卜弩",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_mace_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_mace_t6",
              "name": "彩绘狼牙棒",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_mallet_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_mallet_t6",
              "name": "复活节木槌",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_pepperbox_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_pepperbox_t6",
              "name": "集市胡椒盒手枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_1_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_1_t6",
              "name": "彩炮 II",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_2_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_2_t6",
              "name": "爆笑",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_3_t6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_3_t6",
              "name": "吉尔的霰弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_lunar_shotgun_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_lunar_shotgun_6_rare",
              "name": "火焰 霰弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_ws_day2023_shotgun_uncommon_5_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2023_shotgun_uncommon_5",
              "name": "节日霰弹枪 1889",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_22_weapon_range_rifle_5_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_22_weapon_range_rifle_5_rare",
              "name": "极光",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 7,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_range_halloween_23_pistol_5_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_range_halloween_23_pistol_5",
              "name": "恶灵的恐怖",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 7,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_xmas2024_shotgun_5_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_xmas2024_shotgun_5",
              "name": "暴风雪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_5",
          "result_name": "武器合金锭",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_tools_axe_5",
          "label": "工作台制作",
          "target_id": "wls2_tools_axe_5",
          "name": "合金斧",
          "amount": 1
        },
        {
          "id": "wls2_tools_pickaxe_5",
          "label": "工作台制作",
          "target_id": "wls2_tools_pickaxe_5",
          "name": "合金稿",
          "amount": 1
        },
        {
          "id": "wls2_resourse_fourfold_instruments_5",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_instruments_5",
          "name": "镀镍工具",
          "amount": 1
        },
        {
          "id": "wls2_resourse_fourfold_nails_5",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_nails_5",
          "name": "合金紧固件",
          "amount": 2
        },
        {
          "id": "wls2_resourse_fourfold_gunparts_5",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_gunparts_5",
          "name": "镀镍武器零件",
          "amount": 4
        },
        {
          "id": "wls2_weapon_melee_knife_5_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_5_common",
          "name": "刺刀",
          "amount": 1
        },
        {
          "id": "wls2_weapon_melee_sabre_5_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_sabre_5_common",
          "name": "同盟军刀",
          "amount": 2
        },
        {
          "id": "wls2_weapon_melee_knife_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_5_uncommon",
          "name": "警长匕首",
          "amount": 2
        },
        {
          "id": "wls2_weapon_melee_sabre_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_sabre_5_rare",
          "name": "军官军刀",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_revolver_5_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_5_common",
          "name": "史密斯威森-1型",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_rifle_5_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_5_common",
          "name": "温彻斯特 .45 口径步枪",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_shotgun_5_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_5_common",
          "name": "马车夫之枪",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_revolver_5_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_5_uncommon",
          "name": "史密斯威森-2 型",
          "amount": 6
        },
        {
          "id": "wls2_weapon_range_revolver_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_5_rare",
          "name": "史密斯威森-斯科菲尔德",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_rifle_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_5_rare",
          "name": "温彻斯特 M1892",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_shotgun_5_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_5_rare",
          "name": "战壕枪",
          "amount": 8
        },
        {
          "id": "wls2_building_production_well_5",
          "label": "建筑制作",
          "target_id": "wls2_building_production_well_5",
          "name": "井",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_kitchen_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_5",
          "name": "厨房",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_kitchen_5_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_5_plus",
          "name": "厨房",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_carpentry_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_carpentry_6",
          "name": "木匠桌",
          "amount": 2
        },
        {
          "id": "wls2_building_workshop_stone_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_stone_6",
          "name": "割石机",
          "amount": 2
        },
        {
          "id": "wls2_building_workshop_sewing_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_sewing_6",
          "name": "织布机",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_workbench_5",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workbench_5",
          "name": "零件工作台",
          "amount": 3
        },
        {
          "id": "wls2_building_trap_spike_4",
          "label": "建筑制作",
          "target_id": "wls2_building_trap_spike_4",
          "name": "铁丝网",
          "amount": 2
        },
        {
          "id": "wls2_building_trap_mantrap_4",
          "label": "建筑制作",
          "target_id": "wls2_building_trap_mantrap_4",
          "name": "陷阱",
          "amount": 4
        },
        {
          "id": "wls2_building_storage_chest_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_chest_5",
          "name": "大型箱子",
          "amount": 6
        },
        {
          "id": "wls2_building_storage_chest_5_new",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_chest_5_new",
          "name": "强化箱子",
          "amount": 6
        },
        {
          "id": "wls2_building_storage_weapon_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_weapon_5",
          "name": "武器",
          "amount": 2
        },
        {
          "id": "wls2_building_storage_armor_5",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_armor_5",
          "name": "护甲",
          "amount": 2
        },
        {
          "id": "wls2_building_construction_floor_5",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_floor_5",
          "name": "大理石地板",
          "amount": 2
        },
        {
          "id": "wls2_building_construction_wall_5",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_wall_5",
          "name": "大理石墙壁",
          "amount": 2
        },
        {
          "id": "wls2_building_construction_window_5",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_window_5",
          "name": "大理石窗户",
          "amount": 2
        },
        {
          "id": "wls2_building_construction_door_5",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_door_5",
          "name": "大理石门",
          "amount": 2
        },
        {
          "id": "wls2_building_storage_safe_2",
          "label": "建设提交",
          "target_id": "wls2_building_storage_safe_2",
          "name": "保险箱",
          "amount": 8
        },
        {
          "id": "wls2_building_storage_safe_3",
          "label": "建设提交",
          "target_id": "wls2_building_storage_safe_3",
          "name": "保险箱",
          "amount": 12
        },
        {
          "id": "wls2_weapon_xmas2020_rifle",
          "label": "工作台制作",
          "target_id": "wls2_weapon_xmas2020_rifle",
          "name": "礼物滑膛枪",
          "amount": 6
        },
        {
          "id": "wls2_weapon_xmas2020_saber",
          "label": "工作台制作",
          "target_id": "wls2_weapon_xmas2020_saber",
          "name": "五彩纸谢军刀",
          "amount": 3
        },
        {
          "id": "wls2_weapon_xmas2020_ice_axe",
          "label": "工作台制作",
          "target_id": "wls2_weapon_xmas2020_ice_axe",
          "name": "冰雪女王斧",
          "amount": 4
        },
        {
          "id": "wls2_weapon_melee_knife_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_5_epic",
          "name": "军用匕首",
          "amount": 2
        },
        {
          "id": "wls2_weapon_melee_sabre_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_sabre_5_epic",
          "name": "军用军刀",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_revolver_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_5_epic",
          "name": "柯尔特 M1900",
          "amount": 10
        },
        {
          "id": "wls2_weapon_range_rifle_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_5_epic",
          "name": "罗斯步枪",
          "amount": 10
        },
        {
          "id": "wls2_weapon_range_shotgun_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_5_epic",
          "name": "温彻斯特 M1897",
          "amount": 10
        },
        {
          "id": "wls2_collection_transformer",
          "label": "建设提交",
          "target_id": "wls2_collection_transformer",
          "name": "建设提交",
          "amount": 40
        },
        {
          "id": "wls2_collection_clanbase_building_hq_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_hq_3",
          "name": "总部",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_safe_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_safe_3",
          "name": "建设提交",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_food_starage_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_food_starage_3",
          "name": "建设提交",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_food_starage_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_food_starage_4",
          "name": "建设提交",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_module_powerplant_transformer_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_powerplant_transformer_3",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_gold_mine_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_gold_mine_3",
          "name": "金矿",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_3",
          "name": "建设提交",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_carts_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_carts_3",
          "name": "建设提交",
          "amount": 750
        },
        {
          "id": "wls2_collection_clanbase_building_module_train_station_depot_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_train_station_depot_3",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_bedroom_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_bedroom_3",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_resting_room_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_resting_room_3",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_building_collection_generator_1",
          "label": "建设提交",
          "target_id": "wls2_building_collection_generator_1",
          "name": "发电机",
          "amount": 20
        },
        {
          "id": "wls2_building_collection_barn_4",
          "label": "建设提交",
          "target_id": "wls2_building_collection_barn_4",
          "name": "谷仓",
          "amount": 40
        },
        {
          "id": "wls2_building_workshop_shed_chicken_5",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_chicken_5",
          "name": "鸡舍",
          "amount": 40
        },
        {
          "id": "wls2_building_workshop_shed_cow_5",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_cow_5",
          "name": "牛棚",
          "amount": 40
        },
        {
          "id": "wls2_collection_clanbase_building_module_alchemist_table_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_alchemist_table_3",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_distiller_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_distiller_3",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_luck_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_luck_3",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_ghost_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_ghost_3",
          "name": "建设提交",
          "amount": 50
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "02f434d2b75bf47a66b64ece2cf9a37c5ef600c278c3aa7897751f4d25615154"
    },
    {
      "id": "wls2_resourse_primary_hide_6",
      "name": "浓郁的皮毛",
      "name_en": "Stout hide",
      "name_source": "official_zh",
      "description": "北方野兽坚固而温暖的皮毛",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "兽皮",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_resourse_secondary_leather_6",
          "label": "工作台制作",
          "target_id": "wls2_resourse_secondary_leather_6",
          "name": "坚固的皮革",
          "amount": 3
        },
        {
          "id": "wls2_resourse_secondary_rope_6",
          "label": "工作台制作",
          "target_id": "wls2_resourse_secondary_rope_6",
          "name": "皮绳",
          "amount": 5
        },
        {
          "id": "wls2_consumable_pet_bait_wolfs_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_wolfs_6",
          "name": "狼诱饵 VI",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_bait_lynx_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_lynx_6",
          "name": "猞猁诱饵VI",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_bait_direwolfs_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_direwolfs_6",
          "name": "阿尔法狼诱饵 VI",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pet_bait_pumas_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_pumas_6",
          "name": "彪马诱饵 VI",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pet_bait_bears_6",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_6",
          "name": "熊诱饵VI",
          "amount": 2
        }
      ],
      "locations": [
        "冰川湖",
        "北方森林",
        "德纳利山"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "4d2f5d1e8e3426ba6c64409f43ed06247da0a46337590624a92cacfa1353c30c"
    },
    {
      "id": "wls2_resourse_primary_stone_6",
      "name": "六阶石材",
      "name_en": "",
      "name_source": "descriptive_fallback",
      "description": "",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "加工与特殊材料",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "bound": true,
      "legacy": false,
      "placeholder_image": true,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "德纳利山"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a"
    },
    {
      "id": "wls2_resourse_tertiary_plate_6",
      "name": "钨板",
      "name_en": "Tungsten plate",
      "name_source": "official_zh",
      "description": "在铸造厂中由钨锭制造而成",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "加工与特殊材料",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "bound": true,
      "legacy": true,
      "placeholder_image": true,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "fa408c53d428a7a307ee315d103767b4f631905e9ddf5a5ae9ddb932314b7d3a"
    },
    {
      "id": "wls2_bridge_special_ore",
      "name": "特殊矿石",
      "name_en": "Special ore",
      "name_source": "official_zh",
      "description": "一箱高质量矿石。要建造1桥架组件，需要40箱。",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "区域建设材料",
      "tier": 6,
      "rarity": "epic",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "挖掘者的巢穴"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "892014d2200403b0f2830077e7980ec8efdce7154b44d5a8c6335058515d7ae5"
    },
    {
      "id": "wls2_resourse_epic_electric_parts",
      "name": "电气工具套装",
      "name_en": "Electrical toolset",
      "name_source": "official_zh",
      "description": "包含各种电气工具和测量设备的工具包，专为电气工作而设计",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "区域建设材料",
      "tier": 6,
      "rarity": "epic",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_building_workshop_kitchen_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_6",
          "name": "厨房",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_kitchen_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_6_plus",
          "name": "厨房",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_kitchen_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_7",
          "name": "厨房",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_kitchen_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_7_plus",
          "name": "厨房",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_laboratory_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_laboratory_6",
          "name": "实验室",
          "amount": 2
        },
        {
          "id": "wls2_building_workshop_laboratory_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_laboratory_7",
          "name": "实验室",
          "amount": 2
        },
        {
          "id": "wls2_building_workshop_forge_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_6",
          "name": "熔炉",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_forge_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_6_plus",
          "name": "熔炉",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_forge_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_7",
          "name": "熔炉",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_forge_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_7_plus",
          "name": "熔炉",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_workshop_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workshop_6",
          "name": "工具工作台",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_workshop_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workshop_7",
          "name": "工具工作台",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_workbench_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workbench_6",
          "name": "零件工作台",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_workbench_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workbench_7",
          "name": "零件工作台",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_gunworkshop_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_6",
          "name": "枪械工坊",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_gunworkshop_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_6_plus",
          "name": "枪械工坊",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_gunworkshop_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_7",
          "name": "枪械工坊",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_gunworkshop_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_7_plus",
          "name": "枪械工坊",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_armorworkshop_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_6",
          "name": "护甲工坊",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_armorworkshop_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_6_plus",
          "name": "护甲工坊",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_armorworkshop_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_7",
          "name": "护甲工坊",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_armorworkshop_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_7_plus",
          "name": "护甲工坊",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_repairshop_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_6",
          "name": "维修商店",
          "amount": 2
        },
        {
          "id": "wls2_building_workshop_repairshop_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_6_plus",
          "name": "维修商店",
          "amount": 2
        },
        {
          "id": "wls2_building_workshop_repairshop_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_7",
          "name": "维修商店",
          "amount": 2
        },
        {
          "id": "wls2_building_workshop_repairshop_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_7_plus",
          "name": "维修商店",
          "amount": 2
        },
        {
          "id": "wls2_building_storage_safe_4",
          "label": "建设提交",
          "target_id": "wls2_building_storage_safe_4",
          "name": "保险箱",
          "amount": 6
        },
        {
          "id": "wls2_building_storage_safe_5",
          "label": "建设提交",
          "target_id": "wls2_building_storage_safe_5",
          "name": "保险箱",
          "amount": 8
        },
        {
          "id": "wls2_building_storage_trinket_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_trinket_6",
          "name": "饰品",
          "amount": 1
        },
        {
          "id": "wls2_building_storage_trinket_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_trinket_7",
          "name": "饰品",
          "amount": 1
        },
        {
          "id": "wls2_collection_transformer",
          "label": "建设提交",
          "target_id": "wls2_collection_transformer",
          "name": "建设提交",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_recycle_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_6",
          "name": "分解台",
          "amount": 2
        },
        {
          "id": "wls2_building_workshop_recycle_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_6_plus",
          "name": "分解台",
          "amount": 2
        },
        {
          "id": "wls2_building_workshop_recycle_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_7",
          "name": "分解台",
          "amount": 2
        },
        {
          "id": "wls2_building_workshop_recycle_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_7_plus",
          "name": "分解台",
          "amount": 2
        },
        {
          "id": "wls2_building_production_pets_6",
          "label": "建筑制作",
          "target_id": "wls2_building_production_pets_6",
          "name": "诱饵工作台",
          "amount": 2
        },
        {
          "id": "wls2_building_production_pets_7",
          "label": "建筑制作",
          "target_id": "wls2_building_production_pets_7",
          "name": "诱饵工作台",
          "amount": 2
        },
        {
          "id": "wls2_building_collection_generator_1",
          "label": "建设提交",
          "target_id": "wls2_building_collection_generator_1",
          "name": "发电机",
          "amount": 20
        },
        {
          "id": "wls2_building_collection_generator_2",
          "label": "建设提交",
          "target_id": "wls2_building_collection_generator_2",
          "name": "发电机",
          "amount": 20
        },
        {
          "id": "wls_collection_rail_bridge",
          "label": "建设提交",
          "target_id": "wls_collection_rail_bridge",
          "name": "铁路 桥",
          "amount": 10
        },
        {
          "id": "wls_collection_oil_tower",
          "label": "建设提交",
          "target_id": "wls_collection_oil_tower",
          "name": "油塔",
          "amount": 5
        },
        {
          "id": "wls_collection_oil_tower_1",
          "label": "建设提交",
          "target_id": "wls_collection_oil_tower_1",
          "name": "油塔",
          "amount": 5
        },
        {
          "id": "wls_collection_texas_player_house",
          "label": "建设提交",
          "target_id": "wls_collection_texas_player_house",
          "name": "废弃的房子",
          "amount": 5
        }
      ],
      "locations": [
        "特克拉尼卡",
        "走私犯"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "7a0e1c4a78f57bf75b9ab79e354e5e623d6c6955b24d383be14329787b48b2a1"
    },
    {
      "id": "wls2_resourse_primary_wood_6",
      "name": "老桦树",
      "name_en": "Alder",
      "name_source": "official_zh",
      "description": "难以加工，但耐用的木材",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "原木",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_resourse_primary_coal_1_alder",
          "label": "工作台制作",
          "target_id": "wls2_resourse_primary_coal_1",
          "name": "煤炭",
          "amount": 1
        },
        {
          "id": "wls2_building_construction_fence_6",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_fence_6",
          "name": "建筑制作",
          "amount": 5
        },
        {
          "id": "wls2_building_construction_fence_7",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_fence_7",
          "name": "建筑制作",
          "amount": 5
        },
        {
          "id": "wls2_resourse_secondary_plank_6",
          "label": "工作台制作",
          "target_id": "wls2_resourse_secondary_plank_6",
          "name": "桤木板",
          "amount": 3
        }
      ],
      "locations": [
        "北方森林",
        "冰川湖",
        "德纳利山"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "6a66ef7e6a8a4f1f0b9ab9ab67ac4f2208a512bf60cf6bdbef7165a5ffb81d45"
    },
    {
      "id": "wls2_resourse_epic_industrial_gunparts",
      "name": "工业零件",
      "name_en": "Industrial parts",
      "name_source": "official_zh",
      "description": "迄今为止最为复杂，品质最高的武器部件。没有精密的工具根本无法生产。",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "工业枪械零件",
      "tier": 6,
      "rarity": "epic",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_weapon_range_rifle_4_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_4_epic",
          "name": "M1903 斯普林菲尔德",
          "amount": 2
        },
        {
          "id": "wls2_weapon_range_revolver_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_5_epic",
          "name": "柯尔特 M1900",
          "amount": 3
        },
        {
          "id": "wls2_weapon_range_rifle_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_5_epic",
          "name": "罗斯步枪",
          "amount": 5
        },
        {
          "id": "wls2_weapon_range_shotgun_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_5_epic",
          "name": "温彻斯特 M1897",
          "amount": 5
        },
        {
          "id": "wls2_weapon_range_revolver_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_6_epic",
          "name": "毛瑟扫帚手枪",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_rifle_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_6_epic",
          "name": "野蛮模型99",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_shotgun_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_6_epic",
          "name": "寡妇制造者",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_revolver_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_7_epic",
          "name": "火山手枪",
          "amount": 6
        },
        {
          "id": "wls2_weapon_range_rifle_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_7_epic",
          "name": "胡奥特自动步枪",
          "amount": 10
        },
        {
          "id": "wls2_weapon_range_shotgun_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_7_epic",
          "name": "伊萨卡 模型 37",
          "amount": 10
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "81c0448a711fbf51d05f0826cbd7074592d717712df562dba43429d641c11350"
    },
    {
      "id": "wls2_resourse_fourfold_instruments_6",
      "name": "钨工具",
      "name_en": "Tungsten tools",
      "name_source": "official_zh",
      "description": "高强度钨钢工具。用于建造和升级车间。",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "工具与紧固件",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_fourfold_instruments_6",
          "label": "工作台制作",
          "ingredients": [
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
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_instruments_6",
          "result_name": "钨工具",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_building_production_bonfire_7",
          "label": "建筑制作",
          "target_id": "wls2_building_production_bonfire_7",
          "name": "篝火",
          "amount": 1
        },
        {
          "id": "wls2_building_production_well_6",
          "label": "建筑制作",
          "target_id": "wls2_building_production_well_6",
          "name": "井",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_kitchen_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_6",
          "name": "厨房",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_kitchen_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_6_plus",
          "name": "厨房",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_laboratory_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_laboratory_6",
          "name": "实验室",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_smelter_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_smelter_7",
          "name": "铸造厂",
          "amount": 5
        },
        {
          "id": "wls2_building_workshop_forge_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_7",
          "name": "熔炉",
          "amount": 6
        },
        {
          "id": "wls2_building_workshop_forge_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_7_plus",
          "name": "熔炉",
          "amount": 6
        },
        {
          "id": "wls2_building_workshop_workshop_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workshop_7",
          "name": "工具工作台",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_workbench_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workbench_6",
          "name": "零件工作台",
          "amount": 5
        },
        {
          "id": "wls2_building_workshop_gunworkshop_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_6",
          "name": "枪械工坊",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_gunworkshop_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_6_plus",
          "name": "枪械工坊",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_armorworkshop_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_6",
          "name": "护甲工坊",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_armorworkshop_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_6_plus",
          "name": "护甲工坊",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_repairshop_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_6",
          "name": "维修商店",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_repairshop_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_6_plus",
          "name": "维修商店",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_hebalist_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_hebalist_6",
          "name": "草药桌",
          "amount": 1
        },
        {
          "id": "wls2_building_storage_chest_6_new",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_chest_6_new",
          "name": "装甲板覆盖的胸部",
          "amount": 3
        },
        {
          "id": "wls2_building_storage_chest_7_new",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_chest_7_new",
          "name": "装甲板覆盖的胸部",
          "amount": 3
        },
        {
          "id": "wls2_building_storage_stone_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_stone_6",
          "name": "石头",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_wood_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_wood_6",
          "name": "木材",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_weapon_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_weapon_6",
          "name": "武器",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_armor_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_armor_6",
          "name": "护甲",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_heal_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_heal_6",
          "name": "化学",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_fuel_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_fuel_6",
          "name": "燃料",
          "amount": 5
        },
        {
          "id": "wls2_building_wagon_6",
          "label": "建设提交",
          "target_id": "wls2_building_wagon_6",
          "name": "马车",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_safe_4",
          "label": "建设提交",
          "target_id": "wls2_building_storage_safe_4",
          "name": "保险箱",
          "amount": 6
        },
        {
          "id": "wls2_backpack_cowboy_6_rare_repair",
          "label": "修理",
          "target_id": "wls2_backpack_cowboy_6_rare",
          "name": "肯洛迪克征服者背包",
          "amount": 10
        },
        {
          "id": "wls2_backpack_indian_6_rare_repair",
          "label": "修理",
          "target_id": "wls2_backpack_indian_6_rare",
          "name": "德纳利精神袋",
          "amount": 10
        },
        {
          "id": "wls2_building_storage_trinket_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_trinket_6",
          "name": "饰品",
          "amount": 5
        },
        {
          "id": "wls2_backpack_cowboy_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_cowboy_6_rare",
          "name": "肯洛迪克征服者背包",
          "amount": 18
        },
        {
          "id": "wls2_backpack_indian_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_indian_6_rare",
          "name": "德纳利精神袋",
          "amount": 18
        },
        {
          "id": "wls2_building_workshop_recycle_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_6",
          "name": "分解台",
          "amount": 6
        },
        {
          "id": "wls2_building_workshop_recycle_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_6_plus",
          "name": "分解台",
          "amount": 6
        },
        {
          "id": "wls2_collection_clanbase_building_hq_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_hq_4",
          "name": "总部",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_hall_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_hall_4",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_safe_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_safe_4",
          "name": "建设提交",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_powerplant_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_powerplant_4",
          "name": "发电站",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_module_powerplant_transformer_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_powerplant_transformer_4",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_gold_mine_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_gold_mine_4",
          "name": "金矿",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_carts_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_carts_4",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_6",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_6",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_building_production_pets_6",
          "label": "建筑制作",
          "target_id": "wls2_building_production_pets_6",
          "name": "诱饵工作台",
          "amount": 20
        },
        {
          "id": "wls2_building_production_field_6",
          "label": "建设提交",
          "target_id": "wls2_building_production_field_6",
          "name": "田地",
          "amount": 5
        },
        {
          "id": "wls2_building_collection_generator_2",
          "label": "建设提交",
          "target_id": "wls2_building_collection_generator_2",
          "name": "发电机",
          "amount": 10
        },
        {
          "id": "wls2_building_collection_barn_5",
          "label": "建设提交",
          "target_id": "wls2_building_collection_barn_5",
          "name": "谷仓",
          "amount": 10
        },
        {
          "id": "wls2_building_collection_barn_6",
          "label": "建设提交",
          "target_id": "wls2_building_collection_barn_6",
          "name": "谷仓",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_shed_chicken_6",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_chicken_6",
          "name": "鸡舍",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_shed_cow_6",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_cow_6",
          "name": "牛棚",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_mounts_stable_5",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_mounts_stable_5",
          "name": "马厩",
          "amount": 20
        },
        {
          "id": "wls_collection_rail_bridge",
          "label": "建设提交",
          "target_id": "wls_collection_rail_bridge",
          "name": "铁路 桥",
          "amount": 10
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "37b99e4a98a0c637b21f8ec4178e1844475dec75480813e5eda5cd02f1ceac2c"
    },
    {
      "id": "wls2_resourse_fourfold_nails_6",
      "name": "钨紧固件",
      "name_en": "Tungsten fasteners",
      "name_source": "official_zh",
      "description": "多功能手工和建筑用紧固件套装",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "工具与紧固件",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_fourfold_nails_6",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 2
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 1
        },
        {
          "id": "wls2_armor_head_ws_day2024_6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_head_ws_day2024_6",
              "name": "缀满星星的帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_ws_day2024_colt_6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_colt_6",
              "name": "周年庆左轮手枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_ws_day2024_shotgun_6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_shotgun_6",
              "name": "周年庆散弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_body_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_body_6_epic",
              "name": "圣诞警长外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_body_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_body_6_epic",
              "name": "炽热骑手衬衫",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_boots_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_boots_6_epic",
              "name": "圣诞警长靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_boots_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_boots_6_epic",
              "name": "炽热骑手靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_legs_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_legs_6_epic",
              "name": "圣诞警长裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_legs_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_legs_6_epic",
              "name": "炽热骑手裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_7_epic_colt_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_7_epic_colt",
              "name": "集市柯尔特左轮",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_pepperbox_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_pepperbox_t7",
              "name": "集市胡椒盒手枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_1_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_1_t7",
              "name": "彩炮 II",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_2_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_2_t7",
              "name": "爆笑",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_3_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_3_t7",
              "name": "吉尔的霰弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_lunar_shotgun_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_lunar_shotgun_7_rare",
              "name": "火焰 霰弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_battlepass3_armor_head_7_rare",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_battlepass3_armor_head_7_rare",
              "name": "小矮妖帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_battlepass1_armor_head_7_uncommon_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_battlepass1_armor_head_7_uncommon",
              "name": "旅者帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_body_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_body_6_rare",
              "name": "南瓜猎人外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_legs_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_legs_6_rare",
              "name": "南瓜猎人裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_head_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_head_6_rare",
              "name": "南瓜猎人面具",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_23_weapon_range_rifle_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_23_weapon_range_rifle_7_epic",
              "name": "极光",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_head_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_head_6_epic",
              "name": "圣诞警长帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_head_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_head_6_epic",
              "name": "炽热 骑手 帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_range_halloween_23_pistol_7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_range_halloween_23_pistol_7",
              "name": "恶灵的恐怖",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 7,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_head_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_head_7_rare",
              "name": "幻影骑士帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_body_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_body_7_rare",
              "name": "幽灵骑士的外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_legs_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_legs_7_rare",
              "name": "幽灵骑士的裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_boots_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_boots_6_rare",
              "name": "幽灵骑士之靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_xmas2024_head_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_head_7_rare",
              "name": "鹿角头带",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_xmas2024_body_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_body_7_rare",
              "name": "奶奶的复仇",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_xmas2024_legs_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_legs_7_rare",
              "name": "节日长裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_boots_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_boots_6_rare",
              "name": "节日靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_xmas2024_shotgun_6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_xmas2024_shotgun_6",
              "name": "暴风雪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_st_patrick_jacket_t6_2026_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_st_patrick_jacket_t6_2026",
              "name": "爱尔兰运气夹克",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_head_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_head_6_epic",
              "name": "弹簧 骑手 帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_body_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_body_6_epic",
              "name": "春季 骑手 外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_legs_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_legs_6_epic",
              "name": "春季 骑手 裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_boots_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_boots_6_epic",
              "name": "弹簧 骑手 靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_head_easter_6_new_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_head_easter_6_new",
              "name": "蛋猎人帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_6",
          "result_name": "钨紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_building_production_well_6",
          "label": "建筑制作",
          "target_id": "wls2_building_production_well_6",
          "name": "井",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_laboratory_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_laboratory_6",
          "name": "实验室",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_leather_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_leather_7",
          "name": "皮革烘干器",
          "amount": 3
        },
        {
          "id": "wls2_building_storage_chest_6_new",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_chest_6_new",
          "name": "装甲板覆盖的胸部",
          "amount": 3
        },
        {
          "id": "wls2_building_storage_chest_7_new",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_chest_7_new",
          "name": "装甲板覆盖的胸部",
          "amount": 3
        },
        {
          "id": "wls2_building_storage_metal_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_metal_6",
          "name": "金属",
          "amount": 1
        },
        {
          "id": "wls2_building_storage_food_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_food_6",
          "name": "食物",
          "amount": 10
        },
        {
          "id": "wls2_building_storage_leather_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_leather_6",
          "name": "布料",
          "amount": 10
        },
        {
          "id": "wls2_building_construction_floor_6",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_floor_6",
          "name": "加固大理石地板",
          "amount": 1
        },
        {
          "id": "wls2_building_construction_wall_6",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_wall_6",
          "name": "加固大理石墙",
          "amount": 1
        },
        {
          "id": "wls2_building_construction_window_6",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_window_6",
          "name": "加固大理石窗户",
          "amount": 2
        },
        {
          "id": "wls2_building_construction_door_6",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_door_6",
          "name": "加固大理石门",
          "amount": 3
        },
        {
          "id": "wls2_building_construction_fence_6",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_fence_6",
          "name": "建筑制作",
          "amount": 1
        },
        {
          "id": "wls2_building_construction_fence_7",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_fence_7",
          "name": "建筑制作",
          "amount": 1
        },
        {
          "id": "wls2_building_wagon_6",
          "label": "建设提交",
          "target_id": "wls2_building_wagon_6",
          "name": "马车",
          "amount": 10
        },
        {
          "id": "wls2_building_storage_safe_4",
          "label": "建设提交",
          "target_id": "wls2_building_storage_safe_4",
          "name": "保险箱",
          "amount": 6
        },
        {
          "id": "wls2_building_storage_safe_5",
          "label": "建设提交",
          "target_id": "wls2_building_storage_safe_5",
          "name": "保险箱",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_revolver_6_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_6_common",
          "name": "布朗宁No.1",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_rifle_6_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_6_common",
          "name": "温彻斯特画廊枪",
          "amount": 2
        },
        {
          "id": "wls2_weapon_range_shotgun_6_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_6_common",
          "name": "Rem M10 暴乱",
          "amount": 2
        },
        {
          "id": "wls2_weapon_range_revolver_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_6_uncommon",
          "name": "博查德自动手枪",
          "amount": 6
        },
        {
          "id": "wls2_weapon_range_rifle_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_6_uncommon",
          "name": "李-恩菲尔德",
          "amount": 3
        },
        {
          "id": "wls2_weapon_range_shotgun_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_6_uncommon",
          "name": "雷明顿打发",
          "amount": 3
        },
        {
          "id": "wls2_weapon_range_revolver_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_6_rare",
          "name": "巴拉贝勒姆",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_rifle_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_6_rare",
          "name": "克拉格-约尔根森",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_shotgun_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_6_rare",
          "name": "座头鲸",
          "amount": 4
        },
        {
          "id": "wls2_armor_boots_6_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_6_common",
          "name": "流浪者靴子",
          "amount": 1
        },
        {
          "id": "wls2_armor_body_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_6_uncommon",
          "name": "前哨人夹克",
          "amount": 1
        },
        {
          "id": "wls2_armor_legs_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_6_uncommon",
          "name": "前线人裤子",
          "amount": 1
        },
        {
          "id": "wls2_armor_boots_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_6_uncommon",
          "name": "前哨人靴子",
          "amount": 2
        },
        {
          "id": "wls2_armor_head_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_6_rare",
          "name": "肯洛迪克征服者帽子",
          "amount": 3
        },
        {
          "id": "wls2_armor_body_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_6_rare",
          "name": "肯洛迪克征服者夹克",
          "amount": 3
        },
        {
          "id": "wls2_armor_legs_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_6_rare",
          "name": "肯洛迪克征服者裤子",
          "amount": 3
        },
        {
          "id": "wls2_armor_boots_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_6_rare",
          "name": "肯洛迪克征服者靴子",
          "amount": 3
        },
        {
          "id": "wls2_armor_head_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_6_epic",
          "name": "极地传奇帽",
          "amount": 4
        },
        {
          "id": "wls2_armor_body_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_6_epic",
          "name": "极地传奇长大衣",
          "amount": 4
        },
        {
          "id": "wls2_armor_legs_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_6_epic",
          "name": "极地传奇裤子",
          "amount": 4
        },
        {
          "id": "wls2_armor_boots_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_6_epic",
          "name": "极地传奇靴子",
          "amount": 5
        },
        {
          "id": "wls2_collection_clanbase_building_hq_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_hq_4",
          "name": "总部",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_hall_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_hall_4",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_safe_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_safe_4",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_safe_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_safe_5",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_saloon_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_saloon_4",
          "name": "酒吧",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_watchtower_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_watchtower_4",
          "name": "瞭望塔",
          "amount": 150
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_food_starage_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_food_starage_4",
          "name": "建设提交",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_bar_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_bar_4",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_powerplant_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_powerplant_4",
          "name": "发电站",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_module_powerplant_transformer_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_powerplant_transformer_4",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_gold_mine_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_gold_mine_4",
          "name": "金矿",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_4",
          "name": "建设提交",
          "amount": 250
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_carts_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_carts_4",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_train_station_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_train_station_4",
          "name": "铁路车站",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_train_station_depot_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_train_station_depot_4",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_barrack_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_barrack_4",
          "name": "工棚",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_bedroom_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_bedroom_4",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_resting_room_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_resting_room_4",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_6",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_6",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_building_production_pets_6",
          "label": "建筑制作",
          "target_id": "wls2_building_production_pets_6",
          "name": "诱饵工作台",
          "amount": 20
        },
        {
          "id": "wls2_building_production_field_6",
          "label": "建设提交",
          "target_id": "wls2_building_production_field_6",
          "name": "田地",
          "amount": 10
        },
        {
          "id": "wls2_building_collection_generator_2",
          "label": "建设提交",
          "target_id": "wls2_building_collection_generator_2",
          "name": "发电机",
          "amount": 10
        },
        {
          "id": "wls2_building_collection_barn_5",
          "label": "建设提交",
          "target_id": "wls2_building_collection_barn_5",
          "name": "谷仓",
          "amount": 15
        },
        {
          "id": "wls2_building_collection_barn_6",
          "label": "建设提交",
          "target_id": "wls2_building_collection_barn_6",
          "name": "谷仓",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_shed_chicken_6",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_chicken_6",
          "name": "鸡舍",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_shed_chicken_7",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_chicken_7",
          "name": "鸡舍",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_shed_cow_6",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_cow_6",
          "name": "牛棚",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_shed_cow_7",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_cow_7",
          "name": "牛棚",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_mounts_stable_5",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_mounts_stable_5",
          "name": "马厩",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_product_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_product_6",
          "name": "调味品",
          "amount": 10
        },
        {
          "id": "wls2_collection_broken_alaska_hut",
          "label": "建设提交",
          "target_id": "wls2_collection_broken_alaska_hut",
          "name": "淘金者的食品储藏室",
          "amount": 20
        },
        {
          "id": "wls2_mount_equipment_saddle_rare_6",
          "label": "工作台制作",
          "target_id": "wls2_mount_equipment_saddle_rare_6",
          "name": "装备马鞍",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_traders_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_3",
          "name": "商人的店铺",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_traders_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_4",
          "name": "商人的店铺",
          "amount": 120
        },
        {
          "id": "wls2_collection_clanbase_building_traders_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_5",
          "name": "商人的店铺",
          "amount": 460
        },
        {
          "id": "wls2_collection_clanbase_building_laboratory_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_laboratory_4",
          "name": "实验室",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_alchemist_table_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_alchemist_table_4",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_distiller_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_distiller_4",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_pagan_place_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_pagan_place_4",
          "name": "力量之地",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_luck_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_luck_4",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_ghost_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_ghost_4",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls_collection_rail_bridge",
          "label": "建设提交",
          "target_id": "wls_collection_rail_bridge",
          "name": "铁路 桥",
          "amount": 10
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "75733ce74ad74c5f2e2bb2e74d9c8cdee89972ed633e772694e8a660d3f91deb"
    },
    {
      "id": "wls2_resourse_secondary_cloth_6",
      "name": "皮毛",
      "name_en": "Pelt",
      "name_source": "official_zh",
      "description": "豪华而温暖的北极鼬材料",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "布料",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_secondary_cloth_6",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_fiber_6",
              "name": "黄鼠狼毛",
              "amount": 3
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_6",
          "result_name": "皮毛",
          "amount": 1
        },
        {
          "id": "wls2_armor_head_easter_2_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_head_easter_2_t7",
              "name": "复活节牛仔帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_6",
          "result_name": "皮毛",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_battlepass3_armor_head_6_rare",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_battlepass3_armor_head_6_rare",
              "name": "小矮妖帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_6",
          "result_name": "皮毛",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_battlepass1_armor_head_6_uncommon_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_battlepass1_armor_head_6_uncommon",
              "name": "旅者帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_6",
          "result_name": "皮毛",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_head_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_head_6_rare",
              "name": "南瓜猎人面具",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_6",
          "result_name": "皮毛",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_head_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_head_6_epic",
              "name": "圣诞警长帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_6",
          "result_name": "皮毛",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_head_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_head_6_epic",
              "name": "炽热 骑手 帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_6",
          "result_name": "皮毛",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_head_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_head_6_rare",
              "name": "幻影骑士帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_6",
          "result_name": "皮毛",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_body_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_body_7_rare",
              "name": "幽灵骑士的外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_6",
          "result_name": "皮毛",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_legs_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_legs_7_rare",
              "name": "幽灵骑士的裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_6",
          "result_name": "皮毛",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_head_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_head_6_rare",
              "name": "鹿角头带",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_6",
          "result_name": "皮毛",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_head_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_head_6_epic",
              "name": "弹簧 骑手 帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_6",
          "result_name": "皮毛",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_building_workshop_gunworkshop_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_6",
          "name": "枪械工坊",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_gunworkshop_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_6_plus",
          "name": "枪械工坊",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_armorworkshop_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_6",
          "name": "护甲工坊",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_armorworkshop_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_6_plus",
          "name": "护甲工坊",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_repairshop_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_6",
          "name": "维修商店",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_repairshop_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_6_plus",
          "name": "维修商店",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_food_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_food_6",
          "name": "食物",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_heal_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_heal_6",
          "name": "化学",
          "amount": 20
        },
        {
          "id": "wls2_building_wagon_6",
          "label": "建设提交",
          "target_id": "wls2_building_wagon_6",
          "name": "马车",
          "amount": 100
        },
        {
          "id": "wls2_backpack_cowboy_6_rare_repair",
          "label": "修理",
          "target_id": "wls2_backpack_cowboy_6_rare",
          "name": "肯洛迪克征服者背包",
          "amount": 25
        },
        {
          "id": "wls2_backpack_indian_6_rare_repair",
          "label": "修理",
          "target_id": "wls2_backpack_indian_6_rare",
          "name": "德纳利精神袋",
          "amount": 25
        },
        {
          "id": "wls2_backpack_cowboy_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_cowboy_6_rare",
          "name": "肯洛迪克征服者背包",
          "amount": 50
        },
        {
          "id": "wls2_backpack_indian_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_indian_6_rare",
          "name": "德纳利精神袋",
          "amount": 50
        },
        {
          "id": "wls2_armor_head_6_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_6_common",
          "name": "漫游者帽子",
          "amount": 2
        },
        {
          "id": "wls2_armor_body_6_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_6_common",
          "name": "流浪者夹克",
          "amount": 2
        },
        {
          "id": "wls2_armor_legs_6_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_6_common",
          "name": "漫游者裤子",
          "amount": 2
        },
        {
          "id": "wls2_armor_head_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_6_uncommon",
          "name": "前哨人帽子",
          "amount": 3
        },
        {
          "id": "wls2_armor_body_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_6_uncommon",
          "name": "前哨人夹克",
          "amount": 3
        },
        {
          "id": "wls2_armor_legs_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_6_uncommon",
          "name": "前线人裤子",
          "amount": 3
        },
        {
          "id": "wls2_armor_head_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_6_rare",
          "name": "肯洛迪克征服者帽子",
          "amount": 4
        },
        {
          "id": "wls2_armor_body_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_6_rare",
          "name": "肯洛迪克征服者夹克",
          "amount": 10
        },
        {
          "id": "wls2_armor_legs_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_6_rare",
          "name": "肯洛迪克征服者裤子",
          "amount": 15
        },
        {
          "id": "wls2_armor_head_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_6_epic",
          "name": "极地传奇帽",
          "amount": 4
        },
        {
          "id": "wls2_armor_body_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_6_epic",
          "name": "极地传奇长大衣",
          "amount": 20
        },
        {
          "id": "wls2_armor_legs_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_6_epic",
          "name": "极地传奇裤子",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_recycle_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_6",
          "name": "分解台",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_recycle_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_6_plus",
          "name": "分解台",
          "amount": 15
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_hall_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_hall_4",
          "name": "建设提交",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_saloon_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_saloon_4",
          "name": "酒吧",
          "amount": 150
        },
        {
          "id": "wls2_collection_clanbase_building_watchtower_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_watchtower_4",
          "name": "瞭望塔",
          "amount": 2500
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_food_starage_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_food_starage_4",
          "name": "建设提交",
          "amount": 150
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_bar_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_bar_4",
          "name": "建设提交",
          "amount": 150
        },
        {
          "id": "wls2_collection_clanbase_building_train_station_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_train_station_4",
          "name": "铁路车站",
          "amount": 1500
        },
        {
          "id": "wls2_collection_clanbase_building_barrack_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_barrack_4",
          "name": "工棚",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_bedroom_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_bedroom_4",
          "name": "建设提交",
          "amount": 1000
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_6",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_6",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_building_production_pets_6",
          "label": "建筑制作",
          "target_id": "wls2_building_production_pets_6",
          "name": "诱饵工作台",
          "amount": 20
        },
        {
          "id": "wls2_building_collection_barn_5",
          "label": "建设提交",
          "target_id": "wls2_building_collection_barn_5",
          "name": "谷仓",
          "amount": 60
        },
        {
          "id": "wls2_building_collection_barn_6",
          "label": "建设提交",
          "target_id": "wls2_building_collection_barn_6",
          "name": "谷仓",
          "amount": 60
        },
        {
          "id": "wls2_building_workshop_mounts_stable_5",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_mounts_stable_5",
          "name": "马厩",
          "amount": 80
        },
        {
          "id": "wls2_building_storage_product_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_product_6",
          "name": "调味品",
          "amount": 10
        },
        {
          "id": "wls2_collection_broken_alaska_hut",
          "label": "建设提交",
          "target_id": "wls2_collection_broken_alaska_hut",
          "name": "淘金者的食品储藏室",
          "amount": 30
        },
        {
          "id": "wls2_mount_equipment_saddle_uncommon_6",
          "label": "工作台制作",
          "target_id": "wls2_mount_equipment_saddle_uncommon_6",
          "name": "麦克莱伦鞍座",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_laboratory_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_laboratory_4",
          "name": "实验室",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_module_alchemist_table_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_alchemist_table_4",
          "name": "建设提交",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_pagan_place_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_pagan_place_4",
          "name": "力量之地",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_ghost_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_ghost_4",
          "name": "建设提交",
          "amount": 1000
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "704389358437900853517062ca9eb52296ce496d0b61c64d3dbc5e62e6a570fc"
    },
    {
      "id": "wls2_resourse_secondary_plank_6",
      "name": "桤木板",
      "name_en": "Alder board",
      "name_source": "official_zh",
      "description": "在制作和建筑中都使用的关键材料",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "木板",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_secondary_plank_6",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_wood_6",
              "name": "老桦树",
              "amount": 3
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_6",
          "result_name": "桤木板",
          "amount": 1
        },
        {
          "id": "wls2_weapon_ws_day2024_shotgun_6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_shotgun_6",
              "name": "周年庆散弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_6",
          "result_name": "桤木板",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_ws_day2024_shotgun_7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_shotgun_7",
              "name": "周年庆散弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_6",
          "result_name": "桤木板",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_bow_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_bow_t7",
              "name": "胡咧咧弓",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_6",
          "result_name": "桤木板",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_crossbow_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_crossbow_t7",
              "name": "胡萝卜弩",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_6",
          "result_name": "桤木板",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_mace_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_mace_t7",
              "name": "彩绘狼牙棒",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_6",
          "result_name": "桤木板",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_mallet_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_mallet_t7",
              "name": "复活节木槌",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_6",
          "result_name": "桤木板",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_1_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_1_t7",
              "name": "彩炮 II",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_6",
          "result_name": "桤木板",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_2_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_2_t7",
              "name": "爆笑",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_6",
          "result_name": "桤木板",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_3_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_3_t7",
              "name": "吉尔的霰弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_6",
          "result_name": "桤木板",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_23_weapon_range_rifle_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_23_weapon_range_rifle_6_epic",
              "name": "极光",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_6",
          "result_name": "桤木板",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_tools_axe_6",
          "label": "工作台制作",
          "target_id": "wls2_tools_axe_6",
          "name": "钨合金斧头",
          "amount": 1
        },
        {
          "id": "wls2_tools_pickaxe_6",
          "label": "工作台制作",
          "target_id": "wls2_tools_pickaxe_6",
          "name": "钨合金镐",
          "amount": 1
        },
        {
          "id": "wls_fishing_rod_t6",
          "label": "工作台制作",
          "target_id": "wls_fishing_rod_t6",
          "name": "桤木钓竿",
          "amount": 1
        },
        {
          "id": "wls2_building_production_well_6",
          "label": "建筑制作",
          "target_id": "wls2_building_production_well_6",
          "name": "井",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_laboratory_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_laboratory_6",
          "name": "实验室",
          "amount": 5
        },
        {
          "id": "wls2_building_workshop_carpentry_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_carpentry_7",
          "name": "木匠桌",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_stone_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_stone_6",
          "name": "割石机",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_leather_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_leather_6",
          "name": "皮革烘干器",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_sewing_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_sewing_6",
          "name": "织布机",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_gunworkshop_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_6",
          "name": "枪械工坊",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_gunworkshop_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_6_plus",
          "name": "枪械工坊",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_armorworkshop_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_6",
          "name": "护甲工坊",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_armorworkshop_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_6_plus",
          "name": "护甲工坊",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_repairshop_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_6",
          "name": "维修商店",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_repairshop_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_6_plus",
          "name": "维修商店",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_hebalist_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_hebalist_6",
          "name": "草药桌",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_chest_6_new",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_chest_6_new",
          "name": "装甲板覆盖的胸部",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_chest_7_new",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_chest_7_new",
          "name": "装甲板覆盖的胸部",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_metal_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_metal_6",
          "name": "金属",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_stone_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_stone_6",
          "name": "石头",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_wood_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_wood_6",
          "name": "木材",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_food_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_food_6",
          "name": "食物",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_weapon_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_weapon_6",
          "name": "武器",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_armor_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_armor_6",
          "name": "护甲",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_heal_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_heal_6",
          "name": "化学",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_leather_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_leather_6",
          "name": "布料",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_fuel_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_fuel_6",
          "name": "燃料",
          "amount": 20
        },
        {
          "id": "wls2_building_construction_floor_6",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_floor_6",
          "name": "加固大理石地板",
          "amount": 12
        },
        {
          "id": "wls2_building_construction_wall_6",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_wall_6",
          "name": "加固大理石墙",
          "amount": 12
        },
        {
          "id": "wls2_building_construction_window_6",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_window_6",
          "name": "加固大理石窗户",
          "amount": 12
        },
        {
          "id": "wls2_building_construction_door_6",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_door_6",
          "name": "加固大理石门",
          "amount": 12
        },
        {
          "id": "wls2_building_construction_fence_6",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_fence_6",
          "name": "建筑制作",
          "amount": 2
        },
        {
          "id": "wls2_building_construction_fence_7",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_fence_7",
          "name": "建筑制作",
          "amount": 2
        },
        {
          "id": "wls2_building_wagon_6",
          "label": "建设提交",
          "target_id": "wls2_building_wagon_6",
          "name": "马车",
          "amount": 20
        },
        {
          "id": "wls2_resourse_fourfold_instruments_6",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_instruments_6",
          "name": "钨工具",
          "amount": 2
        },
        {
          "id": "wls2_resourse_fourfold_gunparts_6",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_gunparts_6",
          "name": "钨枪部件",
          "amount": 1
        },
        {
          "id": "wls2_weapon_range_bow_6_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_bow_6_common",
          "name": "力量 弓",
          "amount": 3
        },
        {
          "id": "wls2_weapon_range_rifle_6_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_6_common",
          "name": "温彻斯特画廊枪",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_shotgun_6_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_6_common",
          "name": "Rem M10 暴乱",
          "amount": 2
        },
        {
          "id": "wls2_weapon_range_rifle_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_6_uncommon",
          "name": "李-恩菲尔德",
          "amount": 6
        },
        {
          "id": "wls2_weapon_range_shotgun_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_6_uncommon",
          "name": "雷明顿打发",
          "amount": 3
        },
        {
          "id": "wls2_weapon_range_rifle_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_6_rare",
          "name": "克拉格-约尔根森",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_shotgun_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_6_rare",
          "name": "座头鲸",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_rifle_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_6_epic",
          "name": "野蛮模型99",
          "amount": 10
        },
        {
          "id": "wls2_weapon_range_shotgun_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_6_epic",
          "name": "寡妇制造者",
          "amount": 5
        },
        {
          "id": "wls2_building_workshop_recycle_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_6",
          "name": "分解台",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_recycle_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_6_plus",
          "name": "分解台",
          "amount": 30
        },
        {
          "id": "wls2_collection_clanbase_building_hq_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_hq_4",
          "name": "总部",
          "amount": 3000
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_hall_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_hall_4",
          "name": "建设提交",
          "amount": 750
        },
        {
          "id": "wls2_collection_clanbase_building_saloon_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_saloon_4",
          "name": "酒吧",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_watchtower_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_watchtower_4",
          "name": "瞭望塔",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_food_starage_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_food_starage_4",
          "name": "建设提交",
          "amount": 250
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_bar_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_bar_4",
          "name": "建设提交",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_powerplant_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_powerplant_4",
          "name": "发电站",
          "amount": 3000
        },
        {
          "id": "wls2_collection_clanbase_building_module_powerplant_transformer_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_powerplant_transformer_4",
          "name": "建设提交",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_gold_mine_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_gold_mine_4",
          "name": "金矿",
          "amount": 5000
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_4",
          "name": "建设提交",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_carts_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_carts_4",
          "name": "建设提交",
          "amount": 2000
        },
        {
          "id": "wls2_collection_clanbase_building_train_station_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_train_station_4",
          "name": "铁路车站",
          "amount": 1500
        },
        {
          "id": "wls2_collection_clanbase_building_module_train_station_depot_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_train_station_depot_4",
          "name": "建设提交",
          "amount": 1500
        },
        {
          "id": "wls2_collection_clanbase_building_barrack_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_barrack_4",
          "name": "工棚",
          "amount": 750
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_bedroom_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_bedroom_4",
          "name": "建设提交",
          "amount": 400
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_resting_room_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_resting_room_4",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_building_production_field_6",
          "label": "建设提交",
          "target_id": "wls2_building_production_field_6",
          "name": "田地",
          "amount": 20
        },
        {
          "id": "wls2_building_collection_barn_5",
          "label": "建设提交",
          "target_id": "wls2_building_collection_barn_5",
          "name": "谷仓",
          "amount": 20
        },
        {
          "id": "wls2_building_collection_barn_6",
          "label": "建设提交",
          "target_id": "wls2_building_collection_barn_6",
          "name": "谷仓",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_shed_chicken_6",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_chicken_6",
          "name": "鸡舍",
          "amount": 40
        },
        {
          "id": "wls2_building_workshop_shed_cow_6",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_cow_6",
          "name": "牛棚",
          "amount": 40
        },
        {
          "id": "wls2_building_workshop_mounts_stable_5",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_mounts_stable_5",
          "name": "马厩",
          "amount": 40
        },
        {
          "id": "wls2_building_storage_product_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_product_6",
          "name": "调味品",
          "amount": 20
        },
        {
          "id": "wls2_weapon_melee_spear_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_spear_6_rare",
          "name": "坚固的鱼叉",
          "amount": 4
        },
        {
          "id": "wls2_collection_broken_alaska_hut",
          "label": "建设提交",
          "target_id": "wls2_collection_broken_alaska_hut",
          "name": "淘金者的食品储藏室",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_traders_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_3",
          "name": "商人的店铺",
          "amount": 150
        },
        {
          "id": "wls2_collection_clanbase_building_traders_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_4",
          "name": "商人的店铺",
          "amount": 110
        },
        {
          "id": "wls2_collection_clanbase_building_laboratory_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_laboratory_4",
          "name": "实验室",
          "amount": 750
        },
        {
          "id": "wls2_collection_clanbase_building_module_alchemist_table_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_alchemist_table_4",
          "name": "建设提交",
          "amount": 400
        },
        {
          "id": "wls2_collection_clanbase_building_module_distiller_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_distiller_4",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_pagan_place_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_pagan_place_4",
          "name": "力量之地",
          "amount": 750
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_luck_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_luck_4",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_ghost_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_ghost_4",
          "name": "建设提交",
          "amount": 400
        },
        {
          "id": "wls_collection_rail_bridge",
          "label": "建设提交",
          "target_id": "wls_collection_rail_bridge",
          "name": "铁路 桥",
          "amount": 60
        },
        {
          "id": "wls_collection_oil_tower",
          "label": "建设提交",
          "target_id": "wls_collection_oil_tower",
          "name": "油塔",
          "amount": 80
        },
        {
          "id": "wls_collection_oil_tower_1",
          "label": "建设提交",
          "target_id": "wls_collection_oil_tower_1",
          "name": "油塔",
          "amount": 80
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "4d5240bb10b4b34d2ce14f9d89125469a517ea70368fe2004de8342823e13f65"
    },
    {
      "id": "wls2_resourse_fourfold_gunparts_6",
      "name": "钨枪部件",
      "name_en": "Tungsten gunparts",
      "name_source": "official_zh",
      "description": "制作一级火器所需部件",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "枪械零件",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_fourfold_gunparts_6",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_6",
              "name": "桤木板",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_leather_6",
              "name": "坚固的皮革",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_miscellaneous_gunpowder_1",
              "name": "火药",
              "amount": 20
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_6",
          "result_name": "钨枪部件",
          "amount": 1
        },
        {
          "id": "wls2_weapon_ws_day2024_colt_6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_colt_6",
              "name": "周年庆左轮手枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_6",
          "result_name": "钨枪部件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_ws_day2024_shotgun_6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_shotgun_6",
              "name": "周年庆散弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_6",
          "result_name": "钨枪部件",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_7_epic_colt_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_7_epic_colt",
              "name": "集市柯尔特左轮",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_6",
          "result_name": "钨枪部件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_pepperbox_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_pepperbox_t7",
              "name": "集市胡椒盒手枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_6",
          "result_name": "钨枪部件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_1_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_1_t7",
              "name": "彩炮 II",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_6",
          "result_name": "钨枪部件",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_2_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_2_t7",
              "name": "爆笑",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_6",
          "result_name": "钨枪部件",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_3_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_3_t7",
              "name": "吉尔的霰弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_6",
          "result_name": "钨枪部件",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_lunar_shotgun_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_lunar_shotgun_7_rare",
              "name": "火焰 霰弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_6",
          "result_name": "钨枪部件",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_23_weapon_range_rifle_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_23_weapon_range_rifle_6_epic",
              "name": "极光",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_6",
          "result_name": "钨枪部件",
          "amount": 7,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_range_halloween_23_pistol_6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_range_halloween_23_pistol_6",
              "name": "恶灵的恐怖",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_6",
          "result_name": "钨枪部件",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_xmas2024_shotgun_6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_xmas2024_shotgun_6",
              "name": "暴风雪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_6",
          "result_name": "钨枪部件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_weapon_range_revolver_6_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_6_common",
          "name": "布朗宁No.1",
          "amount": 1
        },
        {
          "id": "wls2_weapon_range_rifle_6_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_6_common",
          "name": "温彻斯特画廊枪",
          "amount": 2
        },
        {
          "id": "wls2_weapon_range_shotgun_6_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_6_common",
          "name": "Rem M10 暴乱",
          "amount": 2
        },
        {
          "id": "wls2_weapon_range_revolver_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_6_uncommon",
          "name": "博查德自动手枪",
          "amount": 3
        },
        {
          "id": "wls2_weapon_range_rifle_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_6_uncommon",
          "name": "李-恩菲尔德",
          "amount": 6
        },
        {
          "id": "wls2_weapon_range_shotgun_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_6_uncommon",
          "name": "雷明顿打发",
          "amount": 6
        },
        {
          "id": "wls2_weapon_range_revolver_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_6_rare",
          "name": "巴拉贝勒姆",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_rifle_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_6_rare",
          "name": "克拉格-约尔根森",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_shotgun_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_6_rare",
          "name": "座头鲸",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_revolver_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_6_epic",
          "name": "毛瑟扫帚手枪",
          "amount": 3
        },
        {
          "id": "wls2_weapon_range_rifle_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_6_epic",
          "name": "野蛮模型99",
          "amount": 5
        },
        {
          "id": "wls2_weapon_range_shotgun_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_6_epic",
          "name": "寡妇制造者",
          "amount": 5
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "90a9e3f3c95f531a6e99a997852c2ec6b2fb8ac6ad636183e6837f5ea00d3cae"
    },
    {
      "id": "wls2_resourse_epic_rubber",
      "name": "橡胶",
      "name_en": "Rubber",
      "name_source": "official_zh",
      "description": "稠密而柔韧的防水材料，是现代工业的伟大成就！",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "橡胶",
      "tier": 6,
      "rarity": "epic",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_armor_body_4_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_4_epic",
          "name": "橡胶外套",
          "amount": 2
        },
        {
          "id": "wls2_armor_boots_4_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_4_epic",
          "name": "橡胶靴子",
          "amount": 1
        },
        {
          "id": "wls2_armor_head_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_5_epic",
          "name": "强化的帽子",
          "amount": 3
        },
        {
          "id": "wls2_armor_body_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_5_epic",
          "name": "强化的外套",
          "amount": 5
        },
        {
          "id": "wls2_armor_legs_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_5_epic",
          "name": "强化的裤子",
          "amount": 5
        },
        {
          "id": "wls2_armor_boots_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_5_epic",
          "name": "强化的靴子",
          "amount": 4
        },
        {
          "id": "wls2_weapon_melee_sabre_4_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_sabre_4_epic",
          "name": "警用军刀",
          "amount": 2
        },
        {
          "id": "wls2_weapon_melee_knife_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_5_epic",
          "name": "军用匕首",
          "amount": 2
        },
        {
          "id": "wls2_weapon_melee_sabre_5_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_sabre_5_epic",
          "name": "军用军刀",
          "amount": 3
        },
        {
          "id": "wls2_weapon_melee_knife_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_6_epic",
          "name": "狗拉雪橇者的刀",
          "amount": 3
        },
        {
          "id": "wls2_armor_head_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_6_epic",
          "name": "极地传奇帽",
          "amount": 5
        },
        {
          "id": "wls2_armor_body_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_6_epic",
          "name": "极地传奇长大衣",
          "amount": 7
        },
        {
          "id": "wls2_armor_legs_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_6_epic",
          "name": "极地传奇裤子",
          "amount": 7
        },
        {
          "id": "wls2_armor_boots_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_6_epic",
          "name": "极地传奇靴子",
          "amount": 6
        },
        {
          "id": "wls2_armor_head_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_7_epic",
          "name": "里约布拉沃传奇帽",
          "amount": 7
        },
        {
          "id": "wls2_armor_body_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_7_epic",
          "name": "里约布拉沃传奇背心",
          "amount": 9
        },
        {
          "id": "wls2_armor_legs_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_7_epic",
          "name": "里约布拉沃传奇裤子",
          "amount": 9
        },
        {
          "id": "wls2_armor_boots_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_7_epic",
          "name": "里约勇士传奇靴子",
          "amount": 8
        },
        {
          "id": "wls2_collection_transformer",
          "label": "建设提交",
          "target_id": "wls2_collection_transformer",
          "name": "建设提交",
          "amount": 20
        },
        {
          "id": "wls2_armor_head_3_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_3_epic",
          "name": "山岭猎人帽",
          "amount": 1
        },
        {
          "id": "wls2_armor_body_3_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_3_epic",
          "name": "山岭猎人夹克",
          "amount": 1
        },
        {
          "id": "wls2_armor_legs_3_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_3_epic",
          "name": "山岭猎人裤",
          "amount": 1
        },
        {
          "id": "wls2_armor_boots_3_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_3_epic",
          "name": "山岭猎人靴",
          "amount": 1
        },
        {
          "id": "wls2_weapon_melee_knife_3_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_3_epic",
          "name": "大刀",
          "amount": 1
        },
        {
          "id": "wls2_building_collection_generator_1",
          "label": "建设提交",
          "target_id": "wls2_building_collection_generator_1",
          "name": "发电机",
          "amount": 5
        },
        {
          "id": "wls2_building_collection_generator_2",
          "label": "建设提交",
          "target_id": "wls2_building_collection_generator_2",
          "name": "发电机",
          "amount": 5
        },
        {
          "id": "wls2_weapon_melee_knife_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_7_epic",
          "name": "猎人小刀",
          "amount": 5
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "ab3271552c9ac271b3d44ffafb6513737b1ea1791443cbd96cffd05c27e8cd68"
    },
    {
      "id": "wls2_resourse_secondary_leather_6",
      "name": "坚固的皮革",
      "name_en": "Stout leather",
      "name_source": "official_zh",
      "description": "制作保暖和坚固的服装所需",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "皮革",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_secondary_leather_6",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_6",
              "name": "浓郁的皮毛",
              "amount": 3
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 1
        },
        {
          "id": "wls2_armor_head_ws_day2024_6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_head_ws_day2024_6",
              "name": "缀满星星的帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_body_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_body_6_epic",
              "name": "圣诞警长外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 10,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_body_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_body_6_epic",
              "name": "炽热骑手衬衫",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 10,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_boots_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_boots_6_epic",
              "name": "圣诞警长靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_boots_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_boots_6_epic",
              "name": "炽热骑手靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_legs_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_legs_6_epic",
              "name": "圣诞警长裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_legs_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_legs_6_epic",
              "name": "炽热骑手裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_head_easter_2_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_head_easter_2_t7",
              "name": "复活节牛仔帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_bow_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_bow_t7",
              "name": "胡咧咧弓",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_mallet_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_mallet_t7",
              "name": "复活节木槌",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_battlepass3_armor_head_6_rare",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_battlepass3_armor_head_6_rare",
              "name": "小矮妖帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_battlepass1_armor_head_6_uncommon_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_battlepass1_armor_head_6_uncommon",
              "name": "旅者帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_body_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_body_6_rare",
              "name": "南瓜猎人外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_legs_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_legs_6_rare",
              "name": "南瓜猎人裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_boots_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_boots_6_rare",
              "name": "南瓜猎人靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_head_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_head_6_rare",
              "name": "南瓜猎人面具",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_head_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_head_6_epic",
              "name": "圣诞警长帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_head_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_head_6_epic",
              "name": "炽热 骑手 帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_head_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_head_6_rare",
              "name": "幻影骑士帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_body_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_body_6_rare",
              "name": "幽灵骑士的外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 10,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_legs_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_legs_6_rare",
              "name": "幽灵骑士的裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 7,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_boots_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_boots_6_rare",
              "name": "幽灵骑士之靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_head_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_head_6_rare",
              "name": "鹿角头带",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_body_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_body_6_rare",
              "name": "奶奶的复仇",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 10,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_legs_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_legs_6_rare",
              "name": "节日长裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 7,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_boots_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_boots_6_rare",
              "name": "节日靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_st_patrick_jacket_t6_2026_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_st_patrick_jacket_t6_2026",
              "name": "爱尔兰运气夹克",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 10,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_head_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_head_6_epic",
              "name": "弹簧 骑手 帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_body_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_body_6_epic",
              "name": "春季 骑手 外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 10,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_legs_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_legs_6_epic",
              "name": "春季 骑手 裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_boots_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_boots_6_epic",
              "name": "弹簧 骑手 靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_head_easter_6_new_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_head_easter_6_new",
              "name": "蛋猎人帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_6",
          "result_name": "坚固的皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_building_workshop_carpentry_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_carpentry_7",
          "name": "木匠桌",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_stone_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_stone_7",
          "name": "割石机",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_sewing_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_sewing_6",
          "name": "织布机",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_smelter_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_smelter_6",
          "name": "铸造厂",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_forge_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_6",
          "name": "熔炉",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_forge_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_6_plus",
          "name": "熔炉",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_workshop_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workshop_6",
          "name": "工具工作台",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_workbench_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workbench_6",
          "name": "零件工作台",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_metal_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_metal_6",
          "name": "金属",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_stone_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_stone_6",
          "name": "石头",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_leather_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_leather_6",
          "name": "布料",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_fuel_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_fuel_6",
          "name": "燃料",
          "amount": 20
        },
        {
          "id": "wls2_backpack_cowboy_6_rare_repair",
          "label": "修理",
          "target_id": "wls2_backpack_cowboy_6_rare",
          "name": "肯洛迪克征服者背包",
          "amount": 10
        },
        {
          "id": "wls2_backpack_indian_6_rare_repair",
          "label": "修理",
          "target_id": "wls2_backpack_indian_6_rare",
          "name": "德纳利精神袋",
          "amount": 10
        },
        {
          "id": "wls2_building_storage_trinket_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_trinket_6",
          "name": "饰品",
          "amount": 20
        },
        {
          "id": "wls2_resourse_fourfold_instruments_6",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_instruments_6",
          "name": "钨工具",
          "amount": 2
        },
        {
          "id": "wls2_resourse_fourfold_gunparts_6",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_gunparts_6",
          "name": "钨枪部件",
          "amount": 1
        },
        {
          "id": "wls2_backpack_cowboy_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_cowboy_6_rare",
          "name": "肯洛迪克征服者背包",
          "amount": 20
        },
        {
          "id": "wls2_backpack_indian_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_indian_6_rare",
          "name": "德纳利精神袋",
          "amount": 20
        },
        {
          "id": "wls2_weapon_range_bow_6_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_bow_6_common",
          "name": "力量 弓",
          "amount": 1
        },
        {
          "id": "wls2_weapon_melee_knife_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_6_epic",
          "name": "狗拉雪橇者的刀",
          "amount": 3
        },
        {
          "id": "wls2_armor_head_6_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_6_common",
          "name": "漫游者帽子",
          "amount": 3
        },
        {
          "id": "wls2_armor_body_6_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_6_common",
          "name": "流浪者夹克",
          "amount": 5
        },
        {
          "id": "wls2_armor_legs_6_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_6_common",
          "name": "漫游者裤子",
          "amount": 4
        },
        {
          "id": "wls2_armor_boots_6_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_6_common",
          "name": "流浪者靴子",
          "amount": 2
        },
        {
          "id": "wls2_armor_head_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_6_uncommon",
          "name": "前哨人帽子",
          "amount": 4
        },
        {
          "id": "wls2_armor_body_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_6_uncommon",
          "name": "前哨人夹克",
          "amount": 6
        },
        {
          "id": "wls2_armor_legs_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_6_uncommon",
          "name": "前线人裤子",
          "amount": 5
        },
        {
          "id": "wls2_armor_boots_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_6_uncommon",
          "name": "前哨人靴子",
          "amount": 3
        },
        {
          "id": "wls2_armor_head_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_6_rare",
          "name": "肯洛迪克征服者帽子",
          "amount": 5
        },
        {
          "id": "wls2_armor_body_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_6_rare",
          "name": "肯洛迪克征服者夹克",
          "amount": 10
        },
        {
          "id": "wls2_armor_legs_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_6_rare",
          "name": "肯洛迪克征服者裤子",
          "amount": 7
        },
        {
          "id": "wls2_armor_boots_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_6_rare",
          "name": "肯洛迪克征服者靴子",
          "amount": 4
        },
        {
          "id": "wls2_armor_head_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_6_epic",
          "name": "极地传奇帽",
          "amount": 6
        },
        {
          "id": "wls2_armor_body_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_6_epic",
          "name": "极地传奇长大衣",
          "amount": 10
        },
        {
          "id": "wls2_armor_legs_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_6_epic",
          "name": "极地传奇裤子",
          "amount": 8
        },
        {
          "id": "wls2_armor_boots_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_6_epic",
          "name": "极地传奇靴子",
          "amount": 4
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_hall_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_hall_4",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_safe_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_safe_4",
          "name": "建设提交",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_saloon_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_saloon_4",
          "name": "酒吧",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_watchtower_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_watchtower_4",
          "name": "瞭望塔",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_food_starage_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_food_starage_4",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_bar_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_bar_4",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_4",
          "name": "建设提交",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_carts_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_carts_4",
          "name": "建设提交",
          "amount": 250
        },
        {
          "id": "wls2_collection_clanbase_building_train_station_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_train_station_4",
          "name": "铁路车站",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_module_train_station_depot_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_train_station_depot_4",
          "name": "建设提交",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_barrack_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_barrack_4",
          "name": "工棚",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_bedroom_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_bedroom_4",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_resting_room_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_resting_room_4",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_6",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_6",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_building_collection_barn_5",
          "label": "建设提交",
          "target_id": "wls2_building_collection_barn_5",
          "name": "谷仓",
          "amount": 20
        },
        {
          "id": "wls2_building_collection_barn_6",
          "label": "建设提交",
          "target_id": "wls2_building_collection_barn_6",
          "name": "谷仓",
          "amount": 20
        },
        {
          "id": "wls2_weapon_melee_spear_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_spear_6_rare",
          "name": "坚固的鱼叉",
          "amount": 4
        },
        {
          "id": "wls2_weapon_melee_knife_6_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_6_common",
          "name": "捕鲸刀",
          "amount": 2
        },
        {
          "id": "wls2_weapon_melee_knife_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_6_uncommon",
          "name": "推剑",
          "amount": 3
        },
        {
          "id": "wls2_weapon_melee_knife_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_6_rare",
          "name": "海军短剑",
          "amount": 6
        },
        {
          "id": "wls2_collection_broken_alaska_hut",
          "label": "建设提交",
          "target_id": "wls2_collection_broken_alaska_hut",
          "name": "淘金者的食品储藏室",
          "amount": 40
        },
        {
          "id": "wls2_mount_equipment_saddle_uncommon_6",
          "label": "工作台制作",
          "target_id": "wls2_mount_equipment_saddle_uncommon_6",
          "name": "麦克莱伦鞍座",
          "amount": 20
        },
        {
          "id": "wls2_mount_equipment_saddle_rare_6",
          "label": "工作台制作",
          "target_id": "wls2_mount_equipment_saddle_rare_6",
          "name": "装备马鞍",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_traders_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_3",
          "name": "商人的店铺",
          "amount": 750
        },
        {
          "id": "wls2_collection_clanbase_building_traders_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_4",
          "name": "商人的店铺",
          "amount": 1600
        },
        {
          "id": "wls2_collection_clanbase_building_laboratory_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_laboratory_4",
          "name": "实验室",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_alchemist_table_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_alchemist_table_4",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_distiller_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_distiller_4",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_pagan_place_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_pagan_place_4",
          "name": "力量之地",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_luck_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_luck_4",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_ghost_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_ghost_4",
          "name": "建设提交",
          "amount": 100
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "2993f85d091a9fccc4af7d1678d44b4e0b3843a1caa66777d2194afcc888f2be"
    },
    {
      "id": "wls2_resourse_secondary_stoneblock_6",
      "name": "强化大理石块",
      "name_en": "Reinforced marble block",
      "name_source": "official_zh",
      "description": "高度耐用的材料，由大理石和钨的混合物制成，提供了优雅和增强的强度",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "石块",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_secondary_stoneblock_6",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_stoneblock_5",
              "name": "大理石块",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_ingot_6",
              "name": "钨锭",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_stoneblock_6",
          "result_name": "强化大理石块",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_building_production_bonfire_7",
          "label": "建筑制作",
          "target_id": "wls2_building_production_bonfire_7",
          "name": "篝火",
          "amount": 5
        },
        {
          "id": "wls2_building_workshop_kitchen_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_6",
          "name": "厨房",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_kitchen_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_6_plus",
          "name": "厨房",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_carpentry_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_carpentry_7",
          "name": "木匠桌",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_stone_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_stone_7",
          "name": "割石机",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_smelter_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_smelter_7",
          "name": "铸造厂",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_forge_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_6",
          "name": "熔炉",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_forge_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_6_plus",
          "name": "熔炉",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_workshop_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workshop_6",
          "name": "工具工作台",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_hebalist_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_hebalist_6",
          "name": "草药桌",
          "amount": 5
        },
        {
          "id": "wls2_building_construction_floor_6",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_floor_6",
          "name": "加固大理石地板",
          "amount": 20
        },
        {
          "id": "wls2_building_construction_wall_6",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_wall_6",
          "name": "加固大理石墙",
          "amount": 20
        },
        {
          "id": "wls2_building_construction_window_6",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_window_6",
          "name": "加固大理石窗户",
          "amount": 20
        },
        {
          "id": "wls2_building_construction_door_6",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_door_6",
          "name": "加固大理石门",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_hq_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_hq_4",
          "name": "总部",
          "amount": 3000
        },
        {
          "id": "wls2_collection_clanbase_building_saloon_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_saloon_4",
          "name": "酒吧",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_bar_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_bar_4",
          "name": "建设提交",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_powerplant_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_powerplant_4",
          "name": "发电站",
          "amount": 3000
        },
        {
          "id": "wls2_collection_clanbase_building_module_powerplant_transformer_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_powerplant_transformer_4",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_gold_mine_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_gold_mine_4",
          "name": "金矿",
          "amount": 2500
        },
        {
          "id": "wls2_collection_clanbase_building_train_station_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_train_station_4",
          "name": "铁路车站",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_module_train_station_depot_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_train_station_depot_4",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_barrack_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_barrack_4",
          "name": "工棚",
          "amount": 1000
        },
        {
          "id": "wls2_building_collection_generator_2",
          "label": "建设提交",
          "target_id": "wls2_building_collection_generator_2",
          "name": "发电机",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_laboratory_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_laboratory_4",
          "name": "实验室",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_pagan_place_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_pagan_place_4",
          "name": "力量之地",
          "amount": 1000
        },
        {
          "id": "wls_collection_rail_bridge",
          "label": "建设提交",
          "target_id": "wls_collection_rail_bridge",
          "name": "铁路 桥",
          "amount": 20
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "81ce6486d384fbf44ea214778a58ed8058c6bd08236dd1a666dd327a881bf49b"
    },
    {
      "id": "wls2_resourse_primary_ore_6",
      "name": "钨矿石",
      "name_en": "Tungsten ore",
      "name_source": "official_zh",
      "description": "用于钨生产",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "矿石",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_resourse_secondary_ingot_6",
          "label": "工作台制作",
          "target_id": "wls2_resourse_secondary_ingot_6",
          "name": "钨锭",
          "amount": 2
        }
      ],
      "locations": [
        "德纳利山"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "a621c811a12ff593baa8dc7dd7bfad38f86cc40c2545b4d6eda2956834538338"
    },
    {
      "id": "wls2_resourse_primary_fiber_6",
      "name": "黄鼠狼毛",
      "name_en": "Weasel fur",
      "name_source": "official_zh",
      "description": "小动物皮。耐用且保暖。",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "纤维",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_resourse_secondary_cloth_6",
          "label": "工作台制作",
          "target_id": "wls2_resourse_secondary_cloth_6",
          "name": "皮毛",
          "amount": 3
        }
      ],
      "locations": [
        "冰川湖",
        "北方森林",
        "德纳利山"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "913966b963d8d771e199c5878c5dfb76201f478a0b1c40c011464d5d55f7bd5e"
    },
    {
      "id": "wls2_resourse_secondary_rope_6",
      "name": "皮绳",
      "name_en": "Skin rope",
      "name_source": "official_zh",
      "description": "一根能够抵抗潮湿并在严寒中保持强度的绳子",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "绳索",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_secondary_rope_6",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_6",
              "name": "浓郁的皮毛",
              "amount": 5
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_6",
          "result_name": "皮绳",
          "amount": 1
        },
        {
          "id": "wls2_xmas_21_armor_boots_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_boots_6_epic",
              "name": "圣诞警长靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_6",
          "result_name": "皮绳",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_boots_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_boots_6_epic",
              "name": "炽热骑手靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_6",
          "result_name": "皮绳",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_bow_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_bow_t7",
              "name": "胡咧咧弓",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_6",
          "result_name": "皮绳",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_crossbow_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_crossbow_t7",
              "name": "胡萝卜弩",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_6",
          "result_name": "皮绳",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_boots_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_boots_6_rare",
              "name": "南瓜猎人靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_6",
          "result_name": "皮绳",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_boots_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_boots_6_rare",
              "name": "幽灵骑士之靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_6",
          "result_name": "皮绳",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmax2024_armor_boots_6_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_boots_6_rare",
              "name": "节日靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_6",
          "result_name": "皮绳",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_boots_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_boots_6_epic",
              "name": "弹簧 骑手 靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_6",
          "result_name": "皮绳",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls_fishing_rod_t6",
          "label": "工作台制作",
          "target_id": "wls_fishing_rod_t6",
          "name": "桤木钓竿",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_leather_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_leather_7",
          "name": "皮革烘干器",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_sewing_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_sewing_7",
          "name": "织布机",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_smelter_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_smelter_6",
          "name": "铸造厂",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_stone_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_stone_6",
          "name": "石头",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_wood_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_wood_7",
          "name": "木材",
          "amount": 18
        },
        {
          "id": "wls2_building_storage_weapon_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_weapon_6",
          "name": "武器",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_armor_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_armor_6",
          "name": "护甲",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_fuel_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_fuel_6",
          "name": "燃料",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_trinket_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_trinket_6",
          "name": "饰品",
          "amount": 20
        },
        {
          "id": "wls2_weapon_range_bow_6_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_bow_6_common",
          "name": "力量 弓",
          "amount": 3
        },
        {
          "id": "wls2_armor_boots_6_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_6_common",
          "name": "流浪者靴子",
          "amount": 2
        },
        {
          "id": "wls2_armor_boots_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_6_uncommon",
          "name": "前哨人靴子",
          "amount": 3
        },
        {
          "id": "wls2_armor_boots_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_6_rare",
          "name": "肯洛迪克征服者靴子",
          "amount": 4
        },
        {
          "id": "wls2_armor_boots_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_6_epic",
          "name": "极地传奇靴子",
          "amount": 6
        },
        {
          "id": "wls2_collection_clanbase_building_watchtower_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_watchtower_4",
          "name": "瞭望塔",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_powerplant_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_powerplant_4",
          "name": "发电站",
          "amount": 750
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_4",
          "name": "建设提交",
          "amount": 1000
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_6",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_6",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_mounts_stable_5",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_mounts_stable_5",
          "name": "马厩",
          "amount": 80
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "cce7976f4046e4c94965fcc8a58615e0d69458e8719078bbc0469596e27ea683"
    },
    {
      "id": "wls2_resourse_secondary_ingot_6",
      "name": "钨锭",
      "name_en": "Tungsten ingot",
      "name_source": "official_zh",
      "description": "非常坚固和硬的金属。用于制造高质量的零件。",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "金属锭",
      "tier": 6,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_secondary_ingot_6",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_ore_3",
              "name": "铁矿石",
              "amount": 8
            },
            {
              "id": "wls2_resourse_primary_ore_6",
              "name": "钨矿石",
              "amount": 2
            },
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 2
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_6",
          "result_name": "钨锭",
          "amount": 1
        },
        {
          "id": "wls2_weapon_ws_day2024_colt_6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_colt_6",
              "name": "周年庆左轮手枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_6",
          "result_name": "钨锭",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_ws_day2024_shotgun_6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_shotgun_6",
              "name": "周年庆散弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_6",
          "result_name": "钨锭",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_7_epic_colt_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_7_epic_colt",
              "name": "集市柯尔特左轮",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_6",
          "result_name": "钨锭",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_crossbow_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_crossbow_t7",
              "name": "胡萝卜弩",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_6",
          "result_name": "钨锭",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_mace_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_mace_t7",
              "name": "彩绘狼牙棒",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_6",
          "result_name": "钨锭",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_mallet_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_mallet_t7",
              "name": "复活节木槌",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_6",
          "result_name": "钨锭",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_pepperbox_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_pepperbox_t7",
              "name": "集市胡椒盒手枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_6",
          "result_name": "钨锭",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_1_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_1_t7",
              "name": "彩炮 II",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_6",
          "result_name": "钨锭",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_2_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_2_t7",
              "name": "爆笑",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_6",
          "result_name": "钨锭",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_easter_22_shotgun_3_t7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_easter_22_shotgun_3_t7",
              "name": "吉尔的霰弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_6",
          "result_name": "钨锭",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_lunar_shotgun_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_lunar_shotgun_7_rare",
              "name": "火焰 霰弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_6",
          "result_name": "钨锭",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_23_weapon_range_rifle_6_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_23_weapon_range_rifle_6_epic",
              "name": "极光",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_6",
          "result_name": "钨锭",
          "amount": 7,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_range_halloween_23_pistol_6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_range_halloween_23_pistol_6",
              "name": "恶灵的恐怖",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_6",
          "result_name": "钨锭",
          "amount": 7,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_xmas2024_shotgun_6_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_xmas2024_shotgun_6",
              "name": "暴风雪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_6",
          "result_name": "钨锭",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_tools_axe_6",
          "label": "工作台制作",
          "target_id": "wls2_tools_axe_6",
          "name": "钨合金斧头",
          "amount": 1
        },
        {
          "id": "wls2_tools_pickaxe_6",
          "label": "工作台制作",
          "target_id": "wls2_tools_pickaxe_6",
          "name": "钨合金镐",
          "amount": 1
        },
        {
          "id": "wls2_building_production_well_6",
          "label": "建筑制作",
          "target_id": "wls2_building_production_well_6",
          "name": "井",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_kitchen_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_6",
          "name": "厨房",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_kitchen_6_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_6_plus",
          "name": "厨房",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_carpentry_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_carpentry_7",
          "name": "木匠桌",
          "amount": 2
        },
        {
          "id": "wls2_building_workshop_stone_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_stone_7",
          "name": "割石机",
          "amount": 2
        },
        {
          "id": "wls2_building_workshop_sewing_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_sewing_7",
          "name": "织布机",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_workbench_6",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workbench_6",
          "name": "零件工作台",
          "amount": 3
        },
        {
          "id": "wls2_building_storage_chest_6_new",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_chest_6_new",
          "name": "装甲板覆盖的胸部",
          "amount": 6
        },
        {
          "id": "wls2_building_storage_chest_7_new",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_chest_7_new",
          "name": "装甲板覆盖的胸部",
          "amount": 6
        },
        {
          "id": "wls2_building_storage_weapon_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_weapon_6",
          "name": "武器",
          "amount": 2
        },
        {
          "id": "wls2_building_storage_armor_6",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_armor_6",
          "name": "护甲",
          "amount": 2
        },
        {
          "id": "wls2_building_construction_floor_6",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_floor_6",
          "name": "加固大理石地板",
          "amount": 2
        },
        {
          "id": "wls2_building_construction_wall_6",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_wall_6",
          "name": "加固大理石墙",
          "amount": 2
        },
        {
          "id": "wls2_building_construction_window_6",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_window_6",
          "name": "加固大理石窗户",
          "amount": 2
        },
        {
          "id": "wls2_building_construction_door_6",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_door_6",
          "name": "加固大理石门",
          "amount": 2
        },
        {
          "id": "wls2_building_storage_safe_4",
          "label": "建设提交",
          "target_id": "wls2_building_storage_safe_4",
          "name": "保险箱",
          "amount": 12
        },
        {
          "id": "wls2_resourse_secondary_stoneblock_6",
          "label": "工作台制作",
          "target_id": "wls2_resourse_secondary_stoneblock_6",
          "name": "强化大理石块",
          "amount": 1
        },
        {
          "id": "wls2_resourse_fourfold_instruments_6",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_instruments_6",
          "name": "钨工具",
          "amount": 1
        },
        {
          "id": "wls2_resourse_fourfold_nails_6",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_nails_6",
          "name": "钨紧固件",
          "amount": 2
        },
        {
          "id": "wls2_resourse_fourfold_gunparts_6",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_gunparts_6",
          "name": "钨枪部件",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_revolver_6_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_6_common",
          "name": "布朗宁No.1",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_rifle_6_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_6_common",
          "name": "温彻斯特画廊枪",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_shotgun_6_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_6_common",
          "name": "Rem M10 暴乱",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_revolver_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_6_uncommon",
          "name": "博查德自动手枪",
          "amount": 6
        },
        {
          "id": "wls2_weapon_range_rifle_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_6_uncommon",
          "name": "李-恩菲尔德",
          "amount": 6
        },
        {
          "id": "wls2_weapon_range_shotgun_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_6_uncommon",
          "name": "雷明顿打发",
          "amount": 6
        },
        {
          "id": "wls2_weapon_range_revolver_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_6_rare",
          "name": "巴拉贝勒姆",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_rifle_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_6_rare",
          "name": "克拉格-约尔根森",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_shotgun_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_6_rare",
          "name": "座头鲸",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_revolver_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_6_epic",
          "name": "毛瑟扫帚手枪",
          "amount": 10
        },
        {
          "id": "wls2_weapon_range_rifle_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_6_epic",
          "name": "野蛮模型99",
          "amount": 10
        },
        {
          "id": "wls2_weapon_range_shotgun_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_6_epic",
          "name": "寡妇制造者",
          "amount": 10
        },
        {
          "id": "wls2_weapon_melee_knife_6_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_6_epic",
          "name": "狗拉雪橇者的刀",
          "amount": 2
        },
        {
          "id": "wls2_collection_clanbase_building_hq_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_hq_4",
          "name": "总部",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_safe_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_safe_4",
          "name": "建设提交",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_food_starage_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_food_starage_5",
          "name": "建设提交",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_module_powerplant_transformer_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_powerplant_transformer_4",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_gold_mine_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_gold_mine_4",
          "name": "金矿",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_4",
          "name": "建设提交",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_carts_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_carts_4",
          "name": "建设提交",
          "amount": 750
        },
        {
          "id": "wls2_collection_clanbase_building_module_train_station_depot_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_train_station_depot_4",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_bedroom_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_bedroom_4",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_resting_room_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_resting_room_4",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_building_collection_generator_2",
          "label": "建设提交",
          "target_id": "wls2_building_collection_generator_2",
          "name": "发电机",
          "amount": 20
        },
        {
          "id": "wls2_building_collection_barn_5",
          "label": "建设提交",
          "target_id": "wls2_building_collection_barn_5",
          "name": "谷仓",
          "amount": 40
        },
        {
          "id": "wls2_building_collection_barn_6",
          "label": "建设提交",
          "target_id": "wls2_building_collection_barn_6",
          "name": "谷仓",
          "amount": 40
        },
        {
          "id": "wls2_building_workshop_shed_chicken_6",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_chicken_6",
          "name": "鸡舍",
          "amount": 40
        },
        {
          "id": "wls2_building_workshop_shed_cow_6",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_cow_6",
          "name": "牛棚",
          "amount": 40
        },
        {
          "id": "wls2_weapon_melee_spear_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_spear_6_rare",
          "name": "坚固的鱼叉",
          "amount": 4
        },
        {
          "id": "wls2_weapon_melee_knife_6_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_6_common",
          "name": "捕鲸刀",
          "amount": 1
        },
        {
          "id": "wls2_weapon_melee_knife_6_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_6_uncommon",
          "name": "推剑",
          "amount": 2
        },
        {
          "id": "wls2_weapon_melee_knife_6_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_6_rare",
          "name": "海军短剑",
          "amount": 4
        },
        {
          "id": "wls2_collection_clanbase_building_traders_3",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_3",
          "name": "商人的店铺",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_traders_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_4",
          "name": "商人的店铺",
          "amount": 130
        },
        {
          "id": "wls2_collection_clanbase_building_module_alchemist_table_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_alchemist_table_4",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_distiller_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_distiller_4",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_luck_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_luck_4",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_ghost_4",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_ghost_4",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls_collection_add_railway",
          "label": "建设提交",
          "target_id": "wls_collection_add_railway",
          "name": "旧 轨道",
          "amount": 25
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "f119daa1a76280e3f2d1a40c8cf586bfb39f3f3ad11819b04e21d51b1d68fd48"
    },
    {
      "id": "wls2_resourse_primary_hide_7",
      "name": "密集的皮毛",
      "name_en": "Dense hide",
      "name_source": "official_zh",
      "description": "尽管它的颜色温和，皮肤非常坚强",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "兽皮",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_resourse_secondary_leather_7",
          "label": "工作台制作",
          "target_id": "wls2_resourse_secondary_leather_7",
          "name": "密集皮革",
          "amount": 3
        },
        {
          "id": "wls2_resourse_secondary_rope_7",
          "label": "工作台制作",
          "target_id": "wls2_resourse_secondary_rope_7",
          "name": "皮带",
          "amount": 5
        },
        {
          "id": "wls2_consumable_pet_bait_wolfs_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_wolfs_7",
          "name": "狼诱饵 VII",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_bait_lynx_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_lynx_7",
          "name": "山猫诱饵 VII",
          "amount": 1
        },
        {
          "id": "wls2_consumable_pet_bait_direwolfs_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_direwolfs_7",
          "name": "头狼诱饵 VII",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pet_bait_pumas_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_pumas_7",
          "name": "美洲狮诱饵 VII",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pet_bait_bears_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_bears_7",
          "name": "熊诱饵 VII",
          "amount": 2
        },
        {
          "id": "wls2_consumable_pet_bait_boars_7",
          "label": "工作台制作",
          "target_id": "wls2_consumable_pet_bait_boars_7",
          "name": "野猪诱饵VII",
          "amount": 2
        }
      ],
      "locations": [
        "多刺湖",
        "沙痕峡谷"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "c249b99205395f6a373b57c7dc3aabe89e40ee8ad99154113bc3112a2952747a"
    },
    {
      "id": "wls2_resourse_primary_wood_7",
      "name": "山核桃木头",
      "name_en": "Pecan log",
      "name_source": "official_zh",
      "description": "一种密实、有弹性的木材，用于高质量的制作",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "原木",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_resourse_primary_coal_1_pecan",
          "label": "工作台制作",
          "target_id": "wls2_resourse_primary_coal_1",
          "name": "煤炭",
          "amount": 1
        },
        {
          "id": "wls2_resourse_secondary_plank_7",
          "label": "工作台制作",
          "target_id": "wls2_resourse_secondary_plank_7",
          "name": "山核桃木板",
          "amount": 3
        }
      ],
      "locations": [
        "多刺湖",
        "沙痕峡谷"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "c3163deda3baf155683878c9802aa207eedcf5a4d3eaf499055a71bc8d2145d4"
    },
    {
      "id": "wls2_resourse_fourfold_instruments_7",
      "name": "钼工具",
      "name_en": "Molybdenum tools",
      "name_source": "official_zh",
      "description": "用于制作和升级工作台",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "工具与紧固件",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_fourfold_instruments_7",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_7",
              "name": "山核桃木板",
              "amount": 2
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
          "result_id": "wls2_resourse_fourfold_instruments_7",
          "result_name": "钼工具",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_building_workshop_kitchen_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_7",
          "name": "厨房",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_kitchen_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_7_plus",
          "name": "厨房",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_laboratory_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_laboratory_7",
          "name": "实验室",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_workbench_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workbench_7",
          "name": "零件工作台",
          "amount": 5
        },
        {
          "id": "wls2_building_workshop_gunworkshop_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_7",
          "name": "枪械工坊",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_gunworkshop_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_7_plus",
          "name": "枪械工坊",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_armorworkshop_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_7",
          "name": "护甲工坊",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_armorworkshop_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_7_plus",
          "name": "护甲工坊",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_repairshop_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_7",
          "name": "维修商店",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_repairshop_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_7_plus",
          "name": "维修商店",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_hebalist_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_hebalist_7",
          "name": "草药桌",
          "amount": 1
        },
        {
          "id": "wls2_building_storage_stone_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_stone_7",
          "name": "石头",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_wood_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_wood_7",
          "name": "木材",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_weapon_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_weapon_7",
          "name": "武器",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_armor_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_armor_7",
          "name": "护甲",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_heal_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_heal_7",
          "name": "化学",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_fuel_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_fuel_7",
          "name": "燃料",
          "amount": 5
        },
        {
          "id": "wls2_building_wagon_7",
          "label": "建设提交",
          "target_id": "wls2_building_wagon_7",
          "name": "马车",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_safe_5",
          "label": "建设提交",
          "target_id": "wls2_building_storage_safe_5",
          "name": "保险箱",
          "amount": 8
        },
        {
          "id": "wls2_backpack_cowboy_7_rare_repair",
          "label": "修理",
          "target_id": "wls2_backpack_cowboy_7_rare",
          "name": "里约布拉沃传奇背包",
          "amount": 10
        },
        {
          "id": "wls2_backpack_indian_7_rare_repair",
          "label": "修理",
          "target_id": "wls2_backpack_indian_7_rare",
          "name": "峡谷 精神 包",
          "amount": 10
        },
        {
          "id": "wls2_building_storage_trinket_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_trinket_7",
          "name": "饰品",
          "amount": 5
        },
        {
          "id": "wls2_backpack_cowboy_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_cowboy_7_rare",
          "name": "里约布拉沃传奇背包",
          "amount": 18
        },
        {
          "id": "wls2_backpack_indian_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_indian_7_rare",
          "name": "峡谷 精神 包",
          "amount": 18
        },
        {
          "id": "wls2_building_workshop_recycle_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_7",
          "name": "分解台",
          "amount": 6
        },
        {
          "id": "wls2_building_workshop_recycle_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_7_plus",
          "name": "分解台",
          "amount": 6
        },
        {
          "id": "wls2_collection_clanbase_building_hq_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_hq_5",
          "name": "总部",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_hall_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_hall_5",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_safe_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_safe_5",
          "name": "建设提交",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_powerplant_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_powerplant_5",
          "name": "发电站",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_module_powerplant_transformer_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_powerplant_transformer_5",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_gold_mine_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_gold_mine_5",
          "name": "金矿",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_carts_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_carts_5",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_7",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_7",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_building_production_pets_7",
          "label": "建筑制作",
          "target_id": "wls2_building_production_pets_7",
          "name": "诱饵工作台",
          "amount": 20
        },
        {
          "id": "wls2_building_production_field_7",
          "label": "建设提交",
          "target_id": "wls2_building_production_field_7",
          "name": "田地",
          "amount": 5
        },
        {
          "id": "wls2_building_workshop_shed_chicken_7",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_chicken_7",
          "name": "鸡舍",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_shed_cow_7",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_cow_7",
          "name": "牛棚",
          "amount": 20
        },
        {
          "id": "wls_collection_oil_tower",
          "label": "建设提交",
          "target_id": "wls_collection_oil_tower",
          "name": "油塔",
          "amount": 10
        },
        {
          "id": "wls_collection_oil_tower_1",
          "label": "建设提交",
          "target_id": "wls_collection_oil_tower_1",
          "name": "油塔",
          "amount": 10
        },
        {
          "id": "wls_collection_add_railway",
          "label": "建设提交",
          "target_id": "wls_collection_add_railway",
          "name": "旧 轨道",
          "amount": 10
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "3b77f2d8f95cc7530cfd2be6ef978eee0ca5871e6c3386be9e1bb9251362e7df"
    },
    {
      "id": "wls2_resourse_fourfold_nails_7",
      "name": "钼紧固件",
      "name_en": "Molybdenum fasteners",
      "name_source": "official_zh",
      "description": "多功能手工和建筑用紧固件套装",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "工具与紧固件",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_fourfold_nails_7",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 2
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 1
        },
        {
          "id": "wls2_armor_head_ws_day2024_7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_head_ws_day2024_7",
              "name": "缀满星星的帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_ws_day2024_colt_7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_colt_7",
              "name": "周年庆左轮手枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_ws_day2024_shotgun_7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_shotgun_7",
              "name": "周年庆散弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_body_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_body_7_epic",
              "name": "圣诞警长外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_body_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_body_7_epic",
              "name": "炽热骑手衬衫",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_boots_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_boots_7_epic",
              "name": "圣诞警长靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_boots_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_boots_7_epic",
              "name": "炽热骑手靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_legs_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_legs_7_epic",
              "name": "圣诞警长裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_legs_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_legs_7_epic",
              "name": "炽热骑手裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_body_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_body_7_rare",
              "name": "南瓜猎人外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_legs_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_legs_7_rare",
              "name": "南瓜猎人裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_head_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_head_7_rare",
              "name": "南瓜猎人面具",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_head_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_head_7_epic",
              "name": "圣诞警长帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_head_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_head_7_epic",
              "name": "炽热 骑手 帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_boots_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_boots_7_rare",
              "name": "幽灵骑士之靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_xmas2024_boots_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_boots_7_rare",
              "name": "节日靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_xmas2024_shotgun_7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_xmas2024_shotgun_7",
              "name": "暴风雪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_st_patrick_jacket_t7_2026_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_st_patrick_jacket_t7_2026",
              "name": "爱尔兰运气夹克",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_head_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_head_7_epic",
              "name": "弹簧 骑手 帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_body_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_body_7_epic",
              "name": "春季 骑手 外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_legs_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_legs_7_epic",
              "name": "春季 骑手 裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_boots_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_boots_7_epic",
              "name": "弹簧 骑手 靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_head_easter_7_new_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_head_easter_7_new",
              "name": "蛋猎人帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_nails_7",
          "result_name": "钼紧固件",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_building_workshop_laboratory_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_laboratory_7",
          "name": "实验室",
          "amount": 1
        },
        {
          "id": "wls2_building_storage_metal_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_metal_7",
          "name": "金属",
          "amount": 1
        },
        {
          "id": "wls2_building_storage_food_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_food_7",
          "name": "食物",
          "amount": 10
        },
        {
          "id": "wls2_building_storage_leather_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_leather_7",
          "name": "布料",
          "amount": 10
        },
        {
          "id": "wls2_building_construction_floor_7",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_floor_7",
          "name": "水磨石地板",
          "amount": 1
        },
        {
          "id": "wls2_building_construction_wall_7",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_wall_7",
          "name": "水磨石墙",
          "amount": 1
        },
        {
          "id": "wls2_building_construction_window_7",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_window_7",
          "name": "水磨石窗",
          "amount": 2
        },
        {
          "id": "wls2_building_construction_door_7",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_door_7",
          "name": "水磨石门",
          "amount": 3
        },
        {
          "id": "wls2_building_wagon_7",
          "label": "建设提交",
          "target_id": "wls2_building_wagon_7",
          "name": "马车",
          "amount": 10
        },
        {
          "id": "wls2_building_storage_safe_5",
          "label": "建设提交",
          "target_id": "wls2_building_storage_safe_5",
          "name": "保险箱",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_revolver_7_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_7_common",
          "name": "纳甘 M1910",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_rifle_7_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_7_common",
          "name": "温彻斯特 1907",
          "amount": 2
        },
        {
          "id": "wls2_weapon_range_shotgun_7_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_7_common",
          "name": "自动 & 盗贼 枪",
          "amount": 2
        },
        {
          "id": "wls2_weapon_range_revolver_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_7_uncommon",
          "name": "罗斯-斯泰尔 1907",
          "amount": 6
        },
        {
          "id": "wls2_weapon_range_rifle_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_7_uncommon",
          "name": "雷明顿8型",
          "amount": 3
        },
        {
          "id": "wls2_weapon_range_shotgun_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_7_uncommon",
          "name": "Sjogren 霰弹枪",
          "amount": 3
        },
        {
          "id": "wls2_weapon_range_revolver_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_7_rare",
          "name": "伯格曼 火星 1903",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_rifle_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_7_rare",
          "name": "蒙德拉贡 M1908",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_shotgun_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_7_rare",
          "name": "温彻斯特 模型 1912",
          "amount": 4
        },
        {
          "id": "wls2_armor_boots_7_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_7_common",
          "name": "野马 靴子",
          "amount": 1
        },
        {
          "id": "wls2_armor_body_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_7_uncommon",
          "name": "沙痕背心",
          "amount": 1
        },
        {
          "id": "wls2_armor_legs_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_7_uncommon",
          "name": "沙痕裤",
          "amount": 1
        },
        {
          "id": "wls2_armor_boots_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_7_uncommon",
          "name": "沙痕靴",
          "amount": 2
        },
        {
          "id": "wls2_armor_head_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_7_rare",
          "name": "城市治安官的帽子",
          "amount": 3
        },
        {
          "id": "wls2_armor_body_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_7_rare",
          "name": "城市警长的背心",
          "amount": 3
        },
        {
          "id": "wls2_armor_legs_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_7_rare",
          "name": "城市警长的裤子",
          "amount": 3
        },
        {
          "id": "wls2_armor_boots_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_7_rare",
          "name": "城市治安官的靴子",
          "amount": 3
        },
        {
          "id": "wls2_armor_head_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_7_epic",
          "name": "里约布拉沃传奇帽",
          "amount": 4
        },
        {
          "id": "wls2_armor_body_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_7_epic",
          "name": "里约布拉沃传奇背心",
          "amount": 4
        },
        {
          "id": "wls2_armor_legs_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_7_epic",
          "name": "里约布拉沃传奇裤子",
          "amount": 4
        },
        {
          "id": "wls2_armor_boots_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_7_epic",
          "name": "里约勇士传奇靴子",
          "amount": 5
        },
        {
          "id": "wls2_collection_clanbase_building_hq_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_hq_5",
          "name": "总部",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_hall_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_hall_5",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_safe_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_safe_5",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_saloon_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_saloon_5",
          "name": "酒吧",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_watchtower_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_watchtower_5",
          "name": "瞭望塔",
          "amount": 150
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_food_starage_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_food_starage_5",
          "name": "建设提交",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_bar_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_bar_5",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_powerplant_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_powerplant_5",
          "name": "发电站",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_module_powerplant_transformer_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_powerplant_transformer_5",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_gold_mine_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_gold_mine_5",
          "name": "金矿",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_5",
          "name": "建设提交",
          "amount": 250
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_carts_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_carts_5",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_train_station_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_train_station_5",
          "name": "铁路车站",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_train_station_depot_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_train_station_depot_5",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_barrack_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_barrack_5",
          "name": "工棚",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_bedroom_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_bedroom_5",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_resting_room_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_resting_room_5",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_7",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_7",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_building_production_pets_7",
          "label": "建筑制作",
          "target_id": "wls2_building_production_pets_7",
          "name": "诱饵工作台",
          "amount": 20
        },
        {
          "id": "wls2_building_production_field_7",
          "label": "建设提交",
          "target_id": "wls2_building_production_field_7",
          "name": "田地",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_shed_chicken_7",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_chicken_7",
          "name": "鸡舍",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_shed_cow_7",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_cow_7",
          "name": "牛棚",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_product_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_product_7",
          "name": "调味品",
          "amount": 10
        },
        {
          "id": "wls2_mount_equipment_saddle_rare_7",
          "label": "工作台制作",
          "target_id": "wls2_mount_equipment_saddle_rare_7",
          "name": "查罗鞍",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_traders_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_5",
          "name": "商人的店铺",
          "amount": 120
        },
        {
          "id": "wls2_collection_clanbase_building_laboratory_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_laboratory_5",
          "name": "实验室",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_alchemist_table_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_alchemist_table_5",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_distiller_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_distiller_5",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_pagan_place_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_pagan_place_5",
          "name": "力量之地",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_luck_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_luck_5",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_ghost_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_ghost_5",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls_collection_oil_tower",
          "label": "建设提交",
          "target_id": "wls_collection_oil_tower",
          "name": "油塔",
          "amount": 10
        },
        {
          "id": "wls_collection_oil_tower_1",
          "label": "建设提交",
          "target_id": "wls_collection_oil_tower_1",
          "name": "油塔",
          "amount": 10
        },
        {
          "id": "wls_collection_texas_player_house",
          "label": "建设提交",
          "target_id": "wls_collection_texas_player_house",
          "name": "废弃的房子",
          "amount": 10
        },
        {
          "id": "wls_collection_add_railway",
          "label": "建设提交",
          "target_id": "wls_collection_add_railway",
          "name": "旧 轨道",
          "amount": 10
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "02c7f5e20d72e3e9de2b5e2e77299129fcdb3466e69b0cbfeb2feb1ef91ec868"
    },
    {
      "id": "wls2_resourse_secondary_cloth_7",
      "name": "羊毛 布料",
      "name_en": "Wool cloth",
      "name_source": "official_zh",
      "description": "从袜子到盔甲 —— 它都始于一块布料",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "布料",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_secondary_cloth_7",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_fiber_7",
              "name": "羊毛",
              "amount": 3
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_7",
          "result_name": "羊毛 布料",
          "amount": 1
        },
        {
          "id": "wls2_battlepass3_armor_head_7_rare",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_battlepass3_armor_head_7_rare",
              "name": "小矮妖帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_7",
          "result_name": "羊毛 布料",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_battlepass1_armor_head_7_uncommon_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_battlepass1_armor_head_7_uncommon",
              "name": "旅者帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_7",
          "result_name": "羊毛 布料",
          "amount": 2,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_head_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_head_7_rare",
              "name": "南瓜猎人面具",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_7",
          "result_name": "羊毛 布料",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_head_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_head_7_epic",
              "name": "圣诞警长帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_7",
          "result_name": "羊毛 布料",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_head_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_head_7_epic",
              "name": "炽热 骑手 帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_7",
          "result_name": "羊毛 布料",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_head_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_head_7_rare",
              "name": "幻影骑士帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_7",
          "result_name": "羊毛 布料",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_xmas2024_head_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_head_7_rare",
              "name": "鹿角头带",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_7",
          "result_name": "羊毛 布料",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_head_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_head_7_epic",
              "name": "弹簧 骑手 帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_cloth_7",
          "result_name": "羊毛 布料",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_building_workshop_gunworkshop_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_7",
          "name": "枪械工坊",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_gunworkshop_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_7_plus",
          "name": "枪械工坊",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_armorworkshop_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_7",
          "name": "护甲工坊",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_armorworkshop_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_7_plus",
          "name": "护甲工坊",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_repairshop_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_7",
          "name": "维修商店",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_repairshop_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_7_plus",
          "name": "维修商店",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_food_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_food_7",
          "name": "食物",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_heal_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_heal_7",
          "name": "化学",
          "amount": 20
        },
        {
          "id": "wls2_building_wagon_7",
          "label": "建设提交",
          "target_id": "wls2_building_wagon_7",
          "name": "马车",
          "amount": 100
        },
        {
          "id": "wls2_backpack_cowboy_7_rare_repair",
          "label": "修理",
          "target_id": "wls2_backpack_cowboy_7_rare",
          "name": "里约布拉沃传奇背包",
          "amount": 25
        },
        {
          "id": "wls2_backpack_indian_7_rare_repair",
          "label": "修理",
          "target_id": "wls2_backpack_indian_7_rare",
          "name": "峡谷 精神 包",
          "amount": 25
        },
        {
          "id": "wls2_backpack_cowboy_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_cowboy_7_rare",
          "name": "里约布拉沃传奇背包",
          "amount": 50
        },
        {
          "id": "wls2_backpack_indian_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_indian_7_rare",
          "name": "峡谷 精神 包",
          "amount": 50
        },
        {
          "id": "wls2_armor_head_7_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_7_common",
          "name": "野马 帽子",
          "amount": 2
        },
        {
          "id": "wls2_armor_body_7_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_7_common",
          "name": "野马 背心",
          "amount": 2
        },
        {
          "id": "wls2_armor_legs_7_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_7_common",
          "name": "布朗科裤子",
          "amount": 2
        },
        {
          "id": "wls2_armor_head_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_7_uncommon",
          "name": "沙痕帽",
          "amount": 3
        },
        {
          "id": "wls2_armor_body_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_7_uncommon",
          "name": "沙痕背心",
          "amount": 3
        },
        {
          "id": "wls2_armor_legs_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_7_uncommon",
          "name": "沙痕裤",
          "amount": 3
        },
        {
          "id": "wls2_armor_head_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_7_rare",
          "name": "城市治安官的帽子",
          "amount": 4
        },
        {
          "id": "wls2_armor_body_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_7_rare",
          "name": "城市警长的背心",
          "amount": 10
        },
        {
          "id": "wls2_armor_legs_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_7_rare",
          "name": "城市警长的裤子",
          "amount": 15
        },
        {
          "id": "wls2_armor_head_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_7_epic",
          "name": "里约布拉沃传奇帽",
          "amount": 4
        },
        {
          "id": "wls2_armor_body_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_7_epic",
          "name": "里约布拉沃传奇背心",
          "amount": 20
        },
        {
          "id": "wls2_armor_legs_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_7_epic",
          "name": "里约布拉沃传奇裤子",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_recycle_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_7",
          "name": "分解台",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_recycle_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_7_plus",
          "name": "分解台",
          "amount": 15
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_hall_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_hall_5",
          "name": "建设提交",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_saloon_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_saloon_5",
          "name": "酒吧",
          "amount": 150
        },
        {
          "id": "wls2_collection_clanbase_building_watchtower_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_watchtower_5",
          "name": "瞭望塔",
          "amount": 2500
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_food_starage_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_food_starage_5",
          "name": "建设提交",
          "amount": 150
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_bar_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_bar_5",
          "name": "建设提交",
          "amount": 150
        },
        {
          "id": "wls2_collection_clanbase_building_train_station_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_train_station_5",
          "name": "铁路车站",
          "amount": 1500
        },
        {
          "id": "wls2_collection_clanbase_building_barrack_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_barrack_5",
          "name": "工棚",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_bedroom_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_bedroom_5",
          "name": "建设提交",
          "amount": 1000
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_7",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_7",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_building_production_pets_7",
          "label": "建筑制作",
          "target_id": "wls2_building_production_pets_7",
          "name": "诱饵工作台",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_product_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_product_7",
          "name": "调味品",
          "amount": 10
        },
        {
          "id": "wls2_mount_equipment_saddle_uncommon_7",
          "label": "工作台制作",
          "target_id": "wls2_mount_equipment_saddle_uncommon_7",
          "name": "牛仔 鞍",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_laboratory_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_laboratory_5",
          "name": "实验室",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_module_alchemist_table_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_alchemist_table_5",
          "name": "建设提交",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_pagan_place_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_pagan_place_5",
          "name": "力量之地",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_ghost_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_ghost_5",
          "name": "建设提交",
          "amount": 1000
        },
        {
          "id": "wls_collection_texas_player_house",
          "label": "建设提交",
          "target_id": "wls_collection_texas_player_house",
          "name": "废弃的房子",
          "amount": 30
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "365caedc89d5e549cc662969039edbb04a60be23fac2c03cbc1fab701e1a45d1"
    },
    {
      "id": "wls2_resourse_secondary_plank_7",
      "name": "山核桃木板",
      "name_en": "Pecan plank",
      "name_source": "official_zh",
      "description": "在制作和建筑中都使用的关键材料",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "木板",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_secondary_plank_7",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_wood_7",
              "name": "山核桃木头",
              "amount": 3
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_7",
          "result_name": "山核桃木板",
          "amount": 1
        },
        {
          "id": "wls2_xmas_23_weapon_range_rifle_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_23_weapon_range_rifle_7_epic",
              "name": "极光",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_plank_7",
          "result_name": "山核桃木板",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_tools_axe_7",
          "label": "工作台制作",
          "target_id": "wls2_tools_axe_7",
          "name": "钼斧头",
          "amount": 1
        },
        {
          "id": "wls2_tools_pickaxe_7",
          "label": "工作台制作",
          "target_id": "wls2_tools_pickaxe_7",
          "name": "钼 镐",
          "amount": 1
        },
        {
          "id": "wls_fishing_rod_t7",
          "label": "工作台制作",
          "target_id": "wls_fishing_rod_t7",
          "name": "山核桃 钓鱼杆",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_laboratory_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_laboratory_7",
          "name": "实验室",
          "amount": 5
        },
        {
          "id": "wls2_building_workshop_stone_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_stone_7",
          "name": "割石机",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_leather_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_leather_7",
          "name": "皮革烘干器",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_sewing_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_sewing_7",
          "name": "织布机",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_gunworkshop_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_7",
          "name": "枪械工坊",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_gunworkshop_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_gunworkshop_7_plus",
          "name": "枪械工坊",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_armorworkshop_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_7",
          "name": "护甲工坊",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_armorworkshop_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_armorworkshop_7_plus",
          "name": "护甲工坊",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_repairshop_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_7",
          "name": "维修商店",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_repairshop_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_repairshop_7_plus",
          "name": "维修商店",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_hebalist_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_hebalist_7",
          "name": "草药桌",
          "amount": 5
        },
        {
          "id": "wls2_building_storage_metal_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_metal_7",
          "name": "金属",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_stone_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_stone_7",
          "name": "石头",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_wood_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_wood_7",
          "name": "木材",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_food_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_food_7",
          "name": "食物",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_weapon_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_weapon_7",
          "name": "武器",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_armor_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_armor_7",
          "name": "护甲",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_heal_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_heal_7",
          "name": "化学",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_leather_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_leather_7",
          "name": "布料",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_fuel_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_fuel_7",
          "name": "燃料",
          "amount": 20
        },
        {
          "id": "wls2_building_construction_floor_7",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_floor_7",
          "name": "水磨石地板",
          "amount": 12
        },
        {
          "id": "wls2_building_construction_wall_7",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_wall_7",
          "name": "水磨石墙",
          "amount": 12
        },
        {
          "id": "wls2_building_construction_window_7",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_window_7",
          "name": "水磨石窗",
          "amount": 12
        },
        {
          "id": "wls2_building_construction_door_7",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_door_7",
          "name": "水磨石门",
          "amount": 12
        },
        {
          "id": "wls2_building_wagon_7",
          "label": "建设提交",
          "target_id": "wls2_building_wagon_7",
          "name": "马车",
          "amount": 20
        },
        {
          "id": "wls2_resourse_fourfold_instruments_7",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_instruments_7",
          "name": "钼工具",
          "amount": 2
        },
        {
          "id": "wls2_resourse_fourfold_gunparts_7",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_gunparts_7",
          "name": "钼 枪部件",
          "amount": 1
        },
        {
          "id": "wls2_weapon_range_rifle_7_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_7_common",
          "name": "温彻斯特 1907",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_shotgun_7_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_7_common",
          "name": "自动 & 盗贼 枪",
          "amount": 2
        },
        {
          "id": "wls2_weapon_range_rifle_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_7_uncommon",
          "name": "雷明顿8型",
          "amount": 6
        },
        {
          "id": "wls2_weapon_range_shotgun_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_7_uncommon",
          "name": "Sjogren 霰弹枪",
          "amount": 3
        },
        {
          "id": "wls2_weapon_range_rifle_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_7_rare",
          "name": "蒙德拉贡 M1908",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_shotgun_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_7_rare",
          "name": "温彻斯特 模型 1912",
          "amount": 4
        },
        {
          "id": "wls2_building_workshop_recycle_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_7",
          "name": "分解台",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_recycle_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_recycle_7_plus",
          "name": "分解台",
          "amount": 30
        },
        {
          "id": "wls2_collection_clanbase_building_hq_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_hq_5",
          "name": "总部",
          "amount": 3000
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_hall_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_hall_5",
          "name": "建设提交",
          "amount": 750
        },
        {
          "id": "wls2_collection_clanbase_building_saloon_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_saloon_5",
          "name": "酒吧",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_watchtower_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_watchtower_5",
          "name": "瞭望塔",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_food_starage_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_food_starage_5",
          "name": "建设提交",
          "amount": 250
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_bar_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_bar_5",
          "name": "建设提交",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_powerplant_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_powerplant_5",
          "name": "发电站",
          "amount": 3000
        },
        {
          "id": "wls2_collection_clanbase_building_module_powerplant_transformer_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_powerplant_transformer_5",
          "name": "建设提交",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_gold_mine_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_gold_mine_5",
          "name": "金矿",
          "amount": 5000
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_5",
          "name": "建设提交",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_carts_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_carts_5",
          "name": "建设提交",
          "amount": 2000
        },
        {
          "id": "wls2_collection_clanbase_building_train_station_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_train_station_5",
          "name": "铁路车站",
          "amount": 1500
        },
        {
          "id": "wls2_collection_clanbase_building_module_train_station_depot_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_train_station_depot_5",
          "name": "建设提交",
          "amount": 1500
        },
        {
          "id": "wls2_collection_clanbase_building_barrack_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_barrack_5",
          "name": "工棚",
          "amount": 750
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_bedroom_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_bedroom_5",
          "name": "建设提交",
          "amount": 400
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_resting_room_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_resting_room_5",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_building_production_field_7",
          "label": "建设提交",
          "target_id": "wls2_building_production_field_7",
          "name": "田地",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_shed_chicken_7",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_chicken_7",
          "name": "鸡舍",
          "amount": 40
        },
        {
          "id": "wls2_building_workshop_shed_cow_7",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_cow_7",
          "name": "牛棚",
          "amount": 40
        },
        {
          "id": "wls2_building_storage_product_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_product_7",
          "name": "调味品",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_traders_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_5",
          "name": "商人的店铺",
          "amount": 110
        },
        {
          "id": "wls2_collection_clanbase_building_laboratory_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_laboratory_5",
          "name": "实验室",
          "amount": 750
        },
        {
          "id": "wls2_collection_clanbase_building_module_alchemist_table_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_alchemist_table_5",
          "name": "建设提交",
          "amount": 400
        },
        {
          "id": "wls2_collection_clanbase_building_module_distiller_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_distiller_5",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_pagan_place_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_pagan_place_5",
          "name": "力量之地",
          "amount": 750
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_luck_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_luck_5",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_ghost_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_ghost_5",
          "name": "建设提交",
          "amount": 400
        },
        {
          "id": "wls_collection_oil_tower",
          "label": "建设提交",
          "target_id": "wls_collection_oil_tower",
          "name": "油塔",
          "amount": 60
        },
        {
          "id": "wls_collection_oil_tower_1",
          "label": "建设提交",
          "target_id": "wls_collection_oil_tower_1",
          "name": "油塔",
          "amount": 60
        },
        {
          "id": "wls_collection_texas_player_house",
          "label": "建设提交",
          "target_id": "wls_collection_texas_player_house",
          "name": "废弃的房子",
          "amount": 40
        },
        {
          "id": "wls_collection_add_railway",
          "label": "建设提交",
          "target_id": "wls_collection_add_railway",
          "name": "旧 轨道",
          "amount": 60
        },
        {
          "id": "wls2_weapon_range_rifle_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_7_epic",
          "name": "胡奥特自动步枪",
          "amount": 10
        },
        {
          "id": "wls2_weapon_range_shotgun_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_7_epic",
          "name": "伊萨卡 模型 37",
          "amount": 5
        },
        {
          "id": "wls2_weapon_range_bow_7_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_bow_7_common",
          "name": "野马弓",
          "amount": 3
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "57644dff4214f09ca89aac77086d553c34bbb99ba43b51cffb577015f83954f9"
    },
    {
      "id": "wls2_resourse_fourfold_gunparts_7",
      "name": "钼 枪部件",
      "name_en": "Molybdenum gunparts",
      "name_source": "official_zh",
      "description": "制作七级火器所需部件",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "枪械零件",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_fourfold_gunparts_7",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_secondary_plank_7",
              "name": "山核桃木板",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_leather_7",
              "name": "密集皮革",
              "amount": 1
            },
            {
              "id": "wls2_resourse_secondary_ingot_7",
              "name": "钼锭",
              "amount": 4
            },
            {
              "id": "wls2_resourse_miscellaneous_gunpowder_1",
              "name": "火药",
              "amount": 20
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_7",
          "result_name": "钼 枪部件",
          "amount": 1
        },
        {
          "id": "wls2_weapon_ws_day2024_colt_7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_colt_7",
              "name": "周年庆左轮手枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_7",
          "result_name": "钼 枪部件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_ws_day2024_shotgun_7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_shotgun_7",
              "name": "周年庆散弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_7",
          "result_name": "钼 枪部件",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_23_weapon_range_rifle_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_23_weapon_range_rifle_7_epic",
              "name": "极光",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_7",
          "result_name": "钼 枪部件",
          "amount": 7,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_range_halloween_23_pistol_7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_range_halloween_23_pistol_7",
              "name": "恶灵的恐怖",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_7",
          "result_name": "钼 枪部件",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_xmas2024_shotgun_7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_xmas2024_shotgun_7",
              "name": "暴风雪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_fourfold_gunparts_7",
          "result_name": "钼 枪部件",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_weapon_range_revolver_7_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_7_common",
          "name": "纳甘 M1910",
          "amount": 1
        },
        {
          "id": "wls2_weapon_range_rifle_7_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_7_common",
          "name": "温彻斯特 1907",
          "amount": 2
        },
        {
          "id": "wls2_weapon_range_shotgun_7_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_7_common",
          "name": "自动 & 盗贼 枪",
          "amount": 2
        },
        {
          "id": "wls2_weapon_range_revolver_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_7_uncommon",
          "name": "罗斯-斯泰尔 1907",
          "amount": 3
        },
        {
          "id": "wls2_weapon_range_rifle_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_7_uncommon",
          "name": "雷明顿8型",
          "amount": 6
        },
        {
          "id": "wls2_weapon_range_shotgun_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_7_uncommon",
          "name": "Sjogren 霰弹枪",
          "amount": 6
        },
        {
          "id": "wls2_weapon_range_revolver_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_7_rare",
          "name": "伯格曼 火星 1903",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_rifle_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_7_rare",
          "name": "蒙德拉贡 M1908",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_shotgun_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_7_rare",
          "name": "温彻斯特 模型 1912",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_revolver_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_7_epic",
          "name": "火山手枪",
          "amount": 3
        },
        {
          "id": "wls2_weapon_range_rifle_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_7_epic",
          "name": "胡奥特自动步枪",
          "amount": 5
        },
        {
          "id": "wls2_weapon_range_shotgun_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_7_epic",
          "name": "伊萨卡 模型 37",
          "amount": 5
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "47c8b344cc074bda5ec84cee85109b525a6a2be305702a25cbf7c3b23febfd86"
    },
    {
      "id": "wls2_resourse_secondary_leather_7",
      "name": "密集皮革",
      "name_en": "Dense leather",
      "name_source": "official_zh",
      "description": "薄但非常密集的皮革用于制造最现代的盔甲",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "皮革",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_secondary_leather_7",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_7",
              "name": "密集的皮毛",
              "amount": 3
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 1
        },
        {
          "id": "wls2_armor_head_ws_day2024_7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_head_ws_day2024_7",
              "name": "缀满星星的帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_body_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_body_7_epic",
              "name": "圣诞警长外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 10,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_body_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_body_7_epic",
              "name": "炽热骑手衬衫",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 10,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_boots_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_boots_7_epic",
              "name": "圣诞警长靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_boots_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_boots_7_epic",
              "name": "炽热骑手靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_legs_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_legs_7_epic",
              "name": "圣诞警长裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_legs_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_legs_7_epic",
              "name": "炽热骑手裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_battlepass3_armor_head_7_rare",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_battlepass3_armor_head_7_rare",
              "name": "小矮妖帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_battlepass1_armor_head_7_uncommon_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_battlepass1_armor_head_7_uncommon",
              "name": "旅者帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_body_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_body_7_rare",
              "name": "南瓜猎人外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_legs_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_legs_7_rare",
              "name": "南瓜猎人裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_boots_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_boots_7_rare",
              "name": "南瓜猎人靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 3,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_head_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_head_7_rare",
              "name": "南瓜猎人面具",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_21_armor_head_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_head_7_epic",
              "name": "圣诞警长帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_head_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_head_7_epic",
              "name": "炽热 骑手 帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_head_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_head_7_rare",
              "name": "幻影骑士帽子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_body_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_body_7_rare",
              "name": "幽灵骑士的外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 10,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_legs_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_legs_7_rare",
              "name": "幽灵骑士的裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 7,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_boots_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_boots_7_rare",
              "name": "幽灵骑士之靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_xmas2024_head_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_head_7_rare",
              "name": "鹿角头带",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_xmas2024_body_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_body_7_rare",
              "name": "奶奶的复仇",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 10,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_xmas2024_legs_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_legs_7_rare",
              "name": "节日长裤",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 7,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_xmas2024_boots_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_boots_7_rare",
              "name": "节日靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_st_patrick_jacket_t7_2026_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_st_patrick_jacket_t7_2026",
              "name": "爱尔兰运气夹克",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 10,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_head_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_head_7_epic",
              "name": "弹簧 骑手 帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_body_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_body_7_epic",
              "name": "春季 骑手 外套",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 10,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_legs_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_legs_7_epic",
              "name": "春季 骑手 裤子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_boots_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_boots_7_epic",
              "name": "弹簧 骑手 靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_head_easter_7_new_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_head_easter_7_new",
              "name": "蛋猎人帽",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_leather_7",
          "result_name": "密集皮革",
          "amount": 5,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_building_workshop_sewing_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_sewing_7",
          "name": "织布机",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_smelter_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_smelter_7",
          "name": "铸造厂",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_forge_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_7",
          "name": "熔炉",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_forge_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_7_plus",
          "name": "熔炉",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_workshop_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workshop_7",
          "name": "工具工作台",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_workbench_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workbench_7",
          "name": "零件工作台",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_metal_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_metal_7",
          "name": "金属",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_stone_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_stone_7",
          "name": "石头",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_leather_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_leather_7",
          "name": "布料",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_fuel_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_fuel_7",
          "name": "燃料",
          "amount": 20
        },
        {
          "id": "wls2_backpack_cowboy_7_rare_repair",
          "label": "修理",
          "target_id": "wls2_backpack_cowboy_7_rare",
          "name": "里约布拉沃传奇背包",
          "amount": 10
        },
        {
          "id": "wls2_backpack_indian_7_rare_repair",
          "label": "修理",
          "target_id": "wls2_backpack_indian_7_rare",
          "name": "峡谷 精神 包",
          "amount": 10
        },
        {
          "id": "wls2_building_storage_trinket_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_trinket_7",
          "name": "饰品",
          "amount": 20
        },
        {
          "id": "wls2_resourse_fourfold_instruments_7",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_instruments_7",
          "name": "钼工具",
          "amount": 2
        },
        {
          "id": "wls2_resourse_fourfold_gunparts_7",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_gunparts_7",
          "name": "钼 枪部件",
          "amount": 1
        },
        {
          "id": "wls2_backpack_cowboy_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_cowboy_7_rare",
          "name": "里约布拉沃传奇背包",
          "amount": 20
        },
        {
          "id": "wls2_backpack_indian_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_backpack_indian_7_rare",
          "name": "峡谷 精神 包",
          "amount": 20
        },
        {
          "id": "wls2_armor_head_7_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_7_common",
          "name": "野马 帽子",
          "amount": 3
        },
        {
          "id": "wls2_armor_body_7_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_7_common",
          "name": "野马 背心",
          "amount": 5
        },
        {
          "id": "wls2_armor_legs_7_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_7_common",
          "name": "布朗科裤子",
          "amount": 4
        },
        {
          "id": "wls2_armor_boots_7_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_7_common",
          "name": "野马 靴子",
          "amount": 2
        },
        {
          "id": "wls2_armor_head_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_7_uncommon",
          "name": "沙痕帽",
          "amount": 4
        },
        {
          "id": "wls2_armor_body_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_7_uncommon",
          "name": "沙痕背心",
          "amount": 6
        },
        {
          "id": "wls2_armor_legs_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_7_uncommon",
          "name": "沙痕裤",
          "amount": 5
        },
        {
          "id": "wls2_armor_boots_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_7_uncommon",
          "name": "沙痕靴",
          "amount": 3
        },
        {
          "id": "wls2_armor_head_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_7_rare",
          "name": "城市治安官的帽子",
          "amount": 5
        },
        {
          "id": "wls2_armor_body_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_7_rare",
          "name": "城市警长的背心",
          "amount": 10
        },
        {
          "id": "wls2_armor_legs_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_7_rare",
          "name": "城市警长的裤子",
          "amount": 7
        },
        {
          "id": "wls2_armor_boots_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_7_rare",
          "name": "城市治安官的靴子",
          "amount": 4
        },
        {
          "id": "wls2_armor_head_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_head_7_epic",
          "name": "里约布拉沃传奇帽",
          "amount": 6
        },
        {
          "id": "wls2_armor_body_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_body_7_epic",
          "name": "里约布拉沃传奇背心",
          "amount": 10
        },
        {
          "id": "wls2_armor_legs_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_legs_7_epic",
          "name": "里约布拉沃传奇裤子",
          "amount": 8
        },
        {
          "id": "wls2_armor_boots_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_7_epic",
          "name": "里约勇士传奇靴子",
          "amount": 4
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_hall_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_hall_5",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_safe_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_safe_5",
          "name": "建设提交",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_saloon_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_saloon_5",
          "name": "酒吧",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_watchtower_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_watchtower_5",
          "name": "瞭望塔",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_food_starage_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_food_starage_5",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_bar_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_bar_5",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_5",
          "name": "建设提交",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_carts_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_carts_5",
          "name": "建设提交",
          "amount": 250
        },
        {
          "id": "wls2_collection_clanbase_building_train_station_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_train_station_5",
          "name": "铁路车站",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_module_train_station_depot_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_train_station_depot_5",
          "name": "建设提交",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_barrack_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_barrack_5",
          "name": "工棚",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_bedroom_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_bedroom_5",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_resting_room_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_resting_room_5",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_7",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_7",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_weapon_melee_knife_7_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_7_common",
          "name": "德玛格刺刀",
          "amount": 2
        },
        {
          "id": "wls2_weapon_melee_knife_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_7_uncommon",
          "name": "屠夫的刀",
          "amount": 3
        },
        {
          "id": "wls2_weapon_melee_knife_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_7_rare",
          "name": "战壕刀 M1918",
          "amount": 6
        },
        {
          "id": "wls2_mount_equipment_saddle_uncommon_7",
          "label": "工作台制作",
          "target_id": "wls2_mount_equipment_saddle_uncommon_7",
          "name": "牛仔 鞍",
          "amount": 20
        },
        {
          "id": "wls2_mount_equipment_saddle_rare_7",
          "label": "工作台制作",
          "target_id": "wls2_mount_equipment_saddle_rare_7",
          "name": "查罗鞍",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_traders_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_5",
          "name": "商人的店铺",
          "amount": 1600
        },
        {
          "id": "wls2_collection_clanbase_building_laboratory_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_laboratory_5",
          "name": "实验室",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_alchemist_table_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_alchemist_table_5",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_module_distiller_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_distiller_5",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_pagan_place_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_pagan_place_5",
          "name": "力量之地",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_luck_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_luck_5",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_ghost_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_ghost_5",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls_collection_texas_player_house",
          "label": "建设提交",
          "target_id": "wls_collection_texas_player_house",
          "name": "废弃的房子",
          "amount": 40
        },
        {
          "id": "wls2_weapon_melee_knife_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_7_epic",
          "name": "猎人小刀",
          "amount": 3
        },
        {
          "id": "wls2_weapon_range_bow_7_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_bow_7_common",
          "name": "野马弓",
          "amount": 1
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "7c0402762b226916972d6495910ebd459f0b25c65f2e1a5de4f62c4078c7992b"
    },
    {
      "id": "wls2_resourse_secondary_stoneblock_7",
      "name": "水磨石块",
      "name_en": "Terrazzo block",
      "name_source": "official_zh",
      "description": "获得一个独特的外观与大理石和石灰石的混合",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "石块",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_secondary_stoneblock_7",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_stone_5",
              "name": "大理石",
              "amount": 3
            },
            {
              "id": "wls2_resourse_primary_stone_7",
              "name": "石灰石",
              "amount": 5
            }
          ],
          "result_id": "wls2_resourse_secondary_stoneblock_7",
          "result_name": "水磨石块",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_building_workshop_kitchen_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_7",
          "name": "厨房",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_kitchen_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_7_plus",
          "name": "厨房",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_forge_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_7",
          "name": "熔炉",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_forge_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_forge_7_plus",
          "name": "熔炉",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_workshop_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workshop_7",
          "name": "工具工作台",
          "amount": 20
        },
        {
          "id": "wls2_building_workshop_hebalist_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_hebalist_7",
          "name": "草药桌",
          "amount": 5
        },
        {
          "id": "wls2_building_construction_floor_7",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_floor_7",
          "name": "水磨石地板",
          "amount": 20
        },
        {
          "id": "wls2_building_construction_wall_7",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_wall_7",
          "name": "水磨石墙",
          "amount": 20
        },
        {
          "id": "wls2_building_construction_window_7",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_window_7",
          "name": "水磨石窗",
          "amount": 20
        },
        {
          "id": "wls2_building_construction_door_7",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_door_7",
          "name": "水磨石门",
          "amount": 20
        },
        {
          "id": "wls2_collection_clanbase_building_hq_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_hq_5",
          "name": "总部",
          "amount": 3000
        },
        {
          "id": "wls2_collection_clanbase_building_saloon_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_saloon_5",
          "name": "酒吧",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_saloon_bar_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_saloon_bar_5",
          "name": "建设提交",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_powerplant_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_powerplant_5",
          "name": "发电站",
          "amount": 3000
        },
        {
          "id": "wls2_collection_clanbase_building_module_powerplant_transformer_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_powerplant_transformer_5",
          "name": "建设提交",
          "amount": 100
        },
        {
          "id": "wls2_collection_clanbase_building_gold_mine_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_gold_mine_5",
          "name": "金矿",
          "amount": 2500
        },
        {
          "id": "wls2_collection_clanbase_building_train_station_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_train_station_5",
          "name": "铁路车站",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_module_train_station_depot_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_train_station_depot_5",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_barrack_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_barrack_5",
          "name": "工棚",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_laboratory_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_laboratory_5",
          "name": "实验室",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_pagan_place_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_pagan_place_5",
          "name": "力量之地",
          "amount": 1000
        },
        {
          "id": "wls_collection_texas_player_house",
          "label": "建设提交",
          "target_id": "wls_collection_texas_player_house",
          "name": "废弃的房子",
          "amount": 20
        },
        {
          "id": "wls_collection_add_railway",
          "label": "建设提交",
          "target_id": "wls_collection_add_railway",
          "name": "旧 轨道",
          "amount": 40
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "ac2ec3a216fca5a7d1458d08109a7d4d55d7e6ca972dbf321064d18296458231"
    },
    {
      "id": "wls2_resourse_primary_stone_7",
      "name": "石灰石",
      "name_en": "Limestone",
      "name_source": "official_zh",
      "description": "理想的建筑材料，用于意味着持续几代人的结构",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "石材",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_resourse_secondary_stoneblock_7",
          "label": "工作台制作",
          "target_id": "wls2_resourse_secondary_stoneblock_7",
          "name": "水磨石块",
          "amount": 5
        }
      ],
      "locations": [
        "沙痕峡谷",
        "地狱的空洞"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "dd7bebc19af5d39a42c21d0c5cf6d841c5e8ecc31c0bb335132616ce82afdd3d"
    },
    {
      "id": "wls2_resourse_primary_ore_7",
      "name": "钼矿石",
      "name_en": "Molybdenum ore",
      "name_source": "official_zh",
      "description": "可以熔炼成钼锭",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "矿石",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_resourse_secondary_ingot_7",
          "label": "工作台制作",
          "target_id": "wls2_resourse_secondary_ingot_7",
          "name": "钼锭",
          "amount": 2
        }
      ],
      "locations": [
        "地狱的空洞",
        "沙痕峡谷"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "913d2fc5dcde9f86a724f97cd79830255b83637e0aab4b6e707f82df05fcd3b4"
    },
    {
      "id": "wls2_resourse_primary_fiber_7",
      "name": "羊毛",
      "name_en": "Wool",
      "name_source": "official_zh",
      "description": "用于制作羊毛布的天然材料",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "纤维",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_resourse_secondary_cloth_7",
          "label": "工作台制作",
          "target_id": "wls2_resourse_secondary_cloth_7",
          "name": "羊毛 布料",
          "amount": 3
        }
      ],
      "locations": [
        "多刺湖",
        "沙痕峡谷"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "0e2d41b3dc020b07149c50272598addaed18b722ba030ee5c8d4f67d621de2a1"
    },
    {
      "id": "wls2_resourse_secondary_rope_7",
      "name": "皮带",
      "name_en": "Leather belt",
      "name_source": "official_zh",
      "description": "鉴于其耐用性，非常适合建筑和设备制作",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "绳索",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_secondary_rope_7",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_hide_7",
              "name": "密集的皮毛",
              "amount": 5
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_7",
          "result_name": "皮带",
          "amount": 1
        },
        {
          "id": "wls2_xmas_21_armor_boots_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_21_armor_boots_7_epic",
              "name": "圣诞警长靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_7",
          "result_name": "皮带",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_bp_season_flame_armor_boots_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_bp_season_flame_armor_boots_7_epic",
              "name": "炽热骑手靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_7",
          "result_name": "皮带",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_22_armor_boots_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_22_armor_boots_7_rare",
              "name": "南瓜猎人靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_7",
          "result_name": "皮带",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_halloween_23_armor_boots_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_halloween_23_armor_boots_7_rare",
              "name": "幽灵骑士之靴",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_7",
          "result_name": "皮带",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_xmas2024_boots_7_rare_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_xmas2024_boots_7_rare",
              "name": "节日靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_7",
          "result_name": "皮带",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_armor_easter_2026_boots_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_armor_easter_2026_boots_7_epic",
              "name": "弹簧 骑手 靴子",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_rope_7",
          "result_name": "皮带",
          "amount": 6,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls_fishing_rod_t7",
          "label": "工作台制作",
          "target_id": "wls_fishing_rod_t7",
          "name": "山核桃 钓鱼杆",
          "amount": 3
        },
        {
          "id": "wls2_building_workshop_smelter_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_smelter_7",
          "name": "铸造厂",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_stone_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_stone_7",
          "name": "石头",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_weapon_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_weapon_7",
          "name": "武器",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_armor_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_armor_7",
          "name": "护甲",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_fuel_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_fuel_7",
          "name": "燃料",
          "amount": 20
        },
        {
          "id": "wls2_building_storage_trinket_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_trinket_7",
          "name": "饰品",
          "amount": 20
        },
        {
          "id": "wls2_armor_boots_7_common",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_7_common",
          "name": "野马 靴子",
          "amount": 2
        },
        {
          "id": "wls2_armor_boots_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_7_uncommon",
          "name": "沙痕靴",
          "amount": 3
        },
        {
          "id": "wls2_armor_boots_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_7_rare",
          "name": "城市治安官的靴子",
          "amount": 4
        },
        {
          "id": "wls2_armor_boots_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_armor_boots_7_epic",
          "name": "里约勇士传奇靴子",
          "amount": 6
        },
        {
          "id": "wls2_collection_clanbase_building_watchtower_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_watchtower_5",
          "name": "瞭望塔",
          "amount": 500
        },
        {
          "id": "wls2_collection_clanbase_building_powerplant_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_powerplant_5",
          "name": "发电站",
          "amount": 750
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_5",
          "name": "建设提交",
          "amount": 1000
        },
        {
          "id": "wls2_building_workshop_pet_enclosure_7",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_pet_enclosure_7",
          "name": "宠物小屋",
          "amount": 20
        },
        {
          "id": "wls2_weapon_range_bow_7_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_bow_7_common",
          "name": "野马弓",
          "amount": 3
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "bb7bacb69c2bb4d09f08dbaa91730475449ce40e445f3391d0f5cfc0b48066c5"
    },
    {
      "id": "wls2_resourse_secondary_ingot_7",
      "name": "钼锭",
      "name_en": "Molybdenum ingot",
      "name_source": "official_zh",
      "description": "两种矿石类型的混合提供了最高可能的密度",
      "category": "material",
      "category_label": "资源与材料",
      "subcategory": "金属锭",
      "tier": 7,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [],
      "uses": [],
      "recipes": [
        {
          "id": "wls2_resourse_secondary_ingot_7",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_primary_ore_3",
              "name": "铁矿石",
              "amount": 8
            },
            {
              "id": "wls2_resourse_primary_ore_7",
              "name": "钼矿石",
              "amount": 2
            },
            {
              "id": "wls2_resourse_primary_coal_3",
              "name": "煤",
              "amount": 2
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_7",
          "result_name": "钼锭",
          "amount": 1
        },
        {
          "id": "wls2_weapon_ws_day2024_colt_7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_colt_7",
              "name": "周年庆左轮手枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_7",
          "result_name": "钼锭",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_ws_day2024_shotgun_7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_ws_day2024_shotgun_7",
              "name": "周年庆散弹枪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_7",
          "result_name": "钼锭",
          "amount": 8,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_xmas_23_weapon_range_rifle_7_epic_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_xmas_23_weapon_range_rifle_7_epic",
              "name": "极光",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_7",
          "result_name": "钼锭",
          "amount": 7,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_range_halloween_23_pistol_7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_range_halloween_23_pistol_7",
              "name": "恶灵的恐怖",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_7",
          "result_name": "钼锭",
          "amount": 7,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        },
        {
          "id": "wls2_weapon_xmas2024_shotgun_7_recycle",
          "label": "回收获得",
          "direction": "recycle_source",
          "ingredients": [
            {
              "id": "wls2_weapon_xmas2024_shotgun_7",
              "name": "暴风雪",
              "amount": 1
            }
          ],
          "result_id": "wls2_resourse_secondary_ingot_7",
          "result_name": "钼锭",
          "amount": 4,
          "note": "回收产物；实际返还可能受装备耐久与回收规则影响"
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_tools_axe_7",
          "label": "工作台制作",
          "target_id": "wls2_tools_axe_7",
          "name": "钼斧头",
          "amount": 1
        },
        {
          "id": "wls2_tools_pickaxe_7",
          "label": "工作台制作",
          "target_id": "wls2_tools_pickaxe_7",
          "name": "钼 镐",
          "amount": 1
        },
        {
          "id": "wls2_building_workshop_kitchen_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_7",
          "name": "厨房",
          "amount": 10
        },
        {
          "id": "wls2_building_workshop_kitchen_7_plus",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_kitchen_7_plus",
          "name": "厨房",
          "amount": 15
        },
        {
          "id": "wls2_building_workshop_workbench_7",
          "label": "建筑制作",
          "target_id": "wls2_building_workshop_workbench_7",
          "name": "零件工作台",
          "amount": 3
        },
        {
          "id": "wls2_building_storage_weapon_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_weapon_7",
          "name": "武器",
          "amount": 2
        },
        {
          "id": "wls2_building_storage_armor_7",
          "label": "建筑制作",
          "target_id": "wls2_building_storage_armor_7",
          "name": "护甲",
          "amount": 2
        },
        {
          "id": "wls2_building_construction_floor_7",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_floor_7",
          "name": "水磨石地板",
          "amount": 2
        },
        {
          "id": "wls2_building_construction_wall_7",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_wall_7",
          "name": "水磨石墙",
          "amount": 2
        },
        {
          "id": "wls2_building_construction_window_7",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_window_7",
          "name": "水磨石窗",
          "amount": 2
        },
        {
          "id": "wls2_building_construction_door_7",
          "label": "建筑制作",
          "target_id": "wls2_building_construction_door_7",
          "name": "水磨石门",
          "amount": 2
        },
        {
          "id": "wls2_building_storage_safe_5",
          "label": "建设提交",
          "target_id": "wls2_building_storage_safe_5",
          "name": "保险箱",
          "amount": 16
        },
        {
          "id": "wls2_resourse_fourfold_instruments_7",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_instruments_7",
          "name": "钼工具",
          "amount": 1
        },
        {
          "id": "wls2_resourse_fourfold_nails_7",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_nails_7",
          "name": "钼紧固件",
          "amount": 2
        },
        {
          "id": "wls2_resourse_fourfold_gunparts_7",
          "label": "工作台制作",
          "target_id": "wls2_resourse_fourfold_gunparts_7",
          "name": "钼 枪部件",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_revolver_7_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_7_common",
          "name": "纳甘 M1910",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_rifle_7_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_7_common",
          "name": "温彻斯特 1907",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_shotgun_7_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_7_common",
          "name": "自动 & 盗贼 枪",
          "amount": 4
        },
        {
          "id": "wls2_weapon_range_revolver_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_7_uncommon",
          "name": "罗斯-斯泰尔 1907",
          "amount": 6
        },
        {
          "id": "wls2_weapon_range_rifle_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_7_uncommon",
          "name": "雷明顿8型",
          "amount": 6
        },
        {
          "id": "wls2_weapon_range_shotgun_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_7_uncommon",
          "name": "Sjogren 霰弹枪",
          "amount": 6
        },
        {
          "id": "wls2_weapon_range_revolver_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_7_rare",
          "name": "伯格曼 火星 1903",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_rifle_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_7_rare",
          "name": "蒙德拉贡 M1908",
          "amount": 8
        },
        {
          "id": "wls2_weapon_range_shotgun_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_7_rare",
          "name": "温彻斯特 模型 1912",
          "amount": 8
        },
        {
          "id": "wls2_collection_clanbase_building_hq_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_hq_5",
          "name": "总部",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_hq_safe_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_hq_safe_5",
          "name": "建设提交",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_module_powerplant_transformer_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_powerplant_transformer_5",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_gold_mine_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_gold_mine_5",
          "name": "金矿",
          "amount": 300
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_alluving_bench_5",
          "name": "建设提交",
          "amount": 1000
        },
        {
          "id": "wls2_collection_clanbase_building_module_gold_mine_carts_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_gold_mine_carts_5",
          "name": "建设提交",
          "amount": 750
        },
        {
          "id": "wls2_collection_clanbase_building_module_train_station_depot_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_train_station_depot_5",
          "name": "建设提交",
          "amount": 200
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_bedroom_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_bedroom_5",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_barrack_resting_room_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_barrack_resting_room_5",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_building_workshop_shed_chicken_7",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_chicken_7",
          "name": "鸡舍",
          "amount": 40
        },
        {
          "id": "wls2_building_workshop_shed_cow_7",
          "label": "建设提交",
          "target_id": "wls2_building_workshop_shed_cow_7",
          "name": "牛棚",
          "amount": 40
        },
        {
          "id": "wls2_weapon_melee_knife_7_common",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_7_common",
          "name": "德玛格刺刀",
          "amount": 1
        },
        {
          "id": "wls2_weapon_melee_knife_7_uncommon",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_7_uncommon",
          "name": "屠夫的刀",
          "amount": 2
        },
        {
          "id": "wls2_weapon_melee_knife_7_rare",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_7_rare",
          "name": "战壕刀 M1918",
          "amount": 4
        },
        {
          "id": "wls2_collection_clanbase_building_traders_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_traders_5",
          "name": "商人的店铺",
          "amount": 130
        },
        {
          "id": "wls2_collection_clanbase_building_module_alchemist_table_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_alchemist_table_5",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_distiller_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_distiller_5",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_luck_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_luck_5",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls2_collection_clanbase_building_module_totems_ghost_5",
          "label": "建设提交",
          "target_id": "wls2_collection_clanbase_building_module_totems_ghost_5",
          "name": "建设提交",
          "amount": 50
        },
        {
          "id": "wls_collection_oil_tower",
          "label": "建设提交",
          "target_id": "wls_collection_oil_tower",
          "name": "油塔",
          "amount": 10
        },
        {
          "id": "wls_collection_oil_tower_1",
          "label": "建设提交",
          "target_id": "wls_collection_oil_tower_1",
          "name": "油塔",
          "amount": 10
        },
        {
          "id": "wls_collection_add_railway",
          "label": "建设提交",
          "target_id": "wls_collection_add_railway",
          "name": "旧 轨道",
          "amount": 20
        },
        {
          "id": "wls2_weapon_range_revolver_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_revolver_7_epic",
          "name": "火山手枪",
          "amount": 10
        },
        {
          "id": "wls2_weapon_range_rifle_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_rifle_7_epic",
          "name": "胡奥特自动步枪",
          "amount": 10
        },
        {
          "id": "wls2_weapon_range_shotgun_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_range_shotgun_7_epic",
          "name": "伊萨卡 模型 37",
          "amount": 10
        },
        {
          "id": "wls2_weapon_melee_knife_7_epic",
          "label": "工作台制作",
          "target_id": "wls2_weapon_melee_knife_7_epic",
          "name": "猎人小刀",
          "amount": 2
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "3d9c9b4dcfe4feeb208135576bd7b798aa1a0feb73e5d520ff3d400343bb5d8e"
    },
    {
      "id": "wls2_consumable_wls_day_2026_pie",
      "name": "先锋的蛋糕",
      "name_en": "Pioneer's Cake",
      "name_source": "official_zh",
      "description": "提高统计数据，帮助牛仔发挥他们最好的表现",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": null,
      "rarity": "epic",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [
        {
          "id": "wls2_consumable_wls_day_2026_pie_critical_hit_chance",
          "label": "暴击率",
          "value": 8.0,
          "unit": "%",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_wls_day_2026_pie_temp_strength",
          "label": "力量",
          "value": 8,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_wls_day_2026_pie_dexterity",
          "label": "攻击速度",
          "value": 8,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_wls_day_2026_pie_temp_stamina",
          "label": "体力属性",
          "value": 8,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_wls_day_2026_pie_temp_spirit",
          "label": "精神",
          "value": 8,
          "unit": "",
          "duration": 1800,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "5d75323a29eb79d1a730fd45bc7a6af6ae951b41900d1168a248c9127cbb6ce9"
    },
    {
      "id": "wls2_gingerbread_food_xmas_2025",
      "name": "姜饼",
      "name_en": "Gingerbread",
      "name_source": "official_zh",
      "description": "甜蜜，香料，和不可能抗拒",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": null,
      "rarity": "rare",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 40,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_gingerbread_food_xmas_temp_damage",
          "label": "增加对佩戴节日帽子的目标的伤害",
          "value": 25.0,
          "unit": "%",
          "duration": 1800,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "3220e948a952e673fad2b3993359f16e9d2ff2dc39db5ab94262afa18b6483a3",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_fortune_cookie",
      "name": "幸运饼干",
      "name_en": "Fortune cookie",
      "name_source": "official_zh",
      "description": "打开它，咬一口，让所有负面效果消失。",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": null,
      "rarity": "rare",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 40,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_fortune_cookie_debuffs_resistance_modifier",
          "label": "负面效果抗性",
          "value": 100,
          "unit": "%",
          "duration": 1800,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "cd137f983752b599e1b9098df9c6890128eb39c118852e22c9ad543a0140835a",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_easter_bun",
      "name": "春天 节日 面包",
      "name_en": "Spring Fair Loaf",
      "name_source": "official_zh",
      "description": "屏蔽你免受火焰并使野兔鹿成为更容易的目标",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": null,
      "rarity": "rare",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 40,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_easter_bun_temp_fire_resistance",
          "label": "耐火性",
          "value": 100,
          "unit": "%",
          "duration": 3600,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_easter_bun_easter_temp_damage",
          "label": "杰克兔的损害",
          "value": 25.0,
          "unit": "%",
          "duration": 1800,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "0be7a53b1dbe1f73d033645af675b0d2252e0e43689aa1ac94210918c992923a",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_valentines_day_cakes",
      "name": "甜心",
      "name_en": "Sweet hearts",
      "name_source": "official_zh",
      "description": "心形饼干让你拥有丘比特的瞄准",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": null,
      "rarity": "rare",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 40,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_valentines_day_cakes_bow_damage_modifier",
          "label": "弓箭 奖金",
          "value": 25.0,
          "unit": "%",
          "duration": 1800,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "45a9949c7fca12f36113d3d2c91c62a1b03d9a0960906d119382b8753af3f7ae",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_steam_food",
      "name": "节日 蛋糕",
      "name_en": "Festive cake",
      "name_source": "official_zh",
      "description": "蛋糕是谎言！ 但它的效果是真实的 —— 仅在Steam上！",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": null,
      "rarity": "epic",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 40,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_steam_food_temp_crit_chance",
          "label": "暴击率",
          "value": 100,
          "unit": "%",
          "duration": 1800,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "737292769079370cd9934554c1ac500f3cd117dce5dae4c68619f85d461bce9b",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 40,
            "display": "40 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_coffee",
      "name": "口香糖",
      "name_en": "Chewing gum",
      "name_source": "official_zh",
      "description": "由天然树胶制成，恢复一些能量",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "糖果",
      "tier": null,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "energy",
          "label": "恢复体力",
          "value": 2,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [
        "列车袭击",
        "临时停车点",
        "枪战地点",
        "古道",
        "藏匿处"
      ],
      "workbenches": [],
      "blueprints": [],
      "image_key": "6d89dd0129c9101387581ba7e672811e612d835f27bb8b64ab9e6e30f910602e",
      "numeric": {
        "summary": [
          {
            "key": "energy",
            "label": "恢复体力",
            "unit": "",
            "value": 2,
            "display": "2"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_xmas_21_consumable_candy",
      "name": "集市糖果",
      "name_en": "Fair sweet",
      "name_source": "official_zh",
      "description": "使用节日亮色纸包装的糖果。狂欢也别忘记补充能量！吃颗糖吧！",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "糖果",
      "tier": null,
      "rarity": "common",
      "max_stack": 50,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "energy",
          "label": "恢复体力",
          "value": 5,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_xmas_21_trader_candy",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_xmas_23_currency_firework",
              "name": "爆竹",
              "amount": 2
            },
            {
              "id": "wls2_xmas_25_currency_firework",
              "name": "爆竹",
              "amount": 2
            }
          ],
          "result_id": "wls2_xmas_21_consumable_candy",
          "result_name": "集市糖果",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [
        {
          "id": "wls2_collection_xmas_23_tree_2",
          "label": "建设提交",
          "target_id": "wls2_collection_xmas_23_tree_2",
          "name": "建设提交",
          "amount": 20
        },
        {
          "id": "wls2_collection_xmas_24_tree_2",
          "label": "建设提交",
          "target_id": "wls2_collection_xmas_24_tree_2",
          "name": "建设提交",
          "amount": 20
        }
      ],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "23284713edfdb7602fb449909a185a77479545589646ff225b39019c48f0cc7b",
      "numeric": {
        "summary": [
          {
            "key": "energy",
            "label": "恢复体力",
            "unit": "",
            "value": 5,
            "display": "5"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_st_patricks_day_beer",
      "name": "爱尔兰 品脱",
      "name_en": "Irish Pint",
      "name_source": "official_zh",
      "description": "一个幸运的爱尔兰酿造，帮助你击中真实并且溜过危险",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "饮品",
      "tier": null,
      "rarity": "rare",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [],
      "effects": [
        {
          "id": "wls2_consumable_st_patricks_day_beer_temp_dexterity",
          "label": "闪避率",
          "value": 5.0,
          "unit": "%",
          "duration": 1800,
          "duration_unit": "秒"
        },
        {
          "id": "wls2_consumable_st_patricks_day_beer_temp_critical_hit_chance",
          "label": "暴击率",
          "value": 5.0,
          "unit": "%",
          "duration": 1800,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "5b9c82bd74cb69e98bc9992a6399962ae5d13696260fb30138baf8b3c7745426"
    },
    {
      "id": "wls2_consumable_grilled_meat_1_common",
      "name": "烤肉",
      "name_en": "Grilled Meat",
      "name_source": "official_zh",
      "description": "一道简单而美味的菜肴，因其易得的食材和简单的烹饪技巧而受欢迎",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 1,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 10,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_grilled_meat_temp_health",
          "label": "生命上限增加",
          "value": 20,
          "unit": "",
          "duration": 7200,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_static_town_trader_offer_food_bonfire_2",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_grilled_meat_1_common",
          "result_name": "烤肉",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_town_npc_butcher_trader_food_dryer_1_recipe",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_grilled_meat_1_common",
          "result_name": "烤肉",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_consumable_grilled_meat_1_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_resourse_miscellaneous_meat_1",
              "name": "硬肉",
              "amount": 1
            }
          ],
          "result_id": "wls2_consumable_grilled_meat_1_common",
          "result_name": "烤肉",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "2fafa25aa90e0aa9352dbab691cd508c380bae04f640a3f35a487b9d084e7471",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 10,
            "display": "10 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls2_consumable_corn_porridge_1_common",
      "name": "玉米燕麦",
      "name_en": "Corn Porridge",
      "name_source": "official_zh",
      "description": "边疆经典，因其简单而美味的吸引力而备受推崇，提供了丰盛和美味的口感体验",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "料理",
      "tier": 1,
      "rarity": "common",
      "max_stack": 20,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "hunger",
          "label": "恢复饱食",
          "value": 100,
          "unit": "点"
        },
        {
          "id": "health_regen",
          "label": "持续恢复生命",
          "value": 10,
          "unit": "点"
        }
      ],
      "effects": [
        {
          "id": "wls2_consumable_corn_porridge_temp_health",
          "label": "生命上限增加",
          "value": 20,
          "unit": "",
          "duration": 7200,
          "duration_unit": "秒"
        }
      ],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_static_town_trader_offer_food_kitchen_0",
          "label": "交易兑换",
          "ingredients": [],
          "result_id": "wls2_consumable_corn_porridge_1_common",
          "result_name": "玉米燕麦",
          "amount": 1,
          "note": "此条目定义未列出固定兑换材料"
        },
        {
          "id": "wls2_consumable_corn_porridge_1_common",
          "label": "工作台制作",
          "ingredients": [
            {
              "id": "wls2_consumable_corn_1",
              "name": "玉米",
              "amount": 2
            }
          ],
          "result_id": "wls2_consumable_corn_porridge_1_common",
          "result_name": "玉米燕麦",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "332e8ce99b07cd9d06adf4d07d6ef86dab2d43154a82ad3ae17b6d26a1dc2022",
      "numeric": {
        "summary": [
          {
            "key": "hunger",
            "label": "恢复饱食",
            "unit": "点",
            "value": 100,
            "display": "100 点"
          },
          {
            "key": "health_regen",
            "label": "持续恢复生命",
            "unit": "点",
            "value": 10,
            "display": "10 点"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    },
    {
      "id": "wls_halloween_candy",
      "name": "万圣节糖果",
      "name_en": "Halloween candy",
      "name_source": "official_zh",
      "description": "一种看上去很亮眼吃上去像南瓜一样的节日糖果。吃一块就能感觉到力量在体内涌动",
      "category": "food",
      "category_label": "食物与饮品",
      "subcategory": "糖果",
      "tier": 1,
      "rarity": "common",
      "max_stack": 50,
      "bound": false,
      "legacy": false,
      "placeholder_image": false,
      "equipment_id": null,
      "stats": [
        {
          "id": "energy",
          "label": "恢复体力",
          "value": 5,
          "unit": ""
        }
      ],
      "effects": [],
      "uses": [
        "使用后恢复对应属性"
      ],
      "recipes": [
        {
          "id": "wls2_halloween_event_trade_candy",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_event_currency_pumpkin",
              "name": "不祥的南瓜",
              "amount": 5
            }
          ],
          "result_id": "wls_halloween_candy",
          "result_name": "万圣节糖果",
          "amount": 1
        },
        {
          "id": "wls2_halloween_21_trader_candy",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_25_currency_pumpkin",
              "name": "幽灵南瓜",
              "amount": 2
            }
          ],
          "result_id": "wls_halloween_candy",
          "result_name": "万圣节糖果",
          "amount": 1
        },
        {
          "id": "wls2_halloween_21_trader_wls_halloween_candy",
          "label": "交易兑换",
          "ingredients": [
            {
              "id": "wls2_halloween_25_currency_pumpkin",
              "name": "幽灵南瓜",
              "amount": 2
            }
          ],
          "result_id": "wls_halloween_candy",
          "result_name": "万圣节糖果",
          "amount": 1
        }
      ],
      "recycle_results": [],
      "used_in": [],
      "locations": [],
      "workbenches": [],
      "blueprints": [],
      "image_key": "6378566e8bdbbee667811cd277621e83344a97532bde7ce6fbc76a8dc8b92485",
      "numeric": {
        "summary": [
          {
            "key": "energy",
            "label": "恢复体力",
            "unit": "",
            "value": 5,
            "display": "5"
          }
        ],
        "fixed": [],
        "levels": [],
        "columns": [],
        "notes": [],
        "level_label": "物品等级",
        "default_level": null
      }
    }
  ]
};
