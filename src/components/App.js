import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

/* Components */
import Home from '../pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}

