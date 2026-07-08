import type { Lesson } from "../types";

export const adverbsParticles: Lesson = {
  id: "adverbs-particles",
  stage: "basic-grammar",
  order: 10,
  title: "Adverbs & Sentence-ending Particles",
  subtitle: "Making adverbs, plus the feeling-words ね and よ",
  summary:
    "Turn adjectives into adverbs, and add the social glue ね and よ that colour casual speech.",
  estMinutes: 12,
  vocabulary: [
    { word: "早い", reading: "はやい", meaning: "fast; early (i-adj)" },
    { word: "静か", reading: "しずか", meaning: "quiet (na-adj)" },
    { word: "食べる", reading: "たべる", meaning: "to eat" },
    { word: "話す", reading: "はなす", meaning: "to speak" },
    { word: "明日", reading: "あした", meaning: "tomorrow" },
    { word: "雨", reading: "あめ", meaning: "rain" },
  ],
  blocks: [
    {
      type: "heading",
      text: "Making adverbs",
    },
    {
      type: "rule",
      title: "Adjective → adverb",
      items: [
        "**I-adjectives:** replace final {{い}} with {{く}}. {{早い}} → {{早く}} (quickly).",
        "**Na-adjectives:** add {{に}}. {{静か}} → {{静かに}} (quietly).",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "早[はや]く食[た]べる。", en: "Eat quickly." },
        { jp: "静[しず]かに話[はな]す。", en: "Speak quietly." },
      ],
    },
    {
      type: "heading",
      text: "Sentence-ending particles: ね and よ",
    },
    {
      type: "prose",
      text: "These tiny particles add feeling and manage the conversation. They carry no dictionary 'meaning' — they shape *how* a statement lands.",
    },
    {
      type: "rule",
      title: "What they signal",
      items: [
        "**{{ね}}** seeks agreement or shared feeling — like 'right?' or 'isn't it?'.",
        "**{{よ}}** asserts new information the listener may not know — a gentle 'I'm telling you'.",
      ],
    },
    {
      type: "dialogue",
      lines: [
        { speaker: "A", jp: "明日[あした]は雨[あめ]だね。", en: "It'll rain tomorrow, won't it?" },
        { speaker: "B", jp: "明日[あした]は雨[あめ]だよ。", en: "It's going to rain tomorrow (just so you know)." },
      ],
    },
    {
      type: "tip",
      text: "Overusing よ can sound pushy; ね makes speech feel friendly and collaborative. Listen for how often natives sprinkle ね into casual conversation.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Turn the i-adjective 早い into an adverb ('quickly').",
      choices: ["早いに", "早く", "早くに", "早かった"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "How do you make a na-adjective like 静か into an adverb?",
      choices: ["Add く", "Add に", "Add だ", "Add の"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Which particle seeks agreement ('..., right?')?",
      choices: ["よ", "ね", "を", "か"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "You're informing someone of something they don't know. Which fits best?",
      promptJp: "雨だ＿。",
      choices: ["ね", "よ", "の", "に"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'Please speak more slowly' (casual: speak more slowly)",
      tiles: ["もっと", "ゆっくり", "話[はな]す"],
      distractors: ["静[しず]かだ"],
      explanation: "Adverbs like もっと・ゆっくり come before the verb, no particle needed.",
    },
  ],
};
