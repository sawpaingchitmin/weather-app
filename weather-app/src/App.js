import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    const apiKey = "e50567c464f5b4658800c590ecdf0ae7";
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

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  )
}

export default App;
