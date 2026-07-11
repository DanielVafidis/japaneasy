import type { Reading } from "../types";

/** Uses: ある/いる, の, relative clauses, adjectives. */
export const myTown: Reading = {
  id: "my-town",
  stage: "n5",
  order: 2,
  title: "My Town",
  jpTitle: "私[わたし]の町[まち]",
  summary: "A small town, a quiet park, and the library I keep going back to.",
  estMinutes: 3,
  body: [
    {
      jp: "私[わたし]の町[まち]は小[ちい]さい。でも、いい町[まち]だ。",
      en: "My town is small. But it's a good town.",
    },
    {
      jp: "静[しず]かな公園[こうえん]がある。",
      en: "There's a quiet park.",
    },
    {
      jp: "公園[こうえん]に猫[ねこ]がいる。いつも静[しず]かだ。",
      en: "There's a cat in the park. It's always quiet.",
    },
    {
      jp: "大[おお]きい図書館[としょかん]もある。私[わたし]がよく行[い]く図書館[としょかん]だ。",
      en: "There's also a big library. It's the library I often go to.",
    },
    {
      jp: "駅[えき]の近[ちか]くに高[たか]い建物[たてもの]がある。",
      en: "Near the station there's a tall building.",
    },
    {
      jp: "私[わたし]はこの町[まち]が好[す]きだ。",
      en: "I like this town.",
    },
  ],
  vocabulary: [
    { word: "町[まち]", reading: "まち", meaning: "town" },
    { word: "公園[こうえん]", reading: "こうえん", meaning: "park" },
    { word: "いつも", reading: "いつも", meaning: "always" },
    { word: "よく", reading: "よく", meaning: "often; well" },
    { word: "建物[たてもの]", reading: "たてもの", meaning: "building" },
    { word: "好[す]き", reading: "すき", meaning: "liked; favourite (na-adj)" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "What is the town like?",
      choices: ["小さいけれど、いい町", "大きくて静かな町", "高い町", "新しい町"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "What is in the park?",
      choices: ["猫", "犬", "建物", "バス"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Which place do I often go to?",
      choices: ["図書館", "公園", "駅", "学校"],
      answer: 0,
      explanation: "私がよく行く図書館 — a relative clause describing the library.",
    },
  ],
};
