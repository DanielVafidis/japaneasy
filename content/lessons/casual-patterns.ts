import type { Lesson } from "../types";

export const casualPatterns: Lesson = {
  id: "casual-patterns",
  stage: "n4",
  order: 12,
  title: "Casual Speech Patterns",
  subtitle: "Plain form · contractions · enders",
  summary:
    "Talk like friends on the commute — plain form, spoken contractions, and everyday sentence enders for plans and complaints.",
  estMinutes: 18,
  vocabulary: [
    { word: "全然[ぜんぜん]", reading: "ぜんぜん", meaning: "not at all (with negative)" },
    { word: "本当[ほんとう]", reading: "ほんとう", meaning: "really; truth" },
    { word: "電車[でんしゃ]", reading: "でんしゃ", meaning: "train" },
    { word: "駅[えき]", reading: "えき", meaning: "station" },
    { word: "暇[ひま]", reading: "ひま", meaning: "free time" },
    { word: "会議[かいぎ]", reading: "かいぎ", meaning: "meeting" },
    { word: "間[ま]に合[あ]う", reading: "まにあう", meaning: "to make it on time" },
    { word: "疲[つか]れる", reading: "つかれる", meaning: "to get tired" },
  ],
  blocks: [
    {
      type: "prose",
      text: "With friends and peers, drop {{です／ます}} and use **plain form**. Add spoken shortcuts ({{てる}}, {{ちゃう}}, {{なきゃ}}) and soft question {{の}} — perfect for delay chats and weekend plans.",
    },
    {
      type: "table",
      caption: "Polite ↔ plain",
      headers: ["Polite", "Plain"],
      rows: [
        ["食べます", "食べる"],
        ["食べません", "食べない"],
        ["食べました", "食べた"],
        ["学生です", "学生だ"],
        ["行きますか", "行く？ / 行くの？"],
      ],
    },
    {
      type: "heading",
      text: "Question の",
    },
    {
      type: "examples",
      items: [
        { jp: "今[いま]、暇[ひま]なの？", en: "Are you free now?" },
        { jp: "本当[ほんとう]に間[ま]に合[あ]うの？", en: "Will you really make it on time?" },
        { jp: "何[なに]してるの？", en: "What are you doing?" },
      ],
    },
    {
      type: "heading",
      text: "Contractions you'll hear",
    },
    {
      type: "rule",
      title: "Everyday shortenings",
      items: [
        "{{〜てる}} ← {{〜ている}}: {{待ってる}}.",
        "{{〜ちゃう}} ← {{〜てしまう}}: {{忘れちゃった}}.",
        "{{〜なくちゃ／なきゃ}} ← must: {{行かなきゃ}}.",
        "{{じゃん}} — tag 'right?': {{遅いじゃん}}.",
        "{{〜かも}} ← {{かもしれない}}: {{雨かも}}.",
        "{{んだ／んだよ}} ← explanatory {{のだ}}.",
      ],
    },
    {
      type: "dialogue",
      title: "Casual delay chat",
      lines: [
        { speaker: "A", jp: "まだ駅[えき]？遅[おく]れてるじゃん。", en: "Still at the station? You're late, huh." },
        { speaker: "B", jp: "電車[でんしゃ]止[と]まっちゃった。五分[ごふん]待[ま]ってて。", en: "The train stopped. Wait five minutes." },
        { speaker: "A", jp: "わかった。間[ま]に合[あ]う？", en: "Got it. Gonna make it?" },
        { speaker: "B", jp: "たぶん。疲[つか]れた〜。なんか飲[の]みたい。", en: "Probably. I'm wiped. Kinda want a drink." },
      ],
    },
    {
      type: "heading",
      text: "Sentence enders (light)",
    },
    {
      type: "rule",
      title: "Flavour particles",
      items: [
        "**{{ね}}** — seeking agreement: {{今日寒いね}}.",
        "**{{よ}}** — asserting new info: {{もう出たよ}}.",
        "**{{な}}** — rougher {{ね}}: {{疲れたな}}.",
        "**{{さ}}** — filler / soft emphasis: {{それでさ…}}.",
        "**{{かな}}** — I wonder: {{間に合うかな}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "今日[きょう]の会議[かいぎ]、長[なが]かったね。", en: "Today's meeting was long, huh." },
        { jp: "もう帰[かえ]るよ。", en: "I'm heading home already." },
        { jp: "間[ま]に合[あ]うかな…。", en: "I wonder if we'll make it…" },
      ],
    },
    {
      type: "note",
      text: "Rough slang ({{ってば}}, {{やがる}}) exists — recognise more than produce. When unsure, plain form without extra particles is fine.",
    },
    {
      type: "tip",
      text: "Don't force {{じゃん}} into every line. Hear it on the train, then add it when it feels natural.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Casual 「Are you a student?」?",
      choices: ["学生ですか", "学生だの", "学生なの", "学生かの"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "Short form of 食べている?",
      choices: ["食べて", "食べてる", "食べた", "食べる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Plain negative of 行きます?",
      choices: ["行かない", "行きない", "行くない", "行ってない"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "忘れちゃった comes from…",
      choices: ["忘れてしまった", "忘れてある", "忘れている", "忘れなくても"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "「I wonder if we'll make it」 casual?",
      choices: ["間に合いますか", "間に合うかな", "間に合うなさい", "間に合うかしら (only)"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'Hey, is it okay to eat this?' (casual)",
      tiles: ["ねえ、", "これ", "食[た]べていいの？"],
      distractors: ["食[た]べていいか"],
      explanation: "の softens casual questions.",
    },
  ],
  drills: [
    { id: "plain", prompt: "Make casual — 'don't understand at all'", jp: "全然[ぜんぜん]分[わ]かりません", answers: ["全然[ぜんぜん]分[わ]からない"] },
    { id: "wakannai", prompt: "Contract spoken — 'don't get it'", jp: "分[わ]からない", answers: ["分[わ]かんない", "わかんない"] },
    { id: "chatta", prompt: "Contract — 'ended up eating'", jp: "食[た]べてしまった", answers: ["食[た]べちゃった"] },
    { id: "nda", prompt: "Contract — explanatory の", jp: "行[い]くのだ", answers: ["行[い]くんだ"] },
    { id: "teru", prompt: "Contract — progressive", jp: "待[ま]っている", answers: ["待[ま]ってる"] },
    { id: "nakya", prompt: "Contract — gotta go", jp: "行[い]かなければならない", answers: ["行[い]かなきゃ", "行[い]かなくちゃ", "行[い]かないと"] },
  ],
};
