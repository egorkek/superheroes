import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';


const app = (
    <BrowserRouter>
    <App/>
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('app'));
module.hot.accept();

