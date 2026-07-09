import { describe, expect, it } from "vitest";
import {
  containsKana,
  convertRomajiInInput,
  fromRomaji,
  kataToHira,
  normalizeRomaji,
  parseFurigana,
  stripFurigana,
  toReading,
  toRomaji,
} from "@/lib/japanese";

describe("parseFurigana", () => {
  it("attaches a bracketed reading to the preceding kanji run", () => {
    expect(parseFurigana("学生[がくせい]だ")).toEqual([
      { base: "学生", rt: "がくせい" },
      { base: "だ", rt: null },
    ]);
  });

  it("keeps a non-kanji head separate", () => {
    expect(parseFurigana("お茶[ちゃ]")).toEqual([
      { base: "お", rt: null },
      { base: "茶", rt: "ちゃ" },
    ]);
  });

  it("passes through text without markup", () => {
    expect(parseFurigana("ですか")).toEqual([{ base: "ですか", rt: null }]);
  });

  it("treats an unclosed bracket literally", () => {
    expect(stripFurigana("学生[がくせい")).toBe("学生[がくせい");
  });
});

describe("stripFurigana / toReading", () => {
  it("strips markup, keeps displayed characters", () => {
    expect(stripFurigana("学生[がくせい]だ")).toBe("学生だ");
  });

  it("produces the full kana reading", () => {
    expect(toReading("学生[がくせい]だ")).toBe("がくせいだ");
    expect(toReading("食[た]べる")).toBe("たべる");
  });

  it("leaves kana-only text untouched", () => {
    expect(toReading("ください")).toBe("ください");
  });
});

describe("toRomaji", () => {
  it("converts plain kana", () => {
    expect(toRomaji("がっこう")).toBe("gakkou");
    expect(toRomaji("にほんご")).toBe("nihongo");
  });

  it("uses furigana readings for kanji", () => {
    expect(toRomaji("学生[がくせい]")).toBe("gakusei");
  });

  it("handles sokuon and yoon", () => {
    expect(toRomaji("きって")).toBe("kitte");
    expect(toRomaji("しゃしん")).toBe("shashin");
    expect(toRomaji("まっちゃ")).toBe("matcha");
  });

  it("extends katakana long vowels", () => {
    expect(toRomaji("ラーメン")).toBe("raamen");
  });
});

describe("fromRomaji", () => {
  it("converts full syllables", () => {
    expect(fromRomaji("gakkou")).toBe("がっこう");
    expect(fromRomaji("tabenakatta")).toBe("たべなかった");
  });

  it("handles n before consonants and nn", () => {
    expect(fromRomaji("konnichiwa")).toBe("こんにちわ");
    expect(fromRomaji("genki")).toBe("げんき");
    expect(fromRomaji("sann")).toBe("さん");
  });

  it("accepts non-Hepburn aliases", () => {
    expect(fromRomaji("si")).toBe("し");
    expect(fromRomaji("tu")).toBe("つ");
    expect(fromRomaji("hu")).toBe("ふ");
    expect(fromRomaji("jyu")).toBe("じゅ");
  });

  it("converts to katakana when asked", () => {
    expect(fromRomaji("kamera", "kata")).toBe("カメラ");
  });
});

describe("convertRomajiInInput (live typing)", () => {
  it("holds a trailing incomplete syllable", () => {
    expect(convertRomajiInInput("gak")).toBe("がk");
    expect(convertRomajiInInput("tabe")).toBe("たべ");
  });

  it("converts a trailing n after a vowel, holds a bare n", () => {
    expect(convertRomajiInInput("shin")).toBe("しん");
    expect(convertRomajiInInput("n")).toBe("n");
  });

  it("preserves existing Japanese characters", () => {
    expect(convertRomajiInInput("元気janai")).toBe("元気じゃない");
  });
});

describe("misc helpers", () => {
  it("kataToHira converts the basic syllabary", () => {
    expect(kataToHira("カメラ")).toBe("かめら");
    expect(kataToHira("ドア")).toBe("どあ");
  });

  it("normalizeRomaji is case/space/hyphen insensitive", () => {
    expect(normalizeRomaji(" Gak-kou ")).toBe("gakkou");
  });

  it("containsKana detects kana", () => {
    expect(containsKana("abc")).toBe(false);
    expect(containsKana("aべc")).toBe(true);
    expect(containsKana("学生")).toBe(false);
  });
});
