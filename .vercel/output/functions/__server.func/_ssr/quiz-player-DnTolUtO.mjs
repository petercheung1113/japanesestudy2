import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as RotateCcw, n as Volume2, t as X, v as Check } from "../_libs/lucide-react.mjs";
import { l as cn } from "./router-Pgpj1Zw4.mjs";
import { t as Button } from "./button-Doq13_8c.mjs";
import { t as Progress } from "./progress-B9cfUA-s.mjs";
import { t as speakJapanese } from "./speech-CizvjyRI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quiz-player-DnTolUtO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SpeakButton({ text, label = "朗讀", className, rate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "button",
		variant: "ghost",
		size: "icon-sm",
		className: cn("text-primary", className),
		"aria-label": label,
		onClick: (event) => {
			event.stopPropagation();
			speakJapanese(text, rate);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {})
	});
}
function normalize(value) {
	return value.trim().replace(/\s+/g, "").toLowerCase();
}
function isCorrect(question, given) {
	return normalize(given) === normalize(question.answer);
}
function QuizPlayer({ questions, kicker = "練習", onFinish }) {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [fill, setFill] = (0, import_react.useState)("");
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	const [score, setScore] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const current = questions[index];
	const pct = (0, import_react.useMemo)(() => Math.round((done ? questions.length : index) / Math.max(questions.length, 1) * 100), [
		done,
		index,
		questions.length
	]);
	function submit(answer) {
		if (revealed || !current) return;
		setSelected(answer);
		setRevealed(true);
		if (isCorrect(current, answer)) setScore((s) => s + 1);
	}
	function next() {
		if (index + 1 >= questions.length) {
			onFinish?.(score, questions.length);
			setDone(true);
			return;
		}
		setIndex((i) => i + 1);
		setSelected(null);
		setFill("");
		setRevealed(false);
	}
	function restart() {
		setIndex(0);
		setSelected(null);
		setFill("");
		setRevealed(false);
		setScore(0);
		setDone(false);
	}
	if (!questions.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "這部份還沒有題目。"
	});
	if (done) {
		const percent = Math.round(score / questions.length * 100);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "paper-card mx-auto max-w-md rounded-2xl p-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-subtle",
					children: kicker
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
						questions.length,
						" 題正確"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted",
					children: percent >= 80 ? "很穩。錯題解說可以再掃一遍。" : "再走一遍會更熟，錯題解說值得再讀。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "mt-6",
					onClick: restart,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "再練一次"]
				})
			]
		});
	}
	if (!current) return null;
	const choices = current.options ?? ["正確", "錯誤"];
	const given = current.type === "fill" ? selected ?? fill : selected ?? "";
	const ok = revealed && given ? isCorrect(current, given) : false;
	const kind = current.type === "mcq" ? "選擇題" : current.type === "tf" ? "是非題" : current.type === "listen" ? "聽解" : "填空";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"第 ",
					index + 1,
					" / ",
					questions.length,
					" 題"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "tabular-nums",
					children: [
						"目前 ",
						score,
						" 分"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: pct }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "paper-card rounded-xl p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: kind
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-lg leading-relaxed text-ink",
						children: current.prompt
					}),
					current.promptJp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-xl text-primary",
						children: current.promptJp
					}) : null,
					current.type === "listen" && current.audio ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => speakJapanese(current.audio ?? "", .86),
						className: "mt-4 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-5 text-sm text-primary-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-5" }), "播放題目"]
					}) : null
				]
			}),
			current.type === "fill" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-3 sm:flex-row",
				onSubmit: (e) => {
					e.preventDefault();
					submit(fill);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: fill,
					onChange: (e) => setFill(e.target.value),
					disabled: revealed,
					className: "h-12 flex-1 rounded-md border border-border bg-surface px-3 font-display text-lg outline-none ring-primary/30 focus:ring-2",
					placeholder: "輸入答案",
					autoComplete: "off"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: revealed || !fill.trim(),
					children: "送出"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2",
				children: choices.map((option) => {
					const chosen = selected === option;
					const isAns = revealed && isCorrect(current, option);
					const isWrong = revealed && chosen && !isAns;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: revealed,
						onClick: () => submit(option),
						className: cn("min-h-12 rounded-lg border px-4 py-3 text-left text-sm transition-colors duration-150", !revealed && "border-border bg-surface hover:border-primary/40 hover:bg-primary-soft/40", isAns && "border-success/40 bg-success-soft text-success", isWrong && "border-danger/40 bg-danger-soft text-danger", revealed && !isAns && !isWrong && "border-border bg-surface text-muted"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2",
							children: [isAns ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : isWrong ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : null, option]
						})
					}, option);
				})
			}),
			revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("rounded-xl px-4 py-3 text-sm", ok ? "bg-success-soft text-success" : "bg-danger-soft text-danger"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: ok ? "正確" : `正確答案：${current.answer}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-ink/80",
						children: current.explanation
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-3",
						variant: ok ? "default" : "outline",
						onClick: next,
						children: index + 1 >= questions.length ? "看結果" : "下一題"
					})
				]
			}) : null
		]
	});
}
//#endregion
export { SpeakButton as n, QuizPlayer as t };
