"""Build the small first page and content-versioned classic-script resource map."""
from __future__ import annotations
import hashlib
import json
from pathlib import Path
from player_schema import ROOT, read_data, ASSIGNMENT


def compact_write(file, value):
    text = file.read_text(encoding='utf-8')
    match = ASSIGNMENT.search(text)
    if not match:
        raise ValueError('Unrecognized JSON wrapper: ' + str(file))
    file.write_text(text[:match.start(1)] + json.dumps(value, ensure_ascii=False, separators=(',', ':')) + ';\n', encoding='utf-8', newline='\n')


def bootstrap(index):
    categories = index['inventory']['categories']
    if not isinstance(categories, list):
        categories = [dict(id=key, **value) if isinstance(value, dict) else {'id': key, 'label': key, 'count': value} for key, value in categories.items()]
    order = {row['id']: position for position, row in enumerate(categories)}
    ranks = dict(common=1, uncommon=2, rare=3, epic=4, legendary=5)
    equipment = {row['item_id']: row for row in index['equipment']}
    items = index['inventory']['items']
    def sort_key(row):
        related = equipment.get(row.get('equipment_id', row['id']), {})
        old = bool(row.get('legacy') or row.get('placeholder_image') or related.get('official_inclusion_status') in {'special_legacy', 'special_bound_legacy'})
        return (order.get(row.get('category'), 0), old, float(row.get('tier') or 0), ranks.get(row.get('rarity'), 0))
    first = sorted(items, key=sort_key)[:60]
    equipment_ids = {row.get('equipment_id', row['id']) for row in first}
    counts = {'items': len(items), 'pets': len(index['pets']) + len(index['decor']), 'skins': len(index['skin_catalog']), 'perks': len(index['perks'])}
    counts['all'] = sum(counts.values())
    subcategories = {}
    for row in items:
        if row.get('subcategory'):
            subcategories.setdefault(row['subcategory'], row.get('subcategory_label') or row['subcategory'])
    filters = {'subcategory': [{'value': key, 'label': label} for key, label in subcategories.items()],
               'tier': sorted({row['tier'] for row in items if row.get('tier') is not None}, key=float),
               'rarity': sorted({row['rarity'] for row in items if row.get('rarity')}, key=lambda key: ranks.get(key, 0))}
    result = {key: value for key, value in index.items() if key not in {'inventory', 'equipment', 'pets', 'decor', 'skin_catalog', 'perks'}}
    result['inventory'] = dict(index['inventory'], items=first)
    result['equipment'] = [row for row in index['equipment'] if row['item_id'] in equipment_ids]
    result.update(pets=[], decor=[], skin_catalog=[], perks={})
    result['_bootstrap'] = {'version': 1, 'counts': counts, 'filters': filters}
    return result


def resource_map(root=ROOT):
    base = root / 'wiki-assets'
    paths = ['wiki/data/index.js', 'wiki/app.js', 'lab/data/avatar.js', 'lab/data/avatar-meshes.js',
             'lab/data/avatar-textures.js', 'lab/data/offline-textures.js', 'lab/offline-textures.js', 'lab/loadout-avatar3d-engine.js']
    paths += [file.relative_to(base).as_posix() for file in sorted((base / 'wiki/data/chunks').glob('*.js'))]
    return {'version': 1, 'files': {path: path + '?v=' + hashlib.sha256((base / path).read_bytes()).hexdigest() for path in paths}}


def update(root=ROOT):
    index_file = root / 'wiki-assets/wiki/data/index.js'
    index = read_data(index_file)
    compact_write(index_file, index)
    initial = root / 'wiki-assets/wiki/data/bootstrap.js'
    initial.write_text('window.WIKI_DB = ' + json.dumps(bootstrap(index), ensure_ascii=False, separators=(',', ':')) + ';\n', encoding='utf-8', newline='\n')
    target = root / 'wiki-assets/lazy-manifest.js'
    target.write_text('window.WESTLAND_RESOURCES = ' + json.dumps(resource_map(root), ensure_ascii=False, separators=(',', ':')) + ';\n', encoding='utf-8', newline='\n')
    return {'bootstrap_bytes': initial.stat().st_size, 'index_bytes': index_file.stat().st_size, 'versioned_resources': len(resource_map(root)['files'])}


def verify(root=ROOT):
    assert read_data(root / 'wiki-assets/wiki/data/bootstrap.js') == bootstrap(read_data(root / 'wiki-assets/wiki/data/index.js')), 'First-page records, ordering, counts or filters differ from the full catalog.'
    assert read_data(root / 'wiki-assets/lazy-manifest.js') == resource_map(root), 'Lazy resource hashes changed; run tools/update_lazy.py.'


if __name__ == '__main__':
    from player_schema import build_manifest
    result = update()
    (ROOT / 'wiki-assets/asset-manifest.json').write_text(json.dumps(build_manifest(ROOT), ensure_ascii=False, indent=2) + '\n', encoding='utf-8', newline='\n')
    print(json.dumps(result))