#!/usr/bin/env python3
"""Verify that the split archive still matches the original decoded data."""
import base64
import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = json.loads((ROOT / 'wiki-assets/asset-manifest.json').read_text(encoding='utf-8'))


def read_assignment(relative):
    source = (ROOT / relative).read_text(encoding='utf-8')
    match = re.search(r'^window\.[^\n=]+ = ([{\[].*);\s*$', source, re.M | re.S)
    assert match, 'Unrecognized data assignment: ' + relative
    return json.loads(match.group(1))


def canonical(value):
    return json.dumps(value, sort_keys=True, ensure_ascii=False, separators=(',', ':')).encode('utf-8')


image_paths = {row['path'] for row in MANIFEST['images']}


def restore_images(value):
    if isinstance(value, dict):
        return {key: restore_images(item) for key, item in value.items()}
    if isinstance(value, list):
        return [restore_images(item) for item in value]
    if isinstance(value, str) and value in image_paths:
        image = ROOT / value
        mime = {'.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp'}[image.suffix]
        return 'data:' + mime + ';base64,' + base64.b64encode(image.read_bytes()).decode('ascii')
    return value


for row in MANIFEST['images']:
    data = (ROOT / row['path']).read_bytes()
    assert len(data) == row['bytes'], row['path']
    assert hashlib.sha256(data).hexdigest() == row['sha256'], row['path']

lab_names = {'equipment-data': 'equipment', 'beast-data': 'beasts', 'loadout-lab-data': 'loadout'}
for row in MANIFEST['data']:
    name = row['name']
    if name == 'wiki-index':
        data = read_assignment('wiki-assets/wiki/data/index.js')
    elif name.startswith('wiki-chunk-'):
        data = read_assignment('wiki-assets/wiki/data/chunks/' + name[len('wiki-chunk-'):] + '.js')
    elif name in lab_names:
        data = restore_images(read_assignment('wiki-assets/lab/data/' + lab_names[name] + '.js'))
    elif name == 'loadout-avatar3d-data':
        data = read_assignment('wiki-assets/lab/data/avatar.js')
        data['meshes'] = read_assignment('wiki-assets/lab/data/avatar-meshes.js')
        data['textures'] = read_assignment('wiki-assets/lab/data/avatar-textures.js')
        data = restore_images(data)
    else:
        raise AssertionError('Unknown data block: ' + name)
    assert hashlib.sha256(canonical(data)).hexdigest() == row['canonical_sha256'], name

offline = read_assignment('wiki-assets/lab/data/offline-textures.js')
textures = read_assignment('wiki-assets/lab/data/avatar-textures.js')
for uri in textures.values():
    assert offline[uri] == restore_images(uri), 'Offline texture differs: ' + uri

index = read_assignment('wiki-assets/wiki/data/index.js')
images = read_assignment('wiki-assets/wiki/data/images.js')
assert set(index['images']) == set(images), 'Wiki image keys changed'
assert all((ROOT / path).is_file() for path in images.values())

print(json.dumps({'data_blocks_verified': len(MANIFEST['data']),
                  'image_references_verified': len(MANIFEST['images']),
                  'unique_images': len(image_paths),
                  'offline_textures_verified': len(textures)}, ensure_ascii=True))
