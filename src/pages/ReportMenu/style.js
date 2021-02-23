import styled from 'styled-components';
import { darken } from 'polished';


export const ContainerMain = styled.div`

  width:100%;
  display:flex;
  align-items:center;
  flex-direction:column;

  & h1{
    margin-top: 20px;
    margin-bottom:20px;
  }

`;

export const MenuDay = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const DivFilter = styled.div`
  border: 1px solid #c5c5c5;
  padding: 8px;
  border-radius: 5px;

& em{
  color:#A5A5A5;
}

& input{
  border: none;
  margin-left:12px
}
`;

export const StatusMeats = styled.div`

  width: 100%;

  margin-top: 30px;
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  color: #747474;

  .selectSearch{

    & select{
      width: 150px;
      height: 25px;
      font-size: 12px;
      margin-left: 10px;
      padding:0px 5px; 
      border: 1px solid #c3c3c3;
      border-radius: 5px;
      color: #747474;

    }
    & button{
      height:25px;
      margin-left:15px;
      padding: 2px 15px;
      font-size:12px;
      border:none;
      border-radius: 3px;
      background:#3a7bec; 
      color:#FFF;
      transition: background .2s;

      &:hover{
        background:${darken(0.1, '#3a7bec')}
      }

      & svg{
        margin-right: 5px;
        
      }
    }
  }
`;



export const ListMenu = styled.table`
  width: 100%;
  margin-top: 20px;

 & tr{

   border-bottom: 1px solid #c3c3c3;
  
  & td{
    text-align: left;
    border-bottom: 1px solid #c3c3c3;
    padding-top:10px;
    padding-bottom: 10px;
    padding-left: 8px;

    & button{
      border: none;
      background: #ff9999;
      color: #fff;
      font-size: 12px;
      padding: 5px;
      border-radius: 3px;
      
      &:hover{
        background: ${darken(0.1, '#ff9999')}
      }
    }
  }
 }


`;


export const Info =  styled.p`
    background: ${(props) => props.color};
    padding: 5px;

`;

export const ToolMenu = styled.div`

  width:100%;
  margin-top: 25px;
  display:flex;
  justify-content:flex-end;
  font-size: 18px;
  padding-right: 10px;

  & a{
    color: red;
  }
`;