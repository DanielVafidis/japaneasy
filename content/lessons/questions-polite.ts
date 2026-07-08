import type { Lesson } from "../types";

export const questionsPolite: Lesson = {
  id: "questions-polite",
  stage: "essential-grammar",
  order: 3,
  title: "Questions & か",
  subtitle: "Asking politely without changing word order",
  summary:
    "Turn any statement into a question by adding か — and learn the polite question patterns that replace casual の.",
  estMinutes: 16,
  vocabulary: [
    { word: "誰[だれ]", reading: "だれ", meaning: "who" },
    { word: "何[なに/なん]", reading: "なに", meaning: "what" },
    { word: "どこ", reading: "どこ", meaning: "where" },
    { word: "いつ", reading: "いつ", meaning: "when" },
    { word: "どう", reading: "どう", meaning: "how" },
    { word: "いい", reading: "いい", meaning: "good; OK" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Japanese questions keep the **same word order** as statements. You don't invert subject and verb like English. Just add the question marker {{か}} at the end — and in polite speech, keep {{です}} or {{ます}} before it.",
    },
    {
      type: "rule",
      title: "The question marker か",
      items: [
        "Casual: {{元気？}} or {{元気か？}} — both work; {{？}} alone is very common in speech.",
        "Polite: {{元気ですか？}} — never drop {{です}} before {{か}} in polite mode.",
        "{{か}} is **not** used with WH-words at the end when they already mark the question: {{何を食べますか？}} ✓",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "学生[がくせい]ですか。", en: "Are you a student?" },
        { jp: "映画[えいが]を見[み]ますか。", en: "Will you watch a movie?" },
        { jp: "コーヒーが好[す]きですか。", en: "Do you like coffee?" },
      ],
    },
    {
      type: "heading",
      text: "WH-questions",
    },
    {
      type: "table",
      caption: "Common question words",
      headers: ["Word", "Meaning", "Example"],
      rows: [
        ["誰", "who", "誰ですか"],
        ["何", "what", "何を食べますか"],
        ["どこ", "where", "どこへ行きますか"],
        ["いつ", "when", "いつ来ますか"],
        ["どう", "how", "日本語はどうですか"],
        ["どうして / なぜ", "why", "どうして来[き]ませんか"],
      ],
    },
    {
      type: "heading",
      text: "Negative questions = soft invitations",
    },
    {
      type: "prose",
      text: "{{食[た]べませんか}} literally asks 'won't you eat?' but usually means **'would you like to eat?'** — softer than {{食べますか}}. Same pattern: {{行[い]きませんか}} (shall we go?), {{コーヒーにしませんか}} (how about coffee?).",
    },
    {
      type: "rule",
      title: "Answering yes/no questions",
      items: [
        "**はい** agrees with the question as stated — even if the question is negative.",
        "「コーヒーはいりませんか」→「はい」= 'No thanks' is WRONG in textbook logic; 「はい」= 'Yes, I don't need it.' Many speakers use **「いいえ、結構[けっこう]です」** instead.",
        "When unsure, repeat the verb: {{はい、飲[の]みます}} / {{いいえ、飲みません}}.",
      ],
    },
    {
      type: "note",
      text: "Casual speech often drops {{か}} and uses rising intonation instead: {{行く？}} sounds like 'Going?' Polite speech almost always keeps {{か}}.",
    },
    {
      type: "dialogue",
      title: "At a café",
      lines: [
        { speaker: "店員", jp: "いらっしゃいませ。何[なに]にしますか。", en: "Welcome. What will you have?" },
        { speaker: "客", jp: "コーヒーをください。", en: "Coffee, please." },
        { speaker: "店員", jp: "ホットですか。アイスですか。", en: "Hot or iced?" },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Polite question form of 元気だ?",
      choices: ["元気か", "元気ですか", "元気ますか", "元気でしたか"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Which marks a polite yes/no question?",
      choices: ["ね", "よ", "か", "の"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "「何を食べます＿」 — fill the blank (polite).",
      choices: ["ね", "か", "よ", "に"],
      answer: 1,
    },
    {
      kind: "fill",
      prompt: "Type the question word for 'why' (common casual form, romaji).",
      answers: ["doushite", "naze"],
    },
    {
      kind: "mc",
      prompt: "「Shall we go?」 — natural invitation?",
      choices: ["行きますか", "行きませんか", "行くか", "行きたいか"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'Excuse me, where is the station?'",
      tiles: ["すみません、", "駅[えき]は", "どこですか"],
      distractors: ["どこだか"],
      explanation: "Polite questions end in ですか.",
    },
  ],
};
