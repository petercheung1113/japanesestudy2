import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Volume2 } from "../_libs/lucide-react.mjs";
import { l as cn, o as PageTitle } from "./router-B2yMlw1C.mjs";
import { t as speakJapanese } from "./speech-CizvjyRI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ref-CasRe7oC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var REF_SECTIONS = [
	{
		id: "time",
		label: "時間",
		hint: "1–12 時・1–59 分"
	},
	{
		id: "month",
		label: "月份",
		hint: "一月〜十二月"
	},
	{
		id: "day",
		label: "日子",
		hint: "1–31 日"
	},
	{
		id: "money",
		label: "錢",
		hint: "円・百・千・萬"
	},
	{
		id: "week",
		label: "星期",
		hint: "月〜日"
	},
	{
		id: "verb",
		label: "動詞",
		hint: "一／二／三類活用"
	}
];
var HOURS = [
	{
		jp: "1時",
		kana: "いちじ",
		zh: "一點",
		speak: "いちじ"
	},
	{
		jp: "2時",
		kana: "にじ",
		zh: "兩點",
		speak: "にじ"
	},
	{
		jp: "3時",
		kana: "さんじ",
		zh: "三點",
		speak: "さんじ"
	},
	{
		jp: "4時",
		kana: "よじ",
		zh: "四點",
		speak: "よじ",
		note: "不是よんじ",
		mark: true
	},
	{
		jp: "5時",
		kana: "ごじ",
		zh: "五點",
		speak: "ごじ"
	},
	{
		jp: "6時",
		kana: "ろくじ",
		zh: "六點",
		speak: "ろくじ"
	},
	{
		jp: "7時",
		kana: "しちじ",
		zh: "七點",
		speak: "しちじ",
		note: "報時多用しちじ",
		mark: true
	},
	{
		jp: "8時",
		kana: "はちじ",
		zh: "八點",
		speak: "はちじ"
	},
	{
		jp: "9時",
		kana: "くじ",
		zh: "九點",
		speak: "くじ",
		note: "不是きゅうじ",
		mark: true
	},
	{
		jp: "10時",
		kana: "じゅうじ",
		zh: "十點",
		speak: "じゅうじ"
	},
	{
		jp: "11時",
		kana: "じゅういちじ",
		zh: "十一點",
		speak: "じゅういちじ"
	},
	{
		jp: "12時",
		kana: "じゅうにじ",
		zh: "十二點",
		speak: "じゅうにじ"
	}
];
var TIME_EXTRA = [
	{
		jp: "何時",
		kana: "なんじ",
		zh: "幾點",
		speak: "なんじ"
	},
	{
		jp: "半",
		kana: "はん",
		zh: "半（30 分）",
		speak: "はん",
		note: "2時半＝にじはん"
	},
	{
		jp: "午前",
		kana: "ごぜん",
		zh: "上午",
		speak: "ごぜん"
	},
	{
		jp: "午後",
		kana: "ごご",
		zh: "下午",
		speak: "ごご"
	},
	{
		jp: "〜時から",
		kana: "〜じから",
		zh: "從……點",
		speak: "じから"
	},
	{
		jp: "〜時まで",
		kana: "〜じまで",
		zh: "到……點",
		speak: "じまで"
	}
];
var ONES_MIN = {
	1: {
		kana: "いっぷん",
		mark: true,
		note: "促音＋ぷん"
	},
	2: { kana: "にふん" },
	3: {
		kana: "さんぷん",
		mark: true,
		note: "ぷん"
	},
	4: {
		kana: "よんぷん",
		mark: true,
		note: "ぷん"
	},
	5: { kana: "ごふん" },
	6: {
		kana: "ろっぷん",
		mark: true,
		note: "促音＋ぷん"
	},
	7: { kana: "ななふん" },
	8: {
		kana: "はっぷん",
		alt: "はちふん",
		mark: true,
		note: "也作はちふん"
	},
	9: { kana: "きゅうふん" }
};
var TENS_MIN = {
	10: "じゅっぷん",
	20: "にじゅっぷん",
	30: "さんじゅっぷん",
	40: "よんじゅっぷん",
	50: "ごじゅっぷん"
};
var TENS_PREFIX = [
	"",
	"じゅう",
	"にじゅう",
	"さんじゅう",
	"よんじゅう",
	"ごじゅう"
];
var MINUTES = Array.from({ length: 59 }, (_, i) => {
	const n = i + 1;
	const ones = n % 10;
	const tens = Math.floor(n / 10);
	if (ones === 0) {
		const kana = TENS_MIN[n];
		return {
			jp: `${n}分`,
			kana,
			zh: `${n} 分`,
			speak: kana,
			mark: true,
			note: n === 30 ? "○時半也可以" : "整十用ぷん"
		};
	}
	const stem = ONES_MIN[ones];
	const kana = `${TENS_PREFIX[tens]}${stem.kana}`;
	return {
		jp: `${n}分`,
		kana,
		zh: `${n} 分`,
		speak: kana,
		mark: stem.mark,
		note: stem.note
	};
});
var MONTHS = [
	{
		jp: "1月",
		kana: "いちがつ",
		zh: "一月",
		speak: "いちがつ"
	},
	{
		jp: "2月",
		kana: "にがつ",
		zh: "二月",
		speak: "にがつ"
	},
	{
		jp: "3月",
		kana: "さんがつ",
		zh: "三月",
		speak: "さんがつ"
	},
	{
		jp: "4月",
		kana: "しがつ",
		zh: "四月",
		speak: "しがつ",
		note: "不是よんがつ",
		mark: true
	},
	{
		jp: "5月",
		kana: "ごがつ",
		zh: "五月",
		speak: "ごがつ"
	},
	{
		jp: "6月",
		kana: "ろくがつ",
		zh: "六月",
		speak: "ろくがつ"
	},
	{
		jp: "7月",
		kana: "しちがつ",
		zh: "七月",
		speak: "しちがつ",
		note: "不是なながつ",
		mark: true
	},
	{
		jp: "8月",
		kana: "はちがつ",
		zh: "八月",
		speak: "はちがつ"
	},
	{
		jp: "9月",
		kana: "くがつ",
		zh: "九月",
		speak: "くがつ",
		note: "不是きゅうがつ",
		mark: true
	},
	{
		jp: "10月",
		kana: "じゅうがつ",
		zh: "十月",
		speak: "じゅうがつ"
	},
	{
		jp: "11月",
		kana: "じゅういちがつ",
		zh: "十一月",
		speak: "じゅういちがつ"
	},
	{
		jp: "12月",
		kana: "じゅうにがつ",
		zh: "十二月",
		speak: "じゅうにがつ"
	}
];
var DAYS = [
	{
		jp: "1日",
		kana: "ついたち",
		zh: "一號",
		speak: "ついたち",
		mark: true,
		note: "和語"
	},
	{
		jp: "2日",
		kana: "ふつか",
		zh: "二號",
		speak: "ふつか",
		mark: true
	},
	{
		jp: "3日",
		kana: "みっか",
		zh: "三號",
		speak: "みっか",
		mark: true
	},
	{
		jp: "4日",
		kana: "よっか",
		zh: "四號",
		speak: "よっか",
		mark: true
	},
	{
		jp: "5日",
		kana: "いつか",
		zh: "五號",
		speak: "いつか",
		mark: true
	},
	{
		jp: "6日",
		kana: "むいか",
		zh: "六號",
		speak: "むいか",
		mark: true
	},
	{
		jp: "7日",
		kana: "なのか",
		zh: "七號",
		speak: "なのか",
		mark: true
	},
	{
		jp: "8日",
		kana: "ようか",
		zh: "八號",
		speak: "ようか",
		mark: true
	},
	{
		jp: "9日",
		kana: "ここのか",
		zh: "九號",
		speak: "ここのか",
		mark: true
	},
	{
		jp: "10日",
		kana: "とおか",
		zh: "十號",
		speak: "とおか",
		mark: true
	},
	{
		jp: "11日",
		kana: "じゅういちにち",
		zh: "十一號",
		speak: "じゅういちにち"
	},
	{
		jp: "12日",
		kana: "じゅうににち",
		zh: "十二號",
		speak: "じゅうににち"
	},
	{
		jp: "13日",
		kana: "じゅうさんにち",
		zh: "十三號",
		speak: "じゅうさんにち"
	},
	{
		jp: "14日",
		kana: "じゅうよっか",
		zh: "十四號",
		speak: "じゅうよっか",
		mark: true,
		note: "よっか"
	},
	{
		jp: "15日",
		kana: "じゅうごにち",
		zh: "十五號",
		speak: "じゅうごにち"
	},
	{
		jp: "16日",
		kana: "じゅうろくにち",
		zh: "十六號",
		speak: "じゅうろくにち"
	},
	{
		jp: "17日",
		kana: "じゅうしちにち",
		zh: "十七號",
		speak: "じゅうしちにち",
		note: "也作じゅうななにち"
	},
	{
		jp: "18日",
		kana: "じゅうはちにち",
		zh: "十八號",
		speak: "じゅうはちにち"
	},
	{
		jp: "19日",
		kana: "じゅうくにち",
		zh: "十九號",
		speak: "じゅうくにち"
	},
	{
		jp: "20日",
		kana: "はつか",
		zh: "二十號",
		speak: "はつか",
		mark: true,
		note: "和語"
	},
	{
		jp: "21日",
		kana: "にじゅういちにち",
		zh: "二十一號",
		speak: "にじゅういちにち"
	},
	{
		jp: "22日",
		kana: "にじゅうににち",
		zh: "二十二號",
		speak: "にじゅうににち"
	},
	{
		jp: "23日",
		kana: "にじゅうさんにち",
		zh: "二十三號",
		speak: "にじゅうさんにち"
	},
	{
		jp: "24日",
		kana: "にじゅうよっか",
		zh: "二十四號",
		speak: "にじゅうよっか",
		mark: true
	},
	{
		jp: "25日",
		kana: "にじゅうごにち",
		zh: "二十五號",
		speak: "にじゅうごにち"
	},
	{
		jp: "26日",
		kana: "にじゅうろくにち",
		zh: "二十六號",
		speak: "にじゅうろくにち"
	},
	{
		jp: "27日",
		kana: "にじゅうしちにち",
		zh: "二十七號",
		speak: "にじゅうしちにち"
	},
	{
		jp: "28日",
		kana: "にじゅうはちにち",
		zh: "二十八號",
		speak: "にじゅうはちにち"
	},
	{
		jp: "29日",
		kana: "にじゅうくにち",
		zh: "二十九號",
		speak: "にじゅうくにち"
	},
	{
		jp: "30日",
		kana: "さんじゅうにち",
		zh: "三十號",
		speak: "さんじゅうにち"
	},
	{
		jp: "31日",
		kana: "さんじゅういちにち",
		zh: "三十一號",
		speak: "さんじゅういちにち"
	}
];
var MONEY_YEN = [
	{
		jp: "1円",
		kana: "いちえん",
		zh: "1 日元",
		speak: "いちえん"
	},
	{
		jp: "2円",
		kana: "にえん",
		zh: "2 日元",
		speak: "にえん"
	},
	{
		jp: "4円",
		kana: "よえん",
		zh: "4 日元",
		speak: "よえん",
		mark: true,
		note: "不是よんえん"
	},
	{
		jp: "5円",
		kana: "ごえん",
		zh: "5 日元",
		speak: "ごえん"
	},
	{
		jp: "6円",
		kana: "ろくえん",
		zh: "6 日元",
		speak: "ろくえん"
	},
	{
		jp: "7円",
		kana: "ななえん",
		zh: "7 日元",
		speak: "ななえん"
	},
	{
		jp: "8円",
		kana: "はちえん",
		zh: "8 日元",
		speak: "はちえん"
	},
	{
		jp: "9円",
		kana: "きゅうえん",
		zh: "9 日元",
		speak: "きゅうえん"
	},
	{
		jp: "10円",
		kana: "じゅうえん",
		zh: "10 日元",
		speak: "じゅうえん"
	},
	{
		jp: "何円",
		kana: "なんえん",
		zh: "多少円",
		speak: "なんえん"
	},
	{
		jp: "いくら",
		kana: "いくら",
		zh: "多少錢",
		speak: "いくら"
	}
];
var MONEY_HUNDRED = [
	{
		jp: "100円",
		kana: "ひゃくえん",
		zh: "一百円",
		speak: "ひゃくえん"
	},
	{
		jp: "200円",
		kana: "にひゃくえん",
		zh: "二百円",
		speak: "にひゃくえん"
	},
	{
		jp: "300円",
		kana: "さんびゃくえん",
		zh: "三百円",
		speak: "さんびゃくえん",
		mark: true,
		note: "びゃく"
	},
	{
		jp: "400円",
		kana: "よんひゃくえん",
		zh: "四百円",
		speak: "よんひゃくえん"
	},
	{
		jp: "500円",
		kana: "ごひゃくえん",
		zh: "五百円",
		speak: "ごひゃくえん"
	},
	{
		jp: "600円",
		kana: "ろっぴゃくえん",
		zh: "六百円",
		speak: "ろっぴゃくえん",
		mark: true,
		note: "促音＋ぴゃく"
	},
	{
		jp: "700円",
		kana: "ななひゃくえん",
		zh: "七百円",
		speak: "ななひゃくえん"
	},
	{
		jp: "800円",
		kana: "はっぴゃくえん",
		zh: "八百円",
		speak: "はっぴゃくえん",
		mark: true,
		note: "促音＋ぴゃく"
	},
	{
		jp: "900円",
		kana: "きゅうひゃくえん",
		zh: "九百円",
		speak: "きゅうひゃくえん"
	}
];
var MONEY_THOUSAND = [
	{
		jp: "1000円",
		kana: "せんえん",
		zh: "一千円",
		speak: "せんえん"
	},
	{
		jp: "2000円",
		kana: "にせんえん",
		zh: "二千円",
		speak: "にせんえん"
	},
	{
		jp: "3000円",
		kana: "さんぜんえん",
		zh: "三千円",
		speak: "さんぜんえん",
		mark: true,
		note: "ぜん"
	},
	{
		jp: "4000円",
		kana: "よんせんえん",
		zh: "四千円",
		speak: "よんせんえん"
	},
	{
		jp: "5000円",
		kana: "ごせんえん",
		zh: "五千円",
		speak: "ごせんえん"
	},
	{
		jp: "6000円",
		kana: "ろくせんえん",
		zh: "六千円",
		speak: "ろくせんえん"
	},
	{
		jp: "7000円",
		kana: "ななせんえん",
		zh: "七千円",
		speak: "ななせんえん"
	},
	{
		jp: "8000円",
		kana: "はっせんえん",
		zh: "八千円",
		speak: "はっせんえん",
		mark: true,
		note: "促音"
	},
	{
		jp: "9000円",
		kana: "きゅうせんえん",
		zh: "九千円",
		speak: "きゅうせんえん"
	}
];
var MONEY_MAN = [
	{
		jp: "1万円",
		kana: "いちまんえん",
		zh: "一萬日元",
		speak: "いちまんえん"
	},
	{
		jp: "2万円",
		kana: "にまんえん",
		zh: "二萬日元",
		speak: "にまんえん"
	},
	{
		jp: "3万円",
		kana: "さんまんえん",
		zh: "三萬日元",
		speak: "さんまんえん"
	},
	{
		jp: "4万円",
		kana: "よんまんえん",
		zh: "四萬日元",
		speak: "よんまんえん"
	},
	{
		jp: "5万円",
		kana: "ごまんえん",
		zh: "五萬日元",
		speak: "ごまんえん"
	},
	{
		jp: "6万円",
		kana: "ろくまんえん",
		zh: "六萬日元",
		speak: "ろくまんえん"
	},
	{
		jp: "7万円",
		kana: "ななまんえん",
		zh: "七萬日元",
		speak: "ななまんえん"
	},
	{
		jp: "8万円",
		kana: "はちまんえん",
		zh: "八萬日元",
		speak: "はちまんえん"
	},
	{
		jp: "9万円",
		kana: "きゅうまんえん",
		zh: "九萬日元",
		speak: "きゅうまんえん"
	},
	{
		jp: "10万円",
		kana: "じゅうまんえん",
		zh: "十萬日元",
		speak: "じゅうまんえん"
	}
];
var WEEKDAYS = [
	{
		jp: "月曜日",
		kana: "げつようび",
		zh: "星期一",
		speak: "げつようび"
	},
	{
		jp: "火曜日",
		kana: "かようび",
		zh: "星期二",
		speak: "かようび"
	},
	{
		jp: "水曜日",
		kana: "すいようび",
		zh: "星期三",
		speak: "すいようび"
	},
	{
		jp: "木曜日",
		kana: "もくようび",
		zh: "星期四",
		speak: "もくようび"
	},
	{
		jp: "金曜日",
		kana: "きんようび",
		zh: "星期五",
		speak: "きんようび"
	},
	{
		jp: "土曜日",
		kana: "どようび",
		zh: "星期六",
		speak: "どようび"
	},
	{
		jp: "日曜日",
		kana: "にちようび",
		zh: "星期日",
		speak: "にちようび"
	},
	{
		jp: "何曜日",
		kana: "なんようび",
		zh: "星期幾",
		speak: "なんようび"
	}
];
var TE_RULES = [
	{
		group: "Ⅰ",
		ending: "う・つ・る",
		te: "って",
		example: "買う→買って／待つ→待って／帰る→帰って",
		speak: "かって"
	},
	{
		group: "Ⅰ",
		ending: "む・ぶ・ぬ",
		te: "んで",
		example: "飲む→飲んで／遊ぶ→遊んで／死ぬ→死んで",
		speak: "のんで"
	},
	{
		group: "Ⅰ",
		ending: "く",
		te: "いて",
		example: "書く→書いて",
		speak: "かいて"
	},
	{
		group: "Ⅰ",
		ending: "ぐ",
		te: "いで",
		example: "泳ぐ→泳いで",
		speak: "およいで"
	},
	{
		group: "Ⅰ",
		ending: "す",
		te: "して",
		example: "話す→話して",
		speak: "はなして"
	},
	{
		group: "Ⅰ",
		ending: "行く",
		te: "行って",
		example: "行く→行って（例外）",
		speak: "いって"
	},
	{
		group: "Ⅱ",
		ending: "る（一段）",
		te: "て",
		example: "食べる→食べて／見る→見て",
		speak: "たべて"
	},
	{
		group: "Ⅲ",
		ending: "する／来る",
		te: "して／来て",
		example: "する→して／来る→来て",
		speak: "して"
	}
];
function forms(rows) {
	const labels = {
		dict: "辞書形",
		masu: "ます形",
		te: "て形",
		ta: "た形",
		nai: "ない形",
		pot: "可能形",
		vol: "意向形",
		ba: "ば形",
		pass: "受身",
		caus: "使役"
	};
	return rows.map(([key, jp, speak]) => ({
		key,
		label: labels[key] ?? key,
		jp,
		speak
	}));
}
var VERBS = [
	{
		id: "kaku",
		group: 1,
		dict: "書く",
		kana: "かく",
		zh: "寫",
		ending: "く",
		forms: forms([
			[
				"dict",
				"書く",
				"かく"
			],
			[
				"masu",
				"書きます",
				"かきます"
			],
			[
				"te",
				"書いて",
				"かいて"
			],
			[
				"ta",
				"書いた",
				"かいた"
			],
			[
				"nai",
				"書かない",
				"かかない"
			],
			[
				"pot",
				"書ける",
				"かける"
			],
			[
				"vol",
				"書こう",
				"かこう"
			],
			[
				"ba",
				"書けば",
				"かけば"
			],
			[
				"pass",
				"書かれる",
				"かかれる"
			],
			[
				"caus",
				"書かせる",
				"かかせる"
			]
		])
	},
	{
		id: "oyogu",
		group: 1,
		dict: "泳ぐ",
		kana: "およぐ",
		zh: "游泳",
		ending: "ぐ",
		forms: forms([
			[
				"dict",
				"泳ぐ",
				"およぐ"
			],
			[
				"masu",
				"泳ぎます",
				"およぎます"
			],
			[
				"te",
				"泳いで",
				"およいで"
			],
			[
				"ta",
				"泳いだ",
				"およいだ"
			],
			[
				"nai",
				"泳がない",
				"およがない"
			],
			[
				"pot",
				"泳げる",
				"およげる"
			],
			[
				"vol",
				"泳ごう",
				"およごう"
			],
			[
				"ba",
				"泳げば",
				"およげば"
			],
			[
				"pass",
				"泳がれる",
				"およがれる"
			],
			[
				"caus",
				"泳がせる",
				"およがせる"
			]
		])
	},
	{
		id: "hanasu",
		group: 1,
		dict: "話す",
		kana: "はなす",
		zh: "說",
		ending: "す",
		forms: forms([
			[
				"dict",
				"話す",
				"はなす"
			],
			[
				"masu",
				"話します",
				"はなします"
			],
			[
				"te",
				"話して",
				"はなして"
			],
			[
				"ta",
				"話した",
				"はなした"
			],
			[
				"nai",
				"話さない",
				"はなさない"
			],
			[
				"pot",
				"話せる",
				"はなせる"
			],
			[
				"vol",
				"話そう",
				"はなそう"
			],
			[
				"ba",
				"話せば",
				"はなせば"
			],
			[
				"pass",
				"話される",
				"はなされる"
			],
			[
				"caus",
				"話させる",
				"はなさせる"
			]
		])
	},
	{
		id: "matsu",
		group: 1,
		dict: "待つ",
		kana: "まつ",
		zh: "等",
		ending: "つ",
		forms: forms([
			[
				"dict",
				"待つ",
				"まつ"
			],
			[
				"masu",
				"待ちます",
				"まちます"
			],
			[
				"te",
				"待って",
				"まって"
			],
			[
				"ta",
				"待った",
				"まった"
			],
			[
				"nai",
				"待たない",
				"またない"
			],
			[
				"pot",
				"待てる",
				"まてる"
			],
			[
				"vol",
				"待とう",
				"まとう"
			],
			[
				"ba",
				"待てば",
				"まてば"
			],
			[
				"pass",
				"待たれる",
				"またれる"
			],
			[
				"caus",
				"待たせる",
				"またせる"
			]
		])
	},
	{
		id: "kau",
		group: 1,
		dict: "買う",
		kana: "かう",
		zh: "買",
		ending: "う",
		forms: forms([
			[
				"dict",
				"買う",
				"かう"
			],
			[
				"masu",
				"買います",
				"かいます"
			],
			[
				"te",
				"買って",
				"かって"
			],
			[
				"ta",
				"買った",
				"かった"
			],
			[
				"nai",
				"買わない",
				"かわない"
			],
			[
				"pot",
				"買える",
				"かえる"
			],
			[
				"vol",
				"買おう",
				"かおう"
			],
			[
				"ba",
				"買えば",
				"かえば"
			],
			[
				"pass",
				"買われる",
				"かわれる"
			],
			[
				"caus",
				"買わせる",
				"かわせる"
			]
		])
	},
	{
		id: "kaeru",
		group: 1,
		dict: "帰る",
		kana: "かえる",
		zh: "回去",
		ending: "る（五段）",
		note: "辞書形以る結尾，但是一類。ます形是帰ります不是帰れます。",
		forms: forms([
			[
				"dict",
				"帰る",
				"かえる"
			],
			[
				"masu",
				"帰ります",
				"かえります"
			],
			[
				"te",
				"帰って",
				"かえって"
			],
			[
				"ta",
				"帰った",
				"かえった"
			],
			[
				"nai",
				"帰らない",
				"かえらない"
			],
			[
				"pot",
				"帰れる",
				"かえれる"
			],
			[
				"vol",
				"帰ろう",
				"かえろう"
			],
			[
				"ba",
				"帰れば",
				"かえれば"
			],
			[
				"pass",
				"帰られる",
				"かえられる"
			],
			[
				"caus",
				"帰らせる",
				"かえらせる"
			]
		])
	},
	{
		id: "nomu",
		group: 1,
		dict: "飲む",
		kana: "のむ",
		zh: "喝",
		ending: "む",
		forms: forms([
			[
				"dict",
				"飲む",
				"のむ"
			],
			[
				"masu",
				"飲みます",
				"のみます"
			],
			[
				"te",
				"飲んで",
				"のんで"
			],
			[
				"ta",
				"飲んだ",
				"のんだ"
			],
			[
				"nai",
				"飲まない",
				"のまない"
			],
			[
				"pot",
				"飲める",
				"のめる"
			],
			[
				"vol",
				"飲もう",
				"のもう"
			],
			[
				"ba",
				"飲めば",
				"のめば"
			],
			[
				"pass",
				"飲まれる",
				"のまれる"
			],
			[
				"caus",
				"飲ませる",
				"のませる"
			]
		])
	},
	{
		id: "asobu",
		group: 1,
		dict: "遊ぶ",
		kana: "あそぶ",
		zh: "玩",
		ending: "ぶ",
		forms: forms([
			[
				"dict",
				"遊ぶ",
				"あそぶ"
			],
			[
				"masu",
				"遊びます",
				"あそびます"
			],
			[
				"te",
				"遊んで",
				"あそんで"
			],
			[
				"ta",
				"遊んだ",
				"あそんだ"
			],
			[
				"nai",
				"遊ばない",
				"あそばない"
			],
			[
				"pot",
				"遊べる",
				"あそべる"
			],
			[
				"vol",
				"遊ぼう",
				"あそぼう"
			],
			[
				"ba",
				"遊べば",
				"あそべば"
			],
			[
				"pass",
				"遊ばれる",
				"あそばれる"
			],
			[
				"caus",
				"遊ばせる",
				"あそばせる"
			]
		])
	},
	{
		id: "shinu",
		group: 1,
		dict: "死ぬ",
		kana: "しぬ",
		zh: "死",
		ending: "ぬ",
		note: "現代日語唯一的ぬ動詞。",
		forms: forms([
			[
				"dict",
				"死ぬ",
				"しぬ"
			],
			[
				"masu",
				"死にます",
				"しにます"
			],
			[
				"te",
				"死んで",
				"しんで"
			],
			[
				"ta",
				"死んだ",
				"しんだ"
			],
			[
				"nai",
				"死なない",
				"しなない"
			],
			[
				"pot",
				"死ねる",
				"しねる"
			],
			[
				"vol",
				"死のう",
				"しのう"
			],
			[
				"ba",
				"死ねば",
				"しねば"
			],
			[
				"pass",
				"死なれる",
				"しなれる"
			],
			[
				"caus",
				"死なせる",
				"しなせる"
			]
		])
	},
	{
		id: "iku",
		group: 1,
		dict: "行く",
		kana: "いく",
		zh: "去",
		ending: "く（例外）",
		note: "て／た是行って／行った，不是行きて。",
		forms: forms([
			[
				"dict",
				"行く",
				"いく"
			],
			[
				"masu",
				"行きます",
				"いきます"
			],
			[
				"te",
				"行って",
				"いって"
			],
			[
				"ta",
				"行った",
				"いった"
			],
			[
				"nai",
				"行かない",
				"いかない"
			],
			[
				"pot",
				"行ける",
				"いける"
			],
			[
				"vol",
				"行こう",
				"いこう"
			],
			[
				"ba",
				"行けば",
				"いけば"
			],
			[
				"pass",
				"行かれる",
				"いかれる"
			],
			[
				"caus",
				"行かせる",
				"いかせる"
			]
		])
	},
	{
		id: "taberu",
		group: 2,
		dict: "食べる",
		kana: "たべる",
		zh: "吃",
		ending: "る（一段）",
		forms: forms([
			[
				"dict",
				"食べる",
				"たべる"
			],
			[
				"masu",
				"食べます",
				"たべます"
			],
			[
				"te",
				"食べて",
				"たべて"
			],
			[
				"ta",
				"食べた",
				"たべた"
			],
			[
				"nai",
				"食べない",
				"たべない"
			],
			[
				"pot",
				"食べられる",
				"たべられる"
			],
			[
				"vol",
				"食べよう",
				"たべよう"
			],
			[
				"ba",
				"食べれば",
				"たべれば"
			],
			[
				"pass",
				"食べられる",
				"たべられる"
			],
			[
				"caus",
				"食べさせる",
				"たべさせる"
			]
		])
	},
	{
		id: "miru",
		group: 2,
		dict: "見る",
		kana: "みる",
		zh: "看",
		ending: "る（一段）",
		forms: forms([
			[
				"dict",
				"見る",
				"みる"
			],
			[
				"masu",
				"見ます",
				"みます"
			],
			[
				"te",
				"見て",
				"みて"
			],
			[
				"ta",
				"見た",
				"みた"
			],
			[
				"nai",
				"見ない",
				"みない"
			],
			[
				"pot",
				"見られる",
				"みられる"
			],
			[
				"vol",
				"見よう",
				"みよう"
			],
			[
				"ba",
				"見れば",
				"みれば"
			],
			[
				"pass",
				"見られる",
				"みられる"
			],
			[
				"caus",
				"見させる",
				"みさせる"
			]
		])
	},
	{
		id: "okiru",
		group: 2,
		dict: "起きる",
		kana: "おきる",
		zh: "起床",
		ending: "る（一段）",
		forms: forms([
			[
				"dict",
				"起きる",
				"おきる"
			],
			[
				"masu",
				"起きます",
				"おきます"
			],
			[
				"te",
				"起きて",
				"おきて"
			],
			[
				"ta",
				"起きた",
				"おきた"
			],
			[
				"nai",
				"起きない",
				"おきない"
			],
			[
				"pot",
				"起きられる",
				"おきられる"
			],
			[
				"vol",
				"起きよう",
				"おきよう"
			],
			[
				"ba",
				"起きれば",
				"おきれば"
			],
			[
				"pass",
				"起きられる",
				"おきられる"
			],
			[
				"caus",
				"起きさせる",
				"おきさせる"
			]
		])
	},
	{
		id: "oshieru",
		group: 2,
		dict: "教える",
		kana: "おしえる",
		zh: "教、告訴",
		ending: "る（一段）",
		forms: forms([
			[
				"dict",
				"教える",
				"おしえる"
			],
			[
				"masu",
				"教えます",
				"おしえます"
			],
			[
				"te",
				"教えて",
				"おしえて"
			],
			[
				"ta",
				"教えた",
				"おしえた"
			],
			[
				"nai",
				"教えない",
				"おしえない"
			],
			[
				"pot",
				"教えられる",
				"おしえられる"
			],
			[
				"vol",
				"教えよう",
				"おしえよう"
			],
			[
				"ba",
				"教えれば",
				"おしえれば"
			],
			[
				"pass",
				"教えられる",
				"おしえられる"
			],
			[
				"caus",
				"教えさせる",
				"おしえさせる"
			]
		])
	},
	{
		id: "suru",
		group: 3,
		dict: "する",
		kana: "する",
		zh: "做",
		ending: "サ変",
		forms: forms([
			[
				"dict",
				"する",
				"する"
			],
			[
				"masu",
				"します",
				"します"
			],
			[
				"te",
				"して",
				"して"
			],
			[
				"ta",
				"した",
				"した"
			],
			[
				"nai",
				"しない",
				"しない"
			],
			[
				"pot",
				"できる",
				"できる"
			],
			[
				"vol",
				"しよう",
				"しよう"
			],
			[
				"ba",
				"すれば",
				"すれば"
			],
			[
				"pass",
				"される",
				"される"
			],
			[
				"caus",
				"させる",
				"させる"
			]
		])
	},
	{
		id: "kuru",
		group: 3,
		dict: "来る",
		kana: "くる",
		zh: "來",
		ending: "カ変",
		forms: forms([
			[
				"dict",
				"来る",
				"くる"
			],
			[
				"masu",
				"来ます",
				"きます"
			],
			[
				"te",
				"来て",
				"きて"
			],
			[
				"ta",
				"来た",
				"きた"
			],
			[
				"nai",
				"来ない",
				"こない"
			],
			[
				"pot",
				"来られる",
				"こられる"
			],
			[
				"vol",
				"来よう",
				"こよう"
			],
			[
				"ba",
				"来れば",
				"くれば"
			],
			[
				"pass",
				"来られる",
				"こられる"
			],
			[
				"caus",
				"来させる",
				"こさせる"
			]
		])
	},
	{
		id: "benkyou",
		group: 3,
		dict: "勉強する",
		kana: "べんきょうする",
		zh: "學習",
		ending: "サ変",
		note: "名詞＋する 跟「する」同一套。",
		forms: forms([
			[
				"dict",
				"勉強する",
				"べんきょうする"
			],
			[
				"masu",
				"勉強します",
				"べんきょうします"
			],
			[
				"te",
				"勉強して",
				"べんきょうして"
			],
			[
				"ta",
				"勉強した",
				"べんきょうした"
			],
			[
				"nai",
				"勉強しない",
				"べんきょうしない"
			],
			[
				"pot",
				"勉強できる",
				"べんきょうできる"
			],
			[
				"vol",
				"勉強しよう",
				"べんきょうしよう"
			],
			[
				"ba",
				"勉強すれば",
				"べんきょうすれば"
			],
			[
				"pass",
				"勉強される",
				"べんきょうされる"
			],
			[
				"caus",
				"勉強させる",
				"べんきょうさせる"
			]
		])
	}
];
var GROUP_GUIDE = [
	{
		group: 1,
		title: "第一類・五段",
		aka: "う動詞",
		how: "ます形詞幹的最後假名在い段：書きます、飲みます、帰ります。辞書形多以う段結尾（く・ぐ・す・つ・ぬ・ぶ・む・る・う）。",
		masu: "う段 → い段 ＋ ます（書く→書きます）",
		te: "う・つ・る→って／む・ぶ・ぬ→んで／く→いて／ぐ→いで／す→して。行く→行って。",
		nai: "う段 → あ段 ＋ ない（書く→書かない；買う→買わない）",
		pot: "う段 → え段 ＋ る（書く→書ける）",
		vol: "う段 → お段 ＋ う（書く→書こう）",
		ba: "う段 → え段 ＋ ば（書く→書けば）",
		pass: "う段 → あ段 ＋ れる（書く→書かれる）",
		caus: "う段 → あ段 ＋ せる（書く→書かせる）"
	},
	{
		group: 2,
		title: "第二類・一段",
		aka: "る動詞",
		how: "ます形詞幹的最後假名在え段或い段，且去掉ます後直接接る：食べます→食べる、見ます→見る。",
		masu: "る → ます（食べる→食べます）",
		te: "る → て（食べる→食べて）",
		nai: "る → ない（食べる→食べない）",
		pot: "る → られる（食べる→食べられる）",
		vol: "る → よう（食べる→食べよう）",
		ba: "る → れば（食べる→食べれば）",
		pass: "る → られる（與可能形同形）",
		caus: "る → させる（食べる→食べさせる）"
	},
	{
		group: 3,
		title: "第三類・不規則",
		aka: "する／来る",
		how: "只有する（含勉強する、コピーする）和来る。必須逐個記。",
		masu: "する→します／来る→来ます",
		te: "する→して／来る→来て",
		nai: "する→しない／来る→来ない",
		pot: "する→できる／来る→来られる",
		vol: "する→しよう／来る→来よう",
		ba: "する→すれば／来る→来れば",
		pass: "する→される／来る→来られる",
		caus: "する→させる／来る→来させる"
	}
];
function RefPage() {
	const [section, setSection] = (0, import_react.useState)("time");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			kicker: "REFERENCE",
			title: "補充資料",
			description: "報時、月份、日期、錢、星期，以及第一／二／三類動詞的活用。點格子即可朗讀。日本沒有三十二號，日子列到三十一日。"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-16 z-10 -mx-4 mb-6 border-b border-border/80 bg-bg/90 px-4 py-2 backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 overflow-x-auto pb-1",
				children: REF_SECTIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSection(item.id),
					className: cn("h-11 shrink-0 rounded-md px-3 text-sm", section === item.id ? "bg-primary text-primary-fg" : "bg-surface text-muted"),
					children: item.label
				}, item.id))
			})
		}),
		section === "time" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeSection, {}) : null,
		section === "month" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
			kicker: "がつ",
			title: "月份",
			note: "四月しがつ、七月しちがつ、九月くがつ。問「何月」なんがつ。",
			items: MONTHS
		}) : null,
		section === "day" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
			kicker: "にち／か",
			title: "日子（1–31 日）",
			note: "1–10、14、20、24 日是和語讀法，其餘多為音讀＋にち。沒有三十二號。",
			items: DAYS,
			cols: "day"
		}) : null,
		section === "money" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoneySection, {}) : null,
		section === "week" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
			kicker: "ようび",
			title: "星期",
			note: "今週の月曜日、来週の金曜日。問「何曜日ですか」。",
			items: WEEKDAYS
		}) : null,
		section === "verb" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerbSection, {}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-10 text-sm text-muted",
			children: [
				"回到",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/start",
					className: "mx-1 text-primary underline-offset-2 hover:underline",
					children: "五十音"
				}),
				"或",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mx-1 text-primary underline-offset-2 hover:underline",
					children: "課程"
				}),
				"。"
			]
		})
	] });
}
function TimeSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				kicker: "じ",
				title: "一點到十二點",
				note: "4時よじ、7時しちじ、9時くじ。半＝30 分，例如 4時半＝よじはん。",
				items: HOURS
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-primary",
					children: "ほか"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-3 mt-1 font-display text-xl text-ink",
					children: "報時用語"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemGrid, { items: TIME_EXTRA })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-primary",
					children: "ふん／ぷん"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-2xl text-ink",
					children: "一分到五十九分"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 mt-1 text-sm text-muted",
					children: "1・3・4・6・8・10 分以及整十多用「ぷん」（促音：いっぷん、ろっぷん、はっぷん、じゅっぷん）。其餘用「ふん」。標了色的是容易唸錯的。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemGrid, {
					items: MINUTES,
					compact: true
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-xl bg-primary-soft/70 px-4 py-3 text-sm text-ink",
				children: "例句：今 4時5分です＝いま よじ ごふん です。午後 2時半＝ごご にじはん。"
			})
		]
	});
}
function MoneySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				kicker: "えん",
				title: "円",
				note: "4円よえん。問價錢：いくらですか／何円ですか。",
				items: MONEY_YEN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				kicker: "ひゃくえん",
				title: "百円",
				note: "300 さんびゃく、600 ろっぴゃく、800 はっぴゃく。",
				items: MONEY_HUNDRED
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				kicker: "せんえん",
				title: "千円",
				note: "3000 さんぜん、8000 はっせん。",
				items: MONEY_THOUSAND
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				kicker: "まんえん",
				title: "万円",
				note: "一萬＝いちまんえん。十萬＝じゅうまんえん。",
				items: MONEY_MAN
			})
		]
	});
}
function VerbSection() {
	const [group, setGroup] = (0, import_react.useState)(0);
	const [verbId, setVerbId] = (0, import_react.useState)(VERBS[0]?.id ?? "kaku");
	const list = (0, import_react.useMemo)(() => group === 0 ? VERBS : VERBS.filter((v) => v.group === group), [group]);
	const verb = list.find((v) => v.id === verbId) ?? list[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-primary",
					children: "グループ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-2xl text-ink",
					children: "怎麼分三類"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "看ます形最穩：詞幹在い段且後面不是「え／い＋ます→る」的單純一段，多半是一類。する／来る永遠是三類。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3 lg:grid-cols-3",
					children: GROUP_GUIDE.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "paper-card rounded-xl p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-wide text-primary",
								children: g.aka
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-xl text-ink",
								children: g.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: g.how
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-3 space-y-1.5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "ます",
										v: g.masu
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "て",
										v: g.te
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "ない",
										v: g.nai
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "可能",
										v: g.pot
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "意向",
										v: g.vol
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "ば",
										v: g.ba
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "受身",
										v: g.pass
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "使役",
										v: g.caus
									})
								]
							})
						]
					}, g.group))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-primary",
					children: "て形"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-3 mt-1 font-display text-xl text-ink",
					children: "て形／た形怎麼變"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto rounded-xl border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[28rem] text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border bg-surface",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-medium text-muted",
									children: "類"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-medium text-muted",
									children: "結尾"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-medium text-muted",
									children: "て形"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-medium text-muted",
									children: "例子"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: TE_RULES.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border last:border-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-muted",
									children: rule.group
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 font-medium text-ink",
									children: rule.ending
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 font-display text-ink",
									children: rule.te
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "text-left text-muted hover:text-ink",
										onClick: () => speakJapanese(rule.speak),
										children: rule.example
									})
								})
							]
						}, `${rule.group}-${rule.ending}`)) })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-subtle",
					children: "た形：て→た、で→だ（書いて→書いた、飲んで→飲んだ）。"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-primary",
					children: "活用表"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-xl text-ink",
					children: "選一個動詞看全部轉變"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-1.5",
					children: [
						0,
						1,
						2,
						3
					].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setGroup(g);
							const next = (g === 0 ? VERBS : VERBS.filter((v) => v.group === g))[0];
							if (next) setVerbId(next.id);
						},
						className: cn("h-10 rounded-md px-3 text-sm", group === g ? "bg-primary text-primary-fg" : "border border-border bg-surface text-muted"),
						children: g === 0 ? "全部" : g === 1 ? "一類" : g === 2 ? "二類" : "三類"
					}, g))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-1.5",
					children: list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setVerbId(item.id),
						className: cn("h-10 rounded-md px-3 text-sm", verb?.id === item.id ? "bg-primary-soft text-primary" : "border border-border bg-surface text-ink"),
						children: item.dict
					}, item.id))
				}),
				verb ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerbCard, { verb }) : null
			] })
		]
	});
}
function VerbCard({ verb }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "paper-card mt-4 rounded-2xl p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tracking-wide text-primary",
						children: [
							verb.group === 1 ? "第一類・五段" : verb.group === 2 ? "第二類・一段" : "第三類・不規則",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-1 text-subtle",
								children: "·"
							}),
							verb.ending
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mt-1 font-display text-3xl text-ink",
						children: verb.dict
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							verb.kana,
							" · ",
							verb.zh
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => speakJapanese(verb.kana),
					className: "inline-flex h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm text-primary-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }), "朗讀辞書形"]
				})]
			}),
			verb.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: verb.note
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-2 sm:grid-cols-2",
				children: verb.forms.map((form) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => speakJapanese(form.speak),
					className: "flex min-h-14 items-center justify-between gap-3 rounded-lg border border-border bg-surface px-3 py-2 text-left hover:bg-primary-soft/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-[11px] tracking-wide text-subtle",
						children: form.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg text-ink",
						children: form.jp
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4 shrink-0 text-primary" })]
				}, form.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs leading-relaxed text-subtle",
				children: "常用接續：てください／ないでください／てもいい／てはいけない／なければならない／たことがある／ている。可能對象多用「が」（漢字が書けます）。"
			})
		]
	});
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "w-10 shrink-0 text-xs text-subtle",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-ink",
			children: v
		})]
	});
}
function Block({ kicker, title, note, items, cols }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-wide text-primary",
			children: kicker
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-1 font-display text-2xl text-ink",
			children: title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 mt-1 text-sm text-muted",
			children: note
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemGrid, {
			items,
			compact: cols === "day"
		})
	] });
}
function ItemGrid({ items, compact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("grid gap-1.5", compact ? "grid-cols-3 sm:grid-cols-6" : "grid-cols-3 sm:grid-cols-4 lg:grid-cols-6"),
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => speakJapanese(item.speak),
			className: cn("paper-card flex min-h-20 flex-col items-center justify-center rounded-xl p-2 text-center hover:shadow-lift", item.mark && "ring-1 ring-primary/25"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-xl leading-none text-ink sm:text-2xl",
					children: item.jp
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 text-[11px] text-muted",
					children: item.kana
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] text-subtle",
					children: item.zh
				})
			]
		}, item.jp))
	});
}
//#endregion
export { RefPage as component };
