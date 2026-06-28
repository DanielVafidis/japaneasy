"use client";

import { useEffect, useState } from "react";
import { Volume2 } from "lucide-react";
import { speak, speechSupported } from "@/lib/speech";
import { cn } from "@/lib/cn";

export function AudioButton({
  text,
  rate,
  className,
  label = "Play pronunciation",
  size = "md",
}: {
  text: string;
  rate?: number;
  className?: string;
  label?: string;
  size?: "sm" | "md";
}) {
  const [supported, setSupported] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setSupported(speechSupported());
  }, []);

  if (!supported) return null;

  const dim = size === "sm" ? "h-7 w-7" : "h-9 w-9";

  function handle() {
    const ok = speak(text, { rate });
    if (ok) {
      setPlaying(true);
      window.setTimeout(() => setPlaying(false), 900);
    }
  }

  return (
    <button
      type="button"
      onClick={handle}
      aria-label={label}
      title={label}
      className={cn(
        "inline-grid place-items-center rounded-full border border-line bg-surface text-ink-soft transition-all hover:text-shu hover:border-shu/40 active:scale-90",
        dim,
        playing && "text-shu border-shu/50 scale-105",
        className,
      )}
    >
      <Volume2 className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
    </button>
  );
}
