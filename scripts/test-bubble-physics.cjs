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
