const apiKey = 'd7d2666043d41297e70e98be324b4a1c';

const getWeatherBtn = document.getElementById('getWeatherBtn');
const cityInput = document.getElementById('city');
const weatherInfo = document.getElementById('weatherInfo');
const historyList = document.getElementById('historyList');

const history = [];
displayHistory(history);

getWeatherBtn.addEventListener('click', function() {

    const city = cityInput.value.trim();
    if (city === '') {
        alert('Please enter a city name.');
        return;
    }
    getWeather(city);
});

cityInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        getWeatherBtn.click();

    }
});

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
                updateHistory(city);
            } else {
                alert(data.message);
            }
        })
        .catch(error => 
            console.error('Error fetching weather data:', error)
        );
}


function displayWeather(data) {
    weatherInfo.innerHTML = 
        `<h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>`;
}


function updateHistory(city) {
    if (!history.includes(city)) {
        history.push(city);
        displayHistory(history);
    }
}

function displayHistory(history) {
    historyList.innerHTML = '';
    history.forEach(city => {
        const li = document.createElement('li');
        li.textContent = city;
        li.addEventListener('click', function() {
            cityInput.value = city;
            getWeather(city);
        });
        historyList.appendChild(li);
    });

}
