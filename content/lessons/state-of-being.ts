import type { Lesson } from "../types";

export const stateOfBeing: Lesson = {
  id: "state-of-being",
  stage: "n5",
  order: 0,
  title: "Expressing state-of-being",
  subtitle: "だ · じゃない · だった · じゃなかった",
  summary:
    "Japanese has no verb 'to be'. Declare, negate, and put state-of-being into the past — and see how SOV sentences start.",
  estMinutes: 15,
  vocabulary: [
    { word: "人[ひと]", reading: "ひと", meaning: "person" },
    { word: "学生[がくせい]", reading: "がくせい", meaning: "student" },
    { word: "元気[げんき]", reading: "げんき", meaning: "healthy; lively; well" },
    { word: "友達[ともだち]", reading: "ともだち", meaning: "friend" },
    { word: "先生[せんせい]", reading: "せんせい", meaning: "teacher" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Japanese sentences are **SOV**: the **verb (or predicate) comes last**. Subject and object come earlier; the end of the sentence tells you what is being said about them. For state-of-being there is no separate verb like English 'to be' — you declare what something **is** by attaching {{だ}} to a noun (or na-adjective).",
    },
    {
      type: "rule",
      title: "Word order snapshot",
      items: [
        "English is often SVO: *I am a student*.",
        "Japanese is SOV: topic/subject first, predicate **last** — {{学生だ}}.",
        "Once the topic is clear, Japanese often drops it: {{元気？}} can mean 'Are you well?'",
      ],
    },
    {
      type: "heading",
      text: "Declaring with だ",
    },
    {
      type: "rule",
      title: "Positive non-past",
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
      text: "A state-of-being can also be **implied without だ**. In casual talk, {{だ}} is often dropped when the meaning is obvious — but {{だ}} is more emphatic, and later grammar will require it.",
    },
    {
      type: "dialogue",
      title: "Self-intro at a language meetup",
      lines: [
        { speaker: "Yuki", jp: "初[はじ]めまして。Yukiです。学生[がくせい]だ。", en: "Nice to meet you. I'm Yuki. (I'm) a student." },
        { speaker: "Ken", jp: "Kenだ。元気[げんき]？", en: "I'm Ken. You well?" },
        { speaker: "Yuki", jp: "元気[げんき]。Kenは先生[せんせい]？", en: "Yeah. Are you a teacher, Ken?" },
        { speaker: "Ken", jp: "ううん、先生[せんせい]じゃない。友達[ともだち]の友達[ともだち]だ。", en: "Nope, not a teacher. (I'm) a friend of a friend." },
      ],
    },
    {
      type: "note",
      text: "In the dialogue, {{です}} is the polite cousin of {{だ}} — same idea, softer tone. This lesson focuses on the plain forms you need for conjugation and later grammar.",
    },
    {
      type: "heading",
      text: "The negative",
    },
    {
      type: "prose",
      text: "Negative and past are handled by **conjugation**. For the negative state-of-being, attach {{じゃない}} to the noun.",
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
    {
      type: "tip",
      text: "Remember SOV: whatever form you use — {{だ}}, {{じゃない}}, {{だった}}, {{じゃなかった}} — it sits at the **end** of the clause.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Which sentence means 'Is a student.'?",
      choices: ["学生だ。", "学生じゃない。", "学生だった。", "学生じゃなかった。"],
      answer: 0,
      explanation: "だ declares positive non-past state-of-being.",
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
      explanation: "Negative past = じゃない → drop い + かった → じゃなかった.",
    },
    {
      kind: "fill",
      prompt: "Make 元気 negative (is not well). Type the Japanese:",
      answers: ["元気じゃない", "げんきじゃない"],
      explanation: "Attach じゃない to the na-adjective: 元気じゃない.",
    },
    {
      kind: "mc",
      prompt: "In Japanese word order (SOV), where does the predicate usually go?",
      choices: ["First", "In the middle", "Last", "Anywhere"],
      answer: 2,
      explanation: "SOV: the verb/predicate comes last — e.g. 学生だ.",
    },
    {
      kind: "mc",
      prompt: "True or false: Japanese has a verb equivalent to English 'to be'.",
      choices: ["True", "False — state-of-being is declared with だ or implied"],
      answer: 1,
      explanation: "There is no standalone 'to be'; だ (or zero-copula) does the job.",
    },
    {
      kind: "order",
      prompt: "Build: 'I am a student'",
      tiles: ["私[わたし]は", "学生[がくせい]", "だ"],
      distractors: ["じゃない"],
      explanation: "Topic first (私は), then the noun, then declarative だ at the end.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "学生[がくせい]だ",
      explanation: "学生だ — (I) am a student.",
    },
  ],
  drills: [
    { id: "declare", prompt: "Declare it — 'is a student'", jp: "学生[がくせい]", answers: ["学生[がくせい]だ"] },
    { id: "negative", prompt: "Make it negative", jp: "元気[げんき]だ", answers: ["元気[げんき]じゃない"] },
    { id: "past", prompt: "Make it past tense", jp: "友達[ともだち]だ", answers: ["友達[ともだち]だった"] },
    { id: "negative-past", prompt: "Make it negative past", jp: "学生[がくせい]だ", answers: ["学生[がくせい]じゃなかった"] },
    { id: "negative-2", prompt: "Make it negative", jp: "いい人[ひと]だ", answers: ["いい人[ひと]じゃない"] },
  ],
};
