import React, {useState, useEffect} from  'react';
import { useSelector, } from 'react-redux'
import { FaFilter} from 'react-icons/fa';
import {DivFilter, ContainerMain, MenuDay, StatusMeats , CardStatus, ListMenu} from './style';
import Api from   '../../services/api'
import { utcToZonedTime} from 'date-fns-tz'
import {format} from 'date-fns'
import pt from 'date-fns/locale/pt'


function NewMenu(){

  const [data, setData] = useState([]);

  useEffect(()=>{
    async function initial(){
      const response = await Api.get('/request');
      const {data} = response;
      data.map((itemAlter)=>{
        itemAlter.menu.service_data = utcToZonedTime(itemAlter.menu.service_data)
      })
      setData(data);
    }
    initial();
  }, []);

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
        {
          data.map((item)=>(
            <tr>
              <td>{format(item.menu.service_data, "dd/MM/yyyy",{locale: pt })}</td>
              <td>{item.user.name}</td>
              <td>{item.option}</td>
            </tr>
          ))
        }

         
      
      </ListMenu> 

    </ContainerMain>
    
  );
}

export default NewMenu;