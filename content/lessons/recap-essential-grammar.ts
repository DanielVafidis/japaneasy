import type { Lesson } from "../types";

export const recapEssentialGrammar: Lesson = {
  id: "recap-essential-grammar",
  stage: "essential-grammar",
  order: 100,
  recap: true,
  title: "Stage Recap — Essential Grammar",
  subtitle: "Polite Japanese, connected sentences, real conversations",
  summary: "The stage that turned single sentences into connected, polite Japanese.",
  estMinutes: 10,
  blocks: [
    {
      type: "prose",
      text: "This stage is the workhorse of everyday Japanese: polite form, the te-form and everything it unlocks, potential, conditionals, and the give-and-receive system. If Basic Grammar built sentences, this stage connected them.",
    },
    {
      type: "rule",
      title: "What you can now say",
      items: [
        "Speak politely everywhere — {{です}}, {{ます}}, {{ません}}, {{ました}}",
        "Chain actions and states — te-form, {{〜てから}}, {{から/ので}}",
        "Ongoing states — {{〜ている}} (and why 知っている but 知らない)",
        "Ability — {{食べられる}}, {{話せる}}, {{できる}}",
        "Four conditionals — {{と・なら・ば・たら}}",
        "Wants, invitations, favours — {{たい}}, {{ませんか}}, {{あげる・くれる・もらう}}",
        "Quote anyone — {{〜と言いました}}, {{〜と思います}}",
      ],
    },
    {
      type: "examples",
      title: "Putting it together",
      items: [
        {
          jp: "時間[じかん]があったら、映画[えいが]を見[み]に行[い]きませんか。",
          en: "If you have time, won't you go see a movie?",
        },
        {
          jp: "友達[ともだち]が「日本語[にほんご]が話[はな]せる」と言[い]いました。",
          en: "My friend said they can speak Japanese.",
        },
        {
          jp: "宿題[しゅくだい]をしてから、お茶[ちゃ]を飲[の]みたいです。",
          en: "After doing homework, I want to drink tea.",
        },
      ],
    },
    {
      type: "tip",
      text: "The mixed quiz below pulls one question from almost every lesson in the stage — misses point you at exactly what to reread.",
    },
  ],
  quiz: [
    {
      kind: "fill",
      prompt: "Make it polite:",
      promptJp: "食[た]べる",
      answers: ["食べます", "たべます"],
      explanation: "Stem + ます (polite-form).",
    },
    {
      kind: "fill",
      prompt: "Make the te-form:",
      promptJp: "待[ま]つ",
      answers: ["待って", "まって"],
      explanation: "つ → って (te-form).",
    },
    {
      kind: "mc",
      prompt: "'I know' is…",
      choices: ["知っている", "知る", "知った", "知らないでいる"],
      answer: 0,
      explanation: "Knowing is an enduring state: 知っている (te-form-uses).",
    },
    {
      kind: "fill",
      prompt: "Make the potential — 'can write':",
      promptJp: "書[か]く",
      answers: ["書ける", "かける"],
      explanation: "う-verbs: く → ける (potential-form).",
    },
    {
      kind: "mc",
      prompt: "'If (you mean) Tokyo, …' — which conditional?",
      choices: ["なら", "と", "ば", "たら"],
      answer: 0,
      explanation: "なら is contextual — responding to something raised (conditionals).",
    },
    {
      kind: "fill",
      prompt: "Say 'want to drink':",
      promptJp: "飲[の]む",
      answers: ["飲みたい", "のみたい"],
      explanation: "Stem + たい (desire-suggestions).",
    },
    {
      kind: "mc",
      prompt: "Someone gives something to you. Which verb?",
      choices: ["くれる", "あげる", "もらえる", "やる"],
      answer: 0,
      explanation: "くれる = giving inward, toward me/us (giving-receiving).",
    },
    {
      kind: "order",
      prompt: "Build: 'After watching the movie, I'll eat dinner (polite)'",
      tiles: ["映画[えいが]を", "見[み]てから", "ご飯[はん]を", "食[た]べます"],
      distractors: ["見[み]たから"],
      explanation: "てから sequences actions; 見たから would mean 'because I watched'.",
    },
    {
      kind: "fill",
      prompt: "Finish the obligation — 'must do':",
      promptJp: "しなければ◯",
      answers: ["ならない", "いけない"],
      explanation: "しなければならない／いけない (obligation).",
    },
    {
      kind: "listen",
      prompt: "Listen — type the invitation you hear:",
      audio: "行[い]きましょう",
      explanation: "行きましょう — 'let's go'.",
    },
  ],
};
