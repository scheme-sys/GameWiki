import copy
from pathlib import Path
import tempfile
import unittest

import extract_legacy
import update_lazy
from player_schema import sanitize, find_unsafe, read_data


class PlayerSchemaTests(unittest.TestCase):
    def equipment(self):
        return {'section': 'equipment', 'records': [{
            'item_id': 'kept-item', 'category': 'weapon', 'tier': 4,
            'numeric': {'columns': [{'key': 'damage', 'label': '伤害'}], 'levels': [{'level': 1, 'values': {'damage': 240}}]},
            '_wiki': {'description_zh': '玩家说明', 'import_comment': 'unneeded'},
            'inventory_stack': {'equip_behaviour': {'type': 'internal-test'}, 'name_key': 'unneeded-localization-key'},
            'source': {'table': 'unneeded-table'}, 'audit': {'imported': True},
        }]}

    def test_equipment_keeps_association_and_exact_numbers_without_raw_configuration(self):
        original = self.equipment()
        cleaned = sanitize('wiki-assets/wiki/data/chunks/equipment-0.js', original)
        row = cleaned['records'][0]
        self.assertEqual(row['numeric'], original['records'][0]['numeric'])
        self.assertEqual(row['item_id'], 'kept-item')
        self.assertEqual(row['_wiki'], {'description_zh': '玩家说明'})
        self.assertFalse({'source', 'audit', 'inventory_stack'} & row.keys())
        self.assertEqual(sanitize('wiki-assets/wiki/data/chunks/equipment-0.js', cleaned), cleaned)
        self.assertEqual(find_unsafe(cleaned), [])

    def test_mesh_geometry_and_material_mapping_are_preserved(self):
        original = {'mesh-one': {'positions': 'AAAA', 'indices': 'AA==', 'normals': 'BBBB', 'uv': 'CCCC',
                                'material': 'material-one', 'transform': [1, 0, 0, 1],
                                'source': {'assetFile': 'unneeded'}, 'sourcePrefabAddress': 'unneeded', 'attachmentBone': 'unused'}}
        cleaned = sanitize('wiki-assets/lab/data/avatar-meshes.js', original)
        for key in ['positions', 'indices', 'normals', 'uv', 'material', 'transform']:
            self.assertEqual(cleaned['mesh-one'][key], original['mesh-one'][key])
        self.assertEqual(set(cleaned['mesh-one']), {'positions', 'indices', 'normals', 'uv', 'material', 'transform'})

    def test_food_warning_retains_only_the_runtime_relevant_value(self):
        original = {'sourceEvidence': [{'description': '游戏静态资料', 'path': 'unused-import-path'}],
                    'playerDefaults': {'health': 200, 'evidence': 'unused'}, 'accessories': [], 'skills': [], 'animals': [],
                    'foods': [{'id': 'food-one', 'heal': 15, 'sourceStats': {'health_regen': 3, 'irrelevant': 999},
                               'sourceEffects': [{'unused': True}], 'unsupportedEffects': {'example': {'unused': True}}}],
                    'notes': [], 'images': {}}
        cleaned = sanitize('wiki-assets/lab/data/loadout.js', original)
        self.assertEqual(cleaned['foods'][0]['passiveHealingRate'], 3)
        self.assertEqual(cleaned['foods'][0]['heal'], 15)
        self.assertEqual(cleaned['foods'][0]['unsupportedEffects'], {'example': True})
        self.assertEqual(cleaned['sourceDescription'], ['游戏静态资料'])
        self.assertEqual(find_unsafe(cleaned), [])

    def test_legacy_importer_applies_the_schema_before_writing(self):
        with tempfile.TemporaryDirectory() as directory:
            previous = extract_legacy.ROOT
            try:
                extract_legacy.ROOT = Path(directory)
                relative = 'wiki-assets/wiki/data/chunks/equipment-0.js'
                original = self.equipment()
                untouched = copy.deepcopy(original)
                extract_legacy.write_data(relative, 'window.TEST_PLAYER_DATA', original)
                self.assertEqual(original, untouched)
                self.assertEqual(read_data(Path(directory) / relative), sanitize(relative, original))
            finally:
                extract_legacy.ROOT = previous

    def test_importer_rejects_unrecognized_technical_text_before_writing(self):
        with tempfile.TemporaryDirectory() as directory:
            previous = extract_legacy.ROOT
            try:
                extract_legacy.ROOT = Path(directory)
                relative = 'wiki-assets/wiki/data/chunks/equipment-0.js'
                original = self.equipment()
                original['records'][0]['_wiki']['description_zh'] = 'example.bundle'
                with self.assertRaises(ValueError):
                    extract_legacy.write_data(relative, 'window.TEST_PLAYER_DATA', original)
                self.assertFalse((Path(directory) / relative).exists())
            finally:
                extract_legacy.ROOT = previous

    def test_unregistered_data_files_and_metadata_are_rejected(self):
        with self.assertRaises(ValueError):
            sanitize('wiki-assets/lab/data/new-raw-file.js', {})
        self.assertTrue(find_unsafe({'raw': {'unused': True}}))
        self.assertTrue(find_unsafe({'description': 'example.bundle'}))


class LazyArchiveTests(unittest.TestCase):
    def test_first_page_keeps_full_counts_filters_and_original_data(self):
        rows = [{'id': 'item-' + str(number), 'name': '物品 ' + str(number), 'category': 'weapon',
                 'subcategory': '末尾类型' if number == 70 else '普通类型', 'tier': number,
                 'rarity': 'epic' if number == 70 else 'common'} for number in range(70, 0, -1)]
        original = {'meta': {'version': 'test'}, 'images': {}, 'equipment': [],
                    'inventory': {'categories': [{'id': 'weapon', 'label': '武器', 'count': 70}], 'items': rows},
                    'pets': [{'id': 'pet-one'}], 'decor': [], 'skin_catalog': [], 'perks': {}}
        untouched = copy.deepcopy(original)
        initial = update_lazy.bootstrap(original)
        self.assertEqual([row['id'] for row in initial['inventory']['items']], ['item-' + str(n) for n in range(1, 61)])
        self.assertEqual(initial['_bootstrap']['counts']['items'], 70)
        self.assertEqual(initial['_bootstrap']['counts']['pets'], 1)
        self.assertEqual(initial['_bootstrap']['counts']['all'], 71)
        self.assertIn('末尾类型', [row['value'] for row in initial['_bootstrap']['filters']['subcategory']])
        self.assertIn(70, initial['_bootstrap']['filters']['tier'])
        self.assertIn('epic', initial['_bootstrap']['filters']['rarity'])
        self.assertEqual(original, untouched)
        self.assertEqual(sanitize('wiki-assets/wiki/data/bootstrap.js', initial), initial)

    def test_dynamic_versions_change_only_with_their_own_file_contents(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            paths = ['wiki/data/index.js', 'wiki/app.js', 'lab/data/avatar.js', 'lab/data/avatar-meshes.js',
                     'lab/data/avatar-textures.js', 'lab/data/offline-textures.js', 'lab/offline-textures.js',
                     'lab/loadout-avatar3d-engine.js', 'wiki/data/chunks/inventory-0.js']
            for path in paths:
                file = root / 'wiki-assets' / path
                file.parent.mkdir(parents=True, exist_ok=True)
                file.write_text('original', encoding='utf-8')
            before = update_lazy.resource_map(root)
            target = 'wiki/data/chunks/inventory-0.js'
            (root / 'wiki-assets' / target).write_text('updated', encoding='utf-8')
            after = update_lazy.resource_map(root)
            self.assertEqual([key for key in paths if before['files'][key] != after['files'][key]], [target])
            self.assertRegex(after['files'][target], r'inventory-0\.js\?v=[a-f0-9]{64}$')


if __name__ == '__main__':
    unittest.main()
