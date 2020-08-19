import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

/* Pages */
import Home from '../pages/Home'

/* Components */
import Layout from './Layout'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

