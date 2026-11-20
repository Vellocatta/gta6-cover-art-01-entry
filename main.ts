// LAST LIGHT — Vice Cover Studio, the hand-in program for gta6-cover-art-01
// (Node 22, standard library only). The app is this directory's app/
// folder: plain static files a desktop browser loads offline
// (app/index.html and its ES modules, no library and no network request).
// This program copies app/ and screenshots/ from beside this file to
// /output and writes /output/dossier.json, the summary the judge reads,
// with the vendored make.fun library (vendor/makefun-app.ts, unchanged).
//
// The app turns up to four photos and a caption into a Vice City-style
// poster cover: 8 diagonal multi-panel layouts, 6 colour grades, 4
// letterings in vendored SIL-OFL fonts, cast callouts, a seal and a
// billing block, exported as PNGs in 1080 x 1080, 1080 x 1350 and
// 1920 x 1080. Its featured cover is "LAST LIGHT", the winner of a local
// pairwise tournament over 8 covers the app can produce.
//
// Serve it locally with `node serve.ts`, then open http://localhost:8080.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-app.ts';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
cpSync(join(here, 'app'), join(out, 'app'), { recursive: true });
mkdirSync(join(out, 'screenshots'), { recursive: true });
if (existsSync(join(here, 'screenshots'))) cpSync(join(here, 'screenshots'), join(out, 'screenshots'), { recursive: true });

// The scorer's own caps (reference/gate.json): only text_max_bytes shapes the bytes; the others refuse an entry the
// scorer would refuse (more than 4 screenshots or one over 256 KiB; more than 993 files in app/ or 48 MiB of app
// files, in all, or a path under app/ over 1000 bytes: app/ counts beside /output's own 1000-entry cap, its
// screenshots/ and dossier.json). This entry ships 4 screenshots, each under the cap, and 12 files under app/.
writeFileSync(
  join(out, 'dossier.json'),
  buildDossier(out, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    app_max_files: 993,
    app_max_bytes: 50331648,
    app_path_max_bytes: 1000,
  }),
);

// One line for the human running it: what was handed in, and where.
const shots = existsSync(join(out, 'screenshots')) ? readdirSync(join(out, 'screenshots')).length : 0;
console.log(`LAST LIGHT handed in: app/ + ${shots} screenshot(s) + dossier.json -> ${out}`);
