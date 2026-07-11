import type { Lesson } from "../types";

export const n1NuanceIntegration: Lesson = {
  id: "n1-nuance-integration",
  stage: "n1",
  order: 5,
  title: "N1 Nuance Integration",
  subtitle: "Multi-clause control · register · reflection",
  summary:
    "Combine advanced patterns into coherent formal Japanese — complaints, career reflection, and register shifts.",
  estMinutes: 20,
  vocabulary: [
    { word: "改善[かいぜん]", reading: "かいぜん", meaning: "improvement" },
    { word: "経緯[けいい]", reading: "けいい", meaning: "sequence of events; background" },
    { word: "転職[てんしょく]", reading: "てんしょく", meaning: "job change" },
    { word: "裁量[さいりょう]", reading: "さいりょう", meaning: "discretion; latitude" },
    { word: "納得[なっとく]", reading: "なっとく", meaning: "acceptance; conviction" },
    { word: "率直[そっちょく]", reading: "そっちょく", meaning: "frank; candid" },
    { word: "状況[じょうきょう]", reading: "じょうきょう", meaning: "situation; circumstances" },
    { word: "責任[せきにん]", reading: "せきにん", meaning: "responsibility" },
    { word: "職場[しょくば]", reading: "しょくば", meaning: "workplace" },
    { word: "品質[ひんしつ]", reading: "ひんしつ", meaning: "quality (of a product)" },
    { word: "存[ぞん]じる", reading: "ぞんじる", meaning: "to know (humble)" },
    { word: "逃[に]げる", reading: "にげる", meaning: "to escape; to run away (ru-verb)" },
    { word: "選[えら]ぶ", reading: "えらぶ", meaning: "to choose (u-verb)" },
  ],
  blocks: [
    {
      type: "prose",
      text: "N1 is less about one new particle and more about **stacking** what you know: concession + reason + keigo + literary color, all while keeping register consistent. This lesson practices integration.",
    },
    {
      type: "heading",
      text: "Register shifting",
    },
    {
      type: "rule",
      title: "Same idea, three registers",
      items: [
        "**Casual:** {{残業多すぎ。もう無理。}}",
        "**Polite spoken:** {{残業が多くて、正直きついです。}}",
        "**Formal written:** {{残業過多につき、業務改善をご検討いただきたく存じます。}}",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "言[い]いたくないわけではないが、今[いま]の状況[じょうきょう]では言[い]いづらい。", en: "It's not that I don't want to say it, but it's hard to say under current circumstances." },
        { jp: "改善[かいぜん]を求[もと]めるとはいえ、感情[かんじょう]的[てき]になってはならない。", en: "Seeking improvement though we may be, we must not become emotional." },
        { jp: "率直[そっちょく]に申[もう]し上[あ]げますと、納得[なっとく]しかねます。", en: "Frankly speaking, I find it hard to accept." },
      ],
    },
    {
      type: "heading",
      text: "Formal complaint — multi-clause",
    },
    {
      type: "prose",
      text: "A careful complaint often runs: **background → problem → impact → request**, with softeners ({{恐れ入りますが}}, {{とはいえ}}, {{ざるを得ない}}).",
    },
    {
      type: "examples",
      items: [
        {
          jp: "先日[せんじつ]ご説明[せつめい]いただいた経緯[けいい]は理解[りかい]しておりますものの、現場[げんば]では依然[いぜん]として混乱[こんらん]が続[つづ]いております。",
          en: "Although I understand the background you explained the other day, confusion continues on the ground.",
        },
        {
          jp: "このままでは品質[ひんしつ]を保[たも]てない以上[いじょう]、手順[てじゅん]を見直[みなお]さざるを得ません。",
          en: "As long as we cannot maintain quality like this, we have no choice but to rework the procedure.",
        },
        {
          jp: "恐[おそ]れ入[い]りますが、来週[らいしゅう]までに改善[かいぜん]案[あん]をご提示[ていじ]いただけますでしょうか。",
          en: "Sorry to trouble you, but could you present an improvement plan by next week?",
        },
      ],
    },
    {
      type: "heading",
      text: "Career reflection",
    },
    {
      type: "examples",
      items: [
        {
          jp: "若[わか]いころは失敗[しっぱい]を恐[おそ]れぬものだが、今[いま]はリスクを見[み]極[きわ]めた上[うえ]で動[うご]くようになった。",
          en: "When young one doesn't fear failure, but now I act only after gauging risk.",
        },
        {
          jp: "裁量[さいりょう]がある職場[しょくば]に移[うつ]るべく、転職[てんしょく]を本気[ほんき]で考[かんが]え始[はじ]めた。",
          en: "In order to move to a workplace with more discretion, I started seriously considering a job change.",
        },
        {
          jp: "残[のこ]るべきか、去[さ]るべきか。どちらを選[えら]んだとしても、責任[せきにん]から逃[に]げるわけにはいかない。",
          en: "Should I stay or leave? Whichever I choose, I can't run from responsibility.",
        },
      ],
    },
    {
      type: "heading",
      text: "Integration checklist",
    },
    {
      type: "rule",
      title: "Before you send the sentence",
      items: [
        "One main claim — extras are support (reason, concession, request).",
        "Match keigo level across the whole message.",
        "Prefer {{ものの／にもかかわらず／とはいえ}} over emotional {{のに}} with superiors.",
        "Use {{わけではない}} / {{わけにはいかない}} to manage implication and duty.",
        "Literary color ({{ぬ}}, {{べく}}) sparingly — essays and mottos, not every chat.",
      ],
    },
    {
      type: "dialogue",
      title: "Career talk (careful polite)",
      lines: [
        { speaker: "A", jp: "最近[さいきん]、仕事[しごと]どう？", en: "How's work lately?" },
        { speaker: "B", jp: "悪[わる]いわけじゃないんだけど、成長[せいちょう]を感[かん]じにくくて。", en: "It's not that it's bad — I just rarely feel growth." },
        { speaker: "A", jp: "転職[てんしょく]も視野[しや]に入[い]れてるの？", en: "Are you considering a job change too?" },
        { speaker: "B", jp: "仮[かり]に移[うつ]るとしても、今[いま]のチームに迷惑[めいわく]をかけずに済[す]むよう準備[じゅんび]してからにしたい。", en: "Even if I move, I want to prepare so I don't burden the current team." },
      ],
    },
    {
      type: "tip",
      text: "Practice rewriting one complaint three ways (chat / polite mail / formal letter). The grammar is the same toolbox; **register** is the N1 skill.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Soften 'I don't accept this' for formal speech?",
      choices: ["納得できない！", "納得しかねます", "納得するべからず", "納得したわけだ only"],
      answer: 1,
      explanation: "〜かねます is soft formal inability.",
    },
    {
      kind: "mc",
      prompt: "Written concession before stating a problem?",
      choices: ["〜のに、", "〜ものの、", "〜からだけ、", "〜そうだ、"],
      answer: 1,
      explanation: "ものの fits formal written concession.",
    },
    {
      kind: "mc",
      prompt: "「It's not that the job is bad」?",
      choices: ["悪いわけだ", "悪いわけではない", "悪いに違いない", "悪いべからず"],
      answer: 1,
      explanation: "わけではない denies the strong implication.",
    },
    {
      kind: "fill",
      prompt: "Complete — 'have no choice but to rework':",
      promptJp: "見直[みなお]さざるを◯",
      answers: ["得ない", "えない"],
      explanation: "ざるを得ない = have no choice but to.",
    },
    {
      kind: "order",
      prompt: "Build: 'Whichever I choose, I can't run from responsibility'",
      tiles: ["どちらを選[えら]んだとしても", "責任[せきにん]から", "逃[に]げるわけにはいかない"],
      distractors: ["逃[に]げるはずだ"],
      explanation: "たとしても + わけにはいかない stack concession and duty.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "改善[かいぜん]をご検討[けんとう]いただきたく存[ぞん]じます",
      explanation: "Formal request for consideration of improvements.",
    },
    {
      kind: "mc",
      prompt: "Best register for a complaint to a client?",
      choices: [
        "Heavy のに + casual じゃん",
        "ものの / 恐れ入りますが + いただけますでしょうか",
        "べからず on every line",
        "Only だ・である with no softener",
      ],
      answer: 1,
      explanation: "Formal concession + humble request is client-safe.",
    },
  ],
  drills: [
    { id: "wake-dewanai-int", prompt: "Deny implication — fill", jp: "悪[わる]いわけ◯、合[あ]わないだけだ", answers: ["ではない", "じゃない"] },
    { id: "monono-int", prompt: "Written concession — fill", jp: "理解[りかい]してる◯問題[もんだい]は残[のこ]る", answers: ["ものの"] },
    { id: "zaru-enai-int", prompt: "No choice — complete", jp: "変[か]えざるを◯", answers: ["得[え]ない", "得ない", "えない"] },
    { id: "toshitemo-int", prompt: "Even if choose — fill", jp: "選[えら]んだ◯責任[せきにん]はある", answers: ["としても"] },
    { id: "go-kentou-int", prompt: "Formal request — complete", jp: "ご検討[けんとう]いただけますと◯です", answers: ["幸[さいわ]い", "幸い"] },
  ],
};
