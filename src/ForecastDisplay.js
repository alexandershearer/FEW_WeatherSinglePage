import './ForecastDisplay.css'

function ForecastDisplay(props) {

    console.log(props)

    const { daily, cod, message } = props.data

    if (cod !== 200 && cod !== undefined) {
        return (
            <small className="error">Error: {message}</small>
        )
    }


    return (
        <div className='ForecastContainer'>
            {daily.map((day, index) => (
                <div key={index} className='hvr-grow'>
                    <p className='date'>{new Date(day.dt * 1000).toDateString()}</p>
                    <p>High: {day.temp.max.toFixed(0)}°F</p>
                    <p>Low: {day.temp.min.toFixed(0)}°F</p>
                    <p className='conditions'>Conditions: {day.weather[0].main}</p>
                    <small>Humidity: {day.humidity}</small>
                    <p>Description: {day.weather[0].description}</p>
                </div>
            ))}
        </div>
    )
}

export default ForecastDisplay