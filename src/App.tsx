import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import GlobalStyle from './styles/GlobalStyle';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AppProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
