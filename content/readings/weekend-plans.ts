import type { Reading } from "../types";

/** Uses: つもり, たい, たら. */
export const weekendPlans: Reading = {
  id: "weekend-plans",
  stage: "n4",
  order: 6,
  title: "Weekend Plans",
  jpTitle: "週末[しゅうまつ]の予定[よてい]",
  summary: "Museum plans with a friend — walk if it's nice, train if it rains.",
  estMinutes: 4,
  body: [
    {
      jp: "週末[しゅうまつ]は美術館[びじゅつかん]へ行[い]くつもりです。",
      en: "This weekend I plan to go to the museum.",
    },
    {
      jp: "友達[ともだち]も行[い]きたいと言[い]いました。",
      en: "My friend said they want to go too.",
    },
    {
      jp: "いい天気[てんき]だったら、歩[ある]いて行[い]きます。",
      en: "If the weather is nice, we'll walk.",
    },
    {
      jp: "雨[あめ]だったら、電車[でんしゃ]で行[い]きます。",
      en: "If it rains, we'll go by train.",
    },
    {
      jp: "美術館[びじゅつかん]で絵[え]を見[み]るつもりです。",
      en: "We plan to look at paintings at the museum.",
    },
    {
      jp: "その後[あと]、ラーメンを食[た]べたいです。",
      en: "After that, I want to eat ramen.",
    },
  ],
  vocabulary: [
    { word: "週末[しゅうまつ]", reading: "しゅうまつ", meaning: "weekend" },
    { word: "予定[よてい]", reading: "よてい", meaning: "plan; schedule" },
    { word: "美術館[びじゅつかん]", reading: "びじゅつかん", meaning: "art museum" },
    { word: "つもり", reading: "つもり", meaning: "intention; plan" },
    { word: "天気[てんき]", reading: "てんき", meaning: "weather" },
    { word: "絵[え]", reading: "え", meaning: "picture; painting" },
    { word: "その後[あと]", reading: "そのあと", meaning: "after that" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "What do I plan to do this weekend?",
      choices: [
        "美術館へ行く",
        "映画館へ行く",
        "家で休む",
        "公園で遊ぶ",
      ],
      answer: 0,
      explanation: "行くつもりです — firm plan with つもり.",
    },
    {
      kind: "mc",
      prompt: "If it rains, how do we go?",
      choices: ["電車で", "歩いて", "バスで", "自転車で"],
      answer: 0,
      explanation: "雨だったら、電車で行きます.",
    },
    {
      kind: "mc",
      prompt: "What do I want to do after the museum?",
      choices: [
        "ラーメンを食べたい",
        "絵を描きたい",
        "家へ帰りたい",
        "本を読みたい",
      ],
      answer: 0,
      explanation: "その後、ラーメンを食べたいです.",
    },
  ],
};
