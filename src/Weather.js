import { useState } from 'react'
import './Weather.css'
import RadioButton from './RadioButton'
import WeatherDisplay from './WeatherDisplay'
import EmotionButton from './EmotionButton'

import { currentWeather } from './actions'

import { useDispatch } from 'react-redux'

function Weather(props) {
    const [zip, setZip] = useState('')
    const [unit, setUnit] = useState('')
    const [data, setData] = useState(null)


    //     const cod = json.cod
    //     const message = json.message
    //     if (cod !== 200) {
    //         setData({ cod, message })
    //         return
    //     }

    const dispatch = useDispatch()




    return (

        <div className='Weather'>
            {data && <WeatherDisplay {...data} />}
            <form onSubmit={e => {
                e.preventDefault()
                dispatch(currentWeather(zip))
            }}>
                <div>
                    <input
                        placeholder='Enter zip code'
                        value={zip}
                        onChange={e => setZip(e.target.value)} />
                    <button type="submit">Submit</button>
                </div>

                <select
                    value={unit}
                    onChange={e => setUnit(e.target.value)}
                >
                    <option value="imperial">Farenheit</option>
                    <option value="metric">Celcius</option>
                    <option value="standard">Kelvin</option>
                </select>



            </form>
            <h4>How's the weather making you feel?</h4>
            <EmotionButton setColor={props.setColor} />
        </div>
    )
}

export default Weather