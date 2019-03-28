import {GET_CARDS_ERROR, GET_CARDS_START, GET_CARDS_SUCCESS} from "./actionsType";

export default function getCards() {
    return dispatch => {
        dispatch(forReducerStart())
        fetch('../superheroes.json')
            .then(res => {
                return res.json()
            })
            .then(res=>{
                console.log(res)
                dispatch(forReducerSuccess(res))


            })
            .catch(err=>{
                console.log(err)
                dispatch(forReducerError())
            })
    }

}
function forReducerStart() {
    return{
        type: GET_CARDS_START,
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