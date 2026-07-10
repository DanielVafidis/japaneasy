/**
 * Regenerates content/kana-strokes.ts from KanjiVG (https://kanjivg.tagaini.net).
 *
 * Reads the gojuon table in content/kana.ts, downloads the KanjiVG SVG for
 * each hiragana/katakana glyph, and emits an ordered list of per-stroke SVG
 * path data (109×109 viewBox) per glyph.
 *
 * Usage: node scripts/fetch-kana-strokes.mjs
 */

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.join(import.meta.dirname, "..");
const KANJIVG_RAW =
  "https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji";

async function gojuonGlyphs() {
  const src = await readFile(path.join(root, "content/kana.ts"), "utf8");
  const table = src.slice(src.indexOf("gojuon: KanaChar[]"));
  const block = table.slice(0, table.indexOf("];"));
  const glyphs = [];
  for (const m of block.matchAll(/hira: "(.)", kata: "(.)"/g)) {
    glyphs.push(m[1], m[2]);
  }
  if (glyphs.length === 0) throw new Error("no gojuon entries found");
  return glyphs;
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

const glyphs = await gojuonGlyphs();
const entries = [];
for (const glyph of glyphs) {
  entries.push([glyph, await fetchStrokes(glyph)]);
  process.stdout.write(glyph);
}
process.stdout.write("\n");

const body = entries
  .map(
    ([glyph, strokes]) =>
      `  "${glyph}": [\n${strokes.map((d) => `    "${d}",`).join("\n")}\n  ],`,
  )
  .join("\n");

const out = `/**
 * Per-stroke SVG path data for the gojuon kana, in stroke order.
 * Coordinates use the KanjiVG 109×109 viewBox.
 *
 * GENERATED FILE — do not edit by hand; run \`node scripts/fetch-kana-strokes.mjs\`.
 *
 * Data © Ulrich Apel, from the KanjiVG project (http://kanjivg.tagaini.net),
 * licensed under Creative Commons Attribution-Share Alike 3.0.
 */

export const KANA_VIEWBOX = 109;

export const kanaStrokes: Record<string, string[]> = {
${body}
};
`;

await writeFile(path.join(root, "content/kana-strokes.ts"), out);
console.log(`wrote content/kana-strokes.ts (${entries.length} glyphs)`);
