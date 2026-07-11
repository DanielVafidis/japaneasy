import type { Lesson } from "../types";

export const verbBasics: Lesson = {
  id: "verb-basics",
  stage: "n5",
  order: 5,
  title: "Verb Basics",
  subtitle: "Ru-verbs, u-verbs, and the two exceptions",
  summary:
    "Classify every verb into one of three groups — the key that unlocks all conjugation — with daily-routine verbs like wake up, go, and eat.",
  estMinutes: 14,
  vocabulary: [
    { word: "起きる", reading: "おきる", meaning: "to wake up (ru-verb)" },
    { word: "食べる", reading: "たべる", meaning: "to eat (ru-verb)" },
    { word: "行く", reading: "いく", meaning: "to go (u-verb)" },
    { word: "飲む", reading: "のむ", meaning: "to drink (u-verb)" },
    { word: "寝る", reading: "ねる", meaning: "to sleep (ru-verb)" },
    { word: "帰る", reading: "かえる", meaning: "to return home (u-verb trap)" },
    { word: "する", reading: "する", meaning: "to do (exception)" },
    { word: "来る", reading: "くる", meaning: "to come (exception)" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Almost all of Japanese conjugation depends on knowing a verb's **class**. There are just three, and the dictionary (plain, present) form of every verb ends in an /u/ sound. Daily life is full of them: wake up, go to school, eat breakfast.",
    },
    {
      type: "rule",
      title: "The three classes",
      items: [
        "**Ru-verbs** end in {{る}} where the vowel before る is /e/ or /i/ — e.g. {{食[た]べる}} (taberu), {{起[お]きる}} (okiru), {{寝[ね]る}} (neru).",
        "**U-verbs** — everything else. They end in う, く, ぐ, す, つ, ぬ, ぶ, む, る — e.g. {{飲[の]む}} (nomu), {{行[い]く}} (iku).",
        "**Exceptions** — only two: {{する}} (to do) and {{来[く]る}} (to come).",
      ],
    },
    {
      type: "note",
      text: "Watch out: some verbs *look* like ru-verbs but are u-verbs, such as {{帰[かえ]る}} (to return home) and {{入[はい]る}} (to enter). {{帰[かえ]る}} is a daily-routine trap worth memorising.",
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
        {
          jp: "朝[あさ]、起[お]きる。",
          en: "In the morning, (I) wake up.",
        },
        {
          jp: "学校[がっこう]に行[い]く。",
          en: "(I) go to school.",
        },
        {
          jp: "朝[あさ]ご飯[はん]を食[た]べる。",
          en: "(I) eat breakfast.",
        },
        {
          jp: "お茶[ちゃ]を飲[の]む。",
          en: "(I) drink tea.",
        },
        {
          jp: "勉強[べんきょう]をする。",
          en: "(I) study / do studying.",
        },
        {
          jp: "友達[ともだち]が来[く]る。",
          en: "A friend comes / will come.",
        },
      ],
    },
    {
      type: "tip",
      text: "There is no separate future tense. Context tells you whether {{食[た]べる}} means 'I eat' or 'I will eat' — same for {{行[い]く}} and the rest of your routine.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Which verb is a ru-verb?",
      choices: ["飲む (nomu)", "行く (iku)", "食べる (taberu)", "来る (kuru)"],
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
      prompt: "帰る (kaeru, to return home) is a famous trap. What class is it?",
      choices: [
        "Ru-verb",
        "U-verb (despite ending in える)",
        "Exception",
        "It is an adjective",
      ],
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
      kind: "mc",
      prompt: "起きる (to wake up) is which class?",
      choices: ["U-verb", "Ru-verb", "Exception", "Na-adjective"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'I go to school'",
      tiles: ["学校[がっこう]に", "行[い]く"],
      distractors: ["行[い]った", "食[た]べる"],
      explanation: "Dictionary form 行く for non-past; the verb ends the sentence.",
    },
  ],
  drills: [
    {
      id: "class-taberu",
      prompt: "る-verb or う-verb? Type る or う",
      jp: "食[た]べる",
      answers: ["る"],
    },
    {
      id: "class-nomu",
      prompt: "る-verb or う-verb? Type る or う",
      jp: "飲[の]む",
      answers: ["う"],
    },
    {
      id: "class-kaeru",
      prompt: "る-verb or う-verb? Type る or う — careful (go home)",
      jp: "帰[かえ]る",
      answers: ["う"],
    },
    {
      id: "class-iku",
      prompt: "る-verb or う-verb? Type る or う (go)",
      jp: "行[い]く",
      answers: ["う"],
    },
    {
      id: "exception-do",
      prompt: "Type the exception verb meaning 'to do'",
      jp: "？",
      answers: ["する"],
    },
    {
      id: "exception-come",
      prompt: "Type the exception verb meaning 'to come'",
      jp: "？",
      answers: ["来[く]る"],
    },
  ],
};
