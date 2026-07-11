import type { Lesson } from "../types";

export const timeAndMama: Lesson = {
  id: "time-and-mama",
  stage: "n2",
  order: 2,
  title: "Time & Leaving As-Is",
  subtitle: "とき · 前/後 · 間 · まま · っぱなし",
  summary:
    "Pin life moments and lingering states — when, before, after, while — and things left unchanged in career and daily reflection.",
  estMinutes: 16,
  vocabulary: [
    { word: "時[とき]", reading: "とき", meaning: "when; time" },
    { word: "前[まえ]", reading: "まえ", meaning: "before" },
    { word: "後[あと]", reading: "あと", meaning: "after" },
    { word: "間[あいだ]", reading: "あいだ", meaning: "while; between; during" },
    { word: "まま", reading: "まま", meaning: "as is; unchanged state" },
    { word: "っぱなし", reading: "っぱなし", meaning: "left on / undone (colloquial)" },
    { word: "窓[まど]", reading: "まど", meaning: "window" },
    { word: "転職[てんしょく]", reading: "てんしょく", meaning: "changing jobs" },
  ],
  blocks: [
    {
      type: "heading",
      text: "When: とき",
    },
    {
      type: "rule",
      title: "Plain form + とき",
      items: [
        "**Non-past:** dictionary — {{悩むとき}} (when (I) worry).",
        "**Past / completed:** {{た-form}} — {{転職したとき}} (when I changed jobs).",
        "**Na-adj / noun:** {{な}} / {{の}} — {{暇なとき}} · {{学生のとき}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "若[わか]い時[とき]、もっと挑戦[ちょうせん]すればよかった。", en: "When I was young, I wish I'd taken more risks." },
        { jp: "分[わ]からない時[とき]は、すぐに聞[き]くべきだ。", en: "When you don't understand, you ought to ask right away." },
      ],
    },
    {
      type: "heading",
      text: "Before & after: 前 / 後",
    },
    {
      type: "prose",
      text: "Verb **dictionary + {{前}}** — before doing. **Ta-form + {{後}}** — after doing. Nouns: {{食事の前}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "発表[はっぴょう]の前[まえ]に、資料[しりょう]を確[かく]認[にん]する。", en: "Confirm the materials before the presentation." },
        { jp: "会議[かいぎ]が終[お]わった後[あと]、残[のこ]って話[はな]した。", en: "After the meeting ended, I stayed and talked." },
      ],
    },
    {
      type: "heading",
      text: "While: 間 / 間に",
    },
    {
      type: "rule",
      title: "Duration vs point in time",
      items: [
        "**{{間}}** — throughout: {{待っている間}} — while waiting.",
        "**{{間に}}** — at some point during: {{出張している間に}}問題が起きた.",
      ],
    },
    {
      type: "heading",
      text: "Unchanged: まま",
    },
    {
      type: "prose",
      text: "{{まま}} keeps a **state as it was** — often with a hint of unfinished business or quiet reflection: {{問題を放置したまま}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "窓[まど]を開[あ]けたまま寝[ね]てしまった。", en: "Fell asleep with the window left open." },
        { jp: "不満[ふまん]を抱[かか]えたまま、何年[なんねん]も働[はたら]いた。", en: "I worked for years with dissatisfaction still held inside." },
        { jp: "そのままにしておいて。", en: "Leave it as is." },
      ],
    },
    {
      type: "heading",
      text: "Colloquial っぱなし",
    },
    {
      type: "prose",
      text: "**Stem + {{っぱなし}}** — left on or unfinished (often carelessly): {{つけっぱなし}} · {{やりっぱなし}} — started and never cleaned up. A soft conflict / complaint marker at home and work.",
    },
    {
      type: "dialogue",
      title: "Life reflection",
      lines: [
        { speaker: "A", jp: "転職[てんしょく]した時[とき]、怖[こわ]かった？", en: "When you changed jobs, were you scared?" },
        { speaker: "B", jp: "うん。でも、迷[まよ]ったまま残[のこ]る方[ほう]が辛[つら]かった。", en: "Yeah. But staying while still undecided was harder." },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「When I was a student」 — とき attachment?",
      choices: ["学生とき", "学生のとき", "学生なとき", "学生だとき"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Before presenting」?",
      choices: ["発表した前", "発表する前", "発表前だけ", "発表して前"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Problem arose at some point during the trip — which?",
      choices: ["出張している間", "出張している間に", "出張する間", "出張した間に"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Left the lights on — colloquial?",
      choices: ["つけまま", "つけっぱなし", "つけてしまう", "つける間"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'I fell asleep with the window left open'",
      tiles: ["窓[まど]を", "開[あ]けたまま", "寝[ね]てしまった"],
      distractors: ["開[あ]けるまま"],
      explanation: "まま follows the past for a state already in place: 開けたまま.",
    },
  ],
  drills: [
    { id: "toki", prompt: "Fill — 'when (I) changed jobs…'", jp: "転職[てんしょく]した◯◯、…", answers: ["とき", "時[とき]"] },
    { id: "mae", prompt: "Fill — 'before presenting'", jp: "発表[はっぴょう]する◯◯に", answers: ["前[まえ]"] },
    { id: "ato", prompt: "Fill — 'after the meeting ended'", jp: "終[お]わった◯◯で", answers: ["後[あと]"] },
    { id: "mama", prompt: "Fill — 'left it as is'", jp: "その◯◯にしておいた", answers: ["まま"] },
    { id: "ppanashi", prompt: "Fill — 'left it on (neglectfully)'", jp: "つけ◯◯◯◯にした", answers: ["っぱなし"] },
  ],
};
