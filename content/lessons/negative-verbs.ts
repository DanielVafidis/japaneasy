import type { Lesson } from "../types";

export const negativeVerbs: Lesson = {
  id: "negative-verbs",
  stage: "n5",
  order: 6,
  title: "Negative Verbs",
  subtitle: "Turning verbs into 'do not ~' with ない",
  summary:
    "Say what you don't eat, don't drink, and don't go do — one clean rule for ru-verbs, one vowel-shift rule for u-verbs, and the irregular ある.",
  estMinutes: 14,
  vocabulary: [
    { word: "食べる", reading: "たべる", meaning: "to eat (ru-verb)" },
    { word: "行く", reading: "いく", meaning: "to go (u-verb)" },
    { word: "飲む", reading: "のむ", meaning: "to drink (u-verb)" },
    { word: "買う", reading: "かう", meaning: "to buy (u-verb)" },
    { word: "ある", reading: "ある", meaning: "to exist (inanimate); to have" },
    { word: "する", reading: "する", meaning: "to do" },
    { word: "来る", reading: "くる", meaning: "to come" },
  ],
  blocks: [
    {
      type: "prose",
      text: "To say a verb is **not** done, we conjugate it to the negative, which ends in {{ない}}. The rule depends on the verb class you just learned. Everyday talk is full of these: don't eat that, don't go, don't buy lunch.",
    },
    {
      type: "rule",
      title: "Ru-verbs",
      items: [
        "Drop {{る}}, add {{ない}}.",
        "{{食[た]べる}} → {{食[た]べない}} (does not eat / will not eat)",
      ],
    },
    {
      type: "rule",
      title: "U-verbs",
      items: [
        "Change the last /u/ sound to its /a/ sound, then add {{ない}}.",
        "{{飲[の]む}} (no**mu**) → {{飲[の]まない}} (no**ma**nai)",
        "{{行[い]く}} (i**ku**) → {{行[い]かない}} (i**ka**nai)",
        "Special case: verbs ending in {{う}} become {{わ}} (not あ). {{買[か]う}} → {{買[か]わない}}",
      ],
    },
    {
      type: "rule",
      title: "Exceptions",
      items: [
        "{{する}} → {{しない}}",
        "{{来[く]る}} → {{来[こ]ない}} (reading shifts to こ)",
        "{{ある}} (to exist / have) is irregular: its negative is simply {{ない}}.",
      ],
    },
    {
      type: "examples",
      items: [
        {
          jp: "肉[にく]を食[た]べない。",
          en: "(I) don't eat meat.",
        },
        {
          jp: "今日[きょう]は学校[がっこう]に行[い]かない。",
          en: "(I) don't go to school today.",
        },
        {
          jp: "コーヒーを飲[の]まない。",
          en: "(I) don't drink coffee.",
        },
        {
          jp: "お昼[ひる]を買[か]わない。",
          en: "(I) don't buy lunch.",
        },
        {
          jp: "宿題[しゅくだい]をしない。",
          en: "(I) don't do homework.",
        },
        {
          jp: "友達[ともだち]は来[こ]ない。",
          en: "My friend is not coming.",
        },
        {
          jp: "お金[かね]がない。",
          en: "There is no money / (I) don't have money.",
          note: "ある → ない",
        },
      ],
    },
    {
      type: "tip",
      text: "Negative verbs ending in {{ない}} behave exactly like i-adjectives. That's a preview — it means you'll be able to make them past ({{なかった}}) using the i-adjective rule: {{食[た]べない}} → {{食[た]べなかった}}.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Negative of the ru-verb 食べる (don't eat)?",
      choices: ["食べらない", "食べない", "食べあない", "食べわない"],
      answer: 1,
    },
    {
      kind: "fill",
      prompt: "Make 飲む negative (don't drink). Type the Japanese:",
      answers: ["飲まない", "のまない"],
      explanation: "mu → ma, then ない: 飲まない.",
    },
    {
      kind: "mc",
      prompt: "買う ends in う. Its negative (don't buy) is...",
      choices: ["買あない", "買らない", "買わない", "買いない"],
      answer: 2,
      explanation: "う-ending verbs use わ (not あ): 買わない.",
    },
    {
      kind: "mc",
      prompt: "What is the negative of ある (to exist / have)?",
      choices: ["あらない", "ない", "あるない", "あれない"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Negative of 行く (don't go)?",
      choices: ["行らない", "行かない", "行わない", "行きない"],
      answer: 1,
      explanation: "ku → ka, then ない: 行かない.",
    },
    {
      kind: "order",
      prompt: "Build: 'I don't eat meat'",
      tiles: ["肉[にく]を", "食[た]べない"],
      distractors: ["食[た]べる", "飲[の]まない"],
      explanation: "Drop る from 食べる and add ない.",
    },
  ],
  drills: [
    {
      id: "ru-negative",
      prompt: "Make it negative (don't eat)",
      jp: "食[た]べる",
      answers: ["食[た]べない"],
    },
    {
      id: "u-negative",
      prompt: "Make it negative (don't drink)",
      jp: "飲[の]む",
      answers: ["飲[の]まない"],
    },
    {
      id: "u-wa-negative",
      prompt: "Make it negative — う becomes わ (don't buy)",
      jp: "買[か]う",
      answers: ["買[か]わない"],
    },
    {
      id: "suru-negative",
      prompt: "Make it negative",
      jp: "する",
      answers: ["しない"],
    },
    {
      id: "aru-negative",
      prompt: "Make it negative — special case",
      jp: "ある",
      answers: ["ない"],
    },
    {
      id: "kuru-negative",
      prompt: "Make it negative — the reading changes",
      jp: "来[く]る",
      answers: ["来[こ]ない"],
    },
  ],
};
