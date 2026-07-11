import type { Lesson } from "../types";

export const advancedVolitional: Lesson = {
  id: "advanced-volitional",
  stage: "n1",
  order: 0,
  title: "Advanced Volitional",
  subtitle: "まい · ようが〜まいが · であろう · かろう",
  summary:
    "Literary volitional territory for debate and life resolve — まい, whether-or-not pairs, であろう, かろう. Basic ようと思う lives in Intention (N4).",
  estMinutes: 18,
  vocabulary: [
    { word: "方針[ほうしん]", reading: "ほうしん", meaning: "policy; course" },
    { word: "一致[いっち]", reading: "いっち", meaning: "agreement; unity" },
    { word: "二度[にど]と", reading: "にどと", meaning: "never again" },
    { word: "今後[こんご]", reading: "こんご", meaning: "from now on" },
    { word: "傾向[けいこう]", reading: "けいこう", meaning: "tendency; trend" },
    { word: "遅[おそ]い", reading: "おそい", meaning: "late; slow" },
    { word: "責任[せきにん]", reading: "せきにん", meaning: "responsibility" },
    { word: "改革[かいかく]", reading: "かいかく", meaning: "reform" },
    { word: "妥協[だきょう]", reading: "だきょう", meaning: "compromise" },
    { word: "反対[はんたい]", reading: "はんたい", meaning: "opposition" },
  ],
  blocks: [
    {
      type: "prose",
      text: "You already form volitionals ({{行こう}} · {{食べよう}}) and meet everyday intention in **Intention (つもり / ようと思う)** at N4. This N1 lesson is **literary and rhetorical**: negative volitional {{まい}}, whether-or-not pairs, written likelihood {{であろう}}, and archaic {{かろう}} — for essays, speeches, and formal resolve.",
    },
    {
      type: "heading",
      text: "Brief recap: volitional shape",
    },
    {
      type: "rule",
      title: "Formation (assumed known)",
      items: [
        "**U-verbs:** /u/ → /o/ + {{う}}: {{行こう}}.",
        "**Ru-verbs:** {{る}} → {{よう}}: {{食べよう}}.",
        "**する／来る:** {{しよう}} · {{来よう}}.",
        "Everyday {{〜ようと思う}} / {{〜ようにする}} — review in N4 Intention; we demote teaching them here.",
      ],
    },
    {
      type: "heading",
      text: "まい — negative volitional / 'probably not'",
    },
    {
      type: "rule",
      title: "Formation & two meanings",
      items: [
        "Dictionary + {{まい}}: {{行くまい}}. Ru-verbs also allow stem: {{食べまい}}. {{する}} → {{するまい}}／{{すまい}}.",
        "**Resolve 'never will':** {{二度とするまい}} — leadership / life reflection tone.",
        "**Written 'probably not':** {{彼はもう来るまい}}.",
        "**{{〜ようが〜まいが}}** — 'whether or not': {{降ろうが降るまいが}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "もう二度[にど]と、責任[せきにん]を逃[のが]れまい。", en: "Never again will I shirk responsibility." },
        { jp: "反対[はんたい]されようがされまいが、方針[ほうしん]は変[か]えない。", en: "Whether opposed or not, the policy won't change." },
        { jp: "彼[かれ]はもうその役[やく]を引[ひ]き受[う]けるまい。", en: "He probably won't take on that role again. (written)" },
      ],
    },
    {
      type: "heading",
      text: "ようとしない — refuses to try",
    },
    {
      type: "prose",
      text: "{{〜ようとしない}} — 'won't even attempt' — a strong formal complaint about leadership or colleagues: {{話し合おうとしない}}.",
    },
    {
      type: "examples",
      items: [
        { jp: "経営陣[けいえいじん]は改革[かいかく]しようとしない。", en: "Management won't even try to reform." },
        { jp: "相手[あいて]は妥協[だきょう]しようとしない。", en: "The other side refuses to try to compromise." },
      ],
    },
    {
      type: "heading",
      text: "であろう · かろう — written likelihood",
    },
    {
      type: "rule",
      title: "Literary equivalents of だろう",
      items: [
        "**{{であろう}}** — formal written {{だろう}}: {{今後も続くであろう}}.",
        "Can modify nouns: {{必要となるであろう知識}}.",
        "**{{かろう}}** — i-adjective volitional/conjecture: {{よかろう}}, {{遅かろうが早かろうが}}. Archaic flavour in debate rhetoric.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "この傾向[けいこう]は今後[こんご]も続[つづ]くであろう。", en: "This trend will likely continue from here on." },
        { jp: "始[はじ]めるのが遅[おそ]かろうが早[はや]かろうが、続[つづ]けることが大事[だいじ]だ。", en: "Whether you start late or early, what matters is continuing." },
        { jp: "一致[いっち]しようではないか。", en: "Shall we not unite? (rhetorical literary 'let us')" },
      ],
    },
    {
      type: "tip",
      text: "For everyday 'I think I'll…' use N4 {{〜ようと思う}}. Reach for {{まい}} / {{であろう}} when the register is essay, speech, or stern resolve.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Won't do that again」 — literary resolve?",
      choices: ["するまい", "しないでしょう", "しよう", "するはず"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "行こうが行くまいが means…",
      choices: ["whether (someone) goes or not", "let's definitely go", "(someone) probably went", "because (someone) won't go"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "であろう is the written equivalent of…",
      choices: ["だろう", "らしい", "そうだ", "はずだ"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "改革しようとしない means…",
      choices: ["will reform", "won't even try to reform", "reformed already", "should reform"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "よかろう is…",
      choices: ["literary i-adj conjecture", "casual past", "honorific", "passive"],
      answer: 0,
    },
    {
      kind: "order",
      prompt: "Build: 'Never again will I be late' (literary resolve)",
      tiles: ["二度[にど]と", "遅刻[ちこく]は", "するまい"],
      distractors: ["しないまい"],
      explanation: "まい attaches to the dictionary form: するまい.",
    },
  ],
  drills: [
    { id: "mai", prompt: "Literary negative volitional — 'shall not go'", jp: "行[い]く", answers: ["行[い]くまい"] },
    { id: "dearou", prompt: "Literary equivalent of だろう", jp: "だろう", answers: ["であろう"] },
    { id: "karou", prompt: "Literary conjecture for i-adjectives — 'is probably good'", jp: "よい", answers: ["よかろう"] },
    { id: "you-ga-mai-ga", prompt: "Fill — 'whether it rains or not'", jp: "降[ふ]ろうが降[ふ]る◯◯が", answers: ["まい"] },
    { id: "you-to-shinai", prompt: "Say 'won't even try to talk'", jp: "話[はな]す", answers: ["話[はな]そうとしない"] },
  ],
};
