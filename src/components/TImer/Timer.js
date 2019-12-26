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
  }
  // const start  = Date.now();

  // console.log('starting timer...');

  // setTimeout(()=>{
  //   const millis = Date.now() - start;
  //   console.log(`seconds elapsed = ${Math.floor(millis/1000)}`);
  // }, 2000);

  // const millis = seconds * 1000;
  // const seconds = minutes * 60;
  // const minutes = hours * 60;

  render(){
    return(
      <>
        {JSON.stringify(this.state)}
        {JSON.stringify(this.props.reduxState)}
        <div>Timer starting: </div>
      </>
    )
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.setTimerReducer
});

export default connect(putReduxStateOnProps)(Timer);