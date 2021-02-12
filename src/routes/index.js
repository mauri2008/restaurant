import React from 'react'
import { Switch} from 'react-router-dom';

import Route from './Route';

import Login from '../pages/login';
import Home from '../pages/Home';
import User from '../pages/User';
import listMeat from '../pages/listMeat';

function routes(){

  return(
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/home" component={Home} isPrivate/>
      <Route path="/users" component={User} isPrivate/>
      <Route path="/listmeats" component={listMeat} isPrivate/>

    </Switch>
  );
}

export default routes;