"""Verify Dawn Wiki data with the Python standard library; browser tests are separate."""
from __future__ import annotations

import argparse
from pathlib import Path

from wiki_data import ROOT, json_bytes
from verify_data import verify


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root', type=Path, default=ROOT)
    parser.add_argument('--data-only', action='store_true', help='Skip page markup checks; no browser is ever required.')
    args = parser.parse_args()
    root = args.root.resolve()
    try:
        report = verify(root, data_only=args.data_only)
    except (OSError, ValueError, KeyError, TypeError) as error:
        print(f'Dawn validation failed: {error}')
        raise SystemExit(1) from error
    target = root / 'reports/maintenance-validation.json'
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_bytes(json_bytes(report, pretty=True))
    print(f"Dawn data {report['result']}: {report['catalogueRows']:,} catalogue rows, "
          f"{report['visiblePlayerRows']:,} visible rows, {report['images']:,} images "
          f"({report['sha256SourceRecords']:,} source hashes), "
          f"{report['csvFiles']} CSVs and {report['guides']} guides.")
    for message in report['errors'][:20]:
        print('ERROR: ' + message)
    if report['warnings']:
        print(f"{len(report['warnings'])} documented historical CSV text differences remain; details in reports/maintenance-validation.json.")
    if report['errors']:
        raise SystemExit(1)


if __name__ == '__main__':
    main()
