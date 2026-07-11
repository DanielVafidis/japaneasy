import type { Reading } from "../types";

/** Uses: がち, だろう, ばかり, かもしれない. */
export const alwaysLate: Reading = {
  id: "always-late",
  stage: "n3",
  order: 5,
  title: "Always Late",
  jpTitle: "いつも遅[おく]れがち",
  summary: "A soft complaint about a friend who tends to run late — and maybe a wake-up call.",
  estMinutes: 4,
  body: [
    {
      jp: "友達[ともだち]はいつも遅[おく]れがちです。",
      en: "My friend tends to be late all the time.",
    },
    {
      jp: "今日[きょう]も十分[じゅっぷん]遅[おく]れて来[く]るだろうと思[おも]います。",
      en: "I think he'll probably be ten minutes late today too.",
    },
    {
      jp: "最近[さいきん]、謝[あやま]ってばかりいます。",
      en: "Lately he does nothing but apologize.",
    },
    {
      jp: "時計[とけい]を見[み]ないのかもしれません。",
      en: "Maybe he doesn't look at the clock.",
    },
    {
      jp: "明日[あした]は早[はや]く来[く]るかもしれない、と信[しん]じています。",
      en: "I believe he might come early tomorrow.",
    },
    {
      jp: "でも、また遅[おく]れるだろうな…。",
      en: "But he'll probably be late again…",
    },
  ],
  vocabulary: [
    { word: "遅[おく]れがち", reading: "おくれがち", meaning: "prone to being late; tends to run late" },
    { word: "だろう", reading: "だろう", meaning: "probably; I suppose" },
    { word: "ばかり", reading: "ばかり", meaning: "nothing but; only (repeated action)" },
    { word: "かもしれない", reading: "かもしれない", meaning: "might; maybe" },
    { word: "謝[あやま]る", reading: "あやまる", meaning: "to apologize" },
    { word: "時計[とけい]", reading: "とけい", meaning: "clock; watch" },
    { word: "信[しん]じる", reading: "しんじる", meaning: "to believe; trust" },
    { word: "最近[さいきん]", reading: "さいきん", meaning: "lately; recently" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "What tendency does my friend have?",
      choices: [
        "遅れがち",
        "早すぎがち",
        "休みがち",
        "忘れがち",
      ],
      answer: 0,
      explanation: "遅れがち — stem + がち, slightly negative.",
    },
    {
      kind: "mc",
      prompt: "What has he been doing lately?",
      choices: [
        "謝ってばかりいる",
        "走ってばかりいる",
        "寝てばかりいる",
        "食べてばかりいる",
      ],
      answer: 0,
      explanation: "ばかり — nothing but apologizing.",
    },
    {
      kind: "mc",
      prompt: "Why might he be late?",
      choices: [
        "時計を見ないのかもしれない",
        "電車が早いのかもしれない",
        "時計が多いかもしれない",
        "約束がないかもしれない",
      ],
      answer: 0,
      explanation: "かもしれない — soft possibility.",
    },
  ],
};
