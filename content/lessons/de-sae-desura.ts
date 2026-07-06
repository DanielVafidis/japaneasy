import type { Lesson } from "../types";

export const deSaeDesura: Lesson = {
  id: "de-sae-desura",
  stage: "advanced-topics",
  order: 2,
  title: "でさえ & ですら",
  subtitle: "Even · to the extent of",
  summary:
    "Emphasise the surprising inclusiveness of 'even' — when the least likely thing applies too.",
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
        "**Noun + {{さえ}}** — {{お金[かね]さえあれば}} — 'if only there is money.'",
        "Not the same as {{でさえ}} emphasis, but same core word {{さえ}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "お金[かね]さえあれば、何[なん]でも買[か]える。", en: "If I only had money, I could buy anything." },
        { jp: "一口[ひとくち]さえ食[た]べれば、分[わ]かる。", en: "You'll get it if you even take one bite." },
      ],
    },
    {
      type: "note",
      text: "{{でさえ}} emphasises **who** is included. {{さえ}} in conditionals marks the **minimum condition** — same word, different grammar slot.",
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
      prompt: "「If only there is money」?",
      choices: ["お金でさえ", "お金さえあれば", "お金すら", "お金でも"],
      answer: 1,
    },
  ],
};
