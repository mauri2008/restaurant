import React from 'react';

import {Loading} from './style'
import GifLoading from '../../image/loading.gif'

function Cloading(){
  return (<Loading>
     <img src={GifLoading} alt="Carregando"/>
  </Loading>)
}

export default Cloading;