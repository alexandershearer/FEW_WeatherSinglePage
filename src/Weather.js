import { useState } from 'react'
import './Weather.css'
import RadioButton from './RadioButton'
import WeatherDisplay from './WeatherDisplay'
import EmotionButton from './EmotionButton'

function Weather(props) {
    const [zip, setZip] = useState('')
    const [unit, setUnit] = useState('')
    const [data, setData] = useState(null)


    async function fetchWeather() {
        const apikey = '3d9d53ba96a918af4921e86d1f39187b'
        const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${unit}`
        const res = await fetch(path)
        const json = await res.json()
        console.log(json)

        const cod = json.cod
        const message = json.message
        if (cod !== 200) {
            setData({ cod, message })
            return
        }

        const temp = json.main.temp.toFixed(0)
        const feelsLike = json.main.feels_like.toFixed(0)
        const description = json.weather[0].description
        const name = json.name
        const humidity = json.main.humidity


        setData({
            cod,
            message,
            temp,
            feelsLike,
            description,
            name,
            humidity
        })

    }



    return (

        <div className='Weather'>
            {data && <WeatherDisplay {...data} />}
            <form onSubmit={e => {
                e.preventDefault()
                fetchWeather()
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


                <RadioButton
                    label="imperial"
                    name="unit"
                    checked={unit === 'imperial'}
                    onChange={() => setUnit('imperial')}
                />

                <RadioButton
                    label="metric"
                    name="unit"
                    checked={unit === 'metric'}
                    onChange={() => setUnit('metric')}
                />

                <RadioButton
                    label="standard"
                    name="unit"
                    checked={unit === 'standard'}
                    onChange={() => setUnit('standard')}
                />


            </form>
            <h4>How's the weather making you feel?</h4>
            <EmotionButton setColor={props.setColor} />
        </div>
    )
}

export default Weather