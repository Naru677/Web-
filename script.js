let currentUser = null;
const posts = [];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault(); // デフォルトのフォーム送信動作をキャンセル
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        
        currentUser = { username, email };
        
        document.getElementById('profile-form').classList.add('hidden');
        document.getElementById('forum').classList.remove('hidden');
    });

    document.getElementById('postForm').addEventListener('submit', function(e) {
        e.preventDefault(); // デフォルトのフォーム送信動作をキャンセル
        const content = document.getElementById('postContent').value;
        
        const post = {
            id: Date.now(),
            author: currentUser.username,
            content: content,
            comments: []
        };
        
        posts.unshift(post);
        renderPosts();
        document.getElementById('postContent').value = '';
    });
});

function renderPosts() {
    const container = document.getElementById('posts');
    container.innerHTML = '';
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'card mb-3';
        postElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${post.author}</h5>
                <p class="card-text">${post.content}</p>
                <button class="btn btn-sm btn-outline-primary" onclick="addComment(${post.id})">コメントする</button>
                <div class="comments mt-3">
                    ${post.comments.map(comment => `
                        <div class="comment">
                            <strong>${comment.author}:</strong> ${comment.content}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        container.appendChild(postElement);
    });
}

function addComment(postId) {
    const comment = prompt('コメントを入力してください:');
    if (comment) {
        const post = posts.find(p => p.id === postId);
        post.comments.push({ author: currentUser.username, content: comment });
        renderPosts();
    }
}
