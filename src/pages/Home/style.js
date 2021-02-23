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
  width:100%;

  & div{
    width: 100%;
    display:flex;
    justify-content: space-between;
    

    & p{
    font-weight: normal;
    color: #7359c1;
    margin-bottom: 3px;

    }

    & a{
      font-size: 12px;
      color: #7359c1;
      cursor:pointer;
      transition: background 0.5s;
      &:hover{
        color: ${darken(0.3, '#7359C1')}
      }
    }

  }


  & span{
    color: #7e7e7e;
  }
`;

export const AlertBase = styled.div`
  background:rgba(33,33,33,0.6);
  width: 350px;
  height: 200px;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  border-radius:5px;
  color: #e9e9e9;


  & h1{
    margin-bottom: 10px;
  }
  & p{
    margin-bottom:20px
  }
  & .btnAlert{
    width:350px;
    display:flex;

    flex-direction:row;
    justify-content: center;
    

    & button{
      padding: 8px 15px;
      border:none;
      border-radius:5px;
      background:rgba(55,255,55, 0.7);
      color: #fff;
      transition: background 0.3s;

      &:hover{
        background: ${darken(0.1, 'rgba(55,255,55, 0.7)')}
      }
    }

    .close{
      background:rgba(255,55,55, 0.9);
      margin-left:20px;
      color: #fff;
      &:hover{
        background: ${darken(0.1, 'rgba(255,55,55, 0.9)')}
      }
    }

  }

`;

export const BackGroundHome = styled.div`
  height: 80vh;
  width: 960px;
  display: flex;
  justify-content: center;
  align-items:center;
  
  & h1{
    font-size:40px;
    font-weight: bold;
    font-family: arial black, sans-serif;
    color: #eee;
  }
`;

