import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route }  from 'react-router';
import { routerMiddleware, push } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory';
import  logoReducer from './logo/reducer';

import HomeComponent from './logo/containers/HomeComponent';
import SetTaglineComponent from './logo/containers/SetTaglineComponent';
import SetIndustryName from './logo/containers/SetIndustryName';
import LogoInspirationContainer from './logo/containers/LogoInspirationContainer';
import ColorPaletteList from './logo/containers/ColorPaletteList';
import SurveyContainer from './logo/containers/SurveyContainer';
import LogoList from './logo/containers/LogoList';
import DownloadContainer from './logo/containers/DownloadContainer';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  logoReducer,
  applyMiddleware(
    thunkMiddleware,
    middleware
  )
);

// Reset scroll to top on route change.
const ScrollToTop = () => {
  window.scrollTo(0, 0);
  // A React component needs a return value.
  return null;
};

render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="*" component={ScrollToTop} />
        <Route exact path="/" component={HomeComponent} />
        <Route path="/tagline" component={SetTaglineComponent} />
        <Route path="/industry" component={SetIndustryName} />
        <Route path="/inspiration" component={LogoInspirationContainer} />
        <Route path="/color-palette" component={ColorPaletteList} />
        <Route path="/logos" component={LogoList} />
        <Route path="/survey" component={SurveyContainer} />
        <Route path="/download" component={DownloadContainer} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

