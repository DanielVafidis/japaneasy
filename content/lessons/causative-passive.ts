import type { Lesson } from "../types";

export const causativePassive: Lesson = {
  id: "causative-passive",
  stage: "n3",
  order: 7,
  title: "Causative & Passive",
  subtitle: "Make / let · be done to · させられる",
  summary:
    "Full passive, causative, and causative-passive for work problems and relationship pressure — make someone do, get done to, and be forced to.",
  estMinutes: 22,
  vocabulary: [
    { word: "残業[ざんぎょう]", reading: "ざんぎょう", meaning: "overtime" },
    { word: "待[ま]つ", reading: "まつ", meaning: "to wait" },
    { word: "部下[ぶか]", reading: "ぶか", meaning: "subordinate" },
    { word: "上司[じょうし]", reading: "じょうし", meaning: "boss; superior" },
    { word: "説明[せつめい]", reading: "せつめい", meaning: "explanation" },
    { word: "仕事[しごと]", reading: "しごと", meaning: "work; job" },
    { word: "全部[ぜんぶ]", reading: "ぜんぶ", meaning: "all; entirely" },
    { word: "怒[おこ]る", reading: "おこる", meaning: "to get angry" },
  ],
  blocks: [
    {
      type: "prose",
      text: "N4 introduced the idea; this lesson is the **full toolkit**: causative (make/let), passive (be done to / suffering), and causative-passive {{させられる}} (be forced to). Work overtime, relationship friction, and detailed problem stories lean on these forms.",
    },
    {
      type: "heading",
      text: "Causative — make / let do",
    },
    {
      type: "rule",
      title: "Forming the causative",
      items: [
        "**Ru-verbs:** {{る}} → {{させる}}. {{食べる}} → {{食べさせる}}.",
        "**U-verbs:** final /u/ → /a/ + {{せる}}. {{待つ}} → {{待たせる}} · {{行く}} → {{行かせる}}.",
        "**Exceptions:** {{する}} → {{させる}}, {{来る}} → {{来させる}}.",
      ],
    },
    {
      type: "rule",
      title: "を vs に (causative)",
      items: [
        "**を** — the person made to act **is** the doer: {{部下を待たせる}} (make the subordinate wait).",
        "**に** — the person acts **on something else**: {{部下に資料を作らせる}}.",
        "**に** can also mean permission: {{部下に早退させる}} — let them leave early.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "上司[じょうし]は部下[ぶか]に説明[せつめい]をさせた。", en: "The boss made the subordinate give an explanation." },
        { jp: "子供[こども]に野菜[やさい]を食[た]べさせる。", en: "Make / have the child eat vegetables." },
        { jp: "少[すこ]し待[ま]たせてください。", en: "Please let me make you wait a moment. / Please wait." },
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
        "**U-verbs:** final /u/ → /a/ + {{れる}}. {{待つ}} → {{待たれる}} · {{言う}} → {{言われる}}.",
        "**Exceptions:** {{する}} → {{される}}, {{来る}} → {{来られる}}.",
      ],
    },
    {
      type: "prose",
      text: "The passive highlights the **patient**. {{会議で意見を言われた}} — 'I was told an opinion in the meeting.' The doer takes {{に}}.",
    },
    {
      type: "heading",
      text: "Suffering passive (迷惑の受身)",
    },
    {
      type: "note",
      text: "When something inconveniences *you*, the passive can drop a clear agent or keep {{に}}: {{雨に降られた}} — got rained on. {{友達にデートをキャンセルされた}} — my date was cancelled on me (I suffered).",
    },
    {
      type: "examples",
      items: [
        { jp: "上司[じょうし]に怒[おこ]られた。", en: "I got scolded by my boss." },
        { jp: "大事[だいじ]なファイルを消[け]された。", en: "My important file was deleted (on me)." },
        { jp: "雨[あめ]に降[ふ]られて、会議[かいぎ]に遅[おく]れた。", en: "I got rained on and was late to the meeting." },
      ],
    },
    {
      type: "heading",
      text: "Causative-passive — be made to do",
    },
    {
      type: "prose",
      text: "Stack **causative + passive**: {{させられる}} / short {{される}} on many u-verbs — 'was forced / made to do'. Classic for overtime and awkward obligations: {{残業させられた}}.",
    },
    {
      type: "rule",
      title: "Forms you'll hear",
      items: [
        "Full: {{食べさせられた}} · {{行かせられた}}.",
        "Short causative-passive (u-verbs, common): {{待たされた}} · {{飲まされた}} · {{やらされた}}.",
        "{{する}} → {{させられる}} (not {{さされた}} in careful speech).",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "週末[しゅうまつ]も仕事[しごと]をやらされた。", en: "I was made to work on the weekend too." },
        { jp: "長[なが]い間[あいだ]、待[ま]たされた。", en: "I was made to wait a long time." },
        { jp: "お酒[さけ]を飲[の]ませられた。", en: "I was made to drink (social pressure)." },
        { jp: "説明[せつめい]を全部[ぜんぶ]させられた。", en: "I was made to explain everything." },
      ],
    },
    {
      type: "dialogue",
      title: "Work complaint",
      lines: [
        { speaker: "A", jp: "昨日[きのう]、また残業[ざんぎょう]させられたよ。", en: "Yesterday I was made to do overtime again." },
        { speaker: "B", jp: "ええ？誰[だれ]に？", en: "What? By whom?" },
        { speaker: "A", jp: "部長[ぶちょう]に。部下[ぶか]に全部[ぜんぶ]やらせるんだ。", en: "By the section chief. Makes the subordinates do everything." },
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
        "**Potential:** {{ケーキが食べられる}} — can eat cake (context helps).",
        "U-verbs avoid ambiguity: passive {{読まれる}} vs potential {{読める}}.",
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
      prompt: "「Was made to do overtime」?",
      choices: ["残業をさせた", "残業をさせられた", "残業をされた", "残業をさせる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Make the subordinate wait (subordinate = doer) — particle?",
      choices: ["に", "を", "が", "で"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Short causative-passive of 待つ (common spoken)?",
      choices: ["待たせられた", "待たされた", "待たれた", "待たせる"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'I was made to wait by my boss'",
      tiles: ["上司[じょうし]に", "長[なが]く", "待[ま]たされた"],
      distractors: ["待[ま]たれた"],
      explanation: "Causative-passive 待たされた = was made to wait; 待たれた is plain passive.",
    },
  ],
  drills: [
    { id: "causative-ru", prompt: "Make the causative — 'make/let eat'", jp: "食[た]べる", answers: ["食[た]べさせる"] },
    { id: "causative-u", prompt: "Make the causative — 'make/let wait'", jp: "待[ま]つ", answers: ["待[ま]たせる"] },
    { id: "passive-u", prompt: "Make the passive — 'be scolded / get yelled at'", jp: "怒[おこ]る", answers: ["怒[おこ]られる"] },
    { id: "causative-passive", prompt: "Make the causative-passive — 'be made to do'", jp: "する", answers: ["させられる"] },
    { id: "short-cp", prompt: "Short causative-passive — 'was made to wait'", jp: "待[ま]つ", answers: ["待[ま]たされる", "待[ま]たされた"] },
  ],
};
