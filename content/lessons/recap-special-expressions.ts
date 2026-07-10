import type { Lesson } from "../types";

export const recapSpecialExpressions: Lesson = {
  id: "recap-special-expressions",
  stage: "special-expressions",
  order: 100,
  recap: true,
  title: "Stage Recap — Special Expressions",
  subtitle: "Nuance: regret, hearsay, amounts, and timing",
  summary: "The stage of shades — saying how much, how likely, and how it felt.",
  estMinutes: 10,
  blocks: [
    {
      type: "prose",
      text: "Special Expressions is where Japanese stops being merely correct and starts being precise: the difference between 'it rained' and 'apparently it rained, unfortunately, right after I hung the laundry'.",
    },
    {
      type: "rule",
      title: "What you can now say",
      items: [
        "Cause and receive actions — {{させる}}, {{られる}}, {{させられる}}",
        "Honour and humble — {{いらっしゃる}}, {{申す}}, {{いただく}}",
        "Completion and regret — {{〜てしまう}} and spoken {{〜ちゃう}}",
        "Degrees of certainty — {{かもしれない}}, {{でしょう}}, {{はず}}, {{に違いない}}",
        "Amounts — {{だけ}}, {{しか〜ない}}, {{ばかり}}, {{すぎる}}",
        "Seemings — visual {{そう}}, judgement {{よう/みたい}}, hearsay {{らしい}}",
        "Timing — {{たばかり}}, {{とたんに}}, {{ながら}}, {{まま}}",
      ],
    },
    {
      type: "examples",
      title: "Putting it together",
      items: [
        {
          jp: "起[お]きたばかりなのに、もう疲[つか]れているらしい。",
          en: "Even though he just got up, apparently he's already tired.",
        },
        {
          jp: "テレビを見[み]ながら、全部[ぜんぶ]食[た]べてしまった。",
          en: "While watching TV, I ended up eating everything.",
        },
        {
          jp: "電気[でんき]をつけたまま、寝[ね]てしまいました。",
          en: "I fell asleep with the light left on.",
        },
      ],
    },
    {
      type: "tip",
      text: "Nuance patterns fade fastest — if any quiz answer felt like a coin flip, its lesson's drills are one tap away in the Grammar deck.",
    },
  ],
  quiz: [
    {
      kind: "fill",
      prompt: "Make the causative — 'make/let (them) eat':",
      promptJp: "食[た]べる",
      answers: ["食べさせる", "たべさせる"],
      explanation: "ru-verbs: る → させる (causative-passive).",
    },
    {
      kind: "mc",
      prompt: "The humble verb for 'to say' is…",
      choices: ["申す", "おっしゃる", "いらっしゃる", "いただく"],
      answer: 0,
      explanation: "申す lowers the speaker; おっしゃる elevates the other person.",
    },
    {
      kind: "fill",
      prompt: "Contract it for speech:",
      promptJp: "忘[わす]れてしまった",
      answers: ["忘れちゃった", "わすれちゃった"],
      explanation: "てしまった → ちゃった (te-shimau).",
    },
    {
      kind: "mc",
      prompt: "'There is only one' — with a negative verb. Which particle?",
      choices: ["しか", "だけ", "ばかり", "くらい"],
      answer: 0,
      explanation: "一つしかない — しか demands a negative (expressing-amounts).",
    },
    {
      kind: "fill",
      prompt: "It looks about to fall (visual) — attach the right そう:",
      promptJp: "降[ふ]る",
      answers: ["降りそう", "ふりそう", "降りそうだ", "ふりそうだ"],
      explanation: "Stem + そう = looks like it's about to (similarity-hearsay).",
    },
    {
      kind: "mc",
      prompt: "起きたばかり means…",
      choices: [
        "just got up",
        "always gets up",
        "can't get up",
        "got up too early",
      ],
      answer: 0,
      explanation: "た-form + ばかり = 'just did' (time-specific-actions).",
    },
    {
      kind: "fill",
      prompt: "Say 'without saying' — the literary form:",
      promptJp: "言[い]う",
      answers: ["言わずに", "いわずに"],
      explanation: "ない-stem + ずに (ease-difficulty).",
    },
    {
      kind: "order",
      prompt: "Build: 'The phone rang right in the middle of eating'",
      tiles: ["食[た]べている", "最中[さいちゅう]に", "電話[でんわ]が", "来[き]た"],
      distractors: ["食[た]べた"],
      explanation: "ている + 最中に — in the very middle of an ongoing action.",
    },
    {
      kind: "mc",
      prompt: "You're fairly sure the bus comes at 9 (that's the schedule). Which fits?",
      choices: ["来るはずだ", "来るかもしれない", "来るらしい", "来るそうだ"],
      answer: 0,
      explanation: "はず = expected based on reasoning; かもしれない is mere possibility (certainty).",
    },
    {
      kind: "listen",
      prompt: "Listen — type what you hear:",
      audio: "食[た]べすぎました",
      explanation: "食べすぎました — 'I ate too much.'",
    },
  ],
};
