import path from 'node:path';

const staticExtensions = new Set([
  '.html', '.css', '.js', '.svg', '.png', '.jpg', '.jpeg', '.webp', '.gif',
  '.ico', '.avif', '.woff', '.woff2', '.ttf',
]);
const dawnRuntimeFiles = new Set([
  'index.html', 'app.js', 'data-loader.js', 'styles.css', 'assets/wiki-mark.svg',
  'data/bootstrap.js', 'data/asset-map.js', 'data/site-meta.js',
]);

const ldoeRuntimeFiles = new Set([
  'index.html', 'styles.css', 'app.js', 'data-loader.js', 'favicon.svg', 'data/bootstrap.js',
]);

// One selector is shared by source checks and artifact creation. The data and
// maintenance files remain in the repository, but are not Pages resources.
export function isPublicFile(relativePath) {
  const relative = relativePath.split(path.sep).join('/');
  const parts = relative.split('/');
  if (parts.some((part) => !part || part.startsWith('.'))) return false;
  if (relative.startsWith('LDOE_Wiki/')) {
    const local = relative.slice('LDOE_Wiki/'.length);
    return ldoeRuntimeFiles.has(local) ||
      /^data\/lazy\/[a-z0-9-]+\.[a-f0-9]{16}\.js$/.test(local) ||
      /^assets\/.+\.(?:png|jpe?g|webp|gif|svg|avif)$/i.test(local);
  }
  if (relative.startsWith('DawnofZombiewiki/')) {
    const local = relative.slice('DawnofZombiewiki/'.length);
    return dawnRuntimeFiles.has(local) ||
      /^data\/lazy\/[a-z0-9-]+-[a-f0-9]{16}\.js$/.test(local) ||
      /^assets\/images\/.+\.(?:png|jpe?g|webp|gif|svg|avif)$/i.test(local) ||
      /^data\/player\/[^/]+\.csv$/i.test(local) ||
      /^guides\/[^/]+\.md$/i.test(local);
  }
  if (relative === 'Craft of Survival/wiki-assets/wiki-data.js') return false;
  if (parts.some((part) => ['tools', 'reports', 'scripts'].includes(part))) return false;
  return staticExtensions.has(path.extname(relative).toLowerCase());
}
