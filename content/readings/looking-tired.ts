import type { Reading } from "../types";

/** Uses: appearance そう, 気味. */
export const lookingTired: Reading = {
  id: "looking-tired",
  stage: "n2",
  order: 4,
  title: "Looking Tired",
  jpTitle: "疲[つか]れていそう",
  summary: "A coworker looks worn out — and someone finally says so.",
  estMinutes: 4,
  body: [
    {
      jp: "山田[やまだ]さんは最近[さいきん]、疲[つか]れていそうに見[み]える。",
      en: "Yamada-san has looked tired lately.",
    },
    {
      jp: "目[め]の下[した]に熊[くま]ができていて、眠[ねむ]たそうだ。",
      en: "There are dark circles under the eyes, and they look sleepy.",
    },
    {
      jp: "残業[ざんぎょう]が続[つづ]いて、少[すこ]し体調[たいちょう]不良[ふりょう]気味らしい。",
      en: "With overtime continuing, they seem to be a bit under the weather.",
    },
    {
      jp: "今朝[けさ]も机[つくえ]に座[すわ]ったまま、元気[げんき]がなさそうだった。",
      en: "This morning too, sitting at the desk, they didn't seem well.",
    },
    {
      jp: "「大丈夫[だいじょうぶ]？　休[やす]んだ方[ほう]がいいんじゃない？」と聞[き]いてみた。",
      en: "I tried asking, \"Are you okay? Maybe you should rest?\"",
    },
    {
      jp: "山田[やまだ]さんは困[こま]ったそうに笑[わら]って、「少[すこ]し疲[つか]れ気味なだけです」と答[こた]えた。",
      en: "Yamada-san laughed as if troubled and answered, \"I'm just a bit on the tired side.\"",
    },
  ],
  vocabulary: [
    { word: "最近[さいきん]", reading: "さいきん", meaning: "recently; lately" },
    { word: "疲[つか]れる", reading: "つかれる", meaning: "to get tired" },
    { word: "熊[くま]", reading: "くま", meaning: "dark circles (under the eyes)" },
    { word: "残業[ざんぎょう]", reading: "ざんぎょう", meaning: "overtime work" },
    { word: "体調[たいちょう]", reading: "たいちょう", meaning: "physical condition" },
    { word: "不良[ふりょう]", reading: "ふりょう", meaning: "bad; poor (condition)" },
    { word: "元気[げんき]", reading: "げんき", meaning: "energy; health (na-adj)" },
    { word: "困[こま]る", reading: "こまる", meaning: "to be troubled; bothered" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "How does Yamada-san look lately?",
      choices: [
        "疲れていそう",
        "楽しそう",
        "忙しそうではない",
        "眠たくなさそう",
      ],
      answer: 0,
      explanation: "疲れていそうに見える — looks tired (appearance そう).",
    },
    {
      kind: "mc",
      prompt: "What is true about Yamada-san's health?",
      choices: [
        "体調不良気味らしい",
        "とても元気そうだ",
        "風邪ではなさそうだ",
        "休み気味ではない",
      ],
      answer: 0,
      explanation: "〜気味 — a touch of; tending toward.",
    },
    {
      kind: "mc",
      prompt: "How did Yamada-san answer?",
      choices: [
        "少し疲れ気味なだけです",
        "休みます",
        "元気です",
        "残業します",
      ],
      answer: 0,
      explanation: "疲れ気味 — a bit tired / tending to be tired.",
    },
  ],
};
