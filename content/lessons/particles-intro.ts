import type { Lesson } from "../types";

export const particlesIntro: Lesson = {
  id: "particles-intro",
  stage: "basic-grammar",
  order: 1,
  title: "Introduction to Particles",
  subtitle: "The topic は, the inclusive も, and the identifier が",
  summary:
    "Particles assign grammatical roles to words. Meet the three most important ones.",
  estMinutes: 16,
  vocabulary: [
    { word: "学生", reading: "がくせい", meaning: "student" },
    { word: "明日", reading: "あした", meaning: "tomorrow" },
    { word: "今日", reading: "きょう", meaning: "today" },
    { word: "試験", reading: "しけん", meaning: "exam" },
    { word: "誰", reading: "だれ", meaning: "who" },
  ],
  blocks: [
    {
      type: "prose",
      text: "**Particles** are one or more hiragana attached to the end of a word to define its grammatical role in the sentence. They are crucial — change the particle and you can completely change the meaning.",
    },
    {
      type: "heading",
      text: "The topic particle 「は」",
    },
    {
      type: "prose",
      text: "The topic particle marks what you are talking about. It is the character {{は}} but, as a particle, it is pronounced **wa**. It essentially says 'as for...'.",
    },
    {
      type: "dialogue",
      lines: [
        { speaker: "Bob", jp: "アリスは学生[がくせい]？", en: "As for Alice, (is she a) student?" },
        { speaker: "Alice", jp: "うん、学生[がくせい]。", en: "Yeah, (I) am." },
      ],
    },
    {
      type: "prose",
      text: "Once the topic is set, you don't repeat it. Without a topic, a sentence like {{明日[あした]？}} ('tomorrow?') is valid but vague — は tells the listener what the sentence is about.",
    },
    {
      type: "heading",
      text: "The inclusive particle 「も」",
    },
    {
      type: "prose",
      text: "Replace は with {{も}} to mean **'also'** or 'too'. It includes something in addition to the existing topic.",
    },
    {
      type: "dialogue",
      lines: [
        { speaker: "Bob", jp: "アリスは学生[がくせい]。", en: "Alice is a student." },
        { speaker: "Bob", jp: "トムも学生[がくせい]。", en: "Tom is also a student." },
      ],
    },
    {
      type: "heading",
      text: "The identifier particle 「が」",
    },
    {
      type: "prose",
      text: "Use {{が}} when you need to **identify** something unknown — typically to answer or ask a 'who/what' question. Compare: は assumes we know the topic; が picks it out from the unknown.",
    },
    {
      type: "dialogue",
      lines: [
        { speaker: "A", jp: "誰[だれ]が学生[がくせい]？", en: "Who is the student?" },
        { speaker: "B", jp: "アリスが学生[がくせい]。", en: "Alice is the (one who is) student." },
      ],
    },
    {
      type: "tip",
      text: "Rule of thumb: は presents known information ('as for X'); が points out new or specific information ('it is X that...'). The difference becomes natural with exposure.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "How is the topic particle は pronounced?",
      choices: ["ha", "wa", "ba", "pa"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Which particle means 'also / too'?",
      choices: ["は", "も", "が", "だ"],
      answer: 1,
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
      kind: "fill",
      prompt: "Say 'Tom is also a student' (casual). Type the Japanese:",
      answers: ["トムも学生", "トムも学生。"],
    },
    {
      kind: "order",
      prompt: "Build: 'Today the weather is good'",
      tiles: ["今日[きょう]は", "天気[てんき]が", "いい"],
      distractors: ["天気[てんき]も"],
      explanation: "は marks the topic (today), が marks the subject (weather).",
    },
  ],
};
