import type { Reading } from "../types";

/** Situation: buying a ticket and finding the platform — questions, ですか. */
export const atTheStation: Reading = {
  id: "at-the-station",
  stage: "essential-grammar",
  order: 4,
  kind: "situation",
  title: "At the Station",
  jpTitle: "駅[えき]で",
  summary: "Which platform, how much, and does this train stop there?",
  estMinutes: 4,
  body: [
    {
      speaker: "私[わたし]",
      jp: "すみません、東京[とうきょう]までいくらですか。",
      en: "Excuse me, how much is it to Tokyo?",
    },
    {
      speaker: "駅員[えきいん]",
      jp: "二百円[にひゃくえん]です。",
      en: "It's 200 yen.",
    },
    {
      speaker: "私[わたし]",
      jp: "東京行[とうきょうゆ]きの電車[でんしゃ]は何番線[なんばんせん]ですか。",
      en: "Which platform for the Tokyo-bound train?",
    },
    {
      speaker: "駅員[えきいん]",
      jp: "三番線[さんばんせん]です。次[つぎ]は十分後[じゅっぷんご]に来[き]ます。",
      en: "Platform 3. The next one comes in ten minutes.",
    },
    {
      speaker: "私[わたし]",
      jp: "この電車[でんしゃ]は上野[うえの]に止[と]まりますか。",
      en: "Does this train stop at Ueno?",
    },
    {
      speaker: "駅員[えきいん]",
      jp: "はい、止[と]まりますよ。",
      en: "Yes, it stops there.",
    },
    {
      speaker: "私[わたし]",
      jp: "ありがとうございます。",
      en: "Thank you.",
    },
  ],
  phrases: [
    { jp: "〜までいくらですか。", en: "How much is it to ~?" },
    { jp: "〜行[ゆ]きの電車[でんしゃ]は何番線[なんばんせん]ですか。", en: "Which platform for the train bound for ~?" },
    { jp: "この電車[でんしゃ]は〜に止[と]まりますか。", en: "Does this train stop at ~?" },
  ],
  vocabulary: [
    { word: "駅員[えきいん]", reading: "えきいん", meaning: "station attendant" },
    { word: "いくら", reading: "いくら", meaning: "how much" },
    { word: "〜行[ゆ]き", reading: "ゆき", meaning: "bound for ~" },
    { word: "何番線[なんばんせん]", reading: "なんばんせん", meaning: "which platform" },
    { word: "次[つぎ]", reading: "つぎ", meaning: "next" },
    { word: "止[と]まる", reading: "とまる", meaning: "to stop (intransitive)" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "How much is the ticket to Tokyo?",
      choices: ["二百円", "三百円", "百円", "二千円"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Which platform does the Tokyo-bound train leave from?",
      choices: ["三番線", "二番線", "十番線", "一番線"],
      answer: 0,
      explanation: "三番線です — platform 3.",
    },
    {
      kind: "mc",
      prompt: "Does the train stop at Ueno?",
      choices: ["はい、止まる", "いいえ、止まらない", "分からない", "次の電車だけ"],
      answer: 0,
    },
  ],
};
