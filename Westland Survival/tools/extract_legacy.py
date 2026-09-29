#!/usr/bin/env python3
"""Import the original self-contained Westland pages into maintainable assets.

Run against a separate directory containing the three original HTML files:
  python tools/extract_legacy.py --source-dir ORIGINAL_DIRECTORY
Existing split HTML, styles, and runtime scripts are preserved. Only data and images are refreshed.
"""
from __future__ import annotations

import argparse
import base64
import copy
import gzip
import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCRIPT_RE = re.compile(r'<script\b([^>]*)>(.*?)</script\s*>', re.S | re.I)
STYLE_RE = re.compile(r'<style\b[^>]*>(.*?)</style\s*>', re.S | re.I)
DATA_IMAGE_RE = re.compile(r'^data:(image/(?:png|jpe?g|webp));base64,(.*)$', re.S | re.I)
manifest = {'format': 1, 'data': [], 'images': [], 'pages': []}


def sha(value: bytes) -> str:
    return hashlib.sha256(value).hexdigest()


def canonical(value) -> bytes:
    return json.dumps(value, sort_keys=True, ensure_ascii=False, separators=(',', ':')).encode('utf-8')


def write(relative: str, value: str | bytes) -> None:
    path = ROOT / relative
    path.parent.mkdir(parents=True, exist_ok=True)
    data = value.encode('utf-8') if isinstance(value, str) else value
    path.write_bytes(data)
    assert path.read_bytes() == data, relative


def write_ui(relative: str, value: str) -> None:
    """Import UI once, preserving subsequent player-facing editorial changes."""
    path = ROOT / relative
    if path.exists():
        if path.suffix != '.html' or '<style' not in path.read_text(encoding='utf-8-sig'):
            return
    write(relative, value)


def write_data(relative: str, target: str, value, prefix: str = '') -> None:
    body = json.dumps(value, ensure_ascii=False, indent=2) + ';\n'
    write(relative, '/* Game archive data. See ../README.md for update instructions. */\n' + prefix + target + ' = ' + body)


def record_data(name: str, original, restored) -> None:
    assert canonical(original) == canonical(restored), 'Data changed: ' + name
    manifest['data'].append({'name': name, 'canonical_sha256': sha(canonical(original)), 'verified': True})


def export_image(raw: bytes, mime: str, origin: str, original_uri: str | None = None) -> str:
    extension = {'image/png': 'png', 'image/jpeg': 'jpg', 'image/jpg': 'jpg', 'image/webp': 'webp'}[mime.lower()]
    digest = sha(raw)
    relative = 'wiki-assets/images/' + digest + '.' + extension
    path = ROOT / relative
    if path.exists():
        assert sha(path.read_bytes()) == digest, relative
    else:
        write(relative, raw)
    manifest['images'].append({'origin': origin, 'path': relative, 'sha256': digest, 'bytes': len(raw)})
    return relative


def export_data_images(value, name: str, offline: dict | None = None):
    """Replace data URIs with relative files; keep a reversible map for validation."""
    replacements = {}

    def walk(node, trail):
        if isinstance(node, dict):
            return {key: walk(item, trail + [str(key)]) for key, item in node.items()}
        if isinstance(node, list):
            return [walk(item, trail + [str(index)]) for index, item in enumerate(node)]
        if isinstance(node, str) and (match := DATA_IMAGE_RE.fullmatch(node)):
            mime, encoded = match.groups()
            raw = base64.b64decode(encoded, validate=True)
            relative = export_image(raw, mime, name + '/' + '/'.join(trail))
            replacements[relative] = node
            if offline is not None:
                offline[relative] = node
            return relative
        return node

    extracted = walk(value, [])

    def restore(node):
        if isinstance(node, dict):
            return {key: restore(item) for key, item in node.items()}
        if isinstance(node, list):
            return [restore(item) for item in node]
        if isinstance(node, str) and node in replacements:
            original = replacements[node]
            mime = original.split(';', 1)[0]
            restored = mime + ';base64,' + base64.b64encode((ROOT / node).read_bytes()).decode('ascii')
            assert restored == original
            return restored
        return node

    record_data(name, value, restore(extracted))
    return extracted


def attrs(text: str) -> dict:
    return dict(re.findall(r'([\w-]+)="([^"]*)"', text))


def split_styles(html: str, names: list[str]) -> str:
    index = 0

    def extract(match):
        nonlocal index
        path = names[index]
        index += 1
        write_ui(path, match.group(1).strip() + '\n')
        return '<link rel="stylesheet" href="' + path + '">'

    result = STYLE_RE.sub(extract, html)
    assert index == len(names)
    return result


def split_wiki(html: str) -> str:
    html = split_styles(html, ['wiki-assets/wiki/wiki.css'])
    image_map = {}

    def extract(match):
        attributes, body = match.groups()
        properties = attrs(attributes)
        identifier = properties.get('id', '')
        if 'src' in properties:
            return match.group(0)
        if identifier == 'wiki-data':
            decoded = gzip.decompress(base64.b64decode(body))
            assert len(decoded) == int(properties['data-bytes'])
            data = json.loads(decoded)
            write_data('wiki-assets/wiki/data/index.js', 'window.WIKI_DB', data)
            record_data('wiki-index', data, json.loads(json.dumps(data)))
            return '<script src="wiki-assets/wiki/data/index.js"></script>\n<script src="wiki-assets/wiki/data/images.js"></script>'
        if identifier == 'wiki-app-source':
            write_ui('wiki-assets/wiki/app.js', body)
            return ''
        if identifier.startswith('wiki-image-'):
            key = identifier[len('wiki-image-'):]
            raw = base64.b64decode(body, validate=True)
            image_map[key] = export_image(raw, properties.get('data-mime', 'image/png'), identifier)
            return ''
        if identifier.startswith('wiki-chunk-'):
            decoded = gzip.decompress(base64.b64decode(body))
            assert len(decoded) == int(properties['data-bytes'])
            data = json.loads(decoded)
            basename = identifier[len('wiki-chunk-'):]
            assert re.fullmatch(r'[a-z0-9_-]+', basename)
            write_data('wiki-assets/wiki/data/chunks/' + basename + '.js', 'window.WIKI_CHUNKS[' + json.dumps(identifier) + ']', data,
                       'window.WIKI_CHUNKS = window.WIKI_CHUNKS || Object.create(null);\n')
            record_data(identifier, data, json.loads(json.dumps(data)))
            return ''
        if not identifier and 'WIKI_RUNTIME' in body:
            return '<script src="wiki-assets/wiki/runtime.js"></script>'
        raise ValueError('Unknown wiki inline script: ' + attributes)

    html = SCRIPT_RE.sub(extract, html)
    write_data('wiki-assets/wiki/data/images.js', 'window.WIKI_IMAGE_PATHS', image_map)
    return re.sub(r'\n{3,}', '\n\n', html)


def split_lab(html: str) -> str:
    html = split_styles(html, ['wiki-assets/lab/design.css', 'wiki-assets/lab/loadout.css'])
    assignments = {'equipment-data': ('equipment', 'equipment'), 'beast-data': ('beasts', 'beasts'), 'loadout-lab-data': ('loadout', 'loadout')}
    prefix = 'window.WESTLAND_LAB_DATA = window.WESTLAND_LAB_DATA || {};\n'
    offline = {}

    def extract(match):
        attributes, body = match.groups()
        properties = attrs(attributes)
        identifier = properties.get('id', '')
        if 'src' in properties:
            return match.group(0)
        if identifier in assignments:
            target, basename = assignments[identifier]
            data = export_data_images(json.loads(body), identifier)
            path = 'wiki-assets/lab/data/' + basename + '.js'
            write_data(path, 'window.WESTLAND_LAB_DATA.' + target, data, prefix)
            return '<script src="' + path + '"></script>'
        if identifier == 'loadout-avatar3d-data':
            data = export_data_images(json.loads(body), identifier, offline)
            meshes = data.pop('meshes')
            textures = data.pop('textures')
            write_data('wiki-assets/lab/data/avatar.js', 'window.WESTLAND_LAB_DATA.avatar', data, prefix)
            write_data('wiki-assets/lab/data/avatar-meshes.js', 'window.WESTLAND_LAB_DATA.avatar.meshes', meshes)
            write_data('wiki-assets/lab/data/avatar-textures.js', 'window.WESTLAND_LAB_DATA.avatar.textures', textures)
            write_data('wiki-assets/lab/data/offline-textures.js', 'window.WESTLAND_OFFLINE_TEXTURES', offline)
            return '\n'.join('<script src="wiki-assets/lab/' + name + '"></script>' for name in ['data/avatar.js', 'data/avatar-meshes.js', 'data/avatar-textures.js', 'offline-textures.js'])
        name = identifier or 'design-controller'
        assert name in ['theme-controller', 'design-controller', 'loadout-avatar3d-engine', 'loadout-lab-engine', 'loadout-lab-controller']
        body = body.replace("JSON.parse(document.getElementById('equipment-data').textContent)", 'window.WESTLAND_LAB_DATA.equipment')
        body = body.replace("JSON.parse(document.getElementById('beast-data').textContent)", 'window.WESTLAND_LAB_DATA.beasts')
        body = body.replace("JSON.parse($('loadout-lab-data').textContent)", 'window.WESTLAND_LAB_DATA.loadout')
        body = body.replace("raw=$('loadout-avatar3d-data')", 'raw=window.WESTLAND_LAB_DATA.avatar')
        body = body.replace('const data=JSON.parse(raw.textContent);', 'const data=raw;')
        if name == 'loadout-avatar3d-engine':
            old = "if (typeof uri !== 'string' || !/^data:image\\/(?:png|jpe?g|webp);base64,/i.test(uri)) throw Error('\u7eb9\u7406\u5fc5\u987b\u662f\u5185\u5d4c\u56fe\u7247');"
            new = "if (typeof uri !== 'string' || !/^(?:data:image\\/(?:png|jpe?g|webp);base64,|wiki-assets\\/images\\/[a-f0-9]+\\.(?:png|jpe?g|webp)$)/i.test(uri)) throw Error('\u7eb9\u7406\u8def\u5f84\u65e0\u6548');"
            assert old in body
            body = body.replace(old, new)
            old = 'image.src = uri; return entry.texture;'
            new = "if (root.WestlandTextureURL) { root.WestlandTextureURL(uri).then(value => { if (!disposed && !lost && textures.get(id) === entry) image.src = value; }).catch(() => image.onerror()); } else { image.src = uri; } return entry.texture;"
            assert old in body
            body = body.replace(old, new)
        # The data is now a local archive asset rather than embedded in the page.
        if name == 'loadout-lab-controller':
            body = body.replace("'\u5185\u5d4c '+meshes.length", "'\u6536\u5f55 '+meshes.length")
        path = 'wiki-assets/lab/' + name + '.js'
        write_ui(path, body.strip() + '\n')
        return '<script src="' + path + '"' + (' id="' + identifier + '"' if identifier else '') + '></script>'

    return SCRIPT_RE.sub(extract, html)


def split_base(html: str) -> str:
    html = split_styles(html, ['wiki-assets/base/base.css'])

    def extract(match):
        attributes, body = match.groups()
        properties = attrs(attributes)
        if 'src' in properties:
            return match.group(0)
        identifier = properties.get('id', '')
        assert identifier in ['base-design-engine', 'base-design-ui']
        path = 'wiki-assets/base/' + identifier + '.js'
        write_ui(path, body.strip() + '\n')
        return '<script src="' + path + '" id="' + identifier + '"></script>'

    return SCRIPT_RE.sub(extract, html)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source-dir', type=Path, required=True)
    arguments = parser.parse_args()
    pages = [('westland_wiki.html', split_wiki), ('westland_difficulty_design.html', split_lab), ('\u57fa\u5730.html', split_base)]
    originals = {name: (arguments.source_dir / name).read_text(encoding='utf-8-sig') for name, _ in pages}
    assert all('<style' in html for html in originals.values()), 'Source directory must contain the original self-contained pages.'
    for name, split in pages:
        original = originals[name]
        result = split(original)
        write_ui(name, result)
        manifest['pages'].append({'file': name, 'before_bytes': len(original.encode('utf-8')), 'after_bytes': (ROOT / name).stat().st_size})
    manifest['unique_images'] = len({image['path'] for image in manifest['images']})
    manifest['image_references'] = len(manifest['images'])
    write('wiki-assets/asset-manifest.json', json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps({'pages': manifest['pages'], 'data_blocks': len(manifest['data']), 'unique_images': manifest['unique_images'], 'image_references': manifest['image_references']}, ensure_ascii=True))


if __name__ == '__main__':
    main()
