console.log('Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація)');
let concatenateString = '';
for(let i = 0; i<3; i++) {
    let string = +prompt('Введіть текст:');
    concatenateString += string + ' ';
}
alert(concatenateString.trim());


console.log('Розбити за цифрами п\'ятизначне число і вивести у вихідному порядку через пробіл.');
//я понимаю что тут много лишнего, хотел просто показать что понимаю что по условию в переменной должно быть число, а не строка
let number =  (+prompt("Введіть 5-значне число:")).toString();
let stringNumber = '';

for(let i = 0; i < number.length; i++) {
    stringNumber += number.charAt(i) + ' ';
}

alert(stringNumber.trim());