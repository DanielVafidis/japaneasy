import type { Lesson } from "../types";

export const teFormUses: Lesson = {
  id: "te-form-uses",
  stage: "essential-grammar",
  order: 6,
  title: "More Te-form Uses",
  subtitle: "〜ている · 知っている · motion verbs",
  summary:
    "Use te-form + いる for ongoing actions and resulting states, and learn when ている is not progressive.",
  estMinutes: 16,
  vocabulary: [
    { word: "読[よ]む", reading: "よむ", meaning: "to read" },
    { word: "知[し]る", reading: "しる", meaning: "to know (become aware of)" },
    { word: "分[わ]かる", reading: "わかる", meaning: "to understand" },
    { word: "結婚[けっこん]する", reading: "けっこんする", meaning: "to marry" },
    { word: "教科書[きょうかしょ]", reading: "きょうかしょ", meaning: "textbook" },
    { word: "友達[ともだち]", reading: "ともだち", meaning: "friend" },
  ],
  blocks: [
    {
      type: "prose",
      text: "The te-form plus {{いる}} describes an **ongoing action** (often like English '-ing') or a **state that continues** after an action. Conjugate {{いる}} like any ru-verb: {{読んでいる}}, {{読んでいた}}, {{読んでいません}}.",
    },
    {
      type: "rule",
      title: "Formation",
      items: [
        "Te-form + {{いる}}: {{食べて}} + {{いる}} → {{食べている}}.",
        "Casual speech often drops {{い}}: {{食べてる}}, {{読んでる}}, {{聞いてない}}.",
        "In polite writing, keep the full {{い}}: {{読んでいます}}.",
      ],
    },
    {
      type: "dialogue",
      title: "Progressive",
      lines: [
        { speaker: "A", jp: "彼[かれ]らは何[なに]をしてるの？", en: "What are they doing?" },
        { speaker: "B", jp: "晩[ばん]ご飯[はん]を作[つく]ってる。", en: "(They) are making dinner." },
        { speaker: "A", jp: "何[なに]を読[よ]んでいる？", en: "What are you reading?" },
        { speaker: "B", jp: "雑誌[ざっし]を読[よ]んでいます。", en: "I'm reading a magazine." },
      ],
    },
    {
      type: "heading",
      text: "Resulting state, not progressive",
    },
    {
      type: "prose",
      text: "Some verbs use {{ている}} for a **state that resulted** from an action — not something happening right now. {{知る}} means 'to come to know'; the continuing state is {{知っている}} ('I know'). Compare {{分かる}} ('to understand') — usually {{分かります}} in polite speech, not {{分かっている}} (which can sound like 'I already get it, obviously').",
    },
    {
      type: "examples",
      items: [
        { jp: "今日[きょう]、知[し]りました。", en: "I found out about it today. (action)" },
        { jp: "この店[みせ]を知[し]っていますか。", en: "Do you know this place? (state)" },
        { jp: "結婚[けっこん]している。", en: "Is married. (state, not 'getting married right now')" },
        { jp: "使[つか]い方[かた]は分[わ]かりますか。", en: "Do you understand how to use it?" },
      ],
    },
    {
      type: "note",
      text: "Motion verbs (行く, 来る, 帰る) + {{ている}} often mean someone went and is **still there**: {{日本に行っている}} — 'is in Japan (having gone there)'.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Progressive of 読む?",
      choices: ["読むいる", "読んでいる", "読んだいる", "読みている"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「I know this song」 — natural?",
      choices: ["知る", "知っている", "知った", "知らない"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Casual progressive of 食べている?",
      choices: ["食べて", "食べてる", "食べた", "食べる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "結婚している usually means…",
      choices: ["getting married now", "is married (state)", "will marry", "never married"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'It's raining right now'",
      tiles: ["今[いま]、", "雨[あめ]が", "降[ふ]っている"],
      distractors: ["降[ふ]ってある"],
      explanation: "Ongoing action = ている. てある is for a resulting state someone set up.",
    },
  ],
  drills: [
    { id: "progressive", prompt: "Make it progressive — 'is reading'", jp: "読[よ]む", answers: ["読[よ]んでいる"] },
    { id: "shitteiru", prompt: "Say 'I know' — an enduring state", jp: "知[し]る", answers: ["知[し]っている"] },
    { id: "contraction", prompt: "Contract it — spoken style", jp: "読[よ]んでいる", answers: ["読[よ]んでる"] },
    { id: "married", prompt: "Say 'is married' — a resulting state", jp: "結婚[けっこん]する", answers: ["結婚[けっこん]している"] },
    { id: "shiranai", prompt: "Say 'don't know' — the famous exception", jp: "知[し]っている", answers: ["知[し]らない"] },
  ],
};
