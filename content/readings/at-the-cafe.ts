import type { Reading } from "../types";

/** Situation: ordering at a cafe — ください, ホット／アイス, 少々お待ちください. */
export const atTheCafe: Reading = {
  id: "at-the-cafe",
  stage: "n5",
  order: 5,
  kind: "situation",
  title: "At the Cafe",
  jpTitle: "カフェで",
  summary: "Ordering coffee — hot or iced — and asking for water too.",
  estMinutes: 4,
  body: [
    { speaker: "店員[てんいん]", jp: "いらっしゃいませ。", en: "Welcome!" },
    {
      speaker: "私[わたし]",
      jp: "コーヒーをください。",
      en: "Coffee, please.",
    },
    {
      speaker: "店員[てんいん]",
      jp: "ホットですか、アイスですか。",
      en: "Hot or iced?",
    },
    {
      speaker: "私[わたし]",
      jp: "ホットをお願[ねが]いします。",
      en: "Hot, please.",
    },
    {
      speaker: "店員[てんいん]",
      jp: "少々[しょうしょう]お待[ま]ちください。",
      en: "Please wait a moment.",
    },
    {
      speaker: "私[わたし]",
      jp: "水[みず]もください。",
      en: "Water too, please.",
    },
    {
      speaker: "店員[てんいん]",
      jp: "どうぞ。ありがとうございました。",
      en: "Here you go. Thank you very much!",
    },
  ],
  phrases: [
    { jp: "コーヒーをください。", en: "Coffee, please." },
    { jp: "ホットをお願[ねが]いします。", en: "Hot, please." },
    { jp: "少々[しょうしょう]お待[ま]ちください。", en: "Please wait a moment." },
    { jp: "水[みず]もください。", en: "Water too, please." },
  ],
  vocabulary: [
    { word: "店員[てんいん]", reading: "てんいん", meaning: "shop clerk" },
    { word: "コーヒー", reading: "コーヒー", meaning: "coffee" },
    { word: "ホット", reading: "ホット", meaning: "hot (drink)" },
    { word: "アイス", reading: "アイス", meaning: "iced (drink)" },
    { word: "少々[しょうしょう]", reading: "しょうしょう", meaning: "a little; a moment" },
    { word: "待[ま]つ", reading: "まつ", meaning: "to wait" },
    { word: "水[みず]", reading: "みず", meaning: "water" },
    { word: "どうぞ", reading: "どうぞ", meaning: "here you are; please (go ahead)" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "What kind of coffee do I order?",
      choices: ["ホット", "アイス", "水", "お茶"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "What else do I ask for?",
      choices: ["水", "お茶", "アイス", "砂糖"],
      answer: 0,
      explanation: "水もください — water too, please.",
    },
    {
      kind: "listen",
      prompt: "Listen — the phrase you'd use to order coffee:",
      audio: "コーヒーをください",
      explanation: "コーヒーをください — 'coffee, please.'",
    },
  ],
};
