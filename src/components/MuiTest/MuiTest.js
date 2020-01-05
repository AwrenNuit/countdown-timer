import React from 'react';
import Button from '@material-ui/core/Button';

const MuiTest = ({ onToggleDark }) => (
  <Button variant="outlined" onClick={onToggleDark}>
    Toggle Theme Type
  </Button>
);

export default MuiTest;