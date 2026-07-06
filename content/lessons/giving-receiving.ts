import type { Lesson } from "../types";

export const givingReceiving: Lesson = {
  id: "giving-receiving",
  stage: "essential-grammar",
  order: 13,
  title: "Giving & Receiving",
  subtitle: "あげる · くれる · もらう",
  summary:
    "Three verbs that encode direction — who gives, who receives, and whose perspective you're speaking from.",
  estMinutes: 20,
  vocabulary: [
    { word: "あげる", reading: "あげる", meaning: "to give (outward)" },
    { word: "くれる", reading: "くれる", meaning: "to give (to me/us)" },
    { word: "もらう", reading: "もらう", meaning: "to receive" },
    { word: "プレゼント", reading: "ぷれぜんと", meaning: "present; gift" },
    { word: "教[おし]える", reading: "おしえる", meaning: "to teach" },
    { word: "貸[か]す", reading: "かす", meaning: "to lend" },
  ],
  blocks: [
    {
      type: "prose",
      text: "English 'give' and 'get' hide **who benefits**. Japanese makes it explicit with three verbs. The choice depends on (1) who gives, (2) who receives, and (3) whether you're inside or outside the speaker's group.",
    },
    {
      type: "rule",
      title: "The three verbs",
      items: [
        "**{{あげる}}** — give **away from** the speaker's in-group. {{私は友達にプレゼントをあげた}}.",
        "**{{くれる}}** — someone gives **to** the speaker (or their in-group). {{友達がプレゼントをくれた}}.",
        "**{{もらう}}** — receive; focus on the recipient. {{私は友達にプレゼントをもらった}}.",
      ],
    },
    {
      type: "table",
      caption: "Particle patterns",
      headers: ["Verb", "Giver", "Receiver", "Thing"],
      rows: [
        ["あげる", "が (optional は)", "に", "を"],
        ["くれる", "が", "に (optional)", "を"],
        ["もらう", "に / から", "が (subject)", "を"],
      ],
    },
    {
      type: "heading",
      text: "Favours with te-form: 〜てあげる / 〜てくれる / 〜てもらう",
    },
    {
      type: "rule",
      title: "Doing favours for someone",
      items: [
        "**{{〜てあげる}}** — do a favour **for someone else** (outward): {{教[おし]えてあげた}}.",
        "**{{〜てくれる}}** — someone does a favour **for me/us**: {{教[おし]えてくれた}}.",
        "**{{〜てもらう}}** — I **get someone to** do for me: {{友達[ともだち]に教[おし]えてもらった}}.",
        "Same direction rules as あげる/くれる/もらう — now with any verb.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "弟[おとうと]に宿題[しゅくだい]を手伝[てつだ]ってあげた。", en: "I helped my little brother with homework." },
        { jp: "隣[となり]の人[ひと]が塵[ごみ]を捨[す]ててくれた。", en: "The neighbour threw out my trash (for me)." },
        { jp: "医者[いしゃ]に見[み]てもらった。", en: "I had a doctor examine me." },
      ],
    },
    {
      type: "heading",
      text: "Honorific giving verbs",
    },
    {
      type: "rule",
      title: "When the giver outranks you",
      items: [
        "**{{差し上げる}}** — humble: I give to a superior.",
        "**{{くださる}}** — respectful: a superior gives to me. {{先生が教えてくださいました}}.",
        "**{{いただく}}** — humble receive. {{資料をいただきました}}.",
        "These appear fully in the honorific lesson — for now, recognise {{ください}} as the imperative of {{くださる}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "母[はは]に花[はな]をあげた。", en: "I gave flowers to my mother." },
        { jp: "友達[ともだち]が手伝[てつだ]ってくれた。", en: "A friend helped me (did me the favour)." },
        { jp: "先生[せんせい]に日本語[にほんご]を教[おし]えてもらった。", en: "I received the favour of being taught Japanese (by the teacher)." },
      ],
    },
    {
      type: "rule",
      title: "Common mistake",
      items: [
        "✗ {{友達[ともだち]にプレゼントをくれた}} when YOU gave it — use {{あげた}}.",
        "✓ {{友達[ともだち]が}} (subject) {{くれた}} — the friend gave TO you.",
        "Think: {{くれる}} always means the giver acts **toward your circle**.",
      ],
    },
    {
      type: "note",
      text: "{{くれる}} implies gratitude — even for small favours. {{雨が降ってくれた}} can mean 'it kindly rained' (for the crops).",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Someone gives YOU a gift. Which verb?",
      choices: ["あげる", "くれる", "もらう", "送る"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "YOU give a friend a gift. Which verb?",
      choices: ["あげる", "くれる", "もらう", "取る"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Focus on receiving from a friend: 友達＿プレゼントを＿",
      choices: ["が…あげた", "に…もらった", "を…くれた", "で…もらう"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Friend taught you (benefit to you) — natural?",
      choices: ["教えてあげた", "教えてくれた", "教えてもらった", "Both B and C"],
      answer: 3,
    },
  ],
};
