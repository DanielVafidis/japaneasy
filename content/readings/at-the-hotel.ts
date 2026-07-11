import type { Reading } from "../types";

/** Situation: hotel check-in — keigo set phrases, ご予約, お部屋. */
export const atTheHotel: Reading = {
  id: "at-the-hotel",
  stage: "n3",
  order: 3,
  kind: "situation",
  title: "At the Hotel",
  jpTitle: "ホテルで",
  summary: "Check-in at the front desk: reservation, passport, and room key.",
  estMinutes: 4,
  body: [
    {
      speaker: "店員[てんいん]",
      jp: "いらっしゃいませ。ご予約[よやく]はございますか。",
      en: "Welcome. Do you have a reservation?",
    },
    {
      speaker: "私[わたし]",
      jp: "はい、田中[たなか]で予約[よやく]しています。",
      en: "Yes, I have a reservation under Tanaka.",
    },
    {
      speaker: "店員[てんいん]",
      jp: "かしこまりました。パスポートをお願[ねが]いします。",
      en: "Certainly. Your passport, please.",
    },
    {
      speaker: "私[わたし]",
      jp: "はい、どうぞ。",
      en: "Here you are.",
    },
    {
      speaker: "店員[てんいん]",
      jp: "お部屋[へや]は五階[ごかい]でございます。こちらがキーです。",
      en: "Your room is on the fifth floor. Here is your key.",
    },
    {
      speaker: "私[わたし]",
      jp: "朝食[ちょうしょく]は何時[なんじ]からですか。",
      en: "What time does breakfast start?",
    },
    {
      speaker: "店員[てんいん]",
      jp: "七時[しちじ]から九時[くじ]まででございます。どうぞごゆっくり。",
      en: "From 7 to 9. Please enjoy your stay.",
    },
  ],
  phrases: [
    { jp: "ご予約[よやく]はございますか。", en: "Do you have a reservation?" },
    { jp: "〜で予約[よやく]しています。", en: "I have a reservation under ~." },
    { jp: "パスポートをお願[ねが]いします。", en: "Your passport, please." },
    { jp: "お部屋[へや]は〜階[かい]でございます。", en: "Your room is on the ~th floor." },
  ],
  vocabulary: [
    { word: "予約[よやく]", reading: "よやく", meaning: "reservation; booking" },
    { word: "ございます", reading: "ございます", meaning: "to have / there is (polite)" },
    { word: "かしこまりました", reading: "かしこまりました", meaning: "certainly; understood (staff)" },
    { word: "パスポート", reading: "パスポート", meaning: "passport" },
    { word: "お部屋[へや]", reading: "おへや", meaning: "room (polite)" },
    { word: "キー", reading: "キー", meaning: "key" },
    { word: "朝食[ちょうしょく]", reading: "ちょうしょく", meaning: "breakfast" },
    { word: "でございます", reading: "でございます", meaning: "polite form of です (staff)" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "What does the clerk ask for?",
      choices: [
        "パスポート",
        "クレジットカード",
        "切符",
        "名刺",
      ],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Which floor is the room on?",
      choices: ["五階", "七階", "九階", "三階"],
      answer: 0,
      explanation: "お部屋は五階でございます — keigo です.",
    },
    {
      kind: "listen",
      prompt: "Listen — the clerk's opening check-in question:",
      audio: "ご予約[よやく]はございますか",
      explanation: "ご予約はございますか — 'Do you have a reservation?'",
    },
  ],
};
