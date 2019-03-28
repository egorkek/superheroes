import {GET_CARDS_ERROR, GET_CARDS_START, GET_CARDS_SUCCESS} from "../actoins/actionsType";
const initialState = {
    type: 'dc',
    loading: true
}

export default function rootReducer(state=initialState, action ){
    switch (action.type) {
        case GET_CARDS_SUCCESS:
            return {
                ...state,
                cards:action.payload,
                loading: false
            }
        case GET_CARDS_START:
            return {
                ...state,
                loading: true
            }
        case GET_CARDS_ERROR:
            return {
                ...state,
                loading: true
            }
        default:
            return {
                ...state,
            }

    }
}