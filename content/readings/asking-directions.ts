import type { Reading } from "../types";

/** Situation: asking the way — と conditional for directions, ください. */
export const askingDirections: Reading = {
  id: "asking-directions",
  stage: "essential-grammar",
  order: 5,
  kind: "situation",
  title: "Asking Directions",
  jpTitle: "道[みち]を聞[き]く",
  summary: "Straight ahead, turn right at the corner — finding the post office.",
  estMinutes: 4,
  body: [
    {
      speaker: "私[わたし]",
      jp: "すみません、郵便局[ゆうびんきょく]はどこですか。",
      en: "Excuse me, where is the post office?",
    },
    {
      speaker: "女[おんな]の人[ひと]",
      jp: "この道[みち]をまっすぐ行[い]ってください。",
      en: "Go straight down this street.",
    },
    {
      speaker: "女[おんな]の人[ひと]",
      jp: "角[かど]を右[みぎ]に曲[ま]がると、左[ひだり]にあります。",
      en: "When you turn right at the corner, it's on the left.",
    },
    {
      speaker: "私[わたし]",
      jp: "ここから遠[とお]いですか。",
      en: "Is it far from here?",
    },
    {
      speaker: "女[おんな]の人[ひと]",
      jp: "いいえ、歩[ある]いて五分[ごふん]ぐらいですよ。",
      en: "No, it's about five minutes on foot.",
    },
    {
      speaker: "私[わたし]",
      jp: "ありがとうございます。助[たす]かりました。",
      en: "Thank you — that's a great help.",
    },
  ],
  phrases: [
    { jp: "〜はどこですか。", en: "Where is ~?" },
    { jp: "まっすぐ行[い]ってください。", en: "Please go straight ahead." },
    { jp: "角[かど]を右[みぎ]に曲[ま]がってください。", en: "Please turn right at the corner." },
    { jp: "ここから遠[とお]いですか。", en: "Is it far from here?" },
  ],
  vocabulary: [
    { word: "道[みち]", reading: "みち", meaning: "street; way" },
    { word: "郵便局[ゆうびんきょく]", reading: "ゆうびんきょく", meaning: "post office" },
    { word: "まっすぐ", reading: "まっすぐ", meaning: "straight ahead" },
    { word: "角[かど]", reading: "かど", meaning: "corner" },
    { word: "右[みぎ]", reading: "みぎ", meaning: "right (direction)" },
    { word: "左[ひだり]", reading: "ひだり", meaning: "left (direction)" },
    { word: "曲[ま]がる", reading: "まがる", meaning: "to turn (intransitive)" },
    { word: "遠[とお]い", reading: "とおい", meaning: "far (i-adj)" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "What am I looking for?",
      choices: ["郵便局", "駅", "図書館", "コンビニ"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Where is it after turning right at the corner?",
      choices: ["左にある", "右にある", "まっすぐにある", "駅の中にある"],
      answer: 0,
      explanation: "曲がると、左にあります — the と conditional: turn, and there it is.",
    },
    {
      kind: "mc",
      prompt: "How far is it on foot?",
      choices: ["五分ぐらい", "十分ぐらい", "一時間ぐらい", "遠い"],
      answer: 0,
    },
  ],
};
