import type { Lesson } from "../types";

export const concessionContrast: Lesson = {
  id: "concession-contrast",
  stage: "n2",
  order: 9,
  title: "Concession & Contrast",
  subtitle: "のに · けれども · ても · とはいえ · ものの · にもかかわらず",
  summary:
    "Concede a point and still hold your ground — from everyday ても to formal にもかかわらず.",
  estMinutes: 17,
  vocabulary: [
    { word: "不便[ふべん]", reading: "ふべん", meaning: "inconvenient" },
    { word: "提案[ていあん]", reading: "ていあん", meaning: "proposal" },
    { word: "反対[はんたい]", reading: "はんたい", meaning: "opposition" },
    { word: "努力[どりょく]", reading: "どりょく", meaning: "effort" },
    { word: "結果[けっか]", reading: "けっか", meaning: "result" },
    { word: "経験[けいけん]", reading: "けいけん", meaning: "experience" },
    { word: "若[わか]い", reading: "わかい", meaning: "young" },
    { word: "厳[きび]しい", reading: "きびしい", meaning: "strict; severe" },
    { word: "予算[よさん]", reading: "よさん", meaning: "budget" },
    { word: "責任[せきにん]", reading: "せきにん", meaning: "responsibility" },
    { word: "準備[じゅんび]", reading: "じゅんび", meaning: "preparation", note: "準備する — to prepare" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Concession says **'granted A, still B.'** You already know {{のに}} and {{ても}}; N2 adds formal written tools and fine-tunes register.",
    },
    {
      type: "heading",
      text: "のに — review",
    },
    {
      type: "examples",
      items: [
        { jp: "努力[どりょく]したのに、結果[けっか]が出[で]なかった。", en: "Even though I made an effort, there was no result." },
        { jp: "経験[けいけん]があるのに、自信[じしん]がない。", en: "Even though I have experience, I lack confidence." },
      ],
    },
    {
      type: "heading",
      text: "けれども · が · けど",
    },
    {
      type: "rule",
      title: "Soft contrast ladder",
      items: [
        "**{{けど}}** — casual spoken contrast / softener.",
        "**{{けれど／けれども}}** — slightly softer or more careful.",
        "**{{が}}** — written / formal 'but'.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "提案[ていあん]は面白[おもしろ]いけれども、予算[よさん]が不足[ふそく]しています。", en: "The proposal is interesting, but the budget is insufficient." },
        { jp: "行[い]きたいが、今日[きょう]は無理[むり]だ。", en: "I'd like to go, but today is impossible." },
      ],
    },
    {
      type: "heading",
      text: "ても — even if (review + stretch)",
    },
    {
      type: "examples",
      items: [
        { jp: "反対[はんたい]されても、この方針[ほうしん]を続[つづ]ける。", en: "Even if opposed, I'll continue this policy." },
        { jp: "少[すこ]し不便[ふべん]でも、この町[まち]が好[す]きだ。", en: "Even if it's a bit inconvenient, I like this town." },
      ],
    },
    {
      type: "heading",
      text: "とはいえ — that said / nevertheless",
    },
    {
      type: "prose",
      text: "{{とはいえ}} concedes A then pivots: 'that said…' Common in essays and careful speech.",
    },
    {
      type: "examples",
      items: [
        { jp: "若[わか]いとはいえ、責任[せきにん]は同[おな]じだ。", en: "Young though he may be, the responsibility is the same." },
        { jp: "便利[べんり]とはいえ、値段[ねだん]が高[たか]すぎる。", en: "Convenient though it is, the price is too high." },
      ],
    },
    {
      type: "heading",
      text: "ものの · にもかかわらず",
    },
    {
      type: "rule",
      title: "Formal concession",
      items: [
        "**{{ものの}}** — although (written): {{努力したものの、失敗した}}.",
        "**{{にもかかわらず}}** — despite / in spite of (formal): {{雨にもかかわらず開催した}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "準備[じゅんび]はしたものの、まだ不安[ふあん]が残[のこ]る。", en: "Although I prepared, anxiety remains." },
        { jp: "厳[きび]しい批判[ひはん]にもかかわらず、計画[けいかく]は進[すす]んだ。", en: "Despite harsh criticism, the plan moved forward." },
        { jp: "経験[けいけん]不足[ぶそく]にもかかわらず、採用[さいよう]された。", en: "Despite lack of experience, I was hired." },
      ],
    },
    {
      type: "table",
      caption: "Concession by register",
      headers: ["Pattern", "Register", "Feel"],
      rows: [
        ["けど", "Casual", "Soft but"],
        ["けれども／が", "Careful / written", "But"],
        ["のに", "Spoken/written", "Despite expectation"],
        ["ても", "Neutral", "Even if"],
        ["とはいえ", "Careful", "That said"],
        ["ものの", "Written", "Although"],
        ["にもかかわらず", "Formal", "Despite"],
      ],
    },
    {
      type: "tip",
      text: "In work email, {{〜が、}} and {{〜ものの、}} sound measured. {{のに}} can sound emotional — use carefully with superiors.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Formal 'despite the rain'?",
      choices: ["雨なのに", "雨にもかかわらず", "雨だけど only", "雨とはいえ only always"],
      answer: 1,
      explanation: "にもかかわらず is formal despite.",
    },
    {
      kind: "mc",
      prompt: "「Young though he may be…」?",
      choices: ["若いのに only", "若いとはいえ", "若いもののだけ", "若いに違いない"],
      answer: 1,
      explanation: "とはいえ = that said / granted that.",
    },
    {
      kind: "mc",
      prompt: "Written 'although I prepared'?",
      choices: ["準備したけど", "準備したものの", "準備したわけだ", "準備したらしい"],
      answer: 1,
      explanation: "ものの is written concession.",
    },
    {
      kind: "fill",
      prompt: "Complete — formal despite:",
      promptJp: "批判[ひはん]◯計画[けいかく]は進[すす]んだ",
      answers: ["にもかかわらず"],
      explanation: "Nにもかかわらず V.",
    },
    {
      kind: "order",
      prompt: "Build: 'Even if opposed, I'll continue'",
      tiles: ["反対[はんたい]されても", "方針[ほうしん]を", "続[つづ]ける"],
      distractors: ["のに"],
      explanation: "ても for even-if concession.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "努力[どりょく]したのに結果[けっか]が出[で]なかった",
      explanation: "努力したのに結果が出なかった — Tried hard but no result.",
    },
  ],
  drills: [
    { id: "noni-review", prompt: "Despite expectation — fill", jp: "努力[どりょく]した◯失敗[しっぱい]した", answers: ["のに"] },
    { id: "temo-concession", prompt: "Even if — fill", jp: "反対[はんたい]されて◯続[つづ]ける", answers: ["も"] },
    { id: "tohaie", prompt: "That said — fill", jp: "若[わか]い◯責任[せきにん]は同[おな]じだ", answers: ["とはいえ"] },
    { id: "monono", prompt: "Although (written) — fill", jp: "準備[じゅんび]した◯不安[ふあん]が残[のこ]る", answers: ["ものの"] },
    { id: "nimo-kakawarazu", prompt: "Despite (formal) — fill", jp: "雨[あめ]◯開催[かいさい]した", answers: ["にもかかわらず"] },
  ],
};
