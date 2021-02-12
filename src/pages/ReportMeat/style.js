import styled from 'styled-components';
import { darken } from 'polished';


export const ContainerMain = styled.div`

  width:100%;
  display:flex;
  align-items:center;
  flex-direction:column;


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
  justify-content:center;
`;

export const CardStatus = styled.div`
  width: 210px;
  height: 110px;
  margin: 10px;
  border: 1px solid #c3c3c3;
  border-radius: 5px;
  box-shadow: 4px 6px 5px #c3c3c3;
  display:flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;


  & p{
    font-size: 35px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;

  }
  & small{
    font-size: 16px;
    margin-top: 3px;
    font-weight: bold;
  }

`;

export const ListMenu = styled.table`
  width: 100%;
  margin-top: 50px;

 & tr{

   border-bottom: 1px solid #c3c3c3;
  
  & td{
    text-align: center;
    border-bottom: 1px solid #c3c3c3;
    padding: 5px 0px 10px;

  }
 }


`;


