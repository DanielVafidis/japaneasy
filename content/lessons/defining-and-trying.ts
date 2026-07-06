import type { Lesson } from "../types";

export const definingAndTrying: Lesson = {
  id: "defining-and-trying",
  stage: "essential-grammar",
  order: 11,
  title: "Defining & Trying",
  subtitle: "〜方 · の/こと · 〜てみる · 〜といい",
  summary:
    "Turn verbs into nouns with の and こと, say how to do something with 方, try actions with てみる, and express hopes with といい.",
  estMinutes: 18,
  vocabulary: [
    { word: "方[かた]", reading: "かた", meaning: "way; how to (after verb stem)" },
    { word: "意味[いみ]", reading: "いみ", meaning: "meaning" },
    { word: "試[ため]す", reading: "ためす", meaning: "to try; test" },
    { word: "分[わ]かる", reading: "わかる", meaning: "to understand" },
    { word: "留学[りゅうがく]", reading: "りゅうがく", meaning: "study abroad" },
    { word: "早[はや]い", reading: "はやい", meaning: "early; fast" },
  ],
  blocks: [
    {
      type: "heading",
      text: "How to do something: 〜方",
    },
    {
      type: "prose",
      text: "Attach {{方[かた]}} to the **verb stem** (the same stem used for {{ます}}) to mean 'the way to do X' or 'how to X'. It behaves like a noun.",
    },
    {
      type: "examples",
      items: [
        { jp: "漢字[かんじ]の書[か]き方[かた]。", en: "How to write kanji." },
        { jp: "パソコンの使[つか]い方[かた]が分[わ]かりますか。", en: "Do you know how to use a computer?" },
        { jp: "この単語[たんご]の意味[いみ]の分[わ]かり方[かた]が分[わ]からない。", en: "I don't understand how to understand the meaning of this word." },
      ],
    },
    {
      type: "heading",
      text: "Nominalizers: の and こと",
    },
    {
      type: "prose",
      text: "Both {{の}} and {{こと}} turn a clause into a **noun phrase** — 'the act of…' or 'the fact that…'. They are often interchangeable after plain-form verbs, but not always.",
    },
    {
      type: "rule",
      title: "When they overlap",
      items: [
        "After verbs: {{日本語[にほんご]を勉強[べんきょう]するの}} and {{…すること}} both mean 'studying Japanese (as a thing)'.",
        "{{の}} sounds slightly more concrete or emotional; {{こと}} sounds more abstract or factual.",
        "Only {{の}} after **na-adjectives** and **nouns + だ**: {{静[しず]かなの}} · {{学生[がくせい]なの}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "日本語[にほんご]を勉強[べんきょう]するのは、楽[たの]しい。", en: "Studying Japanese is fun." },
        { jp: "早[はや]く帰[かえ]るのは、無理[むり]です。", en: "Going home early is impossible." },
        { jp: "留学[りゅうがく]することは、初[はじ]めてです。", en: "Studying abroad is a first for me." },
        { jp: "静[しず]かなの？", en: "Is it quiet?" },
      ],
    },
    {
      type: "note",
      text: "In casual questions, {{の}} at the end replaces {{か}}: {{分[わ]かるの？}} — 'Do you get it?' (not 'Is understanding…?').",
    },
    {
      type: "heading",
      text: "Trying something: 〜てみる",
    },
    {
      type: "prose",
      text: "{{てみる}} means 'try doing' — you attempt an action to see what happens. Conjugate {{みる}} like any ru-verb: {{食[た]べてみる}} · {{食[た]べてみた}} · {{食[た]べてみませんか}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "お好[す]き焼[や]きを食[た]べてみたい。", en: "I want to try eating okonomiyaki." },
        { jp: "このアプリを使[つか]ってみてください。", en: "Please try using this app." },
        { jp: "一度[いちど]日本[にほん]で働[はたら]いてみたい。", en: "I'd like to try working in Japan once." },
      ],
    },
    {
      type: "heading",
      text: "Hoping it happens: 〜といい",
    },
    {
      type: "prose",
      text: "{{といい}} expresses a **hope or wish** about an outcome — 'it would be good if…' Use plain form before {{といい}}; add {{な}} after nouns and na-adjectives.",
    },
    {
      type: "examples",
      items: [
        { jp: "明日[あした]は晴[は]れるといいね。", en: "I hope it clears up tomorrow." },
        { jp: "試験[しけん]に合格[ごうかく]したといい。", en: "I hope (they) passed the exam." },
        { jp: "無事[ぶじ]なといいですが…", en: "I hope they're safe, but…" },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「How to read kanji」 — which fits?",
      choices: ["読む方", "読み方", "読んで方", "読んだ方"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "After a na-adjective, which nominalizer is natural?",
      choices: ["こと only", "の only", "either always", "neither"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Try eating this」?",
      choices: ["食べる", "食べてみる", "食べよう", "食べたい"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「I hope it rains」 (wish for rain)?",
      choices: ["雨が降る", "雨が降るといい", "雨が降って", "雨が降るの"],
      answer: 1,
    },
  ],
};
