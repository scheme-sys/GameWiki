/* Lightweight circular constraints. Persist anchors; idle animation never edits them. */
(function (root) {
  'use strict';

  const finite = (value, fallback) => Number.isFinite(value) ? value : fallback;
  const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
  const EPSILON = 0.0001;
  const MAX_STEP = 1 / 60;
  function seedFor(value) {
    let seed = 2166136261;
    for (const character of String(value)) seed = Math.imul(seed ^ character.charCodeAt(0), 16777619);
    return (seed >>> 0) / 4294967296;
  }

  class LCZBubbleField {
    constructor(options = {}) {
      this.width = Math.max(1, finite(options.width, 1));
      this.height = Math.max(1, finite(options.height, 1));
      this.padding = Math.max(0, finite(options.padding, 12));
      this.gap = Math.max(0, finite(options.gap, 8));
      this.drift = clamp(finite(options.drift, 8), 0, 15);
      this.maxDriftSpeed = clamp(finite(options.maxDriftSpeed, 3), 0, 5);
      this.onUpdate = typeof options.onUpdate === 'function' ? options.onUpdate : () => {};
      this._raf = options.requestAnimationFrame || (root.requestAnimationFrame && root.requestAnimationFrame.bind(root));
      this._caf = options.cancelAnimationFrame || (root.cancelAnimationFrame && root.cancelAnimationFrame.bind(root));
      this._bodies = [];
      this._pairs = [];
      this._grabbed = null;
      this._dragDidMove = false;
      this._reducedMotion = false;
      this._running = false;
      this._destroyed = false;
      this._frameId = null;
      this._lastTime = null;
      this._elapsed = 0;
      this._frame = (time) => {
        this._frameId = null;
        if (!this._canAnimate()) return;
        if (this._lastTime !== null) this.step((time - this._lastTime) / 1000);
        this._lastTime = time;
        this._schedule();
      };
    }

    setBodies(bodies) {
      if (this._destroyed) return this;
      this._grabbed = null;
      this._dragDidMove = false;
      const seen = new Set();
      this._bodies = bodies.filter((body) => {
        if (body.id == null || seen.has(body.id)) return false;
        seen.add(body.id);
        return true;
      }).map((body) => {
        const x = finite(body.x, this.width / 2), y = finite(body.y, this.height / 2);
        const next = {
          id: body.id, x, y, radius: Math.max(1, finite(body.radius, 40)),
          anchorX: finite(body.anchorX, x), anchorY: finite(body.anchorY, y),
          phase: seedFor(body.id) * Math.PI * 2,
          frequency: 0.18 + seedFor(`${body.id}:speed`) * 0.04,
          vx: 0, vy: 0, pushed: false
        };
        this._setBounds(next);
        return next;
      });
      this._pairs = [];
      for (let i = 0; i < this._bodies.length; i++) {
        for (let j = i + 1; j < this._bodies.length; j++) {
          const a = this._bodies[i], b = this._bodies[j];
          const angle = seedFor(`${a.id}:${b.id}`) * Math.PI * 2;
          this._pairs.push({ a, b, separation: a.radius + b.radius + this.gap,
            nx: Math.cos(angle), ny: Math.sin(angle) });
        }
      }
      this._settleLayout();
      this._emit();
      this._schedule();
      return this;
    }

    resize(width, height) {
      if (this._destroyed) return this;
      this.width = Math.max(1, finite(width, this.width));
      this.height = Math.max(1, finite(height, this.height));
      for (const body of this._bodies) this._setBounds(body);
      this._settleLayout();
      this._emit();
      return this;
    }

    start() { if (!this._destroyed) { this._running = true; this._schedule(); } return this; }
    stop() { this._running = false; this._cancelFrame(); return this; }
    setReducedMotion(enabled) {
      this._reducedMotion = Boolean(enabled);
      for (const body of this._bodies) body.vx = body.vy = 0;
      if (this._reducedMotion) this._cancelFrame(); else this._schedule();
      return this;
    }

    grab(id) {
      const body = this._find(id);
      if (!body || this._destroyed) return false;
      if (this._grabbed === id) return true;
      if (this._grabbed !== null) this.release();
      this._grabbed = id;
      this._dragDidMove = false;
      body.vx = body.vy = 0;
      for (const other of this._bodies) other.pushed = false;
      this._emit();
      return true;
    }

    dragTo(id, x, y) {
      const body = this._find(id);
      if (!body || this._destroyed) return this;
      if (this._grabbed !== id) this.grab(id);
      const dx = clamp(finite(x, body.x), body.minX, body.maxX) - body.x;
      const dy = clamp(finite(y, body.y), body.minY, body.maxY) - body.y;
      const distance = Math.hypot(dx, dy);
      if (distance < EPSILON) return this;
      // Sweep small distances so even a single fast pointer event cannot tunnel.
      const stride = Math.max(4, Math.min(...this._bodies.map((other) => other.radius)) / 3);
      const count = Math.max(1, Math.ceil(distance / stride));
      let moved = false;
      for (let step = 0; step < count; step++) {
        this._remember();
        body.x += dx / count;
        body.y += dy / count;
        if (!this._solve(48, false)) {
          // A packed cluster has no legal movement in this direction. Retain the
          // last valid pose instead of teleporting another bubble to a free slot.
          this._restore();
          break;
        }
        for (const other of this._bodies) {
          const changed = Math.hypot(other.x - other.oldX, other.y - other.oldY) > EPSILON;
          if (changed) {
            moved = true;
            other.vx = other.vy = 0;
            if (other !== body) other.pushed = true;
          }
        }
      }
      if (moved) {
        this._dragDidMove = true;
        body.anchorX = body.x; body.anchorY = body.y;
        this._emit();
      }
      return this;
    }

    release(id = this._grabbed) {
      if (this._grabbed === null || id !== this._grabbed) return this;
      for (const body of this._bodies) {
        if (this._dragDidMove && (body.id === id || body.pushed)) {
          body.anchorX = body.x; body.anchorY = body.y;
          body.vx = body.vy = 0;
        }
        body.pushed = false;
      }
      this._grabbed = null;
      this._dragDidMove = false;
      this._emit();
      return this;
    }

    setPosition(id, x, y) {
      if (this.grab(id)) { this.dragTo(id, x, y); this.release(id); }
      return this;
    }
    getBodies() {
      return this._bodies.map((body) => ({ id: body.id, x: body.x, y: body.y,
        radius: body.radius, anchorX: body.anchorX, anchorY: body.anchorY,
        grabbed: body.id === this._grabbed }));
    }

    step(seconds) {
      if (this._destroyed || this._reducedMotion || !this.drift || !this.maxDriftSpeed) return this;
      // Process slow frames at normal speed, discard long hidden-tab catch-up.
      const dt = clamp(finite(seconds, 0), 0, 0.1);
      if (!dt) return this;
      const count = Math.max(1, Math.ceil(dt / MAX_STEP));
      let moved = false;
      for (let index = 0; index < count; index++) moved = this._advance(dt / count) || moved;
      if (moved) this._emit();
      return this;
    }

    destroy() {
      this.stop(); this._destroyed = true;
      this._bodies = []; this._pairs = []; this.onUpdate = () => {};
    }

    _canAnimate() { return this._running && !this._destroyed && !this._reducedMotion && this.drift > 0 && this.maxDriftSpeed > 0 && this._bodies.length > 0 && this._raf; }
    _schedule() {
      if (this._canAnimate() && this._frameId === null) this._frameId = this._raf(this._frame);
      else if (!this._canAnimate()) this._cancelFrame();
    }
    _cancelFrame() {
      if (this._frameId !== null && this._caf) this._caf(this._frameId);
      this._frameId = null; this._lastTime = null;
    }
    _find(id) { return this._bodies.find((body) => body.id === id); }
    _emit() { if (!this._destroyed) this.onUpdate(this.getBodies()); }
    _remember() { for (const body of this._bodies) { body.oldX = body.x; body.oldY = body.y; } }
    _restore() { for (const body of this._bodies) { body.x = body.oldX; body.y = body.oldY; body.vx = body.vy = 0; } }
    _setBounds(body) {
      const inset = body.radius + this.padding;
      body.minX = Math.min(inset, this.width / 2); body.maxX = Math.max(this.width - inset, this.width / 2);
      body.minY = Math.min(inset, this.height / 2); body.maxY = Math.max(this.height - inset, this.height / 2);
    }
    _clamp(body) { body.x = clamp(body.x, body.minX, body.maxX); body.y = clamp(body.y, body.minY, body.maxY); }
    _room(body, nx, ny) {
      return Math.max(0, Math.min(
        nx > EPSILON ? (body.maxX - body.x) / nx : nx < -EPSILON ? (body.minX - body.x) / nx : Infinity,
        ny > EPSILON ? (body.maxY - body.y) / ny : ny < -EPSILON ? (body.minY - body.y) / ny : Infinity));
    }
    _valid() {
      return this._pairs.every(({ a, b, separation }) =>
        (a.x - b.x) ** 2 + (a.y - b.y) ** 2 >= (separation - EPSILON) ** 2);
    }
    _solve(passes, pinHeld) {
      for (const body of this._bodies) this._clamp(body);
      for (let pass = 0; pass < passes; pass++) {
        let touched = false;
        for (let index = 0; index < this._pairs.length; index++) {
          const pair = this._pairs[pass % 2 ? this._pairs.length - index - 1 : index];
          const { a, b, separation } = pair;
          const dx = b.x - a.x, dy = b.y - a.y;
          const squared = dx * dx + dy * dy;
          if (squared >= (separation - EPSILON) ** 2) continue;
          touched = true;
          const distance = Math.sqrt(squared);
          const nx = distance > EPSILON ? dx / distance : pair.nx;
          const ny = distance > EPSILON ? dy / distance : pair.ny;
          const heldA = a.id === this._grabbed, heldB = b.id === this._grabbed;
          const roomA = pinHeld && heldA ? 0 : this._room(a, -nx, -ny);
          const roomB = pinHeld && heldB ? 0 : this._room(b, nx, ny);
          const overlap = separation - distance + EPSILON;
          const priority = pass < 12;
          const shareA = heldA ? (priority ? 0 : 0.5) : heldB ? (priority ? 1 : 0.5) : 0.5;
          let shiftA = Math.min(roomA, overlap * shareA);
          const shiftB = Math.min(roomB, overlap - shiftA);
          shiftA += Math.min(roomA - shiftA, overlap - shiftA - shiftB);
          a.x -= nx * shiftA; a.y -= ny * shiftA;
          b.x += nx * shiftB; b.y += ny * shiftB;
          this._clamp(a); this._clamp(b);
        }
        if (!touched) return true;
      }
      return this._valid();
    }

    _settleLayout() {
      this._remember();
      if (!this._solve(40, false)) this._packInitialLayout();
      for (const body of this._bodies) {
        body.anchorX = clamp(body.anchorX + (body.x - body.oldX), body.minX, body.maxX);
        body.anchorY = clamp(body.anchorY + (body.y - body.oldY), body.minY, body.maxY);
        body.vx = body.vy = 0;
      }
    }
    _packInitialLayout() {
      // Only used when loading/resizing a severely colliding saved layout. A
      // four-circle grid needs 24 assignments, never a per-frame packing search.
      const count = this._bodies.length;
      if (!count) return;
      const radius = Math.max(...this._bodies.map((body) => body.radius));
      const left = radius + this.padding, right = this.width - left;
      const top = radius + this.padding, bottom = this.height - top;
      const span = radius * 2 + this.gap + EPSILON;
      let best = null, bestScore = Infinity;
      for (let columns = 1; columns <= count; columns++) {
        const rows = Math.ceil(count / columns);
        if (right < left || bottom < top || (columns - 1) * span > right - left || (rows - 1) * span > bottom - top) continue;
        const points = Array.from({ length: count }, (_, index) => ({
          x: columns === 1 ? this.width / 2 : left + (index % columns) * (right - left) / (columns - 1),
          y: rows === 1 ? this.height / 2 : top + Math.floor(index / columns) * (bottom - top) / (rows - 1)
        }));
        const search = (order, unused, score) => {
          if (score >= bestScore) return;
          if (!unused.length) { best = order.slice(); bestScore = score; return; }
          const body = this._bodies[order.length];
          const choices = count <= 6 ? unused : [unused.reduce((nearest, point) =>
            Math.hypot(point.x - body.oldX, point.y - body.oldY) < Math.hypot(nearest.x - body.oldX, nearest.y - body.oldY) ? point : nearest)];
          for (const point of choices) search([...order, point], unused.filter((other) => other !== point),
            score + (point.x - body.oldX) ** 2 + (point.y - body.oldY) ** 2);
        };
        search([], points, 0);
      }
      if (best) this._bodies.forEach((body, index) => { body.x = best[index].x; body.y = best[index].y; });
    }

    _advance(dt) {
      this._remember();
      const time = this._elapsed + dt / 2;
      this._elapsed += dt;
      for (const body of this._bodies) {
        const angle = time * body.frequency + body.phase;
        const targetX = clamp(body.anchorX + Math.sin(angle) * this.drift * 0.82, body.minX, body.maxX);
        const targetY = clamp(body.anchorY + Math.cos(angle * 0.83 + body.phase * 0.2) * this.drift * 0.56, body.minY, body.maxY);
        body.dx = (targetX - body.x) * 0.8;
        body.dy = (targetY - body.y) * 0.8;
        body.fixed = body.id === this._grabbed || body.pushed;
      }
      // Repulsion starts before contact; the circular solver is a last boundary.
      const reach = Math.max(4, this.drift * 1.5);
      for (const { a, b, separation } of this._pairs) {
        const dx = b.x - a.x, dy = b.y - a.y;
        const distance = Math.hypot(dx, dy);
        if (distance < EPSILON || distance >= separation + reach) continue;
        const force = (1 - clamp((distance - separation) / reach, 0, 1)) ** 2 * 1.2;
        if (!a.fixed) { a.dx -= dx / distance * force; a.dy -= dy / distance * force; }
        if (!b.fixed) { b.dx += dx / distance * force; b.dy += dy / distance * force; }
      }
      const damping = 3.2, decay = Math.exp(-damping * dt);
      for (const body of this._bodies) {
        if (body.fixed) { body.vx = body.vy = 0; continue; }
        const scale = Math.min(1, this.maxDriftSpeed / (Math.hypot(body.dx, body.dy) || 1));
        const vx = body.dx * scale, vy = body.dy * scale;
        body.x += vx * dt + (body.vx - vx) * (1 - decay) / damping;
        body.y += vy * dt + (body.vy - vy) * (1 - decay) / damping;
        body.vx = vx + (body.vx - vx) * decay;
        body.vy = vy + (body.vy - vy) * decay;
      }
      if (!this._solve(16, true)) { this._restore(); return false; }
      let scale = 1;
      for (const body of this._bodies) {
        const distance = Math.hypot(body.x - body.oldX, body.y - body.oldY);
        if (distance > this.maxDriftSpeed * dt) scale = Math.min(scale, this.maxDriftSpeed * dt / distance);
      }
      if (scale < 1) {
        for (const body of this._bodies) {
          body.x = body.oldX + (body.x - body.oldX) * scale;
          body.y = body.oldY + (body.y - body.oldY) * scale;
        }
        if (!this._valid()) { this._restore(); return false; }
      }
      return this._bodies.some((body) => Math.abs(body.x - body.oldX) + Math.abs(body.y - body.oldY) > EPSILON);
    }
  }

  root.LCZBubbleField = LCZBubbleField;
  if (typeof module === 'object' && module.exports) module.exports = LCZBubbleField;
})(typeof window === 'object' ? window : globalThis);