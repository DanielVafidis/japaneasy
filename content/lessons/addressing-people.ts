import type { Lesson } from "../types";

export const addressingPeople: Lesson = {
  id: "addressing-people",
  stage: "essential-grammar",
  order: 2,
  title: "Addressing People",
  subtitle: "I, you, names, and さん",
  summary:
    "Japanese has many words for 'I' and rarely says 'you' — learn how names, titles, and さん replace them.",
  estMinutes: 14,
  vocabulary: [
    { word: "私[わたし]", reading: "わたし", meaning: "I (neutral polite)" },
    { word: "僕[ぼく]", reading: "ぼく", meaning: "I (male, casual-polite)" },
    { word: "名前[なまえ]", reading: "なまえ", meaning: "name" },
    { word: "先生[せんせい]", reading: "せんせい", meaning: "teacher; expert" },
    { word: "社長[しゃちょう]", reading: "しゃちょう", meaning: "company president" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Polite grammar is only half of social language. You also need the right **name for yourself** and the right **way to address others** — often without ever saying 'you'.",
    },
    {
      type: "heading",
      text: "Referring to yourself",
    },
    {
      type: "table",
      caption: "Common first-person words",
      headers: ["Word", "Register", "Notes"],
      rows: [
        ["私 (わたし)", "Neutral polite", "Safest default for learners"],
        ["私 (わたくし)", "Formal", "Speeches, business ceremonies"],
        ["僕 (ぼく)", "Male casual-polite", "Common among young men"],
        ["俺 (おれ)", "Male rough casual", "Close friends only"],
        ["あたし", "Feminine casual", "Many speakers prefer わたし now"],
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "私[わたし]の名前[なまえ]は佐藤[さとう]です。", en: "My name is Sato. (neutral, polite)" },
        { jp: "僕[ぼく]の名前[なまえ]は健太[けんた]だ。", en: "My name is Kenta. (male, casual)" },
      ],
    },
    {
      type: "heading",
      text: "Referring to others",
    },
    {
      type: "rule",
      title: "Instead of 'you'",
      items: [
        "Use the person's **name + さん**: {{田中さん}}.",
        "Use a **title**: {{先生}}, {{社長}}, {{田中先生}}.",
        "In casual speech, drop pronouns when context is clear.",
        "{{くん}} — casual for boys/juniors; {{ちゃん}} — affectionate (often female or children).",
      ],
    },
    {
      type: "dialogue",
      title: "At the office",
      lines: [
        { speaker: "部下", jp: "社長[しゃちょう]、お呼[よ]びでしょうか。", en: "President, did you call for me?" },
        { speaker: "社長", jp: "田中[たなか]さん、ちょっと来[き]てください。", en: "Tanaka, please come here a moment." },
      ],
    },
    {
      type: "note",
      text: "{{先生}} applies to anyone with real expertise — doctors, teachers, artists — not only school teachers.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Safest default for 'I' as a learner?",
      choices: ["俺", "私 (わたし)", "あたし", "僕 only"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Polite way to address Tanaka?",
      choices: ["田中", "田中さん", "田中ちゃん only", "あなた田中"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Why avoid あなた in Japanese?",
      choices: ["It is ungrammatical", "Names/titles are preferred; あなた can sound distant or rude", "It means 'they'", "It is only for writing"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "社長 refers to…",
      choices: ["teacher", "company president", "doctor", "student"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'This is my friend Kenta'",
      tiles: ["こちらは", "友達[ともだち]の", "健太[けんた]です"],
      distractors: ["健太[けんた]さんです"],
      explanation: "No さん when introducing someone from your own in-group.",
    },
  ],
};
