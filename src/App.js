import React from 'react';
import {Provider} from 'react-redux';
import Routes from './routes';



import {BrowserRouter}from 'react-router-dom';

import GlobalStyle from './styles/global';

function App(){
  return(

      <BrowserRouter>
        <Routes/>
        <GlobalStyle/>
      </BrowserRouter>

  )
}
export default App;