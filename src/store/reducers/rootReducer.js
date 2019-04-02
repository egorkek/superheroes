import {
    GET_CARDS_ERROR,
    CHANGE_TYPE,
    GET_CARDS_START,
    GET_CARDS_SUCCESS,
    ADD_NEW_CARD_TO_SELECTED,
    REMOVE_CARD, SEARCH_HERO
} from "../actoins/actionsType";
const initialState = {
    type: 'dc',
    loading: true,
    selectedCards:[],
    search: [],
    searching: false
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
                loading: true,
                type: action.payload
            }
        case GET_CARDS_ERROR:
            return {
                ...state,
                loading: true
            }
        case ADD_NEW_CARD_TO_SELECTED:
            return {
                ...state,
                selectedCards: action.payload
            }
        case SEARCH_HERO:
            return {
                ...state,
                search: action.payload,
                searching: true
            }
        case CHANGE_TYPE:
            return {
                ...state,
                type: action.payload,
                search: [],
                searching: false
            }
        case REMOVE_CARD:
            return {
                ...state,
                selectedCards: action.payload
            }
        default:
            return {
                ...state,
            }
    }
}