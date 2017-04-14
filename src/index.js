import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { logoReducer } from './logo/reducer';

let store = createStore(
    logoReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>,
    document.getElementById('root')
);

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/(:filter}" component={Layout} />
        </Router>
    </Provider>
);
