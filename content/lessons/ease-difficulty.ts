import type { Lesson } from "../types";

export const easeDifficulty: Lesson = {
  id: "ease-difficulty",
  stage: "n2",
  order: 1,
  title: "Easy & Hard To Do",
  subtitle: "やすい · にくい · がたい · づらい",
  summary:
    "Describe how easy or hard actions feel in career talk and polite debate — plus emotional づらい and 'without doing' ないで／ずに. Literary ん／ぬ negatives are in Literary Negatives.",
  estMinutes: 18,
  vocabulary: [
    { word: "読[よ]む", reading: "よむ", meaning: "to read" },
    { word: "分[わ]かる", reading: "わかる", meaning: "to understand" },
    { word: "信[しん]じる", reading: "しんじる", meaning: "to believe" },
    { word: "言[い]う", reading: "いう", meaning: "to say" },
    { word: "断[ことわ]る", reading: "ことわる", meaning: "to decline; refuse" },
    { word: "説明[せつめい]", reading: "せつめい", meaning: "explanation" },
    { word: "提案[ていあん]", reading: "ていあん", meaning: "proposal; suggestion" },
    { word: "避[さ]ける", reading: "さける", meaning: "to avoid" },
    { word: "解[と]く", reading: "とく", meaning: "to solve (u-verb)" },
  ],
  blocks: [
    {
      type: "prose",
      text: "These suffixes attach to the **ます-stem** and behave like i-adjectives. In career and debate contexts they describe whether a task, explanation, or refusal is easy, hard, nearly impossible, or emotionally awkward.",
    },
    {
      type: "rule",
      title: "The four suffixes",
      items: [
        "**{{やすい}}** — easy to do: {{分かりやすい}} — easy to understand.",
        "**{{にくい}}** — hard to do (objective): {{読みにくい}} — hard to read.",
        "**{{がたい}}** — hard / nearly impossible (formal): {{信じがたい}} — hard to believe.",
        "**{{づらい}}** — psychologically awkward: {{断りづらい}} — hard to refuse.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "この提案[ていあん]書[しょ]は読[よ]みやすい。", en: "This proposal document is easy to read." },
        { jp: "説明[せつめい]が長[なが]すぎて分[わ]かりにくい。", en: "The explanation is too long and hard to follow." },
        { jp: "彼[かれ]の主張[しゅちょう]は信[しん]じがたい。", en: "His claim is hard to believe." },
        { jp: "上司[じょうし]には断[ことわ]りづらい。", en: "It's awkward to refuse the boss." },
      ],
    },
    {
      type: "table",
      caption: "にくい vs づらい vs がたい",
      headers: ["Suffix", "Focus", "Example"],
      rows: [
        ["にくい", "objective difficulty", "分かりにくい (hard to understand — unclear)"],
        ["づらい", "social / emotional awkwardness", "断りづらい (hard to refuse)"],
        ["がたい", "formal; nearly impossible", "信じがたい (hard to believe)"],
        ["やすい", "easy by nature", "使いやすい (easy to use)"],
      ],
    },
    {
      type: "rule",
      title: "They conjugate like i-adjectives",
      items: [
        "Negative: {{分かりにくくない}}.",
        "Past: {{説明しやすかった}}.",
        "Adverb: {{分かりにくく書いてある}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "この問題[もんだい]は解[と]きにくくない。", en: "This problem isn't hard to solve." },
        { jp: "彼[かれ]の態度[たいど]は理解[りかい]しがたい。", en: "His attitude is hard to understand. (formal)" },
        { jp: "避[さ]けがたい責任[せきにん]だ。", en: "It's a responsibility that's hard to avoid." },
      ],
    },
    {
      type: "heading",
      text: "Without doing: 〜ないで・〜ずに",
    },
    {
      type: "rule",
      title: "Two ways to say 'without doing X'",
      items: [
        "**Negative + {{で}}**: {{説明しないで決めた}} — 'decided without explaining.'",
        "**{{〜ずに}}** — written twin: replace {{ない}} with {{ず}}: {{言わずに}}, {{せずに}}.",
        "{{する}} → {{せず（に）}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "相談[そうだん]しないで、決[き]めてしまった。", en: "I ended up deciding without consulting anyone." },
        { jp: "感情[かんじょう]を出[だ]さずに、議論[ぎろん]した。", en: "We debated without showing emotion." },
      ],
    },
    {
      type: "note",
      text: "Old-school negatives {{ん}} / {{ぬ}} ({{知らん}}, {{ならぬ}}) moved to the **Literary Negatives** lesson — recognize them there, not here.",
    },
    {
      type: "dialogue",
      title: "Polite debate friction",
      lines: [
        { speaker: "A", jp: "その案[あん]、ちょっと賛同[さんどう]しづらいな。", en: "That proposal is a bit hard for me to get behind." },
        { speaker: "B", jp: "どこが分[わ]かりにくい？", en: "Which part is hard to follow?" },
        { speaker: "A", jp: "数字[すうじ]の根拠[こんきょ]が信[しん]じがたいんだ。", en: "The basis for the numbers is hard to believe." },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Easy to read」?",
      choices: ["読みやすい", "読みにくい", "読みそう", "読みたい"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Psychologically awkward 'hard to refuse'?",
      choices: ["断りにくい only", "断りづらい", "断りがたい only", "断りやすい"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Suffix attaches to…",
      choices: ["dictionary form", "ます-stem", "te-form", "past tense"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Past: 「Was easy to explain」?",
      choices: ["説明しやすい", "説明しやすかった", "説明しやすく", "説明しやすいだった"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "避けがたい means…",
      choices: ["easy to avoid", "hard to avoid / unavoidable", "avoided already", "must avoid"],
      answer: 1,
    },
    {
      kind: "fill",
      prompt: "「I decided without consulting」 — fill with literary 'without'",
      promptJp: "相談せ（　）に決めた。",
      answers: ["ず"],
      explanation: "する → せずに.",
    },
    {
      kind: "order",
      prompt: "Build: 'This explanation is hard to understand'",
      tiles: ["この説明[せつめい]は", "分[わ]かり", "にくい"],
      distractors: ["分[わ]かるにくい"],
      explanation: "にくい attaches to the stem: 分かり + にくい.",
    },
  ],
  drills: [
    { id: "yasui", prompt: "Add 'easy to' — 'easy to understand'", jp: "分[わ]かる", answers: ["分[わ]かりやすい"] },
    { id: "nikui", prompt: "Add 'hard to' — 'hard to read'", jp: "読[よ]む", answers: ["読[よ]みにくい"] },
    { id: "gatai", prompt: "Add 'scarcely possible to' — 'hard to believe'", jp: "信[しん]じる", answers: ["信[しん]じがたい"] },
    { id: "zurai", prompt: "Add emotional 'hard to' — 'hard to refuse'", jp: "断[ことわ]る", answers: ["断[ことわ]りづらい"] },
    { id: "zuni", prompt: "Say 'without saying' — written style", jp: "言[い]う", answers: ["言[い]わずに"] },
  ],
};
