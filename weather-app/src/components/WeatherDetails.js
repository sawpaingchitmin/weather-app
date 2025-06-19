function WeatherDetails({ weatherData, convertTemp }) {
    const iconCode = weatherData ? weatherData.weather[0].icon : null;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    return (
        <>
            <div className="weather-info">
                <p>{weatherData.weather[0].main}</p>
                <img src={iconUrl} alt="Weather Icon" />
                <p>{convertTemp(weatherData.main.temp)}</p>
            </div>
            <p>Feels Like: {convertTemp(weatherData.main.feels_like)}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {(weatherData.wind.speed * 2.237).toFixed(0)} mph</p>
        </>
    )
}

export default WeatherDetails;