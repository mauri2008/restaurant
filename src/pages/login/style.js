
import Styled from 'styled-components';

import fundo from '../../image/fundo.jpg';

export const Container = Styled.div`
  height: 100vh;
  background-size:auto;
  background-image:url(${fundo});
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
 
`

export const Elements   = Styled.div`
  width: 400px;
  height: 300px;
  background: rgba(233,233,233,0.8);
  border-radius: 5px;


`;
export const Form       = Styled.form`
  display:flex;
  flex-direction: column;
  align-items:center;
  padding:7% 0px;
  
  img{
    width:160px;
    margin-bottom:1px;
  }
`;
export const InputEmail = Styled.input.attrs(props => ({
  type:"email",
  placeholder: "Email"
}))`
  
  width: 80%;
  height: 35px;
  border-radius:5px;
  border: 1px solid #ccc;
  margin-bottom:15px;
  padding-left:15px;
  font-size: 15px;
 
  

`; 
export const InputSenha = Styled.input.attrs(props =>({
  type:"password",
  placeholder: "Senha"
})) `
  width: 80%;
  height: 35px;
  border-radius:5px;
  border: 1px solid #ccc;
  margin-bottom:15px;
  padding-left:15px;
  font-size: 15px;

`; 
export const ButtonLog  = Styled.button.attrs({
  type:"button"
})`
  width:30%;
  height: 30px;
  border-radius:5px;
  background: #75d3d1;
  border:none;
  cursor:pointer;
  color:#FFF;
  font-weight: bold;
  font-size: 15px;
  margin-top: 10px;

  &:hover{
    opacity: 0.8;
  }
`;

export const Message = Styled.p`
  color: #ff3333;
  font-size:13px;
  font-weight: bold;
  font-family: "Roboto",sans-serif;]


`;