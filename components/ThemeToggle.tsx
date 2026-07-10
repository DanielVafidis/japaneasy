"use client";

import { Moon, Sun } from "lucide-react";
import { setThemeMode, useIsDark } from "@/lib/theme";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const dark = useIsDark();

  return (
    <button
      type="button"
      onClick={() => setThemeMode(dark ? "light" : "dark")}
      aria-label="Toggle light/dark theme"
      className={cn(
        "relative grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink-soft transition-colors hover:text-ink hover:border-shu/40",
        className,
      )}
    >
      {dark !== null ? (
        <span className="relative h-5 w-5">
          <Sun
            className={cn(
              "absolute inset-0 h-5 w-5 transition-all duration-300",
              dark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
            )}
          />
          <Moon
            className={cn(
              "absolute inset-0 h-5 w-5 transition-all duration-300",
              dark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0",
            )}
          />
        </span>
      ) : (
        <Sun className="h-5 w-5 opacity-0" aria-hidden />
      )}
    </button>
  );
}
