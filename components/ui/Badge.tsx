import { cn } from "@/lib/cn";

type Tone = "shu" | "ai" | "matcha" | "gold" | "neutral";

const tones: Record<Tone, string> = {
  shu: "bg-shu/12 text-shu border-shu/25",
  ai: "bg-ai/12 text-ai border-ai/25",
  matcha: "bg-matcha/15 text-matcha border-matcha/30",
  gold: "bg-gold/15 text-gold border-gold/30",
  neutral: "bg-surface-2 text-ink-soft border-line",
};

export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-tight",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
