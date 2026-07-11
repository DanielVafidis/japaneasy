import type { Lesson } from "../types";

export const addressingPeople: Lesson = {
  id: "addressing-people",
  stage: "n5",
  order: 16,
  title: "Addressing People",
  subtitle: "初めまして — names, さん, and self-intro",
  summary:
    "Introduce yourself, greet politely, and address others with names and さん — Japanese rarely needs a word for 'you'.",
  estMinutes: 14,
  vocabulary: [
    { word: "私[わたし]", reading: "わたし", meaning: "I (neutral polite)" },
    { word: "僕[ぼく]", reading: "ぼく", meaning: "I (male, casual-polite)" },
    { word: "名前[なまえ]", reading: "なまえ", meaning: "name" },
    { word: "先生[せんせい]", reading: "せんせい", meaning: "teacher; expert" },
    { word: "初[はじ]めまして", reading: "はじめまして", meaning: "Nice to meet you" },
    { word: "よろしくお願[ねが]いします", reading: "よろしくおねがいします", meaning: "Please treat me kindly (closing a self-intro)" },
    { word: "さん", reading: "さん", meaning: "polite name suffix (Mr/Ms/~san)" },
    { word: "学生[がくせい]", reading: "がくせい", meaning: "student" },
    { word: "会社員[かいしゃいん]", reading: "かいしゃいん", meaning: "office worker; company employee" },
    { word: "俺[おれ]", reading: "おれ", meaning: "I; me (rough, masculine)" },
  ],
  blocks: [
    {
      type: "prose",
      text: "First meetings and greetings are social scripts: say who you are, use {{さん}} for others, and almost never say a blunt 'you'. Titles and names do that job instead.",
    },
    {
      type: "heading",
      text: "Self-intro essentials",
    },
    {
      type: "rule",
      title: "The classic opener",
      items: [
        "{{初[はじ]めまして}} — Nice to meet you (first meeting)",
        "{{私[わたし]は〜です}} — I am ~",
        "{{よろしくお願[ねが]いします}} — closing line: please treat me well / looking forward to working with you",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "初[はじ]めまして。Yukiです。", en: "Nice to meet you. I'm Yuki." },
        { jp: "私[わたし]は学生[がくせい]です。", en: "I am a student." },
        { jp: "どうぞよろしくお願[ねが]いします。", en: "Please treat me kindly. (full polite close)" },
      ],
    },
    {
      type: "dialogue",
      title: "Language meetup intro",
      lines: [
        { speaker: "Yuki", jp: "初[はじ]めまして。Yukiです。学生[がくせい]です。", en: "Nice to meet you. I'm Yuki. I'm a student." },
        { speaker: "Ken", jp: "初[はじ]めまして。Kenです。会社員[かいしゃいん]です。", en: "Nice to meet you. I'm Ken. I'm an office worker." },
        { speaker: "Yuki", jp: "よろしくお願[ねが]いします。", en: "Please treat me kindly." },
        { speaker: "Ken", jp: "こちらこそ、よろしくお願[ねが]いします。", en: "Likewise — please treat me kindly." },
      ],
    },
    {
      type: "heading",
      text: "Referring to yourself",
    },
    {
      type: "table",
      caption: "Common 'I' words (N5)",
      headers: ["Word", "Feel", "Use"],
      rows: [
        ["私 (わたし)", "Neutral polite", "Safe default in class & introductions"],
        ["僕 (ぼく)", "Masculine, softer", "Boys/men among peers"],
        ["俺 (おれ)", "Rough masculine", "Close male friends — not for teachers"],
      ],
    },
    {
      type: "note",
      text: "Once the topic is clear, Japanese often **drops** 'I' entirely: {{学生です}} already means 'I'm a student' in context.",
    },
    {
      type: "heading",
      text: "Addressing others — さん and titles",
    },
    {
      type: "rule",
      title: "Names & respect",
      items: [
        "Given or family name + {{さん}} is the default polite address: {{田中[たなか]さん}}",
        "Don't put {{さん}} on your **own** name when introducing yourself.",
        "Teachers, doctors, and similar roles: {{先生}} often replaces the name — {{田中先生}}",
        "Avoid a bare {{あなた}} with strangers; use the name/title instead.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "田中[たなか]さんは元気[げんき]ですか。", en: "How are you, Tanaka-san?" },
        { jp: "先生[せんせい]、質問[しつもん]があります。", en: "Teacher, I have a question." },
        { jp: "Yukiさんは学生[がくせい]ですか。", en: "Are you a student, Yuki?" },
      ],
    },
    {
      type: "heading",
      text: "Everyday greetings",
    },
    {
      type: "examples",
      items: [
        { jp: "おはよう。 / おはようございます。", en: "Good morning. (casual / polite)" },
        { jp: "こんにちは。", en: "Hello (daytime)." },
        { jp: "こんばんは。", en: "Good evening." },
        { jp: "お元気[げんき]ですか。", en: "How are you? (polite)" },
        { jp: "また会[あ]いましょう。", en: "Let's meet again." },
      ],
    },
    {
      type: "tip",
      text: "{{こちらこそ}} ('likewise / the pleasure is mine') is the natural reply when someone says {{よろしくお願いします}} first.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "What do you say at a first meeting?",
      choices: ["お疲れ様です", "初めまして", "行ってきます", "ただいま"],
      answer: 1,
      explanation: "初めまして = nice to meet you (first time).",
    },
    {
      kind: "mc",
      prompt: "When introducing yourself, do you add さん to your own name?",
      choices: ["Yes, always", "No — さん is for others", "Only with 僕", "Only in writing"],
      answer: 1,
      explanation: "Don't さん yourself; others may call you ○○さん.",
    },
    {
      kind: "mc",
      prompt: "Safe default for 'I' in a polite intro?",
      choices: ["俺", "私", "あなた", "先生"],
      answer: 1,
      explanation: "私 is the neutral polite default.",
    },
    {
      kind: "fill",
      prompt: "Type the closing line often used after a self-intro (romaji or Japanese):",
      answers: [
        "よろしくお願いします",
        "よろしくおねがいします",
        "どうぞよろしくお願いします",
        "どうぞよろしくおねがいします",
      ],
      explanation: "よろしくお願いします closes the intro.",
    },
    {
      kind: "mc",
      prompt: "How should you usually address a teacher?",
      choices: ["あなた", "先生", "俺", "名前 without anything"],
      answer: 1,
      explanation: "先生 (or Name + 先生) is the normal address.",
    },
    {
      kind: "order",
      prompt: "Build a short self-intro: 'Nice to meet you. I'm a student.'",
      tiles: ["初[はじ]めまして。", "学生[がくせい]", "です。"],
      distractors: ["さん", "俺[おれ]は"],
      explanation: "Greeting + role + です.",
    },
  ],
  drills: [
    { id: "hajimemashite", prompt: "First meeting greeting", jp: "(first meeting)", answers: ["初[はじ]めまして", "はじめまして"] },
    { id: "watashi-desu", prompt: "Introduce — 'I am a student'", jp: "学生[がくせい]", answers: ["私[わたし]は学生[がくせい]です", "学生[がくせい]です"] },
    { id: "yoroshiku", prompt: "Close the intro", jp: "(closing line)", answers: ["よろしくお願[ねが]いします", "どうぞよろしくお願[ねが]いします"] },
    { id: "san", prompt: "Address Tanaka politely", jp: "田中[たなか]", answers: ["田中[たなか]さん"] },
    { id: "sensei", prompt: "Address the teacher", jp: "teacher", answers: ["先生[せんせい]", "せんせい"] },
  ],
};
