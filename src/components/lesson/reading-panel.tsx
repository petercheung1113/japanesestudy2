import { useState } from "react";
import type { Lesson } from "@/data/types";
import { Furigana } from "@/components/furigana";
import { SpeakButton } from "@/components/speak-button";
import { Button } from "@/components/ui/button";
import { getLessonProgress, useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

export function ReadingPanel({ lesson }: { lesson: Lesson }) {
  const [showZh, setShowZh] = useState(true);
  const [showReading, setShowReading] = useState(true);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const lessons = useProgress((s) => s.lessons);
  const markReadingDone = useProgress((s) => s.markReadingDone);
  const progress = getLessonProgress(lessons, lesson.id);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        <Button variant={showReading ? "secondary" : "outline"} size="sm" onClick={() => setShowReading((v) => !v)}>
          {showReading ? "隱藏假名" : "顯示假名"}
        </Button>
        <Button variant={showZh ? "secondary" : "outline"} size="sm" onClick={() => setShowZh((v) => !v)}>
          {showZh ? "隱藏譯文" : "顯示譯文"}
        </Button>
      </div>

      {lesson.readings.map((passage) => {
        const done = progress.readingDone.includes(passage.id);
        return (
          <article key={passage.id} className="space-y-4">
            <header>
              <h2 className="font-display text-2xl text-ink">{passage.title}</h2>
              <p className="mt-1 text-sm text-muted">{passage.scene}</p>
            </header>
            <ol className="space-y-3">
              {passage.lines.map((line, i) => (
                <li
                  key={`${passage.id}-${i}`}
                  className={cn(
                    "paper-card rounded-xl p-4",
                    line.role === "a" && "sm:mr-8",
                    line.role === "b" && "sm:ml-8",
                    line.role === "c" && "sm:ml-4",
                  )}
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="text-xs font-medium tracking-wide text-primary">{line.speaker}</span>
                    <SpeakButton text={line.speak} label={`朗讀 ${line.speaker}`} />
                  </div>
                  <p className="font-display text-lg text-ink">
                    <Furigana text={line.jp} showReading={showReading} />
                  </p>
                  {showZh ? <p className="mt-2 text-sm text-muted">{line.zh}</p> : null}
                </li>
              ))}
            </ol>

            {passage.notes.length ? (
              <div className="rounded-xl bg-primary-soft/50 px-4 py-3">
                <p className="text-xs font-medium text-primary">語句筆記</p>
                <ul className="mt-2 space-y-1.5 text-sm text-ink">
                  {passage.notes.map((note) => (
                    <li key={note.term}>
                      <span className="font-medium">{note.term}</span>
                      <span className="text-muted"> — {note.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {passage.comprehension.length ? (
              <div className="space-y-3">
                <h3 className="font-display text-lg text-ink">內容理解</h3>
                {passage.comprehension.map((item, qi) => {
                  const key = `${passage.id}-${qi}`;
                  const chosen = answers[key];
                  return (
                    <div key={key} className="paper-card rounded-xl p-4">
                      <p className="text-sm text-ink">{item.q}</p>
                      <div className="mt-2 grid gap-2">
                        {item.options.map((option) => {
                          const picked = chosen === option;
                          const correct = chosen && option === item.answer;
                          const wrong = picked && option !== item.answer;
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => {
                                setAnswers((prev) => ({ ...prev, [key]: option }));
                                if (option === item.answer) markReadingDone(lesson.id, passage.id);
                              }}
                              className={cn(
                                "min-h-11 rounded-md border px-3 py-2 text-left text-sm",
                                !chosen && "border-border bg-surface hover:bg-bg-deep",
                                correct && "border-success/40 bg-success-soft text-success",
                                wrong && "border-danger/40 bg-danger-soft text-danger",
                                chosen && !correct && !wrong && "border-border text-muted",
                              )}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}

            {done ? <p className="text-xs text-success">本篇已計入進度</p> : null}
          </article>
        );
      })}
    </div>
  );
}
