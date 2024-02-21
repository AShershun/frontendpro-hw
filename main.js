'use strict'

let voteContainer = document.querySelector('#voteContainer');
let defaultArrSmiles = [{
    smile: '😀',
    vote_count: 0
}, {
    smile: '😃',
    vote_count: 0
}, {
    smile: '😂',
    vote_count: 0
}, {
    smile: '😢',
    vote_count: 0
}, {
    smile: '😡',
    vote_count: 0
}
];
//Перевірка на наявність збережених даних у localStorage
let arrSmiles = localStorage
    .getItem('smiles') ? getSmilesFromLocalStorage() : defaultArrSmiles;

//Створення тегів та їх наповнення з масиву смайлів
arrSmiles.forEach((smile, index) => {
    const tempSmileDiv = document.createElement('div');
    const tempSmile = document.createElement('div');
    const tempSmileCount = document.createElement('div');

    tempSmileDiv.classList.add('smile_item');

    tempSmile.textContent = smile.smile;
    tempSmile.classList.add('smile');
    tempSmile.addEventListener('click', () => {
        vote(smile, index);
    });

    tempSmileCount.textContent = smile.vote_count;

    tempSmileCount.style.textAlign = 'center';

    voteContainer.appendChild(tempSmileDiv);
    tempSmileDiv.appendChild(tempSmile);
    tempSmileDiv.appendChild(tempSmileCount);
});

//Голосування, оновлення даних у LocalStorage та у HTML
function vote(smile, index) {
    smile.vote_count++;
    updateCountInLocalStorage(arrSmiles);
    document.querySelector(`.smile_item:nth-child(${index + 1}) div:nth-child(2)`)
        .textContent = smile.vote_count;
}

function updateCountInLocalStorage(smiles) {
    localStorage.setItem('smiles', JSON.stringify(smiles));
}

//Дістання данних з localStorage
function getSmilesFromLocalStorage() {
    const smilesString = localStorage.getItem('smiles');
    return JSON.parse(smilesString);
}