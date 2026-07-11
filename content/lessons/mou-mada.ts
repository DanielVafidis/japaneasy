import type { Lesson } from "../types";

export const mouMada: Lesson = {
  id: "mou-mada",
  stage: "n5",
  order: 17,
  title: "Already & Still",
  subtitle: "もう · まだ",
  summary:
    "Track what's done and what isn't yet — breakfast eaten, train gone, rain stopped, still sleepy — with もう and まだ.",
  estMinutes: 14,
  vocabulary: [
    { word: "もう", reading: "もう", meaning: "already; anymore (with negative)" },
    { word: "まだ", reading: "まだ", meaning: "still; not yet (with negative)" },
    { word: "朝[あさ]ごはん", reading: "あさごはん", meaning: "breakfast" },
    { word: "電車[でんしゃ]", reading: "でんしゃ", meaning: "train" },
    { word: "雨[あめ]", reading: "あめ", meaning: "rain" },
    { word: "眠[ねむ]い", reading: "ねむい", meaning: "sleepy" },
    { word: "駅[えき]", reading: "えき", meaning: "station" },
    { word: "着[つ]く", reading: "つく", meaning: "to arrive" },
    { word: "終[お]わる", reading: "おわる", meaning: "to finish; to end" },
    { word: "寒[さむ]い", reading: "さむい", meaning: "cold (weather)" },
  ],
  blocks: [
    {
      type: "prose",
      text: "{{もう}} and {{まだ}} sit **before** the verb or adjective and answer: *has this changed yet?* Meals finished, trains departed, weather shifted, eyes still heavy — these two adverbs show up everywhere in daily talk.",
    },
    {
      type: "heading",
      text: "もう — already",
    },
    {
      type: "rule",
      title: "Change has happened",
      items: [
        "{{もう}} + **past verb** — the action is done: {{もう朝ごはんを食べた}}.",
        "{{もう}} + **state / ている** — already in that state: {{もう電車は行った}}, {{もう雨が降っている}}.",
        "Often pairs with a time word: {{もう七時だ}} — it's already seven.",
      ],
    },
    {
      type: "examples",
      title: "Meals & trains",
      items: [
        { jp: "もう朝[あさ]ごはんを食[た]べた。", en: "I already ate breakfast." },
        { jp: "電車[でんしゃ]はもう出[で]た。", en: "The train already left." },
        { jp: "会議[かいぎ]はもう終[お]わった。", en: "The meeting already ended." },
      ],
    },
    {
      type: "heading",
      text: "まだ — still",
    },
    {
      type: "rule",
      title: "Still the case (affirmative)",
      items: [
        "{{まだ}} + verb / adjective / ている — **still** true: {{まだ眠い}}, {{まだ駅にいる}}.",
        "The situation **hasn't changed** from the listener's point of view.",
      ],
    },
    {
      type: "examples",
      title: "Sleepiness & weather",
      items: [
        { jp: "朝[あさ]ごはんのあとでも、まだ眠[ねむ]い。", en: "Even after breakfast, I'm still sleepy." },
        { jp: "外[そと]はまだ寒[さむ]い。", en: "It's still cold outside." },
        { jp: "まだ雨[あめ]が降[ふ]っている。", en: "It's still raining." },
      ],
    },
    {
      type: "heading",
      text: "まだ + negative — not yet",
    },
    {
      type: "prose",
      text: "{{まだ}} before a **negative** means **not yet**. For ongoing situations, prefer {{〜ていない}} over plain {{〜ない}} — it sounds more natural for 'hasn't happened yet'.",
    },
    {
      type: "examples",
      items: [
        { jp: "まだ駅[えき]に着[つ]いていない。", en: "Haven't arrived at the station yet." },
        { jp: "昼[ひる]ごはん、まだ食[た]べていない。", en: "Haven't eaten lunch yet." },
        { jp: "宿題[しゅくだい]、まだ終[お]わっていない。", en: "Homework isn't finished yet." },
      ],
    },
    {
      type: "heading",
      text: "もう vs まだ — side by side",
    },
    {
      type: "table",
      caption: "Quick contrast",
      headers: ["Pattern", "Meaning", "Example"],
      rows: [
        ["もう + past / state", "already", "もう食べた — already ate"],
        ["まだ + affirmative", "still", "まだ眠い — still sleepy"],
        ["まだ + negative", "not yet", "まだ着いていない — not arrived yet"],
        ["もう + negative", "no longer", "もう降っていない — not raining anymore"],
      ],
    },
    {
      type: "dialogue",
      title: "Morning commute",
      lines: [
        { speaker: "A", jp: "もう朝[あさ]ごはん、食[た]べた？", en: "Did you already eat breakfast?" },
        { speaker: "B", jp: "ううん、まだ食[た]べていない。電車[でんしゃ]に間[ま]に合[あ]わなくて。", en: "Nope, not yet — I was going to miss the train." },
        { speaker: "A", jp: "電車[でんしゃ]、もう行[い]った？", en: "Did the train already leave?" },
        { speaker: "B", jp: "まだ来[き]てないよ。でも、まだ眠[ねむ]い…", en: "It hasn't come yet. But I'm still sleepy…" },
      ],
    },
    {
      type: "note",
      text: "**{{もう}} + negative** = **no longer** / **not anymore**: {{もう雨が降っていない}} — it's not raining anymore. Compare {{まだ降っている}} (still raining).",
    },
    {
      type: "tip",
      text: "In quick replies, {{もう}} alone can mean 'enough already!' or 'that's it': {{もういい}} — that's fine / stop. Context carries the tone.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Already ate breakfast」?",
      choices: ["まだ朝ごはんを食べた", "もう朝ごはんを食べた", "もう朝ごはんを食べない", "まだ朝ごはんを食べる"],
      answer: 1,
      explanation: "もう + past = already did.",
    },
    {
      kind: "mc",
      prompt: "「Still sleepy」?",
      choices: ["もう眠い", "まだ眠い", "まだ眠くない", "もう眠くない"],
      answer: 1,
      explanation: "まだ + affirmative = still.",
    },
    {
      kind: "mc",
      prompt: "「Haven't arrived at the station yet」 (natural)?",
      choices: ["まだ駅に着いた", "まだ駅に着いていない", "もう駅に着いていない", "もう駅に着いた"],
      answer: 1,
      explanation: "まだ + ていない = not yet (ongoing).",
    },
    {
      kind: "mc",
      prompt: "「It's not raining anymore」?",
      choices: ["まだ雨が降っている", "もう雨が降っていない", "まだ雨が降っていない", "もう雨が降っている"],
      answer: 1,
      explanation: "もう + negative = no longer.",
    },
    {
      kind: "mc",
      prompt: "The train already left — which fits?",
      choices: ["電車はまだ出た", "電車はもう出た", "電車はまだ出ていない", "電車はもう出ない"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'I already ate breakfast'",
      tiles: ["もう", "朝[あさ]ごはんを", "食[た]べた"],
      distractors: ["まだ", "食[た]べていない"],
      explanation: "もう marks 'already'; past verb at the end.",
    },
  ],
  drills: [
    { id: "mou-past", prompt: "Already — 'already ate breakfast'", jp: "朝[あさ]ごはんを食[た]べる", answers: ["もう朝[あさ]ごはんを食[た]べた"] },
    { id: "mada-aff", prompt: "Still — 'still sleepy'", jp: "眠[ねむ]い", answers: ["まだ眠[ねむ]い"] },
    { id: "mada-neg", prompt: "Not yet — 'haven't arrived at the station'", jp: "駅[えき]に着[つ]く", answers: ["まだ駅[えき]に着[つ]いていない"] },
    { id: "mou-neg", prompt: "No longer — 'not raining anymore'", jp: "雨[あめ]が降[ふ]っている", answers: ["もう雨[あめ]が降[ふ]っていない"] },
    { id: "mou-train", prompt: "Already — 'the train already left'", jp: "電車[でんしゃ]は", answers: ["もう出[で]た", "もう電車[でんしゃ]は出[で]た"] },
    { id: "mada-rain", prompt: "Still — 'still raining'", jp: "雨[あめ]が降[ふ]る", answers: ["まだ雨[あめ]が降[ふ]っている"] },
  ],
};
