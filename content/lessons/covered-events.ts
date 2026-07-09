import type { Lesson } from "../types";

export const coveredEvents: Lesson = {
  id: "covered-events",
  stage: "advanced-topics",
  order: 7,
  title: "Coverage & Timing",
  subtitle: "上で · うちに · 最中 · 際 · にわたって",
  summary:
    "Formal patterns for 'upon doing', 'while you still can', 'throughout', and 'in the middle of'.",
  estMinutes: 18,
  vocabulary: [
    { word: "確認[かくにん]", reading: "かくにん", meaning: "confirmation" },
    { word: "最中[さいちゅう]", reading: "さいちゅう", meaning: "midst; height of" },
    { word: "際[さい]", reading: "さい", meaning: "occasion; when (formal)" },
    { word: "期間[きかん]", reading: "きかん", meaning: "period; duration" },
    { word: "次第[しだい]", reading: "しだい", meaning: "as soon as; depending on" },
    { word: "若[わか]い", reading: "わかい", meaning: "young" },
  ],
  blocks: [
    {
      type: "heading",
      text: "Upon / after: 〜上で",
    },
    {
      type: "prose",
      text: "Ta-form + {{上[うえ]で}} — **after doing X (as a prerequisite)**, then Y: {{確認[かくにん]した上[うえ]で}}、送[おく]ります — 'I'll send it after confirming.' Formal and deliberate.",
    },
    {
      type: "heading",
      text: "While still: 〜うちに",
    },
    {
      type: "prose",
      text: "Plain form + {{うちに}} — **before the situation changes**, do something: {{若[わか]いうちに}}、たくさん旅行[りょこう]した — 'Travelled a lot while I was still young.' Implies a window that won't last.",
    },
    {
      type: "examples",
      items: [
        { jp: "明[あ]るいうちに帰[かえ]ろう。", en: "Let's head home while it's still light." },
        { jp: "忘[わす]れないうちに、メモしておく。", en: "Jot it down before I forget." },
      ],
    },
    {
      type: "heading",
      text: "In the midst of: 〜最中に",
    },
    {
      type: "rule",
      title: "Formation",
      items: [
        "Dictionary / ta-form + {{最中[さいちゅう]に}} — right in the middle of an action.",
        "{{会議[かいぎ]の最中[さいちゅう]に}}電[でん]話[わ] — a call during the meeting.",
        "{{食[た]べている最中[さいちゅう]}} — while eating (emphasis on mid-action).",
      ],
    },
    {
      type: "heading",
      text: "Formal 'when': 〜際に · 〜にあたって",
    },
    {
      type: "prose",
      text: "{{際[さい]に}} and {{にあたって}} appear in notices and speeches: {{ご不明[ふめい]な点[てん]がございました際[さい]には}} — 'When you have questions…' {{開会[かいかい]にあたって}} — 'On the occasion of opening the conference.'",
    },
    {
      type: "heading",
      text: "Spanning: 〜にわたって",
    },
    {
      type: "prose",
      text: "{{にわたって}} — **throughout / across** a range: {{三[さん]日[か]間[かん]にわたって}}雨[あめ] — rain for three days straight. {{全国[ぜんこく]にわたる}} — nationwide.",
    },
    {
      type: "heading",
      text: "As soon as: 〜次第",
    },
    {
      type: "prose",
      text: "Stem + {{次第[しだい]}} — **as soon as** (formal): {{準備[じゅんび]ができ次第[しだい]}}、連絡[れんらく]します — 'I'll contact you as soon as ready.' Also {{次第[しだい]で}} — 'depending on'.",
    },
    {
      type: "examples",
      items: [
        { jp: "詳[くわ]しく調[しら]べた上[うえ]で、報告[ほうこく]します。", en: "I'll report after investigating in detail." },
        { jp: "会議[かいぎ]中[ちゅう]、最中[さいちゅう]に停電[ていでん]した。", en: "The power went out right in the middle of the meeting." },
        { jp: "着[つ]き次第[しだい]、お電話[でんわ]します。", en: "I'll call as soon as I arrive." },
      ],
    },
    {
      type: "tip",
      text: "These patterns cluster in **business Japanese**, announcements, and essays. In casual chat, simpler forms ({{…たら}}, {{…てる間}}) usually suffice.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Before I forget」 — natural?",
      choices: ["忘れるうちに", "忘れないうちに", "忘れた上で", "忘れ最中に"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Formal: send after confirming?",
      choices: ["確認してから", "確認した上で", "確認したうちに", "確認した次第"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Right in the middle of eating?",
      choices: ["食べている間", "食べている最中に", "食べた上で", "食べるうちに"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "準備ができ___、連絡します — as soon as ready?",
      choices: ["うちに", "次第", "際に", "にわたって"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'Let's head home before it gets dark'",
      tiles: ["暗[くら]くならない", "うちに", "帰[かえ]ろう"],
      distractors: ["うちで"],
      explanation: "ないうちに = before (while the state hasn't changed yet).",
    },
  ],
  drills: [
    { id: "uede", prompt: "Fill — 'upon (after) confirming…'", jp: "確認[かくにん]した◯◯で", answers: ["上[うえ]"] },
    { id: "uchini", prompt: "Fill — 'while it's still light'", jp: "明[あか]るい◯◯に", answers: ["うち"] },
    { id: "saichuu", prompt: "Fill — 'in the very middle of eating'", jp: "食[た]べている◯◯◯◯", answers: ["最中[さいちゅう]"] },
    { id: "sai", prompt: "Fill — formal 'on the occasion of getting off'", jp: "お降[お]りの◯◯", answers: ["際[さい]"] },
    { id: "shidai", prompt: "Fill — 'as soon as it's confirmed'", jp: "確認[かくにん]◯◯◯", answers: ["次第[しだい]"] },
  ],
};
