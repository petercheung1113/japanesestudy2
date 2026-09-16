import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as SpellCheck, m as Headphones, o as PenLine, x as ArrowRight, y as BookOpenText } from "../_libs/lucide-react.mjs";
import { o as PageTitle } from "./router-Pgpj1Zw4.mjs";
import { t as MOCK_EXAMS } from "./exams-BqiSmEcd.mjs";
import { t as Progress } from "./progress-B9cfUA-s.mjs";
import { i as useProgress } from "./progress-D3NKmr1g.mjs";
import { t as useHydrated } from "./use-hydrated-DmhOHHTH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/exam.index-CSN_IMZ3.js
var import_jsx_runtime = require_jsx_runtime();
var ICONS = {
	vocab: SpellCheck,
	grammar: PenLine,
	reading: BookOpenText,
	listening: Headphones
};
function ExamIndex() {
	const hydrated = useHydrated();
	const exams = useProgress((s) => s.exams);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			kicker: "JLPT MOCK",
			title: "N5／N4 模擬試",
			description: "語彙、文法、讀解、聽解四部份。題目為原創，對齊能力試驗題型與《大家的日本語》初級範圍。聽解用裝置日語語音朗讀，正式考場會更快、只播兩遍。"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
				title: "N5",
				text: "對應初級 1（第 1–25 課）：ですます、て形、たい、存在、普通形入門。"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
				title: "N4",
				text: "在 N5 之上加可能・意向・受身・使役、てしまう／ておく、ば／のに、敬語入門。"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4",
			children: MOCK_EXAMS.map((exam) => {
				const rec = hydrated ? exams[exam.id] : void 0;
				const totalQ = exam.sections.reduce((n, s) => n + s.questions.length, 0);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/exam/$id",
					params: { id: exam.id },
					className: "paper-card flex flex-col gap-4 rounded-2xl p-5 transition-[transform,box-shadow] duration-200 hover:shadow-lift sm:flex-row sm:items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "seal size-14 shrink-0 text-sm text-primary",
							children: exam.level
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl text-ink",
									children: exam.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: exam.subtitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs text-subtle",
									children: [
										exam.timeMinutes,
										" 分 · ",
										totalQ,
										" 題 ·",
										" ",
										exam.sections.map((s) => s.title).join(" / ")
									]
								}),
								rec ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
										value: rec.best,
										className: "max-w-xs flex-1"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs tabular-nums text-subtle",
										children: [
											"最佳 ",
											rec.best,
											"% · 上次 ",
											rec.lastScore,
											"/",
											rec.lastTotal
										]
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs text-subtle",
									children: "尚未作答"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex h-11 items-center gap-1 text-sm text-primary",
							children: ["開始", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				}, exam.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-8 grid gap-3 sm:grid-cols-4",
			children: [
				[
					"vocab",
					"文字・語彙",
					"漢字讀音、表記、文脈"
				],
				[
					"grammar",
					"文法",
					"助詞、活用、排列"
				],
				[
					"reading",
					"読解",
					"短文抓重點"
				],
				[
					"listening",
					"聴解",
					"課題・要點・即時應答"
				]
			].map(([id, title, hint]) => {
				const Icon = ICONS[id];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm font-medium text-ink",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-muted",
							children: hint
						})
					]
				}, id);
			})
		})
	] });
}
function Note({ title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-wide text-primary",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm leading-relaxed text-muted",
			children: text
		})]
	});
}
//#endregion
export { ExamIndex as component };
