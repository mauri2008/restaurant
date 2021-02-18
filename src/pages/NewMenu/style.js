import styled from 'styled-components';
import { darken } from 'polished';

export const MenuDay = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  padding-bottom: 20px;


  & h3{
    margin-bottom: 5px;
  }

  & h2{
    margin-bottom: 10px;
  }

  & span{
    font-size: 12px;
    color: #7e7e7e;
  }
`;

export const ContainerMain = styled.div`

  width:549px;
  display:flex;
  align-items:center;
  flex-direction:column;

  & form{
    width: 531px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    & input{
      height: 40px;
      margin-top: 20px;
      border: 1px solid #7e7e7e;
      border-radius: 5px;
      padding-left: 10px;
    }
    & select{
      height: 40px;
      margin-top: 20px;
      border: 1px solid #7e7e7e;
      border-radius: 5px;
      padding-left: 10px;
    }
    
    & button{
      height: 45px;
      background: #54A0F6;
      margin-top: 20px;
      color: #fff;
      font-size:20px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      border:none;
      border-radius: 5px;
      transition: background 0.2s;

      &:hover{
        background: ${darken(0.1, '#54A0F6')}
      }
    }

  }
`;






