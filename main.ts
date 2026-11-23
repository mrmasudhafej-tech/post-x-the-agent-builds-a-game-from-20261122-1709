// Lantern Catch entry for the "agent builds a game from one prompt" bounty.
// The entry itself is the X post: this program only hands the post's address
// to the grader. It copies POST.json from the repository root into /output,
// byte for byte, and does nothing else — no network, no clock, no writes
// outside the output directory, so both grader runs produce identical bytes.
//
// Local run (mirrors the grader's paths):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Copy POST.json exactly as it stands: the gate reads the post's address
// from it, and a placeholder address is the gate's to refuse, not this
// program's. No validation here, so the local check run and the grader's
// two runs all behave the same way on the same file.
mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
