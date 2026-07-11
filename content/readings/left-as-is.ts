import type { Reading } from "../types";

/** Uses: まま, うちに, たところ. */
export const leftAsIs: Reading = {
  id: "left-as-is",
  stage: "n2",
  order: 3,
  title: "Left As-Is",
  jpTitle: "そのままで",
  summary: "An old letter stays unread — until it doesn't.",
  estMinutes: 4,
  body: [
    {
      jp: "机[つくえ]の上[うえ]に、封筒[ふうとう]が開[あ]けられないまま置[お]いてあった。",
      en: "On the desk, an envelope sat left unopened.",
    },
    {
      jp: "忙[いそが]しいうちに、忘[わす]れてしまっていたのだ。",
      en: "While I was busy, I had ended up forgetting about it.",
    },
    {
      jp: "昨日[きのう]、ふと思[おも]い出[だ]して開[あ]けてみたところ、祖母[そぼ]からの手紙[てがみ]だった。",
      en: "Yesterday, when I suddenly remembered and opened it, it turned out to be a letter from my grandmother.",
    },
    {
      jp: "日付[ひづけ]を見[み]ると、一[いっ]か月[げつ]前[まえ]のままになっていた。",
      en: "Looking at the date, it was still from a month ago.",
    },
    {
      jp: "暗[くら]くならないうちに返事[へんじ]を書[か]こうと思[おも]った。",
      en: "I thought I should write a reply before it got dark.",
    },
    {
      jp: "書[か]き終[お]えたところ、窓[まど]の外[そと]はもう夜[よる]だった。",
      en: "When I finished writing, it was already night outside the window.",
    },
  ],
  vocabulary: [
    { word: "机[つくえ]", reading: "つくえ", meaning: "desk" },
    { word: "封筒[ふうとう]", reading: "ふうとう", meaning: "envelope" },
    { word: "忘[わす]れる", reading: "わすれる", meaning: "to forget" },
    { word: "祖母[そぼ]", reading: "そぼ", meaning: "grandmother" },
    { word: "手紙[てがみ]", reading: "てがみ", meaning: "letter" },
    { word: "日付[ひづけ]", reading: "ひづけ", meaning: "date (on a document)" },
    { word: "返事[へんじ]", reading: "へんじ", meaning: "reply" },
    { word: "窓[まど]", reading: "まど", meaning: "window" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "How was the envelope left?",
      choices: [
        "開けられないまま",
        "読まれたまま",
        "捨てられたまま",
        "送られたまま",
      ],
      answer: 0,
      explanation: "〜まま — left in that state (unopened).",
    },
    {
      kind: "mc",
      prompt: "When did the speaker forget the letter?",
      choices: [
        "忙しいうちに",
        "暗いうちに",
        "書いたうちに",
        "夜のうちに",
      ],
      answer: 0,
      explanation: "忙しいうちに — while (during the time that) I was busy.",
    },
    {
      kind: "mc",
      prompt: "What happened when the letter was opened?",
      choices: [
        "祖母からの手紙だった",
        "請求書だった",
        "空だった",
        "友人からの写真だった",
      ],
      answer: 0,
      explanation: "開けてみたところ — when I tried opening it, (it turned out that)…",
    },
  ],
};
