"use client";
import { useEffect, useState } from 'react';

export default function Page() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProduct(data.products);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {
        product.map(item => (
          <h4 key={item.id}>Name : {item.title}, Price : {item.price}</h4>
        ))
      }
    </div>
  );
}
