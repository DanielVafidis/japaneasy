/** JLPT N5/N4 coverage math for the progress view (roadmap 3.5). */

import {
  jlptGrammarForLevel,
  type JlptGrammarPoint,
  type JlptLevel,
} from "@/content/jlpt";
import { kanji, type Kanji } from "@/content/kanji";
import type { SrsState } from "@/lib/srs";

/** A card interval this long (either kanji card) counts the kanji as solid. */
export const SOLID_INTERVAL_DAYS = 7;

export interface JlptGrammarProgress {
  points: JlptGrammarPoint[];
  /** Points whose lesson exists in the course. */
  inCourse: number;
  /** Points whose lesson the learner has completed. */
  covered: number;
  /** Taught points not yet completed, then the not-in-course gaps. */
  missing: JlptGrammarPoint[];
}

export interface JlptKanjiProgress {
  total: number;
  /** Kanji with at least one card in the learner's decks. */
  inDeck: number;
  /** Kanji with a card interval of SOLID_INTERVAL_DAYS or more. */
  solid: number;
}

export function jlptKanjiForLevel(level: JlptLevel): Kanji[] {
  return kanji.filter((k) => k.jlpt === level);
}

export function jlptGrammarProgress(
  level: JlptLevel,
  completedLessons: Record<string, unknown>,
): JlptGrammarProgress {
  const points = jlptGrammarForLevel(level);
  const done = (p: JlptGrammarPoint) =>
    p.lessonId !== null && p.lessonId in completedLessons;
  return {
    points,
    inCourse: points.filter((p) => p.lessonId !== null).length,
    covered: points.filter(done).length,
    missing: [
      ...points.filter((p) => p.lessonId !== null && !done(p)),
      ...points.filter((p) => p.lessonId === null),
    ],
  };
}

export function jlptKanjiProgress(
  level: JlptLevel,
  cards: Record<string, SrsState>,
): JlptKanjiProgress {
  const set = jlptKanjiForLevel(level);
  let inDeck = 0;
  let solid = 0;
  for (const k of set) {
    const states = [cards[`kanji:${k.char}`], cards[`kanji-mean:${k.char}`]];
    if (states.every((s) => !s)) continue;
    inDeck += 1;
    if (states.some((s) => s && s.intervalDays >= SOLID_INTERVAL_DAYS)) {
      solid += 1;
    }
  }
  return { total: set.length, inDeck, solid };
}
