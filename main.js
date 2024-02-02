const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log(arr);

console.log('\nЗнайти мінімальний елемент масиву та його порядковий номер.');
let minNum = arr[0];
let minIndex = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
        minNum = arr[i];
        minIndex = i;
    }
}

console.log(`Мінімальний елемент масиву: ${minNum}`);
console.log(`Порядковий номер мінімального елемента: ${minIndex}`);


console.log('\nЗнайти максимальний елемент масиву та його порядковий номер.');
let maxNum = arr[0];
let maxIndex = 0;
arr.forEach(function (item, index) {
    if (item > maxNum) {
        maxNum = item;
        maxIndex = index;
    }
});

console.log(`Максимальний елемент масиву: ${maxNum}`);
console.log(`Порядковий номер максимального елемента: ${maxIndex}`);


console.log('\nВизначити кількість негативних елементів.');
let negativeCount = arr.reduce(function (accum, currentValue) {
    return currentValue < 0 ? accum + 1 : accum;
}, 0);

console.log(negativeCount);


console.log('\nЗнайти кількість непарних позитивних елементів.');
let oddPosCount = arr.reduce(function (accum, currentValue) {
    return currentValue > 0 && currentValue % 2 !== 0 ? accum + 1 : accum;
}, 0);

console.log(oddPosCount);


console.log('\nЗнайти кількість парних позитивних елементів.');
let PosEvenCount = arr.reduce(function (accum, currentValue) {
    return currentValue > 0 && currentValue % 2 === 0 ? accum + 1 : accum;
}, 0);

console.log(PosEvenCount);

console.log('\nЗнайти суму парних позитивних елементів.');
let sum = arr.reduce(function (accum, currentValue) {
    return currentValue > 0 && currentValue % 2 === 0 ? accum + currentValue : accum;
}, 0);

console.log(sum);


console.log('\nЗнайти суму непарних позитивних елементів.');
sum = arr.reduce(function (accum, currentValue) {
    return currentValue > 0 && currentValue % 2 !== 0 ? accum + currentValue : accum;
}, 0);

console.log(sum);


console.log('\nЗнайти добуток позитивних елементів.');
let prod = arr.reduce(function (accum,currentValue) {
    return currentValue > 0 ? accum * currentValue : accum;
}, 1);

console.log(prod);


console.log('\nЗнайти найбільший серед елементів масиву, ост альні обнулити.');
let maxElem = arr[0];
arr.forEach(function (item) {
    if (item > maxElem) {
        maxElem = item;
    }
});

arr.forEach(function (item, index, array) {
    array[index] = (item === maxElem) ? item : 0;
});

console.log(arr);