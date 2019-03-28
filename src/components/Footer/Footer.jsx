import React from 'react'
import classes from './Footer.css'
import { NavLink} from 'react-router-dom'
import marvel from '../../images/Marvel.png'
import dc from '../../images/dc-logo.png'

const Footer = props=>{
    return(
        <div className={classes.Footer}>
            <NavLink to='/dc' activeClassName={classes.active}>
                <img src={dc} alt=""/>
            </NavLink>
            <NavLink activeClassName={classes.active} to='/marvel' >
                <img src={marvel}  alt=""/>
            </NavLink>
        </div>
    )
}
export default Footer