import type { Lesson } from "../types";

export const recapAdvancedTopics: Lesson = {
  id: "recap-advanced-topics",
  stage: "advanced-topics",
  order: 100,
  recap: true,
  title: "Stage Recap — Advanced Topics",
  subtitle: "Formal registers and literary patterns — the last mile",
  summary: "Written style, hard obligations, and the patterns of formal Japanese.",
  estMinutes: 10,
  blocks: [
    {
      type: "prose",
      text: "The final stage is about register: the Japanese of essays, signs, speeches, and novels. You won't produce most of these daily — but now nothing in written Japanese should look alien.",
    },
    {
      type: "rule",
      title: "What you can now recognise (and use)",
      items: [
        "Written-style copula — {{である}}, {{ではない}}, {{であった}}, {{のである}}",
        "Expectation vs duty — {{はず}}, {{べき}}, literary {{べく}}, sign-style {{べからず}}",
        "Extreme examples — {{でさえ}}, {{すら}}, {{はおろか}}",
        "Unavoidability — {{ざるを得ない}}, {{やむを得ない}}, {{かねる/かねない}}",
        "Tendencies — {{がち}}, {{気味}}, {{つつ}}, {{きらいがある}}",
        "Volitional and beyond — {{〜よう}}, negative {{まい}}, literary {{であろう}}",
        "Coverage and aftermath — {{だらけ}}, {{まみれ}}, {{や否や}}, {{あげく}}",
      ],
    },
    {
      type: "examples",
      title: "Putting it together",
      items: [
        {
          jp: "結果[けっか]を認[みと]めざるを得[え]ないのである。",
          en: "One has no choice but to accept the result.",
        },
        {
          jp: "諦[あきら]めまいと努力[どりょく]しつつ、悩[なや]みがちであった。",
          en: "While striving never to give up, (I) tended to worry.",
        },
        {
          jp: "机[つくえ]の上[うえ]は本[ほん]だらけだ。",
          en: "The desk is covered in books.",
        },
      ],
    },
    {
      type: "tip",
      text: "Pass this recap and you've covered the whole guide — from here, graded readings and daily reviews carry the load.",
    },
  ],
  quiz: [
    {
      kind: "fill",
      prompt: "Make it written-formal:",
      promptJp: "問題[もんだい]だ",
      answers: ["問題である", "もんだいである"],
      explanation: "だ → である in essay style (formal-dearu).",
    },
    {
      kind: "fill",
      prompt: "Formal 'no choice but to do':",
      promptJp: "する",
      answers: ["せざるを得ない", "せざるをえない"],
      explanation: "する irregularly becomes せざるを得ない (zaru-wo-enai).",
    },
    {
      kind: "mc",
      prompt: "入るべからず on a sign means…",
      choices: [
        "Do not enter",
        "Please enter",
        "You should enter",
        "Entering is expected",
      ],
      answer: 0,
      explanation: "べからず — the sign-style prohibition (hazu-beki).",
    },
    {
      kind: "fill",
      prompt: "Make the volitional — 'let's do our best':",
      promptJp: "頑張[がんば]る",
      answers: ["頑張ろう", "がんばろう"],
      explanation: "う-verbs: る → ろう (advanced-volitional).",
    },
    {
      kind: "mc",
      prompt: "汗まみれ vs 間違いだらけ — why まみれ for sweat?",
      choices: [
        "まみれ is for liquids/grime coating a surface",
        "まみれ is politer",
        "だらけ only works with people",
        "They are fully interchangeable",
      ],
      answer: 0,
      explanation: "まみれ = physically coated; だらけ = riddled with (covered-by).",
    },
    {
      kind: "fill",
      prompt: "Fill — 'even a child can do it' (literary emphasis):",
      promptJp: "子供[こども]◯◯◯できる",
      answers: ["でさえ", "ですら"],
      explanation: "でさえ／ですら mark an extreme example (de-sae-desura).",
    },
    {
      kind: "mc",
      prompt: "病気がち means…",
      choices: [
        "prone to getting sick",
        "seriously ill",
        "recovered from illness",
        "afraid of illness",
      ],
      answer: 0,
      explanation: "がち — an unwelcome tendency (tendencies).",
    },
    {
      kind: "order",
      prompt: "Build: 'After all that worrying, (I) gave up'",
      tiles: ["悩[なや]んだ", "あげく", "諦[あきら]めた"],
      distractors: ["悩[なや]む"],
      explanation: "た-form + あげく — after much X, (a bad) outcome (covered-by).",
    },
    {
      kind: "mc",
      prompt: "The literary equivalent of だろう is…",
      choices: ["であろう", "でしょう", "らしい", "そうだ"],
      answer: 0,
      explanation: "であろう — conjecture in written style (advanced-volitional).",
    },
    {
      kind: "listen",
      prompt: "Listen — type the formal phrase you hear:",
      audio: "認[みと]めざるを得[え]ない",
      explanation: "認めざるを得ない — 'cannot help but admit it.'",
    },
  ],
};
