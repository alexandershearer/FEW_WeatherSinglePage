function WeatherDisplay(props) {
    const { temp, feelsLike, description, name, humidity } = props

    return (
        <div className="WeatherDisplay">
            <h1>{name}</h1>
            <h1>{temp} degrees</h1>
            <small>Feels like: {feelsLike}</small>
            <p>Humidity: {humidity}%</p>
            <p>Description: {description}</p>
        </div>
    )
}

export default WeatherDisplay