import type { Lesson } from "../types";

export const obligation: Lesson = {
  id: "obligation",
  stage: "essential-grammar",
  order: 11,
  title: "Must & Have To",
  subtitle: "なければならない and softer cousins",
  summary:
    "Express obligation, prohibition, and 'don't have to' with te-form based patterns.",
  estMinutes: 18,
  vocabulary: [
    { word: "宿題[しゅくだい]", reading: "しゅくだい", meaning: "homework" },
    { word: "薬[くすり]", reading: "くすり", meaning: "medicine" },
    { word: "約束[やくそく]", reading: "やくそく", meaning: "promise" },
    { word: "禁止[きんし]", reading: "きんし", meaning: "prohibition" },
    { word: "入[はい]る", reading: "はいる", meaning: "to enter; to go in (u-verb)" },
    { word: "吸[す]う", reading: "すう", meaning: "to smoke; to breathe in (u-verb)" },
    { word: "タバコ", reading: "タバコ", meaning: "tobacco; cigarette" },
  ],
  blocks: [
    {
      type: "heading",
      text: "Must / have to",
    },
    {
      type: "rule",
      title: "なければならない (formal obligation)",
      items: [
        "Negative te-form + {{なければならない}} — 'must do'.",
        "{{食べなければならない}} — must eat.",
        "Casual shortcuts: {{なきゃ}} / {{なくちゃ}} — {{行かなきゃ}} = gotta go.",
      ],
    },
    {
      type: "rule",
      title: "Softer obligation",
      items: [
        "{{なければいけない}} — same meaning, slightly less stiff.",
        "{{なくてはいけない}} — formal written style.",
        "{{なければ}} alone in context — 'otherwise (bad things happen)'.",
      ],
    },
    {
      type: "heading",
      text: "Must not & don't have to",
    },
    {
      type: "rule",
      title: "Prohibition & exemption",
      items: [
        "**Must not:** {{てはいけない}} / {{てはダメ[だめ]}} / {{ちゃだめ}} (casual) — {{食べてはいけない}}.",
        "**Don't have to:** {{なくてもいい}} — {{来[こ]なくてもいい}} — needn't come.",
        "Don't confuse them: {{食べなくてもいい}} = you may skip eating; {{食べてはいけない}} = eating is forbidden.",
      ],
    },
    {
      type: "table",
      caption: "Easy mix-ups",
      headers: ["Pattern", "Meaning"],
      rows: [
        ["食べなければならない", "must eat"],
        ["食べてはいけない", "must not eat"],
        ["食べなくてもいい", "don't have to eat"],
        ["食べないといけない", "colloquial must eat"],
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "宿題[しゅくだい]をしなければならない。", en: "Must do homework." },
        { jp: "薬[くすり]を飲[の]まなきゃ。", en: "Gotta take medicine (casual)." },
        { jp: "ここでタバコを吸[す]ってはいけない。", en: "Must not smoke here." },
        { jp: "明日[あした]来[こ]なくてもいいよ。", en: "You don't have to come tomorrow." },
      ],
    },
    {
      type: "note",
      text: "{{べき}} ('should / ought to') appears in Stage 4 — it's advice, not hard obligation. {{なければならない}} is stronger: a rule or necessity.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "「Must eat」 — correct pattern?",
      choices: ["食べてもいい", "食べなければならない", "食べてはいけない", "食べたら"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "「Must not smoke here」?",
      choices: ["吸ってもいい", "吸わなければならない", "吸ってはいけない", "吸ったら"],
      answer: 2,
    },
    {
      kind: "mc",
      prompt: "「Don't have to come」?",
      choices: ["来なければならない", "来なくてもいい", "来てはいけない", "来るなら"],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "Colloquial 「must eat」 (like なきゃ)?",
      choices: ["食べないといけない", "食べてもいい", "食べてはいけない", "食べなくてもいい"],
      answer: 0,
    },
    {
      kind: "order",
      prompt: "Build: 'I have to do my homework'",
      tiles: ["宿題[しゅくだい]を", "しなければ", "ならない"],
      distractors: ["しなくても"],
      explanation: "しなければならない = must do. しなくても belongs to 'don't have to' (てもいい).",
    },
  ],
  drills: [
    { id: "nakereba", prompt: "Finish the obligation — 'must do homework'", jp: "宿題[しゅくだい]をしなければ◯", answers: ["ならない", "いけない"] },
    { id: "casual-gotta", prompt: "Contract it — casual 'gotta do'", jp: "しなければならない", answers: ["しなきゃ", "しなくちゃ", "しないと"] },
    { id: "prohibition", prompt: "Finish the prohibition — 'must not enter'", jp: "入[はい]っては◯", answers: ["いけない", "だめ", "ならない"] },
    { id: "exemption", prompt: "Say 'don't have to drink' — exemption", jp: "飲[の]む", answers: ["飲[の]まなくてもいい"] },
  ],
};
