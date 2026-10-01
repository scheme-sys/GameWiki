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
    const data = pixels.data, sums = new Float64Array(stride * (h + 1));
    const radius = Math.max(2, Math.round(h / 300));
    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
    const ease = (value) => value * value * (3 - 2 * value);
    const smooth = (value, low, high) => ease(clamp((value - low) / (high - low), 0, 1));
    const mean = (x, y, r) => {
      const x0 = Math.max(0, x - r), x1 = Math.min(w, x + r + 1);
      const y0 = Math.max(0, y - r), y1 = Math.min(h, y + r + 1);
      return (sums[y1 * stride + x1] - sums[y0 * stride + x1] -
        sums[y1 * stride + x0] + sums[y0 * stride + x0]) / ((x1 - x0) * (y1 - y0));
    };

    for (let phase = 0; phase < 2; phase++) {
      for (let row = 0; row < h; row++) {
        let sum = 0;
        for (let x = 0; x < w; x++) {
          const offset = (row * w + x) * 4;
          const r = data[offset], g = data[offset + 1], b = data[offset + 2];
          const luminance = r * .2126 + g * .7152 + b * .0722;
          if (!phase) {
            sum += luminance;
            sums[(row + 1) * stride + x + 1] = sums[row * stride + x + 1] + sum;
          } else {
            // Color alone also selects the haze. Retain bright fine texture:
            // bark seams, small leaves and twigs; keep the original gold RGB.
            const warmth = smooth(r - b, 8, 38) * smooth(g - b, 3, 20);
            const detail = Math.max(luminance - mean(x, row, radius),
              (luminance - mean(x, row, radius * 2)) * .7);
            data[offset + 3] = Math.round(255 * warmth * smooth(luminance, 60, 150) * smooth(detail, 2.5, 22));
          }
        }
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
