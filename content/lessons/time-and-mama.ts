import type { Lesson } from "../types";

export const timeAndMama: Lesson = {
  id: "time-and-mama",
  stage: "special-expressions",
  order: 10,
  title: "Time & Leaving As-Is",
  subtitle: "とき · 前/後 · 間 · まま · っぱなし",
  summary:
    "Pin actions to time (when, before, after, while) and describe things left unchanged.",
  estMinutes: 16,
  vocabulary: [
    { word: "時[とき]", reading: "とき", meaning: "when; time" },
    { word: "前[まえ]", reading: "まえ", meaning: "before" },
    { word: "後[あと]", reading: "あと", meaning: "after" },
    { word: "間[あいだ]", reading: "あいだ", meaning: "while; between; during" },
    { word: "まま", reading: "まま", meaning: "as is; unchanged state" },
    { word: "っぱなし", reading: "っぱなし", meaning: "left on / undone (colloquial)" },
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
        "**Non-past action:** dictionary form — {{食[た]べるとき}} (when (I) eat).",
        "**Past / completed:** {{た-form}} — {{日本[にほん]に行[い]ったとき}} (when I went to Japan).",
        "**Na-adjective / noun:** add {{な}} / {{の}} — {{暇[ひま]なとき}} · {{学生[がくせい]のとき}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "子供[こども]の時[とき]、よくこの公園[こうえん]で遊[あそ]んだ。", en: "When I was a child, I often played in this park." },
        { jp: "分[わ]からない時[とき]は、聞[き]いてください。", en: "When you don't understand, please ask." },
      ],
    },
    {
      type: "heading",
      text: "Before & after: 前 / 後",
    },
    {
      type: "prose",
      text: "Verb **dictionary form + {{前[まえ]}}** — before doing. **Ta-form + {{後[あと]}}** — after doing. Nouns use {{の}}: {{食事[しょくじ]の前[まえ]}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "寝[ね]る前[まえ]に、歯[は]を磨[みが]く。", en: "Brush teeth before sleeping." },
        { jp: "授業[じゅぎょう]が終[お]わった後[あと]、カフェに行[い]った。", en: "After class ended, went to a café." },
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
        "**{{間[あいだ]}}** — throughout a period: {{映画[えいが]を見[み]ている間[あいだ]}} — while watching a movie.",
        "**{{間[あいだ]に}}** — at some point during: {{映画を見ている間[あいだ]に}}電[でん]話[わ]が来[き]た — the phone rang during the movie.",
      ],
    },
    {
      type: "heading",
      text: "Unchanged: まま",
    },
    {
      type: "prose",
      text: "{{まま}} keeps a **state as it was**: {{靴[くつ]を履[は]いたまま}} — with shoes still on. Attach to plain form (verbs), nouns + {{の}}, or adjectives + {{な}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "窓[まど]を開[あ]けたまま寝[ね]てしまった。", en: "Fell asleep with the window left open." },
        { jp: "そのままにしておいて。", en: "Leave it as is." },
      ],
    },
    {
      type: "heading",
      text: "Colloquial っぱなし",
    },
    {
      type: "prose",
      text: "**Stem + {{っぱなし}}** — something left on or unfinished (often carelessly): {{電気[でんき]をつけっぱなし}} — left the lights on. {{開[あ]けっぱなし}} — left open.",
    },
    {
      type: "tip",
      text: "{{そのまま}} is a set phrase meaning 'unchanged' or 'as it is' — very common in instructions and daily life.",
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
      prompt: "「Before eating」?",
      choices: ["食べた前", "食べる前", "食べ前", "食べて前"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Phone rang at some point during the movie — which?",
      choices: ["見ている間", "見ている間に", "見る間", "見た間に"],
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
      explanation: "まま follows the past tense for a state already in place: 開けたまま.",
    },
  ],
};
