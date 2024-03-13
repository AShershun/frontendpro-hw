const url = 'https://jsonplaceholder.typicode.com';
const postsListElem = document.querySelector('#postList');
const postInfoElem = document.querySelector('#postInfo');
const postsTitle = document.querySelector('#post-title');
const postsBody = document.querySelector('#post-body');
const createBtn = document.querySelector('#create-post');

let postsData = [];

function createNewPost() {
    postsListElem.innerHTML = '<div>Loading....</div>';

    const newPost = {
        userId: 1,
        title: postsTitle.value,
        body: postsBody.value
    }

    fetch(url + '/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(newPost),
    }).then(() => {
        postsData.push(newPost);
        showAllPost(postsData);
    });
}

function getPostComments(postId) {
    fetch(url + `/posts/${postId}/comments`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}


function showPostInfo(post) {
    postInfoElem.innerHTML = `
        <div class="postInfo">
            <div class="post-title">${post.title}</div>
            <div class="post-body">${post.body}</div>
            <button onclick="getPostComments(${post.id})">Comments</button>
        </div>`;
}

function showAllPost(postsArr) {
    postsListElem.innerHTML = '';

    postsArr.forEach(post => {
        const tempPost = document.createElement('div');
        tempPost.innerText = post.title;
        tempPost.classList.add('post');

        tempPost.addEventListener('click', () => {
            showPostInfo(post);
        });

        postsListElem.appendChild(tempPost);
    })
}

function getAllPosts() {
    fetch(url + '/posts')
        .then(response => response.json())
        .then(data => {
            postsData = data;
            showAllPost(postsData);
        })
}


//Main
getAllPosts();
createBtn.addEventListener('click', () => createNewPost())