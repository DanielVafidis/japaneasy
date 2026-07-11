import type { Reading } from "../types";

/** Uses: である style, ば, はず, ざるを得ない, でさえ, のである, べき. */
export const theReport: Reading = {
  id: "the-report",
  stage: "n2",
  order: 0,
  title: "The Report",
  jpTitle: "レポート",
  summary: "A short written-style essay — the である register in the wild.",
  estMinutes: 4,
  body: [
    {
      jp: "日本語[にほんご]の学習[がくしゅう]は簡単[かんたん]ではない。",
      en: "Learning Japanese is not simple.",
    },
    {
      jp: "しかし、毎日[まいにち]続[つづ]ければ、上手[じょうず]になるはずである。",
      en: "However, if you continue every day, you should improve.",
    },
    {
      jp: "漢字[かんじ]は数[かず]が多[おお]く、覚[おぼ]えざるを得[え]ない。",
      en: "Kanji are many in number, and one has no choice but to memorise them.",
    },
    {
      jp: "子供[こども]でさえ、毎日[まいにち]練習[れんしゅう]するのである。",
      en: "Even children practise every day.",
    },
    {
      jp: "だから、諦[あきら]めるべきではない。",
      en: "Therefore, one should not give up.",
    },
    {
      jp: "努力[どりょく]は大切[たいせつ]である。",
      en: "Effort is essential.",
    },
  ],
  vocabulary: [
    { word: "学習[がくしゅう]", reading: "がくしゅう", meaning: "learning; study" },
    { word: "しかし", reading: "しかし", meaning: "however (formal)" },
    { word: "続[つづ]ける", reading: "つづける", meaning: "to continue" },
    { word: "数[かず]", reading: "かず", meaning: "number; count" },
    { word: "覚[おぼ]える", reading: "おぼえる", meaning: "to memorise; learn" },
    { word: "練習[れんしゅう]", reading: "れんしゅう", meaning: "practice" },
    { word: "諦[あきら]める", reading: "あきらめる", meaning: "to give up" },
    { word: "大切[たいせつ]", reading: "たいせつ", meaning: "important; precious (na-adj)" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "According to the essay, is learning Japanese simple?",
      choices: [
        "簡単ではない",
        "簡単である",
        "簡単だったらしい",
        "簡単かもしれない",
      ],
      answer: 0,
      explanation: "ではない — the written-style negative of である.",
    },
    {
      kind: "mc",
      prompt: "What happens if you continue every day?",
      choices: [
        "上手になるはず",
        "疲れるはず",
        "忘れるはず",
        "諦めるはず",
      ],
      answer: 0,
      explanation: "続ければ〜はずである — ば conditional plus expectation.",
    },
    {
      kind: "mc",
      prompt: "What must one do about kanji?",
      choices: [
        "覚えざるを得ない",
        "諦めざるを得ない",
        "書かざるを得ない",
        "読まざるを得ない",
      ],
      answer: 0,
      explanation: "覚えざるを得ない — no choice but to memorise them.",
    },
    {
      kind: "mc",
      prompt: "What is the essay's conclusion?",
      choices: [
        "諦めるべきではない",
        "諦めるべきである",
        "練習するべきではない",
        "簡単にするべきである",
      ],
      answer: 0,
    },
  ],
};
