import type { Lesson } from "../types";

export const teAspect: Lesson = {
  id: "te-aspect",
  stage: "n3",
  order: 0,
  title: "Te-form Aspect",
  subtitle: "てある · ておく · てしまう",
  summary:
    "Shape how actions sit in time: result left in place (てある), prepare ahead (ておく), and finish or regret (てしまう).",
  estMinutes: 18,
  vocabulary: [
    { word: "窓[まど]", reading: "まど", meaning: "window" },
    { word: "開[あ]ける", reading: "あける", meaning: "to open (something)" },
    { word: "地図[ちず]", reading: "ちず", meaning: "map" },
    { word: "予約[よやく]", reading: "よやく", meaning: "reservation" },
    { word: "荷物[にもつ]", reading: "にもつ", meaning: "luggage; baggage" },
    { word: "忘[わす]れる", reading: "わすれる", meaning: "to forget" },
    { word: "旅[たび]", reading: "たび", meaning: "trip; travel" },
    { word: "電気[でんき]", reading: "でんき", meaning: "electricity; light" },
    { word: "置[お]く", reading: "おく", meaning: "to put; to place" },
    { word: "印刷[いんさつ]", reading: "いんさつ", meaning: "printing" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Three te-form helpers change **aspect** — how an action relates to a resulting state, preparation, or completion. You already met {{てしまう}} in its own lesson; here we put it next to {{てある}} and {{ておく}} so trip prep and daily routines make sense as a set.",
    },
    {
      type: "heading",
      text: "てある — result left in place",
    },
    {
      type: "prose",
      text: "{{〜てある}} describes a **transitive action whose result remains**, often with purpose. Focus is on the **state**, not who did it: {{窓が開けてある}} — 'The window has been left open (someone opened it and it's still open).'",
    },
    {
      type: "rule",
      title: "てある pattern",
      items: [
        "Te-form of a **transitive** verb + {{ある}}.",
        "Subject often takes {{が}}: {{ドアが閉めてある}}, {{メモが書いてある}}.",
        "Implies someone did the action on purpose; result is still visible.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "部屋[へや]の窓[まど]が開[あ]けてある。", en: "The room's window has been left open." },
        { jp: "テーブルに地図[ちず]が置[お]いてある。", en: "A map has been left on the table." },
        { jp: "ホテルが予約[よやく]してあります。", en: "The hotel has been reserved (already booked)." },
      ],
    },
    {
      type: "note",
      text: "Don't confuse with {{ている}} on intransitives: {{窓が開いている}} = the window is open (state). {{窓が開けてある}} = someone opened it and left it that way (agent implied).",
    },
    {
      type: "heading",
      text: "ておく — do in advance / leave as is",
    },
    {
      type: "prose",
      text: "{{〜ておく}} (casual {{〜とく}}) means do something **ahead of time**, or **leave it** that way for later. Perfect for trip packing and daily setup.",
    },
    {
      type: "rule",
      title: "ておく uses",
      items: [
        "**Prepare in advance:** {{荷物をまとめておく}} — pack luggage ahead.",
        "**Do for future convenience:** {{チケットを買っておく}} — buy tickets in advance.",
        "**Leave as is:** {{そのままにしておく}} — leave it as it is.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "旅[たび]の前[まえ]に、予約[よやく]をしておきます。", en: "I'll make a reservation before the trip." },
        { jp: "明日[あした]の資料[しりょう]を印刷[いんさつ]しておいた。", en: "I printed tomorrow's materials in advance." },
        { jp: "電気[でんき]は消[け]しておかなくてもいいよ。", en: "You don't have to turn the lights off (in advance / leave them)." },
        { jp: "パスワード、メモしといて。", en: "Jot the password down (for later). (casual 〜とく)" },
      ],
    },
    {
      type: "heading",
      text: "てしまう — completion / regret (brief)",
    },
    {
      type: "prose",
      text: "{{〜てしまう}} (casual {{〜ちゃう}}) marks **completion** or **regret/unintended outcome**. Full treatment is in the {{てしまう}} lesson; here just remember it sits next to the other aspect helpers.",
    },
    {
      type: "examples",
      items: [
        { jp: "荷物[にもつ]を全部[ぜんぶ]詰[つ]めてしまった。", en: "I finished packing all the luggage." },
        { jp: "パスポートを忘[わす]れちゃった。", en: "I forgot my passport (darn)." },
      ],
    },
    {
      type: "table",
      caption: "Aspect trio",
      headers: ["Form", "Focus", "Example"],
      rows: [
        ["〜てある", "Result left (purposeful)", "窓が開けてある"],
        ["〜ておく", "Do ahead / leave for later", "予約しておく"],
        ["〜てしまう", "Finish / regret / oops", "忘れちゃった"],
      ],
    },
    {
      type: "dialogue",
      title: "Trip prep",
      lines: [
        { speaker: "A", jp: "ホテル、もう予約[よやく]してある？", en: "Is the hotel already reserved?" },
        { speaker: "B", jp: "うん、先週[せんしゅう]予約[よやく]しておいた。", en: "Yeah, I booked it last week (in advance)." },
        { speaker: "A", jp: "パスポートは？", en: "Passport?" },
        { speaker: "B", jp: "鞄[かばん]に入[い]れてある… あっ、家[いえ]に忘[わす]れちゃった！", en: "It's in the bag… wait, I left it at home!" },
      ],
    },
    {
      type: "tip",
      text: "Prep phrase set: {{〜ておく}} for future you; {{〜てある}} when you point at a ready state; {{〜てしまう}} when it's all done — or you wish it weren't.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「The window has been left open (on purpose)」?",
      choices: ["窓が開いている", "窓が開けてある", "窓を開いておく only", "窓が開いてしまう"],
      answer: 1,
      explanation: "てある = transitive result left in place.",
    },
    {
      kind: "mc",
      prompt: "Do in advance — book a hotel?",
      choices: ["予約してある (only state)", "予約しておく", "予約してしまう only", "予約している only"],
      answer: 1,
      explanation: "ておく = do ahead for later.",
    },
    {
      kind: "mc",
      prompt: "Casual contraction of ておく?",
      choices: ["ちゃう", "とく", "てる", "とる only always"],
      answer: 1,
      explanation: "ておく → とく in casual speech.",
    },
    {
      kind: "fill",
      prompt: "Complete — 'I forgot (regrettably)':",
      promptJp: "忘[わす]れて◯",
      answers: ["しまった", "しまいました", "ちゃった"],
      explanation: "てしまう / ちゃう for regret completion.",
    },
    {
      kind: "order",
      prompt: "Build: 'I reserved the hotel in advance'",
      tiles: ["ホテルを", "予約[よやく]して", "おいた"],
      distractors: ["しまった"],
      explanation: "ておく (past ておいた) for advance preparation.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "窓[まど]が開[あ]けてある",
      explanation: "窓が開けてある — The window has been left open.",
    },
  ],
  drills: [
    { id: "te-aru", prompt: "Result left — 'window has been opened'", jp: "窓[まど]が開[あ]け◯", answers: ["てある"] },
    { id: "te-oku-yoyaku", prompt: "In advance — complete 'reserve…'", jp: "予約[よやく]して◯", answers: ["おく", "おきます", "おいた"] },
    { id: "te-oku-casual", prompt: "Casual form of ておく", jp: "〜ておく → 〜◯", answers: ["とく"] },
    { id: "te-shimau-brief", prompt: "Regret completion — 'forgot'", jp: "忘[わす]れて◯", answers: ["しまった", "ちゃった"] },
    { id: "te-aru-vs-teiru", prompt: "Result left (not mere state) — fill", jp: "メモが書[か]い◯", answers: ["てある"] },
  ],
};
