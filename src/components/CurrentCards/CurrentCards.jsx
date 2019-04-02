import React from 'react'
import classes from './CurrentCards.css'
import {connect} from 'react-redux'
import Card from "../Card/Card";
import removeCard from '../../store/actoins/removeCard'

class CurrentCards extends React.Component{
    renderCards = ()=>{
        return(
                this.props.state.selectedCards.map((obj, index)=>{
                    return (
                        <Card
                            imgSrc={obj.image}
                            current={true}
                            key={index}
                            close={()=>this.props.removeCard(index)}
                            count={obj.count}
                        />
                    )
            })
        )
    }
    render(){
        return(
            <div className={ this.props.state.selectedCards.length === 0 ? classes.withoutCards : classes.CurrentCards}>
                    { this.props.state.selectedCards.length === 0 ? <h1>Выберите героя</h1> : this.renderCards()}
            </div>
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
        removeCard: (index)=>dispatch(removeCard(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentCards)