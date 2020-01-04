import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

class ThemeToggle extends Component{

  handleToggle = () => {
    this.props.dispatch({type: `SET_THEME`});
  }

  render(){
    return(
      <>
        <Button variant="outlined" onClick={this.handleToggle} style={{float:"right",margin:"30px"}}>Toggle Theme</Button>
      </>
    );
  }
}

export default connect()(ThemeToggle);