import type { Lesson } from "../types";

export const teFormUses: Lesson = {
  id: "te-form-uses",
  stage: "n4",
  order: 0,
  title: "More Te-form Uses",
  subtitle: "〜ている · habits · てから",
  summary:
    "Use ている for ongoing actions, resulting states, and habits — then sequence events with てから. (てある / ておく come next in Te-form Aspect.)",
  estMinutes: 18,
  vocabulary: [
    { word: "電車[でんしゃ]", reading: "でんしゃ", meaning: "train" },
    { word: "遅[おく]れる", reading: "おくれる", meaning: "to be late; to delay" },
    { word: "待[ま]つ", reading: "まつ", meaning: "to wait" },
    { word: "会議[かいぎ]", reading: "かいぎ", meaning: "meeting" },
    { word: "毎朝[まいあさ]", reading: "まいあさ", meaning: "every morning" },
    { word: "知[し]る", reading: "しる", meaning: "to know (become aware of)" },
    { word: "結婚[けっこん]する", reading: "けっこんする", meaning: "to marry" },
    { word: "駅[えき]", reading: "えき", meaning: "station" },
    { word: "資料[しりょう]", reading: "しりょう", meaning: "documents; materials" },
    { word: "会社[かいしゃ]", reading: "かいしゃ", meaning: "company; office" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Te-form + {{いる}} is more than English '-ing'. It covers **actions in progress**, **states that continue**, and **habits** you keep doing. On a commute or at school, you'll hear it constantly.",
    },
    {
      type: "rule",
      title: "Formation",
      items: [
        "Te-form + {{いる}}: {{待って}} + {{いる}} → {{待っている}}.",
        "Casual often drops {{い}}: {{待ってる}}, {{読んでる}}.",
        "Polite: {{待っています}} · past {{待っていました}} · negative {{待っていません}}.",
      ],
    },
    {
      type: "heading",
      text: "Ongoing action",
    },
    {
      type: "examples",
      items: [
        { jp: "今[いま]、駅[えき]で電車[でんしゃ]を待[ま]っています。", en: "I'm waiting for the train at the station right now." },
        { jp: "雨[あめ]が降[ふ]っているから、遅[おく]れそうだ。", en: "It's raining, so I might be late." },
        { jp: "会議[かいぎ]中[ちゅう]に電話[でんわ]が鳴[な]っている。", en: "A phone is ringing during the meeting." },
      ],
    },
    {
      type: "heading",
      text: "Resulting states (not progressive)",
    },
    {
      type: "prose",
      text: "Some verbs use {{ている}} for a **state after an action**. {{知る}} is 'come to know'; the continuing state is {{知っている}}. {{結婚している}} means 'is married', not 'is getting married right now'. Motion verbs often mean 'went and is still there': {{会社に行っている}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "この路線[ろせん]を知[し]っていますか。", en: "Do you know this train line?" },
        { jp: "先輩[せんぱい]はもう結婚[けっこん]している。", en: "My senior is already married." },
        { jp: "田中[たなか]さんは今日[きょう]、出張[しゅっちょう]に行[い]っている。", en: "Tanaka is away on a business trip today." },
      ],
    },
    {
      type: "heading",
      text: "Habits and frequency",
    },
    {
      type: "prose",
      text: "With time words like {{毎朝}}, {{いつも}}, {{よく}}, {{ている}} describes **what you regularly do** — not just what is happening this second.",
    },
    {
      type: "examples",
      items: [
        { jp: "毎朝[まいあさ]、七時[しちじ]の電車[でんしゃ]に乗[の]っている。", en: "I (habitually) take the 7 o'clock train every morning." },
        { jp: "週末[しゅうまつ]はよく家[いえ]で本[ほん]を読[よ]んでいる。", en: "On weekends I often read at home." },
        { jp: "最近[さいきん]、運動[うんどう]していない。", en: "Lately I haven't been exercising." },
      ],
    },
    {
      type: "dialogue",
      title: "Delayed commute",
      lines: [
        { speaker: "A", jp: "まだ駅[えき]？何[なに]してるの？", en: "Still at the station? What are you doing?" },
        { speaker: "B", jp: "電車[でんしゃ]が遅[おく]れてて、ホームで待[ま]ってる。", en: "The train's delayed — waiting on the platform." },
        { speaker: "A", jp: "毎日[まいにち]遅[おく]れてるよね、この線[せん]。", en: "This line's late every day, huh." },
        { speaker: "B", jp: "知[し]ってる。朝[あさ]ごはん、もう食[た]べた？", en: "I know. Did you already eat breakfast?" },
      ],
    },
    {
      type: "heading",
      text: "てから — after doing",
    },
    {
      type: "rule",
      title: "Sequence with てから",
      items: [
        "Te-form + {{から}} = **after** doing A, (then) B.",
        "{{家を出てから、駅まで歩いた}} — 'After leaving home, I walked to the station.'",
        "Stronger 'after' feel than bare te-form chaining.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "朝[あさ]ごはんを食[た]べてから、会社[かいしゃ]に行[い]きます。", en: "I'll go to the office after eating breakfast." },
        { jp: "資料[しりょう]を読[よ]んでから、会議[かいぎ]に入[はい]った。", en: "I joined the meeting after reading the materials." },
      ],
    },
    {
      type: "tip",
      text: "{{知らない}} is the usual negative of {{知っている}} — not {{知っていない}} (which can sound like 'I don't know it yet / still haven't found out'). For {{ておく}} (do in advance) and {{てある}} (result left in place), continue to **Te-form Aspect** at N3.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「I'm waiting for the train」 — natural?",
      choices: ["電車を待ついる", "電車を待っている", "電車を待ったいる", "電車を待ちている"],
      answer: 1,
      explanation: "Te-form of 待つ is 待って + いる.",
    },
    {
      kind: "mc",
      prompt: "「I know this station」 — state?",
      choices: ["知る", "知っている", "知った", "知らない (only)"],
      answer: 1,
      explanation: "知っている is the continuing 'know' state.",
    },
    {
      kind: "mc",
      prompt: "Habitual: 'I take that train every morning'?",
      choices: ["毎朝乗った", "毎朝乗っている", "毎朝乗るいる", "毎朝乗ってある"],
      answer: 1,
      explanation: "Frequency + ている = habit.",
    },
    {
      kind: "mc",
      prompt: "「After eating, go to work」?",
      choices: ["食べてから行く", "食べるから行く", "食べたから行く (only sense)", "食べてある行く"],
      answer: 0,
      explanation: "てから = after doing.",
    },
    {
      kind: "fill",
      prompt: "Complete — after reading the materials:",
      promptJp: "資料[しりょう]を読[よ]んで◯、会議[かいぎ]に入[はい]った",
      answers: ["から"],
      explanation: "てから = after doing.",
    },
    {
      kind: "order",
      prompt: "Build: 'After leaving home, I walked to the station'",
      tiles: ["家[いえ]を", "出[で]てから", "駅[えき]まで", "歩[ある]いた"],
      distractors: ["出[で]たら"],
      explanation: "てから sequences 'after A, B'.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "毎朝[まいあさ]電車[でんしゃ]に乗[の]っている",
      explanation: "毎朝電車に乗っている — I take the train every morning (habit).",
    },
  ],
  drills: [
    { id: "progressive", prompt: "Make it progressive — 'is waiting'", jp: "待[ま]つ", answers: ["待[ま]っている", "待ってる"] },
    { id: "shitteiru", prompt: "Say 'I know' — enduring state", jp: "知[し]る", answers: ["知[し]っている"] },
    { id: "habit-noru", prompt: "Habit — 'take (the train) every morning'", jp: "毎朝[まいあさ]乗[の]る → ◯", answers: ["乗[の]っている", "乗ってる"] },
    { id: "te-kara", prompt: "After doing — 'after eating…'", jp: "食[た]べる → ◯…", answers: ["食[た]べてから"] },
    { id: "te-kara-yomu", prompt: "After doing — 'after reading…'", jp: "読[よ]む → ◯…", answers: ["読[よ]んでから"] },
    { id: "progressive-oku", prompt: "Make progressive — 'is delayed'", jp: "遅[おく]れる", answers: ["遅[おく]れている", "遅れてる"] },
  ],
};
