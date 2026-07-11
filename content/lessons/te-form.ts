import type { Lesson } from "../types";

export const teForm: Lesson = {
  id: "te-form",
  stage: "n5",
  order: 10,
  title: "Te-form",
  subtitle: "Morning sequence · てください",
  summary:
    "Link morning actions with the te-form, and make polite requests with てください — N5 essentials before later permission patterns.",
  estMinutes: 18,
  vocabulary: [
    { word: "起[お]きる", reading: "おきる", meaning: "to get up; to wake up" },
    { word: "食[た]べる", reading: "たべる", meaning: "to eat" },
    { word: "飲[の]む", reading: "のむ", meaning: "to drink" },
    { word: "待[ま]つ", reading: "まつ", meaning: "to wait" },
    { word: "書[か]く", reading: "かく", meaning: "to write" },
    { word: "読[よ]む", reading: "よむ", meaning: "to read" },
    { word: "行[い]く", reading: "いく", meaning: "to go (exception)" },
    { word: "ください", reading: "ください", meaning: "please (do / give)" },
    { word: "座[すわ]る", reading: "すわる", meaning: "to sit" },
    { word: "歯[は]を磨[みが]く", reading: "はをみがく", meaning: "to brush one's teeth" },
  ],
  blocks: [
    {
      type: "prose",
      text: "The **te-form** is Japanese 'and then'. Chain a morning routine — get up, eat, go — or soften a request with {{〜てください}}. Conjugation mirrors the past た-form ({{て}}/{{で}} instead of {{た}}/{{だ}}).",
    },
    {
      type: "heading",
      text: "How to conjugate",
    },
    {
      type: "rule",
      title: "By class",
      items: [
        "**Ru-verbs:** replace {{る}} with {{て}}. {{食[た]べる}} → {{食[た]べて}}",
        "**U-verbs:** same sound groups as past tense, but end in {{て}} / {{で}}.",
        "**Exceptions:** {{する}} → {{して}}, {{来[く]る}} → {{来[き]て}}, {{行[い]く}} → {{行[い]って}} (not 行いて)",
      ],
    },
    {
      type: "table",
      caption: "U-verb te-form endings",
      headers: ["Ending", "Te-form", "Example"],
      rows: [
        ["う・つ・る", "って", "待つ → 待って"],
        ["む・ぶ・ぬ", "んで", "飲む → 飲んで"],
        ["く", "いて", "書く → 書いて"],
        ["ぐ", "いで", "泳ぐ → 泳いで"],
        ["す", "して", "話す → 話して"],
      ],
    },
    {
      type: "examples",
      title: "Quick conjugations",
      items: [
        { jp: "食[た]べて", en: "eat (and…)" },
        { jp: "飲[の]んで", en: "drink (and…)" },
        { jp: "待[ま]って", en: "wait (and…)" },
        { jp: "書[か]いて", en: "write (and…)" },
        { jp: "読[よ]んで", en: "read (and…)" },
        { jp: "行[い]って", en: "go (and…)" },
      ],
    },
    {
      type: "heading",
      text: "Connecting actions (and then)",
    },
    {
      type: "prose",
      text: "Put non-final verbs in te-form; only the **last** verb carries tense and politeness. Perfect for a morning sequence.",
    },
    {
      type: "examples",
      title: "Morning routine",
      items: [
        { jp: "起[お]きて、歯[は]を磨[みが]く。", en: "Get up and brush (my) teeth." },
        { jp: "朝[あさ]ごはんを食[た]べて、コーヒーを飲[の]む。", en: "Eat breakfast and drink coffee." },
        { jp: "新聞[しんぶん]を読[よ]んで、学校[がっこう]に行[い]く。", en: "Read the newspaper and go to school." },
        {
          jp: "起[お]きて、食[た]べて、行[い]きました。",
          en: "(I) got up, ate, and went. (past polite on the last verb)",
        },
      ],
    },
    {
      type: "dialogue",
      title: "Describing the morning",
      lines: [
        { speaker: "A", jp: "朝[あさ]、何[なに]をしましたか。", en: "What did you do in the morning?" },
        {
          speaker: "B",
          jp: "起[お]きて、朝[あさ]ごはんを食[た]べて、学校[がっこう]に行[い]きました。",
          en: "Got up, ate breakfast, and went to school.",
        },
      ],
    },
    {
      type: "heading",
      text: "Polite requests — てください",
    },
    {
      type: "rule",
      title: "Please do ~",
      items: [
        "te-form + {{ください}} = please do X",
        "{{待[ま]ってください}} — Please wait.",
        "{{座[すわ]ってください}} — Please sit down.",
        "{{書[か]いてください}} — Please write (it).",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "少[すこ]し待[ま]ってください。", en: "Please wait a little." },
        { jp: "ここに座[すわ]ってください。", en: "Please sit here." },
        { jp: "もう一度[いちど]言[い]ってください。", en: "Please say it once more." },
        { jp: "名前[なまえ]を書[か]いてください。", en: "Please write your name." },
      ],
    },
    {
      type: "note",
      text: "Later (N4) you'll use the te-form for permission ({{てもいい}}) and prohibition ({{てはいけない}}). For now, master chaining and {{てください}}.",
    },
    {
      type: "tip",
      text: "If you know the past た-form, swap {{た}}→{{て}} and {{だ}}→{{で}}. {{飲んだ}} ↔ {{飲んで}}, {{行った}} ↔ {{行って}}.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Te-form of 食べる?",
      choices: ["食べて", "食べた", "食べって", "食べんで"],
      answer: 0,
      explanation: "Ru-verb: る → て.",
    },
    {
      kind: "mc",
      prompt: "Te-form of 飲む?",
      choices: ["飲いて", "飲んで", "飲って", "飲みて"],
      answer: 1,
      explanation: "む・ぶ・ぬ → んで.",
    },
    {
      kind: "mc",
      prompt: "Te-form of 行く?",
      choices: ["行いて", "行って", "行きて", "行んで"],
      answer: 1,
      explanation: "行く → 行って (exception).",
    },
    {
      kind: "fill",
      prompt: "Type 'Please wait' in Japanese:",
      answers: ["待ってください", "まってください"],
      explanation: "待って + ください.",
    },
    {
      kind: "mc",
      prompt: "In 起きて、食べて、行きます — which verb shows tense/politeness?",
      choices: ["起きて", "食べて", "行きます", "All three equally"],
      answer: 2,
      explanation: "Only the final verb carries tense and ます/ました.",
    },
    {
      kind: "order",
      prompt: "Build: 'Please sit here'",
      tiles: ["ここに", "座[すわ]って", "ください"],
      distractors: ["座[すわ]る", "ます"],
      explanation: "Place + te-form + ください.",
    },
  ],
  drills: [
    { id: "te-ru", prompt: "Make the te-form", jp: "食[た]べる", answers: ["食[た]べて"] },
    { id: "te-mu", prompt: "Make the te-form", jp: "飲[の]む", answers: ["飲[の]んで"] },
    { id: "te-tsu", prompt: "Make the te-form", jp: "待[ま]つ", answers: ["待[ま]って"] },
    { id: "te-iku", prompt: "Make the te-form (exception)", jp: "行[い]く", answers: ["行[い]って"] },
    { id: "kudasai", prompt: "Make a request — please wait", jp: "待[ま]つ", answers: ["待[ま]ってください"] },
    { id: "kudasai-suwaru", prompt: "Make a request — please sit", jp: "座[すわ]る", answers: ["座[すわ]ってください"] },
  ],
};
