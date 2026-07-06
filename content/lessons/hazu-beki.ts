import type { Lesson } from "../types";

export const hazuBeki: Lesson = {
  id: "hazu-beki",
  stage: "advanced-topics",
  order: 1,
  title: "はず & べき",
  subtitle: "Expected to be · ought to",
  summary:
    "Express logical expectation with はず and moral or strong advice with べき.",
  estMinutes: 18,
  vocabulary: [
    { word: "届[とど]く", reading: "とどく", meaning: "to arrive; be delivered" },
    { word: "約束[やくそく]", reading: "やくそく", meaning: "promise" },
    { word: "当然[とうぜん]", reading: "とうぜん", meaning: "natural; expected" },
    { word: "反省[はんせい]", reading: "はんせい", meaning: "reflection; regret" },
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
        "Plain form + {{はず}} — 'should be (based on reasoning)'. {{届[とど]くはず}} — 'It should arrive.'",
        "Negative expectation: {{はずがない}} — 'No way / can't be.' {{彼[かれ]が来[く]るはずがない}}.",
        "Past expectation unmet: {{はずだった}} — 'Was supposed to be.'",
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
        "Dictionary form + {{べき}} — {{約束[やくそく]は守[まも]るべき}} — 'Promises ought to be kept.'",
        "Negative advice: {{するべきではない}} / {{すべきではない}} — 'Should not do.'",
        "**べきではない** in warnings: {{約束[やくそく]を破[やぶ]るべきではない}}.",
        "Rarely used about oneself in plain form — {{勉強[べんきょう]すべき}} sounds like a lecture.",
      ],
    },
    {
      type: "heading",
      text: "はず vs べき — side by side",
    },
    {
      type: "table",
      caption: "Expectation vs obligation",
      headers: ["Pattern", "Type", "Example"],
      rows: [
        ["はず", "logical deduction", "届[とど]くはず (should arrive)"],
        ["はずがない", "impossible", "そんなはずがない"],
        ["べき", "moral / strong advice", "謝[あやま]るべき (ought to apologise)"],
        ["べきではない", "prohibition", "嘘[うそ]をつくべきではない"],
      ],
    },
    {
      type: "prose",
      text: "{{はず}} is **deduction** ('the evidence says so'); {{べき}} is **judgement** ('society / morals say so'). Compare: {{もう着[つ]いたはず}} (it should have arrived by now) vs {{謝[あやま]るべき}} (you ought to apologise).",
    },
    {
      type: "examples",
      items: [
        { jp: "荷物[にもつ]は今日[きょう]届[とど]くはずだ。", en: "The package should arrive today." },
        { jp: "そんなはずがない。", en: "That can't be right." },
        { jp: "学生[がくせい]は毎日[まいにち]復習[ふくしゅう]するべきだ。", en: "Students ought to review every day." },
        { jp: "約束[やくそく]を破[やぶ]るべきではない。", en: "You shouldn't break promises." },
        { jp: "彼[かれ]が犯人[はんにん]のはずがない。", en: "There's no way he's the culprit." },
      ],
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
      prompt: "Strong moral advice — which suffix?",
      choices: ["はず", "べき", "みたい", "かもしれない"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「You shouldn't lie」 — moral prohibition?",
      choices: ["嘘をつくはず", "嘘をつくべきではない", "嘘をつくかも", "嘘をつくみたい"],
      answer: 1,
    },
  ],
};
