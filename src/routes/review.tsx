import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, RotateCcw, X } from "lucide-react";
import { LESSONS } from "@/data/lessons";
import { DRILL_RANGES, grammarPool, listeningPool, pickDrill, type DrillRange } from "@/data/drill";
import type { VocabItem } from "@/data/types";
import { PageTitle } from "@/components/app-shell";
import { SpeakButton } from "@/components/speak-button";
import { QuizPlayer } from "@/components/quiz-player";
import { Button } from "@/components/ui/button";
import { useHydrated } from "@/lib/use-hydrated";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/review")({ component: ReviewPage });

type Tab = "vocab" | "grammar" | "listen";
type Mode = "jp-zh" | "zh-jp";

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function labelOf(item: VocabItem, mode: Mode) {
  return mode === "jp-zh" ? item.zh : (item.kanji ?? item.kana);
}

function optionsFor(item: VocabItem, mode: Mode, pool: VocabItem[]) {
  const answer = labelOf(item, mode);
  const distractors = shuffle(
    pool.filter((v) => v.id !== item.id).map((v) => labelOf(v, mode)),
  )
    .filter((value, i, arr) => value !== answer && arr.indexOf(value) === i)
    .slice(0, 3);
  return shuffle([answer, ...distractors]);
}

function ReviewPage() {
  const [tab, setTab] = useState<Tab>("vocab");
  const [range, setRange] = useState<DrillRange>("all");

  return (
    <div>
      <PageTitle
        kicker="REVIEW"
        title="複習與聽解"
        description="詞彙閃卡、文法混合 20 題、聽解抽測。範圍可切第 1–13 課、第 14–25 課或 N4 衝刺。"
      />

      <div className="mb-4 flex gap-1 rounded-lg border border-border bg-surface p-1">
        {(
          [
            ["vocab", "詞彙"],
            ["grammar", "文法 20 題"],
            ["listen", "聽解 15 題"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={cn(
              "h-11 flex-1 rounded-md text-sm",
              tab === id ? "bg-primary text-primary-fg" : "text-muted",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {tab !== "vocab" ? (
        <div className="mb-5 flex flex-wrap gap-2">
          {DRILL_RANGES.map((item) => (
            <Button
              key={item.id}
              size="sm"
              variant={range === item.id ? "default" : "outline"}
              onClick={() => setRange(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </div>
      ) : null}

      {tab === "vocab" ? (
        <VocabDrill />
      ) : (
        <MixedDrill tab={tab} range={range} />
      )}
    </div>
  );
}

function MixedDrill({ tab, range }: { tab: Exclude<Tab, "vocab">; range: DrillRange }) {
  const hydrated = useHydrated();
  const [seed, setSeed] = useState(0);
  const poolSize = tab === "grammar" ? grammarPool(range).length : listeningPool(range).length;
  const questions = useMemo(() => {
    if (!hydrated) return [];
    const pool = tab === "grammar" ? grammarPool(range) : listeningPool(range);
    return pickDrill(pool, tab === "grammar" ? 20 : 15);
  }, [tab, range, seed, hydrated]);

  if (!hydrated) {
    return <p className="text-sm text-muted">準備題目中……</p>;
  }

  return (
    <div>
      <p className="mb-4 text-sm text-muted">
        從 {poolSize} 題裡抽出一組。聽解請開聲音，用裝置日語語音朗讀。
      </p>
      {questions.length ? (
        <QuizPlayer
          key={`${tab}-${range}-${seed}`}
          questions={questions}
          kicker={tab === "grammar" ? "混合文法" : "混合聽解"}
        />
      ) : (
        <p className="text-sm text-muted">這個範圍還沒有題目。</p>
      )}
      <Button className="mt-4" variant="outline" onClick={() => setSeed((n) => n + 1)}>
        <RotateCcw className="size-4" />
        換一組題
      </Button>
    </div>
  );
}

function VocabDrill() {
  const recordVocabQuiz = useProgress((s) => s.recordVocabQuiz);
  const stats = useProgress((s) => s.vocab);
  const hydrated = useHydrated();
  const pool = useMemo(() => LESSONS.flatMap((lesson) => lesson.vocab), []);
  const [mode, setMode] = useState<Mode>("jp-zh");
  const [queue, setQueue] = useState<VocabItem[]>(pool);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState({ ok: 0, total: 0 });
  const [deal, setDeal] = useState(0);

  useEffect(() => {
    if (!hydrated) return;
    setQueue(shuffle(pool));
    setIndex(0);
    setPicked(null);
    setScore({ ok: 0, total: 0 });
    setDeal((n) => n + 1);
  }, [hydrated, pool]);

  const current = queue[index];
  const choices = useMemo(() => {
    if (!current) return [];
    return optionsFor(current, mode, pool);
  }, [current, mode, pool, deal]);

  const answer = current ? labelOf(current, mode) : "";
  const prompt = current
    ? mode === "jp-zh"
      ? (current.kanji ?? current.kana)
      : current.zh
    : "";

  function restart() {
    setQueue(shuffle(pool));
    setIndex(0);
    setPicked(null);
    setScore({ ok: 0, total: 0 });
    setDeal((n) => n + 1);
  }

  function changeMode(next: Mode) {
    setMode(next);
    setPicked(null);
    setDeal((n) => n + 1);
  }

  function choose(option: string) {
    if (!current || picked) return;
    const ok = option === labelOf(current, mode);
    setPicked(option);
    setScore((s) => ({ ok: s.ok + (ok ? 1 : 0), total: s.total + 1 }));
    recordVocabQuiz(current.id, ok);
  }

  function next() {
    setPicked(null);
    setIndex((i) => (i + 1 >= queue.length ? 0 : i + 1));
    setDeal((n) => n + 1);
  }

  const mastery = current ? stats[current.id] : undefined;

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <Button
          size="sm"
          variant={mode === "jp-zh" ? "default" : "outline"}
          onClick={() => changeMode("jp-zh")}
        >
          日 → 中
        </Button>
        <Button
          size="sm"
          variant={mode === "zh-jp" ? "default" : "outline"}
          onClick={() => changeMode("zh-jp")}
        >
          中 → 日
        </Button>
        <Button size="sm" variant="ghost" onClick={restart}>
          <RotateCcw className="size-3.5" />
          重洗
        </Button>
        <span className="ml-auto text-sm tabular-nums text-muted">
          {score.ok} / {score.total}
        </span>
      </div>

      {current ? (
        <div className="space-y-4">
          <div className="paper-card relative rounded-2xl p-8 text-center">
            <SpeakButton text={current.kana} className="absolute right-3 top-3" />
            <p className="text-xs text-subtle">
              第 {index + 1} / {queue.length} 詞
              {mastery ? ` · 答對 ${mastery.correct}/${mastery.seen}` : ""}
            </p>
            <p className="mt-3 font-display text-4xl text-ink">{prompt}</p>
            {mode === "jp-zh" ? (
              <p className="mt-2 text-sm text-muted">
                {current.kana}
                <span className="mx-2 text-subtle">·</span>
                {current.romaji}
              </p>
            ) : null}
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {choices.map((option) => {
              const isAns = picked !== null && option === answer;
              const isWrong = picked === option && option !== answer;
              return (
                <button
                  key={option}
                  type="button"
                  disabled={picked !== null}
                  onClick={() => choose(option)}
                  className={cn(
                    "min-h-12 rounded-lg border px-4 py-3 text-left text-sm",
                    picked === null && "border-border bg-surface hover:bg-primary-soft/50",
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
          {picked ? (
            <Button onClick={next} className="w-full sm:w-auto">
              下一詞
            </Button>
          ) : null}
        </div>
      ) : (
        <p className="text-sm text-muted">沒有可複習的詞彙。</p>
      )}

      <p className="mt-8 text-sm text-muted">
        想按課練習？回到
        <Link to="/" className="mx-1 text-primary underline-offset-2 hover:underline">
          課程路徑
        </Link>
        選一課。文法與聽解也可切到上面的分頁抽測。
      </p>
    </div>
  );
}
