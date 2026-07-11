import type { Lesson } from "../types";

export const naruSuru: Lesson = {
  id: "naru-suru",
  stage: "n4",
  order: 10,
  title: "Becoming and Deciding",
  subtitle: "になる · にする · ようになる · ことにする",
  summary:
    "Describe change at school and work with なる, pick options with にする, and light verb patterns ようになる / ことにする.",
  estMinutes: 16,
  vocabulary: [
    { word: "なる", reading: "なる", meaning: "to become" },
    { word: "定食[ていしょく]", reading: "ていしょく", meaning: "set meal" },
    { word: "医者[いしゃ]", reading: "いしゃ", meaning: "doctor" },
    { word: "忙[いそが]しい", reading: "いそがしい", meaning: "busy" },
    { word: "静[しず]か", reading: "しずか", meaning: "quiet" },
    { word: "野菜[やさい]", reading: "やさい", meaning: "vegetable" },
    { word: "部署[ぶしょ]", reading: "ぶしょ", meaning: "department; division" },
    { word: "来月[らいげつ]", reading: "らいげつ", meaning: "next month" },
    { word: "残業[ざんぎょう]", reading: "ざんぎょう", meaning: "overtime" },
    { word: "早[はや]い", reading: "はやい", meaning: "early; fast" },
  ],
  blocks: [
    {
      type: "prose",
      text: "{{なる}} + {{に}} describes **change** (become busy, become a teacher). {{する}} + {{に}} describes **choice** (I'll have the curry). With verbs, light bridges {{ようになる}} and {{ことにする}} cover 'came to…' and 'decided to…'.",
    },
    {
      type: "rule",
      title: "になる — nouns, na-adjectives, i-adjectives",
      items: [
        "Noun / na-adj + {{になる}}: {{医者になる}}, {{静かになる}}.",
        "I-adj: drop {{い}} + {{くなる}}: {{忙しくなる}}, {{早くなる}}.",
        "{{いい}} → {{よくなる}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "来月[らいげつ]から部署[ぶしょ]が忙[いそが]しくなる。", en: "From next month the department will get busy." },
        { jp: "夜[よる]になると、オフィスが静[しず]かになる。", en: "When night comes, the office gets quiet." },
        { jp: "妹[いもうと]は医者[いしゃ]になった。", en: "My little sister became a doctor." },
        { jp: "毎日[まいにち]歩[ある]いて、足[あし]が速[はや]くなった。", en: "Walking every day, my legs got faster / stronger." },
      ],
    },
    {
      type: "heading",
      text: "にする — deciding / ordering",
    },
    {
      type: "prose",
      text: "{{にする}} means **go with / decide on** — lunch orders, meeting times, menu picks.",
    },
    {
      type: "examples",
      items: [
        { jp: "私[わたし]は定食[ていしょく]にします。", en: "I'll go with the set meal." },
        { jp: "会議[かいぎ]は三時[さんじ]にした。", en: "We set the meeting for three." },
        { jp: "どれにする？", en: "Which one are you going with?" },
      ],
    },
    {
      type: "dialogue",
      title: "Choosing lunch",
      lines: [
        { speaker: "A", jp: "今日[きょう]のランチ、何[なに]にする？", en: "What are you getting for lunch today?" },
        { speaker: "B", jp: "野菜[やさい]定食[ていしょく]にする。最近[さいきん]、健康[けんこう]的[てき]に食[た]べるようにしてる。", en: "I'll go with the veggie set. Lately I've been trying to eat healthier." },
        { speaker: "A", jp: "いいね。僕[ぼく]はカレーにする。", en: "Nice. I'll go with curry." },
      ],
    },
    {
      type: "heading",
      text: "ようになる · ことにする (light)",
    },
    {
      type: "rule",
      title: "Change and decisions with verbs",
      items: [
        "**{{〜ようになる}}** — reached the point of… / became able to…: {{早く起きるようになった}}.",
        "**{{〜ようにする}}** — make an effort to: {{運動するようにしている}}.",
        "**{{〜ことにする}}** — I decide to…: {{残業しないことにした}}.",
        "**{{〜ことになる}}** — it was arranged / decided (not just by me): {{転勤することになった}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "練習[れんしゅう]して、漢字[かんじ]が書[か]けるようになった。", en: "After practicing, I became able to write kanji." },
        { jp: "毎朝[まいあさ]早[はや]く起[お]きるようにしている。", en: "I make it a point to get up early every morning." },
        { jp: "今週[こんしゅう]は残業[ざんぎょう]しないことにした。", en: "I've decided not to do overtime this week." },
        { jp: "来月[らいげつ]、大阪[おおさか]に転勤[てんきん]することになった。", en: "It's been decided that I transfer to Osaka next month." },
      ],
    },
    {
      type: "tip",
      text: "Potential + {{ようになる}} is classic progress talk: {{ニュースが分かるようになった}}.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「It got busy」?",
      choices: ["忙しくなった", "忙しいなった", "忙になった", "忙しくした"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Ordering — 「I'll have the ramen」?",
      choices: ["ラーメンにします", "ラーメンをします", "ラーメンがなります", "ラーメンでします"],
      answer: 0,
    },
    {
      kind: "fill",
      prompt: "「Became able to swim」 — fill:",
      promptJp: "泳[およ]げる（　）なった",
      answers: ["ように"],
      explanation: "Potential + ようになる.",
    },
    {
      kind: "mc",
      prompt: "ことになった vs ことにした?",
      choices: [
        "になった = arranged · にした = my decision",
        "になった = my decision · にした = arranged",
        "Identical",
        "Only tense differs",
      ],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "「He stopped drinking coffee」?",
      choices: ["飲まなくなった", "飲むようになった", "飲むことにした", "飲むにした"],
      answer: 0,
    },
    {
      kind: "order",
      prompt: "Build: 'I became able to read kanji'",
      tiles: ["漢字[かんじ]が", "読[よ]めるように", "なった"],
      distractors: ["読[よ]むことに"],
      explanation: "Potential + ようになる.",
    },
  ],
  drills: [
    { id: "noun-naru", prompt: "Become — 'become a doctor'", jp: "医者[いしゃ] ＋ なる", answers: ["医者[いしゃ]になる"] },
    { id: "i-naru", prompt: "Become — 'get busy'", jp: "忙[いそが]しい ＋ なる", answers: ["忙[いそが]しくなる"] },
    { id: "ni-suru", prompt: "Decide on — ordering veggies", jp: "野菜[やさい] ＋ する", answers: ["野菜[やさい]にする"] },
    { id: "you-ni-naru", prompt: "Fill — 'reached the point of speaking'", jp: "話[はな]せる◯◯になる", answers: ["よう"] },
    { id: "koto-ni-suru", prompt: "Fill — 'decided to…'", jp: "残業[ざんぎょう]しないこと◯する", answers: ["に"] },
  ],
};
