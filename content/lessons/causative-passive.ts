import type { Lesson } from "../types";

export const causativePassive: Lesson = {
  id: "causative-passive",
  stage: "special-expressions",
  order: 0,
  title: "Causative & Passive",
  subtitle: "Make / let someone do · be done to",
  summary:
    "The causative makes someone act; the passive shifts focus to what happens to the subject — including the suffering passive.",
  estMinutes: 22,
  vocabulary: [
    { word: "食[た]べる", reading: "たべる", meaning: "to eat" },
    { word: "行[い]く", reading: "いく", meaning: "to go" },
    { word: "待[ま]つ", reading: "まつ", meaning: "to wait" },
    { word: "子供[こども]", reading: "こども", meaning: "child" },
    { word: "質問[しつもん]", reading: "しつもん", meaning: "question" },
    { word: "宿題[しゅくだい]", reading: "しゅくだい", meaning: "homework" },
    { word: "全部[ぜんぶ]", reading: "ぜんぶ", meaning: "all; entirely" },
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
      text: "The **causer** takes {{を}} or {{に}} depending on who performs the action. When the person being made to act is also the one doing the verb, use {{を}}: {{先生[せんせい]は学生[がくせい]を廊下[ろうか]に立[た]たせた}} — 'The teacher made the student stand in the hall.' When they act on something else, the actor takes {{に}} and the object keeps {{を}}: {{母[はは]は子供[こども]に野菜[やさい]を食[た]べさせる}}.",
    },
    {
      type: "rule",
      title: "を vs に (causative)",
      items: [
        "**を** — the person made to act **is** the doer: {{子供を寝[ね]させる}} (make the child sleep).",
        "**に** — the person is made to act **on something else**: {{子供に野菜を食べさせる}}.",
        "**に** alone can also mean permission: {{子供に遊[あそ]ばせる}} — let the child play.",
      ],
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
      text: "When something bad happens *to you*, the passive can drop the agent: {{雨[あめ]に降[ふ]られた}} — 'I got rained on (and I didn't like it).' The subject is the one inconvenienced, not the rain.",
    },
    {
      type: "heading",
      text: "Causative-passive — be made to do",
    },
    {
      type: "prose",
      text: "Stack **causative + passive** to mean 'was forced / made to do': {{食[た]べ}} + {{させ}} + {{られる}} → {{食べさせられた}} — 'I was made to eat (it).' This is the passive of being compelled — common for homework, overtime, and awkward obligations.",
    },
    {
      type: "examples",
      items: [
        { jp: "宿題[しゅくだい]を全部[ぜんぶ]やらせられた。", en: "Was made to do all the homework." },
        { jp: "長[なが]い間[あいだ]、待[ま]たされた。", en: "Was made to wait a long time." },
        { jp: "お酒[さけ]を飲[の]ませられた。", en: "Was made to drink alcohol (social pressure)." },
      ],
    },
    {
      type: "heading",
      text: "Passive or potential? (ru-verbs)",
    },
    {
      type: "rule",
      title: "食べられる — two readings",
      items: [
        "**Passive:** {{ケーキが食べられた}} — the cake was eaten.",
        "**Potential:** {{ケーキが食べられる}} — can eat cake (context / {{が}} vs {{を}} helps).",
        "U-verbs avoid ambiguity: passive {{読[よ]まれる}} vs potential {{読める}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "先生[せんせい]は学生[がくせい]に本[ほん]を読[よ]ませた。", en: "The teacher made the students read the book." },
        { jp: "質問[しつもん]に答[こた]えさせてください。", en: "Please let me answer the question." },
        { jp: "待[ま]たされた。", en: "I was made to wait (suffering nuance)." },
        { jp: "ケーキが弟[おとうと]に食[た]べられた。", en: "The cake was eaten by my little brother." },
        { jp: "日本語[にほんご]は、読[よ]める。", en: "I can read Japanese. (potential — distinct form for u-verbs)" },
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
      prompt: "「Was made to do homework」?",
      choices: ["宿題をさせた", "宿題をさせられた", "宿題をされた", "宿題をさせる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Make the child sleep (child = doer) — particle for child?",
      choices: ["に", "を", "が", "で"],
      answer: 1,
    },
  ],
};
