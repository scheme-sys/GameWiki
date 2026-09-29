"""Keep player data and browser relationships; discard unused import metadata."""
from __future__ import annotations

import hashlib
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
ASSIGNMENT = re.compile(r'^window\.[^\n=]+ = ([{\[].*);\s*$', re.M | re.S)
COMMON = {'_chunk', '_search_text', 'id', 'image_key', 'numeric'}
FIELDS = {
    'inventory': COMMON | set('name name_en name_source description category category_label subcategory subcategory_label tier rarity max_stack bound legacy placeholder_image equipment_id stats effects uses usage recipes recycle_results used_in locations workbenches blueprints'.split()),
    'equipment': COMMON | set('item_id category subcategory tier rarity official_inclusion_status _wiki'.split()),
    'pets': COMMON | set('type type_zh species species_zh species_en display_zh display_en tier rarity level_cap newborn_level hunger_per_day hunger_per_day_young grow_seconds grow_zh adaptation_seconds adaptation_zh breeding_seconds breeding_zh fertility_min fertility_max breeding_step weight fluctuations habitat_zh habitat_en habitat_bonus locations perk_ids stats skins'.split()),
    'decor': COMMON | set('type type_zh species species_zh species_en display_zh display_en description_zh description_en rarity heal_amount heal_cooldown heal_distance skins'.split()),
    'skin_catalog': COMMON | set('name_zh name_en description_zh description_en hidden_encyclopedia baiting_fertility baiting_fertility_weights skin_weight'.split()),
    'perks': COMMON | set('name_zh name_en description_zh description_en description_text pet_type rarity chance duration cooldown value weights'.split()),
}
REMOVE_KEYS = set('source sources provenance raw audit evidence metadata source_sha sourceEvidence sourceDefinition sourceEffects sourceAvatar sourceStats imageSources textureSources sourceTextureAddress sourceMeshAddress sourcePrefabAddress source_apk source_file class className functionName methodName name_key equip_behaviour image_meta primary_icon_sprite icon_sprite icon_path child_icon_path iconPath sprite prefab scopeSource scopeSha256'.split())
UNSAFE_VALUE = re.compile(r'(?:\.(?:bundle|bun|lua?|cs|dll|apk)\b|\bCAB-[a-f0-9]{12,}|offline-prototype[/\\]|\$ref|function\(proto=|\b\w*StorageData\b)', re.I)


def canonical(value):
    return json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(',', ':')).encode('utf-8')


def digest(value):
    return hashlib.sha256(canonical(value)).hexdigest()


def read_data(file):
    text = Path(file).read_text(encoding='utf-8')
    match = ASSIGNMENT.search(text)
    if not match:
        raise ValueError(f'Unrecognized JSON wrapper: {file}')
    return json.loads(match[1])


def write_data(file, value):
    file = Path(file)
    text = file.read_text(encoding='utf-8')
    match = ASSIGNMENT.search(text)
    if not match:
        raise ValueError(f'Unrecognized JSON wrapper: {file}')
    file.write_text(text[:match.start(1)] + json.dumps(value, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8', newline='\n')


def clean_nested(value):
    if isinstance(value, dict):
        return {key: clean_nested(child) for key, child in value.items() if key not in REMOVE_KEYS}
    if isinstance(value, list):
        return [clean_nested(child) for child in value]
    return value


def pick(value, fields):
    return {key: child for key, child in value.items() if key in fields}


def record(section, value):
    result = pick(value, FIELDS[section])
    if '_wiki' in result:
        result['_wiki'] = pick(result['_wiki'], {'description_zh'})
    if 'skins' in result:
        result['skins'] = [pick(skin, {'id', 'name_zh', 'name_en', 'image_key'}) for skin in result['skins']]
    return clean_nested(result)


def sanitize(relative, original):
    value = json.loads(json.dumps(original, ensure_ascii=False))
    relative = str(relative).replace('\\', '/')
    if relative in {'wiki-assets/wiki/data/index.js', 'wiki-assets/wiki/data/bootstrap.js'}:
        value['meta'] = pick(value.get('meta', {}), {'version', 'pet_counts'})
        value['inventory'] = pick(value['inventory'], {'schema', 'categories', 'items'})
        value['inventory']['items'] = [record('inventory', row) for row in value['inventory']['items']]
        for section in ['equipment', 'pets', 'decor', 'skin_catalog']:
            value[section] = [record(section, row) for row in value[section]]
        value['perks'] = {key: record('perks', row) for key, row in value['perks'].items()}
        return clean_nested(value)
    if relative.startswith('wiki-assets/wiki/data/chunks/'):
        return {'section': value['section'], 'records': [record(value['section'], row) for row in value['records']]}
    if relative == 'wiki-assets/lab/data/equipment.js':
        value = pick(value, {'items', 'keys'})
        value['items'] = [pick(row, set('id name en category sub tier rarity mask curves range aps capacity backpack'.split())) for row in value['items']]
        return value
    if relative == 'wiki-assets/lab/data/beasts.js':
        return clean_nested(pick(value, {'schema', 'animals', 'images', 'totalVariants', 'equipmentCount', 'humanImagesIncluded', 'aiImagesIncluded'}))
    if relative == 'wiki-assets/lab/data/loadout.js':
        # This warning is the only runtime use of the former full food source-stat block.
        for food in value['foods']:
            if 'sourceStats' in food:
                food['passiveHealingRate'] = food['sourceStats'].get('health_regen', 0)
            food.pop('behavior', None)
            if isinstance(food.get('unsupportedEffects'), dict):
                food['unsupportedEffects'] = {key: True for key in food['unsupportedEffects']}
        evidence = [row if isinstance(row, str) else row.get('description', '') for row in value.get('sourceEvidence', [])]
        evidence = [text.replace('R14 原始配置，经现有 SHA-256 锁校验后抽取', '静态资料').replace('真实 avatar', '动物原型').replace('宠物 stats', '宠物面板') for text in evidence]
        value['sourceDescription'] = evidence or value.get('sourceDescription', [])
        value.pop('battleConstants', None)
        value.pop('healSystem', None)
        value['notes'] = [text.replace('food/heal 行为物品', '补给物品').replace('恢复速率 health_regen 和即时恢复 health', '持续恢复速率和即时恢复量').replace('特殊攻击保留来源但不混入普通攻击', '特殊攻击不混入普通攻击') for text in value.get('notes', [])]
        value = pick(value, set('schema playerDefaults accessories foods skills animals notes images sourceDescription'.split()))
        nested = {
            'accessories': set('id name en category sub tier rarity curves imagePath note'.split()),
            'foods': set('id name tier heal buffs duration cooldown implemented groups unsupportedEffects description imagePath passiveHealingRate unsupported'.split()),
            'skills': set('id name maxLevel levels implemented description kind unsupported condition'.split()),
            'animals': set('id name tier base attacks rank confidence attackTimingConfidence description'.split()),
        }
        for group, fields in nested.items():
            value[group] = [pick(row, fields) for row in value[group]]
        return clean_nested(value)
    if relative == 'wiki-assets/lab/data/avatar.js':
        value = pick(value, {'version', 'materials', 'base', 'baseSlots', 'items', 'coverage', 'genders', 'itemNames'})
        value['materials'] = {key: pick(row, {'texture', 'alphaCutoff', 'color', 'doubleSided'}) for key, row in value['materials'].items()}
        value['items'] = {key: pick(row, {'name', 'parts', 'partsByGender', 'gender', 'partial', 'nonVisual', 'hides', 'slot', 'note'}) for key, row in value['items'].items()}
        return clean_nested(value)
    if relative == 'wiki-assets/lab/data/avatar-meshes.js':
        fields = {'positions', 'normals', 'uv', 'indices', 'indexType', 'transform', 'bounds', 'material', 'vertexCount', 'triangleCount'}
        return {key: pick(row, fields) for key, row in value.items()}
    if relative in {'wiki-assets/wiki/data/images.js', 'wiki-assets/lab/data/avatar-textures.js', 'wiki-assets/lab/data/offline-textures.js'}:
        return value
    raise ValueError(f'Unregistered data file: {relative}')


def find_unsafe(value, trail=''):
    errors = []
    if isinstance(value, dict):
        for key, child in value.items():
            if key in REMOVE_KEYS or key == '$ref':
                errors.append(trail + '/' + key)
            errors.extend(find_unsafe(child, trail + '/' + key))
    elif isinstance(value, list):
        for index, child in enumerate(value):
            errors.extend(find_unsafe(child, trail + '/' + str(index)))
    elif isinstance(value, str) and not value.startswith('data:image/') and UNSAFE_VALUE.search(value):
        errors.append(trail)
    return errors


def data_files(root=ROOT):
    return sorted([*(root / 'wiki-assets/wiki/data').rglob('*.js'), *(root / 'wiki-assets/lab/data').glob('*.js')])


def player_summary(root=ROOT):
    """Fingerprints of retained player records, numerics and exact render inputs."""
    blocks = {}
    for file in data_files(root):
        relative = file.relative_to(root).as_posix()
        before = read_data(file)
        projected = sanitize(relative, before)
        # Descriptive import notes are editorial text, not a simulation input.
        if relative.endswith('/loadout.js'):
            projected.pop('sourceDescription', None)
            projected.pop('notes', None)
        blocks[relative] = digest(projected)
    index = read_data(root / 'wiki-assets/wiki/data/index.js')
    return {'blocks': blocks, 'counts': {'inventory': len(index['inventory']['items']),
            'equipment': len(index['equipment']), 'pets': len(index['pets']), 'decor': len(index['decor']),
            'skins': len(index['skin_catalog']), 'perks': len(index['perks'])}}


def build_manifest(root=ROOT):
    rows = []
    for file in data_files(root):
        relative = file.relative_to(root).as_posix()
        value = read_data(file)
        if sanitize(relative, value) != value or find_unsafe(value):
            raise ValueError(f'Unapproved or technical data fields remain: {relative}')
        rows.append({'file': relative, 'canonical_sha256': digest(value)})
    images = []
    for file in sorted((root / 'wiki-assets/images').glob('*')):
        if file.is_file():
            content = file.read_bytes()
            images.append({'path': file.relative_to(root).as_posix(), 'bytes': len(content), 'sha256': hashlib.sha256(content).hexdigest()})
    return {'format': 2, 'gameVersion': '12.0.1', 'data': rows, 'images': images,
            'playerFields': player_summary(root),
            'validationBasis': 'Preserved player fields, exact numerical curves, image bytes and 3D render inputs; browser detail, loadout round trip and base preview compared before/after.'}
