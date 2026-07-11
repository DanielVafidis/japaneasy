import type { Lesson } from "../types";

export const recapN4: Lesson = {
  id: "recap-n4",
  stage: "n4",
  order: 100,
  recap: true,
  title: "Stage Recap — N4",
  subtitle: "Everyday connections mixed together",
  summary:
    "Te-form mastery, conditionals, potential, plans, giving & receiving, and a light passive/causative intro.",
  estMinutes: 12,
  vocabulary: [
    { word: "林[はやし]", reading: "はやし", meaning: "woods; grove" },
    { word: "森[もり]", reading: "もり", meaning: "forest" },
    { word: "池[いけ]", reading: "いけ", meaning: "pond" },
    { word: "田[た]んぼ", reading: "たんぼ", meaning: "rice field" },
    { word: "首都[しゅと]", reading: "しゅと", meaning: "capital city" },
  ],
  blocks: [
    {
      type: "prose",
      text: "N4 turns basic sentences into **everyday situations**: chaining actions, saying what you can do, what you plan, and how favors move between people.",
    },
    {
      type: "rule",
      title: "What this stage covers",
      items: [
        "Compound sentences and te-form uses — {{ている・てもいい・てから}}",
        "Potential form — {{話せる}}, particle often {{が}}",
        "なる／する patterns — change and decision",
        "Conditionals — {{と・たら}} (nuance forms wait for N3)",
        "Obligation, desire, suggestions, defining & trying",
        "Giving & receiving; requests & commands",
        "Intention — {{つもり}}, {{ようと思う}}",
        "Comparisons, casual patterns, transitivity pairs",
        "Light passive & causative — {{られる／させる}} (no させられる yet)",
      ],
    },
    {
      type: "examples",
      title: "Putting it together",
      items: [
        {
          jp: "週末[しゅうまつ]は友達[ともだち]に会[あ]おうと思[おも]っています。",
          en: "I'm thinking of meeting a friend on the weekend.",
        },
        {
          jp: "日本語[にほんご]が少[すこ]し話[はな]せます。",
          en: "I can speak a little Japanese.",
        },
        {
          jp: "明日[あした]は電車[でんしゃ]で行[い]くつもりです。",
          en: "I plan to go by train tomorrow.",
        },
        {
          jp: "先生[せんせい]に名前[なまえ]を呼[よ]ばれました。少[すこ]し休[やす]ませてください。",
          en: "I was called by name by the teacher. Please let me rest a little.",
        },
      ],
    },
    {
      type: "tip",
      text: "If potential and passive both look like {{られる}}, check context: ability vs 'done to me.'",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Potential of する?",
      choices: ["すれる", "できる", "しられる", "させる"],
      answer: 1,
      explanation: "する → できる.",
    },
    {
      kind: "mc",
      prompt: "「I plan to go」?",
      choices: ["行こうつもりです", "行くつもりです", "行きたいつもり", "行きましょうつもり"],
      answer: 1,
      explanation: "Dictionary form + つもり.",
    },
    {
      kind: "mc",
      prompt: "Passive of 呼ぶ?",
      choices: ["呼ばせる", "呼ばれる", "呼べる", "呼びます"],
      answer: 1,
      explanation: "ぶ → ばれる.",
    },
    {
      kind: "fill",
      prompt: "Volitional of 会う (for 会おうと思う):",
      answers: ["会おう", "あおう"],
      explanation: "う → おう.",
    },
    {
      kind: "order",
      prompt: "Build: 'Please let me rest a little'",
      tiles: ["少[すこ]し", "休[やす]ませて", "ください"],
      distractors: ["休[やす]まれて"],
      explanation: "Causative + ください for permission request.",
    },
    {
      kind: "mc",
      prompt: "Natural particle — 'can speak Japanese'?",
      choices: ["日本語を話せる only always", "日本語が話せる", "日本語に話せる", "日本語で話せる only ability"],
      answer: 1,
      explanation: "Ability often marks the object with が.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "明日[あした]行[い]くつもりです",
      explanation: "明日行くつもりです — I plan to go tomorrow.",
    },
  ],
};
