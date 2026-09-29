import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';

const TAG = /<(?:script|link)\b(?:[^"'<>]|"[^"]*"|'[^']*')*>/i;
// Treat comments and raw-text elements as whole blocks, so examples inside an
// inline script, style or comment are never mistaken for resource elements.
const ELEMENT = /<!--[\s\S]*?-->|<(script|style|textarea|title)\b(?:[^"'<>]|"[^"]*"|'[^']*')*>[\s\S]*?<\/\1\s*>|<[a-z][\w:-]*\b(?:[^"'<>]|"[^"]*"|'[^']*')*>/gi;
const decode = (value) => value.replace(/&(?:amp|quot|apos|lt|gt|#\d+|#x[\da-f]+);/gi, (entity) => {
  const key = entity.slice(1, -1).toLowerCase();
  if (key.startsWith('#x')) return String.fromCodePoint(parseInt(key.slice(2), 16));
  if (key.startsWith('#')) return String.fromCodePoint(Number(key.slice(1)));
  return { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>' }[key];
});
const encode = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll("'", '&#39;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

function attributes(tag) {
  const result = new Map();
  for (const match of tag.matchAll(/\s+([^\s"'<>/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'<>`]+)))?/g)) {
    const value = match[2] ?? match[3] ?? match[4];
    const name = match[1].toLowerCase();
    if (value !== undefined && !result.has(name)) {
      result.set(name, { value, start: match.index + match[0].lastIndexOf(value), end: match.index + match[0].lastIndexOf(value) + value.length });
    }
  }
  return result;
}

export function versionHtmlAssets(rootDirectory, htmlFiles) {
  const root = path.resolve(rootDirectory);
  const hashes = new Map();
  let references = 0;
  let changedFiles = 0;

  function versionUrl(raw, htmlFile, extension) {
    const url = decode(raw).trim();
    if (!url || /^(?:[a-z][a-z\d+.-]*:|\/|#)/i.test(url)) return null;
    const hashAt = url.indexOf('#');
    const fragment = hashAt < 0 ? '' : url.slice(hashAt);
    const address = hashAt < 0 ? url : url.slice(0, hashAt);
    const queryAt = address.indexOf('?');
    const pathname = queryAt < 0 ? address : address.slice(0, queryAt);
    const query = queryAt < 0 ? '' : address.slice(queryAt + 1);
    const decodedPath = decodeURIComponent(pathname);
    if (path.extname(decodedPath).toLowerCase() !== extension) return null;
    const target = path.resolve(path.dirname(htmlFile), decodedPath);
    const relative = path.relative(root, target);
    if (relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
      throw new Error(`Cannot version an asset outside the public site: ${pathname}`);
    }
    if (!hashes.has(target)) hashes.set(target, createHash('sha256').update(fs.readFileSync(target)).digest('hex'));
    // Preserve existing query spelling/order, including repeated parameters.
    const parts = query ? query.split('&').filter((part) => {
      const key = part.split('=', 1)[0];
      try { return decodeURIComponent(key.replaceAll('+', ' ')) !== 'v'; }
      catch { return true; }
    }) : [];
    parts.push(`v=${hashes.get(target)}`);
    references++;
    return encode(`${pathname}?${parts.join('&')}${fragment}`);
  }

  for (const htmlFile of htmlFiles) {
    const source = fs.readFileSync(htmlFile, 'utf8');
    const output = source.replace(ELEMENT, (block) => {
      const isScript = /^<script\b/i.test(block);
      if (!isScript && !/^<link\b/i.test(block)) return block;
      const tag = block.match(TAG)[0];
      const attrs = attributes(tag);
      if (!isScript && !decode(attrs.get('rel')?.value || '').toLowerCase().split(/\s+/).includes('stylesheet')) return block;
      const attribute = attrs.get(isScript ? 'src' : 'href');
      if (!attribute) return block;
      const versioned = versionUrl(attribute.value, htmlFile, isScript ? '.js' : '.css');
      if (versioned === null) return block;
      return block.slice(0, attribute.start) + versioned + block.slice(attribute.end);
    });
    if (source !== output) {
      fs.writeFileSync(htmlFile, output, 'utf8');
      changedFiles++;
    }
  }
  return { references, changedFiles };
}