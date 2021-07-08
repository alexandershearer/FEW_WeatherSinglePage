import './WeatherDisplay.css'
function WeatherDisplay(props) {
    const { temp, feelsLike, description, name, humidity, cod, message } = props.data

    if (cod !== 200) {
        return (
            <small className="error">Error: {message}</small>
        )
    }

    return (
        <div className="WeatherDisplay">
            <h1 className='currentTitle'> Current Weather</h1>
            <h1 className='cityName'>{name}</h1>
            <h1>{temp}°F</h1>
            <small>Feels like: {feelsLike} °F</small>
            <p>Humidity: {humidity}%</p>
            <p>Description: {description}</p>
        </div>
    )
}

export default WeatherDisplay