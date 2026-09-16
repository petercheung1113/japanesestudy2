import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { l as cn } from "./router-B2yMlw1C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/furigana-Lg3L6J87.js
var import_jsx_runtime = require_jsx_runtime();
function stripFurigana(text) {
	return text.replace(/\[([^\]]+)\]/g, "").replace(/\s+/g, "");
}
function Furigana({ text, className, showReading = true }) {
	const nodes = [];
	let last = 0;
	let key = 0;
	const regex = /([^\s\[\]]+)\[([^\]]+)\]/g;
	let match;
	while (match = regex.exec(text)) {
		if (match.index > last) nodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text.slice(last, match.index) }, key++));
		const base = match[1];
		const reading = match[2];
		if (showReading) nodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ruby", { children: [base, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rt", {
			className: "select-none text-[0.55em] font-normal text-muted",
			children: reading
		})] }, key++));
		else nodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: base }, key++));
		last = match.index + match[0].length;
	}
	if (last < text.length) nodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text.slice(last) }, key++));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("leading-loose", className),
		children: nodes
	});
}
//#endregion
export { stripFurigana as n, Furigana as t };
