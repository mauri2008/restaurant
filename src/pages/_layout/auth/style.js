import styled from 'styled-components';
import { darken } from 'polished';

import fundo from '../../../assets/fundo.jpg';

export const Wrapper = styled.div`
    height: 100%;
    background-image:url(${fundo});
    background-size:auto;
    background-repeat: no-repeat;
    display: flex;
    justify-content:center;
    align-items:center;

    
`;

export const Content = styled.div`
  width: 100%;
  max-width:400px;
  text-align:center;
  background: rgb(255,255,255,0.9);
  padding:25px;
  border-radius:5px;
  
  img {
    width: 185px;
  }

  form {
    display:flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0,0,0,0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: rgba(0,0,0,0.5);
      margin: 0 0 10px;
      
      &::placeholder {
        color: rgba(0,0,0,0.5);
      }
    }

    span{
        color: #f64c75;
        align-self: flex-start;
        margin: 0 0 10px;
        font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #FFF;
      border: 0;
      border-radius: 5px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')}
      }
    }

    a {
      color: #000;
      margin-top: 18px;
      font-size: 16px;
      opacity: 0.6;

      &:hover{
        opacity: 1;
      }
    }
  }
`;
