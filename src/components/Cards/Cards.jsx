import React from 'react'
import classes from './Cards.css'
import {connect} from "react-redux";
import getCards from '../../store/actoins/getCards'
import Loader from "../UI/Loader/Loader";
import Card from "../Card/Card";



class Cards extends React.Component{
    componentDidMount(){
        this.props.getCards();
        setTimeout(()=>{ console.log(this.props.state), 1000})

    }
    render(){
        return(
            <div className={classes.Cards}>
                {this.props.state.loading ? <Loader/> :
                this.props.state.cards[this.props.state.type].map((obj, index)=>{
                    return (
                        <Card key = {obj.name}
                        name={obj.name}
                        imgSrc={obj.image}
                        />
                    )
                })

                }



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
        getCards: ()=>dispatch(getCards())
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Cards);
