import { GET_CURRENT_WEATHER, GET_FORECAST } from '../actions'

const INITIAL_STATE = {
    data: null
}


const weatherReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CURRENT_WEATHER: {
            return { ...state, data: action.payload }
        }
        case GET_FORECAST: {
            return { ...state, data: action.payload }
        }

        default:
            return state
    }
}


export default weatherReducer