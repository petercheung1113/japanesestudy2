import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Volume2 } from "../_libs/lucide-react.mjs";
import { l as cn, o as PageTitle } from "./router-Pgpj1Zw4.mjs";
import { t as Button } from "./button-Doq13_8c.mjs";
import { t as speakJapanese } from "./speech-CizvjyRI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/start-DO3FpXuA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HIRAGANA_GOJUON = [
	[
		{
			kana: "あ",
			romaji: "a"
		},
		{
			kana: "い",
			romaji: "i"
		},
		{
			kana: "う",
			romaji: "u"
		},
		{
			kana: "え",
			romaji: "e"
		},
		{
			kana: "お",
			romaji: "o"
		}
	],
	[
		{
			kana: "か",
			romaji: "ka"
		},
		{
			kana: "き",
			romaji: "ki"
		},
		{
			kana: "く",
			romaji: "ku"
		},
		{
			kana: "け",
			romaji: "ke"
		},
		{
			kana: "こ",
			romaji: "ko"
		}
	],
	[
		{
			kana: "さ",
			romaji: "sa"
		},
		{
			kana: "し",
			romaji: "shi"
		},
		{
			kana: "す",
			romaji: "su"
		},
		{
			kana: "せ",
			romaji: "se"
		},
		{
			kana: "そ",
			romaji: "so"
		}
	],
	[
		{
			kana: "た",
			romaji: "ta"
		},
		{
			kana: "ち",
			romaji: "chi"
		},
		{
			kana: "つ",
			romaji: "tsu"
		},
		{
			kana: "て",
			romaji: "te"
		},
		{
			kana: "と",
			romaji: "to"
		}
	],
	[
		{
			kana: "な",
			romaji: "na"
		},
		{
			kana: "に",
			romaji: "ni"
		},
		{
			kana: "ぬ",
			romaji: "nu"
		},
		{
			kana: "ね",
			romaji: "ne"
		},
		{
			kana: "の",
			romaji: "no"
		}
	],
	[
		{
			kana: "は",
			romaji: "ha"
		},
		{
			kana: "ひ",
			romaji: "hi"
		},
		{
			kana: "ふ",
			romaji: "fu"
		},
		{
			kana: "へ",
			romaji: "he"
		},
		{
			kana: "ほ",
			romaji: "ho"
		}
	],
	[
		{
			kana: "ま",
			romaji: "ma"
		},
		{
			kana: "み",
			romaji: "mi"
		},
		{
			kana: "む",
			romaji: "mu"
		},
		{
			kana: "め",
			romaji: "me"
		},
		{
			kana: "も",
			romaji: "mo"
		}
	],
	[
		{
			kana: "や",
			romaji: "ya"
		},
		{
			kana: "",
			romaji: "",
			empty: true
		},
		{
			kana: "ゆ",
			romaji: "yu"
		},
		{
			kana: "",
			romaji: "",
			empty: true
		},
		{
			kana: "よ",
			romaji: "yo"
		}
	],
	[
		{
			kana: "ら",
			romaji: "ra"
		},
		{
			kana: "り",
			romaji: "ri"
		},
		{
			kana: "る",
			romaji: "ru"
		},
		{
			kana: "れ",
			romaji: "re"
		},
		{
			kana: "ろ",
			romaji: "ro"
		}
	],
	[
		{
			kana: "わ",
			romaji: "wa"
		},
		{
			kana: "",
			romaji: "",
			empty: true
		},
		{
			kana: "",
			romaji: "",
			empty: true
		},
		{
			kana: "",
			romaji: "",
			empty: true
		},
		{
			kana: "を",
			romaji: "o"
		}
	],
	[
		{
			kana: "ん",
			romaji: "n"
		},
		{
			kana: "",
			romaji: "",
			empty: true
		},
		{
			kana: "",
			romaji: "",
			empty: true
		},
		{
			kana: "",
			romaji: "",
			empty: true
		},
		{
			kana: "",
			romaji: "",
			empty: true
		}
	]
];
var HIRAGANA_DAKUTEN = [
	[
		{
			kana: "が",
			romaji: "ga"
		},
		{
			kana: "ぎ",
			romaji: "gi"
		},
		{
			kana: "ぐ",
			romaji: "gu"
		},
		{
			kana: "げ",
			romaji: "ge"
		},
		{
			kana: "ご",
			romaji: "go"
		}
	],
	[
		{
			kana: "ざ",
			romaji: "za"
		},
		{
			kana: "じ",
			romaji: "ji"
		},
		{
			kana: "ず",
			romaji: "zu"
		},
		{
			kana: "ぜ",
			romaji: "ze"
		},
		{
			kana: "ぞ",
			romaji: "zo"
		}
	],
	[
		{
			kana: "だ",
			romaji: "da"
		},
		{
			kana: "ぢ",
			romaji: "ji"
		},
		{
			kana: "づ",
			romaji: "zu"
		},
		{
			kana: "で",
			romaji: "de"
		},
		{
			kana: "ど",
			romaji: "do"
		}
	],
	[
		{
			kana: "ば",
			romaji: "ba"
		},
		{
			kana: "び",
			romaji: "bi"
		},
		{
			kana: "ぶ",
			romaji: "bu"
		},
		{
			kana: "べ",
			romaji: "be"
		},
		{
			kana: "ぼ",
			romaji: "bo"
		}
	],
	[
		{
			kana: "ぱ",
			romaji: "pa"
		},
		{
			kana: "ぴ",
			romaji: "pi"
		},
		{
			kana: "ぷ",
			romaji: "pu"
		},
		{
			kana: "ぺ",
			romaji: "pe"
		},
		{
			kana: "ぽ",
			romaji: "po"
		}
	]
];
var HIRAGANA_YOUON = [
	[
		{
			kana: "きゃ",
			romaji: "kya"
		},
		{
			kana: "きゅ",
			romaji: "kyu"
		},
		{
			kana: "きょ",
			romaji: "kyo"
		}
	],
	[
		{
			kana: "しゃ",
			romaji: "sha"
		},
		{
			kana: "しゅ",
			romaji: "shu"
		},
		{
			kana: "しょ",
			romaji: "sho"
		}
	],
	[
		{
			kana: "ちゃ",
			romaji: "cha"
		},
		{
			kana: "ちゅ",
			romaji: "chu"
		},
		{
			kana: "ちょ",
			romaji: "cho"
		}
	],
	[
		{
			kana: "にゃ",
			romaji: "nya"
		},
		{
			kana: "にゅ",
			romaji: "nyu"
		},
		{
			kana: "にょ",
			romaji: "nyo"
		}
	],
	[
		{
			kana: "ひゃ",
			romaji: "hya"
		},
		{
			kana: "ひゅ",
			romaji: "hyu"
		},
		{
			kana: "ひょ",
			romaji: "hyo"
		}
	],
	[
		{
			kana: "みゃ",
			romaji: "mya"
		},
		{
			kana: "みゅ",
			romaji: "myu"
		},
		{
			kana: "みょ",
			romaji: "myo"
		}
	],
	[
		{
			kana: "りゃ",
			romaji: "rya"
		},
		{
			kana: "りゅ",
			romaji: "ryu"
		},
		{
			kana: "りょ",
			romaji: "ryo"
		}
	],
	[
		{
			kana: "ぎゃ",
			romaji: "gya"
		},
		{
			kana: "ぎゅ",
			romaji: "gyu"
		},
		{
			kana: "ぎょ",
			romaji: "gyo"
		}
	],
	[
		{
			kana: "じゃ",
			romaji: "ja"
		},
		{
			kana: "じゅ",
			romaji: "ju"
		},
		{
			kana: "じょ",
			romaji: "jo"
		}
	],
	[
		{
			kana: "びゃ",
			romaji: "bya"
		},
		{
			kana: "びゅ",
			romaji: "byu"
		},
		{
			kana: "びょ",
			romaji: "byo"
		}
	],
	[
		{
			kana: "ぴゃ",
			romaji: "pya"
		},
		{
			kana: "ぴゅ",
			romaji: "pyu"
		},
		{
			kana: "ぴょ",
			romaji: "pyo"
		}
	]
];
function toKata(hira) {
	return [...hira].map((ch) => {
		const code = ch.charCodeAt(0);
		if (code >= 12353 && code <= 12438) return String.fromCharCode(code + 96);
		return ch;
	}).join("");
}
function toKatakanaGrid(grid) {
	return grid.map((row) => row.map((cell) => cell.empty ? cell : {
		...cell,
		kana: toKata(cell.kana)
	}));
}
var SOUND_NOTES = [
	{
		id: "long",
		title: "長音",
		kana: "ちょうおん",
		body: "把母音拉長一拍。日文裡「おばさん」（阿姨）和「おばあさん」（奶奶）只差一拍。片假名常用「ー」表示。",
		pairs: [
			{
				a: "ゆき",
				b: "ゆうき",
				zh: "雪／勇氣"
			},
			{
				a: "ここ",
				b: "こうこう",
				zh: "這裡／高中"
			},
			{
				a: "え",
				b: "ええ",
				zh: "繪？／對"
			}
		]
	},
	{
		id: "n",
		title: "撥音 ん",
		kana: "はつおん",
		body: "「ん」單獨佔一拍，不能省略。しんぶん 是四拍：し・ん・ぶ・ん。",
		samples: [
			"みんな",
			"しんぶん",
			"えんぴつ",
			"てんき"
		]
	},
	{
		id: "sokuon",
		title: "促音 っ",
		kana: "そくおん",
		body: "小っ佔一拍，讓後面的子音停頓一下。きて（來）和 きって（郵票）意思完全不同。",
		pairs: [{
			a: "かた",
			b: "かった",
			zh: "肩膀／贏了"
		}, {
			a: "もと",
			b: "もっと",
			zh: "本源／更加"
		}]
	},
	{
		id: "youon",
		title: "拗音",
		kana: "ようおん",
		body: "き＋や → きゃ，合起來只算一拍。ひゃく（百）不是「ひ・や・く」三拍，而是「ひゃ・く」兩拍。",
		samples: [
			"きょう",
			"じゃ",
			"りょこう",
			"びょういん"
		]
	}
];
var CLASSROOM = [
	{
		jp: "始めましょう。",
		speak: "はじめましょう。",
		zh: "我們開始吧。"
	},
	{
		jp: "終わりましょう。",
		speak: "おわりましょう。",
		zh: "就到這裡。"
	},
	{
		jp: "休みましょう。",
		speak: "やすみましょう。",
		zh: "休息一下吧。"
	},
	{
		jp: "わかりますか。",
		speak: "わかりますか。",
		zh: "懂了嗎？"
	},
	{
		jp: "はい、わかります。",
		speak: "はい、わかります。",
		zh: "是，懂了。"
	},
	{
		jp: "いいえ、わかりません。",
		speak: "いいえ、わかりません。",
		zh: "不，不懂。"
	},
	{
		jp: "もう一度お願いします。",
		speak: "もういちどおねがいします。",
		zh: "請再說一次。"
	},
	{
		jp: "いいです。",
		speak: "いいです。",
		zh: "可以／沒問題。"
	},
	{
		jp: "違います。",
		speak: "ちがいます。",
		zh: "不對。"
	}
];
var GREETINGS = [
	{
		jp: "おはようございます。",
		speak: "おはようございます。",
		zh: "早安。（禮貌）"
	},
	{
		jp: "こんにちは。",
		speak: "こんにちは。",
		zh: "你好。（白天）"
	},
	{
		jp: "こんばんは。",
		speak: "こんばんは。",
		zh: "晚上好。"
	},
	{
		jp: "おやすみなさい。",
		speak: "おやすみなさい。",
		zh: "晚安。"
	},
	{
		jp: "さようなら。",
		speak: "さようなら。",
		zh: "再見。"
	},
	{
		jp: "ありがとうございました。",
		speak: "ありがとうございました。",
		zh: "非常感謝。"
	},
	{
		jp: "すみません。",
		speak: "すみません。",
		zh: "對不起／請問。"
	},
	{
		jp: "お願いします。",
		speak: "おねがいします。",
		zh: "拜託了。"
	}
];
var NUMBERS = [
	{
		n: 0,
		kana: "ゼロ／れい",
		kanji: "〇",
		romaji: "zero / rei"
	},
	{
		n: 1,
		kana: "いち",
		kanji: "一",
		romaji: "ichi"
	},
	{
		n: 2,
		kana: "に",
		kanji: "二",
		romaji: "ni"
	},
	{
		n: 3,
		kana: "さん",
		kanji: "三",
		romaji: "san"
	},
	{
		n: 4,
		kana: "よん／し",
		kanji: "四",
		romaji: "yon / shi"
	},
	{
		n: 5,
		kana: "ご",
		kanji: "五",
		romaji: "go"
	},
	{
		n: 6,
		kana: "ろく",
		kanji: "六",
		romaji: "roku"
	},
	{
		n: 7,
		kana: "なな／しち",
		kanji: "七",
		romaji: "nana / shichi"
	},
	{
		n: 8,
		kana: "はち",
		kanji: "八",
		romaji: "hachi"
	},
	{
		n: 9,
		kana: "きゅう／く",
		kanji: "九",
		romaji: "kyū / ku"
	},
	{
		n: 10,
		kana: "じゅう",
		kanji: "十",
		romaji: "jū"
	}
];
var CHARACTERS = [
	{
		name: "マイク・ミラー",
		kana: "まいく・みらー",
		zh: "美國・工程師",
		note: "IMC 大阪支店"
	},
	{
		name: "サントス",
		kana: "さんとす",
		zh: "巴西・商務",
		note: "日巴相關企業"
	},
	{
		name: "ワン",
		kana: "わん",
		zh: "中國・同事／留學",
		note: "常出現在郵局與課堂"
	},
	{
		name: "佐藤",
		kana: "さとう",
		zh: "日本・房東",
		note: "ミラーさんの家の管理人"
	},
	{
		name: "けい子",
		kana: "けいこ",
		zh: "日本・大學生",
		note: "佐藤さんの娘"
	},
	{
		name: "山田",
		kana: "やまだ",
		zh: "日本・同事",
		note: "常一起吃飯、工作"
	}
];
function StartPage() {
	const [script, setScript] = (0, import_react.useState)("hira");
	const gojuon = script === "hira" ? HIRAGANA_GOJUON : toKatakanaGrid(HIRAGANA_GOJUON);
	const dakuten = script === "hira" ? HIRAGANA_DAKUTEN : toKatakanaGrid(HIRAGANA_DAKUTEN);
	const youon = script === "hira" ? HIRAGANA_YOUON : toKatakanaGrid(HIRAGANA_YOUON);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			kicker: "はじめに",
			title: "先把聲音抓好",
			description: "對應課本開頭：五十音、長音／撥音／促音、教室用語、打招呼與 0–10。點假名即可朗讀。"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-wrap items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: script === "hira" ? "default" : "outline",
					onClick: () => setScript("hira"),
					children: "平假名"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: script === "kata" ? "default" : "outline",
					onClick: () => setScript("kata"),
					children: "片假名"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-subtle",
					children: "點一下格子聽發音"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "五十音",
			kicker: "かなと 拍",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanaGrid, {
				rows: gojuon,
				cols: 5
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "濁音・半濁音",
			kicker: "がざだばぱ",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanaGrid, {
				rows: dakuten,
				cols: 5
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "拗音",
			kicker: "きゃ・しゃ・ちゃ",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KanaGrid, {
				rows: youon,
				cols: 3
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "發音要注意",
			kicker: "一拍之差",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: SOUND_NOTES.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "paper-card rounded-xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-wide text-primary",
							children: note.kana
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-xl text-ink",
							children: note.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: note.body
						}),
						note.pairs ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-1.5 text-sm",
							children: note.pairs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex flex-wrap items-baseline gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "font-medium text-ink underline-offset-2 hover:underline",
										onClick: () => speakJapanese(p.a),
										children: p.a
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-subtle",
										children: "/"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "font-medium text-ink underline-offset-2 hover:underline",
										onClick: () => speakJapanese(p.b),
										children: p.b
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-subtle",
										children: p.zh
									})
								]
							}, p.a))
						}) : null,
						note.samples ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: note.samples.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => speakJapanese(s),
								className: "rounded-md border border-border bg-surface px-2.5 py-1 text-sm hover:bg-primary-soft",
								children: s
							}, s))
						}) : null
					]
				}, note.id))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "教室用語",
			kicker: "きょうしつ のことば",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhraseList, { items: CLASSROOM })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "每天的招呼",
			kicker: "あいさつ",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhraseList, { items: GREETINGS })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "數字 0–10",
			kicker: "すうじ",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-4 gap-2 sm:grid-cols-6",
				children: NUMBERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => speakJapanese(item.kana.split("／")[0] ?? item.kana),
					className: "paper-card flex min-h-20 flex-col items-center justify-center rounded-xl p-2 hover:shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl text-ink",
						children: item.kanji
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 text-xs text-muted",
						children: item.kana
					})]
				}, item.n))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/ref",
			className: "paper-card mb-8 flex items-center justify-between gap-4 rounded-2xl p-5 transition-[transform,box-shadow] duration-200 hover:shadow-lift",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-primary",
					children: "補充資料"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-2xl text-ink",
					children: "時刻・月日・錢・動詞活用"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "一點到十二點、一分到五十九分、一至十二月、1–31 日、百千萬円、星期、一二三類動詞轉變"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-primary",
				children: "打開"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "登場人物",
			kicker: "だれが でますか",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-2",
				children: CHARACTERS.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "paper-card flex items-start gap-3 rounded-xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "seal size-10 shrink-0 text-xs text-primary",
						children: person.name.slice(0, 1)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg text-ink",
								children: person.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-subtle",
								children: person.kana
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted",
								children: [
									person.zh,
									" · ",
									person.note
								]
							})
						]
					})]
				}, person.name))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "音抓好了，從第 1 課開始判斷句。"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/ref",
					className: "inline-flex h-11 items-center rounded-md border border-border bg-surface px-4 text-sm text-ink",
					children: "補充資料"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/lesson/$id",
					params: { id: "1" },
					className: "inline-flex h-11 items-center rounded-md bg-primary px-4 text-sm text-primary-fg",
					children: "進入第 1 課"
				})]
			})]
		})
	] });
}
function Section({ title, kicker, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-primary",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 mt-1 font-display text-2xl text-ink",
				children: title
			}),
			children
		]
	});
}
function KanaGrid({ rows, cols }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("grid gap-1.5", cols === 5 ? "grid-cols-5" : "grid-cols-3"),
		children: rows.flatMap((row, ri) => row.map((cell, ci) => cell.empty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}, `${ri}-${ci}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => speakJapanese(cell.kana),
			className: "paper-card flex min-h-14 flex-col items-center justify-center rounded-lg p-1 hover:bg-primary-soft hover:shadow-lift sm:min-h-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-2xl leading-none text-ink sm:text-3xl",
				children: cell.kana
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 text-[10px] uppercase tracking-wide text-subtle",
				children: cell.romaji
			})]
		}, `${ri}-${ci}-${cell.kana}`)))
	});
}
function PhraseList({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => speakJapanese(item.speak),
			className: "flex min-h-12 w-full items-center gap-3 px-4 py-2.5 text-left hover:bg-primary-soft/60",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4 shrink-0 text-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1 font-medium text-ink",
					children: item.jp
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted",
					children: item.zh
				})
			]
		}) }, item.jp))
	});
}
function Quiz() {
	const pool = (0, import_react.useMemo)(() => HIRAGANA_GOJUON.flat().filter((c) => !c.empty), []);
	const [item, setItem] = (0, import_react.useState)(() => pool[1] ?? pool[0]);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const choices = (0, import_react.useMemo)(() => {
		return [...[...pool.filter((c) => c.kana !== item.kana)].sort(() => Math.random() - .5).slice(0, 3), item].sort(() => Math.random() - .5);
	}, [item, pool]);
	function next() {
		const nxt = pool[Math.floor(Math.random() * pool.length)] ?? item;
		setItem(nxt);
		setPicked(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		title: "聽一聽，選平假名",
		kicker: "CHECK",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "paper-card rounded-2xl p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => speakJapanese(item.kana),
					className: "mx-auto flex size-16 items-center justify-center rounded-full bg-primary text-primary-fg",
					"aria-label": "朗讀",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-7" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-center text-sm text-muted",
					children: ["羅馬字：", item.romaji]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-4 gap-2",
					children: choices.map((c) => {
						const ok = picked !== null && c.kana === item.kana;
						const bad = picked === c.kana && c.kana !== item.kana;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: picked !== null,
							onClick: () => setPicked(c.kana),
							className: cn("min-h-12 rounded-lg border font-display text-2xl", picked === null && "border-border bg-surface hover:bg-primary-soft", ok && "border-success/40 bg-success-soft text-success", bad && "border-danger/40 bg-danger-soft text-danger", picked && !ok && !bad && "border-border text-muted"),
							children: c.kana
						}, c.kana);
					})
				}),
				picked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-4 w-full sm:w-auto",
					onClick: next,
					children: "下一題"
				}) : null
			]
		})
	});
}
//#endregion
export { StartPage as component };
