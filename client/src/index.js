import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { logger } from 'redux-logger';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './features/Dashboard/index';
import Login from './features/Login/index';
import Registration from './features/Registration/index';
import { PATH } from './utils/constants';
import './index.css';

const rootReducer = combineReducers({
  form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));

render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Dashboard} />
      <Route path={PATH.LOGIN} component={Login} />
      <Route path={PATH.REGISTER} component={Registration} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
