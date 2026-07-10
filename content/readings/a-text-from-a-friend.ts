import type { Reading } from "../types";

/** Uses: polite form, invitations (ませんか), quoted speech, たい, てから, から. */
export const aTextFromAFriend: Reading = {
  id: "a-text-from-a-friend",
  stage: "essential-grammar",
  order: 0,
  title: "A Text from a Friend",
  jpTitle: "友達[ともだち]のメール",
  summary: "An invitation to the movies — polite form, quoting, and plans.",
  estMinutes: 4,
  body: [
    {
      jp: "昨日[きのう]、友達[ともだち]からメールが来[き]ました。",
      en: "Yesterday, a text arrived from my friend.",
    },
    {
      jp: "「明日[あした]、映画[えいが]を見[み]に行[い]きませんか。」",
      en: "\"Won't you go see a movie tomorrow?\"",
    },
    {
      jp: "私[わたし]は映画[えいが]が大好[だいす]きですから、「行[い]きたいです」と書[か]きました。",
      en: "I love movies, so I wrote back, \"I want to go.\"",
    },
    {
      jp: "映画館[えいがかん]は駅[えき]の近[ちか]くにあります。",
      en: "The cinema is near the station.",
    },
    {
      jp: "映画[えいが]を見[み]てから、ラーメンを食[た]べたいです。",
      en: "After watching the movie, I want to eat ramen.",
    },
    {
      jp: "明日[あした]が楽[たの]しみです。",
      en: "I'm looking forward to tomorrow.",
    },
  ],
  vocabulary: [
    { word: "メール", reading: "メール", meaning: "email; text message" },
    { word: "大好[だいす]き", reading: "だいすき", meaning: "love; really like (na-adj)" },
    { word: "映画館[えいがかん]", reading: "えいがかん", meaning: "cinema; movie theater" },
    { word: "駅[えき]", reading: "えき", meaning: "station" },
    { word: "近[ちか]く", reading: "ちかく", meaning: "near; vicinity" },
    { word: "楽[たの]しみ", reading: "たのしみ", meaning: "something looked forward to" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Who did the text come from?",
      choices: ["友達", "先生", "母", "医者"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "What is the plan for tomorrow?",
      choices: [
        "映画を見に行く",
        "図書館へ行く",
        "泳ぎに行く",
        "本を買いに行く",
      ],
      answer: 0,
      explanation: "見に行きませんか — an invitation to go watch (a movie).",
    },
    {
      kind: "mc",
      prompt: "What do I want to do after the movie?",
      choices: [
        "ラーメンを食べたい",
        "家へ帰りたい",
        "本を読みたい",
        "メールを書きたい",
      ],
      answer: 0,
      explanation: "映画を見てから — 'after watching the movie'.",
    },
    {
      kind: "mc",
      prompt: "Where is the cinema?",
      choices: ["駅の近く", "学校の近く", "図書館の中", "家の近く"],
      answer: 0,
    },
  ],
};
