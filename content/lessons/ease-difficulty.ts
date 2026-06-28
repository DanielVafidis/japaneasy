import type { Lesson } from "../types";

export const easeDifficulty: Lesson = {
  id: "ease-difficulty",
  stage: "special-expressions",
  order: 5,
  title: "Easy & Hard To Do",
  subtitle: "やすい · にくい · がたい · づらい",
  summary:
    "Attach suffixes to verb stems to describe how easy or psychologically difficult an action is.",
  estMinutes: 12,
  vocabulary: [
    { word: "読[よ]む", reading: "よむ", meaning: "to read" },
    { word: "分[わ]かる", reading: "わかる", meaning: "to understand" },
    { word: "信[しん]じる", reading: "しんじる", meaning: "to believe" },
    { word: "言[い]う", reading: "いう", meaning: "to say" },
  ],
  blocks: [
    {
      type: "prose",
      text: "These suffixes attach to the **ます-stem** (i-form) of a verb and behave like i-adjectives. They describe whether an action is physically easy, hard, nearly impossible, or emotionally awkward.",
    },
    {
      type: "rule",
      title: "The four suffixes",
      items: [
        "**{{やすい}}** — easy to do: {{読みやすい}} — easy to read.",
        "**{{にくい}}** — hard to do (general): {{分かりにくい}} — hard to understand.",
        "**{{がたい}}** — hard to do (formal / nearly impossible): {{信[しん]じがたい}} — hard to believe.",
        "**{{づらい}}** — psychologically painful / awkward: {{言[い]いづらい}} — hard to say (emotionally).",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "この本[ほん]は読[よ]みやすい。", en: "This book is easy to read." },
        { jp: "字[じ]が小[ちい]さくて読[よ]みにくい。", en: "The characters are small and hard to read." },
        { jp: "彼[かれ]の話[はなし]は信[しん]じがたい。", en: "His story is hard to believe." },
        { jp: "お金[かね]の話[はなし]は言[い]いづらい。", en: "Money talk is awkward to bring up." },
      ],
    },
    {
      type: "note",
      text: "Don't confuse {{にくい}} with the negative {{にく}} (meat) or with {{にくい}} from {{にく}}. The suffix always follows a verb stem.",
    },
    {
      type: "tip",
      text: "{{づらい}} is extremely common in daily speech for social discomfort — {{頼[たの]みづらい}} (hard to ask a favour), {{断[ことわ]りづらい}} (hard to refuse).",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Easy to read」?",
      choices: ["読みやすい", "読みにくい", "読みそう", "読みたい"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Psychologically awkward 'hard to say'?",
      choices: ["言いにくい", "言いづらい", "Both work; づらい = emotional", "言いがたい only"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "Suffix attaches to…",
      choices: ["dictionary form", "ます-stem", "te-form", "past tense"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Formal 'hard to believe'?",
      choices: ["信じやすい", "信じにくい", "信じがたい", "信じづらい"],
      answer: 2,
    },
  ],
};
