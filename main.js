console.log('Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.')
const arr = [12, 'text', 3, 'symbol', 68, 94, 23, 2, 'https'];

function calcAverage(arr) {
    let sum = 0;
    let quantity = 0;
    arr.forEach(function (item) {
        if (typeof item === 'number') {
            quantity++;
            sum += item;
        }
    });

    if (quantity === 0) {
        return 'У масиві немає числових елементів';
    }

   return sum / quantity;
}
let average = calcAverage(arr);
console.log(average);



console.log('Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.')
let x = +prompt('Введіть перше число');
let y = +prompt('Введіть друге число');
let operation = prompt('Введіть операцію зі списку: +, -, *, /, %, ^')

function doMath(x, operation, y) {
    if(isNaN(x + y)) {
        return `Ви не ввели число`;
    } else if(x + y) {
        switch (operation) {
            case '+':
                return x + ' + ' + y + " = " + (x + y);
            case '-':
                return x + ' - ' + y + " = " + (x - y);
            case '*':
                return x + ' * ' + y + " = " + (x * y);
            case '/':
                if(y === 0) {
                    return 'На 0 не можна ділити';
                } else {
                    return x + ' / ' + y + " = " + (x / y);
                }
            case '%':
                return x + ' % ' + y + " = " + (x % y);
            case '^':
                return x + ' ^ ' + y + " = " + Math.pow(x, y);
            default:
                return `Ви не ввели операцію`;
        }
    }
}

alert(doMath(x, operation, y));


console.log('\nНаписати функцію заовнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.');
let length = +prompt('Вкажіть довжину масиву');
let depth = +prompt('Вкажіть глибину масиву');
function dimensionalArray(length, depth) {
    const array = []
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < depth; j++) {
            array.push(+prompt('Введіть елемент масиву'));
        }
    }
    return array;
}

alert(`Вам масив: ${dimensionalArray(length, depth)}`);


console.log('\nСтворити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. \'func(" hello world", [\'l\', \'d\'])\' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.\n');

function removeSymbols(string, symbolsArray) {
    symbolsArray.forEach(function (symbol) {
       string = string.replace(new RegExp(symbol, 'g'), '');
    });
    return string;
}

alert(removeSymbols('Hello World', ['l', 'd']));