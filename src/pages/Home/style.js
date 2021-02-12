import styled from 'styled-components';
import { darken } from 'polished';

export const MenuDay = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #c3c3c3;

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


`;


export const UlList = styled.ul`
  width: 531px;
  
  li{
    border: 1px solid #c2c2c2;
    border-radius: 5px;
    padding: 20px 30px;
    box-shadow: 3px 3px 6px rgba(0,0,0,0.17);
    margin-top: 18px;
    display: flex;
    flex-direction: row;
    }

  }
`;

export const Icon = styled.div`

  width: 40px;
  height: 40px;
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items:center;
  font-size: 40px;
  color: #7359c1;
`;
export const Context = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  & p{
    font-weight: normal;
    color: #7359c1;
    margin-bottom: 3px;
  }

  & span{
    color: #7e7e7e;
  }
`;


