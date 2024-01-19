let num1 = +prompt('Введіть перше число');
let num2 = +prompt('Введіть друге число');
let results = ''

if(isNaN(num1 + num2)) {
    results = `Ви не ввели число`;
} else {
    // +
    results += num1 + ' + ' + num2 + " = " + (num1 + num2) + "\n";
    // -
    results += num1 + ' - ' + num2 + " = " + (num1 - num2) + "\n";
    // *
    results += num1 + ' * ' + num2 + " = " + (num1 * num2) + "\n";
    // /
    if(num2 === 0) {
        results += 'На 0 не можна ділити';
    } else {
        results += num1 + ' / ' + num2 + " = " + (num1 / num2);
    }
}

alert(results)