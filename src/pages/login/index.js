
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Form, Input} from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '../../services/api';



export default function Login (){

  const schema = Yup.object().shape({
    email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().required('A Senha é Obrigatória'),
  });
  
  const dispatch = useDispatch();



  async function  handleSubmit  ({email, password}) {

      const response = await api.post('/sessions', {
        email,
        password,
      })
      if(response){
        dispatch({
          type: 'SIGN_IN'
        });

        <Redirect to="/home"/>
      }
  }



    return(
      <>
        <img src="https://energiasirius.com/wp-content/uploads/2020/04/solargroup-logo.png" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Seu e-mail"/>
          <Input name="password" type="password" placeholder="Sua senha secreta"/>

          <button type="submit">Acessar</button>
          {/* <Link to="/register">Novo usuário</Link> */}
        </Form>
      </>
    );
  
};
