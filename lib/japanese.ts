import {
  allKana,
  dakuten,
  gojuon,
  kanaOf,
  yoon,
  type KanaScript,
} from "@/content/kana";

/**
 * Furigana convention used throughout lesson content:
 *   "学生[がくせい]だ"  -> 学生 gets the reading がくせい
 * A bracketed reading attaches to the run of kanji immediately before it.
 */

export interface Token {
  base: string;
  rt: string | null;
}

const KANJI = /[\u3400-\u9fff\u3005]/; // CJK ideographs + 々

function isKanji(ch: string) {
  return KANJI.test(ch);
}

export function parseFurigana(text: string): Token[] {
  const tokens: Token[] = [];
  let buffer = "";

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === "[") {
      const end = text.indexOf("]", i);
      if (end === -1) {
        buffer += ch;
        continue;
      }
      const reading = text.slice(i + 1, end);

      // Split buffer into a non-kanji head and the trailing kanji run.
      let split = buffer.length;
      while (split > 0 && isKanji(buffer[split - 1])) split--;
      const head = buffer.slice(0, split);
      const kanjiRun = buffer.slice(split);

      if (head) tokens.push({ base: head, rt: null });
      tokens.push({ base: kanjiRun || reading, rt: reading });

      buffer = "";
      i = end;
    } else {
      buffer += ch;
    }
  }
  if (buffer) tokens.push({ base: buffer, rt: null });
  return tokens;
}

/** Drop furigana markup, keep displayed characters: "学生[がくせい]だ" -> "学生だ" */
export function stripFurigana(text: string): string {
  return parseFurigana(text)
    .map((t) => t.base)
    .join("");
}

/** Full kana reading: "学生[がくせい]だ" -> "がくせいだ" */
export function toReading(text: string): string {
  return parseFurigana(text)
    .map((t) => t.rt ?? t.base)
    .join("");
}

// ---- Romaji ----------------------------------------------------------------

const single: Record<string, string> = {};
for (const k of [...gojuon, ...dakuten]) {
  single[k.hira] = k.romaji;
  single[k.kata] = k.romaji;
}

const combo: Record<string, string> = {};
for (const k of yoon) {
  combo[k.hira] = k.romaji;
  combo[k.kata] = k.romaji;
}
// A few common extended katakana sounds for loanwords.
Object.assign(combo, {
  ファ: "fa", フィ: "fi", フェ: "fe", フォ: "fo",
  ティ: "ti", ディ: "di", トゥ: "tu", ドゥ: "du",
  ウィ: "wi", ウェ: "we", ウォ: "wo",
  チェ: "che", ジェ: "je", シェ: "she",
});

const punctuation: Record<string, string> = {
  "。": ". ",
  "、": ", ",
  "・": " ",
  "　": " ",
  "！": "! ",
  "？": "? ",
};

export function toRomaji(input: string): string {
  const text = toReading(input);
  let out = "";
  let i = 0;
  while (i < text.length) {
    const two = text.slice(i, i + 2);
    if (combo[two]) {
      out += combo[two];
      i += 2;
      continue;
    }
    const ch = text[i];

    if (ch === "っ" || ch === "ッ") {
      const nextTwo = text.slice(i + 1, i + 3);
      const nextRom = combo[nextTwo] ?? single[text[i + 1]] ?? "";
      if (nextRom.startsWith("ch")) out += "t";
      else if (nextRom) out += nextRom[0];
      i += 1;
      continue;
    }

    if (ch === "ー") {
      const last = out[out.length - 1];
      if (last && "aeiou".includes(last)) out += last;
      i += 1;
      continue;
    }

    if (single[ch]) {
      out += single[ch];
      i += 1;
      continue;
    }

    if (punctuation[ch]) {
      out += punctuation[ch];
      i += 1;
      continue;
    }

    out += ch;
    i += 1;
  }
  return out.trim();
}

/** Normalise romaji for loose answer comparison. */
export function normalizeRomaji(s: string): string {
  return s.trim().toLowerCase().normalize("NFKC").replace(/[\s\-']/g, "");
}

const LOANWORD_ROMaji: Record<string, string> = {
  fa: "ファ",
  fi: "フィ",
  fe: "フェ",
  fo: "フォ",
  ti: "ティ",
  di: "ディ",
  tu: "トゥ",
  du: "ドゥ",
  wi: "ウィ",
  we: "ウェ",
  wo: "ウォ",
  che: "チェ",
  je: "ジェ",
  she: "シェ",
};

const ROMAJI_ALIASES: Record<string, string> = {
  si: "shi",
  ti: "chi",
  tu: "tsu",
  hu: "fu",
  zi: "ji",
  di: "ji",
  du: "zu",
  // Japanese r sits between l and r; accept both spellings.
  la: "ra",
  li: "ri",
  lu: "ru",
  le: "re",
  lo: "ro",
  lya: "rya",
  lyu: "ryu",
  lyo: "ryo",
};

/** Hepburn spellings with an extra "y" (jyu, syu, tya, …). */
const Y_INSERT_VARIANTS: Record<string, string[]> = {
  sha: ["sya"],
  shu: ["syu"],
  sho: ["syo"],
  cha: ["tya", "cya"],
  chu: ["tyu", "cyu"],
  cho: ["tyo", "cyo"],
  ja: ["jya", "zya"],
  ju: ["jyu", "zyu"],
  jo: ["jyo", "zyo"],
};

for (const [canonical, variants] of Object.entries(Y_INSERT_VARIANTS)) {
  for (const alias of variants) ROMAJI_ALIASES[alias] = canonical;
}

function buildRomajiLookup(script: KanaScript): Map<string, string> {
  const map = new Map<string, string>();
  for (const k of allKana) {
    map.set(k.romaji, kanaOf(k, script));
  }
  for (const [romaji, kana] of Object.entries(LOANWORD_ROMaji)) {
    if (script === "kata") map.set(romaji, kana);
  }
  for (const [alias, canonical] of Object.entries(ROMAJI_ALIASES)) {
    const kana = map.get(canonical);
    if (kana) map.set(alias, kana);
  }
  return map;
}

const HIRA_LOOKUP = buildRomajiLookup("hira");
const KATA_LOOKUP = buildRomajiLookup("kata");

function lookupFor(script: KanaScript): Map<string, string> {
  return script === "kata" ? KATA_LOOKUP : HIRA_LOOKUP;
}

const ROMaji_KEYS = [...new Set([...HIRA_LOOKUP.keys(), ...KATA_LOOKUP.keys()])].sort(
  (a, b) => b.length - a.length,
);

/** Proper prefixes of romaji keys — held unconverted while typing. */
const ROMAJI_PREFIXES = new Set<string>();
for (const key of ROMaji_KEYS) {
  for (let len = 1; len < key.length; len++) {
    ROMAJI_PREFIXES.add(key.slice(0, len));
  }
}

const CONSONANTS = "bcdfghjklmpqrstvwxyz";
const VOWELS = "aeiou";

function parseRomajiChunk(
  input: string,
  script: KanaScript,
  options: { live?: boolean } = {},
): { converted: string; rest: string } {
  const live = options.live ?? false;
  const map = lookupFor(script);
  const s = input.toLowerCase();
  let out = "";
  let i = 0;

  while (i < s.length) {
    const ch = s[i];
    if (ch === " ") {
      i += 1;
      continue;
    }

    // Prolonged sound mark: "ke-ki" → けーき/ケーキ, distinct from "keeki" → けえき.
    if (ch === "-") {
      out += "ー";
      i += 1;
      continue;
    }

    if (
      CONSONANTS.includes(ch) &&
      i + 1 < s.length &&
      s[i + 1] === ch
    ) {
      out += script === "hira" ? "っ" : "ッ";
      i += 1;
      continue;
    }

    if (ch === "n") {
      const next = s[i + 1];
      if (next === "'") {
        out += script === "hira" ? "ん" : "ン";
        i += 2;
        continue;
      }
      if (
        next === "n" &&
        (i + 2 >= s.length || CONSONANTS.includes(s[i + 2]))
      ) {
        out += script === "hira" ? "ん" : "ン";
        i += 2;
        continue;
      }
      // "ny" starts にゃ/にゅ/にょ, so leave it to syllable matching.
      if (!next || (CONSONANTS.includes(next) && next !== "y")) {
        if (live && !next) {
          const prev = i > 0 ? s[i - 1] : "";
          // Hold trailing n when it could start na/ni/… (e.g. typing "ni").
          if (i === 0 || !VOWELS.includes(prev)) {
            return { converted: out, rest: s.slice(i) };
          }
        }
        out += script === "hira" ? "ん" : "ン";
        i += 1;
        continue;
      }
    }

    let matched = false;
    let matchedKey = "";
    for (const key of ROMaji_KEYS) {
      if (!s.startsWith(key, i)) continue;
      const kana = map.get(key);
      if (!kana) continue;
      out += kana;
      i += key.length;
      matchedKey = key;
      matched = true;
      break;
    }

    if (!matched) {
      return { converted: out, rest: s.slice(i) };
    }

    // Long vowels: juu → じゅう, oo → おう, ou → おう
    const lastV = matchedKey[matchedKey.length - 1];
    if (VOWELS.includes(lastV) && i < s.length && s[i] === lastV) {
      const vowelKana = map.get(lastV);
      if (vowelKana) {
        out += vowelKana;
        i += 1;
      }
    } else if (lastV === "o" && i < s.length && s[i] === "u") {
      const uKana = map.get("u");
      if (uKana) {
        out += uKana;
        i += 1;
      }
    }
  }

  return { converted: out, rest: "" };
}

function convertAsciiRomaji(ascii: string, script: KanaScript): string {
  const s = ascii.toLowerCase();
  for (let hold = 0; hold <= s.length; hold++) {
    const prefix = s.slice(0, s.length - hold);
    const suffix = s.slice(s.length - hold);
    if (hold > 0 && !ROMAJI_PREFIXES.has(suffix)) continue;
    const { converted, rest } = parseRomajiChunk(prefix, script, { live: true });
    if (rest === "") return converted + suffix;
  }
  return s;
}

/** Convert katakana to hiragana (basic syllabary). */
export function kataToHira(s: string): string {
  return s.replace(/[\u30a1-\u30f6]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) - 0x60),
  );
}

/** Convert a complete romaji string to kana. */
export function fromRomaji(input: string, script: KanaScript = "hira"): string {
  const { converted, rest } = parseRomajiChunk(input, script);
  return converted + rest;
}

/**
 * Convert latin letters to kana as the user types, leaving any trailing
 * incomplete syllable in romaji and preserving existing Japanese characters.
 */
export function convertRomajiInInput(
  input: string,
  script: KanaScript = "hira",
): string {
  let result = "";
  let ascii = "";

  const flushAscii = () => {
    if (!ascii) return;
    result += convertAsciiRomaji(ascii, script);
    ascii = "";
  };

  for (const ch of input.normalize("NFKC")) {
    if (/[a-zA-Z-]/.test(ch)) {
      ascii += ch;
      continue;
    }
    flushAscii();
    result += ch;
  }

  flushAscii();
  return result;
}

const KANA_RE = /[\u3040-\u309f\u30a0-\u30ff]/;

export function containsKana(s: string): boolean {
  return KANA_RE.test(s);
}
