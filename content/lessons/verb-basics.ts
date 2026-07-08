import type { Lesson } from "../types";

export const verbBasics: Lesson = {
  id: "verb-basics",
  stage: "basic-grammar",
  order: 3,
  title: "Verb Basics",
  subtitle: "Ru-verbs, u-verbs, and the two exceptions",
  summary:
    "Classify every verb into one of three groups — the key that unlocks all conjugation.",
  estMinutes: 14,
  vocabulary: [
    { word: "食べる", reading: "たべる", meaning: "to eat (ru-verb)" },
    { word: "見る", reading: "みる", meaning: "to see; to watch (ru-verb)" },
    { word: "飲む", reading: "のむ", meaning: "to drink (u-verb)" },
    { word: "話す", reading: "はなす", meaning: "to speak (u-verb)" },
    { word: "する", reading: "する", meaning: "to do (exception)" },
    { word: "来る", reading: "くる", meaning: "to come (exception)" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Almost all of Japanese conjugation depends on knowing a verb's **class**. There are just three, and the dictionary (plain, present) form of every verb ends in an /u/ sound.",
    },
    {
      type: "rule",
      title: "The three classes",
      items: [
        "**Ru-verbs** end in {{る}} where the vowel before る is /e/ or /i/ — e.g. {{食べる}} (taberu), {{見る}} (miru).",
        "**U-verbs** — everything else. They end in う, く, ぐ, す, つ, ぬ, ぶ, む, る — e.g. {{飲む}} (nomu), {{話す}} (hanasu).",
        "**Exceptions** — only two: {{する}} (to do) and {{来る}} (to come).",
      ],
    },
    {
      type: "note",
      text: "Watch out: some verbs *look* like ru-verbs but are u-verbs, such as {{帰る}} (かえる, to return) and {{入る}} (はいる, to enter). These are worth memorising as exceptions to the pattern.",
    },
    {
      type: "heading",
      text: "Why classification matters",
    },
    {
      type: "prose",
      text: "Once you can tell a ru-verb from a u-verb, you can apply a single rule to negate it, make it past, make it polite, and much more. The dictionary form itself doubles as the casual non-past — covering both 'eat' and 'will eat'.",
    },
    {
      type: "examples",
      items: [
        { jp: "食[た]べる。", en: "Eat / will eat." },
        { jp: "飲[の]む。", en: "Drink / will drink." },
        { jp: "する。", en: "Do / will do." },
        { jp: "来[く]る。", en: "Come / will come." },
      ],
    },
    {
      type: "tip",
      text: "There is no separate future tense. Context tells you whether 食べる means 'I eat' or 'I will eat'.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Which verb is a ru-verb?",
      choices: ["飲む (nomu)", "話す (hanasu)", "食べる (taberu)", "来る (kuru)"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "How many irregular/exception verbs are there in this core set?",
      choices: ["None", "Two (する and 来る)", "Five", "Dozens"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "帰る (kaeru, to return) is a famous trap. What class is it?",
      choices: ["Ru-verb", "U-verb (despite ending in える)", "Exception", "It is an adjective"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "The dictionary form 食べる can mean...",
      choices: [
        "Only 'ate'",
        "Only 'eat' (right now)",
        "Both 'eat' and 'will eat'",
        "'do not eat'",
      ],
      answer: 2,
    },
    {
      kind: "order",
      prompt: "Build: 'Tomorrow a friend comes'",
      tiles: ["明日[あした]", "友達[ともだち]が", "来[く]る"],
      distractors: ["来[き]た"],
      explanation: "Dictionary form 来る for non-past; the verb ends the sentence.",
    },
  ],
};
