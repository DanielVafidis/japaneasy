import type { Reading } from "../types";

/** Uses: dictionary/past forms, adverbs, を・へ・で, relative clause. */
export const morning: Reading = {
  id: "morning",
  stage: "basic-grammar",
  order: 2,
  title: "Morning",
  jpTitle: "朝[あさ]",
  summary: "A plain-form daily routine — verbs and particles doing their jobs.",
  estMinutes: 3,
  body: [
    {
      jp: "毎日[まいにち]、私[わたし]は早[はや]く起[お]きる。",
      en: "Every day I get up early.",
    },
    {
      jp: "水[みず]を飲[の]む。それから、ご飯[はん]を食[た]べる。",
      en: "I drink water. After that, I eat breakfast.",
    },
    {
      jp: "天気[てんき]がいい日[ひ]は、学校[がっこう]へ歩[ある]く。",
      en: "On days when the weather is good, I walk to school.",
    },
    {
      jp: "雨[あめ]の日[ひ]はバスで行[い]く。",
      en: "On rainy days I go by bus.",
    },
    {
      jp: "昨日[きのう]は雨[あめ]だった。バスは人[ひと]がたくさんいた。",
      en: "Yesterday it rained. The bus was full of people.",
    },
    {
      jp: "今日[きょう]は晴[は]れだ。早[はや]く学校[がっこう]へ行[い]った。",
      en: "Today it's sunny. I went to school early.",
    },
  ],
  vocabulary: [
    { word: "毎日[まいにち]", reading: "まいにち", meaning: "every day" },
    { word: "水[みず]", reading: "みず", meaning: "water" },
    { word: "それから", reading: "それから", meaning: "after that; and then" },
    { word: "歩[ある]く", reading: "あるく", meaning: "to walk" },
    { word: "晴[は]れ", reading: "はれ", meaning: "clear weather; sunny" },
    { word: "起[お]きる", reading: "おきる", meaning: "to get up; wake up" },
    { word: "日[ひ]", reading: "ひ", meaning: "day; sun" },
    { word: "朝[あさ]", reading: "あさ", meaning: "morning" },
    { word: "朝[あさ]ご飯[はん]", reading: "あさごはん", meaning: "breakfast" },
    { word: "バス", reading: "バス", meaning: "bus" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "What do I drink every morning?",
      choices: ["水", "お茶", "紅茶", "ラーメン"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "How do I get to school on rainy days?",
      choices: ["バスで", "歩いて", "自転車で", "車で"],
      answer: 0,
      explanation: "雨の日はバスで行く — で marks the means of travel.",
    },
    {
      kind: "mc",
      prompt: "What was yesterday like?",
      choices: ["雨だった", "晴れだった", "暑かった", "静かだった"],
      answer: 0,
    },
  ],
};
