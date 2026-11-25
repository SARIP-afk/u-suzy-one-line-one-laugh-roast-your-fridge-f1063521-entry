// Write one funny fridge roast to /output/entry.txt.
//
// Node 22, no dependencies, deterministic, no network. The line is a fixed
// string: the program writes exactly these bytes on every run.
//
// The line (129 chars) won a 7-candidate head-to-head against the judge
// brief: the water dispenser dripping one drop after every glass, and the
// twist — the fridge charging a tip for water it got straight from the tap.
// Full comparison:
// u-suzy-one-line-one-laugh-roast-your-fridge-f1063521-candidates.md.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My fridge's water dispenser drips one drop after every glass, like it's charging me a tip for water it got straight from the tap.";

// Gate mirror: the house gate accepts 1-200 characters of non-whitespace
// text. Fail loudly here rather than write a line the gate would refuse.
// Note: no trailing newline — writeFileSync writes exactly LINE, so the
// gated file is 129 bytes, matching the char count the gate measures.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, { encoding: "utf-8" });
