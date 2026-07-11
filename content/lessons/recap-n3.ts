import type { Lesson } from "../types";

export const recapN3: Lesson = {
  id: "recap-n3",
  stage: "n3",
  order: 100,
  recap: true,
  title: "Stage Recap — N3",
  subtitle: "Nuance mixed together",
  summary:
    "Aspect, nuanced conditionals, reasons, hearsay, full passive/causative, keigo basics, and contrast with のに.",
  estMinutes: 12,
  blocks: [
    {
      type: "prose",
      text: "N3 is where Japanese starts to **sound adult**: aspect, reasons with attitude, even-if and as-long-as, hearsay, and basic keigo — plus full causative and passive.",
    },
    {
      type: "rule",
      title: "What this stage covers",
      items: [
        "Te-aspect — {{てある・ておく・てしまう}}",
        "Conditionals with nuance — {{ば・なら・ても・限り}} (vs N4 {{と・たら}})",
        "Reasons — {{から／ので・ため・おかげで・せいで・によって}}",
        "Certainty, similarity & hearsay, hypothesizing",
        "Time-specific actions; quoted speech; tendencies",
        "Full causative, passive, and causative-passive {{させられる}}",
        "Honorific & humble basics",
        "Contrast — {{のに}} vs soft {{けど}}",
      ],
    },
    {
      type: "examples",
      title: "Putting it together",
      items: [
        {
          jp: "ホテルは予約[よやく]してあります。荷物[にもつ]もまとめておきました。",
          en: "The hotel is already booked. I also packed my bags in advance.",
        },
        {
          jp: "雨[あめ]が降[ふ]っても行[い]きます。渋滞[じゅうたい]のせいで遅[おく]れるかもしれません。",
          en: "Even if it rains I'll go. I might be late because of traffic.",
        },
        {
          jp: "たくさん勉強[べんきょう]したのに、合格[ごうかく]できなかった。",
          en: "Even though I studied a lot, I couldn't pass.",
        },
        {
          jp: "宿題[しゅくだい]を全部[ぜんぶ]やらせられた。",
          en: "I was made to do all the homework.",
        },
      ],
    },
    {
      type: "tip",
      text: "{{おかげで}} thanks vs {{せいで}} blames. Pick by whether the outcome is welcome.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Result left open on purpose?",
      choices: ["窓が開いている only", "窓が開けてある", "窓を開いてしまう only", "窓が開いておく only"],
      answer: 1,
      explanation: "てある = transitive result left in place.",
    },
    {
      kind: "mc",
      prompt: "「Even if it rains」?",
      choices: ["雨が降れば", "雨が降っても", "雨が降るなら only", "雨が降る限り only"],
      answer: 1,
      explanation: "ても = even if.",
    },
    {
      kind: "mc",
      prompt: "Blame for a bad cause?",
      choices: ["おかげで", "せいで", "ために only purpose", "ので always blame"],
      answer: 1,
      explanation: "せいで marks undesirable cause.",
    },
    {
      kind: "fill",
      prompt: "Connect — unexpected contrast:",
      promptJp: "勉強[べんきょう]した◯合格[ごうかく]できなかった",
      answers: ["のに"],
      explanation: "のに = even though / despite expectation.",
    },
    {
      kind: "mc",
      prompt: "「Was made to do homework」?",
      choices: ["宿題をさせた", "宿題をさせられた", "宿題をされた", "宿題をさせる"],
      answer: 1,
      explanation: "causative-passive させられる.",
    },
    {
      kind: "order",
      prompt: "Build: 'I reserved in advance'",
      tiles: ["予約[よやく]して", "おいた"],
      distractors: ["しまった"],
      explanation: "ておく for advance preparation.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "雨[あめ]が降[ふ]っても行[い]きます",
      explanation: "雨が降っても行きます — Even if it rains, I'll go.",
    },
  ],
};
