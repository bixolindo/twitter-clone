import React, { useState }from 'react';

import { ThemeProvider } from 'styled-components';
import green from './styles/themes/green'
import blue from './styles/themes/blue'
import themes from './styles/themes/themes'

import {ThemeColor} from './enums/themeColorEnum'

import Layout from './components/Layout'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  const [theme, setTheme] = useState(blue)

  const toggleTheme = ( themeColor : ThemeColor ) => {
   setTheme(themes[themeColor]);
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout toggleTheme={toggleTheme} />
      <GlobalStyles />
    </ThemeProvider>
      
  );
}

export default App;
