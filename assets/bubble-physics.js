/*
 * Small, framework-free bubble field. Coordinates describe icon centres.
 * Idle drift never changes anchors; an intentional drag commits pushed neighbours
 * on release. Persist anchorX/anchorY rather than the animated x/y coordinates.
 */
(function (root) {
  'use strict';

  const finite = (value, fallback) => Number.isFinite(value) ? value : fallback;
  const limit = (value, minimum, maximum) => Math.max(minimum, Math.min(maximum, value));
  const EPSILON = 0.001;
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
      this.drift = limit(finite(options.drift, 9), 0, 15);
      this.maxDriftSpeed = limit(finite(options.maxDriftSpeed, 4), 0, 5);
      this.onUpdate = typeof options.onUpdate === 'function' ? options.onUpdate : () => {};
      this._raf = options.requestAnimationFrame || (root.requestAnimationFrame && root.requestAnimationFrame.bind(root));
      this._caf = options.cancelAnimationFrame || (root.cancelAnimationFrame && root.cancelAnimationFrame.bind(root));
      this._bodies = [];
      this._grabbed = null;
      this._pushed = new Set();
      this._dragDidMove = false;
      this._reducedMotion = false;
      this._running = false;
      this._destroyed = false;
      this._frameId = null;
      this._lastTime = null;
      this._elapsed = 0;
      this._frame = (time) => {
        this._frameId = null;
        if (!this._running || this._destroyed) return;
        if (this._lastTime !== null) this.step((time - this._lastTime) / 1000);
        this._lastTime = time;
        if (this._running && !this._destroyed) this._frameId = this._raf(this._frame);
      };
    }

    setBodies(bodies) {
      if (this._destroyed) return this;
      this._grabbed = null;
      this._pushed.clear();
      this._dragDidMove = false;
      const seen = new Set();
      this._bodies = bodies.filter((body) => {
        if (body.id == null || seen.has(body.id)) return false;
        seen.add(body.id);
        return true;
      }).map((body) => {
        const next = {
          id: body.id,
          x: finite(body.x, this.width / 2),
          y: finite(body.y, this.height / 2),
          radius: Math.max(1, finite(body.radius, 40)),
          labelHeight: Math.max(0, finite(body.labelHeight, 0)),
          anchorX: finite(body.anchorX, finite(body.x, this.width / 2)),
          anchorY: finite(body.anchorY, finite(body.y, this.height / 2)),
          phase: seedFor(body.id) * Math.PI * 2,
          frequency: 0.17 + seedFor(`${body.id}:speed`) * 0.05,
          suppliedAnchor: Number.isFinite(body.anchorX) && Number.isFinite(body.anchorY)
        };
        this._clamp(next);
        this._clampAnchor(next);
        return next;
      });
      this._solve();
      for (const body of this._bodies) {
        if (!body.suppliedAnchor) { body.anchorX = body.x; body.anchorY = body.y; }
      }
      this._emit();
      return this;
    }

    resize(width, height) {
      this.width = Math.max(1, finite(width, this.width));
      this.height = Math.max(1, finite(height, this.height));
      const before = new Map(this._bodies.map((body) => [body.id, { x: body.x, y: body.y }]));
      this._solve();
      for (const body of this._bodies) {
        const previous = before.get(body.id);
        body.anchorX += body.x - previous.x;
        body.anchorY += body.y - previous.y;
        this._clampAnchor(body);
      }
      this._emit();
      return this;
    }

    start() {
      if (this._running || this._destroyed || !this._raf) return this;
      this._running = true;
      this._lastTime = null;
      this._frameId = this._raf(this._frame);
      return this;
    }

    stop() {
      this._running = false;
      if (this._frameId !== null && this._caf) this._caf(this._frameId);
      this._frameId = null;
      this._lastTime = null;
      return this;
    }

    setReducedMotion(enabled) {
      this._reducedMotion = Boolean(enabled);
      return this;
    }

    grab(id) {
      if (!this._find(id) || this._destroyed) return false;
      if (this._grabbed !== null && this._grabbed !== id) this.release(this._grabbed);
      this._grabbed = id;
      this._pushed.clear();
      this._dragDidMove = false;
      this._emit();
      return true;
    }

    dragTo(id, x, y) {
      const body = this._find(id);
      if (!body || this._destroyed) return this;
      if (this._grabbed !== id) this.grab(id);
      const target = { ...body, x: finite(x, body.x), y: finite(y, body.y) };
      this._clamp(target);
      const dx = target.x - body.x;
      const dy = target.y - body.y;
      if (Math.hypot(dx, dy) < EPSILON) return this;
      this._dragDidMove = true;
      // Substeps prevent a fast pointer from tunnelling through a neighbour.
      const smallest = Math.min(...this._bodies.map((entry) => entry.radius));
      const steps = Math.min(128, Math.max(1, Math.ceil(Math.hypot(dx, dy) / Math.max(4, smallest / 2))));
      for (let index = 0; index < steps; index++) {
        body.x += dx / steps;
        body.y += dy / steps;
        this._solve(true);
      }
      body.anchorX = body.x;
      body.anchorY = body.y;
      this._emit();
      return this;
    }

    release(id = this._grabbed) {
      if (this._grabbed === null || id !== this._grabbed) return this;
      if (this._dragDidMove) {
        for (const body of this._bodies) {
          if (body.id === this._grabbed || this._pushed.has(body.id)) {
            body.anchorX = body.x;
            body.anchorY = body.y;
          }
        }
      }
      this._grabbed = null;
      this._pushed.clear();
      this._dragDidMove = false;
      this._emit();
      return this;
    }

    setPosition(id, x, y) {
      if (this.grab(id)) { this.dragTo(id, x, y); this.release(id); }
      return this;
    }

    getBodies() {
      return this._bodies.map((body) => ({
        id: body.id, x: body.x, y: body.y,
        radius: body.radius, labelHeight: body.labelHeight,
        anchorX: body.anchorX, anchorY: body.anchorY,
        grabbed: body.id === this._grabbed
      }));
    }

    // Seconds, capped at 50 ms so returning to a background tab never jumps.
    step(seconds) {
      if (this._destroyed) return this;
      const dt = limit(finite(seconds, 0), 0, 0.05);
      if (dt <= 0) return this;
      const before = this._bodies.map((body) => [body.x, body.y]);
      if (!this._reducedMotion) {
        this._elapsed += dt;
        for (const body of this._bodies) {
          if (body.id === this._grabbed) continue;
          const angle = this._elapsed * body.frequency + body.phase;
          const offsetX = Math.sin(angle) * this.drift;
          const offsetY = Math.cos(angle * 0.83 + body.phase * 0.2) * this.drift * 0.7;
          const offsetScale = Math.min(1, this.drift / (Math.hypot(offsetX, offsetY) || 1));
          const dx = body.anchorX + offsetX * offsetScale - body.x;
          const dy = body.anchorY + offsetY * offsetScale - body.y;
          const distance = Math.hypot(dx, dy);
          const move = Math.min(distance, this.maxDriftSpeed * dt, distance * (1 - Math.exp(-dt * 0.65)));
          if (distance > EPSILON) {
            body.x += dx / distance * move;
            body.y += dy / distance * move;
          }
        }
      }
      this._solve();
      if (this._bodies.some((body, index) => Math.abs(body.x - before[index][0]) + Math.abs(body.y - before[index][1]) > EPSILON)) this._emit();
      return this;
    }

    destroy() {
      this.stop();
      this._destroyed = true;
      this._bodies = [];
      this._pushed.clear();
      this.onUpdate = () => {};
    }

    _find(id) { return this._bodies.find((body) => body.id === id); }
    _emit() { if (!this._destroyed) this.onUpdate(this.getBodies()); }

    _bounds(body) {
      const inset = body.radius + this.padding;
      const horizontal = this.width >= inset * 2;
      const vertical = this.height >= inset * 2 + body.labelHeight;
      return {
        minX: horizontal ? inset : this.width / 2,
        maxX: horizontal ? this.width - inset : this.width / 2,
        minY: vertical ? inset : Math.max(0, (this.height - body.labelHeight) / 2),
        maxY: vertical ? this.height - inset - body.labelHeight : Math.max(0, (this.height - body.labelHeight) / 2)
      };
    }

    _clamp(body) {
      const bounds = this._bounds(body);
      body.x = limit(body.x, bounds.minX, bounds.maxX);
      body.y = limit(body.y, bounds.minY, bounds.maxY);
    }

    _clampAnchor(body) {
      const bounds = this._bounds(body);
      body.anchorX = limit(body.anchorX, bounds.minX, bounds.maxX);
      body.anchorY = limit(body.anchorY, bounds.minY, bounds.maxY);
    }

    _solve(recordPushes = false) {
      const before = recordPushes ? new Map(this._bodies.map((body) => [body.id, [body.x, body.y]])) : null;
      for (const body of this._bodies) this._clamp(body);
      // First keep the grabbed icon under the pointer. If another icon reaches a
      // wall, the final passes also constrain the grabbed icon to avoid overlap.
      for (let pass = 0; pass < 96; pass++) {
        let deepest = 0;
        for (let first = 0; first < this._bodies.length; first++) {
          const a = this._bodies[first];
          for (let second = first + 1; second < this._bodies.length; second++) {
            const b = this._bodies[second];
            let dx = b.x - a.x;
            let dy = b.y - a.y;
            let distance = Math.hypot(dx, dy);
            const separation = a.radius + b.radius + this.gap;
            if (distance >= separation - EPSILON) continue;
            if (distance < EPSILON) {
              const angle = seedFor(`${a.id}:${b.id}`) * Math.PI * 2;
              dx = Math.cos(angle); dy = Math.sin(angle); distance = 1;
            }
            const overlap = separation - Math.hypot(b.x - a.x, b.y - a.y);
            deepest = Math.max(deepest, overlap);
            const pinnedA = pass < 24 && a.id === this._grabbed;
            const pinnedB = pass < 24 && b.id === this._grabbed;
            const weightA = pinnedA ? 0 : pinnedB ? 1 : 0.5;
            const weightB = 1 - weightA;
            a.x -= dx / distance * overlap * weightA;
            a.y -= dy / distance * overlap * weightA;
            b.x += dx / distance * overlap * weightB;
            b.y += dy / distance * overlap * weightB;
            this._clamp(a); this._clamp(b);
          }
        }
        if (deepest < EPSILON) break;
      }
      if (before) {
        for (const body of this._bodies) {
          const previous = before.get(body.id);
          if (body.id !== this._grabbed && Math.hypot(body.x - previous[0], body.y - previous[1]) > EPSILON) this._pushed.add(body.id);
        }
      }
    }
  }

  root.LCZBubbleField = LCZBubbleField;
  if (typeof module === 'object' && module.exports) module.exports = LCZBubbleField;
})(typeof window === 'object' ? window : globalThis);
