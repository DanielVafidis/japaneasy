import type { Lesson } from "../types";

export const zaruWoEnai: Lesson = {
  id: "zaru-wo-enai",
  stage: "advanced-topics",
  order: 3,
  title: "〜ざるを得ない",
  subtitle: "Cannot help but · have no choice",
  summary:
    "A formal double-negative expressing unavoidable action — 'can't not do'.",
  estMinutes: 12,
  vocabulary: [
    { word: "認[みと]める", reading: "みとめる", meaning: "to admit; recognise" },
    { word: "延期[えんき]", reading: "えんき", meaning: "postponement" },
    { word: "事態[じたい]", reading: "じたい", meaning: "situation" },
    { word: "受[う]け入[い]れる", reading: "うけいれる", meaning: "to accept" },
  ],
  blocks: [
    {
      type: "prose",
      text: "{{〜ざるを得[え]ない}} is a **formal, written** pattern meaning you have **no choice** but to do something. It combines classical negative {{〜ざる}} with {{を得ない}} ('cannot obtain / cannot manage otherwise').",
    },
    {
      type: "rule",
      title: "Formation",
      items: [
        "**U-verbs:** replace final {{ない}} stem with {{ざる}}: {{行[い]かない}} → {{行[い]かざるを得[え]ない}}.",
        "**Ru-verbs:** {{食[た]べない}} → {{食[た]べざるを得[え]ない}}.",
        "**Exceptions:** {{しない}} → {{せざるを得[え]ない}}, {{来[こ]ない}} → {{来[こ]ざるを得[え]ない}}.",
        "**Suru compounds:** {{延期[えんき]せざるを得[え]ない}} — 'Cannot avoid postponing.'",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "事態[じたい]を認[みと]めざるを得[え]ない。", en: "Cannot help but acknowledge the situation." },
        { jp: "雨[あめ]のため、試合[しあい]を延期[えんき]せざるを得[え]なかった。", en: "Due to rain, we had no choice but to postpone the match." },
        { jp: "彼[かれ]の能力[のうりょく]は認[みと]めざるを得ない。", en: "One cannot deny his ability." },
      ],
    },
    {
      type: "note",
      text: "Spoken equivalent: {{〜ないわけにはいかない}} — same 'no way around it' feeling, less literary.",
    },
    {
      type: "tip",
      text: "You'll see this in news headlines and business emails more than in conversation. Recognise it on sight first; active use can wait.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "ざるを得ない expresses…",
      choices: ["optional action", "no choice but to act", "past regret", "ability"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Negative of 行く in this pattern?",
      choices: ["行かざる", "行きざる", "行くざる", "行かないざる"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "する → ?",
      choices: ["しざるを得ない", "せざるを得ない", "すざるを得ない", "されざるを得ない"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Casual spoken alternative?",
      choices: ["〜ないわけにはいかない", "〜てしまう", "〜かもしれない", "〜べき"],
      answer: 0,
    },
  ],
};
