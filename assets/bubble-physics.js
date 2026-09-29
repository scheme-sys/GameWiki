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


    _captionContact(a, b) {
      const span = a.radius + b.radius + this.gap;
      const dx = b.x - a.x;
      const down = a.y + span + a.labelHeight - b.y;
      const up = b.y + span + b.labelHeight - a.y;
      if (span - Math.abs(dx) <= EPSILON || down <= EPSILON || up <= EPSILON) return null;
      return [
        { axis: 'x', direction: 1, overlap: span - dx, span },
        { axis: 'x', direction: -1, overlap: span + dx, span },
        { axis: 'y', direction: 1, overlap: down, span: span + a.labelHeight },
        { axis: 'y', direction: -1, overlap: up, span: span + b.labelHeight }
      ];
    }

    _separateCaptions(a, b, pinGrabbed) {
      const contact = this._captionContact(a, b);
      if (!contact) return 0;
      const boundsA = this._bounds(a), boundsB = this._bounds(b);
      const pinnedA = pinGrabbed && a.id === this._grabbed;
      const pinnedB = pinGrabbed && b.id === this._grabbed;
      // A smaller penetration is not useful if a wall prevents that movement.
      // Consider both signs on both axes, and transfer unused movement from a
      // blocked body to its neighbour instead of losing half the correction.
      const options = contact.map((move) => {
        const suffix = move.axis === 'x' ? 'X' : 'Y';
        const roomA = pinnedA ? 0 : move.direction > 0
          ? a[move.axis] - boundsA['min' + suffix] : boundsA['max' + suffix] - a[move.axis];
        const roomB = pinnedB ? 0 : move.direction > 0
          ? boundsB['max' + suffix] - b[move.axis] : b[move.axis] - boundsB['min' + suffix];
        return { ...move, roomA, roomB };
      }).filter((move) => move.roomA + move.roomB >= move.overlap - EPSILON)
        .sort((first, second) => first.overlap - second.overlap);
      const move = options[0];
      if (move) {
        const shareA = pinnedA ? 0 : pinnedB ? 1 : 0.5;
        let shiftA = Math.min(move.roomA, move.overlap * shareA);
        const shiftB = Math.min(move.roomB, move.overlap - shiftA);
        shiftA += Math.min(move.roomA - shiftA, move.overlap - shiftA - shiftB);
        a[move.axis] -= move.direction * shiftA;
        b[move.axis] += move.direction * shiftB;
        this._clamp(a); this._clamp(b);
      }
      return Math.min(...contact.map((move) => move.overlap));
    }

    _packCaptions(targets) {
      // A row can be collectively too wide although every pair fits on its own.
      // In that rare jam, search feasible relative orders instead of repeatedly
      // pushing the same row into its walls. Four bubbles need at most six pair
      // constraints. Bounds propagation rejects impossible branches immediately.
      const bodies = this._bodies;
      const grabbed = bodies.findIndex((body) => body.id === this._grabbed);
      const order = bodies.map((_, index) => index);
      if (grabbed >= 0) order.unshift(...order.splice(grabbed, 1));
      let best = null, visits = 0;
      const score = (positions) => {
        let pointer = 0, neighbours = 0;
        positions.forEach((position, index) => {
          const distance = (position.x - targets[index].x) ** 2 + (position.y - targets[index].y) ** 2;
          if (index === grabbed) pointer = distance;
          else neighbours += distance;
        });
        return { pointer, neighbours };
      };
      const better = (left, right) => !right || left.pointer < right.pointer - EPSILON ||
        (Math.abs(left.pointer - right.pointer) <= EPSILON && left.neighbours < right.neighbours - EPSILON);
      const project = (edges) => {
        const ranges = bodies.map((body) => this._bounds(body));
        const tighten = () => {
          for (let pass = 0; pass <= bodies.length; pass++) {
            let changed = false;
            for (const edge of edges) {
              const lo = edge.axis === 'x' ? 'minX' : 'minY';
              const hi = edge.axis === 'x' ? 'maxX' : 'maxY';
              const from = ranges[edge.from], to = ranges[edge.to];
              const minimum = Math.max(to[lo], from[lo] + edge.span);
              const maximum = Math.min(from[hi], to[hi] - edge.span);
              changed ||= minimum > to[lo] + EPSILON || maximum < from[hi] - EPSILON;
              to[lo] = minimum; from[hi] = maximum;
              if (to[lo] > to[hi] + EPSILON || from[lo] > from[hi] + EPSILON) return false;
            }
            if (!changed) return true;
          }
          return false; // A positive cycle cannot describe a physical layout.
        };
        if (!tighten()) return null;
        const nearest = () => targets.map((target, index) => ({
          x: limit(target.x, ranges[index].minX, ranges[index].maxX),
          y: limit(target.y, ranges[index].minY, ranges[index].maxY)
        }));
        const lowerBound = score(nearest());
        if (best && !better(lowerBound, best.score)) return null;
        // Fix the held bubble first so it follows the pointer whenever the
        // available space permits; then keep neighbours near their old places.
        for (const index of order) {
          const position = nearest()[index];
          ranges[index].minX = ranges[index].maxX = position.x;
          ranges[index].minY = ranges[index].maxY = position.y;
          if (!tighten()) return null;
        }
        return nearest();
      };
      const search = (edges) => {
        if (++visits > 8192) return; // Bound the work when more games are added.
        const positions = project(edges);
        if (!positions) return;
        for (let first = 0; first < bodies.length; first++) {
          for (let second = first + 1; second < bodies.length; second++) {
            const contact = this._captionContact(
              { ...bodies[first], ...positions[first] }, { ...bodies[second], ...positions[second] });
            if (!contact) continue;
            for (const move of contact.sort((a, b) => a.overlap - b.overlap)) {
              search([...edges, {
                axis: move.axis, span: move.span,
                from: move.direction > 0 ? first : second,
                to: move.direction > 0 ? second : first
              }]);
            }
            return;
          }
        }
        const candidateScore = score(positions);
        if (better(candidateScore, best && best.score)) best = { positions, score: candidateScore };
      };
      search([]);
      if (best) best.positions.forEach((position, index) => Object.assign(bodies[index], position));
    }

    _solve(recordPushes = false) {
      const before = recordPushes ? new Map(this._bodies.map((body) => [body.id, [body.x, body.y]])) : null;
      for (const body of this._bodies) this._clamp(body);
      const hasCaptions = this._bodies.some((body) => body.labelHeight > 0);
      const targets = hasCaptions ? this._bodies.map(({ x, y }) => ({ x, y })) : null;
      // First keep the grabbed icon under the pointer. If another icon reaches a
      // wall, the final passes also constrain the grabbed icon to avoid overlap.
      for (let pass = 0; pass < (hasCaptions ? 24 : 96); pass++) {
        let deepest = 0;
        for (let first = 0; first < this._bodies.length; first++) {
          const a = this._bodies[first];
          for (let second = first + 1; second < this._bodies.length; second++) {
            const b = this._bodies[second];
            let dx = b.x - a.x;
            let dy = b.y - a.y;
            let distance = Math.hypot(dx, dy);
            const separation = a.radius + b.radius + this.gap;
            let overlap;
            if (a.labelHeight || b.labelHeight) {
              deepest = Math.max(deepest, this._separateCaptions(a, b, true));
              continue;
            }
            if (distance >= separation - EPSILON) continue;
            if (distance < EPSILON) {
              const angle = seedFor(`${a.id}:${b.id}`) * Math.PI * 2;
              dx = Math.cos(angle); dy = Math.sin(angle); distance = 1;
            }
            overlap = separation - Math.hypot(b.x - a.x, b.y - a.y);
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
      if (hasCaptions && this._bodies.some((a, index) => this._bodies.slice(index + 1).some((b) => this._captionContact(a, b)))) {
        this._packCaptions(targets);
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
