import './WeatherDisplay.css'
function WeatherDisplay(props) {
    const { temp, feelsLike, description, name, humidity, cod, message } = props

    if (cod !== 200) {
        return (
            <small className="error">Error: {message}</small>
        )
    }

    return (
        <div className="WeatherDisplay">
            <h1>{name}</h1>
            <h1>{temp} degrees</h1>
            <small>Feels like: {feelsLike} degrees</small>
            <p>Humidity: {humidity}%</p>
            <p>Description: {description}</p>
        </div>
    )
}

export default WeatherDisplay