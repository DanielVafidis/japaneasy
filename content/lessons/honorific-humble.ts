import type { Lesson } from "../types";

export const honorificHumble: Lesson = {
  id: "honorific-humble",
  stage: "special-expressions",
  order: 1,
  title: "Honorific & Humble Speech",
  subtitle: "Respectful 尊敬語 and modest 謙譲語",
  summary:
    "Elevate the listener and humble yourself — essential for shops, workplaces, and meeting someone's family.",
  estMinutes: 20,
  vocabulary: [
    { word: "いらっしゃる", reading: "いらっしゃる", meaning: "to be / go / come (hon.)" },
    { word: "おっしゃる", reading: "おっしゃる", meaning: "to say (hon.)" },
    { word: "参[まい]る", reading: "まいる", meaning: "to go / come (hum.)" },
    { word: "申[もう]す", reading: "もうす", meaning: "to say (hum.)" },
    { word: "いただく", reading: "いただく", meaning: "to receive (hum.)" },
    { word: "社長[しゃちょう]", reading: "しゃちょう", meaning: "company president" },
    { word: "お客[きゃく]様[さま]", reading: "おきゃくさま", meaning: "customer; guest" },
    { word: "恐[おそ]れ入[い]ります", reading: "おそれいります", meaning: "I'm sorry to trouble you (hum.)" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Japanese **keigo** (respectful language) has three layers learners meet in order: **polite** {{です／ます}} (丁寧語), **honorific** (尊敬語) elevates the other person, and **humble** (謙譲語) lowers yourself. Never honor yourself or humble the customer — that swap is a classic learner mistake.",
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
        ["聞く / 聞こえる", "お聞[き]きになる", "伺[うかが]う"],
        ["知る / 知っている", "ご存[ぞん]じ", "存[ぞん]じ上[あ]げる"],
        ["会う", "お会[あ]いになる", "お目[め]にかかる"],
        ["くれる", "くださる", "— (use いただく for receive)"],
      ],
    },
    {
      type: "rule",
      title: "お / ご prefix",
      items: [
        "**お** — native Japanese stems: {{お待[ま]ち}} · {{お話[はな]し}}.",
        "**ご** — Sino-Japanese (on-reading): {{ご連絡[れんらく]}} · {{ご確認[かくにん]}}.",
        "Honorific: {{お}} + stem + {{になる}}. Humble: {{お}} + stem + {{する}}.",
      ],
    },
    {
      type: "rule",
      title: "Common mistakes",
      items: [
        "✗ {{私[わたし]がおっしゃいます}} — don't honor yourself.",
        "✗ {{お客様[おきゃくさま]が参[まい]りました}} — don't humble the customer.",
        "✓ {{お客様がいらっしゃいました}} — elevate the guest.",
        "✓ {{私[わたし]が参[まい]りました}} — humble yourself arriving.",
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
      prompt: "Humble for 見る (I look at / read)?",
      choices: ["ご覧になる", "拝見する", "お見えになる", "見せる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Honorific for 会う?",
      choices: ["お会いになる", "お目にかかる", "会われる", "会います"],
      answer: 0,
    },
  ],
};
