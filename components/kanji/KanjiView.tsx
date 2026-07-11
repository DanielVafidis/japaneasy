"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Grid3x3, PencilLine, SquareArrowOutUpRight, X } from "lucide-react";
import {
  kanji,
  kanjiCategories,
  kanjiByChar,
  type Kanji,
  type KanjiCategory,
} from "@/content/kanji";
import { cardsForDeck } from "@/content/decks";
import { AudioButton } from "@/components/AudioButton";
import { AddToDeckButton } from "@/components/AddToDeckButton";
import { KanjiWriter } from "@/components/kanji/KanjiWriter";
import { Badge } from "@/components/ui/Badge";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { cn } from "@/lib/cn";

type Filter = KanjiCategory | "all";
type Mode = "browse" | "write";

export function KanjiView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState<Filter>("all");
  const [mode, setMode] = useState<Mode>("browse");
  const [writeStart, setWriteStart] = useState<string | undefined>(undefined);
  // bumped so "Practice writing" always jumps the writer to its kanji
  const [writeSession, setWriteSession] = useState(0);

  // the URL is the source of truth for the open detail panel
  const selectedChar = searchParams.get("c");
  const selected = selectedChar ? (kanjiByChar[selectedChar] ?? null) : null;

  const list = useMemo(
    () => (filter === "all" ? kanji : kanji.filter((k) => k.category === filter)),
    [filter],
  );

  const allIds = cardsForDeck("kanji").map((c) => c.id);

  function openKanji(k: Kanji) {
    router.replace(`/kanji?c=${encodeURIComponent(k.char)}`, { scroll: false });
  }

  function closeKanji() {
    router.replace("/kanji", { scroll: false });
  }

  function practiceKanji(k: Kanji) {
    // the writer only pages through the visible list, so widen the filter
    // if the requested kanji is filtered out
    if (!list.some((x) => x.char === k.char)) setFilter("all");
    setWriteStart(k.char);
    setWriteSession((s) => s + 1);
    setMode("write");
    closeKanji();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="flex w-full flex-wrap gap-1.5 sm:w-auto">
          <Chip active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </Chip>
          {kanjiCategories.map((c) => (
            <Chip
              key={c.id}
              active={filter === c.id}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </Chip>
          ))}
        </div>
        <SegmentedControl
          aria-label="Kanji mode"
          value={mode}
          onChange={setMode}
          className="w-full sm:w-auto sm:min-w-[14rem]"
          options={[
            {
              value: "browse",
              label: "Browse",
              icon: <Grid3x3 className="h-4 w-4 shrink-0" />,
            },
            {
              value: "write",
              label: "Write",
              icon: <PencilLine className="h-4 w-4 shrink-0" />,
            },
          ]}
        />
      </div>

      {mode === "browse" ? (
        <>
          <div className="flex justify-end">
            <AddToDeckButton
              ids={allIds}
              label={`Add all ${allIds.length}`}
              size="md"
              className="w-full justify-center sm:w-auto"
            />
          </div>

          <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8">
            {list.map((k) => (
              <button
                key={k.char}
                onClick={() => openKanji(k)}
                aria-pressed={selected?.char === k.char}
                className="group flex aspect-square flex-col items-center justify-center rounded-2xl border border-line bg-surface transition-all hover:-translate-y-0.5 hover:border-shu/50 hover:bg-surface card-shadow"
              >
                <span className="font-jp text-3xl text-ink sm:text-4xl">{k.char}</span>
                <span className="mt-1 truncate px-1 text-[0.65rem] text-ink-faint group-hover:text-shu">
                  {k.meaning.split(";")[0]}
                </span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <KanjiWriter
          key={`${filter}-${writeSession}`}
          list={list}
          initialChar={writeStart}
        />
      )}

      {selected && (
        <KanjiDetail kanji={selected} onClose={closeKanji} onPractice={practiceKanji} />
      )}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
        active
          ? "bg-shu text-white"
          : "border border-line bg-surface text-ink-soft hover:border-shu/40 hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}

function KanjiDetail({
  kanji: k,
  onClose,
  onPractice,
}: {
  kanji: Kanji;
  onClose: () => void;
  onPractice: (k: Kanji) => void;
}) {
  const categoryLabel =
    kanjiCategories.find((c) => c.id === k.category)?.label ?? k.category;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const cardIds = [`kanji:${k.char}`, `kanji-mean:${k.char}`];

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="kanji-detail-title"
    >
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative max-h-[min(90vh,900px)] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-line bg-surface p-5 card-shadow-lg animate-fade-up sm:rounded-3xl sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-shu">
              {categoryLabel}
            </p>
            <h2 id="kanji-detail-title" className="mt-1 font-jp text-5xl text-ink sm:text-6xl">
              {k.char}
            </h2>
            <p className="mt-2 text-lg text-ink-soft">{k.meaning}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-shu/40 hover:text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
              On&apos;yomi
            </dt>
            <dd className="mt-1 font-jp text-lg text-ink">{k.on.join(" · ") || "—"}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
              Kun&apos;yomi
            </dt>
            <dd className="mt-1 font-jp text-lg text-ink">{k.kun.join(" · ") || "—"}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
              Strokes
            </dt>
            <dd className="mt-1 text-lg text-ink">{k.strokes}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
              JLPT
            </dt>
            <dd className="mt-1">
              <Badge tone="ai">N{k.jlpt}</Badge>
            </dd>
          </div>
          {k.parts && (
            <div className="sm:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                Components
              </dt>
              <dd className="mt-1 text-ink-soft">{k.parts}</dd>
            </div>
          )}
        </dl>

        {k.example && (
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
              Example
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-2xl border border-line bg-surface-2 p-4">
              <span className="font-jp text-2xl text-ink">{k.example.word}</span>
              <span className="text-sm text-ink-soft">{k.example.reading}</span>
              <span className="w-full text-sm text-ink-faint sm:w-auto">{k.example.meaning}</span>
              <AudioButton text={k.example.reading} className="ml-auto shrink-0" />
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <AddToDeckButton ids={cardIds} label="Add to deck" size="md" />
          <button
            type="button"
            onClick={() => onPractice(k)}
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-shu/40 hover:text-ink"
          >
            <PencilLine className="h-3.5 w-3.5" /> Practice writing
          </button>
          <a
            href={`https://jisho.org/search/${encodeURIComponent(k.char)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-shu/40 hover:text-ink"
          >
            Jisho <SquareArrowOutUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
