import React from 'react'
import { Switch } from 'react-router-dom';
import {useSelector} from 'react-redux'

import Route from './Route';

import Login from '../pages/login';
import Home from '../pages/Home';
import User from '../pages/User';
import listMeat from '../pages/listMeat';
import NewMenu from '../pages/NewMenu';
import ReportMenu from '../pages/ReportMeat';
import Menu from '../pages/ReportMenu';



function routes(){
  
  return(
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/home" component={Home} isPrivate/>
      <Route path="/users" component={User} isPrivate/>
      <Route path="/listmeats" component={listMeat} isPrivate/>
      <Route path="/novomenu" component={NewMenu} isPrivate/>
      <Route path="/relatorio" component={ReportMenu} isPrivate/>
      <Route path="/cardapio" component={Menu} isPrivate/>
      
    </Switch>
  );
}

export default routes;