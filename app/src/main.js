// LAST LIGHT Cover Studio — wires the editor: photos, panels, styles, export.
// Works fully offline: every file it loads lives under app/, photos never
// leave the machine (uploads are read with FileReader / object URLs only).
import { drawCover, LAYOUTS, GRADES, LETTERINGS, SIZES, SAMPLES, DEFAULT_STATE } from './cover.js';
import { runShot } from './shots.js';

const $ = (id) => document.getElementById(id);
const canvas = $('cover');
const status = $('status');

// Deep copy of the default so shots can override fields.
const state = JSON.parse(JSON.stringify(DEFAULT_STATE));
// photos[i]: an Image, or null. Slots 0..3 start as the four samples.
const photos = [null, null, null, null];
const photoNames = ['Sample: Sunset Driver', 'Sample: Neon Street', 'Sample: Boulevard', 'Sample: Pier'];
let selectedPanel = 0;

export function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

function sizeDef() {
  return SIZES.find((s) => s.id === state.size) || SIZES[0];
}

function redraw() {
  if (state.size !== 'custom') {
    const s = sizeDef();
    if (canvas.width !== s.w || canvas.height !== s.h) {
      canvas.width = s.w;
      canvas.height = s.h;
    }
  }
  drawCover(canvas, state, photos);
}

function setStatus(msg) {
  status.textContent = msg;
}

function download(canvasEl, name) {
  canvasEl.toBlob((blob) => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  }, 'image/png');
}

function exportSize(size) {
  const off = document.createElement('canvas');
  off.width = size.w;
  off.height = size.h;
  drawCover(off, state, photos);
  download(off, `last-light-${size.w}x${size.h}.png`);
  setStatus(`Saved last-light-${size.w}x${size.h}.png`);
}

function buildButtons(container, items, current, onPick) {
  container.innerHTML = '';
  for (const item of items) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'pick' + (item.id === current ? ' active' : '');
    b.textContent = item.name;
    b.addEventListener('click', () => {
      onPick(item.id);
      buildButtons(container, items, item.id, onPick);
      redraw();
    });
    container.appendChild(b);
  }
}

function refreshPickers() {
  buildButtons($('layouts'), LAYOUTS, state.layout, (id) => { state.layout = id; });
  buildButtons($('grades'), GRADES, state.grade, (id) => { state.grade = id; });
  buildButtons($('letterings'), LETTERINGS, state.lettering, (id) => { state.lettering = id; });
  buildButtons($('sizes'), SIZES, state.size, (id) => { state.size = id; });
}

function refreshPhotoSlots() {
  const wrap = $('photos');
  wrap.innerHTML = '';
  photos.forEach((photo, i) => {
    const slot = document.createElement('div');
    slot.className = 'slot';
    const thumb = document.createElement('div');
    thumb.className = 'thumb';
    thumb.textContent = photo ? '✓' : '—';
    if (photo) thumb.style.backgroundImage = `url(${photo.src})`;
    const name = document.createElement('span');
    name.textContent = `Photo ${i + 1}: ${photoNames[i]}`;
    const file = document.createElement('input');
    file.type = 'file';
    file.accept = 'image/*';
    file.setAttribute('aria-label', `Upload photo ${i + 1}`);
    file.addEventListener('change', async (e) => {
      const f = e.target.files[0];
      if (!f) return;
      photos[i] = await loadImage(URL.createObjectURL(f));
      photoNames[i] = f.name;
      refreshPhotoSlots();
      redraw();
      setStatus(`Photo ${i + 1} loaded — pick a panel to place it in.`);
    });
    const sample = document.createElement('select');
    sample.setAttribute('aria-label', `Sample for photo ${i + 1}`);
    const none = document.createElement('option');
    none.value = '';
    none.textContent = 'Sample…';
    sample.appendChild(none);
    for (const s of SAMPLES) {
      const o = document.createElement('option');
      o.value = s.id;
      o.textContent = s.name;
      sample.appendChild(o);
    }
    sample.addEventListener('change', async () => {
      if (!sample.value) return;
      const s = SAMPLES.find((x) => x.id === sample.value);
      photos[i] = await loadImage(s.src);
      photoNames[i] = `Sample: ${s.name}`;
      refreshPhotoSlots();
      redraw();
    });
    slot.append(thumb, name, file, sample);
    wrap.appendChild(slot);
  });
}

function refreshPanelControls() {
  const layout = LAYOUTS.find((l) => l.id === state.layout) || LAYOUTS[0];
  const tabs = $('panel-tabs');
  tabs.innerHTML = '';
  layout.panels.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'pick' + (i === selectedPanel ? ' active' : '');
    b.textContent = `Panel ${i + 1}`;
    b.addEventListener('click', () => { selectedPanel = i; refreshPanelControls(); });
    tabs.appendChild(b);
  });
  const i = Math.min(selectedPanel, layout.panels.length - 1);
  selectedPanel = i;
  const assign = $('panel-photo');
  assign.innerHTML = '';
  photos.forEach((_, pi) => {
    const o = document.createElement('option');
    o.value = String(pi);
    o.textContent = `Photo ${pi + 1} — ${photoNames[pi]}`;
    assign.appendChild(o);
  });
  assign.value = String(state.panelPhoto[i] ?? 0);
  $('zoom').value = state.panelZoom[i] ?? 1;
  $('ox').value = state.panelOx[i] ?? 0;
  $('oy').value = state.panelOy[i] ?? 0;
  $('flip').checked = state.panelFlip[i] ?? false;
  $('zoom-val').textContent = `${Math.round((state.panelZoom[i] ?? 1) * 100)}%`;
  $('ox-val').textContent = `${Math.round((state.panelOx[i] ?? 0) * 100)}`;
  $('oy-val').textContent = `${Math.round((state.panelOy[i] ?? 0) * 100)}`;
}

function bindPanelControls() {
  $('panel-photo').addEventListener('change', (e) => {
    state.panelPhoto[selectedPanel] = Number(e.target.value);
    redraw();
  });
  $('zoom').addEventListener('input', (e) => {
    state.panelZoom[selectedPanel] = Number(e.target.value);
    $('zoom-val').textContent = `${Math.round(Number(e.target.value) * 100)}%`;
    redraw();
  });
  $('ox').addEventListener('input', (e) => {
    state.panelOx[selectedPanel] = Number(e.target.value);
    $('ox-val').textContent = `${Math.round(Number(e.target.value) * 100)}`;
    redraw();
  });
  $('oy').addEventListener('input', (e) => {
    state.panelOy[selectedPanel] = Number(e.target.value);
    $('oy-val').textContent = `${Math.round(Number(e.target.value) * 100)}`;
    redraw();
  });
  $('flip').addEventListener('change', (e) => {
    state.panelFlip[selectedPanel] = e.target.checked;
    redraw();
  });
}

function bindTextControls() {
  $('title').addEventListener('input', (e) => { state.title = e.target.value; redraw(); });
  $('tagline').addEventListener('input', (e) => { state.tagline = e.target.value; redraw(); });
  [0, 1, 2].forEach((i) => {
    $(`callout-name-${i}`).addEventListener('input', (e) => { state.callouts[i].name = e.target.value; redraw(); });
    $(`callout-role-${i}`).addEventListener('input', (e) => { state.callouts[i].role = e.target.value; redraw(); });
  });
  $('show-callouts').addEventListener('change', (e) => { state.showCallouts = e.target.checked; redraw(); });
  $('show-seal').addEventListener('change', (e) => { state.showSeal = e.target.checked; redraw(); });
  $('show-billing').addEventListener('change', (e) => { state.showBilling = e.target.checked; redraw(); });
  $('show-art').addEventListener('change', (e) => { state.showArt = e.target.checked; redraw(); });
}

function bindExport() {
  $('export').addEventListener('click', () => exportSize(sizeDef()));
  $('export-all').addEventListener('click', () => {
    SIZES.forEach((s, i) => setTimeout(() => exportSize(s), i * 350));
    setStatus('Exporting all three sizes…');
  });
  $('surprise').addEventListener('click', () => {
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)].id;
    state.layout = pick(LAYOUTS);
    state.grade = pick(GRADES);
    state.lettering = pick(LETTERINGS);
    // Shuffle which photo lands in each panel.
    const order = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
    state.panelPhoto = order;
    refreshPickers();
    refreshPanelControls();
    redraw();
    setStatus('Surprise cover — tweak it or export it.');
  });
  $('sample-cover').addEventListener('click', async () => {
    Object.assign(state, JSON.parse(JSON.stringify(DEFAULT_STATE)));
    $('title').value = state.title;
    $('tagline').value = state.tagline;
    state.callouts.forEach((c, i) => {
      $(`callout-name-${i}`).value = c.name;
      $(`callout-role-${i}`).value = c.role;
    });
    refreshPickers();
    refreshPanelControls();
    redraw();
    setStatus('Sample cover loaded — “Last Light”.');
  });
}

async function loadSamples() {
  for (let i = 0; i < SAMPLES.length; i++) {
    if (!photos[i]) photos[i] = await loadImage(SAMPLES[i].src);
  }
}

const query = new URLSearchParams(location.search);
const shot = query.get('shot');
if (shot) {
  // Deterministic screenshot scenes; main.js stays in charge of state.
  await document.fonts.ready;
  await runShot(shot, query, { state, photos, loadImage, loadSamples, redraw, refreshPickers, refreshPhotoSlots, refreshPanelControls, bindPanelControls, bindTextControls, bindExport, setStatus });
} else {
  await document.fonts.ready;
  await loadSamples();
  refreshPickers();
  refreshPhotoSlots();
  refreshPanelControls();
  bindPanelControls();
  bindTextControls();
  bindExport();
  redraw();
  setStatus('Sample cover loaded — upload your own photos to make it yours.');
}
