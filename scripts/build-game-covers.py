"""Build lightweight hover-card covers from existing local game artwork.

Run: python scripts/build-game-covers.py (requires Pillow).
Only resizes/encodes display copies; originals and their aspect ratios stay intact.
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / 'assets/game-covers'
SOURCES = {
    'dayr': 'Day R Survival/wiki-assets/images/hero.jpg',
    'craft': 'assets/game-covers/originals/craft.jpg',
    'westland': 'assets/game-covers/originals/westland.png',
    'dawn': 'DawnofZombiewiki/assets/images/页面背景/废土首页背景--98746bccec.png',
    'ldoe': 'LDOE_Wiki/assets/hero.webp',
    'grimsoul': 'grimsoul_Wiki/assets/hero.webp',
}


def main():
    TARGET.mkdir(parents=True, exist_ok=True)
    before = after = 0
    for name, relative_source in SOURCES.items():
        source = ROOT / relative_source
        target = TARGET / (name + '.webp')
        with Image.open(source) as image:
            # Craft / Westland also share these images with their wider Wiki heroes.
            maximum = {'craft': 1280, 'westland': 1440}.get(name, 960)
            image.thumbnail((maximum, maximum), Image.Resampling.LANCZOS)
            image.save(target, 'WEBP', quality=82, method=6)
        before += source.stat().st_size
        after += target.stat().st_size
        print(f'{name}: {source.stat().st_size:,} -> {target.stat().st_size:,} bytes')
    print(f'Covers: {before:,} -> {after:,} bytes. Originals unchanged.')


if __name__ == '__main__':
    main()
