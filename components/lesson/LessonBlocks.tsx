import { Info, Lightbulb } from "lucide-react";
import type { ContentBlock } from "@/content/types";
import { JapaneseText } from "@/components/JapaneseText";
import { RichText } from "@/components/RichText";
import { AudioButton } from "@/components/AudioButton";
import { KanaGrid } from "@/components/kana/KanaGrid";

export function LessonBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-7">
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h3 className="-mb-2 mt-2 flex items-center gap-3 text-xl text-ink">
          <span className="h-5 w-1 rounded-full bg-shu" />
          {block.text}
        </h3>
      );

    case "prose":
      return (
        <p className="text-base leading-7 text-ink sm:text-[1.02rem] sm:leading-8">
          <RichText text={block.text} />
        </p>
      );

    case "rule":
      return (
        <div className="rounded-2xl border border-line bg-surface-2 p-5">
          {block.title && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-ai">
              {block.title}
            </p>
          )}
          <ul className="flex flex-col gap-2.5">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-3 leading-7 text-ink">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ai/60" />
                <span>
                  <RichText text={item} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "examples":
      return (
        <div className="flex flex-col gap-2">
          {block.title && (
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
              {block.title}
            </p>
          )}
          <div className="flex flex-col divide-y divide-line/70 overflow-hidden rounded-2xl border border-line bg-surface">
            {block.items.map((ex, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 transition-colors hover:bg-surface-2"
              >
                <AudioButton text={ex.jp} className="mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <JapaneseText text={ex.jp} className="text-xl" />
                  <span className="text-sm text-ink-soft">{ex.en}</span>
                  {ex.note && (
                    <span className="text-xs italic text-ink-faint">
                      {ex.note}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "dialogue":
      return (
        <div className="flex flex-col gap-2">
          {block.title && (
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
              {block.title}
            </p>
          )}
          <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-5">
            {block.lines.map((line, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-shu/12 text-xs font-bold text-shu">
                  {line.speaker.slice(0, 1)}
                </span>
                <AudioButton text={line.jp} size="sm" className="mt-1 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <JapaneseText text={line.jp} className="text-lg" />
                  <span className="text-sm text-ink-soft">{line.en}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "table":
      return (
        <figure className="flex flex-col gap-2">
          <div className="overflow-x-auto rounded-2xl border border-line [-webkit-overflow-scrolling:touch]">
            <table className="w-full min-w-[280px] border-collapse text-left font-jp text-sm">
              <thead>
                <tr className="bg-surface-2">
                  {block.headers.map((h, i) => (
                    <th
                      key={i}
                      className="border-b border-line px-4 py-2.5 font-semibold text-ink"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, ri) => (
                  <tr key={ri} className="odd:bg-surface-2">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className="border-b border-line px-4 py-2.5 text-ink"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <figcaption className="text-center text-xs text-ink-faint">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "note":
      return (
        <Callout icon={<Info className="h-4 w-4" />} tone="ai" label="Note">
          {block.text}
        </Callout>
      );

    case "tip":
      return (
        <Callout
          icon={<Lightbulb className="h-4 w-4" />}
          tone="gold"
          label="Tip"
        >
          {block.text}
        </Callout>
      );

    case "kana":
      return (
        <figure className="flex flex-col gap-3">
          <KanaGrid script={block.script} />
          {block.caption && (
            <figcaption className="text-center text-xs text-ink-faint">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
}

function Callout({
  icon,
  tone,
  label,
  children,
}: {
  icon: React.ReactNode;
  tone: "ai" | "gold";
  label: string;
  children: string;
}) {
  const tones =
    tone === "gold"
      ? "border-gold/40 bg-surface-2 text-gold"
      : "border-ai/35 bg-surface-2 text-ai";
  return (
    <div className={`flex gap-3 rounded-2xl border p-4 ${tones}`}>
      <span className="mt-0.5 shrink-0">{icon}</span>
      <p className="leading-7 text-ink">
        <span className="mr-1.5 font-semibold uppercase tracking-wide">
          {label}.
        </span>
        <RichText text={children} />
      </p>
    </div>
  );
}
