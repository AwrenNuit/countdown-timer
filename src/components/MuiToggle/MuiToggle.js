import React from './node_modules/react';
import Button from "./node_modules/@material-ui/core/Button";

const MuiToggle = ({ onToggleDark }) => (
  <Button variant="outlined" onClick={onToggleDark}>
    Toggle Theme Type
  </Button>
);

export default MuiToggle;
