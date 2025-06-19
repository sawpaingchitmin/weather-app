import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import getBackgroundClass from './utils/getBackgroundClass';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const timezoneOffset = weatherData ? weatherData.timezone : 0;
  const backgroundClass = getBackgroundClass(timezoneOffset);

  return (
    <div className={`app-container ${backgroundClass}`}>
      <SearchBar setWeatherData={setWeatherData} />
      <WeatherDisplay weatherData={weatherData} backgroundClass={backgroundClass} timezoneOffset={timezoneOffset} />
    </div>
  )
}

export default App;
