import type { Lesson } from "../types";

export const deSaeDesura: Lesson = {
  id: "de-sae-desura",
  stage: "n2",
  order: 12,
  title: "でさえ & ですら",
  subtitle: "でさえ · すら · はおろか",
  summary:
    "Emphasise surprising 'even' cases in nuanced complaints and conflict — and step up to はおろか, 'let alone'.",
  estMinutes: 16,
  vocabulary: [
    { word: "専門家[せんもんか]", reading: "せんもんか", meaning: "expert; specialist" },
    { word: "新人[しんじん]", reading: "しんじん", meaning: "newcomer; newbie" },
    { word: "部長[ぶちょう]", reading: "ぶちょう", meaning: "section chief" },
    { word: "簡単[かんたん]", reading: "かんたん", meaning: "simple; easy" },
    { word: "名前[なまえ]", reading: "なまえ", meaning: "name" },
    { word: "基本[きほん]", reading: "きほん", meaning: "basics; fundamentals" },
  ],
  blocks: [
    {
      type: "prose",
      text: "{{でさえ}} and {{ですら}} mean **'even'** — highlighting an extreme or unexpected case. Perfect for nuanced complaints: even the expert failed; even the boss didn't know. {{ですら}} is slightly more literary; {{でさえ}} is common in speech.",
    },
    {
      type: "rule",
      title: "Usage",
      items: [
        "Attach to nouns: {{新人でさえ知っている}} — 'Even newcomers know it.'",
        "After verbs, rephrase: {{理解することすらできない}}.",
        "**{{すら}}** alone (literary): {{部長すら}} — 'even the manager'.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "こんな簡単[かんたん]なミス、新人[しんじん]でさえしない。", en: "Even a newcomer wouldn't make such a simple mistake." },
        { jp: "専門家[せんもんか]ですら分[わ]からなかった。", en: "Even the experts didn't understand." },
        { jp: "名前[なまえ]すら覚[おぼ]えていない同僚[どうりょう]がいる。", en: "There are coworkers whose names I don't even remember." },
      ],
    },
    {
      type: "heading",
      text: "さえ in conditionals",
    },
    {
      type: "rule",
      title: "Minimum condition",
      items: [
        "**Noun + {{さえ}} + conditional** — {{時間さえあれば}} — 'if only there is time.'",
        "**Stem + {{さえ}} + conditional** — {{見さえすれば}} — 'as long as you look.'",
        "Same word {{さえ}}, different slot from {{でさえ}} emphasis.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "基本[きほん]さえ押[お]さえれば、応用[おうよう]は難[むずか]しくない。", en: "If you just grasp the basics, application isn't hard." },
        { jp: "誠意[せいい]さえあれば、許[ゆる]されることもある。", en: "If only there's sincerity, forgiveness is sometimes possible." },
      ],
    },
    {
      type: "heading",
      text: "はおろか — let alone",
    },
    {
      type: "prose",
      text: "**A {{はおろか}} B ({{も}}／{{さえ}})** — 'let alone A; even B fails.' Bigger/more obvious item first; sentence almost always negative. Sharp tool for complaints and conflict.",
    },
    {
      type: "examples",
      items: [
        { jp: "昇進[しょうしん]はおろか、昇給[しょうきゅう]すらなかった。", en: "There wasn't even a raise, let alone a promotion." },
        { jp: "海外[かいがい]出張[しゅっちょう]はおろか、隣[となり]の支社[ししゃ]にも行[い]ったことがない。", en: "I've never even been to the next branch, let alone overseas." },
        { jp: "説得[せっとく]はおろか、話[はな]を聞[き]いてもらえなかった。", en: "I couldn't even get them to listen, let alone persuade them." },
      ],
    },
    {
      type: "dialogue",
      title: "Nuanced complaint",
      lines: [
        { speaker: "A", jp: "部長[ぶちょう]でさえ、詳[くわ]しいことは知[し]らないらしい。", en: "Apparently even the section chief doesn't know the details." },
        { speaker: "B", jp: "説明[せつめい]はおろか、資料[しりょう]すら出[だ]てこないよ。", en: "We don't even get materials, let alone an explanation." },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Even newcomers know」 — particle after 新人?",
      choices: ["でさえ", "をさえ", "にさえ", "がさえ"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "ですら is closest in register to…",
      choices: ["slang", "literary / formal emphasis", "baby talk", "text abbreviations"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Emphasis meaning of でさえ?",
      choices: ["only", "even", "because", "although"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「If only there is sincerity」?",
      choices: ["誠意でさえ", "誠意さえあれば", "誠意すら", "誠意でも"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "昇進はおろか、昇給すらなかった means…",
      choices: [
        "No raise, let alone a promotion",
        "Got a promotion but no raise",
        "Promotion is foolish compared to a raise",
        "Got both a promotion and a raise",
      ],
      answer: 0,
    },
    {
      kind: "order",
      prompt: "Build: 'Even the experts couldn't solve it'",
      tiles: ["その問題[もんだい]は", "専門家[せんもんか]でさえ", "解[と]けなかった"],
      distractors: ["専門家[せんもんか]なら"],
      explanation: "でさえ marks the least likely case: even the experts.",
    },
  ],
  drills: [
    { id: "desae", prompt: "Fill — 'even a newcomer knows'", jp: "新人[しんじん]◯◯◯知[し]っている", answers: ["でさえ", "ですら"] },
    { id: "sura", prompt: "Fill — literary 'even' (experts too)", jp: "専門家[せんもんか]◯◯◯難[むずか]しい", answers: ["ですら", "でさえ"] },
    { id: "haoroka", prompt: "Fill — 'let alone a promotion, (no) raise even'", jp: "昇進[しょうしん]◯◯◯◯、昇給[しょうきゅう]すらなかった", answers: ["はおろか"] },
    { id: "sae-conditional", prompt: "Fill — 'as long as there's time'", jp: "時間[じかん]◯◯あれば", answers: ["さえ"] },
  ],
};
