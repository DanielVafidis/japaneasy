import type { Lesson } from "../types";

export const easeDifficulty: Lesson = {
  id: "ease-difficulty",
  stage: "special-expressions",
  order: 7,
  title: "Easy & Hard To Do",
  subtitle: "やすい · にくい · がたい + ないで · ずに",
  summary:
    "Attach suffixes to verb stems to describe how easy or hard an action is — then meet the 'without doing' negatives ないで and ずに, plus old-school ん and ぬ.",
  estMinutes: 18,
  vocabulary: [
    { word: "読[よ]む", reading: "よむ", meaning: "to read" },
    { word: "分[わ]かる", reading: "わかる", meaning: "to understand" },
    { word: "信[しん]じる", reading: "しんじる", meaning: "to believe" },
    { word: "言[い]う", reading: "いう", meaning: "to say" },
    { word: "避[さ]ける", reading: "さける", meaning: "to avoid" },
    { word: "決[き]める", reading: "きめる", meaning: "to decide" },
    { word: "話[はなし]", reading: "はなし", meaning: "story; talk" },
    { word: "字[じ]", reading: "じ", meaning: "character; handwriting" },
    { word: "断[ことわ]る", reading: "ことわる", meaning: "to decline; to refuse (u-verb)" },
    { word: "解[と]く", reading: "とく", meaning: "to solve (u-verb)" },
  ],
  blocks: [
    {
      type: "prose",
      text: "These suffixes attach to the **ます-stem** (i-form) of a verb and behave like i-adjectives. They describe whether an action is physically easy, hard, nearly impossible, or emotionally awkward.",
    },
    {
      type: "rule",
      title: "The four suffixes",
      items: [
        "**{{やすい}}** — easy to do: {{読みやすい}} — easy to read.",
        "**{{にくい}}** — hard to do (general): {{分かりにくい}} — hard to understand.",
        "**{{がたい}}** — hard to do (formal / nearly impossible): {{信[しん]じがたい}} — hard to believe.",
        "**{{づらい}}** — psychologically painful / awkward: {{言[い]いづらい}} — hard to say (emotionally).",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "この本[ほん]は読[よ]みやすい。", en: "This book is easy to read." },
        { jp: "字[じ]が小[ちい]さくて読[よ]みにくい。", en: "The characters are small and hard to read." },
        { jp: "彼[かれ]の話[はなし]は信[しん]じがたい。", en: "His story is hard to believe." },
        { jp: "お金[かね]の話[はなし]は言[い]いづらい。", en: "Money talk is awkward to bring up." },
      ],
    },
    {
      type: "table",
      caption: "にくい vs づらい",
      headers: ["Suffix", "Focus", "Example"],
      rows: [
        ["にくい", "objective difficulty", "読[よ]みにくい (hard to read — small font)"],
        ["づらい", "social / emotional awkwardness", "断[ことわ]りづらい (hard to refuse)"],
        ["がたい", "formal; nearly impossible", "信[しん]じがたい (hard to believe)"],
        ["やすい", "easy by nature", "分[わ]かりやすい (easy to understand)"],
      ],
    },
    {
      type: "heading",
      text: "Conjugation",
    },
    {
      type: "rule",
      title: "They behave like i-adjectives",
      items: [
        "Negative: {{読[よ]みにくくない}} — not hard to read.",
        "Past: {{説明[せつめい]しやすかった}} — was easy to explain.",
        "Adverb: {{分[わ]かりにくく書[か]いてある}} — written in a hard-to-understand way.",
        "**Noun + を:** {{避[さ]けがたい}} — unavoidable (hard to avoid).",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "この問題[もんだい]は、解[と]きにくくない。", en: "This problem isn't hard to solve." },
        { jp: "彼[かれ]の態度[たいど]は、理解[りかい]しがたい。", en: "His attitude is hard to understand. (formal)" },
        { jp: "避[さ]けがたい責任[せきにん]だ。", en: "It's a responsibility that's hard to avoid." },
      ],
    },
    {
      type: "note",
      text: "Don't confuse {{にくい}} with the negative {{にく}} (meat) or with {{にくい}} from {{にく}}. The suffix always follows a verb stem.",
    },
    {
      type: "tip",
      text: "{{づらい}} is extremely common in daily speech for social discomfort — {{頼[たの]みづらい}} (hard to ask a favour), {{断[ことわ]りづらい}} (hard to refuse).",
    },
    {
      type: "heading",
      text: "Without doing: 〜ないで・〜ずに",
    },
    {
      type: "rule",
      title: "Two ways to say 'without doing X'",
      items: [
        "**Negative + {{で}}**: {{朝[あさ]ごはんを食[た]べないで出[で]かけた}} — 'left without eating breakfast.'",
        "**{{〜ずに}}** — the literary twin: replace {{ない}} with {{ず}}: {{食べずに}}, {{言[い]わずに}}.",
        "{{する}} is irregular: {{しない}} → {{せず（に）}}: {{連絡[れんらく]せずに}}.",
        "Without {{に}}, {{〜ず}} can also end a clause in written style: {{何[なに]も言わず、去[さ]った}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "宿題[しゅくだい]をしないで、寝[ね]てしまった。", en: "I fell asleep without doing my homework." },
        { jp: "辞書[じしょ]を使[つか]わずに、記事[きじ]を読[よ]めた。", en: "I managed to read the article without using a dictionary." },
        { jp: "彼[かれ]は何[なに]も言[い]わずに帰[かえ]った。", en: "He went home without saying anything." },
      ],
    },
    {
      type: "heading",
      text: "Old-school negatives: ん・ぬ",
    },
    {
      type: "rule",
      title: "Recognize these on sight",
      items: [
        "**{{〜ん}}** — casual, masculine-leaning shortening of {{ない}}: {{知[し]らん}}, {{分[わ]からん}}, {{すまん}}. Past: {{知らんかった}}.",
        "**{{〜ぬ}}** — classical negative, survives in set phrases and stern lines: {{ならぬ}} 'must not', {{思[おも]わぬ}} 'unexpected'.",
        "{{する}} becomes {{せん}} / {{せぬ}}: {{気[き]にせんでいい}} 'no need to worry (dialect/casual)'.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "そんなことは知[し]らん。", en: "I know nothing about that. (gruff casual)" },
        { jp: "旅先[たびさき]で思[おも]わぬ人[ひと]に会[あ]った。", en: "I ran into an unexpected person while traveling." },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Easy to read」?",
      choices: ["読みやすい", "読みにくい", "読みそう", "読みたい"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Psychologically awkward 'hard to say'?",
      choices: ["言いにくい", "言いづらい", "Both work; づらい = emotional", "言いがたい only"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "Suffix attaches to…",
      choices: ["dictionary form", "ます-stem", "te-form", "past tense"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Hard to refuse (socially awkward)」 — most natural daily?",
      choices: ["断りにくい", "断りづらい", "断りがたい", "断りやすい"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Past: 「Was easy to understand」?",
      choices: ["分かりやすい", "分かりやすかった", "分かりやすく", "分かりやすいだった"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "避けがたい means…",
      choices: ["easy to avoid", "hard to avoid / unavoidable", "avoided already", "must avoid"],
      answer: 1,
    },
    {
      kind: "fill",
      prompt: "「I read it without using a dictionary」 — fill with the literary 'without'",
      promptJp: "辞書を使わ（　）に読んだ。",
      answers: ["ず"],
      explanation: "Replace ない with ず: 使わない → 使わずに.",
    },
    {
      kind: "mc",
      prompt: "知らん is a casual form of…",
      choices: ["知らない", "知りたい", "知られる", "知るな"],
      answer: 0,
      explanation: "ん is a rough, masculine-leaning shortening of ない.",
    },
    {
      kind: "order",
      prompt: "Build: 'These characters are small and hard to read'",
      tiles: ["この字[じ]は", "小[ちい]さくて", "読[よ]みにくい"],
      distractors: ["読[よ]むにくい"],
      explanation: "にくい attaches to the stem: 読み + にくい.",
    },
  ],
  drills: [
    { id: "yasui", prompt: "Add 'easy to' — 'easy to read'", jp: "読[よ]む", answers: ["読[よ]みやすい"] },
    { id: "nikui", prompt: "Add 'hard to' — 'hard to understand'", jp: "分[わ]かる", answers: ["分[わ]かりにくい"] },
    { id: "gatai", prompt: "Add 'scarcely possible to' — 'hard to believe'", jp: "信[しん]じる", answers: ["信[しん]じがたい"] },
    { id: "naide", prompt: "Say 'without saying' — everyday", jp: "言[い]う", answers: ["言[い]わないで"] },
    { id: "zuni", prompt: "Say 'without saying' — literary", jp: "言[い]う", answers: ["言[い]わずに"] },
  ],
};
