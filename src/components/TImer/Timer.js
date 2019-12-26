import React, {Component} from 'react';
import {connect} from 'react-redux';

class Timer extends Component{

  state = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  componentDidMount(){
    this.setState({
      hours: this.props.reduxState.hours < 10 ? "0"+this.props.reduxState.hours : this.props.reduxState.hours,
      minutes: this.props.reduxState.minutes < 10 ? "0"+this.props.reduxState.minutes : this.props.reduxState.minutes,
      seconds: this.props.reduxState.seconds < 10 ? "0"+this.props.reduxState.seconds : this.props.reduxState.seconds,
    });
    this.countdown(this.millis());
  }

  convert = (stop) => {
    let start = new Date().getTime();
    // let hours, minutes, seconds;
    
    let timeRemaining = parseInt((stop - start) / 1000);

    // if (timeRemaining >= 0) {
      // days = parseInt(timeRemaining / 86400);
      // timeRemaining = (timeRemaining % 86400);
      
    //   hours = parseInt(timeRemaining / 3600);
    //   timeRemaining = (timeRemaining % 3600);
      
    //   minutes = parseInt(timeRemaining / 60);
    //   timeRemaining = (timeRemaining % 60);
      
    //   seconds = parseInt(timeRemaining);
    // }

    return timeRemaining;

  }

  countdown = (stop) => {
    stop = new Date(stop).getTime();

    setInterval(this.convert(), 1000);
    this.convert(stop);
  }

  millis = () => {
    let total = 0;
    total += this.props.reduxState.hours * 3600000;
    total += this.props.reduxState.minutes * 60000;
    total += this.props.reduxState.seconds * 1000;
    return total;
  }

  render(){
    return(
      <>
        {JSON.stringify(this.state)}
        {JSON.stringify(this.props.reduxState)}
        <div>Timer remaining: {this.state.hours}:{this.state.minutes}:{this.state.seconds}</div>
      </>
    )
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.setTimerReducer
});

export default connect(putReduxStateOnProps)(Timer);