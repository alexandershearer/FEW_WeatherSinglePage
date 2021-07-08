import { useState } from 'react'
import './Weather.css'
import WeatherDisplay from './WeatherDisplay'
import ForecastDisplay from './ForecastDisplay'
import EmotionButton from './EmotionButton'

import { currentWeather, getForecast } from './actions'

import { connect } from 'react-redux'

function Weather(props) {
    const [zip, setZip] = useState('')
    const { data, forecastData, currentWeather, getForecast, color } = props
    return (

        <div className='Weather' style={{ backgroundImage: color }}>

            <div className="inputContainer">
                <input
                    placeholder='Enter zip code'
                    value={zip}
                    onChange={e => setZip(e.target.value)} />
                <div className='inputButtons'>
                    <button onClick={() => currentWeather(zip)}>Get Current Weather</button>
                    <button onClick={() => getForecast(zip)}>Get 7-day Forecast</button>
                </div>
            </div>

            {data && <WeatherDisplay data={data} />}

            {forecastData && <ForecastDisplay data={forecastData} />}

            <EmotionButton />
        </div>
    )
}

const mapStateToProps = ({ weather }) => {
    const { data, forecastData, color } = weather
    return { data, forecastData, color }
}

export default connect(mapStateToProps, { currentWeather, getForecast })(Weather)