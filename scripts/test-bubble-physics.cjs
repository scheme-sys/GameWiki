'use strict';
const assert = require('node:assert/strict');
const test = require('node:test');
const BubbleField = require('../assets/bubble-physics.js');

const layouts = [
  { name: 'phone', width: 296, height: 422, radii: [64, 60, 66, 68] },
  { name: 'landscape', width: 544, height: 232, radii: [50, 49, 51, 52] },
  { name: 'desktop', width: 1392, height: 776, radii: [88, 84, 92, 96] }
];
function valid(field) {
  const bodies = field.getBodies();
  for (let i = 0; i < bodies.length; i++) {
    const a = bodies[i], inset = a.radius + field.padding;
    for (const value of [a.x, a.y, a.anchorX, a.anchorY]) assert.ok(Number.isFinite(value));
    assert.ok(a.x >= inset - 0.001 && a.x <= field.width - inset + 0.001, `${a.id} exceeds horizontal bounds`);
    assert.ok(a.y >= inset - 0.001 && a.y <= field.height - inset + 0.001, `${a.id} exceeds vertical bounds`);
    for (let j = i + 1; j < bodies.length; j++) {
      const b = bodies[j];
      assert.ok(Math.hypot(a.x - b.x, a.y - b.y) >= a.radius + b.radius + field.gap - 0.001,
        `${a.id} overlaps ${b.id}`);
    }
  }
}
const anchors = (field) => field.getBodies().map(({ id, anchorX, anchorY }) => ({ id, anchorX, anchorY }));
function fieldFor(config, points) {
  const field = new BubbleField({ width: config.width, height: config.height, padding: 2, gap: 12 });
  field.setBodies(config.radii.map((radius, index) => ({ id: `game-${index}`, radius,
    x: points?.[index]?.[0] ?? config.width / 2,
    y: points?.[index]?.[1] ?? config.height / 2 })));
  return field;
}

test('four coincident circles settle at actual phone, landscape and desktop sizes', () => {
  for (const layout of layouts) {
    const field = fieldFor(layout);
    valid(field);
    assert.equal(field.getBodies().length, 4);
  }
});

test('a rapid drag sweeps through neighbours without tunnelling or losing anchors', () => {
  const config = { width: 544, height: 232, radii: [50, 50, 50, 50] };
  const field = fieldFor(config, [[56,116],[200,116],[344,116],[488,116]]);
  field.grab('game-0');
  field.dragTo('game-0', 10000, 116);
  valid(field);
  assert.ok(field.getBodies()[1].x > 200, 'The swept path must push the first neighbour');
  const afterDrag = field.getBodies();
  const pushed = afterDrag.map((body,index) => Math.abs(body.x - [56,200,344,488][index]) > 0.001);
  const held = afterDrag[0];
  assert.ok(held.x > 145, 'A packed row should transfer the available space through every neighbour');
  for (let frame = 0; frame < 120; frame++) field.step(1 / 60);
  assert.equal(field.getBodies()[0].x, held.x);
  assert.equal(field.getBodies()[0].y, held.y);
  valid(field);
  field.release();
  for (const [index,body] of field.getBodies().entries()) {
    if (pushed[index]) { assert.equal(body.anchorX, body.x); assert.equal(body.anchorY, body.y); }
    else { assert.equal(body.anchorX, afterDrag[index].anchorX); assert.equal(body.anchorY, afterDrag[index].anchorY); }
  }
  const saved = anchors(field);
  for (let frame = 0; frame < 60; frame++) field.step(1 / 60);
  assert.deepEqual(anchors(field), saved);
});

test('two minutes of crowded drift stay slow, local and free of overlaps', () => {
  for (const config of layouts) {
    const field = fieldFor(config);
    const saved = anchors(field);
    let previous = field.getBodies(), moved = false, furthest = 0;
    for (let frame = 0; frame < 7200; frame++) {
      field.step(1 / 60);
      valid(field);
      const current = field.getBodies();
      for (let index = 0; index < current.length; index++) {
        const body = current[index];
        const distance = Math.hypot(body.x - previous[index].x, body.y - previous[index].y);
        assert.ok(distance <= field.maxDriftSpeed / 60 + 0.001, 'Idle contact must not create a speed spike');
        furthest = Math.max(furthest, Math.hypot(body.x - body.anchorX, body.y - body.anchorY));
        moved ||= distance > 0.001;
      }
      previous = current;
    }
    assert.ok(moved, config.name + ' should float');
    assert.ok(furthest <= field.drift + 4, config.name + ' should stay near its placed anchors: ' + furthest);
    assert.deepEqual(anchors(field), saved);
  }
});

test('time-based motion agrees at 15, 30, 60 and 120 fps', () => {
  const results = [15, 30, 60, 120].map((fps) => {
    const field = new BubbleField({ width: 900, height: 600 });
    field.setBodies([{ id: 'steady', radius: 50, x: 300, y: 250 }]);
    for (let frame = 0; frame < fps * 60; frame++) field.step(1 / fps);
    return field.getBodies()[0];
  });
  for (const result of results) assert.ok(Math.hypot(result.x - results[0].x, result.y - results[0].y) < 0.04);
});

test('long stalls are capped and reduced motion still permits drag and keyboard moves', () => {
  const field = fieldFor(layouts[0]);
  const before = field.getBodies();
  field.step(60);
  for (const [index, body] of field.getBodies().entries()) {
    assert.ok(Math.hypot(body.x - before[index].x, body.y - before[index].y) <= field.maxDriftSpeed * 0.1 + 0.001);
  }
  field.setReducedMotion(true);
  const frozen = field.getBodies();
  for (let frame = 0; frame < 120; frame++) field.step(1 / 15);
  assert.deepEqual(field.getBodies(), frozen);
  field.setPosition('game-0', 120, 350);
  valid(field);
  assert.notDeepEqual(field.getBodies(), frozen);
  const heldAnchors = anchors(field);
  field.grab('game-1');
  field.release();
  assert.deepEqual(anchors(field), heldAnchors, 'A click or long press must not commit idle coordinates');
});

test('only one RAF exists; pause, reduced motion, empty fields and destroy cancel it', () => {
  let nextId = 0;
  const frames = new Map();
  const field = new BubbleField({ width: 500, height: 400,
    requestAnimationFrame(callback) { frames.set(++nextId, callback); return nextId; },
    cancelAnimationFrame(id) { frames.delete(id); }
  });
  field.start(); assert.equal(frames.size, 0);
  field.setBodies([{ id: 'a', radius: 40, x: 200, y: 180 }]);
  field.start().start(); assert.equal(frames.size, 1);
  const [id, callback] = [...frames][0]; frames.delete(id); callback(1000);
  assert.equal(frames.size, 1);
  field.setReducedMotion(true); assert.equal(frames.size, 0);
  field.setPosition('a', 260, 220); assert.equal(frames.size, 0);
  field.setReducedMotion(false); assert.equal(frames.size, 1);
  field.stop(); assert.equal(frames.size, 0);
  field.setReducedMotion(true).setReducedMotion(false); assert.equal(frames.size, 0);
  field.start().setBodies([]); assert.equal(frames.size, 0);
  field.setBodies([{ id: 'a', radius: 40, x: 200, y: 180 }]); assert.equal(frames.size, 1);
  field.destroy(); assert.equal(frames.size, 0);
});

test('resize repairs saved collisions; legal supplied anchors survive unchanged', () => {
  const field = new BubbleField({ width: 1000, height: 700, gap: 12, padding: 2 });
  field.setBodies([{ id: 'saved', x: 305, y: 260, radius: 40, anchorX: 300, anchorY: 255 }]);
  assert.deepEqual(anchors(field), [{ id: 'saved', anchorX: 300, anchorY: 255 }]);
  field.setBodies([0,1,2,3].map((id) => ({ id, x: 400 + id * 125, y: 350, radius: 58 })));
  for (const [width, height] of [[296,422],[544,232],[1200,700],[296,422]]) {
    field.resize(width, height); valid(field);
    const stable = anchors(field);
    field.resize(width, height);
    assert.deepEqual(anchors(field), stable, 'Repeated resize must not walk anchors');
  }
});

test('seeded corner and direction-change stress keeps every displayed drag pose legal', () => {
  let seed = 0x1c29ab;
  const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  let operations = 0, worst = 0, elapsed = 0;
  for (const config of layouts) {
    for (let trial = 0; trial < 100; trial++) {
      const field = fieldFor(config, Array.from({ length: 4 }, () => [random() * config.width, random() * config.height]));
      valid(field);
      const id = 'game-' + Math.floor(random() * 4);
      field.grab(id);
      const targets = [[-100,-100],[config.width+100,-100],[config.width+100,config.height+100],[-100,config.height+100],
        ...Array.from({ length: 8 }, () => [random() * config.width, random() * config.height])];
      for (const [x,y] of targets) {
        const start = performance.now(); field.dragTo(id,x,y); const duration = performance.now() - start;
        worst = Math.max(worst,duration); elapsed += duration; operations++;
        valid(field);
      }
      field.release();
      const saved = anchors(field);
      for (let frame = 0; frame < 20; frame++) { field.step(frame % 2 ? 1/15 : 1/120); valid(field); }
      assert.deepEqual(anchors(field),saved);
    }
  }
  console.log(`${operations} drag events: average ${(elapsed/operations).toFixed(3)} ms; worst ${worst.toFixed(2)} ms.`);
});

test('physically impossible viewport inputs remain finite and terminate', () => {
  const field = fieldFor({ width: 50, height: 40, radii: [60,60,60,60] });
  field.dragTo('game-0', Infinity, NaN).release().resize(1,1).step(0.1);
  for (const body of field.getBodies()) assert.ok(Number.isFinite(body.x) && Number.isFinite(body.y));
});