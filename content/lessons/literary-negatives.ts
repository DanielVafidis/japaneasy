import type { Lesson } from "../types";

export const literaryNegatives: Lesson = {
  id: "literary-negatives",
  stage: "n1",
  order: 4,
  title: "Literary Negatives",
  subtitle: "ん／ぬ · べからず · べく",
  summary:
    "Read formal and classical-flavored negatives and obligations: ぬ, べからず, and purpose-bound べく.",
  estMinutes: 16,
  vocabulary: [
    { word: "知[し]る", reading: "しる", meaning: "to know" },
    { word: "言[い]う", reading: "いう", meaning: "to say" },
    { word: "立[た]ち入[い]る", reading: "たちいる", meaning: "to enter; trespass" },
    { word: "法律[ほうりつ]", reading: "ほうりつ", meaning: "law" },
    { word: "目標[もくひょう]", reading: "もくひょう", meaning: "goal; target" },
    { word: "達[たっ]成[せい]", reading: "たっせい", meaning: "achievement; attainment" },
    { word: "無視[むし]", reading: "むし", meaning: "ignore; disregard" },
    { word: "解決[かいけつ]", reading: "かいけつ", meaning: "solution; resolution" },
    { word: "結果[けっか]", reading: "けっか", meaning: "result" },
    { word: "努力[どりょく]", reading: "どりょく", meaning: "effort" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Modern Japanese still carries **literary negatives** in signs, formal writing, and set phrases. You don't need to speak them daily — you need to **read** them without freezing.",
    },
    {
      type: "heading",
      text: "ん / ぬ negatives",
    },
    {
      type: "rule",
      title: "Classical-style negative",
      items: [
        "Dictionary stem + {{ぬ}} (or {{ん}}): {{知らぬ}}, {{知らん}} ≈ {{知らない}}.",
        "{{ず}} is a related negative connective: {{知らずに行った}} — went without knowing.",
        "Set phrases: {{言わずと知れた}}, {{思わず}}, {{己を知らぬ者}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "彼[かれ]は理由[りゆう]を知[し]らぬ様子[ようす]だった。", en: "He seemed not to know the reason. (literary flavor)" },
        { jp: "誰[だれ]も予[よ]想[そう]せぬ結果[けっか]となった。", en: "It became a result no one had anticipated." },
        { jp: "何[なに]も知[し]らずにサインしてしまった。", en: "I signed without knowing anything." },
      ],
    },
    {
      type: "heading",
      text: "べからず — must not",
    },
    {
      type: "prose",
      text: "{{べからず}} is a **prohibitory** literary form: 'must not / shall not.' Classic on signs and formal bans. Related to {{べき}} (should) from {{はず・べき}}.",
    },
    {
      type: "rule",
      title: "Formation & kin",
      items: [
        "Dictionary form + {{べからず}}: {{入るべからず}} — must not enter.",
        "Attributive: {{べからざる}}: {{許すべからざる行為}} — an unforgivable act.",
        "Contrast **{{べきだ}}** (ought to) vs **{{べからず}}** (must not).",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "ここに立[た]ち入[い]るべからず。", en: "Do not enter here. (sign language)" },
        { jp: "言[い]うべからざることを言[い]ってしまった。", en: "I said something that must not be said." },
        { jp: "法律[ほうりつ]を無視[むし]するべからず。", en: "One must not ignore the law." },
      ],
    },
    {
      type: "heading",
      text: "べく — in order to / as one should",
    },
    {
      type: "rule",
      title: "べく uses",
      items: [
        "**Purpose (formal):** dictionary form + {{べく}} ≈ in order to: {{達成すべく努力する}}.",
        "Related {{べき}} = should; {{べくして}} in set phrases like {{起こるべくして起こった}}.",
        "Sounds written/formal — rare in casual chat.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "目標[もくひょう]を達[たっ]成[せい]すべく、毎日[まいにち]訓練[くんれん]している。", en: "I train every day in order to achieve the goal." },
        { jp: "問題[もんだい]を解決[かいけつ]すべく、会議[かいぎ]が開[ひら]かれた。", en: "A meeting was held in order to solve the problem." },
        { jp: "それは起[お]こるべくして起[お]こった結果[けっか]だ。", en: "That was a result that was bound to happen." },
      ],
    },
    {
      type: "table",
      caption: "Literary toolkit",
      headers: ["Form", "Modern cousin", "Example"],
      rows: [
        ["〜ぬ／ん", "〜ない", "知らぬ"],
        ["〜ず（に）", "〜ないで", "知らずに"],
        ["べからず", "てはいけない", "入るべからず"],
        ["べく", "ために（formal）", "達成すべく"],
        ["べきだ", "should", "行くべきだ"],
      ],
    },
    {
      type: "note",
      text: "These were split out of denser {{はず・べき}} / ease-difficulty material so N1 readers can drill literary negatives without relearning the whole chapter.",
    },
    {
      type: "tip",
      text: "On public signs, expect {{べからず}}, {{ること}}, and {{禁止}}. Translate as modern prohibitions first, then enjoy the classical tone.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Must not enter」 literary form?",
      choices: ["入るべきだ", "入るべからず", "入るべく", "入らぬだけ"],
      answer: 1,
      explanation: "べからず = must not.",
    },
    {
      kind: "mc",
      prompt: "Literary negative of 知る?",
      choices: ["知らぬ", "知るべからず only", "知るべく", "知ったものだ"],
      answer: 0,
      explanation: "知らぬ ≈ 知らない.",
    },
    {
      kind: "mc",
      prompt: "「In order to achieve」 formal?",
      choices: ["達成すべきだ only", "達成すべく", "達成せぬ", "達成べからず"],
      answer: 1,
      explanation: "べく marks formal purpose.",
    },
    {
      kind: "fill",
      prompt: "Complete the sign: 'must not…'",
      promptJp: "立[た]ち入[い]る◯",
      answers: ["べからず"],
      explanation: "dictionary form + べからず.",
    },
    {
      kind: "order",
      prompt: "Build: 'I train in order to achieve the goal'",
      tiles: ["目標[もくひょう]を", "達[たっ]成[せい]すべく", "訓練[くんれん]している"],
      distractors: ["べからず"],
      explanation: "べく for purpose, not prohibition.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "ここに立[た]ち入[い]るべからず",
      explanation: "ここに立ち入るべからず — Do not enter here.",
    },
  ],
  drills: [
    { id: "nu-negative", prompt: "Literary negative — 'not know'", jp: "知[し]る → ◯", answers: ["知[し]らぬ", "知らぬ", "知らん"] },
    { id: "zu-ni", prompt: "Without knowing — complete", jp: "知[し]ら◯サインした", answers: ["ずに", "ず"] },
    { id: "bekarazu", prompt: "Must not enter — complete", jp: "入[はい]る◯", answers: ["べからず"] },
    { id: "beku-purpose", prompt: "In order to achieve — fill", jp: "達成[たっせい]◯努力[どりょく]する", answers: ["すべく"] },
    { id: "beki-vs-bekarazu", prompt: "Prohibition (not 'should') — fill", jp: "言[い]う◯こと", answers: ["べからざる"] },
  ],
};
