import { gojuon, dakuten, yoon } from "@/content/kana";

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
