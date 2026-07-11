import type { Lesson } from "../types";

export const nounParticles: Lesson = {
  id: "noun-particles",
  stage: "n5",
  order: 3,
  title: "Noun-related Particles",
  subtitle: "と, や, とか, and the all-purpose の",
  summary:
    "Join food and people into lists (complete or partial) and link nouns with the versatile possessive の — perfect for menus, orders, and sharing with friends.",
  estMinutes: 14,
  vocabulary: [
    { word: "寿司", reading: "すし", meaning: "sushi" },
    { word: "ラーメン", reading: "ラーメン", meaning: "ramen" },
    { word: "友達", reading: "ともだち", meaning: "friend" },
    { word: "お茶", reading: "おちゃ", meaning: "tea" },
    { word: "お店", reading: "おみせ", meaning: "shop; store; restaurant" },
    { word: "味", reading: "あじ", meaning: "taste; flavor" },
  ],
  blocks: [
    {
      type: "heading",
      text: "と — and (exhaustive)",
    },
    {
      type: "prose",
      text: "{{と}} joins nouns into a **complete** list — these and *only* these. Handy when you order exactly two dishes and nothing more.",
    },
    {
      type: "examples",
      items: [
        {
          jp: "寿司[すし]とラーメン。",
          en: "Sushi and ramen (and nothing else).",
        },
        {
          jp: "友達[ともだち]とお茶[ちゃ]。",
          en: "A friend and tea (just those two).",
        },
      ],
    },
    {
      type: "heading",
      text: "や / とか — and (non-exhaustive)",
    },
    {
      type: "prose",
      text: "{{や}} (and its more casual cousin {{とか}}) makes a **partial** list — these *among other things*. Use it when chatting about foods you like without listing every single one.",
    },
    {
      type: "examples",
      items: [
        {
          jp: "寿司[すし]やラーメン。",
          en: "Sushi and ramen (among other things).",
        },
        {
          jp: "お茶[ちゃ]とかラーメンとか。",
          en: "Things like tea and ramen. (casual)",
        },
      ],
    },
    {
      type: "heading",
      text: "の — possession & linking nouns",
    },
    {
      type: "prose",
      text: "{{の}} links two nouns, most often showing possession ('X's Y'). More broadly, the first noun describes or owns the second — great for 'a friend's tea' or 'a Japanese restaurant'.",
    },
    {
      type: "examples",
      items: [
        {
          jp: "友達[ともだち]のお茶[ちゃ]。",
          en: "A friend's tea.",
        },
        {
          jp: "お店[みせ]の味[あじ]。",
          en: "The restaurant's flavor / the shop's taste.",
        },
        {
          jp: "日本[にほん]のお店[みせ]。",
          en: "A Japanese restaurant / shop.",
          note: "日本 = Japan; のお店 links place + shop",
        },
      ],
    },
    {
      type: "dialogue",
      title: "At a small ramen shop",
      lines: [
        {
          speaker: "A",
          jp: "寿司[すし]とラーメン、どちらが好[す]き？",
          en: "Sushi and ramen — which do you like?",
        },
        {
          speaker: "B",
          jp: "ラーメンとかお茶[ちゃ]とかが好[す]き。",
          en: "I like things like ramen and tea.",
        },
        {
          speaker: "A",
          jp: "このお店[みせ]の味[あじ]はいいね。",
          en: "This place's flavor is good, huh.",
        },
      ],
    },
    {
      type: "note",
      text: "{{の}} can also turn a phrase into a noun-like idea and stand in for a noun you've already mentioned (e.g. {{辛[から]いの}} = 'the spicy one' on a menu). You'll meet these uses again soon.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Which particle makes a COMPLETE list ('A and B, nothing else')?",
      choices: ["や", "とか", "と", "の"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "寿司やラーメン implies...",
      choices: [
        "Only sushi and ramen",
        "Sushi and ramen among other things",
        "Sushi's ramen",
        "Neither sushi nor ramen",
      ],
      answer: 1,
    },
    {
      kind: "fill",
      prompt: "Say \"a friend's tea\" using 友達, の, お茶. Type the Japanese:",
      answers: ["友達のお茶", "ともだちのおちゃ", "友達のお茶。"],
      explanation: "の links the possessor (友達) to what they have (お茶).",
    },
    {
      kind: "mc",
      prompt: "お店の味 means...",
      choices: [
        "The shop and the flavor",
        "The shop's flavor / the restaurant's taste",
        "A flavor about shops",
        "Taste the shop",
      ],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Which is more casual for a partial list?",
      choices: ["と", "の", "とか", "は"],
      answer: 2,
    },
    {
      kind: "order",
      prompt: "Build: 'Sushi and ramen' (complete list only)",
      tiles: ["寿司[すし]と", "ラーメン"],
      distractors: ["や", "の"],
      explanation: "と joins a complete list of nouns.",
    },
  ],
  drills: [
    {
      id: "exhaustive-to",
      prompt: "Fill the particle — 'sushi and ramen' (complete list)",
      jp: "寿司[すし]◯ラーメン",
      answers: ["と"],
    },
    {
      id: "partial-ya",
      prompt: "Fill the particle — 'sushi and ramen, among others'",
      jp: "寿司[すし]◯ラーメン",
      answers: ["や"],
    },
    {
      id: "possessive-no",
      prompt: "Fill the particle — \"a friend's tea\"",
      jp: "友達[ともだち]◯お茶[ちゃ]",
      answers: ["の"],
    },
    {
      id: "casual-toka",
      prompt: "Fill the particle — casual list: 'tea and stuff'",
      jp: "お茶[ちゃ]◯",
      answers: ["とか"],
    },
    {
      id: "shop-flavor-no",
      prompt: "Fill the particle — \"the restaurant's flavor\"",
      jp: "お店[みせ]◯味[あじ]",
      answers: ["の"],
    },
  ],
};
