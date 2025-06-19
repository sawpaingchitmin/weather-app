import { useState } from 'react';
import fetchWeather  from '../utils/fetchWeather'
function SearchBar({ setWeatherData }) {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        fetchWeather(city, setWeatherData)
      };

    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Enter city or country" 
                value={city}
                onChange={e => setCity(e.target.value)} className="search-input"
            />
            <button onClick={handleSearch} className="search-button">Search</button>
        </div>
    );
}

export default SearchBar;