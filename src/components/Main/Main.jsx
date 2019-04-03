import React from 'react'
import classes from './Main.css'
import Input from "../UI/Input/Input";
import Footer from "../Footer/Footer";
import Cards from "../Cards/Cards";
import {connect} from 'react-redux'
import searchHero from '../../store/actoins/searchHero'
import {Route, Redirect, Switch} from 'react-router-dom'

class Main extends React.Component{
    state={
        inputValue: ''
    };
    onInputHandler = e =>{
        this.setState({
            inputValue: e.target.value
        })
        this.props.searchHero(e.target.value)
    };
    clearInput = ()=>{
        this.setState({
            inputValue: ''
        })
    };
    render() {
        return(
            <div className={classes.Main}>
                <div className={classes.Inp}>
                    <Input placeholder={'Имя героя'} value={this.state.inputValue} onChange={(e)=>this.onInputHandler(e)} />
                </div>
                <div className={classes.MainCards}>
                    <Switch>
                        <Route path='/marvel' render={({...props})=>(<Cards {...props}/>)}/>
                        <Route path='/dc' render={({...props})=>(<Cards {...props}/>)}/>
                        <Redirect from='/' to='/dc'/>

                    </Switch>
                </div>
                <div className={classes.Foot}>
                    <Footer click={this.clearInput}/>
                </div>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return{
        searchHero: (name)=>dispatch(searchHero(name))
    }
}
export default connect(null,mapDispatchToProps)(Main)