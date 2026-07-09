import { describe, expect, it } from "vitest";
import { cardsById } from "@/content/decks";
import {
  checkFlashcardAnswer,
  flashcardAnswerDisplay,
  flashcardPrompt,
  usesJapaneseInput,
} from "@/lib/flashcard-review";
import {
  checkQuizFillAnswer,
  checkQuizOrderAnswer,
} from "@/lib/quiz-review";
import type { QuizQuestion } from "@/content/types";

function card(id: string) {
  const c = cardsById[id];
  if (!c) throw new Error(`missing card ${id} — content changed?`);
  return c;
}

describe("flashcard answers — kana deck", () => {
  it("accepts romaji and the glyph itself", () => {
    const a = card("kana-hira:あ");
    expect(checkFlashcardAnswer(a, "a")).toBe(true);
    expect(checkFlashcardAnswer(a, "あ")).toBe(true);
    expect(checkFlashcardAnswer(a, "i")).toBe(false);
  });
});

describe("flashcard answers — vocab deck", () => {
  it("accepts kanji, kana reading, and romaji", () => {
    const c = card("vocab:学校");
    expect(checkFlashcardAnswer(c, "学校")).toBe(true);
    expect(checkFlashcardAnswer(c, "がっこう")).toBe(true);
    expect(checkFlashcardAnswer(c, "gakkou")).toBe(true);
    expect(checkFlashcardAnswer(c, "gakko")).toBe(false);
  });

  it("rejects empty input", () => {
    expect(checkFlashcardAnswer(card("vocab:学校"), "   ")).toBe(false);
  });
});

describe("flashcard answers — kanji deck", () => {
  it("accepts the character, on/kun readings, and their romaji", () => {
    const c = card("kanji:日");
    expect(checkFlashcardAnswer(c, "日")).toBe(true);
    expect(checkFlashcardAnswer(c, "ひ")).toBe(true);
    expect(checkFlashcardAnswer(c, "にち")).toBe(true);
    expect(checkFlashcardAnswer(c, "nichi")).toBe(true);
    expect(checkFlashcardAnswer(c, "moon")).toBe(false);
  });
});

describe("flashcard answers — grammar drills", () => {
  it("accepts kanji form, reading, and romaji of a drill answer", () => {
    const c = card("grammar:state-of-being:negative");
    expect(checkFlashcardAnswer(c, "元気じゃない")).toBe(true);
    expect(checkFlashcardAnswer(c, "げんきじゃない")).toBe(true);
    expect(checkFlashcardAnswer(c, "genkijanai")).toBe(true);
    expect(checkFlashcardAnswer(c, "元気だ")).toBe(false);
  });

  it("accepts any listed answer (へ or に)", () => {
    const c = card("grammar:verb-particles:direction-e");
    // The particle へ is typed by its kana spelling "he" (like は is "ha").
    expect(checkFlashcardAnswer(c, "he")).toBe(true);
    expect(checkFlashcardAnswer(c, "へ")).toBe(true);
    expect(checkFlashcardAnswer(c, "ni")).toBe(true);
    expect(checkFlashcardAnswer(c, "de")).toBe(false);
  });

  it("presents the instruction as the prompt label and reveals the answer", () => {
    const c = card("grammar:state-of-being:negative");
    const prompt = flashcardPrompt(c);
    expect(prompt.label).toBe(c.instruction);
    expect(prompt.jp).toBe(true);
    expect(usesJapaneseInput(c)).toBe(true);
    expect(flashcardAnswerDisplay(c)).toBe("元気じゃない");
  });
});

describe("quiz answers", () => {
  const romajiFill: QuizQuestion = {
    kind: "fill",
    prompt: "Type the romaji:",
    promptJp: "ふ",
    answers: ["fu", "hu"],
  };

  const jaFill: QuizQuestion = {
    kind: "fill",
    prompt: "Say 'did not eat':",
    answers: ["食べなかった", "たべなかった"],
  };

  it("romaji fill accepts variants and kana input", () => {
    expect(checkQuizFillAnswer(romajiFill, "fu")).toBe(true);
    expect(checkQuizFillAnswer(romajiFill, "hu")).toBe(true);
    expect(checkQuizFillAnswer(romajiFill, "ふ")).toBe(true);
    expect(checkQuizFillAnswer(romajiFill, "ha")).toBe(false);
  });

  it("Japanese fill accepts romaji, kana, and kanji", () => {
    expect(checkQuizFillAnswer(jaFill, "tabenakatta")).toBe(true);
    expect(checkQuizFillAnswer(jaFill, "たべなかった")).toBe(true);
    expect(checkQuizFillAnswer(jaFill, "食べなかった")).toBe(true);
    expect(checkQuizFillAnswer(jaFill, "tabeta")).toBe(false);
  });

  it("order questions require the exact tile sequence", () => {
    const q: QuizQuestion = {
      kind: "order",
      prompt: "Build it",
      tiles: ["私[わたし]は", "学生[がくせい]", "だ"],
      distractors: ["じゃない"],
    };
    expect(
      checkQuizOrderAnswer(q, ["私[わたし]は", "学生[がくせい]", "だ"]),
    ).toBe(true);
    expect(
      checkQuizOrderAnswer(q, ["学生[がくせい]", "私[わたし]は", "だ"]),
    ).toBe(false);
    expect(checkQuizOrderAnswer(q, ["私[わたし]は", "学生[がくせい]"])).toBe(
      false,
    );
  });
});
