import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as ChevronDown } from "../_libs/lucide-react.mjs";
import { l as cn, o as PageTitle } from "./router-Pgpj1Zw4.mjs";
import { n as SpeakButton, t as QuizPlayer } from "./quiz-player-DnTolUtO.mjs";
import { n as stripFurigana, t as Furigana } from "./furigana-Lg3L6J87.mjs";
import { n as N4_PRACTICE, t as N4_GRAMMAR } from "./n4-grammar-BhuAlK-z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/n4-D3P_Cgjy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function N4Page() {
	const [openId, setOpenId] = (0, import_react.useState)(N4_GRAMMAR[0]?.id ?? null);
	const [tab, setTab] = (0, import_react.useState)("grammar");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			kicker: "N4 衝刺",
			title: "初級 1 之後的文法",
			description: "《大家的日本語》初級 1 走到 N5。N4 還需要可能形、意向形、受身、使役、樣態傳聞、てしまう／ておく、條件句與敬語。這裡用原創例句補上 16 個句型，再配一組混合練習。"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex gap-1 rounded-lg border border-border bg-surface p-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setTab("grammar"),
				className: cn("h-11 flex-1 rounded-md text-sm", tab === "grammar" ? "bg-primary text-primary-fg" : "text-muted"),
				children: ["文法 ", N4_GRAMMAR.length]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setTab("practice"),
				className: cn("h-11 flex-1 rounded-md text-sm", tab === "practice" ? "bg-primary text-primary-fg" : "text-muted"),
				children: ["混合練習 ", N4_PRACTICE.length]
			})]
		}),
		tab === "practice" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizPlayer, {
			questions: N4_PRACTICE,
			kicker: "N4 文法練習"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: N4_GRAMMAR.map((point, index) => {
				const open = openId === point.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "paper-card overflow-hidden rounded-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex w-full items-start gap-3 px-4 py-4 text-left",
						onClick: () => setOpenId(open ? null : point.id),
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
								children: point.notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: note }, note))
							}) : null,
							point.table ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConjugationTable, { table: point.table }) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: point.examples.map((example) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-2 rounded-lg bg-bg-deep/60 px-3 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakButton, { text: stripFurigana(example.jp) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-base text-ink",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furigana, { text: example.jp })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted",
										children: example.zh
									})] })]
								}, example.jp))
							})
						]
					}) : null]
				}, point.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-8 text-sm text-muted",
			children: [
				"練完文法，去做",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/exam",
					className: "mx-1 text-primary underline-offset-2 hover:underline",
					children: "N4 模擬試"
				}),
				"。"
			]
		})
	] });
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
//#endregion
export { N4Page as component };
