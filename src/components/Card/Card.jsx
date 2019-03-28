import React from 'react'
import classes from './Card.css'

const Card = props=>{
    return(
        <div className={classes.Card}>
            <img src={props.imgSrc} alt={props.name}/>
            <p>{props.name}</p>


        </div>
    )
}
export default Card