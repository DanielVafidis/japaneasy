import type { Lesson } from "../types";

export const adjectives: Lesson = {
  id: "adjectives",
  stage: "basic-grammar",
  order: 2,
  title: "Adjectives",
  subtitle: "The two types: na-adjectives and i-adjectives",
  summary:
    "How to attach adjectives to nouns and conjugate them for negative and past — including い-adjectives.",
  estMinutes: 16,
  vocabulary: [
    { word: "静か", reading: "しずか", meaning: "quiet (na-adj)" },
    { word: "きれい", reading: "きれい", meaning: "pretty; clean (na-adj)" },
    { word: "高い", reading: "たかい", meaning: "tall; expensive (i-adj)" },
    { word: "高校", reading: "こうこう", meaning: "high school" },
    { word: "人", reading: "ひと", meaning: "person" },
    { word: "いい", reading: "いい", meaning: "good (irregular i-adj)" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Japanese has exactly **two** kinds of adjective, and both conjugate. The good news: na-adjectives behave just like the nouns you already learned.",
    },
    {
      type: "heading",
      text: "Na-adjectives",
    },
    {
      type: "prose",
      text: "A na-adjective attaches to a noun by adding {{な}} (that's where the name comes from). Conjugation is identical to nouns: use じゃない, だった, じゃなかった.",
    },
    {
      type: "examples",
      items: [
        { jp: "静[しず]かな人[ひと]。", en: "A quiet person." },
        { jp: "きれいだ。", en: "Is pretty." },
        { jp: "静[しず]かじゃない。", en: "Is not quiet." },
        { jp: "きれいだった。", en: "Was pretty." },
      ],
    },
    {
      type: "heading",
      text: "I-adjectives",
    },
    {
      type: "prose",
      text: "I-adjectives always end in {{い}}. They attach **directly** to a noun (no な). To conjugate, you change that final い. Importantly, you **never** attach だ to an i-adjective.",
    },
    {
      type: "rule",
      title: "I-adjective conjugation",
      items: [
        "**Attach to noun:** just place it before — {{高い高校}} (an expensive/tall... use carefully)",
        "**Negative:** replace final {{い}} with {{くない}} — {{高い}} → {{高くない}}",
        "**Past:** replace final {{い}} with {{かった}} — {{高い}} → {{高かった}}",
        "**Negative-past:** {{高くない}} → {{高くなかった}}",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "高[たか]い高校[こうこう]。", en: "A tall high school." },
        { jp: "高[たか]くない。", en: "Is not tall/expensive." },
        { jp: "高[たか]かった。", en: "Was tall/expensive." },
        { jp: "高[たか]くなかった。", en: "Was not tall/expensive." },
      ],
    },
    {
      type: "note",
      text: "Two traps: {{いい}} (good) is irregular — it conjugates from its older form {{よい}}: よくない, よかった. And {{きれい}} ends in い but is actually a **na**-adjective (the い is part of the word, not the adjective ending).",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "How does a na-adjective attach to a noun?",
      choices: ["With い", "With な", "With だ", "Directly, nothing added"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "What is the negative of the i-adjective 高い?",
      choices: ["高いじゃない", "高くない", "高かった", "高くなかった"],
      answer: 1,
    },
    {
      kind: "fill",
      prompt: "Put 高い into the past tense ('was expensive'). Type the Japanese:",
      answers: ["高かった", "たかかった"],
      explanation: "Drop い, add かった → 高かった.",
    },
    {
      kind: "mc",
      prompt: "Which statement is TRUE?",
      choices: [
        "You attach だ to i-adjectives.",
        "きれい is an i-adjective.",
        "いい conjugates irregularly as よくない / よかった.",
        "Na-adjectives never conjugate.",
      ],
      answer: 2,
    },
  ],
};
