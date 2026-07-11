import type { Lesson } from "../types";

export const comparisons: Lesson = {
  id: "comparisons",
  stage: "n4",
  order: 8,
  title: "Comparisons",
  subtitle: "より · の方が · 一番 · 同じ",
  summary:
    "Compare food, routes, and options — more than (より), the better side (の方が), the best (一番), and the same (同じ).",
  estMinutes: 18,
  vocabulary: [
    { word: "より", reading: "より", meaning: "than; rather than" },
    { word: "方[ほう]", reading: "ほう", meaning: "side; way (comparison)" },
    { word: "一番[いちばん]", reading: "いちばん", meaning: "number one; the most" },
    { word: "同[おな]じ", reading: "おなじ", meaning: "same" },
    { word: "紅茶[こうちゃ]", reading: "こうちゃ", meaning: "black tea" },
    { word: "値段[ねだん]", reading: "ねだん", meaning: "price" },
    { word: "美味[おい]しい", reading: "おいしい", meaning: "delicious" },
    { word: "速[はや]い", reading: "はやい", meaning: "fast" },
    { word: "自転車[じてんしゃ]", reading: "じてんしゃ", meaning: "bicycle" },
    { word: "無理[むり]", reading: "むり", meaning: "impossible; unreasonable" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Japanese has no '-er' / '-est'. {{より}} marks the **losing** side of a comparison; {{の方が}} points at the **winning** side. {{一番}} crowns a winner; {{同じ}} says two things match.",
    },
    {
      type: "rule",
      title: "Xより Yの方が…",
      items: [
        "{{バスより電車の方が速い}} — the train is faster than the bus.",
        "Noun + {{の方が}}; verb plain + {{方が}}; na-adj + {{な方が}}.",
        "{{より}} can stand alone when the other side is clear: {{昨日より寒い}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "コーヒーより紅茶[こうちゃ]の方[ほう]が好[す]きだ。", en: "I like black tea more than coffee." },
        { jp: "この店[みせ]は隣[となり]より値段[ねだん]が安[やす]い。", en: "This shop is cheaper than the one next door." },
        { jp: "歩[ある]くより自転車[じてんしゃ]の方[ほう]が早[はや]いよ。", en: "Biking is faster than walking." },
        { jp: "今日[きょう]のランチ、昨日[きのう]より美味[おい]しい。", en: "Today's lunch is tastier than yesterday's." },
      ],
    },
    {
      type: "heading",
      text: "Advice: 〜た方がいい",
    },
    {
      type: "prose",
      text: "Positive advice often uses the **past** stem: {{寝た方がいい}} ('you'd better sleep'). Negative stays non-past: {{行かない方がいい}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "疲[つか]れてるなら、今日[きょう]は早[はや]く帰[かえ]った方[ほう]がいいよ。", en: "If you're tired, you'd better go home early today." },
        { jp: "熱[ねつ]があるなら、無理[むり]しない方[ほう]がいい。", en: "If you have a fever, better not to push yourself." },
      ],
    },
    {
      type: "heading",
      text: "一番 — the most",
    },
    {
      type: "examples",
      items: [
        { jp: "このメニューの中[なか]で一番[いちばん]美味[おい]しいのはどれ？", en: "Which is the most delicious on this menu?" },
        { jp: "通勤[つうきん]で一番[いちばん]速[はや]いのは電車[でんしゃ]だ。", en: "For commuting, the train is the fastest." },
        { jp: "クラスで一番[いちばん]背[せ]が高[たか]いのは誰[だれ]？", en: "Who's the tallest in the class?" },
      ],
    },
    {
      type: "heading",
      text: "同じ — the same",
    },
    {
      type: "rule",
      title: "Matching things",
      items: [
        "{{AとBは同じ}} / {{AはBと同じ}} — A and B are the same.",
        "{{同じ}} + noun: {{同じ店}}, {{同じ値段}}.",
        "Often with {{だ／です}}: {{値段は同じです}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "この二つのラーメンは、味[あじ]が同[おな]じだと思う。", en: "I think these two ramens taste the same." },
        { jp: "昨日[きのう]と同[おな]じ電車[でんしゃ]に乗[の]った。", en: "I took the same train as yesterday." },
        { jp: "値段[ねだん]は同[おな]じでも、量[りょう]が違[ちが]う。", en: "Even if the price is the same, the portion differs." },
      ],
    },
    {
      type: "dialogue",
      title: "Recommending lunch",
      lines: [
        { speaker: "A", jp: "定食[ていしょく]とカレー、どっちがいい？", en: "Set meal or curry — which is better?" },
        { speaker: "B", jp: "今日[きょう]はカレーの方[ほう]がいいんじゃない？", en: "Today curry's the better choice, no?" },
        { speaker: "A", jp: "ここ、駅[えき]前[まえ]より安[やす]いよね。", en: "This place is cheaper than the one in front of the station." },
        { speaker: "B", jp: "うん。この辺[あた]りで一番[いちばん]気[き]に入[い]ってる。", en: "Yeah. It's my favourite around here." },
      ],
    },
    {
      type: "note",
      text: "{{によって}} ('depending on') and {{によると}} ('according to') moved to Reasons & Causes (N3). Stem + {{方[かた]}} ('how to') still appears in Defining & Trying.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「The bus is cheaper than the taxi」?",
      choices: [
        "タクシーよりバスの方が安い",
        "バスよりタクシーの方が安い",
        "タクシーの方がバスより高い",
        "バスはタクシーが安い",
      ],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "「You'd better rest」?",
      choices: ["休んだ方がいい", "休むの方がいい", "休みた方がいい", "休んで方がいい"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "「Better not to go」?",
      choices: ["行かない方がいい", "行かなかった方がいい", "行くない方がいい", "行きない方がいい"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "「The most delicious」?",
      choices: ["一番美味しい", "より美味しい", "同じ美味しい", "方美味しい"],
      answer: 0,
    },
    {
      kind: "fill",
      prompt: "Fill — 'same price':",
      promptJp: "値段[ねだん]は◯◯◯です",
      answers: ["同[おな]じ", "同じ"],
      explanation: "同じ = the same.",
    },
    {
      kind: "order",
      prompt: "Build: 'I like tea more than coffee'",
      tiles: ["コーヒーより", "紅茶[こうちゃ]の方[ほう]が", "好[す]きだ"],
      distractors: ["コーヒーの方[ほう]が"],
      explanation: "より marks the loser; の方が the winner.",
    },
  ],
  drills: [
    { id: "yori", prompt: "Fill — 'more than the bicycle'", jp: "自転車[じてんしゃ]◯◯…", answers: ["より"] },
    { id: "hou-ga", prompt: "Fill — 'tea is more…'", jp: "紅茶[こうちゃ]の◯が…", answers: ["方[ほう]"] },
    { id: "ichiban", prompt: "Type — 'the most / number one'", jp: "？", answers: ["一番[いちばん]"] },
    { id: "onaji", prompt: "Type — 'the same'", jp: "？", answers: ["同[おな]じ"] },
    { id: "hou-ga-ii", prompt: "Advice — 'you'd better sleep'", jp: "寝[ね]る", answers: ["寝[ね]た方[ほう]がいい"] },
  ],
};
