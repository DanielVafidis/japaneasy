import type { Lesson } from "../types";

export const timeSpecificActions: Lesson = {
  id: "time-specific-actions",
  stage: "n3",
  order: 9,
  title: "Time-Specific Actions",
  subtitle: "ながら · たばかり · とたん",
  summary:
    "Pin actions to a moment at work and in daily life: while doing, just did, and the instant something happened.",
  estMinutes: 16,
  vocabulary: [
    { word: "着[つ]く", reading: "つく", meaning: "to arrive" },
    { word: "起[お]きる", reading: "おきる", meaning: "to wake up; get up" },
    { word: "会議[かいぎ]", reading: "かいぎ", meaning: "meeting" },
    { word: "音楽[おんがく]", reading: "おんがく", meaning: "music" },
    { word: "聴[き]く", reading: "きく", meaning: "to listen (attentively)" },
    { word: "開[あ]ける", reading: "あける", meaning: "to open (something)" },
    { word: "残念[ざんねん]", reading: "ざんねん", meaning: "unfortunate; a shame" },
    { word: "レポート", reading: "レポート", meaning: "report; paper" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Three patterns pin an action to a precise moment — useful for **delay complaints**, multitasking at work, and 'the second I…' stories: **{{〜ながら}}**, **{{〜たばかり}}**, and **{{〜たとたん}}**.",
    },
    {
      type: "heading",
      text: "〜ながら — while doing",
    },
    {
      type: "rule",
      items: [
        "**Verb stem + {{ながら}}**: {{聴く}} → {{聴きながら}} 'while listening'.",
        "The **main** action comes last; ながら marks the background one.",
        "Only the final verb carries tense: {{飲みながら書いた}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "音楽[おんがく]を聴[き]きながら、レポートを書[か]く。", en: "I write the report while listening to music." },
        { jp: "歩[ある]きながら電話[でんわ]するのは危[あぶ]ない。", en: "Talking on the phone while walking is dangerous." },
        { jp: "残念[ざんねん]ながら、今回[こんかい]は参加[さんか]できません。", en: "Unfortunately, I can't take part this time." },
      ],
    },
    {
      type: "note",
      text: "{{ながら}} on nouns/na-adjectives (no {{だ}}): {{残念ながら}}. Add {{も}} for 'even while': {{忙しいながらも}}.",
    },
    {
      type: "heading",
      text: "〜たばかり — just did",
    },
    {
      type: "rule",
      items: [
        "**Past tense + {{ばかり}}** — hot off the press: {{着いたばかり}} 'just arrived'.",
        "Behaves like a noun: {{食べたばかりだ}}, {{来たばかりなので…}}.",
        "Casual: {{ばっか}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "会社[かいしゃ]に着[つ]いたばかりなのに、もう会議[かいぎ]だ。", en: "I just arrived at the office, and there's already a meeting." },
        { jp: "さっき起[お]きたばかりで、まだ眠[ねむ]い。", en: "I just woke up, so I'm still sleepy." },
        { jp: "入社[にゅうしゃ]したばかりの頃[ころ]は、毎日[まいにち]緊張[きんちょう]した。", en: "When I'd only just joined the company, I was nervous every day." },
      ],
    },
    {
      type: "note",
      text: "{{〜てばかり}} means 'doing **nothing but**' — {{寝てばかりいる}}. That ばかり is in the amounts lesson; here **past + ばかり** = 'just did'.",
    },
    {
      type: "heading",
      text: "〜たとたん（に） — the instant that",
    },
    {
      type: "prose",
      text: "**Past + {{とたん}}({{に}})** — the second thing happened *the very instant* the first did. The catch: the second event must be **outside your control** — a reaction, not a plan.",
    },
    {
      type: "examples",
      items: [
        { jp: "ドアを開[あ]けたとたん、上司[じょうし]に呼[よ]ばれた。", en: "The instant I opened the door, I was called by my boss." },
        { jp: "座[すわ]ったとたんに、眠[ねむ]ってしまった。", en: "The moment I sat down, I fell asleep." },
        { jp: "メールを送[おく]ったとたん、誤字[ごじ]に気[き]づいた。", en: "The instant I sent the email, I noticed a typo." },
      ],
    },
    {
      type: "dialogue",
      title: "Just arrived — already late",
      lines: [
        { speaker: "A", jp: "今[いま]着[つ]いたばかりなんだけど…。", en: "I literally just arrived, but…" },
        { speaker: "B", jp: "会議[かいぎ]、もう始[はじ]まってるよ。", en: "The meeting's already started." },
        { speaker: "A", jp: "入[はい]ったとたんに部長[ぶちょう]に見[み]られた…。", en: "The instant I walked in, the manager saw me…" },
      ],
    },
    {
      type: "tip",
      text: "Because とたん reports involuntary outcomes, don't follow it with a deliberate plan — use {{〜たらすぐ}} for 'I'll do Y as soon as X'.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「I just arrived」?",
      choices: ["着いたばかりだ", "着いてばかりだ", "着くばかりだ", "着ばかりだ"],
      answer: 0,
      explanation: "Past + ばかり = just did. 着いてばかり would mean 'does nothing but arrive'.",
    },
    {
      kind: "mc",
      prompt: "Which sentence uses とたん naturally?",
      choices: [
        "窓を開けたとたん、冷たい風が入ってきた",
        "窓を開けたとたん、勉強を始めた",
        "窓を開けるとたん、風が入った",
        "窓を開けたとたん、開けようとした",
      ],
      answer: 0,
      explanation: "とたん takes past tense, and the result must be involuntary.",
    },
    {
      kind: "fill",
      prompt: "「Looking at your phone while walking is dangerous」 — fill the gap",
      promptJp: "歩き（　）スマホを見るのは危ない。",
      answers: ["ながら"],
      explanation: "Verb stem + ながら = while doing.",
    },
    {
      kind: "mc",
      prompt: "残念ながら means…",
      choices: ["Unfortunately…", "While it's fun…", "Just finished…", "The instant it happened…"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Main action with ながら comes…",
      choices: ["first", "last", "in the middle", "nowhere"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'I write while listening to music'",
      tiles: ["音楽[おんがく]を", "聴[き]きながら", "書[か]く"],
      distractors: ["聴[き]いてから"],
      explanation: "Stem + ながら marks the background action; the main verb comes last.",
    },
  ],
  drills: [
    { id: "tabakari", prompt: "Say 'just arrived'", jp: "着[つ]く", answers: ["着[つ]いたばかり"] },
    { id: "totan", prompt: "Fill — 'the instant (I) opened…'", jp: "開[あ]けた◯◯◯、…", answers: ["とたん", "とたんに"] },
    { id: "nagara", prompt: "Say 'while writing'", jp: "書[か]く", answers: ["書[か]きながら"] },
    { id: "zannen", prompt: "Fill — 'unfortunately…'", jp: "残念[ざんねん]◯◯◯、…", answers: ["ながら"] },
  ],
};
