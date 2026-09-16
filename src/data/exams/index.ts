import type { MockExam } from "@/data/types";
import { examN51 } from "./n5-1";
import { examN52 } from "./n5-2";
import { examN53 } from "./n5-3";
import { examN41 } from "./n4-1";
import { examN42 } from "./n4-2";
import { examN43 } from "./n4-3";

export const MOCK_EXAMS: MockExam[] = [examN51, examN52, examN53, examN41, examN42, examN43];

export function getExam(id: string): MockExam | undefined {
  return MOCK_EXAMS.find((exam) => exam.id === id);
}
