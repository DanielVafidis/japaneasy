import type { Lesson } from "../types";

export const relativeClauses: Lesson = {
  id: "relative-clauses",
  stage: "basic-grammar",
  order: 8,
  title: "Relative Clauses & Sentence Order",
  subtitle: "Describing nouns with whole sentences",
  summary:
    "Place a full clause directly in front of a noun to describe it — and learn how flexible word order really is.",
  estMinutes: 14,
  vocabulary: [
    { word: "食べる", reading: "たべる", meaning: "to eat" },
    { word: "人", reading: "ひと", meaning: "person" },
    { word: "寿司", reading: "すし", meaning: "sushi" },
    { word: "昨日", reading: "きのう", meaning: "yesterday" },
    { word: "買う", reading: "かう", meaning: "to buy" },
    { word: "本", reading: "ほん", meaning: "book" },
  ],
  blocks: [
    {
      type: "prose",
      text: "In English we describe a noun with 'who/that/which' clauses *after* the noun: 'the person **who eats**'. In Japanese, the describing clause goes **directly before** the noun — no relative pronoun needed.",
    },
    {
      type: "examples",
      title: "Clause + noun",
      items: [
        { jp: "食[た]べる人[ひと]。", en: "The person who eats." },
        { jp: "寿司[すし]を食[た]べる人[ひと]。", en: "The person who eats sushi." },
        { jp: "昨日[きのう]買[か]った本[ほん]。", en: "The book (I) bought yesterday." },
      ],
    },
    {
      type: "prose",
      text: "Any conjugated clause works — past, negative, anything — as long as it sits right in front of the noun it modifies.",
    },
    {
      type: "examples",
      items: [
        { jp: "食[た]べない人[ひと]。", en: "The person who does not eat." },
        { jp: "昨日[きのう]食[た]べた寿司[すし]。", en: "The sushi (I) ate yesterday." },
      ],
    },
    {
      type: "heading",
      text: "Sentence order",
    },
    {
      type: "prose",
      text: "Japanese is fundamentally **Subject–Object–Verb**: the verb comes last. But because particles label each word's role, the order of the labelled phrases is flexible. What must stay put is the verb at the end.",
    },
    {
      type: "examples",
      items: [
        { jp: "アリスが寿司[すし]を食[た]べる。", en: "Alice eats sushi." },
        { jp: "寿司[すし]をアリスが食[た]べる。", en: "Same meaning — object moved first for emphasis." },
      ],
    },
    {
      type: "tip",
      text: "Reading tip: when a sentence feels long, look for the final verb first — it tells you the core action, then work backward through the particles.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Where does a describing clause go relative to its noun?",
      choices: [
        "After the noun (like English)",
        "Directly before the noun",
        "At the end of the sentence",
        "It must use a relative pronoun",
      ],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Which means 'the person who eats sushi'?",
      choices: [
        "人が寿司を食べる",
        "寿司を食べる人",
        "人を食べる寿司",
        "寿司の人を食べる",
      ],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Japanese basic word order is...",
      choices: [
        "Subject–Verb–Object",
        "Verb–Subject–Object",
        "Subject–Object–Verb (verb last)",
        "Completely random",
      ],
      answer: 2,
    },
    {
      kind: "fill",
      prompt: "Translate 'the book I bought yesterday' (昨日 / 買った / 本). Type the Japanese:",
      answers: ["昨日買った本", "きのうかった本", "昨日買った本。"],
    },
  ],
};
