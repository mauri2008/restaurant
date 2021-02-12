import React from  'react';

import {H1, UlList, ContainerMain, ButtonRegister} from './style';


function listMeat(){


  return(   
    <ContainerMain>

      <H1>Lista de Refeições </H1> 

      <UlList>
        
          <li>
            <article>
              <p>10/02/2021</p>
              <a href="#">Cancelar</a>
            </article>
                        
            <form>
              
              <div><input name="opcao1" type="Radio"/> Carne de Panela <br/></div>
              <div><input name="opcao1" type="Radio"/> Salsicha ao molho<br/></div>
              <div><input name="opcao1" type="Radio"/> Ovo  <br/></div>             
            </form>
          </li>
          <li>
            <article>
              <p>10/02/2021</p>
              <a href="#">Cancelar</a>
            </article>
                        
            <form>
              
              <div><input name="opcao1" type="Radio"/> Carne de Panela <br/></div>
              <div><input name="opcao1" type="Radio"/> Salsicha ao molho<br/></div>
              <div><input name="opcao1" type="Radio"/> Ovo  <br/></div>             
            </form>
          </li>
          <li>
            <article>
              <p>10/02/2021</p>
              <a href="#">Cancelar</a>
            </article>
                        
            <form>
              
              <div><input name="opcao1" type="Radio"/> Carne de Panela <br/></div>
              <div><input name="opcao1" type="Radio"/> Salsicha ao molho<br/></div>
              <div><input name="opcao1" type="Radio"/> Ovo  <br/></div>             
            </form>
          </li>
          <li>
            <article>
              <p>10/02/2021</p>
              <a href="#">Cancelar</a>
            </article>
                        
            <form>
              
              <div><input name="opcao1" type="Radio"/> Carne de Panela <br/></div>
              <div><input name="opcao1" type="Radio"/> Salsicha ao molho<br/></div>
              <div><input name="opcao1" type="Radio"/> Ovo  <br/></div>             
            </form>
          </li>
          <li>
            <article>
              <p>10/02/2021</p>
              <a href="#">Cancelar</a>
            </article>
                        
            <form>
              
              <div><input name="opcao1" type="Radio"/> Carne de Panela <br/></div>
              <div><input name="opcao1" type="Radio"/> Salsicha ao molho<br/></div>
              <div><input name="opcao1" type="Radio"/> Ovo  <br/></div>             
            </form>
          </li>
      
      </UlList>  
      <ButtonRegister> Registrar </ButtonRegister>
    </ContainerMain>
    
  );
}

export default listMeat;