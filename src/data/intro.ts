export type KanaCell = { kana: string; romaji: string; empty?: boolean };

export const HIRAGANA_GOJUON: KanaCell[][] = [
  [
    { kana: "あ", romaji: "a" },
    { kana: "い", romaji: "i" },
    { kana: "う", romaji: "u" },
    { kana: "え", romaji: "e" },
    { kana: "お", romaji: "o" },
  ],
  [
    { kana: "か", romaji: "ka" },
    { kana: "き", romaji: "ki" },
    { kana: "く", romaji: "ku" },
    { kana: "け", romaji: "ke" },
    { kana: "こ", romaji: "ko" },
  ],
  [
    { kana: "さ", romaji: "sa" },
    { kana: "し", romaji: "shi" },
    { kana: "す", romaji: "su" },
    { kana: "せ", romaji: "se" },
    { kana: "そ", romaji: "so" },
  ],
  [
    { kana: "た", romaji: "ta" },
    { kana: "ち", romaji: "chi" },
    { kana: "つ", romaji: "tsu" },
    { kana: "て", romaji: "te" },
    { kana: "と", romaji: "to" },
  ],
  [
    { kana: "な", romaji: "na" },
    { kana: "に", romaji: "ni" },
    { kana: "ぬ", romaji: "nu" },
    { kana: "ね", romaji: "ne" },
    { kana: "の", romaji: "no" },
  ],
  [
    { kana: "は", romaji: "ha" },
    { kana: "ひ", romaji: "hi" },
    { kana: "ふ", romaji: "fu" },
    { kana: "へ", romaji: "he" },
    { kana: "ほ", romaji: "ho" },
  ],
  [
    { kana: "ま", romaji: "ma" },
    { kana: "み", romaji: "mi" },
    { kana: "む", romaji: "mu" },
    { kana: "め", romaji: "me" },
    { kana: "も", romaji: "mo" },
  ],
  [
    { kana: "や", romaji: "ya" },
    { kana: "", romaji: "", empty: true },
    { kana: "ゆ", romaji: "yu" },
    { kana: "", romaji: "", empty: true },
    { kana: "よ", romaji: "yo" },
  ],
  [
    { kana: "ら", romaji: "ra" },
    { kana: "り", romaji: "ri" },
    { kana: "る", romaji: "ru" },
    { kana: "れ", romaji: "re" },
    { kana: "ろ", romaji: "ro" },
  ],
  [
    { kana: "わ", romaji: "wa" },
    { kana: "", romaji: "", empty: true },
    { kana: "", romaji: "", empty: true },
    { kana: "", romaji: "", empty: true },
    { kana: "を", romaji: "o" },
  ],
  [
    { kana: "ん", romaji: "n" },
    { kana: "", romaji: "", empty: true },
    { kana: "", romaji: "", empty: true },
    { kana: "", romaji: "", empty: true },
    { kana: "", romaji: "", empty: true },
  ],
];

export const HIRAGANA_DAKUTEN: KanaCell[][] = [
  [
    { kana: "が", romaji: "ga" },
    { kana: "ぎ", romaji: "gi" },
    { kana: "ぐ", romaji: "gu" },
    { kana: "げ", romaji: "ge" },
    { kana: "ご", romaji: "go" },
  ],
  [
    { kana: "ざ", romaji: "za" },
    { kana: "じ", romaji: "ji" },
    { kana: "ず", romaji: "zu" },
    { kana: "ぜ", romaji: "ze" },
    { kana: "ぞ", romaji: "zo" },
  ],
  [
    { kana: "だ", romaji: "da" },
    { kana: "ぢ", romaji: "ji" },
    { kana: "づ", romaji: "zu" },
    { kana: "で", romaji: "de" },
    { kana: "ど", romaji: "do" },
  ],
  [
    { kana: "ば", romaji: "ba" },
    { kana: "び", romaji: "bi" },
    { kana: "ぶ", romaji: "bu" },
    { kana: "べ", romaji: "be" },
    { kana: "ぼ", romaji: "bo" },
  ],
  [
    { kana: "ぱ", romaji: "pa" },
    { kana: "ぴ", romaji: "pi" },
    { kana: "ぷ", romaji: "pu" },
    { kana: "ぺ", romaji: "pe" },
    { kana: "ぽ", romaji: "po" },
  ],
];

export const HIRAGANA_YOUON: KanaCell[][] = [
  [
    { kana: "きゃ", romaji: "kya" },
    { kana: "きゅ", romaji: "kyu" },
    { kana: "きょ", romaji: "kyo" },
  ],
  [
    { kana: "しゃ", romaji: "sha" },
    { kana: "しゅ", romaji: "shu" },
    { kana: "しょ", romaji: "sho" },
  ],
  [
    { kana: "ちゃ", romaji: "cha" },
    { kana: "ちゅ", romaji: "chu" },
    { kana: "ちょ", romaji: "cho" },
  ],
  [
    { kana: "にゃ", romaji: "nya" },
    { kana: "にゅ", romaji: "nyu" },
    { kana: "にょ", romaji: "nyo" },
  ],
  [
    { kana: "ひゃ", romaji: "hya" },
    { kana: "ひゅ", romaji: "hyu" },
    { kana: "ひょ", romaji: "hyo" },
  ],
  [
    { kana: "みゃ", romaji: "mya" },
    { kana: "みゅ", romaji: "myu" },
    { kana: "みょ", romaji: "myo" },
  ],
  [
    { kana: "りゃ", romaji: "rya" },
    { kana: "りゅ", romaji: "ryu" },
    { kana: "りょ", romaji: "ryo" },
  ],
  [
    { kana: "ぎゃ", romaji: "gya" },
    { kana: "ぎゅ", romaji: "gyu" },
    { kana: "ぎょ", romaji: "gyo" },
  ],
  [
    { kana: "じゃ", romaji: "ja" },
    { kana: "じゅ", romaji: "ju" },
    { kana: "じょ", romaji: "jo" },
  ],
  [
    { kana: "びゃ", romaji: "bya" },
    { kana: "びゅ", romaji: "byu" },
    { kana: "びょ", romaji: "byo" },
  ],
  [
    { kana: "ぴゃ", romaji: "pya" },
    { kana: "ぴゅ", romaji: "pyu" },
    { kana: "ぴょ", romaji: "pyo" },
  ],
];

function toKata(hira: string): string {
  return [...hira]
    .map((ch) => {
      const code = ch.charCodeAt(0);
      if (code >= 0x3041 && code <= 0x3096) return String.fromCharCode(code + 0x60);
      return ch;
    })
    .join("");
}

export function toKatakanaGrid(grid: KanaCell[][]): KanaCell[][] {
  return grid.map((row) =>
    row.map((cell) =>
      cell.empty ? cell : { ...cell, kana: toKata(cell.kana) },
    ),
  );
}

export const SOUND_NOTES = [
  {
    id: "long",
    title: "長音",
    kana: "ちょうおん",
    body: "把母音拉長一拍。日文裡「おばさん」（阿姨）和「おばあさん」（奶奶）只差一拍。片假名常用「ー」表示。",
    pairs: [
      { a: "ゆき", b: "ゆうき", zh: "雪／勇氣" },
      { a: "ここ", b: "こうこう", zh: "這裡／高中" },
      { a: "え", b: "ええ", zh: "繪？／對" },
    ],
  },
  {
    id: "n",
    title: "撥音 ん",
    kana: "はつおん",
    body: "「ん」單獨佔一拍，不能省略。しんぶん 是四拍：し・ん・ぶ・ん。",
    samples: ["みんな", "しんぶん", "えんぴつ", "てんき"],
  },
  {
    id: "sokuon",
    title: "促音 っ",
    kana: "そくおん",
    body: "小っ佔一拍，讓後面的子音停頓一下。きて（來）和 きって（郵票）意思完全不同。",
    pairs: [
      { a: "かた", b: "かった", zh: "肩膀／贏了" },
      { a: "もと", b: "もっと", zh: "本源／更加" },
    ],
  },
  {
    id: "youon",
    title: "拗音",
    kana: "ようおん",
    body: "き＋や → きゃ，合起來只算一拍。ひゃく（百）不是「ひ・や・く」三拍，而是「ひゃ・く」兩拍。",
    samples: ["きょう", "じゃ", "りょこう", "びょういん"],
  },
];

export const CLASSROOM = [
  { jp: "始めましょう。", speak: "はじめましょう。", zh: "我們開始吧。" },
  { jp: "終わりましょう。", speak: "おわりましょう。", zh: "就到這裡。" },
  { jp: "休みましょう。", speak: "やすみましょう。", zh: "休息一下吧。" },
  { jp: "わかりますか。", speak: "わかりますか。", zh: "懂了嗎？" },
  { jp: "はい、わかります。", speak: "はい、わかります。", zh: "是，懂了。" },
  { jp: "いいえ、わかりません。", speak: "いいえ、わかりません。", zh: "不，不懂。" },
  { jp: "もう一度お願いします。", speak: "もういちどおねがいします。", zh: "請再說一次。" },
  { jp: "いいです。", speak: "いいです。", zh: "可以／沒問題。" },
  { jp: "違います。", speak: "ちがいます。", zh: "不對。" },
];

export const GREETINGS = [
  { jp: "おはようございます。", speak: "おはようございます。", zh: "早安。（禮貌）" },
  { jp: "こんにちは。", speak: "こんにちは。", zh: "你好。（白天）" },
  { jp: "こんばんは。", speak: "こんばんは。", zh: "晚上好。" },
  { jp: "おやすみなさい。", speak: "おやすみなさい。", zh: "晚安。" },
  { jp: "さようなら。", speak: "さようなら。", zh: "再見。" },
  { jp: "ありがとうございました。", speak: "ありがとうございました。", zh: "非常感謝。" },
  { jp: "すみません。", speak: "すみません。", zh: "對不起／請問。" },
  { jp: "お願いします。", speak: "おねがいします。", zh: "拜託了。" },
];

export const NUMBERS = [
  { n: 0, kana: "ゼロ／れい", kanji: "〇", romaji: "zero / rei" },
  { n: 1, kana: "いち", kanji: "一", romaji: "ichi" },
  { n: 2, kana: "に", kanji: "二", romaji: "ni" },
  { n: 3, kana: "さん", kanji: "三", romaji: "san" },
  { n: 4, kana: "よん／し", kanji: "四", romaji: "yon / shi" },
  { n: 5, kana: "ご", kanji: "五", romaji: "go" },
  { n: 6, kana: "ろく", kanji: "六", romaji: "roku" },
  { n: 7, kana: "なな／しち", kanji: "七", romaji: "nana / shichi" },
  { n: 8, kana: "はち", kanji: "八", romaji: "hachi" },
  { n: 9, kana: "きゅう／く", kanji: "九", romaji: "kyū / ku" },
  { n: 10, kana: "じゅう", kanji: "十", romaji: "jū" },
];

export const CHARACTERS = [
  { name: "マイク・ミラー", kana: "まいく・みらー", zh: "美國・工程師", note: "IMC 大阪支店" },
  { name: "サントス", kana: "さんとす", zh: "巴西・商務", note: "日巴相關企業" },
  { name: "ワン", kana: "わん", zh: "中國・同事／留學", note: "常出現在郵局與課堂" },
  { name: "佐藤", kana: "さとう", zh: "日本・房東", note: "ミラーさんの家の管理人" },
  { name: "けい子", kana: "けいこ", zh: "日本・大學生", note: "佐藤さんの娘" },
  { name: "山田", kana: "やまだ", zh: "日本・同事", note: "常一起吃飯、工作" },
];
