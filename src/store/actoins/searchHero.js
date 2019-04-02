import {SEARCH_HERO} from "./actionsType";

export default function searchHero(name) {
    return (dispatch, getStore)=>{
        const type = getStore().type;
        const newSearch = [];
        getStore().cards[type].forEach((el, index)=>{
            if (el.name.toLowerCase().indexOf(name.toLowerCase()) !== -1){
                newSearch.push(el);
            }
        })
        dispatch(searchHeroRed(newSearch))
    }
}

function searchHeroRed(heroes) {
    return{
        type: SEARCH_HERO,
        payload: heroes
    }
}