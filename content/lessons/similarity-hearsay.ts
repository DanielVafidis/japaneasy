import type { Lesson } from "../types";

export const similarityHearsay: Lesson = {
  id: "similarity-hearsay",
  stage: "special-expressions",
  order: 4,
  title: "Similarity & Hearsay",
  subtitle: "よう · みたい · そう · らしい",
  summary:
    "Four look-alike patterns for 'seems like', 'looks like', and 'I heard that' — each with different evidence rules.",
  estMinutes: 16,
  vocabulary: [
    { word: "雨[あめ]", reading: "あめ", meaning: "rain" },
    { word: "便利[べんり]", reading: "べんり", meaning: "convenient" },
    { word: "喧[や]嘩[か]", reading: "けんか", meaning: "quarrel; fight" },
    { word: "伝[つた]える", reading: "つたえる", meaning: "to convey" },
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
        "**{{みたい}}** — casual version: {{雨みたい}}.",
        "Attach to plain form. Can also mean 'like a NOUN': {{子供みたい}} — like a child.",
      ],
    },
    {
      type: "rule",
      title: "そう — looks like (visual / sensory)",
      items: [
        "**Appearance:** stem + {{そう}} — {{美味[おい]しそう}} (looks delicious). **Never** {{美味しいそう}}.",
        "**Hearsay:** plain + {{そうだ}} — {{雨が降るそうだ}} (I heard it will rain).",
        "Same surface, different attachment — appearance uses **stem**, hearsay uses **plain form**.",
      ],
    },
    {
      type: "rule",
      title: "らしい — seems / I hear (typical of)",
      items: [
        "Plain + {{らしい}} — report from others OR 'typical of': {{彼[かれ]らしい}} — 'That's so like him.'",
        "{{雨らしい}} — 'I hear it's rain' / 'apparently rain'.",
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
      prompt: "らしい often implies…",
      choices: ["direct visual evidence only", "report or typical behaviour", "obligation", "ability"],
      answer: 1,
    },
  ],
};
