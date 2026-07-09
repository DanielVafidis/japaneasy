import type { Lesson } from "../types";

export const transitivity: Lesson = {
  id: "transitivity",
  stage: "basic-grammar",
  order: 7,
  title: "Transitive & Intransitive Verbs",
  subtitle: "Verb pairs that look alike but behave differently",
  summary:
    "Why some verbs take を and others don't — and how Japanese pairs them up.",
  estMinutes: 12,
  vocabulary: [
    { word: "開ける", reading: "あける", meaning: "to open (something) — transitive" },
    { word: "開く", reading: "あく", meaning: "(something) opens — intransitive" },
    { word: "出す", reading: "だす", meaning: "to take out — transitive" },
    { word: "出る", reading: "でる", meaning: "to come out / leave — intransitive" },
    { word: "電気", reading: "でんき", meaning: "electricity; light" },
    { word: "ドア", reading: "ドア", meaning: "door" },
  ],
  blocks: [
    {
      type: "prose",
      text: "A **transitive** verb has someone *doing* the action to an object ('I open the door'). An **intransitive** verb describes something happening on its own ('the door opens'). Japanese often has a matched pair for the same idea.",
    },
    {
      type: "rule",
      title: "The key difference",
      items: [
        "**Transitive** verbs take a direct object marked with {{を}} — there's an actor doing it.",
        "**Intransitive** verbs do **not** take を — the subject simply undergoes the change (often marked with {{が}}).",
      ],
    },
    {
      type: "examples",
      title: "Same event, two viewpoints",
      items: [
        { jp: "ドアを開[あ]ける。", en: "(Someone) opens the door. — transitive, を" },
        { jp: "ドアが開[あ]く。", en: "The door opens. — intransitive, が" },
        { jp: "電気[でんき]を消[け]す。", en: "Turn off the light. — transitive", note: "消す = to turn off" },
        { jp: "電気[でんき]が消[き]える。", en: "The light goes off. — intransitive" },
      ],
    },
    {
      type: "note",
      text: "There's no perfect rule for which pair-form is which, but patterns help: pairs ending in す are usually transitive (出す, 消す), and their partners (出る, 消える) are intransitive. Learn them in pairs.",
    },
    {
      type: "tip",
      text: "If you find yourself wanting to put を before an intransitive verb, that's the signal you need its transitive partner instead.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Which sentence means 'The door opens (by itself)'?",
      choices: ["ドアを開ける。", "ドアが開く。", "ドアを開く。", "ドアに開ける。"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Transitive verbs take which particle for their object?",
      choices: ["が", "を", "に", "で"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Which verb is intransitive (no を)?",
      choices: ["開ける (akeru)", "出す (dasu)", "消える (kieru)", "消す (kesu)"],
      answer: 2,
    },
    {
      kind: "order",
      prompt: "Build: 'The door opened from the wind'",
      tiles: ["風[かぜ]で", "ドアが", "開[あ]いた"],
      distractors: ["開[あ]けた"],
      explanation: "Intransitive 開く (it opened) — 開けた would need someone doing the opening (を).",
    },
  ],
  drills: [
    { id: "intransitive-partner", prompt: "Type the intransitive partner — 'something opens'", jp: "開[あ]ける → ？", answers: ["開[あ]く"] },
    { id: "transitive-partner", prompt: "Type the transitive partner — 'take something out'", jp: "出[で]る → ？", answers: ["出[だ]す"] },
    { id: "transitive-wo", prompt: "Fill the particle — '(someone) opens the door'", jp: "ドア◯開[あ]ける", answers: ["を"] },
    { id: "intransitive-ga", prompt: "Fill the particle — 'the door opens'", jp: "ドア◯開[あ]く", answers: ["が"] },
  ],
};
