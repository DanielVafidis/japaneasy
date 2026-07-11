import type { Lesson } from "../types";

export const expressingAmounts: Lesson = {
  id: "expressing-amounts",
  stage: "n2",
  order: 0,
  title: "Expressing Amounts",
  subtitle: "だけ · しか · ばかり · くらい · すぎる · ほど",
  summary:
    "Limit, approximate, and exaggerate quantities in nuanced complaints — only this much overtime, nothing but meetings, too much pressure.",
  estMinutes: 18,
  vocabulary: [
    { word: "だけ", reading: "だけ", meaning: "only; as much as" },
    { word: "しか", reading: "しか", meaning: "only (with negative)" },
    { word: "ばかり", reading: "ばかり", meaning: "nothing but; just (did)" },
    { word: "くらい", reading: "くらい", meaning: "about; to the extent" },
    { word: "すぎる", reading: "すぎる", meaning: "to exceed; too much" },
    { word: "ほど", reading: "ほど", meaning: "extent; so much that" },
    { word: "残業[ざんぎょう]", reading: "ざんぎょう", meaning: "overtime" },
    { word: "会議[かいぎ]", reading: "かいぎ", meaning: "meeting" },
  ],
  blocks: [
    {
      type: "heading",
      text: "Limiting: だけ vs しか…ない",
    },
    {
      type: "prose",
      text: "Both mean 'only', but **{{だけ}}** is neutral while **{{しか}}** must pair with a **negative** and adds a 'no more than this' complaint feel — useful in career and workload talk.",
    },
    {
      type: "examples",
      items: [
        { jp: "休[やす]みは土日[どにち]だけだ。", en: "Days off are only weekends." },
        { jp: "三日[みっか]しか休[やす]めなかった。", en: "I could only take three days off (and that's all)." },
        { jp: "これだけ残業[ざんぎょう]すれば十分[じゅうぶん]だろ。", en: "This much overtime should be enough, right." },
      ],
    },
    {
      type: "heading",
      text: "ばかり — nothing but",
    },
    {
      type: "rule",
      title: "Two main uses",
      items: [
        "**Nothing but X:** {{会議ばかりしている}} — doing nothing but meetings (complaint).",
        "**Just (recently) did:** {{来たばかり}} — just arrived. Past before {{ばかり}}.",
      ],
    },
    {
      type: "heading",
      text: "Approximating: くらい / ぐらい",
    },
    {
      type: "prose",
      text: "{{くらい}} marks **approximate amount** or **extent** — 'about two hours of overtime', 'so busy there's barely time to…'.",
    },
    {
      type: "examples",
      items: [
        { jp: "毎日[まいにち]二時間[にじかん]くらい残業[ざんぎょう]している。", en: "I'm doing about two hours of overtime every day." },
        { jp: "忙[いそが]しくて、昼[ひる]ごはんを食[た]べる時間[じかん]がないくらいだ。", en: "So busy there's barely time to eat lunch." },
      ],
    },
    {
      type: "heading",
      text: "Too much: すぎる",
    },
    {
      type: "rule",
      title: "Stem + すぎる",
      items: [
        "ます-stem + {{すぎる}}: {{働きすぎる}} — work too much.",
        "Adjectives: {{厳しすぎる}} · {{静かすぎる}}.",
        "Conjugates as ru-verb: {{飲みすぎた}} · {{高すぎない}}.",
      ],
    },
    {
      type: "heading",
      text: "Extent: ほど",
    },
    {
      type: "prose",
      text: "{{ほど}} — 'to the degree that'. {{〜ば〜ほど}} — 'the more X, the more Y'. Common in life reflection and nuanced complaints.",
    },
    {
      type: "examples",
      items: [
        { jp: "責任[せきにん]が増[ふ]えれば増[ふ]えるほど、ストレスも増[ふ]える。", en: "The more responsibility increases, the more stress does too." },
        { jp: "泣[な]くほど悔[くや]しかった。", en: "I was so frustrated I could cry." },
        { jp: "会議[かいぎ]ばかりで、仕事[しごと]が進[すす]まない。", en: "Nothing but meetings, so the real work doesn't progress." },
      ],
    },
    {
      type: "dialogue",
      title: "Nuanced workload complaint",
      lines: [
        { speaker: "A", jp: "最近[さいきん]、会議[かいぎ]ばかりだよね。", en: "Lately it's nothing but meetings, huh." },
        { speaker: "B", jp: "うん。残業[ざんぎょう]も多[おお]すぎる。三日[みっか]しか休[やす]めてないよ。", en: "Yeah. Overtime is too much too. I've only gotten three days off." },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Only three days off (emphasis: no more)」 — natural?",
      choices: ["三日だけ", "三日しかない", "三日ばかり", "三日くらい"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Just arrived (recently)」?",
      choices: ["来るばかり", "来たばかり", "来だけ", "来しかない"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Worked too much」?",
      choices: ["働きすぎる", "働きだけ", "働きほど", "働きばかり"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "しか must appear with…",
      choices: ["positive verb only", "negative verb", "past tense only", "nouns only"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "会議ばかりしている means…",
      choices: ["only one meeting", "nothing but meetings", "about to meet", "too few meetings"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'I'm doing nothing but overtime'",
      tiles: ["残業[ざんぎょう]ばかり", "して", "いる"],
      distractors: ["残業[ざんぎょう]だけで"],
      explanation: "ばかり + ている = does nothing but.",
    },
  ],
  drills: [
    { id: "dake", prompt: "Fill — 'only weekends' (plain statement)", jp: "土日[どにち]◯◯だ", answers: ["だけ"] },
    { id: "shika", prompt: "Fill — 'only three days' (with the negative)", jp: "三日[みっか]◯◯休[やす]めない", answers: ["しか"] },
    { id: "bakari", prompt: "Fill — 'doing nothing but meetings'", jp: "会議[かいぎ]◯◯◯している", answers: ["ばかり"] },
    { id: "sugiru", prompt: "Add 'too much' — 'work too much'", jp: "働[はたら]く", answers: ["働[はたら]きすぎる"] },
    { id: "kurai", prompt: "Fill — 'about two hours'", jp: "二時間[にじかん]◯◯◯", answers: ["くらい", "ぐらい"] },
  ],
};
