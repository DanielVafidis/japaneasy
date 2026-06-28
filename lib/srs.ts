/**
 * A lightweight SM-2 inspired spaced-repetition scheduler.
 * State is intentionally tiny so it serialises cleanly into localStorage.
 */

export type Grade = "again" | "hard" | "good" | "easy";

export interface SrsState {
  id: string;
  reps: number;
  lapses: number;
  ease: number; // ease factor, 1.3 .. ~3.0
  intervalDays: number;
  due: number; // epoch ms
  added: number; // epoch ms
  lastReviewed: number | null;
}

const DAY = 24 * 60 * 60 * 1000;
const MIN_EASE = 1.3;
const START_EASE = 2.5;

export function createCard(id: string, now = Date.now()): SrsState {
  return {
    id,
    reps: 0,
    lapses: 0,
    ease: START_EASE,
    intervalDays: 0,
    due: now, // due immediately so it enters the "new" queue
    added: now,
    lastReviewed: null,
  };
}

/** Apply a review grade and return the next scheduling state. */
export function schedule(card: SrsState, grade: Grade, now = Date.now()): SrsState {
  let { ease, intervalDays, reps, lapses } = card;

  if (grade === "again") {
    lapses += 1;
    reps = 0;
    ease = Math.max(MIN_EASE, ease - 0.2);
    intervalDays = 0; // relearn — due again very soon
    return {
      ...card,
      ease,
      reps,
      lapses,
      intervalDays,
      due: now + 60 * 1000, // ~1 minute
      lastReviewed: now,
    };
  }

  // Successful recall
  if (reps === 0) {
    intervalDays = grade === "easy" ? 3 : grade === "hard" ? 0.5 : 1;
  } else if (reps === 1) {
    intervalDays = grade === "easy" ? 6 : grade === "hard" ? 3 : 4;
  } else {
    const factor =
      grade === "hard" ? 1.2 : grade === "easy" ? ease * 1.3 : ease;
    intervalDays = Math.round(intervalDays * factor * 10) / 10;
  }

  if (grade === "hard") ease = Math.max(MIN_EASE, ease - 0.15);
  if (grade === "easy") ease = ease + 0.15;

  reps += 1;
  intervalDays = Math.max(0.5, intervalDays);

  return {
    ...card,
    ease: Math.round(ease * 100) / 100,
    reps,
    lapses,
    intervalDays,
    due: now + intervalDays * DAY,
    lastReviewed: now,
  };
}

export function isDue(card: SrsState, now = Date.now()): boolean {
  return card.due <= now;
}

/** Human-friendly label of when a grade would next surface the card. */
export function previewInterval(card: SrsState, grade: Grade): string {
  if (grade === "again") return "1m";
  const next = schedule(card, grade);
  const d = next.intervalDays;
  if (d < 1) return `${Math.round(d * 24)}h`;
  if (d < 30) return `${Math.round(d)}d`;
  if (d < 365) return `${Math.round(d / 30)}mo`;
  return `${Math.round(d / 365)}y`;
}

export function dueCount(cards: SrsState[], now = Date.now()): number {
  return cards.filter((c) => isDue(c, now)).length;
}
