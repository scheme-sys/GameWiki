/* Original Unity mesh preview. No generated body geometry, external runtime, or animation loop. */
(function (root, factory) {
  'use strict';
  const api = factory(root);
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.WestlandAvatar3D = api;
})(typeof globalThis !== 'undefined' ? globalThis : window, function (root) {
  'use strict';
  const IDENTITY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  const LABELS = { weapon: '武器', head: '头部', body: '上装', legs: '裤装', boots: '靴子', backpack: '背包', ring1: '戒指 1', ring2: '戒指 2', neck: '项链' };
  const vertexSource = 'attribute vec3 aPosition;attribute vec3 aNormal;attribute vec2 aUV;uniform mat4 uModel;uniform mat4 uViewProjection;uniform mat3 uNormal;varying vec3 vNormal;varying vec3 vPosition;varying vec2 vUV;void main(){vec4 p=uModel*vec4(aPosition,1.0);vPosition=p.xyz;vNormal=normalize(uNormal*aNormal);vUV=aUV;gl_Position=uViewProjection*p;}';
  const fragmentSource = 'precision mediump float;uniform sampler2D uTexture;uniform vec4 uColor;uniform float uAlphaCutoff;uniform float uAmbient;uniform vec3 uEye;varying vec3 vNormal;varying vec3 vPosition;varying vec2 vUV;void main(){vec4 color=texture2D(uTexture,vUV)*uColor;if(color.a<uAlphaCutoff)discard;vec3 n=normalize(vNormal);float light=max(dot(n,normalize(vec3(-0.45,0.8,0.65))),0.0);float fill=max(dot(n,normalize(vec3(0.6,0.3,-0.7))),0.0);float rim=pow(1.0-max(dot(n,normalize(uEye-vPosition)),0.0),3.0);gl_FragColor=vec4(color.rgb*(uAmbient+0.68*light+0.16*fill)+0.045*rim,color.a);}';
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const finite = (value, fallback) => Number.isFinite(Number(value)) ? Number(value) : fallback;
  const sub = (a, b) => a.map((v, i) => v - b[i]);
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const unit = v => { const length = Math.hypot(...v); return length > 1e-12 ? v.map(x => x / length) : [0, 1, 0]; };
  function multiply(a, b) {
    const out = new Float32Array(16);
    for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) for (let k = 0; k < 4; k++) out[c * 4 + r] += a[k * 4 + r] * b[c * 4 + k];
    return out;
  }
  function point(matrix, p, direction) {
    const w = direction ? 0 : 1;
    return [0, 1, 2].map(r => matrix[r] * p[0] + matrix[4 + r] * p[1] + matrix[8 + r] * p[2] + matrix[12 + r] * w);
  }
  function inverse(matrix) {
    const rows = Array.from({ length: 4 }, (_, r) => Array.from({ length: 8 }, (_, c) => c < 4 ? matrix[c * 4 + r] : +(c - 4 === r)));
    for (let c = 0; c < 4; c++) {
      let pivot = c;
      for (let r = c + 1; r < 4; r++) if (Math.abs(rows[r][c]) > Math.abs(rows[pivot][c])) pivot = r;
      if (Math.abs(rows[pivot][c]) < 1e-12) throw Error('网格变换不可逆');
      [rows[c], rows[pivot]] = [rows[pivot], rows[c]];
      const scale = rows[c][c]; rows[c] = rows[c].map(x => x / scale);
      for (let r = 0; r < 4; r++) if (r !== c) { const factor = rows[r][c]; rows[r] = rows[r].map((x, k) => x - factor * rows[c][k]); }
    }
    return Float32Array.from({ length: 16 }, (_, i) => rows[i % 4][4 + Math.floor(i / 4)]);
  }
  function lookAt(eye, center) {
    const z = unit(sub(eye, center)), x = unit(cross([0, 1, 0], z)), y = cross(z, x);
    return new Float32Array([x[0], y[0], z[0], 0, x[1], y[1], z[1], 0, x[2], y[2], z[2], 0, -dot(x, eye), -dot(y, eye), -dot(z, eye), 1]);
  }
  function perspective(aspect, near, far) {
    const f = 1 / Math.tan(Math.PI / 10), range = 1 / (near - far);
    return new Float32Array([f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * range, -1, 0, 0, 2 * far * near * range, 0]);
  }
  function fitCamera(halfSize, aspect, yaw, pitch) {
    const outward = [Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch)], right = unit(cross([0, 1, 0], outward)), up = cross(outward, right), tangent = Math.tan(Math.PI / 10);
    let distance = 0.01;
    for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) {
      const corner = [halfSize[0] * x, halfSize[1] * y, halfSize[2] * z], depth = dot(corner, outward);
      distance = Math.max(distance, depth + Math.abs(dot(corner, right)) / (tangent * aspect), depth + Math.abs(dot(corner, up)) / tangent);
    }
    return { outward, distance: distance * 1.12 };
  }
  function decode(value, kind) {
    const Type = kind === 'u16' ? Uint16Array : kind === 'u32' ? Uint32Array : Float32Array;
    if (Array.isArray(value) || ArrayBuffer.isView(value)) return new Type(value);
    if (typeof value !== 'string') throw Error('缺少网格数组');
    const binary = root.atob(value), width = Type.BYTES_PER_ELEMENT;
    if (!binary.length || binary.length % width) throw Error('网格数组长度无效');
    const bytes = Uint8Array.from(binary, c => c.charCodeAt(0)), view = new DataView(bytes.buffer), result = new Type(bytes.length / width);
    for (let i = 0; i < result.length; i++) result[i] = kind === 'u16' ? view.getUint16(i * width, true) : kind === 'u32' ? view.getUint32(i * width, true) : view.getFloat32(i * width, true);
    return result;
  }
  function generatedNormals(positions, indices) {
    const normals = new Float32Array(positions.length);
    for (let i = 0; i < indices.length; i += 3) {
      const a = indices[i] * 3, b = indices[i + 1] * 3, c = indices[i + 2] * 3;
      const n = cross(sub(positions.slice(b, b + 3), positions.slice(a, a + 3)), sub(positions.slice(c, c + 3), positions.slice(a, a + 3)));
      for (const offset of [a, b, c]) for (let k = 0; k < 3; k++) normals[offset + k] += n[k];
    }
    for (let i = 0; i < normals.length; i += 3) normals.set(unit(Array.from(normals.slice(i, i + 3))), i);
    return normals;
  }
  function prepareMesh(source) {
    if (!source || typeof source !== 'object') throw Error('原始网格不存在');
    const positions = decode(source.positions, 'f32');
    if (positions.length < 9 || positions.length % 3 || !positions.every(Number.isFinite)) throw Error('网格顶点无效');
    const count = positions.length / 3, indices = source.indices ? decode(source.indices, source.indexType === 'u32' ? 'u32' : 'u16') : Uint32Array.from({ length: count }, (_, i) => i);
    if (!indices.length || indices.length % 3 || !indices.every(index => index < count)) throw Error('网格三角面索引无效');
    const normals = source.normals ? decode(source.normals, 'f32') : generatedNormals(positions, indices), uv = source.uv ? decode(source.uv, 'f32') : new Float32Array(count * 2);
    if (normals.length !== positions.length || uv.length !== count * 2 || !normals.every(Number.isFinite) || !uv.every(Number.isFinite)) throw Error('网格法线或纹理坐标无效');
    const transform = source.transform == null ? new Float32Array(IDENTITY) : new Float32Array(source.transform);
    if (transform.length !== 16 || !transform.every(Number.isFinite)) throw Error('网格变换格式无效');
    const inv = inverse(transform), normal = Float32Array.from([inv[0], inv[4], inv[8], inv[1], inv[5], inv[9], inv[2], inv[6], inv[10]]);
    const bounds = { min: [Infinity, Infinity, Infinity], max: [-Infinity, -Infinity, -Infinity] };
    for (let i = 0; i < positions.length; i += 3) for (let k = 0; k < 3; k++) { bounds.min[k] = Math.min(bounds.min[k], positions[i + k]); bounds.max[k] = Math.max(bounds.max[k], positions[i + k]); }
    return { positions, normals, uv, indices, transform, inverse: inv, normal, bounds, material: source.material };
  }
  function selectParts(data, config) {
    const gender = config.gender || 'male', sourceBase = data.base?.[gender], base = Array.isArray(sourceBase) ? sourceBase : sourceBase?.parts || [];
    const baseSlots = data.baseSlots?.[gender] || data.baseSlots || {}, parts = new Map(), missing = [], partial = [];
    for (const id of base) if (data.meshes?.[id]) parts.set(id, { id, slot: Object.keys(LABELS).find(slot => baseSlots[slot]?.includes(id)) || '' });
    for (const [slot, selection] of Object.entries(config.slots || {})) {
      if (!LABELS[slot] || !selection?.id) continue;
      const item = data.items?.[selection.id], itemParts = item?.partsByGender ? item.partsByGender[gender] : item?.gender && item.gender !== gender ? null : item?.parts;
      if (item?.nonVisual === true) continue;
      if (!item || !Array.isArray(itemParts) || !itemParts.length || itemParts.some(id => !data.meshes?.[id])) { missing.push({ slot, id: selection.id, name: item?.name || data.itemNames?.[selection.id] || selection.name || '未覆盖物品' }); continue; }
      if (item.partial === true) partial.push({ slot, id: selection.id, name: item.name || data.itemNames?.[selection.id] || selection.name || '未命名装备' });
      // Registry ReplacedBodyparts are extra hides, not a replacement for this slot.
      for (const id of [...(item.keepBase === true ? [] : baseSlots[slot] || []), ...(item.hidesByGender?.[gender] || item.hides || [])]) parts.delete(id);
      for (const id of itemParts) parts.set(id, { id, slot });
    }
    return { parts: [...parts.values()], missing, partial };
  }
  function rayBox(origin, direction, bounds) {
    let near = 0, far = Infinity;
    for (let k = 0; k < 3; k++) {
      if (Math.abs(direction[k]) < 1e-12) { if (origin[k] < bounds.min[k] || origin[k] > bounds.max[k]) return false; continue; }
      let a = (bounds.min[k] - origin[k]) / direction[k], b = (bounds.max[k] - origin[k]) / direction[k];
      if (a > b) [a, b] = [b, a]; near = Math.max(near, a); far = Math.min(far, b); if (near > far) return false;
    }
    return true;
  }
  function rayMesh(mesh, origin, direction) {
    const localOrigin = point(mesh.inverse, origin), localDirection = point(mesh.inverse, direction, true);
    if (!rayBox(localOrigin, localDirection, mesh.bounds)) return Infinity;
    let closest = Infinity;
    for (let i = 0; i < mesh.indices.length; i += 3) {
      const vertices = [0, 1, 2].map(k => { const offset = mesh.indices[i + k] * 3; return Array.from(mesh.positions.slice(offset, offset + 3)); });
      const edge1 = sub(vertices[1], vertices[0]), edge2 = sub(vertices[2], vertices[0]), p = cross(localDirection, edge2), determinant = dot(edge1, p);
      if (Math.abs(determinant) < 1e-10) continue;
      const t = sub(localOrigin, vertices[0]), u = dot(t, p) / determinant;
      if (u < 0 || u > 1) continue;
      const q = cross(t, edge1), v = dot(localDirection, q) / determinant;
      if (v < 0 || u + v > 1) continue;
      const distance = dot(edge2, q) / determinant;
      if (distance > 0) closest = Math.min(closest, distance);
    }
    return closest;
  }
  function create(options) {
    options = options || {};
    const canvas = options.canvas, data = options.data || {}, cache = new Map(), textures = new Map(), listeners = [];
    let gl = null, program = null, locations = null, white = null, uintIndices = false, disposed = false, lost = false, observer = null;
    let parts = [], missing = [], partial = [], config = { gender: 'male', slots: {} }, theme = 'dark', yaw = 0, pitch = 0.06, zoomFactor = 1, drag = null;
    let center = [0, 1, 0], halfSize = [0.4, 1, 0.3], radius = 1, eye = [0, 1, 4], viewProjection = new Float32Array(IDENTITY), inverseVP = new Float32Array(IDENTITY), lastStatus = null;
    function notify(state, message, detail = {}) {
      lastStatus = { ...detail, state, message, missing: missing.map(item => ({ ...item })), partial: partial.map(item => ({ ...item })) };
      if (options.status) { options.status.textContent = message; if (options.status.dataset) options.status.dataset.state = state; }
      if (typeof options.onStatus === 'function') options.onStatus(lastStatus);
    }
    function readyStatus() {
      const activeIds = new Set(parts.map(part => data.materials?.[data.meshes?.[part.id]?.material]?.texture).filter(Boolean)), activeTextures = [...activeIds].map(id => textures.get(id)).filter(Boolean);
      const pending = activeTextures.some(texture => texture.pending), failed = activeTextures.filter(texture => texture.failed).length;
      const detail = missing.length ? '；'+missing.length+'处装备暂缺3D外观，其他部件仍可预览' : '';
      const partialDetail = partial.length ? '；主体网格已显示，但附加组件尚未完整呈现：' + partial.slice(0, 4).map(item => (LABELS[item.slot] || item.slot) + '（' + item.name + '）').join('、') + (partial.length > 4 ? '，另 ' + (partial.length - 4) + ' 项' : '') : '';
      notify(pending ? 'loading' : 'ready', '原始 3D 网格 · ' + parts.length + ' 个部件' + (pending ? '；纹理加载中' : '') + (failed ? '；' + failed + ' 张纹理不可用，显示材质底色' : '') + detail + partialDetail, { textureFailures: failed });
    }
    function listen(type, handler, settings) { canvas.addEventListener(type, handler, settings); listeners.push([type, handler, settings]); }
    function shader(kind, source) {
      const value = gl.createShader(kind); gl.shaderSource(value, source); gl.compileShader(value);
      if (!gl.getShaderParameter(value, gl.COMPILE_STATUS)) { const message = gl.getShaderInfoLog(value); gl.deleteShader(value); throw Error('当前浏览器暂时无法显示3D外观，请尝试其他浏览器'); }
      return value;
    }
    function initialize() {
      gl = canvas && (canvas.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: false }) || canvas.getContext('experimental-webgl', { alpha: true, antialias: true }));
      if (!gl) throw Error('此环境不支持 WebGL，保留二维装备预览');
      const vertex = shader(gl.VERTEX_SHADER, vertexSource), fragment = shader(gl.FRAGMENT_SHADER, fragmentSource);
      program = gl.createProgram(); gl.attachShader(program, vertex); gl.attachShader(program, fragment); gl.linkProgram(program); gl.deleteShader(vertex); gl.deleteShader(fragment);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw Error('3D 着色器链接失败');
      locations = { position: gl.getAttribLocation(program, 'aPosition'), normal: gl.getAttribLocation(program, 'aNormal'), uv: gl.getAttribLocation(program, 'aUV') };
      for (const key of ['Model', 'ViewProjection', 'Normal', 'Texture', 'Color', 'AlphaCutoff', 'Ambient', 'Eye']) locations[key] = gl.getUniformLocation(program, 'u' + key);
      uintIndices = !!gl.getExtension('OES_element_index_uint');
      white = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, white); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255, 255]));
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.enable(gl.DEPTH_TEST); gl.disable(gl.CULL_FACE); gl.disable(gl.BLEND); gl.clearColor(0, 0, 0, 0);
    }
    function buffer(target, values) { const result = gl.createBuffer(); gl.bindBuffer(target, result); gl.bufferData(target, values, gl.STATIC_DRAW); return result; }
    function meshFor(id) {
      if (cache.has(id)) return cache.get(id);
      const mesh = prepareMesh(data.meshes[id]); let positions = mesh.positions, normals = mesh.normals, uv = mesh.uv, indices = mesh.indices;
      if (indices instanceof Uint32Array && !uintIndices) {
        let maximum = 0; for (const value of indices) maximum = Math.max(maximum, value);
        if (maximum <= 65535) indices = new Uint16Array(indices);
        else { positions = new Float32Array(indices.length * 3); normals = new Float32Array(indices.length * 3); uv = new Float32Array(indices.length * 2); for (let i = 0; i < indices.length; i++) { positions.set(mesh.positions.subarray(indices[i] * 3, indices[i] * 3 + 3), i * 3); normals.set(mesh.normals.subarray(indices[i] * 3, indices[i] * 3 + 3), i * 3); uv.set(mesh.uv.subarray(indices[i] * 2, indices[i] * 2 + 2), i * 2); } indices = null; }
      }
      mesh.buffers = { position: buffer(gl.ARRAY_BUFFER, positions), normal: buffer(gl.ARRAY_BUFFER, normals), uv: buffer(gl.ARRAY_BUFFER, uv), index: indices ? buffer(gl.ELEMENT_ARRAY_BUFFER, indices) : null };
      mesh.indexType = indices instanceof Uint32Array ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT; mesh.drawCount = indices ? indices.length : positions.length / 3;
      cache.set(id, mesh); return mesh;
    }
    function textureFor(id) {
      if (!id) return white;
      if (!data.textures?.[id]) throw Error('原始纹理数据缺失');
      if (textures.has(id)) return textures.get(id).texture;
      const source = data.textures[id], uri = typeof source === 'string' ? source : source.dataURI || source.uri;
      if (typeof uri !== 'string' || !/^(?:data:image\/(?:png|jpe?g|webp);base64,|wiki-assets\/images\/[a-f0-9]+\.(?:png|jpe?g|webp)$)/i.test(uri)) throw Error('纹理路径无效');
      const entry = { texture: gl.createTexture(), pending: true, failed: false, image: null }; textures.set(id, entry);
      gl.bindTexture(gl.TEXTURE_2D, entry.texture); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255, 255]));
      for (const parameter of [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T]) gl.texParameteri(gl.TEXTURE_2D, parameter, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      if (typeof root.Image !== 'function') { entry.pending = false; entry.failed = true; return entry.texture; }
      const image = entry.image = new root.Image();
      image.onload = function () {
        if (disposed || lost || textures.get(id) !== entry) return;
        entry.pending = false;
        try { gl.bindTexture(gl.TEXTURE_2D, entry.texture); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, (data.textureSources?.[id]?.flipY ?? source.flipY) !== false); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image); } catch (_) { entry.failed = true; }
        if (draw() !== false) readyStatus();
      };
      image.onerror = function () { if (disposed || lost || textures.get(id) !== entry) return; entry.pending = false; entry.failed = true; if (draw() !== false) readyStatus(); };
      if (root.WestlandTextureURL) { root.WestlandTextureURL(uri).then(value => { if (!disposed && !lost && textures.get(id) === entry) image.src = value; }).catch(() => image.onerror()); } else { image.src = uri; } return entry.texture;
    }
    function updateBounds() {
      const bounds = { min: [Infinity, Infinity, Infinity], max: [-Infinity, -Infinity, -Infinity] };
      for (const part of parts) { const mesh = meshFor(part.id); for (let i = 0; i < mesh.positions.length; i += 3) { const p = point(mesh.transform, mesh.positions.subarray(i, i + 3)); for (let k = 0; k < 3; k++) { bounds.min[k] = Math.min(bounds.min[k], p[k]); bounds.max[k] = Math.max(bounds.max[k], p[k]); } } }
      center = bounds.min.map((v, k) => (v + bounds.max[k]) / 2); halfSize = sub(bounds.max, bounds.min).map(value => value / 2); radius = Math.max(0.01, Math.hypot(...halfSize));
    }
    function draw() {
      if (disposed || lost || !gl || !program || !parts.length) return;
      try {
        const aspect = Math.max(0.01, canvas.width / Math.max(1, canvas.height)), fit = fitCamera(halfSize, aspect, yaw, pitch), distance = fit.distance * zoomFactor;
        eye = center.map((value, k) => value + fit.outward[k] * distance);
        viewProjection = multiply(perspective(aspect, Math.max(0.001, radius * 0.01), Math.max(radius * 100, distance + radius * 4)), lookAt(eye, center)); inverseVP = inverse(viewProjection);
        gl.viewport(0, 0, canvas.width, canvas.height); gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); gl.useProgram(program);
        gl.uniformMatrix4fv(locations.ViewProjection, false, viewProjection); gl.uniform3fv(locations.Eye, eye); gl.uniform1f(locations.Ambient, theme === 'light' ? 0.45 : 0.34); gl.uniform1i(locations.Texture, 0); gl.activeTexture(gl.TEXTURE0);
        for (const part of parts) {
          const mesh = meshFor(part.id), material = data.materials?.[mesh.material] || {}, color = Array.isArray(material.color) ? material.color : [1, 1, 1, 1];
          for (const [attribute, size] of [['position', 3], ['normal', 3], ['uv', 2]]) { gl.bindBuffer(gl.ARRAY_BUFFER, mesh.buffers[attribute]); gl.enableVertexAttribArray(locations[attribute]); gl.vertexAttribPointer(locations[attribute], size, gl.FLOAT, false, 0, 0); }
          gl.uniformMatrix4fv(locations.Model, false, mesh.transform); gl.uniformMatrix3fv(locations.Normal, false, mesh.normal); gl.uniform4fv(locations.Color, [finite(color[0], 1), finite(color[1], 1), finite(color[2], 1), finite(color[3], 1)]); gl.uniform1f(locations.AlphaCutoff, clamp(finite(material.alphaCutoff, 0.1), 0, 1));
          gl.bindTexture(gl.TEXTURE_2D, textureFor(material.texture));
          if (mesh.buffers.index) { gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh.buffers.index); gl.drawElements(gl.TRIANGLES, mesh.drawCount, mesh.indexType, 0); } else gl.drawArrays(gl.TRIANGLES, 0, mesh.drawCount);
        }
        return true;
      } catch (error) { notify('error', '3D 预览不可用：' + error.message); return false; }
    }
    function resize() {
      if (disposed || !canvas) return;
      const rect = canvas.getBoundingClientRect(), ratio = clamp(finite(root.devicePixelRatio, 1), 1, 2), width = clamp(Math.round((rect.width || canvas.clientWidth || 400) * ratio), 1, 4096), height = clamp(Math.round((rect.height || canvas.clientHeight || 500) * ratio), 1, 4096);
      if (canvas.width !== width) canvas.width = width; if (canvas.height !== height) canvas.height = height; return draw();
    }
    function setLoadout(next) {
      if (disposed) return;
      config = { gender: next?.gender || 'male', slots: Object.fromEntries(Object.entries(next?.slots || {}).map(([slot, item]) => [slot, { id: item?.id, name: item?.name }])) };
      if (!gl || lost || !program) return;
      if (!data.base?.[config.gender]) { parts = []; missing = []; partial = []; gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); notify('fallback', '此性别没有已确认的原始基础网格，保留二维预览'); return; }
      const selected = selectParts(data, config); missing = selected.missing; partial = selected.partial; parts = selected.parts;
      if (!parts.length) { gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); notify('fallback', '此组合没有可用的原始 3D 网格，保留二维预览'); return; }
      try { updateBounds(); if (resize() !== false) readyStatus(); } catch (error) { parts = []; notify('error', '原始网格读取失败：' + error.message); }
    }
    function zoom(delta) { if (disposed) return; zoomFactor = clamp(zoomFactor * Math.exp(-clamp(finite(delta, 0), -2, 2)), 0.35, 4); draw(); }
    function view(side) { if (disposed) return; yaw = side === 'back' ? Math.PI : 0; pitch = 0.06; draw(); }
    function resetView() { if (disposed) return; yaw = 0; pitch = 0.06; zoomFactor = 1; draw(); }
    function pick(event) {
      if (!options.onSelectSlot || !parts.length) return;
      const rect = canvas.getBoundingClientRect(), x = (event.clientX - rect.left) / Math.max(1, rect.width) * 2 - 1, y = 1 - (event.clientY - rect.top) / Math.max(1, rect.height) * 2;
      function unproject(z) { const v = [x, y, z, 1], result = [0, 0, 0, 0]; for (let r = 0; r < 4; r++) for (let k = 0; k < 4; k++) result[r] += inverseVP[k * 4 + r] * v[k]; return result.slice(0, 3).map(value => value / result[3]); }
      const origin = unproject(-1), direction = unit(sub(unproject(1), origin)); let distance = Infinity, slot = '';
      for (const part of parts) if (part.slot) { const hit = rayMesh(meshFor(part.id), origin, direction); if (hit < distance) { distance = hit; slot = part.slot; } }
      if (slot) options.onSelectSlot(slot);
    }
    function releaseGPU() {
      for (const entry of textures.values()) if (entry.image) { entry.image.onload = null; entry.image.onerror = null; }
      if (gl && !lost) { for (const mesh of cache.values()) for (const value of Object.values(mesh.buffers)) if (value) gl.deleteBuffer(value); for (const entry of textures.values()) gl.deleteTexture(entry.texture); if (white) gl.deleteTexture(white); if (program) gl.deleteProgram(program); }
      cache.clear(); textures.clear(); program = null; white = null;
    }
    function dispose() { if (disposed) return; disposed = true; if (observer) observer.disconnect(); for (const [type, handler, settings] of listeners) canvas.removeEventListener(type, handler, settings); releaseGPU(); parts = []; drag = null; }
    const api = { get supported() { return !!gl && !!program && !lost && !disposed; }, get status() { return lastStatus; }, setLoadout, setTheme(value) { theme = value === 'light' ? 'light' : 'dark'; draw(); }, zoom, view, resetView, resize, dispose };
    try { initialize(); } catch (error) { notify('fallback', error.message); releaseGPU(); return api; }
    listen('webglcontextlost', event => { event.preventDefault(); lost = true; drag = null; notify('fallback', '3D 图形上下文已暂停，保留二维预览'); });
    listen('webglcontextrestored', () => { if (disposed) return; releaseGPU(); lost = false; try { initialize(); setLoadout(config); } catch (error) { releaseGPU(); notify('fallback', '3D 恢复失败：' + error.message); } });
    listen('pointerdown', event => { if (event.button !== 0 || lost) return; drag = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, distance: 0 }; if (canvas.setPointerCapture) canvas.setPointerCapture(event.pointerId); });
    listen('pointermove', event => { if (!drag || event.pointerId !== drag.pointerId) return; const dx = event.clientX - drag.x, dy = event.clientY - drag.y; drag.distance += Math.abs(dx) + Math.abs(dy); drag.x = event.clientX; drag.y = event.clientY; yaw -= dx * 0.012; pitch = clamp(pitch + dy * 0.01, -1.35, 1.35); draw(); });
    listen('pointerup', event => { if (!drag || event.pointerId !== drag.pointerId) return; const click = drag.distance < 5; drag = null; if (canvas.releasePointerCapture) canvas.releasePointerCapture(event.pointerId); if (click) pick(event); });
    listen('pointercancel', () => { drag = null; });
    listen('lostpointercapture', () => { drag = null; });
    listen('wheel', event => { event.preventDefault(); zoom(-finite(event.deltaY, 0) * (event.deltaMode === 1 ? 0.03 : event.deltaMode === 2 ? 1 : 0.0015)); }, { passive: false });
    if (typeof root.ResizeObserver === 'function') { observer = new root.ResizeObserver(resize); observer.observe(canvas); }
    setLoadout(config); return api;
  }
  return { create, testing: Object.freeze({ decode, prepareMesh, selectParts, multiply, inverse, point, rayMesh, fitCamera }) };
});
