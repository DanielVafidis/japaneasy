import type { Lesson } from "../types";

export const similarityHearsay: Lesson = {
  id: "similarity-hearsay",
  stage: "n3",
  order: 4,
  title: "Similarity & Hearsay",
  subtitle: "よう · みたい · そう · らしい",
  summary:
    "Soft-pedal opinions and workplace gossip — 'seems', 'looks like', and 'I heard' — with clear rules for what evidence you have.",
  estMinutes: 20,
  vocabulary: [
    { word: "部長[ぶちょう]", reading: "ぶちょう", meaning: "department manager" },
    { word: "不満[ふまん]", reading: "ふまん", meaning: "dissatisfaction; complaint" },
    { word: "噂[うわさ]", reading: "うわさ", meaning: "rumour; gossip" },
    { word: "残業[ざんぎょう]", reading: "ざんぎょう", meaning: "overtime" },
    { word: "転勤[てんきん]", reading: "てんきん", meaning: "job transfer; relocation" },
    { word: "機嫌[きげん]", reading: "きげん", meaning: "mood; temper" },
    { word: "案件[あんけん]", reading: "あんけん", meaning: "matter; case; project" },
    { word: "忙[いそが]しい", reading: "いそがしい", meaning: "busy" },
  ],
  blocks: [
    {
      type: "prose",
      text: "When you share an **opinion** or pass on office talk, Japanese cares **what evidence you have**: direct observation, appearance, a report from someone, or general rumour. These four endings all feel like 'seems' in English — but they are not interchangeable.",
    },
    {
      type: "rule",
      title: "ようだ / みたい — seem (your judgement)",
      items: [
        "**{{ようだ}}** — careful inference from evidence: {{部長は不満のようだ}}.",
        "**{{みたい}}** — casual twin: {{部長、不満みたい}}.",
        "Attach to plain form. **Noun-like:** {{子供みたい}} — like a child; {{子供みたいな返事}}.",
        "**{{ような}}** / **{{みたいな}}** before nouns: {{残業のような毎日}}.",
      ],
    },
    {
      type: "rule",
      title: "そう — looks like vs I heard",
      items: [
        "**Appearance:** stem + {{そう}} — {{忙しそう}} (looks busy). **Never** {{忙しいそう}}.",
        "**Negative appearance:** stem + {{なさそう}} — {{機嫌がよさそうもない}} / {{良くなさそう}}.",
        "**Hearsay:** plain + {{そうだ}} — {{転勤するそうだ}} (I heard they're transferring).",
        "Same surface, different attachment — appearance uses **stem**, hearsay uses **plain form**.",
      ],
    },
    {
      type: "rule",
      title: "らしい — apparently / typical of",
      items: [
        "Plain + {{らしい}} — report from others OR 'typical of': {{彼らしい}} — 'That's so like him.'",
        "{{噂らしい}} / {{転勤するらしい}} — 'apparently there's a transfer.'",
        "{{春らしい}} — 'so spring-like' (typical of the season).",
      ],
    },
    {
      type: "heading",
      text: "Same situation, different evidence",
    },
    {
      type: "table",
      caption: "「The boss seems busy」",
      headers: ["Pattern", "Sentence", "Nuance"],
      rows: [
        ["stem+そう", "忙しそう", "looks busy (visual)"],
        ["みたい", "忙しいみたい", "casual guess"],
        ["ようだ", "忙しいようだ", "careful inference"],
        ["らしい", "忙しいらしい", "someone said / typical for him"],
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "部長[ぶちょう]、今日[きょう]は機[き]嫌[げん]が悪[わる]そうだ。", en: "The section chief looks like they're in a bad mood today." },
        { jp: "あの案件[あんけん]、難[むずか]しいみたい。", en: "That project seems difficult." },
        { jp: "来月[らいげつ]、田中[たなか]さんが転勤[てんきん]するそうだ。", en: "I heard Tanaka-san is transferring next month." },
        { jp: "残業[ざんぎょう]が増[ふ]えるらしい。", en: "Apparently overtime is going to increase." },
        { jp: "彼[かれ]の不満[ふまん]は、正[ただ]しいようだ。", en: "His complaint seems justified." },
      ],
    },
    {
      type: "dialogue",
      title: "Office rumour",
      lines: [
        { speaker: "A", jp: "聞[き]いた？来週[らいしゅう]からフレックス制[せい]だそうだよ。", en: "Did you hear? Apparently flex time starts next week." },
        { speaker: "B", jp: "本当[ほんとう]？噂[うわさ]らしいけど、まだ決[き]まってないみたい。", en: "Really? It sounds like a rumour, but it seems nothing's decided yet." },
        { speaker: "A", jp: "そうか。部長[ぶちょう]も知[し]らないようだね。", en: "Huh. The boss doesn't seem to know either." },
      ],
    },
    {
      type: "tip",
      text: "For 'looks tasty / looks busy', always stem + そう: {{おいしそう}} · {{忙しそう}} ✓. {{おいしいそう}} · {{忙しいそう}} ✗.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Looks busy」 — correct form?",
      choices: ["忙しいそう", "忙しそう", "忙しいみたい", "忙しいらしい"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Hearsay: 「I heard overtime will increase」?",
      choices: ["残業そう", "残業のよう", "残業が増えるそうだ", "残業みたい"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "Casual inference equivalent of ようだ?",
      choices: ["みたい", "らしい", "べき", "すぎる"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "「Doesn't look happy」 (appearance)?",
      choices: ["嬉しそう", "嬉しなさそう", "嬉しくないそう", "嬉しいらしい"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Apparently he's transferring」 — report from others?",
      choices: ["転勤みたい", "転勤するらしい", "転勤そう", "転勤のよう"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Hearsay vs appearance for 忙しい — which is hearsay?",
      choices: ["忙しそう", "忙しいそうだ", "忙しいみたい", "忙しいよう"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'Apparently the meeting was cancelled' (hearsay)",
      tiles: ["会議[かいぎ]は", "中止[ちゅうし]に", "なったらしい"],
      distractors: ["なりらしい"],
      explanation: "らしい attaches to the plain form: なったらしい.",
    },
  ],
  drills: [
    { id: "sou", prompt: "Visual 'looks…' — busy", jp: "忙[いそが]しい", answers: ["忙[いそが]しそう", "忙[いそが]しそうだ"] },
    { id: "mitai", prompt: "Casual judgement — 'seems dissatisfied'", jp: "不満[ふまん]", answers: ["不満[ふまん]みたい", "不満[ふまん]みたいだ"] },
    { id: "youda", prompt: "Careful judgement — 'appears to be overtime'", jp: "残業[ざんぎょう]", answers: ["残業[ざんぎょう]のようだ", "残業[ざんぎょう]のよう"] },
    { id: "rashii", prompt: "Hearsay — 'apparently transferring'", jp: "転勤[てんきん]する", answers: ["転勤[てんきん]するらしい"] },
  ],
};
