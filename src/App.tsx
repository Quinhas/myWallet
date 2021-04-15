import { Paper } from '@material-ui/core';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Dashboard } from './pages';
import GlobalStyles from './styles/GlobalStyles';
import { DarkTheme, LightTheme } from './styles/themes';

function App() {
  return (
    <>
      <ThemeProvider theme={LightTheme}>
        <GlobalStyles/>
        <Dashboard/>
      </ThemeProvider>
    </>
  );
}

export default App;
