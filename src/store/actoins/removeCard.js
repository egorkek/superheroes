import {REMOVE_CARD} from "./actionsType";

export default function removeCard(index){
    return (dispatch, getStore)=>{
        const newSelectedCards = getStore().selectedCards;
        newSelectedCards.splice(index,1);
        dispatch(removeCardRed(newSelectedCards))
    }
}

function removeCardRed(selectedCards) {
    return{
        type: REMOVE_CARD,
        payload: selectedCards
    }
}