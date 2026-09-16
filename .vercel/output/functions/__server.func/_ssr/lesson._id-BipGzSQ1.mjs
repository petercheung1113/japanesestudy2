import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as LESSONS } from "./lessons-DuTMC9xE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lesson._id-BipGzSQ1.js
var import_jsx_runtime = require_jsx_runtime();
function LessonNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "paper-card rounded-xl p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl text-ink",
				children: "沒有這一課"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: [
					"目前教材為第 1 至第 ",
					LESSONS.length,
					" 課。"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-4 inline-flex h-11 items-center text-sm text-primary",
				children: "回到課程"
			})
		]
	});
}
//#endregion
export { LessonNotFound as notFoundComponent };
