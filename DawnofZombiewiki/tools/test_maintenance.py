"""Small source fixtures exercise maintenance without copying the image archive."""
import csv
import hashlib
import io
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

from wiki_data import ROOT, csv_bytes, generated_files, json_bytes, load_data, player_exports, read_js_json
from verify_data import verify


class MaintenanceTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name) / 'DawnofZombiewiki'
        self.root.mkdir()
        image = b'unchanged image bytes'
        image_path = 'assets/images/example#1.png'
        self.catalog = {
            'meta': {'version': 'fixture', 'builtAt': 'fixed'}, 'categories': [],
            'entries': [{'id': 123456, 'name': '=danger', 'nameEn': 'Sample',
                         'category': 'weapon', 'visible': True, 'stats': [{'label': '伤害', 'value': '230–240'}, {'label': '间隔', 'value': 0.87}],
                         'image': image_path, 'abilities': [{'name': '技能', 'description': '造成额外伤害', 'cooldown': 9}], 'sourceHints': [],
                         'scenarioStats': [{'label': '场景生命候选', 'value': '220–900', 'attackInterval': 1.2, 'levels': [{'minLevel': 1, 'maxLevel': 15, 'value': 220}]}]},
                        {'id': 999, 'name': 'HIDDEN_ROW', 'category': 'weapon', 'visible': False}],
            'recipes': [], 'locations': [], 'quests': [], 'companions': [], 'skills': [], 'notes': [], 'factions': [], 'sets': [],
        }
        self.mechanics = {'guides': [{'title': f'Guide {index}', 'summary': 'Summary', 'sections': [{'title': 'Section', 'paragraphs': ['Unchanged paragraph.']}]} for index in range(7)]}
        self.assets = {'version': 'fixture', 'hero': image_path,
                       'images': [{'path': image_path, 'bytes': len(image), 'categoryLabel': '武器'}]}
        for name, data in [('catalog', self.catalog), ('mechanics', self.mechanics), ('asset-map', self.assets)]:
            self.write(f'data/{name}.json', json_bytes(data))
        self.write(image_path, image)
        self.write('reports/image-manifest.json', json_bytes([{'path': image_path, 'bytes': len(image), 'sha256': hashlib.sha256(image).hexdigest()}]))
        self.write('index.html', b'<script src="../assets/shared.js"></script>')
        self.write('app.js', b'// page code stays unchanged')
        (self.root.parent / 'assets').mkdir()
        (self.root.parent / 'assets/shared.js').write_text('window.shared = true;', encoding='utf-8')
        for name, content in player_exports(*load_data(self.root)).items():
            self.write(name, content)
        self.refresh()

    def write(self, name, content):
        path = self.root / name
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(content)

    def refresh(self):
        for name, content in generated_files(self.root).items():
            self.write(name, content)

    def command(self, *args):
        return subprocess.run([sys.executable, str(ROOT / 'tools/update_data.py'), '--root', str(self.root), *args], capture_output=True, text=True)

    def test_exports_include_player_values_and_exclude_internal_fields(self):
        value = player_exports(*load_data(self.root))['data/player/武器图鉴.csv'].decode('utf-8-sig')
        rows = list(csv.reader(io.StringIO(value, newline='')))
        self.assertEqual(len(rows), 2)
        self.assertEqual(rows[1][0], "'=danger")
        self.assertIn('230–240', rows[1][5])
        self.assertIn('0.87', rows[1][5])
        for secret in ('123456', 'HIDDEN_ROW', 'iconBundleId'):
            self.assertNotIn(secret, value)

    def test_entity_codes_survive_lists_details_and_exports_without_normalization(self):
        code = " weapon_vampire_hunter's_sword "
        self.catalog['entries'][0]['entityCode'] = code
        self.write('data/catalog.json', json_bytes(self.catalog))
        self.assertEqual(self.command('--exports').returncode, 0)
        boot = read_js_json(self.root / 'data/bootstrap.js', 'DOZ_BOOTSTRAP')
        self.assertEqual(boot['entries'][0]['entityCode'], code)
        index_path = self.root / boot['manifest']['index-weapon']
        index = json.loads(index_path.read_text('utf-8').split(' = ', 1)[1].rstrip(';\n'))
        self.assertEqual(index[0]['entityCode'], code)
        runtime = read_js_json(self.root / 'data/catalog.js', 'DOZ_CATALOG')
        self.assertEqual(runtime['entries'][0]['entityCode'], code)
        rows = list(csv.reader(io.StringIO((self.root / 'data/player/武器图鉴.csv').read_text('utf-8-sig'))))
        self.assertEqual(rows[0][-1], '实体代码')
        self.assertEqual(rows[1][-1], code)
        self.assertEqual(verify(self.root, data_only=True)['errors'], [])

    def test_csv_quotes_significant_whitespace_without_changing_other_rows(self):
        rows = [['name', 'code'], ['plain', 'ordinary_code'],
                ['trailing space', 'res_incense_halloween2 '],
                ['trailing tab', 'spawn_military_mob_6_Scene_ForestBelt_Red_low_1\t'],
                ['leading space', ' broken_bicycle']]
        value = csv_bytes(rows).decode('utf-8-sig')
        self.assertEqual(list(csv.reader(io.StringIO(value, newline=''))), rows)
        self.assertTrue(value.startswith('name,code\r\nplain,ordinary_code\r\n'))
        for line in value.splitlines():
            self.assertEqual(line, line.rstrip(' \t'))
        self.assertIn('"res_incense_halloween2 "', value)
        self.assertIn('"spawn_military_mob_6_Scene_ForestBelt_Red_low_1\t"', value)

    def test_update_is_repeatable_and_preserves_source_images_and_ui(self):
        protected = ['data/catalog.json', 'data/mechanics.json', 'data/asset-map.json', 'assets/images/example#1.png', 'index.html', 'app.js']
        before = {name: (self.root / name).read_bytes() for name in protected}
        self.write('data/catalog.js', b'out of date')
        self.assertNotEqual(self.command('--check').returncode, 0)
        updated = self.command()
        self.assertEqual(updated.returncode, 0, updated.stderr)
        checked = self.command('--check')
        self.assertEqual(checked.returncode, 0, checked.stdout + checked.stderr)
        self.assertEqual(before, {name: (self.root / name).read_bytes() for name in protected})
        self.assertEqual(read_js_json(self.root / 'data/catalog.js', 'DOZ_CATALOG'), self.catalog)

    def test_export_refresh_follows_json_and_validator_detects_drift(self):
        self.catalog['entries'][0]['stats'][1]['value'] = 1.25
        self.write('data/catalog.json', json_bytes(self.catalog))
        self.assertEqual(self.command().returncode, 0)
        self.assertTrue(any('CSV differs from JSON' in error for error in verify(self.root, data_only=True)['errors']))
        result = self.command('--exports')
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn('1.25', (self.root / 'data/player/武器图鉴.csv').read_text('utf-8-sig'))
        report = verify(self.root)
        self.assertEqual(report['errors'], [])
        self.assertEqual(report['images'], 1)

    def test_hash_verification_rejects_changed_image(self):
        self.write('assets/images/example#1.png', b'changed image bytes!!')
        self.assertTrue(any('Image hash changed' in error for error in verify(self.root, data_only=True)['errors']))

    def test_removed_technical_fields_block_generation_before_runtime_changes(self):
        runtime = (self.root / 'data/catalog.js').read_bytes()
        for field in ('key', 'rarityEvidence', 'initializationStats', 'iconBundleId', 'raw', '$ref'):
            with self.subTest(field=field):
                self.catalog['entries'][0][field] = 'synthetic source marker'
                self.write('data/catalog.json', json_bytes(self.catalog))
                result = self.command()
                self.assertNotEqual(result.returncode, 0)
                self.assertEqual((self.root / 'data/catalog.js').read_bytes(), runtime)
                del self.catalog['entries'][0][field]

    def test_technical_references_are_rejected_without_echoing_the_value(self):
        marker = 'function(proto=synthetic-private-reference)'
        self.catalog['entries'][0]['description'] = marker
        self.write('data/catalog.json', json_bytes(self.catalog))
        result = self.command()
        self.assertNotEqual(result.returncode, 0)
        self.assertNotIn(marker, result.stdout + result.stderr)

    def test_player_abilities_and_scenario_numbers_survive_generation(self):
        runtime = read_js_json(self.root / 'data/catalog.js', 'DOZ_CATALOG')
        row = runtime['entries'][0]
        self.assertEqual(row['abilities'][0]['cooldown'], 9)
        self.assertEqual(row['scenarioStats'][0]['attackInterval'], 1.2)
        self.assertEqual(row['scenarioStats'][0]['levels'][0]['value'], 220)
        self.assertEqual(row['image'], 'assets/images/example#1.png')

    def test_manifest_accepts_only_local_image_hash_information(self):
        path = self.root / 'reports/image-manifest.json'
        data = json.loads(path.read_text(encoding='utf-8'))
        data[0]['source'] = 'unused origin'
        self.write('reports/image-manifest.json', json_bytes(data))
        self.assertTrue(any('Unexpected image manifest fields' in error for error in verify(self.root, data_only=True)['errors']))

    def test_lazy_runtime_reconstructs_all_player_details_and_has_immutable_names(self):
        boot=read_js_json(self.root/'data/bootstrap.js','DOZ_BOOTSTRAP')
        chunks={}
        for key,name in boot['manifest'].items():
            content=(self.root/name).read_bytes()
            self.assertIn(hashlib.sha256(content).hexdigest()[:16],name)
            prefix='window.DOZ_DATA_PARTS['+json.dumps(key)+'] = '
            chunks[key]=json.loads(content.decode()[len(prefix):-2])
        rows=[row for key,value in chunks.items() if key.startswith('detail-') for row in value['entries']]
        self.assertEqual(sorted(rows,key=lambda row:row['id']),sorted(self.catalog['entries'],key=lambda row:row['id']))
        self.assertNotIn('abilities',boot['entries'][0])
        self.assertLess((self.root/'data/bootstrap.js').stat().st_size,100000)
        before=dict(boot['manifest'])
        self.catalog['entries'][0]['abilities'][0]['cooldown']=14
        self.write('data/catalog.json',json_bytes(self.catalog))
        self.assertEqual(self.command().returncode,0)
        after=read_js_json(self.root/'data/bootstrap.js','DOZ_BOOTSTRAP')['manifest']
        key='detail-'+str(123456//128)
        self.assertNotEqual(before[key],after[key])
        self.assertEqual(before['index-weapon'],after['index-weapon'])
        self.assertFalse((self.root/before[key]).exists())

    def test_validator_rejects_unlisted_lazy_script_and_modified_content(self):
        self.write('data/lazy/orphan.js',b'window.unlisted=true;')
        self.assertTrue(any('lazy chunk list' in error for error in verify(self.root,data_only=True)['errors']))
        self.assertEqual(self.command().returncode,0)
        self.assertFalse((self.root/'data/lazy/orphan.js').exists())
        boot=read_js_json(self.root/'data/bootstrap.js','DOZ_BOOTSTRAP')
        path=self.root/boot['manifest']['index-weapon']
        path.write_bytes(path.read_bytes().replace(b'=danger',b'=changed'))
        errors=verify(self.root,data_only=True)['errors']
        self.assertTrue(any('content hash' in error for error in errors))
        self.assertTrue(any('out of date' in error for error in errors))


if __name__ == '__main__':
    unittest.main()
