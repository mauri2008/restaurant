import React, {useEffect, useState}from  'react';
import { useSelector } from 'react-redux'
import { FaUtensils } from 'react-icons/fa';
import {UlList, ContainerMain, MenuDay, Context, Icon} from './style';
import {format, isBefore, isEqual, setHours, setMinutes,setSeconds , parseISO} from 'date-fns';
import { utcToZonedTime} from 'date-fns-tz'
import pt from 'date-fns/locale/pt';

import Api from '../../services/api'

function Home(){

    const token = useSelector(state=> state.auth.token);
  const dateUser =JSON.parse( localStorage.getItem('user'));

  const [dataMenu, setDataMenu] = useState([]);
  const [menuDay, setMenuDay] = useState([]);
  const [date, setdate] = useState(new Date());

  useEffect(()=>{
    
    async function readMenu(){

      const response = await Api.get('/request')
      const {data} = response;
      console.log(data);
      data.map((dataAlter)=>{
        dataAlter.menu.service_data = utcToZonedTime( dataAlter.menu.service_data )
      })

      const menus = data.filter((item)=>{
        
        if(isBefore(date, utcToZonedTime(item.menu.service_data))){
        return {
          id: item.id,
          date: utcToZonedTime(item.menu.service_data),
          option: item.option,

        }
      }
      });
      
       const menuday = data.filter((menuNow)=>{

        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const checkData = setSeconds(setMinutes(setHours(date, 3),0),0);
        const compareDate = utcToZonedTime(checkData,timezone)

        const dateRegister = format(utcToZonedTime(menuNow.menu.service_data), 'dd/MM/yyyy');
        const dateNow =  format(utcToZonedTime(compareDate), 'dd/MM/yyyy');

      //   console.log(isEqual(dateRegister, dateNow))
        
        if(format(utcToZonedTime(menuNow.menu.service_data), 'dd/MM/yyyy') === format(utcToZonedTime(compareDate), 'dd/MM/yyyy')){
      
          return menuNow
        }

       });

      console.log(menuday);
      console.log(menus)


      setMenuDay(menuday)
      setDataMenu(menus)

    }

    readMenu();
  },[]);

  return(   
    <ContainerMain>
      {
        menuDay.map((itemDay)=>(

            <MenuDay key={itemDay.id}>
              <h3>Prato do dia </h3>
              <h2>{itemDay.option }</h2>
              <span>{ format(itemDay.menu.service_data, "d 'de' MMMM",{locale: pt })}</span>
            </MenuDay>

        ))
      }


      <UlList>
        {
          dataMenu.map((itens)=>(
                      
            <li key={itens.id}>
              <Icon>
                <FaUtensils/>
              </Icon>
              <Context>
                  <p>{format(itens.menu.service_data, "d 'de' MMMM",{locale: pt }) }</p>
                  <span>{itens.option}</span>
              </Context>

            </li>            

          ))

        }


      </UlList>  

    </ContainerMain>
    
  );
}

export default Home;