import type { Lesson } from "../types";

export const similarPointsContrast: Lesson = {
  id: "similar-points-contrast",
  stage: "n2",
  order: 6,
  title: "Similar Points, Different Nuance",
  subtitle: "はず · わけ · ようだ · らしい · そう · みたい · だけ · しか · ばかり",
  summary:
    "Sort look-alike patterns: expectation vs explanation, hearsay vs appearance, and exclusive amounts.",
  estMinutes: 20,
  vocabulary: [
    { word: "はず", reading: "はず", meaning: "expectation; should be" },
    { word: "わけ", reading: "わけ", meaning: "reason; conclusion that follows" },
    { word: "らしい", reading: "らしい", meaning: "seems; I hear; typical of" },
    { word: "転職[てんしょく]", reading: "てんしょく", meaning: "job change" },
    { word: "雨[あめ]", reading: "あめ", meaning: "rain" },
    { word: "残業[ざんぎょう]", reading: "ざんぎょう", meaning: "overtime" },
    { word: "文句[もんく]", reading: "もんく", meaning: "complaint" },
    { word: "書類[しょるい]", reading: "しょるい", meaning: "documents" },
    { word: "電車[でんしゃ]", reading: "でんしゃ", meaning: "train" },
    { word: "天気予報[てんきよほう]", reading: "てんきよほう", meaning: "weather forecast" },
  ],
  blocks: [
    {
      type: "prose",
      text: "N2 is full of **near-twins**. This lesson lines them up side by side so you pick by nuance, not by translation alone.",
    },
    {
      type: "heading",
      text: "はず vs わけ vs ようだ",
    },
    {
      type: "rule",
      title: "Expectation, logic, appearance",
      items: [
        "**{{はず}}** — based on what I know, it **should** be so: {{今ごろ着いているはずだ}}.",
        "**{{わけ}}** — logical conclusion / 'so that means…': {{つまり、行けないわけだ}}.",
        "**{{ようだ}}** — speaker's **impression / judgment** from evidence: {{熱があるようだ}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "彼[かれ]はもう家[いえ]に着[つ]いているはずだ。", en: "He should already be home (by my calculation)." },
        { jp: "電車[でんしゃ]が止[と]まった。だから遅[おく]れたわけだ。", en: "The train stopped. So that explains why I was late." },
        { jp: "彼[かれ]は疲[つか]れているようだ。", en: "He seems tired (from what I can tell)." },
      ],
    },
    {
      type: "heading",
      text: "らしい vs そう vs みたい",
    },
    {
      type: "rule",
      title: "Hearsay and looks",
      items: [
        "**{{らしい}}** — hearsay or 'typical of X': {{合格したらしい}}, {{学生らしい生活}}.",
        "**{{〜そうだ}} (stem)** — looks like (visual prediction): {{雨が降りそうだ}}.",
        "**{{〜そうだ}} (plain + そう)** — hearsay report: {{雨が降るそうだ}}.",
        "**{{みたい}}** — casual 'seems / like': {{疲れてるみたい}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "彼[かれ]、転職[てんしょく]するらしいよ。", en: "I hear he's changing jobs." },
        { jp: "今日[きょう]は雨[あめ]が降[ふ]りそうだ。", en: "It looks like it might rain today." },
        { jp: "天気予報[てんきよほう]によると、明日[あした]は晴[は]れるそうだ。", en: "According to the forecast, it will be sunny tomorrow (hearsay そう)." },
        { jp: "この書類[しょるい]、間違[まちが]ってるみたい。", en: "These documents seem wrong." },
      ],
    },
    {
      type: "heading",
      text: "だけ vs しか vs ばかり",
    },
    {
      type: "rule",
      title: "Only / nothing but",
      items: [
        "**{{だけ}}** — only (neutral amount): {{水だけ飲む}}.",
        "**{{しか}}** — only (with **negative** verb): {{水しか飲まない}} — nothing but water.",
        "**{{ばかり}}** — nothing but / always doing: {{文句ばかり言う}}, {{食べたばかり}} (just did — different sense).",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "週末[しゅうまつ]は家[いえ]で休[やす]むだけだ。", en: "On weekends I only rest at home." },
        { jp: "千円[せんえん]しか持[も]っていない。", en: "I only have 1000 yen (and that's not much)." },
        { jp: "最近[さいきん]、残業[ざんぎょう]ばかりだ。", en: "Lately it's nothing but overtime." },
        { jp: "着[つ]いたばかりなのに、もう仕事[しごと]の話[はなし]？", en: "I just arrived, and already work talk?" },
      ],
    },
    {
      type: "table",
      caption: "A vs B cheat sheet",
      headers: ["A", "B", "Difference"],
      rows: [
        ["はず", "わけ", "should-be vs logical so-that-means"],
        ["ようだ", "みたい", "similar; みたい more casual"],
        ["らしい", "そう (hearsay)", "both report; らしい also 'typical of'"],
        ["そう (stem)", "ようだ", "looks about to vs general impression"],
        ["だけ", "しか〜ない", "neutral only vs only+neg nuance"],
        ["ばかり", "だけ", "excess/always vs mere only"],
      ],
    },
    {
      type: "tip",
      text: "If you can swap two forms and the feeling changes (blame, hearsay source, softener), you picked the useful contrast — that's N2 naturalness.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「He should be home by now」?",
      choices: ["家にいるわけだ (only logic)", "家にいるはずだ", "家にいるみたいだけ always", "家にいるそう (stem)"],
      answer: 1,
      explanation: "はず = expectation from known facts.",
    },
    {
      kind: "mc",
      prompt: "Only + negative verb?",
      choices: ["だけ", "しか", "ばかり always", "はず"],
      answer: 1,
      explanation: "しか pairs with a negative predicate.",
    },
    {
      kind: "mc",
      prompt: "Looks like rain (visual)?",
      choices: ["雨が降るそうだ (hearsay)", "雨が降りそうだ", "雨が降るらしい only", "雨が降るわけだ"],
      answer: 1,
      explanation: "Verb stem + そう = appearance.",
    },
    {
      kind: "fill",
      prompt: "Complete — 'nothing but complaints':",
      promptJp: "文句[もんく]◯言[い]う",
      answers: ["ばかり"],
      explanation: "ばかり = always / nothing but.",
    },
    {
      kind: "order",
      prompt: "Build: 'I only have 1000 yen'",
      tiles: ["千円[せんえん]", "しか", "持[も]っていない"],
      distractors: ["だけ"],
      explanation: "しか + negative.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "彼[かれ]は疲[つか]れているようだ",
      explanation: "彼は疲れているようだ — He seems tired.",
    },
  ],
  drills: [
    { id: "hazu", prompt: "Expectation — fill", jp: "今[いま]ごろ着[つ]いている◯だ", answers: ["はず"] },
    { id: "wake", prompt: "Logical conclusion — fill", jp: "だから遅[おく]れた◯だ", answers: ["わけ"] },
    { id: "sou-appearance", prompt: "Looks about to rain — stem form", jp: "雨[あめ]が降[ふ]り◯だ", answers: ["そう"] },
    { id: "shika", prompt: "Only with negative — fill", jp: "水[みず]◯飲[の]まない", answers: ["しか"] },
    { id: "bakari", prompt: "Nothing but overtime — fill", jp: "残業[ざんぎょう]◯だ", answers: ["ばかり"] },
  ],
};
