import test from 'node:test';
import assert from 'node:assert/strict';
import { inspectPlayerData } from './lib/player-data-policy.mjs';

test('Game implementation references and raw records are rejected, including nested object keys', () => {
  for (const value of [
    { logic: () => 0 },
    { item: { action: { $ref: 'placeholder' } } },
    { item: { raw: { events: [] } } },
    { text: 'function(proto=7,line=42)' },
    { type: 'ExampleStorageData' },
    { counts: { ExampleStorageData: 1 } },
    { source: 'assets/example.bundle' },
    { source: 'lib/example.lua' },
    { source: 'CAB-0123456789abcdef0123456789abcdef' },
    { source: 'RVA: 0x12345' },
    { source: 'C:\\private\\game-source' },
  ]) assert.ok(inspectPlayerData(value).length > 0, JSON.stringify(value));
});

test('Player values, stable links, local images and rendering mappings remain valid', () => {
  assert.deepEqual(inspectPlayerData({
    id: 5, item_id: 5, key: 'damage', recipeIds: [3], name: 'Example sword',
    stats: [{ key: 'damage', value: 120 }], rawDamage: 120,
    image: 'assets/images/weapon.png', sha256: 'a'.repeat(64),
    avatar: { parts: { head: { mesh: 'mesh_1', material: 'mat_2' } },
      meshes: { mesh_1: { vertices: [0, 1, 2] } }, materials: { mat_2: { texture: 'tex_3' } } },
    sourceNote: 'Historical event; current availability may differ.',
  }), []);
});

test('The scanner reports locations without returning source values', () => {
  assert.deepEqual(inspectPlayerData({ rows: [{ source: 'lib/example.lua' }] }), [
    { location: '$.rows[0].source', reason: 'game code/archive filename' },
  ]);
});
test('CLI checks maintained JSON as well as browser payloads and supports split render data', async () => {
  const fs = await import('node:fs');
  const path = await import('node:path');
  const { spawnSync } = await import('node:child_process');
  const { fileURLToPath } = await import('node:url');
  const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const parent = path.join(repo, '.verification');
  fs.mkdirSync(parent, { recursive: true });
  const fixture = fs.mkdtempSync(path.join(parent, 'player-data-'));
  const write = (name, source) => {
    const file = path.join(fixture, name);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, source);
  };
  write('assets/games.js', 'window.LCZ_GAMES=[{links:[{href:"Example/index.html"}]},{links:[{href:"DawnofZombiewiki/index.html"}]},{links:[{href:"LDOE_Wiki/index.html"}]}];');
  write('Example/data/catalog.js', 'window.DATA={id:1,image:"assets/images/example.png",stats:{damage:12}};');
  write('Example/lab/data/avatar-meshes.js', 'window.WESTLAND_LAB_DATA.avatar.meshes={demo:{positions:"AAAA"}};');
  write('DawnofZombiewiki/data/lazy/detail-0-fixture.js', 'window.DOZ_DATA_PARTS["detail-0"]={id:1,stats:{damage:12}};');
  write('LDOE_Wiki/data/lazy/details-item-0.0123456789abcdef.js', 'window.LDOE_PARTS["details-item-0"]=[{id:"item-1",stats:[{label:"Damage",value:12}]}];');
  write('Example/runtime.js', 'class PlayerView { render() { document.body.textContent="Demo"; } }');
  const run = () => spawnSync(process.execPath, [path.join(repo, 'scripts/check-player-data.mjs'), '--root', fixture], { encoding: 'utf8' });
  let result = run();
  assert.equal(result.status, 0, result.stdout + result.stderr);
  write('Example/reports/provenance.json', JSON.stringify({ source: 'assets/private-example.lua' }));
  result = run();
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /provenance\.json/);
  write('Example/reports/provenance.json', JSON.stringify({ imageCount: 1 }));
  write('Example/data/catalog.js', 'window.DATA={logic:()=>12};');
  result = run();
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /executable function inside data payload/);
  write('Example/data/catalog.js', 'window.DATA={id:1};');
  write('Example/original.lu', 'placeholder');
  result = run();
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /original\.lu: game code\/archive file/);
});