import { GET_CURRENT_WEATHER, GET_FORECAST } from '../actions'

const INITIAL_STATE = {}


const weatherReducer = (state = [], action) => {
    switch (action.type) {
        case GET_CURRENT_WEATHER: {
            return [...state, action.payload]
        }

        default:
            return state
    }
}


export default weatherReducer