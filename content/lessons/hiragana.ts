import type { Lesson } from "../types";

export const hiragana: Lesson = {
  id: "hiragana",
  stage: "foundations",
  order: 1,
  title: "Hiragana",
  subtitle: "The basic phonetic script — every Japanese sound",
  summary:
    "The 46 core characters plus the muddied sounds, small ya/yu/yo, the small tsu, and long vowels.",
  estMinutes: 20,
  blocks: [
    {
      type: "prose",
      text: "Hiragana is the basic Japanese phonetic script. With a little under 50 characters it can represent **every sound** in the language. Each character is a single syllable — a vowel, or a consonant + vowel — with the lone exception of {{ん}}, which is a standalone /n/.",
    },
    {
      type: "prose",
      text: "Read the chart below up-to-down, right-to-left (the traditional order). Tap any character to hear it. Match the consonant to the vowel and most readings are predictable: {{き}} = ki, {{ゆ}} = yu. The tricky ones to memorise are {{し}} (shi), {{ち}} (chi), {{つ}} (tsu) and {{ふ}} (fu).",
    },
    {
      type: "kana",
      script: "hira",
      caption: "The 46 basic hiragana (gojūon)",
    },
    {
      type: "tip",
      text: "When you write by hand, stroke order and direction genuinely matter — they keep your characters legible and consistent. Learn them correctly from the very start to avoid bad habits.",
    },
    {
      type: "heading",
      text: "The muddied sounds — dakuten",
    },
    {
      type: "prose",
      text: "Adding two small strokes (dakuten 〇゙) or a small circle (handakuten 〇゚) turns a crisp consonant into a 'muddy' voiced one. So /k/→/g/, /s/→/z/, /t/→/d/, /h/→/b/, and /h/→/p/ with the circle.",
    },
    {
      type: "table",
      caption: "A few examples",
      headers: ["Plain", "Dakuten", "Handakuten"],
      rows: [
        ["か ka", "が ga", "—"],
        ["し shi", "じ ji", "—"],
        ["は ha", "ば ba", "ぱ pa"],
        ["ほ ho", "ぼ bo", "ぽ po"],
      ],
    },
    {
      type: "note",
      text: "{{ぢ}} sounds essentially identical to {{じ}} (ji), and {{づ}} like {{ず}} (zu). You will almost always use じ and ず.",
    },
    {
      type: "heading",
      text: "Small や・ゆ・よ (yōon)",
    },
    {
      type: "prose",
      text: "Attach a small {{ゃ}}, {{ゅ}}, or {{ょ}} to an /i/-row character to blend in a y-sound: {{き}} + {{ゃ}} → {{きゃ}} (kya). Note {{じ}} gives ja/ju/jo, {{し}} gives sha/shu/sho, and {{ち}} gives cha/chu/cho.",
    },
    {
      type: "examples",
      title: "Reading practice",
      items: [
        { jp: "きゃく", en: "guest, customer" },
        { jp: "しゃしん", en: "photograph" },
        { jp: "りょこう", en: "trip, travel" },
      ],
    },
    {
      type: "heading",
      text: "The small っ (sokuon)",
    },
    {
      type: "prose",
      text: "A small {{っ}} between two characters doubles (clips) the following consonant. {{か}} + small つ + {{こ}} → {{かっこ}} (kakko). Make sure you clip with the consonant of the **second** character.",
    },
    {
      type: "examples",
      items: [
        { jp: "ざっし", en: "magazine — zasshi" },
        { jp: "きって", en: "postage stamp — kitte" },
      ],
    },
    {
      type: "heading",
      text: "Long vowels",
    },
    {
      type: "prose",
      text: "Stretch a vowel by adding あ／い／う: /a/+あ, /i/+い, /e/+い, /u/+う, /o/+う. Hold it long enough — {{ここ}} (here) and {{こうこう}} (high school) are different words!",
    },
    {
      type: "examples",
      items: [
        { jp: "おばあさん", en: "grandmother (long a) — vs おばさん, aunt" },
        { jp: "がくせい", en: "student — gakusei" },
        { jp: "おはよう", en: "good morning — ohayō" },
      ],
    },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "Which romaji matches this character?",
      promptJp: "き",
      choices: ["ki", "ka", "ke", "chi"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Three hiragana are famously irregular. Which reading is correct?",
      promptJp: "つ",
      choices: ["tu", "tsu", "su", "chu"],
      answer: 1,
      explanation: "つ is read 'tsu', not 'tu'.",
    },
    {
      kind: "fill",
      prompt: "Type the romaji for this character:",
      promptJp: "ふ",
      answers: ["fu", "hu"],
      explanation: "ふ is romanised 'fu' (sometimes 'hu').",
    },
    {
      kind: "mc",
      prompt: "What does the small っ in きって do?",
      choices: [
        "Adds a y-sound",
        "Doubles the following consonant (kitte)",
        "Makes the vowel long",
        "Nothing — it is silent",
      ],
      answer: 1,
    },
    {
      kind: "mc",
      prompt: "How is this read?",
      promptJp: "しゃしん",
      choices: ["shashin", "syashin", "sashin", "shyashin"],
      answer: 0,
      explanation: "し + small ゃ = sha, so しゃしん = shashin (photograph).",
    },
    {
      kind: "listen",
      prompt: "Listen — type the word you hear:",
      audio: "ねこ",
      explanation: "ねこ — cat.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the word you hear:",
      audio: "きって",
      explanation: "きって (stamp) — the small っ doubles the t: ki-t-te.",
    },
    {
      kind: "listen",
      prompt: "Listen — type the word you hear:",
      audio: "しゃしん",
      explanation: "しゃしん (photo) — し plus small ゃ makes sha.",
    },
  ],
};
