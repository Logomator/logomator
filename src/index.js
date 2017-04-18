import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './modules/common/components/Layout';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logoReducer } from './modules/core/logo/reducer';
import { colorPaletteReducer } from './modules/core/color-palette/reducer';
import reducer from './rootReducer';

let store = createStore(
    colorPaletteReducer,
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
