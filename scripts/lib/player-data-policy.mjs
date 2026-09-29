// Rules for data payloads. Website JavaScript itself is deliberately not scanned.
const signatures = [
  ['game function prototype', /\bfunction\s*\(\s*proto\s*=\s*\d+/i],
  ['compiled-code marker', /\b(?:TypeDefIndex|MethodDefIndex)\s*[:=]|\b(?:RVA|Offset)\s*:\s*0x[\da-f]+/i],
  ['original asset archive identifier', /\bCAB-[\da-f]{16,}\b/i],
  ['original game storage class', /\b[A-Z][A-Za-z\d_]*StorageData\b/],
  ['game code/archive filename', /\.(?:bundle|bun|lu|lua|luac|cs|dll|dex|smali|apk|aab|obb|car)\b/i],
  ['absolute extraction path', /(?:^|[\s"'(])(?:[A-Za-z]:[\\/]|\/Users\/|\/home\/)/],
];

export function inspectPlayerText(value, location = '$') {
  if (typeof value !== 'string' || value.startsWith('data:image/')) return [];
  return signatures.filter(([, pattern]) => pattern.test(value))
    .map(([reason]) => ({ location, reason }));
}

export function inspectPlayerData(value, limit = 100) {
  const issues = [];
  function visit(current, location) {
    if (issues.length >= limit) return;
    if (typeof current === 'function') issues.push({ location, reason: 'executable function inside data payload' });
    else if (typeof current === 'string') issues.push(...inspectPlayerText(current, location));
    else if (Array.isArray(current)) current.forEach((entry, index) => visit(entry, `${location}[${index}]`));
    else if (current && typeof current === 'object') {
      for (const [key, entry] of Object.entries(current)) {
        const next = `${location}.${key}`;
        if (key === '$ref' || (key === 'raw' && entry && typeof entry === 'object')) {
          issues.push({ location: next, reason: 'unprocessed game record or reference' });
          continue;
        }
        issues.push(...inspectPlayerText(key, next));
        visit(entry, next);
        if (issues.length >= limit) break;
      }
    }
  }
  visit(value, '$');
  return issues.slice(0, limit);
}