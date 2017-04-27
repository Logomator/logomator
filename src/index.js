import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, browserHistory}  from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory';
import  logoReducer from './logo/reducer';

import HomeComponent from './logo/containers/HomeComponent';
import SetTaglineComponent from './logo/components/SetTaglineComponent';
import SetIndustryName from './logo/containers/SetIndustryName';
import LogoInspirationContainer from './logo/containers/LogoInspirationContainer';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);

let store = createStore(
    logoReducer,
    applyMiddleware(
        thunkMiddleware,
        middleware
    )
);

window.store = store;


render(
    <Provider store={store}>
        <Router history={history}>
            <div>
            <Route exact path="/" component={HomeComponent} />
                <Route path="/tagline" component={SetTaglineComponent} />
                <Route path="/industry" component={SetIndustryName} />
                <Route path="/inspiration" component={LogoInspirationContainer} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
