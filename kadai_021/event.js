// HTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
const text =document.getElementById('text');

// ボタンをクリックすると2秒後に非同期処理を実行する
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  },2000);
});