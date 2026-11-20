// Fixed scenes for screenshots: ?shot=cover shows the cover alone at the
// size in ?w/?h; ?shot=editor shows the editor with photos loaded.
// ?variant=1..8 picks one of the eight tournament covers; layout/grade/
// lettering/title/tagline/size params override it. window.__shotReady is
// set once painted.
export const VARIANTS = [
  { layout: 'hero-diagonal', grade: 'sunset', lettering: 'block', title: 'LAST LIGHT', tagline: 'EVERY SUNSET HAS A PRICE', photos: [0, 1, 2, 3] },
  { layout: 'triple-split', grade: 'neon', lettering: 'neon', title: 'NEON RUNNER', tagline: 'THE CITY NEVER SLEEPS', photos: [1, 0, 3, 2] },
  { layout: 'quad-grid', grade: 'ocean', lettering: 'chrome', title: 'OCEAN DRIVE', tagline: 'PALMS, NEON AND SALT AIR', photos: [2, 3, 0, 1] },
  { layout: 'hero-strip', grade: 'noir', lettering: 'block', title: 'ONE LAST SUNSET', tagline: 'SHE KEPT THE KEYS', photos: [0, 3, 1, 2] },
  { layout: 'key-slash', grade: 'sunset', lettering: 'banner', title: 'SUNSET HEIST', tagline: 'FOUR CREW. ONE SCORE.', photos: [3, 0, 1, 2] },
  { layout: 'comic-stack', grade: 'haze', lettering: 'neon', title: 'HEATWAVE', tagline: 'THE STREETS ARE MELTING', photos: [2, 0, 1, 3] },
  { layout: 'duo', grade: 'ink', lettering: 'block', title: 'AFTER MIDNIGHT', tagline: 'LEONIDA AFTER DARK', photos: [1, 3, 0, 2] },
  { layout: 'full-bleed', grade: 'ocean', lettering: 'chrome', title: 'GOLDEN HOUR', tagline: 'DRIVE INTO THE LIGHT', photos: [0, 2, 3, 1] },
];

export async function runShot(shot, query, ctx) {
  const { state, photos, loadSamples, redraw, refreshPickers, refreshPhotoSlots, refreshPanelControls, bindPanelControls, bindTextControls, bindExport, setStatus } = ctx;
  await loadSamples();
  if (shot === 'cover') {
    document.body.classList.add('shot-cover');
    const v = VARIANTS[Number(query.get('variant') ?? 1) - 1] || VARIANTS[0];
    state.layout = query.get('layout') || v.layout;
    state.grade = query.get('grade') || v.grade;
    state.lettering = query.get('lettering') || v.lettering;
    state.title = query.get('title') || v.title;
    state.tagline = query.get('tagline') || v.tagline;
    state.panelPhoto = v.photos.slice();
    state.size = 'custom';
    const w = Number(query.get('w') || 1080);
    const h = Number(query.get('h') || 1080);
    const canvas = document.getElementById('cover');
    canvas.width = w;
    canvas.height = h;
    redraw();
  } else {
    // Editor scene: full UI, sample cover loaded.
    refreshPickers();
    refreshPhotoSlots();
    refreshPanelControls();
    bindPanelControls();
    bindTextControls();
    bindExport();
    redraw();
    setStatus('Sample cover loaded — “Last Light”.');
  }
  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  window.__shotReady = true;
}
