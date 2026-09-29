import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/games.js'), 'utf8'), context);
const pages = [...new Set(['index.html', '404.html', ...context.window.ORBIT_GAMES.flatMap(game =>
  game.links.map(link => decodeURIComponent(link.href.split(/[?#]/)[0])))])];
const attribute = (tag, key) => tag.match(new RegExp('\\b' + key + '\\s*=\\s*(["\\\'])(.*?)\\1', 'i'))?.[2];
const documents = pages.map(name => ({ name, html: fs.readFileSync(path.join(root, name), 'utf8') }));
function metadata(html, key, value) {
  return [...html.matchAll(/<meta\b[^>]*>/gi)].map(match => match[0])
    .filter(tag => attribute(tag, key)?.toLowerCase() === value.toLowerCase());
}
function policy(html) {
  const metas = metadata(html, 'http-equiv', 'content-security-policy');
  assert.equal(metas.length, 1, 'Exactly one effective CSP');
  return new Map(attribute(metas[0], 'content').split(';').filter(part => part.trim()).map(part => {
    const [directive, ...sources] = part.trim().split(/\s+/);
    return [directive, sources];
  }));
}

test('Every public HTML page requests no indexing, following, snippets or image indexing', () => {
  for (const { name, html } of documents) {
    const metas = metadata(html, 'name', 'robots');
    assert.equal(metas.length, 1, name);
    const directives = attribute(metas[0], 'content').toLowerCase().split(/\s*,\s*/);
    for (const directive of ['noindex', 'nofollow', 'noarchive', 'nosnippet', 'noimageindex']) {
      assert.ok(directives.includes(directive), name + ': ' + directive);
    }
    assert.ok(html.indexOf(metas[0]) < html.search(/<\/head\s*>/i), name);
    assert.equal(attribute(metadata(html, 'name', 'referrer')[0], 'content'), 'no-referrer', name);
  }
});

test('CSP blocks arbitrary scripts, plugins, connections, base URLs and form submissions', () => {
  for (const { name, html } of documents) {
    const directives = policy(html);
    assert.deepEqual(directives.get('default-src'), ["'none'"], name);
    const scripts = directives.get('script-src');
    assert.ok(scripts.includes("'self'"), name);
    assert.ok(scripts.every(source => source === "'self'" || /^'sha256-[A-Za-z0-9+/]+=*'$/.test(source)), name);
    for (const directive of ['script-src-attr', 'object-src', 'frame-src', 'worker-src', 'base-uri', 'form-action']) {
      assert.deepEqual(directives.get(directive), ["'none'"], name + ': ' + directive);
    }
    assert.deepEqual(directives.get('connect-src'), ['https://cdn.busuanzi.cc'], name);
    // These directives require response headers and must not be presented as meta protection.
    assert.ok(!directives.has('frame-ancestors') && !directives.has('sandbox'), name);
    const csp = metadata(html, 'http-equiv', 'content-security-policy')[0];
    const resourceAt = html.search(/<(?:script|link|style)\b/i);
    assert.ok(resourceAt < 0 || html.indexOf(csp) < resourceAt, name + ': CSP must precede resources');
  }
});

test('Every inline script has an exact content hash and the 404 page works at nested URLs', () => {
  for (const { name, html } of documents) {
    const directives = policy(html);
    for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
      if (/\bsrc\s*=/i.test(match[1]) || !match[2].trim()) continue;
      const hash = createHash('sha256').update(match[2].replace(/\r\n?/g, '\n')).digest('base64');
      assert.ok(directives.get('script-src').includes("'sha256-" + hash + "'"), name);
    }
    assert.ok(!/\bon(?:click|load|error)\s*=\s*["']/i.test(html), name + ': no HTML event handlers');
  }
  const errorPage = documents.find(document => document.name === '404.html').html;
  const code = errorPage.match(/<script>([\s\S]*?)<\/script>/)[1];
  for (const [pathname, expected] of [
    ['/GameWiki/missing/nested.html', '/GameWiki/'],
    ['/LCZ-GameWiki/missing/nested.html', '/LCZ-GameWiki/'],
    ['/missing/nested.html', '/']
  ]) {
    const link = {};
    vm.runInNewContext(code, { location: { pathname }, document: { getElementById: () => link } });
    assert.equal(link.href, expected);
  }
  assert.ok(!/<(?:link|script)\b[^>]*(?:href|src)=["']assets\//i.test(errorPage),
    'Nested 404 URLs cannot rely on relative asset locations');
});
