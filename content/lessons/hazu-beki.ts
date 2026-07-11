import type { Lesson } from "../types";

export const hazuBeki: Lesson = {
  id: "hazu-beki",
  stage: "n2",
  order: 5,
  title: "はず & べき",
  subtitle: "Logical expectation · moral ought",
  summary:
    "Separate deduction (はず) from moral advice (べき) in career conflict and life reflection. Literary べく／べからず live in Literary Negatives.",
  estMinutes: 18,
  vocabulary: [
    { word: "届[とど]く", reading: "とどく", meaning: "to arrive; be delivered" },
    { word: "約束[やくそく]", reading: "やくそく", meaning: "promise" },
    { word: "反省[はんせい]", reading: "はんせい", meaning: "reflection; regret" },
    { word: "嘘[うそ]", reading: "うそ", meaning: "lie" },
    { word: "破[やぶ]る", reading: "やぶる", meaning: "to break (a promise)" },
    { word: "納期[のうき]", reading: "のうき", meaning: "delivery deadline" },
  ],
  blocks: [
    {
      type: "heading",
      text: "はず — logical expectation",
    },
    {
      type: "rule",
      title: "Formation & meaning",
      items: [
        "Plain + {{はず}} — 'should be (from reasoning)': {{届くはず}}.",
        "{{はずがない}} — 'No way / can't be.'",
        "{{はずだった}} — 'Was supposed to be' (often unmet).",
      ],
    },
    {
      type: "heading",
      text: "べき — ought to (strong advice)",
    },
    {
      type: "rule",
      title: "Formation & nuance",
      items: [
        "Dictionary + {{べき}} — {{約束は守るべき}}.",
        "Negative: {{するべきではない}} / {{すべきではない}}.",
        "Sounds like a lecture about oneself — use carefully in conflict.",
      ],
    },
    {
      type: "table",
      caption: "Expectation vs obligation",
      headers: ["Pattern", "Type", "Example"],
      rows: [
        ["はず", "logical deduction", "納期に間に合うはず"],
        ["はずがない", "impossible", "そんなはずがない"],
        ["べき", "moral / strong advice", "謝るべき"],
        ["べきではない", "prohibition", "嘘をつくべきではない"],
      ],
    },
    {
      type: "prose",
      text: "{{はず}} is **deduction** ('the evidence says so'); {{べき}} is **judgement** ('you ought to'). Compare: {{もう着いたはず}} vs {{謝るべき}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "荷物[にもつ]は今日[きょう]届[とど]くはずだ。", en: "The package should arrive today." },
        { jp: "納期[のうき]に間[ま]に合[あ]うはずだったのに。", en: "It was supposed to make the deadline, and yet…" },
        { jp: "そんなはずがない。", en: "That can't be right." },
        { jp: "まず反省[はんせい]するべきだ。", en: "First you ought to reflect." },
        { jp: "約束[やくそく]を破[やぶ]るべきではない。", en: "You shouldn't break promises." },
      ],
    },
    {
      type: "dialogue",
      title: "Conflict at work",
      lines: [
        { speaker: "A", jp: "資料[しりょう]、もう届[とど]いてるはずだよ。", en: "The materials should already have arrived." },
        { speaker: "B", jp: "届[とど]いてない。連絡[れんらく]するべきだった。", en: "They haven't. We ought to have contacted them." },
      ],
    },
    {
      type: "note",
      text: "Literary {{べく}} ('in order to') and signage {{べからず}} ('must not') are covered in **Literary Negatives** — not drilled here.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Logical expectation: 'It should arrive'?",
      choices: ["届くべき", "届くはず", "届くそう", "届くらしい"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「No way that's true」?",
      choices: ["はずだ", "はずがない", "べきだ", "べきではない"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Strong moral advice — which?",
      choices: ["はず", "べき", "みたい", "かもしれない"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「You shouldn't lie」?",
      choices: ["嘘をつくはず", "嘘をつくべきではない", "嘘をつくかも", "嘘をつくみたい"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "はずだった often implies…",
      choices: ["a fulfilled plan", "an unmet expectation", "a moral lecture", "hearsay"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'The package should arrive today' (deduction)",
      tiles: ["荷物[にもつ]は", "今日[きょう]届[とど]く", "はずだ"],
      distractors: ["べきだ"],
      explanation: "Deduction = はず; べき would be moral advice.",
    },
  ],
  drills: [
    { id: "hazu", prompt: "Add expectation — 'should arrive'", jp: "届[とど]く", answers: ["届[とど]くはずだ", "届[とど]くはず"] },
    { id: "beki", prompt: "Add moral 'should' — 'ought to reflect'", jp: "反省[はんせい]する", answers: ["反省[はんせい]するべきだ", "反省[はんせい]すべきだ"] },
    { id: "hazuganai", prompt: "Fill — 'no way that's true'", jp: "そんな◯◯が◯◯", answers: ["はずがない"] },
    { id: "bekidewanai", prompt: "Say 'should not break a promise'", jp: "約束[やくそく]を破[やぶ]る", answers: ["約束[やくそく]を破[やぶ]るべきではない"] },
  ],
};
