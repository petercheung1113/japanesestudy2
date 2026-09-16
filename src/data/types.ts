export const LESSON_COUNT = 25;

export type LessonId = number;

export type Pos =
  | "代名詞"
  | "名詞"
  | "動詞"
  | "い形容詞"
  | "な形容詞"
  | "副詞"
  | "助詞"
  | "連體詞"
  | "感嘆"
  | "疑問"
  | "數量"
  | "時間"
  | "場所"
  | "接續"
  | "接尾"
  | "慣用";

export interface VocabItem {
  id: string;
  kana: string;
  kanji?: string;
  romaji: string;
  zh: string;
  pos: Pos;
  note?: string;
}

export interface GrammarExample {
  /** Furigana markup: 私[わたし]は 学生[がくせい]です */
  jp: string;
  zh: string;
  note?: string;
}

export interface GrammarTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface GrammarPoint {
  id: string;
  title: string;
  pattern: string;
  meaning: string;
  explanation: string;
  notes?: string[];
  examples: GrammarExample[];
  table?: GrammarTable;
}

export type QuestionType = "mcq" | "tf" | "fill" | "listen";

export interface PracticeQuestion {
  id: string;
  type: QuestionType;
  prompt: string;
  promptJp?: string;
  /** Plain Japanese spoken via TTS (listening items) */
  audio?: string;
  options?: string[];
  answer: string;
  explanation: string;
}

export interface DialogueLine {
  speaker: string;
  role?: "a" | "b" | "c";
  /** Furigana markup */
  jp: string;
  /** Plain Japanese for TTS */
  speak: string;
  zh: string;
}

export interface ReadingPassage {
  id: string;
  title: string;
  scene: string;
  lines: DialogueLine[];
  notes: { term: string; note: string }[];
  comprehension: {
    q: string;
    options: string[];
    answer: string;
  }[];
}

export interface ListeningClip {
  id: string;
  title: string;
  scene: string;
  /** Single utterance, or leave empty if using lines */
  speak: string;
  lines?: { speaker: string; speak: string }[];
  /** Shown after the learner answers */
  transcript: string;
  questions: {
    q: string;
    options: string[];
    answer: string;
    explanation: string;
  }[];
}

export interface LessonSummary {
  goals: string[];
  patterns: { pattern: string; meaning: string }[];
  particles: { particle: string; usage: string }[];
  pitfalls: string[];
  checklist: string[];
}

export interface Lesson {
  id: LessonId;
  titleJp: string;
  titleZh: string;
  theme: string;
  /** Textbook conversation title, used as a study cue — not a transcript. */
  conversation: string;
  intro: string;
  vocab: VocabItem[];
  grammar: GrammarPoint[];
  practice: PracticeQuestion[];
  readings: ReadingPassage[];
  listening?: ListeningClip[];
  summary: LessonSummary;
}

export const LESSON_SECTIONS = [
  { id: "vocab", label: "詞彙", hint: "單字與讀音" },
  { id: "grammar", label: "文法", hint: "句型解說" },
  { id: "practice", label: "練習", hint: "即時測驗" },
  { id: "listen", label: "聽解", hint: "聽音選答" },
  { id: "reading", label: "文章", hint: "對話與閱讀" },
  { id: "summary", label: "總結", hint: "本課重點" },
] as const;

export type SectionId = (typeof LESSON_SECTIONS)[number]["id"];

export const LESSON_UNITS: {
  id: string;
  label: string;
  title: string;
  lessons: number[];
  partial?: boolean;
}[] = [
  { id: "A", label: "復習 A", lessons: [1, 2, 3], title: "判斷・指示・場所" },
  { id: "B", label: "復習 B", lessons: [4, 5, 6, 7], title: "時間・移動・動作・授受" },
  { id: "C", label: "復習 C", lessons: [8, 9, 10, 11, 12], title: "形容・好惡・存在・數量" },
  { id: "D", label: "復習 D", lessons: [13, 14, 15, 16], title: "希望・て形・許可・順序" },
  { id: "E", label: "復習 E", lessons: [17, 18, 19], title: "禁止・可能・經驗" },
  { id: "F", label: "復習 F", lessons: [20, 21, 22], title: "普通形・引用・修飾" },
  { id: "G", label: "復習 G", lessons: [23, 24, 25], title: "時・授受・條件" },
];

export type ExamLevel = "N5" | "N4";
export type ExamSectionId = "vocab" | "grammar" | "reading" | "listening";

export interface ExamQuestion {
  id: string;
  section: ExamSectionId;
  part: string;
  type: "mcq" | "listen" | "fill";
  prompt: string;
  promptJp?: string;
  audio?: string;
  passage?: string;
  options: string[];
  answer: string;
  explanation: string;
  /** Shown once at the start of a もんだい part */
  instruction?: string;
}

export interface ExamSection {
  id: ExamSectionId;
  title: string;
  hint: string;
  timeMinutes: number;
  questions: ExamQuestion[];
}

export interface MockExam {
  id: string;
  level: ExamLevel;
  title: string;
  subtitle: string;
  timeMinutes: number;
  /** practice = shortened training; official = real N4 問題 types, 85 Q, 110 min */
  format?: "practice" | "official";
  sections: ExamSection[];
}
