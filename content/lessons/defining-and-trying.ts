import type { Lesson } from "../types";

export const definingAndTrying: Lesson = {
  id: "defining-and-trying",
  stage: "n4",
  order: 14,
  title: "Defining & Trying",
  subtitle: "〜方 · の／こと · てみる · といい",
  summary:
    "Name how to do things, turn actions into nouns, try new food or apps with てみる, and hope with といい.",
  estMinutes: 18,
  vocabulary: [
    { word: "方[かた]", reading: "かた", meaning: "way; how to (after verb stem)" },
    { word: "漢字[かんじ]", reading: "かんじ", meaning: "kanji" },
    { word: "一度[いちど]", reading: "いちど", meaning: "once" },
    { word: "合格[ごうかく]する", reading: "ごうかくする", meaning: "to pass (an exam)" },
    { word: "留学[りゅうがく]", reading: "りゅうがく", meaning: "study abroad" },
    { word: "お好[す]き焼[や]き", reading: "おこのみやき", meaning: "okonomiyaki" },
    { word: "晴[は]れる", reading: "はれる", meaning: "to clear up (weather)" },
    { word: "券売機[けんばいき]", reading: "けんばいき", meaning: "ticket machine" },
    { word: "使[つか]う", reading: "つかう", meaning: "to use" },
    { word: "日本語[にほんご]", reading: "にほんご", meaning: "Japanese language" },
  ],
  blocks: [
    {
      type: "prose",
      text: "When you recommend a dish, ask how to buy a ticket, or hope the rain stops — you need **how-to nouns**, **nominalizers**, **try-and-see**, and soft hopes.",
    },
    {
      type: "heading",
      text: "How to: 〜方",
    },
    {
      type: "rule",
      title: "Stem + 方（かた）",
      items: [
        "Masu-stem + {{方}}: {{書き方}}, {{使い方}}, {{行き方}}.",
        "Behaves as a noun — often with {{の}}: {{切符の買い方}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "この漢字[かんじ]の読[よ]み方[かた]が分[わ]からない。", en: "I don't know how to read this kanji." },
        { jp: "券売機[けんばいき]の使[つか]い方[かた]を教[おし]えてください。", en: "Please show me how to use the ticket machine." },
        { jp: "駅[えき]への行[い]き方[かた]は同[おな]じだよ。", en: "The way to the station is the same." },
      ],
    },
    {
      type: "heading",
      text: "Nominalizers: の and こと",
    },
    {
      type: "rule",
      title: "Turning clauses into nouns",
      items: [
        "Plain verb + {{の／こと}}: {{勉強するのは楽しい}}.",
        "{{の}} feels a bit more concrete; {{こと}} more abstract/factual.",
        "After na-adj / noun + {{だ}} → usually {{の}}: {{静かなの？}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "日本語[にほんご]を勉強[べんきょう]するのは楽[たの]しい。", en: "Studying Japanese is fun." },
        { jp: "早[はや]く帰[かえ]るのは難[むずか]しい。", en: "Going home early is hard." },
        { jp: "留学[りゅうがく]することは初[はじ]めてです。", en: "Studying abroad is a first for me." },
      ],
    },
    {
      type: "heading",
      text: "Defining with という",
    },
    {
      type: "examples",
      items: [
        { jp: "日本[にほん]という国[くに]。", en: "The country called Japan." },
        { jp: "「ありがとう」という言[い]葉[ことば]。", en: "The word 'arigatou'." },
        { jp: "ラーメンという食[た]べ物[もの]を知[し]っていますか。", en: "Do you know the food called ramen?" },
      ],
    },
    {
      type: "heading",
      text: "Trying: 〜てみる",
    },
    {
      type: "prose",
      text: "{{てみる}} = try doing (and see). Conjugate {{みる}}: {{食べてみた}}, {{使ってみてください}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "お好[す]き焼[や]きを食[た]べてみたい。", en: "I want to try eating okonomiyaki." },
        { jp: "このアプリ、使[つか]ってみて。", en: "Try using this app." },
        { jp: "一度[いちど]、別[べつ]の路線[ろせん]で行[い]ってみた。", en: "I once tried going by a different line." },
      ],
    },
    {
      type: "dialogue",
      title: "Trying a new place",
      lines: [
        { speaker: "A", jp: "新[あたら]しい定食[ていしょく]屋[や]、行[い]ってみない？", en: "Wanna try going to that new set-meal place?" },
        { speaker: "B", jp: "いいね。メニューの見[み]方[かた]、わかりやすいらしいよ。", en: "Nice. I hear the menu is easy to figure out." },
        { speaker: "A", jp: "晴[は]れるといいね。", en: "Hope it clears up." },
        { speaker: "B", jp: "雨[あめ]でも行[い]こう。一度[いちど]食[た]べてみたいし。", en: "Let's go even if it rains. I want to try it once." },
      ],
    },
    {
      type: "heading",
      text: "Hoping: 〜といい",
    },
    {
      type: "prose",
      text: "{{といい}} = 'it would be good if…' / 'I hope…'. Plain form before {{といい}}; nouns/na-adj take {{な}}: {{元気なといい}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "明日[あした]は晴[は]れるといいね。", en: "I hope it clears up tomorrow." },
        { jp: "試験[しけん]に合格[ごうかく]するといい。", en: "I hope (you/I) pass the exam." },
        { jp: "電車[でんしゃ]が間[ま]に合[あ]うといいけど…。", en: "I hope the train makes it, but…" },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「How to read kanji」?",
      choices: ["読む方", "読み方", "読んで方", "読んだ方"],
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
      prompt: "「The country called Japan」?",
      choices: ["日本の国", "日本という国", "日本というの", "日本のこと"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "After a na-adjective, natural nominalizer?",
      choices: ["こと only", "の only", "either always", "neither"],
      answer: 1,
    },
    {
      kind: "fill",
      prompt: "Hope — fill: 'it'd be good if it clears'",
      promptJp: "晴[は]れる◯いい",
      answers: ["と"],
      explanation: "といい for hopes.",
    },
    {
      kind: "order",
      prompt: "Build: 'Do you know the food called ramen?'",
      tiles: ["ラーメンという", "食[た]べ物[もの]を", "知[し]っていますか"],
      distractors: ["ラーメンとして"],
      explanation: "という defines/names.",
    },
  ],
  drills: [
    { id: "kata", prompt: "Say 'how to eat'", jp: "食[た]べる", answers: ["食[た]べ方[かた]"] },
    { id: "temiru", prompt: "Say 'try eating'", jp: "食[た]べる", answers: ["食[た]べてみる"] },
    { id: "toii", prompt: "Fill — hope early go", jp: "早[はや]く行[い]く◯いい", answers: ["と"] },
    { id: "nominalizer", prompt: "Nominalizer — studying abroad", jp: "留学[りゅうがく]する◯は…", answers: ["の", "こと"] },
    { id: "toiu", prompt: "Fill — 'the country called…'", jp: "日本[にほん]◯◯◯国[くに]", answers: ["という"] },
  ],
};
