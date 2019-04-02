import {ADD_NEW_CARD_TO_SELECTED} from './actionsType'

export default function addNewCard(card) {
    return (dispatch, getStore)=>{
        let flag=true;
        const currentCards = getStore().selectedCards;
        currentCards.forEach((obj,index)=>{
            if (obj.name === card.name){
                obj.count++;
                flag=false;
                dispatch(addNewCardRed(currentCards));
                return true;
            }
        });
        if (flag) {
            currentCards.push({
                ...card,
                count: 1
            });
        }
        dispatch(addNewCardRed(currentCards));
    }
}

function addNewCardRed(cards) {
    return{
        payload: cards,
        type: ADD_NEW_CARD_TO_SELECTED
    }
}