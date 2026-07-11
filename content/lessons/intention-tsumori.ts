import type { Lesson } from "../types";

export const intentionTsumori: Lesson = {
  id: "intention-tsumori",
  stage: "n4",
  order: 7,
  title: "Intention — つもり & ようと思う",
  subtitle: "Plans you mean to carry out",
  summary:
    "Talk about future plans with つもり and volitional + と思う — what you intend to do, not just what might happen.",
  estMinutes: 16,
  vocabulary: [
    { word: "つもり", reading: "つもり", meaning: "intention; plan" },
    { word: "思[おも]う", reading: "おもう", meaning: "to think" },
    { word: "会社[かいしゃ]", reading: "かいしゃ", meaning: "company; office" },
    { word: "週末[しゅうまつ]", reading: "しゅうまつ", meaning: "weekend" },
    { word: "友達[ともだち]", reading: "ともだち", meaning: "friend" },
    { word: "会[あ]う", reading: "あう", meaning: "to meet" },
    { word: "電車[でんしゃ]", reading: "でんしゃ", meaning: "train" },
    { word: "休[やす]む", reading: "やすむ", meaning: "to rest; to take a day off" },
    { word: "飲[の]む", reading: "のむ", meaning: "to drink" },
    { word: "残業[ざんぎょう]", reading: "ざんぎょう", meaning: "overtime" },
  ],
  blocks: [
    {
      type: "prose",
      text: "When you **intend** to do something — not just desire it — Japanese often uses {{つもり}} or the volitional form + {{と思う}}. These are about **plans in your head**, not invitations ({{ましょう}}) or raw wants ({{たい}}).",
    },
    {
      type: "heading",
      text: "つもり — firm intention",
    },
    {
      type: "rule",
      title: "Formation",
      items: [
        "Dictionary form + {{つもりだ／です}}: {{行くつもりです}} — 'I plan to go.'",
        "Negative intention: dictionary negative + {{つもり}}: {{行かないつもりです}}.",
        "Past plan that was the idea: {{行くつもりだった}} — 'I had planned to go (but…).'",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "明日[あした]は電車[でんしゃ]で会社[かいしゃ]に行[い]くつもりです。", en: "I plan to go to the office by train tomorrow." },
        { jp: "週末[しゅうまつ]は家[いえ]で休[やす]むつもりだ。", en: "I intend to rest at home this weekend." },
        { jp: "今夜[こんや]は飲[の]まないつもりです。", en: "I don't plan to drink tonight." },
        { jp: "早[はや]く帰[かえ]るつもりだったけど、残業[ざんぎょう]になった。", en: "I had planned to go home early, but overtime came up." },
      ],
    },
    {
      type: "heading",
      text: "ようと思う — thinking of doing",
    },
    {
      type: "prose",
      text: "Volitional form + {{と思う}} is softer: 'I'm thinking I'll…' / 'I think I'll…' It can sound like a decision forming right now, or a plan you haven't locked in as tightly as {{つもり}}.",
    },
    {
      type: "rule",
      title: "Volitional + と思う",
      items: [
        "**Ru-verbs:** {{る}} → {{よう}}. {{食べる}} → {{食べようと思う}}.",
        "**U-verbs:** final /u/ → /o/ + {{う}}. {{行く}} → {{行こうと思う}}, {{会う}} → {{会おうと思う}}.",
        "**Exceptions:** {{する}} → {{しようと思う}}, {{来る}} → {{来ようと思う}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "週末[しゅうまつ]に友達[ともだち]に会[あ]おうと思[おも]っています。", en: "I'm thinking of meeting a friend on the weekend." },
        { jp: "来月[らいげつ]から早[はや]く起[お]きようと思[おも]う。", en: "I think I'll start getting up early from next month." },
        { jp: "今日[きょう]は歩[ある]いて帰[かえ]ろうと思[おも]います。", en: "I think I'll walk home today." },
      ],
    },
    {
      type: "table",
      caption: "つもり vs ようと思う",
      headers: ["Pattern", "Feel", "Example"],
      rows: [
        ["〜つもりだ", "Decided plan / intention", "行くつもりです"],
        ["〜ようと思う", "Considering / deciding", "行こうと思う"],
        ["〜たい", "Want to (desire)", "行きたい"],
        ["〜ましょう", "Let's… (invite)", "行きましょう"],
      ],
    },
    {
      type: "dialogue",
      title: "Weekend plans",
      lines: [
        { speaker: "A", jp: "週末[しゅうまつ]、何[なに]をするつもり？", en: "What do you plan to do this weekend?" },
        { speaker: "B", jp: "土曜[どよう]は友達[ともだち]に会[あ]おうと思[おも]ってる。日曜[にちよう]は家[いえ]で休[やす]むつもり。", en: "Saturday I'm thinking of meeting a friend. Sunday I plan to rest at home." },
        { speaker: "A", jp: "いいね。私[わたし]は早[はや]く寝[ね]るつもりだよ。", en: "Nice. I plan to go to bed early." },
      ],
    },
    {
      type: "note",
      text: "{{つもり}} after a past form can mean 'I was under the impression that…': {{送[おく]ったつもりです}} — 'I thought I (had) sent it.' Context separates plan from mistaken belief.",
    },
    {
      type: "tip",
      text: "Polite speech often keeps {{つもりです}} or {{〜ようと思っています}}. Casual: {{行くつもり}}, {{行こうと思ってる}}.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「I plan to go」 — natural?",
      choices: ["行くつもりです", "行きたいつもりです", "行きましょうつもり", "行ったつもりです (only meaning)"],
      answer: 0,
      explanation: "Dictionary form + つもりです for a future plan.",
    },
    {
      kind: "mc",
      prompt: "Volitional of 会う for 会おうと思う?",
      choices: ["会よう", "会おう", "会ろう", "会しよう"],
      answer: 1,
      explanation: "う-verbs: う → おう → 会おう.",
    },
    {
      kind: "mc",
      prompt: "Softer 'I'm thinking I'll rest'?",
      choices: ["休むつもりだ (always softer)", "休もうと思う", "休みたい only", "休みます only"],
      answer: 1,
      explanation: "ようと思う is often softer / more provisional than つもり.",
    },
    {
      kind: "fill",
      prompt: "Complete — 'I don't plan to drink':",
      promptJp: "飲[の]まない◯です",
      answers: ["つもり"],
      explanation: "Negative dictionary form + つもり.",
    },
    {
      kind: "order",
      prompt: "Build: 'I plan to go to the office by train'",
      tiles: ["電車[でんしゃ]で", "会社[かいしゃ]に", "行[い]く", "つもりです"],
      distractors: ["行[い]こう"],
      explanation: "つもり takes dictionary form, not volitional.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "週末[しゅうまつ]は休[やす]むつもりです",
      explanation: "週末は休むつもりです — I plan to rest on the weekend.",
    },
  ],
  drills: [
    { id: "tsumori-iku", prompt: "Intention — 'plan to go'", jp: "行[い]く◯です", answers: ["つもり"] },
    { id: "tsumori-negative", prompt: "Negative intention — 'don't plan to drink'", jp: "飲[の]まない◯だ", answers: ["つもり"] },
    { id: "volitional-iku", prompt: "Volitional for ようと思う — 'go'", jp: "行[い]く → ◯と思[おも]う", answers: ["行[い]こう", "行こう"] },
    { id: "volitional-au", prompt: "Volitional — 'meet'", jp: "会[あ]う → ◯と思[おも]う", answers: ["会[あ]おう", "会おう"] },
    { id: "you-to-omou", prompt: "Complete — 'thinking of resting'", jp: "休[やす]もう◯", answers: ["と思[おも]う", "と思う", "と思[おも]っています", "と思っています"] },
  ],
};
