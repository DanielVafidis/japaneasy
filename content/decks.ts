import { gojuon, kanaOf, type KanaScript } from "./kana";
import { allLessons } from "./lessons";
import { allReadings } from "./readings";
import { kanji } from "./kanji";
import { stripFurigana, toReading } from "@/lib/japanese";
import type { StageId } from "./types";

export type DeckId = "kana-hira" | "kana-kata" | "vocab" | "grammar" | "kanji";

export interface Card {
  id: string;
  deck: DeckId;
  front: string;
  back: string;
  reading?: string;
  /** Render the front using the Japanese text renderer. */
  frontJp?: boolean;
  /** Japanese string to pronounce (if any). */
  speak?: string;
  /** Grammar drills: the instruction shown above the question. */
  instruction?: string;
  /** Grammar drills / kanji recognition: accepted typed answers. */
  answers?: string[];
  /** Kanji cards: an example word shown with the answer. */
  example?: { jp: string; reading: string; en: string };
  /** Kanji cards: component hint shown with the answer. */
  parts?: string;
}

export interface DeckMeta {
  id: DeckId;
  title: string;
  jp: string;
  tone: "shu" | "ai" | "matcha" | "gold";
  description: string;
  /** Where this deck's material is learned (cards are added from there). */
  learnHref: string;
  learnLabel: string;
}

export const deckMeta: DeckMeta[] = [
  {
    id: "kana-hira",
    title: "Hiragana",
    jp: "ひらがな",
    tone: "shu",
    description: "Recognise the 46 basic hiragana.",
    learnHref: "/kana",
    learnLabel: "Learn kana",
  },
  {
    id: "kana-kata",
    title: "Katakana",
    jp: "カタカナ",
    tone: "ai",
    description: "Recognise the 46 basic katakana.",
    learnHref: "/kana",
    learnLabel: "Learn kana",
  },
  {
    id: "vocab",
    title: "Vocabulary",
    jp: "単語",
    tone: "matcha",
    description: "Every word introduced across the lessons.",
    learnHref: "/learn",
    learnLabel: "Take lessons",
  },
  {
    id: "grammar",
    title: "Grammar drills",
    jp: "文法",
    tone: "gold",
    description: "Typed pattern drills from the grammar lessons.",
    learnHref: "/learn",
    learnLabel: "Take lessons",
  },
  {
    id: "kanji",
    title: "Kanji",
    jp: "漢字",
    tone: "ai",
    description: "Common kanji with meanings and readings.",
    learnHref: "/kanji",
    learnLabel: "Explore kanji",
  },
];

function kanaDeck(script: KanaScript): Card[] {
  const deck: DeckId = script === "hira" ? "kana-hira" : "kana-kata";
  return gojuon.map((c) => {
    const glyph = kanaOf(c, script);
    return {
      id: `${deck}:${glyph}`,
      deck,
      front: glyph,
      back: c.romaji,
      frontJp: true,
      speak: glyph,
    };
  });
}

function vocabDeck(): Card[] {
  const seen = new Set<string>();
  const cards: Card[] = [];
  const sources = [...allLessons, ...allReadings];
  for (const lesson of sources) {
    for (const v of lesson.vocabulary ?? []) {
      const plain = stripFurigana(v.word);
      const id = `vocab:${plain}`;
      if (seen.has(id)) continue;
      seen.add(id);
      cards.push({
        id,
        deck: "vocab",
        front: v.word,
        back: v.meaning,
        reading: v.reading ?? toReading(v.word),
        frontJp: true,
        speak: v.reading ?? toReading(v.word),
      });
    }
  }
  return cards;
}

const GRAMMAR_STAGES: StageId[] = [
  "basic-grammar",
  "essential-grammar",
  "special-expressions",
  "advanced-topics",
];

function grammarDeck(): Card[] {
  return allLessons
    .filter((l) => GRAMMAR_STAGES.includes(l.stage) && !l.recap)
    .flatMap((l) => {
      // Authored pattern drills; lessons without them keep the legacy
      // title→summary card until they get a drill pass.
      if (l.drills?.length) {
        return l.drills.map((d) => ({
          id: `grammar:${l.id}:${d.id}`,
          deck: "grammar" as DeckId,
          front: d.jp,
          back: stripFurigana(d.answers[0]),
          frontJp: true,
          instruction: d.prompt,
          answers: d.answers,
          speak: toReading(d.answers[0]),
        }));
      }
      return [
        {
          id: `grammar:${l.id}`,
          deck: "grammar" as DeckId,
          front: l.title,
          back: l.summary ?? l.subtitle ?? "",
        },
      ];
    });
}

/** Meaning alternatives accepted for kanji recognition ("day; sun" → day, sun). */
function meaningAnswers(meaning: string): string[] {
  const out = new Set<string>([meaning]);
  for (const part of meaning.split(/[;,/]/)) {
    const alt = part.trim();
    if (alt) {
      out.add(alt);
      const noParens = alt.replace(/\(.*?\)/g, "").trim();
      if (noParens) out.add(noParens);
    }
  }
  return [...out];
}

function kanjiDeck(): Card[] {
  return kanji.flatMap((k) => {
    const readings = [k.on.join("・"), k.kun.join("・")]
      .filter(Boolean)
      .join("  /  ");
    const speak = k.example?.reading ?? k.kun[0]?.split(".")[0] ?? k.on[0] ?? k.char;
    const example = k.example
      ? { jp: k.example.word, reading: k.example.reading, en: k.example.meaning }
      : undefined;
    return [
      // Recall: see the meaning, type the character or a reading.
      {
        id: `kanji:${k.char}`,
        deck: "kanji" as DeckId,
        front: k.char,
        back: k.meaning,
        reading: readings,
        frontJp: true,
        speak,
        example,
        parts: k.parts,
      },
      // Recognition: see the character, type the meaning.
      {
        id: `kanji-mean:${k.char}`,
        deck: "kanji" as DeckId,
        front: k.char,
        back: k.meaning,
        reading: readings,
        frontJp: true,
        speak,
        answers: meaningAnswers(k.meaning),
        example,
        parts: k.parts,
      },
    ];
  });
}

export const allCards: Card[] = [
  ...kanaDeck("hira"),
  ...kanaDeck("kata"),
  ...vocabDeck(),
  ...grammarDeck(),
  ...kanjiDeck(),
];

export const cardsById: Record<string, Card> = Object.fromEntries(
  allCards.map((c) => [c.id, c]),
);

export function cardsForDeck(id: DeckId): Card[] {
  return allCards.filter((c) => c.deck === id);
}

export function getCard(id: string): Card | undefined {
  return cardsById[id];
}
