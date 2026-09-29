"""Generate display-size portal icons; preserve the official source images.

Run: python scripts/build-game-icons.py (requires Pillow).
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ICONS = ROOT / 'assets/game-icons'
TARGET = ICONS / 'display'

def main():
    TARGET.mkdir(exist_ok=True)
    before = after = 0
    for name in ('dayr', 'craft', 'westland', 'dawn', 'ldoe', 'grimsoul'):
        source = ICONS / (name + '.webp')
        target = TARGET / source.name
        with Image.open(source) as image:
            image.thumbnail((384, 384), Image.Resampling.LANCZOS)
            image.save(target, 'WEBP', quality=85, method=6)
        before += source.stat().st_size
        after += target.stat().st_size
        print(f'{name}: {source.stat().st_size:,} -> {target.stat().st_size:,} bytes')
    print(f'Icons: {before:,} -> {after:,} bytes. Originals unchanged.')

if __name__ == '__main__':
    main()