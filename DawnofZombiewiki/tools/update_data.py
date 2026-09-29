"""Refresh local runtime data without importing another Wiki or touching images/UI."""
from __future__ import annotations

import argparse
from pathlib import Path

from wiki_data import ROOT, file_matches, generated_files, load_data, player_exports


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root', type=Path, default=ROOT, help='Wiki directory; defaults to this script\'s parent Wiki.')
    parser.add_argument('--check', action='store_true', help='Check expected generated files without writing.')
    parser.add_argument('--exports', action='store_true', help='Also rebuild player CSVs and guides from JSON; review their diff.')
    args = parser.parse_args()
    root = args.root.resolve()
    changed = []
    # Exports run first so metadata includes their current row counts and headings.
    outputs = player_exports(*load_data(root)) if args.exports else {}
    if args.check:
        outputs.update(generated_files(root))
    else:
        for name, content in outputs.items():
            target = root / name
            if not file_matches(target, content):
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_bytes(content)
                changed.append(name)
        outputs = generated_files(root)
    for name, content in outputs.items():
        target = root / name
        if not file_matches(target, content):
            changed.append(name)
            if not args.check:
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_bytes(content)
    for name in changed:
        print(('Out of date: ' if args.check else 'Updated: ') + name)
    print(f'{len(changed)} generated file(s) ' + ('out of date.' if args.check else 'updated. JSON, images and page code were not modified.'))
    if args.check and changed:
        raise SystemExit(1)


if __name__ == '__main__':
    main()
