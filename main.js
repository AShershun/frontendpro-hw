'use strict'

//Привласнюємо дані до змінних
let slideIndex = 1;
const totalSlides = 9;
let img = document.querySelector('#imgCar');
let nextButton = document.querySelector('#next');
let prevButton = document.querySelector('#prev');
let numOfImg = document.querySelector('#number_of_img')

showSlides(slideIndex);

//Перемикання слайдів
nextButton.addEventListener('click', () => {
    switchSlides(1);
});

prevButton.addEventListener('click', () => {
    switchSlides(-1);
});

function switchSlides(index) {
    showSlides(slideIndex + index);
}

//Відображення/зміна картинки та обробка логіки слайдера
function showSlides(index) {
    slideIndex = (index < 1) ? 1 : (index > totalSlides) ? totalSlides : index;

    prevButton.style.visibility = (slideIndex === 1) ? 'hidden' : 'visible';
    nextButton.style.visibility = (slideIndex === totalSlides) ? 'hidden' : 'visible';

    numOfImg.textContent = `${slideIndex} / 9`
    img.src = `./images/${slideIndex}.jpg`;
}