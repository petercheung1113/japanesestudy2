import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { N4_GRAMMAR, N4_PRACTICE } from "@/data/n4-grammar";
import type { GrammarTable } from "@/data/types";
import { Furigana, stripFurigana } from "@/components/furigana";
import { SpeakButton } from "@/components/speak-button";
import { PageTitle } from "@/components/app-shell";
import { QuizPlayer } from "@/components/quiz-player";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/n4")({ component: N4Page });

function N4Page() {
  const [openId, setOpenId] = useState<string | null>(N4_GRAMMAR[0]?.id ?? null);
  const [tab, setTab] = useState<"grammar" | "practice">("grammar");

  return (
    <div>
      <PageTitle
        kicker="N4 衝刺"
        title="初級 1 之後的文法"
        description="《大家的日本語》初級 1 走到 N5。N4 還需要可能形、意向形、受身、使役、樣態傳聞、てしまう／ておく、條件句與敬語。這裡用原創例句補上 16 個句型，再配一組混合練習。"
      />

      <div className="mb-6 flex gap-1 rounded-lg border border-border bg-surface p-1">
        <button
          type="button"
          onClick={() => setTab("grammar")}
          className={cn(
            "h-11 flex-1 rounded-md text-sm",
            tab === "grammar" ? "bg-primary text-primary-fg" : "text-muted",
          )}
        >
          文法 {N4_GRAMMAR.length}
        </button>
        <button
          type="button"
          onClick={() => setTab("practice")}
          className={cn(
            "h-11 flex-1 rounded-md text-sm",
            tab === "practice" ? "bg-primary text-primary-fg" : "text-muted",
          )}
        >
          混合練習 {N4_PRACTICE.length}
        </button>
      </div>

      {tab === "practice" ? (
        <QuizPlayer questions={N4_PRACTICE} kicker="N4 文法練習" />
      ) : (
        <div className="space-y-3">
          {N4_GRAMMAR.map((point, index) => {
            const open = openId === point.id;
            return (
              <article key={point.id} className="paper-card overflow-hidden rounded-xl">
                <button
                  type="button"
                  className="flex w-full items-start gap-3 px-4 py-4 text-left"
                  onClick={() => setOpenId(open ? null : point.id)}
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
                          <li key={note}>{note}</li>
                        ))}
                      </ul>
                    ) : null}
                    {point.table ? <ConjugationTable table={point.table} /> : null}
                    <div className="space-y-2">
                      {point.examples.map((example) => (
                        <div
                          key={example.jp}
                          className="flex items-start gap-2 rounded-lg bg-bg-deep/60 px-3 py-3"
                        >
                          <SpeakButton text={stripFurigana(example.jp)} />
                          <div>
                            <p className="text-base text-ink">
                              <Furigana text={example.jp} />
                            </p>
                            <p className="mt-1 text-sm text-muted">{example.zh}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      )}

      <p className="mt-8 text-sm text-muted">
        練完文法，去做
        <Link to="/exam" className="mx-1 text-primary underline-offset-2 hover:underline">
          N4 模擬試
        </Link>
        。
      </p>
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
