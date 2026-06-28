import type { Lesson } from "../types";

export const formalDearu: Lesson = {
  id: "formal-dearu",
  stage: "advanced-topics",
  order: 0,
  title: "Formal である",
  subtitle: "Written-style copula for essays and reports",
  summary:
    "Replace だ with である in formal writing — and learn でありません, であった, and のである.",
  estMinutes: 14,
  vocabulary: [
    { word: "問題[もんだい]", reading: "もんだい", meaning: "problem" },
    { word: "結論[けつろん]", reading: "けつろん", meaning: "conclusion" },
    { word: "事実[じじつ]", reading: "じじつ", meaning: "fact" },
    { word: "重要[じゅうよう]", reading: "じゅうよう", meaning: "important" },
  ],
  blocks: [
    {
      type: "prose",
      text: "{{である}} is the **written formal copula** — the counterpart of casual {{だ}} in essays, news, academic papers, and speeches. You won't hear it much in casual conversation, but you'll see it everywhere in print.",
    },
    {
      type: "rule",
      title: "Conjugation",
      items: [
        "Present: {{NOUN／ADJ-na + である}} — {{問題である}}.",
        "Negative: {{ではない}} / {{ではなく}} — {{問題ではない}}.",
        "Past: {{であった}} — {{重要[じゅうよう]であった}}.",
        "Past negative: {{ではなかった}}.",
      ],
    },
    {
      type: "rule",
      title: "のである — explanatory formal",
      items: [
        "{{のである}} adds an explanatory tone in writing: {{それが結論[けつろん]なのである}} — 'And that is the conclusion (I am explaining).'",
        "Spoken equivalent tends toward {{んです}} / {{のです}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "これは事実[じじつ]である。", en: "This is a fact. (formal written)" },
        { jp: "その方法[ほうほう]は適切[てきせつ]ではない。", en: "That method is not appropriate." },
        { jp: "彼[かれ]の指摘[してき]は正[ただ]しかったのである。", en: "His point was correct (formal explanatory)." },
      ],
    },
    {
      type: "note",
      text: "{{です}} is polite spoken style; {{である}} is formal written style. Avoid mixing {{である}} into polite conversation — it sounds stiff or literary.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Formal written equivalent of だ?",
      choices: ["です", "である", "でございます", "みたい"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Formal negative of 問題だ?",
      choices: ["問題じゃない", "問題ではない", "問題ない", "問題でありません"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Past formal: 重要だった → written style?",
      choices: ["重要であった", "重要でした", "重要だったである", "重要にあった"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "である is most common in…",
      choices: ["casual chat", "formal writing", "text messages", "anime only"],
      answer: 1,
    },
  ],
};
