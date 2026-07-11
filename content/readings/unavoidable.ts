import type { Reading } from "../types";

/** Uses: ざるを得ない, やむを得ず, やむを得ない. Cancelled trip. */
export const unavoidable: Reading = {
  id: "unavoidable",
  stage: "n1",
  order: 1,
  title: "Unavoidable",
  jpTitle: "やむを得[え]ず",
  summary: "A typhoon forces a hard call — formal necessity grammar in the wild.",
  estMinutes: 4,
  body: [
    {
      jp: "台風[たいふう]が接近[せっきん]している。旅行[りょこう]を中止[ちゅうし]せざるを得[え]ない。",
      en: "A typhoon is approaching. We have no choice but to cancel the trip.",
    },
    {
      jp: "ホテルの予約[よやく]も、やむを得[え]ず取消[とりけ]した。",
      en: "We also had no choice but to cancel the hotel reservation.",
    },
    {
      jp: "友達[ともだち]は残念[ざんねん]がったが、安全[あんぜん]を優先[ゆうせん]せざるを得[え]なかった。",
      en: "My friends were disappointed, but we had to prioritise safety.",
    },
    {
      jp: "やむを得[え]ない事情[じじょう]だと説明[せつめい]すれば、理解[りかい]してくれるだろう。",
      en: "If we explain it as unavoidable circumstances, they will probably understand.",
    },
    {
      jp: "来月[らいげつ]、予定[よてい]を見直[みなお]さざるを得[え]ないかもしれない。",
      en: "Next month we may have no choice but to revise the plans.",
    },
    {
      jp: "今[いま]は静[しず]かに家[いえ]で待[ま]つしかない。",
      en: "For now, there is nothing to do but wait quietly at home.",
    },
  ],
  vocabulary: [
    { word: "台風[たいふう]", reading: "たいふう", meaning: "typhoon" },
    { word: "接近[せっきん]", reading: "せっきん", meaning: "approach; nearing" },
    { word: "中止[ちゅうし]", reading: "ちゅうし", meaning: "cancellation; suspension" },
    { word: "取消[とりけ]す", reading: "とりけす", meaning: "to cancel; call off" },
    { word: "残念[ざんねん]", reading: "ざんねん", meaning: "regrettable; disappointing" },
    { word: "優先[ゆうせん]", reading: "ゆうせん", meaning: "priority; giving precedence" },
    { word: "事情[じじょう]", reading: "じじょう", meaning: "circumstances; situation" },
    { word: "見直[みなお]す", reading: "みなおす", meaning: "to revise; look over again" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "What must they do because of the typhoon?",
      choices: [
        "旅行を中止せざるを得ない",
        "旅行を延長せざるを得ない",
        "ホテルを予約せざるを得ない",
        "友達を招待せざるを得ない",
      ],
      answer: 0,
      explanation: "中止せざるを得ない — する → せざるを得ない.",
    },
    {
      kind: "mc",
      prompt: "How was the hotel booking handled?",
      choices: [
        "やむを得ず取消した",
        "喜んで延長した",
        "無料で変更した",
        "そのまま残した",
      ],
      answer: 0,
      explanation: "やむを得ず — adverbial 'unavoidably / against one's will'.",
    },
    {
      kind: "mc",
      prompt: "What was prioritised over going ahead?",
      choices: ["安全", "値段", "景色", "時間"],
      answer: 0,
      explanation: "安全を優先せざるを得なかった — no choice but to put safety first.",
    },
  ],
};
