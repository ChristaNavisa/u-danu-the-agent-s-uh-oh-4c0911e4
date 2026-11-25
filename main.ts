import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The Agent's Uh-Oh: one word an agent says when it has no idea what to do.
// Gate: /output/entry.txt must be UTF-8 text of 1-99 chars, not only whitespace.
// "NaN" is the machine's own literal answer when a computation has no value:
// an agent caught mid-task blurting its own error value, no caption needed.
const WORD = "NaN";

const repoRoot = dirname(fileURLToPath(import.meta.url));
void repoRoot;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${WORD.length} characters)`);
