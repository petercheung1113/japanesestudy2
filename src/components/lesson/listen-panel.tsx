import { useEffect, useState } from "react";
import { Pause, Volume2 } from "lucide-react";
import type { Lesson, ListeningClip } from "@/data/types";
import { Button } from "@/components/ui/button";
import { SpeakButton } from "@/components/speak-button";
import { useProgress } from "@/lib/progress";
import { speakJapanese, speakSequence, stopSpeaking } from "@/lib/speech";
import { cn } from "@/lib/utils";

export function ListenPanel({ lesson }: { lesson: Lesson }) {
  const clips = lesson.listening ?? [];
  if (!clips.length) {
    return (
      <div className="paper-card rounded-xl p-6 text-sm text-muted">
        本課聽解正在準備中。可先用語音按鈕朗讀詞彙與文章。
      </div>
    );
  }
  return (
    <div className="space-y-8">
      <p className="text-sm text-muted">
        先聽一至兩遍再作答。音訊由裝置語音合成朗讀，語速接近課堂。答完才顯示逐字稿。
      </p>
      {clips.map((clip) => (
        <ClipCard key={clip.id} lessonId={lesson.id} clip={clip} />
      ))}
    </div>
  );
}

function ClipCard({ lessonId, clip }: { lessonId: number; clip: ListeningClip }) {
  const markListeningDone = useProgress((s) => s.markListeningDone);
  const [plays, setPlays] = useState(0);
  const [picked, setPicked] = useState<Record<number, string>>({});
  const [showScript, setShowScript] = useState(false);
  const answered = clip.questions.every((_, i) => picked[i]);
  const correct = clip.questions.filter((q, i) => picked[i] === q.answer).length;

  useEffect(() => {
    return () => stopSpeaking();
  }, []);

  useEffect(() => {
    if (answered) markListeningDone(lessonId, clip.id);
  }, [answered, clip.id, lessonId, markListeningDone]);

  function play() {
    const lines = clip.lines?.map((l) => l.speak) ?? (clip.speak ? [clip.speak] : []);
    setPlays((n) => n + 1);
    if (lines.length > 1) speakSequence(lines, 0.86, 480);
    else speakJapanese(lines[0] ?? "", 0.86);
  }

  return (
    <article className="paper-card space-y-4 rounded-2xl p-5">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs tracking-wide text-primary">{clip.scene}</p>
          <h3 className="mt-1 font-display text-xl text-ink">{clip.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={play}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm text-primary-fg"
          >
            <Volume2 className="size-4" />
            {plays === 0 ? "播放" : "再聽一次"}
          </button>
          <Button type="button" size="icon-sm" variant="ghost" onClick={() => stopSpeaking()} aria-label="停止">
            <Pause className="size-4" />
          </Button>
        </div>
      </header>
      <p className="text-xs text-subtle">已播放 {plays} 次 · 建議至少聽兩遍再選</p>

      <ol className="space-y-4">
        {clip.questions.map((q, qi) => {
          const choice = picked[qi];
          return (
            <li key={q.q} className="rounded-xl border border-border bg-bg/50 p-4">
              <p className="text-sm text-ink">
                {qi + 1}. {q.q}
              </p>
              <div className="mt-3 grid gap-2">
                {q.options.map((option) => {
                  const chosen = choice === option;
                  const revealed = Boolean(choice);
                  const isAns = revealed && option === q.answer;
                  const isWrong = revealed && chosen && option !== q.answer;
                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={Boolean(choice)}
                      onClick={() => setPicked((prev) => ({ ...prev, [qi]: option }))}
                      className={cn(
                        "min-h-11 rounded-lg border px-3 py-2 text-left text-sm",
                        !revealed && "border-border bg-surface hover:bg-primary-soft/50",
                        isAns && "border-success/40 bg-success-soft text-success",
                        isWrong && "border-danger/40 bg-danger-soft text-danger",
                        revealed && !isAns && !isWrong && "border-border text-muted",
                      )}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {choice ? <p className="mt-2 text-xs text-muted">{q.explanation}</p> : null}
            </li>
          );
        })}
      </ol>

      {answered ? (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-primary-soft/70 px-4 py-3">
          <p className="text-sm text-ink">
            本題組 {correct} / {clip.questions.length}
          </p>
          <Button size="sm" variant="outline" onClick={() => setShowScript((v) => !v)}>
            {showScript ? "隱藏逐字稿" : "看逐字稿"}
          </Button>
        </div>
      ) : null}

      {showScript ? (
        <div className="rounded-xl bg-bg-deep/70 px-4 py-3">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs tracking-wide text-subtle">TRANSCRIPT</p>
            <SpeakButton text={clip.lines?.map((l) => l.speak).join("。") || clip.speak} />
          </div>
          <p className="whitespace-pre-wrap font-display text-base leading-relaxed text-ink">{clip.transcript}</p>
        </div>
      ) : null}
    </article>
  );
}
