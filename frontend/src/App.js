import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';

function App() {
  return (
    
    <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/products/:id" component={ProductDetail} />
      <Route exact path="/products" component={Products} />
    </div>
    </BrowserRouter>
  );
}

export default App;
