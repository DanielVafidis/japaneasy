import type { Reading } from "../types";

/** Uses: のに, から, せいで, てしまう, それでも. */
export const evenSo: Reading = {
  id: "even-so",
  stage: "n3",
  order: 4,
  title: "Even So",
  jpTitle: "それでも",
  summary: "Tired, noisy night, short sleep — but the test is tomorrow, so keep going.",
  estMinutes: 4,
  body: [
    {
      jp: "疲[つか]れているのに、勉強[べんきょう]しました。",
      en: "Even though I was tired, I studied.",
    },
    {
      jp: "明日[あした]はテストがあるからです。",
      en: "It's because there's a test tomorrow.",
    },
    {
      jp: "コーヒーを飲[の]んだのに、まだ眠[ねむ]いです。",
      en: "Even though I drank coffee, I'm still sleepy.",
    },
    {
      jp: "隣[となり]の部屋[へや]の音[おと]のせいで、なかなか寝[ね]られませんでした。",
      en: "Because of the noise from the next room, I couldn't get to sleep easily.",
    },
    {
      jp: "結局[けっきょく]三時間[さんじかん]しか寝[ね]られなくて、困[こま]ってしまいました。",
      en: "In the end I could only sleep three hours, and I was at a loss.",
    },
    {
      jp: "それでも、勉強[べんきょう]できてよかったです。",
      en: "Even so, I'm glad I was able to study.",
    },
  ],
  vocabulary: [
    { word: "それでも", reading: "それでも", meaning: "even so; nevertheless" },
    { word: "のに", reading: "のに", meaning: "even though; despite (contrast)" },
    { word: "せいで", reading: "せいで", meaning: "because of (blame / negative cause)" },
    { word: "眠[ねむ]い", reading: "ねむい", meaning: "sleepy" },
    { word: "隣[となり]", reading: "となり", meaning: "next door; neighboring" },
    { word: "音[おと]", reading: "おと", meaning: "sound; noise" },
    { word: "なかなか", reading: "なかなか", meaning: "not easily (with negative)" },
    { word: "よかった", reading: "よかった", meaning: "I'm glad; it was good that…" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Why did I study even though I was tired?",
      choices: [
        "明日はテストがあるから",
        "コーヒーが好きだから",
        "音が静かだから",
        "早く寝たから",
      ],
      answer: 0,
      explanation: "から — reason.",
    },
    {
      kind: "mc",
      prompt: "What kept me from sleeping?",
      choices: [
        "隣の部屋の音のせいで",
        "コーヒーのせいで",
        "テストのせいで",
        "雨のせいで",
      ],
      answer: 0,
      explanation: "せいで — undesirable cause.",
    },
    {
      kind: "mc",
      prompt: "How do I feel at the end?",
      choices: [
        "勉強できてよかった",
        "勉強できなくて残念",
        "眠くてよかった",
        "テストがなくてよかった",
      ],
      answer: 0,
      explanation: "それでも — even so, I'm glad.",
    },
  ],
};
