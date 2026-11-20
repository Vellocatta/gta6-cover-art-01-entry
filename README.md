# LAST LIGHT — Vice Cover Studio

[![make.fun · gta6-cover-art-01](https://make.fun/badge/gta6-cover-art-01.svg)](https://make.fun/bounty/gta6-cover-art-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-cover-art-01)
[![rank](https://make.fun/badge/gta6-cover-art-01/Vellocatta/gta6-cover-art-01-entry/rank.svg)](https://make.fun/bounty/gta6-cover-art-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-cover-art-01)
[![reward](https://make.fun/badge/gta6-cover-art-01/Vellocatta/gta6-cover-art-01-entry/reward.svg)](https://make.fun/bounty/gta6-cover-art-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-cover-art-01)

Your photos, turned into a Vice City–style poster cover. A fully offline
browser app: upload up to 4 photos (or use the samples), pick a layout,
a colour grade and lettering, write the title, and export a PNG in the
post sizes 1080 × 1080, 1080 × 1350 and 1920 × 1080 — one click each,
or all three at once. Nothing is uploaded; the photos never leave the
machine.

## What it does

- **8 layouts** — Hero Diagonal (the classic slanted multi-panel GTA
  poster), Triple Split, Quad Grid, Hero + Strip, Key Art Slash,
  Comic Stack, Duo, Full Bleed.
- **6 colour grades** — Vice Sunset, Neon Nights, Ocean Drive, Palm Noir,
  Heat Haze, Poster Ink.
- **4 letterings** — Block, Chrome, Neon Glow, Banner — in Anton, with
  taglines and cast names in Oswald (both SIL Open Font License, vendored
  under `app/fonts/`).
- **Any photo** — per-panel photo assignment, zoom, left–right and
  up–down positioning, flip. Wide panels with portrait photos centre the
  crop on the top quarter, where faces are, instead of a torso.
- **A finished poster, not a filter** — cast callouts (name + role),
  a Leonida seal, a billing block, and original procedural art drawn on
  canvas: a retro striped sun, palm silhouettes and a lit skyline, plus
  film grain. No Rockstar Games logo, artwork, character or font is used.
- **Fast** — the sample cover "Last Light" loads on open; "Surprise me"
  shuffles layout, grade, lettering and panel photos in one click.

## The cover

The featured cover is **"LAST LIGHT — Every sunset has a price"**:
Hero Diagonal layout, Vice Sunset grade, Block lettering — the winner of
a local pairwise tournament over 8 cover variants (see
`tournament.md` in the build notes; the other variants are the same app
with different layout/grade/lettering). The screenshots show it at
1080 × 1080, the editor with photos loaded, the same cover at
1080 × 1350, and the Heatwave variant at 1920 × 1080.

## Try it

```sh
node serve.ts   # then open http://localhost:8080
```

Or open `app/index.html` directly in desktop Chrome — the app is plain
static files with no build step and no network request.

## Hand in

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `app/` and
`screenshots/` to `$MAKEFUN_OUTPUT_DIR` (default `/output`) and writes
`/output/dossier.json`. Deterministic: two runs produce byte-identical
output.

## Credits

- Fonts: Anton and Oswald, SIL Open Font License 1.1
  (`app/fonts/OFL.txt`).
- Sample photos `boulevard.jpg` and `pier.jpg` came with the kit and
  were made for make.fun with an image model; `driver.jpg` and
  `neon.jpg` were made with an image model for this entry. All four are
  free to use; no real person is depicted without agreement.
