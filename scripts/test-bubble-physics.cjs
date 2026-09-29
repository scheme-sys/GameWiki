'use strict';
const assert = require('node:assert/strict');
const test = require('node:test');
const BubbleField = require('../assets/bubble-physics.js');

function separated(field) {
  const bodies = field.getBodies();
  for (let first = 0; first < bodies.length; first++) {
    const a = bodies[first];
    for (let second = first + 1; second < bodies.length; second++) {
      const b = bodies[second];
      if (a.labelHeight || b.labelHeight) {
        const horizontal = Math.abs(a.x - b.x) >= a.radius + b.radius + field.gap - 0.01;
        const vertical = a.y + a.radius + a.labelHeight + field.gap <= b.y - b.radius + 0.01 ||
          b.y + b.radius + b.labelHeight + field.gap <= a.y - a.radius + 0.01;
        assert.ok(horizontal || vertical, `${a.id} caption overlaps ${b.id}`);
      }
      assert.ok(Math.hypot(a.x - b.x, a.y - b.y) >= a.radius + b.radius + field.gap - 0.01, `${a.id} overlaps ${b.id}`);
    }
    assert.ok(a.x >= a.radius + field.padding - 0.01);
    assert.ok(a.x <= field.width - a.radius - field.padding + 0.01);
    assert.ok(a.y >= a.radius + field.padding - 0.01);
    assert.ok(a.y <= field.height - a.radius - a.labelHeight - field.padding + 0.01);
  }
}

test('coincident positions separate and labels stay inside resized bounds', () => {
  const field = new BubbleField({ width: 500, height: 600 });
  field.setBodies(['a', 'b', 'c'].map((id) => ({ id, x: 250, y: 300, radius: 38, labelHeight: 40 })));
  separated(field);
  field.resize(240, 390);
  separated(field);
});

test('drag repels a row of neighbours, including against a wall', () => {
  const field = new BubbleField({ width: 450, height: 350 });
  field.setBodies([
    { id: 'a', x: 90, y: 160, radius: 40 },
    { id: 'b', x: 210, y: 160, radius: 40 },
    { id: 'c', x: 330, y: 160, radius: 40 }
  ]);
  field.grab('a');
  for (let x = 90; x <= 500; x += 7) {
    field.dragTo('a', x, 160);
    separated(field);
  }
  field.release('a');
  assert.ok(field.getBodies().find((body) => body.id === 'b').anchorX > 210);
  for (const body of field.getBodies()) {
    assert.equal(body.anchorX, body.x);
    assert.equal(body.anchorY, body.y);
  }
});

test('idle stays gentle and local without modifying persistent anchors', () => {
  const field = new BubbleField({ width: 800, height: 600 });
  field.setBodies([{ id: 'a', x: 300, y: 250, radius: 40 }]);
  let previous = field.getBodies()[0];
  let moved = false;
  for (let frame = 0; frame < 3600; frame++) {
    field.step(1 / 60);
    const body = field.getBodies()[0];
    const displacement = Math.hypot(body.x - previous.x, body.y - previous.y);
    assert.ok(displacement <= 4 / 60 + 0.00001);
    assert.ok(Math.hypot(body.x - 300, body.y - 250) <= 9.00001);
    assert.equal(body.anchorX, 300);
    assert.equal(body.anchorY, 250);
    moved ||= displacement > 0.001;
    previous = body;
  }
  assert.ok(moved);
});

test('a long frame is capped, reduced motion is still draggable', () => {
  const field = new BubbleField({ width: 500, height: 400 });
  field.setBodies([{ id: 'a', x: 200, y: 180, radius: 35 }, { id: 'b', x: 300, y: 180, radius: 35 }]);
  field.step(60);
  assert.ok(Math.hypot(field.getBodies()[0].x - 200, field.getBodies()[0].y - 180) <= 0.20001);
  field.setReducedMotion(true);
  const frozen = field.getBodies();
  for (let frame = 0; frame < 120; frame++) field.step(1 / 60);
  assert.deepEqual(field.getBodies(), frozen);
  field.setPosition('a', 300, 180);
  separated(field);
  assert.notEqual(field.getBodies()[0].x, frozen[0].x);
});

test('start is idempotent and stop/destroy cancel the sole animation frame', () => {
  let nextId = 0;
  const callbacks = new Map();
  const field = new BubbleField({
    width: 500, height: 400,
    requestAnimationFrame(callback) { callbacks.set(++nextId, callback); return nextId; },
    cancelAnimationFrame(id) { callbacks.delete(id); }
  });
  field.setBodies([{ id: 'a', x: 200, y: 180, radius: 35 }]);
  field.start().start();
  assert.equal(callbacks.size, 1);
  const [id, frame] = [...callbacks][0];
  callbacks.delete(id);
  frame(1000);
  assert.equal(callbacks.size, 1);
  field.stop();
  assert.equal(callbacks.size, 0);
  field.start().destroy();
  assert.equal(callbacks.size, 0);
});


test('four phone bubbles repel including their captions during repeated drags', () => {
  const field = new BubbleField({ width: 288, height: 442, padding: 3, gap: 10 });
  field.setBodies([
    { id: 'dayr', x: 72, y: 106, radius: 68, labelHeight: 34 },
    { id: 'craft', x: 216, y: 128, radius: 68, labelHeight: 31 },
    { id: 'westland', x: 72, y: 301, radius: 68, labelHeight: 33 },
    { id: 'dawn', x: 216, y: 318, radius: 68, labelHeight: 32 }
  ]);
  separated(field);
  for (const [x, y] of [[216,128],[3,3],[285,439],[144,221],[72,301],[216,318]]) {
    field.setPosition('dayr', x, y);
    separated(field);
  }
});

test('a held caption stays at a feasible pointer position and a wall uses the free axis', () => {
  const field = new BubbleField({ width: 360, height: 460, padding: 3, gap: 10 });
  field.setBodies([
    { id: 'held', x: 200, y: 120, radius: 50, labelHeight: 35 },
    { id: 'edge', x: 307, y: 120, radius: 50, labelHeight: 35 }
  ]);
  field.grab('held');
  field.dragTo('held', 280, 120);
  separated(field);
  const held = field.getBodies().find((body) => body.id === 'held');
  assert.equal(held.x, 280);
  assert.equal(held.y, 120);
  assert.ok(Math.abs(field.getBodies()[1].y - 120) > 100);
});

test('360 seeded four-bubble layouts survive random drags, corners, and idle motion', () => {
  let seed = 0x1c29ab;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const cases = [
    { name: '320px phone', width: 288, height: 442, radius: 68, variation: 5, label: 38 },
    { name: '568px landscape', width: 536, height: 218, radius: 62.5, variation: 4, label: 30 },
    { name: 'desktop', width: 1280, height: 680, radius: 110, variation: 20, label: 45 }
  ];
  let worstDrag = 0, dragCount = 0;
  for (const config of cases) {
    for (let trial = 0; trial < 120; trial++) {
      const field = new BubbleField({ width: config.width, height: config.height, padding: 3, gap: 10 });
      field.setBodies(['dayr', 'craft', 'westland', 'dawn'].map((id) => ({
        id, x: random() * config.width, y: random() * config.height,
        radius: config.radius - random() * config.variation, labelHeight: config.label - random() * 5
      })));
      separated(field);
      const id = field.getBodies()[Math.floor(random() * 4)].id;
      const targets = [
        [-100, -100], [config.width + 100, -100],
        [config.width + 100, config.height + 100], [-100, config.height + 100],
        [config.width / 2, config.height / 2],
        ...Array.from({ length: 4 }, () => [random() * config.width, random() * config.height])
      ];
      field.grab(id);
      for (const [x, y] of targets) {
        const start = performance.now();
        field.dragTo(id, x, y);
        worstDrag = Math.max(worstDrag, performance.now() - start);
        dragCount++;
        separated(field);
      }
      field.release(id);
      const anchors = field.getBodies().map(({ anchorX, anchorY }) => [anchorX, anchorY]);
      for (let frame = 0; frame < 15; frame++) {
        field.step(1 / 60);
        separated(field);
      }
      assert.deepEqual(field.getBodies().map(({ anchorX, anchorY }) => [anchorX, anchorY]), anchors);
    }
  }
  console.log('Stress: ' + dragCount + ' four-bubble drags; worst synchronous drag ' + worstDrag.toFixed(2) + ' ms.');
});

test('a full drift cycle in crowded phone and landscape layouts never reshuffles neighbours', () => {
  for (const config of [
    { width: 288, height: 442, radius: 68, labelHeight: 35, points: [[71,100],[217,100],[71,310],[217,310]] },
    { width: 536, height: 218, radius: 62.5, labelHeight: 30, points: [[65.5,105],[200.5,105],[335.5,105],[470.5,105]] }
  ]) {
    const field = new BubbleField({ width: config.width, height: config.height, padding: 3, gap: 10 });
    field.setBodies(config.points.map(([x, y], index) => ({ id: 'drift-' + index, x, y,
      radius: config.radius, labelHeight: config.labelHeight })));
    const anchors = field.getBodies().map(({ anchorX, anchorY }) => [anchorX, anchorY]);
    let previous = field.getBodies();
    for (let frame = 0; frame < 3600; frame++) {
      field.step(1 / 60);
      separated(field);
      const current = field.getBodies();
      for (let index = 0; index < current.length; index++) {
        // Even if all four tiny per-frame movements accumulate through contact,
        // idle correction must remain below a single visible pixel.
        assert.ok(Math.hypot(current[index].x - previous[index].x, current[index].y - previous[index].y) < 0.3,
          'Idle collision correction must not cause a rearrangement');
      }
      previous = current;
    }
    assert.deepEqual(field.getBodies().map(({ anchorX, anchorY }) => [anchorX, anchorY]), anchors);
  }
});
