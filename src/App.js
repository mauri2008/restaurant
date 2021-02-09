import React from 'react';
import {Container , Elements, Form, InputEmail, InputSenha, ButtonLog} from './style';

function App(){

  return(
    <Container>
      <Elements>
        <Form>
          <img src="https://energiasirius.com/wp-content/uploads/2020/04/solargroup-logo.png" />
          <InputEmail />
          <InputSenha />
          <ButtonLog>Logar</ButtonLog>
        </Form>
      </Elements>
    </Container>
  );
};

export default App;