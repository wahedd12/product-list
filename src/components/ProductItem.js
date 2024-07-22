import React from 'react'
import ProductList from './ProductList';

const ProductItem = (props) => {
  return (
    <React.Fragment>
      <h2>{props.name}</h2>
      <p>Price: ${props.price}</p>
      {props.available ? (
        <p>Status: In Stock</p>
      ) : (
        <p>Status: Out of Stock</p>
      )}
 
    </React.Fragment>
   
  );
}

export default ProductItem