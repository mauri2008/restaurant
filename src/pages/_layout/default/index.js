import React from 'react';
import PropType from 'prop-types';

import { Wrapper } from './style';

export default function DefaultLayout({children}) {
  return (
    <Wrapper>
       {children}
    </Wrapper>
  );
}

DefaultLayout.prototype = {
  children: PropType.element.isRequired,
}

 