import React, { useState } from  'react';
import {ContainerMain, MenuDay} from './style';
import {Form, Input,Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Api from '../../services/api';

function NewMenu(){

  const schema = Yup.object().shape({
    serviceData: Yup.date().required('Informe data Valida!'),
    main: Yup.string().required('Informe o Prato Pricipal do Dia'),
    options: Yup.string().required('Informe o prato opcional do Dia')
  });

  async function handleSubit({serviceData, main, options}, {resetForm}){
    console.log('teste');
    const turno = document.querySelector('#turnos').value;
     try{
      const response = await Api.post('/menu', {
        serviceData,
        main,
        options,
        turno
      })

      toast.success('Menu Cadastrado com sucesso!');
      resetForm();

    }catch(error){

      toast.error('Erro ao inserir cadastro!');
    }
  }
  const option = [
    {id: '0', title:''},
    {id: '1', title: '1ª Turno'},
    {id: '2', title: '2ª Turno'},
    {id: '3', title: '3ª Turno'},
  ]

  return(   
    <ContainerMain>

      <MenuDay>
        <h2>Novo Cardápio</h2>
      </MenuDay>
      <ToastContainer/>
      <Form schema={schema} onSubmit={handleSubit} >
          <Input type="date" name="serviceData"  placeholder="Data"/>
          <Select name="turnos" options={option}/>
          <Input type="text" name="main"  placeholder="Prato Principal"/>
          <Input type="text" name="options" placeholder="Prato Opcional"/>

          <button type="submit"> Cadastrar </button>
      </Form>  

    </ContainerMain>
    
  );
}

export default NewMenu;