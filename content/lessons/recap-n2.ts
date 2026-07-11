import type { Lesson } from "../types";

export const recapN2: Lesson = {
  id: "recap-n2",
  stage: "n2",
  order: 100,
  recap: true,
  title: "Stage Recap — N2",
  subtitle: "Naturalness mixed together",
  summary:
    "Near-twin nuances, advanced conditionals, inference, concession, formal style, and business keigo.",
  estMinutes: 12,
  blocks: [
    {
      type: "prose",
      text: "N2 is about **choosing the right twin**: はず vs わけ, だけ vs しか, soft のに vs formal にもかかわらず — plus business keigo that survives a negotiation.",
    },
    {
      type: "rule",
      title: "What this stage covers",
      items: [
        "Amounts, generic nouns, formal {{である}}",
        "{{はず・べき}}, ease/difficulty, {{でさえ・ですら}}",
        "Showing signs; time & {{まま}}",
        "Similar points contrast — expectation, hearsay, only/nothing-but",
        "Advanced conditionals — {{ばよかった・たらいい・たとしても・としたら}}",
        "Inference — {{わけだ／ではない／にはいかない・に違いない・はずがない・ものだ}}",
        "Concession — {{とはいえ・ものの・にもかかわらず}}",
        "Advanced keigo — {{させていただく・お／ご〜いただく}}",
      ],
    },
    {
      type: "examples",
      title: "Putting it together",
      items: [
        {
          jp: "今[いま]ごろ着[つ]いているはずだ。遅[おく]れたわけではない。",
          en: "He should be there by now. It's not that he was late (as the explanation).",
        },
        {
          jp: "失敗[しっぱい]したとしても、諦[あきら]めるわけにはいかない。",
          en: "Even if I fail, I can't very well give up.",
        },
        {
          jp: "若[わか]いとはいえ、責任[せきにん]は同[おな]じだ。",
          en: "Young though he may be, the responsibility is the same.",
        },
        {
          jp: "ご検討[けんとう]いただけますと幸[さいわ]いです。",
          en: "We would appreciate it if you could consider this.",
        },
      ],
    },
    {
      type: "tip",
      text: "{{しか}} always wants a negative predicate. {{だけ}} does not.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「He should be home」?",
      choices: ["家にいるわけだ only logic", "家にいるはずだ", "家にいるみたいだけ", "家にいるそう (stem)"],
      answer: 1,
      explanation: "はず = expectation.",
    },
    {
      kind: "mc",
      prompt: "Only + negative?",
      choices: ["だけ", "しか", "ばかり always", "はず"],
      answer: 1,
      explanation: "しか + negative verb.",
    },
    {
      kind: "mc",
      prompt: "「I should have gone」?",
      choices: ["行ったらいい", "行けばよかった", "行くとしたら", "行く限り"],
      answer: 1,
      explanation: "ばよかった = regret.",
    },
    {
      kind: "fill",
      prompt: "Complete — can't refuse on principle:",
      promptJp: "断[ことわ]るわけには◯",
      answers: ["いかない"],
      explanation: "わけにはいかない.",
    },
    {
      kind: "mc",
      prompt: "Formal despite?",
      choices: ["のに", "にもかかわらず", "けど", "から"],
      answer: 1,
      explanation: "にもかかわらず is formal concession.",
    },
    {
      kind: "order",
      prompt: "Build: 'Allow me to explain (humble)'",
      tiles: ["説明[せつめい]させて", "いただきます"],
      distractors: ["なさいます"],
      explanation: "させていただく for own action.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "失敗[しっぱい]したとしても諦[あきら]めない",
      explanation: "失敗したとしても諦めない — Even if I fail, I won't give up.",
    },
  ],
};
