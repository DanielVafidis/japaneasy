import type { Reading } from "../types";

/** Uses: すぎる, ずに, ばかり, やすい, 〜た方がいい, てくれる. */
export const workingTooMuch: Reading = {
  id: "working-too-much",
  stage: "n3",
  order: 0,
  title: "Working Too Much",
  jpTitle: "働[はたら]きすぎ",
  summary: "A worried look at an older brother who won't slow down.",
  estMinutes: 4,
  body: [
    {
      jp: "兄[あに]は働[はたら]きすぎです。",
      en: "My older brother works too much.",
    },
    {
      jp: "朝[あさ]ご飯[はん]を食[た]べずに、会社[かいしゃ]へ行[い]きます。",
      en: "He goes to the office without eating breakfast.",
    },
    {
      jp: "夜[よる]も仕事[しごと]のことばかり話[はな]します。",
      en: "Even at night, he talks about nothing but work.",
    },
    {
      jp: "病気[びょうき]になりやすいですから、心配[しんぱい]です。",
      en: "He gets sick easily, so I'm worried.",
    },
    {
      jp: "「休[やす]んだ方[ほう]がいいよ」と言[い]いましたが、聞[き]いてくれません。",
      en: "I told him he should rest, but he won't listen to me.",
    },
    {
      jp: "週末[しゅうまつ]は一緒[いっしょ]に映画[えいが]を見[み]に行[い]きたいです。",
      en: "This weekend I want to go see a movie together.",
    },
  ],
  vocabulary: [
    { word: "兄[あに]", reading: "あに", meaning: "older brother (one's own)" },
    { word: "働[はたら]く", reading: "はたらく", meaning: "to work" },
    { word: "会社[かいしゃ]", reading: "かいしゃ", meaning: "company; office" },
    { word: "夜[よる]", reading: "よる", meaning: "night" },
    { word: "仕事[しごと]", reading: "しごと", meaning: "work; job" },
    { word: "心配[しんぱい]", reading: "しんぱい", meaning: "worry (na-adj/noun)" },
    { word: "休[やす]む", reading: "やすむ", meaning: "to rest" },
    { word: "週末[しゅうまつ]", reading: "しゅうまつ", meaning: "weekend" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "How does my brother leave for the office?",
      choices: [
        "朝ご飯を食べずに",
        "早く寝てから",
        "映画を見てから",
        "休んでから",
      ],
      answer: 0,
      explanation: "食べずに — the literary 'without eating'.",
    },
    {
      kind: "mc",
      prompt: "What does he talk about at night?",
      choices: ["仕事のこと", "映画のこと", "病気のこと", "週末のこと"],
      answer: 0,
      explanation: "仕事のことばかり — nothing but work.",
    },
    {
      kind: "mc",
      prompt: "What did I tell him?",
      choices: [
        "休んだ方がいい",
        "働いた方がいい",
        "食べすぎだ",
        "映画を見た方がいい",
      ],
      answer: 0,
    },
  ],
};
