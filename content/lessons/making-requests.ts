import type { Lesson } from "../types";

export const makingRequests: Lesson = {
  id: "making-requests",
  stage: "essential-grammar",
  order: 14,
  title: "Making Requests",
  subtitle: "ください · なさい · command form",
  summary:
    "Ask politely with te-form + ください, give firm instructions with なさい, and learn the plain command form.",
  estMinutes: 16,
  vocabulary: [
    { word: "ください", reading: "ください", meaning: "please (give me / do for me)" },
    { word: "書[か]く", reading: "かく", meaning: "to write" },
    { word: "漢字[かんじ]", reading: "かんじ", meaning: "kanji" },
    { word: "消[け]しゴム", reading: "けしゴム", meaning: "eraser" },
    { word: "貸[か]す", reading: "かす", meaning: "to lend" },
    { word: "座[すわ]る", reading: "すわる", meaning: "to sit" },
  ],
  blocks: [
    {
      type: "heading",
      text: "Te-form + ください",
    },
    {
      type: "prose",
      text: "{{ください}} is the standard polite request. Attach it to the **te-form** for actions, or use {{をください}} for 'please give me (this thing)'.",
    },
    {
      type: "examples",
      items: [
        { jp: "漢字[かんじ]で書[か]いてください。", en: "Please write it in kanji." },
        { jp: "ゆっくり話[はな]してください。", en: "Please speak slowly." },
        { jp: "それをください。", en: "Please give me that." },
      ],
    },
    {
      type: "rule",
      title: "Negative requests",
      items: [
        "{{ないでください}} — 'please don't': {{落書[らくが]きを書[か]かないでください}}.",
        "Casual: drop {{ください}} → {{日本語[にほんご]で話[はな]して}}.",
        "Rough casual: {{〜てくれ}} — 'do it for me'.",
      ],
    },
    {
      type: "heading",
      text: "なさい — firm polite command",
    },
    {
      type: "prose",
      text: "{{なさい}} attaches to the **stem** (not te-form): {{聞[き]きなさい}} ('Listen!'), {{座[すわ]りなさい}}. Used by teachers, parents — firm but not as blunt as the command form. Casual short form: {{聞[き]きな}}.",
    },
    {
      type: "heading",
      text: "Command form (plain orders)",
    },
    {
      type: "rule",
      title: "Conjugation",
      items: [
        "**Ru-verbs:** replace {{る}} with {{ろ}}: {{食[た]べる}} → {{食[た]べろ}}.",
        "**U-verbs:** change final vowel to /e/: {{死[し]ぬ}} → {{死[し]ね}}.",
        "**Exceptions:** {{する}} → {{しろ}}, {{来[く]る}} → {{来[こ]い}}.",
        "**Irregular:** {{くれる}} → {{くれ}} (already a request form).",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "早[はや]く来[こ]い！", en: "Come quickly!" },
        { jp: "ここに座[すわ]れ。", en: "Sit here. (command)" },
      ],
    },
    {
      type: "note",
      text: "Command forms are blunt — use only with close friends, never with strangers or superiors. {{ください}} is your default.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Polite request: 'please write'?",
      choices: ["書いて", "書いてください", "書きなさい", "書け"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Please don't come here」?",
      choices: ["来ないください", "来ないでください", "来なくてください", "来ないで"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Firm (teacher-style) 'listen!'?",
      choices: ["聞いてください", "聞きなさい", "聞け", "聞いてくれ"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Command form of する?",
      choices: ["すれ", "しろ", "して", "される"],
      answer: 1,
    },
  ],
};
