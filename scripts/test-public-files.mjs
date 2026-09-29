import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { isPublicFile } from './lib/public-files.mjs';

const repository = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const checker = path.join(repository, 'scripts/check-site.mjs');
const verification = path.join(repository, '.verification');
fs.mkdirSync(verification, { recursive: true });
const workspace = fs.mkdtempSync(path.join(verification, 'public-files-'));
const excluded = [
  'DawnofZombiewiki/materials.html', 'DawnofZombiewiki/materials.js',
  'DawnofZombiewiki/data/media.js', 'DawnofZombiewiki/data/catalog.json',
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
  for (const name of ['index.html', 'app.js', 'styles.css', 'data/catalog.js', 'data/mechanics.js', 'data/asset-map.js', 'data/site-meta.js', 'assets/wiki-mark.svg', 'assets/images/图 #1.png', 'data/player/武器.csv', 'guides/01-生存.md']) {
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
