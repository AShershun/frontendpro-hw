let operation = prompt('Введіть операцію зі списку: add, sub, mult, div')
let num1 = +prompt('Введіть перше число');
let num2 = +prompt('Введіть друге число');
let result = ''

if(isNaN(num1 + num2)) {
    result = `Ви не ввели число`;
} else  if(num1 + num2) {
    switch (operation) {
        case 'add':
            result = num1 + ' + ' + num2 + " = " + (num1 + num2);
            break;
        case 'sub':
            result = num1 + ' - ' + num2 + " = " + (num1 - num2);
            break;
        case 'mult':
            result = num1 + ' * ' + num2 + " = " + (num1 * num2);
            break;
        case 'div':
            if(num2 === 0) {
                result = 'На 0 не можна ділити';
            } else {
                result = num1 + ' / ' + num2 + " = " + (num1 / num2);
            }
            break;
        default:
            result = `Ви не ввели операцію`;
    }
}
alert(result)