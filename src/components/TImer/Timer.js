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
    this.countdown();
  }

  countdown = () => {

    const calcTimeLeft = () => {
      let now = new Date();
      let stop = new Date("2020-01-01");
      let timeDiff = (stop - now) / 1000;
      let remaining = {};
  
      if (timeDiff > 0) {
        remaining = {
          hours: Math.floor((timeDiff % 86400) / 3600) < 10 ? "0"+Math.floor((timeDiff % 86400) / 3600) : Math.floor((timeDiff % 86400) / 3600),
          minutes: Math.floor((timeDiff % 3600) / 60) < 10 ? "0"+Math.floor((timeDiff % 3600) / 60) : Math.floor((timeDiff % 3600) / 60),
          seconds: Math.floor(timeDiff % 60) < 10 ? "0"+Math.floor(timeDiff % 60) : Math.floor(timeDiff % 60)
        };

        this.setState(remaining);
      }
      return remaining;
    }

    setInterval(calcTimeLeft(), 1000);

  }


  // millis = () => {
  //   let total = 0;
  //   total += this.props.reduxState.hours * 3600000;
  //   total += this.props.reduxState.minutes * 60000;
  //   total += this.props.reduxState.seconds * 1000;
  //   return total;
  // }

  render(){
    return(
      <>
        {JSON.stringify(this.state)}
        {/* {JSON.stringify(this.props.reduxState)} */}
        <div>Timer remaining: {this.state.hours}:{this.state.minutes}:{this.state.seconds}</div>
      </>
    )
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.setTimerReducer
});

export default connect(putReduxStateOnProps)(Timer);