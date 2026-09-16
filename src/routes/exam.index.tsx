import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Headphones, PenLine, BookOpenText, SpellCheck } from "lucide-react";
import { MOCK_EXAMS } from "@/data/exams";
import { PageTitle } from "@/components/app-shell";
import { Progress } from "@/components/ui/progress";
import { useHydrated } from "@/lib/use-hydrated";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/exam/")({ component: ExamIndex });

const ICONS = {
  vocab: SpellCheck,
  grammar: PenLine,
  reading: BookOpenText,
  listening: Headphones,
};

function ExamIndex() {
  const hydrated = useHydrated();
  const exams = useProgress((s) => s.exams);

  return (
    <div>
      <PageTitle
        kicker="JLPT MOCK"
        title="N5／N4 模擬試"
        description="語彙、文法、讀解、聽解四部份。題目為原創，對齊能力試驗題型與《大家的日本語》初級範圍。聽解用裝置日語語音朗讀，正式考場會更快、只播兩遍。"
      />

      <div className="mb-8 grid gap-3 sm:grid-cols-2">
        <Note title="N5" text="對應初級 1（第 1–25 課）：ですます、て形、たい、存在、普通形入門。" />
        <Note title="N4" text="在 N5 之上加可能・意向・受身・使役、てしまう／ておく、ば／のに、敬語入門。" />
      </div>

      <div className="grid gap-4">
        {MOCK_EXAMS.map((exam) => {
          const rec = hydrated ? exams[exam.id] : undefined;
          const totalQ = exam.sections.reduce((n, s) => n + s.questions.length, 0);
          return (
            <Link
              key={exam.id}
              to="/exam/$id"
              params={{ id: exam.id }}
              className="paper-card flex flex-col gap-4 rounded-2xl p-5 transition-[transform,box-shadow] duration-200 hover:shadow-lift sm:flex-row sm:items-center"
            >
              <span className="seal size-14 shrink-0 text-sm text-primary">{exam.level}</span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-2xl text-ink">{exam.title}</p>
                <p className="mt-1 text-sm text-muted">{exam.subtitle}</p>
                <p className="mt-2 text-xs text-subtle">
                  {exam.timeMinutes} 分 · {totalQ} 題 ·{" "}
                  {exam.sections.map((s) => s.title).join(" / ")}
                </p>
                {rec ? (
                  <div className="mt-3 flex items-center gap-3">
                    <Progress value={rec.best} className="max-w-xs flex-1" />
                    <span className="text-xs tabular-nums text-subtle">
                      最佳 {rec.best}% · 上次 {rec.lastScore}/{rec.lastTotal}
                    </span>
                  </div>
                ) : (
                  <p className="mt-3 text-xs text-subtle">尚未作答</p>
                )}
              </div>
              <span className="inline-flex h-11 items-center gap-1 text-sm text-primary">
                開始
                <ArrowRight className="size-4" />
              </span>
            </Link>
          );
        })}
      </div>

      <section className="mt-8 grid gap-3 sm:grid-cols-4">
        {([
          ["vocab", "文字・語彙", "漢字讀音、表記、文脈"],
          ["grammar", "文法", "助詞、活用、排列"],
          ["reading", "読解", "短文抓重點"],
          ["listening", "聴解", "課題・要點・即時應答"],
        ] as const).map(([id, title, hint]) => {
          const Icon = ICONS[id];
          return (
            <div key={id} className="rounded-xl border border-border bg-surface px-4 py-3">
              <Icon className="size-4 text-primary" />
              <p className="mt-2 text-sm font-medium text-ink">{title}</p>
              <p className="mt-0.5 text-xs text-muted">{hint}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

function Note({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface px-4 py-3">
      <p className="text-xs tracking-wide text-primary">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
    </div>
  );
}
