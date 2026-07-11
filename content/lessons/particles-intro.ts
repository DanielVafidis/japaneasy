import type { Lesson } from "../types";

export const particlesIntro: Lesson = {
  id: "particles-intro",
  stage: "n5",
  order: 1,
  title: "Introduction to Particles",
  subtitle: "SOV word order · は · が · も",
  summary:
    "Japanese is SOV (verb last). Particles mark each word's role — meet topic は, identifier が, and inclusive も.",
  estMinutes: 16,
  vocabulary: [
    { word: "学生[がくせい]", reading: "がくせい", meaning: "student" },
    { word: "明日[あした]", reading: "あした", meaning: "tomorrow" },
    { word: "今日[きょう]", reading: "きょう", meaning: "today" },
    { word: "試験[しけん]", reading: "しけん", meaning: "exam" },
    { word: "誰[だれ]", reading: "だれ", meaning: "who" },
    { word: "電車[でんしゃ]", reading: "でんしゃ", meaning: "train" },
    { word: "駅[えき]", reading: "えき", meaning: "station" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Japanese is **SOV**: the **verb (or predicate) comes last**. Everything that sets the scene — topic, subject, time, place — lines up **before** that final predicate. **Particles** are short hiragana glued to the end of a word to mark its grammatical role. Change the particle and you change the meaning.",
    },
    {
      type: "rule",
      title: "SOV at a glance",
      items: [
        "English (SVO): *Alice is a student*.",
        "Japanese (SOV): {{アリスは学生だ}} — topic first, predicate **last**.",
        "Particles sit **after** the word they mark: {{アリスは}}, {{電車が}}, {{私も}}.",
      ],
    },
    {
      type: "heading",
      text: "The topic particle 「は」",
    },
    {
      type: "prose",
      text: "The topic particle marks what you are talking about. It is written {{は}} but, as a particle, pronounced **wa**. It essentially says 'as for…' — known information you are framing the sentence around.",
    },
    {
      type: "dialogue",
      title: "On the platform",
      lines: [
        { speaker: "Bob", jp: "アリスは学生[がくせい]？", en: "As for Alice, (is she a) student?" },
        { speaker: "Alice", jp: "うん、学生[がくせい]。", en: "Yeah, (I) am." },
        { speaker: "Bob", jp: "今日[きょう]は試験[しけん]だ。", en: "As for today, (there's an) exam." },
        { speaker: "Alice", jp: "電車[でんしゃ]は遅[おく]れてる？", en: "As for the train, is it late?" },
      ],
    },
    {
      type: "prose",
      text: "Once the topic is set, you don't repeat it. Without a topic, a sentence like {{明日[あした]？}} ('tomorrow?') is valid but vague — {{は}} tells the listener what the sentence is about.",
    },
    {
      type: "examples",
      items: [
        { jp: "今日[きょう]は雨[あめ]だ。", en: "As for today, it's rain." },
        { jp: "駅[えき]は近[ちか]い。", en: "As for the station, it's close." },
      ],
    },
    {
      type: "heading",
      text: "The inclusive particle 「も」",
    },
    {
      type: "prose",
      text: "Replace {{は}} with {{も}} to mean **'also'** or 'too'. It includes something in addition to the existing topic.",
    },
    {
      type: "dialogue",
      lines: [
        { speaker: "Bob", jp: "アリスは学生[がくせい]。", en: "Alice is a student." },
        { speaker: "Bob", jp: "トムも学生[がくせい]。", en: "Tom is also a student." },
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "明日[あした]も雨[あめ]だ。", en: "Tomorrow, too, is rain." },
        { jp: "私も電車[でんしゃ]だ。", en: "I'm taking the train too. (lit. As for me also, train.)" },
      ],
    },
    {
      type: "heading",
      text: "The identifier particle 「が」",
    },
    {
      type: "prose",
      text: "Use {{が}} when you need to **identify** something unknown — typically to answer or ask a who/what question. Compare carefully:",
    },
    {
      type: "rule",
      title: "は vs が",
      items: [
        "**{{は}}** — topic / known frame: 'as for X…' (we already know what X is).",
        "**{{が}}** — identifier / new focus: 'it is X that…' (picking X out from the unknown).",
        "Question words almost always take {{が}}: {{誰が}}, {{何が}}.",
      ],
    },
    {
      type: "dialogue",
      title: "Who's the student?",
      lines: [
        { speaker: "A", jp: "誰[だれ]が学生[がくせい]？", en: "Who is the student?" },
        { speaker: "B", jp: "アリスが学生[がくせい]。", en: "Alice is the (one who is) student." },
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "電車[でんしゃ]が来[く]る。", en: "The train is coming. (identifying what comes)" },
        { jp: "誰[だれ]が駅[えき]に行[い]く？", en: "Who is going to the station?" },
      ],
    },
    {
      type: "tip",
      text: "Rule of thumb: {{は}} presents known information ('as for X'); {{が}} points out new or specific information ('it is X that…'). Both sit before the predicate in SOV order. The difference becomes natural with exposure.",
    },
    {
      type: "note",
      text: "Later you will also see {{が}} marking the subject of existence ({{猫がいる}}) and other fixed patterns. For now, master the topic vs identifier contrast.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "How is the topic particle は pronounced?",
      choices: ["ha", "wa", "ba", "pa"],
      answer: 1,
      explanation: "As a particle, は is pronounced wa.",
    },
    {
      kind: "mc",
      prompt: "Which particle means 'also / too'?",
      choices: ["は", "も", "が", "だ"],
      answer: 1,
      explanation: "も includes something in addition to the existing topic.",
    },
    {
      kind: "mc",
      prompt: "To answer 'Who is the student?' by identifying Alice, which is best?",
      promptJp: "誰が学生？",
      choices: ["アリスは学生。", "アリスが学生。", "アリスも学生。", "アリスだ。"],
      answer: 1,
      explanation: "が identifies the unknown 'who', so アリスが学生 is the natural answer.",
    },
    {
      kind: "mc",
      prompt: "In Japanese SOV word order, where does the verb/predicate go?",
      choices: ["First", "After the subject only", "Last", "Between subject and object"],
      answer: 2,
      explanation: "SOV: the verb comes last. Particles mark roles of the words before it.",
    },
    {
      kind: "fill",
      prompt: "Say 'Tom is also a student' (casual). Type the Japanese:",
      answers: ["トムも学生", "トムも学生。", "トムも学生だ", "トムも学生だ。"],
      explanation: "も means 'also'; だ is optional in casual speech.",
    },
    {
      kind: "order",
      prompt: "Build: 'Today the weather is good'",
      tiles: ["今日[きょう]は", "天気[てんき]が", "いい"],
      distractors: ["天気[てんき]も"],
      explanation: "は marks the topic (today), が marks the subject (weather); predicate last.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "誰[だれ]が学生[がくせい]？",
      explanation: "誰が学生？ — Who is the student? Question words take が.",
    },
  ],
  drills: [
    { id: "topic-wa", prompt: "Fill the particle — 'as for today, it's rain'", jp: "今日[きょう]◯雨[あめ]だ", answers: ["は"] },
    { id: "inclusive-mo", prompt: "Fill the particle — 'tomorrow, too, is rain'", jp: "明日[あした]◯雨[あめ]だ", answers: ["も"] },
    { id: "identifier-ga", prompt: "Fill the particle — answering 'who is the student?'", jp: "私[わたし]◯学生[がくせい]だ", answers: ["が"] },
    { id: "question-ga", prompt: "Fill the particle — question words take it", jp: "誰[だれ]◯学生[がくせい]？", answers: ["が"] },
    { id: "contrast-wa", prompt: "Fill the particle — 'as for the cat, it's quiet'", jp: "猫[ねこ]◯静[しず]かだ", answers: ["は"] },
  ],
};
