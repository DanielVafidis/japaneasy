import type { Reading } from "../types";

/** Uses: past tense, negatives, relative clauses, へ/を/に particles, adverbs. */
export const theLibrary: Reading = {
  id: "the-library",
  stage: "n5",
  order: 3,
  title: "The Library",
  jpTitle: "図書館[としょかん]",
  summary: "A quiet afternoon with a difficult book — past tense in action.",
  estMinutes: 4,
  body: [
    {
      jp: "昨日[きのう]、私[わたし]は図書館[としょかん]へ行[い]った。",
      en: "Yesterday I went to the library.",
    },
    {
      jp: "静[しず]かな人[ひと]がたくさんいた。",
      en: "There were lots of quiet people.",
    },
    {
      jp: "私[わたし]は難[むずか]しい本[ほん]を読[よ]んだ。",
      en: "I read a difficult book.",
    },
    {
      jp: "分[わ]からない言葉[ことば]があった。",
      en: "There were words I didn't understand.",
    },
    {
      jp: "先生[せんせい]が書[か]いた本[ほん]も読[よ]んだ。",
      en: "I also read a book my teacher wrote.",
    },
    {
      jp: "早[はや]く家[いえ]へ帰[かえ]った。ご飯[はん]を食[た]べた。",
      en: "I went home early and ate dinner.",
    },
  ],
  vocabulary: [
    { word: "たくさん", reading: "たくさん", meaning: "a lot; many" },
    { word: "難[むずか]しい", reading: "むずかしい", meaning: "difficult (i-adj)" },
    { word: "言葉[ことば]", reading: "ことば", meaning: "word; language" },
    { word: "ご飯[はん]", reading: "ごはん", meaning: "meal; cooked rice" },
    { word: "帰[かえ]る", reading: "かえる", meaning: "to go home; to return (u-verb)" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Where did I go yesterday?",
      choices: ["図書館", "学校", "映画館", "家"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Whose book did I also read?",
      choices: [
        "先生が書いた本",
        "友達が書いた本",
        "私が書いた本",
        "母が書いた本",
      ],
      answer: 0,
      explanation: "先生が書いた本 — a relative clause: 'the book the teacher wrote'.",
    },
    {
      kind: "mc",
      prompt: "What did I do after going home?",
      choices: ["ご飯を食べた", "本を買った", "映画を見た", "泳いだ"],
      answer: 0,
    },
  ],
};
