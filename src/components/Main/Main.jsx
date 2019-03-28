import React from 'react'
import classes from './Main.css'
import Input from "../UI/Input/Input";
import Footer from "../Footer/Footer";
import Cards from "../Cards/Cards";

class Main extends React.Component{
    state={
        inputValue: '',
    }
    onChangeInputValue = e =>{
        this.setState({
            inputValue: e.target.value
        })
    }
    render() {
        return(
            <div className={classes.Main}>
                <Input placeholder={'Имя героя'} onChange={e=>this.onChangeInputValue(e)} value={this.state.inputValue}/>
                <Cards/>
                <Footer/>
            </div>
        )
    }
}
export default Main