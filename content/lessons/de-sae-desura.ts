import type { Lesson } from "../types";

export const deSaeDesura: Lesson = {
  id: "de-sae-desura",
  stage: "advanced-topics",
  order: 2,
  title: "でさえ & ですら",
  subtitle: "でさえ · すら · はおろか",
  summary:
    "Emphasise the surprising inclusiveness of 'even' — and step up to はおろか, 'let alone'.",
  estMinutes: 16,
  vocabulary: [
    { word: "子供[こども]", reading: "こども", meaning: "child" },
    { word: "大人[おとな]", reading: "おとな", meaning: "adult" },
    { word: "彼[かれ]", reading: "かれ", meaning: "he" },
    { word: "簡単[かんたん]", reading: "かんたん", meaning: "simple; easy" },
  ],
  blocks: [
    {
      type: "prose",
      text: "{{でさえ}} and {{ですら}} translate **'even'** — highlighting that something applies to an extreme or unexpected case. {{ですら}} is slightly more literary; {{でさえ}} is common in speech.",
    },
    {
      type: "rule",
      title: "Usage",
      items: [
        "Attach to nouns: {{子供[こども]でさえ知[し]っている}} — 'Even children know it.'",
        "After te-form for verbs: {{食[た]べてでさえ}} is wrong — use {{N + でさえ}} or rephrase: {{食べることすら}}.",
        "Often paired with {{も}}: {{誰[だれ]でもさえ}} (rare) / more natural: {{誰でさえ}}.",
        "**{{すら}}** alone after nouns (literary): {{彼[かれ]すら}} — 'even he'.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "こんな簡単[かんたん]な問題[もんだい]、子供[こども]でさえできる。", en: "Even a child can do such an easy problem." },
        { jp: "彼[かれ]ですら分[わ]からなかった。", en: "Even he didn't understand." },
        { jp: "名前[なまえ]すら覚[おぼ]えていない。", en: "Don't even remember the name." },
      ],
    },
    {
      type: "heading",
      text: "さえ in conditionals",
    },
    {
      type: "rule",
      title: "Even if / as long as (different slot)",
      items: [
        "**Stem + {{さえ}} + conditional** — {{見[み]さえすれば}} — 'as long as you look.'",
        "**Noun + {{さえ}}** — {{時間[じかん]さえあれば}} — 'if only there is time.'",
        "Not the same as {{でさえ}} emphasis, but same core word {{さえ}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "時間[じかん]さえあれば、どこへでも行[い]ける。", en: "If I only had time, I could go anywhere." },
        { jp: "一口[ひとくち]さえ食[た]べれば、分[わ]かる。", en: "You'll get it if you even take one bite." },
      ],
    },
    {
      type: "note",
      text: "{{でさえ}} emphasises **who** is included. {{さえ}} in conditionals marks the **minimum condition** — same word, different grammar slot.",
    },
    {
      type: "heading",
      text: "はおろか — let alone",
    },
    {
      type: "prose",
      text: "**A {{はおろか}} B ({{も}}／{{さえ}})** dismisses A as not even worth discussing: 'B doesn't hold — let alone A.' The bigger, more obvious item goes first, and the sentence is almost always negative.",
    },
    {
      type: "examples",
      items: [
        { jp: "海外[かいがい]はおろか、隣[となり]の県[けん]にも行[い]ったことがない。", en: "I've never even been to the next prefecture, let alone abroad." },
        { jp: "走[はし]ることはおろか、歩[ある]くことさえ難[むずか]しかった。", en: "Even walking was difficult, let alone running." },
      ],
    },
    {
      type: "note",
      text: "{{おろか}} here comes from {{疎[おろそ]か}} 'neglected', not {{愚[おろ]か}} 'foolish' — the meaning is 'A is beside the point', not 'A is stupid'.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Even children know」 — particle after 子供?",
      choices: ["でさえ", "をさえ", "にさえ", "がさえ"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "ですら is closest in register to…",
      choices: ["slang", "literary / formal emphasis", "baby talk", "text abbreviations"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Emphasis meaning of でさえ?",
      choices: ["only", "even", "because", "although"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「If only there is time」?",
      choices: ["時間でさえ", "時間さえあれば", "時間すら", "時間でも"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "料理はおろか、お湯も沸かせない means…",
      choices: [
        "Can't even boil water, let alone cook",
        "Can cook but can't boil water",
        "Cooking is foolish compared to boiling water",
        "Can both cook and boil water",
      ],
      answer: 0,
      explanation: "A はおろか B も + negative: B fails too — A isn't even worth mentioning.",
    },
    {
      kind: "order",
      prompt: "Build: 'Even the experts couldn't solve that problem'",
      tiles: ["その問題[もんだい]は", "専門家[せんもんか]でさえ", "解[と]けなかった"],
      distractors: ["専門家[せんもんか]なら"],
      explanation: "でさえ marks the least likely case: even the experts.",
    },
  ],
  drills: [
    { id: "desae", prompt: "Fill — 'even a child can do it'", jp: "子供[こども]◯◯◯できる", answers: ["でさえ", "ですら"] },
    { id: "sura", prompt: "Fill — literary 'even' (adults too)", jp: "大人[おとな]◯◯◯難[むずか]しい", answers: ["ですら", "でさえ"] },
    { id: "haoroka", prompt: "Fill — 'let alone kanji, (can't) even read hiragana'", jp: "漢字[かんじ]◯◯◯◯、ひらがなも読[よ]めない", answers: ["はおろか"] },
    { id: "sae-conditional", prompt: "Fill — 'as long as he's here'", jp: "彼[かれ]◯◯いれば", answers: ["さえ"] },
  ],
};
