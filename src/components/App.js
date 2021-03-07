import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

/* Pages */
import Login from "../pages/Login";
import Register from "../pages/Register";
import Password from "../pages/Password";
import Error from "../pages/Error";
import Tablero from "../pages/Tablero";
import Listas from "../pages/Listas";
import Home from "../pages/Home";
import { Inventory } from "../pages/Inventory/index";
import { Sales } from "../pages/Sales/index";
import { SaleDetails } from "../pages/Sales/SaleDetails";

/* Components */
// import Guilines from '../pages/Guilines';

const paraBorrar = () => {
  return (
    <React.Fragment>
      <p>
        Crear una pagina de inicio para mostrar aquí. Las rutas disponibles son:
      </p>
      <ul>
        <li>
          <Link to="/taskable/login">/taskable/login</Link>
        </li>
        <li>
          <Link to="/taskable/register">/taskable/register</Link>
        </li>
        <li>
          <Link to="/taskable/password">/taskable/password</Link>
        </li>
        <li>
          <Link to="/taskable/home">/taskable/home</Link>
        </li>
        <li>
          <Link to="/taskable/listas">/taskable/listas</Link>
        </li>
        <li>
          <Link to="/taskable/tablero">/taskable/tablero</Link>
        </li>
        <li>
          <Link to="/taskable/inventory">/taskable/inventory</Link>
        </li>
        <li>
          <Link to="/taskable/sales">/taskable/sales</Link>
        </li>
        <li>
          <Link to="/taskable/sales/descripcion-de-la-oden-superwax-n0012">
            /taskable/sales/descripcion-de-la-oden-superwax-n0012
          </Link>
        </li>
        <li>
          <Link to="/taskable/expanded-list">/taskable/expanded-list</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

const paraBorrar2 = () => {
  return (
    <>
      <p>
        Aqui no hay nada compadre, llegate mejor al{" "}
        <Link to="/taskable">tablero</Link>
      </p>
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={paraBorrar2} exact />
        <Route path="/taskable" component={paraBorrar} exact />
        <Route path="/taskable/login" component={Login} exact />
        <Route path="/taskable/password" component={Password} exact />
        <Route path="/taskable/register" component={Register} exact />
        <Route path="/taskable/listas" component={Listas} exact />
        <Route path="/taskable/tablero" component={Tablero} exact />
        <Route path="/taskable/inventory" component={Inventory} exact />
        <Route path="/taskable/sales" component={Sales} exact />
        <Route path="/taskable/sales/:id" component={SaleDetails} exact />
        <Route path="/taskable/home" component={Home} exact />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
