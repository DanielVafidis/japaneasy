import type { Reading } from "../types";

/** Situation: convenience store checkout — polite requests, ください, てもいい. */
export const atTheKonbini: Reading = {
  id: "at-the-konbini",
  stage: "essential-grammar",
  order: 3,
  kind: "situation",
  title: "At the Konbini",
  jpTitle: "コンビニで",
  summary: "Checkout small talk: bags, warming up your bento, and paying.",
  estMinutes: 4,
  body: [
    { speaker: "店員[てんいん]", jp: "いらっしゃいませ。", en: "Welcome!" },
    {
      speaker: "私[わたし]",
      jp: "これをお願[ねが]いします。",
      en: "This, please.",
    },
    {
      speaker: "店員[てんいん]",
      jp: "お弁当[べんとう]を温[あたた]めますか。",
      en: "Shall I warm up the bento?",
    },
    {
      speaker: "私[わたし]",
      jp: "はい、お願[ねが]いします。",
      en: "Yes, please.",
    },
    {
      speaker: "店員[てんいん]",
      jp: "袋[ふくろ]はいりますか。",
      en: "Do you need a bag?",
    },
    {
      speaker: "私[わたし]",
      jp: "いいえ、いりません。カードで払[はら]ってもいいですか。",
      en: "No, I don't. May I pay by card?",
    },
    {
      speaker: "店員[てんいん]",
      jp: "はい、大丈夫[だいじょうぶ]ですよ。ありがとうございました。",
      en: "Yes, that's fine. Thank you very much!",
    },
  ],
  phrases: [
    { jp: "これをお願[ねが]いします。", en: "This one, please." },
    { jp: "温[あたた]めてください。", en: "Please warm it up." },
    { jp: "袋[ふくろ]はいりません。", en: "I don't need a bag." },
    { jp: "カードで払[はら]ってもいいですか。", en: "May I pay by card?" },
  ],
  vocabulary: [
    { word: "店員[てんいん]", reading: "てんいん", meaning: "shop clerk" },
    { word: "お弁当[べんとう]", reading: "おべんとう", meaning: "boxed lunch; bento" },
    { word: "温[あたた]める", reading: "あたためる", meaning: "to warm up (something)" },
    { word: "袋[ふくろ]", reading: "ふくろ", meaning: "bag" },
    { word: "いる", reading: "いる", meaning: "to need (u-verb)" },
    { word: "払[はら]う", reading: "はらう", meaning: "to pay" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "What does the clerk offer to do?",
      choices: [
        "お弁当を温める",
        "袋を温める",
        "カードを払う",
        "お茶を作る",
      ],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Do I take a bag?",
      choices: [
        "いいえ、いりません",
        "はい、お願いします",
        "はい、いります",
        "いいえ、温めません",
      ],
      answer: 0,
    },
    {
      kind: "listen",
      prompt: "Listen — the phrase you'd use to hand something to the register:",
      audio: "これをお願[ねが]いします",
      explanation: "これをお願いします — 'this one, please.'",
    },
  ],
};
