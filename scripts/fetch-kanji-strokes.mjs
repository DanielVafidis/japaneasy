/**
 * Regenerates content/kanji-strokes.ts from KanjiVG (https://kanjivg.tagaini.net).
 *
 * Reads the kanji list in content/kanji.ts, downloads the KanjiVG SVG for
 * each character, and emits an ordered list of per-stroke SVG path data
 * (109×109 viewBox) per kanji. Warns when KanjiVG's stroke count disagrees
 * with the `strokes` field recorded in content/kanji.ts.
 *
 * Usage: node scripts/fetch-kanji-strokes.mjs
 */

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.join(import.meta.dirname, "..");
const KANJIVG_RAW =
  "https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji";

async function kanjiEntries() {
  const src = await readFile(path.join(root, "content/kanji.ts"), "utf8");
  const entries = [];
  for (const m of src.matchAll(/\{ char: "(.)", .*?strokes: (\d+)/g)) {
    entries.push({ char: m[1], strokes: Number(m[2]) });
  }
  if (entries.length === 0) throw new Error("no kanji entries found");
  return entries;
}

function kanjivgUrl(glyph) {
  const hex = glyph.codePointAt(0).toString(16).padStart(5, "0");
  return `${KANJIVG_RAW}/${hex}.svg`;
}

async function fetchStrokes(glyph) {
  const res = await fetch(kanjivgUrl(glyph));
  if (!res.ok) throw new Error(`${glyph}: HTTP ${res.status}`);
  const svg = await res.text();
  const strokes = [...svg.matchAll(/<path id="kvg:[^"]*-s(\d+)"[^>]*\bd="([^"]+)"/g)]
    .map((m) => ({ n: Number(m[1]), d: m[2] }))
    .sort((a, b) => a.n - b.n)
    .map((s) => s.d);
  if (strokes.length === 0) throw new Error(`${glyph}: no stroke paths found`);
  return strokes;
}

const kanji = await kanjiEntries();
const entries = [];
for (const { char, strokes: expected } of kanji) {
  const strokes = await fetchStrokes(char);
  if (strokes.length !== expected) {
    console.warn(
      `\n${char}: KanjiVG has ${strokes.length} strokes, content/kanji.ts says ${expected}`,
    );
  }
  entries.push([char, strokes]);
  process.stdout.write(char);
}
process.stdout.write("\n");

const body = entries
  .map(
    ([glyph, strokes]) =>
      `  "${glyph}": [\n${strokes.map((d) => `    "${d}",`).join("\n")}\n  ],`,
  )
  .join("\n");

const out = `/**
 * Per-stroke SVG path data for the kanji catalogue, in stroke order.
 * Coordinates use the KanjiVG 109×109 viewBox.
 *
 * GENERATED FILE — do not edit by hand; run \`node scripts/fetch-kanji-strokes.mjs\`.
 *
 * Data © Ulrich Apel, from the KanjiVG project (http://kanjivg.tagaini.net),
 * licensed under Creative Commons Attribution-Share Alike 3.0.
 */

export const KANJI_VIEWBOX = 109;

export const kanjiStrokes: Record<string, string[]> = {
${body}
};
`;

await writeFile(path.join(root, "content/kanji-strokes.ts"), out);
console.log(`wrote content/kanji-strokes.ts (${entries.length} kanji)`);
