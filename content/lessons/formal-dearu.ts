import type { Lesson } from "../types";

export const formalDearu: Lesson = {
  id: "formal-dearu",
  stage: "n2",
  order: 4,
  title: "Formal である",
  subtitle: "Written-style copula for essays and debate",
  summary:
    "Replace だ with である in career writing and polite debate — reports, proposals, and reasoned conclusions.",
  estMinutes: 18,
  vocabulary: [
    { word: "問題[もんだい]", reading: "もんだい", meaning: "problem" },
    { word: "結論[けつろん]", reading: "けつろん", meaning: "conclusion" },
    { word: "事実[じじつ]", reading: "じじつ", meaning: "fact" },
    { word: "重要[じゅうよう]", reading: "じゅうよう", meaning: "important" },
    { word: "提案[ていあん]", reading: "ていあん", meaning: "proposal" },
    { word: "根拠[こんきょ]", reading: "こんきょ", meaning: "basis; grounds" },
  ],
  blocks: [
    {
      type: "prose",
      text: "{{である}} is the **written formal copula** — the counterpart of casual {{だ}} in essays, news, proposals, and debate write-ups. You won't hear it much in chat, but career documents live on it.",
    },
    {
      type: "rule",
      title: "Conjugation",
      items: [
        "Present: {{NOUN／na-adj + である}} — {{問題である}}.",
        "Negative: {{ではない}} / {{ではなく}} — {{妥当ではない}}.",
        "Past: {{であった}} — {{重要であった}}.",
        "Past negative: {{ではなかった}}.",
      ],
    },
    {
      type: "rule",
      title: "のである — explanatory formal",
      items: [
        "{{のである}} adds explanatory force: {{それが結論なのである}}.",
        "Spoken twin: {{んです}} / {{のです}}.",
      ],
    },
    {
      type: "rule",
      title: "である vs だ vs です",
      items: [
        "**だ** — casual plain; avoid in body text of reports.",
        "**です** — polite spoken / some business mail.",
        "**である** — academic, analysis, theses, formal debate prose.",
        "**でございます** — ultra-polite spoken — not the same register.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "これは事実[じじつ]である。", en: "This is a fact. (formal written)" },
        { jp: "本[ほん]提案[ていあん]の根拠[こんきょ]は、データである。", en: "The basis of this proposal is the data." },
        { jp: "その方法[ほうほう]は適切[てきせつ]ではない。", en: "That method is not appropriate." },
        { jp: "彼[かれ]の指摘[してき]は正[ただ]しかったのである。", en: "His point was correct (formal explanatory)." },
        { jp: "結論[けつろん]として、現状[げんじょう]維持[いじ]が最善[さいぜん]である。", en: "In conclusion, maintaining the status quo is best." },
      ],
    },
    {
      type: "dialogue",
      title: "Polite debate (written → spoken bridge)",
      lines: [
        { speaker: "A", jp: "報告書[ほうこくしょ]では「リスクである」と書[か]いてあるね。", en: "The report says 'it is a risk,' huh." },
        { speaker: "B", jp: "うん。会議[かいぎ]では「リスクです」で十分[じゅうぶん]だよ。", en: "Yeah. In the meeting, 'it's a risk' (です) is enough." },
      ],
    },
    {
      type: "note",
      text: "Avoid mixing {{である}} into polite conversation — it sounds stiff. Use it where the genre expects it: proposals, essays, formal conclusions.",
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
      prompt: "Academic paper copula?",
      choices: ["です", "である", "でございます", "だ"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'This proposal is important' (written style)",
      tiles: ["本[ほん]提案[ていあん]は", "重要[じゅうよう]", "である"],
      distractors: ["であるだ"],
      explanation: "である replaces だ — never both.",
    },
  ],
  drills: [
    { id: "dearu", prompt: "Make it written-formal", jp: "問題[もんだい]だ", answers: ["問題[もんだい]である"] },
    { id: "dewanai", prompt: "Written-formal negative", jp: "妥当[だとう]だ", answers: ["妥当[だとう]ではない"] },
    { id: "deatta", prompt: "Written-formal past", jp: "事実[じじつ]だ", answers: ["事実[じじつ]であった"] },
    { id: "nodearu", prompt: "Fill — explanatory formal", jp: "結論[けつろん]なの◯◯◯", answers: ["である"] },
  ],
};
