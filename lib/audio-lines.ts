/**
 * The complete inventory of everything the app speaks aloud — groundwork for
 * natural audio (roadmap 2.5).
 *
 * Every distinct utterance gets a stable id derived from the spoken text, so
 * recorded clips can be named `<id>.mp3` (future lookup: public/audio/) and
 * survive content reordering. Two texts that sound identical (same reading,
 * katakana folded to hiragana) share one id and therefore one clip.
 *
 * `npm run audio:manifest` regenerates content/audio-manifest.json; a test
 * fails when the committed manifest drifts from the content.
 */

import { allKana, kanaOf } from "@/content/kana";
import { kanji, kanjiSpeak } from "@/content/kanji";
import { allLessons } from "@/content/lessons";
import { allReadings } from "@/content/readings";
import type { QuizQuestion, VocabEntry } from "@/content/types";
import { kataToHira, stripFurigana, toReading } from "@/lib/japanese";

export interface AudioLine {
  /** Stable id — hash of the spoken text. Clip filename: <id>.mp3 */
  id: string;
  /** Exactly what the speech engine is given (kana wherever furigana exists). */
  speak: string;
  /** Display form, when it differs from `speak`. */
  display?: string;
  /** English meaning/translation, when the content has one. */
  en?: string;
  /** Every place the line is spoken, e.g. "lesson:polite-form:example:3". */
  sources: string[];
}

/** The utterance the speech engine receives for a content string. */
export function audioUtterance(text: string): string {
  return toReading(text).normalize("NFKC").trim();
}

const FNV_OFFSET = 0x811c9dc5;
const FNV_PRIME = 0x01000193;

function fnv1a32(bytes: Uint8Array, seed: number): number {
  let hash = seed >>> 0;
  for (const b of bytes) {
    hash ^= b;
    hash = Math.imul(hash, FNV_PRIME) >>> 0;
  }
  return hash >>> 0;
}

/**
 * Stable clip id: two seeded 32-bit FNV-1a hashes of the UTF-8 utterance,
 * katakana folded to hiragana (same sound → same clip). 16 hex chars; the
 * collector throws on the (astronomically unlikely) collision.
 */
export function audioId(text: string): string {
  const bytes = new TextEncoder().encode(kataToHira(audioUtterance(text)));
  const a = fnv1a32(bytes, FNV_OFFSET);
  const b = fnv1a32(bytes, FNV_OFFSET ^ 0x5bd1e995);
  return (
    a.toString(16).padStart(8, "0") + b.toString(16).padStart(8, "0")
  );
}

interface Seed {
  /** Raw content string (may carry furigana markup). */
  text: string;
  display?: string;
  en?: string;
  source: string;
}

function vocabSeeds(vocabulary: VocabEntry[] | undefined): Seed[] {
  return (vocabulary ?? []).map((v) => ({
    text: v.reading ?? v.word,
    display: stripFurigana(v.word),
    en: v.meaning,
    source: `vocab:${stripFurigana(v.word)}`,
  }));
}

function listenSeeds(quiz: QuizQuestion[] | undefined, scope: string): Seed[] {
  const seeds: Seed[] = [];
  for (const q of quiz ?? []) {
    if (q.kind !== "listen") continue;
    seeds.push({ text: q.audio, source: `${scope}:listen:${seeds.length + 1}` });
  }
  return seeds;
}

function collectSeeds(): Seed[] {
  const seeds: Seed[] = [];

  // Kana glyphs — spoken raw in the chart, quiz, and writer.
  for (const script of ["hira", "kata"] as const) {
    for (const c of allKana) {
      const glyph = kanaOf(c, script);
      seeds.push({ text: glyph, en: c.romaji, source: `kana:${glyph}` });
    }
  }

  // Kanji — cards, browser detail, and writer all speak kanjiSpeak().
  for (const k of kanji) {
    seeds.push({
      text: kanjiSpeak(k),
      display: k.example?.word ?? k.char,
      en: k.example?.meaning ?? k.meaning,
      source: `kanji:${k.char}`,
    });
  }

  // Lessons — vocabulary, example sentences, dialogues, drills, dictation.
  for (const lesson of allLessons) {
    seeds.push(...vocabSeeds(lesson.vocabulary));

    let example = 0;
    let dialogue = 0;
    for (const block of lesson.blocks) {
      if (block.type === "examples") {
        for (const ex of block.items) {
          example += 1;
          seeds.push({
            text: ex.jp,
            en: ex.en,
            source: `lesson:${lesson.id}:example:${example}`,
          });
        }
      } else if (block.type === "dialogue") {
        for (const line of block.lines) {
          dialogue += 1;
          seeds.push({
            text: line.jp,
            en: line.en,
            source: `lesson:${lesson.id}:dialogue:${dialogue}`,
          });
        }
      }
    }

    for (const d of lesson.drills ?? []) {
      seeds.push({
        text: d.answers[0],
        source: `drill:${lesson.id}:${d.id}`,
      });
    }

    seeds.push(...listenSeeds(lesson.quiz, `lesson:${lesson.id}`));
  }

  // Readings — every line, key phrases, glossary words, dictation.
  for (const reading of allReadings) {
    reading.body.forEach((p, i) => {
      seeds.push({
        text: p.jp,
        en: p.en,
        source: `reading:${reading.id}:line:${i + 1}`,
      });
    });
    (reading.phrases ?? []).forEach((ph, i) => {
      seeds.push({
        text: ph.jp,
        en: ph.en,
        source: `reading:${reading.id}:phrase:${i + 1}`,
      });
    });
    seeds.push(...vocabSeeds(reading.vocabulary));
    seeds.push(...listenSeeds(reading.quiz, `reading:${reading.id}`));
  }

  return seeds;
}

/**
 * All lines the app can speak, deduplicated by id (first occurrence wins for
 * speak/display/en; sources accumulate). Order follows the content: kana,
 * kanji, lessons in course order, then readings.
 */
export function collectAudioLines(): AudioLine[] {
  const byId = new Map<string, AudioLine>();
  const keyById = new Map<string, string>();

  for (const seed of collectSeeds()) {
    const speak = audioUtterance(seed.text);
    if (!speak) continue;
    const id = audioId(seed.text);
    const key = kataToHira(speak);

    const existing = byId.get(id);
    if (existing) {
      if (keyById.get(id) !== key) {
        throw new Error(
          `audio id collision: "${existing.speak}" vs "${speak}" (${id})`,
        );
      }
      if (!existing.sources.includes(seed.source)) {
        existing.sources.push(seed.source);
      }
      continue;
    }

    const display = seed.display ?? stripFurigana(seed.text);
    byId.set(id, {
      id,
      speak,
      ...(display !== speak ? { display } : {}),
      ...(seed.en ? { en: seed.en } : {}),
      sources: [seed.source],
    });
    keyById.set(id, key);
  }

  return [...byId.values()];
}
