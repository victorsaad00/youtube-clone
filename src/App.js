import React from 'react';
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core';
import Home from './Home';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh'
    }
}));

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3f51b5'
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif'
    }
  });

  // const classes = useStyles();

  return (
    <ThemeProvider theme={theme}> 
      <Home />
    </ThemeProvider>
  );
}

export default App;
