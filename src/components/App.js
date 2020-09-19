import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

/* Pages */
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Error from '../pages/Error'

/* Components */
import Layout from './Layout'
import Guilines from '../pages/Guilines';

export default function App() {
  return (
    <BrowserRouter>
	    <Switch>
	      <Route path="/" component={Guilines} exact />
	      <Route path="/login" component={Login} />
	      <Route path="/register" component={Register} />
	      <Route component={Error} />
	    </Switch> 
    </BrowserRouter>
  );
}

