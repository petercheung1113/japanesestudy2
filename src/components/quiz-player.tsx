import { useMemo, useState } from "react";
import { Check, RotateCcw, Volume2, X } from "lucide-react";
import type { PracticeQuestion } from "@/data/types";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { speakJapanese } from "@/lib/speech";
import { cn } from "@/lib/utils";

function normalize(value: string) {
  return value.trim().replace(/\s+/g, "").toLowerCase();
}

export function isCorrect(question: PracticeQuestion, given: string) {
  return normalize(given) === normalize(question.answer);
}

export function QuizPlayer({
  questions,
  kicker = "練習",
  onFinish,
}: {
  questions: PracticeQuestion[];
  kicker?: string;
  onFinish?: (score: number, total: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [fill, setFill] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const current = questions[index];
  const pct = useMemo(
    () => Math.round(((done ? questions.length : index) / Math.max(questions.length, 1)) * 100),
    [done, index, questions.length],
  );

  function submit(answer: string) {
    if (revealed || !current) return;
    setSelected(answer);
    setRevealed(true);
    if (isCorrect(current, answer)) setScore((s) => s + 1);
  }

  function next() {
    if (index + 1 >= questions.length) {
      onFinish?.(score, questions.length);
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setFill("");
    setRevealed(false);
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setFill("");
    setRevealed(false);
    setScore(0);
    setDone(false);
  }

  if (!questions.length) {
    return <p className="text-sm text-muted">這部份還沒有題目。</p>;
  }

  if (done) {
    const percent = Math.round((score / questions.length) * 100);
    return (
      <div className="paper-card mx-auto max-w-md rounded-2xl p-8 text-center">
        <p className="text-xs tracking-wide text-subtle">{kicker}</p>
        <p className="mt-2 font-display text-5xl tabular-nums text-ink">{percent}</p>
        <p className="mt-1 text-sm text-muted">
          {score} / {questions.length} 題正確
        </p>
        <p className="mt-4 text-sm text-muted">
          {percent >= 80 ? "很穩。錯題解說可以再掃一遍。" : "再走一遍會更熟，錯題解說值得再讀。"}
        </p>
        <Button className="mt-6" onClick={restart}>
          <RotateCcw className="size-4" />
          再練一次
        </Button>
      </div>
    );
  }

  if (!current) return null;

  const choices = current.options ?? ["正確", "錯誤"];
  const given = current.type === "fill" ? (selected ?? fill) : (selected ?? "");
  const ok = revealed && given ? isCorrect(current, given) : false;
  const kind =
    current.type === "mcq"
      ? "選擇題"
      : current.type === "tf"
        ? "是非題"
        : current.type === "listen"
          ? "聽解"
          : "填空";

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3 text-sm text-muted">
        <span>
          第 {index + 1} / {questions.length} 題
        </span>
        <span className="tabular-nums">目前 {score} 分</span>
      </div>
      <Progress value={pct} />

      <div className="paper-card rounded-xl p-5">
        <p className="text-xs text-subtle">{kind}</p>
        <p className="mt-2 text-lg leading-relaxed text-ink">{current.prompt}</p>
        {current.promptJp ? (
          <p className="mt-2 font-display text-xl text-primary">{current.promptJp}</p>
        ) : null}
        {current.type === "listen" && current.audio ? (
          <button
            type="button"
            onClick={() => speakJapanese(current.audio ?? "", 0.86)}
            className="mt-4 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-5 text-sm text-primary-fg"
          >
            <Volume2 className="size-5" />
            播放題目
          </button>
        ) : null}
      </div>

      {current.type === "fill" ? (
        <form
          className="flex flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            submit(fill);
          }}
        >
          <input
            value={fill}
            onChange={(e) => setFill(e.target.value)}
            disabled={revealed}
            className="h-12 flex-1 rounded-md border border-border bg-surface px-3 font-display text-lg outline-none ring-primary/30 focus:ring-2"
            placeholder="輸入答案"
            autoComplete="off"
          />
          <Button type="submit" disabled={revealed || !fill.trim()}>
            送出
          </Button>
        </form>
      ) : (
        <div className="grid gap-2">
          {choices.map((option) => {
            const chosen = selected === option;
            const isAns = revealed && isCorrect(current, option);
            const isWrong = revealed && chosen && !isAns;
            return (
              <button
                key={option}
                type="button"
                disabled={revealed}
                onClick={() => submit(option)}
                className={cn(
                  "min-h-12 rounded-lg border px-4 py-3 text-left text-sm transition-colors duration-150",
                  !revealed &&
                    "border-border bg-surface hover:border-primary/40 hover:bg-primary-soft/40",
                  isAns && "border-success/40 bg-success-soft text-success",
                  isWrong && "border-danger/40 bg-danger-soft text-danger",
                  revealed && !isAns && !isWrong && "border-border bg-surface text-muted",
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

      {revealed ? (
        <div
          className={cn(
            "rounded-xl px-4 py-3 text-sm",
            ok ? "bg-success-soft text-success" : "bg-danger-soft text-danger",
          )}
        >
          <p className="font-medium">{ok ? "正確" : `正確答案：${current.answer}`}</p>
          <p className="mt-1 text-ink/80">{current.explanation}</p>
          <Button className="mt-3" variant={ok ? "default" : "outline"} onClick={next}>
            {index + 1 >= questions.length ? "看結果" : "下一題"}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
