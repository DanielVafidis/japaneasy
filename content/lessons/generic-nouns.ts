import type { Lesson } from "../types";

export const genericNouns: Lesson = {
  id: "generic-nouns",
  stage: "special-expressions",
  order: 3,
  title: "Generic Nouns",
  subtitle: "こと · の — intangible vs tangible",
  summary:
    "Pick こと or の when turning clauses into noun phrases — the choice depends on whether you mean an event or a physical thing.",
  estMinutes: 14,
  vocabulary: [
    { word: "こと", reading: "こと", meaning: "thing (abstract); matter; event" },
    { word: "物[もの]", reading: "もの", meaning: "thing (physical object)" },
    { word: "見[み]る", reading: "みる", meaning: "to see; watch" },
    { word: "走[はし]る", reading: "はしる", meaning: "to run" },
    { word: "好[す]き", reading: "すき", meaning: "like; fond of" },
    { word: "上手[じょうず]", reading: "じょうず", meaning: "skillful" },
  ],
  blocks: [
    {
      type: "prose",
      text: "You already know {{の}} and {{こと}} as **nominalizers** ('studying Japanese'). In Special Expressions, the same pair often marks whether the clause refers to an **intangible event** ({{こと}}) or something **observable / tangible** ({{の}}).",
    },
    {
      type: "rule",
      title: "Rough split",
      items: [
        "**{{こと}}** — events, experiences, matters: {{日本[にほん]に行[い]くこと}} · {{勉強[べんきょう]すること}}.",
        "**{{の}}** — things you can perceive directly: {{走[はし]るのを見[み]た}} · {{食[た]べるのが好[す]き}}.",
        "With **potential / ability** ({{できる}}), both appear: {{話[はな]すことができる}} (more common) vs {{話すのができる}} (emphasis on the skill itself).",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "日本[にほん]語[ご]を話[はな]すことができる。", en: "Can speak Japanese. (ability as a matter)" },
        { jp: "走[はし]るのを見[み]た。", en: "Saw (someone) running. (observed action)" },
        { jp: "ピアノを弾[ひ]くのが上手[じょうず]だ。", en: "Good at playing piano. (skill — often の)" },
        { jp: "海外[かいがい]に行[い]ったことがある。", en: "Have been abroad before. (experience)" },
      ],
    },
    {
      type: "heading",
      text: "こと for rules and messages",
    },
    {
      type: "prose",
      text: "Use {{こと}} when stating **rules, instructions, or hearsay packaged as a fact**: {{ここでタバコを吸[す]わないこと}} — 'No smoking here.' {{先生[せんせい]が来[く]ないこと}} — 'The fact that the teacher isn't coming.'",
    },
    {
      type: "examples",
      items: [
        { jp: "毎日[まいにち]、運動[うんどう]すること。", en: "Exercise every day. (as a rule / habit)" },
        { jp: "彼[かれ]が来[く]るのを待[ま]っている。", en: "Waiting for him to come. (waiting for the event — の)" },
      ],
    },
    {
      type: "note",
      text: "When both work, {{こと}} sounds slightly more formal or abstract; {{の}} feels more vivid and concrete. Native speakers sometimes use them interchangeably — don't panic over every sentence.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Have the experience of eating sushi」 — natural?",
      choices: ["寿司を食べたのがある", "寿司を食べたことがある", "寿司を食べるのがある", "both A and B"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Saw him running」 — which object marker phrase?",
      choices: ["走ることを見た", "走るのを見た", "走ったこと", "走るのが見た"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Written rule: 「Don't enter here」?",
      choices: ["入るの", "入ること", "入ったの", "入るもの"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "こと often marks…",
      choices: ["physical objects only", "events, experiences, rules", "locations", "people"],
      answer: 1,
    },
  ],
};
