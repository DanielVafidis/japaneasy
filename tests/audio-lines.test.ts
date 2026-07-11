import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { audioId, audioUtterance, collectAudioLines } from "@/lib/audio-lines";
import { allLessons } from "@/content/lessons";
import { allReadings } from "@/content/readings";

describe("audioUtterance", () => {
  it("reads furigana markup as kana", () => {
    expect(audioUtterance("学生[がくせい]です")).toBe("がくせいです");
  });

  it("passes plain text through", () => {
    expect(audioUtterance("こんにちは")).toBe("こんにちは");
  });
});

describe("audioId", () => {
  it("gives furigana markup and its plain reading the same clip", () => {
    expect(audioId("学生[がくせい]です")).toBe(audioId("がくせいです"));
  });

  it("folds katakana to hiragana — same sound, same clip", () => {
    expect(audioId("ア")).toBe(audioId("あ"));
    expect(audioId("カメラ")).toBe(audioId("かめら"));
  });

  it("distinguishes different utterances", () => {
    expect(audioId("がくせいだ")).not.toBe(audioId("がくせいだった"));
  });

  it("is a stable 16-hex-char hash", () => {
    expect(audioId("こんにちは")).toMatch(/^[0-9a-f]{16}$/);
    expect(audioId("こんにちは")).toBe(audioId("こんにちは"));
  });
});

describe("collectAudioLines", () => {
  const lines = collectAudioLines();
  const ids = new Set(lines.map((l) => l.id));

  it("collects a substantial inventory", () => {
    expect(lines.length).toBeGreaterThan(1000);
  });

  it("has unique ids, non-empty utterances, and sources", () => {
    expect(ids.size).toBe(lines.length);
    for (const line of lines) {
      expect(line.speak.length).toBeGreaterThan(0);
      expect(line.sources.length).toBeGreaterThan(0);
    }
  });

  it("covers every dictation (listen) question", () => {
    const quizzes = [...allLessons, ...allReadings].flatMap(
      (source) => source.quiz ?? [],
    );
    const listens = quizzes.filter((q) => q.kind === "listen");
    expect(listens.length).toBeGreaterThan(0);
    for (const q of listens) {
      expect(ids.has(audioId(q.audio))).toBe(true);
    }
  });

  it("matches the committed manifest — run `npm run audio:manifest`", () => {
    const manifest = JSON.parse(
      readFileSync(new URL("../content/audio-manifest.json", import.meta.url), "utf8"),
    );
    expect(manifest.count).toBe(lines.length);
    expect(manifest.lines).toEqual(lines);
  });
});
