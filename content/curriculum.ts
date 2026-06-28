import type { Lesson, StageId, StageMeta } from "./types";
import { allLessons, lessonsById } from "./lessons";

export const stages: StageMeta[] = [
  {
    id: "foundations",
    index: 0,
    title: "Foundations",
    jpTitle: "基礎",
    blurb:
      "Read every Japanese sound. Master hiragana, katakana and how kanji works before touching grammar.",
  },
  {
    id: "basic-grammar",
    index: 1,
    title: "Basic Grammar",
    jpTitle: "基本文法",
    blurb:
      "The building blocks: state-of-being, particles, adjectives, and the verb system that powers every sentence.",
  },
  {
    id: "essential-grammar",
    index: 2,
    title: "Essential Grammar",
    jpTitle: "必須文法",
    blurb:
      "Everyday fluency: polite form, the mighty te-form, conditionals, requests, giving and receiving.",
    teaser: [
      "Polite form 〜です／〜ます",
      "The question marker か",
      "Te-form & compound sentences",
      "Potential form",
      "Conditionals と・なら・ば・たら",
      "Must / have to",
      "Desire & suggestions",
      "Giving and receiving",
    ],
  },
  {
    id: "special-expressions",
    index: 3,
    title: "Special Expressions",
    jpTitle: "特別な表現",
    blurb:
      "Add nuance and color: causative & passive, honorific and humble speech, certainty and hearsay.",
    teaser: [
      "Causative & passive verbs",
      "Honorific & humble forms",
      "〜てしまう (unintended actions)",
      "Certainty: かもしれない・でしょう",
      "Similarity & hearsay: よう・みたい・そう・らしい",
      "Easy / hard to do",
    ],
  },
  {
    id: "advanced-topics",
    index: 4,
    title: "Advanced Topics",
    jpTitle: "上級",
    blurb:
      "Polish toward native-level reading: formal expressions, expectation, tendencies and literary grammar.",
    teaser: [
      "Formal である・ではない",
      "はず・べき (should / ought)",
      "でさえ・ですら (even)",
      "〜ざるを得ない",
      "Tendencies: がち・つつ",
      "Advanced volitional",
    ],
  },
];

const stageOrder: Record<StageId, number> = Object.fromEntries(
  stages.map((s) => [s.id, s.index]),
) as Record<StageId, number>;

export function stageMeta(id: StageId): StageMeta {
  return stages.find((s) => s.id === id)!;
}

export function lessonsForStage(id: StageId): Lesson[] {
  return allLessons
    .filter((l) => l.stage === id)
    .sort((a, b) => a.order - b.order);
}

/** All authored lessons in learning order (stage, then within-stage order). */
export function orderedLessons(): Lesson[] {
  return [...allLessons].sort(
    (a, b) => stageOrder[a.stage] - stageOrder[b.stage] || a.order - b.order,
  );
}

export function getLesson(id: string): Lesson | undefined {
  return lessonsById[id];
}

export function adjacentLessons(id: string): {
  prev: Lesson | null;
  next: Lesson | null;
} {
  const ordered = orderedLessons();
  const i = ordered.findIndex((l) => l.id === id);
  return {
    prev: i > 0 ? ordered[i - 1] : null,
    next: i >= 0 && i < ordered.length - 1 ? ordered[i + 1] : null,
  };
}

export function stageProgressIds(id: StageId): string[] {
  return lessonsForStage(id).map((l) => l.id);
}

export { lessonsById, allLessons };
