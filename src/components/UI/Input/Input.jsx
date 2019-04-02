import React from 'react'
import classes from './Input.css'
import icon from '../../../images/icon-loupe.svg'

const Input = props=>{
    return(
        <div className={classes.Input}>
            <input  placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
            <img src={icon} alt=""/>
        </div>
        )
};
export default Input