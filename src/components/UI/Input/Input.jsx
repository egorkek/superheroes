import React from 'react'
import classes from './Input.css'

const Input = props=>{
    return(
        <div className={classes.Input}>
            <input placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
        </div>
        )
}
export default Input