import type { Lesson } from "../types";

export const honorificHumble: Lesson = {
  id: "honorific-humble",
  stage: "n3",
  order: 8,
  title: "Honorific & Humble Speech",
  subtitle: "尊敬語 and 謙譲語 basics",
  summary:
    "Elevate the listener and humble yourself — shop and office essentials. Advanced keigo patterns live in the Keigo Advanced lesson.",
  estMinutes: 20,
  vocabulary: [
    { word: "いらっしゃる", reading: "いらっしゃる", meaning: "to be / go / come (hon.)" },
    { word: "おっしゃる", reading: "おっしゃる", meaning: "to say (hon.)" },
    { word: "参[まい]る", reading: "まいる", meaning: "to go / come (hum.)" },
    { word: "申[もう]す", reading: "もうす", meaning: "to say (hum.)" },
    { word: "いただく", reading: "いただく", meaning: "to receive (hum.)" },
    { word: "社長[しゃちょう]", reading: "しゃちょう", meaning: "company president" },
    { word: "お客[きゃく]様[さま]", reading: "おきゃくさま", meaning: "customer; guest" },
    { word: "会議[かいぎ]", reading: "かいぎ", meaning: "meeting" },
    { word: "ご覧[らん]になる", reading: "ごらんになる", meaning: "to see (honorific)" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Japanese **keigo** has three layers: **polite** {{です／ます}} (丁寧語), **honorific** (尊敬語) elevates the other person, and **humble** (謙譲語) lowers yourself. This lesson covers the **basics** for shops and workplaces. Deeper patterns (advanced set phrases, nuanced swaps) are in **Keigo Advanced**.",
    },
    {
      type: "rule",
      title: "Honorific — elevate them",
      items: [
        "**Special verbs:** {{いらっしゃる}} (be/go/come), {{おっしゃる}} (say), {{なさる}} (do), {{くださる}} (give).",
        "**お／ご + stem + になる:** {{お待ちになる}} — '(they) wait (respectfully).'",
        "**Passive as honorific:** {{決められました}} — 'It has been decided (by the boss).'",
      ],
    },
    {
      type: "rule",
      title: "Humble — lower yourself",
      items: [
        "**Special verbs:** {{参る}} (go/come), {{申す}} (say), {{いただく}} (receive), {{差し上げる}} (give).",
        "**お／ご + stem + する:** {{お待ちする}} — 'I wait (humbly).' {{お世話になりました}}.",
      ],
    },
    {
      type: "table",
      caption: "Plain → honorific / humble (core set)",
      headers: ["Plain", "Honorific", "Humble"],
      rows: [
        ["行く / 来る / いる", "いらっしゃる", "参る / 伺う"],
        ["言う", "おっしゃる", "申す / 申し上げる"],
        ["する", "なさる", "いたす"],
        ["食べる / 飲む", "召し上がる", "いただく"],
        ["見る", "ご覧になる", "拝見する"],
        ["くれる", "くださる", "— (use いただく to receive)"],
      ],
    },
    {
      type: "rule",
      title: "お / ご prefix",
      items: [
        "**お** — native stems: {{お待ち}} · {{お話し}}.",
        "**ご** — Sino-Japanese: {{ご連絡}} · {{ご確認}}.",
        "Honorific: {{お}} + stem + {{になる}}. Humble: {{お}} + stem + {{する}}.",
      ],
    },
    {
      type: "rule",
      title: "Classic mistakes",
      items: [
        "✗ {{私がおっしゃいます}} — don't honor yourself.",
        "✗ {{お客様が参りました}} — don't humble the customer.",
        "✓ {{お客様がいらっしゃいました}} — elevate the guest.",
        "✓ {{私が参りました}} — humble yourself arriving.",
      ],
    },
    {
      type: "dialogue",
      title: "At the office",
      lines: [
        { speaker: "部下", jp: "社長[しゃちょう]はもういらっしゃいますか。", en: "Is the president here already? (respectful)" },
        { speaker: "秘書", jp: "はい、お待[ま]ちしております。", en: "Yes, we've been waiting (humble)." },
        { speaker: "部下", jp: "会議[かいぎ]の件[けん]、申[もう]し上[あ]げます。", en: "I'll report on the meeting matter (humble)." },
      ],
    },
    {
      type: "dialogue",
      title: "At the shop",
      lines: [
        { speaker: "店員", jp: "いらっしゃいませ。ご覧[らん]ください。", en: "Welcome. Please take a look." },
        { speaker: "客", jp: "この靴[くつ]、試[ため]してもいいですか。", en: "May I try these shoes?" },
        { speaker: "店員", jp: "かしこまりました。お待[ま]ちください。", en: "Certainly. One moment please." },
      ],
    },
    {
      type: "tip",
      text: "As a customer, polite {{です／ます}} is enough. Store clerks use set phrases: {{いらっしゃいませ}}, {{かしこまりました}}. Don't over-keigo yourself.",
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
      prompt: "Humble for 見る (I look at / read)?",
      choices: ["ご覧になる", "拝見する", "お見えになる", "見せる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Honorific pattern: お + stem + ?",
      choices: ["する", "になる", "いたす", "申す"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'Is the president here already?' (honorific)",
      tiles: ["社長[しゃちょう]は", "もう", "いらっしゃいますか"],
      distractors: ["おりますか"],
      explanation: "Honorific いらっしゃる for others; humble おる is for your own side.",
    },
  ],
  drills: [
    { id: "hon-say", prompt: "Honorific — 'to say' (elevate them)", jp: "言[い]う", answers: ["おっしゃる"] },
    { id: "hum-say", prompt: "Humble — 'to say' (lower yourself)", jp: "言[い]う", answers: ["申[もう]す", "申[もう]し上[あ]げる"] },
    { id: "hon-be", prompt: "Honorific — 'to be / come / go'", jp: "いる", answers: ["いらっしゃる"] },
    { id: "hum-go", prompt: "Humble — 'to go / come'", jp: "行[い]く", answers: ["参[まい]る"] },
    { id: "hum-receive", prompt: "Humble — 'to receive / eat / drink'", jp: "もらう", answers: ["いただく"] },
  ],
};
