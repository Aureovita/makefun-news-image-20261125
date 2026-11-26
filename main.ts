// The World in One Day — entry program for the 25 November 2026 news-image contest.
//
// The repository ships the finished front-page image as text: entry.png.b64 holds
// the PNG encoded in base64 on a single line. This program decodes it and writes
// the exact image bytes to entry.png in the output directory, so both grader
// runs produce byte-identical output. The design source that was rendered to
// make the image is frontpage.html.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const encoded = readFileSync(new URL('./entry.png.b64', import.meta.url), 'utf8').trim();
const imageBytes = Buffer.from(encoded, 'base64');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
writeFileSync(join(outputDir, 'entry.png'), imageBytes);
