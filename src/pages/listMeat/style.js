import styled from 'styled-components';
import { darken } from 'polished';

export const H1 = styled.h1`
  font-weight: bold;
  margin: 30px 0px;
  
`;

export const ContainerMain = styled.div`
  width:549px;
  display:flex;
  align-items:center;
  flex-direction:column;

  .notMeat{
    text-align:center;
    margin: 20px 0px;
  }

`;


export const UlList = styled.ul`
  width: 531px;
  
  li{
    border: 1px solid #c2c2c2;
    border-radius: 5px;
    padding: 10px 30px;
    box-shadow: 3px 3px 6px rgba(0,0,0,0.17);
    margin-top: 18px;

    article{
      width: 100%;
      display: flex;
      justify-content:space-between;
      margin: 10px 0px;

      p{
        font-size:20px;
        color: #7359C1;
      }

      a{ 
        color: #919191;
        font-size: 14px;

        &:hover{
          color: #757575;
        }
      }
    }

    form{
      div{
        margin: 5px 0px;
        color: #7e7e7e;
      }
      
    }



  }
`;


export const  ButtonRegister = styled.button`
    margin-top: 50px;
    width: 531px;
    height:45px;
    background: #1c86ff;
    color: #fff;
    font-family: 'Open_Sans', sans-serif;
    font-size: 18px;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    border: none;
    border-radius: 5px;
    transition: background 0.2s;

    &:hover{
      background: ${darken(0.1,'#1c86ff' )}
    }
`;

