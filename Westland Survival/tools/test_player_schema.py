import copy
from pathlib import Path
import tempfile
import unittest

import extract_legacy
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


if __name__ == '__main__':
    unittest.main()
