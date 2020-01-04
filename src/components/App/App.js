import React from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import TimerForm from '../TimerForm/TimerForm';
import Timer from '../Timer/Timer';

function App() {
  return (
      <Router>
        <Route exact path="/" component={TimerForm} />
        <Route path="/timer" component={Timer} />
      </Router>
  );
}

export default App;
