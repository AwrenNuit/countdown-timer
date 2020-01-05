import React from 'react';
import Button from '@material-ui/core/Button';

const MuiTest = ({ onToggleDark }) => (
  <Button variant="outlined" onClick={onToggleDark} style={{float:"right",margin:"30px"}}>
    Light Mode
  </Button>
);

export default MuiTest;