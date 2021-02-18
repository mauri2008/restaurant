import React, {useEffect, useState}from  'react';
import { useSelector } from 'react-redux'
import { FaUtensils } from 'react-icons/fa';
import { format, isBefore, isEqual, setHours, setMinutes,setSeconds , parseISO} from 'date-fns';
import { utcToZonedTime} from 'date-fns-tz'
import pt from 'date-fns/locale/pt';
import  { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

import { UlList, ContainerMain, MenuDay, Context, Icon, AlertBase} from './style';

import Api from '../../services/api'

function Home(){

  const token = useSelector(state=> state.auth.token);
  const dateUser =JSON.parse( localStorage.getItem('user'));

  const [dataMenu, setDataMenu] = useState([]);
  const [menuDay, setMenuDay] = useState([]);
  const [date, setdate] = useState(new Date());

  useEffect(()=>{
    
    async function readMenu(){

      const response = await Api.get(`/request?id_user=${dateUser.id}`)
      const {data} = response;

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

  async function handleDelete(id){
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <AlertBase className='custom-ui'>
            <h1>Atenção</h1>
            <p>Deseja Realmente cancelar este pedido?</p>

            <div className="btnAlert">
              <button
                onClick={() => {
                  handleClickDelete(id);
                  onClose();
                }}
              >
                Sim
              </button>
              <button className="close" onClick={onClose}>Não</button>
            </div>
            
          </AlertBase>
        );
      }
    });
  }

  async function handleClickDelete(id){
    try{
      console.log(id)
      const request = await Api.delete(`/request?id=${id}`);
      console.log(request);

      toast.success('Pedido cancelado com sucesso!')

      setTimeout(() => {
        document.location.reload();
      }, 5000);
    } catch(erro){
      toast.error('Ocorreu um erro ao remover este pedido!')
    }
    

  }


  return(   

    <ContainerMain>
      <ToastContainer/>
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
                  <div>
                    <p>{format(itens.menu.service_data, "d 'de' MMMM",{locale: pt })}</p>
                    <a href="#" onClick={()=>{handleDelete(itens.id)}}>Cancelar</a>
                    
                  </div>
                  
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