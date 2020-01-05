import React, {useState} from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import TimerForm from '../TimerForm/TimerForm';
import Timer from '../Timer/Timer';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MuiTest from '../MuiTest/MuiTest';

function App() {

  const [theme, setTheme] = useState({
    palette: {
      type: `light`,
      // theme: `light-mode`
    }
  });

  const toggleDarkTheme = () => {
    console.log('in there');
    let newPaletteType = theme.palette.type === `light` ? `dark` : `light`;
    // let newPaletteTheme = theme.palette.theme === `light-mode` ? `dark-mode` : `light-mode`;
    setTheme({
      palette: {
        type: newPaletteType,
        // theme: newPaletteTheme
      }
    });
  };

  const muiTheme = createMuiTheme(theme);

  return (
      <Router>
        <MuiTest onToggleDark={toggleDarkTheme} />
        <MuiThemeProvider theme={muiTheme}>
          <Route exact path="/" component={TimerForm} />
          <Route path="/timer" component={Timer} />
        </MuiThemeProvider>
      </Router>
  );
}

export default App;
