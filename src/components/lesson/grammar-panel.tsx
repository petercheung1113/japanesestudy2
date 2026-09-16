import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { GrammarTable, Lesson } from "@/data/types";
import { Furigana } from "@/components/furigana";
import { SpeakButton } from "@/components/speak-button";
import { stripFurigana } from "@/components/furigana";
import { getLessonProgress, useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

export function GrammarPanel({ lesson }: { lesson: Lesson }) {
  const [openId, setOpenId] = useState<string | null>(lesson.grammar[0]?.id ?? null);
  const lessons = useProgress((s) => s.lessons);
  const markGrammarRead = useProgress((s) => s.markGrammarRead);
  const progress = getLessonProgress(lessons, lesson.id);
  const read = new Set(progress.grammarRead);

  return (
    <div className="space-y-3">
      {lesson.grammar.map((point, index) => {
        const open = openId === point.id;
        return (
          <article key={point.id} className="paper-card overflow-hidden rounded-xl">
            <button
              type="button"
              className="flex w-full items-start gap-3 px-4 py-4 text-left"
              onClick={() => {
                setOpenId(open ? null : point.id);
                markGrammarRead(lesson.id, point.id);
              }}
            >
              <span className="seal mt-0.5 size-8 shrink-0 text-xs text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-lg text-ink">{point.title}</span>
                <span className="mt-1 block text-sm text-muted">{point.meaning}</span>
              </span>
              <ChevronDown
                className={cn(
                  "mt-1 size-4 shrink-0 text-subtle transition-transform duration-200",
                  open && "rotate-180",
                )}
              />
            </button>
            {open ? (
              <div className="space-y-4 border-t border-border px-4 py-4">
                <p className="rounded-md bg-primary-soft/60 px-3 py-2 font-display text-base text-primary">
                  {point.pattern}
                </p>
                <p className="text-sm leading-relaxed text-ink">{point.explanation}</p>
                {point.notes?.length ? (
                  <ul className="space-y-1.5 text-sm text-muted">
                    {point.notes.map((note) => (
                      <li key={note} className="flex gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/50" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {point.table ? <ConjugationTable table={point.table} /> : null}
                <div className="space-y-2">
                  <p className="text-xs font-medium tracking-wide text-subtle">例句</p>
                  {point.examples.map((example) => (
                    <div
                      key={example.jp}
                      className="flex items-start gap-2 rounded-lg bg-bg-deep/60 px-3 py-3"
                    >
                      <SpeakButton text={stripFurigana(example.jp)} />
                      <div className="min-w-0">
                        <p className="text-base text-ink">
                          <Furigana text={example.jp} />
                        </p>
                        <p className="mt-1 text-sm text-muted">{example.zh}</p>
                        {example.note ? (
                          <p className="mt-1 text-xs text-subtle">{example.note}</p>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
                {read.has(point.id) ? (
                  <p className="text-xs text-success">已列入本課進度</p>
                ) : null}
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}

function ConjugationTable({ table }: { table: GrammarTable }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      {table.caption ? (
        <p className="border-b border-border bg-bg-deep/50 px-3 py-2 text-xs tracking-wide text-subtle">
          {table.caption}
        </p>
      ) : null}
      <table className="w-full min-w-[16rem] text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-surface">
            {table.headers.map((header) => (
              <th key={header} className="px-3 py-2 font-medium text-muted">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.join("-")} className="border-b border-border last:border-0">
              {row.map((cell, i) => (
                <td
                  key={`${cell}-${i}`}
                  className={cn("px-3 py-2", i === 0 ? "text-muted" : "font-medium text-ink")}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
