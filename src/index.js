import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const setTimerReducer = (state=[], action) => {
  if(action.type === `SET_TIME`){
    return action.payload;
  }
  return state;
}

const themeToggleReducer = (state=false, action) => {
  if(action.type === `SET_THEME`){
    return !state;
  }
  return state;
}

const storeInstance = createStore(
  combineReducers({
      setTimerReducer,
      themeToggleReducer
}),
  applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
