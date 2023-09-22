// CartPage.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from "./Cart";

function CartPage() {
  const {cart, removeFromCart} = useContext(CartContext);
  return (
    <div className='container productList'>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id} className='text-start border radius-2'>
              {product.title} - ${product.price}{' '}
              <button onClick={() => removeFromCart(product.id)} className='btn btn-danger ms-3'>Remove</button>
            </li>
          ))}
        </ul>
        
      )}
      <h4>Total: ${cart.reduce((total, item) => total + item.price, 0)}</h4>
          <Link to="/" className='btn btn-info'>Back to Products</Link>
    </div>
  );
}

export default CartPage;
