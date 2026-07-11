import type { Lesson } from "../types";

export const verbStems: Lesson = {
  id: "verb-stems",
  stage: "n5",
  order: 9,
  title: "Verb Stems",
  subtitle: "The masu-stem — daily routines & に行く",
  summary:
    "Pull out the verb stem that sits under ます — then use it for polite speech and patterns like 見に行く (go to see).",
  estMinutes: 14,
  vocabulary: [
    { word: "食[た]べる", reading: "たべる", meaning: "to eat (ru-verb)" },
    { word: "泳[およ]ぐ", reading: "およぐ", meaning: "to swim (u-verb)" },
    { word: "見[み]る", reading: "みる", meaning: "to see; to watch" },
    { word: "行[い]く", reading: "いく", meaning: "to go" },
    { word: "会[あ]う", reading: "あう", meaning: "to meet (u-verb)" },
    { word: "遊[あそ]ぶ", reading: "あそぶ", meaning: "to play; hang out (u-verb)" },
    { word: "勉強[べんきょう]する", reading: "べんきょうする", meaning: "to study" },
    { word: "映画[えいが]", reading: "えいが", meaning: "movie" },
    { word: "休[やす]み", reading: "やすみ", meaning: "rest; holiday (also stem of 休む)" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Before {{ます}} there is the **stem** (masu-stem). Polite conjugations and many grammar patterns attach to this shape — not the dictionary form. Think of daily routines: {{食べます}}, {{泳ぎます}}, {{勉強します}} all hide a stem.",
    },
    {
      type: "heading",
      text: "Finding the stem",
    },
    {
      type: "rule",
      title: "By verb class",
      items: [
        "**Ru-verbs:** drop {{る}}. {{食[た]べる}} → stem {{食[た]べ}}",
        "**U-verbs:** change the final /u/ vowel to /i/. {{泳[およ]ぐ}} (oyo**gu**) → {{泳[およ]ぎ}} (oyo**gi**)",
        "**する** → stem {{し}}; **来[く]る** → stem {{来[き]}}",
      ],
    },
    {
      type: "table",
      caption: "Stems from a daily routine",
      headers: ["Dictionary", "Stem", "With ます"],
      rows: [
        ["起きる", "起き", "起きます"],
        ["食べる", "食べ", "食べます"],
        ["飲む", "飲み", "飲みます"],
        ["行く", "行き", "行きます"],
        ["会う", "会い", "会います"],
        ["遊ぶ", "遊び", "遊びます"],
        ["勉強する", "勉強し", "勉強します"],
      ],
    },
    {
      type: "examples",
      title: "Routine sentences (stem + ます)",
      items: [
        { jp: "毎朝[まいあさ]七[しち]時[じ]に起[お]きます。", en: "(I) get up at 7 every morning." },
        { jp: "お昼[ひる]にラーメンを食[た]べます。", en: "(I) eat ramen at lunch." },
        { jp: "夜[よる]に勉強[べんきょう]します。", en: "(I) study at night." },
      ],
    },
    {
      type: "heading",
      text: "Stem + に行く / に来る",
    },
    {
      type: "prose",
      text: "Attach {{に}} + a motion verb to the stem to say you go/come **for the purpose of** doing something — a very common daily-life pattern.",
    },
    {
      type: "rule",
      title: "Purpose of motion",
      items: [
        "stem + {{に}} + {{行[い]く}} / {{来[く]る}} / {{帰[かえ]る}}",
        "{{見[み]る}} → {{見[み]に行[い]く}} — go to see / watch",
        "{{食[た]べる}} → {{食[た]べに行[い]く}} — go to eat",
        "{{会[あ]う}} → {{会[あ]いに行[い]く}} — go to meet",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "映画[えいが]を見[み]に行[い]きます。", en: "(I) go (out) to watch a movie." },
        { jp: "友達[ともだち]に会[あ]いに行[い]った。", en: "(I) went to meet a friend." },
        { jp: "海[うみ]で泳[およ]ぎに行[い]く。", en: "(I) go swimming in the sea." },
        { jp: "遊[あそ]びに来[き]てください。", en: "Please come over (to hang out)." },
      ],
    },
    {
      type: "note",
      text: "The stem also shows up as a noun-like form: {{休[やす]み}} (a break / holiday) comes from {{休[やす]む}}. Not every stem is a free noun — but many are.",
    },
    {
      type: "tip",
      text: "If you can make {{ます}}, you already know the stem: just peel {{ます}} off. {{飲みます}} → {{飲み}}.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Stem of 食べる?",
      choices: ["食べ", "食べり", "食べう", "たべる"],
      answer: 0,
      explanation: "Ru-verb: drop る → 食べ.",
    },
    {
      kind: "mc",
      prompt: "Stem of 泳ぐ?",
      choices: ["泳ぎ", "泳が", "泳げ", "泳ぐ"],
      answer: 0,
      explanation: "U-verb: /u/ → /i/ → 泳ぎ.",
    },
    {
      kind: "fill",
      prompt: "Type the stem of 会う:",
      answers: ["会い", "あい"],
      explanation: "会う → 会い.",
    },
    {
      kind: "mc",
      prompt: "How do you say 'go to watch (a movie)' using the stem pattern?",
      choices: ["見に行く", "見るに行く", "見て行く", "見ますに行く"],
      answer: 0,
      explanation: "stem + に + 行く → 見に行く.",
    },
    {
      kind: "mc",
      prompt: "Stem of する?",
      choices: ["す", "し", "せ", "そ"],
      answer: 1,
      explanation: "する → し (します).",
    },
    {
      kind: "order",
      prompt: "Build: 'I go to eat ramen'",
      tiles: ["ラーメンを", "食[た]べに", "行[い]きます"],
      distractors: ["食[た]べて", "食[た]べるに"],
      explanation: "Object + stemに + motion verb.",
    },
  ],
  drills: [
    { id: "stem-ru", prompt: "Give the stem", jp: "食[た]べる", answers: ["食[た]べ"] },
    { id: "stem-u", prompt: "Give the stem", jp: "泳[およ]ぐ", answers: ["泳[およ]ぎ"] },
    { id: "stem-au", prompt: "Give the stem", jp: "会[あ]う", answers: ["会[あ]い"] },
    { id: "ni-iku", prompt: "Purpose — 'go to see'", jp: "見[み]る", answers: ["見[み]に行[い]く", "見[み]に行[い]きます"] },
    { id: "stem-suru", prompt: "Give the stem", jp: "勉強[べんきょう]する", answers: ["勉強[べんきょう]し"] },
  ],
};
