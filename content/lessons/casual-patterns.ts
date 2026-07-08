import type { Lesson } from "../types";

export const casualPatterns: Lesson = {
  id: "casual-patterns",
  stage: "essential-grammar",
  order: 18,
  title: "Casual Speech Patterns",
  subtitle: "Plain form · contractions · slang · sentence enders",
  summary:
    "Review plain-form conjugation and spoken contractions, then meet real-life slang (ってば、なんか) and the full cast of sentence-ending particles.",
  estMinutes: 20,
  vocabulary: [
    { word: "全然[ぜんぜん]", reading: "ぜんぜん", meaning: "not at all (with negative)" },
    { word: "本当[ほんとう]", reading: "ほんとう", meaning: "really; truth" },
    { word: "違[ちが]う", reading: "ちがう", meaning: "to differ; be wrong" },
    { word: "大丈夫[だいじょうぶ]", reading: "だいじょうぶ", meaning: "OK; all right" },
    { word: "面白[おもしろ]い", reading: "おもしろい", meaning: "interesting" },
    { word: "暇[ひま]", reading: "ひま", meaning: "free time; bored" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Everything in Essential Grammar has a **plain (dictionary) form** counterpart. Friends, family, and peers use plain form; {{です/ます}} is for politeness with strangers, seniors, and customers.",
    },
    {
      type: "table",
      caption: "Polite ↔ plain quick reference",
      headers: ["Polite", "Plain"],
      rows: [
        ["食べます", "食べる"],
        ["食べません", "食べない"],
        ["食べました", "食べた"],
        ["学生です", "学生だ"],
        ["静かです", "静かだ"],
        ["行きますか", "行く？ / 行くの？"],
      ],
    },
    {
      type: "heading",
      text: "Question の (instead of か)",
    },
    {
      type: "prose",
      text: "In casual speech, {{の}} often replaces {{か}} at the end of a question — especially when seeking confirmation or showing surprise. It sounds softer than a blunt {{か}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "今[いま]、暇[ひま]なの？", en: "Are you free now?" },
        { jp: "本当[ほんとう]に行[い]くの？", en: "Are you really going?" },
        { jp: "何[なに]してるの？", en: "What are you doing?" },
      ],
    },
    {
      type: "heading",
      text: "Common contractions",
    },
    {
      type: "rule",
      title: "You'll hear these constantly",
      items: [
        "{{じゃない}} / {{じゃん}} — negative or 'isn't it?': {{面白[おもしろ]いじゃん}}.",
        "{{〜てる}} — short for {{〜ている}}: {{何[なに]してる？}}.",
        "{{〜ちゃう}} — short for {{〜てしまう}} ('end up doing'): {{忘[わす]れちゃった}}.",
        "{{〜なくちゃ}} / {{〜なきゃ}} — 'have to': {{行[い]かなくちゃ}}.",
        "{{〜かも}} — short for {{かもしれない}} ('might'): {{雨[あめ]かも}}.",
      ],
    },
    {
      type: "dialogue",
      title: "Casual exchange",
      lines: [
        { speaker: "A", jp: "明日[あした]、映画[えいが]見[み]に行[い]かない？", en: "Wanna go see a movie tomorrow?" },
        { speaker: "B", jp: "うん、行[い]こう。何[なに]見[み]るの？", en: "Yeah, let's go. What are we watching?" },
        { speaker: "A", jp: "新[あたら]しいやつ。面白[おもしろ]いらしいよ。", en: "The new one. I hear it's good." },
        { speaker: "B", jp: "じゃあ、楽[たの]しみだね。", en: "Then I'm looking forward to it." },
      ],
    },
    {
      type: "heading",
      text: "Street-level slang",
    },
    {
      type: "rule",
      title: "Patterns you'll hear (and can mostly just recognize)",
      items: [
        "**Particles vanish, order loosens**: {{それ、何[なに]？}} — 'what's that?'; topics get tacked on after: {{もう食[た]べた？昨日[きのう]のケーキ}}.",
        "**{{っつう}}／{{つ}}** — slurred {{という}}: {{何[なん]つった？}} 'what'd you say?'",
        "**{{ってば}}／{{ったら}}** — exasperated 'I said…!': {{もう分[わ]かったってば！}}",
        "**{{なんか}}** — the all-purpose filler 'like': {{なんか、変[へん]じゃない？}}",
        "**{{〜やがる}}** — contempt for someone's action (rough; recognize, don't use): {{また遅刻[ちこく]しやがった}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "もう行[い]くってば！", en: "I said I'm going already!" },
        { jp: "この店[みせ]、なんか高[たか]くない？", en: "This place is, like, kind of expensive, no?" },
      ],
    },
    {
      type: "heading",
      text: "More sentence enders: な · さ · かい · だい · かしら",
    },
    {
      type: "rule",
      title: "The extended cast",
      items: [
        "**{{な}}** — rougher {{ね}}, masculine-leaning: {{今日[きょう]は暑[あつ]いな}}.",
        "**{{さ}}** — casual emphasis / filler between phrases: {{それがさ、意外[いがい]と難[むずか]しくてさ}}.",
        "**{{かい}}** — soft masculine yes/no question: {{元気[げんき]かい？}}",
        "**{{だい}}** — masculine open question: {{何[なん]だい、その顔[かお]は？}}",
        "**{{かしら}}** — feminine 'I wonder' ({{かな}} equivalent): {{間[ま]に合[あ]うかしら}}.",
      ],
    },
    {
      type: "heading",
      text: "Gender and tone (light touch)",
    },
    {
      type: "prose",
      text: "Some endings skew feminine or masculine in casual speech — {{わ}} / {{のよ}} / {{かしら}} (often feminine), {{ぜ}} / {{ぞ}} / {{な}} / {{かい・だい}} (often masculine). These are **optional flavour**, not rules. When in doubt, plain form without extra particles is neutral.",
    },
    {
      type: "tip",
      text: "If you can conjugate plain verbs and nouns, you already have the core of casual Japanese. Add contractions gradually as you hear them — don't force {{じゃん}} into every sentence.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Casual question for 「Are you a student?」?",
      choices: ["学生ですか", "学生だの", "学生なの", "学生かの"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "Casual short form of 食べている?",
      choices: ["食べて", "食べてる", "食べた", "食べる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "じゃない can mean…",
      choices: ["only 'is not'", "only 'isn't it?'", "negation or tag question", "past tense"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "Plain negative of 行きます?",
      choices: ["行かない", "行きない", "行くない", "行ってない"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "もう分かったってば！ — the ってば expresses…",
      choices: [
        "exasperation: 'I told you already!'",
        "a polite request",
        "uncertainty",
        "hearsay",
      ],
      answer: 0,
      explanation: "ってば／ったら add an 'I said…!' edge when you're not being listened to.",
    },
    {
      kind: "mc",
      prompt: "Casual masculine yes/no question ender?",
      choices: ["かい", "だい", "かしら", "ってば"],
      answer: 0,
      explanation: "かい asks yes/no; だい asks open questions; かしら is the feminine 'I wonder'.",
    },
    {
      kind: "order",
      prompt: "Build: 'Hey, is it okay to eat this?' (casual)",
      tiles: ["ねえ、", "これ", "食[た]べていいの？"],
      distractors: ["食[た]べていいか"],
      explanation: "Casual questions soften with の; bare か sounds blunt.",
    },
  ],
};
