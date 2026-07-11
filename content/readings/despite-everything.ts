import type { Reading } from "../types";

/** Uses: にもかかわらず, ものの, つつ. */
export const despiteEverything: Reading = {
  id: "despite-everything",
  stage: "n2",
  order: 2,
  title: "Despite Everything",
  jpTitle: "にもかかわらず",
  summary: "Rain, nerves, and a festival that goes on anyway.",
  estMinutes: 4,
  body: [
    {
      jp: "雨[あめ]が降[ふ]っているにもかかわらず、町[まち]の祭[まつ]りは始[はじ]まった。",
      en: "Despite the rain, the town festival began.",
    },
    {
      jp: "準備[じゅんび]は十分[じゅうぶん]ではなかったものの、店[みせ]は次々[つぎつぎ]と開[ひら]いた。",
      en: "Although the preparations were not enough, stalls opened one after another.",
    },
    {
      jp: "私[わたし]は緊張[きんちょう]しつつ、マイクの前[まえ]に立[た]った。",
      en: "While feeling nervous, I stood in front of the microphone.",
    },
    {
      jp: "声[こえ]が震[ふる]えていたにもかかわらず、皆[みな]は静[しず]かに聞[き]いてくれた。",
      en: "Even though my voice was shaking, everyone listened quietly.",
    },
    {
      jp: "うまく話[はな]せなかったものの、最後[さいご]まで続[つづ]けた。",
      en: "Although I could not speak well, I continued to the end.",
    },
    {
      jp: "雨[あめ]を感[かん]じつつも、笑顔[えがお]で挨拶[あいさつ]できた。",
      en: "While still feeling the rain, I managed to greet everyone with a smile.",
    },
  ],
  vocabulary: [
    { word: "祭[まつ]り", reading: "まつり", meaning: "festival" },
    { word: "準備[じゅんび]", reading: "じゅんび", meaning: "preparation" },
    { word: "十分[じゅうぶん]", reading: "じゅうぶん", meaning: "enough; sufficient" },
    { word: "次々[つぎつぎ]", reading: "つぎつぎ", meaning: "one after another" },
    { word: "緊張[きんちょう]", reading: "きんちょう", meaning: "nervousness; tension" },
    { word: "震[ふる]える", reading: "ふるえる", meaning: "to shake; tremble" },
    { word: "笑顔[えがお]", reading: "えがお", meaning: "smiling face" },
    { word: "挨拶[あいさつ]", reading: "あいさつ", meaning: "greeting" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "What happened despite the rain?",
      choices: [
        "祭りは始まった",
        "祭りは中止になった",
        "店は閉まっていた",
        "マイクが壊れた",
      ],
      answer: 0,
      explanation: "雨が降っているにもかかわらず — despite the rain.",
    },
    {
      kind: "mc",
      prompt: "How were the preparations?",
      choices: [
        "十分ではなかったものの、店は開いた",
        "十分だったので店は開いた",
        "準備はなかった",
        "準備は明日だった",
      ],
      answer: 0,
      explanation: "〜ものの — although…",
    },
    {
      kind: "mc",
      prompt: "How did the speaker stand at the mic?",
      choices: [
        "緊張しつつ",
        "笑いつつ",
        "走りつつ",
        "休みつつ",
      ],
      answer: 0,
      explanation: "緊張しつつ — while being nervous.",
    },
  ],
};
