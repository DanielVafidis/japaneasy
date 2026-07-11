import type { Lesson } from "../types";

export const adjectives: Lesson = {
  id: "adjectives",
  stage: "n5",
  order: 4,
  title: "Adjectives",
  subtitle: "The two types: na-adjectives and i-adjectives",
  summary:
    "Describe food you like or dislike and conjugate both adjective types for negative and past — including tricky いい and きれい.",
  estMinutes: 16,
  vocabulary: [
    { word: "好き", reading: "すき", meaning: "liked; favorite (na-adj)" },
    { word: "嫌い", reading: "きらい", meaning: "disliked (na-adj)" },
    { word: "美味しい", reading: "おいしい", meaning: "delicious (i-adj)" },
    { word: "辛い", reading: "からい", meaning: "spicy; hot (taste) (i-adj)" },
    { word: "高い", reading: "たかい", meaning: "expensive; high (i-adj)" },
    { word: "静か", reading: "しずか", meaning: "quiet (na-adj)" },
    { word: "きれい", reading: "きれい", meaning: "pretty; clean (na-adj)" },
    { word: "いい", reading: "いい", meaning: "good (irregular i-adj)" },
    { word: "昼[ひる]", reading: "ひる", meaning: "noon; daytime" },
    { word: "カフェ", reading: "カフェ", meaning: "cafe" },
    { word: "カレー", reading: "カレー", meaning: "curry" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Japanese has exactly **two** kinds of adjective, and both conjugate. You'll use them constantly for food: what you **like**, what tastes **good**, and what is **too expensive**.",
    },
    {
      type: "heading",
      text: "Na-adjectives",
    },
    {
      type: "prose",
      text: "A na-adjective attaches to a noun by adding {{な}} (that's where the name comes from). Favorites like {{好[す]き}} and {{嫌[きら]い}} work this way. Conjugation matches nouns: use {{じゃない}}, {{だった}}, {{じゃなかった}}.",
    },
    {
      type: "examples",
      items: [
        {
          jp: "好[す]きな食[た]べ物[もの]。",
          en: "A liked food / favorite food.",
        },
        {
          jp: "このカフェは静[しず]かだ。",
          en: "This café is quiet.",
        },
        {
          jp: "ラーメンは嫌[きら]いじゃない。",
          en: "It's not that I dislike ramen.",
        },
        {
          jp: "きれいだった。",
          en: "Was pretty / clean (e.g. the plating).",
        },
      ],
    },
    {
      type: "heading",
      text: "I-adjectives",
    },
    {
      type: "prose",
      text: "I-adjectives always end in {{い}}. They attach **directly** to a noun (no な). To conjugate, you change that final い. Importantly, you **never** attach だ to an i-adjective. Taste words like {{美味[おい]しい}} and {{辛[から]い}} are classic i-adjectives.",
    },
    {
      type: "rule",
      title: "I-adjective conjugation",
      items: [
        "**Attach to noun:** just place it before — {{美味[おい]しい寿司[すし]}} (delicious sushi)",
        "**Negative:** replace final {{い}} with {{くない}} — {{辛[から]い}} → {{辛[から]くない}}",
        "**Past:** replace final {{い}} with {{かった}} — {{高[たか]い}} → {{高[たか]かった}}",
        "**Negative-past:** {{高[たか]くない}} → {{高[たか]くなかった}}",
      ],
    },
    {
      type: "examples",
      items: [
        {
          jp: "美味[おい]しいラーメン。",
          en: "Delicious ramen.",
        },
        {
          jp: "このカレーは辛[から]くない。",
          en: "This curry is not spicy.",
        },
        {
          jp: "お昼[ひる]は高[たか]かった。",
          en: "Lunch was expensive.",
        },
        {
          jp: "あの店[みせ]は高[たか]くなかった。",
          en: "That place was not expensive.",
        },
      ],
    },
    {
      type: "note",
      text: "Two traps: {{いい}} (good) is irregular — it conjugates from its older form {{よい}}: {{よくない}}, {{よかった}}. And {{きれい}} ends in い but is actually a **na**-adjective (the い is part of the word, not the adjective ending) — so {{きれいな店[みせ]}}, not きれい店.",
    },
    {
      type: "tip",
      text: "Talking about food? Pair {{好[す]き}} / {{嫌[きら]い}} (na) with taste i-adjectives: {{美味[おい]しい}}, {{辛[から]い}}, {{高[たか]い}} for price.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "How does a na-adjective like 好き attach to a noun?",
      choices: ["With い", "With な", "With だ", "Directly, nothing added"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "What is the negative of the i-adjective 辛い (spicy)?",
      choices: ["辛いじゃない", "辛くない", "辛かった", "辛くなかった"],
      answer: 1,
    },
    {
      kind: "fill",
      prompt: "Put 高い into the past tense ('was expensive' — e.g. the bill). Type the Japanese:",
      answers: ["高かった", "たかかった"],
      explanation: "Drop い, add かった → 高かった.",
    },
    {
      kind: "mc",
      prompt: "Which statement is TRUE?",
      choices: [
        "You attach だ to i-adjectives like 美味しい.",
        "きれい is an i-adjective.",
        "いい conjugates irregularly as よくない / よかった.",
        "Na-adjectives never conjugate.",
      ],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "好きな食べ物 means...",
      choices: [
        "Disliked food",
        "Favorite / liked food",
        "Expensive food",
        "Spicy food",
      ],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'This ramen is delicious'",
      tiles: ["このラーメンは", "美味[おい]しい"],
      distractors: ["美味[おい]しいな", "だ"],
      explanation: "I-adjectives never take だ; they stand alone as the predicate.",
    },
  ],
  drills: [
    {
      id: "na-before-noun",
      prompt: "Connect them — 'favorite food' / liked food",
      jp: "好[す]き ＋ 食[た]べ物[もの]",
      answers: ["好[す]きな食[た]べ物[もの]"],
    },
    {
      id: "i-negative",
      prompt: "Make it negative",
      jp: "辛[から]い",
      answers: ["辛[から]くない"],
    },
    {
      id: "i-past",
      prompt: "Make it past tense",
      jp: "高[たか]い",
      answers: ["高[たか]かった"],
    },
    {
      id: "na-negative",
      prompt: "Make it negative — careful, na-adjective",
      jp: "きれいだ",
      answers: ["きれいじゃない"],
    },
    {
      id: "i-negative-past",
      prompt: "Make it past tense (from the negative)",
      jp: "高[たか]くない",
      answers: ["高[たか]くなかった"],
    },
    {
      id: "ii-past",
      prompt: "Make it past tense — irregular (\"was good\")",
      jp: "いい",
      answers: ["よかった"],
    },
  ],
};
