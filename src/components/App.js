import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

/* Pages */
import Login from '../pages/Login'
import Register from '../pages/Register'
import Password from '../pages/Password'
import ExpandedList from '../pages/ExpandedList'
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
			<p>/taskable/login</p>
			<p>/taskable/register</p>
			<p>/taskable/password</p>
			<p>/taskable/listas</p>
			<p>/taskable/tablero</p>
			<p>/taskable/expanded-list</p>
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
			<Route path="/taskable/expanded-list" component={ExpandedList} exact />
			
			<Route path="/taskable/listas" component={Listas} exact />
			<Route path="/taskable/tablero" component={Tablero} exact />
			<Route component={Error} />
		</Switch> 
	</BrowserRouter>
  );
}

