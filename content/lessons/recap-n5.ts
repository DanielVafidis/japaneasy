import type { Lesson } from "../types";

export const recapN5: Lesson = {
  id: "recap-n5",
  stage: "n5",
  order: 100,
  recap: true,
  title: "Stage Recap — N5",
  subtitle: "Foundations mixed together",
  summary:
    "State-of-being, particles, conjugation, te-form, polite speech, numbers, and existence — one mixed check.",
  estMinutes: 12,
  blocks: [
    {
      type: "prose",
      text: "N5 is the toolkit for **basic sentences and simple daily situations**. Before N4 expands connections and intentions, lock in what you can already build.",
    },
    {
      type: "rule",
      title: "What this stage covers",
      items: [
        "State-of-being — {{だ／じゃない／だった／じゃなかった}} and polite {{です}}",
        "Core particles — {{は・が・を・に・へ・で・と・も・の・から／まで}}",
        "I- and na-adjectives, including {{いい → よかった}}",
        "Verb classes: dictionary, negative, past, polite {{ます}}",
        "Te-form introduction and verb stems",
        "Relative clauses before nouns — {{昨日買った本}}",
        "Questions, addressing people, numbers & counting",
        "Existence — {{あります／います}}, location {{に}} vs action place {{で}}",
      ],
    },
    {
      type: "examples",
      title: "Putting it together",
      items: [
        {
          jp: "近[ちか]くに駅[えき]があります。電車[でんしゃ]で学校[がっこう]に行[い]きます。",
          en: "There's a station nearby. I go to school by train.",
        },
        {
          jp: "昨日[きのう]買[か]った本[ほん]は高[たか]かった。",
          en: "The book I bought yesterday was expensive.",
        },
        {
          jp: "先生[せんせい]は二階[にかい]の教室[きょうしつ]にいます。",
          en: "The teacher is in the classroom on the second floor.",
        },
        {
          jp: "今日[きょう]は忙[いそが]しくないです。一緒[いっしょ]に昼[ひる]ごはんを食[た]べませんか。",
          en: "I'm not busy today. Shall we have lunch together?",
        },
      ],
    },
    {
      type: "tip",
      text: "Miss a question? Jump back to that lesson — the recap is a map, not a new chapter.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Inanimate existence verb?",
      choices: ["います", "あります", "します", "なります"],
      answer: 1,
      explanation: "あります for things; います for people/animals.",
    },
    {
      kind: "fill",
      prompt: "Fill the particle — existence location:",
      promptJp: "学校[がっこう]◯先生[せんせい]がいます",
      answers: ["に"],
      explanation: "に marks where someone/something is.",
    },
    {
      kind: "fill",
      prompt: "Fill the particle — place of action:",
      promptJp: "駅[えき]◯待[ま]つ",
      answers: ["で"],
      explanation: "で marks where an action happens.",
    },
    {
      kind: "mc",
      prompt: "Past of 飲む?",
      choices: ["飲んだ", "飲みた", "飲った", "飲んで"],
      answer: 0,
      explanation: "む → んだ.",
    },
    {
      kind: "order",
      prompt: "Build: 'The book I bought was expensive'",
      tiles: ["私[わたし]が", "買[か]った", "本[ほん]は", "高[たか]かった"],
      distractors: ["高[たか]いだった"],
      explanation: "Relative clause before the noun; i-adjectives don't take だった.",
    },
    {
      kind: "fill",
      prompt: "Make 元気 negative (casual):",
      answers: ["元気じゃない", "げんきじゃない"],
      explanation: "Noun/na-adjective + じゃない.",
    },
    {
      kind: "mc",
      prompt: "Polite form of 食べる?",
      choices: ["食べます", "食べるです", "食べましたる", "食べますだ"],
      answer: 0,
      explanation: "ます-form of ru-verbs: drop る, add ます.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "近[ちか]くにコンビニがあります",
      explanation: "近くにコンビニがあります — There's a convenience store nearby.",
    },
  ],
};
