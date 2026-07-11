import type { Lesson } from "../types";

export const conditionals: Lesson = {
  id: "conditionals",
  stage: "n4",
  order: 3,
  title: "Conditionals — と & たら",
  subtitle: "Natural result · when / if",
  summary:
    "Master everyday 'when / if' with と (automatic result) and たら (when/if after) — commuting delays, plans, and habits. ば and なら wait until N3.",
  estMinutes: 18,
  vocabulary: [
    { word: "雨[あめ]", reading: "あめ", meaning: "rain" },
    { word: "遅[おく]れる", reading: "おくれる", meaning: "to be late; to delay" },
    { word: "着[つ]く", reading: "つく", meaning: "to arrive" },
    { word: "連絡[れんらく]する", reading: "れんらくする", meaning: "to contact" },
    { word: "押[お]す", reading: "おす", meaning: "to push; to press" },
    { word: "春[はる]", reading: "はる", meaning: "spring" },
    { word: "暇[ひま]", reading: "ひま", meaning: "free time" },
    { word: "電話[でんわ]", reading: "でんわ", meaning: "telephone; a call" },
    { word: "タクシー", reading: "タクシー", meaning: "taxi" },
  ],
  blocks: [
    {
      type: "prose",
      text: "At N4, focus on **two** conditionals you will use every day: {{と}} for things that **always follow**, and {{たら}} for **when/if something happens, then…**. Deeper {{ば}} and contextual {{なら}} live in Conditionals with Nuance (N3).",
    },
    {
      type: "heading",
      text: "と — natural / automatic result",
    },
    {
      type: "rule",
      title: "Whenever A, B follows",
      items: [
        "Use when **B reliably happens if A** — habits, rules, natural pairs.",
        "Attach {{と}} to the **dictionary form** (verbs, i-adjectives) or noun/na + {{だ}}.",
        "Often not for volitional 'I'll…' commands after {{と}} — prefer {{たら}} for 'when you arrive, call me'.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "ボタンを押[お]すと、ドアが開[あ]く。", en: "When you press the button, the door opens." },
        { jp: "春[はる]になると、暖[あたた]かくなる。", en: "When spring comes, it gets warm." },
        { jp: "この線[せん]は雨[あめ]が降[ふ]ると、よく遅[おく]れる。", en: "This line often gets delayed when it rains." },
        { jp: "駅[えき]を出[で]ると、コンビニがある。", en: "When you leave the station, there's a convenience store." },
      ],
    },
    {
      type: "heading",
      text: "たら — when / if (past stem)",
    },
    {
      type: "rule",
      title: "Formation & use",
      items: [
        "Attach {{たら}} to the **た-form** stem: {{着いた}} → {{着いたら}}, {{降った}} → {{降ったら}}.",
        "Nouns / na-adjectives: {{だったら}} — {{暇だったら}}.",
        "Everyday 'when you…, (please)…', one-shot futures, and soft hypotheticals.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "駅[えき]に着[つ]いたら、連絡[れんらく]して。", en: "When you arrive at the station, get in touch." },
        { jp: "雨[あめ]が降[ふ]ったら、行[い]かない。", en: "If it rains, I won't go." },
        { jp: "電車[でんしゃ]が遅[おく]れたら、タクシーで行[い]く。", en: "If the train is delayed, I'll go by taxi." },
        { jp: "暇[ひま]だったら、手伝[てつだ]ってくれない？", en: "If you're free, could you help me?" },
      ],
    },
    {
      type: "table",
      caption: "と vs たら",
      headers: ["Pattern", "Best for", "Example"],
      rows: [
        ["と", "automatic / habitual result", "雨が降ると遅れる"],
        ["たら", "when/if (then do X)", "着いたら電話して"],
      ],
    },
    {
      type: "dialogue",
      title: "If the train is late",
      lines: [
        { speaker: "A", jp: "会議[かいぎ]、九時[くじ]だよね。", en: "The meeting's at nine, right?" },
        { speaker: "B", jp: "うん。遅[おく]れたら、先[さき]に始[はじ]めてて。", en: "Yeah. If I'm late, start without me." },
        { speaker: "A", jp: "わかった。着[つ]いたらメッセして。", en: "Got it. Message me when you arrive." },
        { speaker: "B", jp: "この線[せん]、朝[あさ]は押[お]すとすぐ混[こ]むからね。", en: "This line gets packed as soon as (people) push on in the morning." },
      ],
    },
    {
      type: "note",
      text: "Optional {{もし}} adds 'if' emphasis: {{もし遅れたら}}. {{ば}} (general if) and {{なら}} (given that / advice on a raised topic) are covered properly at N3 — a short pointer is enough for now.",
    },
    {
      type: "tip",
      text: "Default everyday choice: {{たら}} for plans and requests after an event; {{と}} when A and B feel like a fixed pair or habit.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Automatic result ('press X → Y happens') — best?",
      choices: ["と", "たら", "ば", "なら"],
      answer: 0,
      explanation: "と marks a reliable / automatic result.",
    },
    {
      kind: "mc",
      prompt: "「When you arrive, call me」?",
      choices: ["着くと電話して", "着いたら電話して", "着くなら電話して", "着けば電話して"],
      answer: 1,
      explanation: "たら fits 'when you…, (please)…'.",
    },
    {
      kind: "mc",
      prompt: "「If it rains, I won't go」 — natural?",
      choices: ["雨が降ると行かない (always)", "雨が降ったら行かない", "雨が降るば行かない", "雨が降るたら行かない"],
      answer: 1,
      explanation: "たら for this one-shot decision.",
    },
    {
      kind: "mc",
      prompt: "Noun 'if free' with たら?",
      choices: ["暇と", "暇たら", "暇だったら", "暇れば"],
      answer: 2,
    },
    {
      kind: "fill",
      prompt: "Fill — automatic: 'when spring comes…'",
      promptJp: "春[はる]になる◯、…",
      answers: ["と"],
      explanation: "と after dictionary form for natural result.",
    },
    {
      kind: "order",
      prompt: "Build: 'If the train is delayed, I'll take a taxi'",
      tiles: ["電車[でんしゃ]が", "遅[おく]れたら、", "タクシーで行[い]く"],
      distractors: ["遅[おく]れると、"],
      explanation: "たら for this plan-after-event; と would sound more like a fixed law.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "駅[えき]に着[つ]いたら連絡[れんらく]して",
      explanation: "駅に着いたら連絡して — When you arrive at the station, contact me.",
    },
  ],
  drills: [
    { id: "to", prompt: "Fill — automatic result", jp: "雨[あめ]が降[ふ]る◯、遅[おく]れる", answers: ["と"] },
    { id: "tara", prompt: "Make the たら-form — 'arrive'", jp: "着[つ]く", answers: ["着[つ]いたら"] },
    { id: "tara-ame", prompt: "Make the たら-form — 'rain'", jp: "降[ふ]る", answers: ["降[ふ]ったら"] },
    { id: "tara-hima", prompt: "Make the たら-form — 'free'", jp: "暇[ひま]", answers: ["暇[ひま]だったら"] },
    { id: "to-haru", prompt: "Fill — 'when spring comes'", jp: "春[はる]になる◯暖[あたた]かくなる", answers: ["と"] },
  ],
};
