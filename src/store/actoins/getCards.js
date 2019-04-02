import {GET_CARDS_ERROR, GET_CARDS_START, GET_CARDS_SUCCESS} from "./actionsType";

export default function getCards(type) {
    return dispatch => {
        dispatch(forReducerStart(type))
        fetch('../superheroes.json')
            .then(res => {
                return res.json()
            })
            .then(res=>{
                dispatch(forReducerSuccess(res))
            })
            .catch(err=>{
                console.log(err)
                dispatch(forReducerError())
            })
    }
}

function forReducerStart(type) {
    return{
        type: GET_CARDS_START,
        payload: type
    }
}

function forReducerError() {
    return{
        type: GET_CARDS_ERROR,
    }
}

function forReducerSuccess(cards) {
    return{
        type: GET_CARDS_SUCCESS,
        payload: cards
    }
}