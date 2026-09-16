//#region node_modules/.nitro/vite/services/ssr/assets/speech-CizvjyRI.js
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
export { speakSequence as n, stopSpeaking as r, speakJapanese as t };
