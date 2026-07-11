import { describe, expect, it } from "vitest";
import { jlptGrammar, jlptGrammarForLevel } from "@/content/jlpt";
import { lessonsById } from "@/content/lessons";
import { createCard } from "@/lib/srs";
import {
  jlptGrammarProgress,
  jlptKanjiForLevel,
  jlptKanjiProgress,
  SOLID_INTERVAL_DAYS,
} from "@/lib/jlpt";

describe("jlpt grammar data", () => {
  it("maps every taught point to a real, non-recap lesson", () => {
    for (const p of jlptGrammar) {
      if (p.lessonId === null) continue;
      const lesson = lessonsById[p.lessonId];
      expect(lesson, `${p.jp} → ${p.lessonId}`).toBeDefined();
      expect(lesson.recap, `${p.jp} maps to a recap`).toBeFalsy();
    }
  });

  it("has no duplicate points within a level", () => {
    for (const level of [5, 4] as const) {
      const jps = jlptGrammarForLevel(level).map((p) => p.jp);
      expect(new Set(jps).size).toBe(jps.length);
    }
  });

  it("has a substantial list per level, mostly taught", () => {
    for (const level of [5, 4] as const) {
      const points = jlptGrammarForLevel(level);
      const taught = points.filter((p) => p.lessonId !== null);
      expect(points.length).toBeGreaterThanOrEqual(40);
      expect(taught.length / points.length).toBeGreaterThan(0.8);
    }
  });
});

describe("jlptGrammarProgress", () => {
  it("counts nothing for a fresh learner", () => {
    const p = jlptGrammarProgress(5, {});
    expect(p.covered).toBe(0);
    expect(p.missing.length).toBe(p.points.length);
  });

  it("covers every point of a completed lesson", () => {
    const p = jlptGrammarProgress(5, { "verb-particles": { done: true } });
    expect(p.covered).toBe(5); // を・に・へ・で・から/まで
    expect(p.missing.length).toBe(p.points.length - 5);
  });

  it("lists incomplete taught points before course gaps", () => {
    const p = jlptGrammarProgress(5, {});
    const firstGap = p.missing.findIndex((m) => m.lessonId === null);
    expect(firstGap).toBeGreaterThan(0);
    for (const m of p.missing.slice(firstGap)) {
      expect(m.lessonId).toBeNull();
    }
  });
});

describe("jlptKanjiProgress", () => {
  const n5 = jlptKanjiForLevel(5);
  const n4 = jlptKanjiForLevel(4);

  it("splits the kanji set by level", () => {
    expect(n5.length).toBeGreaterThan(100);
    expect(n4.length).toBeGreaterThan(40);
    expect(n5.length + n4.length).toBeGreaterThanOrEqual(220);
  });

  it("counts deck membership from either card, solidity from interval", () => {
    const a = n5[0].char;
    const b = n5[1].char;
    const solidCard = { ...createCard(`kanji:${a}`), intervalDays: SOLID_INTERVAL_DAYS };
    const freshCard = createCard(`kanji-mean:${b}`);
    const progress = jlptKanjiProgress(5, {
      [solidCard.id]: solidCard,
      [freshCard.id]: freshCard,
    });
    expect(progress.total).toBe(n5.length);
    expect(progress.inDeck).toBe(2);
    expect(progress.solid).toBe(1);
  });

  it("counts nothing for a fresh learner", () => {
    expect(jlptKanjiProgress(4, {})).toEqual({
      total: n4.length,
      inDeck: 0,
      solid: 0,
    });
  });
});
