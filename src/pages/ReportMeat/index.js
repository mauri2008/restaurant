import React, {useState, useEffect} from  'react';
import { useSelector, } from 'react-redux'
import { FaFilter, FaRegFilePdf } from 'react-icons/fa';
import { 
  ContainerMain, 
  StatusMeats , 
  ListMenu,
  Info,
  ToolMenu

} from './style';

import { utcToZonedTime} from 'date-fns-tz'
import {format} from 'date-fns'
import pt from 'date-fns/locale/pt'
import {Form, Select} from '@rocketseat/unform';
import Api from   '../../services/api'



const optionsTurno = [

  {id: '0', title:'Turno'},
  {id: '1', title:'1ª turno'},
  {id: '2', title:'2ª turno'},
  {id: '3', title:'3ª turno'}
]

function NewMenu(){

  const [data, setData] = useState([]);
  const [optionDate, setOptionDate] = useState([])
  const [optionFull, setOptionFull] = useState([]);

  useEffect(()=>{
    async function initial(){
      const response = await Api.get('/request');
      const {data} = response;
      let groupDate = [];
      data.map((itemAlter)=>{
        itemAlter.menu.service_data = utcToZonedTime(itemAlter.menu.service_data)
      })
      data.map((itemAlter)=>{
        itemAlter.menu.service_data = format(itemAlter.menu.service_data, "dd-MM-yyyy",{locale: pt}) 
        groupDate.push(itemAlter.menu.service_data);
      })


      let jaVisto = {};
      let deVoltaArray = groupDate.filter((elem)=>{
        return jaVisto.hasOwnProperty(elem) ? false : (jaVisto[elem] = true);
      })

      let ValueDate = [{id:'', title:'Data'}]
      deVoltaArray.map((group)=>{
        ValueDate.push({id:group  , title:group})
      });

      setOptionDate(ValueDate)
      setOptionFull(data);
      setData(data);

    }
    initial();
  }, []);

  const handleSearch = () =>{
    const valueData = document.querySelector("#searchData").value;
    const valueTurno = document.querySelector("#searchTurno").value;

    if(valueData || valueTurno>0){

        let resultSeach = optionFull.filter((itemSeach)=>{
         return itemSeach.menu.service_data === valueData || itemSeach.turno === valueTurno
       })

      setData(resultSeach);
    
    }else{
      setData(optionFull);
    }



  }



  return(   
    <ContainerMain>

      <StatusMeats>
        <p>10 of 20</p>
        <div className="selectSearch">
          <Form onSubmit={handleSearch}>
            <Select name="searchData" placeholder="Data" options={optionDate}/>
            <Select name="searchTurno" placeholder="Turno" options={optionsTurno}/>
            <button><FaFilter/> Filtrar </button>
          </Form>
        </div>
      </StatusMeats>
      <ToolMenu>
        <a ><FaRegFilePdf/></a>
      </ToolMenu>

      <ListMenu>
          <tr>
            <td>Turno</td>
            <td>Data</td>
            <td>Colaborador</td>
            <td>Pedido</td>
            <td>Atendido</td>
          </tr>
        {

          data.map((item)=>(
            <tr>
              <td>{`${item.turno}º`}</td>
              <td>{item.menu.service_data}</td>
              <td>{item.user.name}</td>
              <td>{item.option}</td>
              <td>{item.attended ? <Info color={'#FFCC99'}>Atendido</Info>: <Info color={'#99FF99'}>Em Aberto</Info>}</td>
            </tr>
          ))
        }    
      </ListMenu> 


    </ContainerMain>
    
  );
}

export default NewMenu;