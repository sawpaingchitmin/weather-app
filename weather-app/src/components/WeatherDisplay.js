import { useState } from 'react';
import WeatherDetails from './WeatherDetails';
import CountryDetails from './CountryDetails';
import TemperatureToggle from './TemperatureToggle';

function WeatherDisplay(props) {
    const [isCelsius, setIsCelsius] = useState(true);
    const convertTemp = (kelvinTemp) => {
        return isCelsius
            ? (kelvinTemp - 273.15).toFixed(0) + "°C" 
            : ((kelvinTemp - 273.15) * 9/5 + 32).toFixed(0) + "°F";
    };
    return (
        <div>
            {
                props.weatherData ? (
                    <div className={`weather-card ${props.backgroundClass}`}>
                        <CountryDetails weatherData={props.weatherData} timezoneOffset={props.timezoneOffset} />
                        <WeatherDetails weatherData={props.weatherData} convertTemp={convertTemp} />
                        <TemperatureToggle isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
                    </div>
                ) : <p>No weather data available.</p>
            }
        </div>
    );
}

export default WeatherDisplay;