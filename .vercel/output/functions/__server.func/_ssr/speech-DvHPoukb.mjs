import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { l as cn } from "./router-CfDwE0gK.mjs";
import { r as Slot } from "../_libs/@radix-ui/react-primitive+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/speech-DvHPoukb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[transform,background-color,color,box-shadow,border-color,opacity] duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg shadow-soft hover:bg-primary/92",
			secondary: "bg-primary-soft text-primary hover:bg-primary-soft/80 border border-transparent",
			outline: "border border-border-strong bg-surface text-ink hover:bg-bg-deep",
			ghost: "text-ink hover:bg-bg-deep",
			danger: "bg-danger text-primary-fg hover:bg-danger/92"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11",
			"icon-sm": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var cachedVoice;
function pickJapaneseVoice() {
	if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
	if (cachedVoice !== void 0) return cachedVoice;
	const voices = window.speechSynthesis.getVoices();
	const ja = voices.find((v) => v.lang === "ja-JP" && /google|premium|enhanced/i.test(v.name)) ?? voices.find((v) => v.lang.startsWith("ja")) ?? null;
	cachedVoice = ja;
	return ja;
}
if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.addEventListener("voiceschanged", () => {
	cachedVoice = void 0;
	pickJapaneseVoice();
});
function canSpeak() {
	return typeof window !== "undefined" && "speechSynthesis" in window;
}
function makeUtterance(text, rate = .88) {
	const utterance = new SpeechSynthesisUtterance(text);
	utterance.lang = "ja-JP";
	utterance.rate = rate;
	const voice = pickJapaneseVoice();
	if (voice) utterance.voice = voice;
	return utterance;
}
function speakJapanese(text, rate = .88) {
	if (!canSpeak() || !text.trim()) return;
	window.speechSynthesis.cancel();
	window.speechSynthesis.speak(makeUtterance(text, rate));
}
/** Speak several lines with a short pause between them. Returns a cancel fn. */
function speakSequence(parts, rate = .88, gapMs = 420) {
	if (!canSpeak()) return () => {};
	const lines = parts.map((p) => p.trim()).filter(Boolean);
	window.speechSynthesis.cancel();
	if (!lines.length) return () => {};
	let cancelled = false;
	let timer = null;
	let index = 0;
	const playNext = () => {
		if (cancelled || index >= lines.length) return;
		const utterance = makeUtterance(lines[index] ?? "", rate);
		index += 1;
		utterance.onend = () => {
			if (cancelled || index >= lines.length) return;
			timer = setTimeout(playNext, gapMs);
		};
		utterance.onerror = () => {
			if (cancelled) return;
			timer = setTimeout(playNext, 80);
		};
		window.speechSynthesis.speak(utterance);
	};
	playNext();
	return () => {
		cancelled = true;
		if (timer) clearTimeout(timer);
		window.speechSynthesis.cancel();
	};
}
function stopSpeaking() {
	if (!canSpeak()) return;
	window.speechSynthesis.cancel();
}
//#endregion
export { stopSpeaking as i, speakJapanese as n, speakSequence as r, Button as t };
