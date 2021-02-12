import React from 'react';
import PropType from 'prop-types';
import {Link} from 'react-router-dom';

import { Wrapper, NavGate, TopNav, ContainerData, Element} from './style';
import Logo from '../../../assets/logo.svg';

export default function DefaultLayout({children}) {
  return (
    <Wrapper>
      <NavGate>
        <TopNav>
          <img src={Logo}/>

          <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/listmeats"> Lista de refeições</Link></li>
              <li><Link to="/novomenu"> Novo Cardápio </Link></li>
              <li><Link to="/relatorio"> Relatório </Link></li>
          </ul>

          
        </TopNav>
        <Link to="/">Logof</Link>
      </NavGate>
        <ContainerData>
          <Element>
            {children}
          </Element>
          
        </ContainerData>
       
    </Wrapper>
  );
}

DefaultLayout.prototype = {
  children: PropType.element.isRequired,
}

 