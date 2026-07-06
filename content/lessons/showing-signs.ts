import type { Lesson } from "../types";

export const showingSigns: Lesson = {
  id: "showing-signs",
  stage: "advanced-topics",
  order: 3,
  title: "Showing Signs",
  subtitle: "がる · げ · っぽい · 気配",
  summary:
    "Describe how others seem to feel, and spot outward signs of an underlying state.",
  estMinutes: 16,
  vocabulary: [
    { word: "嬉[うれ]しい", reading: "うれしい", meaning: "happy (i-adj)" },
    { word: "怖[こわ]い", reading: "こわい", meaning: "scary; afraid" },
    { word: "欲[ほ]しい", reading: "ほしい", meaning: "want (thing)" },
    { word: "子供[こども]っぽい", reading: "こどもっぽい", meaning: "childish" },
    { word: "気配[けはい]", reading: "けはい", meaning: "sign; indication" },
    { word: "怪[あや]しい", reading: "あやしい", meaning: "suspicious" },
  ],
  blocks: [
    {
      type: "heading",
      text: "Third-person feelings: 〜がる",
    },
    {
      type: "prose",
      text: "Some emotions are stated directly only for **yourself**. For others, attach {{がる}} to the stem of i-adjectives like {{嬉[うれ]しい}} → {{嬉しがる}} ('seem happy / act happy'), {{怖[こわ]い}} → {{怖がる}} ('act scared'). {{欲[ほ]しい}} → {{欲しがる}} ('act like they want it').",
    },
    {
      type: "rule",
      title: "Usage",
      items: [
        "Conjugates like a u-verb: {{嬉しがっている}} · {{怖がらない}}.",
        "Don't use {{嬉しい}} about someone else in neutral narration — {{彼[かれ]は嬉しがっていた}} is natural.",
        "Questions to the person still use plain adjectives: {{嬉しいですか}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "妹[いもうと]は新[あたら]しいおもちゃを欲[ほ]しがっている。", en: "My little sister is acting like she wants the new toy." },
        { jp: "犬[いぬ]が雷[かみなり]を怖[こわ]がっている。", en: "The dog is scared of thunder." },
        { jp: "彼[かれ]は試験[しけん]の結果[けっか]を嬉[うれ]しがっていた。", en: "He was visibly pleased about the exam results." },
      ],
    },
    {
      type: "heading",
      text: "Outward appearance: 〜げ",
    },
    {
      type: "prose",
      text: "Stem + {{げ}} marks **visible aura** — you can see it on their face or manner: {{悲[かな]しげ}} (looking sad), {{不思議[ふしぎ]げ}} (looking puzzled). Works as na-adjective: {{悲しげな顔[かお]}}.",
    },
    {
      type: "heading",
      text: "〜っぽい — '-ish' tendency",
    },
    {
      type: "prose",
      text: "{{っぽい}} after nouns or stems suggests **typical traits** (not always flattering): {{子供[こども]っぽい}} (childish), {{忘[わす]れっぽい}} (forgetful). Colloquial and common in speech.",
    },
    {
      type: "heading",
      text: "Signs on the horizon: 気配 · 兆し",
    },
    {
      type: "examples",
      items: [
        { jp: "雨[あめ]の気配[けはい]がする。", en: "It feels like rain is coming." },
        { jp: "春[はる]の兆[きざ]しが見[み]える。", en: "Signs of spring are visible." },
        { jp: "あの人[ひと]、怪[あや]しげだね。", en: "That person looks suspicious, huh." },
      ],
    },
    {
      type: "note",
      text: "Don't confuse {{がる}} (behaviour) with {{げ}} (appearance) or {{っぽい}} (character type). A {{怒[おこ]りっぽい}} person gets angry easily; an {{怒りげ}} face looks angry right now.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「The dog acts scared」 — natural?",
      choices: ["犬が怖い", "犬が怖がっている", "犬が怖げ", "犬が怖っぽい"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Childish behaviour」?",
      choices: ["子供がる", "子供げ", "子供っぽい", "子供気配"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "Visible sadness on someone's face?",
      choices: ["悲しい", "悲しがる", "悲しげ", "悲しっぽい"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "雨の___がする — signs of rain?",
      choices: ["がる", "げ", "気配", "っぽい"],
      answer: 2,
    },
  ],
};
