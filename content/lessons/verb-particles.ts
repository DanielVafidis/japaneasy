import type { Lesson } from "../types";

export const verbParticles: Lesson = {
  id: "verb-particles",
  stage: "n5",
  order: 2,
  title: "Particles used with verbs",
  subtitle: "を · に · へ · で · から · まで",
  summary:
    "Connect verbs to the rest of the sentence: object, target, direction, place/means, and from–until ranges — with a commuting focus.",
  estMinutes: 18,
  vocabulary: [
    { word: "寿司[すし]", reading: "すし", meaning: "sushi" },
    { word: "食[た]べる", reading: "たべる", meaning: "to eat" },
    { word: "学校[がっこう]", reading: "がっこう", meaning: "school" },
    { word: "行[い]く", reading: "いく", meaning: "to go" },
    { word: "家[いえ]", reading: "いえ", meaning: "house; home" },
    { word: "電車[でんしゃ]", reading: "でんしゃ", meaning: "train" },
    { word: "友達[ともだち]", reading: "ともだち", meaning: "friend" },
    { word: "日本[にほん]", reading: "にほん", meaning: "Japan" },
    { word: "駅[えき]", reading: "えき", meaning: "station" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Reminder: Japanese is **SOV** — the **verb comes last**. Particles mark what each noun is doing in that chain: object, destination, place of action, starting point, end point. Commuting sentences are perfect practice: *from home → by train → to the station*.",
    },
    {
      type: "heading",
      text: "を — the direct object",
    },
    {
      type: "prose",
      text: "The particle {{を}} (pronounced **o**) marks the direct object — the thing the verb acts upon.",
    },
    {
      type: "examples",
      items: [
        { jp: "寿司[すし]を食[た]べる。", en: "Eat sushi." },
        { jp: "本[ほん]を読[よ]む。", en: "Read a book.", note: "本 = book, 読む = to read" },
        { jp: "切符[きっぷ]を買[か]う。", en: "Buy a ticket." },
      ],
    },
    {
      type: "heading",
      text: "に — the target",
    },
    {
      type: "prose",
      text: "{{に}} marks a target or destination: where you go, where something exists, a point in time, or an indirect object (the receiver of an action).",
    },
    {
      type: "examples",
      items: [
        { jp: "学校[がっこう]に行[い]く。", en: "Go to school. (destination)" },
        { jp: "友達[ともだち]に話[はな]す。", en: "Talk to a friend. (indirect object)" },
        { jp: "三時[さんじ]に来[く]る。", en: "Come at 3 o'clock. (time)" },
        { jp: "駅[えき]に行[い]く。", en: "Go to the station." },
      ],
    },
    {
      type: "heading",
      text: "へ — direction",
    },
    {
      type: "prose",
      text: "{{へ}} (pronounced **e** as a particle) also points toward a destination, but emphasises the *direction* of movement rather than the exact arrival point. With movement verbs, {{に}} and {{へ}} often overlap.",
    },
    {
      type: "examples",
      items: [
        { jp: "家[いえ]へ帰[かえ]る。", en: "Head home. (toward home)" },
        { jp: "駅[えき]へ歩[ある]く。", en: "Walk toward the station." },
      ],
    },
    {
      type: "heading",
      text: "で — context / means",
    },
    {
      type: "prose",
      text: "{{で}} marks the **context** in which an action happens — the place where it occurs, or the means/tool used to do it.",
    },
    {
      type: "examples",
      items: [
        { jp: "家[いえ]で食[た]べる。", en: "Eat at home. (location of action)" },
        { jp: "電車[でんしゃ]で行[い]く。", en: "Go by train. (means)" },
        { jp: "駅[えき]で待[ま]つ。", en: "Wait at the station. (place of action)" },
      ],
    },
    {
      type: "heading",
      text: "から / まで — from / until",
    },
    {
      type: "prose",
      text: "{{から}} marks a **starting point** (from); {{まで}} marks an **end point** (until / as far as). Together they describe a range — of place or time. Classic commute: {{家から駅まで}} — from home to the station.",
    },
    {
      type: "rule",
      title: "から and まで",
      items: [
        "**{{から}}** — from / starting at: {{家から}}, {{九時から}}.",
        "**{{まで}}** — until / as far as: {{駅まで}}, {{五時まで}}.",
        "Often paired: {{[A] から [B] まで}} — from A to B.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "家[いえ]から駅[えき]まで歩[ある]く。", en: "Walk from home to the station." },
        { jp: "駅[えき]から学校[がっこう]まで電車[でんしゃ]で行[い]く。", en: "Go from the station to school by train." },
        { jp: "九時[くじ]から五時[ごじ]まで働[はたら]く。", en: "Work from 9 until 5." },
      ],
    },
    {
      type: "dialogue",
      title: "Morning commute",
      lines: [
        { speaker: "A", jp: "毎朝[まいあさ]、家[いえ]から駅[えき]まで歩[ある]く？", en: "Do you walk from home to the station every morning?" },
        { speaker: "B", jp: "うん。駅[えき]から会社[かいしゃ]まで電車[でんしゃ]で行[い]く。", en: "Yeah. From the station to the office I go by train." },
        { speaker: "A", jp: "何時[なんじ]に駅[えき]に着[つ]く？", en: "What time do you arrive at the station?" },
        { speaker: "B", jp: "八時[はちじ]に着[つ]く。駅[えき]でコーヒーを買[か]う。", en: "I arrive at 8. I buy coffee at the station." },
      ],
    },
    {
      type: "table",
      caption: "Verb particles at a glance",
      headers: ["Particle", "Role", "Example"],
      rows: [
        ["を", "Direct object", "寿司を食べる"],
        ["に", "Target / time / existence", "駅に行く"],
        ["へ", "Direction toward", "家へ帰る"],
        ["で", "Place of action / means", "電車で行く"],
        ["から", "From / starting point", "家から"],
        ["まで", "Until / end point", "駅まで"],
      ],
    },
    {
      type: "tip",
      text: "{{に}} vs {{で}} with places: {{に}} marks the destination you move toward ({{学校に行く}}), while {{で}} marks where an action takes place ({{学校で食べる}}). Same place, different role.",
    },
    {
      type: "note",
      text: "Stack particles freely in SOV order: {{家から電車で駅まで行く}} — from home, by train, as far as the station, go. The verb still comes last.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Which particle marks the direct object (the thing eaten)?",
      promptJp: "寿司＿食べる",
      choices: ["は", "を", "に", "で"],
      answer: 1,
      explanation: "を marks the direct object of the verb.",
    },
    {
      kind: "mc",
      prompt: "'Eat AT home' — which particle marks 家?",
      promptJp: "家＿食べる",
      choices: ["を", "に", "で", "へ"],
      answer: 2,
      explanation: "で marks the location where an action takes place.",
    },
    {
      kind: "mc",
      prompt: "'Go TO school' — which particle marks the destination?",
      promptJp: "学校＿行く",
      choices: ["で", "を", "に", "も"],
      answer: 2,
      explanation: "に marks destination/target (へ is also possible for direction).",
    },
    {
      kind: "mc",
      prompt: "'From home to the station' — which pair?",
      promptJp: "家＿駅＿",
      choices: ["に / で", "から / まで", "を / へ", "が / は"],
      answer: 1,
      explanation: "から = from, まで = until/as far as.",
    },
    {
      kind: "fill",
      prompt: "Complete: go by train — 電車＿行く. Type just the particle:",
      answers: ["で"],
      explanation: "で marks means of transport.",
    },
    {
      kind: "order",
      prompt: "Build: 'I go to school by train'",
      tiles: ["電車[でんしゃ]で", "学校[がっこう]へ", "行[い]く"],
      distractors: ["学校[がっこう]を"],
      explanation: "で marks the means (by train), へ the direction; the verb comes last.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "家[いえ]から駅[えき]まで歩[ある]く",
      explanation: "家から駅まで歩く — Walk from home to the station.",
    },
  ],
  drills: [
    { id: "object-wo", prompt: "Fill the particle — 'eat fish'", jp: "魚[さかな]◯食[た]べる", answers: ["を"] },
    { id: "target-ni", prompt: "Fill the particle — '(is) at home'", jp: "家[いえ]◯いる", answers: ["に"] },
    { id: "direction-e", prompt: "Fill the particle — 'head toward Japan'", jp: "日本[にほん]◯行[い]く", answers: ["へ", "に"] },
    { id: "context-de", prompt: "Fill the particle — 'eat at school'", jp: "学校[がっこう]◯食[た]べる", answers: ["で"] },
    { id: "means-de", prompt: "Fill the particle — 'go by bus'", jp: "バス◯行[い]く", answers: ["で"] },
    { id: "from-kara", prompt: "Fill the particle — 'from home'", jp: "家[いえ]◯駅[えき]まで歩[ある]く", answers: ["から"] },
    { id: "until-made", prompt: "Fill the particle — 'to the station (as far as)'", jp: "家[いえ]から駅[えき]◯歩[ある]く", answers: ["まで"] },
  ],
};
