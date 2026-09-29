"""Data verification independent of browser automation and external archives."""
from __future__ import annotations

import csv
import hashlib
import io
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit

from wiki_data import JSON_NAMES, VARIABLES, file_matches, generated_files, image_for, load_data, load_json, player_exports, read_js_json


def verify(root, data_only=False):
    root = Path(root).resolve()
    errors, warnings, checks = [], [], []

    def require(condition, message):
        if not condition:
            errors.append(message)

    def local_file(reference, base=root, shared=False, url=False):
        value = unquote(urlsplit(reference).path) if url else reference
        file = (base / value).resolve()
        allowed = file.is_relative_to(root) or (shared and value.startswith('../assets/') and file.is_relative_to(root.parent / 'assets'))
        allowed = allowed or (shared and value.startswith('../') and file.suffix.lower() == '.html' and file.is_relative_to(root.parent))
        require(allowed, f'Resource escapes the allowed Wiki/shared assets: {reference}')
        require(file.is_file(), f'Missing resource: {reference}')
        return file

    catalog, mechanics, assets = load_data(root)
    manifest = load_json(root / 'reports/image-manifest.json')
    unique = {}
    for item in manifest:
        record = (item['bytes'], item['sha256'])
        require(item['path'] not in unique or unique[item['path']] == record,
                f'Conflicting image manifest records: {item["path"]}')
        unique[item['path']] = record
    for reference, (size, digest) in unique.items():
        file = local_file(reference)
        if file.is_file():
            content = file.read_bytes()
            require(len(content) == size, f'Image size changed: {reference}')
            require(hashlib.sha256(content).hexdigest() == digest, f'Image hash changed: {reference}')
    media = {item['path'] for item in assets['assets']}
    mapped = set(assets['byBundleId'].values()) | set(assets['byName'].values())
    actual = {file.relative_to(root).as_posix() for file in (root / 'assets/images').rglob('*') if file.is_file()}
    require(media == mapped == actual == set(unique), 'Image files, mappings, asset list and hash manifest differ')
    require(len(media) == len(assets['assets']), 'Duplicate paths in asset-map assets list')
    for item in assets['assets']:
        require(item['path'] in unique and item['bytes'] == unique[item['path']][0], f'Asset size metadata mismatch: {item["path"]}')
    checks.append('Every unique image matches all source SHA-256 records; no missing or unreferenced image')

    def references(value):
        if isinstance(value, str) and value.startswith('assets/'):
            local_file(value)
        elif isinstance(value, dict):
            for child in value.values():
                references(child)
        elif isinstance(value, list):
            for child in value:
                references(child)
    references(catalog)
    references(mechanics)
    for name, data in zip(JSON_NAMES, (catalog, mechanics, assets)):
        expected = {key: value for key, value in data.items() if key != 'assets'} if name == 'asset-map' else data
        require(read_js_json(root / f'data/{name}.js', VARIABLES[name]) == expected, f'{name} JS does not preserve the source JSON')
    require(read_js_json(root / 'data/media.js', 'DOZ_MEDIA') == assets['assets'], 'Local media browser data differs from source assets')
    for name, expected in generated_files(root).items():
        file = root / name
        require(file_matches(file, expected), f'Generated file out of date: {name}; run tools/update_data.py')
    checks.append('Runtime JSON wrappers preserve all source fields and metadata is current')

    exports = player_exports(catalog, mechanics, assets)
    actual_exports = {file.relative_to(root).as_posix() for directory, pattern in [('data/player', '*.csv'), ('guides', '*.md')]
                      for file in (root / directory).glob(pattern)}
    require(set(exports) == actual_exports, 'Player CSV/guide filenames do not match the declared exports')
    compatibility = root / 'reports/export-compatibility.json'
    history = load_json(compatibility) if compatibility.exists() else {}
    known = history.get('differences', []) if history.get('status') == 'preserved' else []
    csv_summary = {}
    for name, expected in exports.items():
        file = root / name
        if not file.is_file():
            errors.append(f'Missing player export: {name}')
            continue
        if file.suffix == '.csv':
            with file.open(encoding='utf-8-sig', newline='') as stream:
                rows = list(csv.reader(stream))
            expected_rows = list(csv.reader(io.StringIO(expected.decode('utf-8-sig'), newline='')))
            csv_summary[file.name] = max(0, len(rows) - 1)
            require(len(rows) == len(expected_rows), f'CSV row count differs from JSON: {name}')
            for row_index, (row, expected_row) in enumerate(zip(rows, expected_rows)):
                require(len(row) == len(expected_row), f'CSV column count differs: {name}:{row_index + 1}')
                for column, (value, expected_value) in enumerate(zip(row, expected_row)):
                    if value.startswith('assets/'):
                        local_file(value)
                    if value != expected_value:
                        difference = {'file': name, 'row': row_index + 1, 'column': column + 1, 'preserved': value, 'json': expected_value}
                        if difference in known:
                            warnings.append(f'Preserved historical CSV text: {name}:{row_index + 1}:{column + 1}; --exports can synchronize it')
                        else:
                            errors.append(f'CSV differs from JSON: {name}:{row_index + 1}:{column + 1}; review and run update_data.py --exports')
        else:
            require(file.read_text(encoding='utf-8').rstrip() == expected.decode('utf-8').rstrip(), f'Guide differs from JSON: {name}')
    checks.append('All player export cells and guide paragraphs match JSON, except explicitly recorded historical text')

    if not data_only:
        for name in ('index.html', 'materials.html'):
            file = root / name
            if not file.is_file():
                continue
            text = file.read_text(encoding='utf-8')
            for reference in re.findall(r'(?:src|href)\s*=\s*[\"\']([^\"\']+)[\"\']', text, re.I):
                if reference.startswith('#') or re.match(r'^(?:[a-z][a-z0-9+.-]*:|//)', reference, re.I):
                    continue
                local_file(reference, shared=True, url=True)
        require('../_Wiki' not in (root / 'app.js').read_text(encoding='utf-8'), 'App still depends on the old archive')
        checks.append('Page resources resolve within this Wiki/shared assets, and navigation links stay inside the site')
    coverage = {}
    for category in ('weapon', 'armor', 'enemy', 'companion', 'resource', 'consumable', 'building', 'other'):
        rows = [entry for entry in catalog['entries'] if entry['category'] == category and entry.get('visible', True)]
        coverage[category] = {'entries': len(rows), 'withImage': sum(bool(image_for(entry, assets)[0]) for entry in rows)}
    return {'result': 'fail' if errors else 'pass', 'checks': checks, 'errors': errors, 'warnings': warnings,
            'images': len(unique), 'sha256SourceRecords': len(manifest), 'imageBytes': sum(item[0] for item in unique.values()),
            'catalogueRows': len(catalog['entries']), 'visiblePlayerRows': sum(item['entries'] for item in coverage.values()),
            'coverage': coverage, 'csvRows': csv_summary, 'csvFiles': len(csv_summary),
            'guides': len(mechanics['guides']), 'browserTested': False}
