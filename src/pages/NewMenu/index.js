import React, { useState } from  'react';
import {ContainerMain, MenuDay} from './style';
import {Form, Input,Select, Check } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Cloading from '../../components/loading'

import Api from '../../services/api';

function NewMenu(){

  const [loading , setLoading] = useState(false);


  const schema = Yup.object().shape({
    serviceData: Yup.date().required('Informe data Valida!'),
    main: Yup.string().required('Informe o Prato Pricipal do Dia'),
    options: Yup.string().required('Informe o prato opcional do Dia')
  });

  async function handleSubit({serviceData, main, options}, {resetForm}){
    const turnos = document.querySelectorAll('#turno');
      setLoading(true);

   
        let setError = false;
        for(let i = 0; i < turnos.length; i++){
            console.log(turnos[i].value);

            if(turnos[i].checked === true){
              await Api.post('/menu', {
                  serviceData,
                  main,
                  options,
                  turno:turnos[i].value,              
              }).catch(function (error){
                
                const {data, status} = error.response;
                toast.error(`Error : ${data.error}`)
                console.log(`Cod. Error: ${status}  dataErro: ${data.error}`);
                setError = true;
                
              })
            }

            if(setError){ break; }                       // console.log(`Data: ${response.data} Status: ${response.status} TextStatus: ${response.statusText}`)
        }
    if(!setError){
      toast.success(`Cardápio cadastrado com sucesso`)
      resetForm();
    }
    setLoading(false);
  }

  return(   
    <ContainerMain>

      <MenuDay>
        <h2>Novo Cardápio</h2>
      </MenuDay>
      <ToastContainer/>
      <Form schema={schema} onSubmit={handleSubit} >
          <Input type="date" name="serviceData"  placeholder="Data"/>
          <div className="check">
            <Check name="turno" value="1" label="1ª turno"/>
            <Check name="turno" value="2" label="2ª turno"/>
            <Check name="turno" value="3" label="3ª turno"/>
          </div>
          <Input type="text" name="main"  placeholder="Prato Principal"/>
          <Input type="text" name="options" placeholder="Prato Opcional"/>

          <button type="submit"> Cadastrar </button>
      </Form> 
      { loading &&
          <Cloading/>
      } 

    </ContainerMain>
    
  );
}

export default NewMenu;