
import { React } from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';

// import combined reducers
import reducers from './reducers/index';

// import actions
import { getPartners, postPartners, updatePartner, deletePartner } from "./actions/partnersActions";

// import components
import LandingPage from './components/pages/landingPage';

// create store with redux logger
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

render (
    <LandingPage />, document.getElementById('app')
);
