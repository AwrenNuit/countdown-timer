import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Timer extends Component{

  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  UNSAFE_componentWillMount(){
    this.setState(this.props.reduxState);
  }

  componentDidMount(){
    this.interval = setInterval(() => this.countdown(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  countdown = () => {

    const calcTimeLeft = () => {
      let remaining = {};

      let days = this.state.days;
      let hours = this.state.hours;
      let minutes = this.state.minutes;
      let seconds = this.state.seconds;

      seconds--;

      // Handle seconds change
      if(seconds <= 0 && minutes <= 0 && hours <= 0 && days <= 0){
        seconds = 0;
      }
      else if(seconds < 0){
        seconds = 59;
        minutes--;
      }

      // Handle minutes change
      if(minutes <= 0 && hours <= 0 && days <= 0){
        minutes = 0;
      }
      else if(seconds === 59 && minutes <= 0){
        minutes = 59;
        hours--;
      }

      // Handle hours change
      if(hours <= 0 && days <= 0){
        hours = 0;
      }
      else if(seconds === 59 && minutes === 59 && hours <= 0){
        hours = 23;
        days--;
      }

      remaining = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }

        this.setState(remaining);

        // ------------------TO USE DATE AS COUNTDOWN-----------------
      // let stop = new Date('2020-01-01');
      // stop.setDate(stop.getDate()+this.state.days);
      // stop.setHours(stop.getHours()+this.state.hours);
      // stop.setMinutes(stop.getMinutes()+this.state.minutes);
      // stop.setSeconds(stop.getSeconds()+this.state.seconds);
      // let now = new Date();
      // let remaining={};
      // let timeDiff = (stop - now) / 1000;
      // if (timeDiff > 0) {
      //   remaining = {
      //     days: Math.floor(timeDiff / 86400),
      //     hours: Math.floor((timeDiff % 86400) / 3600),
      //     minutes: Math.floor((timeDiff % 3600) / 60),
      //     seconds: Math.floor(timeDiff % 60)
      //   };
      // this.setState(remaining);
      // }
    }
    setInterval(calcTimeLeft(), 1000);
  }

  render(){
    return(
      <div className="countdown-container">
        <div className="countdown">
          {this.state.days < 10 ? "0"+this.state.days : this.state.days}d:
          {this.state.hours < 10 ? "0"+this.state.hours : this.state.hours}h:
          {this.state.minutes < 10 ? "0"+this.state.minutes : this.state.minutes}m:
          {this.state.seconds < 10 ? "0"+this.state.seconds : this.state.seconds}s
        </div>

        <Link to="/">
          <Button variant="outlined">Set Timer</Button>
        </Link>

      </div>
    )
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.setTimerReducer
});

export default connect(putReduxStateOnProps)(Timer);