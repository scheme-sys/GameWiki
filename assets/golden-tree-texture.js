/* Extract the tree's warm, fine emission away from the UI thread.
   The caller transfers the already loaded artwork; this worker fetches nothing. */
'use strict';

self.onmessage = (event) => {
  let bitmap = event.data?.bitmap;
  let texture;
  try {
    const surface = new OffscreenCanvas(bitmap.width, bitmap.height);
    const paint = surface.getContext('2d', { willReadFrequently: true });
    if (!paint) throw new Error('Canvas 2D unavailable');
    paint.drawImage(bitmap, 0, 0);
    bitmap.close();
    bitmap = null;

    const w = surface.width, h = surface.height, stride = w + 1;
    const pixels = paint.getImageData(0, 0, w, h);
    const data = pixels.data;
    const radius = Math.max(2, Math.round(h / 300));
    // Keep only the cumulative rows needed by the widest sample window.
    // These remain full-image prefix sums, with exactly the original Float64
    // additions; recycling storage must not change the extracted pixels.
    const sumRows = Math.min(h + 1, radius * 4 + 2);
    const sums = new Float64Array(stride * sumRows);
    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
    const ease = (value) => value * value * (3 - 2 * value);
    const smooth = (value, low, high) => ease(clamp((value - low) / (high - low), 0, 1));
    // The two sample windows share their column bounds across every row.
    // Cache only O(width) integers; keep the original Float64 sums and order
    // of arithmetic so extraction produces exactly the same RGBA pixels.
    const nearLeft = new Uint32Array(w), nearRight = new Uint32Array(w);
    const farLeft = new Uint32Array(w), farRight = new Uint32Array(w);
    for (let x = 0; x < w; x++) {
      nearLeft[x] = Math.max(0, x - radius);
      nearRight[x] = Math.min(w, x + radius + 1);
      farLeft[x] = Math.max(0, x - radius * 2);
      farRight[x] = Math.min(w, x + radius * 2 + 1);
    }
    let nearTop, nearBottom, nearHeight, farTop, farBottom, farHeight;
    const mean = (x0, x1, top, bottom, height) =>
      (sums[bottom + x1] - sums[top + x1] -
        sums[bottom + x0] + sums[top + x0]) / ((x1 - x0) * height);

    let summedRows = 0;
    for (let row = 0; row < h; row++) {
      const y0 = Math.max(0, row - radius), y1 = Math.min(h, row + radius + 1);
      const farY0 = Math.max(0, row - radius * 2), farY1 = Math.min(h, row + radius * 2 + 1);
      while (summedRows < farY1) {
        const previous = (summedRows % sumRows) * stride;
        const next = ((summedRows + 1) % sumRows) * stride;
        let sum = 0;
        for (let x = 0; x < w; x++) {
          const offset = (summedRows * w + x) * 4;
          const r = data[offset], g = data[offset + 1], b = data[offset + 2];
          const luminance = r * .2126 + g * .7152 + b * .0722;
          sum += luminance;
          sums[next + x + 1] = sums[previous + x + 1] + sum;
        }
        summedRows++;
      }
      nearTop = (y0 % sumRows) * stride;
      nearBottom = (y1 % sumRows) * stride;
      nearHeight = y1 - y0;
      farTop = (farY0 % sumRows) * stride;
      farBottom = (farY1 % sumRows) * stride;
      farHeight = farY1 - farY0;
      for (let x = 0; x < w; x++) {
        const offset = (row * w + x) * 4;
        const r = data[offset], g = data[offset + 1], b = data[offset + 2];
        const luminance = r * .2126 + g * .7152 + b * .0722;
        // Color alone also selects the haze. Retain bright fine texture:
        // bark seams, small leaves and twigs; keep the original gold RGB.
        const warmth = smooth(r - b, 8, 38) * smooth(g - b, 3, 20);
        const detail = Math.max(luminance - mean(nearLeft[x], nearRight[x], nearTop, nearBottom, nearHeight),
          (luminance - mean(farLeft[x], farRight[x], farTop, farBottom, farHeight)) * .7);
        data[offset + 3] = Math.round(255 * warmth * smooth(luminance, 60, 150) * smooth(detail, 2.5, 22));
      }
    }

    paint.putImageData(pixels, 0, 0);
    texture = surface.transferToImageBitmap();
    self.postMessage({ texture }, [texture]);
    texture = null;
  } catch (_) {
    texture?.close();
    self.postMessage({ texture: null });
  } finally {
    bitmap?.close();
  }
};
