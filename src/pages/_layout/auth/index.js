import React from 'react';
import PropType from 'prop-types';

import { Wrapper, Content } from './style';

export default function AuthLayout({children}) {
  return (
    <Wrapper>
      <Content>
        {children}
      </Content>      
    </Wrapper>
  );
}

AuthLayout.prototype = {
  children: PropType.element.isRequired,
}

 