import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

export function createTestWorkspace(name, registerCleanup) {
  if (!/^[a-z0-9-]+$/.test(name)) throw new Error('Invalid test workspace name');
  const temporaryRoot = fs.realpathSync(os.tmpdir());
  const prefix = `gamewiki-${name}-`;
  const workspace = fs.mkdtempSync(path.join(temporaryRoot, prefix));
  registerCleanup(() => {
    if (!fs.existsSync(workspace)) return;
    const resolved = fs.realpathSync(workspace);
    if (fs.lstatSync(workspace).isSymbolicLink() ||
        path.dirname(resolved) !== temporaryRoot ||
        !path.basename(resolved).startsWith(prefix) || resolved !== workspace) {
      throw new Error(`Refusing to remove an unexpected test workspace: ${workspace}`);
    }
    fs.rmSync(workspace, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
  });
  return workspace;
}
