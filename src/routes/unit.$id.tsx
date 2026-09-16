import { useMemo, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Volume2, X } from "lucide-react";
import { getUnit } from "@/data/units";
import { LESSONS } from "@/data/lessons";
import { PageTitle } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { speakJapanese } from "@/lib/speech";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/unit/$id")({
  component: UnitPage,
  notFoundComponent: UnitNotFound,
});

function UnitNotFound() {
  return (
    <div className="paper-card rounded-xl p-8 text-center">
      <p className="font-display text-2xl text-ink">沒有這個復習單元</p>
      <Link to="/" className="mt-4 inline-flex h-11 items-center text-sm text-primary">
        回到課程
      </Link>
    </div>
  );
}

function UnitPage() {
  const { id } = Route.useParams();
  const unit = getUnit(id);
  if (!unit) throw notFound();

  const lessons = LESSONS.filter((lesson) => unit.lessons.includes(lesson.id));
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState({ ok: 0, total: 0 });
  const [fill, setFill] = useState("");

  const question = unit.practice[index];
  const finished = index >= unit.practice.length;
  const options = useMemo(() => question?.options ?? ["正確", "錯誤"], [question]);

  function choose(value: string) {
    if (!question || picked) return;
    const ok = value.trim() === question.answer;
    setPicked(value);
    setScore((s) => ({ ok: s.ok + (ok ? 1 : 0), total: s.total + 1 }));
  }

  function next() {
    setPicked(null);
    setFill("");
    setIndex((i) => i + 1);
  }

  function restart() {
    setIndex(0);
    setPicked(null);
    setFill("");
    setScore({ ok: 0, total: 0 });
  }

  return (
    <div>
      <Link
        to="/"
        className="mb-4 inline-flex h-10 items-center gap-1.5 text-sm text-muted hover:text-ink"
      >
        <ArrowLeft className="size-4" />
        全部課程
      </Link>

      <PageTitle
        kicker={unit.label}
        title={unit.title}
        description={
          unit.partial
            ? "這一單元尚有未解鎖課次。"
            : `對應課本${unit.label}：第 ${unit.lessons.join("・")} 課句型總複習。`
        }
      />

      <section className="mb-8">
        <h2 className="mb-3 font-display text-xl text-ink">句型回顧</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {unit.recap.map((item) => (
            <li key={item.pattern} className="rounded-xl border border-border bg-surface px-4 py-3">
              <p className="font-display text-base text-ink">{item.pattern}</p>
              <p className="mt-1 text-xs text-muted">{item.meaning}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-display text-xl text-ink">本單元課程</h2>
        <div className="flex flex-wrap gap-2">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              to="/lesson/$id"
              params={{ id: String(lesson.id) }}
              className="inline-flex h-11 items-center rounded-full border border-border bg-surface px-4 text-sm text-ink hover:bg-primary-soft"
            >
              第 {lesson.id} 課　{lesson.titleZh}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-end justify-between">
          <h2 className="font-display text-xl text-ink">混合練習</h2>
          <p className="text-xs tabular-nums text-subtle">
            {finished ? "完成" : `${index + 1} / ${unit.practice.length}`}
            {score.total ? ` · ${score.ok}/${score.total}` : ""}
          </p>
        </div>

        {finished ? (
          <div className="paper-card rounded-xl p-6 text-center">
            <p className="font-display text-3xl text-ink">
              {score.ok} / {score.total}
            </p>
            <p className="mt-2 text-sm text-muted">
              {score.ok === score.total ? "這單元過關了。" : "再走一次句型，或回到單課補強。"}
            </p>
            <Button className="mt-4" onClick={restart}>
              再練一次
            </Button>
          </div>
        ) : question ? (
          <div className="paper-card space-y-4 rounded-xl p-5">
            <p className="text-sm text-ink">{question.prompt}</p>
            {question.type === "listen" && question.audio ? (
              <button
                type="button"
                onClick={() => speakJapanese(question.audio ?? "", 0.86)}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm text-primary-fg"
              >
                <Volume2 className="size-4" />
                播放
              </button>
            ) : null}
            {question.type === "fill" ? (
              <form
                className="flex flex-col gap-2 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  choose(fill);
                }}
              >
                <input
                  value={fill}
                  onChange={(e) => setFill(e.target.value)}
                  disabled={picked !== null}
                  className="h-11 flex-1 rounded-md border border-border bg-bg px-3 text-sm outline-none ring-primary/30 focus:ring-2"
                  placeholder="填入答案"
                />
                <Button type="submit" disabled={picked !== null || !fill.trim()}>
                  送出
                </Button>
              </form>
            ) : (
              <div className="grid gap-2">
                {options.map((option) => {
                  const isAns = picked !== null && option === question.answer;
                  const isWrong = picked === option && option !== question.answer;
                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={picked !== null}
                      onClick={() => choose(option)}
                      className={cn(
                        "min-h-12 rounded-lg border px-4 py-3 text-left text-sm",
                        picked === null && "border-border bg-bg hover:bg-primary-soft/50",
                        isAns && "border-success/40 bg-success-soft text-success",
                        isWrong && "border-danger/40 bg-danger-soft text-danger",
                        picked && !isAns && !isWrong && "border-border text-muted",
                      )}
                    >
                      <span className="inline-flex items-center gap-2">
                        {isAns ? <Check className="size-4" /> : isWrong ? <X className="size-4" /> : null}
                        {option}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
            {picked ? (
              <div className="space-y-3">
                <p className="text-sm text-muted">{question.explanation}</p>
                <Button onClick={next}>
                  {index + 1 >= unit.practice.length ? "看結果" : "下一題"}
                </Button>
              </div>
            ) : null}
          </div>
        ) : null}
      </section>
    </div>
  );
}
