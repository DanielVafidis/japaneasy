import type { Lesson } from "../types";

export const numbersCounting: Lesson = {
  id: "numbers-counting",
  stage: "essential-grammar",
  order: 17,
  title: "Numbers & Counting",
  subtitle: "1–万 · counters · dates",
  summary:
    "Japanese counts in fours (万), uses sound changes (ろっぴゃく), and attaches counters to nouns.",
  estMinutes: 18,
  vocabulary: [
    { word: "一[いち]", reading: "いち", meaning: "one" },
    { word: "十[じゅう]", reading: "じゅう", meaning: "ten" },
    { word: "百[ひゃく]", reading: "ひゃく", meaning: "hundred" },
    { word: "千[せん]", reading: "せん", meaning: "thousand" },
    { word: "万[まん]", reading: "まん", meaning: "ten thousand" },
    { word: "二[に]つ", reading: "ふたつ", meaning: "two (things)" },
    { word: "人[にん]", reading: "にん", meaning: "counter for people" },
    { word: "二人[ふたり]", reading: "ふたり", meaning: "two people" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Counting **numbers alone** is straightforward: combine 1–10 into larger units — {{三十一}} (31), {{五十四}} (54). Prefer {{よん}} over {{し}} and {{なな}} over {{しち}} after 10.",
    },
    {
      type: "table",
      caption: "Core number words",
      headers: ["Value", "Kanji", "Reading"],
      rows: [
        ["1–10", "一…十", "いち…じゅう"],
        ["100", "百", "ひゃく (→ ひゃく, びゃく, ぴゃく)"],
        ["1,000", "千", "せん (→ せん, ぜん)"],
        ["10,000", "万", "まん"],
      ],
    },
    {
      type: "rule",
      title: "Sound changes (memorise these)",
      items: [
        "300 = {{さんびゃく}}, 600 = {{ろっぴゃく}}, 800 = {{はっぴゃく}}.",
        "3000 = {{さんぜん}}, 8000 = {{はっせん}}.",
        "Units jump in **fours**: 1万 → … → 9999万 → 1億.",
      ],
    },
    {
      type: "heading",
      text: "Counters (助数詞)",
    },
    {
      type: "prose",
      text: "To count **things**, attach a **counter** after the number. The counter often has its own reading.",
    },
    {
      type: "table",
      caption: "Essential counters",
      headers: ["Counter", "Use", "Example"],
      rows: [
        ["〜つ", "generic things (1–9)", "一つ、二つ、三つ"],
        ["〜人 (にん/り)", "people", "一人、二人 (ふたり)"],
        ["〜枚 (まい)", "flat objects", "一枚 (one sheet)"],
        ["〜本 (ほん)", "long objects", "一本 (one pencil)"],
        ["〜個 (こ)", "small items", "一個"],
      ],
    },
    {
      type: "heading",
      text: "Dates",
    },
    {
      type: "rule",
      title: "Year · month · day",
      items: [
        "Year: number + {{年[ねん]}} — {{2024年}}.",
        "Month: number + {{月[がつ]}} — watch {{4月=しがつ}}, {{7月=しちがつ}}, {{9月=くがつ}}.",
        "Day: number + {{日[にち]}} — 1st = {{ついたち}}, 2–10, 14, 20, 24 have special readings.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "りんごを三[みっ]つください。", en: "Three apples, please." },
        { jp: "二人[ふたり]で行[い]きます。", en: "We'll go as two people / the two of us." },
        { jp: "三月[さんがつ]五日[いつか]です。", en: "It's March 5th." },
      ],
    },
    {
      type: "tip",
      text: "When in doubt, {{〜つ}} (hitotsu, futatsu…) works for many small objects in daily speech — not for people, flat things, or machines.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "300 in Japanese?",
      choices: ["さんひゃく", "さんびゃく", "みひゃく", "さんぴゃく"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Two people (special reading)?",
      choices: ["二にん", "二人 (ふたり)", "二つ", "二り"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "10,000 unit in Japanese counting?",
      choices: ["千", "万", "百", "億"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Counter for flat things (paper, plates)?",
      choices: ["〜本", "〜枚", "〜人", "〜つ"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'Three apples, please'",
      tiles: ["りんごを", "三[みっ]つ", "ください"],
      distractors: ["三人[さんにん]"],
      explanation: "Generic objects use the native counter みっつ; 三人 counts people.",
    },
  ],
  drills: [
    { id: "sanbyaku", prompt: "Type the reading — sound change", jp: "三百", answers: ["さんびゃく"] },
    { id: "roppyaku", prompt: "Type the reading — sound change", jp: "六百", answers: ["ろっぴゃく"] },
    { id: "hassen", prompt: "Type the reading — sound change", jp: "八千", answers: ["はっせん"] },
    { id: "futatsu", prompt: "Type the reading — counting things", jp: "二つ", answers: ["ふたつ"] },
    { id: "man", prompt: "Type — 'ten thousand'", jp: "？", answers: ["万[まん]", "一万[いちまん]"] },
  ],
};
