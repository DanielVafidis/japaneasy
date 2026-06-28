import type { Lesson } from "../types";

export const introduction: Lesson = {
  id: "introduction",
  stage: "foundations",
  order: 0,
  title: "Welcome — A Japanese approach",
  subtitle: "How JapanEasy teaches, and how to get the most from it",
  summary:
    "Why we learn Japanese from a Japanese point of view, and the habits that make it stick.",
  estMinutes: 5,
  blocks: [
    {
      type: "prose",
      text: "Most textbooks try to teach you Japanese with English — how to say an English phrase in Japanese. The trouble is that Japanese works differently from English in almost every way, so this creates a tangle of rules and exceptions. JapanEasy follows the approach of *A Guide to Japanese Grammar*: we explain Japanese **from a Japanese point of view**, in an order that makes sense in Japanese.",
    },
    {
      type: "prose",
      text: "That means building a solid foundation from the ground up. The hardest, most fundamental ideas come first — but once they click, everything that follows fits neatly on top. Japanese is wonderfully consistent: learn the core conjugation rules and most grammar simply reuses them.",
    },
    {
      type: "heading",
      text: "Four habits that work",
    },
    {
      type: "rule",
      title: "Practice this way",
      items: [
        "**Learn kana first.** Don't lean on romaji — it quietly slows your reading forever.",
        "**Learn by example.** Don't try to convert English thoughts word-by-word; absorb how ideas are actually expressed in Japanese.",
        "**Review little and often.** A few minutes daily beats marathon sessions. Spaced repetition does the heavy lifting.",
        "**Listen from day one.** Mimic native pitch and rhythm with the audio button next to every sentence.",
      ],
    },
    {
      type: "tip",
      text: "See the 「」 brackets in examples? Those are Japanese quotation marks. You will meet them constantly.",
    },
    {
      type: "note",
      text: "Throughout the lessons you can toggle furigana (the small reading above kanji) and romaji on or off using the reading controls. Try to wean yourself off romaji as soon as you can.",
    },
    {
      type: "prose",
      text: "Ready? Your first real task is the writing system. Let's start with **hiragana**.",
    },
  ],
};
