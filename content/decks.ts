import { gojuon, kanaOf, type KanaScript } from "./kana";
import { allLessons } from "./lessons";
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
  /** Grammar drills: accepted typed answers (may carry furigana). */
  answers?: string[];
}

export interface DeckMeta {
  id: DeckId;
  title: string;
  jp: string;
  tone: "shu" | "ai" | "matcha" | "gold";
  description: string;
}

export const deckMeta: DeckMeta[] = [
  {
    id: "kana-hira",
    title: "Hiragana",
    jp: "ひらがな",
    tone: "shu",
    description: "Recognise the 46 basic hiragana.",
  },
  {
    id: "kana-kata",
    title: "Katakana",
    jp: "カタカナ",
    tone: "ai",
    description: "Recognise the 46 basic katakana.",
  },
  {
    id: "vocab",
    title: "Vocabulary",
    jp: "単語",
    tone: "matcha",
    description: "Every word introduced across the lessons.",
  },
  {
    id: "grammar",
    title: "Grammar drills",
    jp: "文法",
    tone: "gold",
    description: "Typed pattern drills from the grammar lessons.",
  },
  {
    id: "kanji",
    title: "Kanji",
    jp: "漢字",
    tone: "ai",
    description: "Common kanji with meanings and readings.",
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
  for (const lesson of allLessons) {
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
    .filter((l) => GRAMMAR_STAGES.includes(l.stage))
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

function kanjiDeck(): Card[] {
  return kanji.map((k) => {
    const readings = [k.on.join("・"), k.kun.join("・")]
      .filter(Boolean)
      .join("  /  ");
    const speak = k.example?.reading ?? k.kun[0]?.split(".")[0] ?? k.on[0] ?? k.char;
    return {
      id: `kanji:${k.char}`,
      deck: "kanji" as DeckId,
      front: k.char,
      back: k.meaning,
      reading: readings,
      frontJp: true,
      speak,
    };
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
