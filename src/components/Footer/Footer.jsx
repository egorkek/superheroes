import React from 'react'
import classes from './Footer.css'
import { NavLink} from 'react-router-dom'
import marvel from '../../images/Marvel.png'
import dc from '../../images/dc-logo.png'
import {connect} from 'react-redux'
import changeType from '../../store/actoins/changeType'

const Footer = props=>{
    return(
        <div className={classes.Footer} onClick={props.click}>
            <NavLink to='/dc' activeClassName={classes.active} >
                <img src={dc} alt="" onClick={()=>props.changeType('dc')}/>
            </NavLink>
            <NavLink activeClassName={classes.active} to='/marvel' >
                <img src={marvel} onClick={()=>props.changeType('marvel')}  alt=""/>
            </NavLink>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return{
        changeType: (type)=>dispatch(changeType(type))
    }
}
export default connect(null,mapDispatchToProps)(Footer)