'use strict';
const assert = require('node:assert/strict');
const test = require('node:test');
const BubbleField = require('../assets/bubble-physics.js');

const layouts = [
  { name: 'phone', width: 296, height: 422, radii: [64, 60, 66, 68] },
  { name: 'landscape', width: 544, height: 232, radii: [50, 49, 51, 52] },
  { name: 'desktop', width: 1392, height: 776, radii: [88, 84, 92, 96] }
];
const gameSizes = [164, 152, 160, 156, 156, 156];
const positions = {
  desktop: [[.20,.27],[.50,.23],[.80,.29],[.20,.72],[.50,.76],[.80,.70]],
  tablet: [[.20,.26],[.50,.22],[.80,.28],[.20,.72],[.50,.76],[.80,.70]],
  mobile: [[.25,.18],[.75,.20],[.25,.50],[.75,.52],[.25,.82],[.75,.84]],
  landscape: [[.10,.32],[.26,.68],[.42,.32],[.58,.68],[.74,.32],[.90,.68]]
};
function sixGameLayout(viewportWidth, viewportHeight) {
  const kind = viewportHeight <= 500 && viewportWidth > viewportHeight ? 'landscape'
    : viewportWidth <= 600 ? 'mobile' : viewportWidth <= 900 ? 'tablet' : 'desktop';
  const width = viewportWidth - (viewportWidth <= 900 ? 24 : 48);
  const height = viewportHeight - (kind === 'landscape' ? 88 : viewportWidth <= 900 ? 142 : 124);
  const radii = gameSizes.map(size => {
    const diameter = kind === 'landscape' ? Math.min(94, height * .38, (width - 72) / gameSizes.length)
      : kind === 'mobile' ? Math.min(112, width * .32) * size / 164 : size * (kind === 'tablet' ? .84 : 1);
    return diameter / 2 + 8;
  });
  return {name: `six-${viewportWidth}x${viewportHeight}`, width, height, radii,
    points: positions[kind].map(([x,y]) => [x*width,y*height])};
}
const sixLayouts = [[320,568],[360,640],[390,844],[600,900],[768,1024],[1024,768],[1440,960],[568,320],[844,390],[480,320]].map(([width,height]) => sixGameLayout(width,height));
layouts.push(...sixLayouts);

function valid(field, useAnchors = false, allowOverlap = false) {
  const bodies = field.getBodies().map(body => useAnchors ? {...body, x: body.anchorX, y: body.anchorY} : body);
  for (let i = 0; i < bodies.length; i++) {
    const a = bodies[i], inset = a.radius + field.padding;
    for (const value of [a.x, a.y, a.anchorX, a.anchorY]) assert.ok(Number.isFinite(value));
    assert.ok(a.x >= inset - 0.001 && a.x <= field.width - inset + 0.001, `${a.id} exceeds horizontal bounds`);
    assert.ok(a.y >= inset - 0.001 && a.y <= field.height - inset + 0.001, `${a.id} exceeds vertical bounds`);
    for (let j = i + 1; !allowOverlap && j < bodies.length; j++) {
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

test('four and six coincident circles settle at phone, tablet, landscape and desktop sizes', () => {
  for (const layout of layouts) {
    const field = fieldFor(layout);
    valid(field);
    assert.equal(field.getBodies().length, layout.radii.length);
  }
});

test('six-game suggested layouts fit without moving any intended starting centre', () => {
  for (const layout of sixLayouts) {
    const field = fieldFor(layout,layout.points);
    valid(field);
    for (const [index,body] of field.getBodies().entries()) {
      assert.ok(Math.hypot(body.x-layout.points[index][0],body.y-layout.points[index][1])<0.6,
        `${layout.name} should not rearrange its designed starting layout`);
    }
  }
});

test('six saved game anchors survive portrait to landscape resizing and another release', () => {
  const field=fieldFor(sixLayouts[0],sixLayouts[0].points);
  const sixth=field.getBodies()[5], first=field.getBodies()[0];
  field.dragTo(sixth.id,first.x,first.y);
  assert.ok(Math.hypot(field.getBodies()[5].x-first.x,field.getBodies()[5].y-first.y)<1);
  field.release();valid(field,true);
  for(let i=0;i<70;i++)field.step(1/60);
  valid(field);
  const portrait=field.getBodies(), landscape=sixGameLayout(568,320);
  // Portal resizing recomputes icon radii and restores the active layout's anchors.
  field.resize(landscape.width,landscape.height);
  field.setBodies(landscape.radii.map((radius,index)=>({id:`game-${index}`,radius,x:landscape.points[index][0],y:landscape.points[index][1]})));
  valid(field);
  field.resize(296,426).setBodies(portrait);valid(field);
  field.dragTo('game-5',field.getBodies()[1].x,field.getBodies()[1].y).release();
  valid(field,true);field.stop();valid(field);
  const saved=anchors(field);
  field.resize(296,426);
  assert.deepEqual(anchors(field),saved);
});

test('drag follows the pointer through neighbours; release separates smoothly to saved targets', () => {
  const config = { width: 544, height: 232, radii: [50, 50, 50, 50] };
  const field = fieldFor(config, [[56,116],[200,116],[344,116],[488,116]]);
  field.drift = 0;
  const original = field.getBodies();
  field.grab('game-0');
  field.dragTo('game-0', 200, 116);
  assert.equal(field.getBodies()[0].x, 200);
  assert.equal(field.getBodies()[1].x, 200, 'Dragged bubbles may completely cover neighbours');
  field.dragTo('game-0', 10000, 116);
  assert.equal(field.getBodies()[0].x, 492, 'Even fast moves reach the pointer boundary directly');
  assert.deepEqual(field.getBodies().slice(1), original.slice(1), 'Dragging must not push neighbours');
  const held = field.getBodies();
  for (let frame = 0; frame < 120; frame++) field.step(1 / 60);
  assert.deepEqual(field.getBodies(), held, 'Held circles and their neighbours stay steady');
  field.release();
  assert.ok(field.isSettling());
  for (const [index,body] of field.getBodies().entries()) {
    assert.equal(body.x, held[index].x, 'Pointer release must not teleport a circle');
    assert.equal(body.y, held[index].y);
  }
  valid(field, true); // The portal may persist legal anchors immediately.
  const saved = anchors(field), distances = field.getBodies().map(body => Math.hypot(body.x-body.anchorX,body.y-body.anchorY));
  let previous = field.getBodies(), firstMovement = 0, peakMovement = 0;
  for (let frame = 0; frame < 67; frame++) {
    field.step(1 / 60); valid(field, false, true);
    const current = field.getBodies();
    for (let index = 0; index < current.length; index++) {
      const delta = Math.hypot(current[index].x-previous[index].x,current[index].y-previous[index].y);
      assert.ok(delta <= distances[index] * 0.062 + 0.01, 'The damped response must not jump');
      if (!frame) firstMovement = Math.max(firstMovement, delta);
      peakMovement = Math.max(peakMovement, delta);
    }
    previous = current;
  }
  assert.ok(firstMovement > 0 && peakMovement > firstMovement * 2, 'Release accelerates gently from rest');
  assert.equal(field.isSettling(), false);
  valid(field);
  assert.deepEqual(anchors(field), saved, 'Animation never changes the saved destinations');
});

test('release trajectory agrees at 15, 30, 60 and 120 fps without overshooting boundaries', () => {
  const samples = [15,30,60,120].map(fps => {
    const field = fieldFor(layouts[0]);
    field.dragTo('game-0', 270, 360).release();
    valid(field,true);
    for(let frame=0;frame<fps*.4;frame++)field.step(1/fps);
    valid(field,false,true);
    return field.getBodies();
  });
  for (const sample of samples) for (let index=0;index<sample.length;index++) {
    assert.ok(Math.hypot(sample[index].x-samples[0][index].x,sample[index].y-samples[0][index].y)<0.001);
  }
});

test('settling can be interrupted by a new drag; stop, resize and reduced motion finish safely', () => {
  let completed=0;
  const field=new BubbleField({width:544,height:232,padding:2,gap:12,onSettle(){completed++;}});
  field.setBodies([0,1,2,3].map(id=>({id,radius:50,x:56+id*144,y:116})));
  field.start().dragTo(0,200,116).release();field.step(.1);
  const midway=field.getBodies();field.grab(1);
  for(const [index,body] of field.getBodies().entries())assert.equal(body.x,midway[index].x);
  field.dragTo(1,344,116).release();assert.ok(field.isSettling());
  const saved=anchors(field);field.stop();
  assert.equal(field.isSettling(),false);valid(field);valid(field,true);
  assert.deepEqual(anchors(field),saved);assert.equal(completed,1);
  field.start().dragTo(0,field.getBodies()[1].x,field.getBodies()[1].y).release();
  assert.ok(field.isSettling());field.setReducedMotion(true);
  assert.equal(field.isSettling(),false);valid(field);assert.equal(completed,2);
  field.setReducedMotion(false).dragTo(0,300,180).release().resize(296,422);
  assert.equal(field.isSettling(),false);valid(field);
});

test('cancelling a drag restores the pre-gesture coordinates and saved anchors', () => {
  const field=fieldFor(layouts[0]);
  field.step(.1);
  const before=field.getBodies();
  field.grab('game-0');
  field.dragTo('game-0',before[1].x,before[1].y);
  assert.ok(Math.hypot(field.getBodies()[0].x-before[1].x,field.getBodies()[0].y-before[1].y)<10);
  // The portal handles Escape/pointercancel by restoring this same snapshot.
  field.setBodies(before);
  assert.deepEqual(field.getBodies(),before);
  assert.equal(field.isSettling(),false);
  valid(field);
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

test('seeded corner and direction changes allow overlaps but resolve all release targets', () => {
  let seed = 0x1c29ab;
  const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  let operations = 0, worst = 0, elapsed = 0;
  for (const config of layouts) {
    for (let trial = 0; trial < 100; trial++) {
      const field = fieldFor(config, Array.from({ length: config.radii.length }, () => [random() * config.width, random() * config.height]));
      valid(field);
      const id = 'game-' + Math.floor(random() * config.radii.length);
      field.grab(id);
      const targets = [[-100,-100],[config.width+100,-100],[config.width+100,config.height+100],[-100,config.height+100],
        ...Array.from({ length: 8 }, () => [random() * config.width, random() * config.height])];
      for (const [x,y] of targets) {
        const start = performance.now(); field.dragTo(id,x,y); const duration = performance.now() - start;
        worst = Math.max(worst,duration); elapsed += duration; operations++;
        valid(field, false, true);
      }
      field.release();
      valid(field,true);
      const saved = anchors(field);
      for (let frame = 0; frame < 36; frame++) { field.step(frame % 2 ? 1/15 : 1/120); valid(field,false,true); }
      assert.equal(field.isSettling(),false);valid(field);
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