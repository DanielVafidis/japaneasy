import type { Lesson } from "../types";

export const verbParticles: Lesson = {
  id: "verb-particles",
  stage: "basic-grammar",
  order: 6,
  title: "Particles used with verbs",
  subtitle: "を (object), に (target), へ (direction), で (context)",
  summary:
    "Connect verbs to the rest of the sentence: what's acted on, where it's headed, and where it happens.",
  estMinutes: 18,
  vocabulary: [
    { word: "寿司", reading: "すし", meaning: "sushi" },
    { word: "食べる", reading: "たべる", meaning: "to eat" },
    { word: "学校", reading: "がっこう", meaning: "school" },
    { word: "行く", reading: "いく", meaning: "to go" },
    { word: "家", reading: "いえ", meaning: "house; home" },
    { word: "電車", reading: "でんしゃ", meaning: "train" },
    { word: "友達", reading: "ともだち", meaning: "friend" },
  ],
  blocks: [
    {
      type: "heading",
      text: "を — the direct object",
    },
    {
      type: "prose",
      text: "The particle {{を}} (pronounced **o**) marks the direct object — the thing the verb acts upon.",
    },
    {
      type: "examples",
      items: [
        { jp: "寿司[すし]を食[た]べる。", en: "Eat sushi." },
        { jp: "本[ほん]を読[よ]む。", en: "Read a book.", note: "本 = book, 読む = to read" },
      ],
    },
    {
      type: "heading",
      text: "に — the target",
    },
    {
      type: "prose",
      text: "{{に}} marks a target or destination: where you go, where something exists, a point in time, or an indirect object (the receiver of an action).",
    },
    {
      type: "examples",
      items: [
        { jp: "学校[がっこう]に行[い]く。", en: "Go to school. (destination)" },
        { jp: "友達[ともだち]に話[はな]す。", en: "Talk to a friend. (indirect object)" },
        { jp: "三時[さんじ]に来[く]る。", en: "Come at 3 o'clock. (time)" },
      ],
    },
    {
      type: "heading",
      text: "へ — direction",
    },
    {
      type: "prose",
      text: "{{へ}} (pronounced **e** as a particle) also points toward a destination, but emphasises the *direction* of movement rather than the exact arrival point. With movement verbs, に and へ often overlap.",
    },
    {
      type: "examples",
      items: [{ jp: "家[いえ]へ帰[かえ]る。", en: "Head home. (toward home)" }],
    },
    {
      type: "heading",
      text: "で — context / means",
    },
    {
      type: "prose",
      text: "{{で}} marks the **context** in which an action happens — the place where it occurs, or the means/tool used to do it.",
    },
    {
      type: "examples",
      items: [
        { jp: "家[いえ]で食[た]べる。", en: "Eat at home. (location of action)" },
        { jp: "電車[でんしゃ]で行[い]く。", en: "Go by train. (means)" },
      ],
    },
    {
      type: "tip",
      text: "に vs で with places: に marks the destination you move toward (学校に行く), while で marks where an action takes place (学校で食べる). Same place, different role.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Which particle marks the direct object (the thing eaten)?",
      promptJp: "寿司＿食べる",
      choices: ["は", "を", "に", "で"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "'Eat AT home' — which particle marks 家?",
      promptJp: "家＿食べる",
      choices: ["を", "に", "で", "へ"],
      answer: 2,
      explanation: "で marks the location where an action takes place.",
    },
    {
      kind: "mc",
      prompt: "'Go TO school' — which particle marks the destination?",
      promptJp: "学校＿行く",
      choices: ["で", "を", "に", "も"],
      answer: 2,
    },
    {
      kind: "fill",
      prompt: "Complete: go by train — 電車＿行く. Type just the particle:",
      answers: ["で"],
    },
    {
      kind: "order",
      prompt: "Build: 'I go to school by train'",
      tiles: ["電車[でんしゃ]で", "学校[がっこう]へ", "行[い]く"],
      distractors: ["学校[がっこう]を"],
      explanation: "で marks the means (by train), へ the direction; the verb comes last.",
    },
  ],
};
