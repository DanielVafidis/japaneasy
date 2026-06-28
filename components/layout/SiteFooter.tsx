import Link from "next/link";
import { ResetProgress } from "@/components/ResetProgress";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-surface-2">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="seal h-8 w-8 rounded-lg text-sm font-bold">JE</span>
            <span className="font-display text-lg font-bold text-ink">
              JapanEasy
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-6 text-ink-soft">
            Learn Japanese the natural way — from a Japanese point of view, one
            solid building block at a time.
          </p>
        </div>

        <FooterCol
          title="Learn"
          links={[
            { href: "/learn", label: "Curriculum" },
            { href: "/kana", label: "Kana Trainer" },
            { href: "/kanji", label: "Kanji" },
            { href: "/flashcards", label: "Flashcards" },
            { href: "/progress", label: "Progress" },
          ]}
        />
        <FooterCol
          title="Start here"
          links={[
            { href: "/lessons/introduction", label: "Introduction" },
            { href: "/lessons/hiragana", label: "Hiragana" },
            { href: "/lessons/state-of-being", label: "First grammar" },
          ]}
        />

        <div>
          <h4 className="mb-3 text-sm font-semibold text-ink">Grammar source</h4>
          <p className="text-sm leading-6 text-ink-soft">
            Lessons are adapted from{" "}
            <span className="font-medium text-ink">
              A Guide to Japanese Grammar
            </span>
            , released under a Creative Commons Attribution-Noncommercial-Share
            Alike license.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-2 border-t border-line/60 px-5 py-5 text-center text-xs text-ink-faint sm:flex-row">
        <span>Built for joyful, consistent practice · 日本語を楽しもう</span>
        <ResetProgress />
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold text-ink">{title}</h4>
      <ul className="flex flex-col gap-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-ink-soft transition-colors hover:text-shu"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
