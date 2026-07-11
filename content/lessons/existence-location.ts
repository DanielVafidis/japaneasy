import type { Lesson } from "../types";

export const existenceLocation: Lesson = {
  id: "existence-location",
  stage: "n5",
  order: 11,
  title: "Existence & Location",
  subtitle: "あります vs います · に vs で",
  summary:
    "Say where things and people are with あります and います, and mark location of existence (に) vs place of action (で).",
  estMinutes: 16,
  vocabulary: [
    { word: "駅[えき]", reading: "えき", meaning: "station" },
    { word: "学校[がっこう]", reading: "がっこう", meaning: "school" },
    { word: "近[ちか]く", reading: "ちかく", meaning: "nearby; vicinity" },
    { word: "先生[せんせい]", reading: "せんせい", meaning: "teacher" },
    { word: "電車[でんしゃ]", reading: "でんしゃ", meaning: "train" },
    { word: "コンビニ", reading: "コンビニ", meaning: "convenience store" },
    { word: "家[いえ]", reading: "いえ", meaning: "house; home" },
    { word: "犬[いぬ]", reading: "いぬ", meaning: "dog" },
    { word: "切符[きっぷ]", reading: "きっぷ", meaning: "ticket" },
    { word: "友達[ともだち]", reading: "ともだち", meaning: "friend" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Japanese uses two verbs for **existence**: {{あります}} for **inanimate** things (buildings, tickets, plans) and {{います}} for **animate** beings (people, animals). Both take a location marked with {{に}}.",
    },
    {
      type: "rule",
      title: "あります vs います",
      items: [
        "**{{あります}}** — things, places, events: {{駅があります}}, {{時間があります}}.",
        "**{{います}}** — people and animals: {{先生がいます}}, {{猫がいます}}.",
        "Both are polite; plain forms are {{ある}} and {{いる}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "近[ちか]くに駅[えき]があります。", en: "There is a station nearby." },
        { jp: "学校[がっこう]に先生[せんせい]がいます。", en: "The teacher is at school." },
        { jp: "家[いえ]に犬[いぬ]がいます。", en: "There is a dog at home." },
        { jp: "鞄[かばん]に切符[きっぷ]があります。", en: "There is a ticket in the bag." },
      ],
    },
    {
      type: "heading",
      text: "Location of existence: に",
    },
    {
      type: "prose",
      text: "When you say **where something or someone is**, mark the place with {{に}}. Think of {{に}} as pinning existence to a spot: {{公園に木があります}} — 'There are trees in the park.'",
    },
    {
      type: "rule",
      title: "Existence pattern",
      items: [
        "{{[place] に [thing/person] が あります／います}}",
        "Or reverse order: {{[thing/person] が [place] に あります／います}}.",
      ],
    },
    {
      type: "heading",
      text: "Place of action: で",
    },
    {
      type: "prose",
      text: "{{で}} marks **where an action happens**, not where something simply exists. {{駅で待つ}} — wait at the station (action). {{駅にいる}} — be at the station (existence).",
    },
    {
      type: "examples",
      items: [
        { jp: "駅[えき]で友達[ともだち]を待[ま]ちます。", en: "I wait for a friend at the station." },
        { jp: "コンビニで朝[あさ]ごはんを買[か]います。", en: "I buy breakfast at the convenience store." },
        { jp: "電車[でんしゃ]で会社[かいしゃ]に行[い]きます。", en: "I go to the office by train. (で = means)" },
      ],
    },
    {
      type: "table",
      caption: "に vs で at a glance",
      headers: ["Particle", "Use", "Example"],
      rows: [
        ["に", "Where something/someone is", "学校に先生がいます"],
        ["で", "Where you do something", "学校で勉強します"],
        ["で", "Means / vehicle", "電車で行きます"],
      ],
    },
    {
      type: "dialogue",
      title: "Commuting chat",
      lines: [
        { speaker: "A", jp: "近[ちか]くにコンビニ、ありますか？", en: "Is there a convenience store nearby?" },
        { speaker: "B", jp: "はい、駅[えき]の前[まえ]にあります。", en: "Yes, there's one in front of the station." },
        { speaker: "A", jp: "先生[せんせい]は今日[きょう]、学校[がっこう]にいますか？", en: "Is the teacher at school today?" },
        { speaker: "B", jp: "いますよ。二階[にかい]の教室[きょうしつ]にいます。", en: "Yes. They're in the classroom on the second floor." },
      ],
    },
    {
      type: "note",
      text: "Negative: {{ありません}} / {{いません}}. Past: {{ありました}} / {{いました}}. Don't mix animate and inanimate: {{先生があります}} is wrong.",
    },
    {
      type: "tip",
      text: "Events and schedules often take {{あります}}: {{明日[あした]は会議[かいぎ]があります}} — 'There is a meeting tomorrow.'",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「There is a station nearby」 — which verb?",
      choices: ["あります", "います", "します", "なります"],
      answer: 0,
      explanation: "Stations are inanimate → あります.",
    },
    {
      kind: "mc",
      prompt: "「The teacher is at school」 — which verb?",
      choices: ["あります", "います", "です", "行きます"],
      answer: 1,
      explanation: "People are animate → います.",
    },
    {
      kind: "mc",
      prompt: "Existence location particle?",
      choices: ["で", "を", "に", "が"],
      answer: 2,
      explanation: "に pins where something/someone is.",
    },
    {
      kind: "fill",
      prompt: "Fill the particle — 'wait at the station' (action place):",
      promptJp: "駅[えき]◯待[ま]つ",
      answers: ["で"],
      explanation: "で marks the place of an action.",
    },
    {
      kind: "order",
      prompt: "Build: 'There is a convenience store nearby'",
      tiles: ["近[ちか]くに", "コンビニが", "あります"],
      distractors: ["います"],
      explanation: "Stores are things → あります, not います.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "学校[がっこう]に先生[せんせい]がいます",
      explanation: "学校に先生がいます — The teacher is at school.",
    },
  ],
  drills: [
    { id: "aru-station", prompt: "Existence — 'there is a station'", jp: "駅[えき]が◯", answers: ["あります", "ある"] },
    { id: "iru-teacher", prompt: "Existence — 'the teacher is (there)'", jp: "先生[せんせい]が◯", answers: ["います", "いる"] },
    { id: "ni-location", prompt: "Fill the particle — existence location", jp: "学校[がっこう]◯先生[せんせい]がいます", answers: ["に"] },
    { id: "de-action", prompt: "Fill the particle — place of action", jp: "駅[えき]◯友達[ともだち]を待[ま]つ", answers: ["で"] },
    { id: "nearby-konbini", prompt: "Complete — 'there is a convenience store nearby'", jp: "近[ちか]くにコンビニが◯", answers: ["あります", "ある"] },
  ],
};
