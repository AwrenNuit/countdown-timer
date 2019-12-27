import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';

class TimerForm extends Component{

  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  handleChange = (event, propName)=>{
    if(propName === 'days' && event.target.value > 364){
      event.target.value = 364;
    }
    if(propName === 'hours' && event.target.value > 23){
      event.target.value = 23;
    }
    if(propName === 'minutes' && event.target.value > 59){
      event.target.value = 59;
    }
    if(propName === 'seconds' && event.target.value > 59){
      event.target.value = 59;
    }

    this.setState({
      ...this.state,
      [propName]: +event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type: `SET_TIME`, payload: this.state});
    this.props.history.push('/timer');
  }

  render(){
    return(
      <div className="form">
        <h1>SET TIMER</h1>
        <form onSubmit={this.handleSubmit}>

          <TextField type="number" min="0" max="364" onChange={(event)=>this.handleChange(event, 'days')} value={this.state.days} id="outlined-basic" label="Days" variant="outlined" />
          <TextField type="number" min="0" max="23" onChange={(event)=>this.handleChange(event, 'hours')} value={this.state.hours} id="outlined-basic" label="Hours" variant="outlined" />
          <TextField type="number" min="0" max="59" onChange={(event)=>this.handleChange(event, 'minutes')} value={this.state.minutes} id="outlined-basic" label="Minutes" variant="outlined" />
          <TextField type="number" onChange={(event)=>this.handleChange(event, 'seconds')} value={this.state.seconds} id="outlined-basic" label="Seconds" variant="outlined" />

          <br />
          <br />

          <button type="submit">Start Countdown</button>

        </form>
      </div>
    )
  }
}

export default connect()(TimerForm);