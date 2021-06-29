export const GET_CURRENT_WEATHER = "GET_CURRENT_WEATHER"
export const GET_FORECAST = "GET_FORECAST"



export const currentWeather = (zip) => async (dispatch) => {
    const apikey = '3d9d53ba96a918af4921e86d1f39187b'
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units='imperial'`
    const res = await fetch(path)
    const json = await res.json()


    // const temp = json.main.temp.toFixed(0)
    // const feelsLike = json.main.feels_like.toFixed(0)
    // const description = json.weather[0].description
    // const name = json.name
    // const humidity = json.main.humidity
    dispatch(setWeather(json))
}

export const getForecast = (zip) => {
    return {
        type: GET_FORECAST,
        payload: { zip }
    }
}



const setWeather = (data) => ({
    type: GET_CURRENT_WEATHER,
    payload: data
})