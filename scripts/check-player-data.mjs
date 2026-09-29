#!/usr/bin/env node
// Read-only: inspect both maintained JSON and browser data for implementation remnants.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { inspectPlayerData, inspectPlayerText } from './lib/player-data-policy.mjs';

const repository = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const at = args.indexOf('--root');
if (at >= 0 && (!args[at + 1] || args[at + 1].startsWith('--'))) throw new Error('--root needs a directory.');
const root = at >= 0 ? path.resolve(args[at + 1]) : repository;
const registry = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/games.js'), 'utf8'), registry, { timeout: 1000 });
const directories = [...new Set((registry.window.LCZ_GAMES || registry.window.ORBIT_GAMES)
  .flatMap(game => game.links.map(link => decodeURIComponent(link.href).split('/')[0])))];
const errors = [];
let checked = 0;
const binaryOrSource = /\.(?:apk|aab|dex|smali|dll|so|cs|java|kt|lu|lua|luac|bundle|bun|obb|car)$/i;
function walk(directory) {
  for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
    if (item.name.startsWith('.') || item.name === '__pycache__') continue;
    const filename = path.join(directory, item.name);
    const relative = path.relative(root, filename).split(path.sep).join('/');
    if (item.isSymbolicLink()) { errors.push(`${relative}: symlink not supported`); continue; }
    if (item.isDirectory()) { walk(filename); continue; }
    if (!item.isFile()) continue;
    if (binaryOrSource.test(relative)) { errors.push(`${relative}: game code/archive file in maintained game directory`); continue; }
    const extension = path.extname(filename).toLowerCase();
    const dataScript = extension === '.js' && (relative.includes('/data/') || /\/(?:wiki-data|image-index)\.js$/.test(relative));
    const text = extension === '.csv' || (extension === '.md' && relative.includes('/guides/'));
    if (extension !== '.json' && !dataScript && !text) continue;
    checked++;
    try {
      const source = fs.readFileSync(filename, 'utf8').replace(/^\uFEFF/, '');
      let issues;
      if (text) issues = inspectPlayerText(source, '$text');
      else if (extension === '.json') issues = inspectPlayerData(JSON.parse(source));
      else {
        const sandbox = { window: {} };
        if (/\/lab\/data\/avatar-(?:meshes|textures)\.js$/.test(relative)) sandbox.window.WESTLAND_LAB_DATA = { avatar: {} };
        if (relative.startsWith('DawnofZombiewiki/data/lazy/')) sandbox.window.DOZ_DATA_PARTS = {};
        vm.runInNewContext(source, sandbox, { filename: relative, timeout: 5000 });
        issues = inspectPlayerData(sandbox.window);
      }
      for (const issue of issues) errors.push(`${relative} ${issue.location}: ${issue.reason}`);
    } catch (error) { errors.push(`${relative}: cannot check data: ${error.message}`); }
  }
}
for (const directory of directories) {
  if (!directory || directory.startsWith('.') || /[\\/:]/.test(directory)) throw new Error('Invalid game directory.');
  walk(path.join(root, directory));
}
console.log(`Checked ${checked} data/guide files in ${directories.length} game directories.`);
if (errors.length) {
  const groups = new Map();
  for (const error of errors) {
    const name = error.includes(' $') ? error.split(' $')[0] : error.split(':')[0];
    if (!groups.has(name)) groups.set(name, []);
    groups.get(name).push(error);
  }
  let shown = 0;
  for (const [name, findings] of groups) {
    if (shown >= 60) break;
    for (const error of findings.slice(0, 3)) { console.error(error); shown++; }
    if (findings.length > 3) console.error(`${name}: ${findings.length - 3} further recorded findings.`);
  }
  console.error(`${errors.length} recorded findings in ${groups.size} files.`);
  console.error('Player data boundary check failed. No files were modified.');
  process.exitCode = 1;
} else console.log('Player data boundary check passed. Useful game identifiers and website code remain allowed.');