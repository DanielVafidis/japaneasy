import type { Lesson } from "../types";

export const contrastNoni: Lesson = {
  id: "contrast-noni",
  stage: "n3",
  order: 10,
  title: "Contrast with のに",
  subtitle: "Although · unexpected outcomes",
  summary:
    "Express 'even though / despite' with のに — and how it differs from softer けど when something goes against expectation.",
  estMinutes: 15,
  vocabulary: [
    { word: "勉強[べんきょう]", reading: "べんきょう", meaning: "study" },
    { word: "合格[ごうかく]", reading: "ごうかく", meaning: "passing (an exam)" },
    { word: "約束[やくそく]", reading: "やくそく", meaning: "promise; appointment" },
    { word: "試験[しけん]", reading: "しけん", meaning: "exam; test" },
    { word: "高[たか]い", reading: "たかい", meaning: "expensive; high" },
    { word: "買[か]う", reading: "かう", meaning: "to buy" },
    { word: "疲[つか]れる", reading: "つかれる", meaning: "to get tired" },
    { word: "頑張[がんば]る", reading: "がんばる", meaning: "to do one's best" },
    { word: "質[しつ]", reading: "しつ", meaning: "quality" },
    { word: "点[てん]", reading: "てん", meaning: "score; points" },
  ],
  blocks: [
    {
      type: "prose",
      text: "{{のに}} links two clauses with **contrast against expectation**: 'even though A, B (and that surprises or frustrates me).' It often carries emotion — annoyance, disappointment, or irony — more than plain {{けど}}.",
    },
    {
      type: "rule",
      title: "Forming のに",
      items: [
        "**Verbs / i-adjectives:** plain form + {{のに}}. {{行ったのに}}, {{高いのに}}.",
        "**Na-adjectives / nouns:** {{なのに}}. {{暇なのに}}, {{学生なのに}}.",
        "Past and negative work the same: {{勉強したのに}}, {{来ないのに}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "たくさん勉強[べんきょう]したのに、合格[ごうかく]できなかった。", en: "Even though I studied a lot, I couldn't pass." },
        { jp: "約束[やくそく]したのに、来[こ]なかった。", en: "Even though we had plans, (they) didn't come." },
        { jp: "高[たか]いのに、どうして買[か]ったの？", en: "Even though it's expensive, why did you buy it?" },
        { jp: "疲[つか]れているのに、まだ頑張[がんば]っている。", en: "Even though (I'm) tired, (I'm) still pushing on." },
      ],
    },
    {
      type: "heading",
      text: "のに vs けど",
    },
    {
      type: "rule",
      title: "Which contrast?",
      items: [
        "**{{けど／けれど／が}}** — mild contrast or softener; can lead into a request: {{忙しいけど、大丈夫？}}.",
        "**{{のに}}** — stronger 'despite that'; often **unexpected or regrettable** B after A.",
        "{{のに}} at sentence end: hanging frustration — {{言ったのに…}} 'I told you, though…'",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "安[やす]いけど、質[しつ]はまあまあ。", en: "It's cheap, but the quality is so-so. (mild)" },
        { jp: "安[やす]いのに、質[しつ]がとてもいい。", en: "Even though it's cheap, the quality is really good. (surprising)" },
        { jp: "教[おし]えたのに…。", en: "Even though I taught (you)… (implied: you still got it wrong)" },
      ],
    },
    {
      type: "dialogue",
      title: "Unexpected outcomes",
      lines: [
        { speaker: "A", jp: "試験[しけん]、どうだった？", en: "How was the exam?" },
        { speaker: "B", jp: "頑張[がんば]ったのに、点[てん]が低[ひく]かった…。", en: "Even though I tried hard, my score was low…" },
        { speaker: "A", jp: "え、あんなに勉強[べんきょう]してたのに？", en: "What? Even though you studied that much?" },
        { speaker: "B", jp: "うん。次[つぎ]はもうちょっと対策[たいさく]する。", en: "Yeah. Next time I'll prepare a bit better." },
      ],
    },
    {
      type: "table",
      caption: "Contrast choices",
      headers: ["Connector", "Nuance", "Example"],
      rows: [
        ["けど", "Soft but / lead-in", "行きたいけど時間がない"],
        ["が", "Written / polite but", "行きたいが…"],
        ["のに", "Despite expectation", "行ったのに会えなかった"],
      ],
    },
    {
      type: "note",
      text: "Don't use {{のに}} for simple soft refusals the way {{けど}} works. {{今日はちょっと…}} + {{けど}} is natural; ending a soft refusal with {{のに}} can sound odd or accusatory.",
    },
    {
      type: "tip",
      text: "Opinion + surprise: {{便利なのに誰も使わない}} — 'Even though it's convenient, nobody uses it.' Great for reviews and complaints.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Even though I studied, I failed」 connector?",
      choices: ["から", "ので", "のに", "ために"],
      answer: 2,
      explanation: "のに marks contrast against expectation.",
    },
    {
      kind: "mc",
      prompt: "Noun / na-adjective before のに?",
      choices: ["学生のに", "学生なのに", "学生だのに only wrong always", "学生でのに"],
      answer: 1,
      explanation: "Nouns and na-adjectives take なのに.",
    },
    {
      kind: "mc",
      prompt: "Stronger 'despite / unexpectedly'?",
      choices: ["けど", "のに", "と", "ので"],
      answer: 1,
      explanation: "のに is the surprise/frustration contrast.",
    },
    {
      kind: "fill",
      prompt: "Complete — 'even though it's expensive':",
      promptJp: "高[たか]い◯",
      answers: ["のに"],
      explanation: "i-adjective plain + のに.",
    },
    {
      kind: "order",
      prompt: "Build: 'Even though we promised, they didn't come'",
      tiles: ["約束[やくそく]した", "のに", "来[こ]なかった"],
      distractors: ["けど"],
      explanation: "したのに + unexpected 来なかった.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "勉強[べんきょう]したのに合格[ごうかく]できなかった",
      explanation: "勉強したのに合格できなかった — Studied but couldn't pass.",
    },
  ],
  drills: [
    { id: "noni-verb", prompt: "Connect with のに — 'went but…'", jp: "行[い]った◯会[あ]えなかった", answers: ["のに"] },
    { id: "noni-iadj", prompt: "Connect — 'expensive but…'", jp: "高[たか]い◯買[か]った", answers: ["のに"] },
    { id: "noni-na", prompt: "Noun form — 'even though a student'", jp: "学生[がくせい]◯", answers: ["なのに"] },
    { id: "noni-negative", prompt: "Connect — 'doesn't come even though…'", jp: "約束[やくそく]した◯来[こ]ない", answers: ["のに"] },
    { id: "noni-vs-kedo", prompt: "Stronger unexpected contrast — pick form", jp: "頑張[がんば]った◯点[てん]が低[ひく]い", answers: ["のに"] },
  ],
};
