# GTA 6 Cover Art — local pairwise tournament (8 variants, my own vision as judge)

Judge criteria (competition order): (1) the art, (2) handles any photo
(cropping/positioning, several panels/photos, caption editing), (3) fast
from photo to finished cover, (4) polish.

Variants (see app/src/shots.js VARIANTS):
- V1 Hero Diagonal / Vice Sunset / Block — "LAST LIGHT"
- V2 Triple Split / Neon Nights / Neon Glow — "NEON RUNNER"
- V3 Quad Grid / Ocean Drive / Chrome — "OCEAN DRIVE"
- V4 Hero + Strip / Palm Noir / Block — "ONE LAST SUNSET"
- V5 Key Art Slash / Vice Sunset / Banner — "SUNSET HEIST"
- V6 Comic Stack / Heat Haze / Neon Glow — "HEATWAVE"
- V7 Duo / Poster Ink / Block — "AFTER MIDNIGHT"
- V8 Full Bleed / Ocean Drive / Chrome — "GOLDEN HOUR"

Pairwise results (winner first):
- V1 > V2: V2's right-panel face is clipped by the slant; V1 is balanced.
- V1 > V3: close. V3 shows 4 photos and the chrome title is superb, but its
  callouts sit over the top-left face; V1's callouts sit cleanly over sky and
  its diagonal is the more recognisable GTA-poster shape.
- V1 > V4: V4's noir hero is moody, but its bottom strip is cramped and the
  title crowds the panels; V1's three-panel balance reads better at a glance.
- V1 > V5: V5's hero is a grinning fisherman — wrong narrative for a heist
  poster; the inset driver panel is too small to carry it.
- V1 > V6: close. V6's three bands and neon title are striking, but the top
  band is a tight face crop and the composition is a comic strip, not a
  GTA cover; V1's diagonal panels are the genre's signature.
- V1 > V7: V7's duotone is classy but only two panels, and the ink grade
  turns the pier photo pink-grey.
- V1 > V8: V8 is the cleanest single image, but it shows one photo only —
  weakest on the brief's multi-panel requirement.

WINNER: V1 — Hero Diagonal / Vice Sunset / Block, "LAST LIGHT".
It is the app's DEFAULT_STATE (featured/default cover) and screenshot 1.

Fixes made during the tournament (all in app/src/cover.js):
- Retro sun moved off faces to the top-right sky corner and drawn on an
  offscreen canvas so its slices never cut the photos; composite changed
  from 'screen' to solid so it stays vivid over bright skies.
- Palms redrawn as wide lens-shaped leaf blades with a visible trunk
  (first version read as black starbursts).
- Wide-panel + portrait-photo crops now centre on the top quarter (faces)
  instead of the dead centre (a torso) — proven by V6's top band.
- Birds removed: they landed on faces in several layouts.
- Banner lettering raised so it no longer crowds the billing block.
