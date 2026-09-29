"""Validate the source schema, exact lazy-data reconstruction and unchanged images."""
import json, re, sys
from update_data import ROOT, build, image_manifest
def canonical_text(data):
 return data.decode('utf-8-sig').replace('\r\n','\n').replace('\r','\n').encode('utf-8')
def main():
 outputs,rows=build()
 for path,expected in outputs.items():
  actual=ROOT/path
  if not actual.is_file() or canonical_text(actual.read_bytes())!=expected:raise ValueError('Outdated generated file: '+path+'; run python LDOE_Wiki/tools/update_data.py')
 expected=set(path for path in outputs if '/lazy/' in path)
 actual={path.relative_to(ROOT).as_posix() for path in (ROOT/'data/lazy').iterdir() if path.is_file()}
 if expected!=actual:raise ValueError('Unexpected or stale lazy files')
 baseline=json.loads((ROOT/'tools/image-sha256.json').read_text(encoding='utf-8'))
 if image_manifest()!=baseline:raise ValueError('Image bytes changed. Review additions/changes before --accept-images.')
 for row in rows:
  image=row.get('image')
  if image and (not re.fullmatch(r'assets/[a-zA-Z0-9_./-]+\.(webp|png|jpg|svg)',image) or '..' in image or not (ROOT/image).is_file()):raise ValueError('Broken image: '+str(image))
 print(f'PASS: source schema; all {len(rows):,} player records and relations; {len(outputs)-1} hash-addressed parts; {len(baseline):,} unchanged image files.')
if __name__=='__main__':
 try:main()
 except (ValueError,FileNotFoundError) as error:print('FAIL:',error,file=sys.stderr);sys.exit(1)
