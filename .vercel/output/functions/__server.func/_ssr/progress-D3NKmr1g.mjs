import { t as LESSONS } from "./lessons-DuTMC9xE.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-D3NKmr1g.js
function emptyLesson() {
	return {
		vocabLearned: [],
		grammarRead: [],
		practiceBest: 0,
		practiceLast: 0,
		readingDone: [],
		listeningDone: [],
		summaryChecked: []
	};
}
function lessonOf(state, lessonId) {
	const current = state.lessons[lessonId] ?? emptyLesson();
	return {
		...emptyLesson(),
		...current,
		listeningDone: current.listeningDone ?? []
	};
}
var useProgress = create()(persist((set, get) => ({
	lessons: {},
	vocab: {},
	exams: {},
	lastLessonId: null,
	markVocabLearned: (lessonId, vocabId, learned = true) => {
		const current = lessonOf(get(), lessonId);
		const next = new Set(current.vocabLearned);
		if (learned) next.add(vocabId);
		else next.delete(vocabId);
		set({
			lastLessonId: lessonId,
			lessons: {
				...get().lessons,
				[lessonId]: {
					...current,
					vocabLearned: [...next]
				}
			}
		});
	},
	recordVocabQuiz: (vocabId, correct) => {
		const prev = get().vocab[vocabId] ?? {
			seen: 0,
			correct: 0
		};
		set({ vocab: {
			...get().vocab,
			[vocabId]: {
				seen: prev.seen + 1,
				correct: prev.correct + (correct ? 1 : 0)
			}
		} });
	},
	markGrammarRead: (lessonId, grammarId) => {
		const current = lessonOf(get(), lessonId);
		const next = new Set(current.grammarRead);
		next.add(grammarId);
		set({
			lastLessonId: lessonId,
			lessons: {
				...get().lessons,
				[lessonId]: {
					...current,
					grammarRead: [...next]
				}
			}
		});
	},
	savePractice: (lessonId, score, total) => {
		const current = lessonOf(get(), lessonId);
		const pct = total === 0 ? 0 : Math.round(score / total * 100);
		set({
			lastLessonId: lessonId,
			lessons: {
				...get().lessons,
				[lessonId]: {
					...current,
					practiceLast: pct,
					practiceBest: Math.max(current.practiceBest, pct)
				}
			}
		});
	},
	markReadingDone: (lessonId, readingId) => {
		const current = lessonOf(get(), lessonId);
		const next = new Set(current.readingDone);
		next.add(readingId);
		set({
			lastLessonId: lessonId,
			lessons: {
				...get().lessons,
				[lessonId]: {
					...current,
					readingDone: [...next]
				}
			}
		});
	},
	markListeningDone: (lessonId, clipId) => {
		const current = lessonOf(get(), lessonId);
		const next = new Set(current.listeningDone);
		next.add(clipId);
		set({
			lastLessonId: lessonId,
			lessons: {
				...get().lessons,
				[lessonId]: {
					...current,
					listeningDone: [...next]
				}
			}
		});
	},
	toggleSummaryItem: (lessonId, item) => {
		const current = lessonOf(get(), lessonId);
		const next = new Set(current.summaryChecked);
		if (next.has(item)) next.delete(item);
		else next.add(item);
		set({
			lastLessonId: lessonId,
			lessons: {
				...get().lessons,
				[lessonId]: {
					...current,
					summaryChecked: [...next]
				}
			}
		});
	},
	saveExam: (examId, score, total) => {
		const pct = total === 0 ? 0 : Math.round(score / total * 100);
		const prev = get().exams[examId];
		set({ exams: {
			...get().exams,
			[examId]: {
				last: pct,
				best: Math.max(prev?.best ?? 0, pct),
				lastScore: score,
				lastTotal: total
			}
		} });
	},
	visit: (lessonId, section) => {
		const current = lessonOf(get(), lessonId);
		set({
			lastLessonId: lessonId,
			lessons: {
				...get().lessons,
				[lessonId]: {
					...current,
					lastVisited: section
				}
			}
		});
	},
	resetAll: () => set({
		lessons: {},
		vocab: {},
		exams: {},
		lastLessonId: null
	})
}), { name: "minna-classroom-progress" }));
function getLessonProgress(lessons, id) {
	const current = lessons[id] ?? emptyLesson();
	return {
		...emptyLesson(),
		...current,
		listeningDone: current.listeningDone ?? []
	};
}
function lessonCompletion(lessons, id) {
	const lesson = LESSONS.find((item) => item.id === id);
	if (!lesson) return 0;
	const p = getLessonProgress(lessons, id);
	const vocab = lesson.vocab.length ? p.vocabLearned.filter((vid) => lesson.vocab.some((v) => v.id === vid)).length / lesson.vocab.length : 0;
	const grammar = lesson.grammar.length ? p.grammarRead.length / lesson.grammar.length : 0;
	const practice = p.practiceBest / 100;
	const reading = lesson.readings.length ? p.readingDone.length / lesson.readings.length : 0;
	const listenCount = lesson.listening?.length ?? 0;
	const listening = listenCount ? p.listeningDone.length / listenCount : 1;
	const parts = [
		vocab,
		grammar,
		practice,
		reading,
		lesson.summary.checklist.length ? p.summaryChecked.length / lesson.summary.checklist.length : 0
	];
	if (listenCount) parts.push(listening);
	return Math.round(parts.reduce((a, b) => a + b, 0) / parts.length * 100);
}
function overallStats(lessons) {
	const percents = LESSONS.map((lesson) => lessonCompletion(lessons, lesson.id));
	return {
		avg: percents.length ? Math.round(percents.reduce((a, b) => a + b, 0) / percents.length) : 0,
		done: percents.filter((p) => p >= 80).length,
		vocabLearned: LESSONS.reduce((sum, lesson) => {
			return sum + getLessonProgress(lessons, lesson.id).vocabLearned.filter((id) => lesson.vocab.some((v) => v.id === id)).length;
		}, 0),
		percents
	};
}
//#endregion
export { useProgress as i, lessonCompletion as n, overallStats as r, getLessonProgress as t };
