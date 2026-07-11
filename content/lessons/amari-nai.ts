import type { Lesson } from "../types";

export const amariNai: Lesson = {
  id: "amari-nai",
  stage: "n5",
  order: 18,
  title: "Not Much / Not Very",
  subtitle: "あまり〜ない",
  summary:
    "Downplay how much you like, spend, or do — spicy food, high prices, exercise habits — with あまり before a negative.",
  estMinutes: 14,
  vocabulary: [
    { word: "あまり", reading: "あまり", meaning: "not very; not much (with negative)" },
    { word: "全然[ぜんぜん]", reading: "ぜんぜん", meaning: "not at all (with negative)" },
    { word: "辛[から]い", reading: "からい", meaning: "spicy; hot (food)" },
    { word: "好[す]き", reading: "すき", meaning: "to like; fond of" },
    { word: "高[たか]い", reading: "たかい", meaning: "expensive; high" },
    { word: "運動[うんどう]", reading: "うんどう", meaning: "exercise; physical activity" },
    { word: "野菜[やさい]", reading: "やさい", meaning: "vegetables" },
    { word: "映画[えいが]", reading: "えいが", meaning: "movie" },
    { word: "早起[はやお]き", reading: "はやおき", meaning: "getting up early" },
    { word: "習慣[しゅうかん]", reading: "しゅうかん", meaning: "habit" },
  ],
  blocks: [
    {
      type: "prose",
      text: "{{あまり}} means **not very** or **not much** — but only when the sentence is **negative**. Without {{ない}} / {{じゃない}} / {{ません}}, {{あまり}} doesn't work this way. It's softer than a flat denial.",
    },
    {
      type: "heading",
      text: "あまり + negative",
    },
    {
      type: "rule",
      title: "The pattern",
      items: [
        "{{あまり}} + verb/adjective **negative** — not much / not very: {{あまり好きじゃない}}.",
        "Place {{あまり}} **before** the phrase you're downplaying.",
        "Polite: {{あまり〜ません}} · {{あまり〜じゃありません}}.",
      ],
    },
    {
      type: "examples",
      title: "Preferences & prices",
      items: [
        { jp: "辛[から]い料理[りょうり]はあまり好[す]きじゃない。", en: "I don't really like spicy food." },
        { jp: "この店[みせ]はあまり高[たか]くない。", en: "This shop isn't very expensive." },
        { jp: "あまり映画[えいが]を見[み]ない。", en: "I don't watch movies much." },
      ],
    },
    {
      type: "heading",
      text: "Habits & routines",
    },
    {
      type: "examples",
      items: [
        { jp: "運動[うんどう]はあまりしない。", en: "I don't exercise much." },
        { jp: "野菜[やさい]をあまり食[た]べない。", en: "I don't eat many vegetables." },
        { jp: "早起[はやお]きはあまり得意[とくい]じゃない。", en: "I'm not very good at getting up early." },
      ],
    },
    {
      type: "dialogue",
      title: "Lunch plans",
      lines: [
        { speaker: "A", jp: "このカレー、辛[から]い？", en: "Is this curry spicy?" },
        { speaker: "B", jp: "うん。でも、あまり辛[から]くないよ。", en: "Yeah — but it's not very spicy." },
        { speaker: "A", jp: "値段[ねだん]は？", en: "How about the price?" },
        { speaker: "B", jp: "駅[えき]の近[ちか]くだから、あまり高[たか]くない。", en: "It's near the station, so it's not too expensive." },
      ],
    },
    {
      type: "heading",
      text: "あまり vs 全然",
    },
    {
      type: "prose",
      text: "Both pair with negatives, but **{{全然}}** is stronger — **not at all**: {{全然好きじゃない}}. **{{あまり}}** is milder — **not very much**: {{あまり好きじゃない}}. In casual speech, {{全然}} sometimes appears with positives ('totally!') — stick to the negative pair in N5.",
    },
    {
      type: "examples",
      items: [
        { jp: "辛[から]いものは全然[ぜんぜん]食[た]べない。", en: "I don't eat spicy things at all." },
        { jp: "辛[から]いものはあまり食[た]べない。", en: "I don't eat spicy things much." },
      ],
    },
    {
      type: "note",
      text: "✗ {{あまり好き}} without a negative is incomplete for this meaning. ✓ {{あまり好きじゃない}} / {{あまり好きではない}}.",
    },
    {
      type: "tip",
      text: "{{あまり}} also means 'remainder' in other patterns ({{残りのあまり}}). Here you're learning the **degree** use — always check for a negative nearby.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Don't really like spicy food」?",
      choices: ["辛い料理はあまり好き", "辛い料理はあまり好きじゃない", "辛い料理はあまり好きだ", "辛い料理は全然好き"],
      answer: 1,
      explanation: "あまり needs a negative: あまり好きじゃない.",
    },
    {
      kind: "mc",
      prompt: "あまり means 'not very' only when…",
      choices: ["the sentence is negative", "the sentence is past tense", "you add です", "the verb is する"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Stronger 'not at all' (with negative)?",
      choices: ["あまり", "全然", "もう", "まだ"],
      answer: 1,
      explanation: "全然 + negative = not at all; あまり is milder.",
    },
    {
      kind: "mc",
      prompt: "「Don't exercise much」?",
      choices: ["運動はあまりする", "運動はあまりしない", "運動はあまりした", "運動はあまりして"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Which is grammatically wrong for 'not very expensive'?",
      choices: ["あまり高くない", "あまり高いじゃない", "あまり高くありません", "あまり高い"],
      answer: 3,
      explanation: "あまり高い lacks the required negative.",
    },
    {
      kind: "order",
      prompt: "Build: 'I don't watch movies much'",
      tiles: ["あまり", "映画[えいが]を", "見[み]ない"],
      distractors: ["見[み]る", "全然[ぜんぜん]"],
      explanation: "あまり before the phrase; negative verb at the end.",
    },
  ],
  drills: [
    { id: "amari-suki", prompt: "Not very — 'don't really like spicy food'", jp: "辛[から]い料理[りょうり]が好[す]き", answers: ["あまり辛[から]い料理[りょうり]が好[す]きじゃない"] },
    { id: "amari-takai", prompt: "Not very — 'not very expensive'", jp: "高[たか]い", answers: ["あまり高[たか]くない"] },
    { id: "amari-undo", prompt: "Not much — 'don't exercise much'", jp: "運動[うんどう]をする", answers: ["あまり運動[うんどう]をしない"] },
    { id: "amari-eiga", prompt: "Not much — 'don't watch movies much'", jp: "映画[えいが]を見[み]る", answers: ["あまり映画[えいが]を見[み]ない"] },
    { id: "fill-amari", prompt: "Fill — 'not many vegetables'", jp: "野菜[やさい]を◯◯食[た]べない", answers: ["あまり"] },
    { id: "zenzen-contrast", prompt: "Stronger — 'don't like it at all'", jp: "好[す]きじゃない", answers: ["全然[ぜんぜん]好[す]きじゃない"] },
  ],
};
