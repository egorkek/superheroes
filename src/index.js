import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from "./store/reducers/rootReducer";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('app'));
module.hot.accept();

