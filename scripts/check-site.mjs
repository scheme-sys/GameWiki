#!/usr/bin/env node
// No dependencies: validate the site, or prepare and validate a Pages artifact.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { versionHtmlAssets } from './lib/version-html-assets.mjs';
import { isPublicFile } from './lib/public-files.mjs';

const repository = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const option = (name) => {
  const index = args.indexOf(name);
  if (index === -1) return null;
  if (!args[index + 1] || args[index + 1].startsWith('--')) throw new Error(`Missing path after ${name}`);
  return path.resolve(args[index + 1]);
};
const sourceRoot = option('--root') || repository;
const stageRoot = option('--stage');
const errors = [];
const requiredFiles = ['index.html', '404.html', '.nojekyll'];
const optionalFiles = ['robots.txt'];


function loadGames(directory) {
  const filename = path.join(directory, 'assets', 'games.js');
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(filename, 'utf8'), context, { filename, timeout: 1000 });
  const games = context.window.ORBIT_GAMES;
  if (!Array.isArray(games) || !games.length) throw new Error('assets/games.js must define a nonempty window.ORBIT_GAMES array.');
  const ids = new Set();
  for (const game of games) {
    if (!game.id || ids.has(game.id)) throw new Error('Game IDs must be present and unique.');
    ids.add(game.id);
    if (!game.name || !game.image || !Array.isArray(game.links) || !game.links.length) {
      throw new Error(`Game ${game.id} is missing its name, image or links.`);
    }
  }
  return games;
}

function gameDirectories(games) {
  const directories = new Set(['assets']);
  for (const game of games) {
    for (const link of game.links) {
      const href = decodeURIComponent(link.href || '').split(/[?#]/)[0];
      const parts = href.split('/');
      if (parts.length < 2 || parts.some((part) => !part || part.startsWith('.')) || /[:\\]/.test(href)) {
        throw new Error(`Game ${game.id} must use a relative link inside its game directory.`);
      }
      directories.add(parts[0]);
    }
  }
  return [...directories];
}

function walk(directory, output = []) {
  if (!fs.existsSync(directory)) return output;
  for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
    if (item.name.startsWith('.')) continue;
    const file = path.join(directory, item.name);
    if (item.isSymbolicLink()) throw new Error(`Symbolic links are not supported: ${file}`);
    if (item.isDirectory()) walk(file, output);
    else if (item.isFile()) output.push(file);
  }
  return output;
}

let games;
let directories;
try {
  games = loadGames(sourceRoot);
  directories = gameDirectories(games);
  if (stageRoot) {
    if (stageRoot === sourceRoot || directories.some((directory) => {
      const relative = path.relative(path.join(sourceRoot, directory), stageRoot);
      return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative));
    })) throw new Error('The artifact directory must be separate from the site source directories.');
    if (fs.existsSync(stageRoot) && fs.readdirSync(stageRoot).length) {
      throw new Error('The artifact directory must be empty. Choose a new directory; existing files are never deleted.');
    }
    const sources = [...requiredFiles, ...optionalFiles.filter((name) => fs.existsSync(path.join(sourceRoot, name)))]
      .map((name) => path.join(sourceRoot, name));
    for (const directory of directories) {
      const full = path.join(sourceRoot, directory);
      if (!fs.existsSync(full)) throw new Error(`Missing public directory: ${directory}`);
      sources.push(...walk(full).filter((file) => isPublicFile(path.relative(sourceRoot, file))));
    }
    for (const source of sources) {
      if (!fs.lstatSync(source).isFile()) throw new Error(`Expected a regular public file: ${source}`);
      const target = path.join(stageRoot, path.relative(sourceRoot, source));
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.copyFileSync(source, target);
    }
    console.log(`Prepared ${sources.length} static files from the games.js registry. Metadata and development tools are excluded.`);
    const htmlFiles = sources.filter((source) => path.extname(source).toLowerCase() === '.html')
      .map((source) => path.join(stageRoot, path.relative(sourceRoot, source)));
    const versioned = versionHtmlAssets(stageRoot, htmlFiles);
    console.log(`Versioned ${versioned.references} local JS/CSS references in ${versioned.changedFiles} published HTML files.`);
  }
} catch (error) {
  console.error(`Site configuration: ${error.message}`);
  process.exit(1);
}

const root = stageRoot || sourceRoot;
const relative = (file) => path.relative(root, file).split(path.sep).join('/');
const files = [];
const checkedReferences = new Set();
const networkReferences = new Set();
let inlineScripts = 0;
for (const name of [...requiredFiles, ...optionalFiles.filter((name) => fs.existsSync(path.join(root, name)))]) {
  const file = path.join(root, name);
  if (!fs.existsSync(file)) errors.push(`Missing required file: ${name}`);
  else if (!fs.lstatSync(file).isFile()) errors.push(`Expected a regular public file: ${name}`);
  else files.push(file);
}
for (const directory of directories) {
  const full = path.join(root, directory);
  if (!fs.existsSync(full)) errors.push(`Missing public directory: ${directory}`);
  try { files.push(...walk(full).filter((file) => isPublicFile(relative(file)))); }
  catch (error) { errors.push(error.message); }
}

const publicFiles = new Set(files.map((file) => path.resolve(file)));

function checkReference(raw, source, base = path.dirname(source), pathLiteral = false) {
  let reference = pathLiteral ? raw : raw.trim().replaceAll('&amp;', '&');
  if (!reference || reference.startsWith('#') || reference.includes('${') || reference.includes('{{')) return;
  if (/^(?:https?:)?\/\//i.test(reference)) {
    networkReferences.add(reference.split('?')[0]);
    return;
  }
  if (/^[a-z][a-z0-9+.-]*:/i.test(reference)) return;
  if (!pathLiteral) {
    reference = reference.split(/[?#]/)[0];
    try { reference = decodeURIComponent(reference); }
    catch { errors.push(`${relative(source)}: invalid URL encoding`); return; }
  }
  if (!reference) return;
  let target = path.resolve(base, reference);
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, 'index.html');
  const key = `${source}\n${target}`;
  if (checkedReferences.has(key)) return;
  checkedReferences.add(key);
  const targetRelative = path.relative(root, target);
  if (reference.startsWith('/') || targetRelative === '..' || targetRelative.startsWith(`..${path.sep}`) || path.isAbsolute(targetRelative)) {
    errors.push(`${relative(source)}: URL must stay relative to the published site: ${reference}`);
  } else if (!fs.existsSync(target)) {
    errors.push(`${relative(source)}: missing local resource ${reference}`);
  } else if (!publicFiles.has(target)) {
    errors.push(`${relative(source)}: resource is excluded from the public artifact: ${reference}`);
  }
}

function checkCss(css, source) {
  for (const match of css.matchAll(/url\(\s*(['"]?)([^)'"\s]+)\1\s*\)/gi)) checkReference(match[2], source);
}

const registry = path.join(root, 'assets', 'games.js');
for (const game of games) {
  checkReference(game.image, registry, root);
  for (const link of game.links) checkReference(link.href, registry, root);
}

for (const file of files) {
  const extension = path.extname(file).toLowerCase();
  if (!['.html', '.css', '.js'].includes(extension)) continue;
  const source = fs.readFileSync(file, 'utf8');
  if (extension === '.html') {
    const markup = source.replace(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi, (full, attributes, script) => {
      const src = attributes.match(/\bsrc\s*=\s*(['"])(.*?)\1/i);
      if (src) checkReference(src[2], file);
      else if (script.trim() && !/\btype\s*=\s*(['"])(?!text\/javascript|application\/javascript)[^'"]+\1/i.test(attributes)) {
        inlineScripts++;
        try { new vm.Script(script, { filename: relative(file) }); }
        catch (error) { errors.push(`${relative(file)}: inline JavaScript ${error.message}`); }
      }
      return '';
    });
    for (const match of markup.matchAll(/\b(?:src|href|poster)\s*=\s*(['"])(.*?)\1/gi)) checkReference(match[2], file);
    for (const match of markup.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi)) checkCss(match[1], file);
  } else if (extension === '.css') {
    checkCss(source, file);
  } else {
    const result = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8', maxBuffer: 1024 * 1024 });
    if (result.status !== 0) errors.push(`${relative(file)}: JavaScript syntax check failed`);
    // Image paths stored in extracted data resolve relative to the game HTML,
    // not relative to the JavaScript file. Do not evaluate the game application.
    const gameDirectory = directories.find((directory) => directory !== 'assets' && relative(file).startsWith(`${directory}/`));
    if (gameDirectory) {
      const documentBase = path.join(root, gameDirectory);
      if (gameDirectory === 'DawnofZombiewiki') {
        if (/\/data\/(?:bootstrap|asset-map|site-meta|lazy\/[a-z0-9-]+)\.js$/.test(relative(file))) {
          try {
            const context = { window: { DOZ_DATA_PARTS: {} } };
            vm.runInNewContext(source, context, { filename: relative(file), timeout: 5000 });
            const visit = (value) => {
              if (typeof value === 'string' && /^(?:assets\/|data\/(?:player|lazy)\/|guides\/)/.test(value)) {
                checkReference(value, file, documentBase, true);
              } else if (Array.isArray(value)) value.forEach(visit);
              else if (value && typeof value === 'object') Object.values(value).forEach(visit);
            };
            visit(context.window);
          } catch (error) { errors.push(`${relative(file)}: cannot validate Dawn data: ${error.message}`); }
        }
        if (path.basename(file) === 'app.js') {
          for (const match of source.matchAll(/\b(?:src|href)\s*=\s*(['"])(.*?)\1/gi)) {
            checkReference(match[2], file, documentBase);
          }
        }
      }
      if (relative(file) === 'Westland Survival/wiki-assets/lazy-manifest.js') {
        try {
          const context = { window: {} };
          vm.runInNewContext(source, context, { filename: relative(file), timeout: 5000 });
          for (const url of Object.values(context.window.WESTLAND_RESOURCES.files)) checkReference(url, file);
        } catch (error) { errors.push(`${relative(file)}: cannot validate Westland manifest: ${error.message}`); }
      }
      if (relative(file) === 'Day R Survival/wiki-assets/data/lazy-manifest.js') {
        try {
          const context = { window: {} };
          vm.runInNewContext(source, context, { filename: relative(file), timeout: 5000 });
          checkReference(context.window.DAYR_MONSTER_MANIFEST.url, file);
        } catch (error) { errors.push(`${relative(file)}: cannot validate monster manifest: ${error.message}`); }
      }
      if (relative(file) === 'Craft of Survival/wiki-assets/data/index.js') {
        try {
          const context = { window: {} };
          vm.runInNewContext(source, context, { filename: relative(file), timeout: 5000 });
          const index = context.window.COS_WIKI_INDEX;
          if (!index || !index.blocks || !index.search) throw new Error('Missing Craft lazy manifest');
          for (const url of [...Object.values(index.blocks), index.search]) checkReference(url, file, path.join(documentBase, 'wiki-assets'));
        } catch (error) { errors.push(`${relative(file)}: cannot validate Craft manifest: ${error.message}`); }
      }
      if (relative(file).endsWith('/wiki-assets/wiki/data/index.js')) {
        for (const match of source.matchAll(/"_chunk"\s*:\s*"(wiki-chunk-[a-z0-9_-]+)"/g)) {
          const chunk = match[1].slice('wiki-chunk-'.length);
          checkReference(`wiki-assets/wiki/data/chunks/${chunk}.js`, file, documentBase);
        }
      }
      for (const match of source.matchAll(/wiki-assets\/[^"'\\<>\r\n]+/g)) checkReference(match[0], file, documentBase);
    }
  }
}

const htmlFiles = files.filter((file) => path.extname(file).toLowerCase() === '.html');
const totalBytes = files.reduce((total, file) => total + fs.statSync(file).size, 0);
console.log(`Checked ${games.length} games, ${files.length} files, ${htmlFiles.length} HTML pages, ${inlineScripts} inline scripts and ${checkedReferences.size} local references.`);
console.log(`Package size: ${(totalBytes / 1024 / 1024).toFixed(2)} MiB. External links/resources: ${networkReferences.size} (not fetched).`);
for (const file of htmlFiles) {
  const size = fs.statSync(file).size;
  if (size > 10 * 1024 * 1024) console.log(`Size note: ${relative(file)} is ${(size / 1024 / 1024).toFixed(1)} MiB.`);
}
if (errors.length) {
  console.error(`\n${errors.length} check(s) failed:`);
  for (const error of errors.slice(0, 30)) console.error(`- ${error}`);
  if (errors.length > 30) console.error(`- ... ${errors.length - 30} additional failures`);
  process.exitCode = 1;
} else {
  console.log('Static site checks passed.');
}