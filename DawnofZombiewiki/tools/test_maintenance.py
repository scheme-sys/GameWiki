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

from wiki_data import ROOT, generated_files, json_bytes, load_data, player_exports, read_js_json
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
            'meta': {'version': 'fixture', 'deployVersion': '1', 'builtAt': 'fixed'}, 'categories': [],
            'entries': [{'id': 123456, 'key': 'DO_NOT_EXPORT_INTERNAL_CODE', 'name': '=danger', 'nameEn': 'Sample',
                         'category': 'weapon', 'visible': True, 'stats': [{'label': '伤害', 'value': '230–240'}, {'label': '间隔', 'value': 0.87}],
                         'iconBundleId': 8, 'abilities': [], 'sourceHints': []},
                        {'id': 999, 'name': 'HIDDEN_ROW', 'category': 'weapon', 'visible': False}],
            'recipes': [], 'locations': [], 'quests': [], 'companions': [], 'skills': [], 'notes': [], 'factions': [], 'sets': [],
        }
        self.mechanics = {'guides': [{'title': f'Guide {index}', 'summary': 'Summary', 'sections': [{'title': 'Section', 'paragraphs': ['Unchanged paragraph.']}]} for index in range(7)]}
        self.assets = {'version': 'fixture', 'complete': True, 'byBundleId': {'8': image_path}, 'byName': {},
                       'assets': [{'path': image_path, 'bytes': len(image), 'categoryLabel': '武器'}]}
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
        for secret in ('123456', 'DO_NOT_EXPORT_INTERNAL_CODE', 'HIDDEN_ROW', 'iconBundleId'):
            self.assertNotIn(secret, value)

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

    def test_legacy_importer_cannot_overwrite_current_wiki(self):
        before = (ROOT / 'app.js').read_bytes()
        result = subprocess.run([sys.executable, str(ROOT / 'tools/package_wiki.py')], capture_output=True, text=True)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('Archived one-time importer disabled', result.stderr)
        self.assertEqual((ROOT / 'app.js').read_bytes(), before)


if __name__ == '__main__':
    unittest.main()
