import {CHANGE_TYPE} from "./actionsType";

export default function changeType(type){
    return{
        type: CHANGE_TYPE,
        payload: type
    }
}