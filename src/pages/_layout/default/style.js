import styled from 'styled-components';

export const Wrapper = styled.div`
    
    display:flex;
    flex-direction:column;
`;




export const NavGate = styled.nav`
  height: 53px;
  background: #FCA33C;
  width: 100%;
  display: flex;
  align-items:center;
  justify-content:center;
  position: fixed;
  

  a{
    padding: 2px 10px;
    display:inline-block;   
    color: #fff;
    font-weight: bold;
    &:hover{
      color:#6a6a6a; 
    }
  }
`;

export const TopNav = styled.div`
   width: 900px;
   display:flex;
   align-items:center;


   img{

   }

   ul{
     padding: 0;
     margin-left: 30px;
     list-style:none;
     li{
       display:inline;

       a{
         padding: 2px 10px;
         display:inline-block;
         
         color: #fff;
         font-weight: bold;
         &:hover{
           color:#6a6a6a; 
         }
       }
     }
   }


`;

export const ContainerData = styled.div`
  height:100%;
  width: 100%;
  display:flex;
  justify-content: center;
   margin-top:53px;
   

`;

export const Element = styled.div`

   width: 960px;
   display: flex; 
   justify-content:center;
   padding-bottom:30px;
   

`;

