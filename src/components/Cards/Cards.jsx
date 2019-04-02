import React, {Fragment} from 'react'
import classes from './Cards.css'
import {connect} from "react-redux";
import getCards from '../../store/actoins/getCards'
import Loader from "../UI/Loader/Loader";
import Card from "../Card/Card";
import addNewCard from '../../store/actoins/addNewCard'
class Cards extends React.Component{
    componentDidMount(){
        console.log(this.props.location.pathname.slice(1))
        this.props.getCards(this.props.location.pathname.slice(1));
    }
    renderCards = ()=>{
        const type = !!this.props.location.pathname.slice(1) ? this.props.location.pathname.slice(1) : this.props.state.type
        const arr = this.props.state.searching ? this.props.state.search : this.props.state.cards[type]

        return(
            <div className={classes.Cards}>
                {arr.map(obj=>{
                    return (
                        <Card key = {obj.name}
                              name={obj.name}
                              imgSrc={obj.image}
                              click={()=>this.props.addNewCard(obj)}
                        />
                    )
                })
                }
            </div>
        )
    }
    render(){
        return(
            <Fragment>
                {this.props.state.loading ? <Loader/> : this.renderCards() }
            </Fragment>
        )
    }
}
function mapStateToProps(state) {
    return{
        state: state
    }
}
function mapDispatchToProps(dispatch) {
    return{
        getCards: (type)=>dispatch(getCards(type)),
        addNewCard: (card)=>dispatch(addNewCard(card))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cards);
