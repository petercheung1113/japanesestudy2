import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpenText,
  ClipboardCheck,
  Headphones,
  ListChecks,
  MessageSquareText,
  PenLine,
} from "lucide-react";
import { LESSONS, TOTAL_GRAMMAR, TOTAL_PRACTICE, TOTAL_VOCAB } from "@/data/lessons";
import { LESSON_UNITS } from "@/data/types";
import { MOCK_EXAMS } from "@/data/exams";
import { lessonCompletion, overallStats, useProgress } from "@/lib/progress";
import { useHydrated } from "@/lib/use-hydrated";
import { Progress } from "@/components/ui/progress";
import { PageTitle } from "@/components/app-shell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const hydrated = useHydrated();
  const stored = useProgress((s) => s.lessons);
  const lastLessonId = useProgress((s) => s.lastLessonId);
  const lessonsState = hydrated ? stored : {};
  const stats = overallStats(lessonsState);
  const continueId = (hydrated ? lastLessonId : null) ?? 1;
  const continueLesson = LESSONS.find((l) => l.id === continueId) ?? LESSONS[0];

  return (
    <div>
      <PageTitle
        kicker="MINNA CLASSROOM"
        title="初級日語，按課走完。"
        description="對應《大家的日本語》初級第 1–25 課。每課含詞彙、文法、練習、聽解、文章與總結；並有 N5／N4 模擬試。進度存在這台裝置。"
      />

      <div className="grid gap-3 sm:grid-cols-3">
        <Stat label="整體進度" value={`${stats.avg}%`} hint={`${stats.done} 課達 80%`} />
        <Stat label="詞彙標記" value={`${stats.vocabLearned}`} hint={`全教材 ${TOTAL_VOCAB} 詞`} />
        <Stat
          label="教材規模"
          value={`${LESSONS.length} 課`}
          hint={`${TOTAL_GRAMMAR} 文法 · ${TOTAL_PRACTICE} 題`}
        />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Link
          to="/start"
          className="paper-card flex items-center justify-between gap-4 rounded-2xl p-5 transition-[transform,box-shadow] duration-200 hover:shadow-lift"
        >
          <div>
            <p className="text-xs font-medium tracking-wide text-primary">はじめに</p>
            <p className="mt-1 font-display text-2xl text-ink">五十音與招呼</p>
            <p className="mt-1 text-sm text-muted">假名、教室用語、數字 0–10、登場人物</p>
          </div>
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
            <ArrowRight className="size-5" />
          </span>
        </Link>

        <Link
          to="/lesson/$id"
          params={{ id: String(continueLesson.id) }}
          className="paper-card flex items-center justify-between gap-4 rounded-2xl p-5 transition-[transform,box-shadow] duration-200 hover:shadow-lift"
        >
          <div>
            <p className="text-xs font-medium tracking-wide text-primary">繼續學習</p>
            <p className="mt-1 font-display text-2xl text-ink">第 {continueLesson.id} 課</p>
            <p className="mt-1 text-sm text-muted">
              {continueLesson.titleZh} · {continueLesson.theme}
            </p>
          </div>
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-primary-fg">
            <ArrowRight className="size-5" />
          </span>
        </Link>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Link
          to="/exam"
          className="paper-card flex items-center justify-between gap-4 rounded-2xl p-5 transition-[transform,box-shadow] duration-200 hover:shadow-lift"
        >
          <div>
            <p className="text-xs font-medium tracking-wide text-primary">模擬試</p>
            <p className="mt-1 font-display text-2xl text-ink">N5／N4 試卷</p>
            <p className="mt-1 text-sm text-muted">
              {MOCK_EXAMS.length} 回 · 語彙・文法・讀解・聽解
            </p>
          </div>
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
            <ClipboardCheck className="size-5" />
          </span>
        </Link>
        <Link
          to="/n4"
          className="paper-card flex items-center justify-between gap-4 rounded-2xl p-5 transition-[transform,box-shadow] duration-200 hover:shadow-lift"
        >
          <div>
            <p className="text-xs font-medium tracking-wide text-primary">N4 衝刺</p>
            <p className="mt-1 font-display text-2xl text-ink">初級 1 之後</p>
            <p className="mt-1 text-sm text-muted">16 個句型 · 混合練習與聽解</p>
          </div>
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
            <PenLine className="size-5" />
          </span>
        </Link>
      </div>

      <section className="mt-8 space-y-8">
        {LESSON_UNITS.map((unit) => {
          const unitLessons = LESSONS.filter((lesson) => unit.lessons.includes(lesson.id));
          if (!unitLessons.length) return null;
          return (
            <div key={unit.id}>
              <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
                <div>
                  <p className="text-xs font-medium tracking-wide text-primary">{unit.label}</p>
                  <h2 className="font-display text-xl text-ink">{unit.title}</h2>
                </div>
                <Link
                  to="/unit/$id"
                  params={{ id: unit.id }}
                  className="inline-flex h-10 items-center text-sm text-primary hover:underline"
                >
                  進入復習
                  <ArrowRight className="ml-1 size-3.5" />
                </Link>
              </div>
              <ol className="grid gap-3 sm:grid-cols-2">
                {unitLessons.map((lesson) => {
                  const pct = lessonCompletion(lessonsState, lesson.id);
                  return (
                    <li key={lesson.id}>
                      <Link
                        to="/lesson/$id"
                        params={{ id: String(lesson.id) }}
                        className="paper-card flex h-full gap-4 rounded-xl p-4 transition-[transform,box-shadow] duration-200 hover:shadow-lift"
                      >
                        <span className="seal size-12 shrink-0 text-sm text-primary">
                          {String(lesson.id).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="font-display text-lg leading-tight text-ink">{lesson.titleJp}</p>
                          <p className="mt-0.5 text-sm text-muted">
                            {lesson.titleZh} · {lesson.theme}
                          </p>
                          <div className="mt-3 flex items-center gap-3">
                            <Progress value={pct} className="flex-1" />
                            <span className="w-10 text-right text-xs tabular-nums text-subtle">{pct}%</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
      </section>

      <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        <Feature icon={BookOpenText} title="詞彙" text="假名、漢字、羅馬字與朗讀" />
        <Feature icon={PenLine} title="文法" text="句型、對照表與帶讀例句" />
        <Feature icon={ListChecks} title="練習" text="選擇、是非、填空即時回饋" />
        <Feature icon={Headphones} title="聽解" text="播放對話後選答" />
        <Feature icon={MessageSquareText} title="文章" text="原創對話與理解題" />
        <Feature icon={ClipboardCheck} title="模擬試" text="N5／N4 四部份計時" />
      </section>
    </div>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="paper-card rounded-xl p-4">
      <p className="text-xs text-subtle">{label}</p>
      <p className="mt-1 font-display text-3xl tabular-nums text-ink">{value}</p>
      <p className="mt-1 text-xs text-muted">{hint}</p>
    </div>
  );
}

function Feature({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof BookOpenText;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface px-4 py-3">
      <Icon className="size-4 text-primary" />
      <p className="mt-2 text-sm font-medium text-ink">{title}</p>
      <p className="mt-0.5 text-xs leading-relaxed text-muted">{text}</p>
    </div>
  );
}
