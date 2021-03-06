import React, {useEffect , useState, useMemo} from  'react';
import Api from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import pt from 'date-fns/locale/pt';
import {format, isBefore} from 'date-fns';
import { utcToZonedTime} from 'date-fns-tz'

import {H1, UlList, ContainerMain, ButtonRegister, Loading} from './style';

import Cloading from '../../components/loading'


function ListMeat(){

  const [listMenu , setListMenu] = useState([]);
  const [date, setDate] = useState(new Date());
  const [loading , setLoading] = useState(false);

  const dateUser =JSON.parse( localStorage.getItem('user'));


  
  const dateFormatted = useMemo(()=> format(date, "d 'de' MMMM",{locale: pt }), [date])
  
  useEffect(()=>{
    async function loadMenu(){
      
      const provider = (dateUser.provider)? '&provider=true':'';

      const response = await Api.get(`/menu?turno=${dateUser.turno}${provider}`);
      const responseRest = await Api.get(`/request?id_user=${dateUser.id}`);
      const {data} = response;


      data.map((date)=>{
        date.service_data = utcToZonedTime(date.service_data);
      });

      const teste = data.filter((item)=>{

        if(isBefore(date, item.service_data)){

          const  compar = responseRest.data.find(resquet=> resquet.menu.id === item.id)

          if(!compar){return item}
        }
      })
      setListMenu(teste);

    }
    loadMenu();
  },[date] );


  async function handleRegister(){
    setLoading(true);
    const checkBox = document.querySelectorAll('#option');

    let data = [];
    for(let i=0; i< checkBox.length; i++){
      if(checkBox[i].checked === true){      
        data.push({user_id:dateUser.id, menu_id:checkBox[i].value,option:checkBox[i].dataset.option, turno: dateUser.turno})
      }
    }

    let setErro = false;

    const response = await Api.post(
          '/request',{ data})
          .catch(function (error){
            const{data, status} = error.response;
            toast.error(`Error : ${data.error}`)
            setErro = true;
           });
    
    if(!setErro){
       toast.success('Lista Registrada com Sucesso ');
      //  setTimeout(() => {
      //    document.location.reload();
      //  }, 5000);
    }
    // if(response.data){
    //   toast.success('Lista Registrada com Sucesso ');
    //   setTimeout(() => {
    //     document.location.reload();
    //   }, 5000);
    // }else{
    //   toast.error('Ops! tivemos uma erro ao registrar seu pedido, tente novamente.')
    // }
    setLoading(false);
  }

  return(   
    
    <ContainerMain> 
      
      <ToastContainer/>

      <H1>Lista de Refeições </H1> 

      <UlList>
          {
            (listMenu.length > 0)? (
              
            listMenu.map(menu=>(
              
              <li key={menu.id}>
                <article>
                  
                  <p>{dateUser.provider?` ${menu.turno}º turno`:''} { format(menu.service_data, "d 'de' MMMM",{locale: pt }) }</p>
                  {/* <a href="#">Cancelar</a> */}
                </article>
                            
                <form>
                  
                  <div><input name="opcao1" id="option" type="Radio" value={menu.id} data-option={menu.main}/> {menu.main}<br/></div>
                  <div><input name="opcao1" id="option" type="Radio" value={menu.id} data-option={menu.options}/> {menu.options}<br/></div>
                  <div><input name="opcao1" id="option" type="Radio" value={menu.id} data-option="ovo"/> Ovo  <br/></div> 

                </form>
              </li>
            ))
            ):(<h3 className="notMeat">Nenhuma refeição foi encontrada.</h3>)
          }
        
      </UlList>
      { 
      (listMenu.length > 0  && !dateUser.provider)? (
          <ButtonRegister onClick={handleRegister}> Registrar </ButtonRegister>
      ):''}
      { loading &&
          <Cloading/>
      }
      
    </ContainerMain>
    
  );
}

export default ListMeat;