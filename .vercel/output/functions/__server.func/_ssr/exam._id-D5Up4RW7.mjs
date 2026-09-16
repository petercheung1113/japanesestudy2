import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { R as notFound, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { m as Headphones, n as Volume2, t as X, v as Check, x as ArrowLeft } from "../_libs/lucide-react.mjs";
import { a as Route$2, l as cn } from "./router-CfDwE0gK.mjs";
import { n as getExam } from "./exams-BqiSmEcd.mjs";
import { i as stopSpeaking, n as speakJapanese, t as Button } from "./speech-DvHPoukb.mjs";
import { t as Progress } from "./progress-B9cfUA-s.mjs";
import { i as useProgress } from "./progress-D3NKmr1g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/exam._id-D5Up4RW7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ExamPage() {
	const { id } = Route$2.useParams();
	const found = getExam(id);
	if (!found) throw notFound();
	const exam = found;
	const saveExam = useProgress((s) => s.saveExam);
	const [phase, setPhase] = (0, import_react.useState)("intro");
	const [sectionId, setSectionId] = (0, import_react.useState)(exam.sections[0]?.id ?? "vocab");
	const [answers, setAnswers] = (0, import_react.useState)({});
	const [fills, setFills] = (0, import_react.useState)({});
	const [plays, setPlays] = (0, import_react.useState)({});
	const [seconds, setSeconds] = (0, import_react.useState)(exam.timeMinutes * 60);
	const [reviewWrong, setReviewWrong] = (0, import_react.useState)(false);
	const allQuestions = (0, import_react.useMemo)(() => exam.sections.flatMap((s) => s.questions), [exam.sections]);
	const section = exam.sections.find((s) => s.id === sectionId) ?? exam.sections[0];
	const answeredCount = allQuestions.filter((q) => answers[q.id]).length;
	(0, import_react.useEffect)(() => {
		if (phase !== "live") return;
		const t = window.setInterval(() => {
			setSeconds((s) => {
				if (s <= 1) {
					window.clearInterval(t);
					return 0;
				}
				return s - 1;
			});
		}, 1e3);
		return () => window.clearInterval(t);
	}, [phase]);
	(0, import_react.useEffect)(() => {
		if (phase === "live" && seconds === 0) finish();
	}, [seconds, phase]);
	(0, import_react.useEffect)(() => () => stopSpeaking(), []);
	function finish() {
		stopSpeaking();
		const score = allQuestions.filter((q) => answers[q.id] === q.answer).length;
		saveExam(exam.id, score, allQuestions.length);
		setPhase("result");
	}
	function choose(q, value) {
		setAnswers((prev) => ({
			...prev,
			[q.id]: value
		}));
	}
	if (phase === "intro") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/exam",
			className: "mb-4 inline-flex h-10 items-center gap-1.5 text-sm text-muted hover:text-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "全部試卷"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-xs tracking-wide text-primary",
			children: [exam.level, " MOCK"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-1 font-display text-3xl text-ink sm:text-4xl",
			children: exam.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
			children: exam.subtitle
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 grid gap-2 sm:grid-cols-2",
			children: exam.sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl border border-border bg-surface px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium text-ink",
					children: s.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted",
					children: [
						s.questions.length,
						" 題 · 建議 ",
						s.timeMinutes,
						" 分 · ",
						s.hint
					]
				})]
			}, s.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 rounded-xl bg-warn-soft px-4 py-3 text-sm text-warn",
			children: [
				"計時 ",
				exam.timeMinutes,
				" 分鐘，可提早交卷。聽解每題最多播放兩次。作答紀錄存在這台裝置。"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-6",
			onClick: () => {
				setPhase("live");
				setSeconds(exam.timeMinutes * 60);
			},
			children: "開始作答"
		})
	] });
	const score = allQuestions.filter((q) => answers[q.id] === q.answer).length;
	const percent = Math.round(score / allQuestions.length * 100);
	if (phase === "result") {
		const reviewList = reviewWrong ? allQuestions.filter((q) => answers[q.id] !== q.answer) : allQuestions;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "paper-card rounded-2xl p-6 text-center sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-subtle",
					children: exam.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-5xl tabular-nums text-ink",
					children: percent
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted",
					children: [
						score,
						" / ",
						allQuestions.length,
						" · JLPT 約 60% 起算合格參考線"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-2 sm:grid-cols-4",
					children: exam.sections.map((s) => {
						const ok = s.questions.filter((q) => answers[q.id] === q.answer).length;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-bg-deep/80 px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-subtle",
								children: s.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-xl tabular-nums text-ink",
								children: [
									ok,
									"/",
									s.questions.length
								]
							})]
						}, s.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: reviewWrong ? "outline" : "default",
							onClick: () => setReviewWrong(false),
							children: "全部檢討"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: reviewWrong ? "default" : "outline",
							onClick: () => setReviewWrong(true),
							children: "只看錯題"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => {
								setPhase("intro");
								setAnswers({});
								setFills({});
								setPlays({});
								setReviewWrong(false);
							},
							children: "再考一次"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-6 space-y-4",
			children: reviewList.map((q, i) => {
				const given = answers[q.id];
				const ok = given === q.answer;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "paper-card rounded-xl p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-2",
						children: [ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mt-0.5 size-4 shrink-0 text-danger" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-subtle",
									children: [
										q.part,
										" · ",
										i + 1
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-ink",
									children: q.prompt
								}),
								q.passage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 whitespace-pre-wrap rounded-lg bg-bg-deep/70 px-3 py-2 font-display text-sm text-ink",
									children: q.passage
								}) : null,
								q.audio ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "mt-2 inline-flex h-9 items-center gap-1.5 text-sm text-primary",
									onClick: () => speakJapanese(q.audio ?? "", .86),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }), "再聽"]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted",
										children: "你的答案："
									}), given ?? "（未作答）"]
								}),
								!ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-success",
									children: ["正確：", q.answer]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: q.explanation
								})
							]
						})]
					})
				}, q.id);
			})
		})] });
	}
	const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
	const ss = String(seconds % 60).padStart(2, "0");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/exam",
				className: "inline-flex h-10 items-center gap-1.5 text-sm text-muted hover:text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "離開"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: cn("tabular-nums text-sm", seconds < 120 ? "text-danger" : "text-ink"),
					children: [
						mm,
						":",
						ss
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					onClick: finish,
					children: "交卷"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1 flex justify-between text-xs text-subtle",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"已答 ",
					answeredCount,
					" / ",
					allQuestions.length
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: exam.title })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: Math.round(answeredCount / allQuestions.length * 100) })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-5 flex gap-1 overflow-x-auto rounded-lg border border-border bg-surface p-1",
			children: exam.sections.map((s) => {
				const done = s.questions.filter((q) => answers[q.id]).length;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSectionId(s.id),
					className: cn("min-h-11 shrink-0 rounded-md px-3 text-sm", sectionId === s.id ? "bg-primary text-primary-fg" : "text-muted hover:bg-bg-deep hover:text-ink"),
					children: [
						s.title,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs opacity-70",
							children: [
								done,
								"/",
								s.questions.length
							]
						})
					]
				}, s.id);
			})
		}),
		section ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: section.hint
			}), section.questions.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionCard, {
				index: i,
				question: q,
				value: answers[q.id],
				fill: fills[q.id] ?? "",
				plays: plays[q.id] ?? 0,
				onFill: (v) => setFills((prev) => ({
					...prev,
					[q.id]: v
				})),
				onChoose: (v) => choose(q, v),
				onPlay: () => {
					const n = plays[q.id] ?? 0;
					if (n >= 2 || !q.audio) return;
					setPlays((prev) => ({
						...prev,
						[q.id]: n + 1
					}));
					speakJapanese(q.audio, .86);
				}
			}, q.id))]
		}) : null
	] });
}
function QuestionCard({ index, question, value, fill, plays, onFill, onChoose, onPlay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "paper-card rounded-xl p-4 sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-subtle",
				children: [
					question.part,
					" · ",
					index + 1
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-ink",
				children: question.prompt
			}),
			question.promptJp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-lg text-primary",
				children: question.promptJp
			}) : null,
			question.passage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 whitespace-pre-wrap rounded-lg bg-bg-deep/70 px-3 py-3 font-display text-base leading-relaxed text-ink",
				children: question.passage
			}) : null,
			question.type === "listen" && question.audio ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onPlay,
				disabled: plays >= 2,
				className: "mt-3 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm text-primary-fg disabled:opacity-50",
				children: [question.section === "listening" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headphones, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }), plays >= 2 ? "已播兩次" : plays === 0 ? "播放" : "再播一次（最後）"]
			}) : null,
			question.type === "fill" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-3 flex flex-col gap-2 sm:flex-row",
				onSubmit: (e) => {
					e.preventDefault();
					if (fill.trim()) onChoose(fill);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: fill,
					onChange: (e) => onFill(e.target.value),
					className: "h-11 flex-1 rounded-md border border-border bg-bg px-3 text-sm outline-none ring-primary/30 focus:ring-2",
					placeholder: "填入答案"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "sm",
					disabled: !fill.trim(),
					children: "記入"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid gap-2",
				children: question.options.map((option) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onChoose(option),
						className: cn("min-h-11 rounded-lg border px-3 py-2 text-left text-sm", value === option ? "border-primary bg-primary-soft text-primary" : "border-border bg-surface hover:bg-primary-soft/40"),
						children: option
					}, option);
				})
			})
		]
	});
}
//#endregion
export { ExamPage as component };
