/** Thin wrapper around the Web Speech API for Japanese pronunciation. */

import { toReading } from "@/lib/japanese";

export function speechSupported(): boolean {
  return (
    typeof window !== "undefined" &&
    "speechSynthesis" in window &&
    typeof window.SpeechSynthesisUtterance !== "undefined"
  );
}

let voicesPrimed = false;

function primeVoices() {
  if (voicesPrimed || !speechSupported()) return;
  voicesPrimed = true;
  // Touch getVoices so the list populates; some browsers need the event.
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

function pickJapaneseVoice(): SpeechSynthesisVoice | null {
  if (!speechSupported()) return null;
  const voices = window.speechSynthesis.getVoices();
  const ja = voices.filter(
    (v) => v.lang === "ja-JP" || v.lang.toLowerCase().startsWith("ja"),
  );
  if (ja.length === 0) return null;
  // Prefer a higher-quality / non-default network voice when present.
  return (
    ja.find((v) => /google|kyoko|o-ren|otoya|natural|premium/i.test(v.name)) ??
    ja[0]
  );
}

export interface SpeakOptions {
  rate?: number;
  pitch?: number;
  /** When true, the input is already a literal string to read (no furigana parsing). */
  raw?: boolean;
}

export function speak(text: string, opts: SpeakOptions = {}): boolean {
  if (!speechSupported() || !text) return false;
  primeVoices();

  const reading = opts.raw ? text : toReading(text);
  window.speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(reading);
  utter.lang = "ja-JP";
  utter.rate = opts.rate ?? 0.92;
  utter.pitch = opts.pitch ?? 1;
  const voice = pickJapaneseVoice();
  if (voice) utter.voice = voice;

  window.speechSynthesis.speak(utter);
  return true;
}

export function cancelSpeech() {
  if (speechSupported()) window.speechSynthesis.cancel();
}
