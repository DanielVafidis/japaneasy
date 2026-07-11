import type { Reading } from "../types";

/** Uses: causative-passive させられる / 待たされる, ので, てしまう. */
export const madeToWait: Reading = {
  id: "made-to-wait",
  stage: "n3",
  order: 2,
  title: "Made to Wait",
  jpTitle: "待[ま]たされた",
  summary: "A long wait for the boss, docs to fix, a missed train — and a taxi.",
  estMinutes: 4,
  body: [
    {
      jp: "昨日[きのう]、部長[ぶちょう]に一時間[いちじかん]待[ま]たされました。",
      en: "Yesterday I was made to wait an hour by the section chief.",
    },
    {
      jp: "そのあと、書類[しょるい]を直[なお]させられました。",
      en: "After that, I was made to fix the documents.",
    },
    {
      jp: "遅[おそ]くなったので、電車[でんしゃ]に乗[の]れませんでした。",
      en: "Because it got late, I couldn't catch the train.",
    },
    {
      jp: "タクシーで帰[かえ]ってしまいました。",
      en: "I ended up going home by taxi.",
    },
    {
      jp: "今日[きょう]は早[はや]く帰[かえ]ります。",
      en: "Today I'll leave early.",
    },
    {
      jp: "本当[ほんとう]に疲[つか]れました。",
      en: "I'm truly exhausted.",
    },
  ],
  vocabulary: [
    { word: "部長[ぶちょう]", reading: "ぶちょう", meaning: "section chief; department manager" },
    { word: "待[ま]たされる", reading: "またされる", meaning: "to be made to wait (causative-passive)" },
    { word: "書類[しょるい]", reading: "しょるい", meaning: "documents; papers" },
    { word: "直[なお]す", reading: "なおす", meaning: "to fix; correct" },
    { word: "電車[でんしゃ]", reading: "でんしゃ", meaning: "train" },
    { word: "タクシー", reading: "タクシー", meaning: "taxi" },
    { word: "帰[かえ]る", reading: "かえる", meaning: "to go home; return" },
    { word: "疲[つか]れる", reading: "つかれる", meaning: "to get tired" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "How long was I made to wait?",
      choices: ["一時間", "三時間", "十分", "一日"],
      answer: 0,
      explanation: "待たされました — short causative-passive of 待つ.",
    },
    {
      kind: "mc",
      prompt: "What was I made to do to the documents?",
      choices: [
        "直させられた",
        "書かせられた",
        "読まされた",
        "持たされた",
      ],
      answer: 0,
      explanation: "直させられた — was forced to fix them.",
    },
    {
      kind: "mc",
      prompt: "How did I get home?",
      choices: [
        "タクシーで帰ってしまった",
        "電車で帰った",
        "歩いて帰った",
        "部長と帰った",
      ],
      answer: 0,
      explanation: "てしまった — regret / ended up doing.",
    },
  ],
};
