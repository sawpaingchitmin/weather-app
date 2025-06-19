function TemperatureToggle({ isCelsius, setIsCelsius}) {
    return (
        <div className="temp-toggle">   
            <button className={isCelsius ? "active" : "not-active"} onClick={() => setIsCelsius(true)}>
                °C
            </button>
            <button className={!isCelsius? "active" : "not-active"} onClick={() => setIsCelsius(false)}>
                °F
            </button>
        </div>
    )
}   

export default TemperatureToggle;