import type { Reading } from "../types";

/** Uses: や否や, が早いか, かと思ったら. Station near-miss. */
export const inThatInstant: Reading = {
  id: "in-that-instant",
  stage: "n1",
  order: 2,
  title: "In That Instant",
  jpTitle: "その瞬間[しゅんかん]",
  summary: "A near-miss at the platform — literary 'no sooner…than' in motion.",
  estMinutes: 4,
  body: [
    {
      jp: "駅[えき]に着[つ]くや否[いな]や、発車[はっしゃ]ベルが鳴[な]り始[はじ]めた。",
      en: "No sooner had I arrived at the station than the departure bell started ringing.",
    },
    {
      jp: "改札[かいさつ]を出[で]るが早[はや]いか、ホームへ走[はし]った。",
      en: "The instant I exited the ticket gate, I ran for the platform.",
    },
    {
      jp: "間[ま]に合[あ]ったかと思[おも]ったら、ドアが閉[し]まりかけていた。",
      en: "Just when I thought I'd made it, the doors were already closing.",
    },
    {
      jp: "乗[の]ろうとした瞬間[しゅんかん]、車掌[しゃしょう]に止[と]められた。",
      en: "The instant I tried to board, the conductor stopped me.",
    },
    {
      jp: "電車[でんしゃ]が出[で]るが早[はや]いか、次[つぎ]の一本[いっぽん]を確認[かくにん]した。",
      en: "No sooner had the train left than I checked the next one.",
    },
    {
      jp: "危[あぶ]ないところだった。今日[きょう]は歩[ある]いて帰[かえ]ろう。",
      en: "That was a close call. Today I'll walk home.",
    },
  ],
  vocabulary: [
    { word: "発車[はっしゃ]", reading: "はっしゃ", meaning: "departure (of a vehicle)" },
    { word: "改札[かいさつ]", reading: "かいさつ", meaning: "ticket gate" },
    { word: "ホーム", reading: "ホーム", meaning: "platform (train)" },
    { word: "間[ま]に合[あ]う", reading: "まにあう", meaning: "to be in time; make it" },
    { word: "瞬間[しゅんかん]", reading: "しゅんかん", meaning: "instant; moment" },
    { word: "車掌[しゃしょう]", reading: "しゃしょう", meaning: "conductor (train)" },
    { word: "確認[かくにん]", reading: "かくにん", meaning: "confirmation; check" },
    { word: "危[あぶ]ない", reading: "あぶない", meaning: "dangerous; close call" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "What happened the moment they reached the station?",
      choices: [
        "発車ベルが鳴り始めた",
        "電車が止まった",
        "友達が待っていた",
        "改札が閉まった",
      ],
      answer: 0,
      explanation: "着くや否や — no sooner arrived than…",
    },
    {
      kind: "mc",
      prompt: "What did they do right after exiting the gate?",
      choices: [
        "ホームへ走った",
        "座って休んだ",
        "切符を買った",
        "駅を出た",
      ],
      answer: 0,
      explanation: "出るが早いか — the instant X happened, Y.",
    },
    {
      kind: "mc",
      prompt: "Just when they thought they'd made it…?",
      choices: [
        "ドアが閉まりかけていた",
        "席が空いていた",
        "友達が乗っていた",
        "車掌が笑っていた",
      ],
      answer: 0,
      explanation: "間に合ったかと思ったら — just when I thought… (reversal).",
    },
  ],
};
