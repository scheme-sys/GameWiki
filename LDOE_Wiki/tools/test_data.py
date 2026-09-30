"""Deterministic maintenance checks; no browser, network or source mutations."""
import copy, hashlib, json, unittest
from unittest.mock import patch
import update_data as data
from verify_data import canonical_text
class PlayerDataTests(unittest.TestCase):
 @classmethod
 def setUpClass(cls):
  cls.catalog,cls.world=data.sources()
  cls.outputs,cls.rows=data.build()
 def test_complete_player_records(self):
  collections=[self.catalog['items'],self.catalog['recipes'],self.world['creatures'],self.world['locations']]
  self.assertEqual(len(self.rows),sum(len(collection) for collection in collections))
  normalized={row['id']:row for row in self.rows}
  for collection in collections:
   for source in collection:
    for key,value in source.items():self.assertEqual(normalized[source['id']][key],list(dict.fromkeys(value)) if key=='tags' else value,(source['id'],key))
 def test_entity_codes_are_searchable_and_preserved_in_every_card(self):
  parts={path.split('/')[-1].split('.')[0]:json.loads(payload.decode().split('=',1)[1].rstrip(';\n')) for path,payload in self.outputs.items() if '/lazy/' in path}
  search={row['id']:row['searchText'] for row in parts['search']}
  cards={row['id']:row for name,rows in parts.items() if name.startswith('category-') for row in rows}
  items={row['id']:row for row in self.catalog['items']}
  for row in self.rows:
   if row.get('entityCode'):
    self.assertEqual(cards[row['id']]['entityCode'],row['entityCode'])
    self.assertIn(row['entityCode'].lower(),search[row['id']])
   for variant in row.get('variants',[]):
    self.assertIn(variant['entityCode'].lower(),search[row['id']])
   if row.get('kind')=='recipes':self.assertEqual(row['entityCode'],items[row['outputId']]['entityCode'])
  self.assertEqual(items['item-0001']['entityCode'],'wood')
  self.assertEqual(next(row for row in self.world['creatures'] if row['id']=='creature-0001')['entityCode'],'weak_zombie')

 def test_stable_content_addresses(self):
  self.assertEqual(self.outputs,data.build()[0])
  for path,payload in self.outputs.items():
   if '/lazy/' in path:self.assertEqual(path.split('.')[-2],hashlib.sha256(payload).hexdigest()[:16])
 def test_player_change_invalidates_only_relevant_parts(self):
  catalog=copy.deepcopy(self.catalog)
  row=next(row for row in catalog['items'] if row['id']=='item-0069')
  row['stats'][0]['value']+=1
  with patch.object(data,'sources',return_value=(catalog,self.world)):changed,_=data.build()
  before={path.split('/')[-1].split('.')[0]:payload for path,payload in self.outputs.items()}
  after={path.split('/')[-1].split('.')[0]:payload for path,payload in changed.items()}
  self.assertNotEqual(before['details-item-2'],after['details-item-2'])
  self.assertNotEqual(before['category-weapons'],after['category-weapons'])
  self.assertEqual(before['category-creatures'],after['category-creatures'])
  self.assertEqual(before['relations'],after['relations'])
 def test_existing_ids_and_gaps_remain_exact(self):
  boot=json.loads(self.outputs['data/bootstrap.js'].decode().split('=',1)[1].rstrip(';\n'))
  ids={row['id'] for row in self.rows}
  reconstructed={prefix+'-'+str(i).zfill(4) for prefix,end in boot['ranges'].items() for i in range(1,end+1) if i not in boot['missingIds'][prefix]}
  self.assertEqual(reconstructed,ids)
 def test_nested_schema_rejects_undeclared_fields(self):
  for sample in [
   {'stats':[{'label':'伤害','value':20,'extra':'unused'}]},
   {'recipe':{'id':'recipe-0001','className':'UnusedClass'}},
   {'variants':[{'name':'区域','stats':[],'gameFunction':'Unused'}]},
   {'sources':[{'title':'资料','url':'javascript:alert(1)'}]}
  ]:
   with self.subTest(sample=sample),self.assertRaises(ValueError):data.check_nested(sample,'sample')
 def test_game_implementation_metadata_is_rejected(self):
  for value in [{'className':'UnusedClass'},{'raw':{}},{'sourcePath':'asset/Game.cs'},{'note':'archive/CAB-0123456789abcdef0123456789abcdef'}]:
   with self.subTest(value=value),self.assertRaises(ValueError):data.audit(value)
 def test_maintenance_line_endings_are_portable(self):
  payload=b'window.example={"name":"text"};\n'
  self.assertEqual(canonical_text(b'\xef\xbb\xbf'+payload.replace(b'\n',b'\r\n')),payload)
  self.assertNotEqual(canonical_text(payload.replace(b'text',b'changed')),payload)
 def test_image_manifest_matches_bytes(self):
  baseline=json.loads((data.ROOT/'tools/image-sha256.json').read_text(encoding='utf-8'))
  self.assertEqual(data.image_manifest(),baseline)
if __name__=='__main__':unittest.main()
