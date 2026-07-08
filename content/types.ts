/**
 * Lesson content model.
 *
 * Japanese strings may carry furigana via the "漢字[かんじ]" convention and
 * inline emphasis via {{...}} (rendered in the Japanese font) and **...** (bold).
 */

export type StageId =
  | "foundations"
  | "basic-grammar"
  | "essential-grammar"
  | "special-expressions"
  | "advanced-topics";

export interface VocabEntry {
  word: string; // may include furigana markup
  reading?: string;
  meaning: string;
  note?: string;
}

export interface ExampleSentence {
  jp: string;
  en: string;
  note?: string;
}

export interface DialogueLine {
  speaker: string;
  jp: string;
  en: string;
}

export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "prose"; text: string }
  | { type: "rule"; title?: string; items: string[] }
  | { type: "examples"; title?: string; items: ExampleSentence[] }
  | { type: "dialogue"; title?: string; lines: DialogueLine[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "note"; text: string }
  | { type: "tip"; text: string }
  | { type: "kana"; script: "hira" | "kata"; caption?: string };

export type QuizQuestion =
  | {
      kind: "mc";
      prompt: string;
      promptJp?: string;
      choices: string[];
      answer: number;
      explanation?: string;
    }
  | {
      kind: "fill";
      prompt: string;
      promptJp?: string;
      answers: string[]; // any accepted (case/space-insensitive)
      explanation?: string;
    }
  | {
      kind: "match";
      prompt: string;
      pairs: { left: string; right: string }[];
    }
  | {
      kind: "order";
      prompt: string;
      /** Tiles in correct order; may carry furigana markup. */
      tiles: string[];
      /** Extra wrong tiles mixed into the bank. */
      distractors?: string[];
      explanation?: string;
    };

export interface Lesson {
  id: string;
  stage: StageId;
  order: number;
  title: string;
  subtitle?: string;
  summary?: string;
  estMinutes?: number;
  vocabulary?: VocabEntry[];
  blocks: ContentBlock[];
  quiz?: QuizQuestion[];
}

export interface StageMeta {
  id: StageId;
  index: number;
  title: string;
  jpTitle: string;
  blurb: string;
  /** Topics shown as a teaser for stages that are not yet authored. */
  teaser?: string[];
}
