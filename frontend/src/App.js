import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    
    <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/products" component={Products} />
    </div>
    </BrowserRouter>
  );
}

export default App;
