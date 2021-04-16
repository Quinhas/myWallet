import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout } from './components';
import GlobalStyles from './styles/GlobalStyles';
import { DarkTheme, LightTheme } from './styles/themes';
import Routes from './routes/app.routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  let defaultTheme = "light";
  return (
    <>
      <ThemeProvider theme={defaultTheme === 'light' ? LightTheme : DarkTheme}>
        <GlobalStyles/>
        <Layout>
          <Router>
            <Routes/>
          </Router>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
