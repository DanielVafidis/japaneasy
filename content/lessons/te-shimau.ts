import type { Lesson } from "../types";

export const teShimau: Lesson = {
  id: "te-shimau",
  stage: "n3",
  order: 1,
  title: "〜てしまう",
  subtitle: "Completion, regret, and relief",
  summary:
    "Mark finished actions — and the regret or (sometimes) relief that comes with them — when plans slip, trains leave, or you finally clear the inbox.",
  estMinutes: 16,
  vocabulary: [
    { word: "忘[わす]れる", reading: "わすれる", meaning: "to forget" },
    { word: "遅[おく]れる", reading: "おくれる", meaning: "to be late" },
    { word: "全部[ぜんぶ]", reading: "ぜんぶ", meaning: "all; entirely" },
    { word: "終[お]わる", reading: "おわる", meaning: "to end; finish" },
    { word: "疲[つか]れる", reading: "つかれる", meaning: "to get tired" },
    { word: "提出[ていしゅつ]", reading: "ていしゅつ", meaning: "submission; to submit" },
    { word: "電車[でんしゃ]", reading: "でんしゃ", meaning: "train" },
    { word: "安心[あんしん]", reading: "あんしん", meaning: "relief; peace of mind" },
  ],
  blocks: [
    {
      type: "prose",
      text: "{{〜てしまう}} (casual {{〜ちゃう}} / {{〜じゃう}}) marks **completion** — and often **regret**, accident, or resignation. At work and in relationships it is the go-to ending for 'I messed up' and 'it's done, thank goodness.' Aspect helpers {{てある}} and {{ておく}} live in the **Te-form Aspect** lesson; here we stay on {{てしまう}}.",
    },
    {
      type: "rule",
      title: "Formation",
      items: [
        "Te-form + {{しまう}} → conjugates like a u-verb: {{忘れてしまった}}, {{遅れてしまいます}}.",
        "Casual contractions: {{忘れちゃった}}, {{忘れちゃう}}; after {{で}}: {{飲んじゃった}}.",
      ],
    },
    {
      type: "rule",
      title: "Nuances at work & home",
      items: [
        "**Completion:** {{報告書を全部書いてしまった}} — finished the whole report.",
        "**Regret / oops:** {{電車を乗り過ごしてしまった}} — overslept the stop (darn).",
        "**Accident:** {{ファイルを消してしまった}} — deleted the file by mistake.",
        "**Relief:** {{やっと提出できてしまった}} — finally got it submitted (weight off).",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "会議[かいぎ]に遅[おく]れてしまった。", en: "I ended up late for the meeting (regret)." },
        { jp: "大事[だいじ]なメールを忘[わす]れちゃった。", en: "I forgot an important email (darn)." },
        { jp: "残業[ざんぎょう]で疲[つか]れてしまった。", en: "I ended up exhausted from overtime." },
        { jp: "やっと全部[ぜんぶ]終[お]わってしまった。安心[あんしん]した。", en: "I finally finished everything. What a relief." },
      ],
    },
    {
      type: "table",
      caption: "Casual contractions",
      headers: ["Full", "Casual", "Example"],
      rows: [
        ["〜てしまう", "〜ちゃう", "遅れちゃう"],
        ["〜でしまう", "〜じゃう", "飲んじゃう"],
        ["〜てしまった", "〜ちゃった", "忘れちゃった"],
        ["〜てしまわない", "〜ちゃわない", "消えちゃわないよ"],
      ],
    },
    {
      type: "heading",
      text: "Plain past vs てしまう",
    },
    {
      type: "prose",
      text: "Plain {{遅[おく]れた}} states a fact. {{遅[おく]れてしまった}} adds **totality or emotion** — you wish you hadn't, or the outcome is locked in. Listen for {{ちゃった}} when friends complain about delays and slip-ups.",
    },
    {
      type: "dialogue",
      title: "Train delay & regret",
      lines: [
        { speaker: "A", jp: "どうしたの？顔[かお]が青[あお]いよ。", en: "What's wrong? You look pale." },
        { speaker: "B", jp: "終電[しゅうでん]を逃[のが]しちゃった…。", en: "I missed the last train (darn)…" },
        { speaker: "A", jp: "えっ、もうないの？", en: "What, there's nothing left?" },
        { speaker: "B", jp: "うん。タクシーに乗[の]るしかない。", en: "Yeah. No choice but a taxi." },
      ],
    },
    {
      type: "dialogue",
      title: "Relief after submitting",
      lines: [
        { speaker: "同僚", jp: "レポート、もう出した？", en: "Did you turn in the report yet?" },
        { speaker: "私", jp: "うん、さっき提出[ていしゅつ]しちゃった。やっと終[お]わった。", en: "Yeah, just submitted it. Finally done." },
      ],
    },
    {
      type: "tip",
      text: "{{ちゃった}} is one of the most common casual endings for regret and accidental outcomes — delay complaints, forgotten messages, and 'oops' at home.",
    },
    {
      type: "note",
      text: "For prepare-ahead {{ておく}} and result-left {{てある}}, see **Te-form Aspect**. This lesson is the regret / completion half of that trio.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Casual contraction of 遅れてしまった?",
      choices: ["遅れちゃった", "遅れたら", "遅れさせた", "遅れられる"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "てしまう often adds which nuance?",
      choices: ["Future tense", "Completion or regret", "Honorific", "Passive"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「I accidentally deleted the file」 — best helper?",
      choices: ["〜てみる", "〜てしまう", "〜てあげる", "〜てくる"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Casual form after 〜で (飲んでしまう)?",
      choices: ["飲んちゃう", "飲んじゃう", "飲んでしまう", "飲んだ"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "提出しちゃった after a deadline rush often means…",
      choices: ["failed to submit", "already got it submitted", "forgot to submit", "refused to submit"],
      answer: 1,
    },
    {
      kind: "order",
      prompt: "Build: 'I (regrettably) missed the meeting'",
      tiles: ["会議[かいぎ]に", "遅[おく]れて", "しまった"],
      distractors: ["遅[おく]れておいた"],
      explanation: "てしまう marks the unintended outcome; ておく would mean you delayed on purpose.",
    },
  ],
  drills: [
    { id: "shimau", prompt: "Add completion/regret — 'forget (for good)'", jp: "忘[わす]れる", answers: ["忘[わす]れてしまう"] },
    { id: "chatta", prompt: "Contract it — spoken 'oops'", jp: "忘[わす]れてしまった", answers: ["忘[わす]れちゃった"] },
    { id: "okureru", prompt: "Say 'end up late (regret)'", jp: "遅[おく]れる", answers: ["遅[おく]れてしまう"] },
    { id: "zenbu", prompt: "Say 'finish it all (completely)'", jp: "全部[ぜんぶ]終[お]わる", answers: ["全部[ぜんぶ]終[お]わってしまう"] },
  ],
};
