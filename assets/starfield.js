/* Independent Canvas 2D sky. No dependencies, network requests or input capture.
   Visual reference: https://yujieluo96.github.io/ (independent implementation).
   The existing SVGs remain the fallback when Canvas 2D is unavailable. */
(() => {
  'use strict';

  const host = document.querySelector('.constellations');
  if (!host || host.querySelector('.starfield-canvas')) return;
  const canvas = document.createElement('canvas');
  let context;
  try { context = canvas.getContext('2d', { alpha: true }); } catch (_) { return; }
  if (!context) return;
  canvas.className = 'starfield-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  host.append(canvas);

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const coarsePointer = matchMedia('(pointer: coarse)');
  // Precomputed silver-blue to champagne ramps keep color changes gradual
  // without allocating gradients or color strings during animation.
  const colorRamp = (cold, gold) => Array.from({ length: 64 }, (_, index) =>
    'rgb(' + cold.map((value, channel) => Math.round(value + (gold[channel] - value) * index / 63)).join(',') + ')');
  const starColors = [[194,216,234], [175,202,228], [190,214,217]]
    .map(cold => colorRamp(cold, [235,213,170]));
  const linkColors = colorRamp([172,204,231], [220,199,157]);
  const dustColors = colorRamp([157,184,215], [218,196,158]);
  // Distant dust is painted once per resize, separate from the moving link field.
  // Keep it in memory: no image downloads, extra animation loop or saved assets.
  const dustCanvas = document.createElement('canvas');
  let dustContext;
  try { dustContext = dustCanvas.getContext('2d', { alpha: true }); } catch (_) { /* Optional depth layer. */ }
  const stars = [];
  const links = [];
  const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let width = 1, height = 1, settings, frame = 0, resizeTimer = 0;
  let tree;
  let lastFrame = 0, lastStep = 0, elapsed = 0, nextConnections = 0;
  let suspended = false, contextLost = false;

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const ease = (value) => value * value * (3 - 2 * value);

  function configuration() {
    const compact = width < 760 || coarsePointer.matches;
    const area = width * height;
    const displayDpr = devicePixelRatio || 1;
    const ultrawide = !compact && width / height >= 2;
    const targetDpr = Math.min(displayDpr, compact ? 1 : ultrawide ? 2 : 1.5);
    // Preserve at least one bitmap pixel per CSS pixel on large desktop
    // displays and native pixels on scaled ultrawides, within an 8.3MP ceiling.
    // Smaller non-ultrawide screens keep their existing budget.
    const pixelBudget = compact ? 700000 : Math.max(2600000,
      Math.min(area * (ultrawide ? targetDpr * targetDpr : 1), 8300000));
    return {
      compact,
      count: Math.round(clamp(area / (compact ? 8800 : 10400), compact ? 32 : 64, compact ? 56 : 148)),
      distance: compact ? 120 : 170,
      neighbours: compact ? 2 : 3,
      interval: 1000 / (compact ? 24 : 30),
      dpr: Math.min(targetDpr, Math.sqrt(pixelBudget / area))
    };
  }

  function mapTree() {
    // Match the picture sources and CSS cover crop, rather than assuming the
    // same tree position on portrait, ordinary landscape and ultrawide art.
    const portrait = width <= 600 && height >= width;
    const panorama = width >= 1280 && width / height >= 2;
    const ratio = portrait ? 2 / 3 : panorama ? 3 : 1.5;
    const artWidth = Math.max(width, height * ratio), artHeight = artWidth / ratio;
    const positionY = portrait ? .46 : panorama ? .5 : height <= 500 && width > height ? .4 : .48;
    tree = {
      left: (width - artWidth) / 2, top: (height - artHeight) * positionY,
      inverseWidth: 1 / artWidth, inverseHeight: 1 / artHeight,
      crownX: panorama ? .51 : .5, crownY: .34,
      crownRadiusX: portrait ? .60 : panorama ? .39 : .47,
      crownRadiusY: portrait ? .23 : panorama ? .32 : .36,
      trunkX: portrait ? .51 : .52, trunkY: portrait ? .61 : .64,
      trunkRadiusX: panorama ? .105 : .19, trunkRadiusY: portrait ? .26 : .34
    };
  }

  function treeWarmth(x, y) {
    const u = (x - tree.left) * tree.inverseWidth;
    const v = (y - tree.top) * tree.inverseHeight;
    const cx = (u - tree.crownX) / tree.crownRadiusX, cy = (v - tree.crownY) / tree.crownRadiusY;
    const tx = (u - tree.trunkX) / tree.trunkRadiusX, ty = (v - tree.trunkY) / tree.trunkRadiusY;
    const crown = Math.max(0, 1 - cx * cx - cy * cy);
    const trunk = Math.max(0, 1 - tx * tx - ty * ty) * .85;
    return ease(Math.max(crown, trunk));
  }

  function paintDistantSky() {
    if (!dustContext) return;
    const dpr = Math.min(settings.dpr, 1);
    dustCanvas.width = Math.max(1, Math.round(width * dpr));
    dustCanvas.height = Math.max(1, Math.round(height * dpr));
    dustContext.setTransform(dustCanvas.width / width, 0, 0, dustCanvas.height / height, 0, 0);
    const count = Math.round(clamp(width * height / 3800, settings.compact ? 80 : 160, settings.compact ? 146 : 408));
    // Stable normalized positions keep the distant sky calm when the screen rotates.
    const noise = (index, salt) => {
      const value = Math.sin(index * 127.1 + salt * 311.7) * 43758.5453;
      return value - Math.floor(value);
    };
    for (let i = 0; i < count; i++) {
      const x = noise(i, 1);
      const spread = (noise(i, 3) + noise(i, 4) + noise(i, 5) - 1.5) * .23;
      const y = i % 3 ? .80 - x * .60 + spread : noise(i, 2);
      if (y < 0 || y > 1) continue;
      const edge = ease(clamp(Math.min(x, 1 - x, y, 1 - y) * 20, 0, 1));
      dustContext.fillStyle = dustColors[Math.round(treeWarmth(x * width, y * height) * 63)];
      dustContext.globalAlpha = (.10 + noise(i, 6) * .23) * edge;
      dustContext.beginPath();
      dustContext.arc(x * width, y * height, .35 + noise(i, 7) * .48, 0, Math.PI * 2);
      dustContext.fill();
    }
    dustContext.globalAlpha = 1;
  }

  function createStar() {
    const depth = Math.random();
    const direction = Math.random() * Math.PI * 2;
    const speed = (1.8 + Math.random() * 3.2) * (.6 + depth);
    return {
      x: Math.random() * width, y: Math.random() * height,
      vx: Math.cos(direction) * speed, vy: Math.sin(direction) * speed,
      depth, radius: .45 + depth * .78 + Math.random() * .25,
      alpha: .32 + depth * .35 + Math.random() * .09,
      phase: Math.random() * Math.PI * 2,
      frequency: .16 + Math.random() * .24,
      tint: Math.floor(Math.random() * starColors.length), affinity: .8 + Math.random() * .2,
      warmth: 0, color: starColors[0][0],
      px: 0, py: 0, edge: 1, neighbours: 0
    };
  }

  function project() {
    for (const star of stars) {
      star.px = star.x + pointer.x * star.depth;
      star.py = star.y + pointer.y * star.depth;
      star.warmth = treeWarmth(star.px, star.py) * star.affinity;
      star.color = starColors[star.tint][Math.round(star.warmth * 63)];
      // Fade before a particle wraps, keeping the edges quiet on small screens.
      star.edge = ease(clamp(Math.min(star.x, width - star.x, star.y, height - star.y) / 24, 0, 1));
    }
  }

  function distance(a, b) { return Math.hypot(a.px - b.px, a.py - b.py); }

  function connectionOpacity(a, b) {
    const proximity = Math.max(0, 1 - distance(a, b) / settings.distance);
    return .40 * proximity * Math.sqrt(proximity) * (.65 + (a.depth + b.depth) * .175) * Math.min(a.edge, b.edge);
  }

  function refreshConnections(initial = false) {
    // Existing links keep their slots until they fade out, so changing nearest
    // neighbours never switches a visible segment abruptly.
    const occupied = new Set();
    for (const star of stars) star.neighbours = 0;
    for (const link of links) {
      stars[link.a].neighbours++;
      stars[link.b].neighbours++;
      occupied.add(link.a * stars.length + link.b);
    }
    // A small spatial grid keeps candidate checks local even on wide screens.
    const columns = Math.ceil(width / settings.distance) + 2;
    const rows = Math.ceil(height / settings.distance) + 2;
    const grid = Array.from({ length: columns * rows }, () => []);
    const candidates = [];
    for (let i = 0; i < stars.length; i++) {
      const a = stars[i];
      if (a.depth < .18) continue;
      const x = clamp(Math.floor(a.px / settings.distance) + 1, 0, columns - 1);
      const y = clamp(Math.floor(a.py / settings.distance) + 1, 0, rows - 1);
      for (let cy = Math.max(0, y - 1); cy <= Math.min(rows - 1, y + 1); cy++) {
        for (let cx = Math.max(0, x - 1); cx <= Math.min(columns - 1, x + 1); cx++) {
          for (const j of grid[cy * columns + cx]) {
            if (occupied.has(j * stars.length + i)) continue;
            const length = distance(a, stars[j]);
            if (length < settings.distance) candidates.push({ a: j, b: i, length });
          }
        }
      }
      grid[y * columns + x].push(i);
    }
    candidates.sort((a, b) => a.length - b.length);
    for (const pair of candidates) {
      const a = stars[pair.a], b = stars[pair.b];
      if (a.neighbours >= settings.neighbours || b.neighbours >= settings.neighbours) continue;
      links.push({ a: pair.a, b: pair.b, alpha: initial ? connectionOpacity(a, b) : 0 });
      a.neighbours++;
      b.neighbours++;
    }
  }

  function move(delta) {
    elapsed += delta;
    const follow = 1 - Math.exp(-delta * 2);
    pointer.x += (pointer.targetX - pointer.x) * follow;
    pointer.y += (pointer.targetY - pointer.y) * follow;
    const speedScale = settings.compact ? .72 : 1;
    for (const star of stars) {
      const drift = elapsed * .11 + star.phase;
      star.x += (star.vx + Math.sin(drift) * .6) * delta * speedScale;
      // A restrained upward current lets warmer motes rise from the tree.
      star.y += (star.vy + Math.cos(drift * .83) * .6 - star.warmth * .65) * delta * speedScale;
      if (star.x < -24) star.x = width + 24;
      else if (star.x > width + 24) star.x = -24;
      if (star.y < -24) star.y = height + 24;
      else if (star.y > height + 24) star.y = -24;
    }
  }

  function draw(delta = 0) {
    if (dustContext && !settings.compact) {
      // Copy the cached sky, including transparent pixels, in one desktop
      // pass. Keep the existing compact path, where clear + draw is cheaper.
      context.globalCompositeOperation = 'copy';
      context.drawImage(dustCanvas, 0, 0, width, height);
      context.globalCompositeOperation = 'source-over';
    } else {
      context.clearRect(0, 0, width, height);
      if (dustContext) context.drawImage(dustCanvas, 0, 0, width, height);
    }
    context.lineWidth = .75;
    const fade = 1 - Math.exp(-delta * 3);
    for (let i = links.length - 1; i >= 0; i--) {
      const link = links[i], a = stars[link.a], b = stars[link.b];
      const target = connectionOpacity(a, b);
      link.alpha += (target - link.alpha) * fade;
      if (target === 0 && link.alpha < .001) { links.splice(i, 1); continue; }
      // Edge fading is immediate on wrap; the line itself eases as points separate.
      context.globalAlpha = link.alpha * Math.min(a.edge, b.edge);
      context.strokeStyle = linkColors[Math.round((a.warmth + b.warmth) * 31.5)];
      context.beginPath();
      context.moveTo(a.px, a.py);
      context.lineTo(b.px, b.py);
      context.stroke();
    }
    for (const star of stars) {
      const twinkle = .89 + Math.sin(elapsed * star.frequency + star.phase) * .11;
      const alpha = star.alpha * twinkle * star.edge * (star.glint ? 1.18 : 1);
      context.fillStyle = star.color;
      // A few brighter stars give the sky depth without making every point glow.
      // Concentric light and short rays avoid per-frame blur filters.
      if (star.glint) {
        context.globalAlpha = alpha * .025;
        context.beginPath();
        context.arc(star.px, star.py, star.radius * 5.5, 0, Math.PI * 2);
        context.fill();
        const ray = (settings.compact ? 3 : 4.5) * twinkle;
        context.strokeStyle = star.color;
        context.lineWidth = .55;
        context.globalAlpha = alpha * .28;
        context.beginPath();
        context.moveTo(star.px - ray, star.py);
        context.lineTo(star.px + ray, star.py);
        context.moveTo(star.px, star.py - ray * 1.4);
        context.lineTo(star.px, star.py + ray * 1.4);
        context.stroke();
      }
      if (star.glint || (star.depth > .86 && !settings.compact)) {
        context.globalAlpha = alpha * .055;
        context.beginPath();
        context.arc(star.px, star.py, star.radius * 3, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = alpha;
      context.beginPath();
      context.arc(star.px, star.py, star.radius, 0, Math.PI * 2);
      context.fill();
    }
    context.globalAlpha = 1;
  }

  function shouldPause() {
    return suspended || contextLost || document.hidden || reducedMotion.matches ||
      document.body.matches('.scene-still, .is-dragging') ||
      document.documentElement.matches('.scene-still, .is-dragging');
  }

  function tick(time) {
    frame = 0;
    if (shouldPause()) { syncMotion(); return; }
    if (!lastFrame) { lastFrame = time; lastStep = time; }
    const sinceDraw = time - lastFrame;
    if (sinceDraw >= settings.interval - .5) {
      // Never catch up motion after a stalled frame or a backgrounded tab.
      const delta = Math.min((time - lastStep) / 1000, .08);
      lastStep = time;
      lastFrame = time - (sinceDraw >= settings.interval ? sinceDraw % settings.interval : 0);
      move(delta);
      project();
      if (elapsed >= nextConnections) {
        refreshConnections();
        nextConnections = elapsed + .5;
      }
      draw(delta);
    }
    frame = requestAnimationFrame(tick);
  }

  function syncMotion() {
    const paused = shouldPause();
    canvas.dataset.state = paused ? 'paused' : 'running';
    if (paused) {
      cancelAnimationFrame(frame);
      frame = 0;
      lastFrame = lastStep = 0;
    } else if (!frame) {
      lastFrame = lastStep = 0;
      frame = requestAnimationFrame(tick);
    }
  }

  function resize() {
    if (contextLost) return;
    const previousWidth = width, previousHeight = height;
    width = Math.max(1, host.clientWidth);
    height = Math.max(1, host.clientHeight);
    settings = configuration();
    mapTree();
    const bitmapWidth = Math.max(1, Math.round(width * settings.dpr));
    const bitmapHeight = Math.max(1, Math.round(height * settings.dpr));
    if (canvas.width !== bitmapWidth || canvas.height !== bitmapHeight) {
      canvas.width = bitmapWidth;
      canvas.height = bitmapHeight;
    }
    context.setTransform(bitmapWidth / width, 0, 0, bitmapHeight / height, 0, 0);
    for (const star of stars) {
      star.x *= width / previousWidth;
      star.y *= height / previousHeight;
    }
    stars.length = Math.min(stars.length, settings.count);
    while (stars.length < settings.count) stars.push(createStar());
    for (const star of stars) star.glint = false;
    for (const star of [...stars].sort((a, b) => b.depth - a.depth).slice(0, settings.compact ? 3 : 6)) star.glint = true;
    paintDistantSky();
    if (settings.compact) pointer.x = pointer.y = pointer.targetX = pointer.targetY = 0;
    links.length = 0;
    project();
    refreshConnections(true);
    nextConnections = elapsed + .5;
    draw();
    host.classList.add('starfield-ready');
    syncMotion();
  }

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 120);
  }, { passive: true });
  window.addEventListener('pointermove', (event) => {
    if (settings.compact || event.pointerType !== 'mouse' || shouldPause()) return;
    pointer.targetX = (clamp(event.clientX / width, 0, 1) - .5) * 8;
    pointer.targetY = (clamp(event.clientY / height, 0, 1) - .5) * 8;
  }, { passive: true });
  window.addEventListener('blur', () => { pointer.targetX = pointer.targetY = 0; });
  document.addEventListener('visibilitychange', syncMotion);
  reducedMotion.addEventListener('change', syncMotion);
  coarsePointer.addEventListener('change', resize);
  const observer = new MutationObserver(syncMotion);
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  window.addEventListener('pagehide', () => {
    suspended = true;
    clearTimeout(resizeTimer);
    syncMotion();
  });
  window.addEventListener('pageshow', () => { suspended = false; syncMotion(); });
  canvas.addEventListener('contextlost', (event) => {
    event.preventDefault();
    contextLost = true;
    host.classList.remove('starfield-ready');
    syncMotion();
  });
  canvas.addEventListener('contextrestored', () => { contextLost = false; resize(); });
  resize();
})();
