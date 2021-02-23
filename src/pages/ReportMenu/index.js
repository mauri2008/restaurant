import React, {useState, useEffect} from  'react';
import { useSelector, } from 'react-redux'
import { FaFilter, FaRegFilePdf , FaTrashAlt } from 'react-icons/fa';
import { 
  ContainerMain, 
  StatusMeats , 
  ListMenu,
  Info,
  ToolMenu

} from './style';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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
      const response = await Api.get('/menu?provider=true');
      const {data} = response;
      let groupDate = [];
      data.map((itemAlter)=>{
        itemAlter.service_data = utcToZonedTime(itemAlter.service_data)
      })
      data.map((itemAlter)=>{
        itemAlter.service_data = format(itemAlter.service_data, "dd-MM-yyyy",{locale: pt}) 
        groupDate.push(itemAlter.service_data);
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

  const handleRemove = async (id)=>{
    console.log(id);
     await Api.delete('/menu',{
       data:{
         id
       }
     })
      .then((response)=>{
        toast.success('Cardápio removido com sucesso!', {
          onClose:()=> document.location.reload()
        });
        
      })
      .catch((error)=>{
        if (error.response){
          const {status, data} = error.response;

          toast.error(`Erro: ${data.error}`);
        }
      });



  }


  return(   
    <ContainerMain>
      <ToastContainer/>
      <h1>Relatório de Cardápio</h1>
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
            <td>Principal</td>
            <td>Opção</td>
            <td></td>
          </tr>
        {

          data.map((item)=>(
            <tr key={item.id}>
              <td>{`${item.turno}º`}</td>
              <td>{item.service_data}</td>
              <td>{item.main}</td>
              <td>{item.options}</td>
              <td><button onClick={()=>handleRemove(item.id)}><FaTrashAlt/> Remover</button></td>
              
            </tr>
          ))
        }    
      </ListMenu> 


    </ContainerMain>
    
  );
}

export default NewMenu;