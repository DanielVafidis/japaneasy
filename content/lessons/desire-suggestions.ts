import type { Lesson } from "../types";

export const desireSuggestions: Lesson = {
  id: "desire-suggestions",
  stage: "essential-grammar",
  order: 12,
  title: "Desire & Suggestions",
  subtitle: "たい · ましょう · ませんか",
  summary:
    "Say what you want, invite someone out, and propose doing things together.",
  estMinutes: 18,
  vocabulary: [
    { word: "食[た]べる", reading: "たべる", meaning: "to eat" },
    { word: "行[い]く", reading: "いく", meaning: "to go" },
    { word: "映画[えいが]", reading: "えいが", meaning: "movie" },
    { word: "ラーメン", reading: "らーめん", meaning: "ramen" },
    { word: "一緒[いっしょ]", reading: "いっしょ", meaning: "together" },
    { word: "欲[ほ]しい", reading: "ほしい", meaning: "want (a thing)" },
  ],
  blocks: [
    {
      type: "heading",
      text: "Want to do: たい",
    },
    {
      type: "rule",
      title: "Verb + たい",
      items: [
        "Drop {{ます}} stem, add {{たい}} — {{食べたい}} (want to eat).",
        "Conjugates like an i-adjective: {{食べたくない}}, {{食べたかった}}.",
        "The **object** takes {{を}} (or {{が}} in some dialects): {{ラーメンを食べたい}}.",
      ],
    },
    {
      type: "heading",
      text: "Want a thing: 欲しい",
    },
    {
      type: "prose",
      text: "{{欲しい}} attaches to nouns, not verbs: {{新[あたら]しいパソコンが欲しい}} — 'want a new computer.' For actions, always use {{たい}}.",
    },
    {
      type: "heading",
      text: "Suggestions & invitations",
    },
    {
      type: "rule",
      title: "Let's / shall we",
      items: [
        "{{ましょう}} — 'let's': {{食べましょう}}.",
        "{{ませんか}} — polite invitation: {{映画を見ませんか}} — 'Won't you watch a movie?'",
        "{{ましょうか}} — offer to help: {{荷物[にもつ]を持[も]ちましょうか}} — 'Shall I carry your bag?'",
        "{{たらどう}} — casual nudge: {{休[やす]んだらどう}} — 'How about resting?'",
      ],
    },
    {
      type: "heading",
      text: "Third-person desire: たがる",
    },
    {
      type: "prose",
      text: "You can't say {{彼[かれ]はラーメンを食[た]べたい}} about someone else in neutral narration — use {{食[た]べたがっている}} ('seems to want to eat'). {{が}} marks the thing wanted: {{ラーメンを食べたがっている}}.",
    },
    {
      type: "dialogue",
      lines: [
        { speaker: "A", jp: "お腹[なか]が空[す]いた。ラーメン食[た]べたい。", en: "I'm hungry. I want ramen." },
        { speaker: "B", jp: "じゃあ、一緒[いっしょ]に行[い]きましょう。", en: "Then let's go together." },
        { speaker: "A", jp: "この映画[えいが]、見[み]ませんか。", en: "Won't you watch this movie?" },
      ],
    },
    {
      type: "tip",
      text: "{{たい}} can sound direct about your desires. Softening with {{と思[おも]う}} — {{行きたいと思います}} — is polite for 'I'd like to go.'",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Want to eat」?",
      choices: ["食べる", "食べたい", "食べ欲しい", "食べましょう"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Want a new phone」?",
      choices: ["新しい phone を食べたい", "新しい phone が欲しい", "新しい phone ましょう", "新しい phone たら"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Polite invitation: 「映画を見＿」",
      choices: ["ましょう", "ませんか", "たい", "たら"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「He seems to want ramen」 — natural?",
      choices: ["食べたい", "食べたがっている", "食べ欲しい", "食べましょう"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Shall I help you?」 — offering?",
      choices: ["手伝いましょうか", "手伝いません", "手伝いたい", "手伝うなら"],
      answer: 0,
    },
    {
      kind: "order",
      prompt: "Build: 'Someday I want to go to Japan'",
      tiles: ["いつか", "日本[にほん]に", "行[い]きたい"],
      distractors: ["行[い]きほしい"],
      explanation: "Actions you want to do take たい; ほしい is for things.",
    },
  ],
  drills: [
    { id: "tai", prompt: "Say 'want to eat'", jp: "食[た]べる", answers: ["食[た]べたい"] },
    { id: "takunai", prompt: "Say 'don't want to eat'", jp: "食[た]べたい", answers: ["食[た]べたくない"] },
    { id: "mashou", prompt: "Say 'let's go'", jp: "行[い]く", answers: ["行[い]きましょう"] },
    { id: "masenka", prompt: "Invite — 'won't you go?'", jp: "行[い]く", answers: ["行[い]きませんか"] },
    { id: "hoshii", prompt: "Fill — wanting a thing: 'I want ramen'", jp: "ラーメンが◯◯◯", answers: ["欲[ほ]しい"] },
  ],
};
