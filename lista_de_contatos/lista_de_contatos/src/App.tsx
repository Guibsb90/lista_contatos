import React from 'react';
import { Provider } from 'react-redux';

import { Container } from './Containers/Container';
import  store  from './store'
import { GlobalStyle } from './styles/styles'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container />
    </Provider>   
    
  );
}

export default App;
