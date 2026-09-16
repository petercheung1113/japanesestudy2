import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as BookMarked, c as MessageSquareText, g as ClipboardCheck, m as Headphones, o as PenLine, u as ListChecks, x as ArrowRight, y as BookOpenText } from "../_libs/lucide-react.mjs";
import { c as LESSON_UNITS, o as PageTitle } from "./router-Pgpj1Zw4.mjs";
import { t as MOCK_EXAMS } from "./exams-BqiSmEcd.mjs";
import { t as Progress } from "./progress-B9cfUA-s.mjs";
import { i as TOTAL_VOCAB, n as TOTAL_GRAMMAR, r as TOTAL_PRACTICE, t as LESSONS } from "./lessons-DuTMC9xE.mjs";
import { i as useProgress, n as lessonCompletion, r as overallStats } from "./progress-D3NKmr1g.mjs";
import { t as useHydrated } from "./use-hydrated-DmhOHHTH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ZcveXX44.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const hydrated = useHydrated();
	const stored = useProgress((s) => s.lessons);
	const lastLessonId = useProgress((s) => s.lastLessonId);
	const lessonsState = hydrated ? stored : {};
	const stats = overallStats(lessonsState);
	const continueId = (hydrated ? lastLessonId : null) ?? 1;
	const continueLesson = LESSONS.find((l) => l.id === continueId) ?? LESSONS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			kicker: "MINNA CLASSROOM",
			title: "初級日語，按課走完。",
			description: "對應《大家的日本語》初級第 1–25 課。每課含詞彙、文法、練習、聽解、文章與總結；並有 N5／N4 模擬試。進度存在這台裝置。"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "整體進度",
					value: `${stats.avg}%`,
					hint: `${stats.done} 課達 80%`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "詞彙標記",
					value: `${stats.vocabLearned}`,
					hint: `全教材 ${TOTAL_VOCAB} 詞`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "教材規模",
					value: `${LESSONS.length} 課`,
					hint: `${TOTAL_GRAMMAR} 文法 · ${TOTAL_PRACTICE} 題`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/start",
					className: "paper-card flex items-center justify-between gap-4 rounded-2xl p-5 transition-[transform,box-shadow] duration-200 hover:shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-wide text-primary",
							children: "はじめに"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-2xl text-ink",
							children: "五十音與招呼"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "假名、教室用語、數字 0–10、登場人物"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-11 shrink-0 place-items-center rounded-full bg-primary-soft text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/ref",
					className: "paper-card flex items-center justify-between gap-4 rounded-2xl p-5 transition-[transform,box-shadow] duration-200 hover:shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-wide text-primary",
							children: "補充資料"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-2xl text-ink",
							children: "時刻・日期・動詞"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "時分、月日、錢、星期、一／二／三類活用"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-11 shrink-0 place-items-center rounded-full bg-primary-soft text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookMarked, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/lesson/$id",
					params: { id: String(continueLesson.id) },
					className: "paper-card flex items-center justify-between gap-4 rounded-2xl p-5 transition-[transform,box-shadow] duration-200 hover:shadow-lift sm:col-span-2 lg:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-wide text-primary",
							children: "繼續學習"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-display text-2xl text-ink",
							children: [
								"第 ",
								continueLesson.id,
								" 課"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [
								continueLesson.titleZh,
								" · ",
								continueLesson.theme
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-11 shrink-0 place-items-center rounded-full bg-primary text-primary-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-5" })
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/exam",
				className: "paper-card flex items-center justify-between gap-4 rounded-2xl p-5 transition-[transform,box-shadow] duration-200 hover:shadow-lift",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-wide text-primary",
						children: "模擬試"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-2xl text-ink",
						children: "N5／N4 試卷"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [MOCK_EXAMS.length, " 回 · 語彙・文法・讀解・聽解"]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-11 shrink-0 place-items-center rounded-full bg-primary-soft text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, { className: "size-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/n4",
				className: "paper-card flex items-center justify-between gap-4 rounded-2xl p-5 transition-[transform,box-shadow] duration-200 hover:shadow-lift",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-wide text-primary",
						children: "N4 衝刺"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-2xl text-ink",
						children: "初級 1 之後"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "16 個句型 · 混合練習與聽解"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-11 shrink-0 place-items-center rounded-full bg-primary-soft text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-5" })
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-8 space-y-8",
			children: LESSON_UNITS.map((unit) => {
				const unitLessons = LESSONS.filter((lesson) => unit.lessons.includes(lesson.id));
				if (!unitLessons.length) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex flex-wrap items-end justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-wide text-primary",
						children: unit.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl text-ink",
						children: unit.title
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/unit/$id",
						params: { id: unit.id },
						className: "inline-flex h-10 items-center text-sm text-primary hover:underline",
						children: ["進入復習", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 size-3.5" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "grid gap-3 sm:grid-cols-2",
					children: unitLessons.map((lesson) => {
						const pct = lessonCompletion(lessonsState, lesson.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/lesson/$id",
							params: { id: String(lesson.id) },
							className: "paper-card flex h-full gap-4 rounded-xl p-4 transition-[transform,box-shadow] duration-200 hover:shadow-lift",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "seal size-12 shrink-0 text-sm text-primary",
								children: String(lesson.id).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-lg leading-tight text-ink",
										children: lesson.titleJp
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-0.5 text-sm text-muted",
										children: [
											lesson.titleZh,
											" · ",
											lesson.theme
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
											value: pct,
											className: "flex-1"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "w-10 text-right text-xs tabular-nums text-subtle",
											children: [pct, "%"]
										})]
									})
								]
							})]
						}) }, lesson.id);
					})
				})] }, unit.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
					icon: BookOpenText,
					title: "詞彙",
					text: "假名、漢字、羅馬字與朗讀"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
					icon: PenLine,
					title: "文法",
					text: "句型、對照表與帶讀例句"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
					icon: ListChecks,
					title: "練習",
					text: "選擇、是非、填空即時回饋"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
					icon: Headphones,
					title: "聽解",
					text: "播放對話後選答"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
					icon: MessageSquareText,
					title: "文章",
					text: "原創對話與理解題"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
					icon: ClipboardCheck,
					title: "模擬試",
					text: "N5／N4 四部份計時"
				})
			]
		})
	] });
}
function Stat({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "paper-card rounded-xl p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-subtle",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-3xl tabular-nums text-ink",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: hint
			})
		]
	});
}
function Feature({ icon: Icon, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface px-4 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm font-medium text-ink",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-xs leading-relaxed text-muted",
				children: text
			})
		]
	});
}
//#endregion
export { Home as component };
