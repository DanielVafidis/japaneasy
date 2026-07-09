import type { Lesson } from "../types";

export const genericNouns: Lesson = {
  id: "generic-nouns",
  stage: "special-expressions",
  order: 3,
  title: "Generic Nouns",
  subtitle: "こと · の · ところ · もの",
  summary:
    "Pick こと or の when turning clauses into noun phrases, pinpoint moments with ところ, and meet もの for excuses and general truths.",
  estMinutes: 17,
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
    {
      type: "heading",
      text: "ところ — the abstract point in time",
    },
    {
      type: "prose",
      text: "{{ところ}} literally means 'place', but as a generic noun it marks the **point** an action is at. The verb's tense tells you which point.",
    },
    {
      type: "rule",
      title: "Three snapshots",
      items: [
        "**Dictionary + {{ところ}}** — about to: {{今[いま]から出[で]かけるところ}} 'just about to head out.'",
        "**{{ている}} + {{ところ}}** — in the middle of: {{夕飯[ゆうはん]を作[つく]っているところ}}.",
        "**Past + {{ところ}}** — just finished: {{たった今[いま]着[つ]いたところ}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "ごめん、今[いま]から出[で]かけるところなんだ。", en: "Sorry — I'm just about to head out." },
        { jp: "今[いま]、夕飯[ゆうはん]を作[つく]っているところ。", en: "I'm right in the middle of making dinner." },
        { jp: "たった今[いま]、駅[えき]に着[つ]いたところです。", en: "I arrived at the station just this moment." },
      ],
    },
    {
      type: "note",
      text: "{{〜たところ}} pins the exact moment; {{〜たばかり}} (Time-Specific Actions) says it still *feels* recent — {{先月[せんげつ]買ったばかり}} works, {{先月買ったところ}} doesn't.",
    },
    {
      type: "heading",
      text: "もの — excuses and general truths",
    },
    {
      type: "prose",
      text: "Beyond meaning 'physical thing', {{もの}} works as a generic noun in two spoken patterns: sentence-final {{（だ）もの}}／{{（だ）もん}} gives a **childlike or feminine excuse** ('because…!'), and {{ものだ}} states a **general truth** about how things simply are.",
    },
    {
      type: "examples",
      items: [
        { jp: "だって、まだ眠[ねむ]いんだもん。", en: "But I'm still sleepy! (excuse)" },
        { jp: "子[こ]どもはよく転[ころ]ぶものだ。", en: "Kids just fall over a lot — that's how it is." },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Have climbed Mt. Fuji before」 — natural?",
      choices: ["富士山に登ったのがある", "富士山に登ったことがある", "富士山に登るのがある", "both A and B"],
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
    {
      kind: "mc",
      prompt: "食べているところ means…",
      choices: [
        "right in the middle of eating",
        "about to eat",
        "just finished eating",
        "a place to eat",
      ],
      answer: 0,
      explanation: "ている + ところ = mid-action. 食べるところ = about to; 食べたところ = just did.",
    },
    {
      kind: "mc",
      prompt: "だって、行きたいんだもん — the もん adds…",
      choices: [
        "a childlike 'because…!' excuse",
        "a formal conclusion",
        "a question",
        "past tense",
      ],
      answer: 0,
      explanation: "Sentence-final （だ）もの／もん marks a plaintive excuse.",
    },
    {
      kind: "order",
      prompt: "Build: 'I have climbed Mt. Fuji before'",
      tiles: ["富士山[ふじさん]に", "登[のぼ]ったことが", "ある"],
      distractors: ["登[のぼ]ることが"],
      explanation: "Experience = past tense + ことがある.",
    },
  ],
  drills: [
    { id: "nominalize", prompt: "Fill the nominalizer — 'I like watching'", jp: "見[み]る◯が好[す]き", answers: ["の", "こと"] },
    { id: "tokoro", prompt: "Fill — 'just about to run' (point in the action)", jp: "走[はし]る◯◯◯だ", answers: ["ところ"] },
    { id: "mono", prompt: "Fill — a physical thing", jp: "好[す]きな◯◯", answers: ["物[もの]"] },
    { id: "koto", prompt: "Fill — abstract matter: 'talk about Japan'", jp: "日本[にほん]の◯◯を話[はな]す", answers: ["こと"] },
  ],
};
