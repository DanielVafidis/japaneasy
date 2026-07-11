import type { Lesson } from "../types";

export const reasonsCauses: Lesson = {
  id: "reasons-causes",
  stage: "n3",
  order: 3,
  title: "Reasons & Causes",
  subtitle: "から · ので · ため · おかげで · せいで · によって",
  summary:
    "Explain why things went wrong (or right) on the commute and at work — from casual から to blame-y せいで.",
  estMinutes: 18,
  vocabulary: [
    { word: "遅[おく]れる", reading: "おくれる", meaning: "to be late" },
    { word: "渋滞[じゅうたい]", reading: "じゅうたい", meaning: "traffic jam" },
    { word: "事故[じこ]", reading: "じこ", meaning: "accident" },
    { word: "体調[たいちょう]", reading: "たいちょう", meaning: "physical condition; health" },
    { word: "成功[せいこう]", reading: "せいこう", meaning: "success" },
    { word: "電車[でんしゃ]", reading: "でんしゃ", meaning: "train" },
    { word: "天気[てんき]", reading: "てんき", meaning: "weather" },
    { word: "説明[せつめい]", reading: "せつめい", meaning: "explanation" },
    { word: "助[たす]け", reading: "たすけ", meaning: "help; assistance" },
    { word: "通勤[つうきん]", reading: "つうきん", meaning: "commuting to work" },
    { word: "変[か]える", reading: "かえる", meaning: "to change (something) (ru-verb)" },
    { word: "不足[ぶそく]", reading: "ぶそく", meaning: "shortage; lack" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Japanese has a **stack of reason markers**. They all answer 'why?', but they differ in politeness, formality, and whether the cause feels neutral, grateful, or blame-worthy.",
    },
    {
      type: "heading",
      text: "から vs ので",
    },
    {
      type: "rule",
      title: "から and ので",
      items: [
        "**{{から}}** — speaker's reason; works with plain or polite before it; fine with commands and invitations.",
        "**{{ので}}** — softer, more objective or polite; often preferred in careful speech. Avoid strong commands right after {{ので}} in textbooks (though real speech varies).",
        "Both: {{遅れたから／ので、会議に入れなかった}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "電車[でんしゃ]が遅[おく]れたから、会社[かいしゃ]に遅[おく]れました。", en: "Because the train was late, I was late to work." },
        { jp: "体調[たいちょう]が悪[わる]いので、今日[きょう]は早[はや]く帰[かえ]ります。", en: "I'm not feeling well, so I'll go home early today." },
        { jp: "急[いそ]いでいるから、後[あと]で話[はな]そう。", en: "I'm in a hurry, so let's talk later." },
      ],
    },
    {
      type: "heading",
      text: "ため — purpose or cause",
    },
    {
      type: "prose",
      text: "{{ため（に）}} covers **purpose** ('in order to') and **cause** ('due to'), especially in written or formal speech. Cause reading often pairs with past or nouns: {{事故のため}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "試験[しけん]のため、今夜[こんや]は早[はや]く寝[ね]ます。", en: "Because of the exam / for the exam, I'll sleep early tonight." },
        { jp: "健康[けんこう]のために、歩[ある]いて通勤[つうきん]しています。", en: "I walk to work for my health." },
        { jp: "事故[じこ]のため、電車[でんしゃ]が止[と]まっています。", en: "Trains are stopped due to an accident." },
      ],
    },
    {
      type: "heading",
      text: "おかげで vs せいで",
    },
    {
      type: "rule",
      title: "Good cause vs bad cause",
      items: [
        "**{{おかげで}}** — thanks to (positive outcome). {{君のおかげで成功した}}.",
        "**{{せいで}}** — because of (negative / blame). {{渋滞のせいで遅れた}}.",
        "Neutral facts prefer {{から／ので／ため}} over blaming {{せい}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "先輩[せんぱい]の助[たす]けのおかげで、プロジェクトが成功[せいこう]した。", en: "Thanks to my senior's help, the project succeeded." },
        { jp: "渋滞[じゅうたい]のせいで、会議[かいぎ]に遅[おく]れた。", en: "Because of the traffic jam, I was late to the meeting." },
        { jp: "寝[ね]不足[ぶそく]のせいだと思う。", en: "I think it's because of lack of sleep." },
      ],
    },
    {
      type: "heading",
      text: "によって — depending on / due to / by means of",
    },
    {
      type: "examples",
      items: [
        { jp: "天気[てんき]によって、計画[けいかく]を変[か]えます。", en: "We'll change the plan depending on the weather." },
        { jp: "事故[じこ]によって、道[みち]が閉[し]められた。", en: "The road was closed due to an accident." },
        { jp: "説明[せつめい]の仕方[しかた]によって、印象[いんしょう]が変[か]わる。", en: "Depending on how you explain, the impression changes." },
      ],
    },
    {
      type: "table",
      caption: "Reason toolkit",
      headers: ["Marker", "Feel", "Sample"],
      rows: [
        ["から", "Speaker reason, flexible", "急ぐから先に行く"],
        ["ので", "Softer / objective", "忙しいので失礼します"],
        ["ため", "Formal cause / purpose", "事故のため運休"],
        ["おかげで", "Thanks to (good)", "君のおかげで"],
        ["せいで", "Blame (bad)", "雨のせいで中止"],
        ["によって", "Depending on / by", "場合によって違う"],
      ],
    },
    {
      type: "dialogue",
      title: "Commuting complaints",
      lines: [
        { speaker: "A", jp: "今日[きょう]遅[おそ]かったね。", en: "You were late today, huh." },
        { speaker: "B", jp: "うん、事故[じこ]のせいで電車[でんしゃ]が止[と]まって…。", en: "Yeah, the train stopped because of an accident…" },
        { speaker: "A", jp: "大丈夫[だいじょうぶ]？ 疲[つか]れてるでしょ。", en: "You okay? You must be tired." },
        { speaker: "B", jp: "先輩[せんぱい]が資料[しりょう]をまとめといてくれたおかげで、助[たす]かったよ。", en: "Thanks to my senior prepping the documents, I was saved." },
      ],
    },
    {
      type: "tip",
      text: "In emails: {{〜のため、本日は欠席いたします}}. In chat: {{遅れそう、渋滞で}}. Match register to channel.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Blame for a bad outcome?",
      choices: ["おかげで", "せいで", "ために only purpose", "によって only 'by person'"],
      answer: 1,
      explanation: "せいで marks an undesirable cause.",
    },
    {
      kind: "mc",
      prompt: "「Thanks to my senior」?",
      choices: ["先輩のせいで", "先輩のおかげで", "先輩からだけ", "先輩によって only"],
      answer: 1,
      explanation: "おかげで is grateful / positive.",
    },
    {
      kind: "mc",
      prompt: "Softer, often more polite reason?",
      choices: ["から always softer", "ので", "せいで", "おかげで only"],
      answer: 1,
      explanation: "ので is typically softer/more objective than から.",
    },
    {
      kind: "fill",
      prompt: "Complete — 'due to an accident' (formal noun cause):",
      promptJp: "事故[じこ]◯、電車[でんしゃ]が止[と]まった",
      answers: ["のため", "で", "によって"],
      explanation: "のため / によって / で can mark cause; のため is a textbook formal answer.",
    },
    {
      kind: "order",
      prompt: "Build: 'Because of the traffic jam, I was late'",
      tiles: ["渋滞[じゅうたい]の", "せいで", "遅[おく]れた"],
      distractors: ["おかげで"],
      explanation: "せいで for an undesirable cause.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "体調[たいちょう]が悪[わる]いので早[はや]く帰[かえ]ります",
      explanation: "体調が悪いので早く帰ります — Not feeling well, so I'll go home early.",
    },
  ],
  drills: [
    { id: "kara-reason", prompt: "Fill — speaker reason", jp: "急[いそ]いでいる◯先[さき]に行[い]く", answers: ["から"] },
    { id: "node-soft", prompt: "Fill — softer reason", jp: "忙[いそが]しい◯失礼[しつれい]します", answers: ["ので"] },
    { id: "okagede", prompt: "Positive cause — fill", jp: "助[たす]けの◯成功[せいこう]した", answers: ["おかげで"] },
    { id: "seide", prompt: "Negative cause — fill", jp: "渋滞[じゅうたい]の◯遅[おく]れた", answers: ["せいで"] },
    { id: "niyotte", prompt: "Depending on — fill", jp: "天気[てんき]◯計画[けいかく]を変[か]える", answers: ["によって"] },
  ],
};
