"""Build player catalog summaries and demand-loaded, content-versioned blocks."""
from __future__ import annotations
import argparse
import hashlib
import json
from pathlib import Path

ASSETS = Path(__file__).resolve().parents[1]
COLUMNS = ['id','title','titleLocalizationFallback','type','typeId','wikiGroup','wikiGroupId','quality','mailboxEligible']
BLOCK_SIZE = 80

def js(prefix, value):
    return (prefix + json.dumps(value,ensure_ascii=False,separators=(',',':')) + ';\n').encode('utf8')

def source_data(assets=ASSETS):
    text=(assets/'wiki-data.js').read_text('utf8')
    prefix='window.COS_WIKI_DATA='
    return json.JSONDecoder().raw_decode(text[text.index(prefix)+len(prefix):])[0]

def generated_files(assets=ASSETS):
    data=source_data(assets)
    outputs={}; blocks={}; membership={}
    ordered=sorted(data['articles'],key=lambda row:row['id'])
    for start in range(0,len(ordered),BLOCK_SIZE):
        key='b'+str(start//BLOCK_SIZE)
        records=ordered[start:start+BLOCK_SIZE]
        content=js('window.COS_WIKI_BLOCKS=window.COS_WIKI_BLOCKS||{};window.COS_WIKI_BLOCKS['+json.dumps(key)+']=',records)
        path='data/chunks/'+key+'.'+hashlib.sha256(content).hexdigest()[:16]+'.js'
        outputs[path]=content;blocks[key]=path
        for row in records:membership[row['id']]=key
    content=js('window.COS_WIKI_SEARCH=',[[row['id'],row['description']] for row in data['articles']])
    search='data/search.'+hashlib.sha256(content).hexdigest()[:16]+'.js';outputs[search]=content
    index={'schema':1,'columns':COLUMNS+['_block'],
           'rows':[[row[key] for key in COLUMNS]+[membership[row['id']]] for row in data['articles']],
           'blocks':blocks,'search':search,
           **{key:data[key] for key in ['currencies','groupCounts','meta','typeCounts']}}
    outputs['data/index.js']=js('window.COS_WIKI_INDEX=',index)
    # Prove summaries and full blocks keep every player value; no projection replaces source data.
    reconstructed={row['id']:row for start in range(0,len(ordered),BLOCK_SIZE) for row in ordered[start:start+BLOCK_SIZE]}
    assert [reconstructed[row['id']] for row in data['articles']]==data['articles']
    return outputs

def verify_generated(assets=ASSETS):
    expected=generated_files(assets)
    actual={path.relative_to(assets).as_posix() for path in (assets/'data').rglob('*.js')}
    assert actual==set(expected), 'Missing or obsolete lazy data blocks; run generate_lazy.py'
    for relative,content in expected.items():
        assert (assets/relative).read_text('utf8')==content.decode('utf8'), relative
    # Independently read the written payloads and reconstruct complete records.
    source=source_data(assets)
    index_text=(assets/'data/index.js').read_text('utf8')
    index=json.JSONDecoder().raw_decode(index_text[len('window.COS_WIKI_INDEX='):])[0]
    reconstructed={}
    for key, relative in index['blocks'].items():
        text=(assets/relative).read_text('utf8')
        prefix='window.COS_WIKI_BLOCKS['+json.dumps(key)+']='
        rows=json.JSONDecoder().raw_decode(text[text.index(prefix)+len(prefix):])[0]
        for row in rows:
            assert row['id'] not in reconstructed, 'Duplicate article across blocks'
            reconstructed[row['id']]=row
    assert len(reconstructed)==len(source['articles'])
    assert [reconstructed[row['id']] for row in source['articles']]==source['articles'], 'A player value or image association was changed'
    return len(expected)

def main():
    parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--check',action='store_true');args=parser.parse_args()
    if args.check:
        print('PASS: '+str(verify_generated())+' generated player resources match the full source.');return
    outputs=generated_files()
    directory=(ASSETS/'data').resolve()
    for old in directory.rglob('*.js'):
        assert old.resolve().is_relative_to(directory)
        if old.relative_to(ASSETS).as_posix() not in outputs:old.unlink()
    for relative,content in outputs.items():
        target=ASSETS/relative;target.parent.mkdir(parents=True,exist_ok=True)
        if not target.exists() or target.read_text('utf8')!=content.decode('utf8'):target.write_bytes(content)
    print('Generated '+str(len(outputs))+' player resources.')

if __name__=='__main__':main()
