import type { Reading } from "../types";

/** Uses: ている, potential, から/ので, てから, で-chaining, ね, といい. */
export const aRainyDay: Reading = {
  id: "a-rainy-day",
  stage: "essential-grammar",
  order: 1,
  title: "A Rainy Day",
  jpTitle: "雨[あめ]の日[ひ]",
  summary: "Stuck inside with tea and a book — polite form and the te-form at work.",
  estMinutes: 4,
  body: [
    {
      jp: "今日[きょう]は朝[あさ]から雨[あめ]が降[ふ]っています。",
      en: "It has been raining since this morning.",
    },
    {
      jp: "外[そと]へ行[い]けませんから、家[いえ]で本[ほん]を読[よ]んでいます。",
      en: "Since I can't go outside, I'm reading a book at home.",
    },
    {
      jp: "お茶[ちゃ]を飲[の]んでから、映画[えいが]を見[み]ました。",
      en: "After drinking tea, I watched a movie.",
    },
    {
      jp: "雨[あめ]の日[ひ]は静[しず]かで、いいですね。",
      en: "Rainy days are quiet and nice, aren't they?",
    },
    {
      jp: "でも、明日[あした]は友達[ともだち]と出[で]かけたいです。",
      en: "But tomorrow I want to go out with a friend.",
    },
    {
      jp: "早[はや]く晴[は]れるといいです。",
      en: "I hope it clears up soon.",
    },
  ],
  vocabulary: [
    { word: "降[ふ]る", reading: "ふる", meaning: "to fall (rain, snow)" },
    { word: "外[そと]", reading: "そと", meaning: "outside" },
    { word: "お茶[ちゃ]", reading: "おちゃ", meaning: "(green) tea" },
    { word: "出[で]かける", reading: "でかける", meaning: "to go out" },
    { word: "晴[は]れる", reading: "はれる", meaning: "to clear up (weather)" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Why am I at home?",
      choices: [
        "外へ行けないから",
        "病気だから",
        "忙しいから",
        "本がないから",
      ],
      answer: 0,
      explanation: "行けません — the potential form: I can't go out.",
    },
    {
      kind: "mc",
      prompt: "What did I do after drinking tea?",
      choices: ["映画を見た", "本を買った", "出かけた", "寝た"],
      answer: 0,
      explanation: "飲んでから — 'after drinking'.",
    },
    {
      kind: "mc",
      prompt: "What do I want to do tomorrow?",
      choices: [
        "友達と出かけたい",
        "家で本を読みたい",
        "お茶を飲みたい",
        "映画を見たい",
      ],
      answer: 0,
    },
  ],
};
