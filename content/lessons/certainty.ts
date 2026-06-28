import type { Lesson } from "../types";

export const certainty: Lesson = {
  id: "certainty",
  stage: "special-expressions",
  order: 3,
  title: "Certainty & Conjecture",
  subtitle: "かもしれない · でしょう · だろう",
  summary:
    "Express probability, polite guesswork, and varying degrees of confidence.",
  estMinutes: 14,
  vocabulary: [
    { word: "多分[たぶん]", reading: "たぶん", meaning: "probably" },
    { word: "きっと", reading: "きっと", meaning: "surely" },
    { word: "雨[あめ]", reading: "あめ", meaning: "rain" },
    { word: "遅[おく]れる", reading: "おくれる", meaning: "to be late" },
    { word: "試験[しけん]", reading: "しけん", meaning: "exam" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Japanese rarely states bare facts about the future. Instead you **calibrate confidence** — from 'maybe' to 'almost certainly' — with a handful of sentence-ending patterns.",
    },
    {
      type: "rule",
      title: "かもしれない — maybe / might",
      items: [
        "Attach to plain form: {{降[ふ]るかもしれない}} — 'It might rain.'",
        "Polite: {{かもしれません}}. Casual: {{かも}} alone.",
        "Low to medium confidence — you're not committing.",
      ],
    },
    {
      type: "rule",
      title: "でしょう — probably (polite conjecture)",
      items: [
        "Attach to plain form or ます-stem context: {{難[むずか]しいでしょう}}.",
        "Also seeks agreement: {{いいでしょう？}} — 'It's fine, isn't it?'",
        "Weather forecasts love {{でしょう}}: {{明日[あした]は晴[は]れるでしょう}}.",
      ],
    },
    {
      type: "rule",
      title: "だろう — probably (casual / masculine)",
      items: [
        "Plain conjecture: {{彼[かれ]は来[く]るだろう}} — 'He'll probably come.'",
        "Also rhetorical: {{そうだろう？}} — 'Right?'",
      ],
    },
    {
      type: "table",
      caption: "Confidence ladder",
      headers: ["Expression", "Confidence", "Register"],
      rows: [
        ["かもしれない", "low–medium", "neutral"],
        ["でしょう", "medium–high", "polite"],
        ["だろう", "medium–high", "casual"],
        ["きっと…だ", "high", "neutral"],
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "多分[たぶん]、試験[しけん]は難[むずか]しいかもしれない。", en: "The exam might be difficult, probably." },
        { jp: "彼[かれ]はもう帰[かえ]ったでしょう。", en: "He's probably gone home already." },
        { jp: "きっと大丈夫[だいじょうぶ]だよ。", en: "I'm sure it'll be fine." },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Low-confidence 'might rain'?",
      choices: ["雨だ", "雨かもしれない", "雨でしょう", "雨になる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Polite conjecture ending?",
      choices: ["だろう", "でしょう", "かも", "べき"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Attach かもしれない to which form?",
      choices: ["て-form", "Plain / dictionary", "ます-form only", "ない-form only"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "きっと expresses…",
      choices: ["doubt", "strong confidence", "permission", "passive"],
      answer: 1,
    },
  ],
};
