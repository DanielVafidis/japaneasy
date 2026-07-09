import type { Lesson } from "../types";

export const makingRequests: Lesson = {
  id: "making-requests",
  stage: "essential-grammar",
  order: 16,
  title: "Making Requests",
  subtitle: "ください · ちょうだい · なさい · command form",
  summary:
    "Ask politely with te-form + ください, casually with ちょうだい, give firm instructions with なさい, and learn the plain command form.",
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
        { jp: "ここに名前[なまえ]を書[か]いてください。", en: "Please write your name here." },
        { jp: "もう少[すこ]し大[おお]きい声[こえ]で話[はな]してください。", en: "Please speak a little louder." },
        { jp: "それをください。", en: "Please give me that." },
      ],
    },
    {
      type: "rule",
      title: "Negative requests",
      items: [
        "{{ないでください}} — 'please don't': {{ここに荷物[にもつ]を置[お]かないでください}}.",
        "Casual: drop {{ください}} → {{もう一度[いちど]言[い]って}}.",
        "Rough casual: {{〜てくれ}} — 'do it for me'.",
      ],
    },
    {
      type: "heading",
      text: "ちょうだい — casual please",
    },
    {
      type: "prose",
      text: "{{ちょうだい}} slots in exactly where {{ください}} goes, but casually: {{それ、ちょうだい}} 'gimme that', te-form + {{ちょうだい}} for actions. It comes from humble {{頂戴[ちょうだい]}} 'receiving' — historically feminine/childlike in tone, but widely used among friends and family.",
    },
    {
      type: "examples",
      items: [
        { jp: "ちょっと待[ま]ってちょうだい。", en: "Wait a sec, please. (casual)" },
        { jp: "その写真[しゃしん]、一枚[いちまい]ちょうだい。", en: "Give me one of those photos, will you?" },
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
    {
      kind: "mc",
      prompt: "待ってちょうだい is best described as…",
      choices: [
        "a casual, friendly 'please wait'",
        "a rude command",
        "formal business Japanese",
        "a question",
      ],
      answer: 0,
      explanation: "ちょうだい is the casual stand-in for ください, common among friends and family.",
    },
    {
      kind: "order",
      prompt: "Build: 'Please wait here a moment'",
      tiles: ["ここで", "少[すこ]し", "待[ま]ってください"],
      distractors: ["待[ま]ちください"],
      explanation: "ください follows the te-form: 待って + ください.",
    },
  ],
  drills: [
    { id: "kudasai", prompt: "Request it — 'please write'", jp: "書[か]く", answers: ["書[か]いてください"] },
    { id: "negative-request", prompt: "Negative request — 'please don't write'", jp: "書[か]く", answers: ["書[か]かないでください"] },
    { id: "choudai", prompt: "Type the casual stand-in for ください", jp: "？", answers: ["ちょうだい"] },
    { id: "nasai", prompt: "Soft command — parent to child: 'sit'", jp: "座[すわ]る", answers: ["座[すわ]りなさい"] },
    { id: "command", prompt: "Blunt command form — 'sit!'", jp: "座[すわ]る", answers: ["座[すわ]れ"] },
  ],
};
