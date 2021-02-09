import Styled from 'styled-components';


export const Container = Styled.div`
  height: 100vh;
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
 
`

export const Elements   = Styled.div`
  width: 400px;
  height: 300px;
  background: #c3c4;
  border-radius: 5px;

`;
export const Form       = Styled.form`
  display:flex;
  flex-direction: column;
  align-items:center;
  padding:10% 0px;
  
  &:img{
    width:60px
  }
`;
export const InputEmail = Styled.input`
  width: 70%;
  height: 35px;
  border-radius:5px;
  border: 1px solid #ccc;
  margin-bottom:10px;

`; 
export const InputSenha = Styled.input`
  width: 70%;
  height: 35px;
  border-radius:5px;
  border: 1px solid #ccc;
  margin-bottom:10px;
`; 
export const ButtonLog  = Styled.button`
  width:30%;
  height: 30px;
  border-radius:5px;
  background: #75d3d1;
  border:none;
  cursor:pointer;
  color:#FFF;
  font-weight: bold;
  font-size: 15px;

  &:hover{
    opacity: 0.8;
  }
`;