import React from 'react'
import Layout from "./HOC/Layout/Layout";
import classes from './App.css'
import Main from "./components/Main/Main";
class App extends React.Component{

    render(){
        return(
            <Layout>
                <div className={classes.App}>
                    <div>asdas</div>
                    <Main/>
                </div>
            </Layout>

        )
    }
}


export default App;