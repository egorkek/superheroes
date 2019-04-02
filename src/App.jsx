import React from 'react'
import Layout from "./HOC/Layout/Layout";
import classes from './App.css'
import Main from "./components/Main/Main";
import CurrentCards from "./components/CurrentCards/CurrentCards";
class App extends React.Component{
    render(){
        return(
            <Layout>
                <div className={classes.App}>
                    <CurrentCards/>
                    <Main/>
                </div>
            </Layout>
        )
    }
}

export default App;