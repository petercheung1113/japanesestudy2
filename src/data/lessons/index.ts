import type { Lesson, LessonId } from "@/data/types";
import { LESSON_COUNT } from "@/data/types";
import { EXTRA_PRACTICE } from "@/data/extra-practice";
import { EXTRA_14_19 } from "@/data/extra-practice-14-19";
import { EXTRA_20_25 } from "@/data/extra-practice-20-25";
import { LISTENING } from "@/data/listening";
import { LISTENING_LATE } from "@/data/extra-listening";
import { lesson01 } from "./l01";
import { lesson02 } from "./l02";
import { lesson03 } from "./l03";
import { lesson04 } from "./l04";
import { lesson05 } from "./l05";
import { lesson06 } from "./l06";
import { lesson07 } from "./l07";
import { lesson08 } from "./l08";
import { lesson09 } from "./l09";
import { lesson10 } from "./l10";
import { lesson11 } from "./l11";
import { lesson12 } from "./l12";
import { lesson13 } from "./l13";
import { lesson14 } from "./l14";
import { lesson15 } from "./l15";
import { lesson16 } from "./l16";
import { lesson17 } from "./l17";
import { lesson18 } from "./l18";
import { lesson19 } from "./l19";
import { lesson20 } from "./l20";
import { lesson21 } from "./l21";
import { lesson22 } from "./l22";
import { lesson23 } from "./l23";
import { lesson24 } from "./l24";
import { lesson25 } from "./l25";

const RAW: Lesson[] = [
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
  lesson06,
  lesson07,
  lesson08,
  lesson09,
  lesson10,
  lesson11,
  lesson12,
  lesson13,
  lesson14,
  lesson15,
  lesson16,
  lesson17,
  lesson18,
  lesson19,
  lesson20,
  lesson21,
  lesson22,
  lesson23,
  lesson24,
  lesson25,
];

export const LESSONS: Lesson[] = RAW.map((lesson) => ({
  ...lesson,
  practice: [
    ...lesson.practice,
    ...(EXTRA_PRACTICE[lesson.id] ?? []),
    ...(EXTRA_14_19[lesson.id] ?? []),
    ...(EXTRA_20_25[lesson.id] ?? []),
  ],
  listening: [
    ...(lesson.listening ?? []),
    ...(LISTENING[lesson.id] ?? []),
    ...(LISTENING_LATE[lesson.id] ?? []),
  ],
}));

export function getLesson(id: number): Lesson | undefined {
  return LESSONS.find((lesson) => lesson.id === id);
}

export function isLessonId(value: number): value is LessonId {
  return Number.isInteger(value) && value >= 1 && value <= LESSON_COUNT;
}

export const TOTAL_VOCAB = LESSONS.reduce((sum, lesson) => sum + lesson.vocab.length, 0);
export const TOTAL_GRAMMAR = LESSONS.reduce((sum, lesson) => sum + lesson.grammar.length, 0);
export const TOTAL_PRACTICE = LESSONS.reduce((sum, lesson) => sum + lesson.practice.length, 0);
