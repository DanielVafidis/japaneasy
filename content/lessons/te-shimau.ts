import type { Lesson } from "../types";

export const teShimau: Lesson = {
  id: "te-shimau",
  stage: "special-expressions",
  order: 2,
  title: "〜てしまう",
  subtitle: "Completion, regret, and 'oops'",
  summary:
    "Attach しまう to the te-form to show something finished completely — often with regret, surprise, or accident.",
  estMinutes: 16,
  vocabulary: [
    { word: "忘[わす]れる", reading: "わすれる", meaning: "to forget" },
    { word: "壊[こわ]れる", reading: "こわれる", meaning: "to break" },
    { word: "全部[ぜんぶ]", reading: "ぜんぶ", meaning: "all; entirely" },
    { word: "もう", reading: "もう", meaning: "already" },
    { word: "死[し]ぬ", reading: "しぬ", meaning: "to die" },
    { word: "疲[つか]れる", reading: "つかれる", meaning: "to get tired" },
  ],
  blocks: [
    {
      type: "prose",
      text: "{{〜てしまう}} (casual {{〜ちゃう}} / {{〜じゃう}}) does two jobs: it marks **completion** ('I finished eating it all') and **regret or unintended outcome** ('I accidentally ate it all / oh no, I ate it all').",
    },
    {
      type: "rule",
      title: "Formation",
      items: [
        "Te-form + {{しまう}} → conjugates like a u-verb: {{食べてしまった}}, {{食べてしまいます}}.",
        "Casual contractions: {{食べちゃった}}, {{食べちゃう}}, {{食べじゃう}} (after {{で}}).",
      ],
    },
    {
      type: "rule",
      title: "Nuances",
      items: [
        "**Completion:** {{宿題[しゅくだい]を全部[ぜんぶ]やってしまった}} — done entirely.",
        "**Regret:** {{ケーキを食[た]べてしまった}} — ate it (and maybe shouldn't have).",
        "**Accident:** {{コップを割[わ]ってしまった}} — broke the cup (oops).",
        "**Resignation:** {{そうなってしまった}} — it ended up that way (can't undo).",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "もう映画[えいが]を見[み]てしまった。", en: "I already finished watching the movie." },
        { jp: "鍵[かぎ]を忘[わす]れちゃった。", en: "I forgot the key (darn it)." },
        { jp: "食[た]べすぎてしまった。", en: "I ended up eating too much." },
      ],
    },
    {
      type: "table",
      caption: "Casual contractions",
      headers: ["Full", "Casual", "Example"],
      rows: [
        ["〜てしまう", "〜ちゃう", "食べちゃう"],
        ["〜でしまう", "〜じゃう", "食べじゃう"],
        ["〜てしまった", "〜ちゃった", "忘れちゃった"],
        ["〜てしまわない", "〜ちゃわない", "死んじゃわないよ"],
      ],
    },
    {
      type: "heading",
      text: "Plain past vs てしまう",
    },
    {
      type: "prose",
      text: "Plain {{食[た]べた}} states a fact. {{食[た]べてしまった}} adds **totality or regret** — you finished it all, or you wish you hadn't. {{死[し]んでしまった}} sounds more dramatic than {{死[し]んだ}}; {{死[し]んじゃった}} is the everyday exclamation.",
    },
    {
      type: "dialogue",
      title: "Completion vs oops",
      lines: [
        { speaker: "A", jp: "宿題[しゅくだい]、もうやった？", en: "Did you do your homework already?" },
        { speaker: "B", jp: "うん、やっちゃった。", en: "Yeah, (already) got it done." },
        { speaker: "A", jp: "ケーキ、なくなってる…", en: "The cake's gone…" },
        { speaker: "B", jp: "ごめん、食[た]べちゃった。", en: "Sorry, I (oops) ate it." },
      ],
    },
    {
      type: "tip",
      text: "Listen for {{ちゃった}} at the end of sentences — it's one of the most common casual exclamations in native speech.",
    },
    {
      type: "note",
      text: "{{てしまう}} chains with other grammar: {{食[た]べすぎてしまった}} (ate too much — and it's done), {{疲[つか]れてしまった}} (ended up exhausted).",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Casual contraction of 食べてしまった?",
      choices: ["食べちゃった", "食べたら", "食べさせた", "食べられる"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "てしまう often adds which nuance?",
      choices: ["Future tense", "Completion or regret", "Honorific", "Passive"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「I accidentally broke it」 — best helper?",
      choices: ["〜てみる", "〜てしまう", "〜てあげる", "〜てくる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Casual form after 〜で (食べでしまう)?",
      choices: ["食べちゃう", "食べじゃう", "食べてしまう", "食べた"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "やっちゃった in homework context often means…",
      choices: ["failed homework", "already finished it", "forgot homework", "refused homework"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'I (regrettably) left my umbrella on the train'",
      tiles: ["電車[でんしゃ]の中[なか]に", "傘[かさ]を", "忘[わす]れてしまった"],
      distractors: ["忘[わす]れておいた"],
      explanation: "てしまう marks the unintended slip; ておく would mean you left it on purpose.",
    },
  ],
};
