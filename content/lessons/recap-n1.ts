import type { Lesson } from "../types";

export const recapN1: Lesson = {
  id: "recap-n1",
  stage: "n1",
  order: 100,
  recap: true,
  title: "Stage Recap — N1",
  subtitle: "Mastery mixed together",
  summary:
    "Literary forms, advanced volition, covered structures, and integrated multi-clause Japanese.",
  estMinutes: 12,
  blocks: [
    {
      type: "prose",
      text: "N1 is **control**: literary negatives on signs and essays, advanced volition, dense time/cover patterns, and multi-clause messages that keep register straight from greeting to request.",
    },
    {
      type: "rule",
      title: "What this stage covers",
      items: [
        "Covered-by / covered-events patterns (complex time and scope)",
        "Advanced volitional and related forms",
        "{{ざるを得ない}} and kindred necessity",
        "Literary negatives — {{ぬ／ん・べからず・べく}}",
        "Nuance integration — register shifts, formal complaints, career reflection",
        "Stacking concession, inference, and keigo without leaking casual tone",
      ],
    },
    {
      type: "examples",
      title: "Putting it together",
      items: [
        {
          jp: "ここに立[た]ち入[い]るべからず。",
          en: "Do not enter here. (literary prohibition)",
        },
        {
          jp: "目標[もくひょう]を達[たっ]成[せい]すべく、毎日[まいにち]訓練[くんれん]している。",
          en: "I train every day in order to achieve the goal.",
        },
        {
          jp: "このままでは、手順[てじゅん]を見直[みなお]さざるを得ない。",
          en: "At this rate, we have no choice but to rework the procedure.",
        },
        {
          jp: "どちらを選[えら]んだとしても、責任[せきにん]から逃[に]げるわけにはいかない。",
          en: "Whichever I choose, I can't run from responsibility.",
        },
      ],
    },
    {
      type: "tip",
      text: "When in doubt for clients and managers: softener + written concession + humble request. Save {{のに}} and slang for peers.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Literary 'must not enter'?",
      choices: ["入るべきだ", "入るべからず", "入るべく", "入らぬだけ"],
      answer: 1,
      explanation: "べからず = must not.",
    },
    {
      kind: "mc",
      prompt: "Formal purpose 'in order to achieve'?",
      choices: ["達成すべきだ only", "達成すべく", "達成せぬ", "達成べからず"],
      answer: 1,
      explanation: "べく marks formal purpose.",
    },
    {
      kind: "fill",
      prompt: "Complete — have no choice but to change:",
      promptJp: "変[か]えざるを◯",
      answers: ["得ない", "えない"],
      explanation: "ざるを得ない.",
    },
    {
      kind: "mc",
      prompt: "「It's not that the job is bad」?",
      choices: ["悪いわけだ", "悪いわけではない", "悪いに違いない", "悪いべからず"],
      answer: 1,
      explanation: "わけではない denies the implication.",
    },
    {
      kind: "mc",
      prompt: "Literary negative of 知る?",
      choices: ["知らぬ", "知るべく", "知るべからず only", "知ったものだ"],
      answer: 0,
      explanation: "知らぬ ≈ 知らない.",
    },
    {
      kind: "order",
      prompt: "Build: 'Whichever I choose, I can't run from responsibility'",
      tiles: ["どちらを選[えら]んだとしても", "責任[せきにん]から", "逃[に]げるわけにはいかない"],
      distractors: ["逃[に]げるはずだ"],
      explanation: "Integrated concession + duty.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "ここに立[た]ち入[い]るべからず",
      explanation: "ここに立ち入るべからず — Do not enter.",
    },
  ],
};
