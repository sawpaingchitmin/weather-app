import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    // const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const apiKey = 'e50567c464f5b4658800c590ecdf0ae7';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
      // Fetch API call
      const response = await fetch(apiUrl);

      // Parse JSON response
      const data = await response.json();

      // Check if city was found
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        console.error("City not found");
        setWeatherData(null);
      }
    } catch (error) {
      // Handle any errors that occur
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
    }
  };

  const timezoneOffset = weatherData ? weatherData.timezone : 0;
  const localTime = new Date(new Date().getTime() + timezoneOffset * 1000);
  const hours = localTime.getUTCHours();

  let backgroundClass = "";
  if(timezoneOffset) {
    if (hours >= 6 && hours < 19) {
        backgroundClass = "morning-bg";
    } 
    // else if (hours >= 12 && hours < 17) {
    //     backgroundClass = "afternoon-bg";
    // } else if (hours >= 17 && hours < 20) {
    //     backgroundClass = "evening-bg";
    // } 
    else {
        backgroundClass = "night-bg";
    }
  }

  return (
    <div className={`app-container ${backgroundClass}`}>
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay weatherData={weatherData} backgroundClass={backgroundClass} localTime={localTime} />
    </div>
  )
}

export default App;
