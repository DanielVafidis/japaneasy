import type { Reading } from "../types";

/** Uses: numbers-counting (counters · 円), を + verb, past tense. */
export const buyingFruit: Reading = {
  id: "buying-fruit",
  stage: "n5",
  order: 4,
  title: "Buying Fruit",
  jpTitle: "果物[くだもの]を買[か]う",
  summary: "At the fruit shop: apples, bananas, and a six-hundred-yen total.",
  estMinutes: 3,
  body: [
    {
      jp: "今日[きょう]、果物屋[くだものや]へ行[い]きました。",
      en: "Today I went to the fruit shop.",
    },
    {
      jp: "りんごは百[ひゃく]円[えん]です。バナナは百[ひゃく]五十[ごじゅう]円[えん]です。",
      en: "Apples are 100 yen. Bananas are 150 yen.",
    },
    {
      jp: "りんごを三[みっ]つと、バナナを二[に]本[ほん]買[か]いました。",
      en: "I bought three apples and two bananas.",
    },
    {
      jp: "全部[ぜんぶ]で六百[ろっぴゃく]円[えん]です。",
      en: "All together it's 600 yen.",
    },
    {
      jp: "お願[ねが]いします。お金[かね]を払[はら]いました。",
      en: "Please. I paid the money.",
    },
    {
      jp: "家[いえ]でりんごを食[た]べました。おいしかったです。",
      en: "I ate an apple at home. It was delicious.",
    },
  ],
  vocabulary: [
    { word: "果物[くだもの]", reading: "くだもの", meaning: "fruit" },
    { word: "果物屋[くだものや]", reading: "くだものや", meaning: "fruit shop" },
    { word: "円[えん]", reading: "えん", meaning: "yen (currency)" },
    { word: "三[みっ]つ", reading: "みっつ", meaning: "three (generic counter)" },
    { word: "二[に]本[ほん]", reading: "にほん", meaning: "two (long objects)" },
    { word: "全部[ぜんぶ]", reading: "ぜんぶ", meaning: "all; altogether" },
    { word: "おいしい", reading: "おいしい", meaning: "delicious (i-adj)" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "How much is one apple?",
      choices: ["百円", "百五十円", "六百円", "三百円"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "What did I buy?",
      choices: [
        "りんごを三つとバナナを二本",
        "りんごを二本とバナナを三つ",
        "バナナを三つ",
        "りんごを六つ",
      ],
      answer: 0,
      explanation: "三つ for apples (generic); 二本 for bananas (long objects).",
    },
    {
      kind: "mc",
      prompt: "How was the apple at home?",
      choices: ["おいしかった", "高かった", "安かった", "大きかった"],
      answer: 0,
      explanation: "おいしかった — past of おいしい.",
    },
  ],
};
