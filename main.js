'use strict'


let message = '';

const birthYear = +prompt('Введіть рік народження');
if (!birthYear) {
    alert('Шкода, що Ви не захотіли ввести свій рік народження');
} else {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    message = `Тобі ${age} років.\n`;
}
const city = prompt('Введіть місто проживання');
if (!city) {
    alert('Шкода, що Ви не захотіли ввести своє місто проживання');
} else {
    if (city.toLowerCase() === 'київ' || city.toLowerCase() === 'вашингтон' || city.toLowerCase() === 'лондон') {
        const country = getCountryByCapital(city);
        message += `Ти живеш у столиці ${country}.\n`;
    } else {
        message += `Ти живеш у місті ${city}.\n`;
    }
}
const sport = prompt('Введіть улюбленний вид спорту');
if (!sport) {
    alert('Шкода, що Ви не захотіли ввести свій улюбленний вид спорту');
} else {
    if (sport.toLowerCase() === 'баскетбол' || sport.toLowerCase() === 'футбол' || sport.toLowerCase() === 'бокс') {
        const champion = getChampion(sport);
        message += `Круто! Хочеш стати ${champion}?`;
    } else {
        message += `Твій улюбленний вид спорту ${sport}.`;
    }
}

function getCountryByCapital(capital) {
    switch (capital.toLowerCase()) {
        case 'київ':
            return 'України';
        case 'вашингтон':
            return 'Сполучених Штатів Америки';
        case 'лондон':
            return 'Великобританії';
    }
}

function getChampion(sport) {
    switch (sport.toLowerCase()) {
        case 'баскетбол':
            return 'Леброном Джеймсом';
        case 'футбол':
            return 'Ліонелі Мессі';
        case 'бокс':
            return 'Мухамедом Алі';
    }
}

alert(message);