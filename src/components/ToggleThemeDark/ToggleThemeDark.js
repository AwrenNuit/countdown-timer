import React from 'react';
import Button from '@material-ui/core/Button';

const ToggleThemeDark = ({ onToggleTheme }) => (
  <Button variant="outlined" onClick={onToggleTheme} size="small" style={{float:"right",margin:"30px"}}>
    Light Mode
  </Button>
);

export default ToggleThemeDark;