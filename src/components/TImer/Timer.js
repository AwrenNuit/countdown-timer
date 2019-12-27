import React, {Component} from 'react';
import {connect} from 'react-redux';

class Timer extends Component{

  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  componentDidMount(){
    this.setState({
      days: this.props.reduxState.days < 10 ? "0"+this.props.reduxState.days : this.props.reduxState.days,
      hours: this.props.reduxState.hours < 10 ? "0"+this.props.reduxState.hours : this.props.reduxState.hours,
      minutes: this.props.reduxState.minutes < 10 ? "0"+this.props.reduxState.minutes : this.props.reduxState.minutes,
      seconds: this.props.reduxState.seconds < 10 ? "0"+this.props.reduxState.seconds : this.props.reduxState.seconds,
    });
    this.countdown();
    this.interval = setInterval(() => this.countdown(), 1000);
  }

  countdown = () => {

    const calcTimeLeft = () => {
      let now = new Date();
      let stop = new Date("2020-01-01");
      let timeDiff = (stop - now) / 1000;
      let remaining = {};
  
      if (timeDiff > 0) {
        remaining = {
          days: Math.floor(timeDiff / 86400) < 10 ? "0"+Math.floor(timeDiff / 86400) : Math.floor(timeDiff / 86400),
          hours: Math.floor((timeDiff % 86400) / 3600) < 10 ? "0"+Math.floor((timeDiff % 86400) / 3600) : Math.floor((timeDiff % 86400) / 3600),
          minutes: Math.floor((timeDiff % 3600) / 60) < 10 ? "0"+Math.floor((timeDiff % 3600) / 60) : Math.floor((timeDiff % 3600) / 60),
          seconds: Math.floor(timeDiff % 60) < 10 ? "0"+Math.floor(timeDiff % 60) : Math.floor(timeDiff % 60)
        };
        this.setState(remaining);
      }
    }
    setInterval(calcTimeLeft(), 1000);
  }

  render(){
    return(
      <>
        {JSON.stringify(this.state)}
        {JSON.stringify(this.props.reduxState)}
        <div>Timer remaining: {this.state.days}:{this.state.hours}:{this.state.minutes}:{this.state.seconds}</div>
      </>
    )
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.setTimerReducer
});

export default connect(putReduxStateOnProps)(Timer);