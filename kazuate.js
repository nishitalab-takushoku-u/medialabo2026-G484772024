// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu++
  let r = document.querySelector('span#kaisu');
  r.textContent = kaisu;
  // ここletまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso;
  yoso = document.querySelector('input#yoso');
  let s = Number(yoso.value);
  let result = document.querySelector('p#result');
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する
  if(s === kotae){
    result.textContent = '正解です。おめでとう。'
  } else if(kaisu >= 3){
    result.textContent = '答えは' + kotae + 'でした。すでにゲームは終わっています。'
  } else if(s < kotae){
    result.textContent = 'まちがい。もっと大きいです。'
  } else if(s > kotae){
    result.textContent = 'まちがい。もっと小さいです。'
  }

  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let b = document.querySelector('button#print');
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
b.addEventListener('click', hantei);