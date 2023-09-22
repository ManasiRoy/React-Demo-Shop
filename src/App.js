//App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import CartPage from './CartPage';
import { CartProvider } from './Cart';

function App() {
  return (
    <Router>
      <nav>
        <ul>

          <li>
            <Link to="/">ProductList</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <CartProvider>

        <Routes>
          <Route exact path="/" Component={ProductList} />
          <Route path="/products/:id" Component={ProductDetail} />
          <Route path="/cart" Component={CartPage} />

        </Routes>
      </CartProvider>
    </Router>


  );
}

export default App;