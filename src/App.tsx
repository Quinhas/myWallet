import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout } from './components';
import { Dashboard, List } from './pages';
import GlobalStyles from './styles/GlobalStyles';
import { DarkTheme, LightTheme } from './styles/themes';
import Routes from './routes/app.routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
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
