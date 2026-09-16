import type { Lesson } from "@/data/types";
import { QuizPlayer } from "@/components/quiz-player";
import { useProgress } from "@/lib/progress";

export function PracticePanel({ lesson }: { lesson: Lesson }) {
  const savePractice = useProgress((s) => s.savePractice);
  return (
    <QuizPlayer
      key={lesson.id}
      questions={lesson.practice}
      kicker={`第 ${lesson.id} 課練習`}
      onFinish={(score, total) => savePractice(lesson.id, score, total)}
    />
  );
}
