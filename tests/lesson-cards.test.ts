import { describe, expect, it } from "vitest";
import { getLesson } from "@/content/curriculum";
import {
  grammarCardIdsForLesson,
  practiceCard,
  quizMissCardIds,
  vocabCardIdsForLesson,
} from "@/lib/lesson-cards";

describe("vocabCardIdsForLesson", () => {
  it("maps every vocabulary word to a stripped id", () => {
    const ids = vocabCardIdsForLesson("past-tense");
    expect(ids).toContain("vocab:食べる");
    expect(ids).toHaveLength(getLesson("past-tense")!.vocabulary!.length);
  });

  it("returns empty for lessons without vocabulary", () => {
    expect(vocabCardIdsForLesson("introduction")).toEqual([]);
    expect(vocabCardIdsForLesson("nope")).toEqual([]);
  });
});

describe("grammarCardIdsForLesson", () => {
  it("returns one id per drill", () => {
    const ids = grammarCardIdsForLesson("past-tense");
    expect(ids).toHaveLength(getLesson("past-tense")!.drills!.length);
    expect(ids).toContain("grammar:past-tense:iku-past");
  });

  it("returns empty for unknown lessons", () => {
    expect(grammarCardIdsForLesson("nope")).toEqual([]);
  });
});

describe("quizMissCardIds", () => {
  const lesson = getLesson("past-tense")!;

  it("matches vocabulary in prompts and correct answers, never distractors", () => {
    // Q3: prompt "Which is the irregular past tense?", correct "行く → 行った",
    // distractors mention 聞く / 話す / 泳ぐ.
    const q3 = lesson.quiz![2];
    const ids = quizMissCardIds("past-tense", [q3]);
    expect(ids).toContain("vocab:行く");
    expect(ids).not.toContain("vocab:聞く");
    expect(ids).not.toContain("vocab:話す");
  });

  it("includes the lesson's grammar drills", () => {
    const ids = quizMissCardIds("past-tense", [lesson.quiz![0]]);
    for (const id of grammarCardIdsForLesson("past-tense")) {
      expect(ids).toContain(id);
    }
  });

  it("is empty with no misses", () => {
    expect(quizMissCardIds("past-tense", [])).toEqual([]);
  });
});

describe("practiceCard", () => {
  it("builds an ephemeral vocab card", () => {
    const card = practiceCard({
      word: "学校[がっこう]",
      reading: "がっこう",
      meaning: "school",
    });
    expect(card.id).toBe("practice:学校");
    expect(card.deck).toBe("vocab");
    expect(card.front).toBe("学校[がっこう]");
    expect(card.speak).toBe("がっこう");
  });
});
