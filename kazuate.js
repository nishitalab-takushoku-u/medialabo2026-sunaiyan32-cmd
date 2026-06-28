// 課題 4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random() * 10) + 1;
console.log("答え（デバッグ用）: " + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let seikai = false;

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  kaisu += 1;
  document.querySelector("span#kaisu").textContent = kaisu;

  let yoso = Number(document.querySelector("input#yoso").value);
  let kekka = document.querySelector("p#result");

  if (kaisu >= 4 || seikai === true) {
    kekka.textContent = "答えは " + kotae + " でした．すでにゲームは終わっています";
  } else if (yoso === kotae) {
    kekka.textContent = "正解です．おめでとう!";
    seikai = true;
  } else if (kaisu === 3) {
    kekka.textContent = "まちがい．残念でした答えは " + kotae + " です．";
  } else if (yoso < kotae) {
    kekka.textContent = "まちがい．答えはもっと大きいですよ";
  } else {
    kekka.textContent = "まちがい．答えはもっと小さいですよ";
  }
}

// ボタンを押した時のイベントハンドラとして hantei を登録
let b = document.querySelector("button#kaito");
b.addEventListener("click", hantei);
