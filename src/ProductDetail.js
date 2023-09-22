// ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from './api';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProductById(id)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <h1>Product Detail</h1>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetail;
