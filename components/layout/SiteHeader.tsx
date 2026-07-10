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
  { href: "/readings", label: "Read" },
  { href: "/kana", label: "Kana" },
  { href: "/kanji", label: "Kanji" },
  { href: "/flashcards", label: "Review" },
  { href: "/progress", label: "Progress" },
];

const drawerLink =
  "block w-full border-b border-line/60 py-3.5 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] text-base font-medium transition-colors active:bg-surface-2";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const streak = useStore((s) => s.streak);
  const xp = useStore((s) => s.xp);
  const hasHydrated = useStore((s) => s.hasHydrated);
  const level = levelInfo(xp).level;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface pt-[env(safe-area-inset-top,0px)]">
      <div className="page-x mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 sm:h-16 sm:gap-3">
        <Link href="/" className="group flex min-w-0 items-center gap-2 sm:gap-2.5">
          <span className="seal h-8 w-8 shrink-0 rounded-lg text-sm font-bold tracking-tight transition-transform group-hover:-rotate-6 sm:h-9 sm:w-9 sm:text-base">
            JE
          </span>
          <span className="truncate font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
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

        {/* Single control strip — segmented on mobile, spaced on desktop */}
        <div
          className={cn(
            "flex shrink-0 items-center",
            "max-md:touch-segment",
            "md:gap-2",
          )}
        >
          <SearchPalette />

          {hasHydrated && (
            <>
              <span
                className="inline-flex min-h-9 min-w-9 items-center justify-center gap-0.5 px-2 text-[0.65rem] font-semibold text-gold md:hidden"
                title={`${streak}-day streak`}
              >
                <Flame className="h-3 w-3" /> {streak}
              </span>
              <span
                className="hidden items-center gap-1 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-xs font-semibold text-gold md:inline-flex"
                title={`${streak}-day streak`}
              >
                <Flame className="h-3.5 w-3.5" /> {streak}
              </span>
              <span
                className="hidden items-center gap-1 rounded-full border border-ai/25 bg-ai/10 px-2.5 py-1 text-xs font-semibold text-ai md:inline-flex"
                title={`Level ${level}`}
              >
                Lv {level}
              </span>
            </>
          )}

          <Link
            href="/settings"
            aria-label="Settings"
            className="hidden h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink-soft transition-colors hover:border-shu/40 hover:text-ink md:grid"
          >
            <Settings className="h-[18px] w-[18px]" />
          </Link>

          <ThemeToggle className="max-md:h-9 max-md:w-9 max-md:border-0 max-md:bg-transparent max-md:hover:border-0" />

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 shrink-0 place-items-center text-ink-soft active:bg-surface-2 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-line bg-paper md:hidden"
          aria-label="Mobile navigation"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                drawerLink,
                pathname.startsWith(item.href)
                  ? "bg-shu/10 text-shu"
                  : "text-ink-soft",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/settings"
            onClick={() => setOpen(false)}
            className={cn(
              drawerLink,
              pathname.startsWith("/settings")
                ? "bg-shu/10 text-shu"
                : "text-ink-soft",
            )}
          >
            Settings
          </Link>
        </nav>
      )}
    </header>
  );
}
