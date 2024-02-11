console.log('Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).\n');
let i = 20;
let result = '';

while (i <= 30) {
    result += i < 30 ? i + ', ' : i + '.';
    i += 0.5;
}

console.log(result);

console.log('\nОдин долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.\n');

i = 10;
result = '';

while (i <= 100) {
    result += i < 100 ? i * 27 + ', ' : i * 27 + '.';
    i += 10;
}

console.log(result);

console.log('\nДане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.');
let n = +prompt('Введіть число N:');
console.log(`Число N = ${n}`);
i = 1
result = '';

while (i*i <= n && i <= 100) {
    result += (i+1) * (i+1) <= n ? i + ', ' : i + '.';
    i++;
}

console.log(result);

console.log('\nДане ціле число. З\'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).\n');
let isSimpleNum = +prompt('Введіть число для перевірки чи є воно простим');

if (isSimpleNum <= 1) {
    console.log('${isSimpleNum} не є простим числом.');
} else {
    let flag = true;
    for (let i = 2; i < isSimpleNum; i++) {
        if (isSimpleNum % i === 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log(`${isSimpleNum} є простим числом.`);
    } else {
        console.log(`${isSimpleNum} не є простим числом.`);
    }
}

console.log('\nДане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).');

let targetNum = +prompt('Введіть число');
let counter = 0;

while (targetNum > 1 && targetNum % 3 === 0) {
    targetNum = targetNum / 3;
    counter++;
}

if (targetNum === 1) {
    console.log(`Число можна отримати зведенням числа 3 до ступеня ${counter}.`);
} else {
    console.log(`${targetNum} не можна отримати зведенням числа 3.`);
}