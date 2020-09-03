import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

/* Components */
import Home from '../pages/Home'
import Login from '../pages/Login'
import Error from '../pages/Error'

export default function App() {
  return (
    <BrowserRouter>
	    <Switch>
	      <Route path="/" component={Home} exact />
	      <Route path="/login" component={Login} />
	      <Route component={Error} />
	    </Switch> 
    </BrowserRouter>
  );
}

