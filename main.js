'use strict'

let url = 'http://api.openweathermap.org/data/2.5/weather?q=&units=metric&APPID=5d066958a60d315387d9492393935c19';

const citySelect = document.getElementById('citySelect');
const cityNameElem = document.getElementById('cityName');
const temperatureElem = document.getElementById('temperature');
const pressureElem = document.getElementById('pressure');
const descriptionElem = document.getElementById('description');
const humidityElem = document.getElementById('humidity');
const windSpeedElem = document.getElementById('windSpeed');
const windDirectionElem = document.getElementById('windDirection');
const weatherIconElem = document.getElementById('weatherIcon');
const regionalCities = [
    "Kiev", "Kharkiv", "Odesa", "Dnipro", "Donetsk", "Zaporizhzhia", "Lviv", "Kryvyi Rih",
    "Mykolaiv", "Mariupol", "Luhansk", "Vinnytsia", "Makiivka", "Simferopol", "Kherson",
    "Chernihiv", "Kropyvnytskyi", "Poltava", "Zhytomyr", "Sumy", "Rivne", "Ternopil",
    "Ivano-Frankivsk", "Uzhhorod", "Lutsk", "Cherkasy", "Khmelnytskyi", "Chernivtsi"
];


regionalCities.forEach(city => {
    const option = document.createElement('option');
    option.textContent = city;
    citySelect.appendChild(option);
});


citySelect.addEventListener('change', () => {
    const selectedCity = citySelect.value.trim();
    getWeather(selectedCity);
});


function getWeather(city) {
    console.log(url.replace('q=', `q=${city}`))
    fetch(url.replace('q=', `q=${city}`))
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            updateWeatherInfo(data);
        })
        .catch(error => {
            console.error(error);
        });
}


function updateWeatherInfo(data) {
    cityNameElem.textContent = data.name;
    temperatureElem.textContent = `Temperature: ${data.main.temp}°C`;
    pressureElem.textContent = `Pressure: ${data.main.pressure} hPa`;
    descriptionElem.textContent = `Description: ${data.weather[0].description}`;
    humidityElem.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeedElem.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    windDirectionElem.textContent = `Wind Direction: ${data.wind.deg}°`;
    weatherIconElem.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
}


function clearWeatherInfo() {
    cityNameElem.textContent = '';
    temperatureElem.textContent = '';
    pressureElem.textContent = '';
    descriptionElem.textContent = '';
    humidityElem.textContent = '';
    windSpeedElem.textContent = '';
    windDirectionElem.textContent = '';
    weatherIconElem.src = '';
}

getWeather(regionalCities[0]);
