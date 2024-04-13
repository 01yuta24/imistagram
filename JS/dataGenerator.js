/*
  This generates our fake newsfeed information.

  There is no need to touch the code in here until you get to basic requirement #4,
  but please check it out to familiarize yourself beforehand.
*/
(() => {

  // app.jsから閲覧できる
  window.bacefook = {};
  // postの内容を格納してる
  bacefook.newsfeed = [];
  // Becefookにいる友人を格納してる
  bacefook.friends = {};
  bacefook.friendNames = [
    "ランナリー・リョウ",
    "スピードサムライ・サトシ",
    "マラソンミラクル・ミキ",
    "ランレンジャー・レイコ",
    "スニーカースター・シンジ",
    "ジョギング兄弟・健太＆太郎",
    "ダッシュデビル・ダイスケ",
    "ランニングリーダー・りんご",
    "パワープレーヤー・ポポ",
    "ランハンター・はるき",
    "ストライドスプリンター・さちこ",
    "マラソンマスター・まさる",
    "スピードスター・さとる",
    "ランニングレジェンド・れいな",
    "ジョギングジェネラル・じろう",
    "ダッシュダイバー・だいすけ",
    "ランラン・りさ",
    "パワープレイヤー・ひろし",
    "スニーカーサムライ・さくら",
    "マラソンマーベル・まゆ",
    "ランニングロードランナー・れん",
    "スピードスタイル・しょうた",
    "ダッシュディーバ・デボラ",
    "ランニングリーダー・りょうすけ",
    "ストライドストライカー・すみれ",
    "マラソンモンスター・まさこ",
    "スニーカーシャーマン・しんいち",
    "ジョギングジェット・じゅんいち",
    "パワーパワープレイヤー・ひなた",
"ランラン・りな",
  ];
  // 友人格納objに名前別で配列作成
  bacefook.friendNames.forEach(name => { bacefook.friends[name] = []; });

  // 配列を受け取り、番号をランダム指定
  const getRandomElement = array => {
    // Given an array, returns a random element
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  // const starters = ['totally just', 'just', 'completely', 'waaaaah! i', 'i just', 'a salaryman', 'a salaryman', 'yesterday I', 'a ninja', 'my boss'];
  // const verbs = ['ate', 'drank', 'threw up in', 'refactored', 'iterated on', 'thought about', 'threw up on', 'saw', 'walked to', 'got lost in', 'walked into', 'googled', 'drove', 'ran to', 'worked on', 'slept on', 'slept in'];
  // const fillers = ['my', 'your', 'his', 'her', 'my favorite', 'a beautiful', 'a delicious', 'that', 'this', 'an interesting', '', 'the best', 'the greatest', 'a delightful'];
  // const nouns = ['DIG', 'restaurant', 'omakase', 'hitomedia', 'family mart', 'private jet', 'mama', 'lawsons', 'conbini', 'whisky', 'onigiri', 'car', 'food', 'house', 'toilet', 'tokyo', 'city', 'iphone', 'google', 'unicorn', 'mess', 'pirate ship', 'ninja'];
  const friendIcons = [
    "../images/runners-icon/image01.jpeg",
    "../images/runners-icon/image02.jpeg",
    "../images/runners-icon/image03.jpeg",
    "../images/runners-icon/image04.jpeg",
    "../images/runners-icon/image05.jpeg",
    "../images/runners-icon/image06.jpeg",
    "../images/runners-icon/image07.jpeg",
    "../images/runners-icon/image08.jpeg",
    "../images/runners-icon/image09.jpeg",
    "../images/runners-icon/image10.jpeg",
  ]
  const impressions = [
    "今日は最高の天気でマラソンを楽しめました！心地よい風と爽やかな景色に包まれながら走ることができて、本当に幸せでした。☀️🏃‍♂️",
    "新しいトレイルを発見！自然の中でランニングするのは最高ですね。新たなコースでの挑戦は心と体に新鮮な刺激を与えてくれます。🌲💪",
    "マラソンは孤独なスポーツ？いいえ、仲間との共有があるからこそ楽しいんです！今日は仲間と一緒に走り、笑い、励まし合いました。最高のチームワークです！👟👟",
    "今日のトレーニングはヒルスプリント！急な坂道を全力で駆け上がる感覚は言葉では表せません。辛いけど、充実感がたまりません！💥💦",
    "レースデー！緊張と期待が入り混じった気持ちでスタートラインに立ちました。結果よりも自分との戦い、自己克服が大切ですね。🏁👊",
    "マラソンの醍醐味はランニング中に感じる一体感です。自分と自然との調和が生まれる瞬間、それが私の至福の時間です。🍃🌺 ",
    "ランニングの前にはしっかりストレッチ！怪我を予防し、柔軟性を保つためには欠かせないですね。今日も心と体を整えてから走り出します！🙆‍♂️💪",
    "ランニング中に聴く音楽は気分を左右しますよね。今日は気合いを入れる曲でパワフルに走ります！🎵🏃‍♀️ ",
    "ランニングはただ走るだけじゃない！筋力トレーニングやストレッチも大切です。バランスよくトレーニングすることで、パフォーマンスも向上します！💪🔥",
    "マラソン完走！ゴールするまでの苦しみ、喜び、感動…全てが一瞬にして報われる瞬間です。次なる目標に向けて、さらなる挑戦を楽しみます！🏅🌟",
    "今日は雨の中ランニング！挑戦的な天候の中でも走ることで、自分の限界に挑戦しました。雨の中のランニングもなかなかの経験ですね。☔️🏃‍♂️",
    "ランニングはただ身体を鍛えるだけでなく、心も鍛えます。走りながら考え事をする時間は、自分と向き合う貴重な時間です。🌟💭",
    "春の陽気に誘われて、新しいシューズを購入しました！快適な履き心地で、これからのランニングが楽しみです。👟🌸",
    "ランニング中に出会った素敵な景色をシェア！自然の美しさに触れながら走ることで、心がリフレッシュされます。🌳💖",
    "ウィークリーランニングチャレンジ！今週は目標距離をクリアするぞ！モチベーションを上げて、走り込みます！💪🏃‍♀️",
    "マラソンの秘訣は食事管理！バランスの取れた食事でエネルギーを補給し、パフォーマンスを最大限に引き出します。🥗🍎",
    "ランニング中に浮かんだアイデアをメモ！走りながら思考がクリアになる不思議な感覚、これがランニングの魅力ですね。📝🏃‍♂️",
    "ランニングは身体だけでなく、精神的にも健康に良い影響を与えます。ストレス解消にもってこいのスポーツです！🧘‍♂️💆‍♀️",
    "朝ラン vs 夜ラン、どちらが好き？私は朝の爽やかな空気と静寂が好きです。気持ち良い朝のランニングで一日をスタート！🌅🏃‍♂️",
    "ランニング中のストレッチで柔軟性をキープ！筋肉の疲労を軽減し、ケガ予防にも効果的です。スムーズな走りを目指して！🙆‍♀️💨",
    "ランニングのお供には欠かせないウェア！快適なランニングウェアで走ると、モチベーションも上がりますね。👕💨",
    "ランニングは日々の積み重ねが大切です。コツコツと走り続けることで、着実に成長していく自分を感じます。🏃‍♂️📈",
    "マラソンはゴールだけが全てじゃない！走り始めからゴールまでの全ての瞬間が、自分を成長させてくれます。🌟👣",
    "ランニング中に出会ったワンシーンをキャプチャ！ランニングはいつも新しい発見がありますね。📸🏃‍♀️",
    "マラソンには頑張った自分へのご褒美が欠かせません！ゴール後の美味しい食事は格別です。🍔🥇",
    "ランニングは心の整理をする時間でもあります。走りながら考え事を整理することで、スッキリした気持ちになれます。💭🏃‍♂️",
    "気温管理も重要！ランニング中の水分補給と涼しい場所でのクールダウンで、熱中症予防を心がけます。💦❄️",
    "ランニング中のエナジージェルでエネルギーチャージ！長距離走には必需品ですね。🏃‍♀️💥",
    "ランニング後のストレッチでリカバリー！筋肉の疲労を解消し、次のトレーニングに備えます。🙆‍♂️💤",
    "ランニングの魅力は日々の成長にあります。自分との闘いを楽しみながら、常に前進していきます！🌟💪",
  ]
  const hashtags = [
    "#ランニングライフ",
    "#ランニングコミュニティ",
    "#ランニングモチベーション",
    "#ランニングマイルストーン",
    "#ランニング挑戦",
    "#ランニングトレーニング",
    "#ランニングコース",
    "#ランニングウェア",
    "#ランニングシューズ",
    "#ランニングストレッチ",
    "#ランニングダイエット",
    "#ランニングエナジー",
    "#ランニングルート",
    "#ランニングスピード",
    "#ランニングタイム",
    "#ランニングフォーム",
    "#ランニングワークアウト",
    "#ランニングレース",
    "#ランニングチャレンジ",
    "#ランニングフィットネス",
    "#ランニングサポート",
    "#ランニングモニタリング",
    "#ランニングメンタル",
    "#ランニングリカバリー",
    "#ランニングカウントダウン",
    "#ランニングインスピレーション",
    "#ランニングライフスタイル",
    "#ランニングマインドフルネス",
    "#ランニングトラック",
    "#ランニングレジリエンス",
  ];
  const feelings = ['happy', 'smug', 'lovestruck', 'gross', 'scared', 'tired', 'angry', 'frustrated', 'excited', ''];
  const images = [
    "../images/main-pic/image01.jpeg",
    "../images/main-pic/image02.jpeg",
    "../images/main-pic/image03.jpeg",
    "../images/main-pic/image04.jpeg",
    "../images/main-pic/image05.jpeg",
    "../images/main-pic/image06.png",
    "../images/main-pic/image07.jpeg",
    "../images/main-pic/image08.jpeg",
    "../images/main-pic/image09.jpeg",
    "../images/main-pic/image10.jpeg",
    "../images/main-pic/image11.jpeg",
    "../images/main-pic/image12.jpeg",
    "../images/main-pic/image13.jpeg",
    "../images/main-pic/image14.jpeg",
    "../images/main-pic/image15.jpeg",
    "../images/main-pic/image16.jpeg",
    "../images/main-pic/image17.png",
    "../images/main-pic/image18.jpeg",
    "../images/main-pic/image19.jpeg",
    "../images/main-pic/image20.jpeg",


  ];

  // 文章を生成する
  const generateRandomText = () => {
    return [
      getRandomElement(starters),
      getRandomElement(verbs),
      getRandomElement(fillers),
      getRandomElement(nouns)
    ].join(' ');
  };

  // timeoffsetの指定があれば、現在時刻から引き算する
  const generatePostObj = timeOffset => {

    // if an offset is provided, make the timestamp that much older, otherwise just use the current time
    const timestamp = timeOffset ? new Date(new Date().getTime() - timeOffset) : new Date();

    return {
      friend: getRandomElement(bacefook.friendNames),
      // text: generateRandomText(),
      text: getRandomElement(impressions),
      hashtag:getRandomElement(hashtags),
      feeling: getRandomElement(feelings),
      image: getRandomElement(images),
      good: function(){
        return Math.random * 10;
      },
      friendIcon:getRandomElement(friendIcons),
      timestamp,
    };
  };

  // objを引数に取り、友人格納objの名前キーにプッシュ＆postの内容を格納
  const addPost = obj => {
    const friend = obj.friend;
    bacefook.friends[friend].push(obj);
    bacefook.newsfeed.push(obj);
  };

  // timeoffsetを引数に取り、投稿objを生成。addpostに渡す
  const createPost = timeOffset => {
    const newPost = generatePostObj(timeOffset);
    addPost(newPost);
  };

  // １０回繰り返す
  for (let i = 0; i < 10; i++) {
    // make the starting posts look like they were posted over the course of the past day
    // 2,4,6,~20 + 0<n<1 最後に掛け算でミリ秒に変換
    const timeOffset = (2 * (10 - i) + Math.random()) * 60 * 60 * 1000;
    createPost(timeOffset);
  }

  // timeoffsetを使用せず、objを作成。時間になるとshedulerが実行される。
  const scheduler = () => {
    createPost(null);
    // setTimeout(scheduler, (3 + Math.random() * 5) * 1000); // generate a new post every 3 to 8 seconds
    setTimeout(scheduler, 8000); // generate a new post every 3 to 8 seconds
  };

  scheduler();
})();
