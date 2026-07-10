import type { Reading } from "../types";

/** Uses: てしまう, らしい, かもしれない, ばかり, explanatory の. */
export const theDayIForgot: Reading = {
  id: "the-day-i-forgot",
  stage: "special-expressions",
  order: 0,
  title: "The Day I Forgot",
  jpTitle: "忘[わす]れた日[ひ]",
  summary: "Homework left at home, a teacher who seems angry — regret with てしまう.",
  estMinutes: 4,
  body: [
    {
      jp: "今朝[けさ]、宿題[しゅくだい]を家[いえ]に忘[わす]れてしまいました。",
      en: "This morning I (regrettably) left my homework at home.",
    },
    {
      jp: "先生[せんせい]は怒[おこ]っているらしいです。",
      en: "Apparently the teacher is angry.",
    },
    {
      jp: "「明日[あした]も雨[あめ]が降[ふ]るかもしれない」と友達[ともだち]が言[い]いました。",
      en: "\"It might rain again tomorrow,\" my friend said.",
    },
    {
      jp: "最近[さいきん]、忘[わす]れてばかりいます。",
      en: "Lately I've been doing nothing but forgetting things.",
    },
    {
      jp: "疲[つか]れているのかもしれません。",
      en: "It may be that I'm tired.",
    },
    {
      jp: "今日[きょう]は早[はや]く寝[ね]ます。それだけです。",
      en: "Today I'll just go to bed early. That's all.",
    },
  ],
  vocabulary: [
    { word: "今朝[けさ]", reading: "けさ", meaning: "this morning" },
    { word: "最近[さいきん]", reading: "さいきん", meaning: "lately; recently" },
    { word: "疲[つか]れる", reading: "つかれる", meaning: "to get tired" },
    { word: "寝[ね]る", reading: "ねる", meaning: "to sleep; go to bed" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "What did I leave at home?",
      choices: ["宿題", "本", "傘", "お金"],
      answer: 0,
      explanation: "忘れてしまいました — てしまう adds the 'oops, for good' nuance.",
    },
    {
      kind: "mc",
      prompt: "How does the teacher seem?",
      choices: [
        "怒っているらしい",
        "元気らしい",
        "疲れているらしい",
        "静からしい",
      ],
      answer: 0,
      explanation: "らしい — hearsay: that's what I gather, not what I saw.",
    },
    {
      kind: "mc",
      prompt: "What have I been doing lately?",
      choices: [
        "忘れてばかりいる",
        "寝てばかりいる",
        "食べてばかりいる",
        "話してばかりいる",
      ],
      answer: 0,
    },
  ],
};
