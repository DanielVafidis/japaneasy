import type { Lesson } from "../types";

export const stateOfBeing: Lesson = {
  id: "state-of-being",
  stage: "basic-grammar",
  order: 0,
  title: "Expressing state-of-being",
  subtitle: "Declaring what something is with 「だ」",
  summary:
    "Japanese has no verb 'to be'. Learn how to declare, negate, and put state-of-being into the past.",
  estMinutes: 15,
  vocabulary: [
    { word: "人", reading: "ひと", meaning: "person" },
    { word: "学生", reading: "がくせい", meaning: "student" },
    { word: "元気", reading: "げんき", meaning: "healthy; lively; well" },
    { word: "友達", reading: "ともだち", meaning: "friend" },
  ],
  blocks: [
    {
      type: "prose",
      text: "One of the trickiest things about Japanese is that there is **no verb for the state-of-being** like English 'to be'. Instead, you *declare* that something is so by attaching the hiragana {{だ}} to a noun (or na-adjective).",
    },
    {
      type: "rule",
      title: "Declaring with だ",
      items: ["Attach {{だ}} to the noun.", "Example: {{人}} + {{だ}} = {{人だ}}"],
    },
    {
      type: "examples",
      items: [
        { jp: "人[ひと]だ。", en: "Is a person." },
        { jp: "学生[がくせい]だ。", en: "Is a student." },
        { jp: "元気[げんき]だ。", en: "Is well." },
      ],
    },
    {
      type: "prose",
      text: "Here's the kicker: a state-of-being can be **implied without だ at all**. Notice how the subject isn't even mentioned when it's obvious from context.",
    },
    {
      type: "dialogue",
      title: "A typical casual greeting",
      lines: [
        { speaker: "A", jp: "元気[げんき]？", en: "(Are you) well?" },
        { speaker: "B", jp: "元気[げんき]。", en: "(I'm) well." },
      ],
    },
    {
      type: "prose",
      text: "So what is だ for? A declarative statement sounds more emphatic and forceful. It's also **required** by certain grammar later on. (It carries a slightly assertive, masculine ring at the end of a plain sentence.)",
    },
    {
      type: "heading",
      text: "The negative",
    },
    {
      type: "prose",
      text: "In Japanese, negative and past are handled by **conjugation**. For the negative state-of-being, attach {{じゃない}} to the noun. None of these state-of-being conjugations are declarative the way だ is.",
    },
    {
      type: "rule",
      title: "Negative",
      items: ["Attach {{じゃない}} to the noun.", "{{学生}} + {{じゃない}} = {{学生じゃない}}"],
    },
    {
      type: "examples",
      items: [
        { jp: "学生[がくせい]じゃない。", en: "Is not a student." },
        { jp: "友達[ともだち]じゃない。", en: "Is not a friend." },
      ],
    },
    {
      type: "heading",
      text: "The past and negative-past",
    },
    {
      type: "rule",
      title: "Past state-of-being",
      items: [
        "**Past:** attach {{だった}} to the noun. {{先生}} + {{だった}} = {{先生だった}}",
        "**Negative-past:** take the negative, drop the {{い}} from {{じゃない}}, and add {{かった}}. {{先生じゃない}} → {{先生じゃなかった}}",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "学生[がくせい]だった。", en: "Was a student." },
        { jp: "先生[せんせい]じゃなかった。", en: "Was not a teacher." },
        { jp: "暇[ひま]じゃなかった。", en: "Was not free (had no spare time)." },
      ],
    },
    {
      type: "table",
      caption: "Summary of state-of-being (using 学生)",
      headers: ["", "Positive", "Negative"],
      rows: [
        ["Non-past", "学生（だ） — is a student", "学生じゃない — is not a student"],
        ["Past", "学生だった — was a student", "学生じゃなかった — was not a student"],
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Which sentence means 'Is a student.'?",
      choices: ["学生だ。", "学生じゃない。", "学生だった。", "学生じゃなかった。"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "How do you say 'was not a friend'?",
      choices: [
        "友達じゃない",
        "友達だった",
        "友達じゃなかった",
        "友達だ",
      ],
      answer: 2,
    },
    {
      kind: "fill",
      prompt: "Make 元気 negative (is not well). Type the Japanese:",
      answers: ["元気じゃない", "げんきじゃない"],
      explanation: "Attach じゃない to the na-adjective: 元気じゃない.",
    },
    {
      kind: "mc",
      prompt: "True or false: Japanese has a verb equivalent to English 'to be'.",
      choices: ["True", "False — state-of-being is declared with だ or implied"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'I am a student'",
      tiles: ["私[わたし]は", "学生[がくせい]", "だ"],
      distractors: ["じゃない"],
      explanation: "Topic first (私は), then the noun, then declarative だ.",
    },
  ],
};
