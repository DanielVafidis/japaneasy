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
    }
  | {
      kind: "listen";
      prompt: string;
      /** Spoken via TTS, never shown before answering; may carry furigana. */
      audio: string;
      /** Accepted transcriptions; defaults to the audio text itself. */
      answers?: string[];
      explanation?: string;
    };

/**
 * A typed grammar pattern drill (SRS card in the Grammar deck).
 * The learner sees `prompt` + `jp` and types one of `answers`
 * (romaji converts live; furigana in answers also accepts the reading).
 */
export interface GrammarDrill {
  /** Stable per-lesson id (kebab-case) — part of the SRS card id. */
  id: string;
  /** Short instruction, e.g. "Make it negative" or "Fill the particle". */
  prompt: string;
  /** Japanese shown as the question; may carry furigana. Use ◯ for a gap. */
  jp: string;
  /** Accepted answers; the first is shown as the correct answer. */
  answers: string[];
}

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
  /** Pattern drills for the Grammar deck (replaces the title→summary card). */
  drills?: GrammarDrill[];
}

export interface ReadingParagraph {
  jp: string;
  en: string;
}

/**
 * A graded reading: a short passage written with grammar/vocabulary taught
 * up to its stage, plus a comprehension quiz. New words go in `vocabulary`
 * (they become flashcards like lesson vocab).
 */
export interface Reading {
  id: string;
  stage: StageId;
  order: number;
  title: string;
  /** Japanese title; may carry furigana. */
  jpTitle: string;
  summary: string;
  estMinutes?: number;
  body: ReadingParagraph[];
  vocabulary?: VocabEntry[];
  quiz: QuizQuestion[];
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
