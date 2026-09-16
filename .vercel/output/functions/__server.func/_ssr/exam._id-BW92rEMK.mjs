import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/exam._id-BW92rEMK.js
var import_jsx_runtime = require_jsx_runtime();
function ExamNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "paper-card rounded-xl p-8 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl text-ink",
			children: "沒有這份試卷"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/exam",
			className: "mt-4 inline-flex h-11 items-center text-sm text-primary",
			children: "回到模擬試"
		})]
	});
}
//#endregion
export { ExamNotFound as notFoundComponent };
