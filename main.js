let hours = +prompt('Введіть кількість годин');
let seconds = 0


if (!isNaN(hours) && hours > 0) {
    seconds = hours * 3600;
} else {
    alert('Ви ввели 0, або не число')
}

let resultMessage = `Кількість секунд у ${hours} годинах: ${seconds}`;
alert(resultMessage);