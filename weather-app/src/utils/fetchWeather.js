async function fetchWeather(city, setWeatherData) {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          if (data.cod === 200) {
            setWeatherData(data);
          } else {
            console.error("City not found");
            setWeatherData(null);
          }
        } catch (error) {
          console.error("Error fetching weather data:", error);
          setWeatherData(null);
        }
}

export default fetchWeather;
