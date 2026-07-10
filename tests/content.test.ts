import { describe, expect, it } from "vitest";
import { allCards, cardsById } from "@/content/decks";
import { allLessons } from "@/content/lessons";
import { allReadings } from "@/content/readings";
import { checkFlashcardAnswer } from "@/lib/flashcard-review";
import { checkQuizListenAnswer } from "@/lib/quiz-review";
import { stripFurigana, toReading, toRomaji } from "@/lib/japanese";

describe("card catalogue", () => {
  it("has globally unique card ids", () => {
    const seen = new Set<string>();
    for (const c of allCards) {
      expect(seen.has(c.id), `duplicate card id ${c.id}`).toBe(false);
      seen.add(c.id);
    }
  });

  it("every lesson vocabulary entry has a card", () => {
    for (const lesson of allLessons) {
      for (const v of lesson.vocabulary ?? []) {
        const id = `vocab:${stripFurigana(v.word)}`;
        expect(cardsById[id], `${lesson.id}: missing ${id}`).toBeDefined();
      }
    }
  });
});

describe("grammar drills", () => {
  const drilled = allLessons.filter((l) => l.drills?.length);

  it("every grammar-stage lesson has drills (no legacy cards left)", () => {
    const grammarStages = [
      "basic-grammar",
      "essential-grammar",
      "special-expressions",
      "advanced-topics",
    ];
    for (const lesson of allLessons.filter(
      (l) => grammarStages.includes(l.stage) && !l.recap,
    )) {
      expect(
        lesson.drills?.length ?? 0,
        `${lesson.id} has no drills`,
      ).toBeGreaterThan(0);
    }
  });

  it("recap lessons contribute no deck cards", () => {
    const recaps = allLessons.filter((l) => l.recap);
    expect(recaps.length).toBeGreaterThan(0);
    for (const lesson of recaps) {
      expect(cardsById[`grammar:${lesson.id}`]).toBeUndefined();
      for (const id of Object.keys(cardsById)) {
        expect(id.startsWith(`grammar:${lesson.id}:`)).toBe(false);
      }
    }
  });

  it("drill ids are unique within each lesson and well-formed", () => {
    for (const lesson of drilled) {
      const ids = lesson.drills!.map((d) => d.id);
      expect(new Set(ids).size, `${lesson.id}: duplicate drill ids`).toBe(
        ids.length,
      );
      for (const d of lesson.drills!) {
        expect(d.id).toMatch(/^[a-z0-9-]+$/);
        expect(d.prompt.trim().length).toBeGreaterThan(0);
        expect(d.jp.trim().length).toBeGreaterThan(0);
        expect(d.answers.length).toBeGreaterThan(0);
      }
    }
  });

  it("every drill answer passes its own checker as kanji, kana, and romaji", () => {
    for (const lesson of drilled) {
      for (const d of lesson.drills!) {
        const card = cardsById[`grammar:${lesson.id}:${d.id}`];
        expect(card, `${lesson.id}:${d.id} missing card`).toBeDefined();
        for (const answer of d.answers) {
          const plain = stripFurigana(answer);
          const reading = toReading(answer);
          const romaji = toRomaji(answer);
          const label = `${lesson.id}:${d.id} "${answer}"`;
          expect(
            checkFlashcardAnswer(card!, plain),
            `${label} rejects plain "${plain}"`,
          ).toBe(true);
          expect(
            checkFlashcardAnswer(card!, reading),
            `${label} rejects reading "${reading}"`,
          ).toBe(true);
          expect(
            checkFlashcardAnswer(card!, romaji),
            `${label} rejects romaji "${romaji}"`,
          ).toBe(true);
        }
      }
    }
  });
});

describe("kanji & kana data", () => {
  it("kanji characters are unique with sane data", async () => {
    const { kanji } = await import("@/content/kanji");
    const seen = new Set<string>();
    for (const k of kanji) {
      expect(seen.has(k.char), `duplicate kanji ${k.char}`).toBe(false);
      seen.add(k.char);
      expect(k.strokes).toBeGreaterThan(0);
      expect(k.meaning.trim().length).toBeGreaterThan(0);
      expect(k.on.length + k.kun.length).toBeGreaterThan(0);
    }
    expect(kanji.length).toBe(220);
  });

  it("every gojuon kana has stroke counts", async () => {
    const { gojuon } = await import("@/content/kana");
    for (const k of gojuon) {
      expect(k.strokes, `${k.hira} missing strokes`).toBeDefined();
      expect(k.strokes![0]).toBeGreaterThan(0);
      expect(k.strokes![1]).toBeGreaterThan(0);
    }
  });

  it("every gojuon kana has stroke paths matching its stroke counts", async () => {
    const { gojuon } = await import("@/content/kana");
    const { kanaStrokes } = await import("@/content/kana-strokes");
    for (const k of gojuon) {
      for (const [i, glyph] of [k.hira, k.kata].entries()) {
        const paths = kanaStrokes[glyph];
        expect(paths, `${glyph} missing stroke paths`).toBeDefined();
        expect(paths.length, `${glyph} stroke path count`).toBe(k.strokes![i]);
        for (const d of paths) {
          expect(d, `${glyph} path should start with a moveto`).toMatch(/^M/);
        }
      }
    }
  });
});

describe("readings", () => {
  it("have unique ids, paragraphs, and backed glossary cards", () => {
    const ids = new Set<string>();
    for (const r of allReadings) {
      expect(ids.has(r.id), `duplicate reading id ${r.id}`).toBe(false);
      ids.add(r.id);
      expect(r.body.length).toBeGreaterThan(0);
      for (const p of r.body) {
        expect(p.jp.trim().length).toBeGreaterThan(0);
        expect(p.en.trim().length).toBeGreaterThan(0);
      }
      for (const v of r.vocabulary ?? []) {
        const id = `vocab:${stripFurigana(v.word)}`;
        expect(cardsById[id], `${r.id}: missing ${id}`).toBeDefined();
      }
      expect(r.quiz.length).toBeGreaterThan(0);
    }
  });
});

describe("quizzes", () => {
  it("mc answers are in range and order tiles are plural", () => {
    for (const lesson of [...allLessons, ...allReadings]) {
      for (const q of lesson.quiz ?? []) {
        if (q.kind === "mc") {
          expect(
            q.answer,
            `${lesson.id}: mc answer out of range`,
          ).toBeLessThan(q.choices.length);
          expect(q.answer).toBeGreaterThanOrEqual(0);
          expect(new Set(q.choices).size).toBe(q.choices.length);
        }
        if (q.kind === "order") {
          expect(q.tiles.length).toBeGreaterThanOrEqual(2);
        }
        if (q.kind === "fill") {
          expect(q.answers.length).toBeGreaterThan(0);
        }
        if (q.kind === "listen") {
          const label = `${lesson.id}: listen "${q.audio}"`;
          expect(q.audio.trim().length, label).toBeGreaterThan(0);
          expect(
            checkQuizListenAnswer(q, toReading(q.audio)),
            `${label} rejects its own reading`,
          ).toBe(true);
          expect(
            checkQuizListenAnswer(q, toRomaji(q.audio)),
            `${label} rejects its own romaji`,
          ).toBe(true);
        }
      }
    }
  });
});
