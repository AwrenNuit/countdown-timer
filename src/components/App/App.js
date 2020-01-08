import React, {useState} from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import TimerForm from '../TimerForm/TimerForm';
import Timer from '../TImer/Timer';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import ToggleThemeLight from '../ToggleThemeLight/ToggleThemeLight';
import ToggleThemeDark from '../ToggleThemeDark/ToggleThemeDark';

function App() {

  const [theme, setTheme] = useState({
    palette: {
      type: `dark`,
      theme: `dark-mode`
    }
  });

  const toggleTheme = () => {
    let newPaletteType = theme.palette.type === `light` ? `dark` : `light`;
    let newPaletteTheme = theme.palette.theme === `light-mode` ? `dark-mode` : `light-mode`;
    setTheme({
      palette: {
        type: newPaletteType,
        theme: newPaletteTheme
      }
    });
  };

  const muiTheme = createMuiTheme(theme);

  if(theme.palette.type === `dark`){
    return (
      <div className={theme.palette.theme}>
        <Router>
          <ToggleThemeDark onToggleTheme={toggleTheme} />
          <MuiThemeProvider theme={muiTheme}>
            <Route exact path="/" component={TimerForm} />
            <Route path="/timer" component={Timer} />
          </MuiThemeProvider>
        </Router>
      </div>
    );
  }
  else{
    return (
      <div className={theme.palette.theme}>
        <Router>
          <ToggleThemeLight onToggleTheme={toggleTheme} />
          <MuiThemeProvider theme={muiTheme}>
            <Route exact path="/" component={TimerForm} />
            <Route path="/timer" component={Timer} />
          </MuiThemeProvider>
        </Router>
      </div>
    );
  }
}

export default App;
