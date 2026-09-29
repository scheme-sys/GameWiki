"""Generate the monster catalog's versioned demand-load manifest."""
import argparse
import hashlib
import json
from pathlib import Path

ASSETS=Path(__file__).resolve().parents[1]

def generated_manifest(assets=ASSETS):
    source=(assets/'data/monsters.js').read_text('utf8')
    prefix='window.DAYR_DATA.monsters = '
    monsters=json.JSONDecoder().raw_decode(source[source.index(prefix)+len(prefix):].lstrip())[0]
    payload={'schema':1,'count':len(monsters),'ids':[str(row['id']) for row in monsters],
             'url':'monsters.js?v='+hashlib.sha256(source.encode('utf8')).hexdigest()[:16]}
    return 'window.DAYR_MONSTER_MANIFEST='+json.dumps(payload,ensure_ascii=False,separators=(',',':'))+';\n'

def verify_generated(assets=ASSETS):
    assert (assets/'data/lazy-manifest.js').read_text('utf8')==generated_manifest(assets), 'Run tools/generate_lazy.py after changing monster records.'

def main():
    parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--check',action='store_true');args=parser.parse_args()
    if args.check:verify_generated();print('PASS: demand-load manifest matches every monster ID and content version.')
    else:(ASSETS/'data/lazy-manifest.js').write_bytes(generated_manifest().encode('utf8'));print('Generated monster manifest.')

if __name__=='__main__':main()
