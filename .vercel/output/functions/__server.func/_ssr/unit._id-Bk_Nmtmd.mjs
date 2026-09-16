import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { R as notFound, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { S as ArrowLeft, n as Volume2, t as X, v as Check } from "../_libs/lucide-react.mjs";
import { c as LESSON_UNITS, l as cn, n as Route, o as PageTitle } from "./router-B2yMlw1C.mjs";
import { t as Button } from "./button-Doq13_8c.mjs";
import { t as LESSONS } from "./lessons-DuTMC9xE.mjs";
import { t as speakJapanese } from "./speech-CizvjyRI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/unit._id-Bk_Nmtmd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var UNIT_REVIEWS = [
	{
		id: "A",
		label: "復習 A",
		title: "判斷・指示・場所",
		lessons: LESSON_UNITS[0].lessons,
		recap: [
			{
				pattern: "N1は N2です／じゃありません",
				meaning: "判斷句"
			},
			{
				pattern: "これ／それ／あれは Nです",
				meaning: "指示代名詞"
			},
			{
				pattern: "ここ／そこ／あそこは Nです",
				meaning: "指示場所"
			},
			{
				pattern: "これを ください",
				meaning: "請給我這個"
			}
		],
		practice: [
			{
				id: "ua-1",
				type: "mcq",
				prompt: "我是學生",
				options: [
					"私は学生です。",
					"私を学生です。",
					"私は学生います。",
					"私は学生でしたかです。"
				],
				answer: "私は学生です。",
				explanation: "判斷句：N1は N2です。"
			},
			{
				id: "ua-2",
				type: "mcq",
				prompt: "那個人不是老師（離自己遠、離對方也遠）",
				options: [
					"それは先生じゃありません。",
					"あれは先生じゃありません。",
					"これは先生じゃありません。",
					"あれは先生にいます。"
				],
				answer: "あれは先生じゃありません。",
				explanation: "遠離雙方用あれ。"
			},
			{
				id: "ua-3",
				type: "fill",
				prompt: "這本是我的書：この本は私＿本です。",
				answer: "の",
				explanation: "の 表所屬。"
			},
			{
				id: "ua-4",
				type: "mcq",
				prompt: "廁所在哪裡？",
				options: [
					"トイレはどこですか。",
					"トイレはだれですか。",
					"トイレはいつですか。",
					"トイレはいくらですか。"
				],
				answer: "トイレはどこですか。",
				explanation: "場所用どこ。"
			},
			{
				id: "ua-5",
				type: "mcq",
				prompt: "請給我這個",
				options: [
					"これをください。",
					"ここをください。",
					"それがいます。",
					"あれは学生です。"
				],
				answer: "これをください。",
				explanation: "買東西／點餐的基本句。"
			},
			{
				id: "ua-6",
				type: "tf",
				prompt: "「も」可以替換「は」，表示「也」。",
				options: ["正確", "錯誤"],
				answer: "正確",
				explanation: "サントスさんも会社員です。"
			},
			{
				id: "ua-7",
				type: "mcq",
				prompt: "那位不是老師",
				options: [
					"あの方は先生じゃありません。",
					"あの方を先生じゃありません。",
					"あの方は先生いません。",
					"あの方に先生じゃありません。"
				],
				answer: "あの方は先生じゃありません。",
				explanation: "否定判斷：じゃありません。禮貌稱人用あの方。"
			},
			{
				id: "ua-8",
				type: "listen",
				prompt: "林是什麼身分？",
				audio: "男：林さんは学生ですか。女：いいえ、会社員です。エンジニアです。",
				options: [
					"公司職員／工程師",
					"學生",
					"老師",
					"醫生"
				],
				answer: "公司職員／工程師",
				explanation: "いいえ、会社員です。エンジニアです。"
			}
		]
	},
	{
		id: "B",
		label: "復習 B",
		title: "時間・移動・動作・授受",
		lessons: LESSON_UNITS[1].lessons,
		recap: [
			{
				pattern: "今 4時5分です",
				meaning: "報時"
			},
			{
				pattern: "6時に 起きます",
				meaning: "時間點＋動作"
			},
			{
				pattern: "京都へ 行きます",
				meaning: "移動"
			},
			{
				pattern: "本を 読みます",
				meaning: "他動詞＋を"
			},
			{
				pattern: "Nに Nを あげます／もらいます",
				meaning: "授受"
			}
		],
		practice: [
			{
				id: "ub-1",
				type: "mcq",
				prompt: "我每天六點起床",
				options: [
					"毎朝6時に起きます。",
					"毎朝6時を起きます。",
					"毎朝6時で起きます。",
					"毎朝6時が起きます。"
				],
				answer: "毎朝6時に起きます。",
				explanation: "時間點用に。"
			},
			{
				id: "ub-2",
				type: "mcq",
				prompt: "坐計程車回家",
				options: [
					"タクシーでうちへ帰ります。",
					"タクシーにうちへ帰ります。",
					"タクシーをうちへ帰ります。",
					"タクシーへうちで帰ります。"
				],
				answer: "タクシーでうちへ帰ります。",
				explanation: "交通工具用で，目的地用へ。"
			},
			{
				id: "ub-3",
				type: "fill",
				prompt: "在車站買報紙：駅＿新聞を買います。",
				answer: "で",
				explanation: "動作發生的場所用で。"
			},
			{
				id: "ub-4",
				type: "mcq",
				prompt: "一起去神戶好嗎？",
				options: [
					"いっしょに神戸へ行きませんか。",
					"いっしょに神戸を行きましょうか本。",
					"いっしょが神戸へ行きますか。",
					"いっしょに神戸に行きませんです。"
				],
				answer: "いっしょに神戸へ行きませんか。",
				explanation: "ませんか 表邀請。"
			},
			{
				id: "ub-5",
				type: "mcq",
				prompt: "我給木村花",
				options: [
					"木村さんに花をあげます。",
					"木村さんを花にあげます。",
					"木村さんへ花がもらいます。",
					"木村さんに花をもらいます。"
				],
				answer: "木村さんに花をあげます。",
				explanation: "給別人用あげます，接受者用に。"
			},
			{
				id: "ub-6",
				type: "tf",
				prompt: "「もう」表示已經，常接完成的動作。",
				options: ["正確", "錯誤"],
				answer: "正確",
				explanation: "もうメールを送りました。"
			},
			{
				id: "ub-7",
				type: "mcq",
				prompt: "我從木村那裡拿到巧克力",
				options: [
					"木村さんにチョコレートをもらいました。",
					"木村さんにチョコレートをあげました。",
					"木村さんをチョコレートにもらいました。",
					"木村さんへチョコレートがあげます。"
				],
				answer: "木村さんにチョコレートをもらいました。",
				explanation: "從對方拿到用もらいます，來源用に。"
			},
			{
				id: "ub-8",
				type: "listen",
				prompt: "兩人要怎麼去神戶？",
				audio: "女：神戸へどうやって行きますか。男：電車で行きます。いっしょに行きませんか。",
				options: [
					"坐電車，並邀請一起去",
					"坐計程車",
					"走路",
					"取消行程"
				],
				answer: "坐電車，並邀請一起去",
				explanation: "電車で行きます。いっしょに行きませんか。"
			}
		]
	},
	{
		id: "C",
		label: "復習 C",
		title: "形容・好惡・存在・數量",
		lessons: LESSON_UNITS[2].lessons,
		recap: [
			{
				pattern: "Nは きれいです／高いです",
				meaning: "い・な形容詞"
			},
			{
				pattern: "Nが 好きです／わかります",
				meaning: "好惡與能力"
			},
			{
				pattern: "場所に Nがあります／います",
				meaning: "存在"
			},
			{
				pattern: "Nが みっつ／3枚 あります",
				meaning: "數量"
			},
			{
				pattern: "N1は N2より／いちばん",
				meaning: "比較"
			}
		],
		practice: [
			{
				id: "uc-1",
				type: "mcq",
				prompt: "櫻花是美麗的花",
				options: [
					"桜はきれいな花です。",
					"桜はきれい花です。",
					"桜はきれいの花です。",
					"桜はきれかった花です。"
				],
				answer: "桜はきれいな花です。",
				explanation: "な形容詞修飾名詞要加な。"
			},
			{
				id: "uc-2",
				type: "mcq",
				prompt: "我喜歡音樂",
				options: [
					"音楽が好きです。",
					"音楽を好きです。",
					"音楽は好きをです。",
					"音楽に好きです。"
				],
				answer: "音楽が好きです。",
				explanation: "好き的對象用が。"
			},
			{
				id: "uc-3",
				type: "mcq",
				prompt: "公園裡有貓",
				options: [
					"公園に猫がいます。",
					"公園に猫があります。",
					"公園で猫がいます。",
					"公園を猫があります。"
				],
				answer: "公園に猫がいます。",
				explanation: "動物用います。"
			},
			{
				id: "uc-4",
				type: "fill",
				prompt: "郵票三張：切手が 3＿ あります。",
				answer: "枚",
				explanation: "紙類用枚。"
			},
			{
				id: "uc-5",
				type: "mcq",
				prompt: "昨天很冷",
				options: [
					"昨日は寒かったです。",
					"昨日は寒いでした。",
					"昨日は寒くでした。",
					"昨日は寒いでしたかです。"
				],
				answer: "昨日は寒かったです。",
				explanation: "い形容詞過去：かったです。"
			},
			{
				id: "uc-6",
				type: "mcq",
				prompt: "電車和公車哪個比較快？",
				options: [
					"電車とバスとどちらが速いですか。",
					"電車とバスとどれが速いですか。",
					"電車よりバスどちら速いです。",
					"電車はバスがいちばん速いですか。"
				],
				answer: "電車とバスとどちらが速いですか。",
				explanation: "二者用どちら。"
			},
			{
				id: "uc-7",
				type: "mcq",
				prompt: "便利商店在那邊",
				options: [
					"あそこにコンビニがあります。",
					"あそこにコンビニがいます。",
					"あそこでコンビニがあります。",
					"あそこをコンビニがあります。"
				],
				answer: "あそこにコンビニがあります。",
				explanation: "無生命用あります，場所用に。"
			},
			{
				id: "uc-8",
				type: "listen",
				prompt: "一年之中她最喜歡哪個季節？",
				audio: "男：一年でどの季節がいちばん好きですか。女：夏がいちばん好きです。海で泳ぎますから。",
				options: [
					"夏天",
					"春天",
					"冬天",
					"秋天"
				],
				answer: "夏天",
				explanation: "夏がいちばん好きです。"
			}
		]
	},
	{
		id: "D",
		label: "復習 D",
		title: "希望・て形・許可・順序",
		lessons: LESSON_UNITS[3].lessons,
		recap: [
			{
				pattern: "Nが ほしいです／Vます たいです",
				meaning: "想要／想做"
			},
			{
				pattern: "Vます に 行きます",
				meaning: "為了做某事而去"
			},
			{
				pattern: "Vて ください／Vましょうか",
				meaning: "請……／要我……嗎"
			},
			{
				pattern: "Vています／持っています",
				meaning: "進行・持有"
			},
			{
				pattern: "Vても いいですか",
				meaning: "可以……嗎"
			},
			{
				pattern: "Vて、Vて／Vてから／くて・で",
				meaning: "順序與並列"
			}
		],
		practice: [
			{
				id: "ud-1",
				type: "mcq",
				prompt: "我想要一本新辭典",
				options: [
					"新しい辞書が欲しいです。",
					"新しい辞書を欲しいです。",
					"新しい辞書は欲しいをです。",
					"新しい辞書に欲しいです。"
				],
				answer: "新しい辞書が欲しいです。",
				explanation: "ほしい的對象用が。"
			},
			{
				id: "ud-2",
				type: "mcq",
				prompt: "去吃午飯",
				options: [
					"昼ごはんを食べに行きます。",
					"昼ごはんを食べるに行きます。",
					"昼ごはんに食べ行きます。",
					"昼ごはんを食べますに行きます。"
				],
				answer: "昼ごはんを食べに行きます。",
				explanation: "ます形去掉ます＋に行きます。"
			},
			{
				id: "ud-3",
				type: "mcq",
				prompt: "請等一下",
				options: [
					"ちょっと待ってください。",
					"ちょっと待ちますください。",
					"ちょっと待てください。",
					"ちょっと待つください。"
				],
				answer: "ちょっと待ってください。",
				explanation: "て形＋ください。"
			},
			{
				id: "ud-4",
				type: "mcq",
				prompt: "可以拍照嗎？",
				options: [
					"写真を撮ってもいいですか。",
					"写真を撮ってはいけませんですか。",
					"写真を撮るてもいいです。",
					"写真を撮ってありますかいい。"
				],
				answer: "写真を撮ってもいいですか。",
				explanation: "て形＋もいいですか。"
			},
			{
				id: "ud-5",
				type: "fill",
				prompt: "他現在正在打電話：今電話をかけ＿＿。",
				answer: "ています",
				explanation: "進行用ています。"
			},
			{
				id: "ud-6",
				type: "mcq",
				prompt: "洗完澡再吃飯",
				options: [
					"シャワーを浴びてから食事します。",
					"シャワーを浴びるから食事します。",
					"シャワーを浴びて食事しますから。",
					"シャワーを浴びましたからに食事。"
				],
				answer: "シャワーを浴びてから食事します。",
				explanation: "てから＝之後。"
			},
			{
				id: "ud-7",
				type: "mcq",
				prompt: "這房間又寬又亮",
				options: [
					"この部屋は広くて明るいです。",
					"この部屋は広いて明るいです。",
					"この部屋は広くで明るいです。",
					"この部屋は広いで明るいです。"
				],
				answer: "この部屋は広くて明るいです。",
				explanation: "い形容詞：くて。"
			},
			{
				id: "ud-8",
				type: "listen",
				prompt: "男子現在在做什麼？",
				audio: "ミラーさんはいまでんわをかけています。ちょっとまってください。",
				options: [
					"正在打電話",
					"已經掛斷",
					"在吃飯",
					"在睡覺"
				],
				answer: "正在打電話",
				explanation: "電話をかけています。"
			},
			{
				id: "ud-9",
				type: "mcq",
				prompt: "要我幫你拿行李嗎？",
				options: [
					"荷物を持ちましょうか。",
					"荷物を持ってくださいか。",
					"荷物を持ちませんか荷物。",
					"荷物を持っていますかしましょう。"
				],
				answer: "荷物を持ちましょうか。",
				explanation: "主動提出幫忙用ましょうか。"
			},
			{
				id: "ud-10",
				type: "tf",
				prompt: "「住んでいます」可以表示居住的狀態，不一定是此刻正在搬進去。",
				options: ["正確", "錯誤"],
				answer: "正確",
				explanation: "ています 也表持續狀態：住んでいる、持っている。"
			},
			{
				id: "ud-11",
				type: "listen",
				prompt: "女子被允許做什麼？",
				audio: "女：ここでしゃしんをとってもいいですか。男：ええ、いいですよ。フラッシュはつかないでください。",
				options: [
					"可以拍照，但不要用閃光燈",
					"禁止拍照",
					"必須用閃光燈",
					"只能錄影"
				],
				answer: "可以拍照，但不要用閃光燈",
				explanation: "撮ってもいい；フラッシュはつかないで。"
			}
		]
	},
	{
		id: "E",
		label: "復習 E",
		title: "禁止・可能・經驗",
		lessons: LESSON_UNITS[4].lessons,
		recap: [
			{
				pattern: "Vないで ください",
				meaning: "請不要"
			},
			{
				pattern: "Vなければなりません",
				meaning: "必須"
			},
			{
				pattern: "Vなくても いいです",
				meaning: "不必"
			},
			{
				pattern: "Vことができます／趣味は Vことです",
				meaning: "能夠／興趣是"
			},
			{
				pattern: "Vた ことがあります",
				meaning: "曾經"
			},
			{
				pattern: "Vたり Vたり／なります",
				meaning: "做做這個那個／變成"
			}
		],
		practice: [
			{
				id: "ue-1",
				type: "mcq",
				prompt: "請不要拍照",
				options: [
					"写真を撮らないでください。",
					"写真を撮ってくださいない。",
					"写真を撮りますないで。",
					"写真を撮ってはいいです。"
				],
				answer: "写真を撮らないでください。",
				explanation: "ないでください。"
			},
			{
				id: "ue-2",
				type: "mcq",
				prompt: "必須出示護照",
				options: [
					"パスポートを見せなければなりません。",
					"パスポートを見せなくてもいいです。",
					"パスポートを見せないでください。",
					"パスポートを見せることがあります。"
				],
				answer: "パスポートを見せなければなりません。",
				explanation: "なければ なりません＝必須。"
			},
			{
				id: "ue-3",
				type: "tf",
				prompt: "星期天不必早起：日曜日は早く起きなくてもいいです。",
				options: ["正確", "錯誤"],
				answer: "正確",
				explanation: "なくてもいい＝不必。"
			},
			{
				id: "ue-4",
				type: "fill",
				prompt: "會讀漢字：漢字を読むこと＿できます。",
				answer: "が",
				explanation: "ことができる。"
			},
			{
				id: "ue-5",
				type: "mcq",
				prompt: "看過相撲",
				options: [
					"相撲を見たことがあります。",
					"相撲を見ることがありますます。",
					"相撲を見ますことがあります。",
					"相撲を見てことがあります。"
				],
				answer: "相撲を見たことがあります。",
				explanation: "た形＋ことがある。"
			},
			{
				id: "ue-6",
				type: "mcq",
				prompt: "放假時打網球或散步",
				options: [
					"テニスをしたり散歩に行ったりします。",
					"テニスをしたりします散歩。",
					"テニスをしてたり散歩たり。",
					"テニスをすると散歩したりです。"
				],
				answer: "テニスをしたり散歩に行ったりします。",
				explanation: "たり…たりします。"
			},
			{
				id: "ue-7",
				type: "mcq",
				prompt: "天氣會漸漸熱起來",
				options: [
					"だんだん暑くなります。",
					"だんだん暑いなります。",
					"だんだん暑いになります。",
					"だんだん暑くします。"
				],
				answer: "だんだん暑くなります。",
				explanation: "い形容詞：くなります。"
			},
			{
				id: "ue-8",
				type: "listen",
				prompt: "星期天一定要早起嗎？",
				audio: "にちようびははやくおきなくてもいいです。ゆっくりやすみます。",
				options: [
					"不必早起",
					"必須早起",
					"不能休息",
					"要上班"
				],
				answer: "不必早起",
				explanation: "起きなくてもいいです。"
			},
			{
				id: "ue-9",
				type: "mcq",
				prompt: "我的興趣是看電影",
				options: [
					"趣味は映画を見ることです。",
					"趣味は映画を見ますことです。",
					"趣味は映画を見てことです。",
					"趣味は映画を見たことですです。"
				],
				answer: "趣味は映画を見ることです。",
				explanation: "趣味は V辞書形 ことです。"
			},
			{
				id: "ue-10",
				type: "listen",
				prompt: "男子有沒有吃過壽司？",
				audio: "女：日本りょうりをたべたことがありますか。男：すしはたべたことがあります。さしみはまだです。",
				options: [
					"吃過壽司，還沒吃過生魚片",
					"兩種都沒吃過",
					"只吃過生魚片",
					"每天都吃"
				],
				answer: "吃過壽司，還沒吃過生魚片",
				explanation: "すしは食べたことがある。刺身はまだ。"
			}
		]
	},
	{
		id: "F",
		label: "復習 F",
		title: "普通形・引用・修飾",
		lessons: LESSON_UNITS[5].lessons,
		recap: [
			{
				pattern: "食べる／食べない／食べた",
				meaning: "動詞普通形"
			},
			{
				pattern: "高い／きれいだ／学生だ",
				meaning: "形容詞・名詞普通形"
			},
			{
				pattern: "〜と 思います／〜と 言いました",
				meaning: "認為／說"
			},
			{
				pattern: "V普通形 ＋ N",
				meaning: "連體修飾"
			},
			{
				pattern: "時間が ありません",
				meaning: "沒時間做……"
			}
		],
		practice: [
			{
				id: "uf-1",
				type: "mcq",
				prompt: "（普通形）他昨天沒來",
				options: [
					"彼は昨日来なかった。",
					"彼は昨日来ませんだった。",
					"彼は昨日来ないでした。",
					"彼は昨日来てなかったです。"
				],
				answer: "彼は昨日来なかった。",
				explanation: "動詞普通形否定過去：なかった。"
			},
			{
				id: "uf-2",
				type: "mcq",
				prompt: "我覺得明天會下雨",
				options: [
					"明日雨が降ると思います。",
					"明日雨が降りますと思います。",
					"明日雨が降ってと思います。",
					"明日雨が降るを思います。"
				],
				answer: "明日雨が降ると思います。",
				explanation: "普通形＋と思います。"
			},
			{
				id: "uf-3",
				type: "mcq",
				prompt: "跟爸爸說想留學",
				options: [
					"父に留学したいと言いました。",
					"父を留学したいと思います言いました。",
					"父に留学しますと言いますたい。",
					"父が留学したいで言いました。"
				],
				answer: "父に留学したいと言いました。",
				explanation: "人に＋普通形＋と言います。"
			},
			{
				id: "uf-4",
				type: "mcq",
				prompt: "這是米勒做的蛋糕",
				options: [
					"これはミラーさんが作ったケーキです。",
					"これはミラーさんが作りますケーキです。",
					"これはミラーさんを作ったケーキです。",
					"これはミラーさんが作るでしたケーキです。"
				],
				answer: "これはミラーさんが作ったケーキです。",
				explanation: "た形修飾名詞。"
			},
			{
				id: "uf-5",
				type: "fill",
				prompt: "那邊的人是米勒：あそこに＿人はミラーさんです。",
				answer: "いる",
				explanation: "動詞辞書形修飾名詞。"
			},
			{
				id: "uf-6",
				type: "mcq",
				prompt: "沒時間購物",
				options: [
					"買い物に行く時間がありません。",
					"買い物に行きます時間がありません。",
					"買い物に行ったは時間がありません。",
					"買い物に行くが時間いません。"
				],
				answer: "買い物に行く時間がありません。",
				explanation: "V辞書形＋時間がありません。"
			},
			{
				id: "uf-7",
				type: "tf",
				prompt: "「疲れたでしょう？」用來確認對方的狀態。",
				options: ["正確", "錯誤"],
				answer: "正確",
				explanation: "でしょう？＝大概／吧。"
			},
			{
				id: "uf-8",
				type: "listen",
				prompt: "這蛋糕是誰做的？",
				audio: "これはミラーさんがつくったケーキです。とてもおいしいです。",
				options: [
					"米勒",
					"佐藤",
					"店裡買的",
					"不知道"
				],
				answer: "米勒",
				explanation: "ミラーさんが作った。"
			},
			{
				id: "uf-9",
				type: "mcq",
				prompt: "（普通形）今天是我生日",
				options: [
					"今日は僕の誕生日だ。",
					"今日は僕の誕生日ですだ。",
					"今日は僕の誕生日だったです。",
					"今日は僕の誕生日にだ。"
				],
				answer: "今日は僕の誕生日だ。",
				explanation: "名詞普通形：だ。"
			},
			{
				id: "uf-10",
				type: "listen",
				prompt: "她覺得明天天氣怎樣？",
				audio: "男：あしたははれるとおもいますか。女：ううん、あめがふるでしょう。かさをもっていったほうがいいよ。",
				options: [
					"大概會下雨，最好帶傘",
					"一定放晴",
					"不知道",
					"已經在下雨"
				],
				answer: "大概會下雨，最好帶傘",
				explanation: "雨が降るでしょう。"
			}
		]
	},
	{
		id: "G",
		label: "復習 G",
		title: "時・授受・條件",
		lessons: LESSON_UNITS[6].lessons,
		recap: [
			{
				pattern: "Vる／た とき",
				meaning: "……的時候"
			},
			{
				pattern: "Vる と",
				meaning: "一……就／如果（自然結果）"
			},
			{
				pattern: "てあげます／てくれます／てもらいます",
				meaning: "為誰做"
			},
			{
				pattern: "Vたら",
				meaning: "如果／之後"
			},
			{
				pattern: "Vても",
				meaning: "即使"
			}
		],
		practice: [
			{
				id: "ug-1",
				type: "mcq",
				prompt: "向圖書館借書時需要卡",
				options: [
					"本を借りるとき、カードが要ります。",
					"本を借りますとき、カードが要ります。",
					"本を借りたはとき、カード要ります。",
					"本を借りるとをときカード。"
				],
				answer: "本を借りるとき、カードが要ります。",
				explanation: "未來／一般情況用辞書形＋とき。"
			},
			{
				id: "ug-2",
				type: "mcq",
				prompt: "按下這個按鈕就會出找錢",
				options: [
					"このボタンを押すと、お釣りが出ます。",
					"このボタンを押したらば、お釣りが出ますです。",
					"このボタンを押しても、お釣りが出ますか要。",
					"このボタンを押すときをお釣り。"
				],
				answer: "このボタンを押すと、お釣りが出ます。",
				explanation: "と＝一……就（機械／自然）。"
			},
			{
				id: "ug-3",
				type: "mcq",
				prompt: "佐藤給了我巧克力（方向：給我）",
				options: [
					"佐藤さんが私にチョコレートをくれました。",
					"佐藤さんが私にチョコレートをあげました。",
					"佐藤さんが私にチョコレートをもらいました。",
					"佐藤さんが私をチョコレートくれました。"
				],
				answer: "佐藤さんが私にチョコレートをくれました。",
				explanation: "給說話者用くれます。"
			},
			{
				id: "ug-4",
				type: "mcq",
				prompt: "請山田幫我改報告",
				options: [
					"山田さんにレポートを直してもらいました。",
					"山田さんにレポートを直してあげました。",
					"山田さんにレポートを直してくれました私。",
					"山田さんをレポート直してもらい。"
				],
				answer: "山田さんにレポートを直してもらいました。",
				explanation: "請別人為自己做：てもらう。"
			},
			{
				id: "ug-5",
				type: "mcq",
				prompt: "如果下雨就不出門",
				options: [
					"雨が降ったら、出かけません。",
					"雨が降っても、出かけませんかです。",
					"雨が降るとを、出かけません。",
					"雨が降るたら、出かけません。"
				],
				answer: "雨が降ったら、出かけません。",
				explanation: "たら條件。"
			},
			{
				id: "ug-6",
				type: "mcq",
				prompt: "即使下雨也出門",
				options: [
					"雨が降っても、出かけます。",
					"雨が降ったら、出かけますだけ。",
					"雨が降るても、出かけます。",
					"雨が降って、も出かけません。"
				],
				answer: "雨が降っても、出かけます。",
				explanation: "ても＝即使。"
			},
			{
				id: "ug-7",
				type: "tf",
				prompt: "「お世話になりました」常用於道別或結束一段照顧。",
				options: ["正確", "錯誤"],
				answer: "正確",
				explanation: "第 25 課會話題材。"
			},
			{
				id: "ug-8",
				type: "listen",
				prompt: "下雨的話男子怎麼做？",
				audio: "あしたあめがふったら、うちでべんきょうします。てんきがよかったら、こうえんへいきます。",
				options: [
					"下雨就在家讀書",
					"下雨也去公園",
					"一定去公司",
					"取消一切"
				],
				answer: "下雨就在家讀書",
				explanation: "降ったら、うちで勉強します。"
			},
			{
				id: "ug-9",
				type: "mcq",
				prompt: "媽媽幫我寄了毛衣（給我）",
				options: [
					"母は私にセーターを送ってくれました。",
					"母は私にセーターを送ってあげました。",
					"母は私にセーターを送ってもらいました私。",
					"母は私をセーター送ってくれました。"
				],
				answer: "母は私にセーターを送ってくれました。",
				explanation: "長輩為我做：てくれる。"
			},
			{
				id: "ug-10",
				type: "listen",
				prompt: "即使下雨，女子怎麼做？",
				audio: "女：あしたはあめでも、しあいをみにいきます。男：かさをわすれないでね。",
				options: [
					"還是去看比賽",
					"取消比賽",
					"改在家看",
					"把傘丟掉"
				],
				answer: "還是去看比賽",
				explanation: "雨でも、試合を見に行きます。"
			}
		]
	}
];
function getUnit(id) {
	return UNIT_REVIEWS.find((unit) => unit.id === id.toUpperCase());
}
function UnitPage() {
	const { id } = Route.useParams();
	const unit = getUnit(id);
	if (!unit) throw notFound();
	const lessons = LESSONS.filter((lesson) => unit.lessons.includes(lesson.id));
	const [index, setIndex] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)({
		ok: 0,
		total: 0
	});
	const [fill, setFill] = (0, import_react.useState)("");
	const question = unit.practice[index];
	const finished = index >= unit.practice.length;
	const options = (0, import_react.useMemo)(() => question?.options ?? ["正確", "錯誤"], [question]);
	function choose(value) {
		if (!question || picked) return;
		const ok = value.trim() === question.answer;
		setPicked(value);
		setScore((s) => ({
			ok: s.ok + (ok ? 1 : 0),
			total: s.total + 1
		}));
	}
	function next() {
		setPicked(null);
		setFill("");
		setIndex((i) => i + 1);
	}
	function restart() {
		setIndex(0);
		setPicked(null);
		setFill("");
		setScore({
			ok: 0,
			total: 0
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/",
			className: "mb-4 inline-flex h-10 items-center gap-1.5 text-sm text-muted hover:text-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "全部課程"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			kicker: unit.label,
			title: unit.title,
			description: unit.partial ? "這一單元尚有未解鎖課次。" : `對應課本${unit.label}：第 ${unit.lessons.join("・")} 課句型總複習。`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-xl text-ink",
				children: "句型回顧"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2 sm:grid-cols-2",
				children: unit.recap.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-border bg-surface px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-base text-ink",
						children: item.pattern
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: item.meaning
					})]
				}, item.pattern))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-xl text-ink",
				children: "本單元課程"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: lessons.map((lesson) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/lesson/$id",
					params: { id: String(lesson.id) },
					className: "inline-flex h-11 items-center rounded-full border border-border bg-surface px-4 text-sm text-ink hover:bg-primary-soft",
					children: [
						"第 ",
						lesson.id,
						" 課　",
						lesson.titleZh
					]
				}, lesson.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-end justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl text-ink",
				children: "混合練習"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs tabular-nums text-subtle",
				children: [finished ? "完成" : `${index + 1} / ${unit.practice.length}`, score.total ? ` · ${score.ok}/${score.total}` : ""]
			})]
		}), finished ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "paper-card rounded-xl p-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-3xl text-ink",
					children: [
						score.ok,
						" / ",
						score.total
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: score.ok === score.total ? "這單元過關了。" : "再走一次句型，或回到單課補強。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-4",
					onClick: restart,
					children: "再練一次"
				})
			]
		}) : question ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "paper-card space-y-4 rounded-xl p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-ink",
					children: question.prompt
				}),
				question.type === "listen" && question.audio ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => speakJapanese(question.audio ?? "", .86),
					className: "inline-flex h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm text-primary-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }), "播放"]
				}) : null,
				question.type === "fill" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex flex-col gap-2 sm:flex-row",
					onSubmit: (e) => {
						e.preventDefault();
						choose(fill);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: fill,
						onChange: (e) => setFill(e.target.value),
						disabled: picked !== null,
						className: "h-11 flex-1 rounded-md border border-border bg-bg px-3 text-sm outline-none ring-primary/30 focus:ring-2",
						placeholder: "填入答案"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: picked !== null || !fill.trim(),
						children: "送出"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2",
					children: options.map((option) => {
						const isAns = picked !== null && option === question.answer;
						const isWrong = picked === option && option !== question.answer;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: picked !== null,
							onClick: () => choose(option),
							className: cn("min-h-12 rounded-lg border px-4 py-3 text-left text-sm", picked === null && "border-border bg-bg hover:bg-primary-soft/50", isAns && "border-success/40 bg-success-soft text-success", isWrong && "border-danger/40 bg-danger-soft text-danger", picked && !isAns && !isWrong && "border-border text-muted"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [isAns ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : isWrong ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : null, option]
							})
						}, option);
					})
				}),
				picked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: question.explanation
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: next,
						children: index + 1 >= unit.practice.length ? "看結果" : "下一題"
					})]
				}) : null
			]
		}) : null] })
	] });
}
//#endregion
export { UnitPage as component };
