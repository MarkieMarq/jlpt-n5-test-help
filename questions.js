const questions = [
  {
    id: 1,
    question: "昨日、私は<ruby>図書館<rt>としょかん</rt></ruby>へ行きました。",
    choices: ["としょかん", "がっこう", "びょういん", "デパート"],
    correctAnswer: 0,
    translations: { "図書館": "library" },
    explanation: "'図書館 (としょかん)' means library. The sentence says 'Yesterday, I went to the library.'"
  },
  {
    id: 2,
    question: "この<ruby>本<rt>ほん</rt></ruby>はとても<ruby>面白<rt>おもしろ</rt></ruby>いです。",
    choices: ["つまらない", "たかい", "おもしろい", "むずかしい"],
    correctAnswer: 2,
    translations: { "本": "book", "面白い": "interesting" },
    explanation: "The word 'おもしろい' means interesting. The sentence says 'This book is very interesting.'"
  },
  {
    id: 3,
    question: "私は<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>七時<rt>しちじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。",
    choices: ["ねます", "おきます", "たべます", "はなします"],
    correctAnswer: 1,
    translations: { "毎朝": "every morning", "七時": "seven o'clock", "起きます": "wake up" },
    explanation: "The sentence says 'I wake up at 7 every morning.'"
  },
  {
    id: 4,
    question: "あの<ruby>人<rt>ひと</rt></ruby>は<ruby>先生<rt>せんせい</rt></ruby>です。",
    choices: ["せんせい", "がくせい", "いしゃ", "かいしゃいん"],
    correctAnswer: 0,
    translations: { "人": "person", "先生": "teacher" },
    explanation: "The sentence says 'That person is a teacher.'"
  },
  {
    id: 5,
    question: "<ruby>犬<rt>いぬ</rt></ruby>が<ruby>公園<rt>こうえん</rt></ruby>で<ruby>走<rt>はし</rt></ruby>っています。",
    choices: ["ねています", "たべています", "はしっています", "きいています"],
    correctAnswer: 2,
    translations: { "犬": "dog", "公園": "park", "走っています": "is running" },
    explanation: "The sentence says 'The dog is running in the park.'"
  },
  {
    id: 6,
    question: "<ruby>天気<rt>てんき</rt></ruby>がいいので、<ruby>散歩<rt>さんぽ</rt></ruby>に行きましょう。",
    choices: ["てんき", "うんどう", "にほん", "ともだち"],
    correctAnswer: 0,
    translations: { "天気": "weather", "散歩": "walk" },
    explanation: "'The weather is nice, so let’s go for a walk.'"
  },
  {
    id: 7,
    question: "コーヒーを<ruby>一杯<rt>いっぱい</rt></ruby>ください。",
    choices: ["いっぱい", "いちにち", "いちばん", "いっぽん"],
    correctAnswer: 0,
    translations: { "一杯": "one cup" },
    explanation: "'Please give me one cup of coffee.'"
  },
  {
    id: 8,
    question: "このシャツは<ruby>赤<rt>あか</rt></ruby>いです。",
    choices: ["しろい", "あおい", "あかい", "くろい"],
    correctAnswer: 2,
    translations: { "赤い": "red" },
    explanation: "'This shirt is red.'"
  },
  {
    id: 9,
    question: "<ruby>今週<rt>こんしゅう</rt></ruby>の<ruby>金曜日<rt>きんようび</rt></ruby>に<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。",
    choices: ["きんようび", "げつようび", "すいようび", "もくようび"],
    correctAnswer: 0,
    translations: { "今週": "this week", "金曜日": "Friday", "映画": "movie" },
    explanation: "'I will watch a movie this Friday.'"
  },
  {
    id: 10,
    question: "<ruby>私<rt>わたし</rt></ruby>の<ruby>趣味<rt>しゅみ</rt></ruby>は<ruby>読書<rt>どくしょ</rt></ruby>です。",
    choices: ["おんがく", "どくしょ", "りょこう", "すいえい"],
    correctAnswer: 1,
    translations: { "趣味": "hobby", "読書": "reading" },
    explanation: "'My hobby is reading.'"
  },
  {
    id: 11,
    question: "その<ruby>店<rt>みせ</rt></ruby>は<ruby>安<rt>やす</rt></ruby>いです。",
    choices: ["たかい", "やすい", "あたらしい", "ひろい"],
    correctAnswer: 1,
    translations: { "店": "store", "安い": "cheap" },
    explanation: "'That store is cheap.'"
  },
  {
    id: 12,
    question: "<ruby>彼<rt>かれ</rt></ruby>は<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>です。",
    choices: ["へた", "じょうず", "しずか", "べんり"],
    correctAnswer: 1,
    translations: { "上手": "skilled", "日本語": "Japanese" },
    explanation: "'He is good at Japanese.'"
  }
];
