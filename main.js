'use strict';

let length = +prompt('Введіть довжину масиву:');
let arr = new Array(length);

for (let i = 0; i < length; i++) {
    arr[i] = prompt(`Введіть значення ${i + 1}-го елементу:`);
}

console.log('Створено масив:\n', arr);

arr.sort();
console.log('Відсортованний масив:\n', arr);

arr.splice(1, 3);
console.log('Видаленння з 2 по 4 елементу у масиві:\n', arr);