import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as RotateCcw, t as X, v as Check } from "../_libs/lucide-react.mjs";
import { l as cn, o as PageTitle } from "./router-Pgpj1Zw4.mjs";
import { t as Button } from "./button-Doq13_8c.mjs";
import { t as LESSONS } from "./lessons-DuTMC9xE.mjs";
import { i as useProgress } from "./progress-D3NKmr1g.mjs";
import { t as useHydrated } from "./use-hydrated-DmhOHHTH.mjs";
import { n as SpeakButton, t as QuizPlayer } from "./quiz-player-DnTolUtO.mjs";
import { n as N4_PRACTICE } from "./n4-grammar-BhuAlK-z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/review-DI8LnyvB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DRILL_RANGES = [
	{
		id: "all",
		label: "全教材",
		hint: "第 1–25 課＋N4"
	},
	{
		id: "early",
		label: "第 1–13 課",
		hint: "N5 前半"
	},
	{
		id: "late",
		label: "第 14–25 課",
		hint: "て形到條件句"
	},
	{
		id: "n4",
		label: "N4 衝刺",
		hint: "可能・受身・使役"
	}
];
function shuffle$1(items) {
	const copy = [...items];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
}
function lessonsFor(range) {
	if (range === "early") return LESSONS.filter((lesson) => lesson.id <= 13);
	if (range === "late" || range === "n4") return LESSONS.filter((lesson) => lesson.id >= 14);
	return LESSONS;
}
function clipAudio(clip) {
	if (clip.speak.trim()) return clip.speak;
	return (clip.lines ?? []).map((line) => line.speak).join("。");
}
function grammarPool(range) {
	if (range === "n4") return N4_PRACTICE.filter((q) => q.type !== "listen");
	const fromLessons = lessonsFor(range).flatMap((lesson) => lesson.practice.filter((q) => q.type !== "listen"));
	const n4 = range === "early" ? [] : N4_PRACTICE.filter((q) => q.type !== "listen");
	return [...fromLessons, ...n4];
}
function listeningPool(range) {
	const lessons = lessonsFor(range);
	const fromPractice = lessons.flatMap((lesson) => lesson.practice.filter((q) => q.type === "listen"));
	const fromClips = lessons.flatMap((lesson) => (lesson.listening ?? []).flatMap((clip) => clip.questions.map((q, index) => ({
		id: `${clip.id}-dq${index}`,
		type: "listen",
		prompt: q.q,
		audio: clipAudio(clip),
		options: q.options,
		answer: q.answer,
		explanation: q.explanation
	}))));
	const n4 = range === "early" ? [] : N4_PRACTICE.filter((q) => q.type === "listen");
	return [
		...fromPractice,
		...fromClips,
		...n4
	];
}
function pickDrill(pool, size = 20) {
	return shuffle$1(pool).slice(0, Math.min(size, pool.length));
}
function shuffle(items) {
	const copy = [...items];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
}
function labelOf(item, mode) {
	return mode === "jp-zh" ? item.zh : item.kanji ?? item.kana;
}
function optionsFor(item, mode, pool) {
	const answer = labelOf(item, mode);
	return shuffle([answer, ...shuffle(pool.filter((v) => v.id !== item.id).map((v) => labelOf(v, mode))).filter((value, i, arr) => value !== answer && arr.indexOf(value) === i).slice(0, 3)]);
}
function ReviewPage() {
	const [tab, setTab] = (0, import_react.useState)("vocab");
	const [range, setRange] = (0, import_react.useState)("all");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			kicker: "REVIEW",
			title: "複習與聽解",
			description: "詞彙閃卡、文法混合 20 題、聽解抽測。範圍可切第 1–13 課、第 14–25 課或 N4 衝刺。"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-4 flex gap-1 rounded-lg border border-border bg-surface p-1",
			children: [
				["vocab", "詞彙"],
				["grammar", "文法 20 題"],
				["listen", "聽解 15 題"]
			].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setTab(id),
				className: cn("h-11 flex-1 rounded-md text-sm", tab === id ? "bg-primary text-primary-fg" : "text-muted"),
				children: label
			}, id))
		}),
		tab !== "vocab" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-5 flex flex-wrap gap-2",
			children: DRILL_RANGES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: range === item.id ? "default" : "outline",
				onClick: () => setRange(item.id),
				children: item.label
			}, item.id))
		}) : null,
		tab === "vocab" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VocabDrill, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MixedDrill, {
			tab,
			range
		})
	] });
}
function MixedDrill({ tab, range }) {
	const hydrated = useHydrated();
	const [seed, setSeed] = (0, import_react.useState)(0);
	const poolSize = tab === "grammar" ? grammarPool(range).length : listeningPool(range).length;
	const questions = (0, import_react.useMemo)(() => {
		if (!hydrated) return [];
		return pickDrill(tab === "grammar" ? grammarPool(range) : listeningPool(range), tab === "grammar" ? 20 : 15);
	}, [
		tab,
		range,
		seed,
		hydrated
	]);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "準備題目中……"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-4 text-sm text-muted",
			children: [
				"從 ",
				poolSize,
				" 題裡抽出一組。聽解請開聲音，用裝置日語語音朗讀。"
			]
		}),
		questions.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizPlayer, {
			questions,
			kicker: tab === "grammar" ? "混合文法" : "混合聽解"
		}, `${tab}-${range}-${seed}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "這個範圍還沒有題目。"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			className: "mt-4",
			variant: "outline",
			onClick: () => setSeed((n) => n + 1),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "換一組題"]
		})
	] });
}
function VocabDrill() {
	const recordVocabQuiz = useProgress((s) => s.recordVocabQuiz);
	const stats = useProgress((s) => s.vocab);
	const hydrated = useHydrated();
	const pool = (0, import_react.useMemo)(() => LESSONS.flatMap((lesson) => lesson.vocab), []);
	const [mode, setMode] = (0, import_react.useState)("jp-zh");
	const [queue, setQueue] = (0, import_react.useState)(pool);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)({
		ok: 0,
		total: 0
	});
	const [deal, setDeal] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		setQueue(shuffle(pool));
		setIndex(0);
		setPicked(null);
		setScore({
			ok: 0,
			total: 0
		});
		setDeal((n) => n + 1);
	}, [hydrated, pool]);
	const current = queue[index];
	const choices = (0, import_react.useMemo)(() => {
		if (!current) return [];
		return optionsFor(current, mode, pool);
	}, [
		current,
		mode,
		pool,
		deal
	]);
	const answer = current ? labelOf(current, mode) : "";
	const prompt = current ? mode === "jp-zh" ? current.kanji ?? current.kana : current.zh : "";
	function restart() {
		setQueue(shuffle(pool));
		setIndex(0);
		setPicked(null);
		setScore({
			ok: 0,
			total: 0
		});
		setDeal((n) => n + 1);
	}
	function changeMode(next) {
		setMode(next);
		setPicked(null);
		setDeal((n) => n + 1);
	}
	function choose(option) {
		if (!current || picked) return;
		const ok = option === labelOf(current, mode);
		setPicked(option);
		setScore((s) => ({
			ok: s.ok + (ok ? 1 : 0),
			total: s.total + 1
		}));
		recordVocabQuiz(current.id, ok);
	}
	function next() {
		setPicked(null);
		setIndex((i) => i + 1 >= queue.length ? 0 : i + 1);
		setDeal((n) => n + 1);
	}
	const mastery = current ? stats[current.id] : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex flex-wrap items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: mode === "jp-zh" ? "default" : "outline",
					onClick: () => changeMode("jp-zh"),
					children: "日 → 中"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: mode === "zh-jp" ? "default" : "outline",
					onClick: () => changeMode("zh-jp"),
					children: "中 → 日"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: restart,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), "重洗"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ml-auto text-sm tabular-nums text-muted",
					children: [
						score.ok,
						" / ",
						score.total
					]
				})
			]
		}),
		current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "paper-card relative rounded-2xl p-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakButton, {
							text: current.kana,
							className: "absolute right-3 top-3"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-subtle",
							children: [
								"第 ",
								index + 1,
								" / ",
								queue.length,
								" 詞",
								mastery ? ` · 答對 ${mastery.correct}/${mastery.seen}` : ""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-4xl text-ink",
							children: prompt
						}),
						mode === "jp-zh" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted",
							children: [
								current.kana,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-2 text-subtle",
									children: "·"
								}),
								current.romaji
							]
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2 sm:grid-cols-2",
					children: choices.map((option) => {
						const isAns = picked !== null && option === answer;
						const isWrong = picked === option && option !== answer;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: picked !== null,
							onClick: () => choose(option),
							className: cn("min-h-12 rounded-lg border px-4 py-3 text-left text-sm", picked === null && "border-border bg-surface hover:bg-primary-soft/50", isAns && "border-success/40 bg-success-soft text-success", isWrong && "border-danger/40 bg-danger-soft text-danger", picked && !isAns && !isWrong && "border-border text-muted"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [isAns ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : isWrong ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : null, option]
							})
						}, option);
					})
				}),
				picked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: next,
					className: "w-full sm:w-auto",
					children: "下一詞"
				}) : null
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "沒有可複習的詞彙。"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-8 text-sm text-muted",
			children: [
				"想按課練習？回到",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mx-1 text-primary underline-offset-2 hover:underline",
					children: "課程路徑"
				}),
				"選一課。文法與聽解也可切到上面的分頁抽測。"
			]
		})
	] });
}
//#endregion
export { ReviewPage as component };
