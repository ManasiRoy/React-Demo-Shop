// ProductList.js
import React, { useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from './api';
// import { useCart } from './Cart';
import CartContext from "./Cart";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const {addToCart} = useContext(CartContext);

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  
  return (
    <div className='container productList'> 
      <h1 className='display-4 mb-5'>Product List</h1>
      <ul className='row'>
        {products.map((product) => (
          <div className="col-md-4 mb-5">
          <li key={product.id} className='border rounded-2'>
            <h3 className='mb-4'><Link to={`/products/${product.id}`}>{product.title}</Link></h3>
            <img src={product.image} alt='product-image'/>
            <button onClick={() => addToCart(product)} className='btn btn-dark'>Add to Cart</button>
           
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

