import type { Lesson } from "../types";

export const kanjiIntro: Lesson = {
  id: "kanji-intro",
  stage: "foundations",
  order: 3,
  title: "How Kanji works",
  subtitle: "Chinese characters, readings, and why they exist",
  summary:
    "What kanji are, on'yomi vs kun'yomi, okurigana, and a sane strategy for learning them.",
  estMinutes: 12,
  vocabulary: [
    { word: "力", reading: "ちから", meaning: "power, strength (kun reading)" },
    { word: "能力", reading: "のうりょく", meaning: "ability (on reading)" },
    { word: "食[た]べる", reading: "たべる", meaning: "to eat" },
  ],
  blocks: [
    {
      type: "prose",
      text: "In Japanese, nouns and the stems of verbs and adjectives are mostly written with **kanji** — characters borrowed from Chinese. There are tens of thousands, but only about **2,000** cover over 95% of everyday text. Because Japanese has no spaces, kanji also help your eye find where one word ends and the next begins.",
    },
    {
      type: "prose",
      text: "JapanEasy introduces kanji from the very beginning, paired with vocabulary. Spreading the work out over a long time — reviewing a character every so often until it sticks — is far easier than cramming thousands of them later.",
    },
    {
      type: "heading",
      text: "Two kinds of reading",
    },
    {
      type: "rule",
      title: "On'yomi vs Kun'yomi",
      items: [
        "**音読み (on'yomi)** — the reading derived from Chinese. Usually used when a kanji appears inside a compound word.",
        "**訓読み (kun'yomi)** — the native Japanese reading. Usually used when a kanji stands alone.",
      ],
    },
    {
      type: "examples",
      title: "Same character, different reading",
      items: [
        { jp: "力[ちから]", en: "power — kun reading, standing alone" },
        { jp: "能力[のうりょく]", en: "ability — on reading, inside a compound" },
      ],
    },
    {
      type: "heading",
      text: "Okurigana",
    },
    {
      type: "prose",
      text: "Verbs and adjectives trail kana after the kanji (called okurigana). This lets the kanji keep one stable reading while the word conjugates: {{食べる}} (to eat) becomes {{食べた}} (ate) — the {{食}} never changes.",
    },
    {
      type: "tip",
      text: "You don't need to memorise readings in the abstract. Learn the whole word, and the readings come for free. Look characters up on jisho.org for stroke order and meanings.",
    },
    {
      type: "note",
      text: "The handy mark {{々}} just repeats the previous kanji: 時時 is written 時々.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Roughly how many kanji cover ~95% of everyday written Japanese?",
      choices: ["About 200", "About 2,000", "About 20,000", "All 40,000+"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "A kanji standing alone (like 力 = ちから) usually takes which reading?",
      choices: ["On'yomi (Chinese)", "Kun'yomi (Japanese)", "Both at once", "Neither"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "What is okurigana?",
      choices: [
        "A type of kanji",
        "Kana trailing a kanji that allow the word to conjugate",
        "The Chinese reading",
        "Japanese quotation marks",
      ],
      answer: 1,
    },
  ],
};
