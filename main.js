'use strict'

const url = 'https://jsonplaceholder.typicode.com';
const postsListElem = document.querySelector('#postList');
const postInfoElem = document.querySelector('#postInfo');
const searchInput = document.querySelector('#search_input');
const searchBtn = document.querySelector('#search_btn');

let postsData, commentsData = [];


function getPostComments(postId) {
    fetch(url + `/posts/${postId}/comments`)
        .then(response => response.json())
        .then(data => {
            commentsData = data;

            showAllComments(commentsData)
        })
}


function showPostInfo(post) {
    postInfoElem.innerHTML = `
        <div class="postInfo">
            <div class="post_title">${capitalizeFirstLetter(post.title)}</div>
            <div class="post_body">${capitalizeFirstLetter(post.body)}</div>
            <button id="comments_btn" class="btn" onclick="getPostComments(${post.id})">Comments</button>
        </div>`;
}


function showAllPost(postsArr) {
    postsListElem.innerHTML = '';

    postsArr.forEach(post => {
        const tempPost = document.createElement('div');
        tempPost.innerText = capitalizeFirstLetter(post.title);
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


//________________Новий функціонал________________
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function showAllComments(commentsData) {
    const commentBtn = document.querySelector('#comments_btn');
    commentBtn.style.visibility = 'hidden';

    const commentLabel = document.createElement('div');
    commentLabel.textContent = '--Comments--';
    commentLabel.classList.add('comment_label');
    postInfoElem.appendChild(commentLabel);

    commentsData.forEach(comment => {
        const tempComment = document.createElement('div');
        tempComment.innerHTML = `
        <div class="comment_item">
            <div class="comment_owner">${capitalizeFirstLetter(comment.email)} 
            | ${capitalizeFirstLetter(comment.name)}</div>
            <div class="comment_body">${capitalizeFirstLetter(comment.body)}</div>
        </div>`;
        tempComment.classList.add('comment');

        postInfoElem.appendChild(tempComment);
    });
}

function fetchPost(postId) {
    return new Promise((resolve, reject) => {
        fetch(url + `/posts/${postId}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Response was`t ok');
                }
                return res.json();
            })
            .then(post => {
                resolve(post);
            })
            .catch(error => {
                reject(error);
            });
    });
}


searchBtn.addEventListener('click', () => {
    const postId = searchInput.value;
    // Напевно ця перевірка непротрібна раз в наc є Promise

    // if (postId < 1 || postId > 100) {
    //     alert('Введіть ID від 1 до 100');
    //     searchInput.value = '';
    //     return;
    // }
    fetchPost(postId)
        .then(data => {
            showPostInfo(data);
        })
        .catch(error => {
            alert(error)
        });
    searchInput.value = '';
})

//Main
getAllPosts();