let output = '';

console.log('Вивести на сторінку в один рядок через кому числа від 10 до 20.');
for (let i = 10; i <= 20; i++) {
    output += i < 20 ? i + ', ' : i + '.';
}

console.log(output);

console.log('\nВивести квадрати чисел від 10 до 20.');
output = ''
for (let i = 10; i <= 20; i++) {
    output += i < 20 ? i * i + ', ' : i * i + '.';
}

console.log(output);

console.log('\nВивести таблицю множення на 7.');
for (let i = 1; i <= 10; i++) {
    output = `${i} * 7 = ${i * 7}`;
    console.log(output);

}

output = 0;
console.log('\nЗнайти суму всіх цілих чисел від 1 до 15.');
for (let i = 1; i <= 15; i++) {
    output += i;
}
console.log(output);

output = 1;
console.log('\nЗнайти добуток усіх цілих чисел від 15 до 35.');
for (let i = 15; i <= 35; i++) {
    output *= i;
}
console.log(output);


output = 0;
console.log('\nЗнайти середнє арифметичне всіх цілих чисел від 1 до 500.');
for (let i = 1; i <= 500; i++) {
    output += i;
}

console.log(output/500);

output = 0
counter = 30;
console.log('\nВивести суму лише парних чисел в діапазоні від 30 до 80.');
while (counter <= 80) {
    output += counter % 2 === 0 ? counter : 0;
    counter++;
}

console.log(output);

output = '';
counter = 100;
console.log('\nВивести всі числа в діапазоні від 100 до 200 кратні 3.');
while (counter <= 200) {
    if (counter % 3 === 0) {
        output +=  counter + ' ';
    }
    counter++;
}
console.log(output);

output = '';
num = +prompt('Введіть натуральне число')
console.log('\nДано натуральне число. Знайти та вивести на сторінку всі його дільники.');
if (!isNaN(num) && num > 0) {
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            output += i < num ? i + ', ' : i + '.';
        }
    }
    console.log(`Усі дільники чисоа ${num}: ${output}`);
} else {
    console.log('Ви ввели не число!');
}

output = '';
console.log('\nВизначити кількість його парних дільників.');
for (let i = 1; i <= num; i++) {
    if (num % i === 0 && i % 2 === 0) {
        output++;
    }
}

console.log(output);

output = 0;
console.log('\nЗнайти суму його парних дільників.');
for (let i = 1; i <= num; i++) {
    if (num % i === 0 && i % 2 === 0) {
        output += i;
    }
}

console.log(output);

output = '';
console.log('\nНадрукувати повну таблицю множення від 1 до 10.');
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        output = `${i} * ${j} = ${i * j}`;
        console.log(output);
        if (j === 10) {
            console.log('\n');
        }
    }
}