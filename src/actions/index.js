export const GET_CURRENT_WEATHER = "GET_CURRENT_WEATHER"
export const GET_FORECAST = "GET_FORECAST"
export const SET_COLOR = "SET_COLOR"



export const currentWeather = (zip) => async (dispatch) => {
    const apikey = '3d9d53ba96a918af4921e86d1f39187b'
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=imperial`
    const res = await fetch(path)
    const json = await res.json()

    const cod = json.cod
    const message = json.message
    if (cod !== 200) {
        return dispatch(setWeatherData({ cod, message }))
    }

    const data = {
        temp: json.main.temp.toFixed(0),
        feelsLike: json.main.feels_like.toFixed(0),
        description: json.weather[0].description,
        name: json.name,
        humidity: json.main.humidity,
        cod: json.cod,
        message: json.message
    }
    return dispatch(setWeatherData(data))
}

export const getForecast = (zip) => async (dispatch) => {
    const data_apikey = '3d9d53ba96a918af4921e86d1f39187b'
    const data_path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${data_apikey}`
    const data_res = await fetch(data_path)
    const data_json = await data_res.json()

    //
    const cod = data_json.cod
    const message = data_json.message
    if (cod !== 200) {
        return dispatch(setForecastData({ cod, message }))
    }


    const apikey = '3d9d53ba96a918af4921e86d1f39187b'
    const path = `https://api.openweathermap.org/data/2.5/onecall?lat=${data_json.coord.lat}&lon=${data_json.coord.lon}&units=imperial&appid=${apikey}`
    const res = await fetch(path)
    const json = await res.json()
    console.log(json)


    return dispatch(setForecastData(json))
}


export const changeColor = (color) => (dispatch) => {
    console.log(color)
    return dispatch(setColor(color))
}



const setWeatherData = (data) => ({
    type: GET_CURRENT_WEATHER,
    payload: data
})

const setForecastData = (data) => ({
    type: GET_FORECAST,
    payload: data
})

const setColor = (data) => ({
    type: SET_COLOR,
    payload: data
})