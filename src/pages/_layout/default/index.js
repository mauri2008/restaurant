import React, {useState} from 'react';
import PropType from 'prop-types';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'

import { Wrapper, NavGate, TopNav, ContainerData, Element , SubMenu} from './style';
import Logo from '../../../assets/logo.svg';

export default function DefaultLayout({children}) {
  const user =   useSelector(state=> state.auth.user)
  const [dropdown, setDropdown] =  useState(false);
  function handleLogof(){
    localStorage.clear();
    document.location.reload();
  }

  return (
    <Wrapper>
      <NavGate>
        <TopNav>
          <img src={Logo}/>

          <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/listmeats"> Lista de refeições</Link></li>
              {user.provider && <li><Link to="/novomenu"> Novo Cardápio </Link></li>}
              {user.provider && 
                  <li>
                    <a href="javascript:void(0)" onClick={(e)=> setDropdown(!dropdown)}>Relatório</a>
                    <SubMenu display={dropdown} >
                      <li><Link to="/cardapio" onClick={(e)=> setDropdown(!dropdown)}>Cardapio</Link></li>
                      <li><Link to="/relatorio" onClick={(e)=> setDropdown(!dropdown)}>Pedidos</Link></li>  
                    </SubMenu>      
                  </li>
              }
          </ul>

          
        </TopNav>
        <Link onClick={handleLogof}>Logof</Link>
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

 