import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import Routes from './routes';

function Admin(){

  return(
    <BrowserRouter>
     
      <header>
        <h1> Meu Primeiro Site </h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/categoria/esportes">Esporte</Link>
            </li>
            <li>
              <Link to="/categoria/noticias">Noticias</Link>
            </li>
            <li>
              <Link to="/categoria/viagens">Viagens</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr/>
      <Routes/>
      <hr/>
    </BrowserRouter>
  );
}

export default Admin;