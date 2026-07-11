import type { Lesson } from "../types";

export const teHoshii: Lesson = {
  id: "te-hoshii",
  stage: "n4",
  order: 15,
  title: "Want Someone To…",
  subtitle: "〜てほしい",
  summary:
    "Ask for favours the natural way — want Mom to cook, want a coworker to call back, don't want them to leave yet — with てほしい.",
  estMinutes: 16,
  vocabulary: [
    { word: "欲[ほ]しい", reading: "ほしい", meaning: "want (a thing); want someone to (てほしい)" },
    { word: "手伝[てつだ]う", reading: "てつだう", meaning: "to help" },
    { word: "掃除[そうじ]する", reading: "そうじする", meaning: "to clean" },
    { word: "静[しず]かにする", reading: "しずかにする", meaning: "to be quiet; to quiet down" },
    { word: "早[はや]く", reading: "はやく", meaning: "quickly; soon" },
    { word: "宿題[しゅくだい]", reading: "しゅくだい", meaning: "homework" },
    { word: "皿洗[さらあら]い", reading: "さらあらい", meaning: "washing dishes" },
    { word: "連絡[れんらく]する", reading: "れんらくする", meaning: "to contact; to get in touch" },
    { word: "説明[せつめい]する", reading: "せつめいする", meaning: "to explain" },
    { word: "帰[かえ]る", reading: "かえる", meaning: "to go home; to return" },
  ],
  blocks: [
    {
      type: "prose",
      text: "You already know {{たい}} (want **to do** yourself) and {{が欲しい}} (want a **thing**). {{てほしい}} is for wanting **someone else** to do something — a favour directed at a person.",
    },
    {
      type: "heading",
      text: "Te-form + ほしい",
    },
    {
      type: "rule",
      title: "Want someone to act",
      items: [
        "Te-form + {{ほしい}}: {{手伝ってほしい}} — want (you) to help.",
        "Mark **who** you want with {{に}}: {{母に作ってほしい}} — want Mom to cook.",
        "Same pattern for other people: {{弟に部屋を掃除してほしい}}.",
      ],
    },
    {
      type: "examples",
      title: "Everyday favours",
      items: [
        { jp: "ちょっと手伝[てつだ]ってほしい。", en: "I want you to help me a little." },
        { jp: "父[ちち]に車[くるま]を洗[あら]ってほしい。", en: "I want Dad to wash the car." },
        { jp: "もう少[すこ]し静[しず]かにしてほしい。", en: "I want you to be a bit quieter." },
      ],
    },
    {
      type: "heading",
      text: "たい · が欲しい · てほしい",
    },
    {
      type: "table",
      caption: "Three kinds of 'want'",
      headers: ["Pattern", "Want", "Example"],
      rows: [
        ["verb + たい", "want to do (self)", "食べたい — I want to eat"],
        ["noun + が欲しい", "want a thing", "傘が欲しい — want an umbrella"],
        ["te-form + ほしい", "want someone to do", "教えてほしい — want you to tell me"],
      ],
    },
    {
      type: "note",
      text: "✗ {{食べてほしい}} when **you** want to eat — use {{食べたい}}. ✓ {{作ってほしい}} when you want **someone else** to cook.",
    },
    {
      type: "heading",
      text: "てほしい vs てください",
    },
    {
      type: "prose",
      text: "{{てください}} is a **direct request** ('please do'). {{てほしい}} states a **wish** — softer, often about what you'd like from someone close: {{早く帰ってほしい}} (I want you home soon). With strangers, {{てください}} is safer.",
    },
    {
      type: "examples",
      items: [
        { jp: "ここに座[すわ]ってください。", en: "Please sit here. (direct request)" },
        { jp: "もっと早[はや]く来[き]てほしい。", en: "I want you to come sooner. (wish)" },
        { jp: "後[あと]で連絡[れんらく]してほしい。", en: "I want you to contact me later." },
      ],
    },
    {
      type: "heading",
      text: "てほしくない",
    },
    {
      type: "rule",
      title: "Don't want them to",
      items: [
        "Te-form + {{ほしくない}} — don't want someone to do it.",
        "Polite: {{ほしくないです}} · {{ほしくありません}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "まだ帰[かえ]ってほしくない。", en: "I don't want you to go home yet." },
        { jp: "子供[こども]に甘[あま]いものを食[た]べさせてほしくない。", en: "I don't want my kid eating sweets." },
      ],
    },
    {
      type: "dialogue",
      title: "Asking at home",
      lines: [
        { speaker: "子", jp: "宿題[しゅくだい]、手伝[てつだ]ってほしい。", en: "I want you to help with homework." },
        { speaker: "母", jp: "いいよ。でも、皿洗[さらあら]いは自分[じぶん]でしてほしい。", en: "OK. But I want you to do the dishes yourself." },
        { speaker: "子", jp: "説明[せつめい]してほしいだけ。", en: "I just want you to explain." },
        { speaker: "母", jp: "わかった。騒[さわ]がないでほしいね。", en: "Got it. And I want you not to make a racket." },
      ],
    },
    {
      type: "tip",
      text: "Talking about what **someone else** wants **you** to do: {{母は私に部屋を片付けてほしいと言った}}. The {{に}} marks who should act.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「I want you to help」?",
      choices: ["手伝いたい", "手伝ってほしい", "手伝いが欲しい", "手伝いましょう"],
      answer: 1,
      explanation: "てほしい = want someone else to do.",
    },
    {
      kind: "mc",
      prompt: "「I want to eat」 (yourself) — trap!",
      choices: ["食べてほしい", "食べたい", "食べが欲しい", "食べてください"],
      answer: 1,
      explanation: "たい for your own desire; てほしい is for someone else.",
    },
    {
      kind: "mc",
      prompt: "「Want Dad to cook」?",
      choices: ["父が作りたい", "父に作ってほしい", "父が作ってほしい", "父を作ってほしい"],
      answer: 1,
      explanation: "に marks who you want to act: 父に作ってほしい.",
    },
    {
      kind: "mc",
      prompt: "てほしい vs てください — which is a softer wish?",
      choices: ["てください", "てほしい", "both identical", " neither is polite"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Don't want you to go home yet」?",
      choices: ["まだ帰ってほしい", "まだ帰ってほしくない", "まだ帰りたくない", "まだ帰ってください"],
      answer: 1,
      explanation: "ほしくない negates the wish for their action.",
    },
    {
      kind: "mc",
      prompt: "「Want an umbrella」 (thing)?",
      choices: ["傘をてほしい", "傘が欲しい", "傘てほしい", "傘をほしい"],
      answer: 1,
      explanation: "が欲しい for things; てほしい needs a verb te-form.",
    },
    {
      kind: "order",
      prompt: "Build: 'I want you to contact me later'",
      tiles: ["後[あと]で", "連絡[れんらく]して", "ほしい"],
      distractors: ["連絡[れんらく]したい", "ください"],
      explanation: "てほしい follows te-form; したい would mean you want to contact.",
    },
  ],
  drills: [
    { id: "te-hoshii", prompt: "Want someone to — 'want you to help'", jp: "手伝[てつだ]う", answers: ["手伝[てつだ]ってほしい"] },
    { id: "ni-person", prompt: "With person — 'want Dad to cook'", jp: "父[ちち]が作[つく]る", answers: ["父[ちち]に作[つく]ってほしい"] },
    { id: "te-hoshikunai", prompt: "Don't want — 'don't want you to go home yet'", jp: "帰[かえ]る", answers: ["帰[かえ]ってほしくない", "まだ帰[かえ]ってほしくない"] },
    { id: "vs-tai", prompt: "Your own desire — 'want to eat' (not てほしい)", jp: "食[た]べる", answers: ["食[た]べたい"] },
    { id: "renraku", prompt: "Want someone to — 'want you to contact me'", jp: "連絡[れんらく]する", answers: ["連絡[れんらく]してほしい"] },
    { id: "shizuka", prompt: "Want someone to — 'want you to be quiet'", jp: "静[しず]かにする", answers: ["静[しず]かにしてほしい"] },
  ],
};
