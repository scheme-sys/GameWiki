"""Verify generated player data against its maintenance source and original image hashes."""
import json
from update_data import ROOT, build, sources, image_hashes

def main():
 data=sources();boot,files=build(data)
 for name,payload in files.items():
  path=ROOT/name
  if not path.is_file() or path.read_bytes()!=payload:raise ValueError('Stale or missing generated file: '+name+'; run tools/update_data.py')
 actual={path.relative_to(ROOT).as_posix() for path in (ROOT/'data/lazy').glob('*') if path.is_file()}
 if actual!=set(boot['manifest'].values()):raise ValueError('Unexpected stale data chunks')
 images=image_hashes()
 if images!=json.loads((ROOT/'tools/image-sha256.json').read_text(encoding='utf8')):raise ValueError('Image baseline differs; review changes before --accept-images')
 restored=[]
 for i in range((len(data['entries'])+boot['detailSpan']-1)//boot['detailSpan']):
  text=files[boot['manifest']['details-'+str(i)]].decode('utf8')
  restored.extend(json.loads(text.split('=',1)[1].rstrip().rstrip(';')))
 if restored!=data['entries']:raise ValueError('Player details changed during generation')
 print(f"PASS: {len(restored)} complete player entries, {len(boot['manifest'])} exact generated chunks, {len(images)} unchanged images")
if __name__=='__main__':main()
