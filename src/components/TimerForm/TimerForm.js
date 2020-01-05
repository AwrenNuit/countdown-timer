import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class TimerForm extends Component{

  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  handleChange = (event, propName)=>{
    if(isNaN(event.target.value)){
      event.target.value = 0;
    }
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
      <>
        <div className="form">
          <h1>SET TIMER</h1>
          <form onSubmit={this.handleSubmit}>

            <TextField  type="text" 
                        onChange={(event)=>this.handleChange(event, 'days')} 
                        value={this.state.days} 
                        id="standard-basic" 
                        label="Days" 
                        style={{width:"50px",margin:"10px"}} 
            />

            <TextField  type="text" 
                        onChange={(event)=>this.handleChange(event, 'hours')} 
                        value={this.state.hours} 
                        id="standard-basic" 
                        label="Hours" 
                        style={{width:"50px",margin:"10px"}} 
            />

            <TextField  type="text" 
                        onChange={(event)=>this.handleChange(event, 'minutes')} 
                        value={this.state.minutes} 
                        id="standard-basic" 
                        label="Minutes" 
                        style={{width:"50px",margin:"10px"}}      
            />
            
            <TextField  type="text" 
                        onChange={(event)=>this.handleChange(event, 'seconds')} 
                        value={this.state.seconds} 
                        id="standard-basic" 
                        label="Seconds" 
                        style={{width:"50px",margin:"10px"}} 
            />

            <br />
            <br />

            <Button type="submit" variant="outlined">Start Countdown</Button>

          </form>
        </div>
      </>
    );
  }
}

export default connect()(TimerForm);