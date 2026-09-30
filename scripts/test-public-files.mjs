import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { isPublicFile } from './lib/public-files.mjs';
import { createTestWorkspace } from './lib/test-workspace.mjs';

const repository = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const checker = path.join(repository, 'scripts/check-site.mjs');
const workspace = createTestWorkspace('public-files', after);
const excluded = [
  'DawnofZombiewiki/materials.html', 'DawnofZombiewiki/materials.js',
  'DawnofZombiewiki/data/media.js', 'DawnofZombiewiki/data/catalog.json',
  'DawnofZombiewiki/data/catalog.js', 'DawnofZombiewiki/data/mechanics.js',
  'DawnofZombiewiki/data/mechanics.json', 'DawnofZombiewiki/data/asset-map.json',
  'DawnofZombiewiki/reports/audit.html', 'DawnofZombiewiki/reports/image-manifest.json',
  'DawnofZombiewiki/tools/developer.js', 'DawnofZombiewiki/README.md',
  'DawnofZombiewiki/assets/source/archive.png', 'DawnofZombiewiki/data/private.csv',
  'DawnofZombiewiki/guides/hidden/developer.md',
];
const write = (root, name, value) => {
  const file = path.join(root, name);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, value);
};
const check = (root, ...args) => spawnSync(process.execPath, [checker, '--root', root, ...args], { encoding: 'utf8' });
function fixture(name) {
  const root = path.join(workspace, name);
  write(root, 'index.html', '<script src="assets/games.js"></script><a href="DawnofZombiewiki/index.html">Dawn</a><a href="./">Home</a>');
  write(root, '404.html', '<p>Not found</p>');
  write(root, '.nojekyll', '');
  write(root, 'assets/icon.svg', '<svg xmlns="http://www.w3.org/2000/svg"/>');
  write(root, 'assets/shared.js', 'window.shared = true;');
  write(root, 'assets/shared.css', 'body { color: green; }');
  write(root, 'assets/games.js', 'window.ORBIT_GAMES = [{id:"dawn",name:"Dawn",image:"assets/icon.svg",links:[{href:"DawnofZombiewiki/index.html"}]}];');
  write(root, 'DawnofZombiewiki/index.html', '<link rel="stylesheet" href="../assets/shared.css"><script src="../assets/shared.js"></script><script src="data/asset-map.js"></script><script src="data/site-meta.js"></script><script src="app.js"></script>');
  write(root, 'DawnofZombiewiki/app.js', 'window.ready = true;');
  write(root, 'DawnofZombiewiki/styles.css', 'body { color: blue; }');
  write(root, 'DawnofZombiewiki/assets/images/图 #1.png', 'fixture image');
  write(root, 'DawnofZombiewiki/data/asset-map.js', 'window.DOZ_ASSETS = {byBundleId:{8:"assets/images/图 #1.png"}};');
  write(root, 'DawnofZombiewiki/data/site-meta.js', 'window.DOZ_SITE_META = {downloads:{csv:[{href:"data/player/武器.csv"}],guides:[{href:"guides/01-生存.md"}]}};');
  write(root, 'DawnofZombiewiki/data/player/武器.csv', '名称,基础伤害\n测试,230–240\n');
  write(root, 'DawnofZombiewiki/guides/01-生存.md', '# Player guide\n');
  for (const name of excluded) write(root, name, 'DEVELOPMENT_ONLY');
  return root;
}

test('Public selector includes only Dawn runtime, images, player CSVs and guides', () => {
  for (const name of ['index.html', 'app.js', 'data-loader.js', 'styles.css', 'data/bootstrap.js', 'data/lazy/detail-0-0123456789abcdef.js', 'data/asset-map.js', 'data/site-meta.js', 'assets/wiki-mark.svg', 'assets/images/图 #1.png', 'data/player/武器.csv', 'guides/01-生存.md']) {
    assert.equal(isPublicFile(`DawnofZombiewiki/${name}`), true, name);
  }
  for (const name of [...excluded, 'DawnofZombiewiki/data/player/../catalog.js', '.git/config', 'Sample Game/tools/debug.js']) {
    assert.equal(isPublicFile(name), false, name);
  }
});

test('Source and artifact checks share the whitelist; player downloads and shared dependencies survive staging', () => {
  const root = fixture('valid');
  const sourceChecked = check(root);
  assert.equal(sourceChecked.status, 0, sourceChecked.stdout + sourceChecked.stderr);
  const output = path.join(workspace, 'published');
  const staged = check(root, '--stage', output);
  assert.equal(staged.status, 0, staged.stdout + staged.stderr);
  for (const name of excluded) assert.equal(fs.existsSync(path.join(output, name)), false, name);
  for (const name of ['DawnofZombiewiki/data/player/武器.csv', 'DawnofZombiewiki/guides/01-生存.md', 'DawnofZombiewiki/assets/images/图 #1.png']) {
    assert.deepEqual(fs.readFileSync(path.join(output, name)), fs.readFileSync(path.join(root, name)), name);
  }
  assert.match(fs.readFileSync(path.join(output, 'DawnofZombiewiki/index.html'), 'utf8'), /shared\.js\?v=[a-f0-9]{64}/);
  const artifactChecked = check(output);
  assert.equal(artifactChecked.status, 0, artifactChecked.stdout + artifactChecked.stderr);
  assert.equal(sourceChecked.stdout.match(/Checked .*references\./)[0], artifactChecked.stdout.match(/Checked .*references\./)[0]);
});

test('A public page cannot link to an existing but excluded maintenance resource', () => {
  const root = fixture('forbidden-link');
  write(root, 'DawnofZombiewiki/app.js', 'const markup = \'<a href="materials.html">Developer browser</a>\';');
  const result = check(root);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /resource is excluded from the public artifact: materials\.html/);
});

test('Missing data-mapped images and player downloads fail source checks', () => {
  const root = fixture('missing-reference');
  write(root, 'DawnofZombiewiki/data/asset-map.js', 'window.DOZ_ASSETS = {byBundleId:{9:"assets/images/missing.png"}};');
  write(root, 'DawnofZombiewiki/data/site-meta.js', 'window.DOZ_SITE_META = {downloads:{csv:[{href:"data/player/missing.csv"}]}};');
  const result = check(root);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /missing local resource assets\/images\/missing\.png/);
  assert.match(result.stderr, /missing local resource data\/player\/missing\.csv/);
});

test('Lazy manifests must reference published chunks and maintenance catalogs stay private', () => {
  assert.equal(isPublicFile('Craft of Survival/wiki-assets/wiki-data.js'), false);
  assert.equal(isPublicFile('Craft of Survival/wiki-assets/data/index.js'), true);
  assert.equal(isPublicFile('DawnofZombiewiki/data/lazy/private.js'), false);
  const root = fixture('lazy-missing');
  write(root, 'DawnofZombiewiki/data/bootstrap.js', 'window.DOZ_BOOTSTRAP={manifest:{"detail-0":"data/lazy/detail-0-0123456789abcdef.js"}};');
  let result = check(root);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /missing local resource data\/lazy\/detail-0/);
  write(root, 'DawnofZombiewiki/data/lazy/detail-0-0123456789abcdef.js', 'window.DOZ_DATA_PARTS["detail-0"]={image:"assets/images/图 #1.png"};');
  result = check(root);
  assert.equal(result.status, 0, result.stdout + result.stderr);
});


test('LDOE publishes only runtime data and validates every lazy image and chunk reference', () => {
  for (const name of ['index.html', 'styles.css', 'app.js', 'data-loader.js', 'favicon.svg', 'assets/hero.webp', 'assets/items/example.webp', 'data/bootstrap.js', 'data/lazy/details-item-0.0123456789abcdef.js']) {
    assert.equal(isPublicFile('LDOE_Wiki/' + name), true, name);
  }
  for (const name of ['data/catalog.js', 'data/world.js', 'data/lazy/private.js', 'data/source.json', 'tools/import.js', 'reports/example.json', 'README.md']) {
    assert.equal(isPublicFile('LDOE_Wiki/' + name), false, name);
  }
  const root = fixture('ldoe');
  write(root, 'assets/games.js', 'window.ORBIT_GAMES=[{id:"ldoe",name:"LDOE",image:"assets/icon.svg",links:[{href:"LDOE_Wiki/index.html"}]}];');
  write(root, 'index.html', '<script src="assets/games.js"></script><a href="LDOE_Wiki/index.html">LDOE</a>');
  write(root, 'LDOE_Wiki/index.html', '<script src="data/bootstrap.js"></script>');
  write(root, 'LDOE_Wiki/data/bootstrap.js', 'window.LDOE_BOOTSTRAP={manifest:{"details-item-0":"data/lazy/details-item-0.0123456789abcdef.js"}};');
  let result = check(root);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /missing local resource data\/lazy\/details-item-0/);
  write(root, 'LDOE_Wiki/data/lazy/details-item-0.0123456789abcdef.js', 'window.LDOE_PARTS["details-item-0"]=[{id:"item-1",image:"assets/items/example.webp"}];');
  result = check(root);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /missing local resource assets\/items\/example.webp/);
  write(root, 'LDOE_Wiki/assets/items/example.webp', 'fixture image');
  write(root, 'LDOE_Wiki/data/catalog.js', 'MAINTENANCE_ONLY');
  write(root, 'LDOE_Wiki/data/world.js', 'MAINTENANCE_ONLY');
  const output = path.join(workspace, 'ldoe-published');
  result = check(root, '--stage', output);
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.equal(fs.existsSync(path.join(output, 'LDOE_Wiki/data/catalog.js')), false);
  assert.equal(fs.existsSync(path.join(output, 'LDOE_Wiki/data/world.js')), false);
  assert.deepEqual(fs.readFileSync(path.join(output, 'LDOE_Wiki/assets/items/example.webp')), fs.readFileSync(path.join(root, 'LDOE_Wiki/assets/items/example.webp')));
});


test('Grim Soul publishes only runtime data and validates every lazy image and chunk reference', () => {
  for (const name of ['index.html', 'assets/wiki.css', 'assets/wiki.js', 'data-loader.js', 'assets/favicon.svg', 'assets/hero.webp', 'assets/images/example.webp', 'data/bootstrap.js', 'data/lazy/details-0.0123456789abcdef.js']) {
    assert.equal(isPublicFile('grimsoul_Wiki/' + name), true, name);
  }
  for (const name of ['assets/data.js', 'data/catalog.json', 'data/lazy/private.js', 'data/source.json', 'tools/import.js', 'reports/example.json', 'README.md']) {
    assert.equal(isPublicFile('grimsoul_Wiki/' + name), false, name);
  }
  const root = fixture('grim');
  write(root, 'assets/games.js', 'window.ORBIT_GAMES=[{id:"grimsoul",name:"Grim Soul",image:"assets/icon.svg",links:[{href:"grimsoul_Wiki/index.html"}]}];');
  write(root, 'index.html', '<script src="assets/games.js"></script><a href="grimsoul_Wiki/index.html">Grim Soul</a>');
  write(root, 'grimsoul_Wiki/index.html', '<script src="data/bootstrap.js"></script>');
  write(root, 'grimsoul_Wiki/data/bootstrap.js', 'window.GRIM_BOOTSTRAP={manifest:{"details-0":"data/lazy/details-0.0123456789abcdef.js"}};');
  let result = check(root);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /missing local resource data\/lazy\/details-0/);
  write(root, 'grimsoul_Wiki/data/lazy/details-0.0123456789abcdef.js', 'window.GRIM_PARTS["details-0"]=[{id:"item-1",image:"assets/images/example.webp"}];');
  result = check(root);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /missing local resource assets\/images\/example.webp/);
  write(root, 'grimsoul_Wiki/assets/images/example.webp', 'fixture image');
  write(root, 'grimsoul_Wiki/assets/data.js', 'MAINTENANCE_ONLY');
  write(root, 'grimsoul_Wiki/data/catalog.json', 'MAINTENANCE_ONLY');
  const output = path.join(workspace, 'grim-published');
  result = check(root, '--stage', output);
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.equal(fs.existsSync(path.join(output, 'grimsoul_Wiki/assets/data.js')), false);
  assert.equal(fs.existsSync(path.join(output, 'grimsoul_Wiki/data/catalog.json')), false);
  assert.deepEqual(fs.readFileSync(path.join(output, 'grimsoul_Wiki/assets/images/example.webp')), fs.readFileSync(path.join(root, 'grimsoul_Wiki/assets/images/example.webp')));
});


test('Every shared game switcher includes all registered games', () => {
  const root = fixture('navigation');
  write(root, 'DawnofZombiewiki/index.html', '<nav class="atlas-nav"><div class="atlas-menu"><a href="../index.html">Home</a></div></nav>');
  let result = check(root);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /game switcher is missing dawn/);
  write(root, 'DawnofZombiewiki/index.html', '<nav class="atlas-nav"><div class="atlas-menu"><a href="index.html">Dawn</a></div></nav>');
  result = check(root);
  assert.equal(result.status, 0, result.stdout + result.stderr);
});

test('Registry cover images must exist in the published assets', () => {
  const root = fixture('cover-image');
  write(root, 'assets/games.js', 'window.ORBIT_GAMES=[{id:"dawn",name:"Dawn",image:"assets/icon.svg",cover:{image:"assets/game-covers/dawn.webp",position:"45% 40%"},links:[{href:"DawnofZombiewiki/index.html"}]}];');
  let result = check(root);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /missing local resource assets\/game-covers\/dawn.webp/);
  write(root, 'assets/game-covers/dawn.webp', 'fixture cover');
  result = check(root);
  assert.equal(result.status, 0, result.stdout + result.stderr);
});

test('Raw Craft source folder and cover originals never enter the public artifact', () => {
  for (const name of ['craftsurvival/index.html', 'craftsurvival/assets/image.png',
    'assets/game-covers/originals/craft.jpg', 'assets/game-covers/originals/westland.png']) {
    assert.equal(isPublicFile(name), false, name);
  }
  assert.equal(isPublicFile('assets/game-covers/craft.webp'), true);
  const root = fixture('cover-originals');
  write(root, 'assets/game-covers/originals/craft.jpg', 'maintenance original');
  write(root, 'assets/game-covers/craft.webp', 'display image');
  write(root, 'craftsurvival/index.html', '<p>source only</p>');
  const output = path.join(workspace, 'cover-originals-published');
  const result = check(root, '--stage', output);
  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.equal(fs.existsSync(path.join(output, 'assets/game-covers/originals')), false);
  assert.equal(fs.existsSync(path.join(output, 'craftsurvival')), false);
  assert.equal(fs.existsSync(path.join(output, 'assets/game-covers/craft.webp')), true);
});

test('Only the three reviewed recordings publish; missing playlist audio is rejected', () => {
  for (const name of ['moonlight-1.mp3','moonlight-2.mp3','moonlight-3.mp3']) assert.equal(isPublicFile('assets/music/'+name),true);
  for (const name of ['README.md','source.wav','source.mp3','notes.js']) assert.equal(isPublicFile('assets/music/'+name),false);
  const root=fixture('music');
  write(root,'assets/music-player.js',"const tracks=[{file:'music/moonlight-1.mp3'}];");
  assert.notEqual(check(root).status,0);
  write(root,'assets/music/moonlight-1.mp3','reviewed recording');
  assert.equal(check(root).status,0);
});


test('Westland internal analysis publishes without adding a fourth global game link', () => {
  const root = fixture('westland-analysis');
  const registry = path.join(root, 'assets/games.js');
  const game = ',{id:"westland",name:"Westland",image:"assets/icon.svg",links:[{href:"Westland%20Survival/westland_difficulty_design.html"}]}];';
  fs.writeFileSync(registry, fs.readFileSync(registry, 'utf8').replace(/\];$/, game));
  const analysis = 'Westland Survival/westland_difficulty_analysis.html';
  write(root, 'Westland Survival/westland_difficulty_design.html', '<a href="westland_difficulty_analysis.html">Difficulty analysis</a>');
  assert.equal(isPublicFile(analysis), true);
  assert.notEqual(check(root).status, 0, 'The registered internal page must exist');
  write(root, analysis, '<link rel="stylesheet" href="../assets/shared.css"><script src="../assets/shared.js"></script><a href="westland_difficulty_design.html">Back to lab</a>');
  assert.equal(check(root).status, 0);
  const output = path.join(workspace, 'westland-analysis-artifact');
  const result = check(root, '--stage', output);
  assert.equal(result.status, 0, result.stderr + result.stdout);
  assert.ok(fs.existsSync(path.join(output, analysis)));
  assert.match(fs.readFileSync(path.join(output, analysis), 'utf8'), /shared\.js\?v=[a-f0-9]{64}/);
  assert.ok(!fs.readFileSync(path.join(output, 'assets/games.js'), 'utf8').includes('westland_difficulty_analysis'));
  assert.equal(check(output).status, 0, 'The standalone artifact keeps the internal destination');
});
