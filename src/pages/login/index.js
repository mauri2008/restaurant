
import React, {useState , useEffect} from 'react';
import { useDispatch} from 'react-redux';
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
  
  const [mensage, setMensage] = useState(false)

  async function  handleSubmit  ({email, password}) {

    try{
      const response = await api.post('/sessions', {
        email,
        password,
      })
      
      if(response){

        const {user, token} = response.data;
        dispatch({
          type:'SET_TOKEN',
          payload: {token:token}
          
        });
        dispatch({type: 'SIGN_IN'});
        dispatch({
          type: 'SET_USER',
          payload:{user:response.user}
        });

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        
        <Redirect to="/home"/>
      }
    }catch (error){
      console.log(error);
      setMensage(true);
    }

  }

    return(

      <>
        <img src="https://energiasirius.com/wp-content/uploads/2020/04/solargroup-logo.png" />
        
        {(mensage)? <p>Usuario ou Senha Incorreta </p> : ''}
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Seu e-mail"/>
          <Input name="password" type="password" placeholder="Sua senha secreta"/>

          <button type="submit">Acessar</button>
          {/* <Link to="/register">Novo usuário</Link> */}
        </Form>
      </>
    );
  
};
