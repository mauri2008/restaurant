import React from  'react';
import { useSelector } from 'react-redux'
import { FaFilter} from 'react-icons/fa';
import {DivFilter, ContainerMain, MenuDay, StatusMeats , CardStatus, ListMenu} from './style';

function NewMenu(){

  const token = useSelector(state=> state.auth.token);
  const user = useSelector(state=>state.auth.user);
  
  console.log(user);
  return(   
    <ContainerMain>

      <MenuDay>
          <DivFilter>
              <em><FaFilter/></em>
              <input type="text" value='' placeholder="Filtrar"/>
          </DivFilter>
      </MenuDay>

      <StatusMeats>

          <CardStatus>
              <p>10</p>
              <small>Principal</small> 
          </CardStatus>
          <CardStatus>
              <p>10</p>
              <small>Opção</small> 
          </CardStatus>
          <CardStatus>
              <p>10</p>
              <small>Pedidos</small> 
          </CardStatus>
          <CardStatus>
              <p>10</p>
              <small>Colaboradores</small> 
          </CardStatus>

      </StatusMeats>

      <ListMenu>
          <tr>
            <td>12/02/2020</td>
            <td>Alexandre</td>
            <td>Principal</td>
            <td>Frango Assado</td>
          </tr>
          <tr>
            <td>12/02/2020</td>
            <td>Alexandre</td>
            <td>Principal</td>
            <td>Frango Assado</td>
          </tr>
          <tr>
            <td>12/02/2020</td>
            <td>Alexandre</td>
            <td>Principal</td>
            <td>Frango Assado</td>
          </tr>
          <tr>
            <td>12/02/2020</td>
            <td>Alexandre</td>
            <td>Principal</td>
            <td>Frango Assado</td>
          </tr>
      
      </ListMenu> 

    </ContainerMain>
    
  );
}

export default NewMenu;