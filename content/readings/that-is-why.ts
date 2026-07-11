import type { Reading } from "../types";

/** Uses: わけ, はず, べき. */
export const thatIsWhy: Reading = {
  id: "that-is-why",
  stage: "n2",
  order: 1,
  title: "That Is Why",
  jpTitle: "そういうわけ",
  summary: "A project slips — and the team explains why.",
  estMinutes: 4,
  body: [
    {
      jp: "会議[かいぎ]で、田中[たなか]さんは「遅[おく]れたわけを説明[せつめい]してください」と言[い]った。",
      en: "In the meeting, Tanaka-san said, \"Please explain why it was delayed.\"",
    },
    {
      jp: "資料[しりょう]は昨日[きのう]までに完成[かんせい]するはずだった。",
      en: "The materials should have been finished by yesterday.",
    },
    {
      jp: "しかし、サーバが突然[とつぜん]止[と]まったわけで、作業[さぎょう]が進[すす]まなかった。",
      en: "However, because the server suddenly stopped, the work did not progress.",
    },
    {
      jp: "そのうえ、確認[かくにん]すべき点[てん]が多[おお]く残[のこ]っていた。",
      en: "On top of that, many points that should be checked remained.",
    },
    {
      jp: "だから、今日[きょう]の発表[はっぴょう]は明日[あした]に延[の]ばすべきだと思[おも]う。",
      en: "So I think today's presentation should be postponed until tomorrow.",
    },
    {
      jp: "そういうわけで、皆[みな]の協力[きょうりょく]が必要[ひつよう]である。",
      en: "That is why everyone's cooperation is necessary.",
    },
  ],
  vocabulary: [
    { word: "会議[かいぎ]", reading: "かいぎ", meaning: "meeting; conference" },
    { word: "遅[おく]れる", reading: "おくれる", meaning: "to be delayed; late" },
    { word: "説明[せつめい]", reading: "せつめい", meaning: "explanation" },
    { word: "資料[しりょう]", reading: "しりょう", meaning: "materials; documents" },
    { word: "完成[かんせい]", reading: "かんせい", meaning: "completion" },
    { word: "突然[とつぜん]", reading: "とつぜん", meaning: "suddenly" },
    { word: "発表[はっぴょう]", reading: "はっぴょう", meaning: "presentation; announcement" },
    { word: "協力[きょうりょく]", reading: "きょうりょく", meaning: "cooperation" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "When should the materials have been finished?",
      choices: [
        "昨日までに",
        "明日までに",
        "来週までに",
        "会議の後に",
      ],
      answer: 0,
      explanation: "昨日までに完成するはずだった — expectation that was not met.",
    },
    {
      kind: "mc",
      prompt: "Why did the work not progress?",
      choices: [
        "サーバが突然止まったわけで",
        "資料が多すぎたわけで",
        "会議が長かったわけで",
        "田中さんが遅れたわけで",
      ],
      answer: 0,
      explanation: "〜わけで — that is the reason why.",
    },
    {
      kind: "mc",
      prompt: "What does the speaker think should be done?",
      choices: [
        "発表を明日に延ばすべき",
        "発表を今日すべき",
        "サーバを買えるべき",
        "会議を止めるべき",
      ],
      answer: 0,
      explanation: "延ばすべきだ — ought to postpone.",
    },
    {
      kind: "mc",
      prompt: "What does そういうわけで mean here?",
      choices: [
        "That is why…",
        "In spite of that…",
        "As expected…",
        "Just in case…",
      ],
      answer: 0,
      explanation: "そういうわけで — for that reason; that is why.",
    },
  ],
};
