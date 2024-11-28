// 投稿フォームと投稿リストを取得
const postForm = document.getElementById('postForm');
const postContent = document.getElementById('postContent');
const postList = document.getElementById('postList');

// 投稿イベントを処理
postForm.addEventListener('submit', (event) => {
  event.preventDefault(); // フォームの送信を防ぐ

  // 入力内容を取得
  const content = postContent.value;

  if (content.trim() === "") {
    alert("コメントを入力してください！");
    return;
  }

  // 投稿を表示する要素を作成
  const post = document.createElement('div');
  post.classList.add('post');
  post.textContent = content;

  // 投稿リストに追加
  postList.appendChild(post);

  // テキストエリアをクリア
  postContent.value = "";
});
