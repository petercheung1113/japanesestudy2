import { useEffect } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getLesson, isLessonId, LESSONS } from "@/data/lessons";
import { LESSON_SECTIONS, type SectionId } from "@/data/types";
import { VocabPanel } from "@/components/lesson/vocab-panel";
import { GrammarPanel } from "@/components/lesson/grammar-panel";
import { PracticePanel } from "@/components/lesson/practice-panel";
import { ListenPanel } from "@/components/lesson/listen-panel";
import { ReadingPanel } from "@/components/lesson/reading-panel";
import { SummaryPanel } from "@/components/lesson/summary-panel";
import { Progress } from "@/components/ui/progress";
import { lessonCompletion, useProgress } from "@/lib/progress";
import { useHydrated } from "@/lib/use-hydrated";
import { cn } from "@/lib/utils";

const SECTIONS: SectionId[] = LESSON_SECTIONS.map((s) => s.id);

function parseSection(value: unknown): SectionId {
  return SECTIONS.includes(value as SectionId) ? (value as SectionId) : "vocab";
}

export const Route = createFileRoute("/lesson/$id")({
  validateSearch: (search: Record<string, unknown>): { s?: SectionId } => {
    if (typeof search.s === "string" && SECTIONS.includes(search.s as SectionId)) {
      return { s: search.s as SectionId };
    }
    return {};
  },
  component: LessonPage,
  notFoundComponent: LessonNotFound,
});

function LessonNotFound() {
  return (
    <div className="paper-card rounded-xl p-8 text-center">
      <p className="font-display text-2xl text-ink">沒有這一課</p>
      <p className="mt-2 text-sm text-muted">目前教材為第 1 至第 {LESSONS.length} 課。</p>
      <Link to="/" className="mt-4 inline-flex h-11 items-center text-sm text-primary">
        回到課程
      </Link>
    </div>
  );
}

function LessonPage() {
  const { id } = Route.useParams();
  const { s } = Route.useSearch();
  const section = parseSection(s);
  const numericId = Number(id);
  const lesson = isLessonId(numericId) ? getLesson(numericId) : undefined;
  const visit = useProgress((st) => st.visit);
  const lessons = useProgress((st) => st.lessons);
  const hydrated = useHydrated();

  useEffect(() => {
    if (lesson) visit(lesson.id, section);
  }, [lesson, section, visit]);

  if (!lesson) {
    throw notFound();
  }

  const pct = lessonCompletion(hydrated ? lessons : {}, lesson.id);
  const prevId = lesson.id > 1 ? lesson.id - 1 : null;
  const nextId = lesson.id < LESSONS.length ? lesson.id + 1 : null;

  return (
    <div>
      <Link
        to="/"
        className="mb-4 inline-flex h-10 items-center gap-1.5 text-sm text-muted hover:text-ink"
      >
        <ArrowLeft className="size-4" />
        全部課程
      </Link>

      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium tracking-wide text-primary">第 {lesson.id} 課</p>
          <h1 className="mt-1 font-display text-3xl text-ink sm:text-4xl">{lesson.titleJp}</h1>
          <p className="mt-1 text-sm text-muted">
            {lesson.titleZh} · {lesson.theme}
          </p>
          <p className="mt-2 text-xs text-subtle">會話題材：{lesson.conversation}</p>
        </div>
        <div className="w-full sm:w-40">
          <div className="mb-1 flex justify-between text-xs text-subtle">
            <span>完課</span>
            <span className="tabular-nums">{pct}%</span>
          </div>
          <Progress value={pct} />
        </div>
      </div>

      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-muted">{lesson.intro}</p>

      <div className="mb-6 overflow-x-auto">
        <div className="flex min-w-max gap-1 rounded-lg border border-border bg-surface p-1 sm:grid sm:min-w-full sm:grid-cols-6">
          {LESSON_SECTIONS.map((item) => {
            const active = section === item.id;
            return (
              <Link
                key={item.id}
                to="/lesson/$id"
                params={{ id }}
                search={{ s: item.id }}
                className={cn(
                  "flex min-h-11 min-w-16 flex-col items-center justify-center rounded-md px-2 text-center sm:px-3",
                  active ? "bg-primary text-primary-fg" : "text-muted hover:bg-bg-deep hover:text-ink",
                )}
              >
                <span className="text-sm font-medium">{item.label}</span>
                <span
                  className={cn(
                    "hidden text-xs sm:block",
                    active ? "text-primary-fg/80" : "text-subtle",
                  )}
                >
                  {item.hint}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {section === "vocab" ? <VocabPanel lesson={lesson} /> : null}
      {section === "grammar" ? <GrammarPanel lesson={lesson} /> : null}
      {section === "practice" ? <PracticePanel key={lesson.id} lesson={lesson} /> : null}
      {section === "listen" ? <ListenPanel key={lesson.id} lesson={lesson} /> : null}
      {section === "reading" ? <ReadingPanel lesson={lesson} /> : null}
      {section === "summary" ? <SummaryPanel lesson={lesson} /> : null}

      <div className="mt-10 flex items-center justify-between gap-3 border-t border-border pt-5">
        {prevId ? (
          <Link
            to="/lesson/$id"
            params={{ id: String(prevId) }}
            className="inline-flex h-11 items-center gap-1 text-sm text-muted hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            第 {prevId} 課
          </Link>
        ) : (
          <span />
        )}
        {nextId ? (
          <Link
            to="/lesson/$id"
            params={{ id: String(nextId) }}
            className="inline-flex h-11 items-center gap-1 text-sm text-primary"
          >
            第 {nextId} 課
            <ArrowRight className="size-4" />
          </Link>
        ) : (
          <Link to="/exam" className="text-sm text-primary">
            初級 1 完成 · 去做模擬試
          </Link>
        )}
      </div>
    </div>
  );
}
