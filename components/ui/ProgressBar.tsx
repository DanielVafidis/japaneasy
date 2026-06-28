import { cn } from "@/lib/cn";

type Tone = "shu" | "ai" | "matcha" | "gold";

const fills: Record<Tone, string> = {
  shu: "bg-gradient-to-r from-shu to-shu-deep",
  ai: "bg-gradient-to-r from-ai to-ai-soft",
  matcha: "bg-gradient-to-r from-matcha to-matcha",
  gold: "bg-gradient-to-r from-gold to-gold",
};

export function ProgressBar({
  value,
  tone = "shu",
  className,
  trackClassName,
}: {
  value: number;
  tone?: Tone;
  className?: string;
  trackClassName?: string;
}) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div
      className={cn(
        "h-2 w-full overflow-hidden rounded-full bg-line/70",
        trackClassName,
      )}
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn(
          "h-full rounded-full transition-[width] duration-700 ease-out",
          fills[tone],
          className,
        )}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
