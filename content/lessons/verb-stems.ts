import type { Lesson } from "../types";

export const verbStems: Lesson = {
  id: "verb-stems",
  stage: "essential-grammar",
  order: 0,
  title: "Verb Stems",
  subtitle: "The masu-stem — foundation of polite form and much more",
  summary:
    "Learn to extract the verb stem: the form behind ます, compound verbs, and motion patterns like 見に行く.",
  estMinutes: 14,
  vocabulary: [
    { word: "食[た]べる", reading: "たべる", meaning: "to eat (ru-verb)" },
    { word: "泳[およ]ぐ", reading: "およぐ", meaning: "to swim (u-verb)" },
    { word: "怒[おこ]る", reading: "おこる", meaning: "to get angry" },
    { word: "休[やす]み", reading: "やすみ", meaning: "rest; holiday" },
    { word: "見[み]る", reading: "みる", meaning: "to see" },
    { word: "行[い]く", reading: "いく", meaning: "to go" },
    { word: "映画[えいが]", reading: "えいが", meaning: "movie" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Before {{ます}}, there is the **stem** (often called the masu-stem in textbooks). Almost every polite conjugation and many grammar patterns attach to this shape — not to the dictionary form.",
    },
    {
      type: "rule",
      title: "Extracting the stem",
      items: [
        "**Ru-verbs:** drop {{る}}. {{食べる}} → {{食べ}}.",
        "**U-verbs:** change the final /u/ vowel to /i/. {{泳ぐ}} → {{泳ぎ}}, {{怒る}} → {{怒り}}.",
        "**Exceptions:** {{する}} → {{し}}, {{来る}} → {{来}} (き).",
      ],
    },
    {
      type: "note",
      text: "Some nouns are really verb stems used as words: {{休み}} (rest), {{怒り}} (anger). You cannot turn every verb into a noun this way — {{飲み}} as a standalone noun is wrong.",
    },
    {
      type: "heading",
      text: "Stem + motion: purpose",
    },
    {
      type: "prose",
      text: "A very common pattern combines the stem with {{に}} and a motion verb — usually {{行く}} or {{来る}} — to mean **go/come in order to do** something.",
    },
    {
      type: "examples",
      items: [
        { jp: "週末[しゅうまつ]、友達[ともだち]に会[あ]いに行[い]く。", en: "On the weekend, (I) will go to meet a friend." },
        { jp: "日本[にほん]に勉強[べんきょう]しに来[き]た。", en: "Came to Japan to study." },
      ],
    },
    {
      type: "tip",
      text: "{{見に}} is the stem {{見}} + target particle {{に}} — 'for the purpose of seeing'. The full {{ます}} form comes in the next lesson.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Stem of 食べる?",
      choices: ["食べ", "食べり", "食べます", "食べない"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Stem of する?",
      choices: ["す", "し", "して", "される"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Go to see a movie tomorrow」 — pattern?",
      choices: ["見るに行く", "見に行く", "見て行く", "見ますに行く"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Stem of 泳ぐ?",
      choices: ["泳ぎ", "泳ぐ", "泳い", "泳げ"],
      answer: 0,
    },
    {
      kind: "order",
      prompt: "Build: 'I go to play with a friend'",
      tiles: ["友達[ともだち]と", "遊[あそ]びに", "行[い]く"],
      distractors: ["遊[あそ]んで"],
      explanation: "Stem + に + motion verb = go in order to do: 遊びに行く.",
    },
  ],
  drills: [
    { id: "stem-ru", prompt: "Extract the stem", jp: "食[た]べる", answers: ["食[た]べ"] },
    { id: "stem-gu", prompt: "Extract the stem", jp: "泳[およ]ぐ", answers: ["泳[およ]ぎ"] },
    { id: "stem-ku", prompt: "Extract the stem", jp: "行[い]く", answers: ["行[い]き"] },
    { id: "stem-miru", prompt: "Extract the stem", jp: "見[み]る", answers: ["見[み]"] },
    { id: "stem-suru", prompt: "Extract the stem — exception", jp: "する", answers: ["し"] },
  ],
};
