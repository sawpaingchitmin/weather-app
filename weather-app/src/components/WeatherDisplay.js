import { useState } from 'react';
import { getName } from 'country-list';

function WeatherDisplay(props) {
    const iconCode = props.weatherData ? props.weatherData.weather[0].icon : null;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const countryName = props.weatherData ? getName(props.weatherData.sys.country) : null;

    const [isCelsius, setIsCelsius] = useState(true);
    const convertTemp = (kelvin) => {
        return isCelsius
            ? (kelvin - 273.15).toFixed(0) + "°C" 
            : ((kelvin - 273.15) * 9/5 + 32).toFixed(0) + "°F";
    };

    return (
        <div>
            {
                props.weatherData ? (
                    <div className="weather-card">
                        <h2>{props.weatherData.name}</h2>
                        <h3> {countryName} </h3>
                        <div className="weather-info">
                            <p>{props.weatherData.weather[0].main}</p>
                            <img src={iconUrl} alt="Weather Icon" />
                            <p>{convertTemp(props.weatherData.main.temp)}</p>
                        </div>
                        <p>Feels Like: {convertTemp(props.weatherData.main.feels_like)}</p>
                        <p>Humidity: {props.weatherData.main.humidity}%</p>
                        <p>Wind Speed: {(props.weatherData.wind.speed * 2.237).toFixed(0)} mph</p>
                        <div className="temp-toggle">   
                            <button className={isCelsius ? "active" : "not-active"} onClick={() => setIsCelsius(true)}>
                                °C
                            </button>
                            <button className={!isCelsius? "active" : "not-active"} onClick={() => setIsCelsius(false)}>
                                °F
                            </button>
                        </div>
                    </div>
                ) : <p>No weather data available.</p>
            }
        </div>
    );
}

export default WeatherDisplay;