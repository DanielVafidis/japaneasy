import type { Lesson } from "../types";

export const adverbsParticles: Lesson = {
  id: "adverbs-particles",
  stage: "n5",
  order: 15,
  title: "Adverbs & Sentence-ending Particles",
  subtitle: "ね · よ — soft social colour",
  summary:
    "Turn adjectives into adverbs, then add ね (seeking agreement) and よ (giving info) — the social glue of everyday chat.",
  estMinutes: 12,
  vocabulary: [
    { word: "早[はや]い", reading: "はやい", meaning: "fast; early (i-adj)" },
    { word: "静[しず]か", reading: "しずか", meaning: "quiet (na-adj)" },
    { word: "食[た]べる", reading: "たべる", meaning: "to eat" },
    { word: "話[はな]す", reading: "はなす", meaning: "to speak" },
    { word: "明日[あした]", reading: "あした", meaning: "tomorrow" },
    { word: "雨[あめ]", reading: "あめ", meaning: "rain" },
    { word: "きれい", reading: "きれい", meaning: "pretty; clean (na-adj)" },
    { word: "遅[おそ]い", reading: "おそい", meaning: "slow; late (i-adj)" },
    { word: "持[も]つ", reading: "もつ", meaning: "to hold; to carry (u-verb)" },
    { word: "持[も]っていく", reading: "もっていく", meaning: "to take (something) along" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Adverbs tell **how** you do something — eat quickly, speak quietly. Sentence-ending {{ね}} and {{よ}} don't change the facts; they colour the **social tone**: soft check-ins versus 'just so you know'.",
    },
    {
      type: "heading",
      text: "Making adverbs",
    },
    {
      type: "rule",
      title: "Adjective → adverb",
      items: [
        "**I-adjectives:** replace final {{い}} with {{く}}. {{早[はや]い}} → {{早[はや]く}} (quickly / early)",
        "**Na-adjectives:** add {{に}}. {{静[しず]か}} → {{静[しず]かに}} (quietly)",
        "{{いい}} is irregular as an adverb: {{よく}} (well / often)",
      ],
    },
    {
      type: "examples",
      title: "How you do things",
      items: [
        { jp: "早[はや]く食[た]べる。", en: "Eat quickly." },
        { jp: "静[しず]かに話[はな]す。", en: "Speak quietly." },
        { jp: "きれいにつける。", en: "Attach / put it on neatly." },
        { jp: "遅[おそ]く起[お]きた。", en: "(I) got up late." },
        { jp: "日本語[にほんご]をよく話[はな]す。", en: "(I) speak Japanese often / well." },
      ],
    },
    {
      type: "heading",
      text: "ね — seeking agreement",
    },
    {
      type: "prose",
      text: "{{ね}} softens the end of a sentence: 'right?', 'isn't it?', 'you know?'. You expect the listener to share the feeling or confirm.",
    },
    {
      type: "examples",
      items: [
        { jp: "いい天気[てんき]だね。", en: "Nice weather, huh?" },
        { jp: "明日[あした]は雨[あめ]だね。", en: "It's going to rain tomorrow, huh?" },
        { jp: "このカフェ、静[しず]かだね。", en: "This café is quiet, isn't it?" },
        { jp: "早[はや]いね。", en: "You're early / That was quick, huh?" },
      ],
    },
    {
      type: "heading",
      text: "よ — offering information",
    },
    {
      type: "prose",
      text: "{{よ}} marks something you think the listener **doesn't know yet** — a heads-up, a correction, or friendly insistence. Not angry by itself; tone decides.",
    },
    {
      type: "examples",
      items: [
        { jp: "明日[あした]は雨[あめ]だよ。", en: "FYI — it'll rain tomorrow." },
        { jp: "この道[みち]じゃないよ。", en: "It's not this way (you know)." },
        { jp: "大丈夫[だいじょうぶ]だよ。", en: "It's fine (trust me)." },
        { jp: "もう時間[じかん]だよ。", en: "It's time already (just so you know)." },
      ],
    },
    {
      type: "dialogue",
      title: "Looking at the sky",
      lines: [
        { speaker: "A", jp: "今日[きょう]はいい天気[てんき]だね。", en: "Nice weather today, huh?" },
        { speaker: "B", jp: "うん。でも明日[あした]は雨[あめ]だよ。", en: "Yeah. But tomorrow it'll rain (FYI)." },
        { speaker: "A", jp: "そうなんだ。傘[かさ]を持[も]っていくね。", en: "I see. I'll take an umbrella then." },
      ],
    },
    {
      type: "table",
      caption: "ね vs よ (social feel)",
      headers: ["Particle", "Feel", "Example"],
      rows: [
        ["ね", "Shared feeling / confirmation", "寒いね — Cold, huh?"],
        ["よ", "New info / assertion", "寒いよ — It's cold (you should know)"],
      ],
    },
    {
      type: "tip",
      text: "You can stack them: {{だよね}} is very common — soft assertion plus a check for agreement. Save heavy stacks for later; {{ね}} and {{よ}} alone go far.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Adverb form of 早い?",
      choices: ["早く", "早に", "早だ", "早くて"],
      answer: 0,
      explanation: "I-adj: い → く → 早く.",
    },
    {
      kind: "mc",
      prompt: "Adverb form of 静か?",
      choices: ["静かく", "静かに", "静かだく", "静か"],
      answer: 1,
      explanation: "Na-adj: add に → 静かに.",
    },
    {
      kind: "mc",
      prompt: "Which particle seeks agreement ('huh? / right?')?",
      choices: ["よ", "ね", "か only", "を"],
      answer: 1,
      explanation: "ね invites shared feeling or confirmation.",
    },
    {
      kind: "mc",
      prompt: "明日は雨だよ is best when…",
      choices: [
        "You're asking if it will rain",
        "You're informing someone it will rain",
        "You're conjugating an adverb",
        "You're making a relative clause",
      ],
      answer: 1,
      explanation: "よ offers information the listener may not have.",
    },
    {
      kind: "fill",
      prompt: "Type the adverb of いい (well/often):",
      answers: ["よく"],
      explanation: "いい → よく (irregular).",
    },
    {
      kind: "order",
      prompt: "Build: 'Speak quietly'",
      tiles: ["静[しず]かに", "話[はな]す"],
      distractors: ["静[しず]か", "早[はや]く"],
      explanation: "Adverb before the verb: 静かに話す.",
    },
  ],
  drills: [
    { id: "adv-i", prompt: "Make an adverb", jp: "早[はや]い", answers: ["早[はや]く"] },
    { id: "adv-na", prompt: "Make an adverb", jp: "静[しず]か", answers: ["静[しず]かに"] },
    { id: "adv-ii", prompt: "Make an adverb (irregular)", jp: "いい", answers: ["よく"] },
    { id: "ne", prompt: "Add ね — seeking agreement", jp: "いい天気[てんき]だ", answers: ["いい天気[てんき]だね"] },
    { id: "yo", prompt: "Add よ — give info", jp: "明日[あした]は雨[あめ]だ", answers: ["明日[あした]は雨[あめ]だよ"] },
  ],
};
