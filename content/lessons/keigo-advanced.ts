import type { Lesson } from "../types";

export const keigoAdvanced: Lesson = {
  id: "keigo-advanced",
  stage: "n2",
  order: 10,
  title: "Advanced Keigo",
  subtitle: "させていただく · お〜いただく · business set phrases",
  summary:
    "Go beyond basic honorific/humble pairs into negotiation-ready business Japanese and set phrases.",
  estMinutes: 18,
  vocabulary: [
    { word: "確認[かくにん]", reading: "かくにん", meaning: "confirmation" },
    { word: "検討[けんとう]", reading: "けんとう", meaning: "consideration; review" },
    { word: "提案[ていあん]", reading: "ていあん", meaning: "proposal" },
    { word: "日程[にってい]", reading: "にってい", meaning: "schedule; itinerary" },
    { word: "変更[へんこう]", reading: "へんこう", meaning: "change; modification" },
    { word: "添付[てんぷ]", reading: "てんぷ", meaning: "attachment (file)" },
    { word: "失礼[しつれい]", reading: "しつれい", meaning: "rudeness; excuse me" },
    { word: "恐[おそ]れ入[い]ります", reading: "おそれいります", meaning: "I'm sorry to trouble you; much obliged" },
    { word: "承知[しょうち]", reading: "しょうち", meaning: "acknowledgment; understanding" },
    { word: "拝見[はいけん]", reading: "はいけん", meaning: "to look at (humble)" },
  ],
  blocks: [
    {
      type: "prose",
      text: "Basic keigo taught honorific and humble verb pairs. N2 business speech stacks **humble requests**, **receiving favors**, and **fixed phrases** used in mail and meetings.",
    },
    {
      type: "heading",
      text: "させていただく — humbly do (with permission)",
    },
    {
      type: "rule",
      title: "Causative + humble receive",
      items: [
        "Verb causative stem + {{ていただく}}: {{説明させていただく}} — 'I will (humbly) explain (with your leave).'",
        "Often past for completed action: {{確認させていただきました}}.",
        "Overuse can sound stiff or self-important; still ubiquitous in business.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "少[すこ]し説明[せつめい]させていただきます。", en: "Allow me to explain briefly." },
        { jp: "日程[にってい]を変更[へんこう]させていただけますでしょうか。", en: "Would it be possible for us to change the schedule?" },
        { jp: "本日[ほんじつ]は欠席[けっせき]させていただきます。", en: "I will be absent today (humbly)." },
      ],
    },
    {
      type: "heading",
      text: "お／ご〜いただく — receive a favor",
    },
    {
      type: "rule",
      title: "Humble receiving patterns",
      items: [
        "**{{お＋stem＋いただく}}**: {{お越しいただく}}, {{お読みいただく}}.",
        "**{{ご＋noun＋いただく}}**: {{ご確認いただく}}, {{ご検討いただく}}.",
        "Request form: {{ご確認いただけますか}}, {{ご検討いただければ幸いです}}.",
      ],
    },
    {
      type: "examples",
      items: [
        { jp: "添付[てんぷ]の資料[しりょう]をご確認[かくにん]ください。", en: "Please check the attached materials." },
        { jp: "ご検討[けんとう]いただけますと幸[さいわ]いです。", en: "We would appreciate it if you could consider this." },
        { jp: "お忙[いそが]しいところ恐[おそ]れ入[い]りますが、ご返信[へんしん]いただけますでしょうか。", en: "Sorry to bother you when you're busy — could you reply?" },
      ],
    },
    {
      type: "heading",
      text: "Business set phrases",
    },
    {
      type: "table",
      caption: "Meeting & mail staples",
      headers: ["Japanese", "Use"],
      rows: [
        ["恐れ入りますが…", "Soft lead-in to a request"],
        ["〜していただけますでしょうか", "Polite request"],
        ["〜いただければ幸いです", "We would be grateful if…"],
        ["承知いたしました", "Understood (humble)"],
        ["かしこまりました", "Certainly (service/business)"],
        ["失礼いたします", "Excuse me / leaving"],
        ["お手数をおかけします", "Sorry for the trouble"],
        ["今後ともよろしくお願いいたします", "Closing goodwill"],
      ],
    },
    {
      type: "dialogue",
      title: "Work negotiation (mail style spoken)",
      lines: [
        { speaker: "A", jp: "ご提案[ていあん]、拝見[はいけん]しました。", en: "I've looked over your proposal." },
        { speaker: "B", jp: "恐[おそ]れ入[い]ります。ご検討[けんとう]いただけますでしょうか。", en: "Much obliged. Would you be able to consider it?" },
        { speaker: "A", jp: "来週[らいしゅう]までに回答[かいとう]させていただきます。", en: "We'll get back to you by next week." },
        { speaker: "B", jp: "承知[しょうち]いたしました。よろしくお願[ねが]いいたします。", en: "Understood. Thank you in advance." },
      ],
    },
    {
      type: "note",
      text: "{{させていただく}} is humble for **your** action. {{いただく}} after {{お／ご〜}} is humble for **receiving their** action. Don't mix: you don't {{ご確認させていただく}} when you mean 'please check' — that's {{ご確認ください／いただく}}.",
    },
    {
      type: "tip",
      text: "In negotiations, stack softener + request: {{恐れ入りますが、日程を調整していただけますでしょうか}}.",
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Humble 'allow me to explain'?",
      choices: ["説明なさいます", "説明させていただきます", "ご説明になります only", "説明してさしあげます only wrong"],
      answer: 1,
      explanation: "させていただく = humble self-action with leave.",
    },
    {
      kind: "mc",
      prompt: "Ask them to consider?",
      choices: ["検討させてください only self", "ご検討いただけますか", "検討なさってください always rude", "検討します only plain"],
      answer: 1,
      explanation: "ご検討いただく receives their favor of considering.",
    },
    {
      kind: "mc",
      prompt: "「Understood」(humble business)?",
      choices: ["分かった", "承知いたしました", "知っています", "了解だ"],
      answer: 1,
      explanation: "承知いたしました is standard humble acknowledgment.",
    },
    {
      kind: "fill",
      prompt: "Complete — 'please check (honorific request)':",
      promptJp: "ご確認[かくにん]◯",
      answers: ["ください", "くださいませ", "いただけますか", "いただけますでしょうか"],
      explanation: "ご確認ください / いただけますか are both natural.",
    },
    {
      kind: "order",
      prompt: "Build: 'We will change the schedule (humble)'",
      tiles: ["日程[にってい]を", "変更[へんこう]させて", "いただきます"],
      distractors: ["なさいます"],
      explanation: "させていただく for own action.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the sentence you hear:",
      audio: "ご検討[けんとう]いただけますと幸[さいわ]いです",
      explanation: "ご検討いただけますと幸いです — We would appreciate your consideration.",
    },
  ],
  drills: [
    { id: "sasete-itadaku", prompt: "Humble self — complete 'explain…'", jp: "説明[せつめい]させて◯", answers: ["いただきます", "いただく"] },
    { id: "go-kakunin", prompt: "Request check — complete", jp: "ご確認[かくにん]◯", answers: ["ください", "いただけますか", "いただけますでしょうか"] },
    { id: "go-kentou", prompt: "Request consideration — complete", jp: "ご検討[けんとう]いただけますと◯です", answers: ["幸[さいわ]い", "幸い"] },
    { id: "shouchi", prompt: "Humble 'understood'", jp: "◯いたしました", answers: ["承知[しょうち]", "承知"] },
    { id: "osoreirimasu", prompt: "Soft request lead-in", jp: "◯が、少[すこ]しよろしいでしょうか", answers: ["恐[おそ]れ入[い]ります", "恐れ入ります", "おそれいります"] },
  ],
};
