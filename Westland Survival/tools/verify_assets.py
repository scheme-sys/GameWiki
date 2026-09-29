#!/usr/bin/env python3
"""Verify approved player data, semantic baselines, local assets and image hashes."""
from __future__ import annotations

import base64
import hashlib
import json
from pathlib import Path

from player_schema import ROOT, data_files, read_data, sanitize, find_unsafe, digest, player_summary


def verify(root=ROOT):
    from update_lazy import verify as verify_lazy
    verify_lazy(root)
    manifest = json.loads((root / 'wiki-assets/asset-manifest.json').read_text(encoding='utf-8'))
    assert manifest.get('format') == 2, 'Legacy unsanitized manifest is not accepted.'
    registered = {row['file']: row for row in manifest['data']}
    actual = {file.relative_to(root).as_posix() for file in data_files(root)}
    assert actual == set(registered), 'Data file list changed; register its player schema before importing.'
    for directory in ['wiki-assets/wiki/data', 'wiki-assets/lab/data']:
        assert not list((root / directory).rglob('*.json')), 'Unexpected raw JSON in runtime data directory.'
    for relative, row in registered.items():
        value = read_data(root / relative)
        assert sanitize(relative, value) == value, 'Unapproved data fields: ' + relative
        assert not find_unsafe(value), 'Technical import metadata remains: ' + relative
        assert digest(value) == row['canonical_sha256'], 'Data hash changed: ' + relative
    assert player_summary(root) == manifest['playerFields'], 'Player fields, numbers or model inputs changed.'

    image_paths = set()
    for row in manifest['images']:
        file = (root / row['path']).resolve()
        assert file.is_relative_to((root / 'wiki-assets/images').resolve()), row['path']
        assert row['path'] not in image_paths, 'Duplicate image manifest path.'
        image_paths.add(row['path'])
        content = file.read_bytes()
        assert len(content) == row['bytes'], row['path']
        assert hashlib.sha256(content).hexdigest() == row['sha256'], row['path']
    actual_images = {p.relative_to(root).as_posix() for p in (root / 'wiki-assets/images').glob('*') if p.is_file()}
    assert actual_images == image_paths, 'Missing or unregistered image.'

    index = read_data(root / 'wiki-assets/wiki/data/index.js')
    images = read_data(root / 'wiki-assets/wiki/data/images.js')
    assert set(index['images']) == set(images), 'Wiki image mapping keys changed.'
    assert all(path in image_paths for path in images.values())
    textures = read_data(root / 'wiki-assets/lab/data/avatar-textures.js')
    offline = read_data(root / 'wiki-assets/lab/data/offline-textures.js')
    for path in textures.values():
        assert path in image_paths, 'Missing avatar texture.'
        mime, encoded = offline[path].split(';base64,', 1)
        assert mime.startswith('data:image/')
        assert base64.b64decode(encoded, validate=True) == (root / path).read_bytes(), 'Offline texture differs.'
    return {'status': 'PASS', 'data_files': len(registered), 'images': len(image_paths),
            'player_counts': manifest['playerFields']['counts'],
            'offline_textures': len(textures), 'approved_schema': True, 'technical_metadata_absent': True}


if __name__ == '__main__':
    print(json.dumps(verify(), ensure_ascii=True))
