import type { Lesson } from "../types";

export const pastTense: Lesson = {
  id: "past-tense",
  stage: "basic-grammar",
  order: 5,
  title: "Past Tense of Verbs",
  subtitle: "The た-form and its negative",
  summary:
    "Ru-verbs are trivial; u-verbs split by ending; plus the famous 行く exception.",
  estMinutes: 16,
  vocabulary: [
    { word: "食べる", reading: "たべる", meaning: "to eat" },
    { word: "聞く", reading: "きく", meaning: "to listen; to ask" },
    { word: "泳ぐ", reading: "およぐ", meaning: "to swim" },
    { word: "話す", reading: "はなす", meaning: "to speak" },
    { word: "飲む", reading: "のむ", meaning: "to drink" },
    { word: "待つ", reading: "まつ", meaning: "to wait" },
    { word: "行く", reading: "いく", meaning: "to go (exception)" },
  ],
  blocks: [
    {
      type: "rule",
      title: "Ru-verbs",
      items: ["Drop {{る}}, add {{た}}.", "{{食べる}} → {{食べた}} (ate)"],
    },
    {
      type: "heading",
      text: "U-verbs (group by ending)",
    },
    {
      type: "prose",
      text: "U-verb past tense depends on the final character. These same groupings will return for the te-form later, so they're worth learning well.",
    },
    {
      type: "table",
      caption: "U-verb past tense",
      headers: ["Ending", "Becomes", "Example"],
      rows: [
        ["く", "いた", "聞く → 聞いた"],
        ["ぐ", "いだ", "泳ぐ → 泳いだ"],
        ["す", "した", "話す → 話した"],
        ["む・ぬ・ぶ", "んだ", "飲む → 飲んだ"],
        ["つ・る・う", "った", "待つ → 待った"],
      ],
    },
    {
      type: "rule",
      title: "Exceptions",
      items: [
        "{{する}} → {{した}}",
        "{{来る}} → {{来た}} (きた)",
        "**{{行く}} → {{行った}}** — even though it ends in く, it takes った, not いた.",
      ],
    },
    {
      type: "heading",
      text: "Negative past",
    },
    {
      type: "prose",
      text: "Recall that negative verbs end in {{ない}} and act like i-adjectives. So for the negative past, just apply the i-adjective past rule: {{ない}} → {{なかった}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "食[た]べた。", en: "Ate." },
        { jp: "聞[き]いた。", en: "Listened / asked." },
        { jp: "飲[の]んだ。", en: "Drank." },
        { jp: "食[た]べなかった。", en: "Did not eat." },
        { jp: "行[い]った。", en: "Went." },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Past tense of 食べる?",
      choices: ["食べた", "食べんだ", "食べった", "食べいた"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "飲む ends in む. Its past tense is...",
      choices: ["飲いた", "飲んだ", "飲した", "飲った"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Which is the irregular past tense?",
      choices: ["聞く → 聞いた", "話す → 話した", "行く → 行った", "泳ぐ → 泳いだ"],
      answer: 2,
      explanation: "行く breaks the く→いた pattern and becomes 行った.",
    },
    {
      kind: "fill",
      prompt: "Say 'did not eat'. Type the Japanese:",
      answers: ["食べなかった", "たべなかった"],
      explanation: "Negative 食べない, then i-adjective past: 食べなかった.",
    },
  ],
};
