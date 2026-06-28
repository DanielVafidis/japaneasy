import type { Lesson } from "../types";

export const honorificHumble: Lesson = {
  id: "honorific-humble",
  stage: "special-expressions",
  order: 1,
  title: "Honorific & Humble Speech",
  subtitle: "Respectful 尊敬語 and modest 謙譲語",
  summary:
    "Elevate the listener and humble yourself — essential for shops, workplaces, and meeting someone's family.",
  estMinutes: 16,
  vocabulary: [
    { word: "いらっしゃる", reading: "いらっしゃる", meaning: "to be / go / come (hon.)" },
    { word: "おっしゃる", reading: "おっしゃる", meaning: "to say (hon.)" },
    { word: "参[まい]る", reading: "まいる", meaning: "to go / come (hum.)" },
    { word: "申[もう]す", reading: "もうす", meaning: "to say (hum.)" },
    { word: "いただく", reading: "いただく", meaning: "to receive (hum.)" },
    { word: "社長[しゃちょう]", reading: "しゃちょう", meaning: "company president" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Japanese **keigo** (respectful language) has two directions: **honorific** (尊敬語) elevates the other person, and **humble** (謙譲語) lowers yourself. Never honor yourself or humble the customer — that swap is a classic learner mistake.",
    },
    {
      type: "rule",
      title: "Honorific — elevate them",
      items: [
        "**Special verbs:** {{いらっしゃる}} (be/go/come), {{おっしゃる}} (say), {{なさる}} (do), {{くださる}} (give).",
        "**お／ご + stem + になる:** {{お食べになる}} — '(they) eat (respectfully).'",
        "**Passive as honorific:** {{決[き]められました}} — 'It has been decided (by the boss).'",
      ],
    },
    {
      type: "rule",
      title: "Humble — lower yourself",
      items: [
        "**Special verbs:** {{参る}} (go/come), {{申す}} (say), {{いただく}} (receive), {{差[さ]し上[あ]げる}} (give).",
        "**お／ご + stem + する:** {{お待[ま]ちする}} — 'I wait (humbly).' {{お世[せ]話[わ]になりました}} — 'Thank you for taking care of me.'",
      ],
    },
    {
      type: "table",
      caption: "Plain → honorific / humble",
      headers: ["Plain", "Honorific", "Humble"],
      rows: [
        ["行く / 来る / いる", "いらっしゃる", "参る / 伺う"],
        ["言う", "おっしゃる", "申す / 申し上げる"],
        ["する", "なさる", "いたす"],
        ["食べる", "召[め]し上[あ]がる", "いただく"],
        ["見る", "ご覧[らん]になる", "拝見[はいけん]する"],
      ],
    },
    {
      type: "dialogue",
      title: "At the office",
      lines: [
        { speaker: "部下", jp: "社長[しゃちょう]はもういらっしゃいますか。", en: "Is the president here already? (respectful)" },
        { speaker: "秘書", jp: "はい、お待[ま]ちしております。", en: "Yes, we've been waiting (humble)." },
        { speaker: "社長", jp: "会議[かいぎ]は三時[さんじ]からでございます。", en: "The meeting is from three (polite formal)." },
      ],
    },
    {
      type: "tip",
      text: "Store clerks use set phrases: {{いらっしゃいませ}} (welcome), {{かしこまりました}} (certainly). You don't need full keigo as a customer — polite {{です／ます}} is enough.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Honorific for 言う?",
      choices: ["申す", "おっしゃる", "言われる", "言います"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Humble for 行く / 来る?",
      choices: ["いらっしゃる", "参る", "行かれる", "来られる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Elevating the customer — which is correct?",
      choices: ["お客様が申しました", "お客様がおっしゃいました", "私がおっしゃいました", "お客様が参りました"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "いただく is humble for…",
      choices: ["give", "eat / receive", "see", "go"],
      answer: 1,
    },
  ],
};
