import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

/* Pages */
import Login from '../pages/Login'
import Register from '../pages/Register'
import Password from '../pages/Password'
import Error from '../pages/Error'

import Tablero from '../pages/Tablero'
import Listas from '../pages/Listas'

/* Components */
// import Layout from './Layout'
// import Guilines from '../pages/Guilines';

const paraBorrar = () => {
	return (
		<>
			<p>Crear una pagina de inicio para mostrar aquí. Las rutas disponibles son:</p>
			<ul>
				<li><Link to="/taskable/login">/taskable/login</Link></li>
				<li><Link to="/taskable/register">/taskable/register</Link></li>
				<li><Link to="/taskable/password">/taskable/password</Link></li>
				<li><Link to="/taskable/listas">/taskable/listas</Link></li>
				<li><Link to="/taskable/tablero">/taskable/tablero</Link></li>
				<li><Link to="/taskable/expanded-list">/taskable/expanded-list</Link></li>
			</ul>
		</>
	)
}


export default function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/taskable" component={paraBorrar} exact />
				<Route path="/taskable/login" component={Login} exact />
				<Route path="/taskable/password" component={Password} exact />
				<Route path="/taskable/register" component={Register} exact />
				<Route path="/taskable/listas" component={Listas} exact />
				<Route path="/taskable/tablero" component={Tablero} exact />
				<Route component={Error} />
			</Switch>
		</BrowserRouter>
	);
}

