import { getName } from 'country-list';

function CountryDetails({ weatherData, timezoneOffset }) {
    const countryName = weatherData ? getName(weatherData.sys.country) : null;
    
    const localTime = new Date(new Date().getTime() + timezoneOffset * 1000);
    const hours = localTime.getUTCHours();
    const minutes = localTime.getUTCMinutes();
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; 
    
    const day = localTime.toLocaleString("en-US", { day: "numeric", timeZone: "UTC" })
    const month = localTime.toLocaleString("en-US", { month: "long", timeZone: "UTC" });
    const dayName = localTime.toLocaleString("en-US", { weekday: "short", timeZone: "UTC" });

    return (
        <div>
            <h2>{weatherData.name}</h2>
            <h3> {countryName} </h3>
            <h3> {dayName} {formattedHours}:{formattedMinutes} {meridiem}</h3>
            <h4>{month} {day}</h4>
        </div>
    )
}

export default CountryDetails;