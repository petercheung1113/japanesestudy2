import { Check } from "lucide-react";
import type { Lesson } from "@/data/types";
import { getLessonProgress, useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

export function SummaryPanel({ lesson }: { lesson: Lesson }) {
  const lessons = useProgress((s) => s.lessons);
  const toggleSummaryItem = useProgress((s) => s.toggleSummaryItem);
  const progress = getLessonProgress(lessons, lesson.id);
  const checked = new Set(progress.summaryChecked);
  const { summary } = lesson;

  return (
    <div className="space-y-6">
      <section className="paper-card rounded-xl p-5">
        <h2 className="font-display text-xl text-ink">學習目標</h2>
        <ul className="mt-3 space-y-2 text-sm text-ink">
          {summary.goals.map((goal) => (
            <li key={goal} className="flex gap-2">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              {goal}
            </li>
          ))}
        </ul>
      </section>

      <section className="paper-card overflow-hidden rounded-xl">
        <div className="border-b border-border px-5 py-3">
          <h2 className="font-display text-xl text-ink">句型一覽</h2>
        </div>
        <div className="divide-y divide-border">
          {summary.patterns.map((row) => (
            <div key={row.pattern} className="grid gap-1 px-5 py-3 sm:grid-cols-[1.2fr_1fr]">
              <p className="font-display text-base text-primary">{row.pattern}</p>
              <p className="text-sm text-muted">{row.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="paper-card overflow-hidden rounded-xl">
        <div className="border-b border-border px-5 py-3">
          <h2 className="font-display text-xl text-ink">助詞</h2>
        </div>
        <div className="divide-y divide-border">
          {summary.particles.map((row) => (
            <div key={row.particle} className="grid grid-cols-[4rem_1fr] items-start gap-3 px-5 py-3">
              <p className="font-display text-lg text-ink">{row.particle}</p>
              <p className="text-sm text-muted">{row.usage}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-warn/20 bg-warn-soft px-5 py-4">
        <h2 className="font-display text-xl text-warn">易錯點</h2>
        <ul className="mt-3 space-y-2 text-sm text-ink">
          {summary.pitfalls.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="paper-card rounded-xl p-5">
        <h2 className="font-display text-xl text-ink">本課檢查表</h2>
        <p className="mt-1 text-sm text-muted">勾選你已經能做到的項目，進度會存在這台裝置。</p>
        <ul className="mt-4 space-y-2">
          {summary.checklist.map((item) => {
            const on = checked.has(item);
            return (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => toggleSummaryItem(lesson.id, item)}
                  className={cn(
                    "flex min-h-12 w-full items-center gap-3 rounded-lg border px-3 text-left text-sm",
                    on
                      ? "border-success/30 bg-success-soft text-success"
                      : "border-border bg-surface text-ink hover:bg-bg-deep",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-5 place-items-center rounded-sm border",
                      on ? "border-success bg-success text-primary-fg" : "border-border-strong",
                    )}
                  >
                    {on ? <Check className="size-3" /> : null}
                  </span>
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
