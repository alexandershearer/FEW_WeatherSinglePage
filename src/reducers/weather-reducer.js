import { GET_CURRENT_WEATHER, GET_FORECAST, SET_COLOR } from '../actions'

const INITIAL_STATE = {
    data: null,
    forecastData: null,
    color: '#fff'
}


const weatherReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CURRENT_WEATHER: {
            return { ...state, data: action.payload }
        }
        case GET_FORECAST: {
            return { ...state, forecastData: action.payload }
        }
        case SET_COLOR: {
            return { ...state, color: action.payload }
        }

        default:
            return state
    }
}




export default weatherReducer