import { describe, expect, it } from "vitest";
import { allCards, cardsById } from "@/content/decks";
import { allLessons } from "@/content/lessons";
import { checkFlashcardAnswer } from "@/lib/flashcard-review";
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
    for (const lesson of allLessons.filter((l) =>
      grammarStages.includes(l.stage),
    )) {
      expect(
        lesson.drills?.length ?? 0,
        `${lesson.id} has no drills`,
      ).toBeGreaterThan(0);
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

describe("quizzes", () => {
  it("mc answers are in range and order tiles are plural", () => {
    for (const lesson of allLessons) {
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
      }
    }
  });
});
