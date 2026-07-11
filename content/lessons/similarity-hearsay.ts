import type { Lesson } from "../types";

export const similarityHearsay: Lesson = {
  id: "similarity-hearsay",
  stage: "special-expressions",
  order: 6,
  title: "Similarity & Hearsay",
  subtitle: "よう · みたい · そう · らしい",
  summary:
    "Four look-alike patterns for 'seems like', 'looks like', and 'I heard that' — each with different evidence rules.",
  estMinutes: 20,
  vocabulary: [
    { word: "雨[あめ]", reading: "あめ", meaning: "rain" },
    { word: "便利[べんり]", reading: "べんり", meaning: "convenient" },
    { word: "喧[や]嘩[か]", reading: "けんか", meaning: "quarrel; fight" },
    { word: "伝[つた]える", reading: "つたえる", meaning: "to convey" },
    { word: "春[はる]", reading: "はる", meaning: "spring" },
    { word: "忙[いそが]しい", reading: "いそがしい", meaning: "busy" },
    { word: "美味[おい]しい", reading: "おいしい", meaning: "delicious (i-adj)" },
  ],
  blocks: [
    {
      type: "prose",
      text: "These four endings all translate as 'seems' or 'I hear' in English — but Japanese cares **what evidence you have**: direct observation, appearance, reported speech, or general rumour.",
    },
    {
      type: "rule",
      title: "ようだ / みたい — seem (judgement)",
      items: [
        "**{{ようだ}}** — formal inference from evidence: {{雨が降るようだ}}.",
        "**{{みたい}}** — casual version: {{雨[あめ]みたい}}.",
        "Attach to plain form. **Noun-like:** {{子供[こども]みたい}} — like a child; {{子供みたいな人}} — a childlike person.",
        "**{{ような}}** / **{{みたいな}}** before nouns: {{映画[えいが]のような結末[けつまつ]}}.",
      ],
    },
    {
      type: "rule",
      title: "そう — looks like (visual / sensory)",
      items: [
        "**Appearance:** stem + {{そう}} — {{美味[おい]しそう}} (looks delicious). **Never** {{美味しいそう}}.",
        "**Negative appearance:** stem + {{なさそう}} — {{雨[あめ]が降[ふ]らなさそう}} (doesn't look like rain).",
        "**Hearsay:** plain + {{そうだ}} — {{雨が降るそうだ}} (I heard it will rain).",
        "**Unlikely:** {{降[ふ]りそうもない}} — doesn't look like it'll rain at all.",
        "Same surface, different attachment — appearance uses **stem**, hearsay uses **plain form**.",
      ],
    },
    {
      type: "rule",
      title: "らしい — seems / I hear (typical of)",
      items: [
        "Plain + {{らしい}} — report from others OR 'typical of': {{彼[かれ]らしい}} — 'That's so like him.'",
        "{{春[はる]らしい}} — 'so spring-like' (typical of the season).",
        "{{雨[あめ]らしい}} — 'I hear it's rain' / 'apparently rain'.",
      ],
    },
    {
      type: "heading",
      text: "Side-by-side: same situation",
    },
    {
      type: "table",
      caption: "「He seems busy」 — pick your evidence",
      headers: ["Pattern", "Sentence", "Nuance"],
      rows: [
        ["みたい", "忙[いそが]しそうみたい", "casual guess from what you see"],
        ["ようだ", "忙しいようだ", "formal inference"],
        ["らしい", "忙しいらしい", "someone said / typical for him"],
        ["stem+そう", "忙しそう", "looks busy (visual)"],
      ],
    },
    {
      type: "table",
      caption: "Quick comparison",
      headers: ["Pattern", "Evidence", "Example"],
      rows: [
        ["みたい / よう", "general inference", "忙[いそが]しそうみたい"],
        ["〜そう (stem)", "looks / sounds", "美味[おい]しそう"],
        ["〜そうだ (plain)", "hearsay", "来[く]るそうだ"],
        ["〜らしい", "report / typicality", "雨らしい"],
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "この店[みせ]は便利[べんり]みたい。", en: "This shop seems convenient." },
        { jp: "ケーキが美味[おい]しそう。", en: "The cake looks delicious." },
        { jp: "明日[あした]は休[やす]みだそうだ。", en: "I heard tomorrow is a day off." },
        { jp: "彼[かれ]、試験[しけん]に落[お]ちたらしい。", en: "Apparently he failed the exam." },
        { jp: "今日[きょう]は、春[はる]らしい暖[あたた]かさだ。", en: "Today's warmth is so spring-like." },
        { jp: "雨[あめ]が降[ふ]らなさそう。", en: "Doesn't look like it'll rain." },
      ],
    },
    {
      type: "tip",
      text: "For 'looks tasty', always stem + そう: {{おいしそう}} ✓. {{おいしいそう}} ✗.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Looks delicious」 — correct form?",
      choices: ["美味しいそう", "美味しそう", "美味しいみたい", "美味しいらしい"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Hearsay: 「I heard it will rain」?",
      choices: ["雨そう", "雨のよう", "雨が降るそうだ", "雨みたい"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "Casual inference equivalent of ようだ?",
      choices: ["みたい", "らしい", "べき", "すぎる"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "「Doesn't look tasty」 (appearance)?",
      choices: ["美味しそう", "美味しなさそう", "美味しくないそう", "美味しいらしい"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Spring-like weather」 — typical of season?",
      choices: ["春みたい", "春らしい", "春のよう", "春そう"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Hearsay vs appearance for 降る — which is hearsay?",
      choices: ["降りそう", "降るそうだ", "降るみたい", "降るよう"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'Apparently it will snow tomorrow' (hearsay)",
      tiles: ["明日[あした]は", "雪[ゆき]が", "降[ふ]るらしい"],
      distractors: ["降[ふ]りらしい"],
      explanation: "らしい attaches to the plain form: 降るらしい.",
    },
  ],
  drills: [
    { id: "sou", prompt: "Visual 'looks like it's about to…' — rain", jp: "降[ふ]る", answers: ["降[ふ]りそう", "降[ふ]りそうだ"] },
    { id: "mitai", prompt: "Casual judgement — 'seems like rain'", jp: "雨[あめ]", answers: ["雨[あめ]みたい", "雨[あめ]みたいだ"] },
    { id: "youda", prompt: "Formal judgement — 'appears to be rain'", jp: "雨[あめ]", answers: ["雨[あめ]のようだ", "雨[あめ]のよう"] },
    { id: "rashii", prompt: "Hearsay / typicality — 'seems it's spring'", jp: "春[はる]", answers: ["春[はる]らしい"] },
  ],
};
