import React from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import TimerForm from '../TimerForm/TimerForm';
import Timer from '../TImer/Timer';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={TimerForm} />
        <Route path="/timer" component={Timer} />
      </Router>
    </div>
  );
}

export default App;
