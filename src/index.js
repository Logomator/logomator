import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { setLogoText } from './logo/reducer';

let store = createStore(setLogoText);

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>,
    document.getElementById('root')
);
