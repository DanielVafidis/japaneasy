import type { Lesson } from "../types";

export const relativeClauses: Lesson = {
  id: "relative-clauses",
  stage: "n5",
  order: 14,
  title: "Relative Clauses",
  subtitle: "Clause before the noun — people & places you know",
  summary:
    "Describe a noun with a whole clause in front of it — the person who eats sushi, the book I bought yesterday — no 'who/that' word needed.",
  estMinutes: 14,
  vocabulary: [
    { word: "食[た]べる", reading: "たべる", meaning: "to eat" },
    { word: "人[ひと]", reading: "ひと", meaning: "person" },
    { word: "寿司[すし]", reading: "すし", meaning: "sushi" },
    { word: "昨日[きのう]", reading: "きのう", meaning: "yesterday" },
    { word: "買[か]う", reading: "かう", meaning: "to buy" },
    { word: "本[ほん]", reading: "ほん", meaning: "book" },
    { word: "作[つく]る", reading: "つくる", meaning: "to make" },
    { word: "住[す]む", reading: "すむ", meaning: "to live (somewhere)" },
    { word: "好[す]き", reading: "すき", meaning: "liked; favourite (na-adj)" },
    { word: "母[はは]", reading: "はは", meaning: "(my) mother" },
    { word: "父[ちち]", reading: "ちち", meaning: "(my) father" },
  ],
  blocks: [
    {
      type: "prose",
      text: "English puts relative clauses **after** the noun: 'the person **who eats sushi**'. Japanese puts the describing clause **directly before** the noun — no {{who}} / {{that}} / {{which}}. Once you see the pattern, you can talk about people and places you know with one tight phrase.",
    },
    {
      type: "heading",
      text: "Clause + noun",
    },
    {
      type: "rule",
      title: "Build order",
      items: [
        "Write a normal sentence, then drop any final {{だ}} if needed and place it **before** the noun.",
        "{{人が寿司を食べる}} → take {{寿司を食べる}} + {{人}} → {{寿司を食べる人}}",
        "The clause stays in plain form (dictionary / past / negative) — not {{ます}} — when it modifies a noun.",
      ],
    },
    {
      type: "examples",
      title: "Describing people",
      items: [
        { jp: "食[た]べる人[ひと]", en: "a person who eats" },
        { jp: "寿司[すし]を食[た]べる人[ひと]", en: "a person who eats sushi" },
        { jp: "日本語[にほんご]を話[はな]す人[ひと]", en: "a person who speaks Japanese" },
        { jp: "東京[とうきょう]に住[す]む友達[ともだち]", en: "a friend who lives in Tokyo" },
      ],
    },
    {
      type: "examples",
      title: "Describing things & places",
      items: [
        { jp: "昨日[きのう]買[か]った本[ほん]", en: "the book (I) bought yesterday" },
        { jp: "母[はは]が作[つく]る料理[りょうり]", en: "the food Mum makes" },
        { jp: "好[す]きな映画[えいが]", en: "a favourite movie (liked movie)" },
        { jp: "静[しず]かな喫茶店[きっさてん]", en: "a quiet café" },
      ],
    },
    {
      type: "heading",
      text: "Using the phrase in a full sentence",
    },
    {
      type: "prose",
      text: "The clause+noun bundle acts like any noun: add particles and a predicate at the end.",
    },
    {
      type: "examples",
      items: [
        {
          jp: "寿司[すし]を食[た]べる人[ひと]は友達[ともだち]だ。",
          en: "The person who eats sushi is a friend.",
        },
        {
          jp: "昨日[きのう]買[か]った本[ほん]を読[よ]んだ。",
          en: "(I) read the book (I) bought yesterday.",
        },
        {
          jp: "東京[とうきょう]に住[す]む人[ひと]に会[あ]った。",
          en: "(I) met a person who lives in Tokyo.",
        },
      ],
    },
    {
      type: "dialogue",
      title: "Talking about a restaurant",
      lines: [
        { speaker: "A", jp: "あの店[みせ]は何[なん]ですか。", en: "What's that shop?" },
        {
          speaker: "B",
          jp: "友達[ともだち]が好[す]きな寿司[すし]屋[や]です。",
          en: "It's a sushi place my friend likes.",
        },
        {
          speaker: "A",
          jp: "昨日[きのう]行[い]ったカフェもいいですよ。",
          en: "The café (I) went to yesterday is good too.",
        },
      ],
    },
    {
      type: "note",
      text: "Inside the relative clause, subjects often take {{が}} (not {{は}}): {{母が作る料理}}. {{は}} marks the bigger topic of the whole sentence.",
    },
    {
      type: "tip",
      text: "Keep modifiers short at first: time + verb + noun ({{昨日買った本}}) is enough for N5 fluency.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Where does the relative clause go in Japanese?",
      choices: ["After the noun", "Before the noun", "After です only", "Separated by が"],
      answer: 1,
      explanation: "Clause directly before the noun — no relative pronoun.",
    },
    {
      kind: "mc",
      prompt: "寿司を食べる人 means…",
      choices: [
        "Sushi eats a person",
        "A person who eats sushi",
        "Eat the person's sushi",
        "A person is sushi",
      ],
      answer: 1,
      explanation: "Clause 寿司を食べる modifies 人.",
    },
    {
      kind: "mc",
      prompt: "Which is natural for 'the book I bought yesterday'?",
      choices: [
        "本を昨日買った",
        "昨日買った本",
        "買った昨日本",
        "本昨日を買ったの",
      ],
      answer: 1,
      explanation: "Yesterday-bought + book → 昨日買った本.",
    },
    {
      kind: "fill",
      prompt: "Fill the noun: 日本語を話す◯ (person)",
      answers: ["人", "ひと"],
      explanation: "話す人 — person who speaks.",
    },
    {
      kind: "order",
      prompt: "Build: 'the friend who lives in Tokyo'",
      tiles: ["東京[とうきょう]に", "住[す]む", "友達[ともだち]"],
      distractors: ["は", "です"],
      explanation: "Place + verb + noun.",
    },
    {
      kind: "mc",
      prompt: "Relative clauses that modify nouns usually use…",
      choices: ["ます-form", "plain form", "てください only", "English word order"],
      answer: 1,
      explanation: "Plain (dictionary/past/negative) before the noun; ます is for the main predicate.",
    },
  ],
  drills: [
    { id: "clause-person", prompt: "Modify 人 — 'person who eats sushi'", jp: "人[ひと]", answers: ["寿司[すし]を食[た]べる人[ひと]"] },
    { id: "clause-book", prompt: "Modify 本 — 'book bought yesterday'", jp: "本[ほん]", answers: ["昨日[きのう]買[か]った本[ほん]"] },
    { id: "clause-friend", prompt: "Modify 友達 — 'friend who lives in Tokyo'", jp: "友達[ともだち]", answers: ["東京[とうきょう]に住[す]む友達[ともだち]"] },
    { id: "clause-movie", prompt: "Modify 映画 — 'favourite movie'", jp: "映画[えいが]", answers: ["好[す]きな映画[えいが]"] },
    { id: "ga-inside", prompt: "Fill the particle inside the clause", jp: "母[はは]◯作[つく]る料理[りょうり]", answers: ["が"] },
  ],
};
