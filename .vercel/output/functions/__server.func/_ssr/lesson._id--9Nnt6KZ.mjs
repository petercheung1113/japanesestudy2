import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { R as notFound, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { S as ArrowLeft, _ as ChevronDown, a as RotateCcw, d as LayoutGrid, l as List, n as Volume2, s as Pause, v as Check, x as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as SECTIONS, l as cn, r as Route$1, s as LESSON_SECTIONS } from "./router-B2yMlw1C.mjs";
import { t as Button } from "./button-Doq13_8c.mjs";
import { t as Progress } from "./progress-B9cfUA-s.mjs";
import { a as getLesson, o as isLessonId, t as LESSONS } from "./lessons-DuTMC9xE.mjs";
import { i as useProgress, n as lessonCompletion, t as getLessonProgress } from "./progress-D3NKmr1g.mjs";
import { n as speakSequence, r as stopSpeaking, t as speakJapanese } from "./speech-CizvjyRI.mjs";
import { t as useHydrated } from "./use-hydrated-DmhOHHTH.mjs";
import { n as SpeakButton, t as QuizPlayer } from "./quiz-player-DnTolUtO.mjs";
import { n as stripFurigana, t as Furigana } from "./furigana-Lg3L6J87.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lesson._id--9Nnt6KZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VocabPanel({ lesson }) {
	const [mode, setMode] = (0, import_react.useState)("list");
	const [query, setQuery] = (0, import_react.useState)("");
	const [cardIndex, setCardIndex] = (0, import_react.useState)(0);
	const [flipped, setFlipped] = (0, import_react.useState)(false);
	const lessons = useProgress((s) => s.lessons);
	const markVocabLearned = useProgress((s) => s.markVocabLearned);
	const progress = getLessonProgress(lessons, lesson.id);
	const learned = (0, import_react.useMemo)(() => new Set(progress.vocabLearned), [progress.vocabLearned]);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return lesson.vocab;
		return lesson.vocab.filter((item) => [
			item.kana,
			item.kanji,
			item.romaji,
			item.zh,
			item.pos
		].filter(Boolean).some((field) => String(field).toLowerCase().includes(q)));
	}, [lesson.vocab, query]);
	const card = filtered[cardIndex] ?? filtered[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						"已標記 ",
						learned.size,
						" / ",
						lesson.vocab.length,
						" 個詞"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex rounded-md border border-border bg-surface p-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: cn("inline-flex h-9 items-center gap-1 rounded-sm px-3 text-xs", mode === "list" ? "bg-primary-soft text-primary" : "text-muted"),
							onClick: () => setMode("list"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "size-3.5" }), "一覽"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: cn("inline-flex h-9 items-center gap-1 rounded-sm px-3 text-xs", mode === "cards" ? "bg-primary-soft text-primary" : "text-muted"),
							onClick: () => {
								setMode("cards");
								setFlipped(false);
								setCardIndex(0);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "size-3.5" }), "字卡"]
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "搜尋詞彙"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: query,
					onChange: (e) => {
						setQuery(e.target.value);
						setCardIndex(0);
						setFlipped(false);
					},
					placeholder: "搜尋假名、漢字、中文…",
					className: "h-11 w-full rounded-md border border-border bg-surface px-3 text-sm outline-none ring-primary/30 placeholder:text-subtle focus:ring-2"
				})]
			}),
			mode === "list" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface",
				children: filtered.map((item) => {
					const on = learned.has(item.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 px-3 py-3 sm:px-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakButton, {
								text: item.kana,
								label: `朗讀 ${item.kana}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-lg leading-tight text-ink",
									children: [item.kanji ?? item.kana, item.kanji ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 font-sans text-sm text-muted",
										children: item.kana
									}) : null]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-0.5 text-xs text-subtle",
									children: [
										item.romaji,
										" · ",
										item.pos,
										item.note ? ` · ${item.note}` : ""
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "shrink-0 text-sm text-ink",
								children: item.zh
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => markVocabLearned(lesson.id, item.id, !on),
								className: cn("inline-flex size-11 shrink-0 items-center justify-center rounded-md border transition-colors duration-150", on ? "border-success/30 bg-success-soft text-success" : "border-border text-subtle hover:bg-bg-deep"),
								"aria-label": on ? "取消已學會" : "標記已學會",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" })
							})
						]
					}, item.id);
				})
			}) : card ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setFlipped((v) => !v),
						className: "paper-card relative mx-auto flex min-h-64 w-full max-w-md flex-col items-center justify-center rounded-2xl p-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute left-4 top-4 text-xs text-subtle",
								children: [
									Math.min(cardIndex + 1, filtered.length),
									" / ",
									filtered.length,
									" · 點擊翻面"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakButton, {
								text: card.kana,
								className: "absolute right-3 top-3",
								label: `朗讀 ${card.kana}`
							}),
							flipped ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-3xl text-ink",
									children: card.zh
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted",
									children: card.pos
								}),
								card.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-subtle",
									children: card.note
								}) : null
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-4xl text-ink",
									children: card.kanji ?? card.kana
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-lg text-muted",
									children: card.kana
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs tracking-wide text-subtle",
									children: card.romaji
								})
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-md items-center justify-between gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => {
									setCardIndex((i) => Math.max(0, i - 1));
									setFlipped(false);
								},
								disabled: cardIndex === 0,
								children: "上一張"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								onClick: () => markVocabLearned(lesson.id, card.id, !learned.has(card.id)),
								children: learned.has(card.id) ? "取消標記" : "已學會"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => {
									setCardIndex((i) => Math.min(filtered.length - 1, i + 1));
									setFlipped(false);
								},
								disabled: cardIndex >= filtered.length - 1,
								children: "下一張"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => {
								setCardIndex(0);
								setFlipped(false);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), "從頭開始"]
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "沒有符合的詞彙。"
			})
		]
	});
}
function GrammarPanel({ lesson }) {
	const [openId, setOpenId] = (0, import_react.useState)(lesson.grammar[0]?.id ?? null);
	const lessons = useProgress((s) => s.lessons);
	const markGrammarRead = useProgress((s) => s.markGrammarRead);
	const progress = getLessonProgress(lessons, lesson.id);
	const read = new Set(progress.grammarRead);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: lesson.grammar.map((point, index) => {
			const open = openId === point.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "paper-card overflow-hidden rounded-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex w-full items-start gap-3 px-4 py-4 text-left",
					onClick: () => {
						setOpenId(open ? null : point.id);
						markGrammarRead(lesson.id, point.id);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "seal mt-0.5 size-8 shrink-0 text-xs text-primary",
							children: String(index + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-lg text-ink",
								children: point.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm text-muted",
								children: point.meaning
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("mt-1 size-4 shrink-0 text-subtle transition-transform duration-200", open && "rotate-180") })
					]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 border-t border-border px-4 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-md bg-primary-soft/60 px-3 py-2 font-display text-base text-primary",
							children: point.pattern
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-ink",
							children: point.explanation
						}),
						point.notes?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-1.5 text-sm text-muted",
							children: point.notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-primary/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: note })]
							}, note))
						}) : null,
						point.table ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConjugationTable, { table: point.table }) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-wide text-subtle",
								children: "例句"
							}), point.examples.map((example) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2 rounded-lg bg-bg-deep/60 px-3 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakButton, { text: stripFurigana(example.jp) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-base text-ink",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furigana, { text: example.jp })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted",
											children: example.zh
										}),
										example.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-subtle",
											children: example.note
										}) : null
									]
								})]
							}, example.jp))]
						}),
						read.has(point.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-success",
							children: "已列入本課進度"
						}) : null
					]
				}) : null]
			}, point.id);
		})
	});
}
function ConjugationTable({ table }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: [table.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "border-b border-border bg-bg-deep/50 px-3 py-2 text-xs tracking-wide text-subtle",
			children: table.caption
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[16rem] text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				className: "border-b border-border bg-surface",
				children: table.headers.map((header) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2 font-medium text-muted",
					children: header
				}, header))
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: table.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				className: "border-b border-border last:border-0",
				children: row.map((cell, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: cn("px-3 py-2", i === 0 ? "text-muted" : "font-medium text-ink"),
					children: cell
				}, `${cell}-${i}`))
			}, row.join("-"))) })]
		})]
	});
}
function PracticePanel({ lesson }) {
	const savePractice = useProgress((s) => s.savePractice);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizPlayer, {
		questions: lesson.practice,
		kicker: `第 ${lesson.id} 課練習`,
		onFinish: (score, total) => savePractice(lesson.id, score, total)
	}, lesson.id);
}
function ListenPanel({ lesson }) {
	const clips = lesson.listening ?? [];
	if (!clips.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "paper-card rounded-xl p-6 text-sm text-muted",
		children: "本課聽解正在準備中。可先用語音按鈕朗讀詞彙與文章。"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "先聽一至兩遍再作答。音訊由裝置語音合成朗讀，語速接近課堂。答完才顯示逐字稿。"
		}), clips.map((clip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipCard, {
			lessonId: lesson.id,
			clip
		}, clip.id))]
	});
}
function ClipCard({ lessonId, clip }) {
	const markListeningDone = useProgress((s) => s.markListeningDone);
	const [plays, setPlays] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)({});
	const [showScript, setShowScript] = (0, import_react.useState)(false);
	const answered = clip.questions.every((_, i) => picked[i]);
	const correct = clip.questions.filter((q, i) => picked[i] === q.answer).length;
	(0, import_react.useEffect)(() => {
		return () => stopSpeaking();
	}, []);
	(0, import_react.useEffect)(() => {
		if (answered) markListeningDone(lessonId, clip.id);
	}, [
		answered,
		clip.id,
		lessonId,
		markListeningDone
	]);
	function play() {
		const lines = clip.lines?.map((l) => l.speak) ?? (clip.speak ? [clip.speak] : []);
		setPlays((n) => n + 1);
		if (lines.length > 1) speakSequence(lines, .86, 480);
		else speakJapanese(lines[0] ?? "", .86);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "paper-card space-y-4 rounded-2xl p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-primary",
					children: clip.scene
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-xl text-ink",
					children: clip.title
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: play,
						className: "inline-flex h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm text-primary-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }), plays === 0 ? "播放" : "再聽一次"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						size: "icon-sm",
						variant: "ghost",
						onClick: () => stopSpeaking(),
						"aria-label": "停止",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-subtle",
				children: [
					"已播放 ",
					plays,
					" 次 · 建議至少聽兩遍再選"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-4",
				children: clip.questions.map((q, qi) => {
					const choice = picked[qi];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-border bg-bg/50 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-ink",
								children: [
									qi + 1,
									". ",
									q.q
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 grid gap-2",
								children: q.options.map((option) => {
									const chosen = choice === option;
									const revealed = Boolean(choice);
									const isAns = revealed && option === q.answer;
									const isWrong = revealed && chosen && option !== q.answer;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										disabled: Boolean(choice),
										onClick: () => setPicked((prev) => ({
											...prev,
											[qi]: option
										})),
										className: cn("min-h-11 rounded-lg border px-3 py-2 text-left text-sm", !revealed && "border-border bg-surface hover:bg-primary-soft/50", isAns && "border-success/40 bg-success-soft text-success", isWrong && "border-danger/40 bg-danger-soft text-danger", revealed && !isAns && !isWrong && "border-border text-muted"),
										children: option
									}, option);
								})
							}),
							choice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted",
								children: q.explanation
							}) : null
						]
					}, q.q);
				})
			}),
			answered ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 rounded-xl bg-primary-soft/70 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-ink",
					children: [
						"本題組 ",
						correct,
						" / ",
						clip.questions.length
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					onClick: () => setShowScript((v) => !v),
					children: showScript ? "隱藏逐字稿" : "看逐字稿"
				})]
			}) : null,
			showScript ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-bg-deep/70 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-subtle",
						children: "TRANSCRIPT"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakButton, { text: clip.lines?.map((l) => l.speak).join("。") || clip.speak })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "whitespace-pre-wrap font-display text-base leading-relaxed text-ink",
					children: clip.transcript
				})]
			}) : null
		]
	});
}
function ReadingPanel({ lesson }) {
	const [showZh, setShowZh] = (0, import_react.useState)(true);
	const [showReading, setShowReading] = (0, import_react.useState)(true);
	const [answers, setAnswers] = (0, import_react.useState)({});
	const lessons = useProgress((s) => s.lessons);
	const markReadingDone = useProgress((s) => s.markReadingDone);
	const progress = getLessonProgress(lessons, lesson.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: showReading ? "secondary" : "outline",
				size: "sm",
				onClick: () => setShowReading((v) => !v),
				children: showReading ? "隱藏假名" : "顯示假名"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: showZh ? "secondary" : "outline",
				size: "sm",
				onClick: () => setShowZh((v) => !v),
				children: showZh ? "隱藏譯文" : "顯示譯文"
			})]
		}), lesson.readings.map((passage) => {
			const done = progress.readingDone.includes(passage.id);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-ink",
						children: passage.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: passage.scene
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-3",
						children: passage.lines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: cn("paper-card rounded-xl p-4", line.role === "a" && "sm:mr-8", line.role === "b" && "sm:ml-8", line.role === "c" && "sm:ml-4"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium tracking-wide text-primary",
										children: line.speaker
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakButton, {
										text: line.speak,
										label: `朗讀 ${line.speaker}`
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furigana, {
										text: line.jp,
										showReading
									})
								}),
								showZh ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: line.zh
								}) : null
							]
						}, `${passage.id}-${i}`))
					}),
					passage.notes.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-primary-soft/50 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-primary",
							children: "語句筆記"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-1.5 text-sm text-ink",
							children: passage.notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: note.term
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [" — ", note.note]
							})] }, note.term))
						})]
					}) : null,
					passage.comprehension.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg text-ink",
							children: "內容理解"
						}), passage.comprehension.map((item, qi) => {
							const key = `${passage.id}-${qi}`;
							const chosen = answers[key];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "paper-card rounded-xl p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-ink",
									children: item.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 grid gap-2",
									children: item.options.map((option) => {
										const picked = chosen === option;
										const correct = chosen && option === item.answer;
										const wrong = picked && option !== item.answer;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												setAnswers((prev) => ({
													...prev,
													[key]: option
												}));
												if (option === item.answer) markReadingDone(lesson.id, passage.id);
											},
											className: cn("min-h-11 rounded-md border px-3 py-2 text-left text-sm", !chosen && "border-border bg-surface hover:bg-bg-deep", correct && "border-success/40 bg-success-soft text-success", wrong && "border-danger/40 bg-danger-soft text-danger", chosen && !correct && !wrong && "border-border text-muted"),
											children: option
										}, option);
									})
								})]
							}, key);
						})]
					}) : null,
					done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-success",
						children: "本篇已計入進度"
					}) : null
				]
			}, passage.id);
		})]
	});
}
function SummaryPanel({ lesson }) {
	const lessons = useProgress((s) => s.lessons);
	const toggleSummaryItem = useProgress((s) => s.toggleSummaryItem);
	const progress = getLessonProgress(lessons, lesson.id);
	const checked = new Set(progress.summaryChecked);
	const { summary } = lesson;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "paper-card rounded-xl p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl text-ink",
					children: "學習目標"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm text-ink",
					children: summary.goals.map((goal) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-primary" }), goal]
					}, goal))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "paper-card overflow-hidden rounded-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-border px-5 py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl text-ink",
						children: "句型一覽"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border",
					children: summary.patterns.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1 px-5 py-3 sm:grid-cols-[1.2fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-base text-primary",
							children: row.pattern
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: row.meaning
						})]
					}, row.pattern))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "paper-card overflow-hidden rounded-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-border px-5 py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl text-ink",
						children: "助詞"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border",
					children: summary.particles.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[4rem_1fr] items-start gap-3 px-5 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg text-ink",
							children: row.particle
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: row.usage
						})]
					}, row.particle))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-warn/20 bg-warn-soft px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl text-warn",
					children: "易錯點"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm text-ink",
					children: summary.pitfalls.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "paper-card rounded-xl p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl text-ink",
						children: "本課檢查表"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "勾選你已經能做到的項目，進度會存在這台裝置。"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: summary.checklist.map((item) => {
							const on = checked.has(item);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => toggleSummaryItem(lesson.id, item),
								className: cn("flex min-h-12 w-full items-center gap-3 rounded-lg border px-3 text-left text-sm", on ? "border-success/30 bg-success-soft text-success" : "border-border bg-surface text-ink hover:bg-bg-deep"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid size-5 place-items-center rounded-sm border", on ? "border-success bg-success text-primary-fg" : "border-border-strong"),
									children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }) : null
								}), item]
							}) }, item);
						})
					})
				]
			})
		]
	});
}
function parseSection(value) {
	return SECTIONS.includes(value) ? value : "vocab";
}
function LessonPage() {
	const { id } = Route$1.useParams();
	const { s } = Route$1.useSearch();
	const section = parseSection(s);
	const numericId = Number(id);
	const lesson = isLessonId(numericId) ? getLesson(numericId) : void 0;
	const visit = useProgress((st) => st.visit);
	const lessons = useProgress((st) => st.lessons);
	const hydrated = useHydrated();
	(0, import_react.useEffect)(() => {
		if (lesson) visit(lesson.id, section);
	}, [
		lesson,
		section,
		visit
	]);
	if (!lesson) throw notFound();
	const pct = lessonCompletion(hydrated ? lessons : {}, lesson.id);
	const prevId = lesson.id > 1 ? lesson.id - 1 : null;
	const nextId = lesson.id < LESSONS.length ? lesson.id + 1 : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/",
			className: "mb-4 inline-flex h-10 items-center gap-1.5 text-sm text-muted hover:text-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "全部課程"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-medium tracking-wide text-primary",
					children: [
						"第 ",
						lesson.id,
						" 課"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-3xl text-ink sm:text-4xl",
					children: lesson.titleJp
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted",
					children: [
						lesson.titleZh,
						" · ",
						lesson.theme
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs text-subtle",
					children: ["會話題材：", lesson.conversation]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full sm:w-40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex justify-between text-xs text-subtle",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "完課" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums",
						children: [pct, "%"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: pct })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-5 max-w-2xl text-sm leading-relaxed text-muted",
			children: lesson.intro
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-w-max gap-1 rounded-lg border border-border bg-surface p-1 sm:grid sm:min-w-full sm:grid-cols-6",
				children: LESSON_SECTIONS.map((item) => {
					const active = section === item.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/lesson/$id",
						params: { id },
						search: { s: item.id },
						className: cn("flex min-h-11 min-w-16 flex-col items-center justify-center rounded-md px-2 text-center sm:px-3", active ? "bg-primary text-primary-fg" : "text-muted hover:bg-bg-deep hover:text-ink"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: item.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("hidden text-xs sm:block", active ? "text-primary-fg/80" : "text-subtle"),
							children: item.hint
						})]
					}, item.id);
				})
			})
		}),
		section === "vocab" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VocabPanel, { lesson }) : null,
		section === "grammar" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrammarPanel, { lesson }) : null,
		section === "practice" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PracticePanel, { lesson }, lesson.id) : null,
		section === "listen" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListenPanel, { lesson }, lesson.id) : null,
		section === "reading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingPanel, { lesson }) : null,
		section === "summary" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryPanel, { lesson }) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 flex items-center justify-between gap-3 border-t border-border pt-5",
			children: [prevId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/lesson/$id",
				params: { id: String(prevId) },
				className: "inline-flex h-11 items-center gap-1 text-sm text-muted hover:text-ink",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }),
					"第 ",
					prevId,
					" 課"
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), nextId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/lesson/$id",
				params: { id: String(nextId) },
				className: "inline-flex h-11 items-center gap-1 text-sm text-primary",
				children: [
					"第 ",
					nextId,
					" 課",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/exam",
				className: "text-sm text-primary",
				children: "初級 1 完成 · 去做模擬試"
			})]
		})
	] });
}
//#endregion
export { LessonPage as component };
