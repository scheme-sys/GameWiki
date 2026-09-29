"""Keep maintenance JSON limited to player data and local presentation assets."""
from __future__ import annotations

import re

REMOVED_FIELDS = frozenset({
    'key', 'rarityCode', 'rarityEvidence', 'searchText', 'initializationStats',
    'iconBundleId', 'iconSmallBundleId', 'referenceIconBundleId', 'imageReferenceLabel',
    'registeredCompanion', 'byBundleId', 'byName', 'originalName', 'source',
    'raw', '$ref', 'hasExplicitRowConditions', 'conditionsVerified',
    'functionName', 'className', 'originalPath', 'sourcePath', 'prefabPath',
    'bundleId', 'bundleName', 'rawData', 'provenance',
})
TECHNICAL_REFERENCE = re.compile(
    r'function\s*\(\s*proto|CAB-[0-9a-f]{16,}|'
    r'[\w./\\-]+\.(?:bundle|bun|lu|lua|cs)\b|\bStorageData\b', re.I)
SCENARIO_FIELDS = frozenset({'label', 'value', 'attackInterval', 'levels'})
ABILITY_FIELDS = frozenset({'name', 'description', 'cooldown', 'extra', 'image', 'referenceImage'})
IMAGE_FIELDS = frozenset({'name', 'path', 'bytes', 'width', 'height', 'category', 'categoryLabel', 'categories'})


def validate_player_data(catalog, mechanics, assets):
    """Fail before publishing if a future edit reintroduces removed source metadata."""
    def walk(value, path):
        if isinstance(value, dict):
            for key, child in value.items():
                if key in REMOVED_FIELDS:
                    raise ValueError(f'Unsupported technical field at {path}.{key}; keep player fields only')
                walk(child, f'{path}.{key}')
        elif isinstance(value, list):
            for index, child in enumerate(value):
                walk(child, f'{path}[{index}]')
        elif isinstance(value, str) and TECHNICAL_REFERENCE.search(value):
            # Describe the location, never echo the source text into a report.
            raise ValueError(f'Technical source reference at {path}; remove it from player data')

    for name, value in [('catalog', catalog), ('mechanics', mechanics), ('asset-map', assets)]:
        walk(value, name)
    for dataset in ('entries', 'companions'):
        for row in catalog.get(dataset, []):
            for stat in row.get('scenarioStats', []):
                if set(stat) - SCENARIO_FIELDS:
                    raise ValueError(f'Unexpected scenario fields in {dataset} record')
            for ability in row.get('abilities', []):
                if set(ability) - ABILITY_FIELDS:
                    raise ValueError(f'Unexpected ability fields in {dataset} record')
    if set(assets) != {'version', 'hero', 'images'}:
        raise ValueError('Image metadata must contain only version, hero and local images')
    for image in assets.get('images', []):
        if set(image) - IMAGE_FIELDS:
            raise ValueError('Unexpected image metadata; retain local player asset details only')