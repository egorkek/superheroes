import React from 'react'
import classes from './Card.css'
import close from '../../images/icon-x.svg'

const Card = props=>{
    const newClass = [classes.Card, props.current ? classes.ForCurrentCards : null];
    return(
        <div className={newClass.join(' ')} onClick={props.click}>
            { !!props.current ? <img className={classes.close} src={close} alt="" onClick={props.close}/> : null}
            <img src={props.imgSrc} alt={props.name}/>
            {!!props.current && props.count !== 1 ? <div className={classes.counter}>{props.count}</div> : null}
            {!props.current ? <p>{props.name}</p> : null}
        </div>
    )
}
export default Card