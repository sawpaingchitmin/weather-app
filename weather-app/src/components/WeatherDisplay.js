function WeatherDisplay(props) {
    const iconCode = props.weatherData ? props.weatherData.weather[0].icon : null;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    return (
        <div>
            {
                props.weatherData ? (
                    <div className="weather-card">
                        <h2>{props.weatherData.name}</h2>
                        <p>Temperature: {(props.weatherData.main.temp - 273.15).toFixed(0)}°C</p>
                        <p>Feels Like: {(props.weatherData.main.feels_like - 273.15).toFixed(0)}°C</p>
                        <img src={iconUrl} alt="Weather Icon" />
                        <p>{props.weatherData.weather[0].main}</p>
                        <p>Humidity: {props.weatherData.main.humidity}%</p>
                        <p>Wind Speed: {(props.weatherData.wind.speed * 2.237).toFixed(0)} mph</p>
                    </div>
                ) : <p>No weather data available. Please search for a city.</p>
            }
        </div>
    );
}

export default WeatherDisplay;