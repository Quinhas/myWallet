import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout } from './components';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes/app.routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTheme } from './hooks/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={useTheme().theme}>
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
