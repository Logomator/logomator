import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logoReducer } from './logo/reducer';

let store = createStore(
    logoReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>,
    document.getElementById('root')
);
