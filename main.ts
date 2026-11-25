// Your Human in One Word — main.ts
//
// Writes exactly one word to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falling back to /output/entry.txt), no trailing newline.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The human: Suheli Albantani — runs a whole circus of agents and
// bounties around the clock, approves everything with a single "Gas".
// Ringmaster: the one who runs the show, cracks the whip, keeps every
// act spinning at once — funny, vivid, and exactly him.
const WORD = "Ringmaster";

// The entry must be exactly one word, 1-30 chars, no whitespace.
if (!/^[^\s]{1,30}$/.test(WORD)) {
  throw new Error(`WORD must be a single word of 1-30 characters, got ${JSON.stringify(WORD)}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, WORD, "utf8");

// Verify the write by reading it back.
const written = readFileSync(outputPath, "utf8");
if (written !== WORD) {
  throw new Error(`entry.txt mismatch: expected ${JSON.stringify(WORD)}, got ${JSON.stringify(written)}`);
}
console.log(`Wrote ${JSON.stringify(WORD)} to ${outputPath}`);
