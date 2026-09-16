import { LESSONS } from "@/data/lessons";
import { N4_PRACTICE } from "@/data/n4-grammar";
import type { PracticeQuestion } from "@/data/types";

export type DrillRange = "all" | "early" | "late" | "n4";

export const DRILL_RANGES: { id: DrillRange; label: string; hint: string }[] = [
  { id: "all", label: "全教材", hint: "第 1–25 課＋N4" },
  { id: "early", label: "第 1–13 課", hint: "N5 前半" },
  { id: "late", label: "第 14–25 課", hint: "て形到條件句" },
  { id: "n4", label: "N4 衝刺", hint: "可能・受身・使役" },
];

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function lessonsFor(range: DrillRange) {
  if (range === "early") return LESSONS.filter((lesson) => lesson.id <= 13);
  if (range === "late" || range === "n4") return LESSONS.filter((lesson) => lesson.id >= 14);
  return LESSONS;
}

function clipAudio(clip: { speak: string; lines?: { speak: string }[] }) {
  if (clip.speak.trim()) return clip.speak;
  return (clip.lines ?? []).map((line) => line.speak).join("。");
}

export function grammarPool(range: DrillRange): PracticeQuestion[] {
  if (range === "n4") return N4_PRACTICE.filter((q) => q.type !== "listen");
  const fromLessons = lessonsFor(range).flatMap((lesson) =>
    lesson.practice.filter((q) => q.type !== "listen"),
  );
  const n4 = range === "early" ? [] : N4_PRACTICE.filter((q) => q.type !== "listen");
  return [...fromLessons, ...n4];
}

export function listeningPool(range: DrillRange): PracticeQuestion[] {
  const lessons = lessonsFor(range);
  const fromPractice = lessons.flatMap((lesson) =>
    lesson.practice.filter((q) => q.type === "listen"),
  );
  const fromClips = lessons.flatMap((lesson) =>
    (lesson.listening ?? []).flatMap((clip) =>
      clip.questions.map(
        (q, index): PracticeQuestion => ({
          id: `${clip.id}-dq${index}`,
          type: "listen",
          prompt: q.q,
          audio: clipAudio(clip),
          options: q.options,
          answer: q.answer,
          explanation: q.explanation,
        }),
      ),
    ),
  );
  const n4 = range === "early" ? [] : N4_PRACTICE.filter((q) => q.type === "listen");
  return [...fromPractice, ...fromClips, ...n4];
}

export function pickDrill(pool: PracticeQuestion[], size = 20): PracticeQuestion[] {
  return shuffle(pool).slice(0, Math.min(size, pool.length));
}
