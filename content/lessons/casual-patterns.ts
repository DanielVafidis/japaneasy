import type { Lesson } from "../types";

export const casualPatterns: Lesson = {
  id: "casual-patterns",
  stage: "essential-grammar",
  order: 16,
  title: "Casual Speech Patterns",
  subtitle: "Plain form · contractions · question の",
  summary:
    "Review plain-form conjugation, common spoken contractions, and the casual question particle の.",
  estMinutes: 16,
  vocabulary: [
    { word: "全然[ぜんぜん]", reading: "ぜんぜん", meaning: "not at all (with negative)" },
    { word: "本当[ほんとう]", reading: "ほんとう", meaning: "really; truth" },
    { word: "違[ちが]う", reading: "ちがう", meaning: "to differ; be wrong" },
    { word: "大丈夫[だいじょうぶ]", reading: "だいじょうぶ", meaning: "OK; all right" },
    { word: "面白[おもしろ]い", reading: "おもしろい", meaning: "interesting" },
    { word: "暇[ひま]", reading: "ひま", meaning: "free time; bored" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Everything in Essential Grammar has a **plain (dictionary) form** counterpart. Friends, family, and peers use plain form; {{です/ます}} is for politeness with strangers, seniors, and customers.",
    },
    {
      type: "table",
      caption: "Polite ↔ plain quick reference",
      headers: ["Polite", "Plain"],
      rows: [
        ["食べます", "食べる"],
        ["食べません", "食べない"],
        ["食べました", "食べた"],
        ["学生です", "学生だ"],
        ["静かです", "静かだ"],
        ["行きますか", "行く？ / 行くの？"],
      ],
    },
    {
      type: "heading",
      text: "Question の (instead of か)",
    },
    {
      type: "prose",
      text: "In casual speech, {{の}} often replaces {{か}} at the end of a question — especially when seeking confirmation or showing surprise. It sounds softer than a blunt {{か}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "今[いま]、暇[ひま]なの？", en: "Are you free now?" },
        { jp: "本当[ほんとう]に行[い]くの？", en: "Are you really going?" },
        { jp: "何[なに]してるの？", en: "What are you doing?" },
      ],
    },
    {
      type: "heading",
      text: "Common contractions",
    },
    {
      type: "rule",
      title: "You'll hear these constantly",
      items: [
        "{{じゃない}} / {{じゃん}} — negative or 'isn't it?': {{面白[おもしろ]いじゃん}}.",
        "{{〜てる}} — short for {{〜ている}}: {{何[なに]してる？}}.",
        "{{〜ちゃう}} — short for {{〜てしまう}} ('end up doing'): {{忘[わす]れちゃった}}.",
        "{{〜なくちゃ}} / {{〜なきゃ}} — 'have to': {{行[い]かなくちゃ}}.",
        "{{〜かも}} — short for {{かもしれない}} ('might'): {{雨[あめ]かも}}.",
      ],
    },
    {
      type: "dialogue",
      title: "Casual exchange",
      lines: [
        { speaker: "A", jp: "明日[あした]、映画[えいが]見[み]に行[い]かない？", en: "Wanna go see a movie tomorrow?" },
        { speaker: "B", jp: "うん、行[い]こう。何[なに]見[み]るの？", en: "Yeah, let's go. What are we watching?" },
        { speaker: "A", jp: "新[あたら]しいやつ。面白[おもしろ]いらしいよ。", en: "The new one. I hear it's good." },
        { speaker: "B", jp: "じゃあ、楽[たの]しみだね。", en: "Then I'm looking forward to it." },
      ],
    },
    {
      type: "heading",
      text: "Gender and tone (light touch)",
    },
    {
      type: "prose",
      text: "Some endings skew feminine or masculine in casual speech — {{わ}} / {{のよ}} (often feminine), {{ぜ}} / {{ぞ}} (often masculine). These are **optional flavour**, not rules. When in doubt, plain form without extra particles is neutral.",
    },
    {
      type: "tip",
      text: "If you can conjugate plain verbs and nouns, you already have the core of casual Japanese. Add contractions gradually as you hear them — don't force {{じゃん}} into every sentence.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Casual question for 「Are you a student?」?",
      choices: ["学生ですか", "学生だの", "学生なの", "学生かの"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "Casual short form of 食べている?",
      choices: ["食べて", "食べてる", "食べた", "食べる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "じゃない can mean…",
      choices: ["only 'is not'", "only 'isn't it?'", "negation or tag question", "past tense"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "Plain negative of 行きます?",
      choices: ["行かない", "行きない", "行くない", "行ってない"],
      answer: 0,
    },
  ],
};
