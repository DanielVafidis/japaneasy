import type { Lesson } from "../types";

export const causativePassive: Lesson = {
  id: "causative-passive",
  stage: "special-expressions",
  order: 0,
  title: "Causative & Passive",
  subtitle: "Make / let someone do · be done to",
  summary:
    "The causative makes someone act; the passive shifts focus to what happens to the subject — including the suffering passive.",
  estMinutes: 18,
  vocabulary: [
    { word: "食[た]べる", reading: "たべる", meaning: "to eat" },
    { word: "行[い]く", reading: "いく", meaning: "to go" },
    { word: "待[ま]つ", reading: "まつ", meaning: "to wait" },
    { word: "子供[こども]", reading: "こども", meaning: "child" },
    { word: "質問[しつもん]", reading: "しつもん", meaning: "question" },
  ],
  blocks: [
    {
      type: "heading",
      text: "Causative — make / let do",
    },
    {
      type: "rule",
      title: "Forming the causative",
      items: [
        "**Ru-verbs:** {{る}} → {{させる}}. {{食べる}} → {{食べさせる}}.",
        "**U-verbs:** final /u/ → /a/ + {{せる}}. {{行く}} → {{行かせる}}.",
        "**Exceptions:** {{する}} → {{させる}}, {{来る}} → {{来させる}}.",
      ],
    },
    {
      type: "prose",
      text: "The **causer** takes {{を}} (direct force) or {{に}} (permission / indirect): {{母は子供に野菜を食べさせる}} — 'Mother makes/lets the child eat vegetables.'",
    },
    {
      type: "heading",
      text: "Passive — be done to",
    },
    {
      type: "rule",
      title: "Forming the passive",
      items: [
        "**Ru-verbs:** {{る}} → {{られる}}. {{食べる}} → {{食べられる}}.",
        "**U-verbs:** final /u/ → /a/ + {{れる}}. {{待つ}} → {{待たれる}}.",
        "**Exceptions:** {{する}} → {{される}}, {{来る}} → {{来られる}}.",
      ],
    },
    {
      type: "prose",
      text: "The passive highlights the **patient** — who or what is affected. {{パンが弟に食べられた}} — 'The bread was eaten by my little brother.' The doer takes {{に}}.",
    },
    {
      type: "heading",
      text: "Suffering passive (迷惑の受身)",
    },
    {
      type: "note",
      text: "When something bad happens *to you*, the passive can drop the agent: {{雨に降られた}} — 'I got rained on (and I didn't like it).' The subject is the one inconvenienced, not the rain.",
    },
    {
      type: "examples",
      items: [
        { jp: "先生[せんせい]は学生[がくせい]に本[ほん]を読[よ]ませた。", en: "The teacher made the students read the book." },
        { jp: "質問[しつもん]に答[こた]えさせてください。", en: "Please let me answer the question." },
        { jp: "待[ま]たされた。", en: "I was made to wait (suffering nuance)." },
        { jp: "ケーキが弟[おとうと]に食[た]べられた。", en: "The cake was eaten by my little brother." },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Causative form of 食べる?",
      choices: ["食べられる", "食べさせる", "食べれる", "食べさせられる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Passive form of 待つ?",
      choices: ["待たせる", "待たれる", "待てる", "待たされる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Causative form of する?",
      choices: ["される", "させる", "できる", "しれる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「I got rained on」 suffering passive — subject is…",
      choices: ["the rain", "the person affected", "the cloud", "the umbrella"],
      answer: 1,
    },
  ],
};
