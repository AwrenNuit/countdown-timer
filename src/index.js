import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const setTimerReducer = (state=[], action) => {
  if(action.type === `SET_TIME`){
    let total = 0;
    total += action.payload.hours * 3600000;
    total += action.payload.minutes * 60000;
    total += action.payload.seconds * 1000;
    return total;
  }
  return state;
}

const storeInstance = createStore(
  combineReducers({
      setTimerReducer
}),
  applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
