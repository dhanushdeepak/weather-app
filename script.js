document.getElementById('get-weather-btn').addEventListener('click', getWeather);

function getWeather() {
    const location = document.getElementById('location-input').value;
    const apiKey = 'http://api.weatherapi.com/v1/current.json?key=51f5db559bb74dc697e101028242806&q={chennai}'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                displayError(data.message);
            }
        })
        .catch(error => {
            displayError('An error occurred while fetching weather data.');
        });
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Condition: ${data.weather[0].description}</p>
    `;
}

function displayError(message) {
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `<p class="error">${message}</p>`;
}
