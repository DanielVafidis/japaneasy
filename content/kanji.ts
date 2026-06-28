/**
 * A curated set of common (mostly JLPT N5) kanji.
 * Readings and meanings are factual reference data.
 * on'yomi in katakana, kun'yomi in hiragana (okurigana after a dot).
 */

export type KanjiCategory =
  | "numbers"
  | "time"
  | "nature"
  | "people"
  | "verbs"
  | "adjectives"
  | "places"
  | "position"
  | "misc";

export interface Kanji {
  char: string;
  meaning: string;
  on: string[];
  kun: string[];
  jlpt: 5 | 4;
  strokes: number;
  category: KanjiCategory;
  example?: { word: string; reading: string; meaning: string };
}

export const kanji: Kanji[] = [
  // numbers
  { char: "一", meaning: "one", on: ["イチ", "イツ"], kun: ["ひと.つ"], jlpt: 5, strokes: 1, category: "numbers", example: { word: "一つ", reading: "ひとつ", meaning: "one thing" } },
  { char: "二", meaning: "two", on: ["ニ"], kun: ["ふた.つ"], jlpt: 5, strokes: 2, category: "numbers", example: { word: "二人", reading: "ふたり", meaning: "two people" } },
  { char: "三", meaning: "three", on: ["サン"], kun: ["み.つ"], jlpt: 5, strokes: 3, category: "numbers", example: { word: "三月", reading: "さんがつ", meaning: "March" } },
  { char: "四", meaning: "four", on: ["シ"], kun: ["よ.つ", "よん"], jlpt: 5, strokes: 5, category: "numbers", example: { word: "四時", reading: "よじ", meaning: "four o'clock" } },
  { char: "五", meaning: "five", on: ["ゴ"], kun: ["いつ.つ"], jlpt: 5, strokes: 4, category: "numbers", example: { word: "五日", reading: "いつか", meaning: "5th day" } },
  { char: "六", meaning: "six", on: ["ロク"], kun: ["む.つ"], jlpt: 5, strokes: 4, category: "numbers" },
  { char: "七", meaning: "seven", on: ["シチ"], kun: ["なな.つ"], jlpt: 5, strokes: 2, category: "numbers" },
  { char: "八", meaning: "eight", on: ["ハチ"], kun: ["や.つ"], jlpt: 5, strokes: 2, category: "numbers" },
  { char: "九", meaning: "nine", on: ["キュウ", "ク"], kun: ["ここの.つ"], jlpt: 5, strokes: 2, category: "numbers" },
  { char: "十", meaning: "ten", on: ["ジュウ"], kun: ["とお"], jlpt: 5, strokes: 2, category: "numbers" },
  { char: "百", meaning: "hundred", on: ["ヒャク"], kun: [], jlpt: 5, strokes: 6, category: "numbers" },
  { char: "千", meaning: "thousand", on: ["セン"], kun: ["ち"], jlpt: 5, strokes: 3, category: "numbers" },
  { char: "万", meaning: "ten thousand", on: ["マン", "バン"], kun: [], jlpt: 5, strokes: 3, category: "numbers" },
  { char: "円", meaning: "yen; circle", on: ["エン"], kun: ["まる.い"], jlpt: 5, strokes: 4, category: "numbers", example: { word: "百円", reading: "ひゃくえん", meaning: "100 yen" } },

  // time
  { char: "日", meaning: "day; sun", on: ["ニチ", "ジツ"], kun: ["ひ", "か"], jlpt: 5, strokes: 4, category: "time", example: { word: "日本", reading: "にほん", meaning: "Japan" } },
  { char: "月", meaning: "month; moon", on: ["ゲツ", "ガツ"], kun: ["つき"], jlpt: 5, strokes: 4, category: "time", example: { word: "月曜日", reading: "げつようび", meaning: "Monday" } },
  { char: "年", meaning: "year", on: ["ネン"], kun: ["とし"], jlpt: 5, strokes: 6, category: "time", example: { word: "今年", reading: "ことし", meaning: "this year" } },
  { char: "時", meaning: "time; hour", on: ["ジ"], kun: ["とき"], jlpt: 5, strokes: 10, category: "time", example: { word: "時間", reading: "じかん", meaning: "time; hour" } },
  { char: "分", meaning: "minute; part", on: ["ブン", "フン"], kun: ["わ.ける", "わ.かる"], jlpt: 5, strokes: 4, category: "time" },
  { char: "半", meaning: "half", on: ["ハン"], kun: ["なか.ば"], jlpt: 5, strokes: 5, category: "time" },
  { char: "今", meaning: "now", on: ["コン"], kun: ["いま"], jlpt: 5, strokes: 4, category: "time", example: { word: "今日", reading: "きょう", meaning: "today" } },
  { char: "間", meaning: "interval; between", on: ["カン", "ケン"], kun: ["あいだ", "ま"], jlpt: 5, strokes: 12, category: "time" },
  { char: "毎", meaning: "every", on: ["マイ"], kun: [], jlpt: 5, strokes: 6, category: "time", example: { word: "毎日", reading: "まいにち", meaning: "every day" } },
  { char: "週", meaning: "week", on: ["シュウ"], kun: [], jlpt: 5, strokes: 11, category: "time" },
  { char: "曜", meaning: "day of the week", on: ["ヨウ"], kun: [], jlpt: 5, strokes: 18, category: "time", example: { word: "日曜日", reading: "にちようび", meaning: "Sunday" } },
  { char: "午", meaning: "noon", on: ["ゴ"], kun: [], jlpt: 5, strokes: 4, category: "time", example: { word: "午前", reading: "ごぜん", meaning: "morning; a.m." } },
  { char: "朝", meaning: "morning", on: ["チョウ"], kun: ["あさ"], jlpt: 5, strokes: 12, category: "time" },
  { char: "夜", meaning: "night; evening", on: ["ヤ"], kun: ["よ", "よる"], jlpt: 5, strokes: 8, category: "time" },
  { char: "明", meaning: "bright; clear", on: ["メイ", "ミョウ"], kun: ["あ.かるい", "あ.ける"], jlpt: 5, strokes: 8, category: "time", example: { word: "明日", reading: "あした", meaning: "tomorrow" } },

  // nature
  { char: "火", meaning: "fire", on: ["カ"], kun: ["ひ"], jlpt: 5, strokes: 4, category: "nature" },
  { char: "水", meaning: "water", on: ["スイ"], kun: ["みず"], jlpt: 5, strokes: 4, category: "nature" },
  { char: "木", meaning: "tree; wood", on: ["モク", "ボク"], kun: ["き"], jlpt: 5, strokes: 4, category: "nature" },
  { char: "金", meaning: "gold; money", on: ["キン", "コン"], kun: ["かね"], jlpt: 5, strokes: 8, category: "nature", example: { word: "お金", reading: "おかね", meaning: "money" } },
  { char: "土", meaning: "earth; soil", on: ["ド", "ト"], kun: ["つち"], jlpt: 5, strokes: 3, category: "nature" },
  { char: "山", meaning: "mountain", on: ["サン"], kun: ["やま"], jlpt: 5, strokes: 3, category: "nature", example: { word: "富士山", reading: "ふじさん", meaning: "Mt. Fuji" } },
  { char: "川", meaning: "river", on: ["セン"], kun: ["かわ"], jlpt: 5, strokes: 3, category: "nature" },
  { char: "天", meaning: "heaven; sky", on: ["テン"], kun: ["あま"], jlpt: 5, strokes: 4, category: "nature", example: { word: "天気", reading: "てんき", meaning: "weather" } },
  { char: "気", meaning: "spirit; energy", on: ["キ", "ケ"], kun: [], jlpt: 5, strokes: 6, category: "nature", example: { word: "元気", reading: "げんき", meaning: "healthy; lively" } },
  { char: "雨", meaning: "rain", on: ["ウ"], kun: ["あめ"], jlpt: 5, strokes: 8, category: "nature" },
  { char: "花", meaning: "flower", on: ["カ"], kun: ["はな"], jlpt: 4, strokes: 7, category: "nature" },

  // people
  { char: "人", meaning: "person", on: ["ジン", "ニン"], kun: ["ひと"], jlpt: 5, strokes: 2, category: "people", example: { word: "日本人", reading: "にほんじん", meaning: "Japanese person" } },
  { char: "男", meaning: "man; male", on: ["ダン", "ナン"], kun: ["おとこ"], jlpt: 5, strokes: 7, category: "people" },
  { char: "女", meaning: "woman; female", on: ["ジョ"], kun: ["おんな"], jlpt: 5, strokes: 3, category: "people" },
  { char: "子", meaning: "child", on: ["シ", "ス"], kun: ["こ"], jlpt: 5, strokes: 3, category: "people", example: { word: "子供", reading: "こども", meaning: "child" } },
  { char: "父", meaning: "father", on: ["フ"], kun: ["ちち"], jlpt: 5, strokes: 4, category: "people", example: { word: "お父さん", reading: "おとうさん", meaning: "father" } },
  { char: "母", meaning: "mother", on: ["ボ"], kun: ["はは"], jlpt: 5, strokes: 5, category: "people", example: { word: "お母さん", reading: "おかあさん", meaning: "mother" } },
  { char: "友", meaning: "friend", on: ["ユウ"], kun: ["とも"], jlpt: 5, strokes: 4, category: "people", example: { word: "友達", reading: "ともだち", meaning: "friend" } },
  { char: "先", meaning: "previous; ahead", on: ["セン"], kun: ["さき"], jlpt: 5, strokes: 6, category: "people", example: { word: "先生", reading: "せんせい", meaning: "teacher" } },
  { char: "生", meaning: "life; birth", on: ["セイ", "ショウ"], kun: ["い.きる", "う.まれる", "なま"], jlpt: 5, strokes: 5, category: "people", example: { word: "学生", reading: "がくせい", meaning: "student" } },
  { char: "名", meaning: "name", on: ["メイ", "ミョウ"], kun: ["な"], jlpt: 5, strokes: 6, category: "people", example: { word: "名前", reading: "なまえ", meaning: "name" } },
  { char: "私", meaning: "I; private", on: ["シ"], kun: ["わたし"], jlpt: 5, strokes: 7, category: "people" },

  // verbs
  { char: "行", meaning: "go", on: ["コウ", "ギョウ"], kun: ["い.く", "おこな.う"], jlpt: 5, strokes: 6, category: "verbs" },
  { char: "来", meaning: "come", on: ["ライ"], kun: ["く.る"], jlpt: 5, strokes: 7, category: "verbs" },
  { char: "見", meaning: "see; look", on: ["ケン"], kun: ["み.る"], jlpt: 5, strokes: 7, category: "verbs" },
  { char: "聞", meaning: "hear; ask", on: ["ブン", "モン"], kun: ["き.く"], jlpt: 5, strokes: 14, category: "verbs" },
  { char: "言", meaning: "say; word", on: ["ゲン", "ゴン"], kun: ["い.う", "こと"], jlpt: 5, strokes: 7, category: "verbs" },
  { char: "話", meaning: "talk; story", on: ["ワ"], kun: ["はな.す", "はなし"], jlpt: 5, strokes: 13, category: "verbs", example: { word: "電話", reading: "でんわ", meaning: "telephone" } },
  { char: "読", meaning: "read", on: ["ドク"], kun: ["よ.む"], jlpt: 5, strokes: 14, category: "verbs" },
  { char: "書", meaning: "write", on: ["ショ"], kun: ["か.く"], jlpt: 5, strokes: 10, category: "verbs" },
  { char: "食", meaning: "eat; food", on: ["ショク"], kun: ["た.べる", "く.う"], jlpt: 5, strokes: 9, category: "verbs", example: { word: "食べ物", reading: "たべもの", meaning: "food" } },
  { char: "飲", meaning: "drink", on: ["イン"], kun: ["の.む"], jlpt: 5, strokes: 12, category: "verbs", example: { word: "飲み物", reading: "のみもの", meaning: "drink" } },
  { char: "出", meaning: "exit; leave", on: ["シュツ"], kun: ["で.る", "だ.す"], jlpt: 5, strokes: 5, category: "verbs" },
  { char: "入", meaning: "enter", on: ["ニュウ"], kun: ["はい.る", "い.れる"], jlpt: 5, strokes: 2, category: "verbs", example: { word: "入口", reading: "いりぐち", meaning: "entrance" } },
  { char: "立", meaning: "stand", on: ["リツ"], kun: ["た.つ"], jlpt: 5, strokes: 5, category: "verbs" },
  { char: "休", meaning: "rest", on: ["キュウ"], kun: ["やす.む"], jlpt: 5, strokes: 6, category: "verbs", example: { word: "休み", reading: "やすみ", meaning: "rest; holiday" } },
  { char: "買", meaning: "buy", on: ["バイ"], kun: ["か.う"], jlpt: 5, strokes: 12, category: "verbs" },
  { char: "売", meaning: "sell", on: ["バイ"], kun: ["う.る"], jlpt: 5, strokes: 7, category: "verbs" },
  { char: "持", meaning: "hold; have", on: ["ジ"], kun: ["も.つ"], jlpt: 5, strokes: 9, category: "verbs" },
  { char: "作", meaning: "make; create", on: ["サク", "サ"], kun: ["つく.る"], jlpt: 5, strokes: 7, category: "verbs", example: { word: "作文", reading: "さくぶん", meaning: "essay; composition" } },
  { char: "使", meaning: "use", on: ["シ"], kun: ["つか.う"], jlpt: 5, strokes: 8, category: "verbs" },
  { char: "教", meaning: "teach", on: ["キョウ"], kun: ["おし.える", "おそ.わる"], jlpt: 5, strokes: 11, category: "verbs" },
  { char: "習", meaning: "learn; practice", on: ["シュウ"], kun: ["なら.う"], jlpt: 5, strokes: 11, category: "verbs", example: { word: "習う", reading: "ならう", meaning: "to learn" } },
  { char: "思", meaning: "think", on: ["シ"], kun: ["おも.う"], jlpt: 5, strokes: 9, category: "verbs" },
  { char: "知", meaning: "know", on: ["チ"], kun: ["し.る"], jlpt: 5, strokes: 8, category: "verbs" },
  { char: "始", meaning: "begin", on: ["シ"], kun: ["はじ.める", "はじ.まる"], jlpt: 5, strokes: 8, category: "verbs" },
  { char: "終", meaning: "end", on: ["シュウ"], kun: ["お.わる", "お.える"], jlpt: 5, strokes: 11, category: "verbs" },
  { char: "起", meaning: "wake up; rise", on: ["キ"], kun: ["お.きる", "お.こる"], jlpt: 5, strokes: 10, category: "verbs" },
  { char: "走", meaning: "run", on: ["ソウ"], kun: ["はし.る"], jlpt: 5, strokes: 7, category: "verbs" },
  { char: "泳", meaning: "swim", on: ["エイ"], kun: ["およ.ぐ"], jlpt: 5, strokes: 8, category: "verbs" },
  { char: "歩", meaning: "walk", on: ["ホ", "ブ", "フ"], kun: ["ある.く"], jlpt: 5, strokes: 8, category: "verbs" },
  { char: "働", meaning: "work", on: ["ドウ"], kun: ["はたら.く"], jlpt: 5, strokes: 13, category: "verbs" },
  { char: "開", meaning: "open", on: ["カイ"], kun: ["あ.く", "あ.ける"], jlpt: 5, strokes: 12, category: "verbs" },
  { char: "閉", meaning: "close", on: ["ヘイ"], kun: ["し.める", "と.じる"], jlpt: 5, strokes: 11, category: "verbs" },
  { char: "座", meaning: "sit", on: ["ザ"], kun: ["すわ.る"], jlpt: 5, strokes: 10, category: "verbs" },
  { char: "着", meaning: "wear; arrive", on: ["チャク", "ジャク"], kun: ["き.る", "つ.く"], jlpt: 5, strokes: 12, category: "verbs" },
  { char: "答", meaning: "answer", on: ["トウ"], kun: ["こた.える"], jlpt: 5, strokes: 12, category: "verbs" },

  // adjectives
  { char: "大", meaning: "big", on: ["ダイ", "タイ"], kun: ["おお.きい"], jlpt: 5, strokes: 3, category: "adjectives", example: { word: "大学", reading: "だいがく", meaning: "university" } },
  { char: "小", meaning: "small", on: ["ショウ"], kun: ["ちい.さい", "こ"], jlpt: 5, strokes: 3, category: "adjectives" },
  { char: "高", meaning: "tall; expensive", on: ["コウ"], kun: ["たか.い"], jlpt: 5, strokes: 10, category: "adjectives" },
  { char: "安", meaning: "cheap; peaceful", on: ["アン"], kun: ["やす.い"], jlpt: 5, strokes: 6, category: "adjectives" },
  { char: "新", meaning: "new", on: ["シン"], kun: ["あたら.しい"], jlpt: 5, strokes: 13, category: "adjectives", example: { word: "新聞", reading: "しんぶん", meaning: "newspaper" } },
  { char: "古", meaning: "old", on: ["コ"], kun: ["ふる.い"], jlpt: 5, strokes: 5, category: "adjectives" },
  { char: "多", meaning: "many", on: ["タ"], kun: ["おお.い"], jlpt: 5, strokes: 6, category: "adjectives" },
  { char: "少", meaning: "few; little", on: ["ショウ"], kun: ["すく.ない", "すこ.し"], jlpt: 5, strokes: 4, category: "adjectives" },
  { char: "長", meaning: "long; chief", on: ["チョウ"], kun: ["なが.い"], jlpt: 5, strokes: 8, category: "adjectives" },
  { char: "白", meaning: "white", on: ["ハク"], kun: ["しろ.い"], jlpt: 5, strokes: 5, category: "adjectives" },
  { char: "黒", meaning: "black", on: ["コク"], kun: ["くろ.い"], jlpt: 5, strokes: 11, category: "adjectives" },
  { char: "赤", meaning: "red", on: ["セキ", "シャク"], kun: ["あか.い"], jlpt: 5, strokes: 7, category: "adjectives" },
  { char: "青", meaning: "blue; green", on: ["セイ", "ショウ"], kun: ["あお.い"], jlpt: 5, strokes: 8, category: "adjectives" },
  { char: "色", meaning: "color", on: ["ショク"], kun: ["いろ"], jlpt: 5, strokes: 6, category: "adjectives" },
  { char: "暑", meaning: "hot (weather)", on: ["ショ"], kun: ["あつ.い"], jlpt: 5, strokes: 12, category: "adjectives" },
  { char: "寒", meaning: "cold (weather)", on: ["カン"], kun: ["さむ.い"], jlpt: 5, strokes: 12, category: "adjectives" },
  { char: "暖", meaning: "warm", on: ["ダン", "ノン"], kun: ["あたた.かい"], jlpt: 5, strokes: 13, category: "adjectives" },
  { char: "強", meaning: "strong", on: ["キョウ", "ゴウ"], kun: ["つよ.い"], jlpt: 5, strokes: 11, category: "adjectives" },
  { char: "弱", meaning: "weak", on: ["ジャク"], kun: ["よわ.い"], jlpt: 5, strokes: 10, category: "adjectives" },
  { char: "悪", meaning: "bad", on: ["アク", "オ"], kun: ["わる.い"], jlpt: 5, strokes: 11, category: "adjectives" },

  // places
  { char: "国", meaning: "country", on: ["コク"], kun: ["くに"], jlpt: 5, strokes: 8, category: "places" },
  { char: "学", meaning: "study; learning", on: ["ガク"], kun: ["まな.ぶ"], jlpt: 5, strokes: 8, category: "places", example: { word: "学校", reading: "がっこう", meaning: "school" } },
  { char: "校", meaning: "school", on: ["コウ"], kun: [], jlpt: 5, strokes: 10, category: "places" },
  { char: "会", meaning: "meet; society", on: ["カイ"], kun: ["あ.う"], jlpt: 5, strokes: 6, category: "places", example: { word: "会社", reading: "かいしゃ", meaning: "company" } },
  { char: "社", meaning: "company; shrine", on: ["シャ"], kun: ["やしろ"], jlpt: 5, strokes: 7, category: "places" },
  { char: "店", meaning: "shop", on: ["テン"], kun: ["みせ"], jlpt: 5, strokes: 8, category: "places", example: { word: "店員", reading: "てんいん", meaning: "shop clerk" } },
  { char: "駅", meaning: "station", on: ["エキ"], kun: [], jlpt: 5, strokes: 14, category: "places" },
  { char: "車", meaning: "car; vehicle", on: ["シャ"], kun: ["くるま"], jlpt: 5, strokes: 7, category: "places", example: { word: "電車", reading: "でんしゃ", meaning: "train" } },
  { char: "道", meaning: "road; way", on: ["ドウ"], kun: ["みち"], jlpt: 5, strokes: 12, category: "places" },
  { char: "電", meaning: "electricity", on: ["デン"], kun: [], jlpt: 5, strokes: 13, category: "places" },
  { char: "本", meaning: "book; origin", on: ["ホン"], kun: ["もと"], jlpt: 5, strokes: 5, category: "places" },
  { char: "家", meaning: "house; home", on: ["カ", "ケ"], kun: ["いえ", "や"], jlpt: 5, strokes: 10, category: "places", example: { word: "家族", reading: "かぞく", meaning: "family" } },
  { char: "室", meaning: "room", on: ["シツ"], kun: ["むろ"], jlpt: 5, strokes: 9, category: "places", example: { word: "教室", reading: "きょうしつ", meaning: "classroom" } },
  { char: "館", meaning: "public building", on: ["カン"], kun: [], jlpt: 5, strokes: 16, category: "places", example: { word: "図書館", reading: "としょかん", meaning: "library" } },
  { char: "場", meaning: "place; venue", on: ["ジョウ"], kun: ["ば"], jlpt: 5, strokes: 12, category: "places" },
  { char: "町", meaning: "town", on: ["チョウ"], kun: ["まち"], jlpt: 5, strokes: 7, category: "places" },
  { char: "市", meaning: "city; market", on: ["シ"], kun: ["いち"], jlpt: 5, strokes: 5, category: "places" },
  { char: "村", meaning: "village", on: ["ソン"], kun: ["むら"], jlpt: 5, strokes: 7, category: "places" },
  { char: "病", meaning: "illness", on: ["ビョウ", "ヘイ"], kun: ["や.む", "やまい"], jlpt: 5, strokes: 10, category: "places", example: { word: "病院", reading: "びょういん", meaning: "hospital" } },
  { char: "院", meaning: "institution", on: ["イン"], kun: [], jlpt: 5, strokes: 10, category: "places" },
  { char: "服", meaning: "clothes", on: ["フク"], kun: [], jlpt: 5, strokes: 8, category: "places" },

  // position
  { char: "上", meaning: "up; above", on: ["ジョウ"], kun: ["うえ", "あ.げる", "のぼ.る"], jlpt: 5, strokes: 3, category: "position" },
  { char: "下", meaning: "down; below", on: ["カ", "ゲ"], kun: ["した", "さ.げる", "くだ.る"], jlpt: 5, strokes: 3, category: "position" },
  { char: "中", meaning: "middle; inside", on: ["チュウ"], kun: ["なか"], jlpt: 5, strokes: 4, category: "position", example: { word: "中学", reading: "ちゅうがく", meaning: "middle school" } },
  { char: "外", meaning: "outside", on: ["ガイ"], kun: ["そと", "ほか"], jlpt: 5, strokes: 5, category: "position", example: { word: "外国", reading: "がいこく", meaning: "foreign country" } },
  { char: "前", meaning: "front; before", on: ["ゼン"], kun: ["まえ"], jlpt: 5, strokes: 9, category: "position", example: { word: "午前", reading: "ごぜん", meaning: "morning; a.m." } },
  { char: "後", meaning: "behind; after", on: ["ゴ", "コウ"], kun: ["うし.ろ", "あと", "のち"], jlpt: 5, strokes: 9, category: "position", example: { word: "午後", reading: "ごご", meaning: "afternoon; p.m." } },
  { char: "左", meaning: "left", on: ["サ"], kun: ["ひだり"], jlpt: 5, strokes: 5, category: "position" },
  { char: "右", meaning: "right", on: ["ウ", "ユウ"], kun: ["みぎ"], jlpt: 5, strokes: 5, category: "position" },
  { char: "東", meaning: "east", on: ["トウ"], kun: ["ひがし"], jlpt: 5, strokes: 8, category: "position", example: { word: "東京", reading: "とうきょう", meaning: "Tokyo" } },
  { char: "西", meaning: "west", on: ["セイ", "サイ"], kun: ["にし"], jlpt: 5, strokes: 6, category: "position" },
  { char: "南", meaning: "south", on: ["ナン"], kun: ["みなみ"], jlpt: 5, strokes: 9, category: "position" },
  { char: "北", meaning: "north", on: ["ホク"], kun: ["きた"], jlpt: 5, strokes: 5, category: "position" },

  // misc
  { char: "何", meaning: "what", on: ["カ"], kun: ["なに", "なん"], jlpt: 5, strokes: 7, category: "misc", example: { word: "何時", reading: "なんじ", meaning: "what time" } },
  { char: "語", meaning: "language; word", on: ["ゴ"], kun: ["かた.る"], jlpt: 5, strokes: 14, category: "misc", example: { word: "日本語", reading: "にほんご", meaning: "Japanese language" } },
  { char: "口", meaning: "mouth", on: ["コウ"], kun: ["くち"], jlpt: 5, strokes: 3, category: "misc" },
  { char: "目", meaning: "eye", on: ["モク"], kun: ["め"], jlpt: 5, strokes: 5, category: "misc" },
  { char: "手", meaning: "hand", on: ["シュ"], kun: ["て"], jlpt: 5, strokes: 4, category: "misc", example: { word: "上手", reading: "じょうず", meaning: "skillful" } },
  { char: "耳", meaning: "ear", on: ["ジ"], kun: ["みみ"], jlpt: 5, strokes: 6, category: "misc" },
  { char: "足", meaning: "foot; leg; sufficient", on: ["ソク"], kun: ["あし", "た.りる"], jlpt: 5, strokes: 7, category: "misc" },
  { char: "体", meaning: "body", on: ["タイ", "テイ"], kun: ["からだ"], jlpt: 5, strokes: 7, category: "misc" },
  { char: "頭", meaning: "head", on: ["トウ", "ズ"], kun: ["あたま"], jlpt: 5, strokes: 16, category: "misc" },
  { char: "心", meaning: "heart; mind", on: ["シン"], kun: ["こころ"], jlpt: 5, strokes: 4, category: "misc" },
  { char: "力", meaning: "power; strength", on: ["リョク", "リキ"], kun: ["ちから"], jlpt: 5, strokes: 2, category: "misc" },
  { char: "音", meaning: "sound", on: ["オン", "イン"], kun: ["おと", "ね"], jlpt: 5, strokes: 9, category: "misc", example: { word: "音楽", reading: "おんがく", meaning: "music" } },
  { char: "楽", meaning: "comfort; music", on: ["ガク", "ラク"], kun: ["たの.しい"], jlpt: 5, strokes: 13, category: "misc" },
  { char: "歌", meaning: "song; sing", on: ["カ"], kun: ["うた", "うた.う"], jlpt: 5, strokes: 14, category: "misc" },
  { char: "画", meaning: "picture; drawing", on: ["ガ", "カク"], kun: ["え"], jlpt: 5, strokes: 8, category: "misc", example: { word: "映画", reading: "えいが", meaning: "movie" } },
  { char: "映", meaning: "reflect; project", on: ["エイ"], kun: ["うつ.る", "は.える"], jlpt: 5, strokes: 9, category: "misc" },
  { char: "物", meaning: "thing; object", on: ["ブツ", "モツ"], kun: ["もの"], jlpt: 5, strokes: 8, category: "misc" },
  { char: "事", meaning: "matter; affair", on: ["ジ", "ズ"], kun: ["こと"], jlpt: 5, strokes: 8, category: "misc" },
  { char: "英", meaning: "England; distinguished", on: ["エイ"], kun: ["はなぶさ"], jlpt: 5, strokes: 8, category: "misc", example: { word: "英語", reading: "えいご", meaning: "English language" } },
  { char: "勉", meaning: "exertion; study", on: ["ベン"], kun: [], jlpt: 5, strokes: 10, category: "misc", example: { word: "勉強", reading: "べんきょう", meaning: "study" } },
  { char: "図", meaning: "diagram; map", on: ["ズ", "ト"], kun: ["はか.る"], jlpt: 5, strokes: 7, category: "misc", example: { word: "図書館", reading: "としょかん", meaning: "library" } },
  { char: "医", meaning: "medicine; doctor", on: ["イ"], kun: [], jlpt: 5, strokes: 7, category: "misc", example: { word: "医者", reading: "いしゃ", meaning: "doctor" } },

  // N4 starter set
  { char: "意", meaning: "idea; mind", on: ["イ"], kun: [], jlpt: 4, strokes: 13, category: "misc", example: { word: "意味", reading: "いみ", meaning: "meaning" } },
  { char: "味", meaning: "taste; flavor", on: ["ミ"], kun: ["あじ"], jlpt: 4, strokes: 8, category: "misc" },
  { char: "届", meaning: "deliver; reach", on: ["カイ"], kun: ["とど.ける", "とど.く"], jlpt: 4, strokes: 8, category: "verbs" },
  { char: "決", meaning: "decide", on: ["ケツ"], kun: ["き.める", "き.まる"], jlpt: 4, strokes: 7, category: "verbs", example: { word: "決める", reading: "きめる", meaning: "to decide" } },
  { char: "続", meaning: "continue", on: ["ゾク"], kun: ["つづ.く", "つづ.ける"], jlpt: 4, strokes: 13, category: "verbs" },
  { char: "変", meaning: "change; strange", on: ["ヘン"], kun: ["か.わる", "か.える"], jlpt: 4, strokes: 9, category: "verbs", example: { word: "大変", reading: "たいへん", meaning: "tough; very" } },
  { char: "建", meaning: "build", on: ["ケン", "コン"], kun: ["た.てる", "た.つ"], jlpt: 4, strokes: 9, category: "verbs" },
  { char: "集", meaning: "gather; collect", on: ["シュウ"], kun: ["あつ.める", "あつ.まる"], jlpt: 4, strokes: 12, category: "verbs" },
  { char: "信", meaning: "trust; faith", on: ["シン"], kun: [], jlpt: 4, strokes: 9, category: "misc", example: { word: "信じる", reading: "しんじる", meaning: "to believe" } },
  { char: "問", meaning: "question; ask", on: ["モン"], kun: ["と.う", "と.い"], jlpt: 4, strokes: 11, category: "misc", example: { word: "問題", reading: "もんだい", meaning: "problem; question" } },
  { char: "送", meaning: "send", on: ["ソウ"], kun: ["おく.る"], jlpt: 4, strokes: 9, category: "verbs" },
];

export const kanjiCategories: { id: KanjiCategory; label: string }[] = [
  { id: "numbers", label: "Numbers" },
  { id: "time", label: "Time" },
  { id: "nature", label: "Nature" },
  { id: "people", label: "People" },
  { id: "verbs", label: "Verbs" },
  { id: "adjectives", label: "Adjectives" },
  { id: "places", label: "Places & things" },
  { id: "position", label: "Position & direction" },
  { id: "misc", label: "Body & misc" },
];

export const kanjiByChar: Record<string, Kanji> = Object.fromEntries(
  kanji.map((k) => [k.char, k]),
);
