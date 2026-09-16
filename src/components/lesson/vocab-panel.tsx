import { useMemo, useState } from "react";
import { Check, LayoutGrid, List, RotateCcw } from "lucide-react";
import type { Lesson } from "@/data/types";
import { Button } from "@/components/ui/button";
import { SpeakButton } from "@/components/speak-button";
import { getLessonProgress, useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

export function VocabPanel({ lesson }: { lesson: Lesson }) {
  const [mode, setMode] = useState<"list" | "cards">("list");
  const [query, setQuery] = useState("");
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const lessons = useProgress((s) => s.lessons);
  const markVocabLearned = useProgress((s) => s.markVocabLearned);
  const progress = getLessonProgress(lessons, lesson.id);
  const learned = useMemo(() => new Set(progress.vocabLearned), [progress.vocabLearned]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return lesson.vocab;
    return lesson.vocab.filter((item) =>
      [item.kana, item.kanji, item.romaji, item.zh, item.pos]
        .filter(Boolean)
        .some((field) => String(field).toLowerCase().includes(q)),
    );
  }, [lesson.vocab, query]);

  const card = filtered[cardIndex] ?? filtered[0];

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          已標記 {learned.size} / {lesson.vocab.length} 個詞
        </p>
        <div className="flex items-center gap-2">
          <div className="flex rounded-md border border-border bg-surface p-1">
            <button
              type="button"
              className={cn(
                "inline-flex h-9 items-center gap-1 rounded-sm px-3 text-xs",
                mode === "list" ? "bg-primary-soft text-primary" : "text-muted",
              )}
              onClick={() => setMode("list")}
            >
              <List className="size-3.5" />
              一覽
            </button>
            <button
              type="button"
              className={cn(
                "inline-flex h-9 items-center gap-1 rounded-sm px-3 text-xs",
                mode === "cards" ? "bg-primary-soft text-primary" : "text-muted",
              )}
              onClick={() => {
                setMode("cards");
                setFlipped(false);
                setCardIndex(0);
              }}
            >
              <LayoutGrid className="size-3.5" />
              字卡
            </button>
          </div>
        </div>
      </div>

      <label className="block">
        <span className="sr-only">搜尋詞彙</span>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCardIndex(0);
            setFlipped(false);
          }}
          placeholder="搜尋假名、漢字、中文…"
          className="h-11 w-full rounded-md border border-border bg-surface px-3 text-sm outline-none ring-primary/30 placeholder:text-subtle focus:ring-2"
        />
      </label>

      {mode === "list" ? (
        <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
          {filtered.map((item) => {
            const on = learned.has(item.id);
            return (
              <li key={item.id} className="flex items-center gap-3 px-3 py-3 sm:px-4">
                <SpeakButton text={item.kana} label={`朗讀 ${item.kana}`} />
                <div className="min-w-0 flex-1">
                  <p className="font-display text-lg leading-tight text-ink">
                    {item.kanji ?? item.kana}
                    {item.kanji ? (
                      <span className="ml-2 font-sans text-sm text-muted">{item.kana}</span>
                    ) : null}
                  </p>
                  <p className="mt-0.5 text-xs text-subtle">
                    {item.romaji} · {item.pos}
                    {item.note ? ` · ${item.note}` : ""}
                  </p>
                </div>
                <p className="shrink-0 text-sm text-ink">{item.zh}</p>
                <button
                  type="button"
                  onClick={() => markVocabLearned(lesson.id, item.id, !on)}
                  className={cn(
                    "inline-flex size-11 shrink-0 items-center justify-center rounded-md border transition-colors duration-150",
                    on
                      ? "border-success/30 bg-success-soft text-success"
                      : "border-border text-subtle hover:bg-bg-deep",
                  )}
                  aria-label={on ? "取消已學會" : "標記已學會"}
                >
                  <Check className="size-4" />
                </button>
              </li>
            );
          })}
        </ul>
      ) : card ? (
        <div className="space-y-4">
          <button
            type="button"
            onClick={() => setFlipped((v) => !v)}
            className="paper-card relative mx-auto flex min-h-64 w-full max-w-md flex-col items-center justify-center rounded-2xl p-8 text-center"
          >
            <span className="absolute left-4 top-4 text-xs text-subtle">
              {Math.min(cardIndex + 1, filtered.length)} / {filtered.length} · 點擊翻面
            </span>
            <SpeakButton
              text={card.kana}
              className="absolute right-3 top-3"
              label={`朗讀 ${card.kana}`}
            />
            {flipped ? (
              <>
                <p className="font-display text-3xl text-ink">{card.zh}</p>
                <p className="mt-3 text-sm text-muted">{card.pos}</p>
                {card.note ? <p className="mt-2 text-xs text-subtle">{card.note}</p> : null}
              </>
            ) : (
              <>
                <p className="font-display text-4xl text-ink">{card.kanji ?? card.kana}</p>
                <p className="mt-3 text-lg text-muted">{card.kana}</p>
                <p className="mt-1 text-xs tracking-wide text-subtle">{card.romaji}</p>
              </>
            )}
          </button>
          <div className="mx-auto flex max-w-md items-center justify-between gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setCardIndex((i) => Math.max(0, i - 1));
                setFlipped(false);
              }}
              disabled={cardIndex === 0}
            >
              上一張
            </Button>
            <Button
              variant="secondary"
              onClick={() => markVocabLearned(lesson.id, card.id, !learned.has(card.id))}
            >
              {learned.has(card.id) ? "取消標記" : "已學會"}
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setCardIndex((i) => Math.min(filtered.length - 1, i + 1));
                setFlipped(false);
              }}
              disabled={cardIndex >= filtered.length - 1}
            >
              下一張
            </Button>
          </div>
          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setCardIndex(0);
                setFlipped(false);
              }}
            >
              <RotateCcw className="size-3.5" />
              從頭開始
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-sm text-muted">沒有符合的詞彙。</p>
      )}
    </div>
  );
}
