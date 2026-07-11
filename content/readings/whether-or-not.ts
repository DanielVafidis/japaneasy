import type { Reading } from "../types";

/** Uses: ようものなら, まい, ようが〜まいが, であろう. Job decision. */
export const whetherOrNot: Reading = {
  id: "whether-or-not",
  stage: "n1",
  order: 0,
  title: "Whether or Not",
  jpTitle: "行[い]くか行[い]かないか",
  summary: "A career offer hangs in the balance — advanced volitional resolve.",
  estMinutes: 4,
  body: [
    {
      jp: "転職[てんしょく]の話[はなし]が来[き]た。行[い]こうか行[い]くまいか、悩[なや]んでいる。",
      en: "A job-change offer came. Whether to go or not — I'm agonising.",
    },
    {
      jp: "今[いま]の会社[かいしゃ]を捨[す]てようものなら、家族[かぞく]は反対[はんたい]するであろう。",
      en: "If I were to abandon my current company, the family would likely oppose it.",
    },
    {
      jp: "しかし、この機会[きかい]を逃[のが]すまいとも思[おも]う。",
      en: "And yet I also resolve not to let this chance slip away.",
    },
    {
      jp: "賛成[さんせい]されようがされまいが、決[き]めるのは自分[じぶん]である。",
      en: "Whether approved or not, I am the one who decides.",
    },
    {
      jp: "責任[せきにん]から逃[のが]れまい。もう二度[にど]と迷[まよ]うまい。",
      en: "I will not shirk responsibility. Never again will I waver.",
    },
    {
      jp: "明日[あした]、返事[へんじ]を出[だ]すつもりだ。",
      en: "Tomorrow, I intend to send my reply.",
    },
  ],
  vocabulary: [
    { word: "転職[てんしょく]", reading: "てんしょく", meaning: "job change; career move" },
    { word: "捨[す]てる", reading: "すてる", meaning: "to abandon; throw away" },
    { word: "機会[きかい]", reading: "きかい", meaning: "opportunity; chance" },
    { word: "逃[のが]す", reading: "のがす", meaning: "to let slip; miss (a chance)" },
    { word: "賛成[さんせい]", reading: "さんせい", meaning: "approval; agreement" },
    { word: "責任[せきにん]", reading: "せきにん", meaning: "responsibility" },
    { word: "迷[まよ]う", reading: "まよう", meaning: "to waver; be undecided" },
    { word: "返事[へんじ]", reading: "へんじ", meaning: "reply; answer" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "What decision is the narrator facing?",
      choices: [
        "行くか行くまいか",
        "辞めるまいだけ",
        "帰るであろうだけ",
        "賛成するまいだけ",
      ],
      answer: 0,
      explanation: "行こうか行くまいか — whether to go or not (volitional pair).",
    },
    {
      kind: "mc",
      prompt: "What would happen if they quit now?",
      choices: [
        "家族は反対するであろう",
        "家族は賛成するであろう",
        "会社は喜ぶであろう",
        "誰も気づくまい",
      ],
      answer: 0,
      explanation: "捨てようものなら — if one were (recklessly) to abandon…",
    },
    {
      kind: "mc",
      prompt: "What resolve does the narrator state?",
      choices: [
        "この機会を逃すまい",
        "この機会を逃そう",
        "この機会を忘れよう",
        "この機会を捨てまいだけ",
      ],
      answer: 0,
      explanation: "逃すまい — negative volitional: resolve not to miss it.",
    },
    {
      kind: "mc",
      prompt: "Who makes the final decision?",
      choices: ["自分である", "家族である", "会社である", "友人である"],
      answer: 0,
      explanation: "賛成されようがされまいが — whether approved or not.",
    },
  ],
};
