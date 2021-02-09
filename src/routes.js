import React from 'react'
import { Route, Switch} from 'react-router-dom';

import Login from './pages/login';
import Home from './pages/Home';
import User from './pages/User';

function routes(){

  return(
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="home" component={Home}/>
      <Route path="users" component={User}/>
    </Switch>
  );
}

export default routes;