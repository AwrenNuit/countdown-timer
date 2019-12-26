import React, {Component} from 'react';
import {connect} from 'react-redux';

class TimerForm extends Component{

  state = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  handleChange = (event, propName)=>{
    this.state({
      ...this.state,
      [propName]: event.target.value
    });
  }

  handleSubmit = () => {
    this.props.dispatch({type: `SET_TIME`, payload: this.state});
  }

  render(){
    return(
      <>
        <form onSubmit={this.handleSubmit}>

        <input  type="number" 
                min="0" 
                onChange={(event)=>this.handleChange(event, 'hours')} 
                value={this.state.hours}
                placeholder="hours" 
        />

        <input  type="number" 
                min="0" 
                onChange={(event)=>this.handleChange(event, 'minutes')} 
                value={this.state.minutes}
                placeholder="minutes" 
        />

        <input  type="number" 
                min="0" 
                onChange={(event)=>this.handleChange(event, 'seconds')} 
                value={this.state.seconds}
                placeholder="seconds" 
        />

        <button type="submit">Start Countdown</button>
        </form>
      </>
    )
  }
}

export default connect()(TimerForm);