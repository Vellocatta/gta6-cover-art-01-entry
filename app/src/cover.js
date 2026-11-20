// LAST LIGHT Cover Studio — the cover renderer.
// Everything here is original art drawn on canvas: diagonal multi-panel
// compositions, procedural sun / palms / skyline / grain, and lettering.
// No Rockstar artwork, logo, wordmark or font is used anywhere.

export const LAYOUTS = [
  { id: 'hero-diagonal', name: 'Hero Diagonal', panels: [
    [[0, 0], [0.66, 0], [0.52, 1], [0, 1]],
    [[0.66, 0], [1, 0], [1, 0.5], [0.59, 0.5]],
    [[0.59, 0.5], [1, 0.5], [1, 1], [0.52, 1]],
  ] },
  { id: 'triple-split', name: 'Triple Split', panels: [
    [[0, 0], [0.38, 0], [0.30, 1], [0, 1]],
    [[0.38, 0], [0.70, 0], [0.62, 1], [0.30, 1]],
    [[0.70, 0], [1, 0], [1, 1], [0.62, 1]],
  ] },
  { id: 'quad-grid', name: 'Quad Grid', panels: [
    [[0, 0], [0.52, 0], [0.48, 0.5], [0, 0.5]],
    [[0.52, 0], [1, 0], [1, 0.5], [0.48, 0.5]],
    [[0, 0.5], [0.48, 0.5], [0.52, 1], [0, 1]],
    [[0.48, 0.5], [1, 0.5], [1, 1], [0.52, 1]],
  ] },
  { id: 'hero-strip', name: 'Hero + Strip', panels: [
    [[0, 0], [1, 0], [1, 0.64], [0, 0.64]],
    [[0, 0.64], [0.5, 0.64], [0.5, 1], [0, 1]],
    [[0.5, 0.64], [1, 0.64], [1, 1], [0.5, 1]],
  ] },
  { id: 'key-slash', name: 'Key Art Slash', panels: [
    [[0, 0], [1, 0], [1, 1], [0, 1]],
    [[0.58, 0.56], [1, 0.48], [1, 1], [0.50, 1]],
  ] },
  { id: 'comic-stack', name: 'Comic Stack', panels: [
    [[0, 0], [1, 0], [1, 0.36], [0, 0.30]],
    [[0, 0.30], [1, 0.36], [1, 0.68], [0, 0.62]],
    [[0, 0.62], [1, 0.68], [1, 1], [0, 1]],
  ] },
  { id: 'duo', name: 'Duo', panels: [
    [[0, 0], [0.56, 0], [0.44, 1], [0, 1]],
    [[0.56, 0], [1, 0], [1, 1], [0.44, 1]],
  ] },
  { id: 'full-bleed', name: 'Full Bleed', panels: [
    [[0, 0], [1, 0], [1, 1], [0, 1]],
  ] },
];

export const GRADES = [
  { id: 'sunset', name: 'Vice Sunset', filter: 'saturate(1.35) contrast(1.08) brightness(1.02)',
    overlay: [[0, 'rgba(255,150,80,0)'], [0.55, 'rgba(255,110,60,0.10)'], [1, 'rgba(205,30,110,0.34)']] },
  { id: 'neon', name: 'Neon Nights', filter: 'saturate(1.55) contrast(1.16) brightness(0.94)',
    overlay: [[0, 'rgba(0,229,255,0.16)'], [0.5, 'rgba(120,40,160,0.10)'], [1, 'rgba(255,20,140,0.30)']] },
  { id: 'ocean', name: 'Ocean Drive', filter: 'saturate(1.22) contrast(1.05) brightness(1.03)',
    overlay: [[0, 'rgba(0,190,210,0.14)'], [0.6, 'rgba(255,190,120,0.08)'], [1, 'rgba(255,120,80,0.22)']] },
  { id: 'noir', name: 'Palm Noir', filter: 'grayscale(0.85) contrast(1.28) brightness(0.92)',
    overlay: [[0, 'rgba(20,10,30,0.10)'], [1, 'rgba(255,40,120,0.16)']] },
  { id: 'haze', name: 'Heat Haze', filter: 'saturate(1.12) brightness(1.09) contrast(0.96)',
    overlay: [[0, 'rgba(255,220,150,0.16)'], [0.5, 'rgba(255,160,90,0.08)'], [1, 'rgba(255,90,40,0.18)']] },
  { id: 'ink', name: 'Poster Ink', filter: 'grayscale(1) contrast(1.38) brightness(1.0)',
    overlay: [[0, 'rgba(10,42,74,0.34)'], [0.55, 'rgba(120,30,110,0.18)'], [1, 'rgba(255,46,136,0.30)']] },
];

export const LETTERINGS = [
  { id: 'block', name: 'Block' },
  { id: 'chrome', name: 'Chrome' },
  { id: 'neon', name: 'Neon Glow' },
  { id: 'banner', name: 'Banner' },
];

export const SIZES = [
  { id: '1080x1080', name: 'Square 1080 × 1080', w: 1080, h: 1080 },
  { id: '1080x1350', name: 'Portrait 1080 × 1350', w: 1080, h: 1350 },
  { id: '1920x1080', name: 'Wide 1920 × 1080', w: 1920, h: 1080 },
];

export const SAMPLES = [
  { id: 'driver', name: 'Sunset Driver', src: 'samples/driver.jpg' },
  { id: 'neon', name: 'Neon Street', src: 'samples/neon.jpg' },
  { id: 'boulevard', name: 'Boulevard', src: 'samples/boulevard.jpg' },
  { id: 'pier', name: 'Pier', src: 'samples/pier.jpg' },
];

export const DEFAULT_STATE = {
  layout: 'hero-diagonal',
  grade: 'sunset',
  lettering: 'block',
  size: '1080x1080',
  title: 'LAST LIGHT',
  tagline: 'EVERY SUNSET HAS A PRICE',
  callouts: [
    { name: 'LUCIA', role: 'THE DRIVER' },
    { name: 'MARCUS', role: 'THE FIXER' },
    { name: 'ROSA', role: 'THE LOOKOUT' },
  ],
  showCallouts: true,
  showSeal: true,
  showBilling: true,
  showArt: true,
  // panel i uses photos[panelPhoto[i]]; zoom 1 = cover-fit, ox/oy in panel fractions.
  panelPhoto: [0, 1, 2, 3],
  panelZoom: [1.15, 1, 1, 1],
  panelOx: [0, 0, 0, 0],
  panelOy: [0, 0, 0, 0],
  panelFlip: [false, false, false, false],
};

// Deterministic PRNG so the grain never changes between renders.
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function polyPath(ctx, pts, w, h) {
  ctx.beginPath();
  pts.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(x * w, y * h) : ctx.lineTo(x * w, y * h)));
  ctx.closePath();
}

function drawPhotoInPanel(ctx, photo, poly, w, h, zoom, ox, oy, flip, filter) {
  if (!photo) return;
  const xs = poly.map((p) => p[0] * w);
  const ys = poly.map((p) => p[1] * h);
  const x0 = Math.min(...xs), x1 = Math.max(...xs);
  const y0 = Math.min(...ys), y1 = Math.max(...ys);
  const pw = x1 - x0, ph = y1 - y0;
  ctx.save();
  polyPath(ctx, poly, w, h);
  ctx.clip();
  ctx.filter = filter;
  const scale = Math.max(pw / photo.naturalWidth, ph / photo.naturalHeight) * zoom;
  const dw = photo.naturalWidth * scale;
  const dh = photo.naturalHeight * scale;
  const cx = x0 + pw / 2 + ox * pw;
  // Wide panel + portrait photo: centre the crop on the top quarter, where
  // faces usually are, instead of the dead centre (a torso).
  const wideBias = pw / ph > 1.5 && photo.naturalHeight > photo.naturalWidth ? 0.25 * dh : 0;
  const cy = y0 + ph / 2 + oy * ph + wideBias;
  if (flip) {
    ctx.translate(cx, cy);
    ctx.scale(-1, 1);
    ctx.drawImage(photo, -dw / 2, -dh / 2, dw, dh);
  } else {
    ctx.drawImage(photo, cx - dw / 2, cy - dh / 2, dw, dh);
  }
  ctx.restore();
  ctx.filter = 'none';
}

function drawRetroSun(ctx, w, h) {
  const cx = w * 0.93, cy = h * 0.09, r = Math.min(w, h) * 0.065;
  // Draw on an offscreen canvas so the retro slices only cut the sun itself,
  // never the photos underneath.
  const off = document.createElement('canvas');
  off.width = Math.ceil(r * 2 + 4);
  off.height = Math.ceil(r * 2 + 4);
  const o = off.getContext('2d');
  const g = o.createLinearGradient(0, 0, 0, off.height);
  g.addColorStop(0, '#ffe259');
  g.addColorStop(0.5, '#ff7e3d');
  g.addColorStop(1, '#ff2e88');
  o.fillStyle = g;
  o.beginPath();
  o.arc(off.width / 2, off.height / 2, r, 0, Math.PI * 2);
  o.fill();
  o.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 4; i++) {
    const y = off.height / 2 + r * (0.05 + i * 0.22);
    o.fillRect(0, y, off.width, r * (0.045 + i * 0.02));
  }
  ctx.save();
  ctx.globalAlpha = 0.92;
  ctx.drawImage(off, cx - off.width / 2, cy - off.height / 2);
  ctx.restore();
}

function drawPalm(ctx, x, y, s, flip, color) {
  // A palm silhouette: curved trunk with wide drooping leaf blades.
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(flip ? -s : s, s);
  ctx.fillStyle = color;
  // Trunk: a tapered filled curve rising to the crown.
  ctx.beginPath();
  ctx.moveTo(-8, 0);
  ctx.quadraticCurveTo(-4, -120, 18, -210);
  ctx.quadraticCurveTo(26, -216, 32, -208);
  ctx.quadraticCurveTo(12, -115, 8, 0);
  ctx.closePath();
  ctx.fill();
  // Blades: fat lens-shaped leaves fanning from the crown.
  const cx = 25, cy = -210;
  const blades = [
    { a: -2.75, l: 130 }, { a: -2.35, l: 145 }, { a: -1.95, l: 150 },
    { a: -1.55, l: 145 }, { a: -1.15, l: 135 }, { a: -0.75, l: 125 },
    { a: -0.35, l: 110 },
  ];
  for (const { a, l } of blades) {
    const dx = Math.cos(a), dy = Math.sin(a);
    const tx = cx + dx * l;
    const ty = cy + dy * l + l * 0.16; // tips droop
    const mx = cx + dx * l * 0.45;
    const my = cy + dy * l * 0.45;
    const px = -dy * 34;
    const py = dx * 34;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.quadraticCurveTo(mx + px, my + py, tx, ty);
    ctx.quadraticCurveTo(mx - px * 0.55, my - py * 0.55, cx, cy + 3);
    ctx.closePath();
    ctx.fill();
  }
  // Coconuts.
  ctx.beginPath(); ctx.arc(16, -202, 9, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(33, -200, 8, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
}

function drawSkyline(ctx, w, h) {
  const base = h * 0.985;
  const rand = mulberry32(20261120);
  ctx.save();
  ctx.fillStyle = 'rgba(12,6,20,0.55)';
  let x = 0;
  while (x < w) {
    const bw = w * (0.03 + rand() * 0.05);
    const bh = h * (0.02 + rand() * 0.075);
    ctx.fillRect(x, base - bh, bw, bh);
    ctx.fillStyle = 'rgba(255,190,90,0.75)';
    const rows = Math.floor(bh / (h * 0.016));
    const cols = Math.floor(bw / (w * 0.014));
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (rand() < 0.4) ctx.fillRect(x + w * 0.006 + c * w * 0.014, base - bh + h * 0.008 + r * h * 0.016, w * 0.006, h * 0.007);
      }
    }
    ctx.fillStyle = 'rgba(12,6,20,0.55)';
    x += bw + w * 0.004;
  }
  ctx.restore();
}

function drawGrain(ctx, w, h) {
  const rand = mulberry32(77);
  ctx.save();
  ctx.globalAlpha = 0.05;
  ctx.fillStyle = '#ffffff';
  const n = Math.floor((w * h) / 900);
  for (let i = 0; i < n; i++) {
    ctx.fillRect(rand() * w, rand() * h, 1.6, 1.6);
  }
  ctx.restore();
}

function fitFont(ctx, text, maxWidth, startSize, family, weight) {
  let size = startSize;
  ctx.font = `${weight} ${size}px ${family}`;
  while (size > 10 && ctx.measureText(text).width > maxWidth) {
    size -= 2;
    ctx.font = `${weight} ${size}px ${family}`;
  }
  return size;
}

function drawTitle(ctx, state, w, h) {
  const title = (state.title || '').trim().toUpperCase();
  if (!title) return;
  const bandY = h * 0.80;
  const lg = ctx.createLinearGradient(0, h * 0.72, 0, h);
  lg.addColorStop(0, 'rgba(10,4,16,0)');
  lg.addColorStop(1, 'rgba(10,4,16,0.62)');
  ctx.fillStyle = lg;
  ctx.fillRect(0, h * 0.72, w, h * 0.28);

  const tagline = (state.tagline || '').trim().toUpperCase();
  if (tagline) {
    ctx.save();
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffe9a8';
    try { ctx.letterSpacing = `${Math.max(2, w * 0.004)}px`; } catch { /* older canvas */ }
    const ts = fitFont(ctx, tagline, w * 0.86, h * 0.032, 'Oswald', 600);
    ctx.shadowColor = 'rgba(0,0,0,0.7)';
    ctx.shadowBlur = ts * 0.4;
    ctx.fillText(tagline, w / 2, bandY - h * 0.012);
    ctx.restore();
    try { ctx.letterSpacing = '0px'; } catch { /* noop */ }
  }

  const maxW = w * 0.92;
  const size = fitFont(ctx, title, maxW, h * 0.115, 'Anton', 400);
  ctx.save();
  ctx.textAlign = 'center';
  const ty = state.lettering === 'banner' ? h * 0.925 : h * 0.955;
  if (state.lettering === 'banner') {
    const tw = Math.min(maxW, ctx.measureText(title).width + w * 0.06);
    const bh = size * 1.15;
    ctx.save();
    ctx.translate(w / 2, ty - size * 0.42);
    ctx.rotate(-0.02);
    ctx.fillStyle = '#ff2e88';
    ctx.shadowColor = 'rgba(0,0,0,0.55)';
    ctx.shadowBlur = size * 0.18;
    ctx.shadowOffsetY = size * 0.05;
    ctx.fillRect(-tw / 2, -bh / 2, tw, bh);
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
    ctx.font = `400 ${size}px Anton, sans-serif`;
    ctx.fillText(title, 0, size * 0.36);
    ctx.restore();
  } else if (state.lettering === 'neon') {
    ctx.font = `400 ${size}px Anton, sans-serif`;
    ctx.shadowColor = '#ff2e88';
    ctx.shadowBlur = size * 0.45;
    ctx.fillStyle = '#ffd7ef';
    ctx.fillText(title, w / 2, ty);
    ctx.shadowColor = '#00e5ff';
    ctx.shadowBlur = size * 0.2;
    ctx.fillStyle = '#ffffff';
    ctx.fillText(title, w / 2, ty);
  } else if (state.lettering === 'chrome') {
    const g = ctx.createLinearGradient(0, ty - size, 0, ty);
    g.addColorStop(0, '#ffffff');
    g.addColorStop(0.45, '#cdd8ff');
    g.addColorStop(0.55, '#8f9bd8');
    g.addColorStop(0.75, '#ff9ecf');
    g.addColorStop(1, '#ffffff');
    ctx.font = `400 ${size}px Anton, sans-serif`;
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#12041c';
    ctx.lineWidth = size * 0.09;
    ctx.strokeText(title, w / 2, ty);
    ctx.fillStyle = g;
    ctx.fillText(title, w / 2, ty);
  } else {
    ctx.font = `400 ${size}px Anton, sans-serif`;
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#12041c';
    ctx.lineWidth = size * 0.10;
    ctx.shadowColor = 'rgba(0,0,0,0.6)';
    ctx.shadowBlur = size * 0.12;
    ctx.shadowOffsetY = size * 0.05;
    ctx.strokeText(title, w / 2, ty);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(title, w / 2, ty);
  }
  ctx.restore();
}

function drawCallouts(ctx, state, w, h) {
  if (!state.showCallouts) return;
  const items = (state.callouts || []).filter((c) => c.name && c.name.trim());
  if (!items.length) return;
  ctx.save();
  ctx.textAlign = 'left';
  let y = h * 0.055;
  for (const item of items.slice(0, 3)) {
    const name = item.name.trim().toUpperCase();
    const role = (item.role || '').trim().toUpperCase();
    const ns = fitFont(ctx, name, w * 0.3, h * 0.030, 'Oswald', 700);
    ctx.font = `700 ${ns}px Oswald, sans-serif`;
    ctx.lineJoin = 'round';
    ctx.strokeStyle = 'rgba(10,4,16,0.9)';
    ctx.lineWidth = ns * 0.22;
    ctx.strokeText(name, w * 0.035, y);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(name, w * 0.035, y);
    if (role) {
      const rs = fitFont(ctx, role, w * 0.3, h * 0.020, 'Oswald', 600);
      ctx.font = `600 ${rs}px Oswald, sans-serif`;
      ctx.fillStyle = '#ffd166';
      ctx.fillText(role, w * 0.035, y + rs * 1.25);
    }
    y += h * 0.075;
  }
  ctx.restore();
}

function drawSeal(ctx, state, w, h) {
  if (!state.showSeal) return;
  const cx = w * 0.885, cy = h * 0.25, r = Math.min(w, h) * 0.05;
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(10,4,16,0.72)';
  ctx.fill();
  ctx.lineWidth = Math.max(2, r * 0.07);
  ctx.strokeStyle = '#ffd166';
  ctx.stroke();
  ctx.fillStyle = '#ffd166';
  ctx.textAlign = 'center';
  ctx.font = `700 ${r * 0.52}px Oswald, sans-serif`;
  ctx.fillText('★', cx, cy - r * 0.08);
  ctx.font = `600 ${r * 0.30}px Oswald, sans-serif`;
  ctx.fillStyle = '#ffffff';
  ctx.fillText('LEONIDA', cx, cy + r * 0.42);
  ctx.font = `600 ${r * 0.24}px Oswald, sans-serif`;
  ctx.fillStyle = '#ffd166';
  ctx.fillText('EST. 2026', cx, cy + r * 0.72);
  ctx.restore();
}

function drawBilling(ctx, state, w, h) {
  if (!state.showBilling) return;
  const names = (state.callouts || []).map((c) => c.name.trim().toUpperCase()).filter(Boolean).join('   •   ');
  const line = `A LEONIDA PICTURE${names ? `   •   STARRING ${names}` : ''}   •   IN CINEMAS SOON`;
  ctx.save();
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  const s = fitFont(ctx, line, w * 0.9, h * 0.0145, 'Oswald', 500);
  ctx.font = `500 ${s}px Oswald, sans-serif`;
  ctx.fillText(line, w / 2, h * 0.992);
  ctx.restore();
}

/** Draws the whole cover onto `canvas` (any size) from `state` and `photos` (array of images or null). */
export function drawCover(canvas, state, photos) {
  const ctx = canvas.getContext('2d');
  const { width: w, height: h } = canvas;
  const layout = LAYOUTS.find((l) => l.id === state.layout) || LAYOUTS[0];
  const grade = GRADES.find((g) => g.id === state.grade) || GRADES[0];
  ctx.save();
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#160a24';
  ctx.fillRect(0, 0, w, h);

  layout.panels.forEach((poly, i) => {
    const photo = photos[state.panelPhoto[i] ?? 0] || null;
    drawPhotoInPanel(ctx, photo, poly, w, h,
      state.panelZoom[i] ?? 1, state.panelOx[i] ?? 0, state.panelOy[i] ?? 0,
      state.panelFlip[i] ?? false, grade.filter);
  });

  const og = ctx.createLinearGradient(0, 0, 0, h);
  for (const [stop, color] of grade.overlay) og.addColorStop(stop, color);
  ctx.fillStyle = og;
  ctx.fillRect(0, 0, w, h);

  ctx.save();
  ctx.lineJoin = 'round';
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = Math.max(3, Math.min(w, h) * 0.006);
  for (const poly of layout.panels) {
    polyPath(ctx, poly, w, h);
    ctx.stroke();
  }
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = Math.max(4, Math.min(w, h) * 0.009);
  ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, w - ctx.lineWidth, h - ctx.lineWidth);
  ctx.restore();

  if (state.showArt) {
    drawRetroSun(ctx, w, h);
    drawSkyline(ctx, w, h);
    const s = Math.min(w, h) * 0.0011;
    drawPalm(ctx, w * 0.02, h * 0.99, s, false, 'rgba(10,4,16,0.85)');
    drawPalm(ctx, w * 0.99, h * 0.99, s * 0.8, true, 'rgba(10,4,16,0.85)');
  }

  const vg = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.42, w / 2, h / 2, Math.max(w, h) * 0.75);
  vg.addColorStop(0, 'rgba(0,0,0,0)');
  vg.addColorStop(1, 'rgba(0,0,0,0.30)');
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, w, h);

  drawCallouts(ctx, state, w, h);
  drawSeal(ctx, state, w, h);
  drawTitle(ctx, state, w, h);
  drawBilling(ctx, state, w, h);
  drawGrain(ctx, w, h);
  ctx.restore();
}
