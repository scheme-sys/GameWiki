import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { versionHtmlAssets } from './lib/version-html-assets.mjs';

const repository = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const verification = path.join(repository, '.verification');
fs.mkdirSync(verification, { recursive: true });
const workspace = fs.mkdtempSync(path.join(verification, 'asset-versions-'));
const digest = (value) => createHash('sha256').update(value).digest('hex');
const read = (file) => fs.readFileSync(file, 'utf8');
const write = (file, value) => { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, value); };
const source = path.join(workspace, 'source');
const stylesheet = '<link rel="stylesheet" href="assets/style.css?theme=a%20b&amp;tag=a&amp;tag=b&amp;v=old#focus">';
const script = "<script defer src='assets/app.js?debug=1&v=old&v=older#boot'></script>";
const untouched = [
  '<script src="https://cdn.example/app.js?v=external"></script>',
  '<link rel="stylesheet" href="//cdn.example/site.css?theme=dark#top">',
  '<link rel="preload" as="style" href="assets/style.css?preload=1">',
  '<link rel="icon" href="assets/icon.svg?v=icon">',
  '<img src="assets/icon.svg?v=image#symbol">',
  '<a href="#top">Top</a>',
  '<!-- <script src="assets/app.js?v=comment"></script> -->',
  '<script>const example = \'<link rel="stylesheet" href="assets/style.css?v=literal">\';</script>',
  '<div data-example="<link rel=\'stylesheet\' href=\'assets/style.css?v=attribute\'>"></div>',
];
write(path.join(source, 'index.html'), '<!doctype html><html><head>' + stylesheet + script +
  '<script src="assets/games.js"></script><script src=assets/app.js?flag=1></script>' +
  '</head><body id="top">' + untouched.join('\n') + '</body></html>');
write(path.join(source, '404.html'), '<!doctype html><link rel="stylesheet" href="assets/style.css"><p>Not found</p>');
write(path.join(source, '.nojekyll'), '');
write(path.join(source, 'assets/style.css'), 'body { color: green; }');
write(path.join(source, 'assets/app.js'), 'window.ready = true;');
write(path.join(source, 'assets/icon.svg'), '<svg xmlns="http://www.w3.org/2000/svg"/>');
write(path.join(source, 'assets/games.js'), 'window.ORBIT_GAMES = [{id:"sample",name:"Sample",image:"assets/icon.svg",links:[{href:"Sample%20Game/wiki.html"}]}];');
write(path.join(source, 'Sample Game/wiki.html'), '<!doctype html><LINK HREF="../assets/style.css?lang=zh#menu" REL="alternate Stylesheet"><script src="../assets/app.js"></script><p>Game</p>');
write(path.join(source, 'scripts/developer.js'), 'throw new Error("Never publish this developer file");');
const htmlPaths = ['index.html', '404.html', 'Sample Game/wiki.html'];
const originalHtml = htmlPaths.map((file) => read(path.join(source, file)));
const cssHash = digest(read(path.join(source, 'assets/style.css')));
const jsHash = digest(read(path.join(source, 'assets/app.js')));
function artifact(name) {
  const root = path.join(workspace, name);
  fs.cpSync(source, root, { recursive: true });
  return { root, html: htmlPaths.map((file) => path.join(root, file)) };
}

test('Content hashes are stable across independent artifacts and repeated rewriting', () => {
  const first = artifact('stable-a'), second = artifact('stable-b');
  versionHtmlAssets(first.root, first.html);
  versionHtmlAssets(second.root, second.html);
  assert.deepEqual(first.html.map(read), second.html.map(read));
  const once = first.html.map(read);
  assert.equal(versionHtmlAssets(first.root, first.html).changedFiles, 0);
  assert.deepEqual(first.html.map(read), once);
  assert.ok(read(first.html[0]).includes(`v=${jsHash}#boot`));
  assert.ok(read(first.html[0]).includes(`v=${cssHash}#focus`));
  assert.ok(read(first.html[2]).includes(`../assets/app.js?v=${jsHash}`));
});

test('Changing JavaScript or CSS changes only the corresponding content version', () => {
  const stage = artifact('changed');
  versionHtmlAssets(stage.root, stage.html);
  write(path.join(stage.root, 'assets/app.js'), 'window.ready = false;');
  versionHtmlAssets(stage.root, stage.html);
  const changedJs = digest('window.ready = false;');
  assert.ok(read(stage.html[0]).includes(`v=${changedJs}#boot`));
  assert.ok(read(stage.html[0]).includes(`v=${cssHash}#focus`));
  assert.ok(!read(stage.html[0]).includes(`v=${jsHash}`));
  write(path.join(stage.root, 'assets/style.css'), 'body { color: blue; }');
  versionHtmlAssets(stage.root, stage.html);
  assert.ok(read(stage.html[0]).includes(`v=${digest('body { color: blue; }')}#focus`));
  assert.ok(read(stage.html[0]).includes(`v=${changedJs}#boot`));
});

test('Other query parameters, fragments and non-target elements remain intact', () => {
  const stage = artifact('preserved');
  versionHtmlAssets(stage.root, stage.html);
  const html = read(stage.html[0]);
  assert.ok(html.includes(`assets/style.css?theme=a%20b&amp;tag=a&amp;tag=b&amp;v=${cssHash}#focus`));
  assert.ok(html.includes(`assets/app.js?debug=1&amp;v=${jsHash}#boot`));
  assert.ok(html.includes(`src=assets/app.js?flag=1&amp;v=${jsHash}>`));
  for (const original of untouched) assert.ok(html.includes(original), original);
  assert.ok(read(stage.html[2]).includes(`../assets/style.css?lang=zh&amp;v=${cssHash}#menu`));
});

test('Staging leaves source HTML unchanged, excludes tools, and passes artifact checking', () => {
  const output = path.join(workspace, 'published');
  const checker = path.join(repository, 'scripts/check-site.mjs');
  const staged = spawnSync(process.execPath, [checker, '--root', source, '--stage', output], { encoding: 'utf8' });
  assert.equal(staged.status, 0, staged.stdout + staged.stderr);
  assert.deepEqual(htmlPaths.map((file) => read(path.join(source, file))), originalHtml);
  assert.ok(read(path.join(output, 'index.html')).includes(`v=${jsHash}`));
  assert.ok(!fs.existsSync(path.join(output, 'scripts')));
  assert.deepEqual(fs.readFileSync(path.join(output, 'assets/app.js')), fs.readFileSync(path.join(source, 'assets/app.js')));
  const checked = spawnSync(process.execPath, [checker, '--root', output], { encoding: 'utf8' });
  assert.equal(checked.status, 0, checked.stdout + checked.stderr);
  assert.match(checked.stdout, /Static site checks passed/);
});