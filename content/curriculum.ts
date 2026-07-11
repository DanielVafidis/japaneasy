import type { Lesson, StageId, StageMeta } from "./types";
import { allLessons, lessonsById } from "./lessons";

export const stages: StageMeta[] = [
  {
    id: "foundations",
    index: 0,
    title: "Writing System",
    jpTitle: "文字",
    blurb:
      "Read every Japanese sound. Master hiragana, katakana and how kanji works before touching grammar.",
  },
  {
    id: "n5",
    index: 1,
    title: "N5 — Foundations",
    jpTitle: "基礎",
    blurb:
      "Build confidence making basic sentences and surviving simple daily situations: particles, conjugation, te-form, and existence.",
    teaser: [
      "Basic sentence structure (は・が・です／だ)",
      "Core particles (を・に・で・と・も・から／まで・へ)",
      "Verb & adjective conjugation",
      "Te-form introduction",
      "あります／います & location",
      "Questions, numbers & time",
    ],
  },
  {
    id: "n4",
    index: 2,
    title: "N4 — Expansion",
    jpTitle: "発展",
    blurb:
      "Handle everyday situations and connect actions: te-form mastery, conditionals, giving & receiving, potential, and suggestions.",
    teaser: [
      "Te-form mastery (てもいい・ている・requests)",
      "Basic conditionals (と・たら)",
      "Giving & receiving",
      "Potential form",
      "Volitional & suggestions (ましょう・つもり)",
      "Comparisons & light passive/causative",
    ],
  },
  {
    id: "n3",
    index: 3,
    title: "N3 — Nuance",
    jpTitle: "機微",
    blurb:
      "Express thoughts, reasons, and conditions with natural flow: aspect, nuanced conditionals, hearsay, and basic keigo.",
    teaser: [
      "Advanced te-form & aspect (てある・ておく・てしまう)",
      "Conditionals with nuance (ば・なら・ても)",
      "Reasons & causes (から／ので・ため・せいで)",
      "Opinions, hearsay & speculation",
      "Full passive & causative",
      "Basic honorific & humble language",
    ],
  },
  {
    id: "n2",
    index: 4,
    title: "N2 — Naturalness",
    jpTitle: "自然",
    blurb:
      "Sound natural on nuanced topics: subtle contrasts, advanced conditionals, inference, concession, and business keigo.",
    teaser: [
      "Subtle differences between similar points",
      "Advanced conditionals & hypotheticals",
      "Speculation, certainty & inference",
      "Concession & contrast",
      "Formal vs casual register",
      "Sophisticated honorific & humble language",
    ],
  },
  {
    id: "n1",
    index: 5,
    title: "N1 — Mastery",
    jpTitle: "習得",
    blurb:
      "Full control over nuance, tone, and advanced expression: literary forms, counterfactuals, and integrated multi-clause Japanese.",
    teaser: [
      "Highly nuanced expressions (かねない・ざるを得ない)",
      "Advanced hypothetical & counterfactual",
      "Sophisticated emotion & reflection",
      "Formal written & literary Japanese",
      "Pragmatic & cultural nuances",
      "Complex integrated structures",
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
