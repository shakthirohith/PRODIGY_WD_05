document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            displayWeather(data);
        } else {
            alert('City not found');
        }
    } catch (error) {
        console.error('Error fetching the weather data', error);
        alert('Error fetching the weather data');
    }
}

function displayWeather(data) {
    const cityName = data.name;
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById('cityName').textContent = cityName;
    document.getElementById('temp').textContent = `Temperature: ${temp} °C`;
    document.getElementById('description').textContent = `Description: ${description}`;
    document.getElementById('weatherIcon').src = icon;
    document.getElementById('weatherIcon').alt = description;
}
