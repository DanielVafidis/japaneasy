import type { Lesson } from "../types";

export const givingReceiving: Lesson = {
  id: "giving-receiving",
  stage: "n4",
  order: 4,
  title: "Giving & Receiving",
  subtitle: "あげる · くれる · もらう",
  summary:
    "Favour verbs for social life at school and work — who gives, who receives, and whose side you're on.",
  estMinutes: 20,
  vocabulary: [
    { word: "あげる", reading: "あげる", meaning: "to give (outward)" },
    { word: "くれる", reading: "くれる", meaning: "to give (to me/us)" },
    { word: "もらう", reading: "もらう", meaning: "to receive" },
    { word: "先輩[せんぱい]", reading: "せんぱい", meaning: "senior (school/work)" },
    { word: "後輩[こうはい]", reading: "こうはい", meaning: "junior" },
    { word: "教[おし]える", reading: "おしえる", meaning: "to teach" },
    { word: "貸[か]す", reading: "かす", meaning: "to lend" },
    { word: "手伝[てつだ]う", reading: "てつだう", meaning: "to help" },
    { word: "お菓子[かし]", reading: "おかし", meaning: "sweets; snacks" },
    { word: "傘[かさ]", reading: "かさ", meaning: "umbrella" },
  ],
  blocks: [
    {
      type: "prose",
      text: "English 'give' and 'get' hide **who benefits**. Japanese uses three verbs so listeners know whether the favour moves **out** from you, **in** toward you, or focuses on **receiving**.",
    },
    {
      type: "rule",
      title: "The three verbs",
      items: [
        "**{{あげる}}** — give **away from** your circle: {{後輩にお菓子をあげた}}.",
        "**{{くれる}}** — someone gives **to** you / your circle: {{先輩が傘をくれた}}.",
        "**{{もらう}}** — you receive (focus on recipient): {{先輩に傘をもらった}}.",
      ],
    },
    {
      type: "table",
      caption: "Particle patterns",
      headers: ["Verb", "Giver", "Receiver", "Thing"],
      rows: [
        ["あげる", "が / は", "に", "を"],
        ["くれる", "が", "に (often omitted)", "を"],
        ["もらう", "に / から", "が (subject)", "を"],
      ],
    },
    {
      type: "heading",
      text: "Favours: 〜てあげる / 〜てくれる / 〜てもらう",
    },
    {
      type: "rule",
      title: "Same directions, any verb",
      items: [
        "**{{〜てあげる}}** — do a favour for someone else.",
        "**{{〜てくれる}}** — someone does a favour for me/us.",
        "**{{〜てもらう}}** — I get someone to do it for me.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "後輩[こうはい]に駅[えき]までの道[みち]を教[おし]えてあげた。", en: "I showed my junior the way to the station." },
        { jp: "先輩[せんぱい]が資料[しりょう]を送[おく]ってくれた。", en: "My senior kindly sent me the materials." },
        { jp: "同僚[どうりょう]に会議[かいぎ]のノートを取[と]ってもらった。", en: "I had a coworker take notes for me in the meeting." },
        { jp: "雨[あめ]の日[ひ]、隣[となり]の人[ひと]が傘[かさ]を貸[か]してくれた。", en: "On a rainy day, the person next to me lent me an umbrella." },
      ],
    },
    {
      type: "dialogue",
      title: "Office favour",
      lines: [
        { speaker: "A", jp: "ごめん、今日[きょう]の資料[しりょう]、見[み]せてくれない？", en: "Sorry — could you show me today's materials?" },
        { speaker: "B", jp: "いいよ。後[あと]でメールで送[おく]ってあげる。", en: "Sure. I'll email them to you later." },
        { speaker: "A", jp: "助[たす]かる！昨日[きのう]も手伝[てつだ]ってもらったし。", en: "You're a lifesaver! You helped me yesterday too." },
        { speaker: "B", jp: "お互[たが]いさま。お菓子[かし]、あげるね。", en: "Same here. Here, have some snacks." },
      ],
    },
    {
      type: "rule",
      title: "Common mistake",
      items: [
        "✗ {{後輩にお菓子をくれた}} when YOU gave them — use {{あげた}}.",
        "✓ {{先輩がくれた}} — the senior gave TO you.",
        "{{くれる}} always points **toward your circle**.",
      ],
    },
    {
      type: "note",
      text: "Honorific twins ({{くださる}}, {{いただく}}, {{差し上げる}}) appear in keigo lessons. For now, recognise {{ください}} as related to {{くださる}}.",
    },
    {
      type: "tip",
      text: "{{てくれる}} often carries gratitude even for small favours — natural when someone saves your commute or shares notes.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Someone gives YOU a gift. Verb?",
      choices: ["あげる", "くれる", "もらう", "送る"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "YOU give a junior a snack. Verb?",
      choices: ["あげる", "くれる", "もらう", "取る"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Focus on receiving from a senior: 先輩＿傘を＿",
      choices: ["が…あげた", "に…もらった", "を…くれた", "で…もらう"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Senior taught you (benefit to you) — natural?",
      choices: ["教えてあげた", "教えてくれた", "教えてもらった", "Both B and C"],
      answer: 3,
      explanation: "くれた (their gift) and もらった (your receiving) both work.",
    },
    {
      kind: "fill",
      prompt: "Fill — favour toward you: 'lent (for me)'",
      promptJp: "傘[かさ]を貸[か]して◯",
      answers: ["くれた", "くれました", "くれる"],
      explanation: "てくれる = favour toward speaker.",
    },
    {
      kind: "order",
      prompt: "Build: 'My senior kindly lent me an umbrella'",
      tiles: ["先輩[せんぱい]が", "傘[かさ]を", "貸[か]してくれた"],
      distractors: ["貸[か]してあげた"],
      explanation: "Favour comes toward you → くれた.",
    },
  ],
  drills: [
    { id: "ageru", prompt: "Verb — give outward", jp: "？", answers: ["あげる"] },
    { id: "kureru", prompt: "Verb — give inward (to me/us)", jp: "？", answers: ["くれる"] },
    { id: "morau", prompt: "Verb — receive", jp: "？", answers: ["もらう"] },
    { id: "te-kureru", prompt: "Favour to me — 'teach me'", jp: "教[おし]える", answers: ["教[おし]えてくれる"] },
    { id: "te-morau", prompt: "Get them to — 'lend (for me)'", jp: "貸[か]す", answers: ["貸[か]してもらう"] },
    { id: "te-ageru", prompt: "Favour outward — 'help (them)'", jp: "手伝[てつだ]う", answers: ["手伝[てつだ]ってあげる"] },
  ],
};
