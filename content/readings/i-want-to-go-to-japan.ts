import type { Reading } from "../types";

/** Uses: たい, potential, になる, たら, comparisons (の方が・より), quoted speech. */
export const iWantToGoToJapan: Reading = {
  id: "i-want-to-go-to-japan",
  stage: "essential-grammar",
  order: 2,
  title: "I Want to Go to Japan",
  jpTitle: "日本[にほん]へ行[い]きたい",
  summary: "Plans, hopes, and one very practical comparison about trains.",
  estMinutes: 4,
  body: [
    {
      jp: "私[わたし]は日本[にほん]へ行[い]きたいです。",
      en: "I want to go to Japan.",
    },
    {
      jp: "日本語[にほんご]が少[すこ]し話[はな]せます。",
      en: "I can speak a little Japanese.",
    },
    {
      jp: "もっと上手[じょうず]になりたいです。",
      en: "I want to get better.",
    },
    {
      jp: "お金[かね]があったら、東京[とうきょう]へ行[い]きます。",
      en: "If I have the money, I'll go to Tokyo.",
    },
    {
      jp: "電車[でんしゃ]の方[ほう]がバスより速[はや]いと聞[き]きました。",
      en: "I heard that trains are faster than buses.",
    },
    {
      jp: "日本[にほん]で寿司[すし]をたくさん食[た]べたいです。",
      en: "In Japan, I want to eat lots of sushi.",
    },
  ],
  vocabulary: [
    { word: "少[すこ]し", reading: "すこし", meaning: "a little" },
    { word: "もっと", reading: "もっと", meaning: "more" },
    { word: "上手[じょうず]", reading: "じょうず", meaning: "skilled; good at (na-adj)" },
    { word: "お金[かね]", reading: "おかね", meaning: "money" },
    { word: "電車[でんしゃ]", reading: "でんしゃ", meaning: "train" },
    { word: "速[はや]い", reading: "はやい", meaning: "fast (i-adj)" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "How much Japanese can I speak?",
      choices: ["少し", "たくさん", "全然", "上手に"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "When will I go to Tokyo?",
      choices: [
        "お金があったら",
        "晴れたら",
        "上手になったら",
        "電車があったら",
      ],
      answer: 0,
      explanation: "あったら — the たら conditional: 'if/when I have (money)'.",
    },
    {
      kind: "mc",
      prompt: "Which is faster, according to what I heard?",
      choices: ["電車", "バス", "自転車", "車"],
      answer: 0,
      explanation: "電車の方がバスより速い — trains over buses.",
    },
  ],
};
