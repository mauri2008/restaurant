import React from  'react';
import { useSelector } from 'react-redux'
import { FaUtensils } from 'react-icons/fa';
import {FormMenu, ContainerMain, MenuDay} from './style';

function NewMenu(){

  const token = useSelector(state=> state.auth.token);
  const user = useSelector(state=>state.auth.user);
  
  console.log(user);
  return(   
    <ContainerMain>

      <MenuDay>
        <h2>Novo Cardápio</h2>
      </MenuDay>

      <FormMenu>
          <input type="data" value='' placeholder="Data"/>
          <input type="text" value='' placeholder="Prato Principal"/>
          <input type="text" value='' placeholder="Prato Opcional"/>

          <button type="submit"> Cadastrar </button>
      </FormMenu>  

    </ContainerMain>
    
  );
}

export default NewMenu;