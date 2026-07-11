import type { Reading } from "../types";

/** Uses: state-of-being (だ/じゃない/だった), は・も・が・の, adjectives, を + verb. */
export const myDog: Reading = {
  id: "my-dog",
  stage: "n5",
  order: 0,
  title: "My Dog",
  jpTitle: "私[わたし]の犬[いぬ]",
  summary: "A first tiny story: a big dog, a small cat, and yesterday's rain.",
  estMinutes: 3,
  body: [
    {
      jp: "私[わたし]の犬[いぬ]は大[おお]きい。名前[なまえ]はハチだ。",
      en: "My dog is big. His name is Hachi.",
    },
    {
      jp: "ハチは静[しず]かじゃない。でも、いい犬[いぬ]だ。",
      en: "Hachi is not quiet. But he's a good dog.",
    },
    {
      jp: "猫[ねこ]もいる。猫[ねこ]の名前[なまえ]はモモだ。モモは小[ちい]さい。",
      en: "There's a cat too. The cat's name is Momo. Momo is small.",
    },
    {
      jp: "ハチは魚[さかな]を食[た]べる。モモは魚[さかな]を食[た]べない。",
      en: "Hachi eats fish. Momo doesn't eat fish.",
    },
    {
      jp: "昨日[きのう]は雨[あめ]だった。ハチは元気[げんき]じゃなかった。",
      en: "Yesterday it was rainy. Hachi wasn't lively.",
    },
    {
      jp: "今日[きょう]はいい天気[てんき]だ。ハチは元気[げんき]だ。",
      en: "Today the weather is good. Hachi is lively.",
    },
  ],
  vocabulary: [
    { word: "大[おお]きい", reading: "おおきい", meaning: "big (i-adj)" },
    { word: "小[ちい]さい", reading: "ちいさい", meaning: "small (i-adj)" },
    { word: "でも", reading: "でも", meaning: "but; however" },
    { word: "天気[てんき]", reading: "てんき", meaning: "weather" },
    { word: "いる", reading: "いる", meaning: "to exist; to be (animate)" },
    { word: "魚[さかな]", reading: "さかな", meaning: "fish" },
    { word: "猫[ねこ]", reading: "ねこ", meaning: "cat" },
  ],
  quiz: [
    {
      kind: "mc",
      prompt: "What is the dog's name?",
      choices: ["ハチ", "モモ", "ポチ", "タロ"],
      answer: 0,
    },
    {
      kind: "mc",
      prompt: "Which is true?",
      choices: [
        "モモは魚を食べない",
        "モモは大きい",
        "ハチは静かだ",
        "ハチは魚を食べない",
      ],
      answer: 0,
      explanation: "モモは魚を食べない — Momo doesn't eat fish; Hachi does.",
    },
    {
      kind: "mc",
      prompt: "How was Hachi yesterday?",
      choices: [
        "元気じゃなかった",
        "元気だった",
        "静かだった",
        "大きかった",
      ],
      answer: 0,
      explanation: "It rained, and Hachi wasn't his lively self.",
    },
  ],
};
