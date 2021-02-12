import React from  'react';
import { useSelector } from 'react-redux'
import { FaUtensils } from 'react-icons/fa';
import {UlList, ContainerMain, MenuDay, Context, Icon} from './style';

function Home(){

  const token = useSelector(state=> state.auth.token);
  const user = useSelector(state=>state.auth.user);
  
  console.log(user);
  return(   
    <ContainerMain>

      <MenuDay>
        <h3>Prato do dia </h3>
        <h2>Frango Assado</h2>
        <span>11/02/2021</span>
      </MenuDay>

      <UlList>
        
          <li>
            <Icon>
              <FaUtensils/>
            </Icon>
            <Context>
                <p>12/02/2021</p>
                <span>Carne de Panela</span>
            </Context>

          </li>

      </UlList>  

    </ContainerMain>
    
  );
}

export default Home;