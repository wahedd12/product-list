import React from 'react'
import ProductItem from './ProductItem';


const ProductList = () => {
  const products = [ 
  { id: 1, name: 'Product 1', price: 29.99, available: true },
   { id: 2, name: 'Product 2', price: 49.99, available: false },
   { id: 3, name: 'Product 3', price: 19.99, available: true }
];

  return (

      <div>
       <ul>
        
      {products.map((product, id) => (
          <li key={id}>{product} {id}</li>
        //  <ProductItem key={id}>{product}{id}</ProductItem>
      ))}
       </ul>
       <ProductItem/>
      </div>



  );
}

export default ProductList