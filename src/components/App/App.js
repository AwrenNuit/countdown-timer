import React, {useState} from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import TimerForm from '../TimerForm/TimerForm';
import Timer from '../Timer/Timer';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function App() {

  const [theme, setTheme] = useState({
    palette: {
      type: `light`
    }
  });

  const toggleDarkTheme = () => {
    console.log('in there');
    let newPaletteType = theme.palette.type === `light` ? `dark` : `light`;
    setTheme({
      palette: {
        type: newPaletteType
      }
    });
  };

  const muiTheme = createMuiTheme(theme);

  return (
      <Router>
        <MuiThemeProvider theme={muiTheme}>
          <Route exact path="/" component={TimerForm} />
          <Route path="/timer" component={Timer} />
        </MuiThemeProvider>
      </Router>
  );
}

export default App;
