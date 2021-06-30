import { useState } from 'react'
import './Weather.css'
import WeatherDisplay from './WeatherDisplay'
import EmotionButton from './EmotionButton'

import { currentWeather, getForecast } from './actions'

import { connect } from 'react-redux'

function Weather(props) {
    const [zip, setZip] = useState('')
    const { data, currentWeather, getForecast } = props

    return (

        <div className='Weather'>

            <div>
                <input
                    placeholder='Enter zip code'
                    value={zip}
                    onChange={e => setZip(e.target.value)} />
                <button onClick={() => currentWeather(zip)}>Submit</button>
            </div>

            {data && <WeatherDisplay data={data} />}

            <button></button>


            <h4>How's the weather making you feel?</h4>
            <EmotionButton setColor={props.setColor} />
        </div>
    )
}

const mapStateToProps = ({ weather }) => {
    const { data } = weather
    return { data }
}

export default connect(mapStateToProps, { currentWeather, getForecast })(Weather)