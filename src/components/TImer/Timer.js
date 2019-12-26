import React, {Component} from 'react';
import {connect} from 'react-redux';

class Timer extends Component{

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
      </>
    )
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.OBJECT
});

export default connect(putReduxStateOnProps)(Timer);