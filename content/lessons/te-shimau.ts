import type { Lesson } from "../types";

export const teShimau: Lesson = {
  id: "te-shimau",
  stage: "special-expressions",
  order: 2,
  title: "〜てしまう",
  subtitle: "Completion, regret, and 'oops'",
  summary:
    "Attach しまう to the te-form to show something finished completely — often with regret, surprise, or accident.",
  estMinutes: 12,
  vocabulary: [
    { word: "忘[わす]れる", reading: "わすれる", meaning: "to forget" },
    { word: "壊[こわ]れる", reading: "こわれる", meaning: "to break" },
    { word: "全部[ぜんぶ]", reading: "ぜんぶ", meaning: "all; entirely" },
    { word: "もう", reading: "もう", meaning: "already" },
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
      type: "tip",
      text: "Listen for {{ちゃった}} at the end of sentences — it's one of the most common casual exclamations in native speech.",
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
      prompt: "Formation: te-form + …",
      choices: ["いる", "しまう", "おく", "ある"],
      answer: 1,
    },
  ],
};
