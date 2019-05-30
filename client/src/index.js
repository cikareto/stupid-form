import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { logger } from 'redux-logger';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Registration from './features/Registration/index';
import './index.css';

const rootReducer = combineReducers({
  form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Registration} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
