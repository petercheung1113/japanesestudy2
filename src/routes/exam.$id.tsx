import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Headphones, Volume2, X } from "lucide-react";
import { getExam } from "@/data/exams";
import type { ExamQuestion, ExamSectionId } from "@/data/types";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/lib/progress";
import { speakJapanese, stopSpeaking } from "@/lib/speech";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/exam/$id")({
  component: ExamPage,
  notFoundComponent: ExamNotFound,
});

function ExamNotFound() {
  return (
    <div className="paper-card rounded-xl p-8 text-center">
      <p className="font-display text-2xl text-ink">沒有這份試卷</p>
      <Link to="/exam" className="mt-4 inline-flex h-11 items-center text-sm text-primary">
        回到模擬試
      </Link>
    </div>
  );
}

type Phase = "intro" | "live" | "result";

function ExamPage() {
  const { id } = Route.useParams();
  const found = getExam(id);
  if (!found) throw notFound();
  const exam = found;

  const saveExam = useProgress((s) => s.saveExam);
  const [phase, setPhase] = useState<Phase>("intro");
  const [sectionId, setSectionId] = useState<ExamSectionId>(exam.sections[0]?.id ?? "vocab");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [fills, setFills] = useState<Record<string, string>>({});
  const [plays, setPlays] = useState<Record<string, number>>({});
  const [seconds, setSeconds] = useState(exam.timeMinutes * 60);
  const [reviewWrong, setReviewWrong] = useState(false);

  const allQuestions = useMemo(
    () => exam.sections.flatMap((s) => s.questions),
    [exam.sections],
  );
  const section = exam.sections.find((s) => s.id === sectionId) ?? exam.sections[0];
  const answeredCount = allQuestions.filter((q) => answers[q.id]).length;

  useEffect(() => {
    if (phase !== "live") return;
    const t = window.setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          window.clearInterval(t);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => window.clearInterval(t);
  }, [phase]);

  useEffect(() => {
    if (phase === "live" && seconds === 0) finish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds, phase]);

  useEffect(() => () => stopSpeaking(), []);

  function finish() {
    stopSpeaking();
    const score = allQuestions.filter((q) => answers[q.id] === q.answer).length;
    saveExam(exam.id, score, allQuestions.length);
    setPhase("result");
  }

  function choose(q: ExamQuestion, value: string) {
    setAnswers((prev) => ({ ...prev, [q.id]: value }));
  }

  if (phase === "intro") {
    return (
      <div>
        <Link to="/exam" className="mb-4 inline-flex h-10 items-center gap-1.5 text-sm text-muted hover:text-ink">
          <ArrowLeft className="size-4" />
          全部試卷
        </Link>
        <p className="text-xs tracking-wide text-primary">{exam.level} MOCK</p>
        <h1 className="mt-1 font-display text-3xl text-ink sm:text-4xl">{exam.title}</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{exam.subtitle}</p>

        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {exam.sections.map((s) => (
            <li key={s.id} className="rounded-xl border border-border bg-surface px-4 py-3">
              <p className="font-medium text-ink">{s.title}</p>
              <p className="mt-1 text-xs text-muted">
                {s.questions.length} 題 · 建議 {s.timeMinutes} 分 · {s.hint}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-xl bg-warn-soft px-4 py-3 text-sm text-warn">
          計時 {exam.timeMinutes} 分鐘，可提早交卷。聽解每題最多播放兩次。作答紀錄存在這台裝置。
        </div>
        <Button
          className="mt-6"
          onClick={() => {
            setPhase("live");
            setSeconds(exam.timeMinutes * 60);
          }}
        >
          開始作答
        </Button>
      </div>
    );
  }

  const score = allQuestions.filter((q) => answers[q.id] === q.answer).length;
  const percent = Math.round((score / allQuestions.length) * 100);

  if (phase === "result") {
    const reviewList = reviewWrong
      ? allQuestions.filter((q) => answers[q.id] !== q.answer)
      : allQuestions;
    return (
      <div>
        <div className="paper-card rounded-2xl p-6 text-center sm:p-8">
          <p className="text-xs tracking-wide text-subtle">{exam.title}</p>
          <p className="mt-2 font-display text-5xl tabular-nums text-ink">{percent}</p>
          <p className="mt-1 text-sm text-muted">
            {score} / {allQuestions.length} · JLPT 約 60% 起算合格參考線
          </p>
          <div className="mt-5 grid gap-2 sm:grid-cols-4">
            {exam.sections.map((s) => {
              const ok = s.questions.filter((q) => answers[q.id] === q.answer).length;
              return (
                <div key={s.id} className="rounded-lg bg-bg-deep/80 px-3 py-2">
                  <p className="text-xs text-subtle">{s.title}</p>
                  <p className="font-display text-xl tabular-nums text-ink">
                    {ok}/{s.questions.length}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Button variant={reviewWrong ? "outline" : "default"} onClick={() => setReviewWrong(false)}>
              全部檢討
            </Button>
            <Button variant={reviewWrong ? "default" : "outline"} onClick={() => setReviewWrong(true)}>
              只看錯題
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setPhase("intro");
                setAnswers({});
                setFills({});
                setPlays({});
                setReviewWrong(false);
              }}
            >
              再考一次
            </Button>
          </div>
        </div>

        <ol className="mt-6 space-y-4">
          {reviewList.map((q, i) => {
            const given = answers[q.id];
            const ok = given === q.answer;
            return (
              <li key={q.id} className="paper-card rounded-xl p-4">
                <div className="flex items-start gap-2">
                  {ok ? (
                    <Check className="mt-0.5 size-4 shrink-0 text-success" />
                  ) : (
                    <X className="mt-0.5 size-4 shrink-0 text-danger" />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-subtle">
                      {q.part} · {i + 1}
                    </p>
                    <p className="mt-1 text-sm text-ink">{q.prompt}</p>
                    {q.passage ? (
                      <p className="mt-2 whitespace-pre-wrap rounded-lg bg-bg-deep/70 px-3 py-2 font-display text-sm text-ink">
                        {q.passage}
                      </p>
                    ) : null}
                    {q.audio ? (
                      <button
                        type="button"
                        className="mt-2 inline-flex h-9 items-center gap-1.5 text-sm text-primary"
                        onClick={() => speakJapanese(q.audio ?? "", 0.86)}
                      >
                        <Volume2 className="size-4" />
                        再聽
                      </button>
                    ) : null}
                    <p className="mt-2 text-sm">
                      <span className="text-muted">你的答案：</span>
                      {given ?? "（未作答）"}
                    </p>
                    {!ok ? (
                      <p className="text-sm text-success">正確：{q.answer}</p>
                    ) : null}
                    <p className="mt-1 text-xs text-muted">{q.explanation}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  const low = seconds < 120;

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Link to="/exam" className="inline-flex h-10 items-center gap-1.5 text-sm text-muted hover:text-ink">
          <ArrowLeft className="size-4" />
          離開
        </Link>
        <div className="flex items-center gap-3">
          <span className={cn("tabular-nums text-sm", low ? "text-danger" : "text-ink")}>
            {mm}:{ss}
          </span>
          <Button size="sm" variant="outline" onClick={finish}>
            交卷
          </Button>
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-1 flex justify-between text-xs text-subtle">
          <span>
            已答 {answeredCount} / {allQuestions.length}
          </span>
          <span>{exam.title}</span>
        </div>
        <Progress value={Math.round((answeredCount / allQuestions.length) * 100)} />
      </div>

      <div className="mb-5 flex gap-1 overflow-x-auto rounded-lg border border-border bg-surface p-1">
        {exam.sections.map((s) => {
          const done = s.questions.filter((q) => answers[q.id]).length;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setSectionId(s.id)}
              className={cn(
                "min-h-11 shrink-0 rounded-md px-3 text-sm",
                sectionId === s.id ? "bg-primary text-primary-fg" : "text-muted hover:bg-bg-deep hover:text-ink",
              )}
            >
              {s.title}{" "}
              <span className="text-xs opacity-70">
                {done}/{s.questions.length}
              </span>
            </button>
          );
        })}
      </div>

      {section ? (
        <div className="space-y-5">
          <p className="text-sm text-muted">{section.hint}</p>
          {section.questions.map((q, i) => (
            <QuestionCard
              key={q.id}
              index={i}
              question={q}
              value={answers[q.id]}
              fill={fills[q.id] ?? ""}
              plays={plays[q.id] ?? 0}
              onFill={(v) => setFills((prev) => ({ ...prev, [q.id]: v }))}
              onChoose={(v) => choose(q, v)}
              onPlay={() => {
                const n = plays[q.id] ?? 0;
                if (n >= 2 || !q.audio) return;
                setPlays((prev) => ({ ...prev, [q.id]: n + 1 }));
                speakJapanese(q.audio, 0.86);
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function QuestionCard({
  index,
  question,
  value,
  fill,
  plays,
  onFill,
  onChoose,
  onPlay,
}: {
  index: number;
  question: ExamQuestion;
  value?: string;
  fill: string;
  plays: number;
  onFill: (v: string) => void;
  onChoose: (v: string) => void;
  onPlay: () => void;
}) {
  return (
    <article className="paper-card rounded-xl p-4 sm:p-5">
      <p className="text-xs text-subtle">
        {question.part} · {index + 1}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink">{question.prompt}</p>
      {question.promptJp ? (
        <p className="mt-1 font-display text-lg text-primary">{question.promptJp}</p>
      ) : null}
      {question.passage ? (
        <p className="mt-3 whitespace-pre-wrap rounded-lg bg-bg-deep/70 px-3 py-3 font-display text-base leading-relaxed text-ink">
          {question.passage}
        </p>
      ) : null}
      {question.type === "listen" && question.audio ? (
        <button
          type="button"
          onClick={onPlay}
          disabled={plays >= 2}
          className="mt-3 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm text-primary-fg disabled:opacity-50"
        >
          {question.section === "listening" ? <Headphones className="size-4" /> : <Volume2 className="size-4" />}
          {plays >= 2 ? "已播兩次" : plays === 0 ? "播放" : "再播一次（最後）"}
        </button>
      ) : null}

      {question.type === "fill" ? (
        <form
          className="mt-3 flex flex-col gap-2 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            if (fill.trim()) onChoose(fill);
          }}
        >
          <input
            value={fill}
            onChange={(e) => onFill(e.target.value)}
            className="h-11 flex-1 rounded-md border border-border bg-bg px-3 text-sm outline-none ring-primary/30 focus:ring-2"
            placeholder="填入答案"
          />
          <Button type="submit" size="sm" disabled={!fill.trim()}>
            記入
          </Button>
        </form>
      ) : (
        <div className="mt-3 grid gap-2">
          {question.options.map((option) => {
            const on = value === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => onChoose(option)}
                className={cn(
                  "min-h-11 rounded-lg border px-3 py-2 text-left text-sm",
                  on
                    ? "border-primary bg-primary-soft text-primary"
                    : "border-border bg-surface hover:bg-primary-soft/40",
                )}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </article>
  );
}
