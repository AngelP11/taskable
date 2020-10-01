import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

/* Pages */
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Password from '../pages/Password'
import ExpandedList from '../pages/ExpandedList'
import Error from '../pages/Error'
import Index from '../pages/Index'

/* Components */
// import Layout from './Layout'
// import Guilines from '../pages/Guilines';

export default function App() {
  return (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Index} exact />
			<Route path="/taskable" component={Home} />
			<Route path="/taskable/login" component={Login} />
			<Route path="/taskable/password" component={Password} />
			<Route path="/taskable/register" component={Register} />
			<Route path="/taskable/expanded-list" component={ExpandedList} />
			<Route component={Error} />
		</Switch> 
	</BrowserRouter>
  );
}

