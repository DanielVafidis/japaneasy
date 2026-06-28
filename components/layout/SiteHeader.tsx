"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame, Menu, Settings, X } from "lucide-react";
import { useStore } from "@/lib/store";
import { levelInfo } from "@/lib/leveling";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SearchPalette } from "@/components/search/SearchPalette";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "/learn", label: "Learn" },
  { href: "/kana", label: "Kana" },
  { href: "/kanji", label: "Kanji" },
  { href: "/flashcards", label: "Review" },
  { href: "/progress", label: "Progress" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const streak = useStore((s) => s.streak);
  const xp = useStore((s) => s.xp);
  const hasHydrated = useStore((s) => s.hasHydrated);
  const level = levelInfo(xp).level;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="seal h-9 w-9 rounded-lg text-base font-bold tracking-tight transition-transform group-hover:-rotate-6">
            JE
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-ink">
            JapanEasy
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-shu/10 text-shu"
                    : "text-ink-soft hover:bg-surface-2 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <SearchPalette />
          {hasHydrated && (
            <div className="hidden items-center gap-2 sm:flex">
              <span
                className="inline-flex items-center gap-1 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-xs font-semibold text-gold"
                title={`${streak}-day streak`}
              >
                <Flame className="h-3.5 w-3.5" /> {streak}
              </span>
              <span
                className="inline-flex items-center gap-1 rounded-full border border-ai/25 bg-ai/10 px-2.5 py-1 text-xs font-semibold text-ai"
                title={`Level ${level}`}
              >
                Lv {level}
              </span>
            </div>
          )}
          <Link
            href="/settings"
            aria-label="Settings"
            className="hidden h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink-soft transition-colors hover:border-shu/40 hover:text-ink sm:grid"
          >
            <Settings className="h-[18px] w-[18px]" />
          </Link>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink-soft md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-paper px-5 py-3 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                pathname.startsWith(item.href)
                  ? "bg-shu/10 text-shu"
                  : "text-ink-soft hover:bg-surface-2",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/settings"
            onClick={() => setOpen(false)}
            className={cn(
              "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
              pathname.startsWith("/settings")
                ? "bg-shu/10 text-shu"
                : "text-ink-soft hover:bg-surface-2",
            )}
          >
            Settings
          </Link>
        </nav>
      )}
    </header>
  );
}
