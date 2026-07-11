import type { Lesson } from "../types";

export const desireSuggestions: Lesson = {
  id: "desire-suggestions",
  stage: "n4",
  order: 6,
  title: "Desire & Suggestions",
  subtitle: "たい · ほしい · ましょう · ませんか",
  summary:
    "Say what you want, invite people out, and make plans — food recommendations and weekend invites.",
  estMinutes: 18,
  vocabulary: [
    { word: "食[た]べる", reading: "たべる", meaning: "to eat" },
    { word: "行[い]く", reading: "いく", meaning: "to go" },
    { word: "見[み]る", reading: "みる", meaning: "to see; to watch" },
    { word: "映画[えいが]", reading: "えいが", meaning: "movie" },
    { word: "ラーメン", reading: "らーめん", meaning: "ramen" },
    { word: "一緒[いっしょ]", reading: "いっしょ", meaning: "together" },
    { word: "欲[ほ]しい", reading: "ほしい", meaning: "want (a thing)" },
    { word: "週末[しゅうまつ]", reading: "しゅうまつ", meaning: "weekend" },
    { word: "荷物[にもつ]", reading: "にもつ", meaning: "luggage; bags" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Plans start with **wants** and **invites**. {{たい}} for actions you want to do, {{欲しい}} for things you want, and {{ましょう}} / {{ませんか}} to pull someone into the plan.",
    },
    {
      type: "heading",
      text: "Want to do: たい",
    },
    {
      type: "rule",
      title: "Verb stem + たい",
      items: [
        "Masu-stem + {{たい}}: {{食べたい}}, {{行きたい}}.",
        "Conjugates like an i-adjective: {{食べたくない}}, {{食べたかった}}.",
        "Object often {{を}} (sometimes {{が}}): {{ラーメンを食べたい}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "今日[きょう]はラーメンが食[た]べたい。", en: "I want to eat ramen today." },
        { jp: "週末[しゅうまつ]は家[いえ]で休[やす]みたい。", en: "I want to rest at home this weekend." },
        { jp: "残業[ざんぎょう]したくない。", en: "I don't want to do overtime." },
      ],
    },
    {
      type: "heading",
      text: "Want a thing: 欲しい",
    },
    {
      type: "prose",
      text: "{{欲しい}} is for **nouns**, not verbs: {{新しい傘が欲しい}}. For actions, use {{たい}}.",
    },
    {
      type: "heading",
      text: "Suggestions & invitations",
    },
    {
      type: "rule",
      title: "Let's / shall we / shall I",
      items: [
        "{{ましょう}} — let's: {{行きましょう}}.",
        "{{ませんか}} — polite invite: {{映画を見ませんか}}.",
        "{{ましょうか}} — offer help: {{荷物を持ちましょうか}}.",
        "Casual nudge: {{たらどう}} — {{休んだらどう}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "一緒[いっしょ]に昼[ひる]ご飯[はん]を食[た]べましょう。", en: "Let's have lunch together." },
        { jp: "金曜[きんよう]の夜[よる]、映画[えいが]を見[み]ませんか。", en: "Won't you watch a movie Friday night?" },
        { jp: "その鞄[かばん]、持[も]ちましょうか。", en: "Shall I carry that bag?" },
      ],
    },
    {
      type: "dialogue",
      title: "Making weekend plans",
      lines: [
        { speaker: "A", jp: "週末[しゅうまつ]、何[なに]したい？", en: "What do you want to do this weekend?" },
        { speaker: "B", jp: "新[あたら]しいラーメン屋[や]に行[い]ってみたい。", en: "I want to try going to that new ramen place." },
        { speaker: "A", jp: "いいね。土曜[どよう]の昼[ひる]に行[い]きませんか。", en: "Nice. Won't you go Saturday afternoon?" },
        { speaker: "B", jp: "行[い]きましょう。駅[えき]前[まえ]で会[あ]おう。", en: "Let's go. Let's meet in front of the station." },
      ],
    },
    {
      type: "heading",
      text: "Third-person desire: たがる",
    },
    {
      type: "prose",
      text: "Talking about someone else's wants neutrally often uses {{たがる}}: {{弟はラーメンを食べたがっている}} — 'my little brother seems to want ramen.' Avoid blunt {{彼は食べたい}} in careful narration.",
    },
    {
      type: "tip",
      text: "Soften your own {{たい}} in polite settings: {{行きたいと思います}}. For firm plans (intention), see つもり (Intention lesson).",
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
      prompt: "「Want a new umbrella」?",
      choices: ["傘を食べたい", "傘が欲しい", "傘ましょう", "傘たい"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Polite invitation to watch a movie?",
      choices: ["見ましょう", "見ませんか", "見たい", "見たら"],
      answer: 1,
      explanation: "ませんか invites; ましょう is 'let's' (more assuming).",
    },
    {
      kind: "mc",
      prompt: "「Shall I help?」 offering?",
      choices: ["手伝いましょうか", "手伝いません", "手伝いたい", "手伝うなら"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "「He seems to want ramen」?",
      choices: ["食べたい", "食べたがっている", "食べ欲しい", "食べましょう"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'Let's go eat ramen together'",
      tiles: ["一緒[いっしょ]に", "ラーメンを", "食[た]べましょう"],
      distractors: ["食[た]べたい"],
      explanation: "ましょう for a joint suggestion.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "映画[えいが]を見[み]ませんか",
      explanation: "映画を見ませんか — Won't you watch a movie?",
    },
  ],
  drills: [
    { id: "tai", prompt: "Say 'want to eat'", jp: "食[た]べる", answers: ["食[た]べたい"] },
    { id: "takunai", prompt: "Say 'don't want to eat'", jp: "食[た]べたい", answers: ["食[た]べたくない"] },
    { id: "mashou", prompt: "Say 'let's go'", jp: "行[い]く", answers: ["行[い]きましょう"] },
    { id: "masenka", prompt: "Invite — 'won't you go?'", jp: "行[い]く", answers: ["行[い]きませんか"] },
    { id: "hoshii", prompt: "Want a thing — 'I want ramen'", jp: "ラーメンが◯◯◯", answers: ["欲[ほ]しい"] },
    { id: "mashouka", prompt: "Offer — 'shall I carry?'", jp: "持[も]つ", answers: ["持[も]ちましょうか"] },
  ],
};
