"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  CornerDownLeft,
  GraduationCap,
  Search,
  Shapes,
  Layers,
} from "lucide-react";
import { allLessons } from "@/content/lessons";
import { stageMeta } from "@/content/curriculum";
import { kanji } from "@/content/kanji";
import { stripFurigana, toRomaji } from "@/lib/japanese";
import { cn } from "@/lib/cn";

type ItemType = "lesson" | "vocab" | "page" | "kanji";

interface SearchItem {
  id: string;
  type: ItemType;
  title: string;
  sub?: string;
  href: string;
  jp?: boolean;
  haystack: string;
}

function buildIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  const pages: SearchItem[] = [
    { id: "page:learn", type: "page", title: "Curriculum", sub: "All lessons", href: "/learn", haystack: "curriculum learn lessons path" },
    { id: "page:kana", type: "page", title: "Kana Trainer", sub: "Hiragana & katakana", href: "/kana", haystack: "kana hiragana katakana trainer write quiz" },
    { id: "page:flashcards", type: "page", title: "Flashcards", sub: "Spaced repetition review", href: "/flashcards", haystack: "flashcards review srs spaced repetition" },
    { id: "page:progress", type: "page", title: "Progress", sub: "Streak, XP & stats", href: "/progress", haystack: "progress streak xp stats heatmap" },
    { id: "page:kanji", type: "page", title: "Kanji", sub: "Browse kanji", href: "/kanji", haystack: "kanji characters" },
    { id: "page:settings", type: "page", title: "Settings", sub: "Preferences & data", href: "/settings", haystack: "settings preferences daily goal theme backup" },
  ];
  items.push(...pages);

  for (const lesson of allLessons) {
    const stage = stageMeta(lesson.stage);
    items.push({
      id: `lesson:${lesson.id}`,
      type: "lesson",
      title: lesson.title,
      sub: lesson.subtitle,
      href: `/lessons/${lesson.id}`,
      haystack: [lesson.title, lesson.subtitle, lesson.summary, stage.title]
        .filter(Boolean)
        .join(" ")
        .toLowerCase(),
    });
  }

  const seen = new Set<string>();
  for (const lesson of allLessons) {
    for (const v of lesson.vocabulary ?? []) {
      const word = stripFurigana(v.word);
      if (seen.has(word)) continue;
      seen.add(word);
      const reading = v.reading ?? "";
      items.push({
        id: `vocab:${word}`,
        type: "vocab",
        title: word,
        sub: `${reading}${reading ? " · " : ""}${v.meaning}`,
        href: `/lessons/${lesson.id}`,
        jp: true,
        haystack: `${word} ${reading} ${v.meaning} ${toRomaji(reading || word)}`.toLowerCase(),
      });
    }
  }

  for (const k of kanji) {
    items.push({
      id: `kanji:${k.char}`,
      type: "kanji",
      title: k.char,
      sub: `${k.meaning} · ${k.on.join("・")}`,
      href: `/kanji?c=${encodeURIComponent(k.char)}`,
      jp: true,
      haystack: `${k.char} ${k.meaning} ${k.on.join(" ")} ${k.kun.join(" ")}`.toLowerCase(),
    });
  }

  return items;
}

const typeMeta: Record<ItemType, { label: string; icon: React.ReactNode }> = {
  page: { label: "Go to", icon: <Layers className="h-4 w-4" /> },
  lesson: { label: "Lessons", icon: <GraduationCap className="h-4 w-4" /> },
  vocab: { label: "Vocabulary", icon: <BookOpen className="h-4 w-4" /> },
  kanji: { label: "Kanji", icon: <Shapes className="h-4 w-4" /> },
};

export function SearchPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const index = useMemo(buildIndex, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return index.filter((i) => i.type === "page");
    }
    const scored = index
      .map((item) => {
        const idx = item.haystack.indexOf(q);
        if (idx === -1) return null;
        const titleHit = item.title.toLowerCase().startsWith(q) ? 0 : 1;
        return { item, score: titleHit * 100 + idx };
      })
      .filter(Boolean) as { item: SearchItem; score: number }[];
    scored.sort((a, b) => a.score - b.score);
    return scored.slice(0, 24).map((s) => s.item);
  }, [index, query]);

  useEffect(() => setActive(0), [query]);

  // Global Cmd/Ctrl+K
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      document.body.style.overflow = "hidden";
      const t = window.setTimeout(() => inputRef.current?.focus(), 30);
      return () => {
        window.clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, input, [href], [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function go(item: SearchItem) {
    setOpen(false);
    router.push(item.href);
  }

  function onInputKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[active]) go(results[active]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="inline-flex items-center gap-2 rounded-full border border-line bg-surface py-2 pl-3 pr-2 text-sm text-ink-faint transition-colors hover:border-shu/40 hover:text-ink"
      >
        <Search className="h-4 w-4" />
        <span className="hidden lg:inline">Search</span>
        <kbd className="hidden rounded border border-line bg-paper px-1.5 py-0.5 font-sans text-[0.65rem] lg:inline">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[12vh]"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setOpen(false)}
          />
          <div
            ref={panelRef}
            className="relative w-full max-w-xl animate-fade-up overflow-hidden rounded-2xl border border-line bg-surface card-shadow-lg"
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Search className="h-5 w-5 shrink-0 text-ink-faint" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKey}
                placeholder="Search lessons, words, pages…"
                role="combobox"
                aria-expanded="true"
                aria-controls="search-results"
                aria-activedescendant={
                  results[active] ? `search-result-${active}` : undefined
                }
                autoComplete="off"
                className="h-14 w-full bg-transparent text-ink outline-none placeholder:text-ink-faint"
              />
              <button
                onClick={() => setOpen(false)}
                className="rounded border border-line px-1.5 py-0.5 text-[0.65rem] text-ink-faint"
              >
                Esc
              </button>
            </div>

            <div id="search-results" role="listbox" className="max-h-[55vh] overflow-y-auto p-2">
              {results.length === 0 ? (
                <p className="px-3 py-8 text-center text-sm text-ink-faint">
                  No matches for “{query}”.
                </p>
              ) : (
                results.map((item, i) => {
                  const prev = results[i - 1];
                  const showHeader = !prev || prev.type !== item.type;
                  return (
                    <div key={item.id}>
                      {showHeader && (
                        <p className="flex items-center gap-1.5 px-3 pb-1 pt-3 text-[0.7rem] font-semibold uppercase tracking-wide text-ink-faint">
                          {typeMeta[item.type].icon}
                          {typeMeta[item.type].label}
                        </p>
                      )}
                      <button
                        id={`search-result-${i}`}
                        role="option"
                        aria-selected={i === active}
                        onClick={() => go(item)}
                        onMouseEnter={() => setActive(i)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                          i === active ? "bg-shu/10" : "hover:bg-surface-2",
                        )}
                      >
                        <span
                          className={cn(
                            "min-w-0 flex-1 truncate",
                            item.jp ? "font-jp text-lg text-ink" : "text-ink",
                          )}
                        >
                          {item.title}
                        </span>
                        {item.sub && (
                          <span className="hidden truncate text-sm text-ink-faint sm:block sm:max-w-[55%]">
                            {item.sub}
                          </span>
                        )}
                        {i === active && (
                          <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-shu" />
                        )}
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
