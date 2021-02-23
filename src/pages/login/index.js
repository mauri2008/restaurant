
import React, {useState , useEffect} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import {Form, Input} from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {Redirect} from 'react-router-dom'

import api from '../../services/api';

import Loading from '../../components/loading'




export default function Login (){

  const schema = Yup.object().shape({
    email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().required('A Senha é Obrigatória'),
  });
  
  const dispatch = useDispatch();
  const provider = useSelector(state=> state.auth.provider)
  
  const [loading, setLoading] = useState(false);

  async function  HandleSubmit  ({email, password}) {
    setLoading(true);
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
          payload:{user:user}
        });
        dispatch({
          type: 'SET_PROVIDER',
        });


        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        document.location.reload()
                
        }
      }
    catch (error){
      console.log(error);
      toast.error('Usuário ou Senha incorreto!');
    }
    setLoading(false);
  }

    return(

      <>
        

        <img src="https://energiasirius.com/wp-content/uploads/2020/04/solargroup-logo.png" />
        
        <ToastContainer/>
        <Form schema={schema} onSubmit={HandleSubmit}>
          <Input name="email" type="email" placeholder="Seu e-mail"/>
          <Input name="password" type="password" placeholder="Sua senha secreta"/>

          <button type="submit">Acessar</button>
          {/* <Link to="/register">Novo usuário</Link> */}
        </Form>
        
        {(loading)? <Loading/>: ''}

      </>
    );
  
};
