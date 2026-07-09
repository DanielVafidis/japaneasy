import type { Lesson } from "../types";

export const katakana: Lesson = {
  id: "katakana",
  stage: "foundations",
  order: 2,
  title: "Katakana",
  subtitle: "The script for loanwords and emphasis",
  summary:
    "The same sounds as hiragana, a different look — used for foreign words, with a simple long-vowel dash.",
  estMinutes: 18,
  blocks: [
    {
      type: "prose",
      text: "Katakana represents exactly the same set of sounds as hiragana, just with different-looking characters. It is used mainly for words borrowed from other languages, and sometimes for emphasis (like italics).",
    },
    {
      type: "prose",
      text: "Because foreign words are squeezed into Japanese sounds, they can change a lot. It helps to treat each katakana word as its own Japanese word rather than expecting it to sound like the English original.",
    },
    {
      type: "kana",
      script: "kata",
      caption: "The 46 basic katakana",
    },
    {
      type: "tip",
      text: "Watch the look-alikes: シ (shi) vs ツ (tsu), and ン (n) vs ソ (so). The trick is the angle of the small strokes and the direction of the long stroke. These take patience — drill them in the Kana Trainer.",
    },
    {
      type: "heading",
      text: "Long vowels are easy here",
    },
    {
      type: "prose",
      text: "Forget the vowel rules from hiragana. In katakana, **every** long vowel is just a dash: {{ー}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "メール", en: "email — mēru" },
        { jp: "ケーキ", en: "cake — kēki" },
        { jp: "コーヒー", en: "coffee — kōhī" },
      ],
    },
    {
      type: "heading",
      text: "New combinations",
    },
    {
      type: "prose",
      text: "To capture sounds Japanese lacked, katakana adds small vowels: {{ファ}} (fa), {{ティ}} (ti), {{ウィ}} (wi), and {{ヴ}} for /v/ (though most speakers still say /b/).",
    },
    {
      type: "examples",
      title: "Some Japanified words",
      items: [
        { jp: "アメリカ", en: "America" },
        { jp: "サラリーマン", en: "company employee ('salary man')" },
        { jp: "フライドポテト", en: "French fries ('fried potato')" },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Which romaji matches this katakana?",
      promptJp: "カ",
      choices: ["ka", "ke", "ku", "ko"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "How are long vowels written in katakana?",
      choices: [
        "By adding ア/イ/ウ",
        "With a dash ー",
        "By doubling the character",
        "They are not written",
      ],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Read this loanword:",
      promptJp: "ケーキ",
      choices: ["kemiki", "keeki (cake)", "keki", "kéki"],
      answer: 1,
    },
    {
      kind: "fill",
      prompt: "Type the romaji for this katakana:",
      promptJp: "ス",
      answers: ["su"],
    },
    {
      kind: "listen",
      prompt: "Listen — type the loanword you hear:",
      audio: "カメラ",
      explanation: "カメラ — camera.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the loanword you hear:",
      audio: "テレビ",
      explanation: "テレビ — TV (from 'television').",
    },
  ],
};
