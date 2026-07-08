import type { Lesson } from "../types";

export const conditionals: Lesson = {
  id: "conditionals",
  stage: "essential-grammar",
  order: 9,
  title: "Conditionals",
  subtitle: "と · なら · ば · たら",
  summary:
    "Four ways to say 'if / when' — each with a different nuance, from natural laws to hypotheticals.",
  estMinutes: 22,
  vocabulary: [
    { word: "雨[あめ]", reading: "あめ", meaning: "rain" },
    { word: "暑[あつ]い", reading: "あつい", meaning: "hot (weather)" },
    { word: "暇[ひま]", reading: "ひま", meaning: "free time" },
    { word: "病気[びょうき]", reading: "びょうき", meaning: "illness" },
    { word: "東京[とうきょう]", reading: "とうきょう", meaning: "Tokyo" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Japanese has **four conditional patterns**. They are not interchangeable — each encodes how sure you are, whether the result always follows, and whether you're talking about the future or giving advice.",
    },
    {
      type: "rule",
      title: "と — natural, automatic result",
      items: [
        "Use when **B always happens when A** — like a law of nature or fixed rule.",
        "Attach {{と}} to the **dictionary form** (verbs, i-adjectives) or {{だ}} (nouns).",
        "{{春[はる]になると、暖[あたた]かくなる}} — 'When spring comes, it gets warm.'",
      ],
    },
    {
      type: "rule",
      title: "なら — contextual 'if / given that'",
      items: [
        "Assumes the listener already raised the topic — 'if that's the case…'",
        "Attach to dictionary form or {{だ}}: {{東京に行くなら、新幹線がいい}}.",
        "Great for advice and suggestions about something already on the table.",
      ],
    },
    {
      type: "rule",
      title: "ば — general hypothetical",
      items: [
        "The broad 'if' — works for many hypothetical situations.",
        "**I-adjectives:** drop {{い}}, add {{ければ}}. {{安ければ、買う}}.",
        "**Verbs:** change final /u/ to /e/, add {{ば}}. {{食べれば}}.",
        "**Nouns / na-adj:** {{だ}} → {{なら}} (same surface as なら conditional).",
      ],
    },
    {
      type: "rule",
      title: "たら — 'when / if' (past-tense stem)",
      items: [
        "Attach {{たら}} to the **past tense stem** (た-form without context of past time).",
        "{{着[つ]いたら、電[でん]話[わ]して}} — 'When you arrive, call me.'",
        "Also used for counterfactuals: {{お金[かね]があったら、旅行[りょこう]する}} — 'If I had money, I'd travel.'",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "ボタンを押[お]すと、音[おと]が出[で]る。", en: "Press the button and a sound comes out (always)." },
        { jp: "時間[じかん]があるなら、手伝[てつだ]って。", en: "If you have time (given that), help me." },
        { jp: "安[やす]ければ、買[か]う。", en: "If it's cheap, I'll buy it." },
        { jp: "雨[あめ]が降[ふ]ったら、行[い]かない。", en: "If it rains, I won't go." },
      ],
    },
    {
      type: "table",
      caption: "Pick the right conditional",
      headers: ["Pattern", "Best for", "Example"],
      rows: [
        ["と", "automatic / always", "春[はる]になると暖[あた]かい"],
        ["なら", "advice on a topic raised", "行[い]くなら早[はや]い方[ほう]がいい"],
        ["ば", "general if", "勉強[べんきょう]すれば分[わ]かる"],
        ["たら", "when / if (everyday)", "着[つ]いたら連絡[れんらく]して"],
      ],
    },
    {
      type: "note",
      text: "Optional {{もし}} at the start adds 'if' emphasis: {{もし雨[あめ]が降[ふ]ったら}}. Nouns: {{学生[がくせい]なら}} (if you're a student) vs {{学生だと}} (when someone is a student → always…).",
    },
    {
      type: "tip",
      text: "Start with {{たら}} for everyday 'when/if' and {{なら}} for advice. Save {{と}} for inevitable pairs and {{ば}} for textbook hypotheticals.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Automatic result ('when you press X, Y happens') — best choice?",
      choices: ["と", "なら", "たら", "か"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Advice about a topic already raised: 「東京に行く＿、新幹線がいい」",
      choices: ["と", "なら", "ば", "て"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「When you arrive, call me」 — pattern?",
      choices: ["着くと", "着くなら", "着いたら", "着けば"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "「If you're a student (advice)」 — noun?",
      choices: ["学生だと", "学生なら", "学生たら", "学生ば"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'If there is time, I'll go'",
      tiles: ["時間[じかん]が", "あれば", "行[い]く"],
      distractors: ["あれなら"],
      explanation: "ば conditional: ある → あれば.",
    },
  ],
};
