import type { Lesson } from "../types";

export const teForm: Lesson = {
  id: "te-form",
  stage: "essential-grammar",
  order: 5,
  title: "Te-form",
  subtitle: "Linking verbs and building longer sentences",
  summary:
    "The te-form connects verbs in sequence, makes requests, and is the stem for dozens of grammar patterns.",
  estMinutes: 18,
  vocabulary: [
    { word: "食[た]べる", reading: "たべる", meaning: "to eat" },
    { word: "飲[の]む", reading: "のむ", meaning: "to drink" },
    { word: "待[ま]つ", reading: "まつ", meaning: "to wait" },
    { word: "書[か]く", reading: "かく", meaning: "to write" },
    { word: "読[よ]む", reading: "よむ", meaning: "to read" },
    { word: "ください", reading: "ください", meaning: "please (give me)" },
  ],
  blocks: [
    {
      type: "prose",
      text: "The **te-form** is one of the most useful verb shapes in Japanese. Think of it as 'and then' — it links actions, asks for favours, and attaches to helper verbs like {{いる}} (ongoing action) and {{しまう}} (completion).",
    },
    {
      type: "rule",
      title: "How to conjugate",
      items: [
        "**Ru-verbs:** replace {{る}} with {{て}}. {{食べる}} → {{食べて}}.",
        "**U-verbs:** follow the same vowel shifts as past tense, but end in {{て}} / {{で}} instead of {{た}} / {{だ}}.",
        "**Exceptions:** {{する}} → {{して}}, {{来る}} → {{来て}}.",
        "**Sound changes:** {{書く}} → {{書いて}} (く→いて), {{待つ}} → {{待って}} (つ→って), {{飲む}} → {{飲んで}} (む→んで).",
      ],
    },
    {
      type: "table",
      caption: "U-verb te-form endings (same groups as past)",
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
      type: "heading",
      text: "Using the te-form",
    },
    {
      type: "rule",
      title: "Core patterns",
      items: [
        "**Sequence:** {{起きて、食べて、学校へ行く}} — 'Got up, ate, and went to school.'",
        "**Request:** {{待ってください}} — 'Please wait.'",
        "**Permission:** {{食べてもいい}} — 'May eat.'",
        "**Prohibition:** {{食べてはいけない}} — 'Must not eat.'",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "本[ほん]を読[よ]んで、寝[ね]る。", en: "Read a book and (then) sleep." },
        { jp: "ここに座[すわ]ってください。", en: "Please sit here." },
        { jp: "写真[しゃしん]を撮[と]ってもいいですか。", en: "May I take a photo?" },
      ],
    },
    {
      type: "tip",
      text: "If you know the past tense (た-form), the te-form uses the same stem change — just swap {{た}} for {{て}} and {{だ}} for {{で}}.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Te-form of 食べる?",
      choices: ["食べて", "食べた", "食べる", "食べない"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Te-form of 書く?",
      choices: ["書いて", "書って", "書んで", "書した"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "「Please wait」 — which is correct?",
      choices: ["待つください", "待ってください", "待ったください", "待ちください"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Te-form of する?",
      choices: ["すて", "して", "した", "すって"],
      answer: 1,
    },
  ],
};
